(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95374],{4220:function(e){var t=1/0,n=0/0,r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=/^(?:0|[1-9]\d*)$/,u=parseInt,s=Object.prototype.toString,c=Math.ceil,d=Math.max;function f(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}e.exports=function(e,v,p){v=(p?function(e,t,n){if(!f(n))return!1;var r,o,i,a,u=typeof t;return("number"==u?!!(null!=n&&"number"==typeof(r=n.length)&&r>-1&&r%1==0&&r<=9007199254740991&&!("[object Function]"==(o=f(n)?s.call(n):"")||"[object GeneratorFunction]"==o)&&(a=null==(a=n.length)?9007199254740991:a)&&("number"==typeof t||l.test(t))&&t>-1&&t%1==0&&t<a):"string"==u&&t in n)&&((i=n[t])===e||i!=i&&e!=e)}(e,v,p):void 0===v)?1:d((E=(w=(m=v)?(m=function(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==s.call(t))return n;if(f(e)){var t,l="function"==typeof e.valueOf?e.valueOf():e;e=f(l)?l+"":l}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var c=i.test(e);return c||a.test(e)?u(e.slice(2),c?2:8):o.test(e)?n:+e}(m))===t||m===-t?(m<0?-1:1)*17976931348623157e292:m==m?m:0:0===m?m:0)%1,w==w?E?w-E:w:0),0);var m,w,E,g=e?e.length:0;if(!g||v<1)return[];for(var b=0,h=0,y=Array(c(g/v));b<g;)y[h++]=function(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(o);++r<o;)i[r]=e[r+t];return i}(e,b,b+=v);return y}},51668:function(e,t,n){"use strict";e.exports=n(76918)},70459:function(e,t,n){"use strict";let r;n.d(t,{VY:function(){return ey},z$:function(){return eh},ck:function(){return eE},rU:function(){return eb},aV:function(){return ew},fC:function(){return em},xz:function(){return eg},l_:function(){return eR}});var o=n(58442),i=n(2265),a=n(54887),l=n(80306),u=n(43251),s=n(63999),c=n(35719),d=n(30651),f=n(99010),v=n(58010),p=n(68557),m=n(33501);function w(e){let t=e+"CollectionProvider",[n,r]=(0,l.b)(t),[o,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),u=e+"CollectionSlot",s=i.forwardRef((e,t)=>{let{scope:n,children:r}=e,o=a(u,n),l=(0,d.e)(t,o.collectionRef);return i.createElement(m.g7,{ref:l},r)}),c=e+"CollectionItemSlot",f="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:n}=e,r=i.useRef(null),a=i.useRef(new Map).current;return i.createElement(o,{scope:t,itemMap:a,collectionRef:r},n)},Slot:s,ItemSlot:i.forwardRef((e,t)=>{let{scope:n,children:r,...o}=e,l=i.useRef(null),u=(0,d.e)(t,l),s=a(c,n);return i.useEffect(()=>(s.itemMap.set(l,{ref:l,...o}),()=>void s.itemMap.delete(l))),i.createElement(m.g7,{[f]:"",ref:u},r)})},function(t){let n=a(e+"CollectionConsumer",t);return i.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${f}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},r]}var E=n(78851);let g="dismissableLayer.update",b=(0,i.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),h=(0,i.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:a=!1,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:f,onInteractOutside:v,onDismiss:p,...m}=e,w=(0,i.useContext)(b),[h,C]=(0,i.useState)(null),M=null!==(n=null==h?void 0:h.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,T]=(0,i.useState)({}),P=(0,d.e)(t,e=>C(e)),k=Array.from(w.layers),[_]=[...w.layersWithOutsidePointerEventsDisabled].slice(-1),D=k.indexOf(_),L=h?k.indexOf(h):-1,S=w.layersWithOutsidePointerEventsDisabled.size>0,x=L>=D,N=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,E.W)(e),r=(0,i.useRef)(!1),o=(0,i.useRef)(()=>{});return(0,i.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function i(){R("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=i,t.addEventListener("click",o.current,{once:!0})):i()}else t.removeEventListener("click",o.current);r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...w.branches].some(e=>e.contains(t));!x||n||(null==c||c(e),null==v||v(e),e.defaultPrevented||null==p||p())},M),O=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,E.W)(e),r=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{let e=e=>{e.target&&!r.current&&R("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...w.branches].some(e=>e.contains(t))||(null==f||f(e),null==v||v(e),e.defaultPrevented||null==p||p())},M);return!function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,E.W)(e);(0,i.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{L!==w.layers.size-1||(null==l||l(e),!e.defaultPrevented&&p&&(e.preventDefault(),p()))},M),(0,i.useEffect)(()=>{if(h)return a&&(0===w.layersWithOutsidePointerEventsDisabled.size&&(r=M.body.style.pointerEvents,M.body.style.pointerEvents="none"),w.layersWithOutsidePointerEventsDisabled.add(h)),w.layers.add(h),y(),()=>{a&&1===w.layersWithOutsidePointerEventsDisabled.size&&(M.body.style.pointerEvents=r)}},[h,M,a,w]),(0,i.useEffect)(()=>()=>{h&&(w.layers.delete(h),w.layersWithOutsidePointerEventsDisabled.delete(h),y())},[h,w]),(0,i.useEffect)(()=>{let e=()=>T({});return document.addEventListener(g,e),()=>document.removeEventListener(g,e)},[]),(0,i.createElement)(s.WV.div,(0,o.Z)({},m,{ref:P,style:{pointerEvents:S?x?"auto":"none":void 0,...e.style},onFocusCapture:(0,u.M)(e.onFocusCapture,O.onFocusCapture),onBlurCapture:(0,u.M)(e.onBlurCapture,O.onBlurCapture),onPointerDownCapture:(0,u.M)(e.onPointerDownCapture,N.onPointerDownCapture)}))});function y(){let e=new CustomEvent(g);document.dispatchEvent(e)}function R(e,t,n,{discrete:r}){let o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,s.jH)(o,i):o.dispatchEvent(i)}var C=n(38728);let M=(0,i.forwardRef)((e,t)=>(0,i.createElement)(s.WV.span,(0,o.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),T="NavigationMenu",[P,k,_]=w(T),[D,L,S]=w(T),[x,N]=(0,l.b)(T,[_,S]),[O,I]=x(T),[W,F]=x(T),A=(0,i.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,value:r,onValueChange:a,defaultValue:l,delayDuration:u=200,skipDelayDuration:v=300,orientation:p="horizontal",dir:m,...w}=e,[E,g]=(0,i.useState)(null),b=(0,d.e)(t,e=>g(e)),h=(0,f.gm)(m),y=(0,i.useRef)(0),R=(0,i.useRef)(0),C=(0,i.useRef)(0),[M,T]=(0,i.useState)(!0),[P="",k]=(0,c.T)({prop:r,onChange:e=>{let t=v>0;""!==e?(window.clearTimeout(C.current),t&&T(!1)):(window.clearTimeout(C.current),C.current=window.setTimeout(()=>T(!0),v)),null==a||a(e)},defaultProp:l}),_=(0,i.useCallback)(()=>{window.clearTimeout(R.current),R.current=window.setTimeout(()=>k(""),150)},[k]),D=(0,i.useCallback)(e=>{window.clearTimeout(R.current),k(e)},[k]),L=(0,i.useCallback)(e=>{P===e?window.clearTimeout(R.current):y.current=window.setTimeout(()=>{window.clearTimeout(R.current),k(e)},u)},[P,k,u]);return(0,i.useEffect)(()=>()=>{window.clearTimeout(y.current),window.clearTimeout(R.current),window.clearTimeout(C.current)},[]),(0,i.createElement)(V,{scope:n,isRootMenu:!0,value:P,dir:h,orientation:p,rootNavigationMenu:E,onTriggerEnter:e=>{window.clearTimeout(y.current),M?L(e):D(e)},onTriggerLeave:()=>{window.clearTimeout(y.current),_()},onContentEnter:()=>window.clearTimeout(R.current),onContentLeave:_,onItemSelect:e=>{k(t=>t===e?"":e)},onItemDismiss:()=>k("")},(0,i.createElement)(s.WV.nav,(0,o.Z)({"aria-label":"Main","data-orientation":p,dir:h},w,{ref:b})))}),V=e=>{let{scope:t,isRootMenu:n,rootNavigationMenu:r,dir:o,orientation:a,children:l,value:u,onItemSelect:s,onItemDismiss:c,onTriggerEnter:d,onTriggerLeave:f,onContentEnter:v,onContentLeave:m}=e,[w,g]=(0,i.useState)(null),[b,h]=(0,i.useState)(new Map),[y,R]=(0,i.useState)(null);return(0,i.createElement)(O,{scope:t,isRootMenu:n,rootNavigationMenu:r,value:u,previousValue:function(e){let t=(0,i.useRef)({value:e,previous:e});return(0,i.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(u),baseId:(0,p.M)(),dir:o,orientation:a,viewport:w,onViewportChange:g,indicatorTrack:y,onIndicatorTrackChange:R,onTriggerEnter:(0,E.W)(d),onTriggerLeave:(0,E.W)(f),onContentEnter:(0,E.W)(v),onContentLeave:(0,E.W)(m),onItemSelect:(0,E.W)(s),onItemDismiss:(0,E.W)(c),onViewportContentChange:(0,i.useCallback)((e,t)=>{h(n=>(n.set(e,t),new Map(n)))},[]),onViewportContentRemove:(0,i.useCallback)(e=>{h(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[])},(0,i.createElement)(P.Provider,{scope:t},(0,i.createElement)(W,{scope:t,items:b},l)))},K=(0,i.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,a=I("NavigationMenuList",n),l=(0,i.createElement)(s.WV.ul,(0,o.Z)({"data-orientation":a.orientation},r,{ref:t}));return(0,i.createElement)(s.WV.div,{style:{position:"relative"},ref:a.onIndicatorTrackChange},(0,i.createElement)(P.Slot,{scope:n},a.isRootMenu?(0,i.createElement)(ei,{asChild:!0},l):l))}),[z,Z]=x("NavigationMenuItem"),$=(0,i.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,value:r,...a}=e,l=(0,p.M)(),u=(0,i.useRef)(null),c=(0,i.useRef)(null),d=(0,i.useRef)(null),f=(0,i.useRef)(()=>{}),v=(0,i.useRef)(!1),m=(0,i.useCallback)((e="start")=>{if(u.current){f.current();let t=eu(u.current);t.length&&es("start"===e?t:t.reverse())}},[]),w=(0,i.useCallback)(()=>{if(u.current){let e=eu(u.current);e.length&&(f.current=(e.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})}))}},[]);return(0,i.createElement)(z,{scope:n,value:r||l||"LEGACY_REACT_AUTO_VALUE",triggerRef:c,contentRef:u,focusProxyRef:d,wasEscapeCloseRef:v,onEntryKeyDown:m,onFocusProxyEnter:m,onRootContentClose:w,onContentFocusOutside:w},(0,i.createElement)(s.WV.li,(0,o.Z)({},a,{ref:t})))}),j="NavigationMenuTrigger",H=(0,i.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,disabled:r,...a}=e,l=I(j,e.__scopeNavigationMenu),c=Z(j,e.__scopeNavigationMenu),f=(0,i.useRef)(null),v=(0,d.e)(f,c.triggerRef,t),p=ef(l.baseId,c.value),m=ev(l.baseId,c.value),w=(0,i.useRef)(!1),E=(0,i.useRef)(!1),g=c.value===l.value;return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(P.ItemSlot,{scope:n,value:c.value},(0,i.createElement)(el,{asChild:!0},(0,i.createElement)(s.WV.button,(0,o.Z)({id:p,disabled:r,"data-disabled":r?"":void 0,"data-state":ed(g),"aria-expanded":g,"aria-controls":m},a,{ref:v,onPointerEnter:(0,u.M)(e.onPointerEnter,()=>{E.current=!1,c.wasEscapeCloseRef.current=!1}),onPointerMove:(0,u.M)(e.onPointerMove,ep(()=>{r||E.current||c.wasEscapeCloseRef.current||w.current||(l.onTriggerEnter(c.value),w.current=!0)})),onPointerLeave:(0,u.M)(e.onPointerLeave,ep(()=>{r||(l.onTriggerLeave(),w.current=!1)})),onClick:(0,u.M)(e.onClick,()=>{l.onItemSelect(c.value),E.current=g}),onKeyDown:(0,u.M)(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===l.dir?"ArrowLeft":"ArrowRight"}[l.orientation];g&&e.key===t&&(c.onEntryKeyDown(),e.preventDefault())})})))),g&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)(M,{"aria-hidden":!0,tabIndex:0,ref:c.focusProxyRef,onFocus:e=>{let t=c.contentRef.current,n=e.relatedTarget,r=n===f.current,o=null==t?void 0:t.contains(n);(r||!o)&&c.onFocusProxyEnter(r?"start":"end")}}),l.viewport&&(0,i.createElement)("span",{"aria-owns":m})))}),U="navigationMenu.linkSelect",q=(0,i.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,active:r,onSelect:a,...l}=e;return(0,i.createElement)(el,{asChild:!0},(0,i.createElement)(s.WV.a,(0,o.Z)({"data-active":r?"":void 0,"aria-current":r?"page":void 0},l,{ref:t,onClick:(0,u.M)(e.onClick,e=>{let t=e.target,n=new CustomEvent(U,{bubbles:!0,cancelable:!0});if(t.addEventListener(U,e=>null==a?void 0:a(e),{once:!0}),(0,s.jH)(t,n),!n.defaultPrevented&&!e.metaKey){let e=new CustomEvent(ee,{bubbles:!0,cancelable:!0});(0,s.jH)(t,e)}},{checkForDefaultPrevented:!1})})))}),B="NavigationMenuIndicator",G=(0,i.forwardRef)((e,t)=>{let{forceMount:n,...r}=e,l=I(B,e.__scopeNavigationMenu),u=!!l.value;return l.indicatorTrack?a.createPortal((0,i.createElement)(v.z,{present:n||u},(0,i.createElement)(Y,(0,o.Z)({},r,{ref:t}))),l.indicatorTrack):null}),Y=(0,i.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,a=I(B,n),l=k(n),[u,c]=(0,i.useState)(null),[d,f]=(0,i.useState)(null),v="horizontal"===a.orientation,p=!!a.value;(0,i.useEffect)(()=>{var e;let t=null===(e=l().find(e=>e.value===a.value))||void 0===e?void 0:e.ref.current;t&&c(t)},[l,a.value]);let m=()=>{u&&f({size:v?u.offsetWidth:u.offsetHeight,offset:v?u.offsetLeft:u.offsetTop})};return ec(u,m),ec(a.indicatorTrack,m),d?(0,i.createElement)(s.WV.div,(0,o.Z)({"aria-hidden":!0,"data-state":p?"visible":"hidden","data-orientation":a.orientation},r,{ref:t,style:{position:"absolute",...v?{left:0,width:d.size+"px",transform:`translateX(${d.offset}px)`}:{top:0,height:d.size+"px",transform:`translateY(${d.offset}px)`},...r.style}})):null}),X="NavigationMenuContent",J=(0,i.forwardRef)((e,t)=>{let{forceMount:n,...r}=e,a=I(X,e.__scopeNavigationMenu),l=Z(X,e.__scopeNavigationMenu),s=(0,d.e)(l.contentRef,t),c=l.value===a.value,f={value:l.value,triggerRef:l.triggerRef,focusProxyRef:l.focusProxyRef,wasEscapeCloseRef:l.wasEscapeCloseRef,onContentFocusOutside:l.onContentFocusOutside,onRootContentClose:l.onRootContentClose,...r};return a.viewport?(0,i.createElement)(Q,(0,o.Z)({forceMount:n},f,{ref:s})):(0,i.createElement)(v.z,{present:n||c},(0,i.createElement)(et,(0,o.Z)({"data-state":ed(c)},f,{ref:s,onPointerEnter:(0,u.M)(e.onPointerEnter,a.onContentEnter),onPointerLeave:(0,u.M)(e.onPointerLeave,ep(a.onContentLeave)),style:{pointerEvents:!c&&a.isRootMenu?"none":void 0,...f.style}})))}),Q=(0,i.forwardRef)((e,t)=>{let{onViewportContentChange:n,onViewportContentRemove:r}=I(X,e.__scopeNavigationMenu);return(0,C.b)(()=>{n(e.value,{ref:t,...e})},[e,t,n]),(0,C.b)(()=>()=>r(e.value),[e.value,r]),null}),ee="navigationMenu.rootContentDismiss",et=(0,i.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,value:r,triggerRef:a,focusProxyRef:l,wasEscapeCloseRef:s,onRootContentClose:c,onContentFocusOutside:f,...v}=e,p=I(X,n),m=(0,i.useRef)(null),w=(0,d.e)(m,t),E=ef(p.baseId,r),g=ev(p.baseId,r),b=k(n),y=(0,i.useRef)(null),{onItemDismiss:R}=p;(0,i.useEffect)(()=>{let e=m.current;if(p.isRootMenu&&e){let t=()=>{var t;R(),c(),e.contains(document.activeElement)&&(null===(t=a.current)||void 0===t||t.focus())};return e.addEventListener(ee,t),()=>e.removeEventListener(ee,t)}},[p.isRootMenu,e.value,a,R,c]);let C=(0,i.useMemo)(()=>{let e=b().map(e=>e.value);"rtl"===p.dir&&e.reverse();let t=e.indexOf(p.value),n=e.indexOf(p.previousValue),o=r===p.value,i=n===e.indexOf(r);if(!o&&!i)return y.current;let a=(()=>{if(t!==n){if(o&&-1!==n)return t>n?"from-end":"from-start";if(i&&-1!==t)return t>n?"to-start":"to-end"}return null})();return y.current=a,a},[p.previousValue,p.value,p.dir,b,r]);return(0,i.createElement)(ei,{asChild:!0},(0,i.createElement)(h,(0,o.Z)({id:g,"aria-labelledby":E,"data-motion":C,"data-orientation":p.orientation},v,{ref:w,onDismiss:()=>{var e;let t=new Event(ee,{bubbles:!0,cancelable:!0});null===(e=m.current)||void 0===e||e.dispatchEvent(t)},onFocusOutside:(0,u.M)(e.onFocusOutside,e=>{var t;f();let n=e.target;null!==(t=p.rootNavigationMenu)&&void 0!==t&&t.contains(n)&&e.preventDefault()}),onPointerDownOutside:(0,u.M)(e.onPointerDownOutside,e=>{var t;let n=e.target,r=b().some(e=>{var t;return null===(t=e.ref.current)||void 0===t?void 0:t.contains(n)}),o=p.isRootMenu&&(null===(t=p.viewport)||void 0===t?void 0:t.contains(n));(r||o||!p.isRootMenu)&&e.preventDefault()}),onKeyDown:(0,u.M)(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=eu(e.currentTarget),r=document.activeElement,o=t.findIndex(e=>e===r);if(es(e.shiftKey?t.slice(0,o).reverse():t.slice(o+1,t.length)))e.preventDefault();else{var n;null===(n=l.current)||void 0===n||n.focus()}}}),onEscapeKeyDown:(0,u.M)(e.onEscapeKeyDown,e=>{s.current=!0})})))}),en="NavigationMenuViewport",er=(0,i.forwardRef)((e,t)=>{let{forceMount:n,...r}=e,a=!!I(en,e.__scopeNavigationMenu).value;return(0,i.createElement)(v.z,{present:n||a},(0,i.createElement)(eo,(0,o.Z)({},r,{ref:t})))}),eo=(0,i.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,children:r,...a}=e,l=I(en,n),c=(0,d.e)(t,l.onViewportChange),f=F(X,e.__scopeNavigationMenu),[p,m]=(0,i.useState)(null),[w,E]=(0,i.useState)(null),g=p?(null==p?void 0:p.width)+"px":void 0,b=p?(null==p?void 0:p.height)+"px":void 0,h=!!l.value,y=h?l.value:l.previousValue;return ec(w,()=>{w&&m({width:w.offsetWidth,height:w.offsetHeight})}),(0,i.createElement)(s.WV.div,(0,o.Z)({"data-state":ed(h),"data-orientation":l.orientation},a,{ref:c,style:{pointerEvents:!h&&l.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":g,"--radix-navigation-menu-viewport-height":b,...a.style},onPointerEnter:(0,u.M)(e.onPointerEnter,l.onContentEnter),onPointerLeave:(0,u.M)(e.onPointerLeave,ep(l.onContentLeave))}),Array.from(f.items).map(([e,{ref:t,forceMount:n,...r}])=>{let a=y===e;return(0,i.createElement)(v.z,{key:e,present:n||a},(0,i.createElement)(et,(0,o.Z)({},r,{ref:(0,d.F)(t,e=>{a&&e&&E(e)})})))}))}),ei=(0,i.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,a=I("FocusGroup",n);return(0,i.createElement)(D.Provider,{scope:n},(0,i.createElement)(D.Slot,{scope:n},(0,i.createElement)(s.WV.div,(0,o.Z)({dir:a.dir},r,{ref:t}))))}),ea=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],el=(0,i.forwardRef)((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,a=L(n),l=I("FocusGroupItem",n);return(0,i.createElement)(D.ItemSlot,{scope:n},(0,i.createElement)(s.WV.button,(0,o.Z)({},r,{ref:t,onKeyDown:(0,u.M)(e.onKeyDown,e=>{if(["Home","End",...ea].includes(e.key)){let t=a().map(e=>e.ref.current);if(["rtl"===l.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),ea.includes(e.key)){let n=t.indexOf(e.currentTarget);t=t.slice(n+1)}setTimeout(()=>es(t)),e.preventDefault()}})})))});function eu(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function es(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function ec(e,t){let n=(0,E.W)(t);(0,C.b)(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}function ed(e){return e?"open":"closed"}function ef(e,t){return`${e}-trigger-${t}`}function ev(e,t){return`${e}-content-${t}`}function ep(e){return t=>"mouse"===t.pointerType?e(t):void 0}let em=A,ew=K,eE=$,eg=H,eb=q,eh=G,ey=J,eR=er},7802:function(e,t,n){"use strict";n.d(t,{SpeedInsights:function(){return v}});var r=n(2265),o=n(16463),i=()=>{window.si||(window.si=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.siq=window.siq||[]).push(t)})};function a(){return false}var l="https://va.vercel-scripts.com/v1/speed-insights",u="".concat(l,"/script.js"),s="".concat(l,"/script.debug.js");function c(e){let t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(t.current)e.route&&t.current(e.route);else{let n=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!("undefined"!=typeof window)||null===t.route)return null;i();let n=!!t.dsn,r=t.scriptSrc||(n?u:"/_vercel/speed-insights/script.js");if(document.head.querySelector('script[src*="'.concat(r,'"]')))return null;t.beforeSend&&(null==(e=window.si)||e.call(window,"beforeSend",t.beforeSend));let o=document.createElement("script");return o.src=r,o.defer=!0,o.dataset.sdkn="@vercel/speed-insights"+(t.framework?"/".concat(t.framework):""),o.dataset.sdkv="1.0.10",t.sampleRate&&(o.dataset.sampleRate=t.sampleRate.toString()),t.route&&(o.dataset.route=t.route),t.endpoint&&(o.dataset.endpoint=t.endpoint),t.dsn&&(o.dataset.dsn=t.dsn),o.onerror=()=>{console.log("[Vercel Speed Insights] Failed to load script from ".concat(r,". Please check if any content blockers are enabled and try again."))},document.head.appendChild(o),{setRoute:e=>{o.dataset.route=null!=e?e:void 0}}}({framework:e.framework||"react",...e});n&&(t.current=n.setRoute)}},[e.route]),null}var d=()=>{let e=(0,o.useParams)(),t=(0,o.useSearchParams)(),n=(0,o.usePathname)(),r={...Object.fromEntries(t.entries()),...e||{}};return e?function(e,t){if(!e||!t)return e;let n=e;try{for(let[e,r]of Object.entries(t)){let t=Array.isArray(r),o=t?r.join("/"):r,i=t?"...".concat(e):e,a=new RegExp("/".concat(o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"(?=[/?#]|$)"));a.test(n)&&(n=n.replace(a,"/[".concat(i,"]")))}return n}catch(t){return e}}(n,r):null};function f(e){let t=d();return r.createElement(c,{route:t,...e,framework:"next"})}function v(e){return r.createElement(r.Suspense,{fallback:null},r.createElement(f,{...e}))}}}]);