(self.webpackChunkspv_etos=self.webpackChunkspv_etos||[]).push([[2708],{2708:(nt,k,B)=>{function X(t){return getComputedStyle(t)}function m(t,e){for(var r in e){var i=e[r];"number"==typeof i&&(i+="px"),t.style[r]=i}return t}function P(t){var e=document.createElement("div");return e.className=t,e}B.r(k),B.d(k,{default:()=>lt});var x=typeof Element<"u"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function L(t,e){if(!x)throw new Error("No element matching method supported");return x.call(t,e)}function H(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function I(t,e){return Array.prototype.filter.call(t.children,function(r){return L(r,e)})}var v={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},O={x:null,y:null};function K(t,e){var r=t.element.classList,i=v.state.scrolling(e);r.contains(i)?clearTimeout(O[e]):r.add(i)}function N(t,e){O[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(v.state.scrolling(e))},t.settings.scrollingThreshold)}var M=function(e){this.element=e,this.handlers={}},_={isEmpty:{configurable:!0}};M.prototype.bind=function(e,r){typeof this.handlers[e]>"u"&&(this.handlers[e]=[]),this.handlers[e].push(r),this.element.addEventListener(e,r,!1)},M.prototype.unbind=function(e,r){var i=this;this.handlers[e]=this.handlers[e].filter(function(s){return!(!r||s===r)||(i.element.removeEventListener(e,s,!1),!1)})},M.prototype.unbindAll=function(){for(var e in this.handlers)this.unbind(e)},_.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return 0===t.handlers[e].length})},Object.defineProperties(M.prototype,_);var R=function(){this.eventElements=[]};function C(t){if("function"==typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function D(t,e,r,i,s){var a;if(void 0===i&&(i=!0),void 0===s&&(s=!1),"top"===e)a=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");a=["contentWidth","containerWidth","scrollLeft","x","left","right"]}!function q(t,e,r,i,s){var a=r[0],n=r[1],o=r[2],l=r[3],c=r[4],p=r[5];void 0===i&&(i=!0),void 0===s&&(s=!1);var g=t.element;t.reach[l]=null,g[o]<1&&(t.reach[l]="start"),g[o]>t[a]-t[n]-1&&(t.reach[l]="end"),e&&(g.dispatchEvent(C("ps-scroll-"+l)),e<0?g.dispatchEvent(C("ps-scroll-"+c)):e>0&&g.dispatchEvent(C("ps-scroll-"+p)),i&&function $(t,e){K(t,e),N(t,e)}(t,l)),t.reach[l]&&(e||s)&&g.dispatchEvent(C("ps-"+l+"-reach-"+t.reach[l]))}(t,r,a,i,s)}function d(t){return parseInt(t,10)||0}R.prototype.eventElement=function(e){var r=this.eventElements.filter(function(i){return i.element===e})[0];return r||(r=new M(e),this.eventElements.push(r)),r},R.prototype.bind=function(e,r,i){this.eventElement(e).bind(r,i)},R.prototype.unbind=function(e,r,i){var s=this.eventElement(e);s.unbind(r,i),s.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(s),1)},R.prototype.unbindAll=function(){this.eventElements.forEach(function(e){return e.unbindAll()}),this.eventElements=[]},R.prototype.once=function(e,r,i){var s=this.eventElement(e),a=function(n){s.unbind(r,a),i(n)};s.bind(r,a)};var E={isWebKit:typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator<"u"&&navigator.msMaxTouchPoints,isChrome:typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent)};function T(t){var e=t.element,r=Math.floor(e.scrollTop),i=e.getBoundingClientRect();t.containerWidth=Math.round(i.width),t.containerHeight=Math.round(i.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(I(e,v.element.rail("x")).forEach(function(s){return H(s)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(I(e,v.element.rail("y")).forEach(function(s){return H(s)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=U(t,d(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=d((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=U(t,d(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=d(r*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),function J(t,e){var r={width:e.railXWidth},i=Math.floor(t.scrollTop);r.left=e.isRtl?e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:t.scrollLeft,e.isScrollbarXUsingBottom?r.bottom=e.scrollbarXBottom-i:r.top=e.scrollbarXTop+i,m(e.scrollbarXRail,r);var s={top:i,height:e.railYHeight};e.isScrollbarYUsingRight?s.right=e.isRtl?e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:e.scrollbarYRight-t.scrollLeft:s.left=e.isRtl?e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:e.scrollbarYLeft+t.scrollLeft,m(e.scrollbarYRail,s),m(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),m(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}(e,t),t.scrollbarXActive?e.classList.add(v.state.active("x")):(e.classList.remove(v.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=!0===t.isRtl?t.contentWidth:0),t.scrollbarYActive?e.classList.add(v.state.active("y")):(e.classList.remove(v.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function U(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function j(t,e){var r=e[0],i=e[1],s=e[2],a=e[3],n=e[4],o=e[5],l=e[6],c=e[7],p=e[8],g=t.element,y=null,W=null,h=null;function b(u){u.touches&&u.touches[0]&&(u[s]=u.touches[0].pageY),g[l]=y+h*(u[s]-W),K(t,c),T(t),u.stopPropagation(),u.type.startsWith("touch")&&u.changedTouches.length>1&&u.preventDefault()}function Y(){N(t,c),t[p].classList.remove(v.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",b)}function f(u,w){y=g[l],w&&u.touches&&(u[s]=u.touches[0].pageY),W=u[s],h=(t[i]-t[r])/(t[a]-t[o]),w?t.event.bind(t.ownerDocument,"touchmove",b):(t.event.bind(t.ownerDocument,"mousemove",b),t.event.once(t.ownerDocument,"mouseup",Y),u.preventDefault()),t[p].classList.add(v.state.clicking),u.stopPropagation()}t.event.bind(t[n],"mousedown",function(u){f(u)}),t.event.bind(t[n],"touchstart",function(u){f(u,!0)})}var rt={"click-rail":function Q(t){t.event.bind(t.scrollbarY,"mousedown",function(r){return r.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(r){var i=r.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top;t.element.scrollTop+=(i>t.scrollbarYTop?1:-1)*t.containerHeight,T(t),r.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(r){return r.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(r){var i=r.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left;t.element.scrollLeft+=(i>t.scrollbarXLeft?1:-1)*t.containerWidth,T(t),r.stopPropagation()})},"drag-thumb":function V(t){j(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),j(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function Z(t){var e=t.element;t.event.bind(t.ownerDocument,"keydown",function(a){if(!(a.isDefaultPrevented&&a.isDefaultPrevented()||a.defaultPrevented)&&(L(e,":hover")||L(t.scrollbarX,":focus")||L(t.scrollbarY,":focus"))){var n=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(n){if("IFRAME"===n.tagName)n=n.contentDocument.activeElement;else for(;n.shadowRoot;)n=n.shadowRoot.activeElement;if(function z(t){return L(t,"input,[contenteditable]")||L(t,"select,[contenteditable]")||L(t,"textarea,[contenteditable]")||L(t,"button,[contenteditable]")}(n))return}var o=0,l=0;switch(a.which){case 37:o=a.metaKey?-t.contentWidth:a.altKey?-t.containerWidth:-30;break;case 38:l=a.metaKey?t.contentHeight:a.altKey?t.containerHeight:30;break;case 39:o=a.metaKey?t.contentWidth:a.altKey?t.containerWidth:30;break;case 40:l=a.metaKey?-t.contentHeight:a.altKey?-t.containerHeight:-30;break;case 32:l=a.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:l=t.containerHeight;break;case 34:l=-t.containerHeight;break;case 36:l=t.contentHeight;break;case 35:l=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==o||t.settings.suppressScrollY&&0!==l||(e.scrollTop-=l,e.scrollLeft+=o,T(t),function s(a,n){var o=Math.floor(e.scrollTop);if(0===a){if(!t.scrollbarYActive)return!1;if(0===o&&n>0||o>=t.contentHeight-t.containerHeight&&n<0)return!t.settings.wheelPropagation}var l=e.scrollLeft;if(0===n){if(!t.scrollbarXActive)return!1;if(0===l&&a<0||l>=t.contentWidth-t.containerWidth&&a>0)return!t.settings.wheelPropagation}return!0}(o,l)&&a.preventDefault())}})},wheel:function G(t){var e=t.element;function a(n){var o=function i(n){var o=n.deltaX,l=-1*n.deltaY;return(typeof o>"u"||typeof l>"u")&&(o=-1*n.wheelDeltaX/6,l=n.wheelDeltaY/6),n.deltaMode&&1===n.deltaMode&&(o*=10,l*=10),o!=o&&l!=l&&(o=0,l=n.wheelDelta),n.shiftKey?[-l,-o]:[o,l]}(n),l=o[0],c=o[1];if(!function s(n,o,l){if(!E.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(n))return!1;for(var c=n;c&&c!==e;){if(c.classList.contains(v.element.consuming))return!0;var p=X(c);if(l&&p.overflowY.match(/(scroll|auto)/)){var g=c.scrollHeight-c.clientHeight;if(g>0&&(c.scrollTop>0&&l<0||c.scrollTop<g&&l>0))return!0}if(o&&p.overflowX.match(/(scroll|auto)/)){var y=c.scrollWidth-c.clientWidth;if(y>0&&(c.scrollLeft>0&&o<0||c.scrollLeft<y&&o>0))return!0}c=c.parentNode}return!1}(n.target,l,c)){var p=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(c?e.scrollTop-=c*t.settings.wheelSpeed:e.scrollTop+=l*t.settings.wheelSpeed,p=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(l?e.scrollLeft+=l*t.settings.wheelSpeed:e.scrollLeft-=c*t.settings.wheelSpeed,p=!0):(e.scrollTop-=c*t.settings.wheelSpeed,e.scrollLeft+=l*t.settings.wheelSpeed),T(t),p=p||function r(n,o){var l=Math.floor(e.scrollTop),c=0===e.scrollTop,p=l+e.offsetHeight===e.scrollHeight,g=0===e.scrollLeft,y=e.scrollLeft+e.offsetWidth===e.scrollWidth;return!(Math.abs(o)>Math.abs(n)?c||p:g||y)||!t.settings.wheelPropagation}(l,c),p&&!n.ctrlKey&&(n.stopPropagation(),n.preventDefault())}}typeof window.onwheel<"u"?t.event.bind(e,"wheel",a):typeof window.onmousewheel<"u"&&t.event.bind(e,"mousewheel",a)},touch:function tt(t){if(E.supportsTouch||E.supportsIePointer){var e=t.element,s={},a=0,n={},o=null;E.supportsTouch?(t.event.bind(e,"touchstart",p),t.event.bind(e,"touchmove",y),t.event.bind(e,"touchend",W)):E.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",p),t.event.bind(e,"pointermove",y),t.event.bind(e,"pointerup",W)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",p),t.event.bind(e,"MSPointerMove",y),t.event.bind(e,"MSPointerUp",W)))}function i(h,b){e.scrollTop-=b,e.scrollLeft-=h,T(t)}function l(h){return h.targetTouches?h.targetTouches[0]:h}function c(h){return!(h.pointerType&&"pen"===h.pointerType&&0===h.buttons||!(h.targetTouches&&1===h.targetTouches.length||h.pointerType&&"mouse"!==h.pointerType&&h.pointerType!==h.MSPOINTER_TYPE_MOUSE))}function p(h){if(c(h)){var b=l(h);s.pageX=b.pageX,s.pageY=b.pageY,a=(new Date).getTime(),null!==o&&clearInterval(o)}}function y(h){if(c(h)){var b=l(h),Y={pageX:b.pageX,pageY:b.pageY},f=Y.pageX-s.pageX,u=Y.pageY-s.pageY;if(function g(h,b,Y){if(!e.contains(h))return!1;for(var f=h;f&&f!==e;){if(f.classList.contains(v.element.consuming))return!0;var u=X(f);if(Y&&u.overflowY.match(/(scroll|auto)/)){var w=f.scrollHeight-f.clientHeight;if(w>0&&(f.scrollTop>0&&Y<0||f.scrollTop<w&&Y>0))return!0}if(b&&u.overflowX.match(/(scroll|auto)/)){var S=f.scrollWidth-f.clientWidth;if(S>0&&(f.scrollLeft>0&&b<0||f.scrollLeft<S&&b>0))return!0}f=f.parentNode}return!1}(h.target,f,u))return;i(f,u),s=Y;var w=(new Date).getTime(),S=w-a;S>0&&(n.x=f/S,n.y=u/S,a=w),function r(h,b){var Y=Math.floor(e.scrollTop),f=e.scrollLeft,u=Math.abs(h),w=Math.abs(b);if(w>u){if(b<0&&Y===t.contentHeight-t.containerHeight||b>0&&0===Y)return 0===window.scrollY&&b>0&&E.isChrome}else if(u>w&&(h<0&&f===t.contentWidth-t.containerWidth||h>0&&0===f))return!0;return!0}(f,u)&&h.preventDefault()}}function W(){t.settings.swipeEasing&&(clearInterval(o),o=setInterval(function(){t.isInitialized?clearInterval(o):n.x||n.y?Math.abs(n.x)<.01&&Math.abs(n.y)<.01?clearInterval(o):t.element?(i(30*n.x,30*n.y),n.x*=.8,n.y*=.8):clearInterval(o):clearInterval(o)},10))}}},A=function(e,r){var i=this;if(void 0===r&&(r={}),"string"==typeof e&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var s in this.element=e,e.classList.add(v.main),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1},r)this.settings[s]=r[s];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var p,c,a=function(){return e.classList.add(v.state.focus)},n=function(){return e.classList.remove(v.state.focus)};this.isRtl="rtl"===X(e).direction,!0===this.isRtl&&e.classList.add(v.rtl),this.isNegativeScroll=(c=e.scrollLeft,e.scrollLeft=-1,p=e.scrollLeft<0,e.scrollLeft=c,p),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new R,this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=P(v.element.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=P(v.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",a),this.event.bind(this.scrollbarX,"blur",n),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var o=X(this.scrollbarXRail);this.scrollbarXBottom=parseInt(o.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=d(o.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=d(o.borderLeftWidth)+d(o.borderRightWidth),m(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=d(o.marginLeft)+d(o.marginRight),m(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=P(v.element.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=P(v.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",a),this.event.bind(this.scrollbarY,"blur",n),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var l=X(this.scrollbarYRail);this.scrollbarYRight=parseInt(l.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=d(l.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?function F(t){var e=X(t);return d(e.width)+d(e.paddingLeft)+d(e.paddingRight)+d(e.borderLeftWidth)+d(e.borderRightWidth)}(this.scrollbarY):null,this.railBorderYWidth=d(l.borderTopWidth)+d(l.borderBottomWidth),m(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=d(l.marginTop)+d(l.marginBottom),m(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(c){return rt[c](i)}),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",function(c){return i.onScroll(c)}),T(this)};A.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,m(this.scrollbarXRail,{display:"block"}),m(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=d(X(this.scrollbarXRail).marginLeft)+d(X(this.scrollbarXRail).marginRight),this.railYMarginHeight=d(X(this.scrollbarYRail).marginTop)+d(X(this.scrollbarYRail).marginBottom),m(this.scrollbarXRail,{display:"none"}),m(this.scrollbarYRail,{display:"none"}),T(this),D(this,"top",0,!1,!0),D(this,"left",0,!1,!0),m(this.scrollbarXRail,{display:""}),m(this.scrollbarYRail,{display:""}))},A.prototype.onScroll=function(e){this.isAlive&&(T(this),D(this,"top",this.element.scrollTop-this.lastScrollTop),D(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},A.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),H(this.scrollbarX),H(this.scrollbarY),H(this.scrollbarXRail),H(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},A.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(e){return!e.match(/^ps([-_].+|)$/)}).join(" ")};const lt=A}}]);