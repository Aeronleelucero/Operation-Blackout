(() => {
  'use strict'
  const canvas = document.querySelector('#game')
  const ctx = canvas.getContext('2d', { alpha: false })
  const radar = document.querySelector('#radar')
  const rctx = radar.getContext('2d')
  const $ = (id) => document.getElementById(id)
  const ui = {
    hud: $('hud'), start: $('startScreen'), pause: $('pauseScreen'), result: $('resultScreen'),
    timer: $('timer'), objective: $('objective'), health: $('healthBar'), healthText: $('healthText'),
    armor: $('armorBar'), armorText: $('armorText'), stance: $('stance'), score: $('score'), kills: $('kills'),
    ammo: $('ammo'), reserve: $('reserve'), weaponState: $('weaponState'), crosshair: $('crosshair'),
    hit: $('hitMarker'), feed: $('killFeed'), damage: $('damageVignette'), interaction: $('interaction')
  }

  const MAP = [
    '111111111111111111','100000000000000001','102220011000222001','100000011000000001',
    '100011111110001001','100010000010001001','100010000000001001','100010033330001001',
    '100000030030000001','101110030030111101','100000033330000001','100010000000001001',
    '100010011010001001','100000011000000001','102220000000222001','100000011000000001',
    '100000000000000001','111111111111111111'
  ]
  const SPAWNS = [[15.2,2.3],[9.5,3.3],[5.3,14.3],[15.2,14.4],[8.6,11.7],[3.2,7.4]]
  const COLORS = { 1:[72,88,78], 2:[82,61,47], 3:[40,78,73] }
  const FOV = Math.PI * 0.39
  const keys = Object.create(null)
  let W=960,H=540,depth=new Float32Array(W),running=false,paused=false,last=0,mouseDown=false,adsDown=false,fallbackLook=true
  const fallbackAim={x:0,y:0}
  let sensitivity=1.6,lastCursorX=null,lastCursorY=null
  let audio=null,remaining=90,score=0,shots=0,hits=0,headshots=0,kills=0
  let ammo=30,reserve=90,health=100,armor=50,shotCooldown=0,reloadT=0,reloadStage=0,muzzle=0
  let weaponKick=0,weaponKickTarget=0,weaponSwayX=0,weaponSwayY=0,bobPhase=0,moveBlend=0,ads=0,sprintBlend=0,crouchBlend=0,landKick=0,reloadVisual=0
  let enemies=[],particles=[],decals=[]
  const player={x:1.55,y:1.55,dir:.65,pitch:0,z:0,vz:0,radius:.22,onGround:true,step:0}
  const remotePlayers=new Map()
  let peer=null,connections=[],networkMode='solo',activeRoom='',networkTick=0,networkShotPulse=0

  function resize(){const aspect=innerWidth/innerHeight;W=Math.min(1280,Math.max(640,Math.floor(innerWidth*Math.min(devicePixelRatio||1,1.15))));H=Math.floor(W/aspect);canvas.width=W;canvas.height=H;depth=new Float32Array(W)}
  addEventListener('resize',resize);resize()
  function cell(x,y){const ix=Math.floor(x),iy=Math.floor(y);return iy<0||iy>=MAP.length||ix<0||ix>=MAP[0].length?1:Number(MAP[iy][ix])}
  function blocked(x,y,r=.2){return cell(x-r,y-r)||cell(x+r,y-r)||cell(x-r,y+r)||cell(x+r,y+r)}
  function moveBody(body,dx,dy,r=.2){if(!blocked(body.x+dx,body.y,r))body.x+=dx;if(!blocked(body.x,body.y+dy,r))body.y+=dy}
  function angleDiff(a,b){let d=a-b;while(d>Math.PI)d-=Math.PI*2;while(d<-Math.PI)d+=Math.PI*2;return d}
  function lineClear(x1,y1,x2,y2){const n=Math.ceil(Math.hypot(x2-x1,y2-y1)*12);for(let i=1;i<n;i++){const t=i/n;if(cell(x1+(x2-x1)*t,y1+(y2-y1)*t))return false}return true}
  function sound(freq,dur=.05,type='square',gain=.03,slide=0){try{audio ||= new (window.AudioContext||window.webkitAudioContext)();const o=audio.createOscillator(),g=audio.createGain(),t=audio.currentTime;o.type=type;o.frequency.setValueAtTime(freq,t);if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(20,freq+slide),t+dur);g.gain.setValueAtTime(gain,t);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g).connect(audio.destination);o.start(t);o.stop(t+dur)}catch{}}
  function noiseSound(dur=.07,gain=.06){try{audio ||= new (window.AudioContext||window.webkitAudioContext)();const len=audio.sampleRate*dur,b=audio.createBuffer(1,len,audio.sampleRate),d=b.getChannelData(0);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*(1-i/len);const s=audio.createBufferSource(),g=audio.createGain();s.buffer=b;g.gain.value=gain;s.connect(g).connect(audio.destination);s.start()}catch{}}
  function setNetworkStatus(message,connected=false){const el=$('networkStatus');el.textContent=message;el.classList.toggle('connected',connected)}
  function createRoomCode(){const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';let code='';for(let i=0;i<6;i++)code+=chars[Math.floor(Math.random()*chars.length)];return code}
  function closeNetwork(){for(const conn of connections)try{conn.close()}catch{};connections=[];try{peer?.destroy()}catch{};peer=null;remotePlayers.clear();networkMode='solo';activeRoom='';setNetworkStatus('SOLO MODE // HOST OR ENTER A CODE')}
  function broadcastPacket(packet,except=null){for(const conn of connections)if(conn!==except&&conn.open)try{conn.send(packet)}catch{}}
  function handlePacket(packet,source){if(!packet||typeof packet!=='object'||!packet.t)return;if((packet.t==='state'||packet.t==='shot')&&packet.id&&packet.id!==peer?.id){const current=remotePlayers.get(packet.id)||{x:packet.x,y:packet.y,dir:packet.dir,z:0,flash:0,last:0};if(packet.t==='state'){current.x=Number(packet.x)||0;current.y=Number(packet.y)||0;current.dir=Number(packet.dir)||0;current.z=Number(packet.z)||0;current.health=Number(packet.health)||100;if(packet.shot)current.flash=.10}else current.flash=.10;current.last=performance.now();remotePlayers.set(packet.id,current)}if(networkMode==='host')broadcastPacket(packet,source)}
  function bindConnection(conn){if(!connections.includes(conn))connections.push(conn);conn.on('open',()=>{setNetworkStatus(`${networkMode==='host'?'HOSTING':'CONNECTED'} // ROOM ${activeRoom} // ${connections.filter(c=>c.open).length+1} OPERATIVES`,true);conn.send({t:'hello',id:peer.id,room:activeRoom})});conn.on('data',packet=>handlePacket(packet,conn));conn.on('close',()=>{connections=connections.filter(c=>c!==conn);remotePlayers.delete(conn.peer);setNetworkStatus(`${networkMode==='host'?'HOSTING':'LINK LOST'} // ROOM ${activeRoom}`,networkMode==='host')});conn.on('error',()=>setNetworkStatus('CONNECTION ERROR // RETRY ROOM CODE'))}
  function hostRoom(){if(!window.Peer){setNetworkStatus('NETWORK LIBRARY UNAVAILABLE // CHECK CONNECTION');return}closeNetwork();activeRoom=createRoomCode();$('roomCode').value=activeRoom;networkMode='host';setNetworkStatus(`OPENING ROOM ${activeRoom}...`);peer=new window.Peer(`blackout-${activeRoom.toLowerCase()}`,{debug:1});peer.on('open',()=>setNetworkStatus(`HOSTING // SHARE CODE ${activeRoom}`,true));peer.on('connection',bindConnection);peer.on('error',error=>setNetworkStatus(error?.type==='unavailable-id'?'ROOM COLLISION // HOST AGAIN':'NETWORK ERROR // TRY AGAIN'))}
  function joinRoom(){if(!window.Peer){setNetworkStatus('NETWORK LIBRARY UNAVAILABLE // CHECK CONNECTION');return}const code=String($('roomCode').value||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,6);if(code.length!==6){setNetworkStatus('ENTER A VALID 6-CHARACTER CODE');return}closeNetwork();activeRoom=code;networkMode='client';$('roomCode').value=code;setNetworkStatus(`CONNECTING TO ${code}...`);peer=new window.Peer(undefined,{debug:1});peer.on('open',()=>bindConnection(peer.connect(`blackout-${code.toLowerCase()}`,{reliable:false,serialization:'json'})));peer.on('error',()=>setNetworkStatus('ROOM NOT FOUND OR CONNECTION FAILED'))}
  function sendNetworkState(dt){if(networkMode==='solo'||!peer)return;networkTick-=dt;if(networkTick>0)return;networkTick=1/15;const packet={t:'state',id:peer.id,x:player.x,y:player.y,dir:player.dir,z:player.z,health,shot:networkShotPulse};networkShotPulse=0;if(networkMode==='host')broadcastPacket(packet);else if(connections[0]?.open)connections[0].send(packet);const now=performance.now();for(const [id,p] of remotePlayers)if(now-p.last>3500)remotePlayers.delete(id)}
  function spawnEnemies(){enemies=SPAWNS.map((p,i)=>({id:i,x:p[0],y:p[1],hp:i===5?140:100,alive:true,cooldown:1+Math.random(),alert:0,strafe:Math.random()<.5?-1:1,flash:0,hit:0,lastSeen:0}))}
  function reset(){Object.assign(player,{x:1.55,y:1.55,dir:.65,pitch:0,z:0,vz:0,onGround:true,step:0});remaining=90;score=shots=hits=headshots=kills=0;ammo=30;reserve=90;health=100;armor=50;shotCooldown=reloadT=muzzle=0;weaponKick=weaponKickTarget=weaponSwayX=weaponSwayY=bobPhase=moveBlend=ads=sprintBlend=crouchBlend=landKick=reloadVisual=0;particles=[];decals=[];spawnEnemies();ui.objective.textContent='ELIMINATE HOSTILES';updateUI()}
  function inputHint(){if(reloadT<=0)ui.interaction.textContent=fallbackLook?'MOUSE LOOK FALLBACK // FLICK OR MOVE TO EDGES':''}
  function requestLook(){fallbackLook=true;inputHint();try{const request=canvas.requestPointerLock?.();request?.catch?.(()=>{fallbackLook=true;inputHint()})}catch{fallbackLook=true;inputHint()}}
  function startRound(){reset();running=true;paused=false;ui.start.classList.add('hidden');ui.result.classList.add('hidden');ui.pause.classList.add('hidden');ui.hud.hidden=false;last=performance.now();requestLook();sound(110,.18,'sawtooth',.05,180);requestAnimationFrame(loop)}
  function pauseGame(){if(!running)return;paused=true;mouseDown=false;ui.pause.classList.remove('hidden')}
  function resumeGame(){if(!running)return;paused=false;ui.pause.classList.add('hidden');requestLook();last=performance.now()}
  function finish(win){if(!running)return;running=false;mouseDown=false;document.exitPointerLock?.();ui.hud.hidden=true;ui.pause.classList.add('hidden');ui.result.classList.remove('hidden');$('resultEyebrow').textContent=win?'[ MISSION COMPLETE ]':'[ MISSION FAILED ]';$('resultTitle').innerHTML=win?'SECTOR<br><em>SECURED</em>':'UNIT<br><em>OFFLINE</em>';$('finalScore').textContent=String(score).padStart(6,'0');$('finalAccuracy').textContent=(shots?Math.round(hits/shots*100):0)+'%';$('finalHeadshots').textContent=headshots;$('finalTime').textContent=formatTime(90-remaining);sound(win?620:72,.45,'sawtooth',.06,win?300:-40)}
  function formatTime(v){const n=Math.max(0,Math.ceil(v));return `${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`}
  function updateUI(){ui.timer.textContent=formatTime(remaining);ui.health.style.width=health+'%';ui.healthText.textContent=Math.ceil(health);ui.armor.style.width=armor*2+'%';ui.armorText.textContent=Math.ceil(armor);ui.score.textContent=String(score).padStart(6,'0');ui.kills.textContent=`${kills} / ${SPAWNS.length} HOSTILES`;ui.ammo.textContent=String(ammo).padStart(2,'0');ui.reserve.textContent=String(reserve).padStart(2,'0');ui.weaponState.textContent=reloadT>0?'RELOADING':ads>.65?'ADS / AUTO':'AUTO';ui.stance.textContent=crouchBlend>.5?'CROUCHED':sprintBlend>.5?'SPRINTING':player.z>.08?'AIRBORNE':'STANDING';const spread=5+(keys.KeyW||keys.KeyA||keys.KeyS||keys.KeyD?8:0)+(player.z>.08?16:0)+(1-ads)*4+weaponKick*24;[...ui.crosshair.querySelectorAll('i')].forEach((e,i)=>{if(i===0)e.style.right=spread+'px';if(i===1)e.style.left=spread+'px';if(i===2)e.style.bottom=spread+'px';if(i===3)e.style.top=spread+'px'});document.body.classList.toggle('low-health',health<25)}
  function addFeed(head=false){const d=document.createElement('div');d.innerHTML=`STRIKE-1 <b>VX-7${head?' // HEADSHOT':''}</b> MERIDIAN`;ui.feed.appendChild(d);setTimeout(()=>d.remove(),3000)}
  function showHit(head=false){ui.hit.className='hit-marker active'+(head?' headshot':'');ui.hit.textContent=head?'✦':'×';clearTimeout(showHit.t);showHit.t=setTimeout(()=>ui.hit.className='hit-marker',110)}
  function reload(){if(!running||paused||reloadT>0||ammo===30||reserve<=0)return;reloadT=2.15;reloadStage=0;mouseDown=false;ui.interaction.textContent='RELOADING';sound(230,.06,'square',.025,-50)}
  function projectEnemy(e){const dx=e.x-player.x,dy=e.y-player.y,dist=Math.hypot(dx,dy),ang=angleDiff(Math.atan2(dy,dx),player.dir),cameraX=Math.tan(ang)/Math.tan(FOV/2);if(Math.abs(ang)>FOV*.7||dist<.15)return null;const horizon=H*.5-player.pitch*H-player.z*H*.12,screenX=W*(.5+cameraX*.5),height=Math.min(H*1.6,H/(dist*.72)),bottom=horizon+height*.52,top=bottom-height;return{dist,x:screenX,top,bottom,w:height*.42,h:height}}
  function fire(){
    if(!running||paused||reloadT>0||shotCooldown>0||sprintBlend>.72)return
    if(ammo<=0){reload();sound(130,.035,'square',.025);return}
    ammo--;shots++;shotCooldown=.095;muzzle=.055;networkShotPulse=1;weaponKickTarget=Math.min(1.2,weaponKickTarget+.72);player.pitch=Math.min(.28,player.pitch+.008+Math.random()*.006);player.dir+=(Math.random()-.5)*.006;noiseSound(.06,.08);sound(62,.08,'sawtooth',.045,-25)
    const moving=keys.KeyW||keys.KeyA||keys.KeyS||keys.KeyD,spreadPx=(ads>.65?2:8)+(moving?7:0)+(player.z>.08?18:0),sx=W/2+(Math.random()-.5)*spreadPx,sy=H/2+(Math.random()-.5)*spreadPx
    let best=null,bestDist=1e9
    for(const e of enemies){if(!e.alive)continue;const p=projectEnemy(e);if(!p||p.dist>=bestDist||!lineClear(player.x,player.y,e.x,e.y))continue;if(sx>p.x-p.w/2&&sx<p.x+p.w/2&&sy>p.top&&sy<p.bottom){best={e,p,head:sy<p.top+p.h*.30};bestDist=p.dist}}
    if(best){const damage=best.head?108:34;best.e.hp-=damage;best.e.hit=.16;hits++;if(best.head)headshots++;showHit(best.head);score+=best.head?350:120;sound(best.head?940:710,.06,'square',.035,-150);for(let i=0;i<8;i++)particles.push({x:best.e.x,y:best.e.y,z:Math.random()*.7+.2,life:.35,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4});if(best.e.hp<=0){best.e.alive=false;kills++;score+=500;addFeed(best.head);if(kills===SPAWNS.length){ui.objective.textContent='SECTOR CLEAR';setTimeout(()=>finish(true),700)}}}else decals.push({x:player.x+Math.cos(player.dir)*3,y:player.y+Math.sin(player.dir)*3,life:2})
    updateUI()
  }
  function damagePlayer(raw){let d=raw;if(armor>0){const absorbed=Math.min(armor,d*.55);armor-=absorbed;d-=absorbed}health=Math.max(0,health-d);ui.damage.classList.add('active');setTimeout(()=>ui.damage.classList.remove('active'),140);sound(48,.16,'sawtooth',.06,-20);if(health<=0)setTimeout(()=>finish(false),250);updateUI()}
  function updatePlayer(dt){
    const forward=(keys.KeyW?1:0)-(keys.KeyS?1:0),side=(keys.KeyD?1:0)-(keys.KeyA?1:0),moving=forward||side,crouch=keys.ControlLeft||keys.ControlRight||keys.KeyC,sprinting=keys.ShiftLeft&&forward>0&&!crouch&&reloadT<=0
    if(fallbackLook){const ax=Math.abs(fallbackAim.x)>.72?fallbackAim.x:0,ay=Math.abs(fallbackAim.y)>.78?fallbackAim.y:0;player.dir+=ax*dt*1.2*sensitivity;player.pitch=Math.max(-.30,Math.min(.30,player.pitch+ay*dt*.35*sensitivity))}
    if(keys.ArrowLeft)player.dir-=dt*1.8;if(keys.ArrowRight)player.dir+=dt*1.8;if(keys.ArrowUp)player.pitch=Math.max(-.30,player.pitch-dt*.6);if(keys.ArrowDown)player.pitch=Math.min(.30,player.pitch+dt*.6)
    crouchBlend+=(Number(!!crouch)-crouchBlend)*Math.min(1,dt*10);sprintBlend+=(Number(!!sprinting)-sprintBlend)*Math.min(1,dt*8);ads+=(Number(adsDown&&!sprinting&&reloadT<=0)-ads)*Math.min(1,dt*12);moveBlend+=(Number(!!moving&&player.onGround)-moveBlend)*Math.min(1,dt*8)
    const speed=crouch?1.65:sprinting?4.45:2.65,norm=moving?1/Math.hypot(forward,side):0,cs=Math.cos(player.dir),sn=Math.sin(player.dir),dx=(cs*forward-sn*side)*norm*speed*dt,dy=(sn*forward+cs*side)*norm*speed*dt;moveBody(player,dx,dy,player.radius)
    if(moving&&player.onGround){bobPhase+=dt*(sprinting?14:crouch?5:9);player.step+=dt*speed;if(player.step>.92){player.step=0;sound(crouch?75:95,.025,'sine',crouch?.008:.014,-15)}}
    if(player.z>0||player.vz!==0){player.vz-=9.8*dt;player.z+=player.vz*dt;if(player.z<=0){if(player.vz<-2.2)landKick=.7;player.z=0;player.vz=0;player.onGround=true}}
    weaponSwayX+=(0-weaponSwayX)*Math.min(1,dt*8);weaponSwayY+=(0-weaponSwayY)*Math.min(1,dt*8);weaponKickTarget=Math.max(0,weaponKickTarget-dt*7.5);weaponKick+=(weaponKickTarget-weaponKick)*Math.min(1,dt*22);landKick=Math.max(0,landKick-dt*4);shotCooldown=Math.max(0,shotCooldown-dt);muzzle=Math.max(0,muzzle-dt)
    if(reloadT>0){const before=reloadT;reloadT=Math.max(0,reloadT-dt);const progress=1-reloadT/2.15;reloadVisual+=(progress-reloadVisual)*Math.min(1,dt*18);if(before>0&&reloadT===0){const need=30-ammo,take=Math.min(need,reserve);ammo+=take;reserve-=take;reloadVisual=1;inputHint();sound(430,.055,'square',.025,100)}reloadStage=progress}else reloadVisual+=(0-reloadVisual)*Math.min(1,dt*12)
    if(mouseDown)fire();sendNetworkState(dt);updateUI()
  }
  function updateEnemies(dt){for(const e of enemies){if(!e.alive)continue;e.flash=Math.max(0,e.flash-dt);e.hit=Math.max(0,e.hit-dt);e.cooldown-=dt;const dx=player.x-e.x,dy=player.y-e.y,dist=Math.hypot(dx,dy),visible=lineClear(e.x,e.y,player.x,player.y);if(visible&&dist<10){e.alert=1;e.lastSeen=1.5}else e.lastSeen=Math.max(0,e.lastSeen-dt);if(e.alert&&e.lastSeen>0){if(dist>3.2){moveBody(e,dx/dist*dt*.72,dy/dist*dt*.72,.22)}else{moveBody(e,-dy/dist*e.strafe*dt*.45,dx/dist*e.strafe*dt*.45,.22)}if(visible&&e.cooldown<=0&&dist<9){e.flash=.07;e.cooldown=.72+Math.random()*.65;const accuracy=Math.max(.18,.72-dist*.055);if(Math.random()<accuracy)damagePlayer(7+Math.random()*6);noiseSound(.045,.025);sound(120,.05,'square',.018,-25)}}}for(const p of remotePlayers.values())p.flash=Math.max(0,p.flash-dt);for(const p of particles){p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.z+=dt*.3}particles=particles.filter(p=>p.life>0);decals.forEach(d=>d.life-=dt);decals=decals.filter(d=>d.life>0)}
  function castWorld(){
    const horizon=H*.5-player.pitch*H-player.z*H*.12+Math.sin(bobPhase*2)*Math.min(4,Math.abs(Math.sin(bobPhase)))*(.5-crouchBlend*.3),sky=ctx.createLinearGradient(0,0,0,horizon);sky.addColorStop(0,'#020908');sky.addColorStop(1,'#10251d');ctx.fillStyle=sky;ctx.fillRect(0,0,W,Math.max(0,horizon));const floor=ctx.createLinearGradient(0,horizon,0,H);floor.addColorStop(0,'#18221c');floor.addColorStop(1,'#030504');ctx.fillStyle=floor;ctx.fillRect(0,horizon,W,H-horizon)
    const dirX=Math.cos(player.dir),dirY=Math.sin(player.dir),planeLen=Math.tan(FOV/2),planeX=-dirY*planeLen,planeY=dirX*planeLen
    for(let x=0;x<W;x+=2){const cam=2*x/W-1,rdx=dirX+planeX*cam,rdy=dirY+planeY*cam;let mx=Math.floor(player.x),my=Math.floor(player.y);const ddx=Math.abs(1/(rdx||1e-6)),ddy=Math.abs(1/(rdy||1e-6));let sx,sy,sdx,sdy;if(rdx<0){sx=-1;sdx=(player.x-mx)*ddx}else{sx=1;sdx=(mx+1-player.x)*ddx}if(rdy<0){sy=-1;sdy=(player.y-my)*ddy}else{sy=1;sdy=(my+1-player.y)*ddy}let side=0,tile=0,guard=0;while(!tile&&guard++<40){if(sdx<sdy){sdx+=ddx;mx+=sx;side=0}else{sdy+=ddy;my+=sy;side=1}tile=cell(mx,my)}const dist=Math.max(.001,side===0?(mx-player.x+(1-sx)/2)/rdx:(my-player.y+(1-sy)/2)/rdy);depth[x]=depth[x+1]=dist;const line=H/dist,start=Math.floor(horizon-line*.5),end=Math.floor(horizon+line*.5),base=COLORS[tile]||COLORS[1],shade=Math.max(.2,1-dist*.055)*(side?.72:1),stripe=((side?my:mx)&1)?1:.84;ctx.fillStyle=`rgb(${base[0]*shade*stripe},${base[1]*shade*stripe},${base[2]*shade*stripe})`;ctx.fillRect(x,start,2,end-start);if(dist<6){ctx.fillStyle=`rgba(169,255,53,${Math.max(0,.06-dist*.008)})`;ctx.fillRect(x,start,2,1)}}
  }
  function drawEnemies(){
    const ordered=enemies.filter(e=>e.alive).map(e=>({e,p:projectEnemy(e)})).filter(o=>o.p).sort((a,b)=>b.p.dist-a.p.dist)
    for(const {e,p} of ordered){const xi=Math.max(0,Math.min(W-1,Math.floor(p.x)));if(p.dist>=depth[xi])continue;const w=p.w,h=p.h,y=p.top;ctx.save();ctx.globalAlpha=Math.max(.35,1-p.dist*.035);ctx.translate(p.x,y+h*.5);ctx.fillStyle=e.hit>0?'#eaffd0':e.alert?'#311a18':'#13231c';ctx.strokeStyle=e.flash>0?'#ffcc91':'#8da296';ctx.lineWidth=Math.max(1,w*.025);ctx.beginPath();ctx.arc(0,-h*.33,w*.18,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.fillRect(-w*.28,-h*.18,w*.56,h*.48);ctx.fillStyle='#0a0f0c';ctx.fillRect(-w*.22,h*.30,w*.16,h*.26);ctx.fillRect(w*.06,h*.30,w*.16,h*.26);ctx.fillStyle=e.alert?'#ff5547':'#a9ff35';ctx.fillRect(-w*.09,-h*.36,w*.18,h*.045);ctx.fillStyle='#1c2821';ctx.fillRect(w*.20,-h*.10,w*.38,h*.08);if(e.flash>0){ctx.fillStyle='#ffe9a6';ctx.beginPath();ctx.moveTo(w*.58,-h*.11);ctx.lineTo(w*.9,-h*.18);ctx.lineTo(w*.62,-h*.04);ctx.fill()}ctx.restore()}
    const allies=[...remotePlayers.entries()].map(([id,e])=>({id,e,p:projectEnemy(e)})).filter(o=>o.p).sort((a,b)=>b.p.dist-a.p.dist);for(const {id,e,p} of allies){const xi=Math.max(0,Math.min(W-1,Math.floor(p.x)));if(p.dist>=depth[xi])continue;const w=p.w,h=p.h,y=p.top;ctx.save();ctx.translate(p.x,y+h*.5);ctx.globalAlpha=Math.max(.45,1-p.dist*.025);ctx.fillStyle='#102a2b';ctx.strokeStyle='#45e6ff';ctx.lineWidth=Math.max(1,w*.03);ctx.beginPath();ctx.arc(0,-h*.33,w*.18,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.fillStyle='#132f2c';ctx.fillRect(-w*.29,-h*.18,w*.58,h*.47);ctx.strokeRect(-w*.29,-h*.18,w*.58,h*.47);ctx.fillStyle='#09110e';ctx.fillRect(-w*.23,h*.29,w*.17,h*.27);ctx.fillRect(w*.06,h*.29,w*.17,h*.27);ctx.fillStyle='#45e6ff';ctx.fillRect(-w*.12,-h*.36,w*.24,h*.045);ctx.fillStyle='#263a32';ctx.fillRect(w*.18,-h*.10,w*.43,h*.075);if(e.flash>0){ctx.fillStyle='#fff2a6';ctx.beginPath();ctx.moveTo(w*.61,-h*.11);ctx.lineTo(w*.96,-h*.20);ctx.lineTo(w*.68,-h*.02);ctx.fill()}ctx.fillStyle='#45e6ff';ctx.font=`${Math.max(7,w*.11)}px ui-monospace`;ctx.textAlign='center';ctx.fillText(`ALLY ${id.slice(-3).toUpperCase()}`,0,-h*.54);ctx.restore()}
    for(const p of particles){const dx=p.x-player.x,dy=p.y-player.y,dist=Math.hypot(dx,dy),ang=angleDiff(Math.atan2(dy,dx),player.dir);if(Math.abs(ang)>FOV*.7)continue;const x=W*(.5+Math.tan(ang)/Math.tan(FOV/2)*.5),y=H*.5-player.pitch*H-(p.z-.35)*H/dist;ctx.globalAlpha=Math.max(0,p.life*2);ctx.fillStyle='#a9ff35';ctx.fillRect(x,y,3,3)}ctx.globalAlpha=1
  }
  function drawWeapon(){
    const moving=keys.KeyW||keys.KeyA||keys.KeyS||keys.KeyD
    const smooth=t=>t*t*(3-2*t),breath=Math.sin(performance.now()*.0017)
    const walkX=Math.sin(bobPhase)*7*moveBlend,walkY=Math.abs(Math.cos(bobPhase))*5*moveBlend
    const baseX=W*(.755-.255*ads)+weaponSwayX*W*.085+walkX*(1-ads)+breath*(1-ads)
    const baseY=H*(1.02-.135*ads)+weaponSwayY*H*.075+walkY*(1-ads)+landKick*15+weaponKick*20+sprintBlend*H*.13
    let rotation=-.245*(1-ads)+sprintBlend*.48-weaponKick*.035,drop=0,magOffset=0,bolt=weaponKick*8,leftHandY=0,leftHandX=0
    if(reloadT>0){const p=reloadStage;if(p<.18){const q=smooth(p/.18);rotation-=q*.28;drop=q*14}else if(p<.50){const q=smooth((p-.18)/.32);rotation=-.48;drop=14+Math.sin(q*Math.PI)*12;magOffset=q*104;leftHandX=-q*24;leftHandY=q*78}else if(p<.76){const q=smooth((p-.50)/.26);rotation=-.48;drop=14;magOffset=(1-q)*104;leftHandX=-(1-q)*24;leftHandY=(1-q)*78}else{const q=smooth((p-.76)/.24);rotation=-.48+q*.28;drop=(1-q)*14;bolt+=Math.sin(q*Math.PI)*19}}
    const scale=Math.min(W/1080,H/650)*.94*(1+ads*.12)
    const poly=(fill,points,stroke='#536159')=>{ctx.fillStyle=fill;ctx.strokeStyle=stroke;ctx.beginPath();ctx.moveTo(points[0],points[1]);for(let i=2;i<points.length;i+=2)ctx.lineTo(points[i],points[i+1]);ctx.closePath();ctx.fill();ctx.stroke()}
    ctx.save();ctx.translate(baseX,baseY+drop);ctx.rotate(rotation);ctx.scale(scale,scale);ctx.lineWidth=2;ctx.lineJoin='round';ctx.shadowColor='#000b';ctx.shadowBlur=10

    poly('#253029',[128,192,58,72,29,62,73,206],'#111914')
    poly('#39483f',[117,190,52,80,36,73,80,203],'#536258')
    poly('#253029',[-139+leftHandX,198+leftHandY,-49+leftHandX,-88+leftHandY,-17+leftHandX,-77+leftHandY,-91+leftHandX,210+leftHandY],'#111914')
    poly('#39483f',[-128+leftHandX,198+leftHandY,-44+leftHandX,-78+leftHandY,-23+leftHandX,-70+leftHandY,-96+leftHandX,207+leftHandY],'#536258')

    ctx.shadowBlur=4
    const receiver=ctx.createLinearGradient(-54,-76,56,60);receiver.addColorStop(0,'#38463d');receiver.addColorStop(.38,'#101713');receiver.addColorStop(1,'#27332c')
    poly(receiver,[-53,57,54,52,43,-75,-42,-78],'#68786e')
    ctx.fillStyle='#090e0b';ctx.fillRect(-42,-60,83,16);ctx.strokeStyle='#4c5b52';ctx.strokeRect(-42,-60,83,16)
    poly('#141d18',[-47,51,-15,51,-2,127,-35,137],'#45554b')
    poly('#080d0a',[-22,50+magOffset,24,50+magOffset,15,134+magOffset,-27,141+magOffset],'#53635a')
    ctx.fillStyle='#35423a';ctx.fillRect(-15,66+magOffset,31,4);ctx.fillRect(-14,82+magOffset,29,4);ctx.fillRect(-12,98+magOffset,26,4)
    poly('#202a24',[24,49,51,45,65,104,39,113],'#596a60')

    const upper=ctx.createLinearGradient(-31,-215,36,-72);upper.addColorStop(0,'#3a493f');upper.addColorStop(.5,'#101713');upper.addColorStop(1,'#29362e')
    poly(upper,[-38,-74,40,-72,30,-211,-25,-214],'#687970')
    for(let i=0;i<5;i++){ctx.fillStyle='#090e0b';ctx.fillRect(-13+i*10,-194,5,85);ctx.fillStyle='#4b5a51';ctx.fillRect(-11+i*10,-191,2,78)}
    poly('#080d0a',[-11,-213,17,-212,10,-291,-4,-291],'#536258')
    ctx.fillStyle='#36453c';ctx.fillRect(-13,-304,34,14);ctx.strokeStyle='#74857a';ctx.strokeRect(-13,-304,34,14)
    ctx.fillStyle='#0b110d';ctx.fillRect(-33,-101,75,15);ctx.strokeRect(-33,-101,75,15)
    for(let i=0;i<8;i++){ctx.fillStyle=i%2?'#26342c':'#405046';ctx.fillRect(-30+i*9,-106,6,5)}

    poly('#090e0b',[-24,-105,32,-102,29,-76,-21,-78],'#68786e')
    ctx.fillStyle='#253129';ctx.fillRect(-17,-130,43,24);ctx.strokeRect(-17,-130,43,24)
    ctx.fillStyle='#07100b';ctx.beginPath();ctx.arc(5,-118,12,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#718278';ctx.stroke()
    ctx.fillStyle='#a9ff35';ctx.fillRect(-18,-91,38,3);ctx.fillRect(-29,-35,68,3);ctx.fillStyle='#45e6ff';ctx.fillRect(33+bolt,-62,18,4)
    ctx.fillStyle='#090e0b';ctx.fillRect(-9,-284,23,11);ctx.fillStyle='#718278';ctx.fillRect(-5,-286,15,2)

    poly('#46554b',[22,87,31,58,55,57,64,78,51,101],'#1b241f')
    for(let i=0;i<3;i++)poly('#29352e',[30+i*8,64,36+i*8,61,48+i*7,79,42+i*7,84],'#526158')
    poly('#46554b',[-50+leftHandX,-64+leftHandY,-45+leftHandX,-94+leftHandY,-17+leftHandX,-98+leftHandY,-8+leftHandX,-77+leftHandY,-25+leftHandX,-57+leftHandY],'#1b241f')
    for(let i=0;i<3;i++)poly('#29352e',[-43+i*8+leftHandX,-86+leftHandY,-36+i*8+leftHandX,-92+leftHandY,-22+i*7+leftHandX,-80+leftHandY,-28+i*7+leftHandX,-73+leftHandY],'#526158')

    if(ads>.35){ctx.globalAlpha=Math.min(1,(ads-.35)*1.55);ctx.strokeStyle='#a9ff35';ctx.lineWidth=2;ctx.beginPath();ctx.arc(5,-118,7,0,Math.PI*2);ctx.stroke();ctx.fillStyle='#d8ff9a';ctx.fillRect(4,-119,2,2);ctx.globalAlpha=1}
    if(muzzle>0){ctx.shadowColor='#ffbb45';ctx.shadowBlur=26;ctx.globalCompositeOperation='screen';ctx.fillStyle='#fff3b2';ctx.beginPath();ctx.moveTo(4,-304);ctx.lineTo(-26,-349);ctx.lineTo(5,-327);ctx.lineTo(38,-351);ctx.lineTo(19,-304);ctx.fill();ctx.fillStyle='#ff9d35';ctx.beginPath();ctx.arc(5,-310,14,0,Math.PI*2);ctx.fill();ctx.globalCompositeOperation='source-over';ctx.shadowBlur=0}
    ctx.restore()
  }
  function drawRadar(){const s=150/MAP.length;rctx.clearRect(0,0,150,150);rctx.fillStyle='#06100b';rctx.fillRect(0,0,150,150);for(let y=0;y<MAP.length;y++)for(let x=0;x<MAP[y].length;x++){const t=Number(MAP[y][x]);if(t){rctx.fillStyle=t===2?'#4a382c':t===3?'#24504a':'#29382f';rctx.fillRect(x*s,y*s,s+.5,s+.5)}}for(const e of enemies){if(!e.alive||!e.alert)continue;rctx.fillStyle='#ff5547';rctx.beginPath();rctx.arc(e.x*s,e.y*s,2.5,0,Math.PI*2);rctx.fill()}rctx.save();rctx.translate(player.x*s,player.y*s);rctx.rotate(player.dir);rctx.fillStyle='#a9ff35';rctx.beginPath();rctx.moveTo(6,0);rctx.lineTo(-4,-4);rctx.lineTo(-4,4);rctx.closePath();rctx.fill();rctx.restore();rctx.strokeStyle='#a9ff3544';rctx.strokeRect(.5,.5,149,149)}
  function render(){castWorld();drawEnemies();drawWeapon();drawRadar()}
  function loop(now){if(!running)return;const dt=Math.min(.033,(now-last)/1000);last=now;if(!paused){remaining=Math.max(0,remaining-dt);updatePlayer(dt);updateEnemies(dt);if(remaining<=0){finish(false);return}}render();requestAnimationFrame(loop)}
  document.addEventListener('keydown',e=>{keys[e.code]=true;if(e.code==='Space'&&running&&!paused&&player.onGround&&crouchBlend<.3){player.vz=4.35;player.onGround=false;sound(130,.04,'sine',.012,30)}if(e.code==='KeyR')reload();if((e.code==='Escape'||e.code==='KeyP')&&running)pauseGame()})
  document.addEventListener('keyup',e=>keys[e.code]=false)
  document.addEventListener('mousemove',e=>{if(paused||!running)return;const locked=document.pointerLockElement===canvas;if(locked){const sens=.0027*sensitivity*(ads>.5?.68:1),dx=Math.max(-160,Math.min(160,e.movementX||0)),dy=Math.max(-160,Math.min(160,e.movementY||0));player.dir+=dx*sens;player.pitch=Math.max(-.30,Math.min(.30,player.pitch+dy*sens*.62));weaponSwayX=Math.max(-.12,Math.min(.12,weaponSwayX+dx*.00017));weaponSwayY=Math.max(-.1,Math.min(.1,weaponSwayY+dy*.00015))}else{const rawX=Number.isFinite(e.movementX)&&e.movementX!==0?e.movementX:(lastCursorX===null?0:e.clientX-lastCursorX),rawY=Number.isFinite(e.movementY)&&e.movementY!==0?e.movementY:(lastCursorY===null?0:e.clientY-lastCursorY),dx=Math.max(-120,Math.min(120,rawX)),dy=Math.max(-120,Math.min(120,rawY)),sens=.0032*sensitivity*(ads>.5?.72:1);player.dir+=dx*sens;player.pitch=Math.max(-.30,Math.min(.30,player.pitch+dy*sens*.60));fallbackAim.x=Math.max(-1,Math.min(1,e.clientX/innerWidth*2-1));fallbackAim.y=Math.max(-1,Math.min(1,e.clientY/innerHeight*2-1));weaponSwayX=Math.max(-.12,Math.min(.12,weaponSwayX+dx*.00014));weaponSwayY=Math.max(-.1,Math.min(.1,weaponSwayY+dy*.00012));lastCursorX=e.clientX;lastCursorY=e.clientY}})
  document.addEventListener('mousedown',e=>{if(!running||paused)return;if(e.button===0){mouseDown=true;fire()}if(e.button===2)adsDown=true})
  document.addEventListener('mouseup',e=>{if(e.button===0)mouseDown=false;if(e.button===2)adsDown=false})
  document.addEventListener('contextmenu',e=>e.preventDefault())
  document.addEventListener('pointerlockchange',()=>{fallbackLook=document.pointerLockElement!==canvas;fallbackAim.x=fallbackAim.y=0;lastCursorX=lastCursorY=null;inputHint()})
  canvas.addEventListener('mouseleave',()=>{if(fallbackLook){fallbackAim.x=fallbackAim.y=0;lastCursorX=lastCursorY=null}})
  canvas.addEventListener('click',()=>{if(running&&!paused&&document.pointerLockElement!==canvas)requestLook()})
  const sensitivityInput=$('sensitivity'),sensitivityValue=$('sensitivityValue');sensitivityInput.value=String(sensitivity);sensitivityValue.textContent=sensitivity.toFixed(1)+'×';sensitivityInput.oninput=()=>{sensitivity=Math.max(.5,Math.min(3,Number(sensitivityInput.value)||1.6));sensitivityValue.textContent=sensitivity.toFixed(1)+'×'}
  $('hostBtn').onclick=hostRoom;$('joinBtn').onclick=joinRoom;$('roomCode').oninput=()=>{$('roomCode').value=String($('roomCode').value||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,6)};addEventListener('beforeunload',closeNetwork)
  $('deployBtn').onclick=startRound;$('againBtn').onclick=startRound;$('resumeBtn').onclick=resumeGame;$('restartPauseBtn').onclick=startRound
  spawnEnemies();render()
})()
