(self.webpackChunkauth_etos=self.webpackChunkauth_etos||[]).push([[5611],{6672:(Z,y,f)=>{f.r(y),f.d(y,{CdkFixedSizeVirtualScroll:()=>M,CdkScrollable:()=>R,CdkScrollableModule:()=>b,CdkVirtualForOf:()=>F,CdkVirtualScrollViewport:()=>I,CdkVirtualScrollable:()=>w,CdkVirtualScrollableElement:()=>j,CdkVirtualScrollableWindow:()=>A,DEFAULT_RESIZE_TIME:()=>O,DEFAULT_SCROLL_TIME:()=>x,FixedSizeVirtualScrollStrategy:()=>E,ScrollDispatcher:()=>p,ScrollingModule:()=>W,VIRTUAL_SCROLLABLE:()=>S,VIRTUAL_SCROLL_STRATEGY:()=>C,ViewportRuler:()=>z,_fixedSizeVirtualScrollStrategyFactory:()=>D});var m=f(2552),i=f(5247),a=f(4946),u=f(7934),_=f(6567),k=f(8620),g=f(3591),v=f(6078);const V=["contentWrapper"],L=["*"],C=new i.InjectionToken("VIRTUAL_SCROLL_STRATEGY");class E{constructor(h,e,t){this._scrolledIndexChange=new a.Subject,this.scrolledIndexChange=this._scrolledIndexChange.pipe((0,u.distinctUntilChanged)()),this._viewport=null,this._itemSize=h,this._minBufferPx=e,this._maxBufferPx=t}attach(h){this._viewport=h,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(h,e,t){this._itemSize=h,this._minBufferPx=e,this._maxBufferPx=t,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(h,e){this._viewport&&this._viewport.scrollToOffset(h*this._itemSize,e)}_updateTotalContentSize(){this._viewport&&this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;const h=this._viewport.getRenderedRange(),e={start:h.start,end:h.end},t=this._viewport.getViewportSize(),r=this._viewport.getDataLength();let n=this._viewport.measureScrollOffset(),o=this._itemSize>0?n/this._itemSize:0;if(e.end>r){const l=Math.ceil(t/this._itemSize),c=Math.max(0,Math.min(o,r-l));o!=c&&(o=c,n=c*this._itemSize,e.start=Math.floor(o)),e.end=Math.max(0,Math.min(r,e.start+l))}const d=n-e.start*this._itemSize;if(d<this._minBufferPx&&0!=e.start){const l=Math.ceil((this._maxBufferPx-d)/this._itemSize);e.start=Math.max(0,e.start-l),e.end=Math.min(r,Math.ceil(o+(t+this._minBufferPx)/this._itemSize))}else{const l=e.end*this._itemSize-(n+t);if(l<this._minBufferPx&&e.end!=r){const c=Math.ceil((this._maxBufferPx-l)/this._itemSize);c>0&&(e.end=Math.min(r,e.end+c),e.start=Math.max(0,Math.floor(o-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(this._itemSize*e.start),this._scrolledIndexChange.next(Math.floor(o))}}function D(s){return s._scrollStrategy}let M=(()=>{class s{constructor(){this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new E(this.itemSize,this.minBufferPx,this.maxBufferPx)}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=(0,m.coerceNumberProperty)(e)}get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=(0,m.coerceNumberProperty)(e)}get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=(0,m.coerceNumberProperty)(e)}ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}static#e=this.\u0275fac=function(t){return new(t||s)};static#t=this.\u0275dir=i.\u0275\u0275defineDirective({type:s,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:C,useFactory:D,deps:[(0,i.forwardRef)(()=>s)]}]),i.\u0275\u0275NgOnChangesFeature]})}return s})();const x=20;let p=(()=>{class s{constructor(e,t,r){this._ngZone=e,this._platform=t,this._scrolled=new a.Subject,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=x){return this._platform.isBrowser?new a.Observable(t=>{this._globalSubscription||this._addGlobalListener();const r=e>0?this._scrolled.pipe((0,u.auditTime)(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,a.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){const r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe((0,u.filter)(n=>!n||r.indexOf(n)>-1))}getAncestorScrollContainers(e){const t=[];return this.scrollContainers.forEach((r,n)=>{this._scrollableContainsElement(n,e)&&t.push(n)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let r=(0,m.coerceElement)(t),n=e.getElementRef().nativeElement;do{if(r==n)return!0}while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,a.fromEvent)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static#e=this.\u0275fac=function(t){return new(t||s)(i.\u0275\u0275inject(i.NgZone),i.\u0275\u0275inject(_.Platform),i.\u0275\u0275inject(k.DOCUMENT,8))};static#t=this.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),R=(()=>{class s{constructor(e,t,r,n){this.elementRef=e,this.scrollDispatcher=t,this.ngZone=r,this.dir=n,this._destroyed=new a.Subject,this._elementScrolled=new a.Observable(o=>this.ngZone.runOutsideAngular(()=>(0,a.fromEvent)(this.elementRef.nativeElement,"scroll").pipe((0,u.takeUntil)(this._destroyed)).subscribe(o)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const t=this.elementRef.nativeElement,r=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=r?e.end:e.start),null==e.right&&(e.right=r?e.start:e.end),null!=e.bottom&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&0!=(0,_.getRtlScrollAxisType)()?(null!=e.left&&(e.right=t.scrollWidth-t.clientWidth-e.left),2==(0,_.getRtlScrollAxisType)()?e.left=e.right:1==(0,_.getRtlScrollAxisType)()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const t=this.elementRef.nativeElement;(0,_.supportsScrollBehavior)()?t.scrollTo(e):(null!=e.top&&(t.scrollTop=e.top),null!=e.left&&(t.scrollLeft=e.left))}measureScrollOffset(e){const t="left",r="right",n=this.elementRef.nativeElement;if("top"==e)return n.scrollTop;if("bottom"==e)return n.scrollHeight-n.clientHeight-n.scrollTop;const o=this.dir&&"rtl"==this.dir.value;return"start"==e?e=o?r:t:"end"==e&&(e=o?t:r),o&&2==(0,_.getRtlScrollAxisType)()?e==t?n.scrollWidth-n.clientWidth-n.scrollLeft:n.scrollLeft:o&&1==(0,_.getRtlScrollAxisType)()?e==t?n.scrollLeft+n.scrollWidth-n.clientWidth:-n.scrollLeft:e==t?n.scrollLeft:n.scrollWidth-n.clientWidth-n.scrollLeft}static#e=this.\u0275fac=function(t){return new(t||s)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(p),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(g.Directionality,8))};static#t=this.\u0275dir=i.\u0275\u0275defineDirective({type:s,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0})}return s})();const O=20;let z=(()=>{class s{constructor(e,t,r){this._platform=e,this._change=new a.Subject,this._changeListener=n=>{this._change.next(n)},this._document=r,t.runOutsideAngular(()=>{if(e.isBrowser){const n=this._getWindow();n.addEventListener("resize",this._changeListener),n.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,t=this._getWindow(),r=e.documentElement,n=r.getBoundingClientRect();return{top:-n.top||e.body.scrollTop||t.scrollY||r.scrollTop||0,left:-n.left||e.body.scrollLeft||t.scrollX||r.scrollLeft||0}}change(e=O){return e>0?this._change.pipe((0,u.auditTime)(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static#e=this.\u0275fac=function(t){return new(t||s)(i.\u0275\u0275inject(_.Platform),i.\u0275\u0275inject(i.NgZone),i.\u0275\u0275inject(k.DOCUMENT,8))};static#t=this.\u0275prov=i.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();const S=new i.InjectionToken("VIRTUAL_SCROLLABLE");let w=(()=>{class s extends R{constructor(e,t,r,n){super(e,t,r,n)}measureViewportSize(e){const t=this.elementRef.nativeElement;return"horizontal"===e?t.clientWidth:t.clientHeight}static#e=this.\u0275fac=function(t){return new(t||s)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(p),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(g.Directionality,8))};static#t=this.\u0275dir=i.\u0275\u0275defineDirective({type:s,features:[i.\u0275\u0275InheritDefinitionFeature]})}return s})();const B=typeof requestAnimationFrame<"u"?a.animationFrameScheduler:a.asapScheduler;let I=(()=>{class s extends w{get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}constructor(e,t,r,n,o,d,l,c){super(e,d,r,o),this.elementRef=e,this._changeDetectorRef=t,this._scrollStrategy=n,this.scrollable=c,this._platform=(0,i.inject)(_.Platform),this._detachedSubject=new a.Subject,this._renderedRangeSubject=new a.Subject,this._orientation="vertical",this.appendOnly=!1,this.scrolledIndexChange=new a.Observable(N=>this._scrollStrategy.scrolledIndexChange.subscribe(U=>Promise.resolve().then(()=>this.ngZone.run(()=>N.next(U))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=a.Subscription.EMPTY,this._viewportChanges=l.change().subscribe(()=>{this.checkViewportSize()}),this.scrollable||(this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),this.scrollable=this)}ngOnInit(){this._platform.isBrowser&&(this.scrollable===this&&super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.scrollable.elementScrolled().pipe((0,u.startWith)(null),(0,u.auditTime)(0,B),(0,u.takeUntil)(this._destroyed)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()})))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(e){this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe((0,u.takeUntil)(this._detachedSubject)).subscribe(t=>{const r=t.length;r!==this._dataLength&&(this._dataLength=r,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){(function P(s,h){return s.start==h.start&&s.end==h.end})(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,t="to-start"){e=this.appendOnly&&"to-start"===t?0:e;const n="horizontal"==this.orientation,o=n?"X":"Y";let l=`translate${o}(${Number((n&&this.dir&&"rtl"==this.dir.value?-1:1)*e)}px)`;this._renderedContentOffset=e,"to-end"===t&&(l+=` translate${o}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=l&&(this._renderedContentTransform=l,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,t="auto"){const r={behavior:t};"horizontal"===this.orientation?r.start=e:r.top=e,this.scrollable.scrollTo(r)}scrollToIndex(e,t="auto"){this._scrollStrategy.scrollToIndex(e,t)}measureScrollOffset(e){let t;return t=this.scrollable==this?r=>super.measureScrollOffset(r):r=>this.scrollable.measureScrollOffset(r),Math.max(0,t(e??("horizontal"===this.orientation?"start":"top"))-this.measureViewportOffset())}measureViewportOffset(e){let t;const r="left",n="right",o="rtl"==this.dir?.value;t="start"==e?o?n:r:"end"==e?o?r:n:e||("horizontal"===this.orientation?"left":"top");const d=this.scrollable.measureBoundingClientRectWithScrollOffset(t);return this.elementRef.nativeElement.getBoundingClientRect()[t]-d}measureRenderedContentSize(){const e=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const t of e)t()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}static#e=this.\u0275fac=function(t){return new(t||s)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(i.ChangeDetectorRef),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(C,8),i.\u0275\u0275directiveInject(g.Directionality,8),i.\u0275\u0275directiveInject(p),i.\u0275\u0275directiveInject(z),i.\u0275\u0275directiveInject(S,8))};static#t=this.\u0275cmp=i.\u0275\u0275defineComponent({type:s,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(t,r){if(1&t&&i.\u0275\u0275viewQuery(V,7),2&t){let n;i.\u0275\u0275queryRefresh(n=i.\u0275\u0275loadQuery())&&(r._contentWrapper=n.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(t,r){2&t&&i.\u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal","horizontal"===r.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==r.orientation)},inputs:{orientation:"orientation",appendOnly:["appendOnly","appendOnly",i.booleanAttribute]},outputs:{scrolledIndexChange:"scrolledIndexChange"},standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:R,useFactory:(e,t)=>e||t,deps:[[new i.Optional,new i.Inject(S)],s]}]),i.\u0275\u0275InputTransformsFeature,i.\u0275\u0275InheritDefinitionFeature,i.\u0275\u0275StandaloneFeature],ngContentSelectors:L,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(t,r){1&t&&(i.\u0275\u0275projectionDef(),i.\u0275\u0275elementStart(0,"div",0,1),i.\u0275\u0275projection(2),i.\u0275\u0275elementEnd(),i.\u0275\u0275element(3,"div",2)),2&t&&(i.\u0275\u0275advance(3),i.\u0275\u0275styleProp("width",r._totalContentWidth)("height",r._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],encapsulation:2,changeDetection:0})}return s})();function T(s,h,e){if(!e.getBoundingClientRect)return 0;const r=e.getBoundingClientRect();return"horizontal"===s?"start"===h?r.left:r.right:"start"===h?r.top:r.bottom}let F=(()=>{class s{get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,(0,v.isDataSource)(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new v.ArrayDataSource((0,a.isObservable)(e)?e:Array.from(e||[])))}get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(t,r)=>e(t+(this._renderedRange?this._renderedRange.start:0),r):void 0}set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=(0,m.coerceNumberProperty)(e)}constructor(e,t,r,n,o,d){this._viewContainerRef=e,this._template=t,this._differs=r,this._viewRepeater=n,this._viewport=o,this.viewChange=new a.Subject,this._dataSourceChanges=new a.Subject,this.dataStream=this._dataSourceChanges.pipe((0,u.startWith)(null),(0,u.pairwise)(),(0,u.switchMap)(([l,c])=>this._changeDataSource(l,c)),(0,u.shareReplay)(1)),this._differ=null,this._needsUpdate=!1,this._destroyed=new a.Subject,this.dataStream.subscribe(l=>{this._data=l,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe((0,u.takeUntil)(this._destroyed)).subscribe(l=>{this._renderedRange=l,this.viewChange.observers.length&&d.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}measureRangeSize(e,t){if(e.start>=e.end)return 0;const r=e.start-this._renderedRange.start,n=e.end-e.start;let o,d;for(let l=0;l<n;l++){const c=this._viewContainerRef.get(l+r);if(c&&c.rootNodes.length){o=d=c.rootNodes[0];break}}for(let l=n-1;l>-1;l--){const c=this._viewContainerRef.get(l+r);if(c&&c.rootNodes.length){d=c.rootNodes[c.rootNodes.length-1];break}}return o&&d?T(t,"end",d)-T(t,"start",o):0}ngDoCheck(){if(this._differ&&this._needsUpdate){const e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){this._renderedRange&&(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,t)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,t):t)),this._needsUpdate=!0)}_changeDataSource(e,t){return e&&e.disconnect(this),this._needsUpdate=!0,t?t.connect(this):(0,a.of)()}_updateContext(){const e=this._data.length;let t=this._viewContainerRef.length;for(;t--;){const r=this._viewContainerRef.get(t);r.context.index=this._renderedRange.start+t,r.context.count=e,this._updateComputedContextProperties(r.context),r.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(n,o,d)=>this._getEmbeddedViewArgs(n,d),n=>n.item),e.forEachIdentityChange(n=>{this._viewContainerRef.get(n.currentIndex).context.$implicit=n.item});const t=this._data.length;let r=this._viewContainerRef.length;for(;r--;){const n=this._viewContainerRef.get(r);n.context.index=this._renderedRange.start+r,n.context.count=t,this._updateComputedContextProperties(n.context)}}_updateComputedContextProperties(e){e.first=0===e.index,e.last=e.index===e.count-1,e.even=e.index%2==0,e.odd=!e.even}_getEmbeddedViewArgs(e,t){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:t}}static#e=this.\u0275fac=function(t){return new(t||s)(i.\u0275\u0275directiveInject(i.ViewContainerRef),i.\u0275\u0275directiveInject(i.TemplateRef),i.\u0275\u0275directiveInject(i.IterableDiffers),i.\u0275\u0275directiveInject(v._VIEW_REPEATER_STRATEGY),i.\u0275\u0275directiveInject(I,4),i.\u0275\u0275directiveInject(i.NgZone))};static#t=this.\u0275dir=i.\u0275\u0275defineDirective({type:s,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:v._VIEW_REPEATER_STRATEGY,useClass:v._RecycleViewRepeaterStrategy}])]})}return s})(),j=(()=>{class s extends w{constructor(e,t,r,n){super(e,t,r,n)}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]-this.measureScrollOffset(e)}static#e=this.\u0275fac=function(t){return new(t||s)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(p),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(g.Directionality,8))};static#t=this.\u0275dir=i.\u0275\u0275defineDirective({type:s,selectors:[["","cdkVirtualScrollingElement",""]],hostAttrs:[1,"cdk-virtual-scrollable"],standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:S,useExisting:s}]),i.\u0275\u0275InheritDefinitionFeature]})}return s})(),A=(()=>{class s extends w{constructor(e,t,r){super(new i.ElementRef(document.documentElement),e,t,r),this._elementScrolled=new a.Observable(n=>this.ngZone.runOutsideAngular(()=>(0,a.fromEvent)(document,"scroll").pipe((0,u.takeUntil)(this._destroyed)).subscribe(n)))}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}static#e=this.\u0275fac=function(t){return new(t||s)(i.\u0275\u0275directiveInject(p),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(g.Directionality,8))};static#t=this.\u0275dir=i.\u0275\u0275defineDirective({type:s,selectors:[["cdk-virtual-scroll-viewport","scrollWindow",""]],standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:S,useExisting:s}]),i.\u0275\u0275InheritDefinitionFeature]})}return s})(),b=(()=>{class s{static#e=this.\u0275fac=function(t){return new(t||s)};static#t=this.\u0275mod=i.\u0275\u0275defineNgModule({type:s});static#i=this.\u0275inj=i.\u0275\u0275defineInjector({})}return s})(),W=(()=>{class s{static#e=this.\u0275fac=function(t){return new(t||s)};static#t=this.\u0275mod=i.\u0275\u0275defineNgModule({type:s});static#i=this.\u0275inj=i.\u0275\u0275defineInjector({imports:[g.BidiModule,b,g.BidiModule,b]})}return s})()}}]);