/* empty css             */function g0(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in i)){const s=Object.getOwnPropertyDescriptor(n,r);s&&Object.defineProperty(i,r,s.get?s:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Nl="181",_0=0,Rh=1,v0=2,_f=1,vf=2,ai=3,Di=0,$t=1,Hn=2,li=0,Vr=1,hi=2,Ph=3,Dh=4,y0=5,$i=100,b0=101,S0=102,M0=103,E0=104,T0=200,C0=201,A0=202,w0=203,_c=204,vc=205,R0=206,P0=207,D0=208,L0=209,I0=210,U0=211,N0=212,O0=213,F0=214,yc=0,bc=1,Sc=2,jr=3,Mc=4,Ec=5,Tc=6,Cc=7,Ol=0,k0=1,B0=2,Ci=0,z0=1,V0=2,G0=3,H0=4,W0=5,X0=6,yf=7,bf=300,Zr=301,Kr=302,Ac=303,wc=304,ro=306,ks=1e3,oi=1001,Rc=1002,Tn=1003,q0=1004,na=1005,Dn=1006,So=1007,Si=1008,Yn=1009,Sf=1010,Mf=1011,Bs=1012,Fl=1013,Ji=1014,Wn=1015,is=1016,kl=1017,Bl=1018,zs=1020,Ef=35902,Tf=35899,Cf=1021,Af=1022,Bn=1023,Vs=1026,Gs=1027,zl=1028,Vl=1029,Gl=1030,Hl=1031,Wl=1033,Ua=33776,Na=33777,Oa=33778,Fa=33779,Pc=35840,Dc=35841,Lc=35842,Ic=35843,Uc=36196,Nc=37492,Oc=37496,Fc=37808,kc=37809,Bc=37810,zc=37811,Vc=37812,Gc=37813,Hc=37814,Wc=37815,Xc=37816,qc=37817,$c=37818,Yc=37819,jc=37820,Zc=37821,Kc=36492,Jc=36494,Qc=36495,el=36283,tl=36284,nl=36285,il=36286,$0=3200,Y0=3201,Xl=0,j0=1,bi="",kt="srgb",Jr="srgb-linear",$a="linear",ht="srgb",ur=7680,Lh=519,Z0=512,K0=513,J0=514,wf=515,Q0=516,ep=517,tp=518,np=519,rl=35044,Mo=35048,Ih="300 es",Xn=2e3,Ya=2001;function Rf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ip(){const i=ja("canvas");return i.style.display="block",i}const Uh={};function Za(...i){const e="THREE."+i.shift();console.log(e,...i)}function qe(...i){const e="THREE."+i.shift();console.warn(e,...i)}function St(...i){const e="THREE."+i.shift();console.error(e,...i)}function Hs(...i){const e=i.join(" ");e in Uh||(Uh[e]=!0,qe(...i))}function rp(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nh=1234567;const Ps=Math.PI/180,Ws=180/Math.PI;function qn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function ql(i,e){return(i%e+e)%e}function sp(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function ap(i,e,t){return i!==e?(t-i)/(e-i):0}function Ds(i,e,t){return(1-t)*i+t*e}function op(i,e,t,n){return Ds(i,e,1-Math.exp(-t*n))}function cp(i,e=1){return e-Math.abs(ql(i,e*2)-e)}function lp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function hp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function up(i,e){return i+Math.floor(Math.random()*(e-i+1))}function fp(i,e){return i+Math.random()*(e-i)}function dp(i){return i*(.5-Math.random())}function pp(i){i!==void 0&&(Nh=i);let e=Nh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mp(i){return i*Ps}function xp(i){return i*Ws}function gp(i){return(i&i-1)===0&&i!==0}function _p(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yp(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),x=a((n-e)/2);switch(r){case"XYX":i.set(o*h,c*f,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*f,o*l);break;case"ZXZ":i.set(c*f,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*x,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*x,o*l);break;case"ZYZ":i.set(c*x,c*p,o*h,o*l);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Bt={DEG2RAD:Ps,RAD2DEG:Ws,generateUUID:qn,clamp:Ze,euclideanModulo:ql,mapLinear:sp,inverseLerp:ap,lerp:Ds,damp:op,pingpong:cp,smoothstep:lp,smootherstep:hp,randInt:up,randFloat:fp,randFloatSpread:dp,seededRandom:pp,degToRad:mp,radToDeg:xp,isPowerOfTwo:gp,ceilPowerOfTwo:_p,floorPowerOfTwo:vp,setQuaternionFromProperEuler:yp,normalize:ot,denormalize:kn};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],f=n[r+3],d=s[a+0],p=s[a+1],x=s[a+2],g=s[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(o>=1){e[t+0]=d,e[t+1]=p,e[t+2]=x,e[t+3]=g;return}if(f!==g||c!==d||l!==p||h!==x){let m=c*d+l*p+h*x+f*g;m<0&&(d=-d,p=-p,x=-x,g=-g,m=-m);let u=1-o;if(m<.9995){const b=Math.acos(m),_=Math.sin(b);u=Math.sin(u*b)/_,o=Math.sin(o*b)/_,c=c*u+d*o,l=l*u+p*o,h=h*u+x*o,f=f*u+g*o}else{c=c*u+d*o,l=l*u+p*o,h=h*u+x*o,f=f*u+g*o;const b=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=b,l*=b,h*=b,f*=b}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],f=s[a],d=s[a+1],p=s[a+2],x=s[a+3];return e[t]=o*x+h*f+c*p-l*d,e[t+1]=c*x+h*d+l*f-o*p,e[t+2]=l*x+h*p+o*d-c*f,e[t+3]=h*x-o*f-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),f=o(s/2),d=c(n/2),p=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=d*h*f+l*p*x,this._y=l*p*f-d*h*x,this._z=l*h*x+d*p*f,this._w=l*h*f-d*p*x;break;case"YXZ":this._x=d*h*f+l*p*x,this._y=l*p*f-d*h*x,this._z=l*h*x-d*p*f,this._w=l*h*f+d*p*x;break;case"ZXY":this._x=d*h*f-l*p*x,this._y=l*p*f+d*h*x,this._z=l*h*x+d*p*f,this._w=l*h*f-d*p*x;break;case"ZYX":this._x=d*h*f-l*p*x,this._y=l*p*f+d*h*x,this._z=l*h*x-d*p*f,this._w=l*h*f+d*p*x;break;case"YZX":this._x=d*h*f+l*p*x,this._y=l*p*f+d*h*x,this._z=l*h*x-d*p*f,this._w=l*h*f-d*p*x;break;case"XZY":this._x=d*h*f-l*p*x,this._y=l*p*f-d*h*x,this._z=l*h*x+d*p*f,this._w=l*h*f+d*p*x;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-s*f,this.z=r+c*f+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Eo.copy(this).projectOnVector(e),this.sub(Eo)}reflect(e){return this.sub(Eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new R,Oh=new jn;class Ye{constructor(e,t,n,r,s,a,o,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],p=n[5],x=n[8],g=r[0],m=r[3],u=r[6],b=r[1],_=r[4],M=r[7],w=r[2],T=r[5],P=r[8];return s[0]=a*g+o*b+c*w,s[3]=a*m+o*_+c*T,s[6]=a*u+o*M+c*P,s[1]=l*g+h*b+f*w,s[4]=l*m+h*_+f*T,s[7]=l*u+h*M+f*P,s[2]=d*g+p*b+x*w,s[5]=d*m+p*_+x*T,s[8]=d*u+p*M+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,d=o*c-h*s,p=l*s-a*c,x=t*f+n*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=f*g,e[1]=(r*l-h*n)*g,e[2]=(o*n-r*a)*g,e[3]=d*g,e[4]=(h*t-r*c)*g,e[5]=(r*s-o*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new Ye,Fh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bp(){const i={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ht&&(r.r=ui(r.r),r.g=ui(r.g),r.b=ui(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(r.r=Gr(r.r),r.g=Gr(r.g),r.b=Gr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bi?$a:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Jr]:{primaries:e,whitePoint:n,transfer:$a,toXYZ:Fh,fromXYZ:kh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Fh,fromXYZ:kh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),i}const st=bp();function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fr;class Sp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fr===void 0&&(fr=ja("canvas")),fr.width=e.width,fr.height=e.height;const r=fr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=fr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ja("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ui(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mp=0;class $l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Co(r[a].image)):s.push(Co(r[a]))}else s=Co(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let Ep=0;const Ao=new R;class Yt extends rs{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=oi,r=oi,s=Dn,a=Si,o=Bn,c=Yn,l=Yt.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=qn(),this.name="",this.source=new $l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ao).x}get height(){return this.source.getSize(Ao).y}get depth(){return this.source.getSize(Ao).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ks:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ks:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=bf;Yt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],p=c[5],x=c[9],g=c[2],m=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+g)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,M=(p+1)/2,w=(u+1)/2,T=(h+d)/4,P=(f+g)/4,U=(x+m)/4;return _>M&&_>w?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=T/n,s=P/n):M>w?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=T/r,s=U/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=P/s,r=U/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-x)*(m-x)+(f-g)*(f-g)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-x)/b,this.y=(f-g)/b,this.z=(d-h)/b,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tp extends rs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Yt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new $l(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends Tp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pf extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cp extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sr{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(s,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),ra.subVectors(this.max,ls),dr.subVectors(e.a,ls),pr.subVectors(e.b,ls),mr.subVectors(e.c,ls),di.subVectors(pr,dr),pi.subVectors(mr,pr),Oi.subVectors(dr,mr);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Oi.z,Oi.y,di.z,0,-di.x,pi.z,0,-pi.x,Oi.z,0,-Oi.x,-di.y,di.x,0,-pi.y,pi.x,0,-Oi.y,Oi.x,0];return!wo(t,dr,pr,mr,ra)||(t=[1,0,0,0,1,0,0,0,1],!wo(t,dr,pr,mr,ra))?!1:(sa.crossVectors(di,pi),t=[sa.x,sa.y,sa.z],wo(t,dr,pr,mr,ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qn=[new R,new R,new R,new R,new R,new R,new R,new R],In=new R,ia=new sr,dr=new R,pr=new R,mr=new R,di=new R,pi=new R,Oi=new R,ls=new R,ra=new R,sa=new R,Fi=new R;function wo(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Fi.fromArray(i,s);const o=r.x*Math.abs(Fi.x)+r.y*Math.abs(Fi.y)+r.z*Math.abs(Fi.z),c=e.dot(Fi),l=t.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ap=new sr,hs=new R,Ro=new R;class Js{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ap.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const t=hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(hs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(Ro)),this.expandByPoint(hs.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ei=new R,Po=new R,aa=new R,mi=new R,Do=new R,oa=new R,Lo=new R;class wp{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Po.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Po);const s=e.distanceTo(t)*.5,a=-this.direction.dot(aa),o=mi.dot(this.direction),c=-mi.dot(aa),l=mi.lengthSq(),h=Math.abs(1-a*a);let f,d,p,x;if(h>0)if(f=a*c-o,d=a*o-c,x=s*h,f>=0)if(d>=-x)if(d<=x){const g=1/h;f*=g,d*=g,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=x?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Po).addScaledVector(aa,d),p}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const n=ei.dot(this.direction),r=ei.dot(ei)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,r,s){Do.subVectors(t,e),oa.subVectors(n,e),Lo.crossVectors(Do,oa);let a=this.direction.dot(Lo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,e);const c=o*this.direction.dot(oa.crossVectors(mi,oa));if(c<0)return null;const l=o*this.direction.dot(Do.cross(mi));if(l<0||c+l>a)return null;const h=-o*mi.dot(Lo);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,r,s,a,o,c,l,h,f,d,p,x,g,m){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,f,d,p,x,g,m)}set(e,t,n,r,s,a,o,c,l,h,f,d,p,x,g,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=x,u[11]=g,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/xr.setFromMatrixColumn(e,0).length(),s=1/xr.setFromMatrixColumn(e,1).length(),a=1/xr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,p=a*f,x=o*h,g=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=p+x*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=x+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,p=c*f,x=l*h,g=l*f;t[0]=d+g*o,t[4]=x*o-p,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-x,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,p=c*f,x=l*h,g=l*f;t[0]=d-g*o,t[4]=-a*f,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,p=a*f,x=o*h,g=o*f;t[0]=c*h,t[4]=x*l-p,t[8]=d*l+g,t[1]=c*f,t[5]=g*l+d,t[9]=p*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,x=o*c,g=o*l;t[0]=c*h,t[4]=g-d*f,t[8]=x*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*f+x,t[10]=d-g*f}else if(e.order==="XZY"){const d=a*c,p=a*l,x=o*c,g=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+g,t[5]=a*h,t[9]=p*f-x,t[2]=x*f-p,t[6]=o*h,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rp,e,Pp)}lookAt(e,t,n){const r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),xi.crossVectors(n,xn),xi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),xi.crossVectors(n,xn)),xi.normalize(),ca.crossVectors(xn,xi),r[0]=xi.x,r[4]=ca.x,r[8]=xn.x,r[1]=xi.y,r[5]=ca.y,r[9]=xn.y,r[2]=xi.z,r[6]=ca.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],p=n[13],x=n[2],g=n[6],m=n[10],u=n[14],b=n[3],_=n[7],M=n[11],w=n[15],T=r[0],P=r[4],U=r[8],S=r[12],y=r[1],D=r[5],k=r[9],I=r[13],B=r[2],V=r[6],W=r[10],ne=r[14],q=r[3],ae=r[7],ce=r[11],Se=r[15];return s[0]=a*T+o*y+c*B+l*q,s[4]=a*P+o*D+c*V+l*ae,s[8]=a*U+o*k+c*W+l*ce,s[12]=a*S+o*I+c*ne+l*Se,s[1]=h*T+f*y+d*B+p*q,s[5]=h*P+f*D+d*V+p*ae,s[9]=h*U+f*k+d*W+p*ce,s[13]=h*S+f*I+d*ne+p*Se,s[2]=x*T+g*y+m*B+u*q,s[6]=x*P+g*D+m*V+u*ae,s[10]=x*U+g*k+m*W+u*ce,s[14]=x*S+g*I+m*ne+u*Se,s[3]=b*T+_*y+M*B+w*q,s[7]=b*P+_*D+M*V+w*ae,s[11]=b*U+_*k+M*W+w*ce,s[15]=b*S+_*I+M*ne+w*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],p=e[14],x=e[3],g=e[7],m=e[11],u=e[15];return x*(+s*c*f-r*l*f-s*o*d+n*l*d+r*o*p-n*c*p)+g*(+t*c*p-t*l*d+s*a*d-r*a*p+r*l*h-s*c*h)+m*(+t*l*f-t*o*p-s*a*f+n*a*p+s*o*h-n*l*h)+u*(-r*o*h-t*c*f+t*o*d+r*a*f-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],p=e[11],x=e[12],g=e[13],m=e[14],u=e[15],b=f*m*l-g*d*l+g*c*p-o*m*p-f*c*u+o*d*u,_=x*d*l-h*m*l-x*c*p+a*m*p+h*c*u-a*d*u,M=h*g*l-x*f*l+x*o*p-a*g*p-h*o*u+a*f*u,w=x*f*c-h*g*c-x*o*d+a*g*d+h*o*m-a*f*m,T=t*b+n*_+r*M+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=b*P,e[1]=(g*d*s-f*m*s-g*r*p+n*m*p+f*r*u-n*d*u)*P,e[2]=(o*m*s-g*c*s+g*r*l-n*m*l-o*r*u+n*c*u)*P,e[3]=(f*c*s-o*d*s-f*r*l+n*d*l+o*r*p-n*c*p)*P,e[4]=_*P,e[5]=(h*m*s-x*d*s+x*r*p-t*m*p-h*r*u+t*d*u)*P,e[6]=(x*c*s-a*m*s-x*r*l+t*m*l+a*r*u-t*c*u)*P,e[7]=(a*d*s-h*c*s+h*r*l-t*d*l-a*r*p+t*c*p)*P,e[8]=M*P,e[9]=(x*f*s-h*g*s-x*n*p+t*g*p+h*n*u-t*f*u)*P,e[10]=(a*g*s-x*o*s+x*n*l-t*g*l-a*n*u+t*o*u)*P,e[11]=(h*o*s-a*f*s-h*n*l+t*f*l+a*n*p-t*o*p)*P,e[12]=w*P,e[13]=(h*g*r-x*f*r+x*n*d-t*g*d-h*n*m+t*f*m)*P,e[14]=(x*o*r-a*g*r-x*n*c+t*g*c+a*n*m-t*o*m)*P,e[15]=(a*f*r-h*o*r+h*n*c-t*f*c-a*n*d+t*o*d)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,f=o+o,d=s*l,p=s*h,x=s*f,g=a*h,m=a*f,u=o*f,b=c*l,_=c*h,M=c*f,w=n.x,T=n.y,P=n.z;return r[0]=(1-(g+u))*w,r[1]=(p+M)*w,r[2]=(x-_)*w,r[3]=0,r[4]=(p-M)*T,r[5]=(1-(d+u))*T,r[6]=(m+b)*T,r[7]=0,r[8]=(x+_)*P,r[9]=(m-b)*P,r[10]=(1-(d+g))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=xr.set(r[0],r[1],r[2]).length();const a=xr.set(r[4],r[5],r[6]).length(),o=xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const l=1/s,h=1/a,f=1/o;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,t.setFromRotationMatrix(Un),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Xn,c=!1){const l=this.elements,h=2*s/(t-e),f=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r);let x,g;if(c)x=s/(a-s),g=a*s/(a-s);else if(o===Xn)x=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ya)x=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Xn,c=!1){const l=this.elements,h=2/(t-e),f=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r);let x,g;if(c)x=1/(a-s),g=a/(a-s);else if(o===Xn)x=-2/(a-s),g=-(a+s)/(a-s);else if(o===Ya)x=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xr=new R,Un=new tt,Rp=new R(0,0,0),Pp=new R(1,1,1),xi=new R,ca=new R,xn=new R,Bh=new tt,zh=new jn;class It{constructor(e=0,t=0,n=0,r=It.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zh.setFromEuler(this),this.setFromQuaternion(zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}It.DEFAULT_ORDER="XYZ";class Df{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dp=0;const Vh=new R,gr=new jn,ti=new tt,la=new R,us=new R,Lp=new R,Ip=new jn,Gh=new R(1,0,0),Hh=new R(0,1,0),Wh=new R(0,0,1),Xh={type:"added"},Up={type:"removed"},_r={type:"childadded",child:null},Io={type:"childremoved",child:null};class Ut extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new R,t=new It,n=new jn,r=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ye}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Df,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Hh,e)}rotateZ(e){return this.rotateOnAxis(Wh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Hh,e)}translateZ(e){return this.translateOnAxis(Wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?la.copy(e):la.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(us,la,this.up):ti.lookAt(la,us,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),gr.setFromRotationMatrix(ti),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(St("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xh),_r.child=e,this.dispatchEvent(_r),_r.child=null):St("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Up),Io.child=e,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xh),_r.child=e,this.dispatchEvent(_r),_r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,Lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Ip,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new R(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new R,ni=new R,Uo=new R,ii=new R,vr=new R,yr=new R,qh=new R,No=new R,Oo=new R,Fo=new R,ko=new ut,Bo=new ut,zo=new ut;class Pn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nn.subVectors(e,t),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Nn.subVectors(r,t),ni.subVectors(n,t),Uo.subVectors(e,t);const a=Nn.dot(Nn),o=Nn.dot(ni),c=Nn.dot(Uo),l=ni.dot(ni),h=ni.dot(Uo),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(l*c-o*h)*d,x=(a*h-o*c)*d;return s.set(1-p-x,x,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ii.x),c.addScaledVector(a,ii.y),c.addScaledVector(o,ii.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return ko.setScalar(0),Bo.setScalar(0),zo.setScalar(0),ko.fromBufferAttribute(e,t),Bo.fromBufferAttribute(e,n),zo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ko,s.x),a.addScaledVector(Bo,s.y),a.addScaledVector(zo,s.z),a}static isFrontFacing(e,t,n,r){return Nn.subVectors(n,t),ni.subVectors(e,t),Nn.cross(ni).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Nn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;vr.subVectors(r,n),yr.subVectors(s,n),No.subVectors(e,n);const c=vr.dot(No),l=yr.dot(No);if(c<=0&&l<=0)return t.copy(n);Oo.subVectors(e,r);const h=vr.dot(Oo),f=yr.dot(Oo);if(h>=0&&f<=h)return t.copy(r);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(vr,a);Fo.subVectors(e,s);const p=vr.dot(Fo),x=yr.dot(Fo);if(x>=0&&p<=x)return t.copy(s);const g=p*l-c*x;if(g<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(yr,o);const m=h*x-p*f;if(m<=0&&f-h>=0&&p-x>=0)return qh.subVectors(s,r),o=(f-h)/(f-h+(p-x)),t.copy(r).addScaledVector(qh,o);const u=1/(m+g+d);return a=g*u,o=d*u,t.copy(n).addScaledVector(vr,a).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Vo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=st.workingColorSpace){if(e=ql(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Vo(a,s,e+1/3),this.g=Vo(a,s,e),this.b=Vo(a,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,t=kt){function n(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=Lf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return st.workingToColorSpace(Gt.copy(this),e),Math.round(Ze(Gt.r*255,0,255))*65536+Math.round(Ze(Gt.g*255,0,255))*256+Math.round(Ze(Gt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Gt.copy(this),t);const n=Gt.r,r=Gt.g,s=Gt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=kt){st.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,r=Gt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(ha);const n=Ds(gi.h,ha.h,t),r=Ds(gi.s,ha.s,t),s=Ds(gi.l,ha.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new He;He.NAMES=Lf;let Np=0;class ar extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=Vr,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=vc,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_c&&(n.blendSrc=this.blendSrc),this.blendDst!==vc&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $n extends ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new It,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new R,ua=new le;let Op=0;class nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Op++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rl,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rl&&(e.usage=this.usage),e}}class If extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uf extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Fp=0;const wn=new tt,Go=new Ut,br=new R,gn=new sr,fs=new sr,Ft=new R;class Kt extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rf(e)?Uf:If)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Go.lookAt(e),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&St('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(gn.min,fs.min),gn.expandByPoint(Ft),Ft.addVectors(gn.max,fs.max),gn.expandByPoint(Ft)):(gn.expandByPoint(fs.min),gn.expandByPoint(fs.max))}gn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ft.fromBufferAttribute(o,l),c&&(br.fromBufferAttribute(e,l),Ft.add(br)),r=Math.max(r,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&St('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){St("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new R,c[U]=new R;const l=new R,h=new R,f=new R,d=new le,p=new le,x=new le,g=new R,m=new R;function u(U,S,y){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,y),d.fromBufferAttribute(s,U),p.fromBufferAttribute(s,S),x.fromBufferAttribute(s,y),h.sub(l),f.sub(l),p.sub(d),x.sub(d);const D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(D),o[U].add(g),o[S].add(g),o[y].add(g),c[U].add(m),c[S].add(m),c[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,S=b.length;U<S;++U){const y=b[U],D=y.start,k=y.count;for(let I=D,B=D+k;I<B;I+=3)u(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const _=new R,M=new R,w=new R,T=new R;function P(U){w.fromBufferAttribute(r,U),T.copy(w);const S=o[U];_.copy(S),_.sub(w.multiplyScalar(w.dot(S))).normalize(),M.crossVectors(T,S);const D=M.dot(c[U])<0?-1:1;a.setXYZW(U,_.x,_.y,_.z,D)}for(let U=0,S=b.length;U<S;++U){const y=b[U],D=y.start,k=y.count;for(let I=D,B=D+k;I<B;I+=3)P(e.getX(I+0)),P(e.getX(I+1)),P(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new R,s=new R,a=new R,o=new R,c=new R,l=new R,h=new R,f=new R;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h);let p=0,x=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*h;for(let u=0;u<h;u++)d[x++]=l[p++]}return new nn(d,h,f)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){const d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],f=s[l];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $h=new tt,ki=new wp,fa=new Js,Yh=new R,da=new R,pa=new R,ma=new R,Ho=new R,xa=new R,jh=new R,ga=new R;class Qe extends Ut{constructor(e=new Kt,t=new $n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){xa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],f=s[c];h!==0&&(Ho.fromBufferAttribute(f,e),a?xa.addScaledVector(Ho,h):xa.addScaledVector(Ho.sub(t),h))}t.add(xa)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),ki.copy(e.ray).recast(e.near),!(fa.containsPoint(ki.origin)===!1&&(ki.intersectSphere(fa,Yh)===null||ki.origin.distanceToSquared(Yh)>(e.far-e.near)**2))&&($h.copy(s).invert(),ki.copy(e.ray).applyMatrix4($h),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const m=d[x],u=a[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,w=_;M<w;M+=3){const T=o.getX(M),P=o.getX(M+1),U=o.getX(M+2);r=_a(this,u,e,n,l,h,f,T,P,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=x,u=g;m<u;m+=3){const b=o.getX(m),_=o.getX(m+1),M=o.getX(m+2);r=_a(this,a,e,n,l,h,f,b,_,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const m=d[x],u=a[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,w=_;M<w;M+=3){const T=M,P=M+1,U=M+2;r=_a(this,u,e,n,l,h,f,T,P,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=x,u=g;m<u;m+=3){const b=m,_=m+1,M=m+2;r=_a(this,a,e,n,l,h,f,b,_,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function kp(i,e,t,n,r,s,a,o){let c;if(e.side===$t?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Di,o),c===null)return null;ga.copy(o),ga.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ga);return l<t.near||l>t.far?null:{distance:l,point:ga.clone(),object:i}}function _a(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,da),i.getVertexPosition(c,pa),i.getVertexPosition(l,ma);const h=kp(i,e,t,n,da,pa,ma,jh);if(h){const f=new R;Pn.getBarycoord(jh,da,pa,ma,f),r&&(h.uv=Pn.getInterpolatedAttribute(r,o,c,l,f,new le)),s&&(h.uv1=Pn.getInterpolatedAttribute(s,o,c,l,f,new le)),a&&(h.normal=Pn.getInterpolatedAttribute(a,o,c,l,f,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new R,materialIndex:0};Pn.getNormal(da,pa,ma,d.normal),h.face=d,h.barycoord=f}return h}class jt extends Kt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],f=[];let d=0,p=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(f,2));function x(g,m,u,b,_,M,w,T,P,U,S){const y=M/P,D=w/U,k=M/2,I=w/2,B=T/2,V=P+1,W=U+1;let ne=0,q=0;const ae=new R;for(let ce=0;ce<W;ce++){const Se=ce*D-I;for(let $e=0;$e<V;$e++){const Ke=$e*y-k;ae[g]=Ke*b,ae[m]=Se*_,ae[u]=B,l.push(ae.x,ae.y,ae.z),ae[g]=0,ae[m]=0,ae[u]=T>0?1:-1,h.push(ae.x,ae.y,ae.z),f.push($e/P),f.push(1-ce/U),ne+=1}}for(let ce=0;ce<U;ce++)for(let Se=0;Se<P;Se++){const $e=d+Se+V*ce,Ke=d+Se+V*(ce+1),et=d+(Se+1)+V*(ce+1),nt=d+(Se+1)+V*ce;c.push($e,Ke,nt),c.push(Ke,et,nt),q+=6}o.addGroup(p,q,S),p+=q,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function en(i){const e={};for(let t=0;t<i.length;t++){const n=Qr(i[t]);for(const r in n)e[r]=n[r]}return e}function Bp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const zp={clone:Qr,merge:en};var Vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vp,this.fragmentShader=Gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=Bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Of extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new R,Zh=new le,Kh=new le;class hn extends Of{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,Zh,Kh),t.subVectors(Kh,Zh)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Sr=-90,Mr=1;class Hp extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(Sr,Mr,e,t);r.layers=this.layers,this.add(r);const s=new hn(Sr,Mr,e,t);s.layers=this.layers,this.add(s);const a=new hn(Sr,Mr,e,t);a.layers=this.layers,this.add(a);const o=new hn(Sr,Mr,e,t);o.layers=this.layers,this.add(o);const c=new hn(Sr,Mr,e,t);c.layers=this.layers,this.add(c);const l=new hn(Sr,Mr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Ff extends Yt{constructor(e=[],t=Zr,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wp extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ff(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new jt(5,5,5),s=new Zn({name:"CubemapFromEquirect",uniforms:Qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:li});s.uniforms.tEquirect.value=t;const a=new Qe(r,s),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=Dn),new Hp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class pt extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xp={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),u=this._getHandJoint(l,g);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,x=.005;l.inputState.pinching&&d>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xp)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Yl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=n}clone(){return new Yl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jl extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new It,this.environmentIntensity=1,this.environmentRotation=new It,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class qp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rl,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new R;class Ka{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Za("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ka(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Za("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ja extends ar{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Er;const ds=new R,Tr=new R,Cr=new R,Ar=new le,ps=new le,kf=new tt,va=new R,ms=new R,ya=new R,Jh=new le,Xo=new le,Qh=new le;class sl extends Ut{constructor(e=new Ja){if(super(),this.isSprite=!0,this.type="Sprite",Er===void 0){Er=new Kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qp(t,5);Er.setIndex([0,1,2,0,2,3]),Er.setAttribute("position",new Ka(n,3,0,!1)),Er.setAttribute("uv",new Ka(n,2,3,!1))}this.geometry=Er,this.material=e,this.center=new le(.5,.5),this.count=1}raycast(e,t){e.camera===null&&St('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Tr.setFromMatrixScale(this.matrixWorld),kf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Tr.multiplyScalar(-Cr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;ba(va.set(-.5,-.5,0),Cr,a,Tr,r,s),ba(ms.set(.5,-.5,0),Cr,a,Tr,r,s),ba(ya.set(.5,.5,0),Cr,a,Tr,r,s),Jh.set(0,0),Xo.set(1,0),Qh.set(1,1);let o=e.ray.intersectTriangle(va,ms,ya,!1,ds);if(o===null&&(ba(ms.set(-.5,.5,0),Cr,a,Tr,r,s),Xo.set(0,1),o=e.ray.intersectTriangle(va,ya,ms,!1,ds),o===null))return;const c=e.ray.origin.distanceTo(ds);c<e.near||c>e.far||t.push({distance:c,point:ds.clone(),uv:Pn.getInterpolation(ds,va,ms,ya,Jh,Xo,Qh,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ba(i,e,t,n,r,s){Ar.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(ps.x=s*Ar.x-r*Ar.y,ps.y=r*Ar.x+s*Ar.y):ps.copy(Ar),i.copy(e),i.x+=ps.x,i.y+=ps.y,i.applyMatrix4(kf)}class Bf extends Yt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Tn,h=Tn,f,d){super(null,a,o,c,l,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class al extends nn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const wr=new tt,eu=new tt,Sa=[],tu=new sr,$p=new tt,xs=new Qe,gs=new Js;class ka extends Qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new al(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,$p)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),tu.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(tu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Js),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),gs.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(gs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(n),e.ray.intersectsSphere(gs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,wr),eu.multiplyMatrices(n,wr),xs.matrixWorld=eu,xs.raycast(e,Sa);for(let a=0,o=Sa.length;a<o;a++){const c=Sa[a];c.instanceId=s,c.object=this,t.push(c)}Sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new al(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bf(new Float32Array(r*this.count),r,this.count,zl,Wn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qo=new R,Yp=new R,jp=new Ye;class qi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=qo.subVectors(n,t).cross(Yp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jp.getNormalMatrix(e),r=this.coplanarPoint(qo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new Js,Zp=new le(.5,.5),Ma=new R;class Zl{constructor(e=new qi,t=new qi,n=new qi,r=new qi,s=new qi,a=new qi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],f=s[5],d=s[6],p=s[7],x=s[8],g=s[9],m=s[10],u=s[11],b=s[12],_=s[13],M=s[14],w=s[15];if(r[0].setComponents(l-a,p-h,u-x,w-b).normalize(),r[1].setComponents(l+a,p+h,u+x,w+b).normalize(),r[2].setComponents(l+o,p+f,u+g,w+_).normalize(),r[3].setComponents(l-o,p-f,u-g,w-_).normalize(),n)r[4].setComponents(c,d,m,M).normalize(),r[5].setComponents(l-c,p-d,u-m,w-M).normalize();else if(r[4].setComponents(l-c,p-d,u-m,w-M).normalize(),t===Xn)r[5].setComponents(l+c,p+d,u+m,w+M).normalize();else if(t===Ya)r[5].setComponents(c,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){Bi.center.set(0,0,0);const t=Zp.distanceTo(e.center);return Bi.radius=.7071067811865476+t,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ma.x=r.normal.x>0?e.max.x:e.min.x,Ma.y=r.normal.y>0?e.max.y:e.min.y,Ma.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class so extends Yt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zf extends Yt{constructor(e,t,n=Ji,r,s,a,o=Tn,c=Tn,l,h=Vs,f=1){if(h!==Vs&&h!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $l(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vf extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Kl extends Kt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],c=[],l=[],h=t/2,f=Math.PI/2*e,d=t,p=2*f+d,x=n*2+s,g=r+1,m=new R,u=new R;for(let b=0;b<=x;b++){let _=0,M=0,w=0,T=0;if(b<=n){const S=b/n,y=S*Math.PI/2;M=-h-e*Math.cos(y),w=e*Math.sin(y),T=-e*Math.cos(y),_=S*f}else if(b<=n+s){const S=(b-n)/s;M=-h+S*t,w=e,T=0,_=f+S*d}else{const S=(b-n-s)/n,y=S*Math.PI/2;M=h+e*Math.sin(y),w=e*Math.cos(y),T=e*Math.sin(y),_=f+d+S*f}const P=Math.max(0,Math.min(1,_/p));let U=0;b===0?U=.5/r:b===x&&(U=-.5/r);for(let S=0;S<=r;S++){const y=S/r,D=y*Math.PI*2,k=Math.sin(D),I=Math.cos(D);u.x=-w*I,u.y=M,u.z=w*k,o.push(u.x,u.y,u.z),m.set(-w*I,T,w*k),m.normalize(),c.push(m.x,m.y,m.z),l.push(y+U,P)}if(b>0){const S=(b-1)*g;for(let y=0;y<r;y++){const D=S+y,k=S+y+1,I=b*g+y,B=b*g+y+1;a.push(D,k,I),a.push(k,B,I)}}}this.setIndex(a),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class qt extends Kt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],p=[];let x=0;const g=[],m=n/2;let u=0;b(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new vt(f,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(p,2));function b(){const M=new R,w=new R;let T=0;const P=(t-e)/n;for(let U=0;U<=s;U++){const S=[],y=U/s,D=y*(t-e)+e;for(let k=0;k<=r;k++){const I=k/r,B=I*c+o,V=Math.sin(B),W=Math.cos(B);w.x=D*V,w.y=-y*n+m,w.z=D*W,f.push(w.x,w.y,w.z),M.set(V,P,W).normalize(),d.push(M.x,M.y,M.z),p.push(I,1-y),S.push(x++)}g.push(S)}for(let U=0;U<r;U++)for(let S=0;S<s;S++){const y=g[S][U],D=g[S+1][U],k=g[S+1][U+1],I=g[S][U+1];(e>0||S!==0)&&(h.push(y,D,I),T+=3),(t>0||S!==s-1)&&(h.push(D,k,I),T+=3)}l.addGroup(u,T,0),u+=T}function _(M){const w=x,T=new le,P=new R;let U=0;const S=M===!0?e:t,y=M===!0?1:-1;for(let k=1;k<=r;k++)f.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),x++;const D=x;for(let k=0;k<=r;k++){const B=k/r*c+o,V=Math.cos(B),W=Math.sin(B);P.x=S*W,P.y=m*y,P.z=S*V,f.push(P.x,P.y,P.z),d.push(0,y,0),T.x=V*.5+.5,T.y=W*.5*y+.5,p.push(T.x,T.y),x++}for(let k=0;k<r;k++){const I=w+k,B=D+k;M===!0?h.push(B,B+1,I):h.push(B+1,B,I),U+=3}l.addGroup(u,U,M===!0?1:2),u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const h=n[r],d=n[r+1]-h,p=(a-h)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new le:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,r=[],s=[],a=[],o=new R,c=new tt;for(let p=0;p<=e;p++){const x=p/e;r[p]=this.getTangentAt(x,new R)}s[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(Ze(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,x))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Ze(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let x=1;x<=e;x++)s[x].applyMatrix4(c.makeRotationAxis(r[x],p*x)),a[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jl extends Jn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new le){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*f+this.aX,l=d*f+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Kp extends Jl{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ql(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,f){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+f)+(c-o)/f;d*=h,p*=h,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Ea=new R,$o=new Ql,Yo=new Ql,jo=new Ql;class Jp extends Jn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new R){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=r[(o-1)%s]:(Ea.subVectors(r[0],r[1]).add(r[0]),l=Ea);const f=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Ea.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Ea),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(l.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);g<1e-4&&(g=1),x<1e-4&&(x=g),m<1e-4&&(m=g),$o.initNonuniformCatmullRom(l.x,f.x,d.x,h.x,x,g,m),Yo.initNonuniformCatmullRom(l.y,f.y,d.y,h.y,x,g,m),jo.initNonuniformCatmullRom(l.z,f.z,d.z,h.z,x,g,m)}else this.curveType==="catmullrom"&&($o.initCatmullRom(l.x,f.x,d.x,h.x,this.tension),Yo.initCatmullRom(l.y,f.y,d.y,h.y,this.tension),jo.initCatmullRom(l.z,f.z,d.z,h.z,this.tension));return n.set($o.calc(c),Yo.calc(c),jo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nu(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*i+t}function Qp(i,e){const t=1-i;return t*t*e}function em(i,e){return 2*(1-i)*i*e}function tm(i,e){return i*i*e}function Ls(i,e,t,n){return Qp(i,e)+em(i,t)+tm(i,n)}function nm(i,e){const t=1-i;return t*t*t*e}function im(i,e){const t=1-i;return 3*t*t*i*e}function rm(i,e){return 3*(1-i)*i*i*e}function sm(i,e){return i*i*i*e}function Is(i,e,t,n,r){return nm(i,e)+im(i,t)+rm(i,n)+sm(i,r)}class Gf extends Jn{constructor(e=new le,t=new le,n=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new le){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Is(e,r.x,s.x,a.x,o.x),Is(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class am extends Jn{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Is(e,r.x,s.x,a.x,o.x),Is(e,r.y,s.y,a.y,o.y),Is(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hf extends Jn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class om extends Jn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wf extends Jn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ls(e,r.x,s.x,a.x),Ls(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cm extends Jn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ls(e,r.x,s.x,a.x),Ls(e,r.y,s.y,a.y),Ls(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xf extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(nu(o,c.x,l.x,h.x,f.x),nu(o,c.y,l.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new le().fromArray(r))}return this}}var ol=Object.freeze({__proto__:null,ArcCurve:Kp,CatmullRomCurve3:Jp,CubicBezierCurve:Gf,CubicBezierCurve3:am,EllipseCurve:Jl,LineCurve:Hf,LineCurve3:om,QuadraticBezierCurve:Wf,QuadraticBezierCurve3:cm,SplineCurve:Xf});class lm extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ol[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new ol[r.type]().fromJSON(r))}return this}}class iu extends lm{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Hf(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Wf(this.currentPoint.clone(),new le(e,t),new le(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new Gf(this.currentPoint.clone(),new le(e,t),new le(n,r),new le(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Xf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){const l=new Jl(e,t,n,r,s,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class eh extends iu{constructor(e){super(e),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new iu().fromJSON(r))}return this}}function hm(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=qf(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=mm(i,e,s,t)),i.length>80*t){o=i[0],c=i[1];let h=o,f=c;for(let d=t;d<r;d+=t){const p=i[d],x=i[d+1];p<o&&(o=p),x<c&&(c=x),p>h&&(h=p),x>f&&(f=x)}l=Math.max(h-o,f-c),l=l!==0?32767/l:0}return Xs(s,a,t,o,c,l,0),a}function qf(i,e,t,n,r){let s;if(r===Cm(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=ru(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=ru(a/n|0,i[a],i[a+1],s);return s&&es(s,s.next)&&($s(s),s=s.next),s}function er(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(es(t,t.next)||Mt(t.prev,t,t.next)===0)){if($s(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Xs(i,e,t,n,r,s,a){if(!i)return;!a&&s&&ym(i,n,r,s);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(s?fm(i,n,r,s):um(i)){e.push(c.i,i.i,l.i),$s(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=dm(er(i),e),Xs(i,e,t,n,r,s,2)):a===2&&pm(i,e,t,n,r,s):Xs(er(i),e,t,n,r,s,1);break}}}function um(i){const e=i.prev,t=i,n=i.next;if(Mt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(r,s,a),f=Math.min(o,c,l),d=Math.max(r,s,a),p=Math.max(o,c,l);let x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=d&&x.y>=f&&x.y<=p&&Ts(r,o,s,c,a,l,x.x,x.y)&&Mt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function fm(i,e,t,n){const r=i.prev,s=i,a=i.next;if(Mt(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,h=r.y,f=s.y,d=a.y,p=Math.min(o,c,l),x=Math.min(h,f,d),g=Math.max(o,c,l),m=Math.max(h,f,d),u=cl(p,x,e,t,n),b=cl(g,m,e,t,n);let _=i.prevZ,M=i.nextZ;for(;_&&_.z>=u&&M&&M.z<=b;){if(_.x>=p&&_.x<=g&&_.y>=x&&_.y<=m&&_!==r&&_!==a&&Ts(o,h,c,f,l,d,_.x,_.y)&&Mt(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=p&&M.x<=g&&M.y>=x&&M.y<=m&&M!==r&&M!==a&&Ts(o,h,c,f,l,d,M.x,M.y)&&Mt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=u;){if(_.x>=p&&_.x<=g&&_.y>=x&&_.y<=m&&_!==r&&_!==a&&Ts(o,h,c,f,l,d,_.x,_.y)&&Mt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=b;){if(M.x>=p&&M.x<=g&&M.y>=x&&M.y<=m&&M!==r&&M!==a&&Ts(o,h,c,f,l,d,M.x,M.y)&&Mt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function dm(i,e){let t=i;do{const n=t.prev,r=t.next.next;!es(n,r)&&Yf(n,t,t.next,r)&&qs(n,r)&&qs(r,n)&&(e.push(n.i,t.i,r.i),$s(t),$s(t.next),t=i=r),t=t.next}while(t!==i);return er(t)}function pm(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Mm(a,o)){let c=jf(a,o);a=er(a,a.next),c=er(c,c.next),Xs(a,e,t,n,r,s,0),Xs(c,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function mm(i,e,t,n){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,c=s<a-1?e[s+1]*n:i.length,l=qf(i,o,c,n,!1);l===l.next&&(l.steiner=!0),r.push(Sm(l))}r.sort(xm);for(let s=0;s<r.length;s++)t=gm(r[s],t);return t}function xm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function gm(i,e){const t=_m(i,e);if(!t)return e;const n=jf(t,i);return er(n,n.next),er(t,t.next)}function _m(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,a;if(es(i,t))return t;do{if(es(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s&&(s=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&$f(r<l?n:s,r,c,l,r<l?s:n,r,t.x,t.y)){const f=Math.abs(r-t.y)/(n-t.x);qs(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&vm(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function vm(i,e){return Mt(i.prev,i,e.prev)<0&&Mt(e.next,i,i.next)<0}function ym(i,e,t,n){let r=i;do r.z===0&&(r.z=cl(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,bm(r)}function bm(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function cl(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Sm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function $f(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Ts(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&$f(i,e,t,n,r,s,a,o)}function Mm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Em(i,e)&&(qs(i,e)&&qs(e,i)&&Tm(i,e)&&(Mt(i.prev,i,e.prev)||Mt(i,e.prev,e))||es(i,e)&&Mt(i.prev,i,i.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function es(i,e){return i.x===e.x&&i.y===e.y}function Yf(i,e,t,n){const r=Ca(Mt(i,e,t)),s=Ca(Mt(i,e,n)),a=Ca(Mt(t,n,i)),o=Ca(Mt(t,n,e));return!!(r!==s&&a!==o||r===0&&Ta(i,t,e)||s===0&&Ta(i,n,e)||a===0&&Ta(t,i,n)||o===0&&Ta(t,e,n))}function Ta(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ca(i){return i>0?1:i<0?-1:0}function Em(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Yf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function qs(i,e){return Mt(i.prev,i,i.next)<0?Mt(i,e,i.next)>=0&&Mt(i,i.prev,e)>=0:Mt(i,e,i.prev)<0||Mt(i,i.next,e)<0}function Tm(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function jf(i,e){const t=ll(i.i,i.x,i.y),n=ll(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ru(i,e,t,n){const r=ll(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function $s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ll(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cm(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Am{static triangulate(e,t,n=2){return hm(e,t,n)}}class Br{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Br.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];su(e),au(n,e);let a=e.length;t.forEach(su);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,au(n,t[c]);const o=Am.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function su(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function au(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ao extends Kt{constructor(e=new eh([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new vt(r,3)),this.setAttribute("uv",new vt(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const u=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:wm;let _,M=!1,w,T,P,U;u&&(_=u.getSpacedPoints(h),M=!0,d=!1,w=u.computeFrenetFrames(h,!1),T=new R,P=new R,U=new R),d||(m=0,p=0,x=0,g=0);const S=o.extractPoints(l);let y=S.shape;const D=S.holes;if(!Br.isClockWise(y)){y=y.reverse();for(let ee=0,A=D.length;ee<A;ee++){const Q=D[ee];Br.isClockWise(Q)&&(D[ee]=Q.reverse())}}function I(ee){const Q=10000000000000001e-36;let se=ee[0];for(let ue=1;ue<=ee.length;ue++){const ie=ue%ee.length,Te=ee[ie],me=Te.x-se.x,be=Te.y-se.y,C=me*me+be*be,v=Math.max(Math.abs(Te.x),Math.abs(Te.y),Math.abs(se.x),Math.abs(se.y)),F=Q*v*v;if(C<=F){ee.splice(ie,1),ue--;continue}se=Te}}I(y),D.forEach(I);const B=D.length,V=y;for(let ee=0;ee<B;ee++){const A=D[ee];y=y.concat(A)}function W(ee,A,Q){return A||St("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(A,Q)}const ne=y.length;function q(ee,A,Q){let se,ue,ie;const Te=ee.x-A.x,me=ee.y-A.y,be=Q.x-ee.x,C=Q.y-ee.y,v=Te*Te+me*me,F=Te*C-me*be;if(Math.abs(F)>Number.EPSILON){const $=Math.sqrt(v),J=Math.sqrt(be*be+C*C),X=A.x-me/$,De=A.y+Te/$,xe=Q.x-C/J,Ie=Q.y+be/J,Re=((xe-X)*C-(Ie-De)*be)/(Te*C-me*be);se=X+Te*Re-ee.x,ue=De+me*Re-ee.y;const te=se*se+ue*ue;if(te<=2)return new le(se,ue);ie=Math.sqrt(te/2)}else{let $=!1;Te>Number.EPSILON?be>Number.EPSILON&&($=!0):Te<-Number.EPSILON?be<-Number.EPSILON&&($=!0):Math.sign(me)===Math.sign(C)&&($=!0),$?(se=-me,ue=Te,ie=Math.sqrt(v)):(se=Te,ue=me,ie=Math.sqrt(v/2))}return new le(se/ie,ue/ie)}const ae=[];for(let ee=0,A=V.length,Q=A-1,se=ee+1;ee<A;ee++,Q++,se++)Q===A&&(Q=0),se===A&&(se=0),ae[ee]=q(V[ee],V[Q],V[se]);const ce=[];let Se,$e=ae.concat();for(let ee=0,A=B;ee<A;ee++){const Q=D[ee];Se=[];for(let se=0,ue=Q.length,ie=ue-1,Te=se+1;se<ue;se++,ie++,Te++)ie===ue&&(ie=0),Te===ue&&(Te=0),Se[se]=q(Q[se],Q[ie],Q[Te]);ce.push(Se),$e=$e.concat(Se)}let Ke;if(m===0)Ke=Br.triangulateShape(V,D);else{const ee=[],A=[];for(let Q=0;Q<m;Q++){const se=Q/m,ue=p*Math.cos(se*Math.PI/2),ie=x*Math.sin(se*Math.PI/2)+g;for(let Te=0,me=V.length;Te<me;Te++){const be=W(V[Te],ae[Te],ie);Le(be.x,be.y,-ue),se===0&&ee.push(be)}for(let Te=0,me=B;Te<me;Te++){const be=D[Te];Se=ce[Te];const C=[];for(let v=0,F=be.length;v<F;v++){const $=W(be[v],Se[v],ie);Le($.x,$.y,-ue),se===0&&C.push($)}se===0&&A.push(C)}}Ke=Br.triangulateShape(ee,A)}const et=Ke.length,nt=x+g;for(let ee=0;ee<ne;ee++){const A=d?W(y[ee],$e[ee],nt):y[ee];M?(P.copy(w.normals[0]).multiplyScalar(A.x),T.copy(w.binormals[0]).multiplyScalar(A.y),U.copy(_[0]).add(P).add(T),Le(U.x,U.y,U.z)):Le(A.x,A.y,0)}for(let ee=1;ee<=h;ee++)for(let A=0;A<ne;A++){const Q=d?W(y[A],$e[A],nt):y[A];M?(P.copy(w.normals[ee]).multiplyScalar(Q.x),T.copy(w.binormals[ee]).multiplyScalar(Q.y),U.copy(_[ee]).add(P).add(T),Le(U.x,U.y,U.z)):Le(Q.x,Q.y,f/h*ee)}for(let ee=m-1;ee>=0;ee--){const A=ee/m,Q=p*Math.cos(A*Math.PI/2),se=x*Math.sin(A*Math.PI/2)+g;for(let ue=0,ie=V.length;ue<ie;ue++){const Te=W(V[ue],ae[ue],se);Le(Te.x,Te.y,f+Q)}for(let ue=0,ie=D.length;ue<ie;ue++){const Te=D[ue];Se=ce[ue];for(let me=0,be=Te.length;me<be;me++){const C=W(Te[me],Se[me],se);M?Le(C.x,C.y+_[h-1].y,_[h-1].x+Q):Le(C.x,C.y,f+Q)}}}j(),K();function j(){const ee=r.length/3;if(d){let A=0,Q=ne*A;for(let se=0;se<et;se++){const ue=Ke[se];Ee(ue[2]+Q,ue[1]+Q,ue[0]+Q)}A=h+m*2,Q=ne*A;for(let se=0;se<et;se++){const ue=Ke[se];Ee(ue[0]+Q,ue[1]+Q,ue[2]+Q)}}else{for(let A=0;A<et;A++){const Q=Ke[A];Ee(Q[2],Q[1],Q[0])}for(let A=0;A<et;A++){const Q=Ke[A];Ee(Q[0]+ne*h,Q[1]+ne*h,Q[2]+ne*h)}}n.addGroup(ee,r.length/3-ee,0)}function K(){const ee=r.length/3;let A=0;oe(V,A),A+=V.length;for(let Q=0,se=D.length;Q<se;Q++){const ue=D[Q];oe(ue,A),A+=ue.length}n.addGroup(ee,r.length/3-ee,1)}function oe(ee,A){let Q=ee.length;for(;--Q>=0;){const se=Q;let ue=Q-1;ue<0&&(ue=ee.length-1);for(let ie=0,Te=h+m*2;ie<Te;ie++){const me=ne*ie,be=ne*(ie+1),C=A+se+me,v=A+ue+me,F=A+ue+be,$=A+se+be;We(C,v,F,$)}}}function Le(ee,A,Q){c.push(ee),c.push(A),c.push(Q)}function Ee(ee,A,Q){ft(ee),ft(A),ft(Q);const se=r.length/3,ue=b.generateTopUV(n,r,se-3,se-2,se-1);ze(ue[0]),ze(ue[1]),ze(ue[2])}function We(ee,A,Q,se){ft(ee),ft(A),ft(se),ft(A),ft(Q),ft(se);const ue=r.length/3,ie=b.generateSideWallUV(n,r,ue-6,ue-3,ue-2,ue-1);ze(ie[0]),ze(ie[1]),ze(ie[3]),ze(ie[1]),ze(ie[2]),ze(ie[3])}function ft(ee){r.push(c[ee*3+0]),r.push(c[ee*3+1]),r.push(c[ee*3+2])}function ze(ee){s.push(ee.x),s.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Rm(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ol[r.type]().fromJSON(r)),new ao(n,e.options)}}const wm={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[r*3],h=e[r*3+1];return[new le(s,a),new le(o,c),new le(l,h)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],f=e[n*3+2],d=e[r*3],p=e[r*3+1],x=e[r*3+2],g=e[s*3],m=e[s*3+1],u=e[s*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new le(a,1-c),new le(l,1-f),new le(d,1-x),new le(g,1-u)]:[new le(o,1-c),new le(h,1-f),new le(p,1-x),new le(m,1-u)]}};function Rm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class tn extends Kt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,f=e/o,d=t/c,p=[],x=[],g=[],m=[];for(let u=0;u<h;u++){const b=u*d-a;for(let _=0;_<l;_++){const M=_*f-s;x.push(M,-b,0),g.push(0,0,1),m.push(_/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let b=0;b<o;b++){const _=b+l*u,M=b+l*(u+1),w=b+1+l*(u+1),T=b+1+l*u;p.push(_,M,T),p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new vt(x,3)),this.setAttribute("normal",new vt(g,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.width,e.height,e.widthSegments,e.heightSegments)}}class th extends Kt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],h=[];let f=e;const d=(t-e)/r,p=new R,x=new le;for(let g=0;g<=r;g++){for(let m=0;m<=n;m++){const u=s+m/n*a;p.x=f*Math.cos(u),p.y=f*Math.sin(u),c.push(p.x,p.y,p.z),l.push(0,0,1),x.x=(p.x/t+1)/2,x.y=(p.y/t+1)/2,h.push(x.x,x.y)}f+=d}for(let g=0;g<r;g++){const m=g*(n+1);for(let u=0;u<n;u++){const b=u+m,_=b,M=b+n+1,w=b+n+2,T=b+1;o.push(_,M,T),o.push(M,w,T)}}this.setIndex(o),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new th(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class nh extends Kt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new R,d=new R,p=[],x=[],g=[],m=[];for(let u=0;u<=n;u++){const b=[],_=u/n;let M=0;u===0&&a===0?M=.5/t:u===n&&c===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const T=w/t;f.x=-e*Math.cos(r+T*s)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(r+T*s)*Math.sin(a+_*o),x.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),m.push(T+M,1-_),b.push(l++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<t;b++){const _=h[u][b+1],M=h[u][b],w=h[u+1][b],T=h[u+1][b+1];(u!==0||a>0)&&p.push(_,M,T),(u!==n-1||c<Math.PI)&&p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new vt(x,3)),this.setAttribute("normal",new vt(g,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qa extends ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xl,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new It,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pm extends Qa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class tr extends ar{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xl,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new It,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dm extends ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lm extends ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ih extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Zf extends ih{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Zo=new tt,ou=new R,cu=new R;class Kf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zl,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(ou),cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cu),t.updateMatrixWorld(),Zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lu=new tt,_s=new R,Ko=new R;class Im extends Kf{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),_s.setFromMatrixPosition(e.matrixWorld),n.position.copy(_s),Ko.copy(n.position),Ko.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ko),n.updateMatrixWorld(),r.makeTranslation(-_s.x,-_s.y,-_s.z),lu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lu,n.coordinateSystem,n.reversedDepth)}}class rh extends ih{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Im}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Jf extends Of{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Um extends Kf{constructor(){super(new Jf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hl extends ih{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Um}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nm extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function hu(i,e,t,n){const r=Om(n);switch(t){case Cf:return i*e;case zl:return i*e/r.components*r.byteLength;case Vl:return i*e/r.components*r.byteLength;case Gl:return i*e*2/r.components*r.byteLength;case Hl:return i*e*2/r.components*r.byteLength;case Af:return i*e*3/r.components*r.byteLength;case Bn:return i*e*4/r.components*r.byteLength;case Wl:return i*e*4/r.components*r.byteLength;case Ua:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:case Ic:return Math.max(i,16)*Math.max(e,8)/4;case Pc:case Lc:return Math.max(i,8)*Math.max(e,8)/2;case Uc:case Nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Zc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Kc:case Jc:case Qc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case el:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nl:case il:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Om(i){switch(i){case Yn:case Sf:return{byteLength:1,components:1};case Bs:case Mf:case is:return{byteLength:2,components:1};case kl:case Bl:return{byteLength:2,components:4};case Ji:case Fl:case Wn:return{byteLength:4,components:1};case Ef:case Tf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);function Qf(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Fm(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<f.length;p++){const x=f[d],g=f[p];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++d,f[d]=g)}f.length=d+1;for(let p=0,x=f.length;p<x;p++){const g=f[p];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Km=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ox=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,px="gl_FragColor = linearToOutputTexel( gl_FragColor );",mx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Px=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ox=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$x=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ag=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,c_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,m_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:km,alphahash_pars_fragment:Bm,alphamap_fragment:zm,alphamap_pars_fragment:Vm,alphatest_fragment:Gm,alphatest_pars_fragment:Hm,aomap_fragment:Wm,aomap_pars_fragment:Xm,batching_pars_vertex:qm,batching_vertex:$m,begin_vertex:Ym,beginnormal_vertex:jm,bsdfs:Zm,iridescence_fragment:Km,bumpmap_pars_fragment:Jm,clipping_planes_fragment:Qm,clipping_planes_pars_fragment:ex,clipping_planes_pars_vertex:tx,clipping_planes_vertex:nx,color_fragment:ix,color_pars_fragment:rx,color_pars_vertex:sx,color_vertex:ax,common:ox,cube_uv_reflection_fragment:cx,defaultnormal_vertex:lx,displacementmap_pars_vertex:hx,displacementmap_vertex:ux,emissivemap_fragment:fx,emissivemap_pars_fragment:dx,colorspace_fragment:px,colorspace_pars_fragment:mx,envmap_fragment:xx,envmap_common_pars_fragment:gx,envmap_pars_fragment:_x,envmap_pars_vertex:vx,envmap_physical_pars_fragment:Px,envmap_vertex:yx,fog_vertex:bx,fog_pars_vertex:Sx,fog_fragment:Mx,fog_pars_fragment:Ex,gradientmap_pars_fragment:Tx,lightmap_pars_fragment:Cx,lights_lambert_fragment:Ax,lights_lambert_pars_fragment:wx,lights_pars_begin:Rx,lights_toon_fragment:Dx,lights_toon_pars_fragment:Lx,lights_phong_fragment:Ix,lights_phong_pars_fragment:Ux,lights_physical_fragment:Nx,lights_physical_pars_fragment:Ox,lights_fragment_begin:Fx,lights_fragment_maps:kx,lights_fragment_end:Bx,logdepthbuf_fragment:zx,logdepthbuf_pars_fragment:Vx,logdepthbuf_pars_vertex:Gx,logdepthbuf_vertex:Hx,map_fragment:Wx,map_pars_fragment:Xx,map_particle_fragment:qx,map_particle_pars_fragment:$x,metalnessmap_fragment:Yx,metalnessmap_pars_fragment:jx,morphinstance_vertex:Zx,morphcolor_vertex:Kx,morphnormal_vertex:Jx,morphtarget_pars_vertex:Qx,morphtarget_vertex:eg,normal_fragment_begin:tg,normal_fragment_maps:ng,normal_pars_fragment:ig,normal_pars_vertex:rg,normal_vertex:sg,normalmap_pars_fragment:ag,clearcoat_normal_fragment_begin:og,clearcoat_normal_fragment_maps:cg,clearcoat_pars_fragment:lg,iridescence_pars_fragment:hg,opaque_fragment:ug,packing:fg,premultiplied_alpha_fragment:dg,project_vertex:pg,dithering_fragment:mg,dithering_pars_fragment:xg,roughnessmap_fragment:gg,roughnessmap_pars_fragment:_g,shadowmap_pars_fragment:vg,shadowmap_pars_vertex:yg,shadowmap_vertex:bg,shadowmask_pars_fragment:Sg,skinbase_vertex:Mg,skinning_pars_vertex:Eg,skinning_vertex:Tg,skinnormal_vertex:Cg,specularmap_fragment:Ag,specularmap_pars_fragment:wg,tonemapping_fragment:Rg,tonemapping_pars_fragment:Pg,transmission_fragment:Dg,transmission_pars_fragment:Lg,uv_pars_fragment:Ig,uv_pars_vertex:Ug,uv_vertex:Ng,worldpos_vertex:Og,background_vert:Fg,background_frag:kg,backgroundCube_vert:Bg,backgroundCube_frag:zg,cube_vert:Vg,cube_frag:Gg,depth_vert:Hg,depth_frag:Wg,distanceRGBA_vert:Xg,distanceRGBA_frag:qg,equirect_vert:$g,equirect_frag:Yg,linedashed_vert:jg,linedashed_frag:Zg,meshbasic_vert:Kg,meshbasic_frag:Jg,meshlambert_vert:Qg,meshlambert_frag:e_,meshmatcap_vert:t_,meshmatcap_frag:n_,meshnormal_vert:i_,meshnormal_frag:r_,meshphong_vert:s_,meshphong_frag:a_,meshphysical_vert:o_,meshphysical_frag:c_,meshtoon_vert:l_,meshtoon_frag:h_,points_vert:u_,points_frag:f_,shadow_vert:d_,shadow_frag:p_,sprite_vert:m_,sprite_frag:x_},ge={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Gn={basic:{uniforms:en([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:en([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new He(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:en([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:en([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:en([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new He(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:en([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:en([ge.points,ge.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:en([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:en([ge.common,ge.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:en([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:en([ge.sprite,ge.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:en([ge.common,ge.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:en([ge.lights,ge.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Gn.physical={uniforms:en([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Aa={r:0,b:0,g:0},zi=new It,g_=new tt;function __(i,e,t,n,r,s,a){const o=new He(0);let c=s===!0?0:1,l,h,f=null,d=0,p=null;function x(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M)),M}function g(_){let M=!1;const w=x(_);w===null?u(o,c):w&&w.isColor&&(u(w,1),M=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,M){const w=x(M);w&&(w.isCubeTexture||w.mapping===ro)?(h===void 0&&(h=new Qe(new jt(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Qr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),zi.copy(M.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(g_.makeRotationFromEuler(zi)),h.material.toneMapped=st.getTransfer(w.colorSpace)!==ht,(f!==w||d!==w.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=w,d=w.version,p=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Qe(new tn(2,2),new Zn({name:"BackgroundMaterial",uniforms:Qr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=st.getTransfer(w.colorSpace)!==ht,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=w,d=w.version,p=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function u(_,M){_.getRGB(Aa,Nf(i)),n.buffers.color.setClear(Aa.r,Aa.g,Aa.b,M,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),c=M,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,u(o,c)},render:g,addToRenderList:m,dispose:b}}function v_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(y,D,k,I,B){let V=!1;const W=f(I,k,D);s!==W&&(s=W,l(s.object)),V=p(y,I,k,B),V&&x(y,I,k,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,M(y,D,k,I),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function f(y,D,k){const I=k.wireframe===!0;let B=n[y.id];B===void 0&&(B={},n[y.id]=B);let V=B[D.id];V===void 0&&(V={},B[D.id]=V);let W=V[I];return W===void 0&&(W=d(c()),V[I]=W),W}function d(y){const D=[],k=[],I=[];for(let B=0;B<t;B++)D[B]=0,k[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:I,object:y,attributes:{},index:null}}function p(y,D,k,I){const B=s.attributes,V=D.attributes;let W=0;const ne=k.getAttributes();for(const q in ne)if(ne[q].location>=0){const ce=B[q];let Se=V[q];if(Se===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(Se=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(Se=y.instanceColor)),ce===void 0||ce.attribute!==Se||Se&&ce.data!==Se.data)return!0;W++}return s.attributesNum!==W||s.index!==I}function x(y,D,k,I){const B={},V=D.attributes;let W=0;const ne=k.getAttributes();for(const q in ne)if(ne[q].location>=0){let ce=V[q];ce===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor));const Se={};Se.attribute=ce,ce&&ce.data&&(Se.data=ce.data),B[q]=Se,W++}s.attributes=B,s.attributesNum=W,s.index=I}function g(){const y=s.newAttributes;for(let D=0,k=y.length;D<k;D++)y[D]=0}function m(y){u(y,0)}function u(y,D){const k=s.newAttributes,I=s.enabledAttributes,B=s.attributeDivisors;k[y]=1,I[y]===0&&(i.enableVertexAttribArray(y),I[y]=1),B[y]!==D&&(i.vertexAttribDivisor(y,D),B[y]=D)}function b(){const y=s.newAttributes,D=s.enabledAttributes;for(let k=0,I=D.length;k<I;k++)D[k]!==y[k]&&(i.disableVertexAttribArray(k),D[k]=0)}function _(y,D,k,I,B,V,W){W===!0?i.vertexAttribIPointer(y,D,k,B,V):i.vertexAttribPointer(y,D,k,I,B,V)}function M(y,D,k,I){g();const B=I.attributes,V=k.getAttributes(),W=D.defaultAttributeValues;for(const ne in V){const q=V[ne];if(q.location>=0){let ae=B[ne];if(ae===void 0&&(ne==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),ne==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),ae!==void 0){const ce=ae.normalized,Se=ae.itemSize,$e=e.get(ae);if($e===void 0)continue;const Ke=$e.buffer,et=$e.type,nt=$e.bytesPerElement,j=et===i.INT||et===i.UNSIGNED_INT||ae.gpuType===Fl;if(ae.isInterleavedBufferAttribute){const K=ae.data,oe=K.stride,Le=ae.offset;if(K.isInstancedInterleavedBuffer){for(let Ee=0;Ee<q.locationSize;Ee++)u(q.location+Ee,K.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ee=0;Ee<q.locationSize;Ee++)m(q.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Ee=0;Ee<q.locationSize;Ee++)_(q.location+Ee,Se/q.locationSize,et,ce,oe*nt,(Le+Se/q.locationSize*Ee)*nt,j)}else{if(ae.isInstancedBufferAttribute){for(let K=0;K<q.locationSize;K++)u(q.location+K,ae.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let K=0;K<q.locationSize;K++)m(q.location+K);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let K=0;K<q.locationSize;K++)_(q.location+K,Se/q.locationSize,et,ce,Se*nt,Se/q.locationSize*K*nt,j)}}else if(W!==void 0){const ce=W[ne];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(q.location,ce);break;case 3:i.vertexAttrib3fv(q.location,ce);break;case 4:i.vertexAttrib4fv(q.location,ce);break;default:i.vertexAttrib1fv(q.location,ce)}}}}b()}function w(){U();for(const y in n){const D=n[y];for(const k in D){const I=D[k];for(const B in I)h(I[B].object),delete I[B];delete D[k]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const k in D){const I=D[k];for(const B in I)h(I[B].object),delete I[B];delete D[k]}delete n[y.id]}function P(y){for(const D in n){const k=n[D];if(k[y.id]===void 0)continue;const I=k[y.id];for(const B in I)h(I[B].object),delete I[B];delete k[y.id]}}function U(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function y_(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),t.update(h,n,f))}function o(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let p=0;for(let x=0;x<f;x++)p+=h[x];t.update(p,n,1)}function c(l,h,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)a(l[x],h[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,f);let x=0;for(let g=0;g<f;g++)x+=h[g]*d[g];t.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function b_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Bn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const U=P===is&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Yn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Wn&&!U)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(qe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=x>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:w,maxSamples:T}}function S_(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new qi,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){const x=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!r||x===null||x.length===0||s&&!m)s?h(null):l();else{const b=s?0:n,_=b*4;let M=u.clippingState||null;c.value=M,M=h(x,d,_,p);for(let w=0;w!==_;++w)M[w]=t[w];u.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,p,x){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=c.value,x!==!0||m===null){const u=p+g*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,M=p;_!==g;++_,M+=4)a.copy(f[_]).applyMatrix4(b,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function M_(i){let e=new WeakMap;function t(a,o){return o===Ac?a.mapping=Zr:o===wc&&(a.mapping=Kr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ac||o===wc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Wp(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Mi=4,uu=[.125,.215,.35,.446,.526,.582],Yi=20,E_=256,vs=new Jf,fu=new He;let Jo=null,Qo=0,ec=0,tc=!1;const T_=new R;class ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=T_}=s;Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jo,Qo,ec),this._renderer.xr.enabled=tc,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===Kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:is,format:Bn,colorSpace:Jr,depthBuffer:!1},r=du(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=C_(s)),this._blurMaterial=w_(s,e,t),this._ggxMaterial=A_(s,e,t)}return r}_compileMaterial(e){const t=new Qe(new Kt,e);this._renderer.compile(t,vs)}_sceneToCubeUV(e,t,n,r,s){const c=new hn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(fu),f.toneMapping=Ci,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qe(new jt,new $n({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let u=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,u=!0):(m.color.copy(fu),u=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[_],s.y,s.z)):M===1?(c.up.set(0,0,l[_]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[_],s.z)):(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[_]));const w=this._cubeSize;Rr(r,M*w,_>2?w:0,w,w),f.setRenderTarget(r),u&&f.render(g,c),f.render(e,c)}f.toneMapping=p,f.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Zr||e.mapping===Kr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Rr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,vs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),d=.05+l*.95,p=f*d,{_lodMax:x}=this,g=this._sizeLods[n],m=3*g*(n>x-Mi?n-x+Mi:0),u=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=x-t,Rr(s,m,u,3*g,2*g),r.setRenderTarget(s),r.render(o,vs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=x-n,Rr(e,m,u,3*g,2*g),r.setRenderTarget(e),r.render(o,vs)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&St("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[r];f.material=l;const d=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Yi-1),g=s/x,m=isFinite(s)?1+Math.floor(h*g):Yi;m>Yi&&qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);const u=[];let b=0;for(let P=0;P<Yi;++P){const U=P/g,S=Math.exp(-U*U/2);u.push(S),P===0?b+=S:P<m&&(b+=2*S)}for(let P=0;P<u.length;P++)u[P]=u[P]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-n;const M=this._sizeLods[r],w=3*M*(r>_-Mi?r-_+Mi:0),T=4*(this._cubeSize-M);Rr(t,w,T,3*M,2*M),c.setRenderTarget(t),c.render(f,vs)}}function C_(i){const e=[],t=[],n=[];let r=i;const s=i-Mi+1+uu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Mi?c=uu[a-i+Mi-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,x=6,g=3,m=2,u=1,b=new Float32Array(g*x*p),_=new Float32Array(m*x*p),M=new Float32Array(u*x*p);for(let T=0;T<p;T++){const P=T%3*2/3-1,U=T>2?0:-1,S=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];b.set(S,g*x*T),_.set(d,m*x*T);const y=[T,T,T,T,T,T];M.set(y,u*x*T)}const w=new Kt;w.setAttribute("position",new nn(b,g)),w.setAttribute("uv",new nn(_,m)),w.setAttribute("faceIndex",new nn(M,u)),n.push(new Qe(w,null)),r>Mi&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function du(i,e,t){const n=new Qi(i,e,t);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function A_(i,e,t){return new Zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:E_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function w_(i,e,t){const n=new Float32Array(Yi),r=new R(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function pu(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function mu(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function oo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ac||c===wc,h=c===Zr||c===Kr;if(l||h){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ul(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new ul(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function P_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Hs("WebGLRenderer: "+n+" extension not supported."),r}}}function D_(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(f){const d=[],p=f.index,x=f.attributes.position;let g=0;if(p!==null){const b=p.array;g=p.version;for(let _=0,M=b.length;_<M;_+=3){const w=b[_+0],T=b[_+1],P=b[_+2];d.push(w,T,T,P,P,w)}}else if(x!==void 0){const b=x.array;g=x.version;for(let _=0,M=b.length/3-1;_<M;_+=3){const w=_+0,T=_+1,P=_+2;d.push(w,T,T,P,P,w)}}else return;const m=new(Rf(d)?Uf:If)(d,1);m.version=g;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function L_(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*a),t.update(p,n,1)}function l(d,p,x){x!==0&&(i.drawElementsInstanced(n,p,s,d*a,x),t.update(p,n,x))}function h(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,x);let m=0;for(let u=0;u<x;u++)m+=p[u];t.update(m,n,1)}function f(d,p,x,g){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)l(d[u]/a,p[u],g[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,g,0,x);let u=0;for(let b=0;b<x;b++)u+=p[b]*g[b];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function I_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:St("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function U_(i,e,t){const n=new WeakMap,r=new ut;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let S=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let _=0;p===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let M=o.attributes.position.count*_,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const T=new Float32Array(M*w*4*f),P=new Pf(T,M,w,f);P.type=Wn,P.needsUpdate=!0;const U=_*4;for(let y=0;y<f;y++){const D=m[y],k=u[y],I=b[y],B=M*w*4*y;for(let V=0;V<D.count;V++){const W=V*U;p===!0&&(r.fromBufferAttribute(D,V),T[B+W+0]=r.x,T[B+W+1]=r.y,T[B+W+2]=r.z,T[B+W+3]=0),x===!0&&(r.fromBufferAttribute(k,V),T[B+W+4]=r.x,T[B+W+5]=r.y,T[B+W+6]=r.z,T[B+W+7]=0),g===!0&&(r.fromBufferAttribute(I,V),T[B+W+8]=r.x,T[B+W+9]=r.y,T[B+W+10]=r.z,T[B+W+11]=I.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new le(M,w)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function N_(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const ed=new Yt,xu=new zf(1,1),td=new Pf,nd=new Cp,id=new Ff,gu=[],_u=[],vu=new Float32Array(16),yu=new Float32Array(9),bu=new Float32Array(4);function ss(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=gu[r];if(s===void 0&&(s=new Float32Array(r),gu[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function co(i,e){let t=_u[e];t===void 0&&(t=new Int32Array(e),_u[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function O_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function F_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function k_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function B_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function z_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;bu.set(n),i.uniformMatrix2fv(this.addr,!1,bu),Ot(t,n)}}function V_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;yu.set(n),i.uniformMatrix3fv(this.addr,!1,yu),Ot(t,n)}}function G_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;vu.set(n),i.uniformMatrix4fv(this.addr,!1,vu),Ot(t,n)}}function H_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function W_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function X_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function $_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function j_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function Z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function K_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(xu.compareFunction=wf,s=xu):s=ed,t.setTexture2D(e||s,r)}function J_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||nd,r)}function Q_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||id,r)}function ev(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||td,r)}function tv(i){switch(i){case 5126:return O_;case 35664:return F_;case 35665:return k_;case 35666:return B_;case 35674:return z_;case 35675:return V_;case 35676:return G_;case 5124:case 35670:return H_;case 35667:case 35671:return W_;case 35668:case 35672:return X_;case 35669:case 35673:return q_;case 5125:return $_;case 36294:return Y_;case 36295:return j_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return J_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return ev}}function nv(i,e){i.uniform1fv(this.addr,e)}function iv(i,e){const t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function rv(i,e){const t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function sv(i,e){const t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function av(i,e){const t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ov(i,e){const t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function cv(i,e){const t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lv(i,e){i.uniform1iv(this.addr,e)}function hv(i,e){i.uniform2iv(this.addr,e)}function uv(i,e){i.uniform3iv(this.addr,e)}function fv(i,e){i.uniform4iv(this.addr,e)}function dv(i,e){i.uniform1uiv(this.addr,e)}function pv(i,e){i.uniform2uiv(this.addr,e)}function mv(i,e){i.uniform3uiv(this.addr,e)}function xv(i,e){i.uniform4uiv(this.addr,e)}function gv(i,e,t){const n=this.cache,r=e.length,s=co(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ed,s[a])}function _v(i,e,t){const n=this.cache,r=e.length,s=co(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||nd,s[a])}function vv(i,e,t){const n=this.cache,r=e.length,s=co(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||id,s[a])}function yv(i,e,t){const n=this.cache,r=e.length,s=co(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||td,s[a])}function bv(i){switch(i){case 5126:return nv;case 35664:return iv;case 35665:return rv;case 35666:return sv;case 35674:return av;case 35675:return ov;case 35676:return cv;case 5124:case 35670:return lv;case 35667:case 35671:return hv;case 35668:case 35672:return uv;case 35669:case 35673:return fv;case 5125:return dv;case 36294:return pv;case 36295:return mv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return yv}}class Sv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tv(t.type)}}class Mv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bv(t.type)}}class Ev{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const nc=/(\w+)(\])?(\[|\.)?/g;function Su(i,e){i.seq.push(e),i.map[e.id]=e}function Tv(i,e,t){const n=i.name,r=n.length;for(nc.lastIndex=0;;){const s=nc.exec(n),a=nc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Su(t,l===void 0?new Sv(o,i,e):new Mv(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Ev(o),Su(t,f)),t=f}}}class Ba{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Tv(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Mu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Cv=37297;let Av=0;function wv(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Eu=new Ye;function Rv(i){st._getMatrix(Eu,st.workingColorSpace,i);const e=`mat3( ${Eu.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case $a:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Tu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+wv(i.getShaderSource(e),o)}else return s}function Pv(i,e){const t=Rv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dv(i,e){let t;switch(e){case z0:t="Linear";break;case V0:t="Reinhard";break;case G0:t="Cineon";break;case H0:t="ACESFilmic";break;case X0:t="AgX";break;case yf:t="Neutral";break;case W0:t="Custom";break;default:qe("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wa=new R;function Lv(){st.getLuminanceCoefficients(wa);const i=wa.x.toFixed(4),e=wa.y.toFixed(4),t=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function Uv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Cs(i){return i!==""}function Cu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Au(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(i){return i.replace(Ov,kv)}const Fv=new Map;function kv(i,e){let t=je[e];if(t===void 0){const n=Fv.get(e);if(n!==void 0)t=je[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fl(t)}const Bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(i){return i.replace(Bv,zv)}function zv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ru(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_f?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===vf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Gv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zr:case Kr:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hv(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Kr&&(e="ENVMAP_MODE_REFRACTION"),e}function Wv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ol:e="ENVMAP_BLENDING_MULTIPLY";break;case k0:e="ENVMAP_BLENDING_MIX";break;case B0:e="ENVMAP_BLENDING_ADD";break}return e}function Xv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qv(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Vv(t),l=Gv(t),h=Hv(t),f=Wv(t),d=Xv(t),p=Iv(t),x=Uv(s),g=r.createProgram();let m,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Cs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Cs).join(`
`),u.length>0&&(u+=`
`)):(m=[Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),u=[Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?je.tonemapping_pars_fragment:"",t.toneMapping!==Ci?Dv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Pv("linearToOutputTexel",t.outputColorSpace),Lv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),a=fl(a),a=Cu(a,t),a=Au(a,t),o=fl(o),o=Cu(o,t),o=Au(o,t),a=wu(a),o=wu(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=b+m+a,M=b+u+o,w=Mu(r,r.VERTEX_SHADER,_),T=Mu(r,r.FRAGMENT_SHADER,M);r.attachShader(g,w),r.attachShader(g,T),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function P(D){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(g)||"",I=r.getShaderInfoLog(w)||"",B=r.getShaderInfoLog(T)||"",V=k.trim(),W=I.trim(),ne=B.trim();let q=!0,ae=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,w,T);else{const ce=Tu(r,w,"vertex"),Se=Tu(r,T,"fragment");St("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+ce+`
`+Se)}else V!==""?qe("WebGLProgram: Program Info Log:",V):(W===""||ne==="")&&(ae=!1);ae&&(D.diagnostics={runnable:q,programLog:V,vertexShader:{log:W,prefix:m},fragmentShader:{log:ne,prefix:u}})}r.deleteShader(w),r.deleteShader(T),U=new Ba(r,g),S=Nv(r,g)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,Cv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Av++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=T,this}let $v=0;class Yv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jv(e),t.set(e,n)),n}}class jv{constructor(e){this.id=$v++,this.code=e,this.usedTimes=0}}function Zv(i,e,t,n,r,s,a){const o=new Df,c=new Yv,l=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,D,k,I){const B=k.fog,V=I.geometry,W=S.isMeshStandardMaterial?k.environment:null,ne=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),q=ne&&ne.mapping===ro?ne.image.height:null,ae=x[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&qe("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Se=ce!==void 0?ce.length:0;let $e=0;V.morphAttributes.position!==void 0&&($e=1),V.morphAttributes.normal!==void 0&&($e=2),V.morphAttributes.color!==void 0&&($e=3);let Ke,et,nt,j;if(ae){const ct=Gn[ae];Ke=ct.vertexShader,et=ct.fragmentShader}else Ke=S.vertexShader,et=S.fragmentShader,c.update(S),nt=c.getVertexShaderID(S),j=c.getFragmentShaderID(S);const K=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),Le=I.isInstancedMesh===!0,Ee=I.isBatchedMesh===!0,We=!!S.map,ft=!!S.matcap,ze=!!ne,ee=!!S.aoMap,A=!!S.lightMap,Q=!!S.bumpMap,se=!!S.normalMap,ue=!!S.displacementMap,ie=!!S.emissiveMap,Te=!!S.metalnessMap,me=!!S.roughnessMap,be=S.anisotropy>0,C=S.clearcoat>0,v=S.dispersion>0,F=S.iridescence>0,$=S.sheen>0,J=S.transmission>0,X=be&&!!S.anisotropyMap,De=C&&!!S.clearcoatMap,xe=C&&!!S.clearcoatNormalMap,Ie=C&&!!S.clearcoatRoughnessMap,Re=F&&!!S.iridescenceMap,te=F&&!!S.iridescenceThicknessMap,fe=$&&!!S.sheenColorMap,Be=$&&!!S.sheenRoughnessMap,Oe=!!S.specularMap,ye=!!S.specularColorMap,Ge=!!S.specularIntensityMap,L=J&&!!S.transmissionMap,_e=J&&!!S.thicknessMap,de=!!S.gradientMap,pe=!!S.alphaMap,re=S.alphaTest>0,Z=!!S.alphaHash,Ae=!!S.extensions;let Xe=Ci;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Xe=i.toneMapping);const gt={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:Ke,fragmentShader:et,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&I._colorsTexture!==null,instancing:Le,instancingColor:Le&&I.instanceColor!==null,instancingMorph:Le&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Jr,alphaToCoverage:!!S.alphaToCoverage,map:We,matcap:ft,envMap:ze,envMapMode:ze&&ne.mapping,envMapCubeUVHeight:q,aoMap:ee,lightMap:A,bumpMap:Q,normalMap:se,displacementMap:d&&ue,emissiveMap:ie,normalMapObjectSpace:se&&S.normalMapType===j0,normalMapTangentSpace:se&&S.normalMapType===Xl,metalnessMap:Te,roughnessMap:me,anisotropy:be,anisotropyMap:X,clearcoat:C,clearcoatMap:De,clearcoatNormalMap:xe,clearcoatRoughnessMap:Ie,dispersion:v,iridescence:F,iridescenceMap:Re,iridescenceThicknessMap:te,sheen:$,sheenColorMap:fe,sheenRoughnessMap:Be,specularMap:Oe,specularColorMap:ye,specularIntensityMap:Ge,transmission:J,transmissionMap:L,thicknessMap:_e,gradientMap:de,opaque:S.transparent===!1&&S.blending===Vr&&S.alphaToCoverage===!1,alphaMap:pe,alphaTest:re,alphaHash:Z,combine:S.combine,mapUv:We&&g(S.map.channel),aoMapUv:ee&&g(S.aoMap.channel),lightMapUv:A&&g(S.lightMap.channel),bumpMapUv:Q&&g(S.bumpMap.channel),normalMapUv:se&&g(S.normalMap.channel),displacementMapUv:ue&&g(S.displacementMap.channel),emissiveMapUv:ie&&g(S.emissiveMap.channel),metalnessMapUv:Te&&g(S.metalnessMap.channel),roughnessMapUv:me&&g(S.roughnessMap.channel),anisotropyMapUv:X&&g(S.anisotropyMap.channel),clearcoatMapUv:De&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Be&&g(S.sheenRoughnessMap.channel),specularMapUv:Oe&&g(S.specularMap.channel),specularColorMapUv:ye&&g(S.specularColorMap.channel),specularIntensityMapUv:Ge&&g(S.specularIntensityMap.channel),transmissionMapUv:L&&g(S.transmissionMap.channel),thicknessMapUv:_e&&g(S.thicknessMap.channel),alphaMapUv:pe&&g(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(se||be),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(We||pe),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:oe,skinning:I.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:$e,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:We&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===ht,decodeVideoTextureEmissive:ie&&S.emissiveMap.isVideoTexture===!0&&st.getTransfer(S.emissiveMap.colorSpace)===ht,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Hn,flipSided:S.side===$t,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ae&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&S.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function u(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)y.push(D),y.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(b(y,S),_(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function b(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function _(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){const y=x[S.type];let D;if(y){const k=Gn[y];D=zp.clone(k.uniforms)}else D=S.uniforms;return D}function w(S,y){let D;for(let k=0,I=h.length;k<I;k++){const B=h[k];if(B.cacheKey===y){D=B,++D.usedTimes;break}}return D===void 0&&(D=new qv(i,y,S,s),h.push(D)),D}function T(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function P(S){c.remove(S)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:w,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:U}}function Kv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Jv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Pu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Du(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,p,x,g,m){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:x,renderOrder:f.renderOrder,z:g,group:m},i[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=g,u.group=m),e++,u}function o(f,d,p,x,g,m){const u=a(f,d,p,x,g,m);p.transmission>0?n.push(u):p.transparent===!0?r.push(u):t.push(u)}function c(f,d,p,x,g,m){const u=a(f,d,p,x,g,m);p.transmission>0?n.unshift(u):p.transparent===!0?r.unshift(u):t.unshift(u)}function l(f,d){t.length>1&&t.sort(f||Jv),n.length>1&&n.sort(d||Pu),r.length>1&&r.sort(d||Pu)}function h(){for(let f=e,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function Qv(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Du,i.set(n,[a])):r>=s.length?(a=new Du,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ey(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new He};break;case"SpotLight":t={position:new R,direction:new R,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function ty(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ny=0;function iy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ry(i){const e=new ey,t=ty(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const r=new R,s=new tt,a=new tt;function o(l){let h=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,x=0,g=0,m=0,u=0,b=0,_=0,M=0,w=0,T=0,P=0;l.sort(iy);for(let S=0,y=l.length;S<y;S++){const D=l[S],k=D.color,I=D.intensity,B=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=k.r*I,f+=k.g*I,d+=k.b*I;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],I);P++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ne=D.shadow,q=t.get(D);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=D.shadow.matrix,b++}n.directional[p]=W,p++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(k).multiplyScalar(I),W.distance=B,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[g]=W;const ne=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,ne.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[g]=ne.matrix,D.castShadow){const q=t.get(D);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,n.spotShadow[g]=q,n.spotShadowMap[g]=V,M++}g++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(k).multiplyScalar(I),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=W,m++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const ne=D.shadow,q=t.get(D);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,q.shadowCameraNear=ne.camera.near,q.shadowCameraFar=ne.camera.far,n.pointShadow[x]=q,n.pointShadowMap[x]=V,n.pointShadowMatrix[x]=D.shadow.matrix,_++}n.point[x]=W,x++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(I),W.groundColor.copy(D.groundColor).multiplyScalar(I),n.hemi[u]=W,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==p||U.pointLength!==x||U.spotLength!==g||U.rectAreaLength!==m||U.hemiLength!==u||U.numDirectionalShadows!==b||U.numPointShadows!==_||U.numSpotShadows!==M||U.numSpotMaps!==w||U.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,U.directionalLength=p,U.pointLength=x,U.spotLength=g,U.rectAreaLength=m,U.hemiLength=u,U.numDirectionalShadows=b,U.numPointShadows=_,U.numSpotShadows=M,U.numSpotMaps=w,U.numLightProbes=P,n.version=ny++)}function c(l,h){let f=0,d=0,p=0,x=0,g=0;const m=h.matrixWorldInverse;for(let u=0,b=l.length;u<b;u++){const _=l[u];if(_.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(_.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const M=n.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Lu(i){const e=new ry(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function sy(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Lu(i),e.set(r,[o])):s>=a.length?(o=new Lu(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cy(i,e,t){let n=new Zl;const r=new le,s=new le,a=new ut,o=new Dm({depthPacking:Y0}),c=new Lm,l={},h=t.maxTextureSize,f={[Di]:$t,[$t]:Di,[Hn]:Hn},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:ay,fragmentShader:oy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new Kt;x.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Qe(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_f;let u=this.type;this.render=function(T,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(li),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const I=u!==ai&&this.type===ai,B=u===ai&&this.type!==ai;for(let V=0,W=T.length;V<W;V++){const ne=T[V],q=ne.shadow;if(q===void 0){qe("WebGLShadowMap:",ne,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ae=q.getFrameExtents();if(r.multiply(ae),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ae.x),r.x=s.x*ae.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ae.y),r.y=s.y*ae.y,q.mapSize.y=s.y)),q.map===null||I===!0||B===!0){const Se=this.type!==ai?{minFilter:Tn,magFilter:Tn}:{};q.map!==null&&q.map.dispose(),q.map=new Qi(r.x,r.y,Se),q.map.texture.name=ne.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const ce=q.getViewportCount();for(let Se=0;Se<ce;Se++){const $e=q.getViewport(Se);a.set(s.x*$e.x,s.y*$e.y,s.x*$e.z,s.y*$e.w),k.viewport(a),q.updateMatrices(ne,Se),n=q.getFrustum(),M(P,U,q.camera,ne,this.type)}q.isPointLightShadow!==!0&&this.type===ai&&b(q,U),q.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,D)};function b(T,P){const U=e.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qi(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,U,d,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,U,p,g,null)}function _(T,P,U,S){let y=null;const D=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)y=D;else if(y=U.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const k=y.uuid,I=P.uuid;let B=l[k];B===void 0&&(B={},l[k]=B);let V=B[I];V===void 0&&(V=y.clone(),B[I]=V,P.addEventListener("dispose",w)),y=V}if(y.visible=P.visible,y.wireframe=P.wireframe,S===ai?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:f[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=i.properties.get(y);k.light=U}return y}function M(T,P,U,S,y){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===ai)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);const I=e.update(T),B=T.material;if(Array.isArray(B)){const V=I.groups;for(let W=0,ne=V.length;W<ne;W++){const q=V[W],ae=B[q.materialIndex];if(ae&&ae.visible){const ce=_(T,ae,S,y);T.onBeforeShadow(i,T,P,U,I,ce,q),i.renderBufferDirect(U,null,I,ce,T,q),T.onAfterShadow(i,T,P,U,I,ce,q)}}}else if(B.visible){const V=_(T,B,S,y);T.onBeforeShadow(i,T,P,U,I,V,null),i.renderBufferDirect(U,null,I,V,T,null),T.onAfterShadow(i,T,P,U,I,V,null)}}const k=T.children;for(let I=0,B=k.length;I<B;I++)M(k[I],P,U,S,y)}function w(T){T.target.removeEventListener("dispose",w);for(const U in l){const S=l[U],y=T.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const ly={[yc]:bc,[Sc]:Tc,[Mc]:Cc,[jr]:Ec,[bc]:yc,[Tc]:Sc,[Cc]:Mc,[Ec]:jr};function hy(i,e){function t(){let L=!1;const _e=new ut;let de=null;const pe=new ut(0,0,0,0);return{setMask:function(re){de!==re&&!L&&(i.colorMask(re,re,re,re),de=re)},setLocked:function(re){L=re},setClear:function(re,Z,Ae,Xe,gt){gt===!0&&(re*=Xe,Z*=Xe,Ae*=Xe),_e.set(re,Z,Ae,Xe),pe.equals(_e)===!1&&(i.clearColor(re,Z,Ae,Xe),pe.copy(_e))},reset:function(){L=!1,de=null,pe.set(-1,0,0,0)}}}function n(){let L=!1,_e=!1,de=null,pe=null,re=null;return{setReversed:function(Z){if(_e!==Z){const Ae=e.get("EXT_clip_control");Z?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),_e=Z;const Xe=re;re=null,this.setClear(Xe)}},getReversed:function(){return _e},setTest:function(Z){Z?K(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(Z){de!==Z&&!L&&(i.depthMask(Z),de=Z)},setFunc:function(Z){if(_e&&(Z=ly[Z]),pe!==Z){switch(Z){case yc:i.depthFunc(i.NEVER);break;case bc:i.depthFunc(i.ALWAYS);break;case Sc:i.depthFunc(i.LESS);break;case jr:i.depthFunc(i.LEQUAL);break;case Mc:i.depthFunc(i.EQUAL);break;case Ec:i.depthFunc(i.GEQUAL);break;case Tc:i.depthFunc(i.GREATER);break;case Cc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=Z}},setLocked:function(Z){L=Z},setClear:function(Z){re!==Z&&(_e&&(Z=1-Z),i.clearDepth(Z),re=Z)},reset:function(){L=!1,de=null,pe=null,re=null,_e=!1}}}function r(){let L=!1,_e=null,de=null,pe=null,re=null,Z=null,Ae=null,Xe=null,gt=null;return{setTest:function(ct){L||(ct?K(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(ct){_e!==ct&&!L&&(i.stencilMask(ct),_e=ct)},setFunc:function(ct,Vn,Ln){(de!==ct||pe!==Vn||re!==Ln)&&(i.stencilFunc(ct,Vn,Ln),de=ct,pe=Vn,re=Ln)},setOp:function(ct,Vn,Ln){(Z!==ct||Ae!==Vn||Xe!==Ln)&&(i.stencilOp(ct,Vn,Ln),Z=ct,Ae=Vn,Xe=Ln)},setLocked:function(ct){L=ct},setClear:function(ct){gt!==ct&&(i.clearStencil(ct),gt=ct)},reset:function(){L=!1,_e=null,de=null,pe=null,re=null,Z=null,Ae=null,Xe=null,gt=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let h={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,u=null,b=null,_=null,M=null,w=null,T=null,P=new He(0,0,0),U=0,S=!1,y=null,D=null,k=null,I=null,B=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ne=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=ne>=2);let ae=null,ce={};const Se=i.getParameter(i.SCISSOR_BOX),$e=i.getParameter(i.VIEWPORT),Ke=new ut().fromArray(Se),et=new ut().fromArray($e);function nt(L,_e,de,pe){const re=new Uint8Array(4),Z=i.createTexture();i.bindTexture(L,Z),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<de;Ae++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(_e+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return Z}const j={};j[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(jr),Q(!1),se(Rh),K(i.CULL_FACE),ee(li);function K(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function oe(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Le(L,_e){return f[L]!==_e?(i.bindFramebuffer(L,_e),f[L]=_e,L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=_e),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ee(L,_e){let de=p,pe=!1;if(L){de=d.get(_e),de===void 0&&(de=[],d.set(_e,de));const re=L.textures;if(de.length!==re.length||de[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,Ae=re.length;Z<Ae;Z++)de[Z]=i.COLOR_ATTACHMENT0+Z;de.length=re.length,pe=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,pe=!0);pe&&i.drawBuffers(de)}function We(L){return x!==L?(i.useProgram(L),x=L,!0):!1}const ft={[$i]:i.FUNC_ADD,[b0]:i.FUNC_SUBTRACT,[S0]:i.FUNC_REVERSE_SUBTRACT};ft[M0]=i.MIN,ft[E0]=i.MAX;const ze={[T0]:i.ZERO,[C0]:i.ONE,[A0]:i.SRC_COLOR,[_c]:i.SRC_ALPHA,[I0]:i.SRC_ALPHA_SATURATE,[D0]:i.DST_COLOR,[R0]:i.DST_ALPHA,[w0]:i.ONE_MINUS_SRC_COLOR,[vc]:i.ONE_MINUS_SRC_ALPHA,[L0]:i.ONE_MINUS_DST_COLOR,[P0]:i.ONE_MINUS_DST_ALPHA,[U0]:i.CONSTANT_COLOR,[N0]:i.ONE_MINUS_CONSTANT_COLOR,[O0]:i.CONSTANT_ALPHA,[F0]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(L,_e,de,pe,re,Z,Ae,Xe,gt,ct){if(L===li){g===!0&&(oe(i.BLEND),g=!1);return}if(g===!1&&(K(i.BLEND),g=!0),L!==y0){if(L!==m||ct!==S){if((u!==$i||M!==$i)&&(i.blendEquation(i.FUNC_ADD),u=$i,M=$i),ct)switch(L){case Vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hi:i.blendFunc(i.ONE,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:St("WebGLState: Invalid blending: ",L);break}else switch(L){case Vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ph:St("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dh:St("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:St("WebGLState: Invalid blending: ",L);break}b=null,_=null,w=null,T=null,P.set(0,0,0),U=0,m=L,S=ct}return}re=re||_e,Z=Z||de,Ae=Ae||pe,(_e!==u||re!==M)&&(i.blendEquationSeparate(ft[_e],ft[re]),u=_e,M=re),(de!==b||pe!==_||Z!==w||Ae!==T)&&(i.blendFuncSeparate(ze[de],ze[pe],ze[Z],ze[Ae]),b=de,_=pe,w=Z,T=Ae),(Xe.equals(P)===!1||gt!==U)&&(i.blendColor(Xe.r,Xe.g,Xe.b,gt),P.copy(Xe),U=gt),m=L,S=!1}function A(L,_e){L.side===Hn?oe(i.CULL_FACE):K(i.CULL_FACE);let de=L.side===$t;_e&&(de=!de),Q(de),L.blending===Vr&&L.transparent===!1?ee(li):ee(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const pe=L.stencilWrite;o.setTest(pe),pe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ie(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function se(L){L!==_0?(K(i.CULL_FACE),L!==D&&(L===Rh?i.cullFace(i.BACK):L===v0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),D=L}function ue(L){L!==k&&(W&&i.lineWidth(L),k=L)}function ie(L,_e,de){L?(K(i.POLYGON_OFFSET_FILL),(I!==_e||B!==de)&&(i.polygonOffset(_e,de),I=_e,B=de)):oe(i.POLYGON_OFFSET_FILL)}function Te(L){L?K(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function me(L){L===void 0&&(L=i.TEXTURE0+V-1),ae!==L&&(i.activeTexture(L),ae=L)}function be(L,_e,de){de===void 0&&(ae===null?de=i.TEXTURE0+V-1:de=ae);let pe=ce[de];pe===void 0&&(pe={type:void 0,texture:void 0},ce[de]=pe),(pe.type!==L||pe.texture!==_e)&&(ae!==de&&(i.activeTexture(de),ae=de),i.bindTexture(L,_e||j[L]),pe.type=L,pe.texture=_e)}function C(){const L=ce[ae];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function $(){try{i.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function J(){try{i.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function De(){try{i.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function xe(){try{i.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Ie(){try{i.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Re(){try{i.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function te(){try{i.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function fe(L){Ke.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ke.copy(L))}function Be(L){et.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),et.copy(L))}function Oe(L,_e){let de=l.get(_e);de===void 0&&(de=new WeakMap,l.set(_e,de));let pe=de.get(L);pe===void 0&&(pe=i.getUniformBlockIndex(_e,L.name),de.set(L,pe))}function ye(L,_e){const pe=l.get(_e).get(L);c.get(_e)!==pe&&(i.uniformBlockBinding(_e,pe,L.__bindingPointIndex),c.set(_e,pe))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ae=null,ce={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,u=null,b=null,_=null,M=null,w=null,T=null,P=new He(0,0,0),U=0,S=!1,y=null,D=null,k=null,I=null,B=null,Ke.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:oe,bindFramebuffer:Le,drawBuffers:Ee,useProgram:We,setBlending:ee,setMaterial:A,setFlipSided:Q,setCullFace:se,setLineWidth:ue,setPolygonOffset:ie,setScissorTest:Te,activeTexture:me,bindTexture:be,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:Re,texImage3D:te,updateUBOMapping:Oe,uniformBlockBinding:ye,texStorage2D:xe,texStorage3D:Ie,texSubImage2D:$,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:De,scissor:fe,viewport:Be,reset:Ge}}function uy(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new le,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,v){return p?new OffscreenCanvas(C,v):ja("canvas")}function g(C,v,F){let $=1;const J=be(C);if((J.width>F||J.height>F)&&($=F/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor($*J.width),De=Math.floor($*J.height);f===void 0&&(f=x(X,De));const xe=v?x(X,De):f;return xe.width=X,xe.height=De,xe.getContext("2d").drawImage(C,0,0,X,De),qe("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+De+")."),xe}else return"data"in C&&qe("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function u(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,v,F,$,J=!1){if(C!==null){if(i[C]!==void 0)return i[C];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=v;if(v===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),v===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),v===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),v===i.RGBA){const De=J?$a:st.getTransfer($);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=De===ht?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(C,v){let F;return C?v===null||v===Ji||v===zs?F=i.DEPTH24_STENCIL8:v===Wn?F=i.DEPTH32F_STENCIL8:v===Bs&&(F=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ji||v===zs?F=i.DEPTH_COMPONENT24:v===Wn?F=i.DEPTH_COMPONENT32F:v===Bs&&(F=i.DEPTH_COMPONENT16),F}function w(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Tn&&C.minFilter!==Dn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function T(C){const v=C.target;v.removeEventListener("dispose",T),U(v),v.isVideoTexture&&h.delete(v)}function P(C){const v=C.target;v.removeEventListener("dispose",P),y(v)}function U(C){const v=n.get(C);if(v.__webglInit===void 0)return;const F=C.source,$=d.get(F);if($){const J=$[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(C),Object.keys($).length===0&&d.delete(F)}n.remove(C)}function S(C){const v=n.get(C);i.deleteTexture(v.__webglTexture);const F=C.source,$=d.get(F);delete $[v.__cacheKey],a.memory.textures--}function y(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let J=0;J<v.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[$][J]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=C.textures;for(let $=0,J=F.length;$<J;$++){const X=n.get(F[$]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[$])}n.remove(C)}let D=0;function k(){D=0}function I(){const C=D;return C>=r.maxTextures&&qe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),D+=1,C}function B(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function V(C,v){const F=n.get(C);if(C.isVideoTexture&&Te(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){const $=C.image;if($===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,C,v);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function W(C,v){const F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){j(F,C,v);return}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function ne(C,v){const F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){j(F,C,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function q(C,v){const F=n.get(C);if(C.version>0&&F.__version!==C.version){K(F,C,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const ae={[ks]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[Rc]:i.MIRRORED_REPEAT},ce={[Tn]:i.NEAREST,[q0]:i.NEAREST_MIPMAP_NEAREST,[na]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[So]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},Se={[Z0]:i.NEVER,[np]:i.ALWAYS,[K0]:i.LESS,[wf]:i.LEQUAL,[J0]:i.EQUAL,[tp]:i.GEQUAL,[Q0]:i.GREATER,[ep]:i.NOTEQUAL};function $e(C,v){if(v.type===Wn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Dn||v.magFilter===So||v.magFilter===na||v.magFilter===Si||v.minFilter===Dn||v.minFilter===So||v.minFilter===na||v.minFilter===Si)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ae[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ae[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ae[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ce[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ce[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Tn||v.minFilter!==na&&v.minFilter!==Si||v.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ke(C,v){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",T));const $=v.source;let J=d.get($);J===void 0&&(J={},d.set($,J));const X=B(v);if(X!==C.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[X].usedTimes++;const De=J[C.__cacheKey];De!==void 0&&(J[C.__cacheKey].usedTimes--,De.usedTimes===0&&S(v)),C.__cacheKey=X,C.__webglTexture=J[X].texture}return F}function et(C,v,F){return Math.floor(Math.floor(C/F)/v)}function nt(C,v,F,$){const X=C.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,F,$,v.data);else{X.sort((te,fe)=>te.start-fe.start);let De=0;for(let te=1;te<X.length;te++){const fe=X[De],Be=X[te],Oe=fe.start+fe.count,ye=et(Be.start,v.width,4),Ge=et(fe.start,v.width,4);Be.start<=Oe+1&&ye===Ge&&et(Be.start+Be.count-1,v.width,4)===ye?fe.count=Math.max(fe.count,Be.start+Be.count-fe.start):(++De,X[De]=Be)}X.length=De+1;const xe=i.getParameter(i.UNPACK_ROW_LENGTH),Ie=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let te=0,fe=X.length;te<fe;te++){const Be=X[te],Oe=Math.floor(Be.start/4),ye=Math.ceil(Be.count/4),Ge=Oe%v.width,L=Math.floor(Oe/v.width),_e=ye,de=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Ge,L,_e,de,F,$,v.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,xe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function j(C,v,F){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);const J=Ke(C,v),X=v.source;t.bindTexture($,C.__webglTexture,i.TEXTURE0+F);const De=n.get(X);if(X.version!==De.__version||J===!0){t.activeTexture(i.TEXTURE0+F);const xe=st.getPrimaries(st.workingColorSpace),Ie=v.colorSpace===bi?null:st.getPrimaries(v.colorSpace),Re=v.colorSpace===bi||xe===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let te=g(v.image,!1,r.maxTextureSize);te=me(v,te);const fe=s.convert(v.format,v.colorSpace),Be=s.convert(v.type);let Oe=_(v.internalFormat,fe,Be,v.colorSpace,v.isVideoTexture);$e($,v);let ye;const Ge=v.mipmaps,L=v.isVideoTexture!==!0,_e=De.__version===void 0||J===!0,de=X.dataReady,pe=w(v,te);if(v.isDepthTexture)Oe=M(v.format===Gs,v.type),_e&&(L?t.texStorage2D(i.TEXTURE_2D,1,Oe,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Oe,te.width,te.height,0,fe,Be,null));else if(v.isDataTexture)if(Ge.length>0){L&&_e&&t.texStorage2D(i.TEXTURE_2D,pe,Oe,Ge[0].width,Ge[0].height);for(let re=0,Z=Ge.length;re<Z;re++)ye=Ge[re],L?de&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ye.width,ye.height,fe,Be,ye.data):t.texImage2D(i.TEXTURE_2D,re,Oe,ye.width,ye.height,0,fe,Be,ye.data);v.generateMipmaps=!1}else L?(_e&&t.texStorage2D(i.TEXTURE_2D,pe,Oe,te.width,te.height),de&&nt(v,te,fe,Be)):t.texImage2D(i.TEXTURE_2D,0,Oe,te.width,te.height,0,fe,Be,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Oe,Ge[0].width,Ge[0].height,te.depth);for(let re=0,Z=Ge.length;re<Z;re++)if(ye=Ge[re],v.format!==Bn)if(fe!==null)if(L){if(de)if(v.layerUpdates.size>0){const Ae=hu(ye.width,ye.height,v.format,v.type);for(const Xe of v.layerUpdates){const gt=ye.data.subarray(Xe*Ae/ye.data.BYTES_PER_ELEMENT,(Xe+1)*Ae/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Xe,ye.width,ye.height,1,fe,gt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,te.depth,fe,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Oe,ye.width,ye.height,te.depth,0,ye.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,te.depth,fe,Be,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Oe,ye.width,ye.height,te.depth,0,fe,Be,ye.data)}else{L&&_e&&t.texStorage2D(i.TEXTURE_2D,pe,Oe,Ge[0].width,Ge[0].height);for(let re=0,Z=Ge.length;re<Z;re++)ye=Ge[re],v.format!==Bn?fe!==null?L?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,ye.width,ye.height,fe,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Oe,ye.width,ye.height,0,ye.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?de&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ye.width,ye.height,fe,Be,ye.data):t.texImage2D(i.TEXTURE_2D,re,Oe,ye.width,ye.height,0,fe,Be,ye.data)}else if(v.isDataArrayTexture)if(L){if(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Oe,te.width,te.height,te.depth),de)if(v.layerUpdates.size>0){const re=hu(te.width,te.height,v.format,v.type);for(const Z of v.layerUpdates){const Ae=te.data.subarray(Z*re/te.data.BYTES_PER_ELEMENT,(Z+1)*re/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,te.width,te.height,1,fe,Be,Ae)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,Be,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,te.width,te.height,te.depth,0,fe,Be,te.data);else if(v.isData3DTexture)L?(_e&&t.texStorage3D(i.TEXTURE_3D,pe,Oe,te.width,te.height,te.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,Be,te.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,te.width,te.height,te.depth,0,fe,Be,te.data);else if(v.isFramebufferTexture){if(_e)if(L)t.texStorage2D(i.TEXTURE_2D,pe,Oe,te.width,te.height);else{let re=te.width,Z=te.height;for(let Ae=0;Ae<pe;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Oe,re,Z,0,fe,Be,null),re>>=1,Z>>=1}}else if(Ge.length>0){if(L&&_e){const re=be(Ge[0]);t.texStorage2D(i.TEXTURE_2D,pe,Oe,re.width,re.height)}for(let re=0,Z=Ge.length;re<Z;re++)ye=Ge[re],L?de&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,fe,Be,ye):t.texImage2D(i.TEXTURE_2D,re,Oe,fe,Be,ye);v.generateMipmaps=!1}else if(L){if(_e){const re=be(te);t.texStorage2D(i.TEXTURE_2D,pe,Oe,re.width,re.height)}de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Be,te)}else t.texImage2D(i.TEXTURE_2D,0,Oe,fe,Be,te);m(v)&&u($),De.__version=X.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function K(C,v,F){if(v.image.length!==6)return;const $=Ke(C,v),J=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+F);const X=n.get(J);if(J.version!==X.__version||$===!0){t.activeTexture(i.TEXTURE0+F);const De=st.getPrimaries(st.workingColorSpace),xe=v.colorSpace===bi?null:st.getPrimaries(v.colorSpace),Ie=v.colorSpace===bi||De===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Re=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,fe=[];for(let Z=0;Z<6;Z++)!Re&&!te?fe[Z]=g(v.image[Z],!0,r.maxCubemapSize):fe[Z]=te?v.image[Z].image:v.image[Z],fe[Z]=me(v,fe[Z]);const Be=fe[0],Oe=s.convert(v.format,v.colorSpace),ye=s.convert(v.type),Ge=_(v.internalFormat,Oe,ye,v.colorSpace),L=v.isVideoTexture!==!0,_e=X.__version===void 0||$===!0,de=J.dataReady;let pe=w(v,Be);$e(i.TEXTURE_CUBE_MAP,v);let re;if(Re){L&&_e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ge,Be.width,Be.height);for(let Z=0;Z<6;Z++){re=fe[Z].mipmaps;for(let Ae=0;Ae<re.length;Ae++){const Xe=re[Ae];v.format!==Bn?Oe!==null?L?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae,0,0,Xe.width,Xe.height,Oe,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae,Ge,Xe.width,Xe.height,0,Xe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae,0,0,Xe.width,Xe.height,Oe,ye,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae,Ge,Xe.width,Xe.height,0,Oe,ye,Xe.data)}}}else{if(re=v.mipmaps,L&&_e){re.length>0&&pe++;const Z=be(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ge,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(te){L?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,fe[Z].width,fe[Z].height,Oe,ye,fe[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ge,fe[Z].width,fe[Z].height,0,Oe,ye,fe[Z].data);for(let Ae=0;Ae<re.length;Ae++){const gt=re[Ae].image[Z].image;L?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae+1,0,0,gt.width,gt.height,Oe,ye,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae+1,Ge,gt.width,gt.height,0,Oe,ye,gt.data)}}else{L?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Oe,ye,fe[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ge,Oe,ye,fe[Z]);for(let Ae=0;Ae<re.length;Ae++){const Xe=re[Ae];L?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae+1,0,0,Oe,ye,Xe.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae+1,Ge,Oe,ye,Xe.image[Z])}}}m(v)&&u(i.TEXTURE_CUBE_MAP),X.__version=J.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function oe(C,v,F,$,J,X){const De=s.convert(F.format,F.colorSpace),xe=s.convert(F.type),Ie=_(F.internalFormat,De,xe,F.colorSpace),Re=n.get(v),te=n.get(F);if(te.__renderTarget=v,!Re.__hasExternalTextures){const fe=Math.max(1,v.width>>X),Be=Math.max(1,v.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,X,Ie,fe,Be,v.depth,0,De,xe,null):t.texImage2D(J,X,Ie,fe,Be,0,De,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ie(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,te.__webglTexture,0,ue(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,te.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(C,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){const $=v.depthTexture,J=$&&$.isDepthTexture?$.type:null,X=M(v.stencilBuffer,J),De=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=ue(v);ie(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,X,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,C)}else{const $=v.textures;for(let J=0;J<$.length;J++){const X=$[J],De=s.convert(X.format,X.colorSpace),xe=s.convert(X.type),Ie=_(X.internalFormat,De,xe,X.colorSpace),Re=ue(v);F&&ie(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Ie,v.width,v.height):ie(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,Ie,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(C,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const J=$.__webglTexture,X=ue(v);if(v.depthTexture.format===Vs)ie(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===Gs)ie(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function We(C){const v=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=$}if(C.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const $=C.texture.mipmaps;$&&$.length>0?Ee(v.__webglFramebuffer[0],C):Ee(v.__webglFramebuffer,C)}else if(F){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),Le(v.__webglDepthbuffer[$],C,!1);else{const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else{const $=C.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Le(v.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(C,v,F){const $=n.get(C);v!==void 0&&oe($.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&We(C)}function ze(C){const v=C.texture,F=n.get(C),$=n.get(v);C.addEventListener("dispose",P);const J=C.textures,X=C.isWebGLCubeRenderTarget===!0,De=J.length>1;if(De||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[xe]=[];for(let Ie=0;Ie<v.mipmaps.length;Ie++)F.__webglFramebuffer[xe][Ie]=i.createFramebuffer()}else F.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let xe=0;xe<v.mipmaps.length;xe++)F.__webglFramebuffer[xe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(De)for(let xe=0,Ie=J.length;xe<Ie;xe++){const Re=n.get(J[xe]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&ie(C)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let xe=0;xe<J.length;xe++){const Ie=J[xe];F.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[xe]);const Re=s.convert(Ie.format,Ie.colorSpace),te=s.convert(Ie.type),fe=_(Ie.internalFormat,Re,te,Ie.colorSpace,C.isXRRenderTarget===!0),Be=ue(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,fe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,F.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(F.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),$e(i.TEXTURE_CUBE_MAP,v);for(let xe=0;xe<6;xe++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ie=0;Ie<v.mipmaps.length;Ie++)oe(F.__webglFramebuffer[xe][Ie],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ie);else oe(F.__webglFramebuffer[xe],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(v)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let xe=0,Ie=J.length;xe<Ie;xe++){const Re=J[xe],te=n.get(Re);let fe=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,te.__webglTexture),$e(fe,Re),oe(F.__webglFramebuffer,C,Re,i.COLOR_ATTACHMENT0+xe,fe,0),m(Re)&&u(fe)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,$.__webglTexture),$e(xe,v),v.mipmaps&&v.mipmaps.length>0)for(let Ie=0;Ie<v.mipmaps.length;Ie++)oe(F.__webglFramebuffer[Ie],C,v,i.COLOR_ATTACHMENT0,xe,Ie);else oe(F.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,xe,0);m(v)&&u(xe),t.unbindTexture()}C.depthBuffer&&We(C)}function ee(C){const v=C.textures;for(let F=0,$=v.length;F<$;F++){const J=v[F];if(m(J)){const X=b(C),De=n.get(J).__webglTexture;t.bindTexture(X,De),u(X),t.unbindTexture()}}}const A=[],Q=[];function se(C){if(C.samples>0){if(ie(C)===!1){const v=C.textures,F=C.width,$=C.height;let J=i.COLOR_BUFFER_BIT;const X=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(C),xe=v.length>1;if(xe)for(let Re=0;Re<v.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Ie=C.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Re=0;Re<v.length;Re++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const te=n.get(v[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,F,$,0,0,F,$,J,i.NEAREST),c===!0&&(A.length=0,Q.length=0,A.push(i.COLOR_ATTACHMENT0+Re),C.depthBuffer&&C.resolveDepthBuffer===!1&&(A.push(X),Q.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,A))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Re=0;Re<v.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const te=n.get(v[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ue(C){return Math.min(r.maxSamples,C.samples)}function ie(C){const v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Te(C){const v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function me(C,v){const F=C.colorSpace,$=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==Jr&&F!==bi&&(st.getTransfer(F)===ht?($!==Bn||J!==Yn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):St("WebGLTextures: Unsupported texture color space:",F)),v}function be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=k,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=ne,this.setTextureCube=q,this.rebindTextures=ft,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=ie}function fy(i,e){function t(n,r=bi){let s;const a=st.getTransfer(r);if(n===Yn)return i.UNSIGNED_BYTE;if(n===kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ef)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sf)return i.BYTE;if(n===Mf)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===Fl)return i.INT;if(n===Ji)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===is)return i.HALF_FLOAT;if(n===Cf)return i.ALPHA;if(n===Af)return i.RGB;if(n===Bn)return i.RGBA;if(n===Vs)return i.DEPTH_COMPONENT;if(n===Gs)return i.DEPTH_STENCIL;if(n===zl)return i.RED;if(n===Vl)return i.RED_INTEGER;if(n===Gl)return i.RG;if(n===Hl)return i.RG_INTEGER;if(n===Wl)return i.RGBA_INTEGER;if(n===Ua||n===Na||n===Oa||n===Fa)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ua)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ua)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Na)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pc||n===Dc||n===Lc||n===Ic)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ic)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uc||n===Nc||n===Oc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Uc||n===Nc)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Oc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fc||n===kc||n===Bc||n===zc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc||n===$c||n===Yc||n===jc||n===Zc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$c)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kc||n===Jc||n===Qc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Kc)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===el||n===tl||n===nl||n===il)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===el)return s.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const dy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,py=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class my{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Vf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zn({vertexShader:dy,fragmentShader:py,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xy extends rs{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,p=null,x=null;const g=typeof XRWebGLBinding<"u",m=new my,u={},b=t.getContextAttributes();let _=null,M=null;const w=[],T=[],P=new le;let U=null;const S=new hn;S.viewport=new ut;const y=new hn;y.viewport=new ut;const D=[S,y],k=new Nm;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let K=w[j];return K===void 0&&(K=new Wo,w[j]=K),K.getTargetRaySpace()},this.getControllerGrip=function(j){let K=w[j];return K===void 0&&(K=new Wo,w[j]=K),K.getGripSpace()},this.getHand=function(j){let K=w[j];return K===void 0&&(K=new Wo,w[j]=K),K.getHandSpace()};function V(j){const K=T.indexOf(j.inputSource);if(K===-1)return;const oe=w[K];oe!==void 0&&(oe.update(j.inputSource,j.frame,l||a),oe.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",ne);for(let j=0;j<w.length;j++){const K=T[j];K!==null&&(T[j]=null,w[j].disconnect(K))}I=null,B=null,m.reset();for(const j in u)delete u[j];e.setRenderTarget(_),p=null,d=null,f=null,r=null,M=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",W),r.addEventListener("inputsourceschange",ne),b.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(P),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Le=null,Ee=null;b.depth&&(Ee=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=b.stencil?Gs:Vs,Le=b.stencil?zs:Ji);const We={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(We),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Qi(d.textureWidth,d.textureHeight,{format:Bn,type:Yn,depthTexture:new zf(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const oe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Qi(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),nt.setContext(r),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(j){for(let K=0;K<j.removed.length;K++){const oe=j.removed[K],Le=T.indexOf(oe);Le>=0&&(T[Le]=null,w[Le].disconnect(oe))}for(let K=0;K<j.added.length;K++){const oe=j.added[K];let Le=T.indexOf(oe);if(Le===-1){for(let We=0;We<w.length;We++)if(We>=T.length){T.push(oe),Le=We;break}else if(T[We]===null){T[We]=oe,Le=We;break}if(Le===-1)break}const Ee=w[Le];Ee&&Ee.connect(oe)}}const q=new R,ae=new R;function ce(j,K,oe){q.setFromMatrixPosition(K.matrixWorld),ae.setFromMatrixPosition(oe.matrixWorld);const Le=q.distanceTo(ae),Ee=K.projectionMatrix.elements,We=oe.projectionMatrix.elements,ft=Ee[14]/(Ee[10]-1),ze=Ee[14]/(Ee[10]+1),ee=(Ee[9]+1)/Ee[5],A=(Ee[9]-1)/Ee[5],Q=(Ee[8]-1)/Ee[0],se=(We[8]+1)/We[0],ue=ft*Q,ie=ft*se,Te=Le/(-Q+se),me=Te*-Q;if(K.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(me),j.translateZ(Te),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ee[10]===-1)j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const be=ft+Te,C=ze+Te,v=ue-me,F=ie+(Le-me),$=ee*ze/C*be,J=A*ze/C*be;j.projectionMatrix.makePerspective(v,F,$,J,be,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Se(j,K){K===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(K.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let K=j.near,oe=j.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),k.near=y.near=S.near=K,k.far=y.far=S.far=oe,(I!==k.near||B!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,B=k.far),k.layers.mask=j.layers.mask|6,S.layers.mask=k.layers.mask&3,y.layers.mask=k.layers.mask&5;const Le=j.parent,Ee=k.cameras;Se(k,Le);for(let We=0;We<Ee.length;We++)Se(Ee[We],Le);Ee.length===2?ce(k,S,y):k.projectionMatrix.copy(S.projectionMatrix),$e(j,k,Le)};function $e(j,K,oe){oe===null?j.matrix.copy(K.matrixWorld):(j.matrix.copy(oe.matrixWorld),j.matrix.invert(),j.matrix.multiply(K.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ws*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(j){return u[j]};let Ke=null;function et(j,K){if(h=K.getViewerPose(l||a),x=K,h!==null){const oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Le=!1;oe.length!==k.cameras.length&&(k.cameras.length=0,Le=!0);for(let ze=0;ze<oe.length;ze++){const ee=oe[ze];let A=null;if(p!==null)A=p.getViewport(ee);else{const se=f.getViewSubImage(d,ee);A=se.viewport,ze===0&&(e.setRenderTargetTextures(M,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(M))}let Q=D[ze];Q===void 0&&(Q=new hn,Q.layers.enable(ze),Q.viewport=new ut,D[ze]=Q),Q.matrix.fromArray(ee.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ee.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(A.x,A.y,A.width,A.height),ze===0&&(k.matrix.copy(Q.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Le===!0&&k.cameras.push(Q)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){f=n.getBinding();const ze=f.getDepthInformation(oe[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,r.renderState)}if(Ee&&Ee.includes("camera-access")&&g){e.state.unbindTexture(),f=n.getBinding();for(let ze=0;ze<oe.length;ze++){const ee=oe[ze].camera;if(ee){let A=u[ee];A||(A=new Vf,u[ee]=A);const Q=f.getCameraImage(ee);A.sourceTexture=Q}}}}for(let oe=0;oe<w.length;oe++){const Le=T[oe],Ee=w[oe];Le!==null&&Ee!==void 0&&Ee.update(Le,K,l||a)}Ke&&Ke(j,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),x=null}const nt=new Qf;nt.setAnimationLoop(et),this.setAnimationLoop=function(j){Ke=j},this.dispose=function(){}}}const Vi=new It,gy=new tt;function _y(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Nf(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,b,_,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),x(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),g(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,b,_):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===$t&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===$t&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const b=e.get(u),_=b.envMap,M=b.envMapRotation;_&&(m.envMap.value=_,Vi.copy(M),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(gy.makeRotationFromEuler(Vi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,b,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*b,m.scale.value=_*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,b){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===$t&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function g(m,u){const b=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function vy(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,_){const M=_.program;n.uniformBlockBinding(b,M)}function l(b,_){let M=r[b.id];M===void 0&&(x(b),M=h(b),r[b.id]=M,b.addEventListener("dispose",m));const w=_.program;n.updateUBOMapping(b,w);const T=e.render.frame;s[b.id]!==T&&(d(b),s[b.id]=T)}function h(b){const _=f();b.__bindingPointIndex=_;const M=i.createBuffer(),w=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return St("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const _=r[b.id],M=b.uniforms,w=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,P=M.length;T<P;T++){const U=Array.isArray(M[T])?M[T]:[M[T]];for(let S=0,y=U.length;S<y;S++){const D=U[S];if(p(D,T,S,w)===!0){const k=D.__offset,I=Array.isArray(D.value)?D.value:[D.value];let B=0;for(let V=0;V<I.length;V++){const W=I[V],ne=g(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,k+B,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,B),B+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,_,M,w){const T=b.value,P=_+"_"+M;if(w[P]===void 0)return typeof T=="number"||typeof T=="boolean"?w[P]=T:w[P]=T.clone(),!0;{const U=w[P];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return w[P]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function x(b){const _=b.uniforms;let M=0;const w=16;for(let P=0,U=_.length;P<U;P++){const S=Array.isArray(_[P])?_[P]:[_[P]];for(let y=0,D=S.length;y<D;y++){const k=S[y],I=Array.isArray(k.value)?k.value:[k.value];for(let B=0,V=I.length;B<V;B++){const W=I[B],ne=g(W),q=M%w,ae=q%ne.boundary,ce=q+ae;M+=ae,ce!==0&&w-ce<ne.storage&&(M+=w-ce),k.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=ne.storage}}}const T=M%w;return T>0&&(M+=w-T),b.__size=M,b.__cache={},this}function g(b){const _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){const _=b.target;_.removeEventListener("dispose",m);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}const yy=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ri=null;function by(){return ri===null&&(ri=new Bf(yy,32,32,Gl,is),ri.minFilter=Dn,ri.magFilter=Dn,ri.wrapS=oi,ri.wrapT=oi,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}class Sy{constructor(e={}){const{canvas:t=ip(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const x=new Set([Wl,Hl,Vl]),g=new Set([Yn,Ji,Bs,zs,kl,Bl]),m=new Uint32Array(4),u=new Int32Array(4);let b=null,_=null;const M=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let P=!1;this._outputColorSpace=kt;let U=0,S=0,y=null,D=-1,k=null;const I=new ut,B=new ut;let V=null;const W=new He(0);let ne=0,q=t.width,ae=t.height,ce=1,Se=null,$e=null;const Ke=new ut(0,0,q,ae),et=new ut(0,0,q,ae);let nt=!1;const j=new Zl;let K=!1,oe=!1;const Le=new tt,Ee=new R,We=new ut,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function ee(){return y===null?ce:1}let A=n;function Q(E,N){return t.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nl}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),A===null){const N="webgl2";if(A=Q(N,E),A===null)throw Q(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw E("WebGLRenderer: "+E.message),E}let se,ue,ie,Te,me,be,C,v,F,$,J,X,De,xe,Ie,Re,te,fe,Be,Oe,ye,Ge,L,_e;function de(){se=new P_(A),se.init(),Ge=new fy(A,se),ue=new b_(A,se,e,Ge),ie=new hy(A,se),ue.reversedDepthBuffer&&d&&ie.buffers.depth.setReversed(!0),Te=new I_(A),me=new Kv,be=new uy(A,se,ie,me,ue,Ge,Te),C=new M_(T),v=new R_(T),F=new Fm(A),L=new v_(A,F),$=new D_(A,F,Te,L),J=new N_(A,$,F,Te),Be=new U_(A,ue,be),Re=new S_(me),X=new Zv(T,C,v,se,ue,L,Re),De=new _y(T,me),xe=new Qv,Ie=new sy(se),fe=new __(T,C,v,ie,J,p,c),te=new cy(T,J,ue),_e=new vy(A,Te,ue,ie),Oe=new y_(A,se,Te),ye=new L_(A,se,Te),Te.programs=X.programs,T.capabilities=ue,T.extensions=se,T.properties=me,T.renderLists=xe,T.shadowMap=te,T.state=ie,T.info=Te}de();const pe=new xy(T,A);this.xr=pe,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(E){E!==void 0&&(ce=E,this.setSize(q,ae,!1))},this.getSize=function(E){return E.set(q,ae)},this.setSize=function(E,N,G=!0){if(pe.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,ae=N,t.width=Math.floor(E*ce),t.height=Math.floor(N*ce),G===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(q*ce,ae*ce).floor()},this.setDrawingBufferSize=function(E,N,G){q=E,ae=N,ce=G,t.width=Math.floor(E*G),t.height=Math.floor(N*G),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(Ke)},this.setViewport=function(E,N,G,H){E.isVector4?Ke.set(E.x,E.y,E.z,E.w):Ke.set(E,N,G,H),ie.viewport(I.copy(Ke).multiplyScalar(ce).round())},this.getScissor=function(E){return E.copy(et)},this.setScissor=function(E,N,G,H){E.isVector4?et.set(E.x,E.y,E.z,E.w):et.set(E,N,G,H),ie.scissor(B.copy(et).multiplyScalar(ce).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(E){ie.setScissorTest(nt=E)},this.setOpaqueSort=function(E){Se=E},this.setTransparentSort=function(E){$e=E},this.getClearColor=function(E){return E.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,G=!0){let H=0;if(E){let O=!1;if(y!==null){const he=y.texture.format;O=x.has(he)}if(O){const he=y.texture.type,ve=g.has(he),we=fe.getClearColor(),Me=fe.getClearAlpha(),ke=we.r,Ve=we.g,Ue=we.b;ve?(m[0]=ke,m[1]=Ve,m[2]=Ue,m[3]=Me,A.clearBufferuiv(A.COLOR,0,m)):(u[0]=ke,u[1]=Ve,u[2]=Ue,u[3]=Me,A.clearBufferiv(A.COLOR,0,u))}else H|=A.COLOR_BUFFER_BIT}N&&(H|=A.DEPTH_BUFFER_BIT),G&&(H|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),fe.dispose(),xe.dispose(),Ie.dispose(),me.dispose(),C.dispose(),v.dispose(),J.dispose(),L.dispose(),_e.dispose(),X.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Sh),pe.removeEventListener("sessionend",Mh),Ui.stop()};function re(E){E.preventDefault(),Za("WebGLRenderer: Context Lost."),P=!0}function Z(){Za("WebGLRenderer: Context Restored."),P=!1;const E=Te.autoReset,N=te.enabled,G=te.autoUpdate,H=te.needsUpdate,O=te.type;de(),Te.autoReset=E,te.enabled=N,te.autoUpdate=G,te.needsUpdate=H,te.type=O}function Ae(E){St("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xe(E){const N=E.target;N.removeEventListener("dispose",Xe),gt(N)}function gt(E){ct(E),me.remove(E)}function ct(E){const N=me.get(E).programs;N!==void 0&&(N.forEach(function(G){X.releaseProgram(G)}),E.isShaderMaterial&&X.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,G,H,O,he){N===null&&(N=ft);const ve=O.isMesh&&O.matrixWorld.determinant()<0,we=u0(E,N,G,H,O);ie.setMaterial(H,ve);let Me=G.index,ke=1;if(H.wireframe===!0){if(Me=$.getWireframeAttribute(G),Me===void 0)return;ke=2}const Ve=G.drawRange,Ue=G.attributes.position;let Je=Ve.start*ke,lt=(Ve.start+Ve.count)*ke;he!==null&&(Je=Math.max(Je,he.start*ke),lt=Math.min(lt,(he.start+he.count)*ke)),Me!==null?(Je=Math.max(Je,0),lt=Math.min(lt,Me.count)):Ue!=null&&(Je=Math.max(Je,0),lt=Math.min(lt,Ue.count));const Tt=lt-Je;if(Tt<0||Tt===1/0)return;L.setup(O,H,we,G,Me);let Ct,dt=Oe;if(Me!==null&&(Ct=F.get(Me),dt=ye,dt.setIndex(Ct)),O.isMesh)H.wireframe===!0?(ie.setLineWidth(H.wireframeLinewidth*ee()),dt.setMode(A.LINES)):dt.setMode(A.TRIANGLES);else if(O.isLine){let Ne=H.linewidth;Ne===void 0&&(Ne=1),ie.setLineWidth(Ne*ee()),O.isLineSegments?dt.setMode(A.LINES):O.isLineLoop?dt.setMode(A.LINE_LOOP):dt.setMode(A.LINE_STRIP)}else O.isPoints?dt.setMode(A.POINTS):O.isSprite&&dt.setMode(A.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Hs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))dt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ne=O._multiDrawStarts,yt=O._multiDrawCounts,it=O._multiDrawCount,pn=Me?F.get(Me).bytesPerElement:1,hr=me.get(H).currentProgram.getUniforms();for(let mn=0;mn<it;mn++)hr.setValue(A,"_gl_DrawID",mn),dt.render(Ne[mn]/pn,yt[mn])}else if(O.isInstancedMesh)dt.renderInstances(Je,Tt,O.count);else if(G.isInstancedBufferGeometry){const Ne=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,yt=Math.min(G.instanceCount,Ne);dt.renderInstances(Je,Tt,yt)}else dt.render(Je,Tt)};function Vn(E,N,G){E.transparent===!0&&E.side===Hn&&E.forceSinglePass===!1?(E.side=$t,E.needsUpdate=!0,ta(E,N,G),E.side=Di,E.needsUpdate=!0,ta(E,N,G),E.side=Hn):ta(E,N,G)}this.compile=function(E,N,G=null){G===null&&(G=E),_=Ie.get(G),_.init(N),w.push(_),G.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),E!==G&&E.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),_.setupLights();const H=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const he=O.material;if(he)if(Array.isArray(he))for(let ve=0;ve<he.length;ve++){const we=he[ve];Vn(we,G,O),H.add(we)}else Vn(he,G,O),H.add(he)}),_=w.pop(),H},this.compileAsync=function(E,N,G=null){const H=this.compile(E,N,G);return new Promise(O=>{function he(){if(H.forEach(function(ve){me.get(ve).currentProgram.isReady()&&H.delete(ve)}),H.size===0){O(E);return}setTimeout(he,10)}se.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ln=null;function h0(E){Ln&&Ln(E)}function Sh(){Ui.stop()}function Mh(){Ui.start()}const Ui=new Qf;Ui.setAnimationLoop(h0),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(E){Ln=E,pe.setAnimationLoop(E),E===null?Ui.stop():Ui.start()},pe.addEventListener("sessionstart",Sh),pe.addEventListener("sessionend",Mh),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){St("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(N),N=pe.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,N,y),_=Ie.get(E,w.length),_.init(N),w.push(_),Le.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(Le,Xn,N.reversedDepth),oe=this.localClippingEnabled,K=Re.init(this.clippingPlanes,oe),b=xe.get(E,M.length),b.init(),M.push(b),pe.enabled===!0&&pe.isPresenting===!0){const he=T.xr.getDepthSensingMesh();he!==null&&yo(he,N,-1/0,T.sortObjects)}yo(E,N,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(Se,$e),ze=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,ze&&fe.addToRenderList(b,E),this.info.render.frame++,K===!0&&Re.beginShadows();const G=_.state.shadowsArray;te.render(G,E,N),K===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=b.opaque,O=b.transmissive;if(_.setupLights(),N.isArrayCamera){const he=N.cameras;if(O.length>0)for(let ve=0,we=he.length;ve<we;ve++){const Me=he[ve];Th(H,O,E,Me)}ze&&fe.render(E);for(let ve=0,we=he.length;ve<we;ve++){const Me=he[ve];Eh(b,E,Me,Me.viewport)}}else O.length>0&&Th(H,O,E,N),ze&&fe.render(E),Eh(b,E,N);y!==null&&S===0&&(be.updateMultisampleRenderTarget(y),be.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(T,E,N),L.resetDefaultState(),D=-1,k=null,w.pop(),w.length>0?(_=w[w.length-1],K===!0&&Re.setGlobalState(T.clippingPlanes,_.state.camera)):_=null,M.pop(),M.length>0?b=M[M.length-1]:b=null};function yo(E,N,G,H){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)_.pushLight(E),E.castShadow&&_.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){H&&We.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Le);const ve=J.update(E),we=E.material;we.visible&&b.push(E,ve,we,G,We.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const ve=J.update(E),we=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),We.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),We.copy(ve.boundingSphere.center)),We.applyMatrix4(E.matrixWorld).applyMatrix4(Le)),Array.isArray(we)){const Me=ve.groups;for(let ke=0,Ve=Me.length;ke<Ve;ke++){const Ue=Me[ke],Je=we[Ue.materialIndex];Je&&Je.visible&&b.push(E,ve,Je,G,We.z,Ue)}}else we.visible&&b.push(E,ve,we,G,We.z,null)}}const he=E.children;for(let ve=0,we=he.length;ve<we;ve++)yo(he[ve],N,G,H)}function Eh(E,N,G,H){const{opaque:O,transmissive:he,transparent:ve}=E;_.setupLightsView(G),K===!0&&Re.setGlobalState(T.clippingPlanes,G),H&&ie.viewport(I.copy(H)),O.length>0&&ea(O,N,G),he.length>0&&ea(he,N,G),ve.length>0&&ea(ve,N,G),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Th(E,N,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[H.id]===void 0&&(_.state.transmissionRenderTarget[H.id]=new Qi(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?is:Yn,minFilter:Si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const he=_.state.transmissionRenderTarget[H.id],ve=H.viewport||I;he.setSize(ve.z*T.transmissionResolutionScale,ve.w*T.transmissionResolutionScale);const we=T.getRenderTarget(),Me=T.getActiveCubeFace(),ke=T.getActiveMipmapLevel();T.setRenderTarget(he),T.getClearColor(W),ne=T.getClearAlpha(),ne<1&&T.setClearColor(16777215,.5),T.clear(),ze&&fe.render(G);const Ve=T.toneMapping;T.toneMapping=Ci;const Ue=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),_.setupLightsView(H),K===!0&&Re.setGlobalState(T.clippingPlanes,H),ea(E,G,H),be.updateMultisampleRenderTarget(he),be.updateRenderTargetMipmap(he),se.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let lt=0,Tt=N.length;lt<Tt;lt++){const Ct=N[lt],{object:dt,geometry:Ne,material:yt,group:it}=Ct;if(yt.side===Hn&&dt.layers.test(H.layers)){const pn=yt.side;yt.side=$t,yt.needsUpdate=!0,Ch(dt,G,H,Ne,yt,it),yt.side=pn,yt.needsUpdate=!0,Je=!0}}Je===!0&&(be.updateMultisampleRenderTarget(he),be.updateRenderTargetMipmap(he))}T.setRenderTarget(we,Me,ke),T.setClearColor(W,ne),Ue!==void 0&&(H.viewport=Ue),T.toneMapping=Ve}function ea(E,N,G){const H=N.isScene===!0?N.overrideMaterial:null;for(let O=0,he=E.length;O<he;O++){const ve=E[O],{object:we,geometry:Me,group:ke}=ve;let Ve=ve.material;Ve.allowOverride===!0&&H!==null&&(Ve=H),we.layers.test(G.layers)&&Ch(we,N,G,Me,Ve,ke)}}function Ch(E,N,G,H,O,he){E.onBeforeRender(T,N,G,H,O,he),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(T,N,G,H,E,he),O.transparent===!0&&O.side===Hn&&O.forceSinglePass===!1?(O.side=$t,O.needsUpdate=!0,T.renderBufferDirect(G,N,H,O,E,he),O.side=Di,O.needsUpdate=!0,T.renderBufferDirect(G,N,H,O,E,he),O.side=Hn):T.renderBufferDirect(G,N,H,O,E,he),E.onAfterRender(T,N,G,H,O,he)}function ta(E,N,G){N.isScene!==!0&&(N=ft);const H=me.get(E),O=_.state.lights,he=_.state.shadowsArray,ve=O.state.version,we=X.getParameters(E,O.state,he,N,G),Me=X.getProgramCacheKey(we);let ke=H.programs;H.environment=E.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(E.isMeshStandardMaterial?v:C).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",Xe),ke=new Map,H.programs=ke);let Ve=ke.get(Me);if(Ve!==void 0){if(H.currentProgram===Ve&&H.lightsStateVersion===ve)return wh(E,we),Ve}else we.uniforms=X.getUniforms(E),E.onBeforeCompile(we,T),Ve=X.acquireProgram(we,Me),ke.set(Me,Ve),H.uniforms=we.uniforms;const Ue=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=Re.uniform),wh(E,we),H.needsLights=d0(E),H.lightsStateVersion=ve,H.needsLights&&(Ue.ambientLightColor.value=O.state.ambient,Ue.lightProbe.value=O.state.probe,Ue.directionalLights.value=O.state.directional,Ue.directionalLightShadows.value=O.state.directionalShadow,Ue.spotLights.value=O.state.spot,Ue.spotLightShadows.value=O.state.spotShadow,Ue.rectAreaLights.value=O.state.rectArea,Ue.ltc_1.value=O.state.rectAreaLTC1,Ue.ltc_2.value=O.state.rectAreaLTC2,Ue.pointLights.value=O.state.point,Ue.pointLightShadows.value=O.state.pointShadow,Ue.hemisphereLights.value=O.state.hemi,Ue.directionalShadowMap.value=O.state.directionalShadowMap,Ue.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ue.spotShadowMap.value=O.state.spotShadowMap,Ue.spotLightMatrix.value=O.state.spotLightMatrix,Ue.spotLightMap.value=O.state.spotLightMap,Ue.pointShadowMap.value=O.state.pointShadowMap,Ue.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Ve,H.uniformsList=null,Ve}function Ah(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Ba.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function wh(E,N){const G=me.get(E);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function u0(E,N,G,H,O){N.isScene!==!0&&(N=ft),be.resetTextureUnits();const he=N.fog,ve=H.isMeshStandardMaterial?N.environment:null,we=y===null?T.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Jr,Me=(H.isMeshStandardMaterial?v:C).get(H.envMap||ve),ke=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ve=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ue=!!G.morphAttributes.position,Je=!!G.morphAttributes.normal,lt=!!G.morphAttributes.color;let Tt=Ci;H.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Tt=T.toneMapping);const Ct=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,dt=Ct!==void 0?Ct.length:0,Ne=me.get(H),yt=_.state.lights;if(K===!0&&(oe===!0||E!==k)){const Jt=E===k&&H.id===D;Re.setState(H,E,Jt)}let it=!1;H.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==yt.state.version||Ne.outputColorSpace!==we||O.isBatchedMesh&&Ne.batching===!1||!O.isBatchedMesh&&Ne.batching===!0||O.isBatchedMesh&&Ne.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ne.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ne.instancing===!1||!O.isInstancedMesh&&Ne.instancing===!0||O.isSkinnedMesh&&Ne.skinning===!1||!O.isSkinnedMesh&&Ne.skinning===!0||O.isInstancedMesh&&Ne.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ne.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ne.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ne.instancingMorph===!1&&O.morphTexture!==null||Ne.envMap!==Me||H.fog===!0&&Ne.fog!==he||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Re.numPlanes||Ne.numIntersection!==Re.numIntersection)||Ne.vertexAlphas!==ke||Ne.vertexTangents!==Ve||Ne.morphTargets!==Ue||Ne.morphNormals!==Je||Ne.morphColors!==lt||Ne.toneMapping!==Tt||Ne.morphTargetsCount!==dt)&&(it=!0):(it=!0,Ne.__version=H.version);let pn=Ne.currentProgram;it===!0&&(pn=ta(H,N,O));let hr=!1,mn=!1,cs=!1;const bt=pn.getUniforms(),on=Ne.uniforms;if(ie.useProgram(pn.program)&&(hr=!0,mn=!0,cs=!0),H.id!==D&&(D=H.id,mn=!0),hr||k!==E){ie.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),bt.setValue(A,"projectionMatrix",E.projectionMatrix),bt.setValue(A,"viewMatrix",E.matrixWorldInverse);const cn=bt.map.cameraPosition;cn!==void 0&&cn.setValue(A,Ee.setFromMatrixPosition(E.matrixWorld)),ue.logarithmicDepthBuffer&&bt.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&bt.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),k!==E&&(k=E,mn=!0,cs=!0)}if(O.isSkinnedMesh){bt.setOptional(A,O,"bindMatrix"),bt.setOptional(A,O,"bindMatrixInverse");const Jt=O.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),bt.setValue(A,"boneTexture",Jt.boneTexture,be))}O.isBatchedMesh&&(bt.setOptional(A,O,"batchingTexture"),bt.setValue(A,"batchingTexture",O._matricesTexture,be),bt.setOptional(A,O,"batchingIdTexture"),bt.setValue(A,"batchingIdTexture",O._indirectTexture,be),bt.setOptional(A,O,"batchingColorTexture"),O._colorsTexture!==null&&bt.setValue(A,"batchingColorTexture",O._colorsTexture,be));const An=G.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&Be.update(O,G,pn),(mn||Ne.receiveShadow!==O.receiveShadow)&&(Ne.receiveShadow=O.receiveShadow,bt.setValue(A,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(on.envMap.value=Me,on.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(on.envMapIntensity.value=N.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=by()),mn&&(bt.setValue(A,"toneMappingExposure",T.toneMappingExposure),Ne.needsLights&&f0(on,cs),he&&H.fog===!0&&De.refreshFogUniforms(on,he),De.refreshMaterialUniforms(on,H,ce,ae,_.state.transmissionRenderTarget[E.id]),Ba.upload(A,Ah(Ne),on,be)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ba.upload(A,Ah(Ne),on,be),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&bt.setValue(A,"center",O.center),bt.setValue(A,"modelViewMatrix",O.modelViewMatrix),bt.setValue(A,"normalMatrix",O.normalMatrix),bt.setValue(A,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Jt=H.uniformsGroups;for(let cn=0,bo=Jt.length;cn<bo;cn++){const Ni=Jt[cn];_e.update(Ni,pn),_e.bind(Ni,pn)}}return pn}function f0(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function d0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,N,G){const H=me.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),me.get(E.texture).__webglTexture=N,me.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:G,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const G=me.get(E);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const p0=A.createFramebuffer();this.setRenderTarget=function(E,N=0,G=0){y=E,U=N,S=G;let H=!0,O=null,he=!1,ve=!1;if(E){const Me=me.get(E);if(Me.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(A.FRAMEBUFFER,null),H=!1;else if(Me.__webglFramebuffer===void 0)be.setupRenderTarget(E);else if(Me.__hasExternalTextures)be.rebindTextures(E,me.get(E.texture).__webglTexture,me.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ue=E.depthTexture;if(Me.__boundDepthTexture!==Ue){if(Ue!==null&&me.has(Ue)&&(E.width!==Ue.image.width||E.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(E)}}const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ve=!0);const Ve=me.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ve[N])?O=Ve[N][G]:O=Ve[N],he=!0):E.samples>0&&be.useMultisampledRTT(E)===!1?O=me.get(E).__webglMultisampledFramebuffer:Array.isArray(Ve)?O=Ve[G]:O=Ve,I.copy(E.viewport),B.copy(E.scissor),V=E.scissorTest}else I.copy(Ke).multiplyScalar(ce).floor(),B.copy(et).multiplyScalar(ce).floor(),V=nt;if(G!==0&&(O=p0),ie.bindFramebuffer(A.FRAMEBUFFER,O)&&H&&ie.drawBuffers(E,O),ie.viewport(I),ie.scissor(B),ie.setScissorTest(V),he){const Me=me.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+N,Me.__webglTexture,G)}else if(ve){const Me=N;for(let ke=0;ke<E.textures.length;ke++){const Ve=me.get(E.textures[ke]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+ke,Ve.__webglTexture,G,Me)}}else if(E!==null&&G!==0){const Me=me.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Me.__webglTexture,G)}D=-1},this.readRenderTargetPixels=function(E,N,G,H,O,he,ve,we=0){if(!(E&&E.isWebGLRenderTarget)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){ie.bindFramebuffer(A.FRAMEBUFFER,Me);try{const ke=E.textures[we],Ve=ke.format,Ue=ke.type;if(!ue.textureFormatReadable(Ve)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Ue)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-H&&G>=0&&G<=E.height-O&&(E.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+we),A.readPixels(N,G,H,O,Ge.convert(Ve),Ge.convert(Ue),he))}finally{const ke=y!==null?me.get(y).__webglFramebuffer:null;ie.bindFramebuffer(A.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,N,G,H,O,he,ve,we=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me)if(N>=0&&N<=E.width-H&&G>=0&&G<=E.height-O){ie.bindFramebuffer(A.FRAMEBUFFER,Me);const ke=E.textures[we],Ve=ke.format,Ue=ke.type;if(!ue.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Je),A.bufferData(A.PIXEL_PACK_BUFFER,he.byteLength,A.STREAM_READ),E.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+we),A.readPixels(N,G,H,O,Ge.convert(Ve),Ge.convert(Ue),0);const lt=y!==null?me.get(y).__webglFramebuffer:null;ie.bindFramebuffer(A.FRAMEBUFFER,lt);const Tt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await rp(A,Tt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Je),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,he),A.deleteBuffer(Je),A.deleteSync(Tt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,G=0){const H=Math.pow(2,-G),O=Math.floor(E.image.width*H),he=Math.floor(E.image.height*H),ve=N!==null?N.x:0,we=N!==null?N.y:0;be.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,G,0,0,ve,we,O,he),ie.unbindTexture()};const m0=A.createFramebuffer(),x0=A.createFramebuffer();this.copyTextureToTexture=function(E,N,G=null,H=null,O=0,he=null){he===null&&(O!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=O,O=0):he=0);let ve,we,Me,ke,Ve,Ue,Je,lt,Tt;const Ct=E.isCompressedTexture?E.mipmaps[he]:E.image;if(G!==null)ve=G.max.x-G.min.x,we=G.max.y-G.min.y,Me=G.isBox3?G.max.z-G.min.z:1,ke=G.min.x,Ve=G.min.y,Ue=G.isBox3?G.min.z:0;else{const An=Math.pow(2,-O);ve=Math.floor(Ct.width*An),we=Math.floor(Ct.height*An),E.isDataArrayTexture?Me=Ct.depth:E.isData3DTexture?Me=Math.floor(Ct.depth*An):Me=1,ke=0,Ve=0,Ue=0}H!==null?(Je=H.x,lt=H.y,Tt=H.z):(Je=0,lt=0,Tt=0);const dt=Ge.convert(N.format),Ne=Ge.convert(N.type);let yt;N.isData3DTexture?(be.setTexture3D(N,0),yt=A.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(be.setTexture2DArray(N,0),yt=A.TEXTURE_2D_ARRAY):(be.setTexture2D(N,0),yt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,N.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,N.unpackAlignment);const it=A.getParameter(A.UNPACK_ROW_LENGTH),pn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),hr=A.getParameter(A.UNPACK_SKIP_PIXELS),mn=A.getParameter(A.UNPACK_SKIP_ROWS),cs=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ct.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ct.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ke),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ve),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ue);const bt=E.isDataArrayTexture||E.isData3DTexture,on=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const An=me.get(E),Jt=me.get(N),cn=me.get(An.__renderTarget),bo=me.get(Jt.__renderTarget);ie.bindFramebuffer(A.READ_FRAMEBUFFER,cn.__webglFramebuffer),ie.bindFramebuffer(A.DRAW_FRAMEBUFFER,bo.__webglFramebuffer);for(let Ni=0;Ni<Me;Ni++)bt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,me.get(E).__webglTexture,O,Ue+Ni),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,me.get(N).__webglTexture,he,Tt+Ni)),A.blitFramebuffer(ke,Ve,ve,we,Je,lt,ve,we,A.DEPTH_BUFFER_BIT,A.NEAREST);ie.bindFramebuffer(A.READ_FRAMEBUFFER,null),ie.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||me.has(E)){const An=me.get(E),Jt=me.get(N);ie.bindFramebuffer(A.READ_FRAMEBUFFER,m0),ie.bindFramebuffer(A.DRAW_FRAMEBUFFER,x0);for(let cn=0;cn<Me;cn++)bt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,An.__webglTexture,O,Ue+cn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,An.__webglTexture,O),on?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Jt.__webglTexture,he,Tt+cn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Jt.__webglTexture,he),O!==0?A.blitFramebuffer(ke,Ve,ve,we,Je,lt,ve,we,A.COLOR_BUFFER_BIT,A.NEAREST):on?A.copyTexSubImage3D(yt,he,Je,lt,Tt+cn,ke,Ve,ve,we):A.copyTexSubImage2D(yt,he,Je,lt,ke,Ve,ve,we);ie.bindFramebuffer(A.READ_FRAMEBUFFER,null),ie.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else on?E.isDataTexture||E.isData3DTexture?A.texSubImage3D(yt,he,Je,lt,Tt,ve,we,Me,dt,Ne,Ct.data):N.isCompressedArrayTexture?A.compressedTexSubImage3D(yt,he,Je,lt,Tt,ve,we,Me,dt,Ct.data):A.texSubImage3D(yt,he,Je,lt,Tt,ve,we,Me,dt,Ne,Ct):E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,he,Je,lt,ve,we,dt,Ne,Ct.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,he,Je,lt,Ct.width,Ct.height,dt,Ct.data):A.texSubImage2D(A.TEXTURE_2D,he,Je,lt,ve,we,dt,Ne,Ct);A.pixelStorei(A.UNPACK_ROW_LENGTH,it),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,pn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,hr),A.pixelStorei(A.UNPACK_SKIP_ROWS,mn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,cs),he===0&&N.generateMipmaps&&A.generateMipmap(yt),ie.unbindTexture()},this.initRenderTarget=function(E){me.get(E).__webglFramebuffer===void 0&&be.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?be.setTextureCube(E,0):E.isData3DTexture?be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?be.setTexture2DArray(E,0):be.setTexture2D(E,0),ie.unbindTexture()},this.resetState=function(){U=0,S=0,y=null,ie.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}function lo(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new Kt;let l=0;for(let h=0;h<i.length;++h){const f=i[h];let d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0;const f=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let x=0;x<p.count;++x)f.push(p.getX(x)+h);h+=i[d].attributes.position.count}c.setIndex(f)}for(const h in s){const f=Iu(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){const p=[];for(let g=0;g<a[h].length;++g)p.push(a[h][g][d]);const x=Iu(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function Iu(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new nn(a,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const f=c/t;for(let d=0,p=h.count;d<p;d++)for(let x=0;x<t;x++){const g=h.getComponent(d,x);o.setComponent(d+f,x,g)}}else a.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}const Hr=1/60,zr=44,zt={radius:.36,height:1.8,crouch:1.15,eye:.17,step:.55,airStep:.34},wt={gravity:25,jump:8.6,walk:8.6,sprint:11.4,crouch:4.4,aim:6.2,accel:12,airAccel:14,airCap:1.15,friction:6.2,stopSpeed:3.2,slideTime:.8,slideBoost:4.2,slideFriction:.7,slideMin:6.6,slideCooldown:.45,slideCap:17,maxSpeed:20},zn=[{id:"rifle",name:"VX-7 CARBINE",caliber:"5.56",mag:30,reserve:120,interval:.1,auto:!0,reload:2.1,damage:{head:68,body:27,legs:21},range:160,spread:{hip:.026,ads:.0012,move:.0024,air:.055},bloom:.0055,bloomMax:.028,bloomRecover:.09,kick:.0105,adsZoom:1.45,adsSens:.62},{id:"pistol",name:"P-11 SIDEARM",caliber:"9MM",mag:12,reserve:48,interval:.15,auto:!1,reload:1.45,damage:{head:58,body:24,legs:18},range:100,spread:{hip:.018,ads:.0025,move:.0016,air:.04},bloom:.009,bloomMax:.03,bloomRecover:.12,kick:.017,adsZoom:1.2,adsSens:.8},{id:"knife",name:"KX-3 KNIFE",caliber:"MELEE",melee:!0,mag:0,reserve:0,interval:.55,auto:!0,reload:0,damage:{head:75,body:55,legs:45},range:2.1,spread:{hip:0,ads:0,move:0,air:0},bloom:0,bloomMax:0,bloomRecover:1,kick:0,adsZoom:1,adsSens:1}],rd=zn.length,ic=.22,mt=(i,e,t)=>Math.max(e,Math.min(t,i)),ts=[],as=[],sd=[],My=[],dl=[],Ey={n:"s",s:"n",e:"w",w:"e"};function Ai(i,e,t,n,r,s,a="block"){const o={x:i,y:e,z:t,w:n,h:r,d:s,kind:a,id:ts.length};return ts.push(o),o}const un=(i,e,t,n,r,s,a=0)=>Ai(i,a+r/2,e,t,r,n,s),Ty=i=>{i(1),i(-1)};function ad(i,e,t,n,r,s,a=.9,o=.3){const c={n:{axis:"x",fixed:e-n/2+o/2,from:i-t/2,to:i+t/2,center:i},s:{axis:"x",fixed:e+n/2-o/2,from:i-t/2,to:i+t/2,center:i},w:{axis:"z",fixed:i-t/2+o/2,from:e-n/2+o,to:e+n/2-o,center:e},e:{axis:"z",fixed:i+t/2-o/2,from:e-n/2+o,to:e+n/2-o,center:e}};for(const[l,h]of Object.entries(c)){const f=s.filter(x=>x.side===l).map(x=>[h.center+x.offset-x.width/2,h.center+x.offset+x.width/2]).sort((x,g)=>x[0]-g[0]);let d=h.from;const p=(x,g)=>{g-x<.05||(h.axis==="x"?Ai((x+g)/2,r+a/2,h.fixed,g-x,a,o,"parapet"):Ai(h.fixed,r+a/2,(x+g)/2,o,a,g-x,"parapet"))};for(const[x,g]of f)p(d,x),d=g;p(d,h.to)}}const pl=(i,e)=>e.map(t=>i>0?t:{...t,side:Ey[t.side],offset:-t.offset});function Uu(i,e,t,n,r,s,{doors:a=[],gaps:o=[],t:c=.6,parapet:l=.9}={}){e*=i,t*=i,a=pl(i,a),o=pl(i,o);const h={n:{axis:"x",fixed:t-r/2+c/2,from:e-n/2,to:e+n/2,center:e},s:{axis:"x",fixed:t+r/2-c/2,from:e-n/2,to:e+n/2,center:e},w:{axis:"z",fixed:e-n/2+c/2,from:t-r/2+c,to:t+r/2-c,center:t},e:{axis:"z",fixed:e+n/2-c/2,from:t-r/2+c,to:t+r/2-c,center:t}};for(const[f,d]of Object.entries(h)){const p=a.filter(m=>m.side===f).map(m=>({a:d.center+m.offset-m.width/2,b:d.center+m.offset+m.width/2,h:m.height||2.7})).sort((m,u)=>m.a-u.a),x=(m,u,b,_)=>{u-m<.02||_-b<.02||(d.axis==="x"?Ai((m+u)/2,(b+_)/2,d.fixed,u-m,_-b,c,b>0?"lintel":"wall"):Ai(d.fixed,(b+_)/2,(m+u)/2,c,_-b,u-m,b>0?"lintel":"wall"))};let g=d.from;for(const m of p)x(g,m.a,0,s),x(m.a,m.b,m.h,s),g=m.b;x(g,d.to,0,s)}Ai(e,s+.2,t,n,.4,r,"roof"),l&&ad(e,t,n,r,s+.4,o,l)}function Cy(i,e,t,n,r,s,a=[]){e*=i,t*=i,un(e,t,n,r,s,"block"),ad(e,t,n,r,s,pl(i,a))}function Ay(i,e,t,n,r,s,a,o=.4,c=.6){for(let l=0;l<a;l++){const h=(l+1)*o;un(i*(e+n*(l+.5)*c),i*(t+r*(l+.5)*c),c,s,h,"stair")}}function wy(i,e,t,n,r,s,a,o){as.push({x:i*e,z:i*t,w:n,d:r,h:s,axis:a,sign:o*i})}const At=(i,e,t,n=1.3,r=0)=>un(i*e,i*t,n,n,n,"crate",r),Pr=(i,e,t,n,r)=>un(i*e,i*t,n,r,1.1,"barrier"),rc=(i,e,t,n,r=0)=>un(i*e,i*t,n==="x"?6.1:2.5,n==="x"?2.5:6.1,2.6,"container",r),ys=(i,e,t)=>un(i*e,i*t,.75,.75,1.05,"barrel"),Dr=(i,e,t,n)=>sd.push([i*e,t,i*n]),Ry=(i,e,t)=>My.push([i*e,i*t]),As=(i,e,t,n)=>dl.push({id:dl.length,x:i*e,y:t,z:i*n});for(const i of[-45,45])un(0,i,92,2,9,"perimeter");for(const i of[-45,45])un(i,0,2,88,9,"perimeter");un(0,0,7.8,2.5,2.6,"container",2.6);As(1,0,0,0);Ty(i=>{Uu(i,-30,-34,20,14,5.2,{doors:[{side:"s",offset:6,width:2.8},{side:"e",offset:2.2,width:2.8},{side:"w",offset:3,width:2.2},{side:"n",offset:-4,width:2.2}],gaps:[{side:"s",offset:-1.2,width:2.6},{side:"e",offset:-2,width:2.8}]}),Ay(i,-39,-25.8,1,0,2.4,14),At(i,-36.6,-38.6,1.4),At(i,-35.1,-38.9,1.2),At(i,-36.6,-38.6,1,1.4),un(i*-28.5,i*-36.5,4,.6,1.1,"barrier"),At(i,-23.6,-38.4,1.3),At(i,-26,-30.2,1.2),ys(i,-38.8,-29.2),ys(i,-38,-28.6),Cy(i,31,-34,12,14,5.6,[{side:"s",offset:0,width:4.6},{side:"w",offset:-2,width:2.8}]),wy(i,31,-19,4.4,16,5.6,"z",-1),un(i*33.6,i*-38.6,2.4,1.8,1.2,"metal",5.6),un(i*27.4,i*-39.4,1.4,1.2,.8,"metal",5.6),Ai(i*2.5,5.45,i*-36,45,.3,2.6,"catwalk");for(const e of[-37.25,-34.75])Ai(i*2.5,6.05,i*e,45,.9,.1,"rail");for(const e of[-9,2.5,14])un(i*e,i*-36,.5,.5,5.3,"steel");un(i*-4,i*-39.5,8,4,2.8,"block"),At(i,1.2,-38.6,1.3),rc(i,12,-41.5,"x"),Pr(i,-10,-30,4,.7),Pr(i,16,-30,.7,4),At(i,8,-31,1.4),At(i,9.4,-30.6,1.1),Uu(i,-12,-16,9,8,3.2,{doors:[{side:"s",offset:1.5,width:2.2},{side:"e",offset:0,width:2.2},{side:"n",offset:-2,width:2.2}],gaps:[{side:"w",offset:2,width:2.4}],parapet:.6}),At(i,-17.4,-12.8,1.2),At(i,-17.4,-14,1.2),At(i,-17.4,-14,1.2,1.2),At(i,-10,-18.2,1.2),rc(i,-33,-12,"z"),At(i,-36.6,-6,1.4),At(i,-36.6,-4.6,1.2),Pr(i,-27,-6,.7,4),ys(i,-40,-14),ys(i,-40.7,-15),Pr(i,-6,-8,3.5,.7),At(i,-7,-11,1.3),Pr(i,3,-17,4,.7),rc(i,-2.6,0,"z"),At(i,-5.1,2.4,1.2),At(i,-2.6,-2,1.2,2.6),At(i,24,-16,1.4),At(i,22.7,-16.3,1.1),Pr(i,38,-18,.7,4),At(i,40.5,-33,1.4),At(i,41.6,-31.8,1.2),ys(i,39,-38.5),As(i,-33,0,-31),As(i,29,5.6,-31),As(i,6,0,-33),As(i,-39,0,-10),Dr(i,-30,0,-33),Dr(i,-42,0,-21),Dr(i,31,5.6,-34),Dr(i,0,0,-31),Dr(i,-12,0,-15.5),Dr(i,22,0,-6);for(const[e,t]of[[-30,-33],[-42,-21],[0,-31],[-12,-15.5],[22,-6],[-20,-22],[0,-12],[-20,0],[-38,0],[38,-24],[-24,-26],[12,-24],[-42,-42],[40,-42],[8,-8],[-30,-12],[28,-2]])Ry(i,e,t)});const Ei=4,za=new Map;let sc=0;const od=(i,e)=>(i+64)*256+(e+64);for(const i of ts)for(let e=Math.floor((i.x-i.w/2)/Ei);e<=Math.floor((i.x+i.w/2)/Ei);e++)for(let t=Math.floor((i.z-i.d/2)/Ei);t<=Math.floor((i.z+i.d/2)/Ei);t++){const n=od(e,t);za.has(n)||za.set(n,[]),za.get(n).push(i)}const Py=[];function Ys(i,e,t,n=Py){sc++,n.length=0;for(let r=Math.floor((i-t)/Ei);r<=Math.floor((i+t)/Ei);r++)for(let s=Math.floor((e-t)/Ei);s<=Math.floor((e+t)/Ei);s++){const a=za.get(od(r,s));if(a)for(const o of a)o._s!==sc&&(o._s=sc,n.push(o))}return n}function ho(i,e,t){const n=i.axis==="z"?t-i.z:e-i.x,r=i.axis==="z"?e-i.x:t-i.z;return Math.abs(r)>i.w/2||Math.abs(n)>i.d/2?null:i.h*(n/i.d*i.sign+.5)}const cd=i=>i.axis==="z"?[i.w/2,i.d/2]:[i.d/2,i.w/2];function ld(i,e,t,n){let r=Math.abs(i)<46&&Math.abs(e)<46?0:-1/0;for(const s of Ys(i,e,t+.1)){const a=s.y+s.h/2;a>n||a<=r||Math.abs(i-s.x)<s.w/2+t*.7&&Math.abs(e-s.z)<s.d/2+t*.7&&(r=a)}for(const s of as){const[a,o]=cd(s),c=ho(s,mt(i,s.x-a,s.x+a),mt(e,s.z-o,s.z+o));c!==null&&Math.abs(i-s.x)<a+t*.5&&Math.abs(e-s.z)<o+t*.5&&c<=n&&c>r&&(r=c)}return r}function Dy(i,e){for(const t of Ys(i.x,i.z,zt.radius)){const n=t.y-t.h/2;if(!(n<i.y+.05||n>i.y+e)&&Math.abs(i.x-t.x)<t.w/2+zt.radius&&Math.abs(i.z-t.z)<t.d/2+zt.radius)return!0}return!1}function Nu(i,e,t,n,r,s){const a=mt(i.x,e,t),o=mt(i.z,n,r);let c=i.x-a,l=i.z-o;const h=c*c+l*l;if(h>=s*s)return;let f,d,p;if(h>1e-10){const g=Math.sqrt(h);f=c/g,d=l/g,p=s-g}else{const g=[[i.x-e,-1,0],[t-i.x,1,0],[i.z-n,0,-1],[r-i.z,0,1]].sort((m,u)=>m[0]-u[0]);p=g[0][0]+s,f=g[0][1],d=g[0][2]}i.x+=f*p,i.z+=d*p;const x=i.vx*f+i.vz*d;x<0&&(i.vx-=x*f,i.vz-=x*d)}function Ly(i,e,t,n){const r=zt.radius,s=Math.max(1,Math.ceil(Math.max(Math.abs(i.vx),Math.abs(i.vz),Math.abs(i.vy))*e/.2)),a=e/s;let o=!1;for(let c=0;c<s;c++){const l=i.ground,h=l?zt.step:i.vy<2?zt.airStep:.02;i.x+=i.vx*a,i.z+=i.vz*a;for(let d=0;d<2;d++){for(const p of Ys(i.x,i.z,r+.2)){const x=p.y+p.h/2,g=p.y-p.h/2;x<=i.y+h||g>=i.y+i.height-.02||Nu(i,p.x-p.w/2,p.x+p.w/2,p.z-p.d/2,p.z+p.d/2,r)}for(const p of as){const[x,g]=cd(p),m=mt(i.x,p.x-x,p.x+x),u=mt(i.z,p.z-g,p.z+g),b=ho(p,m,u);b===null||b<=i.y+h||Nu(i,p.x-x,p.x+x,p.z-g,p.z+g,r)}}i.x=mt(i.x,-zr+r,zr-r),i.z=mt(i.z,-zr+r,zr-r);let f=i.y+i.vy*a;if(i.vy<=0){const d=ld(i.x,i.z,r,i.y+h);l&&!n&&d>=i.y-.62&&(f=Math.max(f,d)),f<=d?(l||(o=!0),f=d,i.vy=0,i.ground=!0):i.ground=!1}else{i.ground=!1;for(const d of Ys(i.x,i.z,r)){const p=d.y-d.h/2;p<i.y+i.height-.05||p>f+i.height||Math.abs(i.x-d.x)<d.w/2+r*.8&&Math.abs(i.z-d.z)<d.d/2+r*.8&&(f=p-i.height,i.vy=0)}}i.y=f}return o}function Ou(i,e,t,n,r,s){const a=n-(i.vx*e+i.vz*t);if(a<=0)return;const o=Math.min(r*n*s,a);i.vx+=o*e,i.vz+=o*t}function Iy(i,e,t,n,r){if(!n)return;const a=Math.min(n,wt.airCap)-(i.vx*e+i.vz*t);if(a<=0)return;const o=Math.min(wt.airAccel*n*r,a);i.vx+=o*e,i.vz+=o*t}function Fu(i,e,t){const n=Math.hypot(i.vx,i.vz);if(n<.01){i.vx=i.vz=0;return}const r=Math.max(n,wt.stopSpeed)*e*t,s=Math.max(0,n-r)/n;i.vx*=s,i.vz*=s}function ml(i){i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}function Uy(i,e){return{x:-Math.sin(i)*Math.cos(e),y:Math.sin(e),z:-Math.cos(i)*Math.cos(e)}}const ku=i=>({x:i.x,y:i.y+i.height-zt.eye,z:i.z});function hd(i){const e=zn[i.weapon],t=Math.hypot(i.vx,i.vz);let n=i.aiming?e.spread.ads:e.spread.hip;return n+=t*e.spread.move*(i.aiming?.35:1),i.ground||(n+=e.spread.air),n+=i.bloom*(i.aiming?.3:1),i.crouched&&i.ground&&(n*=.75),n}const Ny=i=>i.yaw+(i.recoilYaw||0),Oy=i=>mt(i.pitch+(i.recoil||0),-1.5,1.5);function Bu(i){const e=Ny(i),t=Oy(i),n=Uy(e,t);if(zn[i.weapon].melee)return n;const r={x:Math.cos(e),y:0,z:-Math.sin(e)},s={x:r.y*n.z-r.z*n.y,y:r.z*n.x-r.x*n.z,z:r.x*n.y-r.y*n.x},a=hd(i),o=ml(i.seed*7919+i.shots*2)*Math.PI*2,c=Math.sqrt(ml(i.seed*7919+i.shots*2+1))*a,l={x:n.x+(r.x*Math.cos(o)+s.x*Math.sin(o))*c,y:n.y+(r.y*Math.cos(o)+s.y*Math.sin(o))*c,z:n.z+(r.z*Math.cos(o)+s.z*Math.sin(o))*c},h=Math.hypot(l.x,l.y,l.z);return{x:l.x/h,y:l.y/h,z:l.z/h}}function Fy(i,e,t,n=zt.radius){if(Math.abs(i)>zr-n||Math.abs(t)>zr-n)return!1;for(const r of Ys(i,t,n+.1))if(!(r.y+r.h/2<=e+.05||r.y-r.h/2>=e+zt.height)&&Math.abs(i-r.x)<r.w/2+n&&Math.abs(t-r.z)<r.d/2+n)return!1;for(const r of as){const s=ho(r,i,t);if(s!==null&&s>e+zt.step)return!1}return ld(i,t,n,e+zt.step)>=e-.05}function zu(i,e,t=Hr,n=!1){const r={fired:!1,jumped:!1,landed:!1,impact:0,reloadStart:!1,reloaded:!1,swapped:!1,empty:!1,slid:!1};if(Number.isFinite(e.yaw)&&(i.yaw=e.yaw),Number.isFinite(e.pitch)&&(i.pitch=mt(e.pitch,-1.5,1.5)),i.hp<=0)return r;n&&(e={yaw:i.yaw,pitch:i.pitch});const s=i.ground,a=(e.w?1:0)-(e.s?1:0),o=(e.d?1:0)-(e.a?1:0),c=Math.hypot(i.vx,i.vz);if(i.slideCd=Math.max(0,i.slideCd-t),e.crouch&&!i.crouchHeld&&i.ground&&c>wt.slideMin&&i.slideCd<=0){i.slide=wt.slideTime,i.slideCd=wt.slideTime+wt.slideCooldown;const U=Math.min(wt.slideBoost,wt.slideCap-c);U>0&&(i.vx+=i.vx/c*U,i.vz+=i.vz/c*U),r.slid=!0}i.crouchHeld=!!e.crouch,i.slide>0&&(i.slide-=t,e.crouch||(i.slide=0)),i.slide=Math.max(0,i.slide);const l=e.crouch||i.slide>0?zt.crouch:zt.height;l>i.height&&Dy(i,l)||(i.height=l),i.crouched=i.height<1.5;const h=Math.sin(i.yaw),f=Math.cos(i.yaw);let d=o*f-a*h,p=-o*h-a*f;const x=Math.hypot(d,p);x>0&&(d/=x,p/=x),i.sprinting=!!e.sprint&&a>0&&!i.crouched&&!e.aim&&!e.fire&&i.slide<=0&&i.reload<=0;const g=x?i.crouched?wt.crouch:i.sprinting?wt.sprint:e.aim?wt.aim:wt.walk:0;i.jumpBuffer=Math.max(0,(i.jumpBuffer||0)-t),e.jump&&!i.ground&&(i.jumpBuffer=.12);const m=e.jump||i.jumpBuffer>0;i.ground&&(m?(i.jumpBuffer=0,i.vy=wt.jump,i.ground=!1,r.jumped=!0,i.slide=0):i.slide>0?(Fu(i,wt.slideFriction,t),Ou(i,d,p,g*.3,3,t)):(Fu(i,wt.friction,t),Ou(i,d,p,g,wt.accel,t))),i.ground||Iy(i,d,p,g||0,t);const u=Math.hypot(i.vx,i.vz);u>wt.maxSpeed&&(i.vx*=wt.maxSpeed/u,i.vz*=wt.maxSpeed/u);const b=i.vy;i.vy-=wt.gravity*t,Ly(i,t,s,r.jumped)&&(r.landed=!0,r.impact=-b),i.cooldown=Math.max(0,i.cooldown-t),i.swap=Math.max(0,i.swap-t);const _=Number.isInteger(e.slot)&&e.slot>=0&&e.slot<rd?e.slot:0;_!==i.weapon&&(i.weapon=_,i.swap=_===2?.25:.42,i.reload=0,r.swapped=!0);const M=zn[i.weapon],w=i.weapon;if(i.bloom=Math.max(0,i.bloom-t*M.bloomRecover),i.cooldown<=0){const U=Math.exp(-6.5*t);i.recoil=(i.recoil||0)*U,i.recoilYaw=(i.recoilYaw||0)*U}if(M.melee){i.reload=0,i.aiming=!1;const U=e.fire&&i.cooldown<=0&&i.swap<=0;return i.fireHeld=!!e.fire,U&&(i.cooldown=M.interval,r.fired=!0,r.melee=!0,r.origin=ku(i),r.dir=Bu(i)),r}if(i.reload>0){if(i.reload-=t,i.reload<=0){i.reload=0;const U=Math.min(M.mag-i.ammo[w],i.reserve[w]);i.ammo[w]+=U,i.reserve[w]-=U,r.reloaded=!0,i.ammo[w]=mt(i.ammo[w],0,M.mag),i.reserve[w]=Math.max(0,i.reserve[w])}}else e.reload&&i.ammo[w]<M.mag&&i.reserve[w]>0&&i.swap<=0&&(i.reload=M.reload,r.reloadStart=!0);i.aiming=!!e.aim&&i.reload<=0&&i.swap<=0&&!i.sprinting;const T=e.fire&&(M.auto||!i.fireHeld),P=e.fire&&!i.fireHeld;return i.fireHeld=!!e.fire,T&&i.cooldown<=0&&i.reload<=0&&i.swap<=0&&(i.ammo[w]>0?(i.ammo[w]--,i.cooldown=M.interval,i.shots++,r.fired=!0,r.origin=ku(i),r.dir=Bu(i),i.bloom=Math.min(M.bloomMax,i.bloom+M.bloom),i.recoil=Math.min(ic,(i.recoil||0)+M.kick*(i.aiming?.6:1)),i.recoilYaw=mt((i.recoilYaw||0)+(ml(i.seed*31+i.shots*7+3)-.5)*M.kick*.7,-ic/2,ic/2)):i.reserve[w]>0?(i.reload=M.reload,r.reloadStart=!0):P&&(r.empty=!0)),r}function ud(i,e,t,n,r,s,a,o,c){let l=0,h=c,f=-1;const d=[t,n,r],p=[s,a,o],x=[i.x,i.y,i.z],g=[e.x,e.y,e.z];for(let m=0;m<3;m++){if(Math.abs(g[m])<1e-9){if(x[m]<d[m]||x[m]>p[m])return null;continue}let u=(d[m]-x[m])/g[m],b=(p[m]-x[m])/g[m];if(u>b&&([u,b]=[b,u]),u>l&&(l=u,f=m),b<h&&(h=b),l>h)return null}return{t:l,axis:f}}function ky(i,e,t=160){let n=t,r=null;if(e.y<-1e-6){const s=-i.y/e.y;s>0&&s<n&&(n=s,r={x:0,y:1,z:0})}for(const s of ts){const a=ud(i,e,s.x-s.w/2,s.y-s.h/2,s.z-s.d/2,s.x+s.w/2,s.y+s.h/2,s.z+s.d/2,n);if(a&&a.t<n&&a.t>0){n=a.t;const o=[e.x,e.y,e.z][a.axis];r={x:0,y:0,z:0},r["xyz"[a.axis]]=o>0?-1:1}}for(const s of as){const a=s.h/s.d*s.sign,o=e.y-a*e[s.axis];if(Math.abs(o)<1e-7)continue;const c=(s.h*.5+a*(i[s.axis]-s[s.axis])-i.y)/o;if(c>0&&c<n&&ho(s,i.x+e.x*c,i.z+e.z*c)!==null){n=c;const l={x:0,y:1,z:0};l[s.axis]=-a;const h=Math.hypot(l.x,l.y,l.z);r={x:l.x/h,y:l.y/h,z:l.z/h}}}return{t:n,normal:r}}function By(i){const e=i.height/zt.height;return[{part:"head",minY:i.y+1.42*e,maxY:i.y+1.84*e,r:.19},{part:"body",minY:i.y+.82*e,maxY:i.y+1.42*e,r:.31},{part:"legs",minY:i.y,maxY:i.y+.82*e,r:.25}]}function zy(i,e,t,n){let r=t,s=null,a=null;for(const o of n)for(const c of By(o)){const l=ud(i,e,o.x-c.r,c.minY,o.z-c.r,o.x+c.r,c.maxY,o.z+c.r,r);l&&l.t<r&&(r=l.t,s=o,a=c.part)}return{t:r,target:s,part:a}}function fn(i=256){const e=document.createElement("canvas");return e.width=e.height=i,[e,e.getContext("2d")]}function Ii(i,e,t,n=.08,r=1){let s=r;const a=()=>(s=s*16807%2147483647)/2147483647;for(let o=0;o<t;o++){const c=a()>.5?255:0;i.fillStyle=`rgba(${c},${c},${c},${a()*n})`;const l=1+a()*3;i.fillRect(a()*e,a()*e,l,l)}}function an(i,e=!0,t=8){const n=new so(i);return n.colorSpace=kt,e&&(n.wrapS=n.wrapT=ks),n.anisotropy=t,n.generateMipmaps=!0,n.minFilter=Si,n}const ac=new Map,dn=(i,e)=>(ac.has(i)||ac.set(i,e()),ac.get(i)),Vy=()=>dn("floor",()=>{const[i,e]=fn(256);e.fillStyle="#9aa1a8",e.fillRect(0,0,256,256),Ii(e,256,2600,.05,7);for(const[t,n]of[[0,0],[128,0],[0,128],[128,128]]){const r=e.createLinearGradient(t,n,t+128,n+128);r.addColorStop(0,"#ffffff10"),r.addColorStop(1,"#00000010"),e.fillStyle=r,e.fillRect(t+3,n+3,122,122)}e.fillStyle="#6f777f";for(const t of[0,128])e.fillRect(t,0,4,256),e.fillRect(0,t,256,4);e.fillStyle="#b4bac0";for(const t of[4,132])e.fillRect(t,0,1,256),e.fillRect(0,t,256,1);return an(i)}),Gy=()=>dn("concrete",()=>{const[i,e]=fn(256);return e.fillStyle="#eceae4",e.fillRect(0,0,256,256),Ii(e,256,1400,.025,3),e.fillStyle="#d3d0c8",e.fillRect(0,0,256,2),e.fillRect(0,0,2,256),e.fillRect(128,0,1,256),an(i)}),Hy=()=>dn("red",()=>{const[i,e]=fn(128);return e.fillStyle="#6f2a2f",e.fillRect(0,0,128,128),Ii(e,128,500,.025,11),e.fillStyle="#6a252a",e.fillRect(0,0,128,2),an(i)}),Wy=()=>dn("container",()=>{const[i,e]=fn(128);for(let t=0;t<4;t++){const n=e.createLinearGradient(t*32,0,t*32+32,0);n.addColorStop(0,"#5d2025"),n.addColorStop(.3,"#8b3439"),n.addColorStop(.55,"#97393f"),n.addColorStop(.8,"#6f272c"),n.addColorStop(1,"#5d2025"),e.fillStyle=n,e.fillRect(t*32,0,32,128)}return Ii(e,128,600,.05,5),an(i)}),Xy=()=>dn("crate",()=>{const[i,e]=fn(256);for(let t=0;t<6;t++)e.fillStyle=["#a77c4d","#9c7143","#ad8253","#a17647","#987040","#a87d4e"][t],e.fillRect(0,t*43,256,43),e.fillStyle="#6e4e2c",e.fillRect(0,t*43,256,2);Ii(e,256,1800,.06,9),e.strokeStyle="#6a4a28",e.lineWidth=26,e.strokeRect(13,13,230,230),e.strokeStyle="#8b6439",e.lineWidth=18,e.strokeRect(13,13,230,230),e.save(),e.beginPath(),e.rect(26,26,204,204),e.clip(),e.strokeStyle="#6a4a28",e.lineWidth=24,e.beginPath(),e.moveTo(20,236),e.lineTo(236,20),e.stroke(),e.strokeStyle="#8b6439",e.lineWidth=16,e.stroke(),e.restore(),e.fillStyle="#3d3a36";for(const[t,n]of[[13,13],[243,13],[13,243],[243,243]])e.fillRect(t-5,n-5,10,10);return an(i,!1)}),qy=()=>dn("grating",()=>{const[i,e]=fn(128);e.fillStyle="#4b555c",e.fillRect(0,0,128,128),e.fillStyle="#2b3237";for(let t=0;t<8;t++)for(let n=0;n<8;n++)e.fillRect(t*16+3,n*16+3,10,10);return an(i)}),$y=()=>dn("roof",()=>{const[i,e]=fn(256);e.fillStyle="#b9bcbc",e.fillRect(0,0,256,256),Ii(e,256,3500,.06,21),e.fillStyle="#9fa3a4";for(const t of[0,128])e.fillRect(t,0,3,256),e.fillRect(0,t,256,3);return an(i)}),Yy=()=>dn("stair",()=>{const[i,e]=fn(128);return e.fillStyle="#c8c8c2",e.fillRect(0,0,128,128),Ii(e,128,1e3,.05,31),e.fillStyle="#a9a9a3",e.fillRect(0,0,128,3),e.fillRect(0,64,128,3),an(i)}),jy=()=>dn("ramp",()=>{const[i,e]=fn(128);e.fillStyle="#b6b9b8",e.fillRect(0,0,128,128),Ii(e,128,1e3,.05,41),e.fillStyle="#8e9393";for(let t=0;t<4;t++)e.fillRect(0,t*32,128,6);return an(i)}),Zy=()=>dn("skyline",()=>{const[i,e]=fn(256);e.fillStyle="#e4e6e6",e.fillRect(0,0,256,256);for(let t=0;t<4;t++)for(let n=0;n<4;n++)e.fillStyle=(t+n)%3?"#93a9b8":"#7d95a6",e.fillRect(t*64+14,n*64+18,36,26),e.fillStyle="#cfd3d4",e.fillRect(t*64+14,n*64+44,36,4);return an(i)}),Ky=()=>dn("window",()=>{const[i,e]=fn(128),t=e.createLinearGradient(0,0,128,128);return t.addColorStop(0,"#a4c4d8"),t.addColorStop(.5,"#6f8fa6"),t.addColorStop(1,"#5b7487"),e.fillStyle="#c9cfd1",e.fillRect(0,0,128,128),e.fillStyle=t,e.fillRect(8,8,112,112),e.fillStyle="#c9cfd1",e.fillRect(62,8,4,112),e.fillRect(8,62,112,4),e.fillStyle="#ffffff30",e.beginPath(),e.moveTo(14,56),e.lineTo(50,14),e.lineTo(60,14),e.lineTo(24,56),e.fill(),an(i,!1)});function Jy(i,{color:e="#2a3640",size:t=120,font:n="900",width:r=512,height:s=160,bg:a=null}={}){const o=document.createElement("canvas");o.width=r,o.height=s;const c=o.getContext("2d");return a&&(c.fillStyle=a,c.fillRect(0,0,r,s)),c.fillStyle=e,c.font=`${n} ${t}px "Barlow Condensed", "Arial Narrow", sans-serif`,c.textAlign="center",c.textBaseline="middle",c.fillText(i,r/2,s/2+t*.04),an(o,!1)}const sh=()=>dn("glow",()=>{const[i,e]=fn(128),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"#ffffffff"),t.addColorStop(.25,"#fff2c0ee"),t.addColorStop(.55,"#ffb24a66"),t.addColorStop(1,"#ff800000"),e.fillStyle=t,e.fillRect(0,0,128,128),an(i,!1,1)}),Qy=()=>dn("flash",()=>{const[i,e]=fn(256);e.translate(128,128);for(let n=0;n<6;n++){e.rotate(Math.PI/3+n%2*.2);const r=e.createLinearGradient(0,0,124,0);r.addColorStop(0,"#fffbe8"),r.addColorStop(.35,"#ffd27a"),r.addColorStop(1,"#ff8a2000"),e.fillStyle=r,e.beginPath(),e.moveTo(0,-12+n%2*5),e.lineTo(n%2?90:124,0),e.lineTo(0,12-n%2*5),e.fill()}const t=e.createRadialGradient(0,0,0,0,0,60);return t.addColorStop(0,"#ffffff"),t.addColorStop(.4,"#ffe39aaa"),t.addColorStop(1,"#ffa03000"),e.fillStyle=t,e.beginPath(),e.arc(0,0,60,0,Math.PI*2),e.fill(),an(i,!1,1)}),eb=()=>dn("decal",()=>{const[i,e]=fn(64),t=e.createRadialGradient(32,32,0,32,32,30);return t.addColorStop(0,"#0b0b0bff"),t.addColorStop(.35,"#1d1d1dee"),t.addColorStop(.6,"#33333355"),t.addColorStop(1,"#33333300"),e.fillStyle=t,e.fillRect(0,0,64,64),an(i,!1,1)}),tb={perimeter:2.6,wall:2,block:2.2};function ji(i,e){const t=i.attributes.position,n=i.attributes.normal,r=i.attributes.uv;for(let s=0;s<t.count;s++){const a=Math.abs(n.getX(s)),o=Math.abs(n.getY(s)),c=Math.abs(n.getZ(s));let l,h;a>=o&&a>=c?(l=t.getZ(s),h=t.getY(s)):o>=c?(l=t.getX(s),h=t.getZ(s)):(l=t.getX(s),h=t.getY(s)),r.setXY(s,l/e,h/e)}return r.needsUpdate=!0,i}class nb{constructor(){this.map=new Map}add(e,t){this.map.has(e)||this.map.set(e,[]),this.map.get(e).push(t)}box(e,t,n,r,s,a,o,c=0){if(s<=0||a<=0||o<=0)return;const l=new jt(s,a,o).translate(t,n,r);this.add(e,c?ji(l,c):l)}build(e,{cast:t=!0,receive:n=!0}={}){for(const[r,s]of this.map){const a=lo(s.map(c=>c.index?c.toNonIndexed():c),!1);for(const c of s)c.dispose();if(!a)continue;a.computeBoundingSphere();const o=new Qe(a,r);o.castShadow=t&&!r.userData.noShadow,o.receiveShadow=n,o.matrixAutoUpdate=!1,o.updateMatrix(),e.add(o)}}}function ib(){const i=new nh(450,32,16),e=new Zn({side:$t,depthWrite:!1,fog:!1,uniforms:{top:{value:new He("#2f86e0")},mid:{value:new He("#69b3ef")},horizon:{value:new He("#cfe9f8")}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 horizon; varying vec3 vP;
      void main(){ float h = clamp(vP.y, 0.0, 1.0);
        vec3 c = mix(horizon, mid, smoothstep(0.0, 0.18, h)); c = mix(c, top, smoothstep(0.18, 0.75, h));
        if (vP.y < 0.0) c = horizon; gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`}),t=new Qe(i,e);return t.renderOrder=-10,t.frustumCulled=!1,t}function rb(i){const{w:e,d:t,h:n}=i,r=e/2,s=t/2,a=[-r,0,-s,r,0,-s,r,n,s,-r,0,-s,r,n,s,-r,n,s,-r,0,s,-r,n,s,r,n,s,-r,0,s,r,n,s,r,0,s,r,0,-s,r,0,s,r,n,s,-r,0,-s,-r,n,s,-r,0,s],o=new Kt;o.setAttribute("position",new vt(a,3)),o.setAttribute("uv",new vt(new Array(a.length/3*2).fill(0),2)),o.computeVertexNormals();const c=i.axis==="z"?i.sign>0?0:Math.PI:i.sign>0?Math.PI/2:-Math.PI/2;return o.rotateY(c).translate(i.x,0,i.z),ji(o,2)}function sb(i){const e=i.w>=i.d,t=e?i.w:i.d,n=e?i.d:i.w,r=new eh;r.moveTo(-n/2,0),r.lineTo(n/2,0),r.lineTo(n/2,.18),r.lineTo(n*.2,.42),r.lineTo(n*.18,i.h),r.lineTo(-n*.18,i.h),r.lineTo(-n*.2,.42),r.lineTo(-n/2,.18),r.closePath();const s=new ao(r,{depth:t,bevelEnabled:!1});return s.translate(0,0,-t/2),e&&s.rotateY(Math.PI/2),s.translate(i.x,i.y-i.h/2,i.z),s}function ab(i,e="auto"){const t=u=>new tr(u),n={concrete:t({map:Gy()}),red:t({map:Hy()}),trim:t({color:"#d8d6ce"}),roof:t({map:$y()}),floor:t({map:Vy()}),container:t({map:Wy()}),containerDark:t({color:"#4f1b20"}),crate:t({map:Xy()}),grating:t({map:qy()}),steel:t({color:"#5b666e"}),steelDark:t({color:"#363e44"}),stair:t({map:Yy()}),ramp:t({map:jy()}),barrier:t({color:"#8c3439"}),stripe:t({color:"#e9e4d6"}),metal:t({color:"#a2abb0"}),window:t({map:Ky()}),skyline:t({map:Zy(),fog:!0}),skylineRed:t({color:"#8a3a3f"}),barrelA:t({color:"#2f5f8a"}),barrelB:t({color:"#3b4248"}),barrelC:t({color:"#9b3b36"}),pipe:t({color:"#7b868c"}),lamp:t({color:"#fff6d8",emissive:"#fff1c4",emissiveIntensity:.6})};n.window.userData.noShadow=!0,i.background=new He("#9fd2f2"),i.fog=new Yl("#c6e4f5",110,380),i.add(ib());const r=new Zf("#e4f3ff","#8c8274",2.05);i.add(r);const s=new hl("#fff4de",2.55);s.position.set(-26,48,18),s.castShadow=e!=="low";const a=e==="high"?4096:2048;s.shadow.mapSize.set(a,a),Object.assign(s.shadow.camera,{left:-52,right:52,top:52,bottom:-52,near:5,far:130}),s.shadow.bias=-6e-4,s.shadow.normalBias=.035,i.add(s,s.target);const o=new pt;o.name="arena",i.add(o);const c=new nb,l=new tn(92,92).rotateX(-Math.PI/2);c.add(n.floor,ji(l,4));for(const u of ts){const b=u.y-u.h/2,_=u.y+u.h/2;switch(u.kind){case"perimeter":case"wall":case"block":{const M=Math.min(tb[u.kind],u.h);c.box(n.red,u.x,b+M/2,u.z,u.w,M,u.d,2),c.box(n.concrete,u.x,b+M+(u.h-M)/2,u.z,u.w,u.h-M,u.d,4),c.box(n.trim,u.x,b+M+.05,u.z,u.w+.08,.12,u.d+.08),u.kind!=="wall"&&c.box(n.trim,u.x,_-.08,u.z,u.w+.12,.16,u.d+.12),u.kind==="block"&&c.add(n.roof,ji(new tn(u.w-.02,u.d-.02).rotateX(-Math.PI/2).translate(u.x,_+.005,u.z),4));break}case"lintel":c.box(n.concrete,u.x,u.y,u.z,u.w,u.h,u.d,4);break;case"roof":c.box(n.concrete,u.x,u.y,u.z,u.w,u.h,u.d,4),c.box(n.trim,u.x,_-.06,u.z,u.w+.1,.12,u.d+.1),c.add(n.roof,ji(new tn(u.w-.1,u.d-.1).rotateX(-Math.PI/2).translate(u.x,_+.005,u.z),4));break;case"parapet":c.box(n.concrete,u.x,u.y,u.z,u.w,u.h,u.d,4),c.box(n.trim,u.x,_-.04,u.z,u.w+.06,.08,u.d+.06);break;case"crate":c.box(n.crate,u.x,u.y,u.z,u.w,u.h,u.d);break;case"container":{c.box(n.container,u.x,u.y,u.z,u.w-.06,u.h-.12,u.d-.06,1);for(const w of[-1,1])for(const T of[-1,1])c.box(n.containerDark,u.x+w*(u.w/2-.08),u.y,u.z+T*(u.d/2-.08),.16,u.h,.16);for(const w of[b+.06,_-.06])c.box(n.containerDark,u.x,w,u.z,u.w,.12,u.d);const M=u.w>u.d;for(const w of[-1,1])for(const T of[-.45,-.15,.15,.45])M?c.box(n.steelDark,u.x+w*(u.w/2+.01),u.y,u.z+T*u.d,.04,u.h-.3,.05):c.box(n.steelDark,u.x+T*u.w,u.y,u.z+w*(u.d/2+.01),.05,u.h-.3,.04);break}case"barrier":c.add(n.barrier,sb(u)),c.box(n.stripe,u.x,u.y+.12,u.z,u.w>=u.d?u.w+.002:u.w*.42,.12,u.w>=u.d?u.d*.42:u.d+.002);break;case"barrel":{const M=[n.barrelA,n.barrelB,n.barrelC][u.id%3];c.add(M,new qt(u.w/2,u.w/2,u.h,14).translate(u.x,u.y,u.z));for(const w of[-.28,.28])c.add(n.steelDark,new qt(u.w/2+.015,u.w/2+.015,.05,14).translate(u.x,u.y+w*u.h,u.z));break}case"stair":c.box(n.stair,u.x,u.y,u.z,u.w,u.h,u.d,1.2),c.box(n.steelDark,u.x,_-.015,u.z,u.w+.01,.03,u.d+.01);break;case"catwalk":c.box(n.steel,u.x,u.y-.05,u.z,u.w,u.h-.1,u.d),c.add(n.grating,ji(new tn(u.w,u.d).rotateX(-Math.PI/2).translate(u.x,_+.003,u.z),1));break;case"rail":{c.box(n.steel,u.x,_-.04,u.z,u.w,.08,u.d+.04),c.box(n.steel,u.x,u.y-.05,u.z,u.w,.05,u.d);const M=u.w>u.d,w=M?u.w:u.d;for(let T=-w/2;T<=w/2+.01;T+=2.25)c.box(n.steelDark,u.x+(M?T:0),u.y,u.z+(M?0:T),.08,u.h,.08);break}case"steel":c.box(n.steelDark,u.x,u.y,u.z,u.w,u.h,u.d);break;case"metal":c.box(n.metal,u.x,u.y,u.z,u.w,u.h,u.d),c.add(n.steelDark,new qt(Math.min(u.w,u.d)*.32,Math.min(u.w,u.d)*.32,.03,16).translate(u.x,_+.015,u.z));break;default:c.box(n.concrete,u.x,u.y,u.z,u.w,u.h,u.d,4)}}for(const u of as)c.add(n.ramp,rb(u));const h=(u,b,_,M,w,T)=>c.add(n.window,new tn(M,w).rotateY(T).translate(u,b,_));for(const u of ts)if(u.kind==="block"&&u.h>5)for(const b of[3.4]){for(let _=-u.w/2+2;_<=u.w/2-1.9;_+=2.6)h(u.x+_,b,u.z-u.d/2-.02,1.6,1.5,Math.PI),h(u.x+_,b,u.z+u.d/2+.02,1.6,1.5,0);for(let _=-u.d/2+2;_<=u.d/2-1.9;_+=2.6)h(u.x-u.w/2-.02,b,u.z+_,1.6,1.5,-Math.PI/2),h(u.x+u.w/2+.02,b,u.z+_,1.6,1.5,Math.PI/2)}for(let u=-40;u<=40;u+=5)h(u,6.4,-43.98,2,1.6,0),h(u,6.4,43.98,2,1.6,Math.PI),h(-43.98,6.4,u,2,1.6,Math.PI/2),h(43.98,6.4,u,2,1.6,-Math.PI/2);for(const u of[-1,1]){c.add(n.pipe,new qt(.16,.16,88,10).rotateZ(Math.PI/2).translate(0,8.1,u*43.75)),c.add(n.pipe,new qt(.16,.16,88,10).rotateX(Math.PI/2).translate(u*43.75,8.1,0));for(let b=-42;b<=42;b+=6)c.box(n.steelDark,b,8.1,u*43.85,.12,.45,.3),c.box(n.steelDark,u*43.85,8.1,b,.3,.45,.12);for(let b=-36;b<=36;b+=18)c.box(n.steelDark,b,5,u*43.7,.12,.12,.6),c.box(n.lamp,b,4.85,u*43.42,.7,.14,.35),c.box(n.steelDark,u*43.7,5,b,.6,.12,.12),c.box(n.lamp,u*43.42,4.85,b,.35,.14,.7)}let f=17;const d=()=>(f=f*16807%2147483647)/2147483647;for(let u=0;u<46;u++){const b=u/46*Math.PI*2+d()*.06,_=62+d()*40,M=10+d()*16,w=10+d()*16,T=12+d()*34,P=Math.sin(b)*_,U=Math.cos(b)*_,S=ji(new jt(M,T,w).translate(P,T/2,U),8);c.add(n.skyline,S),c.box(n.skylineRed,P,2.5,U,M+.1,5,w+.1),d()>.5&&c.box(n.metal,P+(d()-.5)*M*.4,T+.8,U+(d()-.5)*w*.4,3,1.6,2.5)}c.build(o);const p=(u,b,_,M,w,T,P,U="#2a3640")=>{const S=new Qe(new tn(T,P),new tr({map:Jy(u,{color:U}),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));S.position.set(b,_,M),S.rotation.y=w,o.add(S)};p("FOUNDRY 09",0,6,-43.97,0,10,3.1),p("FOUNDRY 09",0,6,43.97,Math.PI,10,3.1),p("A",-24.6,4,-26.98,0,2.2,2.2,"#2a3640"),p("B",24.6,4,26.98,Math.PI,2.2,2.2,"#2a3640"),p("BLACKOUT",31,4.4,-26.98,0,7,2.1,"#8a3a3f"),p("BLACKOUT",-31,4.4,26.98,Math.PI,7,2.1,"#8a3a3f"),p("FREIGHT 02",0,3.25,1.27,0,4.4,1.3,"#e5d6cc"),p("FREIGHT 02",0,3.25,-1.27,Math.PI,4.4,1.3,"#e5d6cc"),p("OFFICE",-12,2.5,-11.98,0,3.4,1,"#eae4d8"),p("OFFICE",12,2.5,11.98,Math.PI,3.4,1,"#eae4d8");const x=new $n({color:"#ffffff",fog:!1}),g=[];for(let u=0;u<16;u++){const b=d()*Math.PI*2,_=180+d()*160,M=70+d()*60;for(let w=0;w<4;w++)g.push(new jt(18+d()*26,4+d()*5,10+d()*14).translate(Math.sin(b)*_+(d()-.5)*30,M+d()*6,Math.cos(b)*_+(d()-.5)*20))}const m=new Qe(lo(g.map(u=>u.toNonIndexed())),x);return m.matrixAutoUpdate=!1,i.add(m),{sun:s,hemi:r,arena:o,setShadows(u){s.castShadow=u}}}class ob extends jl{constructor(){super();const e=new jt;e.deleteAttribute("uv");const t=new Qa({side:$t}),n=new Qa,r=new rh(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Qe(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new ka(e,n,6),o=new Ut;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new Qe(e,Lr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new Qe(e,Lr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new Qe(e,Lr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const f=new Qe(e,Lr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const d=new Qe(e,Lr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const p=new Qe(e,Lr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Lr(i){return new tr({color:0,emissive:16777215,emissiveIntensity:i})}const bs=new R;function Rn(i,e,t,n,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;bs.copy(e),bs[n]=0,bs.normalize();const l=.5*a/(a+o),h=1-bs.angleTo(i)/c;return Math.sign(bs[t])===1?h*l:o/(a+o)+l+l*(1-h)}class js extends jt{constructor(e=1,t=1,n=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new R,l=new R,h=new R(e,t,n).divideScalar(2).subScalar(s),f=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,x=f.length/6,g=new R,m=.5/a;for(let u=0,b=0;u<f.length;u+=3,b+=2)switch(c.fromArray(f,u),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[u+0]=h.x*Math.sign(c.x)+l.x*s,f[u+1]=h.y*Math.sign(c.y)+l.y*s,f[u+2]=h.z*Math.sign(c.z)+l.z*s,d[u+0]=l.x,d[u+1]=l.y,d[u+2]=l.z,Math.floor(u/x)){case 0:g.set(1,0,0),p[b+0]=Rn(g,l,"z","y",s,n),p[b+1]=1-Rn(g,l,"y","z",s,t);break;case 1:g.set(-1,0,0),p[b+0]=1-Rn(g,l,"z","y",s,n),p[b+1]=1-Rn(g,l,"y","z",s,t);break;case 2:g.set(0,1,0),p[b+0]=1-Rn(g,l,"x","z",s,e),p[b+1]=Rn(g,l,"z","x",s,n);break;case 3:g.set(0,-1,0),p[b+0]=1-Rn(g,l,"x","z",s,e),p[b+1]=1-Rn(g,l,"z","x",s,n);break;case 4:g.set(0,0,1),p[b+0]=1-Rn(g,l,"x","y",s,e),p[b+1]=1-Rn(g,l,"y","x",s,t);break;case 5:g.set(0,0,-1),p[b+0]=Rn(g,l,"x","y",s,e),p[b+1]=1-Rn(g,l,"y","x",s,t);break}}static fromJSON(e){return new js(e.width,e.height,e.depth,e.segments,e.radius)}}function cb(){const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d");e.fillStyle="#4a5140",e.fillRect(0,0,128,128);let t=5;const n=()=>(t=t*16807%2147483647)/2147483647;for(const s of["#3a4033","#5d624d","#2f342b","#666a55"]){e.fillStyle=s;for(let a=0;a<9;a++)e.beginPath(),e.ellipse(n()*128,n()*128,6+n()*16,4+n()*9,n()*3,0,Math.PI*2),e.fill()}const r=new so(i);return r.colorSpace=kt,r.wrapS=r.wrapT=ks,r.repeat.set(1,3),r}function lb(){const i=(e,t,n,r={})=>new Qa({color:e,metalness:t,roughness:n,...r});return{metal:i("#3a3f45",.72,.36),metalDark:i("#24282c",.7,.42),black:i("#17191b",.2,.62),polymer:i("#1d2023",.12,.7),steel:i("#202326",.88,.28),edge:i("#6b737a",.85,.3),rubber:i("#0e0f10",0,.92),brass:i("#c99a45",.9,.3),glove:i("#2a2d30",0,.86),glovePad:i("#5d5547",0,.9),gloveKnuckle:i("#1a1c1e",.05,.6),sleeve:i("#ffffff",0,.97,{map:cb()}),sleeveDark:i("#363c31",0,.98),watch:i("#111315",.4,.4)}}class ci{constructor(){this.parts=new Map}add(e,t){return this.parts.has(e)||this.parts.set(e,[]),this.parts.get(e).push(t.index?t.toNonIndexed():t),t}box(e,t,n,r,s,a,o,c=0,l=0,h=0){const f=new jt(s,a,o);return(c||l||h)&&f.applyMatrix4(new tt().makeRotationFromEuler(new It(c,l,h))),this.add(e,f.translate(t,n,r))}rbox(e,t,n,r,s,a,o,c=.004,l=0,h=0,f=0){const d=new js(s,a,o,2,Math.min(c,s/2,a/2,o/2)*.999);return(l||h||f)&&d.applyMatrix4(new tt().makeRotationFromEuler(new It(l,h,f))),this.add(e,d.translate(t,n,r))}cylZ(e,t,n,r,s,a,o=16,c=s,l=0){const h=new qt(c,s,a,o).rotateX(Math.PI/2);return l&&h.rotateZ(l),this.add(e,h.translate(t,n,r))}cylX(e,t,n,r,s,a,o=12){return this.add(e,new qt(s,s,a,o).rotateZ(Math.PI/2).translate(t,n,r))}cylY(e,t,n,r,s,a,o=12){return this.add(e,new qt(s,s,a,o).translate(t,n,r))}profile(e,t,n,r=.0015,s=0){const a=new eh;if(typeof t=="function")t(a);else{a.moveTo(-t[0][0],t[0][1]);for(const[c,l]of t.slice(1))a.lineTo(-c,l);a.closePath()}const o=new ao(a,{depth:Math.max(.001,n-r*2),bevelEnabled:r>0,bevelThickness:r,bevelSize:r,bevelSegments:2,curveSegments:10});return o.translate(0,0,-(n-r*2)/2).rotateY(Math.PI/2).translate(s,0,0),this.add(e,o)}build(e=new pt){for(const[t,n]of this.parts){const r=lo(n.map(a=>(a.attributes.uv||a.setAttribute("uv",new vt(new Float32Array(a.attributes.position.count*2),2)),a)),!1),s=new Qe(r,t);s.castShadow=!0,e.add(s)}return e}}function hb(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.strokeStyle="#ff3b2e",e.fillStyle="#ff3b2e",e.shadowColor="#ff2a1a",e.shadowBlur=10,e.lineWidth=7,e.beginPath(),e.arc(128,128,78,0,Math.PI*2),e.stroke();for(const n of[0,Math.PI/2,Math.PI,Math.PI*1.5])e.beginPath(),e.moveTo(128+Math.cos(n)*78,128+Math.sin(n)*78),e.lineTo(128+Math.cos(n)*96,128+Math.sin(n)*96),e.stroke();e.beginPath(),e.arc(128,128,9,0,Math.PI*2),e.fill();const t=new so(i);return t.colorSpace=kt,t}function fd(i=1){const e=new pt,t=new $n({map:sh(),transparent:!0,blending:hi,depthWrite:!1,color:"#ffd28a"}),n=new $n({map:Qy(),transparent:!0,blending:hi,depthWrite:!1,color:"#ffe0a0"}),r=new Qe(new tn(.16*i,.16*i),n);r.position.z=-.02,e.add(r);for(let s=0;s<2;s++){const a=new Qe(new tn(.07*i,.22*i),t);a.rotation.set(Math.PI/2,0,s*Math.PI/2),a.position.z=-.09*i,e.add(a)}return e.visible=!1,e.userData.front=r,e}function ub(i,{detail:e=!0}={}){const t=new pt,n=new ci,r=.028;n.profile(i.metal,[[.112,0],[.112,.044],[.098,.058],[-.135,.058],[-.135,0]],.056,.002),n.box(i.black,.0285,.03,.006,.003,.022,.066),n.box(i.metalDark,.031,.017,.006,.004,.006,.07,0,0,.5),n.box(i.metal,.03,.044,.045,.012,.016,.018,0,0,-.3),n.cylZ(i.metal,.031,.036,.083,.0085,.032,12),n.cylZ(i.edge,.031,.036,.1,.0072,.004,12),n.profile(i.metal,[[.106,0],[.106,-.03],[.072,-.041],[.003,-.041],[-.004,-.086],[-.086,-.086],[-.091,-.03],[-.13,-.022],[-.13,0]],.052,.002),n.rbox(i.metalDark,-.045,-.084,0,.06,.008,.088,.003),n.box(i.metalDark,-.0275,-.008,-.003,.004,.026,.012),n.cylX(i.edge,.028,-.024,-.012,.0055,.006,10),n.box(i.metalDark,-.029,-.012,.048,.005,.006,.022,.4,0,0),n.cylX(i.edge,-.029,-.012,.048,.006,.004,10),n.box(i.metalDark,0,-.075,.024,.012,.007,.07),n.box(i.metalDark,0,-.06,-.01,.012,.03,.007),n.box(i.edge,0,-.054,.016,.005,.026,.006,.35,0,0),n.profile(i.polymer,_=>{_.moveTo(-.048,-.038),_.lineTo(-.088,-.038),_.quadraticCurveTo(-.13,-.095,-.128,-.165),_.lineTo(-.112,-.178),_.lineTo(-.078,-.172),_.quadraticCurveTo(-.068,-.12,-.05,-.075),_.closePath()},.034,.006);for(let _=0;_<3;_++)n.box(i.black,0,-.09-_*.026,.061+_*.0085,.036,.006,.004,-.35);if(n.cylZ(i.metalDark,0,r,.2,.0158,.2,18),n.cylZ(i.edge,0,r,.115,.019,.01,12),n.profile(i.polymer,[[.17,.052],[.33,.058],[.345,.052],[.345,-.088],[.325,-.098],[.296,-.07],[.215,-.012],[.17,.004]],.044,.004),n.box(i.black,0,-.03,.29,.046,.032,.03),n.rbox(i.rubber,0,-.018,.353,.048,.152,.016,.005),n.box(i.metalDark,0,.003,.2,.012,.012,.03),n.cylX(i.edge,0,-.07,.315,.007,.05,10),n.cylZ(i.metal,0,r,-.29,.03,.31,8,.03,Math.PI/8),n.cylZ(i.edge,0,r,-.137,.032,.008,8,.032,Math.PI/8),e){for(let _=0;_<6;_++){const M=-.17-_*.042;for(const w of[-1,1])n.box(i.black,w*.0285,r,M,.003,.009,.026);for(const w of[-1,1])n.box(i.black,w*.02,r-.021,M,.009,.003,.026,0,0,w*Math.PI/4);n.box(i.black,0,r-.0285,M,.009,.003,.026)}for(const _ of[-.155,-.41])for(const M of[-1,1])n.cylX(i.edge,M*.029,r+.012,_,.003,.004,8)}if(n.box(i.metalDark,0,r-.036,-.4,.016,.014,.03,-.4),n.box(i.metalDark,0,.0625,-.165,.022,.009,.555),e)for(let _=.1;_>-.44;_-=.0105)n.box(i.metalDark,0,.0685,_,.022,.004,.0052);n.cylZ(i.steel,0,r,-.5,.0095,.13,14),n.cylZ(i.steel,0,r,-.585,.0148,.058,16),n.cylZ(i.edge,0,r,-.6145,.0128,.003,16);for(let _=0;_<3;_++)for(const M of[-1,1])n.box(i.black,M*.0118,r+.004,-.566-_*.017,.005,.016,.0085);n.box(i.metalDark,0,.073,-.425,.02,.008,.026),n.box(i.metalDark,0,.073,.085,.022,.009,.03);const s=-.075,a=.108,o=.8,c=new R(0,.066,-.075),l=new ci;l.rbox(i.black,0,.078,s-.008,.046,.016,.075,.003),l.rbox(i.black,0,.0895,s-.014,.05,.01,.062,.003);for(const _ of[-1,1])l.rbox(i.black,_*.0245,a,s-.02,.005,.04,.052,.002);l.rbox(i.black,0,a+.022,s-.02,.054,.006,.052,.002),l.box(i.black,0,a+.021,s-.044,.054,.01,.006);for(const[_,M]of[[s+.008,.088],[s-.016,.088]])l.cylX(i.edge,.028,M,_,.004,.004,10);l.box(i.edge,.0265,.0915,s+.008,.003,.006,.012),l.cylX(i.metalDark,-.026,.078,s,.007,.012,10);const h=l.build();t.add(h);const f=new ci;f.box(i.metalDark,0,.052,.104,.011,.008,.03),f.rbox(i.metalDark,0,.052,.121,.048,.009,.012,.003);const d=f.build();t.add(d);const p=new ci;p.profile(i.polymer,_=>{_.moveTo(.006,.01),_.lineTo(.077,.01),_.lineTo(.08,-.04),_.quadraticCurveTo(.09,-.12,.112,-.185),_.lineTo(.05,-.2),_.quadraticCurveTo(.03,-.12,.006,-.04),_.closePath()},.027,.0025);for(let _=0;_<6;_++)p.box(i.black,0,-.06-_*.022,-.041-_*.0068,.029,.004,.05,-.18);p.rbox(i.black,0,-.2,-.086,.032,.012,.072,.004,-.22),p.box(i.brass,0,.013,-.04,.012,.006,.05);const x=p.build();x.position.set(0,-.03,0),t.add(x),n.build(t);const g=new Qe(new tn(.044,.036),new Pm({color:"#9fd6e8",metalness:0,roughness:.05,transparent:!0,opacity:.16,depthWrite:!1}));g.position.set(0,a+.001,s-.04),h.add(g);const m=new Qe(new tn(.03,.03),new $n({map:hb(),transparent:!0,blending:hi,depthWrite:!1,toneMapped:!1}));m.position.set(0,a,s-.038),m.renderOrder=5,h.add(m),h.position.copy(c).multiplyScalar(1-o),h.scale.setScalar(o);const u=new R(0,a,s-.038).sub(c).multiplyScalar(o).add(c),b=fd(1);return b.position.set(0,r,-.62),t.add(b),{root:t,magazine:x,chargingHandle:d,flash:b,reticle:m,muzzle:new R(0,r,-.62),port:new R(.03,.03,.006),sight:u,magHome:x.position.clone()}}function fb(i){const e=new pt,t=new ci;t.profile(i.polymer,[[.03,0],[.03,.012],[-.16,.012],[-.16,-.008],[-.02,-.012],[-.02,-.03],[.01,-.03],[.012,-.008]],.03,.003);for(let c=0;c<3;c++)t.box(i.black,0,-.009,-.07-c*.022,.032,.004,.01);t.box(i.polymer,0,-.042,-.02,.011,.007,.055),t.box(i.polymer,0,-.027,-.05,.011,.034,.007,.25),t.box(i.edge,0,-.022,-.02,.005,.02,.006,.25),t.profile(i.polymer,c=>{c.moveTo(-.032,-.008),c.lineTo(-.002,-.008),c.lineTo(-.035,-.125),c.lineTo(-.075,-.13),c.lineTo(-.058,-.03),c.quadraticCurveTo(-.062,-.006,-.032,-.008),c.closePath()},.032,.005);for(let c=0;c<5;c++)for(const l of[-1,1])t.box(i.black,l*.0165,-.035-c*.017,.035+c*.0045,.002,.008,.026,-.27);t.rbox(i.black,0,-.131,.056,.034,.012,.045,.004,-.27);const n=new ci;n.profile(i.metal,[[.035,.012],[.035,.04],[.02,.046],[-.165,.046],[-.17,.04],[-.17,.012]],.029,.0025);for(let c=0;c<6;c++)for(const l of[-1,1])n.box(i.black,l*.0146,.03,.026-c*.0055,.0015,.024,.0025);n.box(i.black,.0146,.034,-.045,.002,.012,.035),n.box(i.metalDark,0,.051,-.158,.004,.009,.008),n.box(i.metalDark,0,.05,.026,.022,.008,.01),n.cylZ(i.steel,0,.032,-.171,.0065,.004,12);const r=n.build();e.add(r);const s=new ci;s.box(i.metalDark,0,-.05,0,.022,.1,.032,-.27);const a=s.build();a.position.set(0,-.025,.038),e.add(a),t.build(e);const o=fd(.75);return o.position.set(0,.032,-.18),e.add(o),{root:e,slide:r,magazine:a,flash:o,muzzle:new R(0,.032,-.18),port:new R(.015,.04,-.04),sight:new R(0,.058,-.06),magHome:a.position.clone()}}function db(i){const e=new pt,t=new ci;t.profile(i.steel,n=>{n.moveTo(.05,.006),n.lineTo(.2,.008),n.lineTo(.235,0),n.quadraticCurveTo(.2,-.016,.15,-.019),n.lineTo(.05,-.016),n.closePath()},.0045,8e-4),t.box(i.edge,0,-.016,-.12,.0012,.004,.14),t.box(i.metalDark,0,-.002,-.11,.005,.004,.09),t.rbox(i.metalDark,0,-.004,-.046,.022,.05,.008,.002),t.cylZ(i.polymer,0,-.004,0,.0125,.09,12,.0135);for(let n=0;n<5;n++)t.cylZ(i.black,0,-.004,-.03+n*.015,.0142,.004,12);return t.cylZ(i.metalDark,0,-.004,.05,.0145,.012,12,.011),t.build(e),{root:e,muzzle:new R(0,0,-.23),port:new R,sight:new R(0,.05,-.1),magHome:new R}}function Vu(i,e=1){const t=new pt,n=new ci;n.rbox(i.glove,0,0,-.046,.08,.03,.088,.012),n.rbox(i.gloveKnuckle,0,.0165,-.07,.07,.01,.026,.004),n.rbox(i.gloveKnuckle,0,.0155,-.036,.056,.008,.032,.004),n.rbox(i.glovePad,0,-.0155,-.05,.066,.006,.07,.003),n.cylZ(i.glove,0,0,.004,.034,.03,14,.036),n.cylZ(i.gloveKnuckle,0,.003,.004,.0365,.012,14),n.build(t);const r=[],s=(f,d,p,x=i.glove)=>{const g=new pt,m=new Qe(new Kl(p,Math.max(.001,d-p*2),3,8).rotateX(Math.PI/2).translate(0,0,-d/2),x);m.castShadow=!0,g.add(m);const u=new pt;return u.position.z=-d+p*.6,g.add(u),f.add(g),[g,u]},a=[.048,.054,.051,.042];for(let f=0;f<4;f++){const d=new pt;d.position.set(e*(-.029+f*.0195),-.002,-.088),t.add(d);const p=a[f],x=.0098-f*4e-4,[g,m]=s(d,p*.46,x),[u,b]=s(m,p*.32,x*.95),[_]=s(b,p*.26,x*.9);r.push([g,u,_])}const o=new pt;o.position.set(e*-.038,-.006,-.03),t.add(o);const[c,l]=s(o,.036,.0115),[h]=s(l,.032,.0105);return t.userData={fingers:r,thumb:[o,c,h],side:e},t}function Gu(i,e,t=[.6,-.3,.4],n=.04){const{fingers:r,thumb:s,side:a}=i.userData;r.forEach((o,c)=>{const l=e[c];o[0].rotation.set(-l*.42,a*(1.5-c)*n,0),o[1].rotation.set(-l*.33,0,0),o[2].rotation.set(-l*.25,0,0)}),s[0].rotation.set(t[1],a*t[0],0),s[1].rotation.set(-t[2]*.5,0,0),s[2].rotation.set(-t[2]*.5,0,0)}function Hu(i){const e=new pt,t=new Qe(new qt(.037,.05,1,14,1).translate(0,.5,0),i.sleeve),n=new Qe(new qt(.043,.043,.05,14).translate(0,.035,0),i.sleeveDark),r=new Qe(new qt(.054,.062,1,14).translate(0,.5,0),i.sleeve);for(const s of[t,r,n])s.castShadow=!0;return e.add(t,r,n),e.userData={forearm:t,upper:r,cuff:n},e}const pb=new R(0,1,0),oc=new R;function Wu(i,e,t){oc.subVectors(t,e);const n=oc.length();i.position.copy(e),i.quaternion.setFromUnitVectors(pb,oc.normalize()),i.scale.set(1,n,1)}function Xu(i,e,t,n){const{forearm:r,upper:s,cuff:a}=i.userData;Wu(r,e,t),Wu(s,t,n),a.position.copy(e),a.quaternion.copy(r.quaternion)}const Fe=(i,e,t)=>new R(i,e,t),Ir=i=>(i=mt(i,0,1),i*i*(3-2*i)),On=(i,e,t,n)=>Bt.damp(i,e,t,n);function vi(i,e,t=[0,0,0]){const n=i.clone().normalize(),r=e.clone().normalize(),s=new R().crossVectors(n,r).normalize();return r.crossVectors(s,n).normalize(),new jn().setFromRotationMatrix(new tt().makeBasis(n,r,s)).multiply(new jn().setFromEuler(new It(...t)))}const mb={rifle:{hip:{pos:Fe(.128,-.15,-.325),rot:new It(0,.055,-.015)},adsDistance:.105,right:{pos:Fe(.034,-.052,.108),q:vi(Fe(0,-.94,.34),Fe(1,0,0),[0,-.12,0]),curls:[.5,2.05,2.1,2.15],thumb:[-.25,-.9,.5]},rightElbow:Fe(.11,-.25,.33),rightShoulder:Fe(.2,-.3,.62),left:{pos:Fe(-.047,-.036,-.272),q:vi(Fe(0,.282,.959),Fe(-1,0,0),[0,0,-.18]),curls:[2.5,2.55,2.6,2.6],thumb:[.9,.5,.4]},leftElbow:Fe(-.2,-.34,-.12),leftShoulder:Fe(-.34,-.46,.3)},pistol:{hip:{pos:Fe(.09,-.072,-.26),rot:new It(.03,.06,-.02)},adsDistance:.32,right:{pos:Fe(.026,-.022,.07),q:vi(Fe(0,-.96,.28),Fe(1,0,0),[0,-.1,0]),curls:[.45,2,2.05,2.1],thumb:[-.2,-.8,.3]},rightElbow:Fe(.11,-.24,.32),rightShoulder:Fe(.2,-.3,.62),left:{pos:Fe(-.034,-.06,.07),q:vi(Fe(0,-.94,.34),Fe(-1,0,0),[0,.2,0]),curls:[1.6,1.7,1.75,1.8],thumb:[.2,-.5,.2]},leftElbow:Fe(-.13,-.26,.3),leftShoulder:Fe(-.2,-.32,.62)},knife:{hip:{pos:Fe(.15,-.14,-.3),rot:new It(.12,.28,-.25)},adsDistance:.3,right:{pos:Fe(.03,.034,.03),q:vi(Fe(0,-.5,.87),Fe(1,0,0),[0,-.1,0]),curls:[2,2.1,2.15,2.2],thumb:[-.3,-.9,.7]},rightElbow:Fe(.1,-.22,.3),rightShoulder:Fe(.2,-.3,.62),left:{pos:Fe(-.3,-.5,.2),q:vi(Fe(0,0,-1),Fe(0,-1,0)),curls:[1,1,1,1],thumb:[.3,0,.2]},leftElbow:Fe(-.3,-.6,.3),leftShoulder:Fe(-.32,-.7,.6)}};class Ss{constructor(e=160,t=18){this.x=0,this.v=0,this.k=e,this.c=t}step(e){return this.v+=(-this.k*this.x-this.c*this.v)*e,this.x+=this.v*e,this.x}}class xb{constructor(e){this.scene=new jl,this.camera=new hn(50,1,.01,10);const t=new ul(e);this.scene.environment=t.fromScene(new ob,.04).texture,this.scene.environmentIntensity=.55,t.dispose(),this.scene.add(new Zf("#e2f1ff","#6f6a60",1.25));const n=new hl("#fff3dd",2.4);n.position.set(-1.2,2.2,.8),this.scene.add(n);const r=new hl("#bcd8ff",.8);r.position.set(1.5,.5,-1),this.scene.add(r),this.flashLight=new rh("#ffb35a",0,.9,2),this.scene.add(this.flashLight),this.M=lb(),this.pivot=new pt,this.scene.add(this.pivot),this.rigs=[this.makeRig("rifle",ub(this.M)),this.makeRig("pistol",fb(this.M)),this.makeRig("knife",db(this.M))],this.weapon=0,this.rigs[1].group.visible=this.rigs[2].group.visible=!1;const s=this.rigs[2];s.model.root.rotation.x=.52,s.left.visible=s.leftArm.visible=!1,this.swing=0;const a=new qt(.0045,.0045,.024,8).rotateZ(Math.PI/2);this.shells=Array.from({length:10},()=>{const o=new Qe(a,this.M.brass);return o.visible=!1,this.scene.add(o),{m:o,v:new R,spin:new R,life:0}}),this.shellCursor=0,this.recoilZ=new Ss(220,22),this.recoilPitch=new Ss(180,16),this.recoilYaw=new Ss(150,14),this.recoilRoll=new Ss(150,14),this.jumpY=new Ss(90,11),this.aim=0,this.sprint=0,this.walk=0,this.phase=0,this.air=0,this.crouch=0,this.sway=new le,this.tilt=0,this.flash=0,this.time=0,this.lowered=0}makeRig(e,t){const n=mb[e],r=new pt;r.add(t.root);const s=Vu(this.M,1),a=Vu(this.M,-1);r.add(s,a),s.position.copy(n.right.pos),s.quaternion.copy(n.right.q),a.position.copy(n.left.pos),a.quaternion.copy(n.left.q),Gu(s,n.right.curls,n.right.thumb),Gu(a,n.left.curls,n.left.thumb);const o=Hu(this.M),c=Hu(this.M);r.add(o,c),this.pivot.add(r);const l=Fe(-t.sight.x,-t.sight.y,-n.adsDistance-t.sight.z);return{kind:e,P:n,group:r,model:t,right:s,left:a,rightArm:o,leftArm:c,ads:l,leftBase:{pos:n.left.pos.clone(),q:n.left.q.clone()}}}setWeapon(e){e!==this.weapon&&(this.weapon=e,this.rigs.forEach((t,n)=>t.group.visible=n===e))}fire(){if(this.weapon===2){this.swing=1;return}const e=this.weapon===0?1:1.35,t=1-this.aim*.55;this.recoilZ.v+=1.25*e*t,this.recoilPitch.v+=(5.2+Math.random()*1.6)*e*t,this.recoilYaw.v+=(Math.random()-.5)*3*t,this.recoilRoll.v+=(Math.random()-.4)*5*t,this.flash=.05;const n=this.rigs[this.weapon];n.model.flash&&(n.model.flash.visible=!0,n.model.flash.rotation.z=Math.random()*Math.PI,n.model.flash.scale.setScalar(.8+Math.random()*.45)),n.model.slide&&(n.model.slide.position.z=.03),this.ejectShell()}ejectShell(){const e=this.rigs[this.weapon],t=this.shells[this.shellCursor++%this.shells.length];e.group.updateMatrixWorld(!0),t.m.position.copy(e.model.port).applyMatrix4(e.model.root.matrixWorld),t.v.set(.9+Math.random()*.5,.75+Math.random()*.4,.15+Math.random()*.25),t.spin.set(Math.random()*20,Math.random()*30,Math.random()*10),t.life=.55,t.m.visible=!0}jump(){this.jumpY.v+=.5}land(e){this.jumpY.v-=mt(e*.045,.1,.9)}muzzleWorld(e,t=new R){const n=this.rigs[this.weapon];n.group.updateMatrixWorld(!0),t.copy(n.model.muzzle).applyMatrix4(n.model.root.matrixWorld);const r=Math.tan(Bt.degToRad(e.fov/2))/Math.tan(Bt.degToRad(this.camera.fov/2));return t.x*=r,t.y*=r,e.localToWorld(t)}update(e,t){this.time+=e;const n=this.rigs[this.weapon],r=n.P;zn[this.weapon],this.aim=On(this.aim,t.aiming?1:0,16,e),this.sprint=On(this.sprint,t.sprinting?1:0,9,e),this.walk=On(this.walk,t.ground?mt(t.speed/8.6,0,1.3):0,9,e),this.air=On(this.air,t.ground?0:1,8,e),this.crouch=On(this.crouch,t.crouched?1:0,10,e),this.phase+=e*(t.ground?t.speed:0)*(this.sprint>.5?1.05:1.3),this.sway.x=On(this.sway.x,mt(-t.lookDX*22e-5,-.03,.03),9,e),this.sway.y=On(this.sway.y,mt(t.lookDY*18e-5,-.025,.025),9,e),this.tilt=On(this.tilt,mt(-t.strafe*.012,-.08,.08),7,e);const s=this.recoilZ.step(e),a=this.recoilPitch.step(e),o=this.recoilYaw.step(e),c=this.recoilRoll.step(e),l=this.jumpY.step(e),h=this.aim,f=1-h*.92,d=Math.sin(this.phase)*.011*this.walk*f,p=-Math.abs(Math.cos(this.phase))*.009*this.walk*f,x=Math.sin(this.time*1.7)*.0016*(1-h*.8),g=new R().lerpVectors(r.hip.pos,n.ads,h);g.x+=d+this.sway.x*f,g.y+=p+x+this.sway.y*f+l*.06*f-this.crouch*.012*f,g.z+=s*.045;const m=new It(Bt.lerp(r.hip.rot.x,0,h)+a*.022+this.sway.y*.6*f+l*.05*f+x*2,Bt.lerp(r.hip.rot.y,0,h)+o*.012+this.sway.x*.8*f,Bt.lerp(r.hip.rot.z,0,h)+c*.012+d*1.4+this.tilt*f),u=this.sprint*(1-h);g.x+=-.03*u+Math.sin(this.phase)*.018*u,g.y+=-.04*u-Math.abs(Math.cos(this.phase))*.012*u,g.z+=.03*u,m.x+=-.32*u,m.y+=.72*u,m.z+=.38*u;const b=t.swap>0?t.swap/.42:0;this.lowered=On(this.lowered,t.dead?1:0,6,e);const _=Math.max(Ir(b),this.lowered);if(g.y-=.32*_,m.x-=.9*_,n.left.position.copy(n.leftBase.pos),n.left.quaternion.copy(n.leftBase.q),n.model.magazine&&(n.model.magazine.position.copy(n.model.magHome),n.model.magazine.visible=!0,n.model.magazine.rotation.set(0,0,0)),n.model.chargingHandle&&(n.model.chargingHandle.position.z=0),t.reloadT>=0&&n.model.magazine&&this.animateReload(n,t.reloadT,g,m),this.swing>0){this.swing=Math.max(0,this.swing-e/.5);const T=1-this.swing,P=Ir((T-.12)/.3),U=Ir((T-.55)/.45),S=Ir(T/.12)*(1-P);g.x+=S*.05-P*(1-U)*.22,g.y+=S*.04-P*(1-U)*.03,g.z-=P*(1-U)*.08,m.y+=S*-.4+P*(1-U)*1.25,m.z+=S*-.3+P*(1-U)*.9,m.x-=P*(1-U)*.25}if(n.model.slide&&(n.model.slide.position.z=On(n.model.slide.position.z,0,30,e)),this.pivot.position.copy(g),this.pivot.rotation.copy(m),this.camera.fov=On(this.camera.fov,t.aiming?44:50,14,e),this.camera.updateProjectionMatrix(),Xu(n.rightArm,n.right.position,r.rightElbow,r.rightShoulder),!n.left.visible)return this.flash=0,this.flashLight.intensity=0,this.updateShells(e);const M=n.left.position,w=r.leftElbow.clone().lerp(Fe(-.16,-.32,.1),mt((M.distanceTo(n.leftBase.pos)-.05)*3,0,1));Xu(n.leftArm,M,w,r.leftShoulder),this.flash=Math.max(0,this.flash-e),n.model.flash&&(n.model.flash.visible=this.flash>.012),this.flashLight.intensity=this.flash>0?.07:0,n.group.updateMatrixWorld(!0),this.flashLight.position.copy(n.model.muzzle).applyMatrix4(n.model.root.matrixWorld),n.model.reticle&&(n.model.reticle.visible=!0),this.updateShells(e)}updateShells(e){for(const t of this.shells)t.life<=0||(t.life-=e,t.v.y-=6*e,t.m.position.addScaledVector(t.v,e),t.m.rotation.x+=t.spin.x*e,t.m.rotation.y+=t.spin.y*e,t.m.rotation.z+=t.spin.z*e,t.m.visible=t.life>0)}animateReload(e,t,n,r){const s=e.left,a=e.leftBase,o=e.model.magazine,c=e.model.magHome,l=(S,y)=>Ir((t-S)/(y-S)),h=e.kind==="rifle",f=l(0,.12)*(1-l(.86,1));r.z-=f*(h?.62:.35),r.x+=f*.2,r.y+=f*.15,n.x-=f*.05,n.y+=f*.07,n.z+=f*.03;const d=Math.exp(-Math.pow((t-.6)*30,2)),p=Math.exp(-Math.pow((t-.81)*35,2));n.y+=d*.012-p*.008,r.x+=d*.05+p*.04;const x=h?Fe(-.012,-.2,-.048):Fe(-.015,-.15,.04),g=h?Fe(-.16,-.42,.05):Fe(-.15,-.38,.12),m=h?Fe(-.012,-.235,-.048):Fe(-.015,-.17,.045),u=h?Fe(-.012,-.19,-.048):Fe(-.015,-.135,.042),b=Fe(-.02,.06,.15),_=vi(Fe(0,0,-1),Fe(0,-1,0),[0,0,.4]),M=vi(Fe(0,0,-1),Fe(1,0,0),[.3,0,0]),w=h?[[0,a.pos,a.q],[.1,x,_],[.17,x,_],[.32,g,_],[.5,m,_],[.6,u,_],[.7,b,M],[.76,b.clone().add(Fe(0,0,.055)),M],[.8,b.clone().add(Fe(0,0,.055)),M],[1,a.pos,a.q]]:[[0,a.pos,a.q],[.12,x,_],[.22,x,_],[.4,g,_],[.6,m,_],[.7,u,_],[1,a.pos,a.q]];for(let S=0;S<w.length-1;S++){const[y,D,k]=w[S],[I,B,V]=w[S+1];if(t>=y&&t<=I){const W=Ir((t-y)/(I-y));s.position.lerpVectors(D,B,W),s.quaternion.slerpQuaternions(k,V,W);break}}const T=h?.15:.18,P=h?.34:.42,U=h?.6:.7;if(t>T&&t<P){const S=(t-T)*(h?2.1:1.45);o.position.set(c.x,c.y-4.5*S*S-.02,c.z+S*.05),o.rotation.x=S*.8,o.visible=S<.5}else t>=P&&t<U&&(o.position.copy(s.position).add(c).sub(u),o.position.y=Math.min(c.y,o.position.y));h&&e.model.chargingHandle&&(e.model.chargingHandle.position.z=t>.7&&t<.8?.055*l(.7,.76):0),!h&&e.model.slide&&(e.model.slide.position.z=t>.72&&t<.8?.03:e.model.slide.position.z)}}const qu=["#c9463d","#3f7fc4","#e0a62b","#4ea65a","#9b59c9","#e07a35","#2fb5b0","#d14f8f","#7b8a35","#5b6ee0","#b5653f","#6a7d8c"],Ra=new He;class Gi{constructor(){this.list=[]}add(e,t,n){e=e.index?e.toNonIndexed():e,n&&e.applyMatrix4(n),Ra.set(t);const r=e.attributes.position.count,s=new Float32Array(r*3);for(let a=0;a<r;a++)s[a*3]=Ra.r,s[a*3+1]=Ra.g,s[a*3+2]=Ra.b;return e.setAttribute("color",new nn(s,3)),e.attributes.uv||e.setAttribute("uv",new nn(new Float32Array(r*2),2)),this.list.push(e),this}box(e,t,n,r,s,a,o,c=.02,l){const h=c>0?new js(s,a,o,1,Math.min(c,s/2,a/2,o/2)*.99):new jt(s,a,o);return l&&h.applyMatrix4(new tt().makeRotationFromEuler(new It(...l))),this.add(h.translate(t,n,r),e)}limb(e,t,n,r,s,a=.03){const o=new R(...t),c=new R(...n),l=c.clone().sub(o),h=l.length(),f=new js(r,h,s,1,Math.min(a,r/2,s/2)*.99),d=new tt().compose(o.clone().add(c).multiplyScalar(.5),new jn().setFromUnitVectors(new R(0,1,0),l.normalize()),new R(1,1,1));return this.add(f,e,d)}cylZ(e,t,n,r,s,a,o=8){return this.add(new qt(s,s,a,o).rotateX(Math.PI/2).translate(t,n,r),e)}mesh(e){const t=new Qe(lo(this.list,!1),e);return t.castShadow=!0,t.receiveShadow=!0,t}}const Hi="#4f5745",cc="#3d4437",gb="#c8987a",_n="#1d2124",Ur="#5d5a4c",_b="#2a2622",$u="#30353a";function vb(i=0){const e=qu[i%qu.length],t=new tr({vertexColors:!0,emissive:"#000000"}),n=new pt,r=new pt;n.add(r);const s=new pt;s.position.y=.95,r.add(s);const a=new Gi().box(cc,0,-.02,0,.36,.2,.22).box(_n,0,.06,0,.38,.06,.24,.01).box(Ur,.15,-.02,-.06,.08,.12,.08).box(Ur,-.17,-.06,.02,.06,.16,.14);s.add(a.mesh(t));const o=[];for(const I of[-1,1]){const B=new pt;B.position.set(I*.1,-.04,0),s.add(B);const V=new Gi().box(Hi,0,-.22,0,.16,.46,.18,.04);I>0&&V.box(Ur,.09,-.2,0,.05,.14,.12),B.add(V.mesh(t));const W=new pt;W.position.y=-.44,B.add(W);const ne=new Gi().box(Hi,0,-.2,0,.14,.42,.16,.04).box(_n,0,-.02,-.08,.12,.11,.05,.02).box(_b,0,-.44,-.04,.15,.12,.27,.03);W.add(ne.mesh(t)),o.push({thigh:B,shin:W,side:I})}const c=new pt;c.position.y=.06,s.add(c);const l=new Gi().box(Hi,0,.28,0,.44,.52,.25,.06).box(e,0,.3,0,.48,.38,.3,.04).box(Ur,0,.18,-.165,.38,.12,.05,.02).box(Ur,-.12,.33,-.165,.1,.12,.05,.02).box(Ur,.12,.33,-.165,.1,.12,.05,.02).box("#2c3a2c",0,.3,.2,.32,.36,.12,.04).box(_n,.11,.48,.2,.03,.18,.03,0).box(cc,0,.55,0,.18,.06,.16);c.add(l.mesh(t));const h=new pt;h.position.y=.6,c.add(h);const f=new Gi().box(gb,0,.11,0,.2,.23,.22,.05).box(cc,0,.04,0,.215,.1,.225,.04).box("#3a4231",0,.22,.01,.27,.15,.28,.07).box("#3a4231",0,.16,.06,.26,.07,.2,.03).box(_n,0,.15,-.115,.2,.06,.04,.02).box("#9fd6e0",0,.15,-.135,.16,.035,.01,0).box(_n,.125,.12,0,.04,.09,.09,.02).box(_n,-.125,.12,0,.04,.09,.09,.02).box(e,0,.3,.02,.06,.02,.12,0);h.add(f.mesh(t));const d=new pt;d.position.y=.47,c.add(d);const p=new Gi().limb(Hi,[.25,.02,0],[.23,-.22,-.08],.13,.13).limb(Hi,[.23,-.22,-.08],[.1,-.16,-.3],.11,.11).box(_n,.08,-.16,-.32,.08,.08,.09).limb(Hi,[-.25,.02,0],[-.24,-.2,-.2],.13,.13).limb(Hi,[-.24,-.2,-.2],[-.02,-.1,-.52],.11,.11).box(_n,0,-.09,-.55,.08,.08,.09).box(e,.255,-.05,-.03,.14,.05,.14,.01).box(e,-.255,-.05,-.03,.14,.05,.14,.01);d.add(p.mesh(t));const g=new Gi().box($u,.06,-.08,-.36,.06,.08,.36,.01).box($u,.06,-.075,-.6,.065,.065,.2,.01).cylZ(_n,.06,-.075,-.78,.014,.18).box(_n,.06,-.16,-.38,.045,.14,.07,.01,[.25,0,0]).box(_n,.06,-.14,-.24,.04,.12,.05,.01,[-.3,0,0]).box(_n,.06,-.07,-.08,.05,.11,.18,.01).box(_n,.06,-.015,-.4,.05,.05,.08,.01).mesh(t);d.add(g);const m=new sl(new Ja({map:sh(),color:"#ffcf7a",blending:hi,depthWrite:!1,transparent:!0}));m.position.set(.06,-.075,-.92),m.scale.setScalar(.55),m.visible=!1,d.add(m);const u=document.createElement("canvas");u.width=256,u.height=64;const b=new so(u);b.colorSpace=kt;const _=new sl(new Ja({map:b,transparent:!0,depthWrite:!1}));_.position.y=2.15,_.center.set(.5,0),n.add(_);let M="",w=0,T=0,P=0,U=0,S=!1;const y={v:0},D=(I,B,V,W)=>Bt.damp(I,B,V,W);function k(I){const B=I.name+"|"+Math.ceil(I.hp)+"|"+(I.protect>0)+"|"+(I.hp>0)+"|"+(I.connected!==!1)+"|"+e;if(B===M)return;M=B;const V=u.getContext("2d");V.clearRect(0,0,256,64),V.font='800 26px "Barlow Condensed", "Arial Narrow", sans-serif',V.textAlign="center",V.lineWidth=5,V.strokeStyle="#10181f",V.strokeText(I.name,128,26),V.fillStyle="#ffffff",V.fillText(I.name,128,26),V.fillStyle=e,V.fillRect(46,38,8,10),V.fillStyle="#10181fcc",V.fillRect(58,38,140,10),V.fillStyle=I.protect>0?"#6ee8ff":I.hp>50?"#9be35a":I.hp>25?"#ffc04a":"#ff5a4a",V.fillRect(60,40,136*Math.max(0,I.hp)/100,6),b.needsUpdate=!0}return{root:n,flashAt:-100,color:e,hit(){P=.12},update(I,B,V,W){const ne=I.hp<=0;ne&&!S&&(T=0),!ne&&S&&(U=.35),S=ne,n.position.set(I.x,I.y,I.z),n.rotation.y=I.yaw;const q=-I.vx*Math.sin(I.yaw)-I.vz*Math.cos(I.yaw),ae=I.vx*Math.cos(I.yaw)-I.vz*Math.sin(I.yaw),ce=Math.hypot(I.vx,I.vz),Se=ce>.6&&I.ground;w+=B*ce*(I.crouched?3.2:2.3);const $e=q<-.3?-1:1,Ke=Se&&Math.abs(ae)>.5?Bt.clamp(Math.atan2(ae,Math.abs(q)+.01)*$e*-1,-.85,.85):0;y.v=D(y.v,Ke,10,B),s.rotation.y=y.v,c.rotation.y=-y.v;const et=Math.min(.85,ce*.085)*(I.sprinting?1.15:1);let nt=.95+(Se?Math.abs(Math.cos(w))*.04:0);for(const oe of o){const Le=Math.sin(w+(oe.side>0?0:Math.PI));let Ee=Se?Le*et*$e:0,We=Se?-Math.max(0,Math.cos(w+(oe.side>0?0:Math.PI)))*et*1.3:0;I.ground||(Ee=oe.side>0?.55:-.15,We=oe.side>0?-.9:-.4),I.crouched&&(Ee=1.25+Ee*.4,We=-1.95+We*.3),I.slide>0&&(Ee=oe.side>0?1.35:.6,We=oe.side>0?-.15:-1.6),oe.thigh.rotation.x=D(oe.thigh.rotation.x,Ee,18,B),oe.shin.rotation.x=D(oe.shin.rotation.x,We,18,B)}I.crouched&&(nt=.6),I.slide>0&&(nt=.45),s.position.y=D(s.position.y,nt,16,B);const j=I.slide>0?.55:I.sprinting?-.2:0;c.rotation.x=D(c.rotation.x,j+I.pitch*.3,14,B),h.rotation.x=I.pitch*.4-j*.6;const K=I.sprinting&&!I.aiming?1:0;if(d.rotation.x=D(d.rotation.x,I.pitch*.7-j-K*.6,18,B),d.rotation.y=D(d.rotation.y,K*.5,12,B),m.visible=V-this.flashAt<.06,m.visible&&(m.material.rotation=Math.random()*6),ne){T+=B;const oe=Math.min(1,T/.45);r.rotation.x=-oe*oe*1.45,r.position.y=-oe*.15,n.visible=T<2.2,_.visible=!1}else{r.rotation.x=0,r.position.y=0,n.visible=!0,_.visible=!0,U=Math.max(0,U-B);const oe=1-U*.6;r.scale.set(oe,oe,oe)}if(P=Math.max(0,P-B),t.emissive.setRGB(P>0?.6:I.protect>0?.05:0,P>0?.08:I.protect>0?.25:0,P>0?.05:I.protect>0?.32:0),!ne){k(I);const oe=W?W.distanceTo(n.position):10,Le=Bt.clamp(oe*.085,1.5,6);_.scale.set(Le,Le/4,1),_.position.y=(I.crouched?1.6:2.05)+(I.slide>0?-.4:0)}},dispose(){n.traverse(I=>{I.isMesh&&I.geometry.dispose()}),t.dispose(),b.dispose(),_.material.dispose(),m.material.dispose()}}}const Nr=new tt,Wi=new jn,lc=new R,Ms=new R,Yu=new He,ju=.1,hc=new R(0,0,1),Xi=new tt().makeScale(0,0,0);class yb{constructor(e){this.scene=e,this.maxP=360,this.particles=new ka(new jt(1,1,1),new $n({color:"#ffffff"}),this.maxP),this.particles.instanceMatrix.setUsage(Mo),this.particles.frustumCulled=!1,this.p=Array.from({length:this.maxP},()=>({pos:new R,vel:new R,life:0,max:1,size:.04,gravity:0,drag:0,spin:0}));for(let n=0;n<this.maxP;n++)this.particles.setMatrixAt(n,Xi),this.particles.setColorAt(n,Yu.set("#ffffff"));this.pCursor=0,e.add(this.particles),this.tracerCount=0,this.maxT=48;const t=new jt(1,1,1).translate(0,0,.5);this.tracers=new ka(t,new $n({color:"#ffe3a3",transparent:!0,opacity:.85,blending:hi,depthWrite:!1}),this.maxT),this.tracerOpacity=new al(new Float32Array(this.maxT),1),this.tracerOpacity.setUsage(Mo),t.setAttribute("tracerOpacity",this.tracerOpacity),this.tracers.material.onBeforeCompile=n=>{n.vertexShader=`attribute float tracerOpacity; varying float vTracerOpacity;
`+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vTracerOpacity = tracerOpacity;`),n.fragmentShader=`varying float vTracerOpacity;
`+n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vTracerOpacity;`)},this.tracers.instanceMatrix.setUsage(Mo),this.tracers.frustumCulled=!1,this.t=Array.from({length:this.maxT},()=>({from:new R,dir:new R,len:0,travelled:0,life:0}));for(let n=0;n<this.maxT;n++)this.tracers.setMatrixAt(n,Xi);this.tCursor=0,e.add(this.tracers),this.maxD=160,this.decals=new ka(new tn(1,1),new tr({map:eb(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),this.maxD),this.decals.frustumCulled=!1;for(let n=0;n<this.maxD;n++)this.decals.setMatrixAt(n,Xi);this.dCursor=0,e.add(this.decals),this.glows=Array.from({length:24},()=>{const n=new sl(new Ja({map:sh(),color:"#ffd28a",blending:hi,depthWrite:!1,transparent:!0}));return n.visible=!1,e.add(n),{s:n,life:0,max:1,size:1}}),this.gCursor=0,this.pillars=Array.from({length:6},()=>{const n=new Qe(new qt(.7,.7,4,20,1,!0),new $n({color:"#7fe8ff",transparent:!0,opacity:0,blending:hi,depthWrite:!1,side:Hn}));return n.visible=!1,e.add(n),{m:n,life:0}}),this.pillarCursor=0,this.light=new rh("#ffb560",0,9,2),e.add(this.light),this.lightLife=0}emit(e,t,n,r=.4,s=.04,a=14,o=1.5){const c=this.p[this.pCursor];this.particles.setColorAt(this.pCursor,Yu.set(n)),this.particles.instanceColor.needsUpdate=!0,this.pCursor=(this.pCursor+1)%this.maxP,c.pos.copy(e),c.vel.copy(t),c.life=c.max=r,c.size=s,c.gravity=a,c.drag=o,c.spin=Math.random()*10}impact(e,t,{surface:n="concrete",decal:r=!0}={}){const a=(t?Ms.set(t.x,t.y,t.z):Ms.set(0,1,0)).clone();for(let o=0;o<6;o++){const c=a.clone().multiplyScalar(2+Math.random()*3).add(new R((Math.random()-.5)*4,Math.random()*2.5,(Math.random()-.5)*4));this.emit(e,c,o<3?"#ffd27a":n==="wood"?"#a77c4d":"#d9d5cc",.25+Math.random()*.2,o<3?.025:.05,14)}for(let o=0;o<3;o++)this.emit(e,a.clone().multiplyScalar(.8).add(new R(Math.random()-.5,Math.random()*.6,Math.random()-.5)),"#cfcac0",.6,.12,-.6,3);this.glow(e,.6,.06,"#ffd9a0"),r&&t&&this.decal(e,a)}decal(e,t){Wi.setFromUnitVectors(hc,t),Wi.multiply(new jn().setFromAxisAngle(hc,Math.random()*Math.PI*2));const n=.11+Math.random()*.05;Nr.compose(Ms.copy(e).addScaledVector(t,.004),Wi,lc.set(n,n,n)),this.decals.setMatrixAt(this.dCursor,Nr),this.decals.instanceMatrix.needsUpdate=!0,this.dCursor=(this.dCursor+1)%this.maxD}blood(e,t,n=!1){for(let r=0;r<(n?14:8);r++){const s=new R(t.x,t.y,t.z).multiplyScalar(2+Math.random()*2).add(new R((Math.random()-.5)*3,Math.random()*2.5,(Math.random()-.5)*3));this.emit(e,s,r%3?"#b3262a":"#7a1418",.45,.045+Math.random()*.03,12)}}tracer(e,t,n=260){this.tracerCount++;const r=this.t[this.tCursor];this.tCursor=(this.tCursor+1)%this.maxT,r.from.copy(e),r.dir.subVectors(t,e),r.len=r.dir.length(),r.dir.normalize(),r.travelled=Math.min(r.len,3.5),r.life=ju,r.speed=n,this.drawTracer((this.tCursor+this.maxT-1)%this.maxT)}glow(e,t=1,n=.06,r="#ffd28a"){const s=this.glows[this.gCursor];this.gCursor=(this.gCursor+1)%this.glows.length,s.s.position.copy(e),s.s.material.color.set(r),s.s.visible=!0,s.life=s.max=n,s.size=t,s.s.scale.setScalar(t)}muzzle(e,t=!1){this.glow(e,t?.9:.7,.05),this.light.position.copy(e),this.light.intensity=t?14:8,this.lightLife=.05}death(e,t){for(let n=0;n<26;n++){const r=new R((Math.random()-.5)*5,Math.random()*5,(Math.random()-.5)*5);this.emit(e.clone().add(new R(0,.6+Math.random()*.9,0)),r,n%2?t:"#e8e4da",.8+Math.random()*.4,.07+Math.random()*.06,9,2)}}respawn(e){const t=this.pillars[this.pillarCursor];this.pillarCursor=(this.pillarCursor+1)%this.pillars.length,t.m.position.set(e.x,e.y+2,e.z),t.m.visible=!0,t.life=.8;for(let n=0;n<16;n++){const r=n/16*Math.PI*2;this.emit(new R(e.x+Math.cos(r)*.6,e.y+.1,e.z+Math.sin(r)*.6),new R(Math.cos(r)*.4,2.5+Math.random()*2,Math.sin(r)*.4),"#9ff0ff",.9,.06,-1,1)}}drawTracer(e){const t=this.t[e];if(this.tracerOpacity.setX(e,t.life/ju),this.tracerOpacity.needsUpdate=!0,t.life<=0)this.tracers.setMatrixAt(e,Xi);else{const n=Math.min(t.len,Math.max(.01,t.travelled)),r=Math.max(0,n-3.5);Wi.setFromUnitVectors(hc,t.dir),Nr.compose(Ms.copy(t.from).addScaledVector(t.dir,r),Wi,lc.set(.018,.018,Math.max(.01,n-r))),this.tracers.setMatrixAt(e,Nr)}this.tracers.instanceMatrix.needsUpdate=!0}clear(){for(let e=0;e<this.maxT;e++)this.t[e].life=0,this.drawTracer(e);for(let e=0;e<this.maxP;e++)this.p[e].life=0,this.particles.setMatrixAt(e,Xi);for(let e=0;e<this.maxD;e++)this.decals.setMatrixAt(e,Xi);this.particles.instanceMatrix.needsUpdate=this.decals.instanceMatrix.needsUpdate=!0;for(const e of this.glows)e.life=0,e.s.visible=!1;for(const e of this.pillars)e.life=0,e.m.visible=!1;this.lightLife=this.light.intensity=0,this.tCursor=this.pCursor=this.dCursor=this.gCursor=this.pillarCursor=0}update(e){for(let t=0;t<this.maxP;t++){const n=this.p[t];if(n.life<=0)continue;if(n.life-=e,n.life<=0){this.particles.setMatrixAt(t,Xi);continue}n.vel.y-=n.gravity*e,n.vel.multiplyScalar(Math.exp(-n.drag*e)),n.pos.addScaledVector(n.vel,e),n.pos.y<.02&&n.gravity>0&&(n.pos.y=.02,n.vel.y*=-.3,n.vel.x*=.6,n.vel.z*=.6);const r=n.life/n.max,s=n.size*(.4+.6*r);Wi.setFromAxisAngle(Ms.set(.3,1,.2).normalize(),n.spin*n.life),Nr.compose(n.pos,Wi,lc.set(s,s,s)),this.particles.setMatrixAt(t,Nr)}this.particles.instanceMatrix.needsUpdate=!0;for(let t=0;t<this.maxT;t++){const n=this.t[t];n.life<=0||(n.life=Math.max(0,n.life-e),n.travelled+=n.speed*e,this.drawTracer(t))}this.tracers.instanceMatrix.needsUpdate=!0;for(const t of this.glows)t.life<=0||(t.life-=e,t.s.visible=t.life>0,t.s.material.opacity=Math.max(0,t.life/t.max));for(const t of this.pillars)t.life<=0||(t.life-=e,t.m.visible=t.life>0,t.m.material.opacity=Math.max(0,t.life)*.55,t.m.scale.set(1+(.8-t.life)*.5,1,1+(.8-t.life)*.5));this.lightLife-=e,this.lightLife<=0&&(this.light.intensity=0)}}class bb{constructor(){this.ctx=null,this.enabled=!0,this.volume=.8}ensure(){if(!this.enabled)return null;try{if(!this.ctx){this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=this.volume;const e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,this.master.connect(e).connect(this.ctx.destination);const t=this.ctx.sampleRate;this.noise=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const n=this.noise.getChannelData(0);for(let r=0;r<t;r++)n[r]=Math.random()*2-1}return this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}catch{return null}}out(e=0,t=1){const n=this.ctx.createGain();if(n.gain.value=t,e&&this.ctx.createStereoPanner){const r=this.ctx.createStereoPanner();r.pan.value=Math.max(-1,Math.min(1,e)),n.connect(r).connect(this.master)}else n.connect(this.master);return n}noiseBurst(e,{t=0,dur:n=.1,gain:r=.5,type:s="bandpass",freq:a=1800,q:o=.8,sweep:c=null,attack:l=.002}={}){const h=this.ctx,f=h.currentTime+t,d=h.createBufferSource();d.buffer=this.noise,d.playbackRate.value=.8+Math.random()*.4;const p=h.createBiquadFilter();p.type=s,p.frequency.setValueAtTime(a,f),p.Q.value=o,c&&p.frequency.exponentialRampToValueAtTime(c,f+n);const x=h.createGain();x.gain.setValueAtTime(1e-4,f),x.gain.exponentialRampToValueAtTime(r,f+l),x.gain.exponentialRampToValueAtTime(1e-4,f+n),d.connect(p).connect(x).connect(e),d.start(f,Math.random()*.5),d.stop(f+n+.05)}tone(e,{t=0,dur:n=.1,gain:r=.3,freq:s=440,end:a=null,type:o="sine",attack:c=.003}={}){const l=this.ctx,h=l.currentTime+t,f=l.createOscillator(),d=l.createGain();f.type=o,f.frequency.setValueAtTime(s,h),a&&f.frequency.exponentialRampToValueAtTime(a,h+n),d.gain.setValueAtTime(1e-4,h),d.gain.exponentialRampToValueAtTime(r,h+c),d.gain.exponentialRampToValueAtTime(1e-4,h+n),f.connect(d).connect(e),f.start(h),f.stop(h+n+.05)}shot(e=0,t=0,n=0){if(!this.ensure())return;const r=Math.min(1,t/60),s=t?Math.max(.04,.55/(1+t*.12)):.6,a=this.out(n,s);let o=a;if(t>4){const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=7e3-r*5600,l.connect(a),o=l}const c=e===1;this.noiseBurst(o,{dur:c?.07:.09,gain:.9,freq:c?2600:2e3,q:.6,sweep:700}),this.noiseBurst(o,{dur:c?.22:.32,gain:.35,type:"lowpass",freq:1400,sweep:200,attack:.004}),this.tone(o,{dur:.13,gain:c?.5:.75,freq:c?190:140,end:42,type:"sine"}),this.tone(o,{dur:.04,gain:.18,freq:c?1300:900,end:300,type:"square"}),t||this.noiseBurst(o,{t:.05,dur:.035,gain:.07,freq:5200,q:4})}swing(){if(!this.ensure())return;const e=this.out(.1,.4);this.noiseBurst(e,{dur:.18,gain:.6,freq:900,q:.7,sweep:3200,attack:.02})}pickup(){if(!this.ensure())return;const e=this.out(0,.4);this.tone(e,{dur:.08,gain:.25,freq:660,type:"triangle"}),this.tone(e,{t:.07,dur:.12,gain:.25,freq:990,type:"triangle"}),this.noiseBurst(e,{t:.02,dur:.06,gain:.4,freq:2400,q:3})}dry(){if(!this.ensure())return;const e=this.out(0,.5);this.tone(e,{dur:.03,gain:.3,freq:2400,end:1200,type:"square"})}reload(e=0){if(!this.ensure())return;const t=this.out(.15,.5),n=e===1?[.14,.75,.98]:[.25,1.15,1.55];this.noiseBurst(t,{t:n[0],dur:.05,gain:.5,freq:3200,q:3}),this.tone(t,{t:n[0],dur:.06,gain:.12,freq:1700,end:900,type:"triangle"}),this.noiseBurst(t,{t:n[1],dur:.04,gain:.6,freq:2400,q:4}),this.noiseBurst(t,{t:n[1]+.06,dur:.05,gain:.7,freq:1600,q:3}),this.noiseBurst(t,{t:n[2],dur:.12,gain:.35,freq:1200,q:1,sweep:3800}),this.noiseBurst(t,{t:n[2]+.15,dur:.05,gain:.7,freq:2800,q:3})}swap(){if(!this.ensure())return;const e=this.out(0,.35);this.noiseBurst(e,{dur:.08,gain:.5,freq:2200,q:2}),this.noiseBurst(e,{t:.14,dur:.05,gain:.5,freq:3e3,q:3})}step(e=1){if(!this.ensure())return;const t=this.out((Math.random()-.5)*.2,.18*e);this.noiseBurst(t,{dur:.07,gain:.6,type:"lowpass",freq:480+Math.random()*200,sweep:120})}jump(){if(!this.ensure())return;const e=this.out(0,.2);this.noiseBurst(e,{dur:.1,gain:.5,type:"lowpass",freq:700,sweep:200})}land(e=8){if(!this.ensure())return;const t=this.out(0,Math.min(.45,.1+e*.025));this.noiseBurst(t,{dur:.14,gain:.8,type:"lowpass",freq:380,sweep:90}),this.tone(t,{dur:.1,gain:.3,freq:90,end:40})}slide(){if(!this.ensure())return;const e=this.out(0,.25);this.noiseBurst(e,{dur:.55,gain:.4,freq:900,q:.6,sweep:300,attack:.03})}hit(e=!1){if(!this.ensure())return;const t=this.out(0,.5);this.tone(t,{dur:.05,gain:.35,freq:e?1900:1250,end:e?1700:1e3,type:"triangle"}),e&&this.tone(t,{t:.03,dur:.18,gain:.25,freq:2600,end:2500,type:"sine"})}kill(e=1){if(!this.ensure())return;const t=this.out(0,.45),n=520+Math.min(e,6)*40;this.tone(t,{dur:.09,gain:.3,freq:n,type:"triangle"}),this.tone(t,{t:.08,dur:.18,gain:.3,freq:n*1.5,type:"triangle"})}hurt(){if(!this.ensure())return;const e=this.out(0,.5);this.tone(e,{dur:.16,gain:.5,freq:110,end:55,type:"sawtooth"}),this.noiseBurst(e,{dur:.1,gain:.3,type:"lowpass",freq:600})}beep(e=!1){if(!this.ensure())return;const t=this.out(0,.35);this.tone(t,{dur:e?.35:.12,gain:.35,freq:e?1320:880,type:"square"})}ui(){if(!this.ensure())return;const e=this.out(0,.25);this.tone(e,{dur:.05,gain:.2,freq:660,end:990,type:"triangle"})}death(){if(!this.ensure())return;const e=this.out(0,.5);this.tone(e,{dur:.6,gain:.35,freq:300,end:70,type:"triangle"})}}class Sb{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return Mb(e).buffer}}function Mb(i){let e=0;for(const r of i)e+=r.byteLength;const t=new Uint8Array(e);let n=0;for(const r of i){const s=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);t.set(s,n),n+=r.byteLength}return t}function dd(i){return new Eb(i).unpack()}function pd(i){const e=new Tb,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class Eb{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,r="",s,a;for(;n<e;)s=t[n],s<160?(a=s,n++):(s^192)<32?(a=(s&31)<<6|t[n+1]&63,n+=2):(s^224)<16?(a=(s&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(a=(s&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),r+=String.fromCodePoint(a);return this.index+=e,r}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const r=this.unpack();t[r]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,r=e&8388607|8388608;return(t===0?1:-1)*r*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,r=(e>>20&2047)-1023,a=(e&1048575|1048576)*2**(r-20)+t*2**(r-52);return(n===0?1:-1)*a}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class Tb{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=r=>{if(r<t){const s=this.pack(e[r]);return s instanceof Promise?s.then(()=>n(r+1)):n(r+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),r=e/2**n-1,s=Math.floor(r*2**52),a=2**32,o=t<<31|n+1023<<20|s/a&1048575,c=s%a;this._bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const r=s=>{if(s<t.length){const a=t[s];if(e.hasOwnProperty(a)){this.pack(a);const o=this.pack(e[a]);if(o instanceof Promise)return o.then(()=>r(s+1))}return r(s+1)}};return r(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new Sb,this._textEncoder=new TextEncoder}}let md=!0,xd=!0;function ws(i,e,t){const n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function or(i,e,t){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){ah("Unable to polyfill events");return}const r=i.RTCPeerConnection.prototype,s=r.addEventListener;r.addEventListener=function(o,c){if(o!==e)return s.apply(this,arguments);const l=h=>{const f=t(h);f&&(c.handleEvent?c.handleEvent(f):c(f))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),s.apply(this,[o,l])};const a=r.removeEventListener;r.removeEventListener=function(o,c){if(o!==e||!this._eventMap||!this._eventMap[e])return a.apply(this,arguments);if(!this._eventMap[e].has(c))return a.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,a.apply(this,[o,l])},Object.defineProperty(r,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}function Cb(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(md=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function Ab(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(xd=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function ah(){if(typeof window=="object"){if(md)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function oh(i,e){xd&&console.warn(i+" is deprecated, please use "+e+" instead.")}function wb(i){const e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(r=>r.brand==="Chromium");if(n){const r=parseInt(n.version,10);if(r>=90)return{browser:"chrome",version:r}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(ws(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(ws(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(ws(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=ws(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Zu(i){return Object.prototype.toString.call(i)==="[object Object]"}function gd(i){return Zu(i)?Object.keys(i).reduce(function(e,t){const n=Zu(i[t]),r=n?gd(i[t]):i[t],s=n&&!Object.keys(r).length;return r===void 0||s?e:Object.assign(e,{[t]:r})},{}):i}function xl(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?xl(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(r=>{xl(i,i.get(r),t)})}))}function Ku(i,e,t){const n=t?"outbound-rtp":"inbound-rtp",r=new Map;if(e===null)return r;const s=[];return i.forEach(a=>{a.type==="track"&&a.trackIdentifier===e.id&&s.push(a)}),s.forEach(a=>{i.forEach(o=>{o.type===n&&o.trackId===a.id&&xl(i,o,r)})}),r}const Ju=ah;function _d(i,e){if(e.version>=64)return;const t=i&&i.navigator;if(!t.mediaDevices)return;const n=function(o){if(typeof o!="object"||o.mandatory||o.optional)return o;const c={};return Object.keys(o).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const h=typeof o[l]=="object"?o[l]:{ideal:o[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);const f=function(d,p){return d?d+p.charAt(0).toUpperCase()+p.slice(1):p==="deviceId"?"sourceId":p};if(h.ideal!==void 0){c.optional=c.optional||[];let d={};typeof h.ideal=="number"?(d[f("min",l)]=h.ideal,c.optional.push(d),d={},d[f("max",l)]=h.ideal,c.optional.push(d)):(d[f("",l)]=h.ideal,c.optional.push(d))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[f("",l)]=h.exact):["min","max"].forEach(d=>{h[d]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[f(d,l)]=h[d])})}),o.advanced&&(c.optional=(c.optional||[]).concat(o.advanced)),c},r=function(o,c){if(e.version>=61)return c(o);if(o=JSON.parse(JSON.stringify(o)),o&&typeof o.audio=="object"){const l=function(h,f,d){f in h&&!(d in h)&&(h[d]=h[f],delete h[f])};o=JSON.parse(JSON.stringify(o)),l(o.audio,"autoGainControl","googAutoGainControl"),l(o.audio,"noiseSuppression","googNoiseSuppression"),o.audio=n(o.audio)}if(o&&typeof o.video=="object"){let l=o.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const h=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete o.video.facingMode;let f;if(l.exact==="environment"||l.ideal==="environment"?f=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(f=["front"]),f)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(x=>x.kind==="videoinput");let p=d.find(x=>f.some(g=>x.label.toLowerCase().includes(g)));return!p&&d.length&&f.includes("back")&&(p=d[d.length-1]),p&&(o.video.deviceId=l.exact?{exact:p.deviceId}:{ideal:p.deviceId}),o.video=n(o.video),Ju("chrome: "+JSON.stringify(o)),c(o)})}o.video=n(o.video)}return Ju("chrome: "+JSON.stringify(o)),c(o)},s=function(o){return e.version>=64?o:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[o.name]||o.name,message:o.message,constraint:o.constraint||o.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},a=function(o,c,l){r(o,h=>{t.webkitGetUserMedia(h,c,f=>{l&&l(s(f))})})};if(t.getUserMedia=a.bind(t),t.mediaDevices.getUserMedia){const o=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return r(c,l=>o(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(f=>{f.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(s(h))))}}}function vd(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function yd(i,e){if(!(e.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=r=>{r.stream.addEventListener("addtrack",s=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===s.track.id):a={track:s.track};const o=new Event("track");o.track=s.track,o.receiver=a,o.transceiver={receiver:a},o.streams=[r.stream],this.dispatchEvent(o)}),r.stream.getTracks().forEach(s=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===s.id):a={track:s};const o=new Event("track");o.track=s,o.receiver=a,o.transceiver={receiver:a},o.streams=[r.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else or(i,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function bd(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){const e=function(r,s){return{track:s,get dtmf(){return this._dtmf===void 0&&(s.kind==="audio"?this._dtmf=r.createDTMFSender(s):this._dtmf=null),this._dtmf},_pc:r}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const r=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,c){let l=r.apply(this,arguments);return l||(l=e(this,o),this._senders.push(l)),l};const s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){s.apply(this,arguments);const c=this._senders.indexOf(o);c!==-1&&this._senders.splice(c,1)}}const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(s){this._senders=this._senders||[],t.apply(this,[s]),s.getTracks().forEach(a=>{this._senders.push(e(this,a))})};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(s){this._senders=this._senders||[],n.apply(this,[s]),s.getTracks().forEach(a=>{const o=this._senders.find(c=>c.track===a);o&&this._senders.splice(this._senders.indexOf(o),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){const e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(r=>r._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Sd(i,e){if(e.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){const n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){const a=n.apply(this,[]);return a.forEach(o=>o._pc=this),a});const r=i.RTCPeerConnection.prototype.addTrack;r&&(i.RTCPeerConnection.prototype.addTrack=function(){const a=r.apply(this,arguments);return a._pc=this,a}),i.RTCRtpSender.prototype.getStats=function(){const a=this;return this._pc.getStats().then(o=>Ku(o,a.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){const n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){const s=n.apply(this,[]);return s.forEach(a=>a._pc=this),s}),or(i,"track",r=>(r.receiver._pc=r.srcElement,r)),i.RTCRtpReceiver.prototype.getStats=function(){const s=this;return this._pc.getStats().then(a=>Ku(a,s.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;const t=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){const r=arguments[0];let s,a,o;return this.getSenders().forEach(c=>{c.track===r&&(s?o=!0:s=c)}),this.getReceivers().forEach(c=>(c.track===r&&(a?o=!0:a=c),c.track===r)),o||s&&a?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):s?s.getStats():a?a.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Md(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(a=>this._shimmedLocalStreams[a][0])};const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,o){if(!o)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[o.id]?this._shimmedLocalStreams[o.id].indexOf(c)===-1&&this._shimmedLocalStreams[o.id].push(c):this._shimmedLocalStreams[o.id]=[o,c],c};const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(a){this._shimmedLocalStreams=this._shimmedLocalStreams||{},a.getTracks().forEach(l=>{if(this.getSenders().find(f=>f.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const o=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>o.indexOf(l)===-1);this._shimmedLocalStreams[a.id]=[a].concat(c)};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[a.id],n.apply(this,arguments)};const r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},a&&Object.keys(this._shimmedLocalStreams).forEach(o=>{const c=this._shimmedLocalStreams[o].indexOf(a);c!==-1&&this._shimmedLocalStreams[o].splice(c,1),this._shimmedLocalStreams[o].length===1&&delete this._shimmedLocalStreams[o]}),r.apply(this,arguments)}}function Ed(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Md(i);const t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){const h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(f=>this._reverseStreams[f.id])};const n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(f=>{if(this.getSenders().find(p=>p.track===f))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){const f=new i.MediaStream(h.getTracks());this._streams[h.id]=f,this._reverseStreams[f.id]=h,h=f}n.apply(this,[h])};const r=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},r.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},i.RTCPeerConnection.prototype.addTrack=function(h,f){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(g=>g===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(g=>g.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const x=this._streams[f.id];if(x)x.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const g=new i.MediaStream([h]);this._streams[f.id]=g,this._reverseStreams[g.id]=f,this.addStream(g)}return this.getSenders().find(g=>g.track===h)};function s(l,h){let f=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const p=l._reverseStreams[d],x=l._streams[p.id];f=f.replace(new RegExp(x.id,"g"),p.id)}),new RTCSessionDescription({type:h.type,sdp:f})}function a(l,h){let f=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const p=l._reverseStreams[d],x=l._streams[p.id];f=f.replace(new RegExp(p.id,"g"),x.id)}),new RTCSessionDescription({type:h.type,sdp:f})}["createOffer","createAnswer"].forEach(function(l){const h=i.RTCPeerConnection.prototype[l],f={[l](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[x=>{const g=s(this,x);d[0].apply(null,[g])},x=>{d[1]&&d[1].apply(null,x)},arguments[2]]):h.apply(this,arguments).then(x=>s(this,x))}};i.RTCPeerConnection.prototype[l]=f[l]});const o=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?o.apply(this,arguments):(arguments[0]=a(this,arguments[0]),o.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:s(this,l)}}),i.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(p=>{this._streams[p].getTracks().find(g=>h.track===g)&&(d=this._streams[p])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function gl(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=r[t]})}function Td(i,e){e.version>102||or(i,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const Qu=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:Td,shimAddTrackRemoveTrack:Ed,shimAddTrackRemoveTrackWithNative:Md,shimGetSendersWithDtmf:bd,shimGetUserMedia:_d,shimMediaStream:vd,shimOnTrack:yd,shimPeerConnection:gl,shimSenderReceiverGetStats:Sd},Symbol.toStringTag,{value:"Module"}));function Cd(i,e){const t=i&&i.navigator;if(!t.mediaDevices)return;const n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(r,s,a){oh("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(r).then(s,a)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const r=function(a,o,c){o in a&&!(c in a)&&(a[c]=a[o],delete a[o])},s=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(a){return typeof a=="object"&&typeof a.audio=="object"&&(a=JSON.parse(JSON.stringify(a)),r(a.audio,"autoGainControl","mozAutoGainControl"),r(a.audio,"noiseSuppression","mozNoiseSuppression")),s(a)},n&&n.prototype.getSettings){const a=n.prototype.getSettings;n.prototype.getSettings=function(){const o=a.apply(this,arguments);return r(o,"mozAutoGainControl","autoGainControl"),r(o,"mozNoiseSuppression","noiseSuppression"),o}}if(n&&n.prototype.applyConstraints){const a=n.prototype.applyConstraints;n.prototype.applyConstraints=function(o){return this.kind==="audio"&&typeof o=="object"&&(o=JSON.parse(JSON.stringify(o)),r(o,"autoGainControl","mozAutoGainControl"),r(o,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[o])}}}}function Rb(i,e){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const r=new DOMException("getDisplayMedia without video constraints is undefined");return r.name="NotFoundError",r.code=8,Promise.reject(r)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)}))}function Ad(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function _l(i,e){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=r[t]}))}function wd(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){const[s,a,o]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[s||null]).then(c=>{if(e.version<53&&!a)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,f)=>{c.set(f,Object.assign({},h,{type:t[h.type]||h.type}))})}return c}).then(a,o)}}function Rd(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;const e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){const r=e.apply(this,[]);return r.forEach(s=>s._pc=this),r});const t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){const r=t.apply(this,arguments);return r._pc=this,r}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Pd(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;const e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(r=>r._pc=this),n}),or(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Dd(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){oh("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Ld(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function Id(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.addTransceiver;t&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let r=arguments[1]&&arguments[1].sendEncodings;r===void 0&&(r=[]),r=[...r];const s=r.length>0;s&&r.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const a=t.apply(this,arguments);if(s){const{sender:o}=a,c=o.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=r,o.sendEncodings=r,this.setParametersPromises.push(o.setParameters(c).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return a})}function Ud(i,e){if(!(typeof i=="object"&&i.RTCRtpSender)||e.version>=110)return;const t=i.RTCRtpSender.prototype.getParameters;t&&(i.RTCRtpSender.prototype.getParameters=function(){const r=t.apply(this,arguments);return"encodings"in r||(r.encodings=[].concat(this.sendEncodings||[{}])),r})}function Nd(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function Od(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const ef=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Id,shimCreateAnswer:Od,shimCreateOffer:Nd,shimGetDisplayMedia:Rb,shimGetParameters:Ud,shimGetStats:wd,shimGetUserMedia:Cd,shimOnTrack:Ad,shimPeerConnection:_l,shimRTCDataChannel:Ld,shimReceiverGetStats:Pd,shimRemoveStream:Dd,shimSenderGetStats:Rd},Symbol.toStringTag,{value:"Module"}));function Fd(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(r=>e.call(this,r,n)),n.getVideoTracks().forEach(r=>e.call(this,r,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...r){return r&&r.forEach(s=>{this._localStreams?this._localStreams.includes(s)||this._localStreams.push(s):this._localStreams=[s]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const r=t.getTracks();this.getSenders().forEach(s=>{r.includes(s.track)&&this.removeTrack(s)})})}}function kd(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(r=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(r))return;this._remoteStreams.push(r);const s=new Event("addstream");s.stream=r,this.dispatchEvent(s)})})}});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(s=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(s)>=0)return;n._remoteStreams.push(s);const a=new Event("addstream");a.stream=s,n.dispatchEvent(a)})}),e.apply(n,arguments)}}}function Bd(i){if(typeof i!="object"||!i.RTCPeerConnection)return;const e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,r=e.setLocalDescription,s=e.setRemoteDescription,a=e.addIceCandidate;e.createOffer=function(l,h){const f=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[f]);return h?(d.then(l,h),Promise.resolve()):d},e.createAnswer=function(l,h){const f=arguments.length>=2?arguments[2]:arguments[0],d=n.apply(this,[f]);return h?(d.then(l,h),Promise.resolve()):d};let o=function(c,l,h){const f=r.apply(this,[c]);return h?(f.then(l,h),Promise.resolve()):f};e.setLocalDescription=o,o=function(c,l,h){const f=s.apply(this,[c]);return h?(f.then(l,h),Promise.resolve()):f},e.setRemoteDescription=o,o=function(c,l,h){const f=a.apply(this,[c]);return h?(f.then(l,h),Promise.resolve()):f},e.addIceCandidate=o}function zd(i){const e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=r=>n(Vd(r))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,r,s){e.mediaDevices.getUserMedia(n).then(r,s)}).bind(e))}function Vd(i){return i&&i.video!==void 0?Object.assign({},i,{video:gd(i.video)}):i}function Gd(i){if(!i.RTCPeerConnection)return;const e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,r){if(n&&n.iceServers){const s=[];for(let a=0;a<n.iceServers.length;a++){let o=n.iceServers[a];o.urls===void 0&&o.url?(oh("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,s.push(o)):s.push(n.iceServers[a])}n.iceServers=s}return new e(n,r)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Hd(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Wd(i){const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const r=this.getTransceivers().find(a=>a.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const s=this.getTransceivers().find(a=>a.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveVideo===!0&&!s&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Xd(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}const tf=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Xd,shimCallbacksAPI:Bd,shimConstraints:Vd,shimCreateOfferLegacy:Wd,shimGetUserMedia:zd,shimLocalStreamsAPI:Fd,shimRTCIceServerUrls:Gd,shimRemoteStreamsAPI:kd,shimTrackEventTransceiver:Hd},Symbol.toStringTag,{value:"Module"}));function Pb(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var uc={exports:{}},nf;function Db(){return nf||(nf=1,(function(i){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((r,s)=>(s>0?"m="+r:r).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(r=>r.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const r={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let s=8;s<n.length;s+=2)switch(n[s]){case"raddr":r.relatedAddress=n[s+1];break;case"rport":r.relatedPort=parseInt(n[s+1],10);break;case"tcptype":r.tcpType=n[s+1];break;case"ufrag":r.ufrag=n[s+1],r.usernameFragment=n[s+1];break;default:r[n[s]]===void 0&&(r[n[s]]=n[s+1]);break}return r},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const r=t.component;r==="rtp"?n.push(1):r==="rtcp"?n.push(2):n.push(r),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const s=t.type;return n.push("typ"),n.push(s),s!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const r={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),r.name=n[0],r.clockRate=parseInt(n[1],10),r.channels=n.length===3?parseInt(n[2],10):1,r.numChannels=r.channels,r},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const r=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(r!==1?"/"+r:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={},r=t.substring(t.indexOf(" ")+1).split(";");for(let s=0;s<r.length;s++){const[a,...o]=r[s].trim().split("=");n[a.trim()]=o.length?o.join("="):void 0}return n},e.writeFmtp=function(t){let n="",r=t.payloadType;if(t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const s=[];Object.keys(t.parameters).forEach(a=>{t.parameters[a]!==void 0?s.push(a+"="+t.parameters[a]):s.push(a)}),n+="a=fmtp:"+r+" "+s.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",r=t.payloadType;return t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(s=>{n+="a=rtcp-fb:"+r+" "+s.type+(s.parameter&&s.parameter.length?" "+s.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),r={ssrc:parseInt(t.substring(7,n),10)},s=t.indexOf(":",n);return s>-1?(r.attribute=t.substring(n+1,s),r.value=t.substring(s+1)):r.attribute=t.substring(n+1),r},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(r=>parseInt(r,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let r="a=setup:"+n+`\r
`;return t.fingerprints.forEach(s=>{r+="a=fingerprint:"+s.algorithm+" "+s.value+`\r
`}),r},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const r=e.matchPrefix(t+n,"a=ice-ufrag:")[0],s=e.matchPrefix(t+n,"a=ice-pwd:")[0];return r&&s?{usernameFragment:r.substring(12),password:s.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},s=e.splitLines(t)[0].split(" ");n.profile=s[2];for(let o=3;o<s.length;o++){const c=s[o],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const h=e.parseRtpMap(l),f=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(h.parameters=f.length?e.parseFmtp(f[0]):{},h.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(h),h.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(h.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(o=>{n.headerExtensions.push(e.parseExtmap(o))});const a=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(o=>{a.forEach(c=>{o.rtcpFeedback.find(h=>h.type===c.type&&h.parameter===c.parameter)||o.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let r="";r+="m="+t+" ",r+=n.codecs.length>0?"9":"0",r+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",r+=n.codecs.map(a=>a.preferredPayloadType!==void 0?a.preferredPayloadType:a.payloadType).join(" ")+`\r
`,r+=`c=IN IP4 0.0.0.0\r
`,r+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(a=>{r+=e.writeRtpMap(a),r+=e.writeFmtp(a),r+=e.writeRtcpFb(a)});let s=0;return n.codecs.forEach(a=>{a.maxptime>s&&(s=a.maxptime)}),s>0&&(r+="a=maxptime:"+s+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(a=>{r+=e.writeExtmap(a)}),r},e.parseRtpEncodingParameters=function(t){const n=[],r=e.parseRtpParameters(t),s=r.fecMechanisms.indexOf("RED")!==-1,a=r.fecMechanisms.indexOf("ULPFEC")!==-1,o=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname"),c=o.length>0&&o[0].ssrc;let l;const h=e.matchPrefix(t,"a=ssrc-group:FID").map(d=>d.substring(17).split(" ").map(x=>parseInt(x,10)));h.length>0&&h[0].length>1&&h[0][0]===c&&(l=h[0][1]),r.codecs.forEach(d=>{if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){let p={ssrc:c,codecPayloadType:parseInt(d.parameters.apt,10)};c&&l&&(p.rtx={ssrc:l}),n.push(p),s&&(p=JSON.parse(JSON.stringify(p)),p.fec={ssrc:c,mechanism:a?"red+ulpfec":"red"},n.push(p))}}),n.length===0&&c&&n.push({ssrc:c});let f=e.matchPrefix(t,"b=");return f.length&&(f[0].indexOf("b=TIAS:")===0?f=parseInt(f[0].substring(7),10):f[0].indexOf("b=AS:")===0?f=parseInt(f[0].substring(5),10)*1e3*.95-2e3*8:f=void 0,n.forEach(d=>{d.maxBitrate=f})),n},e.parseRtcpParameters=function(t){const n={},r=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="cname")[0];r&&(n.cname=r.value,n.ssrc=r.ssrc);const s=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=s.length>0,n.compound=s.length===0;const a=e.matchPrefix(t,"a=rtcp-mux");return n.mux=a.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const r=e.matchPrefix(t,"a=msid:");if(r.length===1)return n=r[0].substring(7).split(" "),{stream:n[0],track:n[1]};const s=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="msid");if(s.length>0)return n=s[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),r=e.matchPrefix(t,"a=max-message-size:");let s;r.length>0&&(s=parseInt(r[0].substring(19),10)),isNaN(s)&&(s=65536);const a=e.matchPrefix(t,"a=sctp-port:");if(a.length>0)return{port:parseInt(a[0].substring(12),10),protocol:n.fmt,maxMessageSize:s};const o=e.matchPrefix(t,"a=sctpmap:");if(o.length>0){const c=o[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:s}}},e.writeSctpDescription=function(t,n){let r=[];return t.protocol!=="DTLS/SCTP"?r=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:r=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&r.push("a=max-message-size:"+n.maxMessageSize+`\r
`),r.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,r){let s;const a=n!==void 0?n:2;return t?s=t:s=e.generateSessionId(),`v=0\r
o=`+(r||"thisisadapterortc")+" "+s+" "+a+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const r=e.splitLines(t);for(let s=0;s<r.length;s++)switch(r[s]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return r[s].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const r=e.splitLines(t)[0].substring(2).split(" ");return{kind:r[0],port:parseInt(r[1],10),protocol:r[2],fmt:r.slice(3).join(" ")}},e.parseOLine=function(t){const r=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:r[0],sessionId:r[1],sessionVersion:parseInt(r[2],10),netType:r[3],addressType:r[4],address:r[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let r=0;r<n.length;r++)if(n[r].length<2||n[r].charAt(1)!=="=")return!1;return!0},i.exports=e})(uc)),uc.exports}var qd=Db();const Wr=Pb(qd),Lb=g0({__proto__:null,default:Wr},[qd]);function Va(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;const e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const r=new e(n),s=Wr.parseCandidate(n.candidate);for(const a in s)a in r||Object.defineProperty(r,a,{value:s[a]});return r.toJSON=function(){return{candidate:r.candidate,sdpMid:r.sdpMid,sdpMLineIndex:r.sdpMLineIndex,usernameFragment:r.usernameFragment}},r}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,or(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function vl(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||or(i,"icecandidate",e=>{if(e.candidate){const t=Wr.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Ga(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(o){if(!o||!o.sdp)return!1;const c=Wr.splitSections(o.sdp);return c.shift(),c.some(l=>{const h=Wr.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(o){const c=o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},r=function(o){let c=65536;return e.browser==="firefox"&&(e.version<57?o===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},s=function(o,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const h=Wr.matchPrefix(o.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},a=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=r(c),h=s(arguments[0],c);let f;l===0&&h===0?f=Number.POSITIVE_INFINITY:l===0||h===0?f=Math.max(l,h):f=Math.min(l,h);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return f}}),this._sctp=d}return a.apply(this,arguments)}}function Ha(i,e){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(r,s){const a=r.send;r.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(r.readyState==="open"&&s.sctp&&l>s.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+s.sctp.maxMessageSize+" bytes)");return a.apply(r,arguments)}}const n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){const s=n.apply(this,arguments);return t(s,this),s},or(i,"datachannel",r=>(t(r.channel,r.target),r))}function yl(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;const e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=r=>{const s=r.target;if(s._lastConnectionState!==s.connectionState){s._lastConnectionState=s.connectionState;const a=new Event("connectionstatechange",r);s.dispatchEvent(a)}return r},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function bl(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(r){if(r&&r.sdp&&r.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const s=r.sdp.split(`
`).filter(a=>a.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&r instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:r.type,sdp:s}):r.sdp=s}return t.apply(this,arguments)}}function Wa(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Xa(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let r=arguments[0]||{};if(typeof r!="object"||r.type&&r.sdp)return t.apply(this,arguments);if(r={type:r.type,sdp:r.sdp},!r.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":r.type="offer";break;default:r.type="answer";break}return r.sdp||r.type!=="offer"&&r.type!=="answer"?t.apply(this,[r]):(r.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(a=>t.apply(this,[a]))})}const Ib=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:bl,shimAddIceCandidateNullOrEmpty:Wa,shimConnectionState:yl,shimMaxMessageSize:Ga,shimParameterlessSetLocalDescription:Xa,shimRTCIceCandidate:Va,shimRTCIceCandidateRelayProtocol:vl,shimSendThrowTypeError:Ha},Symbol.toStringTag,{value:"Module"}));function Ub({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=ah,n=wb(i),r={browserDetails:n,commonShim:Ib,extractVersion:ws,disableLog:Cb,disableWarnings:Ab,sdp:Lb};switch(n.browser){case"chrome":if(!Qu||!gl||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),r;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),r;t("adapter.js shimming chrome."),r.browserShim=Qu,Wa(i,n),Xa(i),_d(i,n),vd(i),gl(i,n),yd(i,n),Ed(i,n),bd(i),Sd(i,n),Td(i,n),Va(i),vl(i),yl(i),Ga(i,n),Ha(i,n),bl(i,n);break;case"firefox":if(!ef||!_l||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),r;t("adapter.js shimming firefox."),r.browserShim=ef,Wa(i,n),Xa(i),Cd(i,n),_l(i,n),wd(i,n),Ad(i),Dd(i),Rd(i),Pd(i),Ld(i),Id(i,n),Ud(i,n),Nd(i,n),Od(i,n),Va(i),yl(i),Ga(i,n),Ha(i,n);break;case"safari":if(!tf||!e.shimSafari)return t("Safari shim is not included in this adapter release."),r;t("adapter.js shimming safari."),r.browserShim=tf,Wa(i,n),Xa(i),Gd(i),Wd(i),Bd(i),Fd(i),kd(i),Hd(i),zd(i),Xd(i),Va(i),vl(i),Ga(i,n),Ha(i,n),bl(i,n);break;default:t("Unsupported browser!");break}return r}const rf=Ub({window:typeof window>"u"?void 0:window});function cr(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}class $d{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,r=Math.ceil(n/this.chunkedMTU);let s=0,a=0;for(;a<n;){const o=Math.min(n,a+this.chunkedMTU),c=e.slice(a,o),l={__peerData:this._dataCount,n:s,data:c,total:r};t.push(l),a=o,s++}return this._dataCount++,t}}}function Nb(i){let e=0;for(const r of i)e+=r.byteLength;const t=new Uint8Array(e);let n=0;for(const r of i)t.set(r,n),n+=r.byteLength;return t}const fc=rf.default||rf,Es=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return fc.browserDetails.browser}getVersion(){return fc.browserDetails.version||0}isUnifiedPlanSupported(){const i=this.getBrowser(),e=fc.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},Ob=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),Yd=()=>Math.random().toString(36).slice(2),sf={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class Fb extends $d{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(r){r.target&&t(r.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=sf,this.browser=Es.getBrowser(),this.browserVersion=Es.getVersion(),this.pack=pd,this.unpack=dd,this.supports=(function(){const t={browser:Es.isBrowserSupported(),webRTC:Es.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(sf),t.audioVideo=!0;let r;try{r=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!r.ordered;try{r.binaryType="blob",t.binaryBlob=!Es.isIOS}catch{}}catch{}finally{r&&r.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=Ob,this.randomToken=Yd}}const ln=new Fb,kb="PeerJS: ";class Bb{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[kb,...t];for(const r in n)n[r]instanceof Error&&(n[r]="("+n[r].name+") "+n[r].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var Ce=new Bb,ch={},zb=Object.prototype.hasOwnProperty,sn="~";function Zs(){}Object.create&&(Zs.prototype=Object.create(null),new Zs().__proto__||(sn=!1));function Vb(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function jd(i,e,t,n,r){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new Vb(t,n||i,r),a=sn?sn+e:e;return i._events[a]?i._events[a].fn?i._events[a]=[i._events[a],s]:i._events[a].push(s):(i._events[a]=s,i._eventsCount++),i}function qa(i,e){--i._eventsCount===0?i._events=new Zs:delete i._events[e]}function Zt(){this._events=new Zs,this._eventsCount=0}Zt.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)zb.call(t,n)&&e.push(sn?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Zt.prototype.listeners=function(e){var t=sn?sn+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,s=n.length,a=new Array(s);r<s;r++)a[r]=n[r].fn;return a};Zt.prototype.listenerCount=function(e){var t=sn?sn+e:e,n=this._events[t];return n?n.fn?1:n.length:0};Zt.prototype.emit=function(e,t,n,r,s,a){var o=sn?sn+e:e;if(!this._events[o])return!1;var c=this._events[o],l=arguments.length,h,f;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,r),!0;case 5:return c.fn.call(c.context,t,n,r,s),!0;case 6:return c.fn.call(c.context,t,n,r,s,a),!0}for(f=1,h=new Array(l-1);f<l;f++)h[f-1]=arguments[f];c.fn.apply(c.context,h)}else{var d=c.length,p;for(f=0;f<d;f++)switch(c[f].once&&this.removeListener(e,c[f].fn,void 0,!0),l){case 1:c[f].fn.call(c[f].context);break;case 2:c[f].fn.call(c[f].context,t);break;case 3:c[f].fn.call(c[f].context,t,n);break;case 4:c[f].fn.call(c[f].context,t,n,r);break;default:if(!h)for(p=1,h=new Array(l-1);p<l;p++)h[p-1]=arguments[p];c[f].fn.apply(c[f].context,h)}}return!0};Zt.prototype.on=function(e,t,n){return jd(this,e,t,n,!1)};Zt.prototype.once=function(e,t,n){return jd(this,e,t,n,!0)};Zt.prototype.removeListener=function(e,t,n,r){var s=sn?sn+e:e;if(!this._events[s])return this;if(!t)return qa(this,s),this;var a=this._events[s];if(a.fn)a.fn===t&&(!r||a.once)&&(!n||a.context===n)&&qa(this,s);else{for(var o=0,c=[],l=a.length;o<l;o++)(a[o].fn!==t||r&&!a[o].once||n&&a[o].context!==n)&&c.push(a[o]);c.length?this._events[s]=c.length===1?c[0]:c:qa(this,s)}return this};Zt.prototype.removeAllListeners=function(e){var t;return e?(t=sn?sn+e:e,this._events[t]&&qa(this,t)):(this._events=new Zs,this._eventsCount=0),this};Zt.prototype.off=Zt.prototype.removeListener;Zt.prototype.addListener=Zt.prototype.on;Zt.prefixed=sn;Zt.EventEmitter=Zt;ch=Zt;var lr={};cr(lr,"ConnectionType",()=>wi);cr(lr,"PeerErrorType",()=>Lt);cr(lr,"BaseConnectionErrorType",()=>Sl);cr(lr,"DataConnectionErrorType",()=>lh);cr(lr,"SerializationType",()=>uo);cr(lr,"SocketEventType",()=>Ti);cr(lr,"ServerMessageType",()=>Wt);var wi=(function(i){return i.Data="data",i.Media="media",i})({}),Lt=(function(i){return i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc",i})({}),Sl=(function(i){return i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed",i})({}),lh=(function(i){return i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big",i})({}),uo=(function(i){return i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw",i})({}),Ti=(function(i){return i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close",i})({}),Wt=(function(i){return i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE",i})({});const Zd="1.5.5";class Gb extends ch.EventEmitter{constructor(e,t,n,r,s,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];const o=e?"wss://":"ws://";this._baseUrl=o+t+":"+n+r+"peerjs?key="+s}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+Zd),this._disconnected=!1,this._socket.onmessage=r=>{let s;try{s=JSON.parse(r.data),Ce.log("Server message received:",s)}catch{Ce.log("Invalid server message",r.data);return}this.emit(Ti.Message,s)},this._socket.onclose=r=>{this._disconnected||(Ce.log("Socket closed.",r),this._cleanup(),this._disconnected=!0,this.emit(Ti.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),Ce.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){Ce.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Wt.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Ti.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class Kd{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===wi.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,r={ordered:!!e.reliable},s=t.createDataChannel(n.label,r);n._initializeDataChannel(s),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){Ce.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,r=this.connection.type,s=this.connection.provider;Ce.log("Listening for ICE candidates."),e.onicecandidate=a=>{!a.candidate||!a.candidate.candidate||(Ce.log(`Received ICE candidates for ${t}:`,a.candidate),s.socket.send({type:Wt.Candidate,payload:{candidate:a.candidate,type:r,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":Ce.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Sl.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":Ce.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Sl.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":Ce.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},Ce.log("Listening for data channel"),e.ondatachannel=a=>{Ce.log("Received data channel");const o=a.channel;s.getConnection(t,n)._initializeDataChannel(o)},Ce.log("Listening for remote stream"),e.ontrack=a=>{Ce.log("Received remote stream");const o=a.streams[0],c=s.getConnection(t,n);if(c.type===wi.Media){const l=c;this._addStreamToMediaConnection(o,l)}}}cleanup(){Ce.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const r=this.connection.dataChannel;r&&(n=!!r.readyState&&r.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);Ce.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Ce.log("Set localDescription:",n,`for:${this.connection.peer}`);let r={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===wi.Data){const s=this.connection;r={...r,label:s.label,reliable:s.reliable,serialization:s.serialization}}t.socket.send({type:Wt.Offer,payload:r,dst:this.connection.peer})}catch(r){r!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Lt.WebRTC,r),Ce.log("Failed to setLocalDescription, ",r))}}catch(n){t.emitError(Lt.WebRTC,n),Ce.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();Ce.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Ce.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:Wt.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(r){t.emitError(Lt.WebRTC,r),Ce.log("Failed to setLocalDescription, ",r)}}catch(n){t.emitError(Lt.WebRTC,n),Ce.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,r=this.connection.provider;Ce.log("Setting remote description",t);const s=this;try{await n.setRemoteDescription(t),Ce.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await s._makeAnswer()}catch(a){r.emitError(Lt.WebRTC,a),Ce.log("Failed to setRemoteDescription, ",a)}}async handleCandidate(e){Ce.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),Ce.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Lt.WebRTC,t),Ce.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(Ce.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return Ce.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){Ce.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class Jd extends ch.EventEmitter{emitError(e,t){Ce.error("Error:",t),this.emit("error",new Hb(`${e}`,t))}}class Hb extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class Qd extends Jd{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}class eo extends Qd{static#e=this.ID_PREFIX="mc_";get type(){return wi.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||eo.ID_PREFIX+ln.randomToken(),this._negotiator=new Kd(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Ce.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{Ce.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){Ce.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case Wt.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case Wt.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:Ce.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){Ce.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const r of n)this.handleMessage(r);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}}class Wb{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:r,path:s,key:a}=this._options,o=new URL(`${t}://${n}:${r}${s}${a}/${e}`);return o.searchParams.set("ts",`${Date.now()}${Math.random()}`),o.searchParams.set("version",Zd),fetch(o.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){Ce.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==ln.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===ln.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw Ce.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}class to extends Qd{static#e=this.ID_PREFIX="dc_";static#t=this.MAX_BUFFERED_AMOUNT=8388608;get type(){return wi.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||to.ID_PREFIX+Yd(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new Kd(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Ce.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{Ce.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{Ce.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(lh.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Wt.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Wt.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:Ce.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}}class hh extends to{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>to.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return Ce.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class dc extends hh{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new $d,this.serialization=uo.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=dd(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const r=Nb(n.data);this._handleDataMessage({data:r})}}_send(e,t){const n=pd(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);Ce.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class Xb extends hh{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=uo.None}}class qb extends hh{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=ln.chunkedMTU){this.emitError(lh.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=uo.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}class uh extends Jd{static#e=this.DEFAULT_KEY="peerjs";get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:Xb,json:qb,binary:dc,"binary-utf8":dc,default:dc},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:ln.CLOUD_HOST,port:ln.CLOUD_PORT,path:"/",key:uh.DEFAULT_KEY,token:ln.randomToken(),config:ln.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==ln.CLOUD_HOST?this._options.secure=ln.isSecure():this._options.host==ln.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&Ce.setLogFunction(this._options.logFunction),Ce.logLevel=this._options.debug||0,this._api=new Wb(t),this._socket=this._createServerConnection(),!ln.supports.audioVideo&&!ln.supports.data){this._delayedAbort(Lt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!ln.validateId(n)){this._delayedAbort(Lt.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(r=>this._initialize(r)).catch(r=>this._abort(Lt.ServerError,r))}_createServerConnection(){const e=new Gb(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Ti.Message,t=>{this._handleMessage(t)}),e.on(Ti.Error,t=>{this._abort(Lt.SocketError,t)}),e.on(Ti.Disconnected,()=>{this.disconnected||(this.emitError(Lt.Network,"Lost connection to server."),this.disconnect())}),e.on(Ti.Close,()=>{this.disconnected||this._abort(Lt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,r=e.src;switch(t){case Wt.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Wt.Error:this._abort(Lt.ServerError,n.msg);break;case Wt.IdTaken:this._abort(Lt.UnavailableID,`ID "${this.id}" is taken`);break;case Wt.InvalidKey:this._abort(Lt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Wt.Leave:Ce.log(`Received leave message from ${r}`),this._cleanupPeer(r),this._connections.delete(r);break;case Wt.Expire:this.emitError(Lt.PeerUnavailable,`Could not connect to peer ${r}`);break;case Wt.Offer:{const s=n.connectionId;let a=this.getConnection(r,s);if(a&&(a.close(),Ce.warn(`Offer received for existing Connection ID:${s}`)),n.type===wi.Media){const c=new eo(r,this,{connectionId:s,_payload:n,metadata:n.metadata});a=c,this._addConnection(r,a),this.emit("call",c)}else if(n.type===wi.Data){const c=new this._serializers[n.serialization](r,this,{connectionId:s,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});a=c,this._addConnection(r,a),this.emit("connection",c)}else{Ce.warn(`Received malformed connection type:${n.type}`);return}const o=this._getMessages(s);for(const c of o)a.handleMessage(c);break}default:{if(!n){Ce.warn(`You received a malformed message from ${r} of type ${t}`);return}const s=n.connectionId,a=this.getConnection(r,s);a&&a.peerConnection?a.handleMessage(e):s?this._storeMessage(s,e):Ce.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){Ce.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Lt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){Ce.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Lt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){Ce.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const r=new eo(e,this,{...n,_stream:t});return this._addConnection(e,r),r}_addConnection(e,t){Ce.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const r of n)if(r.connectionId===t)return r;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){Ce.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(Ce.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;Ce.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)Ce.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)Ce.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Lt.ServerError,t))}}var $b=uh;const Pa=2,Yb=18,Ml=140,El=40,fh=["lobby","countdown","playing","ended"],no=Number.isFinite,Tl=i=>i!==null&&typeof i=="object"&&!Array.isArray(i),Cl=["w","s","a","d","sprint","crouch","jump","fire","aim","reload"],af=i=>Math.round(i*1e4)/1e4;function of(i){let e=0;return Cl.forEach((t,n)=>{i[t]&&(e|=1<<n)}),[i.seq,e,Math.round(i.yaw*1e4),Math.round(i.pitch*1e4),i.slot|0,Math.round((i.viewTime||0)*1e3)]}function jb(i){if(!Array.isArray(i)||i.length!==6||!i.every(c=>Number.isInteger(c)))return null;const[e,t,n,r,s,a]=i;if(e<=0||t<0||t>=1<<Cl.length||s<0||s>=rd||Math.abs(n)>1e6||Math.abs(r)>15708)return null;const o={seq:e,yaw:n/1e4,pitch:r/1e4,slot:s,viewTime:a/1e3};return Cl.forEach((c,l)=>{o[c]=!!(t&1<<l)}),o}const dh=["id","name","bot","color","x","y","z","vx","vy","vz","yaw","pitch","ground","height","crouched","slide","slideCd","crouchHeld","sprinting","aiming","jumpBuffer","recoil","recoilYaw","hp","armor","weapon","ammo","reserve","reload","cooldown","swap","bloom","shots","fireHeld","seed","kills","deaths","score","streak","protect","respawn","ack","ping","connected"],e0=new Set(["bot","ground","crouched","crouchHeld","sprinting","aiming","fireHeld","connected"]),Da=i=>typeof i=="number"&&!Number.isInteger(i)?Math.round(i*1e3)/1e3:i;function Zb(i,e=null){return{type:"s",sid:i.sid,t:Da(i.t),ph:fh.indexOf(i.phase),tm:Da(i.timer),cd:Da(i.countdown),r:i.round,lim:i.limit,pk:i.pickups||0,p:i.players.map(t=>dh.map(n=>e0.has(n)?t[n]?1:0:t.id===e||Array.isArray(t[n])?t[n]:Da(t[n])))}}function Kb(i){return{sid:i.sid,t:i.t,phase:fh[i.ph],timer:i.tm,countdown:i.cd,round:i.r,limit:i.lim,pickups:i.pk,players:i.p.map(e=>{const t={};return dh.forEach((n,r)=>{t[n]=e0.has(n)?e[r]===1:e[r]}),t})}}function Jb(i){if(!Tl(i)||typeof i.type!="string")return null;switch(i.type){case"c":{if(!Array.isArray(i.c)||i.c.length===0||i.c.length>El)return null;const e=[];for(const t of i.c){const n=jb(t);if(!n)return null;e.push(n)}return{type:"c",cmds:e}}case"chat":return typeof i.text=="string"&&i.text.length<=Ml*2?{type:"chat",text:i.text.trim().slice(0,Ml)}:null;case"ping":return no(i.at)?{type:"ping",at:i.at}:null;case"pong":return no(i.at)?{type:"pong",at:i.at}:null;case"bye":return{type:"bye"};default:return null}}function Qb(i){if(!Tl(i)||typeof i.type!="string")return null;switch(i.type){case"s":return typeof i.sid!="string"||!no(i.t)||!Number.isInteger(i.ph)||!fh[i.ph]||!Array.isArray(i.p)||i.p.length>12||!i.p.every(e=>Array.isArray(e)&&e.length===dh.length&&typeof e[0]=="string"&&typeof e[1]=="string")?null:Kb(i);case"ev":return typeof i.sid!="string"||!Array.isArray(i.list)||i.list.length>400||!i.list.every(e=>Tl(e)&&typeof e.type=="string"&&Number.isInteger(e.eventId))?null:{type:"ev",sid:i.sid,list:i.list};case"welcome":return typeof i.id=="string"&&Number.isInteger(i.v)?i:null;case"chat":return typeof i.name=="string"&&typeof i.text=="string"&&i.text.length<=Ml?i:null;case"ping":case"pong":return no(i.at)?i:null;case"reject":case"bye":return{type:i.type,message:typeof i.message=="string"?i.message.slice(0,120):""};default:return null}}function cf(i){return String(i??"").replace(/[\u0000-\u001f<>]/g,"").trim().slice(0,Yb)||"Operative"}class pc{constructor(e,t=e){this.rate=e,this.burst=t,this.tokens=t,this.last=null}allow(e,t=1){return this.last!==null&&(this.tokens=Math.min(this.burst,this.tokens+(e-this.last)/1e3*this.rate)),this.last=e,this.tokens<t?!1:(this.tokens-=t,!0)}}const e1=12,t1=.1;sd.map(i=>Fy(i[0],i[1],i[2]));const t0={},rt={IDLE:"IDLE",CONNECTING:"CONNECTING",CONNECTED:"CONNECTED",RECONNECTING:"RECONNECTING",DISCONNECTED:"DISCONNECTED",ERROR:"ERROR"},lf="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",hf="ob3d-",n1=7,i1=1e3,uf=6e3,ff=15e3,r1=18e3,df=32*1024,s1=25,Fn=()=>performance.now(),a1=()=>"p"+[...crypto.getRandomValues(new Uint8Array(9))].map(e=>e.toString(36).padStart(2,"0")).join("").slice(0,14);async function o1(){const i=t0?.VITE_ICE_CONFIG_URL;if(i)try{const e=new AbortController,t=setTimeout(()=>e.abort(),4e3),n=await fetch(i,{signal:e.signal,credentials:"same-origin"});clearTimeout(t);const r=await n.json();return Array.isArray(r.iceServers)?r.iceServers:void 0}catch{return}}function c1(i){const e=t0||{},t={debug:0};return i&&(t.config={iceServers:i}),e.VITE_PEER_HOST&&Object.assign(t,{host:e.VITE_PEER_HOST,port:Number(e.VITE_PEER_PORT)||443,path:e.VITE_PEER_PATH||"/",secure:e.VITE_PEER_SECURE!=="false"}),t}class pf{constructor(e,t){this.conn=e,this.metrics=t,this.state=null,this.onmessage=null,this.lastSeen=Fn()}attachStateChannel(){const e=this.conn.peerConnection;if(!(this.state||!e?.createDataChannel))try{const t=e.createDataChannel("ob-state",{negotiated:!0,id:n1,ordered:!1,maxRetransmits:0});t.onmessage=n=>{if(typeof n.data!="string"||n.data.length>65536){this.onmessage?.(null);return}this.metrics.bytesIn+=n.data.length;let r;try{r=JSON.parse(n.data)}catch{this.onmessage?.(null);return}this.onmessage?.(r)},this.state=t}catch{this.state=null}}get stateOpen(){return this.state?.readyState==="open"}get open(){return!!this.conn.open}sendReliable(e){if(!this.conn.open)return!1;try{return this.conn.send(e),!0}catch{return!1}}sendState(e){const t=JSON.stringify(e);if(this.lastSize=t.length,this.stateOpen&&t.length<6e4){if(this.state.bufferedAmount>df)return this.metrics.dropped++,!1;try{return this.state.send(t),this.metrics.bytesOut+=t.length,!0}catch{}}const n=this.conn.dataChannel;return n&&n.bufferedAmount>df?(this.metrics.dropped++,!1):(this.metrics.bytesOut+=t.length,this.sendReliable(e))}close(){try{this.state?.close()}catch{}try{this.conn.close()}catch{}}}class l1{constructor({onState:e,onEvents:t,onStatus:n,onChat:r,onConnection:s}){this.onState=e,this.onEvents=t,this.onStatus=n,this.onChat=r,this.onConnection=s||(()=>{}),this.peer=null,this.members=new Map,this.link=null,this.authority=null,this.id="local",this.code="",this.isHost=!1,this.ping=0,this.session=0,this.conn=rt.IDLE,this.latestState=null,this.metrics={bytesOut:0,bytesIn:0,snapshotBytes:0,snapshots:0,dropped:0,rejected:0,tickMs:0,tickMaxMs:0,stateChannel:!1},this.timers=[]}status(e){this.onStatus(e)}setConn(e,t=""){this.conn===e&&this.connReason===t||(this.conn=e,this.connReason=t,this.onConnection(e,t))}every(e,t){const n=setInterval(t,e);return this.timers.push(n),n}after(e,t){const n=setTimeout(t,e);return this.timers.push(n),n}cleanup(e=rt.IDLE,t=""){this.session++;for(const s of this.timers)clearInterval(s),clearTimeout(s);if(this.timers=[],this.watchdog=null,this.isHost)for(const s of this.members.values())s.lost||s.link?.sendReliable({type:"bye",message:"Host closed the room."}),clearTimeout(s.grace);else this.link&&e===rt.IDLE&&this.link.sendReliable({type:"bye"});const n=[...this.members.values()].map(s=>s.link).concat(this.link?[this.link]:[]),r=this.peer;setTimeout(()=>{for(const s of n)s?.close();try{r?.destroy()}catch{}},n.length?150:0),this.peer=null,this.link=null,this.members.clear(),this.authority?.terminate(),this.authority=null,this.isHost=!1,this.code="",this.latestState=null,this.byeReceived=!1,this.ping=0,this.setConn(e,t)}createAuthority(){this.authority=new Worker(new URL(""+new URL("host.worker-Bh8SNQan.js",import.meta.url).href,import.meta.url),{type:"module"});const e=this.session;this.authority.onmessage=({data:t})=>{if(e!==this.session)return;if(t.kind==="stats"){this.metrics.tickMs=t.tickMs,this.metrics.tickMaxMs=t.tickMaxMs;return}const n=t.snap;if(this.latestState=n,this.onState(n),!!this.members.size){n.events.length&&this.broadcastReliable({type:"ev",sid:n.sid,list:n.events}),this.metrics.snapshots++;for(const[r,s]of this.members){if(!s.link?.open||s.lost)continue;const a=Zb(n,r);s.link.sendState(a)&&(this.metrics.snapshotBytes=s.link.lastSize)}}},this.authority.onerror=()=>this.fail("Host simulation crashed. Please restart the room.")}command(e,t={}){this.authority?.postMessage({type:e,...t})}publish(){this.command("snapshot")}start(){this.isHost&&this.authority&&(this.command("start"),this.publish())}returnToLobby(){this.isHost&&this.authority&&(this.command("lobby"),this.publish())}practice(e){this.cleanup(),this.id="local",this.isHost=!0,this.createAuthority(),this.command("add",{id:this.id,name:e});for(let t=0;t<5;t++)this.command("add",{id:"bot-"+t,name:["Viper","Rook","Ghost","Echo","Flint"][t],bot:!0});this.command("start"),this.publish(),this.setConn(rt.CONNECTED,"practice")}makeCode(){return[...crypto.getRandomValues(new Uint8Array(6))].map(t=>lf[t%lf.length]).join("")}async open(e,t,n){this.cleanup();const r=e?this.makeCode():String(t).trim().toUpperCase();if(!/^[A-Z2-9]{6}$/.test(r))throw this.setConn(rt.ERROR,"Enter the six-character room code."),new Error("Enter the six-character room code.");this.isHost=e,this.code=r,this.name=cf(n),this.id=a1();const s=this.session;this.setConn(rt.CONNECTING,e?"Creating room…":"Connecting…"),this.status(e?"CREATING ROOM…":"CONNECTING…");const a=await o1();if(s!==this.session)return;e&&this.createAuthority();const o=this.peer=new $b(e?hf+this.code:void 0,c1(a));this.after(r1,()=>{s===this.session&&this.conn===rt.CONNECTING&&this.fail("Connection timed out. Check the code or try another network.")}),o.on("open",()=>{if(s===this.session)if(e){if(this.conn!==rt.CONNECTING)return;this.command("add",{id:this.id,name:this.name}),this.publish(),this.setConn(rt.CONNECTED,"Room "+this.code+" ready"),this.status("ROOM "+this.code+" · READY · SHARE THE CODE"),this.every(i1,()=>this.hostHeartbeat(s))}else this.conn===rt.CONNECTING&&this.connectToHost(s)}),o.on("connection",c=>{s===this.session&&e&&this.admit(c,s)}),o.on("error",c=>{if(s!==this.session)return;const l={"peer-unavailable":"Room not found. Check the code.","unavailable-id":"Code already in use. Host again.",network:"Signaling server unreachable.","server-error":"Room service error.","socket-error":"Room service connection failed.","socket-closed":"Room service connection closed.","browser-incompatible":"This browser does not support WebRTC.",webrtc:"Peer connection failed."}[c.type]||"Connection failed: "+c.type;if(this.conn!==rt.RECONNECTING){if(this.conn===rt.CONNECTING)return this.fail(l);if(["network","socket-error","socket-closed","server-error","disconnected"].includes(c.type)&&(this.members.size||this.link?.open)){this.status(l+" Existing players stay connected.");return}this.isHost&&c.type==="peer-unavailable"||(this.isHost||!this.link?.open)&&this.fail(l)}}),o.on("disconnected",()=>{s===this.session&&(this.status("Room service disconnected — reconnecting signaling…"),this.after(1e3,()=>{if(s===this.session&&this.peer&&!this.peer.destroyed)try{this.peer.reconnect()}catch{}}))})}fail(e){this.status(e),this.cleanup(rt.ERROR,e)}admit(e,t){const n=e.metadata||{},r=a=>{this.metrics.rejected++,e.on("open",()=>{try{e.send({type:"reject",message:a})}catch{}setTimeout(()=>e.close(),150)})};if(n.v!==Pa)return r("Game version mismatch — reload the page.");if(typeof n.token!="string"||!/^p[a-z0-9]{6,20}$/.test(n.token)||n.token===this.id)return r("Invalid join request.");if(!this.members.get(n.token)&&this.members.size+1>=e1)return r("Room is full (12/12).");e.on("open",()=>{if(t!==this.session){e.close();return}const a=new pf(e,this.metrics);a.attachStateChannel();const o=n.token,c=this.members.get(o)||{name:cf(n.name),strikes:0,limits:{c:new pc(150,60),chat:new pc(2,3),pong:new pc(6,6)}};clearTimeout(c.grace);const l=c.link;c.link=a,c.lost=!1,c.leaving=!1,this.members.set(o,c),l?.close(),a.onmessage=h=>this.hostMessage(c,a,h),e.on("data",h=>this.hostMessage(c,a,h)),e.on("close",()=>this.memberLost(o,c,a,t)),e.on("error",()=>this.memberLost(o,c,a,t)),a.sendReliable({type:"welcome",id:o,v:Pa,code:this.code}),this.command("add",{id:o,name:c.name}),this.publish()})}hostMessage(e,t,n){if(e.link!==t)return;t.lastSeen=Fn();const r=Jb(n);if(!r)return this.strike(e);const s=Fn(),a=[...this.members].find(([,o])=>o===e)?.[0];if(a)if(r.type==="c")e.limits.c.allow(s)?this.command("cmds",{id:a,cmds:r.cmds}):this.metrics.rejected++;else if(r.type==="pong"){if(!e.limits.pong.allow(s))return;const o=Math.max(0,s-r.at);e.rtt=e.rtt?e.rtt*.7+o*.3:o,this.command("rtt",{id:a,ms:e.rtt})}else r.type==="chat"?e.limits.chat.allow(s)&&this.relayChat(a,r.text):r.type==="bye"&&(e.leaving=!0,t.close())}strike(e){this.metrics.rejected++,e.strikes++,e.strikes>s1&&(e.link?.sendReliable({type:"reject",message:"Disconnected: protocol violation."}),e.leaving=!0,setTimeout(()=>e.link?.close(),100))}memberLost(e,t,n,r){if(r!==this.session||t.link!==n||t.lost)return;t.lost=!0,n.close();const s=()=>{r!==this.session||this.members.get(e)!==t||!t.lost||(this.members.delete(e),this.command("remove",{id:e}),this.publish())};if(t.leaving){s();return}this.command("dropped",{id:e}),this.publish(),t.grace=setTimeout(s,ff)}hostHeartbeat(e){if(e!==this.session)return;const t=Fn();let n=!1;for(const[r,s]of this.members)if(!(!s.link||s.lost)){if(n||=s.link.stateOpen,t-s.link.lastSeen>uf){this.memberLost(r,s,s.link,e);continue}s.link.sendReliable({type:"ping",at:t})}this.metrics.stateChannel=n}broadcastReliable(e){for(const t of this.members.values())t.link?.open&&!t.lost&&t.link.sendReliable(e)}relayChat(e,t){if(typeof t!="string")return;const n=this.latestState?.players.find(r=>r.id===e);n&&(t=t.trim().slice(0,140),t&&(this.onChat(n.name,t),this.broadcastReliable({type:"chat",name:n.name,text:t})))}connectToHost(e){if(e!==this.session||!this.peer||this.peer.destroyed)return;const t=this.peer.connect(hf+this.code,{reliable:!0,serialization:"json",metadata:{name:this.name,token:this.id,v:Pa}}),n=new pf(t,this.metrics);let r=!1;t.on("open",()=>{if(e!==this.session||this.link&&this.link!==n&&this.link.open){t.close();return}n.attachStateChannel(),this.link=n,n.lastSeen=Fn()});const s=o=>{if(e!==this.session||this.link!==n)return;n.lastSeen=Fn();const c=Qb(o);if(!c){this.metrics.rejected++;return}if(c.type==="welcome"){if(c.v!==Pa)return this.fail("Game version mismatch — reload the page.");r=!0,this.setConn(rt.CONNECTED,"Room "+this.code),this.status("CONNECTED · ROOM "+this.code)}else c.type==="ping"?n.sendReliable({type:"pong",at:c.at}):c.type==="ev"?this.onEvents(c.list,c.sid):c.type==="chat"?this.onChat(c.name,c.text):c.type==="reject"?this.fail(c.message||"Rejected by host."):c.type==="bye"?(this.byeReceived=!0,this.cleanup(rt.DISCONNECTED,"The host closed the room.")):c.players&&(this.metrics.stateChannel=n.stateOpen,this.onState({...c,events:[]}))};n.onmessage=s,t.on("data",s);const a=()=>{e!==this.session||this.byeReceived||this.link&&this.link!==n||(n.close(),this.link=null,!(!r&&this.conn===rt.CONNECTING)&&this.reconnect(e))};t.on("close",a),t.on("error",a),this.watchdog||(this.watchdog=this.every(1e3,()=>{if(!(e!==this.session||!this.link)&&Fn()-this.link.lastSeen>uf){const o=this.link;this.link=null,o.close(),this.reconnect(e)}}))}reconnect(e){if(e!==this.session||this.conn===rt.RECONNECTING)return;this.setConn(rt.RECONNECTING,"Connection lost — reconnecting…"),this.status("CONNECTION LOST · RECONNECTING…");const t=Fn()+ff,n=()=>{if(!(e!==this.session||this.conn!==rt.RECONNECTING)){if(Fn()>t)return this.cleanup(rt.DISCONNECTED,"Lost connection to the host.");if(!this.link?.open){if(this.peer?.disconnected&&!this.peer.destroyed)try{this.peer.reconnect()}catch{}this.connectToHost(e)}this.after(2500,n)}};n()}sendCommands(e,t){if(!e.length||this.conn!==rt.CONNECTED)return;if(this.authority){this.command("cmds",{id:this.id,cmds:e});return}const n=this.link;if(n?.open)if(n.stateOpen){const r=Fn();if(!e.some(a=>a.fire||a.jump||a.reload)&&r-(this.lastCmdSend||0)<30)return;this.lastCmdSend=r,n.sendState({type:"c",c:t.slice(-12).map(of)})}else{this.cmdBacklog=(this.cmdBacklog||[]).concat(e);const r=Fn();if(!e.some(o=>o.fire||o.jump||o.reload)&&r-(this.lastCmdSend||0)<30)return;this.lastCmdSend=r;const a=this.cmdBacklog.splice(0);for(let o=0;o<a.length;o+=El)n.sendReliable({type:"c",c:a.slice(o,o+El).map(of)})}}chat(e){this.isHost?this.relayChat(this.id,e):this.link?.sendReliable({type:"chat",text:e})}dropLinkForTest(){try{this.link?.conn.peerConnection?.close()}catch{}}}const h1=i=>({...i,ammo:[...i.ammo],reserve:[...i.reserve]}),u1=2.5;class f1{constructor(){this.reset()}reset(){this.me=null,this.pending=[],this.seq=0,this.lastAck=0,this.stats={corrections:0,snaps:0,maxError:0,sumError:0,samples:0,lastError:0,ackDelayMs:0},this.sentAt=new Map}nextSeq(e=0){return this.seq++,this.sentAt.set(this.seq,e),this.sentAt.size>600&&this.sentAt.delete(this.sentAt.keys().next().value),this.seq}step(e,t){return e.live=!!t,this.pending.push(e),this.pending.length>600&&this.pending.shift(),this.me?t?zu(this.me,e,Hr):(this.me.yaw=e.yaw,this.me.pitch=e.pitch,null):null}reconcile(e,t,n=0){if(e.ack>this.lastAck){const l=this.sentAt.get(e.ack);l!==void 0&&n&&(this.stats.ackDelayMs=n-l),this.lastAck=e.ack}this.pending=this.pending.filter(l=>l.seq>e.ack);const r=h1(e);for(const l of this.pending)t||l.live?zu(r,l,Hr):(r.yaw=l.yaw,r.pitch=l.pitch);let s=null,a=!1;const o=this.me,c=!!(o&&o.hp>0&&r.hp>0);if(c){s={x:o.x-r.x,y:o.y-r.y,z:o.z-r.z};const l=Math.hypot(s.x,s.y,s.z);this.stats.lastError=l,this.stats.samples++,this.stats.sumError+=l,l>1e-4&&this.stats.corrections++,l>this.stats.maxError&&(this.stats.maxError=l),l>u1&&(a=!0,this.stats.snaps++)}else a=!0;return c&&(r.yaw=o.yaw,r.pitch=o.pitch),this.me=r,{error:s,snapped:a,viewReset:!c}}}const d1=.2;class p1{constructor(e=.1,t=.15){this.baseDelay=e,this.maxExtrapolate=t,this.reset()}reset(){this.snapshots=[],this.sid=null,this.offset=null,this.jitter=0,this.interval=1/30,this.delay=this.baseDelay,this.stats={accepted:0,rejectedSession:0,rejectedStale:0,extrapolated:0,jitterMs:0,delayMs:this.baseDelay*1e3},this.visual=new Map}sampleSmoothed(e,t){const n=this.sample(e,t);if(!n)return null;const r=this.visual.get(e);if(!r||n.hp<=0||t<=r.t||t-r.t>.25)return this.visual.set(e,{t,x:n.x,y:n.y,z:n.z,ox:0,oy:0,oz:0}),n;const s=t-r.t,a=Math.exp(-10*s);let o=r.ox*a,c=r.oy*a,l=r.oz*a;const h=r.x+(n.vx||0)*s,f=r.z+(n.vz||0)*s,d=Math.hypot(n.x+o-h,n.z+l-f);d>6?o=c=l=0:d>.12&&(o=h-n.x,l=f-n.z,c=r.y-n.y);const p={...n,x:n.x+o,y:n.y+c,z:n.z+l};return this.visual.set(e,{t,x:p.x,y:p.y,z:p.z,ox:o,oy:c,oz:l}),p}push(e,t){if(this.sid===null&&(this.sid=e.sid),e.sid!==this.sid)return this.stats.rejectedSession++,!1;const n=this.snapshots[this.snapshots.length-1];if(n&&e.t<=n.t)return this.stats.rejectedStale++,!1;const r=e.t-t;this.offset!==null&&(this.jitter=this.jitter*.95+Math.abs(r-this.offset)*.05),n&&(this.interval=this.interval*.9+Math.min(.2,e.t-n.t)*.1),this.offset=this.offset===null||Math.abs(r-this.offset)>1?r:this.offset+(r-this.offset)*(r>this.offset?.3:.05);const s=Math.min(d1,Math.max(this.baseDelay,this.interval+2.5*this.jitter));for(this.delay+=(s-this.delay)*.05,this.stats.jitterMs=this.jitter*1e3,this.stats.delayMs=this.delay*1e3,this.snapshots.push({t:e.t,map:new Map(e.players.map(a=>[a.id,a]))});this.snapshots.length>60;)this.snapshots.shift();return this.stats.accepted++,!0}hostNow(e){return e+(this.offset??0)}renderTime(e){return this.hostNow(e)-this.delay}sample(e,t){const n=this.snapshots;if(!n.length)return null;let r=n.length-1;for(;r>=0&&n[r].t>t;)r--;if(r<0)return n[0].map.get(e)||null;const s=n[r],a=n[r+1],o=s.map.get(e);if(!o)return a?.map.get(e)||null;if(!a){const f=Math.min(this.maxExtrapolate,t-s.t);return f<=0||o.hp<=0?o:(this.stats.extrapolated++,{...o,x:o.x+o.vx*f,z:o.z+o.vz*f,y:o.ground?o.y:o.y+o.vy*f})}const c=a.map.get(e);if(!c||c.hp>0!=o.hp>0)return c||o;if(Math.hypot(c.x-o.x,c.z-o.z)>6)return t-s.t<(a.t-s.t)/2?o:c;const l=Math.min(1,Math.max(0,(t-s.t)/Math.max(1e-4,a.t-s.t)));let h=c.yaw-o.yaw;return h=Math.atan2(Math.sin(h),Math.cos(h)),{...c,x:o.x+(c.x-o.x)*l,y:o.y+(c.y-o.y)*l,z:o.z+(c.z-o.z)*l,yaw:o.yaw+h*l,pitch:o.pitch+(c.pitch-o.pitch)*l,height:o.height+(c.height-o.height)*l,vx:o.vx+(c.vx-o.vx)*l,vz:o.vz+(c.vz-o.vz)*l}}}const z=i=>document.getElementById(i),nr=z("game");new URLSearchParams(location.search);let Et;try{Et=new Sy({canvas:nr,antialias:!0,powerPreference:"high-performance",stencil:!1})}catch(i){throw document.body.dataset.engine="error",z("engineLoading").textContent="WebGL unavailable · enable hardware acceleration and reload.",z("loadStatus").textContent="WebGL could not start. Enable hardware acceleration and reload.",i}Et.outputColorSpace=kt;Et.toneMapping=yf;Et.toneMappingExposure=1.05;Et.shadowMap.enabled=!0;Et.shadowMap.type=vf;Et.autoClear=!1;const xt={sensitivity:1.6,fov:90,quality:"auto",sound:!0};try{xt.sensitivity=mt(Number(localStorage.getItem("ob-sensitivity"))||1.6,.5,3),xt.fov=mt(Number(localStorage.getItem("ob-fov"))||90,70,110),xt.quality=localStorage.getItem("ob-quality")||"auto",z("name").value=localStorage.getItem("ob-name")||"Strike One"}catch{}const Kn=new jl,Rt=new hn(74,1,.05,900);Rt.rotation.order="YXZ";Kn.add(Rt);const m1=ab(Kn,xt.quality),bn=new xb(Et),Xt=new yb(Kn),_t=new bb;let yi=Math.min(devicePixelRatio,xt.quality==="high"?2:1.5);const n0=(()=>{const i=new jt(.7,.42,.45),e=new jt(.72,.1,.47),t=new tr({color:"#3f5a37"}),n=new tr({color:"#e7c14a",emissive:"#6a5410"}),r=new Qe(new th(.55,.7,28).rotateX(-Math.PI/2),new $n({color:"#ffd76a",transparent:!0,opacity:.55,depthWrite:!1}));return dl.map(s=>{const a=new pt,o=new Qe(i,t),c=new Qe(e,n);o.castShadow=!0,a.add(o,c);const l=r.clone();return l.position.y=-.33,a.add(l),a.position.set(s.x,s.y+.45,s.z),Kn.add(a),a})})(),Cn=new f1,rn=new p1(t1);let at,Or,Al,vn,Y,wl=[],Us=new R,mf=new R,Xr=new R,Fr=0,En=0,ns=0,Ns=0,Os=0,Zi=0,Rs=0,Sn=0,Pt=!1,fi=!1,Ri=!1,fo=!1,ph=!1,po=!1,ir=!1,os=!1;const yn={fire:!1,jump:!1,reload:!1};let Rl=0,Pl=0,La=zt.height-zt.eye,qr=0,mc=0,mh=0,xh="",Pi=null,xc=0,gc=0,Ia=0,$r=60,Dl=16,xf=performance.now(),gh=0,Fs=0,_h=0,Yr=null,si={t:performance.now(),bytesIn:0,bytesOut:0,snapshots:0,inRate:0,outRate:0,snapRate:0};const Ht=new Set,Mn=new Map,kr=new Set,Ll=new R,i0=new R,mo=()=>performance.now()/1e3,io=()=>rn.renderTime(mo());function xo(){Xt.clear(),at={phase:"menu",players:[],events:[],pickups:0},Or="menu",Al=null,vn=Y=null,Cn.reset(),rn.reset(),wl=[],Fr=0,Sn=0,Ns=Os=Zi=Rs=qr=0,Xr.set(0,0,0),kr.clear(),mh=0,xh="",Pi=null,Fs=_h=gh=0,po=!1;for(const i of Mn.values())Kn.remove(i.root),i.dispose();Mn.clear();for(const i of["killFeed","chatLog","elim","dmgDirs","leaders"])z(i).replaceChildren();z("notice").textContent="",z("death").hidden=!0,z("netBanner").hidden=!0}xo();function Li(i,e=2,t=!1){z("notice").textContent=i,z("notice").classList.toggle("big",t),gh=performance.now()+e*1e3}function Ki(i,e,t=!1){const n=document.createElement("div"),r=document.createElement("b");for(t&&(n.className="sys"),r.textContent=i+"  ",n.append(r,document.createTextNode(e)),z("chatLog").append(n);z("chatLog").children.length>7;)z("chatLog").firstChild.remove()}function Il(i,e){const t=document.createElement("div");t.className="row"+(e?" hs":"");const n=document.createElement("small"),r=document.createElement("span"),s=document.createElement("em");n.textContent=e?"HEADSHOT":"ELIMINATED",r.textContent=i,s.textContent=e?"+150":"+100",t.append(n,r,s),z("elim").replaceChildren(t),clearTimeout(Il.t),Il.t=setTimeout(()=>t.remove(),1800)}function x1(i){if(!i||!Y)return;const t=Math.atan2(i.x-Y.x,i.z-Y.z)-En+Math.PI,n=document.createElement("i");for(n.style.transform=`rotate(${-t}rad)`,z("dmgDirs").append(n),setTimeout(()=>{n.style.opacity="0"},500),setTimeout(()=>n.remove(),1200);z("dmgDirs").children.length>4;)z("dmgDirs").firstChild.remove()}const go=()=>[...at.players].sort((i,e)=>e.kills-i.kills||i.deaths-e.deaths||e.score-i.score);function g1(i,e){i.replaceChildren(),go().slice(0,e).forEach((t,n)=>{const r=document.createElement("div");r.className="rank-row"+(t.id===Pe.id?" self":"")+(n===0?" lead":"");for(const[s,a,o]of[["rank",String(n+1),"span"],["callsign",t.name+(t.connected===!1?" ⚠":""),"span"],["",String(t.kills),"strong"],["",String(t.deaths),"small"]]){const c=document.createElement(o);c.className=s,c.textContent=a,r.append(c)}i.append(r)})}function vh(i){i.replaceChildren(),go().forEach((e,t)=>{const n=document.createElement("div");n.className="score-row"+(e.id===Pe.id?" self":"");const r=e.bot?"BOT":e.connected===!1?"LOST":e.id===Pe.id&&Pe.isHost?"HOST":(e.ping||0)+"",s=[String(t+1),e.name,String(e.kills),String(e.deaths),String(e.score),r].map(a=>{const o=document.createElement("span");return o.textContent=a,o});s[0].className="rank",n.append(...s),i.append(n)})}const _1=["VX-7","P-11","KX-3"];function v1(i){const e=document.createElement("div");i.by===Pe.id?e.className="mine":i.id===Pe.id&&(e.className="victim");const t=document.createElement("span"),n=document.createElement("span"),r=document.createElement("span");if(t.className="k",n.className="w",r.className="v",t.textContent=i.killer,n.textContent=_1[i.w]||"✕",r.textContent=i.name,e.append(t,n),i.part==="head"){const s=document.createElement("span");s.className="hs",s.textContent="⌖",e.append(s)}for(e.append(r),z("killFeed").prepend(e);z("killFeed").children.length>5;)z("killFeed").lastChild.remove();setTimeout(()=>e.remove(),6500)}const Pe=new l1({onState:y1,onEvents:(i,e)=>{if(rn.sid!==null&&e===rn.sid)for(const t of i)r0(t)},onStatus:i=>{z("networkStatus").textContent=i},onChat:(i,e)=>Ki(i,e),onConnection:Ul});function Ul(i,e){z("retryBtn").hidden=!(i===rt.ERROR||i===rt.DISCONNECTED)||!Yr,z("netBanner").hidden=i!==rt.RECONNECTING||!Pt,i===rt.RECONNECTING&&Ki("SYSTEM","Connection lost — reconnecting…",!0),i===rt.CONNECTED&&Ul.previous===rt.RECONNECTING&&Ki("SYSTEM","Reconnected.",!0),(i===rt.DISCONNECTED||i===rt.ERROR)&&(o0(),z("networkStatus").textContent=(e||"Disconnected.").toUpperCase()),Ul.previous=i,Qs()}function Qs(){const i=z("roster");i.replaceChildren();for(const n of at.players){const r=document.createElement("span");r.textContent=n.name+(n.id===Pe.id?" (YOU)":""),(Pe.isHost?n.id===Pe.id:n===at.players[0])&&r.classList.add("host"),i.append(r)}const e=!!Pe.code&&(Pe.conn===rt.CONNECTED||Pe.conn===rt.RECONNECTING||Pe.conn===rt.CONNECTING);z("lobby").hidden=!e,z("codeDisplay").textContent=Pe.code;const t=Pe.isHost&&(at.phase==="lobby"||at.phase==="ended"||at.phase==="menu");z("startBtn").hidden=!t,z("lobbyHint").hidden=Pe.isHost,z("lobbyHint").textContent=at.phase==="countdown"||at.phase==="playing"?"Match in progress — joining…":"Waiting for the host to start the match…",z("practiceBtn").hidden=e,z("roomBadge").textContent=Pe.code?"ROOM "+Pe.code:"TRAINING"}function y1(i){if(!rn.push(i,mo()))return;at=i;const e=i.sid+":"+i.round;e!==Al&&(Xt.clear(),Al=e,Cn.pending=[],Cn.me=Y=null);for(const t of i.events||[])r0(t);vn=at.players.find(t=>t.id===Pe.id)||null,vn?b1(vn):Cn.me=Y=null;for(const t of i.players){if(t.id===Pe.id||Mn.has(t.id))continue;const n=vb(t.color);n.root.position.set(t.x,t.y,t.z),Kn.add(n.root),Mn.set(t.id,n)}for(const[t,n]of Mn)i.players.some(r=>r.id===t)||(Kn.remove(n.root),n.dispose(),Mn.delete(t));if(n0.forEach((t,n)=>{t.visible=(i.pickups||0)>>n&1}),i.phase==="countdown"||i.phase==="playing")if(Pt||E1(),i.phase==="countdown"){const t=Math.max(1,Math.ceil(i.countdown));z("notice").textContent!==String(t)&&(Li(String(t),.9,!0),_t.beep(!1))}else Or==="countdown"&&(Li("GO!",.9,!0),_t.beep(!0));i.phase==="ended"&&Or!=="ended"&&T1(),i.phase==="lobby"&&Or!=="lobby"&&Or!=="menu"&&a0(),(i.phase==="lobby"||!Pt)&&Qs(),Or=i.phase}function b1(i){const e=Y?{x:Y.x,y:Y.y,z:Y.z}:null,t=Cn.reconcile(i,at.phase==="playing",performance.now());Y=Cn.me,t.viewReset?(Xr.set(0,0,0),Us.set(Y.x,Y.y,Y.z),Y.hp>0&&(En=Y.yaw,ns=Y.pitch)):t.error&&e&&(t.snapped?(Xr.set(0,0,0),Us.set(Y.x,Y.y,Y.z)):(Xr.add(Ll.set(t.error.x,t.error.y,t.error.z)),Us.sub(Ll))),Y.yaw=En,Y.pitch=ns}function r0(i){if(kr.has(i.eventId))return;kr.add(i.eventId),kr.size>3e3&&kr.delete(kr.values().next().value);const e=performance.now()/1e3;switch(i.type){case"shot":{if(Number.isFinite(i.t)&&rn.hostNow(mo())-i.t>.45)break;const t=new R(i.point.x,i.point.y,i.point.z);if(i.id===Pe.id){i.hit&&(Fs=performance.now()+140,z("hitmarker").className=i.part==="head"?"head":"",_t.hit(i.part==="head"),Mn.get(i.hit)?.hit(),Xt.blood(t,new R(i.point.x-i.o.x,i.point.y-i.o.y,i.point.z-i.o.z).normalize(),i.part==="head"));break}const n=Mn.get(i.id);let r=new R(i.o.x,i.o.y-.2,i.o.z);if(n&&(n.flashAt=e,n.root.updateMatrixWorld(!0),r=new R(.06,1.33,-.95).applyMatrix4(n.root.matrixWorld),Xt.muzzle(r)),Xt.tracer(r,t,220),i.hit?(Xt.blood(t,t.clone().sub(r).normalize(),i.part==="head"),Mn.get(i.hit)?.hit()):Xt.impact(t,i.n),Y){const s=Math.hypot(i.o.x-Y.x,i.o.z-Y.z),a=Math.atan2(i.o.x-Y.x,i.o.z-Y.z)-En;s<90&&_t.shot(i.w,Math.max(1,s),Math.sin(-a)*.8)}break}case"melee":if(i.id===Pe.id&&i.hit&&(Fs=performance.now()+160,z("hitmarker").className=i.part==="head"?"head":"",_t.hit(i.part==="head")),i.hit&&Mn.get(i.hit)?.hit(),i.id!==Pe.id&&Y){const t=at.players.find(n=>n.id===i.id);t&&Math.hypot(t.x-Y.x,t.z-Y.z)<10&&_t.swing()}break;case"damage":i.id===Pe.id&&(_h=performance.now()+220,Zi=Math.min(1,Zi+.35),_t.hurt(),x1(i.from));break;case"kill":{v1(i);const t=Mn.get(i.id);t&&Xt.death(t.root.position,t.color),i.by===Pe.id&&i.id!==Pe.id&&(Il(i.name,i.part==="head"),_t.kill(i.streak),z("hitmarker").className="kill",Fs=performance.now()+260,i.streak>=3&&Li(["","","","TRIPLE KILL","RAMPAGE","UNSTOPPABLE"][Math.min(i.streak,5)]||"UNSTOPPABLE",1.6)),i.id===Pe.id&&(mh=performance.now(),xh=i.by?i.killer:"THE FOUNDRY",Pi=i.by,_t.death());break}case"respawn":Xt.respawn({x:i.x,y:i.y,z:i.z}),i.id===Pe.id&&(qr=.05,Pi=null);break;case"pickup":i.id===Pe.id&&(Li("+ AMMO RESUPPLIED",1.2),_t.pickup());break;case"reload":if(i.id!==Pe.id&&Y){const t=at.players.find(n=>n.id===i.id);t&&Math.hypot(t.x-Y.x,t.z-Y.z)<12&&_t.reload(i.w)}break;case"join":Ki("SYSTEM",i.name+" joined the room.",!0);break;case"leave":Ki("SYSTEM",i.name+" left the room.",!0);break;case"dropped":Ki("SYSTEM",i.name+" lost connection…",!0);break;case"reconnect":Ki("SYSTEM",i.name+" reconnected.",!0);break}}function s0(){return Pt&&!fi&&z("chatInput").hidden&&(Ri||fo||ph)&&Y&&Y.hp>0&&at.phase==="playing"}const gf=(i,e)=>!zn[e].melee&&i.ammo[e]+i.reserve[e]===0;function S1(){const i=s0();En=Math.atan2(Math.sin(En),Math.cos(En)),i&&(ir||yn.fire)&&Y&&gf(Y,Sn)&&Y.reload<=0&&(Sn=Sn===0&&!gf(Y,1)?1:2,Li(Sn===1?"RIFLE DRY · SIDEARM":"OUT OF AMMO · KNIFE",1.2));const e={seq:Cn.nextSeq(performance.now()),w:i&&Ht.has("KeyW"),s:i&&Ht.has("KeyS"),a:i&&Ht.has("KeyA"),d:i&&Ht.has("KeyD"),jump:i&&(Ht.has("Space")||yn.jump),sprint:i&&(Ht.has("ShiftLeft")||Ht.has("ShiftRight")),crouch:i&&(Ht.has("ControlLeft")||Ht.has("ControlRight")||Ht.has("KeyC")),reload:i&&(Ht.has("KeyR")||yn.reload),fire:i&&(ir||yn.fire),aim:i&&os,slot:Sn,yaw:af(En),pitch:af(mt(ns,-1.5,1.5)),viewTime:Math.round(io()*1e3)/1e3};return yn.fire=yn.jump=yn.reload=!1,e}function M1(){return at.phase==="playing"?!0:at.phase!=="countdown"||!Number.isFinite(at.t)?!1:rn.hostNow(mo())+(vn?.ping||0)/1e3>=at.t+at.countdown}function _o(){Ht.clear(),ir=os=fo=!1,yn.fire=yn.jump=yn.reload=!1,document.body.classList.remove("playing"),document.pointerLockElement===nr&&document.exitPointerLock()}async function rr(){_t.ensure(),_t.ui(),fi=!1,z("pause").hidden=!0,document.body.classList.add("playing");try{await nr.requestPointerLock({unadjustedMovement:!0})}catch{try{await nr.requestPointerLock()}catch{Li("Click and drag to look",3)}}}function vo(i=!1){Pt&&(fi=!0,_o(),z("pauseTag").textContent=i?"MATCH LIVE":"TACTICAL LINK",z("pauseTitle").textContent=i?"DEPLOY.":"PAUSED.",z("pauseText").textContent=i?"The match is running. Click below to lock your aim and drop in.":"The multiplayer match continues while you are paused.",z("resumeBtn").textContent=i?"DEPLOY →":"RETURN TO MATCH",z("pause").hidden=!1)}function E1(){Pt=!0,po=!1,z("menu").hidden=!0,z("results").hidden=!0,z("hud").hidden=!1,z("avatar").textContent=(z("name").value||"OB").slice(0,2).toUpperCase(),Ri||vo(!0)}function T1(){_o(),Pt=!1,fi=!1,z("pause").hidden=!0,z("hud").hidden=!0,z("results").hidden=!1;const i=go()[0];z("winner").textContent=i?i.id===Pe.id?"VICTORY.":i.name.toUpperCase()+" WINS":"MATCH OVER",vh(z("resultRows"));const e=!!Pe.code;z("restartBtn").hidden=!Pe.isHost,z("restartHint").hidden=Pe.isHost,z("lobbyBtn").hidden=!e,z("resultExit").textContent=e?"LEAVE ROOM":"BACK TO MENU"}function a0(){_o(),Pt=!1,fi=!1,po=!0,z("pause").hidden=!0,z("results").hidden=!0,z("hud").hidden=!0,z("menu").hidden=!1,Qs()}function o0(){Pt=!1,fi=!1,_o(),xo(),z("menu").hidden=!1,z("hud").hidden=!0,z("pause").hidden=!0,z("results").hidden=!0,Qs()}function yh(){Pe.cleanup(),o0(),z("networkStatus").textContent="12 OPERATIVES MAX · PEER HOSTED"}const c0=()=>(z("name").value||"Strike One").trim().slice(0,18)||"Strike One";async function bh(i,e){Yr={host:i,code:e},xo(),_t.ensure();try{await Pe.open(i,e,c0()),Qs()}catch(t){z("networkStatus").textContent=t.message}}z("practiceBtn").onclick=()=>{Yr=null,xo(),Pe.practice(c0()),rr()};z("hostBtn").onclick=()=>bh(!0,"");z("joinBtn").onclick=()=>bh(!1,z("roomCode").value);z("retryBtn").onclick=()=>Yr&&bh(Yr.host,Yr.code);z("roomCode").addEventListener("keydown",i=>{i.key==="Enter"&&z("joinBtn").click()});z("roomCode").addEventListener("input",i=>{i.target.value=i.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"")});z("startBtn").onclick=()=>{Pe.start(),rr()};z("restartBtn").onclick=()=>{Pe.start(),rr()};z("lobbyBtn").onclick=()=>{Pe.isHost?Pe.returnToLobby():a0()};z("resumeBtn").onclick=rr;z("exitBtn").onclick=yh;z("resultExit").onclick=yh;z("leaveBtn").onclick=yh;z("copyCode").onclick=async()=>{try{await navigator.clipboard.writeText(Pe.code),z("copyCode").textContent="COPIED"}catch{z("networkStatus").textContent="ROOM CODE: "+Pe.code}setTimeout(()=>{z("copyCode").textContent="COPY CODE"},1500)};z("fullscreenBtn").onclick=()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>Li("Fullscreen unavailable",2));z("sensitivity").value=xt.sensitivity;z("sensValue").textContent=xt.sensitivity.toFixed(1)+"×";z("sensitivity").oninput=i=>{xt.sensitivity=Number(i.target.value),z("sensValue").textContent=xt.sensitivity.toFixed(1)+"×";try{localStorage.setItem("ob-sensitivity",xt.sensitivity)}catch{}};z("fov").value=xt.fov;z("fovValue").textContent=xt.fov+"°";z("fov").oninput=i=>{xt.fov=Number(i.target.value),z("fovValue").textContent=xt.fov+"°";try{localStorage.setItem("ob-fov",xt.fov)}catch{}};z("quality").value=xt.quality;z("quality").onchange=i=>{xt.quality=i.target.value,yi=xt.quality==="low"?1:Math.min(devicePixelRatio,xt.quality==="high"?2:1.5),Et.shadowMap.enabled=xt.quality!=="low",m1.setShadows(xt.quality!=="low"),Kn.traverse(e=>{e.material&&(e.material.needsUpdate=!0)});try{localStorage.setItem("ob-quality",xt.quality)}catch{}Ks()};z("name").onchange=i=>{try{localStorage.setItem("ob-name",i.target.value)}catch{}};z("sound").onchange=i=>{_t.enabled=i.target.checked};document.addEventListener("pointerlockchange",()=>{const i=Ri;Ri=document.pointerLockElement===nr,i&&!Ri&&Pt&&z("chatInput").hidden&&vo()});document.addEventListener("pointerlockerror",()=>Li("Drag to look · pointer lock is restricted here",3));document.addEventListener("mousemove",i=>{if(!Pt||fi||!z("chatInput").hidden||!Ri&&!fo)return;const e=mt(i.movementX||0,-400,400),t=mt(i.movementY||0,-400,400),n=Y?.aiming?zn[Y.weapon].adsSens:1,r=.00165*xt.sensitivity*n*(xt.fov/90);En-=e*r,ns=mt(ns-t*r,-1.5,1.5),Rl+=e,Pl+=t});nr.addEventListener("mousedown",i=>{if(!(!Pt||fi)){if(!Ri){rr();return}i.button===0&&(ir=!0,yn.fire=!0),i.button===2&&(os=!0)}});document.addEventListener("mouseup",i=>{fo=!1,i.button===0&&(ir=!1),i.button===2&&(os=!1)});nr.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("wheel",i=>{s0()&&(Sn=(Sn+(i.deltaY>0?1:2))%3)},{passive:!0});document.addEventListener("keydown",i=>{if(i.target.matches("input,select")){i.target===z("chatInput")&&(i.code==="Enter"&&(Pe.chat(i.target.value),i.target.value="",i.target.hidden=!0,rr()),i.code==="Escape"&&(i.target.hidden=!0,rr()));return}if(i.code==="F3"&&(i.preventDefault(),z("netStats").hidden=!z("netStats").hidden),!!Pt){if(i.code==="Enter"){Ht.clear(),ir=os=!1,z("chatInput").hidden=!1,document.exitPointerLock?.(),z("chatInput").focus();return}["Tab","Space","ControlLeft","ControlRight","KeyW","KeyS","KeyA","KeyD"].includes(i.code)&&i.preventDefault(),i.code==="Tab"&&(z("scoreOverlay").hidden=!1,vh(z("scoreRows"))),i.code==="Escape"&&vo(),i.code==="KeyR"&&(yn.reload=!0),i.code==="Space"&&(yn.jump=!0),i.code==="Digit1"&&(Sn=0),i.code==="Digit2"&&(Sn=1),i.code==="Digit3"&&(Sn=2),i.code==="KeyQ"&&(Sn=Sn===0?1:0),Ht.add(i.code)}});document.addEventListener("keyup",i=>{Ht.delete(i.code),i.code==="Tab"&&(z("scoreOverlay").hidden=!0)});window.addEventListener("blur",()=>{Ht.clear(),ir=os=!1,Pt&&!ph&&vo()});window.addEventListener("beforeunload",i=>{Pt&&(i.preventDefault(),i.returnValue="")});window.addEventListener("pagehide",()=>Pe.cleanup());document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?navigator.keyboard?.lock?.(["KeyW","KeyA","KeyS","KeyD","ControlLeft","ControlRight","Space","Tab"]).catch(()=>{}):navigator.keyboard?.unlock?.()});function Ks(){Et.setPixelRatio(yi),Et.setSize(innerWidth,innerHeight),Rt.aspect=bn.camera.aspect=innerWidth/innerHeight,Rt.updateProjectionMatrix(),bn.camera.updateProjectionMatrix()}window.addEventListener("resize",Ks);Ks();const C1=i=>Bt.radToDeg(2*Math.atan(Math.tan(Bt.degToRad(i)/2)*.75));function A1(i){if(i.melee){bn.fire(),_t.swing();return}const e=zn[Y.weapon];bn.fire(),_t.shot(Y.weapon),Ns+=.02*(Y.aiming?.5:1),Os+=(Math.random()-.5)*.006;const t=ky(i.origin,i.dir,e.range),n=[];for(const c of at.players)if(c.id!==Pe.id&&c.hp>0&&c.connected!==!1){const l=rn.sample(c.id,io());l&&n.push(l)}const r=zy(i.origin,i.dir,t.t,n),s=r.target?r.t:t.t,a=i0.set(i.origin.x+i.dir.x*s,i.origin.y+i.dir.y*s,i.origin.z+i.dir.z*s).clone(),o=bn.muzzleWorld(Rt);Xt.tracer(o,a,300),Xt.muzzle(o,!0),!r.target&&s<e.range-.5&&Xt.impact(a,t.normal)}function w1(i){i&&(i.fired&&A1(i),i.empty&&_t.dry(),i.reloadStart&&_t.reload(Y.weapon),i.swapped&&_t.swap(),i.jumped&&(_t.jump(),bn.jump()),i.landed&&(_t.land(i.impact),bn.land(i.impact),qr=Math.min(.12,i.impact*.008)),i.slid&&_t.slide())}function R1(){const i=Math.ceil(at.timer||0);z("timer").textContent=String(Math.floor(i/60)).padStart(2,"0")+":"+String(i%60).padStart(2,"0"),z("timer").parentElement.classList.toggle("low",i<=30&&at.phase==="playing"),z("modeSub").textContent="FOUNDRY · FIRST TO "+(at.limit||30);const e=go();vn&&(z("myScore").textContent=vn.kills,z("leadScore").textContent=e[0]?.kills??0,z("kd").textContent=vn.kills+" / "+vn.deaths,z("playerLabel").textContent=vn.name.toUpperCase());const t=Pe.isHost?0:vn?.ping||0;if(z("telemetry").textContent=$r+" FPS · "+(Pe.isHost?Pe.code?"HOST · 0 MS":"LOCAL":t+" MS"),z("pingDot").className=t>150?"bad":t>80?"mid":"",g1(z("leaders"),6),z("scoreOverlay").hidden||(vh(z("scoreRows")),z("scoreMeta").textContent=(Pe.code?"ROOM "+Pe.code:"TRAINING")+" · "+at.players.length+"/12"),Y){const n=Math.max(0,Math.ceil(Y.hp));z("health").textContent=n,z("healthFill").style.width=n+"%",z("healthFill").parentElement.classList.toggle("low",n<=30),z("armorFill").style.width=Y.armor/50*100+"%";const r=zn[Y.weapon];z("ammo").textContent=r.melee?"∞":Y.ammo[Y.weapon],z("ammo").classList.toggle("low",!r.melee&&Y.ammo[Y.weapon]<=Math.ceil(r.mag*.2)),z("reserve").textContent=r.melee?"":"/ "+Y.reserve[Y.weapon],z("weaponName").textContent=r.name,z("fireMode").textContent=r.melee?"MELEE":(r.auto?"AUTO":"SEMI")+" · "+r.caliber;for(let s=0;s<3;s++)z("slot"+s).classList.toggle("active",Y.weapon===s);for(let s=0;s<2;s++)z("slotAmmo"+s).textContent=Y.ammo[s]+Y.reserve[s]===0?"EMPTY":Y.ammo[s];if(z("reloadBar").classList.toggle("on",Y.reload>0),z("reloadFill").style.width=(Y.reload>0?(1-Y.reload/r.reload)*100:0)+"%",z("death").hidden=Y.hp>0,Y.hp<=0){z("deathBy").textContent=xh||"—",z("deathTimer").textContent="RESPAWNING IN "+Math.max(1,Math.ceil(vn?.respawn??0));const s=Pi&&at.players.find(a=>a.id===Pi);z("spectating").textContent=s&&s.hp>0?"SPECTATING "+s.name.toUpperCase():""}z("spawnShield").hidden=!(Y.protect>0&&Y.hp>0&&at.phase==="playing")}if(!z("netStats").hidden){const n=performance.now(),r=Pe.metrics,s=Cn.stats;if(n-si.t>1e3){const a=(n-si.t)/1e3;Object.assign(si,{inRate:(r.bytesIn-si.bytesIn)/a,outRate:(r.bytesOut-si.bytesOut)/a,snapRate:(r.snapshots-si.snapshots)/a,t:n,bytesIn:r.bytesIn,bytesOut:r.bytesOut,snapshots:r.snapshots})}z("netStats").textContent=[`fps ${$r}  frame ${Dl.toFixed(1)} ms  conn ${Pe.conn}`,`ping ${t} ms  ack delay ${s.ackDelayMs.toFixed(0)} ms  pending ${Cn.pending.length}`,`correction last ${(s.lastError*100).toFixed(1)} cm  max ${(s.maxError*100).toFixed(1)} cm  avg ${(s.samples?s.sumError/s.samples*100:0).toFixed(2)} cm  snaps ${s.snaps}`,`snapshots in ${rn.stats.accepted}  stale ${rn.stats.rejectedStale}  foreign ${rn.stats.rejectedSession}`,Pe.isHost?`host tick ${r.tickMs.toFixed(3)} ms (max ${r.tickMaxMs.toFixed(2)})  snapshot ${r.snapshotBytes} B  ${si.snapRate.toFixed(0)}/s`:`state channel ${r.stateChannel?"unreliable":"reliable fallback"}`,`net out ${(si.outRate/1024).toFixed(1)} KB/s  in ${(si.inRate/1024).toFixed(1)} KB/s  dropped ${r.dropped}  rejected ${r.rejected}`,`gpu geo ${Et.info.memory.geometries}  tex ${Et.info.memory.textures}  calls ${Et.info.render.calls}`].join(`
`)}}function l0(i){requestAnimationFrame(l0);const e=Math.max(0,(i-xf)/1e3),t=Math.min(.05,e);xf=i;const n=i/1e3;Xt.update(e),Fr+=Math.min(.25,e);let r=0;for(;Fr>=Hr&&r<15;){if(Fr-=Hr,r++,!Pt||!Y)continue;Us.set(Y.x,Y.y,Y.z);const a=S1();w1(Cn.step(a,M1())),wl.push(a)}if(r===15&&(Fr=0),Pe.sendCommands(wl.splice(0),Cn.pending),Ns=Bt.damp(Ns,0,18,t),Os=Bt.damp(Os,0,14,t),Zi=Math.max(0,Zi-t*2.5),qr=Bt.damp(qr,0,9,t),Xr.multiplyScalar(Math.exp(-14*t)),Pt&&Y){Y.yaw=En;const a=Fr/Hr;mf.set(Y.x,Y.y,Y.z);const o=Ll.lerpVectors(Us,mf,a).add(Xr);La=Bt.damp(La,Y.height-zt.eye,16,t);const c=Math.hypot(Y.vx,Y.vz);Y.ground&&Y.hp>0&&Y.slide<=0&&(mc+=c*t,mc>(Y.sprinting?2.6:2.2)&&(mc=0,Y.crouched||_t.step(Math.min(1.2,c/8))));const l=Y.hp<=0,h=l?performance.now()-mh:0,f=l?Math.min(1,h/600):0;Rs=Bt.damp(Rs,(Y.slide>0?.06:0)+f*.5,8,t);const d=l&&Pi&&Pi!==Pe.id?at.players.find(b=>b.id===Pi):null;if(d&&d.hp>0&&h>900){const b=rn.sample(d.id,io())||d,_=i0.set(b.x+Math.sin(b.yaw)*3.4,b.y+2.6,b.z+Math.cos(b.yaw)*3.4);Rt.position.lerp(_,1-Math.exp(-5*t)),Rt.lookAt(b.x,b.y+1.3,b.z),Rs=0}else{Rt.position.set(o.x,o.y+La-qr-f*(La-.35),o.z);const b=Zi*Zi;Rt.rotation.set(mt(ns+(Y.recoil||0)+Ns+(Math.random()-.5)*b*.02,-1.55,1.55),En+(Y.recoilYaw||0)+Os+(Math.random()-.5)*b*.02,Rs)}const p=Y.aiming?zn[Y.weapon].adsZoom:1,x=C1(xt.fov)/p+(Y.sprinting?3:0)+(Y.slide>0?5:0);Rt.fov=Bt.damp(Rt.fov,x,14,t),Rt.updateProjectionMatrix(),bn.setWeapon(Y.weapon);const g=Y.vx*Math.cos(En)-Y.vz*Math.sin(En),m=zn[Y.weapon];bn.update(t,{speed:c,ground:Y.ground,sprinting:Y.sprinting,aiming:Y.aiming,crouched:Y.crouched,swap:Y.swap,dead:l,lookDX:Rl,lookDY:Pl,strafe:g,reloadT:Y.reload>0&&m.reload?1-Y.reload/m.reload:-1}),Rl=Pl=0;const u=6+hd(Y)*520+(Y.cooldown>0?3:0);z("crosshair").style.opacity=String(Math.max(0,1-bn.aim*1.6)*(l?0:1));for(const[b,_,M]of[["ch-l",-u-9,0],["ch-r",u,0],["ch-t",0,-u-9],["ch-b",0,u]]){const w=z("crosshair").querySelector("."+b);_?w.style.left=_+"px":w.style.top=M+"px"}}else{const a=n*.05;Rt.position.set(Math.sin(a)*30,14+Math.sin(n*.1)*2,Math.cos(a)*30),Rt.lookAt(0,2,0),Rt.fov=60,Rt.updateProjectionMatrix()}const s=io();for(const a of at.players){const o=Mn.get(a.id);if(!o)continue;const c=rn.sampleSmoothed(a.id,s)||a;o.update(c,t,n,Rt.position),c.connected===!1&&(o.root.visible=!1)}for(const a of n0)a.visible&&(a.rotation.y=n*1.2,a.children[0].position.y=a.children[1].position.y=Math.sin(n*2.4)*.05);Et.clear(),Et.render(Kn,Rt),Pt&&Y&&bn.lowered<.98&&(Et.clearDepth(),Et.render(bn.scene,bn.camera)),z("hitmarker").style.opacity=i<Fs?"1":"0",z("damage").style.opacity=i<_h?"0.75":Y&&Y.hp>0&&Y.hp<=30?String(.25+Math.sin(n*4)*.1):"0",i>gh&&z("notice").textContent&&(z("notice").textContent=""),xc+=t,xc>.1&&Pt&&(R1(),xc=0),gc++,Ia+=e,Dl=Dl*.9+e*1e3*.1,Ia>1&&($r=Math.round(gc/Ia),xt.quality==="auto"&&Pt&&($r<50&&yi>.75?(yi=Math.max(.75,yi-.15),Ks()):$r>58&&yi<Math.min(devicePixelRatio,1.5)&&(yi=Math.min(Math.min(devicePixelRatio,1.5),yi+.05),Ks())),gc=0,Ia=0)}Rt.position.set(30,14,30);Rt.lookAt(0,2,0);Et.clear();Et.render(Kn,Rt);z("engineLoading").hidden=!0;document.body.dataset.engine="ready";z("loadStatus").textContent="3D ENGINE READY · FOUNDRY ARENA · VX-7 / P-11 / KX-3";requestAnimationFrame(l0);window.blackoutDiagnostics=()=>({renderer:{...Et.info.render},memory:{...Et.info.memory},programs:Et.info.programs?.length,phase:at.phase,room:Pe.code,isHost:Pe.isHost,fps:$r,locked:Ri,effects:{tracers:Xt.t.filter(i=>i.life>0).length,emitted:Xt.tracerCount,max:Xt.maxT},conn:Pe.conn,sid:rn.sid,round:at.round,soldiers:Mn.size,me:Y&&{x:Y.x,y:Y.y,z:Y.z,hp:Y.hp,ammo:Y.ammo,reserve:Y.reserve,weapon:Y.weapon,ground:Y.ground,aiming:Y.aiming,kills:vn?.kills,height:Y.height,slide:Y.slide,protect:Y.protect},pending:Cn.pending.length,prediction:{...Cn.stats},interpolation:{...rn.stats},net:{...Pe.metrics},paused:fi,playing:Pt,chatHidden:z("chatInput").hidden,qaControl:ph,inLobbyView:po,players:at.players.map(i=>({id:i.id,name:i.name,x:i.x,y:i.y,z:i.z,hp:i.hp,kills:i.kills,deaths:i.deaths,connected:i.connected}))});
