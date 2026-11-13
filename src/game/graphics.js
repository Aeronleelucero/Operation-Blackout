import * as T from 'three'
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js'
import { boxes, ramps, clamp } from './world.js'

const geoBox=new T.BoxGeometry(1,1,1)
const materials=new Map()
export function mat(color,metalness=0,roughness=.8){const key=`${color}/${metalness}/${roughness}`;if(!materials.has(key))materials.set(key,new T.MeshStandardMaterial({color,metalness,roughness,flatShading:true}));return materials.get(key)}
export function cube(parent,color,x,y,z,w,h,d){const mesh=new T.Mesh(geoBox,typeof color==='object'?color:mat(color));mesh.position.set(x,y,z);mesh.scale.set(w,h,d);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh}
function cylinder(parent,color,x,y,z,r,len,axis='y',segments=10){const mesh=new T.Mesh(new T.CylinderGeometry(r,r,len,segments),typeof color==='object'?color:mat(color));mesh.position.set(x,y,z);if(axis==='z')mesh.rotation.x=Math.PI/2;mesh.castShadow=true;parent.add(mesh);return mesh}
function label(text,color='#26323c',size=64){const c=document.createElement('canvas');c.width=512;c.height=128;const ctx=c.getContext('2d');ctx.fillStyle=color;ctx.font=`900 ${size}px sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,256,64);const tex=new T.CanvasTexture(c);tex.colorSpace=T.SRGBColorSpace;return new T.MeshBasicMaterial({map:tex,transparent:true,side:T.DoubleSide,depthWrite:false})}
function sign(parent,text,x,y,z,rot=0,w=4,h=1,color){const m=new T.Mesh(new T.PlaneGeometry(w,h),label(text,color));m.position.set(x,y,z);m.rotation.y=rot;parent.add(m)}
export function buildArena(scene){
 scene.background=new T.Color('#8dcddd');scene.fog=new T.Fog('#a9d8df',45,105)
 scene.add(new T.HemisphereLight('#ecf8ff','#777263',2.1));const sun=new T.DirectionalLight('#fff1d1',2.6);sun.position.set(-18,35,16);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-36,right:36,top:36,bottom:-36,near:1,far:90});sun.shadow.bias=-.0007;sun.shadow.normalBias=.03;scene.add(sun)
 const floorCanvas=document.createElement('canvas');floorCanvas.width=floorCanvas.height=128;const f=floorCanvas.getContext('2d');f.fillStyle='#79828e';f.fillRect(0,0,128,128);f.strokeStyle='#535e6c';f.lineWidth=3;f.strokeRect(0,0,128,128);f.strokeStyle='#929aa2';f.lineWidth=1;f.strokeRect(4,4,120,120);const ft=new T.CanvasTexture(floorCanvas);ft.wrapS=ft.wrapT=T.RepeatWrapping;ft.repeat.set(30,30);ft.colorSpace=T.SRGBColorSpace;ft.anisotropy=4
 const floorMat=new T.MeshStandardMaterial({map:ft,roughness:1});const palette={concrete:'#e5e3dc',red:'#883e42',container:'#81363c',crate:'#947148',cap:'#c7cbc8',steel:'#6d7880'}
 const arena=new T.Group();scene.add(arena)
 for(const b of boxes){cube(arena,b.kind==='floor'?floorMat:palette[b.kind]||palette.concrete,b.x,b.y,b.z,b.w,b.h,b.d)
  if(b.kind==='concrete'){const hh=Math.min(2.15,b.h);cube(arena,'#874045',b.x,b.y-b.h/2+hh/2,b.z,b.w+.025,hh,b.d+.025);cube(arena,'#d4d3ca',b.x,b.y-b.h/2+hh+.06,b.z,b.w+.06,.12,b.d+.06)}
  if(b.kind==='crate'){
   for(const dz of [-1,1]){for(const dx of [-.39,.39])cube(arena,'#58452f',b.x+b.w*dx,b.y,b.z+dz*(b.d/2+.015),.1,b.h,.055);for(const dy of [-.4,.4])cube(arena,'#58452f',b.x,b.y+b.h*dy,b.z+dz*(b.d/2+.025),b.w,.1,.06);const brace=cube(arena,'#725839',b.x,b.y,b.z+dz*(b.d/2+.05),.13,Math.hypot(b.w*.85,b.h*.8),.06);brace.rotation.z=-Math.atan2(b.w*.85,b.h*.8)}
  }
  if(b.kind==='container'){for(let i=-b.w/2+.25;i<b.w/2;i+=.42)for(const s of [-1,1])cube(arena,'#9b4a4d',b.x+i,b.y,b.z+s*(b.d/2+.03),.055,b.h-.2,.06);for(const s of [-1,1])cube(arena,'#63272e',b.x,b.y+b.h/2-.1,b.z+s*b.d/2,b.w,.12,.1)}
 }
 for(const r of ramps){const points=[-r.w/2,0,-r.d/2,r.w/2,0,-r.d/2,r.w/2,r.h,r.d/2,-r.w/2,r.h,r.d/2];const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(points,3));g.setIndex([0,2,1,0,3,2]);g.computeVertexNormals();const m=new T.Mesh(g,mat('#b1b5b4'));m.position.set(r.x,0,r.z);if(r.sign<0)m.rotation.y=Math.PI;m.receiveShadow=true;scene.add(m);for(let i=0;i<12;i++){const z=r.z+(i/12-.5)*r.d*r.sign;cube(scene,'#727d80',r.x,r.h*i/12+.012,z,r.w,.02,.04)}}
 sign(scene,'09 / FOUNDRY',-14,4,-10.98,0,9,2);sign(scene,'BLACKOUT',14,4,10.98,Math.PI,8,1.6);sign(scene,'A',-27,2,16.05,0,1.4,1.4,'#eee6ce');sign(scene,'B',27,2,-16.05,Math.PI,1.4,1.4,'#eee6ce');sign(scene,'FREIGHT',0,1.7,1.62,0,4,.8,'#dfb3a0')
 for(const [x,z] of [[-28,-27],[28,27],[28,-27],[-28,27]]){cylinder(scene,'#82705a',x,3.2,z,.22,6.4);for(let i=0;i<5;i++){const a=i*Math.PI*2/5;const leaf=cube(scene,'#657749',x+Math.sin(a)*1.2,6.3,z+Math.cos(a)*1.2,.65,.12,3.1);leaf.rotation.set(.2,a,.15)}}
 for(const [x,z] of [[-14,-16],[14,16]]){cube(scene,'#909d9c',x+2,6.9,z,2,1,1.6);for(let i=0;i<6;i++)cube(scene,'#596965',x+1.2+i*.3,7.42,z,.08,.04,1.3)}
 // Batch opaque static meshes by material. Dynamic soldiers/viewmodel stay separate.
 scene.updateMatrixWorld(true);const batches=new Map(),originals=[]
 scene.traverse(o=>{if(!o.isMesh||o.material.transparent)return;const list=batches.get(o.material)||[];list.push(o.geometry.clone().applyMatrix4(o.matrixWorld));batches.set(o.material,list);originals.push(o)})
 for(const o of originals)o.removeFromParent()
 for(const [material,geometries] of batches){const merged=mergeGeometries(geometries,false);if(merged){const mesh=new T.Mesh(merged,material);mesh.castShadow=true;mesh.receiveShadow=true;scene.add(mesh)}for(const g of geometries)g.dispose()}
 return {sun}
}
export function makeRifle(detailed=true){
 const root=new T.Group(),steel=mat('#343b42',.7,.38),dark=mat('#12171c',.35,.55),edge=mat('#626b72',.7,.4),tan=mat('#937253',0,.8)
 cube(root,steel,0,0,0,.14,.17,.43);cube(root,edge,0,.094,-.015,.12,.025,.48);cube(root,dark,0,-.08,.02,.13,.08,.32)
 cube(root,tan,0,.005,-.37,.13,.135,.32);cube(root,dark,0,.09,-.39,.12,.025,.37)
 cylinder(root,steel,0,.025,-.67,.027,.29,'z');cylinder(root,dark,0,.025,-.84,.036,.09,'z');cylinder(root,edge,0,.025,-.886,.028,.008,'z')
 cube(root,dark,0,.00,.29,.10,.12,.22);cube(root,dark,0,-.02,.44,.15,.21,.09);cube(root,edge,0,.052,.3,.06,.023,.25)
 const grip=cube(root,dark,0,-.19,.12,.085,.24,.11);grip.rotation.x=-.24
 cube(root,steel,0,-.19,.015,.018,.02,.13);cube(root,steel,0,-.14,-.045,.018,.10,.018);cube(root,edge,0,-.13,.025,.013,.07,.016)
 const magazine=new T.Group();magazine.position.set(0,-.13,-.15);root.add(magazine);const mag=cube(magazine,dark,0,-.13,0,.09,.29,.15);mag.rotation.x=.12;cube(magazine,edge,0,-.275,-.017,.11,.027,.17)
 for(let i=0;i<4;i++)cube(magazine,edge,.047,-.035-i*.05,-.005,.008,.008,.12)
 const bolt=cube(root,edge,.095,.035,.065,.065,.028,.06)
 // Open rectangular optic leaves an actual clear sight line.
 cube(root,dark,0,.12,-.09,.13,.025,.14);cube(root,dark,-.058,.18,-.09,.016,.10,.07);cube(root,dark,.058,.18,-.09,.016,.10,.07);cube(root,dark,0,.235,-.09,.13,.016,.07)
 const lens=new T.Mesh(new T.PlaneGeometry(.10,.09),new T.MeshBasicMaterial({color:'#66dbd2',transparent:true,opacity:.08,depthWrite:false,side:T.DoubleSide}));lens.position.set(0,.18,-.12);root.add(lens)
 const dot=new T.Mesh(new T.SphereGeometry(.002,6,6),new T.MeshBasicMaterial({color:'#ff4c34'}));dot.position.set(0,.18,-.142);root.add(dot)
 if(detailed){for(let i=0;i<16;i++)cube(root,steel,0,.115,.17-i*.04,.17,.015,.017);for(let i=0;i<7;i++){cube(root,dark,.069,.015,-.25-i*.035,.008,.065,.018);cube(root,dark,-.069,.015,-.25-i*.035,.008,.065,.018)}for(const z of [-.13,.13])cylinder(root,edge,.073,.01,z,.017,.008,'z',8);cube(root,dark,.075,.04,.015,.008,.035,.13);for(let i=0;i<4;i++)cube(root,steel,.048,-.14-i*.035,.13,.009,.012,.08)}
 const muzzle=new T.Group();muzzle.position.set(0,.025,-.93);root.add(muzzle);const flame=new T.Mesh(new T.ConeGeometry(.065,.2,6),new T.MeshBasicMaterial({color:'#ffdc71',transparent:true,opacity:.9,depthWrite:false}));flame.rotation.x=-Math.PI/2;muzzle.add(flame);const flare=new T.PointLight('#ffbd61',0,3);muzzle.add(flare);muzzle.visible=false
 return {root,magazine,bolt,muzzle,flare}
}
function limb(parent,a,b,width,depth,color){const av=new T.Vector3(...a),bv=new T.Vector3(...b),m=cube(parent,color,0,0,0,width,av.distanceTo(bv),depth);m.position.copy(av).add(bv).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),bv.sub(av).normalize());return m}
export class Viewmodel {
 constructor(){this.scene=new T.Scene();this.camera=new T.PerspectiveCamera(66,1,.01,5);this.scene.add(new T.HemisphereLight('#eaf6ff','#5a5349',2.8));const light=new T.DirectionalLight('#ffefd3',3);light.position.set(-2,3,1);this.scene.add(light);Object.assign(this,makeRifle());this.scene.add(this.root);this.recoil=0;this.sway=new T.Vector2();this.aim=0;this.sprint=0;this.walk=0;this.phase=0;this.land=0;this.flash=0;this.left=new T.Group();this.root.add(this.left)
  limb(this.root,[.055,-.16,.11],[.18,-.40,.51],.105,.11,'#263139');limb(this.left,[-.07,-.06,-.42],[-.32,-.37,.30],.105,.12,'#263139')
  this.glove(this.root,.025,-.14,.105);this.glove(this.left,-.047,-.055,-.4)
 }
 glove(parent,x,y,z){const g=new T.Group();g.position.set(x,y,z);parent.add(g);cube(g,'#4f574e',0,0,0,.105,.095,.12);cube(g,'#242e29',0,.05,.01,.09,.015,.07);for(let i=0;i<4;i++){const finger=cube(g,'#394439',-.04+i*.025,-.023,-.07,.022,.052,.075);finger.rotation.x=.25}cube(g,'#4f574e',-.062,-.005,.025,.04,.055,.07)}
 shoot(){this.recoil=Math.min(.12,this.recoil+.075);this.flash=.055}
 update(dt,p,input,time,mouse){const damp=(v,t,k)=>T.MathUtils.damp(v,t,k,dt),speed=Math.hypot(p.vx,p.vz);this.aim=damp(this.aim,input.aim&&!p.reload&&!input.sprint?1:0,18);this.sprint=damp(this.sprint,input.sprint&&speed>6?1:0,12);this.walk=damp(this.walk,p.ground?Math.min(1,speed/8):0,10);this.phase+=dt*speed*1.5;this.recoil=damp(this.recoil,0,17);this.sway.x=damp(this.sway.x,clamp(mouse.x*.00016,-.018,.018),12);this.sway.y=damp(this.sway.y,clamp(mouse.y*.00012,-.012,.012),12)
  const a=this.aim;this.root.position.set(.32*(1-a)+Math.sin(this.phase)*.009*this.walk*(1-a)+this.sway.x*(1-a),-.30+.120*a+Math.abs(Math.cos(this.phase))*.008*this.walk*(1-a)-.12*this.sprint+Math.sin(time*1.8)*.002*(1-a)-this.land,-.90+.10*a+this.recoil)
  this.root.rotation.set(this.recoil*.7+this.sprint*.45, .02*(1-a),-.035*(1-a)-this.sprint*.4+this.sway.x*.8);this.magazine.position.set(0,-.13,-.15);this.left.position.set(0,0,0);this.left.rotation.set(0,0,0);this.bolt.position.z=.065
  if(p.reload>0){const t=1-p.reload/2.2,s=x=>{x=clamp(x,0,1);return x*x*(3-2*x)},tilt=s(t/.16)*(1-s((t-.8)/.2)),out=s((t-.16)/.22)*(1-s((t-.5)/.24));this.root.rotation.z-=tilt*.48;this.root.position.y-=tilt*.07;this.magazine.position.y-=out*.32;this.left.position.set(-out*.08,-out*.28,out*.18);this.left.rotation.z=-out*.3;this.bolt.position.z+=Math.sin(clamp((t-.77)/.16,0,1)*Math.PI)*.075}
  this.flash=Math.max(0,this.flash-dt);this.muzzle.visible=this.flash>0;this.muzzle.rotation.z=time*31;this.flare.intensity=this.flash>0?2:0;this.land=damp(this.land,0,14)
 }
}
export function makeSoldier(color='#a64c4b'){
 const root=new T.Group(),body=new T.Group();root.add(body);cube(body,color,0,1.12,0,.54,.61,.3);cube(body,'#35403d',0,1.12,-.17,.44,.45,.06);for(const x of [-.13,.13])cube(body,'#535c4a',x,1.1,-.22,.17,.18,.08)
 cube(body,'#bc9371',0,1.60,0,.29,.30,.28);cube(body,'#3f4c43',0,1.73,0,.34,.18,.34);cube(body,'#263d43',0,1.63,-.151,.27,.08,.025)
 const legs=[];for(const x of [-.15,.15]){const pivot=new T.Group();pivot.position.set(x,.84,0);body.add(pivot);cube(pivot,'#444d41',0,-.34,0,.21,.68,.23);cube(pivot,'#242c29',0,-.68,-.055,.23,.15,.34);legs.push(pivot)}
 const arms=new T.Group();arms.position.y=1.3;body.add(arms);limb(arms,[-.32,0,0],[-.16,-.16,-.40],.16,.17,color);limb(arms,[.32,0,0],[.13,-.12,-.22],.16,.17,color);const rifle=makeRifle(false);rifle.root.position.set(.08,-.12,-.31);rifle.root.scale.setScalar(.75);arms.add(rifle.root)
 const c=document.createElement('canvas');c.width=256;c.height=64;const texture=new T.CanvasTexture(c);texture.colorSpace=T.SRGBColorSpace;const sprite=new T.Sprite(new T.SpriteMaterial({map:texture,depthTest:true,transparent:true}));sprite.position.y=2.12;sprite.scale.set(2.3,.575,1);root.add(sprite)
 let lastLabel='';return {root,body,arms,rifle,legs,texture,update(p,dt,time){root.visible=p.hp>0;const k=1-Math.exp(-18*dt);root.position.lerp(new T.Vector3(p.x,p.y,p.z),k);root.rotation.y=p.yaw;body.scale.y=p.height/1.8;arms.rotation.x=p.pitch;const speed=Math.hypot(p.vx,p.vz);legs.forEach((leg,i)=>leg.rotation.x=p.ground?Math.sin(time*speed*1.4+i*Math.PI)*Math.min(.8,speed*.08):-.35);rifle.muzzle.visible=time-p.flashAt<.07;const next=p.name+p.hp;if(next!==lastLabel){lastLabel=next;const ctx=c.getContext('2d');ctx.clearRect(0,0,256,64);ctx.font='bold 23px sans-serif';ctx.textAlign='center';ctx.strokeStyle='#13212b';ctx.lineWidth=4;ctx.strokeText(p.name,128,27);ctx.fillStyle='#ffffff';ctx.fillText(p.name,128,27);ctx.fillStyle='#15232a';ctx.fillRect(48,39,160,8);ctx.fillStyle=p.protect>0?'#6ee8ff':'#b7ed62';ctx.fillRect(48,39,160*p.hp/100,8);texture.needsUpdate=true}},dispose(){texture.dispose();sprite.material.dispose()}}
}
export class Effects {
 constructor(scene){this.pool=Array.from({length:80},()=>{const mesh=new T.Mesh(geoBox,new T.MeshBasicMaterial({color:'#ffd78b'}));mesh.visible=false;scene.add(mesh);return{mesh,life:0,v:new T.Vector3(),gravity:0}});this.cursor=0}
 emit(pos,velocity,color,life=.4,size=.04,gravity=18){const e=this.pool[this.cursor++%this.pool.length];e.mesh.position.copy(pos);e.mesh.scale.set(size,size*.5,size*2);e.mesh.material.color.set(color);e.mesh.visible=true;e.v.copy(velocity);e.life=life;e.gravity=gravity}
 impact(pos){for(let i=0;i<5;i++)this.emit(pos,new T.Vector3(Math.random()*3-1.5,Math.random()*3,Math.random()*3-1.5),'#e8ba7f',.25,.035)}
 update(dt){for(const e of this.pool){if(e.life<=0)continue;e.life-=dt;e.mesh.visible=e.life>0;e.v.y-=e.gravity*dt;e.mesh.position.addScaledVector(e.v,dt);e.mesh.rotation.x+=dt*9;e.mesh.rotation.z+=dt*6}}
}
