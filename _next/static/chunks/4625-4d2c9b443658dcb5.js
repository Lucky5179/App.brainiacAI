"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4625],{94256:function(e,t,n){n.d(t,{Av:function(){return p},gP:function(){return f}});var r=n(2265);let o={prefix:String(Math.round(1e10*Math.random())),current:0},u=r.createContext(o),l=r.createContext(!1),i=!!("undefined"!=typeof window&&window.document&&window.document.createElement),c=new WeakMap,f="function"==typeof r.useId?function(e){let t=r.useId(),[n]=(0,r.useState)(p()),u=n?"react-aria":`react-aria${o.prefix}`;return e||`${u}-${t}`}:function(e){let t=(0,r.useContext)(u);t!==o||i||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=function(e=!1){let t=(0,r.useContext)(u),n=(0,r.useRef)(null);if(null===n.current&&!e){var o,l;let e=null===(o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===o?void 0:null===(l=o.ReactCurrentOwner)||void 0===l?void 0:l.current;if(e){let n=c.get(e);null==n?c.set(e,{id:t.current,state:e.memoizedState}):e.memoizedState!==n.state&&(t.current=n.id,c.delete(e))}n.current=++t.current}return n.current}(!!e),l=`react-aria${t.prefix}`;return e||`${l}-${n}`};function a(){return!1}function s(){return!0}function d(e){return()=>{}}function p(){return"function"==typeof r.useSyncExternalStore?r.useSyncExternalStore(d,a,s):(0,r.useContext)(l)}},94625:function(e,t,n){n.d(t,{tS:function(){return s},zL:function(){return g},Ao:function(){return y},rP:function(){return x},Dt:function(){return $},ad:function(){return W},gn:function(){return O},V5:function(){return P},a9:function(){return z},Zj:function(){return G},cr:function(){return V},dG:function(){return d},lq:function(){return p},QB:function(){return S},zT:function(){return D},Gt:function(){return B},PK:function(){return M},iW:function(){return i},zX:function(){return j},y$:function(){return U},xi:function(){return C},Me:function(){return f},bE:function(){return T},bt:function(){return l},yU:function(){return k},mp:function(){return a},lE:function(){return _},rf:function(){return R}});var r=n(2265),o=n(94256),u=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r};let l="undefined"!=typeof document?r.useLayoutEffect:()=>{};function i(e){let t=(0,r.useRef)(null);return l(()=>{t.current=e},[e]),(0,r.useCallback)((...e)=>{let n=t.current;return n(...e)},[])}let c=new Map;function f(e){let[t,n]=(0,r.useState)(e),u=(0,r.useRef)(null),i=(0,o.gP)(t),f=(0,r.useCallback)(e=>{u.current=e},[]);return c.set(i,f),l(()=>()=>{c.delete(i)},[i]),(0,r.useEffect)(()=>{let e=u.current;e&&(u.current=null,n(e))}),i}function a(e=[]){let t=f(),[n,o]=function(e){let[t,n]=(0,r.useState)(e),o=(0,r.useRef)(null),u=i(()=>{let e=o.current.next();if(e.done){o.current=null;return}t===e.value?u():n(e.value)});l(()=>{o.current&&u()});let c=i(e=>{o.current=e(t),u()});return[t,c]}(t),u=(0,r.useCallback)(()=>{o(function*(){yield t,yield document.getElementById(t)?t:void 0})},[t,o]);return l(u,[t,u,...e]),n}function s(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}function d(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],o=r[e];"function"==typeof n&&"function"==typeof o&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&90>=e.charCodeAt(2)?t[e]=s(n,o):("className"===e||"UNSAFE_className"===e)&&"string"==typeof n&&"string"==typeof o?t[e]=u(n,o):"id"===e&&n&&o?t.id=function(e,t){if(e===t)return e;let n=c.get(e);if(n)return n(t),t;let r=c.get(t);return r?(r(e),e):t}(n,o):t[e]=void 0!==o?o:n}}return t}function p(...e){return 1===e.length?e[0]:t=>{for(let n of e)"function"==typeof n?n(t):null!=n&&(n.current=t)}}let v=new Set(["id"]),m=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),w=/^(data-.*)$/;function g(e,t={}){let{labelable:n,propNames:r}=t,o={};for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(v.has(t)||n&&m.has(t)||(null==r?void 0:r.has(t))||w.test(t))&&(o[t]=e[t]);return o}function y(e){if(function(){if(null==b){b=!1;try{document.createElement("div").focus({get preventScroll(){return b=!0,!0}})}catch(e){}}return b}())e.focus({preventScroll:!0});else{let t=function(e){for(var t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let b=null,E=new Map,h=new Set;function L(){if("undefined"==typeof window)return;let e=t=>{let n=E.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),E.delete(t.target)),0===E.size)){for(let e of h)e();h.clear()}};document.body.addEventListener("transitionrun",t=>{let n=E.get(t.target);n||(n=new Set,E.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)}),document.body.addEventListener("transitionend",e)}function S(e){requestAnimationFrame(()=>{0===E.size?e():h.add(e)})}function C(){let e=(0,r.useRef)(new Map),t=(0,r.useCallback)((t,n,r,o)=>{let u=(null==o?void 0:o.once)?(...t)=>{e.current.delete(r),r(...t)}:r;e.current.set(r,{type:n,eventTarget:t,fn:u,options:o}),t.addEventListener(n,r,o)},[]),n=(0,r.useCallback)((t,n,r,o)=>{var u;let l=(null===(u=e.current.get(r))||void 0===u?void 0:u.fn)||r;t.removeEventListener(n,l,o),e.current.delete(r)},[]),o=(0,r.useCallback)(()=>{e.current.forEach((e,t)=>{n(e.eventTarget,e.type,t,e.options)})},[n]);return(0,r.useEffect)(()=>o,[o]),{addGlobalListener:t,removeGlobalListener:n,removeAllGlobalListeners:o}}function T(e,t){let{id:n,"aria-label":r,"aria-labelledby":o}=e;return n=f(n),o&&r?o=[...new Set([n,...o.trim().split(/\s+/)])].join(" "):o&&(o=o.trim().split(/\s+/).join(" ")),r||o||!t||(r=t),{id:n,"aria-label":r,"aria-labelledby":o}}function R(e,t){let n=(0,r.useRef)(!0),o=(0,r.useRef)(null);(0,r.useEffect)(()=>(n.current=!0,()=>{n.current=!1}),[]),(0,r.useEffect)(()=>{n.current?n.current=!1:(!o.current||t.some((e,t)=>!Object.is(e,o[t])))&&e(),o.current=t},t)}function k(e){let{ref:t,onResize:n}=e;(0,r.useEffect)(()=>{let e=null==t?void 0:t.current;if(e){if(!(void 0!==window.ResizeObserver))return window.addEventListener("resize",n,!1),()=>{window.removeEventListener("resize",n,!1)};{let t=new window.ResizeObserver(e=>{e.length&&n()});return t.observe(e),()=>{e&&t.unobserve(e)}}}},[n,t])}function _(e,t){l(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref.current=null}},[e,t])}function x(e){for(z(e)&&(e=e.parentElement);e&&!z(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function z(e){let t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}"undefined"!=typeof document&&("loading"!==document.readyState?L():document.addEventListener("DOMContentLoaded",L)),"undefined"!=typeof document&&window.visualViewport;let A=0,I=new Map;function M(e){let[t,n]=(0,r.useState)(void 0);return l(()=>{if(!e)return;let t=I.get(e);if(t)n(t.element.id);else{let r=`react-aria-description-${A++}`;n(r);let o=document.createElement("div");o.id=r,o.style.display="none",o.textContent=e,document.body.appendChild(o),t={refCount:0,element:o},I.set(e,t)}return t.refCount++,()=>{0==--t.refCount&&(t.element.remove(),I.delete(e))}},[e]),{"aria-describedby":e?t:void 0}}function N(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function P(){return N(/^Mac/i)}function O(){return N(/^iPhone/i)||N(/^iPad/i)||P()&&navigator.maxTouchPoints>1}function W(){return P()||O()}function $(){var e,t;return e=/Android/i,"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent))}function j(e,t,n,o){let u=i(n),l=null==n;(0,r.useEffect)(()=>{if(l)return;let n=e.current;return n.addEventListener(t,u,o),()=>{n.removeEventListener(t,u,o)}},[e,t,o,l,u])}function D(e,t){let n=H(e,t,"left"),r=H(e,t,"top"),o=t.offsetWidth,u=t.offsetHeight,l=e.scrollLeft,i=e.scrollTop,{borderTopWidth:c,borderLeftWidth:f}=getComputedStyle(e),a=e.scrollLeft+parseInt(f,10),s=e.scrollTop+parseInt(c,10),d=a+e.clientWidth,p=s+e.clientHeight;n<=l?l=n-parseInt(f,10):n+o>d&&(l+=n+o-d),r<=s?i=r-parseInt(c,10):r+u>p&&(i+=r+u-p),e.scrollLeft=l,e.scrollTop=i}function H(e,t,n){let r="left"===n?"offsetLeft":"offsetTop",o=0;for(;t.offsetParent&&(o+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){o-=e[r];break}t=t.offsetParent}return o}function B(e,t){if(document.contains(e)){let l=document.scrollingElement||document.documentElement;if("hidden"===window.getComputedStyle(l).overflow){let t=x(e);for(;e&&t&&e!==l&&t!==l;)D(t,e),t=x(e=t)}else{var n,r,o,u;let{left:l,top:i}=e.getBoundingClientRect();null==e||null===(n=e.scrollIntoView)||void 0===n||n.call(e,{block:"nearest"});let{left:c,top:f}=e.getBoundingClientRect();(Math.abs(l-c)>1||Math.abs(i-f)>1)&&(null==t||null===(r=t.containingElement)||void 0===r||null===(o=r.scrollIntoView)||void 0===o||o.call(r,{block:"center",inline:"center"}),null===(u=e.scrollIntoView)||void 0===u||u.call(e,{block:"nearest"}))}}}function G(e){return 0===e.mozInputSource&&!!e.isTrusted||($()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}function V(e){return!$()&&0===e.width&&0===e.height||1===e.width&&1===e.height&&0===e.pressure&&0===e.detail&&"mouse"===e.pointerType}function U(e,t,n){let o=(0,r.useRef)(t),u=i(()=>{n&&n(o.current)});(0,r.useEffect)(()=>{var t;let n=null==e?void 0:null===(t=e.current)||void 0===t?void 0:t.form;return null==n||n.addEventListener("reset",u),()=>{null==n||n.removeEventListener("reset",u)}},[e,u])}}}]);