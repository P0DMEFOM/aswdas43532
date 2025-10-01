(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();var it=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Uf(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var s=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,s.get?s:{enumerable:!0,get:function(){return e[n]}})}),r}var zu={exports:{}},$i={},Uu={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ps=Symbol.for("react.element"),Df=Symbol.for("react.portal"),Ff=Symbol.for("react.fragment"),Bf=Symbol.for("react.strict_mode"),Wf=Symbol.for("react.profiler"),Vf=Symbol.for("react.provider"),Hf=Symbol.for("react.context"),Gf=Symbol.for("react.forward_ref"),qf=Symbol.for("react.suspense"),Kf=Symbol.for("react.memo"),Jf=Symbol.for("react.lazy"),nc=Symbol.iterator;function Qf(e){return e===null||typeof e!="object"?null:(e=nc&&e[nc]||e["@@iterator"],typeof e=="function"?e:null)}var Du={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fu=Object.assign,Bu={};function gn(e,t,r){this.props=e,this.context=t,this.refs=Bu,this.updater=r||Du}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wu(){}Wu.prototype=gn.prototype;function Xl(e,t,r){this.props=e,this.context=t,this.refs=Bu,this.updater=r||Du}var Yl=Xl.prototype=new Wu;Yl.constructor=Xl;Fu(Yl,gn.prototype);Yl.isPureReactComponent=!0;var sc=Array.isArray,Vu=Object.prototype.hasOwnProperty,Zl={current:null},Hu={key:!0,ref:!0,__self:!0,__source:!0};function Gu(e,t,r){var n,s={},a=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)Vu.call(t,n)&&!Hu.hasOwnProperty(n)&&(s[n]=t[n]);var o=arguments.length-2;if(o===1)s.children=r;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)s[n]===void 0&&(s[n]=o[n]);return{$$typeof:ps,type:e,key:a,ref:l,props:s,_owner:Zl.current}}function Xf(e,t){return{$$typeof:ps,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function eo(e){return typeof e=="object"&&e!==null&&e.$$typeof===ps}function Yf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var ic=/\/+/g;function oa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yf(""+e.key):t.toString(36)}function Js(e,t,r,n,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ps:case Df:l=!0}}if(l)return l=e,s=s(l),e=n===""?"."+oa(l,0):n,sc(s)?(r="",e!=null&&(r=e.replace(ic,"$&/")+"/"),Js(s,t,r,"",function(u){return u})):s!=null&&(eo(s)&&(s=Xf(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(ic,"$&/")+"/")+e)),t.push(s)),1;if(l=0,n=n===""?".":n+":",sc(e))for(var o=0;o<e.length;o++){a=e[o];var c=n+oa(a,o);l+=Js(a,t,r,c,s)}else if(c=Qf(e),typeof c=="function")for(e=c.call(e),o=0;!(a=e.next()).done;)a=a.value,c=n+oa(a,o++),l+=Js(a,t,r,c,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ss(e,t,r){if(e==null)return e;var n=[],s=0;return Js(e,n,"","",function(a){return t.call(r,a,s++)}),n}function Zf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},Qs={transition:null},em={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Qs,ReactCurrentOwner:Zl};function qu(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:Ss,forEach:function(e,t,r){Ss(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Ss(e,function(){t++}),t},toArray:function(e){return Ss(e,function(t){return t})||[]},only:function(e){if(!eo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=gn;J.Fragment=Ff;J.Profiler=Wf;J.PureComponent=Xl;J.StrictMode=Bf;J.Suspense=qf;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=em;J.act=qu;J.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Fu({},e.props),s=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=Zl.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)Vu.call(t,c)&&!Hu.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];n.children=o}return{$$typeof:ps,type:e.type,key:s,ref:a,props:n,_owner:l}};J.createContext=function(e){return e={$$typeof:Hf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vf,_context:e},e.Consumer=e};J.createElement=Gu;J.createFactory=function(e){var t=Gu.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:Gf,render:e}};J.isValidElement=eo;J.lazy=function(e){return{$$typeof:Jf,_payload:{_status:-1,_result:e},_init:Zf}};J.memo=function(e,t){return{$$typeof:Kf,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=Qs.transition;Qs.transition={};try{e()}finally{Qs.transition=t}};J.unstable_act=qu;J.useCallback=function(e,t){return ze.current.useCallback(e,t)};J.useContext=function(e){return ze.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};J.useEffect=function(e,t){return ze.current.useEffect(e,t)};J.useId=function(){return ze.current.useId()};J.useImperativeHandle=function(e,t,r){return ze.current.useImperativeHandle(e,t,r)};J.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return ze.current.useMemo(e,t)};J.useReducer=function(e,t,r){return ze.current.useReducer(e,t,r)};J.useRef=function(e){return ze.current.useRef(e)};J.useState=function(e){return ze.current.useState(e)};J.useSyncExternalStore=function(e,t,r){return ze.current.useSyncExternalStore(e,t,r)};J.useTransition=function(){return ze.current.useTransition()};J.version="18.3.1";Uu.exports=J;var I=Uu.exports;const Va=zf(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm=I,rm=Symbol.for("react.element"),nm=Symbol.for("react.fragment"),sm=Object.prototype.hasOwnProperty,im=tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,am={key:!0,ref:!0,__self:!0,__source:!0};function Ku(e,t,r){var n,s={},a=null,l=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)sm.call(t,n)&&!am.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:rm,type:e,key:a,ref:l,props:s,_owner:im.current}}$i.Fragment=nm;$i.jsx=Ku;$i.jsxs=Ku;zu.exports=$i;var i=zu.exports,Ju={exports:{}},Ye={},Qu={exports:{}},Xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(m,N){var S=m.length;m.push(N);e:for(;0<S;){var b=S-1>>>1,P=m[b];if(0<s(P,N))m[b]=N,m[S]=P,S=b;else break e}}function r(m){return m.length===0?null:m[0]}function n(m){if(m.length===0)return null;var N=m[0],S=m.pop();if(S!==N){m[0]=S;e:for(var b=0,P=m.length,L=P>>>1;b<L;){var B=2*(b+1)-1,W=m[B],ae=B+1,le=m[ae];if(0>s(W,S))ae<P&&0>s(le,W)?(m[b]=le,m[ae]=S,b=ae):(m[b]=W,m[B]=S,b=B);else if(ae<P&&0>s(le,S))m[b]=le,m[ae]=S,b=ae;else break e}}return N}function s(m,N){var S=m.sortIndex-N.sortIndex;return S!==0?S:m.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var c=[],u=[],d=1,h=null,f=3,x=!1,w=!1,j=!1,v=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(m){for(var N=r(u);N!==null;){if(N.callback===null)n(u);else if(N.startTime<=m)n(u),N.sortIndex=N.expirationTime,t(c,N);else break;N=r(u)}}function k(m){if(j=!1,y(m),!w)if(r(c)!==null)w=!0,D(_);else{var N=r(u);N!==null&&U(k,N.startTime-m)}}function _(m,N){w=!1,j&&(j=!1,p(C),C=-1),x=!0;var S=f;try{for(y(N),h=r(c);h!==null&&(!(h.expirationTime>N)||m&&!he());){var b=h.callback;if(typeof b=="function"){h.callback=null,f=h.priorityLevel;var P=b(h.expirationTime<=N);N=e.unstable_now(),typeof P=="function"?h.callback=P:h===r(c)&&n(c),y(N)}else n(c);h=r(c)}if(h!==null)var L=!0;else{var B=r(u);B!==null&&U(k,B.startTime-N),L=!1}return L}finally{h=null,f=S,x=!1}}var E=!1,O=null,C=-1,G=5,V=-1;function he(){return!(e.unstable_now()-V<G)}function pe(){if(O!==null){var m=e.unstable_now();V=m;var N=!0;try{N=O(!0,m)}finally{N?we():(E=!1,O=null)}}else E=!1}var we;if(typeof g=="function")we=function(){g(pe)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,A=R.port2;R.port1.onmessage=pe,we=function(){A.postMessage(null)}}else we=function(){v(pe,0)};function D(m){O=m,E||(E=!0,we())}function U(m,N){C=v(function(){m(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(m){m.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,D(_))},e.unstable_forceFrameRate=function(m){0>m||125<m?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<m?Math.floor(1e3/m):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(m){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var S=f;f=N;try{return m()}finally{f=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(m,N){switch(m){case 1:case 2:case 3:case 4:case 5:break;default:m=3}var S=f;f=m;try{return N()}finally{f=S}},e.unstable_scheduleCallback=function(m,N,S){var b=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?b+S:b):S=b,m){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=S+P,m={id:d++,callback:N,priorityLevel:m,startTime:S,expirationTime:P,sortIndex:-1},S>b?(m.sortIndex=S,t(u,m),r(c)===null&&m===r(u)&&(j?(p(C),C=-1):j=!0,U(k,S-b))):(m.sortIndex=P,t(c,m),w||x||(w=!0,D(_))),m},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(m){var N=f;return function(){var S=f;f=N;try{return m.apply(this,arguments)}finally{f=S}}}})(Xu);Qu.exports=Xu;var lm=Qu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om=I,Xe=lm;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yu=new Set,Xn={};function Tr(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(Xn[e]=t,e=0;e<t.length;e++)Yu.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ha=Object.prototype.hasOwnProperty,cm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ac={},lc={};function um(e){return Ha.call(lc,e)?!0:Ha.call(ac,e)?!1:cm.test(e)?lc[e]=!0:(ac[e]=!0,!1)}function dm(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hm(e,t,r,n){if(t===null||typeof t>"u"||dm(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,r,n,s,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pe[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var to=/[\-:]([a-z])/g;function ro(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(to,ro);Pe[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(to,ro);Pe[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(to,ro);Pe[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function no(e,t,r,n){var s=Pe.hasOwnProperty(t)?Pe[t]:null;(s!==null?s.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hm(t,r,s,n)&&(r=null),n||s===null?um(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,n=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var $t=om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cs=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),so=Symbol.for("react.strict_mode"),Ga=Symbol.for("react.profiler"),Zu=Symbol.for("react.provider"),ed=Symbol.for("react.context"),io=Symbol.for("react.forward_ref"),qa=Symbol.for("react.suspense"),Ka=Symbol.for("react.suspense_list"),ao=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),td=Symbol.for("react.offscreen"),oc=Symbol.iterator;function _n(e){return e===null||typeof e!="object"?null:(e=oc&&e[oc]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,ca;function An(e){if(ca===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ca=t&&t[1]||""}return`
`+ca+e}var ua=!1;function da(e,t){if(!e||ua)return"";ua=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),a=n.stack.split(`
`),l=s.length-1,o=a.length-1;1<=l&&0<=o&&s[l]!==a[o];)o--;for(;1<=l&&0<=o;l--,o--)if(s[l]!==a[o]){if(l!==1||o!==1)do if(l--,o--,0>o||s[l]!==a[o]){var c=`
`+s[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=o);break}}}finally{ua=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?An(e):""}function fm(e){switch(e.tag){case 5:return An(e.type);case 16:return An("Lazy");case 13:return An("Suspense");case 19:return An("SuspenseList");case 0:case 2:case 15:return e=da(e.type,!1),e;case 11:return e=da(e.type.render,!1),e;case 1:return e=da(e.type,!0),e;default:return""}}function Ja(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vr:return"Fragment";case Wr:return"Portal";case Ga:return"Profiler";case so:return"StrictMode";case qa:return"Suspense";case Ka:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ed:return(e.displayName||"Context")+".Consumer";case Zu:return(e._context.displayName||"Context")+".Provider";case io:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ao:return t=e.displayName||null,t!==null?t:Ja(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return Ja(e(t))}catch{}}return null}function mm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ja(t);case 8:return t===so?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function nr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pm(e){var t=rd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){n=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Es(e){e._valueTracker||(e._valueTracker=pm(e))}function nd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=rd(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qa(e,t){var r=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function cc(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=nr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function sd(e,t){t=t.checked,t!=null&&no(e,"checked",t,!1)}function Xa(e,t){sd(e,t);var r=nr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ya(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ya(e,t.type,nr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ya(e,t,r){(t!=="number"||oi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Ln=Array.isArray;function tn(e,t,r,n){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&n&&(e[r].defaultSelected=!0)}else{for(r=""+nr(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Za(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function dc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(T(92));if(Ln(r)){if(1<r.length)throw Error(T(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:nr(r)}}function id(e,t){var r=nr(t.value),n=nr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function hc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ad(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function el(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ad(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ps,ld=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ps=Ps||document.createElement("div"),Ps.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ps.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gm=["Webkit","ms","Moz","O"];Object.keys(Un).forEach(function(e){gm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Un[t]=Un[e]})});function od(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Un.hasOwnProperty(e)&&Un[e]?(""+t).trim():t+"px"}function cd(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,s=od(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,s):e[r]=s}}var xm=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tl(e,t){if(t){if(xm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function rl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nl=null;function lo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,rn=null,nn=null;function fc(e){if(e=ys(e)){if(typeof sl!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Bi(t),sl(e.stateNode,e.type,t))}}function ud(e){rn?nn?nn.push(e):nn=[e]:rn=e}function dd(){if(rn){var e=rn,t=nn;if(nn=rn=null,fc(e),t)for(e=0;e<t.length;e++)fc(t[e])}}function hd(e,t){return e(t)}function fd(){}var ha=!1;function md(e,t,r){if(ha)return e(t,r);ha=!0;try{return hd(e,t,r)}finally{ha=!1,(rn!==null||nn!==null)&&(fd(),dd())}}function Zn(e,t){var r=e.stateNode;if(r===null)return null;var n=Bi(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(T(231,t,typeof r));return r}var il=!1;if(It)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){il=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{il=!1}function ym(e,t,r,n,s,a,l,o,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(d){this.onError(d)}}var Dn=!1,ci=null,ui=!1,al=null,vm={onError:function(e){Dn=!0,ci=e}};function wm(e,t,r,n,s,a,l,o,c){Dn=!1,ci=null,ym.apply(vm,arguments)}function jm(e,t,r,n,s,a,l,o,c){if(wm.apply(this,arguments),Dn){if(Dn){var u=ci;Dn=!1,ci=null}else throw Error(T(198));ui||(ui=!0,al=u)}}function Or(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function pd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mc(e){if(Or(e)!==e)throw Error(T(188))}function bm(e){var t=e.alternate;if(!t){if(t=Or(e),t===null)throw Error(T(188));return t!==e?null:e}for(var r=e,n=t;;){var s=r.return;if(s===null)break;var a=s.alternate;if(a===null){if(n=s.return,n!==null){r=n;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===r)return mc(s),e;if(a===n)return mc(s),t;a=a.sibling}throw Error(T(188))}if(r.return!==n.return)r=s,n=a;else{for(var l=!1,o=s.child;o;){if(o===r){l=!0,r=s,n=a;break}if(o===n){l=!0,n=s,r=a;break}o=o.sibling}if(!l){for(o=a.child;o;){if(o===r){l=!0,r=a,n=s;break}if(o===n){l=!0,n=a,r=s;break}o=o.sibling}if(!l)throw Error(T(189))}}if(r.alternate!==n)throw Error(T(190))}if(r.tag!==3)throw Error(T(188));return r.stateNode.current===r?e:t}function gd(e){return e=bm(e),e!==null?xd(e):null}function xd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xd(e);if(t!==null)return t;e=e.sibling}return null}var yd=Xe.unstable_scheduleCallback,pc=Xe.unstable_cancelCallback,km=Xe.unstable_shouldYield,_m=Xe.unstable_requestPaint,fe=Xe.unstable_now,Nm=Xe.unstable_getCurrentPriorityLevel,oo=Xe.unstable_ImmediatePriority,vd=Xe.unstable_UserBlockingPriority,di=Xe.unstable_NormalPriority,Sm=Xe.unstable_LowPriority,wd=Xe.unstable_IdlePriority,zi=null,wt=null;function Cm(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(zi,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:Tm,Em=Math.log,Pm=Math.LN2;function Tm(e){return e>>>=0,e===0?32:31-(Em(e)/Pm|0)|0}var Ts=64,Os=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,s=e.suspendedLanes,a=e.pingedLanes,l=r&268435455;if(l!==0){var o=l&~s;o!==0?n=Mn(o):(a&=l,a!==0&&(n=Mn(a)))}else l=r&~s,l!==0?n=Mn(l):a!==0&&(n=Mn(a));if(n===0)return 0;if(t!==0&&t!==n&&!(t&s)&&(s=n&-n,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-mt(t),s=1<<r,n|=e[r],t&=~s;return n}function Om(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Im(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-mt(a),o=1<<l,c=s[l];c===-1?(!(o&r)||o&n)&&(s[l]=Om(o,t)):c<=t&&(e.expiredLanes|=o),a&=~o}}function ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jd(){var e=Ts;return Ts<<=1,!(Ts&4194240)&&(Ts=64),e}function fa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function gs(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=r}function Rm(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-mt(r),a=1<<s;t[s]=0,n[s]=-1,e[s]=-1,r&=~a}}function co(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-mt(r),s=1<<n;s&t|e[n]&t&&(e[n]|=t),r&=~s}}var ee=0;function bd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var kd,uo,_d,Nd,Sd,ol=!1,Is=[],Jt=null,Qt=null,Xt=null,es=new Map,ts=new Map,Vt=[],Am="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gc(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":es.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ts.delete(t.pointerId)}}function Sn(e,t,r,n,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[s]},t!==null&&(t=ys(t),t!==null&&uo(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Lm(e,t,r,n,s){switch(t){case"focusin":return Jt=Sn(Jt,e,t,r,n,s),!0;case"dragenter":return Qt=Sn(Qt,e,t,r,n,s),!0;case"mouseover":return Xt=Sn(Xt,e,t,r,n,s),!0;case"pointerover":var a=s.pointerId;return es.set(a,Sn(es.get(a)||null,e,t,r,n,s)),!0;case"gotpointercapture":return a=s.pointerId,ts.set(a,Sn(ts.get(a)||null,e,t,r,n,s)),!0}return!1}function Cd(e){var t=xr(e.target);if(t!==null){var r=Or(t);if(r!==null){if(t=r.tag,t===13){if(t=pd(r),t!==null){e.blockedOn=t,Sd(e.priority,function(){_d(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=cl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);nl=n,r.target.dispatchEvent(n),nl=null}else return t=ys(r),t!==null&&uo(t),e.blockedOn=r,!1;t.shift()}return!0}function xc(e,t,r){Xs(e)&&r.delete(t)}function Mm(){ol=!1,Jt!==null&&Xs(Jt)&&(Jt=null),Qt!==null&&Xs(Qt)&&(Qt=null),Xt!==null&&Xs(Xt)&&(Xt=null),es.forEach(xc),ts.forEach(xc)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,ol||(ol=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,Mm)))}function rs(e){function t(s){return Cn(s,e)}if(0<Is.length){Cn(Is[0],e);for(var r=1;r<Is.length;r++){var n=Is[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Jt!==null&&Cn(Jt,e),Qt!==null&&Cn(Qt,e),Xt!==null&&Cn(Xt,e),es.forEach(t),ts.forEach(t),r=0;r<Vt.length;r++)n=Vt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Vt.length&&(r=Vt[0],r.blockedOn===null);)Cd(r),r.blockedOn===null&&Vt.shift()}var sn=$t.ReactCurrentBatchConfig,fi=!0;function $m(e,t,r,n){var s=ee,a=sn.transition;sn.transition=null;try{ee=1,ho(e,t,r,n)}finally{ee=s,sn.transition=a}}function zm(e,t,r,n){var s=ee,a=sn.transition;sn.transition=null;try{ee=4,ho(e,t,r,n)}finally{ee=s,sn.transition=a}}function ho(e,t,r,n){if(fi){var s=cl(e,t,r,n);if(s===null)ka(e,t,n,mi,r),gc(e,n);else if(Lm(s,e,t,r,n))n.stopPropagation();else if(gc(e,n),t&4&&-1<Am.indexOf(e)){for(;s!==null;){var a=ys(s);if(a!==null&&kd(a),a=cl(e,t,r,n),a===null&&ka(e,t,n,mi,r),a===s)break;s=a}s!==null&&n.stopPropagation()}else ka(e,t,n,null,r)}}var mi=null;function cl(e,t,r,n){if(mi=null,e=lo(n),e=xr(e),e!==null)if(t=Or(e),t===null)e=null;else if(r=t.tag,r===13){if(e=pd(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return mi=e,null}function Ed(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nm()){case oo:return 1;case vd:return 4;case di:case Sm:return 16;case wd:return 536870912;default:return 16}default:return 16}}var qt=null,fo=null,Ys=null;function Pd(){if(Ys)return Ys;var e,t=fo,r=t.length,n,s="value"in qt?qt.value:qt.textContent,a=s.length;for(e=0;e<r&&t[e]===s[e];e++);var l=r-e;for(n=1;n<=l&&t[r-n]===s[a-n];n++);return Ys=s.slice(e,1<n?1-n:void 0)}function Zs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rs(){return!0}function yc(){return!1}function Ze(e){function t(r,n,s,a,l){this._reactName=r,this._targetInst=s,this.type=n,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Rs:yc,this.isPropagationStopped=yc,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Rs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Rs)},persist:function(){},isPersistent:Rs}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mo=Ze(xn),xs=ue({},xn,{view:0,detail:0}),Um=Ze(xs),ma,pa,En,Ui=ue({},xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(ma=e.screenX-En.screenX,pa=e.screenY-En.screenY):pa=ma=0,En=e),ma)},movementY:function(e){return"movementY"in e?e.movementY:pa}}),vc=Ze(Ui),Dm=ue({},Ui,{dataTransfer:0}),Fm=Ze(Dm),Bm=ue({},xs,{relatedTarget:0}),ga=Ze(Bm),Wm=ue({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vm=Ze(Wm),Hm=ue({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gm=Ze(Hm),qm=ue({},xn,{data:0}),wc=Ze(qm),Km={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qm[e])?!!t[e]:!1}function po(){return Xm}var Ym=ue({},xs,{key:function(e){if(e.key){var t=Km[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:po,charCode:function(e){return e.type==="keypress"?Zs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zm=Ze(Ym),ep=ue({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jc=Ze(ep),tp=ue({},xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:po}),rp=Ze(tp),np=ue({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),sp=Ze(np),ip=ue({},Ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ap=Ze(ip),lp=[9,13,27,32],go=It&&"CompositionEvent"in window,Fn=null;It&&"documentMode"in document&&(Fn=document.documentMode);var op=It&&"TextEvent"in window&&!Fn,Td=It&&(!go||Fn&&8<Fn&&11>=Fn),bc=" ",kc=!1;function Od(e,t){switch(e){case"keyup":return lp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hr=!1;function cp(e,t){switch(e){case"compositionend":return Id(t);case"keypress":return t.which!==32?null:(kc=!0,bc);case"textInput":return e=t.data,e===bc&&kc?null:e;default:return null}}function up(e,t){if(Hr)return e==="compositionend"||!go&&Od(e,t)?(e=Pd(),Ys=fo=qt=null,Hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Td&&t.locale!=="ko"?null:t.data;default:return null}}var dp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dp[e.type]:t==="textarea"}function Rd(e,t,r,n){ud(n),t=pi(t,"onChange"),0<t.length&&(r=new mo("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Bn=null,ns=null;function hp(e){Vd(e,0)}function Di(e){var t=Kr(e);if(nd(t))return e}function fp(e,t){if(e==="change")return t}var Ad=!1;if(It){var xa;if(It){var ya="oninput"in document;if(!ya){var Nc=document.createElement("div");Nc.setAttribute("oninput","return;"),ya=typeof Nc.oninput=="function"}xa=ya}else xa=!1;Ad=xa&&(!document.documentMode||9<document.documentMode)}function Sc(){Bn&&(Bn.detachEvent("onpropertychange",Ld),ns=Bn=null)}function Ld(e){if(e.propertyName==="value"&&Di(ns)){var t=[];Rd(t,ns,e,lo(e)),md(hp,t)}}function mp(e,t,r){e==="focusin"?(Sc(),Bn=t,ns=r,Bn.attachEvent("onpropertychange",Ld)):e==="focusout"&&Sc()}function pp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Di(ns)}function gp(e,t){if(e==="click")return Di(t)}function xp(e,t){if(e==="input"||e==="change")return Di(t)}function yp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:yp;function ss(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var s=r[n];if(!Ha.call(t,s)||!gt(e[s],t[s]))return!1}return!0}function Cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ec(e,t){var r=Cc(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Cc(r)}}function Md(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Md(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $d(){for(var e=window,t=oi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=oi(e.document)}return t}function xo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vp(e){var t=$d(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Md(r.ownerDocument.documentElement,r)){if(n!==null&&xo(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,a=Math.min(n.start,s);n=n.end===void 0?a:Math.min(n.end,s),!e.extend&&a>n&&(s=n,n=a,a=s),s=Ec(r,a);var l=Ec(r,n);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wp=It&&"documentMode"in document&&11>=document.documentMode,Gr=null,ul=null,Wn=null,dl=!1;function Pc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;dl||Gr==null||Gr!==oi(n)||(n=Gr,"selectionStart"in n&&xo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Wn&&ss(Wn,n)||(Wn=n,n=pi(ul,"onSelect"),0<n.length&&(t=new mo("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Gr)))}function As(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var qr={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionend:As("Transition","TransitionEnd")},va={},zd={};It&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function Fi(e){if(va[e])return va[e];if(!qr[e])return e;var t=qr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in zd)return va[e]=t[r];return e}var Ud=Fi("animationend"),Dd=Fi("animationiteration"),Fd=Fi("animationstart"),Bd=Fi("transitionend"),Wd=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(e,t){Wd.set(e,t),Tr(t,[e])}for(var wa=0;wa<Tc.length;wa++){var ja=Tc[wa],jp=ja.toLowerCase(),bp=ja[0].toUpperCase()+ja.slice(1);ir(jp,"on"+bp)}ir(Ud,"onAnimationEnd");ir(Dd,"onAnimationIteration");ir(Fd,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(Bd,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kp=new Set("cancel close invalid load scroll toggle".split(" ").concat($n));function Oc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,jm(n,t,void 0,e),e.currentTarget=null}function Vd(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],s=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var l=n.length-1;0<=l;l--){var o=n[l],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==a&&s.isPropagationStopped())break e;Oc(s,o,u),a=c}else for(l=0;l<n.length;l++){if(o=n[l],c=o.instance,u=o.currentTarget,o=o.listener,c!==a&&s.isPropagationStopped())break e;Oc(s,o,u),a=c}}}if(ui)throw e=al,ui=!1,al=null,e}function ne(e,t){var r=t[gl];r===void 0&&(r=t[gl]=new Set);var n=e+"__bubble";r.has(n)||(Hd(t,e,2,!1),r.add(n))}function ba(e,t,r){var n=0;t&&(n|=4),Hd(r,e,n,t)}var Ls="_reactListening"+Math.random().toString(36).slice(2);function is(e){if(!e[Ls]){e[Ls]=!0,Yu.forEach(function(r){r!=="selectionchange"&&(kp.has(r)||ba(r,!1,e),ba(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ls]||(t[Ls]=!0,ba("selectionchange",!1,t))}}function Hd(e,t,r,n){switch(Ed(t)){case 1:var s=$m;break;case 4:s=zm;break;default:s=ho}r=s.bind(null,t,r,e),s=void 0,!il||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function ka(e,t,r,n,s){var a=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var o=n.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(l===4)for(l=n.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;l=l.return}for(;o!==null;){if(l=xr(o),l===null)return;if(c=l.tag,c===5||c===6){n=a=l;continue e}o=o.parentNode}}n=n.return}md(function(){var u=a,d=lo(r),h=[];e:{var f=Wd.get(e);if(f!==void 0){var x=mo,w=e;switch(e){case"keypress":if(Zs(r)===0)break e;case"keydown":case"keyup":x=Zm;break;case"focusin":w="focus",x=ga;break;case"focusout":w="blur",x=ga;break;case"beforeblur":case"afterblur":x=ga;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Fm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=rp;break;case Ud:case Dd:case Fd:x=Vm;break;case Bd:x=sp;break;case"scroll":x=Um;break;case"wheel":x=ap;break;case"copy":case"cut":case"paste":x=Gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=jc}var j=(t&4)!==0,v=!j&&e==="scroll",p=j?f!==null?f+"Capture":null:f;j=[];for(var g=u,y;g!==null;){y=g;var k=y.stateNode;if(y.tag===5&&k!==null&&(y=k,p!==null&&(k=Zn(g,p),k!=null&&j.push(as(g,k,y)))),v)break;g=g.return}0<j.length&&(f=new x(f,w,null,r,d),h.push({event:f,listeners:j}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",f&&r!==nl&&(w=r.relatedTarget||r.fromElement)&&(xr(w)||w[Rt]))break e;if((x||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,x?(w=r.relatedTarget||r.toElement,x=u,w=w?xr(w):null,w!==null&&(v=Or(w),w!==v||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=u),x!==w)){if(j=vc,k="onMouseLeave",p="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(j=jc,k="onPointerLeave",p="onPointerEnter",g="pointer"),v=x==null?f:Kr(x),y=w==null?f:Kr(w),f=new j(k,g+"leave",x,r,d),f.target=v,f.relatedTarget=y,k=null,xr(d)===u&&(j=new j(p,g+"enter",w,r,d),j.target=y,j.relatedTarget=v,k=j),v=k,x&&w)t:{for(j=x,p=w,g=0,y=j;y;y=Ar(y))g++;for(y=0,k=p;k;k=Ar(k))y++;for(;0<g-y;)j=Ar(j),g--;for(;0<y-g;)p=Ar(p),y--;for(;g--;){if(j===p||p!==null&&j===p.alternate)break t;j=Ar(j),p=Ar(p)}j=null}else j=null;x!==null&&Ic(h,f,x,j,!1),w!==null&&v!==null&&Ic(h,v,w,j,!0)}}e:{if(f=u?Kr(u):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var _=fp;else if(_c(f))if(Ad)_=xp;else{_=pp;var E=mp}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(_=gp);if(_&&(_=_(e,u))){Rd(h,_,r,d);break e}E&&E(e,f,u),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&Ya(f,"number",f.value)}switch(E=u?Kr(u):window,e){case"focusin":(_c(E)||E.contentEditable==="true")&&(Gr=E,ul=u,Wn=null);break;case"focusout":Wn=ul=Gr=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,Pc(h,r,d);break;case"selectionchange":if(wp)break;case"keydown":case"keyup":Pc(h,r,d)}var O;if(go)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Hr?Od(e,r)&&(C="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(C="onCompositionStart");C&&(Td&&r.locale!=="ko"&&(Hr||C!=="onCompositionStart"?C==="onCompositionEnd"&&Hr&&(O=Pd()):(qt=d,fo="value"in qt?qt.value:qt.textContent,Hr=!0)),E=pi(u,C),0<E.length&&(C=new wc(C,e,null,r,d),h.push({event:C,listeners:E}),O?C.data=O:(O=Id(r),O!==null&&(C.data=O)))),(O=op?cp(e,r):up(e,r))&&(u=pi(u,"onBeforeInput"),0<u.length&&(d=new wc("onBeforeInput","beforeinput",null,r,d),h.push({event:d,listeners:u}),d.data=O))}Vd(h,t)})}function as(e,t,r){return{instance:e,listener:t,currentTarget:r}}function pi(e,t){for(var r=t+"Capture",n=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Zn(e,r),a!=null&&n.unshift(as(e,a,s)),a=Zn(e,t),a!=null&&n.push(as(e,a,s))),e=e.return}return n}function Ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ic(e,t,r,n,s){for(var a=t._reactName,l=[];r!==null&&r!==n;){var o=r,c=o.alternate,u=o.stateNode;if(c!==null&&c===n)break;o.tag===5&&u!==null&&(o=u,s?(c=Zn(r,a),c!=null&&l.unshift(as(r,c,o))):s||(c=Zn(r,a),c!=null&&l.push(as(r,c,o)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var _p=/\r\n?/g,Np=/\u0000|\uFFFD/g;function Rc(e){return(typeof e=="string"?e:""+e).replace(_p,`
`).replace(Np,"")}function Ms(e,t,r){if(t=Rc(t),Rc(e)!==t&&r)throw Error(T(425))}function gi(){}var hl=null,fl=null;function ml(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pl=typeof setTimeout=="function"?setTimeout:void 0,Sp=typeof clearTimeout=="function"?clearTimeout:void 0,Ac=typeof Promise=="function"?Promise:void 0,Cp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ac<"u"?function(e){return Ac.resolve(null).then(e).catch(Ep)}:pl;function Ep(e){setTimeout(function(){throw e})}function _a(e,t){var r=t,n=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(n===0){e.removeChild(s),rs(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=s}while(r);rs(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),vt="__reactFiber$"+yn,ls="__reactProps$"+yn,Rt="__reactContainer$"+yn,gl="__reactEvents$"+yn,Pp="__reactListeners$"+yn,Tp="__reactHandles$"+yn;function xr(e){var t=e[vt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Rt]||r[vt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Lc(e);e!==null;){if(r=e[vt])return r;e=Lc(e)}return t}e=r,r=e.parentNode}return null}function ys(e){return e=e[vt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Bi(e){return e[ls]||null}var xl=[],Jr=-1;function ar(e){return{current:e}}function se(e){0>Jr||(e.current=xl[Jr],xl[Jr]=null,Jr--)}function re(e,t){Jr++,xl[Jr]=e.current,e.current=t}var sr={},Ae=ar(sr),He=ar(!1),_r=sr;function cn(e,t){var r=e.type.contextTypes;if(!r)return sr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in r)s[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ge(e){return e=e.childContextTypes,e!=null}function xi(){se(He),se(Ae)}function Mc(e,t,r){if(Ae.current!==sr)throw Error(T(168));re(Ae,t),re(He,r)}function Gd(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var s in n)if(!(s in t))throw Error(T(108,mm(e)||"Unknown",s));return ue({},r,n)}function yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sr,_r=Ae.current,re(Ae,e),re(He,He.current),!0}function $c(e,t,r){var n=e.stateNode;if(!n)throw Error(T(169));r?(e=Gd(e,t,_r),n.__reactInternalMemoizedMergedChildContext=e,se(He),se(Ae),re(Ae,e)):se(He),re(He,r)}var Et=null,Wi=!1,Na=!1;function qd(e){Et===null?Et=[e]:Et.push(e)}function Op(e){Wi=!0,qd(e)}function lr(){if(!Na&&Et!==null){Na=!0;var e=0,t=ee;try{var r=Et;for(ee=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Et=null,Wi=!1}catch(s){throw Et!==null&&(Et=Et.slice(e+1)),yd(oo,lr),s}finally{ee=t,Na=!1}}return null}var Qr=[],Xr=0,vi=null,wi=0,et=[],tt=0,Nr=null,Pt=1,Tt="";function fr(e,t){Qr[Xr++]=wi,Qr[Xr++]=vi,vi=e,wi=t}function Kd(e,t,r){et[tt++]=Pt,et[tt++]=Tt,et[tt++]=Nr,Nr=e;var n=Pt;e=Tt;var s=32-mt(n)-1;n&=~(1<<s),r+=1;var a=32-mt(t)+s;if(30<a){var l=s-s%5;a=(n&(1<<l)-1).toString(32),n>>=l,s-=l,Pt=1<<32-mt(t)+s|r<<s|n,Tt=a+e}else Pt=1<<a|r<<s|n,Tt=e}function yo(e){e.return!==null&&(fr(e,1),Kd(e,1,0))}function vo(e){for(;e===vi;)vi=Qr[--Xr],Qr[Xr]=null,wi=Qr[--Xr],Qr[Xr]=null;for(;e===Nr;)Nr=et[--tt],et[tt]=null,Tt=et[--tt],et[tt]=null,Pt=et[--tt],et[tt]=null}var Qe=null,Je=null,ie=!1,ft=null;function Jd(e,t){var r=rt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function zc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Je=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Nr!==null?{id:Pt,overflow:Tt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=rt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Qe=e,Je=null,!0):!1;default:return!1}}function yl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vl(e){if(ie){var t=Je;if(t){var r=t;if(!zc(e,t)){if(yl(e))throw Error(T(418));t=Yt(r.nextSibling);var n=Qe;t&&zc(e,t)?Jd(n,r):(e.flags=e.flags&-4097|2,ie=!1,Qe=e)}}else{if(yl(e))throw Error(T(418));e.flags=e.flags&-4097|2,ie=!1,Qe=e}}}function Uc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function $s(e){if(e!==Qe)return!1;if(!ie)return Uc(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ml(e.type,e.memoizedProps)),t&&(t=Je)){if(yl(e))throw Qd(),Error(T(418));for(;t;)Jd(e,t),t=Yt(t.nextSibling)}if(Uc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Je=Yt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=Qe?Yt(e.stateNode.nextSibling):null;return!0}function Qd(){for(var e=Je;e;)e=Yt(e.nextSibling)}function un(){Je=Qe=null,ie=!1}function wo(e){ft===null?ft=[e]:ft.push(e)}var Ip=$t.ReactCurrentBatchConfig;function Pn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(T(309));var n=r.stateNode}if(!n)throw Error(T(147,e));var s=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var o=s.refs;l===null?delete o[a]:o[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(T(284));if(!r._owner)throw Error(T(290,e))}return e}function zs(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Dc(e){var t=e._init;return t(e._payload)}function Xd(e){function t(p,g){if(e){var y=p.deletions;y===null?(p.deletions=[g],p.flags|=16):y.push(g)}}function r(p,g){if(!e)return null;for(;g!==null;)t(p,g),g=g.sibling;return null}function n(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function s(p,g){return p=rr(p,g),p.index=0,p.sibling=null,p}function a(p,g,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<g?(p.flags|=2,g):y):(p.flags|=2,g)):(p.flags|=1048576,g)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,g,y,k){return g===null||g.tag!==6?(g=Ia(y,p.mode,k),g.return=p,g):(g=s(g,y),g.return=p,g)}function c(p,g,y,k){var _=y.type;return _===Vr?d(p,g,y.props.children,k,y.key):g!==null&&(g.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Bt&&Dc(_)===g.type)?(k=s(g,y.props),k.ref=Pn(p,g,y),k.return=p,k):(k=ai(y.type,y.key,y.props,null,p.mode,k),k.ref=Pn(p,g,y),k.return=p,k)}function u(p,g,y,k){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Ra(y,p.mode,k),g.return=p,g):(g=s(g,y.children||[]),g.return=p,g)}function d(p,g,y,k,_){return g===null||g.tag!==7?(g=jr(y,p.mode,k,_),g.return=p,g):(g=s(g,y),g.return=p,g)}function h(p,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ia(""+g,p.mode,y),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Cs:return y=ai(g.type,g.key,g.props,null,p.mode,y),y.ref=Pn(p,null,g),y.return=p,y;case Wr:return g=Ra(g,p.mode,y),g.return=p,g;case Bt:var k=g._init;return h(p,k(g._payload),y)}if(Ln(g)||_n(g))return g=jr(g,p.mode,y,null),g.return=p,g;zs(p,g)}return null}function f(p,g,y,k){var _=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return _!==null?null:o(p,g,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Cs:return y.key===_?c(p,g,y,k):null;case Wr:return y.key===_?u(p,g,y,k):null;case Bt:return _=y._init,f(p,g,_(y._payload),k)}if(Ln(y)||_n(y))return _!==null?null:d(p,g,y,k,null);zs(p,y)}return null}function x(p,g,y,k,_){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(y)||null,o(g,p,""+k,_);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Cs:return p=p.get(k.key===null?y:k.key)||null,c(g,p,k,_);case Wr:return p=p.get(k.key===null?y:k.key)||null,u(g,p,k,_);case Bt:var E=k._init;return x(p,g,y,E(k._payload),_)}if(Ln(k)||_n(k))return p=p.get(y)||null,d(g,p,k,_,null);zs(g,k)}return null}function w(p,g,y,k){for(var _=null,E=null,O=g,C=g=0,G=null;O!==null&&C<y.length;C++){O.index>C?(G=O,O=null):G=O.sibling;var V=f(p,O,y[C],k);if(V===null){O===null&&(O=G);break}e&&O&&V.alternate===null&&t(p,O),g=a(V,g,C),E===null?_=V:E.sibling=V,E=V,O=G}if(C===y.length)return r(p,O),ie&&fr(p,C),_;if(O===null){for(;C<y.length;C++)O=h(p,y[C],k),O!==null&&(g=a(O,g,C),E===null?_=O:E.sibling=O,E=O);return ie&&fr(p,C),_}for(O=n(p,O);C<y.length;C++)G=x(O,p,C,y[C],k),G!==null&&(e&&G.alternate!==null&&O.delete(G.key===null?C:G.key),g=a(G,g,C),E===null?_=G:E.sibling=G,E=G);return e&&O.forEach(function(he){return t(p,he)}),ie&&fr(p,C),_}function j(p,g,y,k){var _=_n(y);if(typeof _!="function")throw Error(T(150));if(y=_.call(y),y==null)throw Error(T(151));for(var E=_=null,O=g,C=g=0,G=null,V=y.next();O!==null&&!V.done;C++,V=y.next()){O.index>C?(G=O,O=null):G=O.sibling;var he=f(p,O,V.value,k);if(he===null){O===null&&(O=G);break}e&&O&&he.alternate===null&&t(p,O),g=a(he,g,C),E===null?_=he:E.sibling=he,E=he,O=G}if(V.done)return r(p,O),ie&&fr(p,C),_;if(O===null){for(;!V.done;C++,V=y.next())V=h(p,V.value,k),V!==null&&(g=a(V,g,C),E===null?_=V:E.sibling=V,E=V);return ie&&fr(p,C),_}for(O=n(p,O);!V.done;C++,V=y.next())V=x(O,p,C,V.value,k),V!==null&&(e&&V.alternate!==null&&O.delete(V.key===null?C:V.key),g=a(V,g,C),E===null?_=V:E.sibling=V,E=V);return e&&O.forEach(function(pe){return t(p,pe)}),ie&&fr(p,C),_}function v(p,g,y,k){if(typeof y=="object"&&y!==null&&y.type===Vr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Cs:e:{for(var _=y.key,E=g;E!==null;){if(E.key===_){if(_=y.type,_===Vr){if(E.tag===7){r(p,E.sibling),g=s(E,y.props.children),g.return=p,p=g;break e}}else if(E.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Bt&&Dc(_)===E.type){r(p,E.sibling),g=s(E,y.props),g.ref=Pn(p,E,y),g.return=p,p=g;break e}r(p,E);break}else t(p,E);E=E.sibling}y.type===Vr?(g=jr(y.props.children,p.mode,k,y.key),g.return=p,p=g):(k=ai(y.type,y.key,y.props,null,p.mode,k),k.ref=Pn(p,g,y),k.return=p,p=k)}return l(p);case Wr:e:{for(E=y.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){r(p,g.sibling),g=s(g,y.children||[]),g.return=p,p=g;break e}else{r(p,g);break}else t(p,g);g=g.sibling}g=Ra(y,p.mode,k),g.return=p,p=g}return l(p);case Bt:return E=y._init,v(p,g,E(y._payload),k)}if(Ln(y))return w(p,g,y,k);if(_n(y))return j(p,g,y,k);zs(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(r(p,g.sibling),g=s(g,y),g.return=p,p=g):(r(p,g),g=Ia(y,p.mode,k),g.return=p,p=g),l(p)):r(p,g)}return v}var dn=Xd(!0),Yd=Xd(!1),ji=ar(null),bi=null,Yr=null,jo=null;function bo(){jo=Yr=bi=null}function ko(e){var t=ji.current;se(ji),e._currentValue=t}function wl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function an(e,t){bi=e,jo=Yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(jo!==e)if(e={context:e,memoizedValue:t,next:null},Yr===null){if(bi===null)throw Error(T(308));Yr=e,bi.dependencies={lanes:0,firstContext:e}}else Yr=Yr.next=e;return t}var yr=null;function _o(e){yr===null?yr=[e]:yr.push(e)}function Zd(e,t,r,n){var s=t.interleaved;return s===null?(r.next=r,_o(t)):(r.next=s.next,s.next=r),t.interleaved=r,At(e,n)}function At(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Wt=!1;function No(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,X&2){var s=n.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),n.pending=t,At(e,r)}return s=n.interleaved,s===null?(t.next=t,_o(n)):(t.next=s.next,s.next=t),n.interleaved=t,At(e,r)}function ei(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,co(e,r)}}function Fc(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var s=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?s=a=l:a=a.next=l,r=r.next}while(r!==null);a===null?s=a=t:a=a.next=t}else s=a=t;r={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ki(e,t,r,n){var s=e.updateQueue;Wt=!1;var a=s.firstBaseUpdate,l=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var c=o,u=c.next;c.next=null,l===null?a=u:l.next=u,l=c;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==l&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=c))}if(a!==null){var h=s.baseState;l=0,d=u=c=null,o=a;do{var f=o.lane,x=o.eventTime;if((n&f)===f){d!==null&&(d=d.next={eventTime:x,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,j=o;switch(f=t,x=r,j.tag){case 1:if(w=j.payload,typeof w=="function"){h=w.call(x,h,f);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=j.payload,f=typeof w=="function"?w.call(x,h,f):w,f==null)break e;h=ue({},h,f);break e;case 2:Wt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[o]:f.push(o))}else x={eventTime:x,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=x,c=h):d=d.next=x,l|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;f=o,o=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(d===null&&(c=h),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=d,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);Cr|=l,e.lanes=l,e.memoizedState=h}}function Bc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],s=n.callback;if(s!==null){if(n.callback=null,n=r,typeof s!="function")throw Error(T(191,s));s.call(n)}}}var vs={},jt=ar(vs),os=ar(vs),cs=ar(vs);function vr(e){if(e===vs)throw Error(T(174));return e}function So(e,t){switch(re(cs,t),re(os,e),re(jt,vs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:el(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=el(t,e)}se(jt),re(jt,t)}function hn(){se(jt),se(os),se(cs)}function th(e){vr(cs.current);var t=vr(jt.current),r=el(t,e.type);t!==r&&(re(os,e),re(jt,r))}function Co(e){os.current===e&&(se(jt),se(os))}var oe=ar(0);function _i(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sa=[];function Eo(){for(var e=0;e<Sa.length;e++)Sa[e]._workInProgressVersionPrimary=null;Sa.length=0}var ti=$t.ReactCurrentDispatcher,Ca=$t.ReactCurrentBatchConfig,Sr=0,ce=null,ye=null,be=null,Ni=!1,Vn=!1,us=0,Rp=0;function Te(){throw Error(T(321))}function Po(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!gt(e[r],t[r]))return!1;return!0}function To(e,t,r,n,s,a){if(Sr=a,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ti.current=e===null||e.memoizedState===null?$p:zp,e=r(n,s),Vn){a=0;do{if(Vn=!1,us=0,25<=a)throw Error(T(301));a+=1,be=ye=null,t.updateQueue=null,ti.current=Up,e=r(n,s)}while(Vn)}if(ti.current=Si,t=ye!==null&&ye.next!==null,Sr=0,be=ye=ce=null,Ni=!1,t)throw Error(T(300));return e}function Oo(){var e=us!==0;return us=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ce.memoizedState=be=e:be=be.next=e,be}function lt(){if(ye===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=be===null?ce.memoizedState:be.next;if(t!==null)be=t,ye=e;else{if(e===null)throw Error(T(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},be===null?ce.memoizedState=be=e:be=be.next=e}return be}function ds(e,t){return typeof t=="function"?t(e):t}function Ea(e){var t=lt(),r=t.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=e;var n=ye,s=n.baseQueue,a=r.pending;if(a!==null){if(s!==null){var l=s.next;s.next=a.next,a.next=l}n.baseQueue=s=a,r.pending=null}if(s!==null){a=s.next,n=n.baseState;var o=l=null,c=null,u=a;do{var d=u.lane;if((Sr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=h,l=n):c=c.next=h,ce.lanes|=d,Cr|=d}u=u.next}while(u!==null&&u!==a);c===null?l=n:c.next=o,gt(n,t.memoizedState)||(We=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){s=e;do a=s.lane,ce.lanes|=a,Cr|=a,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Pa(e){var t=lt(),r=t.queue;if(r===null)throw Error(T(311));r.lastRenderedReducer=e;var n=r.dispatch,s=r.pending,a=t.memoizedState;if(s!==null){r.pending=null;var l=s=s.next;do a=e(a,l.action),l=l.next;while(l!==s);gt(a,t.memoizedState)||(We=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function rh(){}function nh(e,t){var r=ce,n=lt(),s=t(),a=!gt(n.memoizedState,s);if(a&&(n.memoizedState=s,We=!0),n=n.queue,Io(ah.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||be!==null&&be.memoizedState.tag&1){if(r.flags|=2048,hs(9,ih.bind(null,r,n,s,t),void 0,null),Ne===null)throw Error(T(349));Sr&30||sh(r,t,s)}return s}function sh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ih(e,t,r,n){t.value=r,t.getSnapshot=n,lh(t)&&oh(e)}function ah(e,t,r){return r(function(){lh(t)&&oh(e)})}function lh(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!gt(e,r)}catch{return!0}}function oh(e){var t=At(e,1);t!==null&&pt(t,e,1,-1)}function Wc(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:e},t.queue=e,e=e.dispatch=Mp.bind(null,ce,e),[t.memoizedState,e]}function hs(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function ch(){return lt().memoizedState}function ri(e,t,r,n){var s=yt();ce.flags|=e,s.memoizedState=hs(1|t,r,void 0,n===void 0?null:n)}function Vi(e,t,r,n){var s=lt();n=n===void 0?null:n;var a=void 0;if(ye!==null){var l=ye.memoizedState;if(a=l.destroy,n!==null&&Po(n,l.deps)){s.memoizedState=hs(t,r,a,n);return}}ce.flags|=e,s.memoizedState=hs(1|t,r,a,n)}function Vc(e,t){return ri(8390656,8,e,t)}function Io(e,t){return Vi(2048,8,e,t)}function uh(e,t){return Vi(4,2,e,t)}function dh(e,t){return Vi(4,4,e,t)}function hh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fh(e,t,r){return r=r!=null?r.concat([e]):null,Vi(4,4,hh.bind(null,t,e),r)}function Ro(){}function mh(e,t){var r=lt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Po(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function ph(e,t){var r=lt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Po(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function gh(e,t,r){return Sr&21?(gt(r,t)||(r=jd(),ce.lanes|=r,Cr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=r)}function Ap(e,t){var r=ee;ee=r!==0&&4>r?r:4,e(!0);var n=Ca.transition;Ca.transition={};try{e(!1),t()}finally{ee=r,Ca.transition=n}}function xh(){return lt().memoizedState}function Lp(e,t,r){var n=tr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},yh(e))vh(t,r);else if(r=Zd(e,t,r,n),r!==null){var s=$e();pt(r,e,n,s),wh(r,t,n)}}function Mp(e,t,r){var n=tr(e),s={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(yh(e))vh(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,o=a(l,r);if(s.hasEagerState=!0,s.eagerState=o,gt(o,l)){var c=t.interleaved;c===null?(s.next=s,_o(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}r=Zd(e,t,s,n),r!==null&&(s=$e(),pt(r,e,n,s),wh(r,t,n))}}function yh(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function vh(e,t){Vn=Ni=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function wh(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,co(e,r)}}var Si={readContext:at,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},$p={readContext:at,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Vc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ri(4194308,4,hh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return ri(4,2,e,t)},useMemo:function(e,t){var r=yt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=yt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Lp.bind(null,ce,e),[n.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:Wc,useDebugValue:Ro,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=Wc(!1),t=e[0];return e=Ap.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ce,s=yt();if(ie){if(r===void 0)throw Error(T(407));r=r()}else{if(r=t(),Ne===null)throw Error(T(349));Sr&30||sh(n,t,r)}s.memoizedState=r;var a={value:r,getSnapshot:t};return s.queue=a,Vc(ah.bind(null,n,a,e),[e]),n.flags|=2048,hs(9,ih.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=yt(),t=Ne.identifierPrefix;if(ie){var r=Tt,n=Pt;r=(n&~(1<<32-mt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=us++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Rp++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zp={readContext:at,useCallback:mh,useContext:at,useEffect:Io,useImperativeHandle:fh,useInsertionEffect:uh,useLayoutEffect:dh,useMemo:ph,useReducer:Ea,useRef:ch,useState:function(){return Ea(ds)},useDebugValue:Ro,useDeferredValue:function(e){var t=lt();return gh(t,ye.memoizedState,e)},useTransition:function(){var e=Ea(ds)[0],t=lt().memoizedState;return[e,t]},useMutableSource:rh,useSyncExternalStore:nh,useId:xh,unstable_isNewReconciler:!1},Up={readContext:at,useCallback:mh,useContext:at,useEffect:Io,useImperativeHandle:fh,useInsertionEffect:uh,useLayoutEffect:dh,useMemo:ph,useReducer:Pa,useRef:ch,useState:function(){return Pa(ds)},useDebugValue:Ro,useDeferredValue:function(e){var t=lt();return ye===null?t.memoizedState=e:gh(t,ye.memoizedState,e)},useTransition:function(){var e=Pa(ds)[0],t=lt().memoizedState;return[e,t]},useMutableSource:rh,useSyncExternalStore:nh,useId:xh,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function jl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ue({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Hi={isMounted:function(e){return(e=e._reactInternals)?Or(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=$e(),s=tr(e),a=Ot(n,s);a.payload=t,r!=null&&(a.callback=r),t=Zt(e,a,s),t!==null&&(pt(t,e,s,n),ei(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=$e(),s=tr(e),a=Ot(n,s);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Zt(e,a,s),t!==null&&(pt(t,e,s,n),ei(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=$e(),n=tr(e),s=Ot(r,n);s.tag=2,t!=null&&(s.callback=t),t=Zt(e,s,n),t!==null&&(pt(t,e,n,r),ei(t,e,n))}};function Hc(e,t,r,n,s,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,l):t.prototype&&t.prototype.isPureReactComponent?!ss(r,n)||!ss(s,a):!0}function jh(e,t,r){var n=!1,s=sr,a=t.contextType;return typeof a=="object"&&a!==null?a=at(a):(s=Ge(t)?_r:Ae.current,n=t.contextTypes,a=(n=n!=null)?cn(e,s):sr),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hi,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function Gc(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Hi.enqueueReplaceState(t,t.state,null)}function bl(e,t,r,n){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},No(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=at(a):(a=Ge(t)?_r:Ae.current,s.context=cn(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(jl(e,t,a,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Hi.enqueueReplaceState(s,s.state,null),ki(e,r,s,n),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var r="",n=t;do r+=fm(n),n=n.return;while(n);var s=r}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function Ta(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function kl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Dp=typeof WeakMap=="function"?WeakMap:Map;function bh(e,t,r){r=Ot(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ei||(Ei=!0,Rl=n),kl(e,t)},r}function kh(e,t,r){r=Ot(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var s=t.value;r.payload=function(){return n(s)},r.callback=function(){kl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){kl(e,t),typeof n!="function"&&(er===null?er=new Set([this]):er.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function qc(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Dp;var s=new Set;n.set(t,s)}else s=n.get(t),s===void 0&&(s=new Set,n.set(t,s));s.has(r)||(s.add(r),e=eg.bind(null,e,t,r),t.then(e,e))}function Kc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jc(e,t,r,n,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ot(-1,1),t.tag=2,Zt(r,t,1))),r.lanes|=1),e)}var Fp=$t.ReactCurrentOwner,We=!1;function Me(e,t,r,n){t.child=e===null?Yd(t,null,r,n):dn(t,e.child,r,n)}function Qc(e,t,r,n,s){r=r.render;var a=t.ref;return an(t,s),n=To(e,t,r,n,a,s),r=Oo(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Lt(e,t,s)):(ie&&r&&yo(t),t.flags|=1,Me(e,t,n,s),t.child)}function Xc(e,t,r,n,s){if(e===null){var a=r.type;return typeof a=="function"&&!Fo(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,_h(e,t,a,n,s)):(e=ai(r.type,null,n,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var l=a.memoizedProps;if(r=r.compare,r=r!==null?r:ss,r(l,n)&&e.ref===t.ref)return Lt(e,t,s)}return t.flags|=1,e=rr(a,n),e.ref=t.ref,e.return=t,t.child=e}function _h(e,t,r,n,s){if(e!==null){var a=e.memoizedProps;if(ss(a,n)&&e.ref===t.ref)if(We=!1,t.pendingProps=n=a,(e.lanes&s)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,Lt(e,t,s)}return _l(e,t,r,n,s)}function Nh(e,t,r){var n=t.pendingProps,s=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(en,Ke),Ke|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(en,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,re(en,Ke),Ke|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,re(en,Ke),Ke|=n;return Me(e,t,s,r),t.child}function Sh(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function _l(e,t,r,n,s){var a=Ge(r)?_r:Ae.current;return a=cn(t,a),an(t,s),r=To(e,t,r,n,a,s),n=Oo(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Lt(e,t,s)):(ie&&n&&yo(t),t.flags|=1,Me(e,t,r,s),t.child)}function Yc(e,t,r,n,s){if(Ge(r)){var a=!0;yi(t)}else a=!1;if(an(t,s),t.stateNode===null)ni(e,t),jh(t,r,n),bl(t,r,n,s),n=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var c=l.context,u=r.contextType;typeof u=="object"&&u!==null?u=at(u):(u=Ge(r)?_r:Ae.current,u=cn(t,u));var d=r.getDerivedStateFromProps,h=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==n||c!==u)&&Gc(t,l,n,u),Wt=!1;var f=t.memoizedState;l.state=f,ki(t,n,l,s),c=t.memoizedState,o!==n||f!==c||He.current||Wt?(typeof d=="function"&&(jl(t,r,d,n),c=t.memoizedState),(o=Wt||Hc(t,r,o,n,f,c,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),l.props=n,l.state=c,l.context=u,n=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,eh(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:ut(t.type,o),l.props=u,h=t.pendingProps,f=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=at(c):(c=Ge(r)?_r:Ae.current,c=cn(t,c));var x=r.getDerivedStateFromProps;(d=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==h||f!==c)&&Gc(t,l,n,c),Wt=!1,f=t.memoizedState,l.state=f,ki(t,n,l,s);var w=t.memoizedState;o!==h||f!==w||He.current||Wt?(typeof x=="function"&&(jl(t,r,x,n),w=t.memoizedState),(u=Wt||Hc(t,r,u,n,f,w,c)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,w,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,w,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),l.props=n,l.state=w,l.context=c,n=u):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),n=!1)}return Nl(e,t,r,n,a,s)}function Nl(e,t,r,n,s,a){Sh(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return s&&$c(t,r,!1),Lt(e,t,a);n=t.stateNode,Fp.current=t;var o=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=dn(t,e.child,null,a),t.child=dn(t,null,o,a)):Me(e,t,o,a),t.memoizedState=n.state,s&&$c(t,r,!0),t.child}function Ch(e){var t=e.stateNode;t.pendingContext?Mc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mc(e,t.context,!1),So(e,t.containerInfo)}function Zc(e,t,r,n,s){return un(),wo(s),t.flags|=256,Me(e,t,r,n),t.child}var Sl={dehydrated:null,treeContext:null,retryLane:0};function Cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Eh(e,t,r){var n=t.pendingProps,s=oe.current,a=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(s&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),re(oe,s&1),e===null)return vl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,a?(n=t.mode,a=t.child,l={mode:"hidden",children:l},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Ki(l,n,0,null),e=jr(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Cl(r),t.memoizedState=Sl,e):Ao(t,l));if(s=e.memoizedState,s!==null&&(o=s.dehydrated,o!==null))return Bp(e,t,l,n,o,s,r);if(a){a=n.fallback,l=t.mode,s=e.child,o=s.sibling;var c={mode:"hidden",children:n.children};return!(l&1)&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=rr(s,c),n.subtreeFlags=s.subtreeFlags&14680064),o!==null?a=rr(o,a):(a=jr(a,l,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,l=e.child.memoizedState,l=l===null?Cl(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~r,t.memoizedState=Sl,n}return a=e.child,e=a.sibling,n=rr(a,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Ao(e,t){return t=Ki({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Us(e,t,r,n){return n!==null&&wo(n),dn(t,e.child,null,r),e=Ao(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bp(e,t,r,n,s,a,l){if(r)return t.flags&256?(t.flags&=-257,n=Ta(Error(T(422))),Us(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,s=t.mode,n=Ki({mode:"visible",children:n.children},s,0,null),a=jr(a,s,l,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,t.mode&1&&dn(t,e.child,null,l),t.child.memoizedState=Cl(l),t.memoizedState=Sl,a);if(!(t.mode&1))return Us(e,t,l,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var o=n.dgst;return n=o,a=Error(T(419)),n=Ta(a,n,void 0),Us(e,t,l,n)}if(o=(l&e.childLanes)!==0,We||o){if(n=Ne,n!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(n.suspendedLanes|l)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,At(e,s),pt(n,e,s,-1))}return Do(),n=Ta(Error(T(421))),Us(e,t,l,n)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=tg.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,Je=Yt(s.nextSibling),Qe=t,ie=!0,ft=null,e!==null&&(et[tt++]=Pt,et[tt++]=Tt,et[tt++]=Nr,Pt=e.id,Tt=e.overflow,Nr=t),t=Ao(t,n.children),t.flags|=4096,t)}function eu(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),wl(e.return,t,r)}function Oa(e,t,r,n,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=s)}function Ph(e,t,r){var n=t.pendingProps,s=n.revealOrder,a=n.tail;if(Me(e,t,n.children,r),n=oe.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eu(e,r,t);else if(e.tag===19)eu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(re(oe,n),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&_i(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),Oa(t,!1,s,r,a);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&_i(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}Oa(t,!0,r,null,a);break;case"together":Oa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ni(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Cr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,r=rr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=rr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Wp(e,t,r){switch(t.tag){case 3:Ch(t),un();break;case 5:th(t);break;case 1:Ge(t.type)&&yi(t);break;case 4:So(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,s=t.memoizedProps.value;re(ji,n._currentValue),n._currentValue=s;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(re(oe,oe.current&1),t.flags|=128,null):r&t.child.childLanes?Eh(e,t,r):(re(oe,oe.current&1),e=Lt(e,t,r),e!==null?e.sibling:null);re(oe,oe.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Ph(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),re(oe,oe.current),n)break;return null;case 22:case 23:return t.lanes=0,Nh(e,t,r)}return Lt(e,t,r)}var Th,El,Oh,Ih;Th=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};El=function(){};Oh=function(e,t,r,n){var s=e.memoizedProps;if(s!==n){e=t.stateNode,vr(jt.current);var a=null;switch(r){case"input":s=Qa(e,s),n=Qa(e,n),a=[];break;case"select":s=ue({},s,{value:void 0}),n=ue({},n,{value:void 0}),a=[];break;case"textarea":s=Za(e,s),n=Za(e,n),a=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=gi)}tl(r,n);var l;r=null;for(u in s)if(!n.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var o=s[u];for(l in o)o.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xn.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in n){var c=n[u];if(o=s!=null?s[u]:void 0,n.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(a||(a=[]),a.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ne("scroll",e),a||o===c||(a=[])):(a=a||[]).push(u,c))}r&&(a=a||[]).push("style",r);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Ih=function(e,t,r,n){r!==n&&(t.flags|=4)};function Tn(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Vp(e,t,r){var n=t.pendingProps;switch(vo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Ge(t.type)&&xi(),Oe(t),null;case 3:return n=t.stateNode,hn(),se(He),se(Ae),Eo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&($s(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(Ml(ft),ft=null))),El(e,t),Oe(t),null;case 5:Co(t);var s=vr(cs.current);if(r=t.type,e!==null&&t.stateNode!=null)Oh(e,t,r,n,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(T(166));return Oe(t),null}if(e=vr(jt.current),$s(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[vt]=t,n[ls]=a,e=(t.mode&1)!==0,r){case"dialog":ne("cancel",n),ne("close",n);break;case"iframe":case"object":case"embed":ne("load",n);break;case"video":case"audio":for(s=0;s<$n.length;s++)ne($n[s],n);break;case"source":ne("error",n);break;case"img":case"image":case"link":ne("error",n),ne("load",n);break;case"details":ne("toggle",n);break;case"input":cc(n,a),ne("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},ne("invalid",n);break;case"textarea":dc(n,a),ne("invalid",n)}tl(r,a),s=null;for(var l in a)if(a.hasOwnProperty(l)){var o=a[l];l==="children"?typeof o=="string"?n.textContent!==o&&(a.suppressHydrationWarning!==!0&&Ms(n.textContent,o,e),s=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&Ms(n.textContent,o,e),s=["children",""+o]):Xn.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&ne("scroll",n)}switch(r){case"input":Es(n),uc(n,a,!0);break;case"textarea":Es(n),hc(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=gi)}n=s,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ad(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),r==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[vt]=t,e[ls]=n,Th(e,t,!1,!1),t.stateNode=e;e:{switch(l=rl(r,n),r){case"dialog":ne("cancel",e),ne("close",e),s=n;break;case"iframe":case"object":case"embed":ne("load",e),s=n;break;case"video":case"audio":for(s=0;s<$n.length;s++)ne($n[s],e);s=n;break;case"source":ne("error",e),s=n;break;case"img":case"image":case"link":ne("error",e),ne("load",e),s=n;break;case"details":ne("toggle",e),s=n;break;case"input":cc(e,n),s=Qa(e,n),ne("invalid",e);break;case"option":s=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},s=ue({},n,{value:void 0}),ne("invalid",e);break;case"textarea":dc(e,n),s=Za(e,n),ne("invalid",e);break;default:s=n}tl(r,s),o=s;for(a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="style"?cd(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ld(e,c)):a==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Yn(e,c):typeof c=="number"&&Yn(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Xn.hasOwnProperty(a)?c!=null&&a==="onScroll"&&ne("scroll",e):c!=null&&no(e,a,c,l))}switch(r){case"input":Es(e),uc(e,n,!1);break;case"textarea":Es(e),hc(e);break;case"option":n.value!=null&&e.setAttribute("value",""+nr(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?tn(e,!!n.multiple,a,!1):n.defaultValue!=null&&tn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=gi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)Ih(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(T(166));if(r=vr(cs.current),vr(jt.current),$s(t)){if(n=t.stateNode,r=t.memoizedProps,n[vt]=t,(a=n.nodeValue!==r)&&(e=Qe,e!==null))switch(e.tag){case 3:Ms(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ms(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[vt]=t,t.stateNode=n}return Oe(t),null;case 13:if(se(oe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Je!==null&&t.mode&1&&!(t.flags&128))Qd(),un(),t.flags|=98560,a=!1;else if(a=$s(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(T(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(T(317));a[vt]=t}else un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),a=!1}else ft!==null&&(Ml(ft),ft=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?ve===0&&(ve=3):Do())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return hn(),El(e,t),e===null&&is(t.stateNode.containerInfo),Oe(t),null;case 10:return ko(t.type._context),Oe(t),null;case 17:return Ge(t.type)&&xi(),Oe(t),null;case 19:if(se(oe),a=t.memoizedState,a===null)return Oe(t),null;if(n=(t.flags&128)!==0,l=a.rendering,l===null)if(n)Tn(a,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=_i(e),l!==null){for(t.flags|=128,Tn(a,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return re(oe,oe.current&1|2),t.child}e=e.sibling}a.tail!==null&&fe()>mn&&(t.flags|=128,n=!0,Tn(a,!1),t.lanes=4194304)}else{if(!n)if(e=_i(l),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Tn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!ie)return Oe(t),null}else 2*fe()-a.renderingStartTime>mn&&r!==1073741824&&(t.flags|=128,n=!0,Tn(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(r=a.last,r!==null?r.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=fe(),t.sibling=null,r=oe.current,re(oe,n?r&1|2:r&1),t):(Oe(t),null);case 22:case 23:return Uo(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ke&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Hp(e,t){switch(vo(t),t.tag){case 1:return Ge(t.type)&&xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(),se(He),se(Ae),Eo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Co(t),null;case 13:if(se(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(oe),null;case 4:return hn(),null;case 10:return ko(t.type._context),null;case 22:case 23:return Uo(),null;case 24:return null;default:return null}}var Ds=!1,Re=!1,Gp=typeof WeakSet=="function"?WeakSet:Set,M=null;function Zr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){de(e,t,n)}else r.current=null}function Pl(e,t,r){try{r()}catch(n){de(e,t,n)}}var tu=!1;function qp(e,t){if(hl=fi,e=$d(),xo(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var s=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var l=0,o=-1,c=-1,u=0,d=0,h=e,f=null;t:for(;;){for(var x;h!==r||s!==0&&h.nodeType!==3||(o=l+s),h!==a||n!==0&&h.nodeType!==3||(c=l+n),h.nodeType===3&&(l+=h.nodeValue.length),(x=h.firstChild)!==null;)f=h,h=x;for(;;){if(h===e)break t;if(f===r&&++u===s&&(o=l),f===a&&++d===n&&(c=l),(x=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=x}r=o===-1||c===-1?null:{start:o,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(fl={focusedElem:e,selectionRange:r},fi=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var j=w.memoizedProps,v=w.memoizedState,p=t.stateNode,g=p.getSnapshotBeforeUpdate(t.elementType===t.type?j:ut(t.type,j),v);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(k){de(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return w=tu,tu=!1,w}function Hn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Pl(t,r,a)}s=s.next}while(s!==n)}}function Gi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Tl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Rh(e){var t=e.alternate;t!==null&&(e.alternate=null,Rh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[ls],delete t[gl],delete t[Pp],delete t[Tp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ah(e){return e.tag===5||e.tag===3||e.tag===4}function ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ah(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ol(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=gi));else if(n!==4&&(e=e.child,e!==null))for(Ol(e,t,r),e=e.sibling;e!==null;)Ol(e,t,r),e=e.sibling}function Il(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Il(e,t,r),e=e.sibling;e!==null;)Il(e,t,r),e=e.sibling}var Se=null,dt=!1;function zt(e,t,r){for(r=r.child;r!==null;)Lh(e,t,r),r=r.sibling}function Lh(e,t,r){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(zi,r)}catch{}switch(r.tag){case 5:Re||Zr(r,t);case 6:var n=Se,s=dt;Se=null,zt(e,t,r),Se=n,dt=s,Se!==null&&(dt?(e=Se,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Se.removeChild(r.stateNode));break;case 18:Se!==null&&(dt?(e=Se,r=r.stateNode,e.nodeType===8?_a(e.parentNode,r):e.nodeType===1&&_a(e,r),rs(e)):_a(Se,r.stateNode));break;case 4:n=Se,s=dt,Se=r.stateNode.containerInfo,dt=!0,zt(e,t,r),Se=n,dt=s;break;case 0:case 11:case 14:case 15:if(!Re&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var a=s,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Pl(r,t,l),s=s.next}while(s!==n)}zt(e,t,r);break;case 1:if(!Re&&(Zr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(o){de(r,t,o)}zt(e,t,r);break;case 21:zt(e,t,r);break;case 22:r.mode&1?(Re=(n=Re)||r.memoizedState!==null,zt(e,t,r),Re=n):zt(e,t,r);break;default:zt(e,t,r)}}function nu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Gp),t.forEach(function(n){var s=rg.bind(null,e,n);r.has(n)||(r.add(n),n.then(s,s))})}}function ot(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var s=r[n];try{var a=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:Se=o.stateNode,dt=!1;break e;case 3:Se=o.stateNode.containerInfo,dt=!0;break e;case 4:Se=o.stateNode.containerInfo,dt=!0;break e}o=o.return}if(Se===null)throw Error(T(160));Lh(a,l,s),Se=null,dt=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){de(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mh(t,e),t=t.sibling}function Mh(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),xt(e),n&4){try{Hn(3,e,e.return),Gi(3,e)}catch(j){de(e,e.return,j)}try{Hn(5,e,e.return)}catch(j){de(e,e.return,j)}}break;case 1:ot(t,e),xt(e),n&512&&r!==null&&Zr(r,r.return);break;case 5:if(ot(t,e),xt(e),n&512&&r!==null&&Zr(r,r.return),e.flags&32){var s=e.stateNode;try{Yn(s,"")}catch(j){de(e,e.return,j)}}if(n&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,l=r!==null?r.memoizedProps:a,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&sd(s,a),rl(o,l);var u=rl(o,a);for(l=0;l<c.length;l+=2){var d=c[l],h=c[l+1];d==="style"?cd(s,h):d==="dangerouslySetInnerHTML"?ld(s,h):d==="children"?Yn(s,h):no(s,d,h,u)}switch(o){case"input":Xa(s,a);break;case"textarea":id(s,a);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?tn(s,!!a.multiple,x,!1):f!==!!a.multiple&&(a.defaultValue!=null?tn(s,!!a.multiple,a.defaultValue,!0):tn(s,!!a.multiple,a.multiple?[]:"",!1))}s[ls]=a}catch(j){de(e,e.return,j)}}break;case 6:if(ot(t,e),xt(e),n&4){if(e.stateNode===null)throw Error(T(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(j){de(e,e.return,j)}}break;case 3:if(ot(t,e),xt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{rs(t.containerInfo)}catch(j){de(e,e.return,j)}break;case 4:ot(t,e),xt(e);break;case 13:ot(t,e),xt(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||($o=fe())),n&4&&nu(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(Re=(u=Re)||d,ot(t,e),Re=u):ot(t,e),xt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(M=e,d=e.child;d!==null;){for(h=M=d;M!==null;){switch(f=M,x=f.child,f.tag){case 0:case 11:case 14:case 15:Hn(4,f,f.return);break;case 1:Zr(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){n=f,r=f.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(j){de(n,r,j)}}break;case 5:Zr(f,f.return);break;case 22:if(f.memoizedState!==null){iu(h);continue}}x!==null?(x.return=f,M=x):iu(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{s=h.stateNode,u?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=od("display",l))}catch(j){de(e,e.return,j)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(j){de(e,e.return,j)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ot(t,e),xt(e),n&4&&nu(e);break;case 21:break;default:ot(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Ah(r)){var n=r;break e}r=r.return}throw Error(T(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(Yn(s,""),n.flags&=-33);var a=ru(e);Il(e,a,s);break;case 3:case 4:var l=n.stateNode.containerInfo,o=ru(e);Ol(e,o,l);break;default:throw Error(T(161))}}catch(c){de(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kp(e,t,r){M=e,$h(e)}function $h(e,t,r){for(var n=(e.mode&1)!==0;M!==null;){var s=M,a=s.child;if(s.tag===22&&n){var l=s.memoizedState!==null||Ds;if(!l){var o=s.alternate,c=o!==null&&o.memoizedState!==null||Re;o=Ds;var u=Re;if(Ds=l,(Re=c)&&!u)for(M=s;M!==null;)l=M,c=l.child,l.tag===22&&l.memoizedState!==null?au(s):c!==null?(c.return=l,M=c):au(s);for(;a!==null;)M=a,$h(a),a=a.sibling;M=s,Ds=o,Re=u}su(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,M=a):su(e)}}function su(e){for(;M!==null;){var t=M;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||Gi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Re)if(r===null)n.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:ut(t.type,r.memoizedProps);n.componentDidUpdate(s,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Bc(t,a,n);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Bc(t,l,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&rs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Re||t.flags&512&&Tl(t)}catch(f){de(t,t.return,f)}}if(t===e){M=null;break}if(r=t.sibling,r!==null){r.return=t.return,M=r;break}M=t.return}}function iu(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var r=t.sibling;if(r!==null){r.return=t.return,M=r;break}M=t.return}}function au(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Gi(4,t)}catch(c){de(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var s=t.return;try{n.componentDidMount()}catch(c){de(t,s,c)}}var a=t.return;try{Tl(t)}catch(c){de(t,a,c)}break;case 5:var l=t.return;try{Tl(t)}catch(c){de(t,l,c)}}}catch(c){de(t,t.return,c)}if(t===e){M=null;break}var o=t.sibling;if(o!==null){o.return=t.return,M=o;break}M=t.return}}var Jp=Math.ceil,Ci=$t.ReactCurrentDispatcher,Lo=$t.ReactCurrentOwner,st=$t.ReactCurrentBatchConfig,X=0,Ne=null,me=null,Ce=0,Ke=0,en=ar(0),ve=0,fs=null,Cr=0,qi=0,Mo=0,Gn=null,Fe=null,$o=0,mn=1/0,Nt=null,Ei=!1,Rl=null,er=null,Fs=!1,Kt=null,Pi=0,qn=0,Al=null,si=-1,ii=0;function $e(){return X&6?fe():si!==-1?si:si=fe()}function tr(e){return e.mode&1?X&2&&Ce!==0?Ce&-Ce:Ip.transition!==null?(ii===0&&(ii=jd()),ii):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Ed(e.type)),e):1}function pt(e,t,r,n){if(50<qn)throw qn=0,Al=null,Error(T(185));gs(e,r,n),(!(X&2)||e!==Ne)&&(e===Ne&&(!(X&2)&&(qi|=r),ve===4&&Ht(e,Ce)),qe(e,n),r===1&&X===0&&!(t.mode&1)&&(mn=fe()+500,Wi&&lr()))}function qe(e,t){var r=e.callbackNode;Im(e,t);var n=hi(e,e===Ne?Ce:0);if(n===0)r!==null&&pc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&pc(r),t===1)e.tag===0?Op(lu.bind(null,e)):qd(lu.bind(null,e)),Cp(function(){!(X&6)&&lr()}),r=null;else{switch(bd(n)){case 1:r=oo;break;case 4:r=vd;break;case 16:r=di;break;case 536870912:r=wd;break;default:r=di}r=Hh(r,zh.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function zh(e,t){if(si=-1,ii=0,X&6)throw Error(T(327));var r=e.callbackNode;if(ln()&&e.callbackNode!==r)return null;var n=hi(e,e===Ne?Ce:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ti(e,n);else{t=n;var s=X;X|=2;var a=Dh();(Ne!==e||Ce!==t)&&(Nt=null,mn=fe()+500,wr(e,t));do try{Yp();break}catch(o){Uh(e,o)}while(!0);bo(),Ci.current=a,X=s,me!==null?t=0:(Ne=null,Ce=0,t=ve)}if(t!==0){if(t===2&&(s=ll(e),s!==0&&(n=s,t=Ll(e,s))),t===1)throw r=fs,wr(e,0),Ht(e,n),qe(e,fe()),r;if(t===6)Ht(e,n);else{if(s=e.current.alternate,!(n&30)&&!Qp(s)&&(t=Ti(e,n),t===2&&(a=ll(e),a!==0&&(n=a,t=Ll(e,a))),t===1))throw r=fs,wr(e,0),Ht(e,n),qe(e,fe()),r;switch(e.finishedWork=s,e.finishedLanes=n,t){case 0:case 1:throw Error(T(345));case 2:mr(e,Fe,Nt);break;case 3:if(Ht(e,n),(n&130023424)===n&&(t=$o+500-fe(),10<t)){if(hi(e,0)!==0)break;if(s=e.suspendedLanes,(s&n)!==n){$e(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=pl(mr.bind(null,e,Fe,Nt),t);break}mr(e,Fe,Nt);break;case 4:if(Ht(e,n),(n&4194240)===n)break;for(t=e.eventTimes,s=-1;0<n;){var l=31-mt(n);a=1<<l,l=t[l],l>s&&(s=l),n&=~a}if(n=s,n=fe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Jp(n/1960))-n,10<n){e.timeoutHandle=pl(mr.bind(null,e,Fe,Nt),n);break}mr(e,Fe,Nt);break;case 5:mr(e,Fe,Nt);break;default:throw Error(T(329))}}}return qe(e,fe()),e.callbackNode===r?zh.bind(null,e):null}function Ll(e,t){var r=Gn;return e.current.memoizedState.isDehydrated&&(wr(e,t).flags|=256),e=Ti(e,t),e!==2&&(t=Fe,Fe=r,t!==null&&Ml(t)),e}function Ml(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function Qp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var s=r[n],a=s.getSnapshot;s=s.value;try{if(!gt(a(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ht(e,t){for(t&=~Mo,t&=~qi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-mt(t),n=1<<r;e[r]=-1,t&=~n}}function lu(e){if(X&6)throw Error(T(327));ln();var t=hi(e,0);if(!(t&1))return qe(e,fe()),null;var r=Ti(e,t);if(e.tag!==0&&r===2){var n=ll(e);n!==0&&(t=n,r=Ll(e,n))}if(r===1)throw r=fs,wr(e,0),Ht(e,t),qe(e,fe()),r;if(r===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mr(e,Fe,Nt),qe(e,fe()),null}function zo(e,t){var r=X;X|=1;try{return e(t)}finally{X=r,X===0&&(mn=fe()+500,Wi&&lr())}}function Er(e){Kt!==null&&Kt.tag===0&&!(X&6)&&ln();var t=X;X|=1;var r=st.transition,n=ee;try{if(st.transition=null,ee=1,e)return e()}finally{ee=n,st.transition=r,X=t,!(X&6)&&lr()}}function Uo(){Ke=en.current,se(en)}function wr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Sp(r)),me!==null)for(r=me.return;r!==null;){var n=r;switch(vo(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&xi();break;case 3:hn(),se(He),se(Ae),Eo();break;case 5:Co(n);break;case 4:hn();break;case 13:se(oe);break;case 19:se(oe);break;case 10:ko(n.type._context);break;case 22:case 23:Uo()}r=r.return}if(Ne=e,me=e=rr(e.current,null),Ce=Ke=t,ve=0,fs=null,Mo=qi=Cr=0,Fe=Gn=null,yr!==null){for(t=0;t<yr.length;t++)if(r=yr[t],n=r.interleaved,n!==null){r.interleaved=null;var s=n.next,a=r.pending;if(a!==null){var l=a.next;a.next=s,n.next=l}r.pending=n}yr=null}return e}function Uh(e,t){do{var r=me;try{if(bo(),ti.current=Si,Ni){for(var n=ce.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Ni=!1}if(Sr=0,be=ye=ce=null,Vn=!1,us=0,Lo.current=null,r===null||r.return===null){ve=1,fs=t,me=null;break}e:{var a=e,l=r.return,o=r,c=t;if(t=Ce,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Kc(l);if(x!==null){x.flags&=-257,Jc(x,l,o,a,t),x.mode&1&&qc(a,u,t),t=x,c=u;var w=t.updateQueue;if(w===null){var j=new Set;j.add(c),t.updateQueue=j}else w.add(c);break e}else{if(!(t&1)){qc(a,u,t),Do();break e}c=Error(T(426))}}else if(ie&&o.mode&1){var v=Kc(l);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Jc(v,l,o,a,t),wo(fn(c,o));break e}}a=c=fn(c,o),ve!==4&&(ve=2),Gn===null?Gn=[a]:Gn.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=bh(a,c,t);Fc(a,p);break e;case 1:o=c;var g=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(er===null||!er.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=kh(a,o,t);Fc(a,k);break e}}a=a.return}while(a!==null)}Bh(r)}catch(_){t=_,me===r&&r!==null&&(me=r=r.return);continue}break}while(!0)}function Dh(){var e=Ci.current;return Ci.current=Si,e===null?Si:e}function Do(){(ve===0||ve===3||ve===2)&&(ve=4),Ne===null||!(Cr&268435455)&&!(qi&268435455)||Ht(Ne,Ce)}function Ti(e,t){var r=X;X|=2;var n=Dh();(Ne!==e||Ce!==t)&&(Nt=null,wr(e,t));do try{Xp();break}catch(s){Uh(e,s)}while(!0);if(bo(),X=r,Ci.current=n,me!==null)throw Error(T(261));return Ne=null,Ce=0,ve}function Xp(){for(;me!==null;)Fh(me)}function Yp(){for(;me!==null&&!km();)Fh(me)}function Fh(e){var t=Vh(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?Bh(e):me=t,Lo.current=null}function Bh(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Hp(r,t),r!==null){r.flags&=32767,me=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,me=null;return}}else if(r=Vp(r,t,Ke),r!==null){me=r;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ve===0&&(ve=5)}function mr(e,t,r){var n=ee,s=st.transition;try{st.transition=null,ee=1,Zp(e,t,r,n)}finally{st.transition=s,ee=n}return null}function Zp(e,t,r,n){do ln();while(Kt!==null);if(X&6)throw Error(T(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Rm(e,a),e===Ne&&(me=Ne=null,Ce=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Fs||(Fs=!0,Hh(di,function(){return ln(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=st.transition,st.transition=null;var l=ee;ee=1;var o=X;X|=4,Lo.current=null,qp(e,r),Mh(r,e),vp(fl),fi=!!hl,fl=hl=null,e.current=r,Kp(r),_m(),X=o,ee=l,st.transition=a}else e.current=r;if(Fs&&(Fs=!1,Kt=e,Pi=s),a=e.pendingLanes,a===0&&(er=null),Cm(r.stateNode),qe(e,fe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],n(s.value,{componentStack:s.stack,digest:s.digest});if(Ei)throw Ei=!1,e=Rl,Rl=null,e;return Pi&1&&e.tag!==0&&ln(),a=e.pendingLanes,a&1?e===Al?qn++:(qn=0,Al=e):qn=0,lr(),null}function ln(){if(Kt!==null){var e=bd(Pi),t=st.transition,r=ee;try{if(st.transition=null,ee=16>e?16:e,Kt===null)var n=!1;else{if(e=Kt,Kt=null,Pi=0,X&6)throw Error(T(331));var s=X;for(X|=4,M=e.current;M!==null;){var a=M,l=a.child;if(M.flags&16){var o=a.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(M=u;M!==null;){var d=M;switch(d.tag){case 0:case 11:case 15:Hn(8,d,a)}var h=d.child;if(h!==null)h.return=d,M=h;else for(;M!==null;){d=M;var f=d.sibling,x=d.return;if(Rh(d),d===u){M=null;break}if(f!==null){f.return=x,M=f;break}M=x}}}var w=a.alternate;if(w!==null){var j=w.child;if(j!==null){w.child=null;do{var v=j.sibling;j.sibling=null,j=v}while(j!==null)}}M=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,M=l;else e:for(;M!==null;){if(a=M,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Hn(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,M=p;break e}M=a.return}}var g=e.current;for(M=g;M!==null;){l=M;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,M=y;else e:for(l=g;M!==null;){if(o=M,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Gi(9,o)}}catch(_){de(o,o.return,_)}if(o===l){M=null;break e}var k=o.sibling;if(k!==null){k.return=o.return,M=k;break e}M=o.return}}if(X=s,lr(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(zi,e)}catch{}n=!0}return n}finally{ee=r,st.transition=t}}return!1}function ou(e,t,r){t=fn(r,t),t=bh(e,t,1),e=Zt(e,t,1),t=$e(),e!==null&&(gs(e,1,t),qe(e,t))}function de(e,t,r){if(e.tag===3)ou(e,e,r);else for(;t!==null;){if(t.tag===3){ou(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(er===null||!er.has(n))){e=fn(r,e),e=kh(t,e,1),t=Zt(t,e,1),e=$e(),t!==null&&(gs(t,1,e),qe(t,e));break}}t=t.return}}function eg(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&r,Ne===e&&(Ce&r)===r&&(ve===4||ve===3&&(Ce&130023424)===Ce&&500>fe()-$o?wr(e,0):Mo|=r),qe(e,t)}function Wh(e,t){t===0&&(e.mode&1?(t=Os,Os<<=1,!(Os&130023424)&&(Os=4194304)):t=1);var r=$e();e=At(e,t),e!==null&&(gs(e,t,r),qe(e,r))}function tg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Wh(e,r)}function rg(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(T(314))}n!==null&&n.delete(t),Wh(e,r)}var Vh;Vh=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)We=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return We=!1,Wp(e,t,r);We=!!(e.flags&131072)}else We=!1,ie&&t.flags&1048576&&Kd(t,wi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ni(e,t),e=t.pendingProps;var s=cn(t,Ae.current);an(t,r),s=To(null,t,n,e,s,r);var a=Oo();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ge(n)?(a=!0,yi(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,No(t),s.updater=Hi,t.stateNode=s,s._reactInternals=t,bl(t,n,e,r),t=Nl(null,t,n,!0,a,r)):(t.tag=0,ie&&a&&yo(t),Me(null,t,s,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ni(e,t),e=t.pendingProps,s=n._init,n=s(n._payload),t.type=n,s=t.tag=sg(n),e=ut(n,e),s){case 0:t=_l(null,t,n,e,r);break e;case 1:t=Yc(null,t,n,e,r);break e;case 11:t=Qc(null,t,n,e,r);break e;case 14:t=Xc(null,t,n,ut(n.type,e),r);break e}throw Error(T(306,n,""))}return t;case 0:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:ut(n,s),_l(e,t,n,s,r);case 1:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:ut(n,s),Yc(e,t,n,s,r);case 3:e:{if(Ch(t),e===null)throw Error(T(387));n=t.pendingProps,a=t.memoizedState,s=a.element,eh(e,t),ki(t,n,null,r);var l=t.memoizedState;if(n=l.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=fn(Error(T(423)),t),t=Zc(e,t,n,r,s);break e}else if(n!==s){s=fn(Error(T(424)),t),t=Zc(e,t,n,r,s);break e}else for(Je=Yt(t.stateNode.containerInfo.firstChild),Qe=t,ie=!0,ft=null,r=Yd(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(un(),n===s){t=Lt(e,t,r);break e}Me(e,t,n,r)}t=t.child}return t;case 5:return th(t),e===null&&vl(t),n=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,l=s.children,ml(n,s)?l=null:a!==null&&ml(n,a)&&(t.flags|=32),Sh(e,t),Me(e,t,l,r),t.child;case 6:return e===null&&vl(t),null;case 13:return Eh(e,t,r);case 4:return So(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=dn(t,null,n,r):Me(e,t,n,r),t.child;case 11:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:ut(n,s),Qc(e,t,n,s,r);case 7:return Me(e,t,t.pendingProps,r),t.child;case 8:return Me(e,t,t.pendingProps.children,r),t.child;case 12:return Me(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,s=t.pendingProps,a=t.memoizedProps,l=s.value,re(ji,n._currentValue),n._currentValue=l,a!==null)if(gt(a.value,l)){if(a.children===s.children&&!He.current){t=Lt(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){l=a.child;for(var c=o.firstContext;c!==null;){if(c.context===n){if(a.tag===1){c=Ot(-1,r&-r),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),wl(a.return,r,t),o.lanes|=r;break}c=c.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(T(341));l.lanes|=r,o=l.alternate,o!==null&&(o.lanes|=r),wl(l,r,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}Me(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,n=t.pendingProps.children,an(t,r),s=at(s),n=n(s),t.flags|=1,Me(e,t,n,r),t.child;case 14:return n=t.type,s=ut(n,t.pendingProps),s=ut(n.type,s),Xc(e,t,n,s,r);case 15:return _h(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:ut(n,s),ni(e,t),t.tag=1,Ge(n)?(e=!0,yi(t)):e=!1,an(t,r),jh(t,n,s),bl(t,n,s,r),Nl(null,t,n,!0,e,r);case 19:return Ph(e,t,r);case 22:return Nh(e,t,r)}throw Error(T(156,t.tag))};function Hh(e,t){return yd(e,t)}function ng(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,r,n){return new ng(e,t,r,n)}function Fo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sg(e){if(typeof e=="function")return Fo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===io)return 11;if(e===ao)return 14}return 2}function rr(e,t){var r=e.alternate;return r===null?(r=rt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ai(e,t,r,n,s,a){var l=2;if(n=e,typeof e=="function")Fo(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Vr:return jr(r.children,s,a,t);case so:l=8,s|=8;break;case Ga:return e=rt(12,r,t,s|2),e.elementType=Ga,e.lanes=a,e;case qa:return e=rt(13,r,t,s),e.elementType=qa,e.lanes=a,e;case Ka:return e=rt(19,r,t,s),e.elementType=Ka,e.lanes=a,e;case td:return Ki(r,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zu:l=10;break e;case ed:l=9;break e;case io:l=11;break e;case ao:l=14;break e;case Bt:l=16,n=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=rt(l,r,t,s),t.elementType=e,t.type=n,t.lanes=a,t}function jr(e,t,r,n){return e=rt(7,e,n,t),e.lanes=r,e}function Ki(e,t,r,n){return e=rt(22,e,n,t),e.elementType=td,e.lanes=r,e.stateNode={isHidden:!1},e}function Ia(e,t,r){return e=rt(6,e,null,t),e.lanes=r,e}function Ra(e,t,r){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ig(e,t,r,n,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fa(0),this.expirationTimes=fa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fa(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Bo(e,t,r,n,s,a,l,o,c){return e=new ig(e,t,r,o,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=rt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},No(a),e}function ag(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Gh(e){if(!e)return sr;e=e._reactInternals;e:{if(Or(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var r=e.type;if(Ge(r))return Gd(e,r,t)}return t}function qh(e,t,r,n,s,a,l,o,c){return e=Bo(r,n,!0,e,s,a,l,o,c),e.context=Gh(null),r=e.current,n=$e(),s=tr(r),a=Ot(n,s),a.callback=t??null,Zt(r,a,s),e.current.lanes=s,gs(e,s,n),qe(e,n),e}function Ji(e,t,r,n){var s=t.current,a=$e(),l=tr(s);return r=Gh(r),t.context===null?t.context=r:t.pendingContext=r,t=Ot(a,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Zt(s,t,l),e!==null&&(pt(e,s,l,a),ei(e,s,l)),l}function Oi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Wo(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function lg(){return null}var Kh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vo(e){this._internalRoot=e}Qi.prototype.render=Vo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Ji(e,t,null,null)};Qi.prototype.unmount=Vo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Er(function(){Ji(null,e,null,null)}),t[Rt]=null}};function Qi(e){this._internalRoot=e}Qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nd();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Vt.length&&t!==0&&t<Vt[r].priority;r++);Vt.splice(r,0,e),r===0&&Cd(e)}};function Ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uu(){}function og(e,t,r,n,s){if(s){if(typeof n=="function"){var a=n;n=function(){var u=Oi(l);a.call(u)}}var l=qh(t,n,e,0,null,!1,!1,"",uu);return e._reactRootContainer=l,e[Rt]=l.current,is(e.nodeType===8?e.parentNode:e),Er(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof n=="function"){var o=n;n=function(){var u=Oi(c);o.call(u)}}var c=Bo(e,0,!1,null,null,!1,!1,"",uu);return e._reactRootContainer=c,e[Rt]=c.current,is(e.nodeType===8?e.parentNode:e),Er(function(){Ji(t,c,r,n)}),c}function Yi(e,t,r,n,s){var a=r._reactRootContainer;if(a){var l=a;if(typeof s=="function"){var o=s;s=function(){var c=Oi(l);o.call(c)}}Ji(t,l,e,s)}else l=og(r,t,e,s,n);return Oi(l)}kd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Mn(t.pendingLanes);r!==0&&(co(t,r|1),qe(t,fe()),!(X&6)&&(mn=fe()+500,lr()))}break;case 13:Er(function(){var n=At(e,1);if(n!==null){var s=$e();pt(n,e,1,s)}}),Wo(e,1)}};uo=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var r=$e();pt(t,e,134217728,r)}Wo(e,134217728)}};_d=function(e){if(e.tag===13){var t=tr(e),r=At(e,t);if(r!==null){var n=$e();pt(r,e,t,n)}Wo(e,t)}};Nd=function(){return ee};Sd=function(e,t){var r=ee;try{return ee=e,t()}finally{ee=r}};sl=function(e,t,r){switch(t){case"input":if(Xa(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var s=Bi(n);if(!s)throw Error(T(90));nd(n),Xa(n,s)}}}break;case"textarea":id(e,r);break;case"select":t=r.value,t!=null&&tn(e,!!r.multiple,t,!1)}};hd=zo;fd=Er;var cg={usingClientEntryPoint:!1,Events:[ys,Kr,Bi,ud,dd,zo]},On={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ug={bundleType:On.bundleType,version:On.version,rendererPackageName:On.rendererPackageName,rendererConfig:On.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gd(e),e===null?null:e.stateNode},findFiberByHostInstance:On.findFiberByHostInstance||lg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bs.isDisabled&&Bs.supportsFiber)try{zi=Bs.inject(ug),wt=Bs}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cg;Ye.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ho(t))throw Error(T(200));return ag(e,t,null,r)};Ye.createRoot=function(e,t){if(!Ho(e))throw Error(T(299));var r=!1,n="",s=Kh;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Bo(e,1,!1,null,null,r,!1,n,s),e[Rt]=t.current,is(e.nodeType===8?e.parentNode:e),new Vo(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=gd(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return Er(e)};Ye.hydrate=function(e,t,r){if(!Xi(t))throw Error(T(200));return Yi(null,e,t,!0,r)};Ye.hydrateRoot=function(e,t,r){if(!Ho(e))throw Error(T(405));var n=r!=null&&r.hydratedSources||null,s=!1,a="",l=Kh;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=qh(t,null,e,1,r??null,s,!1,a,l),e[Rt]=t.current,is(e),n)for(e=0;e<n.length;e++)r=n[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new Qi(t)};Ye.render=function(e,t,r){if(!Xi(t))throw Error(T(200));return Yi(null,e,t,!1,r)};Ye.unmountComponentAtNode=function(e){if(!Xi(e))throw Error(T(40));return e._reactRootContainer?(Er(function(){Yi(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};Ye.unstable_batchedUpdates=zo;Ye.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Xi(r))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Yi(e,t,r,!1,n)};Ye.version="18.3.1-next-f1338f8080-20240426";function Jh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jh)}catch(e){console.error(e)}}Jh(),Ju.exports=Ye;var dg=Ju.exports,Qh,du=dg;Qh=du.createRoot,du.hydrateRoot;const hg="modulepreload",fg=function(e){return"/"+e},hu={},ws=function(t,r,n){let s=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),o=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=Promise.allSettled(r.map(c=>{if(c=fg(c),c in hu)return;hu[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":hg,u||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),u)return new Promise((f,x)=>{h.addEventListener("load",f),h.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(l){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=l,window.dispatchEvent(o),!o.defaultPrevented)throw l}return s.then(l=>{for(const o of l||[])o.status==="rejected"&&a(o.reason);return t().catch(a)})},mg=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>ws(async()=>{const{default:n}=await Promise.resolve().then(()=>vn);return{default:n}},void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)};class Go extends Error{constructor(t,r="FunctionsError",n){super(t),this.name=r,this.context=n}}class pg extends Go{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class fu extends Go{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class mu extends Go{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var $l;(function(e){e.Any="any",e.ApNortheast1="ap-northeast-1",e.ApNortheast2="ap-northeast-2",e.ApSouth1="ap-south-1",e.ApSoutheast1="ap-southeast-1",e.ApSoutheast2="ap-southeast-2",e.CaCentral1="ca-central-1",e.EuCentral1="eu-central-1",e.EuWest1="eu-west-1",e.EuWest2="eu-west-2",e.EuWest3="eu-west-3",e.SaEast1="sa-east-1",e.UsEast1="us-east-1",e.UsWest1="us-west-1",e.UsWest2="us-west-2"})($l||($l={}));var gg=function(e,t,r,n){function s(a){return a instanceof r?a:new r(function(l){l(a)})}return new(r||(r=Promise))(function(a,l){function o(d){try{u(n.next(d))}catch(h){l(h)}}function c(d){try{u(n.throw(d))}catch(h){l(h)}}function u(d){d.done?a(d.value):s(d.value).then(o,c)}u((n=n.apply(e,t||[])).next())})};class xg{constructor(t,{headers:r={},customFetch:n,region:s=$l.Any}={}){this.url=t,this.headers=r,this.region=s,this.fetch=mg(n)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t,r={}){var n;return gg(this,void 0,void 0,function*(){try{const{headers:s,method:a,body:l}=r;let o={},{region:c}=r;c||(c=this.region);const u=new URL(`${this.url}/${t}`);c&&c!=="any"&&(o["x-region"]=c,u.searchParams.set("forceFunctionRegion",c));let d;l&&(s&&!Object.prototype.hasOwnProperty.call(s,"Content-Type")||!s)&&(typeof Blob<"u"&&l instanceof Blob||l instanceof ArrayBuffer?(o["Content-Type"]="application/octet-stream",d=l):typeof l=="string"?(o["Content-Type"]="text/plain",d=l):typeof FormData<"u"&&l instanceof FormData?d=l:(o["Content-Type"]="application/json",d=JSON.stringify(l)));const h=yield this.fetch(u.toString(),{method:a||"POST",headers:Object.assign(Object.assign(Object.assign({},o),this.headers),s),body:d}).catch(j=>{throw new pg(j)}),f=h.headers.get("x-relay-error");if(f&&f==="true")throw new fu(h);if(!h.ok)throw new mu(h);let x=((n=h.headers.get("Content-Type"))!==null&&n!==void 0?n:"text/plain").split(";")[0].trim(),w;return x==="application/json"?w=yield h.json():x==="application/octet-stream"?w=yield h.blob():x==="text/event-stream"?w=h:x==="multipart/form-data"?w=yield h.formData():w=yield h.text(),{data:w,error:null,response:h}}catch(s){return{data:null,error:s,response:s instanceof mu||s instanceof fu?s.context:void 0}}})}}var Be={},qo={},Zi={},js={},ea={},ta={},yg=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},pn=yg();const vg=pn.fetch,Xh=pn.fetch.bind(pn),Yh=pn.Headers,wg=pn.Request,jg=pn.Response,vn=Object.freeze(Object.defineProperty({__proto__:null,Headers:Yh,Request:wg,Response:jg,default:Xh,fetch:vg},Symbol.toStringTag,{value:"Module"})),bg=Uf(vn);var ra={};Object.defineProperty(ra,"__esModule",{value:!0});let kg=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}};ra.default=kg;var Zh=it&&it.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ta,"__esModule",{value:!0});const _g=Zh(bg),Ng=Zh(ra);let Sg=class{constructor(t){this.shouldThrowOnError=!1,this.method=t.method,this.url=t.url,this.headers=t.headers,this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=t.shouldThrowOnError,this.signal=t.signal,this.isMaybeSingle=t.isMaybeSingle,t.fetch?this.fetch=t.fetch:typeof fetch>"u"?this.fetch=_g.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,r){return this.headers=Object.assign({},this.headers),this.headers[t]=r,this}then(t,r){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const n=this.fetch;let s=n(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async a=>{var l,o,c;let u=null,d=null,h=null,f=a.status,x=a.statusText;if(a.ok){if(this.method!=="HEAD"){const p=await a.text();p===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?d=p:d=JSON.parse(p))}const j=(l=this.headers.Prefer)===null||l===void 0?void 0:l.match(/count=(exact|planned|estimated)/),v=(o=a.headers.get("content-range"))===null||o===void 0?void 0:o.split("/");j&&v&&v.length>1&&(h=parseInt(v[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(d)&&(d.length>1?(u={code:"PGRST116",details:`Results contain ${d.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},d=null,h=null,f=406,x="Not Acceptable"):d.length===1?d=d[0]:d=null)}else{const j=await a.text();try{u=JSON.parse(j),Array.isArray(u)&&a.status===404&&(d=[],u=null,f=200,x="OK")}catch{a.status===404&&j===""?(f=204,x="No Content"):u={message:j}}if(u&&this.isMaybeSingle&&(!((c=u==null?void 0:u.details)===null||c===void 0)&&c.includes("0 rows"))&&(u=null,f=200,x="OK"),u&&this.shouldThrowOnError)throw new Ng.default(u)}return{error:u,data:d,count:h,status:f,statusText:x}});return this.shouldThrowOnError||(s=s.catch(a=>{var l,o,c;return{error:{message:`${(l=a==null?void 0:a.name)!==null&&l!==void 0?l:"FetchError"}: ${a==null?void 0:a.message}`,details:`${(o=a==null?void 0:a.stack)!==null&&o!==void 0?o:""}`,hint:"",code:`${(c=a==null?void 0:a.code)!==null&&c!==void 0?c:""}`},data:null,count:null,status:0,statusText:""}})),s.then(t,r)}returns(){return this}overrideTypes(){return this}};ta.default=Sg;var Cg=it&&it.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ea,"__esModule",{value:!0});const Eg=Cg(ta);let Pg=class extends Eg.default{select(t){let r=!1;const n=(t??"*").split("").map(s=>/\s/.test(s)&&!r?"":(s==='"'&&(r=!r),s)).join("");return this.url.searchParams.set("select",n),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(t,{ascending:r=!0,nullsFirst:n,foreignTable:s,referencedTable:a=s}={}){const l=a?`${a}.order`:"order",o=this.url.searchParams.get(l);return this.url.searchParams.set(l,`${o?`${o},`:""}${t}.${r?"asc":"desc"}${n===void 0?"":n?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:r,referencedTable:n=r}={}){const s=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(s,`${t}`),this}range(t,r,{foreignTable:n,referencedTable:s=n}={}){const a=typeof s>"u"?"offset":`${s}.offset`,l=typeof s>"u"?"limit":`${s}.limit`;return this.url.searchParams.set(a,`${t}`),this.url.searchParams.set(l,`${r-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:t=!1,verbose:r=!1,settings:n=!1,buffers:s=!1,wal:a=!1,format:l="text"}={}){var o;const c=[t?"analyze":null,r?"verbose":null,n?"settings":null,s?"buffers":null,a?"wal":null].filter(Boolean).join("|"),u=(o=this.headers.Accept)!==null&&o!==void 0?o:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${l}; for="${u}"; options=${c};`,l==="json"?this:this}rollback(){var t;return((t=this.headers.Prefer)!==null&&t!==void 0?t:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}};ea.default=Pg;var Tg=it&&it.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(js,"__esModule",{value:!0});const Og=Tg(ea);let Ig=class extends Og.default{eq(t,r){return this.url.searchParams.append(t,`eq.${r}`),this}neq(t,r){return this.url.searchParams.append(t,`neq.${r}`),this}gt(t,r){return this.url.searchParams.append(t,`gt.${r}`),this}gte(t,r){return this.url.searchParams.append(t,`gte.${r}`),this}lt(t,r){return this.url.searchParams.append(t,`lt.${r}`),this}lte(t,r){return this.url.searchParams.append(t,`lte.${r}`),this}like(t,r){return this.url.searchParams.append(t,`like.${r}`),this}likeAllOf(t,r){return this.url.searchParams.append(t,`like(all).{${r.join(",")}}`),this}likeAnyOf(t,r){return this.url.searchParams.append(t,`like(any).{${r.join(",")}}`),this}ilike(t,r){return this.url.searchParams.append(t,`ilike.${r}`),this}ilikeAllOf(t,r){return this.url.searchParams.append(t,`ilike(all).{${r.join(",")}}`),this}ilikeAnyOf(t,r){return this.url.searchParams.append(t,`ilike(any).{${r.join(",")}}`),this}is(t,r){return this.url.searchParams.append(t,`is.${r}`),this}in(t,r){const n=Array.from(new Set(r)).map(s=>typeof s=="string"&&new RegExp("[,()]").test(s)?`"${s}"`:`${s}`).join(",");return this.url.searchParams.append(t,`in.(${n})`),this}contains(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cs.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cs.{${r.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(r)}`),this}containedBy(t,r){return typeof r=="string"?this.url.searchParams.append(t,`cd.${r}`):Array.isArray(r)?this.url.searchParams.append(t,`cd.{${r.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(r)}`),this}rangeGt(t,r){return this.url.searchParams.append(t,`sr.${r}`),this}rangeGte(t,r){return this.url.searchParams.append(t,`nxl.${r}`),this}rangeLt(t,r){return this.url.searchParams.append(t,`sl.${r}`),this}rangeLte(t,r){return this.url.searchParams.append(t,`nxr.${r}`),this}rangeAdjacent(t,r){return this.url.searchParams.append(t,`adj.${r}`),this}overlaps(t,r){return typeof r=="string"?this.url.searchParams.append(t,`ov.${r}`):this.url.searchParams.append(t,`ov.{${r.join(",")}}`),this}textSearch(t,r,{config:n,type:s}={}){let a="";s==="plain"?a="pl":s==="phrase"?a="ph":s==="websearch"&&(a="w");const l=n===void 0?"":`(${n})`;return this.url.searchParams.append(t,`${a}fts${l}.${r}`),this}match(t){return Object.entries(t).forEach(([r,n])=>{this.url.searchParams.append(r,`eq.${n}`)}),this}not(t,r,n){return this.url.searchParams.append(t,`not.${r}.${n}`),this}or(t,{foreignTable:r,referencedTable:n=r}={}){const s=n?`${n}.or`:"or";return this.url.searchParams.append(s,`(${t})`),this}filter(t,r,n){return this.url.searchParams.append(t,`${r}.${n}`),this}};js.default=Ig;var Rg=it&&it.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Zi,"__esModule",{value:!0});const In=Rg(js);let Ag=class{constructor(t,{headers:r={},schema:n,fetch:s}){this.url=t,this.headers=r,this.schema=n,this.fetch=s}select(t,{head:r=!1,count:n}={}){const s=r?"HEAD":"GET";let a=!1;const l=(t??"*").split("").map(o=>/\s/.test(o)&&!a?"":(o==='"'&&(a=!a),o)).join("");return this.url.searchParams.set("select",l),n&&(this.headers.Prefer=`count=${n}`),new In.default({method:s,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(t,{count:r,defaultToNull:n=!0}={}){const s="POST",a=[];if(this.headers.Prefer&&a.push(this.headers.Prefer),r&&a.push(`count=${r}`),n||a.push("missing=default"),this.headers.Prefer=a.join(","),Array.isArray(t)){const l=t.reduce((o,c)=>o.concat(Object.keys(c)),[]);if(l.length>0){const o=[...new Set(l)].map(c=>`"${c}"`);this.url.searchParams.set("columns",o.join(","))}}return new In.default({method:s,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}upsert(t,{onConflict:r,ignoreDuplicates:n=!1,count:s,defaultToNull:a=!0}={}){const l="POST",o=[`resolution=${n?"ignore":"merge"}-duplicates`];if(r!==void 0&&this.url.searchParams.set("on_conflict",r),this.headers.Prefer&&o.push(this.headers.Prefer),s&&o.push(`count=${s}`),a||o.push("missing=default"),this.headers.Prefer=o.join(","),Array.isArray(t)){const c=t.reduce((u,d)=>u.concat(Object.keys(d)),[]);if(c.length>0){const u=[...new Set(c)].map(d=>`"${d}"`);this.url.searchParams.set("columns",u.join(","))}}return new In.default({method:l,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}update(t,{count:r}={}){const n="PATCH",s=[];return this.headers.Prefer&&s.push(this.headers.Prefer),r&&s.push(`count=${r}`),this.headers.Prefer=s.join(","),new In.default({method:n,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}delete({count:t}={}){const r="DELETE",n=[];return t&&n.push(`count=${t}`),this.headers.Prefer&&n.unshift(this.headers.Prefer),this.headers.Prefer=n.join(","),new In.default({method:r,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}};Zi.default=Ag;var na={},sa={};Object.defineProperty(sa,"__esModule",{value:!0});sa.version=void 0;sa.version="0.0.0-automated";Object.defineProperty(na,"__esModule",{value:!0});na.DEFAULT_HEADERS=void 0;const Lg=sa;na.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${Lg.version}`};var ef=it&&it.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(qo,"__esModule",{value:!0});const Mg=ef(Zi),$g=ef(js),zg=na;let Ug=class tf{constructor(t,{headers:r={},schema:n,fetch:s}={}){this.url=t,this.headers=Object.assign(Object.assign({},zg.DEFAULT_HEADERS),r),this.schemaName=n,this.fetch=s}from(t){const r=new URL(`${this.url}/${t}`);return new Mg.default(r,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new tf(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,r={},{head:n=!1,get:s=!1,count:a}={}){let l;const o=new URL(`${this.url}/rpc/${t}`);let c;n||s?(l=n?"HEAD":"GET",Object.entries(r).filter(([d,h])=>h!==void 0).map(([d,h])=>[d,Array.isArray(h)?`{${h.join(",")}}`:`${h}`]).forEach(([d,h])=>{o.searchParams.append(d,h)})):(l="POST",c=r);const u=Object.assign({},this.headers);return a&&(u.Prefer=`count=${a}`),new $g.default({method:l,url:o,headers:u,schema:this.schemaName,body:c,fetch:this.fetch,allowEmpty:!1})}};qo.default=Ug;var wn=it&&it.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Be,"__esModule",{value:!0});Be.PostgrestError=Be.PostgrestBuilder=Be.PostgrestTransformBuilder=Be.PostgrestFilterBuilder=Be.PostgrestQueryBuilder=Be.PostgrestClient=void 0;const rf=wn(qo);Be.PostgrestClient=rf.default;const nf=wn(Zi);Be.PostgrestQueryBuilder=nf.default;const sf=wn(js);Be.PostgrestFilterBuilder=sf.default;const af=wn(ea);Be.PostgrestTransformBuilder=af.default;const lf=wn(ta);Be.PostgrestBuilder=lf.default;const of=wn(ra);Be.PostgrestError=of.default;var Dg=Be.default={PostgrestClient:rf.default,PostgrestQueryBuilder:nf.default,PostgrestFilterBuilder:sf.default,PostgrestTransformBuilder:af.default,PostgrestBuilder:lf.default,PostgrestError:of.default};const{PostgrestClient:Fg,PostgrestQueryBuilder:Gy,PostgrestFilterBuilder:qy,PostgrestTransformBuilder:Ky,PostgrestBuilder:Jy,PostgrestError:Qy}=Dg;function Bg(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}const Wg=Bg(),Vg="2.11.15",Hg=`realtime-js/${Vg}`,Gg="1.0.0",cf=1e4,qg=1e3;var Kn;(function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"})(Kn||(Kn={}));var Ie;(function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"})(Ie||(Ie={}));var ht;(function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"})(ht||(ht={}));var zl;(function(e){e.websocket="websocket"})(zl||(zl={}));var gr;(function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"})(gr||(gr={}));class Kg{constructor(){this.HEADER_LENGTH=1}decode(t,r){return t.constructor===ArrayBuffer?r(this._binaryDecode(t)):r(typeof t=="string"?JSON.parse(t):{})}_binaryDecode(t){const r=new DataView(t),n=new TextDecoder;return this._decodeBroadcast(t,r,n)}_decodeBroadcast(t,r,n){const s=r.getUint8(1),a=r.getUint8(2);let l=this.HEADER_LENGTH+2;const o=n.decode(t.slice(l,l+s));l=l+s;const c=n.decode(t.slice(l,l+a));l=l+a;const u=JSON.parse(n.decode(t.slice(l,t.byteLength)));return{ref:null,topic:o,event:c,payload:u}}}class uf{constructor(t,r){this.callback=t,this.timerCalc=r,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=r}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var te;(function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"})(te||(te={}));const pu=(e,t,r={})=>{var n;const s=(n=r.skipTypes)!==null&&n!==void 0?n:[];return Object.keys(t).reduce((a,l)=>(a[l]=Jg(l,e,t,s),a),{})},Jg=(e,t,r,n)=>{const s=t.find(o=>o.name===e),a=s==null?void 0:s.type,l=r[e];return a&&!n.includes(a)?df(a,l):Ul(l)},df=(e,t)=>{if(e.charAt(0)==="_"){const r=e.slice(1,e.length);return Zg(t,r)}switch(e){case te.bool:return Qg(t);case te.float4:case te.float8:case te.int2:case te.int4:case te.int8:case te.numeric:case te.oid:return Xg(t);case te.json:case te.jsonb:return Yg(t);case te.timestamp:return e0(t);case te.abstime:case te.date:case te.daterange:case te.int4range:case te.int8range:case te.money:case te.reltime:case te.text:case te.time:case te.timestamptz:case te.timetz:case te.tsrange:case te.tstzrange:return Ul(t);default:return Ul(t)}},Ul=e=>e,Qg=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},Xg=e=>{if(typeof e=="string"){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},Yg=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){return console.log(`JSON parse error: ${t}`),e}return e},Zg=(e,t)=>{if(typeof e!="string")return e;const r=e.length-1,n=e[r];if(e[0]==="{"&&n==="}"){let a;const l=e.slice(1,r);try{a=JSON.parse("["+l+"]")}catch{a=l?l.split(","):[]}return a.map(o=>df(t,o))}return e},e0=e=>typeof e=="string"?e.replace(" ","T"):e,hf=e=>{let t=e;return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")};class Aa{constructor(t,r,n={},s=cf){this.channel=t,this.event=r,this.payload=n,this.timeout=s,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,r){var n;return this._hasReceived(t)&&r((n=this.receivedResp)===null||n===void 0?void 0:n.response),this.recHooks.push({status:t,callback:r}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=r=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=r,this._matchReceive(r)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,r){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:r})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:r}){this.recHooks.filter(n=>n.status===t).forEach(n=>n.callback(r))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var gu;(function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"})(gu||(gu={}));class Jn{constructor(t,r){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const n=(r==null?void 0:r.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(n.state,{},s=>{const{onJoin:a,onLeave:l,onSync:o}=this.caller;this.joinRef=this.channel._joinRef(),this.state=Jn.syncState(this.state,s,a,l),this.pendingDiffs.forEach(c=>{this.state=Jn.syncDiff(this.state,c,a,l)}),this.pendingDiffs=[],o()}),this.channel._on(n.diff,{},s=>{const{onJoin:a,onLeave:l,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(s):(this.state=Jn.syncDiff(this.state,s,a,l),o())}),this.onJoin((s,a,l)=>{this.channel._trigger("presence",{event:"join",key:s,currentPresences:a,newPresences:l})}),this.onLeave((s,a,l)=>{this.channel._trigger("presence",{event:"leave",key:s,currentPresences:a,leftPresences:l})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,r,n,s){const a=this.cloneDeep(t),l=this.transformState(r),o={},c={};return this.map(a,(u,d)=>{l[u]||(c[u]=d)}),this.map(l,(u,d)=>{const h=a[u];if(h){const f=d.map(v=>v.presence_ref),x=h.map(v=>v.presence_ref),w=d.filter(v=>x.indexOf(v.presence_ref)<0),j=h.filter(v=>f.indexOf(v.presence_ref)<0);w.length>0&&(o[u]=w),j.length>0&&(c[u]=j)}else o[u]=d}),this.syncDiff(a,{joins:o,leaves:c},n,s)}static syncDiff(t,r,n,s){const{joins:a,leaves:l}={joins:this.transformState(r.joins),leaves:this.transformState(r.leaves)};return n||(n=()=>{}),s||(s=()=>{}),this.map(a,(o,c)=>{var u;const d=(u=t[o])!==null&&u!==void 0?u:[];if(t[o]=this.cloneDeep(c),d.length>0){const h=t[o].map(x=>x.presence_ref),f=d.filter(x=>h.indexOf(x.presence_ref)<0);t[o].unshift(...f)}n(o,d,c)}),this.map(l,(o,c)=>{let u=t[o];if(!u)return;const d=c.map(h=>h.presence_ref);u=u.filter(h=>d.indexOf(h.presence_ref)<0),t[o]=u,s(o,u,c),u.length===0&&delete t[o]}),t}static map(t,r){return Object.getOwnPropertyNames(t).map(n=>r(n,t[n]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((r,n)=>{const s=t[n];return"metas"in s?r[n]=s.metas.map(a=>(a.presence_ref=a.phx_ref,delete a.phx_ref,delete a.phx_ref_prev,a)):r[n]=s,r},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var xu;(function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"})(xu||(xu={}));var yu;(function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes",e.SYSTEM="system"})(yu||(yu={}));var St;(function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"})(St||(St={}));class Ko{constructor(t,r={config:{}},n){this.topic=t,this.params=r,this.socket=n,this.bindings={},this.state=Ie.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},r.config),this.timeout=this.socket.timeout,this.joinPush=new Aa(this,ht.join,this.params,this.timeout),this.rejoinTimer=new uf(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=Ie.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(s=>s.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=Ie.closed,this.socket._remove(this)}),this._onError(s=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,s),this.state=Ie.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=Ie.errored,this.rejoinTimer.scheduleTimeout())}),this._on(ht.reply,{},(s,a)=>{this._trigger(this._replyEventName(a),s)}),this.presence=new Jn(this),this.broadcastEndpointURL=hf(this.socket.endPoint)+"/api/broadcast",this.private=this.params.config.private||!1}subscribe(t,r=this.timeout){var n,s;if(this.socket.isConnected()||this.socket.connect(),this.state==Ie.closed){const{config:{broadcast:a,presence:l,private:o}}=this.params;this._onError(d=>t==null?void 0:t(St.CHANNEL_ERROR,d)),this._onClose(()=>t==null?void 0:t(St.CLOSED));const c={},u={broadcast:a,presence:l,postgres_changes:(s=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(d=>d.filter))!==null&&s!==void 0?s:[],private:o};this.socket.accessTokenValue&&(c.access_token=this.socket.accessTokenValue),this.updateJoinPayload(Object.assign({config:u},c)),this.joinedOnce=!0,this._rejoin(r),this.joinPush.receive("ok",async({postgres_changes:d})=>{var h;if(this.socket.setAuth(),d===void 0){t==null||t(St.SUBSCRIBED);return}else{const f=this.bindings.postgres_changes,x=(h=f==null?void 0:f.length)!==null&&h!==void 0?h:0,w=[];for(let j=0;j<x;j++){const v=f[j],{filter:{event:p,schema:g,table:y,filter:k}}=v,_=d&&d[j];if(_&&_.event===p&&_.schema===g&&_.table===y&&_.filter===k)w.push(Object.assign(Object.assign({},v),{id:_.id}));else{this.unsubscribe(),this.state=Ie.errored,t==null||t(St.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=w,t&&t(St.SUBSCRIBED);return}}).receive("error",d=>{this.state=Ie.errored,t==null||t(St.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(d).join(", ")||"error")))}).receive("timeout",()=>{t==null||t(St.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(t,r={}){return await this.send({type:"presence",event:"track",payload:t},r.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,r,n){return this._on(t,r,n)}async send(t,r={}){var n,s;if(!this._canPush()&&t.type==="broadcast"){const{event:a,payload:l}=t,c={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:a,payload:l,private:this.private}]})};try{const u=await this._fetchWithTimeout(this.broadcastEndpointURL,c,(n=r.timeout)!==null&&n!==void 0?n:this.timeout);return await((s=u.body)===null||s===void 0?void 0:s.cancel()),u.ok?"ok":"error"}catch(u){return u.name==="AbortError"?"timed out":"error"}}else return new Promise(a=>{var l,o,c;const u=this._push(t.type,t,r.timeout||this.timeout);t.type==="broadcast"&&!(!((c=(o=(l=this.params)===null||l===void 0?void 0:l.config)===null||o===void 0?void 0:o.broadcast)===null||c===void 0)&&c.ack)&&a("ok"),u.receive("ok",()=>a("ok")),u.receive("error",()=>a("error")),u.receive("timeout",()=>a("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=Ie.leaving;const r=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(ht.close,"leave",this._joinRef())};this.joinPush.destroy();let n=null;return new Promise(s=>{n=new Aa(this,ht.leave,{},t),n.receive("ok",()=>{r(),s("ok")}).receive("timeout",()=>{r(),s("timed out")}).receive("error",()=>{s("error")}),n.send(),this._canPush()||n.trigger("ok",{})}).finally(()=>{n==null||n.destroy()})}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.rejoinTimer&&clearTimeout(this.rejoinTimer.timer),this.joinPush.destroy()}async _fetchWithTimeout(t,r,n){const s=new AbortController,a=setTimeout(()=>s.abort(),n),l=await this.socket.fetch(t,Object.assign(Object.assign({},r),{signal:s.signal}));return clearTimeout(a),l}_push(t,r,n=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let s=new Aa(this,t,r,n);return this._canPush()?s.send():(s.startTimeout(),this.pushBuffer.push(s)),s}_onMessage(t,r,n){return r}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,r,n){var s,a;const l=t.toLocaleLowerCase(),{close:o,error:c,leave:u,join:d}=ht;if(n&&[o,c,u,d].indexOf(l)>=0&&n!==this._joinRef())return;let f=this._onMessage(l,r,n);if(r&&!f)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(l)?(s=this.bindings.postgres_changes)===null||s===void 0||s.filter(x=>{var w,j,v;return((w=x.filter)===null||w===void 0?void 0:w.event)==="*"||((v=(j=x.filter)===null||j===void 0?void 0:j.event)===null||v===void 0?void 0:v.toLocaleLowerCase())===l}).map(x=>x.callback(f,n)):(a=this.bindings[l])===null||a===void 0||a.filter(x=>{var w,j,v,p,g,y;if(["broadcast","presence","postgres_changes"].includes(l))if("id"in x){const k=x.id,_=(w=x.filter)===null||w===void 0?void 0:w.event;return k&&((j=r.ids)===null||j===void 0?void 0:j.includes(k))&&(_==="*"||(_==null?void 0:_.toLocaleLowerCase())===((v=r.data)===null||v===void 0?void 0:v.type.toLocaleLowerCase()))}else{const k=(g=(p=x==null?void 0:x.filter)===null||p===void 0?void 0:p.event)===null||g===void 0?void 0:g.toLocaleLowerCase();return k==="*"||k===((y=r==null?void 0:r.event)===null||y===void 0?void 0:y.toLocaleLowerCase())}else return x.type.toLocaleLowerCase()===l}).map(x=>{if(typeof f=="object"&&"ids"in f){const w=f.data,{schema:j,table:v,commit_timestamp:p,type:g,errors:y}=w;f=Object.assign(Object.assign({},{schema:j,table:v,commit_timestamp:p,eventType:g,new:{},old:{},errors:y}),this._getPayloadRecords(w))}x.callback(f,n)})}_isClosed(){return this.state===Ie.closed}_isJoined(){return this.state===Ie.joined}_isJoining(){return this.state===Ie.joining}_isLeaving(){return this.state===Ie.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,r,n){const s=t.toLocaleLowerCase(),a={type:s,filter:r,callback:n};return this.bindings[s]?this.bindings[s].push(a):this.bindings[s]=[a],this}_off(t,r){const n=t.toLocaleLowerCase();return this.bindings[n]=this.bindings[n].filter(s=>{var a;return!(((a=s.type)===null||a===void 0?void 0:a.toLocaleLowerCase())===n&&Ko.isEqual(s.filter,r))}),this}static isEqual(t,r){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(const n in t)if(t[n]!==r[n])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(ht.close,{},t)}_onError(t){this._on(ht.error,{},r=>t(r))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=Ie.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const r={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(r.new=pu(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(r.old=pu(t.columns,t.old_record)),r}}const vu=()=>{},t0=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class r0{constructor(t,r){var n;this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=cf,this.heartbeatIntervalMs=25e3,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=vu,this.ref=0,this.logger=vu,this.conn=null,this.sendBuffer=[],this.serializer=new Kg,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._resolveFetch=a=>{let l;return a?l=a:typeof fetch>"u"?l=(...o)=>ws(async()=>{const{default:c}=await Promise.resolve().then(()=>vn);return{default:c}},void 0).then(({default:c})=>c(...o)):l=fetch,(...o)=>l(...o)},this.endPoint=`${t}/${zl.websocket}`,this.httpEndpoint=hf(t),r!=null&&r.transport?this.transport=r.transport:this.transport=null,r!=null&&r.params&&(this.params=r.params),r!=null&&r.timeout&&(this.timeout=r.timeout),r!=null&&r.logger&&(this.logger=r.logger),(r!=null&&r.logLevel||r!=null&&r.log_level)&&(this.logLevel=r.logLevel||r.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),r!=null&&r.heartbeatIntervalMs&&(this.heartbeatIntervalMs=r.heartbeatIntervalMs);const s=(n=r==null?void 0:r.params)===null||n===void 0?void 0:n.apikey;if(s&&(this.accessTokenValue=s,this.apiKey=s),this.reconnectAfterMs=r!=null&&r.reconnectAfterMs?r.reconnectAfterMs:a=>[1e3,2e3,5e3,1e4][a-1]||1e4,this.encode=r!=null&&r.encode?r.encode:(a,l)=>l(JSON.stringify(a)),this.decode=r!=null&&r.decode?r.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new uf(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(r==null?void 0:r.fetch),r!=null&&r.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.worker=(r==null?void 0:r.worker)||!1,this.workerUrl=r==null?void 0:r.workerUrl}this.accessToken=(r==null?void 0:r.accessToken)||null}connect(){if(!this.conn){if(this.transport||(this.transport=Wg),!this.transport)throw new Error("No transport provided");this.conn=new this.transport(this.endpointURL()),this.setupConnection()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:Gg}))}disconnect(t,r){this.conn&&(this.conn.onclose=function(){},t?this.conn.close(t,r??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset(),this.channels.forEach(n=>n.teardown()))}getChannels(){return this.channels}async removeChannel(t){const r=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),r}async removeAllChannels(){const t=await Promise.all(this.channels.map(r=>r.unsubscribe()));return this.channels=[],this.disconnect(),t}log(t,r,n){this.logger(t,r,n)}connectionState(){switch(this.conn&&this.conn.readyState){case Kn.connecting:return gr.Connecting;case Kn.open:return gr.Open;case Kn.closing:return gr.Closing;default:return gr.Closed}}isConnected(){return this.connectionState()===gr.Open}channel(t,r={config:{}}){const n=`realtime:${t}`,s=this.getChannels().find(a=>a.topic===n);if(s)return s;{const a=new Ko(`realtime:${t}`,r,this);return this.channels.push(a),a}}push(t){const{topic:r,event:n,payload:s,ref:a}=t,l=()=>{this.encode(t,o=>{var c;(c=this.conn)===null||c===void 0||c.send(o)})};this.log("push",`${r} ${n} (${a})`,s),this.isConnected()?l():this.sendBuffer.push(l)}async setAuth(t=null){let r=t||this.accessToken&&await this.accessToken()||this.accessTokenValue;this.accessTokenValue!=r&&(this.accessTokenValue=r,this.channels.forEach(n=>{const s={access_token:r,version:Hg};r&&n.updateJoinPayload(s),n.joinedOnce&&n._isJoined()&&n._push(ht.access_token,{access_token:r})}))}async sendHeartbeat(){var t;if(!this.isConnected()){this.heartbeatCallback("disconnected");return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),this.heartbeatCallback("timeout"),(t=this.conn)===null||t===void 0||t.close(qg,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.heartbeatCallback("sent"),await this.setAuth()}onHeartbeat(t){this.heartbeatCallback=t}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let r=this.channels.find(n=>n.topic===t&&(n._isJoined()||n._isJoining()));r&&(this.log("transport",`leaving duplicate topic "${t}"`),r.unsubscribe())}_remove(t){this.channels=this.channels.filter(r=>r.topic!==t.topic)}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t))}_onConnMessage(t){this.decode(t.data,r=>{let{topic:n,event:s,payload:a,ref:l}=r;n==="phoenix"&&s==="phx_reply"&&this.heartbeatCallback(r.payload.status=="ok"?"ok":"error"),l&&l===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null),this.log("receive",`${a.status||""} ${n} ${s} ${l&&"("+l+")"||""}`,a),Array.from(this.channels).filter(o=>o._isMember(n)).forEach(o=>o._trigger(s,a,l)),this.stateChangeCallbacks.message.forEach(o=>o(r))})}_onConnOpen(){this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this.reconnectTimer.reset(),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this.stateChangeCallbacks.open.forEach(t=>t())}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const t=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(t),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this.workerRef.terminate()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(t){this.log("transport","close",t),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(r=>r(t))}_onConnError(t){this.log("transport",`${t}`),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(r=>r(t))}_triggerChanError(){this.channels.forEach(t=>t._trigger(ht.error))}_appendParams(t,r){if(Object.keys(r).length===0)return t;const n=t.match(/\?/)?"&":"?",s=new URLSearchParams(r);return`${t}${n}${s}`}_workerObjectUrl(t){let r;if(t)r=t;else{const n=new Blob([t0],{type:"application/javascript"});r=URL.createObjectURL(n)}return r}}class Jo extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function je(e){return typeof e=="object"&&e!==null&&"__isStorageError"in e}class n0 extends Jo{constructor(t,r,n){super(t),this.name="StorageApiError",this.status=r,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class Dl extends Jo{constructor(t,r){super(t),this.name="StorageUnknownError",this.originalError=r}}var s0=function(e,t,r,n){function s(a){return a instanceof r?a:new r(function(l){l(a)})}return new(r||(r=Promise))(function(a,l){function o(d){try{u(n.next(d))}catch(h){l(h)}}function c(d){try{u(n.throw(d))}catch(h){l(h)}}function u(d){d.done?a(d.value):s(d.value).then(o,c)}u((n=n.apply(e,t||[])).next())})};const ff=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>ws(async()=>{const{default:n}=await Promise.resolve().then(()=>vn);return{default:n}},void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)},i0=()=>s0(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield ws(()=>Promise.resolve().then(()=>vn),void 0)).Response:Response}),Fl=e=>{if(Array.isArray(e))return e.map(r=>Fl(r));if(typeof e=="function"||e!==Object(e))return e;const t={};return Object.entries(e).forEach(([r,n])=>{const s=r.replace(/([-_][a-z])/gi,a=>a.toUpperCase().replace(/[-_]/g,""));t[s]=Fl(n)}),t},a0=e=>{if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)};var Ir=function(e,t,r,n){function s(a){return a instanceof r?a:new r(function(l){l(a)})}return new(r||(r=Promise))(function(a,l){function o(d){try{u(n.next(d))}catch(h){l(h)}}function c(d){try{u(n.throw(d))}catch(h){l(h)}}function u(d){d.done?a(d.value):s(d.value).then(o,c)}u((n=n.apply(e,t||[])).next())})};const La=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),l0=(e,t,r)=>Ir(void 0,void 0,void 0,function*(){const n=yield i0();e instanceof n&&!(r!=null&&r.noResolveJson)?e.json().then(s=>{const a=e.status||500,l=(s==null?void 0:s.statusCode)||a+"";t(new n0(La(s),a,l))}).catch(s=>{t(new Dl(La(s),s))}):t(new Dl(La(e),e))}),o0=(e,t,r,n)=>{const s={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"||!n?s:(a0(n)?(s.headers=Object.assign({"Content-Type":"application/json"},t==null?void 0:t.headers),s.body=JSON.stringify(n)):s.body=n,Object.assign(Object.assign({},s),r))};function bs(e,t,r,n,s,a){return Ir(this,void 0,void 0,function*(){return new Promise((l,o)=>{e(r,o0(t,n,s,a)).then(c=>{if(!c.ok)throw c;return n!=null&&n.noResolveJson?c:c.json()}).then(c=>l(c)).catch(c=>l0(c,o,n))})})}function Ii(e,t,r,n){return Ir(this,void 0,void 0,function*(){return bs(e,"GET",t,r,n)})}function Ct(e,t,r,n,s){return Ir(this,void 0,void 0,function*(){return bs(e,"POST",t,n,s,r)})}function Bl(e,t,r,n,s){return Ir(this,void 0,void 0,function*(){return bs(e,"PUT",t,n,s,r)})}function c0(e,t,r,n){return Ir(this,void 0,void 0,function*(){return bs(e,"HEAD",t,Object.assign(Object.assign({},r),{noResolveJson:!0}),n)})}function mf(e,t,r,n,s){return Ir(this,void 0,void 0,function*(){return bs(e,"DELETE",t,n,s,r)})}var De=function(e,t,r,n){function s(a){return a instanceof r?a:new r(function(l){l(a)})}return new(r||(r=Promise))(function(a,l){function o(d){try{u(n.next(d))}catch(h){l(h)}}function c(d){try{u(n.throw(d))}catch(h){l(h)}}function u(d){d.done?a(d.value):s(d.value).then(o,c)}u((n=n.apply(e,t||[])).next())})};const u0={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},wu={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class d0{constructor(t,r={},n,s){this.url=t,this.headers=r,this.bucketId=n,this.fetch=ff(s)}uploadOrUpdate(t,r,n,s){return De(this,void 0,void 0,function*(){try{let a;const l=Object.assign(Object.assign({},wu),s);let o=Object.assign(Object.assign({},this.headers),t==="POST"&&{"x-upsert":String(l.upsert)});const c=l.metadata;typeof Blob<"u"&&n instanceof Blob?(a=new FormData,a.append("cacheControl",l.cacheControl),c&&a.append("metadata",this.encodeMetadata(c)),a.append("",n)):typeof FormData<"u"&&n instanceof FormData?(a=n,a.append("cacheControl",l.cacheControl),c&&a.append("metadata",this.encodeMetadata(c))):(a=n,o["cache-control"]=`max-age=${l.cacheControl}`,o["content-type"]=l.contentType,c&&(o["x-metadata"]=this.toBase64(this.encodeMetadata(c)))),s!=null&&s.headers&&(o=Object.assign(Object.assign({},o),s.headers));const u=this._removeEmptyFolders(r),d=this._getFinalPath(u),h=yield(t=="PUT"?Bl:Ct)(this.fetch,`${this.url}/object/${d}`,a,Object.assign({headers:o},l!=null&&l.duplex?{duplex:l.duplex}:{}));return{data:{path:u,id:h.Id,fullPath:h.Key},error:null}}catch(a){if(je(a))return{data:null,error:a};throw a}})}upload(t,r,n){return De(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",t,r,n)})}uploadToSignedUrl(t,r,n,s){return De(this,void 0,void 0,function*(){const a=this._removeEmptyFolders(t),l=this._getFinalPath(a),o=new URL(this.url+`/object/upload/sign/${l}`);o.searchParams.set("token",r);try{let c;const u=Object.assign({upsert:wu.upsert},s),d=Object.assign(Object.assign({},this.headers),{"x-upsert":String(u.upsert)});typeof Blob<"u"&&n instanceof Blob?(c=new FormData,c.append("cacheControl",u.cacheControl),c.append("",n)):typeof FormData<"u"&&n instanceof FormData?(c=n,c.append("cacheControl",u.cacheControl)):(c=n,d["cache-control"]=`max-age=${u.cacheControl}`,d["content-type"]=u.contentType);const h=yield Bl(this.fetch,o.toString(),c,{headers:d});return{data:{path:a,fullPath:h.Key},error:null}}catch(c){if(je(c))return{data:null,error:c};throw c}})}createSignedUploadUrl(t,r){return De(this,void 0,void 0,function*(){try{let n=this._getFinalPath(t);const s=Object.assign({},this.headers);r!=null&&r.upsert&&(s["x-upsert"]="true");const a=yield Ct(this.fetch,`${this.url}/object/upload/sign/${n}`,{},{headers:s}),l=new URL(this.url+a.url),o=l.searchParams.get("token");if(!o)throw new Jo("No token returned by API");return{data:{signedUrl:l.toString(),path:t,token:o},error:null}}catch(n){if(je(n))return{data:null,error:n};throw n}})}update(t,r,n){return De(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",t,r,n)})}move(t,r,n){return De(this,void 0,void 0,function*(){try{return{data:yield Ct(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers}),error:null}}catch(s){if(je(s))return{data:null,error:s};throw s}})}copy(t,r,n){return De(this,void 0,void 0,function*(){try{return{data:{path:(yield Ct(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:r,destinationBucket:n==null?void 0:n.destinationBucket},{headers:this.headers})).Key},error:null}}catch(s){if(je(s))return{data:null,error:s};throw s}})}createSignedUrl(t,r,n){return De(this,void 0,void 0,function*(){try{let s=this._getFinalPath(t),a=yield Ct(this.fetch,`${this.url}/object/sign/${s}`,Object.assign({expiresIn:r},n!=null&&n.transform?{transform:n.transform}:{}),{headers:this.headers});const l=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return a={signedUrl:encodeURI(`${this.url}${a.signedURL}${l}`)},{data:a,error:null}}catch(s){if(je(s))return{data:null,error:s};throw s}})}createSignedUrls(t,r,n){return De(this,void 0,void 0,function*(){try{const s=yield Ct(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:r,paths:t},{headers:this.headers}),a=n!=null&&n.download?`&download=${n.download===!0?"":n.download}`:"";return{data:s.map(l=>Object.assign(Object.assign({},l),{signedUrl:l.signedURL?encodeURI(`${this.url}${l.signedURL}${a}`):null})),error:null}}catch(s){if(je(s))return{data:null,error:s};throw s}})}download(t,r){return De(this,void 0,void 0,function*(){const s=typeof(r==null?void 0:r.transform)<"u"?"render/image/authenticated":"object",a=this.transformOptsToQueryString((r==null?void 0:r.transform)||{}),l=a?`?${a}`:"";try{const o=this._getFinalPath(t);return{data:yield(yield Ii(this.fetch,`${this.url}/${s}/${o}${l}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(o){if(je(o))return{data:null,error:o};throw o}})}info(t){return De(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{const n=yield Ii(this.fetch,`${this.url}/object/info/${r}`,{headers:this.headers});return{data:Fl(n),error:null}}catch(n){if(je(n))return{data:null,error:n};throw n}})}exists(t){return De(this,void 0,void 0,function*(){const r=this._getFinalPath(t);try{return yield c0(this.fetch,`${this.url}/object/${r}`,{headers:this.headers}),{data:!0,error:null}}catch(n){if(je(n)&&n instanceof Dl){const s=n.originalError;if([400,404].includes(s==null?void 0:s.status))return{data:!1,error:n}}throw n}})}getPublicUrl(t,r){const n=this._getFinalPath(t),s=[],a=r!=null&&r.download?`download=${r.download===!0?"":r.download}`:"";a!==""&&s.push(a);const o=typeof(r==null?void 0:r.transform)<"u"?"render/image":"object",c=this.transformOptsToQueryString((r==null?void 0:r.transform)||{});c!==""&&s.push(c);let u=s.join("&");return u!==""&&(u=`?${u}`),{data:{publicUrl:encodeURI(`${this.url}/${o}/public/${n}${u}`)}}}remove(t){return De(this,void 0,void 0,function*(){try{return{data:yield mf(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(r){if(je(r))return{data:null,error:r};throw r}})}list(t,r,n){return De(this,void 0,void 0,function*(){try{const s=Object.assign(Object.assign(Object.assign({},u0),r),{prefix:t||""});return{data:yield Ct(this.fetch,`${this.url}/object/list/${this.bucketId}`,s,{headers:this.headers},n),error:null}}catch(s){if(je(s))return{data:null,error:s};throw s}})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const r=[];return t.width&&r.push(`width=${t.width}`),t.height&&r.push(`height=${t.height}`),t.resize&&r.push(`resize=${t.resize}`),t.format&&r.push(`format=${t.format}`),t.quality&&r.push(`quality=${t.quality}`),r.join("&")}}const h0="2.10.4",f0={"X-Client-Info":`storage-js/${h0}`};var Lr=function(e,t,r,n){function s(a){return a instanceof r?a:new r(function(l){l(a)})}return new(r||(r=Promise))(function(a,l){function o(d){try{u(n.next(d))}catch(h){l(h)}}function c(d){try{u(n.throw(d))}catch(h){l(h)}}function u(d){d.done?a(d.value):s(d.value).then(o,c)}u((n=n.apply(e,t||[])).next())})};class m0{constructor(t,r={},n,s){const a=new URL(t);s!=null&&s.useNewHostname&&/supabase\.(co|in|red)$/.test(a.hostname)&&!a.hostname.includes("storage.supabase.")&&(a.hostname=a.hostname.replace("supabase.","storage.supabase.")),this.url=a.href,this.headers=Object.assign(Object.assign({},f0),r),this.fetch=ff(n)}listBuckets(){return Lr(this,void 0,void 0,function*(){try{return{data:yield Ii(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if(je(t))return{data:null,error:t};throw t}})}getBucket(t){return Lr(this,void 0,void 0,function*(){try{return{data:yield Ii(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(r){if(je(r))return{data:null,error:r};throw r}})}createBucket(t,r={public:!1}){return Lr(this,void 0,void 0,function*(){try{return{data:yield Ct(this.fetch,`${this.url}/bucket`,{id:t,name:t,type:r.type,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(je(n))return{data:null,error:n};throw n}})}updateBucket(t,r){return Lr(this,void 0,void 0,function*(){try{return{data:yield Bl(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(je(n))return{data:null,error:n};throw n}})}emptyBucket(t){return Lr(this,void 0,void 0,function*(){try{return{data:yield Ct(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(r){if(je(r))return{data:null,error:r};throw r}})}deleteBucket(t){return Lr(this,void 0,void 0,function*(){try{return{data:yield mf(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(r){if(je(r))return{data:null,error:r};throw r}})}}class p0 extends m0{constructor(t,r={},n,s){super(t,r,n,s)}from(t){return new d0(this.url,this.headers,t,this.fetch)}}const g0="2.53.0";let zn="";typeof Deno<"u"?zn="deno":typeof document<"u"?zn="web":typeof navigator<"u"&&navigator.product==="ReactNative"?zn="react-native":zn="node";const x0={"X-Client-Info":`supabase-js-${zn}/${g0}`},y0={headers:x0},v0={schema:"public"},w0={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},j0={};var b0=function(e,t,r,n){function s(a){return a instanceof r?a:new r(function(l){l(a)})}return new(r||(r=Promise))(function(a,l){function o(d){try{u(n.next(d))}catch(h){l(h)}}function c(d){try{u(n.throw(d))}catch(h){l(h)}}function u(d){d.done?a(d.value):s(d.value).then(o,c)}u((n=n.apply(e,t||[])).next())})};const k0=e=>{let t;return e?t=e:typeof fetch>"u"?t=Xh:t=fetch,(...r)=>t(...r)},_0=()=>typeof Headers>"u"?Yh:Headers,N0=(e,t,r)=>{const n=k0(r),s=_0();return(a,l)=>b0(void 0,void 0,void 0,function*(){var o;const c=(o=yield t())!==null&&o!==void 0?o:e;let u=new s(l==null?void 0:l.headers);return u.has("apikey")||u.set("apikey",e),u.has("Authorization")||u.set("Authorization",`Bearer ${c}`),n(a,Object.assign(Object.assign({},l),{headers:u}))})};var S0=function(e,t,r,n){function s(a){return a instanceof r?a:new r(function(l){l(a)})}return new(r||(r=Promise))(function(a,l){function o(d){try{u(n.next(d))}catch(h){l(h)}}function c(d){try{u(n.throw(d))}catch(h){l(h)}}function u(d){d.done?a(d.value):s(d.value).then(o,c)}u((n=n.apply(e,t||[])).next())})};function C0(e){return e.endsWith("/")?e:e+"/"}function E0(e,t){var r,n;const{db:s,auth:a,realtime:l,global:o}=e,{db:c,auth:u,realtime:d,global:h}=t,f={db:Object.assign(Object.assign({},c),s),auth:Object.assign(Object.assign({},u),a),realtime:Object.assign(Object.assign({},d),l),storage:{},global:Object.assign(Object.assign(Object.assign({},h),o),{headers:Object.assign(Object.assign({},(r=h==null?void 0:h.headers)!==null&&r!==void 0?r:{}),(n=o==null?void 0:o.headers)!==null&&n!==void 0?n:{})}),accessToken:()=>S0(this,void 0,void 0,function*(){return""})};return e.accessToken?f.accessToken=e.accessToken:delete f.accessToken,f}const pf="2.71.1",Fr=30*1e3,Wl=3,Ma=Wl*Fr,P0="http://localhost:9999",T0="supabase.auth.token",O0={"X-Client-Info":`gotrue-js/${pf}`},Vl="X-Supabase-Api-Version",gf={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},I0=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,R0=10*60*1e3;class Qo extends Error{constructor(t,r,n){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=n}}function H(e){return typeof e=="object"&&e!==null&&"__isAuthError"in e}class A0 extends Qo{constructor(t,r,n){super(t,r,n),this.name="AuthApiError",this.status=r,this.code=n}}function L0(e){return H(e)&&e.name==="AuthApiError"}class xf extends Qo{constructor(t,r){super(t),this.name="AuthUnknownError",this.originalError=r}}class or extends Qo{constructor(t,r,n,s){super(t,n,s),this.name=r,this.status=n}}class Ft extends or{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function M0(e){return H(e)&&e.name==="AuthSessionMissingError"}class Ws extends or{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Vs extends or{constructor(t){super(t,"AuthInvalidCredentialsError",400,void 0)}}class Hs extends or{constructor(t,r=null){super(t,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function $0(e){return H(e)&&e.name==="AuthImplicitGrantRedirectError"}class ju extends or{constructor(t,r=null){super(t,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class Hl extends or{constructor(t,r){super(t,"AuthRetryableFetchError",r,void 0)}}function $a(e){return H(e)&&e.name==="AuthRetryableFetchError"}class bu extends or{constructor(t,r,n){super(t,"AuthWeakPasswordError",r,"weak_password"),this.reasons=n}}class Gl extends or{constructor(t){super(t,"AuthInvalidJwtError",400,"invalid_jwt")}}const Ri="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),ku=` 	
\r=`.split(""),z0=(()=>{const e=new Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<ku.length;t+=1)e[ku[t].charCodeAt(0)]=-2;for(let t=0;t<Ri.length;t+=1)e[Ri[t].charCodeAt(0)]=t;return e})();function _u(e,t,r){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(Ri[n]),t.queuedBits-=6}else if(t.queuedBits>0)for(t.queue=t.queue<<6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(Ri[n]),t.queuedBits-=6}}function yf(e,t,r){const n=z0[e];if(n>-1)for(t.queue=t.queue<<6|n,t.queuedBits+=6;t.queuedBits>=8;)r(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}}function Nu(e){const t=[],r=l=>{t.push(String.fromCodePoint(l))},n={utf8seq:0,codepoint:0},s={queue:0,queuedBits:0},a=l=>{F0(l,n,r)};for(let l=0;l<e.length;l+=1)yf(e.charCodeAt(l),s,a);return t.join("")}function U0(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function D0(e,t){for(let r=0;r<e.length;r+=1){let n=e.charCodeAt(r);if(n>55295&&n<=56319){const s=(n-55296)*1024&65535;n=(e.charCodeAt(r+1)-56320&65535|s)+65536,r+=1}U0(n,t)}}function F0(e,t,r){if(t.utf8seq===0){if(e<=127){r(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw new Error("Invalid UTF-8 sequence");t.utf8seq-=1}else if(t.utf8seq>0){if(e<=127)throw new Error("Invalid UTF-8 sequence");t.codepoint=t.codepoint<<6|e&63,t.utf8seq-=1,t.utf8seq===0&&r(t.codepoint)}}function B0(e){const t=[],r={queue:0,queuedBits:0},n=s=>{t.push(s)};for(let s=0;s<e.length;s+=1)yf(e.charCodeAt(s),r,n);return new Uint8Array(t)}function W0(e){const t=[];return D0(e,r=>t.push(r)),new Uint8Array(t)}function V0(e){const t=[],r={queue:0,queuedBits:0},n=s=>{t.push(s)};return e.forEach(s=>_u(s,r,n)),_u(null,r,n),t.join("")}function H0(e){return Math.round(Date.now()/1e3)+e}function G0(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}const ct=()=>typeof window<"u"&&typeof document<"u",ur={tested:!1,writable:!1},vf=()=>{if(!ct())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(ur.tested)return ur.writable;const e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),ur.tested=!0,ur.writable=!0}catch{ur.tested=!0,ur.writable=!1}return ur.writable};function q0(e){const t={},r=new URL(e);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((s,a)=>{t[a]=s})}catch{}return r.searchParams.forEach((n,s)=>{t[s]=n}),t}const wf=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...r)=>ws(async()=>{const{default:n}=await Promise.resolve().then(()=>vn);return{default:n}},void 0).then(({default:n})=>n(...r)):t=fetch,(...r)=>t(...r)},K0=e=>typeof e=="object"&&e!==null&&"status"in e&&"ok"in e&&"json"in e&&typeof e.json=="function",Br=async(e,t,r)=>{await e.setItem(t,JSON.stringify(r))},dr=async(e,t)=>{const r=await e.getItem(t);if(!r)return null;try{return JSON.parse(r)}catch{return r}},Ut=async(e,t)=>{await e.removeItem(t)};class ia{constructor(){this.promise=new ia.promiseConstructor((t,r)=>{this.resolve=t,this.reject=r})}}ia.promiseConstructor=Promise;function za(e){const t=e.split(".");if(t.length!==3)throw new Gl("Invalid JWT structure");for(let n=0;n<t.length;n++)if(!I0.test(t[n]))throw new Gl("JWT not in base64url format");return{header:JSON.parse(Nu(t[0])),payload:JSON.parse(Nu(t[1])),signature:B0(t[2]),raw:{header:t[0],payload:t[1]}}}async function J0(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function Q0(e,t){return new Promise((n,s)=>{(async()=>{for(let a=0;a<1/0;a++)try{const l=await e(a);if(!t(a,null,l)){n(l);return}}catch(l){if(!t(a,l)){s(l);return}}})()})}function X0(e){return("0"+e.toString(16)).substr(-2)}function Y0(){const t=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=r.length;let s="";for(let a=0;a<56;a++)s+=r.charAt(Math.floor(Math.random()*n));return s}return crypto.getRandomValues(t),Array.from(t,X0).join("")}async function Z0(e){const r=new TextEncoder().encode(e),n=await crypto.subtle.digest("SHA-256",r),s=new Uint8Array(n);return Array.from(s).map(a=>String.fromCharCode(a)).join("")}async function ex(e){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),e;const r=await Z0(e);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Mr(e,t,r=!1){const n=Y0();let s=n;r&&(s+="/PASSWORD_RECOVERY"),await Br(e,`${t}-code-verifier`,s);const a=await ex(n);return[a,n===a?"plain":"s256"]}const tx=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function rx(e){const t=e.headers.get(Vl);if(!t||!t.match(tx))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function nx(e){if(!e)throw new Error("Missing exp claim");const t=Math.floor(Date.now()/1e3);if(e<=t)throw new Error("JWT has expired")}function sx(e){switch(e){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const ix=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function $r(e){if(!ix.test(e))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Ua(){const e={};return new Proxy(e,{get:(t,r)=>{if(r==="__isUserNotAvailableProxy")return!0;if(typeof r=="symbol"){const n=r.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)},set:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Su(e){return JSON.parse(JSON.stringify(e))}var ax=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const pr=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),lx=[502,503,504];async function Cu(e){var t;if(!K0(e))throw new Hl(pr(e),0);if(lx.includes(e.status))throw new Hl(pr(e),e.status);let r;try{r=await e.json()}catch(a){throw new xf(pr(a),a)}let n;const s=rx(e);if(s&&s.getTime()>=gf["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?n=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(n=r.error_code),n){if(n==="weak_password")throw new bu(pr(r),e.status,((t=r.weak_password)===null||t===void 0?void 0:t.reasons)||[]);if(n==="session_not_found")throw new Ft}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((a,l)=>a&&typeof l=="string",!0))throw new bu(pr(r),e.status,r.weak_password.reasons);throw new A0(pr(r),e.status||500,n)}const ox=(e,t,r,n)=>{const s={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?s:(s.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),s.body=JSON.stringify(n),Object.assign(Object.assign({},s),r))};async function K(e,t,r,n){var s;const a=Object.assign({},n==null?void 0:n.headers);a[Vl]||(a[Vl]=gf["2024-01-01"].name),n!=null&&n.jwt&&(a.Authorization=`Bearer ${n.jwt}`);const l=(s=n==null?void 0:n.query)!==null&&s!==void 0?s:{};n!=null&&n.redirectTo&&(l.redirect_to=n.redirectTo);const o=Object.keys(l).length?"?"+new URLSearchParams(l).toString():"",c=await cx(e,t,r+o,{headers:a,noResolveJson:n==null?void 0:n.noResolveJson},{},n==null?void 0:n.body);return n!=null&&n.xform?n==null?void 0:n.xform(c):{data:Object.assign({},c),error:null}}async function cx(e,t,r,n,s,a){const l=ox(t,n,s,a);let o;try{o=await e(r,Object.assign({},l))}catch(c){throw console.error(c),new Hl(pr(c),0)}if(o.ok||await Cu(o),n!=null&&n.noResolveJson)return o;try{return await o.json()}catch(c){await Cu(c)}}function _t(e){var t;let r=null;fx(e)&&(r=Object.assign({},e),e.expires_at||(r.expires_at=H0(e.expires_in)));const n=(t=e.user)!==null&&t!==void 0?t:e;return{data:{session:r,user:n},error:null}}function Eu(e){const t=_t(e);return!t.error&&e.weak_password&&typeof e.weak_password=="object"&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message=="string"&&e.weak_password.reasons.reduce((r,n)=>r&&typeof n=="string",!0)&&(t.data.weak_password=e.weak_password),t}function Gt(e){var t;return{data:{user:(t=e.user)!==null&&t!==void 0?t:e},error:null}}function ux(e){return{data:e,error:null}}function dx(e){const{action_link:t,email_otp:r,hashed_token:n,redirect_to:s,verification_type:a}=e,l=ax(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:t,email_otp:r,hashed_token:n,redirect_to:s,verification_type:a},c=Object.assign({},l);return{data:{properties:o,user:c},error:null}}function hx(e){return e}function fx(e){return e.access_token&&e.refresh_token&&e.expires_in}const Da=["global","local","others"];var mx=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};class px{constructor({url:t="",headers:r={},fetch:n}){this.url=t,this.headers=r,this.fetch=wf(n),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(t,r=Da[0]){if(Da.indexOf(r)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Da.join(", ")}`);try{return await K(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(n){if(H(n))return{data:null,error:n};throw n}}async inviteUserByEmail(t,r={}){try{return await K(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:Gt})}catch(n){if(H(n))return{data:{user:null},error:n};throw n}}async generateLink(t){try{const{options:r}=t,n=mx(t,["options"]),s=Object.assign(Object.assign({},n),r);return"newEmail"in n&&(s.new_email=n==null?void 0:n.newEmail,delete s.newEmail),await K(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:s,headers:this.headers,xform:dx,redirectTo:r==null?void 0:r.redirectTo})}catch(r){if(H(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(t){try{return await K(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:Gt})}catch(r){if(H(r))return{data:{user:null},error:r};throw r}}async listUsers(t){var r,n,s,a,l,o,c;try{const u={nextPage:null,lastPage:0,total:0},d=await K(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(r=t==null?void 0:t.page)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:"",per_page:(a=(s=t==null?void 0:t.perPage)===null||s===void 0?void 0:s.toString())!==null&&a!==void 0?a:""},xform:hx});if(d.error)throw d.error;const h=await d.json(),f=(l=d.headers.get("x-total-count"))!==null&&l!==void 0?l:0,x=(c=(o=d.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&c!==void 0?c:[];return x.length>0&&(x.forEach(w=>{const j=parseInt(w.split(";")[0].split("=")[1].substring(0,1)),v=JSON.parse(w.split(";")[1].split("=")[1]);u[`${v}Page`]=j}),u.total=parseInt(f)),{data:Object.assign(Object.assign({},h),u),error:null}}catch(u){if(H(u))return{data:{users:[]},error:u};throw u}}async getUserById(t){$r(t);try{return await K(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:Gt})}catch(r){if(H(r))return{data:{user:null},error:r};throw r}}async updateUserById(t,r){$r(t);try{return await K(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:r,headers:this.headers,xform:Gt})}catch(n){if(H(n))return{data:{user:null},error:n};throw n}}async deleteUser(t,r=!1){$r(t);try{return await K(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:r},xform:Gt})}catch(n){if(H(n))return{data:{user:null},error:n};throw n}}async _listFactors(t){$r(t.userId);try{const{data:r,error:n}=await K(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:s=>({data:{factors:s},error:null})});return{data:r,error:n}}catch(r){if(H(r))return{data:null,error:r};throw r}}async _deleteFactor(t){$r(t.userId),$r(t.id);try{return{data:await K(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(r){if(H(r))return{data:null,error:r};throw r}}}function Pu(e={}){return{getItem:t=>e[t]||null,setItem:(t,r)=>{e[t]=r},removeItem:t=>{delete e[t]}}}function gx(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const zr={debug:!!(globalThis&&vf()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class jf extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}class xx extends jf{}async function yx(e,t,r){zr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",e,t);const n=new globalThis.AbortController;return t>0&&setTimeout(()=>{n.abort(),zr.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",e)},t),await Promise.resolve().then(()=>globalThis.navigator.locks.request(e,t===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:n.signal},async s=>{if(s){zr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",e,s.name);try{return await r()}finally{zr.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",e,s.name)}}else{if(t===0)throw zr.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",e),new xx(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);if(zr.debug)try{const a=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(a,null,"  "))}catch(a){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",a)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await r()}}))}gx();const vx={url:P0,storageKey:T0,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:O0,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function Tu(e,t,r){return await r()}const Ur={};class ms{constructor(t){var r,n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=ms.nextInstanceID,ms.nextInstanceID+=1,this.instanceID>0&&ct()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const s=Object.assign(Object.assign({},vx),t);if(this.logDebugMessages=!!s.debug,typeof s.debug=="function"&&(this.logger=s.debug),this.persistSession=s.persistSession,this.storageKey=s.storageKey,this.autoRefreshToken=s.autoRefreshToken,this.admin=new px({url:s.url,headers:s.headers,fetch:s.fetch}),this.url=s.url,this.headers=s.headers,this.fetch=wf(s.fetch),this.lock=s.lock||Tu,this.detectSessionInUrl=s.detectSessionInUrl,this.flowType=s.flowType,this.hasCustomAuthorizationHeader=s.hasCustomAuthorizationHeader,s.lock?this.lock=s.lock:ct()&&(!((r=globalThis==null?void 0:globalThis.navigator)===null||r===void 0)&&r.locks)?this.lock=yx:this.lock=Tu,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?(s.storage?this.storage=s.storage:vf()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Pu(this.memoryStorage)),s.userStorage&&(this.userStorage=s.userStorage)):(this.memoryStorage={},this.storage=Pu(this.memoryStorage)),ct()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(n=this.broadcastChannel)===null||n===void 0||n.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a),await this._notifyAllSubscribers(a.data.event,a.data.session,!1)})}this.initialize()}get jwks(){var t,r;return(r=(t=Ur[this.storageKey])===null||t===void 0?void 0:t.jwks)!==null&&r!==void 0?r:{keys:[]}}set jwks(t){Ur[this.storageKey]=Object.assign(Object.assign({},Ur[this.storageKey]),{jwks:t})}get jwks_cached_at(){var t,r;return(r=(t=Ur[this.storageKey])===null||t===void 0?void 0:t.cachedAt)!==null&&r!==void 0?r:Number.MIN_SAFE_INTEGER}set jwks_cached_at(t){Ur[this.storageKey]=Object.assign(Object.assign({},Ur[this.storageKey]),{cachedAt:t})}_debug(...t){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${pf}) ${new Date().toISOString()}`,...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var t;try{const r=q0(window.location.href);let n="none";if(this._isImplicitGrantCallback(r)?n="implicit":await this._isPKCECallback(r)&&(n="pkce"),ct()&&this.detectSessionInUrl&&n!=="none"){const{data:s,error:a}=await this._getSessionFromURL(r,n);if(a){if(this._debug("#_initialize()","error detecting session from URL",a),$0(a)){const c=(t=a.details)===null||t===void 0?void 0:t.code;if(c==="identity_already_exists"||c==="identity_not_found"||c==="single_identity_not_deletable")return{error:a}}return await this._removeSession(),{error:a}}const{session:l,redirectType:o}=s;return this._debug("#_initialize()","detected session in URL",l,"redirect type",o),await this._saveSession(l),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",l):await this._notifyAllSubscribers("SIGNED_IN",l)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return H(r)?{error:r}:{error:new xf("Unexpected error during initialization",r)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(t){var r,n,s;try{const a=await K(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(r=t==null?void 0:t.options)===null||r===void 0?void 0:r.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(s=t==null?void 0:t.options)===null||s===void 0?void 0:s.captchaToken}},xform:_t}),{data:l,error:o}=a;if(o||!l)return{data:{user:null,session:null},error:o};const c=l.session,u=l.user;return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",c)),{data:{user:u,session:c},error:null}}catch(a){if(H(a))return{data:{user:null,session:null},error:a};throw a}}async signUp(t){var r,n,s;try{let a;if("email"in t){const{email:d,password:h,options:f}=t;let x=null,w=null;this.flowType==="pkce"&&([x,w]=await Mr(this.storage,this.storageKey)),a=await K(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:f==null?void 0:f.emailRedirectTo,body:{email:d,password:h,data:(r=f==null?void 0:f.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken},code_challenge:x,code_challenge_method:w},xform:_t})}else if("phone"in t){const{phone:d,password:h,options:f}=t;a=await K(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:d,password:h,data:(n=f==null?void 0:f.data)!==null&&n!==void 0?n:{},channel:(s=f==null?void 0:f.channel)!==null&&s!==void 0?s:"sms",gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken}},xform:_t})}else throw new Vs("You must provide either an email or phone number and a password");const{data:l,error:o}=a;if(o||!l)return{data:{user:null,session:null},error:o};const c=l.session,u=l.user;return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",c)),{data:{user:u,session:c},error:null}}catch(a){if(H(a))return{data:{user:null,session:null},error:a};throw a}}async signInWithPassword(t){try{let r;if("email"in t){const{email:a,password:l,options:o}=t;r=await K(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:a,password:l,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Eu})}else if("phone"in t){const{phone:a,password:l,options:o}=t;r=await K(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:a,password:l,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Eu})}else throw new Vs("You must provide either an email or phone number and a password");const{data:n,error:s}=r;return s?{data:{user:null,session:null},error:s}:!n||!n.session||!n.user?{data:{user:null,session:null},error:new Ws}:(n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),{data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:s})}catch(r){if(H(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOAuth(t){var r,n,s,a;return await this._handleProviderSignIn(t.provider,{redirectTo:(r=t.options)===null||r===void 0?void 0:r.redirectTo,scopes:(n=t.options)===null||n===void 0?void 0:n.scopes,queryParams:(s=t.options)===null||s===void 0?void 0:s.queryParams,skipBrowserRedirect:(a=t.options)===null||a===void 0?void 0:a.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async signInWithWeb3(t){const{chain:r}=t;if(r==="solana")return await this.signInWithSolana(t);throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)}async signInWithSolana(t){var r,n,s,a,l,o,c,u,d,h,f,x;let w,j;if("message"in t)w=t.message,j=t.signature;else{const{chain:v,wallet:p,statement:g,options:y}=t;let k;if(ct())if(typeof p=="object")k=p;else{const E=window;if("solana"in E&&typeof E.solana=="object"&&("signIn"in E.solana&&typeof E.solana.signIn=="function"||"signMessage"in E.solana&&typeof E.solana.signMessage=="function"))k=E.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof p!="object"||!(y!=null&&y.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");k=p}const _=new URL((r=y==null?void 0:y.url)!==null&&r!==void 0?r:window.location.href);if("signIn"in k&&k.signIn){const E=await k.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},y==null?void 0:y.signInWithSolana),{version:"1",domain:_.host,uri:_.href}),g?{statement:g}:null));let O;if(Array.isArray(E)&&E[0]&&typeof E[0]=="object")O=E[0];else if(E&&typeof E=="object"&&"signedMessage"in E&&"signature"in E)O=E;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in O&&"signature"in O&&(typeof O.signedMessage=="string"||O.signedMessage instanceof Uint8Array)&&O.signature instanceof Uint8Array)w=typeof O.signedMessage=="string"?O.signedMessage:new TextDecoder().decode(O.signedMessage),j=O.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in k)||typeof k.signMessage!="function"||!("publicKey"in k)||typeof k!="object"||!k.publicKey||!("toBase58"in k.publicKey)||typeof k.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");w=[`${_.host} wants you to sign in with your Solana account:`,k.publicKey.toBase58(),...g?["",g,""]:[""],"Version: 1",`URI: ${_.href}`,`Issued At: ${(s=(n=y==null?void 0:y.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&s!==void 0?s:new Date().toISOString()}`,...!((a=y==null?void 0:y.signInWithSolana)===null||a===void 0)&&a.notBefore?[`Not Before: ${y.signInWithSolana.notBefore}`]:[],...!((l=y==null?void 0:y.signInWithSolana)===null||l===void 0)&&l.expirationTime?[`Expiration Time: ${y.signInWithSolana.expirationTime}`]:[],...!((o=y==null?void 0:y.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${y.signInWithSolana.chainId}`]:[],...!((c=y==null?void 0:y.signInWithSolana)===null||c===void 0)&&c.nonce?[`Nonce: ${y.signInWithSolana.nonce}`]:[],...!((u=y==null?void 0:y.signInWithSolana)===null||u===void 0)&&u.requestId?[`Request ID: ${y.signInWithSolana.requestId}`]:[],...!((h=(d=y==null?void 0:y.signInWithSolana)===null||d===void 0?void 0:d.resources)===null||h===void 0)&&h.length?["Resources",...y.signInWithSolana.resources.map(O=>`- ${O}`)]:[]].join(`
`);const E=await k.signMessage(new TextEncoder().encode(w),"utf8");if(!E||!(E instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");j=E}}try{const{data:v,error:p}=await K(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:w,signature:V0(j)},!((f=t.options)===null||f===void 0)&&f.captchaToken?{gotrue_meta_security:{captcha_token:(x=t.options)===null||x===void 0?void 0:x.captchaToken}}:null),xform:_t});if(p)throw p;return!v||!v.session||!v.user?{data:{user:null,session:null},error:new Ws}:(v.session&&(await this._saveSession(v.session),await this._notifyAllSubscribers("SIGNED_IN",v.session)),{data:Object.assign({},v),error:p})}catch(v){if(H(v))return{data:{user:null,session:null},error:v};throw v}}async _exchangeCodeForSession(t){const r=await dr(this.storage,`${this.storageKey}-code-verifier`),[n,s]=(r??"").split("/");try{const{data:a,error:l}=await K(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:n},xform:_t});if(await Ut(this.storage,`${this.storageKey}-code-verifier`),l)throw l;return!a||!a.session||!a.user?{data:{user:null,session:null,redirectType:null},error:new Ws}:(a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",a.session)),{data:Object.assign(Object.assign({},a),{redirectType:s??null}),error:l})}catch(a){if(H(a))return{data:{user:null,session:null,redirectType:null},error:a};throw a}}async signInWithIdToken(t){try{const{options:r,provider:n,token:s,access_token:a,nonce:l}=t,o=await K(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:s,access_token:a,nonce:l,gotrue_meta_security:{captcha_token:r==null?void 0:r.captchaToken}},xform:_t}),{data:c,error:u}=o;return u?{data:{user:null,session:null},error:u}:!c||!c.session||!c.user?{data:{user:null,session:null},error:new Ws}:(c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers("SIGNED_IN",c.session)),{data:c,error:u})}catch(r){if(H(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOtp(t){var r,n,s,a,l;try{if("email"in t){const{email:o,options:c}=t;let u=null,d=null;this.flowType==="pkce"&&([u,d]=await Mr(this.storage,this.storageKey));const{error:h}=await K(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:o,data:(r=c==null?void 0:c.data)!==null&&r!==void 0?r:{},create_user:(n=c==null?void 0:c.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},code_challenge:u,code_challenge_method:d},redirectTo:c==null?void 0:c.emailRedirectTo});return{data:{user:null,session:null},error:h}}if("phone"in t){const{phone:o,options:c}=t,{data:u,error:d}=await K(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:o,data:(s=c==null?void 0:c.data)!==null&&s!==void 0?s:{},create_user:(a=c==null?void 0:c.shouldCreateUser)!==null&&a!==void 0?a:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},channel:(l=c==null?void 0:c.channel)!==null&&l!==void 0?l:"sms"}});return{data:{user:null,session:null,messageId:u==null?void 0:u.message_id},error:d}}throw new Vs("You must provide either an email or phone number.")}catch(o){if(H(o))return{data:{user:null,session:null},error:o};throw o}}async verifyOtp(t){var r,n;try{let s,a;"options"in t&&(s=(r=t.options)===null||r===void 0?void 0:r.redirectTo,a=(n=t.options)===null||n===void 0?void 0:n.captchaToken);const{data:l,error:o}=await K(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:a}}),redirectTo:s,xform:_t});if(o)throw o;if(!l)throw new Error("An error occurred on token verification.");const c=l.session,u=l.user;return c!=null&&c.access_token&&(await this._saveSession(c),await this._notifyAllSubscribers(t.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",c)),{data:{user:u,session:c},error:null}}catch(s){if(H(s))return{data:{user:null,session:null},error:s};throw s}}async signInWithSSO(t){var r,n,s;try{let a=null,l=null;return this.flowType==="pkce"&&([a,l]=await Mr(this.storage,this.storageKey)),await K(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(n=(r=t.options)===null||r===void 0?void 0:r.redirectTo)!==null&&n!==void 0?n:void 0}),!((s=t==null?void 0:t.options)===null||s===void 0)&&s.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:a,code_challenge_method:l}),headers:this.headers,xform:ux})}catch(a){if(H(a))return{data:null,error:a};throw a}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:r},error:n}=t;if(n)throw n;if(!r)throw new Ft;const{error:s}=await K(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return{data:{user:null,session:null},error:s}})}catch(t){if(H(t))return{data:{user:null,session:null},error:t};throw t}}async resend(t){try{const r=`${this.url}/resend`;if("email"in t){const{email:n,type:s,options:a}=t,{error:l}=await K(this.fetch,"POST",r,{headers:this.headers,body:{email:n,type:s,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},redirectTo:a==null?void 0:a.emailRedirectTo});return{data:{user:null,session:null},error:l}}else if("phone"in t){const{phone:n,type:s,options:a}=t,{data:l,error:o}=await K(this.fetch,"POST",r,{headers:this.headers,body:{phone:n,type:s,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}}});return{data:{user:null,session:null,messageId:l==null?void 0:l.message_id},error:o}}throw new Vs("You must provide either an email or phone number and a type")}catch(r){if(H(r))return{data:{user:null,session:null},error:r};throw r}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async r=>r))}async _acquireLock(t,r){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),s=(async()=>(await n,await r()))();return this.pendingInLock.push((async()=>{try{await s}catch{}})()),s}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=r();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const s=[...this.pendingInLock];await Promise.all(s),this.pendingInLock.splice(0,s.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await t(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const r=await dr(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?t=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const n=t.expires_at?t.expires_at*1e3-Date.now()<Ma:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",t.expires_at),!n){if(this.userStorage){const l=await dr(this.userStorage,this.storageKey+"-user");l!=null&&l.user?t.user=l.user:t.user=Ua()}if(this.storage.isServer&&t.user){let l=this.suppressGetSessionWarning;t=new Proxy(t,{get:(c,u,d)=>(!l&&u==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),l=!0,this.suppressGetSessionWarning=!0),Reflect.get(c,u,d))})}return{data:{session:t},error:null}}const{session:s,error:a}=await this._callRefreshToken(t.refresh_token);return a?{data:{session:null},error:a}:{data:{session:s},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(t){return t?await this._getUser(t):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(t){try{return t?await K(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:Gt}):await this._useSession(async r=>{var n,s,a;const{data:l,error:o}=r;if(o)throw o;return!(!((n=l.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Ft}:await K(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(a=(s=l.session)===null||s===void 0?void 0:s.access_token)!==null&&a!==void 0?a:void 0,xform:Gt})})}catch(r){if(H(r))return M0(r)&&(await this._removeSession(),await Ut(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:r};throw r}}async updateUser(t,r={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,r))}async _updateUser(t,r={}){try{return await this._useSession(async n=>{const{data:s,error:a}=n;if(a)throw a;if(!s.session)throw new Ft;const l=s.session;let o=null,c=null;this.flowType==="pkce"&&t.email!=null&&([o,c]=await Mr(this.storage,this.storageKey));const{data:u,error:d}=await K(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r==null?void 0:r.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:o,code_challenge_method:c}),jwt:l.access_token,xform:Gt});if(d)throw d;return l.user=u.user,await this._saveSession(l),await this._notifyAllSubscribers("USER_UPDATED",l),{data:{user:l.user},error:null}})}catch(n){if(H(n))return{data:{user:null},error:n};throw n}}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new Ft;const r=Date.now()/1e3;let n=r,s=!0,a=null;const{payload:l}=za(t.access_token);if(l.exp&&(n=l.exp,s=n<=r),s){const{session:o,error:c}=await this._callRefreshToken(t.refresh_token);if(c)return{data:{user:null,session:null},error:c};if(!o)return{data:{user:null,session:null},error:null};a=o}else{const{data:o,error:c}=await this._getUser(t.access_token);if(c)throw c;a={access_token:t.access_token,refresh_token:t.refresh_token,user:o.user,token_type:"bearer",expires_in:n-r,expires_at:n},await this._saveSession(a),await this._notifyAllSubscribers("SIGNED_IN",a)}return{data:{user:a.user,session:a},error:null}}catch(r){if(H(r))return{data:{session:null,user:null},error:r};throw r}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async r=>{var n;if(!t){const{data:l,error:o}=r;if(o)throw o;t=(n=l.session)!==null&&n!==void 0?n:void 0}if(!(t!=null&&t.refresh_token))throw new Ft;const{session:s,error:a}=await this._callRefreshToken(t.refresh_token);return a?{data:{user:null,session:null},error:a}:s?{data:{user:s.user,session:s},error:null}:{data:{user:null,session:null},error:null}})}catch(r){if(H(r))return{data:{user:null,session:null},error:r};throw r}}async _getSessionFromURL(t,r){try{if(!ct())throw new Hs("No browser detected.");if(t.error||t.error_description||t.error_code)throw new Hs(t.error_description||"Error in URL with unspecified error_description",{error:t.error||"unspecified_error",code:t.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new ju("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Hs("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!t.code)throw new ju("No code detected.");const{data:g,error:y}=await this._exchangeCodeForSession(t.code);if(y)throw y;const k=new URL(window.location.href);return k.searchParams.delete("code"),window.history.replaceState(window.history.state,"",k.toString()),{data:{session:g.session,redirectType:null},error:null}}const{provider_token:n,provider_refresh_token:s,access_token:a,refresh_token:l,expires_in:o,expires_at:c,token_type:u}=t;if(!a||!o||!l||!u)throw new Hs("No session defined in URL");const d=Math.round(Date.now()/1e3),h=parseInt(o);let f=d+h;c&&(f=parseInt(c));const x=f-d;x*1e3<=Fr&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${x}s, should have been closer to ${h}s`);const w=f-h;d-w>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",w,f,d):d-w<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",w,f,d);const{data:j,error:v}=await this._getUser(a);if(v)throw v;const p={provider_token:n,provider_refresh_token:s,access_token:a,expires_in:h,expires_at:f,refresh_token:l,token_type:u,user:j.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:p,redirectType:t.type},error:null}}catch(n){if(H(n))return{data:{session:null,redirectType:null},error:n};throw n}}_isImplicitGrantCallback(t){return!!(t.access_token||t.error_description)}async _isPKCECallback(t){const r=await dr(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&r)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async r=>{var n;const{data:s,error:a}=r;if(a)return{error:a};const l=(n=s.session)===null||n===void 0?void 0:n.access_token;if(l){const{error:o}=await this.admin.signOut(l,t);if(o&&!(L0(o)&&(o.status===404||o.status===401||o.status===403)))return{error:o}}return t!=="others"&&(await this._removeSession(),await Ut(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(t){const r=G0(),n={id:r,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,n),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(r)})))(),{data:{subscription:n}}}async _emitInitialSession(t){return await this._useSession(async r=>{var n,s;try{const{data:{session:a},error:l}=r;if(l)throw l;await((n=this.stateChangeEmitters.get(t))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",a)),this._debug("INITIAL_SESSION","callback id",t,"session",a)}catch(a){await((s=this.stateChangeEmitters.get(t))===null||s===void 0?void 0:s.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",a),console.error(a)}})}async resetPasswordForEmail(t,r={}){let n=null,s=null;this.flowType==="pkce"&&([n,s]=await Mr(this.storage,this.storageKey,!0));try{return await K(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:n,code_challenge_method:s,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(a){if(H(a))return{data:null,error:a};throw a}}async getUserIdentities(){var t;try{const{data:r,error:n}=await this.getUser();if(n)throw n;return{data:{identities:(t=r.user.identities)!==null&&t!==void 0?t:[]},error:null}}catch(r){if(H(r))return{data:null,error:r};throw r}}async linkIdentity(t){var r;try{const{data:n,error:s}=await this._useSession(async a=>{var l,o,c,u,d;const{data:h,error:f}=a;if(f)throw f;const x=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,t.provider,{redirectTo:(l=t.options)===null||l===void 0?void 0:l.redirectTo,scopes:(o=t.options)===null||o===void 0?void 0:o.scopes,queryParams:(c=t.options)===null||c===void 0?void 0:c.queryParams,skipBrowserRedirect:!0});return await K(this.fetch,"GET",x,{headers:this.headers,jwt:(d=(u=h.session)===null||u===void 0?void 0:u.access_token)!==null&&d!==void 0?d:void 0})});if(s)throw s;return ct()&&!(!((r=t.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(n==null?void 0:n.url),{data:{provider:t.provider,url:n==null?void 0:n.url},error:null}}catch(n){if(H(n))return{data:{provider:t.provider,url:null},error:n};throw n}}async unlinkIdentity(t){try{return await this._useSession(async r=>{var n,s;const{data:a,error:l}=r;if(l)throw l;return await K(this.fetch,"DELETE",`${this.url}/user/identities/${t.identity_id}`,{headers:this.headers,jwt:(s=(n=a.session)===null||n===void 0?void 0:n.access_token)!==null&&s!==void 0?s:void 0})})}catch(r){if(H(r))return{data:null,error:r};throw r}}async _refreshAccessToken(t){const r=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(r,"begin");try{const n=Date.now();return await Q0(async s=>(s>0&&await J0(200*Math.pow(2,s-1)),this._debug(r,"refreshing attempt",s),await K(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:_t})),(s,a)=>{const l=200*Math.pow(2,s);return a&&$a(a)&&Date.now()+l-n<Fr})}catch(n){if(this._debug(r,"error",n),H(n))return{data:{session:null,user:null},error:n};throw n}finally{this._debug(r,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,r){const n=await this._getUrlForProvider(`${this.url}/authorize`,t,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",r,"url",n),ct()&&!r.skipBrowserRedirect&&window.location.assign(n),{data:{provider:t,url:n},error:null}}async _recoverAndRefresh(){var t,r;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const s=await dr(this.storage,this.storageKey);if(s&&this.userStorage){let l=await dr(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!l&&(l={user:s.user},await Br(this.userStorage,this.storageKey+"-user",l)),s.user=(t=l==null?void 0:l.user)!==null&&t!==void 0?t:Ua()}else if(s&&!s.user&&!s.user){const l=await dr(this.storage,this.storageKey+"-user");l&&(l!=null&&l.user)?(s.user=l.user,await Ut(this.storage,this.storageKey+"-user"),await Br(this.storage,this.storageKey,s)):s.user=Ua()}if(this._debug(n,"session from storage",s),!this._isValidSession(s)){this._debug(n,"session is not valid"),s!==null&&await this._removeSession();return}const a=((r=s.expires_at)!==null&&r!==void 0?r:1/0)*1e3-Date.now()<Ma;if(this._debug(n,`session has${a?"":" not"} expired with margin of ${Ma}s`),a){if(this.autoRefreshToken&&s.refresh_token){const{error:l}=await this._callRefreshToken(s.refresh_token);l&&(console.error(l),$a(l)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",l),await this._removeSession()))}}else if(s.user&&s.user.__isUserNotAvailableProxy===!0)try{const{data:l,error:o}=await this._getUser(s.access_token);!o&&(l!=null&&l.user)?(s.user=l.user,await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(l){console.error("Error getting user data:",l),this._debug(n,"error getting user data, skipping SIGNED_IN notification",l)}else await this._notifyAllSubscribers("SIGNED_IN",s)}catch(s){this._debug(n,"error",s),console.error(s);return}finally{this._debug(n,"end")}}async _callRefreshToken(t){var r,n;if(!t)throw new Ft;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const s=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(s,"begin");try{this.refreshingDeferred=new ia;const{data:a,error:l}=await this._refreshAccessToken(t);if(l)throw l;if(!a.session)throw new Ft;await this._saveSession(a.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",a.session);const o={session:a.session,error:null};return this.refreshingDeferred.resolve(o),o}catch(a){if(this._debug(s,"error",a),H(a)){const l={session:null,error:a};return $a(a)||await this._removeSession(),(r=this.refreshingDeferred)===null||r===void 0||r.resolve(l),l}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(a),a}finally{this.refreshingDeferred=null,this._debug(s,"end")}}async _notifyAllSubscribers(t,r,n=!0){const s=`#_notifyAllSubscribers(${t})`;this._debug(s,"begin",r,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:t,session:r});const a=[],l=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(t,r)}catch(c){a.push(c)}});if(await Promise.all(l),a.length>0){for(let o=0;o<a.length;o+=1)console.error(a[o]);throw a[0]}}finally{this._debug(s,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),this.suppressGetSessionWarning=!0;const r=Object.assign({},t),n=r.user&&r.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&r.user&&await Br(this.userStorage,this.storageKey+"-user",{user:r.user});const s=Object.assign({},r);delete s.user;const a=Su(s);await Br(this.storage,this.storageKey,a)}else{const s=Su(r);await Br(this.storage,this.storageKey,s)}}async _removeSession(){this._debug("#_removeSession()"),await Ut(this.storage,this.storageKey),await Ut(this.storage,this.storageKey+"-code-verifier"),await Ut(this.storage,this.storageKey+"-user"),this.userStorage&&await Ut(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&ct()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),Fr);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async r=>{const{data:{session:n}}=r;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const s=Math.floor((n.expires_at*1e3-t)/Fr);this._debug("#_autoRefreshTokenTick()",`access token expires in ${s} ticks, a tick lasts ${Fr}ms, refresh threshold is ${Wl} ticks`),s<=Wl&&await this._callRefreshToken(n.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof jf)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!ct()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const r=`#_onVisibilityChanged(${t})`;this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,r,n){const s=[`provider=${encodeURIComponent(r)}`];if(n!=null&&n.redirectTo&&s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n!=null&&n.scopes&&s.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const[a,l]=await Mr(this.storage,this.storageKey),o=new URLSearchParams({code_challenge:`${encodeURIComponent(a)}`,code_challenge_method:`${encodeURIComponent(l)}`});s.push(o.toString())}if(n!=null&&n.queryParams){const a=new URLSearchParams(n.queryParams);s.push(a.toString())}return n!=null&&n.skipBrowserRedirect&&s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${t}?${s.join("&")}`}async _unenroll(t){try{return await this._useSession(async r=>{var n;const{data:s,error:a}=r;return a?{data:null,error:a}:await K(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(n=s==null?void 0:s.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(H(r))return{data:null,error:r};throw r}}async _enroll(t){try{return await this._useSession(async r=>{var n,s;const{data:a,error:l}=r;if(l)return{data:null,error:l};const o=Object.assign({friendly_name:t.friendlyName,factor_type:t.factorType},t.factorType==="phone"?{phone:t.phone}:{issuer:t.issuer}),{data:c,error:u}=await K(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(n=a==null?void 0:a.session)===null||n===void 0?void 0:n.access_token});return u?{data:null,error:u}:(t.factorType==="totp"&&(!((s=c==null?void 0:c.totp)===null||s===void 0)&&s.qr_code)&&(c.totp.qr_code=`data:image/svg+xml;utf-8,${c.totp.qr_code}`),{data:c,error:null})})}catch(r){if(H(r))return{data:null,error:r};throw r}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:s,error:a}=r;if(a)return{data:null,error:a};const{data:l,error:o}=await K(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:{code:t.code,challenge_id:t.challengeId},headers:this.headers,jwt:(n=s==null?void 0:s.session)===null||n===void 0?void 0:n.access_token});return o?{data:null,error:o}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+l.expires_in},l)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",l),{data:l,error:o})})}catch(r){if(H(r))return{data:null,error:r};throw r}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var n;const{data:s,error:a}=r;return a?{data:null,error:a}:await K(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{body:{channel:t.channel},headers:this.headers,jwt:(n=s==null?void 0:s.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(H(r))return{data:null,error:r};throw r}})}async _challengeAndVerify(t){const{data:r,error:n}=await this._challenge({factorId:t.factorId});return n?{data:null,error:n}:await this._verify({factorId:t.factorId,challengeId:r.id,code:t.code})}async _listFactors(){const{data:{user:t},error:r}=await this.getUser();if(r)return{data:null,error:r};const n=(t==null?void 0:t.factors)||[],s=n.filter(l=>l.factor_type==="totp"&&l.status==="verified"),a=n.filter(l=>l.factor_type==="phone"&&l.status==="verified");return{data:{all:n,totp:s,phone:a},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async t=>{var r,n;const{data:{session:s},error:a}=t;if(a)return{data:null,error:a};if(!s)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:l}=za(s.access_token);let o=null;l.aal&&(o=l.aal);let c=o;((n=(r=s.user.factors)===null||r===void 0?void 0:r.filter(h=>h.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(c="aal2");const d=l.amr||[];return{data:{currentLevel:o,nextLevel:c,currentAuthenticationMethods:d},error:null}}))}async fetchJwk(t,r={keys:[]}){let n=r.keys.find(o=>o.kid===t);if(n)return n;const s=Date.now();if(n=this.jwks.keys.find(o=>o.kid===t),n&&this.jwks_cached_at+R0>s)return n;const{data:a,error:l}=await K(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(l)throw l;return!a.keys||a.keys.length===0||(this.jwks=a,this.jwks_cached_at=s,n=a.keys.find(o=>o.kid===t),!n)?null:n}async getClaims(t,r={}){try{let n=t;if(!n){const{data:x,error:w}=await this.getSession();if(w||!x.session)return{data:null,error:w};n=x.session.access_token}const{header:s,payload:a,signature:l,raw:{header:o,payload:c}}=za(n);r!=null&&r.allowExpired||nx(a.exp);const u=!s.alg||s.alg.startsWith("HS")||!s.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(s.kid,r!=null&&r.keys?{keys:r.keys}:r==null?void 0:r.jwks);if(!u){const{error:x}=await this.getUser(n);if(x)throw x;return{data:{claims:a,header:s,signature:l},error:null}}const d=sx(s.alg),h=await crypto.subtle.importKey("jwk",u,d,!0,["verify"]);if(!await crypto.subtle.verify(d,h,l,W0(`${o}.${c}`)))throw new Gl("Invalid JWT signature");return{data:{claims:a,header:s,signature:l},error:null}}catch(n){if(H(n))return{data:null,error:n};throw n}}}ms.nextInstanceID=0;const wx=ms;class jx extends wx{constructor(t){super(t)}}var bx=function(e,t,r,n){function s(a){return a instanceof r?a:new r(function(l){l(a)})}return new(r||(r=Promise))(function(a,l){function o(d){try{u(n.next(d))}catch(h){l(h)}}function c(d){try{u(n.throw(d))}catch(h){l(h)}}function u(d){d.done?a(d.value):s(d.value).then(o,c)}u((n=n.apply(e,t||[])).next())})};class kx{constructor(t,r,n){var s,a,l;if(this.supabaseUrl=t,this.supabaseKey=r,!t)throw new Error("supabaseUrl is required.");if(!r)throw new Error("supabaseKey is required.");const o=C0(t),c=new URL(o);this.realtimeUrl=new URL("realtime/v1",c),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",c),this.storageUrl=new URL("storage/v1",c),this.functionsUrl=new URL("functions/v1",c);const u=`sb-${c.hostname.split(".")[0]}-auth-token`,d={db:v0,realtime:j0,auth:Object.assign(Object.assign({},w0),{storageKey:u}),global:y0},h=E0(n??{},d);this.storageKey=(s=h.auth.storageKey)!==null&&s!==void 0?s:"",this.headers=(a=h.global.headers)!==null&&a!==void 0?a:{},h.accessToken?(this.accessToken=h.accessToken,this.auth=new Proxy({},{get:(f,x)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(x)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((l=h.auth)!==null&&l!==void 0?l:{},this.headers,h.global.fetch),this.fetch=N0(r,this._getAccessToken.bind(this),h.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},h.realtime)),this.rest=new Fg(new URL("rest/v1",c).href,{headers:this.headers,schema:h.db.schema,fetch:this.fetch}),this.storage=new p0(this.storageUrl.href,this.headers,this.fetch,n==null?void 0:n.storage),h.accessToken||this._listenForAuthEvents()}get functions(){return new xg(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,r={},n={}){return this.rest.rpc(t,r,n)}channel(t,r={config:{}}){return this.realtime.channel(t,r)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,r;return bx(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:n}=yield this.auth.getSession();return(r=(t=n.session)===null||t===void 0?void 0:t.access_token)!==null&&r!==void 0?r:null})}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:r,detectSessionInUrl:n,storage:s,storageKey:a,flowType:l,lock:o,debug:c},u,d){const h={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new jx({url:this.authUrl.href,headers:Object.assign(Object.assign({},h),u),storageKey:a,autoRefreshToken:t,persistSession:r,detectSessionInUrl:n,storage:s,flowType:l,lock:o,debug:c,fetch:d,hasCustomAuthorizationHeader:"Authorization"in this.headers})}_initRealtimeClient(t){return new r0(this.realtimeUrl.href,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,n)=>{this._handleTokenChanged(r,"CLIENT",n==null?void 0:n.access_token)})}_handleTokenChanged(t,r,n){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==n?this.changedAccessToken=n:t==="SIGNED_OUT"&&(this.realtime.setAuth(),r=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const _x=(e,t,r)=>new kx(e,t,r);function Nx(){if(typeof window<"u"||typeof process>"u"||process.version===void 0||process.version===null)return!1;const e=process.version.match(/^v(\d+)\./);return e?parseInt(e[1],10)<=18:!1}Nx()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const Sx="https://fbhuktuwetvycjqhkqhr.supabase.co",Cx="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZiaHVrdHV3ZXR2eWNqcWhrcWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyMzA5NjUsImV4cCI6MjA3NDgwNjk2NX0.JcRVVEi6nmu160QKkgh9r_gsbgZ02yOHHP1EpGeDGys",xe=_x(Sx,Cx);function Ex(){const[e,t]=I.useState(null),[r,n]=I.useState(null),[s,a]=I.useState(!0);I.useEffect(()=>{xe.auth.getSession().then(({data:{session:f}})=>{t((f==null?void 0:f.user)??null),f!=null&&f.user?l(f.user.id):a(!1)});const{data:{subscription:h}}=xe.auth.onAuthStateChange(async(f,x)=>{t((x==null?void 0:x.user)??null),x!=null&&x.user?await l(x.user.id):(n(null),a(!1))});return()=>h.unsubscribe()},[]);const l=async h=>{try{const{data:f,error:x}=await xe.from("profiles").select("*").eq("id",h).single();x?console.error("Error fetching profile:",x):n(f)}catch(f){console.error("Error fetching profile:",f)}finally{a(!1)}};return{user:e,profile:r,loading:s,signIn:async(h,f)=>{const{data:x,error:w}=await xe.auth.signInWithPassword({email:h,password:f});if(w)throw w;return x},signUp:async(h,f,x)=>{const{data:w,error:j}=await xe.auth.signUp({email:h,password:f,options:{data:x}});if(j)throw j;return w},signOut:async()=>{const{error:h}=await xe.auth.signOut();if(h)throw h},updateProfile:async h=>{if(!e)throw new Error("No user logged in");const{data:f,error:x}=await xe.from("profiles").update(h).eq("id",e.id).select().single();if(x)throw x;return n(f),f},isAuthenticated:!!e,setProfile:n}}const bf=I.createContext(void 0),Px=({children:e})=>{const{user:t,profile:r,loading:n,signIn:s,signOut:a,signUp:l}=Ex(),[o,c]=I.useState([]),[u,d]=I.useState([]),h=async(R,A)=>{try{return await s(R,A),!0}catch(D){return console.error("Login error:",D),!1}},f=async()=>{await a()},x=async R=>{try{return await l(R.email,R.password,{name:R.name,role:R.role,department:R.department||void 0,position:R.position||void 0,salary:R.salary||void 0,phone:R.phone||void 0,telegram:R.telegram||void 0}),!0}catch(A){return console.error("Register error:",A),!1}},w=async R=>{await l(R.email,R.password,{name:R.name,role:R.role,department:R.department||void 0,position:R.position||void 0,salary:R.salary||void 0,phone:R.phone||void 0,telegram:R.telegram||void 0}),await p()},j=async(R,A)=>{const{error:D}=await xe.from("profiles").update(A).eq("id",R);if(D)throw D;await p()},v=async R=>{const{error:A}=await xe.auth.admin.deleteUser(R);if(A)throw A;await p()},p=async()=>{const{data:R,error:A}=await xe.from("profiles").select("*").order("created_at",{ascending:!1});A?console.error("Error fetching users:",A):c(R||[])},g=async()=>{const{data:R,error:A}=await xe.from("projects").select(`
        *,
        manager:profiles!projects_manager_id_fkey(*),
        project_members(
          user_id,
          role,
          profiles(*)
        ),
        project_files(*)
      `).order("created_at",{ascending:!1});if(A)console.error("Error fetching projects:",A);else{const D=(R||[]).map(U=>{var m,N,S,b,P,L,B;return{id:U.id,title:U.title,albumType:U.album_type,description:U.description,status:U.status,manager:U.manager,photographers:((N=(m=U.project_members)==null?void 0:m.filter(W=>W.role==="photographer"))==null?void 0:N.map(W=>W.profiles))||[],designers:((b=(S=U.project_members)==null?void 0:S.filter(W=>W.role==="designer"))==null?void 0:b.map(W=>W.profiles))||[],deadline:new Date(U.deadline),createdAt:new Date(U.created_at),updatedAt:new Date(U.updated_at),photosCount:((P=U.project_files)==null?void 0:P.filter(W=>W.file_type.startsWith("image/")).length)||0,designsCount:((L=U.project_files)==null?void 0:L.filter(W=>W.file_type.includes("design")||W.name.toLowerCase().includes("макет")||W.name.toLowerCase().includes("design")).length)||0,files:((B=U.project_files)==null?void 0:B.map(W=>({id:W.id,name:W.name,type:W.file_type,size:W.file_size,preview:W.preview_url,uploadedBy:o.find(ae=>ae.id===W.uploaded_by)||{name:"Unknown"},uploadedAt:new Date(W.uploaded_at)})))||[]}});d(D)}};Va.useEffect(()=>{r&&(p(),g())},[r]);const we={user:r,users:o,projects:u,login:h,logout:f,register:x,addUser:w,updateUser:j,deleteUser:v,addProject:r?async R=>{var m;const{data:A,error:D}=await xe.from("projects").insert({title:R.title,album_type:R.albumType,description:R.description,status:R.status,manager_id:(m=R.manager)==null?void 0:m.id,deadline:R.deadline.toISOString().split("T")[0]}).select().single();if(D)throw D;const U=[...R.photographers.map(N=>({project_id:A.id,user_id:N.id,role:"photographer"})),...R.designers.map(N=>({project_id:A.id,user_id:N.id,role:"designer"}))];if(U.length>0){const{error:N}=await xe.from("project_members").insert(U);if(N)throw N}await g()}:async R=>{const A={...R,id:Math.random().toString(36).substr(2,9),createdAt:new Date,updatedAt:new Date,photosCount:0,designsCount:0,files:[]};d(D=>{const U=[...D,A];return localStorage.setItem("projects",JSON.stringify(U)),U})},updateProject:r?async(R,A)=>{const D={};A.title&&(D.title=A.title),A.albumType&&(D.album_type=A.albumType),A.description!==void 0&&(D.description=A.description),A.status&&(D.status=A.status),A.manager&&(D.manager_id=A.manager.id),A.deadline&&(D.deadline=A.deadline.toISOString().split("T")[0]);const{error:U}=await xe.from("projects").update(D).eq("id",R);if(U)throw U;if(A.photographers||A.designers){await xe.from("project_members").delete().eq("project_id",R);const m=[...(A.photographers||[]).map(N=>({project_id:R,user_id:N.id,role:"photographer"})),...(A.designers||[]).map(N=>({project_id:R,user_id:N.id,role:"designer"}))];if(m.length>0){const{error:N}=await xe.from("project_members").insert(m);if(N)throw N}}await g()}:async(R,A)=>{d(D=>{const U=D.map(m=>m.id===R?{...m,...A,updatedAt:new Date,photosCount:A.files?A.files.filter(N=>N.type.startsWith("image/")).length:m.photosCount,designsCount:A.files?A.files.filter(N=>N.type.includes("design")||N.name.toLowerCase().includes("макет")||N.name.toLowerCase().includes("design")).length:m.designsCount}:m);return localStorage.setItem("projects",JSON.stringify(U)),U})},deleteProject:r?async R=>{const{error:A}=await xe.from("projects").delete().eq("id",R);if(A)throw A;await g()}:async R=>{d(A=>{const D=A.filter(U=>U.id!==R);return localStorage.setItem("projects",JSON.stringify(D)),D})},addFileToProject:r?async(R,A)=>{const{error:D}=await xe.from("project_files").insert({project_id:R,name:A.name,file_type:A.type,file_size:A.size,preview_url:A.preview,file_url:A.preview||"#",uploaded_by:r==null?void 0:r.id});if(D)throw D;await g()}:async(R,A)=>{const D={...A,id:Math.random().toString(36).substr(2,9),uploadedAt:new Date};d(U=>{const m=U.map(N=>{if(N.id===R){const S=[...N.files,D];return{...N,files:S,photosCount:S.filter(b=>b.type.startsWith("image/")).length,designsCount:S.filter(b=>b.type.includes("design")||b.name.toLowerCase().includes("макет")||b.name.toLowerCase().includes("design")).length,updatedAt:new Date}}return N});return localStorage.setItem("projects",JSON.stringify(m)),m})},removeFileFromProject:r?async(R,A)=>{const{error:D}=await xe.from("project_files").delete().eq("id",A);if(D)throw D;await g()}:async(R,A)=>{d(D=>{const U=D.map(m=>{if(m.id===R){const N=m.files.filter(S=>S.id!==A);return{...m,files:N,photosCount:N.filter(S=>S.type.startsWith("image/")).length,designsCount:N.filter(S=>S.type.includes("design")||S.name.toLowerCase().includes("макет")||S.name.toLowerCase().includes("design")).length,updatedAt:new Date}}return m});return localStorage.setItem("projects",JSON.stringify(U)),U})},isAuthenticated:!!r,loading:n};return i.jsx(bf.Provider,{value:we,children:e})},Le=()=>{const e=I.useContext(bf);if(e===void 0)throw new Error("useAuth must be used within an AuthProvider");return e};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Q=(e,t)=>{const r=I.forwardRef(({color:n="currentColor",size:s=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:o="",children:c,...u},d)=>I.createElement("svg",{ref:d,...Tx,width:s,height:s,stroke:n,strokeWidth:l?Number(a)*24/Number(s):a,className:["lucide",`lucide-${Ox(e)}`,o].join(" "),...u},[...t.map(([h,f])=>I.createElement(h,f)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=Q("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=Q("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=Q("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=Q("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=Q("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=Q("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=Q("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=Q("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=Q("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=Q("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=Q("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=Q("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=Q("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=Q("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=Q("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=Q("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=Q("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=Q("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=Q("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=Q("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=Q("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=Q("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=Q("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=Q("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=Q("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=Q("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=Q("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=Q("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=Q("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=Q("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=Q("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=Q("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=Q("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=Q("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=Q("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=Q("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=Q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Cf(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=Cf(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Fx(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=Cf(e))&&(n&&(n+=" "),n+=t);return n}const tc="-",Bx=e=>{const t=Vx(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:l=>{const o=l.split(tc);return o[0]===""&&o.length!==1&&o.shift(),Ef(o,t)||Wx(l)},getConflictingClassGroupIds:(l,o)=>{const c=r[l]||[];return o&&n[l]?[...c,...n[l]]:c}}},Ef=(e,t)=>{var l;if(e.length===0)return t.classGroupId;const r=e[0],n=t.nextPart.get(r),s=n?Ef(e.slice(1),n):void 0;if(s)return s;if(t.validators.length===0)return;const a=e.join(tc);return(l=t.validators.find(({validator:o})=>o(a)))==null?void 0:l.classGroupId},Iu=/^\[(.+)\]$/,Wx=e=>{if(Iu.test(e)){const t=Iu.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},Vx=e=>{const{theme:t,classGroups:r}=e,n={nextPart:new Map,validators:[]};for(const s in r)Kl(r[s],n,s,t);return n},Kl=(e,t,r,n)=>{e.forEach(s=>{if(typeof s=="string"){const a=s===""?t:Ru(t,s);a.classGroupId=r;return}if(typeof s=="function"){if(Hx(s)){Kl(s(n),t,r,n);return}t.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([a,l])=>{Kl(l,Ru(t,a),r,n)})})},Ru=(e,t)=>{let r=e;return t.split(tc).forEach(n=>{r.nextPart.has(n)||r.nextPart.set(n,{nextPart:new Map,validators:[]}),r=r.nextPart.get(n)}),r},Hx=e=>e.isThemeGetter,Gx=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,n=new Map;const s=(a,l)=>{r.set(a,l),t++,t>e&&(t=0,n=r,r=new Map)};return{get(a){let l=r.get(a);if(l!==void 0)return l;if((l=n.get(a))!==void 0)return s(a,l),l},set(a,l){r.has(a)?r.set(a,l):s(a,l)}}},Jl="!",Ql=":",qx=Ql.length,Kx=e=>{const{prefix:t,experimentalParseClassName:r}=e;let n=s=>{const a=[];let l=0,o=0,c=0,u;for(let w=0;w<s.length;w++){let j=s[w];if(l===0&&o===0){if(j===Ql){a.push(s.slice(c,w)),c=w+qx;continue}if(j==="/"){u=w;continue}}j==="["?l++:j==="]"?l--:j==="("?o++:j===")"&&o--}const d=a.length===0?s:s.substring(c),h=Jx(d),f=h!==d,x=u&&u>c?u-c:void 0;return{modifiers:a,hasImportantModifier:f,baseClassName:h,maybePostfixModifierPosition:x}};if(t){const s=t+Ql,a=n;n=l=>l.startsWith(s)?a(l.substring(s.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:l,maybePostfixModifierPosition:void 0}}if(r){const s=n;n=a=>r({className:a,parseClassName:s})}return n},Jx=e=>e.endsWith(Jl)?e.substring(0,e.length-1):e.startsWith(Jl)?e.substring(1):e,Qx=e=>{const t=Object.fromEntries(e.orderSensitiveModifiers.map(n=>[n,!0]));return n=>{if(n.length<=1)return n;const s=[];let a=[];return n.forEach(l=>{l[0]==="["||t[l]?(s.push(...a.sort(),l),a=[]):a.push(l)}),s.push(...a.sort()),s}},Xx=e=>({cache:Gx(e.cacheSize),parseClassName:Kx(e),sortModifiers:Qx(e),...Bx(e)}),Yx=/\s+/,Zx=(e,t)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:s,sortModifiers:a}=t,l=[],o=e.trim().split(Yx);let c="";for(let u=o.length-1;u>=0;u-=1){const d=o[u],{isExternal:h,modifiers:f,hasImportantModifier:x,baseClassName:w,maybePostfixModifierPosition:j}=r(d);if(h){c=d+(c.length>0?" "+c:c);continue}let v=!!j,p=n(v?w.substring(0,j):w);if(!p){if(!v){c=d+(c.length>0?" "+c:c);continue}if(p=n(w),!p){c=d+(c.length>0?" "+c:c);continue}v=!1}const g=a(f).join(":"),y=x?g+Jl:g,k=y+p;if(l.includes(k))continue;l.push(k);const _=s(p,v);for(let E=0;E<_.length;++E){const O=_[E];l.push(y+O)}c=d+(c.length>0?" "+c:c)}return c};function ey(){let e=0,t,r,n="";for(;e<arguments.length;)(t=arguments[e++])&&(r=Pf(t))&&(n&&(n+=" "),n+=r);return n}const Pf=e=>{if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=Pf(e[n]))&&(r&&(r+=" "),r+=t);return r};function ty(e,...t){let r,n,s,a=l;function l(c){const u=t.reduce((d,h)=>h(d),e());return r=Xx(u),n=r.cache.get,s=r.cache.set,a=o,o(c)}function o(c){const u=n(c);if(u)return u;const d=Zx(c,r);return s(c,d),d}return function(){return a(ey.apply(null,arguments))}}const ge=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},Tf=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Of=/^\((?:(\w[\w-]*):)?(.+)\)$/i,ry=/^\d+\/\d+$/,ny=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,sy=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,iy=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,ay=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ly=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Dr=e=>ry.test(e),q=e=>!!e&&!Number.isNaN(Number(e)),Dt=e=>!!e&&Number.isInteger(Number(e)),Ba=e=>e.endsWith("%")&&q(e.slice(0,-1)),kt=e=>ny.test(e),oy=()=>!0,cy=e=>sy.test(e)&&!iy.test(e),If=()=>!1,uy=e=>ay.test(e),dy=e=>ly.test(e),hy=e=>!$(e)&&!z(e),fy=e=>jn(e,Lf,If),$=e=>Tf.test(e),hr=e=>jn(e,Mf,cy),Wa=e=>jn(e,yy,q),Au=e=>jn(e,Rf,If),my=e=>jn(e,Af,dy),qs=e=>jn(e,$f,uy),z=e=>Of.test(e),Rn=e=>bn(e,Mf),py=e=>bn(e,vy),Lu=e=>bn(e,Rf),gy=e=>bn(e,Lf),xy=e=>bn(e,Af),Ks=e=>bn(e,$f,!0),jn=(e,t,r)=>{const n=Tf.exec(e);return n?n[1]?t(n[1]):r(n[2]):!1},bn=(e,t,r=!1)=>{const n=Of.exec(e);return n?n[1]?t(n[1]):r:!1},Rf=e=>e==="position"||e==="percentage",Af=e=>e==="image"||e==="url",Lf=e=>e==="length"||e==="size"||e==="bg-size",Mf=e=>e==="length",yy=e=>e==="number",vy=e=>e==="family-name",$f=e=>e==="shadow",wy=()=>{const e=ge("color"),t=ge("font"),r=ge("text"),n=ge("font-weight"),s=ge("tracking"),a=ge("leading"),l=ge("breakpoint"),o=ge("container"),c=ge("spacing"),u=ge("radius"),d=ge("shadow"),h=ge("inset-shadow"),f=ge("text-shadow"),x=ge("drop-shadow"),w=ge("blur"),j=ge("perspective"),v=ge("aspect"),p=ge("ease"),g=ge("animate"),y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],k=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],_=()=>[...k(),z,$],E=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto","contain","none"],C=()=>[z,$,c],G=()=>[Dr,"full","auto",...C()],V=()=>[Dt,"none","subgrid",z,$],he=()=>["auto",{span:["full",Dt,z,$]},Dt,z,$],pe=()=>[Dt,"auto",z,$],we=()=>["auto","min","max","fr",z,$],R=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],A=()=>["start","end","center","stretch","center-safe","end-safe"],D=()=>["auto",...C()],U=()=>[Dr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...C()],m=()=>[e,z,$],N=()=>[...k(),Lu,Au,{position:[z,$]}],S=()=>["no-repeat",{repeat:["","x","y","space","round"]}],b=()=>["auto","cover","contain",gy,fy,{size:[z,$]}],P=()=>[Ba,Rn,hr],L=()=>["","none","full",u,z,$],B=()=>["",q,Rn,hr],W=()=>["solid","dashed","dotted","double"],ae=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],le=()=>[q,Ba,Lu,Au],rc=()=>["","none",w,z,$],ks=()=>["none",q,z,$],_s=()=>["none",q,z,$],la=()=>[q,z,$],Ns=()=>[Dr,"full",...C()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[kt],breakpoint:[kt],color:[oy],container:[kt],"drop-shadow":[kt],ease:["in","out","in-out"],font:[hy],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[kt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[kt],shadow:[kt],spacing:["px",q],text:[kt],"text-shadow":[kt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Dr,$,z,v]}],container:["container"],columns:[{columns:[q,$,z,o]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:_()}],overflow:[{overflow:E()}],"overflow-x":[{"overflow-x":E()}],"overflow-y":[{"overflow-y":E()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:G()}],"inset-x":[{"inset-x":G()}],"inset-y":[{"inset-y":G()}],start:[{start:G()}],end:[{end:G()}],top:[{top:G()}],right:[{right:G()}],bottom:[{bottom:G()}],left:[{left:G()}],visibility:["visible","invisible","collapse"],z:[{z:[Dt,"auto",z,$]}],basis:[{basis:[Dr,"full","auto",o,...C()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[q,Dr,"auto","initial","none",$]}],grow:[{grow:["",q,z,$]}],shrink:[{shrink:["",q,z,$]}],order:[{order:[Dt,"first","last","none",z,$]}],"grid-cols":[{"grid-cols":V()}],"col-start-end":[{col:he()}],"col-start":[{"col-start":pe()}],"col-end":[{"col-end":pe()}],"grid-rows":[{"grid-rows":V()}],"row-start-end":[{row:he()}],"row-start":[{"row-start":pe()}],"row-end":[{"row-end":pe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":we()}],"auto-rows":[{"auto-rows":we()}],gap:[{gap:C()}],"gap-x":[{"gap-x":C()}],"gap-y":[{"gap-y":C()}],"justify-content":[{justify:[...R(),"normal"]}],"justify-items":[{"justify-items":[...A(),"normal"]}],"justify-self":[{"justify-self":["auto",...A()]}],"align-content":[{content:["normal",...R()]}],"align-items":[{items:[...A(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...A(),{baseline:["","last"]}]}],"place-content":[{"place-content":R()}],"place-items":[{"place-items":[...A(),"baseline"]}],"place-self":[{"place-self":["auto",...A()]}],p:[{p:C()}],px:[{px:C()}],py:[{py:C()}],ps:[{ps:C()}],pe:[{pe:C()}],pt:[{pt:C()}],pr:[{pr:C()}],pb:[{pb:C()}],pl:[{pl:C()}],m:[{m:D()}],mx:[{mx:D()}],my:[{my:D()}],ms:[{ms:D()}],me:[{me:D()}],mt:[{mt:D()}],mr:[{mr:D()}],mb:[{mb:D()}],ml:[{ml:D()}],"space-x":[{"space-x":C()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":C()}],"space-y-reverse":["space-y-reverse"],size:[{size:U()}],w:[{w:[o,"screen",...U()]}],"min-w":[{"min-w":[o,"screen","none",...U()]}],"max-w":[{"max-w":[o,"screen","none","prose",{screen:[l]},...U()]}],h:[{h:["screen","lh",...U()]}],"min-h":[{"min-h":["screen","lh","none",...U()]}],"max-h":[{"max-h":["screen","lh",...U()]}],"font-size":[{text:["base",r,Rn,hr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,z,Wa]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ba,$]}],"font-family":[{font:[py,$,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,z,$]}],"line-clamp":[{"line-clamp":[q,"none",z,Wa]}],leading:[{leading:[a,...C()]}],"list-image":[{"list-image":["none",z,$]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",z,$]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:m()}],"text-color":[{text:m()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],"text-decoration-thickness":[{decoration:[q,"from-font","auto",z,hr]}],"text-decoration-color":[{decoration:m()}],"underline-offset":[{"underline-offset":[q,"auto",z,$]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:C()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",z,$]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",z,$]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:N()}],"bg-repeat":[{bg:S()}],"bg-size":[{bg:b()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Dt,z,$],radial:["",z,$],conic:[Dt,z,$]},xy,my]}],"bg-color":[{bg:m()}],"gradient-from-pos":[{from:P()}],"gradient-via-pos":[{via:P()}],"gradient-to-pos":[{to:P()}],"gradient-from":[{from:m()}],"gradient-via":[{via:m()}],"gradient-to":[{to:m()}],rounded:[{rounded:L()}],"rounded-s":[{"rounded-s":L()}],"rounded-e":[{"rounded-e":L()}],"rounded-t":[{"rounded-t":L()}],"rounded-r":[{"rounded-r":L()}],"rounded-b":[{"rounded-b":L()}],"rounded-l":[{"rounded-l":L()}],"rounded-ss":[{"rounded-ss":L()}],"rounded-se":[{"rounded-se":L()}],"rounded-ee":[{"rounded-ee":L()}],"rounded-es":[{"rounded-es":L()}],"rounded-tl":[{"rounded-tl":L()}],"rounded-tr":[{"rounded-tr":L()}],"rounded-br":[{"rounded-br":L()}],"rounded-bl":[{"rounded-bl":L()}],"border-w":[{border:B()}],"border-w-x":[{"border-x":B()}],"border-w-y":[{"border-y":B()}],"border-w-s":[{"border-s":B()}],"border-w-e":[{"border-e":B()}],"border-w-t":[{"border-t":B()}],"border-w-r":[{"border-r":B()}],"border-w-b":[{"border-b":B()}],"border-w-l":[{"border-l":B()}],"divide-x":[{"divide-x":B()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":B()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...W(),"hidden","none"]}],"divide-style":[{divide:[...W(),"hidden","none"]}],"border-color":[{border:m()}],"border-color-x":[{"border-x":m()}],"border-color-y":[{"border-y":m()}],"border-color-s":[{"border-s":m()}],"border-color-e":[{"border-e":m()}],"border-color-t":[{"border-t":m()}],"border-color-r":[{"border-r":m()}],"border-color-b":[{"border-b":m()}],"border-color-l":[{"border-l":m()}],"divide-color":[{divide:m()}],"outline-style":[{outline:[...W(),"none","hidden"]}],"outline-offset":[{"outline-offset":[q,z,$]}],"outline-w":[{outline:["",q,Rn,hr]}],"outline-color":[{outline:m()}],shadow:[{shadow:["","none",d,Ks,qs]}],"shadow-color":[{shadow:m()}],"inset-shadow":[{"inset-shadow":["none",h,Ks,qs]}],"inset-shadow-color":[{"inset-shadow":m()}],"ring-w":[{ring:B()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:m()}],"ring-offset-w":[{"ring-offset":[q,hr]}],"ring-offset-color":[{"ring-offset":m()}],"inset-ring-w":[{"inset-ring":B()}],"inset-ring-color":[{"inset-ring":m()}],"text-shadow":[{"text-shadow":["none",f,Ks,qs]}],"text-shadow-color":[{"text-shadow":m()}],opacity:[{opacity:[q,z,$]}],"mix-blend":[{"mix-blend":[...ae(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ae()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[q]}],"mask-image-linear-from-pos":[{"mask-linear-from":le()}],"mask-image-linear-to-pos":[{"mask-linear-to":le()}],"mask-image-linear-from-color":[{"mask-linear-from":m()}],"mask-image-linear-to-color":[{"mask-linear-to":m()}],"mask-image-t-from-pos":[{"mask-t-from":le()}],"mask-image-t-to-pos":[{"mask-t-to":le()}],"mask-image-t-from-color":[{"mask-t-from":m()}],"mask-image-t-to-color":[{"mask-t-to":m()}],"mask-image-r-from-pos":[{"mask-r-from":le()}],"mask-image-r-to-pos":[{"mask-r-to":le()}],"mask-image-r-from-color":[{"mask-r-from":m()}],"mask-image-r-to-color":[{"mask-r-to":m()}],"mask-image-b-from-pos":[{"mask-b-from":le()}],"mask-image-b-to-pos":[{"mask-b-to":le()}],"mask-image-b-from-color":[{"mask-b-from":m()}],"mask-image-b-to-color":[{"mask-b-to":m()}],"mask-image-l-from-pos":[{"mask-l-from":le()}],"mask-image-l-to-pos":[{"mask-l-to":le()}],"mask-image-l-from-color":[{"mask-l-from":m()}],"mask-image-l-to-color":[{"mask-l-to":m()}],"mask-image-x-from-pos":[{"mask-x-from":le()}],"mask-image-x-to-pos":[{"mask-x-to":le()}],"mask-image-x-from-color":[{"mask-x-from":m()}],"mask-image-x-to-color":[{"mask-x-to":m()}],"mask-image-y-from-pos":[{"mask-y-from":le()}],"mask-image-y-to-pos":[{"mask-y-to":le()}],"mask-image-y-from-color":[{"mask-y-from":m()}],"mask-image-y-to-color":[{"mask-y-to":m()}],"mask-image-radial":[{"mask-radial":[z,$]}],"mask-image-radial-from-pos":[{"mask-radial-from":le()}],"mask-image-radial-to-pos":[{"mask-radial-to":le()}],"mask-image-radial-from-color":[{"mask-radial-from":m()}],"mask-image-radial-to-color":[{"mask-radial-to":m()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":k()}],"mask-image-conic-pos":[{"mask-conic":[q]}],"mask-image-conic-from-pos":[{"mask-conic-from":le()}],"mask-image-conic-to-pos":[{"mask-conic-to":le()}],"mask-image-conic-from-color":[{"mask-conic-from":m()}],"mask-image-conic-to-color":[{"mask-conic-to":m()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:N()}],"mask-repeat":[{mask:S()}],"mask-size":[{mask:b()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",z,$]}],filter:[{filter:["","none",z,$]}],blur:[{blur:rc()}],brightness:[{brightness:[q,z,$]}],contrast:[{contrast:[q,z,$]}],"drop-shadow":[{"drop-shadow":["","none",x,Ks,qs]}],"drop-shadow-color":[{"drop-shadow":m()}],grayscale:[{grayscale:["",q,z,$]}],"hue-rotate":[{"hue-rotate":[q,z,$]}],invert:[{invert:["",q,z,$]}],saturate:[{saturate:[q,z,$]}],sepia:[{sepia:["",q,z,$]}],"backdrop-filter":[{"backdrop-filter":["","none",z,$]}],"backdrop-blur":[{"backdrop-blur":rc()}],"backdrop-brightness":[{"backdrop-brightness":[q,z,$]}],"backdrop-contrast":[{"backdrop-contrast":[q,z,$]}],"backdrop-grayscale":[{"backdrop-grayscale":["",q,z,$]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[q,z,$]}],"backdrop-invert":[{"backdrop-invert":["",q,z,$]}],"backdrop-opacity":[{"backdrop-opacity":[q,z,$]}],"backdrop-saturate":[{"backdrop-saturate":[q,z,$]}],"backdrop-sepia":[{"backdrop-sepia":["",q,z,$]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":C()}],"border-spacing-x":[{"border-spacing-x":C()}],"border-spacing-y":[{"border-spacing-y":C()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",z,$]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[q,"initial",z,$]}],ease:[{ease:["linear","initial",p,z,$]}],delay:[{delay:[q,z,$]}],animate:[{animate:["none",g,z,$]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[j,z,$]}],"perspective-origin":[{"perspective-origin":_()}],rotate:[{rotate:ks()}],"rotate-x":[{"rotate-x":ks()}],"rotate-y":[{"rotate-y":ks()}],"rotate-z":[{"rotate-z":ks()}],scale:[{scale:_s()}],"scale-x":[{"scale-x":_s()}],"scale-y":[{"scale-y":_s()}],"scale-z":[{"scale-z":_s()}],"scale-3d":["scale-3d"],skew:[{skew:la()}],"skew-x":[{"skew-x":la()}],"skew-y":[{"skew-y":la()}],transform:[{transform:[z,$,"","none","gpu","cpu"]}],"transform-origin":[{origin:_()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ns()}],"translate-x":[{"translate-x":Ns()}],"translate-y":[{"translate-y":Ns()}],"translate-z":[{"translate-z":Ns()}],"translate-none":["translate-none"],accent:[{accent:m()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:m()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",z,$]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":C()}],"scroll-mx":[{"scroll-mx":C()}],"scroll-my":[{"scroll-my":C()}],"scroll-ms":[{"scroll-ms":C()}],"scroll-me":[{"scroll-me":C()}],"scroll-mt":[{"scroll-mt":C()}],"scroll-mr":[{"scroll-mr":C()}],"scroll-mb":[{"scroll-mb":C()}],"scroll-ml":[{"scroll-ml":C()}],"scroll-p":[{"scroll-p":C()}],"scroll-px":[{"scroll-px":C()}],"scroll-py":[{"scroll-py":C()}],"scroll-ps":[{"scroll-ps":C()}],"scroll-pe":[{"scroll-pe":C()}],"scroll-pt":[{"scroll-pt":C()}],"scroll-pr":[{"scroll-pr":C()}],"scroll-pb":[{"scroll-pb":C()}],"scroll-pl":[{"scroll-pl":C()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",z,$]}],fill:[{fill:["none",...m()]}],"stroke-w":[{stroke:[q,Rn,hr,Wa]}],stroke:[{stroke:["none",...m()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},jy=ty(wy);function kn(...e){return jy(Fx(e))}function F({variant:e="primary",size:t="md",className:r,children:n,...s}){const a="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",l={primary:"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm",secondary:"bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",outline:"border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500",ghost:"text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500"},o={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base"};return i.jsx("button",{className:kn(a,l[e],o[t],r),...s,children:n})}function Y({children:e,className:t,onClick:r}){return i.jsx("div",{className:kn("bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-200",r&&"cursor-pointer hover:shadow-md hover:border-gray-200",t),onClick:r,children:e})}function ke({children:e,className:t}){return i.jsx("div",{className:kn("mb-4",t),children:e})}function _e({children:e,className:t}){return i.jsx("h3",{className:kn("text-lg font-semibold text-gray-900",t),children:e})}function Z({children:e,className:t}){return i.jsx("div",{className:kn("text-gray-600",t),children:e})}function by(){I.useState("");const[e,t]=I.useState(""),[r,n]=I.useState(""),[s,a]=I.useState(!1),[l,o]=I.useState(!1),[c,u]=I.useState(""),{login:d}=Le(),h=async f=>{f.preventDefault(),o(!0),u("");try{await d(e,r)||u("Неверный логин или пароль")}catch(x){u(x instanceof Error?x.message:"Произошла ошибка")}finally{o(!1)}};return i.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4",children:i.jsxs("div",{className:"w-full max-w-md space-y-6",children:[i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4",children:i.jsx(Mx,{className:"h-8 w-8 text-white"})}),i.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"PhotoAlbums"}),i.jsx("p",{className:"text-gray-600 mt-2",children:"Вход в систему"})]}),i.jsx(Y,{children:i.jsxs("form",{onSubmit:h,className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Логин"}),i.jsx("input",{type:"text",value:e,onChange:f=>t(f.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"",required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Пароль"}),i.jsxs("div",{className:"relative",children:[i.jsx("input",{type:s?"text":"password",value:r,onChange:f=>n(f.target.value),className:"w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"",required:!0}),i.jsx("button",{type:"button",onClick:()=>a(!s),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:s?i.jsx(Zo,{className:"h-4 w-4"}):i.jsx(Rr,{className:"h-4 w-4"})})]})]}),c&&i.jsx("div",{className:"text-red-600 text-sm bg-red-50 p-3 rounded-lg",children:c}),i.jsx(F,{type:"submit",className:"w-full",disabled:l,children:l?"Вход...":"Войти"})]})})]})})}function ky({activeTab:e,onTabChange:t}){const{user:r}=Le(),[n,s]=I.useState(!1),l=(()=>{try{const c=localStorage.getItem("messenger_chats");if(c)return JSON.parse(c).reduce((d,h)=>{const f=h.unreadCount&&h.unreadCount[r==null?void 0:r.id]?h.unreadCount[r.id]:0;return d+f},0)}catch(c){console.error("Ошибка при подсчете непрочитанных сообщений:",c)}return 0})(),o=()=>{const c=[{id:"dashboard",label:"Главная",icon:Lx},{id:"projects",label:"Проекты",icon:Li},{id:"reports",label:"Отчеты",icon:Ve}],u={photographer:[],designer:[],admin:[{id:"add-employee",label:"Добавить сотрудника",icon:li}]},d=[{id:"employees",label:"Сотрудники",icon:Pr},{id:"salary",label:"Зарплаты",icon:Ai},{id:"calendar",label:"Календарь",icon:Mt},{id:"messenger",label:"Мессенджер",icon:Ve,badge:l},{id:"script",label:"Скрипт",icon:kr}];return[...c,...u[(r==null?void 0:r.role)||"photographer"]||[],...d]};return i.jsxs(i.Fragment,{children:[n&&i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden",onClick:()=>s(!1)}),i.jsx("button",{onClick:()=>s(!n),className:"md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200",children:n?i.jsx(Ee,{className:"w-5 h-5"}):i.jsx(zx,{className:"w-5 h-5"})}),i.jsxs("div",{className:`
        bg-white border-r border-gray-200 h-full flex flex-col transition-all duration-300 z-50
        fixed md:relative
        ${n?"translate-x-0":"-translate-x-full md:translate-x-0"}
        w-64 md:w-64
      `,children:[i.jsx("div",{className:"p-4 md:p-6 border-b border-gray-200",children:i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("div",{className:"bg-blue-600 w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center",children:i.jsx(br,{className:"h-4 w-4 md:h-6 md:w-6 text-white"})}),i.jsxs("div",{children:[i.jsx("h1",{className:"text-lg md:text-xl font-bold text-gray-900",children:"PhotoAlbums"}),i.jsx("p",{className:"text-xs md:text-sm text-gray-500",children:"Управление проектами"})]})]})}),i.jsx("nav",{className:"flex-1 p-3 md:p-4 overflow-y-auto",children:i.jsx("ul",{className:"space-y-1",children:o().map(c=>{const u=c.icon;return i.jsx("li",{children:i.jsxs("button",{onClick:()=>{t(c.id),s(!1)},className:kn("w-full flex items-center space-x-3 px-3 py-2.5 md:py-2 rounded-lg text-left transition-colors relative",e===c.id?"bg-blue-50 text-blue-700 border-blue-200":"text-gray-600 hover:bg-gray-50 hover:text-gray-900",(r==null?void 0:r.role)!=="admin"&&c.id==="add-employee"?"opacity-50 cursor-not-allowed":""),disabled:(r==null?void 0:r.role)!=="admin"&&c.id==="add-employee",children:[i.jsx(u,{className:"h-5 w-5 flex-shrink-0"}),i.jsx("span",{className:"font-medium text-sm md:text-base",children:c.label}),c.badge&&c.badge>0&&i.jsx("span",{className:"bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center ml-auto",children:c.badge>99?"99+":c.badge})]})},c.id)})})}),i.jsx("div",{className:"p-3 md:p-4 border-t border-gray-200",children:i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("img",{src:(r==null?void 0:r.avatar)||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",alt:r==null?void 0:r.name,className:"w-8 h-8 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0"}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsx("p",{className:"font-medium text-gray-900 truncate text-sm md:text-base",children:r==null?void 0:r.name}),i.jsx("p",{className:"text-xs md:text-sm text-gray-500 capitalize",children:r==null?void 0:r.role})]})]})})]})]})}function _y(){const{user:e,logout:t}=Le();return i.jsx("header",{className:"bg-white border-b border-gray-200 px-4 md:px-6 py-3 md:py-4",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("div",{className:"w-10 md:w-0"}),i.jsx("div",{className:"flex-1 max-w-lg mx-4 md:mx-0",children:i.jsxs("div",{className:"relative",children:[i.jsx(cr,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),i.jsx("input",{type:"text",placeholder:"Поиск проектов, файлов, пользователей...",className:"w-full pl-10 pr-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})}),i.jsxs("div",{className:"flex items-center space-x-2 md:space-x-4",children:[i.jsxs("div",{className:"flex items-center space-x-2 md:space-x-3",children:[i.jsx("img",{src:(e==null?void 0:e.avatar)||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",alt:e==null?void 0:e.name,className:"w-6 h-6 md:w-8 md:h-8 rounded-full object-cover"}),i.jsxs("div",{className:"hidden lg:block",children:[i.jsx("p",{className:"text-sm font-medium text-gray-900 truncate max-w-32",children:e==null?void 0:e.name}),i.jsx("p",{className:"text-xs text-gray-500 capitalize",children:e==null?void 0:e.role})]})]}),i.jsx(F,{variant:"ghost",size:"sm",onClick:t,className:"text-gray-500 hover:text-red-600",children:i.jsx($x,{className:"h-4 w-4 md:h-5 md:w-5"})})]})]})})}function Mu(){const{user:e}=Le(),t=()=>{const a=new Date().getHours();let l="Добро пожаловать";return a<12?l="Доброе утро":a<18?l="Добрый день":l="Добрый вечер",`${l}, ${e==null?void 0:e.name}!`},r=()=>{switch(e==null?void 0:e.role){case"photographer":return{title:"Руководство для фотографа",sections:[{title:"Ваши основные задачи:",items:['Просматривать назначенные вам проекты в разделе "Проекты"','Загружать фотографии для проектов через "Загрузить фото"','Просматривать свою галерею в разделе "Моя галерея"',"Отслеживать дедлайны в календаре"]},{title:"Как работать с проектами:",items:['1. Перейдите в раздел "Проекты" - там вы увидите все проекты, где вы назначены фотографом',"2. Выберите проект и ознакомьтесь с техническим заданием",'3. После съемки загрузите фотографии через "Загрузить фото"',"4. Выберите нужный проект и загрузите все отснятые материалы","5. Уведомите менеджера о завершении съемки"]}]};case"designer":return{title:"Руководство для дизайнера",sections:[{title:"Ваши основные задачи:",items:["Работать с проектами, где вы назначены дизайнером","Создавать макеты альбомов на основе загруженных фотографий",'Использовать готовые шаблоны из раздела "Шаблоны"','Загружать готовые макеты через "Дизайн-макеты"']},{title:"Рабочий процесс:",items:['1. Проверяйте раздел "Проекты" на наличие новых заданий',"2. Дождитесь загрузки фотографий от фотографа","3. Скачайте фотографии и создайте макеты альбома","4. Загрузите готовые макеты через соответствующий раздел","5. Отправьте проект на согласование менеджеру"]}]};case"admin":return{title:"Руководство для менеджера",sections:[{title:"Управление проектами:",items:['Создавайте новые проекты через кнопку "Создать проект"',"Назначайте фотографов и дизайнеров на проекты","Контролируйте сроки выполнения через календарь","Отслеживайте статус всех проектов"]},{title:"Управление персоналом:",items:['Добавляйте новых сотрудников через "Добавить сотрудника"','Редактируйте информацию о сотрудниках в разделе "Сотрудники"','Просматривайте зарплаты в разделе "Зарплаты"',"Связывайтесь с сотрудниками через контактную информацию"]}]};default:return{title:"Общее руководство",sections:[]}}},n=[{title:"Общие функции для всех сотрудников:",items:['Просматривайте информацию о коллегах в разделе "Сотрудники"','Проверяйте зарплатную информацию в разделе "Зарплаты"','Планируйте события в "Календаре" - все могут добавлять события',"Используйте поиск для быстрого нахождения проектов и сотрудников","Связывайтесь с коллегами через контактную информацию"]},{title:"Работа с календарем:",items:["Кликните на любую дату для просмотра событий",'Добавляйте новые события через кнопку "Добавить событие"',"Выбирайте тип события: встреча, фотосессия, дизайн, дедлайн","Все сотрудники видят события, добавленные коллегами","Удалять можно только свои события (админы могут удалять любые)"]},{title:"Контакты и связь:",items:['В разделах "Сотрудники" и "Зарплаты" есть кнопка "Связаться"',"Кликните на email для отправки письма","Кликните на телефон для звонка","Вся контактная информация доступна всем сотрудникам"]},{title:"Поиск и фильтрация:",items:["Используйте поиск в верхней части страницы","В проектах можно искать по названию и описанию","В сотрудниках поиск работает по имени, email и отделу","Фильтруйте проекты по статусу для удобства"]}],s=r();return i.jsxs("div",{className:"p-4 md:p-6 space-y-4 md:space-y-6",children:[i.jsxs("div",{className:"text-center mb-8",children:[i.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-gray-900 mb-2",children:t()}),i.jsx("p",{className:"text-sm md:text-base text-gray-600",children:"Добро пожаловать в корпоративную платформу управления фотоальбомами"})]}),i.jsxs(Y,{children:[i.jsx(ke,{children:i.jsxs(_e,{className:"flex items-center text-lg md:text-xl",children:[i.jsx(br,{className:"h-6 w-6 mr-2 text-blue-600"}),s.title]})}),i.jsx(Z,{children:i.jsx("div",{className:"space-y-4 md:space-y-6",children:s.sections.map((a,l)=>i.jsxs("div",{children:[i.jsx("h3",{className:"text-base md:text-lg font-semibold text-gray-900 mb-3",children:a.title}),i.jsx("ul",{className:"space-y-2",children:a.items.map((o,c)=>i.jsxs("li",{className:"flex items-start",children:[i.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"}),i.jsx("span",{className:"text-sm md:text-base text-gray-700",children:o})]},c))})]},l))})})]}),n.map((a,l)=>i.jsxs(Y,{children:[i.jsx(ke,{children:i.jsxs(_e,{className:"flex items-center text-lg md:text-xl",children:[l===0&&i.jsx(Pr,{className:"h-5 w-5 mr-2 text-green-600"}),l===1&&i.jsx(Mt,{className:"h-5 w-5 mr-2 text-purple-600"}),l===2&&i.jsx(Ve,{className:"h-5 w-5 mr-2 text-orange-600"}),l===3&&i.jsx(cr,{className:"h-5 w-5 mr-2 text-indigo-600"}),a.title]})}),i.jsx(Z,{children:i.jsx("ul",{className:"space-y-2",children:a.items.map((o,c)=>i.jsxs("li",{className:"flex items-start",children:[i.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"}),i.jsx("span",{className:"text-sm md:text-base text-gray-700",children:o})]},c))})})]},l)),i.jsxs(Y,{children:[i.jsx(ke,{children:i.jsxs(_e,{className:"flex items-center text-lg md:text-xl",children:[i.jsx(Li,{className:"h-5 w-5 mr-2 text-blue-600"}),"Быстрая навигация"]})}),i.jsx(Z,{children:i.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4",children:[i.jsxs("div",{className:"flex items-center p-3 bg-blue-50 rounded-lg",children:[i.jsx(Li,{className:"h-6 w-6 md:h-8 md:w-8 text-blue-600 mr-3 flex-shrink-0"}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-gray-900 text-sm md:text-base",children:"Проекты"}),i.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Управление проектами"})]})]}),i.jsxs("div",{className:"flex items-center p-3 bg-green-50 rounded-lg",children:[i.jsx(Pr,{className:"h-6 w-6 md:h-8 md:w-8 text-green-600 mr-3 flex-shrink-0"}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-gray-900 text-sm md:text-base",children:"Сотрудники"}),i.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Контакты коллег"})]})]}),i.jsxs("div",{className:"flex items-center p-3 bg-purple-50 rounded-lg",children:[i.jsx(Mt,{className:"h-6 w-6 md:h-8 md:w-8 text-purple-600 mr-3 flex-shrink-0"}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-gray-900 text-sm md:text-base",children:"Календарь"}),i.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Планирование событий"})]})]}),i.jsxs("div",{className:"flex items-center p-3 bg-yellow-50 rounded-lg",children:[i.jsx(Ai,{className:"h-6 w-6 md:h-8 md:w-8 text-yellow-600 mr-3 flex-shrink-0"}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-gray-900 text-sm md:text-base",children:"Зарплаты"}),i.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Информация о выплатах"})]})]}),i.jsxs("div",{className:"flex items-center p-3 bg-indigo-50 rounded-lg",children:[i.jsx(bt,{className:"h-6 w-6 md:h-8 md:w-8 text-indigo-600 mr-3 flex-shrink-0"}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-gray-900 text-sm md:text-base",children:"Загрузка"}),i.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Файлы и материалы"})]})]}),i.jsxs("div",{className:"flex items-center p-3 bg-red-50 rounded-lg",children:[i.jsx(Ve,{className:"h-6 w-6 md:h-8 md:w-8 text-red-600 mr-3 flex-shrink-0"}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-gray-900 text-sm md:text-base",children:"Скрипт"}),i.jsx("p",{className:"text-xs md:text-sm text-gray-600",children:"Общение с клиентами"})]})]})]})})]}),i.jsxs(Y,{children:[i.jsx(ke,{children:i.jsxs(_e,{className:"flex items-center text-lg md:text-xl",children:[i.jsx(Qn,{className:"h-5 w-5 mr-2 text-green-600"}),"Нужна помощь?"]})}),i.jsx(Z,{children:i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-sm md:text-base text-gray-600 mb-4",children:"Если у вас остались вопросы по работе с системой, обратитесь к администратору"}),i.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6",children:[i.jsxs("div",{className:"flex items-center",children:[i.jsx(ql,{className:"h-4 w-4 text-gray-500 mr-2"}),i.jsx("span",{className:"text-sm text-gray-600",children:"admin@photoalbums.com"})]}),i.jsxs("div",{className:"flex items-center",children:[i.jsx(Qn,{className:"h-4 w-4 text-gray-500 mr-2"}),i.jsx("span",{className:"text-sm text-gray-600",children:"+7 (495) 123-45-67"})]})]})]})})]})]})}function Ny({isOpen:e,onClose:t,onSave:r}){const{user:n,users:s}=Le(),[a,l]=I.useState({title:"",albumType:"",description:"",managerId:(n==null?void 0:n.id)||"",photographerIds:[],designerIds:[],deadline:""}),[o,c]=I.useState(!1),u=["Свадебный альбом","Выпускной альбом","Детский альбом","Корпоративный альбом","Семейный альбом","Портретная съемка"],d=s.filter(v=>v.role==="photographer"),h=s.filter(v=>v.role==="designer"),f=s.filter(v=>v.role==="admin"),x=async v=>{v.preventDefault(),c(!0);const p=s.find(_=>_.id===a.managerId),g=s.filter(_=>a.photographerIds.includes(_.id)),y=s.filter(_=>a.designerIds.includes(_.id)),k={title:a.title,albumType:a.albumType,description:a.description,status:"planning",manager:p||void 0,photographers:g,designers:y,deadline:new Date(a.deadline),photosCount:0,designsCount:0,files:[]};await r(k),c(!1),l({title:"",albumType:"",description:"",managerId:(n==null?void 0:n.id)||"",photographerIds:[],designerIds:[],deadline:""}),t()},w=v=>{l(p=>({...p,[v.target.name]:v.target.value}))},j=(v,p)=>{l(g=>({...g,[v]:g[v].includes(p)?g[v].filter(y=>y!==p):[...g[v],p]}))};return e?i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Создать новый проект"}),i.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsxs("form",{onSubmit:x,className:"p-6 space-y-4",children:[i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Название проекта *"}),i.jsx("input",{type:"text",name:"title",value:a.title,onChange:w,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Например: Свадебный альбом Анны и Михаила"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Тип альбома *"}),i.jsxs("select",{name:"albumType",value:a.albumType,onChange:w,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[i.jsx("option",{value:"",children:"Выберите тип альбома"}),u.map(v=>i.jsx("option",{value:v,children:v},v))]})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Описание проекта"}),i.jsx("textarea",{name:"description",value:a.description,onChange:w,rows:3,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Опишите детали проекта, особые требования или пожелания клиента"})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Менеджер *"}),i.jsxs("select",{name:"managerId",value:a.managerId,onChange:w,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[i.jsx("option",{value:"",children:"Выберите менеджера"}),f.map(v=>i.jsx("option",{value:v.id,children:v.name},v.id))]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Фотографы"}),i.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto border border-gray-300 rounded-lg p-2",children:d.map(v=>i.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[i.jsx("input",{type:"checkbox",checked:a.photographerIds.includes(v.id),onChange:()=>j("photographerIds",v.id),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:v.name})]},v.id))})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Дизайнеры"}),i.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto border border-gray-300 rounded-lg p-2",children:h.map(v=>i.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[i.jsx("input",{type:"checkbox",checked:a.designerIds.includes(v.id),onChange:()=>j("designerIds",v.id),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:v.name})]},v.id))})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Дата завершения *"}),i.jsx("input",{type:"date",name:"deadline",value:a.deadline,onChange:w,required:!0,min:new Date().toISOString().split("T")[0],className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[i.jsx(F,{type:"button",variant:"outline",onClick:t,children:"Отмена"}),i.jsx(F,{type:"submit",disabled:o,children:o?"Создание...":"Создать проект"})]})]})]})}):null}function $u({onProjectSelect:e}){const{user:t,users:r,projects:n,addProject:s}=Le(),[a,l]=I.useState(""),[o,c]=I.useState("all"),[u,d]=I.useState(!1),h=v=>{var p;return t?!!(t.role==="admin"||((p=v.manager)==null?void 0:p.id)===t.id||t.role==="photographer"&&v.photographers.some(g=>g.id===t.id)||t.role==="designer"&&v.designers.some(g=>g.id===t.id)):!1},f=v=>t?t.role==="admin"?!0:h(v):!1,x=v=>{const p={planning:{label:"Планирование",color:"bg-gray-100 text-gray-800",icon:Xo},"in-progress":{label:"В работе",color:"bg-blue-100 text-blue-800",icon:br},review:{label:"На проверке",color:"bg-yellow-100 text-yellow-800",icon:Mi},completed:{label:"Завершен",color:"bg-green-100 text-green-800",icon:kf}};return p[v]||p.planning},w=n.filter(v=>{const p=v.title.toLowerCase().includes(a.toLowerCase())||v.description.toLowerCase().includes(a.toLowerCase()),g=o==="all"||v.status===o;return p&&g&&f(v)}),j=async v=>{s(v)};return i.jsxs("div",{className:"p-4 md:p-6 space-y-4 md:space-y-6",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:"Проекты"}),i.jsx("p",{className:"text-sm md:text-base text-gray-600 mt-1",children:"Управляйте вашими проектами фотоальбомов"})]}),i.jsxs(F,{onClick:()=>d(!0),size:"sm",className:"md:text-base",children:[i.jsx(nt,{className:"h-4 w-4 mr-2"}),i.jsx("span",{className:"hidden sm:inline",children:"Создать проект"}),i.jsx("span",{className:"sm:hidden",children:"Создать"})]})]}),i.jsx(Y,{children:i.jsx(Z,{className:"p-4",children:i.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4",children:[i.jsxs("div",{className:"flex-1 relative",children:[i.jsx(cr,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),i.jsx("input",{type:"text",placeholder:"Поиск проектов...",value:a,onChange:v=>l(v.target.value),className:"w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsxs("div",{className:"flex items-center space-x-2 sm:flex-shrink-0",children:[i.jsx(_f,{className:"h-4 w-4 text-gray-500"}),i.jsxs("select",{value:o,onChange:v=>c(v.target.value),className:"border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[i.jsx("option",{value:"all",children:"Все статусы"}),i.jsx("option",{value:"planning",children:"Планирование"}),i.jsx("option",{value:"in-progress",children:"В работе"}),i.jsx("option",{value:"review",children:"На проверке"}),i.jsx("option",{value:"completed",children:"Завершен"})]})]})]})})}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6",children:w.map(v=>{var y;const p=x(v.status),g=p.icon;return i.jsxs(Y,{className:`transition-all duration-200 ${h(v)?"hover:shadow-lg cursor-pointer":"opacity-75 cursor-not-allowed"}`,onClick:()=>h(v)&&(e==null?void 0:e(v.id)),children:[i.jsx(ke,{children:i.jsxs("div",{className:"flex items-start justify-between",children:[i.jsxs("div",{className:"flex-1",children:[i.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[i.jsx(_e,{className:"text-base md:text-lg truncate",children:v.title}),!h(v)&&i.jsx("span",{className:"px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full",children:"Только просмотр"})]}),i.jsx("p",{className:"text-sm font-medium text-blue-600 mb-1",children:v.albumType}),i.jsx("p",{className:"text-gray-600 text-sm line-clamp-2",children:v.description})]}),i.jsxs("span",{className:`px-2 md:px-3 py-1 rounded-full text-xs font-medium flex items-center flex-shrink-0 ml-2 ${p.color}`,children:[i.jsx(g,{className:"h-3 w-3 mr-1"}),i.jsx("span",{className:"hidden sm:inline",children:p.label})]})]})}),i.jsx(Z,{children:i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"space-y-2 text-sm",children:[i.jsxs("div",{className:"flex items-center space-x-1",children:[i.jsx(aa,{className:"h-4 w-4 text-gray-400"}),i.jsx("span",{className:"text-gray-500",children:"Менеджер:"}),i.jsx("span",{className:"text-gray-600 truncate",children:((y=v.manager)==null?void 0:y.name)||"Не назначен"})]}),i.jsxs("div",{className:"flex items-center space-x-1",children:[i.jsx(br,{className:"h-4 w-4 text-gray-400"}),i.jsx("span",{className:"text-gray-500",children:"Фотографы:"}),i.jsx("span",{className:"text-gray-600 truncate",children:v.photographers.length>0?v.photographers.map(k=>k.name).join(", "):"Не назначены"})]}),i.jsxs("div",{className:"flex items-center space-x-1",children:[i.jsx(Mi,{className:"h-4 w-4 text-gray-400"}),i.jsx("span",{className:"text-gray-500",children:"Дизайнеры:"}),i.jsx("span",{className:"text-gray-600 truncate",children:v.designers.length>0?v.designers.map(k=>k.name).join(", "):"Не назначены"})]})]}),i.jsxs("div",{className:"space-y-2 text-sm",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("span",{className:"text-gray-600",children:["Фото: ",v.files.filter(k=>k.type.startsWith("image/")).length]}),i.jsxs("span",{className:"text-gray-600",children:["Макеты: ",v.files.filter(k=>k.type.includes("design")||k.name.toLowerCase().includes("макет")||k.name.toLowerCase().includes("design")).length]}),i.jsxs("span",{className:"text-gray-600",children:["Файлов: ",v.files.length]})]}),i.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1",children:[i.jsxs("div",{className:"flex items-center space-x-1 text-gray-500",children:[i.jsx(Mt,{className:"h-4 w-4"}),i.jsxs("span",{className:"text-xs",children:["Создан: ",v.createdAt.toLocaleDateString("ru-RU")]})]}),i.jsxs("div",{className:"flex items-center space-x-1 text-gray-500",children:[i.jsx(Mt,{className:"h-4 w-4"}),i.jsxs("span",{className:"text-xs",children:["Дедлайн: ",v.deadline.toLocaleDateString("ru-RU")]})]})]})]})]})}),!h(v)&&i.jsx("div",{className:"px-6 pb-4",children:i.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-3",children:i.jsxs("p",{className:"text-sm text-yellow-800",children:[i.jsx("strong",{children:"Ограниченный доступ:"})," Вы можете просматривать этот проект, но не можете его редактировать или загружать файлы."]})})})]},v.id)})}),w.length===0&&i.jsx(Y,{className:"text-center py-12",children:i.jsxs(Z,{children:[i.jsx("div",{className:"text-gray-400 mb-4",children:i.jsx(Li,{className:"h-16 w-16 mx-auto"})}),i.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Проекты не найдены"}),i.jsx("p",{className:"text-gray-600 mb-4",children:a||o!=="all"?"Попробуйте изменить параметры поиска или фильтрации":"У вас пока нет проектов. Создайте первый проект, чтобы начать работу."}),!a&&o==="all"&&i.jsxs(F,{onClick:()=>d(!0),children:[i.jsx(nt,{className:"h-4 w-4 mr-2"}),"Создать первый проект"]})]})}),i.jsx(Ny,{isOpen:u,onClose:()=>d(!1),onSave:j})]})}function Sy(){const{user:e,addUser:t}=Le(),[r,n]=I.useState({name:"",email:"",phone:"",telegram:"",password:"",role:"photographer",department:"",position:"",salary:"",avatar:""}),[s,a]=I.useState(null),[l,o]=I.useState(null),[c,u]=I.useState(!1),[d,h]=I.useState(!1),[f,x]=I.useState(!1),[w,j]=I.useState(""),v=k=>{var E;const _=(E=k.target.files)==null?void 0:E[0];if(_){if(_.size>5*1024*1024){j("Размер файла не должен превышать 5MB");return}if(!_.type.startsWith("image/")){j("Можно загружать только изображения");return}a(_);const O=new FileReader;O.onload=C=>{var G;o((G=C.target)==null?void 0:G.result)},O.readAsDataURL(_),j("")}},p=()=>{a(null),o(null),n(k=>({...k,avatar:""}))},g=async k=>{if(k.preventDefault(),(e==null?void 0:e.role)!=="admin"){alert("У вас нет прав для выполнения этого действия");return}h(!0),j("");try{let _=r.avatar;s&&(_=URL.createObjectURL(s)),await t({name:r.name,email:r.email,password:r.password,phone:r.phone,telegram:r.telegram,role:r.role,department:r.department,position:r.position,salary:r.salary?parseInt(r.salary):void 0,avatar:_}),h(!1),x(!0),a(null),o(null),n({name:"",email:"",phone:"",telegram:"",password:"",role:"photographer",department:"",position:"",salary:"",avatar:""}),setTimeout(()=>x(!1),3e3)}catch{j("Ошибка при создании сотрудника"),h(!1)}},y=k=>{n(_=>({..._,[k.target.name]:k.target.value}))};return(e==null?void 0:e.role)!=="admin"?i.jsx("div",{className:"p-6",children:i.jsx(Y,{className:"text-center py-12",children:i.jsxs(Z,{children:[i.jsx("div",{className:"text-red-500 mb-4",children:i.jsx(li,{className:"h-16 w-16 mx-auto"})}),i.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Доступ запрещен"}),i.jsx("p",{className:"text-gray-600",children:"Только администраторы могут добавлять новых сотрудников"})]})})}):i.jsxs("div",{className:"p-6 space-y-6",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Добавить сотрудника"}),i.jsx("p",{className:"text-gray-600 mt-1",children:"Создайте новый аккаунт для сотрудника компании"})]}),f&&i.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:i.jsxs("div",{className:"flex items-center",children:[i.jsx("div",{className:"text-green-600",children:i.jsx(li,{className:"h-5 w-5"})}),i.jsxs("div",{className:"ml-3",children:[i.jsx("p",{className:"text-green-800 font-medium",children:"Сотрудник успешно добавлен!"}),i.jsx("p",{className:"text-green-700 text-sm",children:"Данные для входа отправлены на указанный email"})]})]})}),w&&i.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4",children:i.jsxs("div",{className:"flex items-center",children:[i.jsx("div",{className:"text-red-600",children:i.jsx(li,{className:"h-5 w-5"})}),i.jsx("div",{className:"ml-3",children:i.jsx("p",{className:"text-red-800 font-medium",children:w})})]})}),i.jsxs("div",{className:"max-w-2xl",children:[i.jsxs(Y,{children:[i.jsx(ke,{children:i.jsx(_e,{children:"Информация о сотруднике"})}),i.jsx(Z,{children:i.jsxs("form",{onSubmit:g,className:"space-y-6",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Фото профиля"}),i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsx("div",{className:"relative",children:l?i.jsxs("div",{className:"relative",children:[i.jsx("img",{src:l,alt:"Предпросмотр аватара",className:"w-20 h-20 rounded-full object-cover border-2 border-gray-200"}),i.jsx("button",{type:"button",onClick:p,className:"absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors",children:i.jsx(Ee,{className:"h-3 w-3"})})]}):i.jsx("div",{className:"w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300",children:i.jsx(bt,{className:"h-8 w-8 text-gray-400"})})}),i.jsxs("div",{children:[i.jsx("input",{type:"file",accept:"image/*",onChange:v,className:"hidden",id:"avatar-upload"}),i.jsxs("label",{htmlFor:"avatar-upload",className:"cursor-pointer inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors",children:[i.jsx(bt,{className:"h-4 w-4 mr-2"}),"Выбрать фото"]}),i.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"JPG, PNG до 5MB"})]})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Полное имя *"}),i.jsx("input",{type:"text",name:"name",value:r.name,onChange:y,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email для входа *"}),i.jsx("input",{type:"email",name:"email",value:r.email,onChange:y,placeholder:"Этот email будет использоваться для входа",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",required:!0})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Телефон"}),i.jsx("input",{type:"tel",name:"phone",value:r.phone,onChange:y,placeholder:"+7 (495) 123-45-67",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Telegram"}),i.jsx("input",{type:"text",name:"telegram",value:r.telegram,onChange:y,placeholder:"@username",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Пароль *"}),i.jsxs("div",{className:"relative",children:[i.jsx("input",{type:c?"text":"password",name:"password",value:r.password,onChange:y,className:"w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",required:!0}),i.jsx("button",{type:"button",onClick:()=>u(!c),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:c?i.jsx(Zo,{className:"h-4 w-4"}):i.jsx(Rr,{className:"h-4 w-4"})})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Роль *"}),i.jsxs("select",{name:"role",value:r.role,onChange:y,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",required:!0,children:[i.jsx("option",{value:"photographer",children:"Фотограф"}),i.jsx("option",{value:"designer",children:"Дизайнер"}),i.jsx("option",{value:"admin",children:"Администратор"})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Отдел"}),i.jsx("input",{type:"text",name:"department",value:r.department,onChange:y,placeholder:"Например: Фотостудия, Дизайн",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Должность"}),i.jsx("input",{type:"text",name:"position",value:r.position,onChange:y,placeholder:"Например: Старший фотограф",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Зарплата (руб.)"}),i.jsx("input",{type:"number",name:"salary",value:r.salary,onChange:y,placeholder:"50000",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),i.jsxs("div",{className:"flex justify-end space-x-3",children:[i.jsx(F,{type:"button",variant:"outline",children:"Отмена"}),i.jsx(F,{type:"submit",disabled:d,children:d?"Создание...":"Создать сотрудника"})]})]})})]}),i.jsx(Y,{className:"bg-blue-50 border-blue-200",children:i.jsxs(Z,{className:"p-4",children:[i.jsx("h4",{className:"font-medium text-blue-900 mb-3",children:"Информация для входа:"}),i.jsxs("div",{className:"text-sm text-blue-700",children:[i.jsx("p",{children:"Сотрудники смогут войти в систему используя:"}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Email:"}),' тот который вы укажете в поле "Email для входа"']}),i.jsxs("li",{children:[i.jsx("strong",{children:"Пароль:"}),' тот который вы укажете в поле "Пароль"']})]}),i.jsx("p",{className:"mt-2 text-xs",children:"Убедитесь, что сообщили сотруднику его данные для входа"})]})]})})]})]})}function Cy({employee:e,isOpen:t,onClose:r,onSave:n}){var g;const[s,a]=I.useState({name:e.name,email:e.email,phone:e.phone||"",telegram:e.telegram||"",role:e.role,department:e.department||"",position:e.position||"",salary:((g=e.salary)==null?void 0:g.toString())||"",password:"",avatar:e.avatar||""}),[l,o]=I.useState(null),[c,u]=I.useState(e.avatar||null),[d,h]=I.useState(!1),[f,x]=I.useState(!1),w=y=>{var _;const k=(_=y.target.files)==null?void 0:_[0];if(k){if(k.size>5*1024*1024){alert("Размер файла не должен превышать 5MB");return}if(!k.type.startsWith("image/")){alert("Можно загружать только изображения");return}o(k);const E=new FileReader;E.onload=O=>{var C;u((C=O.target)==null?void 0:C.result)},E.readAsDataURL(k)}},j=()=>{o(null),u(null),a(y=>({...y,avatar:""}))},v=async y=>{y.preventDefault(),x(!0);let k=s.avatar;l&&(k=URL.createObjectURL(l));const _={name:s.name,email:s.email,phone:s.phone,telegram:s.telegram,role:s.role,department:s.department,position:s.position,salary:s.salary?parseInt(s.salary):void 0,avatar:k};s.password.trim()&&(_.password=s.password),await n(e.id,_),x(!1),r()},p=y=>{a(k=>({...k,[y.target.name]:y.target.value}))};return t?i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Редактировать сотрудника"}),i.jsx("button",{onClick:r,className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsxs("form",{onSubmit:v,className:"p-6 space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Фото профиля"}),i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsx("div",{className:"relative",children:c?i.jsxs("div",{className:"relative",children:[i.jsx("img",{src:c,alt:"Предпросмотр аватара",className:"w-20 h-20 rounded-full object-cover border-2 border-gray-200"}),i.jsx("button",{type:"button",onClick:j,className:"absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors",children:i.jsx(Ee,{className:"h-3 w-3"})})]}):i.jsx("div",{className:"w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300",children:i.jsx(bt,{className:"h-8 w-8 text-gray-400"})})}),i.jsxs("div",{children:[i.jsx("input",{type:"file",accept:"image/*",onChange:w,className:"hidden",id:"avatar-edit-upload"}),i.jsxs("label",{htmlFor:"avatar-edit-upload",className:"cursor-pointer inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors",children:[i.jsx(bt,{className:"h-4 w-4 mr-2"}),"Изменить фото"]}),i.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"JPG, PNG до 5MB"})]})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Полное имя *"}),i.jsx("input",{type:"text",name:"name",value:s.name,onChange:p,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email *"}),i.jsx("input",{type:"email",name:"email",value:s.email,onChange:p,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Новый пароль (оставьте пустым, если не хотите менять)"}),i.jsxs("div",{className:"relative",children:[i.jsx("input",{type:d?"text":"password",name:"password",value:s.password,onChange:p,className:"w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),i.jsx("button",{type:"button",onClick:()=>h(!d),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:d?i.jsx(Zo,{className:"h-4 w-4"}):i.jsx(Rr,{className:"h-4 w-4"})})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Телефон"}),i.jsx("input",{type:"tel",name:"phone",value:s.phone,onChange:p,placeholder:"+7 (495) 123-45-67",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Telegram"}),i.jsx("input",{type:"text",name:"telegram",value:s.telegram,onChange:p,placeholder:"@username",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Роль *"}),i.jsxs("select",{name:"role",value:s.role,onChange:p,required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[i.jsx("option",{value:"photographer",children:"Фотограф"}),i.jsx("option",{value:"designer",children:"Дизайнер"}),i.jsx("option",{value:"admin",children:"Администратор"})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Отдел"}),i.jsx("input",{type:"text",name:"department",value:s.department,onChange:p,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Должность"}),i.jsx("input",{type:"text",name:"position",value:s.position,onChange:p,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Зарплата (руб.)"}),i.jsx("input",{type:"number",name:"salary",value:s.salary,onChange:p,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]}),i.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[i.jsx(F,{type:"button",variant:"outline",onClick:r,children:"Отмена"}),i.jsx(F,{type:"submit",disabled:f,children:f?"Сохранение...":"Сохранить"})]})]})]})}):null}function Ey(){const{user:e,users:t,updateUser:r,deleteUser:n}=Le(),[s,a]=I.useState(""),[l,o]=I.useState("all"),[c,u]=I.useState(null),[d,h]=I.useState(null),[f,x]=I.useState(null),w=_=>({photographer:"Фотограф",designer:"Дизайнер",admin:"Администратор"})[_]||_,j=_=>({photographer:"bg-blue-100 text-blue-800",designer:"bg-purple-100 text-purple-800",admin:"bg-green-100 text-green-800"})[_]||"bg-gray-100 text-gray-800",v=_=>u(_),p=async(_,E)=>{await r(_,E),u(null)},g=async _=>{d===_?(await n(_),h(null)):(h(_),setTimeout(()=>h(null),3e3))},y=_=>{x(_)},k=t.filter(_=>(_.name+_.email+(_.department||"")).toLowerCase().includes(s.toLowerCase())&&(l==="all"||_.role===l));return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"p-4 md:p-6 space-y-4 md:space-y-6",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:"Сотрудники"}),i.jsx("p",{className:"text-sm md:text-base text-gray-600 mt-1",children:"Управление сотрудниками компании"})]}),i.jsxs(F,{size:"sm",className:"md:text-base",children:[i.jsx(Pr,{className:"h-4 w-4 mr-2"}),i.jsx("span",{className:"hidden sm:inline",children:"Экспорт списка"}),i.jsx("span",{className:"sm:hidden",children:"Экспорт"})]})]}),i.jsx(Y,{children:i.jsx(Z,{className:"p-4",children:i.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4",children:[i.jsxs("div",{className:"flex-1 relative",children:[i.jsx(cr,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"}),i.jsx("input",{type:"text",placeholder:"Поиск сотрудников...",value:s,onChange:_=>a(_.target.value),className:"w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),i.jsxs("div",{className:"flex items-center space-x-2 sm:flex-shrink-0",children:[i.jsx(_f,{className:"h-4 w-4 text-gray-500"}),i.jsxs("select",{value:l,onChange:_=>o(_.target.value),className:"border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",children:[i.jsx("option",{value:"all",children:"Все роли"}),i.jsx("option",{value:"photographer",children:"Фотографы"}),i.jsx("option",{value:"designer",children:"Дизайнеры"}),i.jsx("option",{value:"admin",children:"Администраторы"})]})]})]})})}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6",children:k.map(_=>i.jsx(Y,{className:"hover:shadow-lg transition-all duration-200",children:i.jsx(Z,{className:"p-4 md:p-6",children:i.jsxs("div",{className:"flex items-start space-x-4",children:[i.jsx("img",{src:_.avatar||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",alt:_.name,className:"w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsxs("div",{className:"flex items-start justify-between",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"text-sm sm:text-base md:text-lg font-semibold text-gray-900 truncate",children:_.name}),i.jsx("p",{className:"text-xs sm:text-sm text-gray-600",children:_.position||"Не указана"}),i.jsx("p",{className:"text-sm text-gray-500",children:_.department||"Не указан"})]}),i.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2 whitespace-nowrap ${j(_.role)}`,children:w(_.role)})]}),i.jsxs("div",{className:"mt-3 space-y-2",children:[i.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[i.jsx(ql,{className:"h-4 w-4 mr-2 flex-shrink-0"}),i.jsx("span",{className:"truncate",children:_.email})]}),_.phone&&i.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[i.jsx(Qn,{className:"h-4 w-4 mr-2 flex-shrink-0"}),i.jsx("span",{className:"truncate",children:_.phone})]}),_.telegram&&i.jsxs("div",{className:"flex items-center text-sm text-gray-600",children:[i.jsx(Ve,{className:"h-4 w-4 mr-2 flex-shrink-0"}),i.jsx("span",{className:"truncate",children:_.telegram})]}),i.jsxs("div",{className:"flex items-center justify-between text-sm",children:[i.jsxs("span",{className:"text-gray-600",children:[i.jsx("span",{className:"hidden sm:inline",children:"Дата найма: "}),i.jsx("span",{className:"sm:hidden",children:"Найм: "}),_.createdAt.toLocaleDateString("ru-RU")]}),_.salary&&i.jsxs("span",{className:"font-medium text-gray-900",children:[_.salary.toLocaleString("ru-RU")," ₽"]})]})]}),i.jsxs("div",{className:"mt-3 md:mt-4 flex flex-wrap gap-1 md:gap-2",children:[i.jsxs(F,{size:"sm",variant:"outline",onClick:()=>y(_),children:[i.jsx(Qn,{className:"h-3 w-3 md:h-4 md:w-4 mr-1"}),i.jsx("span",{className:"text-xs md:text-sm",children:"Контакты"})]}),(e==null?void 0:e.role)==="admin"&&i.jsxs(i.Fragment,{children:[i.jsxs(F,{size:"sm",variant:"outline",onClick:()=>v(_),children:[i.jsx(Sf,{className:"h-3 w-3 md:h-4 md:w-4 mr-1"}),i.jsx("span",{className:"hidden sm:inline text-xs md:text-sm",children:"Редактировать"}),i.jsx("span",{className:"sm:hidden text-xs",children:"Ред."})]}),i.jsxs(F,{size:"sm",variant:"outline",className:`${d===_.id?"bg-red-500 text-white hover:bg-red-600":"text-red-600 hover:text-red-700"}`,onClick:()=>g(_.id),children:[i.jsx(ec,{className:"h-3 w-3 md:h-4 md:w-4 mr-1"}),i.jsx("span",{className:"text-xs md:text-sm",children:d===_.id?"Подтвердить":"Удалить"})]})]}),i.jsxs(F,{size:"sm",variant:"outline",onClick:()=>{localStorage.setItem("messenger_open_chat",_.id),window.location.hash="#messenger";const E=new CustomEvent("openMessengerChat",{detail:{userId:_.id}});window.dispatchEvent(E)},children:[i.jsx(Ve,{className:"h-3 w-3 md:h-4 md:w-4 mr-1"}),i.jsx("span",{className:"hidden sm:inline",children:"Написать в чате"}),i.jsx("span",{className:"sm:hidden text-xs",children:"Чат"})]})]})]})]})})},_.id))}),k.length===0&&i.jsx(Y,{className:"text-center py-12",children:i.jsxs(Z,{children:[i.jsx("div",{className:"text-gray-400 mb-4",children:i.jsx(Pr,{className:"h-16 w-16 mx-auto"})}),i.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Сотрудники не найдены"}),i.jsx("p",{className:"text-gray-600",children:"Попробуйте изменить параметры поиска или фильтрации"})]})})]}),c&&i.jsx(Cy,{employee:c,isOpen:!!c,onClose:()=>u(null),onSave:p}),f&&i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-md w-full",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Связаться с сотрудником"}),i.jsx("button",{onClick:()=>x(null),className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsxs("div",{className:"p-6",children:[i.jsxs("div",{className:"flex items-center space-x-4 mb-6",children:[i.jsx("img",{src:f.avatar||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",alt:f.name,className:"w-16 h-16 rounded-full object-cover"}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:f.name}),i.jsx("p",{className:"text-gray-600",children:f.position||"Не указана"}),i.jsx("p",{className:"text-sm text-gray-500",children:f.department||"Не указан"})]})]}),i.jsxs("div",{className:"space-y-3",children:[i.jsxs("a",{href:`mailto:${f.email}`,className:"flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[i.jsx(ql,{className:"h-5 w-5 text-gray-500"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Email"}),i.jsx("p",{className:"text-sm text-gray-600",children:f.email})]})]}),i.jsxs("a",{href:`tel:+7${Math.floor(Math.random()*9e9)+1e9}`,className:"flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[i.jsx(Qn,{className:"h-5 w-5 text-gray-500"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Телефон"}),i.jsx("p",{className:"text-sm text-gray-600",children:f.phone||"Не указан"})]})]}),f.telegram&&i.jsxs("a",{href:`https://t.me/${f.telegram.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[i.jsx(Ve,{className:"h-5 w-5 text-gray-500"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Telegram"}),i.jsx("p",{className:"text-sm text-gray-600",children:f.telegram})]})]})]})]})]})})]})}function Py({isOpen:e,onClose:t,onSave:r,employee:n}){const[s,a]=I.useState({projectType:"individual",infoCollectionPercent:0,photosProcessed:!1,revisionsApproved:!1,magazinesPrinted:!1,deadlinesMet:!0,krMagazines:0,month:new Date().toISOString().slice(0,7)}),l=()=>{const f={individual:{base:210,bonus:90},kindergarten:{base:210,bonus:90},collective_11:{base:175,bonus:75},collective_9:{base:175,bonus:75},collective_4:{base:175,bonus:75}}[s.projectType],x=(100-s.infoCollectionPercent)/1.5;let w=f.bonus;s.deadlinesMet||(w*=.5);const j=f.base*(1-x/100)+w,v=s.krMagazines*200;return j+v},o=h=>({infoCollection:h*.35,photosProcessed:h*.3,revisionsApproved:h*.2,magazinesPrinted:h*.15}),c=h=>{h.preventDefault();const f=l(),x=o(f),w={employeeId:n.id,employeeName:n.name,role:n.role,department:n.department||"Не указан",...s,calculatedSalary:f,paymentStages:x};r(w),t()};if(!e||!n)return null;const u=l(),d=o(u);return i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsxs("h2",{className:"text-xl font-semibold text-gray-900",children:["Расчет зарплаты - ",n.name]}),i.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsxs("form",{onSubmit:c,className:"p-6 space-y-6",children:[i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Тип проекта"}),i.jsxs("select",{value:s.projectType,onChange:h=>a(f=>({...f,projectType:h.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",children:[i.jsx("option",{value:"individual",children:"Индивидуальный концепт"}),i.jsx("option",{value:"kindergarten",children:"Детский сад"}),i.jsx("option",{value:"collective_11",children:'Коллективный "11"'}),i.jsx("option",{value:"collective_9",children:'Коллективный "9"'}),i.jsx("option",{value:"collective_4",children:'Коллективный "4"'})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Месяц"}),i.jsx("input",{type:"month",value:s.month,onChange:h=>a(f=>({...f,month:h.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Процент собранной информации (%)"}),i.jsx("input",{type:"number",min:"0",max:"100",value:s.infoCollectionPercent,onChange:h=>a(f=>({...f,infoCollectionPercent:Number(h.target.value)})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Количество журналов КР"}),i.jsx("input",{type:"number",min:"0",value:s.krMagazines,onChange:h=>a(f=>({...f,krMagazines:Number(h.target.value)})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),i.jsxs("div",{className:"space-y-3",children:[i.jsx("h3",{className:"font-medium text-gray-900",children:"Этапы выполнения"}),i.jsxs("label",{className:"flex items-center space-x-2",children:[i.jsx("input",{type:"checkbox",checked:s.photosProcessed,onChange:h=>a(f=>({...f,photosProcessed:h.target.checked})),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:"Обработанные фотографии скинуты"})]}),i.jsxs("label",{className:"flex items-center space-x-2",children:[i.jsx("input",{type:"checkbox",checked:s.revisionsApproved,onChange:h=>a(f=>({...f,revisionsApproved:h.target.checked})),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:"Правки согласованы"})]}),i.jsxs("label",{className:"flex items-center space-x-2",children:[i.jsx("input",{type:"checkbox",checked:s.magazinesPrinted,onChange:h=>a(f=>({...f,magazinesPrinted:h.target.checked})),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:"Журналы напечатаны"})]}),i.jsxs("label",{className:"flex items-center space-x-2",children:[i.jsx("input",{type:"checkbox",checked:s.deadlinesMet,onChange:h=>a(f=>({...f,deadlinesMet:h.target.checked})),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:"Все дедлайны соблюдены"})]})]}),i.jsxs("div",{className:"bg-blue-50 rounded-lg p-4",children:[i.jsx("h3",{className:"font-medium text-blue-900 mb-3",children:"Предварительный расчет"}),i.jsxs("div",{className:"space-y-2 text-sm",children:[i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{children:"Общая сумма:"}),i.jsxs("span",{className:"font-medium",children:[u.toFixed(2)," ₽"]})]}),i.jsxs("div",{className:"border-t border-blue-200 pt-2 mt-2",children:[i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{children:"За сбор информации (35%):"}),i.jsxs("span",{children:[d.infoCollection.toFixed(2)," ₽"]})]}),i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{children:"За обработанные фото (30%):"}),i.jsxs("span",{children:[d.photosProcessed.toFixed(2)," ₽"]})]}),i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{children:"После согласования правок (20%):"}),i.jsxs("span",{children:[d.revisionsApproved.toFixed(2)," ₽"]})]}),i.jsxs("div",{className:"flex justify-between",children:[i.jsx("span",{children:"После печати журналов (15%):"}),i.jsxs("span",{children:[d.magazinesPrinted.toFixed(2)," ₽"]})]})]})]})]}),i.jsxs("div",{className:"flex justify-end space-x-3",children:[i.jsx(F,{type:"button",variant:"outline",onClick:t,children:"Отмена"}),i.jsx(F,{type:"submit",children:"Сохранить расчет"})]})]})]})})}function Ty(){const{user:e,users:t}=Le(),[r,n]=I.useState(""),[s,a]=I.useState("2024-02"),[l,o]=I.useState(!1),[c,u]=I.useState(null),[d,h]=I.useState([]);I.useEffect(()=>{const v=localStorage.getItem("salary_calculations");if(v)try{h(JSON.parse(v))}catch(p){console.error("Ошибка при загрузке расчетов зарплат:",p)}},[]),I.useEffect(()=>{d.length>0&&localStorage.setItem("salary_calculations",JSON.stringify(d))},[d]);const f=v=>{const p={...v,id:Math.random().toString(36).substr(2,9)};h(g=>{const y=[...g,p];return localStorage.setItem("salary_calculations",JSON.stringify(y)),y})},x=d.filter(v=>{const p=v.employeeName.toLowerCase().includes(r.toLowerCase())||v.department.toLowerCase().includes(r.toLowerCase()),g=v.month===s;return p&&g}),w=x.reduce((v,p)=>v+p.calculatedSalary,0),j=v=>({individual:"Индивидуальный концепт",kindergarten:"Детский сад",collective_11:'Коллективный "11"',collective_9:'Коллективный "9"',collective_4:'Коллективный "4"'})[v]||v;return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"p-6 space-y-6",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Зарплаты сотрудников"}),i.jsx("p",{className:"text-gray-600 mt-1",children:"Динамический расчет зарплат по проектам"})]}),(e==null?void 0:e.role)==="admin"&&i.jsxs("div",{className:"flex space-x-3",children:[i.jsxs(F,{onClick:()=>o(!0),children:[i.jsx(Gs,{className:"h-4 w-4 mr-2"}),"Рассчитать зарплату"]}),i.jsxs(F,{variant:"outline",children:[i.jsx(Mt,{className:"h-4 w-4 mr-2"}),"Экспорт отчета"]})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[i.jsx(Y,{children:i.jsx(Z,{className:"p-6",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Общая сумма"}),i.jsxs("p",{className:"text-2xl font-bold text-gray-900 mt-1",children:[w.toLocaleString("ru-RU")," ₽"]})]}),i.jsx("div",{className:"p-3 rounded-xl bg-blue-50 text-blue-600",children:i.jsx(Ai,{className:"h-6 w-6"})})]})})}),i.jsx(Y,{children:i.jsx(Z,{className:"p-6",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("p",{className:"text-sm font-medium text-gray-600",children:"Расчетов"}),i.jsx("p",{className:"text-2xl font-bold text-gray-900 mt-1",children:x.length})]}),i.jsx("div",{className:"p-3 rounded-xl bg-purple-50 text-purple-600",children:i.jsx(Gs,{className:"h-6 w-6"})})]})})})]}),i.jsxs(Y,{children:[i.jsx(ke,{children:i.jsxs(_e,{className:"flex items-center",children:[i.jsx(Gs,{className:"h-5 w-5 mr-2 text-blue-600"}),"Система расчета зарплат"]})}),i.jsx(Z,{children:i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Разделение зарплаты:"}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsx("div",{className:"bg-blue-50 p-4 rounded-lg",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"text-sm text-gray-700",children:"Выплата за сбор информации"}),i.jsx("span",{className:"font-semibold text-blue-700",children:"35%"})]})}),i.jsx("div",{className:"bg-green-50 p-4 rounded-lg",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"text-sm text-gray-700",children:"Выплата в момент скидывания обработанных фотографий"}),i.jsx("span",{className:"font-semibold text-green-700",children:"30%"})]})}),i.jsx("div",{className:"bg-yellow-50 p-4 rounded-lg",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"text-sm text-gray-700",children:"Выплата после согласования правок"}),i.jsx("span",{className:"font-semibold text-yellow-700",children:"20%"})]})}),i.jsx("div",{className:"bg-purple-50 p-4 rounded-lg",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"text-sm text-gray-700",children:"Выплата после печати журналов"}),i.jsx("span",{className:"font-semibold text-purple-700",children:"15%"})]})})]})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Формулы расчета зарплаты менеджера:"}),i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[i.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Индивидуальный концепт и Детский сад:"}),i.jsx("code",{className:"text-sm text-gray-700 bg-white px-2 py-1 rounded",children:"210 × (1 – (100% – Процент собранной инфы) / 1.5) + 90¹"})]}),i.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[i.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:'Коллективный "11", "9", "4":'}),i.jsx("code",{className:"text-sm text-gray-700 bg-white px-2 py-1 rounded",children:"175 × (1 – (100% – Процент собранной инфы) / 1.5) + 75¹"})]})]})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Условия выплат:"}),i.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4",children:i.jsxs("div",{className:"flex items-start",children:[i.jsx("div",{className:"text-red-600 mr-3 mt-0.5",children:i.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:i.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-red-900 mb-2",children:"Штрафы за несоблюдение дедлайнов:"}),i.jsx("p",{className:"text-sm text-red-800 mb-3",children:"¹ зависит от соблюдения дедлайнов по скидыванию исходников, сбору номеров фото, скидыванию обработанных фото, получению отзывов, разделению по группам, бронированию студии и прочее."}),i.jsx("p",{className:"text-sm text-red-800 font-medium",children:"За несоблюдение сроков любой задачи, которая связана со сбором какой-либо информации, нужной для журнала, из второго слагаемого формулы будет вычитаться 50%."})]})]})})]}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"Дополнительные выплаты:"}),i.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:i.jsxs("div",{className:"flex items-center",children:[i.jsx("div",{className:"text-green-600 mr-3",children:i.jsx(Ai,{className:"w-5 h-5"})}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-green-900",children:"Оплата за журнал КР:"}),i.jsx("p",{className:"text-sm text-green-800",children:"200 рублей за журнал. Если в классе журналов несколько, то 200 рублей умножается на количество журналов КР."})]})]})})]})]})})]}),i.jsx(Y,{children:i.jsx(Z,{className:"p-4",children:i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsxs("div",{className:"flex-1 relative",children:[i.jsx(cr,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),i.jsx("input",{type:"text",placeholder:"Поиск сотрудников...",value:r,onChange:v=>n(v.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsx("div",{className:"flex items-center space-x-2",children:i.jsx("input",{type:"month",value:s,onChange:v=>a(v.target.value),className:"border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})})]})})}),i.jsxs(Y,{children:[i.jsx(ke,{children:i.jsxs(_e,{children:["Расчеты зарплат за ",new Date(s+"-01").toLocaleDateString("ru-RU",{year:"numeric",month:"long"})]})}),i.jsx(Z,{children:x.length===0?i.jsxs("div",{className:"text-center py-8",children:[i.jsx(Gs,{className:"h-12 w-12 text-gray-300 mx-auto mb-3"}),i.jsx("p",{className:"text-gray-500 mb-3",children:"Нет расчетов за выбранный период"}),(e==null?void 0:e.role)==="admin"&&i.jsxs(F,{onClick:()=>o(!0),children:[i.jsx(nt,{className:"h-4 w-4 mr-2"}),"Создать первый расчет"]})]}):i.jsx("div",{className:"overflow-auto",children:i.jsxs("table",{className:"w-full",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b border-gray-200",children:[i.jsx("th",{className:"text-left py-3 px-4 font-medium text-gray-700",children:"Сотрудник"}),i.jsx("th",{className:"text-left py-3 px-4 font-medium text-gray-700",children:"Тип проекта"}),i.jsx("th",{className:"text-left py-3 px-4 font-medium text-gray-700",children:"Прогресс"}),i.jsx("th",{className:"text-right py-3 px-4 font-medium text-gray-700",children:"Зарплата"}),i.jsx("th",{className:"text-center py-3 px-4 font-medium text-gray-700",children:"Действия"})]})}),i.jsx("tbody",{children:x.map(v=>i.jsxs("tr",{className:"border-b border-gray-100 hover:bg-gray-50",children:[i.jsx("td",{className:"py-3 px-4",children:i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:v.employeeName}),i.jsx("p",{className:"text-sm text-gray-500",children:v.department})]})}),i.jsx("td",{className:"py-3 px-4",children:i.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs",children:j(v.projectType)})}),i.jsx("td",{className:"py-3 px-4",children:i.jsxs("div",{className:"space-y-1",children:[i.jsxs("div",{className:"flex items-center text-xs",children:[i.jsx("div",{className:`w-2 h-2 rounded-full mr-2 ${v.infoCollectionPercent>0?"bg-green-500":"bg-gray-300"}`}),"Информация: ",v.infoCollectionPercent,"%"]}),i.jsxs("div",{className:"flex items-center text-xs",children:[i.jsx("div",{className:`w-2 h-2 rounded-full mr-2 ${v.photosProcessed?"bg-green-500":"bg-gray-300"}`}),"Фото обработаны"]}),i.jsxs("div",{className:"flex items-center text-xs",children:[i.jsx("div",{className:`w-2 h-2 rounded-full mr-2 ${v.revisionsApproved?"bg-green-500":"bg-gray-300"}`}),"Правки согласованы"]}),i.jsxs("div",{className:"flex items-center text-xs",children:[i.jsx("div",{className:`w-2 h-2 rounded-full mr-2 ${v.magazinesPrinted?"bg-green-500":"bg-gray-300"}`}),"Журналы напечатаны"]})]})}),i.jsx("td",{className:"py-3 px-4 text-right",children:i.jsxs("div",{children:[i.jsxs("p",{className:"font-medium text-gray-900",children:[v.calculatedSalary.toLocaleString("ru-RU")," ₽"]}),v.krMagazines>0&&i.jsxs("p",{className:"text-xs text-gray-500",children:["+",v.krMagazines," КР журналов"]})]})}),i.jsx("td",{className:"py-3 px-4 text-center",children:i.jsxs(F,{size:"sm",variant:"outline",children:[i.jsx(Rr,{className:"h-4 w-4 mr-1"}),"Детали"]})})]},v.id))})]})})})]})]}),l&&i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-md w-full",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Выберите сотрудника"}),i.jsx("button",{onClick:()=>o(!1),className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsx("div",{className:"p-6",children:i.jsx("div",{className:"space-y-3 max-h-64 overflow-y-auto",children:t.map(v=>i.jsxs("button",{onClick:()=>{u(v),o(!1)},className:"w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[i.jsx("p",{className:"font-medium text-gray-900",children:v.name}),i.jsx("p",{className:"text-sm text-gray-500",children:v.department||"Не указан"})]},v.id))})})]})}),i.jsx(Py,{isOpen:!!c,onClose:()=>u(null),onSave:f,employee:c})]})}function Oy(){const{user:e,projects:t}=Le(),[r,n]=I.useState(new Date),[s,a]=I.useState(null),[l,o]=I.useState(!1),[c,u]=I.useState(!1),d=m=>{var N;return e?!!(e.role==="admin"||((N=m.manager)==null?void 0:N.id)===e.id||e.role==="photographer"&&m.photographers.some(S=>S.id===e.id)||e.role==="designer"&&m.designers.some(S=>S.id===e.id)):!1},h=t.filter(m=>d(m)).map(m=>{var N,S;return{id:`project-${m.id}`,title:`Дедлайн: ${m.title}`,description:`Завершение проекта "${m.title}"`,date:m.deadline.toISOString().split("T")[0],time:"23:59",createdBy:((N=m.manager)==null?void 0:N.id)||"system",createdByName:((S=m.manager)==null?void 0:S.name)||"Система",type:"deadline",isNote:!1}}),[f,x]=I.useState([]);I.useEffect(()=>{const m=localStorage.getItem("calendar_events");if(m)try{const S=JSON.parse(m).map(b=>({...b}));x(S)}catch(N){console.error("Ошибка при загрузке событий календаря:",N)}},[]),I.useEffect(()=>{f.length>=0&&localStorage.setItem("calendar_events",JSON.stringify(f))},[f]);const w=[...f,...h],[j,v]=I.useState({title:"",description:"",time:"09:00",type:"other",isNote:!1}),[p,g]=I.useState({title:"",content:"",time:"09:00"}),y=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],k=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],_=m=>{const N=m.getFullYear(),S=m.getMonth(),b=new Date(N,S,1),L=new Date(N,S+1,0).getDate(),B=(b.getDay()+6)%7,W=[];for(let ae=0;ae<B;ae++)W.push(null);for(let ae=1;ae<=L;ae++)W.push(ae);return W},E=(m,N,S)=>`${m}-${String(N+1).padStart(2,"0")}-${String(S).padStart(2,"0")}`,O=m=>w.filter(N=>N.date===m),C=m=>({meeting:"bg-blue-100 text-blue-800",photoshoot:"bg-green-100 text-green-800",design:"bg-purple-100 text-purple-800",deadline:"bg-red-100 text-red-800",other:"bg-gray-100 text-gray-800"})[m],G=m=>({meeting:"Встреча",photoshoot:"Фотосессия",design:"Дизайн",deadline:"Дедлайн",other:"Другое"})[m],V=()=>{n(new Date(r.getFullYear(),r.getMonth()-1,1))},he=()=>{n(new Date(r.getFullYear(),r.getMonth()+1,1))},pe=m=>{const N=E(r.getFullYear(),r.getMonth(),m);a(N)},we=()=>{if(!s||!j.title.trim())return;const m={id:Math.random().toString(36).substr(2,9),title:j.title,description:j.description,date:s,time:j.time,createdBy:(e==null?void 0:e.id)||"",createdByName:(e==null?void 0:e.name)||"",type:j.type,isNote:j.isNote};x(S=>[...S,m]);const N=[...f,m];localStorage.setItem("calendar_events",JSON.stringify(N)),v({title:"",description:"",time:"09:00",type:"other",isNote:!1}),o(!1)},R=()=>{if(!s||!p.title.trim())return;const m={id:Math.random().toString(36).substr(2,9),title:p.title,description:p.content,date:s,time:p.time,createdBy:(e==null?void 0:e.id)||"",createdByName:(e==null?void 0:e.name)||"",type:"other",isNote:!0};x(S=>[...S,m]);const N=[...f,m];localStorage.setItem("calendar_events",JSON.stringify(N)),g({title:"",content:"",time:"09:00"}),u(!1)},A=m=>{m.startsWith("project-")||x(N=>{const S=N.filter(b=>b.id!==m);return localStorage.setItem("calendar_events",JSON.stringify(S)),S})},D=_(r),U=s?O(s):[];return i.jsxs("div",{className:"p-4 md:p-6 space-y-4 md:space-y-6",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-gray-900",children:"Календарь"}),i.jsx("p",{className:"text-sm md:text-base text-gray-600 mt-1",children:"Планирование проектов и событий"})]}),i.jsx("div",{className:"flex flex-col xs:flex-row gap-2",children:s&&i.jsxs(i.Fragment,{children:[i.jsxs(F,{onClick:()=>u(!0),variant:"outline",size:"sm",children:[i.jsx(nt,{className:"h-4 w-4 mr-2"}),i.jsx("span",{className:"hidden xs:inline",children:"Добавить заметку"}),i.jsx("span",{className:"xs:hidden",children:"Заметка"})]}),i.jsxs(F,{onClick:()=>o(!0),size:"sm",children:[i.jsx(nt,{className:"h-4 w-4 mr-2"}),i.jsx("span",{className:"hidden xs:inline",children:"Добавить событие"}),i.jsx("span",{className:"xs:hidden",children:"Событие"})]})]})})]}),i.jsxs("div",{className:"flex flex-col lg:flex-row gap-4 lg:gap-6 overflow-hidden",children:[i.jsx("div",{className:"flex-1 lg:w-2/3",children:i.jsxs(Y,{className:"h-full",children:[i.jsx(ke,{children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs(_e,{className:"text-base sm:text-lg md:text-xl",children:[y[r.getMonth()]," ",r.getFullYear()]}),i.jsxs("div",{className:"flex space-x-2",children:[i.jsx(F,{variant:"outline",size:"sm",onClick:V,children:i.jsx(Rx,{className:"h-4 w-4"})}),i.jsx(F,{variant:"outline",size:"sm",onClick:he,children:i.jsx(Ax,{className:"h-4 w-4"})})]})]})}),i.jsxs(Z,{className:"p-3 sm:p-4 md:p-6",children:[i.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2 md:mb-4",children:k.map(m=>i.jsx("div",{className:"p-1 md:p-2 text-center text-xs font-medium text-gray-500",children:m},m))}),i.jsx("div",{className:"grid grid-cols-7 gap-1",children:D.map((m,N)=>{if(m===null)return i.jsx("div",{className:"p-1 md:p-2 h-12 sm:h-16 md:h-20"},N);const S=E(r.getFullYear(),r.getMonth(),m),b=O(S),P=s===S,L=S===new Date().toISOString().split("T")[0];return i.jsxs("div",{onClick:()=>pe(m),className:`p-1 md:p-2 h-12 sm:h-16 md:h-20 border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors ${P?"bg-blue-50 border-blue-300":""} ${L?"bg-yellow-50 border-yellow-300":""}`,children:[i.jsx("div",{className:`text-xs font-medium ${L?"text-yellow-800":"text-gray-900"}`,children:m}),i.jsxs("div",{className:"mt-1 space-y-1",children:[b.slice(0,window.innerWidth<640?1:2).map(B=>i.jsxs("div",{className:`text-xs px-1 py-0.5 rounded truncate leading-tight ${C(B.type)} ${B.isNote?"border-l-2 border-purple-400":""}`,title:B.isNote?`Заметка: ${B.title}`:B.title,children:[B.isNote&&"📝 ",B.title]},B.id)),b.length>(window.innerWidth<640?1:2)&&i.jsxs("div",{className:"text-xs text-gray-500 leading-tight",children:["+",b.length-(window.innerWidth<640?1:2)," еще"]})]})]},m)})})]})]})}),i.jsx("div",{className:"flex-1 lg:w-1/3",children:i.jsxs(Y,{className:"h-full",children:[i.jsx(ke,{children:i.jsx(_e,{className:"text-base md:text-lg",children:s?`События на ${new Date(s+"T00:00:00").toLocaleDateString("ru-RU")}`:"Выберите дату"})}),i.jsx(Z,{className:"overflow-y-auto",children:s?i.jsx("div",{className:"space-y-3 md:space-y-4",children:U.length===0?i.jsxs("div",{className:"text-center py-6 md:py-8",children:[i.jsx(Mt,{className:"h-8 w-8 md:h-12 md:w-12 text-gray-300 mx-auto mb-3"}),i.jsx("p",{className:"text-sm md:text-base text-gray-500 mb-3",children:"Нет событий на эту дату"}),i.jsxs("div",{className:"flex flex-col xs:flex-row gap-2 justify-center",children:[i.jsxs(F,{variant:"outline",size:"sm",onClick:()=>u(!0),children:[i.jsx(nt,{className:"h-4 w-4 mr-1"}),"Заметка"]}),i.jsxs(F,{variant:"outline",size:"sm",onClick:()=>o(!0),children:[i.jsx(nt,{className:"h-4 w-4 mr-1"}),"Событие"]})]})]}):U.map(m=>i.jsx("div",{className:`border rounded-lg p-4 ${m.isNote?"border-purple-200 bg-purple-50":"border-gray-200"}`,children:i.jsxs("div",{className:"flex items-start justify-between",children:[i.jsxs("div",{className:"flex-1",children:[i.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-2",children:[m.isNote?i.jsx("span",{className:"px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800",children:"📝 Заметка"}):i.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${C(m.type)}`,children:G(m.type)}),i.jsxs("div",{className:"flex items-center text-xs md:text-sm text-gray-500",children:[i.jsx(Xo,{className:"h-3 w-3 mr-1"}),m.time]})]}),i.jsx("h4",{className:"font-medium text-sm md:text-base text-gray-900 mb-1",children:m.title}),m.description&&i.jsx("p",{className:"text-xs md:text-sm text-gray-600 mb-2 whitespace-pre-wrap",children:m.description}),i.jsxs("div",{className:"flex items-center text-xs text-gray-500",children:[i.jsx(aa,{className:"h-3 w-3 mr-1"}),m.createdByName]})]}),((e==null?void 0:e.role)==="admin"||(e==null?void 0:e.id)===m.createdBy)&&!m.id.startsWith("project-")&&i.jsx("button",{onClick:()=>A(m.id),className:"text-gray-400 hover:text-red-500 transition-colors ml-2",children:i.jsx(Ee,{className:"h-4 w-4"})}),m.id.startsWith("project-")&&i.jsx("div",{className:"text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded ml-2",children:"Проект"})]})},m.id))}):i.jsxs("div",{className:"text-center py-6 md:py-8",children:[i.jsx(Mt,{className:"h-8 w-8 md:h-12 md:w-12 text-gray-300 mx-auto mb-3"}),i.jsx("p",{className:"text-sm md:text-base text-gray-500",children:"Выберите дату в календаре"})]})})]})})]}),c&&i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-auto",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Добавить заметку"}),i.jsx("button",{onClick:()=>u(!1),className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsxs("div",{className:"p-6 space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Заголовок заметки *"}),i.jsx("input",{type:"text",value:p.title,onChange:m=>g(N=>({...N,title:m.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",placeholder:"Введите заголовок заметки"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Содержание заметки"}),i.jsx("textarea",{value:p.content,onChange:m=>g(N=>({...N,content:m.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",rows:4,placeholder:"Напишите содержание заметки"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Время"}),i.jsx("input",{type:"time",value:p.time,onChange:m=>g(N=>({...N,time:m.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"})]}),i.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[i.jsx(F,{variant:"outline",onClick:()=>u(!1),children:"Отмена"}),i.jsx(F,{onClick:R,disabled:!p.title.trim(),className:"bg-purple-600 hover:bg-purple-700",children:"Добавить заметку"})]})]})]})}),l&&i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-auto",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Добавить событие"}),i.jsx("button",{onClick:()=>o(!1),className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsxs("div",{className:"p-6 space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Название события *"}),i.jsx("input",{type:"text",value:j.title,onChange:m=>v(N=>({...N,title:m.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"Введите название события"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Описание"}),i.jsx("textarea",{value:j.description,onChange:m=>v(N=>({...N,description:m.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",rows:3,placeholder:"Дополнительная информация о событии"})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Время"}),i.jsx("input",{type:"time",value:j.time,onChange:m=>v(N=>({...N,time:m.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Тип события"}),i.jsxs("select",{value:j.type,onChange:m=>v(N=>({...N,type:m.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[i.jsx("option",{value:"meeting",children:"Встреча"}),i.jsx("option",{value:"photoshoot",children:"Фотосессия"}),i.jsx("option",{value:"design",children:"Дизайн"}),i.jsx("option",{value:"deadline",children:"Дедлайн"}),i.jsx("option",{value:"other",children:"Другое"})]})]})]}),i.jsxs("div",{className:"flex justify-end space-x-3 pt-4",children:[i.jsx(F,{variant:"outline",onClick:()=>o(!1),children:"Отмена"}),i.jsx(F,{onClick:we,disabled:!j.title.trim(),children:"Добавить событие"})]})]})]})})]})}const Iy=()=>{const[e,t]=I.useState("collective9"),r=[{id:"collective9",label:"КОЛЛЕКТИВНЫЙ 9",icon:Pr},{id:"individual",label:"ИНДИВИДУАЛЬНЫЙ",icon:aa},{id:"kindergarten",label:"ДЕТСКИЙ САД",icon:Ou},{id:"collective11",label:"КОЛЛЕКТИВНЫЙ 11",icon:Ou}],n=()=>{switch(e){case"collective9":return i.jsx("div",{className:"space-y-8",children:i.jsxs(Y,{children:[i.jsx(ke,{children:i.jsxs(_e,{className:"flex items-center",children:[i.jsx(Ve,{className:"h-5 w-5 mr-2 text-purple-600"}),"Сообщение родителю"]})}),i.jsx(Z,{children:i.jsx("div",{className:"bg-gray-50 p-4 rounded-lg",children:i.jsx("p",{className:"whitespace-pre-wrap text-sm leading-relaxed",children:`Коллективный9
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
✅ Мы начали работу с ребятами по сбору информации для журнала. Дали им 15 дней на выполнение заданий по написанию текста для журналов. Передайте, пожалуйста, родителям, чтобы они проконтролировали ребят, чтобы весь текст был написан без грамматических ошибок и в нужном объёме в срок. Заранее спасибо! 🙏`})})})]})});case"individual":return i.jsx("div",{className:"space-y-8",children:i.jsxs(Y,{children:[i.jsx(ke,{children:i.jsxs(_e,{className:"flex items-center",children:[i.jsx(Ve,{className:"h-5 w-5 mr-2 text-blue-600"}),"Сообщение в беседу класса (начальное)"]})}),i.jsx(Z,{children:i.jsx("div",{className:"bg-gray-50 p-4 rounded-lg",children:i.jsx("p",{className:"whitespace-pre-wrap text-sm leading-relaxed",children:`Инд
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
`})})})]})});case"kindergarten":return i.jsx("div",{className:"space-y-8",children:i.jsxs(Y,{children:[i.jsx(ke,{children:i.jsxs(_e,{className:"flex items-center",children:[i.jsx(Ve,{className:"h-5 w-5 mr-2 text-blue-600"}),"Сообщение для детского сада"]})}),i.jsx(Z,{children:i.jsx("div",{className:"bg-gray-50 p-4 rounded-lg",children:i.jsx("p",{className:"whitespace-pre-wrap text-sm leading-relaxed",children:`Детс сад
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

`})})})]})});case"collective11":return i.jsx("div",{className:"space-y-8",children:i.jsxs(Y,{children:[i.jsx(ke,{children:i.jsxs(_e,{className:"flex items-center",children:[i.jsx(Ve,{className:"h-5 w-5 mr-2 text-blue-600"}),"Сообщение для детского сада"]})}),i.jsx(Z,{children:i.jsx("div",{className:"bg-gray-50 p-4 rounded-lg",children:i.jsx("p",{className:"whitespace-pre-wrap text-sm leading-relaxed",children:`Коллективнный11
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

`})})})]})});default:return null}};return i.jsx("div",{className:"min-h-screen bg-gray-50 p-6",children:i.jsxs("div",{className:"max-w-6xl mx-auto",children:[i.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Скрипты для работы с выпускниками"}),i.jsx("div",{className:"flex space-x-4 mb-8",children:r.map(s=>{const a=s.icon;return i.jsxs("button",{onClick:()=>t(s.id),className:`flex items-center px-6 py-3 rounded-lg transition-colors ${e===s.id?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-100"}`,children:[i.jsx(a,{className:"h-5 w-5 mr-2"}),s.label]},s.id)})}),n()]})})};function Ry({isOpen:e,onClose:t,onUpload:r}){const{user:n}=Le(),[s,a]=I.useState({title:"",description:"",file:null}),[l,o]=I.useState(!1),c=x=>{x.preventDefault(),x.stopPropagation(),x.type==="dragenter"||x.type==="dragover"?o(!0):x.type==="dragleave"&&o(!1)},u=x=>{if(x.preventDefault(),x.stopPropagation(),o(!1),x.dataTransfer.files&&x.dataTransfer.files[0]){const w=x.dataTransfer.files[0];w.type==="application/vnd.openxmlformats-officedocument.wordprocessingml.document"||w.type==="application/msword"||w.type==="text/plain"?a(j=>({...j,file:w})):alert("Поддерживаются только файлы Word (.doc, .docx) и текстовые файлы (.txt)")}},d=x=>{if(x.target.files&&x.target.files[0]){const w=x.target.files[0];w.type==="application/vnd.openxmlformats-officedocument.wordprocessingml.document"||w.type==="application/msword"||w.type==="text/plain"?a(j=>({...j,file:w})):alert("Поддерживаются только файлы Word (.doc, .docx) и текстовые файлы (.txt)")}},h=x=>{if(x.preventDefault(),!s.file||!s.title.trim()||!n)return;const w={title:s.title,description:s.description,fileName:s.file.name,fileType:s.file.type,fileSize:s.file.size,uploadedBy:n.id,uploadedByName:n.name,fileUrl:URL.createObjectURL(s.file)};r(w),a({title:"",description:"",file:null}),t()},f=x=>{if(x===0)return"0 Bytes";const w=1024,j=["Bytes","KB","MB","GB"],v=Math.floor(Math.log(x)/Math.log(w));return parseFloat((x/Math.pow(w,v)).toFixed(2))+" "+j[v]};return e?i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Загрузить отчет"}),i.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsxs("form",{onSubmit:h,className:"p-6 space-y-6",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Название отчета *"}),i.jsx("input",{type:"text",value:s.title,onChange:x=>a(w=>({...w,title:x.target.value})),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Например: Отчет по проекту за февраль 2024",required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Описание"}),i.jsx("textarea",{value:s.description,onChange:x=>a(w=>({...w,description:x.target.value})),rows:3,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Краткое описание содержания отчета"})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Файл отчета *"}),i.jsxs("div",{className:`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${l?"border-blue-500 bg-blue-50":"border-gray-300 hover:border-gray-400"}`,onDragEnter:c,onDragLeave:c,onDragOver:c,onDrop:u,children:[i.jsx("input",{type:"file",onChange:d,className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer",accept:".doc,.docx,.txt"}),s.file?i.jsxs("div",{className:"space-y-2",children:[i.jsx(kr,{className:"h-12 w-12 text-green-600 mx-auto"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:s.file.name}),i.jsx("p",{className:"text-sm text-gray-500",children:f(s.file.size)})]}),i.jsx("button",{type:"button",onClick:()=>a(x=>({...x,file:null})),className:"text-red-600 hover:text-red-700 text-sm",children:"Удалить файл"})]}):i.jsxs("div",{className:"space-y-4",children:[i.jsx("div",{className:"flex justify-center",children:i.jsx("div",{className:"bg-blue-100 p-4 rounded-full",children:i.jsx(bt,{className:"h-8 w-8 text-blue-600"})})}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Перетащите файл сюда или нажмите для выбора"}),i.jsx("p",{className:"text-gray-600 mt-1",children:"Поддерживаются файлы Word (.doc, .docx) и текстовые файлы (.txt)"})]})]})]})]}),i.jsxs("div",{className:"flex justify-end space-x-3",children:[i.jsx(F,{type:"button",variant:"outline",onClick:t,children:"Отмена"}),i.jsx(F,{type:"submit",disabled:!s.file||!s.title.trim(),children:"Загрузить отчет"})]})]})]})}):null}function Ay(){const{user:e}=Le(),[t,r]=I.useState([]),[n,s]=I.useState(""),[a,l]=I.useState(!1);Va.useEffect(()=>{const j=localStorage.getItem("reports");if(j)try{const p=JSON.parse(j).map(g=>({...g,uploadedAt:new Date(g.uploadedAt)}));r(p)}catch(v){console.error("Ошибка при загрузке отчетов:",v);const p=[{id:"1",title:'Отчет по проекту "Свадебный альбом" за февраль',description:"Подробный отчет о выполненной работе по свадебному альбому",fileName:"wedding_report_feb.docx",fileType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",fileSize:245760,uploadedBy:"2",uploadedByName:"Анна Иванова",uploadedAt:new Date("2024-02-28"),fileUrl:"#"},{id:"2",title:"Отчет по выпускному альбому",description:"Промежуточный отчет о работе над выпускным альбомом",fileName:"graduation_report.txt",fileType:"text/plain",fileSize:12800,uploadedBy:"3",uploadedByName:"Елена Сидорова",uploadedAt:new Date("2024-02-25"),fileUrl:"#"}];r(p),localStorage.setItem("reports",JSON.stringify(p))}else{const v=[{id:"1",title:'Отчет по проекту "Свадебный альбом" за февраль',description:"Подробный отчет о выполненной работе по свадебному альбому",fileName:"wedding_report_feb.docx",fileType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",fileSize:245760,uploadedBy:"2",uploadedByName:"Анна Иванова",uploadedAt:new Date("2024-02-28"),fileUrl:"#"},{id:"2",title:"Отчет по выпускному альбому",description:"Промежуточный отчет о работе над выпускным альбомом",fileName:"graduation_report.txt",fileType:"text/plain",fileSize:12800,uploadedBy:"3",uploadedByName:"Елена Сидорова",uploadedAt:new Date("2024-02-25"),fileUrl:"#"}];r(v),localStorage.setItem("reports",JSON.stringify(v))}},[]),Va.useEffect(()=>{t.length>0&&localStorage.setItem("reports",JSON.stringify(t))},[t]);const o=j=>{const v={...j,id:Math.random().toString(36).substr(2,9),uploadedAt:new Date};r(p=>{const g=[v,...p];return localStorage.setItem("reports",JSON.stringify(g)),g})},c=j=>{const v=t.find(p=>p.id===j);v&&((e==null?void 0:e.role)==="admin"||(e==null?void 0:e.id)===v.uploadedBy)&&(r(p=>{const g=p.filter(y=>y.id!==j);return localStorage.setItem("reports",JSON.stringify(g)),g}),v.fileUrl&&v.fileUrl.startsWith("blob:")&&URL.revokeObjectURL(v.fileUrl))},u=j=>{if(j.fileUrl){const v=document.createElement("a");v.href=j.fileUrl,v.download=j.fileName,document.body.appendChild(v),v.click(),document.body.removeChild(v)}},d=j=>(e==null?void 0:e.role)==="admin"?!0:(e==null?void 0:e.id)===j.uploadedBy,h=j=>(e==null?void 0:e.role)==="admin"?!0:(e==null?void 0:e.id)===j.uploadedBy,f=t.filter(j=>(j.title.toLowerCase().includes(n.toLowerCase())||j.description.toLowerCase().includes(n.toLowerCase())||j.uploadedByName.toLowerCase().includes(n.toLowerCase()))&&d(j)),x=j=>{if(j===0)return"0 Bytes";const v=1024,p=["Bytes","KB","MB","GB"],g=Math.floor(Math.log(j)/Math.log(v));return parseFloat((j/Math.pow(v,g)).toFixed(2))+" "+p[g]},w=j=>j.includes("word")||j.includes("document")?i.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center",children:i.jsx(kr,{className:"h-6 w-6 text-blue-600"})}):i.jsx("div",{className:"w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center",children:i.jsx(kr,{className:"h-6 w-6 text-gray-600"})});return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"p-6 space-y-6",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Отчеты сотрудников"}),i.jsx("p",{className:"text-gray-600 mt-1",children:(e==null?void 0:e.role)==="admin"?"Просматривайте отчеты всех сотрудников":"Загружайте и управляйте своими отчетами"})]}),i.jsxs(F,{onClick:()=>l(!0),children:[i.jsx(nt,{className:"h-4 w-4 mr-2"}),"Загрузить отчет"]})]}),i.jsx(Y,{children:i.jsx(Z,{className:"p-4",children:i.jsxs("div",{className:"relative",children:[i.jsx(cr,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),i.jsx("input",{type:"text",placeholder:"Поиск отчетов...",value:n,onChange:j=>s(j.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})})}),i.jsx("div",{className:"space-y-4",children:f.length===0?i.jsx(Y,{className:"text-center py-12",children:i.jsxs(Z,{children:[i.jsx("div",{className:"text-gray-400 mb-4",children:i.jsx(kr,{className:"h-16 w-16 mx-auto"})}),i.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:n?"Отчеты не найдены":"Нет отчетов"}),i.jsx("p",{className:"text-gray-600 mb-4",children:n?"Попробуйте изменить параметры поиска":"Загрузите первый отчет, чтобы начать работу"}),!n&&i.jsxs(F,{onClick:()=>l(!0),children:[i.jsx(nt,{className:"h-4 w-4 mr-2"}),"Загрузить первый отчет"]})]})}):f.map(j=>i.jsx(Y,{className:"hover:shadow-md transition-shadow",children:i.jsx(Z,{className:"p-6",children:i.jsxs("div",{className:"flex items-start space-x-4",children:[i.jsx("div",{className:"flex-shrink-0",children:w(j.fileType)}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsxs("div",{className:"flex items-start justify-between",children:[i.jsxs("div",{className:"flex-1",children:[i.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-1",children:j.title}),j.description&&i.jsx("p",{className:"text-gray-600 mb-2",children:j.description}),i.jsxs("div",{className:"flex items-center space-x-4 text-sm text-gray-500",children:[i.jsxs("span",{children:["Файл: ",j.fileName]}),i.jsxs("span",{children:["Размер: ",x(j.fileSize)]}),i.jsxs("span",{children:["Автор: ",j.uploadedByName]}),i.jsxs("span",{children:["Дата: ",j.uploadedAt.toLocaleDateString("ru-RU")]})]})]}),i.jsxs("div",{className:"flex items-center space-x-2 ml-4",children:[(e==null?void 0:e.role)==="admin"&&i.jsxs(F,{size:"sm",variant:"outline",onClick:()=>u(j),children:[i.jsx(Rr,{className:"h-4 w-4 mr-1"}),"Просмотр"]}),i.jsxs(F,{size:"sm",variant:"outline",onClick:()=>u(j),children:[i.jsx(Yo,{className:"h-4 w-4 mr-1"}),"Скачать"]}),h(j)&&i.jsx(F,{size:"sm",variant:"outline",className:"text-red-600 hover:text-red-700",onClick:()=>c(j.id),children:i.jsx(ec,{className:"h-4 w-4"})})]})]}),(e==null?void 0:e.role)!=="admin"&&(e==null?void 0:e.id)!==j.uploadedBy&&i.jsx("div",{className:"mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3",children:i.jsxs("p",{className:"text-sm text-yellow-800",children:[i.jsx("strong",{children:"Ограниченный доступ:"})," Вы видите этот отчет, но не можете его просматривать или скачивать."]})})]})]})})},j.id))})]}),i.jsx(Ry,{isOpen:a,onClose:()=>l(!1),onUpload:o})]})}function Ly({isOpen:e,onClose:t,onUpload:r}){const[n,s]=I.useState(!1),[a,l]=I.useState([]),o=x=>{x.preventDefault(),x.stopPropagation(),x.type==="dragenter"||x.type==="dragover"?s(!0):x.type==="dragleave"&&s(!1)},c=x=>{x.preventDefault(),x.stopPropagation(),s(!1),x.dataTransfer.files&&x.dataTransfer.files[0]&&l(Array.from(x.dataTransfer.files))},u=x=>{x.target.files&&l(Array.from(x.target.files))},d=()=>{a.length>0&&(r(a),l([]),t())},h=x=>{if(x===0)return"0 Bytes";const w=1024,j=["Bytes","KB","MB","GB"],v=Math.floor(Math.log(x)/Math.log(w));return parseFloat((x/Math.pow(w,v)).toFixed(2))+" "+j[v]},f=x=>{l(w=>w.filter((j,v)=>v!==x))};return e?i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Загрузить файлы"}),i.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsxs("div",{className:"p-6 space-y-6",children:[i.jsxs("div",{className:`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${n?"border-blue-500 bg-blue-50":"border-gray-300 hover:border-gray-400"}`,onDragEnter:o,onDragLeave:o,onDragOver:o,onDrop:c,children:[i.jsx("input",{type:"file",multiple:!0,onChange:u,className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer",accept:"image/*,video/*,.pdf,.doc,.docx"}),i.jsxs("div",{className:"space-y-4",children:[i.jsx("div",{className:"flex justify-center",children:i.jsx("div",{className:"bg-blue-100 p-4 rounded-full",children:i.jsx(bt,{className:"h-8 w-8 text-blue-600"})})}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Перетащите файлы сюда или нажмите для выбора"}),i.jsx("p",{className:"text-gray-600 mt-1",children:"Поддерживаются изображения, видео и документы до 10MB"})]})]})]}),a.length>0&&i.jsxs("div",{className:"space-y-3",children:[i.jsxs("h3",{className:"font-medium text-gray-900",children:["Выбранные файлы (",a.length,")"]}),a.map((x,w)=>i.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("div",{className:"flex-shrink-0",children:x.type.startsWith("image/")?i.jsx(Nf,{className:"h-8 w-8 text-blue-500"}):i.jsx(kr,{className:"h-8 w-8 text-gray-500"})}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-gray-900",children:x.name}),i.jsx("p",{className:"text-sm text-gray-500",children:h(x.size)})]})]}),i.jsx("button",{onClick:()=>f(w),className:"text-gray-400 hover:text-red-500 transition-colors",children:i.jsx(Ee,{className:"h-4 w-4"})})]},w))]}),i.jsxs("div",{className:"flex justify-end space-x-3",children:[i.jsx(F,{variant:"outline",onClick:t,children:"Отмена"}),i.jsxs(F,{onClick:d,disabled:a.length===0,children:["Загрузить файлы (",a.length,")"]})]})]})]})}):null}function My({projectId:e,onBack:t}){var N,S;const{user:r,users:n,projects:s,updateProject:a,addFileToProject:l,removeFileFromProject:o}=Le(),[c,u]=I.useState(!1),[d,h]=I.useState({}),[f,x]=I.useState(!1),w=s.find(b=>b.id===e),v=(()=>{var b;return!r||!w?!1:!!(r.role==="admin"||((b=w.manager)==null?void 0:b.id)===r.id||r.role==="photographer"&&w.photographers.some(P=>P.id===r.id)||r.role==="designer"&&w.designers.some(P=>P.id===r.id))})();if(!w)return i.jsx("div",{className:"p-6",children:i.jsx(Y,{className:"text-center py-12",children:i.jsxs(Z,{children:[i.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Проект не найден"}),i.jsx("p",{className:"text-gray-600 mb-4",children:"Возможно, проект был удален или у вас нет доступа к нему"}),i.jsx(F,{onClick:t,children:"Вернуться к списку проектов"})]})})});const p=b=>{const P={planning:{label:"Планирование",color:"bg-gray-100 text-gray-800",icon:Xo},"in-progress":{label:"В работе",color:"bg-blue-100 text-blue-800",icon:br},review:{label:"На проверке",color:"bg-yellow-100 text-yellow-800",icon:Mi},completed:{label:"Завершен",color:"bg-green-100 text-green-800",icon:kf}};return P[b]||P.planning},g=["Свадебный альбом","Выпускной альбом","Детский альбом","Корпоративный альбом","Семейный альбом","Портретная съемка"],y=n.filter(b=>b.role==="photographer"),k=n.filter(b=>b.role==="designer"),_=n.filter(b=>b.role==="admin"),E=()=>{h({title:w.title,albumType:w.albumType,description:w.description,status:w.status,deadline:w.deadline.toISOString().split("T")[0],manager:w.manager,photographers:w.photographers,designers:w.designers}),u(!0)},O=()=>{const b={...d,deadline:d.deadline?new Date(d.deadline):w.deadline,manager:d.manager?n.find(P=>{var L;return P.id===((L=d.manager)==null?void 0:L.id)||d.manager}):w.manager};a(e,b),u(!1),h({})},C=()=>{u(!1),h({})},G=b=>{b.forEach(P=>{const L={name:P.name,type:P.type,size:P.size,preview:P.type.startsWith("image/")?URL.createObjectURL(P):void 0,uploadedBy:r};l(e,L)})},V=b=>{const P=w.files.find(L=>L.id===b);P!=null&&P.preview&&URL.revokeObjectURL(P.preview),o(e,b)},he=b=>{if(b.preview){const P=document.createElement("a");P.href=b.preview,P.download=b.name,document.body.appendChild(P),P.click(),document.body.removeChild(P)}else{const P=new Blob([""],{type:b.type}),L=URL.createObjectURL(P),B=document.createElement("a");B.href=L,B.download=b.name,document.body.appendChild(B),B.click(),document.body.removeChild(B),URL.revokeObjectURL(L)}},pe=b=>{if(b===0)return"0 Bytes";const P=1024,L=["Bytes","KB","MB","GB"],B=Math.floor(Math.log(b)/Math.log(P));return parseFloat((b/Math.pow(P,B)).toFixed(2))+" "+L[B]},we=b=>b.startsWith("image/")?Nf:b.startsWith("video/")?br:kr,R=(b,P)=>{h(L=>({...L,[b]:P}))},A=b=>{h(P=>{const L=P.photographers||w.photographers;if(L.some(W=>W.id===b))return{...P,photographers:L.filter(W=>W.id!==b)};{const W=n.find(ae=>ae.id===b);return{...P,photographers:W?[...L,W]:L}}})},D=b=>{h(P=>{const L=P.designers||w.designers;if(L.some(W=>W.id===b))return{...P,designers:L.filter(W=>W.id!==b)};{const W=n.find(ae=>ae.id===b);return{...P,designers:W?[...L,W]:L}}})},U=p(w.status),m=U.icon;return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"p-6 space-y-6",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsxs(F,{variant:"outline",onClick:t,children:[i.jsx(Ix,{className:"h-4 w-4 mr-2"}),"Назад к проектам"]}),i.jsxs("div",{children:[i.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:c?i.jsx("input",{type:"text",value:d.title||"",onChange:b=>R("title",b.target.value),className:"text-3xl font-bold bg-transparent border-b-2 border-blue-500 focus:outline-none"}):w.title}),i.jsx("p",{className:"text-gray-600 mt-1",children:c?i.jsx("select",{value:d.albumType||"",onChange:b=>R("albumType",b.target.value),className:"bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500",children:g.map(b=>i.jsx("option",{value:b,children:b},b))}):w.albumType})]})]}),i.jsxs("div",{className:"flex items-center space-x-3",children:[c?i.jsxs(i.Fragment,{children:[i.jsxs(F,{variant:"outline",onClick:C,children:[i.jsx(Ee,{className:"h-4 w-4 mr-2"}),"Отмена"]}),i.jsxs(F,{onClick:O,children:[i.jsx(Ux,{className:"h-4 w-4 mr-2"}),"Сохранить"]})]}):v&&i.jsxs(F,{onClick:E,children:[i.jsx(Sf,{className:"h-4 w-4 mr-2"}),"Редактировать"]}),!v&&i.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2",children:i.jsx("span",{className:"text-sm text-yellow-800",children:"Только просмотр"})})]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[i.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[i.jsxs(Y,{children:[i.jsx(ke,{children:i.jsx(_e,{children:"Информация о проекте"})}),i.jsxs(Z,{className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Описание"}),c?i.jsx("textarea",{value:d.description||"",onChange:b=>R("description",b.target.value),rows:3,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}):i.jsx("p",{className:"text-gray-600",children:w.description||"Описание не указано"})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Статус"}),c?i.jsxs("select",{value:d.status||"",onChange:b=>R("status",b.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",children:[i.jsx("option",{value:"planning",children:"Планирование"}),i.jsx("option",{value:"in-progress",children:"В работе"}),i.jsx("option",{value:"review",children:"На проверке"}),i.jsx("option",{value:"completed",children:"Завершен"})]}):i.jsxs("span",{className:`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${U.color}`,children:[i.jsx(m,{className:"h-4 w-4 mr-2"}),U.label]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Дедлайн"}),c?i.jsx("input",{type:"date",value:d.deadline||"",onChange:b=>R("deadline",b.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}):i.jsxs("div",{className:"flex items-center text-gray-600",children:[i.jsx(Mt,{className:"h-4 w-4 mr-2"}),w.deadline.toLocaleDateString("ru-RU")]})]})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Менеджер"}),c?i.jsxs("select",{value:((N=d.manager)==null?void 0:N.id)||"",onChange:b=>R("manager",b.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",children:[i.jsx("option",{value:"",children:"Не назначен"}),_.map(b=>i.jsx("option",{value:b.id,children:b.name},b.id))]}):i.jsxs("div",{className:"flex items-center text-gray-600",children:[i.jsx(aa,{className:"h-4 w-4 mr-2"}),((S=w.manager)==null?void 0:S.name)||"Не назначен"]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Фотографы"}),c?i.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto border border-gray-300 rounded-lg p-2",children:y.map(b=>i.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[i.jsx("input",{type:"checkbox",checked:(d.photographers||w.photographers).some(P=>P.id===b.id),onChange:()=>A(b.id),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:b.name})]},b.id))}):i.jsxs("div",{className:"flex items-center text-gray-600",children:[i.jsx(br,{className:"h-4 w-4 mr-2"}),w.photographers.length>0?w.photographers.map(b=>b.name).join(", "):"Не назначены"]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Дизайнеры"}),c?i.jsx("div",{className:"space-y-2 max-h-32 overflow-y-auto border border-gray-300 rounded-lg p-2",children:k.map(b=>i.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[i.jsx("input",{type:"checkbox",checked:(d.designers||w.designers).some(P=>P.id===b.id),onChange:()=>D(b.id),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),i.jsx("span",{className:"text-sm text-gray-700",children:b.name})]},b.id))}):i.jsxs("div",{className:"flex items-center text-gray-600",children:[i.jsx(Mi,{className:"h-4 w-4 mr-2"}),w.designers.length>0?w.designers.map(b=>b.name).join(", "):"Не назначены"]})]})]})]})]}),i.jsxs(Y,{children:[i.jsx(ke,{children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx(_e,{children:"Файлы проекта"}),v&&i.jsxs(F,{size:"sm",onClick:()=>x(!0),children:[i.jsx(bt,{className:"h-4 w-4 mr-2"}),"Загрузить файлы"]})]})}),i.jsx(Z,{children:i.jsxs("div",{className:"space-y-3",children:[w.files.map(b=>{const P=we(b.type);return i.jsxs("div",{className:"flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",children:[i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("div",{className:"flex-shrink-0",children:b.preview?i.jsx("div",{className:"relative group",children:i.jsx("img",{src:b.preview,alt:b.name,className:"w-12 h-12 object-cover rounded-lg"})}):i.jsx("div",{className:"w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center",children:i.jsx(P,{className:"h-6 w-6 text-gray-500"})})}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-medium text-gray-900",children:b.name}),i.jsxs("p",{className:"text-sm text-gray-500",children:[pe(b.size)," • Загружен ",b.uploadedBy.name," • ",b.uploadedAt.toLocaleDateString("ru-RU")]})]})]}),i.jsxs("div",{className:"flex items-center space-x-2",children:[b.preview&&i.jsxs(F,{size:"sm",variant:"outline",onClick:()=>{const L=document.createElement("div");L.className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4",L.innerHTML=`
                             <div class="relative max-w-4xl max-h-full">
                               <img src="${b.preview}" alt="${b.name}" class="max-w-full max-h-full object-contain rounded-lg">
                               <button class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75">
                                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                 </svg>
                               </button>
                             </div>
                           `,L.onclick=B=>{(B.target===L||B.target.closest("button"))&&document.body.removeChild(L)},document.body.appendChild(L)},children:[i.jsx(Rr,{className:"h-4 w-4 mr-1"}),"Просмотр"]}),i.jsxs(F,{size:"sm",variant:"outline",onClick:()=>he(b),children:[i.jsx(Yo,{className:"h-4 w-4 mr-1"}),"Скачать"]}),v&&i.jsx(F,{size:"sm",variant:"outline",className:"text-red-600 hover:text-red-700",onClick:()=>V(b.id),children:i.jsx(ec,{className:"h-4 w-4"})})]})]},b.id)}),w.files.length===0&&i.jsxs("div",{className:"text-center py-8",children:[i.jsx(bt,{className:"h-12 w-12 text-gray-300 mx-auto mb-3"}),i.jsx("p",{className:"text-gray-500 mb-3",children:"Файлы еще не загружены"}),v&&i.jsxs(F,{variant:"outline",size:"sm",onClick:()=>x(!0),children:[i.jsx(bt,{className:"h-4 w-4 mr-2"}),"Загрузить первые файлы"]})]})]})})]})]}),i.jsxs("div",{className:"space-y-6",children:[i.jsxs(Y,{children:[i.jsx(ke,{children:i.jsx(_e,{children:"Статистика"})}),i.jsxs(Z,{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"text-gray-600",children:"Фотографий"}),i.jsx("span",{className:"font-semibold",children:w.files.filter(b=>b.type.startsWith("image/")).length})]}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"text-gray-600",children:"Макетов"}),i.jsx("span",{className:"font-semibold",children:w.files.filter(b=>b.type.includes("design")||b.name.toLowerCase().includes("макет")||b.name.toLowerCase().includes("design")).length})]}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("span",{className:"text-gray-600",children:"Файлов"}),i.jsx("span",{className:"font-semibold",children:w.files.length})]})]})]}),i.jsxs(Y,{children:[i.jsx(ke,{children:i.jsx(_e,{children:"Временная шкала"})}),i.jsxs(Z,{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Проект создан"}),i.jsx("p",{className:"text-sm text-gray-500",children:w.createdAt.toLocaleDateString("ru-RU")})]})]}),i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Последнее обновление"}),i.jsx("p",{className:"text-sm text-gray-500",children:w.updatedAt.toLocaleDateString("ru-RU")})]})]}),i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:"Дедлайн"}),i.jsx("p",{className:"text-sm text-gray-500",children:w.deadline.toLocaleDateString("ru-RU")})]})]})]})]})]})]})]}),v&&i.jsx(Ly,{isOpen:f,onClose:()=>x(!1),onUpload:G,projectId:e})]})}function $y({isOpen:e,onClose:t,onStartChat:r}){const{user:n,users:s}=Le(),[a,l]=I.useState(""),o=s.filter(d=>!n||d.id===n.id?!1:d.name.toLowerCase().includes(a.toLowerCase())||d.email.toLowerCase().includes(a.toLowerCase())||(d.department||"").toLowerCase().includes(a.toLowerCase())),c=d=>({photographer:"Фотограф",designer:"Дизайнер",admin:"Администратор"})[d]||d,u=d=>({photographer:"bg-blue-100 text-blue-800",designer:"bg-purple-100 text-purple-800",admin:"bg-green-100 text-green-800"})[d]||"bg-gray-100 text-gray-800";return e?i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"bg-white rounded-xl max-w-md w-full max-h-[80vh] overflow-hidden",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Начать новый чат"}),i.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Ee,{className:"h-6 w-6"})})]}),i.jsxs("div",{className:"p-4",children:[i.jsxs("div",{className:"relative mb-4",children:[i.jsx(cr,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),i.jsx("input",{type:"text",placeholder:"Поиск сотрудников...",value:a,onChange:d=>l(d.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),i.jsx("div",{className:"max-h-96 overflow-y-auto space-y-2",children:o.map(d=>i.jsx("button",{onClick:()=>{r(d.id),t()},className:"w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors",children:i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("img",{src:d.avatar||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",alt:d.name,className:"w-10 h-10 rounded-full object-cover"}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("p",{className:"font-medium text-gray-900 truncate",children:d.name}),i.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${u(d.role)}`,children:c(d.role)})]}),i.jsx("p",{className:"text-sm text-gray-500 truncate",children:d.department||"Не указан"})]})]})},d.id))}),o.length===0&&i.jsxs("div",{className:"text-center py-8",children:[i.jsx(Pr,{className:"h-12 w-12 text-gray-300 mx-auto mb-3"}),i.jsx("p",{className:"text-gray-500",children:a?"Сотрудники не найдены":"Нет доступных сотрудников"})]})]})]})}):null}function zy({targetUserId:e,onClearTarget:t}){const{user:r,users:n}=Le(),[s,a]=I.useState(null),[l,o]=I.useState([]),[c,u]=I.useState(""),[d,h]=I.useState(null),[f,x]=I.useState(""),[w,j]=I.useState(!1),v=I.useRef(null),p=I.useRef(null);I.useEffect(()=>{if(e&&r){const m=k(e);a(m),t&&t()}},[e,r]),I.useEffect(()=>{const m=localStorage.getItem("messenger_chats");if(m)try{const S=JSON.parse(m).map(b=>({...b,createdAt:new Date(b.createdAt),messages:b.messages.map(P=>({...P,timestamp:new Date(P.timestamp)})),lastMessage:b.lastMessage?{...b.lastMessage,timestamp:new Date(b.lastMessage.timestamp)}:void 0}));o(S)}catch(N){console.error("Ошибка при загрузке чатов:",N),o([])}},[]),I.useEffect(()=>{l.length>0&&localStorage.setItem("messenger_chats",JSON.stringify(l))},[l]),I.useEffect(()=>{g()},[s,l]);const g=()=>{var m;(m=v.current)==null||m.scrollIntoView({behavior:"smooth"})},y=()=>r?l.filter(m=>m.participants.includes(r.id)):[],k=m=>{if(!r)return"";const N=l.find(P=>P.participants.length===2&&P.participants.includes(r.id)&&P.participants.includes(m));if(N)return N.id;const S=n.find(P=>P.id===m);if(!S)return"";const b={id:Math.random().toString(36).substr(2,9),participants:[r.id,m],participantNames:[r.name,S.name],messages:[],unreadCount:{[r.id]:0,[m]:0},createdAt:new Date};return o(P=>[...P,b]),b.id},_=m=>{const N=k(m);a(N)},E=()=>{if(!c.trim()&&!d||!s||!r)return;const m={id:Math.random().toString(36).substr(2,9),senderId:r.id,senderName:r.name,content:c.trim(),timestamp:new Date,file:d?{name:d.name,size:d.size,type:d.type,url:URL.createObjectURL(d)}:void 0};o(N=>N.map(b=>{if(b.id===s){const P={...b.unreadCount};return b.participants.forEach(L=>{L!==r.id&&(P[L]=(P[L]||0)+1)}),{...b,messages:[...b.messages,m],lastMessage:m,unreadCount:P}}return b})),u(""),h(null)},O=m=>{var S;const N=(S=m.target.files)==null?void 0:S[0];if(N){if(N.size>10*1024*1024){alert("Размер файла не должен превышать 10MB");return}h(N)}},C=m=>{r&&o(N=>N.map(b=>{if(b.id===m){const P={...b.unreadCount};return P[r.id]=0,{...b,unreadCount:P}}return b}))},G=m=>{a(m),C(m)},V=m=>{if(m===0)return"0 Bytes";const N=1024,S=["Bytes","KB","MB","GB"],b=Math.floor(Math.log(m)/Math.log(N));return parseFloat((m/Math.pow(N,b)).toFixed(2))+" "+S[b]},he=m=>m.toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"}),pe=m=>{const N=new Date,S=new Date(N);return S.setDate(S.getDate()-1),m.toDateString()===N.toDateString()?"Сегодня":m.toDateString()===S.toDateString()?"Вчера":m.toLocaleDateString("ru-RU")},we=m=>{if(!r)return null;const N=m.participants.find(S=>S!==r.id);return n.find(S=>S.id===N)},A=y().filter(m=>{const N=we(m);return N?N.name.toLowerCase().includes(f.toLowerCase())||N.email.toLowerCase().includes(f.toLowerCase()):!1}),D=l.find(m=>m.id===s),U=D?we(D):null;return r?i.jsxs("div",{className:"h-full flex flex-col",children:[i.jsx("div",{className:"p-6 border-b border-gray-200",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Мессенджер"}),i.jsx("p",{className:"text-gray-600 mt-1",children:"Общение с коллегами и обмен файлами"})]}),i.jsxs(F,{onClick:()=>j(!0),children:[i.jsx(nt,{className:"h-4 w-4 mr-2"}),"Новый чат"]})]})}),i.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[i.jsxs("div",{className:"w-80 border-r border-gray-200 flex flex-col",children:[i.jsx("div",{className:"p-4 border-b border-gray-200",children:i.jsxs("div",{className:"relative",children:[i.jsx(cr,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),i.jsx("input",{type:"text",placeholder:"Поиск чатов...",value:f,onChange:m=>x(m.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"})]})}),i.jsx("div",{className:"flex-1 overflow-y-auto",children:A.length===0?i.jsxs("div",{className:"p-6 text-center",children:[i.jsx(Ve,{className:"h-12 w-12 text-gray-300 mx-auto mb-3"}),i.jsx("p",{className:"text-gray-500 mb-3",children:f?"Чаты не найдены":"У вас пока нет чатов"}),!f&&i.jsxs(F,{size:"sm",variant:"outline",onClick:()=>j(!0),children:[i.jsx(nt,{className:"h-4 w-4 mr-1"}),"Начать чат"]})]}):A.sort((m,N)=>{var P,L;const S=((P=m.lastMessage)==null?void 0:P.timestamp)||m.createdAt;return(((L=N.lastMessage)==null?void 0:L.timestamp)||N.createdAt).getTime()-S.getTime()}).map(m=>{const N=we(m);if(!N)return null;const S=m.unreadCount[r.id]||0;return i.jsx("button",{onClick:()=>G(m.id),className:`w-full p-4 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 ${s===m.id?"bg-blue-50 border-blue-200":""}`,children:i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("img",{src:N.avatar||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",alt:N.name,className:"w-12 h-12 rounded-full object-cover"}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("h4",{className:"font-medium text-gray-900 truncate",children:N.name}),S>0&&i.jsx("span",{className:"bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center",children:S>99?"99+":S})]}),i.jsxs("p",{className:"text-sm text-gray-500 capitalize truncate",children:[N.role," • ",N.department||"Не указан"]}),m.lastMessage&&i.jsxs("p",{className:"text-xs text-gray-400 truncate mt-1",children:[m.lastMessage.senderId===r.id?"Вы: ":"",m.lastMessage.content||"Файл"]})]})]})},m.id)})})]}),i.jsx("div",{className:"flex-1 flex flex-col",children:s&&D&&U?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"p-4 border-b border-gray-200 bg-white",children:i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("img",{src:U.avatar||"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",alt:U.name,className:"w-10 h-10 rounded-full object-cover"}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-gray-900",children:U.name}),i.jsxs("p",{className:"text-sm text-gray-500 capitalize",children:[U.role," • ",U.department||"Не указан"]})]})]})}),i.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[D.messages.length===0?i.jsxs("div",{className:"text-center py-8",children:[i.jsx(Ve,{className:"h-12 w-12 text-gray-300 mx-auto mb-3"}),i.jsxs("p",{className:"text-gray-500",children:["Начните общение с ",U.name]})]}):D.messages.map((m,N)=>{const S=N===0||pe(m.timestamp)!==pe(D.messages[N-1].timestamp);return i.jsxs("div",{children:[S&&i.jsx("div",{className:"text-center my-4",children:i.jsx("span",{className:"bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full",children:pe(m.timestamp)})}),i.jsx("div",{className:`flex ${m.senderId===r.id?"justify-end":"justify-start"}`,children:i.jsxs("div",{className:`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${m.senderId===r.id?"bg-blue-500 text-white":"bg-gray-100 text-gray-900"}`,children:[m.content&&i.jsx("p",{className:"text-sm break-words",children:m.content}),m.file&&i.jsxs("div",{className:"mt-2 p-2 bg-black bg-opacity-10 rounded",children:[i.jsxs("div",{className:"flex items-center space-x-2",children:[i.jsx(Fa,{className:"h-3 w-3"}),i.jsx("span",{className:"text-xs truncate",children:m.file.name})]}),i.jsx("div",{className:"text-xs opacity-75 mt-1",children:V(m.file.size)}),i.jsxs("div",{className:"flex space-x-1 mt-2",children:[m.file.type.startsWith("image/")&&i.jsx("button",{onClick:()=>{const b=document.createElement("div");b.className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4",b.innerHTML=`
                                          <div class="relative max-w-4xl max-h-full">
                                            <img src="${m.file.url}" alt="${m.file.name}" class="max-w-full max-h-full object-contain rounded-lg">
                                            <button class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75">
                                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                              </svg>
                                            </button>
                                          </div>
                                        `,b.onclick=P=>{(P.target===b||P.target.closest("button"))&&document.body.removeChild(b)},document.body.appendChild(b)},className:"text-xs bg-white bg-opacity-20 px-2 py-1 rounded hover:bg-opacity-30",children:i.jsx(Rr,{className:"h-3 w-3"})}),i.jsx("button",{onClick:()=>{const b=document.createElement("a");b.href=m.file.url,b.download=m.file.name,document.body.appendChild(b),b.click(),document.body.removeChild(b)},className:"text-xs bg-white bg-opacity-20 px-2 py-1 rounded hover:bg-opacity-30",children:i.jsx(Yo,{className:"h-3 w-3"})})]})]}),i.jsx("div",{className:"text-xs opacity-75 mt-1",children:he(m.timestamp)})]})})]},m.id)}),i.jsx("div",{ref:v})]}),i.jsxs("div",{className:"border-t border-gray-200 p-4 bg-white",children:[d&&i.jsxs("div",{className:"mb-3 p-3 bg-gray-50 rounded-lg flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center space-x-2",children:[i.jsx(Fa,{className:"h-4 w-4 text-gray-500"}),i.jsx("span",{className:"text-sm text-gray-700 truncate",children:d.name}),i.jsxs("span",{className:"text-xs text-gray-500",children:["(",V(d.size),")"]})]}),i.jsx("button",{onClick:()=>h(null),className:"text-gray-400 hover:text-red-500",children:i.jsx(Ee,{className:"h-4 w-4"})})]}),i.jsxs("div",{className:"flex items-end space-x-2",children:[i.jsx("input",{type:"file",ref:p,onChange:O,className:"hidden",accept:"image/*,video/*,.pdf,.doc,.docx,.txt"}),i.jsx("button",{onClick:()=>{var m;return(m=p.current)==null?void 0:m.click()},className:"p-2 text-gray-400 hover:text-gray-600 transition-colors",children:i.jsx(Fa,{className:"h-5 w-5"})}),i.jsx("div",{className:"flex-1",children:i.jsx("textarea",{value:c,onChange:m=>u(m.target.value),onKeyPress:m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),E())},placeholder:"Введите сообщение...",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none",rows:1})}),i.jsx(F,{onClick:E,disabled:!c.trim()&&!d,size:"sm",children:i.jsx(Dx,{className:"h-4 w-4"})})]})]})]}):i.jsx("div",{className:"flex-1 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx(Ve,{className:"h-16 w-16 text-gray-300 mx-auto mb-4"}),i.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Выберите чат"}),i.jsx("p",{className:"text-gray-600 mb-4",children:"Выберите существующий чат или создайте новый"}),i.jsxs(F,{onClick:()=>j(!0),children:[i.jsx(nt,{className:"h-4 w-4 mr-2"}),"Начать новый чат"]})]})})})]}),i.jsx($y,{isOpen:w,onClose:()=>j(!1),onStartChat:_})]}):null}function Uy(){const{isAuthenticated:e,loading:t}=Le(),[r,n]=I.useState("dashboard"),[s,a]=I.useState(null),[l,o]=I.useState(null);if(I.useEffect(()=>{const h=x=>{o(x.detail.userId),n("messenger")};window.addEventListener("openMessengerChat",h);const f=localStorage.getItem("messenger_open_chat");return f&&(o(f),localStorage.removeItem("messenger_open_chat")),()=>{window.removeEventListener("openMessengerChat",h)}},[]),t)return i.jsx("div",{className:"h-screen bg-gray-50 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),i.jsx("p",{className:"text-gray-600",children:"Загрузка..."})]})});if(!e)return i.jsx(by,{});const c=h=>{a(h),n("project-detail")},u=()=>{a(null),n("projects")},d=()=>{switch(r){case"dashboard":return i.jsx(Mu,{});case"projects":return i.jsx($u,{onProjectSelect:c});case"project-detail":return s?i.jsx(My,{projectId:s,onBack:u}):i.jsx($u,{onProjectSelect:c});case"reports":return i.jsx(Ay,{});case"add-employee":return i.jsx(Sy,{});case"employees":return i.jsx(Ey,{});case"salary":return i.jsx(Ty,{});case"calendar":return i.jsx(Oy,{});case"messenger":return i.jsx(zy,{targetUserId:l,onClearTarget:()=>o(null)});case"script":return i.jsx(Iy,{});default:return i.jsx(Mu,{})}};return i.jsxs("div",{className:"h-screen bg-gray-50 flex flex-col md:flex-row overflow-hidden",children:[i.jsx(ky,{activeTab:r,onTabChange:n}),i.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden min-w-0 md:ml-0",children:[i.jsx(_y,{}),i.jsx("main",{className:"flex-1 overflow-auto",children:d()})]})]})}function Dy(){return i.jsx(Px,{children:i.jsx(Uy,{})})}Qh(document.getElementById("root")).render(i.jsx(I.StrictMode,{children:i.jsx(Dy,{})}));
