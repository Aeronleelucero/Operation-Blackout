import {MAX_PLAYERS} from './authority.js'
import Peer from 'peerjs'
export class Room {
 constructor(onState,onStatus,onChat){this.onState=onState;this.onStatus=onStatus;this.onChat=onChat;this.peer=null;this.connections=new Map();this.authority=null;this.id='local';this.code='';this.isHost=false;this.ping=0;this.acc=0;this.sendAcc=0;this.latestInput={};this.session=0;this.chatTimes=new Map()}
 status(text){this.onStatus(text)}
 cleanup(){this.session++;clearTimeout(this.timeout);this.peer?.destroy();this.peer=null;this.connections.clear();this.authority?.terminate();this.authority=null;this.isHost=false;this.code='';this.acc=this.sendAcc=0;this.latestState=null}
 createAuthority(){this.authority=new Worker(new URL('./host.worker.js',import.meta.url),{type:'module'});this.authority.onmessage=({data:state})=>{this.latestState=state;this.onState(state);this.broadcast({type:'state',state})};this.authority.onerror=()=>this.status('Host simulation stopped. Please restart the room.')}
 command(type,data={}){this.authority?.postMessage({type,...data})}
 practice(name){this.cleanup();this.id='local';this.isHost=true;this.createAuthority();this.command('add',{id:this.id,name});for(let i=0;i<5;i++)this.command('add',{id:'bot-'+i,name:['Viper','Rook','Ghost','Echo','Flint'][i],bot:true});this.command('start');this.publish()}
 async open(host,code,name){this.cleanup();this.isHost=host;this.code=host?this.makeCode():String(code).toUpperCase();if(!/^[A-Z2-9]{6}$/.test(this.code))throw new Error('Enter the six-character room code.');const session=this.session;this.status(host?'CREATING ROOM…':'CONNECTING…');if(host)this.createAuthority();const peer=this.peer=new Peer(host?'ob3d-'+this.code:undefined,{debug:0});this.timeout=setTimeout(()=>{if(session===this.session){this.status('Connection timed out. Check the code or try another network.');this.cleanup()}},18000)
  peer.on('open',id=>{if(session!==this.session)return;this.id=id;if(host){clearTimeout(this.timeout);this.command('add',{id,name});this.status('ROOM '+this.code+' · READY');this.publish()}else{const conn=peer.connect('ob3d-'+this.code,{reliable:true,serialization:'json',metadata:{name:String(name).slice(0,18)}});this.bind(conn,session)}})
  peer.on('connection',conn=>{if(!host||this.connections.size>=MAX_PLAYERS-1){conn.on('open',()=>{conn.send({type:'reject',message:'Room is full.'});setTimeout(()=>conn.close(),100)});return}this.bind(conn,session)})
  peer.on('error',e=>{if(session===this.session){this.status(({ 'peer-unavailable':'Room not found. Check the code.', 'unavailable-id':'Code already in use. Host again.',network:'Signaling connection unavailable.'})[e.type]||'Connection failed: '+e.type);this.cleanup()}})
  peer.on('disconnected',()=>{if(session===this.session)this.status('Room service disconnected. Existing peers may remain connected.')})
 }
 makeCode(){const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789',bytes=crypto.getRandomValues(new Uint8Array(6));return [...bytes].map(n=>chars[n%chars.length]).join('')}
 bind(conn,session){conn.on('open',()=>{if(session!==this.session||(this.isHost&&this.connections.size>=MAX_PLAYERS-1)){conn.close();return}clearTimeout(this.timeout);this.connections.set(conn.peer,conn);if(this.isHost){this.command('add',{id:conn.peer,name:conn.metadata?.name});this.publish()}else this.status('CONNECTED · ROOM '+this.code)})
  conn.on('data',m=>{if(session!==this.session||!m||typeof m!=='object')return;if(this.isHost){if(m.type==='input')this.command('input',{id:conn.peer,input:m.input});if(m.type==='ping')conn.send({type:'pong',at:m.at});if(m.type==='chat')this.relayChat(conn.peer,m.text)}else{if(m.type==='state')this.onState(m.state);if(m.type==='pong')this.ping=Math.max(0,Math.round(performance.now()-m.at));if(m.type==='chat')this.onChat(m.name,m.text);if(m.type==='reject')this.status(m.message)}})
  conn.on('close',()=>{if(session!==this.session)return;this.connections.delete(conn.peer);if(this.isHost){this.command('remove',{id:conn.peer});this.publish()}else{this.cleanup();this.status('HOST DISCONNECTED · Return to lobby to join another room.');this.onState({phase:'disconnected',players:[],events:[]})}})
  conn.on('error',()=>this.status('Peer connection interrupted.'))
 }
 broadcast(m){for(const c of this.connections.values())if(c.open)try{c.send(m)}catch{}}
 publish(){this.command('snapshot')}
 start(){if(this.isHost&&this.authority){this.command('start');this.publish()}}
 update(dt,input){this.latestInput=input;this.sendAcc+=dt;if(this.sendAcc>=1/60){this.sendAcc=0;if(this.authority)this.command('input',{id:this.id,input});else for(const c of this.connections.values())if(c.open)c.send({type:'input',input})}if(!this.isHost&&this.peer&&performance.now()-(this.lastPing||0)>1500){this.lastPing=performance.now();for(const c of this.connections.values())if(c.open)c.send({type:'ping',at:this.lastPing})}}
 relayChat(id,text){if(typeof text!=='string'||Date.now()-(this.chatTimes.get(id)||0)<600)return;this.chatTimes.set(id,Date.now());const p=this.latestState?.players.find(p=>p.id===id);if(!p)return;text=text.trim().slice(0,140);if(!text)return;this.onChat(p.name,text);this.broadcast({type:'chat',name:p.name,text})}
 chat(text){if(this.isHost)this.relayChat(this.id,text);else for(const c of this.connections.values())if(c.open)c.send({type:'chat',text})}
}
