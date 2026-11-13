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
  let weaponKick=0,weaponSwayX=0,weaponSwayY=0,bobPhase=0,ads=0,sprintBlend=0,crouchBlend=0,landKick=0
  let enemies=[],particles=[],decals=[]
  const player={x:1.55,y:1.55,dir:.65,pitch:0,z:0,vz:0,radius:.22,onGround:true,step:0}

  function resize(){const aspect=innerWidth/innerHeight;W=Math.min(1280,Math.max(640,Math.floor(innerWidth*Math.min(devicePixelRatio||1,1.15))));H=Math.floor(W/aspect);canvas.width=W;canvas.height=H;depth=new Float32Array(W)}
  addEventListener('resize',resize);resize()
  function cell(x,y){const ix=Math.floor(x),iy=Math.floor(y);return iy<0||iy>=MAP.length||ix<0||ix>=MAP[0].length?1:Number(MAP[iy][ix])}
  function blocked(x,y,r=.2){return cell(x-r,y-r)||cell(x+r,y-r)||cell(x-r,y+r)||cell(x+r,y+r)}
  function moveBody(body,dx,dy,r=.2){if(!blocked(body.x+dx,body.y,r))body.x+=dx;if(!blocked(body.x,body.y+dy,r))body.y+=dy}
  function angleDiff(a,b){let d=a-b;while(d>Math.PI)d-=Math.PI*2;while(d<-Math.PI)d+=Math.PI*2;return d}
  function lineClear(x1,y1,x2,y2){const n=Math.ceil(Math.hypot(x2-x1,y2-y1)*12);for(let i=1;i<n;i++){const t=i/n;if(cell(x1+(x2-x1)*t,y1+(y2-y1)*t))return false}return true}
  function sound(freq,dur=.05,type='square',gain=.03,slide=0){try{audio ||= new (window.AudioContext||window.webkitAudioContext)();const o=audio.createOscillator(),g=audio.createGain(),t=audio.currentTime;o.type=type;o.frequency.setValueAtTime(freq,t);if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(20,freq+slide),t+dur);g.gain.setValueAtTime(gain,t);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g).connect(audio.destination);o.start(t);o.stop(t+dur)}catch{}}
  function noiseSound(dur=.07,gain=.06){try{audio ||= new (window.AudioContext||window.webkitAudioContext)();const len=audio.sampleRate*dur,b=audio.createBuffer(1,len,audio.sampleRate),d=b.getChannelData(0);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*(1-i/len);const s=audio.createBufferSource(),g=audio.createGain();s.buffer=b;g.gain.value=gain;s.connect(g).connect(audio.destination);s.start()}catch{}}
  function spawnEnemies(){enemies=SPAWNS.map((p,i)=>({id:i,x:p[0],y:p[1],hp:i===5?140:100,alive:true,cooldown:1+Math.random(),alert:0,strafe:Math.random()<.5?-1:1,flash:0,hit:0,lastSeen:0}))}
  function reset(){Object.assign(player,{x:1.55,y:1.55,dir:.65,pitch:0,z:0,vz:0,onGround:true,step:0});remaining=90;score=shots=hits=headshots=kills=0;ammo=30;reserve=90;health=100;armor=50;shotCooldown=reloadT=muzzle=0;weaponKick=weaponSwayX=weaponSwayY=bobPhase=ads=sprintBlend=crouchBlend=landKick=0;particles=[];decals=[];spawnEnemies();ui.objective.textContent='ELIMINATE HOSTILES';updateUI()}
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
    ammo--;shots++;shotCooldown=.095;muzzle=.055;weaponKick=Math.min(1,weaponKick+.68);player.pitch=Math.min(.28,player.pitch+.008+Math.random()*.006);player.dir+=(Math.random()-.5)*.006;noiseSound(.06,.08);sound(62,.08,'sawtooth',.045,-25)
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
    crouchBlend+=(Number(!!crouch)-crouchBlend)*Math.min(1,dt*10);sprintBlend+=(Number(!!sprinting)-sprintBlend)*Math.min(1,dt*8);ads+=(Number(adsDown&&!sprinting&&reloadT<=0)-ads)*Math.min(1,dt*12)
    const speed=crouch?1.65:sprinting?4.45:2.65,norm=moving?1/Math.hypot(forward,side):0,cs=Math.cos(player.dir),sn=Math.sin(player.dir),dx=(cs*forward-sn*side)*norm*speed*dt,dy=(sn*forward+cs*side)*norm*speed*dt;moveBody(player,dx,dy,player.radius)
    if(moving&&player.onGround){bobPhase+=dt*(sprinting?14:crouch?5:9);player.step+=dt*speed;if(player.step>.92){player.step=0;sound(crouch?75:95,.025,'sine',crouch?.008:.014,-15)}}
    if(player.z>0||player.vz!==0){player.vz-=9.8*dt;player.z+=player.vz*dt;if(player.z<=0){if(player.vz<-2.2)landKick=.7;player.z=0;player.vz=0;player.onGround=true}}
    weaponSwayX+=(0-weaponSwayX)*dt*7;weaponSwayY+=(0-weaponSwayY)*dt*7;weaponKick=Math.max(0,weaponKick-dt*5);landKick=Math.max(0,landKick-dt*4);shotCooldown=Math.max(0,shotCooldown-dt);muzzle=Math.max(0,muzzle-dt)
    if(reloadT>0){const before=reloadT;reloadT=Math.max(0,reloadT-dt);const progress=1-reloadT/2.15;if(before>0&&reloadT===0){const need=30-ammo,take=Math.min(need,reserve);ammo+=take;reserve-=take;inputHint();sound(430,.055,'square',.025,100)}reloadStage=progress}
    if(mouseDown)fire();updateUI()
  }
  function updateEnemies(dt){for(const e of enemies){if(!e.alive)continue;e.flash=Math.max(0,e.flash-dt);e.hit=Math.max(0,e.hit-dt);e.cooldown-=dt;const dx=player.x-e.x,dy=player.y-e.y,dist=Math.hypot(dx,dy),visible=lineClear(e.x,e.y,player.x,player.y);if(visible&&dist<10){e.alert=1;e.lastSeen=1.5}else e.lastSeen=Math.max(0,e.lastSeen-dt);if(e.alert&&e.lastSeen>0){if(dist>3.2){moveBody(e,dx/dist*dt*.72,dy/dist*dt*.72,.22)}else{moveBody(e,-dy/dist*e.strafe*dt*.45,dx/dist*e.strafe*dt*.45,.22)}if(visible&&e.cooldown<=0&&dist<9){e.flash=.07;e.cooldown=.72+Math.random()*.65;const accuracy=Math.max(.18,.72-dist*.055);if(Math.random()<accuracy)damagePlayer(7+Math.random()*6);noiseSound(.045,.025);sound(120,.05,'square',.018,-25)}}}for(const p of particles){p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.z+=dt*.3}particles=particles.filter(p=>p.life>0);decals.forEach(d=>d.life-=dt);decals=decals.filter(d=>d.life>0)}
  function castWorld(){
    const horizon=H*.5-player.pitch*H-player.z*H*.12+Math.sin(bobPhase*2)*Math.min(4,Math.abs(Math.sin(bobPhase)))*(.5-crouchBlend*.3),sky=ctx.createLinearGradient(0,0,0,horizon);sky.addColorStop(0,'#020908');sky.addColorStop(1,'#10251d');ctx.fillStyle=sky;ctx.fillRect(0,0,W,Math.max(0,horizon));const floor=ctx.createLinearGradient(0,horizon,0,H);floor.addColorStop(0,'#18221c');floor.addColorStop(1,'#030504');ctx.fillStyle=floor;ctx.fillRect(0,horizon,W,H-horizon)
    const dirX=Math.cos(player.dir),dirY=Math.sin(player.dir),planeLen=Math.tan(FOV/2),planeX=-dirY*planeLen,planeY=dirX*planeLen
    for(let x=0;x<W;x+=2){const cam=2*x/W-1,rdx=dirX+planeX*cam,rdy=dirY+planeY*cam;let mx=Math.floor(player.x),my=Math.floor(player.y);const ddx=Math.abs(1/(rdx||1e-6)),ddy=Math.abs(1/(rdy||1e-6));let sx,sy,sdx,sdy;if(rdx<0){sx=-1;sdx=(player.x-mx)*ddx}else{sx=1;sdx=(mx+1-player.x)*ddx}if(rdy<0){sy=-1;sdy=(player.y-my)*ddy}else{sy=1;sdy=(my+1-player.y)*ddy}let side=0,tile=0,guard=0;while(!tile&&guard++<40){if(sdx<sdy){sdx+=ddx;mx+=sx;side=0}else{sdy+=ddy;my+=sy;side=1}tile=cell(mx,my)}const dist=Math.max(.001,side===0?(mx-player.x+(1-sx)/2)/rdx:(my-player.y+(1-sy)/2)/rdy);depth[x]=depth[x+1]=dist;const line=H/dist,start=Math.floor(horizon-line*.5),end=Math.floor(horizon+line*.5),base=COLORS[tile]||COLORS[1],shade=Math.max(.2,1-dist*.055)*(side?.72:1),stripe=((side?my:mx)&1)?1:.84;ctx.fillStyle=`rgb(${base[0]*shade*stripe},${base[1]*shade*stripe},${base[2]*shade*stripe})`;ctx.fillRect(x,start,2,end-start);if(dist<6){ctx.fillStyle=`rgba(169,255,53,${Math.max(0,.06-dist*.008)})`;ctx.fillRect(x,start,2,1)}}
  }
  function drawEnemies(){
    const ordered=enemies.filter(e=>e.alive).map(e=>({e,p:projectEnemy(e)})).filter(o=>o.p).sort((a,b)=>b.p.dist-a.p.dist)
    for(const {e,p} of ordered){const xi=Math.max(0,Math.min(W-1,Math.floor(p.x)));if(p.dist>=depth[xi])continue;const w=p.w,h=p.h,y=p.top;ctx.save();ctx.globalAlpha=Math.max(.35,1-p.dist*.035);ctx.translate(p.x,y+h*.5);ctx.fillStyle=e.hit>0?'#eaffd0':e.alert?'#311a18':'#13231c';ctx.strokeStyle=e.flash>0?'#ffcc91':'#8da296';ctx.lineWidth=Math.max(1,w*.025);ctx.beginPath();ctx.arc(0,-h*.33,w*.18,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.fillRect(-w*.28,-h*.18,w*.56,h*.48);ctx.fillStyle='#0a0f0c';ctx.fillRect(-w*.22,h*.30,w*.16,h*.26);ctx.fillRect(w*.06,h*.30,w*.16,h*.26);ctx.fillStyle=e.alert?'#ff5547':'#a9ff35';ctx.fillRect(-w*.09,-h*.36,w*.18,h*.045);ctx.fillStyle='#1c2821';ctx.fillRect(w*.20,-h*.10,w*.38,h*.08);if(e.flash>0){ctx.fillStyle='#ffe9a6';ctx.beginPath();ctx.moveTo(w*.58,-h*.11);ctx.lineTo(w*.9,-h*.18);ctx.lineTo(w*.62,-h*.04);ctx.fill()}ctx.restore()}
    for(const p of particles){const dx=p.x-player.x,dy=p.y-player.y,dist=Math.hypot(dx,dy),ang=angleDiff(Math.atan2(dy,dx),player.dir);if(Math.abs(ang)>FOV*.7)continue;const x=W*(.5+Math.tan(ang)/Math.tan(FOV/2)*.5),y=H*.5-player.pitch*H-(p.z-.35)*H/dist;ctx.globalAlpha=Math.max(0,p.life*2);ctx.fillStyle='#a9ff35';ctx.fillRect(x,y,3,3)}ctx.globalAlpha=1
  }
  function drawWeapon(){
    const moving=keys.KeyW||keys.KeyA||keys.KeyS||keys.KeyD
    const walkX=moving&&player.onGround?Math.sin(bobPhase)*8:0,walkY=moving&&player.onGround?Math.abs(Math.cos(bobPhase))*7:0
    const baseX=W*(.70-.20*ads)+weaponSwayX*W*.11+walkX*(1-ads)
    const baseY=H*(.91-.075*ads)+weaponSwayY*H*.10+walkY*(1-ads)+landKick*20+weaponKick*23+sprintBlend*H*.12
    let rotation=-.13*(1-ads)+sprintBlend*.48-weaponKick*.035,drop=0,magOffset=0,bolt=0,leftHandY=0,leftHandX=0
    if(reloadT>0){const p=reloadStage;if(p<.20){const q=p/.20;rotation-=q*.36;drop=q*20}else if(p<.52){const q=(p-.20)/.32;rotation=-.49;drop=20+Math.sin(q*Math.PI)*18;magOffset=q*105;leftHandX=-q*28;leftHandY=q*78}else if(p<.76){const q=(p-.52)/.24;rotation=-.49;drop=20;magOffset=(1-q)*105;leftHandX=-(1-q)*28;leftHandY=(1-q)*78}else{const q=(p-.76)/.24;rotation=-.49+q*.36;drop=(1-q)*20;bolt=Math.sin(q*Math.PI)*21}}
    const scale=Math.min(W/1080,H/650)*(1+ads*.10)
    ctx.save();ctx.translate(baseX,baseY+drop);ctx.rotate(rotation);ctx.scale(scale,scale)
    ctx.fillStyle='#4b4036';ctx.beginPath();ctx.moveTo(85,175);ctx.lineTo(31,72);ctx.lineTo(62,44);ctx.lineTo(139,162);ctx.closePath();ctx.fill()
    ctx.fillStyle='#253029';ctx.beginPath();ctx.moveTo(73,173);ctx.lineTo(22,83);ctx.lineTo(54,52);ctx.lineTo(132,158);ctx.closePath();ctx.fill()
    ctx.fillStyle='#4b4036';ctx.beginPath();ctx.moveTo(-178+leftHandX,166+leftHandY);ctx.lineTo(-62+leftHandX,-32+leftHandY);ctx.lineTo(-20+leftHandX,-14+leftHandY);ctx.lineTo(-105+leftHandX,181+leftHandY);ctx.closePath();ctx.fill()
    ctx.fillStyle='#29342d';ctx.beginPath();ctx.moveTo(-169+leftHandX,170+leftHandY);ctx.lineTo(-60+leftHandX,-19+leftHandY);ctx.lineTo(-28+leftHandX,-4+leftHandY);ctx.lineTo(-110+leftHandX,184+leftHandY);ctx.closePath();ctx.fill()
    ctx.strokeStyle='#526258';ctx.lineWidth=2;ctx.fillStyle='#132019';ctx.beginPath();ctx.moveTo(-67,55);ctx.lineTo(58,50);ctx.lineTo(40,-83);ctx.lineTo(-34,-91);ctx.closePath();ctx.fill();ctx.stroke()
    ctx.fillStyle='#1f2b24';ctx.beginPath();ctx.moveTo(-54,48);ctx.lineTo(-20,48);ctx.lineTo(-2,126);ctx.lineTo(-39,136);ctx.closePath();ctx.fill();ctx.stroke()
    ctx.fillStyle='#0a0f0c';ctx.beginPath();ctx.moveTo(-25,48+magOffset);ctx.lineTo(24,47+magOffset);ctx.lineTo(15,133+magOffset);ctx.lineTo(-20,139+magOffset);ctx.closePath();ctx.fill();ctx.stroke()
    ctx.fillStyle='#111a15';ctx.beginPath();ctx.moveTo(-30,-82);ctx.lineTo(39,-76);ctx.lineTo(28,-184);ctx.lineTo(-13,-187);ctx.closePath();ctx.fill();ctx.stroke()
    ctx.fillStyle='#080d0a';ctx.beginPath();ctx.moveTo(-10,-184);ctx.lineTo(27,-181);ctx.lineTo(18,-246);ctx.lineTo(1,-247);ctx.closePath();ctx.fill();ctx.stroke()
    ctx.fillStyle='#27342c';ctx.fillRect(-4,-258,28,15);ctx.strokeRect(-4,-258,28,15)
    ctx.fillStyle='#0a0f0c';ctx.beginPath();ctx.moveTo(-23,-100);ctx.lineTo(31,-95);ctx.lineTo(27,-70);ctx.lineTo(-20,-74);ctx.closePath();ctx.fill();ctx.stroke()
    ctx.fillStyle='#a9ff35';ctx.fillRect(-12,-88,31,3);ctx.fillRect(-19,-38,58,3)
    ctx.fillStyle='#45e6ff';ctx.fillRect(27+bolt,-60,18,4)
    ctx.fillStyle='#343f38';ctx.beginPath();ctx.moveTo(25,46);ctx.lineTo(57,42);ctx.lineTo(72,101);ctx.lineTo(40,109);ctx.closePath();ctx.fill();ctx.stroke()
    ctx.fillStyle='#604f41';ctx.beginPath();ctx.arc(46,83,24,0,Math.PI*2);ctx.fill();ctx.fillStyle='#263029';ctx.beginPath();ctx.arc(46,83,19,0,Math.PI*2);ctx.fill()
    ctx.fillStyle='#604f41';ctx.beginPath();ctx.arc(-43+leftHandX,-22+leftHandY,25,0,Math.PI*2);ctx.fill();ctx.fillStyle='#263029';ctx.beginPath();ctx.arc(-43+leftHandX,-22+leftHandY,20,0,Math.PI*2);ctx.fill()
    if(ads>.45){ctx.strokeStyle=`rgba(169,255,53,${(ads-.45)*1.7})`;ctx.lineWidth=2;ctx.beginPath();ctx.arc(4,-87,8,0,Math.PI*2);ctx.stroke();ctx.fillStyle='#a9ff35';ctx.fillRect(3,-88,2,2)}
    if(muzzle>0){ctx.globalCompositeOperation='screen';ctx.fillStyle='#fff0a7';ctx.beginPath();ctx.moveTo(10,-258);ctx.lineTo(-22,-306);ctx.lineTo(9,-282);ctx.lineTo(39,-310);ctx.lineTo(23,-261);ctx.fill();ctx.fillStyle='#ff9d35';ctx.beginPath();ctx.arc(10,-264,14,0,Math.PI*2);ctx.fill();ctx.globalCompositeOperation='source-over'}
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
  $('deployBtn').onclick=startRound;$('againBtn').onclick=startRound;$('resumeBtn').onclick=resumeGame;$('restartPauseBtn').onclick=startRound
  spawnEnemies();render()
})()
