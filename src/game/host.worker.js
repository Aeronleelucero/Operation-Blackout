import {Authority} from './authority.js'
const match=new Authority()
let last=performance.now(),acc=0,broadcast=0
self.onmessage=({data:m})=>{
 if(m.type==='add')match.add(m.id,m.name,m.bot)
 if(m.type==='remove')match.remove(m.id)
 if(m.type==='input')match.input(m.id,m.input)
 if(m.type==='start')match.start()
 if(m.type==='snapshot')postMessage(match.snapshot())
 // Development-only fixture: real transport/combat still runs normally afterward.
 if(import.meta.env.DEV&&m.type==='qaDuel'){let i=0;for(const p of match.players.values()){Object.assign(p,{x:-25,y:0,z:-24-i*3,yaw:i?Math.PI:0,pitch:0,hp:100,armor:50,ammo:30,reserve:120,protect:0,reload:0,respawn:0,vx:0,vy:0,vz:0,input:{}});i++}match.round++;match.phase='playing';postMessage(match.snapshot())}
 if(import.meta.env.DEV&&m.type==='qaEnd'){match.timer=.01}
}
setInterval(()=>{
 const now=performance.now(),dt=Math.min(1,(now-last)/1000);last=now;acc+=dt;broadcast+=dt
 while(acc>=1/60){match.tick(1/60);acc-=1/60}
 if(broadcast>=1/30){broadcast=0;postMessage(match.snapshot())}
},1000/60)
