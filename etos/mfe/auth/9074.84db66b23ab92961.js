(self.webpackChunkauth_etos=self.webpackChunkauth_etos||[]).push([[9074],{6593:(Ve,L,m)=>{m.r(L),m.d(L,{BrowserModule:()=>Te,By:()=>Ie,DomSanitizer:()=>te,EVENT_MANAGER_PLUGINS:()=>y,EventManager:()=>M,EventManagerPlugin:()=>w,HAMMER_GESTURE_CONFIG:()=>S,HAMMER_LOADER:()=>N,HammerGestureConfig:()=>Q,HammerModule:()=>Le,Meta:()=>W,REMOVE_STYLES_ON_COMPONENT_DESTROY:()=>j,Title:()=>X,TransferState:()=>xe,VERSION:()=>Be,bootstrapApplication:()=>ge,createApplication:()=>ye,disableDebugTools:()=>be,enableDebugTools:()=>Ae,makeStateKey:()=>Fe,platformBrowser:()=>Se,provideClientHydration:()=>je,provideProtractorTestingSupport:()=>Ee,withHttpTransferCacheOptions:()=>Ue,withNoHttpTransferCache:()=>ke,\u0275BrowserDomAdapter:()=>E,\u0275BrowserGetTestability:()=>k,\u0275DomEventsPlugin:()=>V,\u0275DomRendererFactory2:()=>C,\u0275DomSanitizerImpl:()=>P,\u0275HammerGesturesPlugin:()=>ee,\u0275INTERNAL_BROWSER_PLATFORM_PROVIDERS:()=>b,\u0275KeyEventsPlugin:()=>G,\u0275SharedStylesHost:()=>D,\u0275getDOM:()=>l.\u0275getDOM,\u0275initDomAdapter:()=>$});var r=m(5247),l=m(8620),H=m(6059);class re extends l.\u0275DomAdapter{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class E extends re{static makeCurrent(){(0,l.\u0275setRootDomAdapter)(new E)}onAndCancel(n,e,t){return n.addEventListener(e,t),()=>{n.removeEventListener(e,t)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.parentNode&&n.parentNode.removeChild(n)}createElement(n,e){return(e=e||this.getDefaultDocument()).createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return"window"===e?window:"document"===e?n:"body"===e?n.body:null}getBaseHref(n){const e=function oe(){return g=g||document.querySelector("base"),g?g.getAttribute("href"):null}();return null==e?null:function se(o){v=v||document.createElement("a"),v.setAttribute("href",o);const n=v.pathname;return"/"===n.charAt(0)?n:`/${n}`}(e)}resetBaseElement(){g=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return(0,l.\u0275parseCookieValue)(document.cookie,n)}}let v,g=null;class k{addToWindow(n){r.\u0275global.getAngularTestability=(t,s=!0)=>{const i=n.findTestabilityInTree(t,s);if(null==i)throw new r.\u0275RuntimeError(5103,!1);return i},r.\u0275global.getAllAngularTestabilities=()=>n.getAllTestabilities(),r.\u0275global.getAllAngularRootElements=()=>n.getAllRootElements(),r.\u0275global.frameworkStabilizers||(r.\u0275global.frameworkStabilizers=[]),r.\u0275global.frameworkStabilizers.push(t=>{const s=r.\u0275global.getAllAngularTestabilities();let i=s.length,a=!1;const c=function(u){a=a||u,i--,0==i&&t(a)};s.forEach(u=>{u.whenStable(c)})})}findTestabilityInTree(n,e,t){return null==e?null:n.getTestability(e)??(t?(0,l.\u0275getDOM)().isShadowRoot(e)?this.findTestabilityInTree(n,e.host,!0):this.findTestabilityInTree(n,e.parentElement,!0):null)}}let ie=(()=>{class o{build(){return new XMLHttpRequest}static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac})}return o})();const y=new r.InjectionToken("EventManagerPlugins");let M=(()=>{class o{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(s=>{s.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,s){return this._findPluginFor(t).addEventListener(e,t,s)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(i=>i.supports(e)),!t)throw new r.\u0275RuntimeError(5101,!1);return this._eventNameToPlugin.set(e,t),t}static#e=this.\u0275fac=function(t){return new(t||o)(r.\u0275\u0275inject(y),r.\u0275\u0275inject(r.NgZone))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac})}return o})();class w{constructor(n){this._doc=n}}const T="ng-app-id";let D=(()=>{class o{constructor(e,t,s,i={}){this.doc=e,this.appId=t,this.nonce=s,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=(0,l.isPlatformServer)(i),this.resetHostNodes()}addStyles(e){for(const t of e)1===this.changeUsageCount(t,1)&&this.onStyleAdded(t)}removeStyles(e){for(const t of e)this.changeUsageCount(t,-1)<=0&&this.onStyleRemoved(t)}ngOnDestroy(){const e=this.styleNodesInDOM;e&&(e.forEach(t=>t.remove()),e.clear());for(const t of this.getAllStyles())this.onStyleRemoved(t);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(const t of this.getAllStyles())this.addStyleToHost(e,t)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(const t of this.hostNodes)this.addStyleToHost(t,e)}onStyleRemoved(e){const t=this.styleRef;t.get(e)?.elements?.forEach(s=>s.remove()),t.delete(e)}collectServerRenderedStyles(){const e=this.doc.head?.querySelectorAll(`style[${T}="${this.appId}"]`);if(e?.length){const t=new Map;return e.forEach(s=>{null!=s.textContent&&t.set(s.textContent,s)}),t}return null}changeUsageCount(e,t){const s=this.styleRef;if(s.has(e)){const i=s.get(e);return i.usage+=t,i.usage}return s.set(e,{usage:t,elements:[]}),t}getStyleElement(e,t){const s=this.styleNodesInDOM,i=s?.get(t);if(i?.parentNode===e)return s.delete(t),i.removeAttribute(T),i;{const a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=t,this.platformIsServer&&a.setAttribute(T,this.appId),e.appendChild(a),a}}addStyleToHost(e,t){const s=this.getStyleElement(e,t),i=this.styleRef,a=i.get(t)?.elements;a?a.push(s):i.set(t,{elements:[s],usage:1})}resetHostNodes(){const e=this.hostNodes;e.clear(),e.add(this.doc.head)}static#e=this.\u0275fac=function(t){return new(t||o)(r.\u0275\u0275inject(l.DOCUMENT),r.\u0275\u0275inject(r.APP_ID),r.\u0275\u0275inject(r.CSP_NONCE,8),r.\u0275\u0275inject(r.PLATFORM_ID))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac})}return o})();const _={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},R=/%COMP%/g,U="%COMP%",ae=`_nghost-${U}`,ce=`_ngcontent-${U}`,j=new r.InjectionToken("RemoveStylesOnCompDestroy",{providedIn:"root",factory:()=>!0});function B(o,n){return n.map(e=>e.replace(R,o))}let C=(()=>{class o{constructor(e,t,s,i,a,c,u,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=s,this.removeStylesOnCompDestroy=i,this.doc=a,this.platformId=c,this.ngZone=u,this.nonce=d,this.rendererByCompId=new Map,this.platformIsServer=(0,l.isPlatformServer)(c),this.defaultRenderer=new O(e,a,u,this.platformIsServer)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;this.platformIsServer&&t.encapsulation===r.ViewEncapsulation.ShadowDom&&(t={...t,encapsulation:r.ViewEncapsulation.Emulated});const s=this.getOrCreateRenderer(e,t);return s instanceof x?s.applyToHost(e):s instanceof A&&s.applyStyles(),s}getOrCreateRenderer(e,t){const s=this.rendererByCompId;let i=s.get(t.id);if(!i){const a=this.doc,c=this.ngZone,u=this.eventManager,d=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,p=this.platformIsServer;switch(t.encapsulation){case r.ViewEncapsulation.Emulated:i=new x(u,d,t,this.appId,h,a,c,p);break;case r.ViewEncapsulation.ShadowDom:return new he(u,d,e,t,a,c,this.nonce,p);default:i=new A(u,d,t,h,a,c,p)}s.set(t.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}static#e=this.\u0275fac=function(t){return new(t||o)(r.\u0275\u0275inject(M),r.\u0275\u0275inject(D),r.\u0275\u0275inject(r.APP_ID),r.\u0275\u0275inject(j),r.\u0275\u0275inject(l.DOCUMENT),r.\u0275\u0275inject(r.PLATFORM_ID),r.\u0275\u0275inject(r.NgZone),r.\u0275\u0275inject(r.CSP_NONCE))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac})}return o})();class O{constructor(n,e,t,s){this.eventManager=n,this.doc=e,this.ngZone=t,this.platformIsServer=s,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(n,e){return e?this.doc.createElementNS(_[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(F(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){n&&(F(n)?n.content:n).insertBefore(e,t)}removeChild(n,e){n&&n.removeChild(e)}selectRootElement(n,e){let t="string"==typeof n?this.doc.querySelector(n):n;if(!t)throw new r.\u0275RuntimeError(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,s){if(s){e=s+":"+e;const i=_[s];i?n.setAttributeNS(i,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){const s=_[t];s?n.removeAttributeNS(s,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,s){s&(r.RendererStyleFlags2.DashCase|r.RendererStyleFlags2.Important)?n.style.setProperty(e,t,s&r.RendererStyleFlags2.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){t&r.RendererStyleFlags2.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){null!=n&&(n[e]=t)}setValue(n,e){n.nodeValue=e}listen(n,e,t){if("string"==typeof n&&!(n=(0,l.\u0275getDOM)().getGlobalEventTarget(this.doc,n)))throw new Error(`Unsupported event target ${n} for event ${e}`);return this.eventManager.addEventListener(n,e,this.decoratePreventDefault(t))}decoratePreventDefault(n){return e=>{if("__ngUnwrap__"===e)return n;!1===(this.platformIsServer?this.ngZone.runGuarded(()=>n(e)):n(e))&&e.preventDefault()}}}function F(o){return"TEMPLATE"===o.tagName&&void 0!==o.content}class he extends O{constructor(n,e,t,s,i,a,c,u){super(n,i,a,u),this.sharedStylesHost=e,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const d=B(s.id,s.styles);for(const h of d){const p=document.createElement("style");c&&p.setAttribute("nonce",c),p.textContent=h,this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(this.nodeOrShadowRoot(n),e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}}class A extends O{constructor(n,e,t,s,i,a,c,u){super(n,i,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=s,this.styles=u?B(u,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}}class x extends A{constructor(n,e,t,s,i,a,c,u){const d=s+"-"+t.id;super(n,e,t,i,a,c,u,d),this.contentAttr=function ue(o){return ce.replace(R,o)}(d),this.hostAttr=function de(o){return ae.replace(R,o)}(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){const t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}}let V=(()=>{class o extends w{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,s){return e.addEventListener(t,s,!1),()=>this.removeEventListener(e,t,s)}removeEventListener(e,t,s){return e.removeEventListener(t,s)}static#e=this.\u0275fac=function(t){return new(t||o)(r.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac})}return o})();const z=["alt","control","meta","shift"],pe={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},me={alt:o=>o.altKey,control:o=>o.ctrlKey,meta:o=>o.metaKey,shift:o=>o.shiftKey};let G=(()=>{class o extends w{constructor(e){super(e)}supports(e){return null!=o.parseEventName(e)}addEventListener(e,t,s){const i=o.parseEventName(t),a=o.eventCallback(i.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,l.\u0275getDOM)().onAndCancel(e,i.domEventName,a))}static parseEventName(e){const t=e.toLowerCase().split("."),s=t.shift();if(0===t.length||"keydown"!==s&&"keyup"!==s)return null;const i=o._normalizeKey(t.pop());let a="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),a="code."),z.forEach(d=>{const h=t.indexOf(d);h>-1&&(t.splice(h,1),a+=d+".")}),a+=i,0!=t.length||0===i.length)return null;const u={};return u.domEventName=s,u.fullKey=a,u}static matchEventFullKeyCode(e,t){let s=pe[e.key]||e.key,i="";return t.indexOf("code.")>-1&&(s=e.code,i="code."),!(null==s||!s)&&(s=s.toLowerCase()," "===s?s="space":"."===s&&(s="dot"),z.forEach(a=>{a!==s&&(0,me[a])(e)&&(i+=a+".")}),i+=s,i===t)}static eventCallback(e,t,s){return i=>{o.matchEventFullKeyCode(i,e)&&s.runGuarded(()=>t(i))}}static _normalizeKey(e){return"esc"===e?"escape":e}static#e=this.\u0275fac=function(t){return new(t||o)(r.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac})}return o})();function ge(o,n){return(0,r.\u0275internalCreateApplication)({rootComponent:o,...K(n)})}function ye(o){return(0,r.\u0275internalCreateApplication)(K(o))}function K(o){return{appProviders:[...Y,...o?.providers??[]],platformProviders:b}}function Ee(){return[...Z]}function $(){E.makeCurrent()}const b=[{provide:r.PLATFORM_ID,useValue:l.\u0275PLATFORM_BROWSER_ID},{provide:r.PLATFORM_INITIALIZER,useValue:$,multi:!0},{provide:l.DOCUMENT,useFactory:function we(){return(0,r.\u0275setDocument)(document),document},deps:[]}],Se=(0,r.createPlatformFactory)(r.platformCore,"browser",b),Me=new r.InjectionToken(""),Z=[{provide:r.\u0275TESTABILITY_GETTER,useClass:k,deps:[]},{provide:r.\u0275TESTABILITY,useClass:r.Testability,deps:[r.NgZone,r.TestabilityRegistry,r.\u0275TESTABILITY_GETTER]},{provide:r.Testability,useClass:r.Testability,deps:[r.NgZone,r.TestabilityRegistry,r.\u0275TESTABILITY_GETTER]}],Y=[{provide:r.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:r.ErrorHandler,useFactory:function ve(){return new r.ErrorHandler},deps:[]},{provide:y,useClass:V,multi:!0,deps:[l.DOCUMENT,r.NgZone,r.PLATFORM_ID]},{provide:y,useClass:G,multi:!0,deps:[l.DOCUMENT]},C,D,M,{provide:r.RendererFactory2,useExisting:C},{provide:l.XhrFactory,useClass:ie,deps:[]},[]];let Te=(()=>{class o{constructor(e){}static withServerTransition(e){return{ngModule:o,providers:[{provide:r.APP_ID,useValue:e.appId}]}}static#e=this.\u0275fac=function(t){return new(t||o)(r.\u0275\u0275inject(Me,12))};static#t=this.\u0275mod=r.\u0275\u0275defineNgModule({type:o});static#n=this.\u0275inj=r.\u0275\u0275defineInjector({providers:[...Y,...Z],imports:[l.CommonModule,r.ApplicationModule]})}return o})(),W=(()=>{class o{constructor(e){this._doc=e,this._dom=(0,l.\u0275getDOM)()}addTag(e,t=!1){return e?this._getOrCreateElement(e,t):null}addTags(e,t=!1){return e?e.reduce((s,i)=>(i&&s.push(this._getOrCreateElement(i,t)),s),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];const t=this._doc.querySelectorAll(`meta[${e}]`);return t?[].slice.call(t):[]}updateTag(e,t){if(!e)return null;t=t||this._parseSelector(e);const s=this.getTag(t);return s?this._setMetaElementAttributes(e,s):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,t=!1){if(!t){const a=this._parseSelector(e),c=this.getTags(a).filter(u=>this._containsAttributes(e,u))[0];if(void 0!==c)return c}const s=this._dom.createElement("meta");return this._setMetaElementAttributes(e,s),this._doc.getElementsByTagName("head")[0].appendChild(s),s}_setMetaElementAttributes(e,t){return Object.keys(e).forEach(s=>t.setAttribute(this._getMetaKeyMap(s),e[s])),t}_parseSelector(e){const t=e.name?"name":"property";return`${t}="${e[t]}"`}_containsAttributes(e,t){return Object.keys(e).every(s=>t.getAttribute(this._getMetaKeyMap(s))===e[s])}_getMetaKeyMap(e){return _e[e]||e}static#e=this.\u0275fac=function(t){return new(t||o)(r.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:o,factory:function(t){let s=null;return s=t?new t:function De(){return new W((0,r.\u0275\u0275inject)(l.DOCUMENT))}(),s},providedIn:"root"})}return o})();const _e={httpEquiv:"http-equiv"};let X=(()=>{class o{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static#e=this.\u0275fac=function(t){return new(t||o)(r.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:o,factory:function(t){let s=null;return s=t?new t:function Re(){return new X((0,r.\u0275\u0275inject)(l.DOCUMENT))}(),s},providedIn:"root"})}return o})();function J(o,n){(typeof COMPILED>"u"||!COMPILED)&&((r.\u0275global.ng=r.\u0275global.ng||{})[o]=n)}const f=typeof window<"u"&&window||{};class Ce{constructor(n,e){this.msPerTick=n,this.numTicks=e}}class Oe{constructor(n){this.appRef=n.injector.get(r.ApplicationRef)}timeChangeDetection(n){const e=n&&n.record,t="Change Detection",s=null!=f.console.profile;e&&s&&f.console.profile(t);const i=I();let a=0;for(;a<5||I()-i<500;)this.appRef.tick(),a++;const c=I();e&&s&&f.console.profileEnd(t);const u=(c-i)/a;return f.console.log(`ran ${a} change detection cycles`),f.console.log(`${u.toFixed(2)} ms per check`),new Ce(u,a)}}function I(){return f.performance&&f.performance.now?f.performance.now():(new Date).getTime()}const q="profiler";function Ae(o){return J(q,new Oe(o)),o}function be(){J(q,null)}class Ie{static all(){return()=>!0}static css(n){return e=>null!=e.nativeElement&&function Ne(o,n){return!!(0,l.\u0275getDOM)().isElementNode(o)&&(o.matches&&o.matches(n)||o.msMatchesSelector&&o.msMatchesSelector(n)||o.webkitMatchesSelector&&o.webkitMatchesSelector(n))}(e.nativeElement,n)}static directive(n){return e=>-1!==e.providerTokens.indexOf(n)}}const Pe={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},S=new r.InjectionToken("HammerGestureConfig"),N=new r.InjectionToken("HammerLoader");let Q=(()=>{class o{constructor(){this.events=[],this.overrides={}}buildHammer(e){const t=new Hammer(e,this.options);t.get("pinch").set({enable:!0}),t.get("rotate").set({enable:!0});for(const s in this.overrides)t.get(s).set(this.overrides[s]);return t}static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac})}return o})(),ee=(()=>{class o extends w{constructor(e,t,s,i){super(e),this._config=t,this.console=s,this.loader=i,this._loaderPromise=null}supports(e){return!(!Pe.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)||!window.Hammer&&!this.loader)}addEventListener(e,t,s){const i=this.manager.getZone();if(t=t.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||i.runOutsideAngular(()=>this.loader());let a=!1,c=()=>{a=!0};return i.runOutsideAngular(()=>this._loaderPromise.then(()=>{window.Hammer?a||(c=this.addEventListener(e,t,s)):c=()=>{}}).catch(()=>{c=()=>{}})),()=>{c()}}return i.runOutsideAngular(()=>{const a=this._config.buildHammer(e),c=function(u){i.runGuarded(function(){s(u)})};return a.on(t,c),()=>{a.off(t,c),"function"==typeof a.destroy&&a.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}static#e=this.\u0275fac=function(t){return new(t||o)(r.\u0275\u0275inject(l.DOCUMENT),r.\u0275\u0275inject(S),r.\u0275\u0275inject(r.\u0275Console),r.\u0275\u0275inject(N,8))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac})}return o})(),Le=(()=>{class o{static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275mod=r.\u0275\u0275defineNgModule({type:o});static#n=this.\u0275inj=r.\u0275\u0275defineInjector({providers:[{provide:y,useClass:ee,multi:!0,deps:[l.DOCUMENT,S,r.\u0275Console,[new r.Optional,N]]},{provide:S,useClass:Q,deps:[]}]})}return o})(),te=(()=>{class o{static#e=this.\u0275fac=function(t){return new(t||o)};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:o,factory:function(t){let s=null;return s=t?new(t||o):r.\u0275\u0275inject(P),s},providedIn:"root"})}return o})(),P=(()=>{class o extends te{constructor(e){super(),this._doc=e}sanitize(e,t){if(null==t)return null;switch(e){case r.SecurityContext.NONE:return t;case r.SecurityContext.HTML:return(0,r.\u0275allowSanitizationBypassAndThrow)(t,"HTML")?(0,r.\u0275unwrapSafeValue)(t):(0,r.\u0275_sanitizeHtml)(this._doc,String(t)).toString();case r.SecurityContext.STYLE:return(0,r.\u0275allowSanitizationBypassAndThrow)(t,"Style")?(0,r.\u0275unwrapSafeValue)(t):t;case r.SecurityContext.SCRIPT:if((0,r.\u0275allowSanitizationBypassAndThrow)(t,"Script"))return(0,r.\u0275unwrapSafeValue)(t);throw new r.\u0275RuntimeError(5200,!1);case r.SecurityContext.URL:return(0,r.\u0275allowSanitizationBypassAndThrow)(t,"URL")?(0,r.\u0275unwrapSafeValue)(t):(0,r.\u0275_sanitizeUrl)(String(t));case r.SecurityContext.RESOURCE_URL:if((0,r.\u0275allowSanitizationBypassAndThrow)(t,"ResourceURL"))return(0,r.\u0275unwrapSafeValue)(t);throw new r.\u0275RuntimeError(5201,!1);default:throw new r.\u0275RuntimeError(5202,!1)}}bypassSecurityTrustHtml(e){return(0,r.\u0275bypassSanitizationTrustHtml)(e)}bypassSecurityTrustStyle(e){return(0,r.\u0275bypassSanitizationTrustStyle)(e)}bypassSecurityTrustScript(e){return(0,r.\u0275bypassSanitizationTrustScript)(e)}bypassSecurityTrustUrl(e){return(0,r.\u0275bypassSanitizationTrustUrl)(e)}bypassSecurityTrustResourceUrl(e){return(0,r.\u0275bypassSanitizationTrustResourceUrl)(e)}static#e=this.\u0275fac=function(t){return new(t||o)(r.\u0275\u0275inject(l.DOCUMENT))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:o,factory:function(t){let s=null;return s=t?new t:function He(o){return new P(o.get(l.DOCUMENT))}(r.\u0275\u0275inject(r.Injector)),s},providedIn:"root"})}return o})();function ne(o,n=[],e={}){return{\u0275kind:o,\u0275providers:n}}function ke(){return ne(0)}function Ue(o){return ne(1,(0,H.\u0275withHttpTransferCache)(o))}function je(...o){const n=[],e=new Set,t=e.has(1);for(const{\u0275providers:s,\u0275kind:i}of o)e.add(i),s.length&&n.push(s);return(0,r.makeEnvironmentProviders)([[],(0,r.\u0275withDomHydration)(),e.has(0)||t?[]:(0,H.\u0275withHttpTransferCache)({}),n])}const Be=new r.Version("17.0.4"),Fe=r.makeStateKey,xe=r.TransferState}}]);