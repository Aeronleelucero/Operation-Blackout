// Shared geometry definitions are used by rendering, collision and host hit tests.
export const boxes = []
const add=(x,y,z,w,h,d,kind='concrete')=>boxes.push({x,y,z,w,h,d,kind})
export const ramps=[{x:-20,z:1,w:4,d:12,h:3.8,axis:'z',sign:1},{x:20,z:-1,w:4,d:12,h:3.8,axis:'z',sign:-1}]
export const spawns=[[-25,0,-24],[25,0,24],[25,0,-24],[-25,0,24],[-6,0,-25],[6,0,25],[-23,3.8,10],[23,3.8,-10],[-9,0,10],[9,0,-10],[-26,0,0],[26,0,0]]
add(0,-.3,0,60,.6,60,'floor')
for(const x of [-30,30])add(x,4,0,1,8,60)
for(const z of [-30,30])add(0,4,z,60,8,1)
// Four compounds leave a connected perimeter, cross lanes and central courtyard.
for(const [x,z] of [[-14,-16],[14,16]]){
 add(x,3.1,z,12,6.2,10)
 add(x,6.3,z,12.5,.25,10.5,'cap')
}
// Accessible warehouse interiors with framed doorways and walkable roofs.
for(const [x,z] of [[-22,11],[22,-11]]){
 add(x,3.65,z,12,.3,10,'cap')
 add(x-5.7,1.75,z,.6,3.5,10);add(x+5.7,1.75,z,.6,3.5,10)
 for(const dz of [-4.7,4.7]){add(x-4,1.75,z+dz,3.5,3.5,.6);add(x+4,1.75,z+dz,3.5,3.5,.6);add(x,3.1,z+dz,4.5,.8,.6)}
}
// Elevated bridge connects both roof routes through the arena's north/south lanes.
add(-13,3.65,12,8,.3,3,'steel');add(-9.2,1.8,12,.45,3.6,.45,'steel')
add(13,3.65,-12,8,.3,3,'steel');add(9.2,1.8,-12,.45,3.6,.45,'steel')
for(const z of [-14,14]){add(0,1,z,6,2,1.1,'red');add(0,1.1,z+1.5,1,2.2,1,'crate')}
add(0,1.5,0,7,3,3.2,'container');add(-9,1.5,-2,3.2,3,7,'container');add(9,1.5,2,3.2,3,7,'container')
for(const [x,z,s] of [[-5,7,1.6],[5,-7,1.6],[-10,21,2],[10,-21,2],[-24,-8,1.7],[24,8,1.7],[-4,-21,1.5],[4,21,1.5],[-16,3,1.4],[16,-3,1.4]])add(x,s/2,z,s,s,s,'crate')
add(-4,1.2,23,4,2.4,1,'red');add(4,1.2,-23,4,2.4,1,'red')
export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v))
export function rampHeight(r,x,z){const a=r.axis==='z'?z-r.z:x-r.x,b=r.axis==='z'?x-r.x:z-r.z;return Math.abs(b)<r.w/2+.1&&Math.abs(a)<=r.d/2?r.h*(a/r.d*r.sign+.5):null}
export function makePlayer(id,name,index=0){const s=spawns[index%spawns.length];return{id,name,x:s[0],y:s[1],z:s[2],vx:0,vy:0,vz:0,yaw:Math.atan2(s[0],s[2]),pitch:0,ground:true,height:1.8,hp:100,armor:50,ammo:30,reserve:120,kills:0,deaths:0,score:0,protect:3,respawn:0,reload:0,cooldown:0,slide:0,jumpHeld:false,slideHeld:false,shot:0,input:{}}}
export function movePlayer(p,input,dt){
 p.yaw=Number.isFinite(input.yaw)?input.yaw:p.yaw;p.pitch=clamp(Number.isFinite(input.pitch)?input.pitch:p.pitch,-1.48,1.48)
 const crouch=!!input.crouch,oldHeight=p.height,target=crouch?1.12:1.8
 p.height=target
 if(target>oldHeight&&boxes.some(b=>Math.abs(p.x-b.x)<b.w/2+.3&&Math.abs(p.z-b.z)<b.d/2+.3&&b.y-b.h/2>p.y+.2&&b.y-b.h/2<p.y+target))p.height=oldHeight
 const forward=(input.w?1:0)-(input.s?1:0),side=(input.d?1:0)-(input.a?1:0),n=Math.hypot(forward,side)||1
 if(crouch&&!p.slideHeld&&p.ground&&Math.hypot(p.vx,p.vz)>6){p.slide=.65;p.vx*=1.25;p.vz*=1.25}p.slideHeld=crouch;p.slide=Math.max(0,p.slide-dt)
 const speed=p.slide>0?11:crouch?4:input.sprint?10.5:7.6
 const dx=(side*Math.cos(p.yaw)-forward*Math.sin(p.yaw))/n,dz=(-side*Math.sin(p.yaw)-forward*Math.cos(p.yaw))/n
 const blend=1-Math.exp(-(p.ground?18:4.2)*dt)
 if(p.slide<=0){p.vx+=(dx*speed-p.vx)*blend;p.vz+=(dz*speed-p.vz)*blend}else{p.vx*=Math.exp(-1.1*dt);p.vz*=Math.exp(-1.1*dt)}
 if(input.jump&&!p.jumpHeld&&p.ground){p.vy=8.8;p.ground=false}p.jumpHeld=!!input.jump
 p.vy-=24*dt
 const steps=Math.max(1,Math.ceil(Math.hypot(p.vx,p.vz)*dt/.15)),sub=dt/steps
 for(let i=0;i<steps;i++){
  const previousY=p.y;p.x+=p.vx*sub;p.z+=p.vz*sub;p.y+=p.vy*sub;p.ground=false
  let floor=0
  for(const r of ramps){const h=rampHeight(r,p.x,p.z);if(h!==null&&h<=previousY+.28)floor=Math.max(floor,h)}
  for(const b of boxes){if(b.kind==='floor')continue;const top=b.y+b.h/2,bottom=b.y-b.h/2
   const qx=clamp(p.x,b.x-b.w/2,b.x+b.w/2),qz=clamp(p.z,b.z-b.d/2,b.z+b.d/2),ex=p.x-qx,ez=p.z-qz,dist=Math.hypot(ex,ez),radius=.32
   if(dist>=radius)continue
   if(previousY>=top-.12&&p.vy<=0){floor=Math.max(floor,top);continue}
   if(p.y+p.height<=bottom||p.y>=top-.02)continue
   if(previousY+p.height<=bottom+.08&&p.vy>0){p.y=bottom-p.height-.01;p.vy=0;continue}
   if(dist>.0001){p.x+=ex/dist*(radius-dist);p.z+=ez/dist*(radius-dist)}else{
    const sides=[{v:p.x-(b.x-b.w/2)+radius,axis:'x',sign:-1},{v:b.x+b.w/2-p.x+radius,axis:'x',sign:1},{v:p.z-(b.z-b.d/2)+radius,axis:'z',sign:-1},{v:b.z+b.d/2-p.z+radius,axis:'z',sign:1}].sort((a,b)=>a.v-b.v);p[sides[0].axis]+=sides[0].v*sides[0].sign
   }
  }
  if(p.y<=floor&&p.vy<=0){p.y=floor;p.vy=0;p.ground=true}
 }
}
export function rayBox(origin,dir,b,max=200){let near=0,far=max;for(const [axis,size] of [['x','w'],['y','h'],['z','d']]){const lo=b[axis]-b[size]/2,hi=b[axis]+b[size]/2;if(Math.abs(dir[axis])<1e-8){if(origin[axis]<lo||origin[axis]>hi)return null}else{const a=(lo-origin[axis])/dir[axis],c=(hi-origin[axis])/dir[axis];near=Math.max(near,Math.min(a,c));far=Math.min(far,Math.max(a,c));if(near>far)return null}}return near}
export function wallDistance(origin,dir){let best=150;for(const b of boxes){const d=rayBox(origin,dir,b,best);if(d!==null)best=Math.min(best,d)}
 for(const r of ramps){const slope=r.h/r.d*r.sign,den=dir.y-slope*dir[r.axis];if(Math.abs(den)<1e-7)continue;const t=(r.h*.5+slope*(origin[r.axis]-r[r.axis])-origin.y)/den;if(t>0&&t<best&&rampHeight(r,origin.x+dir.x*t,origin.z+dir.z*t)!==null)best=t}return best}
export function shotDirection(yaw,pitch){return{x:-Math.sin(yaw)*Math.cos(pitch),y:Math.sin(pitch),z:-Math.cos(yaw)*Math.cos(pitch)}}
