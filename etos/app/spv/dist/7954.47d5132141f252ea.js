(self.webpackChunkspv_etos=self.webpackChunkspv_etos||[]).push([[7954,8836],{7954:(W,m,c)=>{c.r(m),c.d(m,{CdkDialogContainer:()=>g,DEFAULT_DIALOG_CONFIG:()=>b,DIALOG_DATA:()=>E,DIALOG_SCROLL_STRATEGY:()=>y,DIALOG_SCROLL_STRATEGY_PROVIDER:()=>M,DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY:()=>I,Dialog:()=>T,DialogConfig:()=>f,DialogModule:()=>S,DialogRef:()=>v,throwDialogContentAlreadyAttachedError:()=>F});var p=c(6038),d=c(9590),D=c(6567),h=c(5252),R=c(8620),s=c(5247),O=c(9103),_=c(4946),A=c(3591),P=c(7934);function k(a,l){}class f{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}}function F(){throw Error("Attempting to attach dialog content after content is already attached")}let g=(()=>{class a extends h.BasePortalOutlet{constructor(e,t,i,o,r,n,u,L){super(),this._elementRef=e,this._focusTrapFactory=t,this._config=o,this._interactivityChecker=r,this._ngZone=n,this._overlayRef=u,this._focusMonitor=L,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this._ariaLabelledByQueue=[],this.attachDomPortal=w=>{this._portalOutlet.hasAttached();const B=this._portalOutlet.attachDomPortal(w);return this._contentAttached(),B},this._document=i,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();const t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();const t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const i=()=>{e.removeEventListener("blur",i),e.removeEventListener("mousedown",i),e.removeAttribute("tabindex")};e.addEventListener("blur",i),e.addEventListener("mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(){const e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(t=>{t||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const e=this._config.restoreFocus;let t=null;if("string"==typeof e?t=this._document.querySelector(e):"boolean"==typeof e?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&"function"==typeof t.focus){const i=(0,D._getFocusedElementPierceShadowDom)(),o=this._elementRef.nativeElement;(!i||i===this._document.body||i===o||o.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const e=this._elementRef.nativeElement,t=(0,D._getFocusedElementPierceShadowDom)();return e===t||e.contains(t)}_initializeFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,D._getFocusedElementPierceShadowDom)())}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}static#e=this.\u0275fac=function(t){return new(t||a)(s.\u0275\u0275directiveInject(s.ElementRef),s.\u0275\u0275directiveInject(p.FocusTrapFactory),s.\u0275\u0275directiveInject(R.DOCUMENT,8),s.\u0275\u0275directiveInject(f),s.\u0275\u0275directiveInject(p.InteractivityChecker),s.\u0275\u0275directiveInject(s.NgZone),s.\u0275\u0275directiveInject(d.OverlayRef),s.\u0275\u0275directiveInject(p.FocusMonitor))};static#t=this.\u0275cmp=s.\u0275\u0275defineComponent({type:a,selectors:[["cdk-dialog-container"]],viewQuery:function(t,i){if(1&t&&s.\u0275\u0275viewQuery(h.CdkPortalOutlet,7),2&t){let o;s.\u0275\u0275queryRefresh(o=s.\u0275\u0275loadQuery())&&(i._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,i){2&t&&s.\u0275\u0275attribute("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},standalone:!0,features:[s.\u0275\u0275InheritDefinitionFeature,s.\u0275\u0275StandaloneFeature],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,i){1&t&&s.\u0275\u0275template(0,k,0,0,"ng-template",0)},dependencies:[h.PortalModule,h.CdkPortalOutlet],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2})}return a})();class v{constructor(l,e){this.overlayRef=l,this.config=e,this.closed=new _.Subject,this.disableClose=e.disableClose,this.backdropClick=l.backdropClick(),this.keydownEvents=l.keydownEvents(),this.outsidePointerEvents=l.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===O.ESCAPE&&!this.disableClose&&!(0,O.hasModifierKey)(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=l.detachments().subscribe(()=>{!1!==e.closeOnOverlayDetachments&&this.close()})}close(l,e){if(this.containerInstance){const t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(l),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(l="",e=""){return this.overlayRef.updateSize({width:l,height:e}),this}addPanelClass(l){return this.overlayRef.addPanelClass(l),this}removePanelClass(l){return this.overlayRef.removePanelClass(l),this}}const y=new s.InjectionToken("DialogScrollStrategy",{providedIn:"root",factory:()=>{const a=(0,s.inject)(d.Overlay);return()=>a.scrollStrategies.block()}}),E=new s.InjectionToken("DialogData"),b=new s.InjectionToken("DefaultDialogConfig");function I(a){return()=>a.scrollStrategies.block()}const M={provide:y,deps:[d.Overlay],useFactory:I};let j=0,T=(()=>{class a{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(e,t,i,o,r,n){this._overlay=e,this._injector=t,this._defaultOptions=i,this._parentDialog=o,this._overlayContainer=r,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new _.Subject,this._afterOpenedAtThisLevel=new _.Subject,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,_.defer)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,P.startWith)(void 0))),this._scrollStrategy=n}open(e,t){(t={...this._defaultOptions||new f,...t}).id=t.id||"cdk-dialog-"+j++,t.id&&this.getDialogById(t.id);const o=this._getOverlayConfig(t),r=this._overlay.create(o),n=new v(r,t),u=this._attachContainer(r,n,t);return n.containerInstance=u,this._attachDialogContent(e,n,u,t),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(n),n.closed.subscribe(()=>this._removeOpenDialog(n,!0)),this.afterOpened.next(n),n}closeAll(){C(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){C(this._openDialogsAtThisLevel,e=>{!1===e.config.closeOnDestroy&&this._removeOpenDialog(e,!1)}),C(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){const t=new d.OverlayConfig({positionStrategy:e.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){const o=i.injector||i.viewContainerRef?.injector,r=[{provide:f,useValue:i},{provide:v,useValue:t},{provide:d.OverlayRef,useValue:e}];let n;i.container?"function"==typeof i.container?n=i.container:(n=i.container.type,r.push(...i.container.providers(i))):n=g;const u=new h.ComponentPortal(n,i.viewContainerRef,s.Injector.create({parent:o||this._injector,providers:r}),i.componentFactoryResolver);return e.attach(u).instance}_attachDialogContent(e,t,i,o){if(e instanceof s.TemplateRef){const r=this._createInjector(o,t,i,void 0);let n={$implicit:o.data,dialogRef:t};o.templateContext&&(n={...n,..."function"==typeof o.templateContext?o.templateContext():o.templateContext}),i.attachTemplatePortal(new h.TemplatePortal(e,null,n,r))}else{const r=this._createInjector(o,t,i,this._injector),n=i.attachComponentPortal(new h.ComponentPortal(e,o.viewContainerRef,r,o.componentFactoryResolver));t.componentRef=n,t.componentInstance=n.instance}}_createInjector(e,t,i,o){const r=e.injector||e.viewContainerRef?.injector,n=[{provide:E,useValue:e.data},{provide:v,useValue:t}];return e.providers&&("function"==typeof e.providers?n.push(...e.providers(t,e,i)):n.push(...e.providers)),e.direction&&(!r||!r.get(A.Directionality,null,{optional:!0}))&&n.push({provide:A.Directionality,useValue:{value:e.direction,change:(0,_.of)()}}),s.Injector.create({parent:r||o,providers:n})}_removeOpenDialog(e,t){const i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,r)=>{o?r.setAttribute("aria-hidden",o):r.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const e=this._overlayContainer.getContainerElement();if(e.parentElement){const t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){const o=t[i];o!==e&&"SCRIPT"!==o.nodeName&&"STYLE"!==o.nodeName&&!o.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static#e=this.\u0275fac=function(t){return new(t||a)(s.\u0275\u0275inject(d.Overlay),s.\u0275\u0275inject(s.Injector),s.\u0275\u0275inject(b,8),s.\u0275\u0275inject(a,12),s.\u0275\u0275inject(d.OverlayContainer),s.\u0275\u0275inject(y))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function C(a,l){let e=a.length;for(;e--;)l(a[e])}let S=(()=>{class a{static#e=this.\u0275fac=function(t){return new(t||a)};static#t=this.\u0275mod=s.\u0275\u0275defineNgModule({type:a});static#i=this.\u0275inj=s.\u0275\u0275defineInjector({providers:[T],imports:[d.OverlayModule,h.PortalModule,p.A11yModule,g,h.PortalModule]})}return a})()}}]);