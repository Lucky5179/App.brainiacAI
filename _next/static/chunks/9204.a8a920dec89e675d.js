(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9204],{25566:function(e){var t,n,r,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c=[],u=!1,l=-1;function d(){u&&r&&(u=!1,r.length?c=r.concat(c):l=-1,c.length&&p())}function p(){if(!u){var e=a(d);u=!0;for(var t=c.length;t;){for(r=c,c=[];++l<t;)r&&r[l].run();l=-1,t=c.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||u||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}},74905:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.isNative=void 0;var n="undefined"!=typeof window&&(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition||window.oSpeechRecognition);t.isNative=function(e){return e===n},t.default=n},62757:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=n(86182))&&r.__esModule?r:{default:r},s=n(14733),o=n(74905);function a(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(e){n(e);return}a.done?t(c):Promise.resolve(c).then(r,i)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var s=e.apply(t,n);function o(e){a(s,r,i,o,c,"next",e)}function c(e){a(s,r,i,o,c,"throw",e)}o(void 0)})}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){var e,t,n,r,a,l;function d(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,d),this.recognition=null,this.pauseAfterDisconnect=!1,this.interimTranscript="",this.finalTranscript="",this.listening=!1,this.isMicrophoneAvailable=!0,this.subscribers={},this.onStopListening=function(){},this.previousResultWasFinalOnly=!1,this.resetTranscript=this.resetTranscript.bind(this),this.startListening=this.startListening.bind(this),this.stopListening=this.stopListening.bind(this),this.abortListening=this.abortListening.bind(this),this.setSpeechRecognition=this.setSpeechRecognition.bind(this),this.disableRecognition=this.disableRecognition.bind(this),this.setSpeechRecognition(e),(0,i.default)()&&(this.updateFinalTranscript=(0,s.debounce)(this.updateFinalTranscript,250,!0))}return a=[{key:"setSpeechRecognition",value:function(e){var t=!!e&&((0,o.isNative)(e)||(0,s.browserSupportsPolyfills)());t&&(this.disableRecognition(),this.recognition=new e,this.recognition.continuous=!1,this.recognition.interimResults=!0,this.recognition.onresult=this.updateTranscript.bind(this),this.recognition.onend=this.onRecognitionDisconnect.bind(this),this.recognition.onerror=this.onError.bind(this)),this.emitBrowserSupportsSpeechRecognitionChange(t)}},{key:"subscribe",value:function(e,t){this.subscribers[e]=t}},{key:"unsubscribe",value:function(e){delete this.subscribers[e]}},{key:"emitListeningChange",value:function(e){var t=this;this.listening=e,Object.keys(this.subscribers).forEach(function(n){(0,t.subscribers[n].onListeningChange)(e)})}},{key:"emitMicrophoneAvailabilityChange",value:function(e){var t=this;this.isMicrophoneAvailable=e,Object.keys(this.subscribers).forEach(function(n){(0,t.subscribers[n].onMicrophoneAvailabilityChange)(e)})}},{key:"emitTranscriptChange",value:function(e,t){var n=this;Object.keys(this.subscribers).forEach(function(r){(0,n.subscribers[r].onTranscriptChange)(e,t)})}},{key:"emitClearTranscript",value:function(){var e=this;Object.keys(this.subscribers).forEach(function(t){(0,e.subscribers[t].onClearTranscript)()})}},{key:"emitBrowserSupportsSpeechRecognitionChange",value:function(e){var t=this;Object.keys(this.subscribers).forEach(function(n){var r=t.subscribers[n],i=r.onBrowserSupportsSpeechRecognitionChange,s=r.onBrowserSupportsContinuousListeningChange;i(e),s(e)})}},{key:"disconnect",value:function(e){if(this.recognition&&this.listening)switch(e){case"ABORT":this.pauseAfterDisconnect=!0,this.abort();break;case"RESET":this.pauseAfterDisconnect=!1,this.abort();break;default:this.pauseAfterDisconnect=!0,this.stop()}}},{key:"disableRecognition",value:function(){this.recognition&&(this.recognition.onresult=function(){},this.recognition.onend=function(){},this.recognition.onerror=function(){},this.listening&&this.stopListening())}},{key:"onError",value:function(e){e&&e.error&&"not-allowed"===e.error&&(this.emitMicrophoneAvailabilityChange(!1),this.disableRecognition())}},{key:"onRecognitionDisconnect",value:function(){this.onStopListening(),this.listening=!1,this.pauseAfterDisconnect?this.emitListeningChange(!1):this.recognition&&(this.recognition.continuous?this.startListening({continuous:this.recognition.continuous}):this.emitListeningChange(!1)),this.pauseAfterDisconnect=!1}},{key:"updateTranscript",value:function(e){var t=e.results,n=e.resultIndex,r=void 0===n?t.length-1:n;this.interimTranscript="",this.finalTranscript="";for(var o=r;o<t.length;++o)t[o].isFinal&&(!(0,i.default)()||t[o][0].confidence>0)?this.updateFinalTranscript(t[o][0].transcript):this.interimTranscript=(0,s.concatTranscripts)(this.interimTranscript,t[o][0].transcript);var a=!1;""===this.interimTranscript&&""!==this.finalTranscript?(this.previousResultWasFinalOnly&&(a=!0),this.previousResultWasFinalOnly=!0):this.previousResultWasFinalOnly=!1,a||this.emitTranscriptChange(this.interimTranscript,this.finalTranscript)}},{key:"updateFinalTranscript",value:function(e){this.finalTranscript=(0,s.concatTranscripts)(this.finalTranscript,e)}},{key:"resetTranscript",value:function(){this.disconnect("RESET")}},{key:"startListening",value:(e=c(regeneratorRuntime.mark(function e(){var t,n,r,i,s,o,a=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=void 0!==(n=(t=a.length>0&&void 0!==a[0]?a[0]:{}).continuous)&&n,i=t.language,this.recognition){e.next=3;break}return e.abrupt("return");case 3:if(s=r!==this.recognition.continuous,o=i&&i!==this.recognition.lang,!(s||o)){e.next=11;break}if(!this.listening){e.next=9;break}return e.next=9,this.stopListening();case 9:this.recognition.continuous=s?r:this.recognition.continuous,this.recognition.lang=o?i:this.recognition.lang;case 11:if(this.listening){e.next=22;break}return this.recognition.continuous||(this.resetTranscript(),this.emitClearTranscript()),e.prev=13,e.next=16,this.start();case 16:this.emitListeningChange(!0),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(13),e.t0 instanceof DOMException||this.emitMicrophoneAvailabilityChange(!1);case 22:case"end":return e.stop()}},e,this,[[13,19]])})),function(){return e.apply(this,arguments)})},{key:"abortListening",value:(t=c(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.disconnect("ABORT"),this.emitListeningChange(!1),e.next=4,new Promise(function(e){t.onStopListening=e});case 4:case"end":return e.stop()}},e,this)})),function(){return t.apply(this,arguments)})},{key:"stopListening",value:(n=c(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.disconnect("STOP"),this.emitListeningChange(!1),e.next=4,new Promise(function(e){t.onStopListening=e});case 4:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})},{key:"getRecognition",value:function(){return this.recognition}},{key:"start",value:(r=c(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.recognition&&!this.listening)){e.next=4;break}return e.next=3,this.recognition.start();case 3:this.listening=!0;case 4:case"end":return e.stop()}},e,this)})),function(){return r.apply(this,arguments)})},{key:"stop",value:function(){this.recognition&&this.listening&&(this.recognition.stop(),this.listening=!1)}},{key:"abort",value:function(){this.recognition&&this.listening&&(this.recognition.abort(),this.listening=!1)}}],u(d.prototype,a),l&&u(d,l),d}();t.default=l},24042:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useSpeechRecognition=void 0;var r,i,s,o,a=n(2265),c=n(14733),u=n(2206),l=n(4579),d=h(n(62757)),p=h(n(86182)),f=h(n(74905));function h(e){return e&&e.__esModule?e:{default:e}}function g(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(e){n(e);return}a.done?t(c):Promise.resolve(c).then(r,i)}function v(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var s=e.apply(t,n);function o(e){g(s,r,i,o,a,"next",e)}function a(e){g(s,r,i,o,a,"throw",e)}o(void 0)})}}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}}(e,t)||y(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var T=!!f.default,R=T&&!(0,p.default)();t.useSpeechRecognition=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.transcribing,n=void 0===t||t,r=e.clearTranscriptOnListen,i=void 0===r||r,s=e.commands,o=void 0===s?[]:s,d=m((0,a.useState)(x.getRecognitionManager()),1)[0],p=m((0,a.useState)(T),2),f=p[0],h=p[1],g=m((0,a.useState)(R),2),v=g[0],S=g[1],C=m((0,a.useReducer)(l.transcriptReducer,{interimTranscript:d.interimTranscript,finalTranscript:""}),2),k=C[0],P=k.interimTranscript,M=k.finalTranscript,E=C[1],A=m((0,a.useState)(d.listening),2),O=A[0],j=A[1],L=m((0,a.useState)(d.isMicrophoneAvailable),2),J=L[0],N=L[1],_=(0,a.useRef)(o);_.current=o;var D=function(){E((0,u.clearTranscript)())},z=(0,a.useCallback)(function(){d.resetTranscript(),D()},[d]),I=function(e,t,n){var r=("object"===b(e)?e.toString():e).replace(/[&/\\#,+()!$~%.'":*?<>{}]/g,"").replace(/  +/g," ").trim(),i=(0,c.compareTwoStringsUsingDiceCoefficient)(r,t);return i>=n?{command:e,commandWithoutSpecials:r,howSimilar:i,isFuzzyMatch:!0}:null},B=function(e,t){var n=(0,c.commandToRegExp)(e).exec(t);return n?{command:e,parameters:n.slice(1)}:null},F=(0,a.useCallback)(function(e,t){_.current.forEach(function(n){var r=n.command,i=n.callback,s=n.matchInterim,o=n.isFuzzyMatch,a=void 0!==o&&o,c=n.fuzzyMatchingThreshold,u=void 0===c?.8:c,l=n.bestMatchOnly,d=!t&&void 0!==s&&s?e.trim():t.trim(),p=(Array.isArray(r)?r:[r]).map(function(e){return a?I(e,d,u):B(e,d)}).filter(function(e){return e});if(a&&void 0!==l&&l&&p.length>=2){p.sort(function(e,t){return t.howSimilar-e.howSimilar});var f=p[0],h=f.command;i(f.commandWithoutSpecials,d,f.howSimilar,{command:h,resetTranscript:z})}else p.forEach(function(e){if(e.isFuzzyMatch){var t=e.command;i(e.commandWithoutSpecials,d,e.howSimilar,{command:t,resetTranscript:z})}else{var n=e.command,r=e.parameters;i.apply(void 0,((function(e){if(Array.isArray(e))return w(e)})(r)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(r)||y(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).concat([{command:n,resetTranscript:z}]))}})})},[z]),Z=(0,a.useCallback)(function(e,t){n&&E((0,u.appendTranscript)(e,t)),F(e,t)},[F,n]),W=(0,a.useCallback)(function(){i&&D()},[i]);return(0,a.useEffect)(function(){var e=x.counter;return x.counter+=1,d.subscribe(e,{onListeningChange:j,onMicrophoneAvailabilityChange:N,onTranscriptChange:Z,onClearTranscript:W,onBrowserSupportsSpeechRecognitionChange:h,onBrowserSupportsContinuousListeningChange:S}),function(){d.unsubscribe(e)}},[n,i,d,Z,W]),{transcript:(0,c.concatTranscripts)(M,P),interimTranscript:P,finalTranscript:M,listening:O,isMicrophoneAvailable:J,resetTranscript:z,browserSupportsSpeechRecognition:f,browserSupportsContinuousListening:v}};var x={counter:0,applyPolyfill:function(e){o?o.setSpeechRecognition(e):o=new d.default(e);var t=!!e&&(0,c.browserSupportsPolyfills)();T=t,R=t},removePolyfill:function(){o?o.setSpeechRecognition(f.default):o=new d.default(f.default),R=(T=!!f.default)&&!(0,p.default)()},getRecognitionManager:function(){return o||(o=new d.default(f.default)),o},getRecognition:function(){return x.getRecognitionManager().getRecognition()},startListening:(r=v(regeneratorRuntime.mark(function e(){var t,n,r,i,s=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(t=s.length>0&&void 0!==s[0]?s[0]:{}).continuous,r=t.language,i=x.getRecognitionManager(),e.next=4,i.startListening({continuous:n,language:r});case 4:case"end":return e.stop()}},e)})),function(){return r.apply(this,arguments)}),stopListening:(i=v(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.getRecognitionManager(),e.next=3,t.stopListening();case 3:case"end":return e.stop()}},e)})),function(){return i.apply(this,arguments)}),abortListening:(s=v(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.getRecognitionManager(),e.next=3,t.abortListening();case 3:case"end":return e.stop()}},e)})),function(){return s.apply(this,arguments)}),browserSupportsSpeechRecognition:function(){return T},browserSupportsContinuousListening:function(){return R}};t.default=x},2206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.appendTranscript=t.clearTranscript=void 0;var r=n(25668);t.clearTranscript=function(){return{type:r.CLEAR_TRANSCRIPT}},t.appendTranscript=function(e,t){return{type:r.APPEND_TRANSCRIPT,payload:{interimTranscript:e,finalTranscript:t}}}},25668:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.APPEND_TRANSCRIPT=t.CLEAR_TRANSCRIPT=void 0,t.CLEAR_TRANSCRIPT="CLEAR_TRANSCRIPT",t.APPEND_TRANSCRIPT="APPEND_TRANSCRIPT"},57697:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"x6",{enumerable:!0,get:function(){return i.useSpeechRecognition}}),t.ZP=void 0;var i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}(n(24042));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}var o=i.default;t.ZP=o},86182:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){return/(android)/i.test("undefined"!=typeof navigator?navigator.userAgent:"")}},4579:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.transcriptReducer=void 0;var r=n(25668),i=n(14733);t.transcriptReducer=function(e,t){switch(t.type){case r.CLEAR_TRANSCRIPT:return{interimTranscript:"",finalTranscript:""};case r.APPEND_TRANSCRIPT:return{interimTranscript:t.payload.interimTranscript,finalTranscript:(0,i.concatTranscripts)(e.finalTranscript,t.payload.finalTranscript)};default:throw Error()}}},14733:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.browserSupportsPolyfills=t.compareTwoStringsUsingDiceCoefficient=t.commandToRegExp=t.concatTranscripts=t.debounce=void 0,t.debounce=function(e,t,n){var r;return function(){var i=this,s=arguments,o=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(i,s)},t),o&&e.apply(i,s)}},t.concatTranscripts=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map(function(e){return e.trim()}).join(" ").trim()};var n=/\s*\((.*?)\)\s*/g,r=/(\(\?:[^)]+\))\?/g,i=/(\(\?)?:\w+/g,s=/\*/g,o=/[-{}[\]+?.,\\^$|#]/g;t.commandToRegExp=function(e){return e instanceof RegExp?RegExp(e.source,"i"):RegExp("^"+(e=e.replace(o,"\\$&").replace(n,"(?:$1)?").replace(i,function(e,t){return t?e:"([^\\s]+)"}).replace(s,"(.*?)").replace(r,"\\s*$1?\\s*"))+"$","i")},t.compareTwoStringsUsingDiceCoefficient=function(e,t){if(e=e.replace(/\s+/g,"").toLowerCase(),t=t.replace(/\s+/g,"").toLowerCase(),!e.length&&!t.length)return 1;if(!e.length||!t.length)return 0;if(e===t)return 1;if(1===e.length&&1===t.length||e.length<2||t.length<2)return 0;for(var n=new Map,r=0;r<e.length-1;r++){var i=e.substring(r,r+2),s=n.has(i)?n.get(i)+1:1;n.set(i,s)}for(var o=0,a=0;a<t.length-1;a++){var c=t.substring(a,a+2),u=n.has(c)?n.get(c):0;u>0&&(n.set(c,u-1),o++)}return 2*o/(e.length+t.length-2)},t.browserSupportsPolyfills=function(){return"undefined"!=typeof window&&void 0!==window.navigator&&void 0!==window.navigator.mediaDevices&&void 0!==window.navigator.mediaDevices.getUserMedia&&(void 0!==window.AudioContext||void 0!==window.webkitAudioContext)}},45919:function(e,t,n){"use strict";n.d(t,{z:function(){return b}});var r=n(77485),i=n(94625),s=n(86820),o=n(26565),a=n(9040),c=n(19556),u=n(97174),l=(0,c.tv)({slots:{base:["relative","max-w-fit","inline-flex","items-center","justify-between","box-border","whitespace-nowrap"],content:"flex-1 text-inherit font-normal",dot:["w-2","h-2","ml-1","rounded-full"],avatar:"flex-shrink-0",closeButton:["z-10","appearance-none","outline-none","select-none","transition-opacity","opacity-70","hover:opacity-100","cursor-pointer","active:opacity-disabled","tap-highlight-transparent"]},variants:{variant:{solid:{},bordered:{base:"border-medium bg-transparent"},light:{base:"bg-transparent"},flat:{},faded:{base:"border-medium"},shadow:{},dot:{base:"border-medium border-default text-foreground bg-transparent"}},color:{default:{dot:"bg-default-400"},primary:{dot:"bg-primary"},secondary:{dot:"bg-secondary"},success:{dot:"bg-success"},warning:{dot:"bg-warning"},danger:{dot:"bg-danger"}},size:{sm:{base:"px-1 h-6 text-small",content:"px-1",closeButton:"text-medium",avatar:"w-4 h-4"},md:{base:"px-1 h-7 text-small",content:"px-2",closeButton:"text-large",avatar:"w-5 h-5"},lg:{base:"px-2 h-8 text-medium",content:"px-2",closeButton:"text-xl",avatar:"w-6 h-6"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isOneChar:{true:{},false:{}},isCloseable:{true:{},false:{}},hasStartContent:{true:{}},hasEndContent:{true:{}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isCloseButtonFocusVisible:{true:{closeButton:[...u.jR,"ring-1","rounded-full"]}}},defaultVariants:{variant:"solid",color:"default",size:"md",radius:"full",isDisabled:!1},compoundVariants:[{variant:"solid",color:"default",class:{base:a.J.solid.default}},{variant:"solid",color:"primary",class:{base:a.J.solid.primary}},{variant:"solid",color:"secondary",class:{base:a.J.solid.secondary}},{variant:"solid",color:"success",class:{base:a.J.solid.success}},{variant:"solid",color:"warning",class:{base:a.J.solid.warning}},{variant:"solid",color:"danger",class:{base:a.J.solid.danger}},{variant:"shadow",color:"default",class:{base:a.J.shadow.default}},{variant:"shadow",color:"primary",class:{base:a.J.shadow.primary}},{variant:"shadow",color:"secondary",class:{base:a.J.shadow.secondary}},{variant:"shadow",color:"success",class:{base:a.J.shadow.success}},{variant:"shadow",color:"warning",class:{base:a.J.shadow.warning}},{variant:"shadow",color:"danger",class:{base:a.J.shadow.danger}},{variant:"bordered",color:"default",class:{base:a.J.bordered.default}},{variant:"bordered",color:"primary",class:{base:a.J.bordered.primary}},{variant:"bordered",color:"secondary",class:{base:a.J.bordered.secondary}},{variant:"bordered",color:"success",class:{base:a.J.bordered.success}},{variant:"bordered",color:"warning",class:{base:a.J.bordered.warning}},{variant:"bordered",color:"danger",class:{base:a.J.bordered.danger}},{variant:"flat",color:"default",class:{base:a.J.flat.default}},{variant:"flat",color:"primary",class:{base:a.J.flat.primary}},{variant:"flat",color:"secondary",class:{base:a.J.flat.secondary}},{variant:"flat",color:"success",class:{base:a.J.flat.success}},{variant:"flat",color:"warning",class:{base:a.J.flat.warning}},{variant:"flat",color:"danger",class:{base:a.J.flat.danger}},{variant:"faded",color:"default",class:{base:a.J.faded.default}},{variant:"faded",color:"primary",class:{base:a.J.faded.primary}},{variant:"faded",color:"secondary",class:{base:a.J.faded.secondary}},{variant:"faded",color:"success",class:{base:a.J.faded.success}},{variant:"faded",color:"warning",class:{base:a.J.faded.warning}},{variant:"faded",color:"danger",class:{base:a.J.faded.danger}},{variant:"light",color:"default",class:{base:a.J.light.default}},{variant:"light",color:"primary",class:{base:a.J.light.primary}},{variant:"light",color:"secondary",class:{base:a.J.light.secondary}},{variant:"light",color:"success",class:{base:a.J.light.success}},{variant:"light",color:"warning",class:{base:a.J.light.warning}},{variant:"light",color:"danger",class:{base:a.J.light.danger}},{isOneChar:!0,size:"sm",class:{base:"w-5 h-5 min-w-unit-5 min-h-5"}},{isOneChar:!0,size:"md",class:{base:"w-6 h-6 min-w-unit-6 min-h-6"}},{isOneChar:!0,size:"lg",class:{base:"w-7 h-7 min-w-unit-7 min-h-7"}},{isOneChar:!0,isCloseable:!1,class:{base:"px-0 justify-center",content:"px-0 flex-none"}},{isOneChar:!0,isCloseable:!0,class:{base:"w-auto"}},{hasStartContent:!0,size:"sm",class:{content:"pl-0.5"}},{hasStartContent:!0,size:["md","lg"],class:{content:"pl-1"}},{hasEndContent:!0,size:"sm",class:{content:"pr-0.5"}},{hasEndContent:!0,size:["md","lg"],class:{content:"pr-1"}}]}),d=n(25312),p=n(59762),f=n(2265),h=n(28305),g=n(57437),v=(0,r.Gp)((e,t)=>{let{Component:n,children:a,slots:c,classNames:u,isDot:v,isCloseable:b,startContent:m,endContent:y,getCloseButtonProps:w,getChipProps:T}=function(e){let[t,n]=(0,r.oe)(e,l.variantKeys),{ref:a,as:c,children:u,avatar:h,startContent:g,endContent:v,onClose:b,classNames:m,className:y,...w}=t,T=(0,d.gy)(a),R=(0,p.W)(null==m?void 0:m.base,y),x=!!b,S="dot"===e.variant,{focusProps:C,isFocusVisible:k}=(0,o.Fx)(),P=(0,f.useMemo)(()=>"string"==typeof u&&(null==u?void 0:u.length)===1,[u]),M=(0,f.useMemo)(()=>!!h||!!g,[h,g]),E=(0,f.useMemo)(()=>!!v||x,[v,x]),A=(0,f.useMemo)(()=>l({...n,hasStartContent:M,hasEndContent:E,isOneChar:P,isCloseable:x,isCloseButtonFocusVisible:k}),[...Object.values(n),k,M,E,P,x]),{pressProps:O}=(0,s.r7)({isDisabled:!!(null==e?void 0:e.isDisabled),onPress:b}),j=e=>(0,f.isValidElement)(e)?(0,f.cloneElement)(e,{className:(0,p.W)("max-h-[80%]",e.props.className)}):null;return{Component:c||"div",children:u,slots:A,classNames:m,isDot:S,isCloseable:x,startContent:((0,f.isValidElement)(h)?(0,f.cloneElement)(h,{className:A.avatar({class:null==m?void 0:m.avatar})}):null)||j(g),endContent:j(v),getCloseButtonProps:()=>({role:"button",tabIndex:0,className:A.closeButton({class:null==m?void 0:m.closeButton}),...(0,i.dG)(O,C)}),getChipProps:()=>({ref:T,className:A.base({class:R}),...w})}}({...e,ref:t}),R=(0,f.useMemo)(()=>v&&!m?(0,g.jsx)("span",{className:c.dot({class:null==u?void 0:u.dot})}):m,[c,m,v]),x=(0,f.useMemo)(()=>b?(0,g.jsx)("span",{...w(),children:y||(0,g.jsx)(h.f,{})}):y,[y,b,w]);return(0,g.jsxs)(n,{...T(),children:[R,(0,g.jsx)("span",{className:c.content({class:null==u?void 0:u.content}),children:a}),x]})});v.displayName="NextUI.Chip";var b=v},90302:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(25566),i={};function s(e,t,...n){var o;let a=t?` [${t}]`:" ",c=`[Next UI]${a}: ${e}`;if("undefined"!=typeof console&&!i[c]&&(i[c]=!0,(null==(o=null==r?void 0:r.env)?void 0:o.NODE_ENV)!=="production"))return console.warn(c,n)}},23329:function(e,t,n){"use strict";n.d(t,{e:function(){return P}});var r=n(2265),i=n(85705);let s={},o=0,a=!1,c=null,u=null;var l=n(94625),d=n(86820),p=n(26565),f=n(46125),h=n(77485),g=n(74644),v=n(59762),b=n(48794),m=n(2063),y=n(25312),w=n(93125),T=n(17648),R=n(91393),x=n(54923),S=n(90302),C=n(57437),k=(0,h.Gp)((e,t)=>{let n;let{Component:k,children:P,content:M,isOpen:E,portalContainer:A,placement:O,disableAnimation:j,motionProps:L,showArrow:J,getTriggerProps:N,getTooltipProps:_,getArrowProps:D}=function(e){let[t,n]=(0,h.oe)(e,g.v.variantKeys),{ref:T,as:R,isOpen:x,content:S,children:C,defaultOpen:k,onOpenChange:P,isDisabled:M,trigger:E,shouldFlip:A=!0,containerPadding:O=12,placement:j="top",delay:L=0,closeDelay:J=500,showArrow:N=!1,offset:_=7,crossOffset:D=0,isDismissable:z,shouldCloseOnBlur:I=!0,portalContainer:B,isKeyboardDismissDisabled:F=!1,shouldCloseOnInteractOutside:Z,className:W,onClose:V,motionProps:$,classNames:G,...U}=t,H=function(e={}){let{delay:t=1500,closeDelay:n=500}=e,{isOpen:l,open:d,close:p}=(0,i.d)(e),f=(0,r.useMemo)(()=>`${++o}`,[]),h=(0,r.useRef)(),g=()=>{s[f]=m},v=()=>{for(let e in s)e!==f&&(s[e](!0),delete s[e])},b=()=>{clearTimeout(h.current),h.current=null,v(),g(),a=!0,d(),c&&(clearTimeout(c),c=null),u&&(clearTimeout(u),u=null)},m=e=>{e||n<=0?(clearTimeout(h.current),h.current=null,p()):h.current||(h.current=setTimeout(()=>{h.current=null,p()},n)),c&&(clearTimeout(c),c=null),a&&(u&&clearTimeout(u),u=setTimeout(()=>{delete s[f],u=null,a=!1},Math.max(500,n)))},y=()=>{v(),g(),l||c||a?l||b():c=setTimeout(()=>{c=null,a=!0,b()},t)};return(0,r.useEffect)(()=>()=>{clearTimeout(h.current),s[f]&&delete s[f]},[f]),{isOpen:l,open:e=>{e||!(t>0)||h.current?b():y()},close:m}}({delay:L,closeDelay:J,isDisabled:M,defaultOpen:k,isOpen:x,onOpenChange:e=>{null==P||P(e),e||null==V||V()}}),K=(0,r.useRef)(null),X=(0,r.useRef)(null),q=(0,r.useId)(),Y=H.isOpen&&!M;(0,r.useImperativeHandle)(T,()=>(0,y.fg)(X));let{triggerProps:Q,tooltipProps:ee}=function(e,t,n){let{isDisabled:i,trigger:s}=e,o=(0,l.Me)(),a=(0,r.useRef)(!1),c=(0,r.useRef)(!1),u=()=>{(a.current||c.current)&&t.open(c.current)},f=e=>{a.current||c.current||t.close(e)};(0,r.useEffect)(()=>{let e=e=>{n&&n.current&&"Escape"===e.key&&(e.stopPropagation(),t.close(!0))};if(t.isOpen)return document.addEventListener("keydown",e,!0),()=>{document.removeEventListener("keydown",e,!0)}},[n,t]);let{hoverProps:h}=(0,d.XI)({isDisabled:i,onHoverStart:()=>{"focus"!==s&&("pointer"===(0,d.Jz)()?a.current=!0:a.current=!1,u())},onHoverEnd:()=>{"focus"!==s&&(c.current=!1,a.current=!1,f())}}),{pressProps:g}=(0,d.r7)({onPressStart:()=>{c.current=!1,a.current=!1,f(!0)}}),{focusableProps:v}=(0,p.kc)({isDisabled:i,onFocus:()=>{(0,d.E)()&&(c.current=!0,u())},onBlur:()=>{c.current=!1,a.current=!1,f(!0)}},n);return{triggerProps:{"aria-describedby":t.isOpen?o:void 0,...(0,l.dG)(v,h,g)},tooltipProps:{id:o}}}({isDisabled:M,trigger:E},H,K),{tooltipProps:et}=function(e,t){let n=(0,l.zL)(e,{labelable:!0}),{hoverProps:r}=(0,d.XI)({onHoverStart:()=>null==t?void 0:t.open(!0),onHoverEnd:()=>null==t?void 0:t.close()});return{tooltipProps:(0,l.dG)(n,r,{role:"tooltip"})}}({isOpen:Y,...(0,l.dG)(t,ee)},H),{overlayProps:en,arrowProps:er,placement:ei}=(0,f.tN)({isOpen:Y,targetRef:K,placement:(0,w.Yx)(j),overlayRef:X,offset:N?_+3:_,crossOffset:D,shouldFlip:A,containerPadding:O}),{overlayProps:es}=(0,f.Ir)({isOpen:Y,onClose:H.close,isDismissable:z,shouldCloseOnBlur:I,isKeyboardDismissDisabled:F,shouldCloseOnInteractOutside:Z},X),eo=(0,r.useMemo)(()=>{var t,r,i;return(0,g.v)({...n,radius:null!=(t=null==e?void 0:e.radius)?t:"md",size:null!=(r=null==e?void 0:e.size)?r:"md",shadow:null!=(i=null==e?void 0:e.shadow)?i:"sm"})},[...Object.values(n),null==e?void 0:e.radius,null==e?void 0:e.size,null==e?void 0:e.shadow]),ea=(0,v.W)(null==G?void 0:G.base,W),ec=(0,r.useCallback)((e={},t=null)=>({...(0,l.dG)(Q,e),ref:(0,m.l)(t,K),"aria-describedby":Y?q:void 0}),[Q,Y,q,H]),eu=(0,r.useCallback)(()=>({ref:X,"data-open":(0,b.PB)(Y),"data-disabled":(0,b.PB)(M),"data-placement":(0,w.sK)(ei,j),className:eo.base({class:ea}),...(0,l.dG)(et,es,U),style:(0,l.dG)(en.style,U.style,t.style),id:q}),[ea,es,U,X,en,eo,q,et]),el=(0,r.useCallback)(()=>({className:eo.arrow({class:null==G?void 0:G.arrow}),"data-placement":(0,w.sK)(ei,j),...er}),[er,ei,j,eo,G]);return{Component:R||"div",content:S,children:C,isOpen:Y,triggerRef:K,showArrow:N,portalContainer:B,placement:j,disableAnimation:null==e?void 0:e.disableAnimation,isDisabled:M,motionProps:$,getTriggerProps:ec,getTooltipProps:eu,getArrowProps:el}}({...e,ref:t}),{className:z,...I}=_();try{let e=r.Children.only(P);n=(0,r.cloneElement)(e,N(e.props,e.ref))}catch(e){n=(0,C.jsx)("span",{}),(0,S.Z)("Tooltip must have only one child node. Please, check your code.")}let B=(0,r.useMemo)(()=>J?(0,C.jsx)("span",{...D()}):null,[J,D]),F=(0,r.useMemo)(()=>(0,C.jsx)("div",{...I,children:(0,C.jsxs)(T.E.div,{animate:"enter",exit:"exit",initial:"exit",style:{...(0,w.VS)(O)},variants:x.y7.scaleSpring,...L,children:[(0,C.jsx)(k,{className:z,children:M}),B]})}),[I,z,O,L,k,M,B]);return(0,C.jsxs)(C.Fragment,{children:[n,j&&E?(0,C.jsx)(f.Xj,{portalContainer:A,children:(0,C.jsxs)("div",{...I,children:[(0,C.jsx)(k,{className:z,children:M}),B]})}):(0,C.jsx)(R.M,{children:E?(0,C.jsx)(f.Xj,{portalContainer:A,children:F}):null})]})});k.displayName="NextUI.Tooltip";var P=k},52469:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(17865);let i=(0,r.Z)("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]])},87726:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(17865);let i=(0,r.Z)("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]])},93765:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(17865);let i=(0,r.Z)("ThumbsDown",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",key:"s6e0r"}]])},26575:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(17865);let i=(0,r.Z)("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]])}}]);