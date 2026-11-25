(()=>{var xr="187";var El=0,Oa=1,Al=2;var is=1,Il=2,kn=3,Gi=0,De=1,ui=2,en=0,Ci=1,ns=2,qa=3,Ka=4,Sl=5;var nn=100,yl=101,xl=102,Cl=103,vl=104,wl=200,bl=201,Tl=202,Rl=203,Ha=204,Xa=205,kl=206,zl=207,Bl=208,Zl=209,Dl=210,Jl=211,Ul=212,Fl=213,Pl=214,Ls=0,Ws=1,Os=2,yn=3,qs=4,Ks=5,Hs=6,Xs=7,ja=0,Nl=1,Gl=2,di=0,_a=1,$a=2,to=3,eo=4,io=5,no=6,so=7;var ro=300,sn=301,zn=302,Cr=303,vr=304,js=1e3,Oe=1001,_s=1002,Ee=1003,Vl=1004;var ss=1005;var Ae=1006,wr=1007;var ii=1008;var Le=1009,ao=1010,oo=1011,Bn=1012,br=1013,ni=1014,si=1015,ri=1016,Tr=1017,Rr=1018,rn=1020,lo=35902,ho=35899,co=1021,uo=1022,ai=1023,yi=1026,vi=1027,fo=1028,kr=1029,Vi=1030,zr=1031;var Br=1033,rs=33776,as=33777,os=33778,ls=33779,Zr=35840,Dr=35841,Jr=35842,Ur=35843,Fr=36196,Pr=37492,Nr=37496,Gr=37488,Vr=37489,hs=37490,Yr=37491,Qr=37808,Lr=37809,Wr=37810,Or=37811,qr=37812,Kr=37813,Hr=37814,Xr=37815,jr=37816,_r=37817,$r=37818,ta=37819,ea=37820,ia=37821,na=36492,sa=36494,ra=36495,aa=36283,oa=36284,cs=36285,la=36286;var Vn=2300,$s=2301,Vs=2302,Na=2303,Ga=2400,Va=2401,Ya=2402;var Yl=3200;var po=0,Ql=1,oi="",Be="srgb",Yn="srgb-linear",Qn="linear",Xt="srgb";var Ys=7680;var Ll=519,Wl=512,Ol=513,ql=514,mo=515,Kl=516,Hl=517,go=518,Mo=519,Xl=35044;var Eo="300 es",qe=2e3,Ln=2001;function Wh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Oh(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function xn(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jl(){let n=xn("canvas");return n.style.display="block",n}var Ko={},Cn=null;function Ao(...n){let t="THREE."+n.shift();Cn?Cn("log",t,...n):console.log(t,...n)}function _l(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function kt(...n){n=_l(n);let t="THREE."+n.shift();if(Cn)Cn("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Zt(...n){n=_l(n);let t="THREE."+n.shift();if(Cn)Cn("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Gn(...n){let t=n.join(" ");t in Ko||(Ko[t]=!0,kt(...n))}function $l(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var th={[Ls]:Ls,[Os]:Hs,[qs]:qs,[yn]:Ks,[Ws]:Ws,[Hs]:Os,[Xs]:Xs,[Ks]:yn},hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ea=Math.PI/180,tr=180/Math.PI;function us(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]).toLowerCase()}function Lt(n,t,e){return Math.max(t,Math.min(e,n))}function qh(n,t){return(n%t+t)%t}function Aa(n,t,e){return(1-e)*n+e*t}function eh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Io(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Kh(n,t){if(t.constructor===Float32Array)return n;let e=Io(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Hh(n,t){if(t.constructor===Float32Array)return n;let e=Io(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Ft=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Lt(this.x,t.x,e.x),this.y=Lt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Lt(this.x,t,e),this.y=Lt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Lt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Lt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ci=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let h=i[s+0],l=i[s+1],u=i[s+2],f=i[s+3],c=r[a+0],p=r[a+1],E=r[a+2],y=r[a+3];if(f!==y||h!==c||l!==p||u!==E){let m=h*c+l*p+u*E+f*y;m<0&&(c=-c,p=-p,E=-E,y=-y,m=-m);let d=1-o;if(m<.9995){let I=Math.acos(m),b=Math.sin(I);d=Math.sin(d*I)/b,o=Math.sin(o*I)/b,h=h*d+c*o,l=l*d+p*o,u=u*d+E*o,f=f*d+y*o}else{h=h*d+c*o,l=l*d+p*o,u=u*d+E*o,f=f*d+y*o;let I=1/Math.sqrt(h*h+l*l+u*u+f*f);h*=I,l*=I,u*=I,f*=I}}t[e]=h,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],h=i[s+1],l=i[s+2],u=i[s+3],f=r[a],c=r[a+1],p=r[a+2],E=r[a+3];return t[e]=o*E+u*f+h*p-l*c,t[e+1]=h*E+u*c+l*f-o*p,t[e+2]=l*E+u*p+o*c-h*f,t[e+3]=u*E-o*f-h*c-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,h=Math.sin,l=o(i/2),u=o(s/2),f=o(r/2),c=h(i/2),p=h(s/2),E=h(r/2);switch(a){case"XYZ":this._x=c*u*f+l*p*E,this._y=l*p*f-c*u*E,this._z=l*u*E+c*p*f,this._w=l*u*f-c*p*E;break;case"YXZ":this._x=c*u*f+l*p*E,this._y=l*p*f-c*u*E,this._z=l*u*E-c*p*f,this._w=l*u*f+c*p*E;break;case"ZXY":this._x=c*u*f-l*p*E,this._y=l*p*f+c*u*E,this._z=l*u*E+c*p*f,this._w=l*u*f-c*p*E;break;case"ZYX":this._x=c*u*f-l*p*E,this._y=l*p*f+c*u*E,this._z=l*u*E-c*p*f,this._w=l*u*f+c*p*E;break;case"YZX":this._x=c*u*f+l*p*E,this._y=l*p*f+c*u*E,this._z=l*u*E-c*p*f,this._w=l*u*f-c*p*E;break;case"XZY":this._x=c*u*f-l*p*E,this._y=l*p*f-c*u*E,this._z=l*u*E+c*p*f,this._w=l*u*f+c*p*E;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],h=e[9],l=e[2],u=e[6],f=e[10],c=i+o+f;if(c>0){let p=.5/Math.sqrt(c+1);this._w=.25/p,this._x=(u-h)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(i>o&&i>f){let p=2*Math.sqrt(1+i-o-f);this._w=(u-h)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>f){let p=2*Math.sqrt(1+o-i-f);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(h+u)/p}else{let p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(h+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Lt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,h=e._y,l=e._z,u=e._w;return this._x=i*u+a*o+s*l-r*h,this._y=s*u+a*h+r*o-i*l,this._z=r*u+a*l+i*h-s*o,this._w=a*u-i*o-s*h-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let h=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);h=Math.sin(h*l)/u,e=Math.sin(e*l)/u,this._x=this._x*h+i*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this._onChangeCallback()}else this._x=this._x*h+i*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ho.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ho.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,h=t.w,l=2*(a*s-o*i),u=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+h*l+a*f-o*u,this.y=i+h*u+o*l-r*f,this.z=s+h*f+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Lt(this.x,t.x,e.x),this.y=Lt(this.y,t.y,e.y),this.z=Lt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Lt(this.x,t,e),this.y=Lt(this.y,t,e),this.z=Lt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Lt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,h=e.z;return this.x=s*h-r*o,this.y=r*a-i*h,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ia.copy(this).projectOnVector(t),this.sub(Ia)}reflect(t){return this.sub(Ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Lt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ia=new V,Ho=new ci,Dt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,h,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,h,l)}set(t,e,i,s,r,a,o,h,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=h,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],h=i[6],l=i[1],u=i[4],f=i[7],c=i[2],p=i[5],E=i[8],y=s[0],m=s[3],d=s[6],I=s[1],b=s[4],v=s[7],T=s[2],w=s[5],g=s[8];return r[0]=a*y+o*I+h*T,r[3]=a*m+o*b+h*w,r[6]=a*d+o*v+h*g,r[1]=l*y+u*I+f*T,r[4]=l*m+u*b+f*w,r[7]=l*d+u*v+f*g,r[2]=c*y+p*I+E*T,r[5]=c*m+p*b+E*w,r[8]=c*d+p*v+E*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-i*r*u+i*o*h+s*r*l-s*a*h}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],u=t[8],f=u*a-o*l,c=o*h-u*r,p=l*r-a*h,E=e*f+i*c+s*p;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/E;return t[0]=f*y,t[1]=(s*l-u*i)*y,t[2]=(o*i-s*a)*y,t[3]=c*y,t[4]=(u*e-s*h)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(i*h-l*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let h=Math.cos(r),l=Math.sin(r);return this.set(i*h,i*l,-i*(h*a+l*o)+a+t,-s*l,s*h,-s*(-l*a+h*o)+o+e,0,0,1),this}scale(t,e){return Gn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sa.makeScale(t,e)),this}rotate(t){return Gn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sa.makeRotation(-t)),this}translate(t,e){return Gn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Sa=new Dt,Xo=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jo=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xh(){let n={enabled:!0,workingColorSpace:Yn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Xt&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Xt&&(s.r=Sn(s.r),s.g=Sn(s.g),s.b=Sn(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?Qn:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Yn]:{primaries:t,whitePoint:i,transfer:Qn,toXYZ:Xo,fromXYZ:jo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:i,transfer:Xt,toXYZ:Xo,fromXYZ:jo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),n}var Yt=Xh();function Si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var on,er=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{on===void 0&&(on=xn("canvas")),on.width=t.width,on.height=t.height;let s=on.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=on}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xn("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Si(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Si(e[i]/255)*255):e[i]=Si(e[i]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jh=0,vn=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ya(s[a].image)):r.push(ya(s[a]))}else r=ya(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ya(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?er.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var _h=0,xa=new V,Ze=class n extends hi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Oe,s=Oe,r=Ae,a=ii,o=ai,h=Le,l=n.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=us(),this.name="",this.source=new vn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xa).x}get height(){return this.source.getSize(xa).y}get depth(){return this.source.getSize(xa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ro)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case js:t.x=t.x-Math.floor(t.x);break;case Oe:t.x=t.x<0?0:1;break;case _s:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case js:t.y=t.y-Math.floor(t.y);break;case Oe:t.y=t.y<0?0:1;break;case _s:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=ro;Ze.DEFAULT_ANISOTROPY=1;var jt=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,h=t.elements,l=h[0],u=h[4],f=h[8],c=h[1],p=h[5],E=h[9],y=h[2],m=h[6],d=h[10];if(Math.abs(u-c)<.01&&Math.abs(f-y)<.01&&Math.abs(E-m)<.01){if(Math.abs(u+c)<.1&&Math.abs(f+y)<.1&&Math.abs(E+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,v=(p+1)/2,T=(d+1)/2,w=(u+c)/4,g=(f+y)/4,x=(E+m)/4;return b>v&&b>T?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=w/i,r=g/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=x/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=g/r,s=x/r),this.set(i,s,r,e),this}let I=Math.sqrt((m-E)*(m-E)+(f-y)*(f-y)+(c-u)*(c-u));return Math.abs(I)<.001&&(I=1),this.x=(m-E)/I,this.y=(f-y)/I,this.z=(c-u)/I,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Lt(this.x,t.x,e.x),this.y=Lt(this.y,t.y,e.y),this.z=Lt(this.z,t.z,e.z),this.w=Lt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Lt(this.x,t,e),this.y=Lt(this.y,t,e),this.z=Lt(this.z,t,e),this.w=Lt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Lt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ir=class extends hi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Ze({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ae,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new vn(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ge=class extends ir{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Wn=class extends Ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Oe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var nr=class extends Ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Oe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ae=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,h,l,u,f,c,p,E,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,h,l,u,f,c,p,E,y,m)}set(t,e,i,s,r,a,o,h,l,u,f,c,p,E,y,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=h,d[2]=l,d[6]=u,d[10]=f,d[14]=c,d[3]=p,d[7]=E,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ln.setFromMatrixColumn(t,0).length(),r=1/ln.setFromMatrixColumn(t,1).length(),a=1/ln.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),h=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let c=a*u,p=a*f,E=o*u,y=o*f;e[0]=h*u,e[4]=-h*f,e[8]=l,e[1]=p+E*l,e[5]=c-y*l,e[9]=-o*h,e[2]=y-c*l,e[6]=E+p*l,e[10]=a*h}else if(t.order==="YXZ"){let c=h*u,p=h*f,E=l*u,y=l*f;e[0]=c+y*o,e[4]=E*o-p,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-E,e[6]=y+c*o,e[10]=a*h}else if(t.order==="ZXY"){let c=h*u,p=h*f,E=l*u,y=l*f;e[0]=c-y*o,e[4]=-a*f,e[8]=E+p*o,e[1]=p+E*o,e[5]=a*u,e[9]=y-c*o,e[2]=-a*l,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){let c=a*u,p=a*f,E=o*u,y=o*f;e[0]=h*u,e[4]=E*l-p,e[8]=c*l+y,e[1]=h*f,e[5]=y*l+c,e[9]=p*l-E,e[2]=-l,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){let c=a*h,p=a*l,E=o*h,y=o*l;e[0]=h*u,e[4]=y-c*f,e[8]=E*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*f+E,e[10]=c-y*f}else if(t.order==="XZY"){let c=a*h,p=a*l,E=o*h,y=o*l;e[0]=h*u,e[4]=-f,e[8]=l*u,e[1]=c*f+y,e[5]=a*u,e[9]=p*f-E,e[2]=E*f-p,e[6]=o*u,e[10]=y*f+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($h,t,tc)}lookAt(t,e,i){let s=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Ti.crossVectors(i,Fe),Ti.lengthSq()===0&&(Math.abs(i.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Ti.crossVectors(i,Fe)),Ti.normalize(),As.crossVectors(Fe,Ti),s[0]=Ti.x,s[4]=As.x,s[8]=Fe.x,s[1]=Ti.y,s[5]=As.y,s[9]=Fe.y,s[2]=Ti.z,s[6]=As.z,s[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],h=i[8],l=i[12],u=i[1],f=i[5],c=i[9],p=i[13],E=i[2],y=i[6],m=i[10],d=i[14],I=i[3],b=i[7],v=i[11],T=i[15],w=s[0],g=s[4],x=s[8],P=s[12],z=s[1],Z=s[5],Y=s[9],H=s[13],k=s[2],G=s[6],j=s[10],L=s[14],at=s[3],q=s[7],$=s[11],it=s[15];return r[0]=a*w+o*z+h*k+l*at,r[4]=a*g+o*Z+h*G+l*q,r[8]=a*x+o*Y+h*j+l*$,r[12]=a*P+o*H+h*L+l*it,r[1]=u*w+f*z+c*k+p*at,r[5]=u*g+f*Z+c*G+p*q,r[9]=u*x+f*Y+c*j+p*$,r[13]=u*P+f*H+c*L+p*it,r[2]=E*w+y*z+m*k+d*at,r[6]=E*g+y*Z+m*G+d*q,r[10]=E*x+y*Y+m*j+d*$,r[14]=E*P+y*H+m*L+d*it,r[3]=I*w+b*z+v*k+T*at,r[7]=I*g+b*Z+v*G+T*q,r[11]=I*x+b*Y+v*j+T*$,r[15]=I*P+b*H+v*L+T*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],h=t[9],l=t[13],u=t[2],f=t[6],c=t[10],p=t[14],E=t[3],y=t[7],m=t[11],d=t[15],I=h*p-l*c,b=o*p-l*f,v=o*c-h*f,T=a*p-l*u,w=a*c-h*u,g=a*f-o*u;return e*(y*I-m*b+d*v)-i*(E*I-m*T+d*w)+s*(E*b-y*T+d*g)-r*(E*v-y*w+m*g)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],h=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-i*(r*u-o*h)+s*(r*l-a*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],u=t[8],f=t[9],c=t[10],p=t[11],E=t[12],y=t[13],m=t[14],d=t[15],I=e*o-i*a,b=e*h-s*a,v=e*l-r*a,T=i*h-s*o,w=i*l-r*o,g=s*l-r*h,x=u*y-f*E,P=u*m-c*E,z=u*d-p*E,Z=f*m-c*y,Y=f*d-p*y,H=c*d-p*m,k=I*H-b*Y+v*Z+T*z-w*P+g*x;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/k;return t[0]=(o*H-h*Y+l*Z)*G,t[1]=(s*Y-i*H-r*Z)*G,t[2]=(y*g-m*w+d*T)*G,t[3]=(c*w-f*g-p*T)*G,t[4]=(h*z-a*H-l*P)*G,t[5]=(e*H-s*z+r*P)*G,t[6]=(m*v-E*g-d*b)*G,t[7]=(u*g-c*v+p*b)*G,t[8]=(a*Y-o*z+l*x)*G,t[9]=(i*z-e*Y-r*x)*G,t[10]=(E*w-y*v+d*I)*G,t[11]=(f*v-u*w-p*I)*G,t[12]=(o*P-a*Z-h*x)*G,t[13]=(e*Z-i*P+s*x)*G,t[14]=(y*b-E*T-m*I)*G,t[15]=(u*T-f*b+c*I)*G,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,h=t.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*h,l*h+s*o,0,l*o+s*h,u*o+i,u*h-s*a,0,l*h-s*o,u*h+s*a,r*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,h=e._w,l=r+r,u=a+a,f=o+o,c=r*l,p=r*u,E=r*f,y=a*u,m=a*f,d=o*f,I=h*l,b=h*u,v=h*f,T=i.x,w=i.y,g=i.z;return s[0]=(1-(y+d))*T,s[1]=(p+v)*T,s[2]=(E-b)*T,s[3]=0,s[4]=(p-v)*w,s[5]=(1-(c+d))*w,s[6]=(m+I)*w,s[7]=0,s[8]=(E+b)*g,s[9]=(m-I)*g,s[10]=(1-(c+y))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=ln.set(s[0],s[1],s[2]).length(),o=ln.set(s[4],s[5],s[6]).length(),h=ln.set(s[8],s[9],s[10]).length();r<0&&(a=-a),je.copy(this);let l=1/a,u=1/o,f=1/h;return je.elements[0]*=l,je.elements[1]*=l,je.elements[2]*=l,je.elements[4]*=u,je.elements[5]*=u,je.elements[6]*=u,je.elements[8]*=f,je.elements[9]*=f,je.elements[10]*=f,e.setFromRotationMatrix(je),i.x=a,i.y=o,i.z=h,this}makePerspective(t,e,i,s,r,a,o=qe,h=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(i-s),c=(e+t)/(e-t),p=(i+s)/(i-s),E,y;if(h)E=r/(a-r),y=a*r/(a-r);else if(o===qe)E=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ln)E=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=E,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=qe,h=!1){let l=this.elements,u=2/(e-t),f=2/(i-s),c=-(e+t)/(e-t),p=-(i+s)/(i-s),E,y;if(h)E=1/(a-r),y=a/(a-r);else if(o===qe)E=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ln)E=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=c,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=E,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ln=new V,je=new ae,$h=new V(0,0,0),tc=new V(1,1,1),Ti=new V,As=new V,Fe=new V,_o=new ae,$o=new ci,Di=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],h=s[1],l=s[5],u=s[9],f=s[2],c=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return _o.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_o,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $o.setFromEuler(this),this.setFromQuaternion($o,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Di.DEFAULT_ORDER="XYZ";var On=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ec=0,tl=new V,hn=new ci,gi=new ae,Is=new V,Un=new V,ic=new V,nc=new ci,el=new V(1,0,0),il=new V(0,1,0),nl=new V(0,0,1),sl={type:"added"},sc={type:"removed"},cn={type:"childadded",child:null},Ca={type:"childremoved",child:null},Ve=class n extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ec++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new V,e=new Di,i=new ci,s=new V(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Dt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new On,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hn.setFromAxisAngle(t,e),this.quaternion.multiply(hn),this}rotateOnWorldAxis(t,e){return hn.setFromAxisAngle(t,e),this.quaternion.premultiply(hn),this}rotateX(t){return this.rotateOnAxis(el,t)}rotateY(t){return this.rotateOnAxis(il,t)}rotateZ(t){return this.rotateOnAxis(nl,t)}translateOnAxis(t,e){return tl.copy(t).applyQuaternion(this.quaternion),this.position.add(tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(el,t)}translateY(t){return this.translateOnAxis(il,t)}translateZ(t){return this.translateOnAxis(nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Is.copy(t):Is.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Un.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Un,Is,this.up):gi.lookAt(Is,Un,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),hn.setFromRotationMatrix(gi),this.quaternion.premultiply(hn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sl),cn.child=t,this.dispatchEvent(cn),cn.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sc),Ca.child=t,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sl),cn.child=t,this.dispatchEvent(cn),cn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Un,t,ic),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Un,nc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let l=0,u=h.length;l<u;l++){let f=h[l];r(t.shapes,f)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,l=this.material.length;h<l;h++)o.push(r(t.materials,this.material[h]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];s.animations.push(r(t.animations,h))}}if(e){let o=a(t.geometries),h=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),c=a(t.skeletons),p=a(t.animations),E=a(t.nodes);o.length>0&&(i.geometries=o),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),c.length>0&&(i.skeletons=c),p.length>0&&(i.animations=p),E.length>0&&(i.nodes=E)}return i.object=s,i;function a(o){let h=[];for(let l in o){let u=o[l];delete u.metadata,h.push(u)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ve.DEFAULT_UP=new V(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hi=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},rc={type:"move"},wn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),d=this._getHandJoint(l,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],c=u.position.distanceTo(f.position),p=.02,E=.005;l.inputState.pinching&&c>p+E?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&c<=p-E&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rc)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Hi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function va(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Yt.workingColorSpace){if(t=qh(t,1),e=Lt(e,0,1),i=Lt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=va(a,r,t+1/3),this.g=va(a,r,t),this.b=va(a,r,t-1/3)}return Yt.colorSpaceToWorking(this,s),this}setStyle(t,e=Be){function i(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let i=ih[t.toLowerCase()];return i!==void 0?this.setHex(i,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=Sn(t.r),this.g=Sn(t.g),this.b=Sn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return Yt.workingToColorSpace(we.copy(this),t),Math.round(Lt(we.r*255,0,255))*65536+Math.round(Lt(we.g*255,0,255))*256+Math.round(Lt(we.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(we.copy(this),e);let i=we.r,s=we.g,r=we.b,a=Math.max(i,s,r),o=Math.min(i,s,r),h,l,u=(o+a)/2;if(o===a)h=0,l=0;else{let f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:h=(s-r)/f+(s<r?6:0);break;case s:h=(r-i)/f+2;break;case r:h=(i-s)/f+4;break}h/=6}return t.h=h,t.s=l,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Be){Yt.workingToColorSpace(we.copy(this),t);let e=we.r,i=we.g,s=we.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(Ss);let i=Aa(Ri.h,Ss.h,e),s=Aa(Ri.s,Ss.s,e),r=Aa(Ri.l,Ss.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},we=new Qt;Qt.NAMES=ih;var qn=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},_e=new V,Mi=new V,wa=new V,Ei=new V,un=new V,dn=new V,rl=new V,ba=new V,Ta=new V,Ra=new V,ka=new jt,za=new jt,Ba=new jt,Zi=class n{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),_e.subVectors(t,e),s.cross(_e);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){_e.subVectors(s,e),Mi.subVectors(i,e),wa.subVectors(t,e);let a=_e.dot(_e),o=_e.dot(Mi),h=_e.dot(wa),l=Mi.dot(Mi),u=Mi.dot(wa),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let c=1/f,p=(l*h-o*u)*c,E=(a*u-o*h)*c;return r.set(1-p-E,E,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,i,s,r,a,o,h){return this.getBarycoord(t,e,i,s,Ei)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Ei.x),h.addScaledVector(a,Ei.y),h.addScaledVector(o,Ei.z),h)}static getInterpolatedAttribute(t,e,i,s,r,a){return ka.setScalar(0),za.setScalar(0),Ba.setScalar(0),ka.fromBufferAttribute(t,e),za.fromBufferAttribute(t,i),Ba.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ka,r.x),a.addScaledVector(za,r.y),a.addScaledVector(Ba,r.z),a}static isFrontFacing(t,e,i,s){return _e.subVectors(i,e),Mi.subVectors(t,e),_e.cross(Mi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _e.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),_e.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;un.subVectors(s,i),dn.subVectors(r,i),ba.subVectors(t,i);let h=un.dot(ba),l=dn.dot(ba);if(h<=0&&l<=0)return e.copy(i);Ta.subVectors(t,s);let u=un.dot(Ta),f=dn.dot(Ta);if(u>=0&&f<=u)return e.copy(s);let c=h*f-u*l;if(c<=0&&h>=0&&u<=0&&h-u>0)return a=h/(h-u),e.copy(i).addScaledVector(un,a);Ra.subVectors(t,r);let p=un.dot(Ra),E=dn.dot(Ra);if(E>=0&&p<=E)return e.copy(r);let y=p*l-h*E;if(y<=0&&l>=0&&E<=0)return o=l/(l-E),e.copy(i).addScaledVector(dn,o);let m=u*E-p*f;if(m<=0&&f-u>=0&&p-E>=0)return rl.subVectors(r,s),o=(f-u)/(f-u+(p-E)),e.copy(s).addScaledVector(rl,o);let d=1/(m+y+c);return a=y*d,o=c*d,e.copy(i).addScaledVector(un,a).addScaledVector(dn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ji=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,$e):$e.fromBufferAttribute(r,a),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ys.copy(i.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fn),xs.subVectors(this.max,Fn),fn.subVectors(t.a,Fn),pn.subVectors(t.b,Fn),mn.subVectors(t.c,Fn),ki.subVectors(pn,fn),zi.subVectors(mn,pn),Wi.subVectors(fn,mn);let e=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-Wi.z,Wi.y,ki.z,0,-ki.x,zi.z,0,-zi.x,Wi.z,0,-Wi.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-Wi.y,Wi.x,0];return!Za(e,fn,pn,mn,xs)||(e=[1,0,0,0,1,0,0,0,1],!Za(e,fn,pn,mn,xs))?!1:(Cs.crossVectors(ki,zi),e=[Cs.x,Cs.y,Cs.z],Za(e,fn,pn,mn,xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ai=[new V,new V,new V,new V,new V,new V,new V,new V],$e=new V,ys=new Ji,fn=new V,pn=new V,mn=new V,ki=new V,zi=new V,Wi=new V,Fn=new V,xs=new V,Cs=new V,Oi=new V;function Za(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Oi.fromArray(n,r);let o=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),h=t.dot(Oi),l=e.dot(Oi),u=i.dot(Oi);if(Math.max(-Math.max(h,l,u),Math.min(h,l,u))>o)return!1}return!0}var fe=new V,vs=new Ft,ac=0,Ue=class extends hi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ac++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Xl,this.updateRanges=[],this.gpuType=si,this.version=0,this._normalizationScale=t!==void 0?Io(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)vs.fromBufferAttribute(this,e),vs.applyMatrix3(t),this.setXY(e,vs.x,vs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Kh(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Hh(t,this.array)}};var Kn=class extends Ue{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Hn=class extends Ue{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ke=class extends Ue{constructor(t,e,i){super(new Float32Array(t),e,i)}},oc=new Ji,Pn=new V,Da=new V,Xi=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):oc.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pn.subVectors(t,this.center);let e=Pn.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Pn,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pn.copy(t.center).add(Da)),this.expandByPoint(Pn.copy(t.center).sub(Da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},lc=0,We=new ae,Ja=new Ve,gn=new V,Pe=new Ji,Nn=new Ji,Me=new V,ei=class n extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lc++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wh(t)?Hn:Kn)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Dt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,i){return We.makeTranslation(t,e,i),this.applyMatrix4(We),this}scale(t,e,i){return We.makeScale(t,e,i),this.applyMatrix4(We),this}lookAt(t){return Ja.lookAt(t),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gn).negate(),this.translate(gn.x,gn.y,gn.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Pe.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Pe.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Pe.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Pe.min),this.boundingBox.expandByPoint(Pe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if(Pe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Nn.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(Pe.min,Nn.min),Pe.expandByPoint(Me),Me.addVectors(Pe.max,Nn.max),Pe.expandByPoint(Me)):(Pe.expandByPoint(Nn.min),Pe.expandByPoint(Nn.max))}Pe.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],h=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Me.fromBufferAttribute(o,l),h&&(gn.fromBufferAttribute(t,l),Me.add(gn)),s=Math.max(s,i.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ue(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],h=[],l=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new V,h[P]=new V;let u=new V,f=new V,c=new V,p=new Ft,E=new Ft,y=new Ft,m=new V,d=new V;function I(P,z,Z){l[P]=l[z]=l[Z]=1,u.fromBufferAttribute(i,P),f.fromBufferAttribute(i,z),c.fromBufferAttribute(i,Z),p.fromBufferAttribute(r,P),E.fromBufferAttribute(r,z),y.fromBufferAttribute(r,Z),f.sub(u),c.sub(u),E.sub(p),y.sub(p);let Y=1/(E.x*y.y-y.x*E.y);isFinite(Y)&&(m.copy(f).multiplyScalar(y.y).addScaledVector(c,-E.y).multiplyScalar(Y),d.copy(c).multiplyScalar(E.x).addScaledVector(f,-y.x).multiplyScalar(Y),o[P].add(m),o[z].add(m),o[Z].add(m),h[P].add(d),h[z].add(d),h[Z].add(d))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,z=b.length;P<z;++P){let Z=b[P],Y=Z.start,H=Z.count;for(let k=Y,G=Y+H;k<G;k+=3)I(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let v=new V,T=new V,w=new V,g=new V;function x(P){w.fromBufferAttribute(s,P),g.copy(w);let z=o[P];v.copy(z),v.sub(w.multiplyScalar(w.dot(z))).normalize(),T.crossVectors(g,z);let Y=T.dot(h[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,Y)}for(let P=0,z=i.count;P<z;++P)l[P]&&x(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let c=0,p=i.count;c<p;c++)i.setXYZ(c,0,0,0);let s=new V,r=new V,a=new V,o=new V,h=new V,l=new V,u=new V,f=new V;if(t)for(let c=0,p=t.count;c<p;c+=3){let E=t.getX(c+0),y=t.getX(c+1),m=t.getX(c+2);s.fromBufferAttribute(e,E),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,E),h.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),o.add(u),h.add(u),l.add(u),i.setXYZ(E,o.x,o.y,o.z),i.setXYZ(y,h.x,h.y,h.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let c=0,p=e.count;c<p;c+=3)s.fromBufferAttribute(e,c+0),r.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(c+0,u.x,u.y,u.z),i.setXYZ(c+1,u.x,u.y,u.z),i.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,h){let l=o.array,u=o.itemSize,f=o.normalized,c=new l.constructor(h.length*u),p=0,E=0;for(let y=0,m=h.length;y<m;y++){o.isInterleavedBufferAttribute?p=h[y]*o.data.stride+o.offset:p=h[y]*u;for(let d=0;d<u;d++)c[E++]=l[p++]}return new Ue(c,u,f)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let h=s[o],l=t(h,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let h=[],l=r[o];for(let u=0,f=l.length;u<f;u++){let c=l[u],p=t(c,i);h.push(p)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,h=a.length;o<h;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let h in i){let l=i[h];t.data.attributes[h]=l.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let l=this.morphAttributes[h],u=[];for(let f=0,c=l.length;f<c;f++){let p=l[f];u.push(p.toJSON(t.data))}u.length>0&&(s[h]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let c=0,p=f.length;c<p;c++)u.push(f[c].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ua=new V,hc=new V,cc=new Dt,ti=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Ua.subVectors(i,e).cross(hc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Ua),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||cc.getNormalMatrix(t),s=this.coplanarPoint(Ua).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},uc=0,Ui=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Ci,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Xa,this.blendEquation=nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=yn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let h=r[o];delete h.metadata,a.push(h)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ti().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ft().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ii=new V,Fa=new V,ws=new V,bs=new V,Xn=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Fa.copy(t).add(e).multiplyScalar(.5),ws.copy(e).sub(t).normalize(),bs.copy(this.origin).sub(Fa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ws),o=bs.dot(this.direction),h=-bs.dot(ws),l=bs.lengthSq(),u=Math.abs(1-a*a),f,c,p,E;if(u>0)if(f=a*h-o,c=a*o-h,E=r*u,f>=0)if(c>=-E)if(c<=E){let y=1/u;f*=y,c*=y,p=f*(f+a*c+2*o)+c*(a*f+c+2*h)+l}else c=r,f=Math.max(0,-(a*c+o)),p=-f*f+c*(c+2*h)+l;else c=-r,f=Math.max(0,-(a*c+o)),p=-f*f+c*(c+2*h)+l;else c<=-E?(f=Math.max(0,-(-a*r+o)),c=f>0?-r:Math.min(Math.max(-r,-h),r),p=-f*f+c*(c+2*h)+l):c<=E?(f=0,c=Math.min(Math.max(-r,-h),r),p=c*(c+2*h)+l):(f=Math.max(0,-(a*r+o)),c=f>0?r:Math.min(Math.max(-r,-h),r),p=-f*f+c*(c+2*h)+l);else c=a>0?-r:r,f=Math.max(0,-(a*c+o)),p=-f*f+c*(c+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Fa).addScaledVector(ws,c),p}intersectSphere(t,e){if(t.radius<0)return null;Ii.subVectors(t.center,this.origin);let i=Ii.dot(this.direction),s=Ii.dot(Ii)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,h=i+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,h,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,c=this.origin;return l>=0?(i=(t.min.x-c.x)*l,s=(t.max.x-c.x)*l):(i=(t.max.x-c.x)*l,s=(t.min.x-c.x)*l),u>=0?(r=(t.min.y-c.y)*u,a=(t.max.y-c.y)*u):(r=(t.max.y-c.y)*u,a=(t.min.y-c.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-c.z)*f,h=(t.max.z-c.z)*f):(o=(t.max.z-c.z)*f,h=(t.min.z-c.z)*f),i>h||o>s)||((o>i||i!==i)&&(i=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,h=o.x,l=o.y,u=o.z,f=t.x-a.x,c=t.y-a.y,p=t.z-a.z,E=e.x-a.x,y=e.y-a.y,m=e.z-a.z,d=i.x-a.x,I=i.y-a.y,b=i.z-a.z,v=Math.abs(h),T=Math.abs(l),w=Math.abs(u),g,x,P,z,Z,Y,H,k,G,j,L,at;if(v>=T&&v>=w?(P=h,Y=f,G=E,at=d,h>=0?(g=l,x=u,z=c,Z=p,H=y,k=m,j=I,L=b):(g=u,x=l,z=p,Z=c,H=m,k=y,j=b,L=I)):T>=w?(P=l,Y=c,G=y,at=I,l>=0?(g=u,x=h,z=p,Z=f,H=m,k=E,j=b,L=d):(g=h,x=u,z=f,Z=p,H=E,k=m,j=d,L=b)):(P=u,Y=p,G=m,at=b,u>=0?(g=h,x=l,z=f,Z=c,H=E,k=y,j=d,L=I):(g=l,x=h,z=c,Z=f,H=y,k=E,j=I,L=d)),P===0)return null;let q=g/P,$=x/P,it=1/P,yt=z-q*Y,zt=Z-$*Y,O=H-q*G,dt=k-$*G,Et=j-q*at,wt=L-$*at,ft=Et*dt-wt*O,Jt=yt*wt-zt*Et,oe=O*zt-dt*yt;if(s){if(ft<0||Jt<0||oe<0)return null}else if((ft<0||Jt<0||oe<0)&&(ft>0||Jt>0||oe>0))return null;let Tt=ft+Jt+oe;if(Tt===0)return null;let qt=it*(ft*Y+Jt*G+oe*at);return(Tt>0?qt<0:qt>0)?null:this.at(qt/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sr=class extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},al=new ae,qi=new Xn,Ts=new Xi,ol=new V,Rs=new V,ks=new V,zs=new V,Pa=new V,Bs=new V,ll=new V,Zs=new V,He=class extends Ve{constructor(t=new ei,e=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Bs.set(0,0,0);for(let h=0,l=r.length;h<l;h++){let u=o[h],f=r[h];u!==0&&(Pa.fromBufferAttribute(f,t),a?Bs.addScaledVector(Pa,u):Bs.addScaledVector(Pa.sub(e),u))}e.add(Bs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere),Ts.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(Ts.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Ts,ol)===null||qi.origin.distanceToSquared(ol)>(t.far-t.near)**2))&&(al.copy(r).invert(),qi.copy(t.ray).applyMatrix4(al),!(i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,h=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,c=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let E=0,y=c.length;E<y;E++){let m=c[E],d=a[m.materialIndex],I=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=I,T=b;v<T;v+=3){let w=o.getX(v),g=o.getX(v+1),x=o.getX(v+2);s=Ds(this,d,t,i,l,u,f,w,g,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let E=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=E,d=y;m<d;m+=3){let I=o.getX(m),b=o.getX(m+1),v=o.getX(m+2);s=Ds(this,a,t,i,l,u,f,I,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let E=0,y=c.length;E<y;E++){let m=c[E],d=a[m.materialIndex],I=Math.max(m.start,p.start),b=Math.min(h.count,Math.min(m.start+m.count,p.start+p.count));for(let v=I,T=b;v<T;v+=3){let w=v,g=v+1,x=v+2;s=Ds(this,d,t,i,l,u,f,w,g,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let E=Math.max(0,p.start),y=Math.min(h.count,p.start+p.count);for(let m=E,d=y;m<d;m+=3){let I=m,b=m+1,v=m+2;s=Ds(this,a,t,i,l,u,f,I,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function dc(n,t,e,i,s,r,a,o){let h;if(t.side===De?h=i.intersectTriangle(a,r,s,!0,o):h=i.intersectTriangle(s,r,a,t.side===Gi,o),h===null)return null;Zs.copy(o),Zs.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Zs);return l<e.near||l>e.far?null:{distance:l,point:Zs.clone(),object:n}}function Ds(n,t,e,i,s,r,a,o,h,l){n.getVertexPosition(o,Rs),n.getVertexPosition(h,ks),n.getVertexPosition(l,zs);let u=dc(n,t,e,i,Rs,ks,zs,ll);if(u){let f=new V;Zi.getBarycoord(ll,Rs,ks,zs,f),s&&(u.uv=Zi.getInterpolatedAttribute(s,o,h,l,f,new Ft)),r&&(u.uv1=Zi.getInterpolatedAttribute(r,o,h,l,f,new Ft)),a&&(u.normal=Zi.getInterpolatedAttribute(a,o,h,l,f,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let c={a:o,b:h,c:l,normal:new V,materialIndex:0};Zi.getNormal(Rs,ks,zs,c.normal),u.face=c,u.barycoord=f}return u}var rr=class extends Ze{constructor(t=null,e=1,i=1,s,r,a,o,h,l=Ee,u=Ee,f,c){super(null,a,o,h,l,u,s,r,f,c),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ki=new Xi,fc=new Ft(.5,.5),Js=new V,ji=class{constructor(t=new ti,e=new ti,i=new ti,s=new ti,r=new ti,a=new ti){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=qe,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],h=r[2],l=r[3],u=r[4],f=r[5],c=r[6],p=r[7],E=r[8],y=r[9],m=r[10],d=r[11],I=r[12],b=r[13],v=r[14],T=r[15];if(s[0].setComponents(l-a,p-u,d-E,T-I).normalize(),s[1].setComponents(l+a,p+u,d+E,T+I).normalize(),s[2].setComponents(l+o,p+f,d+y,T+b).normalize(),s[3].setComponents(l-o,p-f,d-y,T-b).normalize(),i)s[4].setComponents(h,c,m,v).normalize(),s[5].setComponents(l-h,p-c,d-m,T-v).normalize();else if(s[4].setComponents(l-h,p-c,d-m,T-v).normalize(),e===qe)s[5].setComponents(l+h,p+c,d+m,T+v).normalize();else if(e===Ln)s[5].setComponents(h,c,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){Ki.center.set(0,0,0);let e=fc.distanceTo(t.center);return Ki.radius=.7071067811865476+e,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Js.x=s.normal.x>0?t.max.x:t.min.x,Js.y=s.normal.y>0?t.max.y:t.min.y,Js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},hl=new ae,ar=class n{constructor(){this.coordinateSystem=qe,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];hl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ji),i[s].setFromProjectionMatrix(hl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ji),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var or=class extends Ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},cl=new ae,Qa=new Xn,Us=new Xi,Fs=new V,_i=class extends Ve{constructor(t=new ei,e=new or){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere),Us.applyMatrix4(s),Us.radius+=r,t.ray.intersectsSphere(Us)===!1)return;cl.copy(s).invert(),Qa.copy(t.ray).applyMatrix4(cl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,l=i.index,f=i.attributes.position;if(l!==null){let c=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let E=c,y=p;E<y;E++){let m=l.getX(E);Fs.fromBufferAttribute(f,m),ul(Fs,m,h,s,t,e,this)}}else{let c=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let E=c,y=p;E<y;E++)Fs.fromBufferAttribute(f,E),ul(Fs,E,h,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ul(n,t,e,i,s,r,a){let o=Qa.distanceSqToPoint(n);if(o<e){let h=new V;Qa.closestPointToPoint(n,h),h.applyMatrix4(i);let l=s.ray.origin.distanceTo(h);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var jn=class extends Ze{constructor(t=[],e=sn,i,s,r,a,o,h,l,u){super(t,e,i,s,r,a,o,h,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var xi=class extends Ze{constructor(t,e,i=ni,s,r,a,o=Ee,h=Ee,l,u=yi,f=1){if(u!==yi&&u!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let c={width:t,height:e,depth:f};super(c,s,r,a,o,h,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},_n=class extends xi{constructor(t,e=ni,i=sn,s,r,a=Ee,o=Ee,h,l=yi){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,h,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},$n=class extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},bn=class n extends ei{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let h=[],l=[],u=[],f=[],c=0,p=0;E("z","y","x",-1,-1,i,e,t,a,r,0),E("z","y","x",1,-1,i,e,-t,a,r,1),E("x","z","y",1,1,t,i,e,s,a,2),E("x","z","y",1,-1,t,i,-e,s,a,3),E("x","y","z",1,-1,t,e,i,s,r,4),E("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(h),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(f,2));function E(y,m,d,I,b,v,T,w,g,x,P){let z=v/g,Z=T/x,Y=v/2,H=T/2,k=w/2,G=g+1,j=x+1,L=0,at=0,q=new V;for(let $=0;$<j;$++){let it=$*Z-H;for(let yt=0;yt<G;yt++){let zt=yt*z-Y;q[y]=zt*I,q[m]=it*b,q[d]=k,l.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[d]=w>0?1:-1,u.push(q.x,q.y,q.z),f.push(yt/g),f.push(1-$/x),L+=1}}for(let $=0;$<x;$++)for(let it=0;it<g;it++){let yt=c+it+G*$,zt=c+it+G*($+1),O=c+(it+1)+G*($+1),dt=c+(it+1)+G*$;h.push(yt,zt,dt),h.push(zt,O,dt),at+=6}o.addGroup(p,at,P),p+=at,c+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var $i=class n extends ei{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),h=Math.floor(s),l=o+1,u=h+1,f=t/o,c=e/h,p=[],E=[],y=[],m=[];for(let d=0;d<u;d++){let I=d*c-a;for(let b=0;b<l;b++){let v=b*f-r;E.push(v,-I,0),y.push(0,0,1),m.push(b/o),m.push(1-d/h)}}for(let d=0;d<h;d++)for(let I=0;I<o;I++){let b=I+l*d,v=I+l*(d+1),T=I+1+l*(d+1),w=I+1+l*d;p.push(b,v,w),p.push(v,T,w)}this.setIndex(p),this.setAttribute("position",new Ke(E,3)),this.setAttribute("normal",new Ke(y,3)),this.setAttribute("uv",new Ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function an(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(dl(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(dl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function be(n){let t={};for(let e=0;e<n.length;e++){let i=an(n[e]);for(let s in i)t[s]=i[s]}return t}function dl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function pc(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function So(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var nh={clone:an,merge:be},mc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ye=class extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mc,this.fragmentShader=gc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=an(t.uniforms),this.uniformsGroups=pc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"v3":this.uniforms[i].value=new V().fromArray(s.value);break;case"v4":this.uniforms[i].value=new jt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Dt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ae().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},lr=class extends Ye{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var hr=class extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},cr=class extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Mn(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ps(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Fi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let h=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ur=class extends Fi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ga,endingEnd:Ga}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],h=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Va:r=t,o=2*e-i;break;case Ya:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(h===void 0)switch(this.getSettings_().endingEnd){case Va:a=t,h=2*i-e;break;case Ya:a=1,h=i+s[1]-s[0];break;default:a=t-1,h=e}let l=(i-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(h-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,l=h-o,u=this._offsetPrev,f=this._offsetNext,c=this._weightPrev,p=this._weightNext,E=(i-e)/(s-e),y=E*E,m=y*E,d=-c*m+2*c*y-c*E,I=(1+c)*m+(-1.5-2*c)*y+(-.5+c)*E+1,b=(-1-p)*m+(1.5+p)*y+.5*E,v=p*m-p*y;for(let T=0;T!==o;++T)r[T]=d*a[u+T]+I*a[l+T]+b*a[h+T]+v*a[f+T];return r}},dr=class extends Fi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,l=h-o,u=(i-e)/(s-e),f=1-u;for(let c=0;c!==o;++c)r[c]=a[l+c]*f+a[h+c]*u;return r}},fr=class extends Fi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pr=class extends Fi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,l=h-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let E=(i-e)/(s-e),y=1-E;for(let m=0;m!==o;++m)r[m]=a[l+m]*y+a[h+m]*E;return r}let c=o*2,p=t-1;for(let E=0;E!==o;++E){let y=a[l+E],m=a[h+E],d=p*c+E*2,I=f[d],b=f[d+1],v=t*c+E*2,T=u[v],w=u[v+1],g=Ec(i,e,I,T,s);r[E]=sh(g,y,b,w,m)}return r}};function sh(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Mc(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Ec(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=sh(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let h=Mc(r,t,e,i,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-o/h))}return r}var Qe=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mn(e,this.TimeBufferType),this.values=Mn(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Mn(t.times,Array),values:Mn(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Ps(t.settings)&&(i.settings={inTangents:Mn(t.settings.inTangents,Array),outTangents:Mn(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new fr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ur(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Vn:e=this.InterpolantFactoryMethodDiscrete;break;case $s:e=this.InterpolantFactoryMethodLinear;break;case Vs:e=this.InterpolantFactoryMethodSmooth;break;case Na:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return kt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vn;case this.InterpolantFactoryMethodLinear:return $s;case this.InterpolantFactoryMethodSmooth:return Vs;case this.InterpolantFactoryMethodBezier:return Na}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Ps(this.settings)&&(fl(this.settings.inTangents,t),fl(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Ps(this.settings)&&(pl(this.settings.inTangents,t),pl(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Zt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let h=i[o];if(typeof h=="number"&&isNaN(h)){Zt("KeyframeTrack: Time is not a valid number.",this,o,h),t=!1;break}if(a!==null&&a>h){Zt("KeyframeTrack: Out of order keys.",this,o,h,a),t=!1;break}a=h}if(s!==void 0&&Oh(s))for(let o=0,h=s.length;o!==h;++o){let l=s[o];if(isNaN(l)){Zt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Vs,r=t.length-1,a=1;for(let o=1;o<r;++o){let h=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)h=!0;else{let f=o*i,c=f-i,p=f+i;for(let E=0;E!==i;++E){let y=e[f+E];if(y!==e[c+E]||y!==e[p+E]){h=!0;break}}}if(h){if(o!==a){t[a]=t[o];let f=o*i,c=a*i;for(let p=0;p!==i;++p)e[c+p]=e[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,h=a*i,l=0;l!==i;++l)e[h+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ps(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function fl(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function pl(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Qe.prototype.ValueTypeName="";Qe.prototype.TimeBufferType=Float32Array;Qe.prototype.ValueBufferType=Float32Array;Qe.prototype.DefaultInterpolation=$s;var Pi=class extends Qe{constructor(t,e,i){super(t,e,i)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Vn;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}};mr.prototype.ValueTypeName="color";var gr=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}};gr.prototype.ValueTypeName="number";var Mr=class extends Fi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=(i-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)ci.slerpFlat(r,0,a,l-o,a,l,h);return r}},ts=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Mr(this.times,this.values,this.getValueSize(),t)}};ts.prototype.ValueTypeName="quaternion";ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends Qe{constructor(t,e,i){super(t,e,i)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Vn;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Er=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}};Er.prototype.ValueTypeName="vector";var Qs={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(ml(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!ml(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function ml(n){try{let t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Ar=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,h,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),h?h(u):u},this.setURLModifier=function(u){return h=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,c=l.length;f<c;f+=2){let p=l[f],E=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rh=new Ar,Tn=class{constructor(t){this.manager=t!==void 0?t:rh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Tn.DEFAULT_MATERIAL_NAME="__DEFAULT";var En=new WeakMap,Ir=class extends Tn{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Qs.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=En.get(a);f===void 0&&(f=[],En.set(a,f)),f.push({onLoad:e,onError:s})}return a}let o=xn("img");function h(){u(),e&&e(this);let f=En.get(this)||[];for(let c=0;c<f.length;c++){let p=f[c];p.onLoad&&p.onLoad(this)}En.delete(this),r.manager.itemEnd(t)}function l(f){u(),s&&s(f),Qs.remove(`image:${t}`);let c=En.get(this)||[];for(let p=0;p<c.length;p++){let E=c[p];E.onError&&E.onError(f)}En.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",h,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Qs.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var es=class extends Tn{constructor(t){super(t)}load(t,e,i,s){let r=new Ze,a=new Ir(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}};var Ns=new V,Gs=new ci,li=new V,tn=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=qe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ns,Gs,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ns,Gs,li.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ns,Gs,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ns,Gs,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bi=new V,gl=new Ft,Ml=new Ft,Ne=class extends tn{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,gl,Ml),e.subVectors(Ml,gl)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ea*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*i/l,s*=a.width/h,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Sr=class extends tn{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,h=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var An=-90,In=1,Rn=class extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ne(An,In,t,e);s.layers=this.layers,this.add(s);let r=new Ne(An,In,t,e);r.layers=this.layers,this.add(r);let a=new Ne(An,In,t,e);a.layers=this.layers,this.add(a);let o=new Ne(An,In,t,e);o.layers=this.layers,this.add(o);let h=new Ne(An,In,t,e);h.layers=this.layers,this.add(h);let l=new Ne(An,In,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,h]=e;for(let l of e)this.remove(l);if(t===qe)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Ln)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,h,l,u]=this.children,f=t.getRenderTarget(),c=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,c,p),t.xr.enabled=E,i.texture.needsPMREMUpdate=!0}},yr=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var yo="\\[\\]\\.:\\/",Ac=new RegExp("["+yo+"]","g"),xo="[^"+yo+"]",Ic="[^"+yo.replace("\\.","")+"]",Sc=/((?:WC+[\/:])*)/.source.replace("WC",xo),yc=/(WCOD+)?/.source.replace("WCOD",Ic),xc=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xo),Cc=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xo),vc=new RegExp("^"+Sc+yc+xc+Cc+"$"),wc=["material","materials","bones","map"],La=class{constructor(t,e,i){let s=i||ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ne=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ac,"")}static parseTrackName(t){let e=vc.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);wc.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let h=i(o.children);if(h)return h}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Zt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ne.Composite=La;ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ne.prototype.GetterByBindingType=[ne.prototype._getValue_direct,ne.prototype._getValue_array,ne.prototype._getValue_arrayElement,ne.prototype._getValue_toArray];ne.prototype.SetterByBindingTypeAndVersioning=[[ne.prototype._setValue_direct,ne.prototype._setValue_direct_setNeedsUpdate,ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_array,ne.prototype._setValue_array_setNeedsUpdate,ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_arrayElement,ne.prototype._setValue_arrayElement_setNeedsUpdate,ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_fromArray,ne.prototype._setValue_fromArray_setNeedsUpdate,ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sm=new Float32Array(1);var Wa=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function Co(n,t,e,i){let s=bc(i);switch(e){case co:return n*t;case fo:return n*t/s.components*s.byteLength;case kr:return n*t/s.components*s.byteLength;case Vi:return n*t*2/s.components*s.byteLength;case zr:return n*t*2/s.components*s.byteLength;case uo:return n*t*3/s.components*s.byteLength;case ai:return n*t*4/s.components*s.byteLength;case Br:return n*t*4/s.components*s.byteLength;case rs:case as:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case os:case ls:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dr:case Ur:return Math.max(n,16)*Math.max(t,8)/4;case Zr:case Jr:return Math.max(n,8)*Math.max(t,8)/2;case Fr:case Pr:case Gr:case Vr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Nr:case hs:case Yr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Lr:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Wr:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Or:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case qr:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Kr:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Hr:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case jr:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case _r:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case $r:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ta:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ea:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ia:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case na:case sa:case ra:return Math.ceil(n/4)*Math.ceil(t/4)*16;case aa:case oa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case cs:case la:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bc(n){switch(n){case Le:case ao:return{byteLength:1,components:1};case Bn:case oo:case ri:return{byteLength:2,components:1};case Tr:case Rr:return{byteLength:2,components:4};case ni:case br:case si:return{byteLength:4,components:1};case lo:case ho:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xr}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xr);function bh(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Tc(n){let t=new WeakMap;function e(o,h){let l=o.array,u=o.usage,f=l.byteLength,c=n.createBuffer();n.bindBuffer(h,c),n.bufferData(h,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:c,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,h,l){let u=h.array,f=h.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,u);else{f.sort((p,E)=>p.start-E.start);let c=0;for(let p=1;p<f.length;p++){let E=f[c],y=f[p];y.start<=E.start+E.count+1?E.count=Math.max(E.count,y.start+y.count-E.start):(++c,f[c]=y)}f.length=c+1;for(let p=0,E=f.length;p<E;p++){let y=f[p];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let h=t.get(o);h&&(n.deleteBuffer(h.buffer),t.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,h));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,h),l.version=o.version}}return{get:s,remove:r,update:a}}var Rc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kc=`#ifdef USE_ALPHAHASH
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
#endif`,zc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jc=`#ifdef USE_AOMAP
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
#endif`,Uc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fc=`#ifdef USE_BATCHING
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
#endif`,Pc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yc=`#ifdef USE_IRIDESCENCE
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
#endif`,Qc=`#ifdef USE_BUMPMAP
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
#endif`,Lc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Oc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_c=`#define PI 3.141592653589793
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
} // validated`,$c=`vec3 transformedNormal = objectNormal;
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
#endif`,tu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,su="gl_FragColor = linearToOutputTexel( gl_FragColor );",ru=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,au=`#ifdef USE_ENVMAP
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
#endif`,ou=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,lu=`#ifdef USE_ENVMAP
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
#endif`,hu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cu=`#ifdef USE_ENVMAP
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
#endif`,uu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,du=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mu=`#ifdef USE_GRADIENTMAP
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
}`,gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Au=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Iu=`#ifdef USE_ENVMAP
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
#endif`,Su=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vu=`PhysicalMaterial material;
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
#endif`,wu=`uniform sampler2D dfgLUT;
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
}`,bu=`
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
#endif`,Tu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ru=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ku=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,zu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Du=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ju=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pu=`#if defined( USE_POINTS_UV )
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
#endif`,Nu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yu=`#if defined( USE_MORPHCOLORS )
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
#endif`,Qu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lu=`#ifdef USE_MORPHTARGETS
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
#endif`,Wu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ou=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ku=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ju=`#ifdef USE_NORMALMAP
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
#endif`,_u=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$u=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,td=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,id=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fd=`float getShadowMask() {
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
}`,pd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,md=`#ifdef USE_SKINNING
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
#endif`,gd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Md=`#ifdef USE_SKINNING
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
#endif`,Ed=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Id=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yd=`#ifdef USE_TRANSMISSION
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
#endif`,xd=`#ifdef USE_TRANSMISSION
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
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Td=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rd=`uniform sampler2D t2D;
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
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`uniform float backgroundBlurriness;
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
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dd=`#include <common>
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
}`,Jd=`#if DEPTH_PACKING == 3200
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
}`,Ud=`#define DISTANCE
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
}`,Fd=`#define DISTANCE
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
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`uniform float scale;
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
}`,Vd=`uniform vec3 diffuse;
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
}`,Yd=`#include <common>
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
}`,Qd=`uniform vec3 diffuse;
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
}`,Ld=`#define LAMBERT
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
}`,Wd=`#define LAMBERT
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
}`,Od=`#define MATCAP
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
}`,qd=`#define MATCAP
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
}`,Kd=`#define NORMAL
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
}`,Hd=`#define NORMAL
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
}`,Xd=`#define PHONG
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
}`,jd=`#define PHONG
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
}`,_d=`#define STANDARD
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
}`,$d=`#define STANDARD
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
}`,tf=`#define TOON
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
}`,ef=`#define TOON
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
}`,nf=`uniform float size;
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
}`,sf=`uniform vec3 diffuse;
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
}`,rf=`#include <common>
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
}`,af=`uniform vec3 color;
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
}`,of=`uniform float rotation;
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
}`,lf=`uniform vec3 diffuse;
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
}`,Pt={alphahash_fragment:Rc,alphahash_pars_fragment:kc,alphamap_fragment:zc,alphamap_pars_fragment:Bc,alphatest_fragment:Zc,alphatest_pars_fragment:Dc,aomap_fragment:Jc,aomap_pars_fragment:Uc,batching_pars_vertex:Fc,batching_vertex:Pc,begin_vertex:Nc,beginnormal_vertex:Gc,bsdfs:Vc,iridescence_fragment:Yc,bumpmap_pars_fragment:Qc,clipping_planes_fragment:Lc,clipping_planes_pars_fragment:Wc,clipping_planes_pars_vertex:Oc,clipping_planes_vertex:qc,color_fragment:Kc,color_pars_fragment:Hc,color_pars_vertex:Xc,color_vertex:jc,common:_c,defaultnormal_vertex:$c,displacementmap_pars_vertex:tu,displacementmap_vertex:eu,emissivemap_fragment:iu,emissivemap_pars_fragment:nu,colorspace_fragment:su,colorspace_pars_fragment:ru,envmap_fragment:au,envmap_common_pars_fragment:ou,envmap_pars_fragment:lu,envmap_pars_vertex:hu,envmap_physical_pars_fragment:Iu,envmap_vertex:cu,fog_vertex:uu,fog_pars_vertex:du,fog_fragment:fu,fog_pars_fragment:pu,gradientmap_pars_fragment:mu,lightmap_pars_fragment:gu,lights_lambert_fragment:Mu,lights_lambert_pars_fragment:Eu,lights_pars_begin:Au,lights_toon_fragment:Su,lights_toon_pars_fragment:yu,lights_phong_fragment:xu,lights_phong_pars_fragment:Cu,lights_physical_fragment:vu,lights_physical_pars_fragment:wu,lights_fragment_begin:bu,lights_fragment_maps:Tu,lights_fragment_end:Ru,lightprobes_pars_fragment:ku,logdepthbuf_fragment:zu,logdepthbuf_pars_fragment:Bu,logdepthbuf_pars_vertex:Zu,logdepthbuf_vertex:Du,map_fragment:Ju,map_pars_fragment:Uu,map_particle_fragment:Fu,map_particle_pars_fragment:Pu,metalnessmap_fragment:Nu,metalnessmap_pars_fragment:Gu,morphinstance_vertex:Vu,morphcolor_vertex:Yu,morphnormal_vertex:Qu,morphtarget_pars_vertex:Lu,morphtarget_vertex:Wu,normal_fragment_begin:Ou,normal_fragment_maps:qu,normal_pars_fragment:Ku,normal_pars_vertex:Hu,normal_vertex:Xu,normalmap_pars_fragment:ju,clearcoat_normal_fragment_begin:_u,clearcoat_normal_fragment_maps:$u,clearcoat_pars_fragment:td,iridescence_pars_fragment:ed,opaque_fragment:id,packing:nd,premultiplied_alpha_fragment:sd,project_vertex:rd,dithering_fragment:ad,dithering_pars_fragment:od,roughnessmap_fragment:ld,roughnessmap_pars_fragment:hd,shadowmap_pars_fragment:cd,shadowmap_pars_vertex:ud,shadowmap_vertex:dd,shadowmask_pars_fragment:fd,skinbase_vertex:pd,skinning_pars_vertex:md,skinning_vertex:gd,skinnormal_vertex:Md,specularmap_fragment:Ed,specularmap_pars_fragment:Ad,tonemapping_fragment:Id,tonemapping_pars_fragment:Sd,transmission_fragment:yd,transmission_pars_fragment:xd,uv_pars_fragment:Cd,uv_pars_vertex:vd,uv_vertex:wd,worldpos_vertex:bd,background_vert:Td,background_frag:Rd,backgroundCube_vert:kd,backgroundCube_frag:zd,cube_vert:Bd,cube_frag:Zd,depth_vert:Dd,depth_frag:Jd,distance_vert:Ud,distance_frag:Fd,equirect_vert:Pd,equirect_frag:Nd,linedashed_vert:Gd,linedashed_frag:Vd,meshbasic_vert:Yd,meshbasic_frag:Qd,meshlambert_vert:Ld,meshlambert_frag:Wd,meshmatcap_vert:Od,meshmatcap_frag:qd,meshnormal_vert:Kd,meshnormal_frag:Hd,meshphong_vert:Xd,meshphong_frag:jd,meshphysical_vert:_d,meshphysical_frag:$d,meshtoon_vert:tf,meshtoon_frag:ef,points_vert:nf,points_frag:sf,shadow_vert:rf,shadow_frag:af,sprite_vert:of,sprite_frag:lf},mt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},pi={basic:{uniforms:be([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:be([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:be([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:be([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:be([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:be([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:be([mt.points,mt.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:be([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:be([mt.common,mt.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:be([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:be([mt.sprite,mt.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distance:{uniforms:be([mt.common,mt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distance_vert,fragmentShader:Pt.distance_frag},shadow:{uniforms:be([mt.lights,mt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};pi.physical={uniforms:be([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};var ha={r:0,b:0,g:0},hf=new ae,Th=new Dt;Th.set(-1,0,0,0,1,0,0,0,1);function cf(n,t,e,i,s,r){let a=new Qt(0),o=s===!0?0:1,h,l,u=null,f=0,c=null;function p(I){let b=I.isScene===!0?I.background:null;if(b&&b.isTexture){let v=I.backgroundBlurriness>0;b=t.get(b,v)}return b}function E(I){let b=!1,v=p(I);v===null?m(a,o):v&&v.isColor&&(m(v,1),b=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(I,b){let v=p(b);v&&v.isCubeTexture?(l===void 0&&(l=new He(new bn(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:an(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,w,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(hf.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Th),l.material.toneMapped=Yt.getTransfer(v.colorSpace)!==Xt,(u!==v||f!==v.version||c!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,c=n.toneMapping),l.layers.enableAll(),I.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new He(new $i(2,2),new Ye({name:"BackgroundMaterial",uniforms:an(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=Yt.getTransfer(v.colorSpace)!==Xt,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||c!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,c=n.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null))}function m(I,b){I.getRGB(ha,So(n)),e.buffers.color.setClear(ha.r,ha.g,ha.b,b,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(I,b=1){a.set(I),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(I){o=I,m(a,o)},render:E,addToRenderList:y,dispose:d}}function uf(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=c(null),r=s,a=!1;function o(Z,Y,H,k,G){let j=!1,L=f(Z,k,H,Y);r!==L&&(r=L,l(r.object)),j=p(Z,k,H,G),j&&E(Z,k,H,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,v(Z,Y,H,k),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function h(){return n.createVertexArray()}function l(Z){return n.bindVertexArray(Z)}function u(Z){return n.deleteVertexArray(Z)}function f(Z,Y,H,k){let G=k.wireframe===!0,j=i[Y.id];j===void 0&&(j={},i[Y.id]=j);let L=Z.isInstancedMesh===!0?Z.id:0,at=j[L];at===void 0&&(at={},j[L]=at);let q=at[H.id];q===void 0&&(q={},at[H.id]=q);let $=q[G];return $===void 0&&($=c(h()),q[G]=$),$}function c(Z){let Y=[],H=[],k=[];for(let G=0;G<e;G++)Y[G]=0,H[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:H,attributeDivisors:k,object:Z,attributes:{},index:null}}function p(Z,Y,H,k){let G=r.attributes,j=Y.attributes,L=0,at=H.getAttributes();for(let q in at)if(at[q].location>=0){let it=G[q],yt=j[q];if(yt===void 0&&(q==="instanceMatrix"&&Z.instanceMatrix&&(yt=Z.instanceMatrix),q==="instanceColor"&&Z.instanceColor&&(yt=Z.instanceColor)),it===void 0||it.attribute!==yt||yt&&it.data!==yt.data)return!0;L++}return r.attributesNum!==L||r.index!==k}function E(Z,Y,H,k){let G={},j=Y.attributes,L=0,at=H.getAttributes();for(let q in at)if(at[q].location>=0){let it=j[q];it===void 0&&(q==="instanceMatrix"&&Z.instanceMatrix&&(it=Z.instanceMatrix),q==="instanceColor"&&Z.instanceColor&&(it=Z.instanceColor));let yt={};yt.attribute=it,it&&it.data&&(yt.data=it.data),G[q]=yt,L++}r.attributes=G,r.attributesNum=L,r.index=k}function y(){let Z=r.newAttributes;for(let Y=0,H=Z.length;Y<H;Y++)Z[Y]=0}function m(Z){d(Z,0)}function d(Z,Y){let H=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;H[Z]=1,k[Z]===0&&(n.enableVertexAttribArray(Z),k[Z]=1),G[Z]!==Y&&(n.vertexAttribDivisor(Z,Y),G[Z]=Y)}function I(){let Z=r.newAttributes,Y=r.enabledAttributes;for(let H=0,k=Y.length;H<k;H++)Y[H]!==Z[H]&&(n.disableVertexAttribArray(H),Y[H]=0)}function b(Z,Y,H,k,G,j,L){L===!0?n.vertexAttribIPointer(Z,Y,H,G,j):n.vertexAttribPointer(Z,Y,H,k,G,j)}function v(Z,Y,H,k){y();let G=k.attributes,j=H.getAttributes(),L=Y.defaultAttributeValues;for(let at in j){let q=j[at];if(q.location>=0){let $=G[at];if($===void 0&&(at==="instanceMatrix"&&Z.instanceMatrix&&($=Z.instanceMatrix),at==="instanceColor"&&Z.instanceColor&&($=Z.instanceColor)),$!==void 0){let it=$.normalized,yt=$.itemSize,zt=t.get($);if(zt===void 0)continue;let O=zt.buffer,dt=zt.type,Et=zt.bytesPerElement,wt=dt===n.INT||dt===n.UNSIGNED_INT||$.gpuType===br;if($.isInterleavedBufferAttribute){let ft=$.data,Jt=ft.isInterleavedBuffer===!0?ft.stride:ft.itemSize,oe=$.offset;if(ft.isInstancedInterleavedBuffer||ft.isInstancedBufferAttribute){for(let Tt=0;Tt<q.locationSize;Tt++)d(q.location+Tt,ft.meshPerAttribute);Z.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Tt=0;Tt<q.locationSize;Tt++)m(q.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,O);for(let Tt=0;Tt<q.locationSize;Tt++)b(q.location+Tt,yt/q.locationSize,dt,it,Jt*Et,(oe+yt/q.locationSize*Tt)*Et,wt)}else{if($.isInstancedBufferAttribute){for(let ft=0;ft<q.locationSize;ft++)d(q.location+ft,$.meshPerAttribute);Z.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ft=0;ft<q.locationSize;ft++)m(q.location+ft);n.bindBuffer(n.ARRAY_BUFFER,O);for(let ft=0;ft<q.locationSize;ft++)b(q.location+ft,yt/q.locationSize,dt,it,yt*Et,yt/q.locationSize*ft*Et,wt)}}else if(L!==void 0){let it=L[at];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(q.location,it);break;case 3:n.vertexAttrib3fv(q.location,it);break;case 4:n.vertexAttrib4fv(q.location,it);break;default:n.vertexAttrib1fv(q.location,it)}}}}I()}function T(){P();for(let Z in i){let Y=i[Z];for(let H in Y){let k=Y[H];for(let G in k){let j=k[G];for(let L in j)u(j[L].object),delete j[L];delete k[G]}}delete i[Z]}}function w(Z){if(i[Z.id]===void 0)return;let Y=i[Z.id];for(let H in Y){let k=Y[H];for(let G in k){let j=k[G];for(let L in j)u(j[L].object),delete j[L];delete k[G]}}delete i[Z.id]}function g(Z){for(let Y in i){let H=i[Y];for(let k in H){let G=H[k];if(G[Z.id]===void 0)continue;let j=G[Z.id];for(let L in j)u(j[L].object),delete j[L];delete G[Z.id]}}}function x(Z){for(let Y in i){let H=i[Y],k=Z.isInstancedMesh===!0?Z.id:0,G=H[k];if(G!==void 0){for(let j in G){let L=G[j];for(let at in L)u(L[at].object),delete L[at];delete G[j]}delete H[k],Object.keys(H).length===0&&delete i[Y]}}}function P(){z(),a=!0,r!==s&&(r=s,l(r.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:g,initAttributes:y,enableAttribute:m,disableUnusedAttributes:I}}function df(n,t,e){let i;function s(h){i=h}function r(h,l){n.drawArrays(i,h,l),e.update(l,i,1)}function a(h,l,u){u!==0&&(n.drawArraysInstanced(i,h,l,u),e.update(l,i,u))}function o(h,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,l,0,u);let c=0;for(let p=0;p<u;p++)c+=l[p];e.update(c,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ff(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==ai&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let x=g===ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Le&&g!==si&&!x&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function h(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=h(l);u!==l&&(kt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),c=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&kt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),I=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:c,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:E,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:I,maxVaryings:b,maxFragmentUniforms:v,maxSamples:T,samples:w}}function pf(n){let t=this,e=null,i=0,s=!1,r=!1,a=new ti,o=new Dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(f,c){let p=f.length!==0||c||i!==0||s;return s=c,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,c){e=u(f,c,0)},this.setState=function(f,c,p){let E=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||E===null||E.length===0||r&&!m)r?u(null):l();else{let I=r?0:i,b=I*4,v=d.clippingState||null;h.value=v,v=u(E,c,b,p);for(let T=0;T!==b;++T)v[T]=e[T];d.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=I}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,c,p,E){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=h.value,E!==!0||m===null){let d=p+y*4,I=c.matrixWorldInverse;o.getNormalMatrix(I),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,v=p;b!==y;++b,v+=4)a.copy(f[b]).applyMatrix4(I,o),a.normal.toArray(m,v),m[v+3]=a.constant}h.value=m,h.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var ps=class extends Ge{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new jn(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bn(5,5,5),r=new Ye({name:"CubemapFromEquirect",uniforms:an(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:De,blending:en});r.uniforms.tEquirect.value=e;let a=new He(s,r),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=Ae),new Rn(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},ah=256,mf=3,gf=20,Rh=256,kh=16,Mf=3,Ef=new V,Af=new Qt,ua=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Rn(1,10,null),this._boxMesh=new He(new bn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Ef}=r,h=this._renderer;this._setSize(a);let l=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let f=h.autoClear,c=h.autoClearColor,p=h.autoClearDepth,E=h.autoClearStencil,y=t.background;h.autoClear=!0,h.autoClearColor=!0,h.autoClearDepth=!0,h.autoClearStencil=!0,y===null&&(t.background=h.getClearColor(Af));let m=new Rn(i,s,u);return m.position.copy(o),m.update(h,t),h.autoClear=f,h.autoClearColor=c,h.autoClearDepth=p,h.autoClearStencil=E,t.background=y,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ah,eh(t))}_fromTexture(t,e){t.mapping===sn||t.mapping===zn?this._setSize(t.image.length===0?ah:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=oh(t,!1,!1),i=Math.log2(t)-mf;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=oh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===sn||t.mapping===zn?(this._cubemapMaterial===null&&(this._cubemapMaterial=hh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=lh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=If(),this._integrationMaterial=Sf());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/kh);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Mf)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let h=o>0?Math.log2(e)+.5*Math.log2(6/(Rh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=h,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=yf());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function oh(n,t,e){return new ps(n,{minFilter:ii,generateMipmaps:t,type:ri,colorSpace:Yn,depthBuffer:e})}function ms(n,t,e){return new Ye({name:n,uniforms:t,vertexShader:Pt.cube_vert,fragmentShader:e,side:De,blending:en,depthTest:!1,depthWrite:!1})}function If(){return ms("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Rh}u

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
	`)}function Sf(){return ms("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:kh}},`

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
	`)}function yf(){return ms("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gf}
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
	`)}function lh(){return ms("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function hh(){return ms("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function xf(n){let t=new WeakMap,e=new WeakMap,i=null;function s(c,p=!1){return c==null?null:p?a(c):r(c)}function r(c){if(c&&c.isTexture){let p=c.mapping;if(p===Cr||p===vr)if(t.has(c)){let E=t.get(c).texture;return o(E,c.mapping)}else{let E=c.image;if(E&&E.height>0){let y=new ps(E.height);return y.fromEquirectangularTexture(n,c),t.set(c,y),c.addEventListener("dispose",l),o(y.texture,c.mapping)}else return null}}return c}function a(c){if(c&&c.isTexture&&c.isPMREMTexture!==!0){let p=c.mapping,E=p===Cr||p===vr,y=p===sn||p===zn;if(E||y){let m=e.get(c),d=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==d)return i===null&&(i=new ua(n)),m=E?i.fromEquirectangular(c,m):i.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),m.texture;if(m!==void 0)return m.texture;{let I=c.image;return E&&I&&I.height>0||y&&I&&h(I)?(i===null&&(i=new ua(n)),m=E?i.fromEquirectangular(c):i.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),c.addEventListener("dispose",u),m.texture):null}}}return c}function o(c,p){return p===Cr?c.mapping=sn:p===vr&&(c.mapping=zn),c}function h(c){let p=0,E=6;for(let y=0;y<E;y++)c[y]!==void 0&&p++;return p===E}function l(c){let p=c.target;p.removeEventListener("dispose",l);let E=t.get(p);E!==void 0&&(t.delete(p),E.dispose())}function u(c){let p=c.target;p.removeEventListener("dispose",u);let E=e.get(p);E!==void 0&&(e.delete(p),E.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Cf(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Gn("WebGLRenderer: "+i+" extension not supported."),s}}}function vf(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(E=>delete s[E]);function o(E){h(E.target)}function h(E){E.index!==null&&t.remove(E.index);for(let m in E.attributes)t.remove(E.attributes[m]);E.removeEventListener("dispose",o),delete s[E.id],a.unregister(E);let y=r.get(E);y&&(t.remove(y),r.delete(E)),i.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,e.memory.geometries--}function l(E,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function u(E){let y=E.attributes;for(let m in y)t.update(y[m],n.ARRAY_BUFFER)}function f(E){let y=E.index,m=E.attributes.position,d=0;if(m===void 0)return;let I=y!==null?y.array.length:m.array.length/3-1,b=m.count>=65535?Hn:Kn,v=new b(Math.ceil(I/3)*6,1),T=v.array;if(y!==null){let g=y.array;d=y.version;for(let x=0,P=0;x<I;x+=3){let z=g[x+0],Z=g[x+1],Y=g[x+2];T[P++]=z,T[P++]=Z,T[P++]=Z,T[P++]=Y,T[P++]=Y,T[P++]=z}}else{d=m.version;for(let g=0,x=0;g<I;g+=3){let P=g+0,z=g+1,Z=g+2;T[x++]=P,T[x++]=z,T[x++]=z,T[x++]=Z,T[x++]=Z,T[x++]=P}}v.version=d;let w=r.get(E);w&&t.remove(w),r.set(E,v)}function c(E){let y=r.get(E);if(y){let m=E.index;m!==null&&y.version<m.version&&f(E)}else f(E);return r.get(E)}function p(){for(let E in s){let y=s[E].deref();y!==void 0&&h(y)}}return{get:l,update:u,getWireframeAttribute:c,dispose:p}}function wf(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function h(f,c){n.drawElements(i,c,r,f*a),e.update(c,i,1)}function l(f,c,p){p!==0&&(n.drawElementsInstanced(i,c,r,f*a,p),e.update(c,i,p))}function u(f,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,r,f,0,p);let y=0;for(let m=0;m<p;m++)y+=c[m];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=l,this.renderMultiDraw=u}function bf(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Tf(n,t,e){let i=new WeakMap,s=new jt;function r(a,o,h){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,c=i.get(o);if(c===void 0||c.count!==f){let P=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",P)};c!==void 0&&c.texture.dispose();let p=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],I=o.morphAttributes.color||[],b=0;p===!0&&(b=1),E===!0&&(b=2),y===!0&&(b=3);let v=o.attributes.position.count*b,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*T*4*f),g=new Wn(w,v,T,f);g.type=si,g.needsUpdate=!0;let x=b*4;for(let z=0;z<f;z++){let Z=m[z],Y=d[z],H=I[z],k=v*T*4*z;for(let G=0;G<Z.count;G++){let j=G*x;p===!0&&(s.fromBufferAttribute(Z,G),w[k+j+0]=s.x,w[k+j+1]=s.y,w[k+j+2]=s.z,w[k+j+3]=0),E===!0&&(s.fromBufferAttribute(Y,G),w[k+j+4]=s.x,w[k+j+5]=s.y,w[k+j+6]=s.z,w[k+j+7]=0),y===!0&&(s.fromBufferAttribute(H,G),w[k+j+8]=s.x,w[k+j+9]=s.y,w[k+j+10]=s.z,w[k+j+11]=H.itemSize===4?s.w:1)}}c={count:f,texture:g,size:new Ft(v,T)},i.set(o,c),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let E=o.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",l)}h.getUniforms().setValue(n,"morphTargetsTexture",c.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",c.size)}return{update:r}}function Rf(n,t,e,i,s){let r=new WeakMap;function a(l){let u=s.render.frame,f=l.geometry,c=t.get(l,f);if(r.get(c)!==u&&(t.update(c),r.set(c,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",h)===!1&&l.addEventListener("dispose",h),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return c}function o(){r=new WeakMap}function h(l){let u=l.target;u.removeEventListener("dispose",h),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var kf={[_a]:"LINEAR_TONE_MAPPING",[$a]:"REINHARD_TONE_MAPPING",[to]:"CINEON_TONE_MAPPING",[eo]:"ACES_FILMIC_TONE_MAPPING",[no]:"AGX_TONE_MAPPING",[so]:"NEUTRAL_TONE_MAPPING",[io]:"CUSTOM_TONE_MAPPING"};function zf(n,t,e,i,s,r){let a=new Ge(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,h=null,l=null,u=new ei;u.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let f=new lr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new He(u,f),p=new Sr(-1,1,1,-1,0,1),E=null,y=null,m=!1,d,I=null,b=[],v=!1;this.setSize=function(T,w){a.setSize(T,w),o!==null&&o.setSize(T,w),h!==null&&h.setSize(T,w);for(let g=0;g<b.length;g++){let x=b[g];x.setSize&&x.setSize(T,w)}},this.setEffects=function(T){b=T,v=b.length>0&&b[0].isRenderPass===!0;let w=a.width,g=a.height;b.length>0&&o===null&&(o=new Ge(w,g,{type:ri,depthBuffer:!1,stencilBuffer:!1}),h=new Ge(w,g,{type:ri,depthBuffer:!1,stencilBuffer:!1}));let x=s===!0&&b.some(P=>P.needsDepthTexture===!0);x!==(a.depthTexture!==null)&&(x===!0&&l===null&&(l=new xi(w,g),r===!0&&(l.format=vi,l.type=rn)),a.dispose(),a.depthTexture=x?l:null,a.resolveDepthBuffer=x,a.storeMultisampledDepthBuffer=x);for(let P=0;P<b.length;P++){let z=b[P];z.setSize&&z.setSize(w,g),x&&z.needsDepthTexture===!0&&z.setDepthTexture&&z.setDepthTexture(l)}},this.begin=function(T,w){if(m||T.toneMapping===di&&b.length===0)return!1;if(I=w,w!==null){let g=w.width,x=w.height;(a.width!==g||a.height!==x)&&this.setSize(g,x)}return v===!1&&T.setRenderTarget(a),d=T.toneMapping,T.toneMapping=di,!0},this.hasRenderPass=function(){return v},this.end=function(T,w){T.toneMapping=d,m=!0;let g=a,x=o;for(let P=0;P<b.length;P++){let z=b[P];z.enabled!==!1&&(z.render(T,x,g,w),z.needsSwap!==!1&&(g=x,x=x===o?h:o))}if(E!==T.outputColorSpace||y!==T.toneMapping){E=T.outputColorSpace,y=T.toneMapping,f.defines={},Yt.getTransfer(E)===Xt&&(f.defines.SRGB_TRANSFER="");let P=kf[y];P&&(f.defines[P]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,T.setRenderTarget(I),T.render(c,p),I=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),h!==null&&h.dispose(),u.dispose(),f.dispose()}}var zh=new Ze,Bh=new xi(1,1),Zh=new _n(1),Dh=new Wn,Jh=new nr,Uh=new jn,ch=[],uh=[],dh=new Float32Array(16),fh=new Float32Array(9),ph=new Float32Array(4);function Dn(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=ch[s];if(r===void 0&&(r=new Float32Array(s),ch[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function pe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function me(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function fa(n,t){let e=uh[t];e===void 0&&(e=new Int32Array(t),uh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Bf(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Zf(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;n.uniform2fv(this.addr,t),me(e,t)}}function Df(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;n.uniform3fv(this.addr,t),me(e,t)}}function Jf(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;n.uniform4fv(this.addr,t),me(e,t)}}function Uf(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;ph.set(i),n.uniformMatrix2fv(this.addr,!1,ph),me(e,i)}}function Ff(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;fh.set(i),n.uniformMatrix3fv(this.addr,!1,fh),me(e,i)}}function Pf(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(pe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,i))return;dh.set(i),n.uniformMatrix4fv(this.addr,!1,dh),me(e,i)}}function Nf(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Gf(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;n.uniform2iv(this.addr,t),me(e,t)}}function Vf(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;n.uniform3iv(this.addr,t),me(e,t)}}function Yf(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;n.uniform4iv(this.addr,t),me(e,t)}}function Qf(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Lf(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;n.uniform2uiv(this.addr,t),me(e,t)}}function Wf(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;n.uniform3uiv(this.addr,t),me(e,t)}}function Of(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;n.uniform4uiv(this.addr,t),me(e,t)}}function pa(n){return n.version===0&&(n.compareFunction=Mo,n.needsUpdate=!0),n}function qf(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=pa(Bh):r=zh,e.setTexture2D(t||r,s)}function Kf(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Jh,s)}function Hf(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=pa(Zh):r=Uh,e.setTextureCube(t||r,s)}function Xf(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Dh,s)}function jf(n){switch(n){case 5126:return Bf;case 35664:return Zf;case 35665:return Df;case 35666:return Jf;case 35674:return Uf;case 35675:return Ff;case 35676:return Pf;case 5124:case 35670:return Nf;case 35667:case 35671:return Gf;case 35668:case 35672:return Vf;case 35669:case 35673:return Yf;case 5125:return Qf;case 36294:return Lf;case 36295:return Wf;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return qf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return Hf;case 36289:case 36303:case 36311:case 36292:return Xf}}function _f(n,t){n.uniform1fv(this.addr,t)}function $f(n,t){let e=Dn(t,this.size,2);n.uniform2fv(this.addr,e)}function tp(n,t){let e=Dn(t,this.size,3);n.uniform3fv(this.addr,e)}function ep(n,t){let e=Dn(t,this.size,4);n.uniform4fv(this.addr,e)}function ip(n,t){let e=Dn(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function np(n,t){let e=Dn(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function sp(n,t){let e=Dn(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function rp(n,t){n.uniform1iv(this.addr,t)}function ap(n,t){n.uniform2iv(this.addr,t)}function op(n,t){n.uniform3iv(this.addr,t)}function lp(n,t){n.uniform4iv(this.addr,t)}function hp(n,t){n.uniform1uiv(this.addr,t)}function cp(n,t){n.uniform2uiv(this.addr,t)}function up(n,t){n.uniform3uiv(this.addr,t)}function dp(n,t){n.uniform4uiv(this.addr,t)}function fp(n,t,e){let i=this.cache,s=t.length,r=fa(e,s);pe(i,r)||(n.uniform1iv(this.addr,r),me(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=pa(Bh):a=zh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function pp(n,t,e){let i=this.cache,s=t.length,r=fa(e,s);pe(i,r)||(n.uniform1iv(this.addr,r),me(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Jh,r[a])}function mp(n,t,e){let i=this.cache,s=t.length,r=fa(e,s);pe(i,r)||(n.uniform1iv(this.addr,r),me(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=pa(Zh):a=Uh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function gp(n,t,e){let i=this.cache,s=t.length,r=fa(e,s);pe(i,r)||(n.uniform1iv(this.addr,r),me(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Dh,r[a])}function Mp(n){switch(n){case 5126:return _f;case 35664:return $f;case 35665:return tp;case 35666:return ep;case 35674:return ip;case 35675:return np;case 35676:return sp;case 5124:case 35670:return rp;case 35667:case 35671:return ap;case 35668:case 35672:return op;case 35669:case 35673:return lp;case 5125:return hp;case 36294:return cp;case 36295:return up;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return fp;case 35679:case 36299:case 36307:return pp;case 35680:case 36300:case 36308:case 36293:return mp;case 36289:case 36303:case 36311:case 36292:return gp}}var bo=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=jf(e.type)}},To=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mp(e.type)}},Ro=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},vo=/(\w+)(\])?(\[|\.)?/g;function mh(n,t){n.seq.push(t),n.map[t.id]=t}function Ep(n,t,e){let i=n.name,s=i.length;for(vo.lastIndex=0;;){let r=vo.exec(i),a=vo.lastIndex,o=r[1],h=r[2]==="]",l=r[3];if(h&&(o=o|0),l===void 0||l==="["&&a+2===s){mh(e,l===void 0?new bo(o,n,t):new To(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new Ro(o),mh(e,f)),e=f}}}var Zn=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),h=t.getUniformLocation(e,o.name);Ep(o,h,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],h=i[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function gh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Ap=37297,Ip=0;function Sp(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Mh=new Dt;function yp(n){Yt._getMatrix(Mh,Yt.workingColorSpace,n);let t=`mat3( ${Mh.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case Qn:return[t,"LinearTransferOETF"];case Xt:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Eh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Sp(n.getShaderSource(t),o)}else return r}function xp(n,t){let e=yp(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Cp={[_a]:"Linear",[$a]:"Reinhard",[to]:"Cineon",[eo]:"ACESFilmic",[no]:"AgX",[so]:"Neutral",[io]:"Custom"};function vp(n,t){let e=Cp[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ca=new V;function wp(){Yt.getLuminanceCoefficients(ca);let n=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function Tp(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Rp(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function fs(n){return n!==""}function Ah(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ih(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(n){return n.replace(kp,zp)}function zp(n,t){let e=Pt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ko(e)}var Bp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(n){return n.replace(Bp,Zp)}function Zp(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yh(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Dp={[is]:"SHADOWMAP_TYPE_PCF",[kn]:"SHADOWMAP_TYPE_VSM"};function Jp(n){return Dp[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Up={[zn]:"ENVMAP_MODE_REFRACTION"};function Fp(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Up[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Pp={[ja]:"ENVMAP_BLENDING_MULTIPLY",[Nl]:"ENVMAP_BLENDING_MIX",[Gl]:"ENVMAP_BLENDING_ADD"};function Np(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Pp[n.combine]||"ENVMAP_BLENDING_NONE"}function Gp(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,h=Jp(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Fp(e),f=Np(e),c=bp(e),p=Tp(r),E=s.createProgram(),y,m,d=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(fs).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(fs).join(`
`),m.length>0&&(m+=`
`)):(y=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),m=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Pt.tonemapping_pars_fragment:"",e.toneMapping!==di?vp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,xp("linearToOutputTexel",e.outputColorSpace),wp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),a=ko(a),a=Ah(a,e),a=Ih(a,e),o=ko(o),o=Ah(o,e),o=Ih(o,e),a=Sh(a),o=Sh(o),e.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,y=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===Eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let I=d+y+a,b=d+m+o,v=gh(s,s.VERTEX_SHADER,I),T=gh(s,s.FRAGMENT_SHADER,b);s.attachShader(E,v),s.attachShader(E,T),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function w(z){if(n.debug.checkShaderErrors){let Z=s.getProgramInfoLog(E)||"",Y=s.getShaderInfoLog(v)||"",H=s.getShaderInfoLog(T)||"",k=Z.trim(),G=Y.trim(),j=H.trim(),L=!0,at=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,v,T);else{let q=Eh(s,v,"vertex"),$=Eh(s,T,"fragment");Zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+k+`
`+q+`
`+$)}else k!==""?kt("WebGLProgram: Program Info Log:",k):(G===""||j==="")&&(at=!1);at&&(z.diagnostics={runnable:L,programLog:k,vertexShader:{log:G,prefix:y},fragmentShader:{log:j,prefix:m}})}s.deleteShader(v),s.deleteShader(T),g=new Zn(s,E),x=Rp(s,E)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(E,Ap)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ip++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=v,this.fragmentShader=T,this}var Vp=0,zo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Bo(t),e.set(t,i)),i}},Bo=class{constructor(t){this.id=Vp++,this.code=t,this.usedTimes=0}};function Yp(n){return n===Vi||n===hs||n===cs}function Qp(n,t,e,i,s,r){let a=new On,o=new zo,h=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer,c={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return h.add(g),g===0?"uv":`uv${g}`}function E(g,x,P,z,Z,Y){let H=z.fog,k=Z.geometry,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?z.environment:null,j=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,L=t.get(g.envMap||G,j),at=c[g.type],q=i.precision;g.precision!==null&&(q=i.getMaxPrecision(g.precision),q!==g.precision&&kt("WebGLProgram.getParameters:",g.precision,"not supported, using",q,"instead."));let $=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,it=$!==void 0?$.length:0,yt=0;k.morphAttributes.position!==void 0&&(yt=1),k.morphAttributes.normal!==void 0&&(yt=2),k.morphAttributes.color!==void 0&&(yt=3);let zt,O,dt,Et;if(at){let pt=pi[at];zt=pt.vertexShader,O=pt.fragmentShader}else{zt=g.vertexShader,O=g.fragmentShader;let pt=o.getVertexShaderStage(g),Wt=o.getFragmentShaderStage(g);o.update(g,pt,Wt),dt=pt.id,Et=Wt.id}let wt=n.getRenderTarget(),ft=n.state.buffers.depth.getReversed(),Jt=Z.isInstancedMesh===!0,oe=Z.isBatchedMesh===!0,Tt=!!g.map,qt=!!g.matcap,Kt=!!L,Nt=Kt&&L.isPMREMTexture===!0,ue=!!g.aoMap,le=!!g.lightMap,Ie=!!g.bumpMap&&g.wireframe===!1,ee=!!g.normalMap,Je=!!g.displacementMap,he=!!g.emissiveMap,Te=!!g.metalnessMap,ye=!!g.roughnessMap,Re=g.anisotropy>0,B=g.clearcoat>0,ke=g.diffuseRoughness>0,_t=g.dispersion>0,$t=g.retroreflectivity>0,ut=g.iridescence>0,se=g.sheen>0,vt=g.transmission>0,Rt=Re&&!!g.anisotropyMap,S=B&&!!g.clearcoatMap,M=B&&!!g.clearcoatNormalMap,D=B&&!!g.clearcoatRoughnessMap,st=ke&&!!g.diffuseRoughnessMap,_=ut&&!!g.iridescenceMap,ot=ut&&!!g.iridescenceThicknessMap,lt=se&&!!g.sheenColorMap,K=se&&!!g.sheenRoughnessMap,X=!!g.specularMap,W=!!g.specularColorMap,C=!!g.specularIntensityMap,N=vt&&!!g.transmissionMap,U=vt&&!!g.thicknessMap,tt=!!g.gradientMap,et=!!g.alphaMap,rt=g.alphaTest>0,gt=!!g.alphaHash,bt=!!g.extensions,nt=di;g.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(nt=n.toneMapping);let xt=Nt?L.isCompressedCubeTexture?L.image[0].mipmaps:L.mipmaps:null,Bt={shaderID:at,shaderType:g.type,shaderName:g.name,vertexShader:zt,fragmentShader:O,defines:g.defines,customVertexShaderID:dt,customFragmentShaderID:Et,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:q,batching:oe,batchingColor:oe&&Z._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&Z.instanceColor!==null,instancingMorph:Jt&&Z.morphTexture!==null,outputColorSpace:wt===null?n.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Tt,matcap:qt,envMap:Kt,envMapMode:Kt&&L.mapping,envMapPMREM:Nt,envMapMaxLod:Nt?xt.length-1:null,envMapSize:Nt?xt[0].width:null,aoMap:ue,lightMap:le,bumpMap:Ie,normalMap:ee,displacementMap:Je,emissiveMap:he,normalMapObjectSpace:ee&&g.normalMapType===Ql,normalMapTangentSpace:ee&&g.normalMapType===po,packedNormalMap:ee&&g.normalMapType===po&&Yp(g.normalMap.format),metalnessMap:Te,roughnessMap:ye,anisotropy:Re,anisotropyMap:Rt,clearcoat:B,clearcoatMap:S,clearcoatNormalMap:M,clearcoatRoughnessMap:D,diffuseRoughness:ke,diffuseRoughnessMap:st,dispersion:_t,retroreflection:$t,iridescence:ut,iridescenceMap:_,iridescenceThicknessMap:ot,sheen:se,sheenColorMap:lt,sheenRoughnessMap:K,specularMap:X,specularColorMap:W,specularIntensityMap:C,transmission:vt,transmissionMap:N,thicknessMap:U,gradientMap:tt,opaque:g.transparent===!1&&g.blending===Ci&&g.alphaToCoverage===!1,alphaMap:et,alphaTest:rt,alphaHash:gt,combine:g.combine,mapUv:Tt&&p(g.map.channel),aoMapUv:ue&&p(g.aoMap.channel),lightMapUv:le&&p(g.lightMap.channel),bumpMapUv:Ie&&p(g.bumpMap.channel),normalMapUv:ee&&p(g.normalMap.channel),displacementMapUv:Je&&p(g.displacementMap.channel),emissiveMapUv:he&&p(g.emissiveMap.channel),metalnessMapUv:Te&&p(g.metalnessMap.channel),roughnessMapUv:ye&&p(g.roughnessMap.channel),anisotropyMapUv:Rt&&p(g.anisotropyMap.channel),clearcoatMapUv:S&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:M&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:D&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:_&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:K&&p(g.sheenRoughnessMap.channel),specularMapUv:X&&p(g.specularMap.channel),specularColorMapUv:W&&p(g.specularColorMap.channel),specularIntensityMapUv:C&&p(g.specularIntensityMap.channel),transmissionMapUv:N&&p(g.transmissionMap.channel),thicknessMapUv:U&&p(g.thicknessMap.channel),alphaMapUv:et&&p(g.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ee||Re),vertexNormals:!!k.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!k.attributes.uv&&(Tt||et),fog:!!H,useFog:g.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||k.attributes.normal===void 0&&ee===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ft,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:yt,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:Y.filter(pt=>pt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:Tt&&g.map.isVideoTexture===!0&&Yt.getTransfer(g.map.colorSpace)===Xt,decodeVideoTextureEmissive:he&&g.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(g.emissiveMap.colorSpace)===Xt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ui,flipSided:g.side===De,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:bt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&g.extensions.multiDraw===!0||oe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Bt.vertexUv1s=h.has(1),Bt.vertexUv2s=h.has(2),Bt.vertexUv3s=h.has(3),h.clear(),Bt}function y(g){let x=[];if(g.shaderID?x.push(g.shaderID):(x.push(g.customVertexShaderID),x.push(g.customFragmentShaderID)),g.defines!==void 0)for(let P in g.defines)x.push(P),x.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(m(x,g),d(x,g),x.push(n.outputColorSpace)),x.push(g.customProgramCacheKey),x.join()}function m(g,x){g.push(x.precision),g.push(x.outputColorSpace),g.push(x.envMapMode),g.push(x.envMapPMREM),g.push(x.envMapMaxLod),g.push(x.envMapSize),g.push(x.mapUv),g.push(x.alphaMapUv),g.push(x.lightMapUv),g.push(x.aoMapUv),g.push(x.bumpMapUv),g.push(x.normalMapUv),g.push(x.displacementMapUv),g.push(x.emissiveMapUv),g.push(x.metalnessMapUv),g.push(x.roughnessMapUv),g.push(x.anisotropyMapUv),g.push(x.clearcoatMapUv),g.push(x.clearcoatNormalMapUv),g.push(x.clearcoatRoughnessMapUv),g.push(x.diffuseRoughnessMapUv),g.push(x.iridescenceMapUv),g.push(x.iridescenceThicknessMapUv),g.push(x.sheenColorMapUv),g.push(x.sheenRoughnessMapUv),g.push(x.specularMapUv),g.push(x.specularColorMapUv),g.push(x.specularIntensityMapUv),g.push(x.transmissionMapUv),g.push(x.thicknessMapUv),g.push(x.combine),g.push(x.fogExp2),g.push(x.sizeAttenuation),g.push(x.morphTargetsCount),g.push(x.numSunLights),g.push(x.numDirLights),g.push(x.numPointLights),g.push(x.numSpotLights),g.push(x.numSpotLightMaps),g.push(x.numHemiLights),g.push(x.numRectAreaLights),g.push(x.numSunLightShadows),g.push(x.numDirLightShadows),g.push(x.numPointLightShadows),g.push(x.numSpotLightShadows),g.push(x.numSpotLightShadowsWithMaps),g.push(x.numLightProbes),g.push(x.numLightProbeGrids),g.push(x.shadowMapType),g.push(x.toneMapping),g.push(x.numClippingPlanes),g.push(x.numClipIntersection),g.push(x.depthPacking)}function d(g,x){a.disableAll(),x.instancing&&a.enable(0),x.instancingColor&&a.enable(1),x.instancingMorph&&a.enable(2),x.matcap&&a.enable(3),x.envMap&&a.enable(4),x.normalMapObjectSpace&&a.enable(5),x.normalMapTangentSpace&&a.enable(6),x.clearcoat&&a.enable(7),x.iridescence&&a.enable(8),x.alphaTest&&a.enable(9),x.vertexColors&&a.enable(10),x.vertexAlphas&&a.enable(11),x.vertexUv1s&&a.enable(12),x.vertexUv2s&&a.enable(13),x.vertexUv3s&&a.enable(14),x.vertexTangents&&a.enable(15),x.anisotropy&&a.enable(16),x.alphaHash&&a.enable(17),x.batching&&a.enable(18),x.dispersion&&a.enable(19),x.retroreflection&&a.enable(24),x.diffuseRoughness&&a.enable(25),x.batchingColor&&a.enable(20),x.gradientMap&&a.enable(21),x.packedNormalMap&&a.enable(22),x.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),x.numLightProbeGrids>0&&a.enable(22),x.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function I(g){let x=c[g.type],P;if(x){let z=pi[x];P=nh.clone(z.uniforms)}else P=g.uniforms;return P}function b(g,x){let P=u.get(x);return P!==void 0?++P.usedTimes:(P=new Gp(n,x,g,s),l.push(P),u.set(x,P)),P}function v(g){if(--g.usedTimes===0){let x=l.indexOf(g);l[x]=l[l.length-1],l.pop(),u.delete(g.cacheKey),g.destroy()}}function T(g){o.remove(g)}function w(){o.dispose()}return{getParameters:E,getProgramCacheKey:y,getUniforms:I,acquireProgram:b,releaseProgram:v,releaseShaderCache:T,programs:l,dispose:w}}function Lp(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,h){n.get(a)[o]=h}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Wp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function xh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ch(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(c){let p=0;return c.isInstancedMesh&&(p+=2),c.isSkinnedMesh&&(p+=1),p}function o(c,p,E,y,m,d){let I=n[t];return I===void 0?(I={id:c.id,object:c,geometry:p,material:E,materialVariant:a(c),groupOrder:y,renderOrder:c.renderOrder,z:m,group:d},n[t]=I):(I.id=c.id,I.object=c,I.geometry=p,I.material=E,I.materialVariant=a(c),I.groupOrder=y,I.renderOrder=c.renderOrder,I.z=m,I.group=d),t++,I}function h(c,p,E,y,m,d,I){I.reversedDepth===!0&&(m=-m);let b=o(c,p,E,y,m,d);E.transmission>0?i.push(b):E.transparent===!0?s.push(b):e.push(b)}function l(c,p,E,y,m,d){let I=o(c,p,E,y,m,d);E.transmission>0?i.unshift(I):E.transparent===!0?s.unshift(I):e.unshift(I)}function u(c,p){e.length>1&&e.sort(c||Wp),i.length>1&&i.sort(p||xh),s.length>1&&s.sort(p||xh)}function f(){for(let c=t,p=n.length;c<p;c++){let E=n[c];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:h,unshift:l,finish:f,sort:u}}function Op(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Ch,n.set(i,[a])):s>=r.length?(a=new Ch,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function qp(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new Qt};break;case"SpotLight":e={position:new V,direction:new V,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function Kp(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Hp=0;function Xp(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function jp(n){let t=new qp,e=Kp(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new V);let s=new V,r=new ae,a=new ae;function o(l){let u=0,f=0,c=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let p=0,E=0,y=0,m=0,d=0,I=0,b=0,v=0,T=0,w=0,g=0,x=0,P=0,z=0;l.sort(Xp);for(let Y=0,H=l.length;Y<H;Y++){let k=l[Y],G=k.color,j=k.intensity,L=k.distance,at=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Vi?at=k.shadow.map.texture:at=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)u+=G.r*j,f+=G.g*j,c+=G.b*j;else if(k.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(k.sh.coefficients[q],j);z++}else if(k.isSunLight){let q=t.get(k);if(q.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let $=k.shadow,it=e.get(k);it.shadowIntensity=$.intensity,it.shadowBias=$.bias,it.shadowNormalBias=$.normalBias,it.shadowRadius=$.radius,it.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[E]=it,i.sunShadowMap[E]=at;let yt=$.getViewportCount();for(let zt=0;zt<yt;zt++)i.sunShadowMatrix[y+zt]=$.getMatrix(zt),i.sunShadowCascade[y+zt]=$._cascadeData[zt];y+=yt,E++}i.sun[p]=q,p++}else if(k.isDirectionalLight){let q=t.get(k);if(q.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let $=k.shadow,it=e.get(k);it.shadowIntensity=$.intensity,it.shadowBias=$.bias,it.shadowNormalBias=$.normalBias,it.shadowRadius=$.radius,it.shadowMapSize=$.mapSize,i.directionalShadow[m]=it,i.directionalShadowMap[m]=at,i.directionalShadowMatrix[m]=k.shadow.matrix,T++}i.directional[m]=q,m++}else if(k.isSpotLight){let q=t.get(k);q.position.setFromMatrixPosition(k.matrixWorld),q.color.copy(G).multiplyScalar(j),q.distance=L,q.coneCos=Math.cos(k.angle),q.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),q.decay=k.decay,i.spot[I]=q;let $=k.shadow;if(k.map&&(i.spotLightMap[x]=k.map,x++,$.updateMatrices(k),k.castShadow&&P++),i.spotLightMatrix[I]=$.matrix,k.castShadow){let it=e.get(k);it.shadowIntensity=$.intensity,it.shadowBias=$.bias,it.shadowNormalBias=$.normalBias,it.shadowRadius=$.radius,it.shadowMapSize=$.mapSize,i.spotShadow[I]=it,i.spotShadowMap[I]=at,g++}I++}else if(k.isRectAreaLight){let q=t.get(k);q.color.copy(G).multiplyScalar(j),q.halfWidth.set(k.width*.5,0,0),q.halfHeight.set(0,k.height*.5,0),i.rectArea[b]=q,b++}else if(k.isPointLight){let q=t.get(k);if(q.color.copy(k.color).multiplyScalar(k.intensity),q.distance=k.distance,q.decay=k.decay,k.castShadow){let $=k.shadow,it=e.get(k);it.shadowIntensity=$.intensity,it.shadowBias=$.bias,it.shadowNormalBias=$.normalBias,it.shadowRadius=$.radius,it.shadowMapSize=$.mapSize,it.shadowCameraNear=$.camera.near,it.shadowCameraFar=$.camera.far,i.pointShadow[d]=it,i.pointShadowMap[d]=at,i.pointShadowMatrix[d]=k.shadow.matrix,w++}i.point[d]=q,d++}else if(k.isHemisphereLight){let q=t.get(k);q.skyColor.copy(k.color).multiplyScalar(j),q.groundColor.copy(k.groundColor).multiplyScalar(j),i.hemi[v]=q,v++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=c;let Z=i.hash;(Z.sunLength!==p||Z.directionalLength!==m||Z.pointLength!==d||Z.spotLength!==I||Z.rectAreaLength!==b||Z.hemiLength!==v||Z.numSunShadows!==E||Z.numDirectionalShadows!==T||Z.numPointShadows!==w||Z.numSpotShadows!==g||Z.numSpotMaps!==x||Z.numLightProbes!==z)&&(i.sun.length=p,i.directional.length=m,i.spot.length=I,i.rectArea.length=b,i.point.length=d,i.hemi.length=v,i.sunShadow.length=E,i.sunShadowMap.length=E,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+x-P,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=z,Z.sunLength=p,Z.directionalLength=m,Z.pointLength=d,Z.spotLength=I,Z.rectAreaLength=b,Z.hemiLength=v,Z.numSunShadows=E,Z.numDirectionalShadows=T,Z.numPointShadows=w,Z.numSpotShadows=g,Z.numSpotMaps=x,Z.numLightProbes=z,i.version=Hp++)}function h(l,u){let f=0,c=0,p=0,E=0,y=0,m=0,d=u.matrixWorldInverse;for(let I=0,b=l.length;I<b;I++){let v=l[I];if(v.isSunLight){let T=i.sun[f];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(d),f++}else if(v.isDirectionalLight){let T=i.directional[c];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),c++}else if(v.isSpotLight){let T=i.spot[E];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),E++}else if(v.isRectAreaLight){let T=i.rectArea[y];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(d),a.identity(),r.copy(v.matrixWorld),r.premultiply(d),a.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let T=i.point[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:o,setupView:h,state:i}}function vh(n){let t=new jp(n),e=[],i=[],s=[];function r(f){u.camera=f,e.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){i.push(f)}function h(){t.setup(e),s.sort((f,c)=>f.priority-c.priority||f.id-c.id)}function l(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:h,setupLightsView:l,pushLight:a,pushShadow:o}}function _p(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new vh(n),t.set(s,[o])):r>=a.length?(o=new vh(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var $p=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tm=`uniform sampler2D shadow_pass;
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
}`,em=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],im=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],wh=new ae,ds=new V,wo=new V;function nm(n,t,e){let i=new ji,s=new Ft,r=new Ft,a=new jt,o=new hr,h=new cr,l={},u=e.maxTextureSize,f={[Gi]:De,[De]:Gi,[ui]:ui},c=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:$p,fragmentShader:tm}),p=c.clone();p.defines.HORIZONTAL_PASS=1;let E=new ei;E.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new He(E,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=is;let d=this.type;this.render=function(w,g,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Il&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=is);let P=n.getRenderTarget(),z=n.getActiveCubeFace(),Z=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(en),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let H=d!==this.type;H&&g.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(G=>G.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,G=w.length;k<G;k++){let j=w[k],L=j.shadow;if(L===void 0){kt("WebGLShadowMap:",j,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);let at=L.getFrameExtents();s.multiply(at),r.copy(L.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/at.x),s.x=r.x*at.x,L.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/at.y),s.y=r.y*at.y,L.mapSize.y=r.y));let q=n.state.buffers.depth.getReversed();if(L.camera._reversedDepth=q,L.map===null||H===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===kn){if(j.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new Ge(s.x,s.y,{format:Vi,type:ri,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),L.map.texture.name=j.name+".shadowMap",L.map.depthTexture=new xi(s.x,s.y,si),L.map.depthTexture.name=j.name+".shadowMapDepth",L.map.depthTexture.format=yi,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Ee,L.map.depthTexture.magFilter=Ee}else j.isPointLight?(L.map=new ps(s.x),L.map.depthTexture=new _n(s.x,ni)):(L.map=new Ge(s.x,s.y),L.map.depthTexture=new xi(s.x,s.y,ni)),L.map.depthTexture.name=j.name+".shadowMap",L.map.depthTexture.format=yi,this.type===is?(L.map.depthTexture.compareFunction=q?go:mo,L.map.depthTexture.minFilter=Ae,L.map.depthTexture.magFilter=Ae):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Ee,L.map.depthTexture.magFilter=Ee);L.camera.updateProjectionMatrix()}L.map.isWebGLCubeRenderTarget!==!0&&(L.map.width!==s.x||L.map.height!==s.y)&&L.map.setSize(s.x,s.y);let $=L.map.isWebGLCubeRenderTarget?6:L.getViewportCount();j.isPointLight!==!0&&L.updateMatrices(j,x);let it=(L.camera.layers.mask&4294967294)!==0?L.camera.layers:x.layers;for(let yt=0;yt<$;yt++){let zt=L.getCamera(yt);if(j.isPointLight){let O=L.camera,dt=L.matrix,Et=j.distance||O.far;Et!==O.far&&(O.far=Et,O.updateProjectionMatrix()),ds.setFromMatrixPosition(j.matrixWorld),O.position.copy(ds),wo.copy(O.position),wo.add(em[yt]),O.up.copy(im[yt]),O.lookAt(wo),O.updateMatrixWorld(),dt.makeTranslation(-ds.x,-ds.y,-ds.z),wh.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),L._frustum.setFromProjectionMatrix(wh,O.coordinateSystem,O.reversedDepth)}if(L.map.isWebGLCubeRenderTarget)n.setRenderTarget(L.map,yt),n.clear();else{yt===0&&(n.setRenderTarget(L.map),n.clear());let O=L.getViewport(yt);a.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),Y.viewport(a)}i=L.getFrustum(yt),v(g,x,zt,j,it,this.type)}L.isPointLightShadow!==!0&&this.type===kn&&I(L,x),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(P,z,Z)};function I(w,g){let x=t.update(y);c.defines.VSM_SAMPLES!==w.blurSamples&&(c.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ge(s.x,s.y,{format:Vi,type:ri}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),c.uniforms.shadow_pass.value=w.map.depthTexture,c.uniforms.resolution.value.set(w.map.width,w.map.height),c.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(g,null,x,c,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(g,null,x,p,y,null)}function b(w,g,x,P){let z=null,Z=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(Z!==void 0)z=Z;else if(z=x.isPointLight===!0?h:o,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let Y=z.uuid,H=g.uuid,k=l[Y];k===void 0&&(k={},l[Y]=k);let G=k[H];G===void 0&&(G=z.clone(),k[H]=G,g.addEventListener("dispose",T)),z=G}if(z.visible=g.visible,z.wireframe=g.wireframe,P===kn?z.side=g.shadowSide!==null?g.shadowSide:g.side:z.side=g.shadowSide!==null?g.shadowSide:f[g.side],z.alphaMap=g.alphaMap,z.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,z.map=g.map,z.clipShadows=g.clipShadows,z.clippingPlanes=g.clippingPlanes,z.clipIntersection=g.clipIntersection,z.displacementMap=g.displacementMap,z.displacementScale=g.displacementScale,z.displacementBias=g.displacementBias,z.wireframeLinewidth=g.wireframeLinewidth,z.linewidth=g.linewidth,x.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let Y=n.properties.get(z);Y.light=x}return z}function v(w,g,x,P,z,Z){if(w.visible===!1)return;if(w.layers.test(z)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&Z===kn)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let k=t.update(w),G=w.material;if(Array.isArray(G)){let j=k.groups;for(let L=0,at=j.length;L<at;L++){let q=j[L],$=G[q.materialIndex];if($&&$.visible){let it=b(w,$,P,Z);w.onBeforeShadow(n,w,g,x,k,it,q),n.renderBufferDirect(x,null,k,it,w,q),w.onAfterShadow(n,w,g,x,k,it,q)}}}else if(G.visible){let j=b(w,G,P,Z);w.onBeforeShadow(n,w,g,x,k,j,null),n.renderBufferDirect(x,null,k,j,w,null),w.onAfterShadow(n,w,g,x,k,j,null)}}let H=w.children;for(let k=0,G=H.length;k<G;k++)v(H[k],g,x,P,z,Z)}function T(w){w.target.removeEventListener("dispose",T);for(let x in l){let P=l[x],z=w.target.uuid;z in P&&(P[z].dispose(),delete P[z])}}}function sm(n,t){function e(){let C=!1,N=new jt,U=null,tt=new jt(0,0,0,0);return{setMask:function(et){U!==et&&!C&&(n.colorMask(et,et,et,et),U=et)},setLocked:function(et){C=et},setClear:function(et,rt,gt,bt,nt){nt===!0&&(et*=bt,rt*=bt,gt*=bt),N.set(et,rt,gt,bt),tt.equals(N)===!1&&(n.clearColor(et,rt,gt,bt),tt.copy(N))},reset:function(){C=!1,U=null,tt.set(-1,0,0,0)}}}function i(){let C=!1,N=!1,U=null,tt=null,et=null;return{setReversed:function(rt){if(N!==rt){let gt=t.get("EXT_clip_control");rt?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),N=rt;let bt=et;et=null,this.setClear(bt)}},getReversed:function(){return N},setTest:function(rt){rt?ft(n.DEPTH_TEST):Jt(n.DEPTH_TEST)},setMask:function(rt){U!==rt&&!C&&(n.depthMask(rt),U=rt)},setFunc:function(rt){if(N&&(rt=th[rt]),tt!==rt){switch(rt){case Ls:n.depthFunc(n.NEVER);break;case Ws:n.depthFunc(n.ALWAYS);break;case Os:n.depthFunc(n.LESS);break;case yn:n.depthFunc(n.LEQUAL);break;case qs:n.depthFunc(n.EQUAL);break;case Ks:n.depthFunc(n.GEQUAL);break;case Hs:n.depthFunc(n.GREATER);break;case Xs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=rt}},setLocked:function(rt){C=rt},setClear:function(rt){et!==rt&&(et=rt,N&&(rt=1-rt),n.clearDepth(rt))},reset:function(){C=!1,U=null,tt=null,et=null,N=!1}}}function s(){let C=!1,N=null,U=null,tt=null,et=null,rt=null,gt=null,bt=null,nt=null;return{setTest:function(xt){C||(xt?ft(n.STENCIL_TEST):Jt(n.STENCIL_TEST))},setMask:function(xt){N!==xt&&!C&&(n.stencilMask(xt),N=xt)},setFunc:function(xt,Bt,pt){(U!==xt||tt!==Bt||et!==pt)&&(n.stencilFunc(xt,Bt,pt),U=xt,tt=Bt,et=pt)},setOp:function(xt,Bt,pt){(rt!==xt||gt!==Bt||bt!==pt)&&(n.stencilOp(xt,Bt,pt),rt=xt,gt=Bt,bt=pt)},setLocked:function(xt){C=xt},setClear:function(xt){nt!==xt&&(n.clearStencil(xt),nt=xt)},reset:function(){C=!1,N=null,U=null,tt=null,et=null,rt=null,gt=null,bt=null,nt=null}}}let r=new e,a=new i,o=new s,h={},l=new WeakMap,u={},f={},c={},p=new WeakMap,E=[],y=null,m=!1,d=null,I=null,b=null,v=null,T=null,w=null,g=null,x=new Qt(0,0,0),P=0,z=!1,Z=null,Y=null,H=null,k=null,G=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,at=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(q)[1]),L=at>=1):q.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),L=at>=2);let $=null,it={},yt=n.getParameter(n.SCISSOR_BOX),zt=n.getParameter(n.VIEWPORT),O=new jt().fromArray(yt),dt=new jt().fromArray(zt);function Et(C,N,U,tt){let et=new Uint8Array(4),rt=n.createTexture();n.bindTexture(C,rt),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let gt=0;gt<U;gt++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(N,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,et):n.texImage2D(N+gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,et);return rt}let wt={};wt[n.TEXTURE_2D]=Et(n.TEXTURE_2D,n.TEXTURE_2D,1),wt[n.TEXTURE_CUBE_MAP]=Et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[n.TEXTURE_2D_ARRAY]=Et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),wt[n.TEXTURE_3D]=Et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ft(n.DEPTH_TEST),a.setFunc(yn),Ie(!1),ee(Oa),ft(n.CULL_FACE),ue(en);function ft(C){u[C]!==!0&&(n.enable(C),u[C]=!0)}function Jt(C){u[C]!==!1&&(n.disable(C),u[C]=!1)}function oe(C,N){return c[C]!==N?(n.bindFramebuffer(C,N),c[C]=N,C===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=N),C===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=N),!0):!1}function Tt(C,N){let U=E,tt=!1;if(C){U=p.get(N),U===void 0&&(U=[],p.set(N,U));let et=C.textures;if(U.length!==et.length||U[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,gt=et.length;rt<gt;rt++)U[rt]=n.COLOR_ATTACHMENT0+rt;U.length=et.length,tt=!0}}else U[0]!==n.BACK&&(U[0]=n.BACK,tt=!0);tt&&n.drawBuffers(U)}function qt(C){return y!==C?(n.useProgram(C),y=C,!0):!1}let Kt={[nn]:n.FUNC_ADD,[yl]:n.FUNC_SUBTRACT,[xl]:n.FUNC_REVERSE_SUBTRACT};Kt[Cl]=n.MIN,Kt[vl]=n.MAX;let Nt={[wl]:n.ZERO,[bl]:n.ONE,[Tl]:n.SRC_COLOR,[Ha]:n.SRC_ALPHA,[Dl]:n.SRC_ALPHA_SATURATE,[Bl]:n.DST_COLOR,[kl]:n.DST_ALPHA,[Rl]:n.ONE_MINUS_SRC_COLOR,[Xa]:n.ONE_MINUS_SRC_ALPHA,[Zl]:n.ONE_MINUS_DST_COLOR,[zl]:n.ONE_MINUS_DST_ALPHA,[Jl]:n.CONSTANT_COLOR,[Ul]:n.ONE_MINUS_CONSTANT_COLOR,[Fl]:n.CONSTANT_ALPHA,[Pl]:n.ONE_MINUS_CONSTANT_ALPHA};function ue(C,N,U,tt,et,rt,gt,bt,nt,xt){if(C===en){m===!0&&(Jt(n.BLEND),m=!1);return}if(m===!1&&(ft(n.BLEND),m=!0),C!==Sl){if(C!==d||xt!==z){if((I!==nn||T!==nn)&&(n.blendEquation(n.FUNC_ADD),I=nn,T=nn),xt)switch(C){case Ci:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ns:n.blendFunc(n.ONE,n.ONE);break;case qa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ka:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Zt("WebGLState: Invalid blending: ",C);break}else switch(C){case Ci:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case qa:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ka:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",C);break}b=null,v=null,w=null,g=null,x.set(0,0,0),P=0,d=C,z=xt}return}et=et||N,rt=rt||U,gt=gt||tt,(N!==I||et!==T)&&(n.blendEquationSeparate(Kt[N],Kt[et]),I=N,T=et),(U!==b||tt!==v||rt!==w||gt!==g)&&(n.blendFuncSeparate(Nt[U],Nt[tt],Nt[rt],Nt[gt]),b=U,v=tt,w=rt,g=gt),(bt.equals(x)===!1||nt!==P)&&(n.blendColor(bt.r,bt.g,bt.b,nt),x.copy(bt),P=nt),d=C,z=!1}function le(C,N){C.side===ui?Jt(n.CULL_FACE):ft(n.CULL_FACE);let U=C.side===De;N&&(U=!U),Ie(U),C.blending===Ci&&C.transparent===!1?ue(en):ue(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let tt=C.stencilWrite;o.setTest(tt),tt&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),he(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ft(n.SAMPLE_ALPHA_TO_COVERAGE):Jt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(C){Z!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),Z=C)}function ee(C){C!==El?(ft(n.CULL_FACE),C!==Y&&(C===Oa?n.cullFace(n.BACK):C===Al?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Jt(n.CULL_FACE),Y=C}function Je(C){C!==H&&(L&&n.lineWidth(C),H=C)}function he(C,N,U){C?(ft(n.POLYGON_OFFSET_FILL),(k!==N||G!==U)&&(k=N,G=U,a.getReversed()&&(N=-N,U=-U),n.polygonOffset(N,U))):Jt(n.POLYGON_OFFSET_FILL)}function Te(C){C?ft(n.SCISSOR_TEST):Jt(n.SCISSOR_TEST)}function ye(C){C===void 0&&(C=n.TEXTURE0+j-1),$!==C&&(n.activeTexture(C),$=C)}function Re(C,N,U){U===void 0&&($===null?U=n.TEXTURE0+j-1:U=$);let tt=it[U];tt===void 0&&(tt={type:void 0,texture:void 0},it[U]=tt),(tt.type!==C||tt.texture!==N)&&($!==U&&(n.activeTexture(U),$=U),n.bindTexture(C,N||wt[C]),tt.type=C,tt.texture=N)}function B(){let C=it[$];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ke(){try{n.compressedTexImage2D(...arguments)}catch(C){Zt("WebGLState:",C)}}function _t(){try{n.compressedTexImage3D(...arguments)}catch(C){Zt("WebGLState:",C)}}function $t(){try{n.texSubImage2D(...arguments)}catch(C){Zt("WebGLState:",C)}}function ut(){try{n.texSubImage3D(...arguments)}catch(C){Zt("WebGLState:",C)}}function se(){try{n.compressedTexSubImage2D(...arguments)}catch(C){Zt("WebGLState:",C)}}function vt(){try{n.compressedTexSubImage3D(...arguments)}catch(C){Zt("WebGLState:",C)}}function Rt(){try{n.texStorage2D(...arguments)}catch(C){Zt("WebGLState:",C)}}function S(){try{n.texStorage3D(...arguments)}catch(C){Zt("WebGLState:",C)}}function M(){try{n.texImage2D(...arguments)}catch(C){Zt("WebGLState:",C)}}function D(){try{n.texImage3D(...arguments)}catch(C){Zt("WebGLState:",C)}}function st(C){return f[C]!==void 0?f[C]:n.getParameter(C)}function _(C,N){f[C]!==N&&(n.pixelStorei(C,N),f[C]=N)}function ot(C){O.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),O.copy(C))}function lt(C){dt.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),dt.copy(C))}function K(C,N){let U=l.get(N);U===void 0&&(U=new WeakMap,l.set(N,U));let tt=U.get(C);tt===void 0&&(tt=n.getUniformBlockIndex(N,C.name),n.uniformBlockBinding(N,tt,tt),U.set(C,tt))}function X(C,N,U){let et=l.get(N).get(C);h[et]!==U&&(n.bindBufferBase(n.UNIFORM_BUFFER,et,U),h[et]=U)}function W(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},$=null,it={},c={},h={},p=new WeakMap,E=[],y=null,m=!1,d=null,I=null,b=null,v=null,T=null,w=null,g=null,x=new Qt(0,0,0),P=0,z=!1,Z=null,Y=null,H=null,k=null,G=null,O.set(0,0,n.canvas.width,n.canvas.height),dt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ft,disable:Jt,bindFramebuffer:oe,drawBuffers:Tt,useProgram:qt,setBlending:ue,setMaterial:le,setFlipSided:Ie,setCullFace:ee,setLineWidth:Je,setPolygonOffset:he,setScissorTest:Te,activeTexture:ye,bindTexture:Re,unbindTexture:B,compressedTexImage2D:ke,compressedTexImage3D:_t,texImage2D:M,texImage3D:D,pixelStorei:_,getParameter:st,updateUBOMapping:K,uniformBlockBinding:X,texStorage2D:Rt,texStorage3D:S,texSubImage2D:$t,texSubImage3D:ut,compressedTexSubImage2D:se,compressedTexSubImage3D:vt,scissor:ot,viewport:lt,reset:W}}function rm(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ft,u=new WeakMap,f=new Set,c,p=new WeakMap,E=new Set,y=new FinalizationRegistry(S=>E.delete(S)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(S,M){return m?new OffscreenCanvas(S,M):xn("canvas")}function I(S,M,D){let st=1,_=Rt(S);if((_.width>D||_.height>D)&&(st=D/Math.max(_.width,_.height)),st<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let ot=Math.floor(st*_.width),lt=Math.floor(st*_.height);c===void 0&&(c=d(ot,lt));let K=M?d(ot,lt):c;return K.width=ot,K.height=lt,K.getContext("2d").drawImage(S,0,0,ot,lt),kt("WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+ot+"x"+lt+")."),K}else return"data"in S&&kt("WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+")."),S;return S}function b(S){return S.generateMipmaps}function v(S){n.generateMipmap(S)}function T(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(S,M,D,st,_,ot=!1){if(S!==null){if(n[S]!==void 0)return n[S];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let lt;st&&(lt=t.get("EXT_texture_norm16"),lt||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=M;if(M===n.RED&&(D===n.FLOAT&&(K=n.R32F),D===n.HALF_FLOAT&&(K=n.R16F),D===n.UNSIGNED_BYTE&&(K=n.R8),D===n.UNSIGNED_SHORT&&lt&&(K=lt.R16_EXT),D===n.SHORT&&lt&&(K=lt.R16_SNORM_EXT)),M===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(K=n.R8UI),D===n.UNSIGNED_SHORT&&(K=n.R16UI),D===n.UNSIGNED_INT&&(K=n.R32UI),D===n.BYTE&&(K=n.R8I),D===n.SHORT&&(K=n.R16I),D===n.INT&&(K=n.R32I)),M===n.RG&&(D===n.FLOAT&&(K=n.RG32F),D===n.HALF_FLOAT&&(K=n.RG16F),D===n.UNSIGNED_BYTE&&(K=n.RG8),D===n.UNSIGNED_SHORT&&lt&&(K=lt.RG16_EXT),D===n.SHORT&&lt&&(K=lt.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(K=n.RG8UI),D===n.UNSIGNED_SHORT&&(K=n.RG16UI),D===n.UNSIGNED_INT&&(K=n.RG32UI),D===n.BYTE&&(K=n.RG8I),D===n.SHORT&&(K=n.RG16I),D===n.INT&&(K=n.RG32I)),M===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(K=n.RGB8UI),D===n.UNSIGNED_SHORT&&(K=n.RGB16UI),D===n.UNSIGNED_INT&&(K=n.RGB32UI),D===n.BYTE&&(K=n.RGB8I),D===n.SHORT&&(K=n.RGB16I),D===n.INT&&(K=n.RGB32I)),M===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),D===n.UNSIGNED_INT&&(K=n.RGBA32UI),D===n.BYTE&&(K=n.RGBA8I),D===n.SHORT&&(K=n.RGBA16I),D===n.INT&&(K=n.RGBA32I)),M===n.RGB&&(D===n.UNSIGNED_SHORT&&lt&&(K=lt.RGB16_EXT),D===n.SHORT&&lt&&(K=lt.RGB16_SNORM_EXT),D===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),M===n.RGBA){let X=ot?Qn:Yt.getTransfer(_);D===n.FLOAT&&(K=n.RGBA32F),D===n.HALF_FLOAT&&(K=n.RGBA16F),D===n.UNSIGNED_BYTE&&(K=X===Xt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT&&lt&&(K=lt.RGBA16_EXT),D===n.SHORT&&lt&&(K=lt.RGBA16_SNORM_EXT),D===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function g(S,M){let D;return S?M===null||M===ni||M===rn?D=n.DEPTH24_STENCIL8:M===si?D=n.DEPTH32F_STENCIL8:M===Bn&&(D=n.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ni||M===rn?D=n.DEPTH_COMPONENT24:M===si?D=n.DEPTH_COMPONENT32F:M===Bn&&(D=n.DEPTH_COMPONENT16),D}function x(S,M){return b(S)===!0||S.isFramebufferTexture&&S.minFilter!==Ee&&S.minFilter!==Ae?Math.log2(Math.max(M.width,M.height))+1:S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?M.mipmaps.length:1}function P(S){let M=new WeakRef(S);i.get(S).__ref=M,E.add(M),y.register(S,M,M)}function z(S){let M=i.get(S).__ref;M!==void 0&&(E.delete(M),y.unregister(M))}function Z(S){H(S.target)}function Y(S){k(S.target)}function H(S){S.removeEventListener("dispose",Z),z(S),j(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&f.delete(S)}function k(S){S.removeEventListener("dispose",Y),z(S),at(S)}function G(){for(let S of E){let M=S.deref();M!==void 0&&(M.isRenderTarget===!0?k(M):H(M))}E.clear(),f.clear()}function j(S){let M=i.get(S);if(M.__webglInit===void 0)return;let D=S.source,st=p.get(D);if(st){let _=st[M.__cacheKey];_.usedTimes--,_.usedTimes===0&&L(S),Object.keys(st).length===0&&p.delete(D)}i.remove(S)}function L(S){let M=i.get(S);n.deleteTexture(M.__webglTexture);let D=S.source,st=p.get(D);delete st[M.__cacheKey],a.memory.textures--}function at(S){let M=i.get(S);M.__depthDisposeCallback&&M.__depthDisposeCallback();let D=S.depthTexture;if(D&&D.renderTarget===S&&H(D),S.isWebGLCubeRenderTarget)for(let _=0;_<6;_++){if(Array.isArray(M.__webglFramebuffer[_]))for(let ot=0;ot<M.__webglFramebuffer[_].length;ot++)n.deleteFramebuffer(M.__webglFramebuffer[_][ot]);else n.deleteFramebuffer(M.__webglFramebuffer[_]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[_])}else{if(Array.isArray(M.__webglFramebuffer))for(let _=0;_<M.__webglFramebuffer.length;_++)n.deleteFramebuffer(M.__webglFramebuffer[_]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let _=0;_<M.__webglColorRenderbuffer.length;_++)M.__webglColorRenderbuffer[_]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[_]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let st=S.textures;for(let _=0,ot=st.length;_<ot;_++){let lt=i.get(st[_]);lt.__webglTexture&&(n.deleteTexture(lt.__webglTexture),a.memory.textures--),i.remove(st[_])}i.remove(S)}let q=0;function $(){q=0}function it(){return q}function yt(S){q=S}function zt(){let S=q;return S>=s.maxTextures&&kt("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,S}function O(S){let M=[];return M.push(S.wrapS),M.push(S.wrapT),M.push(S.wrapR||0),M.push(S.magFilter),M.push(S.minFilter),M.push(S.anisotropy),M.push(S.internalFormat),M.push(S.format),M.push(S.type),M.push(S.generateMipmaps),M.push(S.mipmapsAutoUpdate),M.push(S.premultiplyAlpha),M.push(S.flipY),M.push(S.unpackAlignment),M.push(S.colorSpace),M.join()}function dt(S,M){let D=i.get(S);if(S.isVideoTexture&&se(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&D.__version!==S.version){let st=S.image;if(st===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{le(D,S,M);return}}else S.isExternalTexture&&(D.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+M)}function Et(S,M){let D=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){le(D,S,M);return}else S.isExternalTexture&&(D.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+M)}function wt(S,M){let D=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){le(D,S,M);return}e.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+M)}function ft(S,M){let D=i.get(S);if(S.version>0&&D.__version!==S.version){Ie(D,S,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+M)}let Jt={[js]:n.REPEAT,[Oe]:n.CLAMP_TO_EDGE,[_s]:n.MIRRORED_REPEAT},oe={[Ee]:n.NEAREST,[Vl]:n.NEAREST_MIPMAP_NEAREST,[ss]:n.NEAREST_MIPMAP_LINEAR,[Ae]:n.LINEAR,[wr]:n.LINEAR_MIPMAP_NEAREST,[ii]:n.LINEAR_MIPMAP_LINEAR},Tt={[Wl]:n.NEVER,[Mo]:n.ALWAYS,[Ol]:n.LESS,[mo]:n.LEQUAL,[ql]:n.EQUAL,[go]:n.GEQUAL,[Kl]:n.GREATER,[Hl]:n.NOTEQUAL};function qt(S,M){if(M.type===si&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ae||M.magFilter===wr||M.magFilter===ss||M.magFilter===ii||M.minFilter===Ae||M.minFilter===wr||M.minFilter===ss||M.minFilter===ii)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,Jt[M.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,Jt[M.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,Jt[M.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,oe[M.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,oe[M.minFilter]),M.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Tt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ee||M.minFilter!==ss&&M.minFilter!==ii||M.type===si&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Kt(S,M){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,M.addEventListener("dispose",Z),P(M));let st=M.source,_=p.get(st);_===void 0&&(_={},p.set(st,_));let ot=O(M);if(ot!==S.__cacheKey){_[ot]===void 0&&(_[ot]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),_[ot].usedTimes++;let lt=_[S.__cacheKey];lt!==void 0&&(_[S.__cacheKey].usedTimes--,lt.usedTimes===0&&L(M)),S.__cacheKey=ot,S.__webglTexture=_[ot].texture}return D}function Nt(S,M,D){return Math.floor(Math.floor(S/D)/M)}function ue(S,M,D,st){let ot=S.updateRanges;if(ot.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,D,st,M.data);else{ot.sort((C,N)=>C.start-N.start);let lt=0;for(let C=1;C<ot.length;C++){let N=ot[lt],U=ot[C],tt=N.start+N.count,et=Nt(U.start,M.width,4),rt=Nt(N.start,M.width,4);U.start<=tt+1&&et===rt&&Nt(U.start+U.count-1,M.width,4)===et?N.count=Math.max(N.count,U.start+U.count-N.start):(++lt,ot[lt]=U)}ot.length=lt+1;let K=e.getParameter(n.UNPACK_ROW_LENGTH),X=e.getParameter(n.UNPACK_SKIP_PIXELS),W=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let C=0,N=ot.length;C<N;C++){let U=ot[C],tt=Math.floor(U.start/4),et=Math.ceil(U.count/4),rt=tt%M.width,gt=Math.floor(tt/M.width),bt=et,nt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(n.UNPACK_SKIP_ROWS,gt),e.texSubImage2D(n.TEXTURE_2D,0,rt,gt,bt,nt,D,st,M.data)}S.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,K),e.pixelStorei(n.UNPACK_SKIP_PIXELS,X),e.pixelStorei(n.UNPACK_SKIP_ROWS,W)}}function le(S,M,D){let st=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(st=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(st=n.TEXTURE_3D);let _=Kt(S,M),ot=M.source;e.bindTexture(st,S.__webglTexture,n.TEXTURE0+D);let lt=i.get(ot);if(ot.version!==lt.__version||_===!0){if(e.activeTexture(n.TEXTURE0+D),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let nt=Yt.getPrimaries(Yt.workingColorSpace),xt=M.colorSpace===oi?null:Yt.getPrimaries(M.colorSpace),Bt=M.colorSpace===oi||nt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt)}e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let X=I(M.image,!1,s.maxTextureSize);X=vt(M,X);let W=r.convert(M.format,M.colorSpace),C=r.convert(M.type),N=w(M.internalFormat,W,C,M.normalized,M.colorSpace,M.isVideoTexture);qt(st,M);let U,tt=M.mipmaps,et=M.isVideoTexture!==!0,rt=lt.__version===void 0||_===!0,gt=ot.dataReady,bt=x(M,X);if(M.isDepthTexture)N=g(M.format===vi,M.type),rt&&(et?e.texStorage2D(n.TEXTURE_2D,1,N,X.width,X.height):e.texImage2D(n.TEXTURE_2D,0,N,X.width,X.height,0,W,C,null));else if(M.isDataTexture)if(tt.length>0){et&&rt&&e.texStorage2D(n.TEXTURE_2D,bt,N,tt[0].width,tt[0].height);for(let nt=0,xt=tt.length;nt<xt;nt++)U=tt[nt],et?gt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,U.width,U.height,W,C,U.data):e.texImage2D(n.TEXTURE_2D,nt,N,U.width,U.height,0,W,C,U.data);M.generateMipmaps=!1}else et?(rt&&e.texStorage2D(n.TEXTURE_2D,bt,N,X.width,X.height),gt&&ue(M,X,W,C)):e.texImage2D(n.TEXTURE_2D,0,N,X.width,X.height,0,W,C,X.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){et&&rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,N,tt[0].width,tt[0].height,X.depth);for(let nt=0,xt=tt.length;nt<xt;nt++)if(U=tt[nt],M.format!==ai)if(W!==null)if(et){if(gt)if(M.layerUpdates.size>0){let Bt=Co(U.width,U.height,M.format,M.type);for(let pt of M.layerUpdates){let Wt=U.data.subarray(pt*Bt/U.data.BYTES_PER_ELEMENT,(pt+1)*Bt/U.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,pt,U.width,U.height,1,W,Wt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,U.width,U.height,X.depth,W,U.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,N,U.width,U.height,X.depth,0,U.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?gt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,U.width,U.height,X.depth,W,C,U.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,N,U.width,U.height,X.depth,0,W,C,U.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{et&&rt&&e.texStorage2D(n.TEXTURE_2D,bt,N,tt[0].width,tt[0].height);for(let nt=0,xt=tt.length;nt<xt;nt++)U=tt[nt],M.format!==ai?W!==null?et?gt&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,U.width,U.height,W,U.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,N,U.width,U.height,0,U.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?gt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,U.width,U.height,W,C,U.data):e.texImage2D(n.TEXTURE_2D,nt,N,U.width,U.height,0,W,C,U.data)}else if(M.isDataArrayTexture)if(et){if(rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,N,X.width,X.height,X.depth),gt)if(M.layerUpdates.size>0){let nt=Co(X.width,X.height,M.format,M.type);for(let xt of M.layerUpdates){let Bt=X.data.subarray(xt*nt/X.data.BYTES_PER_ELEMENT,(xt+1)*nt/X.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xt,X.width,X.height,1,W,C,Bt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,W,C,X.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,N,X.width,X.height,X.depth,0,W,C,X.data);else if(M.isData3DTexture)et?(rt&&e.texStorage3D(n.TEXTURE_3D,bt,N,X.width,X.height,X.depth),gt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,W,C,X.data)):e.texImage3D(n.TEXTURE_3D,0,N,X.width,X.height,X.depth,0,W,C,X.data);else if(M.isFramebufferTexture){if(rt)if(et)e.texStorage2D(n.TEXTURE_2D,bt,N,X.width,X.height);else{let nt=X.width,xt=X.height;for(let Bt=0;Bt<bt;Bt++)e.texImage2D(n.TEXTURE_2D,Bt,N,nt,xt,0,W,C,null),nt>>=1,xt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let nt=n.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),X.parentNode!==nt){nt.appendChild(X),f.add(M),nt.onpaint=xt=>{let Bt=xt.changedElements;for(let pt of f)Bt.includes(pt.image)&&(pt.needsUpdate=!0)},nt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,X);else{let Bt=n.RGBA,pt=n.RGBA,Wt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Bt,pt,Wt,X)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(tt.length>0){if(et&&rt){let nt=Rt(tt[0]);e.texStorage2D(n.TEXTURE_2D,bt,N,nt.width,nt.height)}for(let nt=0,xt=tt.length;nt<xt;nt++)U=tt[nt],et?gt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,W,C,U):e.texImage2D(n.TEXTURE_2D,nt,N,W,C,U);M.generateMipmaps=!1}else if(et){if(rt){let nt=Rt(X);e.texStorage2D(n.TEXTURE_2D,bt,N,nt.width,nt.height)}gt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,W,C,X)}else e.texImage2D(n.TEXTURE_2D,0,N,W,C,X);b(M)&&M.mipmapsAutoUpdate===!0&&v(st),lt.__version=ot.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function Ie(S,M,D){if(M.image.length!==6)return;let st=Kt(S,M),_=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+D);let ot=i.get(_);if(_.version!==ot.__version||st===!0){e.activeTexture(n.TEXTURE0+D);let lt=Yt.getPrimaries(Yt.workingColorSpace),K=M.colorSpace===oi?null:Yt.getPrimaries(M.colorSpace),X=M.colorSpace===oi||lt===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);let W=M.isCompressedTexture||M.image[0].isCompressedTexture,C=M.image[0]&&M.image[0].isDataTexture,N=[];for(let pt=0;pt<6;pt++)!W&&!C?N[pt]=I(M.image[pt],!0,s.maxCubemapSize):N[pt]=C?M.image[pt].image:M.image[pt],N[pt]=vt(M,N[pt]);let U=N[0],tt=r.convert(M.format,M.colorSpace),et=r.convert(M.type),rt=w(M.internalFormat,tt,et,M.normalized,M.colorSpace),gt=M.isVideoTexture!==!0,bt=ot.__version===void 0||st===!0,nt=_.dataReady,xt=x(M,U);qt(n.TEXTURE_CUBE_MAP,M);let Bt;if(M.isDepthTexture){if(rt=g(M.format===vi,M.type),bt)if(gt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,rt,U.width,U.height);else for(let pt=0;pt<6;pt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,rt,U.width,U.height,0,tt,et,null)}else if(W){gt&&bt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,rt,U.width,U.height);for(let pt=0;pt<6;pt++){Bt=N[pt].mipmaps;for(let Wt=0;Wt<Bt.length;Wt++){let ce=Bt[Wt];M.format!==ai?tt!==null?gt?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Wt,0,0,ce.width,ce.height,tt,ce.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Wt,rt,ce.width,ce.height,0,ce.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):gt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Wt,0,0,ce.width,ce.height,tt,et,ce.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Wt,rt,ce.width,ce.height,0,tt,et,ce.data)}}}else{if(Bt=M.mipmaps,gt&&bt){Bt.length>0&&xt++;let pt=Rt(N[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,rt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(C){gt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,N[pt].width,N[pt].height,tt,et,N[pt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,rt,N[pt].width,N[pt].height,0,tt,et,N[pt].data);for(let Wt=0;Wt<Bt.length;Wt++){let wi=Bt[Wt].image[pt].image;gt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Wt+1,0,0,wi.width,wi.height,tt,et,wi.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Wt+1,rt,wi.width,wi.height,0,tt,et,wi.data)}}else{gt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,tt,et,N[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,rt,tt,et,N[pt]);for(let Wt=0;Wt<Bt.length;Wt++){let ce=Bt[Wt];gt?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Wt+1,0,0,tt,et,ce.image[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Wt+1,rt,tt,et,ce.image[pt])}}}b(M)&&M.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),ot.__version=_.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function ee(S,M,D,st,_,ot){let lt=r.convert(D.format,D.colorSpace),K=r.convert(D.type),X=w(D.internalFormat,lt,K,D.normalized,D.colorSpace),W=i.get(M),C=i.get(D);if(C.__renderTarget=M,!W.__hasExternalTextures){let N=Math.max(1,M.width>>ot),U=Math.max(1,M.height>>ot);_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY?e.texImage3D(_,ot,X,N,U,M.depth,0,lt,K,null):e.texImage2D(_,ot,X,N,U,0,lt,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),ut(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,_,C.__webglTexture,0,$t(M)):(_===n.TEXTURE_2D||_>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&_<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,st,_,C.__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(S,M,D){if(n.bindRenderbuffer(n.RENDERBUFFER,S),M.depthBuffer){let st=M.depthTexture,_=st&&st.isDepthTexture?st.type:null,ot=g(M.stencilBuffer,_),lt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ut(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t(M),ot,M.width,M.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t(M),ot,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ot,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,S)}else{let st=M.textures;for(let _=0;_<st.length;_++){let ot=st[_],lt=r.convert(ot.format,ot.colorSpace),K=r.convert(ot.type),X=w(ot.internalFormat,lt,K,ot.normalized,ot.colorSpace);ut(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t(M),X,M.width,M.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t(M),X,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,X,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(S,M,D){let st=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let _=i.get(M.depthTexture);_.__renderTarget=M;let ot=st?M.depthTexture.image[0]:M.depthTexture.image;(!_.__webglTexture||ot.width!==M.width||ot.height!==M.height)&&(ot.width=M.width,ot.height=M.height,M.depthTexture.needsUpdate=!0),st?ft(M.depthTexture,0):dt(M.depthTexture,0);let lt=_.__webglTexture,K=$t(M),X=st?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,W=M.depthTexture.format===vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===yi)ut(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,X,lt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,W,X,lt,0);else if(M.depthTexture.format===vi)ut(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,X,lt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,W,X,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Te(S){let M=i.get(S),D=S.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==S.depthTexture){let st=S.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),st){let _=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,st.removeEventListener("dispose",_)};st.addEventListener("dispose",_),M.__depthDisposeCallback=_}M.__boundDepthTexture=st}if(S.depthTexture&&!M.__autoAllocateDepthBuffer)if(D)for(let st=0;st<6;st++)he(M.__webglFramebuffer[st],S,st);else S.texture.mipmaps.length>0?he(M.__webglFramebuffer[0],S,0):he(M.__webglFramebuffer,S,0);else if(D){M.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[st]),M.__webglDepthbuffer[st]===void 0)M.__webglDepthbuffer[st]=n.createRenderbuffer(),Je(M.__webglDepthbuffer[st],S,!1);else{let _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer[st];n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,_,n.RENDERBUFFER,ot)}}else if(S.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Je(M.__webglDepthbuffer,S,!1);else{let _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,_,n.RENDERBUFFER,ot)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(S,M,D){let st=i.get(S);M!==void 0&&ee(st.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Te(S)}function Re(S){let M=S.texture,D=i.get(S),st=i.get(M);S.addEventListener("dispose",Y),P(S);let _=S.textures,ot=S.isWebGLCubeRenderTarget===!0,lt=_.length>1;if(lt||(st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture()),st.__version=M.version,a.memory.textures++),ot){D.__webglFramebuffer=[];for(let K=0;K<6;K++)if(M.mipmaps.length>0){D.__webglFramebuffer[K]=[];for(let X=0;X<M.mipmaps.length;X++)D.__webglFramebuffer[K][X]=n.createFramebuffer()}else D.__webglFramebuffer[K]=n.createFramebuffer()}else{if(M.mipmaps.length>0){D.__webglFramebuffer=[];for(let K=0;K<M.mipmaps.length;K++)D.__webglFramebuffer[K]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(lt)for(let K=0,X=_.length;K<X;K++){let W=i.get(_[K]);W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&ut(S)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let K=0;K<_.length;K++){let X=_[K];D.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[K]);let W=r.convert(X.format,X.colorSpace),C=r.convert(X.type),N=w(X.internalFormat,W,C,X.normalized,X.colorSpace,S.isXRRenderTarget===!0),U=$t(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,U,N,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,D.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Je(D.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),qt(n.TEXTURE_CUBE_MAP,M);for(let K=0;K<6;K++)if(M.mipmaps.length>0)for(let X=0;X<M.mipmaps.length;X++)ee(D.__webglFramebuffer[K][X],S,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,X);else ee(D.__webglFramebuffer[K],S,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);b(M)?v(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(lt){for(let K=0,X=_.length;K<X;K++){let W=_[K],C=i.get(W),N=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(N=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(N,C.__webglTexture),qt(N,W),ee(D.__webglFramebuffer,S,W,n.COLOR_ATTACHMENT0+K,N,0),b(W)&&v(N)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(K=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,st.__webglTexture),qt(K,M),M.mipmaps.length>0)for(let X=0;X<M.mipmaps.length;X++)ee(D.__webglFramebuffer[X],S,M,n.COLOR_ATTACHMENT0,K,X);else ee(D.__webglFramebuffer,S,M,n.COLOR_ATTACHMENT0,K,0);b(M)?v(K):M.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}S.depthBuffer&&Te(S)}function B(S){let M=S.textures;for(let D=0,st=M.length;D<st;D++){let _=M[D];if(b(_)&&_.mipmapsAutoUpdate===!0){let ot=T(S),lt=i.get(_).__webglTexture;e.bindTexture(ot,lt),v(ot),e.unbindTexture()}}}let ke=[];function _t(S){if(S.samples>0){if(ut(S)===!1){let M=S.textures,D=S.width,st=S.height,_=n.COLOR_BUFFER_BIT,ot=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(S),K=M.length>1;if(K)for(let W=0;W<M.length;W++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),S.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let W=0;W<M.length;W++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(_|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(_|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[W]);let C=i.get(M[W]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,C,0)}n.blitFramebuffer(0,0,D,st,0,0,D,st,_,n.NEAREST),h===!0&&(ke.length=0,ke.push(n.COLOR_ATTACHMENT0+W),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&ke.push(ot),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ke))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let W=0;W<M.length;W++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,lt.__webglColorRenderbuffer[W]);let C=i.get(M[W]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.TEXTURE_2D,C,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&h){let M=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function $t(S){return Math.min(s.maxSamples,S.samples)}function ut(S){let M=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function se(S){let M=a.render.frame;u.get(S)!==M&&(u.set(S,M),S.update())}function vt(S,M){let D=S.colorSpace,st=S.format,_=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||D!==Yn&&D!==oi&&(Yt.getTransfer(D)===Xt?(st!==ai||_!==Le)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",D)),M}function Rt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=zt,this.resetTextureUnits=$,this.getTextureUnits=it,this.setTextureUnits=yt,this.setTexture2D=dt,this.setTexture2DArray=Et,this.setTexture3D=wt,this.setTextureCube=ft,this.rebindTextures=ye,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=ut,this.dispose=G}function am(n,t){function e(i,s=oi){let r,a=Yt.getTransfer(s);if(i===Le)return n.UNSIGNED_BYTE;if(i===Tr)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rr)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lo)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ho)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ao)return n.BYTE;if(i===oo)return n.SHORT;if(i===Bn)return n.UNSIGNED_SHORT;if(i===br)return n.INT;if(i===ni)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===ri)return n.HALF_FLOAT;if(i===co)return n.ALPHA;if(i===uo)return n.RGB;if(i===ai)return n.RGBA;if(i===yi)return n.DEPTH_COMPONENT;if(i===vi)return n.DEPTH_STENCIL;if(i===fo)return n.RED;if(i===kr)return n.RED_INTEGER;if(i===Vi)return n.RG;if(i===zr)return n.RG_INTEGER;if(i===Br)return n.RGBA_INTEGER;if(i===rs||i===as||i===os||i===ls)if(a===Xt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===rs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===as)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===rs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===as)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===os)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ls)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zr||i===Dr||i===Jr||i===Ur)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ur)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fr||i===Pr||i===Nr||i===Gr||i===Vr||i===hs||i===Yr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fr||i===Pr)return a===Xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Nr)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gr)return r.COMPRESSED_R11_EAC;if(i===Vr)return r.COMPRESSED_SIGNED_R11_EAC;if(i===hs)return r.COMPRESSED_RG11_EAC;if(i===Yr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Qr||i===Lr||i===Wr||i===Or||i===qr||i===Kr||i===Hr||i===Xr||i===jr||i===_r||i===$r||i===ta||i===ea||i===ia)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Qr)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lr)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wr)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Or)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qr)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kr)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hr)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xr)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jr)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_r)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$r)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ta)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ea)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ia)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===na||i===sa||i===ra)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===na)return a===Xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===aa||i===oa||i===cs||i===la)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===la)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var om=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lm=`
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

}`,Zo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new $n(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ye({vertexShader:om,fragmentShader:lm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new $i(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Do=class extends hi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",h=1,l=null,u=null,f=null,c=null,p=null,E=null,y=typeof XRWebGLBinding<"u",m=new Zo,d={},I=e.getContextAttributes(),b=null,v=null,T=[],w=[],g=new Ft,x=null,P=null,z=new Ne;z.viewport=new jt;let Z=new Ne;Z.viewport=new jt;let Y=[z,Z],H=new yr,k=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let dt=T[O];return dt===void 0&&(dt=new wn,T[O]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(O){let dt=T[O];return dt===void 0&&(dt=new wn,T[O]=dt),dt.getGripSpace()},this.getHand=function(O){let dt=T[O];return dt===void 0&&(dt=new wn,T[O]=dt),dt.getHandSpace()};function j(O){let dt=w.indexOf(O.inputSource);if(dt===-1)return;let Et=T[dt];Et!==void 0&&(Et.update(O.inputSource,O.frame,l||a),Et.dispatchEvent({type:O.type,data:O.inputSource}))}function L(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",at);for(let O=0;O<T.length;O++){let dt=w[O];dt!==null&&(w[O]=null,T[O].disconnect(dt))}k=null,G=null,m.reset();for(let O in d)delete d[O];if(t.setRenderTarget(b),p=null,c=null,f=null,s=null,v=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(g.width,g.height,!1),P!==null){let O=P.camera;O.fov=P.fov,O.zoom=P.zoom,O.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,i.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return c!==null?c:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",L),s.addEventListener("inputsourceschange",at),I.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(g),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,wt=null,ft=null;I.depth&&(ft=I.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=I.stencil?vi:yi,wt=I.stencil?rn:ni);let Jt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};f=this.getBinding(),c=f.createProjectionLayer(Jt),s.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),v=new Ge(c.textureWidth,c.textureHeight,{format:ai,type:Le,depthTexture:new xi(c.textureWidth,c.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}else{let Et={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ge(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Le,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(h),l=null,a=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at(O){for(let dt=0;dt<O.removed.length;dt++){let Et=O.removed[dt],wt=w.indexOf(Et);wt>=0&&(w[wt]=null,T[wt].disconnect(Et))}for(let dt=0;dt<O.added.length;dt++){let Et=O.added[dt],wt=w.indexOf(Et);if(wt===-1){for(let Jt=0;Jt<T.length;Jt++)if(Jt>=w.length){w.push(Et),wt=Jt;break}else if(w[Jt]===null){w[Jt]=Et,wt=Jt;break}if(wt===-1)break}let ft=T[wt];ft&&ft.connect(Et)}}function q(O,dt){dt===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(dt.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let dt=O.near,Et=O.far;m.texture!==null&&(m.depthNear>0&&(dt=m.depthNear),m.depthFar>0&&(Et=m.depthFar)),H.near=Z.near=z.near=dt,H.far=Z.far=z.far=Et,(k!==H.near||G!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),k=H.near,G=H.far),H.layers.mask=O.layers.mask|6,z.layers.mask=H.layers.mask&-5,Z.layers.mask=H.layers.mask&-3;let wt=O.parent,ft=H.cameras;q(H,wt);for(let Jt=0;Jt<ft.length;Jt++)q(ft[Jt],wt);H.projectionMatrix.copy(z.projectionMatrix),H.projectionMatrixInverse.copy(z.projectionMatrixInverse),P===null&&O.isPerspectiveCamera&&(P={camera:O,fov:O.fov,zoom:O.zoom}),$(O,H,wt)};function $(O,dt,Et){Et===null?O.matrix.copy(dt.matrixWorld):(O.matrix.copy(Et.matrixWorld),O.matrix.invert(),O.matrix.multiply(dt.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(dt.projectionMatrix),O.projectionMatrixInverse.copy(dt.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=tr*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(c===null&&p===null))return h},this.setFoveation=function(O){h=O,c!==null&&(c.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(O){return d[O]};let it=null;function yt(O,dt){if(u=dt.getViewerPose(l||a),E=dt,u!==null){let Et=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let wt=!1;Et.length!==H.cameras.length&&(H.cameras.length=0,wt=!0);for(let Tt=0;Tt<Et.length;Tt++){let qt=Et[Tt],Kt=null;if(p!==null)Kt=p.getViewport(qt);else{let ue=f.getViewSubImage(c,qt);Kt=ue.viewport,Tt===0&&(t.setRenderTargetTextures(v,ue.colorTexture,ue.depthStencilTexture),t.setRenderTarget(v))}let Nt=Y[Tt];Nt===void 0&&(Nt=new Ne,Nt.layers.enable(Tt),Nt.viewport=new jt,Y[Tt]=Nt),Nt.matrix.fromArray(qt.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(qt.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Tt===0&&(H.matrix.copy(Nt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),wt===!0&&H.cameras.push(Nt)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let Tt=f.getDepthInformation(Et[0]);Tt&&Tt.isValid&&Tt.texture&&m.init(Tt,s.renderState)}if(ft&&ft.includes("camera-access")&&y){t.state.unbindTexture(),f=i.getBinding();for(let Tt=0;Tt<Et.length;Tt++){let qt=Et[Tt].camera;if(qt){let Kt=d[qt];Kt||(Kt=new $n,d[qt]=Kt);let Nt=f.getCameraImage(qt);Kt.sourceTexture=Nt}}}}for(let Et=0;Et<T.length;Et++){let wt=w[Et],ft=T[Et];wt!==null&&ft!==void 0&&ft.update(wt,dt,l||a)}it&&it(O,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),E=null}let zt=new bh;zt.setAnimationLoop(yt),this.setAnimationLoop=function(O){it=O},this.dispose=function(){}}},hm=new ae,Fh=new Dt;Fh.set(-1,0,0,0,1,0,0,0,1);function cm(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,So(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,I,b,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),c(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),E(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?h(m,d,I,b):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===De&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===De&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let I=t.get(d),b=I.envMap,v=I.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(hm.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Fh),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function h(m,d,I,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*I,m.scale.value=b*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function c(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,I){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,e(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===De&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=I.texture,m.transmissionSamplerSize.value.set(I.width,I.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function E(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let I=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(I.matrixWorld),m.nearDistance.value=I.shadow.camera.near,m.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function um(n,t,e,i){let s={},r={};function a(I,b){let v=b.program;i.uniformBlockBinding(I,v,s[I.id])}function o(I,b){let v=s[I.id];v===void 0&&(E(I),v=h(I),s[I.id]=v,I.addEventListener("dispose",m));let T=b.program;i.updateUBOMapping(I,T);let w=t.render.frame;r[I.id]!==w&&(l(I),r[I.id]=w)}function h(I){let b=n.createBuffer(),v=I.__size,T=I.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,v,T),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function l(I){let b=s[I.id],v=I.uniforms,T=I.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,g=v.length;w<g;w++){let x=v[w];if(Array.isArray(x))for(let P=0,z=x.length;P<z;P++)u(x[P],w,P,T);else u(x,w,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(I,b,v,T){if(c(I,b,v,T)===!0){let w=I.__offset,g=I.value;if(Array.isArray(g)){let x=0;for(let P=0;P<g.length;P++){let z=g[P],Z=y(z,!0);f(z,I.__data,x),x+=Z.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,I.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,I.__data)}}function f(I,b,v){typeof I=="number"||typeof I=="boolean"?b[v]=I:I.isMatrix3?(b[v]=I.elements[0],b[v+1]=I.elements[1],b[v+2]=I.elements[2],b[v+3]=0,b[v+4]=I.elements[3],b[v+5]=I.elements[4],b[v+6]=I.elements[5],b[v+7]=0,b[v+8]=I.elements[6],b[v+9]=I.elements[7],b[v+10]=I.elements[8],b[v+11]=0):ArrayBuffer.isView(I)?b.set(I.subarray(0,b.length-v),v):I.toArray(b,v)}function c(I,b,v,T){let w=I.value,g=b+"_"+v;if(Array.isArray(w)){T[g]===void 0&&(T[g]=[]);let x=T[g],P=!1;for(let z=0;z<w.length;z++)p(w[z],x,z)===!0&&(P=!0);return P}return p(w,T,g)}function p(I,b,v){if(b[v]===void 0)return typeof I=="number"||typeof I=="boolean"?b[v]=I:ArrayBuffer.isView(I)?b[v]=I.slice():b[v]=I.clone(),!0;{let T=b[v];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return b[v]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(T.equals(I)===!1)return T.copy(I),!0}}return!1}function E(I){let b=I.uniforms,v=0,T=16;for(let g=0,x=b.length;g<x;g++){let P=Array.isArray(b[g])?b[g]:[b[g]];for(let z=0,Z=P.length;z<Z;z++){let Y=P[z],H=Array.isArray(Y.value)?Y.value:[Y.value],k=Array.isArray(b[g])||Array.isArray(Y.value),G=v;for(let L=0,at=H.length;L<at;L++){let q=H[L],$=y(q,k),it=v%T,yt=it%$.boundary,zt=it+yt;v+=yt,zt!==0&&T-zt<$.storage&&(v+=T-zt),L===0&&(G=v),v+=$.storage}let j=Y.type==="int"?Int32Array:Y.type==="uint"?Uint32Array:Float32Array;Y.__data=new j((v-G)/Float32Array.BYTES_PER_ELEMENT),Y.__offset=G}}let w=v%T;return w>0&&(v+=T-w),I.__size=v,I.__cache={},this}function y(I,b){let v={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(v.boundary=4,v.storage=4):I.isVector2?(v.boundary=8,v.storage=8):I.isVector3||I.isColor?(v.boundary=16,v.storage=12):I.isVector4?(v.boundary=16,v.storage=16):I.isMatrix3?(v.boundary=16,v.storage=48):I.isMatrix4?(v.boundary=16,v.storage=64):I.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(I)?(v.boundary=16,v.storage=I.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",I),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(I){let b=I.target;b.removeEventListener("dispose",m),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(let I in s)n.deleteBuffer(s[I]);s={},r={}}return{bind:a,update:o,dispose:d}}var dm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function fm(){return fi===null&&(fi=new rr(dm,16,16,Vi,ri),fi.name="DFG_LUT",fi.minFilter=Ae,fi.magFilter=Ae,fi.wrapS=Oe,fi.wrapT=Oe,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var da=class{constructor(t={}){let{canvas:e=jl(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:c=!1,outputBufferType:p=Le}=t;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=a;let y=p,m=new Set([Br,zr,kr]),d=new Set([Le,ni,Bn,rn,Tr,Rr]),I=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},T=null,w=null,g=[],x=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let z=this,Z=!1,Y=null,H=null,k=null,G=null;this._outputColorSpace=Be;let j=0,L=0,at=null,q=-1,$=null,it=new jt,yt=new jt,zt=null,O=new Qt(0),dt=0,Et=e.width,wt=e.height,ft=1,Jt=null,oe=null,Tt=new jt(0,0,Et,wt),qt=new jt(0,0,Et,wt),Kt=!1,Nt=new ji,ue=new ar,le=!1,Ie=!1,ee=new ae,Je=new V,he=new jt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function Re(){return at===null?ft:1}let B=i;function ke(A,R){return e.getContext(A,R)}let _t,$t,ut,se,vt,Rt,S,M,D,st,_,ot,lt,K,X,W,C,N,U,tt,et,rt,gt;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xr}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Bt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),B===null){let R="webgl2";if(B=ke(R,A),B===null)throw ke(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}bt()}catch(A){throw e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Zt("WebGLRenderer: "+A.message),A}function bt(){_t=new Cf(B),_t.init(),et=new am(B,_t),$t=new ff(B,_t,t,et),ut=new sm(B,_t),$t.reversedDepthBuffer&&c&&ut.buffers.depth.setReversed(!0),H=B.createFramebuffer(),k=B.createFramebuffer(),G=B.createFramebuffer(),se=new bf(B),vt=new Lp,Rt=new rm(B,_t,ut,vt,$t,et,se),S=new xf(z),M=new Tc(B),rt=new uf(B,M),D=new vf(B,M,se,rt),st=new Rf(B,D,M,rt,se),N=new Tf(B,$t,Rt),X=new pf(vt),_=new Qp(z,S,_t,$t,rt,X),ot=new cm(z,vt),lt=new Op,K=new _p(_t),C=new cf(z,S,ut,st,E,h),W=new nm(z,st,$t),gt=new um(B,se,$t,ut),U=new df(B,_t,se),tt=new wf(B,_t,se),se.programs=_.programs,z.capabilities=$t,z.extensions=_t,z.properties=vt,z.renderLists=lt,z.shadowMap=W,z.state=ut,z.info=se}y!==Le&&(P=new zf(y,e.width,e.height,o,s,r));let nt=new Do(z,B);this.xr=nt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let A=_t.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=_t.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(A){A!==void 0&&(ft=A,this.setSize(Et,wt,!1))},this.getSize=function(A){return A.set(Et,wt)},this.setSize=function(A,R,Q=!0){if(nt.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=A,wt=R,e.width=Math.floor(A*ft),e.height=Math.floor(R*ft),Q===!0&&(e.style.width=A+"px",e.style.height=R+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,A,R)},this.getDrawingBufferSize=function(A){return A.set(Et*ft,wt*ft).floor()},this.setDrawingBufferSize=function(A,R,Q){Et=A,wt=R,ft=Q,e.width=Math.floor(A*Q),e.height=Math.floor(R*Q),this.setViewport(0,0,A,R)},this.setEffects=function(A){if(y===Le){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let R=0;R<A.length;R++)if(A[R].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(it)},this.getViewport=function(A){return A.copy(Tt)},this.setViewport=function(A,R,Q,J){A.isVector4?Tt.set(A.x,A.y,A.z,A.w):Tt.set(A,R,Q,J),ut.viewport(it.copy(Tt).multiplyScalar(Re()).round())},this.getScissor=function(A){return A.copy(qt)},this.setScissor=function(A,R,Q,J){A.isVector4?qt.set(A.x,A.y,A.z,A.w):qt.set(A,R,Q,J),ut.scissor(yt.copy(qt).multiplyScalar(Re()).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(A){ut.setScissorTest(Kt=A)},this.setOpaqueSort=function(A){Jt=A},this.setTransparentSort=function(A){oe=A},this.getClearColor=function(A){return A.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(A=!0,R=!0,Q=!0){let J=0;if(A){let F=!1;if(at!==null){let ct=at.texture.format;F=m.has(ct)}if(F){let ct=at.texture.type,At=d.has(ct),ht=C.getClearColor(),Mt=C.getClearAlpha(),Ct=ht.r,Ut=ht.g,Gt=ht.b;At?(I[0]=Ct,I[1]=Ut,I[2]=Gt,I[3]=Mt,B.clearBufferuiv(B.COLOR,0,I)):(b[0]=Ct,b[1]=Ut,b[2]=Gt,b[3]=Mt,B.clearBufferiv(B.COLOR,0,b))}else J|=B.COLOR_BUFFER_BIT}R&&(J|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Y=A},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),C.dispose(),lt.dispose(),K.dispose(),Rt.dispose(),vt.dispose(),S.dispose(),st.dispose(),D.dispose(),rt.dispose(),gt.dispose(),_.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Po),nt.removeEventListener("sessionend",No),Yi.stop()};function xt(A){A.preventDefault(),Ao("WebGLRenderer: Context Lost."),Z=!0}function Bt(){Ao("WebGLRenderer: Context Restored."),Z=!1;let A=se.autoReset,R=W.enabled,Q=W.autoUpdate,J=W.needsUpdate,F=W.type;bt(),se.autoReset=A,W.enabled=R,W.autoUpdate=Q,W.needsUpdate=J,W.type=F}function pt(A){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Wt(A){let R=A.target;R.removeEventListener("dispose",Wt),ce(R)}function ce(A){wi(A),vt.remove(A)}function wi(A){let R=vt.get(A).programs;R!==void 0&&(R.forEach(function(Q){_.releaseProgram(Q)}),A.isShaderMaterial&&_.releaseShaderCache(A))}this.renderBufferDirect=function(A,R,Q,J,F,ct){R===null&&(R=Te);let At=F.isMesh&&F.matrixWorld.determinantAffine()<0,ht=Yh(A,R,Q,J,F);ut.setMaterial(J,At);let Mt=Q.index,Ct=1;if(J.wireframe===!0){if(Mt=D.getWireframeAttribute(Q),Mt===void 0)return;Ct=2}let Ut=Q.drawRange,Gt=Q.attributes.position,It=Ut.start*Ct,Vt=(Ut.start+Ut.count)*Ct;ct!==null&&(It=Math.max(It,ct.start*Ct),Vt=Math.min(Vt,(ct.start+ct.count)*Ct)),Mt!==null?(It=Math.max(It,0),Vt=Math.min(Vt,Mt.count)):Gt!=null&&(It=Math.max(It,0),Vt=Math.min(Vt,Gt.count));let de=Vt-It;if(de<0||de===1/0)return;rt.setup(F,J,ht,Q,Mt);let ie,te=U;if(Mt!==null&&(ie=M.get(Mt),te=tt,te.setIndex(ie)),F.isMesh)J.wireframe===!0?(ut.setLineWidth(J.wireframeLinewidth*Re()),te.setMode(B.LINES)):te.setMode(B.TRIANGLES);else if(F.isLine){let xe=J.linewidth;xe===void 0&&(xe=1),ut.setLineWidth(xe*Re()),F.isLineSegments?te.setMode(B.LINES):F.isLineLoop?te.setMode(B.LINE_LOOP):te.setMode(B.LINE_STRIP)}else F.isPoints?te.setMode(B.POINTS):F.isSprite&&te.setMode(B.TRIANGLES);if(F.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))te.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let xe=F._multiDrawStarts,St=F._multiDrawCounts,ze=F._multiDrawCount,Ht=Mt?M.get(Mt).bytesPerElement:1,Qi=vt.get(J).currentProgram.getUniforms();for(let Ce=0;Ce<ze;Ce++)Qi.setValue(B,"_gl_DrawID",Ce),te.render(xe[Ce]/Ht,St[Ce])}else if(F.isInstancedMesh)te.renderInstances(It,de,F.count);else if(Q.isInstancedBufferGeometry){let xe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,St=Math.min(Q.instanceCount,xe);te.renderInstances(It,de,St)}else te.render(It,de)};function Fo(A,R,Q,J){Y!==null&&A.isNodeMaterial&&Y.setObject(J,A),le===!0&&X.setState(A,Q,!1),A.transparent===!0&&A.side===ui&&A.forceSinglePass===!1?(A.side=De,A.needsUpdate=!0,Jn(A,R,J),A.side=Gi,A.needsUpdate=!0,Jn(A,R,J),A.side=ui):Jn(A,R,J)}this.compile=function(A,R,Q=null){Q===null&&(Q=A),Y!==null&&Y.renderStart(A,R,Q),w=K.get(Q),w.init(R),x.push(w),Q.traverseVisible(function(F){F.isLight&&F.layers.test(R.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),A!==Q&&A.traverseVisible(function(F){F.isLight&&F.layers.test(R.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),w.setupLights(),Y!==null&&Y.updateLights(w.state.lightsArray),Ie=this.localClippingEnabled,le=X.init(this.clippingPlanes,Ie),le===!0&&X.setGlobalState(this.clippingPlanes,R),Y!==null&&W.render(w.state.shadowsArray,Q,R);let J=new Set;return A.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ct=F.material;if(ct)if(Array.isArray(ct))for(let At=0;At<ct.length;At++){let ht=ct[At];Fo(ht,Q,R,F),J.add(ht)}else Fo(ct,Q,R,F),J.add(ct)}),w=x.pop(),Y!==null&&Y.renderEnd(),J},this.compileAsync=function(A,R,Q=null){let J=this.compile(A,R,Q);return new Promise(F=>{function ct(){if(J.forEach(function(At){let Mt=vt.get(At).currentProgram;(Mt===void 0||Mt.isReady())&&J.delete(At)}),J.size===0){F(A);return}setTimeout(ct,10)}_t.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let ga=null;function Gh(A){ga&&ga(A)}function Po(){Yi.stop()}function No(){Yi.start()}let Yi=new bh;Yi.setAnimationLoop(Gh),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(A){ga=A,nt.setAnimationLoop(A),A===null?Yi.stop():Yi.start()},nt.addEventListener("sessionstart",Po),nt.addEventListener("sessionend",No),this.render=function(A,R){if(R!==void 0&&R.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;Y!==null&&Y.renderStart(A,R);let Q=nt.enabled===!0&&nt.isPresenting===!0,J=P!==null&&(at===null||Q)&&P.begin(z,at);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(R),R=nt.getCamera()),A.isScene===!0&&A.onBeforeRender(z,A,R,at),w=K.get(A,x.length),w.init(R),w.state.textureUnits=Rt.getTextureUnits(),x.push(w),ee.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),R.isArrayCamera?ue.setFromArrayCamera(R):Nt.setFromProjectionMatrix(ee,qe,R.reversedDepth),Ie=this.localClippingEnabled,le=X.init(this.clippingPlanes,Ie),T=lt.get(A,g.length),T.init(),g.push(T),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){let At=z.xr.getDepthSensingMesh();At!==null&&Ma(At,R,-1/0,z.sortObjects)}Ma(A,R,0,z.sortObjects),T.finish(),Y!==null&&Y.updateLights(w.state.lightsArray),z.sortObjects===!0&&T.sort(Jt,oe),ye=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,ye&&C.addToRenderList(T,A),this.info.autoReset===!0&&this.info.reset(),le===!0&&X.beginShadows();let F=w.state.shadowsArray;if(W.render(F,A,R),le===!0&&X.endShadows(),(J&&P.hasRenderPass())===!1){let At=T.opaque,ht=T.transmissive;if(w.setupLights(),R.isArrayCamera){let Mt=R.cameras;if(ht.length>0)for(let Ct=0,Ut=Mt.length;Ct<Ut;Ct++){let Gt=Mt[Ct];Vo(At,ht,A,Gt)}ye&&C.render(A);for(let Ct=0,Ut=Mt.length;Ct<Ut;Ct++){let Gt=Mt[Ct];Go(T,A,Gt,Gt.viewport)}}else ht.length>0&&Vo(At,ht,A,R),ye&&C.render(A),Go(T,A,R)}at!==null&&L===0&&(Rt.updateMultisampleRenderTarget(at),Rt.updateRenderTargetMipmap(at)),J&&P.end(z),A.isScene===!0&&A.onAfterRender(z,A,R),rt.resetDefaultState(),q=-1,$=null,x.pop(),x.length>0?(w=x[x.length-1],Rt.setTextureUnits(w.state.textureUnits),le===!0&&X.setGlobalState(z.clippingPlanes,w.state.camera)):w=null,g.pop(),g.length>0?T=g[g.length-1]:T=null,Y!==null&&Y.renderEnd()};function Ma(A,R,Q,J){if(A.visible===!1)return;if(A.layers.test(R.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(R);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){let At=R.isArrayCamera?ue:Nt;if(!A.frustumCulled||A.intersectsFrustum(At)){J&&he.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);let ht=st.update(A),Mt=A.material;Mt.visible&&T.push(A,ht,Mt,Q,he.z,null,R)}}else if(A.isMesh||A.isLine||A.isPoints){let At=R.isArrayCamera?ue:Nt;if(!A.frustumCulled||A.intersectsFrustum(At)){let ht=st.update(A),Mt=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),he.copy(A.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),he.copy(ht.boundingSphere.center)),he.applyMatrix4(A.matrixWorld).applyMatrix4(ee)),Array.isArray(Mt)){let Ct=ht.groups;for(let Ut=0,Gt=Ct.length;Ut<Gt;Ut++){let It=Ct[Ut],Vt=Mt[It.materialIndex];Vt&&Vt.visible&&T.push(A,ht,Vt,Q,he.z,It,R)}}else Mt.visible&&T.push(A,ht,Mt,Q,he.z,null,R)}}}let ct=A.children;for(let At=0,ht=ct.length;At<ht;At++)Ma(ct[At],R,Q,J)}function Go(A,R,Q,J){let{opaque:F,transmissive:ct,transparent:At}=A;w.setupLightsView(Q),le===!0&&X.setGlobalState(z.clippingPlanes,Q),J&&ut.viewport(it.copy(J)),F.length>0&&Ms(F,R,Q),ct.length>0&&Ms(ct,R,Q),At.length>0&&Ms(At,R,Q),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Vo(A,R,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[J.id]===void 0){let It=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[J.id]=new Ge(1,1,{generateMipmaps:!0,type:It?ri:Le,minFilter:ii,samples:Math.max(4,$t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}let ct=w.state.transmissionRenderTarget[J.id],At=J.viewport||it;ct.setSize(At.z*z.transmissionResolutionScale,At.w*z.transmissionResolutionScale);let ht=z.getRenderTarget(),Mt=z.getActiveCubeFace(),Ct=z.getActiveMipmapLevel();z.setRenderTarget(ct),z.getClearColor(O),dt=z.getClearAlpha(),dt<1&&z.setClearColor(16777215,.5),z.clear(),ye&&C.render(Q);let Ut=z.toneMapping;z.toneMapping=di;let Gt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),w.setupLightsView(J),le===!0&&X.setGlobalState(z.clippingPlanes,J),Ms(A,Q,J),Rt.updateMultisampleRenderTarget(ct),Rt.updateRenderTargetMipmap(ct),_t.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let Vt=0,de=R.length;Vt<de;Vt++){let ie=R[Vt],{object:te,geometry:xe,material:St,group:ze}=ie;if(St.side===ui&&te.layers.test(J.layers)){let Ht=St.side;St.side=De,St.needsUpdate=!0,Yo(te,Q,J,xe,St,ze),St.side=Ht,St.needsUpdate=!0,It=!0}}It===!0&&(Rt.updateMultisampleRenderTarget(ct),Rt.updateRenderTargetMipmap(ct))}z.setRenderTarget(ht,Mt,Ct),z.setClearColor(O,dt),Gt!==void 0&&(J.viewport=Gt),z.toneMapping=Ut}function Ms(A,R,Q){let J=R.isScene===!0?R.overrideMaterial:null;for(let F=0,ct=A.length;F<ct;F++){let At=A[F],{object:ht,geometry:Mt,group:Ct}=At,Ut=At.material;Ut.allowOverride===!0&&J!==null&&(Ut=J),ht.layers.test(Q.layers)&&Yo(ht,R,Q,Mt,Ut,Ct)}}function Yo(A,R,Q,J,F,ct){Y!==null&&F.isNodeMaterial&&Y.setObject(A,F),A.onBeforeRender(z,R,Q,J,F,ct),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(z,R,Q,J,A,ct),F.transparent===!0&&F.side===ui&&F.forceSinglePass===!1?(F.side=De,F.needsUpdate=!0,z.renderBufferDirect(Q,R,J,F,A,ct),F.side=Gi,F.needsUpdate=!0,z.renderBufferDirect(Q,R,J,F,A,ct),F.side=ui):z.renderBufferDirect(Q,R,J,F,A,ct),A.onAfterRender(z,R,Q,J,F,ct)}function Qo(A){let R=0;for(let Q of A)Q.texture!==null&&R++;return R}function Jn(A,R,Q){R.isScene!==!0&&(R=Te);let J=vt.get(A),F=w.state.lights,ct=w.state.shadowsArray,At=F.state.version,ht=_.getParameters(A,F.state,ct,R,Q,w.state.lightProbeGridArray),Mt=_.getProgramCacheKey(ht),Ct=J.programs;J.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?R.environment:null,J.fog=R.fog;let Ut=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;J.envMap=S.get(A.envMap||J.environment,Ut),J.envMapRotation=J.environment!==null&&A.envMap===null?R.environmentRotation:A.envMapRotation,Ct===void 0&&(A.addEventListener("dispose",Wt),Ct=new Map,J.programs=Ct,J.programVariants=new Map);let Gt=Ct.get(Mt);if(Gt!==void 0){if(J.currentProgram===Gt&&J.lightsStateVersion===At)return Wo(A,ht),Gt}else ht.uniforms=_.getUniforms(A),Y!==null&&A.isNodeMaterial&&Y.build(A,Q,ht),A.onBeforeCompile(ht,z),Gt=_.acquireProgram(ht,Mt),Ct.set(Mt,Gt),J.uniforms=ht.uniforms;let It=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(It.clippingPlanes=X.uniform),Wo(A,ht),J.needsLights=Lh(A),J.lightsStateVersion=At,J.needsLights&&(It.ambientLightColor.value=F.state.ambient,It.lightProbe.value=F.state.probe,It.sunLights.value=F.state.sun,It.sunLightShadows.value=F.state.sunShadow,It.directionalLights.value=F.state.directional,It.directionalLightShadows.value=F.state.directionalShadow,It.spotLights.value=F.state.spot,It.spotLightShadows.value=F.state.spotShadow,It.rectAreaLights.value=F.state.rectArea,It.ltc_1.value=F.state.rectAreaLTC1,It.ltc_2.value=F.state.rectAreaLTC2,It.pointLights.value=F.state.point,It.pointLightShadows.value=F.state.pointShadow,It.hemisphereLights.value=F.state.hemi,It.sunShadowMatrix.value=F.state.sunShadowMatrix,It.sunShadowCascade.value=F.state.sunShadowCascade,It.directionalShadowMatrix.value=F.state.directionalShadowMatrix,It.spotLightMatrix.value=F.state.spotLightMatrix,It.spotLightMap.value=F.state.spotLightMap,It.pointShadowMatrix.value=F.state.pointShadowMatrix),J.numLightProbeGrids=Qo(w.state.lightProbeGridArray),J.currentProgram=Gt,J.uniformsList=null,Gt}function Vh(A,R,Q,J,F){let ct=vt.get(A),At=ct.currentProgram.id+","+J+","+F,ht=ct.programVariants.get(At);return ht===void 0?(ht=Jn(A,R,Q),ct.programVariants.set(At,ht)):(ct.currentProgram=ht,ct.uniformsList=null,ct.outputColorSpace=J,ct.toneMapping=F),ht}function Lo(A){if(A.uniformsList===null){let R=A.currentProgram.getUniforms();A.uniformsList=Zn.seqWithValue(R.seq,A.uniforms)}return A.uniformsList}function Wo(A,R){let Q=vt.get(A);Q.outputColorSpace=R.outputColorSpace,Q.batching=R.batching,Q.batchingColor=R.batchingColor,Q.instancing=R.instancing,Q.instancingColor=R.instancingColor,Q.instancingMorph=R.instancingMorph,Q.skinning=R.skinning,Q.morphTargets=R.morphTargets,Q.morphNormals=R.morphNormals,Q.morphColors=R.morphColors,Q.morphTargetsCount=R.morphTargetsCount,Q.numClippingPlanes=R.numClippingPlanes,Q.numIntersection=R.numClipIntersection,Q.vertexAlphas=R.vertexAlphas,Q.vertexTangents=R.vertexTangents,Q.toneMapping=R.toneMapping}function Yh(A,R,Q,J,F){R.isScene!==!0&&(R=Te),Rt.resetTextureUnits();let ct=R.fog,At=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?R.environment:null,ht=at===null?z.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Yt.workingColorSpace,Mt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Ct=S.get(J.envMap||At,Mt),Ut=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Gt=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),It=!!Q.morphAttributes.position,Vt=!!Q.morphAttributes.normal,de=!!Q.morphAttributes.color,ie=di;J.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ie=z.toneMapping);let te=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,xe=te!==void 0?te.length:0,St=vt.get(J),ze=w.state.lights;if(le===!0&&(Ie===!0||A!==$)){let re=A===$&&J.id===q;X.setState(J,A,re)}let Ht=!1,Qi=!1;J.version===St.__version?St.needsLights&&St.lightsStateVersion!==ze.state.version||F.isBatchedMesh&&St.batching===!1||!F.isBatchedMesh&&St.batching===!0||F.isBatchedMesh&&St.batchingColor===!0&&F._colorsTexture===null||F.isBatchedMesh&&St.batchingColor===!1&&F._colorsTexture!==null||F.isInstancedMesh&&St.instancing===!1||!F.isInstancedMesh&&St.instancing===!0||F.isSkinnedMesh&&St.skinning===!1||!F.isSkinnedMesh&&St.skinning===!0||F.isInstancedMesh&&St.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&St.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&St.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&St.instancingMorph===!1&&F.morphTexture!==null||St.envMap!==Ct||J.fog===!0&&St.fog!==ct||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==X.numPlanes||St.numIntersection!==X.numIntersection)||St.vertexAlphas!==Ut||St.vertexTangents!==Gt||St.morphTargets!==It||St.morphNormals!==Vt||St.morphColors!==de||St.morphTargetsCount!==xe||St.numLightProbeGrids!==Qo(w.state.lightProbeGridArray)?Ht=!0:(St.outputColorSpace!==ht||St.toneMapping!==ie)&&(Qi=!0):(Ht=!0,St.__version=J.version);let Ce=St.currentProgram;(Ht===!0||Qi===!0)&&(Ce=Qi===!0?Vh(J,R,F,ht,ie):Jn(J,R,F),Y&&J.isNodeMaterial&&Y.onUpdateProgram(J,Ce,St));let Es=!1,bi=!1,Li=!1,Ot=Ce.getUniforms(),Se=St.uniforms;if(ut.useProgram(Ce.program)&&(Es=!0,bi=!0,Li=!0),J.id!==q&&(q=J.id,bi=!0),Es||$!==A){ut.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ot.setValue(B,"projectionMatrix",A.projectionMatrix),Ot.setValue(B,"viewMatrix",A.matrixWorldInverse);let ge=Ot.map.cameraPosition;ge!==void 0&&ge.setValue(B,Je.setFromMatrixPosition(A.matrixWorld)),$t.logarithmicDepthBuffer&&Ot.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ot.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,bi=!0,Li=!0)}if(St.needsLights&&(ze.state.sunShadowMap.length>0&&Ot.setValue(B,"sunShadowMap",ze.state.sunShadowMap,Rt),ze.state.directionalShadowMap.length>0&&Ot.setValue(B,"directionalShadowMap",ze.state.directionalShadowMap,Rt),ze.state.spotShadowMap.length>0&&Ot.setValue(B,"spotShadowMap",ze.state.spotShadowMap,Rt),ze.state.pointShadowMap.length>0&&Ot.setValue(B,"pointShadowMap",ze.state.pointShadowMap,Rt)),F.isSkinnedMesh){Ot.setOptional(B,F,"bindMatrix"),Ot.setOptional(B,F,"bindMatrixInverse");let re=F.skeleton;re&&(re.boneTexture===null&&re.computeBoneTexture(),Ot.setValue(B,"boneTexture",re.boneTexture,Rt))}F.isBatchedMesh&&(Ot.setOptional(B,F,"batchingTexture"),Ot.setValue(B,"batchingTexture",F._matricesTexture,Rt),Ot.setOptional(B,F,"batchingIdTexture"),Ot.setValue(B,"batchingIdTexture",F._indirectTexture,Rt),Ot.setOptional(B,F,"batchingColorTexture"),F._colorsTexture!==null&&Ot.setValue(B,"batchingColorTexture",F._colorsTexture,Rt));let Xe=Q.morphAttributes;if((Xe.position!==void 0||Xe.normal!==void 0||Xe.color!==void 0)&&N.update(F,Q,Ce),(bi||St.receiveShadow!==F.receiveShadow)&&(St.receiveShadow=F.receiveShadow,Ot.setValue(B,"receiveShadow",F.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&R.environment!==null&&(Se.envMapIntensity.value=R.environmentIntensity),Se.dfgLUT!==void 0&&(Se.dfgLUT.value=fm()),bi){if(Ot.setValue(B,"toneMappingExposure",z.toneMappingExposure),St.needsLights&&Qh(Se,Li),ct&&J.fog===!0&&ot.refreshFogUniforms(Se,ct),ot.refreshMaterialUniforms(Se,J,ft,wt,w.state.transmissionRenderTarget[A.id]),St.needsLights&&St.numLightProbeGrids>0){let re=v,ge=0;for(let mi of w.state.lightProbeGridArray)mi.texture!==null&&(re.textures[ge]=mi.texture,re.min[ge]=mi.boundingBox.min,re.max[ge]=mi.boundingBox.max,re.resolution[ge]=mi.resolution,ge++);for(let mi in re)re[mi].length=ge;Se.probesSH.value=re.textures,Se.probesMin.value=re.min,Se.probesMax.value=re.max,Se.probesResolution.value=re.resolution}Zn.upload(B,Lo(St),Se,Rt)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Zn.upload(B,Lo(St),Se,Rt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ot.setValue(B,"center",F.center),Ot.setValue(B,"modelViewMatrix",F.modelViewMatrix),Ot.setValue(B,"normalMatrix",F.normalMatrix),Ot.setValue(B,"modelMatrix",F.matrixWorld),J.uniformsGroups!==void 0){let re=J.uniformsGroups;for(let ge=0,mi=re.length;ge<mi;ge++){let qo=re[ge];gt.update(qo,Ce),gt.bind(qo,Ce)}}return Ce}function Qh(A,R){A.ambientLightColor.needsUpdate=R,A.lightProbe.needsUpdate=R,A.sunLights.needsUpdate=R,A.sunLightShadows.needsUpdate=R,A.directionalLights.needsUpdate=R,A.directionalLightShadows.needsUpdate=R,A.pointLights.needsUpdate=R,A.pointLightShadows.needsUpdate=R,A.spotLights.needsUpdate=R,A.spotLightShadows.needsUpdate=R,A.rectAreaLights.needsUpdate=R,A.hemisphereLights.needsUpdate=R}function Lh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(A,R,Q){let J=vt.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),vt.get(A.texture).__webglTexture=R,vt.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Q,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,R){let Q=vt.get(A);Q.__webglFramebuffer=R,Q.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(A,R=0,Q=0){at=A,j=R,L=Q;let J=null,F=!1,ct=!1;if(A){let ht=vt.get(A);if(ht.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(B.FRAMEBUFFER,ht.__webglFramebuffer),it.copy(A.viewport),yt.copy(A.scissor),zt=A.scissorTest,ut.viewport(it),ut.scissor(yt),ut.setScissorTest(zt),q=-1;return}else if(ht.__webglFramebuffer===void 0)Rt.setupRenderTarget(A);else if(ht.__hasExternalTextures)Rt.rebindTextures(A,vt.get(A.texture).__webglTexture,vt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ut=A.depthTexture;if(ht.__boundDepthTexture!==Ut){if(Ut!==null&&vt.has(Ut)&&(A.width!==Ut.image.width||A.height!==Ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Rt.setupDepthRenderbuffer(A)}}let Mt=A.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ct=!0);let Ct=vt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ct[R])?J=Ct[R][Q]:J=Ct[R],F=!0):A.samples>0&&Rt.useMultisampledRTT(A)===!1?J=vt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ct)?J=Ct[Q]:J=Ct,it.copy(A.viewport),yt.copy(A.scissor),zt=A.scissorTest}else it.copy(Tt).multiplyScalar(ft).floor(),yt.copy(qt).multiplyScalar(ft).floor(),zt=Kt;if(Q!==0&&(J=H),ut.bindFramebuffer(B.FRAMEBUFFER,J)&&ut.drawBuffers(A,J),ut.viewport(it),ut.scissor(yt),ut.setScissorTest(zt),F){let ht=vt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+R,ht.__webglTexture,Q)}else if(ct){let ht=R;for(let Mt=0;Mt<A.textures.length;Mt++){let Ct=vt.get(A.textures[Mt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Mt,Ct.__webglTexture,Q,ht)}}else if(A!==null&&Q!==0){let ht=vt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ht.__webglTexture,Q)}q=-1};function Oo(A){let R=vt.get(A);return(R.__readFormat!==A.format||R.__readType!==A.type)&&(R.__readFormat=A.format,R.__readType=A.type,R.__formatReadable=$t.textureFormatReadable(A.format),R.__typeReadable=$t.textureTypeReadable(A.type)),R}this.readRenderTargetPixels=function(A,R,Q,J,F,ct,At,ht=0){if(!(A&&A.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(Mt=Mt[At],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){ut.bindFramebuffer(B.FRAMEBUFFER,Mt);try{let Ct=A.textures[ht],Ut=Ct.format,Gt=Ct.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ht);let It=Oo(Ct);if(It.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=A.width-J&&Q>=0&&Q<=A.height-F&&B.readPixels(R,Q,J,F,et.convert(Ut),et.convert(Gt),ct)}finally{let Ct=at!==null?vt.get(at).__webglFramebuffer:null;ut.bindFramebuffer(B.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(A,R,Q,J,F,ct,At,ht=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(Mt=Mt[At],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(R>=0&&R<=A.width-J&&Q>=0&&Q<=A.height-F){ut.bindFramebuffer(B.FRAMEBUFFER,Mt);let Ct=A.textures[ht],Ut=Ct.format,Gt=Ct.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ht);let It=Oo(Ct);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Vt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Vt),B.bufferData(B.PIXEL_PACK_BUFFER,ct.byteLength,B.STREAM_READ),B.readPixels(R,Q,J,F,et.convert(Ut),et.convert(Gt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let de=at!==null?vt.get(at).__webglFramebuffer:null;ut.bindFramebuffer(B.FRAMEBUFFER,de);let ie=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await $l(B,ie,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Vt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ct),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Vt),B.deleteSync(ie),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,R=null,Q=0){let J=Math.pow(2,-Q),F=Math.floor(A.image.width*J),ct=Math.floor(A.image.height*J),At=R!==null?R.x:0,ht=R!==null?R.y:0;Rt.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,At,ht,F,ct),ut.unbindTexture()},this.copyTextureToTexture=function(A,R,Q=null,J=null,F=0,ct=0){let At,ht,Mt,Ct,Ut,Gt,It,Vt,de,ie=A.isCompressedTexture?A.mipmaps[ct]:A.image;if(Q!==null)At=Q.max.x-Q.min.x,ht=Q.max.y-Q.min.y,Mt=Q.isBox3?Q.max.z-Q.min.z:1,Ct=Q.min.x,Ut=Q.min.y,Gt=Q.isBox3?Q.min.z:0;else{let Ot=Math.pow(2,-F);At=Math.floor(ie.width*Ot),ht=Math.floor(ie.height*Ot),A.isDataArrayTexture?Mt=ie.depth:A.isData3DTexture?Mt=Math.floor(ie.depth*Ot):Mt=1,Ct=0,Ut=0,Gt=0}J!==null?(It=J.x,Vt=J.y,de=J.z):(It=0,Vt=0,de=0);let te=et.convert(R.format),xe=et.convert(R.type),St;R.isData3DTexture?(Rt.setTexture3D(R,0),St=B.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(Rt.setTexture2DArray(R,0),St=B.TEXTURE_2D_ARRAY):(Rt.setTexture2D(R,0),St=B.TEXTURE_2D),ut.activeTexture(B.TEXTURE0),ut.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,R.flipY),ut.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),ut.pixelStorei(B.UNPACK_ALIGNMENT,R.unpackAlignment);let ze=ut.getParameter(B.UNPACK_ROW_LENGTH),Ht=ut.getParameter(B.UNPACK_IMAGE_HEIGHT),Qi=ut.getParameter(B.UNPACK_SKIP_PIXELS),Ce=ut.getParameter(B.UNPACK_SKIP_ROWS),Es=ut.getParameter(B.UNPACK_SKIP_IMAGES);ut.pixelStorei(B.UNPACK_ROW_LENGTH,ie.width),ut.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ie.height),ut.pixelStorei(B.UNPACK_SKIP_PIXELS,Ct),ut.pixelStorei(B.UNPACK_SKIP_ROWS,Ut),ut.pixelStorei(B.UNPACK_SKIP_IMAGES,Gt);let bi=A.isDataArrayTexture||A.isData3DTexture,Li=R.isDataArrayTexture||R.isData3DTexture;if(A.isDepthTexture){let Ot=vt.get(A),Se=vt.get(R),Xe=vt.get(Ot.__renderTarget),re=vt.get(Se.__renderTarget);ut.bindFramebuffer(B.READ_FRAMEBUFFER,Xe.__webglFramebuffer),ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ge=0;ge<Mt;ge++)bi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,vt.get(A).__webglTexture,F,Gt+ge),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,vt.get(R).__webglTexture,ct,de+ge)),B.blitFramebuffer(Ct,Ut,Ct+At,Ut+ht,It,Vt,It+At,Vt+ht,B.DEPTH_BUFFER_BIT,B.NEAREST);ut.bindFramebuffer(B.READ_FRAMEBUFFER,null),ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(F!==0||A.isRenderTargetTexture||vt.has(A)){let Ot=vt.get(A),Se=vt.get(R);ut.bindFramebuffer(B.READ_FRAMEBUFFER,k),ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,G);for(let Xe=0;Xe<Mt;Xe++)bi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ot.__webglTexture,F,Gt+Xe):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ot.__webglTexture,F),Li?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Se.__webglTexture,ct,de+Xe):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Se.__webglTexture,ct),F!==0?B.blitFramebuffer(Ct,Ut,Ct+At,Ut+ht,It,Vt,It+At,Vt+ht,B.COLOR_BUFFER_BIT,B.NEAREST):Li?B.copyTexSubImage3D(St,ct,It,Vt,de+Xe,Ct,Ut,At,ht):B.copyTexSubImage2D(St,ct,It,Vt,Ct,Ut,At,ht);ut.bindFramebuffer(B.READ_FRAMEBUFFER,null),ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Li?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(St,ct,It,Vt,de,At,ht,Mt,te,xe,ie.data):R.isCompressedArrayTexture?B.compressedTexSubImage3D(St,ct,It,Vt,de,At,ht,Mt,te,ie.data):B.texSubImage3D(St,ct,It,Vt,de,At,ht,Mt,te,xe,ie):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ct,It,Vt,At,ht,te,xe,ie.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ct,It,Vt,ie.width,ie.height,te,ie.data):B.texSubImage2D(B.TEXTURE_2D,ct,It,Vt,At,ht,te,xe,ie);ut.pixelStorei(B.UNPACK_ROW_LENGTH,ze),ut.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ht),ut.pixelStorei(B.UNPACK_SKIP_PIXELS,Qi),ut.pixelStorei(B.UNPACK_SKIP_ROWS,Ce),ut.pixelStorei(B.UNPACK_SKIP_IMAGES,Es),ct===0&&R.generateMipmaps===!0&&R.mipmapsAutoUpdate===!0&&B.generateMipmap(St),ut.unbindTexture()},this.initRenderTarget=function(A){vt.get(A).__webglFramebuffer===void 0&&Rt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Rt.setTextureCube(A,0):A.isData3DTexture?Rt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Rt.setTexture2DArray(A,0):Rt.setTexture2D(A,0),ut.unbindTexture()},this.resetState=function(){j=0,L=0,at=null,ut.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var mm=`
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,gm=`
precision highp float;
varying vec2 vUv;

uniform sampler2D uPlate;
uniform sampler2D uDepth;
uniform sampler2D uMask;
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
uniform float uIntro;
uniform float uSee;
uniform float uMotion;
uniform float uProg;
uniform vec2  uDissC;
uniform float uDissR;
uniform vec3  uBg;
uniform vec3  uPlateBg;
uniform vec4  uGlints[12];     // xy px, z radius px (0 = unused), w phase
uniform float uGlintSpd[12];
uniform vec4  uBrushAB;        // a.xy, b.xy (plate px)
uniform vec4  uBrushP;         // pivot.xy, radius, amplitude
uniform vec4  uRipple[4];

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

  vec2 uvp = (vUv - 0.5) * uCover / uZoom + uCenter;
  vec2 uvc = vec2(mix(uvp.x, 1.0 - uvp.x, uFlip), uvp.y);
  float sgn = mix(1.0, -1.0, uFlip);

  // ---------- depth parallax ----------
  vec2 o = uTilt * uParallax * vec2(sgn, 1.0);
  vec2 uv = uvc;
  for(int i = 0; i < 5; i++){
    float d = texture2D(uDepth, uv).r;
    uv = uvc - o * (d - 0.40);
  }
  float depth = texture2D(uDepth, uv).r;
  vec4 mk = texture2D(uMask, uv);
  float ribbon = mk.r;
  float marble = mk.g;
  float gold = mk.b;

  vec2 p = uv * uImg; p.y = uImg.y - p.y;   // plate px, y down
  vec2 disp = vec2(0.0);

  float introAmp = (1.0 - uIntro) * (1.0 - uIntro);

  // ---------- flowing chocolate ----------
  vec2 fp = p * 0.0105;
  float a1 = vnoise(fp + vec2(t * 0.35 + uProg * 3.0, -t * 0.21)) * 6.2831;
  float a2 = vnoise(fp * 1.9 + vec2(-t * 0.27, t * 0.33 + uProg * 2.0) + 7.0) * 6.2831;
  vec2 flow = vec2(cos(a1), sin(a1)) * 0.65 + vec2(cos(a2), sin(a2)) * 0.35;
  float flowAmp = (3.2 + 2.0 * smoothstep(0.55, 1.0, depth)) * uMotion * (1.0 + 2.2 * uProg);
  disp += flow * flowAmp * ribbon;
  disp += flow * 26.0 * introAmp * (ribbon + 0.25);

  // levitation of everything close to the camera
  disp.y += sin(t * 0.8 + p.x * 0.006) * 1.8 * smoothstep(0.55, 0.95, depth) * uMotion;

  // ---------- brush sway (pivot at the bristle tip) ----------
  {
    vec2 a = uBrushAB.xy, b = uBrushAB.zw;
    vec2 pa = p - a, ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    float dist = length(pa - ba * h);
    float inBrush = 1.0 - smoothstep(uBrushP.z, uBrushP.z + 12.0, dist);
    vec2 rel = p - uBrushP.xy;
    float L = length(rel);
    float sw = sin(t * 0.7) * uBrushP.w * uMotion * smoothstep(30.0, 240.0, L);
    float cs = cos(sw), sn = sin(sw);
    disp += (vec2(cs * rel.x - sn * rel.y, sn * rel.x + cs * rel.y) - rel) * inBrush;
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

  vec2 duv = vec2(disp.x, -disp.y) / uImg;
  vec2 suv = clamp(uv - duv, vec2(0.001), vec2(0.999));
  vec3 col = texture2D(uPlate, suv).rgb;

  // ---------- twinkling four-point glints on gold ----------
  vec3 glow = vec3(0.0);
  for(int i = 0; i < 12; i++){
    vec4 g = uGlints[i];
    if(g.z > 0.5){
      vec2 d = p - g.xy;
      float R = g.z;
      float tw = 0.5 + 0.5 * sin(t * uGlintSpd[i] * 1.7 + g.w);
      tw = tw * tw * tw;
      float core = exp(-sq(length(d) / R) * 4.0);
      float cross = exp(-sq(d.x / (R * 0.07))) * exp(-abs(d.y) / (R * 1.6))
                  + exp(-sq(d.y / (R * 0.07))) * exp(-abs(d.x) / (R * 1.6));
      glow += vec3(1.0, 0.90, 0.62) * (core * (0.10 + 0.50 * tw) + cross * 0.55 * tw);
    }
  }
  float glintBoost = 1.0 + 0.8 * smoothstep(0.0, 0.5, uProg);
  col = screenBlend(col, glow * glintBoost * uMotion * smoothstep(0.0, 1.0, uIntro * 1.4 - 0.2) * (1.0 - smoothstep(0.6, 0.85, uProg)));

  // ---------- gold / wet-paint sheen sweeping across ----------
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  float spec = smoothstep(0.50, 0.92, lum);
  float sweepDir = dot(p, normalize(vec2(1.0, -0.55)));
  float phase = mod(t * 95.0, 2900.0) - 500.0;
  float band = exp(-sq((sweepDir - phase) / 120.0));
  float band2 = exp(-sq((sweepDir - (phase - 1450.0)) / 90.0)) * 0.6;
  vec2 e = vec2(5.0, 0.0) / uImg;
  float nbMin = smoothstep(0.05, 0.13, distance(col, uPlateBg));
  nbMin = min(nbMin, smoothstep(0.05, 0.13, distance(texture2D(uPlate, suv + e.xy).rgb, uPlateBg)));
  nbMin = min(nbMin, smoothstep(0.05, 0.13, distance(texture2D(uPlate, suv - e.xy).rgb, uPlateBg)));
  nbMin = min(nbMin, smoothstep(0.05, 0.13, distance(texture2D(uPlate, suv + e.yx).rgb, uPlateBg)));
  nbMin = min(nbMin, smoothstep(0.05, 0.13, distance(texture2D(uPlate, suv - e.yx).rgb, uPlateBg)));
  float wet = clamp(ribbon * 0.9 + gold * 1.0, 0.0, 1.0) * nbMin;
  vec3 sheen = vec3(1.0, 0.90, 0.66) * (band + band2) * (0.12 + spec * 0.95) * wet;
  col += sheen * 0.42 * uMotion;
  col += vec3(1.0, 0.86, 0.52) * wet * spec * smoothstep(0.1, 0.5, uProg) * 0.20;

  // ---------- soft light rolling over the marble ----------
  float mdir = dot(p, normalize(vec2(0.8, -0.6)));
  float mband = exp(-sq((mdir - (mod(t * 55.0, 2300.0) - 600.0)) / 170.0));
  float mlum = smoothstep(0.55, 0.95, lum);
  col += vec3(1.0, 0.96, 0.88) * mband * marble * (0.03 + mlum * 0.11) * uMotion;

  // ---------- cursor lantern ----------
  if(uMouseOn > 0.001){
    float md = length(p - uMousePx);
    float lantern = exp(-sq(md / 210.0));
    float lantern2 = exp(-sq(md / 70.0));
    vec3 lc = vec3(1.0, 0.88, 0.62);
    col += lc * (lantern * (0.02 + 0.28 * spec * wet + 0.05 * marble * mlum) + lantern2 * 0.10 * wet) * uMouseOn;
    col = screenBlend(col, lc * lantern * 0.045 * uMouseOn);
  }
  col += vec3(1.0, 0.93, 0.78) * shine * 0.10 * wet;

  // ---------- scroll finale: tunnel vignette, dissolve, golden rim, sparks ----------
  float vig = smoothstep(0.35, 1.05, length((vUv - 0.5) * vec2(1.25, 1.0)) * 1.5);
  col = mix(col, col * vec3(0.80, 0.72, 0.64), vig * uProg * 0.6);
  col += vec3(1.0, 0.9, 0.7) * front * 0.10 * (1.0 - gone);
  col = mix(col, uBg, gone);
  vec3 hot = vec3(1.0, 0.84, 0.46);
  col = mix(col, hot, clamp(edge * 0.80, 0.0, 1.0));
  float sparkle = step(0.9935, hash(floor(p / 5.0) + floor(t * 9.0))) * edge;
  col += vec3(1.0, 0.93, 0.72) * (edge * 0.30 + sparkle * 1.8);

  col += (hash(vUv * 1400.0 + fract(t)) - 0.5) * 0.012 * (1.0 - gone);
  float fade = smoothstep(0.0, 0.6, uIntro);
  col = mix(uBg, col, fade);
  float alpha = 1.0 - gone * uSee * (1.0 - clamp(edge * 0.8, 0.0, 1.0));
  gl_FragColor = vec4(col * alpha, alpha);
}`,Mm=`
attribute vec4 aBase;   // x,y px, depth, size px
attribute vec4 aMotion; // phase, speedX, speedY (drip: fall px), type
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
uniform float uPx;
uniform float uIntro;
uniform float uMotion;
uniform float uProg;
uniform vec2  uDissC;
uniform float uDissR;
varying float vType;
varying float vAlpha;

void main(){
  float t = uTime;
  vec2 p = aBase.xy;
  float depth = aBase.z;
  float ph = aMotion.x;
  float type = aMotion.w;
  float isDrip = step(4.5, type);
  float isDust = step(3.5, type) * (1.0 - isDrip);

  float scale = 1.0;
  float dripA = 1.0;
  if(isDrip > 0.5){
    float s = fract(t * aMotion.y * 0.30 + ph);
    p += vec2(sin(t * 2.0 + ph * 7.0) * 1.2, (s * s) * aMotion.z + s * 26.0);
    dripA = smoothstep(0.0, 0.10, s) * (1.0 - smoothstep(0.78, 1.0, s));
    scale = smoothstep(0.0, 0.22, s) * (0.75 + 0.45 * s);
  } else {
    float amp = mix(16.0, 34.0, isDust) * uMotion;
    p += vec2(sin(t * aMotion.y + ph) * amp, cos(t * aMotion.z + ph * 1.3) * amp * 0.8);
    p.y -= isDust * mod(t * (4.0 + aMotion.y * 6.0) + ph * 90.0, 420.0) * uMotion;
  }

  vec2 d = p - uMousePx;
  float rl = length(d) + 1.0;
  p += (d / rl) * exp(-rl / 130.0) * 70.0 * uMouseOn * (0.4 + depth);

  vec2 dq = p - uDissC;
  float rq = length(dq) + 1.0;
  float burst = smoothstep(0.18, 1.0, uProg);
  p += (dq / rq) * burst * burst * (650.0 + 900.0 * aMotion.y) * (0.45 + depth);
  p.y -= burst * 220.0 * depth;
  float rNow = length(p - uDissC);

  vec2 uvq = vec2(p.x / uImg.x, 1.0 - p.y / uImg.y);
  float sgn = mix(1.0, -1.0, uFlip);
  vec2 uvs = uvq + uTilt * uParallax * vec2(sgn, 1.0) * (depth - 0.40);
  uvs.x = mix(uvs.x, 1.0 - uvs.x, uFlip);
  vec2 sv = (uvs - uCenter) * uZoom / uCover + 0.5;
  gl_Position = vec4(sv * 2.0 - 1.0, 0.0, 1.0);
  gl_PointSize = aBase.w * uPx * (0.85 + 0.3 * depth) * scale
               * mix(1.0, 0.55 + 0.45 * sin(t * 1.4 + ph * 3.0), isDust)
               * (1.0 + isDust * burst * 1.2);
  vType = type;
  float tw = mix(1.0, 0.25 + 0.75 * (0.5 + 0.5 * sin(t * 1.1 + ph * 5.0)), isDust);
  vAlpha = smoothstep(0.35, 1.0, uIntro) * tw * dripA
         * (1.0 - smoothstep(0.78, 0.94, uProg))
         * smoothstep(uDissR - 40.0, uDissR + 30.0, rNow)
         * (1.0 + isDust * burst);
}`,Em=`
precision highp float;
uniform float uFlip;
varying float vType;
varying float vAlpha;
void main(){
  vec2 c = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(c, c);
  if(vType > 3.5 && vType < 4.5){
    if(r2 > 1.0) discard;
    float g = exp(-r2 * 4.0);
    gl_FragColor = vec4(vec3(1.0, 0.82, 0.45) * g, g * 0.85 * vAlpha);
    return;
  }
  vec3 n; float edge;
  if(vType > 4.5){
    float rd = c.x * c.x * 3.2 + c.y * c.y * 0.95;     // tall teardrop
    if(rd > 1.0) discard;
    n = vec3(c.x * 1.5, -c.y * 0.6, sqrt(max(1.0 - rd, 0.0)));
    edge = smoothstep(1.0, 0.9, rd);
  } else {
    if(r2 > 1.0) discard;
    n = vec3(c.x, -c.y, sqrt(1.0 - r2));
    edge = smoothstep(1.0, 0.92, r2);
  }
  n = normalize(n);
  vec3 L = normalize(vec3(-0.45 * mix(1.0, -1.0, uFlip), 0.65, 0.62));
  float dif = clamp(dot(n, L), 0.0, 1.0);
  vec3 base;
  if(vType < 0.5) base = vec3(0.30, 0.14, 0.07);          // milk chocolate
  else if(vType < 1.5) base = vec3(0.80, 0.56, 0.26);     // caramel / gold
  else if(vType < 2.5) base = vec3(0.96, 0.90, 0.80);     // cream
  else if(vType < 3.5) base = vec3(0.14, 0.07, 0.04);     // dark chocolate
  else base = vec3(0.20, 0.09, 0.045);                    // drip
  vec3 col = base * (0.30 + 0.85 * dif);
  float env = smoothstep(-0.2, 0.9, n.y);
  col += mix(vec3(0.0), vec3(0.98, 0.84, 0.66), env) * 0.18 * (1.0 - n.z * 0.4);
  vec3 H = normalize(L + vec3(0.0, 0.0, 1.0));
  float sp = pow(clamp(dot(n, H), 0.0, 1.0), vType > 0.5 && vType < 1.5 ? 30.0 : 64.0);
  col += vec3(1.0, 0.96, 0.88) * sp * 1.15;
  float rim = pow(1.0 - n.z, 3.0);
  col += vec3(1.0, 0.8, 0.5) * rim * 0.16;
  gl_FragColor = vec4(col, edge * vAlpha);
}`,ma=n=>Math.max(0,Math.min(1,n)),gs=(n,t,e)=>{let i=ma((e-n)/(t-n));return i*i*(3-2*i)},Jo=(n,t,e)=>n+(t-n)*e;function Am(n){let t=String(n).replace("#","");t.length===3&&(t=t.split("").map(i=>i+i).join(""));let e=parseInt(t,16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function Uo(n,t,{mip:e=!1}={}){return new Promise((i,s)=>{n.load(t,r=>{r.wrapS=r.wrapT=Oe,r.minFilter=e?ii:Ae,r.magFilter=Ae,r.generateMipmaps=e,r.colorSpace=oi,r.anisotropy=4,i(r)},void 0,s)})}function Im(n){let t=document.createElement("canvas");t.width=n.width,t.height=n.height;let e=t.getContext("2d",{willReadFrequently:!0});return e.drawImage(n,0,0),{data:e.getImageData(0,0,t.width,t.height).data,w:t.width,h:t.height}}async function Ph(n,t={}){let e=Object.assign({assets:"./assets/",parallax:1,beads:24,dust:80,pixelRatioCap:2,mirror:null,focus:null,background:null,scroll:!0,scrollLength:"500vh",progress:0,onProgress:null,enter:!0,enterLength:1,onEnter:null,onReady:null},t),i=typeof e.assets=="string"?e.assets.endsWith("/")?e.assets:e.assets+"/":"",r=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?.25:1,a=typeof e.assets=="object"&&e.assets?e.assets:{plate:i+"plate.webp",depth:i+"depth.png",mask:i+"mask.png",meta:null},o=new es,[h,l,u,f]=await Promise.all([Uo(o,a.plate,{mip:!0}),Uo(o,a.depth),Uo(o,a.mask),a.meta?Promise.resolve(a.meta):fetch(i+"meta.json").then(W=>W.json())]),c=f.size[0],p=f.size[1],E=(e.mirror===null?f.mirror:e.mirror)?1:0,y=e.focus||f.focus||[.5,.5],m=e.background||f.background||"#f6e3d1",d=Am(m);getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.style.background=m;let I=n;e.scroll?(n.style.overflow="clip",n.style.minHeight=e.scrollLength,I=document.createElement("div"),I.style.cssText="position:sticky;top:0;left:0;width:100%;height:100vh;height:100dvh;overflow:hidden;",n.appendChild(I)):n.style.overflow="hidden",I.style.touchAction="pan-y";let b=new da({antialias:!1,alpha:!0,powerPreference:"high-performance"});b.setClearColor(new Qt().setRGB(d[0],d[1],d[2],Be),0);let v=b.domElement;v.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;",I.appendChild(v);let T=new Array(12).fill(0).map(()=>new jt(0,0,0,0)),w=new Array(12).fill(1);(f.glints||[]).slice(0,12).forEach(([W,C,N,U,tt],et)=>{T[et].set(W,C,N,tt),w[et]=U});let g=f.brush||{a:[0,0],b:[0,1],pivot:[0,0],radius:0,amp:0},x=f.heart||[c/2,p/2],P=[x[0]/c,1-x[1]/p],z=[E?1-P[0]:P[0],P[1]],Z=[E?1-y[0]:y[0],y[1]],Y=[0,1,2,3].map(()=>new jt(0,0,-100,0)),H=1.035,k=f.plateBg||[.93,.84,.75],G={uImg:{value:new Ft(c,p)},uCover:{value:new Ft(1,1)},uCenter:{value:new Ft(.5,.5)},uZoom:{value:H},uFlip:{value:E},uTilt:{value:new Ft(0,0)},uParallax:{value:new Ft(.0165*e.parallax,.0115*e.parallax)},uMousePx:{value:new Ft(-9999,-9999)},uMouseOn:{value:0},uTime:{value:0},uIntro:{value:0},uSee:{value:1},uMotion:{value:r},uProg:{value:0},uDissC:{value:new Ft(x[0],x[1])},uDissR:{value:-900},uBg:{value:new V(d[0],d[1],d[2])}},j=new qn,L=new tn,at=new Ye({vertexShader:mm,fragmentShader:gm,uniforms:Object.assign({uPlate:{value:h},uDepth:{value:l},uMask:{value:u},uPlateBg:{value:new V(k[0],k[1],k[2])},uGlints:{value:T},uGlintSpd:{value:w},uBrushAB:{value:new jt(g.a[0],g.a[1],g.b[0],g.b[1])},uBrushP:{value:new jt(g.pivot[0],g.pivot[1],g.radius,g.amp)},uRipple:{value:Y}},G),depthTest:!1,depthWrite:!1}),q=new He(new $i(2,2),at);q.frustumCulled=!1,j.add(q);let $=Im(u.image),it=(W,C,N)=>{let U=Math.max(0,Math.min($.w-1,Math.round(W/c*($.w-1)))),tt=Math.max(0,Math.min($.h-1,Math.round(C/p*($.h-1))));return $.data[(tt*$.w+U)*4+N]/255},yt=(W,C)=>{let N=0;for(let U=0;U<8;U++){let tt=U/8*Math.PI*2;for(let et of[40,85])N=Math.max(N,it(W+Math.cos(tt)*et,C+Math.sin(tt)*et,0))}return N},zt=4242,O=()=>(zt=zt*16807%2147483647,(zt-1)/2147483646);function dt(W,C){let N=new Float32Array(W*4),U=new Float32Array(W*4),tt=0,et=0;for(C==="drip"&&(f.drips||[]).slice(0,W).forEach(([gt,bt,nt,xt,Bt])=>{N.set([gt,bt,.88,15+O()*6],tt*4),U.set([Bt,xt,nt,5],tt*4),tt++});C!=="drip"&&tt<W&&et++<3e4;){let gt=C==="bead"?780+O()*800:300+O()*1300,bt=O()*p,nt=it(gt,bt,0)>.05||it(gt,bt,1)>.05||it(gt,bt,2)>.05;if(C==="bead"){if(nt||yt(gt,bt)<.5)continue}else if(nt&&O()<.7)continue;let xt=C==="bead"&&O()<.2?1:0,Bt=C==="bead"?xt?18+O()*14:6+O()*11:5+O()*10,pt=C==="bead"?.62+O()*.38:.25+O()*.7;N.set([gt,bt,pt,Bt],tt*4);let Wt;if(C==="bead"){let ce=O();Wt=ce<.45?0:ce<.68?1:ce<.85?2:3}else Wt=4;U.set([O()*6.283,.25+O()*.55,.22+O()*.5,Wt],tt*4),tt++}let rt=new ei;return rt.setAttribute("position",new Ue(new Float32Array(tt*3),3)),rt.setAttribute("aBase",new Ue(N.subarray(0,tt*4),4)),rt.setAttribute("aMotion",new Ue(U.subarray(0,tt*4),4)),rt}let Et={value:1},wt=Object.assign({uPx:Et},G),ft=W=>new Ye({vertexShader:Mm,fragmentShader:Em,uniforms:wt,transparent:!0,depthTest:!1,depthWrite:!1,blending:W}),Jt=new _i(dt(e.dust,"dust"),ft(ns)),oe=new _i(dt(e.beads,"bead"),ft(Ci)),Tt=new _i(dt(12,"drip"),ft(Ci));[Jt,oe,Tt].forEach(W=>{W.frustumCulled=!1,j.add(W)});let qt=1,Kt=1;function Nt(){let W=Math.max(1,I.clientWidth),C=Math.max(1,I.clientHeight);Kt=Math.min(window.devicePixelRatio||1,e.pixelRatioCap),b.setPixelRatio(Kt),b.setSize(W,C,!1);let N=W/C,U=c/p;N>U?G.uCover.value.set(1,U/N):G.uCover.value.set(N/U,1),qt=N>U?W/c:C/p,ue(0)}function ue(W){let C=gs(0,.86,W),N=H*(1+1.15*C);G.uZoom.value=N;let U=gs(0,.5,W),tt=G.uCover.value.clone().divideScalar(N),et=(rt,gt)=>Math.max(gt,Math.min(1-gt,rt));G.uCenter.value.set(et(Jo(Z[0],z[0],U),tt.x/2),et(Jo(Z[1],z[1],U),tt.y/2)),Et.value=qt*Kt*N}Nt();let le=new ResizeObserver(Nt);le.observe(I);let Ie=new Ft(0,0),ee=-10,Je=0,he=0;function Te(W){let C=I.getBoundingClientRect(),N=(W.clientX-C.left)/C.width,U=1-(W.clientY-C.top)/C.height,tt=G.uCover.value,et=G.uZoom.value,rt=G.uCenter.value,gt=(N-.5)*tt.x/et+rt.x,bt=(U-.5)*tt.y/et+rt.y;return[(E?1-gt:gt)*c,(1-bt)*p,N,U]}function ye(W){let[C,N,U,tt]=Te(W);Ie.set((U-.5)*2,(tt-.5)*2),G.uMousePx.value.set(C,N),he=1,ee=performance.now()/1e3}function Re(){he=0}let B=0;function ke(W){let[C,N]=Te(W);Y[B%4].set(C,N,G.uTime.value,1),B++,ye(W)}I.addEventListener("pointermove",ye,{passive:!0}),I.addEventListener("pointerdown",ke,{passive:!0}),I.addEventListener("pointerleave",Re,{passive:!0});let _t=e.progress,$t=!1;function ut(W){W===$t||I===n||($t=W,I.style.position=W?"fixed":"sticky",I.style.pointerEvents=W?"none":"",G.uSee.value=W?1:0)}let se=1;function vt(){if(!e.scroll)return _t;let W=n.getBoundingClientRect(),C=W.height-window.innerHeight;return C<60&&(C=Math.max(1,W.height*.9)),se=e.enter?ma(1-W.top/(window.innerHeight*e.enterLength)):1,Rt=ma(-W.top/C),ut(e.enter&&W.top>0&&W.top<window.innerHeight),Rt>0?Rt:.9*(1-se)}let Rt=0,S=performance.now(),M=new Ft(0,0),D=0,st=!0,_=S,ot=vt(),lt=-1;function K(W){if(!st)return;D=requestAnimationFrame(K);let C=(W-S)/1e3,N=Math.min(.25,(W-_)/1e3),U=Math.min(.05,N);_=W;let tt=vt();ot+=(tt-ot)*(1-Math.exp(-N*7)),Math.abs(tt-ot)<4e-4&&(ot=tt);let et=Rt;e.onProgress&&Math.abs(et-lt)>.001&&(lt=et,e.onProgress(et)),e.onEnter&&e.onEnter(se);let rt=n.getBoundingClientRect();if(rt.bottom<-50||rt.top>window.innerHeight+50)return;let gt=W/1e3-ee>2.5,bt=new Ft(Math.sin(C*.23)*.55+Math.sin(C*.61)*.12,Math.cos(C*.31)*.38),nt=gt?bt.multiplyScalar(r):Ie;M.lerp(nt,1-Math.pow(.0015,U));let xt=gs(0,.6,ot);G.uTilt.value.set(M.x*(1-.5*xt),M.y+xt*.55),Je+=(he*(gt?0:1)-Je)*(1-Math.pow(.002,U)),G.uMouseOn.value=Je*(1-gs(.4,.8,ot)),G.uTime.value=C;let Bt=Math.min(1,C/2.6);G.uIntro.value=1-Math.pow(1-Bt,3),G.uProg.value=ot,G.uDissR.value=Jo(-420,780,gs(.4,.88,ot)),ue(ot),b.render(j,L)}D=requestAnimationFrame(K);let X={renderer:b,scene:j,stage:I,setParallax(W){G.uParallax.value.set(.0165*W,.0115*W)},setProgress(W){_t=ma(W)},destroy(){st=!1,cancelAnimationFrame(D),le.disconnect(),I.removeEventListener("pointermove",ye),I.removeEventListener("pointerdown",ke),I.removeEventListener("pointerleave",Re),b.dispose(),v.remove(),I!==n&&I.remove()}};return typeof e.onReady=="function"&&e.onReady(X),X}var Nh={plate:"/vendor/art-plate-2.webp",depth:"/vendor/img/art-depth.png",mask:"/vendor/img/art-mask.png",meta:{size:[1600,900],background:"#f6e3d1",plateBg:[.93,.84,.75],focus:[.72,.5],heart:[1180,390],mirror:!1,brush:{a:[1612,362],b:[1396,690],pivot:[1380,712],radius:30,amp:.013},glints:[[1486,122,40,.9,0],[1302,190,32,1.1,1.7],[944,724,44,.8,3.1],[1384,630,36,1,4.4],[1160,674,30,1.3,2.2],[1456,300,30,1.2,5.3],[1424,470,32,.9,.9],[1058,446,28,1.4,3.9],[1030,598,30,1,6],[1352,728,34,.7,1.2],[1452,548,28,1.5,2.8],[1250,712,30,1.1,4.9]],drips:[[1372,716,190,1,0],[1368,772,150,.85,.37],[1288,848,140,.9,.61],[1262,828,170,.8,.18],[1335,828,160,.95,.83],[1215,840,130,.75,.52],[1142,830,150,.88,.29]]}};window.ArtScene={mount(n,t={}){return Ph(n,Object.assign({assets:Nh},t))}};})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
/*!
 * Art Scene Engine — semi-3D "living image" visualization.
 * The artwork image is the base (front view matches it 1:1); GLSL adds depth parallax,
 * flowing paint, sparkles, sheen, floating beads, falling drips, cursor light, click ripples
 * and a scroll finale where the scene is pulled in, torn open by a spiral ring of paint and
 * dissolves into the page background.
 *
 * Everything image-specific lives in assets/meta.json (+ plate / depth / mask images).
 *
 *   import { mountArtScene } from './art-engine.js';
 *   mountArtScene(document.getElementById('stage'), { assets: './assets/' });
 */
