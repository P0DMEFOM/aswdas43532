(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();function _d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ec={exports:{}},Gs={},tc={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lr=Symbol.for("react.element"),zd=Symbol.for("react.portal"),Pd=Symbol.for("react.fragment"),Ld=Symbol.for("react.strict_mode"),Td=Symbol.for("react.profiler"),Id=Symbol.for("react.provider"),Dd=Symbol.for("react.context"),Rd=Symbol.for("react.forward_ref"),Fd=Symbol.for("react.suspense"),Od=Symbol.for("react.memo"),Ad=Symbol.for("react.lazy"),Ro=Symbol.iterator;function Ud(e){return e===null||typeof e!="object"?null:(e=Ro&&e[Ro]||e["@@iterator"],typeof e=="function"?e:null)}var nc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rc=Object.assign,sc={};function Un(e,t,n){this.props=e,this.context=t,this.refs=sc,this.updater=n||nc}Un.prototype.isReactComponent={};Un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lc(){}lc.prototype=Un.prototype;function Da(e,t,n){this.props=e,this.context=t,this.refs=sc,this.updater=n||nc}var Ra=Da.prototype=new lc;Ra.constructor=Da;rc(Ra,Un.prototype);Ra.isPureReactComponent=!0;var Fo=Array.isArray,ac=Object.prototype.hasOwnProperty,Fa={current:null},oc={key:!0,ref:!0,__self:!0,__source:!0};function ic(e,t,n){var s,l={},a=null,o=null;if(t!=null)for(s in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)ac.call(t,s)&&!oc.hasOwnProperty(s)&&(l[s]=t[s]);var i=arguments.length-2;if(i===1)l.children=n;else if(1<i){for(var c=Array(i),f=0;f<i;f++)c[f]=arguments[f+2];l.children=c}if(e&&e.defaultProps)for(s in i=e.defaultProps,i)l[s]===void 0&&(l[s]=i[s]);return{$$typeof:Lr,type:e,key:a,ref:o,props:l,_owner:Fa.current}}function $d(e,t){return{$$typeof:Lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Oa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lr}function Bd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oo=/\/+/g;function ul(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Bd(""+e.key):t.toString(36)}function as(e,t,n,s,l){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Lr:case zd:o=!0}}if(o)return o=e,l=l(o),e=s===""?"."+ul(o,0):s,Fo(l)?(n="",e!=null&&(n=e.replace(Oo,"$&/")+"/"),as(l,t,n,"",function(f){return f})):l!=null&&(Oa(l)&&(l=$d(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Oo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,s=s===""?".":s+":",Fo(e))for(var i=0;i<e.length;i++){a=e[i];var c=s+ul(a,i);o+=as(a,t,n,c,l)}else if(c=Ud(e),typeof c=="function")for(e=c.call(e),i=0;!(a=e.next()).done;)a=a.value,c=s+ul(a,i++),o+=as(a,t,n,c,l);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ur(e,t,n){if(e==null)return e;var s=[],l=0;return as(e,s,"","",function(a){return t.call(n,a,l++)}),s}function Wd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},os={transition:null},Vd={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:os,ReactCurrentOwner:Fa};function cc(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Ur,forEach:function(e,t,n){Ur(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ur(e,function(){t++}),t},toArray:function(e){return Ur(e,function(t){return t})||[]},only:function(e){if(!Oa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Un;B.Fragment=Pd;B.Profiler=Td;B.PureComponent=Da;B.StrictMode=Ld;B.Suspense=Fd;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vd;B.act=cc;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=rc({},e.props),l=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Fa.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)ac.call(t,c)&&!oc.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){i=Array(c);for(var f=0;f<c;f++)i[f]=arguments[f+2];s.children=i}return{$$typeof:Lr,type:e.type,key:l,ref:a,props:s,_owner:o}};B.createContext=function(e){return e={$$typeof:Dd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Id,_context:e},e.Consumer=e};B.createElement=ic;B.createFactory=function(e){var t=ic.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Rd,render:e}};B.isValidElement=Oa;B.lazy=function(e){return{$$typeof:Ad,_payload:{_status:-1,_result:e},_init:Wd}};B.memo=function(e,t){return{$$typeof:Od,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=os.transition;os.transition={};try{e()}finally{os.transition=t}};B.unstable_act=cc;B.useCallback=function(e,t){return Le.current.useCallback(e,t)};B.useContext=function(e){return Le.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};B.useEffect=function(e,t){return Le.current.useEffect(e,t)};B.useId=function(){return Le.current.useId()};B.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Le.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};B.useRef=function(e){return Le.current.useRef(e)};B.useState=function(e){return Le.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Le.current.useTransition()};B.version="18.3.1";tc.exports=B;var L=tc.exports;const Ao=_d(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd=L,Gd=Symbol.for("react.element"),Qd=Symbol.for("react.fragment"),Kd=Object.prototype.hasOwnProperty,Jd=Hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xd={key:!0,ref:!0,__self:!0,__source:!0};function uc(e,t,n){var s,l={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)Kd.call(t,s)&&!Xd.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)l[s]===void 0&&(l[s]=t[s]);return{$$typeof:Gd,type:e,key:a,ref:o,props:l,_owner:Jd.current}}Gs.Fragment=Qd;Gs.jsx=uc;Gs.jsxs=uc;ec.exports=Gs;var r=ec.exports,dc={exports:{}},Ve={},mc={exports:{}},fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(u,C){var _=u.length;u.push(C);e:for(;0<_;){var k=_-1>>>1,z=u[k];if(0<l(z,C))u[k]=C,u[_]=z,_=k;else break e}}function n(u){return u.length===0?null:u[0]}function s(u){if(u.length===0)return null;var C=u[0],_=u.pop();if(_!==C){u[0]=_;e:for(var k=0,z=u.length,O=z>>>1;k<O;){var U=2*(k+1)-1,X=u[U],ie=U+1,re=u[ie];if(0>l(X,_))ie<z&&0>l(re,X)?(u[k]=re,u[ie]=_,k=ie):(u[k]=X,u[U]=_,k=U);else if(ie<z&&0>l(re,_))u[k]=re,u[ie]=_,k=ie;else break e}}return C}function l(u,C){var _=u.sortIndex-C.sortIndex;return _!==0?_:u.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,i=o.now();e.unstable_now=function(){return o.now()-i}}var c=[],f=[],p=1,g=null,h=3,w=!1,j=!1,N=!1,y=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(u){for(var C=n(f);C!==null;){if(C.callback===null)s(f);else if(C.startTime<=u)s(f),C.sortIndex=C.expirationTime,t(c,C);else break;C=n(f)}}function S(u){if(N=!1,x(u),!j)if(n(c)!==null)j=!0,te(v);else{var C=n(f);C!==null&&J(S,C.startTime-u)}}function v(u,C){j=!1,N&&(N=!1,m(b),b=-1),w=!0;var _=h;try{for(x(C),g=n(c);g!==null&&(!(g.expirationTime>C)||u&&!V());){var k=g.callback;if(typeof k=="function"){g.callback=null,h=g.priorityLevel;var z=k(g.expirationTime<=C);C=e.unstable_now(),typeof z=="function"?g.callback=z:g===n(c)&&s(c),x(C)}else s(c);g=n(c)}if(g!==null)var O=!0;else{var U=n(f);U!==null&&J(S,U.startTime-C),O=!1}return O}finally{g=null,h=_,w=!1}}var E=!1,M=null,b=-1,D=5,T=-1;function V(){return!(e.unstable_now()-T<D)}function ee(){if(M!==null){var u=e.unstable_now();T=u;var C=!0;try{C=M(!0,u)}finally{C?Ne():(E=!1,M=null)}}else E=!1}var Ne;if(typeof d=="function")Ne=function(){d(ee)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,_e=ke.port2;ke.port1.onmessage=ee,Ne=function(){_e.postMessage(null)}}else Ne=function(){y(ee,0)};function te(u){M=u,E||(E=!0,Ne())}function J(u,C){b=y(function(){u(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(u){u.callback=null},e.unstable_continueExecution=function(){j||w||(j=!0,te(v))},e.unstable_forceFrameRate=function(u){0>u||125<u?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<u?Math.floor(1e3/u):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(u){switch(h){case 1:case 2:case 3:var C=3;break;default:C=h}var _=h;h=C;try{return u()}finally{h=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(u,C){switch(u){case 1:case 2:case 3:case 4:case 5:break;default:u=3}var _=h;h=u;try{return C()}finally{h=_}},e.unstable_scheduleCallback=function(u,C,_){var k=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?k+_:k):_=k,u){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=_+z,u={id:p++,callback:C,priorityLevel:u,startTime:_,expirationTime:z,sortIndex:-1},_>k?(u.sortIndex=_,t(f,u),n(c)===null&&u===n(f)&&(N?(m(b),b=-1):N=!0,J(S,_-k))):(u.sortIndex=z,t(c,u),j||w||(j=!0,te(v))),u},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(u){var C=h;return function(){var _=h;h=C;try{return u.apply(this,arguments)}finally{h=_}}}})(fc);mc.exports=fc;var Yd=mc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=L,We=Yd;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pc=new Set,hr={};function un(e,t){Tn(e,t),Tn(e+"Capture",t)}function Tn(e,t){for(hr[e]=t,e=0;e<t.length;e++)pc.add(t[e])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Al=Object.prototype.hasOwnProperty,Zd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uo={},$o={};function em(e){return Al.call($o,e)?!0:Al.call(Uo,e)?!1:Zd.test(e)?$o[e]=!0:(Uo[e]=!0,!1)}function tm(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nm(e,t,n,s){if(t===null||typeof t>"u"||tm(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,s,l,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var Aa=/[\-:]([a-z])/g;function Ua(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Aa,Ua);we[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Aa,Ua);we[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Aa,Ua);we[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function $a(e,t,n,s){var l=we.hasOwnProperty(t)?we[t]:null;(l!==null?l.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nm(t,n,l,s)&&(n=null),s||l===null?em(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,s=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var kt=qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$r=Symbol.for("react.element"),hn=Symbol.for("react.portal"),xn=Symbol.for("react.fragment"),Ba=Symbol.for("react.strict_mode"),Ul=Symbol.for("react.profiler"),hc=Symbol.for("react.provider"),xc=Symbol.for("react.context"),Wa=Symbol.for("react.forward_ref"),$l=Symbol.for("react.suspense"),Bl=Symbol.for("react.suspense_list"),Va=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),gc=Symbol.for("react.offscreen"),Bo=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=Bo&&e[Bo]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,dl;function tr(e){if(dl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);dl=t&&t[1]||""}return`
`+dl+e}var ml=!1;function fl(e,t){if(!e||ml)return"";ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var s=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){s=f}e.call(t.prototype)}else{try{throw Error()}catch(f){s=f}e()}}catch(f){if(f&&s&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),a=s.stack.split(`
`),o=l.length-1,i=a.length-1;1<=o&&0<=i&&l[o]!==a[i];)i--;for(;1<=o&&0<=i;o--,i--)if(l[o]!==a[i]){if(o!==1||i!==1)do if(o--,i--,0>i||l[o]!==a[i]){var c=`
`+l[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=i);break}}}finally{ml=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?tr(e):""}function rm(e){switch(e.tag){case 5:return tr(e.type);case 16:return tr("Lazy");case 13:return tr("Suspense");case 19:return tr("SuspenseList");case 0:case 2:case 15:return e=fl(e.type,!1),e;case 11:return e=fl(e.type.render,!1),e;case 1:return e=fl(e.type,!0),e;default:return""}}function Wl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xn:return"Fragment";case hn:return"Portal";case Ul:return"Profiler";case Ba:return"StrictMode";case $l:return"Suspense";case Bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xc:return(e.displayName||"Context")+".Consumer";case hc:return(e._context.displayName||"Context")+".Provider";case Wa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Va:return t=e.displayName||null,t!==null?t:Wl(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return Wl(e(t))}catch{}}return null}function sm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wl(t);case 8:return t===Ba?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lm(e){var t=yc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){s=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Br(e){e._valueTracker||(e._valueTracker=lm(e))}function vc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=yc(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vl(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wo(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=Ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jc(e,t){t=t.checked,t!=null&&$a(e,"checked",t,!1)}function Hl(e,t){jc(e,t);var n=Ut(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gl(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gl(e,t,n){(t!=="number"||vs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var nr=Array.isArray;function En(e,t,n,s){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&s&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ho(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(nr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ut(n)}}function wc(e,t){var n=Ut(t.value),s=Ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function Go(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wr,kc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wr=Wr||document.createElement("div"),Wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},am=["Webkit","ms","Moz","O"];Object.keys(lr).forEach(function(e){am.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lr[t]=lr[e]})});function bc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||lr.hasOwnProperty(e)&&lr[e]?(""+t).trim():t+"px"}function Sc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,l=bc(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,l):e[n]=l}}var om=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jl(e,t){if(t){if(om[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yl=null;function Ha(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ql=null,Mn=null,_n=null;function Qo(e){if(e=Dr(e)){if(typeof ql!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Ys(t),ql(e.stateNode,e.type,t))}}function Cc(e){Mn?_n?_n.push(e):_n=[e]:Mn=e}function Ec(){if(Mn){var e=Mn,t=_n;if(_n=Mn=null,Qo(e),t)for(e=0;e<t.length;e++)Qo(t[e])}}function Mc(e,t){return e(t)}function _c(){}var pl=!1;function zc(e,t,n){if(pl)return e(t,n);pl=!0;try{return Mc(e,t,n)}finally{pl=!1,(Mn!==null||_n!==null)&&(_c(),Ec())}}function gr(e,t){var n=e.stateNode;if(n===null)return null;var s=Ys(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Zl=!1;if(yt)try{var Qn={};Object.defineProperty(Qn,"passive",{get:function(){Zl=!0}}),window.addEventListener("test",Qn,Qn),window.removeEventListener("test",Qn,Qn)}catch{Zl=!1}function im(e,t,n,s,l,a,o,i,c){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(p){this.onError(p)}}var ar=!1,js=null,ws=!1,ea=null,cm={onError:function(e){ar=!0,js=e}};function um(e,t,n,s,l,a,o,i,c){ar=!1,js=null,im.apply(cm,arguments)}function dm(e,t,n,s,l,a,o,i,c){if(um.apply(this,arguments),ar){if(ar){var f=js;ar=!1,js=null}else throw Error(P(198));ws||(ws=!0,ea=f)}}function dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ko(e){if(dn(e)!==e)throw Error(P(188))}function mm(e){var t=e.alternate;if(!t){if(t=dn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,s=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(s=l.return,s!==null){n=s;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return Ko(l),e;if(a===s)return Ko(l),t;a=a.sibling}throw Error(P(188))}if(n.return!==s.return)n=l,s=a;else{for(var o=!1,i=l.child;i;){if(i===n){o=!0,n=l,s=a;break}if(i===s){o=!0,s=l,n=a;break}i=i.sibling}if(!o){for(i=a.child;i;){if(i===n){o=!0,n=a,s=l;break}if(i===s){o=!0,s=a,n=l;break}i=i.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==s)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Lc(e){return e=mm(e),e!==null?Tc(e):null}function Tc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tc(e);if(t!==null)return t;e=e.sibling}return null}var Ic=We.unstable_scheduleCallback,Jo=We.unstable_cancelCallback,fm=We.unstable_shouldYield,pm=We.unstable_requestPaint,ce=We.unstable_now,hm=We.unstable_getCurrentPriorityLevel,Ga=We.unstable_ImmediatePriority,Dc=We.unstable_UserBlockingPriority,Ns=We.unstable_NormalPriority,xm=We.unstable_LowPriority,Rc=We.unstable_IdlePriority,Qs=null,ct=null;function gm(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Qs,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:jm,ym=Math.log,vm=Math.LN2;function jm(e){return e>>>=0,e===0?32:31-(ym(e)/vm|0)|0}var Vr=64,Hr=4194304;function rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ks(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,l=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var i=o&~l;i!==0?s=rr(i):(a&=o,a!==0&&(s=rr(a)))}else o=n&~l,o!==0?s=rr(o):a!==0&&(s=rr(a));if(s===0)return 0;if(t!==0&&t!==s&&!(t&l)&&(l=s&-s,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if(s&4&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-rt(t),l=1<<n,s|=e[n],t&=~l;return s}function wm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nm(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-rt(a),i=1<<o,c=l[o];c===-1?(!(i&n)||i&s)&&(l[o]=wm(i,t)):c<=t&&(e.expiredLanes|=i),a&=~i}}function ta(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fc(){var e=Vr;return Vr<<=1,!(Vr&4194240)&&(Vr=64),e}function hl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function km(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-rt(n),a=1<<l;t[l]=0,s[l]=-1,e[l]=-1,n&=~a}}function Qa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-rt(n),l=1<<s;l&t|e[s]&t&&(e[s]|=t),n&=~l}}var K=0;function Oc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ac,Ka,Uc,$c,Bc,na=!1,Gr=[],Lt=null,Tt=null,It=null,yr=new Map,vr=new Map,Mt=[],bm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xo(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vr.delete(t.pointerId)}}function Kn(e,t,n,s,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:a,targetContainers:[l]},t!==null&&(t=Dr(t),t!==null&&Ka(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Sm(e,t,n,s,l){switch(t){case"focusin":return Lt=Kn(Lt,e,t,n,s,l),!0;case"dragenter":return Tt=Kn(Tt,e,t,n,s,l),!0;case"mouseover":return It=Kn(It,e,t,n,s,l),!0;case"pointerover":var a=l.pointerId;return yr.set(a,Kn(yr.get(a)||null,e,t,n,s,l)),!0;case"gotpointercapture":return a=l.pointerId,vr.set(a,Kn(vr.get(a)||null,e,t,n,s,l)),!0}return!1}function Wc(e){var t=Xt(e.target);if(t!==null){var n=dn(t);if(n!==null){if(t=n.tag,t===13){if(t=Pc(n),t!==null){e.blockedOn=t,Bc(e.priority,function(){Uc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function is(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ra(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);Yl=s,n.target.dispatchEvent(s),Yl=null}else return t=Dr(n),t!==null&&Ka(t),e.blockedOn=n,!1;t.shift()}return!0}function Yo(e,t,n){is(e)&&n.delete(t)}function Cm(){na=!1,Lt!==null&&is(Lt)&&(Lt=null),Tt!==null&&is(Tt)&&(Tt=null),It!==null&&is(It)&&(It=null),yr.forEach(Yo),vr.forEach(Yo)}function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,na||(na=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,Cm)))}function jr(e){function t(l){return Jn(l,e)}if(0<Gr.length){Jn(Gr[0],e);for(var n=1;n<Gr.length;n++){var s=Gr[n];s.blockedOn===e&&(s.blockedOn=null)}}for(Lt!==null&&Jn(Lt,e),Tt!==null&&Jn(Tt,e),It!==null&&Jn(It,e),yr.forEach(t),vr.forEach(t),n=0;n<Mt.length;n++)s=Mt[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)Wc(n),n.blockedOn===null&&Mt.shift()}var zn=kt.ReactCurrentBatchConfig,bs=!0;function Em(e,t,n,s){var l=K,a=zn.transition;zn.transition=null;try{K=1,Ja(e,t,n,s)}finally{K=l,zn.transition=a}}function Mm(e,t,n,s){var l=K,a=zn.transition;zn.transition=null;try{K=4,Ja(e,t,n,s)}finally{K=l,zn.transition=a}}function Ja(e,t,n,s){if(bs){var l=ra(e,t,n,s);if(l===null)Sl(e,t,s,Ss,n),Xo(e,s);else if(Sm(l,e,t,n,s))s.stopPropagation();else if(Xo(e,s),t&4&&-1<bm.indexOf(e)){for(;l!==null;){var a=Dr(l);if(a!==null&&Ac(a),a=ra(e,t,n,s),a===null&&Sl(e,t,s,Ss,n),a===l)break;l=a}l!==null&&s.stopPropagation()}else Sl(e,t,s,null,n)}}var Ss=null;function ra(e,t,n,s){if(Ss=null,e=Ha(s),e=Xt(e),e!==null)if(t=dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ss=e,null}function Vc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hm()){case Ga:return 1;case Dc:return 4;case Ns:case xm:return 16;case Rc:return 536870912;default:return 16}default:return 16}}var zt=null,Xa=null,cs=null;function Hc(){if(cs)return cs;var e,t=Xa,n=t.length,s,l="value"in zt?zt.value:zt.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(s=1;s<=o&&t[n-s]===l[a-s];s++);return cs=l.slice(e,1<s?1-s:void 0)}function us(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qr(){return!0}function qo(){return!1}function He(e){function t(n,s,l,a,o){this._reactName=n,this._targetInst=l,this.type=s,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Qr:qo,this.isPropagationStopped=qo,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qr)},persist:function(){},isPersistent:Qr}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ya=He($n),Ir=ae({},$n,{view:0,detail:0}),_m=He(Ir),xl,gl,Xn,Ks=ae({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(xl=e.screenX-Xn.screenX,gl=e.screenY-Xn.screenY):gl=xl=0,Xn=e),xl)},movementY:function(e){return"movementY"in e?e.movementY:gl}}),Zo=He(Ks),zm=ae({},Ks,{dataTransfer:0}),Pm=He(zm),Lm=ae({},Ir,{relatedTarget:0}),yl=He(Lm),Tm=ae({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),Im=He(Tm),Dm=ae({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rm=He(Dm),Fm=ae({},$n,{data:0}),ei=He(Fm),Om={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Am={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Um={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $m(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Um[e])?!!t[e]:!1}function qa(){return $m}var Bm=ae({},Ir,{key:function(e){if(e.key){var t=Om[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=us(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Am[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qa,charCode:function(e){return e.type==="keypress"?us(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?us(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wm=He(Bm),Vm=ae({},Ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ti=He(Vm),Hm=ae({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qa}),Gm=He(Hm),Qm=ae({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Km=He(Qm),Jm=ae({},Ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xm=He(Jm),Ym=[9,13,27,32],Za=yt&&"CompositionEvent"in window,or=null;yt&&"documentMode"in document&&(or=document.documentMode);var qm=yt&&"TextEvent"in window&&!or,Gc=yt&&(!Za||or&&8<or&&11>=or),ni=" ",ri=!1;function Qc(e,t){switch(e){case"keyup":return Ym.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function Zm(e,t){switch(e){case"compositionend":return Kc(t);case"keypress":return t.which!==32?null:(ri=!0,ni);case"textInput":return e=t.data,e===ni&&ri?null:e;default:return null}}function ef(e,t){if(gn)return e==="compositionend"||!Za&&Qc(e,t)?(e=Hc(),cs=Xa=zt=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gc&&t.locale!=="ko"?null:t.data;default:return null}}var tf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function si(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tf[e.type]:t==="textarea"}function Jc(e,t,n,s){Cc(s),t=Cs(t,"onChange"),0<t.length&&(n=new Ya("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var ir=null,wr=null;function nf(e){au(e,0)}function Js(e){var t=jn(e);if(vc(t))return e}function rf(e,t){if(e==="change")return t}var Xc=!1;if(yt){var vl;if(yt){var jl="oninput"in document;if(!jl){var li=document.createElement("div");li.setAttribute("oninput","return;"),jl=typeof li.oninput=="function"}vl=jl}else vl=!1;Xc=vl&&(!document.documentMode||9<document.documentMode)}function ai(){ir&&(ir.detachEvent("onpropertychange",Yc),wr=ir=null)}function Yc(e){if(e.propertyName==="value"&&Js(wr)){var t=[];Jc(t,wr,e,Ha(e)),zc(nf,t)}}function sf(e,t,n){e==="focusin"?(ai(),ir=t,wr=n,ir.attachEvent("onpropertychange",Yc)):e==="focusout"&&ai()}function lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Js(wr)}function af(e,t){if(e==="click")return Js(t)}function of(e,t){if(e==="input"||e==="change")return Js(t)}function cf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:cf;function Nr(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var l=n[s];if(!Al.call(t,l)||!lt(e[l],t[l]))return!1}return!0}function oi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ii(e,t){var n=oi(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oi(n)}}function qc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zc(){for(var e=window,t=vs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vs(e.document)}return t}function eo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function uf(e){var t=Zc(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qc(n.ownerDocument.documentElement,n)){if(s!==null&&eo(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,a=Math.min(s.start,l);s=s.end===void 0?a:Math.min(s.end,l),!e.extend&&a>s&&(l=s,s=a,a=l),l=ii(n,a);var o=ii(n,s);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>s?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var df=yt&&"documentMode"in document&&11>=document.documentMode,yn=null,sa=null,cr=null,la=!1;function ci(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;la||yn==null||yn!==vs(s)||(s=yn,"selectionStart"in s&&eo(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),cr&&Nr(cr,s)||(cr=s,s=Cs(sa,"onSelect"),0<s.length&&(t=new Ya("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=yn)))}function Kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:Kr("Animation","AnimationEnd"),animationiteration:Kr("Animation","AnimationIteration"),animationstart:Kr("Animation","AnimationStart"),transitionend:Kr("Transition","TransitionEnd")},wl={},eu={};yt&&(eu=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function Xs(e){if(wl[e])return wl[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in eu)return wl[e]=t[n];return e}var tu=Xs("animationend"),nu=Xs("animationiteration"),ru=Xs("animationstart"),su=Xs("transitionend"),lu=new Map,ui="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){lu.set(e,t),un(t,[e])}for(var Nl=0;Nl<ui.length;Nl++){var kl=ui[Nl],mf=kl.toLowerCase(),ff=kl[0].toUpperCase()+kl.slice(1);Bt(mf,"on"+ff)}Bt(tu,"onAnimationEnd");Bt(nu,"onAnimationIteration");Bt(ru,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(su,"onTransitionEnd");Tn("onMouseEnter",["mouseout","mouseover"]);Tn("onMouseLeave",["mouseout","mouseover"]);Tn("onPointerEnter",["pointerout","pointerover"]);Tn("onPointerLeave",["pointerout","pointerover"]);un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));un("onBeforeInput",["compositionend","keypress","textInput","paste"]);un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pf=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function di(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,dm(s,t,void 0,e),e.currentTarget=null}function au(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],l=s.event;s=s.listeners;e:{var a=void 0;if(t)for(var o=s.length-1;0<=o;o--){var i=s[o],c=i.instance,f=i.currentTarget;if(i=i.listener,c!==a&&l.isPropagationStopped())break e;di(l,i,f),a=c}else for(o=0;o<s.length;o++){if(i=s[o],c=i.instance,f=i.currentTarget,i=i.listener,c!==a&&l.isPropagationStopped())break e;di(l,i,f),a=c}}}if(ws)throw e=ea,ws=!1,ea=null,e}function q(e,t){var n=t[ua];n===void 0&&(n=t[ua]=new Set);var s=e+"__bubble";n.has(s)||(ou(t,e,2,!1),n.add(s))}function bl(e,t,n){var s=0;t&&(s|=4),ou(n,e,s,t)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function kr(e){if(!e[Jr]){e[Jr]=!0,pc.forEach(function(n){n!=="selectionchange"&&(pf.has(n)||bl(n,!1,e),bl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Jr]||(t[Jr]=!0,bl("selectionchange",!1,t))}}function ou(e,t,n,s){switch(Vc(t)){case 1:var l=Em;break;case 4:l=Mm;break;default:l=Ja}n=l.bind(null,t,n,e),l=void 0,!Zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Sl(e,t,n,s,l){var a=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var i=s.stateNode.containerInfo;if(i===l||i.nodeType===8&&i.parentNode===l)break;if(o===4)for(o=s.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;o=o.return}for(;i!==null;){if(o=Xt(i),o===null)return;if(c=o.tag,c===5||c===6){s=a=o;continue e}i=i.parentNode}}s=s.return}zc(function(){var f=a,p=Ha(n),g=[];e:{var h=lu.get(e);if(h!==void 0){var w=Ya,j=e;switch(e){case"keypress":if(us(n)===0)break e;case"keydown":case"keyup":w=Wm;break;case"focusin":j="focus",w=yl;break;case"focusout":j="blur",w=yl;break;case"beforeblur":case"afterblur":w=yl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Gm;break;case tu:case nu:case ru:w=Im;break;case su:w=Km;break;case"scroll":w=_m;break;case"wheel":w=Xm;break;case"copy":case"cut":case"paste":w=Rm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ti}var N=(t&4)!==0,y=!N&&e==="scroll",m=N?h!==null?h+"Capture":null:h;N=[];for(var d=f,x;d!==null;){x=d;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,m!==null&&(S=gr(d,m),S!=null&&N.push(br(d,S,x)))),y)break;d=d.return}0<N.length&&(h=new w(h,j,null,n,p),g.push({event:h,listeners:N}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==Yl&&(j=n.relatedTarget||n.fromElement)&&(Xt(j)||j[vt]))break e;if((w||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,w?(j=n.relatedTarget||n.toElement,w=f,j=j?Xt(j):null,j!==null&&(y=dn(j),j!==y||j.tag!==5&&j.tag!==6)&&(j=null)):(w=null,j=f),w!==j)){if(N=Zo,S="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(N=ti,S="onPointerLeave",m="onPointerEnter",d="pointer"),y=w==null?h:jn(w),x=j==null?h:jn(j),h=new N(S,d+"leave",w,n,p),h.target=y,h.relatedTarget=x,S=null,Xt(p)===f&&(N=new N(m,d+"enter",j,n,p),N.target=x,N.relatedTarget=y,S=N),y=S,w&&j)t:{for(N=w,m=j,d=0,x=N;x;x=fn(x))d++;for(x=0,S=m;S;S=fn(S))x++;for(;0<d-x;)N=fn(N),d--;for(;0<x-d;)m=fn(m),x--;for(;d--;){if(N===m||m!==null&&N===m.alternate)break t;N=fn(N),m=fn(m)}N=null}else N=null;w!==null&&mi(g,h,w,N,!1),j!==null&&y!==null&&mi(g,y,j,N,!0)}}e:{if(h=f?jn(f):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var v=rf;else if(si(h))if(Xc)v=of;else{v=lf;var E=sf}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(v=af);if(v&&(v=v(e,f))){Jc(g,v,n,p);break e}E&&E(e,h,f),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Gl(h,"number",h.value)}switch(E=f?jn(f):window,e){case"focusin":(si(E)||E.contentEditable==="true")&&(yn=E,sa=f,cr=null);break;case"focusout":cr=sa=yn=null;break;case"mousedown":la=!0;break;case"contextmenu":case"mouseup":case"dragend":la=!1,ci(g,n,p);break;case"selectionchange":if(df)break;case"keydown":case"keyup":ci(g,n,p)}var M;if(Za)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else gn?Qc(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Gc&&n.locale!=="ko"&&(gn||b!=="onCompositionStart"?b==="onCompositionEnd"&&gn&&(M=Hc()):(zt=p,Xa="value"in zt?zt.value:zt.textContent,gn=!0)),E=Cs(f,b),0<E.length&&(b=new ei(b,e,null,n,p),g.push({event:b,listeners:E}),M?b.data=M:(M=Kc(n),M!==null&&(b.data=M)))),(M=qm?Zm(e,n):ef(e,n))&&(f=Cs(f,"onBeforeInput"),0<f.length&&(p=new ei("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:f}),p.data=M))}au(g,t)})}function br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Cs(e,t){for(var n=t+"Capture",s=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=gr(e,n),a!=null&&s.unshift(br(e,a,l)),a=gr(e,t),a!=null&&s.push(br(e,a,l))),e=e.return}return s}function fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mi(e,t,n,s,l){for(var a=t._reactName,o=[];n!==null&&n!==s;){var i=n,c=i.alternate,f=i.stateNode;if(c!==null&&c===s)break;i.tag===5&&f!==null&&(i=f,l?(c=gr(n,a),c!=null&&o.unshift(br(n,c,i))):l||(c=gr(n,a),c!=null&&o.push(br(n,c,i)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var hf=/\r\n?/g,xf=/\u0000|\uFFFD/g;function fi(e){return(typeof e=="string"?e:""+e).replace(hf,`
`).replace(xf,"")}function Xr(e,t,n){if(t=fi(t),fi(e)!==t&&n)throw Error(P(425))}function Es(){}var aa=null,oa=null;function ia(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ca=typeof setTimeout=="function"?setTimeout:void 0,gf=typeof clearTimeout=="function"?clearTimeout:void 0,pi=typeof Promise=="function"?Promise:void 0,yf=typeof queueMicrotask=="function"?queueMicrotask:typeof pi<"u"?function(e){return pi.resolve(null).then(e).catch(vf)}:ca;function vf(e){setTimeout(function(){throw e})}function Cl(e,t){var n=t,s=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(s===0){e.removeChild(l),jr(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=l}while(n);jr(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bn=Math.random().toString(36).slice(2),it="__reactFiber$"+Bn,Sr="__reactProps$"+Bn,vt="__reactContainer$"+Bn,ua="__reactEvents$"+Bn,jf="__reactListeners$"+Bn,wf="__reactHandles$"+Bn;function Xt(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hi(e);e!==null;){if(n=e[it])return n;e=hi(e)}return t}e=n,n=e.parentNode}return null}function Dr(e){return e=e[it]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Ys(e){return e[Sr]||null}var da=[],wn=-1;function Wt(e){return{current:e}}function Z(e){0>wn||(e.current=da[wn],da[wn]=null,wn--)}function Y(e,t){wn++,da[wn]=e.current,e.current=t}var $t={},Ee=Wt($t),Fe=Wt(!1),rn=$t;function In(e,t){var n=e.type.contextTypes;if(!n)return $t;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in n)l[a]=t[a];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Oe(e){return e=e.childContextTypes,e!=null}function Ms(){Z(Fe),Z(Ee)}function xi(e,t,n){if(Ee.current!==$t)throw Error(P(168));Y(Ee,t),Y(Fe,n)}function iu(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var l in s)if(!(l in t))throw Error(P(108,sm(e)||"Unknown",l));return ae({},n,s)}function _s(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,rn=Ee.current,Y(Ee,e),Y(Fe,Fe.current),!0}function gi(e,t,n){var s=e.stateNode;if(!s)throw Error(P(169));n?(e=iu(e,t,rn),s.__reactInternalMemoizedMergedChildContext=e,Z(Fe),Z(Ee),Y(Ee,e)):Z(Fe),Y(Fe,n)}var pt=null,qs=!1,El=!1;function cu(e){pt===null?pt=[e]:pt.push(e)}function Nf(e){qs=!0,cu(e)}function Vt(){if(!El&&pt!==null){El=!0;var e=0,t=K;try{var n=pt;for(K=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}pt=null,qs=!1}catch(l){throw pt!==null&&(pt=pt.slice(e+1)),Ic(Ga,Vt),l}finally{K=t,El=!1}}return null}var Nn=[],kn=0,zs=null,Ps=0,Ge=[],Qe=0,sn=null,ht=1,xt="";function Qt(e,t){Nn[kn++]=Ps,Nn[kn++]=zs,zs=e,Ps=t}function uu(e,t,n){Ge[Qe++]=ht,Ge[Qe++]=xt,Ge[Qe++]=sn,sn=e;var s=ht;e=xt;var l=32-rt(s)-1;s&=~(1<<l),n+=1;var a=32-rt(t)+l;if(30<a){var o=l-l%5;a=(s&(1<<o)-1).toString(32),s>>=o,l-=o,ht=1<<32-rt(t)+l|n<<l|s,xt=a+e}else ht=1<<a|n<<l|s,xt=e}function to(e){e.return!==null&&(Qt(e,1),uu(e,1,0))}function no(e){for(;e===zs;)zs=Nn[--kn],Nn[kn]=null,Ps=Nn[--kn],Nn[kn]=null;for(;e===sn;)sn=Ge[--Qe],Ge[Qe]=null,xt=Ge[--Qe],Ge[Qe]=null,ht=Ge[--Qe],Ge[Qe]=null}var Be=null,$e=null,ne=!1,nt=null;function du(e,t){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yi(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,$e=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sn!==null?{id:ht,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,$e=null,!0):!1;default:return!1}}function ma(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fa(e){if(ne){var t=$e;if(t){var n=t;if(!yi(e,t)){if(ma(e))throw Error(P(418));t=Dt(n.nextSibling);var s=Be;t&&yi(e,t)?du(s,n):(e.flags=e.flags&-4097|2,ne=!1,Be=e)}}else{if(ma(e))throw Error(P(418));e.flags=e.flags&-4097|2,ne=!1,Be=e}}}function vi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function Yr(e){if(e!==Be)return!1;if(!ne)return vi(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ia(e.type,e.memoizedProps)),t&&(t=$e)){if(ma(e))throw mu(),Error(P(418));for(;t;)du(e,t),t=Dt(t.nextSibling)}if(vi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Be?Dt(e.stateNode.nextSibling):null;return!0}function mu(){for(var e=$e;e;)e=Dt(e.nextSibling)}function Dn(){$e=Be=null,ne=!1}function ro(e){nt===null?nt=[e]:nt.push(e)}var kf=kt.ReactCurrentBatchConfig;function Yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var s=n.stateNode}if(!s)throw Error(P(147,e));var l=s,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var i=l.refs;o===null?delete i[a]:i[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function qr(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ji(e){var t=e._init;return t(e._payload)}function fu(e){function t(m,d){if(e){var x=m.deletions;x===null?(m.deletions=[d],m.flags|=16):x.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function s(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function l(m,d){return m=At(m,d),m.index=0,m.sibling=null,m}function a(m,d,x){return m.index=x,e?(x=m.alternate,x!==null?(x=x.index,x<d?(m.flags|=2,d):x):(m.flags|=2,d)):(m.flags|=1048576,d)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function i(m,d,x,S){return d===null||d.tag!==6?(d=Il(x,m.mode,S),d.return=m,d):(d=l(d,x),d.return=m,d)}function c(m,d,x,S){var v=x.type;return v===xn?p(m,d,x.props.children,S,x.key):d!==null&&(d.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Ct&&ji(v)===d.type)?(S=l(d,x.props),S.ref=Yn(m,d,x),S.return=m,S):(S=gs(x.type,x.key,x.props,null,m.mode,S),S.ref=Yn(m,d,x),S.return=m,S)}function f(m,d,x,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==x.containerInfo||d.stateNode.implementation!==x.implementation?(d=Dl(x,m.mode,S),d.return=m,d):(d=l(d,x.children||[]),d.return=m,d)}function p(m,d,x,S,v){return d===null||d.tag!==7?(d=en(x,m.mode,S,v),d.return=m,d):(d=l(d,x),d.return=m,d)}function g(m,d,x){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Il(""+d,m.mode,x),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case $r:return x=gs(d.type,d.key,d.props,null,m.mode,x),x.ref=Yn(m,null,d),x.return=m,x;case hn:return d=Dl(d,m.mode,x),d.return=m,d;case Ct:var S=d._init;return g(m,S(d._payload),x)}if(nr(d)||Gn(d))return d=en(d,m.mode,x,null),d.return=m,d;qr(m,d)}return null}function h(m,d,x,S){var v=d!==null?d.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return v!==null?null:i(m,d,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case $r:return x.key===v?c(m,d,x,S):null;case hn:return x.key===v?f(m,d,x,S):null;case Ct:return v=x._init,h(m,d,v(x._payload),S)}if(nr(x)||Gn(x))return v!==null?null:p(m,d,x,S,null);qr(m,x)}return null}function w(m,d,x,S,v){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(x)||null,i(d,m,""+S,v);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case $r:return m=m.get(S.key===null?x:S.key)||null,c(d,m,S,v);case hn:return m=m.get(S.key===null?x:S.key)||null,f(d,m,S,v);case Ct:var E=S._init;return w(m,d,x,E(S._payload),v)}if(nr(S)||Gn(S))return m=m.get(x)||null,p(d,m,S,v,null);qr(d,S)}return null}function j(m,d,x,S){for(var v=null,E=null,M=d,b=d=0,D=null;M!==null&&b<x.length;b++){M.index>b?(D=M,M=null):D=M.sibling;var T=h(m,M,x[b],S);if(T===null){M===null&&(M=D);break}e&&M&&T.alternate===null&&t(m,M),d=a(T,d,b),E===null?v=T:E.sibling=T,E=T,M=D}if(b===x.length)return n(m,M),ne&&Qt(m,b),v;if(M===null){for(;b<x.length;b++)M=g(m,x[b],S),M!==null&&(d=a(M,d,b),E===null?v=M:E.sibling=M,E=M);return ne&&Qt(m,b),v}for(M=s(m,M);b<x.length;b++)D=w(M,m,b,x[b],S),D!==null&&(e&&D.alternate!==null&&M.delete(D.key===null?b:D.key),d=a(D,d,b),E===null?v=D:E.sibling=D,E=D);return e&&M.forEach(function(V){return t(m,V)}),ne&&Qt(m,b),v}function N(m,d,x,S){var v=Gn(x);if(typeof v!="function")throw Error(P(150));if(x=v.call(x),x==null)throw Error(P(151));for(var E=v=null,M=d,b=d=0,D=null,T=x.next();M!==null&&!T.done;b++,T=x.next()){M.index>b?(D=M,M=null):D=M.sibling;var V=h(m,M,T.value,S);if(V===null){M===null&&(M=D);break}e&&M&&V.alternate===null&&t(m,M),d=a(V,d,b),E===null?v=V:E.sibling=V,E=V,M=D}if(T.done)return n(m,M),ne&&Qt(m,b),v;if(M===null){for(;!T.done;b++,T=x.next())T=g(m,T.value,S),T!==null&&(d=a(T,d,b),E===null?v=T:E.sibling=T,E=T);return ne&&Qt(m,b),v}for(M=s(m,M);!T.done;b++,T=x.next())T=w(M,m,b,T.value,S),T!==null&&(e&&T.alternate!==null&&M.delete(T.key===null?b:T.key),d=a(T,d,b),E===null?v=T:E.sibling=T,E=T);return e&&M.forEach(function(ee){return t(m,ee)}),ne&&Qt(m,b),v}function y(m,d,x,S){if(typeof x=="object"&&x!==null&&x.type===xn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case $r:e:{for(var v=x.key,E=d;E!==null;){if(E.key===v){if(v=x.type,v===xn){if(E.tag===7){n(m,E.sibling),d=l(E,x.props.children),d.return=m,m=d;break e}}else if(E.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Ct&&ji(v)===E.type){n(m,E.sibling),d=l(E,x.props),d.ref=Yn(m,E,x),d.return=m,m=d;break e}n(m,E);break}else t(m,E);E=E.sibling}x.type===xn?(d=en(x.props.children,m.mode,S,x.key),d.return=m,m=d):(S=gs(x.type,x.key,x.props,null,m.mode,S),S.ref=Yn(m,d,x),S.return=m,m=S)}return o(m);case hn:e:{for(E=x.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===x.containerInfo&&d.stateNode.implementation===x.implementation){n(m,d.sibling),d=l(d,x.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Dl(x,m.mode,S),d.return=m,m=d}return o(m);case Ct:return E=x._init,y(m,d,E(x._payload),S)}if(nr(x))return j(m,d,x,S);if(Gn(x))return N(m,d,x,S);qr(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,d!==null&&d.tag===6?(n(m,d.sibling),d=l(d,x),d.return=m,m=d):(n(m,d),d=Il(x,m.mode,S),d.return=m,m=d),o(m)):n(m,d)}return y}var Rn=fu(!0),pu=fu(!1),Ls=Wt(null),Ts=null,bn=null,so=null;function lo(){so=bn=Ts=null}function ao(e){var t=Ls.current;Z(Ls),e._currentValue=t}function pa(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function Pn(e,t){Ts=e,so=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(so!==e)if(e={context:e,memoizedValue:t,next:null},bn===null){if(Ts===null)throw Error(P(308));bn=e,Ts.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return t}var Yt=null;function oo(e){Yt===null?Yt=[e]:Yt.push(e)}function hu(e,t,n,s){var l=t.interleaved;return l===null?(n.next=n,oo(t)):(n.next=l.next,l.next=n),t.interleaved=n,jt(e,s)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Et=!1;function io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,H&2){var l=s.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),s.pending=t,jt(e,n)}return l=s.interleaved,l===null?(t.next=t,oo(s)):(t.next=l.next,l.next=t),s.interleaved=t,jt(e,n)}function ds(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Qa(e,n)}}function wi(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?l=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Is(e,t,n,s){var l=e.updateQueue;Et=!1;var a=l.firstBaseUpdate,o=l.lastBaseUpdate,i=l.shared.pending;if(i!==null){l.shared.pending=null;var c=i,f=c.next;c.next=null,o===null?a=f:o.next=f,o=c;var p=e.alternate;p!==null&&(p=p.updateQueue,i=p.lastBaseUpdate,i!==o&&(i===null?p.firstBaseUpdate=f:i.next=f,p.lastBaseUpdate=c))}if(a!==null){var g=l.baseState;o=0,p=f=c=null,i=a;do{var h=i.lane,w=i.eventTime;if((s&h)===h){p!==null&&(p=p.next={eventTime:w,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var j=e,N=i;switch(h=t,w=n,N.tag){case 1:if(j=N.payload,typeof j=="function"){g=j.call(w,g,h);break e}g=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=N.payload,h=typeof j=="function"?j.call(w,g,h):j,h==null)break e;g=ae({},g,h);break e;case 2:Et=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[i]:h.push(i))}else w={eventTime:w,lane:h,tag:i.tag,payload:i.payload,callback:i.callback,next:null},p===null?(f=p=w,c=g):p=p.next=w,o|=h;if(i=i.next,i===null){if(i=l.shared.pending,i===null)break;h=i,i=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(p===null&&(c=g),l.baseState=c,l.firstBaseUpdate=f,l.lastBaseUpdate=p,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);an|=o,e.lanes=o,e.memoizedState=g}}function Ni(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],l=s.callback;if(l!==null){if(s.callback=null,s=n,typeof l!="function")throw Error(P(191,l));l.call(s)}}}var Rr={},ut=Wt(Rr),Cr=Wt(Rr),Er=Wt(Rr);function qt(e){if(e===Rr)throw Error(P(174));return e}function co(e,t){switch(Y(Er,t),Y(Cr,e),Y(ut,Rr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kl(t,e)}Z(ut),Y(ut,t)}function Fn(){Z(ut),Z(Cr),Z(Er)}function gu(e){qt(Er.current);var t=qt(ut.current),n=Kl(t,e.type);t!==n&&(Y(Cr,e),Y(ut,n))}function uo(e){Cr.current===e&&(Z(ut),Z(Cr))}var se=Wt(0);function Ds(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ml=[];function mo(){for(var e=0;e<Ml.length;e++)Ml[e]._workInProgressVersionPrimary=null;Ml.length=0}var ms=kt.ReactCurrentDispatcher,_l=kt.ReactCurrentBatchConfig,ln=0,le=null,me=null,pe=null,Rs=!1,ur=!1,Mr=0,bf=0;function be(){throw Error(P(321))}function fo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function po(e,t,n,s,l,a){if(ln=a,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ms.current=e===null||e.memoizedState===null?Mf:_f,e=n(s,l),ur){a=0;do{if(ur=!1,Mr=0,25<=a)throw Error(P(301));a+=1,pe=me=null,t.updateQueue=null,ms.current=zf,e=n(s,l)}while(ur)}if(ms.current=Fs,t=me!==null&&me.next!==null,ln=0,pe=me=le=null,Rs=!1,t)throw Error(P(300));return e}function ho(){var e=Mr!==0;return Mr=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?le.memoizedState=pe=e:pe=pe.next=e,pe}function qe(){if(me===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=pe===null?le.memoizedState:pe.next;if(t!==null)pe=t,me=e;else{if(e===null)throw Error(P(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},pe===null?le.memoizedState=pe=e:pe=pe.next=e}return pe}function _r(e,t){return typeof t=="function"?t(e):t}function zl(e){var t=qe(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var s=me,l=s.baseQueue,a=n.pending;if(a!==null){if(l!==null){var o=l.next;l.next=a.next,a.next=o}s.baseQueue=l=a,n.pending=null}if(l!==null){a=l.next,s=s.baseState;var i=o=null,c=null,f=a;do{var p=f.lane;if((ln&p)===p)c!==null&&(c=c.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),s=f.hasEagerState?f.eagerState:e(s,f.action);else{var g={lane:p,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};c===null?(i=c=g,o=s):c=c.next=g,le.lanes|=p,an|=p}f=f.next}while(f!==null&&f!==a);c===null?o=s:c.next=i,lt(s,t.memoizedState)||(De=!0),t.memoizedState=s,t.baseState=o,t.baseQueue=c,n.lastRenderedState=s}if(e=n.interleaved,e!==null){l=e;do a=l.lane,le.lanes|=a,an|=a,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Pl(e){var t=qe(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var s=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do a=e(a,o.action),o=o.next;while(o!==l);lt(a,t.memoizedState)||(De=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,s]}function yu(){}function vu(e,t){var n=le,s=qe(),l=t(),a=!lt(s.memoizedState,l);if(a&&(s.memoizedState=l,De=!0),s=s.queue,xo(Nu.bind(null,n,s,e),[e]),s.getSnapshot!==t||a||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,zr(9,wu.bind(null,n,s,l,t),void 0,null),ge===null)throw Error(P(349));ln&30||ju(n,t,l)}return l}function ju(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wu(e,t,n,s){t.value=n,t.getSnapshot=s,ku(t)&&bu(e)}function Nu(e,t,n){return n(function(){ku(t)&&bu(e)})}function ku(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function bu(e){var t=jt(e,1);t!==null&&st(t,e,1,-1)}function ki(e){var t=ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_r,lastRenderedState:e},t.queue=e,e=e.dispatch=Ef.bind(null,le,e),[t.memoizedState,e]}function zr(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function Su(){return qe().memoizedState}function fs(e,t,n,s){var l=ot();le.flags|=e,l.memoizedState=zr(1|t,n,void 0,s===void 0?null:s)}function Zs(e,t,n,s){var l=qe();s=s===void 0?null:s;var a=void 0;if(me!==null){var o=me.memoizedState;if(a=o.destroy,s!==null&&fo(s,o.deps)){l.memoizedState=zr(t,n,a,s);return}}le.flags|=e,l.memoizedState=zr(1|t,n,a,s)}function bi(e,t){return fs(8390656,8,e,t)}function xo(e,t){return Zs(2048,8,e,t)}function Cu(e,t){return Zs(4,2,e,t)}function Eu(e,t){return Zs(4,4,e,t)}function Mu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _u(e,t,n){return n=n!=null?n.concat([e]):null,Zs(4,4,Mu.bind(null,t,e),n)}function go(){}function zu(e,t){var n=qe();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&fo(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function Pu(e,t){var n=qe();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&fo(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function Lu(e,t,n){return ln&21?(lt(n,t)||(n=Fc(),le.lanes|=n,an|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function Sf(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var s=_l.transition;_l.transition={};try{e(!1),t()}finally{K=n,_l.transition=s}}function Tu(){return qe().memoizedState}function Cf(e,t,n){var s=Ot(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},Iu(e))Du(t,n);else if(n=hu(e,t,n,s),n!==null){var l=Pe();st(n,e,s,l),Ru(n,t,s)}}function Ef(e,t,n){var s=Ot(e),l={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iu(e))Du(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,i=a(o,n);if(l.hasEagerState=!0,l.eagerState=i,lt(i,o)){var c=t.interleaved;c===null?(l.next=l,oo(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}n=hu(e,t,l,s),n!==null&&(l=Pe(),st(n,e,s,l),Ru(n,t,s))}}function Iu(e){var t=e.alternate;return e===le||t!==null&&t===le}function Du(e,t){ur=Rs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ru(e,t,n){if(n&4194240){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Qa(e,n)}}var Fs={readContext:Ye,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},Mf={readContext:Ye,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:bi,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fs(4194308,4,Mu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){return fs(4,2,e,t)},useMemo:function(e,t){var n=ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=ot();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Cf.bind(null,le,e),[s.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:ki,useDebugValue:go,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=ki(!1),t=e[0];return e=Sf.bind(null,e[1]),ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=le,l=ot();if(ne){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ge===null)throw Error(P(349));ln&30||ju(s,t,n)}l.memoizedState=n;var a={value:n,getSnapshot:t};return l.queue=a,bi(Nu.bind(null,s,a,e),[e]),s.flags|=2048,zr(9,wu.bind(null,s,a,n,t),void 0,null),n},useId:function(){var e=ot(),t=ge.identifierPrefix;if(ne){var n=xt,s=ht;n=(s&~(1<<32-rt(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=bf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_f={readContext:Ye,useCallback:zu,useContext:Ye,useEffect:xo,useImperativeHandle:_u,useInsertionEffect:Cu,useLayoutEffect:Eu,useMemo:Pu,useReducer:zl,useRef:Su,useState:function(){return zl(_r)},useDebugValue:go,useDeferredValue:function(e){var t=qe();return Lu(t,me.memoizedState,e)},useTransition:function(){var e=zl(_r)[0],t=qe().memoizedState;return[e,t]},useMutableSource:yu,useSyncExternalStore:vu,useId:Tu,unstable_isNewReconciler:!1},zf={readContext:Ye,useCallback:zu,useContext:Ye,useEffect:xo,useImperativeHandle:_u,useInsertionEffect:Cu,useLayoutEffect:Eu,useMemo:Pu,useReducer:Pl,useRef:Su,useState:function(){return Pl(_r)},useDebugValue:go,useDeferredValue:function(e){var t=qe();return me===null?t.memoizedState=e:Lu(t,me.memoizedState,e)},useTransition:function(){var e=Pl(_r)[0],t=qe().memoizedState;return[e,t]},useMutableSource:yu,useSyncExternalStore:vu,useId:Tu,unstable_isNewReconciler:!1};function et(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ha(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var el={isMounted:function(e){return(e=e._reactInternals)?dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=Pe(),l=Ot(e),a=gt(s,l);a.payload=t,n!=null&&(a.callback=n),t=Rt(e,a,l),t!==null&&(st(t,e,l,s),ds(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=Pe(),l=Ot(e),a=gt(s,l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Rt(e,a,l),t!==null&&(st(t,e,l,s),ds(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),s=Ot(e),l=gt(n,s);l.tag=2,t!=null&&(l.callback=t),t=Rt(e,l,s),t!==null&&(st(t,e,s,n),ds(t,e,s))}};function Si(e,t,n,s,l,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,a,o):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,s)||!Nr(l,a):!0}function Fu(e,t,n){var s=!1,l=$t,a=t.contextType;return typeof a=="object"&&a!==null?a=Ye(a):(l=Oe(t)?rn:Ee.current,s=t.contextTypes,a=(s=s!=null)?In(e,l):$t),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=el,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ci(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&el.enqueueReplaceState(t,t.state,null)}function xa(e,t,n,s){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},io(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=Ye(a):(a=Oe(t)?rn:Ee.current,l.context=In(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ha(e,t,a,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&el.enqueueReplaceState(l,l.state,null),Is(e,n,l,s),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function On(e,t){try{var n="",s=t;do n+=rm(s),s=s.return;while(s);var l=n}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function Ll(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ga(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Pf=typeof WeakMap=="function"?WeakMap:Map;function Ou(e,t,n){n=gt(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){As||(As=!0,Ea=s),ga(e,t)},n}function Au(e,t,n){n=gt(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var l=t.value;n.payload=function(){return s(l)},n.callback=function(){ga(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ga(e,t),typeof s!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ei(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new Pf;var l=new Set;s.set(t,l)}else l=s.get(t),l===void 0&&(l=new Set,s.set(t,l));l.has(n)||(l.add(n),e=Hf.bind(null,e,t,n),t.then(e,e))}function Mi(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _i(e,t,n,s,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gt(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e)}var Lf=kt.ReactCurrentOwner,De=!1;function ze(e,t,n,s){t.child=e===null?pu(t,null,n,s):Rn(t,e.child,n,s)}function zi(e,t,n,s,l){n=n.render;var a=t.ref;return Pn(t,l),s=po(e,t,n,s,a,l),n=ho(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,wt(e,t,l)):(ne&&n&&to(t),t.flags|=1,ze(e,t,s,l),t.child)}function Pi(e,t,n,s,l){if(e===null){var a=n.type;return typeof a=="function"&&!So(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Uu(e,t,a,s,l)):(e=gs(n.type,null,s,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&l)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Nr,n(o,s)&&e.ref===t.ref)return wt(e,t,l)}return t.flags|=1,e=At(a,s),e.ref=t.ref,e.return=t,t.child=e}function Uu(e,t,n,s,l){if(e!==null){var a=e.memoizedProps;if(Nr(a,s)&&e.ref===t.ref)if(De=!1,t.pendingProps=s=a,(e.lanes&l)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,wt(e,t,l)}return ya(e,t,n,s,l)}function $u(e,t,n){var s=t.pendingProps,l=s.children,a=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Cn,Ue),Ue|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Cn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=a!==null?a.baseLanes:n,Y(Cn,Ue),Ue|=s}else a!==null?(s=a.baseLanes|n,t.memoizedState=null):s=n,Y(Cn,Ue),Ue|=s;return ze(e,t,l,n),t.child}function Bu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ya(e,t,n,s,l){var a=Oe(n)?rn:Ee.current;return a=In(t,a),Pn(t,l),n=po(e,t,n,s,a,l),s=ho(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,wt(e,t,l)):(ne&&s&&to(t),t.flags|=1,ze(e,t,n,l),t.child)}function Li(e,t,n,s,l){if(Oe(n)){var a=!0;_s(t)}else a=!1;if(Pn(t,l),t.stateNode===null)ps(e,t),Fu(t,n,s),xa(t,n,s,l),s=!0;else if(e===null){var o=t.stateNode,i=t.memoizedProps;o.props=i;var c=o.context,f=n.contextType;typeof f=="object"&&f!==null?f=Ye(f):(f=Oe(n)?rn:Ee.current,f=In(t,f));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==s||c!==f)&&Ci(t,o,s,f),Et=!1;var h=t.memoizedState;o.state=h,Is(t,s,o,l),c=t.memoizedState,i!==s||h!==c||Fe.current||Et?(typeof p=="function"&&(ha(t,n,p,s),c=t.memoizedState),(i=Et||Si(t,n,i,s,h,c,f))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),o.props=s,o.state=c,o.context=f,s=i):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{o=t.stateNode,xu(e,t),i=t.memoizedProps,f=t.type===t.elementType?i:et(t.type,i),o.props=f,g=t.pendingProps,h=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ye(c):(c=Oe(n)?rn:Ee.current,c=In(t,c));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==g||h!==c)&&Ci(t,o,s,c),Et=!1,h=t.memoizedState,o.state=h,Is(t,s,o,l);var j=t.memoizedState;i!==g||h!==j||Fe.current||Et?(typeof w=="function"&&(ha(t,n,w,s),j=t.memoizedState),(f=Et||Si(t,n,f,s,h,j,c)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,j,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,j,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=j),o.props=s,o.state=j,o.context=c,s=f):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),s=!1)}return va(e,t,n,s,a,l)}function va(e,t,n,s,l,a){Bu(e,t);var o=(t.flags&128)!==0;if(!s&&!o)return l&&gi(t,n,!1),wt(e,t,a);s=t.stateNode,Lf.current=t;var i=o&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&o?(t.child=Rn(t,e.child,null,a),t.child=Rn(t,null,i,a)):ze(e,t,i,a),t.memoizedState=s.state,l&&gi(t,n,!0),t.child}function Wu(e){var t=e.stateNode;t.pendingContext?xi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xi(e,t.context,!1),co(e,t.containerInfo)}function Ti(e,t,n,s,l){return Dn(),ro(l),t.flags|=256,ze(e,t,n,s),t.child}var ja={dehydrated:null,treeContext:null,retryLane:0};function wa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vu(e,t,n){var s=t.pendingProps,l=se.current,a=!1,o=(t.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(l&2)!==0),i?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Y(se,l&1),e===null)return fa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=s.children,e=s.fallback,a?(s=t.mode,a=t.child,o={mode:"hidden",children:o},!(s&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=rl(o,s,0,null),e=en(e,s,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=wa(n),t.memoizedState=ja,e):yo(t,o));if(l=e.memoizedState,l!==null&&(i=l.dehydrated,i!==null))return Tf(e,t,o,s,i,l,n);if(a){a=s.fallback,o=t.mode,l=e.child,i=l.sibling;var c={mode:"hidden",children:s.children};return!(o&1)&&t.child!==l?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=At(l,c),s.subtreeFlags=l.subtreeFlags&14680064),i!==null?a=At(i,a):(a=en(a,o,n,null),a.flags|=2),a.return=t,s.return=t,s.sibling=a,t.child=s,s=a,a=t.child,o=e.child.memoizedState,o=o===null?wa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=ja,s}return a=e.child,e=a.sibling,s=At(a,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function yo(e,t){return t=rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Zr(e,t,n,s){return s!==null&&ro(s),Rn(t,e.child,null,n),e=yo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tf(e,t,n,s,l,a,o){if(n)return t.flags&256?(t.flags&=-257,s=Ll(Error(P(422))),Zr(e,t,o,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=s.fallback,l=t.mode,s=rl({mode:"visible",children:s.children},l,0,null),a=en(a,l,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,t.mode&1&&Rn(t,e.child,null,o),t.child.memoizedState=wa(o),t.memoizedState=ja,a);if(!(t.mode&1))return Zr(e,t,o,null);if(l.data==="$!"){if(s=l.nextSibling&&l.nextSibling.dataset,s)var i=s.dgst;return s=i,a=Error(P(419)),s=Ll(a,s,void 0),Zr(e,t,o,s)}if(i=(o&e.childLanes)!==0,De||i){if(s=ge,s!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(s.suspendedLanes|o)?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,jt(e,l),st(s,e,l,-1))}return bo(),s=Ll(Error(P(421))),Zr(e,t,o,s)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Gf.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,$e=Dt(l.nextSibling),Be=t,ne=!0,nt=null,e!==null&&(Ge[Qe++]=ht,Ge[Qe++]=xt,Ge[Qe++]=sn,ht=e.id,xt=e.overflow,sn=t),t=yo(t,s.children),t.flags|=4096,t)}function Ii(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),pa(e.return,t,n)}function Tl(e,t,n,s,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=s,a.tail=n,a.tailMode=l)}function Hu(e,t,n){var s=t.pendingProps,l=s.revealOrder,a=s.tail;if(ze(e,t,s.children,n),s=se.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ii(e,n,t);else if(e.tag===19)Ii(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Y(se,s),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Ds(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Tl(t,!1,l,n,a);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ds(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Tl(t,!0,n,null,a);break;case"together":Tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ps(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=At(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=At(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function If(e,t,n){switch(t.tag){case 3:Wu(t),Dn();break;case 5:gu(t);break;case 1:Oe(t.type)&&_s(t);break;case 4:co(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,l=t.memoizedProps.value;Y(Ls,s._currentValue),s._currentValue=l;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Y(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?Vu(e,t,n):(Y(se,se.current&1),e=wt(e,t,n),e!==null?e.sibling:null);Y(se,se.current&1);break;case 19:if(s=(n&t.childLanes)!==0,e.flags&128){if(s)return Hu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Y(se,se.current),s)break;return null;case 22:case 23:return t.lanes=0,$u(e,t,n)}return wt(e,t,n)}var Gu,Na,Qu,Ku;Gu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Na=function(){};Qu=function(e,t,n,s){var l=e.memoizedProps;if(l!==s){e=t.stateNode,qt(ut.current);var a=null;switch(n){case"input":l=Vl(e,l),s=Vl(e,s),a=[];break;case"select":l=ae({},l,{value:void 0}),s=ae({},s,{value:void 0}),a=[];break;case"textarea":l=Ql(e,l),s=Ql(e,s),a=[];break;default:typeof l.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Es)}Jl(n,s);var o;n=null;for(f in l)if(!s.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var i=l[f];for(o in i)i.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(hr.hasOwnProperty(f)?a||(a=[]):(a=a||[]).push(f,null));for(f in s){var c=s[f];if(i=l!=null?l[f]:void 0,s.hasOwnProperty(f)&&c!==i&&(c!=null||i!=null))if(f==="style")if(i){for(o in i)!i.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&i[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(f,n)),n=c;else f==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(a=a||[]).push(f,c)):f==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(f,""+c):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(hr.hasOwnProperty(f)?(c!=null&&f==="onScroll"&&q("scroll",e),a||i===c||(a=[])):(a=a||[]).push(f,c))}n&&(a=a||[]).push("style",n);var f=a;(t.updateQueue=f)&&(t.flags|=4)}};Ku=function(e,t,n,s){n!==s&&(t.flags|=4)};function qn(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,s|=l.subtreeFlags&14680064,s|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function Df(e,t,n){var s=t.pendingProps;switch(no(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Oe(t.type)&&Ms(),Se(t),null;case 3:return s=t.stateNode,Fn(),Z(Fe),Z(Ee),mo(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Yr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nt!==null&&(za(nt),nt=null))),Na(e,t),Se(t),null;case 5:uo(t);var l=qt(Er.current);if(n=t.type,e!==null&&t.stateNode!=null)Qu(e,t,n,s,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(P(166));return Se(t),null}if(e=qt(ut.current),Yr(t)){s=t.stateNode,n=t.type;var a=t.memoizedProps;switch(s[it]=t,s[Sr]=a,e=(t.mode&1)!==0,n){case"dialog":q("cancel",s),q("close",s);break;case"iframe":case"object":case"embed":q("load",s);break;case"video":case"audio":for(l=0;l<sr.length;l++)q(sr[l],s);break;case"source":q("error",s);break;case"img":case"image":case"link":q("error",s),q("load",s);break;case"details":q("toggle",s);break;case"input":Wo(s,a),q("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!a.multiple},q("invalid",s);break;case"textarea":Ho(s,a),q("invalid",s)}Jl(n,a),l=null;for(var o in a)if(a.hasOwnProperty(o)){var i=a[o];o==="children"?typeof i=="string"?s.textContent!==i&&(a.suppressHydrationWarning!==!0&&Xr(s.textContent,i,e),l=["children",i]):typeof i=="number"&&s.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&Xr(s.textContent,i,e),l=["children",""+i]):hr.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&q("scroll",s)}switch(n){case"input":Br(s),Vo(s,a,!0);break;case"textarea":Br(s),Go(s);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(s.onclick=Es)}s=l,t.updateQueue=s,s!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=o.createElement(n,{is:s.is}):(e=o.createElement(n),n==="select"&&(o=e,s.multiple?o.multiple=!0:s.size&&(o.size=s.size))):e=o.createElementNS(e,n),e[it]=t,e[Sr]=s,Gu(e,t,!1,!1),t.stateNode=e;e:{switch(o=Xl(n,s),n){case"dialog":q("cancel",e),q("close",e),l=s;break;case"iframe":case"object":case"embed":q("load",e),l=s;break;case"video":case"audio":for(l=0;l<sr.length;l++)q(sr[l],e);l=s;break;case"source":q("error",e),l=s;break;case"img":case"image":case"link":q("error",e),q("load",e),l=s;break;case"details":q("toggle",e),l=s;break;case"input":Wo(e,s),l=Vl(e,s),q("invalid",e);break;case"option":l=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},l=ae({},s,{value:void 0}),q("invalid",e);break;case"textarea":Ho(e,s),l=Ql(e,s),q("invalid",e);break;default:l=s}Jl(n,l),i=l;for(a in i)if(i.hasOwnProperty(a)){var c=i[a];a==="style"?Sc(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&kc(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&xr(e,c):typeof c=="number"&&xr(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(hr.hasOwnProperty(a)?c!=null&&a==="onScroll"&&q("scroll",e):c!=null&&$a(e,a,c,o))}switch(n){case"input":Br(e),Vo(e,s,!1);break;case"textarea":Br(e),Go(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Ut(s.value));break;case"select":e.multiple=!!s.multiple,a=s.value,a!=null?En(e,!!s.multiple,a,!1):s.defaultValue!=null&&En(e,!!s.multiple,s.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Es)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)Ku(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(P(166));if(n=qt(Er.current),qt(ut.current),Yr(t)){if(s=t.stateNode,n=t.memoizedProps,s[it]=t,(a=s.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:Xr(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xr(s.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[it]=t,t.stateNode=s}return Se(t),null;case 13:if(Z(se),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&$e!==null&&t.mode&1&&!(t.flags&128))mu(),Dn(),t.flags|=98560,a=!1;else if(a=Yr(t),s!==null&&s.dehydrated!==null){if(e===null){if(!a)throw Error(P(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(P(317));a[it]=t}else Dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),a=!1}else nt!==null&&(za(nt),nt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?fe===0&&(fe=3):bo())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return Fn(),Na(e,t),e===null&&kr(t.stateNode.containerInfo),Se(t),null;case 10:return ao(t.type._context),Se(t),null;case 17:return Oe(t.type)&&Ms(),Se(t),null;case 19:if(Z(se),a=t.memoizedState,a===null)return Se(t),null;if(s=(t.flags&128)!==0,o=a.rendering,o===null)if(s)qn(a,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ds(e),o!==null){for(t.flags|=128,qn(a,!1),s=o.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)a=n,e=s,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(se,se.current&1|2),t.child}e=e.sibling}a.tail!==null&&ce()>An&&(t.flags|=128,s=!0,qn(a,!1),t.lanes=4194304)}else{if(!s)if(e=Ds(o),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ne)return Se(t),null}else 2*ce()-a.renderingStartTime>An&&n!==1073741824&&(t.flags|=128,s=!0,qn(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ce(),t.sibling=null,n=se.current,Y(se,s?n&1|2:n&1),t):(Se(t),null);case 22:case 23:return ko(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Ue&1073741824&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Rf(e,t){switch(no(t),t.tag){case 1:return Oe(t.type)&&Ms(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fn(),Z(Fe),Z(Ee),mo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return uo(t),null;case 13:if(Z(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(se),null;case 4:return Fn(),null;case 10:return ao(t.type._context),null;case 22:case 23:return ko(),null;case 24:return null;default:return null}}var es=!1,Ce=!1,Ff=typeof WeakSet=="function"?WeakSet:Set,I=null;function Sn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){oe(e,t,s)}else n.current=null}function ka(e,t,n){try{n()}catch(s){oe(e,t,s)}}var Di=!1;function Of(e,t){if(aa=bs,e=Zc(),eo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var l=s.anchorOffset,a=s.focusNode;s=s.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,i=-1,c=-1,f=0,p=0,g=e,h=null;t:for(;;){for(var w;g!==n||l!==0&&g.nodeType!==3||(i=o+l),g!==a||s!==0&&g.nodeType!==3||(c=o+s),g.nodeType===3&&(o+=g.nodeValue.length),(w=g.firstChild)!==null;)h=g,g=w;for(;;){if(g===e)break t;if(h===n&&++f===l&&(i=o),h===a&&++p===s&&(c=o),(w=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=w}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(oa={focusedElem:e,selectionRange:n},bs=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var N=j.memoizedProps,y=j.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?N:et(t.type,N),y);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(S){oe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return j=Di,Di=!1,j}function dr(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&ka(t,n,a)}l=l.next}while(l!==s)}}function tl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function ba(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ju(e){var t=e.alternate;t!==null&&(e.alternate=null,Ju(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[Sr],delete t[ua],delete t[jf],delete t[wf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xu(e){return e.tag===5||e.tag===3||e.tag===4}function Ri(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sa(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Es));else if(s!==4&&(e=e.child,e!==null))for(Sa(e,t,n),e=e.sibling;e!==null;)Sa(e,t,n),e=e.sibling}function Ca(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ca(e,t,n),e=e.sibling;e!==null;)Ca(e,t,n),e=e.sibling}var ye=null,tt=!1;function bt(e,t,n){for(n=n.child;n!==null;)Yu(e,t,n),n=n.sibling}function Yu(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Qs,n)}catch{}switch(n.tag){case 5:Ce||Sn(n,t);case 6:var s=ye,l=tt;ye=null,bt(e,t,n),ye=s,tt=l,ye!==null&&(tt?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(tt?(e=ye,n=n.stateNode,e.nodeType===8?Cl(e.parentNode,n):e.nodeType===1&&Cl(e,n),jr(e)):Cl(ye,n.stateNode));break;case 4:s=ye,l=tt,ye=n.stateNode.containerInfo,tt=!0,bt(e,t,n),ye=s,tt=l;break;case 0:case 11:case 14:case 15:if(!Ce&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){l=s=s.next;do{var a=l,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&ka(n,t,o),l=l.next}while(l!==s)}bt(e,t,n);break;case 1:if(!Ce&&(Sn(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(i){oe(n,t,i)}bt(e,t,n);break;case 21:bt(e,t,n);break;case 22:n.mode&1?(Ce=(s=Ce)||n.memoizedState!==null,bt(e,t,n),Ce=s):bt(e,t,n);break;default:bt(e,t,n)}}function Fi(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ff),t.forEach(function(s){var l=Qf.bind(null,e,s);n.has(s)||(n.add(s),s.then(l,l))})}}function Ze(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];try{var a=e,o=t,i=o;e:for(;i!==null;){switch(i.tag){case 5:ye=i.stateNode,tt=!1;break e;case 3:ye=i.stateNode.containerInfo,tt=!0;break e;case 4:ye=i.stateNode.containerInfo,tt=!0;break e}i=i.return}if(ye===null)throw Error(P(160));Yu(a,o,l),ye=null,tt=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(f){oe(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qu(t,e),t=t.sibling}function qu(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),at(e),s&4){try{dr(3,e,e.return),tl(3,e)}catch(N){oe(e,e.return,N)}try{dr(5,e,e.return)}catch(N){oe(e,e.return,N)}}break;case 1:Ze(t,e),at(e),s&512&&n!==null&&Sn(n,n.return);break;case 5:if(Ze(t,e),at(e),s&512&&n!==null&&Sn(n,n.return),e.flags&32){var l=e.stateNode;try{xr(l,"")}catch(N){oe(e,e.return,N)}}if(s&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&jc(l,a),Xl(i,o);var f=Xl(i,a);for(o=0;o<c.length;o+=2){var p=c[o],g=c[o+1];p==="style"?Sc(l,g):p==="dangerouslySetInnerHTML"?kc(l,g):p==="children"?xr(l,g):$a(l,p,g,f)}switch(i){case"input":Hl(l,a);break;case"textarea":wc(l,a);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var w=a.value;w!=null?En(l,!!a.multiple,w,!1):h!==!!a.multiple&&(a.defaultValue!=null?En(l,!!a.multiple,a.defaultValue,!0):En(l,!!a.multiple,a.multiple?[]:"",!1))}l[Sr]=a}catch(N){oe(e,e.return,N)}}break;case 6:if(Ze(t,e),at(e),s&4){if(e.stateNode===null)throw Error(P(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(N){oe(e,e.return,N)}}break;case 3:if(Ze(t,e),at(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{jr(t.containerInfo)}catch(N){oe(e,e.return,N)}break;case 4:Ze(t,e),at(e);break;case 13:Ze(t,e),at(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(wo=ce())),s&4&&Fi(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(f=Ce)||p,Ze(t,e),Ce=f):Ze(t,e),at(e),s&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!p&&e.mode&1)for(I=e,p=e.child;p!==null;){for(g=I=p;I!==null;){switch(h=I,w=h.child,h.tag){case 0:case 11:case 14:case 15:dr(4,h,h.return);break;case 1:Sn(h,h.return);var j=h.stateNode;if(typeof j.componentWillUnmount=="function"){s=h,n=h.return;try{t=s,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(N){oe(s,n,N)}}break;case 5:Sn(h,h.return);break;case 22:if(h.memoizedState!==null){Ai(g);continue}}w!==null?(w.return=h,I=w):Ai(g)}p=p.sibling}e:for(p=null,g=e;;){if(g.tag===5){if(p===null){p=g;try{l=g.stateNode,f?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=g.stateNode,c=g.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=bc("display",o))}catch(N){oe(e,e.return,N)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=f?"":g.memoizedProps}catch(N){oe(e,e.return,N)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ze(t,e),at(e),s&4&&Fi(e);break;case 21:break;default:Ze(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xu(n)){var s=n;break e}n=n.return}throw Error(P(160))}switch(s.tag){case 5:var l=s.stateNode;s.flags&32&&(xr(l,""),s.flags&=-33);var a=Ri(e);Ca(e,a,l);break;case 3:case 4:var o=s.stateNode.containerInfo,i=Ri(e);Sa(e,i,o);break;default:throw Error(P(161))}}catch(c){oe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Af(e,t,n){I=e,Zu(e)}function Zu(e,t,n){for(var s=(e.mode&1)!==0;I!==null;){var l=I,a=l.child;if(l.tag===22&&s){var o=l.memoizedState!==null||es;if(!o){var i=l.alternate,c=i!==null&&i.memoizedState!==null||Ce;i=es;var f=Ce;if(es=o,(Ce=c)&&!f)for(I=l;I!==null;)o=I,c=o.child,o.tag===22&&o.memoizedState!==null?Ui(l):c!==null?(c.return=o,I=c):Ui(l);for(;a!==null;)I=a,Zu(a),a=a.sibling;I=l,es=i,Ce=f}Oi(e)}else l.subtreeFlags&8772&&a!==null?(a.return=l,I=a):Oi(e)}}function Oi(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||tl(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Ce)if(n===null)s.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:et(t.type,n.memoizedProps);s.componentDidUpdate(l,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Ni(t,a,s);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ni(t,o,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var p=f.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&jr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ce||t.flags&512&&ba(t)}catch(h){oe(t,t.return,h)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Ai(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Ui(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{tl(4,t)}catch(c){oe(t,n,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var l=t.return;try{s.componentDidMount()}catch(c){oe(t,l,c)}}var a=t.return;try{ba(t)}catch(c){oe(t,a,c)}break;case 5:var o=t.return;try{ba(t)}catch(c){oe(t,o,c)}}}catch(c){oe(t,t.return,c)}if(t===e){I=null;break}var i=t.sibling;if(i!==null){i.return=t.return,I=i;break}I=t.return}}var Uf=Math.ceil,Os=kt.ReactCurrentDispatcher,vo=kt.ReactCurrentOwner,Xe=kt.ReactCurrentBatchConfig,H=0,ge=null,ue=null,ve=0,Ue=0,Cn=Wt(0),fe=0,Pr=null,an=0,nl=0,jo=0,mr=null,Ie=null,wo=0,An=1/0,ft=null,As=!1,Ea=null,Ft=null,ts=!1,Pt=null,Us=0,fr=0,Ma=null,hs=-1,xs=0;function Pe(){return H&6?ce():hs!==-1?hs:hs=ce()}function Ot(e){return e.mode&1?H&2&&ve!==0?ve&-ve:kf.transition!==null?(xs===0&&(xs=Fc()),xs):(e=K,e!==0||(e=window.event,e=e===void 0?16:Vc(e.type)),e):1}function st(e,t,n,s){if(50<fr)throw fr=0,Ma=null,Error(P(185));Tr(e,n,s),(!(H&2)||e!==ge)&&(e===ge&&(!(H&2)&&(nl|=n),fe===4&&_t(e,ve)),Ae(e,s),n===1&&H===0&&!(t.mode&1)&&(An=ce()+500,qs&&Vt()))}function Ae(e,t){var n=e.callbackNode;Nm(e,t);var s=ks(e,e===ge?ve:0);if(s===0)n!==null&&Jo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&Jo(n),t===1)e.tag===0?Nf($i.bind(null,e)):cu($i.bind(null,e)),yf(function(){!(H&6)&&Vt()}),n=null;else{switch(Oc(s)){case 1:n=Ga;break;case 4:n=Dc;break;case 16:n=Ns;break;case 536870912:n=Rc;break;default:n=Ns}n=od(n,ed.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ed(e,t){if(hs=-1,xs=0,H&6)throw Error(P(327));var n=e.callbackNode;if(Ln()&&e.callbackNode!==n)return null;var s=ks(e,e===ge?ve:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=$s(e,s);else{t=s;var l=H;H|=2;var a=nd();(ge!==e||ve!==t)&&(ft=null,An=ce()+500,Zt(e,t));do try{Wf();break}catch(i){td(e,i)}while(!0);lo(),Os.current=a,H=l,ue!==null?t=0:(ge=null,ve=0,t=fe)}if(t!==0){if(t===2&&(l=ta(e),l!==0&&(s=l,t=_a(e,l))),t===1)throw n=Pr,Zt(e,0),_t(e,s),Ae(e,ce()),n;if(t===6)_t(e,s);else{if(l=e.current.alternate,!(s&30)&&!$f(l)&&(t=$s(e,s),t===2&&(a=ta(e),a!==0&&(s=a,t=_a(e,a))),t===1))throw n=Pr,Zt(e,0),_t(e,s),Ae(e,ce()),n;switch(e.finishedWork=l,e.finishedLanes=s,t){case 0:case 1:throw Error(P(345));case 2:Kt(e,Ie,ft);break;case 3:if(_t(e,s),(s&130023424)===s&&(t=wo+500-ce(),10<t)){if(ks(e,0)!==0)break;if(l=e.suspendedLanes,(l&s)!==s){Pe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ca(Kt.bind(null,e,Ie,ft),t);break}Kt(e,Ie,ft);break;case 4:if(_t(e,s),(s&4194240)===s)break;for(t=e.eventTimes,l=-1;0<s;){var o=31-rt(s);a=1<<o,o=t[o],o>l&&(l=o),s&=~a}if(s=l,s=ce()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Uf(s/1960))-s,10<s){e.timeoutHandle=ca(Kt.bind(null,e,Ie,ft),s);break}Kt(e,Ie,ft);break;case 5:Kt(e,Ie,ft);break;default:throw Error(P(329))}}}return Ae(e,ce()),e.callbackNode===n?ed.bind(null,e):null}function _a(e,t){var n=mr;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=$s(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&za(t)),e}function za(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function $f(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var l=n[s],a=l.getSnapshot;l=l.value;try{if(!lt(a(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~jo,t&=~nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),s=1<<n;e[n]=-1,t&=~s}}function $i(e){if(H&6)throw Error(P(327));Ln();var t=ks(e,0);if(!(t&1))return Ae(e,ce()),null;var n=$s(e,t);if(e.tag!==0&&n===2){var s=ta(e);s!==0&&(t=s,n=_a(e,s))}if(n===1)throw n=Pr,Zt(e,0),_t(e,t),Ae(e,ce()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,Ie,ft),Ae(e,ce()),null}function No(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(An=ce()+500,qs&&Vt())}}function on(e){Pt!==null&&Pt.tag===0&&!(H&6)&&Ln();var t=H;H|=1;var n=Xe.transition,s=K;try{if(Xe.transition=null,K=1,e)return e()}finally{K=s,Xe.transition=n,H=t,!(H&6)&&Vt()}}function ko(){Ue=Cn.current,Z(Cn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gf(n)),ue!==null)for(n=ue.return;n!==null;){var s=n;switch(no(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Ms();break;case 3:Fn(),Z(Fe),Z(Ee),mo();break;case 5:uo(s);break;case 4:Fn();break;case 13:Z(se);break;case 19:Z(se);break;case 10:ao(s.type._context);break;case 22:case 23:ko()}n=n.return}if(ge=e,ue=e=At(e.current,null),ve=Ue=t,fe=0,Pr=null,jo=nl=an=0,Ie=mr=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],s=n.interleaved,s!==null){n.interleaved=null;var l=s.next,a=n.pending;if(a!==null){var o=a.next;a.next=l,s.next=o}n.pending=s}Yt=null}return e}function td(e,t){do{var n=ue;try{if(lo(),ms.current=Fs,Rs){for(var s=le.memoizedState;s!==null;){var l=s.queue;l!==null&&(l.pending=null),s=s.next}Rs=!1}if(ln=0,pe=me=le=null,ur=!1,Mr=0,vo.current=null,n===null||n.return===null){fe=1,Pr=t,ue=null;break}e:{var a=e,o=n.return,i=n,c=t;if(t=ve,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=c,p=i,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=Mi(o);if(w!==null){w.flags&=-257,_i(w,o,i,a,t),w.mode&1&&Ei(a,f,t),t=w,c=f;var j=t.updateQueue;if(j===null){var N=new Set;N.add(c),t.updateQueue=N}else j.add(c);break e}else{if(!(t&1)){Ei(a,f,t),bo();break e}c=Error(P(426))}}else if(ne&&i.mode&1){var y=Mi(o);if(y!==null){!(y.flags&65536)&&(y.flags|=256),_i(y,o,i,a,t),ro(On(c,i));break e}}a=c=On(c,i),fe!==4&&(fe=2),mr===null?mr=[a]:mr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=Ou(a,c,t);wi(a,m);break e;case 1:i=c;var d=a.type,x=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ft===null||!Ft.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=Au(a,i,t);wi(a,S);break e}}a=a.return}while(a!==null)}sd(n)}catch(v){t=v,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function nd(){var e=Os.current;return Os.current=Fs,e===null?Fs:e}function bo(){(fe===0||fe===3||fe===2)&&(fe=4),ge===null||!(an&268435455)&&!(nl&268435455)||_t(ge,ve)}function $s(e,t){var n=H;H|=2;var s=nd();(ge!==e||ve!==t)&&(ft=null,Zt(e,t));do try{Bf();break}catch(l){td(e,l)}while(!0);if(lo(),H=n,Os.current=s,ue!==null)throw Error(P(261));return ge=null,ve=0,fe}function Bf(){for(;ue!==null;)rd(ue)}function Wf(){for(;ue!==null&&!fm();)rd(ue)}function rd(e){var t=ad(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?sd(e):ue=t,vo.current=null}function sd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Rf(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ue=null;return}}else if(n=Df(n,t,Ue),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);fe===0&&(fe=5)}function Kt(e,t,n){var s=K,l=Xe.transition;try{Xe.transition=null,K=1,Vf(e,t,n,s)}finally{Xe.transition=l,K=s}return null}function Vf(e,t,n,s){do Ln();while(Pt!==null);if(H&6)throw Error(P(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(km(e,a),e===ge&&(ue=ge=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ts||(ts=!0,od(Ns,function(){return Ln(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Xe.transition,Xe.transition=null;var o=K;K=1;var i=H;H|=4,vo.current=null,Of(e,n),qu(n,e),uf(oa),bs=!!aa,oa=aa=null,e.current=n,Af(n),pm(),H=i,K=o,Xe.transition=a}else e.current=n;if(ts&&(ts=!1,Pt=e,Us=l),a=e.pendingLanes,a===0&&(Ft=null),gm(n.stateNode),Ae(e,ce()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],s(l.value,{componentStack:l.stack,digest:l.digest});if(As)throw As=!1,e=Ea,Ea=null,e;return Us&1&&e.tag!==0&&Ln(),a=e.pendingLanes,a&1?e===Ma?fr++:(fr=0,Ma=e):fr=0,Vt(),null}function Ln(){if(Pt!==null){var e=Oc(Us),t=Xe.transition,n=K;try{if(Xe.transition=null,K=16>e?16:e,Pt===null)var s=!1;else{if(e=Pt,Pt=null,Us=0,H&6)throw Error(P(331));var l=H;for(H|=4,I=e.current;I!==null;){var a=I,o=a.child;if(I.flags&16){var i=a.deletions;if(i!==null){for(var c=0;c<i.length;c++){var f=i[c];for(I=f;I!==null;){var p=I;switch(p.tag){case 0:case 11:case 15:dr(8,p,a)}var g=p.child;if(g!==null)g.return=p,I=g;else for(;I!==null;){p=I;var h=p.sibling,w=p.return;if(Ju(p),p===f){I=null;break}if(h!==null){h.return=w,I=h;break}I=w}}}var j=a.alternate;if(j!==null){var N=j.child;if(N!==null){j.child=null;do{var y=N.sibling;N.sibling=null,N=y}while(N!==null)}}I=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,I=o;else e:for(;I!==null;){if(a=I,a.flags&2048)switch(a.tag){case 0:case 11:case 15:dr(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,I=m;break e}I=a.return}}var d=e.current;for(I=d;I!==null;){o=I;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,I=x;else e:for(o=d;I!==null;){if(i=I,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:tl(9,i)}}catch(v){oe(i,i.return,v)}if(i===o){I=null;break e}var S=i.sibling;if(S!==null){S.return=i.return,I=S;break e}I=i.return}}if(H=l,Vt(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Qs,e)}catch{}s=!0}return s}finally{K=n,Xe.transition=t}}return!1}function Bi(e,t,n){t=On(n,t),t=Ou(e,t,1),e=Rt(e,t,1),t=Pe(),e!==null&&(Tr(e,1,t),Ae(e,t))}function oe(e,t,n){if(e.tag===3)Bi(e,e,n);else for(;t!==null;){if(t.tag===3){Bi(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ft===null||!Ft.has(s))){e=On(n,e),e=Au(t,e,1),t=Rt(t,e,1),e=Pe(),t!==null&&(Tr(t,1,e),Ae(t,e));break}}t=t.return}}function Hf(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(ve&n)===n&&(fe===4||fe===3&&(ve&130023424)===ve&&500>ce()-wo?Zt(e,0):jo|=n),Ae(e,t)}function ld(e,t){t===0&&(e.mode&1?(t=Hr,Hr<<=1,!(Hr&130023424)&&(Hr=4194304)):t=1);var n=Pe();e=jt(e,t),e!==null&&(Tr(e,t,n),Ae(e,n))}function Gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ld(e,n)}function Qf(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(P(314))}s!==null&&s.delete(t),ld(e,n)}var ad;ad=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,If(e,t,n);De=!!(e.flags&131072)}else De=!1,ne&&t.flags&1048576&&uu(t,Ps,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;ps(e,t),e=t.pendingProps;var l=In(t,Ee.current);Pn(t,n),l=po(null,t,s,e,l,n);var a=ho();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(s)?(a=!0,_s(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,io(t),l.updater=el,t.stateNode=l,l._reactInternals=t,xa(t,s,e,n),t=va(null,t,s,!0,a,n)):(t.tag=0,ne&&a&&to(t),ze(null,t,l,n),t=t.child),t;case 16:s=t.elementType;e:{switch(ps(e,t),e=t.pendingProps,l=s._init,s=l(s._payload),t.type=s,l=t.tag=Jf(s),e=et(s,e),l){case 0:t=ya(null,t,s,e,n);break e;case 1:t=Li(null,t,s,e,n);break e;case 11:t=zi(null,t,s,e,n);break e;case 14:t=Pi(null,t,s,et(s.type,e),n);break e}throw Error(P(306,s,""))}return t;case 0:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:et(s,l),ya(e,t,s,l,n);case 1:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:et(s,l),Li(e,t,s,l,n);case 3:e:{if(Wu(t),e===null)throw Error(P(387));s=t.pendingProps,a=t.memoizedState,l=a.element,xu(e,t),Is(t,s,null,n);var o=t.memoizedState;if(s=o.element,a.isDehydrated)if(a={element:s,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=On(Error(P(423)),t),t=Ti(e,t,s,n,l);break e}else if(s!==l){l=On(Error(P(424)),t),t=Ti(e,t,s,n,l);break e}else for($e=Dt(t.stateNode.containerInfo.firstChild),Be=t,ne=!0,nt=null,n=pu(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dn(),s===l){t=wt(e,t,n);break e}ze(e,t,s,n)}t=t.child}return t;case 5:return gu(t),e===null&&fa(t),s=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,o=l.children,ia(s,l)?o=null:a!==null&&ia(s,a)&&(t.flags|=32),Bu(e,t),ze(e,t,o,n),t.child;case 6:return e===null&&fa(t),null;case 13:return Vu(e,t,n);case 4:return co(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Rn(t,null,s,n):ze(e,t,s,n),t.child;case 11:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:et(s,l),zi(e,t,s,l,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,l=t.pendingProps,a=t.memoizedProps,o=l.value,Y(Ls,s._currentValue),s._currentValue=o,a!==null)if(lt(a.value,o)){if(a.children===l.children&&!Fe.current){t=wt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){o=a.child;for(var c=i.firstContext;c!==null;){if(c.context===s){if(a.tag===1){c=gt(-1,n&-n),c.tag=2;var f=a.updateQueue;if(f!==null){f=f.shared;var p=f.pending;p===null?c.next=c:(c.next=p.next,p.next=c),f.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),pa(a.return,n,t),i.lanes|=n;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(P(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),pa(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ze(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,s=t.pendingProps.children,Pn(t,n),l=Ye(l),s=s(l),t.flags|=1,ze(e,t,s,n),t.child;case 14:return s=t.type,l=et(s,t.pendingProps),l=et(s.type,l),Pi(e,t,s,l,n);case 15:return Uu(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:et(s,l),ps(e,t),t.tag=1,Oe(s)?(e=!0,_s(t)):e=!1,Pn(t,n),Fu(t,s,l),xa(t,s,l,n),va(null,t,s,!0,e,n);case 19:return Hu(e,t,n);case 22:return $u(e,t,n)}throw Error(P(156,t.tag))};function od(e,t){return Ic(e,t)}function Kf(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,n,s){return new Kf(e,t,n,s)}function So(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jf(e){if(typeof e=="function")return So(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wa)return 11;if(e===Va)return 14}return 2}function At(e,t){var n=e.alternate;return n===null?(n=Ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function gs(e,t,n,s,l,a){var o=2;if(s=e,typeof e=="function")So(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case xn:return en(n.children,l,a,t);case Ba:o=8,l|=8;break;case Ul:return e=Ke(12,n,t,l|2),e.elementType=Ul,e.lanes=a,e;case $l:return e=Ke(13,n,t,l),e.elementType=$l,e.lanes=a,e;case Bl:return e=Ke(19,n,t,l),e.elementType=Bl,e.lanes=a,e;case gc:return rl(n,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hc:o=10;break e;case xc:o=9;break e;case Wa:o=11;break e;case Va:o=14;break e;case Ct:o=16,s=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Ke(o,n,t,l),t.elementType=e,t.type=s,t.lanes=a,t}function en(e,t,n,s){return e=Ke(7,e,s,t),e.lanes=n,e}function rl(e,t,n,s){return e=Ke(22,e,s,t),e.elementType=gc,e.lanes=n,e.stateNode={isHidden:!1},e}function Il(e,t,n){return e=Ke(6,e,null,t),e.lanes=n,e}function Dl(e,t,n){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xf(e,t,n,s,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hl(0),this.expirationTimes=hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hl(0),this.identifierPrefix=s,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Co(e,t,n,s,l,a,o,i,c){return e=new Xf(e,t,n,i,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ke(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},io(a),e}function Yf(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hn,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function id(e){if(!e)return $t;e=e._reactInternals;e:{if(dn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Oe(n))return iu(e,n,t)}return t}function cd(e,t,n,s,l,a,o,i,c){return e=Co(n,s,!0,e,l,a,o,i,c),e.context=id(null),n=e.current,s=Pe(),l=Ot(n),a=gt(s,l),a.callback=t??null,Rt(n,a,l),e.current.lanes=l,Tr(e,l,s),Ae(e,s),e}function sl(e,t,n,s){var l=t.current,a=Pe(),o=Ot(l);return n=id(n),t.context===null?t.context=n:t.pendingContext=n,t=gt(a,o),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Rt(l,t,o),e!==null&&(st(e,l,o,a),ds(e,l,o)),o}function Bs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wi(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Eo(e,t){Wi(e,t),(e=e.alternate)&&Wi(e,t)}function qf(){return null}var ud=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mo(e){this._internalRoot=e}ll.prototype.render=Mo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));sl(e,t,null,null)};ll.prototype.unmount=Mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){sl(null,e,null,null)}),t[vt]=null}};function ll(e){this._internalRoot=e}ll.prototype.unstable_scheduleHydration=function(e){if(e){var t=$c();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&Wc(e)}};function _o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vi(){}function Zf(e,t,n,s,l){if(l){if(typeof s=="function"){var a=s;s=function(){var f=Bs(o);a.call(f)}}var o=cd(t,s,e,0,null,!1,!1,"",Vi);return e._reactRootContainer=o,e[vt]=o.current,kr(e.nodeType===8?e.parentNode:e),on(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof s=="function"){var i=s;s=function(){var f=Bs(c);i.call(f)}}var c=Co(e,0,!1,null,null,!1,!1,"",Vi);return e._reactRootContainer=c,e[vt]=c.current,kr(e.nodeType===8?e.parentNode:e),on(function(){sl(t,c,n,s)}),c}function ol(e,t,n,s,l){var a=n._reactRootContainer;if(a){var o=a;if(typeof l=="function"){var i=l;l=function(){var c=Bs(o);i.call(c)}}sl(t,o,e,l)}else o=Zf(n,t,e,l,s);return Bs(o)}Ac=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=rr(t.pendingLanes);n!==0&&(Qa(t,n|1),Ae(t,ce()),!(H&6)&&(An=ce()+500,Vt()))}break;case 13:on(function(){var s=jt(e,1);if(s!==null){var l=Pe();st(s,e,1,l)}}),Eo(e,1)}};Ka=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=Pe();st(t,e,134217728,n)}Eo(e,134217728)}};Uc=function(e){if(e.tag===13){var t=Ot(e),n=jt(e,t);if(n!==null){var s=Pe();st(n,e,t,s)}Eo(e,t)}};$c=function(){return K};Bc=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};ql=function(e,t,n){switch(t){case"input":if(Hl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var l=Ys(s);if(!l)throw Error(P(90));vc(s),Hl(s,l)}}}break;case"textarea":wc(e,n);break;case"select":t=n.value,t!=null&&En(e,!!n.multiple,t,!1)}};Mc=No;_c=on;var ep={usingClientEntryPoint:!1,Events:[Dr,jn,Ys,Cc,Ec,No]},Zn={findFiberByHostInstance:Xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tp={bundleType:Zn.bundleType,version:Zn.version,rendererPackageName:Zn.rendererPackageName,rendererConfig:Zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lc(e),e===null?null:e.stateNode},findFiberByHostInstance:Zn.findFiberByHostInstance||qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ns.isDisabled&&ns.supportsFiber)try{Qs=ns.inject(tp),ct=ns}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ep;Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_o(t))throw Error(P(200));return Yf(e,t,null,n)};Ve.createRoot=function(e,t){if(!_o(e))throw Error(P(299));var n=!1,s="",l=ud;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Co(e,1,!1,null,null,n,!1,s,l),e[vt]=t.current,kr(e.nodeType===8?e.parentNode:e),new Mo(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Lc(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return on(e)};Ve.hydrate=function(e,t,n){if(!al(t))throw Error(P(200));return ol(null,e,t,!0,n)};Ve.hydrateRoot=function(e,t,n){if(!_o(e))throw Error(P(405));var s=n!=null&&n.hydratedSources||null,l=!1,a="",o=ud;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=cd(t,null,e,1,n??null,l,!1,a,o),e[vt]=t.current,kr(e),s)for(e=0;e<s.length;e++)n=s[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ll(t)};Ve.render=function(e,t,n){if(!al(t))throw Error(P(200));return ol(null,e,t,!1,n)};Ve.unmountComponentAtNode=function(e){if(!al(e))throw Error(P(40));return e._reactRootContainer?(on(function(){ol(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1};Ve.unstable_batchedUpdates=No;Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!al(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return ol(e,t,n,!1,s)};Ve.version="18.3.1-next-f1338f8080-20240426";function dd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dd)}catch(e){console.error(e)}}dd(),dc.exports=Ve;var np=dc.exports,md,Hi=np;md=Hi.createRoot,Hi.hydrateRoot;const fd=L.createContext(void 0),Gi={email:"admin",password:"admin"},Jt=[{id:"1",email:"admin@photoalbums.com",name:"Администратор",role:"admin",department:"Управление",position:"Главный менеджер",salary:8e4,phone:"+7 (495) 123-45-67",telegram:"@admin",createdAt:new Date("2024-01-01")},{id:"2",email:"anna.ivanova@photoalbums.com",name:"Анна Иванова",role:"photographer",department:"Фотостудия",position:"Старший фотограф",salary:6e4,phone:"+7 (495) 123-45-68",telegram:"@anna_photo",createdAt:new Date("2024-01-15")},{id:"3",email:"elena.sidorova@photoalbums.com",name:"Елена Сидорова",role:"designer",department:"Дизайн",position:"Ведущий дизайнер",salary:55e3,phone:"+7 (495) 123-45-69",telegram:"@elena_design",createdAt:new Date("2024-01-20")},{id:"4",email:"mikhail.petrov@photoalbums.com",name:"Михаил Петров",role:"photographer",department:"Фотостудия",position:"Фотограф",salary:45e3,phone:"+7 (495) 123-45-70",telegram:"@mikhail_photo",createdAt:new Date("2024-02-01")}],rp=[{id:"1",title:"Свадебный альбом Анны и Михаила",albumType:"Свадебный альбом",description:"Создание премиального свадебного альбома с фотосессией в парке и студии",status:"in-progress",manager:Jt[0],photographers:[Jt[1]],designers:[Jt[2]],deadline:new Date("2024-03-15"),createdAt:new Date("2024-02-01"),updatedAt:new Date("2024-02-10"),photosCount:0,designsCount:0,files:[]},{id:"2",title:"Выпускной альбом 11-А класса",albumType:"Выпускной альбом",description:"Групповые и индивидуальные фотографии выпускников с торжественной церемонии",status:"planning",manager:Jt[0],photographers:[Jt[3]],designers:[Jt[2]],deadline:new Date("2024-06-01"),createdAt:new Date("2024-02-05"),updatedAt:new Date("2024-02-05"),photosCount:0,designsCount:0,files:[]}],sp=({children:e})=>{const[t,n]=L.useState(null),[s,l]=L.useState(Jt),[a,o]=L.useState(rp),[i,c]=L.useState(!0);L.useEffect(()=>{const v=localStorage.getItem("currentUser");if(v)try{n(JSON.parse(v))}catch{localStorage.removeItem("currentUser")}const E=localStorage.getItem("users");if(E)try{const D=JSON.parse(E).map(T=>({...T,createdAt:new Date(T.createdAt)}));l(D)}catch{localStorage.removeItem("users")}const M=localStorage.getItem("projects");if(M)try{const D=JSON.parse(M).map(T=>({...T,createdAt:new Date(T.createdAt),updatedAt:new Date(T.updatedAt),deadline:new Date(T.deadline),files:T.files.map(V=>({...V,uploadedAt:new Date(V.uploadedAt)}))}));o(D)}catch(b){console.error("Ошибка при загрузке проектов:",b),localStorage.removeItem("projects")}c(!1)},[]),L.useEffect(()=>{a.length>0&&localStorage.setItem("projects",JSON.stringify(a))},[a]);const S={user:t,users:s,projects:a,login:async(v,E)=>{try{if(console.log("=== ПОПЫТКА ВХОДА ==="),console.log("Введенный email:",v),console.log("Введенный пароль:",E),console.log("Всего пользователей в системе:",s.length),console.log("Список всех пользователей:"),s.forEach((b,D)=>{console.log(`${D+1}. Имя: ${b.name}`),console.log(`   Email: "${b.email}"`),console.log(`   Пароль: "${b.password||"НЕТ ПАРОЛЯ"}"`),console.log(`   Роль: ${b.role}`),console.log("   ---")}),v===Gi.email&&E===Gi.password){console.log("✅ Вход как админ");const b=s.find(D=>D.role==="admin")||s[0];return n(b),localStorage.setItem("currentUser",JSON.stringify(b)),!0}console.log("Ищем пользователя среди созданных...");const M=s.find(b=>b.email===v&&b.password===E);return M?(console.log("✅ Пользователь найден:",M.name),n(M),localStorage.setItem("currentUser",JSON.stringify(M)),!0):(console.log("❌ Пользователь не найден"),console.log("Проверяем точные совпадения:"),s.forEach(b=>{const D=b.email===v,T=b.password===E;console.log(`Пользователь ${b.name}:`),console.log(`  Email совпадает: ${D} ("${b.email}" === "${v}")`),console.log(`  Пароль совпадает: ${T} ("${b.password}" === "${E}")`)}),!1)}catch(M){return console.error("Ошибка при входе:",M),!1}},logout:async()=>{n(null),localStorage.removeItem("currentUser")},register:async v=>{try{const E={...v,id:Math.random().toString(36).substr(2,9),createdAt:new Date};return l(M=>[...M,E]),!0}catch(E){return console.error("Registration error:",E),!1}},addUser:async v=>{const E={id:Math.random().toString(36).substr(2,9),name:v.name,email:v.email,role:v.role,department:v.department,position:v.position,salary:v.salary,phone:v.phone,telegram:v.telegram,avatar:v.avatar,password:v.password,createdAt:new Date};console.log("=== СОЗДАНИЕ НОВОГО ПОЛЬЗОВАТЕЛЯ ==="),console.log("Имя:",E.name),console.log("Email для входа:",E.email),console.log("Пароль для входа:",E.password),console.log("Роль:",E.role),console.log("ID:",E.id),l(b=>[...b,E]);const M=[...s,E];localStorage.setItem("users",JSON.stringify(M)),console.log("✅ Пользователь сохранен в localStorage"),console.log("Общее количество пользователей:",M.length)},updateUser:async(v,E)=>{const M=s.map(b=>b.id===v?{...b,...E}:b);if(l(M),localStorage.setItem("users",JSON.stringify(M)),t&&t.id===v){const b={...t,...E};n(b),localStorage.setItem("currentUser",JSON.stringify(b))}},deleteUser:async v=>{const E=s.filter(M=>M.id!==v);l(E),localStorage.setItem("users",JSON.stringify(E)),t&&t.id===v&&(n(null),localStorage.removeItem("currentUser"))},addProject:async v=>{const E={...v,id:Math.random().toString(36).substr(2,9),createdAt:new Date,updatedAt:new Date,photosCount:0,designsCount:0,files:[]};o(M=>{const b=[...M,E];return localStorage.setItem("projects",JSON.stringify(b)),b})},updateProject:async(v,E)=>{o(M=>{const b=M.map(D=>D.id===v?{...D,...E,updatedAt:new Date,photosCount:E.files?E.files.filter(T=>T.type.startsWith("image/")).length:D.photosCount,designsCount:E.files?E.files.filter(T=>T.type.includes("design")||T.name.toLowerCase().includes("макет")||T.name.toLowerCase().includes("design")).length:D.designsCount}:D);return localStorage.setItem("projects",JSON.stringify(b)),b})},deleteProject:async v=>{o(E=>{const M=E.filter(b=>b.id!==v);return localStorage.setItem("projects",JSON.stringify(M)),M})},addFileToProject:async(v,E)=>{const M={...E,id:Math.random().toString(36).substr(2,9),uploadedAt:new Date};o(b=>{const D=b.map(T=>{if(T.id===v){const V=[...T.files,M];return{...T,files:V,photosCount:V.filter(ee=>ee.type.startsWith("image/")).length,designsCount:V.filter(ee=>ee.type.includes("design")||ee.name.toLowerCase().includes("макет")||ee.name.toLowerCase().includes("design")).length,updatedAt:new Date}}return T});return localStorage.setItem("projects",JSON.stringify(D)),D})},removeFileFromProject:async(v,E)=>{o(M=>{const b=M.map(D=>{if(D.id===v){const T=D.files.filter(V=>V.id!==E);return{...D,files:T,photosCount:T.filter(V=>V.type.startsWith("image/")).length,designsCount:T.filter(V=>V.type.includes("design")||V.name.toLowerCase().includes("макет")||V.name.toLowerCase().includes("design")).length,updatedAt:new Date}}return D});return localStorage.setItem("projects",JSON.stringify(b)),b})},isAuthenticated:!!t,loading:i};return r.jsx(fd.Provider,{value:S,children:e})},Me=()=>{const e=L.useContext(fd);if(e===void 0)throw new Error("useAuth must be used within an AuthProvider");return e};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),W=(e,t)=>{const n=L.forwardRef(({color:s="currentColor",size:l=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:i="",children:c,...f},p)=>L.createElement("svg",{ref:p,...lp,width:l,height:l,stroke:s,strokeWidth:o?Number(a)*24/Number(l):a,className:["lucide",`lucide-${ap(e)}`,i].join(" "),...f},[...t.map(([g,h])=>L.createElement(g,h)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=W("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=W("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=W("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=W("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=W("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=W("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=W("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=W("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=W("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=W("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=W("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=W("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=W("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=W("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=W("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=W("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=W("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=W("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=W("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=W("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=W("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=W("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=W("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=W("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=W("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=W("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=W("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=W("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=W("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=W("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=W("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=W("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=W("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=W("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=W("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=W("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=W("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function yd(e){var t,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(t=0;t<l;t++)e[t]&&(n=yd(e[t]))&&(s&&(s+=" "),s+=n)}else for(n in e)e[n]&&(s&&(s+=" "),s+=n);return s}function xp(){for(var e,t,n=0,s="",l=arguments.length;n<l;n++)(e=arguments[n])&&(t=yd(e))&&(s&&(s+=" "),s+=t);return s}const Io="-",gp=e=>{const t=vp(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:s}=e;return{getClassGroupId:o=>{const i=o.split(Io);return i[0]===""&&i.length!==1&&i.shift(),vd(i,t)||yp(o)},getConflictingClassGroupIds:(o,i)=>{const c=n[o]||[];return i&&s[o]?[...c,...s[o]]:c}}},vd=(e,t)=>{var o;if(e.length===0)return t.classGroupId;const n=e[0],s=t.nextPart.get(n),l=s?vd(e.slice(1),s):void 0;if(l)return l;if(t.validators.length===0)return;const a=e.join(Io);return(o=t.validators.find(({validator:i})=>i(a)))==null?void 0:o.classGroupId},Ki=/^\[(.+)\]$/,yp=e=>{if(Ki.test(e)){const t=Ki.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},vp=e=>{const{theme:t,classGroups:n}=e,s={nextPart:new Map,validators:[]};for(const l in n)La(n[l],s,l,t);return s},La=(e,t,n,s)=>{e.forEach(l=>{if(typeof l=="string"){const a=l===""?t:Ji(t,l);a.classGroupId=n;return}if(typeof l=="function"){if(jp(l)){La(l(s),t,n,s);return}t.validators.push({validator:l,classGroupId:n});return}Object.entries(l).forEach(([a,o])=>{La(o,Ji(t,a),n,s)})})},Ji=(e,t)=>{let n=e;return t.split(Io).forEach(s=>{n.nextPart.has(s)||n.nextPart.set(s,{nextPart:new Map,validators:[]}),n=n.nextPart.get(s)}),n},jp=e=>e.isThemeGetter,wp=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,s=new Map;const l=(a,o)=>{n.set(a,o),t++,t>e&&(t=0,s=n,n=new Map)};return{get(a){let o=n.get(a);if(o!==void 0)return o;if((o=s.get(a))!==void 0)return l(a,o),o},set(a,o){n.has(a)?n.set(a,o):l(a,o)}}},Ta="!",Ia=":",Np=Ia.length,kp=e=>{const{prefix:t,experimentalParseClassName:n}=e;let s=l=>{const a=[];let o=0,i=0,c=0,f;for(let j=0;j<l.length;j++){let N=l[j];if(o===0&&i===0){if(N===Ia){a.push(l.slice(c,j)),c=j+Np;continue}if(N==="/"){f=j;continue}}N==="["?o++:N==="]"?o--:N==="("?i++:N===")"&&i--}const p=a.length===0?l:l.substring(c),g=bp(p),h=g!==p,w=f&&f>c?f-c:void 0;return{modifiers:a,hasImportantModifier:h,baseClassName:g,maybePostfixModifierPosition:w}};if(t){const l=t+Ia,a=s;s=o=>o.startsWith(l)?a(o.substring(l.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:o,maybePostfixModifierPosition:void 0}}if(n){const l=s;s=a=>n({className:a,parseClassName:l})}return s},bp=e=>e.endsWith(Ta)?e.substring(0,e.length-1):e.startsWith(Ta)?e.substring(1):e,Sp=e=>{const t=Object.fromEntries(e.orderSensitiveModifiers.map(s=>[s,!0]));return s=>{if(s.length<=1)return s;const l=[];let a=[];return s.forEach(o=>{o[0]==="["||t[o]?(l.push(...a.sort(),o),a=[]):a.push(o)}),l.push(...a.sort()),l}},Cp=e=>({cache:wp(e.cacheSize),parseClassName:kp(e),sortModifiers:Sp(e),...gp(e)}),Ep=/\s+/,Mp=(e,t)=>{const{parseClassName:n,getClassGroupId:s,getConflictingClassGroupIds:l,sortModifiers:a}=t,o=[],i=e.trim().split(Ep);let c="";for(let f=i.length-1;f>=0;f-=1){const p=i[f],{isExternal:g,modifiers:h,hasImportantModifier:w,baseClassName:j,maybePostfixModifierPosition:N}=n(p);if(g){c=p+(c.length>0?" "+c:c);continue}let y=!!N,m=s(y?j.substring(0,N):j);if(!m){if(!y){c=p+(c.length>0?" "+c:c);continue}if(m=s(j),!m){c=p+(c.length>0?" "+c:c);continue}y=!1}const d=a(h).join(":"),x=w?d+Ta:d,S=x+m;if(o.includes(S))continue;o.push(S);const v=l(m,y);for(let E=0;E<v.length;++E){const M=v[E];o.push(x+M)}c=p+(c.length>0?" "+c:c)}return c};function _p(){let e=0,t,n,s="";for(;e<arguments.length;)(t=arguments[e++])&&(n=jd(t))&&(s&&(s+=" "),s+=n);return s}const jd=e=>{if(typeof e=="string")return e;let t,n="";for(let s=0;s<e.length;s++)e[s]&&(t=jd(e[s]))&&(n&&(n+=" "),n+=t);return n};function zp(e,...t){let n,s,l,a=o;function o(c){const f=t.reduce((p,g)=>g(p),e());return n=Cp(f),s=n.cache.get,l=n.cache.set,a=i,i(c)}function i(c){const f=s(c);if(f)return f;const p=Mp(c,n);return l(c,p),p}return function(){return a(_p.apply(null,arguments))}}const de=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},wd=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Nd=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Pp=/^\d+\/\d+$/,Lp=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Tp=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ip=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Dp=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Rp=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,pn=e=>Pp.test(e),$=e=>!!e&&!Number.isNaN(Number(e)),St=e=>!!e&&Number.isInteger(Number(e)),Fl=e=>e.endsWith("%")&&$(e.slice(0,-1)),mt=e=>Lp.test(e),Fp=()=>!0,Op=e=>Tp.test(e)&&!Ip.test(e),kd=()=>!1,Ap=e=>Dp.test(e),Up=e=>Rp.test(e),$p=e=>!R(e)&&!F(e),Bp=e=>Wn(e,Cd,kd),R=e=>wd.test(e),Gt=e=>Wn(e,Ed,Op),Ol=e=>Wn(e,Qp,$),Xi=e=>Wn(e,bd,kd),Wp=e=>Wn(e,Sd,Up),ss=e=>Wn(e,Md,Ap),F=e=>Nd.test(e),er=e=>Vn(e,Ed),Vp=e=>Vn(e,Kp),Yi=e=>Vn(e,bd),Hp=e=>Vn(e,Cd),Gp=e=>Vn(e,Sd),ls=e=>Vn(e,Md,!0),Wn=(e,t,n)=>{const s=wd.exec(e);return s?s[1]?t(s[1]):n(s[2]):!1},Vn=(e,t,n=!1)=>{const s=Nd.exec(e);return s?s[1]?t(s[1]):n:!1},bd=e=>e==="position"||e==="percentage",Sd=e=>e==="image"||e==="url",Cd=e=>e==="length"||e==="size"||e==="bg-size",Ed=e=>e==="length",Qp=e=>e==="number",Kp=e=>e==="family-name",Md=e=>e==="shadow",Jp=()=>{const e=de("color"),t=de("font"),n=de("text"),s=de("font-weight"),l=de("tracking"),a=de("leading"),o=de("breakpoint"),i=de("container"),c=de("spacing"),f=de("radius"),p=de("shadow"),g=de("inset-shadow"),h=de("text-shadow"),w=de("drop-shadow"),j=de("blur"),N=de("perspective"),y=de("aspect"),m=de("ease"),d=de("animate"),x=()=>["auto","avoid","all","avoid-page","page","left","right","column"],S=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],v=()=>[...S(),F,R],E=()=>["auto","hidden","clip","visible","scroll"],M=()=>["auto","contain","none"],b=()=>[F,R,c],D=()=>[pn,"full","auto",...b()],T=()=>[St,"none","subgrid",F,R],V=()=>["auto",{span:["full",St,F,R]},St,F,R],ee=()=>[St,"auto",F,R],Ne=()=>["auto","min","max","fr",F,R],ke=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],_e=()=>["start","end","center","stretch","center-safe","end-safe"],te=()=>["auto",...b()],J=()=>[pn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...b()],u=()=>[e,F,R],C=()=>[...S(),Yi,Xi,{position:[F,R]}],_=()=>["no-repeat",{repeat:["","x","y","space","round"]}],k=()=>["auto","cover","contain",Hp,Bp,{size:[F,R]}],z=()=>[Fl,er,Gt],O=()=>["","none","full",f,F,R],U=()=>["",$,er,Gt],X=()=>["solid","dashed","dotted","double"],ie=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],re=()=>[$,Fl,Yi,Xi],Do=()=>["","none",j,F,R],Fr=()=>["none",$,F,R],Or=()=>["none",$,F,R],cl=()=>[$,F,R],Ar=()=>[pn,"full",...b()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[mt],breakpoint:[mt],color:[Fp],container:[mt],"drop-shadow":[mt],ease:["in","out","in-out"],font:[$p],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[mt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[mt],shadow:[mt],spacing:["px",$],text:[mt],"text-shadow":[mt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",pn,R,F,y]}],container:["container"],columns:[{columns:[$,R,F,i]}],"break-after":[{"break-after":x()}],"break-before":[{"break-before":x()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:v()}],overflow:[{overflow:E()}],"overflow-x":[{"overflow-x":E()}],"overflow-y":[{"overflow-y":E()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:D()}],"inset-x":[{"inset-x":D()}],"inset-y":[{"inset-y":D()}],start:[{start:D()}],end:[{end:D()}],top:[{top:D()}],right:[{right:D()}],bottom:[{bottom:D()}],left:[{left:D()}],visibility:["visible","invisible","collapse"],z:[{z:[St,"auto",F,R]}],basis:[{basis:[pn,"full","auto",i,...b()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[$,pn,"auto","initial","none",R]}],grow:[{grow:["",$,F,R]}],shrink:[{shrink:["",$,F,R]}],order:[{order:[St,"first","last","none",F,R]}],"grid-cols":[{"grid-cols":T()}],"col-start-end":[{col:V()}],"col-start":[{"col-start":ee()}],"col-end":[{"col-end":ee()}],"grid-rows":[{"grid-rows":T()}],"row-start-end":[{row:V()}],"row-start":[{"row-start":ee()}],"row-end":[{"row-end":ee()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Ne()}],"auto-rows":[{"auto-rows":Ne()}],gap:[{gap:b()}],"gap-x":[{"gap-x":b()}],"gap-y":[{"gap-y":b()}],"justify-content":[{justify:[...ke(),"normal"]}],"justify-items":[{"justify-items":[..._e(),"normal"]}],"justify-self":[{"justify-self":["auto",..._e()]}],"align-content":[{content:["normal",...ke()]}],"align-items":[{items:[..._e(),{baseline:["","last"]}]}],"align-self":[{self:["auto",..._e(),{baseline:["","last"]}]}],"place-content":[{"place-content":ke()}],"place-items":[{"place-items":[..._e(),"baseline"]}],"place-self":[{"place-self":["auto",..._e()]}],p:[{p:b()}],px:[{px:b()}],py:[{py:b()}],ps:[{ps:b()}],pe:[{pe:b()}],pt:[{pt:b()}],pr:[{pr:b()}],pb:[{pb:b()}],pl:[{pl:b()}],m:[{m:te()}],mx:[{mx:te()}],my:[{my:te()}],ms:[{ms:te()}],me:[{me:te()}],mt:[{mt:te()}],mr:[{mr:te()}],mb:[{mb:te()}],ml:[{ml:te()}],"space-x":[{"space-x":b()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":b()}],"space-y-reverse":["space-y-reverse"],size:[{size:J()}],w:[{w:[i,"screen",...J()]}],"min-w":[{"min-w":[i,"screen","none",...J()]}],"max-w":[{"max-w":[i,"screen","none","prose",{screen:[o]},...J()]}],h:[{h:["screen","lh",...J()]}],"min-h":[{"min-h":["screen","lh","none",...J()]}],"max-h":[{"max-h":["screen","lh",...J()]}],"font-size":[{text:["base",n,er,Gt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,F,Ol]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Fl,R]}],"font-family":[{font:[Vp,R,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,F,R]}],"line-clamp":[{"line-clamp":[$,"none",F,Ol]}],leading:[{leading:[a,...b()]}],"list-image":[{"list-image":["none",F,R]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",F,R]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:u()}],"text-color":[{text:u()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...X(),"wavy"]}],"text-decoration-thickness":[{decoration:[$,"from-font","auto",F,Gt]}],"text-decoration-color":[{decoration:u()}],"underline-offset":[{"underline-offset":[$,"auto",F,R]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:b()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",F,R]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",F,R]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:C()}],"bg-repeat":[{bg:_()}],"bg-size":[{bg:k()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},St,F,R],radial:["",F,R],conic:[St,F,R]},Gp,Wp]}],"bg-color":[{bg:u()}],"gradient-from-pos":[{from:z()}],"gradient-via-pos":[{via:z()}],"gradient-to-pos":[{to:z()}],"gradient-from":[{from:u()}],"gradient-via":[{via:u()}],"gradient-to":[{to:u()}],rounded:[{rounded:O()}],"rounded-s":[{"rounded-s":O()}],"rounded-e":[{"rounded-e":O()}],"rounded-t":[{"rounded-t":O()}],"rounded-r":[{"rounded-r":O()}],"rounded-b":[{"rounded-b":O()}],"rounded-l":[{"rounded-l":O()}],"rounded-ss":[{"rounded-ss":O()}],"rounded-se":[{"rounded-se":O()}],"rounded-ee":[{"rounded-ee":O()}],"rounded-es":[{"rounded-es":O()}],"rounded-tl":[{"rounded-tl":O()}],"rounded-tr":[{"rounded-tr":O()}],"rounded-br":[{"rounded-br":O()}],"rounded-bl":[{"rounded-bl":O()}],"border-w":[{border:U()}],"border-w-x":[{"border-x":U()}],"border-w-y":[{"border-y":U()}],"border-w-s":[{"border-s":U()}],"border-w-e":[{"border-e":U()}],"border-w-t":[{"border-t":U()}],"border-w-r":[{"border-r":U()}],"border-w-b":[{"border-b":U()}],"border-w-l":[{"border-l":U()}],"divide-x":[{"divide-x":U()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":U()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...X(),"hidden","none"]}],"divide-style":[{divide:[...X(),"hidden","none"]}],"border-color":[{border:u()}],"border-color-x":[{"border-x":u()}],"border-color-y":[{"border-y":u()}],"border-color-s":[{"border-s":u()}],"border-color-e":[{"border-e":u()}],"border-color-t":[{"border-t":u()}],"border-color-r":[{"border-r":u()}],"border-color-b":[{"border-b":u()}],"border-color-l":[{"border-l":u()}],"divide-color":[{divide:u()}],"outline-style":[{outline:[...X(),"none","hidden"]}],"outline-offset":[{"outline-offset":[$,F,R]}],"outline-w":[{outline:["",$,er,Gt]}],"outline-color":[{outline:u()}],shadow:[{shadow:["","none",p,ls,ss]}],"shadow-color":[{shadow:u()}],"inset-shadow":[{"inset-shadow":["none",g,ls,ss]}],"inset-shadow-color":[{"inset-shadow":u()}],"ring-w":[{ring:U()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:u()}],"ring-offset-w":[{"ring-offset":[$,Gt]}],"ring-offset-color":[{"ring-offset":u()}],"inset-ring-w":[{"inset-ring":U()}],"inset-ring-color":[{"inset-ring":u()}],"text-shadow":[{"text-shadow":["none",h,ls,ss]}],"text-shadow-color":[{"text-shadow":u()}],opacity:[{opacity:[$,F,R]}],"mix-blend":[{"mix-blend":[...ie(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ie()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[$]}],"mask-image-linear-from-pos":[{"mask-linear-from":re()}],"mask-image-linear-to-pos":[{"mask-linear-to":re()}],"mask-image-linear-from-color":[{"mask-linear-from":u()}],"mask-image-linear-to-color":[{"mask-linear-to":u()}],"mask-image-t-from-pos":[{"mask-t-from":re()}],"mask-image-t-to-pos":[{"mask-t-to":re()}],"mask-image-t-from-color":[{"mask-t-from":u()}],"mask-image-t-to-color":[{"mask-t-to":u()}],"mask-image-r-from-pos":[{"mask-r-from":re()}],"mask-image-r-to-pos":[{"mask-r-to":re()}],"mask-image-r-from-color":[{"mask-r-from":u()}],"mask-image-r-to-color":[{"mask-r-to":u()}],"mask-image-b-from-pos":[{"mask-b-from":re()}],"mask-image-b-to-pos":[{"mask-b-to":re()}],"mask-image-b-from-color":[{"mask-b-from":u()}],"mask-image-b-to-color":[{"mask-b-to":u()}],"mask-image-l-from-pos":[{"mask-l-from":re()}],"mask-image-l-to-pos":[{"mask-l-to":re()}],"mask-image-l-from-color":[{"mask-l-from":u()}],"mask-image-l-to-color":[{"mask-l-to":u()}],"mask-image-x-from-pos":[{"mask-x-from":re()}],"mask-image-x-to-pos":[{"mask-x-to":re()}],"mask-image-x-from-color":[{"mask-x-from":u()}],"mask-image-x-to-color":[{"mask-x-to":u()}],"mask-image-y-from-pos":[{"mask-y-from":re()}],"mask-image-y-to-pos":[{"mask-y-to":re()}],"mask-image-y-from-color":[{"mask-y-from":u()}],"mask-image-y-to-color":[{"mask-y-to":u()}],"mask-image-radial":[{"mask-radial":[F,R]}],"mask-image-radial-from-pos":[{"mask-radial-from":re()}],"mask-image-radial-to-pos":[{"mask-radial-to":re()}],"mask-image-radial-from-color":[{"mask-radial-from":u()}],"mask-image-radial-to-color":[{"mask-radial-to":u()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":S()}],"mask-image-conic-pos":[{"mask-conic":[$]}],"mask-image-conic-from-pos":[{"mask-conic-from":re()}],"mask-image-conic-to-pos":[{"mask-conic-to":re()}],"mask-image-conic-from-color":[{"mask-conic-from":u()}],"mask-image-conic-to-color":[{"mask-conic-to":u()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:C()}],"mask-repeat":[{mask:_()}],"mask-size":[{mask:k()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",F,R]}],filter:[{filter:["","none",F,R]}],blur:[{blur:Do()}],brightness:[{brightness:[$,F,R]}],contrast:[{contrast:[$,F,R]}],"drop-shadow":[{"drop-shadow":["","none",w,ls,ss]}],"drop-shadow-color":[{"drop-shadow":u()}],grayscale:[{grayscale:["",$,F,R]}],"hue-rotate":[{"hue-rotate":[$,F,R]}],invert:[{invert:["",$,F,R]}],saturate:[{saturate:[$,F,R]}],sepia:[{sepia:["",$,F,R]}],"backdrop-filter":[{"backdrop-filter":["","none",F,R]}],"backdrop-blur":[{"backdrop-blur":Do()}],"backdrop-brightness":[{"backdrop-brightness":[$,F,R]}],"backdrop-contrast":[{"backdrop-contrast":[$,F,R]}],"backdrop-grayscale":[{"backdrop-grayscale":["",$,F,R]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[$,F,R]}],"backdrop-invert":[{"backdrop-invert":["",$,F,R]}],"backdrop-opacity":[{"backdrop-opacity":[$,F,R]}],"backdrop-saturate":[{"backdrop-saturate":[$,F,R]}],"backdrop-sepia":[{"backdrop-sepia":["",$,F,R]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":b()}],"border-spacing-x":[{"border-spacing-x":b()}],"border-spacing-y":[{"border-spacing-y":b()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",F,R]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[$,"initial",F,R]}],ease:[{ease:["linear","initial",m,F,R]}],delay:[{delay:[$,F,R]}],animate:[{animate:["none",d,F,R]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[N,F,R]}],"perspective-origin":[{"perspective-origin":v()}],rotate:[{rotate:Fr()}],"rotate-x":[{"rotate-x":Fr()}],"rotate-y":[{"rotate-y":Fr()}],"rotate-z":[{"rotate-z":Fr()}],scale:[{scale:Or()}],"scale-x":[{"scale-x":Or()}],"scale-y":[{"scale-y":Or()}],"scale-z":[{"scale-z":Or()}],"scale-3d":["scale-3d"],skew:[{skew:cl()}],"skew-x":[{"skew-x":cl()}],"skew-y":[{"skew-y":cl()}],transform:[{transform:[F,R,"","none","gpu","cpu"]}],"transform-origin":[{origin:v()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ar()}],"translate-x":[{"translate-x":Ar()}],"translate-y":[{"translate-y":Ar()}],"translate-z":[{"translate-z":Ar()}],"translate-none":["translate-none"],accent:[{accent:u()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:u()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",F,R]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":b()}],"scroll-mx":[{"scroll-mx":b()}],"scroll-my":[{"scroll-my":b()}],"scroll-ms":[{"scroll-ms":b()}],"scroll-me":[{"scroll-me":b()}],"scroll-mt":[{"scroll-mt":b()}],"scroll-mr":[{"scroll-mr":b()}],"scroll-mb":[{"scroll-mb":b()}],"scroll-ml":[{"scroll-ml":b()}],"scroll-p":[{"scroll-p":b()}],"scroll-px":[{"scroll-px":b()}],"scroll-py":[{"scroll-py":b()}],"scroll-ps":[{"scroll-ps":b()}],"scroll-pe":[{"scroll-pe":b()}],"scroll-pt":[{"scroll-pt":b()}],"scroll-pr":[{"scroll-pr":b()}],"scroll-pb":[{"scroll-pb":b()}],"scroll-pl":[{"scroll-pl":b()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",F,R]}],fill:[{fill:["none",...u()]}],"stroke-w":[{stroke:[$,er,Gt,Ol]}],stroke:[{stroke:["none",...u()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Xp=zp(Jp);function Hn(...e){return Xp(xp(e))}function A({variant:e="primary",size:t="md",className:n,children:s,...l}){const a="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",o={primary:"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm",secondary:"bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",outline:"border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500",ghost:"text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500"},i={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base"};return r.jsx("button",{className:Hn(a,o[e],i[t],n),...l,children:s})}function G({children:e,className:t,onClick:n}){return r.jsx("div",{className:Hn("bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-200",n&&"cursor-pointer hover:shadow-md hover:border-gray-200",t),onClick:n,children:e})}function he({children:e,className:t}){return r.jsx("div",{className:Hn("mb-4",t),children:e})}function xe({children:e,className:t}){return r.jsx("h3",{className:Hn("text-lg font-semibold text-gray-900",t),children:e})}function Q({children:e,className:t}){return r.jsx("div",{className:Hn("text-gray-600",t),children:e})}function Yp(){L.useState("");const[e,t]=L.useState(""),[n,s]=L.useState(""),[l,a]=L.useState(!1),[o,i]=L.useState(!1),[c,f]=L.useState(""),{login:p}=Me(),g=async h=>{h.preventDefault(),i(!0),f("");try{await p(e,n)||f("Неверный логин или пароль")}catch(w){f(w instanceof Error?w.message:"Произошла ошибка")}finally{i(!1)}};return r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4",children:r.jsxs("div",{className:"w-full max-w-md space-y-6",children:[r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4",children:r.jsx(dp,{className:"h-8 w-8 text-white"})}),r.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"PhotoAlbums"}),r.jsx("p",{className:"text-gray-600 mt-2",children:"Вход в систему"})]}),r.jsx(G,{children:r.jsxs("form",{onSubmit:g,className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Логин"}),r.jsx("input",{type:"text",value:e,onChange:h=>t(h.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"",required:!0})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Пароль"}),r.jsxs("div",{className:"relative",children:[r.jsx("input",{type:l?"text":"password",value:n,onChange:h=>s(h.target.value),className:"w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"",required:!0}),r.jsx("button",{type:"button",onClick:()=>a(!l),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:l?r.jsx(Lo,{className:"h-4 w-4"}):r.jsx(mn,{className:"h-4 w-4"})})]})]}),c&&r.jsx("div",{className:"text-red-600 text-sm bg-red-50 p-3 rounded-lg",children:c}),r.jsx(A,{type:"submit",className:"w-full",disabled:o,children:o?"Вход...":"Войти"})]})})]})})}function qp({activeTab:e,onTabChange:t}){const{user:n}=Me(),[s,l]=L.useState(!1),o=(()=>{try{const c=localStorage.getItem("messenger_chats");if(c)return JSON.parse(c).reduce((p,g)=>{const h=g.unreadCount&&g.unreadCount[n==null?void 0:n.id]?g.unreadCount[n.id]:0;return p+h},0)}catch(c){console.error("Ошибка при подсчете непрочитанных сообщений:",c)}return 0})(),i=()=>{const c=[{id:"dashboard",label:"Главная",icon:up},{id:"projects",label:"Проекты",icon:Vs},{id:"reports",label:"Отчеты",icon:Re}],f={photographer:[],designer:[],admin:[{id:"add-employee",label:"Добавить сотрудника",icon:ys}]},p=[{id:"employees",label:"Сотрудники",icon:cn},{id:"salary",label:"Зарплаты",icon:Ws},{id:"calendar",label:"Календарь",icon:Nt},{id:"messenger",label:"Мессенджер",icon:Re,badge:o},{id:"script",label:"Скрипт",icon:nn}];return[...c,...f[(n==null?void 0:n.role)||"photographer"]||[],...p]};return r.jsxs(r.Fragment,{children:[s&&r.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden",onClick:()=>l(!1)}),r.jsx("button",{onClick:()=>l(!s),className:"md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200",children:s?r.jsx(je,{className:"w-5 h-5"}):r.jsx(fp,{className:"w-5 h-5"})}),r.jsxs("div",{className:`
        bg-white border-r border-gray-200 h-full flex flex-col transition-all duration-300 z-50
        fixed md:relative
        ${s?"translate-x-0":"-translate-x-full md:translate-x-0"}
        w-64 md:w-64
      `,children:[r.jsx("div",{className:"p-4 md:p-6 border-b border-gray-200",children:r.jsxs("div",{className:"flex items-center space-x-3",children:[r.jsx("div",{className:"bg-blue-600 w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center",children:r.jsx(tn,{className:"h-4 w-4 md:h-6 md:w-6 text-white"})}),r.jsxs("div",{children:[r.jsx("h1",{className:"text-lg md:text-xl font-bold text-gray-900",children:"PhotoAlbums"}),r.jsx("p",{className:"text-xs md:text-sm text-gray-500",children:"Управление проектами"})]})]})}),r.jsx("nav",{className:"flex-1 p-3 md:p-4 overflow-y-auto",children:r.jsx("ul",{className:"space-y-1",children:i().map(c=>{const f=c.icon;return r.jsx("li",{children:r.jsxs("button",{onClick:()=>{t(c.id),l(!1)},className:Hn("w-full flex items-center space-x-3 px-3 py-2.5 md:py-2 rounded-lg text-left transition-colors relative",e===c.id?"bg-blue-50 text-blue-700 border-blue-200":"text-gray-600 hover:bg-gray-50 hover:text-gray-900",(n==null?void 0:n.role)!=="admin"&&c.id==="add-employee"?"opacity-50 cursor-not-allowed":""),disabled:(n==null?void 0:n.role)!=="admin"&&c.id==="add-employee",children:[r.jsx(f,{className:"h-5 w-5 flex-shrink-0"}),r.jsx("span",{className:"font-medium text-sm md:text-base",children:c.label}),c.badge&&c.badge>0&&r.jsx("span",{className:"bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center ml-auto",children:c.badge>99?"99+":c.badge})]})},c.id)})})}),r.jsx("div",{className:"p-3 md:p-4 border-t border-gray-200",children:r.jsxs("div",{className:"flex items-center space-x-3",children:[r.jsx("img",{src:(n==null?void 0:n.avatar)||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",alt:n==null?void 0:n.name,className:"w-8 h-8 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0"}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("p",{className:"font-medium text-gray-900 truncate text-sm md:text-base",children:n==null?void 0:n.name}),r.jsx("p",{className:"text-xs md:text-sm text-gray-500 capitalize",children:n==null?void 0:n.role})]})]})})]})]})}function Zp(){const{user:e,logout:t}=Me();return r.jsx("header",{className:"bg-white border-b border-gray-200 px-4 md:px-6 py-3 md:py-4",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("div",{className:"w-10 md:w-0"}),r.jsx("div",{className:"flex-1 max-w-lg mx-4 md:mx-0",children:r.jsxs("div",{className:"relative",children:[r.jsx(Ht,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),r.jsx("input",{type:"text",placeholder:"Поиск проектов, файлов, пользователей...",className:"w-full pl-10 pr-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})}),r.jsxs("div",{className:"flex items-center space-x-2 md:space-x-4",children:[r.jsxs("div",{className:"flex items-center space-x-2 md:space-x-3",children:[r.jsx("img",{src:(e==null?void 0:e.avatar)||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",alt:e==null?void 0:e.name,className:"w-6 h-6 md:w-8 md:h-8 rounded-full object-cover"}),r.jsxs("div",{className:"hidden lg:block",children:[r.jsx("p",{className:"text-sm font-medium text-gray-900 truncate max-w-32",children:e==null?void 0:e.name}),r.jsx("p",{className:"text-xs text-gray-500 capitalize",children:e==null?void 0:e.role})]})]}),r.jsx(A,{variant:"ghost",size:"sm",onClick:t,className:"text-gray-500 hover:text-red-600",children:r.jsx(mp,{className:"h-4 w-4 md:h-5 md:w-5"})})]})]})})}function qi(){const{user:e}=Me(),t=()=>{const a=new Date().getHours();let o="Добро пожаловать";return a<12?o="Доброе утро":a<18?o="Добрый день":o="Добрый вечер",`${o}, ${e==null?void 0:e.name}!`},n=()=>{switch(e==null?void 0:e.role){case"photographer":return{title:"Руководство для фотографа",sections:[{title:"Ваши основные задачи:",items:['Просматривать назначенные вам проекты в разделе "Проекты"','Загружать фотографии для проектов через "Загрузить фото"','Просматривать свою галерею в разделе "Моя галерея"',"Отслеживать дедлайны в календаре"]},{title:"Как работать с проектами:",items:['1. Перейдите в раздел "Проекты" - там вы увидите все проекты, где вы назначены фотографом',"2. Выберите проект и ознакомьтесь с техническим заданием",'3. После съемки загрузите фотографии через "Загрузить фото"',"4. Выберите нужный проект и загрузите все отснятые материалы","5. Уведомите менеджера о завершении съемки"]}]};case"designer":return{title:"Руководство для дизайнера",sections:[{title:"Ваши основные задачи:",items:["Работать с проектами, где вы назначены дизайнером","Создавать макеты альбомов на основе загруженных фотографий",'Использовать готовые шаблоны из раздела "Шаблоны"','Загружать готовые макеты через "Дизайн-макеты"']},{title:"Рабочий процесс:",items:['1. Проверяйте раздел "Проекты" на наличие новых заданий',"2. Дождитесь загрузки фотографий от фотографа","3. Скачайте фотографии и создайте макеты альбома","4. Загрузите готовые макеты через соответствующий раздел","5. Отправьте проект на согласование менеджеру"]}]};case"admin":return{title:"Руководство для менеджера",sections:[{title:"Управление проектами:",items:['Создавайте новые проекты через кнопку "Создать проект"',"Назначайте фотографов и дизайнеров на проекты","Контролируйте сроки выполнения через календарь","Отслеживайте статус всех проектов"]},{title:"Управление персоналом:",items:['Добавляйте новых сотрудников через "Добавить сотрудника"','Редактируйте информацию о сотрудниках в разделе "Сотрудники"','Просматривайте зарплаты в разделе "Зарплаты"',"Связывайтесь с сотрудниками через контактную информацию"]}]};default:return{title:"Общее руководство",sections:[]}}},s=[{title:"Общие функции для всех сотрудников:",items:['Просматривайте информацию о коллегах в разделе "Сотрудники"','Проверяйте зарплатную информацию в разделе "Зарплаты"','Планируйте события в "Календаре" - все могут добавлять события',"Используйте поиск для быстрого нахождения проектов и сотрудников","Связывайтесь с коллегами через контактную информацию"]},{title:"Работа с календарем:",items:["Кликните на любую дату для просмотра событий",'Добавляйте новые события через кнопку "Добавить событие"',"Выбирайте тип события: встреча, фотосессия, дизайн, дедлайн","Все сотрудники видят события, добавленные коллегами","Удалять можно только свои события (админы могут удалять любые)"]},{title:"Контакты и связь:",items:['В разделах "Сотрудники" и "Зарплаты" есть кнопка "Связаться"',"Кликните на email для отправки письма","Кликните на телефон для звонка","Вся контактная информация доступна всем сотрудникам"]},{title:"Поиск и фильтрация:",items:["Используйте поиск в верхней части страницы","В проектах можно искать по названию и описанию","В сотрудниках поиск работает по имени, email и отделу","Фильтруйте проекты по статусу для удобства"]}],l=n();return r.jsxs("div",{className:"p-4 md:p-6 space-y-4 md:space-y-6",children:[r.jsxs("div",{className:"text-center mb-8",children:[r.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-gray-900 mb-2",children:t()}),r.jsx("p",{className:"text-sm md:text-base text-gray-600",children:"Добро пожаловать в корпоративную платформу управления фотоальбомами"})]}),r.jsxs(G,{children:[r.jsx(he,{children:r.jsxs(xe,{className:"flex items-center text-lg md:text-xl",children:[r.jsx(tn,{className:"h-6 w-6 mr-2 text-blue-600"}),l.title]})}),r.jsx(Q,{children:r.jsx("div",{className:"space-y-4 md:space-y-6",children:l.sections.map((a,o)=>r.jsxs("div",{children:[r.jsx("h3",{className:"text-base md:text-lg font-semibold text-gray-900 mb-3",children:a.title}),r.jsx("ul",{className:"space-y-2",children:a.items.map((i,c)=>r.jsxs("li",{className:"flex items-start",children:[r.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"}),r.jsx("span",{className:"text-sm md:text-base text-gray-700",children:i})]},c))})]},o))})})]}),s.map((a,o)=>r.jsxs(G,{children:[r.jsx(he,{children:r.jsxs(xe,{className:"flex items-center text-lg md:text-xl",children:[o===0&&r.jsx(cn,{className:"h-5 w-5 mr-2 text-green-600"}),o===1&&r.jsx(Nt,{className:"h-5 w-5 mr-2 text-purple-600"}),o===2&&r.jsx(Re,{className:"h-5 w-5 mr-2 text-orange-600"}),o===3&&r.jsx(Ht,{className:"h-5 w-5 mr-2 text-indigo-600"}),a.title]})}),r.jsx(Q,{children:r.jsx("ul",{className:"space-y-2",children:a.items.map((i,c)=>r.jsxs("li",{className:"flex items-start",children:[r.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"}),r.jsx("span",{className:"text-sm md:text-base text-gray-700",children:i})]},c))})})]},o)),r.jsxs(G,{children:[r.jsx(he,{children:r.jsxs(xe,{className:"flex items-center text-lg md:text-xl",children:[r.jsx(Vs,{className:"h-5 w-5 mr-2 text-blue-600"}),"Быстрая навигация"]})}),r.jsx(Q,{children:r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4",children:[r.jsxs("div",{className:"flex items-center p-3 bg-blue-50 rounded-lg",children:[r.jsx(Vs,{className:"h-6 w-6 md:h-8 md:w-8 text-blue-600 mr-3 flex-shrink-0"}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-medium text-gray-900 text-sm md:text-base",children:"Проекты"}),r.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Управление проектами"})]})]}),r.jsxs("div",{className:"flex items-center p-3 bg-green-50 rounded-lg",children:[r.jsx(cn,{className:"h-6 w-6 md:h-8 md:w-8 text-green-600 mr-3 flex-shrink-0"}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-medium text-gray-900 text-sm md:text-base",children:"Сотрудники"}),r.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Контакты коллег"})]})]}),r.jsxs("div",{className:"flex items-center p-3 bg-purple-50 rounded-lg",children:[r.jsx(Nt,{className:"h-6 w-6 md:h-8 md:w-8 text-purple-600 mr-3 flex-shrink-0"}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-medium text-gray-900 text-sm md:text-base",children:"Календарь"}),r.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Планирование событий"})]})]}),r.jsxs("div",{className:"flex items-center p-3 bg-yellow-50 rounded-lg",children:[r.jsx(Ws,{className:"h-6 w-6 md:h-8 md:w-8 text-yellow-600 mr-3 flex-shrink-0"}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-medium text-gray-900 text-sm md:text-base",children:"Зарплаты"}),r.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Информация о выплатах"})]})]}),r.jsxs("div",{className:"flex items-center p-3 bg-indigo-50 rounded-lg",children:[r.jsx(dt,{className:"h-6 w-6 md:h-8 md:w-8 text-indigo-600 mr-3 flex-shrink-0"}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-medium text-gray-900 text-sm md:text-base",children:"Загрузка"}),r.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Файлы и материалы"})]})]}),r.jsxs("div",{className:"flex items-center p-3 bg-red-50 rounded-lg",children:[r.jsx(Re,{className:"h-6 w-6 md:h-8 md:w-8 text-red-600 mr-3 flex-shrink-0"}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-medium text-gray-900 text-sm md:text-base",children:"Скрипт"}),r.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Общение с клиентами"})]})]})]})})]}),r.jsxs(G,{children:[r.jsx(he,{children:r.jsxs(xe,{className:"flex items-center text-lg md:text-xl",children:[r.jsx(pr,{className:"h-5 w-5 mr-2 text-green-600"}),"Нужна помощь?"]})}),r.jsx(Q,{children:r.jsxs("div",{className:"text-center",children:[r.jsx("p",{className:"text-sm md:text-base text-gray-600 mb-4",children:"Если у вас остались вопросы по работе с системой, обратитесь к администратору"}),r.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx(Pa,{className:"h-4 w-4 text-gray-500 mr-2"}),r.jsx("span",{className:"text-sm text-gray-600",children:"admin@photoalbums.com"})]}),r.jsxs("div",{className:"flex items-center",children:[r.jsx(pr,{className:"h-4 w-4 text-gray-500 mr-2"}),r.jsx("span",{className:"text-sm text-gray-600",children:"+7 (495) 123-45-67"})]})]})]})})]})]})}function eh({isOpen:e,onClose:t,onSave:n}){const{user:s,users:l}=Me(),[a,o]=L.useState({title:"",albumType:"",description:"",managerId:(s==null?void 0:s.id)||"",photographerIds:[],designerIds:[],deadline:""}),[i,c]=L.useState(!1),f=["Свадебный альбом","Выпускной альбом","Детский альбом","Корпоративный альбом","Семейный альбом","Портретная съемка"],p=l.filter(y=>y.role==="photographer"),g=l.filter(y=>y.role==="designer"),h=l.filter(y=>y.role==="admin"),w=async y=>{y.preventDefault(),c(!0);const m=l.find(v=>v.id===a.managerId),d=l.filter(v=>a.photographerIds.includes(v.id)),x=l.filter(v=>a.designerIds.includes(v.id)),S={title:a.title,albumType:a.albumType,description:a.description,status:"planning",manager:m||void 0,photographers:d,designers:x,deadline:new Date(a.deadline),photosCount:0,designsCount:0,files:[]};await n(S),c(!1),o({title:"",albumType:"",description:"",managerId:(s==null?void 0:s.id)||"",photographerIds:[],designerIds:[],deadline:""}),t()},j=y=>{o(m=>({...m,[y.target.name]:y.target.value}))},N=(y,m)=>{o(d=>({...d,[y]:d[y].includes(m)?d[y].filter(x=>x!==m):[...d[y],m]}))};return e?r.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto",children:[r.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[r.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Создать новый проект"}),r.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:r.jsx(je,{className:"h-6 w-6"})})]}),r.jsxs("form",{onSubmit:w,className:"p-6 space-y-4",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Название проекта *"}),r.jsx("input",{type:"text",name:"title",value:a.title,onChange:j,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Например: Свадебный альбом Анны и Михаила"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Тип альбома *"}),r.jsxs("select",{name:"albumType",value:a.albumType,onChange:j,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[r.jsx("option",{value:"",children:"Выберите тип альбома"}),f.map(y=>r.jsx("option",{value:y,children:y},y))]})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Описание проекта"}),r.jsx("textarea",{name:"description",value:a.description,onChange:j,rows:3,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Опишите детали проекта, особые требования или пожелания клиента"})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Менеджер *"}),r.jsxs("select",{name:"managerId",value:a.managerId,onChange:j,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[r.jsx("option",{value:"",children:"Выберите менеджера"}),h.map(y=>r.jsx("option",{value:y.id,children:y.name},y.id))]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Фотографы"}),r.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto border border-gray-300 rounded-lg p-2",children:p.map(y=>r.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[r.jsx("input",{type:"checkbox",checked:a.photographerIds.includes(y.id),onChange:()=>N("photographerIds",y.id),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),r.jsx("span",{className:"text-sm text-gray-700",children:y.name})]},y.id))})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Дизайнеры"}),r.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto border border-gray-300 rounded-lg p-2",children:g.map(y=>r.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[r.jsx("input",{type:"checkbox",checked:a.designerIds.includes(y.id),onChange:()=>N("designerIds",y.id),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),r.jsx("span",{className:"text-sm text-gray-700",children:y.name})]},y.id))})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Дата завершения *"}),r.jsx("input",{type:"date",name:"deadline",value:a.deadline,onChange:j,required:!0,min:new Date().toISOString().split("T")[0],className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),r.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[r.jsx(A,{type:"button",variant:"outline",onClick:t,children:"Отмена"}),r.jsx(A,{type:"submit",disabled:i,children:i?"Создание...":"Создать проект"})]})]})]})}):null}function Zi({onProjectSelect:e}){const{user:t,users:n,projects:s,addProject:l}=Me(),[a,o]=L.useState(""),[i,c]=L.useState("all"),[f,p]=L.useState(!1),g=y=>{var m;return t?!!(t.role==="admin"||((m=y.manager)==null?void 0:m.id)===t.id||t.role==="photographer"&&y.photographers.some(d=>d.id===t.id)||t.role==="designer"&&y.designers.some(d=>d.id===t.id)):!1},h=y=>t?t.role==="admin"?!0:g(y):!1,w=y=>{const m={planning:{label:"Планирование",color:"bg-gray-100 text-gray-800",icon:zo},"in-progress":{label:"В работе",color:"bg-blue-100 text-blue-800",icon:tn},review:{label:"На проверке",color:"bg-yellow-100 text-yellow-800",icon:Hs},completed:{label:"Завершен",color:"bg-green-100 text-green-800",icon:pd}};return m[y]||m.planning},j=s.filter(y=>{const m=y.title.toLowerCase().includes(a.toLowerCase())||y.description.toLowerCase().includes(a.toLowerCase()),d=i==="all"||y.status===i;return m&&d&&h(y)}),N=async y=>{l(y)};return r.jsxs("div",{className:"p-4 md:p-6 space-y-4 md:space-y-6",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:"Проекты"}),r.jsx("p",{className:"text-sm md:text-base text-gray-600 mt-1",children:"Управляйте вашими проектами фотоальбомов"})]}),r.jsxs(A,{onClick:()=>p(!0),size:"sm",className:"md:text-base",children:[r.jsx(Je,{className:"h-4 w-4 mr-2"}),r.jsx("span",{className:"hidden sm:inline",children:"Создать проект"}),r.jsx("span",{className:"sm:hidden",children:"Создать"})]})]}),r.jsx(G,{children:r.jsx(Q,{className:"p-4",children:r.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4",children:[r.jsxs("div",{className:"flex-1 relative",children:[r.jsx(Ht,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),r.jsx("input",{type:"text",placeholder:"Поиск проектов...",value:a,onChange:y=>o(y.target.value),className:"w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),r.jsxs("div",{className:"flex items-center space-x-2 sm:flex-shrink-0",children:[r.jsx(hd,{className:"h-4 w-4 text-gray-500"}),r.jsxs("select",{value:i,onChange:y=>c(y.target.value),className:"border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[r.jsx("option",{value:"all",children:"Все статусы"}),r.jsx("option",{value:"planning",children:"Планирование"}),r.jsx("option",{value:"in-progress",children:"В работе"}),r.jsx("option",{value:"review",children:"На проверке"}),r.jsx("option",{value:"completed",children:"Завершен"})]})]})]})})}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6",children:j.map(y=>{var x;const m=w(y.status),d=m.icon;return r.jsxs(G,{className:`transition-all duration-200 ${g(y)?"hover:shadow-lg cursor-pointer":"opacity-75 cursor-not-allowed"}`,onClick:()=>g(y)&&(e==null?void 0:e(y.id)),children:[r.jsx(he,{children:r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsxs("div",{className:"flex-1",children:[r.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[r.jsx(xe,{className:"text-base md:text-lg truncate",children:y.title}),!g(y)&&r.jsx("span",{className:"px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full",children:"Только просмотр"})]}),r.jsx("p",{className:"text-sm font-medium text-blue-600 mb-1",children:y.albumType}),r.jsx("p",{className:"text-gray-600 text-sm line-clamp-2",children:y.description})]}),r.jsxs("span",{className:`px-2 md:px-3 py-1 rounded-full text-xs font-medium flex items-center flex-shrink-0 ml-2 ${m.color}`,children:[r.jsx(d,{className:"h-3 w-3 mr-1"}),r.jsx("span",{className:"hidden sm:inline",children:m.label})]})]})}),r.jsx(Q,{children:r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"space-y-2 text-sm",children:[r.jsxs("div",{className:"flex items-center space-x-1",children:[r.jsx(il,{className:"h-4 w-4 text-gray-400"}),r.jsx("span",{className:"text-gray-500",children:"Менеджер:"}),r.jsx("span",{className:"text-gray-600 truncate",children:((x=y.manager)==null?void 0:x.name)||"Не назначен"})]}),r.jsxs("div",{className:"flex items-center space-x-1",children:[r.jsx(tn,{className:"h-4 w-4 text-gray-400"}),r.jsx("span",{className:"text-gray-500",children:"Фотографы:"}),r.jsx("span",{className:"text-gray-600 truncate",children:y.photographers.length>0?y.photographers.map(S=>S.name).join(", "):"Не назначены"})]}),r.jsxs("div",{className:"flex items-center space-x-1",children:[r.jsx(Hs,{className:"h-4 w-4 text-gray-400"}),r.jsx("span",{className:"text-gray-500",children:"Дизайнеры:"}),r.jsx("span",{className:"text-gray-600 truncate",children:y.designers.length>0?y.designers.map(S=>S.name).join(", "):"Не назначены"})]})]}),r.jsxs("div",{className:"space-y-2 text-sm",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("span",{className:"text-gray-600",children:["Фото: ",y.files.filter(S=>S.type.startsWith("image/")).length]}),r.jsxs("span",{className:"text-gray-600",children:["Макеты: ",y.files.filter(S=>S.type.includes("design")||S.name.toLowerCase().includes("макет")||S.name.toLowerCase().includes("design")).length]}),r.jsxs("span",{className:"text-gray-600",children:["Файлов: ",y.files.length]})]}),r.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1",children:[r.jsxs("div",{className:"flex items-center space-x-1 text-gray-500",children:[r.jsx(Nt,{className:"h-4 w-4"}),r.jsxs("span",{className:"text-xs",children:["Создан: ",y.createdAt.toLocaleDateString("ru-RU")]})]}),r.jsxs("div",{className:"flex items-center space-x-1 text-gray-500",children:[r.jsx(Nt,{className:"h-4 w-4"}),r.jsxs("span",{className:"text-xs",children:["Дедлайн: ",y.deadline.toLocaleDateString("ru-RU")]})]})]})]})]})}),!g(y)&&r.jsx("div",{className:"px-6 pb-4",children:r.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-3",children:r.jsxs("p",{className:"text-sm text-yellow-800",children:[r.jsx("strong",{children:"Ограниченный доступ:"})," Вы можете просматривать этот проект, но не можете его редактировать или загружать файлы."]})})})]},y.id)})}),j.length===0&&r.jsx(G,{className:"text-center py-12",children:r.jsxs(Q,{children:[r.jsx("div",{className:"text-gray-400 mb-4",children:r.jsx(Vs,{className:"h-16 w-16 mx-auto"})}),r.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Проекты не найдены"}),r.jsx("p",{className:"text-gray-600 mb-4",children:a||i!=="all"?"Попробуйте изменить параметры поиска или фильтрации":"У вас пока нет проектов. Создайте первый проект, чтобы начать работу."}),!a&&i==="all"&&r.jsxs(A,{onClick:()=>p(!0),children:[r.jsx(Je,{className:"h-4 w-4 mr-2"}),"Создать первый проект"]})]})}),r.jsx(eh,{isOpen:f,onClose:()=>p(!1),onSave:N})]})}function th(){const{user:e,addUser:t}=Me(),[n,s]=L.useState({name:"",email:"",phone:"",telegram:"",password:"",role:"photographer",department:"",position:"",salary:"",avatar:""}),[l,a]=L.useState(null),[o,i]=L.useState(null),[c,f]=L.useState(!1),[p,g]=L.useState(!1),[h,w]=L.useState(!1),[j,N]=L.useState(""),y=S=>{var E;const v=(E=S.target.files)==null?void 0:E[0];if(v){if(v.size>5*1024*1024){N("Размер файла не должен превышать 5MB");return}if(!v.type.startsWith("image/")){N("Можно загружать только изображения");return}a(v);const M=new FileReader;M.onload=b=>{var D;i((D=b.target)==null?void 0:D.result)},M.readAsDataURL(v),N("")}},m=()=>{a(null),i(null),s(S=>({...S,avatar:""}))},d=async S=>{if(S.preventDefault(),(e==null?void 0:e.role)!=="admin"){alert("У вас нет прав для выполнения этого действия");return}g(!0),N("");try{let v=n.avatar;l&&(v=URL.createObjectURL(l)),await t({name:n.name,email:n.email,password:n.password,phone:n.phone,telegram:n.telegram,role:n.role,department:n.department,position:n.position,salary:n.salary?parseInt(n.salary):void 0,avatar:v}),g(!1),w(!0),a(null),i(null),s({name:"",email:"",phone:"",telegram:"",password:"",role:"photographer",department:"",position:"",salary:"",avatar:""}),setTimeout(()=>w(!1),3e3)}catch{N("Ошибка при создании сотрудника"),g(!1)}},x=S=>{s(v=>({...v,[S.target.name]:S.target.value}))};return(e==null?void 0:e.role)!=="admin"?r.jsx("div",{className:"p-6",children:r.jsx(G,{className:"text-center py-12",children:r.jsxs(Q,{children:[r.jsx("div",{className:"text-red-500 mb-4",children:r.jsx(ys,{className:"h-16 w-16 mx-auto"})}),r.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Доступ запрещен"}),r.jsx("p",{className:"text-gray-600",children:"Только администраторы могут добавлять новых сотрудников"})]})})}):r.jsxs("div",{className:"p-6 space-y-6",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Добавить сотрудника"}),r.jsx("p",{className:"text-gray-600 mt-1",children:"Создайте новый аккаунт для сотрудника компании"})]}),h&&r.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:r.jsxs("div",{className:"flex items-center",children:[r.jsx("div",{className:"text-green-600",children:r.jsx(ys,{className:"h-5 w-5"})}),r.jsxs("div",{className:"ml-3",children:[r.jsx("p",{className:"text-green-800 font-medium",children:"Сотрудник успешно добавлен!"}),r.jsx("p",{className:"text-green-700 text-sm",children:"Данные для входа отправлены на указанный email"})]})]})}),j&&r.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4",children:r.jsxs("div",{className:"flex items-center",children:[r.jsx("div",{className:"text-red-600",children:r.jsx(ys,{className:"h-5 w-5"})}),r.jsx("div",{className:"ml-3",children:r.jsx("p",{className:"text-red-800 font-medium",children:j})})]})}),r.jsxs("div",{className:"max-w-2xl",children:[r.jsxs(G,{children:[r.jsx(he,{children:r.jsx(xe,{children:"Информация о сотруднике"})}),r.jsx(Q,{children:r.jsxs("form",{onSubmit:d,className:"space-y-6",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Фото профиля"}),r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx("div",{className:"relative",children:o?r.jsxs("div",{className:"relative",children:[r.jsx("img",{src:o,alt:"Предпросмотр аватара",className:"w-20 h-20 rounded-full object-cover border-2 border-gray-200"}),r.jsx("button",{type:"button",onClick:m,className:"absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors",children:r.jsx(je,{className:"h-3 w-3"})})]}):r.jsx("div",{className:"w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300",children:r.jsx(dt,{className:"h-8 w-8 text-gray-400"})})}),r.jsxs("div",{children:[r.jsx("input",{type:"file",accept:"image/*",onChange:y,className:"hidden",id:"avatar-upload"}),r.jsxs("label",{htmlFor:"avatar-upload",className:"cursor-pointer inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors",children:[r.jsx(dt,{className:"h-4 w-4 mr-2"}),"Выбрать фото"]}),r.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"JPG, PNG до 5MB"})]})]})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Полное имя *"}),r.jsx("input",{type:"text",name:"name",value:n.name,onChange:x,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",required:!0})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email для входа *"}),r.jsx("input",{type:"email",name:"email",value:n.email,onChange:x,placeholder:"Этот email будет использоваться для входа",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",required:!0})]})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Телефон"}),r.jsx("input",{type:"tel",name:"phone",value:n.phone,onChange:x,placeholder:"+7 (495) 123-45-67",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Telegram"}),r.jsx("input",{type:"text",name:"telegram",value:n.telegram,onChange:x,placeholder:"@username",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Пароль *"}),r.jsxs("div",{className:"relative",children:[r.jsx("input",{type:c?"text":"password",name:"password",value:n.password,onChange:x,className:"w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",required:!0}),r.jsx("button",{type:"button",onClick:()=>f(!c),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:c?r.jsx(Lo,{className:"h-4 w-4"}):r.jsx(mn,{className:"h-4 w-4"})})]})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Роль *"}),r.jsxs("select",{name:"role",value:n.role,onChange:x,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",required:!0,children:[r.jsx("option",{value:"photographer",children:"Фотограф"}),r.jsx("option",{value:"designer",children:"Дизайнер"}),r.jsx("option",{value:"admin",children:"Администратор"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Отдел"}),r.jsx("input",{type:"text",name:"department",value:n.department,onChange:x,placeholder:"Например: Фотостудия, Дизайн",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Должность"}),r.jsx("input",{type:"text",name:"position",value:n.position,onChange:x,placeholder:"Например: Старший фотограф",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Зарплата (руб.)"}),r.jsx("input",{type:"number",name:"salary",value:n.salary,onChange:x,placeholder:"50000",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),r.jsxs("div",{className:"flex justify-end space-x-3",children:[r.jsx(A,{type:"button",variant:"outline",children:"Отмена"}),r.jsx(A,{type:"submit",disabled:p,children:p?"Создание...":"Создать сотрудника"})]})]})})]}),r.jsx(G,{className:"bg-blue-50 border-blue-200",children:r.jsxs(Q,{className:"p-4",children:[r.jsx("h4",{className:"font-medium text-blue-900 mb-3",children:"Информация для входа:"}),r.jsxs("div",{className:"text-sm text-blue-700",children:[r.jsx("p",{children:"Сотрудники смогут войти в систему используя:"}),r.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[r.jsxs("li",{children:[r.jsx("strong",{children:"Email:"}),' тот который вы укажете в поле "Email для входа"']}),r.jsxs("li",{children:[r.jsx("strong",{children:"Пароль:"}),' тот который вы укажете в поле "Пароль"']})]}),r.jsx("p",{className:"mt-2 text-xs",children:"Убедитесь, что сообщили сотруднику его данные для входа"})]})]})})]})]})}function nh({employee:e,isOpen:t,onClose:n,onSave:s}){var d;const[l,a]=L.useState({name:e.name,email:e.email,phone:e.phone||"",telegram:e.telegram||"",role:e.role,department:e.department||"",position:e.position||"",salary:((d=e.salary)==null?void 0:d.toString())||"",password:"",avatar:e.avatar||""}),[o,i]=L.useState(null),[c,f]=L.useState(e.avatar||null),[p,g]=L.useState(!1),[h,w]=L.useState(!1),j=x=>{var v;const S=(v=x.target.files)==null?void 0:v[0];if(S){if(S.size>5*1024*1024){alert("Размер файла не должен превышать 5MB");return}if(!S.type.startsWith("image/")){alert("Можно загружать только изображения");return}i(S);const E=new FileReader;E.onload=M=>{var b;f((b=M.target)==null?void 0:b.result)},E.readAsDataURL(S)}},N=()=>{i(null),f(null),a(x=>({...x,avatar:""}))},y=async x=>{x.preventDefault(),w(!0);let S=l.avatar;o&&(S=URL.createObjectURL(o));const v={name:l.name,email:l.email,phone:l.phone,telegram:l.telegram,role:l.role,department:l.department,position:l.position,salary:l.salary?parseInt(l.salary):void 0,avatar:S};l.password.trim()&&(v.password=l.password),await s(e.id,v),w(!1),n()},m=x=>{a(S=>({...S,[x.target.name]:x.target.value}))};return t?r.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto",children:[r.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[r.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Редактировать сотрудника"}),r.jsx("button",{onClick:n,className:"text-gray-400 hover:text-gray-600 transition-colors",children:r.jsx(je,{className:"h-6 w-6"})})]}),r.jsxs("form",{onSubmit:y,className:"p-6 space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Фото профиля"}),r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx("div",{className:"relative",children:c?r.jsxs("div",{className:"relative",children:[r.jsx("img",{src:c,alt:"Предпросмотр аватара",className:"w-20 h-20 rounded-full object-cover border-2 border-gray-200"}),r.jsx("button",{type:"button",onClick:N,className:"absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors",children:r.jsx(je,{className:"h-3 w-3"})})]}):r.jsx("div",{className:"w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300",children:r.jsx(dt,{className:"h-8 w-8 text-gray-400"})})}),r.jsxs("div",{children:[r.jsx("input",{type:"file",accept:"image/*",onChange:j,className:"hidden",id:"avatar-edit-upload"}),r.jsxs("label",{htmlFor:"avatar-edit-upload",className:"cursor-pointer inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors",children:[r.jsx(dt,{className:"h-4 w-4 mr-2"}),"Изменить фото"]}),r.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"JPG, PNG до 5MB"})]})]})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Полное имя *"}),r.jsx("input",{type:"text",name:"name",value:l.name,onChange:m,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email *"}),r.jsx("input",{type:"email",name:"email",value:l.email,onChange:m,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Новый пароль (оставьте пустым, если не хотите менять)"}),r.jsxs("div",{className:"relative",children:[r.jsx("input",{type:p?"text":"password",name:"password",value:l.password,onChange:m,className:"w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),r.jsx("button",{type:"button",onClick:()=>g(!p),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:p?r.jsx(Lo,{className:"h-4 w-4"}):r.jsx(mn,{className:"h-4 w-4"})})]})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Телефон"}),r.jsx("input",{type:"tel",name:"phone",value:l.phone,onChange:m,placeholder:"+7 (495) 123-45-67",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Telegram"}),r.jsx("input",{type:"text",name:"telegram",value:l.telegram,onChange:m,placeholder:"@username",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Роль *"}),r.jsxs("select",{name:"role",value:l.role,onChange:m,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[r.jsx("option",{value:"photographer",children:"Фотограф"}),r.jsx("option",{value:"designer",children:"Дизайнер"}),r.jsx("option",{value:"admin",children:"Администратор"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Отдел"}),r.jsx("input",{type:"text",name:"department",value:l.department,onChange:m,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Должность"}),r.jsx("input",{type:"text",name:"position",value:l.position,onChange:m,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Зарплата (руб.)"}),r.jsx("input",{type:"number",name:"salary",value:l.salary,onChange:m,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),r.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[r.jsx(A,{type:"button",variant:"outline",onClick:n,children:"Отмена"}),r.jsx(A,{type:"submit",disabled:h,children:h?"Сохранение...":"Сохранить"})]})]})]})}):null}function rh(){const{user:e,users:t,updateUser:n,deleteUser:s}=Me(),[l,a]=L.useState(""),[o,i]=L.useState("all"),[c,f]=L.useState(null),[p,g]=L.useState(null),[h,w]=L.useState(null),j=v=>({photographer:"Фотограф",designer:"Дизайнер",admin:"Администратор"})[v]||v,N=v=>({photographer:"bg-blue-100 text-blue-800",designer:"bg-purple-100 text-purple-800",admin:"bg-green-100 text-green-800"})[v]||"bg-gray-100 text-gray-800",y=v=>f(v),m=async(v,E)=>{await n(v,E),f(null)},d=async v=>{p===v?(await s(v),g(null)):(g(v),setTimeout(()=>g(null),3e3))},x=v=>{w(v)},S=t.filter(v=>(v.name+v.email+(v.department||"")).toLowerCase().includes(l.toLowerCase())&&(o==="all"||v.role===o));return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"p-4 md:p-6 space-y-4 md:space-y-6",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:"Сотрудники"}),r.jsx("p",{className:"text-sm md:text-base text-gray-600 mt-1",children:"Управление сотрудниками компании"})]}),r.jsxs(A,{size:"sm",className:"md:text-base",children:[r.jsx(cn,{className:"h-4 w-4 mr-2"}),r.jsx("span",{className:"hidden sm:inline",children:"Экспорт списка"}),r.jsx("span",{className:"sm:hidden",children:"Экспорт"})]})]}),r.jsx(G,{children:r.jsx(Q,{className:"p-4",children:r.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4",children:[r.jsxs("div",{className:"flex-1 relative",children:[r.jsx(Ht,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"}),r.jsx("input",{type:"text",placeholder:"Поиск сотрудников...",value:l,onChange:v=>a(v.target.value),className:"w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),r.jsxs("div",{className:"flex items-center space-x-2 sm:flex-shrink-0",children:[r.jsx(hd,{className:"h-4 w-4 text-gray-500"}),r.jsxs("select",{value:o,onChange:v=>i(v.target.value),className:"border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",children:[r.jsx("option",{value:"all",children:"Все роли"}),r.jsx("option",{value:"photographer",children:"Фотографы"}),r.jsx("option",{value:"designer",children:"Дизайнеры"}),r.jsx("option",{value:"admin",children:"Администраторы"})]})]})]})})}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6",children:S.map(v=>r.jsx(G,{className:"hover:shadow-lg transition-all duration-200",children:r.jsx(Q,{className:"p-4 md:p-6",children:r.jsxs("div",{className:"flex items-start space-x-4",children:[r.jsx("img",{src:v.avatar||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",alt:v.name,className:"w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"text-sm sm:text-base md:text-lg font-semibold text-gray-900 truncate",children:v.name}),r.jsx("p",{className:"text-xs sm:text-sm text-gray-600",children:v.position||"Не указана"}),r.jsx("p",{className:"text-sm text-gray-500",children:v.department||"Не указан"})]}),r.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2 whitespace-nowrap ${N(v.role)}`,children:j(v.role)})]}),r.jsxs("div",{className:"mt-3 space-y-2",children:[r.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[r.jsx(Pa,{className:"h-4 w-4 mr-2 flex-shrink-0"}),r.jsx("span",{className:"truncate",children:v.email})]}),v.phone&&r.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[r.jsx(pr,{className:"h-4 w-4 mr-2 flex-shrink-0"}),r.jsx("span",{className:"truncate",children:v.phone})]}),v.telegram&&r.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[r.jsx(Re,{className:"h-4 w-4 mr-2 flex-shrink-0"}),r.jsx("span",{className:"truncate",children:v.telegram})]}),r.jsxs("div",{className:"flex items-center justify-between text-sm",children:[r.jsxs("span",{className:"text-gray-600",children:[r.jsx("span",{className:"hidden sm:inline",children:"Дата найма: "}),r.jsx("span",{className:"sm:hidden",children:"Найм: "}),v.createdAt.toLocaleDateString("ru-RU")]}),v.salary&&r.jsxs("span",{className:"font-medium text-gray-900",children:[v.salary.toLocaleString("ru-RU")," ₽"]})]})]}),r.jsxs("div",{className:"mt-3 md:mt-4 flex flex-wrap gap-1 md:gap-2",children:[r.jsxs(A,{size:"sm",variant:"outline",onClick:()=>x(v),children:[r.jsx(pr,{className:"h-3 w-3 md:h-4 md:w-4 mr-1"}),r.jsx("span",{className:"text-xs md:text-sm",children:"Контакты"})]}),(e==null?void 0:e.role)==="admin"&&r.jsxs(r.Fragment,{children:[r.jsxs(A,{size:"sm",variant:"outline",onClick:()=>y(v),children:[r.jsx(gd,{className:"h-3 w-3 md:h-4 md:w-4 mr-1"}),r.jsx("span",{className:"hidden sm:inline text-xs md:text-sm",children:"Редактировать"}),r.jsx("span",{className:"sm:hidden text-xs",children:"Ред."})]}),r.jsxs(A,{size:"sm",variant:"outline",className:`${p===v.id?"bg-red-500 text-white hover:bg-red-600":"text-red-600 hover:text-red-700"}`,onClick:()=>d(v.id),children:[r.jsx(To,{className:"h-3 w-3 md:h-4 md:w-4 mr-1"}),r.jsx("span",{className:"text-xs md:text-sm",children:p===v.id?"Подтвердить":"Удалить"})]})]}),r.jsxs(A,{size:"sm",variant:"outline",onClick:()=>{localStorage.setItem("messenger_open_chat",v.id),window.location.hash="#messenger";const E=new CustomEvent("openMessengerChat",{detail:{userId:v.id}});window.dispatchEvent(E)},children:[r.jsx(Re,{className:"h-3 w-3 md:h-4 md:w-4 mr-1"}),r.jsx("span",{className:"hidden sm:inline",children:"Написать в чате"}),r.jsx("span",{className:"sm:hidden text-xs",children:"Чат"})]})]})]})]})})},v.id))}),S.length===0&&r.jsx(G,{className:"text-center py-12",children:r.jsxs(Q,{children:[r.jsx("div",{className:"text-gray-400 mb-4",children:r.jsx(cn,{className:"h-16 w-16 mx-auto"})}),r.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Сотрудники не найдены"}),r.jsx("p",{className:"text-gray-600",children:"Попробуйте изменить параметры поиска или фильтрации"})]})})]}),c&&r.jsx(nh,{employee:c,isOpen:!!c,onClose:()=>f(null),onSave:m}),h&&r.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-white rounded-xl max-w-md w-full",children:[r.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[r.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Связаться с сотрудником"}),r.jsx("button",{onClick:()=>w(null),className:"text-gray-400 hover:text-gray-600 transition-colors",children:r.jsx(je,{className:"h-6 w-6"})})]}),r.jsxs("div",{className:"p-6",children:[r.jsxs("div",{className:"flex items-center space-x-4 mb-6",children:[r.jsx("img",{src:h.avatar||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",alt:h.name,className:"w-16 h-16 rounded-full object-cover"}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:h.name}),r.jsx("p",{className:"text-gray-600",children:h.position||"Не указана"}),r.jsx("p",{className:"text-sm text-gray-500",children:h.department||"Не указан"})]})]}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("a",{href:`mailto:${h.email}`,className:"flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[r.jsx(Pa,{className:"h-5 w-5 text-gray-500"}),r.jsxs("div",{children:[r.jsx("p",{className:"font-medium text-gray-900",children:"Email"}),r.jsx("p",{className:"text-sm text-gray-600",children:h.email})]})]}),r.jsxs("a",{href:`tel:+7${Math.floor(Math.random()*9e9)+1e9}`,className:"flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[r.jsx(pr,{className:"h-5 w-5 text-gray-500"}),r.jsxs("div",{children:[r.jsx("p",{className:"font-medium text-gray-900",children:"Телефон"}),r.jsx("p",{className:"text-sm text-gray-600",children:h.phone||"Не указан"})]})]}),h.telegram&&r.jsxs("a",{href:`https://t.me/${h.telegram.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[r.jsx(Re,{className:"h-5 w-5 text-gray-500"}),r.jsxs("div",{children:[r.jsx("p",{className:"font-medium text-gray-900",children:"Telegram"}),r.jsx("p",{className:"text-sm text-gray-600",children:h.telegram})]})]})]})]})]})})]})}function sh({isOpen:e,onClose:t,onSave:n,employee:s}){const[l,a]=L.useState({projectType:"individual",infoCollectionPercent:0,photosProcessed:!1,revisionsApproved:!1,magazinesPrinted:!1,deadlinesMet:!0,krMagazines:0,month:new Date().toISOString().slice(0,7)}),o=()=>{const h={individual:{base:210,bonus:90},kindergarten:{base:210,bonus:90},collective_11:{base:175,bonus:75},collective_9:{base:175,bonus:75},collective_4:{base:175,bonus:75}}[l.projectType],w=(100-l.infoCollectionPercent)/1.5;let j=h.bonus;l.deadlinesMet||(j*=.5);const N=h.base*(1-w/100)+j,y=l.krMagazines*200;return N+y},i=g=>({infoCollection:g*.35,photosProcessed:g*.3,revisionsApproved:g*.2,magazinesPrinted:g*.15}),c=g=>{g.preventDefault();const h=o(),w=i(h),j={employeeId:s.id,employeeName:s.name,role:s.role,department:s.department||"Не указан",...l,calculatedSalary:h,paymentStages:w};n(j),t()};if(!e||!s)return null;const f=o(),p=i(f);return r.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto",children:[r.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[r.jsxs("h2",{className:"text-xl font-semibold text-gray-900",children:["Расчет зарплаты - ",s.name]}),r.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:r.jsx(je,{className:"h-6 w-6"})})]}),r.jsxs("form",{onSubmit:c,className:"p-6 space-y-6",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Тип проекта"}),r.jsxs("select",{value:l.projectType,onChange:g=>a(h=>({...h,projectType:g.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",children:[r.jsx("option",{value:"individual",children:"Индивидуальный концепт"}),r.jsx("option",{value:"kindergarten",children:"Детский сад"}),r.jsx("option",{value:"collective_11",children:'Коллективный "11"'}),r.jsx("option",{value:"collective_9",children:'Коллективный "9"'}),r.jsx("option",{value:"collective_4",children:'Коллективный "4"'})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Месяц"}),r.jsx("input",{type:"month",value:l.month,onChange:g=>a(h=>({...h,month:g.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Процент собранной информации (%)"}),r.jsx("input",{type:"number",min:"0",max:"100",value:l.infoCollectionPercent,onChange:g=>a(h=>({...h,infoCollectionPercent:Number(g.target.value)})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Количество журналов КР"}),r.jsx("input",{type:"number",min:"0",value:l.krMagazines,onChange:g=>a(h=>({...h,krMagazines:Number(g.target.value)})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),r.jsxs("div",{className:"space-y-3",children:[r.jsx("h3",{className:"font-medium text-gray-900",children:"Этапы выполнения"}),r.jsxs("label",{className:"flex items-center space-x-2",children:[r.jsx("input",{type:"checkbox",checked:l.photosProcessed,onChange:g=>a(h=>({...h,photosProcessed:g.target.checked})),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),r.jsx("span",{className:"text-sm text-gray-700",children:"Обработанные фотографии скинуты"})]}),r.jsxs("label",{className:"flex items-center space-x-2",children:[r.jsx("input",{type:"checkbox",checked:l.revisionsApproved,onChange:g=>a(h=>({...h,revisionsApproved:g.target.checked})),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),r.jsx("span",{className:"text-sm text-gray-700",children:"Правки согласованы"})]}),r.jsxs("label",{className:"flex items-center space-x-2",children:[r.jsx("input",{type:"checkbox",checked:l.magazinesPrinted,onChange:g=>a(h=>({...h,magazinesPrinted:g.target.checked})),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),r.jsx("span",{className:"text-sm text-gray-700",children:"Журналы напечатаны"})]}),r.jsxs("label",{className:"flex items-center space-x-2",children:[r.jsx("input",{type:"checkbox",checked:l.deadlinesMet,onChange:g=>a(h=>({...h,deadlinesMet:g.target.checked})),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),r.jsx("span",{className:"text-sm text-gray-700",children:"Все дедлайны соблюдены"})]})]}),r.jsxs("div",{className:"bg-blue-50 rounded-lg p-4",children:[r.jsx("h3",{className:"font-medium text-blue-900 mb-3",children:"Предварительный расчет"}),r.jsxs("div",{className:"space-y-2 text-sm",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{children:"Общая сумма:"}),r.jsxs("span",{className:"font-medium",children:[f.toFixed(2)," ₽"]})]}),r.jsxs("div",{className:"border-t border-blue-200 pt-2 mt-2",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{children:"За сбор информации (35%):"}),r.jsxs("span",{children:[p.infoCollection.toFixed(2)," ₽"]})]}),r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{children:"За обработанные фото (30%):"}),r.jsxs("span",{children:[p.photosProcessed.toFixed(2)," ₽"]})]}),r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{children:"После согласования правок (20%):"}),r.jsxs("span",{children:[p.revisionsApproved.toFixed(2)," ₽"]})]}),r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{children:"После печати журналов (15%):"}),r.jsxs("span",{children:[p.magazinesPrinted.toFixed(2)," ₽"]})]})]})]})]}),r.jsxs("div",{className:"flex justify-end space-x-3",children:[r.jsx(A,{type:"button",variant:"outline",onClick:t,children:"Отмена"}),r.jsx(A,{type:"submit",children:"Сохранить расчет"})]})]})]})})}function lh(){const{user:e,users:t}=Me(),[n,s]=L.useState(""),[l,a]=L.useState("2024-02"),[o,i]=L.useState(!1),[c,f]=L.useState(null),[p,g]=L.useState([]);L.useEffect(()=>{const y=localStorage.getItem("salary_calculations");if(y)try{g(JSON.parse(y))}catch(m){console.error("Ошибка при загрузке расчетов зарплат:",m)}},[]),L.useEffect(()=>{p.length>0&&localStorage.setItem("salary_calculations",JSON.stringify(p))},[p]);const h=y=>{const m={...y,id:Math.random().toString(36).substr(2,9)};g(d=>{const x=[...d,m];return localStorage.setItem("salary_calculations",JSON.stringify(x)),x})},w=p.filter(y=>{const m=y.employeeName.toLowerCase().includes(n.toLowerCase())||y.department.toLowerCase().includes(n.toLowerCase()),d=y.month===l;return m&&d}),j=w.reduce((y,m)=>y+m.calculatedSalary,0),N=y=>({individual:"Индивидуальный концепт",kindergarten:"Детский сад",collective_11:'Коллективный "11"',collective_9:'Коллективный "9"',collective_4:'Коллективный "4"'})[y]||y;return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"p-6 space-y-6",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Зарплаты сотрудников"}),r.jsx("p",{className:"text-gray-600 mt-1",children:"Динамический расчет зарплат по проектам"})]}),(e==null?void 0:e.role)==="admin"&&r.jsxs("div",{className:"flex space-x-3",children:[r.jsxs(A,{onClick:()=>i(!0),children:[r.jsx(rs,{className:"h-4 w-4 mr-2"}),"Рассчитать зарплату"]}),r.jsxs(A,{variant:"outline",children:[r.jsx(Nt,{className:"h-4 w-4 mr-2"}),"Экспорт отчета"]})]})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[r.jsx(G,{children:r.jsx(Q,{className:"p-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Общая сумма"}),r.jsxs("p",{className:"text-2xl font-bold text-gray-900 mt-1",children:[j.toLocaleString("ru-RU")," ₽"]})]}),r.jsx("div",{className:"p-3 rounded-xl bg-blue-50 text-blue-600",children:r.jsx(Ws,{className:"h-6 w-6"})})]})})}),r.jsx(G,{children:r.jsx(Q,{className:"p-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Расчетов"}),r.jsx("p",{className:"text-2xl font-bold text-gray-900 mt-1",children:w.length})]}),r.jsx("div",{className:"p-3 rounded-xl bg-purple-50 text-purple-600",children:r.jsx(rs,{className:"h-6 w-6"})})]})})})]}),r.jsxs(G,{children:[r.jsx(he,{children:r.jsxs(xe,{className:"flex items-center",children:[r.jsx(rs,{className:"h-5 w-5 mr-2 text-blue-600"}),"Система расчета зарплат"]})}),r.jsx(Q,{children:r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Разделение зарплаты:"}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsx("div",{className:"bg-blue-50 p-4 rounded-lg",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-sm text-gray-700",children:"Выплата за сбор информации"}),r.jsx("span",{className:"font-semibold text-blue-700",children:"35%"})]})}),r.jsx("div",{className:"bg-green-50 p-4 rounded-lg",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-sm text-gray-700",children:"Выплата в момент скидывания обработанных фотографий"}),r.jsx("span",{className:"font-semibold text-green-700",children:"30%"})]})}),r.jsx("div",{className:"bg-yellow-50 p-4 rounded-lg",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-sm text-gray-700",children:"Выплата после согласования правок"}),r.jsx("span",{className:"font-semibold text-yellow-700",children:"20%"})]})}),r.jsx("div",{className:"bg-purple-50 p-4 rounded-lg",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-sm text-gray-700",children:"Выплата после печати журналов"}),r.jsx("span",{className:"font-semibold text-purple-700",children:"15%"})]})})]})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Формулы расчета зарплаты менеджера:"}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[r.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Индивидуальный концепт и Детский сад:"}),r.jsx("code",{className:"text-sm text-gray-700 bg-white px-2 py-1 rounded",children:"210 × (1 – (100% – Процент собранной инфы) / 1.5) + 90¹"})]}),r.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[r.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:'Коллективный "11", "9", "4":'}),r.jsx("code",{className:"text-sm text-gray-700 bg-white px-2 py-1 rounded",children:"175 × (1 – (100% – Процент собранной инфы) / 1.5) + 75¹"})]})]})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Условия выплат:"}),r.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4",children:r.jsxs("div",{className:"flex items-start",children:[r.jsx("div",{className:"text-red-600 mr-3 mt-0.5",children:r.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-medium text-red-900 mb-2",children:"Штрафы за несоблюдение дедлайнов:"}),r.jsx("p",{className:"text-sm text-red-800 mb-3",children:"¹ зависит от соблюдения дедлайнов по скидыванию исходников, сбору номеров фото, скидыванию обработанных фото, получению отзывов, разделению по группам, бронированию студии и прочее."}),r.jsx("p",{className:"text-sm text-red-800 font-medium",children:"За несоблюдение сроков любой задачи, которая связана со сбором какой-либо информации, нужной для журнала, из второго слагаемого формулы будет вычитаться 50%."})]})]})})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Дополнительные выплаты:"}),r.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:r.jsxs("div",{className:"flex items-center",children:[r.jsx("div",{className:"text-green-600 mr-3",children:r.jsx(Ws,{className:"w-5 h-5"})}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-medium text-green-900",children:"Оплата за журнал КР:"}),r.jsx("p",{className:"text-sm text-green-800",children:"200 рублей за журнал. Если в классе журналов несколько, то 200 рублей умножается на количество журналов КР."})]})]})})]})]})})]}),r.jsx(G,{children:r.jsx(Q,{className:"p-4",children:r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsxs("div",{className:"flex-1 relative",children:[r.jsx(Ht,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),r.jsx("input",{type:"text",placeholder:"Поиск сотрудников...",value:n,onChange:y=>s(y.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),r.jsx("div",{className:"flex items-center space-x-2",children:r.jsx("input",{type:"month",value:l,onChange:y=>a(y.target.value),className:"border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})})]})})}),r.jsxs(G,{children:[r.jsx(he,{children:r.jsxs(xe,{children:["Расчеты зарплат за ",new Date(l+"-01").toLocaleDateString("ru-RU",{year:"numeric",month:"long"})]})}),r.jsx(Q,{children:w.length===0?r.jsxs("div",{className:"text-center py-8",children:[r.jsx(rs,{className:"h-12 w-12 text-gray-300 mx-auto mb-3"}),r.jsx("p",{className:"text-gray-500 mb-3",children:"Нет расчетов за выбранный период"}),(e==null?void 0:e.role)==="admin"&&r.jsxs(A,{onClick:()=>i(!0),children:[r.jsx(Je,{className:"h-4 w-4 mr-2"}),"Создать первый расчет"]})]}):r.jsx("div",{className:"overflow-auto",children:r.jsxs("table",{className:"w-full",children:[r.jsx("thead",{children:r.jsxs("tr",{className:"border-b border-gray-200",children:[r.jsx("th",{className:"text-left py-3 px-4 font-medium text-gray-700",children:"Сотрудник"}),r.jsx("th",{className:"text-left py-3 px-4 font-medium text-gray-700",children:"Тип проекта"}),r.jsx("th",{className:"text-left py-3 px-4 font-medium text-gray-700",children:"Прогресс"}),r.jsx("th",{className:"text-right py-3 px-4 font-medium text-gray-700",children:"Зарплата"}),r.jsx("th",{className:"text-center py-3 px-4 font-medium text-gray-700",children:"Действия"})]})}),r.jsx("tbody",{children:w.map(y=>r.jsxs("tr",{className:"border-b border-gray-100 hover:bg-gray-50",children:[r.jsx("td",{className:"py-3 px-4",children:r.jsxs("div",{children:[r.jsx("p",{className:"font-medium text-gray-900",children:y.employeeName}),r.jsx("p",{className:"text-sm text-gray-500",children:y.department})]})}),r.jsx("td",{className:"py-3 px-4",children:r.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs",children:N(y.projectType)})}),r.jsx("td",{className:"py-3 px-4",children:r.jsxs("div",{className:"space-y-1",children:[r.jsxs("div",{className:"flex items-center text-xs",children:[r.jsx("div",{className:`w-2 h-2 rounded-full mr-2 ${y.infoCollectionPercent>0?"bg-green-500":"bg-gray-300"}`}),"Информация: ",y.infoCollectionPercent,"%"]}),r.jsxs("div",{className:"flex items-center text-xs",children:[r.jsx("div",{className:`w-2 h-2 rounded-full mr-2 ${y.photosProcessed?"bg-green-500":"bg-gray-300"}`}),"Фото обработаны"]}),r.jsxs("div",{className:"flex items-center text-xs",children:[r.jsx("div",{className:`w-2 h-2 rounded-full mr-2 ${y.revisionsApproved?"bg-green-500":"bg-gray-300"}`}),"Правки согласованы"]}),r.jsxs("div",{className:"flex items-center text-xs",children:[r.jsx("div",{className:`w-2 h-2 rounded-full mr-2 ${y.magazinesPrinted?"bg-green-500":"bg-gray-300"}`}),"Журналы напечатаны"]})]})}),r.jsx("td",{className:"py-3 px-4 text-right",children:r.jsxs("div",{children:[r.jsxs("p",{className:"font-medium text-gray-900",children:[y.calculatedSalary.toLocaleString("ru-RU")," ₽"]}),y.krMagazines>0&&r.jsxs("p",{className:"text-xs text-gray-500",children:["+",y.krMagazines," КР журналов"]})]})}),r.jsx("td",{className:"py-3 px-4 text-center",children:r.jsxs(A,{size:"sm",variant:"outline",children:[r.jsx(mn,{className:"h-4 w-4 mr-1"}),"Детали"]})})]},y.id))})]})})})]})]}),o&&r.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-white rounded-xl max-w-md w-full",children:[r.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[r.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Выберите сотрудника"}),r.jsx("button",{onClick:()=>i(!1),className:"text-gray-400 hover:text-gray-600 transition-colors",children:r.jsx(je,{className:"h-6 w-6"})})]}),r.jsx("div",{className:"p-6",children:r.jsx("div",{className:"space-y-3 max-h-64 overflow-y-auto",children:t.map(y=>r.jsxs("button",{onClick:()=>{f(y),i(!1)},className:"w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[r.jsx("p",{className:"font-medium text-gray-900",children:y.name}),r.jsx("p",{className:"text-sm text-gray-500",children:y.department||"Не указан"})]},y.id))})})]})}),r.jsx(sh,{isOpen:!!c,onClose:()=>f(null),onSave:h,employee:c})]})}function ah(){const{user:e,projects:t}=Me(),[n,s]=L.useState(new Date),[l,a]=L.useState(null),[o,i]=L.useState(!1),[c,f]=L.useState(!1),p=u=>{var C;return e?!!(e.role==="admin"||((C=u.manager)==null?void 0:C.id)===e.id||e.role==="photographer"&&u.photographers.some(_=>_.id===e.id)||e.role==="designer"&&u.designers.some(_=>_.id===e.id)):!1},g=t.filter(u=>p(u)).map(u=>{var C,_;return{id:`project-${u.id}`,title:`Дедлайн: ${u.title}`,description:`Завершение проекта "${u.title}"`,date:u.deadline.toISOString().split("T")[0],time:"23:59",createdBy:((C=u.manager)==null?void 0:C.id)||"system",createdByName:((_=u.manager)==null?void 0:_.name)||"Система",type:"deadline",isNote:!1}}),[h,w]=L.useState([]);L.useEffect(()=>{const u=localStorage.getItem("calendar_events");if(u)try{const _=JSON.parse(u).map(k=>({...k}));w(_)}catch(C){console.error("Ошибка при загрузке событий календаря:",C)}},[]),L.useEffect(()=>{h.length>=0&&localStorage.setItem("calendar_events",JSON.stringify(h))},[h]);const j=[...h,...g],[N,y]=L.useState({title:"",description:"",time:"09:00",type:"other",isNote:!1}),[m,d]=L.useState({title:"",content:"",time:"09:00"}),x=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],S=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],v=u=>{const C=u.getFullYear(),_=u.getMonth(),k=new Date(C,_,1),O=new Date(C,_+1,0).getDate(),U=(k.getDay()+6)%7,X=[];for(let ie=0;ie<U;ie++)X.push(null);for(let ie=1;ie<=O;ie++)X.push(ie);return X},E=(u,C,_)=>`${u}-${String(C+1).padStart(2,"0")}-${String(_).padStart(2,"0")}`,M=u=>j.filter(C=>C.date===u),b=u=>({meeting:"bg-blue-100 text-blue-800",photoshoot:"bg-green-100 text-green-800",design:"bg-purple-100 text-purple-800",deadline:"bg-red-100 text-red-800",other:"bg-gray-100 text-gray-800"})[u],D=u=>({meeting:"Встреча",photoshoot:"Фотосессия",design:"Дизайн",deadline:"Дедлайн",other:"Другое"})[u],T=()=>{s(new Date(n.getFullYear(),n.getMonth()-1,1))},V=()=>{s(new Date(n.getFullYear(),n.getMonth()+1,1))},ee=u=>{const C=E(n.getFullYear(),n.getMonth(),u);a(C)},Ne=()=>{if(!l||!N.title.trim())return;const u={id:Math.random().toString(36).substr(2,9),title:N.title,description:N.description,date:l,time:N.time,createdBy:(e==null?void 0:e.id)||"",createdByName:(e==null?void 0:e.name)||"",type:N.type,isNote:N.isNote};w(_=>[..._,u]);const C=[...h,u];localStorage.setItem("calendar_events",JSON.stringify(C)),y({title:"",description:"",time:"09:00",type:"other",isNote:!1}),i(!1)},ke=()=>{if(!l||!m.title.trim())return;const u={id:Math.random().toString(36).substr(2,9),title:m.title,description:m.content,date:l,time:m.time,createdBy:(e==null?void 0:e.id)||"",createdByName:(e==null?void 0:e.name)||"",type:"other",isNote:!0};w(_=>[..._,u]);const C=[...h,u];localStorage.setItem("calendar_events",JSON.stringify(C)),d({title:"",content:"",time:"09:00"}),f(!1)},_e=u=>{u.startsWith("project-")||w(C=>{const _=C.filter(k=>k.id!==u);return localStorage.setItem("calendar_events",JSON.stringify(_)),_})},te=v(n),J=l?M(l):[];return r.jsxs("div",{className:"p-4 md:p-6 space-y-4 md:space-y-6",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:"Календарь"}),r.jsx("p",{className:"text-sm md:text-base text-gray-600 mt-1",children:"Планирование проектов и событий"})]}),r.jsx("div",{className:"flex flex-col xs:flex-row gap-2",children:l&&r.jsxs(r.Fragment,{children:[r.jsxs(A,{onClick:()=>f(!0),variant:"outline",size:"sm",children:[r.jsx(Je,{className:"h-4 w-4 mr-2"}),r.jsx("span",{className:"hidden xs:inline",children:"Добавить заметку"}),r.jsx("span",{className:"xs:hidden",children:"Заметка"})]}),r.jsxs(A,{onClick:()=>i(!0),size:"sm",children:[r.jsx(Je,{className:"h-4 w-4 mr-2"}),r.jsx("span",{className:"hidden xs:inline",children:"Добавить событие"}),r.jsx("span",{className:"xs:hidden",children:"Событие"})]})]})})]}),r.jsxs("div",{className:"flex flex-col lg:flex-row gap-4 lg:gap-6 overflow-hidden",children:[r.jsx("div",{className:"flex-1 lg:w-2/3",children:r.jsxs(G,{className:"h-full",children:[r.jsx(he,{children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs(xe,{className:"text-base sm:text-lg md:text-xl",children:[x[n.getMonth()]," ",n.getFullYear()]}),r.jsxs("div",{className:"flex space-x-2",children:[r.jsx(A,{variant:"outline",size:"sm",onClick:T,children:r.jsx(ip,{className:"h-4 w-4"})}),r.jsx(A,{variant:"outline",size:"sm",onClick:V,children:r.jsx(cp,{className:"h-4 w-4"})})]})]})}),r.jsxs(Q,{className:"p-3 sm:p-4 md:p-6",children:[r.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2 md:mb-4",children:S.map(u=>r.jsx("div",{className:"p-1 md:p-2 text-center text-xs font-medium text-gray-500",children:u},u))}),r.jsx("div",{className:"grid grid-cols-7 gap-1",children:te.map((u,C)=>{if(u===null)return r.jsx("div",{className:"p-1 md:p-2 h-12 sm:h-16 md:h-20"},C);const _=E(n.getFullYear(),n.getMonth(),u),k=M(_),z=l===_,O=_===new Date().toISOString().split("T")[0];return r.jsxs("div",{onClick:()=>ee(u),className:`p-1 md:p-2 h-12 sm:h-16 md:h-20 border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors ${z?"bg-blue-50 border-blue-300":""} ${O?"bg-yellow-50 border-yellow-300":""}`,children:[r.jsx("div",{className:`text-xs font-medium ${O?"text-yellow-800":"text-gray-900"}`,children:u}),r.jsxs("div",{className:"mt-1 space-y-1",children:[k.slice(0,window.innerWidth<640?1:2).map(U=>r.jsxs("div",{className:`text-xs px-1 py-0.5 rounded truncate leading-tight ${b(U.type)} ${U.isNote?"border-l-2 border-purple-400":""}`,title:U.isNote?`Заметка: ${U.title}`:U.title,children:[U.isNote&&"📝 ",U.title]},U.id)),k.length>(window.innerWidth<640?1:2)&&r.jsxs("div",{className:"text-xs text-gray-500 leading-tight",children:["+",k.length-(window.innerWidth<640?1:2)," еще"]})]})]},u)})})]})]})}),r.jsx("div",{className:"flex-1 lg:w-1/3",children:r.jsxs(G,{className:"h-full",children:[r.jsx(he,{children:r.jsx(xe,{className:"text-base md:text-lg",children:l?`События на ${new Date(l+"T00:00:00").toLocaleDateString("ru-RU")}`:"Выберите дату"})}),r.jsx(Q,{className:"overflow-y-auto",children:l?r.jsx("div",{className:"space-y-3 md:space-y-4",children:J.length===0?r.jsxs("div",{className:"text-center py-6 md:py-8",children:[r.jsx(Nt,{className:"h-8 w-8 md:h-12 md:w-12 text-gray-300 mx-auto mb-3"}),r.jsx("p",{className:"text-sm md:text-base text-gray-500 mb-3",children:"Нет событий на эту дату"}),r.jsxs("div",{className:"flex flex-col xs:flex-row gap-2 justify-center",children:[r.jsxs(A,{variant:"outline",size:"sm",onClick:()=>f(!0),children:[r.jsx(Je,{className:"h-4 w-4 mr-1"}),"Заметка"]}),r.jsxs(A,{variant:"outline",size:"sm",onClick:()=>i(!0),children:[r.jsx(Je,{className:"h-4 w-4 mr-1"}),"Событие"]})]})]}):J.map(u=>r.jsx("div",{className:`border rounded-lg p-4 ${u.isNote?"border-purple-200 bg-purple-50":"border-gray-200"}`,children:r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsxs("div",{className:"flex-1",children:[r.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-2",children:[u.isNote?r.jsx("span",{className:"px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800",children:"📝 Заметка"}):r.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${b(u.type)}`,children:D(u.type)}),r.jsxs("div",{className:"flex items-center text-xs md:text-sm text-gray-500",children:[r.jsx(zo,{className:"h-3 w-3 mr-1"}),u.time]})]}),r.jsx("h4",{className:"font-medium text-sm md:text-base text-gray-900 mb-1",children:u.title}),u.description&&r.jsx("p",{className:"text-xs md:text-sm text-gray-600 mb-2 whitespace-pre-wrap",children:u.description}),r.jsxs("div",{className:"flex items-center text-xs text-gray-500",children:[r.jsx(il,{className:"h-3 w-3 mr-1"}),u.createdByName]})]}),((e==null?void 0:e.role)==="admin"||(e==null?void 0:e.id)===u.createdBy)&&!u.id.startsWith("project-")&&r.jsx("button",{onClick:()=>_e(u.id),className:"text-gray-400 hover:text-red-500 transition-colors ml-2",children:r.jsx(je,{className:"h-4 w-4"})}),u.id.startsWith("project-")&&r.jsx("div",{className:"text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded ml-2",children:"Проект"})]})},u.id))}):r.jsxs("div",{className:"text-center py-6 md:py-8",children:[r.jsx(Nt,{className:"h-8 w-8 md:h-12 md:w-12 text-gray-300 mx-auto mb-3"}),r.jsx("p",{className:"text-sm md:text-base text-gray-500",children:"Выберите дату в календаре"})]})})]})})]}),c&&r.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-auto",children:[r.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[r.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Добавить заметку"}),r.jsx("button",{onClick:()=>f(!1),className:"text-gray-400 hover:text-gray-600 transition-colors",children:r.jsx(je,{className:"h-6 w-6"})})]}),r.jsxs("div",{className:"p-6 space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Заголовок заметки *"}),r.jsx("input",{type:"text",value:m.title,onChange:u=>d(C=>({...C,title:u.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",placeholder:"Введите заголовок заметки"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Содержание заметки"}),r.jsx("textarea",{value:m.content,onChange:u=>d(C=>({...C,content:u.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",rows:4,placeholder:"Напишите содержание заметки"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Время"}),r.jsx("input",{type:"time",value:m.time,onChange:u=>d(C=>({...C,time:u.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"})]}),r.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[r.jsx(A,{variant:"outline",onClick:()=>f(!1),children:"Отмена"}),r.jsx(A,{onClick:ke,disabled:!m.title.trim(),className:"bg-purple-600 hover:bg-purple-700",children:"Добавить заметку"})]})]})]})}),o&&r.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-auto",children:[r.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[r.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Добавить событие"}),r.jsx("button",{onClick:()=>i(!1),className:"text-gray-400 hover:text-gray-600 transition-colors",children:r.jsx(je,{className:"h-6 w-6"})})]}),r.jsxs("div",{className:"p-6 space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Название события *"}),r.jsx("input",{type:"text",value:N.title,onChange:u=>y(C=>({...C,title:u.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Введите название события"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Описание"}),r.jsx("textarea",{value:N.description,onChange:u=>y(C=>({...C,description:u.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",rows:3,placeholder:"Дополнительная информация о событии"})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Время"}),r.jsx("input",{type:"time",value:N.time,onChange:u=>y(C=>({...C,time:u.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Тип события"}),r.jsxs("select",{value:N.type,onChange:u=>y(C=>({...C,type:u.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[r.jsx("option",{value:"meeting",children:"Встреча"}),r.jsx("option",{value:"photoshoot",children:"Фотосессия"}),r.jsx("option",{value:"design",children:"Дизайн"}),r.jsx("option",{value:"deadline",children:"Дедлайн"}),r.jsx("option",{value:"other",children:"Другое"})]})]})]}),r.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[r.jsx(A,{variant:"outline",onClick:()=>i(!1),children:"Отмена"}),r.jsx(A,{onClick:Ne,disabled:!N.title.trim(),children:"Добавить событие"})]})]})]})})]})}const oh=()=>{const[e,t]=L.useState("collective9"),n=[{id:"collective9",label:"КОЛЛЕКТИВНЫЙ 9",icon:cn},{id:"individual",label:"ИНДИВИДУАЛЬНЫЙ",icon:il},{id:"kindergarten",label:"ДЕТСКИЙ САД",icon:Qi},{id:"collective11",label:"КОЛЛЕКТИВНЫЙ 11",icon:Qi}],s=()=>{switch(e){case"collective9":return r.jsx("div",{className:"space-y-8",children:r.jsxs(G,{children:[r.jsx(he,{children:r.jsxs(xe,{className:"flex items-center",children:[r.jsx(Re,{className:"h-5 w-5 mr-2 text-purple-600"}),"Сообщение родителю"]})}),r.jsx(Q,{children:r.jsx("div",{className:"bg-gray-50 p-4 rounded-lg",children:r.jsx("p",{className:"whitespace-pre-wrap text-sm leading-relaxed",children:`Коллективный9
Начало все то же,изменения со скрипта сбора инфы:
Сообщение в беседу класса

Всем привет! 👋
✍️ Мы начинаем сбор текстовой информации для ваших выпускных журналов. Сначала сообщу вам общий регламент этого этапа работы, затем напишу что, куда и когда.

📍По регламенту:
❗️Вам дается 15 дней на выгрузку всех материалов для журнала, то есть к 20:00 (дедлайн; смотреть в карточке класса) всё у всех должно быть загружено. После истечения срока никакую информацию внести будет НЕЛЬЗЯ!!! Поэтому отнестись к этому нужно с должным вниманием и ответственностью;
❗️При написании текстовой информации обращайте внимание на ГРАМОТНОСТЬ!!! Орфографические, пунктуационные и речевые ошибки в тексте журнала мы не исправляем. Также мат, оскорбления, пошлости и тому подобные выражения в журнал вставлены не будут, и более того, задания в таком случае придётся переделывать.

📂Инструкция как, что и куда:
1.	🎓 ИНДИВИДУАЛЬНАЯ ПАПКА ВЫПУСКНИКА: в ней будут находиться все ваши папки. Задача: найти свою папку и зайти в неё. В этой папке будет:
- 📸 ПАПКА «ФОТО ИЗ ПОМЕЩЕНИЯ»: в эту папку ничего загружать самостоятельно НЕ НУЖНО. Сюда фотографы загрузят фотографии для журнала, сделанные на фотосессии;
(ссылка на папку “Выпускники”)
2.	📨 ГУГЛ ОПРОС «ПИСЬМО САМОМУ СЕБЕ В БУДУЩЕЕ»: необходимо пройти этот опрос за 1 раз, так как при выходе ответы не сохраняются. Все подробности по заполнению опроса указаны в описании самого опроса. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось. Вот ссылка на опрос, который необходимо пройти каждому из вас в нужный дедлайн:
(ссылка на гугл-форму)
3.	🫂 ГУГЛ ОПРОС «ПОЖЕЛАНИЯ И СЛОВА ОДНОКЛАССНИКАМ»: здесь всем нужно будет написать пожелания или памятные слова КАЖДОМУ своему однокласснику, все пожелания и слова будут вставлены в ваши журналы с подписью от кого они. Старайтесь писать для всех, чтобы спустя время было приятно перечитывать написанное для вас. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.
(ссылка на гугл-форму)
4.	💭 ГУГЛ ОПРОС «ЦИТАТЫ»: здесь ВСЕМ нужно будет написать цитату, которая будет располагаться под вашей фотографией в разделе “Наш класс”. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.
(ссылка на гугл-форму)
5.	ЛАЙФ ФОТО И ЗАБАВНЫЕ ИСТОРИИ. В папке “Выпускники” также есть две папки:
- 🤳 ПАПКА «ЛАЙФ ФОТО»: в эту папку необходимо загрузить какие-либо памятные для вашего класса фотографии из повседневной жизни класса (спорт, друзья, поездки, перемены и так далее). ВАЖНО: нужно прислать либо 3 горизонтальных фотографии, либо 2 горизонтальные и 2 вертикальные. 
Старайтесь, чтобы фотографии были или общие, или чтобы много людей из класса было на фотографии. Эти фотографии у всех в журналах будут одинаковые. Если есть желание, Вы можете специально самостоятельно сделать прикольные памятные лайф фотки для вашего журнала.
- 😅 ПАПКА «ЗАБАВНЫЕ ИСТОРИИ»: в этой папке находится вордовский файл. В нём необходимо написать одну-две забавные памятные истории, которые когда-либо происходили в вашем классе. Пишите эти истории по возможности всем классом, так как они во всех журналах будут одинаковые, так же, как и лайф фото.

‼️Ещё раз акцентирую внимание на сроках, грамотности, количестве фотографий и объёме текста. Пожалуйста, соблюдайте эти правила, чтобы все ваши журналы были офигенными. На загрузку всех заданий у вас уйдёт примерно час. И ещё совет: не откладывайте всё на последний день, готовьте всё постепенно, с чувством, с толком, с расстановкой, чтобы наполнение журнала информацией было на высочайшем уровне. 
Желаю всем удачи! 🍀 
Сообщение старосте

Привет! 👋
Смотри, у меня к тебе как к самому ответственному выпускнику есть несколько очень важных заданий 🎓 
В журнале есть блоки, посвящённые учителям 👩‍🏫 Вот, что нужно:
❗️Необходимо всему вашему классу собраться и вспомнить смешные фразочки ваших учителей (всего нужно 8-10 фраз). То есть те фразы, которые конкретный учитель говорил постоянно, либо фразы, которые ассоциируются с конкретным учителем. Мы их тоже вставим вам в журналы, они будут также у каждого в журнале одинаковые.
❗️❗️Необходимо попросить у классного руководителя, чтобы он написал слова напутствия для вашего класса. Одно общее пожелание для всего класса (объём: 70-110 слов) 

✅ По итогу тебе нужно прислать мне 2 ворд документа: первый документ со смешными фразами учителей (также у каждой фразы ФИО учителя и ПРЕДМЕТ, который он у вас ведёт), второй с пожеланием классного руководителя (с ФИО классного руководителя).
Вот ссылка на примеры документов. Их нужно скачать, заполнить и прислать мне. (https://drive.google.com/drive/folders/1aH7wDAJVC3lmLi6pQ6Bhg3TSlSAni2oT?usp=sharing)

📸 Далее необходимо прислать фотографии ребят, которые не берут журнал. Это нужно для страницы с портретами и цитатами каждого выпускника. Лучше сфоткать его/её в школе самостоятельно на телефон с хорошей камерой. Скинь мне каждую фотку отдельно файлом (чтобы качество не терялось: нажать на скрепочку, там выбрать файл и через этот файл скинуть фотографии) и в сообщение укажи, пожалуйста, фамилию и имя человека.

🙏 Также проследи, пожалуйста, чтобы вы вместе с классом написали одну-две забавные памятные истории класса и загрузили 4 лайф фотки класса. Я об этом задании написал в вашу беседу.
Насчёт лайф - основная ценность в том, что такие фотографии запечатлевают “момент”. Если у вас не получается найти такие фотографии, или они в слишком плохом качестве, сделайте такие фотки специально для журнала. Главное, чтобы качество фото было хорошее. Вот тут примеры лайф-фоток, которые вы со своим классом можете повторить, или взять за идею
(https://drive.google.com/drive/folders/1hM1zkfSWL81qjZsiFbYf36SPhXRF2kMp?usp=sharing) 
По забавной истории - это может быть описание какой-то вашей перемены, урока, мероприятия школьного, поездки с классом. Такие “истории” в школьной жизни встречаются каждый день, нужно просто их вспомнить.

⌛️ На всё это дело у тебя также 15 дней, то есть к (число, смотреть в карточке класса) всё должно быть сделано.
Заранее говорю тебе большое спасибо! ❤️
Сообщение  родителю

Здравствуйте! 
✅ Мы начали работу с ребятами по сбору информации для журнала. Дали им 15 дней на выполнение заданий по написанию текста для журналов. Передайте, пожалуйста, родителям, чтобы они проконтролировали ребят, чтобы весь текст был написан без грамматических ошибок и в нужном объёме в срок. Заранее спасибо! 🙏`})})})]})});case"individual":return r.jsx("div",{className:"space-y-8",children:r.jsxs(G,{children:[r.jsx(he,{children:r.jsxs(xe,{className:"flex items-center",children:[r.jsx(Re,{className:"h-5 w-5 mr-2 text-blue-600"}),"Сообщение в беседу класса (начальное)"]})}),r.jsx(Q,{children:r.jsx("div",{className:"bg-gray-50 p-4 rounded-lg",children:r.jsx("p",{className:"whitespace-pre-wrap text-sm leading-relaxed",children:`Инд
Сообщение в беседу класса

Ребята, привет! 👋
Меня зовут (имя менеджера), я являюсь менеджером вашего класса по подготовке выпускных журналов 🤓

Основные организационные моменты:
❗️Эта беседа будет только информационной, поэтому важно: В БЕСЕДЕ НЕ СПАМИТЬ, чтобы никакие важные сообщения не потерялись.
❗️По всем вопросам вы можете обращаться ко мне в личные сообщения в это время (менеджер указывает своё рабочее время), не стесняйтесь 😇

📸В беседу добавлен ваш фотограф - (имя фотографа) . 

Теперь у меня к вам несколько первых заданий:
✅Добавиться ко мне в друзья, чтобы я мог написать вам в личные сообщения в случае необходимости.
✅Подписаться на наш ИНСТ и группу ВК, там мы будем выкладывать разные моменты работы с вашим классом. Вот ссылка на группу в вк: https://vk.com/imjornal , название нашей инсты: im.jornal.
✅Выбрать старосту или добровольца, с которым я буду держать связь, и который будет мне помогать в кое-каких небольших, но важных моментах. Староста/доброволец, отпиши мне в ЛС🙏

Вся наша команда и лично я сделаем всё возможное, чтобы работа была в кайф, и вы получили классные, стильные, и уникальные выпускные журналы. Начнём! 🚀
Сообщение в беседу класса

Ребята, подскажите, все ли ваши одноклассники есть в беседе? 
❗️Тут должны быть даже те, кто не берёт журнал. Если кого-то не хватает, то добавьте. Если у человека нет ВК, то напишите мне его ФИ. 
Сообщение ответственному родителю

Здравствуйте! 👋
Меня зовут (…), я являюсь менеджером по подготовке выпускного журнала вашего ребёнка! 👨‍💻
Мне предоставили Ваш контакт как ответственного родителя. Как я могу к Вам обращаться?


📍Совсем скоро мы начнём работу с классом. С ребятами мы взаимодействуем через беседу в ВК. Мне необходимо добавить Вас в эту беседу. Писать там ничего не придётся. Все что потребуется: это наблюдать при необходимости за новостями и процессом подготовки журналов, передавать актуальную информацию остальным родителям.
✅ Можете, пожалуйста, прислать ссылку на вашу страницу в ВК. Или, если не получается, скинуть ссылку. Скажите, как Вас там найти.

📍Также, просьба: предоставить на всякий случай контакт ещё одного родителя, с кем мы могли бы взаимодействовать по поводу работы над журналами.
Сообщение в беседу класса

Ребята, привет! 👋 
❗️Посмотрите, пожалуйста, правильно ли написаны ваши имена и фамилии.
Это важно, потому что так будет напечатано в журналах. Внести правки потом будет невозможно, поэтому всё проверить необходимо сейчас.

P.S. Список составлялся на основе данных, предоставленных родителями 📋

Менеджеру необходимо создать опросник в вк:
Название: Проверьте правильность ваших ФИ.
Варианты ответа:
-Всё правильно
-Неправильно (написал менеджеру, как нужно исправить)
Сообщение ответственному родителю

Здравствуйте! 👋
Сейчас необходимо переслать это сообщение в родительский чат.

Сейчас я отправлю Вам список ребят. Пожалуйста, проверьте, все ли имена и фамилии написаны правильно?
❗️Этот момент очень важен, потому что так, как ФИ указаны здесь, так они и будут написаны в журналах. 
❗️Также, пожалуйста, проверьте правильно ли указан класс (нужна буква класса или нет). 


Особое внимание буквам Е/Ё (к примеру, Артем/Артём), именам Софья/София, Данил/Даниил/Данила и т.п.  

Отпишите мне, как только всё будет проверено. Заранее спасибо! 💙 
Сообщение ответственному родителю

Здравствуйте! 👋

❗️Очень важный вопрос, который необходимо решить родителям сообща: будем ли вставлять портретные фото ребят в журнал Классного руководителя, которые не берут журнал?

Выпускникам, которые не заказывают журнал, наш фотограф не будет делать индивидуальные фото. В случае необходимости им придётся прислать свои фотографии (по одной фотке). 
📍Важный момент: наши фото и фото тех, кто не берёт журнал, будут сильно отличаться по качеству, что вероятно может портить визуальную составляющую журнала. 

Вставить не наши фото никакой сложности не будет, вопрос в том, есть ли в этом необходимость? Прошу принять решение сегодня-завтра.
Заранее спасибо! 💙
Сообщение в беседу класса

Всем привет! 👋 
✍️ Мы начинаем сбор текстовой информации для ваших выпускных журналов. Сначала сообщу вам общий регламент этого этапа работы, затем напишу что, куда и когда.

По регламенту:
1)❗️Вам дается 15 дней на выгрузку всех материалов для журнала, то есть к 20:00 (дедлайн; смотреть в карточке класса) всё у всех должно быть загружено. После истечения срока никакую информацию внести будет НЕЛЬЗЯ!!! Поэтому отнестись к этому нужно с должным вниманием и ответственностью;
2)❗️При написании текстовой информации обращайте внимание на ГРАМОТНОСТЬ!!! Орфографические, пунктуационные и речевые ошибки в тексте журнала мы не исправляем. Также мат, оскорбления, пошлости и тому подобные выражения в журнал вставлены не будут, и более того, задания в таком случае придётся переделывать.

📂Инструкция как, что и куда:
1) 📝 ГУГЛ ОПРОС «ОСНОВНАЯ ИНФОРМАЦИЯ»: необходимо ответить на все вопросы по порядку за 1 раз, так как при выходе ответы не сохраняются. Все вопросы обязательные. Перед каждым вопросом указано примерное количество предложений, в которое нужно обязательно уложиться.
Все подробности по заполнению опроса указаны в описании самого опроса. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось. Вот ссылка на опрос, который необходимо пройти каждому из вас в нужный дедлайн:
(ссылка на гугл-форму)

2) 🗂️ ИНДИВИДУАЛЬНАЯ ПАПКА ВЫПУСКНИКА: в ней будут находиться все ваши папки. Задача: найти свою папку и зайти в неё. В этой папке будут другие:
- 👶 ПАПКА «ДЕТСКИЕ ФОТО»: в эту папку нужно загрузить свои детские фотографии из начальной школы (в идеале 1-ый класс). Количество фото: либо 2 вертикальные, либо 1 вертикальное и 2 горизонтальные.
- 👨‍👩‍👦 ПАПКА «ФОТО С РОДИТЕЛЯМИ»: в эту папку нужно загрузить свои фотографии с родителями или же просто фотографии родителей в количестве 2 фотографий (НЕ БОЛЕЕ 2-х ФОТО!).
-🤳 ПАПКА «МОЯ ВНЕУЧЕБНАЯ ЖИЗНЬ»: в эту папку необходимо загрузить какие-либо памятные фотографии из своей повседневной жизни в количестве 4 фотографий (спорт, друзья, увлечения, поездки, перемены и так далее). ВАЖНО: нужно прислать 4 ВЕРТИКАЛЬНЫЕ фотографии.

- 📸 ПАПКА «ФОТО ИЗ ПОМЕЩЕНИЯ»: в эту папку ничего загружать самостоятельно НЕ НУЖНО. Сюда фотографы загрузят фотографии для журнала, сделанные на фотосессии;
(ссылка на папку “Выпускники”)
В этой же папке (“Выпускники”) ещё есть:
- 🤳 ПАПКА «НАША ШКОЛЬНАЯ ЖИЗНЬ»: в эту папку необходимо загрузить какие-либо памятные для вашего класса фотографии из повседневной жизни класса (спорт, друзья, поездки, перемены и так далее). ВАЖНО: нужно прислать либо 3 горизонтальных фотографии, либо 2 горизонтальные и 2 вертикальные. 
Старайтесь, чтобы фотографии были или общие, или чтобы много людей из класса было на фотографии. Эти фотографии у всех в журналах будут одинаковые. Если есть желание, Вы можете специально самостоятельно сделать прикольные памятные лайф фотки для вашего журнала.

3) 🫂 ГУГЛ ОПРОС «ПОЖЕЛАНИЯ И СЛОВА ОДНОКЛАССНИКАМ»: здесь всем нужно будет написать пожелания или памятные слова КАЖДОМУ своему однокласснику, все пожелания и слова будут вставлены в ваши журналы с подписью от кого оно. Старайтесь писать для всех, чтобы спустя время было приятно перечитывать написанное для вас. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.
(ссылка на гугл-форму)

4) 💭 ГУГЛ ОПРОС «ЦИТАТЫ»: здесь ВСЕМ нужно будет написать цитату, которая будет располагаться на отдельной странице журнала. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.
(ссылка на гугл-форму)


‼️Ещё раз акцентирую внимание на сроках, грамотности, количестве фотографий и объёме текста. Пожалуйста, соблюдайте эти правила, чтобы все ваши журналы были офигенными. На загрузку всех заданий у вас уйдёт примерно час. И ещё совет: не откладывайте всё на последний день, готовьте всё постепенно, с чувством, с толком, с расстановкой, чтобы наполнение журнала информацией было на высочайшем уровне. 
Желаю всем удачи! 🍀 
Сообщение  старосте

Привет! 👋
Смотри, у меня к тебе как к самому ответственному выпускнику есть несколько очень важных заданий 🎓
 В журнале есть блоки, посвящённые учителям 👩‍🏫 Вот, что нужно:
❗️ Необходимо пройтись по учителям-предметникам (классный руководитель не в счёт) и собрать с них пожелания для вашего выпускного журнала. Одно пожелание от одного учителя. У всех выпускников будут одни и те же пожелания, то есть одно общее пожелание от учителя на класс. Можешь это сделать либо самостоятельно, либо разделить это задание между ребятами (чтобы одни ребята попросили пожелание у одного учителя, другие у другого и так далее, пока не соберутся пожелания от всех учителей).
❗️❗️Необходимо всему вашему классу собраться и вспомнить смешные фразочки ваших учителей (всего нужно 8-10 фраз). То есть те фразы, которые конкретный учитель говорил постоянно, либо фразы, которые ассоциируются с конкретным учителем. Мы их тоже вставим вам в журналы, они будут также у каждого в журнале одинаковые.
❗️❗️❗️Необходимо попросить у классного руководителя, чтобы он написал слова напутствия для вашего класса. Одно общее пожелание для всего класса (объём: 70-110 слов) 

✅ По итогу тебе нужно прислать мне 3 ворд документа: первый с пожеланиями всех учителей (у каждого пожелания написать ФИО учителя и ПРЕДМЕТ, который он у вас ведёт), второй документ со смешными фразами учителей (также у каждой фразы ФИО учителя и ПРЕДМЕТ, который он у вас ведёт), третий с пожеланием классного руководителя (с ФИО классного руководителя)
Вот ссылка на примеры документов. Их нужно скачать, заполнить и прислать мне. (https://drive.google.com/drive/folders/1LA_LF8hnFICCcMJC5tUNqbC4MDJo1kVL?usp=sharing)

🙏 Также проследи, пожалуйста, чтобы вы вместе с классом загрузили 4 лайф фотки класса. Я об этом задании написал в вашу беседу.

⌛️ На всё это дело у тебя также 15 дней, то есть к (число, смотреть в карточке класса) все должно быть сделано.
Заранее говорю тебе большое спасибо! ❤️
Сообщение  родителю

Здравствуйте! 👋

✅ Мы начали работу с ребятами по сбору информации для журнала. Дали им 15 дней на выполнение заданий по написанию текста для журналов. Передайте, пожалуйста, родителям, чтобы они проконтролировали ребят, чтобы весь текст был написан без грамматических ошибок и в нужном объёме, фотографии загружены в нужном количестве, и чтобы никто не опоздал и прислал нам все материалы вовремя. Заранее спасибо! 🙏
Ещё один момент: одно из заданий для ребят - прислать 2 фотографии с родителями или просто фото родителей. Если возникают трудности с поиском фото, их нужно успеть сделать за 15 дней. Нужны самые обычные фото, даже селфи подойдёт. Главное, чтобы качество фото было приемлемым.

❗️Второй момент касается уже задания непосредственно для самих родителей. Каждому родителю нужно написать напутственные слова-пожелания для своего ребёнка. Действия родителя:
1.	Перейти по этой ссылке: (ссылка на гугл-форму). 
2.	В первом вопросе нужно написать Фамилию и Имя своего ребёнка.
3.	Во втором вопросе нужно написать напутственные слова-пожелания для своего ребёнка.
4.	Как только все будет написано, нужно нажать кнопку «ОТПРАВИТЬ», она будет в самом низу.
ВАЖНО: у каждого ребёнка должно быть одно пожелание, то есть если мама и папа хотят написать разные слова, то они должны их написать в одной и той же Гугл-форме с пометкой ОТ МАМЫ: … и ОТ ПАПЫ: … 

‼️ Обращаю внимание на то, что опрос необходимо заполнить за один раз, иначе ничего не сохранится и придётся писать заново. Когда пожелание будет полностью написано, перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.

⌛️ Срок на выполнение этого задания у Вас, как и у ребят, 15 дней (до (число, смотреть в карточке класса)).

‼️ Ваша задача: переслать это сообщение в чат родителей и проконтролировать, чтобы все родители увидели это сообщение. Если у кого-то из родителей возникнут какие-либо проблемы с заполнением Гугл-формы, пусть пишут Вам, а Вы пересылайте их сообщения мне.
Ещё раз спасибо! Хорошего Вам дня! ☀️
Сообщение старосте

Привет! 👋 
🙏 У меня есть просьба к тебе:
Напиши мне, пожалуйста, следующую информацию:
1.	Сколько у вас в классе мальчиков и девочек
2.	Список предметов, которые вы прошли за 11 лет обучения (напиши +- по памяти)
3.	Список предметов, которые вы изучаете именно в 11 классе 
Ещё раз большое спасибо! 💙 

Сообщение в беседу класса:

Ребята, привет! 👋
Оперативное задание, которое выполнить нужно каждому сегодня. Пройти этот опросник (он анонимный): (ссылка на опросник)
Прохождение опросника займёт у вас меньше минуты 😅
Это нужно для страницы со статистикой 📊 
КЛАСС РАЗДЕЛЁН НА ПОЛОВИНЫ, ОПТИМАЛЬНЫЙ КЛАСС
Ребята, привет! 👋
📸 Итак, мы начинаем 2 этап подготовки к фотосессии.
🗓️ Вот даты, из которых вы можете выбрать удобные для вас: 
(свободные даты фотографа). 

❗️ Напоминаю, вы выбираете 2 даты, первая дата - для первой половины класса. Вторая дата - для второй половины класса. 
⏱️ Также, необходимо определиться со временем. ВАЖНО: группы идут друг за другом (например, первая группа фоткается с 13:00 до 13:45, значит следующая группа должна быть в студии уже в 13:40).

📍 Также вам необходимо определиться с локациями, где вы будете фотографироваться. Напоминаю, что одна локация - для половины класса. Локации у двух половин могут отличаться. 
✅ Ваш класс заказал такой вариант, при котором мы предоставляем локацию для съёмок в студии. Вы выбираете понравившийся вариант, а мы арендуем. 

Варианты студий:
1.	г. Иваново: Space - любой зал (https://vk.com/space_space_project);
2.	г. Иваново: Азарт студия - зал флэшпоп (https://vk.com/azartstudios?w=product-110133865_1533651/query).

⏳ К 20:00 послезавтрашнего дня жду от старосты список в таком формате:
ПЕРВАЯ ПОЛОВИНА *такого-то числа* фоткается в *такой-то локации*:
Группа 1 в *такое-то время*
Группа 2 в *такое-то время*
И тд 
ВТОРАЯ ПОЛОВИНА *такого-то числа* фоткается в *такой-то локации*:
Группа 3 в *такое-то время*
Группа 4 в *такое-то время*
И тд 

ВАЖНО: расчётное время на группы следующее: 
3 человека можно сфоткать за 35 съёмочных минут; 4 человека - 45 съёмочных минут; 5 человек - 55 съёмочных минут.
Этого времени будет достаточно, чтобы фотограф успел сделать вам необходимое количество фотографий.





КЛАСС !НЕ! РАЗДЕЛЁН НА ПОЛОВИНЫ, ОПТИМАЛЬНЫЙ  КЛАСС
Ребята, привет! 👋
📸 Итак, мы начинаем 2 этап подготовки к фотосессии.
🗓️ Вот даты, из которых вы можете выбрать удобные для вас: 
(свободные даты фотографа). 

❗️ Вы выбираете 1 дату для всего класса. 
⏱️ Также, необходимо определиться со временем. ВАЖНО: группы идут друг за другом (например, первая группа фоткается с 13:00 до 13:45, значит следующая группа должна быть в студии уже в 13:40).

📍 Также вам необходимо определиться с локацией, где вы будете фотографироваться. Один вариант локации для всего класса. 
✅ Ваш класс заказал такой вариант, при котором мы предоставляем локацию для съёмок в студии. Вы выбираете понравившийся вариант, а мы арендуем.
Варианты студий:
1.	г. Иваново: Space - любой зал (https://vk.com/space_space_project);
2.	г. Иваново: Азарт студия - зал флэшпоп (https://vk.com/azartstudios?w=product-110133865_1533651/query).

⏳ К 20:00 послезавтрашнего дня жду от старосты список в таком формате:
Класс фотографируется *такого-то числа* в *такой-то локации*:
Группа 1 в *такое-то время*
Группа 2 в *такое-то время*
И тд 

ВАЖНО: расчётное время на группы следующее: 
3 человека можно сфоткать за 35 съёмочных минут; 4 человека - 45 съёмочных минут; 5 человек - 55 съёмочных минут.
Этого времени будет достаточно, чтобы фотограф успел сделать вам необходимое количество фотографий.
Класс разделён на половины: 
Ребята, привет! 👋 
‼️ Сегодня очень важно дать окончательный ответ насчёт выбора дат и локаций
Жду от старосты итоговое решение ✅

Класс НЕ разделён на половины: 
Ребята, привет!
‼️ Сегодня очень важно дать окончательный ответ насчёт выбора даты и локации
Жду от старосты итоговое решение ✅
Сообщение ответственному родителю:

Здравствуйте! 👋
📍Есть один момент, который нужно решить сейчас. Это касается общей съёмки. Эту съёмку мы проводим в школе, делаем там общее фото класса и фото учителей.
❗️К Вам просьба: через руководство школы договориться, чтобы нашего фотографа пустили в школу для создания необходимых фотографий для выпускного журнала в определенную дату и время (всего на 1 час).

📸 В случае, если администрация школы ни в какую не согласна пускать нас в школу для создания фоток в выпускной журнал, мы предлагаем провести эту съёмку в студии. Аренда студии в данном случае для общей съёмки осуществляется за счёт заказчиков. День и время съёмки будут выбирать выпускники из дат, предложенных нами. 

Как только станет известно, сообщите мне. Заранее спасибо! 💙
Сообщение ответственному выпускнику
Только для классов, у которых стоит соответствующая задача
Привет! Смотри, мы начинаем решать вопрос насчёт общей съёмки вашего класса. Суммарно общая съёмка будет идти около 1-го часа. За это время мы должны сделать: 
•	Индивидуальное фото классному руководителю (5 минут)
•	Общее фото учителей-предметников (5 минут)
•	Две общие фотографии класса (40 минут) 
Первое, что нужно: обсудите с ребятами, в какой день недели и какое время будет удобно. После этого мы вам предложим варианты дат.
Ожидаю от тебя ответ в таком формате: 
Общую съёмку можем провести: 
•	в понедельник с 11:00 
•	во вторник в интервале с 12:00 до 14:00
•	в среду после 15:00 
Ответ нужно дать к завтрашнему дню. Спасибо!
Сообщение старосте  
Привет! 👋
📍В общем смотри, у нас есть небольшая задачка.
С вашим классом надо в один день сделать общую фотку всего класса. Съёмка будет длиться 1 час ⏳

❌ В школе провести эту съёмку не получится, поэтому поступим следующим образом:
1.	👩‍🏫 Одно общее фото учителей вам будет необходимо сделать самостоятельно в школе на айфон какого-нибудь ученика из класса (вот инструкция: https://docs.google.com/document/d/17v_WkHglexeNrQc4m98zwaGd2fXoW2tq9R4M6kj4LVA/edit?usp=sharing).
2.	📸 Съёмка класса будет проходить в студии. Вам с ребятами сообща нужно выбрать дату и время съёмки из предложенных. Надо подобрать день так, чтобы всем было удобно:
(свободные даты и время фотографа общей съёмки)
❗️Нужно подобрать такую дату и время, чтобы ВСЕ ребята смогли присутствовать. 
3.	👩‍🏫 Одно индивидуальное фото классного руководителя. Желательно, чтобы он смог присутствовать с Вами на этой съёмке. В ином случае Вам необходимо будет либо сфотографировать его самостоятельно в школе (по этому примеру: https://docs.google.com/document/d/19pldGgnk7HLcE2o7WVhn_cV9OTKwfFsNPTsaWgx736I/edit?usp=sharing ), либо прислать его фото файлом из соц. сетей в хорошем качестве.

Общее фото класса делаем примерно 40 минут ⏳
Нам с вами надо будет сделать 2 общие фотки ‼️
Эти фото будут интересными, а не просто вас в линеечку поставят 🤌
Фотографии можно сделать как в одном, так и в двух разных образах (если образа 2, то переодеться нужно будет очень быстро) 👗👔

💡 Мы заинтересованы в том, чтобы сделать всё максимально круто, поэтому понадобится небольшая помощь.
Вопрос по общей съёмке я буду решать через тебя 🤝

Что требуется: 
1) 📍Выбрать день и время, когда все выпускники вашего класса смогут.
2) 📍Решить по образу: вы будете на обеих фотках в одном образе или разных. 
Ожидаю от вас день и время

Сообщение старосте

Привет! 👋

📍В общем смотри, у нас есть небольшая задачка.
С вашим классом надо в один день сделать общую фотку вашего учительского состава и общую фотку всего класса. Съёмка будет длиться 1 час ⏳

👩‍🏫 Одно общее фото учителей делаем в школе - 5 минут времени, индивидуальное классрука - 5 минут.
Надо будет собрать всех учителей на 5 минут, чтобы мы сделали это фото. 
❗️ВАЖНО: учителей надо предупредить заранее (лучше первое предупреждение за 2 недели до съёмки, второе предупреждение за неделю до съёмки, третье предупреждение за 2 дня до съёмки, учителям лучше так) что фото учительского состава всех вместе!

Общее фото класса делаем в школе 40 минут ⏳
Нам с вами надо будет сделать 2 общие фотки ‼️
Эти фото будут интересными, а не просто вас в линеечку поставят 🤌
Фото можно будет сделать в спортзале/актовом зале/кабинете/коридоре 🏛️
Фотографии можно сделать как в одном, так и в двух разных образах (если образа 2, то переодеться нужно будет очень быстро) 👔👗

❗️ОЧЕНЬ ВАЖНО, что процесс съёмки необходимо организовать последовательно, одно за другим (фото учителей и сразу же затем общее фото класса (ну либо наоборот в последовательности), без временных промежутков).
Надо подобрать день так, чтобы всем было удобно. 
‼️Ну и главное, чтобы фотографа пустили в школу!!!

💡 Мы заинтересованы в том, чтобы сделать всё максимально круто, поэтому понадобится небольшая помощь.
Вопрос по общей съёмке я буду решать через тебя 🤝

Что требуется: 
1) 📍Выбрать день и время, когда смогут учителя и ваш класс.
Варианты: 
(свободные даты и время)
(Необходимо выбрать один день и одно время: например, 24 января в 11:00 учителя в 11:10 весь класс.) 
2) 📍Предупредить учителей, что будет одно общее фото всего учительского состава и индивидуально классного руководителя.
3) 📍Решить с классом, где будем делать общее фото - это может быть или актовый, или спортивный зал. 
4) 📍Решить по образу: вы будете на обеих фотках в одном образе или разных. 
5) 📍Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный вами день и время. 
6) 📍Необходимы будут: 2 парты, стулья около 15 штук.

Ожидаю от вас день и время

Сообщение родителю

Здравствуйте! 👋

✅ Мы с ребятами решаем вопрос насчёт общей съемки класса и учителей. 
❌ В школе провести эту съёмку не получится, поэтому поступим следующим образом:
1.	👩‍🏫 Одно общее фото учителей выпускники сделают самостоятельно в школе на хороший телефон. Инструкцию мы им скинули.
2.	📸 Съёмка класса будет проходить в студии. Ребята выбрали следующую дату и время - (указать время, которое выбрали выпускники). Как говорилось ранее, оплата студии для этой съёмки осуществляется за счёт заказчиков.
3.	👩‍🏫 Одно индивидуальное фото классного руководителя. Желательно, чтобы он смог присутствовать с выпускниками на съёмке. В ином случае выпускникам необходимо будет либо сфотографировать его самостоятельно в школе (инструкцию тоже скинули), либо прислать его фото файлом из соц. сетей в хорошем качестве.

Общее фото класса делаем примерно 40 минут ⏳
Нам с Выпускниками надо будет сделать 2 общих фото ‼️

Заранее ставлю Вас в известность, спасибо

Сообщение родителю
Здравствуйте! 👋

✅ Мы с ребятами решили вопрос насчёт общей съемки класса и учителей. Она будет проходить (выбранная дата и время)

❗️Продублирую Вам инструктаж по этой съемке, чтобы Вы были в курсе, а также проконтролировали процесс через классного руководителя.

👩‍🏫 Одно общее фото учителей делаем в школе - 5 минут времени, индивидуальное классного руководителя - 5 минут.
Надо будет собрать всех учителей на 5 минут, чтобы мы сделали это фото. 
❗️ВАЖНО: учителей надо предупредить (лучше первое предупреждение за 2 недели до съёмки, второе предупреждение за неделю до съёмки, третье предупреждение за 2 дня до съёмки, учителям лучше так), что фото учительского состава всех вместе!

Общее фото класса делаем в школе 40 минут ⏳

‼️Ну и главное, чтобы фотографа ПУСТИЛИ в школу!!!

💡Мы заинтересованы в том, чтобы сделать всё максимально круто, поэтому просим вас проконтролировать организацию общей съёмки.

Что требуется: 
1) 📍Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный день и время. 
2) 📍Предупредить учителей, что будет одно общее фото всего учительского состава и индивидуально классного руководителя.
3) 📍Необходимы будут: 2 парты, стулья около 15 штук.

Заранее спасибо

Сообщение старосте

Привет! 👋 
📸 Общая съёмка будет проходить в студии (дата и время съёмки), (ссылка на студию, название зала).

По съёмке: 
1.	👔👗 Решить по образу: вы будете на обеих фотках в одном образе или разных.
2.	👞 ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
3.	📍ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
❗️Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ.
4.	🗑️ Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой.

Что касается учителей: 
1.	❗️Одно общее фото учителей сделать самостоятельно в школе на айфон кого-нибудь из учеников класса (вот инструкция: https://docs.google.com/document/d/17v_WkHglexeNrQc4m98zwaGd2fXoW2tq9R4M6kj4LVA/edit).
2.	❗️Одно индивидуальное фото классного руководителя. Желательно, чтобы он смог присутствовать с Вами на съёмке. В ином случае вам необходимо будет либо сфотографировать его самостоятельно в школе (по этому примеру: https://docs.google.com/document/d/19pldGgnk7HLcE2o7WVhn_cV9OTKwfFsNPTsaWgx736I/edit), либо прислать его фото файлом из соц. сетей в хорошем качестве.
Сообщение старосте

Привет! 👋
📸 Общая съёмка будет проходить у вас в школе (дата и время съёмки)
Что требуется: 
1) Организовать учителей, чтобы они все собрались в одном месте в (время начала съёмки учителей) 👩‍🏫
2) Решить с классом, где будем делать общее фото - место 🏛️
3) Решить по образу: вы будете на обеих фотках в одном образе или разных 👔👗
4) Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный вами день и время 👨‍💼
5) Необходимы будут: 2 парты, стулья около 15 штук ✅

Сообщение родителю

Здравствуйте! 👋
✅ Сообщение с уточнением по общей съёмке отправил в беседу с ребятами. Она будет проходить (дата и время съёмки, ссылка на студию, название зала)

Что касается учителей: 
1.	❗️Одно общее фото учителей выпускники сделают самостоятельно в школе на хороший телефон.
2.	❗️Одно индивидуальное фото классного руководителя. Желательно, чтобы он смог присутствовать с выпускниками на съёмке.

Пожалуйста, проконтролируйте процесс подготовки. Заранее спасибо! 💙
Сообщение родителю

Здравствуйте! 👋
✅ Сообщение с уточнением по общей съёмке отправил в беседу с ребятами. 

Дублирую Вам информация, что требуется от учеников: 
1) Организовать учителей, чтобы они все собрались в одном месте в (время начала съёмки учителей) 👩‍🏫
2) Решить с классом, где будем делать общее фото - место 🏛️
3) Решить по образу: вы будете на обеих фотках в одном образе или разных 👗👔
4) Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный вами день и время 👨‍💼
ВАЖНО: нужно, чтобы в день съёмки за 5 минут до начала кто-нибудь (это может быть классный руководитель, староста или кто-либо из родителей) встретил фотографа у школы и провёл к месту, где будет проходить съёмка. Решите, пожалуйста, этот вопрос и предоставьте мне номер телефона этого человека. Фотограф по приезде позвонит, скооперируются 
5) Необходимы будут: 2 парты, стулья около 15 штук ✅

Пожалуйста, проконтролируйте процесс подготовки. Заранее спасибо!💙
Сообщение старосте

Привет! 👋
❗️Напоминаю, что общая съёмка будет проходить завтра в студии (дата и время съёмки), (ссылка на студию, название зала). В студию всем необходимо прийти за 10 минут до начала съёмки.

📸 По съёмке: 
1.	👔👗 Решить по образу: вы будете на обеих фотках в одном образе или разных.
2.	👞 ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
3.	📍 ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
❗️Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ.
4.	🗑️ Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой.


Сообщение старосте

Привет! 👋 
❗️Напоминаю, что общая съёмка будет проходить завтра у вас в школе (дата и время съёмки). Фотограф приедет к школе за 10-15 минут до съёмки. 
‼️ Просьба: встретить его у школы и помочь донести оборудование.

Необходимо: 
1) Организовать учителей, чтобы они все собрались в одном месте в (время начала съёмки учителей) 👩‍🏫
2) Решить с классом, где будем делать общее фото - место 🏛️
3) Решить по образу: вы будете на обеих фотках в одном образе или разных 👗👔
4) Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный вами день и время 👨‍💼
5) Необходимы будут: 2 парты, стулья около 15 штук ✅


Сообщение  родителю

Здравствуйте! 👋
❗️Напоминаю, что общая съёмка будет проходить завтра (дата и время съёмки, ссылка на студию, название зала)
✅ Сообщение с напоминанием о съёмке мы ребятам отправили. 
📍Пожалуйста, скажите родителям, чтобы ещё раз напомнили ребятам. Заранее спасибо! 💙
Сообщение родителю 

Здравствуйте! 👋
❗️Напоминаю, что общая съёмка будет проходить у вас в школе завтра (дата и время съёмки)

Напоминаю, что требуется от ребят: 
1) Организовать учителей, чтобы они все собрались в одном месте в (время начала съёмки учителей) 👩‍🏫
2) Решить с классом, где будем делать общее фото - место 🏛️
3) Решить по образу: ребята будут на обеих фотках в одном образе или разных 👗👔
4) Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный вами день и время 👨‍💼
5) Необходимы будут: 2 парты, стулья около 15 штук ✅

Сообщение с напоминанием о съёмке мы ребятам отправили. 
📍Пожалуйста, скажите родителям, чтобы ещё раз напомнили ребятам. Необходимо убедиться, что фотографа пустят в школу.
Заранее спасибо! 💙
В группах необходимо указать всех выпускников. Неберущих помечать - Имя Фамилия (не берёт). Максимальное количество человек в группе - 5. Максимальное количество групп - см. во втором столбце разделения на группы. 

Ребят, привет 👋 
Проверьте, пожалуйста, все ли есть в списке и всё ли правильно😇
Уточнение по съёмке:
 
Далее все те же скрипты что и в колллективном
`})})})]})});case"kindergarten":return r.jsx("div",{className:"space-y-8",children:r.jsxs(G,{children:[r.jsx(he,{children:r.jsxs(xe,{className:"flex items-center",children:[r.jsx(Re,{className:"h-5 w-5 mr-2 text-blue-600"}),"Сообщение для детского сада"]})}),r.jsx(Q,{children:r.jsx("div",{className:"bg-gray-50 p-4 rounded-lg",children:r.jsx("p",{className:"whitespace-pre-wrap text-sm leading-relaxed",children:`Детс сад
Сообщение ответственному родителю

Здравствуйте!
Меня зовут (…), я являюсь менеджером по подготовке выпускных журналов для вашей группы! 👨‍💻
Мне предоставили Ваш контакт как ответственного родителя. Как я могу к Вам обращаться?


Сейчас я отправлю Вам список ребят. Пожалуйста, проверьте, все ли имена и фамилии написаны правильно?
❗️Этот момент очень важен, потому что так, как ФИ указаны здесь, так они и будут написаны в журналах. 
❗️Также, пожалуйста, проверьте правильно ли указан класс (нужна буква класса или нет). 


Особое внимание буквам Е/Ё (к примеру, Артем/Артём), именам Софья/София, Данил/Даниил/Данила и т.п.  

📍Также, просьба: предоставить на всякий случай контакт ещё одного родителя, с кем мы могли бы взаимодействовать по поводу работы над журналами.

Менеджеру необходимо прикрепить обрезанный скрин списка класса

Сообщение ответственному родителю

Здравствуйте! 👋

❗️Очень важный вопрос, который необходимо решить родителям сообща: будем ли вставлять портретные фото ребят, которые не берут журнал?

Детям, которые не заказывают журнал, наш фотограф не будет делать индивидуальные фото. В случае необходимости их родителям придётся прислать свои фотографии (по одной фотке). 
📍Важный момент: наши фото и фото тех, кто не берёт журнал, будут вероятно сильно отличаться по качеству, что скорее всего будет портить визуальную составляющую журнала. 

Вставить не наши фото никакой сложности нет, вопрос в том, необходимо ли это? Это решение должно быть в первую очередь за родителями тех детей, кто берёт журнал. Прошу принять решение сегодня-завтра.
Заранее спасибо! 💙
Сообщение ответственному родителю

Здравствуйте!
Это сообщение необходимо переслать остальным родителям.
✍️ Мы начинаем сбор текстовой информации и фотографий для выпускных журналов. Сначала сообщу вам общий регламент этого этапа работы, затем напишу что, куда и когда.

По регламенту:
❗️Вам дается 15 дней на выгрузку всех материалов для журнала, то есть к 20:00 (дата дедлайна) всё у всех должно быть загружено. После истечения срока никакую информацию внести будет НЕЛЬЗЯ!!! Поэтому отнестись к этому нужно с должным вниманием и ответственностью;
❗️При написании текстовой информации обращайте внимание на ГРАМОТНОСТЬ!!! Орфографические, пунктуационные и речевые ошибки в тексте журнала мы не исправляем. 

📂 Инструкция как, что и куда:
Задание №1. Текстовые блоки:
1.	Необходимо написать 4 прилагательных, описывающих вашего ребёнка
2.	Необходимо написать ответы-размышления ребёнка на вопрос «Что я думаю о себе»
3.	«Интервью со мной». Необходимо написать ответа ребёнка на каждый вопрос
4.	«Памятные истории». Родителям самостоятельно, без участия ребёнка, необходимо написать какую-либо историю из детства ребёнка
5.	«Письмо самому себе в будущее». Родителям необходимо написать слова-размышления своего ребёнка о своем будущем
6.	«Пожелание от родителей». Родителям необходимо написать пожелания для своего ребёнка.
Вот ссылка на гугл-форму, в которой это необходимо заполнить: 
(вставить ссылку на гугл форму)

Эту информацию можно собрать родителям самостоятельно, или попросить воспитателя организовать в группе в садике интерактив, при котором дети вместе с воспитателем будут писать необходимую информацию для выпускного журнала, чтобы затем воспитатель передал родителя написанную информацию для загрузки в гугл-форму.

ОТДЕЛЬНОЕ ЗАДАНИЕ ДЛЯ ВОСПИТАТЕЛЕЙ: воспитателям нужно написать пожелания для ребят. Один воспитатель - одно пожелание. По объёму: 20-35 слов. Эти пожелания они могут прислать Вам либо просто текстовым сообщением, либо Ворд документом. Пожелание нужно будет переслать мне и написать ФИО воспитателей.

СБОР РИСУНКОВ ОТДЕЛЬНЫМ СООБЩЕНИЕМ
Задание №2. «Рисунок» 
Смотрите, в журнале у каждого есть страница с рисуноком семьи. Каждому ребёнку необходимо нарисовать свою семью. (УБЕДИТЕЛЬНАЯ ПРОСЬБА К РОДИТЕЛЯМ: не помогать, пусть рисунок будет полностью ребёнка). Этот рисунок всем будет необходимо перенести в электронный формат (формат может быть JPG, IMG, PNG). Главное, чтобы скан или фото были максимально хорошего качества. 

Тут есть 2 варианта, как и со сбором текста: дать задание воспитателю, чтобы ребята вместе в садике сделали это под руководством воспитателя. Ну или же каждый дома самостоятельно, тут уже решение за Вами. 

Рисунки необходимо загрузить в индивидуальные папки: (ссылка на папку выпускников). Каждому родителю необходимо загрузить рисунок в папку своего ребёнка.


СБОР ФОТО ОТДЕЛЬНЫМ СООБЩЕНИЕМ 
Задание №3. «Сбор фотографий» 
(ссылка на папку Выпускники) - в этой общей папке для каждого ребёнка есть своя отдельная папка, в которые родителям нужно загрузить фотографии:
•⁠  ⁠«10 страница 4 лайф фотки ребёнка» в эту папку каждому родителю нужно загрузить 4 фотографии своего ребёнка. Фотографии могут быть любые, главное, чтобы качество было как можно лучше
•⁠  ⁠⁠«11 страница 9 ВЕРТИКАЛЬНЫХ лайф фото ребёнка + каждую переименовать» в эту папку так же каждому родителю загрузить 9 фотографий своего ребёнка И КАЖДОЙ ФОТОГРАФИИ ДАТЬ НАЗВАНИЕ, ПЕРЕИМЕНОВАВ ЗАГРУЖЕННОЕ ФОТО НА НЕОБХОДИМОЕ НАЗВАНИЕ. Название к фоткам лучше делать коротким (на море, с бабушкой, я у мамы каскадёр, с папой на природе). В качестве примера прилагаю эту страницу из шаблона. (прикрепить скрин)
•⁠  ⁠⁠«14 страница «Мои увлечения» 2 фотки» в эту папку каждому родителю нужно загрузить фото своего ребёнка, где он занимается каким-то делом (рисует, поет, бегает и тому подобное).
•⁠  ⁠⁠«17 страница 6 горизонтальных фотографий с утренников» в эту папку каждому родителю нужно загрузить 6 фотографий, сделанные на утреннике.
•⁠  ⁠⁠«18 страница 4 обычных индивидуальных фотографии» в эту папку нужно загрузить 4 ВЕРТИКАЛЬНЫХ фотографии, на которых ребёнок один. Абсолютно любые фото, главное, чтобы на фото был ребёнок один.
•⁠  ⁠⁠«21 страница 1 самое качественное и памятное фото ребёнка» в эту папку нужно загрузить 1 ВЕРТИКАЛЬНУЮ наиболее хорошую и качественную индивидуальную фотографию ребёнка.
•⁠  ⁠⁠«24 страница 2 фото с родителями/фото родителей» в эту папку родителям нужно загрузить либо 2 ВЕРТИКАЛЬНЫЕ, либо 1 ВЕРТИКАЛЬНУЮ и 2 ГОРИЗОНТАЛЬНЫЕ, либо 2 ГОРИЗОНТАЛЬНЫЕ  фотографии со своим ребёнком.

Отдельное задание для Вас: 
(ссылка на папку общие фото) - папка, куда нужно загрузить 2 общие фото группы. Эти фотографии будут у всех в журналах одинаковые, поэтому туда нужно загрузить фото, на которых присутствуют все ребята.

Понимаю, текста много, но написано все подробно
Если будут вопросы - пишите 💙

ДЛЯ ДС, КОТОРЫЕ ФОТКАЮТСЯ В ОДИН ДЕНЬ:
Сообщение ответственному родителю

Здравствуйте!
Переходим к новому этапу подготовки журналов - фотосъемке

👨‍👩‍👦‍👦 Необходимо разбиться на группы по 2-3 человека. Всего журнал делают (…) человек. Значит, получается  (…) по  (…) человека

📸 Процесс съёмки будет проходить в один день в одной локации. На каждую группу будет выделяться время в соответствии с количеством человек в группе. Выбор дат и локаций будет позже, сейчас нужно разбиться на группы.


📍 Вы должны до 20:00 завтрашнего дня прислать мне список групп в таком формате:
Группа 1: ФИ 1, ФИ 2, ФИ 3 
Группа 2: ФИ 4, ФИ 5, ФИ 6 
Группа 3: ФИ 7, ФИ 8 
И т.д.

Сообщение ответственному родителю
Здравствуйте! 
📸 Мы начинаем 2 этап подготовки к фотосессии.
🗓️ Вот даты, из которых вы можете выбрать удобную для вас: 
(свободные даты фотографа). 

❗️ Вы выбираете 1 дату для всех. 
⏱️ Также, необходимо определиться со временем. ВАЖНО: группы идут друг за другом (например, первая группа фоткается с 13:00 до 13:20, значит следующая группа должна быть в студии уже в 13:10).

❗️ Также вам необходимо определиться с локацией, где дети будут фотографироваться. Один вариант локации для всех. 
✅ Вы заказали такой вариант, при котором мы бронируем студию для съёмок, а вы оплачиваете аренду студии. 

Варианты студий:
1.	г. Иваново: Space - любой зал (https://vk.com/space_space_project);
2.	г. Иваново: Азарт студия - зал флэшпоп (https://vk.com/azartstudios?w=product-110133865_1533651/query).
Ещё вариант, если вы не хотите фотографироваться в студии - съёмка в детском саду (нужно договориться, чтобы нас впустили).

⏳ К 20:00 послезавтрашнего дня жду от Вас список в таком формате:
Класс фотографируется *такого-то числа* в *такой-то локации*:
Группа 1 в *такое-то время*
Группа 2 в *такое-то время*
И тд 

ВАЖНО: расчётное время на группы следующее: 
3 человека - 20 съёмочных минут; 2 человека - 15 съёмочных минут. 
Этого времени будет достаточно, чтобы фотограф успел сделать вам необходимое количество фотографий.

Класс НЕ разделён на половины: 
Здравствуйте! 
‼️ Сегодня очень важно дать окончательный ответ насчёт выбора даты и локации
Жду от Вас итоговое решение ✅

Сообщение ответственному родителю:

Здравствуйте! 👋
📍Есть один момент, который нужно решить сейчас. Это касается общей съёмки. Как правило, мы эту съёмку проводим в саду.
❗️К Вам просьба: через руководство сада договориться, чтобы нашего фотографа пустили в сад для создания необходимых фотографий в выпускной журнал детей в определенную дату и время (всего на 1 час).

📸 В случае, если администрация сада ни в какую не согласна пускать нас в детский сад для создания фоток в выпускной журнал, мы предлагаем провести эту съёмку в студии. Аренда студии в данном случае для общей съёмки осуществляется за счёт заказчиков. День и время съёмки будете выбирать из дат, предложенных нами. 

Как только станет известно, сообщите мне. Заранее спасибо! 💙

Сообщение ответственному родителю

Здравствуйте!

📍У нас есть небольшая задачка.
С ребятами надо в один день сделать общую фотку. Съёмка будет длиться 1 час ⏳

👩‍🏫 Индивидуальные фото воспитателей - 5 минут на каждого воспитателя.

Общее фото ребят делаем в саду 40 минут ⏳
Нам с ребятами надо будет сделать 2 общие фотки ‼️
Эти фото будут интересными, а не просто детей в линеечку поставят 🤌
Фото можно будет сделать в спортзале/актовом зале/кабинете/коридоре 🏛️

❗Надо подобрать день так, чтобы всем было удобно. 

‼️Ну и главное, чтобы фотографа пустили в сад!!!

💡 Мы заинтересованы в том, чтобы сделать всё максимально круто, поэтому понадобится небольшая помощь.
Вопрос по общей съёмке я буду решать через Вас 🤝

Что требуется: 
1) 📍Выбрать день и время, когда смогут ребята и воспитатели.
Варианты: 
(свободные даты и время)
(Необходимо выбрать один день и одно время: например, 24 января в 11:00 воспитатели, в 11:10 все ребята.) 
2)📍Предупредить администрацию сада, чтобы фотографа пустили в сад в выбранный день и время. 
3) 📍Предупредить воспитателей, что будут индивидуальные фото каждого воспитателя отдельно.
4) 📍Решить с воспитателями, где будем делать общее фото - это может быть или актовый, или спортивный зал.  
5) 📍Необходимы будут: 2 парты, стулья около 10 штук.

Ожидаю от вас день и время

Сообщение родителю  
Здравствуйте!
📍У нас есть небольшая задачка.
Необходимо будет в один день сделать общую фотку всех ребят. Съёмка будет длиться 1 час ⏳

❌ В саду провести эту съёмку не получится, поэтому поступим следующим образом:
1.	📸 Съёмка ребят будет проходить в студии. Как говорилось ранее, оплата студии для этой съёмки осуществляется за счёт заказчиков. Родителям нужно выбрать дату и время съёмки из предложенных. Надо подобрать день так, чтобы всем было удобно:
(свободные даты и время фотографа общей съёмки)
❗️Нужно подобрать такую дату и время, чтобы ВСЕ ребята смогли присутствовать. 
2.	👩‍🏫 Одно индивидуальное фото каждого воспитателя. Желательно, чтобы они смогли присутствовать с ребятами на этой съёмке. В ином случае Вам необходимо будет либо сфотографировать их самостоятельно в саду (по этому примеру: https://docs.google.com/document/d/19pldGgnk7HLcE2o7WVhn_cV9OTKwfFsNPTsaWgx736I/edit ), либо прислать его фото файлом из соц. сетей в хорошем качестве.

Общее фото ребят делаем примерно 40 минут ⏳
Нам с ребятами надо будет сделать 2 общие фотки ‼️
Эти фото будут интересными, а не просто детей в линеечку поставят 🤌

💡 Мы заинтересованы в том, чтобы сделать всё максимально круто, поэтому понадобится небольшая помощь.
Вопрос по общей съёмке я буду решать через Вас 🤝

Что требуется: 
📍Выбрать день и время, когда все ребята и родители смогут.
📍Проконтролировать, чтобы в день съёмки присутствовали все ребята с родителями.
⏳ Выбрать дату необходимо в течение 2 дней.. Заранее спасибо


Сообщение родителю

Здравствуйте!
📸 Общая съёмка будет проходить у вас в саду(дата и время съёмки)

Что требуется: 
1) Решить с воспитателями, где будем делать общее фото - место 🏛️
3) Предупредить администрацию детского сада, чтобы фотографа пустили в сад в выбранный вами день и время 👨‍💼
4) Необходимы будут: 2 парты, стулья около 15 штук ✅

Пожалуйста, проконтролируйте процесс подготовки. Заранее спасибо!💙

Сообщение родителю

Здравствуйте! 
📸 Общая съёмка будет проходить в студии (дата и время съёмки), (ссылка на студию, название зала).

По съёмке: 
1.	👞 ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
2.	📍ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
❗️Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ.
3.	🗑️ Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой.

Что касается воспитателей: 
1.	❗️Индивидуальные фото каждого воспитателя. Желательно, чтобы они смогли присутствовать с ребятами на съёмке. В ином случае вам необходимо будет либо сфотографировать их самостоятельно в саду (по этому примеру: https://docs.google.com/document/d/19pldGgnk7HLcE2o7WVhn_cV9OTKwfFsNPTsaWgx736I/edit ), либо прислать их фото файлом из соц. сетей в хорошем качестве.

Пожалуйста, проконтролируйте процесс подготовки. Заранее спасибо! 
Сообщение родителю

Здравствуйте! 
❗️Напоминаю, что общая съёмка будет проходить завтра у вас в саду (дата и время съёмки). Фотограф приедет к саду за 10-15 минут до съёмки. 
❗️Просьба: чтобы его встретили у сада и помогли пройти в сад.

Необходимо: 
1) Решить с воспитателями, где будем делать общее фото - место 🏛️
3) Предупредить администрацию детского сада, чтобы фотографа пустили в сад в выбранный вами день и время 👨‍💼
4) Необходимы будут: 2 парты, стулья около 10 штук ✅

Сообщение родителю

Здравствуйте!
❗️Напоминаю, что общая съёмка будет проходить завтра в студии (дата и время съёмки), (ссылка на студию, название зала). В студию всем необходимо прийти за 15 минут до начала съёмки.

📸 По съёмке: 
1.	👞 ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
2.	📍 ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
❗️Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ.
3.	🗑️ Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой.

В группах необходимо указать всех выпускников. Неберущих помечать - Имя Фамилия (не берёт). Максимальное количество человек в группе - 5. Максимальное количество групп - см. во втором столбце разделения на группы. 

Здравствуйте!
Проверьте, пожалуйста, все ли есть в списке и всё ли правильно😇
Уточнение по съёмке:
Напоминание №1 и №2

Здравствуйте!
Это сообщение нужно переслать остальным родителям.
❗️ Напоминаю, что (число, смотреть в карточке класса) последний день на сбор информации для журнала. 

👥 Вот список тех, у кого что-либо не сделано:
(прикрепить скрин из раздела “Контроль собранной инфы”)

Пример скрина “Контроль собранной инфы”, который необходимо прикрепить: 
Скрин необходимо делать так, чтобы не было видно ничего лишнего.
Напоминание №3
Отправить родителю: 
Здравствуйте!
Это сообщение нужно переслать остальным родителям.
❗️ Напоминаю, что завтра последний день на сбор информации для журнала. 

👥 Вот список тех, у кого что-либо не сделано:
(прикрепить скрин из раздела “Контроль собранной инфы”)

‼️ Важно отметить, что работа по подготовке журнала - поэтапная. Пока у каждого не будут выполнены все задания по сбору информации, мы не сможем перейти к следующему этапу. 

Прошу поставить реакцию об ознакомлении! 💙
Сообщение родителю

Здравствуйте!
Мы закончили сбор необходимой информации для журналов.
Вот то, что нам удалось собрать. В дальнейшем “доскинуть” какую-либо информацию возможности не будет. Пожалуйста согласуйте, что данный список собранной информации финальный. 
Спасибо
 
(сделать скрин листа “Контроль сбора инфы” из списка класса)

ДЛЯ ТЕХ, КТО ФОТКАЕТСЯ В СТУДИИ:
Здравствуйте!
Просьба: переслать это сообщение остальным родителям.

💡 Небольшие лайфхаки для съёмки: 
1.	Подготовить 1 образ для индивидуальных фото
2.	Взять с собой реквизит. Примеры: тёмные очки, головные уборы или атрибуты хобби ребёнка (гитара, мяч и т.д.🕶️🧢🎸)

И ПОЖАЛУЙСТА, НЕ ЗАБЫВАЙТЕ:
1.	ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
2.	ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ.
3.	Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой. 



ДЛЯ ТЕХ, КТО ФОТКАЕТСЯ В САДУ :
Здравствуйте!
Просьба: переслать это сообщение остальным родителям.

💡 Небольшие лайфхаки для съёмки: 
1.	Подготовить 1 образ для индивидуальных фото
2.	Взять с собой реквизит. Примеры: тёмные очки, головные уборы или атрибуты хобби ребёнка (гитара, мяч и т.д.🕶️🧢🎸)
 
🏫 Насчёт съёмки в саду: 
1.	Заранее убедиться, что фотографа пустят в сад.
2.	С воспитателем заранее выбрать локацию, где можно провести фотосессию (кабинет, актовый зал, спортзал, коридоры, библиотека, лестница и т.д.) и договориться, чтобы нас туда пустили. От качества локаций будет зависеть качество самих фотографий. 


ДЛЯ ТЕХ, КТО ФОТКАЕТСЯ НА УЛИЦЕ :
Здравствуйте!
Просьба: переслать это сообщение остальным родителям

💡 Небольшие лайфхаки для съёмки: 
1.	Подготовить 1 образ для индивидуальных фото
2.	Взять с собой реквизит. Примеры: тёмные очки, головные уборы или атрибуты хобби ребёнка (гитара, мяч и т.д.🕶️🧢🎸)
Сообщение родителю

Здравствуйте!
Это сообщение необходимо переслать остальным родителям.
📸 Напоминаю вам, что ребята фоткаются … (числа) в … (локации) в … (время). Не забывайте и приходите вовремя. 

*+ЕСЛИ В СТУДИИ:

ВАЖНО: 
1.	В студию приходите за 10-15 минут до начала съёмки, чтобы успеть переодеться в образ и заклеить подошву обуви, если не сделали это дома 🕙
2.	На съёмке обязательно должен присутствовать кто-либо из родителей или воспитатель

И ПОЖАЛУЙСТА, НЕ ЗАБЫВАЙТЕ:
1.	👞 ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
2.	ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ 💸
3.	Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой 🗑️


Сообщение родителю

Здравствуйте!
Это сообщение необходимо переслать остальным родителям.
🤩 Вот исходники со съемки, которая была (дата съёмки). Фотки сырые, с убранным цветом и светом в минимум. Необработанные, не выровненные и тд.
‼️ НЕ ВЫКЛАДЫВАЙТЕ ИХ НИКУДА.
(ссылка на исходники)

✅ ВАЖНАЯ ИНФА.
1) 📍Необходимо в гугл-опрос записывать номера выбранных вами фоток для обработки в течение 3 суток (то есть до 20:00 (число)). Номера фоток для обработки, которые вы будете писать в гугл опрос, нужно посмотреть в «Информации» к каждой фотографии (троеточие в правом верхнем углу). Номер фото – комбинация букв и цифр (например: IMG_1234.jpg или 3B4A1234.jpg). 
📍Вот необходимый для заполнения гугл-опрос: (ссылка на гугл-форму). В первом вопросе указываете фамилию и имя своего ребёнка; во втором номер фотографии, которая будет на обложке журнала; далее к остальным вопросам также указываете номера фото, которые вы выбрали (в ОДНОМ вопросе должен быть указан ОДИН номер фотографии)

2) 📍Кол-во фоток: 3 индивидуальные (в том числе обложка). 
Старайтесь выбирать фотографии непохожие друг на друга, чтобы у вас в журнале было разнообразие. Рекомендуем выбирать фото на обложку такое, чтобы ребёнок смотрел в камеру и хорошо было видно лицо.

3) 📍В ТЕЧЕНИЕ 3 СУТОК ожидаем номера фоток, потом фотографии будут удалены без возможности довыбрать. Будьте внимательнее! Исходники удаляются совсем.

4) 📍Обращаю внимание на то, что опрос необходимо заполнить за один раз, если выйти на половине написанного, то ничего не сохранится и придётся писать заново. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.
Сообщение родителю
Здравствуйте!
(…) не было на фотосессии с группой. Пусть родители не переживают, мы проведем дополнительную съёмку и сделаем недостающие фотографии. Дату и локацию сообщим позже.
Сообщение родителю

Здравствуйте!
❗️Напоминаю вам, что в течение дня необходимо выбрать фотографии и указать их номера в гугл-форме. 
Не забывайте об этом! 💙
Сообщение родителю

Здравствуйте! 
✅ Все фотки готовы и загружены в ваши папки (указать название папки, например “Фото с помещения”), можете смотреть, сохранять и выкладывать в соц. сети! Пожалуйста, проверьте свои фотографии в течение 24 часов, и, если что-то не так, напишите мне. По истечению 24 часов исправить ничего будет нельзя!
Не забывайте упоминать наш инстаграм im.jornal на фотках 💙

📍Чтобы скачать в хорошем качестве с диска из ваших папок: около списка фоток нажимать на три точки, дальше нажать отправить копию, затем на сохранить изображение.
Сообщение родителю

Здравствуйте! Просьба передать это родителям. 
К нам часто обращаются с просьбой распечатать дополнительно индивидуальные фотографии своих детей после фотосессий, поэтому мы проинформируем сразу: такая возможность есть. 
Стоимость печати:
•	Формат А4 (большой) — 690₽
•	Формат А5 (средний) — 590₽
•	Формат А6 (маленький) — 490₽

Ссылка на фотографии группы: (ссылка на папку выпускники). 
Большая просьба к Вам, как к ответственному родителю, собрать информацию, кому нужно распечатать фотографии. Номера фото, которые нужно распечатать, выбирайте из папки выше.
Это необходимо сделать в ближайшие 3 дня.

Просьба к Вам до (указать дату) написать мне одним сообщением вот в таком формате:
Иванов Матвей - напечатать два индивидуальных фото 
(фото номер 1756 - формат А4 и 1763 - формат А5);
Сидорова Мария - напечатать одно индивидуальное фото 
(фото номер 1975 - формат А5);
Петров Иван - два индивидуальных фото напечатать 
(фото номер 1561 - формат А6).
Сообщение родителю

Здравствуйте! Просьба передать это родителям. 
К нам часто обращаются с просьбой распечатать дополнительно индивидуальные фотографии своих детей после фотосессий, поэтому мы проинформируем сразу. Такая возможность есть. Стоимость печати одного фото формата А4 - 690₽, формата А5 - 590₽, формата А6 - 490₽. 
Вот фотки вашего класса (ссылка на папку выпускники)
Большая просьба к Вам, как к ответственному родителю от класса, собрать информацию, кому нужно распечатать фотографии.
Это необходимо сделать в ближайшие 3 дня.
Просьба к Вам до (указать дату) вот в таком формате мне написать одним сообщением:
Иванов Матвей - напечатать два индивидуальных фото 
(фото номер 1756 - формат А4 и 1763 - формат А5);
Сидорова Мария - напечатать одно индивидуальное фото 
(фото номер 1975 - формат А5);
Петров Иван - два индивидуальных фото напечатать 
(фото номер 1561 - формат А6).
Сообщение родителю

Здравствуйте💙
Можете, пожалуйста, напомнить родителям, что мы можем распечатать дополнительно индивидуальные фотографии ребят. Завтра жду от Вас окончательный список ребят и номеров фото, которые будет необходимо распечатать (в каком количестве и формате). 
Важный момент, потому что потом возможности дополнительной печати индивидуальных фотографий не будет.
Ожидаю от Вас финального сообщения с информацией завтра до 20:00🤗
Сообщение родителю

Здравствуйте!
Вот фото с общей съёмки, необходимо выбрать ✅

Это исходники необработанные, нескадрированные, с убранным светом и цветом.
❗️Поэтому не выкладывать никуда, просто выбрать.
(ссылка на папку с общими фото)
📍Выбрать две фотки (одна - с расстоянием, вторая - без расстояния)
Обе фотки будут в журналах у всех одинаковые.

👩‍🏫 По воспитателям: необходимо дать им выбрать по одной фотке для обработки в журнал. (ссылка на папку с фото воспитателя)
⏳ По времени: завтра до 20:00 сказать мне номера выбранных фотографий из информации (там цифры по типу IMG_1234.jpg или 3B4A1234.jpg)
Сообщение родителю 

Здравствуйте!
Вот фото с общей съёмки, необходимо выбрать ✅

Это исходники необработанные, нескадрированные, с убранным светом и цветом.
❗️Поэтому не выкладывать никуда, просто выбрать.
(ссылка на папку с общими фото)
📍Выбрать две фотки (одна - с расстоянием, вторая - без расстояния)
Обе фотки будут в журналах у всех одинаковые.

⏳ По времени: завтра до 20:00 сказать мне номера выбранных фотографий из информации (там цифры по типу IMG_1234.jpg или 3B4A1234.jpg)

+Если родители ещё не скинули фото воспитателей, то необходимо скинуть сейчас
ЕСЛИ ВЫПУСКНИКА НЕ БЫЛО НИ НА ОДНОЙ СЪЁМКЕ
Сообщение родителю

Перешлите, пожалуйста, это сообщение родителям (Имя Фамилия выпускника)
🤩 Вот исходники с дополнительной съёмки. Фотки сырые, с убранным цветом и светом в минимум. Необработанные, не выровненные и тд.
❗️НЕ ВЫКЛАДЫВАЙТЕ ИХ НИКУДА.
(ссылка на исходники)

✅ВАЖНАЯ ИНФА.
1) 📍Необходимо в личные сообщения прислать номера выбранных фоток для обработки в течение 1 суток (то есть до 20:00 завтрашнего дня). Номера фоток нужно посмотреть в «Информации» к каждой фотографии (троеточие в правом верхнем углу). Номер фото – комбинация букв и цифр (например: IMG_1234.jpg или 3B4A1234.jpg). 
ВАЖНО: пометить индивидуальную фотографию, которую Вы хотите на обложку. Например:  IMG_1234.jpg (Обложка)
📍Прислать номера нужно в формате:
ПРИМЕР - Иванов Иван, школа №1, г. Москва -  IMG_1234.jpg, IMG_4321.jpg (Обложка)



2) 📍Кол-во фоток: 3 индивидуальные (одна из которых - на обложку). Старайтесь выбирать фотографии непохожие друг на друга, чтобы у Вас в журнале было разнообразие.




ЕСЛИ ВЫПУСКНИКУ НЕ  ПОНРАВИЛИСЬ ФОТКИ
Сообщение родителю

Перешлите, пожалуйста, это сообщение родителям (Имя Фамилия выпускника)
🤩 Вот исходники с  дополнительной съёмки. Фотки сырые, с убранным цветом и светом в минимум. Необработанные, не выровненные и тд.
❗️НЕ ВЫКЛАДЫВАЙТЕ ИХ НИКУДА.
(ссылка на исходники)

✅ВАЖНАЯ ИНФА.
1) 📍Необходимо в личные сообщения прислать номера выбранных фоток для обработки в течение 1 суток (то есть до 20:00 завтрашнего дня). Номера фоток нужно посмотреть в «Информации» к каждой фотографии (троеточие в правом верхнем углу). Номер фото – комбинация букв и цифр (например: IMG_1234.jpg или 3B4A1234.jpg). 
ВАЖНО: пометить индивидуальную фотографию, которую Вы хотите на обложку. Например:  IMG_1234.jpg (Обложка)
📍Прислать номера нужно в формате:
ПРИМЕР - Иванов Иван, школа №1, г. Москва -  IMG_1234.jpg, IMG_1235.jpg, IMG_4321.jpg (Обложка)



2) 📍Кол-во фоток: для создания журнала необходимы 3 индивидуальных фото (одно из которых - на обложку). Выберите из фото, которые Вам сделали на прошлой съёмке и на общей, 3 фотографии. Одну из них пометьте, что она на обложку. Старайтесь выбирать фотографии непохожие друг на друга, чтобы у Вас в журнале было разнообразие.






ЕСЛИ ВЫПУСКНИКА НЕ БЫЛО НА ВТОРОЙ СЪЁМКЕ 
Сообщение родителю

Перешлите, пожалуйста, это сообщение родителям (Имя Фамилия выпускника)

🤩 Вот ваши исходники с  дополнительной съёмки. Фотки сырые, с убранным цветом и светом в минимум. Необработанные, не выровненные и тд.
❗️НЕ ВЫКЛАДЫВАЙТЕ ИХ НИКУДА.
(ссылка на исходники)

✅ВАЖНАЯ ИНФА.
1) 📍Необходимо в личные сообщения прислать номера выбранных фоток для обработки в течение 1 суток (то есть до 20:00 завтрашнего дня). Номера фоток нужно посмотреть в «Информации» к каждой фотографии (троеточие в правом верхнем углу). Номер фото – комбинация букв и цифр (например: IMG_1234.jpg или 3B4A1234.jpg). 

2) 📍Кол-во фоток: 1 индивидуальная фотография.

3) 📍ОБЛОЖКА. Сначала необходимо посмотреть обработанные индивидуальные фотографии с первой фотосессии, посмотреть на исходники индивидуальных фоток со второй фотосессии, и выбрать на основе этого одну индивидуальную фотографию на обложку. Если это фото с первой фотосессии, то посмотреть его номер в вашей папке с готовыми фотографиями и прислать мне с пометкой (Обложка). Рекомендуем выбирать фото на обложку такое, чтобы ребёнок смотрели в камеру и хорошо было видно лицо.

В итоге жду от Вас сообщение в примерно таком формате:
Иванов Иван, школа №1, г. Москва 
Выбрал фото IMG_1234.jpg, на обложку её же

Или 
Иванов Иван, школа №1, г. Москва 
Выбрал фото IMG_1234.jpg
На обложку фото с первой фотосессии IMG_4321.jpg




СКИНУТЬ ОТВЕТСТВЕННОМУ РОДИТЕЛЮ: 

Здравствуйте! Высылаю вам фотографии, которые мы сделали на общей съёмке💙
📍Вот ваши общие фото:
(прикрепить ссылку на папку общее фото класса)
📍Фото воспитателей:
(прикрепить ссылку на папку фото  воспитателя)
СКИНУТЬ ОТВЕТСТВЕННОМУ РОДИТЕЛЮ: 

Здравствуйте! Индивидуальные фотографии, которые сделали на дополнительной съёмке, загружены в папки (указать название папки, например “Фото с помещения”). Их можно смотреть, сохранять и выкладывать в соц. сети! Пожалуйста, пусть родители проверят фотографии своих детей в течение 24 часов, и, если что-то не так, напишите мне. По истечению 24 часов исправить ничего будет нельзя!
Не забывайте упоминать наш инстаграм im.jornal на фотках 💙

📍Чтобы скачать в хорошем качестве с диска из ваших папок: около списка фоток нажимать на три точки, дальше нажать отправить копию, затем на сохранить изображение.
 💙
 ЕСЛИ ПРОВЕРЯЮТ РОДИТЕЛИ 
(СООБЩЕНИЕ ОТВЕТСТВЕННОМУ РОДИТЕЛЮ): 

Здравствуйте! 👋
💫 Вот электронные версии ваших журналов: 
(ссылка на папку с готовыми журналами)

📍Ваши действия: 
1) В течение двух суток просмотреть журналы на наличие каких-либо ошибок в тексте. 
Необходимые правки по тексту написать здесь: (ссылка на гугл-форму)
❗️ВАЖНО: данную гугл-форму необходимо пройти ВСЕМ родителям вне зависимости от того, требуются ли правки!

2)✅ Правки, которые можно внести: 
а) Знаки пунктуации и орфографические ошибки в тексте (например: страница 3 после слова “домой” поставить точку; страница 4 - после слова “потому” поставить запятую). 
б) Ошибки, связанные со вставкой информации. (например: страница 3 - выпуск 2024 заменить на 2025; страница 7 - указана не моя фамилия). 
в) Поменять фотографии с вашим присутствием местами (например: поменять местами фото такое-то и такое-то страниц 6 и 7). 

3) ❌ Правки, которые нельзя внести:
а) Расположение фотографий на страницах журнала.
б) Удаление/расположение текста. 
в) Замена фотографий на сторонние. 
г) Добавление сторонних элементов в журналы.
д) Изменение шрифта и размера текста. 
е) Изменение концепции журнала. 

4) 💡 Будьте внимательны, так как возможности внести ещё потом правки больше не будет. Ещё один этап правок оплачивается дополнительно. 

5) ⏳ У вас 2 дня на проверку журнала.

6) ❗️Обращаю внимание на то, что опрос необходимо заполнить за один раз, если выйти на половине написанного, то ничего не сохранится и придётся писать заново. Когда правки будет полностью написаны, перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.

Пожалуйста, отпишите мне, как только разошлёте это сообщение родителям, заранее спасибо!!! 💙
ЕСЛИ СКИДЫВАЕМ РОДИТЕЛЯМ:
Сообщение ответственному родителю: 

Здравствуйте! 👋
🔔 Напоминаю о возможности написать правки по выпускным журналам. Дублирую на всякий случай ссылку на папку с электронными версиями всех журналов: 
(ссылка на папку с готовыми журналами)

📍 Необходимые правки по тексту написать здесь: (ссылка на гугл-форму)

☑️ Вот список тех, кто заполнил форму! Если остальные всё-таки будут вносить правки, то это необходимо сделать в течение дня. (прикрепить скрин из приложения)

⬆️ Инструкцию и правила по всем возможным правкам присылал выше.
💡 Будьте внимательны, так как возможности внести ещё потом правки больше не будет. Еще один этап правок оплачивается дополнительно. На проверку журналов остался 1 день❗️
📍Обращаю внимание на то, что опрос необходимо заполнить за один раз, если выйти на половине написанного, то ничего не сохранится и придётся писать заново. Когда правки будет полностью написаны, перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.
ДЛЯ МЕНЕДЖЕРА: этот скрипт необходимо отправить после 20:00

ЕСЛИ СКИДЫВАЕМ РОДИТЕЛЯМ: 
Сообщение ответственному родителю: 

Добрый вечер! 🌅 
⌛️ Дедлайн по внесению правок в журналы истёк. Правки указали:
(фамилию имя выпускника - правка - будет/не будет внесена [если не будет, указать причину])
Больше ни от кого информации по внесению правок не получили. Спасибо Вам за помощь, хорошего вечера! 💙
Сообщение родителю 

Здравствуйте! 👋
Можете, пожалуйста, передать это родителям

В создание выпускных журналов для ребят мы вложили все силы и всю душу, чтобы журналы и наша работа были полны эмоций и воспоминаний! 
В качестве благодарности можете, пожалуйста, оставить свой отзыв

По объёму отзыва на ваше усмотрение.
Большая просьба по возможности написать каждому из родителей, это очень важно и ценно для нас.
⏳ Желательно написать в ближайшие несколько дней.
Будем очень благодарны! 

В начале отзыва просьба написать имя отчество родителя и имя фамилия его ребёнка (пример: Ирина Фёдоровна, мама Ивана Петрова). Кто не хочет писать имя ребёнка, может оставить только своё ИО.

Отзыв можно написать двумя способами:
1) Лучше этот вариант выбрать. Вот сюда: https://vk.com/app6326142_-212187230
Сначала возможно появится окно с кнопкой разрешить, можно не переживать и спокойно нажимать разрешить, это соц сеть ВК так настроена.

2) Кто переживает, что в ВК нужно нажимать кнопку разрешить, можно написать отзыв мне в личные сообщения в любой соц сети:
WhatsApp: +79644919854
Viber: +79644919854
Телеграм: makspvv
Вк: https://vk.com/makspvv

С любовью, команда IMJ

`})})})]})});case"collective11":return r.jsx("div",{className:"space-y-8",children:r.jsxs(G,{children:[r.jsx(he,{children:r.jsxs(xe,{className:"flex items-center",children:[r.jsx(Re,{className:"h-5 w-5 mr-2 text-blue-600"}),"Сообщение для детского сада"]})}),r.jsx(Q,{children:r.jsx("div",{className:"bg-gray-50 p-4 rounded-lg",children:r.jsx("p",{className:"whitespace-pre-wrap text-sm leading-relaxed",children:`Коллективнный11
Сообщение в беседу класса

Ребята, привет! 👋
Меня зовут (имя менеджера), я являюсь менеджером вашего класса по подготовке выпускных журналов 🤓

Основные организационные моменты:
❗️Эта беседа будет только информационной, поэтому важно: В БЕСЕДЕ НЕ СПАМИТЬ, чтобы никакие важные сообщения не потерялись.
❗️По всем вопросам вы можете обращаться ко мне в личные сообщения в это время (менеджер указывает своё рабочее время), не стесняйтесь 😇

📸В беседу добавлен ваш фотограф - (имя фотографа) . 

Теперь у меня к вам несколько первых заданий:
✅Добавиться ко мне в друзья, чтобы я мог написать вам в личные сообщения в случае необходимости.
✅Подписаться на наш ИНСТ и группу ВК, там мы будем выкладывать разные моменты работы с вашим классом. Вот ссылка на группу в вк: https://vk.com/imjornal , название нашей инсты: im.jornal.
✅Выбрать старосту или добровольца, с которым я буду держать связь, и который будет мне помогать в кое-каких небольших, но важных моментах. Староста/доброволец, отпиши мне в ЛС🙏

Вся наша команда и лично я сделаем всё возможное, чтобы работа была в кайф, и вы получили классные, стильные, и уникальные выпускные журналы. Начнём! 🚀

Сообщение в беседу класса

Ребята, подскажите, все ли ваши одноклассники есть в беседе? 
❗️Тут должны быть даже те, кто не берёт журнал. Если кого-то не хватает, то добавьте. Если у человека нет ВК, то напишите мне его ФИ. 
Сообщение ответственному родителю

Здравствуйте! 👋
Меня зовут (…), я являюсь менеджером по подготовке выпускного журнала вашего ребёнка! 👨‍💻
Мне предоставили Ваш контакт как ответственного родителя. Как я могу к Вам обращаться?


📍Совсем скоро мы начнём работу с классом. С ребятами мы взаимодействуем через беседу в ВК. Мне необходимо добавить Вас в эту беседу. Писать там ничего не придётся. Все что потребуется: это наблюдать при необходимости за новостями и процессом подготовки журналов, передавать актуальную информацию остальным родителям.
✅ Можете, пожалуйста, прислать ссылку на вашу страницу в ВК. Или, если не получается, скинуть ссылку. Скажите, как Вас там найти.

📍Также, просьба: предоставить на всякий случай контакт ещё одного родителя, с кем мы могли бы взаимодействовать по поводу работы над журналами.


Сообщение в беседу класса

Ребята, привет! 👋 
❗️Посмотрите, пожалуйста, правильно ли написаны ваши имена и фамилии.
Это важно, потому что так будет напечатано в журналах. Внести правки потом будет невозможно, поэтому всё проверить необходимо сейчас.

P.S. Список составлялся на основе данных, предоставленных родителями 📋

Менеджеру необходимо создать опросник в вк:
Название: Проверьте правильность ваших ФИ.
Варианты ответа:
-Всё правильно
-Неправильно (написал менеджеру, как нужно исправить)

Сообщение ответственному родителю

Здравствуйте! 👋
Сейчас необходимо переслать это сообщение в родительский чат.

Сейчас я отправлю Вам список ребят. Пожалуйста, проверьте, все ли имена и фамилии написаны правильно?
❗️Этот момент очень важен, потому что так, как ФИ указаны здесь, так они и будут написаны в журналах. 
❗️Также, пожалуйста, проверьте правильно ли указан класс (нужна буква класса или нет). 


Особое внимание буквам Е/Ё (к примеру, Артем/Артём), именам Софья/София, Данил/Даниил/Данила и т.п.  

Отпишите мне, как только всё будет проверено. Заранее спасибо! 💙 

Сообщение ответственному родителю

Здравствуйте! 👋

❗️Очень важный вопрос, который необходимо решить родителям сообща: будем ли вставлять портретные фото ребят, которые не берут журнал?

Выпускникам, которые не заказывают журнал, наш фотограф не будет делать индивидуальные фото. В случае необходимости им придётся прислать свои фотографии (по одной фотке). 
📍Важный момент: наши фото и фото тех, кто не берёт журнал, будут сильно отличаться по качеству, что вероятно будет портить визуальную составляющую журнала. 

Вставить не наши фото никакой сложности не будет, вопрос в том, есть ли в этом необходимость?  Это решение должно быть в первую очередь за родителями тех выпускников, кто берёт журнал. Прошу принять решение сегодня-завтра.
Заранее спасибо! 💙

Сообщение в беседу класса

Всем привет! 👋
✍️ Мы начинаем сбор текстовой информации для ваших выпускных журналов. Сначала сообщу вам общий регламент этого этапа работы, затем напишу что, куда и когда.

По регламенту:
❗️Вам дается 15 дней на выгрузку всех материалов для журнала, то есть к 20:00 (дедлайн; смотреть в карточке класса) всё у всех должно быть загружено. После истечения срока никакую информацию внести будет НЕЛЬЗЯ!!! Поэтому отнестись к этому нужно с должным вниманием и ответственностью;
❗️При написании текстовой информации обращайте внимание на ГРАМОТНОСТЬ!!! Орфографические, пунктуационные и речевые ошибки в тексте журнала мы не исправляем. Также мат, оскорбления, пошлости и тому подобные выражения в журнал вставлены не будут, и более того, задания в таком случае придётся переделывать.

📂 Инструкция как, что и куда:
1.	🗂️ ИНДИВИДУАЛЬНАЯ ПАПКА ВЫПУСКНИКА: в ней будут находиться все ваши папки. Задача: найти свою папку и зайти в неё. В этой папке будут:
- 👨‍👩‍👦 ПАПКА «ФОТО С РОДИТЕЛЯМИ»: в эту папку нужно загрузить свои фотографии с родителями или же просто фотографии родителей в количестве 2 фотографий (НЕ БОЛЕЕ 2-х ФОТО!).
- 📸 ПАПКА «ФОТО ИЗ ПОМЕЩЕНИЯ»: в эту папку ничего загружать самостоятельно НЕ НУЖНО. Сюда фотографы загрузят фотографии для журнала, сделанные на фотосессии;
(ссылка на папку “Выпускники”)


1.	🫂 ГУГЛ ОПРОС «ПОЖЕЛАНИЯ И СЛОВА ОДНОКЛАССНИКАМ»: здесь всем нужно будет написать пожелания или памятные слова КАЖДОМУ своему однокласснику, все пожелания и слова будут вставлены в ваши журналы с подписью от кого они. Старайтесь писать для всех, чтобы спустя время было приятно перечитывать написанное для вас. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.
(ссылка на гугл-форму)
2.	💭 ГУГЛ ОПРОС «ЦИТАТЫ»: здесь ВСЕМ нужно будет написать цитату, которая будет располагаться под вашей фотографией в разделе “Наш класс”. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.
(ссылка на гугл-форму)
3.	ЛАЙФ ФОТО И ЗАБАВНЫЕ ИСТОРИИ. В папке “Выпускники” также есть две папки:
- 🤳 ПАПКА «ЛАЙФ ФОТО»: в эту папку необходимо загрузить какие-либо памятные для вашего класса фотографии из повседневной жизни класса (спорт, друзья, поездки, перемены и так далее). ВАЖНО: нужно прислать либо 3 горизонтальных фотографии, либо 2 горизонтальные и 2 вертикальные. 
Старайтесь, чтобы фотографии были или общие, или чтобы много людей из класса было на фотографии. Эти фотографии у всех в журналах будут одинаковые. Если есть желание, Вы можете специально самостоятельно сделать прикольные памятные лайф фотки для вашего журнала.
- 😅 ПАПКА «ЗАБАВНЫЕ ИСТОРИИ»: в этой папке находится вордовский файл. В нём необходимо написать одну-две забавные памятные истории, которые когда-либо происходили в вашем классе. Пишите эти истории по возможности всем классом, так как они во всех журналах будут одинаковые, так же, как и лайф фото.

‼️Ещё раз акцентирую внимание на сроках, грамотности, количестве фотографий и объёме текста. Пожалуйста, соблюдайте эти правила, чтобы все ваши журналы были офигенными. На загрузку всех заданий у вас уйдёт примерно час. И ещё совет: не откладывайте всё на последний день, готовьте всё постепенно, с чувством, с толком, с расстановкой, чтобы наполнение журнала информацией было на высочайшем уровне. 
Желаю всем удачи! 🍀 

Сообщение старосте

Привет! 👋
Смотри, у меня к тебе как к самому ответственному выпускнику есть несколько очень важных заданий 🎓
В журнале есть блоки, посвящённые учителям 👩‍🏫 Вот, что нужно:
❗️Необходимо пройтись по учителям-предметникам (классный руководитель не в счёт) и собрать с них пожелания для вашего выпускного журнала. Одно пожелание от одного учителя. У всех выпускников будут одни и те же пожелания, то есть одно общее пожелание от учителя на класс. Можешь это сделать либо самостоятельно, либо разделить это задание между ребятами (чтобы одни ребята попросили пожелание у одного учителя, другие у другого и так далее, пока не соберутся пожелания от всех учителей).
❗️❗️Необходимо всему вашему классу собраться и вспомнить смешные фразочки ваших учителей (всего нужно 8-10 фраз). То есть те фразы, которые конкретный учитель говорил постоянно, либо фразы, которые ассоциируются с конкретным учителем. Мы их тоже вставим вам в журналы, они будут также у каждого в журнале одинаковые.
❗️❗️❗️Необходимо попросить у классного руководителя, чтобы он написал слова напутствия для вашего класса. Одно общее пожелание для всего класса (объём: 70-110 слов) 

✅ По итогу тебе нужно прислать мне 3 ворд документа: первый с пожеланиями всех учителей (у каждого пожелания написать ФИО учителя и ПРЕДМЕТ, который он у вас ведёт), второй документ со смешными фразами учителей (также у каждой фразы ФИО учителя и ПРЕДМЕТ, который он у вас ведёт), третий с пожеланием классного руководителя (с ФИО классного руководителя)
Вот ссылка на примеры документов. Их нужно скачать, заполнить и прислать мне. (https://drive.google.com/drive/folders/1LA_LF8hnFICCcMJC5tUNqbC4MDJo1kVL?usp=sharing)

📸 Далее необходимо прислать фотографии ребят, которые не берут журнал. Это нужно для страницы с портретами и цитатами каждого выпускника. Лучше сфоткать его/её в школе самостоятельно на телефон с хорошей камерой. Скинь мне каждую фотку отдельно файлом (чтобы качество не терялось: нажать на скрепочку, там выбрать файл и через этот файл скинуть фотографии) и в сообщение укажи, пожалуйста, фамилию и имя человека.

🙏 Также проследи, пожалуйста, чтобы вы вместе с классом написали одну-две забавные памятные истории класса и загрузили 4 лайф фотки класса. Я об этом задании написал в вашу беседу.
Насчёт лайф - основная ценность в том, что такие фотографии запечатлевают “момент”. Если у вас не получается найти такие фотографии, или они в слишком плохом качестве, сделайте такие фотки специально для журнала. Главное, чтобы качество фото было хорошее. Вот тут примеры лайф-фоток, которые вы со своим классом можете повторить, или взять за идею
(https://drive.google.com/drive/folders/1hM1zkfSWL81qjZsiFbYf36SPhXRF2kMp?usp=sharing) 
По забавной истории - это может быть описание какой-то вашей перемены, урока, мероприятия школьного, поездки с классом. Такие “истории” в школьной жизни встречаются каждый день, нужно просто их вспомнить.

⌛️ На всё это дело у тебя также 15 дней, то есть к (число, смотреть в карточке класса) все должно быть сделано и скинуто.
Заранее говорю тебе большое спасибо! ❤️
Сообщение  родителю

Здравствуйте! 👋

✅ Мы начали работу с ребятами по сбору информации для журнала. Дали им 15 дней на выполнение заданий по написанию текста для журналов. Передайте, пожалуйста, родителям, чтобы они проконтролировали ребят, чтобы весь текст был написан без грамматических ошибок и в нужном объёме, фотографии загружены в нужном количестве, и чтобы никто не опоздал и прислал нам все материалы вовремя. Заранее спасибо! 🙏
Ещё один момент: одно из заданий для ребят - прислать 2 фотографии с родителями или просто фото родителей. Если возникают трудности с поиском фото, их нужно успеть сделать за 15 дней. Нужны самые обычные фото, даже селфи подойдёт. Главное, чтобы качество фото было приемлемым.

❗️Второй момент касается уже задания непосредственно для самих родителей. Каждому родителю нужно написать напутственные слова-пожелания для своего ребёнка. Действия родителя:
1.	Перейти по этой ссылке: (ссылка на гугл-форму). 
2.	В первом вопросе нужно написать Фамилию и Имя своего ребёнка.
3.	Во втором вопросе нужно написать напутственные слова-пожелания для своего ребёнка.
4.	Как только все будет написано, нужно нажать кнопку «ОТПРАВИТЬ», она будет в самом низу.
ВАЖНО: у каждого ребёнка должно быть одно пожелание, то есть если мама и папа хотят написать разные слова, то они должны их написать в одной и той же Гугл-форме с пометкой ОТ МАМЫ: … и ОТ ПАПЫ: … 

‼️ Обращаю внимание на то, что опрос необходимо заполнить за один раз, иначе ничего не сохранится и придётся писать заново. Когда пожелание будет полностью написано, перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.

⌛️ Срок на выполнение этого задания у Вас, как и у ребят, 15 дней (до (число, смотреть в карточке класса)).

‼️ Ваша задача: переслать это сообщение в чат родителей и проконтролировать, чтобы все родители увидели это сообщение. Если у кого-то из родителей возникнут какие-либо проблемы с заполнением Гугл-формы, пусть пишут Вам, а Вы пересылайте их сообщения мне.
Ещё раз спасибо! Хорошего Вам дня! ☀️
Сообщение старосте

Привет! 👋 
🙏 У меня есть просьба к тебе:
Напиши мне, пожалуйста, следующую информацию:
1.	Сколько у вас в классе мальчиков и девочек
2.	Список предметов, которые вы прошли за 11 лет обучения (напиши +- по памяти)
3.	Список предметов, которые вы изучаете именно в 11 классе 
Ещё раз большое спасибо! 💙 

Сообщение в беседу класса:

Ребята, привет! 👋
Оперативное задание, которое выполнить нужно каждому сегодня. Пройти этот опросник (он анонимный): (ссылка на опросник)
Прохождение опросника займёт у вас меньше минуты 😅
Это нужно для страницы со статистикой 📊 

Если в классе заказало журнал 17 человек и меньше, то класс фоткается в один день, на половины делить не надо. Если в классе заказало журнал 18 человек и больше, то класс фоткается в два дня, на половины делить надо. СКРИН С РАЗДЕЛЕНИЕМ СНИЗУ!!!

ДЛЯ КЛАССОВ, КОТОРЫЕ ФОТКАЮТСЯ В ДВА ДНЯ:
Всем привет! 👋
📸 Мы с вами начинаем подготовку к фотосессии. Первый этап – разделение по группам. ВАЖНО: делятся только те, кто берёт журнал, кто не берёт журнал, не учитываются при разделении на группы, но на съёмку могут прийти для групповых фотографий (об этом НЕОБХОДИМО сообщить мне). 

❗️ Ваша задача – самостоятельно разбиться на две половины класса. Вас (…) человек, значит в первой половине (…), во второй (…) человек.
👨‍👩‍👦‍👦 Далее, в каждой половине люди должны разбиться между собой на группы ОТ 3 ДО 5 ЧЕЛОВЕК включительно. Так как в ПЕРВОЙ ПОЛОВИНЕ вас (число выпускников, берущих журнал) человек, то необходимо разделиться на группы по (см. в таблице) человека или (см. в таблице, если там 1 вариант разделения то “ИЛИ” не нужно) человека. Съёмка будет проходить (см. в таблице) час и (см. в таблице) минут. 
ВТОРАЯ ПОЛОВИНА: так как вас (число выпускников, берущих журнал) человек, то необходимо разделиться на группы по (см. в таблице) человека или (см. в таблице, если там 1 вариант разделения то “ИЛИ” не нужно) человека. Съёмка будет проходить (см. в таблице столбец 4).

📸 Процесс съёмки будет проходить в 2 дня, т.е. первая половина класса в один день, вторая половина - в другой. На каждую группу будет выделяться время в соответствии с количеством человек в группе. Локации для каждой половины класса могут быть разные (разные у ПОЛОВИН, а не у ГРУПП). Выбор дат и локаций будет позже, сейчас нужно разбиться на половины и группы.
📍От старосты до 20:00 завтрашнего дня жду в ЛС список половин и групп в таком формате:
ПЕРВАЯ ПОЛОВИНА:
Группа 1: ФИ 1, ФИ 2, ФИ 3 и тд
Группа 2: ФИ 4, ФИ 5, ФИ 6 и тд
ВТОРАЯ ПОЛОВИНА:
Группа 3: ФИ 7, ФИ 8, ФИ 9 и тд
Группа 4: ФИ 10, ФИ 11, ФИ 12 и тд




ДЛЯ КЛАССОВ, КОТОРЫЕ ФОТКАЮТСЯ В ОДИН ДЕНЬ:
Всем привет! 👋
📸 Мы с вами начинаем подготовку к фотосессии. Первый этап – разделение по группам. ВАЖНО: делятся только те, кто берёт журнал, кто не берёт журнал, не учитываются при разделении на группы, но на съёмку могут прийти для групповых фотографий (об этом НЕОБХОДИМО сообщить мне). 

❗️Ваша задача – самостоятельно разбиться между собой на группы ОТ 3 ДО 5 ЧЕЛОВЕК включительно. Так как вас (число выпускников, берущих журнал) человек, то необходимо разделиться на группы по (см. в таблице) человека или (см. в таблице, если там 1 вариант разделения то “ИЛИ” не нужно) человека. Съёмка будет проходить (см. в таблице столбец 4). 

📸 Процесс съёмки будет проходить в один день в одной локации. На каждую группу будет выделяться время в соответствии с количеством человек в группе. Выбор дат и локаций будет позже, сейчас нужно разбиться на группы.

📍 Староста должна до 20:00 завтрашнего дня прислать мне в ЛС список групп в таком формате:
Группа 1: ФИ 1, ФИ 2, ФИ 3 и тд
Группа 2: ФИ 4, ФИ 5, ФИ 6 и тд
Группа 3: ФИ 7, ФИ 8, ФИ 9 и тд

КЛАСС РАЗДЕЛЁН НА ПОЛОВИНЫ, ОПТИМАЛЬНЫЙ КЛАСС
Ребята, привет! 👋
📸 Итак, мы начинаем 2 этап подготовки к фотосессии.
🗓️ Вот даты, из которых вы можете выбрать удобные для вас: 
(свободные даты фотографа). 

❗️ Напоминаю, вы выбираете 2 даты, первая дата - для первой половины класса. Вторая дата - для второй половины класса. 
⏱️ Также, необходимо определиться со временем. ВАЖНО: группы идут друг за другом (например, первая группа фоткается с 13:00 до 13:45, значит следующая группа должна быть в студии уже в 13:40).

📍 Также вам необходимо определиться с локациями, где вы будете фотографироваться. Напоминаю, что одна локация - для половины класса. Локации у двух половин могут отличаться. 
✅ Ваш класс заказал такой вариант, при котором мы предоставляем локацию для съёмок в студии. Вы выбираете понравившийся вариант, а мы арендуем. 

Варианты студий:
1.	г. Иваново: Space - любой зал (https://vk.com/space_space_project);
2.	г. Иваново: Азарт студия - зал флэшпоп (https://vk.com/azartstudios?w=product-110133865_1533651/query).

⏳ К 20:00 послезавтрашнего дня жду от старосты список в таком формате:
ПЕРВАЯ ПОЛОВИНА *такого-то числа* фоткается в *такой-то локации*:
Группа 1 в *такое-то время*
Группа 2 в *такое-то время*
И тд 
ВТОРАЯ ПОЛОВИНА *такого-то числа* фоткается в *такой-то локации*:
Группа 3 в *такое-то время*
Группа 4 в *такое-то время*
И тд 

ВАЖНО: расчётное время на группы следующее: 
3 человека можно сфоткать за 35 съёмочных минут; 4 человека - 45 съёмочных минут; 5 человек - 55 съёмочных минут.
Этого времени будет достаточно, чтобы фотограф успел сделать вам необходимое количество фотографий.





КЛАСС !НЕ! РАЗДЕЛЁН НА ПОЛОВИНЫ, ОПТИМАЛЬНЫЙ  КЛАСС
Ребята, привет! 👋
📸 Итак, мы начинаем 2 этап подготовки к фотосессии.
🗓️ Вот даты, из которых вы можете выбрать удобные для вас: 
(свободные даты фотографа). 

❗️ Вы выбираете 1 дату для всего класса. 
⏱️ Также, необходимо определиться со временем. ВАЖНО: группы идут друг за другом (например, первая группа фоткается с 13:00 до 13:45, значит следующая группа должна быть в студии уже в 13:40).

📍 Также вам необходимо определиться с локацией, где вы будете фотографироваться. Один вариант локации для всего класса. 
✅ Ваш класс заказал такой вариант, при котором мы предоставляем локацию для съёмок в студии. Вы выбираете понравившийся вариант, а мы арендуем.
Варианты студий:
1.	г. Иваново: Space - любой зал (https://vk.com/space_space_project);
2.	г. Иваново: Азарт студия - зал флэшпоп (https://vk.com/azartstudios?w=product-110133865_1533651/query).

⏳ К 20:00 послезавтрашнего дня жду от старосты список в таком формате:
Класс фотографируется *такого-то числа* в *такой-то локации*:
Группа 1 в *такое-то время*
Группа 2 в *такое-то время*
И тд 

ВАЖНО: расчётное время на группы следующее: 
3 человека можно сфоткать за 35 съёмочных минут; 4 человека - 45 съёмочных минут; 5 человек - 55 съёмочных минут.
Этого времени будет достаточно, чтобы фотограф успел сделать вам необходимое количество фотографий.

Класс разделён на половины: 
Ребята, привет! 👋 
‼️ Сегодня очень важно дать окончательный ответ насчёт выбора дат и локаций
Жду от старосты итоговое решение ✅

Класс НЕ разделён на половины: 
Ребята, привет!
‼️ Сегодня очень важно дать окончательный ответ насчёт выбора даты и локации
Жду от старосты итоговое решение ✅
Сообщение ответственному родителю:

Здравствуйте! 👋
📍Есть один момент, который нужно решить сейчас. Это касается общей съёмки. Эту съёмку мы проводим в школе, делаем там общее фото класса и фото учителей.
❗️К Вам просьба: через руководство школы договориться, чтобы нашего фотографа пустили в школу для создания необходимых фотографий для выпускного журнала в определенную дату и время (всего на 1 час).

📸 В случае, если администрация школы ни в какую не согласна пускать нас в школу для создания фоток в выпускной журнал, мы предлагаем провести эту съёмку в студии. Аренда студии в данном случае для общей съёмки осуществляется за счёт заказчиков. День и время съёмки будут выбирать выпускники из дат, предложенных нами. 

Как только станет известно, сообщите мне. Заранее спасибо! 💙
Сообщение ответственному выпускнику
Только для классов, у которых стоит соответствующая задача
Привет! Смотри, мы начинаем решать вопрос насчёт общей съёмки вашего класса. Суммарно общая съёмка будет идти около 1-го часа. За это время мы должны сделать: 
•	Индивидуальное фото классному руководителю (5 минут)
•	Общее фото учителей-предметников (5 минут)
•	Две общие фотографии класса (40 минут) 
Первое, что нужно: обсудите с ребятами, в какой день недели и какое время будет удобно. После этого мы вам предложим варианты дат.
Ожидаю от тебя ответ в таком формате: 
Общую съёмку можем провести: 
•	в понедельник с 11:00 
•	во вторник в интервале с 12:00 до 14:00
•	в среду после 15:00 
Ответ нужно дать к завтрашнему дню. Спасибо!
Сообщение старосте  
Привет! 👋
📍В общем смотри, у нас есть небольшая задачка.
С вашим классом надо в один день сделать общую фотку всего класса. Съёмка будет длиться 1 час ⏳

❌ В школе провести эту съёмку не получится, поэтому поступим следующим образом:
1.	👩‍🏫 Одно общее фото учителей вам будет необходимо сделать самостоятельно в школе на айфон какого-нибудь ученика из класса (вот инструкция: https://docs.google.com/document/d/17v_WkHglexeNrQc4m98zwaGd2fXoW2tq9R4M6kj4LVA/edit?usp=sharing).
2.	📸 Съёмка класса будет проходить в студии. Вам с ребятами сообща нужно выбрать дату и время съёмки из предложенных. Надо подобрать день так, чтобы всем было удобно:
(свободные даты и время фотографа общей съёмки)
❗️Нужно подобрать такую дату и время, чтобы ВСЕ ребята смогли присутствовать. 
3.	👩‍🏫 Одно индивидуальное фото классного руководителя. Желательно, чтобы он смог присутствовать с Вами на этой съёмке. В ином случае Вам необходимо будет либо сфотографировать его самостоятельно в школе (по этому примеру: https://docs.google.com/document/d/19pldGgnk7HLcE2o7WVhn_cV9OTKwfFsNPTsaWgx736I/edit?usp=sharing ), либо прислать его фото файлом из соц. сетей в хорошем качестве.

Общее фото класса делаем примерно 40 минут ⏳
Нам с вами надо будет сделать 2 общие фотки ‼️
Эти фото будут интересными, а не просто вас в линеечку поставят 🤌
Фотографии можно сделать как в одном, так и в двух разных образах (если образа 2, то переодеться нужно будет очень быстро) 👗👔

💡 Мы заинтересованы в том, чтобы сделать всё максимально круто, поэтому понадобится небольшая помощь.
Вопрос по общей съёмке я буду решать через тебя 🤝

Что требуется: 
1) 📍Выбрать день и время, когда все выпускники вашего класса смогут.
2) 📍Решить по образу: вы будете на обеих фотках в одном образе или разных. 
Ожидаю от вас день и время

Сообщение старосте

Привет! 👋

📍В общем смотри, у нас есть небольшая задачка.
С вашим классом надо в один день сделать общую фотку вашего учительского состава и общую фотку всего класса. Съёмка будет длиться 1 час ⏳

👩‍🏫 Одно общее фото учителей делаем в школе - 5 минут времени, индивидуальное классрука - 5 минут.
Надо будет собрать всех учителей на 5 минут, чтобы мы сделали это фото. 
❗️ВАЖНО: учителей надо предупредить заранее (лучше первое предупреждение за 2 недели до съёмки, второе предупреждение за неделю до съёмки, третье предупреждение за 2 дня до съёмки, учителям лучше так) что фото учительского состава всех вместе!

Общее фото класса делаем в школе 40 минут ⏳
Нам с вами надо будет сделать 2 общие фотки ‼️
Эти фото будут интересными, а не просто вас в линеечку поставят 🤌
Фото можно будет сделать в спортзале/актовом зале/кабинете/коридоре 🏛️
Фотографии можно сделать как в одном, так и в двух разных образах (если образа 2, то переодеться нужно будет очень быстро) 👔👗

❗️ОЧЕНЬ ВАЖНО, что процесс съёмки необходимо организовать последовательно, одно за другим (фото учителей и сразу же затем общее фото класса (ну либо наоборот в последовательности), без временных промежутков).
Надо подобрать день так, чтобы всем было удобно. 
‼️Ну и главное, чтобы фотографа пустили в школу!!!

💡 Мы заинтересованы в том, чтобы сделать всё максимально круто, поэтому понадобится небольшая помощь.
Вопрос по общей съёмке я буду решать через тебя 🤝

Что требуется: 
1) 📍Выбрать день и время, когда смогут учителя и ваш класс.
Варианты: 
(свободные даты и время)
(Необходимо выбрать один день и одно время: например, 24 января в 11:00 учителя в 11:10 весь класс.) 
2) 📍Предупредить учителей, что будет одно общее фото всего учительского состава и индивидуально классного руководителя.
3) 📍Решить с классом, где будем делать общее фото - это может быть или актовый, или спортивный зал. 
4) 📍Решить по образу: вы будете на обеих фотках в одном образе или разных. 
5) 📍Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный вами день и время. 
6) 📍Необходимы будут: 2 парты, стулья около 15 штук.

Ожидаю от вас день и время

Сообщение родителю

Здравствуйте! 👋

✅ Мы с ребятами решаем вопрос насчёт общей съемки класса и учителей. 
❌ В школе провести эту съёмку не получится, поэтому поступим следующим образом:
1.	👩‍🏫 Одно общее фото учителей выпускники сделают самостоятельно в школе на хороший телефон. Инструкцию мы им скинули.
2.	📸 Съёмка класса будет проходить в студии. Ребята выбрали следующую дату и время - (указать время, которое выбрали выпускники). Как говорилось ранее, оплата студии для этой съёмки осуществляется за счёт заказчиков.
3.	👩‍🏫 Одно индивидуальное фото классного руководителя. Желательно, чтобы он смог присутствовать с выпускниками на съёмке. В ином случае выпускникам необходимо будет либо сфотографировать его самостоятельно в школе (инструкцию тоже скинули), либо прислать его фото файлом из соц. сетей в хорошем качестве.

Общее фото класса делаем примерно 40 минут ⏳
Нам с Выпускниками надо будет сделать 2 общих фото ‼️

Заранее ставлю Вас в известность, спасибо

Сообщение родителю
Здравствуйте! 👋

✅ Мы с ребятами решили вопрос насчёт общей съемки класса и учителей. Она будет проходить (выбранная дата и время)

❗️Продублирую Вам инструктаж по этой съемке, чтобы Вы были в курсе, а также проконтролировали процесс через классного руководителя.

👩‍🏫 Одно общее фото учителей делаем в школе - 5 минут времени, индивидуальное классного руководителя - 5 минут.
Надо будет собрать всех учителей на 5 минут, чтобы мы сделали это фото. 
❗️ВАЖНО: учителей надо предупредить (лучше первое предупреждение за 2 недели до съёмки, второе предупреждение за неделю до съёмки, третье предупреждение за 2 дня до съёмки, учителям лучше так), что фото учительского состава всех вместе!

Общее фото класса делаем в школе 40 минут ⏳

‼️Ну и главное, чтобы фотографа ПУСТИЛИ в школу!!!

💡Мы заинтересованы в том, чтобы сделать всё максимально круто, поэтому просим вас проконтролировать организацию общей съёмки.

Что требуется: 
1) 📍Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный день и время. 
2) 📍Предупредить учителей, что будет одно общее фото всего учительского состава и индивидуально классного руководителя.
3) 📍Необходимы будут: 2 парты, стулья около 15 штук.

Заранее спасибо

Сообщение старосте

Привет! 👋 
📸 Общая съёмка будет проходить в студии (дата и время съёмки), (ссылка на студию, название зала).

По съёмке: 
1.	👔👗 Решить по образу: вы будете на обеих фотках в одном образе или разных.
2.	👞 ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
3.	📍ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
❗️Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ.
4.	🗑️ Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой.

Что касается учителей: 
1.	❗️Одно общее фото учителей сделать самостоятельно в школе на айфон кого-нибудь из учеников класса (вот инструкция: https://docs.google.com/document/d/17v_WkHglexeNrQc4m98zwaGd2fXoW2tq9R4M6kj4LVA/edit).
2.	❗️Одно индивидуальное фото классного руководителя. Желательно, чтобы он смог присутствовать с Вами на съёмке. В ином случае вам необходимо будет либо сфотографировать его самостоятельно в школе (по этому примеру: https://docs.google.com/document/d/19pldGgnk7HLcE2o7WVhn_cV9OTKwfFsNPTsaWgx736I/edit), либо прислать его фото файлом из соц. сетей в хорошем качестве.


Сообщение старосте

Привет! 👋
📸 Общая съёмка будет проходить у вас в школе (дата и время съёмки)

Что требуется: 
1) Организовать учителей, чтобы они все собрались в одном месте в (время начала съёмки учителей) 👩‍🏫
2) Решить с классом, где будем делать общее фото - место 🏛️
3) Решить по образу: вы будете на обеих фотках в одном образе или разных 👔👗
4) Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный вами день и время 👨‍💼
5) Необходимы будут: 2 парты, стулья около 15 штук ✅
Сообщение родителю

Здравствуйте! 👋
✅ Сообщение с уточнением по общей съёмке отправил в беседу с ребятами. Она будет проходить (дата и время съёмки, ссылка на студию, название зала)

Что касается учителей: 
1.	❗️Одно общее фото учителей выпускники сделают самостоятельно в школе на хороший телефон.
2.	❗️Одно индивидуальное фото классного руководителя. Желательно, чтобы он смог присутствовать с выпускниками на съёмке.

Пожалуйста, проконтролируйте процесс подготовки. Заранее спасибо! 💙
Сообщение родителю

Здравствуйте! 👋
✅ Сообщение с уточнением по общей съёмке отправил в беседу с ребятами. 

Дублирую Вам информация, что требуется от учеников: 
1) Организовать учителей, чтобы они все собрались в одном месте в (время начала съёмки учителей) 👩‍🏫
2) Решить с классом, где будем делать общее фото - место 🏛️
3) Решить по образу: вы будете на обеих фотках в одном образе или разных 👗👔
4) Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный вами день и время 👨‍💼
ВАЖНО: нужно, чтобы в день съёмки за 5 минут до начала кто-нибудь (это может быть классный руководитель, староста или кто-либо из родителей) встретил фотографа у школы и провёл к месту, где будет проходить съёмка. Решите, пожалуйста, этот вопрос и предоставьте мне номер телефона этого человека. Фотограф по приезде позвонит, скооперируются 
5) Необходимы будут: 2 парты, стулья около 15 штук ✅

Пожалуйста, проконтролируйте процесс подготовки. Заранее спасибо!💙
Сообщение старосте

Привет! 👋
❗️Напоминаю, что общая съёмка будет проходить завтра в студии (дата и время съёмки), (ссылка на студию, название зала). В студию всем необходимо прийти за 10 минут до начала съёмки.

📸 По съёмке: 
1.	👔👗 Решить по образу: вы будете на обеих фотках в одном образе или разных.
2.	👞 ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
3.	📍 ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
❗️Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ.
4.	🗑️ Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой.

Сообщение  родителю

Здравствуйте! 👋
❗️Напоминаю, что общая съёмка будет проходить завтра (дата и время съёмки, ссылка на студию, название зала)
✅ Сообщение с напоминанием о съёмке мы ребятам отправили. 
📍Пожалуйста, скажите родителям, чтобы ещё раз напомнили ребятам. Заранее спасибо! 💙

Сообщение родителю 

Здравствуйте! 👋
❗️Напоминаю, что общая съёмка будет проходить у вас в школе завтра (дата и время съёмки)

Напоминаю, что требуется от ребят: 
1) Организовать учителей, чтобы они все собрались в одном месте в (время начала съёмки учителей) 👩‍🏫
2) Решить с классом, где будем делать общее фото - место 🏛️
3) Решить по образу: ребята будут на обеих фотках в одном образе или разных 👗👔
4) Предупредить администрацию школы, чтобы фотографа пустили в школу в выбранный вами день и время 👨‍💼
5) Необходимы будут: 2 парты, стулья около 15 штук ✅

Сообщение с напоминанием о съёмке мы ребятам отправили. 
📍Пожалуйста, скажите родителям, чтобы ещё раз напомнили ребятам. Необходимо убедиться, что фотографа пустят в школу.
Заранее спасибо! 💙
В группах необходимо указать всех выпускников. Неберущих помечать - Имя Фамилия (не берёт). Максимальное количество человек в группе - 5. Максимальное количество групп - см. во втором столбце разделения на группы. 

Ребят, привет 👋 
Проверьте, пожалуйста, все ли есть в списке и всё ли правильно😇
Уточнение по съёмке:
Напоминание №1 и №2

Ребята, привет! 👋
❗️ Напоминаю, что (число, смотреть в карточке класса) у вас последний день на сбор информации для журнала. 

👥 Вот список тех, у кого что-либо не сделано:
(прикрепить скрин из раздела “Контроль собранной инфы”)

ТАКЖЕ, ЭТОТ СКРИН НУЖНО ОТПРАВИТЬ ОТВЕТСТВЕННОМУ РОДИТЕЛЮ С ПРОСЬБОЙ ПЕРЕСЛАТЬ ЕГО В ЧАТ РОДИТЕЛЕЙ, ЧТОБЫ ВСЕ РОДИТЕЛИ ПРОКОНТРОЛИРОВАЛИ ДЕТЕЙ

Пример скрина “Контроль собранной инфы”, который необходимо прикрепить: 
Скрин необходимо делать так, чтобы не было видно ничего лишнего.
 

Напоминание №3
Отправить в беседу класса: 
Ребята, привет! 👋
❗️ Напоминаю, что завтра у вас последний день на сбор информации для журнала. 

👥 Вот список тех, у кого что-либо не сделано:
(прикрепить скрин из раздела “Контроль собранной инфы”)

‼️ Ребята, работа по подготовке журнала - поэтапная. Пока каждый не выполнит все задания по сбору информации, мы не сможем перейти к следующему этапу. Поэтому не подставляйте друг друга и выполните всё в срок.

Прошу поставить реакцию об ознакомлении! 💙

ТАКЖЕ, ЭТОТ СКРИН НУЖНО ОТПРАВИТЬ ОТВЕТСТВЕННОМУ РОДИТЕЛЮ С ПРОСЬБОЙ ПЕРЕСЛАТЬ ЕГО В ЧАТ РОДИТЕЛЕЙ, ЧТОБЫ ВСЕ РОДИТЕЛИ ПРОКОНТРОЛИРОВАЛИ ДЕТЕЙ

Отправить индивидуально каждому должнику: 
Привет! 👋
Смотри, до конца сбора информации для журнала осталось мало времени
У тебя выполнены не все задания.
Необходимо отнестись к этому с должной серьезностью, чтобы мы уложились во все сроки. 
Если сейчас не сделать эти задания в срок, то мы не сможем перейти к следующему этапу подготовки выпускного журнала
(прикрепить скрин из раздела “Контроль собранной инфы”)

Пример скрина “Контроль собранной инфы”, который необходимо прикрепить: 
Скрин необходимо делать так, чтобы не было видно ничего лишнего (видна только инфа, индивидуально касаемая выпускников)

Сообщение родителю

Здравствуйте!
Мы закончили сбор необходимой информации для журналов.
Вот то, что нам удалось собрать. В дальнейшем “доскинуть” какую-либо информацию возможности не будет. Пожалуйста согласуйте, что данный список собранной информации финальный. 
Спасибо
 
(сделать скрин листа “Контроль сбора инфы” из списка класса)

Сообщение старосте
…, привет! 👋
Смотри, мы делаем журнал для вашего классного руководителя 👩‍🏫


📍Наша задача сделать его интересным и качественным, поэтому нам нужна помощь от вас как от учеников. 
Для того, чтобы сделать журнал, есть просьба собрать и написать следующую информацию вот сюда:
(ссылка на папку КР)
1) 🤳 Загрузить в папку “ЛАЙФ ФОТО” фото, связанные с классным руководителем лайф-формата. Количество - 4 штуки. Если трудности с поиском - их также можно сделать самим. Главное, чтоб качество фото было хорошим.
2) 📝 В папке “Журнал КР” открыть текстовый файл и написать туда: 
-ФИО классрука👩‍🏫;
-несколько слов о классном руководителе. Например: «Олегу Анатольевичу - самому доброму, справедливому, умному, весёлому классному руководителю
на память о выпуске 2025»; 
-текст «Мы говорим Вам спасибо»🙏: Одно длинное пожелание от всего класса со словами благодарности классному руководителю или воспоминание каких-то моментов, или и то, и другое вместе; 
-«Забавные истории»😅: Какая-либо история, связанная именно с классным руководителем; 


Пожелания классному руководителю 🫂Необходимо, чтобы каждый из класса написал его в этой гугл форме:(ссылка на гугл-форму). Эту ссылку скопируй и отправь ребятам (только нужно, чтобы классный руководитель не узнал, это сюрприз)

📌 Вот прикрепляю пример текста «Мы говорим Вам спасибо»
Пример: https://drive.google.com/drive/folders/1VG573K0FtVPOupkQSRpFguLB54VAN1cd 

⌛️ Очень важно всё это прислать до (число, смотреть в карточке класса. НЕ ПЕРЕПУТАТЬ С ДЕДЛАЙНОМ СБОРА ИНФЫ!!!)
📌 Ещё прикрепляю пример, как будет выглядеть журнал для классного руководителя: 
https://drive.google.com/drive/folders/1EXPBcdPjx6RPkyJc0GEKQbFNQWHMek7l?usp=sharing


ОБЯЗАТЕЛЬНО спросить у старосты, когда учитель стал Классным руководителем 

Сообщение старосте 

ПЕРВОЕ НАПОМИНАНИЕ
Привет! Напоминаю про журнал для классного руководителя👩‍🏫

ПОСЛЕДНЕЕ НАПОМИНАНИЕ
Привет! 👋
⌛️ Завтра заканчивается срок для подготовки журнала для классного руководителя. 
📍 На данный момент ситуация сложилась следующая:
(указать, что хватает, что не хватает)
❗️Пожалуйста, обрати пристальное внимание. Все задания нужно выполнить в срок 🙏

Сообщение родителю

Здравствуйте!
Мы закончили сбор информации для журнала классному руководителю. Вся необходимая информация собрана, приступаем к созданию. 


ДЛЯ ТЕХ, КТО ФОТКАЕТСЯ В СТУДИИ:
Всем привет! 👋
❓Если у вас нет идей, какие позы использовать во время фотосессии, мы подготовили подборку. Заранее найдите примеры понравившихся поз и на фотосессии покажите фотографу:
https://disk.yandex.ru/d/kFHmZWrrrUzXSQ 

💡 Небольшие лайфхаки: 
1.	Подготовить 2 образа, один для индивидуальных фото, второй для групповых 👨‍👩‍👧‍👦
2.	Для групповых фото договориться одеться в едином стиле и в схожей цветовой гамме 🤵🤵‍♀️
3.	Взять с собой реквизит. Примеры: тёмные очки, головные уборы или атрибуты вашего хобби (гитара, мяч и т.д.🕶️🧢🎸)

И ПОЖАЛУЙСТА, НЕ ЗАБЫВАЙТЕ:
1.	ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
2.	ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ.
3.	Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой. 



ДЛЯ ТЕХ, КТО ФОТКАЕТСЯ В ШКОЛЕ :
Всем привет! 👋
❓Если у вас нет идей, какие позы использовать во время фотосессии, мы подготовили подборку. Заранее найдите примеры понравившихся поз и на фотосессии покажите фотографу:
https://disk.yandex.ru/d/kFHmZWrrrUzXSQ 

💡 Небольшие лайфхаки: 
1.	Подготовить 2 образа, один для индивидуальных фото, второй для групповых 👨‍👩‍👧‍👦
2.	Для групповых фото договориться одеться в едином стиле и в схожей цветовой гамме 🤵🤵‍♀️
3.	Взять с собой реквизит. Примеры: тёмные очки, головные уборы или атрибуты вашего хобби (гитара, мяч и т.д.🕶️🧢🎸)
 
🏫 Насчёт съёмки в школе: 
1.	Заранее убедиться, что фотографа пустят в школу.
2.	Заранее выбрать 1-2 локации, где вы хотели бы фотографироваться (кабинет, актовый зал, спортзал, коридоры, библиотека и тд) и договориться, чтобы нас туда пустили. От качества локаций будет зависеть качество самих фотографий. 


ДЛЯ ТЕХ, КТО ФОТКАЕТСЯ НА УЛИЦЕ :
Всем привет! 👋
❓Если у вас нет идей, какие позы использовать во время фотосессии, мы подготовили подборку. Заранее найдите примеры понравившихся поз и на фотосессии покажите фотографу:
https://disk.yandex.ru/d/kFHmZWrrrUzXSQ 

💡 Небольшие лайфхаки: 
1.	Подготовить 2 образа, один для индивидуальных фото, второй для групповых 👨‍👩‍👧‍👦
2.	Для групповых фото договориться одеться в едином стиле и в схожей цветовой гамме 🤵🤵‍♀️
3.	Взять с собой реквизит. Примеры: тёмные очки, головные уборы или атрибуты вашего хобби (гитара, мяч и т.д.🕶️🧢🎸)

Сообщение в беседу класса

Ребят, привет! 👋 
📸 Напоминаю вам, что вы фоткаетесь … (числа) в … (локации) в … (время). Не забывайте и приходите вовремя. 

*+ЕСЛИ В СТУДИИ:

ВАЖНО: 
1.	В студию приходите за 10-15 минут до начала съёмки, чтобы успеть переодеться в образ и заклеить подошву обуви 🕙
2.	Ответственно и внимательно подойдите к выбору референсов. Время в студии ограничено, поэтому сразу посмотрите позы, которые вы бы хотели воплотить на индивидуальных и групповых кадрах и НА СЪЁМКЕ покажите их фотографу 🕺💃
3.	Если вы чувствуете себя закрепощенно перед объективом, то попробуйте потренироваться дома перед зеркалом 🙌🏼
4.	Если с вами на съёмку приезжает кто-либо из родственников, то они во время съёмки могут находится в лобби студии🧑‍🧑‍🧒🧑‍🧒

И ПОЖАЛУЙСТА, НЕ ЗАБЫВАЙТЕ:
1.	👞 ОБУВЬ. В студии необходима сменная, абсолютно чистая и сухая обувь.
2.	ПРОКЛЕИТЬ ОБУВЬ БУМАЖНЫМ СКОТЧЕМ (либо дома, либо в студии попросить его за 10 минут до начала фотосессии), АККУРАТНО ВСЮ ПОДОШВУ, ЧТОБЫ СКОТЧА НЕ БЫЛО ВИДНО НА БОРТИКАХ, в противном случае фотограф не сможет убрать это обработкой.
Это важно, иначе, в случае порчи фотостудии, придется выплатить ШТРАФ 💸
3.	Если вы оставляете после себя МУСОР (фантики, бутылки и тому подобное), то его нужно будет УБРАТЬ, чтобы студия выглядела так, какой она была перед первой группой🗑️ 

Сообщение в беседу класса

Ребята, привет! 👋 
🤩 Вот исходники со съемки, которая была (дата съёмки). Фотки сырые, с убранным цветом и светом в минимум. Необработанные, не выровненные и тд. Поэтому на качество цвета, света, резкость не смотрим, на исходниках смотрим на ваши лица и позы.
‼️ НЕ ВЫКЛАДЫВАЙТЕ ИХ НИКУДА.
(ссылка на исходники)

✅ ВАЖНАЯ ИНФА.
1) 📍Необходимо в гугл-опрос записывать номера выбранных вами фоток для обработки в течение 3 суток (то есть до 20:00 (число)). Номера фоток для обработки, которые вы будете писать в гугл опрос, нужно посмотреть в «Информации» к каждой фотографии (троеточие в правом верхнем углу). Номер фото – комбинация букв и цифр (например: IMG_1234.jpg или 3B4A1234.jpg). 
📍Вот необходимый для заполнения гугл-опрос: (ссылка на гугл-форму). В первом вопросе указываете свою фамилию и имя; во втором номер фотографии, которая будет на обложке журнала (она должна быть ИНДИВИДУАЛЬНОЙ фотографией, а не групповой); далее к остальным вопросам также указываете номера фото, которые вы выбрали (в ОДНОМ вопросе должен быть указан ОДИН номер фотографии)

2) 📍Кол-во фоток: 3 индивидуальные (в том числе обложка) и 6 групповых (на группу). 
Групповые фотографии: необходимо выбрать 6 фоток на всю группу, фотографии должны быть выбраны ОДИНАКОВЫЕ НА ВСЮ ГРУППУ. Выбирайте фотографии, где никто не моргает.
Индивидуальные фотографии: старайтесь выбирать фотографии непохожие друг на друга, чтобы у вас в журнале было разнообразие. Рекомендуем выбирать фото на обложку такое, чтобы вы смотрели в камеру и хорошо было видно лицо.

3) 📍В ТЕЧЕНИЕ 3 СУТОК ожидаем номера фоток, потом фотографии будут удалены без возможности довыбрать. Будьте внимательнее! Исходники удаляются совсем.

4) 📍Обращаю внимание на то, что опрос необходимо заполнить за один раз, если выйти на половине написанного, то ничего не сохранится и придётся писать заново. Перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.

Сообщение выпускнику
Привет!
Смотри, тебя не было на фотосессии с классом. Не переживай, мы сделаем тебе фотографии на отдельной съёмке. Дату и локацию мы сообщим позже.

Сообщение в беседу класса

Ребят, привет! 👋 
‼️ Напоминаю вам, что в течение дня вам всем необходимо выбрать фотографии и указать их номера в гугл-форме. 
Не забывайте и не подставляйте друг друга! 💙

Сообщение в беседу класса

Ребята, привет! 👋
✅ Все фотки готовы и загружены в ваши папки (указать название папки, например “Фото с помещения”), можете смотреть, сохранять и выкладывать в соц. сети! Пожалуйста, проверьте свои фотографии в течение 24 часов, и, если что-то не так, напишите МНЕ. По истечению 24 часов исправить ничего будет нельзя!
Не забывайте упоминать наш инстаграм im.jornal на фотках 💙

📍Чтобы скачать в хорошем качестве с диска из ваших папок: около списка фоток нажимать на три точки, дальше нажать отправить копию, затем на сохранить изображение.

Сообщение родителю

Здравствуйте! Просьба передать это родителям. 
К нам часто обращаются с просьбой распечатать дополнительно индивидуальные фотографии своих детей после фотосессий, поэтому мы проинформируем сразу: такая возможность есть. 
Стоимость печати:
•	Формат А4 (большой) — 690₽
•	Формат А5 (средний) — 590₽
•	Формат А6 (маленький) — 490₽

Ссылка на фотографии класса: (ссылка на папку выпускники). 
Большая просьба к Вам, как к ответственному родителю, собрать информацию, кому нужно распечатать фотографии. Номера фото, которые нужно распечатать, выбирайте из папки выше.
Это необходимо сделать в ближайшие 3 дня.

Просьба к Вам до (указать дату) написать мне одним сообщением вот в таком формате:
Иванов Матвей - напечатать два индивидуальных фото 
(фото номер 1756 - формат А4 и 1763 - формат А5);
Сидорова Мария - напечатать одно индивидуальное фото 
(фото номер 1975 - формат А5);
Петров Иван - два индивидуальных фото напечатать 
(фото номер 1561 - формат А6).

Сообщение родителю

Здравствуйте💙
Можете, пожалуйста, напомнить родителям, что мы можем распечатать дополнительно индивидуальные фотографии ребят. Завтра жду от Вас окончательный список ребят и номеров фото, которые будет необходимо распечатать (в каком количестве и формате). 
Важный момент, потому что потом возможности дополнительной печати индивидуальных фотографий не будет.
Ожидаю от Вас финального сообщения с информацией завтра до 20:00🤗

Сообщение старосте

Привет
Вот фото с общей съёмки, необходимо выбрать ✅

Это исходники необработанные, нескадрированные, с убранным светом и цветом.
❗️Поэтому не выкладывать никуда, просто выбрать.
(ссылка на папку с общими фото)
📍Выбрать две фотки (одна - с расстоянием, вторая - без расстояния)
Обе фотки будут в журналах у всех одинаковые.

👩‍🏫 По классному руководителю: необходимо дать учителю выбрать одно фото для обработки в журнал. (ссылка на папку с фото КР)
⏳ По времени: завтра до 20:00 сказать мне номера выбранных фотографий из информации (там цифры по типу IMG_1234.jpg или 3B4A1234.jpg)

Сообщение старосте 

Привет
Вот фото с общей съёмки, необходимо выбрать ✅

Это исходники необработанные, нескадрированные, с убранным светом и цветом.
❗️Поэтому не выкладывать никуда, просто выбрать.
(ссылка на папку с общими фото)
📍Выбрать две фотки (одна - с расстоянием, вторая - без расстояния)
Обе фотки будут в журналах у всех одинаковые.

⏳ По времени: завтра до 20:00 сказать мне номера выбранных фотографий из информации (там цифры по типу IMG_1234.jpg или 3B4A1234.jpg)

+Если выпускники ещё не скинули фото КР и учителей, то необходимо скинуть сейчас

ЕСЛИ ВЫПУСКНИКА НЕ БЫЛО НИ НА ОДНОЙ СЪЁМКЕ
Сообщение выпускнику в ЛС 

Привет!
🤩 Вот твои исходники с дополнительной съёмки. Фотки сырые, с убранным цветом и светом в минимум. Необработанные, не выровненные и тд.
❗️НЕ ВЫКЛАДЫВАЙ ИХ НИКУДА.
(ссылка на исходники)

✅ВАЖНАЯ ИНФА.
1) 📍Необходимо мне в личные сообщения прислать номера выбранных фоток для обработки в течение 1 суток (то есть до 20:00 завтрашнего дня). Номера фоток нужно посмотреть в «Информации» к каждой фотографии (троеточие в правом верхнем углу). Номер фото – комбинация букв и цифр (например: IMG_1234.jpg или 3B4A1234.jpg). 
ВАЖНО: пометить индивидуальную фотографию, которую ты хочешь на обложку. Например:  IMG_1234.jpg (Обложка)
📍Прислать номера нужно в формате:
ПРИМЕР - Иванов Иван, школа №1, г. Москва -  IMG_1234.jpg, IMG_4321.jpg (Обложка)



2) 📍Кол-во фоток: 3 индивидуальные (одна из которых - на обложку). Старайся выбирать фотографии непохожие друг на друга, чтобы у тебя в журнале было разнообразие.




ЕСЛИ ВЫПУСКНИКУ НЕ  ПОНРАВИЛИСЬ ФОТКИ
Сообщение выпускнику в ЛС 

Привет!
🤩 Вот твои исходники с дополнительной съёмки. Фотки сырые, с убранным цветом и светом в минимум. Необработанные, не выровненные и тд.
❗️НЕ ВЫКЛАДЫВАЙ ИХ НИКУДА.
(ссылка на исходники)

✅ВАЖНАЯ ИНФА.
1) 📍Необходимо мне в личные сообщения прислать номера выбранных фоток для обработки в течение 1 суток (то есть до 20:00 завтрашнего дня). Номера фоток нужно посмотреть в «Информации» к каждой фотографии (троеточие в правом верхнем углу). Номер фото – комбинация букв и цифр (например: IMG_1234.jpg или 3B4A1234.jpg). 
ВАЖНО: пометить индивидуальную фотографию, которую ты хочешь на обложку. Например:  IMG_1234.jpg (Обложка)
📍Прислать номера нужно в формате:
ПРИМЕР - Иванов Иван, школа №1, г. Москва -  IMG_1234.jpg, IMG_1235.jpg, IMG_4321.jpg (Обложка)



2) 📍Кол-во фоток: для создания журнала необходимы 3 индивидуальных фото (одно из которых - на обложку). Выбери из фото, которые тебе сделали на прошлой съёмке и на общей, 3 фотографии. Одну из них пометь, что она на обложку. Старайся выбирать фотографии непохожие друг на друга, чтобы у тебя в журнале было разнообразие.






ЕСЛИ ВЫПУСКНИКА НЕ БЫЛО НА ВТОРОЙ СЪЁМКЕ 
Сообщение выпускнику в ЛС или через старосту
Привет!
🤩 Вот твои исходники с дополнительной съемки. Фотки сырые, с убранным цветом и светом в минимум. Необработанные, не выровненные и тд.
❗️НЕ ВЫКЛАДЫВАЙ ИХ НИКУДА.
(ссылка на исходники)

✅ВАЖНАЯ ИНФА.
1) 📍Необходимо мне в личные сообщения прислать номера выбранных фоток для обработки в течение 1 суток (то есть до 20:00 завтрашнего дня). Номера фоток нужно посмотреть в «Информации» к каждой фотографии (троеточие в правом верхнем углу). Номер фото – комбинация букв и цифр (например: IMG_1234.jpg или 3B4A1234.jpg). 

2) 📍Кол-во фоток: 1 индивидуальная фотография.

3) 📍ОБЛОЖКА. Сначала необходимо посмотреть обработанные индивидуальные фотографии с первой фотосессии, посмотреть на исходники индивидуальных фоток со второй фотосессии, и выбрать на основе этого одну индивидуальную фотографию на обложку. Если это фото с первой фотосессии, то посмотреть его номер в вашей папке с готовыми фотографиями и прислать мне с пометкой (Обложка). Рекомендуем выбирать фото на обложку такое, чтобы вы смотрели в камеру и хорошо было видно лицо.

В итоге жду от тебя сообщение в примерно таком формате:
Иванов Иван, школа №1, г. Москва 
Выбрал фото IMG_1234.jpg, на обложку её же

Или 
Иванов Иван, школа №1, г. Москва 
Выбрал фото IMG_1234.jpg
На обложку фото с первой фотосессии IMG_4321.jpg

СКИНУТЬ В БЕСЕДУ ВЫПУСКНИКАМ: 

Ребята, привет! Высылаю вам фотографии, которые мы сделали на общей съёмке💙
📍Вот ваши общие фотки:
(прикрепить ссылку на папку общее фото класса)
📍Фотка учителей:
(прикрепить ссылку на папку фото учителей [находится в папке учителя])
📍Фотка классного руководителя:
(прикрепить ссылку на папку фото класс рука [находится в папке учителя])

СКИНУТЬ  ВЫПУСКНИКУ, КОТОРОМУ СДЕЛАЛИ ФОТО НА ДОПОЛНИТЕЛЬНОЙ СЪЁМКЕ 

Привет! Твои индивидуальные фотографии, которые сделали на дополнительной съёмке, загружены в папку (указать название папки, например “Фото с помещения”). Можешь смотреть, сохранять и выкладывать в соц. сети! Пожалуйста, проверь свои фотографии в течение 24 часов, и, если что-то не так, напиши мне. По истечению 24 часов исправить ничего будет нельзя!
Не забывай упоминать наш инстаграм im.jornal на фотках 💙

📍Чтобы скачать в хорошем качестве с диска из ваших папок: около списка фоток нажимать на три точки, дальше нажать отправить копию, затем на сохранить изображение.
 💙

Сообщение родителю

Здравствуйте! 👋
📍Мы уже почти подготовили электронные версии журналов. Перед отправкой их в печать каждому родителю/выпускнику нужно внимательно проверить свой журнал на наличие каких-либо ошибок и недостатков.

❓К Вам вопрос: кому отправлять электронные версии журналов для проверки? Есть три варианта:
1.	Выпускникам 🧑‍🎓
2.	Родителям 👫
3.	Выпускникам и родителям 🧑‍🎓👫
Если скидывать родителям, то сохранится интрига и сюрприз.
Если выпускникам, то они заранее перед получением журналов уже увидят всё, включая все пожелания и т.д.
🤝 Поэтому мы рекомендуем проверять журналы родителям.

📍Пожалуйста, дайте ответ на этот вопрос в течение 24 часов.
Заранее спасибо! 💙

 ЕСЛИ ПРОВЕРЯЮТ РОДИТЕЛИ 
(СООБЩЕНИЕ ОТВЕТСТВЕННОМУ РОДИТЕЛЮ): 

Здравствуйте! 👋
💫 Вот электронные версии ваших журналов: 
(ссылка на папку с готовыми журналами)

📍Ваши действия: 
1) В течение двух суток просмотреть журналы на наличие каких-либо ошибок в тексте. 
Необходимые правки по тексту написать здесь: (ссылка на гугл-форму)
❗️ВАЖНО: данную гугл-форму необходимо пройти ВСЕМ родителям вне зависимости от того, требуются ли правки!

2)✅ Правки, которые можно внести: 
а) Знаки пунктуации и орфографические ошибки в тексте (например: страница 3 после слова “домой” поставить точку; страница 4 - после слова “потому” поставить запятую). 
б) Ошибки, связанные со вставкой информации. (например: страница 3 - выпуск 2024 заменить на 2025; страница 7 - указана не моя фамилия). 
в) Поменять фотографии с вашим присутствием местами (например: поменять местами фото такое-то и такое-то страниц 6 и 7). 

3) ❌ Правки, которые нельзя внести:
а) Расположение фотографий на страницах журнала.
б) Удаление/расположение текста. 
в) Замена фотографий на сторонние. 
г) Добавление сторонних элементов в журналы.
д) Изменение шрифта и размера текста. 
е) Изменение концепции журнала. 

4) 💡 Будьте внимательны, так как возможности внести ещё потом правки больше не будет. Ещё один этап правок оплачивается дополнительно. 

5) ⏳ У вас 2 дня на проверку журнала.

6) ❗️Обращаю внимание на то, что опрос необходимо заполнить за один раз, если выйти на половине написанного, то ничего не сохранится и придётся писать заново. Когда правки будет полностью написаны, перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.

Пожалуйста, отпишите мне, как только разошлёте это сообщение родителям, заранее спасибо!!! 💙



ЕСЛИ ПРОВЕРЯЮТ ВЫПУСКНИКИ 
(СООБЩЕНИЕ В БЕСЕДУ): 

Привет! 👋 
💫 Вот электронные версии ваших журналов: 
(ссылка на папку с готовыми журналами)

📍 Ваши действия: 
1) В течение двух суток просмотреть журналы на наличие каких-либо ошибок в тексте. 
Необходимые правки по тексту написать здесь: (ссылка на гугл-форму)
❗️ВАЖНО: данную гугл-форму необходимо пройти ВСЕМ выпускникам вне зависимости от того, требуются ли правки!

2) ✅ Правки, которые можно внести: 
а) Знаки пунктуации и орфографические ошибки в тексте (например: страница 3 после слова “домой” поставить точку; страница 4 - после слова “потому” поставить запятую). 
б) Ошибки, связанные со вставкой информации. (например: страница 3 - выпуск 2024 заменить на 2025; страница 7 - указана не моя фамилия). 
в) Поменять фотографии с вашим присутствием местами (например: поменять местами фото такое-то и такое-то страниц 6 и 7). 

3) ❌ Правки, которые нельзя внести:
а) Расположение фотографий на страницах журнала.
б) Удаление/расположение текста. 
в) Замена фотографий на сторонние. 
г) Добавление сторонних элементов в журналы.
д) Изменение шрифта и размера текста. 
е) Изменение концепции журнала. 

4) 💡 Будьте внимательны, так как возможности внести ещё потом правки больше не будет. Ещё один этап правок оплачивается дополнительно. 

5) ⏳ У вас 2 дня на проверку журнала.

6) ❗️Обращаю внимание на то, что опрос необходимо заполнить за один раз, если выйти на половине написанного, то ничего не сохранится и придётся писать заново. Когда правки будет полностью написаны, перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.

ЕСЛИ СКИДЫВАЕМ РОДИТЕЛЯМ:
Сообщение ответственному родителю: 

Здравствуйте! 👋
🔔 Напоминаю о возможности написать правки по выпускным журналам. Дублирую на всякий случай ссылку на папку с электронными версиями всех журналов: 
(ссылка на папку с готовыми журналами)

📍 Необходимые правки по тексту написать здесь: (ссылка на гугл-форму)

☑️ Вот список тех, кто заполнил форму! Если остальные всё-таки будут вносить правки, то это необходимо сделать в течение дня. (прикрепить скрин из приложения)

⬆️ Инструкцию и правила по всем возможным правкам присылал выше.
💡 Будьте внимательны, так как возможности внести ещё потом правки больше не будет. Еще один этап правок оплачивается дополнительно. На проверку журналов остался 1 день❗️
📍Обращаю внимание на то, что опрос необходимо заполнить за один раз, если выйти на половине написанного, то ничего не сохранится и придётся писать заново. Когда правки будет полностью написаны, перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.


ЕСЛИ СКИДЫВАЕМ ВЫПУСКНИКАМ:
Сообщение ответственному родителю: 

Здравствуйте! 👋
🔔 Напоминаю о возможности написать правки по выпускным журналам. Вот электронные версии ваших журналов: 
(ссылка на папку с готовыми журналами)

📍Необходимые правки по тексту написать здесь: (ссылка на гугл-форму)

☑️ Вот список тех, кто заполнил форму! Если остальные всё-таки будут вносить правки, то это необходимо сделать в течение дня. (прикрепить скрин из приложения)

✅ Правки, которые можно внести: 
а) Знаки пунктуации и орфографические ошибки в тексте (например: страница 3 после слова “домой” поставить точку; страница 4 - после слова “потому” поставить запятую). 
б) Ошибки, связанные со вставкой информации. (например: страница 3 - выпуск 2024 заменить на 2025; страница 7 - указана не моя фамилия). 
в) Поменять фотографии с вашим присутствием местами (например: поменять местами фото такое-то и такое-то страниц 6 и 7). 

❌ Правки, которые нельзя внести:
а) Расположение фотографий на страницах журнала.
б) Удаление/расположение текста. 
в) Замена фотографий на сторонние. 
г) Добавление сторонних элементов в журналы.
д) Изменение шрифта и размера текста. 
е) Изменение концепции журнала. 

💡Будьте внимательны, так как возможности внести ещё потом правки больше не будет. Еще один этап правок оплачивается дополнительно. На проверку журналов остался 1 день❗️
📍Обращаю внимание на то, что опрос необходимо заполнить за один раз, если выйти на половине написанного, то ничего не сохранится и придётся писать заново. Когда правки будет полностью написаны, перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.

Сообщение в беседу выпускникам: 
Привет! 👋 
🔔 Напоминаю о возможности написать правки по выпускным журналам. Дублирую на всякий случай ссылку на папку с электронными версиями всех журналов: 
(ссылка на папку с готовыми журналами)

📍 Необходимые правки по тексту написать здесь: (ссылка на гугл-форму)

☑️ Вот список тех, кто заполнил форму! Если остальные всё-таки будут вносить правки, то это необходимо сделать в течение дня. (прикрепить скрин из приложения)

⬆️ Инструкцию и правила по всем возможным правкам присылал выше.
💡 Будьте внимательны, так как возможности внести ещё потом правки больше не будет. Еще один этап правок оплачивается дополнительно. На проверку журналов остался 1 день❗️
📍 Обращаю внимание на то, что опрос необходимо заполнить за один раз, если выйти на половине написанного, то ничего не сохранится и придётся писать заново. Когда правки будет полностью написаны, перед закрытием опроса ОБЯЗАТЕЛЬНО нажать кнопку “Отправить”, чтобы всё написанное у нас сохранилось.

ДЛЯ МЕНЕДЖЕРА: этот скрипт необходимо отправить после 20:00

ЕСЛИ СКИДЫВАЕМ РОДИТЕЛЯМ: 
Сообщение ответственному родителю: 

Добрый вечер! 🌅 
⌛️ Дедлайн по внесению правок в журналы истёк. Правки указали:
(фамилию имя выпускника - правка - будет/не будет внесена [если не будет, указать причину])
Больше ни от кого информации по внесению правок не получили. Спасибо Вам за помощь, хорошего вечера! 💙

ЕСЛИ СКИДЫВАЕМ ВЫПУСКНИКАМ: 
Сообщение ответственному родителю: 

Добрый вечер! 🌅
⌛️ Дедлайн по внесению правок в журналы истёк. Правки указали:
(фамилию имя выпускника - правка - будет/не будет внесена [если не будет, указать причину])
Больше ни от кого информации по внесению правок не получили. Спасибо Вам за помощь, хорошего вечера! 💙

Сообщение в беседу выпускникам: 

Привет! 👋
⌛️ Дедлайн по внесению правок в журналы истёк. Правки указали:
(фамилию имя выпускника - правка - будет/не будет внесена [если не будет, указать причину])
Больше ни от кого информации по внесению правок не получили.

Сообщение в беседу класса

@all
Всем привет! 👋

Ребят, у нас к вам просьба небольшая
В создание выпускных журналов для вас мы вложили все силы и душу, чтобы журналы и наша работа были полны эмоций и воспоминаний! 
В качестве благодарности можете, пожалуйста, оставить свой отзыв
По объёму отзыва на ваше усмотрение. 
По возможности напишите каждый из вас, это важно и ценно для нас
⏳ Желательно написать в ближайшие несколько дней. Мы будем очень благодарны вам за оставленный отзыв

Кто не против снять видосики с вашим журналом или сделать несколько фоток, можете выкладывать в сторис инсты и отмечать нас, чтобы мы могли репостнуть к себе. Или можете вместе с отзывом просто прикреплять видосы и фотки.
Отзыв можно написать двумя способами:

1) Лучше этот вариант выбрать. Вот сюда: https://vk.com/app6326142_-212187230
Сначала возможно появится окно с кнопкой разрешить, можно не переживать и спокойно нажимать разрешить, это соц сеть ВК так настроена.

2) Кто переживает, что в ВК нужно нажимать кнопку разрешить, можно написать отзыв нашему руководителю в личные сообщения в любой соц сети:
Телеграм: @makspvv
Вк: https://vk.com/makspvv

С любовью, команда IMJ

`})})})]})});default:return null}};return r.jsx("div",{className:"min-h-screen bg-gray-50 p-6",children:r.jsxs("div",{className:"max-w-6xl mx-auto",children:[r.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Скрипты для работы с выпускниками"}),r.jsx("div",{className:"flex space-x-4 mb-8",children:n.map(l=>{const a=l.icon;return r.jsxs("button",{onClick:()=>t(l.id),className:`flex items-center px-6 py-3 rounded-lg transition-colors ${e===l.id?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-100"}`,children:[r.jsx(a,{className:"h-5 w-5 mr-2"}),l.label]},l.id)})}),s()]})})};function ih({isOpen:e,onClose:t,onUpload:n}){const{user:s}=Me(),[l,a]=L.useState({title:"",description:"",file:null}),[o,i]=L.useState(!1),c=w=>{w.preventDefault(),w.stopPropagation(),w.type==="dragenter"||w.type==="dragover"?i(!0):w.type==="dragleave"&&i(!1)},f=w=>{if(w.preventDefault(),w.stopPropagation(),i(!1),w.dataTransfer.files&&w.dataTransfer.files[0]){const j=w.dataTransfer.files[0];j.type==="application/vnd.openxmlformats-officedocument.wordprocessingml.document"||j.type==="application/msword"||j.type==="text/plain"?a(N=>({...N,file:j})):alert("Поддерживаются только файлы Word (.doc, .docx) и текстовые файлы (.txt)")}},p=w=>{if(w.target.files&&w.target.files[0]){const j=w.target.files[0];j.type==="application/vnd.openxmlformats-officedocument.wordprocessingml.document"||j.type==="application/msword"||j.type==="text/plain"?a(N=>({...N,file:j})):alert("Поддерживаются только файлы Word (.doc, .docx) и текстовые файлы (.txt)")}},g=w=>{if(w.preventDefault(),!l.file||!l.title.trim()||!s)return;const j={title:l.title,description:l.description,fileName:l.file.name,fileType:l.file.type,fileSize:l.file.size,uploadedBy:s.id,uploadedByName:s.name,fileUrl:URL.createObjectURL(l.file)};n(j),a({title:"",description:"",file:null}),t()},h=w=>{if(w===0)return"0 Bytes";const j=1024,N=["Bytes","KB","MB","GB"],y=Math.floor(Math.log(w)/Math.log(j));return parseFloat((w/Math.pow(j,y)).toFixed(2))+" "+N[y]};return e?r.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto",children:[r.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[r.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Загрузить отчет"}),r.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:r.jsx(je,{className:"h-6 w-6"})})]}),r.jsxs("form",{onSubmit:g,className:"p-6 space-y-6",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Название отчета *"}),r.jsx("input",{type:"text",value:l.title,onChange:w=>a(j=>({...j,title:w.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Например: Отчет по проекту за февраль 2024",required:!0})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Описание"}),r.jsx("textarea",{value:l.description,onChange:w=>a(j=>({...j,description:w.target.value})),rows:3,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Краткое описание содержания отчета"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Файл отчета *"}),r.jsxs("div",{className:`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${o?"border-blue-500 bg-blue-50":"border-gray-300 hover:border-gray-400"}`,onDragEnter:c,onDragLeave:c,onDragOver:c,onDrop:f,children:[r.jsx("input",{type:"file",onChange:p,className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer",accept:".doc,.docx,.txt"}),l.file?r.jsxs("div",{className:"space-y-2",children:[r.jsx(nn,{className:"h-12 w-12 text-green-600 mx-auto"}),r.jsxs("div",{children:[r.jsx("p",{className:"font-medium text-gray-900",children:l.file.name}),r.jsx("p",{className:"text-sm text-gray-500",children:h(l.file.size)})]}),r.jsx("button",{type:"button",onClick:()=>a(w=>({...w,file:null})),className:"text-red-600 hover:text-red-700 text-sm",children:"Удалить файл"})]}):r.jsxs("div",{className:"space-y-4",children:[r.jsx("div",{className:"flex justify-center",children:r.jsx("div",{className:"bg-blue-100 p-4 rounded-full",children:r.jsx(dt,{className:"h-8 w-8 text-blue-600"})})}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Перетащите файл сюда или нажмите для выбора"}),r.jsx("p",{className:"text-gray-600 mt-1",children:"Поддерживаются файлы Word (.doc, .docx) и текстовые файлы (.txt)"})]})]})]})]}),r.jsxs("div",{className:"flex justify-end space-x-3",children:[r.jsx(A,{type:"button",variant:"outline",onClick:t,children:"Отмена"}),r.jsx(A,{type:"submit",disabled:!l.file||!l.title.trim(),children:"Загрузить отчет"})]})]})]})}):null}function ch(){const{user:e}=Me(),[t,n]=L.useState([]),[s,l]=L.useState(""),[a,o]=L.useState(!1);Ao.useEffect(()=>{const N=localStorage.getItem("reports");if(N)try{const m=JSON.parse(N).map(d=>({...d,uploadedAt:new Date(d.uploadedAt)}));n(m)}catch(y){console.error("Ошибка при загрузке отчетов:",y);const m=[{id:"1",title:'Отчет по проекту "Свадебный альбом" за февраль',description:"Подробный отчет о выполненной работе по свадебному альбому",fileName:"wedding_report_feb.docx",fileType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",fileSize:245760,uploadedBy:"2",uploadedByName:"Анна Иванова",uploadedAt:new Date("2024-02-28"),fileUrl:"#"},{id:"2",title:"Отчет по выпускному альбому",description:"Промежуточный отчет о работе над выпускным альбомом",fileName:"graduation_report.txt",fileType:"text/plain",fileSize:12800,uploadedBy:"3",uploadedByName:"Елена Сидорова",uploadedAt:new Date("2024-02-25"),fileUrl:"#"}];n(m),localStorage.setItem("reports",JSON.stringify(m))}else{const y=[{id:"1",title:'Отчет по проекту "Свадебный альбом" за февраль',description:"Подробный отчет о выполненной работе по свадебному альбому",fileName:"wedding_report_feb.docx",fileType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",fileSize:245760,uploadedBy:"2",uploadedByName:"Анна Иванова",uploadedAt:new Date("2024-02-28"),fileUrl:"#"},{id:"2",title:"Отчет по выпускному альбому",description:"Промежуточный отчет о работе над выпускным альбомом",fileName:"graduation_report.txt",fileType:"text/plain",fileSize:12800,uploadedBy:"3",uploadedByName:"Елена Сидорова",uploadedAt:new Date("2024-02-25"),fileUrl:"#"}];n(y),localStorage.setItem("reports",JSON.stringify(y))}},[]),Ao.useEffect(()=>{t.length>0&&localStorage.setItem("reports",JSON.stringify(t))},[t]);const i=N=>{const y={...N,id:Math.random().toString(36).substr(2,9),uploadedAt:new Date};n(m=>{const d=[y,...m];return localStorage.setItem("reports",JSON.stringify(d)),d})},c=N=>{const y=t.find(m=>m.id===N);y&&((e==null?void 0:e.role)==="admin"||(e==null?void 0:e.id)===y.uploadedBy)&&(n(m=>{const d=m.filter(x=>x.id!==N);return localStorage.setItem("reports",JSON.stringify(d)),d}),y.fileUrl&&y.fileUrl.startsWith("blob:")&&URL.revokeObjectURL(y.fileUrl))},f=N=>{if(N.fileUrl){const y=document.createElement("a");y.href=N.fileUrl,y.download=N.fileName,document.body.appendChild(y),y.click(),document.body.removeChild(y)}},p=N=>(e==null?void 0:e.role)==="admin"?!0:(e==null?void 0:e.id)===N.uploadedBy,g=N=>(e==null?void 0:e.role)==="admin"?!0:(e==null?void 0:e.id)===N.uploadedBy,h=t.filter(N=>(N.title.toLowerCase().includes(s.toLowerCase())||N.description.toLowerCase().includes(s.toLowerCase())||N.uploadedByName.toLowerCase().includes(s.toLowerCase()))&&p(N)),w=N=>{if(N===0)return"0 Bytes";const y=1024,m=["Bytes","KB","MB","GB"],d=Math.floor(Math.log(N)/Math.log(y));return parseFloat((N/Math.pow(y,d)).toFixed(2))+" "+m[d]},j=N=>N.includes("word")||N.includes("document")?r.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center",children:r.jsx(nn,{className:"h-6 w-6 text-blue-600"})}):r.jsx("div",{className:"w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center",children:r.jsx(nn,{className:"h-6 w-6 text-gray-600"})});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"p-6 space-y-6",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Отчеты сотрудников"}),r.jsx("p",{className:"text-gray-600 mt-1",children:(e==null?void 0:e.role)==="admin"?"Просматривайте отчеты всех сотрудников":"Загружайте и управляйте своими отчетами"})]}),r.jsxs(A,{onClick:()=>o(!0),children:[r.jsx(Je,{className:"h-4 w-4 mr-2"}),"Загрузить отчет"]})]}),r.jsx(G,{children:r.jsx(Q,{className:"p-4",children:r.jsxs("div",{className:"relative",children:[r.jsx(Ht,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),r.jsx("input",{type:"text",placeholder:"Поиск отчетов...",value:s,onChange:N=>l(N.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})})}),r.jsx("div",{className:"space-y-4",children:h.length===0?r.jsx(G,{className:"text-center py-12",children:r.jsxs(Q,{children:[r.jsx("div",{className:"text-gray-400 mb-4",children:r.jsx(nn,{className:"h-16 w-16 mx-auto"})}),r.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:s?"Отчеты не найдены":"Нет отчетов"}),r.jsx("p",{className:"text-gray-600 mb-4",children:s?"Попробуйте изменить параметры поиска":"Загрузите первый отчет, чтобы начать работу"}),!s&&r.jsxs(A,{onClick:()=>o(!0),children:[r.jsx(Je,{className:"h-4 w-4 mr-2"}),"Загрузить первый отчет"]})]})}):h.map(N=>r.jsx(G,{className:"hover:shadow-md transition-shadow",children:r.jsx(Q,{className:"p-6",children:r.jsxs("div",{className:"flex items-start space-x-4",children:[r.jsx("div",{className:"flex-shrink-0",children:j(N.fileType)}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsxs("div",{className:"flex-1",children:[r.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-1",children:N.title}),N.description&&r.jsx("p",{className:"text-gray-600 mb-2",children:N.description}),r.jsxs("div",{className:"flex items-center space-x-4 text-sm text-gray-500",children:[r.jsxs("span",{children:["Файл: ",N.fileName]}),r.jsxs("span",{children:["Размер: ",w(N.fileSize)]}),r.jsxs("span",{children:["Автор: ",N.uploadedByName]}),r.jsxs("span",{children:["Дата: ",N.uploadedAt.toLocaleDateString("ru-RU")]})]})]}),r.jsxs("div",{className:"flex items-center space-x-2 ml-4",children:[(e==null?void 0:e.role)==="admin"&&r.jsxs(A,{size:"sm",variant:"outline",onClick:()=>f(N),children:[r.jsx(mn,{className:"h-4 w-4 mr-1"}),"Просмотр"]}),r.jsxs(A,{size:"sm",variant:"outline",onClick:()=>f(N),children:[r.jsx(Po,{className:"h-4 w-4 mr-1"}),"Скачать"]}),g(N)&&r.jsx(A,{size:"sm",variant:"outline",className:"text-red-600 hover:text-red-700",onClick:()=>c(N.id),children:r.jsx(To,{className:"h-4 w-4"})})]})]}),(e==null?void 0:e.role)!=="admin"&&(e==null?void 0:e.id)!==N.uploadedBy&&r.jsx("div",{className:"mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3",children:r.jsxs("p",{className:"text-sm text-yellow-800",children:[r.jsx("strong",{children:"Ограниченный доступ:"})," Вы видите этот отчет, но не можете его просматривать или скачивать."]})})]})]})})},N.id))})]}),r.jsx(ih,{isOpen:a,onClose:()=>o(!1),onUpload:i})]})}function uh({isOpen:e,onClose:t,onUpload:n}){const[s,l]=L.useState(!1),[a,o]=L.useState([]),i=w=>{w.preventDefault(),w.stopPropagation(),w.type==="dragenter"||w.type==="dragover"?l(!0):w.type==="dragleave"&&l(!1)},c=w=>{w.preventDefault(),w.stopPropagation(),l(!1),w.dataTransfer.files&&w.dataTransfer.files[0]&&o(Array.from(w.dataTransfer.files))},f=w=>{w.target.files&&o(Array.from(w.target.files))},p=()=>{a.length>0&&(n(a),o([]),t())},g=w=>{if(w===0)return"0 Bytes";const j=1024,N=["Bytes","KB","MB","GB"],y=Math.floor(Math.log(w)/Math.log(j));return parseFloat((w/Math.pow(j,y)).toFixed(2))+" "+N[y]},h=w=>{o(j=>j.filter((N,y)=>y!==w))};return e?r.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto",children:[r.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[r.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Загрузить файлы"}),r.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:r.jsx(je,{className:"h-6 w-6"})})]}),r.jsxs("div",{className:"p-6 space-y-6",children:[r.jsxs("div",{className:`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${s?"border-blue-500 bg-blue-50":"border-gray-300 hover:border-gray-400"}`,onDragEnter:i,onDragLeave:i,onDragOver:i,onDrop:c,children:[r.jsx("input",{type:"file",multiple:!0,onChange:f,className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer",accept:"image/*,video/*,.pdf,.doc,.docx"}),r.jsxs("div",{className:"space-y-4",children:[r.jsx("div",{className:"flex justify-center",children:r.jsx("div",{className:"bg-blue-100 p-4 rounded-full",children:r.jsx(dt,{className:"h-8 w-8 text-blue-600"})})}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Перетащите файлы сюда или нажмите для выбора"}),r.jsx("p",{className:"text-gray-600 mt-1",children:"Поддерживаются изображения, видео и документы до 10MB"})]})]})]}),a.length>0&&r.jsxs("div",{className:"space-y-3",children:[r.jsxs("h3",{className:"font-medium text-gray-900",children:["Выбранные файлы (",a.length,")"]}),a.map((w,j)=>r.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[r.jsxs("div",{className:"flex items-center space-x-3",children:[r.jsx("div",{className:"flex-shrink-0",children:w.type.startsWith("image/")?r.jsx(xd,{className:"h-8 w-8 text-blue-500"}):r.jsx(nn,{className:"h-8 w-8 text-gray-500"})}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-medium text-gray-900",children:w.name}),r.jsx("p",{className:"text-sm text-gray-500",children:g(w.size)})]})]}),r.jsx("button",{onClick:()=>h(j),className:"text-gray-400 hover:text-red-500 transition-colors",children:r.jsx(je,{className:"h-4 w-4"})})]},j))]}),r.jsxs("div",{className:"flex justify-end space-x-3",children:[r.jsx(A,{variant:"outline",onClick:t,children:"Отмена"}),r.jsxs(A,{onClick:p,disabled:a.length===0,children:["Загрузить файлы (",a.length,")"]})]})]})]})}):null}function dh({projectId:e,onBack:t}){var C,_;const{user:n,users:s,projects:l,updateProject:a,addFileToProject:o,removeFileFromProject:i}=Me(),[c,f]=L.useState(!1),[p,g]=L.useState({}),[h,w]=L.useState(!1),j=l.find(k=>k.id===e),y=(()=>{var k;return!n||!j?!1:!!(n.role==="admin"||((k=j.manager)==null?void 0:k.id)===n.id||n.role==="photographer"&&j.photographers.some(z=>z.id===n.id)||n.role==="designer"&&j.designers.some(z=>z.id===n.id))})();if(!j)return r.jsx("div",{className:"p-6",children:r.jsx(G,{className:"text-center py-12",children:r.jsxs(Q,{children:[r.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Проект не найден"}),r.jsx("p",{className:"text-gray-600 mb-4",children:"Возможно, проект был удален или у вас нет доступа к нему"}),r.jsx(A,{onClick:t,children:"Вернуться к списку проектов"})]})})});const m=k=>{const z={planning:{label:"Планирование",color:"bg-gray-100 text-gray-800",icon:zo},"in-progress":{label:"В работе",color:"bg-blue-100 text-blue-800",icon:tn},review:{label:"На проверке",color:"bg-yellow-100 text-yellow-800",icon:Hs},completed:{label:"Завершен",color:"bg-green-100 text-green-800",icon:pd}};return z[k]||z.planning},d=["Свадебный альбом","Выпускной альбом","Детский альбом","Корпоративный альбом","Семейный альбом","Портретная съемка"],x=s.filter(k=>k.role==="photographer"),S=s.filter(k=>k.role==="designer"),v=s.filter(k=>k.role==="admin"),E=()=>{g({title:j.title,albumType:j.albumType,description:j.description,status:j.status,deadline:j.deadline.toISOString().split("T")[0],manager:j.manager,photographers:j.photographers,designers:j.designers}),f(!0)},M=()=>{const k={...p,deadline:p.deadline?new Date(p.deadline):j.deadline,manager:p.manager?s.find(z=>{var O;return z.id===((O=p.manager)==null?void 0:O.id)||p.manager}):j.manager};a(e,k),f(!1),g({})},b=()=>{f(!1),g({})},D=k=>{k.forEach(z=>{const O={name:z.name,type:z.type,size:z.size,preview:z.type.startsWith("image/")?URL.createObjectURL(z):void 0,uploadedBy:n};o(e,O)})},T=k=>{const z=j.files.find(O=>O.id===k);z!=null&&z.preview&&URL.revokeObjectURL(z.preview),i(e,k)},V=k=>{if(k.preview){const z=document.createElement("a");z.href=k.preview,z.download=k.name,document.body.appendChild(z),z.click(),document.body.removeChild(z)}else{const z=new Blob([""],{type:k.type}),O=URL.createObjectURL(z),U=document.createElement("a");U.href=O,U.download=k.name,document.body.appendChild(U),U.click(),document.body.removeChild(U),URL.revokeObjectURL(O)}},ee=k=>{if(k===0)return"0 Bytes";const z=1024,O=["Bytes","KB","MB","GB"],U=Math.floor(Math.log(k)/Math.log(z));return parseFloat((k/Math.pow(z,U)).toFixed(2))+" "+O[U]},Ne=k=>k.startsWith("image/")?xd:k.startsWith("video/")?tn:nn,ke=(k,z)=>{g(O=>({...O,[k]:z}))},_e=k=>{g(z=>{const O=z.photographers||j.photographers;if(O.some(X=>X.id===k))return{...z,photographers:O.filter(X=>X.id!==k)};{const X=s.find(ie=>ie.id===k);return{...z,photographers:X?[...O,X]:O}}})},te=k=>{g(z=>{const O=z.designers||j.designers;if(O.some(X=>X.id===k))return{...z,designers:O.filter(X=>X.id!==k)};{const X=s.find(ie=>ie.id===k);return{...z,designers:X?[...O,X]:O}}})},J=m(j.status),u=J.icon;return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"p-6 space-y-6",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsxs(A,{variant:"outline",onClick:t,children:[r.jsx(op,{className:"h-4 w-4 mr-2"}),"Назад к проектам"]}),r.jsxs("div",{children:[r.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:c?r.jsx("input",{type:"text",value:p.title||"",onChange:k=>ke("title",k.target.value),className:"text-3xl font-bold bg-transparent border-b-2 border-blue-500 focus:outline-none"}):j.title}),r.jsx("p",{className:"text-gray-600 mt-1",children:c?r.jsx("select",{value:p.albumType||"",onChange:k=>ke("albumType",k.target.value),className:"bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500",children:d.map(k=>r.jsx("option",{value:k,children:k},k))}):j.albumType})]})]}),r.jsxs("div",{className:"flex items-center space-x-3",children:[c?r.jsxs(r.Fragment,{children:[r.jsxs(A,{variant:"outline",onClick:b,children:[r.jsx(je,{className:"h-4 w-4 mr-2"}),"Отмена"]}),r.jsxs(A,{onClick:M,children:[r.jsx(pp,{className:"h-4 w-4 mr-2"}),"Сохранить"]})]}):y&&r.jsxs(A,{onClick:E,children:[r.jsx(gd,{className:"h-4 w-4 mr-2"}),"Редактировать"]}),!y&&r.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2",children:r.jsx("span",{className:"text-sm text-yellow-800",children:"Только просмотр"})})]})]}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[r.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[r.jsxs(G,{children:[r.jsx(he,{children:r.jsx(xe,{children:"Информация о проекте"})}),r.jsxs(Q,{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Описание"}),c?r.jsx("textarea",{value:p.description||"",onChange:k=>ke("description",k.target.value),rows:3,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}):r.jsx("p",{className:"text-gray-600",children:j.description||"Описание не указано"})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Статус"}),c?r.jsxs("select",{value:p.status||"",onChange:k=>ke("status",k.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",children:[r.jsx("option",{value:"planning",children:"Планирование"}),r.jsx("option",{value:"in-progress",children:"В работе"}),r.jsx("option",{value:"review",children:"На проверке"}),r.jsx("option",{value:"completed",children:"Завершен"})]}):r.jsxs("span",{className:`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${J.color}`,children:[r.jsx(u,{className:"h-4 w-4 mr-2"}),J.label]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Дедлайн"}),c?r.jsx("input",{type:"date",value:p.deadline||"",onChange:k=>ke("deadline",k.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}):r.jsxs("div",{className:"flex items-center text-gray-600",children:[r.jsx(Nt,{className:"h-4 w-4 mr-2"}),j.deadline.toLocaleDateString("ru-RU")]})]})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Менеджер"}),c?r.jsxs("select",{value:((C=p.manager)==null?void 0:C.id)||"",onChange:k=>ke("manager",k.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",children:[r.jsx("option",{value:"",children:"Не назначен"}),v.map(k=>r.jsx("option",{value:k.id,children:k.name},k.id))]}):r.jsxs("div",{className:"flex items-center text-gray-600",children:[r.jsx(il,{className:"h-4 w-4 mr-2"}),((_=j.manager)==null?void 0:_.name)||"Не назначен"]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Фотографы"}),c?r.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto border border-gray-300 rounded-lg p-2",children:x.map(k=>r.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[r.jsx("input",{type:"checkbox",checked:(p.photographers||j.photographers).some(z=>z.id===k.id),onChange:()=>_e(k.id),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),r.jsx("span",{className:"text-sm text-gray-700",children:k.name})]},k.id))}):r.jsxs("div",{className:"flex items-center text-gray-600",children:[r.jsx(tn,{className:"h-4 w-4 mr-2"}),j.photographers.length>0?j.photographers.map(k=>k.name).join(", "):"Не назначены"]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Дизайнеры"}),c?r.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto border border-gray-300 rounded-lg p-2",children:S.map(k=>r.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[r.jsx("input",{type:"checkbox",checked:(p.designers||j.designers).some(z=>z.id===k.id),onChange:()=>te(k.id),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),r.jsx("span",{className:"text-sm text-gray-700",children:k.name})]},k.id))}):r.jsxs("div",{className:"flex items-center text-gray-600",children:[r.jsx(Hs,{className:"h-4 w-4 mr-2"}),j.designers.length>0?j.designers.map(k=>k.name).join(", "):"Не назначены"]})]})]})]})]}),r.jsxs(G,{children:[r.jsx(he,{children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx(xe,{children:"Файлы проекта"}),y&&r.jsxs(A,{size:"sm",onClick:()=>w(!0),children:[r.jsx(dt,{className:"h-4 w-4 mr-2"}),"Загрузить файлы"]})]})}),r.jsx(Q,{children:r.jsxs("div",{className:"space-y-3",children:[j.files.map(k=>{const z=Ne(k.type);return r.jsxs("div",{className:"flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[r.jsxs("div",{className:"flex items-center space-x-3",children:[r.jsx("div",{className:"flex-shrink-0",children:k.preview?r.jsx("div",{className:"relative group",children:r.jsx("img",{src:k.preview,alt:k.name,className:"w-12 h-12 object-cover rounded-lg"})}):r.jsx("div",{className:"w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center",children:r.jsx(z,{className:"h-6 w-6 text-gray-500"})})}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-medium text-gray-900",children:k.name}),r.jsxs("p",{className:"text-sm text-gray-500",children:[ee(k.size)," • Загружен ",k.uploadedBy.name," • ",k.uploadedAt.toLocaleDateString("ru-RU")]})]})]}),r.jsxs("div",{className:"flex items-center space-x-2",children:[k.preview&&r.jsxs(A,{size:"sm",variant:"outline",onClick:()=>{const O=document.createElement("div");O.className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4",O.innerHTML=`
                             <div class="relative max-w-4xl max-h-full">
                               <img src="${k.preview}" alt="${k.name}" class="max-w-full max-h-full object-contain rounded-lg">
                               <button class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75">
                                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                 </svg>
                               </button>
                             </div>
                           `,O.onclick=U=>{(U.target===O||U.target.closest("button"))&&document.body.removeChild(O)},document.body.appendChild(O)},children:[r.jsx(mn,{className:"h-4 w-4 mr-1"}),"Просмотр"]}),r.jsxs(A,{size:"sm",variant:"outline",onClick:()=>V(k),children:[r.jsx(Po,{className:"h-4 w-4 mr-1"}),"Скачать"]}),y&&r.jsx(A,{size:"sm",variant:"outline",className:"text-red-600 hover:text-red-700",onClick:()=>T(k.id),children:r.jsx(To,{className:"h-4 w-4"})})]})]},k.id)}),j.files.length===0&&r.jsxs("div",{className:"text-center py-8",children:[r.jsx(dt,{className:"h-12 w-12 text-gray-300 mx-auto mb-3"}),r.jsx("p",{className:"text-gray-500 mb-3",children:"Файлы еще не загружены"}),y&&r.jsxs(A,{variant:"outline",size:"sm",onClick:()=>w(!0),children:[r.jsx(dt,{className:"h-4 w-4 mr-2"}),"Загрузить первые файлы"]})]})]})})]})]}),r.jsxs("div",{className:"space-y-6",children:[r.jsxs(G,{children:[r.jsx(he,{children:r.jsx(xe,{children:"Статистика"})}),r.jsxs(Q,{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-gray-600",children:"Фотографий"}),r.jsx("span",{className:"font-semibold",children:j.files.filter(k=>k.type.startsWith("image/")).length})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-gray-600",children:"Макетов"}),r.jsx("span",{className:"font-semibold",children:j.files.filter(k=>k.type.includes("design")||k.name.toLowerCase().includes("макет")||k.name.toLowerCase().includes("design")).length})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-gray-600",children:"Файлов"}),r.jsx("span",{className:"font-semibold",children:j.files.length})]})]})]}),r.jsxs(G,{children:[r.jsx(he,{children:r.jsx(xe,{children:"Временная шкала"})}),r.jsxs(Q,{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-center space-x-3",children:[r.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),r.jsxs("div",{children:[r.jsx("p",{className:"font-medium text-gray-900",children:"Проект создан"}),r.jsx("p",{className:"text-sm text-gray-500",children:j.createdAt.toLocaleDateString("ru-RU")})]})]}),r.jsxs("div",{className:"flex items-center space-x-3",children:[r.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),r.jsxs("div",{children:[r.jsx("p",{className:"font-medium text-gray-900",children:"Последнее обновление"}),r.jsx("p",{className:"text-sm text-gray-500",children:j.updatedAt.toLocaleDateString("ru-RU")})]})]}),r.jsxs("div",{className:"flex items-center space-x-3",children:[r.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),r.jsxs("div",{children:[r.jsx("p",{className:"font-medium text-gray-900",children:"Дедлайн"}),r.jsx("p",{className:"text-sm text-gray-500",children:j.deadline.toLocaleDateString("ru-RU")})]})]})]})]})]})]})]}),y&&r.jsx(uh,{isOpen:h,onClose:()=>w(!1),onUpload:D,projectId:e})]})}function mh({isOpen:e,onClose:t,onStartChat:n}){const{user:s,users:l}=Me(),[a,o]=L.useState(""),i=l.filter(p=>!s||p.id===s.id?!1:p.name.toLowerCase().includes(a.toLowerCase())||p.email.toLowerCase().includes(a.toLowerCase())||(p.department||"").toLowerCase().includes(a.toLowerCase())),c=p=>({photographer:"Фотограф",designer:"Дизайнер",admin:"Администратор"})[p]||p,f=p=>({photographer:"bg-blue-100 text-blue-800",designer:"bg-purple-100 text-purple-800",admin:"bg-green-100 text-green-800"})[p]||"bg-gray-100 text-gray-800";return e?r.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-white rounded-xl max-w-md w-full max-h-[80vh] overflow-hidden",children:[r.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[r.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Начать новый чат"}),r.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:r.jsx(je,{className:"h-6 w-6"})})]}),r.jsxs("div",{className:"p-4",children:[r.jsxs("div",{className:"relative mb-4",children:[r.jsx(Ht,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),r.jsx("input",{type:"text",placeholder:"Поиск сотрудников...",value:a,onChange:p=>o(p.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),r.jsx("div",{className:"max-h-96 overflow-y-auto space-y-2",children:i.map(p=>r.jsx("button",{onClick:()=>{n(p.id),t()},className:"w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors",children:r.jsxs("div",{className:"flex items-center space-x-3",children:[r.jsx("img",{src:p.avatar||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",alt:p.name,className:"w-10 h-10 rounded-full object-cover"}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("p",{className:"font-medium text-gray-900 truncate",children:p.name}),r.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${f(p.role)}`,children:c(p.role)})]}),r.jsx("p",{className:"text-sm text-gray-500 truncate",children:p.department||"Не указан"})]})]})},p.id))}),i.length===0&&r.jsxs("div",{className:"text-center py-8",children:[r.jsx(cn,{className:"h-12 w-12 text-gray-300 mx-auto mb-3"}),r.jsx("p",{className:"text-gray-500",children:a?"Сотрудники не найдены":"Нет доступных сотрудников"})]})]})]})}):null}function fh({targetUserId:e,onClearTarget:t}){const{user:n,users:s}=Me(),[l,a]=L.useState(null),[o,i]=L.useState([]),[c,f]=L.useState(""),[p,g]=L.useState(null),[h,w]=L.useState(""),[j,N]=L.useState(!1),y=L.useRef(null),m=L.useRef(null);L.useEffect(()=>{if(e&&n){const u=S(e);a(u),t&&t()}},[e,n]),L.useEffect(()=>{const u=localStorage.getItem("messenger_chats");if(u)try{const _=JSON.parse(u).map(k=>({...k,createdAt:new Date(k.createdAt),messages:k.messages.map(z=>({...z,timestamp:new Date(z.timestamp)})),lastMessage:k.lastMessage?{...k.lastMessage,timestamp:new Date(k.lastMessage.timestamp)}:void 0}));i(_)}catch(C){console.error("Ошибка при загрузке чатов:",C),i([])}},[]),L.useEffect(()=>{o.length>0&&localStorage.setItem("messenger_chats",JSON.stringify(o))},[o]),L.useEffect(()=>{d()},[l,o]);const d=()=>{var u;(u=y.current)==null||u.scrollIntoView({behavior:"smooth"})},x=()=>n?o.filter(u=>u.participants.includes(n.id)):[],S=u=>{if(!n)return"";const C=o.find(z=>z.participants.length===2&&z.participants.includes(n.id)&&z.participants.includes(u));if(C)return C.id;const _=s.find(z=>z.id===u);if(!_)return"";const k={id:Math.random().toString(36).substr(2,9),participants:[n.id,u],participantNames:[n.name,_.name],messages:[],unreadCount:{[n.id]:0,[u]:0},createdAt:new Date};return i(z=>[...z,k]),k.id},v=u=>{const C=S(u);a(C)},E=()=>{if(!c.trim()&&!p||!l||!n)return;const u={id:Math.random().toString(36).substr(2,9),senderId:n.id,senderName:n.name,content:c.trim(),timestamp:new Date,file:p?{name:p.name,size:p.size,type:p.type,url:URL.createObjectURL(p)}:void 0};i(C=>C.map(k=>{if(k.id===l){const z={...k.unreadCount};return k.participants.forEach(O=>{O!==n.id&&(z[O]=(z[O]||0)+1)}),{...k,messages:[...k.messages,u],lastMessage:u,unreadCount:z}}return k})),f(""),g(null)},M=u=>{var _;const C=(_=u.target.files)==null?void 0:_[0];if(C){if(C.size>10*1024*1024){alert("Размер файла не должен превышать 10MB");return}g(C)}},b=u=>{n&&i(C=>C.map(k=>{if(k.id===u){const z={...k.unreadCount};return z[n.id]=0,{...k,unreadCount:z}}return k}))},D=u=>{a(u),b(u)},T=u=>{if(u===0)return"0 Bytes";const C=1024,_=["Bytes","KB","MB","GB"],k=Math.floor(Math.log(u)/Math.log(C));return parseFloat((u/Math.pow(C,k)).toFixed(2))+" "+_[k]},V=u=>u.toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"}),ee=u=>{const C=new Date,_=new Date(C);return _.setDate(_.getDate()-1),u.toDateString()===C.toDateString()?"Сегодня":u.toDateString()===_.toDateString()?"Вчера":u.toLocaleDateString("ru-RU")},Ne=u=>{if(!n)return null;const C=u.participants.find(_=>_!==n.id);return s.find(_=>_.id===C)},_e=x().filter(u=>{const C=Ne(u);return C?C.name.toLowerCase().includes(h.toLowerCase())||C.email.toLowerCase().includes(h.toLowerCase()):!1}),te=o.find(u=>u.id===l),J=te?Ne(te):null;return n?r.jsxs("div",{className:"h-full flex flex-col",children:[r.jsx("div",{className:"p-6 border-b border-gray-200",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Мессенджер"}),r.jsx("p",{className:"text-gray-600 mt-1",children:"Общение с коллегами и обмен файлами"})]}),r.jsxs(A,{onClick:()=>N(!0),children:[r.jsx(Je,{className:"h-4 w-4 mr-2"}),"Новый чат"]})]})}),r.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[r.jsxs("div",{className:"w-80 border-r border-gray-200 flex flex-col",children:[r.jsx("div",{className:"p-4 border-b border-gray-200",children:r.jsxs("div",{className:"relative",children:[r.jsx(Ht,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),r.jsx("input",{type:"text",placeholder:"Поиск чатов...",value:h,onChange:u=>w(u.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"})]})}),r.jsx("div",{className:"flex-1 overflow-y-auto",children:_e.length===0?r.jsxs("div",{className:"p-6 text-center",children:[r.jsx(Re,{className:"h-12 w-12 text-gray-300 mx-auto mb-3"}),r.jsx("p",{className:"text-gray-500 mb-3",children:h?"Чаты не найдены":"У вас пока нет чатов"}),!h&&r.jsxs(A,{size:"sm",variant:"outline",onClick:()=>N(!0),children:[r.jsx(Je,{className:"h-4 w-4 mr-1"}),"Начать чат"]})]}):_e.sort((u,C)=>{var z,O;const _=((z=u.lastMessage)==null?void 0:z.timestamp)||u.createdAt;return(((O=C.lastMessage)==null?void 0:O.timestamp)||C.createdAt).getTime()-_.getTime()}).map(u=>{const C=Ne(u);if(!C)return null;const _=u.unreadCount[n.id]||0;return r.jsx("button",{onClick:()=>D(u.id),className:`w-full p-4 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 ${l===u.id?"bg-blue-50 border-blue-200":""}`,children:r.jsxs("div",{className:"flex items-center space-x-3",children:[r.jsx("img",{src:C.avatar||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",alt:C.name,className:"w-12 h-12 rounded-full object-cover"}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("h4",{className:"font-medium text-gray-900 truncate",children:C.name}),_>0&&r.jsx("span",{className:"bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center",children:_>99?"99+":_})]}),r.jsxs("p",{className:"text-sm text-gray-500 capitalize truncate",children:[C.role," • ",C.department||"Не указан"]}),u.lastMessage&&r.jsxs("p",{className:"text-xs text-gray-400 truncate mt-1",children:[u.lastMessage.senderId===n.id?"Вы: ":"",u.lastMessage.content||"Файл"]})]})]})},u.id)})})]}),r.jsx("div",{className:"flex-1 flex flex-col",children:l&&te&&J?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"p-4 border-b border-gray-200 bg-white",children:r.jsxs("div",{className:"flex items-center space-x-3",children:[r.jsx("img",{src:J.avatar||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",alt:J.name,className:"w-10 h-10 rounded-full object-cover"}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold text-gray-900",children:J.name}),r.jsxs("p",{className:"text-sm text-gray-500 capitalize",children:[J.role," • ",J.department||"Не указан"]})]})]})}),r.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[te.messages.length===0?r.jsxs("div",{className:"text-center py-8",children:[r.jsx(Re,{className:"h-12 w-12 text-gray-300 mx-auto mb-3"}),r.jsxs("p",{className:"text-gray-500",children:["Начните общение с ",J.name]})]}):te.messages.map((u,C)=>{const _=C===0||ee(u.timestamp)!==ee(te.messages[C-1].timestamp);return r.jsxs("div",{children:[_&&r.jsx("div",{className:"text-center my-4",children:r.jsx("span",{className:"bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full",children:ee(u.timestamp)})}),r.jsx("div",{className:`flex ${u.senderId===n.id?"justify-end":"justify-start"}`,children:r.jsxs("div",{className:`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${u.senderId===n.id?"bg-blue-500 text-white":"bg-gray-100 text-gray-900"}`,children:[u.content&&r.jsx("p",{className:"text-sm break-words",children:u.content}),u.file&&r.jsxs("div",{className:"mt-2 p-2 bg-black bg-opacity-10 rounded",children:[r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx(Rl,{className:"h-3 w-3"}),r.jsx("span",{className:"text-xs truncate",children:u.file.name})]}),r.jsx("div",{className:"text-xs opacity-75 mt-1",children:T(u.file.size)}),r.jsxs("div",{className:"flex space-x-1 mt-2",children:[u.file.type.startsWith("image/")&&r.jsx("button",{onClick:()=>{const k=document.createElement("div");k.className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4",k.innerHTML=`
                                          <div class="relative max-w-4xl max-h-full">
                                            <img src="${u.file.url}" alt="${u.file.name}" class="max-w-full max-h-full object-contain rounded-lg">
                                            <button class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75">
                                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                              </svg>
                                            </button>
                                          </div>
                                        `,k.onclick=z=>{(z.target===k||z.target.closest("button"))&&document.body.removeChild(k)},document.body.appendChild(k)},className:"text-xs bg-white bg-opacity-20 px-2 py-1 rounded hover:bg-opacity-30",children:r.jsx(mn,{className:"h-3 w-3"})}),r.jsx("button",{onClick:()=>{const k=document.createElement("a");k.href=u.file.url,k.download=u.file.name,document.body.appendChild(k),k.click(),document.body.removeChild(k)},className:"text-xs bg-white bg-opacity-20 px-2 py-1 rounded hover:bg-opacity-30",children:r.jsx(Po,{className:"h-3 w-3"})})]})]}),r.jsx("div",{className:"text-xs opacity-75 mt-1",children:V(u.timestamp)})]})})]},u.id)}),r.jsx("div",{ref:y})]}),r.jsxs("div",{className:"border-t border-gray-200 p-4 bg-white",children:[p&&r.jsxs("div",{className:"mb-3 p-3 bg-gray-50 rounded-lg flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx(Rl,{className:"h-4 w-4 text-gray-500"}),r.jsx("span",{className:"text-sm text-gray-700 truncate",children:p.name}),r.jsxs("span",{className:"text-xs text-gray-500",children:["(",T(p.size),")"]})]}),r.jsx("button",{onClick:()=>g(null),className:"text-gray-400 hover:text-red-500",children:r.jsx(je,{className:"h-4 w-4"})})]}),r.jsxs("div",{className:"flex items-end space-x-2",children:[r.jsx("input",{type:"file",ref:m,onChange:M,className:"hidden",accept:"image/*,video/*,.pdf,.doc,.docx,.txt"}),r.jsx("button",{onClick:()=>{var u;return(u=m.current)==null?void 0:u.click()},className:"p-2 text-gray-400 hover:text-gray-600 transition-colors",children:r.jsx(Rl,{className:"h-5 w-5"})}),r.jsx("div",{className:"flex-1",children:r.jsx("textarea",{value:c,onChange:u=>f(u.target.value),onKeyPress:u=>{u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),E())},placeholder:"Введите сообщение...",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none",rows:1})}),r.jsx(A,{onClick:E,disabled:!c.trim()&&!p,size:"sm",children:r.jsx(hp,{className:"h-4 w-4"})})]})]})]}):r.jsx("div",{className:"flex-1 flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx(Re,{className:"h-16 w-16 text-gray-300 mx-auto mb-4"}),r.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Выберите чат"}),r.jsx("p",{className:"text-gray-600 mb-4",children:"Выберите существующий чат или создайте новый"}),r.jsxs(A,{onClick:()=>N(!0),children:[r.jsx(Je,{className:"h-4 w-4 mr-2"}),"Начать новый чат"]})]})})})]}),r.jsx(mh,{isOpen:j,onClose:()=>N(!1),onStartChat:v})]}):null}function ph(){const{isAuthenticated:e,loading:t}=Me(),[n,s]=L.useState("dashboard"),[l,a]=L.useState(null),[o,i]=L.useState(null);if(L.useEffect(()=>{const g=w=>{i(w.detail.userId),s("messenger")};window.addEventListener("openMessengerChat",g);const h=localStorage.getItem("messenger_open_chat");return h&&(i(h),localStorage.removeItem("messenger_open_chat")),()=>{window.removeEventListener("openMessengerChat",g)}},[]),t)return r.jsx("div",{className:"h-screen bg-gray-50 flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),r.jsx("p",{className:"text-gray-600",children:"Загрузка..."})]})});if(!e)return r.jsx(Yp,{});const c=g=>{a(g),s("project-detail")},f=()=>{a(null),s("projects")},p=()=>{switch(n){case"dashboard":return r.jsx(qi,{});case"projects":return r.jsx(Zi,{onProjectSelect:c});case"project-detail":return l?r.jsx(dh,{projectId:l,onBack:f}):r.jsx(Zi,{onProjectSelect:c});case"reports":return r.jsx(ch,{});case"add-employee":return r.jsx(th,{});case"employees":return r.jsx(rh,{});case"salary":return r.jsx(lh,{});case"calendar":return r.jsx(ah,{});case"messenger":return r.jsx(fh,{targetUserId:o,onClearTarget:()=>i(null)});case"script":return r.jsx(oh,{});default:return r.jsx(qi,{})}};return r.jsxs("div",{className:"h-screen bg-gray-50 flex flex-col md:flex-row overflow-hidden",children:[r.jsx(qp,{activeTab:n,onTabChange:s}),r.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden min-w-0 md:ml-0",children:[r.jsx(Zp,{}),r.jsx("main",{className:"flex-1 overflow-auto",children:p()})]})]})}function hh(){return r.jsx(sp,{children:r.jsx(ph,{})})}md(document.getElementById("root")).render(r.jsx(L.StrictMode,{children:r.jsx(hh,{})}));
