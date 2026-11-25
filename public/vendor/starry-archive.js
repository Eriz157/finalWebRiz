
(()=>{var xr="187";var Mh=0,Ka=1,Sh=2;var ss=1,wh=2,kn=3,Di=0,Ft=1,ui=2,$i=0,bn=1,rs=2,Ha=3,qa=4,yh=5;var en=100,xh=101,Bh=102,Rh=103,Qh=104,vh=200,kh=201,bh=202,Jh=203,Xa=204,ja=205,Th=206,Fh=207,Uh=208,Lh=209,Gh=210,zh=211,Dh=212,Vh=213,Zh=214,Ps=0,Ks=1,Hs=2,Mn=3,qs=4,Xs=5,js=6,_s=7,_a=0,Yh=1,Nh=2,di=0,$a=1,eo=2,to=3,io=4,no=5,so=6,ro=7;var ao=300,tn=301,Jn=302,Br=303,Rr=304,$s=1e3,Pt=1001,er=1002,gt=1003,Oh=1004;var as=1005;var It=1006,Qr=1007;var ii=1008;var Ot=1009,oo=1010,ho=1011,Tn=1012,vr=1013,ni=1014,si=1015,ri=1016,kr=1017,br=1018,nn=1020,lo=35902,co=35899,uo=1021,fo=1022,ai=1023,Si=1026,yi=1027,po=1028,Jr=1029,Vi=1030,Tr=1031;var Fr=1033,os=33776,hs=33777,ls=33778,cs=33779,Ur=35840,Lr=35841,Gr=35842,zr=35843,Dr=36196,Vr=37492,Zr=37496,Yr=37488,Nr=37489,us=37490,Or=37491,Wr=37808,Pr=37809,Kr=37810,Hr=37811,qr=37812,Xr=37813,jr=37814,_r=37815,$r=37816,ea=37817,ta=37818,ia=37819,na=37820,sa=37821,ra=36492,aa=36494,oa=36495,ha=36283,la=36284,ds=36285,ca=36286;var Nn=2300,tr=2301,Ns=2302,Va=2303,Za=2400,Ya=2401,Na=2402;var Wh=3200;var Ao=0,Ph=1,oi="",Jt="srgb",On="srgb-linear",Wn="linear",Xe="srgb";var Os=7680;var Kh=519,Hh=512,qh=513,Xh=514,Eo=515,jh=516,_h=517,mo=518,go=519,$h=35044;var Io="300 es",Kt=2e3,Pn=2001;function jl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _l(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Sn(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function el(){let n=Sn("canvas");return n.style.display="block",n}var jo={},wn=null;function Co(...n){let e="THREE."+n.shift();wn?wn("log",e,...n):console.log(e,...n)}function tl(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Qe(...n){n=tl(n);let e="THREE."+n.shift();if(wn)wn("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Je(...n){n=tl(n);let e="THREE."+n.shift();if(wn)wn("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Yn(...n){let e=n.join(" ");e in jo||(jo[e]=!0,Qe(...n))}function il(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var nl={[Ps]:Ps,[Hs]:js,[qs]:qs,[Mn]:Xs,[Ks]:Ks,[js]:Hs,[_s]:_s,[Xs]:Mn},li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ia=Math.PI/180,ir=180/Math.PI;function fs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function Oe(n,e,t){return Math.max(e,Math.min(t,n))}function $l(n,e){return(n%e+e)%e}function Ca(n,e,t){return(1-t)*n+t*e}function sl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Mo(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ec(n,e){if(e.constructor===Float32Array)return n;let t=Mo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function tc(n,e){if(e.constructor===Float32Array)return n;let t=Mo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Ue=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Oe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ci=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let h=i[s+0],l=i[s+1],u=i[s+2],p=i[s+3],c=r[a+0],E=r[a+1],g=r[a+2],M=r[a+3];if(p!==M||h!==c||l!==E||u!==g){let f=h*c+l*E+u*g+p*M;f<0&&(c=-c,E=-E,g=-g,M=-M,f=-f);let d=1-o;if(f<.9995){let w=Math.acos(f),Q=Math.sin(w);d=Math.sin(d*w)/Q,o=Math.sin(o*w)/Q,h=h*d+c*o,l=l*d+E*o,u=u*d+g*o,p=p*d+M*o}else{h=h*d+c*o,l=l*d+E*o,u=u*d+g*o,p=p*d+M*o;let w=1/Math.sqrt(h*h+l*l+u*u+p*p);h*=w,l*=w,u*=w,p*=w}}e[t]=h,e[t+1]=l,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],h=i[s+1],l=i[s+2],u=i[s+3],p=r[a],c=r[a+1],E=r[a+2],g=r[a+3];return e[t]=o*g+u*p+h*E-l*c,e[t+1]=h*g+u*c+l*p-o*E,e[t+2]=l*g+u*E+o*c-h*p,e[t+3]=u*g-o*p-h*c-l*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,h=Math.sin,l=o(i/2),u=o(s/2),p=o(r/2),c=h(i/2),E=h(s/2),g=h(r/2);switch(a){case"XYZ":this._x=c*u*p+l*E*g,this._y=l*E*p-c*u*g,this._z=l*u*g+c*E*p,this._w=l*u*p-c*E*g;break;case"YXZ":this._x=c*u*p+l*E*g,this._y=l*E*p-c*u*g,this._z=l*u*g-c*E*p,this._w=l*u*p+c*E*g;break;case"ZXY":this._x=c*u*p-l*E*g,this._y=l*E*p+c*u*g,this._z=l*u*g+c*E*p,this._w=l*u*p-c*E*g;break;case"ZYX":this._x=c*u*p-l*E*g,this._y=l*E*p+c*u*g,this._z=l*u*g-c*E*p,this._w=l*u*p+c*E*g;break;case"YZX":this._x=c*u*p+l*E*g,this._y=l*E*p+c*u*g,this._z=l*u*g-c*E*p,this._w=l*u*p-c*E*g;break;case"XZY":this._x=c*u*p-l*E*g,this._y=l*E*p-c*u*g,this._z=l*u*g+c*E*p,this._w=l*u*p+c*E*g;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],h=t[9],l=t[2],u=t[6],p=t[10],c=i+o+p;if(c>0){let E=.5/Math.sqrt(c+1);this._w=.25/E,this._x=(u-h)*E,this._y=(r-l)*E,this._z=(a-s)*E}else if(i>o&&i>p){let E=2*Math.sqrt(1+i-o-p);this._w=(u-h)/E,this._x=.25*E,this._y=(s+a)/E,this._z=(r+l)/E}else if(o>p){let E=2*Math.sqrt(1+o-i-p);this._w=(r-l)/E,this._x=(s+a)/E,this._y=.25*E,this._z=(h+u)/E}else{let E=2*Math.sqrt(1+p-i-o);this._w=(a-s)/E,this._x=(r+l)/E,this._y=(h+u)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,h=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+s*l-r*h,this._y=s*u+a*h+r*o-i*l,this._z=r*u+a*l+i*h-s*o,this._w=a*u-i*o-s*h-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let h=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);h=Math.sin(h*l)/u,t=Math.sin(t*l)/u,this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+a*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+r*t,this._w=this._w*h+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_o.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_o.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,h=e.w,l=2*(a*s-o*i),u=2*(o*t-r*s),p=2*(r*i-a*t);return this.x=t+h*l+a*p-o*u,this.y=i+h*u+o*l-r*p,this.z=s+h*p+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,h=t.z;return this.x=s*h-r*o,this.y=r*a-i*h,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ma.copy(this).projectOnVector(e),this.sub(Ma)}reflect(e){return this.sub(Ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Oe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ma=new Z,_o=new ci,Te=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,h,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,h,l)}set(e,t,i,s,r,a,o,h,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=h,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],h=i[6],l=i[1],u=i[4],p=i[7],c=i[2],E=i[5],g=i[8],M=s[0],f=s[3],d=s[6],w=s[1],Q=s[4],y=s[7],R=s[2],x=s[5],m=s[8];return r[0]=a*M+o*w+h*R,r[3]=a*f+o*Q+h*x,r[6]=a*d+o*y+h*m,r[1]=l*M+u*w+p*R,r[4]=l*f+u*Q+p*x,r[7]=l*d+u*y+p*m,r[2]=c*M+E*w+g*R,r[5]=c*f+E*Q+g*x,r[8]=c*d+E*y+g*m,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],h=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*h+s*r*l-s*a*h}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],h=e[6],l=e[7],u=e[8],p=u*a-o*l,c=o*h-u*r,E=l*r-a*h,g=t*p+i*c+s*E;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return e[0]=p*M,e[1]=(s*l-u*i)*M,e[2]=(o*i-s*a)*M,e[3]=c*M,e[4]=(u*t-s*h)*M,e[5]=(s*r-o*t)*M,e[6]=E*M,e[7]=(i*h-l*t)*M,e[8]=(a*t-i*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let h=Math.cos(r),l=Math.sin(r);return this.set(i*h,i*l,-i*(h*a+l*o)+a+e,-s*l,s*h,-s*(-l*a+h*o)+o+t,0,0,1),this}scale(e,t){return Yn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sa.makeScale(e,t)),this}rotate(e){return Yn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sa.makeRotation(-e)),this}translate(e,t){return Yn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Sa=new Te,$o=new Te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new Te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ic(){let n={enabled:!0,workingColorSpace:On,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Xe&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Xe&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?Wn:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[On]:{primaries:e,whitePoint:i,transfer:Wn,toXYZ:$o,fromXYZ:eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:i,transfer:Xe,toXYZ:$o,fromXYZ:eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),n}var Ye=ic();function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var an,nr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{an===void 0&&(an=Sn("canvas")),an.width=e.width,an.height=e.height;let s=an.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=an}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Sn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mi(t[i]/255)*255):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},nc=0,yn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wa(s[a].image)):r.push(wa(s[a]))}else r=wa(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function wa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var sc=0,ya=new Z,Tt=class n extends li{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Pt,s=Pt,r=It,a=ii,o=ai,h=Ot,l=n.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=fs(),this.name="",this.source=new yn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ya).x}get height(){return this.source.getSize(ya).y}get depth(){return this.source.getSize(ya).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ao)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case Pt:e.x=e.x<0?0:1;break;case er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case Pt:e.y=e.y<0?0:1;break;case er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=ao;Tt.DEFAULT_ANISOTROPY=1;var it=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,h=e.elements,l=h[0],u=h[4],p=h[8],c=h[1],E=h[5],g=h[9],M=h[2],f=h[6],d=h[10];if(Math.abs(u-c)<.01&&Math.abs(p-M)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+c)<.1&&Math.abs(p+M)<.1&&Math.abs(g+f)<.1&&Math.abs(l+E+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let Q=(l+1)/2,y=(E+1)/2,R=(d+1)/2,x=(u+c)/4,m=(p+M)/4,S=(g+f)/4;return Q>y&&Q>R?Q<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(Q),s=x/i,r=m/i):y>R?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=x/s,r=S/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=m/r,s=S/r),this.set(i,s,r,t),this}let w=Math.sqrt((f-g)*(f-g)+(p-M)*(p-M)+(c-u)*(c-u));return Math.abs(w)<.001&&(w=1),this.x=(f-g)/w,this.y=(p-M)/w,this.z=(c-u)/w,this.w=Math.acos((l+E+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sr=class extends li{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Tt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new yn(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends sr{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Kn=class extends Tt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gt,this.minFilter=gt,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var rr=class extends Tt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gt,this.minFilter=gt,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ht=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,h,l,u,p,c,E,g,M,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,h,l,u,p,c,E,g,M,f)}set(e,t,i,s,r,a,o,h,l,u,p,c,E,g,M,f){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=h,d[2]=l,d[6]=u,d[10]=p,d[14]=c,d[3]=E,d[7]=g,d[11]=M,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/on.setFromMatrixColumn(e,0).length(),r=1/on.setFromMatrixColumn(e,1).length(),a=1/on.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),h=Math.cos(s),l=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let c=a*u,E=a*p,g=o*u,M=o*p;t[0]=h*u,t[4]=-h*p,t[8]=l,t[1]=E+g*l,t[5]=c-M*l,t[9]=-o*h,t[2]=M-c*l,t[6]=g+E*l,t[10]=a*h}else if(e.order==="YXZ"){let c=h*u,E=h*p,g=l*u,M=l*p;t[0]=c+M*o,t[4]=g*o-E,t[8]=a*l,t[1]=a*p,t[5]=a*u,t[9]=-o,t[2]=E*o-g,t[6]=M+c*o,t[10]=a*h}else if(e.order==="ZXY"){let c=h*u,E=h*p,g=l*u,M=l*p;t[0]=c-M*o,t[4]=-a*p,t[8]=g+E*o,t[1]=E+g*o,t[5]=a*u,t[9]=M-c*o,t[2]=-a*l,t[6]=o,t[10]=a*h}else if(e.order==="ZYX"){let c=a*u,E=a*p,g=o*u,M=o*p;t[0]=h*u,t[4]=g*l-E,t[8]=c*l+M,t[1]=h*p,t[5]=M*l+c,t[9]=E*l-g,t[2]=-l,t[6]=o*h,t[10]=a*h}else if(e.order==="YZX"){let c=a*h,E=a*l,g=o*h,M=o*l;t[0]=h*u,t[4]=M-c*p,t[8]=g*p+E,t[1]=p,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=E*p+g,t[10]=c-M*p}else if(e.order==="XZY"){let c=a*h,E=a*l,g=o*h,M=o*l;t[0]=h*u,t[4]=-p,t[8]=l*u,t[1]=c*p+M,t[5]=a*u,t[9]=E*p-g,t[2]=g*p-E,t[6]=o*u,t[10]=M*p+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rc,e,ac)}lookAt(e,t,i){let s=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Ri.crossVectors(i,zt),Ri.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Ri.crossVectors(i,zt)),Ri.normalize(),Ms.crossVectors(zt,Ri),s[0]=Ri.x,s[4]=Ms.x,s[8]=zt.x,s[1]=Ri.y,s[5]=Ms.y,s[9]=zt.y,s[2]=Ri.z,s[6]=Ms.z,s[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],h=i[8],l=i[12],u=i[1],p=i[5],c=i[9],E=i[13],g=i[2],M=i[6],f=i[10],d=i[14],w=i[3],Q=i[7],y=i[11],R=i[15],x=s[0],m=s[4],S=s[8],G=s[12],J=s[1],T=s[5],z=s[9],X=s[13],k=s[2],K=s[6],H=s[10],Y=s[14],ne=s[3],P=s[7],_=s[11],ie=s[15];return r[0]=a*x+o*J+h*k+l*ne,r[4]=a*m+o*T+h*K+l*P,r[8]=a*S+o*z+h*H+l*_,r[12]=a*G+o*X+h*Y+l*ie,r[1]=u*x+p*J+c*k+E*ne,r[5]=u*m+p*T+c*K+E*P,r[9]=u*S+p*z+c*H+E*_,r[13]=u*G+p*X+c*Y+E*ie,r[2]=g*x+M*J+f*k+d*ne,r[6]=g*m+M*T+f*K+d*P,r[10]=g*S+M*z+f*H+d*_,r[14]=g*G+M*X+f*Y+d*ie,r[3]=w*x+Q*J+y*k+R*ne,r[7]=w*m+Q*T+y*K+R*P,r[11]=w*S+Q*z+y*H+R*_,r[15]=w*G+Q*X+y*Y+R*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],h=e[9],l=e[13],u=e[2],p=e[6],c=e[10],E=e[14],g=e[3],M=e[7],f=e[11],d=e[15],w=h*E-l*c,Q=o*E-l*p,y=o*c-h*p,R=a*E-l*u,x=a*c-h*u,m=a*p-o*u;return t*(M*w-f*Q+d*y)-i*(g*w-f*R+d*x)+s*(g*Q-M*R+d*m)-r*(g*y-M*x+f*m)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],h=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-i*(r*u-o*h)+s*(r*l-a*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],h=e[6],l=e[7],u=e[8],p=e[9],c=e[10],E=e[11],g=e[12],M=e[13],f=e[14],d=e[15],w=t*o-i*a,Q=t*h-s*a,y=t*l-r*a,R=i*h-s*o,x=i*l-r*o,m=s*l-r*h,S=u*M-p*g,G=u*f-c*g,J=u*d-E*g,T=p*f-c*M,z=p*d-E*M,X=c*d-E*f,k=w*X-Q*z+y*T+R*J-x*G+m*S;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/k;return e[0]=(o*X-h*z+l*T)*K,e[1]=(s*z-i*X-r*T)*K,e[2]=(M*m-f*x+d*R)*K,e[3]=(c*x-p*m-E*R)*K,e[4]=(h*J-a*X-l*G)*K,e[5]=(t*X-s*J+r*G)*K,e[6]=(f*y-g*m-d*Q)*K,e[7]=(u*m-c*y+E*Q)*K,e[8]=(a*z-o*J+l*S)*K,e[9]=(i*J-t*z-r*S)*K,e[10]=(g*x-M*y+d*w)*K,e[11]=(p*y-u*x-E*w)*K,e[12]=(o*G-a*T-h*S)*K,e[13]=(t*T-i*G+s*S)*K,e[14]=(M*Q-g*R-f*w)*K,e[15]=(u*R-p*Q+c*w)*K,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,h=e.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*h,l*h+s*o,0,l*o+s*h,u*o+i,u*h-s*a,0,l*h-s*o,u*h+s*a,r*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,h=t._w,l=r+r,u=a+a,p=o+o,c=r*l,E=r*u,g=r*p,M=a*u,f=a*p,d=o*p,w=h*l,Q=h*u,y=h*p,R=i.x,x=i.y,m=i.z;return s[0]=(1-(M+d))*R,s[1]=(E+y)*R,s[2]=(g-Q)*R,s[3]=0,s[4]=(E-y)*x,s[5]=(1-(c+d))*x,s[6]=(f+w)*x,s[7]=0,s[8]=(g+Q)*m,s[9]=(f-w)*m,s[10]=(1-(c+M))*m,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=on.set(s[0],s[1],s[2]).length(),o=on.set(s[4],s[5],s[6]).length(),h=on.set(s[8],s[9],s[10]).length();r<0&&(a=-a),jt.copy(this);let l=1/a,u=1/o,p=1/h;return jt.elements[0]*=l,jt.elements[1]*=l,jt.elements[2]*=l,jt.elements[4]*=u,jt.elements[5]*=u,jt.elements[6]*=u,jt.elements[8]*=p,jt.elements[9]*=p,jt.elements[10]*=p,t.setFromRotationMatrix(jt),i.x=a,i.y=o,i.z=h,this}makePerspective(e,t,i,s,r,a,o=Kt,h=!1){let l=this.elements,u=2*r/(t-e),p=2*r/(i-s),c=(t+e)/(t-e),E=(i+s)/(i-s),g,M;if(h)g=r/(a-r),M=a*r/(a-r);else if(o===Kt)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Pn)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=p,l[9]=E,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Kt,h=!1){let l=this.elements,u=2/(t-e),p=2/(i-s),c=-(t+e)/(t-e),E=-(i+s)/(i-s),g,M;if(h)g=1/(a-r),M=a/(a-r);else if(o===Kt)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Pn)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=c,l[1]=0,l[5]=p,l[9]=0,l[13]=E,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},on=new Z,jt=new ht,rc=new Z(0,0,0),ac=new Z(1,1,1),Ri=new Z,Ms=new Z,zt=new Z,th=new ht,ih=new ci,Ti=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],h=s[1],l=s[5],u=s[9],p=s[2],c=s[6],E=s[10];switch(t){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,E),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,E),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-p,E),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Oe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(c,E),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,E));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,E),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(th,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ti.DEFAULT_ORDER="XYZ";var Hn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},oc=0,nh=new Z,hn=new ci,Ei=new ht,Ss=new Z,zn=new Z,hc=new Z,lc=new ci,sh=new Z(1,0,0),rh=new Z(0,1,0),ah=new Z(0,0,1),oh={type:"added"},cc={type:"removed"},ln={type:"childadded",child:null},xa={type:"childremoved",child:null},Yt=class n extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new Z,t=new Ti,i=new ci,s=new Z(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Te}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hn.setFromAxisAngle(e,t),this.quaternion.multiply(hn),this}rotateOnWorldAxis(e,t){return hn.setFromAxisAngle(e,t),this.quaternion.premultiply(hn),this}rotateX(e){return this.rotateOnAxis(sh,e)}rotateY(e){return this.rotateOnAxis(rh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return nh.copy(e).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sh,e)}translateY(e){return this.translateOnAxis(rh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ss.copy(e):Ss.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),zn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(zn,Ss,this.up):Ei.lookAt(Ss,zn,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),hn.setFromRotationMatrix(Ei),this.quaternion.premultiply(hn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oh),ln.child=e,this.dispatchEvent(ln),ln.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cc),xa.child=e,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oh),ln.child=e,this.dispatchEvent(ln),ln.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zn,e,hc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zn,lc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let l=0,u=h.length;l<u;l++){let p=h[l];r(e.shapes,p)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,l=this.material.length;h<l;h++)o.push(r(e.materials,this.material[h]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];s.animations.push(r(e.animations,h))}}if(t){let o=a(e.geometries),h=a(e.materials),l=a(e.textures),u=a(e.images),p=a(e.shapes),c=a(e.skeletons),E=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),c.length>0&&(i.skeletons=c),E.length>0&&(i.animations=E),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let h=[];for(let l in o){let u=o[l];delete u.metadata,h.push(u)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yt.DEFAULT_UP=new Z(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hi=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},uc={type:"move"},xn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,h=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let M of e.hand.values()){let f=t.getJointPose(M,i),d=this._getHandJoint(l,M);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],c=u.position.distanceTo(p.position),E=.02,g=.005;l.inputState.pinching&&c>E+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&c<=E-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uc)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},ws={h:0,s:0,l:0};function Ba(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ne=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ye.workingColorSpace){if(e=$l(e,1),t=Oe(t,0,1),i=Oe(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ba(a,r,e+1/3),this.g=Ba(a,r,e),this.b=Ba(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=Jt){function i(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){let i=rl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return Ye.workingToColorSpace(Bt.copy(this),e),Math.round(Oe(Bt.r*255,0,255))*65536+Math.round(Oe(Bt.g*255,0,255))*256+Math.round(Oe(Bt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Bt.copy(this),t);let i=Bt.r,s=Bt.g,r=Bt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),h,l,u=(o+a)/2;if(o===a)h=0,l=0;else{let p=a-o;switch(l=u<=.5?p/(a+o):p/(2-a-o),a){case i:h=(s-r)/p+(s<r?6:0);break;case s:h=(r-i)/p+2;break;case r:h=(i-s)/p+4;break}h/=6}return e.h=h,e.s=l,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Jt){Ye.workingToColorSpace(Bt.copy(this),e);let t=Bt.r,i=Bt.g,s=Bt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(ws);let i=Ca(Qi.h,ws.h,t),s=Ca(Qi.s,ws.s,t),r=Ca(Qi.l,ws.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new Ne;Ne.NAMES=rl;var qn=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},_t=new Z,mi=new Z,Ra=new Z,gi=new Z,cn=new Z,un=new Z,hh=new Z,Qa=new Z,va=new Z,ka=new Z,ba=new it,Ja=new it,Ta=new it,Ji=class n{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),_t.subVectors(e,t),s.cross(_t);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){_t.subVectors(s,t),mi.subVectors(i,t),Ra.subVectors(e,t);let a=_t.dot(_t),o=_t.dot(mi),h=_t.dot(Ra),l=mi.dot(mi),u=mi.dot(Ra),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;let c=1/p,E=(l*h-o*u)*c,g=(a*u-o*h)*c;return r.set(1-E-g,g,E)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,i,s,r,a,o,h){return this.getBarycoord(e,t,i,s,gi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,gi.x),h.addScaledVector(a,gi.y),h.addScaledVector(o,gi.z),h)}static getInterpolatedAttribute(e,t,i,s,r,a){return ba.setScalar(0),Ja.setScalar(0),Ta.setScalar(0),ba.fromBufferAttribute(e,t),Ja.fromBufferAttribute(e,i),Ta.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ba,r.x),a.addScaledVector(Ja,r.y),a.addScaledVector(Ta,r.z),a}static isFrontFacing(e,t,i,s){return _t.subVectors(i,t),mi.subVectors(e,t),_t.cross(mi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _t.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),_t.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;cn.subVectors(s,i),un.subVectors(r,i),Qa.subVectors(e,i);let h=cn.dot(Qa),l=un.dot(Qa);if(h<=0&&l<=0)return t.copy(i);va.subVectors(e,s);let u=cn.dot(va),p=un.dot(va);if(u>=0&&p<=u)return t.copy(s);let c=h*p-u*l;if(c<=0&&h>=0&&u<=0&&h-u>0)return a=h/(h-u),t.copy(i).addScaledVector(cn,a);ka.subVectors(e,r);let E=cn.dot(ka),g=un.dot(ka);if(g>=0&&E<=g)return t.copy(r);let M=E*l-h*g;if(M<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(un,o);let f=u*g-E*p;if(f<=0&&p-u>=0&&E-g>=0)return hh.subVectors(r,s),o=(p-u)/(p-u+(E-g)),t.copy(s).addScaledVector(hh,o);let d=1/(f+M+c);return a=M*d,o=c*d,t.copy(i).addScaledVector(cn,a).addScaledVector(un,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fi=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(r,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ys.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ys.copy(i.boundingBox)),ys.applyMatrix4(e.matrixWorld),this.union(ys)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dn),xs.subVectors(this.max,Dn),dn.subVectors(e.a,Dn),fn.subVectors(e.b,Dn),pn.subVectors(e.c,Dn),vi.subVectors(fn,dn),ki.subVectors(pn,fn),Oi.subVectors(dn,pn);let t=[0,-vi.z,vi.y,0,-ki.z,ki.y,0,-Oi.z,Oi.y,vi.z,0,-vi.x,ki.z,0,-ki.x,Oi.z,0,-Oi.x,-vi.y,vi.x,0,-ki.y,ki.x,0,-Oi.y,Oi.x,0];return!Fa(t,dn,fn,pn,xs)||(t=[1,0,0,0,1,0,0,0,1],!Fa(t,dn,fn,pn,xs))?!1:(Bs.crossVectors(vi,ki),t=[Bs.x,Bs.y,Bs.z],Fa(t,dn,fn,pn,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ii=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],$t=new Z,ys=new Fi,dn=new Z,fn=new Z,pn=new Z,vi=new Z,ki=new Z,Oi=new Z,Dn=new Z,xs=new Z,Bs=new Z,Wi=new Z;function Fa(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Wi.fromArray(n,r);let o=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),h=e.dot(Wi),l=t.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(h,l,u),Math.min(h,l,u))>o)return!1}return!0}var dt=new Z,Rs=new Ue,dc=0,Ut=class extends li{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$h,this.updateRanges=[],this.gpuType=si,this.version=0,this._normalizationScale=e!==void 0?Mo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXY(t,Rs.x,Rs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ec(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):tc(e,this.array)}};var Xn=class extends Ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var jn=class extends Ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ht=class extends Ut{constructor(e,t,i){super(new Float32Array(e),t,i)}},fc=new Fi,Vn=new Z,Ua=new Z,qi=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):fc.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vn.subVectors(e,this.center);let t=Vn.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Vn,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vn.copy(e.center).add(Ua)),this.expandByPoint(Vn.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},pc=0,Wt=new ht,La=new Yt,An=new Z,Dt=new Fi,Zn=new Fi,mt=new Z,ti=class n extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jl(e)?jn:Xn)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Te().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,i){return Wt.makeTranslation(e,t,i),this.applyMatrix4(Wt),this}scale(e,t,i){return Wt.makeScale(e,t,i),this.applyMatrix4(Wt),this}lookAt(e){return La.lookAt(e),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(An).negate(),this.translate(An.x,An.y,An.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ht(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){let i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Zn.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Dt.min,Zn.min),Dt.expandByPoint(mt),mt.addVectors(Dt.max,Zn.max),Dt.expandByPoint(mt)):(Dt.expandByPoint(Zn.min),Dt.expandByPoint(Zn.max))}Dt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)mt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(mt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],h=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)mt.fromBufferAttribute(o,l),h&&(An.fromBufferAttribute(e,l),mt.add(An)),s=Math.max(s,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ut(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],h=[],l=new Uint8Array(i.count);for(let G=0;G<i.count;G++)o[G]=new Z,h[G]=new Z;let u=new Z,p=new Z,c=new Z,E=new Ue,g=new Ue,M=new Ue,f=new Z,d=new Z;function w(G,J,T){l[G]=l[J]=l[T]=1,u.fromBufferAttribute(i,G),p.fromBufferAttribute(i,J),c.fromBufferAttribute(i,T),E.fromBufferAttribute(r,G),g.fromBufferAttribute(r,J),M.fromBufferAttribute(r,T),p.sub(u),c.sub(u),g.sub(E),M.sub(E);let z=1/(g.x*M.y-M.x*g.y);isFinite(z)&&(f.copy(p).multiplyScalar(M.y).addScaledVector(c,-g.y).multiplyScalar(z),d.copy(c).multiplyScalar(g.x).addScaledVector(p,-M.x).multiplyScalar(z),o[G].add(f),o[J].add(f),o[T].add(f),h[G].add(d),h[J].add(d),h[T].add(d))}let Q=this.groups;Q.length===0&&(Q=[{start:0,count:e.count}]);for(let G=0,J=Q.length;G<J;++G){let T=Q[G],z=T.start,X=T.count;for(let k=z,K=z+X;k<K;k+=3)w(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let y=new Z,R=new Z,x=new Z,m=new Z;function S(G){x.fromBufferAttribute(s,G),m.copy(x);let J=o[G];y.copy(J),y.sub(x.multiplyScalar(x.dot(J))).normalize(),R.crossVectors(m,J);let z=R.dot(h[G])<0?-1:1;a.setXYZW(G,y.x,y.y,y.z,z)}for(let G=0,J=i.count;G<J;++G)l[G]&&S(G);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let c=0,E=i.count;c<E;c++)i.setXYZ(c,0,0,0);let s=new Z,r=new Z,a=new Z,o=new Z,h=new Z,l=new Z,u=new Z,p=new Z;if(e)for(let c=0,E=e.count;c<E;c+=3){let g=e.getX(c+0),M=e.getX(c+1),f=e.getX(c+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,f),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(i,g),h.fromBufferAttribute(i,M),l.fromBufferAttribute(i,f),o.add(u),h.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,h.x,h.y,h.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let c=0,E=t.count;c<E;c+=3)s.fromBufferAttribute(t,c+0),r.fromBufferAttribute(t,c+1),a.fromBufferAttribute(t,c+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),i.setXYZ(c+0,u.x,u.y,u.z),i.setXYZ(c+1,u.x,u.y,u.z),i.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,h){let l=o.array,u=o.itemSize,p=o.normalized,c=new l.constructor(h.length*u),E=0,g=0;for(let M=0,f=h.length;M<f;M++){o.isInterleavedBufferAttribute?E=h[M]*o.data.stride+o.offset:E=h[M]*u;for(let d=0;d<u;d++)c[g++]=l[E++]}return new Ut(c,u,p)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let h=s[o],l=e(h,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let h=[],l=r[o];for(let u=0,p=l.length;u<p;u++){let c=l[u],E=e(c,i);h.push(E)}t.morphAttributes[o]=h}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,h=a.length;o<h;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let l in h)h[l]!==void 0&&(e[l]=h[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let h in i){let l=i[h];e.data.attributes[h]=l.toJSON(e.data)}let s={},r=!1;for(let h in this.morphAttributes){let l=this.morphAttributes[h],u=[];for(let p=0,c=l.length;p<c;p++){let E=l[p];u.push(E.toJSON(e.data))}u.length>0&&(s[h]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],p=r[l];for(let c=0,E=p.length;c<E;c++)u.push(p[c].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ga=new Z,Ac=new Z,Ec=new Te,ei=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ga.subVectors(i,t).cross(Ac.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Ga),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ec.getNormalMatrix(e),s=this.coplanarPoint(Ga).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},mc=0,Ui=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=bn,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=ja,this.blendEquation=en,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Mn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let h=r[o];delete h.metadata,a.push(h)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ei().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ue().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ci=new Z,za=new Z,Qs=new Z,vs=new Z,_n=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){za.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),vs.copy(this.origin).sub(za);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Qs),o=vs.dot(this.direction),h=-vs.dot(Qs),l=vs.lengthSq(),u=Math.abs(1-a*a),p,c,E,g;if(u>0)if(p=a*h-o,c=a*o-h,g=r*u,p>=0)if(c>=-g)if(c<=g){let M=1/u;p*=M,c*=M,E=p*(p+a*c+2*o)+c*(a*p+c+2*h)+l}else c=r,p=Math.max(0,-(a*c+o)),E=-p*p+c*(c+2*h)+l;else c=-r,p=Math.max(0,-(a*c+o)),E=-p*p+c*(c+2*h)+l;else c<=-g?(p=Math.max(0,-(-a*r+o)),c=p>0?-r:Math.min(Math.max(-r,-h),r),E=-p*p+c*(c+2*h)+l):c<=g?(p=0,c=Math.min(Math.max(-r,-h),r),E=c*(c+2*h)+l):(p=Math.max(0,-(a*r+o)),c=p>0?r:Math.min(Math.max(-r,-h),r),E=-p*p+c*(c+2*h)+l);else c=a>0?-r:r,p=Math.max(0,-(a*c+o)),E=-p*p+c*(c+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(za).addScaledVector(Qs,c),E}intersectSphere(e,t){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);let i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,h=i+a;return h<0?null:o<0?this.at(h,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,h,l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,c=this.origin;return l>=0?(i=(e.min.x-c.x)*l,s=(e.max.x-c.x)*l):(i=(e.max.x-c.x)*l,s=(e.min.x-c.x)*l),u>=0?(r=(e.min.y-c.y)*u,a=(e.max.y-c.y)*u):(r=(e.max.y-c.y)*u,a=(e.min.y-c.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-c.z)*p,h=(e.max.z-c.z)*p):(o=(e.max.z-c.z)*p,h=(e.min.z-c.z)*p),i>h||o>s)||((o>i||i!==i)&&(i=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,h=o.x,l=o.y,u=o.z,p=e.x-a.x,c=e.y-a.y,E=e.z-a.z,g=t.x-a.x,M=t.y-a.y,f=t.z-a.z,d=i.x-a.x,w=i.y-a.y,Q=i.z-a.z,y=Math.abs(h),R=Math.abs(l),x=Math.abs(u),m,S,G,J,T,z,X,k,K,H,Y,ne;if(y>=R&&y>=x?(G=h,z=p,K=g,ne=d,h>=0?(m=l,S=u,J=c,T=E,X=M,k=f,H=w,Y=Q):(m=u,S=l,J=E,T=c,X=f,k=M,H=Q,Y=w)):R>=x?(G=l,z=c,K=M,ne=w,l>=0?(m=u,S=h,J=E,T=p,X=f,k=g,H=Q,Y=d):(m=h,S=u,J=p,T=E,X=g,k=f,H=d,Y=Q)):(G=u,z=E,K=f,ne=Q,u>=0?(m=h,S=l,J=p,T=c,X=g,k=M,H=d,Y=w):(m=l,S=h,J=c,T=p,X=M,k=g,H=w,Y=d)),G===0)return null;let P=m/G,_=S/G,ie=1/G,Ie=J-P*z,ke=T-_*z,$=X-P*K,de=k-_*K,me=H-P*ne,ye=Y-_*ne,fe=me*de-ye*$,be=Ie*ye-ke*me,rt=$*ke-de*Ie;if(s){if(fe<0||be<0||rt<0)return null}else if((fe<0||be<0||rt<0)&&(fe>0||be>0||rt>0))return null;let Re=fe+be+rt;if(Re===0)return null;let Pe=ie*(fe*z+be*K+rt*ne);return(Re>0?Pe<0:Pe>0)?null:this.at(Pe/Re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ar=class extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},lh=new ht,Pi=new _n,ks=new qi,ch=new Z,bs=new Z,Js=new Z,Ts=new Z,Da=new Z,Fs=new Z,uh=new Z,Us=new Z,qt=class extends Yt{constructor(e=new ti,t=new ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let h=0,l=r.length;h<l;h++){let u=o[h],p=r[h];u!==0&&(Da.fromBufferAttribute(p,e),a?Fs.addScaledVector(Da,u):Fs.addScaledVector(Da.sub(t),u))}t.add(Fs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!(ks.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(ks,ch)===null||Pi.origin.distanceToSquared(ch)>(e.far-e.near)**2))&&(lh.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(lh),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,h=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,c=r.groups,E=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=c.length;g<M;g++){let f=c[g],d=a[f.materialIndex],w=Math.max(f.start,E.start),Q=Math.min(o.count,Math.min(f.start+f.count,E.start+E.count));for(let y=w,R=Q;y<R;y+=3){let x=o.getX(y),m=o.getX(y+1),S=o.getX(y+2);s=Ls(this,d,e,i,l,u,p,x,m,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,E.start),M=Math.min(o.count,E.start+E.count);for(let f=g,d=M;f<d;f+=3){let w=o.getX(f),Q=o.getX(f+1),y=o.getX(f+2);s=Ls(this,a,e,i,l,u,p,w,Q,y),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let g=0,M=c.length;g<M;g++){let f=c[g],d=a[f.materialIndex],w=Math.max(f.start,E.start),Q=Math.min(h.count,Math.min(f.start+f.count,E.start+E.count));for(let y=w,R=Q;y<R;y+=3){let x=y,m=y+1,S=y+2;s=Ls(this,d,e,i,l,u,p,x,m,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,E.start),M=Math.min(h.count,E.start+E.count);for(let f=g,d=M;f<d;f+=3){let w=f,Q=f+1,y=f+2;s=Ls(this,a,e,i,l,u,p,w,Q,y),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function gc(n,e,t,i,s,r,a,o){let h;if(e.side===Ft?h=i.intersectTriangle(a,r,s,!0,o):h=i.intersectTriangle(s,r,a,e.side===Di,o),h===null)return null;Us.copy(o),Us.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Us);return l<t.near||l>t.far?null:{distance:l,point:Us.clone(),object:n}}function Ls(n,e,t,i,s,r,a,o,h,l){n.getVertexPosition(o,bs),n.getVertexPosition(h,Js),n.getVertexPosition(l,Ts);let u=gc(n,e,t,i,bs,Js,Ts,uh);if(u){let p=new Z;Ji.getBarycoord(uh,bs,Js,Ts,p),s&&(u.uv=Ji.getInterpolatedAttribute(s,o,h,l,p,new Ue)),r&&(u.uv1=Ji.getInterpolatedAttribute(r,o,h,l,p,new Ue)),a&&(u.normal=Ji.getInterpolatedAttribute(a,o,h,l,p,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let c={a:o,b:h,c:l,normal:new Z,materialIndex:0};Ji.getNormal(bs,Js,Ts,c.normal),u.face=c,u.barycoord=p}return u}var or=class extends Tt{constructor(e=null,t=1,i=1,s,r,a,o,h,l=gt,u=gt,p,c){super(null,a,o,h,l,u,s,r,p,c),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ki=new qi,Ic=new Ue(.5,.5),Gs=new Z,Xi=class{constructor(e=new ei,t=new ei,i=new ei,s=new ei,r=new ei,a=new ei){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kt,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],h=r[2],l=r[3],u=r[4],p=r[5],c=r[6],E=r[7],g=r[8],M=r[9],f=r[10],d=r[11],w=r[12],Q=r[13],y=r[14],R=r[15];if(s[0].setComponents(l-a,E-u,d-g,R-w).normalize(),s[1].setComponents(l+a,E+u,d+g,R+w).normalize(),s[2].setComponents(l+o,E+p,d+M,R+Q).normalize(),s[3].setComponents(l-o,E-p,d-M,R-Q).normalize(),i)s[4].setComponents(h,c,f,y).normalize(),s[5].setComponents(l-h,E-c,d-f,R-y).normalize();else if(s[4].setComponents(l-h,E-c,d-f,R-y).normalize(),t===Kt)s[5].setComponents(l+h,E+c,d+f,R+y).normalize();else if(t===Pn)s[5].setComponents(h,c,f,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){Ki.center.set(0,0,0);let t=Ic.distanceTo(e.center);return Ki.radius=.7071067811865476+t,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Gs.x=s.normal.x>0?e.max.x:e.min.x,Gs.y=s.normal.y>0?e.max.y:e.min.y,Gs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},dh=new ht,hr=class n{constructor(){this.coordinateSystem=Kt,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];dh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Xi),i[s].setFromProjectionMatrix(dh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Xi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var lr=class extends Ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fh=new ht,Oa=new _n,zs=new qi,Ds=new Z,Bn=class extends Yt{constructor(e=new ti,t=new lr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(s),zs.radius+=r,e.ray.intersectsSphere(zs)===!1)return;fh.copy(s).invert(),Oa.copy(e.ray).applyMatrix4(fh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,l=i.index,p=i.attributes.position;if(l!==null){let c=Math.max(0,a.start),E=Math.min(l.count,a.start+a.count);for(let g=c,M=E;g<M;g++){let f=l.getX(g);Ds.fromBufferAttribute(p,f),ph(Ds,f,h,s,e,t,this)}}else{let c=Math.max(0,a.start),E=Math.min(p.count,a.start+a.count);for(let g=c,M=E;g<M;g++)Ds.fromBufferAttribute(p,g),ph(Ds,g,h,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ph(n,e,t,i,s,r,a){let o=Oa.distanceSqToPoint(n);if(o<t){let h=new Z;Oa.closestPointToPoint(n,h),h.applyMatrix4(i);let l=s.ray.origin.distanceTo(h);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var $n=class extends Tt{constructor(e=[],t=tn,i,s,r,a,o,h,l,u){super(e,t,i,s,r,a,o,h,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var wi=class extends Tt{constructor(e,t,i=ni,s,r,a,o=gt,h=gt,l,u=Si,p=1){if(u!==Si&&u!==yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let c={width:e,height:t,depth:p};super(c,s,r,a,o,h,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},es=class extends wi{constructor(e,t=ni,i=tn,s,r,a=gt,o=gt,h,l=Si){let u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,h,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ts=class extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Rn=class n extends ti{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let h=[],l=[],u=[],p=[],c=0,E=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(h),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(p,2));function g(M,f,d,w,Q,y,R,x,m,S,G){let J=y/m,T=R/S,z=y/2,X=R/2,k=x/2,K=m+1,H=S+1,Y=0,ne=0,P=new Z;for(let _=0;_<H;_++){let ie=_*T-X;for(let Ie=0;Ie<K;Ie++){let ke=Ie*J-z;P[M]=ke*w,P[f]=ie*Q,P[d]=k,l.push(P.x,P.y,P.z),P[M]=0,P[f]=0,P[d]=x>0?1:-1,u.push(P.x,P.y,P.z),p.push(Ie/m),p.push(1-_/S),Y+=1}}for(let _=0;_<S;_++)for(let ie=0;ie<m;ie++){let Ie=c+ie+K*_,ke=c+ie+K*(_+1),$=c+(ie+1)+K*(_+1),de=c+(ie+1)+K*_;h.push(Ie,ke,de),h.push(ke,$,de),ne+=6}o.addGroup(E,ne,G),E+=ne,c+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ji=class n extends ti{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),h=Math.floor(s),l=o+1,u=h+1,p=e/o,c=t/h,E=[],g=[],M=[],f=[];for(let d=0;d<u;d++){let w=d*c-a;for(let Q=0;Q<l;Q++){let y=Q*p-r;g.push(y,-w,0),M.push(0,0,1),f.push(Q/o),f.push(1-d/h)}}for(let d=0;d<h;d++)for(let w=0;w<o;w++){let Q=w+l*d,y=w+l*(d+1),R=w+1+l*(d+1),x=w+1+l*d;E.push(Q,y,x),E.push(y,R,x)}this.setIndex(E),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(M,3)),this.setAttribute("uv",new Ht(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function sn(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Ah(s))s.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Ah(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Rt(n){let e={};for(let t=0;t<n.length;t++){let i=sn(n[t]);for(let s in i)e[s]=i[s]}return e}function Ah(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Cc(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function So(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var al={clone:sn,merge:Rt},Mc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mc,this.fragmentShader=Sc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sn(e.uniforms),this.uniformsGroups=Cc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ue().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[i].value=new it().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Te().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ht().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},cr=class extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ur=class extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dr=class extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function En(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Vs(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Li=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let h=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fr=class extends Li{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Za,endingEnd:Za}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],h=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ya:r=e,o=2*t-i;break;case Na:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(h===void 0)switch(this.getSettings_().endingEnd){case Ya:a=e,h=2*i-t;break;case Na:a=1,h=i+s[1]-s[0];break;default:a=e-1,h=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(h-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=e*o,l=h-o,u=this._offsetPrev,p=this._offsetNext,c=this._weightPrev,E=this._weightNext,g=(i-t)/(s-t),M=g*g,f=M*g,d=-c*f+2*c*M-c*g,w=(1+c)*f+(-1.5-2*c)*M+(-.5+c)*g+1,Q=(-1-E)*f+(1.5+E)*M+.5*g,y=E*f-E*M;for(let R=0;R!==o;++R)r[R]=d*a[u+R]+w*a[l+R]+Q*a[h+R]+y*a[p+R];return r}},pr=class extends Li{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=e*o,l=h-o,u=(i-t)/(s-t),p=1-u;for(let c=0;c!==o;++c)r[c]=a[l+c]*p+a[h+c]*u;return r}},Ar=class extends Li{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Er=class extends Li{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=e*o,l=h-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let g=(i-t)/(s-t),M=1-g;for(let f=0;f!==o;++f)r[f]=a[l+f]*M+a[h+f]*g;return r}let c=o*2,E=e-1;for(let g=0;g!==o;++g){let M=a[l+g],f=a[h+g],d=E*c+g*2,w=p[d],Q=p[d+1],y=e*c+g*2,R=u[y],x=u[y+1],m=yc(i,t,w,R,s);r[g]=ol(m,M,Q,x,f)}return r}};function ol(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function wc(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function yc(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=ol(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let h=wc(r,e,t,i,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-o/h))}return r}var Nt=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=En(t,this.TimeBufferType),this.values=En(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:En(e.times,Array),values:En(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Vs(e.settings)&&(i.settings={inTangents:En(e.settings.inTangents,Array),outTangents:En(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ar(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Er(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Nn:t=this.InterpolantFactoryMethodDiscrete;break;case tr:t=this.InterpolantFactoryMethodLinear;break;case Ns:t=this.InterpolantFactoryMethodSmooth;break;case Va:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nn;case this.InterpolantFactoryMethodLinear:return tr;case this.InterpolantFactoryMethodSmooth:return Ns;case this.InterpolantFactoryMethodBezier:return Va}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Vs(this.settings)&&(Eh(this.settings.inTangents,e),Eh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Vs(this.settings)&&(mh(this.settings.inTangents,e),mh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let h=i[o];if(typeof h=="number"&&isNaN(h)){Je("KeyframeTrack: Time is not a valid number.",this,o,h),e=!1;break}if(a!==null&&a>h){Je("KeyframeTrack: Out of order keys.",this,o,h,a),e=!1;break}a=h}if(s!==void 0&&_l(s))for(let o=0,h=s.length;o!==h;++o){let l=s[o];if(isNaN(l)){Je("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ns,r=e.length-1,a=1;for(let o=1;o<r;++o){let h=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)h=!0;else{let p=o*i,c=p-i,E=p+i;for(let g=0;g!==i;++g){let M=t[p+g];if(M!==t[c+g]||M!==t[E+g]){h=!0;break}}}if(h){if(o!==a){e[a]=e[o];let p=o*i,c=a*i;for(let E=0;E!==i;++E)t[c+E]=t[p+E]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,h=a*i,l=0;l!==i;++l)t[h+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Vs(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Eh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function mh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Nt.prototype.ValueTypeName="";Nt.prototype.TimeBufferType=Float32Array;Nt.prototype.ValueBufferType=Float32Array;Nt.prototype.DefaultInterpolation=tr;var Gi=class extends Nt{constructor(e,t,i){super(e,t,i)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Nn;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends Nt{constructor(e,t,i,s){super(e,t,i,s)}};mr.prototype.ValueTypeName="color";var gr=class extends Nt{constructor(e,t,i,s){super(e,t,i,s)}};gr.prototype.ValueTypeName="number";var Ir=class extends Li{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=(i-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)ci.slerpFlat(r,0,a,l-o,a,l,h);return r}},is=class extends Nt{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ir(this.times,this.values,this.getValueSize(),e)}};is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends Nt{constructor(e,t,i){super(e,t,i)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Nn;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends Nt{constructor(e,t,i,s){super(e,t,i,s)}};Cr.prototype.ValueTypeName="vector";var Ws={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(gh(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!gh(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function gh(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Mr=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,h,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),h?h(u):u},this.setURLModifier=function(u){return h=u,this},this.addHandler=function(u,p){return l.push(u,p),this},this.removeHandler=function(u){let p=l.indexOf(u);return p!==-1&&l.splice(p,2),this},this.getHandler=function(u){for(let p=0,c=l.length;p<c;p+=2){let E=l[p],g=l[p+1];if(E.global&&(E.lastIndex=0),E.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hl=new Mr,Qn=class{constructor(e){this.manager=e!==void 0?e:hl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var mn=new WeakMap,Sr=class extends Qn{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ws.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let p=mn.get(a);p===void 0&&(p=[],mn.set(a,p)),p.push({onLoad:t,onError:s})}return a}let o=Sn("img");function h(){u(),t&&t(this);let p=mn.get(this)||[];for(let c=0;c<p.length;c++){let E=p[c];E.onLoad&&E.onLoad(this)}mn.delete(this),r.manager.itemEnd(e)}function l(p){u(),s&&s(p),Ws.remove(`image:${e}`);let c=mn.get(this)||[];for(let E=0;E<c.length;E++){let g=c[E];g.onError&&g.onError(p)}mn.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",h,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ws.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var ns=class extends Qn{constructor(e){super(e)}load(e,t,i,s){let r=new Tt,a=new Sr(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}};var Zs=new Z,Ys=new ci,hi=new Z,_i=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Kt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zs,Ys,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zs,Ys,hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Zs,Ys,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zs,Ys,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bi=new Z,Ih=new Ue,Ch=new Ue,Vt=class extends _i{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Ih,Ch),t.subVectors(Ch,Ih)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ia*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/h,t-=a.offsetY*i/l,s*=a.width/h,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var wr=class extends _i{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,h=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,h=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var gn=-90,In=1,vn=class extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(gn,In,e,t);s.layers=this.layers,this.add(s);let r=new Vt(gn,In,e,t);r.layers=this.layers,this.add(r);let a=new Vt(gn,In,e,t);a.layers=this.layers,this.add(a);let o=new Vt(gn,In,e,t);o.layers=this.layers,this.add(o);let h=new Vt(gn,In,e,t);h.layers=this.layers,this.add(h);let l=new Vt(gn,In,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,h]=t;for(let l of t)this.remove(l);if(e===Kt)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Pn)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,h,l,u]=this.children,p=e.getRenderTarget(),c=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=M,e.setRenderTarget(i,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,c,E),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},yr=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var wo="\\[\\]\\.:\\/",xc=new RegExp("["+wo+"]","g"),yo="[^"+wo+"]",Bc="[^"+wo.replace("\\.","")+"]",Rc=/((?:WC+[\/:])*)/.source.replace("WC",yo),Qc=/(WCOD+)?/.source.replace("WCOD",Bc),vc=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yo),kc=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yo),bc=new RegExp("^"+Rc+Qc+vc+kc+"$"),Jc=["material","materials","bones","map"],Wa=class{constructor(e,t,i){let s=i||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},st=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xc,"")}static parseTrackName(e){let t=bc.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Jc.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let h=i(o.children);if(h)return h}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};st.Composite=Wa;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RA=new Float32Array(1);var Pa=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function xo(n,e,t,i){let s=Tc(i);switch(t){case uo:return n*e;case po:return n*e/s.components*s.byteLength;case Jr:return n*e/s.components*s.byteLength;case Vi:return n*e*2/s.components*s.byteLength;case Tr:return n*e*2/s.components*s.byteLength;case fo:return n*e*3/s.components*s.byteLength;case ai:return n*e*4/s.components*s.byteLength;case Fr:return n*e*4/s.components*s.byteLength;case os:case hs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ls:case cs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lr:case zr:return Math.max(n,16)*Math.max(e,8)/4;case Ur:case Gr:return Math.max(n,8)*Math.max(e,8)/2;case Dr:case Vr:case Yr:case Nr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zr:case us:case Or:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pr:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Kr:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hr:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qr:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xr:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case jr:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _r:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $r:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ea:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ta:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ia:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case na:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ra:case aa:case oa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ha:case la:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ds:case ca:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tc(n){switch(n){case Ot:case oo:return{byteLength:1,components:1};case Tn:case ho:case ri:return{byteLength:2,components:1};case kr:case br:return{byteLength:2,components:4};case ni:case vr:case si:return{byteLength:4,components:1};case lo:case co:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xr}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xr);function kl(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Fc(n){let e=new WeakMap;function t(o,h){let l=o.array,u=o.usage,p=l.byteLength,c=n.createBuffer();n.bindBuffer(h,c),n.bufferData(h,l,u),o.onUploadCallback();let E;if(l instanceof Float32Array)E=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)E=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?E=n.HALF_FLOAT:E=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)E=n.SHORT;else if(l instanceof Uint32Array)E=n.UNSIGNED_INT;else if(l instanceof Int32Array)E=n.INT;else if(l instanceof Int8Array)E=n.BYTE;else if(l instanceof Uint8Array)E=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)E=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:c,type:E,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,h,l){let u=h.array,p=h.updateRanges;if(n.bindBuffer(l,o),p.length===0)n.bufferSubData(l,0,u);else{p.sort((E,g)=>E.start-g.start);let c=0;for(let E=1;E<p.length;E++){let g=p[c],M=p[E];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++c,p[c]=M)}p.length=c+1;for(let E=0,g=p.length;E<g;E++){let M=p[E];n.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let h=e.get(o);h&&(n.deleteBuffer(h.buffer),e.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,h));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,h),l.version=o.version}}return{get:s,remove:r,update:a}}var Uc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lc=`#ifdef USE_ALPHAHASH
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
#endif`,Gc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zc=`#ifdef USE_AOMAP
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
#endif`,Yc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nc=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Oc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hc=`#ifdef USE_IRIDESCENCE
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
#endif`,qc=`#ifdef USE_BUMPMAP
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
#endif`,Xc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_c=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$c=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,su=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,ru=`vec3 transformedNormal = objectNormal;
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
#endif`,au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ou=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",uu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,du=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
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
#endif`,Au=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mu=`#ifdef USE_GRADIENTMAP
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
}`,Su=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xu=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Bu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Ju=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tu=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lu=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Gu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Du=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ou=`#if defined( USE_POINTS_UV )
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
#endif`,Wu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ku=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hu=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xu=`#ifdef USE_MORPHTARGETS
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
#endif`,ju=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_u=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$u=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nd=`#ifdef USE_NORMALMAP
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
#endif`,sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,od=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ld=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,cd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Id=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Md=`#ifdef USE_SKINNING
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
#endif`,Sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wd=`#ifdef USE_SKINNING
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
#endif`,yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qd=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vd=`#ifdef USE_TRANSMISSION
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
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ud=`uniform sampler2D t2D;
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
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gd=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`#include <common>
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
}`,Zd=`#if DEPTH_PACKING == 3200
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
}`,Yd=`#define DISTANCE
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
}`,Nd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pd=`uniform float scale;
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
}`,Kd=`uniform vec3 diffuse;
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
}`,Hd=`#include <common>
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
}`,qd=`uniform vec3 diffuse;
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
}`,Xd=`#define LAMBERT
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
}`,jd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,_d=`#define MATCAP
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
}`,$d=`#define MATCAP
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
}`,ef=`#define NORMAL
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
}`,tf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nf=`#define PHONG
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
}`,sf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,rf=`#define STANDARD
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
}`,af=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,of=`#define TOON
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
}`,hf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,lf=`uniform float size;
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
}`,cf=`uniform vec3 diffuse;
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
}`,uf=`#include <common>
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
}`,df=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,ff=`uniform float rotation;
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
}`,pf=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Uc,alphahash_pars_fragment:Lc,alphamap_fragment:Gc,alphamap_pars_fragment:zc,alphatest_fragment:Dc,alphatest_pars_fragment:Vc,aomap_fragment:Zc,aomap_pars_fragment:Yc,batching_pars_vertex:Nc,batching_vertex:Oc,begin_vertex:Wc,beginnormal_vertex:Pc,bsdfs:Kc,iridescence_fragment:Hc,bumpmap_pars_fragment:qc,clipping_planes_fragment:Xc,clipping_planes_pars_fragment:jc,clipping_planes_pars_vertex:_c,clipping_planes_vertex:$c,color_fragment:eu,color_pars_fragment:tu,color_pars_vertex:iu,color_vertex:nu,common:su,defaultnormal_vertex:ru,displacementmap_pars_vertex:au,displacementmap_vertex:ou,emissivemap_fragment:hu,emissivemap_pars_fragment:lu,colorspace_fragment:cu,colorspace_pars_fragment:uu,envmap_fragment:du,envmap_common_pars_fragment:fu,envmap_pars_fragment:pu,envmap_pars_vertex:Au,envmap_physical_pars_fragment:Bu,envmap_vertex:Eu,fog_vertex:mu,fog_pars_vertex:gu,fog_fragment:Iu,fog_pars_fragment:Cu,gradientmap_pars_fragment:Mu,lightmap_pars_fragment:Su,lights_lambert_fragment:wu,lights_lambert_pars_fragment:yu,lights_pars_begin:xu,lights_toon_fragment:Ru,lights_toon_pars_fragment:Qu,lights_phong_fragment:vu,lights_phong_pars_fragment:ku,lights_physical_fragment:bu,lights_physical_pars_fragment:Ju,lights_fragment_begin:Tu,lights_fragment_maps:Fu,lights_fragment_end:Uu,lightprobes_pars_fragment:Lu,logdepthbuf_fragment:Gu,logdepthbuf_pars_fragment:zu,logdepthbuf_pars_vertex:Du,logdepthbuf_vertex:Vu,map_fragment:Zu,map_pars_fragment:Yu,map_particle_fragment:Nu,map_particle_pars_fragment:Ou,metalnessmap_fragment:Wu,metalnessmap_pars_fragment:Pu,morphinstance_vertex:Ku,morphcolor_vertex:Hu,morphnormal_vertex:qu,morphtarget_pars_vertex:Xu,morphtarget_vertex:ju,normal_fragment_begin:_u,normal_fragment_maps:$u,normal_pars_fragment:ed,normal_pars_vertex:td,normal_vertex:id,normalmap_pars_fragment:nd,clearcoat_normal_fragment_begin:sd,clearcoat_normal_fragment_maps:rd,clearcoat_pars_fragment:ad,iridescence_pars_fragment:od,opaque_fragment:hd,packing:ld,premultiplied_alpha_fragment:cd,project_vertex:ud,dithering_fragment:dd,dithering_pars_fragment:fd,roughnessmap_fragment:pd,roughnessmap_pars_fragment:Ad,shadowmap_pars_fragment:Ed,shadowmap_pars_vertex:md,shadowmap_vertex:gd,shadowmask_pars_fragment:Id,skinbase_vertex:Cd,skinning_pars_vertex:Md,skinning_vertex:Sd,skinnormal_vertex:wd,specularmap_fragment:yd,specularmap_pars_fragment:xd,tonemapping_fragment:Bd,tonemapping_pars_fragment:Rd,transmission_fragment:Qd,transmission_pars_fragment:vd,uv_pars_fragment:kd,uv_pars_vertex:bd,uv_vertex:Jd,worldpos_vertex:Td,background_vert:Fd,background_frag:Ud,backgroundCube_vert:Ld,backgroundCube_frag:Gd,cube_vert:zd,cube_frag:Dd,depth_vert:Vd,depth_frag:Zd,distance_vert:Yd,distance_frag:Nd,equirect_vert:Od,equirect_frag:Wd,linedashed_vert:Pd,linedashed_frag:Kd,meshbasic_vert:Hd,meshbasic_frag:qd,meshlambert_vert:Xd,meshlambert_frag:jd,meshmatcap_vert:_d,meshmatcap_frag:$d,meshnormal_vert:ef,meshnormal_frag:tf,meshphong_vert:nf,meshphong_frag:sf,meshphysical_vert:rf,meshphysical_frag:af,meshtoon_vert:of,meshtoon_frag:hf,points_vert:lf,points_frag:cf,shadow_vert:uf,shadow_frag:df,sprite_vert:ff,sprite_frag:pf},Ae={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},envMapRotation:{value:new Te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},pi={basic:{uniforms:Rt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Rt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Rt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Rt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Rt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Rt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Rt([Ae.points,Ae.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Rt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Rt([Ae.common,Ae.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Rt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Rt([Ae.sprite,Ae.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Te}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Rt([Ae.common,Ae.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Rt([Ae.lights,Ae.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};pi.physical={uniforms:Rt([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var ua={r:0,b:0,g:0},Af=new ht,bl=new Te;bl.set(-1,0,0,0,1,0,0,0,1);function Ef(n,e,t,i,s,r){let a=new Ne(0),o=s===!0?0:1,h,l,u=null,p=0,c=null;function E(w){let Q=w.isScene===!0?w.background:null;if(Q&&Q.isTexture){let y=w.backgroundBlurriness>0;Q=e.get(Q,y)}return Q}function g(w){let Q=!1,y=E(w);y===null?f(a,o):y&&y.isColor&&(f(y,1),Q=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||Q)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(w,Q){let y=E(Q);y&&y.isCubeTexture?(l===void 0&&(l=new qt(new Rn(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:sn(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,x,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=Q.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=Q.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Af.makeRotationFromEuler(Q.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(bl),l.material.toneMapped=Ye.getTransfer(y.colorSpace)!==Xe,(u!==y||p!==y.version||c!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,p=y.version,c=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new qt(new ji(2,2),new Lt({name:"BackgroundMaterial",uniforms:sn(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=Q.backgroundIntensity,h.material.toneMapped=Ye.getTransfer(y.colorSpace)!==Xe,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||p!==y.version||c!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,p=y.version,c=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function f(w,Q){w.getRGB(ua,So(n)),t.buffers.color.setClear(ua.r,ua.g,ua.b,Q,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,Q=1){a.set(w),o=Q,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,f(a,o)},render:g,addToRenderList:M,dispose:d}}function mf(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=c(null),r=s,a=!1;function o(T,z,X,k,K){let H=!1,Y=p(T,k,X,z);r!==Y&&(r=Y,l(r.object)),H=E(T,k,X,K),H&&g(T,k,X,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,y(T,z,X,k),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function h(){return n.createVertexArray()}function l(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function p(T,z,X,k){let K=k.wireframe===!0,H=i[z.id];H===void 0&&(H={},i[z.id]=H);let Y=T.isInstancedMesh===!0?T.id:0,ne=H[Y];ne===void 0&&(ne={},H[Y]=ne);let P=ne[X.id];P===void 0&&(P={},ne[X.id]=P);let _=P[K];return _===void 0&&(_=c(h()),P[K]=_),_}function c(T){let z=[],X=[],k=[];for(let K=0;K<t;K++)z[K]=0,X[K]=0,k[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:k,object:T,attributes:{},index:null}}function E(T,z,X,k){let K=r.attributes,H=z.attributes,Y=0,ne=X.getAttributes();for(let P in ne)if(ne[P].location>=0){let ie=K[P],Ie=H[P];if(Ie===void 0&&(P==="instanceMatrix"&&T.instanceMatrix&&(Ie=T.instanceMatrix),P==="instanceColor"&&T.instanceColor&&(Ie=T.instanceColor)),ie===void 0||ie.attribute!==Ie||Ie&&ie.data!==Ie.data)return!0;Y++}return r.attributesNum!==Y||r.index!==k}function g(T,z,X,k){let K={},H=z.attributes,Y=0,ne=X.getAttributes();for(let P in ne)if(ne[P].location>=0){let ie=H[P];ie===void 0&&(P==="instanceMatrix"&&T.instanceMatrix&&(ie=T.instanceMatrix),P==="instanceColor"&&T.instanceColor&&(ie=T.instanceColor));let Ie={};Ie.attribute=ie,ie&&ie.data&&(Ie.data=ie.data),K[P]=Ie,Y++}r.attributes=K,r.attributesNum=Y,r.index=k}function M(){let T=r.newAttributes;for(let z=0,X=T.length;z<X;z++)T[z]=0}function f(T){d(T,0)}function d(T,z){let X=r.newAttributes,k=r.enabledAttributes,K=r.attributeDivisors;X[T]=1,k[T]===0&&(n.enableVertexAttribArray(T),k[T]=1),K[T]!==z&&(n.vertexAttribDivisor(T,z),K[T]=z)}function w(){let T=r.newAttributes,z=r.enabledAttributes;for(let X=0,k=z.length;X<k;X++)z[X]!==T[X]&&(n.disableVertexAttribArray(X),z[X]=0)}function Q(T,z,X,k,K,H,Y){Y===!0?n.vertexAttribIPointer(T,z,X,K,H):n.vertexAttribPointer(T,z,X,k,K,H)}function y(T,z,X,k){M();let K=k.attributes,H=X.getAttributes(),Y=z.defaultAttributeValues;for(let ne in H){let P=H[ne];if(P.location>=0){let _=K[ne];if(_===void 0&&(ne==="instanceMatrix"&&T.instanceMatrix&&(_=T.instanceMatrix),ne==="instanceColor"&&T.instanceColor&&(_=T.instanceColor)),_!==void 0){let ie=_.normalized,Ie=_.itemSize,ke=e.get(_);if(ke===void 0)continue;let $=ke.buffer,de=ke.type,me=ke.bytesPerElement,ye=de===n.INT||de===n.UNSIGNED_INT||_.gpuType===vr;if(_.isInterleavedBufferAttribute){let fe=_.data,be=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,rt=_.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let Re=0;Re<P.locationSize;Re++)d(P.location+Re,fe.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Re=0;Re<P.locationSize;Re++)f(P.location+Re);n.bindBuffer(n.ARRAY_BUFFER,$);for(let Re=0;Re<P.locationSize;Re++)Q(P.location+Re,Ie/P.locationSize,de,ie,be*me,(rt+Ie/P.locationSize*Re)*me,ye)}else{if(_.isInstancedBufferAttribute){for(let fe=0;fe<P.locationSize;fe++)d(P.location+fe,_.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=_.meshPerAttribute*_.count)}else for(let fe=0;fe<P.locationSize;fe++)f(P.location+fe);n.bindBuffer(n.ARRAY_BUFFER,$);for(let fe=0;fe<P.locationSize;fe++)Q(P.location+fe,Ie/P.locationSize,de,ie,Ie*me,Ie/P.locationSize*fe*me,ye)}}else if(Y!==void 0){let ie=Y[ne];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(P.location,ie);break;case 3:n.vertexAttrib3fv(P.location,ie);break;case 4:n.vertexAttrib4fv(P.location,ie);break;default:n.vertexAttrib1fv(P.location,ie)}}}}w()}function R(){G();for(let T in i){let z=i[T];for(let X in z){let k=z[X];for(let K in k){let H=k[K];for(let Y in H)u(H[Y].object),delete H[Y];delete k[K]}}delete i[T]}}function x(T){if(i[T.id]===void 0)return;let z=i[T.id];for(let X in z){let k=z[X];for(let K in k){let H=k[K];for(let Y in H)u(H[Y].object),delete H[Y];delete k[K]}}delete i[T.id]}function m(T){for(let z in i){let X=i[z];for(let k in X){let K=X[k];if(K[T.id]===void 0)continue;let H=K[T.id];for(let Y in H)u(H[Y].object),delete H[Y];delete K[T.id]}}}function S(T){for(let z in i){let X=i[z],k=T.isInstancedMesh===!0?T.id:0,K=X[k];if(K!==void 0){for(let H in K){let Y=K[H];for(let ne in Y)u(Y[ne].object),delete Y[ne];delete K[H]}delete X[k],Object.keys(X).length===0&&delete i[z]}}}function G(){J(),a=!0,r!==s&&(r=s,l(r.object))}function J(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:G,resetDefaultState:J,dispose:R,releaseStatesOfGeometry:x,releaseStatesOfObject:S,releaseStatesOfProgram:m,initAttributes:M,enableAttribute:f,disableUnusedAttributes:w}}function gf(n,e,t){let i;function s(h){i=h}function r(h,l){n.drawArrays(i,h,l),t.update(l,i,1)}function a(h,l,u){u!==0&&(n.drawArraysInstanced(i,h,l,u),t.update(l,i,u))}function o(h,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,l,0,u);let c=0;for(let E=0;E<u;E++)c+=l[E];t.update(c,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function If(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let m=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(m){return!(m!==ai&&i.convert(m)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(m){let S=m===ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(m!==Ot&&m!==si&&!S&&i.convert(m)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function h(m){if(m==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=h(l);u!==l&&(Qe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),c=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let E=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),Q=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),x=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:c,reversedDepthBuffer:p,maxTextures:E,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:w,maxVaryings:Q,maxFragmentUniforms:y,maxSamples:R,samples:x}}function Cf(n){let e=this,t=null,i=0,s=!1,r=!1,a=new ei,o=new Te,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c){let E=p.length!==0||c||i!==0||s;return s=c,i=p.length,E},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,c){t=u(p,c,0)},this.setState=function(p,c,E){let g=p.clippingPlanes,M=p.clipIntersection,f=p.clipShadows,d=n.get(p);if(!s||g===null||g.length===0||r&&!f)r?u(null):l();else{let w=r?0:i,Q=w*4,y=d.clippingState||null;h.value=y,y=u(g,c,Q,E);for(let R=0;R!==Q;++R)y[R]=t[R];d.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function l(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,c,E,g){let M=p!==null?p.length:0,f=null;if(M!==0){if(f=h.value,g!==!0||f===null){let d=E+M*4,w=c.matrixWorldInverse;o.getNormalMatrix(w),(f===null||f.length<d)&&(f=new Float32Array(d));for(let Q=0,y=E;Q!==M;++Q,y+=4)a.copy(p[Q]).applyMatrix4(w,o),a.normal.toArray(f,y),f[y+3]=a.constant}h.value=f,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,f}}var Es=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new $n(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rn(5,5,5),r=new Lt({name:"CubemapFromEquirect",uniforms:sn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:$i});r.uniforms.tEquirect.value=t;let a=new qt(s,r),o=t.minFilter;return t.minFilter===ii&&(t.minFilter=It),new vn(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},ll=256,Mf=3,Sf=20,Jl=256,Tl=16,wf=3,yf=new Z,xf=new Ne,fa=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vn(1,10,null),this._boxMesh=new qt(new Rn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=yf}=r,h=this._renderer;this._setSize(a);let l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let p=h.autoClear,c=h.autoClearColor,E=h.autoClearDepth,g=h.autoClearStencil,M=e.background;h.autoClear=!0,h.autoClearColor=!0,h.autoClearDepth=!0,h.autoClearStencil=!0,M===null&&(e.background=h.getClearColor(xf));let f=new vn(i,s,u);return f.position.copy(o),f.update(h,e),h.autoClear=p,h.autoClearColor=c,h.autoClearDepth=E,h.autoClearStencil=g,e.background=M,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ll,sl(e))}_fromTexture(e,t){e.mapping===tn||e.mapping===Jn?this._setSize(e.image.length===0?ll:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=cl(e,!1,!1),i=Math.log2(e)-Mf;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=cl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===tn||e.mapping===Jn?(this._cubemapMaterial===null&&(this._cubemapMaterial=dl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ul()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Bf(),this._integrationMaterial=Rf());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Tl);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-wf)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let h=o>0?Math.log2(t)+.5*Math.log2(6/(Jl*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=h,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Qf());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function cl(n,e,t){return new Es(n,{minFilter:ii,generateMipmaps:e,type:ri,colorSpace:On,depthBuffer:t})}function ms(n,e,t){return new Lt({name:n,uniforms:e,vertexShader:ze.cube_vert,fragmentShader:t,side:Ft,blending:$i,depthTest:!1,depthWrite:!1})}function Bf(){return ms("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Jl}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Rf(){return ms("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Tl}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Qf(){return ms("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Sf}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ul(){return ms("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function dl(){return ms("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vf(n){let e=new WeakMap,t=new WeakMap,i=null;function s(c,E=!1){return c==null?null:E?a(c):r(c)}function r(c){if(c&&c.isTexture){let E=c.mapping;if(E===Br||E===Rr)if(e.has(c)){let g=e.get(c).texture;return o(g,c.mapping)}else{let g=c.image;if(g&&g.height>0){let M=new Es(g.height);return M.fromEquirectangularTexture(n,c),e.set(c,M),c.addEventListener("dispose",l),o(M.texture,c.mapping)}else return null}}return c}function a(c){if(c&&c.isTexture&&c.isPMREMTexture!==!0){let E=c.mapping,g=E===Br||E===Rr,M=E===tn||E===Jn;if(g||M){let f=t.get(c),d=f!==void 0?f.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==d)return i===null&&(i=new fa(n)),f=g?i.fromEquirectangular(c,f):i.fromCubemap(c,f),f.texture.pmremVersion=c.pmremVersion,t.set(c,f),f.texture;if(f!==void 0)return f.texture;{let w=c.image;return g&&w&&w.height>0||M&&w&&h(w)?(i===null&&(i=new fa(n)),f=g?i.fromEquirectangular(c):i.fromCubemap(c),f.texture.pmremVersion=c.pmremVersion,t.set(c,f),c.addEventListener("dispose",u),f.texture):null}}}return c}function o(c,E){return E===Br?c.mapping=tn:E===Rr&&(c.mapping=Jn),c}function h(c){let E=0,g=6;for(let M=0;M<g;M++)c[M]!==void 0&&E++;return E===g}function l(c){let E=c.target;E.removeEventListener("dispose",l);let g=e.get(E);g!==void 0&&(e.delete(E),g.dispose())}function u(c){let E=c.target;E.removeEventListener("dispose",u);let g=t.get(E);g!==void 0&&(t.delete(E),g.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function kf(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Yn("WebGLRenderer: "+i+" extension not supported."),s}}}function bf(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){h(g.target)}function h(g){g.index!==null&&e.remove(g.index);for(let f in g.attributes)e.remove(g.attributes[f]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let M=r.get(g);M&&(e.remove(M),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function u(g){let M=g.attributes;for(let f in M)e.update(M[f],n.ARRAY_BUFFER)}function p(g){let M=g.index,f=g.attributes.position,d=0;if(f===void 0)return;let w=M!==null?M.array.length:f.array.length/3-1,Q=f.count>=65535?jn:Xn,y=new Q(Math.ceil(w/3)*6,1),R=y.array;if(M!==null){let m=M.array;d=M.version;for(let S=0,G=0;S<w;S+=3){let J=m[S+0],T=m[S+1],z=m[S+2];R[G++]=J,R[G++]=T,R[G++]=T,R[G++]=z,R[G++]=z,R[G++]=J}}else{d=f.version;for(let m=0,S=0;m<w;m+=3){let G=m+0,J=m+1,T=m+2;R[S++]=G,R[S++]=J,R[S++]=J,R[S++]=T,R[S++]=T,R[S++]=G}}y.version=d;let x=r.get(g);x&&e.remove(x),r.set(g,y)}function c(g){let M=r.get(g);if(M){let f=g.index;f!==null&&M.version<f.version&&p(g)}else p(g);return r.get(g)}function E(){for(let g in s){let M=s[g].deref();M!==void 0&&h(M)}}return{get:l,update:u,getWireframeAttribute:c,dispose:E}}function Jf(n,e,t){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function h(p,c){n.drawElements(i,c,r,p*a),t.update(c,i,1)}function l(p,c,E){E!==0&&(n.drawElementsInstanced(i,c,r,p*a,E),t.update(c,i,E))}function u(p,c,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,r,p,0,E);let M=0;for(let f=0;f<E;f++)M+=c[f];t.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=l,this.renderMultiDraw=u}function Tf(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ff(n,e,t){let i=new WeakMap,s=new it;function r(a,o,h){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,c=i.get(o);if(c===void 0||c.count!==p){let G=function(){m.dispose(),i.delete(o),o.removeEventListener("dispose",G)};c!==void 0&&c.texture.dispose();let E=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],Q=0;E===!0&&(Q=1),g===!0&&(Q=2),M===!0&&(Q=3);let y=o.attributes.position.count*Q,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let x=new Float32Array(y*R*4*p),m=new Kn(x,y,R,p);m.type=si,m.needsUpdate=!0;let S=Q*4;for(let J=0;J<p;J++){let T=f[J],z=d[J],X=w[J],k=y*R*4*J;for(let K=0;K<T.count;K++){let H=K*S;E===!0&&(s.fromBufferAttribute(T,K),x[k+H+0]=s.x,x[k+H+1]=s.y,x[k+H+2]=s.z,x[k+H+3]=0),g===!0&&(s.fromBufferAttribute(z,K),x[k+H+4]=s.x,x[k+H+5]=s.y,x[k+H+6]=s.z,x[k+H+7]=0),M===!0&&(s.fromBufferAttribute(X,K),x[k+H+8]=s.x,x[k+H+9]=s.y,x[k+H+10]=s.z,x[k+H+11]=X.itemSize===4?s.w:1)}}c={count:p,texture:m,size:new Ue(y,R)},i.set(o,c),o.addEventListener("dispose",G)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let E=0;for(let M=0;M<l.length;M++)E+=l[M];let g=o.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",g),h.getUniforms().setValue(n,"morphTargetInfluences",l)}h.getUniforms().setValue(n,"morphTargetsTexture",c.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",c.size)}return{update:r}}function Uf(n,e,t,i,s){let r=new WeakMap;function a(l){let u=s.render.frame,p=l.geometry,c=e.get(l,p);if(r.get(c)!==u&&(e.update(c),r.set(c,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",h)===!1&&l.addEventListener("dispose",h),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let E=l.skeleton;r.get(E)!==u&&(E.update(),r.set(E,u))}return c}function o(){r=new WeakMap}function h(l){let u=l.target;u.removeEventListener("dispose",h),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Lf={[$a]:"LINEAR_TONE_MAPPING",[eo]:"REINHARD_TONE_MAPPING",[to]:"CINEON_TONE_MAPPING",[io]:"ACES_FILMIC_TONE_MAPPING",[so]:"AGX_TONE_MAPPING",[ro]:"NEUTRAL_TONE_MAPPING",[no]:"CUSTOM_TONE_MAPPING"};function Gf(n,e,t,i,s,r){let a=new Zt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,h=null,l=null,u=new ti;u.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ht([0,2,0,0,2,0],2));let p=new cr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new qt(u,p),E=new wr(-1,1,1,-1,0,1),g=null,M=null,f=!1,d,w=null,Q=[],y=!1;this.setSize=function(R,x){a.setSize(R,x),o!==null&&o.setSize(R,x),h!==null&&h.setSize(R,x);for(let m=0;m<Q.length;m++){let S=Q[m];S.setSize&&S.setSize(R,x)}},this.setEffects=function(R){Q=R,y=Q.length>0&&Q[0].isRenderPass===!0;let x=a.width,m=a.height;Q.length>0&&o===null&&(o=new Zt(x,m,{type:ri,depthBuffer:!1,stencilBuffer:!1}),h=new Zt(x,m,{type:ri,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&Q.some(G=>G.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new wi(x,m),r===!0&&(l.format=yi,l.type=nn)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let G=0;G<Q.length;G++){let J=Q[G];J.setSize&&J.setSize(x,m),S&&J.needsDepthTexture===!0&&J.setDepthTexture&&J.setDepthTexture(l)}},this.begin=function(R,x){if(f||R.toneMapping===di&&Q.length===0)return!1;if(w=x,x!==null){let m=x.width,S=x.height;(a.width!==m||a.height!==S)&&this.setSize(m,S)}return y===!1&&R.setRenderTarget(a),d=R.toneMapping,R.toneMapping=di,!0},this.hasRenderPass=function(){return y},this.end=function(R,x){R.toneMapping=d,f=!0;let m=a,S=o;for(let G=0;G<Q.length;G++){let J=Q[G];J.enabled!==!1&&(J.render(R,S,m,x),J.needsSwap!==!1&&(m=S,S=S===o?h:o))}if(g!==R.outputColorSpace||M!==R.toneMapping){g=R.outputColorSpace,M=R.toneMapping,p.defines={},Ye.getTransfer(g)===Xe&&(p.defines.SRGB_TRANSFER="");let G=Lf[M];G&&(p.defines[G]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=m.texture,R.setRenderTarget(w),R.render(c,E),w=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),h!==null&&h.dispose(),u.dispose(),p.dispose()}}var Fl=new Tt,Ul=new wi(1,1),Ll=new es(1),Gl=new Kn,zl=new rr,Dl=new $n,fl=[],pl=[],Al=new Float32Array(16),El=new Float32Array(9),ml=new Float32Array(4);function Un(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=fl[s];if(r===void 0&&(r=new Float32Array(s),fl[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Aa(n,e){let t=pl[e];t===void 0&&(t=new Int32Array(e),pl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zf(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Df(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function Vf(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function Zf(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function Yf(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,i))return;ml.set(i),n.uniformMatrix2fv(this.addr,!1,ml),pt(t,i)}}function Nf(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,i))return;El.set(i),n.uniformMatrix3fv(this.addr,!1,El),pt(t,i)}}function Of(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,i))return;Al.set(i),n.uniformMatrix4fv(this.addr,!1,Al),pt(t,i)}}function Wf(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Pf(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function Kf(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function Hf(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function qf(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Xf(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function jf(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function _f(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function Ea(n){return n.version===0&&(n.compareFunction=go,n.needsUpdate=!0),n}function $f(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Ea(Ul):r=Fl,t.setTexture2D(e||r,s)}function ep(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||zl,s)}function tp(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Ea(Ll):r=Dl,t.setTextureCube(e||r,s)}function ip(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Gl,s)}function np(n){switch(n){case 5126:return zf;case 35664:return Df;case 35665:return Vf;case 35666:return Zf;case 35674:return Yf;case 35675:return Nf;case 35676:return Of;case 5124:case 35670:return Wf;case 35667:case 35671:return Pf;case 35668:case 35672:return Kf;case 35669:case 35673:return Hf;case 5125:return qf;case 36294:return Xf;case 36295:return jf;case 36296:return _f;case 35678:case 36198:case 36298:case 36306:case 35682:return $f;case 35679:case 36299:case 36307:return ep;case 35680:case 36300:case 36308:case 36293:return tp;case 36289:case 36303:case 36311:case 36292:return ip}}function sp(n,e){n.uniform1fv(this.addr,e)}function rp(n,e){let t=Un(e,this.size,2);n.uniform2fv(this.addr,t)}function ap(n,e){let t=Un(e,this.size,3);n.uniform3fv(this.addr,t)}function op(n,e){let t=Un(e,this.size,4);n.uniform4fv(this.addr,t)}function hp(n,e){let t=Un(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lp(n,e){let t=Un(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cp(n,e){let t=Un(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function up(n,e){n.uniform1iv(this.addr,e)}function dp(n,e){n.uniform2iv(this.addr,e)}function fp(n,e){n.uniform3iv(this.addr,e)}function pp(n,e){n.uniform4iv(this.addr,e)}function Ap(n,e){n.uniform1uiv(this.addr,e)}function Ep(n,e){n.uniform2uiv(this.addr,e)}function mp(n,e){n.uniform3uiv(this.addr,e)}function gp(n,e){n.uniform4uiv(this.addr,e)}function Ip(n,e,t){let i=this.cache,s=e.length,r=Aa(t,s);ft(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Ea(Ul):a=Fl;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Cp(n,e,t){let i=this.cache,s=e.length,r=Aa(t,s);ft(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||zl,r[a])}function Mp(n,e,t){let i=this.cache,s=e.length,r=Aa(t,s);ft(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Ea(Ll):a=Dl;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Sp(n,e,t){let i=this.cache,s=e.length,r=Aa(t,s);ft(i,r)||(n.uniform1iv(this.addr,r),pt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Gl,r[a])}function wp(n){switch(n){case 5126:return sp;case 35664:return rp;case 35665:return ap;case 35666:return op;case 35674:return hp;case 35675:return lp;case 35676:return cp;case 5124:case 35670:return up;case 35667:case 35671:return dp;case 35668:case 35672:return fp;case 35669:case 35673:return pp;case 5125:return Ap;case 36294:return Ep;case 36295:return mp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Mp;case 36289:case 36303:case 36311:case 36292:return Sp}}var Qo=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=np(t.type)}},vo=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wp(t.type)}},ko=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Bo=/(\w+)(\])?(\[|\.)?/g;function gl(n,e){n.seq.push(e),n.map[e.id]=e}function yp(n,e,t){let i=n.name,s=i.length;for(Bo.lastIndex=0;;){let r=Bo.exec(i),a=Bo.lastIndex,o=r[1],h=r[2]==="]",l=r[3];if(h&&(o=o|0),l===void 0||l==="["&&a+2===s){gl(t,l===void 0?new Qo(o,n,e):new vo(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new ko(o),gl(t,p)),t=p}}}var Fn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),h=e.getUniformLocation(t,o.name);yp(o,h,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],h=i[o.id];h.needsUpdate!==!1&&o.setValue(e,h.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Il(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var xp=37297,Bp=0;function Rp(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Cl=new Te;function Qp(n){Ye._getMatrix(Cl,Ye.workingColorSpace,n);let e=`mat3( ${Cl.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case Wn:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ml(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Rp(n.getShaderSource(e),o)}else return r}function vp(n,e){let t=Qp(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var kp={[$a]:"Linear",[eo]:"Reinhard",[to]:"Cineon",[io]:"ACESFilmic",[so]:"AgX",[ro]:"Neutral",[no]:"Custom"};function bp(n,e){let t=kp[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var da=new Z;function Jp(){Ye.getLuminanceCoefficients(da);let n=da.x.toFixed(4),e=da.y.toFixed(4),t=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function Fp(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Up(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function As(n){return n!==""}function Sl(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function wl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Lp=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(n){return n.replace(Lp,Gp)}function Gp(n,e){let t=ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return bo(t)}var zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yl(n){return n.replace(zp,Dp)}function Dp(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Vp={[ss]:"SHADOWMAP_TYPE_PCF",[kn]:"SHADOWMAP_TYPE_VSM"};function Zp(n){return Vp[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Yp={[Jn]:"ENVMAP_MODE_REFRACTION"};function Np(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Yp[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Op={[_a]:"ENVMAP_BLENDING_MULTIPLY",[Yh]:"ENVMAP_BLENDING_MIX",[Nh]:"ENVMAP_BLENDING_ADD"};function Wp(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Op[n.combine]||"ENVMAP_BLENDING_NONE"}function Pp(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,h=Zp(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Np(t),p=Wp(t),c=Tp(t),E=Fp(r),g=s.createProgram(),M,f,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(As).join(`
`),M.length>0&&(M+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(As).join(`
`),f.length>0&&(f+=`
`)):(M=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),f=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?ze.tonemapping_pars_fragment:"",t.toneMapping!==di?bp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,vp("linearToOutputTexel",t.outputColorSpace),Jp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),a=bo(a),a=Sl(a,t),a=wl(a,t),o=bo(o),o=Sl(o,t),o=wl(o,t),a=yl(a),o=yl(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,M=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,f=["#define varying in",t.glslVersion===Io?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let w=d+M+a,Q=d+f+o,y=Il(s,s.VERTEX_SHADER,w),R=Il(s,s.FRAGMENT_SHADER,Q);s.attachShader(g,y),s.attachShader(g,R),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function x(J){if(n.debug.checkShaderErrors){let T=s.getProgramInfoLog(g)||"",z=s.getShaderInfoLog(y)||"",X=s.getShaderInfoLog(R)||"",k=T.trim(),K=z.trim(),H=X.trim(),Y=!0,ne=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,y,R);else{let P=Ml(s,y,"vertex"),_=Ml(s,R,"fragment");Je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+J.name+`
Material Type: `+J.type+`

Program Info Log: `+k+`
`+P+`
`+_)}else k!==""?Qe("WebGLProgram: Program Info Log:",k):(K===""||H==="")&&(ne=!1);ne&&(J.diagnostics={runnable:Y,programLog:k,vertexShader:{log:K,prefix:M},fragmentShader:{log:H,prefix:f}})}s.deleteShader(y),s.deleteShader(R),m=new Fn(s,g),S=Up(s,g)}let m;this.getUniforms=function(){return m===void 0&&x(this),m};let S;this.getAttributes=function(){return S===void 0&&x(this),S};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(g,xp)),G},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=R,this}var Kp=0,Jo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new To(e),t.set(e,i)),i}},To=class{constructor(e){this.id=Kp++,this.code=e,this.usedTimes=0}};function Hp(n){return n===Vi||n===us||n===ds}function qp(n,e,t,i,s,r){let a=new Hn,o=new Jo,h=new Set,l=[],u=new Map,p=i.logarithmicDepthBuffer,c={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(m){return h.add(m),m===0?"uv":`uv${m}`}function g(m,S,G,J,T,z){let X=J.fog,k=T.geometry,K=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?J.environment:null,H=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,Y=e.get(m.envMap||K,H),ne=c[m.type],P=i.precision;m.precision!==null&&(P=i.getMaxPrecision(m.precision),P!==m.precision&&Qe("WebGLProgram.getParameters:",m.precision,"not supported, using",P,"instead."));let _=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ie=_!==void 0?_.length:0,Ie=0;k.morphAttributes.position!==void 0&&(Ie=1),k.morphAttributes.normal!==void 0&&(Ie=2),k.morphAttributes.color!==void 0&&(Ie=3);let ke,$,de,me;if(ne){let pe=pi[ne];ke=pe.vertexShader,$=pe.fragmentShader}else{ke=m.vertexShader,$=m.fragmentShader;let pe=o.getVertexShaderStage(m),je=o.getFragmentShaderStage(m);o.update(m,pe,je),de=pe.id,me=je.id}let ye=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),be=T.isInstancedMesh===!0,rt=T.isBatchedMesh===!0,Re=!!m.map,Pe=!!m.matcap,qe=!!Y,De=qe&&Y.isPMREMTexture===!0,lt=!!m.aoMap,at=!!m.lightMap,Ct=!!m.bumpMap&&m.wireframe===!1,$e=!!m.normalMap,Gt=!!m.displacementMap,ct=!!m.emissiveMap,Qt=!!m.metalnessMap,vt=!!m.roughnessMap,kt=m.anisotropy>0,F=m.clearcoat>0,St=m.diffuseRoughness>0,_e=m.dispersion>0,et=m.retroreflectivity>0,ce=m.iridescence>0,Ke=m.sheen>0,xe=m.transmission>0,ve=kt&&!!m.anisotropyMap,C=F&&!!m.clearcoatMap,A=F&&!!m.clearcoatNormalMap,b=F&&!!m.clearcoatRoughnessMap,j=St&&!!m.diffuseRoughnessMap,D=ce&&!!m.iridescenceMap,ee=ce&&!!m.iridescenceThicknessMap,te=Ke&&!!m.sheenColorMap,N=Ke&&!!m.sheenRoughnessMap,O=!!m.specularMap,se=!!m.specularColorMap,B=!!m.specularIntensityMap,q=xe&&!!m.transmissionMap,W=xe&&!!m.thicknessMap,he=!!m.gradientMap,ae=!!m.alphaMap,oe=m.alphaTest>0,Se=!!m.alphaHash,Ge=!!m.extensions,re=di;m.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(re=n.toneMapping);let Be=De?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,Le={shaderID:ne,shaderType:m.type,shaderName:m.name,vertexShader:ke,fragmentShader:$,defines:m.defines,customVertexShaderID:de,customFragmentShaderID:me,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:P,batching:rt,batchingColor:rt&&T._colorsTexture!==null,instancing:be,instancingColor:be&&T.instanceColor!==null,instancingMorph:be&&T.morphTexture!==null,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Re,matcap:Pe,envMap:qe,envMapMode:qe&&Y.mapping,envMapPMREM:De,envMapMaxLod:De?Be.length-1:null,envMapSize:De?Be[0].width:null,aoMap:lt,lightMap:at,bumpMap:Ct,normalMap:$e,displacementMap:Gt,emissiveMap:ct,normalMapObjectSpace:$e&&m.normalMapType===Ph,normalMapTangentSpace:$e&&m.normalMapType===Ao,packedNormalMap:$e&&m.normalMapType===Ao&&Hp(m.normalMap.format),metalnessMap:Qt,roughnessMap:vt,anisotropy:kt,anisotropyMap:ve,clearcoat:F,clearcoatMap:C,clearcoatNormalMap:A,clearcoatRoughnessMap:b,diffuseRoughness:St,diffuseRoughnessMap:j,dispersion:_e,retroreflection:et,iridescence:ce,iridescenceMap:D,iridescenceThicknessMap:ee,sheen:Ke,sheenColorMap:te,sheenRoughnessMap:N,specularMap:O,specularColorMap:se,specularIntensityMap:B,transmission:xe,transmissionMap:q,thicknessMap:W,gradientMap:he,opaque:m.transparent===!1&&m.blending===bn&&m.alphaToCoverage===!1,alphaMap:ae,alphaTest:oe,alphaHash:Se,combine:m.combine,mapUv:Re&&E(m.map.channel),aoMapUv:lt&&E(m.aoMap.channel),lightMapUv:at&&E(m.lightMap.channel),bumpMapUv:Ct&&E(m.bumpMap.channel),normalMapUv:$e&&E(m.normalMap.channel),displacementMapUv:Gt&&E(m.displacementMap.channel),emissiveMapUv:ct&&E(m.emissiveMap.channel),metalnessMapUv:Qt&&E(m.metalnessMap.channel),roughnessMapUv:vt&&E(m.roughnessMap.channel),anisotropyMapUv:ve&&E(m.anisotropyMap.channel),clearcoatMapUv:C&&E(m.clearcoatMap.channel),clearcoatNormalMapUv:A&&E(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:b&&E(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:j&&E(m.diffuseRoughnessMap.channel),iridescenceMapUv:D&&E(m.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&E(m.iridescenceThicknessMap.channel),sheenColorMapUv:te&&E(m.sheenColorMap.channel),sheenRoughnessMapUv:N&&E(m.sheenRoughnessMap.channel),specularMapUv:O&&E(m.specularMap.channel),specularColorMapUv:se&&E(m.specularColorMap.channel),specularIntensityMapUv:B&&E(m.specularIntensityMap.channel),transmissionMapUv:q&&E(m.transmissionMap.channel),thicknessMapUv:W&&E(m.thicknessMap.channel),alphaMapUv:ae&&E(m.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&($e||kt),vertexNormals:!!k.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!k.attributes.uv&&(Re||ae),fog:!!X,useFog:m.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||k.attributes.normal===void 0&&$e===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:fe,skinning:T.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ie,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:z.filter(pe=>pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:Re&&m.map.isVideoTexture===!0&&Ye.getTransfer(m.map.colorSpace)===Xe,decodeVideoTextureEmissive:ct&&m.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(m.emissiveMap.colorSpace)===Xe,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===ui,flipSided:m.side===Ft,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Ge&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&m.extensions.multiDraw===!0||rt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Le.vertexUv1s=h.has(1),Le.vertexUv2s=h.has(2),Le.vertexUv3s=h.has(3),h.clear(),Le}function M(m){let S=[];if(m.shaderID?S.push(m.shaderID):(S.push(m.customVertexShaderID),S.push(m.customFragmentShaderID)),m.defines!==void 0)for(let G in m.defines)S.push(G),S.push(m.defines[G]);return m.isRawShaderMaterial===!1&&(f(S,m),d(S,m),S.push(n.outputColorSpace)),S.push(m.customProgramCacheKey),S.join()}function f(m,S){m.push(S.precision),m.push(S.outputColorSpace),m.push(S.envMapMode),m.push(S.envMapPMREM),m.push(S.envMapMaxLod),m.push(S.envMapSize),m.push(S.mapUv),m.push(S.alphaMapUv),m.push(S.lightMapUv),m.push(S.aoMapUv),m.push(S.bumpMapUv),m.push(S.normalMapUv),m.push(S.displacementMapUv),m.push(S.emissiveMapUv),m.push(S.metalnessMapUv),m.push(S.roughnessMapUv),m.push(S.anisotropyMapUv),m.push(S.clearcoatMapUv),m.push(S.clearcoatNormalMapUv),m.push(S.clearcoatRoughnessMapUv),m.push(S.diffuseRoughnessMapUv),m.push(S.iridescenceMapUv),m.push(S.iridescenceThicknessMapUv),m.push(S.sheenColorMapUv),m.push(S.sheenRoughnessMapUv),m.push(S.specularMapUv),m.push(S.specularColorMapUv),m.push(S.specularIntensityMapUv),m.push(S.transmissionMapUv),m.push(S.thicknessMapUv),m.push(S.combine),m.push(S.fogExp2),m.push(S.sizeAttenuation),m.push(S.morphTargetsCount),m.push(S.numSunLights),m.push(S.numDirLights),m.push(S.numPointLights),m.push(S.numSpotLights),m.push(S.numSpotLightMaps),m.push(S.numHemiLights),m.push(S.numRectAreaLights),m.push(S.numSunLightShadows),m.push(S.numDirLightShadows),m.push(S.numPointLightShadows),m.push(S.numSpotLightShadows),m.push(S.numSpotLightShadowsWithMaps),m.push(S.numLightProbes),m.push(S.numLightProbeGrids),m.push(S.shadowMapType),m.push(S.toneMapping),m.push(S.numClippingPlanes),m.push(S.numClipIntersection),m.push(S.depthPacking)}function d(m,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function w(m){let S=c[m.type],G;if(S){let J=pi[S];G=al.clone(J.uniforms)}else G=m.uniforms;return G}function Q(m,S){let G=u.get(S);return G!==void 0?++G.usedTimes:(G=new Pp(n,S,m,s),l.push(G),u.set(S,G)),G}function y(m){if(--m.usedTimes===0){let S=l.indexOf(m);l[S]=l[l.length-1],l.pop(),u.delete(m.cacheKey),m.destroy()}}function R(m){o.remove(m)}function x(){o.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:w,acquireProgram:Q,releaseProgram:y,releaseShaderCache:R,programs:l,dispose:x}}function Xp(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,h){n.get(a)[o]=h}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function jp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Bl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rl(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(c){let E=0;return c.isInstancedMesh&&(E+=2),c.isSkinnedMesh&&(E+=1),E}function o(c,E,g,M,f,d){let w=n[e];return w===void 0?(w={id:c.id,object:c,geometry:E,material:g,materialVariant:a(c),groupOrder:M,renderOrder:c.renderOrder,z:f,group:d},n[e]=w):(w.id=c.id,w.object=c,w.geometry=E,w.material=g,w.materialVariant=a(c),w.groupOrder=M,w.renderOrder=c.renderOrder,w.z=f,w.group=d),e++,w}function h(c,E,g,M,f,d,w){w.reversedDepth===!0&&(f=-f);let Q=o(c,E,g,M,f,d);g.transmission>0?i.push(Q):g.transparent===!0?s.push(Q):t.push(Q)}function l(c,E,g,M,f,d){let w=o(c,E,g,M,f,d);g.transmission>0?i.unshift(w):g.transparent===!0?s.unshift(w):t.unshift(w)}function u(c,E){t.length>1&&t.sort(c||jp),i.length>1&&i.sort(E||Bl),s.length>1&&s.sort(E||Bl)}function p(){for(let c=e,E=n.length;c<E;c++){let g=n[c];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:h,unshift:l,finish:p,sort:u}}function _p(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Rl,n.set(i,[a])):s>=r.length?(a=new Rl,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function $p(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Z,color:new Ne};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[e.id]=t,t}}}function eA(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var tA=0;function iA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function nA(n){let e=new $p,t=eA(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new Z);let s=new Z,r=new ht,a=new ht;function o(l){let u=0,p=0,c=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let E=0,g=0,M=0,f=0,d=0,w=0,Q=0,y=0,R=0,x=0,m=0,S=0,G=0,J=0;l.sort(iA);for(let z=0,X=l.length;z<X;z++){let k=l[z],K=k.color,H=k.intensity,Y=k.distance,ne=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Vi?ne=k.shadow.map.texture:ne=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)u+=K.r*H,p+=K.g*H,c+=K.b*H;else if(k.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(k.sh.coefficients[P],H);J++}else if(k.isSunLight){let P=e.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let _=k.shadow,ie=t.get(k);ie.shadowIntensity=_.intensity,ie.shadowBias=_.bias,ie.shadowNormalBias=_.normalBias,ie.shadowRadius=_.radius,ie.shadowMapSize.copy(_.mapSize).multiply(_.getFrameExtents()),i.sunShadow[g]=ie,i.sunShadowMap[g]=ne;let Ie=_.getViewportCount();for(let ke=0;ke<Ie;ke++)i.sunShadowMatrix[M+ke]=_.getMatrix(ke),i.sunShadowCascade[M+ke]=_._cascadeData[ke];M+=Ie,g++}i.sun[E]=P,E++}else if(k.isDirectionalLight){let P=e.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let _=k.shadow,ie=t.get(k);ie.shadowIntensity=_.intensity,ie.shadowBias=_.bias,ie.shadowNormalBias=_.normalBias,ie.shadowRadius=_.radius,ie.shadowMapSize=_.mapSize,i.directionalShadow[f]=ie,i.directionalShadowMap[f]=ne,i.directionalShadowMatrix[f]=k.shadow.matrix,R++}i.directional[f]=P,f++}else if(k.isSpotLight){let P=e.get(k);P.position.setFromMatrixPosition(k.matrixWorld),P.color.copy(K).multiplyScalar(H),P.distance=Y,P.coneCos=Math.cos(k.angle),P.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),P.decay=k.decay,i.spot[w]=P;let _=k.shadow;if(k.map&&(i.spotLightMap[S]=k.map,S++,_.updateMatrices(k),k.castShadow&&G++),i.spotLightMatrix[w]=_.matrix,k.castShadow){let ie=t.get(k);ie.shadowIntensity=_.intensity,ie.shadowBias=_.bias,ie.shadowNormalBias=_.normalBias,ie.shadowRadius=_.radius,ie.shadowMapSize=_.mapSize,i.spotShadow[w]=ie,i.spotShadowMap[w]=ne,m++}w++}else if(k.isRectAreaLight){let P=e.get(k);P.color.copy(K).multiplyScalar(H),P.halfWidth.set(k.width*.5,0,0),P.halfHeight.set(0,k.height*.5,0),i.rectArea[Q]=P,Q++}else if(k.isPointLight){let P=e.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),P.distance=k.distance,P.decay=k.decay,k.castShadow){let _=k.shadow,ie=t.get(k);ie.shadowIntensity=_.intensity,ie.shadowBias=_.bias,ie.shadowNormalBias=_.normalBias,ie.shadowRadius=_.radius,ie.shadowMapSize=_.mapSize,ie.shadowCameraNear=_.camera.near,ie.shadowCameraFar=_.camera.far,i.pointShadow[d]=ie,i.pointShadowMap[d]=ne,i.pointShadowMatrix[d]=k.shadow.matrix,x++}i.point[d]=P,d++}else if(k.isHemisphereLight){let P=e.get(k);P.skyColor.copy(k.color).multiplyScalar(H),P.groundColor.copy(k.groundColor).multiplyScalar(H),i.hemi[y]=P,y++}}Q>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=c;let T=i.hash;(T.sunLength!==E||T.directionalLength!==f||T.pointLength!==d||T.spotLength!==w||T.rectAreaLength!==Q||T.hemiLength!==y||T.numSunShadows!==g||T.numDirectionalShadows!==R||T.numPointShadows!==x||T.numSpotShadows!==m||T.numSpotMaps!==S||T.numLightProbes!==J)&&(i.sun.length=E,i.directional.length=f,i.spot.length=w,i.rectArea.length=Q,i.point.length=d,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=x,i.pointShadowMap.length=x,i.pointShadowMatrix.length=x,i.spotShadow.length=m,i.spotShadowMap.length=m,i.spotLightMatrix.length=m+S-G,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=G,i.numLightProbes=J,T.sunLength=E,T.directionalLength=f,T.pointLength=d,T.spotLength=w,T.rectAreaLength=Q,T.hemiLength=y,T.numSunShadows=g,T.numDirectionalShadows=R,T.numPointShadows=x,T.numSpotShadows=m,T.numSpotMaps=S,T.numLightProbes=J,i.version=tA++)}function h(l,u){let p=0,c=0,E=0,g=0,M=0,f=0,d=u.matrixWorldInverse;for(let w=0,Q=l.length;w<Q;w++){let y=l[w];if(y.isSunLight){let R=i.sun[p];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(d),p++}else if(y.isDirectionalLight){let R=i.directional[c];R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),c++}else if(y.isSpotLight){let R=i.spot[g];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),g++}else if(y.isRectAreaLight){let R=i.rectArea[M];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let R=i.point[E];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),E++}else if(y.isHemisphereLight){let R=i.hemi[f];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(d),f++}}}return{setup:o,setupView:h,state:i}}function Ql(n){let e=new nA(n),t=[],i=[],s=[];function r(p){u.camera=p,t.length=0,i.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}function o(p){i.push(p)}function h(){e.setup(t),s.sort((p,c)=>p.priority-c.priority||p.id-c.id)}function l(p){e.setupView(t,p)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:h,setupLightsView:l,pushLight:a,pushShadow:o}}function sA(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ql(n),e.set(s,[o])):r>=a.length?(o=new Ql(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var rA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,oA=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],hA=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],vl=new ht,ps=new Z,Ro=new Z;function lA(n,e,t){let i=new Xi,s=new Ue,r=new Ue,a=new it,o=new ur,h=new dr,l={},u=t.maxTextureSize,p={[Di]:Ft,[Ft]:Di,[ui]:ui},c=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:rA,fragmentShader:aA}),E=c.clone();E.defines.HORIZONTAL_PASS=1;let g=new ti;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new qt(g,c),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ss;let d=this.type;this.render=function(x,m,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||x.length===0)return;this.type===wh&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ss);let G=n.getRenderTarget(),J=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),z=n.state;z.setBlending($i),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let X=d!==this.type;X&&m.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(K=>K.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,K=x.length;k<K;k++){let H=x[k],Y=H.shadow;if(Y===void 0){Qe("WebGLShadowMap:",H,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ne=Y.getFrameExtents();s.multiply(ne),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,Y.mapSize.y=r.y));let P=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=P,Y.map===null||X===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===kn){if(H.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Zt(s.x,s.y,{format:Vi,type:ri,minFilter:It,magFilter:It,generateMipmaps:!1}),Y.map.texture.name=H.name+".shadowMap",Y.map.depthTexture=new wi(s.x,s.y,si),Y.map.depthTexture.name=H.name+".shadowMapDepth",Y.map.depthTexture.format=Si,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=gt,Y.map.depthTexture.magFilter=gt}else H.isPointLight?(Y.map=new Es(s.x),Y.map.depthTexture=new es(s.x,ni)):(Y.map=new Zt(s.x,s.y),Y.map.depthTexture=new wi(s.x,s.y,ni)),Y.map.depthTexture.name=H.name+".shadowMap",Y.map.depthTexture.format=Si,this.type===ss?(Y.map.depthTexture.compareFunction=P?mo:Eo,Y.map.depthTexture.minFilter=It,Y.map.depthTexture.magFilter=It):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=gt,Y.map.depthTexture.magFilter=gt);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let _=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();H.isPointLight!==!0&&Y.updateMatrices(H,S);let ie=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:S.layers;for(let Ie=0;Ie<_;Ie++){let ke=Y.getCamera(Ie);if(H.isPointLight){let $=Y.camera,de=Y.matrix,me=H.distance||$.far;me!==$.far&&($.far=me,$.updateProjectionMatrix()),ps.setFromMatrixPosition(H.matrixWorld),$.position.copy(ps),Ro.copy($.position),Ro.add(oA[Ie]),$.up.copy(hA[Ie]),$.lookAt(Ro),$.updateMatrixWorld(),de.makeTranslation(-ps.x,-ps.y,-ps.z),vl.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(vl,$.coordinateSystem,$.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,Ie),n.clear();else{Ie===0&&(n.setRenderTarget(Y.map),n.clear());let $=Y.getViewport(Ie);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),z.viewport(a)}i=Y.getFrustum(Ie),y(m,S,ke,H,ie,this.type)}Y.isPointLightShadow!==!0&&this.type===kn&&w(Y,S),Y.needsUpdate=!1}d=this.type,f.needsUpdate=!1,n.setRenderTarget(G,J,T)};function w(x,m){let S=e.update(M);c.defines.VSM_SAMPLES!==x.blurSamples&&(c.defines.VSM_SAMPLES=x.blurSamples,E.defines.VSM_SAMPLES=x.blurSamples,c.needsUpdate=!0,E.needsUpdate=!0),x.mapPass===null?x.mapPass=new Zt(s.x,s.y,{format:Vi,type:ri}):(x.mapPass.width!==x.map.width||x.mapPass.height!==x.map.height)&&x.mapPass.setSize(x.map.width,x.map.height),c.uniforms.shadow_pass.value=x.map.depthTexture,c.uniforms.resolution.value.set(x.map.width,x.map.height),c.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(m,null,S,c,M,null),E.uniforms.shadow_pass.value=x.mapPass.texture,E.uniforms.resolution.value.set(x.map.width,x.map.height),E.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(m,null,S,E,M,null)}function Q(x,m,S,G){let J=null,T=S.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(T!==void 0)J=T;else if(J=S.isPointLight===!0?h:o,n.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let z=J.uuid,X=m.uuid,k=l[z];k===void 0&&(k={},l[z]=k);let K=k[X];K===void 0&&(K=J.clone(),k[X]=K,m.addEventListener("dispose",R)),J=K}if(J.visible=m.visible,J.wireframe=m.wireframe,G===kn?J.side=m.shadowSide!==null?m.shadowSide:m.side:J.side=m.shadowSide!==null?m.shadowSide:p[m.side],J.alphaMap=m.alphaMap,J.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,J.map=m.map,J.clipShadows=m.clipShadows,J.clippingPlanes=m.clippingPlanes,J.clipIntersection=m.clipIntersection,J.displacementMap=m.displacementMap,J.displacementScale=m.displacementScale,J.displacementBias=m.displacementBias,J.wireframeLinewidth=m.wireframeLinewidth,J.linewidth=m.linewidth,S.isPointLight===!0&&J.isMeshDistanceMaterial===!0){let z=n.properties.get(J);z.light=S}return J}function y(x,m,S,G,J,T){if(x.visible===!1)return;if(x.layers.test(J)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&T===kn)&&(!x.frustumCulled||x.intersectsFrustum(i))){x.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,x.matrixWorld);let k=e.update(x),K=x.material;if(Array.isArray(K)){let H=k.groups;for(let Y=0,ne=H.length;Y<ne;Y++){let P=H[Y],_=K[P.materialIndex];if(_&&_.visible){let ie=Q(x,_,G,T);x.onBeforeShadow(n,x,m,S,k,ie,P),n.renderBufferDirect(S,null,k,ie,x,P),x.onAfterShadow(n,x,m,S,k,ie,P)}}}else if(K.visible){let H=Q(x,K,G,T);x.onBeforeShadow(n,x,m,S,k,H,null),n.renderBufferDirect(S,null,k,H,x,null),x.onAfterShadow(n,x,m,S,k,H,null)}}let X=x.children;for(let k=0,K=X.length;k<K;k++)y(X[k],m,S,G,J,T)}function R(x){x.target.removeEventListener("dispose",R);for(let S in l){let G=l[S],J=x.target.uuid;J in G&&(G[J].dispose(),delete G[J])}}}function cA(n,e){function t(){let B=!1,q=new it,W=null,he=new it(0,0,0,0);return{setMask:function(ae){W!==ae&&!B&&(n.colorMask(ae,ae,ae,ae),W=ae)},setLocked:function(ae){B=ae},setClear:function(ae,oe,Se,Ge,re){re===!0&&(ae*=Ge,oe*=Ge,Se*=Ge),q.set(ae,oe,Se,Ge),he.equals(q)===!1&&(n.clearColor(ae,oe,Se,Ge),he.copy(q))},reset:function(){B=!1,W=null,he.set(-1,0,0,0)}}}function i(){let B=!1,q=!1,W=null,he=null,ae=null;return{setReversed:function(oe){if(q!==oe){let Se=e.get("EXT_clip_control");oe?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),q=oe;let Ge=ae;ae=null,this.setClear(Ge)}},getReversed:function(){return q},setTest:function(oe){oe?fe(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(oe){W!==oe&&!B&&(n.depthMask(oe),W=oe)},setFunc:function(oe){if(q&&(oe=nl[oe]),he!==oe){switch(oe){case Ps:n.depthFunc(n.NEVER);break;case Ks:n.depthFunc(n.ALWAYS);break;case Hs:n.depthFunc(n.LESS);break;case Mn:n.depthFunc(n.LEQUAL);break;case qs:n.depthFunc(n.EQUAL);break;case Xs:n.depthFunc(n.GEQUAL);break;case js:n.depthFunc(n.GREATER);break;case _s:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=oe}},setLocked:function(oe){B=oe},setClear:function(oe){ae!==oe&&(ae=oe,q&&(oe=1-oe),n.clearDepth(oe))},reset:function(){B=!1,W=null,he=null,ae=null,q=!1}}}function s(){let B=!1,q=null,W=null,he=null,ae=null,oe=null,Se=null,Ge=null,re=null;return{setTest:function(Be){B||(Be?fe(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(Be){q!==Be&&!B&&(n.stencilMask(Be),q=Be)},setFunc:function(Be,Le,pe){(W!==Be||he!==Le||ae!==pe)&&(n.stencilFunc(Be,Le,pe),W=Be,he=Le,ae=pe)},setOp:function(Be,Le,pe){(oe!==Be||Se!==Le||Ge!==pe)&&(n.stencilOp(Be,Le,pe),oe=Be,Se=Le,Ge=pe)},setLocked:function(Be){B=Be},setClear:function(Be){re!==Be&&(n.clearStencil(Be),re=Be)},reset:function(){B=!1,q=null,W=null,he=null,ae=null,oe=null,Se=null,Ge=null,re=null}}}let r=new t,a=new i,o=new s,h={},l=new WeakMap,u={},p={},c={},E=new WeakMap,g=[],M=null,f=!1,d=null,w=null,Q=null,y=null,R=null,x=null,m=null,S=new Ne(0,0,0),G=0,J=!1,T=null,z=null,X=null,k=null,K=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ne=0,P=n.getParameter(n.VERSION);P.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(P)[1]),Y=ne>=1):P.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),Y=ne>=2);let _=null,ie={},Ie=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),$=new it().fromArray(Ie),de=new it().fromArray(ke);function me(B,q,W,he){let ae=new Uint8Array(4),oe=n.createTexture();n.bindTexture(B,oe),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<W;Se++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(q,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(q+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return oe}let ye={};ye[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(n.DEPTH_TEST),a.setFunc(Mn),Ct(!1),$e(Ka),fe(n.CULL_FACE),lt($i);function fe(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function be(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function rt(B,q){return c[B]!==q?(n.bindFramebuffer(B,q),c[B]=q,B===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=q),B===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=q),!0):!1}function Re(B,q){let W=g,he=!1;if(B){W=E.get(q),W===void 0&&(W=[],E.set(q,W));let ae=B.textures;if(W.length!==ae.length||W[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Se=ae.length;oe<Se;oe++)W[oe]=n.COLOR_ATTACHMENT0+oe;W.length=ae.length,he=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,he=!0);he&&n.drawBuffers(W)}function Pe(B){return M!==B?(n.useProgram(B),M=B,!0):!1}let qe={[en]:n.FUNC_ADD,[xh]:n.FUNC_SUBTRACT,[Bh]:n.FUNC_REVERSE_SUBTRACT};qe[Rh]=n.MIN,qe[Qh]=n.MAX;let De={[vh]:n.ZERO,[kh]:n.ONE,[bh]:n.SRC_COLOR,[Xa]:n.SRC_ALPHA,[Gh]:n.SRC_ALPHA_SATURATE,[Uh]:n.DST_COLOR,[Th]:n.DST_ALPHA,[Jh]:n.ONE_MINUS_SRC_COLOR,[ja]:n.ONE_MINUS_SRC_ALPHA,[Lh]:n.ONE_MINUS_DST_COLOR,[Fh]:n.ONE_MINUS_DST_ALPHA,[zh]:n.CONSTANT_COLOR,[Dh]:n.ONE_MINUS_CONSTANT_COLOR,[Vh]:n.CONSTANT_ALPHA,[Zh]:n.ONE_MINUS_CONSTANT_ALPHA};function lt(B,q,W,he,ae,oe,Se,Ge,re,Be){if(B===$i){f===!0&&(be(n.BLEND),f=!1);return}if(f===!1&&(fe(n.BLEND),f=!0),B!==yh){if(B!==d||Be!==J){if((w!==en||R!==en)&&(n.blendEquation(n.FUNC_ADD),w=en,R=en),Be)switch(B){case bn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rs:n.blendFunc(n.ONE,n.ONE);break;case Ha:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qa:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Je("WebGLState: Invalid blending: ",B);break}else switch(B){case bn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ha:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qa:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",B);break}Q=null,y=null,x=null,m=null,S.set(0,0,0),G=0,d=B,J=Be}return}ae=ae||q,oe=oe||W,Se=Se||he,(q!==w||ae!==R)&&(n.blendEquationSeparate(qe[q],qe[ae]),w=q,R=ae),(W!==Q||he!==y||oe!==x||Se!==m)&&(n.blendFuncSeparate(De[W],De[he],De[oe],De[Se]),Q=W,y=he,x=oe,m=Se),(Ge.equals(S)===!1||re!==G)&&(n.blendColor(Ge.r,Ge.g,Ge.b,re),S.copy(Ge),G=re),d=B,J=!1}function at(B,q){B.side===ui?be(n.CULL_FACE):fe(n.CULL_FACE);let W=B.side===Ft;q&&(W=!W),Ct(W),B.blending===bn&&B.transparent===!1?lt($i):lt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let he=B.stencilWrite;o.setTest(he),he&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ct(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(B){T!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),T=B)}function $e(B){B!==Mh?(fe(n.CULL_FACE),B!==z&&(B===Ka?n.cullFace(n.BACK):B===Sh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),z=B}function Gt(B){B!==X&&(Y&&n.lineWidth(B),X=B)}function ct(B,q,W){B?(fe(n.POLYGON_OFFSET_FILL),(k!==q||K!==W)&&(k=q,K=W,a.getReversed()&&(q=-q,W=-W),n.polygonOffset(q,W))):be(n.POLYGON_OFFSET_FILL)}function Qt(B){B?fe(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function vt(B){B===void 0&&(B=n.TEXTURE0+H-1),_!==B&&(n.activeTexture(B),_=B)}function kt(B,q,W){W===void 0&&(_===null?W=n.TEXTURE0+H-1:W=_);let he=ie[W];he===void 0&&(he={type:void 0,texture:void 0},ie[W]=he),(he.type!==B||he.texture!==q)&&(_!==W&&(n.activeTexture(W),_=W),n.bindTexture(B,q||ye[B]),he.type=B,he.texture=q)}function F(){let B=ie[_];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function St(){try{n.compressedTexImage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function _e(){try{n.compressedTexImage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function et(){try{n.texSubImage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function ce(){try{n.texSubImage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function Ke(){try{n.compressedTexSubImage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function ve(){try{n.texStorage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function C(){try{n.texStorage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function A(){try{n.texImage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function b(){try{n.texImage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function j(B){return p[B]!==void 0?p[B]:n.getParameter(B)}function D(B,q){p[B]!==q&&(n.pixelStorei(B,q),p[B]=q)}function ee(B){$.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),$.copy(B))}function te(B){de.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),de.copy(B))}function N(B,q){let W=l.get(q);W===void 0&&(W=new WeakMap,l.set(q,W));let he=W.get(B);he===void 0&&(he=n.getUniformBlockIndex(q,B.name),n.uniformBlockBinding(q,he,he),W.set(B,he))}function O(B,q,W){let ae=l.get(q).get(B);h[ae]!==W&&(n.bindBufferBase(n.UNIFORM_BUFFER,ae,W),h[ae]=W)}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},p={},_=null,ie={},c={},h={},E=new WeakMap,g=[],M=null,f=!1,d=null,w=null,Q=null,y=null,R=null,x=null,m=null,S=new Ne(0,0,0),G=0,J=!1,T=null,z=null,X=null,k=null,K=null,$.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:fe,disable:be,bindFramebuffer:rt,drawBuffers:Re,useProgram:Pe,setBlending:lt,setMaterial:at,setFlipSided:Ct,setCullFace:$e,setLineWidth:Gt,setPolygonOffset:ct,setScissorTest:Qt,activeTexture:vt,bindTexture:kt,unbindTexture:F,compressedTexImage2D:St,compressedTexImage3D:_e,texImage2D:A,texImage3D:b,pixelStorei:D,getParameter:j,updateUBOMapping:N,uniformBlockBinding:O,texStorage2D:ve,texStorage3D:C,texSubImage2D:et,texSubImage3D:ce,compressedTexSubImage2D:Ke,compressedTexSubImage3D:xe,scissor:ee,viewport:te,reset:se}}function uA(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,u=new WeakMap,p=new Set,c,E=new WeakMap,g=new Set,M=new FinalizationRegistry(C=>g.delete(C)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(C,A){return f?new OffscreenCanvas(C,A):Sn("canvas")}function w(C,A,b){let j=1,D=ve(C);if((D.width>b||D.height>b)&&(j=b/Math.max(D.width,D.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ee=Math.floor(j*D.width),te=Math.floor(j*D.height);c===void 0&&(c=d(ee,te));let N=A?d(ee,te):c;return N.width=ee,N.height=te,N.getContext("2d").drawImage(C,0,0,ee,te),Qe("WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+ee+"x"+te+")."),N}else return"data"in C&&Qe("WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),C;return C}function Q(C){return C.generateMipmaps}function y(C){n.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(C,A,b,j,D,ee=!1){if(C!==null){if(n[C]!==void 0)return n[C];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let te;j&&(te=e.get("EXT_texture_norm16"),te||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let N=A;if(A===n.RED&&(b===n.FLOAT&&(N=n.R32F),b===n.HALF_FLOAT&&(N=n.R16F),b===n.UNSIGNED_BYTE&&(N=n.R8),b===n.UNSIGNED_SHORT&&te&&(N=te.R16_EXT),b===n.SHORT&&te&&(N=te.R16_SNORM_EXT)),A===n.RED_INTEGER&&(b===n.UNSIGNED_BYTE&&(N=n.R8UI),b===n.UNSIGNED_SHORT&&(N=n.R16UI),b===n.UNSIGNED_INT&&(N=n.R32UI),b===n.BYTE&&(N=n.R8I),b===n.SHORT&&(N=n.R16I),b===n.INT&&(N=n.R32I)),A===n.RG&&(b===n.FLOAT&&(N=n.RG32F),b===n.HALF_FLOAT&&(N=n.RG16F),b===n.UNSIGNED_BYTE&&(N=n.RG8),b===n.UNSIGNED_SHORT&&te&&(N=te.RG16_EXT),b===n.SHORT&&te&&(N=te.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(b===n.UNSIGNED_BYTE&&(N=n.RG8UI),b===n.UNSIGNED_SHORT&&(N=n.RG16UI),b===n.UNSIGNED_INT&&(N=n.RG32UI),b===n.BYTE&&(N=n.RG8I),b===n.SHORT&&(N=n.RG16I),b===n.INT&&(N=n.RG32I)),A===n.RGB_INTEGER&&(b===n.UNSIGNED_BYTE&&(N=n.RGB8UI),b===n.UNSIGNED_SHORT&&(N=n.RGB16UI),b===n.UNSIGNED_INT&&(N=n.RGB32UI),b===n.BYTE&&(N=n.RGB8I),b===n.SHORT&&(N=n.RGB16I),b===n.INT&&(N=n.RGB32I)),A===n.RGBA_INTEGER&&(b===n.UNSIGNED_BYTE&&(N=n.RGBA8UI),b===n.UNSIGNED_SHORT&&(N=n.RGBA16UI),b===n.UNSIGNED_INT&&(N=n.RGBA32UI),b===n.BYTE&&(N=n.RGBA8I),b===n.SHORT&&(N=n.RGBA16I),b===n.INT&&(N=n.RGBA32I)),A===n.RGB&&(b===n.UNSIGNED_SHORT&&te&&(N=te.RGB16_EXT),b===n.SHORT&&te&&(N=te.RGB16_SNORM_EXT),b===n.UNSIGNED_INT_5_9_9_9_REV&&(N=n.RGB9_E5),b===n.UNSIGNED_INT_10F_11F_11F_REV&&(N=n.R11F_G11F_B10F)),A===n.RGBA){let O=ee?Wn:Ye.getTransfer(D);b===n.FLOAT&&(N=n.RGBA32F),b===n.HALF_FLOAT&&(N=n.RGBA16F),b===n.UNSIGNED_BYTE&&(N=O===Xe?n.SRGB8_ALPHA8:n.RGBA8),b===n.UNSIGNED_SHORT&&te&&(N=te.RGBA16_EXT),b===n.SHORT&&te&&(N=te.RGBA16_SNORM_EXT),b===n.UNSIGNED_SHORT_4_4_4_4&&(N=n.RGBA4),b===n.UNSIGNED_SHORT_5_5_5_1&&(N=n.RGB5_A1)}return(N===n.R16F||N===n.R32F||N===n.RG16F||N===n.RG32F||N===n.RGBA16F||N===n.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function m(C,A){let b;return C?A===null||A===ni||A===nn?b=n.DEPTH24_STENCIL8:A===si?b=n.DEPTH32F_STENCIL8:A===Tn&&(b=n.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ni||A===nn?b=n.DEPTH_COMPONENT24:A===si?b=n.DEPTH_COMPONENT32F:A===Tn&&(b=n.DEPTH_COMPONENT16),b}function S(C,A){return Q(C)===!0||C.isFramebufferTexture&&C.minFilter!==gt&&C.minFilter!==It?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function G(C){let A=new WeakRef(C);i.get(C).__ref=A,g.add(A),M.register(C,A,A)}function J(C){let A=i.get(C).__ref;A!==void 0&&(g.delete(A),M.unregister(A))}function T(C){X(C.target)}function z(C){k(C.target)}function X(C){C.removeEventListener("dispose",T),J(C),H(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&p.delete(C)}function k(C){C.removeEventListener("dispose",z),J(C),ne(C)}function K(){for(let C of g){let A=C.deref();A!==void 0&&(A.isRenderTarget===!0?k(A):X(A))}g.clear(),p.clear()}function H(C){let A=i.get(C);if(A.__webglInit===void 0)return;let b=C.source,j=E.get(b);if(j){let D=j[A.__cacheKey];D.usedTimes--,D.usedTimes===0&&Y(C),Object.keys(j).length===0&&E.delete(b)}i.remove(C)}function Y(C){let A=i.get(C);n.deleteTexture(A.__webglTexture);let b=C.source,j=E.get(b);delete j[A.__cacheKey],a.memory.textures--}function ne(C){let A=i.get(C);A.__depthDisposeCallback&&A.__depthDisposeCallback();let b=C.depthTexture;if(b&&b.renderTarget===C&&X(b),C.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(A.__webglFramebuffer[D]))for(let ee=0;ee<A.__webglFramebuffer[D].length;ee++)n.deleteFramebuffer(A.__webglFramebuffer[D][ee]);else n.deleteFramebuffer(A.__webglFramebuffer[D]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[D])}else{if(Array.isArray(A.__webglFramebuffer))for(let D=0;D<A.__webglFramebuffer.length;D++)n.deleteFramebuffer(A.__webglFramebuffer[D]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let D=0;D<A.__webglColorRenderbuffer.length;D++)A.__webglColorRenderbuffer[D]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[D]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let j=C.textures;for(let D=0,ee=j.length;D<ee;D++){let te=i.get(j[D]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(j[D])}i.remove(C)}let P=0;function _(){P=0}function ie(){return P}function Ie(C){P=C}function ke(){let C=P;return C>=s.maxTextures&&Qe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function $(C){let A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.mipmapsAutoUpdate),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.colorSpace),A.join()}function de(C,A){let b=i.get(C);if(C.isVideoTexture&&Ke(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&b.__version!==C.version){let j=C.image;if(j===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{at(b,C,A);return}}else C.isExternalTexture&&(b.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,b.__webglTexture,n.TEXTURE0+A)}function me(C,A){let b=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&b.__version!==C.version){at(b,C,A);return}else C.isExternalTexture&&(b.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,b.__webglTexture,n.TEXTURE0+A)}function ye(C,A){let b=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&b.__version!==C.version){at(b,C,A);return}t.bindTexture(n.TEXTURE_3D,b.__webglTexture,n.TEXTURE0+A)}function fe(C,A){let b=i.get(C);if(C.version>0&&b.__version!==C.version){Ct(b,C,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+A)}let be={[$s]:n.REPEAT,[Pt]:n.CLAMP_TO_EDGE,[er]:n.MIRRORED_REPEAT},rt={[gt]:n.NEAREST,[Oh]:n.NEAREST_MIPMAP_NEAREST,[as]:n.NEAREST_MIPMAP_LINEAR,[It]:n.LINEAR,[Qr]:n.LINEAR_MIPMAP_NEAREST,[ii]:n.LINEAR_MIPMAP_LINEAR},Re={[Hh]:n.NEVER,[go]:n.ALWAYS,[qh]:n.LESS,[Eo]:n.LEQUAL,[Xh]:n.EQUAL,[mo]:n.GEQUAL,[jh]:n.GREATER,[_h]:n.NOTEQUAL};function Pe(C,A){if(A.type===si&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===It||A.magFilter===Qr||A.magFilter===as||A.magFilter===ii||A.minFilter===It||A.minFilter===Qr||A.minFilter===as||A.minFilter===ii)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,be[A.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,be[A.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,be[A.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,rt[A.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,rt[A.minFilter]),A.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Re[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===gt||A.minFilter!==as&&A.minFilter!==ii||A.type===si&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let b=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function qe(C,A){let b=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",T),G(A));let j=A.source,D=E.get(j);D===void 0&&(D={},E.set(j,D));let ee=$(A);if(ee!==C.__cacheKey){D[ee]===void 0&&(D[ee]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,b=!0),D[ee].usedTimes++;let te=D[C.__cacheKey];te!==void 0&&(D[C.__cacheKey].usedTimes--,te.usedTimes===0&&Y(A)),C.__cacheKey=ee,C.__webglTexture=D[ee].texture}return b}function De(C,A,b){return Math.floor(Math.floor(C/b)/A)}function lt(C,A,b,j){let ee=C.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,b,j,A.data);else{ee.sort((B,q)=>B.start-q.start);let te=0;for(let B=1;B<ee.length;B++){let q=ee[te],W=ee[B],he=q.start+q.count,ae=De(W.start,A.width,4),oe=De(q.start,A.width,4);W.start<=he+1&&ae===oe&&De(W.start+W.count-1,A.width,4)===ae?q.count=Math.max(q.count,W.start+W.count-q.start):(++te,ee[te]=W)}ee.length=te+1;let N=t.getParameter(n.UNPACK_ROW_LENGTH),O=t.getParameter(n.UNPACK_SKIP_PIXELS),se=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let B=0,q=ee.length;B<q;B++){let W=ee[B],he=Math.floor(W.start/4),ae=Math.ceil(W.count/4),oe=he%A.width,Se=Math.floor(he/A.width),Ge=ae,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Se),t.texSubImage2D(n.TEXTURE_2D,0,oe,Se,Ge,re,b,j,A.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,N),t.pixelStorei(n.UNPACK_SKIP_PIXELS,O),t.pixelStorei(n.UNPACK_SKIP_ROWS,se)}}function at(C,A,b){let j=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(j=n.TEXTURE_3D);let D=qe(C,A),ee=A.source;t.bindTexture(j,C.__webglTexture,n.TEXTURE0+b);let te=i.get(ee);if(ee.version!==te.__version||D===!0){if(t.activeTexture(n.TEXTURE0+b),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let re=Ye.getPrimaries(Ye.workingColorSpace),Be=A.colorSpace===oi?null:Ye.getPrimaries(A.colorSpace),Le=A.colorSpace===oi||re===Be?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let O=w(A.image,!1,s.maxTextureSize);O=xe(A,O);let se=r.convert(A.format,A.colorSpace),B=r.convert(A.type),q=x(A.internalFormat,se,B,A.normalized,A.colorSpace,A.isVideoTexture);Pe(j,A);let W,he=A.mipmaps,ae=A.isVideoTexture!==!0,oe=te.__version===void 0||D===!0,Se=ee.dataReady,Ge=S(A,O);if(A.isDepthTexture)q=m(A.format===yi,A.type),oe&&(ae?t.texStorage2D(n.TEXTURE_2D,1,q,O.width,O.height):t.texImage2D(n.TEXTURE_2D,0,q,O.width,O.height,0,se,B,null));else if(A.isDataTexture)if(he.length>0){ae&&oe&&t.texStorage2D(n.TEXTURE_2D,Ge,q,he[0].width,he[0].height);for(let re=0,Be=he.length;re<Be;re++)W=he[re],ae?Se&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,W.width,W.height,se,B,W.data):t.texImage2D(n.TEXTURE_2D,re,q,W.width,W.height,0,se,B,W.data);A.generateMipmaps=!1}else ae?(oe&&t.texStorage2D(n.TEXTURE_2D,Ge,q,O.width,O.height),Se&&lt(A,O,se,B)):t.texImage2D(n.TEXTURE_2D,0,q,O.width,O.height,0,se,B,O.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ae&&oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,q,he[0].width,he[0].height,O.depth);for(let re=0,Be=he.length;re<Be;re++)if(W=he[re],A.format!==ai)if(se!==null)if(ae){if(Se)if(A.layerUpdates.size>0){let Le=xo(W.width,W.height,A.format,A.type);for(let pe of A.layerUpdates){let je=W.data.subarray(pe*Le/W.data.BYTES_PER_ELEMENT,(pe+1)*Le/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,pe,W.width,W.height,1,se,je)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,W.width,W.height,O.depth,se,W.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,q,W.width,W.height,O.depth,0,W.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,W.width,W.height,O.depth,se,B,W.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,q,W.width,W.height,O.depth,0,se,B,W.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{ae&&oe&&t.texStorage2D(n.TEXTURE_2D,Ge,q,he[0].width,he[0].height);for(let re=0,Be=he.length;re<Be;re++)W=he[re],A.format!==ai?se!==null?ae?Se&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,W.width,W.height,se,W.data):t.compressedTexImage2D(n.TEXTURE_2D,re,q,W.width,W.height,0,W.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Se&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,W.width,W.height,se,B,W.data):t.texImage2D(n.TEXTURE_2D,re,q,W.width,W.height,0,se,B,W.data)}else if(A.isDataArrayTexture)if(ae){if(oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,q,O.width,O.height,O.depth),Se)if(A.layerUpdates.size>0){let re=xo(O.width,O.height,A.format,A.type);for(let Be of A.layerUpdates){let Le=O.data.subarray(Be*re/O.data.BYTES_PER_ELEMENT,(Be+1)*re/O.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Be,O.width,O.height,1,se,B,Le)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,se,B,O.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,q,O.width,O.height,O.depth,0,se,B,O.data);else if(A.isData3DTexture)ae?(oe&&t.texStorage3D(n.TEXTURE_3D,Ge,q,O.width,O.height,O.depth),Se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,se,B,O.data)):t.texImage3D(n.TEXTURE_3D,0,q,O.width,O.height,O.depth,0,se,B,O.data);else if(A.isFramebufferTexture){if(oe)if(ae)t.texStorage2D(n.TEXTURE_2D,Ge,q,O.width,O.height);else{let re=O.width,Be=O.height;for(let Le=0;Le<Ge;Le++)t.texImage2D(n.TEXTURE_2D,Le,q,re,Be,0,se,B,null),re>>=1,Be>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){let re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),O.parentNode!==re){re.appendChild(O),p.add(A),re.onpaint=Be=>{let Le=Be.changedElements;for(let pe of p)Le.includes(pe.image)&&(pe.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,O);else{let Le=n.RGBA,pe=n.RGBA,je=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Le,pe,je,O)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(he.length>0){if(ae&&oe){let re=ve(he[0]);t.texStorage2D(n.TEXTURE_2D,Ge,q,re.width,re.height)}for(let re=0,Be=he.length;re<Be;re++)W=he[re],ae?Se&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,se,B,W):t.texImage2D(n.TEXTURE_2D,re,q,se,B,W);A.generateMipmaps=!1}else if(ae){if(oe){let re=ve(O);t.texStorage2D(n.TEXTURE_2D,Ge,q,re.width,re.height)}Se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se,B,O)}else t.texImage2D(n.TEXTURE_2D,0,q,se,B,O);Q(A)&&A.mipmapsAutoUpdate===!0&&y(j),te.__version=ee.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function Ct(C,A,b){if(A.image.length!==6)return;let j=qe(C,A),D=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+b);let ee=i.get(D);if(D.version!==ee.__version||j===!0){t.activeTexture(n.TEXTURE0+b);let te=Ye.getPrimaries(Ye.workingColorSpace),N=A.colorSpace===oi?null:Ye.getPrimaries(A.colorSpace),O=A.colorSpace===oi||te===N?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);let se=A.isCompressedTexture||A.image[0].isCompressedTexture,B=A.image[0]&&A.image[0].isDataTexture,q=[];for(let pe=0;pe<6;pe++)!se&&!B?q[pe]=w(A.image[pe],!0,s.maxCubemapSize):q[pe]=B?A.image[pe].image:A.image[pe],q[pe]=xe(A,q[pe]);let W=q[0],he=r.convert(A.format,A.colorSpace),ae=r.convert(A.type),oe=x(A.internalFormat,he,ae,A.normalized,A.colorSpace),Se=A.isVideoTexture!==!0,Ge=ee.__version===void 0||j===!0,re=D.dataReady,Be=S(A,W);Pe(n.TEXTURE_CUBE_MAP,A);let Le;if(A.isDepthTexture){if(oe=m(A.format===yi,A.type),Ge)if(Se)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,oe,W.width,W.height);else for(let pe=0;pe<6;pe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,W.width,W.height,0,he,ae,null)}else if(se){Se&&Ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,oe,W.width,W.height);for(let pe=0;pe<6;pe++){Le=q[pe].mipmaps;for(let je=0;je<Le.length;je++){let At=Le[je];A.format!==ai?he!==null?Se?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,je,0,0,At.width,At.height,he,At.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,je,oe,At.width,At.height,0,At.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,je,0,0,At.width,At.height,he,ae,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,je,oe,At.width,At.height,0,he,ae,At.data)}}}else{if(Le=A.mipmaps,Se&&Ge){Le.length>0&&Be++;let pe=ve(q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,oe,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(B){Se?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,q[pe].width,q[pe].height,he,ae,q[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,q[pe].width,q[pe].height,0,he,ae,q[pe].data);for(let je=0;je<Le.length;je++){let xi=Le[je].image[pe].image;Se?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,je+1,0,0,xi.width,xi.height,he,ae,xi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,je+1,oe,xi.width,xi.height,0,he,ae,xi.data)}}else{Se?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,he,ae,q[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,he,ae,q[pe]);for(let je=0;je<Le.length;je++){let At=Le[je];Se?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,je+1,0,0,he,ae,At.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,je+1,oe,he,ae,At.image[pe])}}}Q(A)&&A.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),ee.__version=D.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function $e(C,A,b,j,D,ee){let te=r.convert(b.format,b.colorSpace),N=r.convert(b.type),O=x(b.internalFormat,te,N,b.normalized,b.colorSpace),se=i.get(A),B=i.get(b);if(B.__renderTarget=A,!se.__hasExternalTextures){let q=Math.max(1,A.width>>ee),W=Math.max(1,A.height>>ee);D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?t.texImage3D(D,ee,O,q,W,A.depth,0,te,N,null):t.texImage2D(D,ee,O,q,W,0,te,N,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ce(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,D,B.__webglTexture,0,et(A)):(D===n.TEXTURE_2D||D>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&D<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,D,B.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(C,A,b){if(n.bindRenderbuffer(n.RENDERBUFFER,C),A.depthBuffer){let j=A.depthTexture,D=j&&j.isDepthTexture?j.type:null,ee=m(A.stencilBuffer,D),te=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ce(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et(A),ee,A.width,A.height):b?n.renderbufferStorageMultisample(n.RENDERBUFFER,et(A),ee,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ee,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,C)}else{let j=A.textures;for(let D=0;D<j.length;D++){let ee=j[D],te=r.convert(ee.format,ee.colorSpace),N=r.convert(ee.type),O=x(ee.internalFormat,te,N,ee.normalized,ee.colorSpace);ce(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et(A),O,A.width,A.height):b?n.renderbufferStorageMultisample(n.RENDERBUFFER,et(A),O,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,O,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ct(C,A,b){let j=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let D=i.get(A.depthTexture);D.__renderTarget=A;let ee=j?A.depthTexture.image[0]:A.depthTexture.image;(!D.__webglTexture||ee.width!==A.width||ee.height!==A.height)&&(ee.width=A.width,ee.height=A.height,A.depthTexture.needsUpdate=!0),j?fe(A.depthTexture,0):de(A.depthTexture,0);let te=D.__webglTexture,N=et(A),O=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+b:n.TEXTURE_2D,se=A.depthTexture.format===yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===Si)ce(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,O,te,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,se,O,te,0);else if(A.depthTexture.format===yi)ce(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,O,te,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,se,O,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qt(C){let A=i.get(C),b=C.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==C.depthTexture){let j=C.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),j){let D=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,j.removeEventListener("dispose",D)};j.addEventListener("dispose",D),A.__depthDisposeCallback=D}A.__boundDepthTexture=j}if(C.depthTexture&&!A.__autoAllocateDepthBuffer)if(b)for(let j=0;j<6;j++)ct(A.__webglFramebuffer[j],C,j);else C.texture.mipmaps.length>0?ct(A.__webglFramebuffer[0],C,0):ct(A.__webglFramebuffer,C,0);else if(b){A.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[j]),A.__webglDepthbuffer[j]===void 0)A.__webglDepthbuffer[j]=n.createRenderbuffer(),Gt(A.__webglDepthbuffer[j],C,!1);else{let D=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=A.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,D,n.RENDERBUFFER,ee)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Gt(A.__webglDepthbuffer,C,!1);else{let D=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,D,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(C,A,b){let j=i.get(C);A!==void 0&&$e(j.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),b!==void 0&&Qt(C)}function kt(C){let A=C.texture,b=i.get(C),j=i.get(A);C.addEventListener("dispose",z),G(C);let D=C.textures,ee=C.isWebGLCubeRenderTarget===!0,te=D.length>1;if(te||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=A.version,a.memory.textures++),ee){b.__webglFramebuffer=[];for(let N=0;N<6;N++)if(A.mipmaps.length>0){b.__webglFramebuffer[N]=[];for(let O=0;O<A.mipmaps.length;O++)b.__webglFramebuffer[N][O]=n.createFramebuffer()}else b.__webglFramebuffer[N]=n.createFramebuffer()}else{if(A.mipmaps.length>0){b.__webglFramebuffer=[];for(let N=0;N<A.mipmaps.length;N++)b.__webglFramebuffer[N]=n.createFramebuffer()}else b.__webglFramebuffer=n.createFramebuffer();if(te)for(let N=0,O=D.length;N<O;N++){let se=i.get(D[N]);se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&ce(C)===!1){b.__webglMultisampledFramebuffer=n.createFramebuffer(),b.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let N=0;N<D.length;N++){let O=D[N];b.__webglColorRenderbuffer[N]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,b.__webglColorRenderbuffer[N]);let se=r.convert(O.format,O.colorSpace),B=r.convert(O.type),q=x(O.internalFormat,se,B,O.normalized,O.colorSpace,C.isXRRenderTarget===!0),W=et(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,W,q,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+N,n.RENDERBUFFER,b.__webglColorRenderbuffer[N])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(b.__webglDepthRenderbuffer=n.createRenderbuffer(),Gt(b.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,A);for(let N=0;N<6;N++)if(A.mipmaps.length>0)for(let O=0;O<A.mipmaps.length;O++)$e(b.__webglFramebuffer[N][O],C,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+N,O);else $e(b.__webglFramebuffer[N],C,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);Q(A)?y(n.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(te){for(let N=0,O=D.length;N<O;N++){let se=D[N],B=i.get(se),q=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,B.__webglTexture),Pe(q,se),$e(b.__webglFramebuffer,C,se,n.COLOR_ATTACHMENT0+N,q,0),Q(se)&&y(q)}t.unbindTexture()}else{let N=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(N=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(N,j.__webglTexture),Pe(N,A),A.mipmaps.length>0)for(let O=0;O<A.mipmaps.length;O++)$e(b.__webglFramebuffer[O],C,A,n.COLOR_ATTACHMENT0,N,O);else $e(b.__webglFramebuffer,C,A,n.COLOR_ATTACHMENT0,N,0);Q(A)?y(N):A.mipmaps.length>0&&n.texParameteri(N,n.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Qt(C)}function F(C){let A=C.textures;for(let b=0,j=A.length;b<j;b++){let D=A[b];if(Q(D)&&D.mipmapsAutoUpdate===!0){let ee=R(C),te=i.get(D).__webglTexture;t.bindTexture(ee,te),y(ee),t.unbindTexture()}}}let St=[];function _e(C){if(C.samples>0){if(ce(C)===!1){let A=C.textures,b=C.width,j=C.height,D=n.COLOR_BUFFER_BIT,ee=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=i.get(C),N=A.length>1;if(N)for(let se=0;se<A.length;se++)t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let se=0;se<A.length;se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(D|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(D|=n.STENCIL_BUFFER_BIT)),N){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,te.__webglColorRenderbuffer[se]);let B=i.get(A[se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,B,0)}n.blitFramebuffer(0,0,b,j,0,0,b,j,D,n.NEAREST),h===!0&&(St.length=0,St.push(n.COLOR_ATTACHMENT0+se),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&St.push(ee),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),N)for(let se=0;se<A.length;se++){t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,te.__webglColorRenderbuffer[se]);let B=i.get(A[se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,B,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&h){let A=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function et(C){return Math.min(s.maxSamples,C.samples)}function ce(C){let A=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ke(C){let A=a.render.frame;u.get(C)!==A&&(u.set(C,A),C.update())}function xe(C,A){let b=C.colorSpace,j=C.format,D=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||b!==On&&b!==oi&&(Ye.getTransfer(b)===Xe?(j!==ai||D!==Ot)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",b)),A}function ve(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=ke,this.resetTextureUnits=_,this.getTextureUnits=ie,this.setTextureUnits=Ie,this.setTexture2D=de,this.setTexture2DArray=me,this.setTexture3D=ye,this.setTextureCube=fe,this.rebindTextures=vt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=ce,this.dispose=K}function dA(n,e){function t(i,s=oi){let r,a=Ye.getTransfer(s);if(i===Ot)return n.UNSIGNED_BYTE;if(i===kr)return n.UNSIGNED_SHORT_4_4_4_4;if(i===br)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lo)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===co)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===oo)return n.BYTE;if(i===ho)return n.SHORT;if(i===Tn)return n.UNSIGNED_SHORT;if(i===vr)return n.INT;if(i===ni)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===ri)return n.HALF_FLOAT;if(i===uo)return n.ALPHA;if(i===fo)return n.RGB;if(i===ai)return n.RGBA;if(i===Si)return n.DEPTH_COMPONENT;if(i===yi)return n.DEPTH_STENCIL;if(i===po)return n.RED;if(i===Jr)return n.RED_INTEGER;if(i===Vi)return n.RG;if(i===Tr)return n.RG_INTEGER;if(i===Fr)return n.RGBA_INTEGER;if(i===os||i===hs||i===ls||i===cs)if(a===Xe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===os)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===os)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ls)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ur||i===Lr||i===Gr||i===zr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ur)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dr||i===Vr||i===Zr||i===Yr||i===Nr||i===us||i===Or)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Dr||i===Vr)return a===Xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Zr)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yr)return r.COMPRESSED_R11_EAC;if(i===Nr)return r.COMPRESSED_SIGNED_R11_EAC;if(i===us)return r.COMPRESSED_RG11_EAC;if(i===Or)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wr||i===Pr||i===Kr||i===Hr||i===qr||i===Xr||i===jr||i===_r||i===$r||i===ea||i===ta||i===ia||i===na||i===sa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wr)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pr)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kr)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hr)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qr)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xr)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jr)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_r)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$r)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ea)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ta)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ia)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===na)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sa)return a===Xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ra||i===aa||i===oa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ra)return a===Xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ha||i===la||i===ds||i===ca)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ha)return r.COMPRESSED_RED_RGTC1_EXT;if(i===la)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ds)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var fA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pA=`
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

}`,Fo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ts(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Lt({vertexShader:fA,fragmentShader:pA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qt(new ji(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uo=class extends li{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",h=1,l=null,u=null,p=null,c=null,E=null,g=null,M=typeof XRWebGLBinding<"u",f=new Fo,d={},w=t.getContextAttributes(),Q=null,y=null,R=[],x=[],m=new Ue,S=null,G=null,J=new Vt;J.viewport=new it;let T=new Vt;T.viewport=new it;let z=[J,T],X=new yr,k=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let de=R[$];return de===void 0&&(de=new xn,R[$]=de),de.getTargetRaySpace()},this.getControllerGrip=function($){let de=R[$];return de===void 0&&(de=new xn,R[$]=de),de.getGripSpace()},this.getHand=function($){let de=R[$];return de===void 0&&(de=new xn,R[$]=de),de.getHandSpace()};function H($){let de=x.indexOf($.inputSource);if(de===-1)return;let me=R[de];me!==void 0&&(me.update($.inputSource,$.frame,l||a),me.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ne);for(let $=0;$<R.length;$++){let de=x[$];de!==null&&(x[$]=null,R[$].disconnect(de))}k=null,K=null,f.reset();for(let $ in d)delete d[$];if(e.setRenderTarget(Q),E=null,c=null,p=null,s=null,y=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(m.width,m.height,!1),G!==null){let $=G.camera;$.fov=G.fov,$.zoom=G.zoom,$.updateProjectionMatrix(),G=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return c!==null?c:E},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(Q=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ne),w.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(m),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,ye=null,fe=null;w.depth&&(fe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=w.stencil?yi:Si,ye=w.stencil?nn:ni);let be={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};p=this.getBinding(),c=p.createProjectionLayer(be),s.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),y=new Zt(c.textureWidth,c.textureHeight,{format:ai,type:Ot,depthTexture:new wi(c.textureWidth,c.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}else{let me={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};E=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),y=new Zt(E.framebufferWidth,E.framebufferHeight,{format:ai,type:Ot,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(h),l=null,a=await s.requestReferenceSpace(o),ke.setContext(s),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ne($){for(let de=0;de<$.removed.length;de++){let me=$.removed[de],ye=x.indexOf(me);ye>=0&&(x[ye]=null,R[ye].disconnect(me))}for(let de=0;de<$.added.length;de++){let me=$.added[de],ye=x.indexOf(me);if(ye===-1){for(let be=0;be<R.length;be++)if(be>=x.length){x.push(me),ye=be;break}else if(x[be]===null){x[be]=me,ye=be;break}if(ye===-1)break}let fe=R[ye];fe&&fe.connect(me)}}function P($,de){de===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(de.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let de=$.near,me=$.far;f.texture!==null&&(f.depthNear>0&&(de=f.depthNear),f.depthFar>0&&(me=f.depthFar)),X.near=T.near=J.near=de,X.far=T.far=J.far=me,(k!==X.near||K!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),k=X.near,K=X.far),X.layers.mask=$.layers.mask|6,J.layers.mask=X.layers.mask&-5,T.layers.mask=X.layers.mask&-3;let ye=$.parent,fe=X.cameras;P(X,ye);for(let be=0;be<fe.length;be++)P(fe[be],ye);X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),G===null&&$.isPerspectiveCamera&&(G={camera:$,fov:$.fov,zoom:$.zoom}),_($,X,ye)};function _($,de,me){me===null?$.matrix.copy(de.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(de.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(de.projectionMatrix),$.projectionMatrixInverse.copy(de.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ir*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(c===null&&E===null))return h},this.setFoveation=function($){h=$,c!==null&&(c.fixedFoveation=$),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=$)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(X)},this.getCameraTexture=function($){return d[$]};let ie=null;function Ie($,de){if(u=de.getViewerPose(l||a),g=de,u!==null){let me=u.views;E!==null&&(e.setRenderTargetFramebuffer(y,E.framebuffer),e.setRenderTarget(y));let ye=!1;me.length!==X.cameras.length&&(X.cameras.length=0,ye=!0);for(let Re=0;Re<me.length;Re++){let Pe=me[Re],qe=null;if(E!==null)qe=E.getViewport(Pe);else{let lt=p.getViewSubImage(c,Pe);qe=lt.viewport,Re===0&&(e.setRenderTargetTextures(y,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(y))}let De=z[Re];De===void 0&&(De=new Vt,De.layers.enable(Re),De.viewport=new it,z[Re]=De),De.matrix.fromArray(Pe.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Pe.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(qe.x,qe.y,qe.width,qe.height),Re===0&&(X.matrix.copy(De.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ye===!0&&X.cameras.push(De)}let fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=i.getBinding();let Re=p.getDepthInformation(me[0]);Re&&Re.isValid&&Re.texture&&f.init(Re,s.renderState)}if(fe&&fe.includes("camera-access")&&M){e.state.unbindTexture(),p=i.getBinding();for(let Re=0;Re<me.length;Re++){let Pe=me[Re].camera;if(Pe){let qe=d[Pe];qe||(qe=new ts,d[Pe]=qe);let De=p.getCameraImage(Pe);qe.sourceTexture=De}}}}for(let me=0;me<R.length;me++){let ye=x[me],fe=R[me];ye!==null&&fe!==void 0&&fe.update(ye,de,l||a)}ie&&ie($,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}let ke=new kl;ke.setAnimationLoop(Ie),this.setAnimationLoop=function($){ie=$},this.dispose=function(){}}},AA=new ht,Vl=new Te;Vl.set(-1,0,0,0,1,0,0,0,1);function EA(n,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function i(f,d){d.color.getRGB(f.fogColor.value,So(n)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,w,Q,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(f,d):d.isMeshLambertMaterial?(r(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(f,d),p(f,d)):d.isMeshPhongMaterial?(r(f,d),u(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(f,d),c(f,d),d.isMeshPhysicalMaterial&&E(f,d,y)):d.isMeshMatcapMaterial?(r(f,d),g(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),M(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?h(f,d,w,Q):d.isSpriteMaterial?l(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Ft&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Ft&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let w=e.get(d),Q=w.envMap,y=w.envMapRotation;Q&&(f.envMap.value=Q,f.envMapRotation.value.setFromMatrix4(AA.makeRotationFromEuler(y)).transpose(),Q.isCubeTexture&&Q.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Vl),f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function h(f,d,w,Q){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*w,f.scale.value=Q*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function l(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function u(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function p(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function c(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function E(f,d,w){f.ior.value=d.ior,d.diffuseRoughness>0&&(f.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ft&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.retroreflectivity>0&&(f.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function M(f,d){let w=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function mA(n,e,t,i){let s={},r={};function a(w,Q){let y=Q.program;i.uniformBlockBinding(w,y,s[w.id])}function o(w,Q){let y=s[w.id];y===void 0&&(g(w),y=h(w),s[w.id]=y,w.addEventListener("dispose",f));let R=Q.program;i.updateUBOMapping(w,R);let x=e.render.frame;r[w.id]!==x&&(l(w),r[w.id]=x)}function h(w){let Q=n.createBuffer(),y=w.__size,R=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,Q),n.bufferData(n.UNIFORM_BUFFER,y,R),n.bindBuffer(n.UNIFORM_BUFFER,null),Q}function l(w){let Q=s[w.id],y=w.uniforms,R=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,Q);for(let x=0,m=y.length;x<m;x++){let S=y[x];if(Array.isArray(S))for(let G=0,J=S.length;G<J;G++)u(S[G],x,G,R);else u(S,x,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(w,Q,y,R){if(c(w,Q,y,R)===!0){let x=w.__offset,m=w.value;if(Array.isArray(m)){let S=0;for(let G=0;G<m.length;G++){let J=m[G],T=M(J,!0);p(J,w.__data,S),S+=T.storage/Float32Array.BYTES_PER_ELEMENT}}else p(m,w.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,w.__data)}}function p(w,Q,y){typeof w=="number"||typeof w=="boolean"?Q[y]=w:w.isMatrix3?(Q[y]=w.elements[0],Q[y+1]=w.elements[1],Q[y+2]=w.elements[2],Q[y+3]=0,Q[y+4]=w.elements[3],Q[y+5]=w.elements[4],Q[y+6]=w.elements[5],Q[y+7]=0,Q[y+8]=w.elements[6],Q[y+9]=w.elements[7],Q[y+10]=w.elements[8],Q[y+11]=0):ArrayBuffer.isView(w)?Q.set(w.subarray(0,Q.length-y),y):w.toArray(Q,y)}function c(w,Q,y,R){let x=w.value,m=Q+"_"+y;if(Array.isArray(x)){R[m]===void 0&&(R[m]=[]);let S=R[m],G=!1;for(let J=0;J<x.length;J++)E(x[J],S,J)===!0&&(G=!0);return G}return E(x,R,m)}function E(w,Q,y){if(Q[y]===void 0)return typeof w=="number"||typeof w=="boolean"?Q[y]=w:ArrayBuffer.isView(w)?Q[y]=w.slice():Q[y]=w.clone(),!0;{let R=Q[y];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return Q[y]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(R.equals(w)===!1)return R.copy(w),!0}}return!1}function g(w){let Q=w.uniforms,y=0,R=16;for(let m=0,S=Q.length;m<S;m++){let G=Array.isArray(Q[m])?Q[m]:[Q[m]];for(let J=0,T=G.length;J<T;J++){let z=G[J],X=Array.isArray(z.value)?z.value:[z.value],k=Array.isArray(Q[m])||Array.isArray(z.value),K=y;for(let Y=0,ne=X.length;Y<ne;Y++){let P=X[Y],_=M(P,k),ie=y%R,Ie=ie%_.boundary,ke=ie+Ie;y+=Ie,ke!==0&&R-ke<_.storage&&(y+=R-ke),Y===0&&(K=y),y+=_.storage}let H=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new H((y-K)/Float32Array.BYTES_PER_ELEMENT),z.__offset=K}}let x=y%R;return x>0&&(y+=R-x),w.__size=y,w.__cache={},this}function M(w,Q){let y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=16,y.storage=48):w.isMatrix4?(y.boundary=16,y.storage=64):w.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(y.boundary=16,y.storage=w.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",w),Q===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function f(w){let Q=w.target;Q.removeEventListener("dispose",f),n.deleteBuffer(s[Q.id]),delete s[Q.id],delete r[Q.id]}function d(){for(let w in s)n.deleteBuffer(s[w]);s={},r={}}return{bind:a,update:o,dispose:d}}var gA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function IA(){return fi===null&&(fi=new or(gA,16,16,Vi,ri),fi.name="DFG_LUT",fi.minFilter=It,fi.magFilter=It,fi.wrapS=Pt,fi.wrapT=Pt,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var pa=class{constructor(e={}){let{canvas:t=el(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:c=!1,outputBufferType:E=Ot}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let M=E,f=new Set([Fr,Tr,Jr]),d=new Set([Ot,ni,Tn,nn,kr,br]),w=new Uint32Array(4),Q=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},R=null,x=null,m=[],S=[],G=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let J=this,T=!1,z=null,X=null,k=null,K=null;this._outputColorSpace=Jt;let H=0,Y=0,ne=null,P=-1,_=null,ie=new it,Ie=new it,ke=null,$=new Ne(0),de=0,me=t.width,ye=t.height,fe=1,be=null,rt=null,Re=new it(0,0,me,ye),Pe=new it(0,0,me,ye),qe=!1,De=new Xi,lt=new hr,at=!1,Ct=!1,$e=new ht,Gt=new Z,ct=new it,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vt=!1;function kt(){return ne===null?fe:1}let F=i;function St(I,v){return t.getContext(I,v)}let _e,et,ce,Ke,xe,ve,C,A,b,j,D,ee,te,N,O,se,B,q,W,he,ae,oe,Se;try{let I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xr}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",pe,!1),F===null){let v="webgl2";if(F=St(v,I),F===null)throw St(v)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(I){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Je("WebGLRenderer: "+I.message),I}function Ge(){_e=new kf(F),_e.init(),ae=new dA(F,_e),et=new If(F,_e,e,ae),ce=new cA(F,_e),et.reversedDepthBuffer&&c&&ce.buffers.depth.setReversed(!0),X=F.createFramebuffer(),k=F.createFramebuffer(),K=F.createFramebuffer(),Ke=new Tf(F),xe=new Xp,ve=new uA(F,_e,ce,xe,et,ae,Ke),C=new vf(J),A=new Fc(F),oe=new mf(F,A),b=new bf(F,A,Ke,oe),j=new Uf(F,b,A,oe,Ke),q=new Ff(F,et,ve),O=new Cf(xe),D=new qp(J,C,_e,et,oe,O),ee=new EA(J,xe),te=new _p,N=new sA(_e),B=new Ef(J,C,ce,j,g,h),se=new lA(J,j,et),Se=new mA(F,Ke,et,ce),W=new gf(F,_e,Ke),he=new Jf(F,_e,Ke),Ke.programs=D.programs,J.capabilities=et,J.extensions=_e,J.properties=xe,J.renderLists=te,J.shadowMap=se,J.state=ce,J.info=Ke}M!==Ot&&(G=new Gf(M,t.width,t.height,o,s,r));let re=new Uo(J,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let I=_e.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=_e.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(I){I!==void 0&&(fe=I,this.setSize(me,ye,!1))},this.getSize=function(I){return I.set(me,ye)},this.setSize=function(I,v,V=!0){if(re.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}me=I,ye=v,t.width=Math.floor(I*fe),t.height=Math.floor(v*fe),V===!0&&(t.style.width=I+"px",t.style.height=v+"px"),G!==null&&G.setSize(t.width,t.height),this.setViewport(0,0,I,v)},this.getDrawingBufferSize=function(I){return I.set(me*fe,ye*fe).floor()},this.setDrawingBufferSize=function(I,v,V){me=I,ye=v,fe=V,t.width=Math.floor(I*V),t.height=Math.floor(v*V),this.setViewport(0,0,I,v)},this.setEffects=function(I){if(M===Ot){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let v=0;v<I.length;v++)if(I[v].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(ie)},this.getViewport=function(I){return I.copy(Re)},this.setViewport=function(I,v,V,U){I.isVector4?Re.set(I.x,I.y,I.z,I.w):Re.set(I,v,V,U),ce.viewport(ie.copy(Re).multiplyScalar(kt()).round())},this.getScissor=function(I){return I.copy(Pe)},this.setScissor=function(I,v,V,U){I.isVector4?Pe.set(I.x,I.y,I.z,I.w):Pe.set(I,v,V,U),ce.scissor(Ie.copy(Pe).multiplyScalar(kt()).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(I){ce.setScissorTest(qe=I)},this.setOpaqueSort=function(I){be=I},this.setTransparentSort=function(I){rt=I},this.getClearColor=function(I){return I.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(I=!0,v=!0,V=!0){let U=0;if(I){let L=!1;if(ne!==null){let ue=ne.texture.format;L=f.has(ue)}if(L){let ue=ne.texture.type,ge=d.has(ue),le=B.getClearColor(),Ee=B.getClearAlpha(),we=le.r,Fe=le.g,Ve=le.b;ge?(w[0]=we,w[1]=Fe,w[2]=Ve,w[3]=Ee,F.clearBufferuiv(F.COLOR,0,w)):(Q[0]=we,Q[1]=Fe,Q[2]=Ve,Q[3]=Ee,F.clearBufferiv(F.COLOR,0,Q))}else U|=F.COLOR_BUFFER_BIT}v&&(U|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(U|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&F.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),z=I},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),B.dispose(),te.dispose(),N.dispose(),ve.dispose(),xe.dispose(),C.dispose(),j.dispose(),b.dispose(),oe.dispose(),Se.dispose(),D.dispose(),re.dispose(),re.removeEventListener("sessionstart",Zo),re.removeEventListener("sessionend",Yo),Zi.stop()};function Be(I){I.preventDefault(),Co("WebGLRenderer: Context Lost."),T=!0}function Le(){Co("WebGLRenderer: Context Restored."),T=!1;let I=Ke.autoReset,v=se.enabled,V=se.autoUpdate,U=se.needsUpdate,L=se.type;Ge(),Ke.autoReset=I,se.enabled=v,se.autoUpdate=V,se.needsUpdate=U,se.type=L}function pe(I){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function je(I){let v=I.target;v.removeEventListener("dispose",je),At(v)}function At(I){xi(I),xe.remove(I)}function xi(I){let v=xe.get(I).programs;v!==void 0&&(v.forEach(function(V){D.releaseProgram(V)}),I.isShaderMaterial&&D.releaseShaderCache(I))}this.renderBufferDirect=function(I,v,V,U,L,ue){v===null&&(v=Qt);let ge=L.isMesh&&L.matrixWorld.determinantAffine()<0,le=Hl(I,v,V,U,L);ce.setMaterial(U,ge);let Ee=V.index,we=1;if(U.wireframe===!0){if(Ee=b.getWireframeAttribute(V),Ee===void 0)return;we=2}let Fe=V.drawRange,Ve=V.attributes.position,Ce=Fe.start*we,Ze=(Fe.start+Fe.count)*we;ue!==null&&(Ce=Math.max(Ce,ue.start*we),Ze=Math.min(Ze,(ue.start+ue.count)*we)),Ee!==null?(Ce=Math.max(Ce,0),Ze=Math.min(Ze,Ee.count)):Ve!=null&&(Ce=Math.max(Ce,0),Ze=Math.min(Ze,Ve.count));let ut=Ze-Ce;if(ut<0||ut===1/0)return;oe.setup(L,U,le,V,Ee);let nt,tt=W;if(Ee!==null&&(nt=A.get(Ee),tt=he,tt.setIndex(nt)),L.isMesh)U.wireframe===!0?(ce.setLineWidth(U.wireframeLinewidth*kt()),tt.setMode(F.LINES)):tt.setMode(F.TRIANGLES);else if(L.isLine){let wt=U.linewidth;wt===void 0&&(wt=1),ce.setLineWidth(wt*kt()),L.isLineSegments?tt.setMode(F.LINES):L.isLineLoop?tt.setMode(F.LINE_LOOP):tt.setMode(F.LINE_STRIP)}else L.isPoints?tt.setMode(F.POINTS):L.isSprite&&tt.setMode(F.TRIANGLES);if(L.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))tt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let wt=L._multiDrawStarts,Me=L._multiDrawCounts,bt=L._multiDrawCount,He=Ee?A.get(Ee).bytesPerElement:1,Yi=xe.get(U).currentProgram.getUniforms();for(let yt=0;yt<bt;yt++)Yi.setValue(F,"_gl_DrawID",yt),tt.render(wt[yt]/He,Me[yt])}else if(L.isInstancedMesh)tt.renderInstances(Ce,ut,L.count);else if(V.isInstancedBufferGeometry){let wt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Me=Math.min(V.instanceCount,wt);tt.renderInstances(Ce,ut,Me)}else tt.render(Ce,ut)};function Vo(I,v,V,U){z!==null&&I.isNodeMaterial&&z.setObject(U,I),at===!0&&O.setState(I,V,!1),I.transparent===!0&&I.side===ui&&I.forceSinglePass===!1?(I.side=Ft,I.needsUpdate=!0,Gn(I,v,U),I.side=Di,I.needsUpdate=!0,Gn(I,v,U),I.side=ui):Gn(I,v,U)}this.compile=function(I,v,V=null){V===null&&(V=I),z!==null&&z.renderStart(I,v,V),x=N.get(V),x.init(v),S.push(x),V.traverseVisible(function(L){L.isLight&&L.layers.test(v.layers)&&(x.pushLight(L),L.castShadow&&x.pushShadow(L))}),I!==V&&I.traverseVisible(function(L){L.isLight&&L.layers.test(v.layers)&&(x.pushLight(L),L.castShadow&&x.pushShadow(L))}),x.setupLights(),z!==null&&z.updateLights(x.state.lightsArray),Ct=this.localClippingEnabled,at=O.init(this.clippingPlanes,Ct),at===!0&&O.setGlobalState(this.clippingPlanes,v),z!==null&&se.render(x.state.shadowsArray,V,v);let U=new Set;return I.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let ue=L.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){let le=ue[ge];Vo(le,V,v,L),U.add(le)}else Vo(ue,V,v,L),U.add(ue)}),x=S.pop(),z!==null&&z.renderEnd(),U},this.compileAsync=function(I,v,V=null){let U=this.compile(I,v,V);return new Promise(L=>{function ue(){if(U.forEach(function(ge){let Ee=xe.get(ge).currentProgram;(Ee===void 0||Ee.isReady())&&U.delete(ge)}),U.size===0){L(I);return}setTimeout(ue,10)}_e.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let ma=null;function Pl(I){ma&&ma(I)}function Zo(){Zi.stop()}function Yo(){Zi.start()}let Zi=new kl;Zi.setAnimationLoop(Pl),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(I){ma=I,re.setAnimationLoop(I),I===null?Zi.stop():Zi.start()},re.addEventListener("sessionstart",Zo),re.addEventListener("sessionend",Yo),this.render=function(I,v){if(v!==void 0&&v.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;z!==null&&z.renderStart(I,v);let V=re.enabled===!0&&re.isPresenting===!0,U=G!==null&&(ne===null||V)&&G.begin(J,ne);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(v),v=re.getCamera()),I.isScene===!0&&I.onBeforeRender(J,I,v,ne),x=N.get(I,S.length),x.init(v),x.state.textureUnits=ve.getTextureUnits(),S.push(x),$e.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),v.isArrayCamera?lt.setFromArrayCamera(v):De.setFromProjectionMatrix($e,Kt,v.reversedDepth),Ct=this.localClippingEnabled,at=O.init(this.clippingPlanes,Ct),R=te.get(I,m.length),R.init(),m.push(R),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let ge=J.xr.getDepthSensingMesh();ge!==null&&ga(ge,v,-1/0,J.sortObjects)}ga(I,v,0,J.sortObjects),R.finish(),z!==null&&z.updateLights(x.state.lightsArray),J.sortObjects===!0&&R.sort(be,rt),vt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,vt&&B.addToRenderList(R,I),this.info.autoReset===!0&&this.info.reset(),at===!0&&O.beginShadows();let L=x.state.shadowsArray;if(se.render(L,I,v),at===!0&&O.endShadows(),(U&&G.hasRenderPass())===!1){let ge=R.opaque,le=R.transmissive;if(x.setupLights(),v.isArrayCamera){let Ee=v.cameras;if(le.length>0)for(let we=0,Fe=Ee.length;we<Fe;we++){let Ve=Ee[we];Oo(ge,le,I,Ve)}vt&&B.render(I);for(let we=0,Fe=Ee.length;we<Fe;we++){let Ve=Ee[we];No(R,I,Ve,Ve.viewport)}}else le.length>0&&Oo(ge,le,I,v),vt&&B.render(I),No(R,I,v)}ne!==null&&Y===0&&(ve.updateMultisampleRenderTarget(ne),ve.updateRenderTargetMipmap(ne)),U&&G.end(J),I.isScene===!0&&I.onAfterRender(J,I,v),oe.resetDefaultState(),P=-1,_=null,S.pop(),S.length>0?(x=S[S.length-1],ve.setTextureUnits(x.state.textureUnits),at===!0&&O.setGlobalState(J.clippingPlanes,x.state.camera)):x=null,m.pop(),m.length>0?R=m[m.length-1]:R=null,z!==null&&z.renderEnd()};function ga(I,v,V,U){if(I.visible===!1)return;if(I.layers.test(v.layers)){if(I.isGroup)V=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(v);else if(I.isLight)x.pushLight(I),I.castShadow&&x.pushShadow(I);else if(I.isSprite){let ge=v.isArrayCamera?lt:De;if(!I.frustumCulled||I.intersectsFrustum(ge)){U&&ct.setFromMatrixPosition(I.matrixWorld).applyMatrix4($e);let le=j.update(I),Ee=I.material;Ee.visible&&R.push(I,le,Ee,V,ct.z,null,v)}}else if(I.isMesh||I.isLine||I.isPoints){let ge=v.isArrayCamera?lt:De;if(!I.frustumCulled||I.intersectsFrustum(ge)){let le=j.update(I),Ee=I.material;if(U&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ct.copy(I.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),ct.copy(le.boundingSphere.center)),ct.applyMatrix4(I.matrixWorld).applyMatrix4($e)),Array.isArray(Ee)){let we=le.groups;for(let Fe=0,Ve=we.length;Fe<Ve;Fe++){let Ce=we[Fe],Ze=Ee[Ce.materialIndex];Ze&&Ze.visible&&R.push(I,le,Ze,V,ct.z,Ce,v)}}else Ee.visible&&R.push(I,le,Ee,V,ct.z,null,v)}}}let ue=I.children;for(let ge=0,le=ue.length;ge<le;ge++)ga(ue[ge],v,V,U)}function No(I,v,V,U){let{opaque:L,transmissive:ue,transparent:ge}=I;x.setupLightsView(V),at===!0&&O.setGlobalState(J.clippingPlanes,V),U&&ce.viewport(ie.copy(U)),L.length>0&&Is(L,v,V),ue.length>0&&Is(ue,v,V),ge.length>0&&Is(ge,v,V),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Oo(I,v,V,U){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[U.id]===void 0){let Ce=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");x.state.transmissionRenderTarget[U.id]=new Zt(1,1,{generateMipmaps:!0,type:Ce?ri:Ot,minFilter:ii,samples:Math.max(4,et.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let ue=x.state.transmissionRenderTarget[U.id],ge=U.viewport||ie;ue.setSize(ge.z*J.transmissionResolutionScale,ge.w*J.transmissionResolutionScale);let le=J.getRenderTarget(),Ee=J.getActiveCubeFace(),we=J.getActiveMipmapLevel();J.setRenderTarget(ue),J.getClearColor($),de=J.getClearAlpha(),de<1&&J.setClearColor(16777215,.5),J.clear(),vt&&B.render(V);let Fe=J.toneMapping;J.toneMapping=di;let Ve=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),x.setupLightsView(U),at===!0&&O.setGlobalState(J.clippingPlanes,U),Is(I,V,U),ve.updateMultisampleRenderTarget(ue),ve.updateRenderTargetMipmap(ue),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ze=0,ut=v.length;Ze<ut;Ze++){let nt=v[Ze],{object:tt,geometry:wt,material:Me,group:bt}=nt;if(Me.side===ui&&tt.layers.test(U.layers)){let He=Me.side;Me.side=Ft,Me.needsUpdate=!0,Wo(tt,V,U,wt,Me,bt),Me.side=He,Me.needsUpdate=!0,Ce=!0}}Ce===!0&&(ve.updateMultisampleRenderTarget(ue),ve.updateRenderTargetMipmap(ue))}J.setRenderTarget(le,Ee,we),J.setClearColor($,de),Ve!==void 0&&(U.viewport=Ve),J.toneMapping=Fe}function Is(I,v,V){let U=v.isScene===!0?v.overrideMaterial:null;for(let L=0,ue=I.length;L<ue;L++){let ge=I[L],{object:le,geometry:Ee,group:we}=ge,Fe=ge.material;Fe.allowOverride===!0&&U!==null&&(Fe=U),le.layers.test(V.layers)&&Wo(le,v,V,Ee,Fe,we)}}function Wo(I,v,V,U,L,ue){z!==null&&L.isNodeMaterial&&z.setObject(I,L),I.onBeforeRender(J,v,V,U,L,ue),I.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),L.onBeforeRender(J,v,V,U,I,ue),L.transparent===!0&&L.side===ui&&L.forceSinglePass===!1?(L.side=Ft,L.needsUpdate=!0,J.renderBufferDirect(V,v,U,L,I,ue),L.side=Di,L.needsUpdate=!0,J.renderBufferDirect(V,v,U,L,I,ue),L.side=ui):J.renderBufferDirect(V,v,U,L,I,ue),I.onAfterRender(J,v,V,U,L,ue)}function Po(I){let v=0;for(let V of I)V.texture!==null&&v++;return v}function Gn(I,v,V){v.isScene!==!0&&(v=Qt);let U=xe.get(I),L=x.state.lights,ue=x.state.shadowsArray,ge=L.state.version,le=D.getParameters(I,L.state,ue,v,V,x.state.lightProbeGridArray),Ee=D.getProgramCacheKey(le),we=U.programs;U.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?v.environment:null,U.fog=v.fog;let Fe=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;U.envMap=C.get(I.envMap||U.environment,Fe),U.envMapRotation=U.environment!==null&&I.envMap===null?v.environmentRotation:I.envMapRotation,we===void 0&&(I.addEventListener("dispose",je),we=new Map,U.programs=we,U.programVariants=new Map);let Ve=we.get(Ee);if(Ve!==void 0){if(U.currentProgram===Ve&&U.lightsStateVersion===ge)return Ho(I,le),Ve}else le.uniforms=D.getUniforms(I),z!==null&&I.isNodeMaterial&&z.build(I,V,le),I.onBeforeCompile(le,J),Ve=D.acquireProgram(le,Ee),we.set(Ee,Ve),U.uniforms=le.uniforms;let Ce=U.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ce.clippingPlanes=O.uniform),Ho(I,le),U.needsLights=Xl(I),U.lightsStateVersion=ge,U.needsLights&&(Ce.ambientLightColor.value=L.state.ambient,Ce.lightProbe.value=L.state.probe,Ce.sunLights.value=L.state.sun,Ce.sunLightShadows.value=L.state.sunShadow,Ce.directionalLights.value=L.state.directional,Ce.directionalLightShadows.value=L.state.directionalShadow,Ce.spotLights.value=L.state.spot,Ce.spotLightShadows.value=L.state.spotShadow,Ce.rectAreaLights.value=L.state.rectArea,Ce.ltc_1.value=L.state.rectAreaLTC1,Ce.ltc_2.value=L.state.rectAreaLTC2,Ce.pointLights.value=L.state.point,Ce.pointLightShadows.value=L.state.pointShadow,Ce.hemisphereLights.value=L.state.hemi,Ce.sunShadowMatrix.value=L.state.sunShadowMatrix,Ce.sunShadowCascade.value=L.state.sunShadowCascade,Ce.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Ce.spotLightMatrix.value=L.state.spotLightMatrix,Ce.spotLightMap.value=L.state.spotLightMap,Ce.pointShadowMatrix.value=L.state.pointShadowMatrix),U.numLightProbeGrids=Po(x.state.lightProbeGridArray),U.currentProgram=Ve,U.uniformsList=null,Ve}function Kl(I,v,V,U,L){let ue=xe.get(I),ge=ue.currentProgram.id+","+U+","+L,le=ue.programVariants.get(ge);return le===void 0?(le=Gn(I,v,V),ue.programVariants.set(ge,le)):(ue.currentProgram=le,ue.uniformsList=null,ue.outputColorSpace=U,ue.toneMapping=L),le}function Ko(I){if(I.uniformsList===null){let v=I.currentProgram.getUniforms();I.uniformsList=Fn.seqWithValue(v.seq,I.uniforms)}return I.uniformsList}function Ho(I,v){let V=xe.get(I);V.outputColorSpace=v.outputColorSpace,V.batching=v.batching,V.batchingColor=v.batchingColor,V.instancing=v.instancing,V.instancingColor=v.instancingColor,V.instancingMorph=v.instancingMorph,V.skinning=v.skinning,V.morphTargets=v.morphTargets,V.morphNormals=v.morphNormals,V.morphColors=v.morphColors,V.morphTargetsCount=v.morphTargetsCount,V.numClippingPlanes=v.numClippingPlanes,V.numIntersection=v.numClipIntersection,V.vertexAlphas=v.vertexAlphas,V.vertexTangents=v.vertexTangents,V.toneMapping=v.toneMapping}function Hl(I,v,V,U,L){v.isScene!==!0&&(v=Qt),ve.resetTextureUnits();let ue=v.fog,ge=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?v.environment:null,le=ne===null?J.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ye.workingColorSpace,Ee=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,we=C.get(U.envMap||ge,Ee),Fe=U.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ve=!!V.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ce=!!V.morphAttributes.position,Ze=!!V.morphAttributes.normal,ut=!!V.morphAttributes.color,nt=di;U.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(nt=J.toneMapping);let tt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,wt=tt!==void 0?tt.length:0,Me=xe.get(U),bt=x.state.lights;if(at===!0&&(Ct===!0||I!==_)){let ot=I===_&&U.id===P;O.setState(U,I,ot)}let He=!1,Yi=!1;U.version===Me.__version?Me.needsLights&&Me.lightsStateVersion!==bt.state.version||L.isBatchedMesh&&Me.batching===!1||!L.isBatchedMesh&&Me.batching===!0||L.isBatchedMesh&&Me.batchingColor===!0&&L._colorsTexture===null||L.isBatchedMesh&&Me.batchingColor===!1&&L._colorsTexture!==null||L.isInstancedMesh&&Me.instancing===!1||!L.isInstancedMesh&&Me.instancing===!0||L.isSkinnedMesh&&Me.skinning===!1||!L.isSkinnedMesh&&Me.skinning===!0||L.isInstancedMesh&&Me.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Me.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Me.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Me.instancingMorph===!1&&L.morphTexture!==null||Me.envMap!==we||U.fog===!0&&Me.fog!==ue||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==O.numPlanes||Me.numIntersection!==O.numIntersection)||Me.vertexAlphas!==Fe||Me.vertexTangents!==Ve||Me.morphTargets!==Ce||Me.morphNormals!==Ze||Me.morphColors!==ut||Me.morphTargetsCount!==wt||Me.numLightProbeGrids!==Po(x.state.lightProbeGridArray)?He=!0:(Me.outputColorSpace!==le||Me.toneMapping!==nt)&&(Yi=!0):(He=!0,Me.__version=U.version);let yt=Me.currentProgram;(He===!0||Yi===!0)&&(yt=Yi===!0?Kl(U,v,L,le,nt):Gn(U,v,L),z&&U.isNodeMaterial&&z.onUpdateProgram(U,yt,Me));let Cs=!1,Bi=!1,Ni=!1,We=yt.getUniforms(),Mt=Me.uniforms;if(ce.useProgram(yt.program)&&(Cs=!0,Bi=!0,Ni=!0),U.id!==P&&(P=U.id,Bi=!0),Cs||_!==I){ce.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),We.setValue(F,"projectionMatrix",I.projectionMatrix),We.setValue(F,"viewMatrix",I.matrixWorldInverse);let Et=We.map.cameraPosition;Et!==void 0&&Et.setValue(F,Gt.setFromMatrixPosition(I.matrixWorld)),et.logarithmicDepthBuffer&&We.setValue(F,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&We.setValue(F,"isOrthographic",I.isOrthographicCamera===!0),_!==I&&(_=I,Bi=!0,Ni=!0)}if(Me.needsLights&&(bt.state.sunShadowMap.length>0&&We.setValue(F,"sunShadowMap",bt.state.sunShadowMap,ve),bt.state.directionalShadowMap.length>0&&We.setValue(F,"directionalShadowMap",bt.state.directionalShadowMap,ve),bt.state.spotShadowMap.length>0&&We.setValue(F,"spotShadowMap",bt.state.spotShadowMap,ve),bt.state.pointShadowMap.length>0&&We.setValue(F,"pointShadowMap",bt.state.pointShadowMap,ve)),L.isSkinnedMesh){We.setOptional(F,L,"bindMatrix"),We.setOptional(F,L,"bindMatrixInverse");let ot=L.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),We.setValue(F,"boneTexture",ot.boneTexture,ve))}L.isBatchedMesh&&(We.setOptional(F,L,"batchingTexture"),We.setValue(F,"batchingTexture",L._matricesTexture,ve),We.setOptional(F,L,"batchingIdTexture"),We.setValue(F,"batchingIdTexture",L._indirectTexture,ve),We.setOptional(F,L,"batchingColorTexture"),L._colorsTexture!==null&&We.setValue(F,"batchingColorTexture",L._colorsTexture,ve));let Xt=V.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&q.update(L,V,yt),(Bi||Me.receiveShadow!==L.receiveShadow)&&(Me.receiveShadow=L.receiveShadow,We.setValue(F,"receiveShadow",L.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&v.environment!==null&&(Mt.envMapIntensity.value=v.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=IA()),Bi){if(We.setValue(F,"toneMappingExposure",J.toneMappingExposure),Me.needsLights&&ql(Mt,Ni),ue&&U.fog===!0&&ee.refreshFogUniforms(Mt,ue),ee.refreshMaterialUniforms(Mt,U,fe,ye,x.state.transmissionRenderTarget[I.id]),Me.needsLights&&Me.numLightProbeGrids>0){let ot=y,Et=0;for(let Ai of x.state.lightProbeGridArray)Ai.texture!==null&&(ot.textures[Et]=Ai.texture,ot.min[Et]=Ai.boundingBox.min,ot.max[Et]=Ai.boundingBox.max,ot.resolution[Et]=Ai.resolution,Et++);for(let Ai in ot)ot[Ai].length=Et;Mt.probesSH.value=ot.textures,Mt.probesMin.value=ot.min,Mt.probesMax.value=ot.max,Mt.probesResolution.value=ot.resolution}Fn.upload(F,Ko(Me),Mt,ve)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Fn.upload(F,Ko(Me),Mt,ve),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&We.setValue(F,"center",L.center),We.setValue(F,"modelViewMatrix",L.modelViewMatrix),We.setValue(F,"normalMatrix",L.normalMatrix),We.setValue(F,"modelMatrix",L.matrixWorld),U.uniformsGroups!==void 0){let ot=U.uniformsGroups;for(let Et=0,Ai=ot.length;Et<Ai;Et++){let Xo=ot[Et];Se.update(Xo,yt),Se.bind(Xo,yt)}}return yt}function ql(I,v){I.ambientLightColor.needsUpdate=v,I.lightProbe.needsUpdate=v,I.sunLights.needsUpdate=v,I.sunLightShadows.needsUpdate=v,I.directionalLights.needsUpdate=v,I.directionalLightShadows.needsUpdate=v,I.pointLights.needsUpdate=v,I.pointLightShadows.needsUpdate=v,I.spotLights.needsUpdate=v,I.spotLightShadows.needsUpdate=v,I.rectAreaLights.needsUpdate=v,I.hemisphereLights.needsUpdate=v}function Xl(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(I,v,V){let U=xe.get(I);U.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),xe.get(I.texture).__webglTexture=v,xe.get(I.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:V,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,v){let V=xe.get(I);V.__webglFramebuffer=v,V.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(I,v=0,V=0){ne=I,H=v,Y=V;let U=null,L=!1,ue=!1;if(I){let le=xe.get(I);if(le.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(F.FRAMEBUFFER,le.__webglFramebuffer),ie.copy(I.viewport),Ie.copy(I.scissor),ke=I.scissorTest,ce.viewport(ie),ce.scissor(Ie),ce.setScissorTest(ke),P=-1;return}else if(le.__webglFramebuffer===void 0)ve.setupRenderTarget(I);else if(le.__hasExternalTextures)ve.rebindTextures(I,xe.get(I.texture).__webglTexture,xe.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Fe=I.depthTexture;if(le.__boundDepthTexture!==Fe){if(Fe!==null&&xe.has(Fe)&&(I.width!==Fe.image.width||I.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(I)}}let Ee=I.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ue=!0);let we=xe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(we[v])?U=we[v][V]:U=we[v],L=!0):I.samples>0&&ve.useMultisampledRTT(I)===!1?U=xe.get(I).__webglMultisampledFramebuffer:Array.isArray(we)?U=we[V]:U=we,ie.copy(I.viewport),Ie.copy(I.scissor),ke=I.scissorTest}else ie.copy(Re).multiplyScalar(fe).floor(),Ie.copy(Pe).multiplyScalar(fe).floor(),ke=qe;if(V!==0&&(U=X),ce.bindFramebuffer(F.FRAMEBUFFER,U)&&ce.drawBuffers(I,U),ce.viewport(ie),ce.scissor(Ie),ce.setScissorTest(ke),L){let le=xe.get(I.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+v,le.__webglTexture,V)}else if(ue){let le=v;for(let Ee=0;Ee<I.textures.length;Ee++){let we=xe.get(I.textures[Ee]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ee,we.__webglTexture,V,le)}}else if(I!==null&&V!==0){let le=xe.get(I.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,le.__webglTexture,V)}P=-1};function qo(I){let v=xe.get(I);return(v.__readFormat!==I.format||v.__readType!==I.type)&&(v.__readFormat=I.format,v.__readType=I.type,v.__formatReadable=et.textureFormatReadable(I.format),v.__typeReadable=et.textureTypeReadable(I.type)),v}this.readRenderTargetPixels=function(I,v,V,U,L,ue,ge,le=0){if(!(I&&I.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=xe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){ce.bindFramebuffer(F.FRAMEBUFFER,Ee);try{let we=I.textures[le],Fe=we.format,Ve=we.type;I.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+le);let Ce=qo(we);if(Ce.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}v>=0&&v<=I.width-U&&V>=0&&V<=I.height-L&&F.readPixels(v,V,U,L,ae.convert(Fe),ae.convert(Ve),ue)}finally{let we=ne!==null?xe.get(ne).__webglFramebuffer:null;ce.bindFramebuffer(F.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(I,v,V,U,L,ue,ge,le=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=xe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(v>=0&&v<=I.width-U&&V>=0&&V<=I.height-L){ce.bindFramebuffer(F.FRAMEBUFFER,Ee);let we=I.textures[le],Fe=we.format,Ve=we.type;I.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+le);let Ce=qo(we);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ze),F.bufferData(F.PIXEL_PACK_BUFFER,ue.byteLength,F.STREAM_READ),F.readPixels(v,V,U,L,ae.convert(Fe),ae.convert(Ve),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let ut=ne!==null?xe.get(ne).__webglFramebuffer:null;ce.bindFramebuffer(F.FRAMEBUFFER,ut);let nt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await il(F,nt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ze),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ue),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Ze),F.deleteSync(nt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,v=null,V=0){let U=Math.pow(2,-V),L=Math.floor(I.image.width*U),ue=Math.floor(I.image.height*U),ge=v!==null?v.x:0,le=v!==null?v.y:0;ve.setTexture2D(I,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,ge,le,L,ue),ce.unbindTexture()},this.copyTextureToTexture=function(I,v,V=null,U=null,L=0,ue=0){let ge,le,Ee,we,Fe,Ve,Ce,Ze,ut,nt=I.isCompressedTexture?I.mipmaps[ue]:I.image;if(V!==null)ge=V.max.x-V.min.x,le=V.max.y-V.min.y,Ee=V.isBox3?V.max.z-V.min.z:1,we=V.min.x,Fe=V.min.y,Ve=V.isBox3?V.min.z:0;else{let We=Math.pow(2,-L);ge=Math.floor(nt.width*We),le=Math.floor(nt.height*We),I.isDataArrayTexture?Ee=nt.depth:I.isData3DTexture?Ee=Math.floor(nt.depth*We):Ee=1,we=0,Fe=0,Ve=0}U!==null?(Ce=U.x,Ze=U.y,ut=U.z):(Ce=0,Ze=0,ut=0);let tt=ae.convert(v.format),wt=ae.convert(v.type),Me;v.isData3DTexture?(ve.setTexture3D(v,0),Me=F.TEXTURE_3D):v.isDataArrayTexture||v.isCompressedArrayTexture?(ve.setTexture2DArray(v,0),Me=F.TEXTURE_2D_ARRAY):(ve.setTexture2D(v,0),Me=F.TEXTURE_2D),ce.activeTexture(F.TEXTURE0),ce.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,v.flipY),ce.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),ce.pixelStorei(F.UNPACK_ALIGNMENT,v.unpackAlignment);let bt=ce.getParameter(F.UNPACK_ROW_LENGTH),He=ce.getParameter(F.UNPACK_IMAGE_HEIGHT),Yi=ce.getParameter(F.UNPACK_SKIP_PIXELS),yt=ce.getParameter(F.UNPACK_SKIP_ROWS),Cs=ce.getParameter(F.UNPACK_SKIP_IMAGES);ce.pixelStorei(F.UNPACK_ROW_LENGTH,nt.width),ce.pixelStorei(F.UNPACK_IMAGE_HEIGHT,nt.height),ce.pixelStorei(F.UNPACK_SKIP_PIXELS,we),ce.pixelStorei(F.UNPACK_SKIP_ROWS,Fe),ce.pixelStorei(F.UNPACK_SKIP_IMAGES,Ve);let Bi=I.isDataArrayTexture||I.isData3DTexture,Ni=v.isDataArrayTexture||v.isData3DTexture;if(I.isDepthTexture){let We=xe.get(I),Mt=xe.get(v),Xt=xe.get(We.__renderTarget),ot=xe.get(Mt.__renderTarget);ce.bindFramebuffer(F.READ_FRAMEBUFFER,Xt.__webglFramebuffer),ce.bindFramebuffer(F.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let Et=0;Et<Ee;Et++)Bi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xe.get(I).__webglTexture,L,Ve+Et),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xe.get(v).__webglTexture,ue,ut+Et)),F.blitFramebuffer(we,Fe,we+ge,Fe+le,Ce,Ze,Ce+ge,Ze+le,F.DEPTH_BUFFER_BIT,F.NEAREST);ce.bindFramebuffer(F.READ_FRAMEBUFFER,null),ce.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(L!==0||I.isRenderTargetTexture||xe.has(I)){let We=xe.get(I),Mt=xe.get(v);ce.bindFramebuffer(F.READ_FRAMEBUFFER,k),ce.bindFramebuffer(F.DRAW_FRAMEBUFFER,K);for(let Xt=0;Xt<Ee;Xt++)Bi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,We.__webglTexture,L,Ve+Xt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,We.__webglTexture,L),Ni?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mt.__webglTexture,ue,ut+Xt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mt.__webglTexture,ue),L!==0?F.blitFramebuffer(we,Fe,we+ge,Fe+le,Ce,Ze,Ce+ge,Ze+le,F.COLOR_BUFFER_BIT,F.NEAREST):Ni?F.copyTexSubImage3D(Me,ue,Ce,Ze,ut+Xt,we,Fe,ge,le):F.copyTexSubImage2D(Me,ue,Ce,Ze,we,Fe,ge,le);ce.bindFramebuffer(F.READ_FRAMEBUFFER,null),ce.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ni?I.isDataTexture||I.isData3DTexture?F.texSubImage3D(Me,ue,Ce,Ze,ut,ge,le,Ee,tt,wt,nt.data):v.isCompressedArrayTexture?F.compressedTexSubImage3D(Me,ue,Ce,Ze,ut,ge,le,Ee,tt,nt.data):F.texSubImage3D(Me,ue,Ce,Ze,ut,ge,le,Ee,tt,wt,nt):I.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ue,Ce,Ze,ge,le,tt,wt,nt.data):I.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ue,Ce,Ze,nt.width,nt.height,tt,nt.data):F.texSubImage2D(F.TEXTURE_2D,ue,Ce,Ze,ge,le,tt,wt,nt);ce.pixelStorei(F.UNPACK_ROW_LENGTH,bt),ce.pixelStorei(F.UNPACK_IMAGE_HEIGHT,He),ce.pixelStorei(F.UNPACK_SKIP_PIXELS,Yi),ce.pixelStorei(F.UNPACK_SKIP_ROWS,yt),ce.pixelStorei(F.UNPACK_SKIP_IMAGES,Cs),ue===0&&v.generateMipmaps===!0&&v.mipmapsAutoUpdate===!0&&F.generateMipmap(Me),ce.unbindTexture()},this.initRenderTarget=function(I){xe.get(I).__webglFramebuffer===void 0&&ve.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?ve.setTextureCube(I,0):I.isData3DTexture?ve.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?ve.setTexture2DArray(I,0):ve.setTexture2D(I,0),ce.unbindTexture()},this.resetState=function(){H=0,Y=0,ne=null,ce.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}};var Ln=1672,rn=941,MA=[[690,105,70,.55,0],[268,320,52,.9,1.3],[80,27,38,1.1,2.1],[176,19,26,.8,.4],[262,25,32,1,3],[313,40,24,1.3,4.2],[463,52,38,.7,5.1],[538,138,38,1,2.7],[180,103,32,1.2,.9],[247,198,24,.95,3.8],[98,288,26,1.1,1.7],[34,272,20,1.4,5.8]],SA=[[355,190,150,0],[523,272,80,1.7]],Zl=[380,300],wA=`
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,yA=`
precision highp float;
varying vec2 vUv;

uniform sampler2D uPlate;
uniform sampler2D uDepth;
uniform sampler2D uMask;
uniform vec2  uImg;
uniform vec2  uCover;      // uv scale for cover fit
uniform vec2  uCenter;     // uv centre of the visible crop (in the displayed / mirrored frame)
uniform float uZoom;
uniform float uFlip;       // 1 = mirrored
uniform vec2  uTilt;       // smoothed parallax vector (-1..1), screen space
uniform vec2  uParallax;   // max uv shift
uniform vec2  uMousePx;    // cursor in plate px (y down)
uniform float uMouseOn;
uniform float uTime;
uniform float uIntro;      // 0 -> 1
uniform float uMotion;     // 0..1 (reduced motion)
uniform float uProg;       // scroll progress 0..1
uniform vec2  uDissC;      // dissolve centre, plate px
uniform float uDissR;      // dissolve front radius, plate px
uniform vec3  uBg;         // page background colour
uniform vec4  uStars[12];  // xy px, z radius px, w phase
uniform float uStarSpd[12];
uniform vec4  uSwirls[2];  // xy px, z radius, w phase
uniform vec4  uRipple[4];  // xy px, z start time, w strength

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
}
float fbm(vec2 p){
  float a = 0.5, s = 0.0;
  for(int i = 0; i < 3; i++){ s += a * vnoise(p); p *= 2.03; a *= 0.5; }
  return s / 0.875;
}
vec3 screenBlend(vec3 a, vec3 b){ return 1.0 - (1.0 - a) * (1.0 - b); }
float sq(float x){ return x * x; }

void main(){
  float t = uTime;

  // screen -> displayed frame -> plate (un-mirror)
  vec2 uvp = (vUv - 0.5) * uCover / uZoom + uCenter;
  vec2 uvc = vec2(mix(uvp.x, 1.0 - uvp.x, uFlip), uvp.y);
  float sgn = mix(1.0, -1.0, uFlip);

  // ---------- depth parallax (iterative, handles occlusion edges well) ----------
  vec2 o = uTilt * uParallax * vec2(sgn, 1.0);
  vec2 uv = uvc;
  for(int i = 0; i < 5; i++){
    float d = texture2D(uDepth, uv).r;
    uv = uvc - o * (d - 0.35);
  }
  float depth = texture2D(uDepth, uv).r;
  vec4 mk = texture2D(uMask, uv);
  float ribbon = mk.r;
  float quad = mk.g;
  float gold = mk.b;
  float onPaint = quad * (1.0 - ribbon);

  vec2 p = uv * uImg; p.y = uImg.y - p.y;   // px, y down (plate space)
  vec2 disp = vec2(0.0);                    // displacement in px (y down)

  // ---------- intro: paint "settles" ----------
  float introAmp = (1.0 - uIntro) * (1.0 - uIntro);

  // ---------- flowing paint ----------
  vec2 fp = p * 0.0105;
  float a1 = vnoise(fp + vec2(t * 0.35 + uProg * 3.0, -t * 0.21)) * 6.2831;
  float a2 = vnoise(fp * 1.9 + vec2(-t * 0.27, t * 0.33 + uProg * 2.0) + 7.0) * 6.2831;
  vec2 flow = vec2(cos(a1), sin(a1)) * 0.65 + vec2(cos(a2), sin(a2)) * 0.35;
  float flowAmp = (2.4 + 2.2 * smoothstep(0.55, 1.0, depth)) * uMotion * (1.0 + 2.2 * uProg);
  disp += flow * flowAmp * ribbon;
  disp += flow * 26.0 * introAmp * (ribbon + 0.25);

  // gentle levitation of everything near the camera
  disp.y += sin(t * 0.8 + p.x * 0.006) * 1.6 * smoothstep(0.5, 0.95, depth) * uMotion;

  // ---------- swirling night sky inside the painting ----------
  for(int i = 0; i < 2; i++){
    vec2 c = uSwirls[i].xy;
    float R = uSwirls[i].z;
    vec2 d = p - c;
    float r = length(d);
    float fall = exp(-sq(r / R) * 1.6);
    float ang = (0.075 * sin(t * 0.55 + uSwirls[i].w) + 0.02 * sin(t * 1.3 + uSwirls[i].w * 2.0)) * fall * uMotion;
    float cs = cos(ang), sn = sin(ang);
    vec2 rd = vec2(cs * d.x - sn * d.y, sn * d.x + cs * d.y);
    disp += (rd - d) * onPaint;
  }
  disp += (vec2(vnoise(p * 0.03 + t * 0.5), vnoise(p * 0.03 - t * 0.45 + 9.0)) - 0.5) * 2.2 * onPaint * uMotion;

  // ---------- paint brush gentle sway (pivot at bristle tip) ----------
  {
    vec2 a = vec2(965.0, -10.0), b = vec2(838.0, 235.0);
    vec2 pa = p - a, ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    float dist = length(pa - ba * h);
    float inBrush = 1.0 - smoothstep(34.0, 46.0, dist);
    vec2 pivot = vec2(812.0, 262.0);
    vec2 rel = p - pivot;
    float L = length(rel);
    float sw = sin(t * 0.7) * 0.012 * uMotion * smoothstep(40.0, 260.0, L);
    float cs = cos(sw), sn = sin(sw);
    vec2 rr2 = vec2(cs * rel.x - sn * rel.y, sn * rel.x + cs * rel.y);
    disp += (rr2 - rel) * inBrush;
  }

  // ---------- scroll finale: vortex twist + ripping paint ring ----------
  float gone = 0.0, edge = 0.0, front = 0.0;
  if(uProg > 0.001){
    vec2 dd = p - uDissC;
    float rr = length(dd) + 1e-3;
    float swell = sin(clamp((uProg - 0.15) / 0.75, 0.0, 1.0) * 3.14159);
    float ang = swell * 0.62 * exp(-sq(rr / 620.0));
    float cs = cos(ang), sn = sin(ang);
    disp += vec2(cs * dd.x - sn * dd.y, sn * dd.x + cs * dd.y) - dd;

    // spiral, brush-stroke shaped front (continuous in angle)
    float phi = atan(dd.y, dd.x) + rr * 0.0045;
    vec2 dom = vec2(cos(phi), sin(phi)) * 1.9 + vec2(rr * 0.0023, t * 0.04);
    float nz = fbm(dom * 1.7);
    float reff = rr + (nz - 0.5) * 600.0;
    float s = uDissR - reff;
    gone = smoothstep(-3.0, 8.0, s);
    edge = exp(-sq((s - 4.0) / 30.0));
    front = exp(-sq((s + 55.0) / 100.0));
    disp += (dd / rr) * front * 22.0;
  }

  // ---------- click ripples ----------
  float shine = 0.0;
  for(int i = 0; i < 4; i++){
    float age = t - uRipple[i].z;
    if(age > 0.0 && age < 3.2){
      vec2 d = p - uRipple[i].xy;
      float r = length(d);
      float fr = age * 520.0;
      float w = exp(-sq((r - fr) / 70.0)) * exp(-age * 1.35) * uRipple[i].w;
      disp += normalize(d + 1e-3) * sin((r - fr) * 0.09) * w * 9.0;
      shine += w * 0.5;
    }
  }

  // apply displacement (px, y down -> uv, y up)
  vec2 duv = vec2(disp.x, -disp.y) / uImg;
  vec2 suv = clamp(uv - duv, vec2(0.001), vec2(0.999));
  vec3 col = texture2D(uPlate, suv).rgb;

  // ---------- twinkling stars (screen blend, exactly where they are painted) ----------
  vec3 glow = vec3(0.0);
  for(int i = 0; i < 12; i++){
    vec2 d = (p - uStars[i].xy);
    float r = length(d) / uStars[i].z;
    float tw = 0.5 + 0.5 * sin(t * uStarSpd[i] * 1.7 + uStars[i].w);
    tw = tw * tw;
    float core = exp(-r * r * 5.0);
    float halo = exp(-r * r * 1.4);
    vec3 warm = mix(vec3(1.0, 0.83, 0.38), vec3(1.0, 0.97, 0.86), core);
    glow += warm * (core * (0.20 + 0.34 * tw) + halo * (0.04 + 0.10 * tw));
  }
  float starBoost = 1.0 + 1.1 * smoothstep(0.0, 0.5, uProg) * (1.0 - smoothstep(0.55, 0.8, uProg));
  col = screenBlend(col, glow * onPaint * uMotion * starBoost * smoothstep(0.0, 1.0, uIntro * 1.4 - 0.2));

  // ---------- gold / wet-paint sheen that sweeps across ----------
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  float spec = smoothstep(0.58, 0.95, lum);
  float sweepDir = dot(p, normalize(vec2(1.0, -0.55)));
  float phase = mod(t * 95.0, 2900.0) - 500.0;
  float band = exp(-sq((sweepDir - phase) / 120.0));
  float band2 = exp(-sq((sweepDir - (phase - 1450.0)) / 90.0)) * 0.6;
  // only real paint / gold may shine: erode the paint area ~5px so edges never glow
  vec2 e = vec2(5.0, 0.0) / uImg;
  vec3 BGC = vec3(0.972, 0.902, 0.826);
  float nbMin = smoothstep(0.05, 0.13, distance(col, BGC));
  nbMin = min(nbMin, smoothstep(0.05, 0.13, distance(texture2D(uPlate, suv + e.xy).rgb, BGC)));
  nbMin = min(nbMin, smoothstep(0.05, 0.13, distance(texture2D(uPlate, suv - e.xy).rgb, BGC)));
  nbMin = min(nbMin, smoothstep(0.05, 0.13, distance(texture2D(uPlate, suv + e.yx).rgb, BGC)));
  nbMin = min(nbMin, smoothstep(0.05, 0.13, distance(texture2D(uPlate, suv - e.yx).rgb, BGC)));
  float wet = clamp(ribbon * 0.9 + gold * 1.0, 0.0, 1.0) * nbMin;
  vec3 sheen = vec3(1.0, 0.90, 0.66) * (band + band2) * (0.12 + spec * 0.95) * wet;
  col += sheen * 0.42 * uMotion;
  // scroll: the whole scene catches fire with gold light as you get closer
  col += vec3(1.0, 0.86, 0.52) * wet * spec * smoothstep(0.1, 0.5, uProg) * 0.22;

  // ---------- cursor lantern ----------
  if(uMouseOn > 0.001){
    float md = length(p - uMousePx);
    float lantern = exp(-sq(md / 210.0));
    float lantern2 = exp(-sq(md / 70.0));
    vec3 lc = vec3(1.0, 0.88, 0.62);
    col += lc * (lantern * (0.025 + 0.30 * spec * wet) + lantern2 * 0.10 * wet) * uMouseOn;
    col = screenBlend(col, lc * lantern * 0.05 * uMouseOn);
  }

  col += vec3(1.0, 0.93, 0.78) * shine * 0.10 * wet;

  // ---------- soft sun shafts over the empty cream area (very subtle) ----------
  float sx = dot(p, normalize(vec2(0.62, 0.78)));
  float shafts = pow(0.5 + 0.5 * sin(sx * 0.0095 + t * 0.12 + 1.0), 6.0)
               * (0.5 + 0.5 * sin(sx * 0.0023 - t * 0.07));
  float topRight = smoothstep(0.0, 1.0, (p.x / uImg.x) * 0.9 + (1.0 - p.y / uImg.y) * 0.35 - 0.35);
  col = screenBlend(col, vec3(1.0, 0.92, 0.74) * shafts * topRight * 0.055 * (1.0 - smoothstep(0.1, 0.5, depth)) * uMotion);

  // ---------- scroll finale: tunnel vignette, dissolve, golden rim, sparks ----------
  float vig = smoothstep(0.35, 1.05, length((vUv - 0.5) * vec2(1.25, 1.0)) * 1.5);
  col = mix(col, col * vec3(0.80, 0.72, 0.64), vig * uProg * 0.6);
  col += vec3(1.0, 0.9, 0.7) * front * 0.10 * (1.0 - gone);
  col = mix(col, uBg, gone);
  vec3 hot = vec3(1.0, 0.84, 0.46);
  col = mix(col, hot, clamp(edge * 0.80, 0.0, 1.0));
  float sparkle = step(0.9935, hash(floor(p / 5.0) + floor(t * 9.0))) * edge;
  col += vec3(1.0, 0.93, 0.72) * (edge * 0.30 + sparkle * 1.8);

  // ---------- fade in & grain ----------
  col += (hash(vUv * 1400.0 + fract(t)) - 0.5) * 0.012 * (1.0 - gone);
  float fade = smoothstep(0.0, 0.6, uIntro);
  col = mix(uBg, col, fade);
  float alpha = 1.0 - gone * (1.0 - clamp(edge * 0.8, 0.0, 1.0));
  gl_FragColor = vec4(col * alpha, alpha);
}`,Yl=`
attribute vec4 aBase;   // x,y px, depth, size px
attribute vec4 aMotion; // phase, speedX, speedY, type
uniform vec2  uImg;
uniform vec2  uCover;
uniform vec2  uCenter;
uniform float uZoom;
uniform float uFlip;
uniform vec2  uTilt;
uniform vec2  uParallax;
uniform vec2  uMousePx;
uniform float uMouseOn;
uniform float uTime;
uniform float uPx;      // device px per plate px (includes zoom)
uniform float uIntro;
uniform float uMotion;
uniform float uProg;
uniform vec2  uDissC;
uniform float uDissR;
varying float vType;
varying float vPhase;
varying float vAlpha;

void main(){
  float t = uTime;
  vec2 p = aBase.xy;
  float depth = aBase.z;
  float ph = aMotion.x;
  float isDust = step(3.5, aMotion.w);
  float amp = mix(16.0, 34.0, isDust) * uMotion;
  p += vec2(sin(t * aMotion.y + ph) * amp, cos(t * aMotion.z + ph * 1.3) * amp * 0.8);
  p.y -= isDust * mod(t * (4.0 + aMotion.y * 6.0) + ph * 90.0, 420.0) * uMotion;

  // cursor repel
  vec2 d = p - uMousePx;
  float rl = length(d) + 1.0;
  p += (d / rl) * exp(-rl / 130.0) * 70.0 * uMouseOn * (0.4 + depth);

  // scroll: everything bursts outward from the heart of the painting
  vec2 dq = p - uDissC;
  float rq = length(dq) + 1.0;
  float burst = smoothstep(0.18, 1.0, uProg);
  p += (dq / rq) * burst * burst * (650.0 + 900.0 * aMotion.y) * (0.45 + depth);
  p.y -= burst * 220.0 * depth;
  float rNow = length(p - uDissC);

  // plate -> displayed frame (mirror aware), same mapping as the plate
  vec2 uvq = vec2(p.x / uImg.x, 1.0 - p.y / uImg.y);
  float sgn = mix(1.0, -1.0, uFlip);
  vec2 uvs = uvq + uTilt * uParallax * vec2(sgn, 1.0) * (depth - 0.35);
  uvs.x = mix(uvs.x, 1.0 - uvs.x, uFlip);
  vec2 sv = (uvs - uCenter) * uZoom / uCover + 0.5;
  gl_Position = vec4(sv * 2.0 - 1.0, 0.0, 1.0);
  gl_PointSize = aBase.w * uPx * (0.85 + 0.3 * depth) * mix(1.0, 0.55 + 0.45 * sin(t * 1.4 + ph * 3.0), isDust)
               * (1.0 + isDust * burst * 1.2);
  vType = aMotion.w;
  vPhase = ph;
  float tw = mix(1.0, 0.25 + 0.75 * (0.5 + 0.5 * sin(t * 1.1 + ph * 5.0)), isDust);
  vAlpha = smoothstep(0.35, 1.0, uIntro) * tw
         * (1.0 - smoothstep(0.78, 0.94, uProg))
         * smoothstep(uDissR - 40.0, uDissR + 30.0, rNow)
         * (1.0 + isDust * burst);
}`,Nl=`
precision highp float;
uniform float uFlip;
varying float vType;
varying float vPhase;
varying float vAlpha;
void main(){
  vec2 c = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(c, c);
  if(r2 > 1.0) discard;
  if(vType > 3.5){
    float g = exp(-r2 * 4.0);
    gl_FragColor = vec4(vec3(1.0, 0.82, 0.45) * g, g * 0.85 * vAlpha);
    return;
  }
  vec3 n = vec3(c.x, -c.y, sqrt(1.0 - r2));
  vec3 L = normalize(vec3(-0.45 * mix(1.0, -1.0, uFlip), 0.65, 0.62));
  float dif = clamp(dot(n, L), 0.0, 1.0);
  vec3 base;
  if(vType < 0.5) base = vec3(0.10, 0.22, 0.62);
  else if(vType < 1.5) base = vec3(0.90, 0.80, 0.55);
  else if(vType < 2.5) base = vec3(0.96, 0.91, 0.82);
  else base = vec3(0.06, 0.10, 0.30);
  vec3 col = base * (0.28 + 0.85 * dif);
  float env = smoothstep(-0.2, 0.9, n.y);
  col += mix(vec3(0.0), vec3(0.95, 0.78, 0.55), env) * 0.16 * (1.0 - n.z * 0.4);
  vec3 H = normalize(L + vec3(0.0, 0.0, 1.0));
  float sp = pow(clamp(dot(n, H), 0.0, 1.0), vType > 0.5 && vType < 1.5 ? 28.0 : 60.0);
  col += vec3(1.0, 0.96, 0.88) * sp * 1.1;
  float rim = pow(1.0 - n.z, 3.0);
  col += vec3(1.0, 0.8, 0.5) * rim * 0.18;
  float edge = smoothstep(1.0, 0.92, r2);
  gl_FragColor = vec4(col, edge * vAlpha);
}`;function Lo(n,e,t){let i=n[6]*e+n[7]*t+n[8];return[(n[0]*e+n[1]*t+n[2])/i,(n[3]*e+n[4]*t+n[5])/i]}var Do=n=>Math.max(0,Math.min(1,n)),gs=(n,e,t)=>{let i=Do((t-n)/(e-n));return i*i*(3-2*i)},Go=(n,e,t)=>n+(e-n)*t;function xA(n){let e=String(n).replace("#","");e.length===3&&(e=e.split("").map(i=>i+i).join(""));let t=parseInt(e,16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function zo(n,e,{mip:t=!1}={}){return new Promise((i,s)=>{n.load(e,r=>{r.wrapS=r.wrapT=Pt,r.minFilter=t?ii:It,r.magFilter=It,r.generateMipmaps=t,r.colorSpace=oi,r.anisotropy=4,i(r)},void 0,s)})}function BA(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d",{willReadFrequently:!0});return t.drawImage(n,0,0),{data:t.getImageData(0,0,e.width,e.height).data,w:e.width,h:e.height}}async function Ol(n,e={}){let t=Object.assign({assets:"./assets/",parallax:1,beads:26,dust:90,pixelRatioCap:2,mirror:!0,focus:[.4,.5],background:"#f7e6d2",scroll:!0,scrollLength:"500vh",progress:0,onProgress:null,onReady:null},e),i=typeof t.assets=="string"?t.assets.endsWith("/")?t.assets:t.assets+"/":"",r=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?.25:1,a=t.mirror?1:0,o=xA(t.background);getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.style.background=t.background;let h=n;t.scroll?(n.style.overflow="clip",n.style.minHeight=t.scrollLength,h=document.createElement("div"),h.style.cssText="position:sticky;top:0;left:0;width:100%;height:100vh;height:100dvh;overflow:hidden;",n.appendChild(h)):n.style.overflow="hidden",h.style.touchAction="pan-y";let l=new pa({antialias:!1,alpha:!0,powerPreference:"high-performance"});l.setClearColor(new Ne().setRGB(o[0],o[1],o[2],Jt),0);let u=l.domElement;u.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;",h.appendChild(u);let p=new ns,c=typeof t.assets=="object"&&t.assets?t.assets:{plate:i+"plate.webp",depth:i+"depth.png",mask:i+"mask.png",meta:null},[E,g,M,f]=await Promise.all([zo(p,c.plate,{mip:!0}),zo(p,c.depth),zo(p,c.mask),c.meta?Promise.resolve(c.meta):fetch(i+"meta.json").then(A=>A.json())]),d=f.homography_flat_to_plate,w=[],Q=[];for(let[A,b,j,D,ee]of MA){let[te,N]=Lo(d,A,b);w.push(new it(te,N,j*.8,ee)),Q.push(D)}let y=SA.map(([A,b,j,D])=>{let[ee,te]=Lo(d,A,b);return new it(ee,te,j*.8,D)}),R=Lo(d,Zl[0],Zl[1]),x=[R[0]/Ln,1-R[1]/rn],m=[a?1-x[0]:x[0],x[1]],S=[a?1-t.focus[0]:t.focus[0],t.focus[1]],G=[0,1,2,3].map(()=>new it(0,0,-100,0)),J=1.035,T={uImg:{value:new Ue(Ln,rn)},uCover:{value:new Ue(1,1)},uCenter:{value:new Ue(.5,.5)},uZoom:{value:J},uFlip:{value:a},uTilt:{value:new Ue(0,0)},uParallax:{value:new Ue(.0165*t.parallax,.0115*t.parallax)},uMousePx:{value:new Ue(-9999,-9999)},uMouseOn:{value:0},uTime:{value:0},uIntro:{value:0},uMotion:{value:r},uProg:{value:0},uDissC:{value:new Ue(R[0],R[1])},uDissR:{value:-900},uBg:{value:new Z(o[0],o[1],o[2])}},z=new qn,X=new _i,k=new Lt({vertexShader:wA,fragmentShader:yA,uniforms:Object.assign({uPlate:{value:E},uDepth:{value:g},uMask:{value:M},uStars:{value:w},uStarSpd:{value:Q},uSwirls:{value:y},uRipple:{value:G}},T),depthTest:!1,depthWrite:!1}),K=new qt(new ji(2,2),k);K.frustumCulled=!1,z.add(K);let H=BA(M.image),Y=(A,b,j)=>{let D=Math.max(0,Math.min(H.w-1,Math.round(A/Ln*(H.w-1)))),ee=Math.max(0,Math.min(H.h-1,Math.round(b/rn*(H.h-1))));return H.data[(ee*H.w+D)*4+j]/255},ne=(A,b)=>{let j=0;for(let D=0;D<8;D++){let ee=D/8*Math.PI*2;for(let te of[45,90])j=Math.max(j,Y(A+Math.cos(ee)*te,b+Math.sin(ee)*te,0))}return j},P=1337,_=()=>(P=P*16807%2147483647,(P-1)/2147483646);function ie(A,b){let j=new Float32Array(A*4),D=new Float32Array(A*4),ee=new Float32Array(A*3),te=0,N=0;for(;te<A&&N++<2e4;){let se=_()*1250-40,B=_()*rn,q=Y(se,B,0)>.05||Y(se,B,1)>.05;if(b==="bead"){if(q||ne(se,B)<.5||se>1180)continue}else if(q&&_()<.7)continue;let W=b==="bead"&&_()<.2?1:0,he=b==="bead"?W?20+_()*16:6+_()*12:5+_()*11,ae=b==="bead"?.62+_()*.38:.25+_()*.7;j.set([se,B,ae,he],te*4);let oe;if(b==="bead"){let Se=_();oe=Se<.55?0:Se<.75?1:Se<.9?2:3}else oe=4;D.set([_()*6.283,.25+_()*.55,.22+_()*.5,oe],te*4),te++}let O=new ti;return O.setAttribute("position",new Ut(ee.subarray(0,te*3),3)),O.setAttribute("aBase",new Ut(j.subarray(0,te*4),4)),O.setAttribute("aMotion",new Ut(D.subarray(0,te*4),4)),O}let Ie={value:1},ke=Object.assign({uPx:Ie},T),$=new Lt({vertexShader:Yl,fragmentShader:Nl,uniforms:ke,transparent:!0,depthTest:!1,depthWrite:!1}),de=new Lt({vertexShader:Yl,fragmentShader:Nl,uniforms:ke,transparent:!0,depthTest:!1,depthWrite:!1,blending:rs}),me=new Bn(ie(t.beads,"bead"),$),ye=new Bn(ie(t.dust,"dust"),de);me.frustumCulled=ye.frustumCulled=!1,z.add(ye),z.add(me);let fe=1,be=1;function rt(){let A=Math.max(1,h.clientWidth),b=Math.max(1,h.clientHeight);be=Math.min(window.devicePixelRatio||1,t.pixelRatioCap),l.setPixelRatio(be),l.setSize(A,b,!1);let j=A/b,D=Ln/rn;j>D?T.uCover.value.set(1,D/j):T.uCover.value.set(j/D,1),fe=j>D?A/Ln:b/rn,Re(0)}function Re(A){let b=gs(0,.86,A),j=J*(1+1.15*b);T.uZoom.value=j;let D=gs(0,.5,A),ee=T.uCover.value.clone().divideScalar(j),te=(N,O)=>Math.max(O,Math.min(1-O,N));T.uCenter.value.set(te(Go(S[0],m[0],D),ee.x/2),te(Go(S[1],m[1],D),ee.y/2)),Ie.value=fe*be*j}rt();let Pe=new ResizeObserver(rt);Pe.observe(h);let qe=new Ue(0,0),De=-10,lt=0,at=0;function Ct(A){let b=h.getBoundingClientRect(),j=(A.clientX-b.left)/b.width,D=1-(A.clientY-b.top)/b.height,ee=T.uCover.value,te=T.uZoom.value,N=T.uCenter.value,O=(j-.5)*ee.x/te+N.x,se=(D-.5)*ee.y/te+N.y;return[(a?1-O:O)*Ln,(1-se)*rn,j,D]}function $e(A){let[b,j,D,ee]=Ct(A);qe.set((D-.5)*2,(ee-.5)*2),T.uMousePx.value.set(b,j),at=1,De=performance.now()/1e3}function Gt(){at=0}let ct=0;function Qt(A){let[b,j]=Ct(A);G[ct%4].set(b,j,T.uTime.value,1),ct++,$e(A)}h.addEventListener("pointermove",$e,{passive:!0}),h.addEventListener("pointerdown",Qt,{passive:!0}),h.addEventListener("pointerleave",Gt,{passive:!0});let vt=t.progress;function kt(){if(!t.scroll)return vt;let A=n.getBoundingClientRect(),b=A.height-window.innerHeight;return b<60&&(b=Math.max(1,A.height*.9)),Do(-A.top/b)}let F=performance.now(),St=new Ue(0,0),_e=0,et=!0,ce=F,Ke=kt(),xe=-1;function ve(A){if(!et)return;_e=requestAnimationFrame(ve);let b=(A-F)/1e3,j=Math.min(.25,(A-ce)/1e3),D=Math.min(.05,j);ce=A;let ee=kt();Ke+=(ee-Ke)*(1-Math.exp(-j*7)),Math.abs(ee-Ke)<4e-4&&(Ke=ee),t.onProgress&&Math.abs(Ke-xe)>.001&&(xe=Ke,t.onProgress(Ke));let te=n.getBoundingClientRect();if(te.bottom<-50||te.top>window.innerHeight+50)return;let N=A/1e3-De>2.5,O=new Ue(Math.sin(b*.23)*.55+Math.sin(b*.61)*.12,Math.cos(b*.31)*.38),se=N?O.multiplyScalar(r):qe,B=1-Math.pow(.0015,D);St.lerp(se,B);let q=gs(0,.6,Ke);T.uTilt.value.set(St.x*(1-.5*q),St.y+q*.55),lt+=(at*(N?0:1)-lt)*(1-Math.pow(.002,D)),T.uMouseOn.value=lt*(1-gs(.4,.8,Ke)),T.uTime.value=b;let W=Math.min(1,b/2.6);T.uIntro.value=1-Math.pow(1-W,3),T.uProg.value=Ke,T.uDissR.value=Go(-420,780,gs(.4,.88,Ke)),Re(Ke),l.render(z,X)}_e=requestAnimationFrame(ve);let C={renderer:l,scene:z,stage:h,setParallax(A){T.uParallax.value.set(.0165*A,.0115*A)},setProgress(A){vt=Do(A)},destroy(){et=!1,cancelAnimationFrame(_e),Pe.disconnect(),h.removeEventListener("pointermove",$e),h.removeEventListener("pointerdown",Qt),h.removeEventListener("pointerleave",Gt),l.dispose(),u.remove(),h!==n&&h.remove()}};return typeof t.onReady=="function"&&t.onReady(C),C}var Wl={plate:"/vendor/starry-plate.webp",depth:"/vendor/img/starry-depth.png",mask:"/vendor/img/starry-mask.png",meta:{size:[1672,941],homography_flat_to_plate:[.9151746844641889,-.02653771004298555,205,.3236890095500572,.6398925361469324,185,.0002683168452589073,-.0002471668620554904,1],flat_size:[760,600]}};window.StarryArchive={mount(n,e={}){return Ol(n,Object.assign({assets:Wl},e))}};})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
/*!
 * Starry Archive — semi-3D "living painting" visualization (v2)
 * Hybrid: the artwork image is the base (front view matches it 1:1),
 * Three.js/GLSL makes it alive: depth parallax, flowing paint, twinkling stars,
 * swirling sky, gold shine, floating paint beads, cursor light, click ripples.
 *
 * v2:  · mirrored (artwork on the right)
 *      · scroll finale: you "walk into" the painting, it twists, a ring of paint
 *        rips outward from its heart, the scene bursts into gold and dissolves
 *        into the page background.
 *
 *   import { mountStarryArchive } from './starry-archive.js';
 *   mountStarryArchive(document.getElementById('stage'), { assets: './assets/' });
 */

