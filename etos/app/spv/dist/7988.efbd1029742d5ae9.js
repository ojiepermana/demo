(self.webpackChunkspv_etos=self.webpackChunkspv_etos||[]).push([[7988],{7988:(q,k,l)=>{l.r(k),l.d(k,{MAT_MENU_CONTENT:()=>T,MAT_MENU_DEFAULT_OPTIONS:()=>A,MAT_MENU_PANEL:()=>C,MAT_MENU_SCROLL_STRATEGY:()=>D,MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER:()=>w,MENU_PANEL_TOP_PADDING:()=>G,MatMenu:()=>g,MatMenuContent:()=>W,MatMenuItem:()=>P,MatMenuModule:()=>$,MatMenuTrigger:()=>Z,fadeInItems:()=>K,matMenuAnimations:()=>p,transformMenu:()=>V});var t=l(5247),_=l(6038),u=l(9103),m=l(4946),r=l(7934),y=l(8620),I=l(1682),R=l(5252),c=l(8695),x=l(3591),E=l(9590),L=l(6567),F=l(6799);const j=["mat-menu-item",""];function B(a,J){1&a&&(t.\u0275\u0275namespaceSVG(),t.\u0275\u0275elementStart(0,"svg",3),t.\u0275\u0275element(1,"polygon",4),t.\u0275\u0275elementEnd())}const N=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],U=["mat-icon, [matMenuItemIcon]","*"];function H(a,J){if(1&a){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275listener("keydown",function(i){t.\u0275\u0275restoreView(e);const s=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(s._handleKeydown(i))})("click",function(){t.\u0275\u0275restoreView(e);const i=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(i.closed.emit("click"))})("@transformMenu.start",function(i){t.\u0275\u0275restoreView(e);const s=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(s._onAnimationStart(i))})("@transformMenu.done",function(i){t.\u0275\u0275restoreView(e);const s=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(s._onAnimationDone(i))}),t.\u0275\u0275elementStart(1,"div",1),t.\u0275\u0275projection(2),t.\u0275\u0275elementEnd()()}if(2&a){const e=t.\u0275\u0275nextContext();t.\u0275\u0275property("id",e.panelId)("ngClass",e._classList)("@transformMenu",e._panelAnimationState),t.\u0275\u0275attribute("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}const Y=["*"],C=new t.InjectionToken("MAT_MENU_PANEL");let P=(()=>{class a{constructor(e,n,i,s,o){this._elementRef=e,this._document=n,this._focusMonitor=i,this._parentMenu=s,this._changeDetectorRef=o,this.role="menuitem",this.disabled=!1,this.disableRipple=!1,this._hovered=new m.Subject,this._focused=new m.Subject,this._highlighted=!1,this._triggersSubmenu=!1,s?.addItem?.(this)}focus(e,n){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,n):this._getHostElement().focus(n),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){const e=this._elementRef.nativeElement.cloneNode(!0),n=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<n.length;i++)n[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(y.DOCUMENT),t.\u0275\u0275directiveInject(_.FocusMonitor),t.\u0275\u0275directiveInject(C,8),t.\u0275\u0275directiveInject(t.ChangeDetectorRef))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(n,i){1&n&&t.\u0275\u0275listener("click",function(o){return i._checkDisabled(o)})("mouseenter",function(){return i._handleMouseEnter()}),2&n&&(t.\u0275\u0275attribute("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),t.\u0275\u0275classProp("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:["disabled","disabled",t.booleanAttribute],disableRipple:["disableRipple","disableRipple",t.booleanAttribute]},exportAs:["matMenuItem"],features:[t.\u0275\u0275InputTransformsFeature],attrs:j,ngContentSelectors:U,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["class","mat-mdc-menu-submenu-icon","viewBox","0 0 5 10","focusable","false","aria-hidden","true"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(n,i){1&n&&(t.\u0275\u0275projectionDef(N),t.\u0275\u0275projection(0),t.\u0275\u0275elementStart(1,"span",0),t.\u0275\u0275projection(2,1),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(3,"div",1),t.\u0275\u0275template(4,B,2,0,":svg:svg",2)),2&n&&(t.\u0275\u0275advance(3),t.\u0275\u0275property("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),t.\u0275\u0275advance(1),t.\u0275\u0275conditional(4,i._triggersSubmenu?4:-1))},dependencies:[I.MatRipple],encapsulation:2,changeDetection:0})}return a})();const T=new t.InjectionToken("MatMenuContent");let W=(()=>{class a{constructor(e,n,i,s,o,d,h){this._template=e,this._componentFactoryResolver=n,this._appRef=i,this._injector=s,this._viewContainerRef=o,this._document=d,this._changeDetectorRef=h,this._attached=new m.Subject}attach(e={}){this._portal||(this._portal=new R.TemplatePortal(this._template,this._viewContainerRef)),this.detach(),this._outlet||(this._outlet=new R.DomPortalOutlet(this._document.createElement("div"),this._componentFactoryResolver,this._appRef,this._injector));const n=this._template.elementRef.nativeElement;n.parentNode.insertBefore(this._outlet.outletElement,n),this._changeDetectorRef?.markForCheck(),this._portal.attach(this._outlet,e),this._attached.next()}detach(){this._portal.isAttached&&this._portal.detach()}ngOnDestroy(){this._outlet&&this._outlet.dispose()}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(t.TemplateRef),t.\u0275\u0275directiveInject(t.ComponentFactoryResolver),t.\u0275\u0275directiveInject(t.ApplicationRef),t.\u0275\u0275directiveInject(t.Injector),t.\u0275\u0275directiveInject(t.ViewContainerRef),t.\u0275\u0275directiveInject(y.DOCUMENT),t.\u0275\u0275directiveInject(t.ChangeDetectorRef))};static#t=this.\u0275dir=t.\u0275\u0275defineDirective({type:a,selectors:[["ng-template","matMenuContent",""]],features:[t.\u0275\u0275ProvidersFeature([{provide:T,useExisting:a}])]})}return a})();const p={transformMenu:(0,c.trigger)("transformMenu",[(0,c.state)("void",(0,c.style)({opacity:0,transform:"scale(0.8)"})),(0,c.transition)("void => enter",(0,c.animate)("120ms cubic-bezier(0, 0, 0.2, 1)",(0,c.style)({opacity:1,transform:"scale(1)"}))),(0,c.transition)("* => void",(0,c.animate)("100ms 25ms linear",(0,c.style)({opacity:0})))]),fadeInItems:(0,c.trigger)("fadeInItems",[(0,c.state)("showing",(0,c.style)({opacity:1})),(0,c.transition)("void => *",[(0,c.style)({opacity:0}),(0,c.animate)("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},K=p.fadeInItems,V=p.transformMenu;let z=0;const A=new t.InjectionToken("mat-menu-default-options",{providedIn:"root",factory:function Q(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}});let g=(()=>{class a{get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}set panelClass(e){const n=this._previousPanelClass;n&&n.length&&n.split(" ").forEach(i=>{this._classList[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(i=>{this._classList[i]=!0}),this._elementRef.nativeElement.className="")}get classList(){return this.panelClass}set classList(e){this.panelClass=e}constructor(e,n,i,s){this._elementRef=e,this._ngZone=n,this._changeDetectorRef=s,this._elevationPrefix="mat-elevation-z",this._baseElevation=8,this._directDescendantItems=new t.QueryList,this._classList={},this._panelAnimationState="void",this._animationDone=new m.Subject,this.closed=new t.EventEmitter,this.close=this.closed,this.panelId="mat-menu-panel-"+z++,this.overlayPanelClass=i.overlayPanelClass||"",this._xPosition=i.xPosition,this._yPosition=i.yPosition,this.backdropClass=i.backdropClass,this.overlapTrigger=i.overlapTrigger,this.hasBackdrop=i.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new _.FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe((0,r.startWith)(this._directDescendantItems),(0,r.switchMap)(e=>(0,m.merge)(...e.map(n=>n._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{const n=this._keyManager;if("enter"===this._panelAnimationState&&n.activeItem?._hasFocus()){const i=e.toArray(),s=Math.max(0,Math.min(i.length-1,n.activeItemIndex||0));i[s]&&!i[s].disabled?n.setActiveItem(s):n.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusSubscription?.unsubscribe()}_hovered(){return this._directDescendantItems.changes.pipe((0,r.startWith)(this._directDescendantItems),(0,r.switchMap)(n=>(0,m.merge)(...n.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){const n=e.keyCode,i=this._keyManager;switch(n){case u.ESCAPE:(0,u.hasModifierKey)(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case u.LEFT_ARROW:this.parentMenu&&"ltr"===this.direction&&this.closed.emit("keydown");break;case u.RIGHT_ARROW:this.parentMenu&&"rtl"===this.direction&&this.closed.emit("keydown");break;default:return(n===u.UP_ARROW||n===u.DOWN_ARROW)&&i.setFocusOrigin("keyboard"),void i.onKeydown(e)}e.stopPropagation()}focusFirstItem(e="program"){this._firstItemFocusSubscription?.unsubscribe(),this._firstItemFocusSubscription=this._ngZone.onStable.pipe((0,r.take)(1)).subscribe(()=>{let n=null;if(this._directDescendantItems.length&&(n=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!n||!n.contains(document.activeElement)){const i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&n&&n.focus()}})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){const n=Math.min(this._baseElevation+e,24),i=`${this._elevationPrefix}${n}`,s=Object.keys(this._classList).find(o=>o.startsWith(this._elevationPrefix));(!s||s===this._previousElevation)&&(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[i]=!0,this._previousElevation=i)}setPositionClasses(e=this.xPosition,n=this.yPosition){const i=this._classList;i["mat-menu-before"]="before"===e,i["mat-menu-after"]="after"===e,i["mat-menu-above"]="above"===n,i["mat-menu-below"]="below"===n,this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1}_onAnimationStart(e){this._isAnimating=!0,"enter"===e.toState&&0===this._keyManager.activeItemIndex&&(e.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe((0,r.startWith)(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(n=>n._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(A),t.\u0275\u0275directiveInject(t.ChangeDetectorRef))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["mat-menu"]],contentQueries:function(n,i,s){if(1&n&&(t.\u0275\u0275contentQuery(s,T,5),t.\u0275\u0275contentQuery(s,P,5),t.\u0275\u0275contentQuery(s,P,4)),2&n){let o;t.\u0275\u0275queryRefresh(o=t.\u0275\u0275loadQuery())&&(i.lazyContent=o.first),t.\u0275\u0275queryRefresh(o=t.\u0275\u0275loadQuery())&&(i._allItems=o),t.\u0275\u0275queryRefresh(o=t.\u0275\u0275loadQuery())&&(i.items=o)}},viewQuery:function(n,i){if(1&n&&t.\u0275\u0275viewQuery(t.TemplateRef,5),2&n){let s;t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(i.templateRef=s.first)}},hostAttrs:["ngSkipHydration",""],hostVars:3,hostBindings:function(n,i){2&n&&t.\u0275\u0275attribute("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:["overlapTrigger","overlapTrigger",t.booleanAttribute],hasBackdrop:["hasBackdrop","hasBackdrop",e=>null==e?null:(0,t.booleanAttribute)(e)],panelClass:["class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[t.\u0275\u0275ProvidersFeature([{provide:C,useExisting:a}]),t.\u0275\u0275InputTransformsFeature],ngContentSelectors:Y,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"id","ngClass","keydown","click"],[1,"mat-mdc-menu-content"]],template:function(n,i){1&n&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275template(0,H,3,6,"ng-template"))},dependencies:[y.NgClass],styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{margin-right:16px}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:16px}.mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-mdc-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[p.transformMenu,p.fadeInItems]},changeDetection:0})}return a})();const D=new t.InjectionToken("mat-menu-scroll-strategy"),w={provide:D,deps:[E.Overlay],useFactory:function X(a){return()=>a.scrollStrategies.reposition()}},O=(0,L.normalizePassiveListenerOptions)({passive:!0}),G=8;let Z=(()=>{class a{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._menuCloseSubscription=e.close.subscribe(n=>{this._destroyMenu(n),("click"===n||"tab"===n)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(n)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(e,n,i,s,o,d,h,f,M){this._overlay=e,this._element=n,this._viewContainerRef=i,this._menuItemInstance=d,this._dir=h,this._focusMonitor=f,this._ngZone=M,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=m.Subscription.EMPTY,this._hoverSubscription=m.Subscription.EMPTY,this._menuCloseSubscription=m.Subscription.EMPTY,this._changeDetectorRef=(0,t.inject)(t.ChangeDetectorRef),this._handleTouchStart=v=>{(0,_.isFakeTouchstartFromScreenReader)(v)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new t.EventEmitter,this.onMenuOpen=this.menuOpened,this.menuClosed=new t.EventEmitter,this.onMenuClose=this.menuClosed,this._scrollStrategy=s,this._parentMaterialMenu=o instanceof g?o:void 0,n.nativeElement.addEventListener("touchstart",this._handleTouchStart,O)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,O),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){const e=this.menu;if(this._menuOpen||!e)return;const n=this._createOverlay(e),i=n.getConfig(),s=i.positionStrategy;this._setPosition(e,s),i.hasBackdrop=null==e.hasBackdrop?!this.triggersSubmenu():e.hasBackdrop,n.attach(this._getPortal(e)),e.lazyContent&&e.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(e),e instanceof g&&(e._startAnimation(),e._directDescendantItems.changes.pipe((0,r.takeUntil)(e.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(e,n){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(e){if(!this._overlayRef||!this.menuOpen)return;const n=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&("keydown"===e||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,n instanceof g?(n._resetAnimation(),n.lazyContent?n._animationDone.pipe((0,r.filter)(i=>"void"===i.toState),(0,r.take)(1),(0,r.takeUntil)(n.lazyContent._attached)).subscribe({next:()=>n.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),n?.lazyContent?.detach())}_initMenu(e){e.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,this._setMenuElevation(e),e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(e){if(e.setElevation){let n=0,i=e.parentMenu;for(;i;)n++,i=i.parentMenu;e.setElevation(n)}}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){const n=this._getOverlayConfig(e);this._subscribeToPositions(e,n.positionStrategy),this._overlayRef=this._overlay.create(n),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(e){return new E.OverlayConfig({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(e,n){e.setPositionClasses&&n.positionChanges.subscribe(i=>{const s="start"===i.connectionPair.overlayX?"after":"before",o="top"===i.connectionPair.overlayY?"below":"above";this._ngZone?this._ngZone.run(()=>e.setPositionClasses(s,o)):e.setPositionClasses(s,o)})}_setPosition(e,n){let[i,s]="before"===e.xPosition?["end","start"]:["start","end"],[o,d]="above"===e.yPosition?["bottom","top"]:["top","bottom"],[h,f]=[o,d],[M,v]=[i,s],b=0;if(this.triggersSubmenu()){if(v=i="before"===e.xPosition?"start":"end",s=M="end"===i?"start":"end",this._parentMaterialMenu){if(null==this._parentInnerPadding){const S=this._parentMaterialMenu.items.first;this._parentInnerPadding=S?S._getHostElement().offsetTop:0}b="bottom"===o?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(h="top"===o?"bottom":"top",f="top"===d?"bottom":"top");n.withPositions([{originX:i,originY:h,overlayX:M,overlayY:o,offsetY:b},{originX:s,originY:h,overlayX:v,overlayY:o,offsetY:b},{originX:i,originY:f,overlayX:M,overlayY:d,offsetY:-b},{originX:s,originY:f,overlayX:v,overlayY:d,offsetY:-b}])}_menuClosingActions(){const e=this._overlayRef.backdropClick(),n=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:(0,m.of)(),s=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe((0,r.filter)(o=>o!==this._menuItemInstance),(0,r.filter)(()=>this._menuOpen)):(0,m.of)();return(0,m.merge)(e,i,s,n)}_handleMousedown(e){(0,_.isFakeMousedownFromScreenReader)(e)||(this._openedBy=0===e.button?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){const n=e.keyCode;(n===u.ENTER||n===u.SPACE)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(n===u.RIGHT_ARROW&&"ltr"===this.dir||n===u.LEFT_ARROW&&"rtl"===this.dir)&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe((0,r.filter)(e=>e===this._menuItemInstance&&!e.disabled),(0,r.delay)(0,m.asapScheduler)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof g&&this.menu._isAnimating?this.menu._animationDone.pipe((0,r.take)(1),(0,r.delay)(0,m.asapScheduler),(0,r.takeUntil)(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new R.TemplatePortal(e.templateRef,this._viewContainerRef)),this._portal}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(E.Overlay),t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(t.ViewContainerRef),t.\u0275\u0275directiveInject(D),t.\u0275\u0275directiveInject(C,8),t.\u0275\u0275directiveInject(P,10),t.\u0275\u0275directiveInject(x.Directionality,8),t.\u0275\u0275directiveInject(_.FocusMonitor),t.\u0275\u0275directiveInject(t.NgZone))};static#t=this.\u0275dir=t.\u0275\u0275defineDirective({type:a,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(n,i){1&n&&t.\u0275\u0275listener("click",function(o){return i._handleClick(o)})("mousedown",function(o){return i._handleMousedown(o)})("keydown",function(o){return i._handleKeydown(o)}),2&n&&t.\u0275\u0275attribute("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:["mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:["matMenuTriggerFor","menu"],menuData:["matMenuTriggerData","menuData"],restoreFocus:["matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"]})}return a})(),$=(()=>{class a{static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275mod=t.\u0275\u0275defineNgModule({type:a});static#n=this.\u0275inj=t.\u0275\u0275defineInjector({providers:[w],imports:[y.CommonModule,I.MatRippleModule,I.MatCommonModule,E.OverlayModule,F.CdkScrollableModule,I.MatCommonModule]})}return a})()}}]);