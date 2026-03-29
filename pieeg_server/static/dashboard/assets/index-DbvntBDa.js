var Gy=Object.defineProperty;var Vy=(r,t,i)=>t in r?Gy(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var wi=(r,t,i)=>Vy(r,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Jv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ld={exports:{}},Yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function ky(){if(x_)return Yo;x_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Yo.Fragment=t,Yo.jsx=i,Yo.jsxs=i,Yo}var S_;function jy(){return S_||(S_=1,Ld.exports=ky()),Ld.exports}var R=jy(),Od={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function Xy(){if(y_)return ge;y_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function y(B){return B===null||typeof B!="object"?null:(B=v&&B[v]||B["@@iterator"],typeof B=="function"?B:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,_={};function S(B,V,et){this.props=B,this.context=V,this.refs=_,this.updater=et||M}S.prototype.isReactComponent={},S.prototype.setState=function(B,V){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,V,"setState")},S.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function T(){}T.prototype=S.prototype;function w(B,V,et){this.props=B,this.context=V,this.refs=_,this.updater=et||M}var D=w.prototype=new T;D.constructor=w,C(D,S.prototype),D.isPureReactComponent=!0;var G=Array.isArray;function P(){}var I={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function O(B,V,et){var K=et.ref;return{$$typeof:r,type:B,key:V,ref:K!==void 0?K:null,props:et}}function at(B,V){return O(B.type,V,B.props)}function H(B){return typeof B=="object"&&B!==null&&B.$$typeof===r}function j(B){var V={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(et){return V[et]})}var Z=/\/+/g;function Y(B,V){return typeof B=="object"&&B!==null&&B.key!=null?j(""+B.key):V.toString(36)}function $(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(P,P):(B.status="pending",B.then(function(V){B.status==="pending"&&(B.status="fulfilled",B.value=V)},function(V){B.status==="pending"&&(B.status="rejected",B.reason=V)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function N(B,V,et,K,ft){var W=typeof B;(W==="undefined"||W==="boolean")&&(B=null);var rt=!1;if(B===null)rt=!0;else switch(W){case"bigint":case"string":case"number":rt=!0;break;case"object":switch(B.$$typeof){case r:case t:rt=!0;break;case x:return rt=B._init,N(rt(B._payload),V,et,K,ft)}}if(rt)return ft=ft(B),rt=K===""?"."+Y(B,0):K,G(ft)?(et="",rt!=null&&(et=rt.replace(Z,"$&/")+"/"),N(ft,V,et,"",function(At){return At})):ft!=null&&(H(ft)&&(ft=at(ft,et+(ft.key==null||B&&B.key===ft.key?"":(""+ft.key).replace(Z,"$&/")+"/")+rt)),V.push(ft)),1;rt=0;var _t=K===""?".":K+":";if(G(B))for(var J=0;J<B.length;J++)K=B[J],W=_t+Y(K,J),rt+=N(K,V,et,W,ft);else if(J=y(B),typeof J=="function")for(B=J.call(B),J=0;!(K=B.next()).done;)K=K.value,W=_t+Y(K,J++),rt+=N(K,V,et,W,ft);else if(W==="object"){if(typeof B.then=="function")return N($(B),V,et,K,ft);throw V=String(B),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return rt}function F(B,V,et){if(B==null)return B;var K=[],ft=0;return N(B,K,"","",function(W){return V.call(et,W,ft++)}),K}function tt(B){if(B._status===-1){var V=B._result;V=V(),V.then(function(et){(B._status===0||B._status===-1)&&(B._status=1,B._result=et)},function(et){(B._status===0||B._status===-1)&&(B._status=2,B._result=et)}),B._status===-1&&(B._status=0,B._result=V)}if(B._status===1)return B._result.default;throw B._result}var ot=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},xt={map:F,forEach:function(B,V,et){F(B,function(){V.apply(this,arguments)},et)},count:function(B){var V=0;return F(B,function(){V++}),V},toArray:function(B){return F(B,function(V){return V})||[]},only:function(B){if(!H(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return ge.Activity=g,ge.Children=xt,ge.Component=S,ge.Fragment=i,ge.Profiler=l,ge.PureComponent=w,ge.StrictMode=s,ge.Suspense=m,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ge.__COMPILER_RUNTIME={__proto__:null,c:function(B){return I.H.useMemoCache(B)}},ge.cache=function(B){return function(){return B.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(B,V,et){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var K=C({},B.props),ft=B.key;if(V!=null)for(W in V.key!==void 0&&(ft=""+V.key),V)!E.call(V,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&V.ref===void 0||(K[W]=V[W]);var W=arguments.length-2;if(W===1)K.children=et;else if(1<W){for(var rt=Array(W),_t=0;_t<W;_t++)rt[_t]=arguments[_t+2];K.children=rt}return O(B.type,ft,K)},ge.createContext=function(B){return B={$$typeof:f,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},ge.createElement=function(B,V,et){var K,ft={},W=null;if(V!=null)for(K in V.key!==void 0&&(W=""+V.key),V)E.call(V,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(ft[K]=V[K]);var rt=arguments.length-2;if(rt===1)ft.children=et;else if(1<rt){for(var _t=Array(rt),J=0;J<rt;J++)_t[J]=arguments[J+2];ft.children=_t}if(B&&B.defaultProps)for(K in rt=B.defaultProps,rt)ft[K]===void 0&&(ft[K]=rt[K]);return O(B,W,ft)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(B){return{$$typeof:p,render:B}},ge.isValidElement=H,ge.lazy=function(B){return{$$typeof:x,_payload:{_status:-1,_result:B},_init:tt}},ge.memo=function(B,V){return{$$typeof:h,type:B,compare:V===void 0?null:V}},ge.startTransition=function(B){var V=I.T,et={};I.T=et;try{var K=B(),ft=I.S;ft!==null&&ft(et,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(P,ot)}catch(W){ot(W)}finally{V!==null&&et.types!==null&&(V.types=et.types),I.T=V}},ge.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ge.use=function(B){return I.H.use(B)},ge.useActionState=function(B,V,et){return I.H.useActionState(B,V,et)},ge.useCallback=function(B,V){return I.H.useCallback(B,V)},ge.useContext=function(B){return I.H.useContext(B)},ge.useDebugValue=function(){},ge.useDeferredValue=function(B,V){return I.H.useDeferredValue(B,V)},ge.useEffect=function(B,V){return I.H.useEffect(B,V)},ge.useEffectEvent=function(B){return I.H.useEffectEvent(B)},ge.useId=function(){return I.H.useId()},ge.useImperativeHandle=function(B,V,et){return I.H.useImperativeHandle(B,V,et)},ge.useInsertionEffect=function(B,V){return I.H.useInsertionEffect(B,V)},ge.useLayoutEffect=function(B,V){return I.H.useLayoutEffect(B,V)},ge.useMemo=function(B,V){return I.H.useMemo(B,V)},ge.useOptimistic=function(B,V){return I.H.useOptimistic(B,V)},ge.useReducer=function(B,V,et){return I.H.useReducer(B,V,et)},ge.useRef=function(B){return I.H.useRef(B)},ge.useState=function(B){return I.H.useState(B)},ge.useSyncExternalStore=function(B,V,et){return I.H.useSyncExternalStore(B,V,et)},ge.useTransition=function(){return I.H.useTransition()},ge.version="19.2.4",ge}var M_;function Ep(){return M_||(M_=1,Od.exports=Xy()),Od.exports}var X=Ep();const Wy=Jv(X);var Pd={exports:{}},Zo={},Fd={exports:{}},Id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function qy(){return b_||(b_=1,(function(r){function t(N,F){var tt=N.length;N.push(F);t:for(;0<tt;){var ot=tt-1>>>1,xt=N[ot];if(0<l(xt,F))N[ot]=F,N[tt]=xt,tt=ot;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var F=N[0],tt=N.pop();if(tt!==F){N[0]=tt;t:for(var ot=0,xt=N.length,B=xt>>>1;ot<B;){var V=2*(ot+1)-1,et=N[V],K=V+1,ft=N[K];if(0>l(et,tt))K<xt&&0>l(ft,et)?(N[ot]=ft,N[K]=tt,ot=K):(N[ot]=et,N[V]=tt,ot=V);else if(K<xt&&0>l(ft,tt))N[ot]=ft,N[K]=tt,ot=K;else break t}}return F}function l(N,F){var tt=N.sortIndex-F.sortIndex;return tt!==0?tt:N.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],h=[],x=1,g=null,v=3,y=!1,M=!1,C=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var F=i(h);F!==null;){if(F.callback===null)s(h);else if(F.startTime<=N)s(h),F.sortIndex=F.expirationTime,t(m,F);else break;F=i(h)}}function G(N){if(C=!1,D(N),!M)if(i(m)!==null)M=!0,P||(P=!0,j());else{var F=i(h);F!==null&&$(G,F.startTime-N)}}var P=!1,I=-1,E=5,O=-1;function at(){return _?!0:!(r.unstable_now()-O<E)}function H(){if(_=!1,P){var N=r.unstable_now();O=N;var F=!0;try{t:{M=!1,C&&(C=!1,T(I),I=-1),y=!0;var tt=v;try{e:{for(D(N),g=i(m);g!==null&&!(g.expirationTime>N&&at());){var ot=g.callback;if(typeof ot=="function"){g.callback=null,v=g.priorityLevel;var xt=ot(g.expirationTime<=N);if(N=r.unstable_now(),typeof xt=="function"){g.callback=xt,D(N),F=!0;break e}g===i(m)&&s(m),D(N)}else s(m);g=i(m)}if(g!==null)F=!0;else{var B=i(h);B!==null&&$(G,B.startTime-N),F=!1}}break t}finally{g=null,v=tt,y=!1}F=void 0}}finally{F?j():P=!1}}}var j;if(typeof w=="function")j=function(){w(H)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,Y=Z.port2;Z.port1.onmessage=H,j=function(){Y.postMessage(null)}}else j=function(){S(H,0)};function $(N,F){I=S(function(){N(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(N){switch(v){case 1:case 2:case 3:var F=3;break;default:F=v}var tt=v;v=F;try{return N()}finally{v=tt}},r.unstable_requestPaint=function(){_=!0},r.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var tt=v;v=N;try{return F()}finally{v=tt}},r.unstable_scheduleCallback=function(N,F,tt){var ot=r.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?ot+tt:ot):tt=ot,N){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=tt+xt,N={id:x++,callback:F,priorityLevel:N,startTime:tt,expirationTime:xt,sortIndex:-1},tt>ot?(N.sortIndex=tt,t(h,N),i(m)===null&&N===i(h)&&(C?(T(I),I=-1):C=!0,$(G,tt-ot))):(N.sortIndex=xt,t(m,N),M||y||(M=!0,P||(P=!0,j()))),N},r.unstable_shouldYield=at,r.unstable_wrapCallback=function(N){var F=v;return function(){var tt=v;v=F;try{return N.apply(this,arguments)}finally{v=tt}}}})(Id)),Id}var E_;function Yy(){return E_||(E_=1,Fd.exports=qy()),Fd.exports}var Bd={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function Zy(){if(T_)return Dn;T_=1;var r=Ep();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:h,implementation:x}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,x)},Dn.flushSync=function(m){var h=f.T,x=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=h,s.p=x,s.d.f()}},Dn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,g=p(x,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):x==="script"&&s.d.X(m,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Dn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Dn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,g=p(x,h.crossOrigin);s.d.L(m,x,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Dn.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,h){return m(h)},Dn.useFormState=function(m,h,x){return f.H.useFormState(m,h,x)},Dn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Dn.version="19.2.4",Dn}var A_;function Ky(){if(A_)return Bd.exports;A_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Bd.exports=Zy(),Bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function Qy(){if(R_)return Zo;R_=1;var r=Yy(),t=Ep(),i=Ky();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var b=!1,U=u.child;U;){if(U===a){b=!0,a=u,o=d;break}if(U===o){b=!0,o=u,a=d;break}U=U.sibling}if(!b){for(U=d.child;U;){if(U===a){b=!0,a=d,o=u;break}if(U===o){b=!0,o=d,a=u;break}U=U.sibling}if(!b)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),w=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),at=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Symbol.for("react.client.reference");function Y(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Z?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case S:return"Profiler";case _:return"StrictMode";case G:return"Suspense";case P:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case w:return e.displayName||"Context";case T:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:Y(e.type)||"Memo";case E:n=e._payload,e=e._init;try{return Y(e(n))}catch{}}return null}var $=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},ot=[],xt=-1;function B(e){return{current:e}}function V(e){0>xt||(e.current=ot[xt],ot[xt]=null,xt--)}function et(e,n){xt++,ot[xt]=e.current,e.current=n}var K=B(null),ft=B(null),W=B(null),rt=B(null);function _t(e,n){switch(et(W,n),et(ft,e),et(K,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Vg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Vg(n),e=kg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(K),et(K,e)}function J(){V(K),V(ft),V(W)}function At(e){e.memoizedState!==null&&et(rt,e);var n=K.current,a=kg(n,e.type);n!==a&&(et(ft,e),et(K,a))}function Dt(e){ft.current===e&&(V(K),V(ft)),rt.current===e&&(V(rt),jo._currentValue=tt)}var Bt,Pt;function Lt(e){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",Pt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+e+Pt}var Xt=!1;function Wt(e,n){if(!e||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Rt=function(){throw Error()};if(Object.defineProperty(Rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Rt,[])}catch(St){var mt=St}Reflect.construct(e,[],Rt)}else{try{Rt.call()}catch(St){mt=St}e.call(Rt.prototype)}}else{try{throw Error()}catch(St){mt=St}(Rt=e())&&typeof Rt.catch=="function"&&Rt.catch(function(){})}}catch(St){if(St&&mt&&typeof St.stack=="string")return[St.stack,mt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),b=d[0],U=d[1];if(b&&U){var q=b.split(`
`),ht=U.split(`
`);for(u=o=0;o<q.length&&!q[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ht.length&&!ht[u].includes("DetermineComponentFrameRoot");)u++;if(o===q.length||u===ht.length)for(o=q.length-1,u=ht.length-1;1<=o&&0<=u&&q[o]!==ht[u];)u--;for(;1<=o&&0<=u;o--,u--)if(q[o]!==ht[u]){if(o!==1||u!==1)do if(o--,u--,0>u||q[o]!==ht[u]){var bt=`
`+q[o].replace(" at new "," at ");return e.displayName&&bt.includes("<anonymous>")&&(bt=bt.replace("<anonymous>",e.displayName)),bt}while(1<=o&&0<=u);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Lt(a):""}function se(e,n){switch(e.tag){case 26:case 27:case 5:return Lt(e.type);case 16:return Lt("Lazy");case 13:return e.child!==n&&n!==null?Lt("Suspense Fallback"):Lt("Suspense");case 19:return Lt("SuspenseList");case 0:case 15:return Wt(e.type,!1);case 11:return Wt(e.type.render,!1);case 1:return Wt(e.type,!0);case 31:return Lt("Activity");default:return""}}function k(e){try{var n="",a=null;do n+=se(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ue=Object.prototype.hasOwnProperty,oe=r.unstable_scheduleCallback,le=r.unstable_cancelCallback,Gt=r.unstable_shouldYield,z=r.unstable_requestPaint,A=r.unstable_now,Q=r.unstable_getCurrentPriorityLevel,yt=r.unstable_ImmediatePriority,Et=r.unstable_UserBlockingPriority,gt=r.unstable_NormalPriority,Vt=r.unstable_LowPriority,Ut=r.unstable_IdlePriority,qt=r.log,ee=r.unstable_setDisableYieldValue,Ct=null,wt=null;function kt(e){if(typeof qt=="function"&&ee(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(Ct,e)}catch{}}var zt=Math.clz32?Math.clz32:st,Yt=Math.log,ve=Math.LN2;function st(e){return e>>>=0,e===0?32:31-(Yt(e)/ve|0)|0}var Ft=256,Ot=262144,Zt=4194304;function Nt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var U=o&134217727;return U!==0?(o=U&~d,o!==0?u=Nt(o):(b&=U,b!==0?u=Nt(b):a||(a=U&~e,a!==0&&(u=Nt(a))))):(U=o&~d,U!==0?u=Nt(U):b!==0?u=Nt(b):a||(a=o&~e,a!==0&&(u=Nt(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Qt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function he(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function He(){var e=Zt;return Zt<<=1,(Zt&62914560)===0&&(Zt=4194304),e}function Ne(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function In(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,n,a,o,u,d){var b=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var U=e.entanglements,q=e.expirationTimes,ht=e.hiddenUpdates;for(a=b&~a;0<a;){var bt=31-zt(a),Rt=1<<bt;U[bt]=0,q[bt]=-1;var mt=ht[bt];if(mt!==null)for(ht[bt]=null,bt=0;bt<mt.length;bt++){var St=mt[bt];St!==null&&(St.lane&=-536870913)}a&=~Rt}o!==0&&ao(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(b&~n))}function ao(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ws(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Sl(e,n){var a=n&-n;return a=(a&42)!==0?1:qs(a),(a&(e.suspendedLanes|n))!==0?0:a}function qs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ys(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fi(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:d_(e.type))}function Zs(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var bi=Math.random().toString(36).slice(2),cn="__reactFiber$"+bi,_n="__reactProps$"+bi,$i="__reactContainer$"+bi,wa="__reactEvents$"+bi,yl="__reactListeners$"+bi,Ml="__reactHandles$"+bi,bl="__reactResources$"+bi,ps="__reactMarker$"+bi;function so(e){delete e[cn],delete e[_n],delete e[wa],delete e[yl],delete e[Ml]}function Da(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[$i]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Kg(e);e!==null;){if(a=e[cn])return a;e=Kg(e)}return n}e=a,a=e.parentNode}return null}function Na(e){if(e=e[cn]||e[$i]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ms(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function L(e){var n=e[bl];return n||(n=e[bl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function it(e){e[ps]=!0}var vt=new Set,pt={};function ct(e,n){It(e,n),It(e+"Capture",n)}function It(e,n){for(pt[e]=n,e=0;e<n.length;e++)vt.add(n[e])}var Kt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ht={},ne={};function ae(e){return ue.call(ne,e)?!0:ue.call(Ht,e)?!1:Kt.test(e)?ne[e]=!0:(Ht[e]=!0,!1)}function fe(e,n,a){if(ae(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function me(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Jt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $e(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){a=""+b,d.call(this,b)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(b){a=""+b},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Pe(e){if(!e._valueTracker){var n=$e(e)?"checked":"value";e._valueTracker=tn(e,n,""+e[n])}}function vn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=$e(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function te(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bn=/[\n"\\]/g;function pe(e){return e.replace(Bn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zn(e,n,a,o,u,d,b,U){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),n!=null?b==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xe(n)):e.value!==""+xe(n)&&(e.value=""+xe(n)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),n!=null?Ei(e,b,xe(n)):a!=null?Ei(e,b,xe(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?e.name=""+xe(U):e.removeAttribute("name")}function Qn(e,n,a,o,u,d,b,U){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Pe(e);return}a=a!=null?""+xe(a):"",n=n!=null?""+xe(n):a,U||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=U?e.checked:!!o,e.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),Pe(e)}function Ei(e,n,a){n==="number"&&te(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Jn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+xe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ze(e,n,a){if(n!=null&&(n=""+xe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+xe(a):""}function un(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if($(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=xe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Pe(e)}function Hn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var fn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ti(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||fn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ta(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ti(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Ti(e,d,n[d])}function Ks(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ix=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function El(e){return Bx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ea(){}var wu=null;function Du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qs=null,Js=null;function Gp(e){var n=Na(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;t:switch(e=n.stateNode,n.type){case"input":if(zn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[_n]||null;if(!u)throw Error(s(90));zn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&vn(o)}break t;case"textarea":ze(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Jn(e,!!a.multiple,n,!1)}}}var Nu=!1;function Vp(e,n,a){if(Nu)return e(n,a);Nu=!0;try{var o=e(n);return o}finally{if(Nu=!1,(Qs!==null||Js!==null)&&(fc(),Qs&&(n=Qs,e=Js,Js=Qs=null,Gp(n),e)))for(n=0;n<e.length;n++)Gp(e[n])}}function ro(e,n){var a=e.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=!1;if(na)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Uu=!1}var Ua=null,Lu=null,Tl=null;function kp(){if(Tl)return Tl;var e,n=Lu,a=n.length,o,u="value"in Ua?Ua.value:Ua.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var b=a-e;for(o=1;o<=b&&n[a-o]===u[d-o];o++);return Tl=u.slice(e,1<o?1-o:void 0)}function Al(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Rl(){return!0}function jp(){return!1}function jn(e){function n(a,o,u,d,b){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var U in e)e.hasOwnProperty(U)&&(a=e[U],this[U]=a?a(d):d[U]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Rl:jp,this.isPropagationStopped=jp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),n}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cl=jn(gs),lo=g({},gs,{view:0,detail:0}),zx=jn(lo),Ou,Pu,co,wl=g({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(Ou=e.screenX-co.screenX,Pu=e.screenY-co.screenY):Pu=Ou=0,co=e),Ou)},movementY:function(e){return"movementY"in e?e.movementY:Pu}}),Xp=jn(wl),Hx=g({},wl,{dataTransfer:0}),Gx=jn(Hx),Vx=g({},lo,{relatedTarget:0}),Fu=jn(Vx),kx=g({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),jx=jn(kx),Xx=g({},gs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wx=jn(Xx),qx=g({},gs,{data:0}),Wp=jn(qx),Yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Kx[e])?!!n[e]:!1}function Iu(){return Qx}var Jx=g({},lo,{key:function(e){if(e.key){var n=Yx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Iu,charCode:function(e){return e.type==="keypress"?Al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$x=jn(Jx),tS=g({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qp=jn(tS),eS=g({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Iu}),nS=jn(eS),iS=g({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),aS=jn(iS),sS=g({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rS=jn(sS),oS=g({},gs,{newState:0,oldState:0}),lS=jn(oS),cS=[9,13,27,32],Bu=na&&"CompositionEvent"in window,uo=null;na&&"documentMode"in document&&(uo=document.documentMode);var uS=na&&"TextEvent"in window&&!uo,Yp=na&&(!Bu||uo&&8<uo&&11>=uo),Zp=" ",Kp=!1;function Qp(e,n){switch(e){case"keyup":return cS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $s=!1;function fS(e,n){switch(e){case"compositionend":return Jp(n);case"keypress":return n.which!==32?null:(Kp=!0,Zp);case"textInput":return e=n.data,e===Zp&&Kp?null:e;default:return null}}function dS(e,n){if($s)return e==="compositionend"||!Bu&&Qp(e,n)?(e=kp(),Tl=Lu=Ua=null,$s=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yp&&n.locale!=="ko"?null:n.data;default:return null}}var hS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!hS[e.type]:n==="textarea"}function tm(e,n,a,o){Qs?Js?Js.push(o):Js=[o]:Qs=o,n=vc(n,"onChange"),0<n.length&&(a=new Cl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var fo=null,ho=null;function pS(e){Fg(e,0)}function Dl(e){var n=ms(e);if(vn(n))return e}function em(e,n){if(e==="change")return n}var nm=!1;if(na){var zu;if(na){var Hu="oninput"in document;if(!Hu){var im=document.createElement("div");im.setAttribute("oninput","return;"),Hu=typeof im.oninput=="function"}zu=Hu}else zu=!1;nm=zu&&(!document.documentMode||9<document.documentMode)}function am(){fo&&(fo.detachEvent("onpropertychange",sm),ho=fo=null)}function sm(e){if(e.propertyName==="value"&&Dl(ho)){var n=[];tm(n,ho,e,Du(e)),Vp(pS,n)}}function mS(e,n,a){e==="focusin"?(am(),fo=n,ho=a,fo.attachEvent("onpropertychange",sm)):e==="focusout"&&am()}function gS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dl(ho)}function _S(e,n){if(e==="click")return Dl(n)}function vS(e,n){if(e==="input"||e==="change")return Dl(n)}function xS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:xS;function po(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ue.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function rm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function om(e,n){var a=rm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=rm(a)}}function lm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?lm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function cm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=te(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=te(e.document)}return n}function Gu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var SS=na&&"documentMode"in document&&11>=document.documentMode,tr=null,Vu=null,mo=null,ku=!1;function um(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ku||tr==null||tr!==te(o)||(o=tr,"selectionStart"in o&&Gu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),mo&&po(mo,o)||(mo=o,o=vc(Vu,"onSelect"),0<o.length&&(n=new Cl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=tr)))}function _s(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var er={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionrun:_s("Transition","TransitionRun"),transitionstart:_s("Transition","TransitionStart"),transitioncancel:_s("Transition","TransitionCancel"),transitionend:_s("Transition","TransitionEnd")},ju={},fm={};na&&(fm=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function vs(e){if(ju[e])return ju[e];if(!er[e])return e;var n=er[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in fm)return ju[e]=n[a];return e}var dm=vs("animationend"),hm=vs("animationiteration"),pm=vs("animationstart"),yS=vs("transitionrun"),MS=vs("transitionstart"),bS=vs("transitioncancel"),mm=vs("transitionend"),gm=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function Ai(e,n){gm.set(e,n),ct(n,[e])}var Nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],nr=0,Wu=0;function Ul(){for(var e=nr,n=Wu=nr=0;n<e;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var d=fi[n];if(fi[n++]=null,o!==null&&u!==null){var b=o.pending;b===null?u.next=u:(u.next=b.next,b.next=u),o.pending=u}d!==0&&_m(a,u,d)}}function Ll(e,n,a,o){fi[nr++]=e,fi[nr++]=n,fi[nr++]=a,fi[nr++]=o,Wu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function qu(e,n,a,o){return Ll(e,n,a,o),Ol(e)}function xs(e,n){return Ll(e,null,null,n),Ol(e)}function _m(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-zt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Ol(e){if(50<Io)throw Io=0,id=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ir={};function ES(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new ES(e,n,a,o)}function Yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function vm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Pl(e,n,a,o,u,d){var b=0;if(o=e,typeof e=="function")Yu(e)&&(b=1);else if(typeof e=="string")b=wy(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=ti(31,a,n,u),e.elementType=O,e.lanes=d,e;case C:return Ss(a.children,u,d,n);case _:b=8,u|=24;break;case S:return e=ti(12,a,n,u|2),e.elementType=S,e.lanes=d,e;case G:return e=ti(13,a,n,u),e.elementType=G,e.lanes=d,e;case P:return e=ti(19,a,n,u),e.elementType=P,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:b=10;break t;case T:b=9;break t;case D:b=11;break t;case I:b=14;break t;case E:b=16,o=null;break t}b=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(b,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function Ss(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function Zu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function xm(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Ku(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Sm=new WeakMap;function di(e,n){if(typeof e=="object"&&e!==null){var a=Sm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:k(n)},Sm.set(e,n),n)}return{value:e,source:n,stack:k(n)}}var ar=[],sr=0,Fl=null,go=0,hi=[],pi=0,La=null,Ii=1,Bi="";function aa(e,n){ar[sr++]=go,ar[sr++]=Fl,Fl=e,go=n}function ym(e,n,a){hi[pi++]=Ii,hi[pi++]=Bi,hi[pi++]=La,La=e;var o=Ii;e=Bi;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var d=32-zt(n)+u;if(30<d){var b=u-u%5;d=(o&(1<<b)-1).toString(32),o>>=b,u-=b,Ii=1<<32-zt(n)+u|a<<u|o,Bi=d+e}else Ii=1<<d|a<<u|o,Bi=e}function Qu(e){e.return!==null&&(aa(e,1),ym(e,1,0))}function Ju(e){for(;e===Fl;)Fl=ar[--sr],ar[sr]=null,go=ar[--sr],ar[sr]=null;for(;e===La;)La=hi[--pi],hi[pi]=null,Bi=hi[--pi],hi[pi]=null,Ii=hi[--pi],hi[pi]=null}function Mm(e,n){hi[pi++]=Ii,hi[pi++]=Bi,hi[pi++]=La,Ii=n.id,Bi=n.overflow,La=e}var En=null,Ke=null,we=!1,Oa=null,mi=!1,$u=Error(s(519));function Pa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _o(di(n,e)),$u}function bm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[_n]=o,a){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(a=0;a<zo.length;a++)Te(zo[a],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),Qn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),un(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Hg(n.textContent,a)?(o.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),o.onScroll!=null&&Te("scroll",n),o.onScrollEnd!=null&&Te("scrollend",n),o.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||Pa(e,!0)}function Em(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:En=En.return}}function rr(e){if(e!==En)return!1;if(!we)return Em(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||vd(e.type,e.memoizedProps)),a=!a),a&&Ke&&Pa(e),Em(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=Zg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=Zg(e)}else n===27?(n=Ke,Za(e.type)?(e=bd,bd=null,Ke=e):Ke=n):Ke=En?_i(e.stateNode.nextSibling):null;return!0}function ys(){Ke=En=null,we=!1}function tf(){var e=Oa;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Oa=null),e}function _o(e){Oa===null?Oa=[e]:Oa.push(e)}var ef=B(null),Ms=null,sa=null;function Fa(e,n,a){et(ef,n._currentValue),n._currentValue=a}function ra(e){e._currentValue=ef.current,V(ef)}function nf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function af(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var b=u.child;d=d.firstContext;t:for(;d!==null;){var U=d;d=u;for(var q=0;q<n.length;q++)if(U.context===n[q]){d.lanes|=a,U=d.alternate,U!==null&&(U.lanes|=a),nf(d.return,a,e),o||(b=null);break t}d=U.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(s(341));b.lanes|=a,d=b.alternate,d!==null&&(d.lanes|=a),nf(b,a,e),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===e){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function or(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(s(387));if(b=b.memoizedProps,b!==null){var U=u.type;$n(u.pendingProps.value,b.value)||(e!==null?e.push(U):e=[U])}}else if(u===rt.current){if(b=u.alternate,b===null)throw Error(s(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(jo):e=[jo])}u=u.return}e!==null&&af(n,e,a,o),n.flags|=262144}function Il(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function bs(e){Ms=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return Tm(Ms,e)}function Bl(e,n){return Ms===null&&bs(e),Tm(e,n)}function Tm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(e===null)throw Error(s(308));sa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else sa=sa.next=n;return a}var TS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},AS=r.unstable_scheduleCallback,RS=r.unstable_NormalPriority,dn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sf(){return{controller:new TS,data:new Map,refCount:0}}function vo(e){e.refCount--,e.refCount===0&&AS(RS,function(){e.controller.abort()})}var xo=null,rf=0,lr=0,cr=null;function CS(e,n){if(xo===null){var a=xo=[];rf=0,lr=cd(),cr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return rf++,n.then(Am,Am),n}function Am(){if(--rf===0&&xo!==null){cr!==null&&(cr.status="fulfilled");var e=xo;xo=null,lr=0,cr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function wS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Rm=N.S;N.S=function(e,n){ug=A(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&CS(e,n),Rm!==null&&Rm(e,n)};var Es=B(null);function of(){var e=Es.current;return e!==null?e:Ye.pooledCache}function zl(e,n){n===null?et(Es,Es.current):et(Es,n.pool)}function Cm(){var e=of();return e===null?null:{parent:dn._currentValue,pool:e}}var ur=Error(s(460)),lf=Error(s(474)),Hl=Error(s(542)),Gl={then:function(){}};function wm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ea,ea),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Um(e),e;default:if(typeof n.status=="string")n.then(ea,ea);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Um(e),e}throw As=n,ur}}function Ts(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(As=a,ur):a}}var As=null;function Nm(){if(As===null)throw Error(s(459));var e=As;return As=null,e}function Um(e){if(e===ur||e===Hl)throw Error(s(483))}var fr=null,So=0;function Vl(e){var n=So;return So+=1,fr===null&&(fr=[]),Dm(fr,e,n)}function yo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function kl(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Lm(e){function n(lt,nt){if(e){var dt=lt.deletions;dt===null?(lt.deletions=[nt],lt.flags|=16):dt.push(nt)}}function a(lt,nt){if(!e)return null;for(;nt!==null;)n(lt,nt),nt=nt.sibling;return null}function o(lt){for(var nt=new Map;lt!==null;)lt.key!==null?nt.set(lt.key,lt):nt.set(lt.index,lt),lt=lt.sibling;return nt}function u(lt,nt){return lt=ia(lt,nt),lt.index=0,lt.sibling=null,lt}function d(lt,nt,dt){return lt.index=dt,e?(dt=lt.alternate,dt!==null?(dt=dt.index,dt<nt?(lt.flags|=67108866,nt):dt):(lt.flags|=67108866,nt)):(lt.flags|=1048576,nt)}function b(lt){return e&&lt.alternate===null&&(lt.flags|=67108866),lt}function U(lt,nt,dt,Tt){return nt===null||nt.tag!==6?(nt=Zu(dt,lt.mode,Tt),nt.return=lt,nt):(nt=u(nt,dt),nt.return=lt,nt)}function q(lt,nt,dt,Tt){var re=dt.type;return re===C?bt(lt,nt,dt.props.children,Tt,dt.key):nt!==null&&(nt.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===E&&Ts(re)===nt.type)?(nt=u(nt,dt.props),yo(nt,dt),nt.return=lt,nt):(nt=Pl(dt.type,dt.key,dt.props,null,lt.mode,Tt),yo(nt,dt),nt.return=lt,nt)}function ht(lt,nt,dt,Tt){return nt===null||nt.tag!==4||nt.stateNode.containerInfo!==dt.containerInfo||nt.stateNode.implementation!==dt.implementation?(nt=Ku(dt,lt.mode,Tt),nt.return=lt,nt):(nt=u(nt,dt.children||[]),nt.return=lt,nt)}function bt(lt,nt,dt,Tt,re){return nt===null||nt.tag!==7?(nt=Ss(dt,lt.mode,Tt,re),nt.return=lt,nt):(nt=u(nt,dt),nt.return=lt,nt)}function Rt(lt,nt,dt){if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return nt=Zu(""+nt,lt.mode,dt),nt.return=lt,nt;if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:return dt=Pl(nt.type,nt.key,nt.props,null,lt.mode,dt),yo(dt,nt),dt.return=lt,dt;case M:return nt=Ku(nt,lt.mode,dt),nt.return=lt,nt;case E:return nt=Ts(nt),Rt(lt,nt,dt)}if($(nt)||j(nt))return nt=Ss(nt,lt.mode,dt,null),nt.return=lt,nt;if(typeof nt.then=="function")return Rt(lt,Vl(nt),dt);if(nt.$$typeof===w)return Rt(lt,Bl(lt,nt),dt);kl(lt,nt)}return null}function mt(lt,nt,dt,Tt){var re=nt!==null?nt.key:null;if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return re!==null?null:U(lt,nt,""+dt,Tt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case y:return dt.key===re?q(lt,nt,dt,Tt):null;case M:return dt.key===re?ht(lt,nt,dt,Tt):null;case E:return dt=Ts(dt),mt(lt,nt,dt,Tt)}if($(dt)||j(dt))return re!==null?null:bt(lt,nt,dt,Tt,null);if(typeof dt.then=="function")return mt(lt,nt,Vl(dt),Tt);if(dt.$$typeof===w)return mt(lt,nt,Bl(lt,dt),Tt);kl(lt,dt)}return null}function St(lt,nt,dt,Tt,re){if(typeof Tt=="string"&&Tt!==""||typeof Tt=="number"||typeof Tt=="bigint")return lt=lt.get(dt)||null,U(nt,lt,""+Tt,re);if(typeof Tt=="object"&&Tt!==null){switch(Tt.$$typeof){case y:return lt=lt.get(Tt.key===null?dt:Tt.key)||null,q(nt,lt,Tt,re);case M:return lt=lt.get(Tt.key===null?dt:Tt.key)||null,ht(nt,lt,Tt,re);case E:return Tt=Ts(Tt),St(lt,nt,dt,Tt,re)}if($(Tt)||j(Tt))return lt=lt.get(dt)||null,bt(nt,lt,Tt,re,null);if(typeof Tt.then=="function")return St(lt,nt,dt,Vl(Tt),re);if(Tt.$$typeof===w)return St(lt,nt,dt,Bl(nt,Tt),re);kl(nt,Tt)}return null}function $t(lt,nt,dt,Tt){for(var re=null,Fe=null,ie=nt,Se=nt=0,Ce=null;ie!==null&&Se<dt.length;Se++){ie.index>Se?(Ce=ie,ie=null):Ce=ie.sibling;var Ie=mt(lt,ie,dt[Se],Tt);if(Ie===null){ie===null&&(ie=Ce);break}e&&ie&&Ie.alternate===null&&n(lt,ie),nt=d(Ie,nt,Se),Fe===null?re=Ie:Fe.sibling=Ie,Fe=Ie,ie=Ce}if(Se===dt.length)return a(lt,ie),we&&aa(lt,Se),re;if(ie===null){for(;Se<dt.length;Se++)ie=Rt(lt,dt[Se],Tt),ie!==null&&(nt=d(ie,nt,Se),Fe===null?re=ie:Fe.sibling=ie,Fe=ie);return we&&aa(lt,Se),re}for(ie=o(ie);Se<dt.length;Se++)Ce=St(ie,lt,Se,dt[Se],Tt),Ce!==null&&(e&&Ce.alternate!==null&&ie.delete(Ce.key===null?Se:Ce.key),nt=d(Ce,nt,Se),Fe===null?re=Ce:Fe.sibling=Ce,Fe=Ce);return e&&ie.forEach(function(ts){return n(lt,ts)}),we&&aa(lt,Se),re}function ce(lt,nt,dt,Tt){if(dt==null)throw Error(s(151));for(var re=null,Fe=null,ie=nt,Se=nt=0,Ce=null,Ie=dt.next();ie!==null&&!Ie.done;Se++,Ie=dt.next()){ie.index>Se?(Ce=ie,ie=null):Ce=ie.sibling;var ts=mt(lt,ie,Ie.value,Tt);if(ts===null){ie===null&&(ie=Ce);break}e&&ie&&ts.alternate===null&&n(lt,ie),nt=d(ts,nt,Se),Fe===null?re=ts:Fe.sibling=ts,Fe=ts,ie=Ce}if(Ie.done)return a(lt,ie),we&&aa(lt,Se),re;if(ie===null){for(;!Ie.done;Se++,Ie=dt.next())Ie=Rt(lt,Ie.value,Tt),Ie!==null&&(nt=d(Ie,nt,Se),Fe===null?re=Ie:Fe.sibling=Ie,Fe=Ie);return we&&aa(lt,Se),re}for(ie=o(ie);!Ie.done;Se++,Ie=dt.next())Ie=St(ie,lt,Se,Ie.value,Tt),Ie!==null&&(e&&Ie.alternate!==null&&ie.delete(Ie.key===null?Se:Ie.key),nt=d(Ie,nt,Se),Fe===null?re=Ie:Fe.sibling=Ie,Fe=Ie);return e&&ie.forEach(function(Hy){return n(lt,Hy)}),we&&aa(lt,Se),re}function We(lt,nt,dt,Tt){if(typeof dt=="object"&&dt!==null&&dt.type===C&&dt.key===null&&(dt=dt.props.children),typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case y:t:{for(var re=dt.key;nt!==null;){if(nt.key===re){if(re=dt.type,re===C){if(nt.tag===7){a(lt,nt.sibling),Tt=u(nt,dt.props.children),Tt.return=lt,lt=Tt;break t}}else if(nt.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===E&&Ts(re)===nt.type){a(lt,nt.sibling),Tt=u(nt,dt.props),yo(Tt,dt),Tt.return=lt,lt=Tt;break t}a(lt,nt);break}else n(lt,nt);nt=nt.sibling}dt.type===C?(Tt=Ss(dt.props.children,lt.mode,Tt,dt.key),Tt.return=lt,lt=Tt):(Tt=Pl(dt.type,dt.key,dt.props,null,lt.mode,Tt),yo(Tt,dt),Tt.return=lt,lt=Tt)}return b(lt);case M:t:{for(re=dt.key;nt!==null;){if(nt.key===re)if(nt.tag===4&&nt.stateNode.containerInfo===dt.containerInfo&&nt.stateNode.implementation===dt.implementation){a(lt,nt.sibling),Tt=u(nt,dt.children||[]),Tt.return=lt,lt=Tt;break t}else{a(lt,nt);break}else n(lt,nt);nt=nt.sibling}Tt=Ku(dt,lt.mode,Tt),Tt.return=lt,lt=Tt}return b(lt);case E:return dt=Ts(dt),We(lt,nt,dt,Tt)}if($(dt))return $t(lt,nt,dt,Tt);if(j(dt)){if(re=j(dt),typeof re!="function")throw Error(s(150));return dt=re.call(dt),ce(lt,nt,dt,Tt)}if(typeof dt.then=="function")return We(lt,nt,Vl(dt),Tt);if(dt.$$typeof===w)return We(lt,nt,Bl(lt,dt),Tt);kl(lt,dt)}return typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint"?(dt=""+dt,nt!==null&&nt.tag===6?(a(lt,nt.sibling),Tt=u(nt,dt),Tt.return=lt,lt=Tt):(a(lt,nt),Tt=Zu(dt,lt.mode,Tt),Tt.return=lt,lt=Tt),b(lt)):a(lt,nt)}return function(lt,nt,dt,Tt){try{So=0;var re=We(lt,nt,dt,Tt);return fr=null,re}catch(ie){if(ie===ur||ie===Hl)throw ie;var Fe=ti(29,ie,null,lt.mode);return Fe.lanes=Tt,Fe.return=lt,Fe}finally{}}}var Rs=Lm(!0),Om=Lm(!1),Ia=!1;function cf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Be&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ol(e),_m(e,null,a),n}return Ll(e,o,n,a),Ol(e)}function Mo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ws(e,a)}}function ff(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=b:d=d.next=b,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var df=!1;function bo(){if(df){var e=cr;if(e!==null)throw e}}function Eo(e,n,a,o){df=!1;var u=e.updateQueue;Ia=!1;var d=u.firstBaseUpdate,b=u.lastBaseUpdate,U=u.shared.pending;if(U!==null){u.shared.pending=null;var q=U,ht=q.next;q.next=null,b===null?d=ht:b.next=ht,b=q;var bt=e.alternate;bt!==null&&(bt=bt.updateQueue,U=bt.lastBaseUpdate,U!==b&&(U===null?bt.firstBaseUpdate=ht:U.next=ht,bt.lastBaseUpdate=q))}if(d!==null){var Rt=u.baseState;b=0,bt=ht=q=null,U=d;do{var mt=U.lane&-536870913,St=mt!==U.lane;if(St?(Re&mt)===mt:(o&mt)===mt){mt!==0&&mt===lr&&(df=!0),bt!==null&&(bt=bt.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});t:{var $t=e,ce=U;mt=n;var We=a;switch(ce.tag){case 1:if($t=ce.payload,typeof $t=="function"){Rt=$t.call(We,Rt,mt);break t}Rt=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=ce.payload,mt=typeof $t=="function"?$t.call(We,Rt,mt):$t,mt==null)break t;Rt=g({},Rt,mt);break t;case 2:Ia=!0}}mt=U.callback,mt!==null&&(e.flags|=64,St&&(e.flags|=8192),St=u.callbacks,St===null?u.callbacks=[mt]:St.push(mt))}else St={lane:mt,tag:U.tag,payload:U.payload,callback:U.callback,next:null},bt===null?(ht=bt=St,q=Rt):bt=bt.next=St,b|=mt;if(U=U.next,U===null){if(U=u.shared.pending,U===null)break;St=U,U=St.next,St.next=null,u.lastBaseUpdate=St,u.shared.pending=null}}while(!0);bt===null&&(q=Rt),u.baseState=q,u.firstBaseUpdate=ht,u.lastBaseUpdate=bt,d===null&&(u.shared.lanes=0),ja|=b,e.lanes=b,e.memoizedState=Rt}}function Pm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Fm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pm(a[e],n)}var dr=B(null),jl=B(0);function Im(e,n){e=ma,et(jl,e),et(dr,n),ma=e|n.baseLanes}function hf(){et(jl,ma),et(dr,dr.current)}function pf(){ma=jl.current,V(dr),V(jl)}var ei=B(null),gi=null;function Ha(e){var n=e.alternate;et(on,on.current&1),et(ei,e),gi===null&&(n===null||dr.current!==null||n.memoizedState!==null)&&(gi=e)}function mf(e){et(on,on.current),et(ei,e),gi===null&&(gi=e)}function Bm(e){e.tag===22?(et(on,on.current),et(ei,e),gi===null&&(gi=e)):Ga()}function Ga(){et(on,on.current),et(ei,ei.current)}function ni(e){V(ei),gi===e&&(gi=null),V(on)}var on=B(0);function Xl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||yd(a)||Md(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,_e=null,je=null,hn=null,Wl=!1,hr=!1,Cs=!1,ql=0,To=0,pr=null,DS=0;function an(){throw Error(s(321))}function gf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function _f(e,n,a,o,u,d){return oa=d,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?y0:Uf,Cs=!1,d=a(o,u),Cs=!1,hr&&(d=Hm(n,a,o,u)),zm(e),d}function zm(e){N.H=Co;var n=je!==null&&je.next!==null;if(oa=0,hn=je=_e=null,Wl=!1,To=0,pr=null,n)throw Error(s(300));e===null||pn||(e=e.dependencies,e!==null&&Il(e)&&(pn=!0))}function Hm(e,n,a,o){_e=e;var u=0;do{if(hr&&(pr=null),To=0,hr=!1,25<=u)throw Error(s(301));if(u+=1,hn=je=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}N.H=M0,d=n(a,o)}while(hr);return d}function NS(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?Ao(n):n,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(_e.flags|=1024),n}function vf(){var e=ql!==0;return ql=0,e}function xf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Sf(e){if(Wl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Wl=!1}oa=0,hn=je=_e=null,hr=!1,To=ql=0,pr=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?_e.memoizedState=hn=e:hn=hn.next=e,hn}function ln(){if(je===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=hn===null?_e.memoizedState:hn.next;if(n!==null)hn=n,je=e;else{if(e===null)throw _e.alternate===null?Error(s(467)):Error(s(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},hn===null?_e.memoizedState=hn=e:hn=hn.next=e}return hn}function Yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var n=To;return To+=1,pr===null&&(pr=[]),e=Dm(pr,e,n),n=_e,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?y0:Uf),e}function Zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ao(e);if(e.$$typeof===w)return Tn(e)}throw Error(s(438,String(e)))}function yf(e){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=_e.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Yl(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=at;return n.index++,a}function la(e,n){return typeof n=="function"?n(e):n}function Kl(e){var n=ln();return Mf(n,je,e)}function Mf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var b=u.next;u.next=d.next,d.next=b}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var U=b=null,q=null,ht=n,bt=!1;do{var Rt=ht.lane&-536870913;if(Rt!==ht.lane?(Re&Rt)===Rt:(oa&Rt)===Rt){var mt=ht.revertLane;if(mt===0)q!==null&&(q=q.next={lane:0,revertLane:0,gesture:null,action:ht.action,hasEagerState:ht.hasEagerState,eagerState:ht.eagerState,next:null}),Rt===lr&&(bt=!0);else if((oa&mt)===mt){ht=ht.next,mt===lr&&(bt=!0);continue}else Rt={lane:0,revertLane:ht.revertLane,gesture:null,action:ht.action,hasEagerState:ht.hasEagerState,eagerState:ht.eagerState,next:null},q===null?(U=q=Rt,b=d):q=q.next=Rt,_e.lanes|=mt,ja|=mt;Rt=ht.action,Cs&&a(d,Rt),d=ht.hasEagerState?ht.eagerState:a(d,Rt)}else mt={lane:Rt,revertLane:ht.revertLane,gesture:ht.gesture,action:ht.action,hasEagerState:ht.hasEagerState,eagerState:ht.eagerState,next:null},q===null?(U=q=mt,b=d):q=q.next=mt,_e.lanes|=Rt,ja|=Rt;ht=ht.next}while(ht!==null&&ht!==n);if(q===null?b=d:q.next=U,!$n(d,e.memoizedState)&&(pn=!0,bt&&(a=cr,a!==null)))throw a;e.memoizedState=d,e.baseState=b,e.baseQueue=q,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function bf(e){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do d=e(d,b.action),b=b.next;while(b!==u);$n(d,n.memoizedState)||(pn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Gm(e,n,a){var o=_e,u=ln(),d=we;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var b=!$n((je||u).memoizedState,a);if(b&&(u.memoizedState=a,pn=!0),u=u.queue,Af(jm.bind(null,o,u,e),[e]),u.getSnapshot!==n||b||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,mr(9,{destroy:void 0},km.bind(null,o,u,a,n),null),Ye===null)throw Error(s(349));d||(oa&127)!==0||Vm(o,n,a)}return a}function Vm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=Yl(),_e.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function km(e,n,a,o){n.value=a,n.getSnapshot=o,Xm(n)&&Wm(e)}function jm(e,n,a){return a(function(){Xm(n)&&Wm(e)})}function Xm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Wm(e){var n=xs(e,2);n!==null&&Zn(n,e,2)}function Ef(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),Cs){kt(!0);try{a()}finally{kt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},n}function qm(e,n,a,o){return e.baseState=a,Mf(e,je,typeof o=="function"?o:la)}function US(e,n,a,o,u){if($l(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};N.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Ym(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Ym(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=N.T,b={};N.T=b;try{var U=a(u,o),q=N.S;q!==null&&q(b,U),Zm(e,n,U)}catch(ht){Tf(e,n,ht)}finally{d!==null&&b.types!==null&&(d.types=b.types),N.T=d}}else try{d=a(u,o),Zm(e,n,d)}catch(ht){Tf(e,n,ht)}}function Zm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Km(e,n,o)},function(o){return Tf(e,n,o)}):Km(e,n,a)}function Km(e,n,a){n.status="fulfilled",n.value=a,Qm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Ym(e,a)))}function Tf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Qm(n),n=n.next;while(n!==o)}e.action=null}function Qm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Jm(e,n){return n}function $m(e,n){if(we){var a=Ye.formState;if(a!==null){t:{var o=_e;if(we){if(Ke){e:{for(var u=Ke,d=mi;u.nodeType!==8;){if(!d){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Ke=_i(u.nextSibling),o=u.data==="F!";break t}}Pa(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jm,lastRenderedState:n},a.queue=o,a=v0.bind(null,_e,o),o.dispatch=a,o=Ef(!1),d=Nf.bind(null,_e,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=US.bind(null,_e,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function t0(e){var n=ln();return e0(n,je,e)}function e0(e,n,a){if(n=Mf(e,n,Jm)[0],e=Kl(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ao(n)}catch(b){throw b===ur?Hl:b}else o=n;n=ln();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,mr(9,{destroy:void 0},LS.bind(null,u,a),null)),[o,d,e]}function LS(e,n){e.action=n}function n0(e){var n=ln(),a=je;if(a!==null)return e0(n,a,e);ln(),n=n.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function mr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=_e.updateQueue,n===null&&(n=Yl(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function i0(){return ln().memoizedState}function Ql(e,n,a,o){var u=Gn();_e.flags|=e,u.memoizedState=mr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Jl(e,n,a,o){var u=ln();o=o===void 0?null:o;var d=u.memoizedState.inst;je!==null&&o!==null&&gf(o,je.memoizedState.deps)?u.memoizedState=mr(n,d,a,o):(_e.flags|=e,u.memoizedState=mr(1|n,d,a,o))}function a0(e,n){Ql(8390656,8,e,n)}function Af(e,n){Jl(2048,8,e,n)}function OS(e){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=Yl(),_e.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function s0(e){var n=ln().memoizedState;return OS({ref:n,nextImpl:e}),function(){if((Be&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function r0(e,n){return Jl(4,2,e,n)}function o0(e,n){return Jl(4,4,e,n)}function l0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function c0(e,n,a){a=a!=null?a.concat([e]):null,Jl(4,4,l0.bind(null,n,e),a)}function Rf(){}function u0(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&gf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function f0(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&gf(n,o[1]))return o[0];if(o=e(),Cs){kt(!0);try{e()}finally{kt(!1)}}return a.memoizedState=[o,n],o}function Cf(e,n,a){return a===void 0||(oa&1073741824)!==0&&(Re&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=dg(),_e.lanes|=e,ja|=e,a)}function d0(e,n,a,o){return $n(a,n)?a:dr.current!==null?(e=Cf(e,a,o),$n(e,n)||(pn=!0),e):(oa&42)===0||(oa&1073741824)!==0&&(Re&261930)===0?(pn=!0,e.memoizedState=a):(e=dg(),_e.lanes|=e,ja|=e,n)}function h0(e,n,a,o,u){var d=F.p;F.p=d!==0&&8>d?d:8;var b=N.T,U={};N.T=U,Nf(e,!1,n,a);try{var q=u(),ht=N.S;if(ht!==null&&ht(U,q),q!==null&&typeof q=="object"&&typeof q.then=="function"){var bt=wS(q,o);Ro(e,n,bt,si(e))}else Ro(e,n,o,si(e))}catch(Rt){Ro(e,n,{then:function(){},status:"rejected",reason:Rt},si())}finally{F.p=d,b!==null&&U.types!==null&&(b.types=U.types),N.T=b}}function PS(){}function wf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=p0(e).queue;h0(e,u,n,tt,a===null?PS:function(){return m0(e),a(o)})}function p0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:tt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function m0(e){var n=p0(e);n.next===null&&(n=e.alternate.memoizedState),Ro(e,n.next.queue,{},si())}function Df(){return Tn(jo)}function g0(){return ln().memoizedState}function _0(){return ln().memoizedState}function FS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Ba(a);var o=za(n,e,a);o!==null&&(Zn(o,n,a),Mo(o,n,a)),n={cache:sf()},e.payload=n;return}n=n.return}}function IS(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},$l(e)?x0(n,a):(a=qu(e,n,a,o),a!==null&&(Zn(a,e,o),S0(a,n,o)))}function v0(e,n,a){var o=si();Ro(e,n,a,o)}function Ro(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if($l(e))x0(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var b=n.lastRenderedState,U=d(b,a);if(u.hasEagerState=!0,u.eagerState=U,$n(U,b))return Ll(e,n,u,0),Ye===null&&Ul(),!1}catch{}finally{}if(a=qu(e,n,u,o),a!==null)return Zn(a,e,o),S0(a,n,o),!0}return!1}function Nf(e,n,a,o){if(o={lane:2,revertLane:cd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},$l(e)){if(n)throw Error(s(479))}else n=qu(e,a,o,2),n!==null&&Zn(n,e,2)}function $l(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function x0(e,n){hr=Wl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function S0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ws(e,a)}}var Co={readContext:Tn,use:Zl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Co.useEffectEvent=an;var y0={readContext:Tn,use:Zl,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:a0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ql(4194308,4,l0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ql(4194308,4,e,n)},useInsertionEffect:function(e,n){Ql(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var o=e();if(Cs){kt(!0);try{e()}finally{kt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(Cs){kt(!0);try{a(n)}finally{kt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=IS.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ef(e);var n=e.queue,a=v0.bind(null,_e,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Rf,useDeferredValue:function(e,n){var a=Gn();return Cf(a,e,n)},useTransition:function(){var e=Ef(!1);return e=h0.bind(null,_e,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=_e,u=Gn();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Re&127)!==0||Vm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,a0(jm.bind(null,o,d,e),[e]),o.flags|=2048,mr(9,{destroy:void 0},km.bind(null,o,d,a,n),null),a},useId:function(){var e=Gn(),n=Ye.identifierPrefix;if(we){var a=Bi,o=Ii;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ql++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=DS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Df,useFormState:$m,useActionState:$m,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Nf.bind(null,_e,!0,a),a.dispatch=n,[e,n]},useMemoCache:yf,useCacheRefresh:function(){return Gn().memoizedState=FS.bind(null,_e)},useEffectEvent:function(e){var n=Gn(),a={impl:e};return n.memoizedState=a,function(){if((Be&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Uf={readContext:Tn,use:Zl,useCallback:u0,useContext:Tn,useEffect:Af,useImperativeHandle:c0,useInsertionEffect:r0,useLayoutEffect:o0,useMemo:f0,useReducer:Kl,useRef:i0,useState:function(){return Kl(la)},useDebugValue:Rf,useDeferredValue:function(e,n){var a=ln();return d0(a,je.memoizedState,e,n)},useTransition:function(){var e=Kl(la)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:Ao(e),n]},useSyncExternalStore:Gm,useId:g0,useHostTransitionStatus:Df,useFormState:t0,useActionState:t0,useOptimistic:function(e,n){var a=ln();return qm(a,je,e,n)},useMemoCache:yf,useCacheRefresh:_0};Uf.useEffectEvent=s0;var M0={readContext:Tn,use:Zl,useCallback:u0,useContext:Tn,useEffect:Af,useImperativeHandle:c0,useInsertionEffect:r0,useLayoutEffect:o0,useMemo:f0,useReducer:bf,useRef:i0,useState:function(){return bf(la)},useDebugValue:Rf,useDeferredValue:function(e,n){var a=ln();return je===null?Cf(a,e,n):d0(a,je.memoizedState,e,n)},useTransition:function(){var e=bf(la)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:Ao(e),n]},useSyncExternalStore:Gm,useId:g0,useHostTransitionStatus:Df,useFormState:n0,useActionState:n0,useOptimistic:function(e,n){var a=ln();return je!==null?qm(a,je,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:yf,useCacheRefresh:_0};M0.useEffectEvent=s0;function Lf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Of={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ba(o);u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(Zn(n,e,o),Mo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ba(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(Zn(n,e,o),Mo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=Ba(a);o.tag=2,n!=null&&(o.callback=n),n=za(e,o,a),n!==null&&(Zn(n,e,a),Mo(n,e,a))}};function b0(e,n,a,o,u,d,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,b):n.prototype&&n.prototype.isPureReactComponent?!po(a,o)||!po(u,d):!0}function E0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Of.enqueueReplaceState(n,n.state,null)}function ws(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function T0(e){Nl(e)}function A0(e){console.error(e)}function R0(e){Nl(e)}function tc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function C0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Pf(e,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){tc(e,n)},a}function w0(e){return e=Ba(e),e.tag=3,e}function D0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){C0(n,a,o)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){C0(n,a,o),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var U=o.stack;this.componentDidCatch(o.value,{componentStack:U!==null?U:""})})}function BS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&or(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?dc():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Gl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),rd(e,o,u)),!1;case 22:return a.flags|=65536,o===Gl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),rd(e,o,u)),!1}throw Error(s(435,a.tag))}return rd(e,o,u),dc(),!1}if(we)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==$u&&(e=Error(s(422),{cause:o}),_o(di(e,a)))):(o!==$u&&(n=Error(s(423),{cause:o}),_o(di(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=di(o,a),u=Pf(e.stateNode,o,u),ff(e,u),sn!==4&&(sn=2)),!1;var d=Error(s(520),{cause:o});if(d=di(d,a),Fo===null?Fo=[d]:Fo.push(d),sn!==4&&(sn=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Pf(a.stateNode,o,e),ff(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Xa===null||!Xa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=w0(u),D0(u,e,a,o),ff(a,u),!1}a=a.return}while(a!==null);return!1}var Ff=Error(s(461)),pn=!1;function An(e,n,a,o){n.child=e===null?Om(n,null,a,o):Rs(n,e.child,a,o)}function N0(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var b={};for(var U in o)U!=="ref"&&(b[U]=o[U])}else b=o;return bs(n),o=_f(e,n,a,b,d,u),U=vf(),e!==null&&!pn?(xf(e,n,u),ca(e,n,u)):(we&&U&&Qu(n),n.flags|=1,An(e,n,o,u),n.child)}function U0(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Yu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,L0(e,n,d,o,u)):(e=Pl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!jf(e,u)){var b=d.memoizedProps;if(a=a.compare,a=a!==null?a:po,a(b,o)&&e.ref===n.ref)return ca(e,n,u)}return n.flags|=1,e=ia(d,o),e.ref=n.ref,e.return=n,n.child=e}function L0(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(po(d,o)&&e.ref===n.ref)if(pn=!1,n.pendingProps=o=d,jf(e,u))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,ca(e,n,u)}return If(e,n,a,o,u)}function O0(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return P0(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&zl(n,d!==null?d.cachePool:null),d!==null?Im(n,d):hf(),Bm(n);else return o=n.lanes=536870912,P0(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(zl(n,d.cachePool),Im(n,d),Ga(),n.memoizedState=null):(e!==null&&zl(n,null),hf(),Ga());return An(e,n,u,a),n.child}function wo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function P0(e,n,a,o,u){var d=of();return d=d===null?null:{parent:dn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&zl(n,null),hf(),Bm(n),e!==null&&or(e,n,o,!0),n.childLanes=u,null}function ec(e,n){return n=ic({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function F0(e,n,a){return Rs(n,e.child,null,a),e=ec(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function zS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(o.mode==="hidden")return e=ec(n,o),n.lanes=536870912,wo(null,e);if(mf(n),(e=Ke)?(e=Yg(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:La!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=xm(e),a.return=n,n.child=a,En=n,Ke=null)):e=null,e===null)throw Pa(n);return n.lanes=536870912,null}return ec(n,o)}var d=e.memoizedState;if(d!==null){var b=d.dehydrated;if(mf(n),u)if(n.flags&256)n.flags&=-257,n=F0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||or(e,n,a,!1),u=(a&e.childLanes)!==0,pn||u){if(o=Ye,o!==null&&(b=Sl(o,a),b!==0&&b!==d.retryLane))throw d.retryLane=b,xs(e,b),Zn(o,e,b),Ff;dc(),n=F0(e,n,a)}else e=d.treeContext,Ke=_i(b.nextSibling),En=n,we=!0,Oa=null,mi=!1,e!==null&&Mm(n,e),n=ec(n,o),n.flags|=4096;return n}return e=ia(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function nc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function If(e,n,a,o,u){return bs(n),a=_f(e,n,a,o,void 0,u),o=vf(),e!==null&&!pn?(xf(e,n,u),ca(e,n,u)):(we&&o&&Qu(n),n.flags|=1,An(e,n,a,u),n.child)}function I0(e,n,a,o,u,d){return bs(n),n.updateQueue=null,a=Hm(n,o,a,u),zm(e),o=vf(),e!==null&&!pn?(xf(e,n,d),ca(e,n,d)):(we&&o&&Qu(n),n.flags|=1,An(e,n,a,d),n.child)}function B0(e,n,a,o,u){if(bs(n),n.stateNode===null){var d=ir,b=a.contextType;typeof b=="object"&&b!==null&&(d=Tn(b)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Of,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},cf(n),b=a.contextType,d.context=typeof b=="object"&&b!==null?Tn(b):ir,d.state=n.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(Lf(n,a,b,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&Of.enqueueReplaceState(d,d.state,null),Eo(n,o,d,u),bo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var U=n.memoizedProps,q=ws(a,U);d.props=q;var ht=d.context,bt=a.contextType;b=ir,typeof bt=="object"&&bt!==null&&(b=Tn(bt));var Rt=a.getDerivedStateFromProps;bt=typeof Rt=="function"||typeof d.getSnapshotBeforeUpdate=="function",U=n.pendingProps!==U,bt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(U||ht!==b)&&E0(n,d,o,b),Ia=!1;var mt=n.memoizedState;d.state=mt,Eo(n,o,d,u),bo(),ht=n.memoizedState,U||mt!==ht||Ia?(typeof Rt=="function"&&(Lf(n,a,Rt,o),ht=n.memoizedState),(q=Ia||b0(n,a,q,o,mt,ht,b))?(bt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ht),d.props=o,d.state=ht,d.context=b,o=q):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,uf(e,n),b=n.memoizedProps,bt=ws(a,b),d.props=bt,Rt=n.pendingProps,mt=d.context,ht=a.contextType,q=ir,typeof ht=="object"&&ht!==null&&(q=Tn(ht)),U=a.getDerivedStateFromProps,(ht=typeof U=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==Rt||mt!==q)&&E0(n,d,o,q),Ia=!1,mt=n.memoizedState,d.state=mt,Eo(n,o,d,u),bo();var St=n.memoizedState;b!==Rt||mt!==St||Ia||e!==null&&e.dependencies!==null&&Il(e.dependencies)?(typeof U=="function"&&(Lf(n,a,U,o),St=n.memoizedState),(bt=Ia||b0(n,a,bt,o,mt,St,q)||e!==null&&e.dependencies!==null&&Il(e.dependencies))?(ht||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,St,q),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,St,q)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&mt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&mt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=St),d.props=o,d.state=St,d.context=q,o=bt):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&mt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&mt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,nc(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Rs(n,e.child,null,u),n.child=Rs(n,null,a,u)):An(e,n,a,u),n.memoizedState=d.state,e=n.child):e=ca(e,n,u),e}function z0(e,n,a,o){return ys(),n.flags|=256,An(e,n,a,o),n.child}var Bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zf(e){return{baseLanes:e,cachePool:Cm()}}function Hf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function H0(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,b;if((b=d)||(b=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),b&&(u=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?Ha(n):Ga(),(e=Ke)?(e=Yg(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:La!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=xm(e),a.return=n,n.child=a,En=n,Ke=null)):e=null,e===null)throw Pa(n);return Md(e)?n.lanes=32:n.lanes=536870912,null}var U=o.children;return o=o.fallback,u?(Ga(),u=n.mode,U=ic({mode:"hidden",children:U},u),o=Ss(o,u,a,null),U.return=n,o.return=n,U.sibling=o,n.child=U,o=n.child,o.memoizedState=zf(a),o.childLanes=Hf(e,b,a),n.memoizedState=Bf,wo(null,o)):(Ha(n),Gf(n,U))}var q=e.memoizedState;if(q!==null&&(U=q.dehydrated,U!==null)){if(d)n.flags&256?(Ha(n),n.flags&=-257,n=Vf(e,n,a)):n.memoizedState!==null?(Ga(),n.child=e.child,n.flags|=128,n=null):(Ga(),U=o.fallback,u=n.mode,o=ic({mode:"visible",children:o.children},u),U=Ss(U,u,a,null),U.flags|=2,o.return=n,U.return=n,o.sibling=U,n.child=o,Rs(n,e.child,null,a),o=n.child,o.memoizedState=zf(a),o.childLanes=Hf(e,b,a),n.memoizedState=Bf,n=wo(null,o));else if(Ha(n),Md(U)){if(b=U.nextSibling&&U.nextSibling.dataset,b)var ht=b.dgst;b=ht,o=Error(s(419)),o.stack="",o.digest=b,_o({value:o,source:null,stack:null}),n=Vf(e,n,a)}else if(pn||or(e,n,a,!1),b=(a&e.childLanes)!==0,pn||b){if(b=Ye,b!==null&&(o=Sl(b,a),o!==0&&o!==q.retryLane))throw q.retryLane=o,xs(e,o),Zn(b,e,o),Ff;yd(U)||dc(),n=Vf(e,n,a)}else yd(U)?(n.flags|=192,n.child=e.child,n=null):(e=q.treeContext,Ke=_i(U.nextSibling),En=n,we=!0,Oa=null,mi=!1,e!==null&&Mm(n,e),n=Gf(n,o.children),n.flags|=4096);return n}return u?(Ga(),U=o.fallback,u=n.mode,q=e.child,ht=q.sibling,o=ia(q,{mode:"hidden",children:o.children}),o.subtreeFlags=q.subtreeFlags&65011712,ht!==null?U=ia(ht,U):(U=Ss(U,u,a,null),U.flags|=2),U.return=n,o.return=n,o.sibling=U,n.child=o,wo(null,o),o=n.child,U=e.child.memoizedState,U===null?U=zf(a):(u=U.cachePool,u!==null?(q=dn._currentValue,u=u.parent!==q?{parent:q,pool:q}:u):u=Cm(),U={baseLanes:U.baseLanes|a,cachePool:u}),o.memoizedState=U,o.childLanes=Hf(e,b,a),n.memoizedState=Bf,wo(e.child,o)):(Ha(n),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(b=n.deletions,b===null?(n.deletions=[e],n.flags|=16):b.push(e)),n.child=a,n.memoizedState=null,a)}function Gf(e,n){return n=ic({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ic(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function Vf(e,n,a){return Rs(n,e.child,null,a),e=Gf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function G0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),nf(e.return,n,a)}function kf(e,n,a,o,u,d){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(b.isBackwards=n,b.rendering=null,b.renderingStartTime=0,b.last=o,b.tail=a,b.tailMode=u,b.treeForkCount=d)}function V0(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var b=on.current,U=(b&2)!==0;if(U?(b=b&1|2,n.flags|=128):b&=1,et(on,b),An(e,n,o,a),o=we?go:0,!U&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&G0(e,a,n);else if(e.tag===19)G0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Xl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),kf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Xl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}kf(n,!0,a,null,d,o);break;case"together":kf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ca(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ja|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(or(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ia(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function jf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Il(e)))}function HS(e,n,a){switch(n.tag){case 3:_t(n,n.stateNode.containerInfo),Fa(n,dn,e.memoizedState.cache),ys();break;case 27:case 5:At(n);break;case 4:_t(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,mf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?H0(e,n,a):(Ha(n),e=ca(e,n,a),e!==null?e.sibling:null);Ha(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(or(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return V0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),et(on,on.current),o)break;return null;case 22:return n.lanes=0,O0(e,n,a,n.pendingProps);case 24:Fa(n,dn,e.memoizedState.cache)}return ca(e,n,a)}function k0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!jf(e,a)&&(n.flags&128)===0)return pn=!1,HS(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,we&&(n.flags&1048576)!==0&&ym(n,go,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ts(n.elementType),n.type=e,typeof e=="function")Yu(e)?(o=ws(e,o),n.tag=1,n=B0(null,n,e,o,a)):(n.tag=0,n=If(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=N0(null,n,e,o,a);break t}else if(u===I){n.tag=14,n=U0(null,n,e,o,a);break t}}throw n=Y(e)||e,Error(s(306,n,""))}}return n;case 0:return If(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ws(o,n.pendingProps),B0(e,n,o,u,a);case 3:t:{if(_t(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,uf(e,n),Eo(n,o,null,a);var b=n.memoizedState;if(o=b.cache,Fa(n,dn,o),o!==d.cache&&af(n,[dn],a,!0),bo(),o=b.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=z0(e,n,o,a);break t}else if(o!==u){u=di(Error(s(424)),n),_o(u),n=z0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ke=_i(e.firstChild),En=n,we=!0,Oa=null,mi=!0,a=Om(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ys(),o===u){n=ca(e,n,a);break t}An(e,n,o,a)}n=n.child}return n;case 26:return nc(e,n),e===null?(a=t_(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,o=xc(W.current).createElement(a),o[cn]=n,o[_n]=e,Rn(o,a,e),it(o),n.stateNode=o):n.memoizedState=t_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return At(n),e===null&&we&&(o=n.stateNode=Qg(n.type,n.pendingProps,W.current),En=n,mi=!0,u=Ke,Za(n.type)?(bd=u,Ke=_i(o.firstChild)):Ke=u),An(e,n,n.pendingProps.children,a),nc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=o=Ke)&&(o=gy(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,En=n,Ke=_i(o.firstChild),mi=!1,u=!0):u=!1),u||Pa(n)),At(n),u=n.type,d=n.pendingProps,b=e!==null?e.memoizedProps:null,o=d.children,vd(u,d)?o=null:b!==null&&vd(u,b)&&(n.flags|=32),n.memoizedState!==null&&(u=_f(e,n,NS,null,null,a),jo._currentValue=u),nc(e,n),An(e,n,o,a),n.child;case 6:return e===null&&we&&((e=a=Ke)&&(a=_y(a,n.pendingProps,mi),a!==null?(n.stateNode=a,En=n,Ke=null,e=!0):e=!1),e||Pa(n)),null;case 13:return H0(e,n,a);case 4:return _t(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Rs(n,null,o,a):An(e,n,o,a),n.child;case 11:return N0(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Fa(n,n.type,o.value),An(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,bs(n),u=Tn(u),o=o(u),n.flags|=1,An(e,n,o,a),n.child;case 14:return U0(e,n,n.type,n.pendingProps,a);case 15:return L0(e,n,n.type,n.pendingProps,a);case 19:return V0(e,n,a);case 31:return zS(e,n,a);case 22:return O0(e,n,a,n.pendingProps);case 24:return bs(n),o=Tn(dn),e===null?(u=of(),u===null&&(u=Ye,d=sf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},cf(n),Fa(n,dn,u)):((e.lanes&a)!==0&&(uf(e,n),Eo(n,null,null,a),bo()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,dn,o)):(o=d.cache,Fa(n,dn,o),o!==u.cache&&af(n,[dn],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ua(e){e.flags|=4}function Xf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(gg())e.flags|=8192;else throw As=Gl,lf}else e.flags&=-16777217}function j0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!s_(n))if(gg())e.flags|=8192;else throw As=Gl,lf}function ac(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?He():536870912,e.lanes|=n,xr|=n)}function Do(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function GS(e,n,a){var o=n.pendingProps;switch(Ju(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(dn),J(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(rr(n)?ua(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,tf())),Qe(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(ua(n),d!==null?(Qe(n),j0(n,d)):(Qe(n),Xf(n,u,null,o,a))):d?d!==e.memoizedState?(ua(n),Qe(n),j0(n,d)):(Qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ua(n),Qe(n),Xf(n,u,e,o,a)),null;case 27:if(Dt(n),a=W.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}e=K.current,rr(n)?bm(n):(e=Qg(u,o,a),n.stateNode=e,ua(n))}return Qe(n),null;case 5:if(Dt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}if(d=K.current,rr(n))bm(n);else{var b=xc(W.current);switch(d){case 1:d=b.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=b.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=b.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?b.createElement("select",{is:o.is}):b.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?b.createElement(u,{is:o.is}):b.createElement(u)}}d[cn]=n,d[_n]=o;t:for(b=n.child;b!==null;){if(b.tag===5||b.tag===6)d.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===n)break t;for(;b.sibling===null;){if(b.return===null||b.return===n)break t;b=b.return}b.sibling.return=b.return,b=b.sibling}n.stateNode=d;t:switch(Rn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ua(n)}}return Qe(n),Xf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=W.current,rr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=En,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Hg(e.nodeValue,a)),e||Pa(n,!0)}else e=xc(e).createTextNode(o),e[cn]=n,n.stateNode=e}return Qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=rr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),e=!1}else a=tf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=rr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=tf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ac(n,n.updateQueue),Qe(n),null);case 4:return J(),e===null&&hd(n.stateNode.containerInfo),Qe(n),null;case 10:return ra(n.type),Qe(n),null;case 19:if(V(on),o=n.memoizedState,o===null)return Qe(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Do(o,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Xl(e),d!==null){for(n.flags|=128,Do(o,!1),e=d.updateQueue,n.updateQueue=e,ac(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)vm(a,e),a=a.sibling;return et(on,on.current&1|2),we&&aa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&A()>cc&&(n.flags|=128,u=!0,Do(o,!1),n.lanes=4194304)}else{if(!u)if(e=Xl(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ac(n,e),Do(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!we)return Qe(n),null}else 2*A()-o.renderingStartTime>cc&&a!==536870912&&(n.flags|=128,u=!0,Do(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=A(),e.sibling=null,a=on.current,et(on,u?a&1|2:a&1),we&&aa(n,o.treeForkCount),e):(Qe(n),null);case 22:case 23:return ni(n),pf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&ac(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&V(Es),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(dn),Qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function VS(e,n){switch(Ju(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ra(dn),J(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Dt(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));ys()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ys()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(on),null;case 4:return J(),null;case 10:return ra(n.type),null;case 22:case 23:return ni(n),pf(),e!==null&&V(Es),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ra(dn),null;case 25:return null;default:return null}}function X0(e,n){switch(Ju(n),n.tag){case 3:ra(dn),J();break;case 26:case 27:case 5:Dt(n);break;case 4:J();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:V(on);break;case 10:ra(n.type);break;case 22:case 23:ni(n),pf(),e!==null&&V(Es);break;case 24:ra(dn)}}function No(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,b=a.inst;o=d(),b.destroy=o}a=a.next}while(a!==u)}}catch(U){Ve(n,n.return,U)}}function Va(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var b=o.inst,U=b.destroy;if(U!==void 0){b.destroy=void 0,u=n;var q=a,ht=U;try{ht()}catch(bt){Ve(u,q,bt)}}}o=o.next}while(o!==d)}}catch(bt){Ve(n,n.return,bt)}}function W0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Fm(n,a)}catch(o){Ve(e,e.return,o)}}}function q0(e,n,a){a.props=ws(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ve(e,n,o)}}function Uo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ve(e,n,u)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ve(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ve(e,n,u)}else a.current=null}function Y0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ve(e,e.return,u)}}function Wf(e,n,a){try{var o=e.stateNode;uy(o,e.type,a,n),o[_n]=n}catch(u){Ve(e,e.return,u)}}function Z0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function qf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Z0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ea));else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Yf(e,n,a),e=e.sibling;e!==null;)Yf(e,n,a),e=e.sibling}function sc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(sc(e,n,a),e=e.sibling;e!==null;)sc(e,n,a),e=e.sibling}function K0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[cn]=e,n[_n]=a}catch(d){Ve(e,e.return,d)}}var fa=!1,mn=!1,Zf=!1,Q0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function kS(e,n){if(e=e.containerInfo,gd=Ac,e=cm(e),Gu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var b=0,U=-1,q=-1,ht=0,bt=0,Rt=e,mt=null;e:for(;;){for(var St;Rt!==a||u!==0&&Rt.nodeType!==3||(U=b+u),Rt!==d||o!==0&&Rt.nodeType!==3||(q=b+o),Rt.nodeType===3&&(b+=Rt.nodeValue.length),(St=Rt.firstChild)!==null;)mt=Rt,Rt=St;for(;;){if(Rt===e)break e;if(mt===a&&++ht===u&&(U=b),mt===d&&++bt===o&&(q=b),(St=Rt.nextSibling)!==null)break;Rt=mt,mt=Rt.parentNode}Rt=St}a=U===-1||q===-1?null:{start:U,end:q}}else a=null}a=a||{start:0,end:0}}else a=null;for(_d={focusedElem:e,selectionRange:a},Ac=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var $t=ws(a.type,u);e=o.getSnapshotBeforeUpdate($t,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ce){Ve(a,a.return,ce)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Sd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function J0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ha(e,a),o&4&&No(5,a);break;case 1:if(ha(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(b){Ve(a,a.return,b)}else{var u=ws(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Ve(a,a.return,b)}}o&64&&W0(a),o&512&&Uo(a,a.return);break;case 3:if(ha(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Fm(e,n)}catch(b){Ve(a,a.return,b)}}break;case 27:n===null&&o&4&&K0(a);case 26:case 5:ha(e,a),n===null&&o&4&&Y0(a),o&512&&Uo(a,a.return);break;case 12:ha(e,a);break;case 31:ha(e,a),o&4&&eg(e,a);break;case 13:ha(e,a),o&4&&ng(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=JS.bind(null,a),vy(e,a))));break;case 22:if(o=a.memoizedState!==null||fa,!o){n=n!==null&&n.memoizedState!==null||mn,u=fa;var d=mn;fa=o,(mn=n)&&!d?pa(e,a,(a.subtreeFlags&8772)!==0):ha(e,a),fa=u,mn=d}break;case 30:break;default:ha(e,a)}}function $0(e){var n=e.alternate;n!==null&&(e.alternate=null,$0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&so(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,Xn=!1;function da(e,n,a){for(a=a.child;a!==null;)tg(e,n,a),a=a.sibling}function tg(e,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Ct,a)}catch{}switch(a.tag){case 26:mn||zi(a,n),da(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||zi(a,n);var o=en,u=Xn;Za(a.type)&&(en=a.stateNode,Xn=!1),da(e,n,a),Go(a.stateNode),en=o,Xn=u;break;case 5:mn||zi(a,n);case 6:if(o=en,u=Xn,en=null,da(e,n,a),en=o,Xn=u,en!==null)if(Xn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(d){Ve(a,n,d)}else try{en.removeChild(a.stateNode)}catch(d){Ve(a,n,d)}break;case 18:en!==null&&(Xn?(e=en,Wg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Rr(e)):Wg(en,a.stateNode));break;case 4:o=en,u=Xn,en=a.stateNode.containerInfo,Xn=!0,da(e,n,a),en=o,Xn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),mn||Va(4,a,n),da(e,n,a);break;case 1:mn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&q0(a,n,o)),da(e,n,a);break;case 21:da(e,n,a);break;case 22:mn=(o=mn)||a.memoizedState!==null,da(e,n,a),mn=o;break;default:da(e,n,a)}}function eg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Rr(e)}catch(a){Ve(n,n.return,a)}}}function ng(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rr(e)}catch(a){Ve(n,n.return,a)}}function jS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Q0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Q0),n;default:throw Error(s(435,e.tag))}}function rc(e,n){var a=jS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=$S.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,b=n,U=b;t:for(;U!==null;){switch(U.tag){case 27:if(Za(U.type)){en=U.stateNode,Xn=!1;break t}break;case 5:en=U.stateNode,Xn=!1;break t;case 3:case 4:en=U.stateNode.containerInfo,Xn=!0;break t}U=U.return}if(en===null)throw Error(s(160));tg(d,b,u),en=null,Xn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ig(n,e),n=n.sibling}var Ri=null;function ig(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(Va(3,e,e.return),No(3,e),Va(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(mn||a===null||zi(a,a.return)),o&64&&fa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(Wn(n,e),qn(e),o&512&&(mn||a===null||zi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ps]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Rn(d,o,a),d[cn]=e,it(d),o=d;break t;case"link":var b=i_("link","href",u).get(o+(a.href||""));if(b){for(var U=0;U<b.length;U++)if(d=b[U],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(U,1);break e}}d=u.createElement(o),Rn(d,o,a),u.head.appendChild(d);break;case"meta":if(b=i_("meta","content",u).get(o+(a.content||""))){for(U=0;U<b.length;U++)if(d=b[U],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(U,1);break e}}d=u.createElement(o),Rn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[cn]=e,it(d),o=d}e.stateNode=o}else a_(u,e.type,e.stateNode);else e.stateNode=n_(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?a_(u,e.type,e.stateNode):n_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Wf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(mn||a===null||zi(a,a.return)),a!==null&&o&4&&Wf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(mn||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{Hn(u,"")}catch($t){Ve(e,e.return,$t)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Wf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Zf=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch($t){Ve(e,e.return,$t)}}break;case 3:if(Mc=null,u=Ri,Ri=Sc(n.containerInfo),Wn(n,e),Ri=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Rr(n.containerInfo)}catch($t){Ve(e,e.return,$t)}Zf&&(Zf=!1,ag(e));break;case 4:o=Ri,Ri=Sc(e.stateNode.containerInfo),Wn(n,e),qn(e),Ri=o;break;case 12:Wn(n,e),qn(e);break;case 31:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,rc(e,o)));break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(lc=A()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,rc(e,o)));break;case 22:u=e.memoizedState!==null;var q=a!==null&&a.memoizedState!==null,ht=fa,bt=mn;if(fa=ht||u,mn=bt||q,Wn(n,e),mn=bt,fa=ht,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||q||fa||mn||Ds(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){q=a=n;try{if(d=q.stateNode,u)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{U=q.stateNode;var Rt=q.memoizedProps.style,mt=Rt!=null&&Rt.hasOwnProperty("display")?Rt.display:null;U.style.display=mt==null||typeof mt=="boolean"?"":(""+mt).trim()}}catch($t){Ve(q,q.return,$t)}}}else if(n.tag===6){if(a===null){q=n;try{q.stateNode.nodeValue=u?"":q.memoizedProps}catch($t){Ve(q,q.return,$t)}}}else if(n.tag===18){if(a===null){q=n;try{var St=q.stateNode;u?qg(St,!0):qg(q.stateNode,!1)}catch($t){Ve(q,q.return,$t)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,rc(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,rc(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Z0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=qf(e);sc(e,d,u);break;case 5:var b=a.stateNode;a.flags&32&&(Hn(b,""),a.flags&=-33);var U=qf(e);sc(e,U,b);break;case 3:case 4:var q=a.stateNode.containerInfo,ht=qf(e);Yf(e,ht,q);break;default:throw Error(s(161))}}catch(bt){Ve(e,e.return,bt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ag(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ag(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ha(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)J0(e,n.alternate,n),n=n.sibling}function Ds(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),Ds(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&q0(n,n.return,a),Ds(n);break;case 27:Go(n.stateNode);case 26:case 5:zi(n,n.return),Ds(n);break;case 22:n.memoizedState===null&&Ds(n);break;case 30:Ds(n);break;default:Ds(n)}e=e.sibling}}function pa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,b=d.flags;switch(d.tag){case 0:case 11:case 15:pa(u,d,a),No(4,d);break;case 1:if(pa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ht){Ve(o,o.return,ht)}if(o=d,u=o.updateQueue,u!==null){var U=o.stateNode;try{var q=u.shared.hiddenCallbacks;if(q!==null)for(u.shared.hiddenCallbacks=null,u=0;u<q.length;u++)Pm(q[u],U)}catch(ht){Ve(o,o.return,ht)}}a&&b&64&&W0(d),Uo(d,d.return);break;case 27:K0(d);case 26:case 5:pa(u,d,a),a&&o===null&&b&4&&Y0(d),Uo(d,d.return);break;case 12:pa(u,d,a);break;case 31:pa(u,d,a),a&&b&4&&eg(u,d);break;case 13:pa(u,d,a),a&&b&4&&ng(u,d);break;case 22:d.memoizedState===null&&pa(u,d,a),Uo(d,d.return);break;case 30:break;default:pa(u,d,a)}n=n.sibling}}function Kf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&vo(a))}function Qf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&vo(e))}function Ci(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)sg(e,n,a,o),n=n.sibling}function sg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,o),u&2048&&No(9,n);break;case 1:Ci(e,n,a,o);break;case 3:Ci(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&vo(e)));break;case 12:if(u&2048){Ci(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,b=d.id,U=d.onPostCommit;typeof U=="function"&&U(b,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(q){Ve(n,n.return,q)}}else Ci(e,n,a,o);break;case 31:Ci(e,n,a,o);break;case 13:Ci(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,b=n.alternate,n.memoizedState!==null?d._visibility&2?Ci(e,n,a,o):Lo(e,n):d._visibility&2?Ci(e,n,a,o):(d._visibility|=2,gr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Kf(b,n);break;case 24:Ci(e,n,a,o),u&2048&&Qf(n.alternate,n);break;default:Ci(e,n,a,o)}}function gr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,b=n,U=a,q=o,ht=b.flags;switch(b.tag){case 0:case 11:case 15:gr(d,b,U,q,u),No(8,b);break;case 23:break;case 22:var bt=b.stateNode;b.memoizedState!==null?bt._visibility&2?gr(d,b,U,q,u):Lo(d,b):(bt._visibility|=2,gr(d,b,U,q,u)),u&&ht&2048&&Kf(b.alternate,b);break;case 24:gr(d,b,U,q,u),u&&ht&2048&&Qf(b.alternate,b);break;default:gr(d,b,U,q,u)}n=n.sibling}}function Lo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Lo(a,o),u&2048&&Kf(o.alternate,o);break;case 24:Lo(a,o),u&2048&&Qf(o.alternate,o);break;default:Lo(a,o)}n=n.sibling}}var Oo=8192;function _r(e,n,a){if(e.subtreeFlags&Oo)for(e=e.child;e!==null;)rg(e,n,a),e=e.sibling}function rg(e,n,a){switch(e.tag){case 26:_r(e,n,a),e.flags&Oo&&e.memoizedState!==null&&Dy(a,Ri,e.memoizedState,e.memoizedProps);break;case 5:_r(e,n,a);break;case 3:case 4:var o=Ri;Ri=Sc(e.stateNode.containerInfo),_r(e,n,a),Ri=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Oo,Oo=16777216,_r(e,n,a),Oo=o):_r(e,n,a));break;default:_r(e,n,a)}}function og(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Po(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,cg(o,e)}og(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lg(e),e=e.sibling}function lg(e){switch(e.tag){case 0:case 11:case 15:Po(e),e.flags&2048&&Va(9,e,e.return);break;case 3:Po(e);break;case 12:Po(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,oc(e)):Po(e);break;default:Po(e)}}function oc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,cg(o,e)}og(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Va(8,n,n.return),oc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,oc(n));break;default:oc(n)}e=e.sibling}}function cg(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:vo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else t:for(a=e;Mn!==null;){o=Mn;var u=o.sibling,d=o.return;if($0(o),o===a){Mn=null;break t}if(u!==null){u.return=d,Mn=u;break t}Mn=d}}}var XS={getCacheForType:function(e){var n=Tn(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(dn).controller.signal}},WS=typeof WeakMap=="function"?WeakMap:Map,Be=0,Ye=null,Ee=null,Re=0,Ge=0,ii=null,ka=!1,vr=!1,Jf=!1,ma=0,sn=0,ja=0,Ns=0,$f=0,ai=0,xr=0,Fo=null,Yn=null,td=!1,lc=0,ug=0,cc=1/0,uc=null,Xa=null,xn=0,Wa=null,Sr=null,ga=0,ed=0,nd=null,fg=null,Io=0,id=null;function si(){return(Be&2)!==0&&Re!==0?Re&-Re:N.T!==null?cd():Fi()}function dg(){if(ai===0)if((Re&536870912)===0||we){var e=Ot;Ot<<=1,(Ot&3932160)===0&&(Ot=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function Zn(e,n,a){(e===Ye&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(yr(e,0),qa(e,Re,ai,!1)),In(e,a),((Be&2)===0||e!==Ye)&&(e===Ye&&((Be&2)===0&&(Ns|=a),sn===4&&qa(e,Re,ai,!1)),Hi(e))}function hg(e,n,a){if((Be&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Qt(e,n),u=o?ZS(e,n):sd(e,n,!0),d=o;do{if(u===0){vr&&!o&&qa(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!qS(a)){u=sd(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;t:{var U=e;u=Fo;var q=U.current.memoizedState.isDehydrated;if(q&&(yr(U,b).flags|=256),b=sd(U,b,!1),b!==2){if(Jf&&!q){U.errorRecoveryDisabledLanes|=d,Ns|=d,u=4;break t}d=Yn,Yn=u,d!==null&&(Yn===null?Yn=d:Yn.push.apply(Yn,d))}u=b}if(d=!1,u!==2)continue}}if(u===1){yr(e,0),qa(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,ai,!ka);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=lc+300-A(),10<u)){if(qa(o,n,ai,!ka),Mt(o,0,!0)!==0)break t;ga=n,o.timeoutHandle=jg(pg.bind(null,o,a,Yn,uc,td,n,ai,Ns,xr,ka,d,"Throttled",-0,0),u);break t}pg(o,a,Yn,uc,td,n,ai,Ns,xr,ka,d,null,-0,0)}}break}while(!0);Hi(e)}function pg(e,n,a,o,u,d,b,U,q,ht,bt,Rt,mt,St){if(e.timeoutHandle=-1,Rt=n.subtreeFlags,Rt&8192||(Rt&16785408)===16785408){Rt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},rg(n,d,Rt);var $t=(d&62914560)===d?lc-A():(d&4194048)===d?ug-A():0;if($t=Ny(Rt,$t),$t!==null){ga=d,e.cancelPendingCommit=$t(Mg.bind(null,e,n,d,a,o,u,b,U,q,bt,Rt,null,mt,St)),qa(e,d,b,!ht);return}}Mg(e,n,d,a,o,u,b,U,q)}function qS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!$n(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(e,n,a,o){n&=~$f,n&=~Ns,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-zt(u),b=1<<d;o[d]=-1,u&=~b}a!==0&&ao(e,a,n)}function fc(){return(Be&6)===0?(Bo(0),!1):!0}function ad(){if(Ee!==null){if(Ge===0)var e=Ee.return;else e=Ee,sa=Ms=null,Sf(e),fr=null,So=0,e=Ee;for(;e!==null;)X0(e.alternate,e),e=e.return;Ee=null}}function yr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,hy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ga=0,ad(),Ye=e,Ee=a=ia(e.current,null),Re=n,Ge=0,ii=null,ka=!1,vr=Qt(e,n),Jf=!1,xr=ai=$f=Ns=ja=sn=0,Yn=Fo=null,td=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),d=1<<u;n|=e[u],o&=~d}return ma=n,Ul(),a}function mg(e,n){_e=null,N.H=Co,n===ur||n===Hl?(n=Nm(),Ge=3):n===lf?(n=Nm(),Ge=4):Ge=n===Ff?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,Ee===null&&(sn=1,tc(e,di(n,e.current)))}function gg(){var e=ei.current;return e===null?!0:(Re&4194048)===Re?gi===null:(Re&62914560)===Re||(Re&536870912)!==0?e===gi:!1}function _g(){var e=N.H;return N.H=Co,e===null?Co:e}function vg(){var e=N.A;return N.A=XS,e}function dc(){sn=4,ka||(Re&4194048)!==Re&&ei.current!==null||(vr=!0),(ja&134217727)===0&&(Ns&134217727)===0||Ye===null||qa(Ye,Re,ai,!1)}function sd(e,n,a){var o=Be;Be|=2;var u=_g(),d=vg();(Ye!==e||Re!==n)&&(uc=null,yr(e,n)),n=!1;var b=sn;t:do try{if(Ge!==0&&Ee!==null){var U=Ee,q=ii;switch(Ge){case 8:ad(),b=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var ht=Ge;if(Ge=0,ii=null,Mr(e,U,q,ht),a&&vr){b=0;break t}break;default:ht=Ge,Ge=0,ii=null,Mr(e,U,q,ht)}}YS(),b=sn;break}catch(bt){mg(e,bt)}while(!0);return n&&e.shellSuspendCounter++,sa=Ms=null,Be=o,N.H=u,N.A=d,Ee===null&&(Ye=null,Re=0,Ul()),b}function YS(){for(;Ee!==null;)xg(Ee)}function ZS(e,n){var a=Be;Be|=2;var o=_g(),u=vg();Ye!==e||Re!==n?(uc=null,cc=A()+500,yr(e,n)):vr=Qt(e,n);t:do try{if(Ge!==0&&Ee!==null){n=Ee;var d=ii;e:switch(Ge){case 1:Ge=0,ii=null,Mr(e,n,d,1);break;case 2:case 9:if(wm(d)){Ge=0,ii=null,Sg(n);break}n=function(){Ge!==2&&Ge!==9||Ye!==e||(Ge=7),Hi(e)},d.then(n,n);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:wm(d)?(Ge=0,ii=null,Sg(n)):(Ge=0,ii=null,Mr(e,n,d,7));break;case 5:var b=null;switch(Ee.tag){case 26:b=Ee.memoizedState;case 5:case 27:var U=Ee;if(b?s_(b):U.stateNode.complete){Ge=0,ii=null;var q=U.sibling;if(q!==null)Ee=q;else{var ht=U.return;ht!==null?(Ee=ht,hc(ht)):Ee=null}break e}}Ge=0,ii=null,Mr(e,n,d,5);break;case 6:Ge=0,ii=null,Mr(e,n,d,6);break;case 8:ad(),sn=6;break t;default:throw Error(s(462))}}KS();break}catch(bt){mg(e,bt)}while(!0);return sa=Ms=null,N.H=o,N.A=u,Be=a,Ee!==null?0:(Ye=null,Re=0,Ul(),sn)}function KS(){for(;Ee!==null&&!Gt();)xg(Ee)}function xg(e){var n=k0(e.alternate,e,ma);e.memoizedProps=e.pendingProps,n===null?hc(e):Ee=n}function Sg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=I0(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=I0(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:Sf(n);default:X0(a,n),n=Ee=vm(n,ma),n=k0(a,n,ma)}e.memoizedProps=e.pendingProps,n===null?hc(e):Ee=n}function Mr(e,n,a,o){sa=Ms=null,Sf(n),fr=null,So=0;var u=n.return;try{if(BS(e,u,n,a,Re)){sn=1,tc(e,di(a,e.current)),Ee=null;return}}catch(d){if(u!==null)throw Ee=u,d;sn=1,tc(e,di(a,e.current)),Ee=null;return}n.flags&32768?(we||o===1?e=!0:vr||(Re&536870912)!==0?e=!1:(ka=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),yg(n,e)):hc(n)}function hc(e){var n=e;do{if((n.flags&32768)!==0){yg(n,ka);return}e=n.return;var a=GS(n.alternate,n,ma);if(a!==null){Ee=a;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=e}while(n!==null);sn===0&&(sn=5)}function yg(e,n){do{var a=VS(e.alternate,e);if(a!==null){a.flags&=32767,Ee=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=a}while(e!==null);sn=6,Ee=null}function Mg(e,n,a,o,u,d,b,U,q){e.cancelPendingCommit=null;do pc();while(xn!==0);if((Be&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Wu,Mi(e,a,d,b,U,q),e===Ye&&(Ee=Ye=null,Re=0),Sr=n,Wa=e,ga=a,ed=d,nd=u,fg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ty(gt,function(){return Rg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=F.p,F.p=2,b=Be,Be|=4;try{kS(e,n,a)}finally{Be=b,F.p=u,N.T=o}}xn=1,bg(),Eg(),Tg()}}function bg(){if(xn===1){xn=0;var e=Wa,n=Sr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=F.p;F.p=2;var u=Be;Be|=4;try{ig(n,e);var d=_d,b=cm(e.containerInfo),U=d.focusedElem,q=d.selectionRange;if(b!==U&&U&&U.ownerDocument&&lm(U.ownerDocument.documentElement,U)){if(q!==null&&Gu(U)){var ht=q.start,bt=q.end;if(bt===void 0&&(bt=ht),"selectionStart"in U)U.selectionStart=ht,U.selectionEnd=Math.min(bt,U.value.length);else{var Rt=U.ownerDocument||document,mt=Rt&&Rt.defaultView||window;if(mt.getSelection){var St=mt.getSelection(),$t=U.textContent.length,ce=Math.min(q.start,$t),We=q.end===void 0?ce:Math.min(q.end,$t);!St.extend&&ce>We&&(b=We,We=ce,ce=b);var lt=om(U,ce),nt=om(U,We);if(lt&&nt&&(St.rangeCount!==1||St.anchorNode!==lt.node||St.anchorOffset!==lt.offset||St.focusNode!==nt.node||St.focusOffset!==nt.offset)){var dt=Rt.createRange();dt.setStart(lt.node,lt.offset),St.removeAllRanges(),ce>We?(St.addRange(dt),St.extend(nt.node,nt.offset)):(dt.setEnd(nt.node,nt.offset),St.addRange(dt))}}}}for(Rt=[],St=U;St=St.parentNode;)St.nodeType===1&&Rt.push({element:St,left:St.scrollLeft,top:St.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<Rt.length;U++){var Tt=Rt[U];Tt.element.scrollLeft=Tt.left,Tt.element.scrollTop=Tt.top}}Ac=!!gd,_d=gd=null}finally{Be=u,F.p=o,N.T=a}}e.current=n,xn=2}}function Eg(){if(xn===2){xn=0;var e=Wa,n=Sr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=F.p;F.p=2;var u=Be;Be|=4;try{J0(e,n.alternate,n)}finally{Be=u,F.p=o,N.T=a}}xn=3}}function Tg(){if(xn===4||xn===3){xn=0,z();var e=Wa,n=Sr,a=ga,o=fg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Sr=Wa=null,Ag(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Xa=null),Ys(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Ct,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,u=F.p,F.p=2,N.T=null;try{for(var d=e.onRecoverableError,b=0;b<o.length;b++){var U=o[b];d(U.value,{componentStack:U.stack})}}finally{N.T=n,F.p=u}}(ga&3)!==0&&pc(),Hi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===id?Io++:(Io=0,id=e):Io=0,Bo(0)}}function Ag(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,vo(n)))}function pc(){return bg(),Eg(),Tg(),Rg()}function Rg(){if(xn!==5)return!1;var e=Wa,n=ed;ed=0;var a=Ys(ga),o=N.T,u=F.p;try{F.p=32>a?32:a,N.T=null,a=nd,nd=null;var d=Wa,b=ga;if(xn=0,Sr=Wa=null,ga=0,(Be&6)!==0)throw Error(s(331));var U=Be;if(Be|=4,lg(d.current),sg(d,d.current,b,a),Be=U,Bo(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Ct,d)}catch{}return!0}finally{F.p=u,N.T=o,Ag(e,n)}}function Cg(e,n,a){n=di(a,n),n=Pf(e.stateNode,n,2),e=za(e,n,2),e!==null&&(In(e,2),Hi(e))}function Ve(e,n,a){if(e.tag===3)Cg(e,e,a);else for(;n!==null;){if(n.tag===3){Cg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xa===null||!Xa.has(o))){e=di(a,e),a=w0(2),o=za(n,a,2),o!==null&&(D0(a,o,n,e),In(o,2),Hi(o));break}}n=n.return}}function rd(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new WS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Jf=!0,u.add(a),e=QS.bind(null,e,n,a),n.then(e,e))}function QS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Re&a)===a&&(sn===4||sn===3&&(Re&62914560)===Re&&300>A()-lc?(Be&2)===0&&yr(e,0):$f|=a,xr===Re&&(xr=0)),Hi(e)}function wg(e,n){n===0&&(n=He()),e=xs(e,n),e!==null&&(In(e,n),Hi(e))}function JS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),wg(e,a)}function $S(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),wg(e,a)}function ty(e,n){return oe(e,n)}var mc=null,br=null,od=!1,gc=!1,ld=!1,Ya=0;function Hi(e){e!==br&&e.next===null&&(br===null?mc=br=e:br=br.next=e),gc=!0,od||(od=!0,ny())}function Bo(e,n){if(!ld&&gc){ld=!0;do for(var a=!1,o=mc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var b=o.suspendedLanes,U=o.pingedLanes;d=(1<<31-zt(42|e)+1)-1,d&=u&~(b&~U),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Lg(o,d))}else d=Re,d=Mt(o,o===Ye?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Qt(o,d)||(a=!0,Lg(o,d));o=o.next}while(a);ld=!1}}function ey(){Dg()}function Dg(){gc=od=!1;var e=0;Ya!==0&&dy()&&(e=Ya);for(var n=A(),a=null,o=mc;o!==null;){var u=o.next,d=Ng(o,n);d===0?(o.next=null,a===null?mc=u:a.next=u,u===null&&(br=a)):(a=o,(e!==0||(d&3)!==0)&&(gc=!0)),o=u}xn!==0&&xn!==5||Bo(e),Ya!==0&&(Ya=0)}function Ng(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var b=31-zt(d),U=1<<b,q=u[b];q===-1?((U&a)===0||(U&o)!==0)&&(u[b]=he(U,n)):q<=n&&(e.expiredLanes|=U),d&=~U}if(n=Ye,a=Re,a=Mt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&le(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Qt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&le(o),Ys(a)){case 2:case 8:a=Et;break;case 32:a=gt;break;case 268435456:a=Ut;break;default:a=gt}return o=Ug.bind(null,e),a=oe(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&le(o),e.callbackPriority=2,e.callbackNode=null,2}function Ug(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(pc()&&e.callbackNode!==a)return null;var o=Re;return o=Mt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(hg(e,o,n),Ng(e,A()),e.callbackNode!=null&&e.callbackNode===a?Ug.bind(null,e):null)}function Lg(e,n){if(pc())return null;hg(e,n,!0)}function ny(){py(function(){(Be&6)!==0?oe(yt,ey):Dg()})}function cd(){if(Ya===0){var e=lr;e===0&&(e=Ft,Ft<<=1,(Ft&261888)===0&&(Ft=256)),Ya=e}return Ya}function Og(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:El(""+e)}function Pg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function iy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Og((u[_n]||null).action),b=o.submitter;b&&(n=(n=b[_n]||null)?Og(n.formAction):b.getAttribute("formAction"),n!==null&&(d=n,b=null));var U=new Cl("action","action",null,o,u);e.push({event:U,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var q=b?Pg(u,b):new FormData(u);wf(a,{pending:!0,data:q,method:u.method,action:d},null,q)}}else typeof d=="function"&&(U.preventDefault(),q=b?Pg(u,b):new FormData(u),wf(a,{pending:!0,data:q,method:u.method,action:d},d,q))},currentTarget:u}]})}}for(var ud=0;ud<Xu.length;ud++){var fd=Xu[ud],ay=fd.toLowerCase(),sy=fd[0].toUpperCase()+fd.slice(1);Ai(ay,"on"+sy)}Ai(dm,"onAnimationEnd"),Ai(hm,"onAnimationIteration"),Ai(pm,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(yS,"onTransitionRun"),Ai(MS,"onTransitionStart"),Ai(bS,"onTransitionCancel"),Ai(mm,"onTransitionEnd"),It("onMouseEnter",["mouseout","mouseover"]),It("onMouseLeave",["mouseout","mouseover"]),It("onPointerEnter",["pointerout","pointerover"]),It("onPointerLeave",["pointerout","pointerover"]),ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ct("onBeforeInput",["compositionend","keypress","textInput","paste"]),ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function Fg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var b=o.length-1;0<=b;b--){var U=o[b],q=U.instance,ht=U.currentTarget;if(U=U.listener,q!==d&&u.isPropagationStopped())break t;d=U,u.currentTarget=ht;try{d(u)}catch(bt){Nl(bt)}u.currentTarget=null,d=q}else for(b=0;b<o.length;b++){if(U=o[b],q=U.instance,ht=U.currentTarget,U=U.listener,q!==d&&u.isPropagationStopped())break t;d=U,u.currentTarget=ht;try{d(u)}catch(bt){Nl(bt)}u.currentTarget=null,d=q}}}}function Te(e,n){var a=n[wa];a===void 0&&(a=n[wa]=new Set);var o=e+"__bubble";a.has(o)||(Ig(n,e,2,!1),a.add(o))}function dd(e,n,a){var o=0;n&&(o|=4),Ig(a,e,o,n)}var _c="_reactListening"+Math.random().toString(36).slice(2);function hd(e){if(!e[_c]){e[_c]=!0,vt.forEach(function(a){a!=="selectionchange"&&(ry.has(a)||dd(a,!1,e),dd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[_c]||(n[_c]=!0,dd("selectionchange",!1,n))}}function Ig(e,n,a,o){switch(d_(n)){case 2:var u=Oy;break;case 8:u=Py;break;default:u=Cd}a=u.bind(null,n,a,e),u=void 0,!Uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function pd(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var U=o.stateNode.containerInfo;if(U===u)break;if(b===4)for(b=o.return;b!==null;){var q=b.tag;if((q===3||q===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;U!==null;){if(b=Da(U),b===null)return;if(q=b.tag,q===5||q===6||q===26||q===27){o=d=b;continue t}U=U.parentNode}}o=o.return}Vp(function(){var ht=d,bt=Du(a),Rt=[];t:{var mt=gm.get(e);if(mt!==void 0){var St=Cl,$t=e;switch(e){case"keypress":if(Al(a)===0)break t;case"keydown":case"keyup":St=$x;break;case"focusin":$t="focus",St=Fu;break;case"focusout":$t="blur",St=Fu;break;case"beforeblur":case"afterblur":St=Fu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":St=Xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":St=Gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":St=nS;break;case dm:case hm:case pm:St=jx;break;case mm:St=aS;break;case"scroll":case"scrollend":St=zx;break;case"wheel":St=rS;break;case"copy":case"cut":case"paste":St=Wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":St=qp;break;case"toggle":case"beforetoggle":St=lS}var ce=(n&4)!==0,We=!ce&&(e==="scroll"||e==="scrollend"),lt=ce?mt!==null?mt+"Capture":null:mt;ce=[];for(var nt=ht,dt;nt!==null;){var Tt=nt;if(dt=Tt.stateNode,Tt=Tt.tag,Tt!==5&&Tt!==26&&Tt!==27||dt===null||lt===null||(Tt=ro(nt,lt),Tt!=null&&ce.push(Ho(nt,Tt,dt))),We)break;nt=nt.return}0<ce.length&&(mt=new St(mt,$t,null,a,bt),Rt.push({event:mt,listeners:ce}))}}if((n&7)===0){t:{if(mt=e==="mouseover"||e==="pointerover",St=e==="mouseout"||e==="pointerout",mt&&a!==wu&&($t=a.relatedTarget||a.fromElement)&&(Da($t)||$t[$i]))break t;if((St||mt)&&(mt=bt.window===bt?bt:(mt=bt.ownerDocument)?mt.defaultView||mt.parentWindow:window,St?($t=a.relatedTarget||a.toElement,St=ht,$t=$t?Da($t):null,$t!==null&&(We=c($t),ce=$t.tag,$t!==We||ce!==5&&ce!==27&&ce!==6)&&($t=null)):(St=null,$t=ht),St!==$t)){if(ce=Xp,Tt="onMouseLeave",lt="onMouseEnter",nt="mouse",(e==="pointerout"||e==="pointerover")&&(ce=qp,Tt="onPointerLeave",lt="onPointerEnter",nt="pointer"),We=St==null?mt:ms(St),dt=$t==null?mt:ms($t),mt=new ce(Tt,nt+"leave",St,a,bt),mt.target=We,mt.relatedTarget=dt,Tt=null,Da(bt)===ht&&(ce=new ce(lt,nt+"enter",$t,a,bt),ce.target=dt,ce.relatedTarget=We,Tt=ce),We=Tt,St&&$t)e:{for(ce=oy,lt=St,nt=$t,dt=0,Tt=lt;Tt;Tt=ce(Tt))dt++;Tt=0;for(var re=nt;re;re=ce(re))Tt++;for(;0<dt-Tt;)lt=ce(lt),dt--;for(;0<Tt-dt;)nt=ce(nt),Tt--;for(;dt--;){if(lt===nt||nt!==null&&lt===nt.alternate){ce=lt;break e}lt=ce(lt),nt=ce(nt)}ce=null}else ce=null;St!==null&&Bg(Rt,mt,St,ce,!1),$t!==null&&We!==null&&Bg(Rt,We,$t,ce,!0)}}t:{if(mt=ht?ms(ht):window,St=mt.nodeName&&mt.nodeName.toLowerCase(),St==="select"||St==="input"&&mt.type==="file")var Fe=em;else if($p(mt))if(nm)Fe=vS;else{Fe=gS;var ie=mS}else St=mt.nodeName,!St||St.toLowerCase()!=="input"||mt.type!=="checkbox"&&mt.type!=="radio"?ht&&Ks(ht.elementType)&&(Fe=em):Fe=_S;if(Fe&&(Fe=Fe(e,ht))){tm(Rt,Fe,a,bt);break t}ie&&ie(e,mt,ht),e==="focusout"&&ht&&mt.type==="number"&&ht.memoizedProps.value!=null&&Ei(mt,"number",mt.value)}switch(ie=ht?ms(ht):window,e){case"focusin":($p(ie)||ie.contentEditable==="true")&&(tr=ie,Vu=ht,mo=null);break;case"focusout":mo=Vu=tr=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,um(Rt,a,bt);break;case"selectionchange":if(SS)break;case"keydown":case"keyup":um(Rt,a,bt)}var Se;if(Bu)t:{switch(e){case"compositionstart":var Ce="onCompositionStart";break t;case"compositionend":Ce="onCompositionEnd";break t;case"compositionupdate":Ce="onCompositionUpdate";break t}Ce=void 0}else $s?Qp(e,a)&&(Ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ce="onCompositionStart");Ce&&(Yp&&a.locale!=="ko"&&($s||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&$s&&(Se=kp()):(Ua=bt,Lu="value"in Ua?Ua.value:Ua.textContent,$s=!0)),ie=vc(ht,Ce),0<ie.length&&(Ce=new Wp(Ce,e,null,a,bt),Rt.push({event:Ce,listeners:ie}),Se?Ce.data=Se:(Se=Jp(a),Se!==null&&(Ce.data=Se)))),(Se=uS?fS(e,a):dS(e,a))&&(Ce=vc(ht,"onBeforeInput"),0<Ce.length&&(ie=new Wp("onBeforeInput","beforeinput",null,a,bt),Rt.push({event:ie,listeners:Ce}),ie.data=Se)),iy(Rt,e,ht,a,bt)}Fg(Rt,n)})}function Ho(e,n,a){return{instance:e,listener:n,currentTarget:a}}function vc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=ro(e,a),u!=null&&o.unshift(Ho(e,u,d)),u=ro(e,n),u!=null&&o.push(Ho(e,u,d))),e.tag===3)return o;e=e.return}return[]}function oy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bg(e,n,a,o,u){for(var d=n._reactName,b=[];a!==null&&a!==o;){var U=a,q=U.alternate,ht=U.stateNode;if(U=U.tag,q!==null&&q===o)break;U!==5&&U!==26&&U!==27||ht===null||(q=ht,u?(ht=ro(a,d),ht!=null&&b.unshift(Ho(a,ht,q))):u||(ht=ro(a,d),ht!=null&&b.push(Ho(a,ht,q)))),a=a.return}b.length!==0&&e.push({event:n,listeners:b})}var ly=/\r\n?/g,cy=/\u0000|\uFFFD/g;function zg(e){return(typeof e=="string"?e:""+e).replace(ly,`
`).replace(cy,"")}function Hg(e,n){return n=zg(n),zg(e)===n}function Xe(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Hn(e,""+o);break;case"className":me(e,"class",o);break;case"tabIndex":me(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":me(e,a,o);break;case"style":ta(e,o,d);break;case"data":if(n!=="object"){me(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=El(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=El(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ea);break;case"onScroll":o!=null&&Te("scroll",e);break;case"onScrollEnd":o!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=El(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Te("beforetoggle",e),Te("toggle",e),fe(e,"popover",o);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":fe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ix.get(a)||a,fe(e,a,o))}}function md(e,n,a,o,u,d){switch(a){case"style":ta(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&Hn(e,""+o);break;case"onScroll":o!=null&&Te("scroll",e);break;case"onScrollEnd":o!=null&&Te("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[_n]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):fe(e,a,o)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var b=a[d];if(b!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,d,b,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":Te("invalid",e);var U=d=b=u=null,q=null,ht=null;for(o in a)if(a.hasOwnProperty(o)){var bt=a[o];if(bt!=null)switch(o){case"name":u=bt;break;case"type":b=bt;break;case"checked":q=bt;break;case"defaultChecked":ht=bt;break;case"value":d=bt;break;case"defaultValue":U=bt;break;case"children":case"dangerouslySetInnerHTML":if(bt!=null)throw Error(s(137,n));break;default:Xe(e,n,o,bt,a,null)}}Qn(e,d,U,q,ht,b,u,!1);return;case"select":Te("invalid",e),o=b=d=null;for(u in a)if(a.hasOwnProperty(u)&&(U=a[u],U!=null))switch(u){case"value":d=U;break;case"defaultValue":b=U;break;case"multiple":o=U;default:Xe(e,n,u,U,a,null)}n=d,a=b,e.multiple=!!o,n!=null?Jn(e,!!o,n,!1):a!=null&&Jn(e,!!o,a,!0);return;case"textarea":Te("invalid",e),d=u=o=null;for(b in a)if(a.hasOwnProperty(b)&&(U=a[b],U!=null))switch(b){case"value":o=U;break;case"defaultValue":u=U;break;case"children":d=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(91));break;default:Xe(e,n,b,U,a,null)}un(e,o,u,d);return;case"option":for(q in a)if(a.hasOwnProperty(q)&&(o=a[q],o!=null))switch(q){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(e,n,q,o,a,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(o=0;o<zo.length;o++)Te(zo[o],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ht in a)if(a.hasOwnProperty(ht)&&(o=a[ht],o!=null))switch(ht){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,ht,o,a,null)}return;default:if(Ks(n)){for(bt in a)a.hasOwnProperty(bt)&&(o=a[bt],o!==void 0&&md(e,n,bt,o,a,void 0));return}}for(U in a)a.hasOwnProperty(U)&&(o=a[U],o!=null&&Xe(e,n,U,o,a,null))}function uy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,b=null,U=null,q=null,ht=null,bt=null;for(St in a){var Rt=a[St];if(a.hasOwnProperty(St)&&Rt!=null)switch(St){case"checked":break;case"value":break;case"defaultValue":q=Rt;default:o.hasOwnProperty(St)||Xe(e,n,St,null,o,Rt)}}for(var mt in o){var St=o[mt];if(Rt=a[mt],o.hasOwnProperty(mt)&&(St!=null||Rt!=null))switch(mt){case"type":d=St;break;case"name":u=St;break;case"checked":ht=St;break;case"defaultChecked":bt=St;break;case"value":b=St;break;case"defaultValue":U=St;break;case"children":case"dangerouslySetInnerHTML":if(St!=null)throw Error(s(137,n));break;default:St!==Rt&&Xe(e,n,mt,St,o,Rt)}}zn(e,b,U,q,ht,bt,d,u);return;case"select":St=b=U=mt=null;for(d in a)if(q=a[d],a.hasOwnProperty(d)&&q!=null)switch(d){case"value":break;case"multiple":St=q;default:o.hasOwnProperty(d)||Xe(e,n,d,null,o,q)}for(u in o)if(d=o[u],q=a[u],o.hasOwnProperty(u)&&(d!=null||q!=null))switch(u){case"value":mt=d;break;case"defaultValue":U=d;break;case"multiple":b=d;default:d!==q&&Xe(e,n,u,d,o,q)}n=U,a=b,o=St,mt!=null?Jn(e,!!a,mt,!1):!!o!=!!a&&(n!=null?Jn(e,!!a,n,!0):Jn(e,!!a,a?[]:"",!1));return;case"textarea":St=mt=null;for(U in a)if(u=a[U],a.hasOwnProperty(U)&&u!=null&&!o.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:Xe(e,n,U,null,o,u)}for(b in o)if(u=o[b],d=a[b],o.hasOwnProperty(b)&&(u!=null||d!=null))switch(b){case"value":mt=u;break;case"defaultValue":St=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Xe(e,n,b,u,o,d)}ze(e,mt,St);return;case"option":for(var $t in a)if(mt=a[$t],a.hasOwnProperty($t)&&mt!=null&&!o.hasOwnProperty($t))switch($t){case"selected":e.selected=!1;break;default:Xe(e,n,$t,null,o,mt)}for(q in o)if(mt=o[q],St=a[q],o.hasOwnProperty(q)&&mt!==St&&(mt!=null||St!=null))switch(q){case"selected":e.selected=mt&&typeof mt!="function"&&typeof mt!="symbol";break;default:Xe(e,n,q,mt,o,St)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in a)mt=a[ce],a.hasOwnProperty(ce)&&mt!=null&&!o.hasOwnProperty(ce)&&Xe(e,n,ce,null,o,mt);for(ht in o)if(mt=o[ht],St=a[ht],o.hasOwnProperty(ht)&&mt!==St&&(mt!=null||St!=null))switch(ht){case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:Xe(e,n,ht,mt,o,St)}return;default:if(Ks(n)){for(var We in a)mt=a[We],a.hasOwnProperty(We)&&mt!==void 0&&!o.hasOwnProperty(We)&&md(e,n,We,void 0,o,mt);for(bt in o)mt=o[bt],St=a[bt],!o.hasOwnProperty(bt)||mt===St||mt===void 0&&St===void 0||md(e,n,bt,mt,o,St);return}}for(var lt in a)mt=a[lt],a.hasOwnProperty(lt)&&mt!=null&&!o.hasOwnProperty(lt)&&Xe(e,n,lt,null,o,mt);for(Rt in o)mt=o[Rt],St=a[Rt],!o.hasOwnProperty(Rt)||mt===St||mt==null&&St==null||Xe(e,n,Rt,mt,o,St)}function Gg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,b=u.initiatorType,U=u.duration;if(d&&U&&Gg(b)){for(b=0,U=u.responseEnd,o+=1;o<a.length;o++){var q=a[o],ht=q.startTime;if(ht>U)break;var bt=q.transferSize,Rt=q.initiatorType;bt&&Gg(Rt)&&(q=q.responseEnd,b+=bt*(q<U?1:(U-ht)/(q-ht)))}if(--o,n+=8*(d+b)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var gd=null,_d=null;function xc(e){return e.nodeType===9?e:e.ownerDocument}function Vg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function vd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xd=null;function dy(){var e=window.event;return e&&e.type==="popstate"?e===xd?!1:(xd=e,!0):(xd=null,!1)}var jg=typeof setTimeout=="function"?setTimeout:void 0,hy=typeof clearTimeout=="function"?clearTimeout:void 0,Xg=typeof Promise=="function"?Promise:void 0,py=typeof queueMicrotask=="function"?queueMicrotask:typeof Xg<"u"?function(e){return Xg.resolve(null).then(e).catch(my)}:jg;function my(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function Wg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Rr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Go(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Go(a);for(var d=a.firstChild;d;){var b=d.nextSibling,U=d.nodeName;d[ps]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=b}}else a==="body"&&Go(e.ownerDocument.body);a=u}while(a);Rr(n)}function qg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Sd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sd(a),so(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function gy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ps])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function _y(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Yg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function yd(e){return e.data==="$?"||e.data==="$~"}function Md(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var bd=null;function Zg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return _i(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Kg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Qg(e,n,a){switch(n=xc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Go(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);so(e)}var vi=new Map,Jg=new Set;function Sc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=F.d;F.d={f:xy,r:Sy,D:yy,C:My,L:by,m:Ey,X:Ay,S:Ty,M:Ry};function xy(){var e=_a.f(),n=fc();return e||n}function Sy(e){var n=Na(e);n!==null&&n.tag===5&&n.type==="form"?m0(n):_a.r(e)}var Er=typeof document>"u"?null:document;function $g(e,n,a){var o=Er;if(o&&typeof n=="string"&&n){var u=pe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Jg.has(u)||(Jg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",e),it(n),o.head.appendChild(n)))}}function yy(e){_a.D(e),$g("dns-prefetch",e,null)}function My(e,n){_a.C(e,n),$g("preconnect",e,n)}function by(e,n,a){_a.L(e,n,a);var o=Er;if(o&&e&&n){var u='link[rel="preload"][as="'+pe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pe(a.imageSizes)+'"]')):u+='[href="'+pe(e)+'"]';var d=u;switch(n){case"style":d=Tr(e);break;case"script":d=Ar(e)}vi.has(d)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Vo(d))||n==="script"&&o.querySelector(ko(d))||(n=o.createElement("link"),Rn(n,"link",e),it(n),o.head.appendChild(n)))}}function Ey(e,n){_a.m(e,n);var a=Er;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pe(o)+'"][href="'+pe(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ar(e)}if(!vi.has(d)&&(e=g({rel:"modulepreload",href:e},n),vi.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ko(d)))return}o=a.createElement("link"),Rn(o,"link",e),it(o),a.head.appendChild(o)}}}function Ty(e,n,a){_a.S(e,n,a);var o=Er;if(o&&e){var u=L(o).hoistableStyles,d=Tr(e);n=n||"default";var b=u.get(d);if(!b){var U={loading:0,preload:null};if(b=o.querySelector(Vo(d)))U.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(d))&&Ed(e,a);var q=b=o.createElement("link");it(q),Rn(q,"link",e),q._p=new Promise(function(ht,bt){q.onload=ht,q.onerror=bt}),q.addEventListener("load",function(){U.loading|=1}),q.addEventListener("error",function(){U.loading|=2}),U.loading|=4,yc(b,n,o)}b={type:"stylesheet",instance:b,count:1,state:U},u.set(d,b)}}}function Ay(e,n){_a.X(e,n);var a=Er;if(a&&e){var o=L(a).hoistableScripts,u=Ar(e),d=o.get(u);d||(d=a.querySelector(ko(u)),d||(e=g({src:e,async:!0},n),(n=vi.get(u))&&Td(e,n),d=a.createElement("script"),it(d),Rn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Ry(e,n){_a.M(e,n);var a=Er;if(a&&e){var o=L(a).hoistableScripts,u=Ar(e),d=o.get(u);d||(d=a.querySelector(ko(u)),d||(e=g({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&Td(e,n),d=a.createElement("script"),it(d),Rn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function t_(e,n,a,o){var u=(u=W.current)?Sc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Tr(a.href),a=L(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tr(a.href);var d=L(u).hoistableStyles,b=d.get(e);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,b),(d=u.querySelector(Vo(e)))&&!d._p&&(b.instance=d,b.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),d||Cy(u,e,a,b.state))),n&&o===null)throw Error(s(528,""));return b}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ar(a),a=L(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Tr(e){return'href="'+pe(e)+'"'}function Vo(e){return'link[rel="stylesheet"]['+e+"]"}function e_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Cy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),it(n),e.head.appendChild(n))}function Ar(e){return'[src="'+pe(e)+'"]'}function ko(e){return"script[async]"+e}function n_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+pe(a.href)+'"]');if(o)return n.instance=o,it(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),it(o),Rn(o,"style",u),yc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Tr(a.href);var d=e.querySelector(Vo(u));if(d)return n.state.loading|=4,n.instance=d,it(d),d;o=e_(a),(u=vi.get(u))&&Ed(o,u),d=(e.ownerDocument||e).createElement("link"),it(d);var b=d;return b._p=new Promise(function(U,q){b.onload=U,b.onerror=q}),Rn(d,"link",o),n.state.loading|=4,yc(d,a.precedence,e),n.instance=d;case"script":return d=Ar(a.src),(u=e.querySelector(ko(d)))?(n.instance=u,it(u),u):(o=a,(u=vi.get(d))&&(o=g({},a),Td(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),it(u),Rn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,yc(o,a.precedence,e));return n.instance}function yc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,b=0;b<o.length;b++){var U=o[b];if(U.dataset.precedence===n)d=U;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Ed(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Td(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Mc=null;function i_(e,n,a){if(Mc===null){var o=new Map,u=Mc=new Map;u.set(a,o)}else u=Mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[ps]||d[cn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(n)||"";b=e+b;var U=o.get(b);U?U.push(d):o.set(b,[d])}}return o}function a_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function wy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function s_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Dy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Tr(o.href),d=n.querySelector(Vo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=bc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,it(d);return}d=n.ownerDocument||n,o=e_(o),(u=vi.get(u))&&Ed(o,u),d=d.createElement("link"),it(d);var b=d;b._p=new Promise(function(U,q){b.onload=U,b.onerror=q}),Rn(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=bc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ad=0;function Ny(e,n){return e.stylesheets&&e.count===0&&Tc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Tc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&Ad===0&&(Ad=62500*fy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Tc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Ad?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function bc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Tc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ec=null;function Tc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ec=new Map,n.forEach(Uy,e),Ec=null,bc.call(e))}function Uy(e,n){if(!(n.state.loading&4)){var a=Ec.get(e);if(a)var o=a.get(null);else{a=new Map,Ec.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var b=u[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),o=b)}o&&a.set(null,o)}u=n.instance,b=u.getAttribute("data-precedence"),d=a.get(b)||o,d===o&&a.set(null,u),a.set(b,u),this.count++,o=bc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var jo={$$typeof:w,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function Ly(e,n,a,o,u,d,b,U,q){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ne(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ne(0),this.hiddenUpdates=Ne(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=q,this.incompleteTransitions=new Map}function r_(e,n,a,o,u,d,b,U,q,ht,bt,Rt){return e=new Ly(e,n,a,b,q,ht,bt,Rt,U),n=1,d===!0&&(n|=24),d=ti(3,null,null,n),e.current=d,d.stateNode=e,n=sf(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},cf(d),e}function o_(e){return e?(e=ir,e):ir}function l_(e,n,a,o,u,d){u=o_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ba(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=za(e,o,n),a!==null&&(Zn(a,e,n),Mo(a,e,n))}function c_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Rd(e,n){c_(e,n),(e=e.alternate)&&c_(e,n)}function u_(e){if(e.tag===13||e.tag===31){var n=xs(e,67108864);n!==null&&Zn(n,e,67108864),Rd(e,67108864)}}function f_(e){if(e.tag===13||e.tag===31){var n=si();n=qs(n);var a=xs(e,n);a!==null&&Zn(a,e,n),Rd(e,n)}}var Ac=!0;function Oy(e,n,a,o){var u=N.T;N.T=null;var d=F.p;try{F.p=2,Cd(e,n,a,o)}finally{F.p=d,N.T=u}}function Py(e,n,a,o){var u=N.T;N.T=null;var d=F.p;try{F.p=8,Cd(e,n,a,o)}finally{F.p=d,N.T=u}}function Cd(e,n,a,o){if(Ac){var u=wd(o);if(u===null)pd(e,n,o,Rc,a),h_(e,o);else if(Iy(u,e,n,a,o))o.stopPropagation();else if(h_(e,o),n&4&&-1<Fy.indexOf(e)){for(;u!==null;){var d=Na(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=Nt(d.pendingLanes);if(b!==0){var U=d;for(U.pendingLanes|=2,U.entangledLanes|=2;b;){var q=1<<31-zt(b);U.entanglements[1]|=q,b&=~q}Hi(d),(Be&6)===0&&(cc=A()+500,Bo(0))}}break;case 31:case 13:U=xs(d,2),U!==null&&Zn(U,d,2),fc(),Rd(d,2)}if(d=wd(o),d===null&&pd(e,n,o,Rc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else pd(e,n,o,null,a)}}function wd(e){return e=Du(e),Dd(e)}var Rc=null;function Dd(e){if(Rc=null,e=Da(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Rc=e,null}function d_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case yt:return 2;case Et:return 8;case gt:case Vt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var Nd=!1,Ka=null,Qa=null,Ja=null,Xo=new Map,Wo=new Map,$a=[],Fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function h_(e,n){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(n.pointerId)}}function qo(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Na(n),n!==null&&u_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Iy(e,n,a,o,u){switch(n){case"focusin":return Ka=qo(Ka,e,n,a,o,u),!0;case"dragenter":return Qa=qo(Qa,e,n,a,o,u),!0;case"mouseover":return Ja=qo(Ja,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Xo.set(d,qo(Xo.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Wo.set(d,qo(Wo.get(d)||null,e,n,a,o,u)),!0}return!1}function p_(e){var n=Da(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Zs(e.priority,function(){f_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Zs(e.priority,function(){f_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=wd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);wu=o,a.target.dispatchEvent(o),wu=null}else return n=Na(a),n!==null&&u_(n),e.blockedOn=a,!1;n.shift()}return!0}function m_(e,n,a){Cc(e)&&a.delete(n)}function By(){Nd=!1,Ka!==null&&Cc(Ka)&&(Ka=null),Qa!==null&&Cc(Qa)&&(Qa=null),Ja!==null&&Cc(Ja)&&(Ja=null),Xo.forEach(m_),Wo.forEach(m_)}function wc(e,n){e.blockedOn===n&&(e.blockedOn=null,Nd||(Nd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,By)))}var Dc=null;function g_(e){Dc!==e&&(Dc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Dc===e&&(Dc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Dd(o||a)===null)continue;break}var d=Na(a);d!==null&&(e.splice(n,3),n-=3,wf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Rr(e){function n(q){return wc(q,e)}Ka!==null&&wc(Ka,e),Qa!==null&&wc(Qa,e),Ja!==null&&wc(Ja,e),Xo.forEach(n),Wo.forEach(n);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)p_(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],b=u[_n]||null;if(typeof d=="function")b||g_(a);else if(b){var U=null;if(d&&d.hasAttribute("formAction")){if(u=d,b=d[_n]||null)U=b.formAction;else if(Dd(u)!==null)continue}else U=b.action;typeof U=="function"?a[o+1]=U:(a.splice(o,3),o-=3),g_(a)}}}function __(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(b){return u=b})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ud(e){this._internalRoot=e}Nc.prototype.render=Ud.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();l_(a,o,e,n,null,null)},Nc.prototype.unmount=Ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;l_(e.current,2,null,e,null,null),fc(),n[$i]=null}};function Nc(e){this._internalRoot=e}Nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Fi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,e),a===0&&p_(e)}};var v_=t.version;if(v_!=="19.2.4")throw Error(s(527,v_,"19.2.4"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var zy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uc.isDisabled&&Uc.supportsFiber)try{Ct=Uc.inject(zy),wt=Uc}catch{}}return Zo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=T0,d=A0,b=R0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError)),n=r_(e,1,!1,null,null,a,o,null,u,d,b,__),e[$i]=n.current,hd(e),new Ud(n)},Zo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=T0,b=A0,U=R0,q=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(U=a.onRecoverableError),a.formState!==void 0&&(q=a.formState)),n=r_(e,1,!0,n,a??null,o,u,q,d,b,U,__),n.context=o_(null),a=n.current,o=si(),o=qs(o),u=Ba(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,In(n,a),Hi(n),e[$i]=n.current,hd(e),new Nc(n)},Zo.version="19.2.4",Zo}var C_;function Jy(){if(C_)return Pd.exports;C_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Pd.exports=Qy(),Pd.exports}var $y=Jy();const tM=Jv($y),Oe=16,Ze=250,Tu=["#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2","#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2"],eM=500,w_=1e3,nM=3e4,iM=2;function aM(r=4){const[t,i]=X.useState(!1),[s,l]=X.useState(0),[c,f]=X.useState(0),[p,m]=X.useState(null),[h,x]=X.useState(!1),[g,v]=X.useState(0),[y,M]=X.useState(null),C=X.useRef(null),_=X.useRef(null),S=X.useRef(null),T=X.useRef(null),w=X.useRef(0),D=X.useRef(0),G=X.useRef([]),P=X.useRef(!1),I=X.useRef(0),E=X.useRef(0),O=X.useRef(0),at=Ze*r;O.current=at,(!T.current||T.current[0].length!==at)&&(T.current=Array.from({length:Oe},()=>new Float32Array(at)),w.current=0,D.current=0),X.useEffect(()=>(h?(C.current=Date.now(),v(0),_.current&&clearInterval(_.current),_.current=setInterval(()=>{v(Math.floor((Date.now()-C.current)/1e3))},500)):(_.current&&clearInterval(_.current),C.current=null),()=>{_.current&&clearInterval(_.current)}),[h]);const H=X.useCallback($=>{P.current=$,$||(w.current=0,D.current=0)},[]),j=X.useCallback($=>{const N=S.current;N&&N.readyState===WebSocket.OPEN&&N.send(JSON.stringify($))},[]);X.useEffect(()=>{const $=location.hostname||"localhost",N=parseInt(location.port||"1617")-1,tt=`${location.protocol==="https:"?"wss":"ws"}://${$}:${N}`,ot="/auth/ws-token";async function xt(){try{const et=await fetch(ot,{credentials:"include"});return et.ok&&(await et.json()).token||null}catch{return null}}let B=w_;async function V(){const et=await xt(),K=et?`${tt}?token=${encodeURIComponent(et)}`:tt,ft=new WebSocket(K);S.current=ft,ft.onopen=()=>{i(!0),B=w_},ft.onclose=()=>{i(!1),m(null);const W=Math.random()*B*.3;setTimeout(V,B+W),B=Math.min(B*iM,nM)},ft.onerror=()=>ft.close(),ft.onmessage=W=>{const rt=JSON.parse(W.data);if("record_status"in rt){const Lt=rt.record_status;if(x(Lt.recording),Lt.stopped){const Xt=location.port||"1617";M({filename:Lt.stopped.filename,frames:Lt.stopped.frames,duration:Lt.stopped.duration,path:Lt.stopped.path,downloadUrl:`${location.protocol}//${location.hostname}:${Xt}/recordings/${Lt.stopped.filename}`})}}if("status"in rt||P.current)return;const _t=rt.channels;if(!_t||_t.length!==Oe)return;const J=T.current,At=O.current,Dt=w.current;for(let Lt=0;Lt<Oe;Lt++)J[Lt][Dt]=_t[Lt];w.current=(Dt+1)%At,D.current<At&&D.current++,I.current++;const Bt=rt.t;G.current.push(Bt);const Pt=performance.now();if(Pt-E.current>eM){E.current=Pt,l(I.current);const Lt=G.current,Xt=Bt-2;let Wt=0;for(;Wt<Lt.length&&Lt[Wt]<Xt;)Wt++;if(Wt>0&&Lt.splice(0,Wt),Lt.length>1){const k=Lt[Lt.length-1]-Lt[0];k>0&&f(Math.round((Lt.length-1)/k))}const se=Math.round((Date.now()/1e3-Bt)*1e3);se>=0&&se<1e4&&m(se)}}}return V(),()=>{const et=S.current;et&&et.close()}},[]);const Z=X.useCallback(()=>M(null),[]),Y=X.useMemo(()=>({buffers:T,writeIndex:w,samplesInBuffer:D,bufferSize:at,gridSuspended:!1}),[]);return Y.bufferSize=at,{connected:t,sampleCount:s,hz:c,latencyMs:p,recording:h,recordElapsed:g,recordResult:y,data:Y,dismissRecordResult:Z,setPaused:H,sendCommand:j}}function zd({children:r}){const[t,i]=X.useState("checking"),[s,l]=X.useState(""),[c,f]=X.useState("");X.useEffect(()=>{(async()=>{try{const h=await fetch("/auth/status",{credentials:"include"});if(!h.ok){i("login");return}const x=await h.json();i(x.authenticated?"ok":"login")}catch(h){console.error("Auth check error:",h),i("login")}})()},[]);async function p(m){m.preventDefault(),f("");try{const x=await(await fetch("/auth",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({code:s})})).json();x.ok?i("ok"):(f(x.error||"Invalid code"),l(""))}catch{f("Server unreachable")}}return t==="checking"?null:t==="ok"?R.jsx(R.Fragment,{children:r}):R.jsx("div",{className:"auth-overlay",children:R.jsxs("div",{className:"auth-card",children:[R.jsxs("h1",{children:["Pi",R.jsx("span",{children:"EEG"}),"-16"]}),R.jsx("p",{className:"auth-sub",children:"Enter the access code displayed in the server console"}),R.jsxs("form",{onSubmit:p,children:[R.jsx("input",{className:"auth-input",type:"text",maxLength:6,pattern:"[0-9]{6}",autoComplete:"off",autoFocus:!0,required:!0,placeholder:"------",value:s,onChange:m=>l(m.target.value.replace(/\D/g,""))}),R.jsx("br",{}),R.jsx("button",{className:"auth-btn",type:"submit",children:"Connect"}),c&&R.jsx("p",{className:"auth-error",children:c})]})]})})}const sM="rgba(48,54,61,0.4)",rM="rgba(88,166,255,0.15)",oM={high:1500,medium:800,low:400},D_=14,N_=20,U_=2;function lM(r,t,i,s,l,c,f,p,m,h){r.clearRect(0,0,t,i);const x=i/2,g=i/4;r.beginPath();for(let w=g;w<i;w+=g)r.moveTo(0,w),r.lineTo(t,w);if(r.strokeStyle=sM,r.lineWidth=.5,r.stroke(),r.beginPath(),r.moveTo(0,x),r.lineTo(t,x),r.strokeStyle=rM,r.lineWidth=1,r.stroke(),l<2)return;const v=oM[h]||1500,y=l>v?Math.floor(l/v):1,M=i/2,C=t/(f-1),_=M/p;if(h!=="low"){r.beginPath();let w=0;for(let D=0;D<l;D+=y){const G=(c-l+D+f)%f,P=D*C,I=x-s[G]*_;D===0?(r.moveTo(P,I),w=P):r.lineTo(P,I)}r.lineTo((l-1)*C,i),r.lineTo(w,i),r.closePath(),r.fillStyle=m+"10",r.fill()}r.strokeStyle=m,r.lineWidth=h==="low"?1:1.3,r.lineJoin="round",r.lineCap="round",r.beginPath();for(let w=0;w<l;w+=y){const D=(c-l+w+f)%f,G=w*C,P=x-s[D]*_;w===0?r.moveTo(G,P):r.lineTo(G,P)}r.stroke();let S=0;const T=Math.min(l,250);for(let w=l-T;w<l;w++){const D=(c-l+w+f)%f;S+=s[D]*s[D]}return Math.sqrt(S/T)}const cM=X.memo(function({chIdx:t,eegData:i,yRange:s,expanded:l,onToggleExpand:c,active:f=!0}){const p=X.useRef(null),m=X.useRef(0),h=X.useRef(0),x=X.useRef(null),g=X.useRef(null),v=X.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),y=X.useRef(!0),M=X.useRef("high"),C=X.useRef([]),_=X.useRef(-1),S=X.useRef(0),T=X.useRef(0);return X.useEffect(()=>{if(!f)return;const w=p.current;if(!w)return;const D=new ResizeObserver(G=>{const P=G[0];if(!P)return;const I=window.devicePixelRatio||1,{width:E,height:O}=P.contentRect,at=l?Math.min(I,2):1;v.current={w:E,h:O,pw:Math.round(E*at),ph:Math.round(O*at),dpr:at},y.current=!0});return D.observe(w),()=>D.disconnect()},[f,l]),X.useEffect(()=>{if(!f)return;const w=p.current;if(!w)return;const D=w.getContext("2d",{alpha:!1});_.current=-1,T.current=0;const G=t%U_,P=()=>{T.current++;const{w:I,h:E,pw:O,ph:at,dpr:H}=v.current;if(I===0||E===0){m.current=requestAnimationFrame(P);return}if(!l&&i.gridSuspended){m.current=requestAnimationFrame(P);return}if(!l&&T.current%U_!==G){m.current=requestAnimationFrame(P);return}const j=i.writeIndex.current;if(j===_.current){m.current=requestAnimationFrame(P);return}_.current=j;const Z=performance.now();y.current&&(y.current=!1,w.width=O,w.height=at,D.setTransform(H,0,0,H,0,0)),D.fillStyle="#0d1117",D.fillRect(0,0,I,E);const Y=lM(D,I,E,i.buffers.current[t],i.samplesInBuffer.current,j,i.bufferSize,s,Tu[t],M.current);if(S.current++,Y!==void 0&&(S.current&1)===0){h.current=Y;const F=Y/s;if(x.current&&(x.current.style.borderLeftColor=F>.8?"#f85149":F>.4?"#d29922":"#3fb950"),g.current){const tt=F>.8?"#f85149":F>.4?"#d29922":"#3fb950",ot=F>.8?"HIGH":F>.4?"MED":"OK",xt=Y<.5;g.current.style.color=xt?"#8b949e":tt,g.current.textContent=xt?"FLAT":ot}}const $=performance.now()-Z,N=C.current;if(N.push($),N.length>N_&&N.shift(),N.length===N_){let F=0;for(let ot=0;ot<N.length;ot++)F+=N[ot];const tt=F/N.length;tt>D_&&M.current!=="low"?M.current=M.current==="high"?"medium":"low":tt<D_*.4&&M.current!=="high"&&(M.current=M.current==="low"?"medium":"high")}m.current=requestAnimationFrame(P)};return m.current=requestAnimationFrame(P),()=>cancelAnimationFrame(m.current)},[t,i,s,f]),f?R.jsxs("div",{className:`channel-cell${l?" expanded":""}`,onClick:c,children:[R.jsxs("div",{className:"channel-label",ref:x,children:["Ch ",t+1,R.jsx("span",{className:"signal-quality",ref:g,children:"OK"})]}),R.jsx("canvas",{ref:p,style:{display:"block",width:"100%",height:"100%"}})]}):R.jsxs("div",{className:`channel-cell inactive${l?" expanded":""}`,onClick:c,children:[R.jsxs("div",{className:"channel-label",children:["Ch ",t+1]}),R.jsx("div",{className:"channel-off",children:"OFF"})]})}),{PI:uM,cos:L_,sin:fM}=Math,O_=2*uM,nn=[{name:"Delta",label:"δ Delta",low:.5,high:4,color:"#8b5cf6"},{name:"Theta",label:"θ Theta",low:4,high:8,color:"#06b6d4"},{name:"Alpha",label:"α Alpha",low:8,high:13,color:"#22c55e"},{name:"Beta",label:"β Beta",low:13,high:30,color:"#f59e0b"},{name:"Gamma",label:"γ Gamma",low:30,high:100,color:"#ef4444"}];class ds{constructor(t,i){wi(this,"n");wi(this,"sampleRateHz");wi(this,"_window");wi(this,"_frequencies");wi(this,"_df");wi(this,"_bitReversed");wi(this,"_twRe");wi(this,"_twIm");wi(this,"_norm");if(t<=0||(t&t-1)!==0)throw new Error("n must be a power of 2");this.n=t,this.sampleRateHz=i,this._precompute()}_precompute(){const{n:t,sampleRateHz:i}=this;this._window=new Float64Array(t);for(let p=0;p<t;p++)this._window[p]=.5*(1-L_(O_*p/(t-1)));const s=(t>>1)+1;this._frequencies=new Float64Array(s),this._df=i/t;for(let p=0;p<s;p++)this._frequencies[p]=p*this._df;const l=ds._log2(t);this._bitReversed=new Int32Array(t);for(let p=0;p<t;p++)this._bitReversed[p]=ds._reverseBits(p,l);const c=t>>1;this._twRe=new Float64Array(c),this._twIm=new Float64Array(c);for(let p=0;p<c;p++){const m=-O_*p/t;this._twRe[p]=L_(m),this._twIm[p]=fM(m)}let f=0;for(let p=0;p<t;p++)f+=this._window[p]*this._window[p];this._norm=2/(i*f)}analyse(t,i){const{n:s,_window:l,_frequencies:c,_df:f,_norm:p}=this;if(i===void 0&&(i=t.length-s),i<0||t.length-i<s)return null;const m=new Float64Array(s),h=new Float64Array(s);for(let _=0;_<s;_++)m[_]=t[i+_]*l[_];this._fft(m,h);const x=(s>>1)+1,g=new Float64Array(x);let v=0,y=0,M=0;for(let _=0;_<x;_++){const S=m[_]*m[_]+h[_]*h[_],T=_===0||_===x-1?.5:1;g[_]=S*p*T,y+=g[_]*f,g[_]>v&&(v=g[_],M=_)}const C={};for(const _ of nn){let S=0;for(let T=0;T<x;T++)c[T]>=_.low&&c[T]<_.high&&(S+=g[T]*f);C[_.name]=S}return{frequencies:c,psd:g,bandPowers:C,dominantFrequency:c[M],totalPower:y}}analyseRing(t,i,s){const{n:l}=this;if(s<l)return null;const c=t.length,f=new Float64Array(l),p=(i-l+c)%c;for(let m=0;m<l;m++)f[m]=t[(p+m)%c];return this.analyse(f,0)}_fft(t,i){const{n:s,_bitReversed:l,_twRe:c,_twIm:f}=this;for(let p=0;p<s;p++){const m=l[p];if(m>p){let h=t[p];t[p]=t[m],t[m]=h,h=i[p],i[p]=i[m],i[m]=h}}for(let p=2;p<=s;p*=2){const m=p>>1,h=s/p;for(let x=0;x<s;x+=p)for(let g=0;g<m;g++){const v=g*h,y=c[v],M=f[v],C=x+g,_=C+m,S=y*t[_]-M*i[_],T=y*i[_]+M*t[_];t[_]=t[C]-S,i[_]=i[C]-T,t[C]+=S,i[C]+=T}}}static _log2(t){let i=0,s=t;for(;s>1;)s>>=1,i++;return i}static _reverseBits(t,i){let s=0,l=t;for(let c=0;c<i;c++)s=s<<1|l&1,l>>=1;return s}}const Ko=256,P_=8,F_=.25,Hd=15,dM=60,Di=40;function hM(r,t,i,s,l,c,f,p,m){r.clearRect(0,0,t,i);const h={l:52,r:12,t:8,b:28},x=t-h.l-h.r,g=i-h.t-h.b,v=h.t+g/2;r.fillStyle="#0d1117",r.fillRect(0,0,t,i),r.strokeStyle="rgba(48,54,61,0.5)",r.lineWidth=.5;const y=[-p,-p/2,0,p/2,p];r.font="9px monospace",r.fillStyle="#8b949e",r.textAlign="right";for(const N of y){const F=v-N/p*(g/2);r.beginPath(),r.moveTo(h.l,F),r.lineTo(t-h.r,F),r.stroke(),r.fillText(`${N>0?"+":""}${N}`,h.l-6,F+3)}r.textAlign="center",r.fillStyle="#8b949e";const M=f/Ze;for(let N=0;N<=M;N+=1){const F=h.l+N/M*x;r.beginPath(),r.moveTo(F,h.t),r.lineTo(F,h.t+g),r.strokeStyle="rgba(48,54,61,0.3)",r.stroke(),r.fillText(`${N}s`,F,i-6)}if(r.beginPath(),r.moveTo(h.l,v),r.lineTo(t-h.r,v),r.strokeStyle="rgba(88,166,255,0.2)",r.lineWidth=1,r.stroke(),l<2)return{};const C=g/2,_=x/(f-1),S=C/p;r.beginPath();let T=h.l;for(let N=0;N<l;N++){const F=(c-l+N+f)%f,tt=h.l+N*_,ot=v-s[F]*S;N===0?(r.moveTo(tt,ot),T=tt):r.lineTo(tt,ot)}r.lineTo(h.l+(l-1)*_,v+C),r.lineTo(T,v+C),r.closePath(),r.fillStyle=m+"0a",r.fill(),r.strokeStyle=m,r.lineWidth=1.5,r.lineJoin="round",r.lineCap="round",r.beginPath();for(let N=0;N<l;N++){const F=(c-l+N+f)%f,tt=h.l+N*_,ot=v-s[F]*S;N===0?r.moveTo(tt,ot):r.lineTo(tt,ot)}r.stroke();const w=h.l+(l-1)*_;r.beginPath(),r.moveTo(w,h.t),r.lineTo(w,h.t+g),r.strokeStyle=m+"40",r.lineWidth=1,r.setLineDash([3,3]),r.stroke(),r.setLineDash([]);const D=(c-1+f)%f,G=s[D];r.fillStyle=m,r.font="bold 11px monospace",r.textAlign="left",r.fillText(`${G.toFixed(1)} µV`,w+6,h.t+14),r.save(),r.translate(12,v),r.rotate(-Math.PI/2),r.textAlign="center",r.fillStyle="#8b949e",r.font="9px monospace",r.fillText("µV",0,0),r.restore();let P=0,I=0,E=1/0,O=-1/0,at=0,H=null;const j=Math.min(l,Ze*2);for(let N=l-j;N<l;N++){const F=(c-l+N+f)%f,tt=s[F];P+=tt,I+=tt*tt,tt<E&&(E=tt),tt>O&&(O=tt),H!==null&&(H>=0&&tt<0||H<0&&tt>=0)&&at++,H=tt}const Z=P/j,Y=Math.sqrt(I/j),$=O-E;return{mean:Z,rms:Y,pp:$,min:E,max:O,zeroCross:at,latestVal:G,statCount:j}}function pM(r,t,i,s,l,c,f,p){r.fillStyle="#0d1117",r.fillRect(0,0,t,i);const m={l:44,r:10,t:20,b:24},h=t-m.l-m.r,x=i-m.t-m.b,g=l[1],v=Math.min(Math.ceil(c/g),s.length-1);let y=1e-30;for(let M=1;M<=v;M++)s[M]>y&&(y=s[M]);for(const M of nn){if(M.low>=c)continue;const C=m.l+Math.max(M.low,0)/c*h,_=m.l+Math.min(M.high,c)/c*h,S=p===M.name;r.fillStyle=M.color+(S?"20":"0a"),r.fillRect(C,m.t,_-C,x),r.fillStyle=M.color+(S?"bb":"55"),r.font="8px monospace",r.textAlign="center",r.fillText(M.label.split(" ")[0],(C+_)/2,m.t+10)}r.strokeStyle="rgba(48,54,61,0.45)",r.lineWidth=.5;for(let M=1;M<4;M++){const C=m.t+M/4*x;r.beginPath(),r.moveTo(m.l,C),r.lineTo(m.l+h,C),r.stroke()}r.beginPath();for(let M=1;M<=v;M++){const C=m.l+l[M]/c*h,_=10*Math.log10((s[M]||1e-30)/y),S=Math.max(0,(_+60)/60),T=m.t+x-Math.min(1,S)*x;M===1?r.moveTo(C,T):r.lineTo(C,T)}r.strokeStyle="#58a6ff",r.lineWidth=1.5,r.stroke(),r.lineTo(m.l+l[v]/c*h,m.t+x),r.lineTo(m.l+l[1]/c*h,m.t+x),r.closePath(),r.fillStyle="rgba(88,166,255,0.08)",r.fill(),r.fillStyle="#8b949e",r.font="9px monospace",r.textAlign="center";for(let M=0;M<=c;M+=10)r.fillText(`${M}`,m.l+M/c*h,i-6);r.fillText("Hz",m.l+h+2,i-6),r.save(),r.translate(10,m.t+x/2),r.rotate(-Math.PI/2),r.textAlign="center",r.fillStyle="#8b949e",r.font="8px monospace",r.fillText("dB",0,0),r.restore(),r.textAlign="right",r.font="8px monospace",r.fillStyle="#6e7681";for(const M of[0,-20,-40,-60]){const C=m.t+x-(M+60)/60*x;r.fillText(`${M}`,m.l-4,C+3)}}function mM(r,t,i,s){r.fillStyle="#0d1117",r.fillRect(0,0,t,i);const l={l:10,r:10,t:6,b:4},c=Math.min(16,(i-l.t-l.b-(nn.length-1)*4)/nn.length),f=Math.max(...nn.map(m=>s[m.name]||0),1e-6),p=nn.reduce((m,h)=>m+(s[h.name]||0),0)||1e-6;nn.forEach((m,h)=>{const x=s[m.name]||0,g=x/f,v=(x/p*100).toFixed(1),y=l.t+h*(c+4),M=t-l.l-l.r-82;r.fillStyle=m.color,r.font="bold 9px monospace",r.textAlign="left",r.fillText(m.label.charAt(0),l.l,y+c-3);const C=l.l+14;r.fillStyle="rgba(48,54,61,0.5)",r.beginPath(),r.roundRect(C,y,M,c,3),r.fill(),g>0&&(r.fillStyle=m.color+"cc",r.beginPath(),r.roundRect(C,y,Math.max(4,M*g),c,3),r.fill()),r.fillStyle="#e6edf3",r.font="9px monospace",r.textAlign="right",r.fillText(`${v}%`,t-l.r,y+c-3)})}function gM(r,t,i,s,l,c,f,p){if(r.fillStyle="#0d1117",r.fillRect(0,0,t,i),l<10)return;const m={l:8,r:8,t:6,b:20},h=t-m.l-m.r,x=i-m.t-m.b,g=new Float32Array(Di),v=2*p/Di,y=Math.min(l,Ze*2);for(let _=l-y;_<l;_++){const S=(c-l+_+f)%f,T=s[S],w=Math.floor((T+p)/v);w>=0&&w<Di&&g[w]++}let M=0;for(let _=0;_<Di;_++)g[_]>M&&(M=g[_]);if(M===0)return;const C=h/Di;for(let _=0;_<Di;_++){const S=g[_]/M*x,T=m.l+_*C,w=m.t+x-S,D=Math.abs(_-Di/2)/(Di/2),G=Math.floor(88+D*160),P=Math.floor(166-D*120),I=Math.floor(255-D*200);r.fillStyle=`rgba(${G},${P},${I},0.6)`,r.fillRect(T+.5,w,C-1,S)}r.fillStyle="#6e7681",r.font="8px monospace",r.textAlign="center",r.fillText(`-${p}`,m.l+C,i-4),r.fillText("0",m.l+h/2,i-4),r.fillText(`+${p}`,t-m.r-C,i-4),r.strokeStyle="rgba(88,166,255,0.3)",r.lineWidth=1,r.beginPath();for(let _=0;_<Di;_++){const S=m.l+(_+.5)*C,T=(_-Di/2)/(Di/4),w=Math.exp(-.5*T*T),D=m.t+x-w*x*.85;_===0?r.moveTo(S,D):r.lineTo(S,D)}r.stroke()}const _M=X.memo(function({chIdx:t,eegData:i,yRange:s,onClose:l}){var H;const c=X.useRef(null),f=X.useRef(null),p=X.useRef(null),m=X.useRef(null),h=X.useRef(0),x=X.useRef(0),g=X.useRef(null),[v,y]=X.useState(null),[M,C]=X.useState({}),[_,S]=X.useState({band:"",freq:0}),[T,w]=X.useState(null),D=X.useMemo(()=>new ds(Ko,Ze),[]),G=Tu[t],P=X.useRef({trace:{w:0,h:0,pw:0,ph:0,dpr:1},spectrum:{w:0,h:0,pw:0,ph:0,dpr:1},band:{w:0,h:0,pw:0,ph:0,dpr:1},hist:{w:0,h:0,pw:0,ph:0,dpr:1}}),I=X.useRef({trace:!0,spectrum:!0,band:!0,hist:!0});X.useEffect(()=>{const j={trace:c.current,spectrum:f.current,band:p.current,hist:m.current},Z={},Y=[];for(const[ot,xt]of Object.entries(j)){if(!xt)continue;Z[ot]=xt.getContext("2d",{alpha:!1});const B=new ResizeObserver(V=>{const et=V[0];if(!et)return;const K=Math.min(window.devicePixelRatio||1,2),{width:ft,height:W}=et.contentRect,rt=Math.round(ft*K),_t=Math.round(W*K);P.current[ot]={w:ft,h:W,pw:rt,ph:_t,dpr:K},I.current[ot]=!0});B.observe(xt),Y.push(B)}let $=null,N={},F={band:"",freq:0};const tt=()=>{x.current++;for(const[et,K]of Object.entries(j)){if(!K||!I.current[et])continue;const{pw:ft,ph:W,dpr:rt}=P.current[et];ft===0||W===0||(K.width=ft,K.height=W,Z[et].setTransform(rt,0,0,rt,0,0),I.current[et]=!1)}const ot=i.buffers.current,xt=i.writeIndex.current,B=i.samplesInBuffer.current,V=i.bufferSize;if(Z.trace){const{w:et,h:K}=P.current.trace;if(et>0&&K>0){const ft=hM(Z.trace,et,K,ot[t],B,xt,V,s,G);ft.rms!==void 0&&x.current%Hd===0&&($=ft)}}if(x.current%P_===0&&B>=Ko){const et=D.analyseRing(ot[t],xt,B);if(et){if(!g.current||g.current.length!==et.psd.length)g.current=new Float64Array(et.psd);else{const W=g.current,rt=et.psd;for(let _t=0;_t<W.length;_t++)W[_t]=W[_t]*(1-F_)+rt[_t]*F_}N=et.bandPowers;let K="",ft=0;for(const W of nn)(et.bandPowers[W.name]||0)>ft&&(ft=et.bandPowers[W.name],K=W.name);F={band:K,freq:et.dominantFrequency}}}if(Z.spectrum&&g.current){const{w:et,h:K}=P.current.spectrum;et>0&&K>0&&pM(Z.spectrum,et,K,g.current,D._frequencies,dM,N,T)}if(Z.band&&x.current%P_===0){const{w:et,h:K}=P.current.band;et>0&&K>0&&mM(Z.band,et,K,N)}if(Z.hist&&x.current%Hd===0){const{w:et,h:K}=P.current.hist;et>0&&K>0&&gM(Z.hist,et,K,ot[t],B,xt,V,s)}x.current%Hd===0&&($&&y($),N&&C(N),S(et=>et.band===F.band&&et.freq===F.freq?et:F)),h.current=requestAnimationFrame(tt)};return h.current=requestAnimationFrame(tt),()=>{cancelAnimationFrame(h.current),Y.forEach(ot=>ot.disconnect())}},[t,i,s,G,D,T]);const E=nn.find(j=>j.name===_.band),O=(E==null?void 0:E.color)||"#8b949e",at=nn.reduce((j,Z)=>j+(M[Z.name]||0),0);return R.jsx("div",{className:"detail-overlay",onClick:l,children:R.jsxs("div",{className:"detail-panel",onClick:j=>j.stopPropagation(),children:[R.jsxs("div",{className:"detail-header",children:[R.jsxs("div",{className:"detail-title-group",children:[R.jsxs("span",{className:"detail-ch-badge",style:{borderColor:G,color:G},children:["Ch ",t+1]}),R.jsx("span",{className:"detail-title",children:"Channel Analysis"}),R.jsx("span",{className:"detail-subtitle",children:"Real-time single-channel deep inspection"})]}),R.jsxs("div",{className:"detail-header-stats",children:[_.band&&R.jsxs("span",{className:"detail-dominant",style:{color:O},children:[R.jsx("span",{className:"detail-dominant-label",children:"Dominant"}),R.jsx("span",{className:"detail-dominant-band",children:(E==null?void 0:E.label)||_.band}),R.jsxs("span",{className:"detail-dominant-freq",children:[_.freq.toFixed(1)," Hz"]})]}),v&&R.jsxs("span",{className:"detail-rms-badge",children:["RMS ",(H=v.rms)==null?void 0:H.toFixed(1)," µV"]})]}),R.jsx("button",{className:"detail-close",onClick:l,children:R.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:R.jsx("path",{d:"M4 4L14 14M14 4L4 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]}),R.jsxs("div",{className:"detail-body",children:[R.jsxs("div",{className:"detail-trace-section",children:[R.jsxs("div",{className:"detail-section-head",children:[R.jsx("span",{className:"detail-section-title",children:"Time Domain"}),R.jsxs("span",{className:"detail-section-meta",children:[Ze," Hz · ±",s," µV"]})]}),R.jsx("div",{className:"detail-trace-canvas-wrap",children:R.jsx("canvas",{ref:c,style:{display:"block",width:"100%",height:"100%"}})})]}),R.jsxs("div",{className:"detail-analysis",children:[R.jsxs("div",{className:"detail-card",children:[R.jsxs("div",{className:"detail-card-head",children:[R.jsx("span",{className:"detail-card-title",children:"Power Spectrum"}),R.jsxs("span",{className:"detail-card-meta",children:[Ko,"pt FFT · ",(Ze/Ko).toFixed(1)," Hz/bin"]})]}),R.jsx("div",{className:"detail-card-canvas",children:R.jsx("canvas",{ref:f,style:{display:"block",width:"100%",height:"100%"}})})]}),R.jsxs("div",{className:"detail-card",children:[R.jsxs("div",{className:"detail-card-head",children:[R.jsx("span",{className:"detail-card-title",children:"Band Power Distribution"}),R.jsx("span",{className:"detail-card-meta",children:at>0?`${at.toFixed(2)} µV²/Hz total`:"—"})]}),R.jsx("div",{className:"detail-card-canvas detail-card-canvas-sm",children:R.jsx("canvas",{ref:p,style:{display:"block",width:"100%",height:"100%"}})}),R.jsx("div",{className:"detail-band-legend",children:nn.map(j=>R.jsxs("button",{className:`detail-band-btn${T===j.name?" active":""}`,style:{"--band-color":j.color},onClick:()=>w(Z=>Z===j.name?null:j.name),children:[R.jsx("span",{className:"detail-band-dot"}),j.label.split(" ")[0]]},j.name))})]}),R.jsxs("div",{className:"detail-bottom-row",children:[R.jsxs("div",{className:"detail-card detail-card-half",children:[R.jsx("div",{className:"detail-card-head",children:R.jsx("span",{className:"detail-card-title",children:"Amplitude Distribution"})}),R.jsx("div",{className:"detail-card-canvas detail-card-canvas-sm",children:R.jsx("canvas",{ref:m,style:{display:"block",width:"100%",height:"100%"}})})]}),R.jsxs("div",{className:"detail-card detail-card-half detail-stats-card",children:[R.jsx("div",{className:"detail-card-head",children:R.jsx("span",{className:"detail-card-title",children:"Signal Metrics"})}),R.jsxs("div",{className:"detail-stats-grid",children:[R.jsx(Us,{label:"RMS",value:v==null?void 0:v.rms,unit:"µV",precision:2}),R.jsx(Us,{label:"Peak-Peak",value:v==null?void 0:v.pp,unit:"µV",precision:1}),R.jsx(Us,{label:"Mean",value:v==null?void 0:v.mean,unit:"µV",precision:2}),R.jsx(Us,{label:"Min",value:v==null?void 0:v.min,unit:"µV",precision:1}),R.jsx(Us,{label:"Max",value:v==null?void 0:v.max,unit:"µV",precision:1}),R.jsx(Us,{label:"Zero-X",value:v==null?void 0:v.zeroCross,unit:"/2s",precision:0}),R.jsx(Us,{label:"Live",value:v==null?void 0:v.latestVal,unit:"µV",precision:1,highlight:!0})]})]})]})]})]}),R.jsxs("div",{className:"detail-footer",children:[R.jsxs("span",{children:[Ko,"-pt Hanning · Cooley-Tukey radix-2"]}),R.jsxs("span",{className:"detail-footer-keys",children:[R.jsx("kbd",{children:"Esc"})," Close"]}),R.jsx("span",{children:"Not a medical device"})]})]})})});function Us({label:r,value:t,unit:i,precision:s=2,highlight:l}){const c=t!=null?s===0?String(Math.round(t)):t.toFixed(s):"—";return R.jsxs("div",{className:`detail-stat-row${l?" highlight":""}`,children:[R.jsx("span",{className:"detail-stat-label",children:r}),R.jsx("span",{className:"detail-stat-value",children:c}),R.jsx("span",{className:"detail-stat-unit",children:i})]})}const Qo=256,vM=60,xM=12,I_=.3,SM=350;function yM(r,t,i,s,l,c,f,p){const h=t-16,x=24,g=i-24,v=h-48,y=g-x,M=l[1],C=Math.min(Math.ceil(c/M),s.length-1);let _=1e-30;for(let S=1;S<=C;S++)s[S]>_&&(_=s[S]);for(const S of nn){if(S.low>=c)continue;const T=48+Math.max(S.low,0)/c*v,w=48+Math.min(S.high,c)/c*v,D=p===S.name;r.fillStyle=S.color+(D?"28":"12"),r.fillRect(T,x,w-T,y),r.fillStyle=S.color+(D?"cc":"66"),r.font="9px monospace",r.textAlign="center",r.fillText(S.name,(T+w)/2,x+10)}r.strokeStyle="rgba(48,54,61,0.45)",r.lineWidth=.5;for(let S=1;S<5;S++){const T=x+S/5*y;r.beginPath(),r.moveTo(48,T),r.lineTo(h,T),r.stroke()}for(const S of[4,8,13,30,50]){if(S>c)continue;const T=48+S/c*v;r.beginPath(),r.moveTo(T,x),r.lineTo(T,g),r.stroke()}r.beginPath();for(let S=1;S<=C;S++){const T=48+l[S]/c*v;let w;if(f){const G=10*Math.log10((s[S]||1e-30)/_);w=Math.max(0,(G+60)/60)}else w=s[S]/_;const D=g-Math.min(1,w)*y;S===1?r.moveTo(T,D):r.lineTo(T,D)}r.strokeStyle="#58a6ff",r.lineWidth=1.5,r.stroke(),r.lineTo(48+l[C]/c*v,g),r.lineTo(48+l[1]/c*v,g),r.closePath(),r.fillStyle="rgba(88,166,255,0.07)",r.fill(),r.fillStyle="#8b949e",r.font="10px monospace",r.textAlign="center";for(let S=0;S<=c;S+=10)r.fillText(`${S}`,48+S/c*v,g+14);if(r.fillText("Hz",h+2,g+14),r.save(),r.translate(11,x+y/2),r.rotate(-Math.PI/2),r.textAlign="center",r.fillText(f?"dB":"µV²/Hz",0,0),r.restore(),r.textAlign="right",r.font="9px monospace",f)for(const S of[0,-20,-40,-60]){const T=g-(S+60)/60*y;r.fillText(`${S}`,44,T+3)}}const MM=X.memo(function({eegData:t}){var j;const i=X.useRef(null),s=X.useRef(0),l=X.useRef(0),c=X.useRef(null),f=X.useRef(0),p=X.useRef(null),m=X.useRef({}),h=X.useRef(window.devicePixelRatio||1),x=X.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),g=X.useRef(!0),[v,y]=X.useState(-1),[M,C]=X.useState(!0),[_,S]=X.useState(!1),[T,w]=X.useState(null),[D,G]=X.useState({}),[P,I]=X.useState({band:"",freq:0}),E=X.useMemo(()=>new ds(Qo,Ze),[]);p.current||(p.current=new Float64Array(Qo)),X.useEffect(()=>{const Z=i.current;if(!Z)return;const Y=Z.getContext("2d",{alpha:!1}),$=new ResizeObserver(F=>{const tt=F[0];if(!tt)return;const ot=window.devicePixelRatio||1;h.current=ot;const{width:xt,height:B}=tt.contentRect;x.current={w:xt,h:B,pw:Math.round(xt*ot),ph:Math.round(B*ot),dpr:ot},g.current=!0});$.observe(Z);const N=()=>{const{w:F,h:tt,pw:ot,ph:xt}=x.current;if(F===0||tt===0){s.current=requestAnimationFrame(N);return}if(g.current&&(g.current=!1,Z.width=ot,Z.height=xt),Y.setTransform(h.current,0,0,h.current,0,0),Y.fillStyle="#0d1117",Y.fillRect(0,0,F,tt),l.current++,!_&&l.current%xM===0){const V=t.buffers.current,et=t.writeIndex.current,K=t.samplesInBuffer.current;if(V&&K>=Qo){let ft;if(v===-1){const W=p.current,rt=t.bufferSize,_t=(et-Qo+rt)%rt;for(let J=0;J<Qo;J++){let At=0;const Dt=(_t+J)%rt;for(let Bt=0;Bt<Oe;Bt++)At+=V[Bt][Dt];W[J]=At/Oe}ft=E.analyse(W,0)}else ft=E.analyseRing(V[v],et,K);if(ft){if(!c.current||c.current.length!==ft.psd.length)c.current=new Float64Array(ft.psd);else{const rt=c.current,_t=ft.psd;for(let J=0;J<rt.length;J++)rt[J]=rt[J]*(1-I_)+_t[J]*I_}const W=performance.now();if(W-f.current>SM){f.current=W,m.current=ft.bandPowers,G(ft.bandPowers);let rt="",_t=0;for(const J of nn)(ft.bandPowers[J.name]||0)>_t&&(_t=ft.bandPowers[J.name],rt=J.name);I(J=>J.band===rt&&J.freq===ft.dominantFrequency?J:{band:rt,freq:ft.dominantFrequency})}}}}const B=c.current;!B||B.length===0?(Y.fillStyle="#4b5563",Y.font="13px monospace",Y.textAlign="center",Y.fillText("Collecting samples…",F/2,tt/2)):yM(Y,F,tt,B,E._frequencies,vM,M,T),s.current=requestAnimationFrame(N)};return s.current=requestAnimationFrame(N),()=>{cancelAnimationFrame(s.current),$.disconnect()}},[t,v,M,_,T,E]);const O=Math.max(...nn.map(Z=>D[Z.name]||0),1e-6),at=v===-1?"Avg":`Ch ${v+1}`,H=((j=nn.find(Z=>Z.name===P.band))==null?void 0:j.color)||"#8b949e";return R.jsxs("div",{className:"spectral-panel",children:[R.jsxs("div",{className:"spectral-toolbar",children:[R.jsxs("span",{className:"spectral-title",children:["Spectral"," ",R.jsx("small",{style:{color:"var(--text-dim)",fontWeight:400},children:at})]}),R.jsxs("div",{className:"spectral-channels",children:[R.jsx("button",{className:`sp-ch${v===-1?" active":""}`,onClick:()=>y(-1),children:"Avg"}),Array.from({length:Oe},(Z,Y)=>R.jsx("button",{className:`sp-ch${v===Y?" active":""}`,onClick:()=>y(Y),children:Y+1},Y))]}),R.jsxs("span",{className:"sp-dominant",children:[R.jsx("strong",{style:{color:H},children:P.band||"—"})," ",P.freq>0&&R.jsxs("small",{children:[P.freq.toFixed(1)," Hz"]})]}),R.jsxs("div",{className:"spectral-ctrls",children:[R.jsx("button",{className:`btn${M?" active":""}`,onClick:()=>C(Z=>!Z),children:M?"Log":"Lin"}),R.jsx("button",{className:`btn${_?" active":""}`,onClick:()=>S(Z=>!Z),children:_?"▶":"⏸"})]})]}),R.jsxs("div",{className:"spectral-canvas-wrap",children:[R.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}}),_&&R.jsx("div",{className:"spectral-paused",children:"PAUSED"})]}),R.jsx("div",{className:"spectral-bands",children:nn.map(Z=>{const Y=D[Z.name]||0,$=O>0?Y/O*100:0,N=T===Z.name;return R.jsxs("div",{className:`sp-band${N?" selected":""}`,onClick:()=>w(N?null:Z.name),children:[R.jsx("span",{className:"sp-band-dot",style:{background:Z.color}}),R.jsx("span",{className:"sp-band-name",style:{color:Z.color},children:Z.label}),R.jsx("div",{className:"sp-band-track",children:R.jsx("div",{className:"sp-band-fill",style:{width:`${$}%`,background:Z.color}})}),R.jsx("span",{className:"sp-band-val",children:Y<.01?Y.toExponential(1):Y.toFixed(2)})]},Z.name)})})]})}),bM=X.memo(function(){const[t,i]=X.useState(!1),[s,l]=X.useState(0),[c,f]=X.useState(0),[p,m]=X.useState(0),h=X.useRef(0),x=X.useRef(performance.now()),g=X.useRef(0);return X.useEffect(()=>{const v=y=>{(y.key==="p"||y.key==="P")&&i(M=>!M)};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[]),X.useEffect(()=>{if(!t)return;const v=()=>{h.current++;const y=performance.now(),M=y-x.current;if(M>=1e3){l(Math.round(h.current*(1e3/M))),f(Math.round(M/h.current*100)/100);const C=performance.memory;C&&m(Math.round(C.usedJSHeapSize/1048576)),h.current=0,x.current=y}g.current=requestAnimationFrame(v)};return g.current=requestAnimationFrame(v),()=>cancelAnimationFrame(g.current)},[t]),t?R.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.8)",color:"#0f0",fontFamily:"monospace",fontSize:"12px",padding:"8px 12px",borderRadius:"4px",zIndex:1e4,border:"1px solid #0f0",userSelect:"none"},children:[R.jsxs("div",{children:["FPS: ",s]}),R.jsxs("div",{children:["Frame: ",c,"ms"]}),R.jsxs("div",{children:["Memory: ",p,"MB"]}),R.jsx("div",{style:{marginTop:"4px",fontSize:"10px",opacity:.7},children:"Press P to toggle"})]}):null});function EM({onSelect:r,onBack:t}){const[i,s]=X.useState([]),[l,c]=X.useState(!0);X.useEffect(()=>{f()},[]);async function f(){try{const x=await(await fetch("/api/recordings")).json();s(x.recordings||[])}catch(h){console.error("Failed to load recordings:",h)}finally{c(!1)}}function p(h){return new Date(h*1e3).toLocaleString()}function m(h){return h<1024?`${h} B`:h<1024*1024?`${(h/1024).toFixed(1)} KB`:`${(h/1024/1024).toFixed(1)} MB`}return R.jsxs("div",{className:"session-list",children:[R.jsxs("header",{className:"session-header",children:[R.jsx("h2",{children:"Saved Sessions"}),R.jsx("button",{className:"btn btn-back",onClick:t,children:"← Back to Live"})]}),l&&R.jsx("div",{className:"list-loading",children:R.jsx("p",{children:"Loading recordings..."})}),!l&&i.length===0&&R.jsx("div",{className:"list-empty",children:R.jsx("p",{children:"No recordings yet. Record a session on the Live tab."})}),!l&&i.length>0&&R.jsx("div",{className:"list-container",children:R.jsxs("table",{className:"recordings-table",children:[R.jsx("thead",{children:R.jsxs("tr",{children:[R.jsx("th",{children:"Filename"}),R.jsx("th",{children:"Size"}),R.jsx("th",{children:"Date & Time"}),R.jsx("th",{children:"Action"})]})}),R.jsx("tbody",{children:i.map(h=>R.jsxs("tr",{children:[R.jsx("td",{className:"filename",children:h.filename}),R.jsx("td",{className:"size",children:m(h.size)}),R.jsx("td",{className:"mtime",children:p(h.mtime)}),R.jsx("td",{className:"action",children:R.jsx("button",{className:"btn btn-open",onClick:()=>r(h.filename),children:"Open"})})]},h.filename))})]})}),R.jsx("style",{children:`
        .session-list {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 20px;
          background: var(--bg);
        }

        .session-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 15px;
        }

        .session-header h2 {
          margin: 0;
          color: var(--text);
          font-size: 20px;
        }

        .btn-back {
          padding: 8px 16px;
          background: var(--border);
          color: var(--text);
          border: 1px solid var(--border);
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
          transition: background 0.2s;
        }

        .btn-back:hover {
          background: var(--accent);
          border-color: var(--accent);
        }

        .list-loading,
        .list-empty {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          color: var(--dim);
          font-size: 14px;
        }

        .list-container {
          flex: 1;
          overflow-y: auto;
        }

        .recordings-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }

        .recordings-table thead {
          position: sticky;
          top: 0;
          background: var(--surface);
          z-index: 1;
        }

        .recordings-table th {
          padding: 12px;
          text-align: left;
          color: var(--text-dim);
          font-weight: 600;
          border-bottom: 1px solid var(--border);
        }

        .recordings-table td {
          padding: 12px;
          border-bottom: 1px solid var(--border);
          color: var(--text);
        }

        .recordings-table tbody tr:hover {
          background: var(--surface);
        }

        .filename {
          font-family: monospace;
          font-size: 12px;
          max-width: 300px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .size {
          text-align: right;
          color: var(--dim);
          font-family: monospace;
        }

        .mtime {
          color: var(--dim);
          font-family: monospace;
          font-size: 12px;
        }

        .btn-open {
          padding: 6px 12px;
          background: var(--accent);
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
          transition: opacity 0.2s;
        }

        .btn-open:hover {
          opacity: 0.8;
        }
      `})]})}const TM="rgba(48,54,61,0.4)",AM="rgba(88,166,255,0.12)",RM="rgba(88,166,255,0.6)",CM="#0d1117",wM=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],DM=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"}];function NM({filename:r,onBack:t}){const[i,s]=X.useState(!0),[l,c]=X.useState(null),[f,p]=X.useState(!1),[m,h]=X.useState(0),[x,g]=X.useState(1),[v,y]=X.useState(100),[M,C]=X.useState(4),[_,S]=X.useState([]),[T,w]=X.useState(""),[D,G]=X.useState(!1),P=X.useRef(null),I=X.useRef(0),E=X.useRef(0),O=X.useRef(null),at=X.useRef(0),H=X.useRef(0),j=X.useRef(!1),Z=X.useRef(1),Y=X.useRef(100),$=X.useRef(4),N=X.useRef(window.devicePixelRatio||1),F=X.useRef({w:0,h:0});j.current=f,Z.current=x,Y.current=v,$.current=M,E.current=m;const tt=I.current,ot=tt/Ze,xt=m/Ze;X.useEffect(()=>{let J=!1;async function At(){s(!0),c(null);try{const Dt=await fetch(`/api/recordings/data/${encodeURIComponent(r)}`);if(!Dt.ok)throw new Error(`HTTP ${Dt.status}`);const Bt=await Dt.json();if(Bt.error)throw new Error(Bt.error);const Lt=(Bt.data||[]).slice(1),Xt=Lt.length;if(Xt===0)throw new Error("Empty recording");const Wt=Array.from({length:Oe},()=>new Float32Array(Xt));for(let se=0;se<Xt;se++){const k=Lt[se].split(",");for(let ue=0;ue<Oe;ue++)Wt[ue][se]=parseFloat(k[ue+1])||0}J||(P.current=Wt,I.current=Xt,h(0),s(!1))}catch(Dt){J||(c(Dt instanceof Error?Dt.message:String(Dt)),s(!1))}}return At(),()=>{J=!0}},[r]),X.useEffect(()=>{fetch(`/api/recordings/annotations/${encodeURIComponent(r)}`).then(J=>J.json()).then(J=>S(J.annotations||[])).catch(()=>{})},[r]),X.useEffect(()=>{const J=O.current;if(!J||i||l)return;const At=J.getContext("2d",{alpha:!1}),Dt=Bt=>{if(j.current&&H.current>0){const oe=(Bt-H.current)/1e3*Ze*Z.current;let le=E.current+oe;le>=I.current&&(le=I.current-1,p(!1)),E.current=le,h(le)}H.current=Bt;const Pt=N.current,Lt=J.getBoundingClientRect(),Xt=Lt.width,Wt=Lt.height,se=Math.round(Xt*Pt),k=Math.round(Wt*Pt);(F.current.w!==se||F.current.h!==k)&&(F.current={w:se,h:k},J.width=se,J.height=k,At.setTransform(Pt,0,0,Pt,0,0)),B(At,Xt,Wt),at.current=requestAnimationFrame(Dt)};return H.current=0,at.current=requestAnimationFrame(Dt),()=>cancelAnimationFrame(at.current)},[i,l]);function B(J,At,Dt){const Bt=P.current;if(!Bt)return;J.fillStyle=CM,J.fillRect(0,0,At,Dt);const Pt=I.current,Lt=E.current,Xt=$.current*Ze,Wt=Y.current,se=Math.floor(Xt/2);let k=Math.floor(Lt)-se,ue=k+Xt;k<0&&(k=0,ue=Xt),ue>Pt&&(ue=Pt,k=Math.max(0,Pt-Xt));const oe=Dt/Oe;for(let Q=0;Q<Oe;Q++){const yt=Q*oe,Et=yt+oe/2,gt=oe/2;Q>0&&(J.strokeStyle=TM,J.lineWidth=.5,J.beginPath(),J.moveTo(0,yt),J.lineTo(At,yt),J.stroke()),J.strokeStyle=AM,J.lineWidth=.5,J.beginPath(),J.moveTo(0,Et),J.lineTo(At,Et),J.stroke(),J.fillStyle="rgba(230,237,243,0.4)",J.font="10px monospace",J.fillText(`Ch ${Q+1}`,4,yt+12);const Vt=Bt[Q],Ut=ue-k;if(Ut<2)continue;const qt=Ut>2e3?Math.floor(Ut/2e3):1,ee=At/(Ut-1),Ct=gt*.85/Wt;J.strokeStyle=Tu[Q],J.lineWidth=1.2,J.lineJoin="round",J.beginPath();for(let wt=0;wt<Ut;wt+=qt){const kt=wt*ee,zt=Et-Vt[k+wt]*Ct;wt===0?J.moveTo(kt,zt):J.lineTo(kt,zt)}J.stroke()}const le=Math.floor(Lt)>=k&&Math.floor(Lt)<=ue?(Math.floor(Lt)-k)/(ue-k)*At:At/2;J.strokeStyle=RM,J.lineWidth=1.5,J.setLineDash([4,3]),J.beginPath(),J.moveTo(le,0),J.lineTo(le,Dt),J.stroke(),J.setLineDash([]),J.fillStyle="rgba(230,237,243,0.3)",J.font="10px monospace";const Gt=k/Ze,z=ue/Ze,A=Math.min(10,Math.floor(At/80));for(let Q=0;Q<=A;Q++){const yt=Gt+(z-Gt)*(Q/A),Et=Q/A*At;J.fillText(_t(yt),Et+2,Dt-4)}}const V=X.useCallback(async J=>{try{await fetch(`/api/recordings/annotations/${encodeURIComponent(r)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({annotations:J})})}catch{}},[r]);function et(){if(!T.trim())return;const J=Math.floor(m)/Ze,At={id:Date.now(),frame:Math.floor(m),time:J,text:T,timestamp:new Date().toISOString()},Dt=[..._,At];S(Dt),V(Dt),w(""),G(!1)}function K(J){const At=_.filter(Dt=>Dt.id!==J);S(At),V(At)}function ft(J){h(J.frame),E.current=J.frame,p(!1)}function W(){const J=P.current;if(!J)return;const At=I.current,Dt=new Map;for(const se of _)Dt.set(se.frame,se.text);const Pt=[["frame","time_s",...Array.from({length:Oe},(se,k)=>`ch${k+1}`),"annotation"].join(",")];for(let se=0;se<At;se++){const k=(se/Ze).toFixed(6),ue=Array.from({length:Oe},(Gt,z)=>J[z][se].toFixed(4)),oe=Dt.get(se)||"",le=oe?`"${oe.replace(/"/g,'""')}"`:"";Pt.push([se,k,...ue,le].join(","))}const Lt=new Blob([Pt.join(`
`)],{type:"text/csv"}),Xt=URL.createObjectURL(Lt),Wt=document.createElement("a");Wt.href=Xt,Wt.download=r.replace(".csv","_annotated.csv"),Wt.click(),URL.revokeObjectURL(Xt)}function rt(){if(!P.current)return;const At=I.current,Dt={filename:r,sampleRate:Ze,channels:Oe,totalFrames:At,duration:At/Ze,annotations:_.map(Xt=>({frame:Xt.frame,time:Xt.time,text:Xt.text,timestamp:Xt.timestamp}))},Bt=new Blob([JSON.stringify(Dt,null,2)],{type:"application/json"}),Pt=URL.createObjectURL(Bt),Lt=document.createElement("a");Lt.href=Pt,Lt.download=r.replace(".csv","_session.json"),Lt.click(),URL.revokeObjectURL(Pt)}function _t(J){const At=Math.floor(J/60),Dt=Math.floor(J%60),Bt=Math.floor(J%1*100);return`${String(At).padStart(2,"0")}:${String(Dt).padStart(2,"0")}.${String(Bt).padStart(2,"0")}`}return i?R.jsxs("div",{className:"sv-root sv-center",children:[R.jsx("p",{children:"Loading recording..."}),R.jsx("style",{children:Gd})]}):l?R.jsxs("div",{className:"sv-root sv-center",children:[R.jsxs("p",{children:["Error: ",l]}),R.jsx("button",{className:"sv-btn",onClick:t,children:"Back"}),R.jsx("style",{children:Gd})]}):R.jsxs("div",{className:"sv-root",children:[R.jsxs("header",{className:"sv-header",children:[R.jsxs("div",{className:"sv-title",children:[R.jsx("button",{className:"sv-btn",onClick:t,children:"← Back"}),R.jsx("h2",{children:r}),R.jsxs("span",{className:"sv-meta",children:[tt.toLocaleString()," frames · ",_t(ot)]})]}),R.jsxs("div",{className:"sv-controls",children:[R.jsx("button",{className:`sv-btn${f?" active":""}`,onClick:()=>{f||(H.current=0),p(!f)},children:f?"⏸ Pause":"▶ Play"}),R.jsx("button",{className:"sv-btn",onClick:()=>{h(0),E.current=0,p(!1)},children:"⏮ Rewind"}),R.jsxs("select",{value:x,onChange:J=>g(parseFloat(J.target.value)),className:"sv-select",children:[R.jsx("option",{value:.25,children:"0.25x"}),R.jsx("option",{value:.5,children:"0.5x"}),R.jsx("option",{value:1,children:"1x"}),R.jsx("option",{value:1.5,children:"1.5x"}),R.jsx("option",{value:2,children:"2x"}),R.jsx("option",{value:4,children:"4x"})]}),R.jsx("div",{className:"sv-sep"}),R.jsx("label",{className:"sv-label",children:"Window"}),R.jsx("select",{value:M,onChange:J=>C(parseInt(J.target.value)),className:"sv-select",children:DM.map(J=>R.jsx("option",{value:J.value,children:J.label},J.value))}),R.jsx("label",{className:"sv-label",children:"Scale"}),R.jsx("select",{value:v,onChange:J=>y(parseInt(J.target.value)),className:"sv-select",children:wM.map(J=>R.jsx("option",{value:J.value,children:J.label},J.value))}),R.jsx("div",{className:"sv-sep"}),R.jsx("button",{className:"sv-btn sv-btn-export",onClick:W,title:"Export CSV with annotations column",children:"⬇ CSV"}),R.jsx("button",{className:"sv-btn sv-btn-export",onClick:rt,title:"Export session metadata + annotations as JSON",children:"⬇ JSON"})]})]}),R.jsxs("div",{className:"sv-timeline",children:[R.jsx("span",{className:"sv-time",children:_t(xt)}),R.jsx("input",{type:"range",min:"0",max:tt-1,value:Math.floor(m),onChange:J=>{const At=parseInt(J.target.value);h(At),E.current=At,p(!1),H.current=0},className:"sv-slider"}),R.jsx("span",{className:"sv-time",children:_t(ot)})]}),R.jsxs("div",{className:"sv-content",children:[R.jsx("div",{className:"sv-canvas-wrap",children:R.jsx("canvas",{ref:O,style:{display:"block",width:"100%",height:"100%"}})}),R.jsxs("div",{className:"sv-annotations",children:[R.jsxs("div",{className:"sv-anno-header",children:[R.jsx("h3",{children:"Annotations"}),R.jsx("button",{className:"sv-btn sv-btn-sm",onClick:()=>G(!D),children:D?"Cancel":"+ Add"})]}),D&&R.jsxs("div",{className:"sv-anno-form",children:[R.jsx("textarea",{value:T,onChange:J=>w(J.target.value),placeholder:"Annotation at current position...",onKeyDown:J=>{J.key==="Enter"&&J.ctrlKey&&et()}}),R.jsx("button",{className:"sv-btn sv-btn-primary",onClick:et,children:"Add"})]}),R.jsx("div",{className:"sv-anno-list",children:_.length===0?R.jsx("p",{className:"sv-anno-empty",children:"No annotations"}):_.map(J=>R.jsxs("div",{className:"sv-anno-item",onClick:()=>ft(J),children:[R.jsx("span",{className:"sv-anno-time",children:_t(J.time)}),R.jsx("span",{className:"sv-anno-text",children:J.text}),R.jsx("button",{className:"sv-anno-del",onClick:At=>{At.stopPropagation(),K(J.id)},children:"✕"})]},J.id))})]})]}),R.jsx("style",{children:Gd})]})}const Gd=`
  .sv-root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #0d1117;
    color: #e6edf3;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  .sv-center {
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 14px;
    color: #8b949e;
  }

  .sv-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    border-bottom: 1px solid #30363d;
    flex-wrap: wrap;
    gap: 10px;
  }
  .sv-title {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .sv-title h2 {
    margin: 0;
    font-size: 14px;
    font-family: monospace;
    color: #58a6ff;
  }
  .sv-meta {
    font-size: 11px;
    color: #8b949e;
    font-family: monospace;
  }
  .sv-controls {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .sv-sep {
    width: 1px;
    height: 20px;
    background: #30363d;
    margin: 0 4px;
  }
  .sv-label {
    font-size: 11px;
    color: #8b949e;
  }

  .sv-btn {
    padding: 6px 12px;
    background: #21262d;
    color: #e6edf3;
    border: 1px solid #30363d;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    transition: all 0.15s;
  }
  .sv-btn:hover { background: #30363d; }
  .sv-btn.active { background: #58a6ff; border-color: #58a6ff; color: #fff; }
  .sv-btn-sm { padding: 3px 8px; font-size: 11px; }
  .sv-btn-primary { background: #58a6ff; border-color: #58a6ff; color: #fff; }
  .sv-btn-primary:hover { opacity: 0.85; }
  .sv-btn-export { background: #1a7f37; border-color: #238636; color: #fff; font-size: 11px; }
  .sv-btn-export:hover { background: #238636; }

  .sv-select {
    padding: 5px 8px;
    background: #21262d;
    color: #e6edf3;
    border: 1px solid #30363d;
    border-radius: 4px;
    font-size: 12px;
  }

  .sv-timeline {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 16px;
    border-bottom: 1px solid #30363d;
  }
  .sv-time {
    font-size: 12px;
    font-family: monospace;
    color: #8b949e;
    min-width: 64px;
  }
  .sv-slider {
    flex: 1;
    height: 6px;
    border-radius: 3px;
    background: #30363d;
    outline: none;
    -webkit-appearance: none;
    cursor: pointer;
  }
  .sv-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #58a6ff;
    cursor: pointer;
  }
  .sv-slider::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #58a6ff;
    border: none;
    cursor: pointer;
  }

  .sv-content {
    display: flex;
    flex: 1;
    overflow: hidden;
  }
  .sv-canvas-wrap {
    flex: 1;
    min-width: 0;
    position: relative;
  }

  .sv-annotations {
    width: 260px;
    border-left: 1px solid #30363d;
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow: hidden;
  }
  .sv-anno-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .sv-anno-header h3 {
    margin: 0;
    font-size: 12px;
    color: #8b949e;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .sv-anno-form {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 8px;
  }
  .sv-anno-form textarea {
    width: 100%;
    padding: 6px 8px;
    background: #0d1117;
    color: #e6edf3;
    border: 1px solid #30363d;
    border-radius: 4px;
    font-size: 12px;
    font-family: inherit;
    resize: vertical;
    min-height: 50px;
  }
  .sv-anno-form textarea:focus {
    outline: none;
    border-color: #58a6ff;
  }
  .sv-anno-list {
    flex: 1;
    overflow-y: auto;
  }
  .sv-anno-empty {
    color: #8b949e;
    text-align: center;
    padding: 16px 0;
    font-size: 12px;
    margin: 0;
  }
  .sv-anno-item {
    display: flex;
    gap: 6px;
    padding: 8px;
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 4px;
    margin-bottom: 6px;
    cursor: pointer;
    transition: border-color 0.15s;
    align-items: flex-start;
  }
  .sv-anno-item:hover { border-color: #58a6ff; }
  .sv-anno-time {
    color: #58a6ff;
    font-weight: 600;
    font-family: monospace;
    font-size: 10px;
    min-width: 52px;
    padding-top: 1px;
  }
  .sv-anno-text {
    flex: 1;
    font-size: 11px;
    line-height: 1.3;
    word-break: break-word;
  }
  .sv-anno-del {
    background: none;
    border: none;
    color: #f85149;
    cursor: pointer;
    font-size: 12px;
    padding: 0;
    opacity: 0.5;
    transition: opacity 0.15s;
  }
  .sv-anno-del:hover { opacity: 1; }

  @media (max-width: 900px) {
    .sv-annotations { width: 200px; }
  }
  @media (max-width: 640px) {
    .sv-content { flex-direction: column; }
    .sv-canvas-wrap { min-height: 300px; }
    .sv-annotations { width: 100%; border-left: none; border-top: 1px solid #30363d; max-height: 200px; }
  }
`;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tp="183",UM=0,B_=1,LM=2,cu=1,OM=2,ul=3,hs=0,Kn=1,ji=2,Ea=0,Yr=1,z_=2,H_=3,G_=4,PM=5,Hs=100,FM=101,IM=102,BM=103,zM=104,HM=200,GM=201,VM=202,kM=203,Ch=204,wh=205,jM=206,XM=207,WM=208,qM=209,YM=210,ZM=211,KM=212,QM=213,JM=214,Dh=0,Nh=1,Uh=2,Kr=3,Lh=4,Oh=5,Ph=6,Fh=7,$v=0,$M=1,tb=2,Yi=0,tx=1,ex=2,nx=3,Ap=4,ix=5,ax=6,sx=7,rx=300,js=301,Qr=302,Vd=303,kd=304,Au=306,Ih=1e3,ba=1001,Bh=1002,Cn=1003,eb=1004,Lc=1005,On=1006,jd=1007,Vs=1008,ci=1009,ox=1010,lx=1011,dl=1012,Rp=1013,Ki=1014,Wi=1015,Aa=1016,Cp=1017,wp=1018,hl=1020,cx=35902,ux=35899,fx=1021,dx=1022,Oi=1023,Ra=1026,ks=1027,hx=1028,Dp=1029,Jr=1030,Np=1031,Up=1033,uu=33776,fu=33777,du=33778,hu=33779,zh=35840,Hh=35841,Gh=35842,Vh=35843,kh=36196,jh=37492,Xh=37496,Wh=37488,qh=37489,Yh=37490,Zh=37491,Kh=37808,Qh=37809,Jh=37810,$h=37811,tp=37812,ep=37813,np=37814,ip=37815,ap=37816,sp=37817,rp=37818,op=37819,lp=37820,cp=37821,up=36492,fp=36494,dp=36495,hp=36283,pp=36284,mp=36285,gp=36286,nb=3200,ib=0,ab=1,cs="",Si="srgb",$r="srgb-linear",mu="linear",ke="srgb",Cr=7680,V_=519,sb=512,rb=513,ob=514,Lp=515,lb=516,cb=517,Op=518,ub=519,_p=35044,k_="300 es",qi=2e3,pl=2001;function fb(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function gu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function db(){const r=gu("canvas");return r.style.display="block",r}const j_={};function _u(...r){const t="THREE."+r.shift();console.log(t,...r)}function px(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function de(...r){r=px(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ue(...r){r=px(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function vu(...r){const t=r.join(" ");t in j_||(j_[t]=!0,de(...r))}function hb(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const pb={[Dh]:Nh,[Uh]:Ph,[Lh]:Fh,[Kr]:Oh,[Nh]:Dh,[Ph]:Uh,[Fh]:Lh,[Oh]:Kr};class eo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xd=Math.PI/180,vp=180/Math.PI;function fs(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function De(r,t,i){return Math.max(t,Math.min(i,r))}function mb(r,t){return(r%t+t)%t}function Wd(r,t,i){return(1-i)*r+i*t}function Xi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function qe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(t=0,i=0){Ae.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class no{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,p){let m=s[l+0],h=s[l+1],x=s[l+2],g=s[l+3],v=c[f+0],y=c[f+1],M=c[f+2],C=c[f+3];if(g!==C||m!==v||h!==y||x!==M){let _=m*v+h*y+x*M+g*C;_<0&&(v=-v,y=-y,M=-M,C=-C,_=-_);let S=1-p;if(_<.9995){const T=Math.acos(_),w=Math.sin(T);S=Math.sin(S*T)/w,p=Math.sin(p*T)/w,m=m*S+v*p,h=h*S+y*p,x=x*S+M*p,g=g*S+C*p}else{m=m*S+v*p,h=h*S+y*p,x=x*S+M*p,g=g*S+C*p;const T=1/Math.sqrt(m*m+h*h+x*x+g*g);m*=T,h*=T,x*=T,g*=T}}t[i]=m,t[i+1]=h,t[i+2]=x,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,f){const p=s[l],m=s[l+1],h=s[l+2],x=s[l+3],g=c[f],v=c[f+1],y=c[f+2],M=c[f+3];return t[i]=p*M+x*g+m*y-h*v,t[i+1]=m*M+x*v+h*g-p*y,t[i+2]=h*M+x*y+p*v-m*g,t[i+3]=x*M-p*g-m*v-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,p=Math.cos,m=Math.sin,h=p(s/2),x=p(l/2),g=p(c/2),v=m(s/2),y=m(l/2),M=m(c/2);switch(f){case"XYZ":this._x=v*x*g+h*y*M,this._y=h*y*g-v*x*M,this._z=h*x*M+v*y*g,this._w=h*x*g-v*y*M;break;case"YXZ":this._x=v*x*g+h*y*M,this._y=h*y*g-v*x*M,this._z=h*x*M-v*y*g,this._w=h*x*g+v*y*M;break;case"ZXY":this._x=v*x*g-h*y*M,this._y=h*y*g+v*x*M,this._z=h*x*M+v*y*g,this._w=h*x*g-v*y*M;break;case"ZYX":this._x=v*x*g-h*y*M,this._y=h*y*g+v*x*M,this._z=h*x*M-v*y*g,this._w=h*x*g+v*y*M;break;case"YZX":this._x=v*x*g+h*y*M,this._y=h*y*g+v*x*M,this._z=h*x*M-v*y*g,this._w=h*x*g-v*y*M;break;case"XZY":this._x=v*x*g-h*y*M,this._y=h*y*g-v*x*M,this._z=h*x*M+v*y*g,this._w=h*x*g+v*y*M;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],x=i[6],g=i[10],v=s+p+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(x-m)*y,this._y=(c-h)*y,this._z=(f-l)*y}else if(s>p&&s>g){const y=2*Math.sqrt(1+s-p-g);this._w=(x-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+h)/y}else if(p>g){const y=2*Math.sqrt(1+p-s-g);this._w=(c-h)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+g-s-p);this._w=(f-l)/y,this._x=(c+h)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=s*x+f*p+l*h-c*m,this._y=l*x+f*m+c*p-s*h,this._z=c*x+f*h+s*m-l*p,this._w=f*x-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ut{constructor(t=0,i=0,s=0){ut.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(X_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(X_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,p=t.z,m=t.w,h=2*(f*l-p*s),x=2*(p*i-c*l),g=2*(c*s-f*i);return this.x=i+m*h+f*g-p*x,this.y=s+m*x+p*h-c*g,this.z=l+m*g+c*x-f*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return qd.copy(this).projectOnVector(t),this.sub(qd)}reflect(t){return this.sub(qd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qd=new ut,X_=new no;class ye{constructor(t,i,s,l,c,f,p,m,h){ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,h)}set(t,i,s,l,c,f,p,m,h){const x=this.elements;return x[0]=t,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=f,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],h=s[1],x=s[4],g=s[7],v=s[2],y=s[5],M=s[8],C=l[0],_=l[3],S=l[6],T=l[1],w=l[4],D=l[7],G=l[2],P=l[5],I=l[8];return c[0]=f*C+p*T+m*G,c[3]=f*_+p*w+m*P,c[6]=f*S+p*D+m*I,c[1]=h*C+x*T+g*G,c[4]=h*_+x*w+g*P,c[7]=h*S+x*D+g*I,c[2]=v*C+y*T+M*G,c[5]=v*_+y*w+M*P,c[8]=v*S+y*D+M*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],h=t[7],x=t[8];return i*f*x-i*p*h-s*c*x+s*p*m+l*c*h-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],h=t[7],x=t[8],g=x*f-p*h,v=p*m-x*c,y=h*c-f*m,M=i*g+s*v+l*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/M;return t[0]=g*C,t[1]=(l*h-x*s)*C,t[2]=(p*s-l*f)*C,t[3]=v*C,t[4]=(x*i-l*m)*C,t[5]=(l*c-p*i)*C,t[6]=y*C,t[7]=(s*m-h*i)*C,t[8]=(f*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*f+h*p)+f+t,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Yd.makeScale(t,i)),this}rotate(t){return this.premultiply(Yd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Yd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yd=new ye,W_=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),q_=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gb(){const r={enabled:!0,workingColorSpace:$r,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ke&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ke&&(l.r=Zr(l.r),l.g=Zr(l.g),l.b=Zr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===cs?mu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return vu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return vu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[$r]:{primaries:t,whitePoint:s,transfer:mu,toXYZ:W_,fromXYZ:q_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:s,transfer:ke,toXYZ:W_,fromXYZ:q_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const Le=gb();function Ta(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let wr;class _b{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{wr===void 0&&(wr=gu("canvas")),wr.width=t.width,wr.height=t.height;const l=wr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=wr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=gu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ta(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ta(i[s]/255)*255):i[s]=Ta(i[s]);return{data:i,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vb=0;class Pp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Zd(l[f].image)):c.push(Zd(l[f]))}else c=Zd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Zd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_b.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}let xb=0;const Kd=new ut;class Pn extends eo{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=ba,l=ba,c=On,f=Vs,p=Oi,m=ci,h=Pn.DEFAULT_ANISOTROPY,x=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=fs(),this.name="",this.source=new Pp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kd).x}get height(){return this.source.getSize(Kd).y}get depth(){return this.source.getSize(Kd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){de(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){de(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ih:t.x=t.x-Math.floor(t.x);break;case ba:t.x=t.x<0?0:1;break;case Bh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ih:t.y=t.y-Math.floor(t.y);break;case ba:t.y=t.y<0?0:1;break;case Bh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=rx;Pn.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,s=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,h=m[0],x=m[4],g=m[8],v=m[1],y=m[5],M=m[9],C=m[2],_=m[6],S=m[10];if(Math.abs(x-v)<.01&&Math.abs(g-C)<.01&&Math.abs(M-_)<.01){if(Math.abs(x+v)<.1&&Math.abs(g+C)<.1&&Math.abs(M+_)<.1&&Math.abs(h+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(h+1)/2,D=(y+1)/2,G=(S+1)/2,P=(x+v)/4,I=(g+C)/4,E=(M+_)/4;return w>D&&w>G?w<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(w),l=P/s,c=I/s):D>G?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=P/l,c=E/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=I/c,l=E/c),this.set(s,l,c,i),this}let T=Math.sqrt((_-M)*(_-M)+(g-C)*(g-C)+(v-x)*(v-x));return Math.abs(T)<.001&&(T=1),this.x=(_-M)/T,this.y=(g-C)/T,this.z=(v-x)/T,this.w=Math.acos((h+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this.w=De(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this.w=De(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sb extends eo{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Pn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Pp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends Sb{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class mx extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yb extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Je{constructor(t,i,s,l,c,f,p,m,h,x,g,v,y,M,C,_){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,h,x,g,v,y,M,C,_)}set(t,i,s,l,c,f,p,m,h,x,g,v,y,M,C,_){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=p,S[13]=m,S[2]=h,S[6]=x,S[10]=g,S[14]=v,S[3]=y,S[7]=M,S[11]=C,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Dr.setFromMatrixColumn(t,0).length(),c=1/Dr.setFromMatrixColumn(t,1).length(),f=1/Dr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const v=f*x,y=f*g,M=p*x,C=p*g;i[0]=m*x,i[4]=-m*g,i[8]=h,i[1]=y+M*h,i[5]=v-C*h,i[9]=-p*m,i[2]=C-v*h,i[6]=M+y*h,i[10]=f*m}else if(t.order==="YXZ"){const v=m*x,y=m*g,M=h*x,C=h*g;i[0]=v+C*p,i[4]=M*p-y,i[8]=f*h,i[1]=f*g,i[5]=f*x,i[9]=-p,i[2]=y*p-M,i[6]=C+v*p,i[10]=f*m}else if(t.order==="ZXY"){const v=m*x,y=m*g,M=h*x,C=h*g;i[0]=v-C*p,i[4]=-f*g,i[8]=M+y*p,i[1]=y+M*p,i[5]=f*x,i[9]=C-v*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(t.order==="ZYX"){const v=f*x,y=f*g,M=p*x,C=p*g;i[0]=m*x,i[4]=M*h-y,i[8]=v*h+C,i[1]=m*g,i[5]=C*h+v,i[9]=y*h-M,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(t.order==="YZX"){const v=f*m,y=f*h,M=p*m,C=p*h;i[0]=m*x,i[4]=C-v*g,i[8]=M*g+y,i[1]=g,i[5]=f*x,i[9]=-p*x,i[2]=-h*x,i[6]=y*g+M,i[10]=v-C*g}else if(t.order==="XZY"){const v=f*m,y=f*h,M=p*m,C=p*h;i[0]=m*x,i[4]=-g,i[8]=h*x,i[1]=v*g+C,i[5]=f*x,i[9]=y*g-M,i[2]=M*g-y,i[6]=p*x,i[10]=C*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mb,t,bb)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),es.crossVectors(s,ri),es.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),es.crossVectors(s,ri)),es.normalize(),Oc.crossVectors(ri,es),l[0]=es.x,l[4]=Oc.x,l[8]=ri.x,l[1]=es.y,l[5]=Oc.y,l[9]=ri.y,l[2]=es.z,l[6]=Oc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],h=s[12],x=s[1],g=s[5],v=s[9],y=s[13],M=s[2],C=s[6],_=s[10],S=s[14],T=s[3],w=s[7],D=s[11],G=s[15],P=l[0],I=l[4],E=l[8],O=l[12],at=l[1],H=l[5],j=l[9],Z=l[13],Y=l[2],$=l[6],N=l[10],F=l[14],tt=l[3],ot=l[7],xt=l[11],B=l[15];return c[0]=f*P+p*at+m*Y+h*tt,c[4]=f*I+p*H+m*$+h*ot,c[8]=f*E+p*j+m*N+h*xt,c[12]=f*O+p*Z+m*F+h*B,c[1]=x*P+g*at+v*Y+y*tt,c[5]=x*I+g*H+v*$+y*ot,c[9]=x*E+g*j+v*N+y*xt,c[13]=x*O+g*Z+v*F+y*B,c[2]=M*P+C*at+_*Y+S*tt,c[6]=M*I+C*H+_*$+S*ot,c[10]=M*E+C*j+_*N+S*xt,c[14]=M*O+C*Z+_*F+S*B,c[3]=T*P+w*at+D*Y+G*tt,c[7]=T*I+w*H+D*$+G*ot,c[11]=T*E+w*j+D*N+G*xt,c[15]=T*O+w*Z+D*F+G*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],p=t[5],m=t[9],h=t[13],x=t[2],g=t[6],v=t[10],y=t[14],M=t[3],C=t[7],_=t[11],S=t[15],T=m*y-h*v,w=p*y-h*g,D=p*v-m*g,G=f*y-h*x,P=f*v-m*x,I=f*g-p*x;return i*(C*T-_*w+S*D)-s*(M*T-_*G+S*P)+l*(M*w-C*G+S*I)-c*(M*D-C*P+_*I)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],h=t[7],x=t[8],g=t[9],v=t[10],y=t[11],M=t[12],C=t[13],_=t[14],S=t[15],T=i*p-s*f,w=i*m-l*f,D=i*h-c*f,G=s*m-l*p,P=s*h-c*p,I=l*h-c*m,E=x*C-g*M,O=x*_-v*M,at=x*S-y*M,H=g*_-v*C,j=g*S-y*C,Z=v*S-y*_,Y=T*Z-w*j+D*H+G*at-P*O+I*E;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/Y;return t[0]=(p*Z-m*j+h*H)*$,t[1]=(l*j-s*Z-c*H)*$,t[2]=(C*I-_*P+S*G)*$,t[3]=(v*P-g*I-y*G)*$,t[4]=(m*at-f*Z-h*O)*$,t[5]=(i*Z-l*at+c*O)*$,t[6]=(_*D-M*I-S*w)*$,t[7]=(x*I-v*D+y*w)*$,t[8]=(f*j-p*at+h*E)*$,t[9]=(s*at-i*j-c*E)*$,t[10]=(M*P-C*D+S*T)*$,t[11]=(g*D-x*P-y*T)*$,t[12]=(p*O-f*H-m*E)*$,t[13]=(i*H-s*O+l*E)*$,t[14]=(C*w-M*G-_*T)*$,t[15]=(x*G-g*w+v*T)*$,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,p=t.y,m=t.z,h=c*f,x=c*p;return this.set(h*f+s,h*p-l*m,h*m+l*p,0,h*p+l*m,x*p+s,x*m-l*f,0,h*m-l*p,x*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,x=f+f,g=p+p,v=c*h,y=c*x,M=c*g,C=f*x,_=f*g,S=p*g,T=m*h,w=m*x,D=m*g,G=s.x,P=s.y,I=s.z;return l[0]=(1-(C+S))*G,l[1]=(y+D)*G,l[2]=(M-w)*G,l[3]=0,l[4]=(y-D)*P,l[5]=(1-(v+S))*P,l[6]=(_+T)*P,l[7]=0,l[8]=(M+w)*I,l[9]=(_-T)*I,l[10]=(1-(v+C))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Dr.set(l[0],l[1],l[2]).length();const p=Dr.set(l[4],l[5],l[6]).length(),m=Dr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ni.copy(this);const h=1/f,x=1/p,g=1/m;return Ni.elements[0]*=h,Ni.elements[1]*=h,Ni.elements[2]*=h,Ni.elements[4]*=x,Ni.elements[5]*=x,Ni.elements[6]*=x,Ni.elements[8]*=g,Ni.elements[9]*=g,Ni.elements[10]*=g,i.setFromRotationMatrix(Ni),s.x=f,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,f,p=qi,m=!1){const h=this.elements,x=2*c/(i-t),g=2*c/(s-l),v=(i+t)/(i-t),y=(s+l)/(s-l);let M,C;if(m)M=c/(f-c),C=f*c/(f-c);else if(p===qi)M=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(p===pl)M=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,s,l,c,f,p=qi,m=!1){const h=this.elements,x=2/(i-t),g=2/(s-l),v=-(i+t)/(i-t),y=-(s+l)/(s-l);let M,C;if(m)M=1/(f-c),C=f/(f-c);else if(p===qi)M=-2/(f-c),C=-(f+c)/(f-c);else if(p===pl)M=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=g,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Dr=new ut,Ni=new Je,Mb=new ut(0,0,0),bb=new ut(1,1,1),es=new ut,Oc=new ut,ri=new ut,Y_=new Je,Z_=new no;class Ca{constructor(t=0,i=0,s=0,l=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],x=l[9],g=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(De(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-De(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(De(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-De(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(De(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-De(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Y_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Y_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Z_.setFromEuler(this),this.setFromQuaternion(Z_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class gx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Eb=0;const K_=new ut,Nr=new no,va=new Je,Pc=new ut,Jo=new ut,Tb=new ut,Ab=new no,Q_=new ut(1,0,0),J_=new ut(0,1,0),$_=new ut(0,0,1),tv={type:"added"},Rb={type:"removed"},Ur={type:"childadded",child:null},Qd={type:"childremoved",child:null};class wn extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new ut,i=new Ca,s=new no,l=new ut(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new ye}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Nr.setFromAxisAngle(t,i),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(t,i){return Nr.setFromAxisAngle(t,i),this.quaternion.premultiply(Nr),this}rotateX(t){return this.rotateOnAxis(Q_,t)}rotateY(t){return this.rotateOnAxis(J_,t)}rotateZ(t){return this.rotateOnAxis($_,t)}translateOnAxis(t,i){return K_.copy(t).applyQuaternion(this.quaternion),this.position.add(K_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Q_,t)}translateY(t){return this.translateOnAxis(J_,t)}translateZ(t){return this.translateOnAxis($_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Pc.copy(t):Pc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(Jo,Pc,this.up):va.lookAt(Pc,Jo,this.up),this.quaternion.setFromRotationMatrix(va),l&&(va.extractRotation(l.matrixWorld),Nr.setFromRotationMatrix(va),this.quaternion.premultiply(Nr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tv),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Rb),Qd.child=t,this.dispatchEvent(Qd),Qd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),va.multiply(t.parent.matrixWorld)),t.applyMatrix4(va),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tv),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,t,Tb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,Ab,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const g=m[h];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=f(t.geometries),m=f(t.materials),h=f(t.textures),x=f(t.images),g=f(t.shapes),v=f(t.skeletons),y=f(t.animations),M=f(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),x.length>0&&(s.images=x),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),M.length>0&&(s.nodes=M)}return s.object=l,s;function f(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}wn.DEFAULT_UP=new ut(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fc extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cb={type:"move"};class Jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){f=!0;for(const C of t.hand.values()){const _=i.getJointPose(C,s),S=this._getHandJoint(h,C);_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=_.radius),S.visible=_!==null}const x=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=x.position.distanceTo(g.position),y=.02,M=.005;h.inputState.pinching&&v>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&v<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Cb)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Fc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const _x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Ic={h:0,s:0,l:0};function $d(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class be{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=mb(t,1),i=De(i,0,1),s=De(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=$d(f,c,t+1/3),this.g=$d(f,c,t),this.b=$d(f,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:de("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const s=_x[t.toLowerCase()];return s!==void 0?this.setHex(s,i):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ta(t.r),this.g=Ta(t.g),this.b=Ta(t.b),this}copyLinearToSRGB(t){return this.r=Zr(t.r),this.g=Zr(t.g),this.b=Zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return Le.workingToColorSpace(Un.copy(this),t),Math.round(De(Un.r*255,0,255))*65536+Math.round(De(Un.g*255,0,255))*256+Math.round(De(Un.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,c=Un.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const x=(p+f)/2;if(p===f)m=0,h=0;else{const g=f-p;switch(h=x<=.5?g/(f+p):g/(2-f-p),f){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=h,t.l=x,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=Si){Le.workingToColorSpace(Un.copy(this),t);const i=Un.r,s=Un.g,l=Un.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+i,ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ns),t.getHSL(Ic);const s=Wd(ns.h,Ic.h,i),l=Wd(ns.s,Ic.s,i),c=Wd(ns.l,Ic.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new be;be.NAMES=_x;class Fp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(t),this.density=i}clone(){return new Fp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wb extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ca,this.environmentIntensity=1,this.environmentRotation=new Ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ui=new ut,xa=new ut,th=new ut,Sa=new ut,Lr=new ut,Or=new ut,ev=new ut,eh=new ut,nh=new ut,ih=new ut,ah=new rn,sh=new rn,rh=new rn;class yi{constructor(t=new ut,i=new ut,s=new ut){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ui.subVectors(t,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ui.subVectors(l,i),xa.subVectors(s,i),th.subVectors(t,i);const f=Ui.dot(Ui),p=Ui.dot(xa),m=Ui.dot(th),h=xa.dot(xa),x=xa.dot(th),g=f*h-p*p;if(g===0)return c.set(0,0,0),null;const v=1/g,y=(h*m-p*x)*v,M=(f*x-p*m)*v;return c.set(1-y-M,M,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(t,i,s,l,c,f,p,m){return this.getBarycoord(t,i,s,l,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Sa.x),m.addScaledVector(f,Sa.y),m.addScaledVector(p,Sa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return ah.setScalar(0),sh.setScalar(0),rh.setScalar(0),ah.fromBufferAttribute(t,i),sh.fromBufferAttribute(t,s),rh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(ah,c.x),f.addScaledVector(sh,c.y),f.addScaledVector(rh,c.z),f}static isFrontFacing(t,i,s,l){return Ui.subVectors(s,i),xa.subVectors(t,i),Ui.cross(xa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Ui.cross(xa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,p;Lr.subVectors(l,s),Or.subVectors(c,s),eh.subVectors(t,s);const m=Lr.dot(eh),h=Or.dot(eh);if(m<=0&&h<=0)return i.copy(s);nh.subVectors(t,l);const x=Lr.dot(nh),g=Or.dot(nh);if(x>=0&&g<=x)return i.copy(l);const v=m*g-x*h;if(v<=0&&m>=0&&x<=0)return f=m/(m-x),i.copy(s).addScaledVector(Lr,f);ih.subVectors(t,c);const y=Lr.dot(ih),M=Or.dot(ih);if(M>=0&&y<=M)return i.copy(c);const C=y*h-m*M;if(C<=0&&h>=0&&M<=0)return p=h/(h-M),i.copy(s).addScaledVector(Or,p);const _=x*M-y*g;if(_<=0&&g-x>=0&&y-M>=0)return ev.subVectors(c,l),p=(g-x)/(g-x+(y-M)),i.copy(l).addScaledVector(ev,p);const S=1/(_+C+v);return f=C*S,p=v*S,i.copy(s).addScaledVector(Lr,f).addScaledVector(Or,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class gl{constructor(t=new ut(1/0,1/0,1/0),i=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Li.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Li.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Li.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)t.isMesh===!0?t.getVertexPosition(f,Li):Li.fromBufferAttribute(c,f),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Bc.copy(s.boundingBox)),Bc.applyMatrix4(t.matrixWorld),this.union(Bc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($o),zc.subVectors(this.max,$o),Pr.subVectors(t.a,$o),Fr.subVectors(t.b,$o),Ir.subVectors(t.c,$o),is.subVectors(Fr,Pr),as.subVectors(Ir,Fr),Ls.subVectors(Pr,Ir);let i=[0,-is.z,is.y,0,-as.z,as.y,0,-Ls.z,Ls.y,is.z,0,-is.x,as.z,0,-as.x,Ls.z,0,-Ls.x,-is.y,is.x,0,-as.y,as.x,0,-Ls.y,Ls.x,0];return!oh(i,Pr,Fr,Ir,zc)||(i=[1,0,0,0,1,0,0,0,1],!oh(i,Pr,Fr,Ir,zc))?!1:(Hc.crossVectors(is,as),i=[Hc.x,Hc.y,Hc.z],oh(i,Pr,Fr,Ir,zc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ya),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ya=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],Li=new ut,Bc=new gl,Pr=new ut,Fr=new ut,Ir=new ut,is=new ut,as=new ut,Ls=new ut,$o=new ut,zc=new ut,Hc=new ut,Os=new ut;function oh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Os.fromArray(r,c);const p=l.x*Math.abs(Os.x)+l.y*Math.abs(Os.y)+l.z*Math.abs(Os.z),m=t.dot(Os),h=i.dot(Os),x=s.dot(Os);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const gn=new ut,Gc=new Ae;let Db=0;class Ln{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Db++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=_p,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Gc.fromBufferAttribute(this,i),Gc.applyMatrix3(t),this.setXY(i,Gc.x,Gc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Xi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qe(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Xi(i,this.array)),i}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Xi(i,this.array)),i}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Xi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Xi(i,this.array)),i}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_p&&(t.usage=this.usage),t}}class vx extends Ln{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class xx extends Ln{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ui extends Ln{constructor(t,i,s){super(new Float32Array(t),i,s)}}const Nb=new gl,tl=new ut,lh=new ut;class _l{constructor(t=new ut,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Nb.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tl.subVectors(t,this.center);const i=tl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(tl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tl.copy(t.center).add(lh)),this.expandByPoint(tl.copy(t.center).sub(lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ub=0;const xi=new Je,ch=new wn,Br=new ut,oi=new gl,el=new gl,bn=new ut;class Fn extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fb(t)?xx:vx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ye().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,s){return xi.makeTranslation(t,i,s),this.applyMatrix4(xi),this}scale(t,i,s){return xi.makeScale(t,i,s),this.applyMatrix4(xi),this}lookAt(t){return ch.lookAt(t),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ui(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _l);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];el.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors(oi.min,el.min),oi.expandByPoint(bn),bn.addVectors(oi.max,el.max),oi.expandByPoint(bn)):(oi.expandByPoint(el.min),oi.expandByPoint(el.max))}oi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)bn.fromBufferAttribute(p,h),m&&(Br.fromBufferAttribute(t,h),bn.add(Br)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let E=0;E<s.count;E++)p[E]=new ut,m[E]=new ut;const h=new ut,x=new ut,g=new ut,v=new Ae,y=new Ae,M=new Ae,C=new ut,_=new ut;function S(E,O,at){h.fromBufferAttribute(s,E),x.fromBufferAttribute(s,O),g.fromBufferAttribute(s,at),v.fromBufferAttribute(c,E),y.fromBufferAttribute(c,O),M.fromBufferAttribute(c,at),x.sub(h),g.sub(h),y.sub(v),M.sub(v);const H=1/(y.x*M.y-M.x*y.y);isFinite(H)&&(C.copy(x).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(H),_.copy(g).multiplyScalar(y.x).addScaledVector(x,-M.x).multiplyScalar(H),p[E].add(C),p[O].add(C),p[at].add(C),m[E].add(_),m[O].add(_),m[at].add(_))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let E=0,O=T.length;E<O;++E){const at=T[E],H=at.start,j=at.count;for(let Z=H,Y=H+j;Z<Y;Z+=3)S(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}const w=new ut,D=new ut,G=new ut,P=new ut;function I(E){G.fromBufferAttribute(l,E),P.copy(G);const O=p[E];w.copy(O),w.sub(G.multiplyScalar(G.dot(O))).normalize(),D.crossVectors(P,O);const H=D.dot(m[E])<0?-1:1;f.setXYZW(E,w.x,w.y,w.z,H)}for(let E=0,O=T.length;E<O;++E){const at=T[E],H=at.start,j=at.count;for(let Z=H,Y=H+j;Z<Y;Z+=3)I(t.getX(Z+0)),I(t.getX(Z+1)),I(t.getX(Z+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ln(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const l=new ut,c=new ut,f=new ut,p=new ut,m=new ut,h=new ut,x=new ut,g=new ut;if(t)for(let v=0,y=t.count;v<y;v+=3){const M=t.getX(v+0),C=t.getX(v+1),_=t.getX(v+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,_),x.subVectors(f,c),g.subVectors(l,c),x.cross(g),p.fromBufferAttribute(s,M),m.fromBufferAttribute(s,C),h.fromBufferAttribute(s,_),p.add(x),m.add(x),h.add(x),s.setXYZ(M,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(_,h.x,h.y,h.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),x.subVectors(f,c),g.subVectors(l,c),x.cross(g),s.setXYZ(v+0,x.x,x.y,x.z),s.setXYZ(v+1,x.x,x.y,x.z),s.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(p,m){const h=p.array,x=p.itemSize,g=p.normalized,v=new h.constructor(m.length*x);let y=0,M=0;for(let C=0,_=m.length;C<_;C++){p.isInterleavedBufferAttribute?y=m[C]*p.data.stride+p.offset:y=m[C]*x;for(let S=0;S<x;S++)v[M++]=h[y++]}return new Ln(v,x,g)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let x=0,g=h.length;x<g;x++){const v=h[x],y=t(v,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let g=0,v=h.length;g<v;g++){const y=h[g];x.push(y.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=t.morphAttributes;for(const h in c){const x=[],g=c[h];for(let v=0,y=g.length;v<y;v++)x.push(g[v].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let h=0,x=f.length;h<x;h++){const g=f[h];this.addGroup(g.start,g.count,g.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lb{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=_p,this.updateRanges=[],this.version=0,this.uuid=fs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vn=new ut;class xu{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix4(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyNormalMatrix(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.transformDirection(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Xi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qe(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Xi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Xi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Xi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Xi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){_u("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ln(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){_u("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Ob=0;class Xs extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Yr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=wh,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){de(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){de(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(s.blending=this.blending),this.side!==hs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ch&&(s.blendSrc=this.blendSrc),this.blendDst!==wh&&(s.blendDst=this.blendDst),this.blendEquation!==Hs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==V_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Sx extends Xs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zr;const nl=new ut,Hr=new ut,Gr=new ut,Vr=new Ae,il=new Ae,yx=new Je,Vc=new ut,al=new ut,kc=new ut,nv=new Ae,uh=new Ae,iv=new Ae;class Pb extends wn{constructor(t=new Sx){if(super(),this.isSprite=!0,this.type="Sprite",zr===void 0){zr=new Fn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new Lb(i,5);zr.setIndex([0,1,2,0,2,3]),zr.setAttribute("position",new xu(s,3,0,!1)),zr.setAttribute("uv",new xu(s,2,3,!1))}this.geometry=zr,this.material=t,this.center=new Ae(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hr.setFromMatrixScale(this.matrixWorld),yx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Gr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const f=this.center;jc(Vc.set(-.5,-.5,0),Gr,f,Hr,l,c),jc(al.set(.5,-.5,0),Gr,f,Hr,l,c),jc(kc.set(.5,.5,0),Gr,f,Hr,l,c),nv.set(0,0),uh.set(1,0),iv.set(1,1);let p=t.ray.intersectTriangle(Vc,al,kc,!1,nl);if(p===null&&(jc(al.set(-.5,.5,0),Gr,f,Hr,l,c),uh.set(0,1),p=t.ray.intersectTriangle(Vc,kc,al,!1,nl),p===null))return;const m=t.ray.origin.distanceTo(nl);m<t.near||m>t.far||i.push({distance:m,point:nl.clone(),uv:yi.getInterpolation(nl,Vc,al,kc,nv,uh,iv,new Ae),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function jc(r,t,i,s,l,c){Vr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(il.x=c*Vr.x-l*Vr.y,il.y=l*Vr.x+c*Vr.y):il.copy(Vr),r.copy(t),r.x+=il.x,r.y+=il.y,r.applyMatrix4(yx)}const Ma=new ut,fh=new ut,Xc=new ut,ss=new ut,dh=new ut,Wc=new ut,hh=new ut;class Ip{constructor(t=new ut,i=new ut(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ma.copy(this.origin).addScaledVector(this.direction,i),Ma.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){fh.copy(t).add(i).multiplyScalar(.5),Xc.copy(i).sub(t).normalize(),ss.copy(this.origin).sub(fh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Xc),p=ss.dot(this.direction),m=-ss.dot(Xc),h=ss.lengthSq(),x=Math.abs(1-f*f);let g,v,y,M;if(x>0)if(g=f*m-p,v=f*p-m,M=c*x,g>=0)if(v>=-M)if(v<=M){const C=1/x;g*=C,v*=C,y=g*(g+f*v+2*p)+v*(f*g+v+2*m)+h}else v=c,g=Math.max(0,-(f*v+p)),y=-g*g+v*(v+2*m)+h;else v=-c,g=Math.max(0,-(f*v+p)),y=-g*g+v*(v+2*m)+h;else v<=-M?(g=Math.max(0,-(-f*c+p)),v=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+v*(v+2*m)+h):v<=M?(g=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+h):(g=Math.max(0,-(f*c+p)),v=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+v*(v+2*m)+h);else v=f>0?-c:c,g=Math.max(0,-(f*v+p)),y=-g*g+v*(v+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(fh).addScaledVector(Xc,v),y}intersectSphere(t,i){Ma.subVectors(t.center,this.origin);const s=Ma.dot(this.direction),l=Ma.dot(Ma)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,p,m;const h=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(s=(t.min.x-v.x)*h,l=(t.max.x-v.x)*h):(s=(t.max.x-v.x)*h,l=(t.min.x-v.x)*h),x>=0?(c=(t.min.y-v.y)*x,f=(t.max.y-v.y)*x):(c=(t.max.y-v.y)*x,f=(t.min.y-v.y)*x),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(p=(t.min.z-v.z)*g,m=(t.max.z-v.z)*g):(p=(t.max.z-v.z)*g,m=(t.min.z-v.z)*g),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ma)!==null}intersectTriangle(t,i,s,l,c){dh.subVectors(i,t),Wc.subVectors(s,t),hh.crossVectors(dh,Wc);let f=this.direction.dot(hh),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;ss.subVectors(this.origin,t);const m=p*this.direction.dot(Wc.crossVectors(ss,Wc));if(m<0)return null;const h=p*this.direction.dot(dh.cross(ss));if(h<0||m+h>f)return null;const x=-p*ss.dot(hh);return x<0?null:this.at(x/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bp extends Xs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ca,this.combine=$v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const av=new Je,Ps=new Ip,qc=new _l,sv=new ut,Yc=new ut,Zc=new ut,Kc=new ut,ph=new ut,Qc=new ut,rv=new ut,Jc=new ut;class Qi extends wn{constructor(t=new Fn,i=new Bp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Qc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=p[m],g=c[m];x!==0&&(ph.fromBufferAttribute(g,t),f?Qc.addScaledVector(ph,x):Qc.addScaledVector(ph.sub(i),x))}i.add(Qc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),qc.copy(s.boundingSphere),qc.applyMatrix4(c),Ps.copy(t.ray).recast(t.near),!(qc.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(qc,sv)===null||Ps.origin.distanceToSquared(sv)>(t.far-t.near)**2))&&(av.copy(c).invert(),Ps.copy(t.ray).applyMatrix4(av),!(s.boundingBox!==null&&Ps.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ps)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,v=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(f))for(let M=0,C=v.length;M<C;M++){const _=v[M],S=f[_.materialIndex],T=Math.max(_.start,y.start),w=Math.min(p.count,Math.min(_.start+_.count,y.start+y.count));for(let D=T,G=w;D<G;D+=3){const P=p.getX(D),I=p.getX(D+1),E=p.getX(D+2);l=$c(this,S,t,s,h,x,g,P,I,E),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=_.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),C=Math.min(p.count,y.start+y.count);for(let _=M,S=C;_<S;_+=3){const T=p.getX(_),w=p.getX(_+1),D=p.getX(_+2);l=$c(this,f,t,s,h,x,g,T,w,D),l&&(l.faceIndex=Math.floor(_/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let M=0,C=v.length;M<C;M++){const _=v[M],S=f[_.materialIndex],T=Math.max(_.start,y.start),w=Math.min(m.count,Math.min(_.start+_.count,y.start+y.count));for(let D=T,G=w;D<G;D+=3){const P=D,I=D+1,E=D+2;l=$c(this,S,t,s,h,x,g,P,I,E),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=_.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let _=M,S=C;_<S;_+=3){const T=_,w=_+1,D=_+2;l=$c(this,f,t,s,h,x,g,T,w,D),l&&(l.faceIndex=Math.floor(_/3),i.push(l))}}}}function Fb(r,t,i,s,l,c,f,p){let m;if(t.side===Kn?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,t.side===hs,p),m===null)return null;Jc.copy(p),Jc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Jc);return h<i.near||h>i.far?null:{distance:h,point:Jc.clone(),object:r}}function $c(r,t,i,s,l,c,f,p,m,h){r.getVertexPosition(p,Yc),r.getVertexPosition(m,Zc),r.getVertexPosition(h,Kc);const x=Fb(r,t,i,s,Yc,Zc,Kc,rv);if(x){const g=new ut;yi.getBarycoord(rv,Yc,Zc,Kc,g),l&&(x.uv=yi.getInterpolatedAttribute(l,p,m,h,g,new Ae)),c&&(x.uv1=yi.getInterpolatedAttribute(c,p,m,h,g,new Ae)),f&&(x.normal=yi.getInterpolatedAttribute(f,p,m,h,g,new ut),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const v={a:p,b:m,c:h,normal:new ut,materialIndex:0};yi.getNormal(Yc,Zc,Kc,v.normal),x.face=v,x.barycoord=g}return x}class Ib extends Pn{constructor(t=null,i=1,s=1,l,c,f,p,m,h=Cn,x=Cn,g,v){super(null,f,p,m,h,x,l,c,g,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mh=new ut,Bb=new ut,zb=new ye;class zs{constructor(t=new ut(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=mh.subVectors(s,i).cross(Bb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(mh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||zb.getNormalMatrix(t),l=this.coplanarPoint(mh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new _l,Hb=new Ae(.5,.5),tu=new ut;class zp{constructor(t=new zs,i=new zs,s=new zs,l=new zs,c=new zs,f=new zs){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=qi,s=!1){const l=this.planes,c=t.elements,f=c[0],p=c[1],m=c[2],h=c[3],x=c[4],g=c[5],v=c[6],y=c[7],M=c[8],C=c[9],_=c[10],S=c[11],T=c[12],w=c[13],D=c[14],G=c[15];if(l[0].setComponents(h-f,y-x,S-M,G-T).normalize(),l[1].setComponents(h+f,y+x,S+M,G+T).normalize(),l[2].setComponents(h+p,y+g,S+C,G+w).normalize(),l[3].setComponents(h-p,y-g,S-C,G-w).normalize(),s)l[4].setComponents(m,v,_,D).normalize(),l[5].setComponents(h-m,y-v,S-_,G-D).normalize();else if(l[4].setComponents(h-m,y-v,S-_,G-D).normalize(),i===qi)l[5].setComponents(h+m,y+v,S+_,G+D).normalize();else if(i===pl)l[5].setComponents(m,v,_,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){Fs.center.set(0,0,0);const i=Hb.distanceTo(t.center);return Fs.radius=.7071067811865476+i,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(tu.x=l.normal.x>0?t.max.x:t.min.x,tu.y=l.normal.y>0?t.max.y:t.min.y,tu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(tu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hp extends Xs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Su=new ut,yu=new ut,ov=new Je,sl=new Ip,eu=new _l,gh=new ut,lv=new ut;class Mx extends wn{constructor(t=new Fn,i=new Hp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Su.fromBufferAttribute(i,l-1),yu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Su.distanceTo(yu);t.setAttribute("lineDistance",new ui(s,1))}else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),eu.copy(s.boundingSphere),eu.applyMatrix4(l),eu.radius+=c,t.ray.intersectsSphere(eu)===!1)return;ov.copy(l).invert(),sl.copy(t.ray).applyMatrix4(ov);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,x=s.index,v=s.attributes.position;if(x!==null){const y=Math.max(0,f.start),M=Math.min(x.count,f.start+f.count);for(let C=y,_=M-1;C<_;C+=h){const S=x.getX(C),T=x.getX(C+1),w=nu(this,t,sl,m,S,T,C);w&&i.push(w)}if(this.isLineLoop){const C=x.getX(M-1),_=x.getX(y),S=nu(this,t,sl,m,C,_,M-1);S&&i.push(S)}}else{const y=Math.max(0,f.start),M=Math.min(v.count,f.start+f.count);for(let C=y,_=M-1;C<_;C+=h){const S=nu(this,t,sl,m,C,C+1,C);S&&i.push(S)}if(this.isLineLoop){const C=nu(this,t,sl,m,M-1,y,M-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function nu(r,t,i,s,l,c,f){const p=r.geometry.attributes.position;if(Su.fromBufferAttribute(p,l),yu.fromBufferAttribute(p,c),i.distanceSqToSegment(Su,yu,gh,lv)>s)return;gh.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(gh);if(!(h<t.near||h>t.far))return{distance:h,point:lv.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const cv=new ut,uv=new ut;class Gb extends Mx{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)cv.fromBufferAttribute(i,l),uv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+cv.distanceTo(uv);t.setAttribute("lineDistance",new ui(s,1))}else de("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xp extends Xs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const fv=new Je,Sp=new Ip,iu=new _l,au=new ut;class dv extends wn{constructor(t=new Fn,i=new xp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),iu.copy(s.boundingSphere),iu.applyMatrix4(l),iu.radius+=c,t.ray.intersectsSphere(iu)===!1)return;fv.copy(l).invert(),Sp.copy(t.ray).applyMatrix4(fv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,g=s.attributes.position;if(h!==null){const v=Math.max(0,f.start),y=Math.min(h.count,f.start+f.count);for(let M=v,C=y;M<C;M++){const _=h.getX(M);au.fromBufferAttribute(g,_),hv(au,_,m,l,t,i,this)}}else{const v=Math.max(0,f.start),y=Math.min(g.count,f.start+f.count);for(let M=v,C=y;M<C;M++)au.fromBufferAttribute(g,M),hv(au,M,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function hv(r,t,i,s,l,c,f){const p=Sp.distanceSqToPoint(r);if(p<i){const m=new ut;Sp.closestPointToPoint(r,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class bx extends Pn{constructor(t=[],i=js,s,l,c,f,p,m,h,x){super(t,i,s,l,c,f,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vb extends Pn{constructor(t,i,s,l,c,f,p,m,h){super(t,i,s,l,c,f,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ml extends Pn{constructor(t,i,s=Ki,l,c,f,p=Cn,m=Cn,h,x=Ra,g=1){if(x!==Ra&&x!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:g};super(v,l,c,f,p,m,x,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class kb extends ml{constructor(t,i=Ki,s=js,l,c,f=Cn,p=Cn,m,h=Ra){const x={width:t,height:t,depth:1},g=[x,x,x,x,x,x];super(t,t,i,s,l,c,f,p,m,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ex extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class vl extends Fn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],x=[],g=[];let v=0,y=0;M("z","y","x",-1,-1,s,i,t,f,c,0),M("z","y","x",1,-1,s,i,-t,f,c,1),M("x","z","y",1,1,t,s,i,l,f,2),M("x","z","y",1,-1,t,s,-i,l,f,3),M("x","y","z",1,-1,t,i,s,l,c,4),M("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ui(h,3)),this.setAttribute("normal",new ui(x,3)),this.setAttribute("uv",new ui(g,2));function M(C,_,S,T,w,D,G,P,I,E,O){const at=D/I,H=G/E,j=D/2,Z=G/2,Y=P/2,$=I+1,N=E+1;let F=0,tt=0;const ot=new ut;for(let xt=0;xt<N;xt++){const B=xt*H-Z;for(let V=0;V<$;V++){const et=V*at-j;ot[C]=et*T,ot[_]=B*w,ot[S]=Y,h.push(ot.x,ot.y,ot.z),ot[C]=0,ot[_]=0,ot[S]=P>0?1:-1,x.push(ot.x,ot.y,ot.z),g.push(V/I),g.push(1-xt/E),F+=1}}for(let xt=0;xt<E;xt++)for(let B=0;B<I;B++){const V=v+B+$*xt,et=v+B+$*(xt+1),K=v+(B+1)+$*(xt+1),ft=v+(B+1)+$*xt;m.push(V,et,ft),m.push(et,K,ft),tt+=6}p.addGroup(y,tt,O),y+=tt,v+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class xl extends Fn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,x=m+1,g=t/p,v=i/m,y=[],M=[],C=[],_=[];for(let S=0;S<x;S++){const T=S*v-f;for(let w=0;w<h;w++){const D=w*g-c;M.push(D,-T,0),C.push(0,0,1),_.push(w/p),_.push(1-S/m)}}for(let S=0;S<m;S++)for(let T=0;T<p;T++){const w=T+h*S,D=T+h*(S+1),G=T+1+h*(S+1),P=T+1+h*S;y.push(w,D,P),y.push(D,G,P)}this.setIndex(y),this.setAttribute("position",new ui(M,3)),this.setAttribute("normal",new ui(C,3)),this.setAttribute("uv",new ui(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.width,t.height,t.widthSegments,t.heightSegments)}}function to(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function kn(r){const t={};for(let i=0;i<r.length;i++){const s=to(r[i]);for(const l in s)t[l]=s[l]}return t}function jb(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Tx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const Xb={clone:to,merge:kn};var Wb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Xs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wb,this.fragmentShader=qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=to(t.uniforms),this.uniformsGroups=jb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Yb extends Ji{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zb extends Xs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kb extends Xs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ax extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const _h=new Je,pv=new ut,mv=new ut;class Qb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zp,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;pv.setFromMatrixPosition(t.matrixWorld),i.position.copy(pv),mv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(mv),i.updateMatrixWorld(),_h.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===pl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(_h)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const su=new ut,ru=new no,Gi=new ut;class Rx extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(su,ru,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(su,ru,Gi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(su,ru,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(su,ru,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new ut,gv=new Ae,_v=new Ae;class li extends Rx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=vp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vp*2*Math.atan(Math.tan(Xd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,i){return this.getViewBounds(t,gv,_v),i.subVectors(_v,gv)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Xd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/h,l*=f.width/m,s*=f.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Jb extends Qb{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0}}class $b extends Ax{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Jb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Cx extends Rx{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class tE extends Ax{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const kr=-90,jr=1;class eE extends wn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(kr,jr,t,i);l.layers=this.layers,this.add(l);const c=new li(kr,jr,t,i);c.layers=this.layers,this.add(c);const f=new li(kr,jr,t,i);f.layers=this.layers,this.add(f);const p=new li(kr,jr,t,i);p.layers=this.layers,this.add(p);const m=new li(kr,jr,t,i);m.layers=this.layers,this.add(m);const h=new li(kr,jr,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(t===qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===pl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,x]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(g,v,y),t.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class nE extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class iE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,de("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class aE extends Gb{constructor(t=10,i=10,s=4473924,l=8947848){s=new be(s),l=new be(l);const c=i/2,f=t/i,p=t/2,m=[],h=[];for(let v=0,y=0,M=-p;v<=i;v++,M+=f){m.push(-p,0,M,p,0,M),m.push(M,0,-p,M,0,p);const C=v===c?s:l;C.toArray(h,y),y+=3,C.toArray(h,y),y+=3,C.toArray(h,y),y+=3,C.toArray(h,y),y+=3}const x=new Fn;x.setAttribute("position",new ui(m,3)),x.setAttribute("color",new ui(h,3));const g=new Hp({vertexColors:!0,toneMapped:!1});super(x,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function vv(r,t,i,s){const l=sE(s);switch(i){case fx:return r*t;case hx:return r*t/l.components*l.byteLength;case Dp:return r*t/l.components*l.byteLength;case Jr:return r*t*2/l.components*l.byteLength;case Np:return r*t*2/l.components*l.byteLength;case dx:return r*t*3/l.components*l.byteLength;case Oi:return r*t*4/l.components*l.byteLength;case Up:return r*t*4/l.components*l.byteLength;case uu:case fu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case du:case hu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hh:case Vh:return Math.max(r,16)*Math.max(t,8)/4;case zh:case Gh:return Math.max(r,8)*Math.max(t,8)/2;case kh:case jh:case Wh:case qh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Xh:case Yh:case Zh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Kh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Jh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case $h:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case tp:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ep:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case np:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ip:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ap:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case sp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case rp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case op:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case lp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case cp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case up:case fp:case dp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case hp:case pp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case mp:case gp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sE(r){switch(r){case ci:case ox:return{byteLength:1,components:1};case dl:case lx:case Aa:return{byteLength:2,components:1};case Cp:case wp:return{byteLength:2,components:4};case Ki:case Rp:case Wi:return{byteLength:4,components:1};case cx:case ux:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tp}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wx(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function rE(r){const t=new WeakMap;function i(p,m){const h=p.array,x=p.usage,g=h.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,h,x),p.onUploadCallback();let y;if(h instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=r.SHORT;else if(h instanceof Uint32Array)y=r.UNSIGNED_INT;else if(h instanceof Int32Array)y=r.INT;else if(h instanceof Int8Array)y=r.BYTE;else if(h instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:g}}function s(p,m,h){const x=m.array,g=m.updateRanges;if(r.bindBuffer(h,p),g.length===0)r.bufferSubData(h,0,x);else{g.sort((y,M)=>y.start-M.start);let v=0;for(let y=1;y<g.length;y++){const M=g[v],C=g[y];C.start<=M.start+M.count+1?M.count=Math.max(M.count,C.start+C.count-M.start):(++v,g[v]=C)}g.length=v+1;for(let y=0,M=g.length;y<M;y++){const C=g[y];r.bufferSubData(h,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=t.get(p);(!x||x.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var oE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_E=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,SE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,RE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,CE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,DE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,NE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,UE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,LE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IE="gl_FragColor = linearToOutputTexel( gl_FragColor );",BE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,HE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,GE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,VE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$E=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,t1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,s1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,r1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,l1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,b1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,w1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,D1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,F1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,W1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,K1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_T=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ST=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,NT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Me={alphahash_fragment:oE,alphahash_pars_fragment:lE,alphamap_fragment:cE,alphamap_pars_fragment:uE,alphatest_fragment:fE,alphatest_pars_fragment:dE,aomap_fragment:hE,aomap_pars_fragment:pE,batching_pars_vertex:mE,batching_vertex:gE,begin_vertex:_E,beginnormal_vertex:vE,bsdfs:xE,iridescence_fragment:SE,bumpmap_pars_fragment:yE,clipping_planes_fragment:ME,clipping_planes_pars_fragment:bE,clipping_planes_pars_vertex:EE,clipping_planes_vertex:TE,color_fragment:AE,color_pars_fragment:RE,color_pars_vertex:CE,color_vertex:wE,common:DE,cube_uv_reflection_fragment:NE,defaultnormal_vertex:UE,displacementmap_pars_vertex:LE,displacementmap_vertex:OE,emissivemap_fragment:PE,emissivemap_pars_fragment:FE,colorspace_fragment:IE,colorspace_pars_fragment:BE,envmap_fragment:zE,envmap_common_pars_fragment:HE,envmap_pars_fragment:GE,envmap_pars_vertex:VE,envmap_physical_pars_fragment:$E,envmap_vertex:kE,fog_vertex:jE,fog_pars_vertex:XE,fog_fragment:WE,fog_pars_fragment:qE,gradientmap_pars_fragment:YE,lightmap_pars_fragment:ZE,lights_lambert_fragment:KE,lights_lambert_pars_fragment:QE,lights_pars_begin:JE,lights_toon_fragment:t1,lights_toon_pars_fragment:e1,lights_phong_fragment:n1,lights_phong_pars_fragment:i1,lights_physical_fragment:a1,lights_physical_pars_fragment:s1,lights_fragment_begin:r1,lights_fragment_maps:o1,lights_fragment_end:l1,logdepthbuf_fragment:c1,logdepthbuf_pars_fragment:u1,logdepthbuf_pars_vertex:f1,logdepthbuf_vertex:d1,map_fragment:h1,map_pars_fragment:p1,map_particle_fragment:m1,map_particle_pars_fragment:g1,metalnessmap_fragment:_1,metalnessmap_pars_fragment:v1,morphinstance_vertex:x1,morphcolor_vertex:S1,morphnormal_vertex:y1,morphtarget_pars_vertex:M1,morphtarget_vertex:b1,normal_fragment_begin:E1,normal_fragment_maps:T1,normal_pars_fragment:A1,normal_pars_vertex:R1,normal_vertex:C1,normalmap_pars_fragment:w1,clearcoat_normal_fragment_begin:D1,clearcoat_normal_fragment_maps:N1,clearcoat_pars_fragment:U1,iridescence_pars_fragment:L1,opaque_fragment:O1,packing:P1,premultiplied_alpha_fragment:F1,project_vertex:I1,dithering_fragment:B1,dithering_pars_fragment:z1,roughnessmap_fragment:H1,roughnessmap_pars_fragment:G1,shadowmap_pars_fragment:V1,shadowmap_pars_vertex:k1,shadowmap_vertex:j1,shadowmask_pars_fragment:X1,skinbase_vertex:W1,skinning_pars_vertex:q1,skinning_vertex:Y1,skinnormal_vertex:Z1,specularmap_fragment:K1,specularmap_pars_fragment:Q1,tonemapping_fragment:J1,tonemapping_pars_fragment:$1,transmission_fragment:tT,transmission_pars_fragment:eT,uv_pars_fragment:nT,uv_pars_vertex:iT,uv_vertex:aT,worldpos_vertex:sT,background_vert:rT,background_frag:oT,backgroundCube_vert:lT,backgroundCube_frag:cT,cube_vert:uT,cube_frag:fT,depth_vert:dT,depth_frag:hT,distance_vert:pT,distance_frag:mT,equirect_vert:gT,equirect_frag:_T,linedashed_vert:vT,linedashed_frag:xT,meshbasic_vert:ST,meshbasic_frag:yT,meshlambert_vert:MT,meshlambert_frag:bT,meshmatcap_vert:ET,meshmatcap_frag:TT,meshnormal_vert:AT,meshnormal_frag:RT,meshphong_vert:CT,meshphong_frag:wT,meshphysical_vert:DT,meshphysical_frag:NT,meshtoon_vert:UT,meshtoon_frag:LT,points_vert:OT,points_frag:PT,shadow_vert:FT,shadow_frag:IT,sprite_vert:BT,sprite_frag:zT},jt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},ki={basic:{uniforms:kn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:kn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:kn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:kn([jt.common,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.roughnessmap,jt.metalnessmap,jt.fog,jt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:kn([jt.common,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.gradientmap,jt.fog,jt.lights,{emissive:{value:new be(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:kn([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:kn([jt.points,jt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:kn([jt.common,jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:kn([jt.common,jt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:kn([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:kn([jt.sprite,jt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distance:{uniforms:kn([jt.common,jt.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distance_vert,fragmentShader:Me.distance_frag},shadow:{uniforms:kn([jt.lights,jt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};ki.physical={uniforms:kn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const ou={r:0,b:0,g:0},Is=new Ca,HT=new Je;function GT(r,t,i,s,l,c){const f=new be(0);let p=l===!0?0:1,m,h,x=null,g=0,v=null;function y(T){let w=T.isScene===!0?T.background:null;if(w&&w.isTexture){const D=T.backgroundBlurriness>0;w=t.get(w,D)}return w}function M(T){let w=!1;const D=y(T);D===null?_(f,p):D&&D.isColor&&(_(D,1),w=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,c):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(T,w){const D=y(w);D&&(D.isCubeTexture||D.mapping===Au)?(h===void 0&&(h=new Qi(new vl(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:to(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(G,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Is.copy(w.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(HT.makeRotationFromEuler(Is)),h.material.toneMapped=Le.getTransfer(D.colorSpace)!==ke,(x!==D||g!==D.version||v!==r.toneMapping)&&(h.material.needsUpdate=!0,x=D,g=D.version,v=r.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Qi(new xl(2,2),new Ji({name:"BackgroundMaterial",uniforms:to(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=Le.getTransfer(D.colorSpace)!==ke,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(x!==D||g!==D.version||v!==r.toneMapping)&&(m.material.needsUpdate=!0,x=D,g=D.version,v=r.toneMapping),m.layers.enableAll(),T.unshift(m,m.geometry,m.material,0,0,null))}function _(T,w){T.getRGB(ou,Tx(r)),i.buffers.color.setClear(ou.r,ou.g,ou.b,w,c)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(T,w=1){f.set(T),p=w,_(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(T){p=T,_(f,p)},render:M,addToRenderList:C,dispose:S}}function VT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function p(H,j,Z,Y,$){let N=!1;const F=g(H,Y,Z,j);c!==F&&(c=F,h(c.object)),N=y(H,Y,Z,$),N&&M(H,Y,Z,$),$!==null&&t.update($,r.ELEMENT_ARRAY_BUFFER),(N||f)&&(f=!1,D(H,j,Z,Y),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function m(){return r.createVertexArray()}function h(H){return r.bindVertexArray(H)}function x(H){return r.deleteVertexArray(H)}function g(H,j,Z,Y){const $=Y.wireframe===!0;let N=s[j.id];N===void 0&&(N={},s[j.id]=N);const F=H.isInstancedMesh===!0?H.id:0;let tt=N[F];tt===void 0&&(tt={},N[F]=tt);let ot=tt[Z.id];ot===void 0&&(ot={},tt[Z.id]=ot);let xt=ot[$];return xt===void 0&&(xt=v(m()),ot[$]=xt),xt}function v(H){const j=[],Z=[],Y=[];for(let $=0;$<i;$++)j[$]=0,Z[$]=0,Y[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:Z,attributeDivisors:Y,object:H,attributes:{},index:null}}function y(H,j,Z,Y){const $=c.attributes,N=j.attributes;let F=0;const tt=Z.getAttributes();for(const ot in tt)if(tt[ot].location>=0){const B=$[ot];let V=N[ot];if(V===void 0&&(ot==="instanceMatrix"&&H.instanceMatrix&&(V=H.instanceMatrix),ot==="instanceColor"&&H.instanceColor&&(V=H.instanceColor)),B===void 0||B.attribute!==V||V&&B.data!==V.data)return!0;F++}return c.attributesNum!==F||c.index!==Y}function M(H,j,Z,Y){const $={},N=j.attributes;let F=0;const tt=Z.getAttributes();for(const ot in tt)if(tt[ot].location>=0){let B=N[ot];B===void 0&&(ot==="instanceMatrix"&&H.instanceMatrix&&(B=H.instanceMatrix),ot==="instanceColor"&&H.instanceColor&&(B=H.instanceColor));const V={};V.attribute=B,B&&B.data&&(V.data=B.data),$[ot]=V,F++}c.attributes=$,c.attributesNum=F,c.index=Y}function C(){const H=c.newAttributes;for(let j=0,Z=H.length;j<Z;j++)H[j]=0}function _(H){S(H,0)}function S(H,j){const Z=c.newAttributes,Y=c.enabledAttributes,$=c.attributeDivisors;Z[H]=1,Y[H]===0&&(r.enableVertexAttribArray(H),Y[H]=1),$[H]!==j&&(r.vertexAttribDivisor(H,j),$[H]=j)}function T(){const H=c.newAttributes,j=c.enabledAttributes;for(let Z=0,Y=j.length;Z<Y;Z++)j[Z]!==H[Z]&&(r.disableVertexAttribArray(Z),j[Z]=0)}function w(H,j,Z,Y,$,N,F){F===!0?r.vertexAttribIPointer(H,j,Z,$,N):r.vertexAttribPointer(H,j,Z,Y,$,N)}function D(H,j,Z,Y){C();const $=Y.attributes,N=Z.getAttributes(),F=j.defaultAttributeValues;for(const tt in N){const ot=N[tt];if(ot.location>=0){let xt=$[tt];if(xt===void 0&&(tt==="instanceMatrix"&&H.instanceMatrix&&(xt=H.instanceMatrix),tt==="instanceColor"&&H.instanceColor&&(xt=H.instanceColor)),xt!==void 0){const B=xt.normalized,V=xt.itemSize,et=t.get(xt);if(et===void 0)continue;const K=et.buffer,ft=et.type,W=et.bytesPerElement,rt=ft===r.INT||ft===r.UNSIGNED_INT||xt.gpuType===Rp;if(xt.isInterleavedBufferAttribute){const _t=xt.data,J=_t.stride,At=xt.offset;if(_t.isInstancedInterleavedBuffer){for(let Dt=0;Dt<ot.locationSize;Dt++)S(ot.location+Dt,_t.meshPerAttribute);H.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Dt=0;Dt<ot.locationSize;Dt++)_(ot.location+Dt);r.bindBuffer(r.ARRAY_BUFFER,K);for(let Dt=0;Dt<ot.locationSize;Dt++)w(ot.location+Dt,V/ot.locationSize,ft,B,J*W,(At+V/ot.locationSize*Dt)*W,rt)}else{if(xt.isInstancedBufferAttribute){for(let _t=0;_t<ot.locationSize;_t++)S(ot.location+_t,xt.meshPerAttribute);H.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let _t=0;_t<ot.locationSize;_t++)_(ot.location+_t);r.bindBuffer(r.ARRAY_BUFFER,K);for(let _t=0;_t<ot.locationSize;_t++)w(ot.location+_t,V/ot.locationSize,ft,B,V*W,V/ot.locationSize*_t*W,rt)}}else if(F!==void 0){const B=F[tt];if(B!==void 0)switch(B.length){case 2:r.vertexAttrib2fv(ot.location,B);break;case 3:r.vertexAttrib3fv(ot.location,B);break;case 4:r.vertexAttrib4fv(ot.location,B);break;default:r.vertexAttrib1fv(ot.location,B)}}}}T()}function G(){O();for(const H in s){const j=s[H];for(const Z in j){const Y=j[Z];for(const $ in Y){const N=Y[$];for(const F in N)x(N[F].object),delete N[F];delete Y[$]}}delete s[H]}}function P(H){if(s[H.id]===void 0)return;const j=s[H.id];for(const Z in j){const Y=j[Z];for(const $ in Y){const N=Y[$];for(const F in N)x(N[F].object),delete N[F];delete Y[$]}}delete s[H.id]}function I(H){for(const j in s){const Z=s[j];for(const Y in Z){const $=Z[Y];if($[H.id]===void 0)continue;const N=$[H.id];for(const F in N)x(N[F].object),delete N[F];delete $[H.id]}}}function E(H){for(const j in s){const Z=s[j],Y=H.isInstancedMesh===!0?H.id:0,$=Z[Y];if($!==void 0){for(const N in $){const F=$[N];for(const tt in F)x(F[tt].object),delete F[tt];delete $[N]}delete Z[Y],Object.keys(Z).length===0&&delete s[j]}}}function O(){at(),f=!0,c!==l&&(c=l,h(c.object))}function at(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:at,dispose:G,releaseStatesOfGeometry:P,releaseStatesOfObject:E,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:_,disableUnusedAttributes:T}}function kT(r,t,i){let s;function l(h){s=h}function c(h,x){r.drawArrays(s,h,x),i.update(x,s,1)}function f(h,x,g){g!==0&&(r.drawArraysInstanced(s,h,x,g),i.update(x,s,g))}function p(h,x,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,x,0,g);let y=0;for(let M=0;M<g;M++)y+=x[M];i.update(y,s,1)}function m(h,x,g,v){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)f(h[M],x[M],v[M]);else{y.multiDrawArraysInstancedWEBGL(s,h,0,x,0,v,0,g);let M=0;for(let C=0;C<g;C++)M+=x[C]*v[C];i.update(M,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function jT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Oi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const E=I===Aa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ci&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Wi&&!E)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&(de("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:C,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:D,maxSamples:G,samples:P}}function XT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new zs,p=new ye,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||s!==0||l;return l=v,s=g.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){i=x(g,v,0)},this.setState=function(g,v,y){const M=g.clippingPlanes,C=g.clipIntersection,_=g.clipShadows,S=r.get(g);if(!l||M===null||M.length===0||c&&!_)c?x(null):h();else{const T=c?0:s,w=T*4;let D=S.clippingState||null;m.value=D,D=x(M,v,w,y);for(let G=0;G!==w;++G)D[G]=i[G];S.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=T}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(g,v,y,M){const C=g!==null?g.length:0;let _=null;if(C!==0){if(_=m.value,M!==!0||_===null){const S=y+C*4,T=v.matrixWorldInverse;p.getNormalMatrix(T),(_===null||_.length<S)&&(_=new Float32Array(S));for(let w=0,D=y;w!==C;++w,D+=4)f.copy(g[w]).applyMatrix4(T,p),f.normal.toArray(_,D),_[D+3]=f.constant}m.value=_,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,_}}const us=4,xv=[.125,.215,.35,.446,.526,.582],Gs=20,WT=256,rl=new Cx,Sv=new be;let vh=null,xh=0,Sh=0,yh=!1;const qT=new ut;class yv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=qT}=c;vh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vh,xh,Sh),this._renderer.xr.enabled=yh,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===js||t.mapping===Qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:Aa,format:Oi,colorSpace:$r,depthBuffer:!1},l=Mv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=YT(c)),this._blurMaterial=KT(c,t,i),this._ggxMaterial=ZT(c,t,i)}return l}_compileMaterial(t){const i=new Qi(new Fn,t);this._renderer.compile(i,rl)}_sceneToCubeUV(t,i,s,l,c){const m=new li(90,1,i,s),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Sv),g.toneMapping=Yi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qi(new vl,new Bp({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,_=C.material;let S=!1;const T=t.background;T?T.isColor&&(_.color.copy(T),t.background=null,S=!0):(_.color.copy(Sv),S=!0);for(let w=0;w<6;w++){const D=w%3;D===0?(m.up.set(0,h[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[w],c.y,c.z)):D===1?(m.up.set(0,0,h[w]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[w],c.z)):(m.up.set(0,h[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[w]));const G=this._cubeSize;Xr(l,D*G,w>2?G:0,G,G),g.setRenderTarget(l),S&&g.render(C,m),g.render(t,m)}g.toneMapping=y,g.autoClear=v,t.background=T}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===js||t.mapping===Qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Xr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,rl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,h=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(h*h-x*x),v=0+h*1.25,y=g*v,{_lodMax:M}=this,C=this._sizeLods[s],_=3*C*(s>M-us?s-M+us:0),S=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=M-i,Xr(c,_,S,3*C,2*C),l.setRenderTarget(c),l.render(p,rl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-s,Xr(t,_,S,3*C,2*C),l.setRenderTarget(t),l.render(p,rl)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=h;const v=h.uniforms,y=this._sizeLods[s]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Gs-1),C=c/M,_=isFinite(c)?1+Math.floor(x*C):Gs;_>Gs&&de(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Gs}`);const S=[];let T=0;for(let I=0;I<Gs;++I){const E=I/C,O=Math.exp(-E*E/2);S.push(O),I===0?T+=O:I<_&&(T+=2*O)}for(let I=0;I<S.length;I++)S[I]=S[I]/T;v.envMap.value=t.texture,v.samples.value=_,v.weights.value=S,v.latitudinal.value=f==="latitudinal",p&&(v.poleAxis.value=p);const{_lodMax:w}=this;v.dTheta.value=M,v.mipInt.value=w-s;const D=this._sizeLods[l],G=3*D*(l>w-us?l-w+us:0),P=4*(this._cubeSize-D);Xr(i,G,P,3*D,2*D),m.setRenderTarget(i),m.render(g,rl)}}function YT(r){const t=[],i=[],s=[];let l=r;const c=r-us+1+xv.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);t.push(p);let m=1/p;f>r-us?m=xv[f-r+us-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),x=-h,g=1+h,v=[x,x,g,x,g,g,x,x,g,g,x,g],y=6,M=6,C=3,_=2,S=1,T=new Float32Array(C*M*y),w=new Float32Array(_*M*y),D=new Float32Array(S*M*y);for(let P=0;P<y;P++){const I=P%3*2/3-1,E=P>2?0:-1,O=[I,E,0,I+2/3,E,0,I+2/3,E+1,0,I,E,0,I+2/3,E+1,0,I,E+1,0];T.set(O,C*M*P),w.set(v,_*M*P);const at=[P,P,P,P,P,P];D.set(at,S*M*P)}const G=new Fn;G.setAttribute("position",new Ln(T,C)),G.setAttribute("uv",new Ln(w,_)),G.setAttribute("faceIndex",new Ln(D,S)),s.push(new Qi(G,null)),l>us&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Mv(r,t,i){const s=new Zi(r,t,i);return s.texture.mapping=Au,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Xr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function ZT(r,t,i){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ru(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function KT(r,t,i){const s=new Float32Array(Gs),l=new ut(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function bv(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Ev(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Dx extends Zi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new bx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new vl(5,5,5),c=new Ji({name:"CubemapFromEquirect",uniforms:to(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Ea});c.uniforms.tEquirect.value=i;const f=new Qi(l,c),p=i.minFilter;return i.minFilter===Vs&&(i.minFilter=On),new eE(1,10,this).update(t,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function QT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(v,y=!1){return v==null?null:y?f(v):c(v)}function c(v){if(v&&v.isTexture){const y=v.mapping;if(y===Vd||y===kd)if(t.has(v)){const M=t.get(v).texture;return p(M,v.mapping)}else{const M=v.image;if(M&&M.height>0){const C=new Dx(M.height);return C.fromEquirectangularTexture(r,v),t.set(v,C),v.addEventListener("dispose",h),p(C.texture,v.mapping)}else return null}}return v}function f(v){if(v&&v.isTexture){const y=v.mapping,M=y===Vd||y===kd,C=y===js||y===Qr;if(M||C){let _=i.get(v);const S=_!==void 0?_.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return s===null&&(s=new yv(r)),_=M?s.fromEquirectangular(v,_):s.fromCubemap(v,_),_.texture.pmremVersion=v.pmremVersion,i.set(v,_),_.texture;if(_!==void 0)return _.texture;{const T=v.image;return M&&T&&T.height>0||C&&T&&m(T)?(s===null&&(s=new yv(r)),_=M?s.fromEquirectangular(v):s.fromCubemap(v),_.texture.pmremVersion=v.pmremVersion,i.set(v,_),v.addEventListener("dispose",x),_.texture):null}}}return v}function p(v,y){return y===Vd?v.mapping=js:y===kd&&(v.mapping=Qr),v}function m(v){let y=0;const M=6;for(let C=0;C<M;C++)v[C]!==void 0&&y++;return y===M}function h(v){const y=v.target;y.removeEventListener("dispose",h);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function x(v){const y=v.target;y.removeEventListener("dispose",x);const M=i.get(y);M!==void 0&&(i.delete(y),M.dispose())}function g(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:g}}function JT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&vu("WebGLRenderer: "+s+" extension not supported."),l}}}function $T(r,t,i,s){const l={},c=new WeakMap;function f(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const M in v.attributes)t.remove(v.attributes[M]);v.removeEventListener("dispose",f),delete l[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function p(g,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(g){const v=g.attributes;for(const y in v)t.update(v[y],r.ARRAY_BUFFER)}function h(g){const v=[],y=g.index,M=g.attributes.position;let C=0;if(M===void 0)return;if(y!==null){const T=y.array;C=y.version;for(let w=0,D=T.length;w<D;w+=3){const G=T[w+0],P=T[w+1],I=T[w+2];v.push(G,P,P,I,I,G)}}else{const T=M.array;C=M.version;for(let w=0,D=T.length/3-1;w<D;w+=3){const G=w+0,P=w+1,I=w+2;v.push(G,P,P,I,I,G)}}const _=new(M.count>=65535?xx:vx)(v,1);_.version=C;const S=c.get(g);S&&t.remove(S),c.set(g,_)}function x(g){const v=c.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&h(g)}else h(g);return c.get(g)}return{get:p,update:m,getWireframeAttribute:x}}function tA(r,t,i){let s;function l(v){s=v}let c,f;function p(v){c=v.type,f=v.bytesPerElement}function m(v,y){r.drawElements(s,y,c,v*f),i.update(y,s,1)}function h(v,y,M){M!==0&&(r.drawElementsInstanced(s,y,c,v*f,M),i.update(y,s,M))}function x(v,y,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,v,0,M);let _=0;for(let S=0;S<M;S++)_+=y[S];i.update(_,s,1)}function g(v,y,M,C){if(M===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<v.length;S++)h(v[S]/f,y[S],C[S]);else{_.multiDrawElementsInstancedWEBGL(s,y,0,c,v,0,C,0,M);let S=0;for(let T=0;T<M;T++)S+=y[T]*C[T];i.update(S,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function eA(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ue("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function nA(r,t,i){const s=new WeakMap,l=new rn;function c(f,p,m){const h=f.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,g=x!==void 0?x.length:0;let v=s.get(p);if(v===void 0||v.count!==g){let at=function(){E.dispose(),s.delete(p),p.removeEventListener("dispose",at)};var y=at;v!==void 0&&v.texture.dispose();const M=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,_=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],T=p.morphAttributes.normal||[],w=p.morphAttributes.color||[];let D=0;M===!0&&(D=1),C===!0&&(D=2),_===!0&&(D=3);let G=p.attributes.position.count*D,P=1;G>t.maxTextureSize&&(P=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const I=new Float32Array(G*P*4*g),E=new mx(I,G,P,g);E.type=Wi,E.needsUpdate=!0;const O=D*4;for(let H=0;H<g;H++){const j=S[H],Z=T[H],Y=w[H],$=G*P*4*H;for(let N=0;N<j.count;N++){const F=N*O;M===!0&&(l.fromBufferAttribute(j,N),I[$+F+0]=l.x,I[$+F+1]=l.y,I[$+F+2]=l.z,I[$+F+3]=0),C===!0&&(l.fromBufferAttribute(Z,N),I[$+F+4]=l.x,I[$+F+5]=l.y,I[$+F+6]=l.z,I[$+F+7]=0),_===!0&&(l.fromBufferAttribute(Y,N),I[$+F+8]=l.x,I[$+F+9]=l.y,I[$+F+10]=l.z,I[$+F+11]=Y.itemSize===4?l.w:1)}}v={count:g,texture:E,size:new Ae(G,P)},s.set(p,v),p.addEventListener("dispose",at)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let M=0;for(let _=0;_<h.length;_++)M+=h[_];const C=p.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function iA(r,t,i,s,l){let c=new WeakMap;function f(h){const x=l.render.frame,g=h.geometry,v=t.get(h,g);if(c.get(v)!==x&&(t.update(v),c.set(v,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==x&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,x))),h.isSkinnedMesh){const y=h.skeleton;c.get(y)!==x&&(y.update(),c.set(y,x))}return v}function p(){c=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:f,dispose:p}}const aA={[tx]:"LINEAR_TONE_MAPPING",[ex]:"REINHARD_TONE_MAPPING",[nx]:"CINEON_TONE_MAPPING",[Ap]:"ACES_FILMIC_TONE_MAPPING",[ax]:"AGX_TONE_MAPPING",[sx]:"NEUTRAL_TONE_MAPPING",[ix]:"CUSTOM_TONE_MAPPING"};function sA(r,t,i,s,l){const c=new Zi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Zi(t,i,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),p=new Fn;p.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ui([0,2,0,0,2,0],2));const m=new Yb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Qi(p,m),x=new Cx(-1,1,1,-1,0,1);let g=null,v=null,y=!1,M,C=null,_=[],S=!1;this.setSize=function(T,w){c.setSize(T,w),f.setSize(T,w);for(let D=0;D<_.length;D++){const G=_[D];G.setSize&&G.setSize(T,w)}},this.setEffects=function(T){_=T,S=_.length>0&&_[0].isRenderPass===!0;const w=c.width,D=c.height;for(let G=0;G<_.length;G++){const P=_[G];P.setSize&&P.setSize(w,D)}},this.begin=function(T,w){if(y||T.toneMapping===Yi&&_.length===0)return!1;if(C=w,w!==null){const D=w.width,G=w.height;(c.width!==D||c.height!==G)&&this.setSize(D,G)}return S===!1&&T.setRenderTarget(c),M=T.toneMapping,T.toneMapping=Yi,!0},this.hasRenderPass=function(){return S},this.end=function(T,w){T.toneMapping=M,y=!0;let D=c,G=f;for(let P=0;P<_.length;P++){const I=_[P];if(I.enabled!==!1&&(I.render(T,G,D,w),I.needsSwap!==!1)){const E=D;D=G,G=E}}if(g!==T.outputColorSpace||v!==T.toneMapping){g=T.outputColorSpace,v=T.toneMapping,m.defines={},Le.getTransfer(g)===ke&&(m.defines.SRGB_TRANSFER="");const P=aA[v];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,T.setRenderTarget(C),T.render(h,x),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const Nx=new Pn,yp=new ml(1,1),Ux=new mx,Lx=new yb,Ox=new bx,Tv=[],Av=[],Rv=new Float32Array(16),Cv=new Float32Array(9),wv=new Float32Array(4);function io(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Tv[l];if(c===void 0&&(c=new Float32Array(l),Tv[l]=c),t!==0){s.toArray(c,0);for(let f=1,p=0;f!==t;++f)p+=i,r[f].toArray(c,p)}return c}function Sn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function yn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Cu(r,t){let i=Av[t];i===void 0&&(i=new Int32Array(t),Av[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function rA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function oA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2fv(this.addr,t),yn(i,t)}}function lA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Sn(i,t))return;r.uniform3fv(this.addr,t),yn(i,t)}}function cA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4fv(this.addr,t),yn(i,t)}}function uA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;wv.set(s),r.uniformMatrix2fv(this.addr,!1,wv),yn(i,s)}}function fA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Cv.set(s),r.uniformMatrix3fv(this.addr,!1,Cv),yn(i,s)}}function dA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Rv.set(s),r.uniformMatrix4fv(this.addr,!1,Rv),yn(i,s)}}function hA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function pA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2iv(this.addr,t),yn(i,t)}}function mA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;r.uniform3iv(this.addr,t),yn(i,t)}}function gA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4iv(this.addr,t),yn(i,t)}}function _A(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function vA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2uiv(this.addr,t),yn(i,t)}}function xA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;r.uniform3uiv(this.addr,t),yn(i,t)}}function SA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4uiv(this.addr,t),yn(i,t)}}function yA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(yp.compareFunction=i.isReversedDepthBuffer()?Op:Lp,c=yp):c=Nx,i.setTexture2D(t||c,l)}function MA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Lx,l)}function bA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Ox,l)}function EA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Ux,l)}function TA(r){switch(r){case 5126:return rA;case 35664:return oA;case 35665:return lA;case 35666:return cA;case 35674:return uA;case 35675:return fA;case 35676:return dA;case 5124:case 35670:return hA;case 35667:case 35671:return pA;case 35668:case 35672:return mA;case 35669:case 35673:return gA;case 5125:return _A;case 36294:return vA;case 36295:return xA;case 36296:return SA;case 35678:case 36198:case 36298:case 36306:case 35682:return yA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return bA;case 36289:case 36303:case 36311:case 36292:return EA}}function AA(r,t){r.uniform1fv(this.addr,t)}function RA(r,t){const i=io(t,this.size,2);r.uniform2fv(this.addr,i)}function CA(r,t){const i=io(t,this.size,3);r.uniform3fv(this.addr,i)}function wA(r,t){const i=io(t,this.size,4);r.uniform4fv(this.addr,i)}function DA(r,t){const i=io(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function NA(r,t){const i=io(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function UA(r,t){const i=io(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function LA(r,t){r.uniform1iv(this.addr,t)}function OA(r,t){r.uniform2iv(this.addr,t)}function PA(r,t){r.uniform3iv(this.addr,t)}function FA(r,t){r.uniform4iv(this.addr,t)}function IA(r,t){r.uniform1uiv(this.addr,t)}function BA(r,t){r.uniform2uiv(this.addr,t)}function zA(r,t){r.uniform3uiv(this.addr,t)}function HA(r,t){r.uniform4uiv(this.addr,t)}function GA(r,t,i){const s=this.cache,l=t.length,c=Cu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=yp:f=Nx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||f,c[p])}function VA(r,t,i){const s=this.cache,l=t.length,c=Cu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Lx,c[f])}function kA(r,t,i){const s=this.cache,l=t.length,c=Cu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Ox,c[f])}function jA(r,t,i){const s=this.cache,l=t.length,c=Cu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Ux,c[f])}function XA(r){switch(r){case 5126:return AA;case 35664:return RA;case 35665:return CA;case 35666:return wA;case 35674:return DA;case 35675:return NA;case 35676:return UA;case 5124:case 35670:return LA;case 35667:case 35671:return OA;case 35668:case 35672:return PA;case 35669:case 35673:return FA;case 5125:return IA;case 36294:return BA;case 36295:return zA;case 36296:return HA;case 35678:case 36198:case 36298:case 36306:case 35682:return GA;case 35679:case 36299:case 36307:return VA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return jA}}class WA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=TA(i.type)}}class qA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=XA(i.type)}}class YA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const Mh=/(\w+)(\])?(\[|\.)?/g;function Dv(r,t){r.seq.push(t),r.map[t.id]=t}function ZA(r,t,i){const s=r.name,l=s.length;for(Mh.lastIndex=0;;){const c=Mh.exec(s),f=Mh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){Dv(i,h===void 0?new WA(p,r,t):new qA(p,r,t));break}else{let g=i.map[p];g===void 0&&(g=new YA(p),Dv(i,g)),i=g}}}class pu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=t.getActiveUniform(i,f),m=t.getUniformLocation(i,p.name);ZA(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Nv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const KA=37297;let QA=0;function JA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===t?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const Uv=new ye;function $A(r){Le._getMatrix(Uv,Le.workingColorSpace,r);const t=`mat3( ${Uv.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(r)){case mu:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Lv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+JA(r.getShaderSource(t),p)}else return c}function tR(r,t){const i=$A(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const eR={[tx]:"Linear",[ex]:"Reinhard",[nx]:"Cineon",[Ap]:"ACESFilmic",[ax]:"AgX",[sx]:"Neutral",[ix]:"Custom"};function nR(r,t){const i=eR[t];return i===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const lu=new ut;function iR(){Le.getLuminanceCoefficients(lu);const r=lu.x.toFixed(4),t=lu.y.toFixed(4),i=lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function sR(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function rR(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:p}}return i}function fl(r){return r!==""}function Ov(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const oR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mp(r){return r.replace(oR,cR)}const lR=new Map;function cR(r,t){let i=Me[t];if(i===void 0){const s=lR.get(t);if(s!==void 0)i=Me[s],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Mp(i)}const uR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fv(r){return r.replace(uR,fR)}function fR(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Iv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const dR={[cu]:"SHADOWMAP_TYPE_PCF",[ul]:"SHADOWMAP_TYPE_VSM"};function hR(r){return dR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pR={[js]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE",[Au]:"ENVMAP_TYPE_CUBE_UV"};function mR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":pR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const gR={[Qr]:"ENVMAP_MODE_REFRACTION"};function _R(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":gR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vR={[$v]:"ENVMAP_BLENDING_MULTIPLY",[$M]:"ENVMAP_BLENDING_MIX",[tb]:"ENVMAP_BLENDING_ADD"};function xR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":vR[r.combine]||"ENVMAP_BLENDING_NONE"}function SR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function yR(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=hR(i),h=mR(i),x=_R(i),g=xR(i),v=SR(i),y=aR(i),M=sR(c),C=l.createProgram();let _,S,T=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(fl).join(`
`),_.length>0&&(_+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(fl).join(`
`),S.length>0&&(S+=`
`)):(_=[Iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),S=[Iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?Me.tonemapping_pars_fragment:"",i.toneMapping!==Yi?nR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,tR("linearToOutputTexel",i.outputColorSpace),iR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(fl).join(`
`)),f=Mp(f),f=Ov(f,i),f=Pv(f,i),p=Mp(p),p=Ov(p,i),p=Pv(p,i),f=Fv(f),p=Fv(p),i.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,S=["#define varying in",i.glslVersion===k_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===k_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const w=T+_+f,D=T+S+p,G=Nv(l,l.VERTEX_SHADER,w),P=Nv(l,l.FRAGMENT_SHADER,D);l.attachShader(C,G),l.attachShader(C,P),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(H){if(r.debug.checkShaderErrors){const j=l.getProgramInfoLog(C)||"",Z=l.getShaderInfoLog(G)||"",Y=l.getShaderInfoLog(P)||"",$=j.trim(),N=Z.trim(),F=Y.trim();let tt=!0,ot=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(tt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,G,P);else{const xt=Lv(l,G,"vertex"),B=Lv(l,P,"fragment");Ue("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+$+`
`+xt+`
`+B)}else $!==""?de("WebGLProgram: Program Info Log:",$):(N===""||F==="")&&(ot=!1);ot&&(H.diagnostics={runnable:tt,programLog:$,vertexShader:{log:N,prefix:_},fragmentShader:{log:F,prefix:S}})}l.deleteShader(G),l.deleteShader(P),E=new pu(l,C),O=rR(l,C)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let O;this.getAttributes=function(){return O===void 0&&I(this),O};let at=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return at===!1&&(at=l.getProgramParameter(C,KA)),at},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=QA++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=P,this}let MR=0;class bR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new ER(t),i.set(t,s)),s}}class ER{constructor(t){this.id=MR++,this.code=t,this.usedTimes=0}}function TR(r,t,i,s,l,c){const f=new gx,p=new bR,m=new Set,h=[],x=new Map,g=s.logarithmicDepthBuffer;let v=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return m.add(E),E===0?"uv":`uv${E}`}function C(E,O,at,H,j){const Z=H.fog,Y=j.geometry,$=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,N=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,F=t.get(E.envMap||$,N),tt=F&&F.mapping===Au?F.image.height:null,ot=y[E.type];E.precision!==null&&(v=s.getMaxPrecision(E.precision),v!==E.precision&&de("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const xt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,B=xt!==void 0?xt.length:0;let V=0;Y.morphAttributes.position!==void 0&&(V=1),Y.morphAttributes.normal!==void 0&&(V=2),Y.morphAttributes.color!==void 0&&(V=3);let et,K,ft,W;if(ot){const Ne=ki[ot];et=Ne.vertexShader,K=Ne.fragmentShader}else et=E.vertexShader,K=E.fragmentShader,p.update(E),ft=p.getVertexShaderID(E),W=p.getFragmentShaderID(E);const rt=r.getRenderTarget(),_t=r.state.buffers.depth.getReversed(),J=j.isInstancedMesh===!0,At=j.isBatchedMesh===!0,Dt=!!E.map,Bt=!!E.matcap,Pt=!!F,Lt=!!E.aoMap,Xt=!!E.lightMap,Wt=!!E.bumpMap,se=!!E.normalMap,k=!!E.displacementMap,ue=!!E.emissiveMap,oe=!!E.metalnessMap,le=!!E.roughnessMap,Gt=E.anisotropy>0,z=E.clearcoat>0,A=E.dispersion>0,Q=E.iridescence>0,yt=E.sheen>0,Et=E.transmission>0,gt=Gt&&!!E.anisotropyMap,Vt=z&&!!E.clearcoatMap,Ut=z&&!!E.clearcoatNormalMap,qt=z&&!!E.clearcoatRoughnessMap,ee=Q&&!!E.iridescenceMap,Ct=Q&&!!E.iridescenceThicknessMap,wt=yt&&!!E.sheenColorMap,kt=yt&&!!E.sheenRoughnessMap,zt=!!E.specularMap,Yt=!!E.specularColorMap,ve=!!E.specularIntensityMap,st=Et&&!!E.transmissionMap,Ft=Et&&!!E.thicknessMap,Ot=!!E.gradientMap,Zt=!!E.alphaMap,Nt=E.alphaTest>0,Mt=!!E.alphaHash,Qt=!!E.extensions;let he=Yi;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(he=r.toneMapping);const He={shaderID:ot,shaderType:E.type,shaderName:E.name,vertexShader:et,fragmentShader:K,defines:E.defines,customVertexShaderID:ft,customFragmentShaderID:W,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:At,batchingColor:At&&j._colorsTexture!==null,instancing:J,instancingColor:J&&j.instanceColor!==null,instancingMorph:J&&j.morphTexture!==null,outputColorSpace:rt===null?r.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:$r,alphaToCoverage:!!E.alphaToCoverage,map:Dt,matcap:Bt,envMap:Pt,envMapMode:Pt&&F.mapping,envMapCubeUVHeight:tt,aoMap:Lt,lightMap:Xt,bumpMap:Wt,normalMap:se,displacementMap:k,emissiveMap:ue,normalMapObjectSpace:se&&E.normalMapType===ab,normalMapTangentSpace:se&&E.normalMapType===ib,metalnessMap:oe,roughnessMap:le,anisotropy:Gt,anisotropyMap:gt,clearcoat:z,clearcoatMap:Vt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:qt,dispersion:A,iridescence:Q,iridescenceMap:ee,iridescenceThicknessMap:Ct,sheen:yt,sheenColorMap:wt,sheenRoughnessMap:kt,specularMap:zt,specularColorMap:Yt,specularIntensityMap:ve,transmission:Et,transmissionMap:st,thicknessMap:Ft,gradientMap:Ot,opaque:E.transparent===!1&&E.blending===Yr&&E.alphaToCoverage===!1,alphaMap:Zt,alphaTest:Nt,alphaHash:Mt,combine:E.combine,mapUv:Dt&&M(E.map.channel),aoMapUv:Lt&&M(E.aoMap.channel),lightMapUv:Xt&&M(E.lightMap.channel),bumpMapUv:Wt&&M(E.bumpMap.channel),normalMapUv:se&&M(E.normalMap.channel),displacementMapUv:k&&M(E.displacementMap.channel),emissiveMapUv:ue&&M(E.emissiveMap.channel),metalnessMapUv:oe&&M(E.metalnessMap.channel),roughnessMapUv:le&&M(E.roughnessMap.channel),anisotropyMapUv:gt&&M(E.anisotropyMap.channel),clearcoatMapUv:Vt&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:kt&&M(E.sheenRoughnessMap.channel),specularMapUv:zt&&M(E.specularMap.channel),specularColorMapUv:Yt&&M(E.specularColorMap.channel),specularIntensityMapUv:ve&&M(E.specularIntensityMap.channel),transmissionMapUv:st&&M(E.transmissionMap.channel),thicknessMapUv:Ft&&M(E.thicknessMap.channel),alphaMapUv:Zt&&M(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(se||Gt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Y.attributes.uv&&(Dt||Zt),fog:!!Z,useFog:E.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Y.attributes.normal===void 0&&se===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:_t,skinning:j.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:V,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&at.length>0,shadowMapType:r.shadowMap.type,toneMapping:he,decodeVideoTexture:Dt&&E.map.isVideoTexture===!0&&Le.getTransfer(E.map.colorSpace)===ke,decodeVideoTextureEmissive:ue&&E.emissiveMap.isVideoTexture===!0&&Le.getTransfer(E.emissiveMap.colorSpace)===ke,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ji,flipSided:E.side===Kn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Qt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&E.extensions.multiDraw===!0||At)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return He.vertexUv1s=m.has(1),He.vertexUv2s=m.has(2),He.vertexUv3s=m.has(3),m.clear(),He}function _(E){const O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(const at in E.defines)O.push(at),O.push(E.defines[at]);return E.isRawShaderMaterial===!1&&(S(O,E),T(O,E),O.push(r.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function S(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function T(E,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),E.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),E.push(f.mask)}function w(E){const O=y[E.type];let at;if(O){const H=ki[O];at=Xb.clone(H.uniforms)}else at=E.uniforms;return at}function D(E,O){let at=x.get(O);return at!==void 0?++at.usedTimes:(at=new yR(r,O,E,l),h.push(at),x.set(O,at)),at}function G(E){if(--E.usedTimes===0){const O=h.indexOf(E);h[O]=h[h.length-1],h.pop(),x.delete(E.cacheKey),E.destroy()}}function P(E){p.remove(E)}function I(){p.dispose()}return{getParameters:C,getProgramCacheKey:_,getUniforms:w,acquireProgram:D,releaseProgram:G,releaseShaderCache:P,programs:h,dispose:I}}function AR(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function RR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Bv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function zv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function p(v,y,M,C,_,S){let T=r[t];return T===void 0?(T={id:v.id,object:v,geometry:y,material:M,materialVariant:f(v),groupOrder:C,renderOrder:v.renderOrder,z:_,group:S},r[t]=T):(T.id=v.id,T.object=v,T.geometry=y,T.material=M,T.materialVariant=f(v),T.groupOrder=C,T.renderOrder=v.renderOrder,T.z=_,T.group=S),t++,T}function m(v,y,M,C,_,S){const T=p(v,y,M,C,_,S);M.transmission>0?s.push(T):M.transparent===!0?l.push(T):i.push(T)}function h(v,y,M,C,_,S){const T=p(v,y,M,C,_,S);M.transmission>0?s.unshift(T):M.transparent===!0?l.unshift(T):i.unshift(T)}function x(v,y){i.length>1&&i.sort(v||RR),s.length>1&&s.sort(y||Bv),l.length>1&&l.sort(y||Bv)}function g(){for(let v=t,y=r.length;v<y;v++){const M=r[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:g,sort:x}}function CR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new zv,r.set(s,[f])):l>=c.length?(f=new zv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function wR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ut,color:new be};break;case"SpotLight":i={position:new ut,direction:new ut,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ut,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ut,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return r[t.id]=i,i}}}function DR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let NR=0;function UR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function LR(r){const t=new wR,i=DR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new ut);const l=new ut,c=new Je,f=new Je;function p(h){let x=0,g=0,v=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let y=0,M=0,C=0,_=0,S=0,T=0,w=0,D=0,G=0,P=0,I=0;h.sort(UR);for(let O=0,at=h.length;O<at;O++){const H=h[O],j=H.color,Z=H.intensity,Y=H.distance;let $=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Jr?$=H.shadow.map.texture:$=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)x+=j.r*Z,g+=j.g*Z,v+=j.b*Z;else if(H.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(H.sh.coefficients[N],Z);I++}else if(H.isDirectionalLight){const N=t.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const F=H.shadow,tt=i.get(H);tt.shadowIntensity=F.intensity,tt.shadowBias=F.bias,tt.shadowNormalBias=F.normalBias,tt.shadowRadius=F.radius,tt.shadowMapSize=F.mapSize,s.directionalShadow[y]=tt,s.directionalShadowMap[y]=$,s.directionalShadowMatrix[y]=H.shadow.matrix,T++}s.directional[y]=N,y++}else if(H.isSpotLight){const N=t.get(H);N.position.setFromMatrixPosition(H.matrixWorld),N.color.copy(j).multiplyScalar(Z),N.distance=Y,N.coneCos=Math.cos(H.angle),N.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),N.decay=H.decay,s.spot[C]=N;const F=H.shadow;if(H.map&&(s.spotLightMap[G]=H.map,G++,F.updateMatrices(H),H.castShadow&&P++),s.spotLightMatrix[C]=F.matrix,H.castShadow){const tt=i.get(H);tt.shadowIntensity=F.intensity,tt.shadowBias=F.bias,tt.shadowNormalBias=F.normalBias,tt.shadowRadius=F.radius,tt.shadowMapSize=F.mapSize,s.spotShadow[C]=tt,s.spotShadowMap[C]=$,D++}C++}else if(H.isRectAreaLight){const N=t.get(H);N.color.copy(j).multiplyScalar(Z),N.halfWidth.set(H.width*.5,0,0),N.halfHeight.set(0,H.height*.5,0),s.rectArea[_]=N,_++}else if(H.isPointLight){const N=t.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),N.distance=H.distance,N.decay=H.decay,H.castShadow){const F=H.shadow,tt=i.get(H);tt.shadowIntensity=F.intensity,tt.shadowBias=F.bias,tt.shadowNormalBias=F.normalBias,tt.shadowRadius=F.radius,tt.shadowMapSize=F.mapSize,tt.shadowCameraNear=F.camera.near,tt.shadowCameraFar=F.camera.far,s.pointShadow[M]=tt,s.pointShadowMap[M]=$,s.pointShadowMatrix[M]=H.shadow.matrix,w++}s.point[M]=N,M++}else if(H.isHemisphereLight){const N=t.get(H);N.skyColor.copy(H.color).multiplyScalar(Z),N.groundColor.copy(H.groundColor).multiplyScalar(Z),s.hemi[S]=N,S++}}_>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=jt.LTC_FLOAT_1,s.rectAreaLTC2=jt.LTC_FLOAT_2):(s.rectAreaLTC1=jt.LTC_HALF_1,s.rectAreaLTC2=jt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=g,s.ambient[2]=v;const E=s.hash;(E.directionalLength!==y||E.pointLength!==M||E.spotLength!==C||E.rectAreaLength!==_||E.hemiLength!==S||E.numDirectionalShadows!==T||E.numPointShadows!==w||E.numSpotShadows!==D||E.numSpotMaps!==G||E.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=_,s.point.length=M,s.hemi.length=S,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=D+G-P,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=I,E.directionalLength=y,E.pointLength=M,E.spotLength=C,E.rectAreaLength=_,E.hemiLength=S,E.numDirectionalShadows=T,E.numPointShadows=w,E.numSpotShadows=D,E.numSpotMaps=G,E.numLightProbes=I,s.version=NR++)}function m(h,x){let g=0,v=0,y=0,M=0,C=0;const _=x.matrixWorldInverse;for(let S=0,T=h.length;S<T;S++){const w=h[S];if(w.isDirectionalLight){const D=s.directional[g];D.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(_),g++}else if(w.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(_),D.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(_),y++}else if(w.isRectAreaLight){const D=s.rectArea[M];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(_),f.identity(),c.copy(w.matrixWorld),c.premultiply(_),f.extractRotation(c),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),M++}else if(w.isPointLight){const D=s.point[v];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(_),v++}else if(w.isHemisphereLight){const D=s.hemi[C];D.direction.setFromMatrixPosition(w.matrixWorld),D.direction.transformDirection(_),C++}}}return{setup:p,setupView:m,state:s}}function Hv(r){const t=new LR(r),i=[],s=[];function l(x){h.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function f(x){s.push(x)}function p(){t.setup(i)}function m(x){t.setupView(i,x)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:f}}function OR(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let p;return f===void 0?(p=new Hv(r),t.set(l,[p])):c>=f.length?(p=new Hv(r),f.push(p)):p=f[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const PR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IR=[new ut(1,0,0),new ut(-1,0,0),new ut(0,1,0),new ut(0,-1,0),new ut(0,0,1),new ut(0,0,-1)],BR=[new ut(0,-1,0),new ut(0,-1,0),new ut(0,0,1),new ut(0,0,-1),new ut(0,-1,0),new ut(0,-1,0)],Gv=new Je,ol=new ut,bh=new ut;function zR(r,t,i){let s=new zp;const l=new Ae,c=new Ae,f=new rn,p=new Zb,m=new Kb,h={},x=i.maxTextureSize,g={[hs]:Kn,[Kn]:hs,[ji]:ji},v=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:PR,fragmentShader:FR}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const M=new Fn;M.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Qi(M,v),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let S=this.type;this.render=function(P,I,E){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;this.type===OM&&(de("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=cu);const O=r.getRenderTarget(),at=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),j=r.state;j.setBlending(Ea),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Z=S!==this.type;Z&&I.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach($=>$.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,$=P.length;Y<$;Y++){const N=P[Y],F=N.shadow;if(F===void 0){de("WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const tt=F.getFrameExtents();l.multiply(tt),c.copy(F.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/tt.x),l.x=c.x*tt.x,F.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/tt.y),l.y=c.y*tt.y,F.mapSize.y=c.y));const ot=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ot,F.map===null||Z===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ul){if(N.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Zi(l.x,l.y,{format:Jr,type:Aa,minFilter:On,magFilter:On,generateMipmaps:!1}),F.map.texture.name=N.name+".shadowMap",F.map.depthTexture=new ml(l.x,l.y,Wi),F.map.depthTexture.name=N.name+".shadowMapDepth",F.map.depthTexture.format=Ra,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Cn,F.map.depthTexture.magFilter=Cn}else N.isPointLight?(F.map=new Dx(l.x),F.map.depthTexture=new kb(l.x,Ki)):(F.map=new Zi(l.x,l.y),F.map.depthTexture=new ml(l.x,l.y,Ki)),F.map.depthTexture.name=N.name+".shadowMap",F.map.depthTexture.format=Ra,this.type===cu?(F.map.depthTexture.compareFunction=ot?Op:Lp,F.map.depthTexture.minFilter=On,F.map.depthTexture.magFilter=On):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Cn,F.map.depthTexture.magFilter=Cn);F.camera.updateProjectionMatrix()}const xt=F.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<xt;B++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,B),r.clear();else{B===0&&(r.setRenderTarget(F.map),r.clear());const V=F.getViewport(B);f.set(c.x*V.x,c.y*V.y,c.x*V.z,c.y*V.w),j.viewport(f)}if(N.isPointLight){const V=F.camera,et=F.matrix,K=N.distance||V.far;K!==V.far&&(V.far=K,V.updateProjectionMatrix()),ol.setFromMatrixPosition(N.matrixWorld),V.position.copy(ol),bh.copy(V.position),bh.add(IR[B]),V.up.copy(BR[B]),V.lookAt(bh),V.updateMatrixWorld(),et.makeTranslation(-ol.x,-ol.y,-ol.z),Gv.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Gv,V.coordinateSystem,V.reversedDepth)}else F.updateMatrices(N);s=F.getFrustum(),D(I,E,F.camera,N,this.type)}F.isPointLightShadow!==!0&&this.type===ul&&T(F,E),F.needsUpdate=!1}S=this.type,_.needsUpdate=!1,r.setRenderTarget(O,at,H)};function T(P,I){const E=t.update(C);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Zi(l.x,l.y,{format:Jr,type:Aa})),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(I,null,E,v,C,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(I,null,E,y,C,null)}function w(P,I,E,O){let at=null;const H=E.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)at=H;else if(at=E.isPointLight===!0?m:p,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const j=at.uuid,Z=I.uuid;let Y=h[j];Y===void 0&&(Y={},h[j]=Y);let $=Y[Z];$===void 0&&($=at.clone(),Y[Z]=$,I.addEventListener("dispose",G)),at=$}if(at.visible=I.visible,at.wireframe=I.wireframe,O===ul?at.side=I.shadowSide!==null?I.shadowSide:I.side:at.side=I.shadowSide!==null?I.shadowSide:g[I.side],at.alphaMap=I.alphaMap,at.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,at.map=I.map,at.clipShadows=I.clipShadows,at.clippingPlanes=I.clippingPlanes,at.clipIntersection=I.clipIntersection,at.displacementMap=I.displacementMap,at.displacementScale=I.displacementScale,at.displacementBias=I.displacementBias,at.wireframeLinewidth=I.wireframeLinewidth,at.linewidth=I.linewidth,E.isPointLight===!0&&at.isMeshDistanceMaterial===!0){const j=r.properties.get(at);j.light=E}return at}function D(P,I,E,O,at){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&at===ul)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,P.matrixWorld);const Z=t.update(P),Y=P.material;if(Array.isArray(Y)){const $=Z.groups;for(let N=0,F=$.length;N<F;N++){const tt=$[N],ot=Y[tt.materialIndex];if(ot&&ot.visible){const xt=w(P,ot,O,at);P.onBeforeShadow(r,P,I,E,Z,xt,tt),r.renderBufferDirect(E,null,Z,xt,P,tt),P.onAfterShadow(r,P,I,E,Z,xt,tt)}}}else if(Y.visible){const $=w(P,Y,O,at);P.onBeforeShadow(r,P,I,E,Z,$,null),r.renderBufferDirect(E,null,Z,$,P,null),P.onAfterShadow(r,P,I,E,Z,$,null)}}const j=P.children;for(let Z=0,Y=j.length;Z<Y;Z++)D(j[Z],I,E,O,at)}function G(P){P.target.removeEventListener("dispose",G);for(const E in h){const O=h[E],at=P.target.uuid;at in O&&(O[at].dispose(),delete O[at])}}}function HR(r,t){function i(){let st=!1;const Ft=new rn;let Ot=null;const Zt=new rn(0,0,0,0);return{setMask:function(Nt){Ot!==Nt&&!st&&(r.colorMask(Nt,Nt,Nt,Nt),Ot=Nt)},setLocked:function(Nt){st=Nt},setClear:function(Nt,Mt,Qt,he,He){He===!0&&(Nt*=he,Mt*=he,Qt*=he),Ft.set(Nt,Mt,Qt,he),Zt.equals(Ft)===!1&&(r.clearColor(Nt,Mt,Qt,he),Zt.copy(Ft))},reset:function(){st=!1,Ot=null,Zt.set(-1,0,0,0)}}}function s(){let st=!1,Ft=!1,Ot=null,Zt=null,Nt=null;return{setReversed:function(Mt){if(Ft!==Mt){const Qt=t.get("EXT_clip_control");Mt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),Ft=Mt;const he=Nt;Nt=null,this.setClear(he)}},getReversed:function(){return Ft},setTest:function(Mt){Mt?rt(r.DEPTH_TEST):_t(r.DEPTH_TEST)},setMask:function(Mt){Ot!==Mt&&!st&&(r.depthMask(Mt),Ot=Mt)},setFunc:function(Mt){if(Ft&&(Mt=pb[Mt]),Zt!==Mt){switch(Mt){case Dh:r.depthFunc(r.NEVER);break;case Nh:r.depthFunc(r.ALWAYS);break;case Uh:r.depthFunc(r.LESS);break;case Kr:r.depthFunc(r.LEQUAL);break;case Lh:r.depthFunc(r.EQUAL);break;case Oh:r.depthFunc(r.GEQUAL);break;case Ph:r.depthFunc(r.GREATER);break;case Fh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Zt=Mt}},setLocked:function(Mt){st=Mt},setClear:function(Mt){Nt!==Mt&&(Nt=Mt,Ft&&(Mt=1-Mt),r.clearDepth(Mt))},reset:function(){st=!1,Ot=null,Zt=null,Nt=null,Ft=!1}}}function l(){let st=!1,Ft=null,Ot=null,Zt=null,Nt=null,Mt=null,Qt=null,he=null,He=null;return{setTest:function(Ne){st||(Ne?rt(r.STENCIL_TEST):_t(r.STENCIL_TEST))},setMask:function(Ne){Ft!==Ne&&!st&&(r.stencilMask(Ne),Ft=Ne)},setFunc:function(Ne,In,Mi){(Ot!==Ne||Zt!==In||Nt!==Mi)&&(r.stencilFunc(Ne,In,Mi),Ot=Ne,Zt=In,Nt=Mi)},setOp:function(Ne,In,Mi){(Mt!==Ne||Qt!==In||he!==Mi)&&(r.stencilOp(Ne,In,Mi),Mt=Ne,Qt=In,he=Mi)},setLocked:function(Ne){st=Ne},setClear:function(Ne){He!==Ne&&(r.clearStencil(Ne),He=Ne)},reset:function(){st=!1,Ft=null,Ot=null,Zt=null,Nt=null,Mt=null,Qt=null,he=null,He=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,h=new WeakMap;let x={},g={},v=new WeakMap,y=[],M=null,C=!1,_=null,S=null,T=null,w=null,D=null,G=null,P=null,I=new be(0,0,0),E=0,O=!1,at=null,H=null,j=null,Z=null,Y=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,F=0;const tt=r.getParameter(r.VERSION);tt.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(tt)[1]),N=F>=1):tt.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),N=F>=2);let ot=null,xt={};const B=r.getParameter(r.SCISSOR_BOX),V=r.getParameter(r.VIEWPORT),et=new rn().fromArray(B),K=new rn().fromArray(V);function ft(st,Ft,Ot,Zt){const Nt=new Uint8Array(4),Mt=r.createTexture();r.bindTexture(st,Mt),r.texParameteri(st,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(st,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qt=0;Qt<Ot;Qt++)st===r.TEXTURE_3D||st===r.TEXTURE_2D_ARRAY?r.texImage3D(Ft,0,r.RGBA,1,1,Zt,0,r.RGBA,r.UNSIGNED_BYTE,Nt):r.texImage2D(Ft+Qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Nt);return Mt}const W={};W[r.TEXTURE_2D]=ft(r.TEXTURE_2D,r.TEXTURE_2D,1),W[r.TEXTURE_CUBE_MAP]=ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[r.TEXTURE_2D_ARRAY]=ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),W[r.TEXTURE_3D]=ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),rt(r.DEPTH_TEST),f.setFunc(Kr),Wt(!1),se(B_),rt(r.CULL_FACE),Lt(Ea);function rt(st){x[st]!==!0&&(r.enable(st),x[st]=!0)}function _t(st){x[st]!==!1&&(r.disable(st),x[st]=!1)}function J(st,Ft){return g[st]!==Ft?(r.bindFramebuffer(st,Ft),g[st]=Ft,st===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ft),st===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ft),!0):!1}function At(st,Ft){let Ot=y,Zt=!1;if(st){Ot=v.get(Ft),Ot===void 0&&(Ot=[],v.set(Ft,Ot));const Nt=st.textures;if(Ot.length!==Nt.length||Ot[0]!==r.COLOR_ATTACHMENT0){for(let Mt=0,Qt=Nt.length;Mt<Qt;Mt++)Ot[Mt]=r.COLOR_ATTACHMENT0+Mt;Ot.length=Nt.length,Zt=!0}}else Ot[0]!==r.BACK&&(Ot[0]=r.BACK,Zt=!0);Zt&&r.drawBuffers(Ot)}function Dt(st){return M!==st?(r.useProgram(st),M=st,!0):!1}const Bt={[Hs]:r.FUNC_ADD,[FM]:r.FUNC_SUBTRACT,[IM]:r.FUNC_REVERSE_SUBTRACT};Bt[BM]=r.MIN,Bt[zM]=r.MAX;const Pt={[HM]:r.ZERO,[GM]:r.ONE,[VM]:r.SRC_COLOR,[Ch]:r.SRC_ALPHA,[YM]:r.SRC_ALPHA_SATURATE,[WM]:r.DST_COLOR,[jM]:r.DST_ALPHA,[kM]:r.ONE_MINUS_SRC_COLOR,[wh]:r.ONE_MINUS_SRC_ALPHA,[qM]:r.ONE_MINUS_DST_COLOR,[XM]:r.ONE_MINUS_DST_ALPHA,[ZM]:r.CONSTANT_COLOR,[KM]:r.ONE_MINUS_CONSTANT_COLOR,[QM]:r.CONSTANT_ALPHA,[JM]:r.ONE_MINUS_CONSTANT_ALPHA};function Lt(st,Ft,Ot,Zt,Nt,Mt,Qt,he,He,Ne){if(st===Ea){C===!0&&(_t(r.BLEND),C=!1);return}if(C===!1&&(rt(r.BLEND),C=!0),st!==PM){if(st!==_||Ne!==O){if((S!==Hs||D!==Hs)&&(r.blendEquation(r.FUNC_ADD),S=Hs,D=Hs),Ne)switch(st){case Yr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case z_:r.blendFunc(r.ONE,r.ONE);break;case H_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case G_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ue("WebGLState: Invalid blending: ",st);break}else switch(st){case Yr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case z_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case H_:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case G_:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",st);break}T=null,w=null,G=null,P=null,I.set(0,0,0),E=0,_=st,O=Ne}return}Nt=Nt||Ft,Mt=Mt||Ot,Qt=Qt||Zt,(Ft!==S||Nt!==D)&&(r.blendEquationSeparate(Bt[Ft],Bt[Nt]),S=Ft,D=Nt),(Ot!==T||Zt!==w||Mt!==G||Qt!==P)&&(r.blendFuncSeparate(Pt[Ot],Pt[Zt],Pt[Mt],Pt[Qt]),T=Ot,w=Zt,G=Mt,P=Qt),(he.equals(I)===!1||He!==E)&&(r.blendColor(he.r,he.g,he.b,He),I.copy(he),E=He),_=st,O=!1}function Xt(st,Ft){st.side===ji?_t(r.CULL_FACE):rt(r.CULL_FACE);let Ot=st.side===Kn;Ft&&(Ot=!Ot),Wt(Ot),st.blending===Yr&&st.transparent===!1?Lt(Ea):Lt(st.blending,st.blendEquation,st.blendSrc,st.blendDst,st.blendEquationAlpha,st.blendSrcAlpha,st.blendDstAlpha,st.blendColor,st.blendAlpha,st.premultipliedAlpha),f.setFunc(st.depthFunc),f.setTest(st.depthTest),f.setMask(st.depthWrite),c.setMask(st.colorWrite);const Zt=st.stencilWrite;p.setTest(Zt),Zt&&(p.setMask(st.stencilWriteMask),p.setFunc(st.stencilFunc,st.stencilRef,st.stencilFuncMask),p.setOp(st.stencilFail,st.stencilZFail,st.stencilZPass)),ue(st.polygonOffset,st.polygonOffsetFactor,st.polygonOffsetUnits),st.alphaToCoverage===!0?rt(r.SAMPLE_ALPHA_TO_COVERAGE):_t(r.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(st){at!==st&&(st?r.frontFace(r.CW):r.frontFace(r.CCW),at=st)}function se(st){st!==UM?(rt(r.CULL_FACE),st!==H&&(st===B_?r.cullFace(r.BACK):st===LM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_t(r.CULL_FACE),H=st}function k(st){st!==j&&(N&&r.lineWidth(st),j=st)}function ue(st,Ft,Ot){st?(rt(r.POLYGON_OFFSET_FILL),(Z!==Ft||Y!==Ot)&&(Z=Ft,Y=Ot,f.getReversed()&&(Ft=-Ft),r.polygonOffset(Ft,Ot))):_t(r.POLYGON_OFFSET_FILL)}function oe(st){st?rt(r.SCISSOR_TEST):_t(r.SCISSOR_TEST)}function le(st){st===void 0&&(st=r.TEXTURE0+$-1),ot!==st&&(r.activeTexture(st),ot=st)}function Gt(st,Ft,Ot){Ot===void 0&&(ot===null?Ot=r.TEXTURE0+$-1:Ot=ot);let Zt=xt[Ot];Zt===void 0&&(Zt={type:void 0,texture:void 0},xt[Ot]=Zt),(Zt.type!==st||Zt.texture!==Ft)&&(ot!==Ot&&(r.activeTexture(Ot),ot=Ot),r.bindTexture(st,Ft||W[st]),Zt.type=st,Zt.texture=Ft)}function z(){const st=xt[ot];st!==void 0&&st.type!==void 0&&(r.bindTexture(st.type,null),st.type=void 0,st.texture=void 0)}function A(){try{r.compressedTexImage2D(...arguments)}catch(st){Ue("WebGLState:",st)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(st){Ue("WebGLState:",st)}}function yt(){try{r.texSubImage2D(...arguments)}catch(st){Ue("WebGLState:",st)}}function Et(){try{r.texSubImage3D(...arguments)}catch(st){Ue("WebGLState:",st)}}function gt(){try{r.compressedTexSubImage2D(...arguments)}catch(st){Ue("WebGLState:",st)}}function Vt(){try{r.compressedTexSubImage3D(...arguments)}catch(st){Ue("WebGLState:",st)}}function Ut(){try{r.texStorage2D(...arguments)}catch(st){Ue("WebGLState:",st)}}function qt(){try{r.texStorage3D(...arguments)}catch(st){Ue("WebGLState:",st)}}function ee(){try{r.texImage2D(...arguments)}catch(st){Ue("WebGLState:",st)}}function Ct(){try{r.texImage3D(...arguments)}catch(st){Ue("WebGLState:",st)}}function wt(st){et.equals(st)===!1&&(r.scissor(st.x,st.y,st.z,st.w),et.copy(st))}function kt(st){K.equals(st)===!1&&(r.viewport(st.x,st.y,st.z,st.w),K.copy(st))}function zt(st,Ft){let Ot=h.get(Ft);Ot===void 0&&(Ot=new WeakMap,h.set(Ft,Ot));let Zt=Ot.get(st);Zt===void 0&&(Zt=r.getUniformBlockIndex(Ft,st.name),Ot.set(st,Zt))}function Yt(st,Ft){const Zt=h.get(Ft).get(st);m.get(Ft)!==Zt&&(r.uniformBlockBinding(Ft,Zt,st.__bindingPointIndex),m.set(Ft,Zt))}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),x={},ot=null,xt={},g={},v=new WeakMap,y=[],M=null,C=!1,_=null,S=null,T=null,w=null,D=null,G=null,P=null,I=new be(0,0,0),E=0,O=!1,at=null,H=null,j=null,Z=null,Y=null,et.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:rt,disable:_t,bindFramebuffer:J,drawBuffers:At,useProgram:Dt,setBlending:Lt,setMaterial:Xt,setFlipSided:Wt,setCullFace:se,setLineWidth:k,setPolygonOffset:ue,setScissorTest:oe,activeTexture:le,bindTexture:Gt,unbindTexture:z,compressedTexImage2D:A,compressedTexImage3D:Q,texImage2D:ee,texImage3D:Ct,updateUBOMapping:zt,uniformBlockBinding:Yt,texStorage2D:Ut,texStorage3D:qt,texSubImage2D:yt,texSubImage3D:Et,compressedTexSubImage2D:gt,compressedTexSubImage3D:Vt,scissor:wt,viewport:kt,reset:ve}}function GR(r,t,i,s,l,c,f){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ae,x=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(z,A){return y?new OffscreenCanvas(z,A):gu("canvas")}function C(z,A,Q){let yt=1;const Et=Gt(z);if((Et.width>Q||Et.height>Q)&&(yt=Q/Math.max(Et.width,Et.height)),yt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const gt=Math.floor(yt*Et.width),Vt=Math.floor(yt*Et.height);g===void 0&&(g=M(gt,Vt));const Ut=A?M(gt,Vt):g;return Ut.width=gt,Ut.height=Vt,Ut.getContext("2d").drawImage(z,0,0,gt,Vt),de("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+gt+"x"+Vt+")."),Ut}else return"data"in z&&de("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),z;return z}function _(z){return z.generateMipmaps}function S(z){r.generateMipmap(z)}function T(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(z,A,Q,yt,Et=!1){if(z!==null){if(r[z]!==void 0)return r[z];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let gt=A;if(A===r.RED&&(Q===r.FLOAT&&(gt=r.R32F),Q===r.HALF_FLOAT&&(gt=r.R16F),Q===r.UNSIGNED_BYTE&&(gt=r.R8)),A===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(gt=r.R8UI),Q===r.UNSIGNED_SHORT&&(gt=r.R16UI),Q===r.UNSIGNED_INT&&(gt=r.R32UI),Q===r.BYTE&&(gt=r.R8I),Q===r.SHORT&&(gt=r.R16I),Q===r.INT&&(gt=r.R32I)),A===r.RG&&(Q===r.FLOAT&&(gt=r.RG32F),Q===r.HALF_FLOAT&&(gt=r.RG16F),Q===r.UNSIGNED_BYTE&&(gt=r.RG8)),A===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(gt=r.RG8UI),Q===r.UNSIGNED_SHORT&&(gt=r.RG16UI),Q===r.UNSIGNED_INT&&(gt=r.RG32UI),Q===r.BYTE&&(gt=r.RG8I),Q===r.SHORT&&(gt=r.RG16I),Q===r.INT&&(gt=r.RG32I)),A===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(gt=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(gt=r.RGB16UI),Q===r.UNSIGNED_INT&&(gt=r.RGB32UI),Q===r.BYTE&&(gt=r.RGB8I),Q===r.SHORT&&(gt=r.RGB16I),Q===r.INT&&(gt=r.RGB32I)),A===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(gt=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(gt=r.RGBA16UI),Q===r.UNSIGNED_INT&&(gt=r.RGBA32UI),Q===r.BYTE&&(gt=r.RGBA8I),Q===r.SHORT&&(gt=r.RGBA16I),Q===r.INT&&(gt=r.RGBA32I)),A===r.RGB&&(Q===r.UNSIGNED_INT_5_9_9_9_REV&&(gt=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(gt=r.R11F_G11F_B10F)),A===r.RGBA){const Vt=Et?mu:Le.getTransfer(yt);Q===r.FLOAT&&(gt=r.RGBA32F),Q===r.HALF_FLOAT&&(gt=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(gt=Vt===ke?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(gt=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(gt=r.RGB5_A1)}return(gt===r.R16F||gt===r.R32F||gt===r.RG16F||gt===r.RG32F||gt===r.RGBA16F||gt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function D(z,A){let Q;return z?A===null||A===Ki||A===hl?Q=r.DEPTH24_STENCIL8:A===Wi?Q=r.DEPTH32F_STENCIL8:A===dl&&(Q=r.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ki||A===hl?Q=r.DEPTH_COMPONENT24:A===Wi?Q=r.DEPTH_COMPONENT32F:A===dl&&(Q=r.DEPTH_COMPONENT16),Q}function G(z,A){return _(z)===!0||z.isFramebufferTexture&&z.minFilter!==Cn&&z.minFilter!==On?Math.log2(Math.max(A.width,A.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?A.mipmaps.length:1}function P(z){const A=z.target;A.removeEventListener("dispose",P),E(A),A.isVideoTexture&&x.delete(A)}function I(z){const A=z.target;A.removeEventListener("dispose",I),at(A)}function E(z){const A=s.get(z);if(A.__webglInit===void 0)return;const Q=z.source,yt=v.get(Q);if(yt){const Et=yt[A.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&O(z),Object.keys(yt).length===0&&v.delete(Q)}s.remove(z)}function O(z){const A=s.get(z);r.deleteTexture(A.__webglTexture);const Q=z.source,yt=v.get(Q);delete yt[A.__cacheKey],f.memory.textures--}function at(z){const A=s.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),s.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(A.__webglFramebuffer[yt]))for(let Et=0;Et<A.__webglFramebuffer[yt].length;Et++)r.deleteFramebuffer(A.__webglFramebuffer[yt][Et]);else r.deleteFramebuffer(A.__webglFramebuffer[yt]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[yt])}else{if(Array.isArray(A.__webglFramebuffer))for(let yt=0;yt<A.__webglFramebuffer.length;yt++)r.deleteFramebuffer(A.__webglFramebuffer[yt]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let yt=0;yt<A.__webglColorRenderbuffer.length;yt++)A.__webglColorRenderbuffer[yt]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[yt]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Q=z.textures;for(let yt=0,Et=Q.length;yt<Et;yt++){const gt=s.get(Q[yt]);gt.__webglTexture&&(r.deleteTexture(gt.__webglTexture),f.memory.textures--),s.remove(Q[yt])}s.remove(z)}let H=0;function j(){H=0}function Z(){const z=H;return z>=l.maxTextures&&de("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),H+=1,z}function Y(z){const A=[];return A.push(z.wrapS),A.push(z.wrapT),A.push(z.wrapR||0),A.push(z.magFilter),A.push(z.minFilter),A.push(z.anisotropy),A.push(z.internalFormat),A.push(z.format),A.push(z.type),A.push(z.generateMipmaps),A.push(z.premultiplyAlpha),A.push(z.flipY),A.push(z.unpackAlignment),A.push(z.colorSpace),A.join()}function $(z,A){const Q=s.get(z);if(z.isVideoTexture&&oe(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&Q.__version!==z.version){const yt=z.image;if(yt===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{W(Q,z,A);return}}else z.isExternalTexture&&(Q.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+A)}function N(z,A){const Q=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Q.__version!==z.version){W(Q,z,A);return}else z.isExternalTexture&&(Q.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+A)}function F(z,A){const Q=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Q.__version!==z.version){W(Q,z,A);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+A)}function tt(z,A){const Q=s.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&Q.__version!==z.version){rt(Q,z,A);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+A)}const ot={[Ih]:r.REPEAT,[ba]:r.CLAMP_TO_EDGE,[Bh]:r.MIRRORED_REPEAT},xt={[Cn]:r.NEAREST,[eb]:r.NEAREST_MIPMAP_NEAREST,[Lc]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[jd]:r.LINEAR_MIPMAP_NEAREST,[Vs]:r.LINEAR_MIPMAP_LINEAR},B={[sb]:r.NEVER,[ub]:r.ALWAYS,[rb]:r.LESS,[Lp]:r.LEQUAL,[ob]:r.EQUAL,[Op]:r.GEQUAL,[lb]:r.GREATER,[cb]:r.NOTEQUAL};function V(z,A){if(A.type===Wi&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===On||A.magFilter===jd||A.magFilter===Lc||A.magFilter===Vs||A.minFilter===On||A.minFilter===jd||A.minFilter===Lc||A.minFilter===Vs)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,ot[A.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,ot[A.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,ot[A.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,xt[A.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,xt[A.minFilter]),A.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,B[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Cn||A.minFilter!==Lc&&A.minFilter!==Vs||A.type===Wi&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(z,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function et(z,A){let Q=!1;z.__webglInit===void 0&&(z.__webglInit=!0,A.addEventListener("dispose",P));const yt=A.source;let Et=v.get(yt);Et===void 0&&(Et={},v.set(yt,Et));const gt=Y(A);if(gt!==z.__cacheKey){Et[gt]===void 0&&(Et[gt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Q=!0),Et[gt].usedTimes++;const Vt=Et[z.__cacheKey];Vt!==void 0&&(Et[z.__cacheKey].usedTimes--,Vt.usedTimes===0&&O(A)),z.__cacheKey=gt,z.__webglTexture=Et[gt].texture}return Q}function K(z,A,Q){return Math.floor(Math.floor(z/Q)/A)}function ft(z,A,Q,yt){const gt=z.updateRanges;if(gt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,Q,yt,A.data);else{gt.sort((Ct,wt)=>Ct.start-wt.start);let Vt=0;for(let Ct=1;Ct<gt.length;Ct++){const wt=gt[Vt],kt=gt[Ct],zt=wt.start+wt.count,Yt=K(kt.start,A.width,4),ve=K(wt.start,A.width,4);kt.start<=zt+1&&Yt===ve&&K(kt.start+kt.count-1,A.width,4)===Yt?wt.count=Math.max(wt.count,kt.start+kt.count-wt.start):(++Vt,gt[Vt]=kt)}gt.length=Vt+1;const Ut=r.getParameter(r.UNPACK_ROW_LENGTH),qt=r.getParameter(r.UNPACK_SKIP_PIXELS),ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let Ct=0,wt=gt.length;Ct<wt;Ct++){const kt=gt[Ct],zt=Math.floor(kt.start/4),Yt=Math.ceil(kt.count/4),ve=zt%A.width,st=Math.floor(zt/A.width),Ft=Yt,Ot=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,st),i.texSubImage2D(r.TEXTURE_2D,0,ve,st,Ft,Ot,Q,yt,A.data)}z.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ut),r.pixelStorei(r.UNPACK_SKIP_PIXELS,qt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ee)}}function W(z,A,Q){let yt=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(yt=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(yt=r.TEXTURE_3D);const Et=et(z,A),gt=A.source;i.bindTexture(yt,z.__webglTexture,r.TEXTURE0+Q);const Vt=s.get(gt);if(gt.version!==Vt.__version||Et===!0){i.activeTexture(r.TEXTURE0+Q);const Ut=Le.getPrimaries(Le.workingColorSpace),qt=A.colorSpace===cs?null:Le.getPrimaries(A.colorSpace),ee=A.colorSpace===cs||Ut===qt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Ct=C(A.image,!1,l.maxTextureSize);Ct=le(A,Ct);const wt=c.convert(A.format,A.colorSpace),kt=c.convert(A.type);let zt=w(A.internalFormat,wt,kt,A.colorSpace,A.isVideoTexture);V(yt,A);let Yt;const ve=A.mipmaps,st=A.isVideoTexture!==!0,Ft=Vt.__version===void 0||Et===!0,Ot=gt.dataReady,Zt=G(A,Ct);if(A.isDepthTexture)zt=D(A.format===ks,A.type),Ft&&(st?i.texStorage2D(r.TEXTURE_2D,1,zt,Ct.width,Ct.height):i.texImage2D(r.TEXTURE_2D,0,zt,Ct.width,Ct.height,0,wt,kt,null));else if(A.isDataTexture)if(ve.length>0){st&&Ft&&i.texStorage2D(r.TEXTURE_2D,Zt,zt,ve[0].width,ve[0].height);for(let Nt=0,Mt=ve.length;Nt<Mt;Nt++)Yt=ve[Nt],st?Ot&&i.texSubImage2D(r.TEXTURE_2D,Nt,0,0,Yt.width,Yt.height,wt,kt,Yt.data):i.texImage2D(r.TEXTURE_2D,Nt,zt,Yt.width,Yt.height,0,wt,kt,Yt.data);A.generateMipmaps=!1}else st?(Ft&&i.texStorage2D(r.TEXTURE_2D,Zt,zt,Ct.width,Ct.height),Ot&&ft(A,Ct,wt,kt)):i.texImage2D(r.TEXTURE_2D,0,zt,Ct.width,Ct.height,0,wt,kt,Ct.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){st&&Ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Zt,zt,ve[0].width,ve[0].height,Ct.depth);for(let Nt=0,Mt=ve.length;Nt<Mt;Nt++)if(Yt=ve[Nt],A.format!==Oi)if(wt!==null)if(st){if(Ot)if(A.layerUpdates.size>0){const Qt=vv(Yt.width,Yt.height,A.format,A.type);for(const he of A.layerUpdates){const He=Yt.data.subarray(he*Qt/Yt.data.BYTES_PER_ELEMENT,(he+1)*Qt/Yt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Nt,0,0,he,Yt.width,Yt.height,1,wt,He)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Nt,0,0,0,Yt.width,Yt.height,Ct.depth,wt,Yt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Nt,zt,Yt.width,Yt.height,Ct.depth,0,Yt.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Ot&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Nt,0,0,0,Yt.width,Yt.height,Ct.depth,wt,kt,Yt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Nt,zt,Yt.width,Yt.height,Ct.depth,0,wt,kt,Yt.data)}else{st&&Ft&&i.texStorage2D(r.TEXTURE_2D,Zt,zt,ve[0].width,ve[0].height);for(let Nt=0,Mt=ve.length;Nt<Mt;Nt++)Yt=ve[Nt],A.format!==Oi?wt!==null?st?Ot&&i.compressedTexSubImage2D(r.TEXTURE_2D,Nt,0,0,Yt.width,Yt.height,wt,Yt.data):i.compressedTexImage2D(r.TEXTURE_2D,Nt,zt,Yt.width,Yt.height,0,Yt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Ot&&i.texSubImage2D(r.TEXTURE_2D,Nt,0,0,Yt.width,Yt.height,wt,kt,Yt.data):i.texImage2D(r.TEXTURE_2D,Nt,zt,Yt.width,Yt.height,0,wt,kt,Yt.data)}else if(A.isDataArrayTexture)if(st){if(Ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Zt,zt,Ct.width,Ct.height,Ct.depth),Ot)if(A.layerUpdates.size>0){const Nt=vv(Ct.width,Ct.height,A.format,A.type);for(const Mt of A.layerUpdates){const Qt=Ct.data.subarray(Mt*Nt/Ct.data.BYTES_PER_ELEMENT,(Mt+1)*Nt/Ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Mt,Ct.width,Ct.height,1,wt,kt,Qt)}A.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,wt,kt,Ct.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,Ct.width,Ct.height,Ct.depth,0,wt,kt,Ct.data);else if(A.isData3DTexture)st?(Ft&&i.texStorage3D(r.TEXTURE_3D,Zt,zt,Ct.width,Ct.height,Ct.depth),Ot&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,wt,kt,Ct.data)):i.texImage3D(r.TEXTURE_3D,0,zt,Ct.width,Ct.height,Ct.depth,0,wt,kt,Ct.data);else if(A.isFramebufferTexture){if(Ft)if(st)i.texStorage2D(r.TEXTURE_2D,Zt,zt,Ct.width,Ct.height);else{let Nt=Ct.width,Mt=Ct.height;for(let Qt=0;Qt<Zt;Qt++)i.texImage2D(r.TEXTURE_2D,Qt,zt,Nt,Mt,0,wt,kt,null),Nt>>=1,Mt>>=1}}else if(ve.length>0){if(st&&Ft){const Nt=Gt(ve[0]);i.texStorage2D(r.TEXTURE_2D,Zt,zt,Nt.width,Nt.height)}for(let Nt=0,Mt=ve.length;Nt<Mt;Nt++)Yt=ve[Nt],st?Ot&&i.texSubImage2D(r.TEXTURE_2D,Nt,0,0,wt,kt,Yt):i.texImage2D(r.TEXTURE_2D,Nt,zt,wt,kt,Yt);A.generateMipmaps=!1}else if(st){if(Ft){const Nt=Gt(Ct);i.texStorage2D(r.TEXTURE_2D,Zt,zt,Nt.width,Nt.height)}Ot&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,wt,kt,Ct)}else i.texImage2D(r.TEXTURE_2D,0,zt,wt,kt,Ct);_(A)&&S(yt),Vt.__version=gt.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function rt(z,A,Q){if(A.image.length!==6)return;const yt=et(z,A),Et=A.source;i.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+Q);const gt=s.get(Et);if(Et.version!==gt.__version||yt===!0){i.activeTexture(r.TEXTURE0+Q);const Vt=Le.getPrimaries(Le.workingColorSpace),Ut=A.colorSpace===cs?null:Le.getPrimaries(A.colorSpace),qt=A.colorSpace===cs||Vt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const ee=A.isCompressedTexture||A.image[0].isCompressedTexture,Ct=A.image[0]&&A.image[0].isDataTexture,wt=[];for(let Mt=0;Mt<6;Mt++)!ee&&!Ct?wt[Mt]=C(A.image[Mt],!0,l.maxCubemapSize):wt[Mt]=Ct?A.image[Mt].image:A.image[Mt],wt[Mt]=le(A,wt[Mt]);const kt=wt[0],zt=c.convert(A.format,A.colorSpace),Yt=c.convert(A.type),ve=w(A.internalFormat,zt,Yt,A.colorSpace),st=A.isVideoTexture!==!0,Ft=gt.__version===void 0||yt===!0,Ot=Et.dataReady;let Zt=G(A,kt);V(r.TEXTURE_CUBE_MAP,A);let Nt;if(ee){st&&Ft&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Zt,ve,kt.width,kt.height);for(let Mt=0;Mt<6;Mt++){Nt=wt[Mt].mipmaps;for(let Qt=0;Qt<Nt.length;Qt++){const he=Nt[Qt];A.format!==Oi?zt!==null?st?Ot&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Qt,0,0,he.width,he.height,zt,he.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Qt,ve,he.width,he.height,0,he.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?Ot&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Qt,0,0,he.width,he.height,zt,Yt,he.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Qt,ve,he.width,he.height,0,zt,Yt,he.data)}}}else{if(Nt=A.mipmaps,st&&Ft){Nt.length>0&&Zt++;const Mt=Gt(wt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Zt,ve,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(Ct){st?Ot&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,wt[Mt].width,wt[Mt].height,zt,Yt,wt[Mt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ve,wt[Mt].width,wt[Mt].height,0,zt,Yt,wt[Mt].data);for(let Qt=0;Qt<Nt.length;Qt++){const He=Nt[Qt].image[Mt].image;st?Ot&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Qt+1,0,0,He.width,He.height,zt,Yt,He.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Qt+1,ve,He.width,He.height,0,zt,Yt,He.data)}}else{st?Ot&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,zt,Yt,wt[Mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ve,zt,Yt,wt[Mt]);for(let Qt=0;Qt<Nt.length;Qt++){const he=Nt[Qt];st?Ot&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Qt+1,0,0,zt,Yt,he.image[Mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Qt+1,ve,zt,Yt,he.image[Mt])}}}_(A)&&S(r.TEXTURE_CUBE_MAP),gt.__version=Et.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function _t(z,A,Q,yt,Et,gt){const Vt=c.convert(Q.format,Q.colorSpace),Ut=c.convert(Q.type),qt=w(Q.internalFormat,Vt,Ut,Q.colorSpace),ee=s.get(A),Ct=s.get(Q);if(Ct.__renderTarget=A,!ee.__hasExternalTextures){const wt=Math.max(1,A.width>>gt),kt=Math.max(1,A.height>>gt);Et===r.TEXTURE_3D||Et===r.TEXTURE_2D_ARRAY?i.texImage3D(Et,gt,qt,wt,kt,A.depth,0,Vt,Ut,null):i.texImage2D(Et,gt,qt,wt,kt,0,Vt,Ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,z),ue(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,yt,Et,Ct.__webglTexture,0,k(A)):(Et===r.TEXTURE_2D||Et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,yt,Et,Ct.__webglTexture,gt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function J(z,A,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,z),A.depthBuffer){const yt=A.depthTexture,Et=yt&&yt.isDepthTexture?yt.type:null,gt=D(A.stencilBuffer,Et),Vt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ue(A)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(A),gt,A.width,A.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(A),gt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,gt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Vt,r.RENDERBUFFER,z)}else{const yt=A.textures;for(let Et=0;Et<yt.length;Et++){const gt=yt[Et],Vt=c.convert(gt.format,gt.colorSpace),Ut=c.convert(gt.type),qt=w(gt.internalFormat,Vt,Ut,gt.colorSpace);ue(A)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(A),qt,A.width,A.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(A),qt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,qt,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function At(z,A,Q){const yt=A.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,z),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=s.get(A.depthTexture);if(Et.__renderTarget=A,(!Et.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),yt){if(Et.__webglInit===void 0&&(Et.__webglInit=!0,A.depthTexture.addEventListener("dispose",P)),Et.__webglTexture===void 0){Et.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Et.__webglTexture),V(r.TEXTURE_CUBE_MAP,A.depthTexture);const ee=c.convert(A.depthTexture.format),Ct=c.convert(A.depthTexture.type);let wt;A.depthTexture.format===Ra?wt=r.DEPTH_COMPONENT24:A.depthTexture.format===ks&&(wt=r.DEPTH24_STENCIL8);for(let kt=0;kt<6;kt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,wt,A.width,A.height,0,ee,Ct,null)}}else $(A.depthTexture,0);const gt=Et.__webglTexture,Vt=k(A),Ut=yt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,qt=A.depthTexture.format===ks?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ra)ue(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,qt,Ut,gt,0,Vt):r.framebufferTexture2D(r.FRAMEBUFFER,qt,Ut,gt,0);else if(A.depthTexture.format===ks)ue(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,qt,Ut,gt,0,Vt):r.framebufferTexture2D(r.FRAMEBUFFER,qt,Ut,gt,0);else throw new Error("Unknown depthTexture format")}function Dt(z){const A=s.get(z),Q=z.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==z.depthTexture){const yt=z.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),yt){const Et=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,yt.removeEventListener("dispose",Et)};yt.addEventListener("dispose",Et),A.__depthDisposeCallback=Et}A.__boundDepthTexture=yt}if(z.depthTexture&&!A.__autoAllocateDepthBuffer)if(Q)for(let yt=0;yt<6;yt++)At(A.__webglFramebuffer[yt],z,yt);else{const yt=z.texture.mipmaps;yt&&yt.length>0?At(A.__webglFramebuffer[0],z,0):At(A.__webglFramebuffer,z,0)}else if(Q){A.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[yt]),A.__webglDepthbuffer[yt]===void 0)A.__webglDepthbuffer[yt]=r.createRenderbuffer(),J(A.__webglDepthbuffer[yt],z,!1);else{const Et=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer[yt];r.bindRenderbuffer(r.RENDERBUFFER,gt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,gt)}}else{const yt=z.texture.mipmaps;if(yt&&yt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),J(A.__webglDepthbuffer,z,!1);else{const Et=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,gt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,gt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(z,A,Q){const yt=s.get(z);A!==void 0&&_t(yt.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&Dt(z)}function Pt(z){const A=z.texture,Q=s.get(z),yt=s.get(A);z.addEventListener("dispose",I);const Et=z.textures,gt=z.isWebGLCubeRenderTarget===!0,Vt=Et.length>1;if(Vt||(yt.__webglTexture===void 0&&(yt.__webglTexture=r.createTexture()),yt.__version=A.version,f.memory.textures++),gt){Q.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[Ut]=[];for(let qt=0;qt<A.mipmaps.length;qt++)Q.__webglFramebuffer[Ut][qt]=r.createFramebuffer()}else Q.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ut=0;Ut<A.mipmaps.length;Ut++)Q.__webglFramebuffer[Ut]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Vt)for(let Ut=0,qt=Et.length;Ut<qt;Ut++){const ee=s.get(Et[Ut]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),f.memory.textures++)}if(z.samples>0&&ue(z)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ut=0;Ut<Et.length;Ut++){const qt=Et[Ut];Q.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ut]);const ee=c.convert(qt.format,qt.colorSpace),Ct=c.convert(qt.type),wt=w(qt.internalFormat,ee,Ct,qt.colorSpace,z.isXRRenderTarget===!0),kt=k(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,kt,wt,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),J(Q.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(gt){i.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),V(r.TEXTURE_CUBE_MAP,A);for(let Ut=0;Ut<6;Ut++)if(A.mipmaps&&A.mipmaps.length>0)for(let qt=0;qt<A.mipmaps.length;qt++)_t(Q.__webglFramebuffer[Ut][qt],z,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,qt);else _t(Q.__webglFramebuffer[Ut],z,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);_(A)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let Ut=0,qt=Et.length;Ut<qt;Ut++){const ee=Et[Ut],Ct=s.get(ee);let wt=r.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(wt=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,Ct.__webglTexture),V(wt,ee),_t(Q.__webglFramebuffer,z,ee,r.COLOR_ATTACHMENT0+Ut,wt,0),_(ee)&&S(wt)}i.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ut=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,yt.__webglTexture),V(Ut,A),A.mipmaps&&A.mipmaps.length>0)for(let qt=0;qt<A.mipmaps.length;qt++)_t(Q.__webglFramebuffer[qt],z,A,r.COLOR_ATTACHMENT0,Ut,qt);else _t(Q.__webglFramebuffer,z,A,r.COLOR_ATTACHMENT0,Ut,0);_(A)&&S(Ut),i.unbindTexture()}z.depthBuffer&&Dt(z)}function Lt(z){const A=z.textures;for(let Q=0,yt=A.length;Q<yt;Q++){const Et=A[Q];if(_(Et)){const gt=T(z),Vt=s.get(Et).__webglTexture;i.bindTexture(gt,Vt),S(gt),i.unbindTexture()}}}const Xt=[],Wt=[];function se(z){if(z.samples>0){if(ue(z)===!1){const A=z.textures,Q=z.width,yt=z.height;let Et=r.COLOR_BUFFER_BIT;const gt=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Vt=s.get(z),Ut=A.length>1;if(Ut)for(let ee=0;ee<A.length;ee++)i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer);const qt=z.texture.mipmaps;qt&&qt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let ee=0;ee<A.length;ee++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Et|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Et|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Vt.__webglColorRenderbuffer[ee]);const Ct=s.get(A[ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ct,0)}r.blitFramebuffer(0,0,Q,yt,0,0,Q,yt,Et,r.NEAREST),m===!0&&(Xt.length=0,Wt.length=0,Xt.push(r.COLOR_ATTACHMENT0+ee),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Xt.push(gt),Wt.push(gt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Wt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Xt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let ee=0;ee<A.length;ee++){i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,Vt.__webglColorRenderbuffer[ee]);const Ct=s.get(A[ee]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,Ct,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const A=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function k(z){return Math.min(l.maxSamples,z.samples)}function ue(z){const A=s.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function oe(z){const A=f.render.frame;x.get(z)!==A&&(x.set(z,A),z.update())}function le(z,A){const Q=z.colorSpace,yt=z.format,Et=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||Q!==$r&&Q!==cs&&(Le.getTransfer(Q)===ke?(yt!==Oi||Et!==ci)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",Q)),A}function Gt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(h.width=z.naturalWidth||z.width,h.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(h.width=z.displayWidth,h.height=z.displayHeight):(h.width=z.width,h.height=z.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=j,this.setTexture2D=$,this.setTexture2DArray=N,this.setTexture3D=F,this.setTextureCube=tt,this.rebindTextures=Bt,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function VR(r,t){function i(s,l=cs){let c;const f=Le.getTransfer(l);if(s===ci)return r.UNSIGNED_BYTE;if(s===Cp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===wp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===cx)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===ux)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===ox)return r.BYTE;if(s===lx)return r.SHORT;if(s===dl)return r.UNSIGNED_SHORT;if(s===Rp)return r.INT;if(s===Ki)return r.UNSIGNED_INT;if(s===Wi)return r.FLOAT;if(s===Aa)return r.HALF_FLOAT;if(s===fx)return r.ALPHA;if(s===dx)return r.RGB;if(s===Oi)return r.RGBA;if(s===Ra)return r.DEPTH_COMPONENT;if(s===ks)return r.DEPTH_STENCIL;if(s===hx)return r.RED;if(s===Dp)return r.RED_INTEGER;if(s===Jr)return r.RG;if(s===Np)return r.RG_INTEGER;if(s===Up)return r.RGBA_INTEGER;if(s===uu||s===fu||s===du||s===hu)if(f===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===uu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===uu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===du)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zh||s===Hh||s===Gh||s===Vh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kh||s===jh||s===Xh||s===Wh||s===qh||s===Yh||s===Zh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===kh||s===jh)return f===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Xh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Wh)return c.COMPRESSED_R11_EAC;if(s===qh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Yh)return c.COMPRESSED_RG11_EAC;if(s===Zh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Kh||s===Qh||s===Jh||s===$h||s===tp||s===ep||s===np||s===ip||s===ap||s===sp||s===rp||s===op||s===lp||s===cp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Kh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$h)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===tp)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ep)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===np)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ip)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ap)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sp)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rp)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===op)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lp)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cp)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===up||s===fp||s===dp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===up)return f===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===hp||s===pp||s===mp||s===gp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===hp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===pp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const kR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Ex(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ji({vertexShader:kR,fragmentShader:jR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qi(new xl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WR extends eo{constructor(t,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,x=null,g=null,v=null,y=null,M=null;const C=typeof XRWebGLBinding<"u",_=new XR,S={},T=i.getContextAttributes();let w=null,D=null;const G=[],P=[],I=new Ae;let E=null;const O=new li;O.viewport=new rn;const at=new li;at.viewport=new rn;const H=[O,at],j=new nE;let Z=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let rt=G[W];return rt===void 0&&(rt=new Jd,G[W]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(W){let rt=G[W];return rt===void 0&&(rt=new Jd,G[W]=rt),rt.getGripSpace()},this.getHand=function(W){let rt=G[W];return rt===void 0&&(rt=new Jd,G[W]=rt),rt.getHandSpace()};function $(W){const rt=P.indexOf(W.inputSource);if(rt===-1)return;const _t=G[rt];_t!==void 0&&(_t.update(W.inputSource,W.frame,h||f),_t.dispatchEvent({type:W.type,data:W.inputSource}))}function N(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",F);for(let W=0;W<G.length;W++){const rt=P[W];rt!==null&&(P[W]=null,G[W].disconnect(rt))}Z=null,Y=null,_.reset();for(const W in S)delete S[W];t.setRenderTarget(w),y=null,v=null,g=null,l=null,D=null,ft.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,s.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){p=W,s.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(W){h=W},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(w=t.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",N),l.addEventListener("inputsourceschange",F),T.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(I),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,J=null,At=null;T.depth&&(At=T.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_t=T.stencil?ks:Ra,J=T.stencil?hl:Ki);const Dt={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(Dt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),D=new Zi(v.textureWidth,v.textureHeight,{format:Oi,type:ci,depthTexture:new ml(v.textureWidth,v.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const _t={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,_t),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new Zi(y.framebufferWidth,y.framebufferHeight,{format:Oi,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),ft.setContext(l),ft.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(W){for(let rt=0;rt<W.removed.length;rt++){const _t=W.removed[rt],J=P.indexOf(_t);J>=0&&(P[J]=null,G[J].disconnect(_t))}for(let rt=0;rt<W.added.length;rt++){const _t=W.added[rt];let J=P.indexOf(_t);if(J===-1){for(let Dt=0;Dt<G.length;Dt++)if(Dt>=P.length){P.push(_t),J=Dt;break}else if(P[Dt]===null){P[Dt]=_t,J=Dt;break}if(J===-1)break}const At=G[J];At&&At.connect(_t)}}const tt=new ut,ot=new ut;function xt(W,rt,_t){tt.setFromMatrixPosition(rt.matrixWorld),ot.setFromMatrixPosition(_t.matrixWorld);const J=tt.distanceTo(ot),At=rt.projectionMatrix.elements,Dt=_t.projectionMatrix.elements,Bt=At[14]/(At[10]-1),Pt=At[14]/(At[10]+1),Lt=(At[9]+1)/At[5],Xt=(At[9]-1)/At[5],Wt=(At[8]-1)/At[0],se=(Dt[8]+1)/Dt[0],k=Bt*Wt,ue=Bt*se,oe=J/(-Wt+se),le=oe*-Wt;if(rt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(le),W.translateZ(oe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),At[10]===-1)W.projectionMatrix.copy(rt.projectionMatrix),W.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Gt=Bt+oe,z=Pt+oe,A=k-le,Q=ue+(J-le),yt=Lt*Pt/z*Gt,Et=Xt*Pt/z*Gt;W.projectionMatrix.makePerspective(A,Q,yt,Et,Gt,z),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function B(W,rt){rt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(rt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let rt=W.near,_t=W.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),j.near=at.near=O.near=rt,j.far=at.far=O.far=_t,(Z!==j.near||Y!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),Z=j.near,Y=j.far),j.layers.mask=W.layers.mask|6,O.layers.mask=j.layers.mask&-5,at.layers.mask=j.layers.mask&-3;const J=W.parent,At=j.cameras;B(j,J);for(let Dt=0;Dt<At.length;Dt++)B(At[Dt],J);At.length===2?xt(j,O,at):j.projectionMatrix.copy(O.projectionMatrix),V(W,j,J)};function V(W,rt,_t){_t===null?W.matrix.copy(rt.matrixWorld):(W.matrix.copy(_t.matrixWorld),W.matrix.invert(),W.matrix.multiply(rt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(rt.projectionMatrix),W.projectionMatrixInverse.copy(rt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=vp*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(W){m=W,v!==null&&(v.fixedFoveation=W),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(j)},this.getCameraTexture=function(W){return S[W]};let et=null;function K(W,rt){if(x=rt.getViewerPose(h||f),M=rt,x!==null){const _t=x.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let J=!1;_t.length!==j.cameras.length&&(j.cameras.length=0,J=!0);for(let Pt=0;Pt<_t.length;Pt++){const Lt=_t[Pt];let Xt=null;if(y!==null)Xt=y.getViewport(Lt);else{const se=g.getViewSubImage(v,Lt);Xt=se.viewport,Pt===0&&(t.setRenderTargetTextures(D,se.colorTexture,se.depthStencilTexture),t.setRenderTarget(D))}let Wt=H[Pt];Wt===void 0&&(Wt=new li,Wt.layers.enable(Pt),Wt.viewport=new rn,H[Pt]=Wt),Wt.matrix.fromArray(Lt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Lt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Pt===0&&(j.matrix.copy(Wt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),J===!0&&j.cameras.push(Wt)}const At=l.enabledFeatures;if(At&&At.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=s.getBinding();const Pt=g.getDepthInformation(_t[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(Pt,l.renderState)}if(At&&At.includes("camera-access")&&C){t.state.unbindTexture(),g=s.getBinding();for(let Pt=0;Pt<_t.length;Pt++){const Lt=_t[Pt].camera;if(Lt){let Xt=S[Lt];Xt||(Xt=new Ex,S[Lt]=Xt);const Wt=g.getCameraImage(Lt);Xt.sourceTexture=Wt}}}}for(let _t=0;_t<G.length;_t++){const J=P[_t],At=G[_t];J!==null&&At!==void 0&&At.update(J,rt,h||f)}et&&et(W,rt),rt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:rt}),M=null}const ft=new wx;ft.setAnimationLoop(K),this.setAnimationLoop=function(W){et=W},this.dispose=function(){}}}const Bs=new Ca,qR=new Je;function YR(r,t){function i(_,S){_.matrixAutoUpdate===!0&&_.updateMatrix(),S.value.copy(_.matrix)}function s(_,S){S.color.getRGB(_.fogColor.value,Tx(r)),S.isFog?(_.fogNear.value=S.near,_.fogFar.value=S.far):S.isFogExp2&&(_.fogDensity.value=S.density)}function l(_,S,T,w,D){S.isMeshBasicMaterial?c(_,S):S.isMeshLambertMaterial?(c(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(_,S),g(_,S)):S.isMeshPhongMaterial?(c(_,S),x(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(_,S),v(_,S),S.isMeshPhysicalMaterial&&y(_,S,D)):S.isMeshMatcapMaterial?(c(_,S),M(_,S)):S.isMeshDepthMaterial?c(_,S):S.isMeshDistanceMaterial?(c(_,S),C(_,S)):S.isMeshNormalMaterial?c(_,S):S.isLineBasicMaterial?(f(_,S),S.isLineDashedMaterial&&p(_,S)):S.isPointsMaterial?m(_,S,T,w):S.isSpriteMaterial?h(_,S):S.isShadowMaterial?(_.color.value.copy(S.color),_.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(_,S){_.opacity.value=S.opacity,S.color&&_.diffuse.value.copy(S.color),S.emissive&&_.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(_.map.value=S.map,i(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,i(S.alphaMap,_.alphaMapTransform)),S.bumpMap&&(_.bumpMap.value=S.bumpMap,i(S.bumpMap,_.bumpMapTransform),_.bumpScale.value=S.bumpScale,S.side===Kn&&(_.bumpScale.value*=-1)),S.normalMap&&(_.normalMap.value=S.normalMap,i(S.normalMap,_.normalMapTransform),_.normalScale.value.copy(S.normalScale),S.side===Kn&&_.normalScale.value.negate()),S.displacementMap&&(_.displacementMap.value=S.displacementMap,i(S.displacementMap,_.displacementMapTransform),_.displacementScale.value=S.displacementScale,_.displacementBias.value=S.displacementBias),S.emissiveMap&&(_.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,_.emissiveMapTransform)),S.specularMap&&(_.specularMap.value=S.specularMap,i(S.specularMap,_.specularMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest);const T=t.get(S),w=T.envMap,D=T.envMapRotation;w&&(_.envMap.value=w,Bs.copy(D),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),_.envMapRotation.value.setFromMatrix4(qR.makeRotationFromEuler(Bs)),_.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=S.reflectivity,_.ior.value=S.ior,_.refractionRatio.value=S.refractionRatio),S.lightMap&&(_.lightMap.value=S.lightMap,_.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,_.lightMapTransform)),S.aoMap&&(_.aoMap.value=S.aoMap,_.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,_.aoMapTransform))}function f(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,S.map&&(_.map.value=S.map,i(S.map,_.mapTransform))}function p(_,S){_.dashSize.value=S.dashSize,_.totalSize.value=S.dashSize+S.gapSize,_.scale.value=S.scale}function m(_,S,T,w){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.size.value=S.size*T,_.scale.value=w*.5,S.map&&(_.map.value=S.map,i(S.map,_.uvTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,i(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function h(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.rotation.value=S.rotation,S.map&&(_.map.value=S.map,i(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,i(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function x(_,S){_.specular.value.copy(S.specular),_.shininess.value=Math.max(S.shininess,1e-4)}function g(_,S){S.gradientMap&&(_.gradientMap.value=S.gradientMap)}function v(_,S){_.metalness.value=S.metalness,S.metalnessMap&&(_.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,_.metalnessMapTransform)),_.roughness.value=S.roughness,S.roughnessMap&&(_.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,_.roughnessMapTransform)),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)}function y(_,S,T){_.ior.value=S.ior,S.sheen>0&&(_.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),_.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(_.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,_.sheenColorMapTransform)),S.sheenRoughnessMap&&(_.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,_.sheenRoughnessMapTransform))),S.clearcoat>0&&(_.clearcoat.value=S.clearcoat,_.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(_.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,_.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(_.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Kn&&_.clearcoatNormalScale.value.negate())),S.dispersion>0&&(_.dispersion.value=S.dispersion),S.iridescence>0&&(_.iridescence.value=S.iridescence,_.iridescenceIOR.value=S.iridescenceIOR,_.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(_.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,_.iridescenceMapTransform)),S.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),S.transmission>0&&(_.transmission.value=S.transmission,_.transmissionSamplerMap.value=T.texture,_.transmissionSamplerSize.value.set(T.width,T.height),S.transmissionMap&&(_.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,_.transmissionMapTransform)),_.thickness.value=S.thickness,S.thicknessMap&&(_.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=S.attenuationDistance,_.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(_.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(_.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=S.specularIntensity,_.specularColor.value.copy(S.specularColor),S.specularColorMap&&(_.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,_.specularColorMapTransform)),S.specularIntensityMap&&(_.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,S){S.matcap&&(_.matcap.value=S.matcap)}function C(_,S){const T=t.get(S).light;_.referencePosition.value.setFromMatrixPosition(T.matrixWorld),_.nearDistance.value=T.shadow.camera.near,_.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function ZR(r,t,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(T,w){const D=w.program;s.uniformBlockBinding(T,D)}function h(T,w){let D=l[T.id];D===void 0&&(M(T),D=x(T),l[T.id]=D,T.addEventListener("dispose",_));const G=w.program;s.updateUBOMapping(T,G);const P=t.render.frame;c[T.id]!==P&&(v(T),c[T.id]=P)}function x(T){const w=g();T.__bindingPointIndex=w;const D=r.createBuffer(),G=T.__size,P=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,G,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,D),D}function g(){for(let T=0;T<p;T++)if(f.indexOf(T)===-1)return f.push(T),T;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(T){const w=l[T.id],D=T.uniforms,G=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let P=0,I=D.length;P<I;P++){const E=Array.isArray(D[P])?D[P]:[D[P]];for(let O=0,at=E.length;O<at;O++){const H=E[O];if(y(H,P,O,G)===!0){const j=H.__offset,Z=Array.isArray(H.value)?H.value:[H.value];let Y=0;for(let $=0;$<Z.length;$++){const N=Z[$],F=C(N);typeof N=="number"||typeof N=="boolean"?(H.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,j+Y,H.__data)):N.isMatrix3?(H.__data[0]=N.elements[0],H.__data[1]=N.elements[1],H.__data[2]=N.elements[2],H.__data[3]=0,H.__data[4]=N.elements[3],H.__data[5]=N.elements[4],H.__data[6]=N.elements[5],H.__data[7]=0,H.__data[8]=N.elements[6],H.__data[9]=N.elements[7],H.__data[10]=N.elements[8],H.__data[11]=0):(N.toArray(H.__data,Y),Y+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,j,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(T,w,D,G){const P=T.value,I=w+"_"+D;if(G[I]===void 0)return typeof P=="number"||typeof P=="boolean"?G[I]=P:G[I]=P.clone(),!0;{const E=G[I];if(typeof P=="number"||typeof P=="boolean"){if(E!==P)return G[I]=P,!0}else if(E.equals(P)===!1)return E.copy(P),!0}return!1}function M(T){const w=T.uniforms;let D=0;const G=16;for(let I=0,E=w.length;I<E;I++){const O=Array.isArray(w[I])?w[I]:[w[I]];for(let at=0,H=O.length;at<H;at++){const j=O[at],Z=Array.isArray(j.value)?j.value:[j.value];for(let Y=0,$=Z.length;Y<$;Y++){const N=Z[Y],F=C(N),tt=D%G,ot=tt%F.boundary,xt=tt+ot;D+=ot,xt!==0&&G-xt<F.storage&&(D+=G-xt),j.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=D,D+=F.storage}}}const P=D%G;return P>0&&(D+=G-P),T.__size=D,T.__cache={},this}function C(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):de("WebGLRenderer: Unsupported uniform value type.",T),w}function _(T){const w=T.target;w.removeEventListener("dispose",_);const D=f.indexOf(w.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[w.id]),delete l[w.id],delete c[w.id]}function S(){for(const T in l)r.deleteBuffer(l[T]);f=[],l={},c={}}return{bind:m,update:h,dispose:S}}const KR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function QR(){return Vi===null&&(Vi=new Ib(KR,16,16,Jr,Aa),Vi.name="DFG_LUT",Vi.minFilter=On,Vi.magFilter=On,Vi.wrapS=ba,Vi.wrapT=ba,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class JR{constructor(t={}){const{canvas:i=db(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=ci}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=f;const C=y,_=new Set([Up,Np,Dp]),S=new Set([ci,Ki,dl,hl,Cp,wp]),T=new Uint32Array(4),w=new Int32Array(4);let D=null,G=null;const P=[],I=[];let E=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let at=!1;this._outputColorSpace=Si;let H=0,j=0,Z=null,Y=-1,$=null;const N=new rn,F=new rn;let tt=null;const ot=new be(0);let xt=0,B=i.width,V=i.height,et=1,K=null,ft=null;const W=new rn(0,0,B,V),rt=new rn(0,0,B,V);let _t=!1;const J=new zp;let At=!1,Dt=!1;const Bt=new Je,Pt=new ut,Lt=new rn,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function se(){return Z===null?et:1}let k=s;function ue(L,it){return i.getContext(L,it)}try{const L={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Tp}`),i.addEventListener("webglcontextlost",Qt,!1),i.addEventListener("webglcontextrestored",he,!1),i.addEventListener("webglcontextcreationerror",He,!1),k===null){const it="webgl2";if(k=ue(it,L),k===null)throw ue(it)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw Ue("WebGLRenderer: "+L.message),L}let oe,le,Gt,z,A,Q,yt,Et,gt,Vt,Ut,qt,ee,Ct,wt,kt,zt,Yt,ve,st,Ft,Ot,Zt;function Nt(){oe=new JT(k),oe.init(),Ft=new VR(k,oe),le=new jT(k,oe,t,Ft),Gt=new HR(k,oe),le.reversedDepthBuffer&&v&&Gt.buffers.depth.setReversed(!0),z=new eA(k),A=new AR,Q=new GR(k,oe,Gt,A,le,Ft,z),yt=new QT(O),Et=new rE(k),Ot=new VT(k,Et),gt=new $T(k,Et,z,Ot),Vt=new iA(k,gt,Et,Ot,z),Yt=new nA(k,le,Q),wt=new XT(A),Ut=new TR(O,yt,oe,le,Ot,wt),qt=new YR(O,A),ee=new CR,Ct=new OR(oe),zt=new GT(O,yt,Gt,Vt,M,m),kt=new zR(O,Vt,le),Zt=new ZR(k,z,le,Gt),ve=new kT(k,oe,z),st=new tA(k,oe,z),z.programs=Ut.programs,O.capabilities=le,O.extensions=oe,O.properties=A,O.renderLists=ee,O.shadowMap=kt,O.state=Gt,O.info=z}Nt(),C!==ci&&(E=new sA(C,i.width,i.height,l,c));const Mt=new WR(O,k);this.xr=Mt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const L=oe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=oe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(L){L!==void 0&&(et=L,this.setSize(B,V,!1))},this.getSize=function(L){return L.set(B,V)},this.setSize=function(L,it,vt=!0){if(Mt.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}B=L,V=it,i.width=Math.floor(L*et),i.height=Math.floor(it*et),vt===!0&&(i.style.width=L+"px",i.style.height=it+"px"),E!==null&&E.setSize(i.width,i.height),this.setViewport(0,0,L,it)},this.getDrawingBufferSize=function(L){return L.set(B*et,V*et).floor()},this.setDrawingBufferSize=function(L,it,vt){B=L,V=it,et=vt,i.width=Math.floor(L*vt),i.height=Math.floor(it*vt),this.setViewport(0,0,L,it)},this.setEffects=function(L){if(C===ci){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let it=0;it<L.length;it++)if(L[it].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(N)},this.getViewport=function(L){return L.copy(W)},this.setViewport=function(L,it,vt,pt){L.isVector4?W.set(L.x,L.y,L.z,L.w):W.set(L,it,vt,pt),Gt.viewport(N.copy(W).multiplyScalar(et).round())},this.getScissor=function(L){return L.copy(rt)},this.setScissor=function(L,it,vt,pt){L.isVector4?rt.set(L.x,L.y,L.z,L.w):rt.set(L,it,vt,pt),Gt.scissor(F.copy(rt).multiplyScalar(et).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(L){Gt.setScissorTest(_t=L)},this.setOpaqueSort=function(L){K=L},this.setTransparentSort=function(L){ft=L},this.getClearColor=function(L){return L.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(L=!0,it=!0,vt=!0){let pt=0;if(L){let ct=!1;if(Z!==null){const It=Z.texture.format;ct=_.has(It)}if(ct){const It=Z.texture.type,Kt=S.has(It),Ht=zt.getClearColor(),ne=zt.getClearAlpha(),ae=Ht.r,fe=Ht.g,me=Ht.b;Kt?(T[0]=ae,T[1]=fe,T[2]=me,T[3]=ne,k.clearBufferuiv(k.COLOR,0,T)):(w[0]=ae,w[1]=fe,w[2]=me,w[3]=ne,k.clearBufferiv(k.COLOR,0,w))}else pt|=k.COLOR_BUFFER_BIT}it&&(pt|=k.DEPTH_BUFFER_BIT),vt&&(pt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),pt!==0&&k.clear(pt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Qt,!1),i.removeEventListener("webglcontextrestored",he,!1),i.removeEventListener("webglcontextcreationerror",He,!1),zt.dispose(),ee.dispose(),Ct.dispose(),A.dispose(),yt.dispose(),Vt.dispose(),Ot.dispose(),Zt.dispose(),Ut.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",qs),Mt.removeEventListener("sessionend",Ys),Fi.stop()};function Qt(L){L.preventDefault(),_u("WebGLRenderer: Context Lost."),at=!0}function he(){_u("WebGLRenderer: Context Restored."),at=!1;const L=z.autoReset,it=kt.enabled,vt=kt.autoUpdate,pt=kt.needsUpdate,ct=kt.type;Nt(),z.autoReset=L,kt.enabled=it,kt.autoUpdate=vt,kt.needsUpdate=pt,kt.type=ct}function He(L){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ne(L){const it=L.target;it.removeEventListener("dispose",Ne),In(it)}function In(L){Mi(L),A.remove(L)}function Mi(L){const it=A.get(L).programs;it!==void 0&&(it.forEach(function(vt){Ut.releaseProgram(vt)}),L.isShaderMaterial&&Ut.releaseShaderCache(L))}this.renderBufferDirect=function(L,it,vt,pt,ct,It){it===null&&(it=Xt);const Kt=ct.isMesh&&ct.matrixWorld.determinant()<0,Ht=bl(L,it,vt,pt,ct);Gt.setMaterial(pt,Kt);let ne=vt.index,ae=1;if(pt.wireframe===!0){if(ne=gt.getWireframeAttribute(vt),ne===void 0)return;ae=2}const fe=vt.drawRange,me=vt.attributes.position;let Jt=fe.start*ae,xe=(fe.start+fe.count)*ae;It!==null&&(Jt=Math.max(Jt,It.start*ae),xe=Math.min(xe,(It.start+It.count)*ae)),ne!==null?(Jt=Math.max(Jt,0),xe=Math.min(xe,ne.count)):me!=null&&(Jt=Math.max(Jt,0),xe=Math.min(xe,me.count));const $e=xe-Jt;if($e<0||$e===1/0)return;Ot.setup(ct,pt,Ht,vt,ne);let tn,Pe=ve;if(ne!==null&&(tn=Et.get(ne),Pe=st,Pe.setIndex(tn)),ct.isMesh)pt.wireframe===!0?(Gt.setLineWidth(pt.wireframeLinewidth*se()),Pe.setMode(k.LINES)):Pe.setMode(k.TRIANGLES);else if(ct.isLine){let vn=pt.linewidth;vn===void 0&&(vn=1),Gt.setLineWidth(vn*se()),ct.isLineSegments?Pe.setMode(k.LINES):ct.isLineLoop?Pe.setMode(k.LINE_LOOP):Pe.setMode(k.LINE_STRIP)}else ct.isPoints?Pe.setMode(k.POINTS):ct.isSprite&&Pe.setMode(k.TRIANGLES);if(ct.isBatchedMesh)if(ct._multiDrawInstances!==null)vu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount,ct._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))Pe.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else{const vn=ct._multiDrawStarts,te=ct._multiDrawCounts,Bn=ct._multiDrawCount,pe=ne?Et.get(ne).bytesPerElement:1,zn=A.get(pt).currentProgram.getUniforms();for(let Qn=0;Qn<Bn;Qn++)zn.setValue(k,"_gl_DrawID",Qn),Pe.render(vn[Qn]/pe,te[Qn])}else if(ct.isInstancedMesh)Pe.renderInstances(Jt,$e,ct.count);else if(vt.isInstancedBufferGeometry){const vn=vt._maxInstanceCount!==void 0?vt._maxInstanceCount:1/0,te=Math.min(vt.instanceCount,vn);Pe.renderInstances(Jt,$e,te)}else Pe.render(Jt,$e)};function ao(L,it,vt){L.transparent===!0&&L.side===ji&&L.forceSinglePass===!1?(L.side=Kn,L.needsUpdate=!0,wa(L,it,vt),L.side=hs,L.needsUpdate=!0,wa(L,it,vt),L.side=ji):wa(L,it,vt)}this.compile=function(L,it,vt=null){vt===null&&(vt=L),G=Ct.get(vt),G.init(it),I.push(G),vt.traverseVisible(function(ct){ct.isLight&&ct.layers.test(it.layers)&&(G.pushLight(ct),ct.castShadow&&G.pushShadow(ct))}),L!==vt&&L.traverseVisible(function(ct){ct.isLight&&ct.layers.test(it.layers)&&(G.pushLight(ct),ct.castShadow&&G.pushShadow(ct))}),G.setupLights();const pt=new Set;return L.traverse(function(ct){if(!(ct.isMesh||ct.isPoints||ct.isLine||ct.isSprite))return;const It=ct.material;if(It)if(Array.isArray(It))for(let Kt=0;Kt<It.length;Kt++){const Ht=It[Kt];ao(Ht,vt,ct),pt.add(Ht)}else ao(It,vt,ct),pt.add(It)}),G=I.pop(),pt},this.compileAsync=function(L,it,vt=null){const pt=this.compile(L,it,vt);return new Promise(ct=>{function It(){if(pt.forEach(function(Kt){A.get(Kt).currentProgram.isReady()&&pt.delete(Kt)}),pt.size===0){ct(L);return}setTimeout(It,10)}oe.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Ws=null;function Sl(L){Ws&&Ws(L)}function qs(){Fi.stop()}function Ys(){Fi.start()}const Fi=new wx;Fi.setAnimationLoop(Sl),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(L){Ws=L,Mt.setAnimationLoop(L),L===null?Fi.stop():Fi.start()},Mt.addEventListener("sessionstart",qs),Mt.addEventListener("sessionend",Ys),this.render=function(L,it){if(it!==void 0&&it.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(at===!0)return;const vt=Mt.enabled===!0&&Mt.isPresenting===!0,pt=E!==null&&(Z===null||vt)&&E.begin(O,Z);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),it.parent===null&&it.matrixWorldAutoUpdate===!0&&it.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(it),it=Mt.getCamera()),L.isScene===!0&&L.onBeforeRender(O,L,it,Z),G=Ct.get(L,I.length),G.init(it),I.push(G),Bt.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),J.setFromProjectionMatrix(Bt,qi,it.reversedDepth),Dt=this.localClippingEnabled,At=wt.init(this.clippingPlanes,Dt),D=ee.get(L,P.length),D.init(),P.push(D),Mt.enabled===!0&&Mt.isPresenting===!0){const Kt=O.xr.getDepthSensingMesh();Kt!==null&&Zs(Kt,it,-1/0,O.sortObjects)}Zs(L,it,0,O.sortObjects),D.finish(),O.sortObjects===!0&&D.sort(K,ft),Wt=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,Wt&&zt.addToRenderList(D,L),this.info.render.frame++,At===!0&&wt.beginShadows();const ct=G.state.shadowsArray;if(kt.render(ct,L,it),At===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(pt&&E.hasRenderPass())===!1){const Kt=D.opaque,Ht=D.transmissive;if(G.setupLights(),it.isArrayCamera){const ne=it.cameras;if(Ht.length>0)for(let ae=0,fe=ne.length;ae<fe;ae++){const me=ne[ae];cn(Kt,Ht,L,me)}Wt&&zt.render(L);for(let ae=0,fe=ne.length;ae<fe;ae++){const me=ne[ae];bi(D,L,me,me.viewport)}}else Ht.length>0&&cn(Kt,Ht,L,it),Wt&&zt.render(L),bi(D,L,it)}Z!==null&&j===0&&(Q.updateMultisampleRenderTarget(Z),Q.updateRenderTargetMipmap(Z)),pt&&E.end(O),L.isScene===!0&&L.onAfterRender(O,L,it),Ot.resetDefaultState(),Y=-1,$=null,I.pop(),I.length>0?(G=I[I.length-1],At===!0&&wt.setGlobalState(O.clippingPlanes,G.state.camera)):G=null,P.pop(),P.length>0?D=P[P.length-1]:D=null};function Zs(L,it,vt,pt){if(L.visible===!1)return;if(L.layers.test(it.layers)){if(L.isGroup)vt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(it);else if(L.isLight)G.pushLight(L),L.castShadow&&G.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||J.intersectsSprite(L)){pt&&Lt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Bt);const Kt=Vt.update(L),Ht=L.material;Ht.visible&&D.push(L,Kt,Ht,vt,Lt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||J.intersectsObject(L))){const Kt=Vt.update(L),Ht=L.material;if(pt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Lt.copy(L.boundingSphere.center)):(Kt.boundingSphere===null&&Kt.computeBoundingSphere(),Lt.copy(Kt.boundingSphere.center)),Lt.applyMatrix4(L.matrixWorld).applyMatrix4(Bt)),Array.isArray(Ht)){const ne=Kt.groups;for(let ae=0,fe=ne.length;ae<fe;ae++){const me=ne[ae],Jt=Ht[me.materialIndex];Jt&&Jt.visible&&D.push(L,Kt,Jt,vt,Lt.z,me)}}else Ht.visible&&D.push(L,Kt,Ht,vt,Lt.z,null)}}const It=L.children;for(let Kt=0,Ht=It.length;Kt<Ht;Kt++)Zs(It[Kt],it,vt,pt)}function bi(L,it,vt,pt){const{opaque:ct,transmissive:It,transparent:Kt}=L;G.setupLightsView(vt),At===!0&&wt.setGlobalState(O.clippingPlanes,vt),pt&&Gt.viewport(N.copy(pt)),ct.length>0&&_n(ct,it,vt),It.length>0&&_n(It,it,vt),Kt.length>0&&_n(Kt,it,vt),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function cn(L,it,vt,pt){if((vt.isScene===!0?vt.overrideMaterial:null)!==null)return;if(G.state.transmissionRenderTarget[pt.id]===void 0){const Jt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");G.state.transmissionRenderTarget[pt.id]=new Zi(1,1,{generateMipmaps:!0,type:Jt?Aa:ci,minFilter:Vs,samples:Math.max(4,le.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const It=G.state.transmissionRenderTarget[pt.id],Kt=pt.viewport||N;It.setSize(Kt.z*O.transmissionResolutionScale,Kt.w*O.transmissionResolutionScale);const Ht=O.getRenderTarget(),ne=O.getActiveCubeFace(),ae=O.getActiveMipmapLevel();O.setRenderTarget(It),O.getClearColor(ot),xt=O.getClearAlpha(),xt<1&&O.setClearColor(16777215,.5),O.clear(),Wt&&zt.render(vt);const fe=O.toneMapping;O.toneMapping=Yi;const me=pt.viewport;if(pt.viewport!==void 0&&(pt.viewport=void 0),G.setupLightsView(pt),At===!0&&wt.setGlobalState(O.clippingPlanes,pt),_n(L,vt,pt),Q.updateMultisampleRenderTarget(It),Q.updateRenderTargetMipmap(It),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let xe=0,$e=it.length;xe<$e;xe++){const tn=it[xe],{object:Pe,geometry:vn,material:te,group:Bn}=tn;if(te.side===ji&&Pe.layers.test(pt.layers)){const pe=te.side;te.side=Kn,te.needsUpdate=!0,$i(Pe,vt,pt,vn,te,Bn),te.side=pe,te.needsUpdate=!0,Jt=!0}}Jt===!0&&(Q.updateMultisampleRenderTarget(It),Q.updateRenderTargetMipmap(It))}O.setRenderTarget(Ht,ne,ae),O.setClearColor(ot,xt),me!==void 0&&(pt.viewport=me),O.toneMapping=fe}function _n(L,it,vt){const pt=it.isScene===!0?it.overrideMaterial:null;for(let ct=0,It=L.length;ct<It;ct++){const Kt=L[ct],{object:Ht,geometry:ne,group:ae}=Kt;let fe=Kt.material;fe.allowOverride===!0&&pt!==null&&(fe=pt),Ht.layers.test(vt.layers)&&$i(Ht,it,vt,ne,fe,ae)}}function $i(L,it,vt,pt,ct,It){L.onBeforeRender(O,it,vt,pt,ct,It),L.modelViewMatrix.multiplyMatrices(vt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ct.onBeforeRender(O,it,vt,pt,L,It),ct.transparent===!0&&ct.side===ji&&ct.forceSinglePass===!1?(ct.side=Kn,ct.needsUpdate=!0,O.renderBufferDirect(vt,it,pt,ct,L,It),ct.side=hs,ct.needsUpdate=!0,O.renderBufferDirect(vt,it,pt,ct,L,It),ct.side=ji):O.renderBufferDirect(vt,it,pt,ct,L,It),L.onAfterRender(O,it,vt,pt,ct,It)}function wa(L,it,vt){it.isScene!==!0&&(it=Xt);const pt=A.get(L),ct=G.state.lights,It=G.state.shadowsArray,Kt=ct.state.version,Ht=Ut.getParameters(L,ct.state,It,it,vt),ne=Ut.getProgramCacheKey(Ht);let ae=pt.programs;pt.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?it.environment:null,pt.fog=it.fog;const fe=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;pt.envMap=yt.get(L.envMap||pt.environment,fe),pt.envMapRotation=pt.environment!==null&&L.envMap===null?it.environmentRotation:L.envMapRotation,ae===void 0&&(L.addEventListener("dispose",Ne),ae=new Map,pt.programs=ae);let me=ae.get(ne);if(me!==void 0){if(pt.currentProgram===me&&pt.lightsStateVersion===Kt)return Ml(L,Ht),me}else Ht.uniforms=Ut.getUniforms(L),L.onBeforeCompile(Ht,O),me=Ut.acquireProgram(Ht,ne),ae.set(ne,me),pt.uniforms=Ht.uniforms;const Jt=pt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Jt.clippingPlanes=wt.uniform),Ml(L,Ht),pt.needsLights=so(L),pt.lightsStateVersion=Kt,pt.needsLights&&(Jt.ambientLightColor.value=ct.state.ambient,Jt.lightProbe.value=ct.state.probe,Jt.directionalLights.value=ct.state.directional,Jt.directionalLightShadows.value=ct.state.directionalShadow,Jt.spotLights.value=ct.state.spot,Jt.spotLightShadows.value=ct.state.spotShadow,Jt.rectAreaLights.value=ct.state.rectArea,Jt.ltc_1.value=ct.state.rectAreaLTC1,Jt.ltc_2.value=ct.state.rectAreaLTC2,Jt.pointLights.value=ct.state.point,Jt.pointLightShadows.value=ct.state.pointShadow,Jt.hemisphereLights.value=ct.state.hemi,Jt.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,Jt.spotLightMatrix.value=ct.state.spotLightMatrix,Jt.spotLightMap.value=ct.state.spotLightMap,Jt.pointShadowMatrix.value=ct.state.pointShadowMatrix),pt.currentProgram=me,pt.uniformsList=null,me}function yl(L){if(L.uniformsList===null){const it=L.currentProgram.getUniforms();L.uniformsList=pu.seqWithValue(it.seq,L.uniforms)}return L.uniformsList}function Ml(L,it){const vt=A.get(L);vt.outputColorSpace=it.outputColorSpace,vt.batching=it.batching,vt.batchingColor=it.batchingColor,vt.instancing=it.instancing,vt.instancingColor=it.instancingColor,vt.instancingMorph=it.instancingMorph,vt.skinning=it.skinning,vt.morphTargets=it.morphTargets,vt.morphNormals=it.morphNormals,vt.morphColors=it.morphColors,vt.morphTargetsCount=it.morphTargetsCount,vt.numClippingPlanes=it.numClippingPlanes,vt.numIntersection=it.numClipIntersection,vt.vertexAlphas=it.vertexAlphas,vt.vertexTangents=it.vertexTangents,vt.toneMapping=it.toneMapping}function bl(L,it,vt,pt,ct){it.isScene!==!0&&(it=Xt),Q.resetTextureUnits();const It=it.fog,Kt=pt.isMeshStandardMaterial||pt.isMeshLambertMaterial||pt.isMeshPhongMaterial?it.environment:null,Ht=Z===null?O.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:$r,ne=pt.isMeshStandardMaterial||pt.isMeshLambertMaterial&&!pt.envMap||pt.isMeshPhongMaterial&&!pt.envMap,ae=yt.get(pt.envMap||Kt,ne),fe=pt.vertexColors===!0&&!!vt.attributes.color&&vt.attributes.color.itemSize===4,me=!!vt.attributes.tangent&&(!!pt.normalMap||pt.anisotropy>0),Jt=!!vt.morphAttributes.position,xe=!!vt.morphAttributes.normal,$e=!!vt.morphAttributes.color;let tn=Yi;pt.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(tn=O.toneMapping);const Pe=vt.morphAttributes.position||vt.morphAttributes.normal||vt.morphAttributes.color,vn=Pe!==void 0?Pe.length:0,te=A.get(pt),Bn=G.state.lights;if(At===!0&&(Dt===!0||L!==$)){const fn=L===$&&pt.id===Y;wt.setState(pt,L,fn)}let pe=!1;pt.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Bn.state.version||te.outputColorSpace!==Ht||ct.isBatchedMesh&&te.batching===!1||!ct.isBatchedMesh&&te.batching===!0||ct.isBatchedMesh&&te.batchingColor===!0&&ct.colorTexture===null||ct.isBatchedMesh&&te.batchingColor===!1&&ct.colorTexture!==null||ct.isInstancedMesh&&te.instancing===!1||!ct.isInstancedMesh&&te.instancing===!0||ct.isSkinnedMesh&&te.skinning===!1||!ct.isSkinnedMesh&&te.skinning===!0||ct.isInstancedMesh&&te.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&te.instancingColor===!1&&ct.instanceColor!==null||ct.isInstancedMesh&&te.instancingMorph===!0&&ct.morphTexture===null||ct.isInstancedMesh&&te.instancingMorph===!1&&ct.morphTexture!==null||te.envMap!==ae||pt.fog===!0&&te.fog!==It||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==wt.numPlanes||te.numIntersection!==wt.numIntersection)||te.vertexAlphas!==fe||te.vertexTangents!==me||te.morphTargets!==Jt||te.morphNormals!==xe||te.morphColors!==$e||te.toneMapping!==tn||te.morphTargetsCount!==vn)&&(pe=!0):(pe=!0,te.__version=pt.version);let zn=te.currentProgram;pe===!0&&(zn=wa(pt,it,ct));let Qn=!1,Ei=!1,Jn=!1;const ze=zn.getUniforms(),un=te.uniforms;if(Gt.useProgram(zn.program)&&(Qn=!0,Ei=!0,Jn=!0),pt.id!==Y&&(Y=pt.id,Ei=!0),Qn||$!==L){Gt.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),ze.setValue(k,"projectionMatrix",L.projectionMatrix),ze.setValue(k,"viewMatrix",L.matrixWorldInverse);const Ti=ze.map.cameraPosition;Ti!==void 0&&Ti.setValue(k,Pt.setFromMatrixPosition(L.matrixWorld)),le.logarithmicDepthBuffer&&ze.setValue(k,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(pt.isMeshPhongMaterial||pt.isMeshToonMaterial||pt.isMeshLambertMaterial||pt.isMeshBasicMaterial||pt.isMeshStandardMaterial||pt.isShaderMaterial)&&ze.setValue(k,"isOrthographic",L.isOrthographicCamera===!0),$!==L&&($=L,Ei=!0,Jn=!0)}if(te.needsLights&&(Bn.state.directionalShadowMap.length>0&&ze.setValue(k,"directionalShadowMap",Bn.state.directionalShadowMap,Q),Bn.state.spotShadowMap.length>0&&ze.setValue(k,"spotShadowMap",Bn.state.spotShadowMap,Q),Bn.state.pointShadowMap.length>0&&ze.setValue(k,"pointShadowMap",Bn.state.pointShadowMap,Q)),ct.isSkinnedMesh){ze.setOptional(k,ct,"bindMatrix"),ze.setOptional(k,ct,"bindMatrixInverse");const fn=ct.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),ze.setValue(k,"boneTexture",fn.boneTexture,Q))}ct.isBatchedMesh&&(ze.setOptional(k,ct,"batchingTexture"),ze.setValue(k,"batchingTexture",ct._matricesTexture,Q),ze.setOptional(k,ct,"batchingIdTexture"),ze.setValue(k,"batchingIdTexture",ct._indirectTexture,Q),ze.setOptional(k,ct,"batchingColorTexture"),ct._colorsTexture!==null&&ze.setValue(k,"batchingColorTexture",ct._colorsTexture,Q));const Hn=vt.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Yt.update(ct,vt,zn),(Ei||te.receiveShadow!==ct.receiveShadow)&&(te.receiveShadow=ct.receiveShadow,ze.setValue(k,"receiveShadow",ct.receiveShadow)),(pt.isMeshStandardMaterial||pt.isMeshLambertMaterial||pt.isMeshPhongMaterial)&&pt.envMap===null&&it.environment!==null&&(un.envMapIntensity.value=it.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=QR()),Ei&&(ze.setValue(k,"toneMappingExposure",O.toneMappingExposure),te.needsLights&&ps(un,Jn),It&&pt.fog===!0&&qt.refreshFogUniforms(un,It),qt.refreshMaterialUniforms(un,pt,et,V,G.state.transmissionRenderTarget[L.id]),pu.upload(k,yl(te),un,Q)),pt.isShaderMaterial&&pt.uniformsNeedUpdate===!0&&(pu.upload(k,yl(te),un,Q),pt.uniformsNeedUpdate=!1),pt.isSpriteMaterial&&ze.setValue(k,"center",ct.center),ze.setValue(k,"modelViewMatrix",ct.modelViewMatrix),ze.setValue(k,"normalMatrix",ct.normalMatrix),ze.setValue(k,"modelMatrix",ct.matrixWorld),pt.isShaderMaterial||pt.isRawShaderMaterial){const fn=pt.uniformsGroups;for(let Ti=0,ta=fn.length;Ti<ta;Ti++){const Ks=fn[Ti];Zt.update(Ks,zn),Zt.bind(Ks,zn)}}return zn}function ps(L,it){L.ambientLightColor.needsUpdate=it,L.lightProbe.needsUpdate=it,L.directionalLights.needsUpdate=it,L.directionalLightShadows.needsUpdate=it,L.pointLights.needsUpdate=it,L.pointLightShadows.needsUpdate=it,L.spotLights.needsUpdate=it,L.spotLightShadows.needsUpdate=it,L.rectAreaLights.needsUpdate=it,L.hemisphereLights.needsUpdate=it}function so(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(L,it,vt){const pt=A.get(L);pt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,pt.__autoAllocateDepthBuffer===!1&&(pt.__useRenderToTexture=!1),A.get(L.texture).__webglTexture=it,A.get(L.depthTexture).__webglTexture=pt.__autoAllocateDepthBuffer?void 0:vt,pt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,it){const vt=A.get(L);vt.__webglFramebuffer=it,vt.__useDefaultFramebuffer=it===void 0};const Da=k.createFramebuffer();this.setRenderTarget=function(L,it=0,vt=0){Z=L,H=it,j=vt;let pt=null,ct=!1,It=!1;if(L){const Ht=A.get(L);if(Ht.__useDefaultFramebuffer!==void 0){Gt.bindFramebuffer(k.FRAMEBUFFER,Ht.__webglFramebuffer),N.copy(L.viewport),F.copy(L.scissor),tt=L.scissorTest,Gt.viewport(N),Gt.scissor(F),Gt.setScissorTest(tt),Y=-1;return}else if(Ht.__webglFramebuffer===void 0)Q.setupRenderTarget(L);else if(Ht.__hasExternalTextures)Q.rebindTextures(L,A.get(L.texture).__webglTexture,A.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const fe=L.depthTexture;if(Ht.__boundDepthTexture!==fe){if(fe!==null&&A.has(fe)&&(L.width!==fe.image.width||L.height!==fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(L)}}const ne=L.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(It=!0);const ae=A.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ae[it])?pt=ae[it][vt]:pt=ae[it],ct=!0):L.samples>0&&Q.useMultisampledRTT(L)===!1?pt=A.get(L).__webglMultisampledFramebuffer:Array.isArray(ae)?pt=ae[vt]:pt=ae,N.copy(L.viewport),F.copy(L.scissor),tt=L.scissorTest}else N.copy(W).multiplyScalar(et).floor(),F.copy(rt).multiplyScalar(et).floor(),tt=_t;if(vt!==0&&(pt=Da),Gt.bindFramebuffer(k.FRAMEBUFFER,pt)&&Gt.drawBuffers(L,pt),Gt.viewport(N),Gt.scissor(F),Gt.setScissorTest(tt),ct){const Ht=A.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ht.__webglTexture,vt)}else if(It){const Ht=it;for(let ne=0;ne<L.textures.length;ne++){const ae=A.get(L.textures[ne]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ne,ae.__webglTexture,vt,Ht)}}else if(L!==null&&vt!==0){const Ht=A.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ht.__webglTexture,vt)}Y=-1},this.readRenderTargetPixels=function(L,it,vt,pt,ct,It,Kt,Ht=0){if(!(L&&L.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=A.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Kt!==void 0&&(ne=ne[Kt]),ne){Gt.bindFramebuffer(k.FRAMEBUFFER,ne);try{const ae=L.textures[Ht],fe=ae.format,me=ae.type;if(L.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ht),!le.textureFormatReadable(fe)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(me)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}it>=0&&it<=L.width-pt&&vt>=0&&vt<=L.height-ct&&k.readPixels(it,vt,pt,ct,Ft.convert(fe),Ft.convert(me),It)}finally{const ae=Z!==null?A.get(Z).__webglFramebuffer:null;Gt.bindFramebuffer(k.FRAMEBUFFER,ae)}}},this.readRenderTargetPixelsAsync=async function(L,it,vt,pt,ct,It,Kt,Ht=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ne=A.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Kt!==void 0&&(ne=ne[Kt]),ne)if(it>=0&&it<=L.width-pt&&vt>=0&&vt<=L.height-ct){Gt.bindFramebuffer(k.FRAMEBUFFER,ne);const ae=L.textures[Ht],fe=ae.format,me=ae.type;if(L.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ht),!le.textureFormatReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Jt),k.bufferData(k.PIXEL_PACK_BUFFER,It.byteLength,k.STREAM_READ),k.readPixels(it,vt,pt,ct,Ft.convert(fe),Ft.convert(me),0);const xe=Z!==null?A.get(Z).__webglFramebuffer:null;Gt.bindFramebuffer(k.FRAMEBUFFER,xe);const $e=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await hb(k,$e,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Jt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,It),k.deleteBuffer(Jt),k.deleteSync($e),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,it=null,vt=0){const pt=Math.pow(2,-vt),ct=Math.floor(L.image.width*pt),It=Math.floor(L.image.height*pt),Kt=it!==null?it.x:0,Ht=it!==null?it.y:0;Q.setTexture2D(L,0),k.copyTexSubImage2D(k.TEXTURE_2D,vt,0,0,Kt,Ht,ct,It),Gt.unbindTexture()};const Na=k.createFramebuffer(),ms=k.createFramebuffer();this.copyTextureToTexture=function(L,it,vt=null,pt=null,ct=0,It=0){let Kt,Ht,ne,ae,fe,me,Jt,xe,$e;const tn=L.isCompressedTexture?L.mipmaps[It]:L.image;if(vt!==null)Kt=vt.max.x-vt.min.x,Ht=vt.max.y-vt.min.y,ne=vt.isBox3?vt.max.z-vt.min.z:1,ae=vt.min.x,fe=vt.min.y,me=vt.isBox3?vt.min.z:0;else{const un=Math.pow(2,-ct);Kt=Math.floor(tn.width*un),Ht=Math.floor(tn.height*un),L.isDataArrayTexture?ne=tn.depth:L.isData3DTexture?ne=Math.floor(tn.depth*un):ne=1,ae=0,fe=0,me=0}pt!==null?(Jt=pt.x,xe=pt.y,$e=pt.z):(Jt=0,xe=0,$e=0);const Pe=Ft.convert(it.format),vn=Ft.convert(it.type);let te;it.isData3DTexture?(Q.setTexture3D(it,0),te=k.TEXTURE_3D):it.isDataArrayTexture||it.isCompressedArrayTexture?(Q.setTexture2DArray(it,0),te=k.TEXTURE_2D_ARRAY):(Q.setTexture2D(it,0),te=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,it.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,it.unpackAlignment);const Bn=k.getParameter(k.UNPACK_ROW_LENGTH),pe=k.getParameter(k.UNPACK_IMAGE_HEIGHT),zn=k.getParameter(k.UNPACK_SKIP_PIXELS),Qn=k.getParameter(k.UNPACK_SKIP_ROWS),Ei=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,tn.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,tn.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ae),k.pixelStorei(k.UNPACK_SKIP_ROWS,fe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,me);const Jn=L.isDataArrayTexture||L.isData3DTexture,ze=it.isDataArrayTexture||it.isData3DTexture;if(L.isDepthTexture){const un=A.get(L),Hn=A.get(it),fn=A.get(un.__renderTarget),Ti=A.get(Hn.__renderTarget);Gt.bindFramebuffer(k.READ_FRAMEBUFFER,fn.__webglFramebuffer),Gt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let ta=0;ta<ne;ta++)Jn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(L).__webglTexture,ct,me+ta),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(it).__webglTexture,It,$e+ta)),k.blitFramebuffer(ae,fe,Kt,Ht,Jt,xe,Kt,Ht,k.DEPTH_BUFFER_BIT,k.NEAREST);Gt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(ct!==0||L.isRenderTargetTexture||A.has(L)){const un=A.get(L),Hn=A.get(it);Gt.bindFramebuffer(k.READ_FRAMEBUFFER,Na),Gt.bindFramebuffer(k.DRAW_FRAMEBUFFER,ms);for(let fn=0;fn<ne;fn++)Jn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,un.__webglTexture,ct,me+fn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,un.__webglTexture,ct),ze?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Hn.__webglTexture,It,$e+fn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Hn.__webglTexture,It),ct!==0?k.blitFramebuffer(ae,fe,Kt,Ht,Jt,xe,Kt,Ht,k.COLOR_BUFFER_BIT,k.NEAREST):ze?k.copyTexSubImage3D(te,It,Jt,xe,$e+fn,ae,fe,Kt,Ht):k.copyTexSubImage2D(te,It,Jt,xe,ae,fe,Kt,Ht);Gt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ze?L.isDataTexture||L.isData3DTexture?k.texSubImage3D(te,It,Jt,xe,$e,Kt,Ht,ne,Pe,vn,tn.data):it.isCompressedArrayTexture?k.compressedTexSubImage3D(te,It,Jt,xe,$e,Kt,Ht,ne,Pe,tn.data):k.texSubImage3D(te,It,Jt,xe,$e,Kt,Ht,ne,Pe,vn,tn):L.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,It,Jt,xe,Kt,Ht,Pe,vn,tn.data):L.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,It,Jt,xe,tn.width,tn.height,Pe,tn.data):k.texSubImage2D(k.TEXTURE_2D,It,Jt,xe,Kt,Ht,Pe,vn,tn);k.pixelStorei(k.UNPACK_ROW_LENGTH,Bn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pe),k.pixelStorei(k.UNPACK_SKIP_PIXELS,zn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Qn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ei),It===0&&it.generateMipmaps&&k.generateMipmap(te),Gt.unbindTexture()},this.initRenderTarget=function(L){A.get(L).__webglFramebuffer===void 0&&Q.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Q.setTextureCube(L,0):L.isData3DTexture?Q.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Q.setTexture2DArray(L,0):Q.setTexture2D(L,0),Gt.unbindTexture()},this.resetState=function(){H=0,j=0,Z=null,Gt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const ll=400,$R=[.5,.8,.95,.6,.38,.14,.05,.55,.5,.8,.95,.6,.38,.14,.05,.55],Wr=3,Vv=Math.PI*.75,kv=2.6,Eh=1.4,cl=1.8;function t2({eegData:r,yScale:t,onExit:i}){const s=X.useRef(null),l=X.useRef(null),c=X.useRef(null),f=X.useRef(null),p=X.useRef([]),m=X.useRef(null),h=X.useRef(null),x=X.useRef(!1),g=X.useRef(new iE),v=X.useRef(r),y=X.useRef(t),M=X.useRef(i);v.current=r,y.current=t,M.current=i;const C=X.useCallback(()=>{if(x.current)return;x.current=!0,m.current&&(m.current.end().catch(()=>{}),m.current=null),h.current!=null&&(cancelAnimationFrame(h.current),h.current=null);const _=l.current;_&&(_.xr.enabled=!1,_.setAnimationLoop(null),_.dispose(),l.current=null),p.current=[]},[]);return X.useEffect(()=>{const _=s.current;if(!_)return;x.current=!1;const S=g.current;S.start();const T=new wb;T.background=new be(198159),T.fog=new Fp(198159,.07),c.current=T;const w=new li(80,window.innerWidth/window.innerHeight,.05,60);w.position.set(0,Eh,0),f.current=w;const D=new JR({antialias:!0,alpha:!1});D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.setSize(window.innerWidth,window.innerHeight),D.xr.enabled=!0,D.toneMapping=Ap,D.toneMappingExposure=1.2,_.appendChild(D.domElement),l.current=D;const G=new tE(1122884,.8);T.add(G);const P=new $b(4491519,1.5,25);P.position.set(0,Eh+1,0),T.add(P);const I=1500,E=new Float32Array(I*3),O=new Float32Array(I*3);for(let V=0;V<I;V++){const et=10+Math.random()*15,K=Math.random()*Math.PI*2,ft=Math.acos(2*Math.random()-1);E[V*3]=et*Math.sin(ft)*Math.cos(K),E[V*3+1]=et*Math.sin(ft)*Math.sin(K),E[V*3+2]=et*Math.cos(ft),O[V*3]=.7+Math.random()*.3,O[V*3+1]=.75+Math.random()*.25,O[V*3+2]=.85+Math.random()*.15}const at=new Fn;at.setAttribute("position",new Ln(E,3)),at.setAttribute("color",new Ln(O,3));const H=new xp({size:.05,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0}),j=new dv(at,H);T.add(j);const Y=[{color:4853888,center:[5,2,-10],count:400,spread:5},{color:666208,center:[-6,1,-9],count:350,spread:4},{color:14928,center:[1,4,-12],count:300,spread:4}].map(({color:V,center:et,count:K,spread:ft})=>{const W=new Float32Array(K*3);for(let At=0;At<K;At++)W[At*3]=et[0]+(Math.random()-.5)*ft,W[At*3+1]=et[1]+(Math.random()-.5)*ft,W[At*3+2]=et[2]+(Math.random()-.5)*ft;const rt=new Fn;rt.setAttribute("position",new Ln(W,3));const _t=new xp({color:V,size:.12,transparent:!0,opacity:.16,sizeAttenuation:!0,depthWrite:!1}),J=new dv(rt,_t);return T.add(J),J}),$=[],N=new be;for(let V=0;V<Oe;V++){const et=V/(Oe-1),K=-Vv/2+et*Vv,ft=Eh+kv/2-et*kv,W=$R[V],rt=new Float32Array(ll*3),_t=new Float32Array(ll*3),J=new Fn;J.setAttribute("position",new Ln(rt,3)),J.setAttribute("color",new Ln(_t,3)),J.setDrawRange(0,0);const At=new Hp({vertexColors:!0,transparent:!0,opacity:.92,linewidth:2}),Dt=new Mx(J,At);T.add(Dt);const Bt=document.createElement("canvas");Bt.width=128,Bt.height=48;const Pt=Bt.getContext("2d");Pt.clearRect(0,0,128,48),N.setHSL(W,.9,.7),Pt.font="bold 28px monospace",Pt.fillStyle=`#${N.getHexString()}`,Pt.textAlign="center",Pt.textBaseline="middle",Pt.fillText(`Ch ${V+1}`,64,24);const Lt=new Vb(Bt),Xt=new Sx({map:Lt,transparent:!0,opacity:.65}),Wt=new Pb(Xt);Wt.scale.set(.4,.15,1);const se=Math.sin(K)*(Wr+.05),k=-Math.cos(K)*(Wr+.05),ue=se-Math.cos(K)*(cl/2),oe=k+Math.sin(K)*(cl/2);Wt.position.set(ue-Math.cos(K)*.3,ft,oe+Math.sin(K)*.3),T.add(Wt);const le=new xl(cl+.3,.14),Gt=new Bp({color:new be().setHSL(W,1,.55),transparent:!0,opacity:.05,side:ji,depthWrite:!1}),z=new Qi(le,Gt);z.position.set(Math.sin(K)*Wr,ft,-Math.cos(K)*Wr),z.rotation.y=K,T.add(z),$.push({line:Dt,geometry:J,positions:rt,colors:_t,angle:K,yPos:ft,glowPlane:z,baseHue:W})}p.current=$;const F=new aE(12,24,660784,396830);T.add(F);function tt(V){const et=v.current,K=et.buffers.current;if(!K)return;const ft=et.samplesInBuffer.current,W=et.writeIndex.current,rt=et.bufferSize;if(ft<2)return;const _t=ft>ll?Math.floor(ft/ll):1,J=Math.min(ll,Math.ceil(ft/_t)),At=y.current||100;for(let Dt=0;Dt<Oe;Dt++){const{positions:Bt,colors:Pt,geometry:Lt,angle:Xt,yPos:Wt,glowPlane:se,baseHue:k}=$[Dt],ue=K[Dt],oe=Math.sin(Xt)*Wr,le=-Math.cos(Xt)*Wr,Gt=-Math.cos(Xt),z=-Math.sin(Xt),A=(k+Math.sin(V*.08+Dt*.4)*.08+1)%1,Q=.85+Math.sin(V*.15+Dt)*.1;let yt=0;for(let gt=0;gt<J;gt++){const Vt=gt*_t,Ut=(W-ft+Vt+rt)%rt,qt=gt/Math.max(1,J-1),ee=ue[Ut]/At;yt+=ee*ee,Bt[gt*3]=oe+Gt*(qt-.5)*cl,Bt[gt*3+1]=Wt+ee*.14,Bt[gt*3+2]=le+z*(qt-.5)*cl;const Ct=Math.sin(qt*Math.PI),wt=.35+Math.min(Math.abs(ee)*3,1)*.65,kt=Math.min(.95,.5*Ct+wt*.5);N.setHSL(A,Q,kt),Pt[gt*3]=N.r,Pt[gt*3+1]=N.g,Pt[gt*3+2]=N.b}Lt.attributes.position.needsUpdate=!0,Lt.attributes.color.needsUpdate=!0,Lt.setDrawRange(0,J);const Et=Math.sqrt(yt/Math.max(1,J));se.material.opacity=Math.min(.2,.03+Et*.9)}G.intensity=.6+Math.sin(V*.5)*.15,P.intensity=1.2+Math.sin(V*.3)*.4,j.rotation.y=V*.005,j.rotation.x=Math.sin(V*.003)*.02,Y.forEach((Dt,Bt)=>{Dt.material.opacity=.1+Math.sin(V*.2+Bt*2.1)*.06,Dt.rotation.y=V*.003*(Bt%2===0?1:-1)})}async function ot(){let V=null;if(navigator.xr)for(const et of["immersive-vr","immersive-ar","inline"])try{if(await navigator.xr.isSessionSupported(et)){V=et;break}}catch{}if(V&&V!=="inline")try{const et=await navigator.xr.requestSession(V,{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});m.current=et,D.xr.setSession(et),et.addEventListener("end",()=>{m.current=null,M.current()}),D.setAnimationLoop(()=>{tt(S.getElapsedTime()),D.render(T,w)});return}catch{}xt()}function xt(){let V=!1,et=0,K=0,ft=0,W=0,rt=!0;const _t=D.domElement,J=Pt=>{V=!0,rt=!1,et=Pt.clientX,K=Pt.clientY},At=()=>{V=!1},Dt=Pt=>{V&&(ft-=(Pt.clientX-et)*.003,W-=(Pt.clientY-K)*.003,W=Math.max(-Math.PI/3,Math.min(Math.PI/3,W)),et=Pt.clientX,K=Pt.clientY)};_t.addEventListener("pointerdown",J),_t.addEventListener("pointerup",At),_t.addEventListener("pointermove",Dt);function Bt(){const Pt=S.getElapsedTime();rt&&(ft=Pt*.04),w.rotation.order="YXZ",w.rotation.y=ft,w.rotation.x=W,tt(Pt),D.render(T,w),h.current=requestAnimationFrame(Bt)}h.current=requestAnimationFrame(Bt)}ot();function B(){l.current&&(w.aspect=window.innerWidth/window.innerHeight,w.updateProjectionMatrix(),D.setSize(window.innerWidth,window.innerHeight))}return window.addEventListener("resize",B),()=>{window.removeEventListener("resize",B),C(),_.contains(D.domElement)&&_.removeChild(D.domElement)}},[]),R.jsxs("div",{className:"xr-overlay",children:[R.jsx("div",{className:"xr-container",ref:s}),R.jsxs("div",{className:"xr-hud",children:[R.jsx("button",{className:"btn xr-exit-btn",onClick:()=>{C(),M.current()},children:"✕ Exit XR"}),R.jsxs("div",{className:"xr-info",children:[R.jsx("span",{className:"xr-badge",children:"WebXR"}),R.jsxs("span",{children:[Oe," channels · ±",t," µV"]})]})]})]})}const jv=256,Th=4,e2=2.5,bp=64,Xv=.25,n2=[{key:"Alpha",label:"α Alpha"},{key:"Beta",label:"β Beta"},{key:"Theta",label:"θ Theta"},{key:"Delta",label:"δ Delta"},{key:"Gamma",label:"γ Gamma"},{key:"Total",label:"Σ Total"}],Wv=[{label:"Fp1",x:-.3,y:-.85},{label:"Fp2",x:.3,y:-.85},{label:"F7",x:-.7,y:-.45},{label:"F3",x:-.35,y:-.45},{label:"Fz",x:0,y:-.4},{label:"F4",x:.35,y:-.45},{label:"F8",x:.7,y:-.45},{label:"C3",x:-.55,y:0},{label:"Cz",x:0,y:0},{label:"C4",x:.55,y:0},{label:"P3",x:-.45,y:.45},{label:"Pz",x:0,y:.42},{label:"P4",x:.45,y:.45},{label:"O1",x:-.25,y:.85},{label:"Oz",x:0,y:.8},{label:"O2",x:.25,y:.85}],Ah=[[6,10,20],[11,37,58],[18,92,109],[0,230,118],[255,215,64],[255,82,82],[255,255,255]],Pi=256,Mu=new Uint8Array(Pi),bu=new Uint8Array(Pi),Eu=new Uint8Array(Pi);(function(){const t=Ah.length-1;for(let i=0;i<Pi;i++){const l=i/(Pi-1)*t,c=Math.min(Math.floor(l),t-1),f=l-c,p=Ah[c],m=Ah[c+1];Mu[i]=p[0]+(m[0]-p[0])*f|0,bu[i]=p[1]+(m[1]-p[1])*f|0,Eu[i]=p[2]+(m[2]-p[2])*f|0}})();function i2(r,t){const i=r.length,s=[],l=[],c=[],f=[],p=[],m=[];for(let _=0;_<t;_++)for(let S=0;S<t;S++){const T=-1+2*(S+.5)/t,w=-1+2*(_+.5)/t,D=Math.sqrt(T*T+w*w);if(D>1.05)continue;s.push(_*t+S),l.push(T),c.push(w),f.push(D>.92?(1.05-D)/.13:1);const G=new Array(i);let P=-1,I=0;for(let E=0;E<i;E++){const O=T-r[E].x,at=w-r[E].y,H=Math.sqrt(O*O+at*at);if(H<.001){P=E;break}G[E]=1/H**e2,I+=G[E]}if(P>=0)p.push(P),m.push(new Array(i).fill(0));else{p.push(-1);for(let E=0;E<i;E++)G[E]/=I;m.push(G)}}const h=s.length,x=new Int32Array(s),g=new Float64Array(f),v=new Float64Array(l),y=new Float64Array(c),M=new Int16Array(p),C=new Float64Array(h*i);for(let _=0;_<h;_++){const S=_*i,T=m[_];for(let w=0;w<i;w++)C[S+w]=T[w]}return{cellCount:h,cellIndex:x,edgeFade:g,nx:v,ny:y,weights:C,exactElectrode:M}}function a2(r,t,i,s,l,c){const f=r.data;f.fill(0);let p=1/0,m=-1/0;for(let v=0;v<i.length;v++)i[v]<p&&(p=i[v]),i[v]>m&&(m=i[v]);m<=p&&(m=p+1);const h=m-p,x=(Pi-1)/h,g=t/l;for(let v=0;v<s.cellCount;v++){const y=s.cellIndex[v],M=y/l|0,C=y-M*l;let _;const S=s.exactElectrode[v];if(S>=0)_=i[S];else{_=0;const H=v*c;for(let j=0;j<c;j++)_+=s.weights[H+j]*i[j]}const T=Math.max(0,Math.min(Pi-1,(_-p)*x|0)),w=s.edgeFade[v]*255|0,D=Mu[T],G=bu[T],P=Eu[T],I=C*g|0,E=M*g|0,O=Math.min((C+1)*g|0,t),at=Math.min((M+1)*g|0,t);for(let H=E;H<at;H++){let j=(H*t+I)*4;for(let Z=I;Z<O;Z++)f[j]=D,f[j+1]=G,f[j+2]=P,f[j+3]=w,j+=4}}}function s2(r,t,i,s,l){const c=Math.min(t,i),f=t/2,p=i/2,m=c*.4;let h=1/0,x=-1/0;for(let _=0;_<s.length;_++)s[_]<h&&(h=s[_]),s[_]>x&&(x=s[_]);x<=h&&(x=h+1);const g=x-h;r.strokeStyle="rgba(255,255,255,0.25)",r.lineWidth=1.5,r.beginPath(),r.arc(f,p,m,0,Math.PI*2),r.stroke(),r.beginPath(),r.moveTo(f-m*.08,p-m),r.lineTo(f,p-m-m*.12),r.lineTo(f+m*.08,p-m),r.strokeStyle="rgba(255,255,255,0.3)",r.lineWidth=1.5,r.lineJoin="round",r.stroke();for(const _ of[!0,!1]){const S=_?f-m:f+m,T=_?-1:1;r.beginPath(),r.moveTo(S,p-m*.12),r.quadraticCurveTo(S+T*m*.08,p,S,p+m*.12),r.strokeStyle="rgba(255,255,255,0.2)",r.lineWidth=1.2,r.stroke()}for(let _=0;_<l.length&&_<s.length;_++){const S=f+l[_].x*m,T=p+l[_].y*m,w=Math.max(0,Math.min(Pi-1,(s[_]-h)/g*(Pi-1)|0)),D=Mu[w],G=bu[w],P=Eu[w];r.beginPath(),r.arc(S,T,5,0,Math.PI*2),r.fillStyle=`rgba(${D},${G},${P},0.4)`,r.shadowColor=`rgba(${D},${G},${P},0.6)`,r.shadowBlur=6,r.fill(),r.shadowBlur=0,r.beginPath(),r.arc(S,T,3,0,Math.PI*2),r.fillStyle="rgba(255,255,255,0.9)",r.fill(),r.beginPath(),r.arc(S,T,2,0,Math.PI*2),r.fillStyle=`rgb(${D},${G},${P})`,r.fill(),r.fillStyle="rgba(255,255,255,0.65)",r.font="7px monospace",r.textAlign="center",r.fillText(l[_].label,S,T+10)}const v=10,y=i*.5,M=t-v-8,C=(i-y)/2;for(let _=0;_<y;_++){const S=Math.max(0,Math.min(Pi-1,(1-_/y)*(Pi-1)|0));r.fillStyle=`rgb(${Mu[S]},${bu[S]},${Eu[S]})`,r.fillRect(M,C+_,v,1)}r.strokeStyle="rgba(255,255,255,0.15)",r.lineWidth=.5,r.strokeRect(M,C,v,y),r.fillStyle="rgba(255,255,255,0.4)",r.font="7px monospace",r.textAlign="right",r.fillText(x.toFixed(1),M-3,C+4),r.fillText(h.toFixed(1),M-3,C+y)}const os=bp*4,r2=X.memo(function({eegData:t}){var O;const i=X.useRef(null),s=X.useRef(0),l=X.useRef(0),c=X.useRef(window.devicePixelRatio||1),f=X.useRef(!0),p=X.useRef({w:0,h:0,pw:0,ph:0}),m=X.useRef(new Array(Oe).fill(0)),h=X.useRef(new Array(Oe).fill(0)),x=X.useRef(0),g=X.useRef(null),v=X.useRef({}),y=X.useRef(0),[M,C]=X.useState("Alpha"),[_,S]=X.useState(!1),[T,w]=X.useState({}),[D,G]=X.useState({band:"",freq:0}),P=X.useMemo(()=>new ds(jv,Ze),[]),I=X.useMemo(()=>i2(Wv,bp),[]);X.useEffect(()=>{const at=i.current;if(!at)return;const H=at.getContext("2d",{alpha:!1}),j=document.createElement("canvas");j.width=os,j.height=os;const Z=j.getContext("2d");(!g.current||g.current.width!==os)&&(g.current=new ImageData(os,os));const Y=new ResizeObserver(N=>{const F=N[0];if(!F)return;const tt=window.devicePixelRatio||1;c.current=tt;const{width:ot,height:xt}=F.contentRect;p.current={w:ot,h:xt,pw:Math.round(ot*tt),ph:Math.round(xt*tt)},f.current=!0});Y.observe(at);const $=()=>{const{w:N,h:F,pw:tt,ph:ot}=p.current;if(N===0||F===0){s.current=requestAnimationFrame($);return}if(f.current&&(f.current=!1,at.width=tt,at.height=ot),H.setTransform(c.current,0,0,c.current,0,0),H.fillStyle="#0d1117",H.fillRect(0,0,N,F),l.current++,!_){const V=t.buffers.current,et=t.writeIndex.current,K=t.samplesInBuffer.current;if(V&&K>=jv){const ft=x.current,W=ft*Th,rt=Math.min(W+Th,Oe),_t=h.current,J=m.current,At=v.current;for(let Bt=W;Bt<rt;Bt++){const Pt=P.analyseRing(V[Bt],et,K);if(Pt){_t[Bt]=M==="Total"?Pt.totalPower:Pt.bandPowers[M]||0,J[Bt]=J[Bt]*(1-Xv)+_t[Bt]*Xv;for(const Lt of nn)At[Lt.name]=(At[Lt.name]||0)-(At[`_ch${Bt}_${Lt.name}`]||0)+(Pt.bandPowers[Lt.name]||0),At[`_ch${Bt}_${Lt.name}`]=Pt.bandPowers[Lt.name]||0}}x.current=(ft+1)%Math.ceil(Oe/Th);const Dt=performance.now();if(Dt-y.current>400){y.current=Dt;const Bt={};let Pt="",Lt=0;for(const Xt of nn)Bt[Xt.name]=(At[Xt.name]||0)/Oe,Bt[Xt.name]>Lt&&(Lt=Bt[Xt.name],Pt=Xt.name);w(Bt),G(Xt=>Xt.band===Pt?Xt:{band:Pt,freq:0})}}}const xt=m.current;if(xt.some(V=>V!==0)){const V=g.current;a2(V,os,xt,I,bp,Oe),Z.putImageData(V,0,0);const K=Math.min(N,F)*.4,ft=N/2,W=F/2,rt=K*2.1;H.imageSmoothingEnabled=!0,H.imageSmoothingQuality="high",H.drawImage(j,0,0,os,os,ft-rt/2,W-rt/2,rt,rt),s2(H,N,F,xt,Wv)}else H.fillStyle="#4b5563",H.font="13px monospace",H.textAlign="center",H.fillText("Collecting samples…",N/2,F/2);s.current=requestAnimationFrame($)};return s.current=requestAnimationFrame($),()=>{cancelAnimationFrame(s.current),Y.disconnect()}},[t,M,_,P,I]);const E=((O=nn.find(at=>at.name===D.band))==null?void 0:O.color)||"#8b949e";return R.jsxs("div",{className:"topomap-panel",children:[R.jsxs("div",{className:"topomap-toolbar",children:[R.jsx("span",{className:"topomap-title",children:"Topomap"}),R.jsx("div",{className:"topomap-metrics",children:n2.map(at=>R.jsx("button",{className:`topo-metric${M===at.key?" active":""}`,onClick:()=>C(at.key),children:at.label},at.key))}),R.jsx("span",{className:"topo-dominant",children:R.jsx("strong",{style:{color:E},children:D.band||"—"})}),R.jsx("button",{className:`btn topo-pause${_?" active":""}`,onClick:()=>S(at=>!at),children:_?"▶":"⏸"})]}),R.jsx("div",{className:"topomap-canvas-wrap",children:R.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}})}),R.jsx("div",{className:"topomap-bands",children:nn.map(at=>{const H=T[at.name]||0,j=Math.max(...nn.map(Y=>T[Y.name]||0),1e-6),Z=j>0?H/j*100:0;return R.jsxs("div",{className:"topo-band",children:[R.jsx("span",{className:"topo-band-dot",style:{background:at.color}}),R.jsx("span",{className:"topo-band-name",style:{color:at.color},children:at.label}),R.jsx("div",{className:"topo-band-track",children:R.jsx("div",{className:"topo-band-fill",style:{width:`${Z}%`,background:at.color}})}),R.jsx("span",{className:"topo-band-val",children:H<.01?H.toExponential(1):H.toFixed(2)})]},at.name)})})]})}),ls=256,qv=60,Yv=6;function o2(){const r=new Uint8ClampedArray(1024);for(let t=0;t<256;t++){const i=t/255;let s,l,c;if(i<.25){const p=i/.25;s=48+p*20,l=18+p*100,c=120+p*135}else if(i<.5){const p=(i-.25)/.25;s=68-p*40,l=118+p*120,c=255-p*80}else if(i<.75){const p=(i-.5)/.25;s=28+p*200,l=238-p*40,c=175-p*130}else{const p=(i-.75)/.25;s=228+p*27,l=198-p*160,c=45-p*40}const f=t*4;r[f]=Math.max(0,Math.min(255,Math.round(s))),r[f+1]=Math.max(0,Math.min(255,Math.round(l))),r[f+2]=Math.max(0,Math.min(255,Math.round(c))),r[f+3]=255}return r}const qr=o2(),l2=X.memo(function({eegData:t}){const i=X.useRef(null),s=X.useRef(0),l=X.useRef(0),c=X.useRef(window.devicePixelRatio||1),f=X.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),p=X.useRef(!0),m=X.useRef(new Float64Array(ls)),h=X.useRef([]),x=X.useRef(0),g=X.useRef(0),v=X.useRef(400),y=X.useRef(-60),M=X.useRef(1e-30),C=X.useRef(null),[_,S]=X.useState(-1),[T,w]=X.useState(!1),D=X.useMemo(()=>new ds(ls,Ze),[]),G=X.useMemo(()=>{const E=Ze/ls;return Math.min(Math.ceil(qv/E)+1,(ls>>1)+1)},[]);X.useEffect(()=>{const E=i.current;if(!E)return;const O=E.getContext("2d",{alpha:!1}),at=new ResizeObserver($=>{const N=$[0];if(!N)return;const F=window.devicePixelRatio||1;c.current=F;const{width:tt,height:ot}=N.contentRect;f.current={w:tt,h:ot,pw:Math.round(tt*F),ph:Math.round(ot*F),dpr:F},p.current=!0;const xt=Math.max(200,Math.round(tt));xt!==v.current&&(v.current=xt,h.current=[],x.current=0,g.current=0,M.current=1e-30),C.current=null});at.observe(E);let H=null,j=0,Z=0;const Y=()=>{const{w:$,h:N,pw:F,ph:tt}=f.current;if($===0||N===0){s.current=requestAnimationFrame(Y);return}if(p.current&&(p.current=!1,E.width=F,E.height=tt,H=null),O.setTransform(c.current,0,0,c.current,0,0),l.current++,!T&&l.current%Yv===0){const ot=t.buffers.current,xt=t.writeIndex.current,B=t.samplesInBuffer.current;if(ot&&B>=ls){let V;if(_===-1){const et=m.current,K=t.bufferSize,ft=(xt-ls+K)%K;for(let W=0;W<ls;W++){let rt=0;const _t=(ft+W)%K;for(let J=0;J<Oe;J++)rt+=ot[J][_t];et[W]=rt/Oe}V=D.analyse(et,0)}else V=D.analyseRing(ot[_],xt,B);if(V){const et=v.current,K=h.current,ft=x.current;let W;K.length<et?(W=new Float64Array(G),K.push(W),g.current=K.length):W=K[ft];for(let rt=0;rt<G;rt++)W[rt]=V.psd[rt];x.current=(ft+1)%et;for(let rt=1;rt<G;rt++)W[rt]>M.current&&(M.current=W[rt])}}}P(O,$,N,H,j,Z,(ot,xt,B)=>{H=ot,j=xt,Z=B}),s.current=requestAnimationFrame(Y)};return s.current=requestAnimationFrame(Y),()=>{cancelAnimationFrame(s.current),at.disconnect()}},[t,_,T,D,G]);function P(E,O,at,H,j,Z,Y){E.fillStyle="#0d1117",E.fillRect(0,0,O,at);const $=g.current;if($<2){E.fillStyle="#4b5563",E.font="13px monospace",E.textAlign="center",E.fillText("Collecting spectrogram data…",O/2,at/2);return}const N=44,F=12,tt=8,ot=22,xt=O-N-F,B=at-tt-ot,V=y.current,et=M.current,K=h.current,ft=x.current,W=$,rt=G-1,_t=W,J=rt;let At=H;(!At||j!==_t||Z!==J)&&(At=E.createImageData(_t,J));const Dt=At.data,Bt=1/-V,Pt=Math.log10;for(let z=0;z<W;z++){const A=$<v.current?z:(ft+z)%$,Q=K[A];for(let yt=0;yt<rt;yt++){const Et=Q[yt+1];let Vt=(10*Pt((Et||1e-30)/et)-V)*Bt;Vt<0?Vt=0:Vt>1&&(Vt=1);const qt=(Vt*255+.5|0)*4,Ct=((rt-1-yt)*_t+z)*4;Dt[Ct]=qr[qt],Dt[Ct+1]=qr[qt+1],Dt[Ct+2]=qr[qt+2],Dt[Ct+3]=255}}E.save(),E.imageSmoothingEnabled=!1,E.putImageData(At,0,0),E.drawImage(E.canvas,0,0,_t,J,N,tt,xt,B),E.fillStyle="#0d1117",E.fillRect(0,0,N,tt+B),E.restore(),Y(At,_t,J);const Lt=Ze/ls;E.fillStyle="#8b949e",E.font="9px monospace",E.textAlign="right";const Xt=B/rt;for(const z of[5,10,20,30,40,50]){if(z>qv)continue;const A=Math.round(z/Lt)-1;if(A<0||A>=rt)continue;const Q=tt+(rt-1-A)*Xt;E.fillText(`${z}`,N-4,Q+3)}E.save(),E.translate(10,tt+B/2),E.rotate(-Math.PI/2),E.textAlign="center",E.fillStyle="#8b949e",E.font="9px monospace",E.fillText("Hz",0,0),E.restore();const Wt=W*Yv/60;E.textAlign="center",E.fillStyle="#8b949e",E.font="9px monospace";const se=Wt>30?10:Wt>10?5:2;for(let z=0;z<=Wt;z+=se){const A=N+z/Wt*xt;E.fillText(`-${(Wt-z).toFixed(0)}s`,A,at-4)}E.fillText("now",N+xt,at-4);const k=8,ue=O-F+2,oe=tt,le=Math.round(B);let Gt=C.current;if(!Gt||Gt.h!==le){const z=E.createImageData(k,le),A=z.data;for(let Q=0;Q<le;Q++){const Et=((1-Q/le)*255+.5|0)*4,gt=qr[Et],Vt=qr[Et+1],Ut=qr[Et+2];for(let qt=0;qt<k;qt++){const ee=(Q*k+qt)*4;A[ee]=gt,A[ee+1]=Vt,A[ee+2]=Ut,A[ee+3]=255}}Gt={img:z,h:le},C.current=Gt}E.putImageData(Gt.img,Math.round(ue*c.current),Math.round(oe*c.current)),E.fillStyle="#8b949e",E.font="8px monospace",E.textAlign="left",E.fillText("0",ue+k+2,oe+6),E.fillText(`${V}`,ue+k+2,oe+le),E.fillText("dB",ue+k+2,oe+le/2+3)}const I=_===-1?"Avg":`Ch ${_+1}`;return R.jsxs("div",{className:"spectrogram-panel",children:[R.jsxs("div",{className:"spectrogram-toolbar",children:[R.jsxs("span",{className:"spectrogram-title",children:["Spectrogram"," ",R.jsx("small",{style:{color:"var(--text-dim)",fontWeight:400},children:I})]}),R.jsxs("div",{className:"spectrogram-channels",children:[R.jsx("button",{className:`sp-ch${_===-1?" active":""}`,onClick:()=>S(-1),children:"Avg"}),Array.from({length:Oe},(E,O)=>R.jsx("button",{className:`sp-ch${_===O?" active":""}`,onClick:()=>S(O),children:O+1},O))]}),R.jsx("div",{className:"spectrogram-ctrls",children:R.jsx("button",{className:`btn${T?" active":""}`,onClick:()=>w(E=>!E),children:T?"▶":"⏸"})})]}),R.jsxs("div",{className:"spectrogram-canvas-wrap",children:[R.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}}),T&&R.jsx("div",{className:"spectral-paused",children:"PAUSED"})]})]})});function c2(r,t,i,s){if(r<=0)return 0;const l=r/i,c=1/(1+Math.pow(l,2*s)),f=t/r,p=1/(1+Math.pow(f,2*s));return Math.sqrt(c*p)}const u2=X.memo(function({enabled:t,lowcut:i,highcut:s,order:l=5}){const c=X.useRef(null),f=X.useRef(window.devicePixelRatio||1),p=X.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),m=X.useRef(!0),h=X.useCallback(()=>{const x=c.current;if(!x)return;const g=x.getContext("2d",{alpha:!1});if(!g)return;const{w:v,h:y}=p.current;if(v===0||y===0)return;g.setTransform(f.current,0,0,f.current,0,0),g.fillStyle="#0d1117",g.fillRect(0,0,v,y);const M=42,C=12,_=16,S=22,T=v-M-C,w=y-_-S,D=Ze/2,G=Math.min(D,125);if(t){const I=M+Math.max(i,0)/G*T,E=M+Math.min(s,G)/G*T;g.fillStyle="rgba(63, 185, 80, 0.08)",g.fillRect(I,_,E-I,w),g.strokeStyle="rgba(63, 185, 80, 0.5)",g.lineWidth=1,g.setLineDash([4,3]);for(const H of[i,s]){const j=M+H/G*T;g.beginPath(),g.moveTo(j,_),g.lineTo(j,_+w),g.stroke()}g.setLineDash([]),g.fillStyle="rgba(63, 185, 80, 0.8)",g.font="9px monospace",g.textAlign="center";const O=M+i/G*T,at=M+s/G*T;g.fillText(`${i} Hz`,O,_-4),g.fillText(`${s} Hz`,at,_-4)}g.strokeStyle="rgba(48,54,61,0.45)",g.lineWidth=.5;for(const I of[0,-10,-20,-30,-40,-50,-60]){const E=_+-I/60*w;g.beginPath(),g.moveTo(M,E),g.lineTo(M+T,E),g.stroke()}for(const I of[1,5,10,20,30,50,100]){if(I>G)continue;const E=M+I/G*T;g.beginPath(),g.moveTo(E,_),g.lineTo(E,_+w),g.stroke()}if(t){g.beginPath();const I=Math.max(200,Math.round(T));for(let E=0;E<=I;E++){const O=E/I*G,at=c2(O,i,s,l),H=20*Math.log10(Math.max(at,1e-6)),j=Math.max(-60,H),Z=_+-j/60*w,Y=M+O/G*T;E===0?g.moveTo(Y,Z):g.lineTo(Y,Z)}g.strokeStyle="#3fb950",g.lineWidth=2,g.lineJoin="round",g.stroke(),g.lineTo(M+T,_+w),g.lineTo(M,_+w),g.closePath(),g.fillStyle="rgba(63, 185, 80, 0.06)",g.fill()}else g.strokeStyle="rgba(139, 148, 158, 0.6)",g.lineWidth=1.5,g.setLineDash([6,4]),g.beginPath(),g.moveTo(M,_),g.lineTo(M+T,_),g.stroke(),g.setLineDash([]),g.fillStyle="#6e7681",g.font="12px monospace",g.textAlign="center",g.fillText("Filter OFF — unfiltered passthrough",M+T/2,_+w/2);const P=_+3/60*w;g.strokeStyle="rgba(210, 153, 34, 0.5)",g.lineWidth=.8,g.setLineDash([3,3]),g.beginPath(),g.moveTo(M,P),g.lineTo(M+T,P),g.stroke(),g.setLineDash([]),g.fillStyle="rgba(210, 153, 34, 0.7)",g.font="8px monospace",g.textAlign="right",g.fillText("-3 dB",M-4,P+3),g.fillStyle="#8b949e",g.font="9px monospace",g.textAlign="right";for(const I of[0,-20,-40,-60]){const E=_+-I/60*w;g.fillText(`${I}`,M-4,E+3)}g.save(),g.translate(10,_+w/2),g.rotate(-Math.PI/2),g.textAlign="center",g.fillStyle="#8b949e",g.font="9px monospace",g.fillText("dB",0,0),g.restore(),g.fillStyle="#8b949e",g.font="9px monospace",g.textAlign="center";for(const I of[1,10,20,30,50,100])I>G||g.fillText(`${I}`,M+I/G*T,y-4);g.fillText("Hz",M+T+2,y-4),t&&(g.fillStyle="#3fb950",g.font="bold 10px monospace",g.textAlign="right",g.fillText(`Butterworth order ${l} · ${i}–${s} Hz`,M+T,_+w+14))},[t,i,s,l]);return X.useEffect(()=>{const x=c.current;if(!x)return;const g=new ResizeObserver(v=>{const y=v[0];if(!y)return;const M=window.devicePixelRatio||1;f.current=M;const{width:C,height:_}=y.contentRect;p.current={w:C,h:_,pw:Math.round(C*M),ph:Math.round(_*M),dpr:M},x.width=Math.round(C*M),x.height=Math.round(_*M),m.current=!0,h()});return g.observe(x),m.current=!0,h(),()=>g.disconnect()},[h]),R.jsxs("div",{className:"filter-preview-panel",children:[R.jsxs("div",{className:"filter-preview-toolbar",children:[R.jsx("span",{className:"filter-preview-title",children:"Filter Response"}),R.jsx("span",{className:"filter-preview-meta",children:t?`Bandpass ${i}–${s} Hz · Order ${l}`:"Disabled"})]}),R.jsx("div",{className:"filter-preview-canvas-wrap",children:R.jsx("canvas",{ref:c,style:{display:"block",width:"100%",height:"100%"}})})]})}),f2=500;function d2(r,t,i,s){const l=Math.min(t,Ze*2);let c=0,f=0,p=1/0,m=-1/0,h=0,x=null;for(let D=t-l;D<t;D++){const G=(i-t+D+s)%s,P=r[G];c+=P,f+=P*P,P<p&&(p=P),P>m&&(m=P),x!==null&&(x>=0&&P<0||x<0&&P>=0)&&h++,x=P}const g=l>0?c/l:0,v=l>1?f/l-g*g:0,y=Math.sqrt(Math.max(0,v)),M=Math.sqrt(f/Math.max(1,l)),C=m-p;let _=0,S=0;for(let D=t-l;D<t;D++){const G=(i-t+D+s)%s,P=r[G]-g,I=P*P;_+=I*P,S+=I*I}const T=y>1e-10?_/l/(y*y*y):0,w=y>1e-10?S/l/(y*y*y*y)-3:0;return{ch:0,mean:g,rms:M,pp:C,min:p===1/0?0:p,max:m===-1/0?0:m,std:y,variance:v,skewness:T,kurtosis:w,zeroCross:h}}const h2=X.memo(function({eegData:t}){const[i,s]=X.useState([]),[l,c]=X.useState("ch"),[f,p]=X.useState(!0),m=X.useRef(void 0);X.useEffect(()=>{function y(){const M=t.buffers.current,C=t.writeIndex.current,_=t.samplesInBuffer.current,S=t.bufferSize;if(!M||_<10)return;const T=[];for(let w=0;w<Oe;w++){const D=d2(M[w],_,C,S);D.ch=w,T.push(D)}s(T)}return y(),m.current=setInterval(y,f2),()=>clearInterval(m.current)},[t]);const h=X.useCallback(y=>{c(M=>M===y?(p(C=>!C),y):(p(!0),y))},[]),x=[...i].sort((y,M)=>{const C=y[l],_=M[l];return f?C-_:_-C}),g=X.useCallback(()=>{const M=[["Channel","Mean","RMS","Std","Variance","Peak-Peak","Min","Max","Skewness","Kurtosis","Zero-Crossings"].join(",")];for(const T of x)M.push([`Ch ${T.ch+1}`,T.mean.toFixed(4),T.rms.toFixed(4),T.std.toFixed(4),T.variance.toFixed(4),T.pp.toFixed(4),T.min.toFixed(4),T.max.toFixed(4),T.skewness.toFixed(4),T.kurtosis.toFixed(4),T.zeroCross.toString()].join(","));const C=new Blob([M.join(`
`)],{type:"text/csv"}),_=URL.createObjectURL(C),S=document.createElement("a");S.href=_,S.download=`pieeg_stats_${new Date().toISOString().replace(/[:.]/g,"-")}.csv`,S.click(),URL.revokeObjectURL(_)},[x]),v=[{key:"ch",label:"Ch",unit:"",precision:0},{key:"mean",label:"Mean",unit:"µV",precision:2},{key:"rms",label:"RMS",unit:"µV",precision:2},{key:"std",label:"Std",unit:"µV",precision:2},{key:"pp",label:"P-P",unit:"µV",precision:1},{key:"min",label:"Min",unit:"µV",precision:1},{key:"max",label:"Max",unit:"µV",precision:1},{key:"skewness",label:"Skew",unit:"",precision:2},{key:"kurtosis",label:"Kurt",unit:"",precision:2},{key:"zeroCross",label:"ZX",unit:"/2s",precision:0}];return R.jsxs("div",{className:"stats-panel",children:[R.jsxs("div",{className:"stats-toolbar",children:[R.jsx("span",{className:"stats-title",children:"Signal Statistics"}),R.jsxs("span",{className:"stats-meta",children:["16 channels · ",Ze," Hz · 2s window"]}),R.jsx("button",{className:"btn stats-btn-export",onClick:g,title:"Download stats as CSV",children:"⬇ CSV"})]}),R.jsx("div",{className:"stats-table-wrap",children:R.jsxs("table",{className:"stats-table",children:[R.jsx("thead",{children:R.jsx("tr",{children:v.map(y=>R.jsxs("th",{onClick:()=>h(y.key),className:l===y.key?"sorted":"",title:y.unit?`${y.label} (${y.unit})`:y.label,children:[y.label,l===y.key&&R.jsx("span",{className:"sort-arrow",children:f?" ▲":" ▼"})]},y.key))})}),R.jsx("tbody",{children:x.map(y=>R.jsxs("tr",{children:[R.jsxs("td",{className:"stats-ch-cell",children:[R.jsx("span",{className:"stats-ch-dot",style:{background:Tu[y.ch]}}),y.ch+1]}),R.jsx("td",{children:y.mean.toFixed(2)}),R.jsx("td",{children:y.rms.toFixed(2)}),R.jsx("td",{children:y.std.toFixed(2)}),R.jsx("td",{children:y.pp.toFixed(1)}),R.jsx("td",{children:y.min.toFixed(1)}),R.jsx("td",{children:y.max.toFixed(1)}),R.jsx("td",{children:y.skewness.toFixed(2)}),R.jsx("td",{children:y.kurtosis.toFixed(2)}),R.jsx("td",{children:y.zeroCross})]},y.ch))})]})})]})});function p2(){const[r,t]=X.useState(null),[i,s]=X.useState(!1),[l,c]=X.useState(!1),[f,p]=X.useState(!1);if(X.useEffect(()=>{fetch("/api/update/check").then(v=>v.json()).then(v=>{v.error||t(v),s(!0)}).catch(()=>s(!0))},[]),l||!i||!(r!=null&&r.update_available))return null;const m=r.install_method==="git",h=/win/i.test(navigator.platform),x=m?`git pull origin main
pip install -e .`:"pip install --upgrade pieeg-server",g=h?".\\pieeg-server.cmd":"pieeg-server";return R.jsxs("div",{className:"update-banner",children:[R.jsxs("div",{className:"update-banner-content",children:[R.jsxs("span",{className:"update-banner-text",children:["Update available: ",R.jsx("strong",{children:r.current_version})," →"," ",R.jsx("strong",{children:r.latest_version})]}),R.jsx("button",{className:"btn update-btn",onClick:()=>p(v=>!v),children:f?"Hide instructions":"How to update"}),R.jsx("button",{className:"update-dismiss",onClick:()=>c(!0),title:"Dismiss",children:"✕"})]}),f&&R.jsxs("div",{className:"update-howto",children:[R.jsx("p",{children:m?"Run these commands in your project folder:":"Run this command:"}),R.jsx("pre",{children:R.jsx("code",{children:x})}),R.jsx("p",{children:"Then restart the server:"}),R.jsx("pre",{children:R.jsx("code",{children:g})})]})]})}const m2=[{key:"Space",desc:"Pause / Resume"},{key:"R",desc:"Start / Stop recording"},{key:"F",desc:"Toggle FFT panel"},{key:"G",desc:"Toggle Spectrogram"},{key:"S",desc:"Toggle Statistics panel"},{key:"V",desc:"Toggle XR / VR view"},{key:"P",desc:"Toggle performance monitor"},{key:"?",desc:"Show this help"},{key:"Esc",desc:"Close overlay / panel"}];function g2(){const[r,t]=X.useState(!1);return X.useEffect(()=>{function i(s){const l=s.target.tagName;l==="INPUT"||l==="SELECT"||l==="TEXTAREA"||((s.key==="?"||s.shiftKey&&s.code==="Slash")&&(s.preventDefault(),t(c=>!c)),s.code==="Escape"&&r&&t(!1))}return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[r]),r?R.jsx("div",{className:"modal-overlay",onClick:()=>t(!1),children:R.jsxs("div",{className:"shortcut-card",onClick:i=>i.stopPropagation(),children:[R.jsx("h2",{children:"Keyboard Shortcuts"}),R.jsx("div",{className:"shortcut-grid",children:m2.map(i=>R.jsxs("div",{className:"shortcut-row",children:[R.jsx("kbd",{children:i.key}),R.jsx("span",{children:i.desc})]},i.key))}),R.jsx("button",{className:"btn shortcut-close",onClick:()=>t(!1),children:"Close"})]})}):null}const Px=256,_2=new ds(Px,Ze);function v2(r){const{buffers:t,writeIndex:i,samplesInBuffer:s,bufferSize:l}=r,c=i.current,f=s.current;if(f<Px)return"EEG: insufficient data (buffering).";const p=["## Live EEG Snapshot"],m={};for(const x of nn)m[x.name]=[];let h=0;for(let x=0;x<Oe;x++){const g=_2.analyseRing(t.current[x],c,f);if(!g)continue;h++;const v=g.bandPowers;for(const C of nn)m[C.name].push(v[C.name]??0);const y=g.dominantFrequency.toFixed(1),M=g.totalPower.toFixed(1);p.push(`Ch${x+1}: peak ${y} Hz, power ${M} µV²`)}if(h>0){p.push(`
### Average Band Powers (µV²)`);for(const x of nn){const v=m[x.name].reduce((y,M)=>y+M,0)/h;p.push(`${x.label}: ${v.toFixed(2)}`)}}return p.push(`
Channels: ${h}/${Oe} active, ${Ze} Hz sample rate`),p.join(`
`)}const Zv="You are an EEG research assistant embedded in the PiEEG-16 dashboard. You can see a live snapshot of the user's EEG spectral data (band powers, dominant frequencies). Answer questions about the data, suggest interpretations, and help with EEG analysis. Be concise. Remember: this is a research tool, not a medical device.",Kv={endpoint:"https://api.openai.com/v1/chat/completions",apiKey:"",model:"gpt-4o-mini"},Fx="pieeg-chat-config";function x2(){try{const r=localStorage.getItem(Fx);if(r){const t=JSON.parse(r);return{...Kv,...t}}}catch{}return{...Kv}}function S2(r){const t={endpoint:r.endpoint,model:r.model};localStorage.setItem(Fx,JSON.stringify(t))}function y2(r){const[t,i]=X.useState([]),[s,l]=X.useState(!1),[c,f]=X.useState(null),[p,m]=X.useState(x2),h=X.useRef(null),x=X.useCallback(y=>{m(y),S2(y)},[]),g=X.useCallback(()=>{h.current&&h.current.abort(),i([]),f(null),l(!1)},[]),v=X.useCallback(y=>{if(!y.trim()||s)return;const M=v2(r),C={role:"user",content:y.trim()};if(i(T=>[...T,C]),f(null),!p.apiKey){const T={role:"assistant",content:`**Eco mode** — no API key configured. Here's what the AI would see:

---
**System prompt:**
${Zv}

**EEG context:**
${M}

**Your message:**
${y.trim()}
---

Add your API key & endpoint in ⚙ Settings to enable AI responses.`};i(w=>[...w,T]);return}const _=new AbortController;h.current=_,l(!0);const S=[{role:"system",content:`${Zv}

${M}`},...t.slice(-20),C];(async()=>{var T,w,D,G;try{const P={"Content-Type":"application/json"};p.apiKey&&(P.Authorization=`Bearer ${p.apiKey}`);const I=await fetch(p.endpoint,{method:"POST",headers:P,body:JSON.stringify({model:p.model,messages:S,stream:!0}),signal:_.signal});if(!I.ok){const j=await I.text();throw new Error(`${I.status}: ${j.slice(0,200)}`)}const E=(T=I.body)==null?void 0:T.getReader();if(!E)throw new Error("No response body");const O=new TextDecoder;let at="",H="";for(i(j=>[...j,{role:"assistant",content:""}]);;){const{done:j,value:Z}=await E.read();if(j)break;at+=O.decode(Z,{stream:!0});const Y=at.split(`
`);at=Y.pop()??"";for(const $ of Y){const N=$.trim();if(!N.startsWith("data: "))continue;const F=N.slice(6);if(F==="[DONE]")break;try{const ot=(G=(D=(w=JSON.parse(F).choices)==null?void 0:w[0])==null?void 0:D.delta)==null?void 0:G.content;if(ot){H+=ot;const xt=H;i(B=>{const V=[...B];return V[V.length-1]={role:"assistant",content:xt},V})}}catch{}}}}catch(P){if(P.name==="AbortError")return;f(P.message)}finally{l(!1),h.current=null}})()},[p,r,t,s]);return{messages:t,streaming:s,error:c,config:p,setConfig:x,send:v,clear:g}}const M2=X.memo(function({eegData:t,open:i,onClose:s}){const{messages:l,streaming:c,error:f,config:p,setConfig:m,send:h,clear:x}=y2(t),[g,v]=X.useState(""),[y,M]=X.useState(!1),C=X.useRef(null),_=X.useRef(null);X.useEffect(()=>{var w;(w=C.current)==null||w.scrollIntoView({behavior:"smooth"})},[l]),X.useEffect(()=>{i&&setTimeout(()=>{var w;return(w=_.current)==null?void 0:w.focus()},150)},[i]);const S=X.useCallback(()=>{g.trim()&&(h(g),v(""))},[g,h]),T=X.useCallback(w=>{w.key==="Enter"&&!w.shiftKey&&(w.preventDefault(),S())},[S]);return R.jsxs("div",{className:`chat-panel${i?" open":""}`,children:[R.jsxs("div",{className:"chat-header",children:[R.jsxs("span",{className:"chat-title",children:["🧠 EEG Assistant",!p.apiKey&&R.jsx("span",{className:"chat-eco-badge",children:"ECO"})]}),R.jsxs("div",{className:"chat-header-actions",children:[R.jsx("button",{className:"chat-icon-btn",onClick:()=>M(w=>!w),title:"Settings",children:"⚙"}),R.jsx("button",{className:"chat-icon-btn",onClick:x,title:"Clear chat",children:"🗑"}),R.jsx("button",{className:"chat-icon-btn",onClick:s,title:"Close",children:"✕"})]})]}),y&&R.jsx(b2,{config:p,onChange:m,onClose:()=>M(!1)}),R.jsxs("div",{className:"chat-messages",children:[l.length===0&&R.jsx("div",{className:"chat-empty",children:p.apiKey?"Ask anything about your live EEG data.":`No API key — running in eco mode.
Messages will show the context snapshot the AI would receive.

Open ⚙ Settings to configure your provider.`}),l.map((w,D)=>R.jsx("div",{className:`chat-msg chat-msg-${w.role}`,children:R.jsx("div",{className:"chat-msg-content",children:w.content||"…"})},D)),f&&R.jsx("div",{className:"chat-error",children:f}),R.jsx("div",{ref:C})]}),R.jsxs("div",{className:"chat-input-area",children:[R.jsx("textarea",{ref:_,className:"chat-input",value:g,onChange:w=>v(w.target.value),onKeyDown:T,placeholder:c?"Waiting for response…":"Ask about your EEG…",rows:1,disabled:c}),R.jsx("button",{className:"chat-send-btn",onClick:S,disabled:c||!g.trim(),children:c?"…":"↑"})]})]})});function b2({config:r,onChange:t,onClose:i}){const[s,l]=X.useState(r.endpoint),[c,f]=X.useState(r.apiKey),[p,m]=X.useState(r.model),h=()=>{t({endpoint:s.trim(),apiKey:c.trim(),model:p.trim()}),i()};return R.jsxs("div",{className:"chat-settings",children:[R.jsxs("label",{children:["Endpoint",R.jsx("input",{type:"url",value:s,onChange:x=>l(x.target.value),placeholder:"https://api.openai.com/v1/chat/completions"})]}),R.jsxs("label",{children:["API Key",R.jsx("input",{type:"password",value:c,onChange:x=>f(x.target.value),placeholder:"sk-… (leave empty for eco mode)",autoComplete:"off"})]}),R.jsxs("label",{children:["Model",R.jsx("input",{type:"text",value:p,onChange:x=>m(x.target.value),placeholder:"gpt-4o-mini, claude-3-haiku, llama3, …"})]}),R.jsxs("div",{className:"chat-settings-hint",children:["Works with any OpenAI-compatible endpoint:",R.jsx("br",{}),"OpenAI · Anthropic · Ollama · LM Studio · Groq · Together"]}),R.jsxs("div",{className:"chat-settings-actions",children:[R.jsx("button",{className:"btn",onClick:h,children:"Save"}),R.jsx("button",{className:"btn",onClick:i,children:"Cancel"})]})]})}class Rh extends X.Component{constructor(){super(...arguments);wi(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,s){console.error("[ErrorBoundary]",i,s.componentStack)}render(){var i;return this.state.hasError?R.jsx("div",{className:"error-boundary",children:R.jsxs("div",{className:"error-card",children:[R.jsx("h2",{children:"Something went wrong"}),R.jsx("p",{className:"error-msg",children:(i=this.state.error)==null?void 0:i.message}),R.jsx("button",{className:"btn",onClick:()=>this.setState({hasError:!1,error:null}),children:"Retry"})]})}):this.props.children}}const Qv=new Set(Array.from({length:Oe},(r,t)=>t)),E2=new Set([0,1,2,3]),T2=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],A2=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"},{value:16,label:"16s"}];function R2(){const[r,t]=X.useState("live"),[i,s]=X.useState(null),[l,c]=X.useState(!1),[f,p]=X.useState(!0),[m,h]=X.useState(!1),[x,g]=X.useState(1),[v,y]=X.useState(40),[M,C]=X.useState(4),[_,S]=X.useState(100),[T,w]=X.useState(null),[D,G]=X.useState(!1),[P,I]=X.useState(!1),[E,O]=X.useState(!1),[at,H]=X.useState(!1),[j,Z]=X.useState(()=>window.innerWidth<768?new Set(E2):new Set(Qv)),Y=aM(M),$=X.useRef(j);$.current=j;const N=X.useCallback(K=>{Z(ft=>{const W=new Set(ft);return W.has(K)?W.delete(K):W.add(K),W})},[]),F=X.useCallback(K=>{Z(K?new Set(Qv):new Set)},[]);function tt(){const K=!l;c(K),Y.setPaused(K)}function ot(){const K=!m;h(K),Y.sendCommand({cmd:"set_filter",enabled:K,lowcut:parseFloat(String(x))||1,highcut:parseFloat(String(v))||40})}function xt(){Y.sendCommand({cmd:Y.recording?"stop_record":"start_record"})}function B(K){const ft=Math.floor(K/60),W=Math.floor(K%60);return`${String(ft).padStart(2,"0")}:${String(W).padStart(2,"0")}`}function V(K,ft){m&&Y.sendCommand({cmd:"set_filter",enabled:!0,lowcut:parseFloat(String(K))||1,highcut:parseFloat(String(ft))||40})}const et=X.useCallback(K=>{if(!$.current.has(K)){Z(ft=>{const W=new Set(ft);return W.add(K),W});return}w(ft=>ft===K?null:K)},[]);return X.useEffect(()=>{function K(ft){const W=ft.target.tagName;if(!(W==="INPUT"||W==="SELECT"||W==="TEXTAREA")){if(r!=="live"){ft.code==="Escape"&&(r==="playback"?(t("sessions"),s(null)):r==="sessions"&&t("live"));return}switch(ft.code){case"Space":ft.preventDefault(),tt();break;case"KeyR":xt();break;case"KeyF":p(rt=>!rt);break;case"KeyV":G(rt=>!rt);break;case"KeyS":O(rt=>!rt);break;case"KeyC":H(rt=>!rt);break;case"KeyG":I(rt=>!rt);break;case"Escape":D?G(!1):T!==null?w(null):Y.recordResult&&Y.dismissRecordResult();break}}}return window.addEventListener("keydown",K),()=>window.removeEventListener("keydown",K)},[T,Y.recordResult,r]),r==="playback"&&i?R.jsx(zd,{children:R.jsx(Rh,{children:R.jsx(NM,{filename:i,onBack:()=>{t("sessions"),s(null)}})})}):r==="sessions"?R.jsx(zd,{children:R.jsx(Rh,{children:R.jsx(EM,{onSelect:K=>{s(K),t("playback")},onBack:()=>t("live")})})}):(Y.data.gridSuspended=T!==null&&j.has(T),R.jsxs(zd,{children:[R.jsx(p2,{}),R.jsxs("header",{className:"header",children:[R.jsxs("h1",{children:["Pi",R.jsx("span",{children:"EEG"}),"-16"," ",R.jsx("small",{style:{fontWeight:400,color:"var(--text-dim)"},children:"Dashboard"})]}),R.jsxs("div",{className:"status-bar",children:[R.jsxs("span",{children:[R.jsx("span",{className:`status-dot${Y.connected?" connected":""}`}),Y.connected?" Connected":" Disconnected"]}),Y.latencyMs!==null&&R.jsxs("span",{className:`latency-badge${Y.latencyMs>100?" warn":""}${Y.latencyMs>500?" critical":""}`,children:[Y.latencyMs," ms"]}),R.jsx("span",{className:`live-badge${l?" paused":""}`,children:l?"⏸ PAUSED":"● LIVE"}),R.jsx("span",{children:Y.hz?`${Y.hz} Hz`:"— Hz"}),R.jsxs("span",{children:[Y.sampleCount.toLocaleString()," samples"]})]})]}),R.jsxs("div",{className:"controls",children:[R.jsx("button",{className:`btn${l?" active":""}`,onClick:tt,children:l?"▶ Resume":"⏸ Pause"}),R.jsxs("button",{className:`btn btn-record${Y.recording?" recording":""}`,onClick:xt,children:[R.jsx("span",{className:"rec-dot"}),Y.recording?`⏹ Stop ${B(Y.recordElapsed)}`:"⏺ Record"]}),R.jsxs("button",{className:`btn${m?" active":""}`,onClick:ot,children:["Filter: ",m?"ON":"OFF"]}),R.jsxs("button",{className:`btn${f?" active":""}`,onClick:()=>p(K=>!K),children:["FFT ",f?"ON":"OFF"]}),R.jsxs("button",{className:`btn${P?" active":""}`,onClick:()=>I(K=>!K),children:["Spectrogram ",P?"ON":"OFF"]}),R.jsxs("button",{className:`btn${E?" active":""}`,onClick:()=>O(K=>!K),children:["Stats ",E?"ON":"OFF"]}),R.jsx("button",{className:"btn btn-sessions",onClick:()=>t("sessions"),children:"Sessions"}),R.jsx("button",{className:`btn btn-chat${at?" active":""}`,onClick:()=>H(K=>!K),children:"🧠 Chat"}),R.jsx("button",{className:"btn btn-xr",onClick:()=>G(!0),title:"Open EEG waves in immersive 3D / VR",children:"🥽 XR View"}),R.jsx("div",{className:"sep"}),R.jsxs("div",{className:"control-group",children:[R.jsx("label",{children:"Low"}),R.jsx("input",{type:"number",value:x,min:.1,max:50,step:.5,onChange:K=>{g(K.target.value),V(K.target.value,v)}})," ","Hz"]}),R.jsxs("div",{className:"control-group",children:[R.jsx("label",{children:"High"}),R.jsx("input",{type:"number",value:v,min:1,max:125,step:1,onChange:K=>{y(K.target.value),V(x,K.target.value)}})," ","Hz"]}),R.jsx("div",{className:"sep"}),R.jsxs("div",{className:"control-group",children:[R.jsx("label",{children:"Time window"}),R.jsx("select",{value:M,onChange:K=>C(parseInt(K.target.value)),children:A2.map(K=>R.jsx("option",{value:K.value,children:K.label},K.value))})]}),R.jsxs("div",{className:"control-group",children:[R.jsx("label",{children:"Scale"}),R.jsx("select",{value:_,onChange:K=>S(parseInt(K.target.value)),children:T2.map(K=>R.jsx("option",{value:K.value,children:K.label},K.value))})]})]}),R.jsxs("div",{className:"channel-selector",children:[R.jsx("span",{className:"cs-label",children:"Channels"}),R.jsx("button",{className:"cs-toggle",onClick:()=>F(!0),children:"All"}),R.jsx("button",{className:"cs-toggle",onClick:()=>F(!1),children:"None"}),R.jsx("div",{className:"cs-grid",children:Array.from({length:Oe},(K,ft)=>R.jsx("button",{className:`cs-ch${j.has(ft)?" on":""}`,onClick:()=>N(ft),children:ft+1},ft))}),R.jsxs("span",{className:"cs-count",children:[j.size,"/",Oe]})]}),R.jsx(Rh,{children:R.jsxs("div",{className:`main-area${f?" with-fft":""}${P||E||m?" with-analysis":""}`,children:[T!==null&&j.has(T)&&R.jsx(_M,{chIdx:T,eegData:Y.data,yRange:_,onClose:()=>w(null)}),R.jsx("div",{className:"grid",children:Array.from({length:Oe},(K,ft)=>R.jsx(cM,{chIdx:ft,eegData:Y.data,yRange:_,active:j.has(ft),onToggleExpand:()=>et(ft)},ft))}),f&&R.jsxs("div",{className:"fft-area",children:[R.jsx(MM,{eegData:Y.data}),R.jsx(r2,{eegData:Y.data})]}),m&&R.jsx(u2,{enabled:m,lowcut:parseFloat(String(x))||1,highcut:parseFloat(String(v))||40}),(P||E)&&R.jsxs("div",{className:"analysis-area",children:[P&&R.jsx(l2,{eegData:Y.data}),E&&R.jsx(h2,{eegData:Y.data})]})]})}),Y.recordResult&&R.jsx("div",{className:"modal-overlay",children:R.jsxs("div",{className:"modal-card",children:[R.jsx("h2",{children:"Recording Complete"}),R.jsxs("div",{className:"modal-details",children:[R.jsxs("div",{className:"modal-row",children:[R.jsx("span",{className:"modal-label",children:"File"}),R.jsx("span",{className:"modal-value",children:Y.recordResult.filename})]}),R.jsxs("div",{className:"modal-row",children:[R.jsx("span",{className:"modal-label",children:"Duration"}),R.jsx("span",{className:"modal-value",children:B(Y.recordResult.duration)})]}),R.jsxs("div",{className:"modal-row",children:[R.jsx("span",{className:"modal-label",children:"Frames"}),R.jsx("span",{className:"modal-value",children:Y.recordResult.frames.toLocaleString()})]}),R.jsxs("div",{className:"modal-row",children:[R.jsx("span",{className:"modal-label",children:"Saved to"}),R.jsx("span",{className:"modal-value modal-path",children:Y.recordResult.path})]})]}),R.jsxs("div",{className:"modal-actions",children:[R.jsx("a",{className:"btn modal-btn-download",href:Y.recordResult.downloadUrl,download:!0,children:"Download CSV"}),R.jsx("button",{className:"btn modal-btn-view",onClick:()=>{const K=Y.recordResult.filename;Y.dismissRecordResult(),s(K),t("playback")},children:"View Session"}),R.jsx("button",{className:"btn modal-btn-dismiss",onClick:Y.dismissRecordResult,children:"Dismiss"})]})]})}),D&&R.jsx(t2,{eegData:Y.data,yScale:_,onExit:()=>G(!1)}),R.jsx(bM,{}),R.jsx(M2,{eegData:Y.data,open:at,onClose:()=>H(!1)}),R.jsx(g2,{}),R.jsxs("footer",{className:"footer",children:[R.jsx("span",{children:"PiEEG-16-server · React Dashboard"}),R.jsxs("span",{className:"kbd-hints",children:[R.jsx("kbd",{children:"Space"})," Pause ",R.jsx("kbd",{children:"R"})," Record ",R.jsx("kbd",{children:"F"})," FFT ",R.jsx("kbd",{children:"G"})," Gram ",R.jsx("kbd",{children:"S"})," Stats ",R.jsx("kbd",{children:"V"})," XR ",R.jsx("kbd",{children:"C"})," Chat ",R.jsx("kbd",{children:"Esc"})," Close ",R.jsx("kbd",{children:"P"})," Perf"]}),R.jsx("span",{children:"Battery powered only · Not a medical device"})]})]}))}tM.createRoot(document.getElementById("root")).render(R.jsx(Wy.StrictMode,{children:R.jsx(R2,{})}));
