(self.webpackChunkauth_etos=self.webpackChunkauth_etos||[]).push([[4554,7478],{4554:($t,P,l)=>{l.r(P),l.d(P,{AnimationCurves:()=>_t,AnimationDurations:()=>gt,DateAdapter:()=>D,ErrorStateMatcher:()=>It,MATERIAL_SANITY_CHECKS:()=>j,MAT_DATE_FORMATS:()=>U,MAT_DATE_LOCALE:()=>E,MAT_DATE_LOCALE_FACTORY:()=>V,MAT_NATIVE_DATE_FORMATS:()=>B,MAT_OPTGROUP:()=>I,MAT_OPTION_PARENT_COMPONENT:()=>R,MAT_RIPPLE_GLOBAL_OPTIONS:()=>T,MatCommonModule:()=>d,MatLine:()=>Ot,MatLineModule:()=>kt,MatNativeDateModule:()=>Ct,MatOptgroup:()=>Nt,MatOption:()=>jt,MatOptionModule:()=>zt,MatOptionSelectionChange:()=>J,MatPseudoCheckbox:()=>X,MatPseudoCheckboxModule:()=>Q,MatRipple:()=>C,MatRippleLoader:()=>Bt,MatRippleModule:()=>G,NativeDateAdapter:()=>z,NativeDateModule:()=>Y,RippleRef:()=>H,RippleRenderer:()=>f,ShowOnDirtyErrorStateMatcher:()=>Rt,VERSION:()=>M,_countGroupLabelsBeforeOption:()=>Vt,_getOptionScrollPosition:()=>Ut,defaultRippleAnimationConfig:()=>x,mixinColor:()=>Mt,mixinDisableRipple:()=>Et,mixinDisabled:()=>vt,mixinErrorState:()=>yt,mixinInitialized:()=>xt,mixinTabIndex:()=>Dt,setLines:()=>At});var a=l(5247),g=l(6038),S=l(3591),N=(l(797),l(8620)),h=l(6567),u=l(2552),b=l(4946),rt=l(7934),F=l(5522),v=l(9103);const lt=["*",[["mat-option"],["ng-container"]]],ct=["*","mat-option, ng-container"],dt=["text"];function pt(n,i){if(1&n&&a.\u0275\u0275element(0,"mat-pseudo-checkbox",6),2&n){const t=a.\u0275\u0275nextContext();a.\u0275\u0275property("disabled",t.disabled)("state",t.selected?"checked":"unchecked")}}function ht(n,i){if(1&n&&a.\u0275\u0275element(0,"mat-pseudo-checkbox",7),2&n){const t=a.\u0275\u0275nextContext();a.\u0275\u0275property("disabled",t.disabled)}}function ut(n,i){if(1&n&&(a.\u0275\u0275elementStart(0,"span",8),a.\u0275\u0275text(1),a.\u0275\u0275elementEnd()),2&n){const t=a.\u0275\u0275nextContext();a.\u0275\u0275advance(1),a.\u0275\u0275textInterpolate1("(",t.group.label,")")}}const mt=[[["mat-icon"]],"*"],ft=["mat-icon","*"],M=new a.Version("17.0.1");let _t=(()=>{class n{static#t=this.STANDARD_CURVE="cubic-bezier(0.4,0.0,0.2,1)";static#e=this.DECELERATION_CURVE="cubic-bezier(0.0,0.0,0.2,1)";static#i=this.ACCELERATION_CURVE="cubic-bezier(0.4,0.0,1,1)";static#n=this.SHARP_CURVE="cubic-bezier(0.4,0.0,0.6,1)"}return n})(),gt=(()=>{class n{static#t=this.COMPLEX="375ms";static#e=this.ENTERING="225ms";static#i=this.EXITING="195ms"}return n})();const j=new a.InjectionToken("mat-sanity-checks",{providedIn:"root",factory:function bt(){return!0}});let d=(()=>{class n{constructor(t,e,o){this._sanityChecks=e,this._document=o,this._hasDoneGlobalChecks=!1,t._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(t){return!(0,h._isTestEnvironment)()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[t])}static#t=this.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275inject(g.HighContrastModeDetector),a.\u0275\u0275inject(j,8),a.\u0275\u0275inject(N.DOCUMENT))};static#e=this.\u0275mod=a.\u0275\u0275defineNgModule({type:n});static#i=this.\u0275inj=a.\u0275\u0275defineInjector({imports:[S.BidiModule,S.BidiModule]})}return n})();function vt(n){return class extends n{get disabled(){return this._disabled}set disabled(i){this._disabled=(0,u.coerceBooleanProperty)(i)}constructor(...i){super(...i),this._disabled=!1}}}function Mt(n,i){return class extends n{get color(){return this._color}set color(t){const e=t||this.defaultColor;e!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove(`mat-${this._color}`),e&&this._elementRef.nativeElement.classList.add(`mat-${e}`),this._color=e)}constructor(...t){super(...t),this.defaultColor=i,this.color=i}}}function Et(n){return class extends n{get disableRipple(){return this._disableRipple}set disableRipple(i){this._disableRipple=(0,u.coerceBooleanProperty)(i)}constructor(...i){super(...i),this._disableRipple=!1}}}function Dt(n,i=0){return class extends n{get tabIndex(){return this.disabled?-1:this._tabIndex}set tabIndex(t){this._tabIndex=null!=t?(0,u.coerceNumberProperty)(t):this.defaultTabIndex}constructor(...t){super(...t),this._tabIndex=i,this.defaultTabIndex=i}}}function yt(n){return class extends n{updateErrorState(){const i=this.errorState,s=(this.errorStateMatcher||this._defaultErrorStateMatcher).isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);s!==i&&(this.errorState=s,this.stateChanges.next())}constructor(...i){super(...i),this.errorState=!1}}}function xt(n){return class extends n{constructor(...i){super(...i),this._isInitialized=!1,this._pendingSubscribers=[],this.initialized=new b.Observable(t=>{this._isInitialized?this._notifySubscriber(t):this._pendingSubscribers.push(t)})}_markInitialized(){this._isInitialized=!0,this._pendingSubscribers.forEach(this._notifySubscriber),this._pendingSubscribers=null}_notifySubscriber(i){i.next(),i.complete()}}}const E=new a.InjectionToken("MAT_DATE_LOCALE",{providedIn:"root",factory:V});function V(){return(0,a.inject)(a.LOCALE_ID)}class D{constructor(){this._localeChanges=new b.Subject,this.localeChanges=this._localeChanges}getValidDateOrNull(i){return this.isDateInstance(i)&&this.isValid(i)?i:null}deserialize(i){return null==i||this.isDateInstance(i)&&this.isValid(i)?i:this.invalid()}setLocale(i){this.locale=i,this._localeChanges.next()}compareDate(i,t){return this.getYear(i)-this.getYear(t)||this.getMonth(i)-this.getMonth(t)||this.getDate(i)-this.getDate(t)}sameDate(i,t){if(i&&t){let e=this.isValid(i),o=this.isValid(t);return e&&o?!this.compareDate(i,t):e==o}return i==t}clampDate(i,t,e){return t&&this.compareDate(i,t)<0?t:e&&this.compareDate(i,e)>0?e:i}}const U=new a.InjectionToken("mat-date-formats"),Tt=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;function y(n,i){const t=Array(n);for(let e=0;e<n;e++)t[e]=i(e);return t}let z=(()=>{class n extends D{constructor(t){super(),this.useUtcForDisplay=!1,this._matDateLocale=(0,a.inject)(E,{optional:!0}),void 0!==t&&(this._matDateLocale=t),super.setLocale(this._matDateLocale)}getYear(t){return t.getFullYear()}getMonth(t){return t.getMonth()}getDate(t){return t.getDate()}getDayOfWeek(t){return t.getDay()}getMonthNames(t){const e=new Intl.DateTimeFormat(this.locale,{month:t,timeZone:"utc"});return y(12,o=>this._format(e,new Date(2017,o,1)))}getDateNames(){const t=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return y(31,e=>this._format(t,new Date(2017,0,e+1)))}getDayOfWeekNames(t){const e=new Intl.DateTimeFormat(this.locale,{weekday:t,timeZone:"utc"});return y(7,o=>this._format(e,new Date(2017,0,o+1)))}getYearName(t){const e=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(e,t)}getFirstDayOfWeek(){return 0}getNumDaysInMonth(t){return this.getDate(this._createDateWithOverflow(this.getYear(t),this.getMonth(t)+1,0))}clone(t){return new Date(t.getTime())}createDate(t,e,o){let s=this._createDateWithOverflow(t,e,o);return s.getMonth(),s}today(){return new Date}parse(t,e){return"number"==typeof t?new Date(t):t?new Date(Date.parse(t)):null}format(t,e){if(!this.isValid(t))throw Error("NativeDateAdapter: Cannot format invalid date.");const o=new Intl.DateTimeFormat(this.locale,{...e,timeZone:"utc"});return this._format(o,t)}addCalendarYears(t,e){return this.addCalendarMonths(t,12*e)}addCalendarMonths(t,e){let o=this._createDateWithOverflow(this.getYear(t),this.getMonth(t)+e,this.getDate(t));return this.getMonth(o)!=((this.getMonth(t)+e)%12+12)%12&&(o=this._createDateWithOverflow(this.getYear(o),this.getMonth(o),0)),o}addCalendarDays(t,e){return this._createDateWithOverflow(this.getYear(t),this.getMonth(t),this.getDate(t)+e)}toIso8601(t){return[t.getUTCFullYear(),this._2digit(t.getUTCMonth()+1),this._2digit(t.getUTCDate())].join("-")}deserialize(t){if("string"==typeof t){if(!t)return null;if(Tt.test(t)){let e=new Date(t);if(this.isValid(e))return e}}return super.deserialize(t)}isDateInstance(t){return t instanceof Date}isValid(t){return!isNaN(t.getTime())}invalid(){return new Date(NaN)}_createDateWithOverflow(t,e,o){const s=new Date;return s.setFullYear(t,e,o),s.setHours(0,0,0,0),s}_2digit(t){return("00"+t).slice(-2)}_format(t,e){const o=new Date;return o.setUTCFullYear(e.getFullYear(),e.getMonth(),e.getDate()),o.setUTCHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),t.format(o)}static#t=this.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275inject(E,8))};static#e=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();const B={parse:{dateInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"}}};let Y=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275mod=a.\u0275\u0275defineNgModule({type:n});static#i=this.\u0275inj=a.\u0275\u0275defineInjector({providers:[{provide:D,useClass:z}]})}return n})(),Ct=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275mod=a.\u0275\u0275defineNgModule({type:n});static#i=this.\u0275inj=a.\u0275\u0275defineInjector({providers:[{provide:U,useValue:B}],imports:[Y]})}return n})(),Rt=(()=>{class n{isErrorState(t,e){return!!(t&&t.invalid&&(t.dirty||e&&e.submitted))}static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})(),It=(()=>{class n{isErrorState(t,e){return!!(t&&t.invalid&&(t.touched||e&&e.submitted))}static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ot=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275dir=a.\u0275\u0275defineDirective({type:n,selectors:[["","mat-line",""],["","matLine",""]],hostAttrs:[1,"mat-line"]})}return n})();function At(n,i,t="mat"){n.changes.pipe((0,rt.startWith)(n)).subscribe(({length:e})=>{m(i,`${t}-2-line`,!1),m(i,`${t}-3-line`,!1),m(i,`${t}-multi-line`,!1),2===e||3===e?m(i,`${t}-${e}-line`,!0):e>3&&m(i,`${t}-multi-line`,!0)})}function m(n,i,t){n.nativeElement.classList.toggle(i,t)}let kt=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275mod=a.\u0275\u0275defineNgModule({type:n});static#i=this.\u0275inj=a.\u0275\u0275defineInjector({imports:[d,d]})}return n})();class H{constructor(i,t,e,o=!1){this._renderer=i,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=o,this.state=3}fadeOut(){this._renderer.fadeOutRipple(this)}}const W=(0,h.normalizePassiveListenerOptions)({passive:!0,capture:!0});class wt{constructor(){this._events=new Map,this._delegateEventHandler=i=>{const t=(0,h._getEventTarget)(i);t&&this._events.get(i.type)?.forEach((e,o)=>{(o===t||o.contains(t))&&e.forEach(s=>s.handleEvent(i))})}}addHandler(i,t,e,o){const s=this._events.get(t);if(s){const r=s.get(e);r?r.add(o):s.set(e,new Set([o]))}else this._events.set(t,new Map([[e,new Set([o])]])),i.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,W)})}removeHandler(i,t,e){const o=this._events.get(i);if(!o)return;const s=o.get(t);s&&(s.delete(e),0===s.size&&o.delete(t),0===o.size&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,W)))}}const x={enterDuration:225,exitDuration:150},$=(0,h.normalizePassiveListenerOptions)({passive:!0,capture:!0}),K=["mousedown","touchstart"],Z=["mouseup","mouseleave","touchend","touchcancel"];class f{static#t=this._eventManager=new wt;constructor(i,t,e,o){this._target=i,this._ngZone=t,this._platform=o,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,o.isBrowser&&(this._containerElement=(0,u.coerceElement)(e))}fadeInRipple(i,t,e={}){const o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s={...x,...e.animation};e.centered&&(i=o.left+o.width/2,t=o.top+o.height/2);const r=e.radius||function St(n,i,t){const e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),o=Math.max(Math.abs(i-t.top),Math.abs(i-t.bottom));return Math.sqrt(e*e+o*o)}(i,t,o),Yt=i-o.left,Ht=t-o.top,k=s.enterDuration,c=document.createElement("div");c.classList.add("mat-ripple-element"),c.style.left=Yt-r+"px",c.style.top=Ht-r+"px",c.style.height=2*r+"px",c.style.width=2*r+"px",null!=e.color&&(c.style.backgroundColor=e.color),c.style.transitionDuration=`${k}ms`,this._containerElement.appendChild(c);const it=window.getComputedStyle(c),nt=it.transitionDuration,w="none"===it.transitionProperty||"0s"===nt||"0s, 0s"===nt||0===o.width&&0===o.height,p=new H(this,c,e,w);c.style.transform="scale3d(1, 1, 1)",p.state=0,e.persistent||(this._mostRecentTransientRipple=p);let ot=null;return!w&&(k||s.exitDuration)&&this._ngZone.runOutsideAngular(()=>{const at=()=>this._finishRippleTransition(p),st=()=>this._destroyRipple(p);c.addEventListener("transitionend",at),c.addEventListener("transitioncancel",st),ot={onTransitionEnd:at,onTransitionCancel:st}}),this._activeRipples.set(p,ot),(w||!k)&&this._finishRippleTransition(p),p}fadeOutRipple(i){if(2===i.state||3===i.state)return;const t=i.element,e={...x,...i.config.animation};t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",i.state=2,(i._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){const t=(0,u.coerceElement)(i);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,K.forEach(e=>{f._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(i){"mousedown"===i.type?this._onMousedown(i):"touchstart"===i.type?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Z.forEach(t=>{this._triggerElement.addEventListener(t,this,$)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){0===i.state?this._startFadeOutTransition(i):2===i.state&&this._destroyRipple(i)}_startFadeOutTransition(i){const t=i===this._mostRecentTransientRipple,{persistent:e}=i.config;i.state=1,!e&&(!t||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){const t=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=3,null!==t&&(i.element.removeEventListener("transitionend",t.onTransitionEnd),i.element.removeEventListener("transitioncancel",t.onTransitionCancel)),i.element.remove()}_onMousedown(i){const t=(0,g.isFakeMousedownFromScreenReader)(i),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!(0,g.isFakeTouchstartFromScreenReader)(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const t=i.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{!i.config.persistent&&(1===i.state||i.config.terminateOnPointerUp&&0===i.state)&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){const i=this._triggerElement;i&&(K.forEach(t=>f._eventManager.removeHandler(t,i,this)),this._pointerUpEventsRegistered&&Z.forEach(t=>i.removeEventListener(t,this,$)))}}const T=new a.InjectionToken("mat-ripple-global-options");let C=(()=>{class n{get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}constructor(t,e,o,s,r){this._elementRef=t,this._animationMode=r,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=s||{},this._rippleRenderer=new f(this,e,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:{...this._globalOptions.animation,..."NoopAnimations"===this._animationMode?{enterDuration:0,exitDuration:0}:{},...this.animation},terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,o){return"number"==typeof t?this._rippleRenderer.fadeInRipple(t,e,{...this.rippleConfig,...o}):this._rippleRenderer.fadeInRipple(0,0,{...this.rippleConfig,...t})}static#t=this.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275directiveInject(a.ElementRef),a.\u0275\u0275directiveInject(a.NgZone),a.\u0275\u0275directiveInject(h.Platform),a.\u0275\u0275directiveInject(T,8),a.\u0275\u0275directiveInject(F.ANIMATION_MODULE_TYPE,8))};static#e=this.\u0275dir=a.\u0275\u0275defineDirective({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,o){2&e&&a.\u0275\u0275classProp("mat-ripple-unbounded",o.unbounded)},inputs:{color:["matRippleColor","color"],unbounded:["matRippleUnbounded","unbounded"],centered:["matRippleCentered","centered"],radius:["matRippleRadius","radius"],animation:["matRippleAnimation","animation"],disabled:["matRippleDisabled","disabled"],trigger:["matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})(),G=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275mod=a.\u0275\u0275defineNgModule({type:n});static#i=this.\u0275inj=a.\u0275\u0275defineInjector({imports:[d,d]})}return n})(),X=(()=>{class n{constructor(t){this._animationMode=t,this.state="unchecked",this.disabled=!1,this.appearance="full"}static#t=this.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275directiveInject(F.ANIMATION_MODULE_TYPE,8))};static#e=this.\u0275cmp=a.\u0275\u0275defineComponent({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(e,o){2&e&&a.\u0275\u0275classProp("mat-pseudo-checkbox-indeterminate","indeterminate"===o.state)("mat-pseudo-checkbox-checked","checked"===o.state)("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal","minimal"===o.appearance)("mat-pseudo-checkbox-full","full"===o.appearance)("_mat-animation-noopable","NoopAnimations"===o._animationMode)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(e,o){},styles:['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-full{border:2px solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}'],encapsulation:2,changeDetection:0})}return n})(),Q=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275mod=a.\u0275\u0275defineNgModule({type:n});static#i=this.\u0275inj=a.\u0275\u0275defineInjector({imports:[d]})}return n})();const R=new a.InjectionToken("MAT_OPTION_PARENT_COMPONENT");let Lt=0;const I=new a.InjectionToken("MatOptgroup");let Nt=(()=>{class n{constructor(t){this.disabled=!1,this._labelId="mat-optgroup-label-"+Lt++,this._inert=t?.inertGroups??!1}static#t=this.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275directiveInject(R,8))};static#e=this.\u0275cmp=a.\u0275\u0275defineComponent({type:n,selectors:[["mat-optgroup"]],hostAttrs:[1,"mat-mdc-optgroup"],hostVars:3,hostBindings:function(e,o){2&e&&a.\u0275\u0275attribute("role",o._inert?null:"group")("aria-disabled",o._inert?null:o.disabled.toString())("aria-labelledby",o._inert?null:o._labelId)},inputs:{label:"label",disabled:["disabled","disabled",a.booleanAttribute]},exportAs:["matOptgroup"],features:[a.\u0275\u0275ProvidersFeature([{provide:I,useExisting:n}]),a.\u0275\u0275InputTransformsFeature],ngContentSelectors:ct,decls:5,vars:4,consts:[["role","presentation",1,"mat-mdc-optgroup-label",3,"id"],[1,"mdc-list-item__primary-text"]],template:function(e,o){1&e&&(a.\u0275\u0275projectionDef(lt),a.\u0275\u0275elementStart(0,"span",0)(1,"span",1),a.\u0275\u0275text(2),a.\u0275\u0275projection(3),a.\u0275\u0275elementEnd()(),a.\u0275\u0275projection(4,1)),2&e&&(a.\u0275\u0275classProp("mdc-list-item--disabled",o.disabled),a.\u0275\u0275property("id",o._labelId),a.\u0275\u0275advance(2),a.\u0275\u0275textInterpolate1("",o.label," "))},styles:[".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color);font-family:var(--mat-optgroup-label-text-font);line-height:var(--mat-optgroup-label-text-line-height);font-size:var(--mat-optgroup-label-text-size);letter-spacing:var(--mat-optgroup-label-text-tracking);font-weight:var(--mat-optgroup-label-text-weight)}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;min-height:48px}.mat-mdc-optgroup-label:focus{outline:none}[dir=rtl] .mat-mdc-optgroup-label,.mat-mdc-optgroup-label[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal}"],encapsulation:2,changeDetection:0})}return n})(),Ft=0;class J{constructor(i,t=!1){this.source=i,this.isUserInput=t}}let jt=(()=>{class n{get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}get disabled(){return this.group&&this.group.disabled||this._disabled}set disabled(t){this._disabled=t}get disableRipple(){return!(!this._parent||!this._parent.disableRipple)}get hideSingleSelectionIndicator(){return!(!this._parent||!this._parent.hideSingleSelectionIndicator)}constructor(t,e,o,s){this._element=t,this._changeDetectorRef=e,this._parent=o,this.group=s,this._selected=!1,this._active=!1,this._disabled=!1,this._mostRecentViewValue="",this.id="mat-option-"+Ft++,this.onSelectionChange=new a.EventEmitter,this._stateChanges=new b.Subject}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,e){const o=this._getHostElement();"function"==typeof o.focus&&o.focus(e)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===v.ENTER||t.keyCode===v.SPACE)&&!(0,v.hasModifierKey)(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=!this.multiple||!this._selected,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){const t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new J(this,t))}static#t=this.\u0275fac=function(e){return new(e||n)(a.\u0275\u0275directiveInject(a.ElementRef),a.\u0275\u0275directiveInject(a.ChangeDetectorRef),a.\u0275\u0275directiveInject(R,8),a.\u0275\u0275directiveInject(I,8))};static#e=this.\u0275cmp=a.\u0275\u0275defineComponent({type:n,selectors:[["mat-option"]],viewQuery:function(e,o){if(1&e&&a.\u0275\u0275viewQuery(dt,7),2&e){let s;a.\u0275\u0275queryRefresh(s=a.\u0275\u0275loadQuery())&&(o._text=s.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(e,o){1&e&&a.\u0275\u0275listener("click",function(){return o._selectViaInteraction()})("keydown",function(r){return o._handleKeydown(r)}),2&e&&(a.\u0275\u0275hostProperty("id",o.id),a.\u0275\u0275attribute("aria-selected",o.selected)("aria-disabled",o.disabled.toString()),a.\u0275\u0275classProp("mdc-list-item--selected",o.selected)("mat-mdc-option-multiple",o.multiple)("mat-mdc-option-active",o.active)("mdc-list-item--disabled",o.disabled))},inputs:{value:"value",id:"id",disabled:["disabled","disabled",a.booleanAttribute]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],features:[a.\u0275\u0275InputTransformsFeature],ngContentSelectors:ft,decls:8,vars:5,consts:[["class","mat-mdc-option-pseudo-checkbox","aria-hidden","true",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["text",""],["class","mat-mdc-option-pseudo-checkbox","state","checked","aria-hidden","true","appearance","minimal",3,"disabled"],["class","cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-mdc-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"]],template:function(e,o){1&e&&(a.\u0275\u0275projectionDef(mt),a.\u0275\u0275template(0,pt,1,2,"mat-pseudo-checkbox",0),a.\u0275\u0275projection(1),a.\u0275\u0275elementStart(2,"span",1,2),a.\u0275\u0275projection(4,1),a.\u0275\u0275elementEnd(),a.\u0275\u0275template(5,ht,1,1,"mat-pseudo-checkbox",3)(6,ut,2,1,"span",4),a.\u0275\u0275element(7,"div",5)),2&e&&(a.\u0275\u0275conditional(0,o.multiple?0:-1),a.\u0275\u0275advance(5),a.\u0275\u0275conditional(5,o.multiple||!o.selected||o.hideSingleSelectionIndicator?-1:5),a.\u0275\u0275advance(1),a.\u0275\u0275conditional(6,o.group&&o.group._inert?6:-1),a.\u0275\u0275advance(1),a.\u0275\u0275property("matRippleTrigger",o._getHostElement())("matRippleDisabled",o.disabled||o.disableRipple))},dependencies:[C,X],styles:['.mat-mdc-option{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color);font-family:var(--mat-option-label-text-font);line-height:var(--mat-option-label-text-line-height);font-size:var(--mat-option-label-text-size);letter-spacing:var(--mat-option-label-text-tracking);font-weight:var(--mat-option-label-text-weight);min-height:48px}.mat-mdc-option:focus{outline:none}[dir=rtl] .mat-mdc-option,.mat-mdc-option[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color)}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color)}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color)}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color)}.mat-mdc-option.mdc-list-item{align-items:center}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}.cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{right:auto;left:16px}.mat-mdc-option-active .mat-mdc-focus-indicator::before{content:""}'],encapsulation:2,changeDetection:0})}return n})();function Vt(n,i,t){if(t.length){let e=i.toArray(),o=t.toArray(),s=0;for(let r=0;r<n+1;r++)e[r].group&&e[r].group===o[s]&&s++;return s}return 0}function Ut(n,i,t,e){return n<t?n:n+i>t+e?Math.max(0,n-e+i):t}let zt=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275mod=a.\u0275\u0275defineNgModule({type:n});static#i=this.\u0275inj=a.\u0275\u0275defineInjector({imports:[G,d,Q]})}return n})();const q={capture:!0},tt=["focus","click","mouseenter","touchstart"],O="mat-ripple-loader-uninitialized",A="mat-ripple-loader-class-name",et="mat-ripple-loader-centered",_="mat-ripple-loader-disabled";let Bt=(()=>{class n{constructor(){this._document=(0,a.inject)(N.DOCUMENT,{optional:!0}),this._animationMode=(0,a.inject)(a.ANIMATION_MODULE_TYPE,{optional:!0}),this._globalRippleOptions=(0,a.inject)(T,{optional:!0}),this._platform=(0,a.inject)(h.Platform),this._ngZone=(0,a.inject)(a.NgZone),this._onInteraction=t=>{if(!(t.target instanceof HTMLElement))return;const o=t.target.closest(`[${O}]`);o&&this.createRipple(o)},this._ngZone.runOutsideAngular(()=>{for(const t of tt)this._document?.addEventListener(t,this._onInteraction,q)})}ngOnDestroy(){for(const t of tt)this._document?.removeEventListener(t,this._onInteraction,q)}configureRipple(t,e){t.setAttribute(O,""),(e.className||!t.hasAttribute(A))&&t.setAttribute(A,e.className||""),e.centered&&t.setAttribute(et,""),e.disabled&&t.setAttribute(_,"")}getRipple(t){return t.matRipple?t.matRipple:this.createRipple(t)}setDisabled(t,e){const o=t.matRipple;o?o.disabled=e:e?t.setAttribute(_,""):t.removeAttribute(_)}createRipple(t){if(!this._document)return;t.querySelector(".mat-ripple")?.remove();const e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(A)),t.append(e);const o=new C(new a.ElementRef(e),this._ngZone,this._platform,this._globalRippleOptions?this._globalRippleOptions:void 0,this._animationMode?this._animationMode:void 0);return o._isInitialized=!0,o.trigger=t,o.centered=t.hasAttribute(et),o.disabled=t.hasAttribute(_),this.attachRipple(t,o),o}attachRipple(t,e){t.removeAttribute(O),t.matRipple=e}static#t=this.\u0275fac=function(e){return new(e||n)};static#e=this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()}}]);