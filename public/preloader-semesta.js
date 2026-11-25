/* The Art Archive — Preloader 3D "Semesta di Dalam Lukisan"
   Pasang tepat setelah tag body, sebagai script dengan src="preloader-semesta.js".
   Event saat selesai: window.addEventListener('preloader:done', ...)
   Putar ulang: ArtPreloader.play()                                          */
(() => {
const CFG = { maxWait: 14, autoEnter: 8, oncePerSession: true };  // autoEnter: detik; 0 = tunggu pengunjung
const TAU = Math.PI * 2;
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const seg = (t, a, b) => clamp((t - a) / (b - a));
const eio = t => t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;

/* ---------- acak berbiji: lukisan konsisten ---------- */
  let seed = 1889;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const rr = (a, b) => a + rnd() * (b - a);
  const pick = a => a[(rnd() * a.length) | 0];

  /* ---------- komposisi (koordinat 1000 x 700) ---------- */
  const PW = 1000, PH = 700;
  const VORT = [[455,235,150,1],[610,305,105,-1],[170,140,80,1],[820,330,90,1]];
  const STARS = [[875,105,62,1],[90,90,24],[250,60,18],[345,150,22],[560,75,26],[705,175,20],[130,265,30],[300,345,36],[735,55,15],[945,300,19]];
  function flow(x, y) {
    let vx = 1, vy = Math.sin(x * .011 + y * .008) * .55;
    const add = (cx, cy, r, dir, k) => {
      const dx = x - cx, dy = y - cy, d = Math.hypot(dx, dy) + .01;
      const w = Math.exp(-(d*d) / (r*r)) * k;
      vx += (-dy/d * dir + dx/d * -.12) * w; vy += (dx/d * dir + dy/d * -.12) * w;
    };
    VORT.forEach(v => add(v[0], v[1], v[2], v[3], 5));
    STARS.forEach(s => add(s[0], s[1], s[2]*1.35, 1, 7));
    return Math.atan2(vy, vx);
  }
  const ridge = x => 480 + Math.sin(x*.0062 + 1.2)*38 + Math.sin(x*.019)*12 - seg(x,620,1000)*55;
  const mix = [];
  function stroke(x, y, col, w, len, order, fx, layer = 10) {
    const pts = [[x, y]], n = 5;
    for (let i = 0; i < n; i++) {
      const a = fx(x, y); x += Math.cos(a)*len/n; y += Math.sin(a)*len/n; pts.push([x, y]);
    }
    mix.push({ pts, col, w, order, layer });
  }
  const DROP = [455, 235];
  const radial = (x, y) => Math.hypot(x - DROP[0], y - DROP[1]) / 760;
  /* langit */
  const SKY = ['#0f2257','#17306e','#1f418a','#2c569f','#3e6cb0','#1a2c5c','#5b86bd','#274a85'];
  for (let gy = -10; gy < 560; gy += 12) for (let gx = -30; gx < 1020; gx += 15) {
    const x = gx + rr(-8,8), y = gy + rr(-7,7);
    if (y > ridge(x) + 14) continue;
    let col = pick(SKY);
    for (const v of VORT) {
      const d = Math.hypot(x-v[0], y-v[1]);
      if (d < v[2]*1.15 && Math.sin(d*.11 - Math.atan2(y-v[1],x-v[0])*2*v[3]) > .35) col = pick(['#8fb4d6','#b9d3df','#6f9ac8','#dfe6d2']);
    }
    if (y > ridge(x) - 85 && rnd() < .35) col = pick(['#7fa6c9','#a9c4cf','#5784b4']);
    stroke(x, y, col, rr(5,9), rr(24,46), radial(x,y)*.52 + rr(0,.06), flow);
  }
  /* bintang & bulan: lingkaran sapuan konsentris */
  STARS.forEach(([sx, sy, r, moon], si) => {
    for (let ring = r*1.5; ring > 3; ring -= moon ? 6 : 5) {
      const q = ring / (r*1.5), count = Math.ceil(ring / 3.2);
      for (let i = 0; i < count; i++) {
        const a = i/count*TAU + rr(-.25,.25);
        const col = q > .72 ? pick(['#8fb0bd','#b7c7a4','#6f97b8']) : q > .42 ? pick(['#e8d278','#f1df94','#cdbb6a']) : pick(['#f6c544','#ffdd6e','#eea92f','#fff0ae']);
        stroke(sx + Math.cos(a)*ring, sy + Math.sin(a)*ring, col, rr(3.2,5.4), ring*.55 + 5,
          .52 + si*.014 + (1-q)*.06, (x,y) => Math.atan2(y-sy, x-sx) + Math.PI/2, 25);
      }
    }
  });
  /* perbukitan & lembah */
  for (let gy = 410; gy < 715; gy += 10) for (let gx = -20; gx < 1020; gx += 15) {
    const x = gx + rr(-7,7), y = gy + rr(-5,5), d = y - ridge(x);
    if (d < 0) continue;
    const col = d < 12 ? pick(['#0d1a38','#6d90b4']) : y < 585 ? pick(['#1c3a5e','#274c6d','#173050','#3a6178','#2d4c55']) : pick(['#142a33','#203c36','#34503c','#17283f','#4a5c3c']);
    stroke(x, y, col, rr(5,8), rr(20,34), .50 + (x/1000)*.14 + rr(0,.05),
      (a,b) => Math.atan((ridge(a+8) - ridge(a-8))/16) + Math.sin(a*.03 + b*.05)*.25, 70 + clamp((gy-410)/300)*30 | 0);
  }
  /* desa */
  const houses = [];
  for (let i = 0; i < 30; i++) houses.push({ x: 300 + i*21 + rr(-12,12), y: rr(575,665), w: rr(24,44), h: rr(15,28), o: .70 + i*.003 });
  houses.sort((a,b) => a.y - b.y);
  /* cemara: lidah api gelap */
  for (let i = 0; i < 620; i++) {
    const v = Math.pow(rnd(), .85), y = 715 - v*610;
    const half = (1-v) * 74 * (1 + .28*Math.sin(v*26)) + 2;
    const x = 168 + Math.sin(v*9)*13*v + rr(-half, half);
    stroke(x, y + 16, pick(['#071009','#0f1c12','#192716','#24301a','#0a1418','#3a331a']), rr(4,8.5), rr(22,48),
      .72 + v*.16 + rr(0,.03), (a,b) => -Math.PI/2 + Math.sin(b*.055 + a*.04)*.55, 190);
  }
  mix.sort((a,b) => a.order - b.order);

/* ---------- lukisan sumber + peta arah kuas & lapisan kedalaman ---------- */
function buildArt() {
  const mk = () => { const c = document.createElement('canvas'); c.width = PW; c.height = PH; return c.getContext('2d', { willReadFrequently: true }); };
  const col = mk(), map = mk();               // map: R,G = arah (cos2a,sin2a), B = lapisan
  col.fillStyle = '#14295c'; col.fillRect(0,0,PW,PH);
  map.fillStyle = 'rgb(255,128,10)'; map.fillRect(0,0,PW,PH);
  const line = (c, s, ox, oy) => { c.beginPath(); s.pts.forEach((p,i) => i ? c.lineTo(p[0]+ox,p[1]+oy) : c.moveTo(p[0]+ox,p[1]+oy)); c.stroke(); };
  col.lineCap = map.lineCap = 'round';
  const paintStroke = s => {
    col.strokeStyle = 'rgba(3,8,24,.3)'; col.lineWidth = s.w; line(col,s,1.2,1.8);
    col.strokeStyle = s.col; col.lineWidth = s.w*.9; line(col,s,0,0);
    col.strokeStyle = 'rgba(255,248,225,.25)'; col.lineWidth = s.w*.22; line(col,s,-.8,-s.w*.22);
    map.lineWidth = s.w;
    for (let i = 1; i < s.pts.length; i++) {
      const [ax,ay] = s.pts[i-1], [bx,by] = s.pts[i], a = Math.atan2(by-ay, bx-ax)*2;
      map.strokeStyle = `rgb(${(Math.cos(a)*127+128)|0},${(Math.sin(a)*127+128)|0},${s.layer})`;
      map.beginPath(); map.moveTo(ax,ay); map.lineTo(bx,by); map.stroke();
    }
  };
  let churchDone = false, h = 0;
  const church = () => {
    for (const [c, f] of [[col,'#122044'],[map,'rgb(128,1,110)']]) {
      c.fillStyle = f; c.beginPath(); [[520,640],[520,575],[540,575],[549,478],[558,575],[600,590],[600,640]].forEach((p,i)=> i?c.lineTo(...p):c.moveTo(...p)); c.fill();
    }
    col.fillStyle = '#ffc94d'; col.fillRect(573,606,8,13);
  };
  for (const s of mix) {
    while (h < houses.length && houses[h].o <= s.order) house(houses[h++]);
    if (!churchDone && s.order > .72) { church(); churchDone = true; }
    paintStroke(s);
  }
  function house(o) {
    const roof = c => { c.beginPath(); c.moveTo(o.x-4,o.y); c.lineTo(o.x+o.w/2,o.y-13); c.lineTo(o.x+o.w+4,o.y); c.fill(); };
    col.fillStyle = '#122143'; col.fillRect(o.x,o.y,o.w,o.h); col.fillStyle = (o.x|0)%3 ? '#31507f' : '#6d5058'; roof(col);
    map.fillStyle = 'rgb(255,128,105)'; map.fillRect(o.x,o.y,o.w,o.h); roof(map);
    col.fillStyle = '#ffcf55'; col.fillRect(o.x+o.w*.2,o.y+o.h*.35,6,8); if (o.w>32) col.fillRect(o.x+o.w*.65,o.y+o.h*.35,6,8);
  }
  // bulan sabit
  col.fillStyle = '#ffd24a'; col.beginPath(); col.arc(875,105,34,-1.25,2.5); col.quadraticCurveTo(897,111,885.7,72.7); col.fill();
  return { col: col.getImageData(0,0,PW,PH).data, map: map.getImageData(0,0,PW,PH).data };
}

function textPoints() {
  const c = document.createElement('canvas'); c.width = 1400; c.height = 260;
  const x = c.getContext('2d', { willReadFrequently: true });
  const parts = [['The ',''],['Art','italic '],[' Archive','']];
  const font = it => `${it}500 190px "Cormorant Garamond", Georgia, serif`;
  let total = 0; const ws = parts.map(([s,it]) => { x.font = font(it); const w = x.measureText(s).width; total += w; return w; });
  const k = Math.min(1, 1360/total); x.translate(700 - total*k/2, 180); x.scale(k,k);
  let cx = 0; parts.forEach(([s,it],i) => { x.font = font(it); x.fillStyle = it ? '#f00' : '#fff'; x.fillText(s,cx,0); cx += ws[i]; });
  const d = x.getImageData(0,0,1400,260).data, out = [];
  for (let y = 0; y < 260; y += 2) for (let i = 0; i < 1400; i += 2) { const q = (y*1400+i)*4; if (d[q+3] > 140) out.push([i-700, 130-y, d[q+1] < 100]); }
  return out;
}

/* ---------- shader ---------- */
const NOISE = `
float h21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+1.),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p=mat2(1.6,1.2,-1.2,1.6)*p;a*=.5;}return v;}`;

const PVS = `precision highp float;
attribute vec3 aArt; attribute vec3 aCol; attribute vec4 aTxt; attribute vec4 aRnd; attribute vec3 aMeta; /* sudut, ukuran, jenis */
uniform vec2 uRes; uniform float uT, uBang, uText, uArt, uFrame, uDive, uHold, uReveal, uFit, uTxtFit, uDpr, uCell, uYaw, uPitch;
uniform vec3 uShock;
varying vec4 vCol; varying vec3 vShape;
const float TAU=6.2831853;
float ease(float x){x=clamp(x,0.,1.);return x*x*x*(x*(x*6.-15.)+10.);}
vec3 rotY(vec3 p,float a){float c=cos(a),s=sin(a);return vec3(c*p.x+s*p.z,p.y,-s*p.x+c*p.z);}
vec3 rotX(vec3 p,float a){float c=cos(a),s=sin(a);return vec3(p.x,c*p.y-s*p.z,s*p.y+c*p.z);}
void main(){
  float kind=aMeta.z;            /* 0 lukisan, 1 bingkai, 2 debu */
  /* galaksi spiral */
  float rad=30.+pow(aRnd.x,.75)*720.;
  float arm=floor(aRnd.y*4.)/4.*TAU;
  float th=arm+rad*.0085+(aRnd.z-.5)*(abs(aRnd.z-.5)*3.2+.25)*(1.7-aRnd.x*.7)+uT*(.25+90./(rad+160.));
  vec3 gal=vec3(cos(th)*rad,(aRnd.w-.5)*130.*(1.-aRnd.x*.7),sin(th)*rad);
  gal=rotX(gal,.95+sin(uT*.3)*.08);
  float b=1.-pow(1.-clamp(uBang*(1.15-aRnd.w*.15),0.,1.),4.);
  vec3 spark=normalize(aRnd.xyz-.5)*(3.+aRnd.w*9.)*(1.+.3*sin(uT*7.));
  vec3 pos=mix(spark,gal*uFit*1.05,b);

  vec3 galCol = aRnd.w<.07 ? vec3(1.,.93,.72) : mix(mix(vec3(1.,.72,.27),vec3(.24,.45,.95),smoothstep(.04,.42,aRnd.x)),vec3(.45,.24,.72),smoothstep(.6,1.,aRnd.x)*aRnd.z);
  vec3 col=galCol; float alpha=.75, glow=1., size=(1.7+pow(aRnd.z,6.)*9.)*uDpr, ang=th, stretch=1.;

  /* menjadi huruf */
  float tm=ease(uText*1.7-(aTxt.x*uTxtFit/uRes.x+.5)*.7*aTxt.w);
  if(kind>.5) tm*=1.-ease(uArt*3.);
  if(aTxt.w>.5){
    vec3 tp=vec3(aTxt.xy*uTxtFit,0.);
    tp.xy+=vec2(sin(uT*2.+aRnd.y*TAU),cos(uT*1.7+aRnd.x*TAU))*1.4*uDpr;
    pos=mix(pos,tp,tm)+vec3(0.,0.,sin(tm*3.14159)*220.*(aRnd.z-.5))*uFit;
    vec3 tc=aTxt.z>.5?vec3(1.,.62,.38):mix(vec3(1.,.83,.45),vec3(1.,.97,.86),aRnd.y);
    col=mix(col,tc,tm); alpha=mix(alpha,1.,tm); size=mix(size,(3.4+aRnd.w*1.8)*max(uTxtFit,.55*uDpr),tm); glow=mix(glow,.35,tm);
  } else { alpha*=1.-.78*uText*(1.-ease(uArt*2.)); }

  /* menjadi lukisan */
  float delay=kind<.5 ? length(aArt.xy-vec2(-45.,115.))/760.*.55+aRnd.y*.12 : aRnd.y*.1;
  float am=kind<.5?ease(uArt*1.75-delay):(kind<1.5?ease(uFrame*1.6-delay-fract(atan(aArt.y,aArt.x)/TAU+.75)*.5):0.);
  if(kind<1.5){
    vec3 ap=aArt;
    if(kind<.5){
      vec2 dir=vec2(cos(aMeta.x),sin(aMeta.x));
      float live=aArt.z<-5.?5.:(aArt.z<60.?1.2:2.2);
      ap.xy+=dir*sin(uT*1.9-dot(aArt.xy,vec2(.021,.013))+aRnd.y*1.4)*live*am;
      ap.z+=sin(aArt.x*.017+uT*1.1)*cos(aArt.y*.021-uT*.8)*9.;
    }
    ap*=uFit; ap=rotX(rotY(ap,uYaw),uPitch);
    vec3 mid=mix(pos,ap,am);
    float sw=sin(am*3.14159)*(2.2+aRnd.x)*(kind<.5?1.:.5);       /* lintasan berpusar */
    float c=cos(sw),s=sin(sw); mid.xy=mat2(c,s,-s,c)*mid.xy;
    mid.z+=sin(am*3.14159)*260.*(aRnd.w-.35)*uFit;
    pos=mid;
    vec3 ac=aCol;
    if(kind<.5 && aArt.z>30.&&aArt.z<60.&&aArt.y>-20.) ac*=1.12+.28*sin(uT*3.+aRnd.x*TAU);          /* bintang berkelip */
    if(kind>.5){ float sh=pow(max(0.,sin((aArt.x+aArt.y)*.006-uT*2.2)),14.); ac+=vec3(.55,.45,.22)*sh; }
    float k=smoothstep(.2,.95,am);
    col=mix(col,ac,k); alpha=mix(alpha,kind<.5?.98:1.,k); glow*=1.-k;
    size=mix(size,max(aMeta.y*uCell*uFit,1.6*uDpr),k); stretch=mix(1.,kind<.5?2.7:1.,k);
    if(kind<.5) ang=mix(ang,aMeta.x,k);
  } else { alpha*=1.-.45*uArt; }

  /* bergetar saat ditahan */
  pos+=vec3(sin(uT*43.+aRnd.x*99.),cos(uT*39.+aRnd.y*99.),sin(uT*31.+aRnd.z*99.))*uHold*uHold*(2.+7.*aRnd.w)*uDpr;

  /* terjun ke bulan */
  vec3 moon=rotX(rotY(vec3(375.,245.,96.)*uFit,uYaw),uPitch);
  float dv=uDive*uDive*uDive;
  pos.xy-=moon.xy*ease(uDive*1.25);
  float tw=dv*(1.6+aRnd.x*.5)/(1.+length(pos.xy)/(260.*uFit));
  pos.xy=mat2(cos(tw),sin(tw),-sin(tw),cos(tw))*pos.xy;

  float D=1500.*max(uFit,uDpr*.5);
  float camZ=D-dv*(D*1.12);
  float dz=camZ-pos.z+dv*aRnd.w*80.;
  float persp=D/max(dz,1.);
  vec2 scr=pos.xy*persp + vec2(0.,uRes.y*.062*uArt*(1.-uDive));

  /* klik membuat gelombang */
  vec2 ds=scr-uShock.xy; float sd=length(ds)+.001;
  float wave=exp(-pow((sd-uShock.z*900.*uDpr)/(42.*uDpr),2.))*max(0.,1.-uShock.z*1.2);
  scr+=ds/sd*wave*46.*uDpr; col+=wave*.4;

  if(dv>.02){ float ra=atan(scr.y,scr.x); ang=mix(ang,ra,smoothstep(.02,.35,dv)); stretch+=dv*7.; col=mix(col,vec3(1.,.86,.52),dv*.5); glow=max(glow,dv*.7); }
  float ps=size*min(persp,5.)*sqrt(stretch);
  if(dz<25.) alpha=0.;
  alpha*=smoothstep(25.,260.,dz)*(1.-smoothstep(.0,.55,uReveal));
  gl_Position=vec4(scr/(uRes*.5),0.,1.);
  gl_PointSize=clamp(ps,1.,64.*uDpr);
  vCol=vec4(col,alpha); vShape=vec3(ang,stretch,glow);
}`;

const PFS = `precision mediump float;
varying vec4 vCol; varying vec3 vShape;
void main(){
  vec2 p=(gl_PointCoord-.5)*2.; p.y=-p.y;
  float c=cos(vShape.x),s=sin(vShape.x); vec2 q=vec2(c*p.x+s*p.y,-s*p.x+c*p.y);
  float st=max(vShape.y,1.); float d=length(vec2(q.x,q.y*st));
  float hard=1.-smoothstep(.72,1.,d), soft=exp(-d*d*4.5);
  float a=mix(hard,soft,vShape.z)*vCol.a; if(a<.01) discard;
  vec3 col=vCol.rgb*(1.+(1.-vShape.z)*q.y*st*.2);          /* relief impasto */
  gl_FragColor=vec4(col*a, a*(1.-vShape.z));
}`;

const BVS = `attribute vec2 p; void main(){gl_Position=vec4(p,0.,1.);}`;
const BFS = `precision highp float;
uniform vec2 uRes,uCenter; uniform float uT,uBang,uArt,uDive,uHold,uReveal;
${NOISE}
void main(){
  vec2 uv=(gl_FragCoord.xy-uRes*.5)/uRes.y;
  float r=length(uv), a=atan(uv.y,uv.x);
  float tw=a+1.6*exp(-r*1.8)+uT*.05+uDive*2./(r+.35);
  vec2 q=vec2(cos(tw),sin(tw))*r*3.;
  float n=fbm(q+fbm(q*1.7+uT*.07)*1.6);
  vec3 col=mix(vec3(.012,.016,.045),vec3(.025,.05,.14),smoothstep(1.2,0.,r));
  col+=vec3(.04,.10,.25)*pow(n,3.)*1.7*uBang;
  col+=vec3(.20,.09,.25)*pow(fbm(q*1.3-uT*.04),4.)*uBang;
  vec2 g=gl_FragCoord.xy/3.; float st=step(.9975,h21(floor(g)));
  col+=st*(.35+.35*sin(uT*3.+h21(floor(g))*60.))*smoothstep(.5,0.,length(fract(g)-.5));
  /* percikan pertama & kilat ledakan */
  float birth=smoothstep(0.,.9,uT)*(1.-smoothstep(0.,.35,uBang));
  col+=vec3(1.,.76,.36)*birth*(.0055/(r+.006))*(1.+.2*sin(uT*9.));
  col+=vec3(1.,.82,.55)*sin(clamp(uBang*2.2,0.,1.)*3.14159)*exp(-r*3.5)*.8;
  float ring=exp(-pow((r-uBang*1.7)*70.,2.))*(1.-uBang)*.55*step(.001,uBang);
  col+=vec3(.6,.75,1.)*ring;
  col+=vec3(.45,.29,.10)*uArt*exp(-r*r*3.2)*.55*(1.+uHold);
  /* cahaya bulan menelan layar */
  float flood=smoothstep(.45,1.,uDive);
  col+=vec3(1.,.78,.38)*uDive*uDive*.12/(r+.09);
  col=mix(col,vec3(.957,.925,.882),smoothstep(0.,1.,flood*1.5-r*.55));
  col*=1.-.4*smoothstep(.45,1.15,r)*(1.-flood);
  /* tersingkap: tepi cat air yang terbakar emas */
  float alpha=1., edge=0.;
  if(uReveal>0.){
    float m=r+(fbm(uv*3.2+7.)-.5)*.65+(fbm(uv*14.)-.5)*.12;
    float rr=uReveal*uReveal*(3.-2.*uReveal)*2.1-.35;
    alpha=smoothstep(rr-.008,rr+.008,m);
    edge=exp(-pow((m-rr-.025)*34.,2.));
    col=mix(col,vec3(.80,.58,.26),edge);
    float blue=exp(-pow((m-rr-.085)*24.,2.));
    col=mix(col,vec3(.11,.23,.52),blue*.85);
    alpha=max(alpha,edge*smoothstep(rr-.04,rr,m))*(1.-smoothstep(.9,1.,uReveal));
  }
  gl_FragColor=vec4(col*alpha,alpha);
}`;

const css = `
#aap{position:fixed;inset:0;z-index:2147483647;overflow:hidden;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;font-family:'DM Sans',system-ui,sans-serif;color:#f3e7cf}
#aap canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
#aap.go{pointer-events:none}#aap.go .ui{opacity:0}
#aap .ui{position:absolute;inset:0;transition:opacity .45s}
#aap .bars{position:absolute;inset:0;pointer-events:none}
#aap .bars:before,#aap .bars:after{content:'';position:absolute;left:22px;right:22px;height:1px;background:linear-gradient(90deg,transparent,#d8b46a66,transparent)}
#aap .bars:before{top:20px}#aap .bars:after{bottom:20px}
#aap .cap{position:absolute;left:16px;right:16px;bottom:calc(clamp(64px,10vh,104px) + 40px);text-align:center;font:italic 500 clamp(21px,3.4vh,31px)/1.25 'Cormorant Garamond',Georgia,serif;text-shadow:0 2px 18px #000c;transition:opacity .5s,filter .5s,transform .5s}
#aap .cap.off{opacity:0;filter:blur(8px);transform:translateY(10px)}
#aap .num{position:absolute;left:0;right:0;bottom:30px;text-align:center;font:italic 500 clamp(64px,10vh,104px)/1 'Cormorant Garamond',Georgia,serif;font-variant-numeric:lining-nums tabular-nums;color:#ffe3a3;text-shadow:0 0 24px #e8b85a88,0 2px 12px #000;transition:opacity .4s;pointer-events:none}
#aap .enter{position:absolute;left:50%;bottom:26px;transform:translate(-50%,14px) scale(.9);opacity:0;pointer-events:none;background:none;border:0;padding:0;color:inherit;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:8px;transition:.8s cubic-bezier(.2,.8,.2,1)}
#aap.ready .enter{opacity:1;transform:translate(-50%,0);pointer-events:auto}#aap.ready .num{opacity:0}#aap.ready .cap{bottom:calc(122px + 1vh);font-size:clamp(17px,2.6vh,24px)}
#aap .enter svg{width:64px;height:64px;filter:drop-shadow(0 0 10px #f0c566aa)}
#aap .enter .core{transform-origin:32px 32px;animation:aapPulse 1.8s ease-in-out infinite}
#aap .enter small{font:500 10px 'DM Sans',sans-serif;letter-spacing:.36em;text-shadow:0 0 10px #000}
@keyframes aapPulse{50%{transform:scale(1.45);opacity:.55}}
#aap .skip{position:absolute;right:24px;bottom:30px;background:none;border:0;color:#f3e7cf99;font:10px 'DM Sans',sans-serif;letter-spacing:.3em;cursor:pointer}
@media(max-width:600px){#aap .skip{bottom:auto;top:30px}}
`;

const CAPS = [[0,'Pada mulanya, hanya ada gelap…'],[1.5,'lalu satu percikan warna.'],[3.9,''],[6.7,'Setiap sapuan mencari tempatnya,'],[9.2,'hingga malam menjadi sebuah karya.']];

let running = false;
function play() {
  if (running) return; running = true;
  if (!document.getElementById('aap-font')) {
    const l = document.createElement('link'); l.id = 'aap-font'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&family=DM+Sans:wght@400;500&display=swap';
    document.head.appendChild(l);
  }
  const root = document.createElement('div'); root.id = 'aap';
  root.setAttribute('role','dialog'); root.setAttribute('aria-label','Pembuka The Art Archive');
  root.style.background = '#040612';
  root.innerHTML = `<style>${css}</style><canvas></canvas><div class="ui"><div class="bars"></div><div class="cap off" aria-live="polite"></div><div class="num">0</div>
  <button type="button" class="enter" aria-label="Tahan untuk masuk"><svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" fill="none" stroke="#f3e7cf44"/><circle class="ring" cx="32" cy="32" r="28" fill="none" stroke="#ffd778" stroke-width="3" stroke-linecap="round" stroke-dasharray="176" stroke-dashoffset="176" transform="rotate(-90 32 32)"/><circle class="core" cx="32" cy="32" r="7" fill="#ffe19a"/></svg><small>TAHAN UNTUK MASUK</small></button>
  <button type="button" class="skip">LEWATI</button></div>`;
  document.body.appendChild(root);
  const prevOverflow = document.documentElement.style.overflow;
  document.documentElement.style.overflow = 'hidden';
  const $ = s => root.querySelector(s);
  const cv = $('canvas');
  let raf = 0, dead = false;
  const listeners = [];
  const on = (el, ev, fn) => { el.addEventListener(ev, fn); listeners.push([el,ev,fn]); };
  function finish() {
    if (dead) return; dead = true; cancelAnimationFrame(raf);
    listeners.forEach(([e,v,f]) => e.removeEventListener(v,f));
    const lose = gl && gl.getExtension('WEBGL_lose_context');
    root.remove(); if (lose) lose.loseContext();
    document.documentElement.style.overflow = prevOverflow; running = false;
    dispatchEvent(new CustomEvent('preloader:done'));
  }
  const gl = cv.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, powerPreference: 'high-performance' });
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  $('.skip').onclick = finish;
  if (!gl || reduce) { $('.cap').textContent = 'The Art Archive'; $('.cap').classList.remove('off'); setTimeout(finish, 1400); return; }
  on(cv, 'webglcontextlost', e => { e.preventDefault(); finish(); });

  const font = document.fonts ? Promise.all([document.fonts.load('500 100px "Cormorant Garamond"'), document.fonts.load('italic 500 100px "Cormorant Garamond"')]) : Promise.resolve();
  const link = document.getElementById('aap-font');
  const sheet = new Promise(r => { if (link.sheet) r(); else { link.addEventListener('load', r); link.addEventListener('error', r); } });
  Promise.race([sheet.then(() => document.fonts && Promise.all([document.fonts.load('500 100px "Cormorant Garamond"'), document.fonts.load('italic 500 100px "Cormorant Garamond"')])), new Promise(r => setTimeout(r, 1500))])
    .catch(() => {}).then(() => { if (!dead) { try { start(); } catch (e) { console.error(e); finish(); } } });

  function start() {
    const shader = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s,src); gl.compileShader(s); if (!gl.getShaderParameter(s,gl.COMPILE_STATUS)) throw Error(gl.getShaderInfoLog(s)); return s; };
    const program = (v, f) => { const p = gl.createProgram(); gl.attachShader(p,shader(gl.VERTEX_SHADER,v)); gl.attachShader(p,shader(gl.FRAGMENT_SHADER,f)); gl.linkProgram(p); if (!gl.getProgramParameter(p,gl.LINK_STATUS)) throw Error(gl.getProgramInfoLog(p));
      const u = {}; for (let i = 0; i < gl.getProgramParameter(p,gl.ACTIVE_UNIFORMS); i++) { const n = gl.getActiveUniform(p,i).name; u[n] = gl.getUniformLocation(p,n); } return { p, u }; };
    const P = program(PVS,PFS), B = program(BVS,BFS);

    /* ---------- susun partikel ---------- */
    const small = Math.min(innerWidth, innerHeight) < 600;
    const cell = small ? 4.6 : 3.4;
    const art = buildArt(), txt = textPoints();
    const list = [];
    for (let y = cell/2; y < PH; y += cell) for (let x = cell/2; x < PW; x += cell) {
      const jx = clamp(x + (rnd()-.5)*cell*.7, 0, PW-1), jy = clamp(y + (rnd()-.5)*cell*.7, 0, PH-1);
      const q = (((jy|0)*PW) + (jx|0))*4;
      const ang = -Math.atan2(art.map[q+1]-128, art.map[q]-128)/2;
      const layer = art.map[q+2];
      let z = (layer - 40)*.5;                          // kedalaman per lapisan
      for (const s of STARS) { const d = Math.hypot(jx-s[0], jy-s[1])/(s[2]*1.5); if (d < 1 && layer < 40) z = Math.max(z, 55*(1-d*d)); }
      list.push([jx-500, 350-jy, z, art.col[q]/255, art.col[q+1]/255, art.col[q+2]/255, ang, 2.9, 0]);
    }
    /* bingkai emas dengan ukiran */
    const gold = [[.45,.29,.09],[.72,.52,.2],[.93,.76,.38],[1,.91,.62],[.58,.4,.14]];
    const fs = small ? 3.9 : 2.5;
    for (let y = -396; y <= 396; y += fs) for (let x = -546; x <= 546; x += fs) {
      const ax = Math.abs(x) - 500, ay = Math.abs(y) - 350, across = Math.max(ax, ay);
      if (across < 0) { x = Math.max(x, 500 - fs - ((500 - fs - x) % fs)); continue; }
      const along = ax > ay ? y : x;
      const bead = Math.max(0, 1 - Math.hypot((((along % 22) + 22) % 22 - 11)/10, (across - 23)/11.5)**2);
      const leaf = .5 + .5*Math.sin(along*.55 + Math.sin(across*.7)*2.2);
      let c, z = 14;
      if (across < 4) { c = [1,.9,.6]; z = 18; }
      else if (across < 9) c = [.3,.18,.05];
      else if (across < 36) { c = bead > 0 ? [.55+.45*bead, .38+.52*bead, .1+.52*bead] : [.46+.2*leaf, .31+.17*leaf, .09+.09*leaf]; z = 16 + bead*20; }
      else if (across < 40) c = [.3,.18,.05];
      else { c = [.8+.18*leaf, .6+.2*leaf, .24+.18*leaf]; z = 22; }
      // sinar dari kiri atas
      const lit = 1.06 + (y - x)/4200;
      list.push([x + rr(-.4,.4), y + rr(-.4,.4), z, c[0]*lit, c[1]*lit, c[2]*lit, 0, fs*1.75/cell, 1]);
    }
    // roset sudut
    for (const sx of [-1,1]) for (const sy of [-1,1]) for (let i = 0; i < (small ? 160 : 420); i++) {
      const a = rnd()*TAU, r = Math.sqrt(rnd())*34*(1 + .28*Math.cos(a*8)), k = 1 - r/44;
      list.push([sx*523 + Math.cos(a)*r, sy*373 + Math.sin(a)*r, 30 + k*30, .6+.4*k, .42+.5*k, .13+.5*k, 0, 1.5, 1]);
    }
    for (let i = 0; i < (small ? 2500 : 6000); i++) list.push([0,0,0, 1,1,1, 0, 1, 2]);
    list.sort((a,b) => (a[8]-b[8]) || (a[2]-b[2]));
    const N = list.length, S = 17, data = new Float32Array(N*S);
    // pilih partikel pembentuk huruf secara merata
    const order = Array.from({length: N}, (_,i) => i);
    for (let i = N-1; i > 0; i--) { const j = (rnd()*(i+1))|0; [order[i],order[j]] = [order[j],order[i]]; }
    const tOf = new Map(); const nText = Math.min(txt.length, (N*.45)|0);
    for (let i = 0; i < nText; i++) tOf.set(order[i], txt[(i*txt.length/nText)|0]);
    list.forEach((v,i) => {
      const t = tOf.get(i);
      data.set([v[0],v[1],v[2], v[3],v[4],v[5], t?t[0]:0, t?t[1]:0, t&&t[2]?1:0, t?1:0, rnd(),rnd(),rnd(),rnd(), v[6],v[7],v[8]], i*S);
    });
    const pbuf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,pbuf); gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW);
    const qbuf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,qbuf); gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
    const attrs = [['aArt',3,0],['aCol',3,3],['aTxt',4,6],['aRnd',4,10],['aMeta',3,14]].map(([n,s,o]) => [gl.getAttribLocation(P.p,n),s,o]);
    const qloc = gl.getAttribLocation(B.p,'p');

    let W, H, dpr, fit, txtFit;
    const resize = () => {
      dpr = Math.min(devicePixelRatio||1, small ? 1.6 : 1.75);
      W = cv.width = Math.round(innerWidth*dpr); H = cv.height = Math.round(innerHeight*dpr);
      fit = Math.min(W*.86/1092, H*.6/792); txtFit = Math.min(W*.9/1360, H*.0016*(dpr>1?dpr:1)+.35);
    };
    resize(); on(window,'resize',resize);

    let tx = 0, ty = 0, yawX = 0, yawY = 0, shock = [0,0,9], holding = false, hold = 0, autoAt = 0;
    const toGL = e => [e.clientX*dpr - W/2, H/2 - e.clientY*dpr];
    on(root,'pointermove', e => { tx = e.clientX/innerWidth - .5; ty = e.clientY/innerHeight - .5; });
    on(root,'pointerdown', e => { if (e.target.closest('.skip')) return; const p = toGL(e); shock = [p[0],p[1],0]; if (e.target.closest('.enter')) holding = true; });
    on(window,'pointerup', () => { holding = false; });
    on(window,'pointercancel', () => holding = false);
    on(window,'keydown', e => { if (e.key === 'Escape') finish(); else if ((e.key === 'Enter' || e.key === ' ') && ready && !e.target.closest?.('.skip')) { e.preventDefault(); holding = true; autoEnter = true; } });
    $('.enter').oncontextmenu = e => e.preventDefault();
    // ketuk singkat juga memulai (aksesibilitas)
    let downAt = 0, autoEnter = false;
    on($('.enter'),'pointerdown', () => downAt = performance.now());
    on($('.enter'),'click', e => { if (e.detail === 0 || performance.now() - downAt < 250) autoEnter = true; });

    const imgs = [...document.images].filter(i => i.loading !== 'lazy');
    const loaded = () => document.readyState === 'complete';
    let t = 0, last = 0, ready = false, dive = -1, reveal = 0, capI = -1, shown = 0;

    function frame(now) {
      const dt = last ? Math.min(.05,(now-last)/1000) : 0; last = now; t += dt;
      const bang = seg(t,1.7,4.2), textM = seg(t,3.5,5.7), artM = seg(t,6.5,10.1), frameM = seg(t,8.6,10.8);
      const real = loaded() ? 1 : imgs.length ? imgs.filter(i=>i.complete).length/imgs.length*.9 : .6;
      shown = Math.max(shown, Math.min(seg(t,0,10.4), t > CFG.maxWait ? 1 : .1+real*.9));
      $('.num').textContent = Math.floor(shown*100);

      let ci = 0; CAPS.forEach((c,i) => { if (t >= c[0]) ci = i; });
      if (ready) ci = CAPS.length;
      if (ci !== capI) {
        capI = ci; const el = $('.cap'); el.classList.add('off');
        const text = ci === CAPS.length ? 'Selamat datang di galeri.' : CAPS[ci][1];
        setTimeout(() => { el.textContent = text; if (text) el.classList.remove('off'); }, ci ? 420 : 60);
      }
      if (!ready && shown >= 1 && t > 11.6) { ready = true; autoAt = t + CFG.autoEnter; root.classList.add('ready'); }

      if (dive < 0 && ready) {
        const pushing = holding || autoEnter || (CFG.autoEnter && t > autoAt);
        hold = clamp(hold + (pushing ? dt/1.25 : -dt/.5));
        if (holding) autoAt = Math.max(autoAt, t + 4);
        $('.ring').style.strokeDashoffset = 176*(1-hold);
        if (hold >= 1) { dive = t; root.classList.add('go'); shock = [0,0,0]; }
      }
      let dv = 0;
      if (dive >= 0) {
        dv = seg(t, dive, dive+2.3); hold = Math.max(0, hold - dt*1.5);
        reveal = seg(t, dive+2.15, dive+3.9);
        if (reveal > 0) root.style.background = 'transparent';
        if (reveal >= 1) return finish();
      }

      yawX += (tx-yawX)*.05; yawY += (ty-yawY)*.05; shock[2] += dt;
      const settle = eio(seg(t,6.5,11.5));
      const yaw = ((1-settle)*-.75 + Math.sin(t*.55)*.17*settle + yawX*.55)*(1-dv);
      const pitch = ((1-settle)*.18 + Math.sin(t*.41)*.045 + yawY*.3)*(1-dv);

      gl.viewport(0,0,W,H); gl.disable(gl.BLEND);
      gl.useProgram(B.p); gl.bindBuffer(gl.ARRAY_BUFFER,qbuf);
      for (let i = 0; i < 8; i++) gl.disableVertexAttribArray(i);
      gl.enableVertexAttribArray(qloc); gl.vertexAttribPointer(qloc,2,gl.FLOAT,false,0,0);
      const set = (U, o) => { for (const k in o) { const v = o[k], l = U.u[k]; if (l == null) continue; if (typeof v === 'number') gl.uniform1f(l,v); else if (v.length === 2) gl.uniform2fv(l,v); else gl.uniform3fv(l,v); } };
      const com = { uRes:[W,H], uT:t, uBang:bang, uArt:artM, uDive:dv, uHold:hold, uReveal:reveal };
      set(B, com); gl.drawArrays(gl.TRIANGLES,0,3);

      gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.useProgram(P.p); gl.bindBuffer(gl.ARRAY_BUFFER,pbuf);
      for (let i = 0; i < 8; i++) gl.disableVertexAttribArray(i);
      for (const [l,s,o] of attrs) if (l >= 0) { gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l,s,gl.FLOAT,false,S*4,o*4); }
      set(P, { ...com, uText:textM, uFrame:frameM, uFit:fit, uTxtFit:txtFit, uDpr:dpr, uCell:cell, uYaw:yaw, uPitch:pitch, uShock:shock });
      gl.drawArrays(gl.POINTS,0,N);
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
  }
}
window.ArtPreloader = { play };
let seen = false;
try { seen = CFG.oncePerSession && sessionStorage.getItem('aap'); sessionStorage.setItem('aap','1'); } catch (e) {}
if (!seen) play();
})();
