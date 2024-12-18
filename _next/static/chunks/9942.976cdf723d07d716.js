"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9942],{30837:function(e,t,r){function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return function t(){for(var r=this,n=arguments.length,a=Array(n),o=0;o<n;o++)a[o]=arguments[o];return a.length>=e.length?e.apply(this,a):function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.apply(r,[].concat(a,n))}}}function l(e){return({}).toString.call(e).includes("Object")}function u(e){return"function"==typeof e}r.d(t,{ZP:function(){return W}});var d,f,g=c(function(e,t){throw Error(e[t]||e.default)})({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),p={changes:function(e,t){return l(t)||g("changeType"),Object.keys(t).some(function(t){return!Object.prototype.hasOwnProperty.call(e,t)})&&g("changeField"),t},selector:function(e){u(e)||g("selectorType")},handler:function(e){u(e)||l(e)||g("handlerType"),l(e)&&Object.values(e).some(function(e){return!u(e)})&&g("handlersType")},initial:function(e){e||g("initialIsRequired"),l(e)||g("initialType"),Object.keys(e).length||g("initialContent")}};function h(e,t){return u(t)?t(e.current):t}function b(e,t){return e.current=s(s({},e.current),t),t}function m(e,t,r){return u(t)?t(e.current):Object.keys(r).forEach(function(r){var n;return null===(n=t[r])||void 0===n?void 0:n.call(t,e.current[r])}),r}var v={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},y=(d=function(e,t){throw Error(e[t]||e.default)},function e(){for(var t=this,r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return n.length>=d.length?d.apply(this,n):function(){for(var r=arguments.length,a=Array(r),o=0;o<r;o++)a[o]=arguments[o];return e.apply(t,[].concat(n,a))}})(v),w={config:function(e){return e||y("configIsRequired"),({}).toString.call(e).includes("Object")||y("configType"),e.urls?(console.warn(v.deprecation),{paths:{vs:e.urls.monacoBase}}):e}},O=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},j={type:"cancelation",msg:"operation is manually canceled"},M=function(e){var t=!1,r=new Promise(function(r,n){e.then(function(e){return t?n(j):r(e)}),e.catch(n)});return r.cancel=function(){return t=!0},r},x=function(e){if(Array.isArray(e))return e}(f=({create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};p.initial(e),p.handler(t);var r={current:e},n=c(m)(r,t),a=c(b)(r),o=c(p.changes)(e),i=c(h)(r);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return p.selector(e),e(r.current)},function(e){(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}})(n,a,o,i)(e)}]}}).create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}))||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}}(f,2)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}}(f,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),E=x[0],C=x[1];function P(e){return document.body.appendChild(e)}function J(e){var t,r,n=E(function(e){return{config:e.config,reject:e.reject}}),a=(t="".concat(n.config.paths.vs,"/loader.js"),r=document.createElement("script"),t&&(r.src=t),r);return a.onload=function(){return e()},a.onerror=n.reject,a}function k(){var e=E(function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(t){S(t),e.resolve(t)},function(t){e.reject(t)})}function S(e){E().monaco||C({monaco:e})}var R=new Promise(function(e,t){return C({resolve:e,reject:t})}),V={config:function(e){var t=w.config(e),r=t.monaco,n=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(t,["monaco"]);C(function(e){return{config:function e(t,r){return Object.keys(r).forEach(function(n){r[n]instanceof Object&&t[n]&&Object.assign(r[n],e(t[n],r[n]))}),a(a({},t),r)}(e.config,n),monaco:r}})},init:function(){var e=E(function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}});if(!e.isInitialized){if(C({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),M(R);if(window.monaco&&window.monaco.editor)return S(window.monaco),e.resolve(window.monaco),M(R);O(P,J)(k)}return M(R)},__getMonacoInstance:function(){return E(function(e){return e.monaco})}},z=r(2265),I={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},D={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},N=function({children:e}){return z.createElement("div",{style:D.container},e)},T=(0,z.memo)(function({width:e,height:t,isEditorReady:r,loading:n,_ref:a,className:o,wrapperProps:i}){return z.createElement("section",{style:{...I.wrapper,width:e,height:t},...i},!r&&z.createElement(N,null,n),z.createElement("div",{ref:a,style:{...I.fullWidth,...!r&&I.hide},className:o}))}),A=function(e){(0,z.useEffect)(e,[])},L=function(e,t,r=!0){let n=(0,z.useRef)(!0);(0,z.useEffect)(n.current||!r?()=>{n.current=!1}:e,t)};function B(){}function q(e,t,r,n){return e.editor.getModel(_(e,n))||e.editor.createModel(t,r,n?_(e,n):void 0)}function _(e,t){return e.Uri.parse(t)}(0,z.memo)(function({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:a,originalModelPath:o,modifiedModelPath:i,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:c=!1,theme:l="light",loading:u="Loading...",options:d={},height:f="100%",width:g="100%",className:p,wrapperProps:h={},beforeMount:b=B,onMount:m=B}){let[v,y]=(0,z.useState)(!1),[w,O]=(0,z.useState)(!0),j=(0,z.useRef)(null),M=(0,z.useRef)(null),x=(0,z.useRef)(null),E=(0,z.useRef)(m),C=(0,z.useRef)(b),P=(0,z.useRef)(!1);A(()=>{let e=V.init();return e.then(e=>(M.current=e)&&O(!1)).catch(e=>e?.type!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>{let t;return j.current?(t=j.current?.getModel(),void(s||t?.original?.dispose(),c||t?.modified?.dispose(),j.current?.dispose())):e.cancel()}}),L(()=>{if(j.current&&M.current){let t=j.current.getOriginalEditor(),a=q(M.current,e||"",n||r||"text",o||"");a!==t.getModel()&&t.setModel(a)}},[o],v),L(()=>{if(j.current&&M.current){let e=j.current.getModifiedEditor(),n=q(M.current,t||"",a||r||"text",i||"");n!==e.getModel()&&e.setModel(n)}},[i],v),L(()=>{let e=j.current.getModifiedEditor();e.getOption(M.current.editor.EditorOption.readOnly)?e.setValue(t||""):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),e.pushUndoStop())},[t],v),L(()=>{j.current?.getModel()?.original.setValue(e||"")},[e],v),L(()=>{let{original:e,modified:t}=j.current.getModel();M.current.editor.setModelLanguage(e,n||r||"text"),M.current.editor.setModelLanguage(t,a||r||"text")},[r,n,a],v),L(()=>{M.current?.editor.setTheme(l)},[l],v),L(()=>{j.current?.updateOptions(d)},[d],v);let J=(0,z.useCallback)(()=>{if(!M.current)return;C.current(M.current);let s=q(M.current,e||"",n||r||"text",o||""),c=q(M.current,t||"",a||r||"text",i||"");j.current?.setModel({original:s,modified:c})},[r,t,a,e,n,o,i]),k=(0,z.useCallback)(()=>{!P.current&&x.current&&(j.current=M.current.editor.createDiffEditor(x.current,{automaticLayout:!0,...d}),J(),M.current?.editor.setTheme(l),y(!0),P.current=!0)},[d,l,J]);return(0,z.useEffect)(()=>{v&&E.current(j.current,M.current)},[v]),(0,z.useEffect)(()=>{w||v||k()},[w,v,k]),z.createElement(T,{width:g,height:f,isEditorReady:v,loading:u,_ref:x,className:p,wrapperProps:h})});var F=function(e){let t=(0,z.useRef)();return(0,z.useEffect)(()=>{t.current=e},[e]),t.current},U=new Map,W=(0,z.memo)(function({defaultValue:e,defaultLanguage:t,defaultPath:r,value:n,language:a,path:o,theme:i="light",line:s,loading:c="Loading...",options:l={},overrideServices:u={},saveViewState:d=!0,keepCurrentModel:f=!1,width:g="100%",height:p="100%",className:h,wrapperProps:b={},beforeMount:m=B,onMount:v=B,onChange:y,onValidate:w=B}){let[O,j]=(0,z.useState)(!1),[M,x]=(0,z.useState)(!0),E=(0,z.useRef)(null),C=(0,z.useRef)(null),P=(0,z.useRef)(null),J=(0,z.useRef)(v),k=(0,z.useRef)(m),S=(0,z.useRef)(),R=(0,z.useRef)(n),I=F(o),D=(0,z.useRef)(!1),N=(0,z.useRef)(!1);A(()=>{let e=V.init();return e.then(e=>(E.current=e)&&x(!1)).catch(e=>e?.type!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>C.current?void(S.current?.dispose(),f?d&&U.set(o,C.current.saveViewState()):C.current.getModel()?.dispose(),C.current.dispose()):e.cancel()}),L(()=>{let i=q(E.current,e||n||"",t||a||"",o||r||"");i!==C.current?.getModel()&&(d&&U.set(I,C.current?.saveViewState()),C.current?.setModel(i),d&&C.current?.restoreViewState(U.get(o)))},[o],O),L(()=>{C.current?.updateOptions(l)},[l],O),L(()=>{C.current&&void 0!==n&&(C.current.getOption(E.current.editor.EditorOption.readOnly)?C.current.setValue(n):n===C.current.getValue()||(N.current=!0,C.current.executeEdits("",[{range:C.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),C.current.pushUndoStop(),N.current=!1))},[n],O),L(()=>{let e=C.current?.getModel();e&&a&&E.current?.editor.setModelLanguage(e,a)},[a],O),L(()=>{void 0!==s&&C.current?.revealLine(s)},[s],O),L(()=>{E.current?.editor.setTheme(i)},[i],O);let _=(0,z.useCallback)(()=>{if(!(!P.current||!E.current)&&!D.current){k.current(E.current);let s=o||r,c=q(E.current,n||e||"",t||a||"",s||"");C.current=E.current?.editor.create(P.current,{model:c,automaticLayout:!0,...l},u),d&&C.current.restoreViewState(U.get(s)),E.current.editor.setTheme(i),j(!0),D.current=!0}},[e,t,r,n,a,o,l,u,d,i]);return(0,z.useEffect)(()=>{O&&J.current(C.current,E.current)},[O]),(0,z.useEffect)(()=>{M||O||_()},[M,O,_]),R.current=n,(0,z.useEffect)(()=>{O&&y&&(S.current?.dispose(),S.current=C.current?.onDidChangeModelContent(e=>{N.current||y(C.current.getValue(),e)}))},[O,y]),(0,z.useEffect)(()=>{if(O){let e=E.current.editor.onDidChangeMarkers(e=>{let t=C.current.getModel()?.uri;if(t&&e.find(e=>e.path===t.path)){let e=E.current.editor.getModelMarkers({resource:t});w?.(e)}});return()=>{e?.dispose()}}return()=>{}},[O,w]),z.createElement(T,{width:g,height:p,isEditorReady:O,loading:c,_ref:P,className:h,wrapperProps:b})})},45919:function(e,t,r){r.d(t,{z:function(){return m}});var n=r(77485),a=r(94625),o=r(86820),i=r(26565),s=r(9040),c=r(19556),l=r(97174),u=(0,c.tv)({slots:{base:["relative","max-w-fit","inline-flex","items-center","justify-between","box-border","whitespace-nowrap"],content:"flex-1 text-inherit font-normal",dot:["w-2","h-2","ml-1","rounded-full"],avatar:"flex-shrink-0",closeButton:["z-10","appearance-none","outline-none","select-none","transition-opacity","opacity-70","hover:opacity-100","cursor-pointer","active:opacity-disabled","tap-highlight-transparent"]},variants:{variant:{solid:{},bordered:{base:"border-medium bg-transparent"},light:{base:"bg-transparent"},flat:{},faded:{base:"border-medium"},shadow:{},dot:{base:"border-medium border-default text-foreground bg-transparent"}},color:{default:{dot:"bg-default-400"},primary:{dot:"bg-primary"},secondary:{dot:"bg-secondary"},success:{dot:"bg-success"},warning:{dot:"bg-warning"},danger:{dot:"bg-danger"}},size:{sm:{base:"px-1 h-6 text-small",content:"px-1",closeButton:"text-medium",avatar:"w-4 h-4"},md:{base:"px-1 h-7 text-small",content:"px-2",closeButton:"text-large",avatar:"w-5 h-5"},lg:{base:"px-2 h-8 text-medium",content:"px-2",closeButton:"text-xl",avatar:"w-6 h-6"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isOneChar:{true:{},false:{}},isCloseable:{true:{},false:{}},hasStartContent:{true:{}},hasEndContent:{true:{}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isCloseButtonFocusVisible:{true:{closeButton:[...l.jR,"ring-1","rounded-full"]}}},defaultVariants:{variant:"solid",color:"default",size:"md",radius:"full",isDisabled:!1},compoundVariants:[{variant:"solid",color:"default",class:{base:s.J.solid.default}},{variant:"solid",color:"primary",class:{base:s.J.solid.primary}},{variant:"solid",color:"secondary",class:{base:s.J.solid.secondary}},{variant:"solid",color:"success",class:{base:s.J.solid.success}},{variant:"solid",color:"warning",class:{base:s.J.solid.warning}},{variant:"solid",color:"danger",class:{base:s.J.solid.danger}},{variant:"shadow",color:"default",class:{base:s.J.shadow.default}},{variant:"shadow",color:"primary",class:{base:s.J.shadow.primary}},{variant:"shadow",color:"secondary",class:{base:s.J.shadow.secondary}},{variant:"shadow",color:"success",class:{base:s.J.shadow.success}},{variant:"shadow",color:"warning",class:{base:s.J.shadow.warning}},{variant:"shadow",color:"danger",class:{base:s.J.shadow.danger}},{variant:"bordered",color:"default",class:{base:s.J.bordered.default}},{variant:"bordered",color:"primary",class:{base:s.J.bordered.primary}},{variant:"bordered",color:"secondary",class:{base:s.J.bordered.secondary}},{variant:"bordered",color:"success",class:{base:s.J.bordered.success}},{variant:"bordered",color:"warning",class:{base:s.J.bordered.warning}},{variant:"bordered",color:"danger",class:{base:s.J.bordered.danger}},{variant:"flat",color:"default",class:{base:s.J.flat.default}},{variant:"flat",color:"primary",class:{base:s.J.flat.primary}},{variant:"flat",color:"secondary",class:{base:s.J.flat.secondary}},{variant:"flat",color:"success",class:{base:s.J.flat.success}},{variant:"flat",color:"warning",class:{base:s.J.flat.warning}},{variant:"flat",color:"danger",class:{base:s.J.flat.danger}},{variant:"faded",color:"default",class:{base:s.J.faded.default}},{variant:"faded",color:"primary",class:{base:s.J.faded.primary}},{variant:"faded",color:"secondary",class:{base:s.J.faded.secondary}},{variant:"faded",color:"success",class:{base:s.J.faded.success}},{variant:"faded",color:"warning",class:{base:s.J.faded.warning}},{variant:"faded",color:"danger",class:{base:s.J.faded.danger}},{variant:"light",color:"default",class:{base:s.J.light.default}},{variant:"light",color:"primary",class:{base:s.J.light.primary}},{variant:"light",color:"secondary",class:{base:s.J.light.secondary}},{variant:"light",color:"success",class:{base:s.J.light.success}},{variant:"light",color:"warning",class:{base:s.J.light.warning}},{variant:"light",color:"danger",class:{base:s.J.light.danger}},{isOneChar:!0,size:"sm",class:{base:"w-5 h-5 min-w-unit-5 min-h-5"}},{isOneChar:!0,size:"md",class:{base:"w-6 h-6 min-w-unit-6 min-h-6"}},{isOneChar:!0,size:"lg",class:{base:"w-7 h-7 min-w-unit-7 min-h-7"}},{isOneChar:!0,isCloseable:!1,class:{base:"px-0 justify-center",content:"px-0 flex-none"}},{isOneChar:!0,isCloseable:!0,class:{base:"w-auto"}},{hasStartContent:!0,size:"sm",class:{content:"pl-0.5"}},{hasStartContent:!0,size:["md","lg"],class:{content:"pl-1"}},{hasEndContent:!0,size:"sm",class:{content:"pr-0.5"}},{hasEndContent:!0,size:["md","lg"],class:{content:"pr-1"}}]}),d=r(25312),f=r(59762),g=r(2265),p=r(28305),h=r(57437),b=(0,n.Gp)((e,t)=>{let{Component:r,children:s,slots:c,classNames:l,isDot:b,isCloseable:m,startContent:v,endContent:y,getCloseButtonProps:w,getChipProps:O}=function(e){let[t,r]=(0,n.oe)(e,u.variantKeys),{ref:s,as:c,children:l,avatar:p,startContent:h,endContent:b,onClose:m,classNames:v,className:y,...w}=t,O=(0,d.gy)(s),j=(0,f.W)(null==v?void 0:v.base,y),M=!!m,x="dot"===e.variant,{focusProps:E,isFocusVisible:C}=(0,i.Fx)(),P=(0,g.useMemo)(()=>"string"==typeof l&&(null==l?void 0:l.length)===1,[l]),J=(0,g.useMemo)(()=>!!p||!!h,[p,h]),k=(0,g.useMemo)(()=>!!b||M,[b,M]),S=(0,g.useMemo)(()=>u({...r,hasStartContent:J,hasEndContent:k,isOneChar:P,isCloseable:M,isCloseButtonFocusVisible:C}),[...Object.values(r),C,J,k,P,M]),{pressProps:R}=(0,o.r7)({isDisabled:!!(null==e?void 0:e.isDisabled),onPress:m}),V=e=>(0,g.isValidElement)(e)?(0,g.cloneElement)(e,{className:(0,f.W)("max-h-[80%]",e.props.className)}):null;return{Component:c||"div",children:l,slots:S,classNames:v,isDot:x,isCloseable:M,startContent:((0,g.isValidElement)(p)?(0,g.cloneElement)(p,{className:S.avatar({class:null==v?void 0:v.avatar})}):null)||V(h),endContent:V(b),getCloseButtonProps:()=>({role:"button",tabIndex:0,className:S.closeButton({class:null==v?void 0:v.closeButton}),...(0,a.dG)(R,E)}),getChipProps:()=>({ref:O,className:S.base({class:j}),...w})}}({...e,ref:t}),j=(0,g.useMemo)(()=>b&&!v?(0,h.jsx)("span",{className:c.dot({class:null==l?void 0:l.dot})}):v,[c,v,b]),M=(0,g.useMemo)(()=>m?(0,h.jsx)("span",{...w(),children:y||(0,h.jsx)(p.f,{})}):y,[y,m,w]);return(0,h.jsxs)(r,{...O(),children:[j,(0,h.jsx)("span",{className:c.content({class:null==l?void 0:l.content}),children:s}),M]})});b.displayName="NextUI.Chip";var m=b},77013:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(17865);let a=(0,n.Z)("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]])}}]);