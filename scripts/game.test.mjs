import {test} from 'node:test'
import assert from 'node:assert/strict'
import {Authority} from '../src/game/authority.js'
import {makePlayer,movePlayer,wallDistance} from '../src/game/world.js'

test('capsule stops at concrete and cannot move through a crate',()=>{
 const p=makePlayer('a','A');Object.assign(p,{x:-14,z:-8,y:0});for(let i=0;i<150;i++)movePlayer(p,{w:true,yaw:0,pitch:0},1/60);assert.ok(p.z>=-10.69,'warehouse wall blocks movement')
 Object.assign(p,{x:-5,z:10,y:0,vx:0,vy:0,vz:0});for(let i=0;i<120;i++)movePlayer(p,{w:true,yaw:0,pitch:0},1/60);assert.ok(p.z>=8.09,'crate blocks movement')
})
test('jump, gravity, ramp ascent and crouch remain finite',()=>{
 const p=makePlayer('a','A');Object.assign(p,{x:-20,z:-4.8,y:0});for(let i=0;i<95;i++)movePlayer(p,{w:true,yaw:Math.PI,pitch:0},1/60);assert.ok(p.y>3,'ramp reaches rooftop');movePlayer(p,{jump:true},1/60);assert.ok(p.vy>0);for(let i=0;i<180;i++)movePlayer(p,{},1/60);assert.ok(p.ground);assert.ok(Number.isFinite(p.x+p.y+p.z));movePlayer(p,{crouch:true},1/60);assert.equal(p.height,1.12)
})
function duel(){const a=new Authority();a.add('host','Host');a.add('guest','Guest');a.start();for(let i=0;i<181;i++)a.tick(1/60);const p=a.players.get('host'),q=a.players.get('guest');Object.assign(p,{x:-25,y:0,z:-24,yaw:0,pitch:0,protect:0});Object.assign(q,{x:-25,y:0,z:-27,protect:0});return{a,p,q}}
test('authoritative fire validates ammo/cooldown, awards kills, respawns',()=>{
 const {a,p,q}=duel();a.input('host',{yaw:0,pitch:0,fire:true});a.tick(1/60);assert.ok(q.hp<100);assert.equal(p.ammo,29);const first=q.hp; a.tick(1/60);assert.equal(q.hp,first,'fire rate cannot be bypassed');for(let i=0;i<40;i++){a.input('host',{yaw:0,pitch:0,fire:true});a.tick(1/60)}assert.equal(q.hp,0);assert.equal(p.kills,1);assert.equal(q.deaths,1);assert.equal(p.score,150);for(let i=0;i<190;i++){a.input('host',{});a.tick(1/60)}assert.equal(q.hp,100);assert.ok(q.protect>0)
})
test('walls and spawn protection block damage',()=>{
 const {a,p,q}=duel();q.protect=2;a.fire(p);assert.equal(q.hp,100);q.protect=0;p.cooldown=0;Object.assign(p,{x:-14,z:-8});Object.assign(q,{x:-14,z:-24});a.fire(p);assert.equal(q.hp,100);assert.ok(wallDistance({x:-14,y:1.66,z:-8},{x:0,y:0,z:-1})<4)
})
test('reload, late join snapshot, match end and restart share canonical state',()=>{
 const {a,p}=duel();p.ammo=5;a.input('host',{reload:true});a.tick(1/60);assert.ok(p.reload>2);for(let i=0;i<140;i++){a.input('host',{});a.tick(1/60)}assert.equal(p.ammo,30);assert.equal(p.reserve,95);a.add('late','Late');const s=a.snapshot();assert.equal(s.players.length,3);assert.equal(s.phase,'playing');a.timer=.01;a.tick(1/60);assert.equal(a.phase,'ended');a.start();assert.equal(a.phase,'countdown');assert.equal(a.players.get('host').kills,0);a.remove('late');assert.equal(a.players.size,2)
})
test('malformed input cannot inject health, position, fire rate or invalid angles',()=>{
 const {a,p}=duel(),x=p.x;a.input('host',{x:999,hp:999,ammo:999,yaw:NaN,pitch:Infinity,fire:'true'});a.tick(1/60);assert.equal(p.x,x);assert.equal(p.hp,100);assert.equal(p.ammo,30);assert.ok(Number.isFinite(p.yaw+p.pitch))
})
