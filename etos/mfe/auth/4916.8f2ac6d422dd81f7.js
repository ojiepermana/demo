(self.webpackChunkauth_etos=self.webpackChunkauth_etos||[]).push([[4916],{6825:(j,l,a)=>{a.r(l),a.d(l,{AUTO_STYLE:()=>m,AnimationBuilder:()=>d,AnimationFactory:()=>_,NoopAnimationPlayer:()=>I,animate:()=>D,animateChild:()=>T,animation:()=>S,group:()=>F,keyframes:()=>A,query:()=>v,sequence:()=>u,stagger:()=>O,state:()=>E,style:()=>g,transition:()=>P,trigger:()=>p,useAnimation:()=>M,\u0275AnimationGroupPlayer:()=>R,\u0275BrowserAnimationBuilder:()=>c,\u0275PRE_STYLE:()=>L});var f=a(8620),o=a(5247);const m="*";function p(n,t){return{type:7,name:n,definitions:t,options:{}}}function D(n,t=null){return{type:4,styles:t,timings:n}}function F(n,t=null){return{type:3,steps:n,options:t}}function u(n,t=null){return{type:2,steps:n,options:t}}function g(n){return{type:6,styles:n,offset:null}}function E(n,t,e){return{type:0,name:n,styles:t,options:e}}function A(n){return{type:5,steps:n}}function P(n,t,e=null){return{type:1,expr:n,animation:t,options:e}}function S(n,t=null){return{type:8,animation:n,options:t}}function T(n=null){return{type:9,options:n}}function M(n,t=null){return{type:10,animation:n,options:t}}function v(n,t,e=null){return{type:11,selector:n,animation:t,options:e}}function O(n,t){return{type:12,timings:n,animation:t}}let d=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#n=this.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:()=>(0,o.inject)(c),providedIn:"root"})}return n})();class _{}let c=(()=>{class n extends d{constructor(e,s){if(super(),this.animationModuleType=(0,o.inject)(o.ANIMATION_MODULE_TYPE,{optional:!0}),this._nextAnimationId=0,this._renderer=e.createRenderer(s.body,{id:"0",encapsulation:o.ViewEncapsulation.None,styles:[],data:{animation:[]}}),null===this.animationModuleType&&!function C(n){const t=n.\u0275type;return 0===t||1===t}(this._renderer))throw new o.\u0275RuntimeError(3600,!1)}build(e){const s=this._nextAnimationId;this._nextAnimationId++;const i=Array.isArray(e)?u(e):e;return y(this._renderer,null,s,"register",[i]),new w(s,this._renderer)}static#t=this.\u0275fac=function(s){return new(s||n)(o.\u0275\u0275inject(o.RendererFactory2),o.\u0275\u0275inject(f.DOCUMENT))};static#n=this.\u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();class w extends _{constructor(t,e){super(),this._id=t,this._renderer=e}create(t,e){return new b(this._id,t,e||{},this._renderer)}}class b{constructor(t,e,s,i){this.id=t,this.element=e,this._renderer=i,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",s)}_listen(t,e){return this._renderer.listen(this.element,`@@${this.id}:${t}`,e)}_command(t,...e){y(this._renderer,this.element,this.id,t,e)}onDone(t){this._listen("done",t)}onStart(t){this._listen("start",t)}onDestroy(t){this._listen("destroy",t)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset"),this._started=!1}setPosition(t){this._command("setPosition",t)}getPosition(){return function k(n){const t=n.\u0275type;return 0===t?n:1===t?n.animationRenderer:null}(this._renderer)?.engine?.players[this.id]?.getPosition()??0}}function y(n,t,e,s,i){n.setProperty(t,`@@${e}:${s}`,i)}class I{constructor(t=0,e=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=t+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){const e="start"==t?this._onStartFns:this._onDoneFns;e.forEach(s=>s()),e.length=0}}class R{constructor(t){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=t;let e=0,s=0,i=0;const h=this.players.length;0==h?queueMicrotask(()=>this._onFinish()):this.players.forEach(r=>{r.onDone(()=>{++e==h&&this._onFinish()}),r.onDestroy(()=>{++s==h&&this._onDestroy()}),r.onStart(()=>{++i==h&&this._onStart()})}),this.totalTime=this.players.reduce((r,B)=>Math.max(r,B.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){const e=t*this.totalTime;this.players.forEach(s=>{const i=s.totalTime?Math.min(1,e/s.totalTime):1;s.setPosition(i)})}getPosition(){const t=this.players.reduce((e,s)=>null===e||s.totalTime>e.totalTime?s:e,null);return null!=t?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){const e="start"==t?this._onStartFns:this._onDoneFns;e.forEach(s=>s()),e.length=0}}const L="!"}}]);