(self.webpackChunkauth_etos=self.webpackChunkauth_etos||[]).push([[7989],{9347:(tt,O,d)=>{d.r(O),d.d(O,{MAT_DIALOG_DATA:()=>k,MAT_DIALOG_DEFAULT_OPTIONS:()=>j,MAT_DIALOG_SCROLL_STRATEGY:()=>A,MAT_DIALOG_SCROLL_STRATEGY_PROVIDER:()=>$,MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY:()=>F,MatDialog:()=>x,MatDialogActions:()=>U,MatDialogClose:()=>B,MatDialogConfig:()=>p,MatDialogContainer:()=>f,MatDialogContent:()=>z,MatDialogModule:()=>X,MatDialogRef:()=>b,MatDialogTitle:()=>N,_closeDialogVia:()=>C,_defaultParams:()=>T,matDialogAnimations:()=>J});var m=d(9590),M=d(8620),a=d(5247),D=d(6038),W=d(5522),u=d(526),E=d(2552),v=d(5252),g=d(4946),r=d(7934),I=d(9103),w=d(1682),l=d(8695);function K(e,n){}class p{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}}const y="mdc-dialog--open",R="mdc-dialog--opening",L="mdc-dialog--closing";let f=(()=>{class e extends u.CdkDialogContainer{constructor(t,i,o,c,s,_,h,G,q){super(t,i,o,c,s,_,h,q),this._animationMode=G,this._animationStateChanged=new a.EventEmitter,this._animationsEnabled="NoopAnimations"!==this._animationMode,this._hostElement=this._elementRef.nativeElement,this._enterAnimationDuration=this._animationsEnabled?S(this._config.enterAnimationDuration)??150:0,this._exitAnimationDuration=this._animationsEnabled?S(this._config.exitAnimationDuration)??75:0,this._animationTimer=null,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(P,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(R,y)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(y),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(y),this._animationsEnabled?(this._hostElement.style.setProperty(P,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(L)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_clearAnimationClasses(){this._hostElement.classList.remove(R,L)}_waitForAnimationToComplete(t,i){null!==this._animationTimer&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{"function"==typeof requestAnimationFrame?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),null!==this._animationTimer&&clearTimeout(this._animationTimer)}attachComponentPortal(t){const i=super.attachComponentPortal(t);return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),i}static#t=this.\u0275fac=function(i){return new(i||e)(a.\u0275\u0275directiveInject(a.ElementRef),a.\u0275\u0275directiveInject(D.FocusTrapFactory),a.\u0275\u0275directiveInject(M.DOCUMENT,8),a.\u0275\u0275directiveInject(p),a.\u0275\u0275directiveInject(D.InteractivityChecker),a.\u0275\u0275directiveInject(a.NgZone),a.\u0275\u0275directiveInject(m.OverlayRef),a.\u0275\u0275directiveInject(W.ANIMATION_MODULE_TYPE,8),a.\u0275\u0275directiveInject(D.FocusMonitor))};static#i=this.\u0275cmp=a.\u0275\u0275defineComponent({type:e,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:8,hostBindings:function(i,o){2&i&&(a.\u0275\u0275hostProperty("id",o._config.id),a.\u0275\u0275attribute("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),a.\u0275\u0275classProp("_mat-animation-noopable",!o._animationsEnabled))},standalone:!0,features:[a.\u0275\u0275InheritDefinitionFeature,a.\u0275\u0275StandaloneFeature],decls:3,vars:0,consts:[[1,"mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,o){1&i&&(a.\u0275\u0275elementStart(0,"div",0)(1,"div",1),a.\u0275\u0275template(2,K,0,0,"ng-template",2),a.\u0275\u0275elementEnd()())},dependencies:[v.PortalModule,v.CdkPortalOutlet],styles:['.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{width:100%;height:100%}.mat-mdc-dialog-component-host{display:contents}.mat-mdc-dialog-container{--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition-duration:var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container{transition:none}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-actions{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2})}return e})();const P="--mat-dialog-transition-duration";function S(e){return null==e?null:"number"==typeof e?e:e.endsWith("ms")?(0,E.coerceNumberProperty)(e.substring(0,e.length-2)):e.endsWith("s")?1e3*(0,E.coerceNumberProperty)(e.substring(0,e.length-1)):"0"===e?0:null}class b{constructor(n,t,i){this._ref=n,this._containerInstance=i,this._afterOpened=new g.Subject,this._beforeClosed=new g.Subject,this._state=0,this.disableClose=t.disableClose,this.id=n.id,i._animationStateChanged.pipe((0,r.filter)(o=>"opened"===o.state),(0,r.take)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe((0,r.filter)(o=>"closed"===o.state),(0,r.take)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),(0,g.merge)(this.backdropClick(),this.keydownEvents().pipe((0,r.filter)(o=>o.keyCode===I.ESCAPE&&!this.disableClose&&!(0,I.hasModifierKey)(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),C(this,"keydown"===o.type?"keyboard":"mouse"))})}close(n){this._result=n,this._containerInstance._animationStateChanged.pipe((0,r.filter)(t=>"closing"===t.state),(0,r.take)(1)).subscribe(t=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=1,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let t=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?t.left(n.left):t.right(n.right):t.centerHorizontally(),n&&(n.top||n.bottom)?n.top?t.top(n.top):t.bottom(n.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",t=""){return this._ref.updateSize(n,t),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=2,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}}function C(e,n,t){return e._closeInteractionType=n,e.close(t)}const k=new a.InjectionToken("MatMdcDialogData"),j=new a.InjectionToken("mat-mdc-dialog-default-options"),A=new a.InjectionToken("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{const e=(0,a.inject)(m.Overlay);return()=>e.scrollStrategies.block()}});function F(e){return()=>e.scrollStrategies.block()}const $={provide:A,deps:[m.Overlay],useFactory:F};let Q=0,x=(()=>{class e{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(t,i,o,c,s,_,h,G){this._overlay=t,this._defaultOptions=c,this._scrollStrategy=s,this._parentDialog=_,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new g.Subject,this._afterOpenedAtThisLevel=new g.Subject,this.dialogConfigClass=p,this.afterAllClosed=(0,g.defer)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,r.startWith)(void 0))),this._dialog=i.get(u.Dialog),this._dialogRefConstructor=b,this._dialogContainerType=f,this._dialogDataToken=k}open(t,i){let o;(i={...this._defaultOptions||new p,...i}).id=i.id||"mat-mdc-dialog-"+Q++,i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();const c=this._dialog.open(t,{...i,positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:u.DialogConfig,useValue:i}]},templateContext:()=>({dialogRef:o}),providers:(s,_,h)=>(o=new this._dialogRefConstructor(s,i,h),o.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:h},{provide:this._dialogDataToken,useValue:_.data},{provide:this._dialogRefConstructor,useValue:o}])});return o.componentRef=c.componentRef,o.componentInstance=c.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{const s=this.openDialogs.indexOf(o);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(i=>i.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let i=t.length;for(;i--;)t[i].close()}static#t=this.\u0275fac=function(i){return new(i||e)(a.\u0275\u0275inject(m.Overlay),a.\u0275\u0275inject(a.Injector),a.\u0275\u0275inject(M.Location,8),a.\u0275\u0275inject(j,8),a.\u0275\u0275inject(A),a.\u0275\u0275inject(e,12),a.\u0275\u0275inject(m.OverlayContainer),a.\u0275\u0275inject(a.ANIMATION_MODULE_TYPE,8))};static#i=this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Z=0,B=(()=>{class e{constructor(t,i,o){this.dialogRef=t,this._elementRef=i,this._dialog=o,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=V(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){const i=t._matDialogClose||t._matDialogCloseResult;i&&(this.dialogResult=i.currentValue)}_onButtonClick(t){C(this.dialogRef,0===t.screenX&&0===t.screenY?"keyboard":"mouse",this.dialogResult)}static#t=this.\u0275fac=function(i){return new(i||e)(a.\u0275\u0275directiveInject(b,8),a.\u0275\u0275directiveInject(a.ElementRef),a.\u0275\u0275directiveInject(x))};static#i=this.\u0275dir=a.\u0275\u0275defineDirective({type:e,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(i,o){1&i&&a.\u0275\u0275listener("click",function(s){return o._onButtonClick(s)}),2&i&&a.\u0275\u0275attribute("aria-label",o.ariaLabel||null)("type",o.type)},inputs:{ariaLabel:["aria-label","ariaLabel"],type:"type",dialogResult:["mat-dialog-close","dialogResult"],_matDialogClose:["matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],standalone:!0,features:[a.\u0275\u0275NgOnChangesFeature]})}return e})(),N=(()=>{class e{constructor(t,i,o){this._dialogRef=t,this._elementRef=i,this._dialog=o,this.id="mat-mdc-dialog-title-"+Z++}ngOnInit(){this._dialogRef||(this._dialogRef=V(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._dialogRef._containerInstance?._ariaLabelledByQueue?.push(this.id)})}ngOnDestroy(){const t=this._dialogRef?._containerInstance?._ariaLabelledByQueue;t&&Promise.resolve().then(()=>{const i=t.indexOf(this.id);i>-1&&t.splice(i,1)})}static#t=this.\u0275fac=function(i){return new(i||e)(a.\u0275\u0275directiveInject(b,8),a.\u0275\u0275directiveInject(a.ElementRef),a.\u0275\u0275directiveInject(x))};static#i=this.\u0275dir=a.\u0275\u0275defineDirective({type:e,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(i,o){2&i&&a.\u0275\u0275hostProperty("id",o.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],standalone:!0})}return e})(),z=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#i=this.\u0275dir=a.\u0275\u0275defineDirective({type:e,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],standalone:!0})}return e})(),U=(()=>{class e{constructor(){this.align="start"}static#t=this.\u0275fac=function(i){return new(i||e)};static#i=this.\u0275dir=a.\u0275\u0275defineDirective({type:e,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:4,hostBindings:function(i,o){2&i&&a.\u0275\u0275classProp("mat-mdc-dialog-actions-align-center","center"===o.align)("mat-mdc-dialog-actions-align-end","end"===o.align)},inputs:{align:"align"},standalone:!0})}return e})();function V(e,n){let t=e.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?n.find(i=>i.id===t.id):null}let X=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#i=this.\u0275mod=a.\u0275\u0275defineNgModule({type:e});static#e=this.\u0275inj=a.\u0275\u0275defineInjector({providers:[x],imports:[u.DialogModule,m.OverlayModule,v.PortalModule,w.MatCommonModule,f,w.MatCommonModule]})}return e})();const T={params:{enterAnimationDuration:"150ms",exitAnimationDuration:"75ms"}},J={dialogContainer:(0,l.trigger)("dialogContainer",[(0,l.state)("void, exit",(0,l.style)({opacity:0,transform:"scale(0.7)"})),(0,l.state)("enter",(0,l.style)({transform:"none"})),(0,l.transition)("* => enter",(0,l.group)([(0,l.animate)("{{enterAnimationDuration}} cubic-bezier(0, 0, 0.2, 1)",(0,l.style)({transform:"none",opacity:1})),(0,l.query)("@*",(0,l.animateChild)(),{optional:!0})]),T),(0,l.transition)("* => void, * => exit",(0,l.group)([(0,l.animate)("{{exitAnimationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)",(0,l.style)({opacity:0})),(0,l.query)("@*",(0,l.animateChild)(),{optional:!0})]),T)])}}}]);