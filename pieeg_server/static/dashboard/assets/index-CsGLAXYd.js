(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Av(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Md={exports:{}},Ho={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function hy(){if(r_)return Ho;r_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=t,Ho.jsx=i,Ho.jsxs=i,Ho}var o_;function py(){return o_||(o_=1,Md.exports=hy()),Md.exports}var W=py(),Ed={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function my(){if(l_)return de;l_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),g=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,S={};function _(P,Z,at){this.props=P,this.context=Z,this.refs=S,this.updater=at||b}_.prototype.isReactComponent={},_.prototype.setState=function(P,Z){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Z,"setState")},_.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function R(){}R.prototype=_.prototype;function L(P,Z,at){this.props=P,this.context=Z,this.refs=S,this.updater=at||b}var D=L.prototype=new R;D.constructor=L,w(D,_.prototype),D.isPureReactComponent=!0;var I=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(P,Z,at){var Et=at.ref;return{$$typeof:o,type:P,key:Z,ref:Et!==void 0?Et:null,props:at}}function mt(P,Z){return U(P.type,Z,P.props)}function H(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function j(P){var Z={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(at){return Z[at]})}var X=/\/+/g;function et(P,Z){return typeof P=="object"&&P!==null&&P.key!=null?j(""+P.key):Z.toString(36)}function $(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(F,F):(P.status="pending",P.then(function(Z){P.status==="pending"&&(P.status="fulfilled",P.value=Z)},function(Z){P.status==="pending"&&(P.status="rejected",P.reason=Z)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function O(P,Z,at,Et,At){var J=typeof P;(J==="undefined"||J==="boolean")&&(P=null);var G=!1;if(P===null)G=!0;else switch(J){case"bigint":case"string":case"number":G=!0;break;case"object":switch(P.$$typeof){case o:case t:G=!0;break;case v:return G=P._init,O(G(P._payload),Z,at,Et,At)}}if(G)return At=At(P),G=Et===""?"."+et(P,0):Et,I(At)?(at="",G!=null&&(at=G.replace(X,"$&/")+"/"),O(At,Z,at,"",function(Dt){return Dt})):At!=null&&(H(At)&&(At=mt(At,at+(At.key==null||P&&P.key===At.key?"":(""+At.key).replace(X,"$&/")+"/")+G)),Z.push(At)),1;G=0;var ut=Et===""?".":Et+":";if(I(P))for(var yt=0;yt<P.length;yt++)Et=P[yt],J=ut+et(Et,yt),G+=O(Et,Z,at,J,At);else if(yt=M(P),typeof yt=="function")for(P=yt.call(P),yt=0;!(Et=P.next()).done;)Et=Et.value,J=ut+et(Et,yt++),G+=O(Et,Z,at,J,At);else if(J==="object"){if(typeof P.then=="function")return O($(P),Z,at,Et,At);throw Z=String(P),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return G}function B(P,Z,at){if(P==null)return P;var Et=[],At=0;return O(P,Et,"","",function(J){return Z.call(at,J,At++)}),Et}function rt(P){if(P._status===-1){var Z=P._result;Z=Z(),Z.then(function(at){(P._status===0||P._status===-1)&&(P._status=1,P._result=at)},function(at){(P._status===0||P._status===-1)&&(P._status=2,P._result=at)}),P._status===-1&&(P._status=0,P._result=Z)}if(P._status===1)return P._result.default;throw P._result}var ht=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Tt={map:B,forEach:function(P,Z,at){B(P,function(){Z.apply(this,arguments)},at)},count:function(P){var Z=0;return B(P,function(){Z++}),Z},toArray:function(P){return B(P,function(Z){return Z})||[]},only:function(P){if(!H(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return de.Activity=y,de.Children=Tt,de.Component=_,de.Fragment=i,de.Profiler=l,de.PureComponent=L,de.StrictMode=s,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,de.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},de.cache=function(P){return function(){return P.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(P,Z,at){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Et=w({},P.props),At=P.key;if(Z!=null)for(J in Z.key!==void 0&&(At=""+Z.key),Z)!T.call(Z,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&Z.ref===void 0||(Et[J]=Z[J]);var J=arguments.length-2;if(J===1)Et.children=at;else if(1<J){for(var G=Array(J),ut=0;ut<J;ut++)G[ut]=arguments[ut+2];Et.children=G}return U(P.type,At,Et)},de.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},de.createElement=function(P,Z,at){var Et,At={},J=null;if(Z!=null)for(Et in Z.key!==void 0&&(J=""+Z.key),Z)T.call(Z,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(At[Et]=Z[Et]);var G=arguments.length-2;if(G===1)At.children=at;else if(1<G){for(var ut=Array(G),yt=0;yt<G;yt++)ut[yt]=arguments[yt+2];At.children=ut}if(P&&P.defaultProps)for(Et in G=P.defaultProps,G)At[Et]===void 0&&(At[Et]=G[Et]);return U(P,J,At)},de.createRef=function(){return{current:null}},de.forwardRef=function(P){return{$$typeof:p,render:P}},de.isValidElement=H,de.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:rt}},de.memo=function(P,Z){return{$$typeof:h,type:P,compare:Z===void 0?null:Z}},de.startTransition=function(P){var Z=z.T,at={};z.T=at;try{var Et=P(),At=z.S;At!==null&&At(at,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(F,ht)}catch(J){ht(J)}finally{Z!==null&&at.types!==null&&(Z.types=at.types),z.T=Z}},de.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},de.use=function(P){return z.H.use(P)},de.useActionState=function(P,Z,at){return z.H.useActionState(P,Z,at)},de.useCallback=function(P,Z){return z.H.useCallback(P,Z)},de.useContext=function(P){return z.H.useContext(P)},de.useDebugValue=function(){},de.useDeferredValue=function(P,Z){return z.H.useDeferredValue(P,Z)},de.useEffect=function(P,Z){return z.H.useEffect(P,Z)},de.useEffectEvent=function(P){return z.H.useEffectEvent(P)},de.useId=function(){return z.H.useId()},de.useImperativeHandle=function(P,Z,at){return z.H.useImperativeHandle(P,Z,at)},de.useInsertionEffect=function(P,Z){return z.H.useInsertionEffect(P,Z)},de.useLayoutEffect=function(P,Z){return z.H.useLayoutEffect(P,Z)},de.useMemo=function(P,Z){return z.H.useMemo(P,Z)},de.useOptimistic=function(P,Z){return z.H.useOptimistic(P,Z)},de.useReducer=function(P,Z,at){return z.H.useReducer(P,Z,at)},de.useRef=function(P){return z.H.useRef(P)},de.useState=function(P){return z.H.useState(P)},de.useSyncExternalStore=function(P,Z,at){return z.H.useSyncExternalStore(P,Z,at)},de.useTransition=function(){return z.H.useTransition()},de.version="19.2.4",de}var c_;function fp(){return c_||(c_=1,Ed.exports=my()),Ed.exports}var St=fp();const gy=Av(St);var bd={exports:{}},Go={},Td={exports:{}},Ad={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function _y(){return u_||(u_=1,(function(o){function t(O,B){var rt=O.length;O.push(B);t:for(;0<rt;){var ht=rt-1>>>1,Tt=O[ht];if(0<l(Tt,B))O[ht]=B,O[rt]=Tt,rt=ht;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var B=O[0],rt=O.pop();if(rt!==B){O[0]=rt;t:for(var ht=0,Tt=O.length,P=Tt>>>1;ht<P;){var Z=2*(ht+1)-1,at=O[Z],Et=Z+1,At=O[Et];if(0>l(at,rt))Et<Tt&&0>l(At,at)?(O[ht]=At,O[Et]=rt,ht=Et):(O[ht]=at,O[Z]=rt,ht=Z);else if(Et<Tt&&0>l(At,rt))O[ht]=At,O[Et]=rt,ht=Et;else break t}}return B}function l(O,B){var rt=O.sortIndex-B.sortIndex;return rt!==0?rt:O.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],h=[],v=1,y=null,g=3,M=!1,b=!1,w=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var B=i(h);B!==null;){if(B.callback===null)s(h);else if(B.startTime<=O)s(h),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(h)}}function I(O){if(w=!1,D(O),!b)if(i(m)!==null)b=!0,F||(F=!0,j());else{var B=i(h);B!==null&&$(I,B.startTime-O)}}var F=!1,z=-1,T=5,U=-1;function mt(){return S?!0:!(o.unstable_now()-U<T)}function H(){if(S=!1,F){var O=o.unstable_now();U=O;var B=!0;try{t:{b=!1,w&&(w=!1,R(z),z=-1),M=!0;var rt=g;try{e:{for(D(O),y=i(m);y!==null&&!(y.expirationTime>O&&mt());){var ht=y.callback;if(typeof ht=="function"){y.callback=null,g=y.priorityLevel;var Tt=ht(y.expirationTime<=O);if(O=o.unstable_now(),typeof Tt=="function"){y.callback=Tt,D(O),B=!0;break e}y===i(m)&&s(m),D(O)}else s(m);y=i(m)}if(y!==null)B=!0;else{var P=i(h);P!==null&&$(I,P.startTime-O),B=!1}}break t}finally{y=null,g=rt,M=!1}B=void 0}}finally{B?j():F=!1}}}var j;if(typeof L=="function")j=function(){L(H)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,et=X.port2;X.port1.onmessage=H,j=function(){et.postMessage(null)}}else j=function(){_(H,0)};function $(O,B){z=_(function(){O(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(O){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var rt=g;g=B;try{return O()}finally{g=rt}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var rt=g;g=O;try{return B()}finally{g=rt}},o.unstable_scheduleCallback=function(O,B,rt){var ht=o.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?ht+rt:ht):rt=ht,O){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=rt+Tt,O={id:v++,callback:B,priorityLevel:O,startTime:rt,expirationTime:Tt,sortIndex:-1},rt>ht?(O.sortIndex=rt,t(h,O),i(m)===null&&O===i(h)&&(w?(R(z),z=-1):w=!0,$(I,rt-ht))):(O.sortIndex=Tt,t(m,O),b||M||(b=!0,F||(F=!0,j()))),O},o.unstable_shouldYield=mt,o.unstable_wrapCallback=function(O){var B=g;return function(){var rt=g;g=B;try{return O.apply(this,arguments)}finally{g=rt}}}})(Ad)),Ad}var f_;function vy(){return f_||(f_=1,Td.exports=_y()),Td.exports}var Rd={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function xy(){if(d_)return Rn;d_=1;var o=fp();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:m,containerInfo:h,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,v)},Rn.flushSync=function(m){var h=d.T,v=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=v,s.d.f()}},Rn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,y=p(v,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:g,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:y,integrity:g,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Rn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Rn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,y=p(v,h.crossOrigin);s.d.L(m,v,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Rn.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,h){return m(h)},Rn.useFormState=function(m,h,v){return d.H.useFormState(m,h,v)},Rn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Rn.version="19.2.4",Rn}var h_;function Sy(){if(h_)return Rd.exports;h_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Rd.exports=xy(),Rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function yy(){if(p_)return Go;p_=1;var o=vy(),t=fp(),i=Sy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,r=f;break}if(A===r){x=!0,r=u,a=f;break}A=A.sibling}if(!x){for(A=f.child;A;){if(A===a){x=!0,a=f,r=u;break}if(A===r){x=!0,r=f,a=u;break}A=A.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),mt=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var X=Symbol.for("react.client.reference");function et(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===X?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case F:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case L:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:et(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return et(e(n))}catch{}}return null}var $=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt={pending:!1,data:null,method:null,action:null},ht=[],Tt=-1;function P(e){return{current:e}}function Z(e){0>Tt||(e.current=ht[Tt],ht[Tt]=null,Tt--)}function at(e,n){Tt++,ht[Tt]=e.current,e.current=n}var Et=P(null),At=P(null),J=P(null),G=P(null);function ut(e,n){switch(at(J,n),at(At,e),at(Et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?wg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=wg(n),e=Dg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(Et),at(Et,e)}function yt(){Z(Et),Z(At),Z(J)}function Dt(e){e.memoizedState!==null&&at(G,e);var n=Et.current,a=Dg(n,e.type);n!==a&&(at(At,e),at(Et,a))}function Pt(e){At.current===e&&(Z(Et),Z(At)),G.current===e&&(Z(G),Fo._currentValue=rt)}var Xt,Zt;function qt(e){if(Xt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Xt=n&&n[1]||"",Zt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xt+e+Zt}var re=!1;function jt(e,n){if(!e||re)return"";re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(dt){var ct=dt}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(dt){ct=dt}e.call(Mt.prototype)}}else{try{throw Error()}catch(dt){ct=dt}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(dt){if(dt&&ct&&typeof dt.stack=="string")return[dt.stack,ct.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],A=f[1];if(x&&A){var V=x.split(`
`),ot=A.split(`
`);for(u=r=0;r<V.length&&!V[r].includes("DetermineComponentFrameRoot");)r++;for(;u<ot.length&&!ot[u].includes("DetermineComponentFrameRoot");)u++;if(r===V.length||u===ot.length)for(r=V.length-1,u=ot.length-1;1<=r&&0<=u&&V[r]!==ot[u];)u--;for(;1<=r&&0<=u;r--,u--)if(V[r]!==ot[u]){if(r!==1||u!==1)do if(r--,u--,0>u||V[r]!==ot[u]){var vt=`
`+V[r].replace(" at new "," at ");return e.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",e.displayName)),vt}while(1<=r&&0<=u);break}}}finally{re=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?qt(a):""}function he(e,n){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return e.child!==n&&n!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return jt(e.type,!1);case 11:return jt(e.type.render,!1);case 1:return jt(e.type,!0);case 31:return qt("Activity");default:return""}}function k(e){try{var n="",a=null;do n+=he(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Te=Object.prototype.hasOwnProperty,me=o.unstable_scheduleCallback,Ae=o.unstable_cancelCallback,kt=o.unstable_shouldYield,N=o.unstable_requestPaint,E=o.unstable_now,Q=o.unstable_getCurrentPriorityLevel,_t=o.unstable_ImmediatePriority,bt=o.unstable_UserBlockingPriority,pt=o.unstable_NormalPriority,Ft=o.unstable_LowPriority,Nt=o.unstable_IdlePriority,ee=o.log,ne=o.unstable_setDisableYieldValue,Rt=null,Ct=null;function Ht(e){if(typeof ee=="function"&&ne(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Rt,e)}catch{}}var zt=Math.clz32?Math.clz32:K,Gt=Math.log,ge=Math.LN2;function K(e){return e>>>=0,e===0?32:31-(Gt(e)/ge|0)|0}var Lt=256,Ut=262144,Vt=4194304;function wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?u=wt(r):(x&=A,x!==0?u=wt(x):a||(a=A&~e,a!==0&&(u=wt(a))))):(A=r&~f,A!==0?u=wt(A):x!==0?u=wt(x):a||(a=r&~e,a!==0&&(u=wt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Yt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ce(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Vt;return Vt<<=1,(Vt&62914560)===0&&(Vt=4194304),e}function Ue(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function On(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xi(e,n,a,r,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,V=e.expirationTimes,ot=e.hiddenUpdates;for(a=x&~a;0<a;){var vt=31-zt(a),Mt=1<<vt;A[vt]=0,V[vt]=-1;var ct=ot[vt];if(ct!==null)for(ot[vt]=null,vt=0;vt<ct.length;vt++){var dt=ct[vt];dt!==null&&(dt.lane&=-536870913)}a&=~Mt}r!==0&&Kr(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function Kr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-zt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Bs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-zt(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function ul(e,n){var a=n&-n;return a=(a&42)!==0?1:Is(a),(a&(e.suspendedLanes|n))!==0?0:a}function Is(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Di(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:$g(e.type))}function Gs(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var Si=Math.random().toString(36).slice(2),rn="__reactFiber$"+Si,pn="__reactProps$"+Si,ji="__reactContainer$"+Si,Ea="__reactEvents$"+Si,fl="__reactListeners$"+Si,dl="__reactHandles$"+Si,hl="__reactResources$"+Si,ss="__reactMarker$"+Si;function Qr(e){delete e[rn],delete e[pn],delete e[Ea],delete e[fl],delete e[dl]}function ba(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ji]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=zg(e);e!==null;){if(a=e[rn])return a;e=zg(e)}return n}e=a,a=e.parentNode}return null}function Ta(e){if(e=e[rn]||e[ji]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function C(e){var n=e[hl];return n||(n=e[hl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[ss]=!0}var ft=new Set,lt={};function nt(e,n){Ot(e,n),Ot(e+"Capture",n)}function Ot(e,n){for(lt[e]=n,e=0;e<n.length;e++)ft.add(n[e])}var Wt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bt={},$t={};function ie(e){return Te.call($t,e)?!0:Te.call(Bt,e)?!1:Wt.test(e)?$t[e]=!0:(Bt[e]=!0,!1)}function oe(e,n,a){if(ie(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function fe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Kt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oe(e){if(!e._valueTracker){var n=Qe(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function mn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Qe(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pn=/[\n"\\]/g;function ue(e){return e.replace(Pn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fn(e,n,a,r,u,f,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?yi(e,x,_e(n)):a!=null?yi(e,x,_e(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+_e(A):e.removeAttribute("name")}function Yn(e,n,a,r,u,f,x,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Oe(e);return}a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Oe(e)}function yi(e,n,a){n==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Zn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Be(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function on(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if($(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Oe(e)}function zn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ln=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mi(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||ln.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Yi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Mi(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Mi(e,f,n[f])}function Vs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ux=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(e){return ux.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var vu=null;function xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ks=null,Xs=null;function Cp(e){var n=Ta(e);if(n&&(e=n.stateNode)){var a=e[pn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ue(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[pn]||null;if(!u)throw Error(s(90));Fn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&mn(r)}break t;case"textarea":Be(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Zn(e,!!a.multiple,n,!1)}}}var Su=!1;function wp(e,n,a){if(Su)return e(n,a);Su=!0;try{var r=e(n);return r}finally{if(Su=!1,(ks!==null||Xs!==null)&&(ec(),ks&&(n=ks,e=Xs,Xs=ks=null,Cp(n),e)))for(n=0;n<e.length;n++)Cp(e[n])}}function Jr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[pn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(Ki)try{var $r={};Object.defineProperty($r,"passive",{get:function(){yu=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{yu=!1}var Aa=null,Mu=null,ml=null;function Dp(){if(ml)return ml;var e,n=Mu,a=n.length,r,u="value"in Aa?Aa.value:Aa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(r=1;r<=x&&n[a-r]===u[f-r];r++);return ml=u.slice(e,1<r?1-r:void 0)}function gl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function _l(){return!0}function Up(){return!1}function Gn(e){function n(a,r,u,f,x){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?_l:Up,this.isPropagationStopped=Up,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),n}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Gn(os),to=y({},os,{view:0,detail:0}),fx=Gn(to),Eu,bu,eo,xl=y({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(Eu=e.screenX-eo.screenX,bu=e.screenY-eo.screenY):bu=Eu=0,eo=e),Eu)},movementY:function(e){return"movementY"in e?e.movementY:bu}}),Np=Gn(xl),dx=y({},xl,{dataTransfer:0}),hx=Gn(dx),px=y({},to,{relatedTarget:0}),Tu=Gn(px),mx=y({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),gx=Gn(mx),_x=y({},os,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vx=Gn(_x),xx=y({},os,{data:0}),Lp=Gn(xx),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ex(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Mx[e])?!!n[e]:!1}function Au(){return Ex}var bx=y({},to,{key:function(e){if(e.key){var n=Sx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(e){return e.type==="keypress"?gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tx=Gn(bx),Ax=y({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=Gn(Ax),Rx=y({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),Cx=Gn(Rx),wx=y({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dx=Gn(wx),Ux=y({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nx=Gn(Ux),Lx=y({},os,{newState:0,oldState:0}),Ox=Gn(Lx),Px=[9,13,27,32],Ru=Ki&&"CompositionEvent"in window,no=null;Ki&&"documentMode"in document&&(no=document.documentMode);var Fx=Ki&&"TextEvent"in window&&!no,Pp=Ki&&(!Ru||no&&8<no&&11>=no),Fp=" ",zp=!1;function Bp(e,n){switch(e){case"keyup":return Px.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ws=!1;function zx(e,n){switch(e){case"compositionend":return Ip(n);case"keypress":return n.which!==32?null:(zp=!0,Fp);case"textInput":return e=n.data,e===Fp&&zp?null:e;default:return null}}function Bx(e,n){if(Ws)return e==="compositionend"||!Ru&&Bp(e,n)?(e=Dp(),ml=Mu=Aa=null,Ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pp&&n.locale!=="ko"?null:n.data;default:return null}}var Ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ix[e.type]:n==="textarea"}function Gp(e,n,a,r){ks?Xs?Xs.push(r):Xs=[r]:ks=r,n=lc(n,"onChange"),0<n.length&&(a=new vl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var io=null,ao=null;function Hx(e){Eg(e,0)}function Sl(e){var n=rs(e);if(mn(n))return e}function Vp(e,n){if(e==="change")return n}var kp=!1;if(Ki){var Cu;if(Ki){var wu="oninput"in document;if(!wu){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),wu=typeof Xp.oninput=="function"}Cu=wu}else Cu=!1;kp=Cu&&(!document.documentMode||9<document.documentMode)}function Wp(){io&&(io.detachEvent("onpropertychange",qp),ao=io=null)}function qp(e){if(e.propertyName==="value"&&Sl(ao)){var n=[];Gp(n,ao,e,xu(e)),wp(Hx,n)}}function Gx(e,n,a){e==="focusin"?(Wp(),io=n,ao=a,io.attachEvent("onpropertychange",qp)):e==="focusout"&&Wp()}function Vx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(ao)}function kx(e,n){if(e==="click")return Sl(n)}function Xx(e,n){if(e==="input"||e==="change")return Sl(n)}function Wx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:Wx;function so(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Te.call(n,u)||!Kn(e[u],n[u]))return!1}return!0}function jp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yp(e,n){var a=jp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=jp(a)}}function Zp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Zp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Kp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Jt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Jt(e.document)}return n}function Du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var qx=Ki&&"documentMode"in document&&11>=document.documentMode,qs=null,Uu=null,ro=null,Nu=!1;function Qp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nu||qs==null||qs!==Jt(r)||(r=qs,"selectionStart"in r&&Du(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ro&&so(ro,r)||(ro=r,r=lc(Uu,"onSelect"),0<r.length&&(n=new vl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=qs)))}function ls(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var js={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionrun:ls("Transition","TransitionRun"),transitionstart:ls("Transition","TransitionStart"),transitioncancel:ls("Transition","TransitionCancel"),transitionend:ls("Transition","TransitionEnd")},Lu={},Jp={};Ki&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function cs(e){if(Lu[e])return Lu[e];if(!js[e])return e;var n=js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Jp)return Lu[e]=n[a];return e}var $p=cs("animationend"),tm=cs("animationiteration"),em=cs("animationstart"),jx=cs("transitionrun"),Yx=cs("transitionstart"),Zx=cs("transitioncancel"),nm=cs("transitionend"),im=new Map,Ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ou.push("scrollEnd");function Ei(e,n){im.set(e,n),nt(n,[e])}var yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},li=[],Ys=0,Pu=0;function Ml(){for(var e=Ys,n=Pu=Ys=0;n<e;){var a=li[n];li[n++]=null;var r=li[n];li[n++]=null;var u=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,r!==null&&u!==null){var x=r.pending;x===null?u.next=u:(u.next=x.next,x.next=u),r.pending=u}f!==0&&am(a,u,f)}}function El(e,n,a,r){li[Ys++]=e,li[Ys++]=n,li[Ys++]=a,li[Ys++]=r,Pu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Fu(e,n,a,r){return El(e,n,a,r),bl(e)}function us(e,n){return El(e,null,null,n),bl(e)}function am(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-zt(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function bl(e){if(50<wo)throw wo=0,qf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Zs={};function Kx(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,r){return new Kx(e,n,a,r)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qi(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function sm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Tl(e,n,a,r,u,f){var x=0;if(r=e,typeof e=="function")zu(e)&&(x=1);else if(typeof e=="string")x=ey(e,a,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=Qn(31,a,n,u),e.elementType=U,e.lanes=f,e;case w:return fs(a.children,u,f,n);case S:x=8,u|=24;break;case _:return e=Qn(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case I:return e=Qn(13,a,n,u),e.elementType=I,e.lanes=f,e;case F:return e=Qn(19,a,n,u),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:x=10;break t;case R:x=9;break t;case D:x=11;break t;case z:x=14;break t;case T:x=16,r=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Qn(x,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function fs(e,n,a,r){return e=Qn(7,e,r,n),e.lanes=a,e}function Bu(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function rm(e){var n=Qn(18,null,null,0);return n.stateNode=e,n}function Iu(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var om=new WeakMap;function ci(e,n){if(typeof e=="object"&&e!==null){var a=om.get(e);return a!==void 0?a:(n={value:e,source:n,stack:k(n)},om.set(e,n),n)}return{value:e,source:n,stack:k(n)}}var Ks=[],Qs=0,Al=null,oo=0,ui=[],fi=0,Ra=null,Ui=1,Ni="";function Ji(e,n){Ks[Qs++]=oo,Ks[Qs++]=Al,Al=e,oo=n}function lm(e,n,a){ui[fi++]=Ui,ui[fi++]=Ni,ui[fi++]=Ra,Ra=e;var r=Ui;e=Ni;var u=32-zt(r)-1;r&=~(1<<u),a+=1;var f=32-zt(n)+u;if(30<f){var x=u-u%5;f=(r&(1<<x)-1).toString(32),r>>=x,u-=x,Ui=1<<32-zt(n)+u|a<<u|r,Ni=f+e}else Ui=1<<f|a<<u|r,Ni=e}function Hu(e){e.return!==null&&(Ji(e,1),lm(e,1,0))}function Gu(e){for(;e===Al;)Al=Ks[--Qs],Ks[Qs]=null,oo=Ks[--Qs],Ks[Qs]=null;for(;e===Ra;)Ra=ui[--fi],ui[fi]=null,Ni=ui[--fi],ui[fi]=null,Ui=ui[--fi],ui[fi]=null}function cm(e,n){ui[fi++]=Ui,ui[fi++]=Ni,ui[fi++]=Ra,Ui=n.id,Ni=n.overflow,Ra=e}var yn=null,Ye=null,we=!1,Ca=null,di=!1,Vu=Error(s(519));function wa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lo(ci(n,e)),Vu}function um(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[rn]=e,n[pn]=r,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)Ee(Uo[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),Yn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),on(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Rg(n.textContent,a)?(r.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),r.onScroll!=null&&Ee("scroll",n),r.onScrollEnd!=null&&Ee("scrollend",n),r.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||wa(e,!0)}function fm(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:yn=yn.return}}function Js(e){if(e!==yn)return!1;if(!we)return fm(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||od(e.type,e.memoizedProps)),a=!a),a&&Ye&&wa(e),fm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=Fg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=Fg(e)}else n===27?(n=Ye,ka(e.type)?(e=dd,dd=null,Ye=e):Ye=n):Ye=yn?pi(e.stateNode.nextSibling):null;return!0}function ds(){Ye=yn=null,we=!1}function ku(){var e=Ca;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Ca=null),e}function lo(e){Ca===null?Ca=[e]:Ca.push(e)}var Xu=P(null),hs=null,$i=null;function Da(e,n,a){at(Xu,n._currentValue),n._currentValue=a}function ta(e){e._currentValue=Xu.current,Z(Xu)}function Wu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function qu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var V=0;V<n.length;V++)if(A.context===n[V]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Wu(f.return,a,e),r||(x=null);break t}f=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Wu(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function $s(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=u.type;Kn(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===G.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Fo):e=[Fo])}u=u.return}e!==null&&qu(n,e,a,r),n.flags|=262144}function Rl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ps(e){hs=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return dm(hs,e)}function Cl(e,n){return hs===null&&ps(e),dm(e,n)}function dm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(e===null)throw Error(s(308));$i=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else $i=$i.next=n;return a}var Qx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Jx=o.unstable_scheduleCallback,$x=o.unstable_NormalPriority,cn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new Qx,data:new Map,refCount:0}}function co(e){e.refCount--,e.refCount===0&&Jx($x,function(){e.controller.abort()})}var uo=null,Yu=0,tr=0,er=null;function tS(e,n){if(uo===null){var a=uo=[];Yu=0,tr=Jf(),er={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Yu++,n.then(hm,hm),n}function hm(){if(--Yu===0&&uo!==null){er!==null&&(er.status="fulfilled");var e=uo;uo=null,tr=0,er=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function eS(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var pm=O.S;O.S=function(e,n){Q0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&tS(e,n),pm!==null&&pm(e,n)};var ms=P(null);function Zu(){var e=ms.current;return e!==null?e:je.pooledCache}function wl(e,n){n===null?at(ms,ms.current):at(ms,n.pool)}function mm(){var e=Zu();return e===null?null:{parent:cn._currentValue,pool:e}}var nr=Error(s(460)),Ku=Error(s(474)),Dl=Error(s(542)),Ul={then:function(){}};function gm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _m(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,xm(e),e;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,xm(e),e}throw _s=n,nr}}function gs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_s=a,nr):a}}var _s=null;function vm(){if(_s===null)throw Error(s(459));var e=_s;return _s=null,e}function xm(e){if(e===nr||e===Dl)throw Error(s(483))}var ir=null,fo=0;function Nl(e){var n=fo;return fo+=1,ir===null&&(ir=[]),_m(ir,e,n)}function ho(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ll(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Sm(e){function n(tt,q){if(e){var st=tt.deletions;st===null?(tt.deletions=[q],tt.flags|=16):st.push(q)}}function a(tt,q){if(!e)return null;for(;q!==null;)n(tt,q),q=q.sibling;return null}function r(tt){for(var q=new Map;tt!==null;)tt.key!==null?q.set(tt.key,tt):q.set(tt.index,tt),tt=tt.sibling;return q}function u(tt,q){return tt=Qi(tt,q),tt.index=0,tt.sibling=null,tt}function f(tt,q,st){return tt.index=st,e?(st=tt.alternate,st!==null?(st=st.index,st<q?(tt.flags|=67108866,q):st):(tt.flags|=67108866,q)):(tt.flags|=1048576,q)}function x(tt){return e&&tt.alternate===null&&(tt.flags|=67108866),tt}function A(tt,q,st,xt){return q===null||q.tag!==6?(q=Bu(st,tt.mode,xt),q.return=tt,q):(q=u(q,st),q.return=tt,q)}function V(tt,q,st,xt){var ae=st.type;return ae===w?vt(tt,q,st.props.children,xt,st.key):q!==null&&(q.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===T&&gs(ae)===q.type)?(q=u(q,st.props),ho(q,st),q.return=tt,q):(q=Tl(st.type,st.key,st.props,null,tt.mode,xt),ho(q,st),q.return=tt,q)}function ot(tt,q,st,xt){return q===null||q.tag!==4||q.stateNode.containerInfo!==st.containerInfo||q.stateNode.implementation!==st.implementation?(q=Iu(st,tt.mode,xt),q.return=tt,q):(q=u(q,st.children||[]),q.return=tt,q)}function vt(tt,q,st,xt,ae){return q===null||q.tag!==7?(q=fs(st,tt.mode,xt,ae),q.return=tt,q):(q=u(q,st),q.return=tt,q)}function Mt(tt,q,st){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Bu(""+q,tt.mode,st),q.return=tt,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case M:return st=Tl(q.type,q.key,q.props,null,tt.mode,st),ho(st,q),st.return=tt,st;case b:return q=Iu(q,tt.mode,st),q.return=tt,q;case T:return q=gs(q),Mt(tt,q,st)}if($(q)||j(q))return q=fs(q,tt.mode,st,null),q.return=tt,q;if(typeof q.then=="function")return Mt(tt,Nl(q),st);if(q.$$typeof===L)return Mt(tt,Cl(tt,q),st);Ll(tt,q)}return null}function ct(tt,q,st,xt){var ae=q!==null?q.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return ae!==null?null:A(tt,q,""+st,xt);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case M:return st.key===ae?V(tt,q,st,xt):null;case b:return st.key===ae?ot(tt,q,st,xt):null;case T:return st=gs(st),ct(tt,q,st,xt)}if($(st)||j(st))return ae!==null?null:vt(tt,q,st,xt,null);if(typeof st.then=="function")return ct(tt,q,Nl(st),xt);if(st.$$typeof===L)return ct(tt,q,Cl(tt,st),xt);Ll(tt,st)}return null}function dt(tt,q,st,xt,ae){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return tt=tt.get(st)||null,A(q,tt,""+xt,ae);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case M:return tt=tt.get(xt.key===null?st:xt.key)||null,V(q,tt,xt,ae);case b:return tt=tt.get(xt.key===null?st:xt.key)||null,ot(q,tt,xt,ae);case T:return xt=gs(xt),dt(tt,q,st,xt,ae)}if($(xt)||j(xt))return tt=tt.get(st)||null,vt(q,tt,xt,ae,null);if(typeof xt.then=="function")return dt(tt,q,st,Nl(xt),ae);if(xt.$$typeof===L)return dt(tt,q,st,Cl(q,xt),ae);Ll(q,xt)}return null}function Qt(tt,q,st,xt){for(var ae=null,Pe=null,te=q,ve=q=0,Ce=null;te!==null&&ve<st.length;ve++){te.index>ve?(Ce=te,te=null):Ce=te.sibling;var Fe=ct(tt,te,st[ve],xt);if(Fe===null){te===null&&(te=Ce);break}e&&te&&Fe.alternate===null&&n(tt,te),q=f(Fe,q,ve),Pe===null?ae=Fe:Pe.sibling=Fe,Pe=Fe,te=Ce}if(ve===st.length)return a(tt,te),we&&Ji(tt,ve),ae;if(te===null){for(;ve<st.length;ve++)te=Mt(tt,st[ve],xt),te!==null&&(q=f(te,q,ve),Pe===null?ae=te:Pe.sibling=te,Pe=te);return we&&Ji(tt,ve),ae}for(te=r(te);ve<st.length;ve++)Ce=dt(te,tt,ve,st[ve],xt),Ce!==null&&(e&&Ce.alternate!==null&&te.delete(Ce.key===null?ve:Ce.key),q=f(Ce,q,ve),Pe===null?ae=Ce:Pe.sibling=Ce,Pe=Ce);return e&&te.forEach(function(Ya){return n(tt,Ya)}),we&&Ji(tt,ve),ae}function se(tt,q,st,xt){if(st==null)throw Error(s(151));for(var ae=null,Pe=null,te=q,ve=q=0,Ce=null,Fe=st.next();te!==null&&!Fe.done;ve++,Fe=st.next()){te.index>ve?(Ce=te,te=null):Ce=te.sibling;var Ya=ct(tt,te,Fe.value,xt);if(Ya===null){te===null&&(te=Ce);break}e&&te&&Ya.alternate===null&&n(tt,te),q=f(Ya,q,ve),Pe===null?ae=Ya:Pe.sibling=Ya,Pe=Ya,te=Ce}if(Fe.done)return a(tt,te),we&&Ji(tt,ve),ae;if(te===null){for(;!Fe.done;ve++,Fe=st.next())Fe=Mt(tt,Fe.value,xt),Fe!==null&&(q=f(Fe,q,ve),Pe===null?ae=Fe:Pe.sibling=Fe,Pe=Fe);return we&&Ji(tt,ve),ae}for(te=r(te);!Fe.done;ve++,Fe=st.next())Fe=dt(te,tt,ve,Fe.value,xt),Fe!==null&&(e&&Fe.alternate!==null&&te.delete(Fe.key===null?ve:Fe.key),q=f(Fe,q,ve),Pe===null?ae=Fe:Pe.sibling=Fe,Pe=Fe);return e&&te.forEach(function(dy){return n(tt,dy)}),we&&Ji(tt,ve),ae}function We(tt,q,st,xt){if(typeof st=="object"&&st!==null&&st.type===w&&st.key===null&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case M:t:{for(var ae=st.key;q!==null;){if(q.key===ae){if(ae=st.type,ae===w){if(q.tag===7){a(tt,q.sibling),xt=u(q,st.props.children),xt.return=tt,tt=xt;break t}}else if(q.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===T&&gs(ae)===q.type){a(tt,q.sibling),xt=u(q,st.props),ho(xt,st),xt.return=tt,tt=xt;break t}a(tt,q);break}else n(tt,q);q=q.sibling}st.type===w?(xt=fs(st.props.children,tt.mode,xt,st.key),xt.return=tt,tt=xt):(xt=Tl(st.type,st.key,st.props,null,tt.mode,xt),ho(xt,st),xt.return=tt,tt=xt)}return x(tt);case b:t:{for(ae=st.key;q!==null;){if(q.key===ae)if(q.tag===4&&q.stateNode.containerInfo===st.containerInfo&&q.stateNode.implementation===st.implementation){a(tt,q.sibling),xt=u(q,st.children||[]),xt.return=tt,tt=xt;break t}else{a(tt,q);break}else n(tt,q);q=q.sibling}xt=Iu(st,tt.mode,xt),xt.return=tt,tt=xt}return x(tt);case T:return st=gs(st),We(tt,q,st,xt)}if($(st))return Qt(tt,q,st,xt);if(j(st)){if(ae=j(st),typeof ae!="function")throw Error(s(150));return st=ae.call(st),se(tt,q,st,xt)}if(typeof st.then=="function")return We(tt,q,Nl(st),xt);if(st.$$typeof===L)return We(tt,q,Cl(tt,st),xt);Ll(tt,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,q!==null&&q.tag===6?(a(tt,q.sibling),xt=u(q,st),xt.return=tt,tt=xt):(a(tt,q),xt=Bu(st,tt.mode,xt),xt.return=tt,tt=xt),x(tt)):a(tt,q)}return function(tt,q,st,xt){try{fo=0;var ae=We(tt,q,st,xt);return ir=null,ae}catch(te){if(te===nr||te===Dl)throw te;var Pe=Qn(29,te,null,tt.mode);return Pe.lanes=xt,Pe.return=tt,Pe}finally{}}}var vs=Sm(!0),ym=Sm(!1),Ua=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ze&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=bl(e),am(e,null,a),n}return El(e,r,n,a),bl(e)}function po(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Bs(e,a)}}function $u(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var tf=!1;function mo(){if(tf){var e=er;if(e!==null)throw e}}function go(e,n,a,r){tf=!1;var u=e.updateQueue;Ua=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var V=A,ot=V.next;V.next=null,x===null?f=ot:x.next=ot,x=V;var vt=e.alternate;vt!==null&&(vt=vt.updateQueue,A=vt.lastBaseUpdate,A!==x&&(A===null?vt.firstBaseUpdate=ot:A.next=ot,vt.lastBaseUpdate=V))}if(f!==null){var Mt=u.baseState;x=0,vt=ot=V=null,A=f;do{var ct=A.lane&-536870913,dt=ct!==A.lane;if(dt?(Re&ct)===ct:(r&ct)===ct){ct!==0&&ct===tr&&(tf=!0),vt!==null&&(vt=vt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Qt=e,se=A;ct=n;var We=a;switch(se.tag){case 1:if(Qt=se.payload,typeof Qt=="function"){Mt=Qt.call(We,Mt,ct);break t}Mt=Qt;break t;case 3:Qt.flags=Qt.flags&-65537|128;case 0:if(Qt=se.payload,ct=typeof Qt=="function"?Qt.call(We,Mt,ct):Qt,ct==null)break t;Mt=y({},Mt,ct);break t;case 2:Ua=!0}}ct=A.callback,ct!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=u.callbacks,dt===null?u.callbacks=[ct]:dt.push(ct))}else dt={lane:ct,tag:A.tag,payload:A.payload,callback:A.callback,next:null},vt===null?(ot=vt=dt,V=Mt):vt=vt.next=dt,x|=ct;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;dt=A,A=dt.next,dt.next=null,u.lastBaseUpdate=dt,u.shared.pending=null}}while(!0);vt===null&&(V=Mt),u.baseState=V,u.firstBaseUpdate=ot,u.lastBaseUpdate=vt,f===null&&(u.shared.lanes=0),Ba|=x,e.lanes=x,e.memoizedState=Mt}}function Mm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Em(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Mm(a[e],n)}var ar=P(null),Ol=P(0);function bm(e,n){e=ca,at(Ol,e),at(ar,n),ca=e|n.baseLanes}function ef(){at(Ol,ca),at(ar,ar.current)}function nf(){ca=Ol.current,Z(ar),Z(Ol)}var Jn=P(null),hi=null;function Oa(e){var n=e.alternate;at(an,an.current&1),at(Jn,e),hi===null&&(n===null||ar.current!==null||n.memoizedState!==null)&&(hi=e)}function af(e){at(an,an.current),at(Jn,e),hi===null&&(hi=e)}function Tm(e){e.tag===22?(at(an,an.current),at(Jn,e),hi===null&&(hi=e)):Pa()}function Pa(){at(an,an.current),at(Jn,Jn.current)}function $n(e){Z(Jn),hi===e&&(hi=null),Z(an)}var an=P(0);function Pl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ud(a)||fd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ea=0,pe=null,ke=null,un=null,Fl=!1,sr=!1,xs=!1,zl=0,_o=0,rr=null,nS=0;function tn(){throw Error(s(321))}function sf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kn(e[a],n[a]))return!1;return!0}function rf(e,n,a,r,u,f){return ea=f,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?l0:yf,xs=!1,f=a(r,u),xs=!1,sr&&(f=Rm(n,a,r,u)),Am(e),f}function Am(e){O.H=So;var n=ke!==null&&ke.next!==null;if(ea=0,un=ke=pe=null,Fl=!1,_o=0,rr=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&Rl(e)&&(fn=!0))}function Rm(e,n,a,r){pe=e;var u=0;do{if(sr&&(rr=null),_o=0,sr=!1,25<=u)throw Error(s(301));if(u+=1,un=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=c0,f=n(a,r)}while(sr);return f}function iS(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?vo(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(pe.flags|=1024),n}function of(){var e=zl!==0;return zl=0,e}function lf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function cf(e){if(Fl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Fl=!1}ea=0,un=ke=pe=null,sr=!1,_o=zl=0,rr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?pe.memoizedState=un=e:un=un.next=e,un}function sn(){if(ke===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=un===null?pe.memoizedState:un.next;if(n!==null)un=n,ke=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},un===null?pe.memoizedState=un=e:un=un.next=e}return un}function Bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(e){var n=_o;return _o+=1,rr===null&&(rr=[]),e=_m(rr,e,n),n=pe,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?l0:yf),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vo(e);if(e.$$typeof===L)return Mn(e)}throw Error(s(438,String(e)))}function uf(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=pe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Bl(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=mt;return n.index++,a}function na(e,n){return typeof n=="function"?n(e):n}function Hl(e){var n=sn();return ff(n,ke,e)}function ff(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=x=null,V=null,ot=n,vt=!1;do{var Mt=ot.lane&-536870913;if(Mt!==ot.lane?(Re&Mt)===Mt:(ea&Mt)===Mt){var ct=ot.revertLane;if(ct===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),Mt===tr&&(vt=!0);else if((ea&ct)===ct){ot=ot.next,ct===tr&&(vt=!0);continue}else Mt={lane:0,revertLane:ot.revertLane,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},V===null?(A=V=Mt,x=f):V=V.next=Mt,pe.lanes|=ct,Ba|=ct;Mt=ot.action,xs&&a(f,Mt),f=ot.hasEagerState?ot.eagerState:a(f,Mt)}else ct={lane:Mt,revertLane:ot.revertLane,gesture:ot.gesture,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},V===null?(A=V=ct,x=f):V=V.next=ct,pe.lanes|=Mt,Ba|=Mt;ot=ot.next}while(ot!==null&&ot!==n);if(V===null?x=f:V.next=A,!Kn(f,e.memoizedState)&&(fn=!0,vt&&(a=er,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=V,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function df(e){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);Kn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Cm(e,n,a){var r=pe,u=sn(),f=we;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Kn((ke||u).memoizedState,a);if(x&&(u.memoizedState=a,fn=!0),u=u.queue,mf(Um.bind(null,r,u,e),[e]),u.getSnapshot!==n||x||un!==null&&un.memoizedState.tag&1){if(r.flags|=2048,or(9,{destroy:void 0},Dm.bind(null,r,u,a,n),null),je===null)throw Error(s(349));f||(ea&127)!==0||wm(r,n,a)}return a}function wm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Bl(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Dm(e,n,a,r){n.value=a,n.getSnapshot=r,Nm(n)&&Lm(e)}function Um(e,n,a){return a(function(){Nm(n)&&Lm(e)})}function Nm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kn(e,a)}catch{return!0}}function Lm(e){var n=us(e,2);n!==null&&qn(n,e,2)}function hf(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),xs){Ht(!0);try{a()}finally{Ht(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},n}function Om(e,n,a,r){return e.baseState=a,ff(e,ke,typeof r=="function"?r:na)}function aS(e,n,a,r,u){if(kl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Pm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Pm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=O.T,x={};O.T=x;try{var A=a(u,r),V=O.S;V!==null&&V(x,A),Fm(e,n,A)}catch(ot){pf(e,n,ot)}finally{f!==null&&x.types!==null&&(f.types=x.types),O.T=f}}else try{f=a(u,r),Fm(e,n,f)}catch(ot){pf(e,n,ot)}}function Fm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){zm(e,n,r)},function(r){return pf(e,n,r)}):zm(e,n,a)}function zm(e,n,a){n.status="fulfilled",n.value=a,Bm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Pm(e,a)))}function pf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Bm(n),n=n.next;while(n!==r)}e.action=null}function Bm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Im(e,n){return n}function Hm(e,n){if(we){var a=je.formState;if(a!==null){t:{var r=pe;if(we){if(Ye){e:{for(var u=Ye,f=di;u.nodeType!==8;){if(!f){u=null;break e}if(u=pi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ye=pi(u.nextSibling),r=u.data==="F!";break t}}wa(r)}r=!1}r&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:n},a.queue=r,a=s0.bind(null,pe,r),r.dispatch=a,r=hf(!1),f=Sf.bind(null,pe,!1,r.queue),r=Bn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=aS.bind(null,pe,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function Gm(e){var n=sn();return Vm(n,ke,e)}function Vm(e,n,a){if(n=ff(e,n,Im)[0],e=Hl(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=vo(n)}catch(x){throw x===nr?Dl:x}else r=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,or(9,{destroy:void 0},sS.bind(null,u,a),null)),[r,f,e]}function sS(e,n){e.action=n}function km(e){var n=sn(),a=ke;if(a!==null)return Vm(n,a,e);sn(),n=n.memoizedState,a=sn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function or(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Bl(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Xm(){return sn().memoizedState}function Gl(e,n,a,r){var u=Bn();pe.flags|=e,u.memoizedState=or(1|n,{destroy:void 0},a,r===void 0?null:r)}function Vl(e,n,a,r){var u=sn();r=r===void 0?null:r;var f=u.memoizedState.inst;ke!==null&&r!==null&&sf(r,ke.memoizedState.deps)?u.memoizedState=or(n,f,a,r):(pe.flags|=e,u.memoizedState=or(1|n,f,a,r))}function Wm(e,n){Gl(8390656,8,e,n)}function mf(e,n){Vl(2048,8,e,n)}function rS(e){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=Bl(),pe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function qm(e){var n=sn().memoizedState;return rS({ref:n,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function jm(e,n){return Vl(4,2,e,n)}function Ym(e,n){return Vl(4,4,e,n)}function Zm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Km(e,n,a){a=a!=null?a.concat([e]):null,Vl(4,4,Zm.bind(null,n,e),a)}function gf(){}function Qm(e,n){var a=sn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&sf(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Jm(e,n){var a=sn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&sf(n,r[1]))return r[0];if(r=e(),xs){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[r,n],r}function _f(e,n,a){return a===void 0||(ea&1073741824)!==0&&(Re&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=$0(),pe.lanes|=e,Ba|=e,a)}function $m(e,n,a,r){return Kn(a,n)?a:ar.current!==null?(e=_f(e,a,r),Kn(e,n)||(fn=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(Re&261930)===0?(fn=!0,e.memoizedState=a):(e=$0(),pe.lanes|=e,Ba|=e,n)}function t0(e,n,a,r,u){var f=B.p;B.p=f!==0&&8>f?f:8;var x=O.T,A={};O.T=A,Sf(e,!1,n,a);try{var V=u(),ot=O.S;if(ot!==null&&ot(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var vt=eS(V,r);xo(e,n,vt,ni(e))}else xo(e,n,r,ni(e))}catch(Mt){xo(e,n,{then:function(){},status:"rejected",reason:Mt},ni())}finally{B.p=f,x!==null&&A.types!==null&&(x.types=A.types),O.T=x}}function oS(){}function vf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=e0(e).queue;t0(e,u,n,rt,a===null?oS:function(){return n0(e),a(r)})}function e0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:rt,baseState:rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:rt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function n0(e){var n=e0(e);n.next===null&&(n=e.alternate.memoizedState),xo(e,n.next.queue,{},ni())}function xf(){return Mn(Fo)}function i0(){return sn().memoizedState}function a0(){return sn().memoizedState}function lS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();e=Na(a);var r=La(n,e,a);r!==null&&(qn(r,n,a),po(r,n,a)),n={cache:ju()},e.payload=n;return}n=n.return}}function cS(e,n,a){var r=ni();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},kl(e)?r0(n,a):(a=Fu(e,n,a,r),a!==null&&(qn(a,e,r),o0(a,n,r)))}function s0(e,n,a){var r=ni();xo(e,n,a,r)}function xo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(kl(e))r0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,A=f(x,a);if(u.hasEagerState=!0,u.eagerState=A,Kn(A,x))return El(e,n,u,0),je===null&&Ml(),!1}catch{}finally{}if(a=Fu(e,n,u,r),a!==null)return qn(a,e,r),o0(a,n,r),!0}return!1}function Sf(e,n,a,r){if(r={lane:2,revertLane:Jf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},kl(e)){if(n)throw Error(s(479))}else n=Fu(e,a,r,2),n!==null&&qn(n,e,2)}function kl(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function r0(e,n){sr=Fl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function o0(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Bs(e,a)}}var So={readContext:Mn,use:Il,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};So.useEffectEvent=tn;var l0={readContext:Mn,use:Il,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:Wm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Gl(4194308,4,Zm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Gl(4194308,4,e,n)},useInsertionEffect:function(e,n){Gl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var r=e();if(xs){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Bn();if(a!==void 0){var u=a(n);if(xs){Ht(!0);try{a(n)}finally{Ht(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=cS.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=hf(e);var n=e.queue,a=s0.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:gf,useDeferredValue:function(e,n){var a=Bn();return _f(a,e,n)},useTransition:function(){var e=hf(!1);return e=t0.bind(null,pe,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=pe,u=Bn();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),je===null)throw Error(s(349));(Re&127)!==0||wm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Wm(Um.bind(null,r,f,e),[e]),r.flags|=2048,or(9,{destroy:void 0},Dm.bind(null,r,f,a,n),null),a},useId:function(){var e=Bn(),n=je.identifierPrefix;if(we){var a=Ni,r=Ui;a=(r&~(1<<32-zt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=nS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:xf,useFormState:Hm,useActionState:Hm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Sf.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:uf,useCacheRefresh:function(){return Bn().memoizedState=lS.bind(null,pe)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},yf={readContext:Mn,use:Il,useCallback:Qm,useContext:Mn,useEffect:mf,useImperativeHandle:Km,useInsertionEffect:jm,useLayoutEffect:Ym,useMemo:Jm,useReducer:Hl,useRef:Xm,useState:function(){return Hl(na)},useDebugValue:gf,useDeferredValue:function(e,n){var a=sn();return $m(a,ke.memoizedState,e,n)},useTransition:function(){var e=Hl(na)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:Cm,useId:i0,useHostTransitionStatus:xf,useFormState:Gm,useActionState:Gm,useOptimistic:function(e,n){var a=sn();return Om(a,ke,e,n)},useMemoCache:uf,useCacheRefresh:a0};yf.useEffectEvent=qm;var c0={readContext:Mn,use:Il,useCallback:Qm,useContext:Mn,useEffect:mf,useImperativeHandle:Km,useInsertionEffect:jm,useLayoutEffect:Ym,useMemo:Jm,useReducer:df,useRef:Xm,useState:function(){return df(na)},useDebugValue:gf,useDeferredValue:function(e,n){var a=sn();return ke===null?_f(a,e,n):$m(a,ke.memoizedState,e,n)},useTransition:function(){var e=df(na)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:Cm,useId:i0,useHostTransitionStatus:xf,useFormState:km,useActionState:km,useOptimistic:function(e,n){var a=sn();return ke!==null?Om(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:uf,useCacheRefresh:a0};c0.useEffectEvent=qm;function Mf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:y({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ef={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ni(),u=Na(r);u.payload=n,a!=null&&(u.callback=a),n=La(e,u,r),n!==null&&(qn(n,e,r),po(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ni(),u=Na(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(e,u,r),n!==null&&(qn(n,e,r),po(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ni(),r=Na(a);r.tag=2,n!=null&&(r.callback=n),n=La(e,r,a),n!==null&&(qn(n,e,a),po(n,e,a))}};function u0(e,n,a,r,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!so(a,r)||!so(u,f):!0}function f0(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Ef.enqueueReplaceState(n,n.state,null)}function Ss(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=y({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function d0(e){yl(e)}function h0(e){console.error(e)}function p0(e){yl(e)}function Xl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function m0(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function bf(e,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(e,n)},a}function g0(e){return e=Na(e),e.tag=3,e}function _0(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){m0(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){m0(n,a,r),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function uS(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&$s(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?nc():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Zf(e,r,u)),!1;case 22:return a.flags|=65536,r===Ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Zf(e,r,u)),!1}throw Error(s(435,a.tag))}return Zf(e,r,u),nc(),!1}if(we)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Vu&&(e=Error(s(422),{cause:r}),lo(ci(e,a)))):(r!==Vu&&(n=Error(s(423),{cause:r}),lo(ci(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=ci(r,a),u=bf(e.stateNode,r,u),$u(e,u),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:r});if(f=ci(f,a),Co===null?Co=[f]:Co.push(f),en!==4&&(en=2),n===null)return!0;r=ci(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=bf(a.stateNode,r,e),$u(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ia===null||!Ia.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=g0(u),_0(u,e,a,r),$u(a,u),!1}a=a.return}while(a!==null);return!1}var Tf=Error(s(461)),fn=!1;function En(e,n,a,r){n.child=e===null?ym(n,null,a,r):vs(n,e.child,a,r)}function v0(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var A in r)A!=="ref"&&(x[A]=r[A])}else x=r;return ps(n),r=rf(e,n,a,x,f,u),A=of(),e!==null&&!fn?(lf(e,n,u),ia(e,n,u)):(we&&A&&Hu(n),n.flags|=1,En(e,n,r,u),n.child)}function x0(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!zu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,S0(e,n,f,r,u)):(e=Tl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Lf(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:so,a(x,r)&&e.ref===n.ref)return ia(e,n,u)}return n.flags|=1,e=Qi(f,r),e.ref=n.ref,e.return=n,n.child=e}function S0(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(so(f,r)&&e.ref===n.ref)if(fn=!1,n.pendingProps=r=f,Lf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,ia(e,n,u)}return Af(e,n,a,r,u)}function y0(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return M0(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&wl(n,f!==null?f.cachePool:null),f!==null?bm(n,f):ef(),Tm(n);else return r=n.lanes=536870912,M0(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(wl(n,f.cachePool),bm(n,f),Pa(),n.memoizedState=null):(e!==null&&wl(n,null),ef(),Pa());return En(e,n,u,a),n.child}function yo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function M0(e,n,a,r,u){var f=Zu();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&wl(n,null),ef(),Tm(n),e!==null&&$s(e,n,r,!0),n.childLanes=u,null}function Wl(e,n){return n=jl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function E0(e,n,a){return vs(n,e.child,null,a),e=Wl(n,n.pendingProps),e.flags|=2,$n(n),n.memoizedState=null,e}function fS(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(r.mode==="hidden")return e=Wl(n,r),n.lanes=536870912,yo(null,e);if(af(n),(e=Ye)?(e=Pg(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=rm(e),a.return=n,n.child=a,yn=n,Ye=null)):e=null,e===null)throw wa(n);return n.lanes=536870912,null}return Wl(n,r)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(af(n),u)if(n.flags&256)n.flags&=-257,n=E0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||$s(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(r=je,r!==null&&(x=ul(r,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,us(e,x),qn(r,e,x),Tf;nc(),n=E0(e,n,a)}else e=f.treeContext,Ye=pi(x.nextSibling),yn=n,we=!0,Ca=null,di=!1,e!==null&&cm(n,e),n=Wl(n,r),n.flags|=4096;return n}return e=Qi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ql(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Af(e,n,a,r,u){return ps(n),a=rf(e,n,a,r,void 0,u),r=of(),e!==null&&!fn?(lf(e,n,u),ia(e,n,u)):(we&&r&&Hu(n),n.flags|=1,En(e,n,a,u),n.child)}function b0(e,n,a,r,u,f){return ps(n),n.updateQueue=null,a=Rm(n,r,a,u),Am(e),r=of(),e!==null&&!fn?(lf(e,n,f),ia(e,n,f)):(we&&r&&Hu(n),n.flags|=1,En(e,n,a,f),n.child)}function T0(e,n,a,r,u){if(ps(n),n.stateNode===null){var f=Zs,x=a.contextType;typeof x=="object"&&x!==null&&(f=Mn(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ef,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Qu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Mn(x):Zs,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Mf(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Ef.enqueueReplaceState(f,f.state,null),go(n,r,f,u),mo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,V=Ss(a,A);f.props=V;var ot=f.context,vt=a.contextType;x=Zs,typeof vt=="object"&&vt!==null&&(x=Mn(vt));var Mt=a.getDerivedStateFromProps;vt=typeof Mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,vt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||ot!==x)&&f0(n,f,r,x),Ua=!1;var ct=n.memoizedState;f.state=ct,go(n,r,f,u),mo(),ot=n.memoizedState,A||ct!==ot||Ua?(typeof Mt=="function"&&(Mf(n,a,Mt,r),ot=n.memoizedState),(V=Ua||u0(n,a,V,r,ct,ot,x))?(vt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=x,r=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Ju(e,n),x=n.memoizedProps,vt=Ss(a,x),f.props=vt,Mt=n.pendingProps,ct=f.context,ot=a.contextType,V=Zs,typeof ot=="object"&&ot!==null&&(V=Mn(ot)),A=a.getDerivedStateFromProps,(ot=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==Mt||ct!==V)&&f0(n,f,r,V),Ua=!1,ct=n.memoizedState,f.state=ct,go(n,r,f,u),mo();var dt=n.memoizedState;x!==Mt||ct!==dt||Ua||e!==null&&e.dependencies!==null&&Rl(e.dependencies)?(typeof A=="function"&&(Mf(n,a,A,r),dt=n.memoizedState),(vt=Ua||u0(n,a,vt,r,ct,dt,V)||e!==null&&e.dependencies!==null&&Rl(e.dependencies))?(ot||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,dt,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,dt,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=dt),f.props=r,f.state=dt,f.context=V,r=vt):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&ct===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ct===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,ql(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=vs(n,e.child,null,u),n.child=vs(n,null,a,u)):En(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ia(e,n,u),e}function A0(e,n,a,r){return ds(),n.flags|=256,En(e,n,a,r),n.child}var Rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cf(e){return{baseLanes:e,cachePool:mm()}}function wf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ei),e}function R0(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?Oa(n):Pa(),(e=Ye)?(e=Pg(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=rm(e),a.return=n,n.child=a,yn=n,Ye=null)):e=null,e===null)throw wa(n);return fd(e)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,u?(Pa(),u=n.mode,A=jl({mode:"hidden",children:A},u),r=fs(r,u,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=Cf(a),r.childLanes=wf(e,x,a),n.memoizedState=Rf,yo(null,r)):(Oa(n),Df(n,A))}var V=e.memoizedState;if(V!==null&&(A=V.dehydrated,A!==null)){if(f)n.flags&256?(Oa(n),n.flags&=-257,n=Uf(e,n,a)):n.memoizedState!==null?(Pa(),n.child=e.child,n.flags|=128,n=null):(Pa(),A=r.fallback,u=n.mode,r=jl({mode:"visible",children:r.children},u),A=fs(A,u,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,vs(n,e.child,null,a),r=n.child,r.memoizedState=Cf(a),r.childLanes=wf(e,x,a),n.memoizedState=Rf,n=yo(null,r));else if(Oa(n),fd(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var ot=x.dgst;x=ot,r=Error(s(419)),r.stack="",r.digest=x,lo({value:r,source:null,stack:null}),n=Uf(e,n,a)}else if(fn||$s(e,n,a,!1),x=(a&e.childLanes)!==0,fn||x){if(x=je,x!==null&&(r=ul(x,a),r!==0&&r!==V.retryLane))throw V.retryLane=r,us(e,r),qn(x,e,r),Tf;ud(A)||nc(),n=Uf(e,n,a)}else ud(A)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,Ye=pi(A.nextSibling),yn=n,we=!0,Ca=null,di=!1,e!==null&&cm(n,e),n=Df(n,r.children),n.flags|=4096);return n}return u?(Pa(),A=r.fallback,u=n.mode,V=e.child,ot=V.sibling,r=Qi(V,{mode:"hidden",children:r.children}),r.subtreeFlags=V.subtreeFlags&65011712,ot!==null?A=Qi(ot,A):(A=fs(A,u,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,yo(null,r),r=n.child,A=e.child.memoizedState,A===null?A=Cf(a):(u=A.cachePool,u!==null?(V=cn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=mm(),A={baseLanes:A.baseLanes|a,cachePool:u}),r.memoizedState=A,r.childLanes=wf(e,x,a),n.memoizedState=Rf,yo(e.child,r)):(Oa(n),a=e.child,e=a.sibling,a=Qi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Df(e,n){return n=jl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function jl(e,n){return e=Qn(22,e,null,n),e.lanes=0,e}function Uf(e,n,a){return vs(n,e.child,null,a),e=Df(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function C0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Wu(e.return,n,a)}function Nf(e,n,a,r,u,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function w0(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var x=an.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,at(an,x),En(e,n,r,a),r=we?oo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&C0(e,a,n);else if(e.tag===19)C0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Pl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Nf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Pl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Nf(n,!0,a,null,f,r);break;case"together":Nf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ia(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if($s(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Qi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Qi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Rl(e)))}function dS(e,n,a){switch(n.tag){case 3:ut(n,n.stateNode.containerInfo),Da(n,cn,e.memoizedState.cache),ds();break;case 27:case 5:Dt(n);break;case 4:ut(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,af(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Oa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?R0(e,n,a):(Oa(n),e=ia(e,n,a),e!==null?e.sibling:null);Oa(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||($s(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return w0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),at(an,an.current),r)break;return null;case 22:return n.lanes=0,y0(e,n,a,n.pendingProps);case 24:Da(n,cn,e.memoizedState.cache)}return ia(e,n,a)}function D0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Lf(e,a)&&(n.flags&128)===0)return fn=!1,dS(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,we&&(n.flags&1048576)!==0&&lm(n,oo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=gs(n.elementType),n.type=e,typeof e=="function")zu(e)?(r=Ss(e,r),n.tag=1,n=T0(null,n,e,r,a)):(n.tag=0,n=Af(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=v0(null,n,e,r,a);break t}else if(u===z){n.tag=14,n=x0(null,n,e,r,a);break t}}throw n=et(e)||e,Error(s(306,n,""))}}return n;case 0:return Af(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Ss(r,n.pendingProps),T0(e,n,r,u,a);case 3:t:{if(ut(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Ju(e,n),go(n,r,null,a);var x=n.memoizedState;if(r=x.cache,Da(n,cn,r),r!==f.cache&&qu(n,[cn],a,!0),mo(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=A0(e,n,r,a);break t}else if(r!==u){u=ci(Error(s(424)),n),lo(u),n=A0(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=pi(e.firstChild),yn=n,we=!0,Ca=null,di=!0,a=ym(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ds(),r===u){n=ia(e,n,a);break t}En(e,n,r,a)}n=n.child}return n;case 26:return ql(e,n),e===null?(a=Gg(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,r=cc(J.current).createElement(a),r[rn]=n,r[pn]=e,bn(r,a,e),Y(r),n.stateNode=r):n.memoizedState=Gg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Dt(n),e===null&&we&&(r=n.stateNode=Bg(n.type,n.pendingProps,J.current),yn=n,di=!0,u=Ye,ka(n.type)?(dd=u,Ye=pi(r.firstChild)):Ye=u),En(e,n,n.pendingProps.children,a),ql(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=r=Ye)&&(r=VS(r,n.type,n.pendingProps,di),r!==null?(n.stateNode=r,yn=n,Ye=pi(r.firstChild),di=!1,u=!0):u=!1),u||wa(n)),Dt(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,r=f.children,od(u,f)?r=null:x!==null&&od(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=rf(e,n,iS,null,null,a),Fo._currentValue=u),ql(e,n),En(e,n,r,a),n.child;case 6:return e===null&&we&&((e=a=Ye)&&(a=kS(a,n.pendingProps,di),a!==null?(n.stateNode=a,yn=n,Ye=null,e=!0):e=!1),e||wa(n)),null;case 13:return R0(e,n,a);case 4:return ut(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=vs(n,null,r,a):En(e,n,r,a),n.child;case 11:return v0(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Da(n,n.type,r.value),En(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,ps(n),u=Mn(u),r=r(u),n.flags|=1,En(e,n,r,a),n.child;case 14:return x0(e,n,n.type,n.pendingProps,a);case 15:return S0(e,n,n.type,n.pendingProps,a);case 19:return w0(e,n,a);case 31:return fS(e,n,a);case 22:return y0(e,n,a,n.pendingProps);case 24:return ps(n),r=Mn(cn),e===null?(u=Zu(),u===null&&(u=je,f=ju(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Qu(n),Da(n,cn,u)):((e.lanes&a)!==0&&(Ju(e,n),go(n,null,null,a),mo()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Da(n,cn,r)):(r=f.cache,Da(n,cn,r),r!==u.cache&&qu(n,[cn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function aa(e){e.flags|=4}function Of(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(ig())e.flags|=8192;else throw _s=Ul,Ku}else e.flags&=-16777217}function U0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qg(n))if(ig())e.flags|=8192;else throw _s=Ul,Ku}function Yl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,fr|=n)}function Mo(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function hS(e,n,a){var r=n.pendingProps;switch(Gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ta(cn),yt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Js(n)?aa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ku())),Ze(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(aa(n),f!==null?(Ze(n),U0(n,f)):(Ze(n),Of(n,u,null,r,a))):f?f!==e.memoizedState?(aa(n),Ze(n),U0(n,f)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&aa(n),Ze(n),Of(n,u,e,r,a)),null;case 27:if(Pt(n),a=J.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&aa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=Et.current,Js(n)?um(n):(e=Bg(u,r,a),n.stateNode=e,aa(n))}return Ze(n),null;case 5:if(Pt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&aa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(f=Et.current,Js(n))um(n);else{var x=cc(J.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?x.createElement(u,{is:r.is}):x.createElement(u)}}f[rn]=n,f[pn]=r;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(bn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&aa(n)}}return Ze(n),Of(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&aa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=J.current,Js(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=yn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Rg(e.nodeValue,a)),e||wa(n,!0)}else e=cc(e).createTextNode(r),e[rn]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Js(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[rn]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Js(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[rn]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),Ze(n),null);case 4:return yt(),e===null&&nd(n.stateNode.containerInfo),Ze(n),null;case 10:return ta(n.type),Ze(n),null;case 19:if(Z(an),r=n.memoizedState,r===null)return Ze(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)Mo(r,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Pl(e),f!==null){for(n.flags|=128,Mo(r,!1),e=f.updateQueue,n.updateQueue=e,Yl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)sm(a,e),a=a.sibling;return at(an,an.current&1|2),we&&Ji(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&E()>$l&&(n.flags|=128,u=!0,Mo(r,!1),n.lanes=4194304)}else{if(!u)if(e=Pl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Yl(n,e),Mo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!we)return Ze(n),null}else 2*E()-r.renderingStartTime>$l&&a!==536870912&&(n.flags|=128,u=!0,Mo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=E(),e.sibling=null,a=an.current,at(an,u?a&1|2:a&1),we&&Ji(n,r.treeForkCount),e):(Ze(n),null);case 22:case 23:return $n(n),nf(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Z(ms),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(cn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function pS(e,n){switch(Gu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ta(cn),yt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Pt(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(s(340));ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if($n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(an),null;case 4:return yt(),null;case 10:return ta(n.type),null;case 22:case 23:return $n(n),nf(),e!==null&&Z(ms),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ta(cn),null;case 25:return null;default:return null}}function N0(e,n){switch(Gu(n),n.tag){case 3:ta(cn),yt();break;case 26:case 27:case 5:Pt(n);break;case 4:yt();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:Z(an);break;case 10:ta(n.type);break;case 22:case 23:$n(n),nf(),e!==null&&Z(ms);break;case 24:ta(cn)}}function Eo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==u)}}catch(A){Ge(n,n.return,A)}}function Fa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var x=r.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var V=a,ot=A;try{ot()}catch(vt){Ge(u,V,vt)}}}r=r.next}while(r!==f)}}catch(vt){Ge(n,n.return,vt)}}function L0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Em(n,a)}catch(r){Ge(e,e.return,r)}}}function O0(e,n,a){a.props=Ss(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ge(e,n,r)}}function bo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Ge(e,n,u)}}function Li(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function P0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Pf(e,n,a){try{var r=e.stateNode;FS(r,e.type,a,n),r[pn]=n}catch(u){Ge(e,e.return,u)}}function F0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function Ff(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||F0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(r!==4&&(r===27&&ka(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(zf(e,n,a),e=e.sibling;e!==null;)zf(e,n,a),e=e.sibling}function Zl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Zl(e,n,a),e=e.sibling;e!==null;)Zl(e,n,a),e=e.sibling}function z0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,r,a),n[rn]=e,n[pn]=a}catch(f){Ge(e,e.return,f)}}var sa=!1,dn=!1,Bf=!1,B0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function mS(e,n){if(e=e.containerInfo,sd=gc,e=Kp(e),Du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,A=-1,V=-1,ot=0,vt=0,Mt=e,ct=null;e:for(;;){for(var dt;Mt!==a||u!==0&&Mt.nodeType!==3||(A=x+u),Mt!==f||r!==0&&Mt.nodeType!==3||(V=x+r),Mt.nodeType===3&&(x+=Mt.nodeValue.length),(dt=Mt.firstChild)!==null;)ct=Mt,Mt=dt;for(;;){if(Mt===e)break e;if(ct===a&&++ot===u&&(A=x),ct===f&&++vt===r&&(V=x),(dt=Mt.nextSibling)!==null)break;Mt=ct,ct=Mt.parentNode}Mt=dt}a=A===-1||V===-1?null:{start:A,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(rd={focusedElem:e,selectionRange:a},gc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Qt=Ss(a.type,u);e=r.getSnapshotBeforeUpdate(Qt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(se){Ge(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)cd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function I0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:oa(e,a),r&4&&Eo(5,a);break;case 1:if(oa(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Ge(a,a.return,x)}else{var u=Ss(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ge(a,a.return,x)}}r&64&&L0(a),r&512&&bo(a,a.return);break;case 3:if(oa(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Em(e,n)}catch(x){Ge(a,a.return,x)}}break;case 27:n===null&&r&4&&z0(a);case 26:case 5:oa(e,a),n===null&&r&4&&P0(a),r&512&&bo(a,a.return);break;case 12:oa(e,a);break;case 31:oa(e,a),r&4&&V0(e,a);break;case 13:oa(e,a),r&4&&k0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=bS.bind(null,a),XS(e,a))));break;case 22:if(r=a.memoizedState!==null||sa,!r){n=n!==null&&n.memoizedState!==null||dn,u=sa;var f=dn;sa=r,(dn=n)&&!f?la(e,a,(a.subtreeFlags&8772)!==0):oa(e,a),sa=u,dn=f}break;case 30:break;default:oa(e,a)}}function H0(e){var n=e.alternate;n!==null&&(e.alternate=null,H0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Qr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Vn=!1;function ra(e,n,a){for(a=a.child;a!==null;)G0(e,n,a),a=a.sibling}function G0(e,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Rt,a)}catch{}switch(a.tag){case 26:dn||Li(a,n),ra(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Li(a,n);var r=$e,u=Vn;ka(a.type)&&($e=a.stateNode,Vn=!1),ra(e,n,a),Lo(a.stateNode),$e=r,Vn=u;break;case 5:dn||Li(a,n);case 6:if(r=$e,u=Vn,$e=null,ra(e,n,a),$e=r,Vn=u,$e!==null)if(Vn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:$e!==null&&(Vn?(e=$e,Lg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),xr(e)):Lg($e,a.stateNode));break;case 4:r=$e,u=Vn,$e=a.stateNode.containerInfo,Vn=!0,ra(e,n,a),$e=r,Vn=u;break;case 0:case 11:case 14:case 15:Fa(2,a,n),dn||Fa(4,a,n),ra(e,n,a);break;case 1:dn||(Li(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&O0(a,n,r)),ra(e,n,a);break;case 21:ra(e,n,a);break;case 22:dn=(r=dn)||a.memoizedState!==null,ra(e,n,a),dn=r;break;default:ra(e,n,a)}}function V0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{xr(e)}catch(a){Ge(n,n.return,a)}}}function k0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xr(e)}catch(a){Ge(n,n.return,a)}}function gS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new B0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new B0),n;default:throw Error(s(435,e.tag))}}function Kl(e,n){var a=gS(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=TS.bind(null,e,r);r.then(u,u)}})}function kn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(ka(A.type)){$e=A.stateNode,Vn=!1;break t}break;case 5:$e=A.stateNode,Vn=!1;break t;case 3:case 4:$e=A.stateNode.containerInfo,Vn=!0;break t}A=A.return}if($e===null)throw Error(s(160));G0(f,x,u),$e=null,Vn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)X0(n,e),n=n.sibling}var bi=null;function X0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),Xn(e),r&4&&(Fa(3,e,e.return),Eo(3,e),Fa(5,e,e.return));break;case 1:kn(n,e),Xn(e),r&512&&(dn||a===null||Li(a,a.return)),r&64&&sa&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=bi;if(kn(n,e),Xn(e),r&512&&(dn||a===null||Li(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ss]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),bn(f,r,a),f[rn]=e,Y(f),r=f;break t;case"link":var x=Xg("link","href",u).get(r+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(f=x[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}f=u.createElement(r),bn(f,r,a),u.head.appendChild(f);break;case"meta":if(x=Xg("meta","content",u).get(r+(a.content||""))){for(A=0;A<x.length;A++)if(f=x[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}f=u.createElement(r),bn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[rn]=e,Y(f),r=f}e.stateNode=r}else Wg(u,e.type,e.stateNode);else e.stateNode=kg(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Wg(u,e.type,e.stateNode):kg(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:kn(n,e),Xn(e),r&512&&(dn||a===null||Li(a,a.return)),a!==null&&r&4&&Pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,e),Xn(e),r&512&&(dn||a===null||Li(a,a.return)),e.flags&32){u=e.stateNode;try{zn(u,"")}catch(Qt){Ge(e,e.return,Qt)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,Pf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(Bf=!0);break;case 6:if(kn(n,e),Xn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Qt){Ge(e,e.return,Qt)}}break;case 3:if(dc=null,u=bi,bi=uc(n.containerInfo),kn(n,e),bi=u,Xn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{xr(n.containerInfo)}catch(Qt){Ge(e,e.return,Qt)}Bf&&(Bf=!1,W0(e));break;case 4:r=bi,bi=uc(e.stateNode.containerInfo),kn(n,e),Xn(e),bi=r;break;case 12:kn(n,e),Xn(e);break;case 31:kn(n,e),Xn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Kl(e,r)));break;case 13:kn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jl=E()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Kl(e,r)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,ot=sa,vt=dn;if(sa=ot||u,dn=vt||V,kn(n,e),dn=vt,sa=ot,Xn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||sa||dn||ys(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=V.stateNode;var Mt=V.memoizedProps.style,ct=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;A.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(Qt){Ge(V,V.return,Qt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(Qt){Ge(V,V.return,Qt)}}}else if(n.tag===18){if(a===null){V=n;try{var dt=V.stateNode;u?Og(dt,!0):Og(V.stateNode,!1)}catch(Qt){Ge(V,V.return,Qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Kl(e,a))));break;case 19:kn(n,e),Xn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Kl(e,r)));break;case 30:break;case 21:break;default:kn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(F0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Ff(e);Zl(e,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(zn(x,""),a.flags&=-33);var A=Ff(e);Zl(e,A,x);break;case 3:case 4:var V=a.stateNode.containerInfo,ot=Ff(e);zf(e,ot,V);break;default:throw Error(s(161))}}catch(vt){Ge(e,e.return,vt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function W0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;W0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function oa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)I0(e,n.alternate,n),n=n.sibling}function ys(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),ys(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&O0(n,n.return,a),ys(n);break;case 27:Lo(n.stateNode);case 26:case 5:Li(n,n.return),ys(n);break;case 22:n.memoizedState===null&&ys(n);break;case 30:ys(n);break;default:ys(n)}e=e.sibling}}function la(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:la(u,f,a),Eo(4,f);break;case 1:if(la(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ot){Ge(r,r.return,ot)}if(r=f,u=r.updateQueue,u!==null){var A=r.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Mm(V[u],A)}catch(ot){Ge(r,r.return,ot)}}a&&x&64&&L0(f),bo(f,f.return);break;case 27:z0(f);case 26:case 5:la(u,f,a),a&&r===null&&x&4&&P0(f),bo(f,f.return);break;case 12:la(u,f,a);break;case 31:la(u,f,a),a&&x&4&&V0(u,f);break;case 13:la(u,f,a),a&&x&4&&k0(u,f);break;case 22:f.memoizedState===null&&la(u,f,a),bo(f,f.return);break;case 30:break;default:la(u,f,a)}n=n.sibling}}function If(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&co(a))}function Hf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e))}function Ti(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)q0(e,n,a,r),n=n.sibling}function q0(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,r),u&2048&&Eo(9,n);break;case 1:Ti(e,n,a,r);break;case 3:Ti(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e)));break;case 12:if(u&2048){Ti(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,A=f.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Ge(n,n.return,V)}}else Ti(e,n,a,r);break;case 31:Ti(e,n,a,r);break;case 13:Ti(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(e,n,a,r):To(e,n):f._visibility&2?Ti(e,n,a,r):(f._visibility|=2,lr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&If(x,n);break;case 24:Ti(e,n,a,r),u&2048&&Hf(n.alternate,n);break;default:Ti(e,n,a,r)}}function lr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,A=a,V=r,ot=x.flags;switch(x.tag){case 0:case 11:case 15:lr(f,x,A,V,u),Eo(8,x);break;case 23:break;case 22:var vt=x.stateNode;x.memoizedState!==null?vt._visibility&2?lr(f,x,A,V,u):To(f,x):(vt._visibility|=2,lr(f,x,A,V,u)),u&&ot&2048&&If(x.alternate,x);break;case 24:lr(f,x,A,V,u),u&&ot&2048&&Hf(x.alternate,x);break;default:lr(f,x,A,V,u)}n=n.sibling}}function To(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:To(a,r),u&2048&&If(r.alternate,r);break;case 24:To(a,r),u&2048&&Hf(r.alternate,r);break;default:To(a,r)}n=n.sibling}}var Ao=8192;function cr(e,n,a){if(e.subtreeFlags&Ao)for(e=e.child;e!==null;)j0(e,n,a),e=e.sibling}function j0(e,n,a){switch(e.tag){case 26:cr(e,n,a),e.flags&Ao&&e.memoizedState!==null&&ny(a,bi,e.memoizedState,e.memoizedProps);break;case 5:cr(e,n,a);break;case 3:case 4:var r=bi;bi=uc(e.stateNode.containerInfo),cr(e,n,a),bi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ao,Ao=16777216,cr(e,n,a),Ao=r):cr(e,n,a));break;default:cr(e,n,a)}}function Y0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ro(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,K0(r,e)}Y0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Z0(e),e=e.sibling}function Z0(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ql(e)):Ro(e);break;default:Ro(e)}}function Ql(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,K0(r,e)}Y0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(n));break;default:Ql(n)}e=e.sibling}}function K0(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:co(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,xn=r;else t:for(a=e;xn!==null;){r=xn;var u=r.sibling,f=r.return;if(H0(r),r===a){xn=null;break t}if(u!==null){u.return=f,xn=u;break t}xn=f}}}var _S={getCacheForType:function(e){var n=Mn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(cn).controller.signal}},vS=typeof WeakMap=="function"?WeakMap:Map,ze=0,je=null,Me=null,Re=0,He=0,ti=null,za=!1,ur=!1,Gf=!1,ca=0,en=0,Ba=0,Ms=0,Vf=0,ei=0,fr=0,Co=null,Wn=null,kf=!1,Jl=0,Q0=0,$l=1/0,tc=null,Ia=null,gn=0,Ha=null,dr=null,ua=0,Xf=0,Wf=null,J0=null,wo=0,qf=null;function ni(){return(ze&2)!==0&&Re!==0?Re&-Re:O.T!==null?Jf():Di()}function $0(){if(ei===0)if((Re&536870912)===0||we){var e=Ut;Ut<<=1,(Ut&3932160)===0&&(Ut=262144),ei=e}else ei=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ei}function qn(e,n,a){(e===je&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(hr(e,0),Ga(e,Re,ei,!1)),On(e,a),((ze&2)===0||e!==je)&&(e===je&&((ze&2)===0&&(Ms|=a),en===4&&Ga(e,Re,ei,!1)),Oi(e))}function tg(e,n,a){if((ze&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Yt(e,n),u=r?yS(e,n):Yf(e,n,!0),f=r;do{if(u===0){ur&&!r&&Ga(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!xS(a)){u=Yf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=e;u=Co;var V=A.current.memoizedState.isDehydrated;if(V&&(hr(A,x).flags|=256),x=Yf(A,x,!1),x!==2){if(Gf&&!V){A.errorRecoveryDisabledLanes|=f,Ms|=f,u=4;break t}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){hr(e,0),Ga(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ga(r,n,ei,!za);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Jl+300-E(),10<u)){if(Ga(r,n,ei,!za),gt(r,0,!0)!==0)break t;ua=n,r.timeoutHandle=Ug(eg.bind(null,r,a,Wn,tc,kf,n,ei,Ms,fr,za,f,"Throttled",-0,0),u);break t}eg(r,a,Wn,tc,kf,n,ei,Ms,fr,za,f,null,-0,0)}}break}while(!0);Oi(e)}function eg(e,n,a,r,u,f,x,A,V,ot,vt,Mt,ct,dt){if(e.timeoutHandle=-1,Mt=n.subtreeFlags,Mt&8192||(Mt&16785408)===16785408){Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},j0(n,f,Mt);var Qt=(f&62914560)===f?Jl-E():(f&4194048)===f?Q0-E():0;if(Qt=iy(Mt,Qt),Qt!==null){ua=f,e.cancelPendingCommit=Qt(cg.bind(null,e,n,f,a,r,u,x,A,V,vt,Mt,null,ct,dt)),Ga(e,f,x,!ot);return}}cg(e,n,f,a,r,u,x,A,V)}function xS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Kn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(e,n,a,r){n&=~Vf,n&=~Ms,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-zt(u),x=1<<f;r[f]=-1,u&=~x}a!==0&&Kr(e,a,n)}function ec(){return(ze&6)===0?(Do(0),!1):!0}function jf(){if(Me!==null){if(He===0)var e=Me.return;else e=Me,$i=hs=null,cf(e),ir=null,fo=0,e=Me;for(;e!==null;)N0(e.alternate,e),e=e.return;Me=null}}function hr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,IS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,jf(),je=e,Me=a=Qi(e.current,null),Re=n,He=0,ti=null,za=!1,ur=Yt(e,n),Gf=!1,fr=ei=Vf=Ms=Ba=en=0,Wn=Co=null,kf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-zt(r),f=1<<u;n|=e[u],r&=~f}return ca=n,Ml(),a}function ng(e,n){pe=null,O.H=So,n===nr||n===Dl?(n=vm(),He=3):n===Ku?(n=vm(),He=4):He=n===Tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,Me===null&&(en=1,Xl(e,ci(n,e.current)))}function ig(){var e=Jn.current;return e===null?!0:(Re&4194048)===Re?hi===null:(Re&62914560)===Re||(Re&536870912)!==0?e===hi:!1}function ag(){var e=O.H;return O.H=So,e===null?So:e}function sg(){var e=O.A;return O.A=_S,e}function nc(){en=4,za||(Re&4194048)!==Re&&Jn.current!==null||(ur=!0),(Ba&134217727)===0&&(Ms&134217727)===0||je===null||Ga(je,Re,ei,!1)}function Yf(e,n,a){var r=ze;ze|=2;var u=ag(),f=sg();(je!==e||Re!==n)&&(tc=null,hr(e,n)),n=!1;var x=en;t:do try{if(He!==0&&Me!==null){var A=Me,V=ti;switch(He){case 8:jf(),x=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var ot=He;if(He=0,ti=null,pr(e,A,V,ot),a&&ur){x=0;break t}break;default:ot=He,He=0,ti=null,pr(e,A,V,ot)}}SS(),x=en;break}catch(vt){ng(e,vt)}while(!0);return n&&e.shellSuspendCounter++,$i=hs=null,ze=r,O.H=u,O.A=f,Me===null&&(je=null,Re=0,Ml()),x}function SS(){for(;Me!==null;)rg(Me)}function yS(e,n){var a=ze;ze|=2;var r=ag(),u=sg();je!==e||Re!==n?(tc=null,$l=E()+500,hr(e,n)):ur=Yt(e,n);t:do try{if(He!==0&&Me!==null){n=Me;var f=ti;e:switch(He){case 1:He=0,ti=null,pr(e,n,f,1);break;case 2:case 9:if(gm(f)){He=0,ti=null,og(n);break}n=function(){He!==2&&He!==9||je!==e||(He=7),Oi(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:gm(f)?(He=0,ti=null,og(n)):(He=0,ti=null,pr(e,n,f,7));break;case 5:var x=null;switch(Me.tag){case 26:x=Me.memoizedState;case 5:case 27:var A=Me;if(x?qg(x):A.stateNode.complete){He=0,ti=null;var V=A.sibling;if(V!==null)Me=V;else{var ot=A.return;ot!==null?(Me=ot,ic(ot)):Me=null}break e}}He=0,ti=null,pr(e,n,f,5);break;case 6:He=0,ti=null,pr(e,n,f,6);break;case 8:jf(),en=6;break t;default:throw Error(s(462))}}MS();break}catch(vt){ng(e,vt)}while(!0);return $i=hs=null,O.H=r,O.A=u,ze=a,Me!==null?0:(je=null,Re=0,Ml(),en)}function MS(){for(;Me!==null&&!kt();)rg(Me)}function rg(e){var n=D0(e.alternate,e,ca);e.memoizedProps=e.pendingProps,n===null?ic(e):Me=n}function og(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=b0(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=b0(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:cf(n);default:N0(a,n),n=Me=sm(n,ca),n=D0(a,n,ca)}e.memoizedProps=e.pendingProps,n===null?ic(e):Me=n}function pr(e,n,a,r){$i=hs=null,cf(n),ir=null,fo=0;var u=n.return;try{if(uS(e,u,n,a,Re)){en=1,Xl(e,ci(a,e.current)),Me=null;return}}catch(f){if(u!==null)throw Me=u,f;en=1,Xl(e,ci(a,e.current)),Me=null;return}n.flags&32768?(we||r===1?e=!0:ur||(Re&536870912)!==0?e=!1:(za=e=!0,(r===2||r===9||r===3||r===6)&&(r=Jn.current,r!==null&&r.tag===13&&(r.flags|=16384))),lg(n,e)):ic(n)}function ic(e){var n=e;do{if((n.flags&32768)!==0){lg(n,za);return}e=n.return;var a=hS(n.alternate,n,ca);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);en===0&&(en=5)}function lg(e,n){do{var a=pS(e.alternate,e);if(a!==null){a.flags&=32767,Me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Me=e;return}Me=e=a}while(e!==null);en=6,Me=null}function cg(e,n,a,r,u,f,x,A,V){e.cancelPendingCommit=null;do ac();while(gn!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Pu,xi(e,a,f,x,A,V),e===je&&(Me=je=null,Re=0),dr=n,Ha=e,ua=a,Xf=f,Wf=u,J0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,AS(pt,function(){return pg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,u=B.p,B.p=2,x=ze,ze|=4;try{mS(e,n,a)}finally{ze=x,B.p=u,O.T=r}}gn=1,ug(),fg(),dg()}}function ug(){if(gn===1){gn=0;var e=Ha,n=dr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=B.p;B.p=2;var u=ze;ze|=4;try{X0(n,e);var f=rd,x=Kp(e.containerInfo),A=f.focusedElem,V=f.selectionRange;if(x!==A&&A&&A.ownerDocument&&Zp(A.ownerDocument.documentElement,A)){if(V!==null&&Du(A)){var ot=V.start,vt=V.end;if(vt===void 0&&(vt=ot),"selectionStart"in A)A.selectionStart=ot,A.selectionEnd=Math.min(vt,A.value.length);else{var Mt=A.ownerDocument||document,ct=Mt&&Mt.defaultView||window;if(ct.getSelection){var dt=ct.getSelection(),Qt=A.textContent.length,se=Math.min(V.start,Qt),We=V.end===void 0?se:Math.min(V.end,Qt);!dt.extend&&se>We&&(x=We,We=se,se=x);var tt=Yp(A,se),q=Yp(A,We);if(tt&&q&&(dt.rangeCount!==1||dt.anchorNode!==tt.node||dt.anchorOffset!==tt.offset||dt.focusNode!==q.node||dt.focusOffset!==q.offset)){var st=Mt.createRange();st.setStart(tt.node,tt.offset),dt.removeAllRanges(),se>We?(dt.addRange(st),dt.extend(q.node,q.offset)):(st.setEnd(q.node,q.offset),dt.addRange(st))}}}}for(Mt=[],dt=A;dt=dt.parentNode;)dt.nodeType===1&&Mt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Mt.length;A++){var xt=Mt[A];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}gc=!!sd,rd=sd=null}finally{ze=u,B.p=r,O.T=a}}e.current=n,gn=2}}function fg(){if(gn===2){gn=0;var e=Ha,n=dr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=B.p;B.p=2;var u=ze;ze|=4;try{I0(e,n.alternate,n)}finally{ze=u,B.p=r,O.T=a}}gn=3}}function dg(){if(gn===4||gn===3){gn=0,N();var e=Ha,n=dr,a=ua,r=J0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,dr=Ha=null,hg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ia=null),Hs(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,u=B.p,B.p=2,O.T=null;try{for(var f=e.onRecoverableError,x=0;x<r.length;x++){var A=r[x];f(A.value,{componentStack:A.stack})}}finally{O.T=n,B.p=u}}(ua&3)!==0&&ac(),Oi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===qf?wo++:(wo=0,qf=e):wo=0,Do(0)}}function hg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,co(n)))}function ac(){return ug(),fg(),dg(),pg()}function pg(){if(gn!==5)return!1;var e=Ha,n=Xf;Xf=0;var a=Hs(ua),r=O.T,u=B.p;try{B.p=32>a?32:a,O.T=null,a=Wf,Wf=null;var f=Ha,x=ua;if(gn=0,dr=Ha=null,ua=0,(ze&6)!==0)throw Error(s(331));var A=ze;if(ze|=4,Z0(f.current),q0(f,f.current,x,a),ze=A,Do(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Rt,f)}catch{}return!0}finally{B.p=u,O.T=r,hg(e,n)}}function mg(e,n,a){n=ci(a,n),n=bf(e.stateNode,n,2),e=La(e,n,2),e!==null&&(On(e,2),Oi(e))}function Ge(e,n,a){if(e.tag===3)mg(e,e,a);else for(;n!==null;){if(n.tag===3){mg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ia===null||!Ia.has(r))){e=ci(a,e),a=g0(2),r=La(n,a,2),r!==null&&(_0(a,r,n,e),On(r,2),Oi(r));break}}n=n.return}}function Zf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new vS;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Gf=!0,u.add(a),e=ES.bind(null,e,n,a),n.then(e,e))}function ES(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(Re&a)===a&&(en===4||en===3&&(Re&62914560)===Re&&300>E()-Jl?(ze&2)===0&&hr(e,0):Vf|=a,fr===Re&&(fr=0)),Oi(e)}function gg(e,n){n===0&&(n=Ie()),e=us(e,n),e!==null&&(On(e,n),Oi(e))}function bS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),gg(e,a)}function TS(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),gg(e,a)}function AS(e,n){return me(e,n)}var sc=null,mr=null,Kf=!1,rc=!1,Qf=!1,Va=0;function Oi(e){e!==mr&&e.next===null&&(mr===null?sc=mr=e:mr=mr.next=e),rc=!0,Kf||(Kf=!0,CS())}function Do(e,n){if(!Qf&&rc){Qf=!0;do for(var a=!1,r=sc;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var x=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-zt(42|e)+1)-1,f&=u&~(x&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Sg(r,f))}else f=Re,f=gt(r,r===je?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Yt(r,f)||(a=!0,Sg(r,f));r=r.next}while(a);Qf=!1}}function RS(){_g()}function _g(){rc=Kf=!1;var e=0;Va!==0&&BS()&&(e=Va);for(var n=E(),a=null,r=sc;r!==null;){var u=r.next,f=vg(r,n);f===0?(r.next=null,a===null?sc=u:a.next=u,u===null&&(mr=a)):(a=r,(e!==0||(f&3)!==0)&&(rc=!0)),r=u}gn!==0&&gn!==5||Do(e),Va!==0&&(Va=0)}function vg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-zt(f),A=1<<x,V=u[x];V===-1?((A&a)===0||(A&r)!==0)&&(u[x]=ce(A,n)):V<=n&&(e.expiredLanes|=A),f&=~A}if(n=je,a=Re,a=gt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Yt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ae(r),Hs(a)){case 2:case 8:a=bt;break;case 32:a=pt;break;case 268435456:a=Nt;break;default:a=pt}return r=xg.bind(null,e),a=me(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function xg(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ac()&&e.callbackNode!==a)return null;var r=Re;return r=gt(e,e===je?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(tg(e,r,n),vg(e,E()),e.callbackNode!=null&&e.callbackNode===a?xg.bind(null,e):null)}function Sg(e,n){if(ac())return null;tg(e,n,!0)}function CS(){HS(function(){(ze&6)!==0?me(_t,RS):_g()})}function Jf(){if(Va===0){var e=tr;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),Va=e}return Va}function yg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pl(""+e)}function Mg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function wS(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=yg((u[pn]||null).action),x=r.submitter;x&&(n=(n=x[pn]||null)?yg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var A=new vl("action","action",null,r,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Va!==0){var V=x?Mg(u,x):new FormData(u);vf(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(A.preventDefault(),V=x?Mg(u,x):new FormData(u),vf(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var $f=0;$f<Ou.length;$f++){var td=Ou[$f],DS=td.toLowerCase(),US=td[0].toUpperCase()+td.slice(1);Ei(DS,"on"+US)}Ei($p,"onAnimationEnd"),Ei(tm,"onAnimationIteration"),Ei(em,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(jx,"onTransitionRun"),Ei(Yx,"onTransitionStart"),Ei(Zx,"onTransitionCancel"),Ei(nm,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function Eg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var A=r[x],V=A.instance,ot=A.currentTarget;if(A=A.listener,V!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=ot;try{f(u)}catch(vt){yl(vt)}u.currentTarget=null,f=V}else for(x=0;x<r.length;x++){if(A=r[x],V=A.instance,ot=A.currentTarget,A=A.listener,V!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=ot;try{f(u)}catch(vt){yl(vt)}u.currentTarget=null,f=V}}}}function Ee(e,n){var a=n[Ea];a===void 0&&(a=n[Ea]=new Set);var r=e+"__bubble";a.has(r)||(bg(n,e,2,!1),a.add(r))}function ed(e,n,a){var r=0;n&&(r|=4),bg(a,e,r,n)}var oc="_reactListening"+Math.random().toString(36).slice(2);function nd(e){if(!e[oc]){e[oc]=!0,ft.forEach(function(a){a!=="selectionchange"&&(NS.has(a)||ed(a,!1,e),ed(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[oc]||(n[oc]=!0,ed("selectionchange",!1,n))}}function bg(e,n,a,r){switch($g(n)){case 2:var u=ry;break;case 8:u=oy;break;default:u=_d}a=u.bind(null,n,a,e),u=void 0,!yu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function id(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var A=r.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=r.return;x!==null;){var V=x.tag;if((V===3||V===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=ba(A),x===null)return;if(V=x.tag,V===5||V===6||V===26||V===27){r=f=x;continue t}A=A.parentNode}}r=r.return}wp(function(){var ot=f,vt=xu(a),Mt=[];t:{var ct=im.get(e);if(ct!==void 0){var dt=vl,Qt=e;switch(e){case"keypress":if(gl(a)===0)break t;case"keydown":case"keyup":dt=Tx;break;case"focusin":Qt="focus",dt=Tu;break;case"focusout":Qt="blur",dt=Tu;break;case"beforeblur":case"afterblur":dt=Tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=Cx;break;case $p:case tm:case em:dt=gx;break;case nm:dt=Dx;break;case"scroll":case"scrollend":dt=fx;break;case"wheel":dt=Nx;break;case"copy":case"cut":case"paste":dt=vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=Op;break;case"toggle":case"beforetoggle":dt=Ox}var se=(n&4)!==0,We=!se&&(e==="scroll"||e==="scrollend"),tt=se?ct!==null?ct+"Capture":null:ct;se=[];for(var q=ot,st;q!==null;){var xt=q;if(st=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||st===null||tt===null||(xt=Jr(q,tt),xt!=null&&se.push(No(q,xt,st))),We)break;q=q.return}0<se.length&&(ct=new dt(ct,Qt,null,a,vt),Mt.push({event:ct,listeners:se}))}}if((n&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",ct&&a!==vu&&(Qt=a.relatedTarget||a.fromElement)&&(ba(Qt)||Qt[ji]))break t;if((dt||ct)&&(ct=vt.window===vt?vt:(ct=vt.ownerDocument)?ct.defaultView||ct.parentWindow:window,dt?(Qt=a.relatedTarget||a.toElement,dt=ot,Qt=Qt?ba(Qt):null,Qt!==null&&(We=c(Qt),se=Qt.tag,Qt!==We||se!==5&&se!==27&&se!==6)&&(Qt=null)):(dt=null,Qt=ot),dt!==Qt)){if(se=Np,xt="onMouseLeave",tt="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(se=Op,xt="onPointerLeave",tt="onPointerEnter",q="pointer"),We=dt==null?ct:rs(dt),st=Qt==null?ct:rs(Qt),ct=new se(xt,q+"leave",dt,a,vt),ct.target=We,ct.relatedTarget=st,xt=null,ba(vt)===ot&&(se=new se(tt,q+"enter",Qt,a,vt),se.target=st,se.relatedTarget=We,xt=se),We=xt,dt&&Qt)e:{for(se=LS,tt=dt,q=Qt,st=0,xt=tt;xt;xt=se(xt))st++;xt=0;for(var ae=q;ae;ae=se(ae))xt++;for(;0<st-xt;)tt=se(tt),st--;for(;0<xt-st;)q=se(q),xt--;for(;st--;){if(tt===q||q!==null&&tt===q.alternate){se=tt;break e}tt=se(tt),q=se(q)}se=null}else se=null;dt!==null&&Tg(Mt,ct,dt,se,!1),Qt!==null&&We!==null&&Tg(Mt,We,Qt,se,!0)}}t:{if(ct=ot?rs(ot):window,dt=ct.nodeName&&ct.nodeName.toLowerCase(),dt==="select"||dt==="input"&&ct.type==="file")var Pe=Vp;else if(Hp(ct))if(kp)Pe=Xx;else{Pe=Vx;var te=Gx}else dt=ct.nodeName,!dt||dt.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?ot&&Vs(ot.elementType)&&(Pe=Vp):Pe=kx;if(Pe&&(Pe=Pe(e,ot))){Gp(Mt,Pe,a,vt);break t}te&&te(e,ct,ot),e==="focusout"&&ot&&ct.type==="number"&&ot.memoizedProps.value!=null&&yi(ct,"number",ct.value)}switch(te=ot?rs(ot):window,e){case"focusin":(Hp(te)||te.contentEditable==="true")&&(qs=te,Uu=ot,ro=null);break;case"focusout":ro=Uu=qs=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,Qp(Mt,a,vt);break;case"selectionchange":if(qx)break;case"keydown":case"keyup":Qp(Mt,a,vt)}var ve;if(Ru)t:{switch(e){case"compositionstart":var Ce="onCompositionStart";break t;case"compositionend":Ce="onCompositionEnd";break t;case"compositionupdate":Ce="onCompositionUpdate";break t}Ce=void 0}else Ws?Bp(e,a)&&(Ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ce="onCompositionStart");Ce&&(Pp&&a.locale!=="ko"&&(Ws||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Ws&&(ve=Dp()):(Aa=vt,Mu="value"in Aa?Aa.value:Aa.textContent,Ws=!0)),te=lc(ot,Ce),0<te.length&&(Ce=new Lp(Ce,e,null,a,vt),Mt.push({event:Ce,listeners:te}),ve?Ce.data=ve:(ve=Ip(a),ve!==null&&(Ce.data=ve)))),(ve=Fx?zx(e,a):Bx(e,a))&&(Ce=lc(ot,"onBeforeInput"),0<Ce.length&&(te=new Lp("onBeforeInput","beforeinput",null,a,vt),Mt.push({event:te,listeners:Ce}),te.data=ve)),wS(Mt,e,ot,a,vt)}Eg(Mt,n)})}function No(e,n,a){return{instance:e,listener:n,currentTarget:a}}function lc(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Jr(e,a),u!=null&&r.unshift(No(e,u,f)),u=Jr(e,n),u!=null&&r.push(No(e,u,f))),e.tag===3)return r;e=e.return}return[]}function LS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Tg(e,n,a,r,u){for(var f=n._reactName,x=[];a!==null&&a!==r;){var A=a,V=A.alternate,ot=A.stateNode;if(A=A.tag,V!==null&&V===r)break;A!==5&&A!==26&&A!==27||ot===null||(V=ot,u?(ot=Jr(a,f),ot!=null&&x.unshift(No(a,ot,V))):u||(ot=Jr(a,f),ot!=null&&x.push(No(a,ot,V)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var OS=/\r\n?/g,PS=/\u0000|\uFFFD/g;function Ag(e){return(typeof e=="string"?e:""+e).replace(OS,`
`).replace(PS,"")}function Rg(e,n){return n=Ag(n),Ag(e)===n}function Xe(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||zn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&zn(e,""+r);break;case"className":fe(e,"class",r);break;case"tabIndex":fe(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":fe(e,a,r);break;case"style":Yi(e,r,f);break;case"data":if(n!=="object"){fe(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=pl(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=pl(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Zi);break;case"onScroll":r!=null&&Ee("scroll",e);break;case"onScrollEnd":r!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=pl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),oe(e,"popover",r);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":oe(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=cx.get(a)||a,oe(e,a,r))}}function ad(e,n,a,r,u,f){switch(a){case"style":Yi(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?zn(e,r):(typeof r=="number"||typeof r=="bigint")&&zn(e,""+r);break;case"onScroll":r!=null&&Ee("scroll",e);break;case"onScrollEnd":r!=null&&Ee("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):oe(e,a,r)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,x,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),r&&Xe(e,n,"src",a.src,a,null);return;case"input":Ee("invalid",e);var A=f=x=u=null,V=null,ot=null;for(r in a)if(a.hasOwnProperty(r)){var vt=a[r];if(vt!=null)switch(r){case"name":u=vt;break;case"type":x=vt;break;case"checked":V=vt;break;case"defaultChecked":ot=vt;break;case"value":f=vt;break;case"defaultValue":A=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(s(137,n));break;default:Xe(e,n,r,vt,a,null)}}Yn(e,f,A,V,ot,x,u,!1);return;case"select":Ee("invalid",e),r=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":x=A;break;case"multiple":r=A;default:Xe(e,n,u,A,a,null)}n=f,a=x,e.multiple=!!r,n!=null?Zn(e,!!r,n,!1):a!=null&&Zn(e,!!r,a,!0);return;case"textarea":Ee("invalid",e),f=u=r=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":r=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Xe(e,n,x,A,a,null)}on(e,r,u,f);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(r=a[V],r!=null))switch(V){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xe(e,n,V,r,a,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(r=0;r<Uo.length;r++)Ee(Uo[r],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in a)if(a.hasOwnProperty(ot)&&(r=a[ot],r!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,ot,r,a,null)}return;default:if(Vs(n)){for(vt in a)a.hasOwnProperty(vt)&&(r=a[vt],r!==void 0&&ad(e,n,vt,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Xe(e,n,A,r,a,null))}function FS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,A=null,V=null,ot=null,vt=null;for(dt in a){var Mt=a[dt];if(a.hasOwnProperty(dt)&&Mt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":V=Mt;default:r.hasOwnProperty(dt)||Xe(e,n,dt,null,r,Mt)}}for(var ct in r){var dt=r[ct];if(Mt=a[ct],r.hasOwnProperty(ct)&&(dt!=null||Mt!=null))switch(ct){case"type":f=dt;break;case"name":u=dt;break;case"checked":ot=dt;break;case"defaultChecked":vt=dt;break;case"value":x=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:dt!==Mt&&Xe(e,n,ct,dt,r,Mt)}}Fn(e,x,A,V,ot,vt,f,u);return;case"select":dt=x=A=ct=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":dt=V;default:r.hasOwnProperty(f)||Xe(e,n,f,null,r,V)}for(u in r)if(f=r[u],V=a[u],r.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":ct=f;break;case"defaultValue":A=f;break;case"multiple":x=f;default:f!==V&&Xe(e,n,u,f,r,V)}n=A,a=x,r=dt,ct!=null?Zn(e,!!a,ct,!1):!!r!=!!a&&(n!=null?Zn(e,!!a,n,!0):Zn(e,!!a,a?[]:"",!1));return;case"textarea":dt=ct=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xe(e,n,A,null,r,u)}for(x in r)if(u=r[x],f=a[x],r.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":ct=u;break;case"defaultValue":dt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(e,n,x,u,r,f)}Be(e,ct,dt);return;case"option":for(var Qt in a)if(ct=a[Qt],a.hasOwnProperty(Qt)&&ct!=null&&!r.hasOwnProperty(Qt))switch(Qt){case"selected":e.selected=!1;break;default:Xe(e,n,Qt,null,r,ct)}for(V in r)if(ct=r[V],dt=a[V],r.hasOwnProperty(V)&&ct!==dt&&(ct!=null||dt!=null))switch(V){case"selected":e.selected=ct&&typeof ct!="function"&&typeof ct!="symbol";break;default:Xe(e,n,V,ct,r,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)ct=a[se],a.hasOwnProperty(se)&&ct!=null&&!r.hasOwnProperty(se)&&Xe(e,n,se,null,r,ct);for(ot in r)if(ct=r[ot],dt=a[ot],r.hasOwnProperty(ot)&&ct!==dt&&(ct!=null||dt!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Xe(e,n,ot,ct,r,dt)}return;default:if(Vs(n)){for(var We in a)ct=a[We],a.hasOwnProperty(We)&&ct!==void 0&&!r.hasOwnProperty(We)&&ad(e,n,We,void 0,r,ct);for(vt in r)ct=r[vt],dt=a[vt],!r.hasOwnProperty(vt)||ct===dt||ct===void 0&&dt===void 0||ad(e,n,vt,ct,r,dt);return}}for(var tt in a)ct=a[tt],a.hasOwnProperty(tt)&&ct!=null&&!r.hasOwnProperty(tt)&&Xe(e,n,tt,null,r,ct);for(Mt in r)ct=r[Mt],dt=a[Mt],!r.hasOwnProperty(Mt)||ct===dt||ct==null&&dt==null||Xe(e,n,Mt,ct,r,dt)}function Cg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,x=u.initiatorType,A=u.duration;if(f&&A&&Cg(x)){for(x=0,A=u.responseEnd,r+=1;r<a.length;r++){var V=a[r],ot=V.startTime;if(ot>A)break;var vt=V.transferSize,Mt=V.initiatorType;vt&&Cg(Mt)&&(V=V.responseEnd,x+=vt*(V<A?1:(A-ot)/(V-ot)))}if(--r,n+=8*(f+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sd=null,rd=null;function cc(e){return e.nodeType===9?e:e.ownerDocument}function wg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function od(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ld=null;function BS(){var e=window.event;return e&&e.type==="popstate"?e===ld?!1:(ld=e,!0):(ld=null,!1)}var Ug=typeof setTimeout=="function"?setTimeout:void 0,IS=typeof clearTimeout=="function"?clearTimeout:void 0,Ng=typeof Promise=="function"?Promise:void 0,HS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ng<"u"?function(e){return Ng.resolve(null).then(e).catch(GS)}:Ug;function GS(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function Lg(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),xr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Lo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Lo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,A=f.nodeName;f[ss]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Lo(e.ownerDocument.body);a=u}while(a);xr(n)}function Og(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function cd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":cd(a),Qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function VS(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ss])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function kS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pi(e.nextSibling),e===null))return null;return e}function Pg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pi(e.nextSibling),e===null))return null;return e}function ud(e){return e.data==="$?"||e.data==="$~"}function fd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function XS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var dd=null;function Fg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return pi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function zg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Bg(e,n,a){switch(n=cc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Lo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qr(e)}var mi=new Map,Ig=new Set;function uc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=B.d;B.d={f:WS,r:qS,D:jS,C:YS,L:ZS,m:KS,X:JS,S:QS,M:$S};function WS(){var e=fa.f(),n=ec();return e||n}function qS(e){var n=Ta(e);n!==null&&n.tag===5&&n.type==="form"?n0(n):fa.r(e)}var gr=typeof document>"u"?null:document;function Hg(e,n,a){var r=gr;if(r&&typeof n=="string"&&n){var u=ue(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ig.has(u)||(Ig.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),bn(n,"link",e),Y(n),r.head.appendChild(n)))}}function jS(e){fa.D(e),Hg("dns-prefetch",e,null)}function YS(e,n){fa.C(e,n),Hg("preconnect",e,n)}function ZS(e,n,a){fa.L(e,n,a);var r=gr;if(r&&e&&n){var u='link[rel="preload"][as="'+ue(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ue(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ue(a.imageSizes)+'"]')):u+='[href="'+ue(e)+'"]';var f=u;switch(n){case"style":f=_r(e);break;case"script":f=vr(e)}mi.has(f)||(e=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),mi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Oo(f))||n==="script"&&r.querySelector(Po(f))||(n=r.createElement("link"),bn(n,"link",e),Y(n),r.head.appendChild(n)))}}function KS(e,n){fa.m(e,n);var a=gr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ue(r)+'"][href="'+ue(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=vr(e)}if(!mi.has(f)&&(e=y({rel:"modulepreload",href:e},n),mi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Po(f)))return}r=a.createElement("link"),bn(r,"link",e),Y(r),a.head.appendChild(r)}}}function QS(e,n,a){fa.S(e,n,a);var r=gr;if(r&&e){var u=C(r).hoistableStyles,f=_r(e);n=n||"default";var x=u.get(f);if(!x){var A={loading:0,preload:null};if(x=r.querySelector(Oo(f)))A.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},a),(a=mi.get(f))&&hd(e,a);var V=x=r.createElement("link");Y(V),bn(V,"link",e),V._p=new Promise(function(ot,vt){V.onload=ot,V.onerror=vt}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,fc(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(f,x)}}}function JS(e,n){fa.X(e,n);var a=gr;if(a&&e){var r=C(a).hoistableScripts,u=vr(e),f=r.get(u);f||(f=a.querySelector(Po(u)),f||(e=y({src:e,async:!0},n),(n=mi.get(u))&&pd(e,n),f=a.createElement("script"),Y(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function $S(e,n){fa.M(e,n);var a=gr;if(a&&e){var r=C(a).hoistableScripts,u=vr(e),f=r.get(u);f||(f=a.querySelector(Po(u)),f||(e=y({src:e,async:!0,type:"module"},n),(n=mi.get(u))&&pd(e,n),f=a.createElement("script"),Y(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Gg(e,n,a,r){var u=(u=J.current)?uc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_r(a.href),a=C(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_r(a.href);var f=C(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(Oo(e)))&&!f._p&&(x.instance=f,x.state.loading=5),mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(e,a),f||ty(u,e,a,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vr(a),a=C(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function _r(e){return'href="'+ue(e)+'"'}function Oo(e){return'link[rel="stylesheet"]['+e+"]"}function Vg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function ty(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),bn(n,"link",a),Y(n),e.head.appendChild(n))}function vr(e){return'[src="'+ue(e)+'"]'}function Po(e){return"script[async]"+e}function kg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+ue(a.href)+'"]');if(r)return n.instance=r,Y(r),r;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Y(r),bn(r,"style",u),fc(r,a.precedence,e),n.instance=r;case"stylesheet":u=_r(a.href);var f=e.querySelector(Oo(u));if(f)return n.state.loading|=4,n.instance=f,Y(f),f;r=Vg(a),(u=mi.get(u))&&hd(r,u),f=(e.ownerDocument||e).createElement("link"),Y(f);var x=f;return x._p=new Promise(function(A,V){x.onload=A,x.onerror=V}),bn(f,"link",r),n.state.loading|=4,fc(f,a.precedence,e),n.instance=f;case"script":return f=vr(a.src),(u=e.querySelector(Po(f)))?(n.instance=u,Y(u),u):(r=a,(u=mi.get(f))&&(r=y({},a),pd(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),Y(u),bn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,fc(r,a.precedence,e));return n.instance}function fc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,x=0;x<r.length;x++){var A=r[x];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function hd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function pd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var dc=null;function Xg(e,n,a){if(dc===null){var r=new Map,u=dc=new Map;u.set(a,r)}else u=dc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ss]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var A=r.get(x);A?A.push(f):r.set(x,[f])}}return r}function Wg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ey(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function qg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ny(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_r(r.href),f=n.querySelector(Oo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=hc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Y(f);return}f=n.ownerDocument||n,r=Vg(r),(u=mi.get(u))&&hd(r,u),f=f.createElement("link"),Y(f);var x=f;x._p=new Promise(function(A,V){x.onload=A,x.onerror=V}),bn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=hc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var md=0;function iy(e,n){return e.stylesheets&&e.count===0&&mc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&mc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&md===0&&(md=62500*zS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&mc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>md?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pc=null;function mc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pc=new Map,n.forEach(ay,e),pc=null,hc.call(e))}function ay(e,n){if(!(n.state.loading&4)){var a=pc.get(e);if(a)var r=a.get(null);else{a=new Map,pc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,u),a.set(x,u),this.count++,r=hc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Fo={$$typeof:L,Provider:null,Consumer:null,_currentValue:rt,_currentValue2:rt,_threadCount:0};function sy(e,n,a,r,u,f,x,A,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ue(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ue(0),this.hiddenUpdates=Ue(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function jg(e,n,a,r,u,f,x,A,V,ot,vt,Mt){return e=new sy(e,n,a,x,V,ot,vt,Mt,A),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),e.current=f,f.stateNode=e,n=ju(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Qu(f),e}function Yg(e){return e?(e=Zs,e):Zs}function Zg(e,n,a,r,u,f){u=Yg(u),r.context===null?r.context=u:r.pendingContext=u,r=Na(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=La(e,r,n),a!==null&&(qn(a,e,n),po(a,e,n))}function Kg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function gd(e,n){Kg(e,n),(e=e.alternate)&&Kg(e,n)}function Qg(e){if(e.tag===13||e.tag===31){var n=us(e,67108864);n!==null&&qn(n,e,67108864),gd(e,67108864)}}function Jg(e){if(e.tag===13||e.tag===31){var n=ni();n=Is(n);var a=us(e,n);a!==null&&qn(a,e,n),gd(e,n)}}var gc=!0;function ry(e,n,a,r){var u=O.T;O.T=null;var f=B.p;try{B.p=2,_d(e,n,a,r)}finally{B.p=f,O.T=u}}function oy(e,n,a,r){var u=O.T;O.T=null;var f=B.p;try{B.p=8,_d(e,n,a,r)}finally{B.p=f,O.T=u}}function _d(e,n,a,r){if(gc){var u=vd(r);if(u===null)id(e,n,r,_c,a),t_(e,r);else if(cy(u,e,n,a,r))r.stopPropagation();else if(t_(e,r),n&4&&-1<ly.indexOf(e)){for(;u!==null;){var f=Ta(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=wt(f.pendingLanes);if(x!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var V=1<<31-zt(x);A.entanglements[1]|=V,x&=~V}Oi(f),(ze&6)===0&&($l=E()+500,Do(0))}}break;case 31:case 13:A=us(f,2),A!==null&&qn(A,f,2),ec(),gd(f,2)}if(f=vd(r),f===null&&id(e,n,r,_c,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else id(e,n,r,null,a)}}function vd(e){return e=xu(e),xd(e)}var _c=null;function xd(e){if(_c=null,e=ba(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return _c=e,null}function $g(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case _t:return 2;case bt:return 8;case pt:case Ft:return 32;case Nt:return 268435456;default:return 32}default:return 32}}var Sd=!1,Xa=null,Wa=null,qa=null,zo=new Map,Bo=new Map,ja=[],ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t_(e,n){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function Io(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ta(n),n!==null&&Qg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function cy(e,n,a,r,u){switch(n){case"focusin":return Xa=Io(Xa,e,n,a,r,u),!0;case"dragenter":return Wa=Io(Wa,e,n,a,r,u),!0;case"mouseover":return qa=Io(qa,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return zo.set(f,Io(zo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Bo.set(f,Io(Bo.get(f)||null,e,n,a,r,u)),!0}return!1}function e_(e){var n=ba(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Gs(e.priority,function(){Jg(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Gs(e.priority,function(){Jg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=vd(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);vu=r,a.target.dispatchEvent(r),vu=null}else return n=Ta(a),n!==null&&Qg(n),e.blockedOn=a,!1;n.shift()}return!0}function n_(e,n,a){vc(e)&&a.delete(n)}function uy(){Sd=!1,Xa!==null&&vc(Xa)&&(Xa=null),Wa!==null&&vc(Wa)&&(Wa=null),qa!==null&&vc(qa)&&(qa=null),zo.forEach(n_),Bo.forEach(n_)}function xc(e,n){e.blockedOn===n&&(e.blockedOn=null,Sd||(Sd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,uy)))}var Sc=null;function i_(e){Sc!==e&&(Sc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Sc===e&&(Sc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(xd(r||a)===null)continue;break}var f=Ta(a);f!==null&&(e.splice(n,3),n-=3,vf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function xr(e){function n(V){return xc(V,e)}Xa!==null&&xc(Xa,e),Wa!==null&&xc(Wa,e),qa!==null&&xc(qa,e),zo.forEach(n),Bo.forEach(n);for(var a=0;a<ja.length;a++){var r=ja[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)e_(a),a.blockedOn===null&&ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],x=u[pn]||null;if(typeof f=="function")x||i_(a);else if(x){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[pn]||null)A=x.formAction;else if(xd(u)!==null)continue}else A=x.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),i_(a)}}}function a_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function yd(e){this._internalRoot=e}yc.prototype.render=yd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ni();Zg(a,r,e,n,null,null)},yc.prototype.unmount=yd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Zg(e.current,2,null,e,null,null),ec(),n[ji]=null}};function yc(e){this._internalRoot=e}yc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Di();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ja.length&&n!==0&&n<ja[a].priority;a++);ja.splice(a,0,e),a===0&&e_(e)}};var s_=t.version;if(s_!=="19.2.4")throw Error(s(527,s_,"19.2.4"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var fy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{Rt=Mc.inject(fy),Ct=Mc}catch{}}return Go.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=d0,f=h0,x=p0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=jg(e,1,!1,null,null,a,r,null,u,f,x,a_),e[ji]=n.current,nd(e),new yd(n)},Go.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=d0,x=h0,A=p0,V=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=jg(e,1,!0,n,a??null,r,u,V,f,x,A,a_),n.context=Yg(null),a=n.current,r=ni(),r=Is(r),u=Na(r),u.callback=null,La(a,u,r),a=r,n.current.lanes=a,On(n,a),Oi(n),e[ji]=n.current,nd(e),new yc(n)},Go.version="19.2.4",Go}var m_;function My(){if(m_)return bd.exports;m_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),bd.exports=yy(),bd.exports}var Ey=My();const by=Av(Ey),Cd=16,Ty=250,Ay=500;function Ry(o=4){const[t,i]=St.useState(!1),[s,l]=St.useState(0),[c,d]=St.useState(0),[p,m]=St.useState(!1),[h,v]=St.useState(0),[y,g]=St.useState(null),M=St.useRef(null),b=St.useRef(null),w=St.useRef(null),S=St.useRef(null),_=St.useRef(0),R=St.useRef(0),L=St.useRef([]),D=St.useRef(!1),I=St.useRef(0),F=St.useRef(0),z=St.useRef(0),T=Ty*o;z.current=T,(!S.current||S.current[0].length!==T)&&(S.current=Array.from({length:Cd},()=>new Float32Array(T)),_.current=0,R.current=0),St.useEffect(()=>(p?(M.current=Date.now(),v(0),clearInterval(b.current),b.current=setInterval(()=>{v(Math.floor((Date.now()-M.current)/1e3))},500)):(clearInterval(b.current),M.current=null),()=>clearInterval(b.current)),[p]);const U=St.useCallback(H=>{D.current=H},[]),mt=St.useCallback(H=>{const j=w.current;j&&j.readyState===WebSocket.OPEN&&j.send(JSON.stringify(H))},[]);return St.useEffect(()=>{const H=location.hostname||"localhost",j=parseInt(location.port||"1617")-1,et=`${location.protocol==="https:"?"wss":"ws"}://${H}:${j}`,$="/auth/ws-token";async function O(){try{const rt=await fetch($,{credentials:"include"});return rt.ok&&(await rt.json()).token||null}catch{return null}}async function B(){const rt=await O(),ht=rt?`${et}?token=${encodeURIComponent(rt)}`:et,Tt=new WebSocket(ht);w.current=Tt,Tt.onopen=()=>i(!0),Tt.onclose=()=>{i(!1),setTimeout(B,2e3)},Tt.onerror=()=>Tt.close(),Tt.onmessage=P=>{const Z=JSON.parse(P.data);if(Z.record_status){const Xt=Z.record_status;if(m(Xt.recording),Xt.stopped){const Zt=location.port||"1617";g({filename:Xt.stopped.filename,frames:Xt.stopped.frames,duration:Xt.stopped.duration,path:Xt.stopped.path,downloadUrl:`${location.protocol}//${location.hostname}:${Zt}/recordings/${Xt.stopped.filename}`})}}if(Z.status||D.current)return;const at=Z.channels;if(!at||at.length!==Cd)return;const Et=S.current,At=z.current,J=_.current;for(let Xt=0;Xt<Cd;Xt++)Et[Xt][J]=at[Xt];_.current=(J+1)%At,R.current<At&&R.current++,I.current++;const G=Z.t,ut=L.current;ut.push(G);const yt=G-2;let Dt=0;for(;Dt<ut.length&&ut[Dt]<yt;)Dt++;Dt>0&&ut.splice(0,Dt);const Pt=performance.now();if(Pt-F.current>Ay&&(F.current=Pt,l(I.current),ut.length>1)){const Xt=ut[ut.length-1]-ut[0];Xt>0&&d(Math.round((ut.length-1)/Xt))}}}return B(),()=>{const rt=w.current;rt&&rt.close()}},[]),{connected:t,sampleCount:s,hz:c,recording:p,recordElapsed:h,recordResult:y,dismissRecordResult:()=>g(null),buffers:S,writeIndex:_,samplesInBuffer:R,bufferSize:T,setPaused:U,sendCommand:mt}}function wd({children:o}){const[t,i]=St.useState("checking"),[s,l]=St.useState(""),[c,d]=St.useState("");St.useEffect(()=>{(async()=>{try{const h=await fetch("/auth/status",{credentials:"include"});if(!h.ok){i("login");return}const v=await h.json();i(v.authenticated?"ok":"login")}catch(h){console.error("Auth check error:",h),i("login")}})()},[]);async function p(m){m.preventDefault(),d("");try{const v=await(await fetch("/auth",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({code:s})})).json();v.ok?i("ok"):(d(v.error||"Invalid code"),l(""))}catch{d("Server unreachable")}}return t==="checking"?null:t==="ok"?o:W.jsx("div",{className:"auth-overlay",children:W.jsxs("div",{className:"auth-card",children:[W.jsxs("h1",{children:["Pi",W.jsx("span",{children:"EEG"}),"-16"]}),W.jsx("p",{className:"auth-sub",children:"Enter the access code displayed in the server console"}),W.jsxs("form",{onSubmit:p,children:[W.jsx("input",{className:"auth-input",type:"text",maxLength:6,pattern:"[0-9]{6}",autoComplete:"off",autoFocus:!0,required:!0,placeholder:"------",value:s,onChange:m=>l(m.target.value.replace(/\D/g,""))}),W.jsx("br",{}),W.jsx("button",{className:"auth-btn",type:"submit",children:"Connect"}),c&&W.jsx("p",{className:"auth-error",children:c})]})]})})}const Cy="rgba(48,54,61,0.4)",wy="rgba(88,166,255,0.15)",Dy=["#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2","#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2"];function Uy(o,t,i,s,l,c,d,p,m){o.clearRect(0,0,t,i),o.strokeStyle=Cy,o.lineWidth=.5;const h=i/4;for(let I=h;I<i;I+=h)o.beginPath(),o.moveTo(0,I),o.lineTo(t,I),o.stroke();o.strokeStyle=wy,o.lineWidth=1;const v=i/2;if(o.beginPath(),o.moveTo(0,v),o.lineTo(t,v),o.stroke(),l<2)return;const y=l>2e3?Math.floor(l/2e3):1,g=i/2,M=t/(d-1),b=g/p;o.beginPath();let w=0;for(let I=0;I<l;I+=y){const F=(c-l+I+d)%d,z=I*M,T=v-s[F]*b;I===0?(o.moveTo(z,T),w=z):o.lineTo(z,T)}const _=(l-1)*M;o.lineTo(_,i),o.lineTo(w,i),o.closePath();const R=o.createLinearGradient(0,v-g*.5,0,i);R.addColorStop(0,m+"18"),R.addColorStop(1,m+"00"),o.fillStyle=R,o.fill(),o.strokeStyle=m,o.lineWidth=1.3,o.lineJoin="round",o.lineCap="round",o.beginPath();for(let I=0;I<l;I+=y){const F=(c-l+I+d)%d,z=I*M,T=v-s[F]*b;I===0?o.moveTo(z,T):o.lineTo(z,T)}o.stroke();let L=0;const D=Math.min(l,250);for(let I=l-D;I<l;I++){const F=(c-l+I+d)%d;L+=s[F]*s[F]}return Math.sqrt(L/D)}const g_=St.memo(function({chIdx:t,eeg:i,yRange:s,expanded:l,onToggleExpand:c}){const d=St.useRef(null),p=St.useRef(0),m=St.useRef(0),h=St.useRef(null),v=St.useRef(window.devicePixelRatio||1),y=St.useRef({w:0,h:0,pw:0,ph:0});return St.useEffect(()=>{const g=d.current;if(!g)return;const M=g.getContext("2d",{alpha:!1}),b=()=>{const w=v.current,S=g.getBoundingClientRect(),_=S.width,R=S.height,L=Math.round(_*w),D=Math.round(R*w);(y.current.pw!==L||y.current.ph!==D)&&(y.current={w:_,h:R,pw:L,ph:D},g.width=L,g.height=D,M.setTransform(w,0,0,w,0,0)),M.fillStyle="#0d1117",M.fillRect(0,0,_,R);const I=Uy(M,_,R,i.buffers.current[t],i.samplesInBuffer.current,i.writeIndex.current,i.bufferSize,s,Dy[t]);if(I!==void 0&&(m.current=I,h.current)){const F=I/s;let z;F>.8?z="#f85149":F>.4?z="#d29922":z="#3fb950",h.current.style.borderLeftColor=z}p.current=requestAnimationFrame(b)};return p.current=requestAnimationFrame(b),()=>cancelAnimationFrame(p.current)},[t,i,s]),W.jsxs("div",{className:`channel-cell${l?" expanded":""}`,onClick:c,children:[W.jsxs("div",{className:"channel-label",ref:h,children:["Ch ",t+1]}),W.jsx("canvas",{ref:d,style:{display:"block",width:"100%",height:"100%"}})]})}),{PI:Ny,cos:__,sin:Ly}=Math,v_=2*Ny,Ir=[{name:"Delta",label:"δ Delta",low:.5,high:4,color:"#8b5cf6"},{name:"Theta",label:"θ Theta",low:4,high:8,color:"#06b6d4"},{name:"Alpha",label:"α Alpha",low:8,high:13,color:"#22c55e"},{name:"Beta",label:"β Beta",low:13,high:30,color:"#f59e0b"},{name:"Gamma",label:"γ Gamma",low:30,high:100,color:"#ef4444"}];class ou{constructor(t,i){if(t<=0||(t&t-1)!==0)throw new Error("n must be a power of 2");this.n=t,this.sampleRateHz=i,this._precompute()}_precompute(){const{n:t,sampleRateHz:i}=this;this._window=new Float64Array(t);for(let p=0;p<t;p++)this._window[p]=.5*(1-__(v_*p/(t-1)));const s=(t>>1)+1;this._frequencies=new Float64Array(s),this._df=i/t;for(let p=0;p<s;p++)this._frequencies[p]=p*this._df;const l=ou._log2(t);this._bitReversed=new Int32Array(t);for(let p=0;p<t;p++)this._bitReversed[p]=ou._reverseBits(p,l);const c=t>>1;this._twRe=new Float64Array(c),this._twIm=new Float64Array(c);for(let p=0;p<c;p++){const m=-v_*p/t;this._twRe[p]=__(m),this._twIm[p]=Ly(m)}let d=0;for(let p=0;p<t;p++)d+=this._window[p]*this._window[p];this._norm=2/(i*d)}analyse(t,i){const{n:s,_window:l,_frequencies:c,_df:d,_norm:p}=this;if(i===void 0&&(i=t.length-s),i<0||t.length-i<s)return null;const m=new Float64Array(s),h=new Float64Array(s);for(let S=0;S<s;S++)m[S]=t[i+S]*l[S];this._fft(m,h);const v=(s>>1)+1,y=new Float64Array(v);let g=0,M=0,b=0;for(let S=0;S<v;S++){const _=m[S]*m[S]+h[S]*h[S],R=S===0||S===v-1?.5:1;y[S]=_*p*R,M+=y[S]*d,y[S]>g&&(g=y[S],b=S)}const w={};for(const S of Ir){let _=0;for(let R=0;R<v;R++)c[R]>=S.low&&c[R]<S.high&&(_+=y[R]*d);w[S.name]=_}return{frequencies:c,psd:y,bandPowers:w,dominantFrequency:c[b],totalPower:M}}analyseRing(t,i,s){const{n:l}=this;if(s<l)return null;const c=t.length,d=new Float64Array(l),p=(i-l+c)%c;for(let m=0;m<l;m++)d[m]=t[(p+m)%c];return this.analyse(d,0)}_fft(t,i){const{n:s,_bitReversed:l,_twRe:c,_twIm:d}=this;for(let p=0;p<s;p++){const m=l[p];if(m>p){let h=t[p];t[p]=t[m],t[m]=h,h=i[p],i[p]=i[m],i[m]=h}}for(let p=2;p<=s;p*=2){const m=p>>1,h=s/p;for(let v=0;v<s;v+=p)for(let y=0;y<m;y++){const g=y*h,M=c[g],b=d[g],w=v+y,S=w+m,_=M*t[S]-b*i[S],R=M*i[S]+b*t[S];t[S]=t[w]-_,i[S]=i[w]-R,t[w]+=_,i[w]+=R}}}static _log2(t){let i=0,s=t;for(;s>1;)s>>=1,i++;return i}static _reverseBits(t,i){let s=0,l=t;for(let c=0;c<i;c++)s=s<<1|l&1,l>>=1;return s}}const Dd=16,Es=256,Ud=250,Oy=60,Py=8,x_=.3,Fy=300;function zy(o,t,i,s,l,c,d,p){const h=t-16,v=24,y=i-24,g=h-48,M=y-v,b=l[1],w=Math.min(Math.ceil(c/b),s.length-1);let S=1e-30;for(let _=1;_<=w;_++)s[_]>S&&(S=s[_]);for(const _ of Ir){if(_.low>=c)continue;const R=48+Math.max(_.low,0)/c*g,L=48+Math.min(_.high,c)/c*g,D=p===_.name;o.fillStyle=_.color+(D?"28":"12"),o.fillRect(R,v,L-R,M),o.fillStyle=_.color+(D?"cc":"66"),o.font="9px monospace",o.textAlign="center",o.fillText(_.name,(R+L)/2,v+10)}o.strokeStyle="rgba(48,54,61,0.45)",o.lineWidth=.5;for(let _=1;_<5;_++){const R=v+_/5*M;o.beginPath(),o.moveTo(48,R),o.lineTo(h,R),o.stroke()}for(const _ of[4,8,13,30,50]){if(_>c)continue;const R=48+_/c*g;o.beginPath(),o.moveTo(R,v),o.lineTo(R,y),o.stroke()}o.beginPath();for(let _=1;_<=w;_++){const R=48+l[_]/c*g;let L;if(d){const I=10*Math.log10((s[_]||1e-30)/S);L=Math.max(0,(I+60)/60)}else L=s[_]/S;const D=y-Math.min(1,L)*M;_===1?o.moveTo(R,D):o.lineTo(R,D)}o.strokeStyle="#58a6ff",o.lineWidth=1.5,o.stroke(),o.lineTo(48+l[w]/c*g,y),o.lineTo(48+l[1]/c*g,y),o.closePath(),o.fillStyle="rgba(88,166,255,0.07)",o.fill(),o.fillStyle="#8b949e",o.font="10px monospace",o.textAlign="center";for(let _=0;_<=c;_+=10)o.fillText(`${_}`,48+_/c*g,y+14);if(o.fillText("Hz",h+2,y+14),o.save(),o.translate(11,v+M/2),o.rotate(-Math.PI/2),o.textAlign="center",o.fillText(d?"dB":"µV²/Hz",0,0),o.restore(),o.textAlign="right",o.font="9px monospace",d)for(const _ of[0,-20,-40,-60]){const R=y-(_+60)/60*M;o.fillText(`${_}`,44,R+3)}}const By=St.memo(function({eeg:t}){var H;const i=St.useRef(null),s=St.useRef(0),l=St.useRef(0),c=St.useRef(null),d=St.useRef(0),p=St.useRef(null),m=St.useRef({}),h=St.useRef(window.devicePixelRatio||1),v=St.useRef({w:0,h:0,pw:0,ph:0}),[y,g]=St.useState(0),[M,b]=St.useState(!0),[w,S]=St.useState(!1),[_,R]=St.useState(null),[L,D]=St.useState({}),[I,F]=St.useState({band:"",freq:0}),z=St.useMemo(()=>new ou(Es,Ud),[]);p.current||(p.current=new Float64Array(Es)),St.useEffect(()=>{const j=i.current;if(!j)return;const X=j.getContext("2d",{alpha:!1}),et=()=>{const $=h.current,O=j.getBoundingClientRect(),B=O.width,rt=O.height,ht=Math.round(B*$),Tt=Math.round(rt*$);if((v.current.pw!==ht||v.current.ph!==Tt)&&(v.current={w:B,h:rt,pw:ht,ph:Tt},j.width=ht,j.height=Tt),X.setTransform($,0,0,$,0,0),X.fillStyle="#0d1117",X.fillRect(0,0,B,rt),l.current++,!w&&l.current%Py===0){const Z=t.buffers.current,at=t.writeIndex.current,Et=t.samplesInBuffer.current;if(Z&&Et>=Es){let At;if(y===-1){const J=p.current,G=t.bufferSize,ut=(at-Es+G)%G;for(let yt=0;yt<Es;yt++){let Dt=0;const Pt=(ut+yt)%G;for(let Xt=0;Xt<Dd;Xt++)Dt+=Z[Xt][Pt];J[yt]=Dt/Dd}At=z.analyse(J,0)}else At=z.analyseRing(Z[y],at,Et);if(At){if(!c.current||c.current.length!==At.psd.length)c.current=new Float64Array(At.psd);else{const G=c.current,ut=At.psd;for(let yt=0;yt<G.length;yt++)G[yt]=G[yt]*(1-x_)+ut[yt]*x_}const J=performance.now();if(J-d.current>Fy){d.current=J,m.current=At.bandPowers,D(At.bandPowers);let G="",ut=0;for(const yt of Ir)(At.bandPowers[yt.name]||0)>ut&&(ut=At.bandPowers[yt.name],G=yt.name);F(yt=>yt.band===G&&yt.freq===At.dominantFrequency?yt:{band:G,freq:At.dominantFrequency})}}}}const P=c.current;!P||P.length===0?(X.fillStyle="#4b5563",X.font="13px monospace",X.textAlign="center",X.fillText("Collecting samples…",B/2,rt/2)):zy(X,B,rt,P,z._frequencies,Oy,M,_),s.current=requestAnimationFrame(et)};return s.current=requestAnimationFrame(et),()=>cancelAnimationFrame(s.current)},[t,y,M,w,_,z]);const T=Math.max(...Ir.map(j=>L[j.name]||0),1e-6),U=y===-1?"Avg":`Ch ${y+1}`,mt=((H=Ir.find(j=>j.name===I.band))==null?void 0:H.color)||"#8b949e";return W.jsxs("div",{className:"spectral-panel",children:[W.jsxs("div",{className:"spectral-toolbar",children:[W.jsxs("span",{className:"spectral-title",children:["Spectral Analysis"," ",W.jsxs("small",{style:{color:"var(--text-dim)",fontWeight:400},children:["— ",U]})]}),W.jsxs("div",{className:"spectral-channels",children:[W.jsx("button",{className:`sp-ch${y===-1?" active":""}`,onClick:()=>g(-1),children:"Avg"}),Array.from({length:Dd},(j,X)=>W.jsx("button",{className:`sp-ch${y===X?" active":""}`,onClick:()=>g(X),children:X+1},X))]}),W.jsxs("div",{className:"spectral-ctrls",children:[W.jsx("button",{className:`btn${M?" active":""}`,onClick:()=>b(j=>!j),children:M?"Log":"Lin"}),W.jsx("button",{className:`btn${w?" active":""}`,onClick:()=>S(j=>!j),children:w?"▶":"⏸"})]})]}),W.jsxs("div",{className:"spectral-canvas-wrap",children:[W.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}}),w&&W.jsx("div",{className:"spectral-paused",children:"PAUSED"})]}),W.jsx("div",{className:"spectral-bands",children:Ir.map(j=>{const X=L[j.name]||0,et=T>0?X/T*100:0,$=_===j.name;return W.jsxs("div",{className:`sp-band${$?" selected":""}`,onClick:()=>R($?null:j.name),children:[W.jsxs("div",{className:"sp-band-head",children:[W.jsx("span",{className:"sp-band-dot",style:{background:j.color}}),W.jsx("span",{className:"sp-band-name",style:{color:j.color},children:j.label}),W.jsxs("span",{className:"sp-band-hz",children:[j.low,"–",j.high," Hz"]})]}),W.jsx("div",{className:"sp-band-track",children:W.jsx("div",{className:"sp-band-fill",style:{width:`${et}%`,background:j.color}})}),W.jsx("span",{className:"sp-band-val",children:X<.01?X.toExponential(1):X.toFixed(2)})]},j.name)})}),W.jsxs("div",{className:"spectral-footer",children:[W.jsxs("span",{children:["Dominant:"," ",W.jsx("strong",{style:{color:mt},children:I.band})," ","(",I.freq.toFixed(1)," Hz)"]}),W.jsxs("span",{children:[Es," pt · ",Ud," Hz ·"," ",(Ud/Es).toFixed(1)," Hz/bin"]})]})]})}),Iy=St.memo(function(){const[t,i]=St.useState(!1),[s,l]=St.useState(0),[c,d]=St.useState(0),[p,m]=St.useState(0),h=St.useRef(0),v=St.useRef(performance.now()),y=St.useRef(0);return St.useEffect(()=>{const g=M=>{(M.key==="p"||M.key==="P")&&i(b=>!b)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[]),St.useEffect(()=>{if(!t)return;const g=()=>{h.current++;const M=performance.now(),b=M-v.current;b>=1e3&&(l(Math.round(h.current*(1e3/b))),d(Math.round(b/h.current*100)/100),performance.memory&&m(Math.round(performance.memory.usedJSHeapSize/1048576)),h.current=0,v.current=M),y.current=requestAnimationFrame(g)};return y.current=requestAnimationFrame(g),()=>cancelAnimationFrame(y.current)},[t]),t?W.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.8)",color:"#0f0",fontFamily:"monospace",fontSize:"12px",padding:"8px 12px",borderRadius:"4px",zIndex:1e4,border:"1px solid #0f0",userSelect:"none"},children:[W.jsxs("div",{children:["FPS: ",s]}),W.jsxs("div",{children:["Frame: ",c,"ms"]}),W.jsxs("div",{children:["Memory: ",p,"MB"]}),W.jsx("div",{style:{marginTop:"4px",fontSize:"10px",opacity:.7},children:"Press P to toggle"})]}):null});function Hy({onSelect:o,onBack:t}){const[i,s]=St.useState([]),[l,c]=St.useState(!0);St.useEffect(()=>{d()},[]);async function d(){try{const v=await(await fetch("/api/recordings")).json();s(v.recordings||[])}catch(h){console.error("Failed to load recordings:",h)}finally{c(!1)}}function p(h){return new Date(h*1e3).toLocaleString()}function m(h){return h<1024?`${h} B`:h<1024*1024?`${(h/1024).toFixed(1)} KB`:`${(h/1024/1024).toFixed(1)} MB`}return W.jsxs("div",{className:"session-list",children:[W.jsxs("header",{className:"session-header",children:[W.jsx("h2",{children:"Saved Sessions"}),W.jsx("button",{className:"btn btn-back",onClick:t,children:"← Back to Live"})]}),l&&W.jsx("div",{className:"list-loading",children:W.jsx("p",{children:"Loading recordings..."})}),!l&&i.length===0&&W.jsx("div",{className:"list-empty",children:W.jsx("p",{children:"No recordings yet. Record a session on the Live tab."})}),!l&&i.length>0&&W.jsx("div",{className:"list-container",children:W.jsxs("table",{className:"recordings-table",children:[W.jsx("thead",{children:W.jsxs("tr",{children:[W.jsx("th",{children:"Filename"}),W.jsx("th",{children:"Size"}),W.jsx("th",{children:"Date & Time"}),W.jsx("th",{children:"Action"})]})}),W.jsx("tbody",{children:i.map(h=>W.jsxs("tr",{children:[W.jsx("td",{className:"filename",children:h.filename}),W.jsx("td",{className:"size",children:m(h.size)}),W.jsx("td",{className:"mtime",children:p(h.mtime)}),W.jsx("td",{className:"action",children:W.jsx("button",{className:"btn btn-open",onClick:()=>o(h.filename),children:"Open"})})]},h.filename))})]})}),W.jsx("style",{children:`
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
      `})]})}const Ec=16,bs=250,Gy=["#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2","#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2"],Vy="rgba(48,54,61,0.4)",ky="rgba(88,166,255,0.12)",Xy="rgba(88,166,255,0.6)",Wy="#0d1117",qy=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],jy=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"}];function Yy({filename:o,onBack:t}){const[i,s]=St.useState(!0),[l,c]=St.useState(null),[d,p]=St.useState(!1),[m,h]=St.useState(0),[v,y]=St.useState(1),[g,M]=St.useState(100),[b,w]=St.useState(4),[S,_]=St.useState([]),[R,L]=St.useState(""),[D,I]=St.useState(!1),F=St.useRef(null),z=St.useRef(0),T=St.useRef(0),U=St.useRef(null),mt=St.useRef(0),H=St.useRef(0),j=St.useRef(!1),X=St.useRef(1),et=St.useRef(100),$=St.useRef(4),O=St.useRef(window.devicePixelRatio||1),B=St.useRef({w:0,h:0});j.current=d,X.current=v,et.current=g,$.current=b,T.current=m;const rt=z.current,ht=rt/bs,Tt=m/bs;St.useEffect(()=>{let G=!1;async function ut(){s(!0),c(null);try{const yt=await fetch(`/api/recordings/data/${encodeURIComponent(o)}`);if(!yt.ok)throw new Error(`HTTP ${yt.status}`);const Dt=await yt.json();if(Dt.error)throw new Error(Dt.error);const Xt=(Dt.data||[]).slice(1),Zt=Xt.length;if(Zt===0)throw new Error("Empty recording");const qt=Array.from({length:Ec},()=>new Float32Array(Zt));for(let re=0;re<Zt;re++){const jt=Xt[re].split(",");for(let he=0;he<Ec;he++)qt[he][re]=parseFloat(jt[he+1])||0}G||(F.current=qt,z.current=Zt,h(0),s(!1))}catch(yt){G||(c(yt.message),s(!1))}}return ut(),()=>{G=!0}},[o]),St.useEffect(()=>{fetch(`/api/recordings/annotations/${encodeURIComponent(o)}`).then(G=>G.json()).then(G=>_(G.annotations||[])).catch(()=>{})},[o]),St.useEffect(()=>{const G=U.current;if(!G||i||l)return;const ut=G.getContext("2d",{alpha:!1}),yt=Dt=>{if(j.current&&H.current>0){const k=(Dt-H.current)/1e3*bs*X.current;let Te=T.current+k;Te>=z.current&&(Te=z.current-1,p(!1)),T.current=Te,h(Te)}H.current=Dt;const Pt=O.current,Xt=G.getBoundingClientRect(),Zt=Xt.width,qt=Xt.height,re=Math.round(Zt*Pt),jt=Math.round(qt*Pt);(B.current.w!==re||B.current.h!==jt)&&(B.current={w:re,h:jt},G.width=re,G.height=jt,ut.setTransform(Pt,0,0,Pt,0,0)),P(ut,Zt,qt),mt.current=requestAnimationFrame(yt)};return H.current=0,mt.current=requestAnimationFrame(yt),()=>cancelAnimationFrame(mt.current)},[i,l]);function P(G,ut,yt){const Dt=F.current;if(!Dt)return;G.fillStyle=Wy,G.fillRect(0,0,ut,yt);const Pt=z.current,Xt=T.current,Zt=$.current*bs,qt=et.current,re=Math.floor(Zt/2);let jt=Math.floor(Xt)-re,he=jt+Zt;jt<0&&(jt=0,he=Zt),he>Pt&&(he=Pt,jt=Math.max(0,Pt-Zt));const k=yt/Ec;for(let N=0;N<Ec;N++){const E=N*k,Q=E+k/2,_t=k/2;N>0&&(G.strokeStyle=Vy,G.lineWidth=.5,G.beginPath(),G.moveTo(0,E),G.lineTo(ut,E),G.stroke()),G.strokeStyle=ky,G.lineWidth=.5,G.beginPath(),G.moveTo(0,Q),G.lineTo(ut,Q),G.stroke(),G.fillStyle="rgba(230,237,243,0.4)",G.font="10px monospace",G.fillText(`Ch ${N+1}`,4,E+12);const bt=Dt[N],pt=he-jt;if(pt<2)continue;const Ft=pt>2e3?Math.floor(pt/2e3):1,Nt=ut/(pt-1),ee=_t*.85/qt;G.strokeStyle=Gy[N],G.lineWidth=1.2,G.lineJoin="round",G.beginPath();for(let ne=0;ne<pt;ne+=Ft){const Rt=ne*Nt,Ct=Q-bt[jt+ne]*ee;ne===0?G.moveTo(Rt,Ct):G.lineTo(Rt,Ct)}G.stroke()}const Te=Math.floor(Xt)>=jt&&Math.floor(Xt)<=he?(Math.floor(Xt)-jt)/(he-jt)*ut:ut/2;G.strokeStyle=Xy,G.lineWidth=1.5,G.setLineDash([4,3]),G.beginPath(),G.moveTo(Te,0),G.lineTo(Te,yt),G.stroke(),G.setLineDash([]),G.fillStyle="rgba(230,237,243,0.3)",G.font="10px monospace";const me=jt/bs,Ae=he/bs,kt=Math.min(10,Math.floor(ut/80));for(let N=0;N<=kt;N++){const E=me+(Ae-me)*(N/kt),Q=N/kt*ut;G.fillText(J(E),Q+2,yt-4)}}const Z=St.useCallback(async G=>{try{await fetch(`/api/recordings/annotations/${encodeURIComponent(o)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({annotations:G})})}catch{}},[o]);function at(){if(!R.trim())return;const G=Math.floor(m)/bs,ut={id:Date.now(),frame:Math.floor(m),time:G,text:R,timestamp:new Date().toISOString()},yt=[...S,ut];_(yt),Z(yt),L(""),I(!1)}function Et(G){const ut=S.filter(yt=>yt.id!==G);_(ut),Z(ut)}function At(G){h(G.frame),T.current=G.frame,p(!1)}function J(G){const ut=Math.floor(G/60),yt=Math.floor(G%60),Dt=Math.floor(G%1*100);return`${String(ut).padStart(2,"0")}:${String(yt).padStart(2,"0")}.${String(Dt).padStart(2,"0")}`}return i?W.jsxs("div",{className:"sv-root sv-center",children:[W.jsx("p",{children:"Loading recording..."}),W.jsx("style",{children:Nd})]}):l?W.jsxs("div",{className:"sv-root sv-center",children:[W.jsxs("p",{children:["Error: ",l]}),W.jsx("button",{className:"sv-btn",onClick:t,children:"Back"}),W.jsx("style",{children:Nd})]}):W.jsxs("div",{className:"sv-root",children:[W.jsxs("header",{className:"sv-header",children:[W.jsxs("div",{className:"sv-title",children:[W.jsx("button",{className:"sv-btn",onClick:t,children:"← Back"}),W.jsx("h2",{children:o}),W.jsxs("span",{className:"sv-meta",children:[rt.toLocaleString()," frames · ",J(ht)]})]}),W.jsxs("div",{className:"sv-controls",children:[W.jsx("button",{className:`sv-btn${d?" active":""}`,onClick:()=>{d||(H.current=0),p(!d)},children:d?"⏸ Pause":"▶ Play"}),W.jsx("button",{className:"sv-btn",onClick:()=>{h(0),T.current=0,p(!1)},children:"⏮ Rewind"}),W.jsxs("select",{value:v,onChange:G=>y(parseFloat(G.target.value)),className:"sv-select",children:[W.jsx("option",{value:.25,children:"0.25x"}),W.jsx("option",{value:.5,children:"0.5x"}),W.jsx("option",{value:1,children:"1x"}),W.jsx("option",{value:1.5,children:"1.5x"}),W.jsx("option",{value:2,children:"2x"}),W.jsx("option",{value:4,children:"4x"})]}),W.jsx("div",{className:"sv-sep"}),W.jsx("label",{className:"sv-label",children:"Window"}),W.jsx("select",{value:b,onChange:G=>w(parseInt(G.target.value)),className:"sv-select",children:jy.map(G=>W.jsx("option",{value:G.value,children:G.label},G.value))}),W.jsx("label",{className:"sv-label",children:"Scale"}),W.jsx("select",{value:g,onChange:G=>M(parseInt(G.target.value)),className:"sv-select",children:qy.map(G=>W.jsx("option",{value:G.value,children:G.label},G.value))})]})]}),W.jsxs("div",{className:"sv-timeline",children:[W.jsx("span",{className:"sv-time",children:J(Tt)}),W.jsx("input",{type:"range",min:"0",max:rt-1,value:Math.floor(m),onChange:G=>{const ut=parseInt(G.target.value);h(ut),T.current=ut,p(!1),H.current=0},className:"sv-slider"}),W.jsx("span",{className:"sv-time",children:J(ht)})]}),W.jsxs("div",{className:"sv-content",children:[W.jsx("div",{className:"sv-canvas-wrap",children:W.jsx("canvas",{ref:U,style:{display:"block",width:"100%",height:"100%"}})}),W.jsxs("div",{className:"sv-annotations",children:[W.jsxs("div",{className:"sv-anno-header",children:[W.jsx("h3",{children:"Annotations"}),W.jsx("button",{className:"sv-btn sv-btn-sm",onClick:()=>I(!D),children:D?"Cancel":"+ Add"})]}),D&&W.jsxs("div",{className:"sv-anno-form",children:[W.jsx("textarea",{value:R,onChange:G=>L(G.target.value),placeholder:"Annotation at current position...",onKeyDown:G=>{G.key==="Enter"&&G.ctrlKey&&at()}}),W.jsx("button",{className:"sv-btn sv-btn-primary",onClick:at,children:"Add"})]}),W.jsx("div",{className:"sv-anno-list",children:S.length===0?W.jsx("p",{className:"sv-anno-empty",children:"No annotations"}):S.map(G=>W.jsxs("div",{className:"sv-anno-item",onClick:()=>At(G),children:[W.jsx("span",{className:"sv-anno-time",children:J(G.time)}),W.jsx("span",{className:"sv-anno-text",children:G.text}),W.jsx("button",{className:"sv-anno-del",onClick:ut=>{ut.stopPropagation(),Et(G.id)},children:"✕"})]},G.id))})]})]}),W.jsx("style",{children:Nd})]})}const Nd=`
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
 */const dp="183",Zy=0,S_=1,Ky=2,eu=1,Qy=2,tl=3,as=0,jn=1,Bi=2,va=0,Hr=1,y_=2,M_=3,E_=4,Jy=5,Ns=100,$y=101,tM=102,eM=103,nM=104,iM=200,aM=201,sM=202,rM=203,gh=204,_h=205,oM=206,lM=207,cM=208,uM=209,fM=210,dM=211,hM=212,pM=213,mM=214,vh=0,xh=1,Sh=2,Vr=3,yh=4,Mh=5,Eh=6,bh=7,Rv=0,gM=1,_M=2,Vi=0,Cv=1,wv=2,Dv=3,hp=4,Uv=5,Nv=6,Lv=7,Ov=300,Fs=301,kr=302,Ld=303,Od=304,mu=306,Th=1e3,_a=1001,Ah=1002,Tn=1003,vM=1004,bc=1005,Un=1006,Pd=1007,Os=1008,ri=1009,Pv=1010,Fv=1011,nl=1012,pp=1013,Xi=1014,Hi=1015,Sa=1016,mp=1017,gp=1018,il=1020,zv=35902,Bv=35899,Iv=1021,Hv=1022,wi=1023,ya=1026,Ps=1027,Gv=1028,_p=1029,Xr=1030,vp=1031,xp=1033,nu=33776,iu=33777,au=33778,su=33779,Rh=35840,Ch=35841,wh=35842,Dh=35843,Uh=36196,Nh=37492,Lh=37496,Oh=37488,Ph=37489,Fh=37490,zh=37491,Bh=37808,Ih=37809,Hh=37810,Gh=37811,Vh=37812,kh=37813,Xh=37814,Wh=37815,qh=37816,jh=37817,Yh=37818,Zh=37819,Kh=37820,Qh=37821,Jh=36492,$h=36494,tp=36495,ep=36283,np=36284,ip=36285,ap=36286,xM=3200,SM=0,yM=1,es="",_i="srgb",Wr="srgb-linear",lu="linear",Ve="srgb",Sr=7680,b_=519,MM=512,EM=513,bM=514,Sp=515,TM=516,AM=517,yp=518,RM=519,sp=35044,T_="300 es",Gi=2e3,al=2001;function CM(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function cu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function wM(){const o=cu("canvas");return o.style.display="block",o}const A_={};function uu(...o){const t="THREE."+o.shift();console.log(t,...o)}function Vv(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function le(...o){o=Vv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Ne(...o){o=Vv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function fu(...o){const t=o.join(" ");t in A_||(A_[t]=!0,le(...o))}function DM(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const UM={[vh]:xh,[Sh]:Eh,[yh]:bh,[Vr]:Mh,[xh]:vh,[Eh]:Sh,[bh]:yh,[Mh]:Vr};class jr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fd=Math.PI/180,rp=180/Math.PI;function is(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function De(o,t,i){return Math.max(t,Math.min(i,o))}function NM(o,t){return(o%t+t)%t}function zd(o,t,i){return(1-i)*o+i*t}function Ii(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function qe(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class be{constructor(t=0,i=0){be.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],v=s[l+2],y=s[l+3],g=c[d+0],M=c[d+1],b=c[d+2],w=c[d+3];if(y!==w||m!==g||h!==M||v!==b){let S=m*g+h*M+v*b+y*w;S<0&&(g=-g,M=-M,b=-b,w=-w,S=-S);let _=1-p;if(S<.9995){const R=Math.acos(S),L=Math.sin(R);_=Math.sin(_*R)/L,p=Math.sin(p*R)/L,m=m*_+g*p,h=h*_+M*p,v=v*_+b*p,y=y*_+w*p}else{m=m*_+g*p,h=h*_+M*p,v=v*_+b*p,y=y*_+w*p;const R=1/Math.sqrt(m*m+h*h+v*v+y*y);m*=R,h*=R,v*=R,y*=R}}t[i]=m,t[i+1]=h,t[i+2]=v,t[i+3]=y}static multiplyQuaternionsFlat(t,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],v=s[l+3],y=c[d],g=c[d+1],M=c[d+2],b=c[d+3];return t[i]=p*b+v*y+m*M-h*g,t[i+1]=m*b+v*g+h*y-p*M,t[i+2]=h*b+v*M+p*g-m*y,t[i+3]=v*b-p*y-m*g-h*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(s/2),v=p(l/2),y=p(c/2),g=m(s/2),M=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=g*v*y+h*M*b,this._y=h*M*y-g*v*b,this._z=h*v*b+g*M*y,this._w=h*v*y-g*M*b;break;case"YXZ":this._x=g*v*y+h*M*b,this._y=h*M*y-g*v*b,this._z=h*v*b-g*M*y,this._w=h*v*y+g*M*b;break;case"ZXY":this._x=g*v*y-h*M*b,this._y=h*M*y+g*v*b,this._z=h*v*b+g*M*y,this._w=h*v*y-g*M*b;break;case"ZYX":this._x=g*v*y-h*M*b,this._y=h*M*y+g*v*b,this._z=h*v*b-g*M*y,this._w=h*v*y+g*M*b;break;case"YZX":this._x=g*v*y+h*M*b,this._y=h*M*y+g*v*b,this._z=h*v*b-g*M*y,this._w=h*v*y-g*M*b;break;case"XZY":this._x=g*v*y-h*M*b,this._y=h*M*y-g*v*b,this._z=h*v*b+g*M*y,this._w=h*v*y+g*M*b;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],v=i[6],y=i[10],g=s+p+y;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-h)*M,this._z=(d-l)*M}else if(s>p&&s>y){const M=2*Math.sqrt(1+s-p-y);this._w=(v-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+h)/M}else if(p>y){const M=2*Math.sqrt(1+p-s-y);this._w=(c-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+y-s-p);this._w=(d-l)/M,this._x=(c+h)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,p=i._x,m=i._y,h=i._z,v=i._w;return this._x=s*v+d*p+l*h-c*m,this._y=l*v+d*m+c*p-s*h,this._z=c*v+d*h+s*m-l*p,this._w=d*v-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,d=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),v=Math.sin(h);m=Math.sin(m*h)/v,i=Math.sin(i*h)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,i=0,s=0){it.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(R_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(R_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*s),v=2*(p*i-c*l),y=2*(c*s-d*i);return this.x=i+m*h+d*y-p*v,this.y=s+m*v+p*h-c*y,this.z=l+m*y+c*v-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Bd.copy(this).projectOnVector(t),this.sub(Bd)}reflect(t){return this.sub(Bd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bd=new it,R_=new Yr;class xe{constructor(t,i,s,l,c,d,p,m,h){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h)}set(t,i,s,l,c,d,p,m,h){const v=this.elements;return v[0]=t,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=d,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],v=s[4],y=s[7],g=s[2],M=s[5],b=s[8],w=l[0],S=l[3],_=l[6],R=l[1],L=l[4],D=l[7],I=l[2],F=l[5],z=l[8];return c[0]=d*w+p*R+m*I,c[3]=d*S+p*L+m*F,c[6]=d*_+p*D+m*z,c[1]=h*w+v*R+y*I,c[4]=h*S+v*L+y*F,c[7]=h*_+v*D+y*z,c[2]=g*w+M*R+b*I,c[5]=g*S+M*L+b*F,c[8]=g*_+M*D+b*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],v=t[8];return i*d*v-i*p*h-s*c*v+s*p*m+l*c*h-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],v=t[8],y=v*d-p*h,g=p*m-v*c,M=h*c-d*m,b=i*y+s*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=y*w,t[1]=(l*h-v*s)*w,t[2]=(p*s-l*d)*w,t[3]=g*w,t[4]=(v*i-l*m)*w,t[5]=(l*c-p*i)*w,t[6]=M*w,t[7]=(s*m-h*i)*w,t[8]=(d*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Id.makeScale(t,i)),this}rotate(t){return this.premultiply(Id.makeRotation(-t)),this}translate(t,i){return this.premultiply(Id.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Id=new xe,C_=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),w_=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LM(){const o={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ve&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ve&&(l.r=Gr(l.r),l.g=Gr(l.g),l.b=Gr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===es?lu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return fu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return fu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Wr]:{primaries:t,whitePoint:s,transfer:lu,toXYZ:C_,fromXYZ:w_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:C_,fromXYZ:w_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),o}const Le=LM();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Gr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let yr;class OM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{yr===void 0&&(yr=cu("canvas")),yr.width=t.width,yr.height=t.height;const l=yr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=yr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=cu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=xa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:t.width,height:t.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let PM=0;class Mp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Hd(l[d].image)):c.push(Hd(l[d]))}else c=Hd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Hd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?OM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let FM=0;const Gd=new it;class Nn extends jr{constructor(t=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,s=_a,l=_a,c=Un,d=Os,p=wi,m=ri,h=Nn.DEFAULT_ANISOTROPY,v=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=is(),this.name="",this.source=new Mp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gd).x}get height(){return this.source.getSize(Gd).y}get depth(){return this.source.getSize(Gd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ov)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Th:t.x=t.x-Math.floor(t.x);break;case _a:t.x=t.x<0?0:1;break;case Ah:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Th:t.y=t.y-Math.floor(t.y);break;case _a:t.y=t.y<0?0:1;break;case Ah:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Ov;Nn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,s=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,h=m[0],v=m[4],y=m[8],g=m[1],M=m[5],b=m[9],w=m[2],S=m[6],_=m[10];if(Math.abs(v-g)<.01&&Math.abs(y-w)<.01&&Math.abs(b-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(y+w)<.1&&Math.abs(b+S)<.1&&Math.abs(h+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(h+1)/2,D=(M+1)/2,I=(_+1)/2,F=(v+g)/4,z=(y+w)/4,T=(b+S)/4;return L>D&&L>I?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=F/s,c=z/s):D>I?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=F/l,c=T/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=z/c,l=T/c),this.set(s,l,c,i),this}let R=Math.sqrt((S-b)*(S-b)+(y-w)*(y-w)+(g-v)*(g-v));return Math.abs(R)<.001&&(R=1),this.x=(S-b)/R,this.y=(y-w)/R,this.z=(g-v)/R,this.w=Math.acos((h+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this.w=De(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this.w=De(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zM extends jr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Nn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Mp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends zM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class kv extends Nn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class BM extends Nn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ke{constructor(t,i,s,l,c,d,p,m,h,v,y,g,M,b,w,S){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h,v,y,g,M,b,w,S)}set(t,i,s,l,c,d,p,m,h,v,y,g,M,b,w,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=d,_[9]=p,_[13]=m,_[2]=h,_[6]=v,_[10]=y,_[14]=g,_[3]=M,_[7]=b,_[11]=w,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Mr.setFromMatrixColumn(t,0).length(),c=1/Mr.setFromMatrixColumn(t,1).length(),d=1/Mr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),v=Math.cos(c),y=Math.sin(c);if(t.order==="XYZ"){const g=d*v,M=d*y,b=p*v,w=p*y;i[0]=m*v,i[4]=-m*y,i[8]=h,i[1]=M+b*h,i[5]=g-w*h,i[9]=-p*m,i[2]=w-g*h,i[6]=b+M*h,i[10]=d*m}else if(t.order==="YXZ"){const g=m*v,M=m*y,b=h*v,w=h*y;i[0]=g+w*p,i[4]=b*p-M,i[8]=d*h,i[1]=d*y,i[5]=d*v,i[9]=-p,i[2]=M*p-b,i[6]=w+g*p,i[10]=d*m}else if(t.order==="ZXY"){const g=m*v,M=m*y,b=h*v,w=h*y;i[0]=g-w*p,i[4]=-d*y,i[8]=b+M*p,i[1]=M+b*p,i[5]=d*v,i[9]=w-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const g=d*v,M=d*y,b=p*v,w=p*y;i[0]=m*v,i[4]=b*h-M,i[8]=g*h+w,i[1]=m*y,i[5]=w*h+g,i[9]=M*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,M=d*h,b=p*m,w=p*h;i[0]=m*v,i[4]=w-g*y,i[8]=b*y+M,i[1]=y,i[5]=d*v,i[9]=-p*v,i[2]=-h*v,i[6]=M*y+b,i[10]=g-w*y}else if(t.order==="XZY"){const g=d*m,M=d*h,b=p*m,w=p*h;i[0]=m*v,i[4]=-y,i[8]=h*v,i[1]=g*y+w,i[5]=d*v,i[9]=M*y-b,i[2]=b*y-M,i[6]=p*v,i[10]=w*y+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(IM,t,HM)}lookAt(t,i,s){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Za.crossVectors(s,ii),Za.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Za.crossVectors(s,ii)),Za.normalize(),Tc.crossVectors(ii,Za),l[0]=Za.x,l[4]=Tc.x,l[8]=ii.x,l[1]=Za.y,l[5]=Tc.y,l[9]=ii.y,l[2]=Za.z,l[6]=Tc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],v=s[1],y=s[5],g=s[9],M=s[13],b=s[2],w=s[6],S=s[10],_=s[14],R=s[3],L=s[7],D=s[11],I=s[15],F=l[0],z=l[4],T=l[8],U=l[12],mt=l[1],H=l[5],j=l[9],X=l[13],et=l[2],$=l[6],O=l[10],B=l[14],rt=l[3],ht=l[7],Tt=l[11],P=l[15];return c[0]=d*F+p*mt+m*et+h*rt,c[4]=d*z+p*H+m*$+h*ht,c[8]=d*T+p*j+m*O+h*Tt,c[12]=d*U+p*X+m*B+h*P,c[1]=v*F+y*mt+g*et+M*rt,c[5]=v*z+y*H+g*$+M*ht,c[9]=v*T+y*j+g*O+M*Tt,c[13]=v*U+y*X+g*B+M*P,c[2]=b*F+w*mt+S*et+_*rt,c[6]=b*z+w*H+S*$+_*ht,c[10]=b*T+w*j+S*O+_*Tt,c[14]=b*U+w*X+S*B+_*P,c[3]=R*F+L*mt+D*et+I*rt,c[7]=R*z+L*H+D*$+I*ht,c[11]=R*T+L*j+D*O+I*Tt,c[15]=R*U+L*X+D*B+I*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],p=t[5],m=t[9],h=t[13],v=t[2],y=t[6],g=t[10],M=t[14],b=t[3],w=t[7],S=t[11],_=t[15],R=m*M-h*g,L=p*M-h*y,D=p*g-m*y,I=d*M-h*v,F=d*g-m*v,z=d*y-p*v;return i*(w*R-S*L+_*D)-s*(b*R-S*I+_*F)+l*(b*L-w*I+_*z)-c*(b*D-w*F+S*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],v=t[8],y=t[9],g=t[10],M=t[11],b=t[12],w=t[13],S=t[14],_=t[15],R=i*p-s*d,L=i*m-l*d,D=i*h-c*d,I=s*m-l*p,F=s*h-c*p,z=l*h-c*m,T=v*w-y*b,U=v*S-g*b,mt=v*_-M*b,H=y*S-g*w,j=y*_-M*w,X=g*_-M*S,et=R*X-L*j+D*H+I*mt-F*U+z*T;if(et===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/et;return t[0]=(p*X-m*j+h*H)*$,t[1]=(l*j-s*X-c*H)*$,t[2]=(w*z-S*F+_*I)*$,t[3]=(g*F-y*z-M*I)*$,t[4]=(m*mt-d*X-h*U)*$,t[5]=(i*X-l*mt+c*U)*$,t[6]=(S*D-b*z-_*L)*$,t[7]=(v*z-g*D+M*L)*$,t[8]=(d*j-p*mt+h*T)*$,t[9]=(s*mt-i*j-c*T)*$,t[10]=(b*F-w*D+_*R)*$,t[11]=(y*D-v*F-M*R)*$,t[12]=(p*U-d*H-m*T)*$,t[13]=(i*H-s*U+l*T)*$,t[14]=(w*L-b*I-S*R)*$,t[15]=(v*I-y*L+g*R)*$,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,p=t.y,m=t.z,h=c*d,v=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,v*p+s,v*m-l*d,0,h*m-l*p,v*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,v=d+d,y=p+p,g=c*h,M=c*v,b=c*y,w=d*v,S=d*y,_=p*y,R=m*h,L=m*v,D=m*y,I=s.x,F=s.y,z=s.z;return l[0]=(1-(w+_))*I,l[1]=(M+D)*I,l[2]=(b-L)*I,l[3]=0,l[4]=(M-D)*F,l[5]=(1-(g+_))*F,l[6]=(S+R)*F,l[7]=0,l[8]=(b+L)*z,l[9]=(S-R)*z,l[10]=(1-(g+w))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Mr.set(l[0],l[1],l[2]).length();const p=Mr.set(l[4],l[5],l[6]).length(),m=Mr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ai.copy(this);const h=1/d,v=1/p,y=1/m;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=v,Ai.elements[5]*=v,Ai.elements[6]*=v,Ai.elements[8]*=y,Ai.elements[9]*=y,Ai.elements[10]*=y,i.setFromRotationMatrix(Ai),s.x=d,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,d,p=Gi,m=!1){const h=this.elements,v=2*c/(i-t),y=2*c/(s-l),g=(i+t)/(i-t),M=(s+l)/(s-l);let b,w;if(m)b=c/(d-c),w=d*c/(d-c);else if(p===Gi)b=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(p===al)b=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=y,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,s,l,c,d,p=Gi,m=!1){const h=this.elements,v=2/(i-t),y=2/(s-l),g=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,w;if(m)b=1/(d-c),w=d/(d-c);else if(p===Gi)b=-2/(d-c),w=-(d+c)/(d-c);else if(p===al)b=-1/(d-c),w=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=y,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Mr=new it,Ai=new Ke,IM=new it(0,0,0),HM=new it(1,1,1),Za=new it,Tc=new it,ii=new it,D_=new Ke,U_=new Yr;class Ma{constructor(t=0,i=0,s=0,l=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],v=l[9],y=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(De(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-De(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(De(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-De(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(De(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return D_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(D_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return U_.setFromEuler(this),this.setFromQuaternion(U_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class Xv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let GM=0;const N_=new it,Er=new Yr,da=new Ke,Ac=new it,Vo=new it,VM=new it,kM=new Yr,L_=new it(1,0,0),O_=new it(0,1,0),P_=new it(0,0,1),F_={type:"added"},XM={type:"removed"},br={type:"childadded",child:null},Vd={type:"childremoved",child:null};class An extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new it,i=new Ma,s=new Yr,l=new it(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new xe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Er.setFromAxisAngle(t,i),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,i){return Er.setFromAxisAngle(t,i),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(L_,t)}rotateY(t){return this.rotateOnAxis(O_,t)}rotateZ(t){return this.rotateOnAxis(P_,t)}translateOnAxis(t,i){return N_.copy(t).applyQuaternion(this.quaternion),this.position.add(N_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(L_,t)}translateY(t){return this.translateOnAxis(O_,t)}translateZ(t){return this.translateOnAxis(P_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Ac.copy(t):Ac.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Vo,Ac,this.up):da.lookAt(Ac,Vo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),Er.setFromRotationMatrix(da),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(F_),br.child=t,this.dispatchEvent(br),br.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(XM),Vd.child=t,this.dispatchEvent(Vd),Vd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),da.multiply(t.parent.matrixWorld)),t.applyMatrix4(da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(F_),br.child=t,this.dispatchEvent(br),br.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,t,VM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,kM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const y=m[h];c(t.shapes,y)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),v=d(t.images),y=d(t.shapes),g=d(t.skeletons),M=d(t.animations),b=d(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),v.length>0&&(s.images=v),y.length>0&&(s.shapes=y),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(p){const m=[];for(const h in p){const v=p[h];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}An.DEFAULT_UP=new it(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Rc extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WM={type:"move"};class kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const w of t.hand.values()){const S=i.getJointPose(w,s),_=this._getHandJoint(h,w);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=h.joints["index-finger-tip"],y=h.joints["thumb-tip"],g=v.position.distanceTo(y.position),M=.02,b=.005;h.inputState.pinching&&g>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(WM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Rc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Xd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ye{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=NM(t,1),i=De(i,0,1),s=De(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Xd(d,c,t+1/3),this.g=Xd(d,c,t),this.b=Xd(d,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=_i){function s(c){c!==void 0&&parseFloat(c)<1&&le("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:le("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=_i){const s=Wv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return Le.workingToColorSpace(wn.copy(this),t),Math.round(De(wn.r*255,0,255))*65536+Math.round(De(wn.g*255,0,255))*256+Math.round(De(wn.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,c=wn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const v=(p+d)/2;if(p===d)m=0,h=0;else{const y=d-p;switch(h=v<=.5?y/(d+p):y/(2-d-p),d){case s:m=(l-c)/y+(l<c?6:0);break;case l:m=(c-s)/y+2;break;case c:m=(s-l)/y+4;break}m/=6}return t.h=m,t.s=h,t.l=v,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=_i){Le.workingToColorSpace(wn.copy(this),t);const i=wn.r,s=wn.g,l=wn.b;return t!==_i?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ka),this.setHSL(Ka.h+t,Ka.s+i,Ka.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ka),t.getHSL(Cc);const s=zd(Ka.h,Cc.h,i),l=zd(Ka.s,Cc.s,i),c=zd(Ka.l,Cc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new ye;ye.NAMES=Wv;class Ep{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(t),this.density=i}clone(){return new Ep(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qM extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ma,this.environmentIntensity=1,this.environmentRotation=new Ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ri=new it,ha=new it,Wd=new it,pa=new it,Tr=new it,Ar=new it,z_=new it,qd=new it,jd=new it,Yd=new it,Zd=new nn,Kd=new nn,Qd=new nn;class vi{constructor(t=new it,i=new it,s=new it){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ri.subVectors(t,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ri.subVectors(l,i),ha.subVectors(s,i),Wd.subVectors(t,i);const d=Ri.dot(Ri),p=Ri.dot(ha),m=Ri.dot(Wd),h=ha.dot(ha),v=ha.dot(Wd),y=d*h-p*p;if(y===0)return c.set(0,0,0),null;const g=1/y,M=(h*m-p*v)*g,b=(d*v-p*m)*g;return c.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,i,s,l,c,d,p,m){return this.getBarycoord(t,i,s,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(d,pa.y),m.addScaledVector(p,pa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return Zd.setScalar(0),Kd.setScalar(0),Qd.setScalar(0),Zd.fromBufferAttribute(t,i),Kd.fromBufferAttribute(t,s),Qd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Zd,c.x),d.addScaledVector(Kd,c.y),d.addScaledVector(Qd,c.z),d}static isFrontFacing(t,i,s,l){return Ri.subVectors(s,i),ha.subVectors(t,i),Ri.cross(ha).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ri.cross(ha).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,p;Tr.subVectors(l,s),Ar.subVectors(c,s),qd.subVectors(t,s);const m=Tr.dot(qd),h=Ar.dot(qd);if(m<=0&&h<=0)return i.copy(s);jd.subVectors(t,l);const v=Tr.dot(jd),y=Ar.dot(jd);if(v>=0&&y<=v)return i.copy(l);const g=m*y-v*h;if(g<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(s).addScaledVector(Tr,d);Yd.subVectors(t,c);const M=Tr.dot(Yd),b=Ar.dot(Yd);if(b>=0&&M<=b)return i.copy(c);const w=M*h-m*b;if(w<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(s).addScaledVector(Ar,p);const S=v*b-M*y;if(S<=0&&y-v>=0&&M-b>=0)return z_.subVectors(c,l),p=(y-v)/(y-v+(M-b)),i.copy(l).addScaledVector(z_,p);const _=1/(S+w+g);return d=w*_,p=g*_,i.copy(s).addScaledVector(Tr,d).addScaledVector(Ar,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class rl{constructor(t=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ci.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ci.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ci.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,Ci):Ci.fromBufferAttribute(c,d),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wc.copy(s.boundingBox)),wc.applyMatrix4(t.matrixWorld),this.union(wc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ko),Dc.subVectors(this.max,ko),Rr.subVectors(t.a,ko),Cr.subVectors(t.b,ko),wr.subVectors(t.c,ko),Qa.subVectors(Cr,Rr),Ja.subVectors(wr,Cr),Ts.subVectors(Rr,wr);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-Ts.z,Ts.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,Ts.z,0,-Ts.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-Ts.y,Ts.x,0];return!Jd(i,Rr,Cr,wr,Dc)||(i=[1,0,0,0,1,0,0,0,1],!Jd(i,Rr,Cr,wr,Dc))?!1:(Uc.crossVectors(Qa,Ja),i=[Uc.x,Uc.y,Uc.z],Jd(i,Rr,Cr,wr,Dc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ma=[new it,new it,new it,new it,new it,new it,new it,new it],Ci=new it,wc=new rl,Rr=new it,Cr=new it,wr=new it,Qa=new it,Ja=new it,Ts=new it,ko=new it,Dc=new it,Uc=new it,As=new it;function Jd(o,t,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){As.fromArray(o,c);const p=l.x*Math.abs(As.x)+l.y*Math.abs(As.y)+l.z*Math.abs(As.z),m=t.dot(As),h=i.dot(As),v=s.dot(As);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>p)return!1}return!0}const hn=new it,Nc=new be;let jM=0;class Dn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=sp,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Nc.fromBufferAttribute(this,i),Nc.applyMatrix3(t),this.setXY(i,Nc.x,Nc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ii(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qe(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ii(i,this.array)),i}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ii(i,this.array)),i}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ii(i,this.array)),i}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ii(i,this.array)),i}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sp&&(t.usage=this.usage),t}}class qv extends Dn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class jv extends Dn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class oi extends Dn{constructor(t,i,s){super(new Float32Array(t),i,s)}}const YM=new rl,Xo=new it,$d=new it;class ol{constructor(t=new it,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):YM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xo.subVectors(t,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Xo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($d.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xo.copy(t.center).add($d)),this.expandByPoint(Xo.copy(t.center).sub($d))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ZM=0;const gi=new Ke,th=new An,Dr=new it,ai=new rl,Wo=new rl,Sn=new it;class Ln extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(CM(t)?jv:qv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new xe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,s){return gi.makeTranslation(t,i,s),this.applyMatrix4(gi),this}scale(t,i,s){return gi.makeScale(t,i,s),this.applyMatrix4(gi),this}lookAt(t){return th.lookAt(t),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new oi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ol);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Wo.setFromBufferAttribute(p),this.morphTargetsRelative?(Sn.addVectors(ai.min,Wo.min),ai.expandByPoint(Sn),Sn.addVectors(ai.max,Wo.max),ai.expandByPoint(Sn)):(ai.expandByPoint(Wo.min),ai.expandByPoint(Wo.max))}ai.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,v=p.count;h<v;h++)Sn.fromBufferAttribute(p,h),m&&(Dr.fromBufferAttribute(t,h),Sn.add(Dr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new it,m[T]=new it;const h=new it,v=new it,y=new it,g=new be,M=new be,b=new be,w=new it,S=new it;function _(T,U,mt){h.fromBufferAttribute(s,T),v.fromBufferAttribute(s,U),y.fromBufferAttribute(s,mt),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,U),b.fromBufferAttribute(c,mt),v.sub(h),y.sub(h),M.sub(g),b.sub(g);const H=1/(M.x*b.y-b.x*M.y);isFinite(H)&&(w.copy(v).multiplyScalar(b.y).addScaledVector(y,-M.y).multiplyScalar(H),S.copy(y).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(H),p[T].add(w),p[U].add(w),p[mt].add(w),m[T].add(S),m[U].add(S),m[mt].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let T=0,U=R.length;T<U;++T){const mt=R[T],H=mt.start,j=mt.count;for(let X=H,et=H+j;X<et;X+=3)_(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const L=new it,D=new it,I=new it,F=new it;function z(T){I.fromBufferAttribute(l,T),F.copy(I);const U=p[T];L.copy(U),L.sub(I.multiplyScalar(I.dot(U))).normalize(),D.crossVectors(F,U);const H=D.dot(m[T])<0?-1:1;d.setXYZW(T,L.x,L.y,L.z,H)}for(let T=0,U=R.length;T<U;++T){const mt=R[T],H=mt.start,j=mt.count;for(let X=H,et=H+j;X<et;X+=3)z(t.getX(X+0)),z(t.getX(X+1)),z(t.getX(X+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Dn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new it,c=new it,d=new it,p=new it,m=new it,h=new it,v=new it,y=new it;if(t)for(let g=0,M=t.count;g<M;g+=3){const b=t.getX(g+0),w=t.getX(g+1),S=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),d.fromBufferAttribute(i,S),v.subVectors(d,c),y.subVectors(l,c),v.cross(y),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),h.fromBufferAttribute(s,S),p.add(v),m.add(v),h.add(v),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),v.subVectors(d,c),y.subVectors(l,c),v.cross(y),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(p,m){const h=p.array,v=p.itemSize,y=p.normalized,g=new h.constructor(m.length*v);let M=0,b=0;for(let w=0,S=m.length;w<S;w++){p.isInterleavedBufferAttribute?M=m[w]*p.data.stride+p.offset:M=m[w]*v;for(let _=0;_<v;_++)g[b++]=h[M++]}return new Dn(g,v,y)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ln,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let v=0,y=h.length;v<y;v++){const g=h[v],M=t(g,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let y=0,g=h.length;y<g;y++){const M=h[y];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(i))}const c=t.morphAttributes;for(const h in c){const v=[],y=c[h];for(let g=0,M=y.length;g<M;g++)v.push(y[g].clone(i));this.morphAttributes[h]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,v=d.length;h<v;h++){const y=d[h];this.addGroup(y.start,y.count,y.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class KM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=sp,this.updateRanges=[],this.version=0,this.uuid=is()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=is()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=is()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const In=new it;class du{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)In.fromBufferAttribute(this,i),In.applyMatrix4(t),this.setXYZ(i,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)In.fromBufferAttribute(this,i),In.applyNormalMatrix(t),this.setXYZ(i,In.x,In.y,In.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)In.fromBufferAttribute(this,i),In.transformDirection(t),this.setXYZ(i,In.x,In.y,In.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Ii(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qe(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ii(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ii(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ii(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ii(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){uu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Dn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new du(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){uu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let QM=0;class zs extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=is(),this.name="",this.type="Material",this.blending=Hr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){le(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(s.blending=this.blending),this.side!==as&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==gh&&(s.blendSrc=this.blendSrc),this.blendDst!==_h&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Yv extends zs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ur;const qo=new it,Nr=new it,Lr=new it,Or=new be,jo=new be,Zv=new Ke,Lc=new it,Yo=new it,Oc=new it,B_=new be,eh=new be,I_=new be;class JM extends An{constructor(t=new Yv){if(super(),this.isSprite=!0,this.type="Sprite",Ur===void 0){Ur=new Ln;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new KM(i,5);Ur.setIndex([0,1,2,0,2,3]),Ur.setAttribute("position",new du(s,3,0,!1)),Ur.setAttribute("uv",new du(s,2,3,!1))}this.geometry=Ur,this.material=t,this.center=new be(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Nr.setFromMatrixScale(this.matrixWorld),Zv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Lr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Nr.multiplyScalar(-Lr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const d=this.center;Pc(Lc.set(-.5,-.5,0),Lr,d,Nr,l,c),Pc(Yo.set(.5,-.5,0),Lr,d,Nr,l,c),Pc(Oc.set(.5,.5,0),Lr,d,Nr,l,c),B_.set(0,0),eh.set(1,0),I_.set(1,1);let p=t.ray.intersectTriangle(Lc,Yo,Oc,!1,qo);if(p===null&&(Pc(Yo.set(-.5,.5,0),Lr,d,Nr,l,c),eh.set(0,1),p=t.ray.intersectTriangle(Lc,Oc,Yo,!1,qo),p===null))return;const m=t.ray.origin.distanceTo(qo);m<t.near||m>t.far||i.push({distance:m,point:qo.clone(),uv:vi.getInterpolation(qo,Lc,Yo,Oc,B_,eh,I_,new be),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Pc(o,t,i,s,l,c){Or.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(jo.x=c*Or.x-l*Or.y,jo.y=l*Or.x+c*Or.y):jo.copy(Or),o.copy(t),o.x+=jo.x,o.y+=jo.y,o.applyMatrix4(Zv)}const ga=new it,nh=new it,Fc=new it,$a=new it,ih=new it,zc=new it,ah=new it;class bp{constructor(t=new it,i=new it(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ga)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ga.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){nh.copy(t).add(i).multiplyScalar(.5),Fc.copy(i).sub(t).normalize(),$a.copy(this.origin).sub(nh);const c=t.distanceTo(i)*.5,d=-this.direction.dot(Fc),p=$a.dot(this.direction),m=-$a.dot(Fc),h=$a.lengthSq(),v=Math.abs(1-d*d);let y,g,M,b;if(v>0)if(y=d*m-p,g=d*p-m,b=c*v,y>=0)if(g>=-b)if(g<=b){const w=1/v;y*=w,g*=w,M=y*(y+d*g+2*p)+g*(d*y+g+2*m)+h}else g=c,y=Math.max(0,-(d*g+p)),M=-y*y+g*(g+2*m)+h;else g=-c,y=Math.max(0,-(d*g+p)),M=-y*y+g*(g+2*m)+h;else g<=-b?(y=Math.max(0,-(-d*c+p)),g=y>0?-c:Math.min(Math.max(-c,-m),c),M=-y*y+g*(g+2*m)+h):g<=b?(y=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+h):(y=Math.max(0,-(d*c+p)),g=y>0?c:Math.min(Math.max(-c,-m),c),M=-y*y+g*(g+2*m)+h);else g=d>0?-c:c,y=Math.max(0,-(d*g+p)),M=-y*y+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(nh).addScaledVector(Fc,g),M}intersectSphere(t,i){ga.subVectors(t.center,this.origin);const s=ga.dot(this.direction),l=ga.dot(ga)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,p,m;const h=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,g=this.origin;return h>=0?(s=(t.min.x-g.x)*h,l=(t.max.x-g.x)*h):(s=(t.max.x-g.x)*h,l=(t.min.x-g.x)*h),v>=0?(c=(t.min.y-g.y)*v,d=(t.max.y-g.y)*v):(c=(t.max.y-g.y)*v,d=(t.min.y-g.y)*v),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),y>=0?(p=(t.min.z-g.z)*y,m=(t.max.z-g.z)*y):(p=(t.max.z-g.z)*y,m=(t.min.z-g.z)*y),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ga)!==null}intersectTriangle(t,i,s,l,c){ih.subVectors(i,t),zc.subVectors(s,t),ah.crossVectors(ih,zc);let d=this.direction.dot(ah),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;$a.subVectors(this.origin,t);const m=p*this.direction.dot(zc.crossVectors($a,zc));if(m<0)return null;const h=p*this.direction.dot(ih.cross($a));if(h<0||m+h>d)return null;const v=-p*$a.dot(ah);return v<0?null:this.at(v/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tp extends zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ma,this.combine=Rv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const H_=new Ke,Rs=new bp,Bc=new ol,G_=new it,Ic=new it,Hc=new it,Gc=new it,sh=new it,Vc=new it,V_=new it,kc=new it;class Wi extends An{constructor(t=new Ln,i=new Tp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Vc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const v=p[m],y=c[m];v!==0&&(sh.fromBufferAttribute(y,t),d?Vc.addScaledVector(sh,v):Vc.addScaledVector(sh.sub(i),v))}i.add(Vc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(c),Rs.copy(t.ray).recast(t.near),!(Bc.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Bc,G_)===null||Rs.origin.distanceToSquared(G_)>(t.far-t.near)**2))&&(H_.copy(c).invert(),Rs.copy(t.ray).applyMatrix4(H_),!(s.boundingBox!==null&&Rs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Rs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,v=c.attributes.uv1,y=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,w=g.length;b<w;b++){const S=g[b],_=d[S.materialIndex],R=Math.max(S.start,M.start),L=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let D=R,I=L;D<I;D+=3){const F=p.getX(D),z=p.getX(D+1),T=p.getX(D+2);l=Xc(this,_,t,s,h,v,y,F,z,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let S=b,_=w;S<_;S+=3){const R=p.getX(S),L=p.getX(S+1),D=p.getX(S+2);l=Xc(this,d,t,s,h,v,y,R,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,w=g.length;b<w;b++){const S=g[b],_=d[S.materialIndex],R=Math.max(S.start,M.start),L=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let D=R,I=L;D<I;D+=3){const F=D,z=D+1,T=D+2;l=Xc(this,_,t,s,h,v,y,F,z,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let S=b,_=w;S<_;S+=3){const R=S,L=S+1,D=S+2;l=Xc(this,d,t,s,h,v,y,R,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function $M(o,t,i,s,l,c,d,p){let m;if(t.side===jn?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,t.side===as,p),m===null)return null;kc.copy(p),kc.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(kc);return h<i.near||h>i.far?null:{distance:h,point:kc.clone(),object:o}}function Xc(o,t,i,s,l,c,d,p,m,h){o.getVertexPosition(p,Ic),o.getVertexPosition(m,Hc),o.getVertexPosition(h,Gc);const v=$M(o,t,i,s,Ic,Hc,Gc,V_);if(v){const y=new it;vi.getBarycoord(V_,Ic,Hc,Gc,y),l&&(v.uv=vi.getInterpolatedAttribute(l,p,m,h,y,new be)),c&&(v.uv1=vi.getInterpolatedAttribute(c,p,m,h,y,new be)),d&&(v.normal=vi.getInterpolatedAttribute(d,p,m,h,y,new it),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new it,materialIndex:0};vi.getNormal(Ic,Hc,Gc,g.normal),v.face=g,v.barycoord=y}return v}class tE extends Nn{constructor(t=null,i=1,s=1,l,c,d,p,m,h=Tn,v=Tn,y,g){super(null,d,p,m,h,v,l,c,y,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rh=new it,eE=new it,nE=new xe;class Us{constructor(t=new it(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=rh.subVectors(s,i).cross(eE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(rh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||nE.getNormalMatrix(t),l=this.coplanarPoint(rh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new ol,iE=new be(.5,.5),Wc=new it;class Ap{constructor(t=new Us,i=new Us,s=new Us,l=new Us,c=new Us,d=new Us){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Gi,s=!1){const l=this.planes,c=t.elements,d=c[0],p=c[1],m=c[2],h=c[3],v=c[4],y=c[5],g=c[6],M=c[7],b=c[8],w=c[9],S=c[10],_=c[11],R=c[12],L=c[13],D=c[14],I=c[15];if(l[0].setComponents(h-d,M-v,_-b,I-R).normalize(),l[1].setComponents(h+d,M+v,_+b,I+R).normalize(),l[2].setComponents(h+p,M+y,_+w,I+L).normalize(),l[3].setComponents(h-p,M-y,_-w,I-L).normalize(),s)l[4].setComponents(m,g,S,D).normalize(),l[5].setComponents(h-m,M-g,_-S,I-D).normalize();else if(l[4].setComponents(h-m,M-g,_-S,I-D).normalize(),i===Gi)l[5].setComponents(h+m,M+g,_+S,I+D).normalize();else if(i===al)l[5].setComponents(m,g,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){Cs.center.set(0,0,0);const i=iE.distanceTo(t.center);return Cs.radius=.7071067811865476+i,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Wc.x=l.normal.x>0?t.max.x:t.min.x,Wc.y=l.normal.y>0?t.max.y:t.min.y,Wc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rp extends zs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const hu=new it,pu=new it,k_=new Ke,Zo=new bp,qc=new ol,oh=new it,X_=new it;class Kv extends An{constructor(t=new Ln,i=new Rp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)hu.fromBufferAttribute(i,l-1),pu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=hu.distanceTo(pu);t.setAttribute("lineDistance",new oi(s,1))}else le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),qc.copy(s.boundingSphere),qc.applyMatrix4(l),qc.radius+=c,t.ray.intersectsSphere(qc)===!1)return;k_.copy(l).invert(),Zo.copy(t.ray).applyMatrix4(k_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const M=Math.max(0,d.start),b=Math.min(v.count,d.start+d.count);for(let w=M,S=b-1;w<S;w+=h){const _=v.getX(w),R=v.getX(w+1),L=jc(this,t,Zo,m,_,R,w);L&&i.push(L)}if(this.isLineLoop){const w=v.getX(b-1),S=v.getX(M),_=jc(this,t,Zo,m,w,S,b-1);_&&i.push(_)}}else{const M=Math.max(0,d.start),b=Math.min(g.count,d.start+d.count);for(let w=M,S=b-1;w<S;w+=h){const _=jc(this,t,Zo,m,w,w+1,w);_&&i.push(_)}if(this.isLineLoop){const w=jc(this,t,Zo,m,b-1,M,b-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function jc(o,t,i,s,l,c,d){const p=o.geometry.attributes.position;if(hu.fromBufferAttribute(p,l),pu.fromBufferAttribute(p,c),i.distanceSqToSegment(hu,pu,oh,X_)>s)return;oh.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(oh);if(!(h<t.near||h>t.far))return{distance:h,point:X_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const W_=new it,q_=new it;class aE extends Kv{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)W_.fromBufferAttribute(i,l),q_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+W_.distanceTo(q_);t.setAttribute("lineDistance",new oi(s,1))}else le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class op extends zs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const j_=new Ke,lp=new bp,Yc=new ol,Zc=new it;class Y_ extends An{constructor(t=new Ln,i=new op){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Yc.copy(s.boundingSphere),Yc.applyMatrix4(l),Yc.radius+=c,t.ray.intersectsSphere(Yc)===!1)return;j_.copy(l).invert(),lp.copy(t.ray).applyMatrix4(j_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,y=s.attributes.position;if(h!==null){const g=Math.max(0,d.start),M=Math.min(h.count,d.start+d.count);for(let b=g,w=M;b<w;b++){const S=h.getX(b);Zc.fromBufferAttribute(y,S),Z_(Zc,S,m,l,t,i,this)}}else{const g=Math.max(0,d.start),M=Math.min(y.count,d.start+d.count);for(let b=g,w=M;b<w;b++)Zc.fromBufferAttribute(y,b),Z_(Zc,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Z_(o,t,i,s,l,c,d){const p=lp.distanceSqToPoint(o);if(p<i){const m=new it;lp.closestPointToPoint(o,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class Qv extends Nn{constructor(t=[],i=Fs,s,l,c,d,p,m,h,v){super(t,i,s,l,c,d,p,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sE extends Nn{constructor(t,i,s,l,c,d,p,m,h){super(t,i,s,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sl extends Nn{constructor(t,i,s=Xi,l,c,d,p=Tn,m=Tn,h,v=ya,y=1){if(v!==ya&&v!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:y};super(g,l,c,d,p,m,v,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Mp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class rE extends sl{constructor(t,i=Xi,s=Fs,l,c,d=Tn,p=Tn,m,h=ya){const v={width:t,height:t,depth:1},y=[v,v,v,v,v,v];super(t,t,i,s,l,c,d,p,m,h),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Jv extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ll extends Ln{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],v=[],y=[];let g=0,M=0;b("z","y","x",-1,-1,s,i,t,d,c,0),b("z","y","x",1,-1,s,i,-t,d,c,1),b("x","z","y",1,1,t,s,i,l,d,2),b("x","z","y",1,-1,t,s,-i,l,d,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new oi(h,3)),this.setAttribute("normal",new oi(v,3)),this.setAttribute("uv",new oi(y,2));function b(w,S,_,R,L,D,I,F,z,T,U){const mt=D/z,H=I/T,j=D/2,X=I/2,et=F/2,$=z+1,O=T+1;let B=0,rt=0;const ht=new it;for(let Tt=0;Tt<O;Tt++){const P=Tt*H-X;for(let Z=0;Z<$;Z++){const at=Z*mt-j;ht[w]=at*R,ht[S]=P*L,ht[_]=et,h.push(ht.x,ht.y,ht.z),ht[w]=0,ht[S]=0,ht[_]=F>0?1:-1,v.push(ht.x,ht.y,ht.z),y.push(Z/z),y.push(1-Tt/T),B+=1}}for(let Tt=0;Tt<T;Tt++)for(let P=0;P<z;P++){const Z=g+P+$*Tt,at=g+P+$*(Tt+1),Et=g+(P+1)+$*(Tt+1),At=g+(P+1)+$*Tt;m.push(Z,at,At),m.push(at,Et,At),rt+=6}p.addGroup(M,rt,U),M+=rt,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class cl extends Ln{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,v=m+1,y=t/p,g=i/m,M=[],b=[],w=[],S=[];for(let _=0;_<v;_++){const R=_*g-d;for(let L=0;L<h;L++){const D=L*y-c;b.push(D,-R,0),w.push(0,0,1),S.push(L/p),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let R=0;R<p;R++){const L=R+h*_,D=R+h*(_+1),I=R+1+h*(_+1),F=R+1+h*_;M.push(L,D,F),M.push(D,I,F)}this.setIndex(M),this.setAttribute("position",new oi(b,3)),this.setAttribute("normal",new oi(w,3)),this.setAttribute("uv",new oi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.width,t.height,t.widthSegments,t.heightSegments)}}function qr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(o){const t={};for(let i=0;i<o.length;i++){const s=qr(o[i]);for(const l in s)t[l]=s[l]}return t}function oE(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function $v(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const lE={clone:qr,merge:Hn};var cE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cE,this.fragmentShader=uE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qr(t.uniforms),this.uniformsGroups=oE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class fE extends qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dE extends zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hE extends zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class tx extends An{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const lh=new Ke,K_=new it,Q_=new it;class pE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ap,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;K_.setFromMatrixPosition(t.matrixWorld),i.position.copy(K_),Q_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Q_),i.updateMatrixWorld(),lh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===al||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(lh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Kc=new it,Qc=new Yr,Pi=new it;class ex extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Kc,Qc,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Qc,Pi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Kc,Qc,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Qc,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ts=new it,J_=new be,$_=new be;class si extends ex{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=rp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rp*2*Math.atan(Math.tan(Fd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,i){return this.getViewBounds(t,J_,$_),i.subVectors($_,J_)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Fd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class mE extends pE{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0}}class gE extends tx{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new mE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class nx extends ex{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class _E extends tx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Pr=-90,Fr=1;class vE extends An{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(Pr,Fr,t,i);l.layers=this.layers,this.add(l);const c=new si(Pr,Fr,t,i);c.layers=this.layers,this.add(c);const d=new si(Pr,Fr,t,i);d.layers=this.layers,this.add(d);const p=new si(Pr,Fr,t,i);p.layers=this.layers,this.add(p);const m=new si(Pr,Fr,t,i);m.layers=this.layers,this.add(m);const h=new si(Pr,Fr,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(t===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===al)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,v]=this.children,y=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(y,g,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class xE extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class SE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,le("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class yE extends aE{constructor(t=10,i=10,s=4473924,l=8947848){s=new ye(s),l=new ye(l);const c=i/2,d=t/i,p=t/2,m=[],h=[];for(let g=0,M=0,b=-p;g<=i;g++,b+=d){m.push(-p,0,b,p,0,b),m.push(b,0,-p,b,0,p);const w=g===c?s:l;w.toArray(h,M),M+=3,w.toArray(h,M),M+=3,w.toArray(h,M),M+=3,w.toArray(h,M),M+=3}const v=new Ln;v.setAttribute("position",new oi(m,3)),v.setAttribute("color",new oi(h,3));const y=new Rp({vertexColors:!0,toneMapped:!1});super(v,y),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function tv(o,t,i,s){const l=ME(s);switch(i){case Iv:return o*t;case Gv:return o*t/l.components*l.byteLength;case _p:return o*t/l.components*l.byteLength;case Xr:return o*t*2/l.components*l.byteLength;case vp:return o*t*2/l.components*l.byteLength;case Hv:return o*t*3/l.components*l.byteLength;case wi:return o*t*4/l.components*l.byteLength;case xp:return o*t*4/l.components*l.byteLength;case nu:case iu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case au:case su:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ch:case Dh:return Math.max(o,16)*Math.max(t,8)/4;case Rh:case wh:return Math.max(o,8)*Math.max(t,8)/2;case Uh:case Nh:case Oh:case Ph:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Lh:case Fh:case zh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Bh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ih:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Hh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Gh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Vh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case kh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Wh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case qh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case jh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Zh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Kh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Qh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Jh:case $h:case tp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case ep:case np:return Math.ceil(o/4)*Math.ceil(t/4)*8;case ip:case ap:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ME(o){switch(o){case ri:case Pv:return{byteLength:1,components:1};case nl:case Fv:case Sa:return{byteLength:2,components:1};case mp:case gp:return{byteLength:2,components:4};case Xi:case pp:case Hi:return{byteLength:4,components:1};case zv:case Bv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dp}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ix(){let o=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function EE(o){const t=new WeakMap;function i(p,m){const h=p.array,v=p.usage,y=h.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,h,v),p.onUploadCallback();let M;if(h instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=o.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=o.SHORT;else if(h instanceof Uint32Array)M=o.UNSIGNED_INT;else if(h instanceof Int32Array)M=o.INT;else if(h instanceof Int8Array)M=o.BYTE;else if(h instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:y}}function s(p,m,h){const v=m.array,y=m.updateRanges;if(o.bindBuffer(h,p),y.length===0)o.bufferSubData(h,0,v);else{y.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<y.length;M++){const b=y[g],w=y[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++g,y[g]=w)}y.length=g+1;for(let M=0,b=y.length;M<b;M++){const w=y[M];o.bufferSubData(h,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(o.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=t.get(p);(!v||v.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var bE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TE=`#ifdef USE_ALPHAHASH
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
#endif`,AE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DE=`#ifdef USE_AOMAP
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
#endif`,UE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NE=`#ifdef USE_BATCHING
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
#endif`,LE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zE=`#ifdef USE_IRIDESCENCE
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
#endif`,BE=`#ifdef USE_BUMPMAP
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
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,XE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,WE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jE=`#define PI 3.141592653589793
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
} // validated`,YE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZE=`vec3 transformedNormal = objectNormal;
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
#endif`,KE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tb="gl_FragColor = linearToOutputTexel( gl_FragColor );",eb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nb=`#ifdef USE_ENVMAP
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
#endif`,ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
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
#endif`,sb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
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
#endif`,ob=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ub=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fb=`#ifdef USE_GRADIENTMAP
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
}`,db=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mb=`uniform bool receiveShadow;
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
#endif`,gb=`#ifdef USE_ENVMAP
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
#endif`,_b=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yb=`PhysicalMaterial material;
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
#endif`,Mb=`uniform sampler2D dfgLUT;
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
}`,Eb=`
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
#endif`,bb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Db=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ub=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lb=`#if defined( USE_POINTS_UV )
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
#endif`,Ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ib=`#ifdef USE_MORPHTARGETS
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
#endif`,Hb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qb=`#ifdef USE_NORMALMAP
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
#endif`,jb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$b=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lT=`float getShadowMask() {
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
}`,cT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uT=`#ifdef USE_SKINNING
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
#endif`,fT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dT=`#ifdef USE_SKINNING
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
#endif`,hT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_T=`#ifdef USE_TRANSMISSION
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
#endif`,vT=`#ifdef USE_TRANSMISSION
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
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ST=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ET=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bT=`uniform sampler2D t2D;
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
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wT=`#include <common>
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
}`,DT=`#if DEPTH_PACKING == 3200
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
}`,UT=`#define DISTANCE
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
}`,NT=`#define DISTANCE
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
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PT=`uniform float scale;
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
}`,FT=`uniform vec3 diffuse;
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
}`,zT=`#include <common>
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
}`,BT=`uniform vec3 diffuse;
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
}`,IT=`#define LAMBERT
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
}`,HT=`#define LAMBERT
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
}`,GT=`#define MATCAP
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
}`,VT=`#define MATCAP
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
}`,kT=`#define NORMAL
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
}`,XT=`#define NORMAL
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
}`,WT=`#define PHONG
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
}`,qT=`#define PHONG
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
}`,jT=`#define STANDARD
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
}`,YT=`#define STANDARD
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
}`,ZT=`#define TOON
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
}`,KT=`#define TOON
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
}`,QT=`uniform float size;
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
}`,JT=`uniform vec3 diffuse;
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
}`,$T=`#include <common>
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
}`,t1=`uniform vec3 color;
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
}`,e1=`uniform float rotation;
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
}`,n1=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:bE,alphahash_pars_fragment:TE,alphamap_fragment:AE,alphamap_pars_fragment:RE,alphatest_fragment:CE,alphatest_pars_fragment:wE,aomap_fragment:DE,aomap_pars_fragment:UE,batching_pars_vertex:NE,batching_vertex:LE,begin_vertex:OE,beginnormal_vertex:PE,bsdfs:FE,iridescence_fragment:zE,bumpmap_pars_fragment:BE,clipping_planes_fragment:IE,clipping_planes_pars_fragment:HE,clipping_planes_pars_vertex:GE,clipping_planes_vertex:VE,color_fragment:kE,color_pars_fragment:XE,color_pars_vertex:WE,color_vertex:qE,common:jE,cube_uv_reflection_fragment:YE,defaultnormal_vertex:ZE,displacementmap_pars_vertex:KE,displacementmap_vertex:QE,emissivemap_fragment:JE,emissivemap_pars_fragment:$E,colorspace_fragment:tb,colorspace_pars_fragment:eb,envmap_fragment:nb,envmap_common_pars_fragment:ib,envmap_pars_fragment:ab,envmap_pars_vertex:sb,envmap_physical_pars_fragment:gb,envmap_vertex:rb,fog_vertex:ob,fog_pars_vertex:lb,fog_fragment:cb,fog_pars_fragment:ub,gradientmap_pars_fragment:fb,lightmap_pars_fragment:db,lights_lambert_fragment:hb,lights_lambert_pars_fragment:pb,lights_pars_begin:mb,lights_toon_fragment:_b,lights_toon_pars_fragment:vb,lights_phong_fragment:xb,lights_phong_pars_fragment:Sb,lights_physical_fragment:yb,lights_physical_pars_fragment:Mb,lights_fragment_begin:Eb,lights_fragment_maps:bb,lights_fragment_end:Tb,logdepthbuf_fragment:Ab,logdepthbuf_pars_fragment:Rb,logdepthbuf_pars_vertex:Cb,logdepthbuf_vertex:wb,map_fragment:Db,map_pars_fragment:Ub,map_particle_fragment:Nb,map_particle_pars_fragment:Lb,metalnessmap_fragment:Ob,metalnessmap_pars_fragment:Pb,morphinstance_vertex:Fb,morphcolor_vertex:zb,morphnormal_vertex:Bb,morphtarget_pars_vertex:Ib,morphtarget_vertex:Hb,normal_fragment_begin:Gb,normal_fragment_maps:Vb,normal_pars_fragment:kb,normal_pars_vertex:Xb,normal_vertex:Wb,normalmap_pars_fragment:qb,clearcoat_normal_fragment_begin:jb,clearcoat_normal_fragment_maps:Yb,clearcoat_pars_fragment:Zb,iridescence_pars_fragment:Kb,opaque_fragment:Qb,packing:Jb,premultiplied_alpha_fragment:$b,project_vertex:tT,dithering_fragment:eT,dithering_pars_fragment:nT,roughnessmap_fragment:iT,roughnessmap_pars_fragment:aT,shadowmap_pars_fragment:sT,shadowmap_pars_vertex:rT,shadowmap_vertex:oT,shadowmask_pars_fragment:lT,skinbase_vertex:cT,skinning_pars_vertex:uT,skinning_vertex:fT,skinnormal_vertex:dT,specularmap_fragment:hT,specularmap_pars_fragment:pT,tonemapping_fragment:mT,tonemapping_pars_fragment:gT,transmission_fragment:_T,transmission_pars_fragment:vT,uv_pars_fragment:xT,uv_pars_vertex:ST,uv_vertex:yT,worldpos_vertex:MT,background_vert:ET,background_frag:bT,backgroundCube_vert:TT,backgroundCube_frag:AT,cube_vert:RT,cube_frag:CT,depth_vert:wT,depth_frag:DT,distance_vert:UT,distance_frag:NT,equirect_vert:LT,equirect_frag:OT,linedashed_vert:PT,linedashed_frag:FT,meshbasic_vert:zT,meshbasic_frag:BT,meshlambert_vert:IT,meshlambert_frag:HT,meshmatcap_vert:GT,meshmatcap_frag:VT,meshnormal_vert:kT,meshnormal_frag:XT,meshphong_vert:WT,meshphong_frag:qT,meshphysical_vert:jT,meshphysical_frag:YT,meshtoon_vert:ZT,meshtoon_frag:KT,points_vert:QT,points_frag:JT,shadow_vert:$T,shadow_frag:t1,sprite_vert:e1,sprite_frag:n1},It={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},zi={basic:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Hn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Hn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new ye(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Hn([It.points,It.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Hn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Hn([It.common,It.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Hn([It.sprite,It.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:Hn([It.common,It.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:Hn([It.lights,It.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};zi.physical={uniforms:Hn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Jc={r:0,b:0,g:0},ws=new Ma,i1=new Ke;function a1(o,t,i,s,l,c){const d=new ye(0);let p=l===!0?0:1,m,h,v=null,y=0,g=null;function M(R){let L=R.isScene===!0?R.background:null;if(L&&L.isTexture){const D=R.backgroundBlurriness>0;L=t.get(L,D)}return L}function b(R){let L=!1;const D=M(R);D===null?S(d,p):D&&D.isColor&&(S(D,1),L=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(R,L){const D=M(L);D&&(D.isCubeTexture||D.mapping===mu)?(h===void 0&&(h=new Wi(new ll(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:qr(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,F,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ws.copy(L.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(i1.makeRotationFromEuler(ws)),h.material.toneMapped=Le.getTransfer(D.colorSpace)!==Ve,(v!==D||y!==D.version||g!==o.toneMapping)&&(h.material.needsUpdate=!0,v=D,y=D.version,g=o.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Wi(new cl(2,2),new qi({name:"BackgroundMaterial",uniforms:qr(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Le.getTransfer(D.colorSpace)!==Ve,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(v!==D||y!==D.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,v=D,y=D.version,g=o.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function S(R,L){R.getRGB(Jc,$v(o)),i.buffers.color.setClear(Jc.r,Jc.g,Jc.b,L,c)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(R,L=1){d.set(R),p=L,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,S(d,p)},render:b,addToRenderList:w,dispose:_}}function s1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(H,j,X,et,$){let O=!1;const B=y(H,et,X,j);c!==B&&(c=B,h(c.object)),O=M(H,et,X,$),O&&b(H,et,X,$),$!==null&&t.update($,o.ELEMENT_ARRAY_BUFFER),(O||d)&&(d=!1,D(H,j,X,et),$!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function m(){return o.createVertexArray()}function h(H){return o.bindVertexArray(H)}function v(H){return o.deleteVertexArray(H)}function y(H,j,X,et){const $=et.wireframe===!0;let O=s[j.id];O===void 0&&(O={},s[j.id]=O);const B=H.isInstancedMesh===!0?H.id:0;let rt=O[B];rt===void 0&&(rt={},O[B]=rt);let ht=rt[X.id];ht===void 0&&(ht={},rt[X.id]=ht);let Tt=ht[$];return Tt===void 0&&(Tt=g(m()),ht[$]=Tt),Tt}function g(H){const j=[],X=[],et=[];for(let $=0;$<i;$++)j[$]=0,X[$]=0,et[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:X,attributeDivisors:et,object:H,attributes:{},index:null}}function M(H,j,X,et){const $=c.attributes,O=j.attributes;let B=0;const rt=X.getAttributes();for(const ht in rt)if(rt[ht].location>=0){const P=$[ht];let Z=O[ht];if(Z===void 0&&(ht==="instanceMatrix"&&H.instanceMatrix&&(Z=H.instanceMatrix),ht==="instanceColor"&&H.instanceColor&&(Z=H.instanceColor)),P===void 0||P.attribute!==Z||Z&&P.data!==Z.data)return!0;B++}return c.attributesNum!==B||c.index!==et}function b(H,j,X,et){const $={},O=j.attributes;let B=0;const rt=X.getAttributes();for(const ht in rt)if(rt[ht].location>=0){let P=O[ht];P===void 0&&(ht==="instanceMatrix"&&H.instanceMatrix&&(P=H.instanceMatrix),ht==="instanceColor"&&H.instanceColor&&(P=H.instanceColor));const Z={};Z.attribute=P,P&&P.data&&(Z.data=P.data),$[ht]=Z,B++}c.attributes=$,c.attributesNum=B,c.index=et}function w(){const H=c.newAttributes;for(let j=0,X=H.length;j<X;j++)H[j]=0}function S(H){_(H,0)}function _(H,j){const X=c.newAttributes,et=c.enabledAttributes,$=c.attributeDivisors;X[H]=1,et[H]===0&&(o.enableVertexAttribArray(H),et[H]=1),$[H]!==j&&(o.vertexAttribDivisor(H,j),$[H]=j)}function R(){const H=c.newAttributes,j=c.enabledAttributes;for(let X=0,et=j.length;X<et;X++)j[X]!==H[X]&&(o.disableVertexAttribArray(X),j[X]=0)}function L(H,j,X,et,$,O,B){B===!0?o.vertexAttribIPointer(H,j,X,$,O):o.vertexAttribPointer(H,j,X,et,$,O)}function D(H,j,X,et){w();const $=et.attributes,O=X.getAttributes(),B=j.defaultAttributeValues;for(const rt in O){const ht=O[rt];if(ht.location>=0){let Tt=$[rt];if(Tt===void 0&&(rt==="instanceMatrix"&&H.instanceMatrix&&(Tt=H.instanceMatrix),rt==="instanceColor"&&H.instanceColor&&(Tt=H.instanceColor)),Tt!==void 0){const P=Tt.normalized,Z=Tt.itemSize,at=t.get(Tt);if(at===void 0)continue;const Et=at.buffer,At=at.type,J=at.bytesPerElement,G=At===o.INT||At===o.UNSIGNED_INT||Tt.gpuType===pp;if(Tt.isInterleavedBufferAttribute){const ut=Tt.data,yt=ut.stride,Dt=Tt.offset;if(ut.isInstancedInterleavedBuffer){for(let Pt=0;Pt<ht.locationSize;Pt++)_(ht.location+Pt,ut.meshPerAttribute);H.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Pt=0;Pt<ht.locationSize;Pt++)S(ht.location+Pt);o.bindBuffer(o.ARRAY_BUFFER,Et);for(let Pt=0;Pt<ht.locationSize;Pt++)L(ht.location+Pt,Z/ht.locationSize,At,P,yt*J,(Dt+Z/ht.locationSize*Pt)*J,G)}else{if(Tt.isInstancedBufferAttribute){for(let ut=0;ut<ht.locationSize;ut++)_(ht.location+ut,Tt.meshPerAttribute);H.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let ut=0;ut<ht.locationSize;ut++)S(ht.location+ut);o.bindBuffer(o.ARRAY_BUFFER,Et);for(let ut=0;ut<ht.locationSize;ut++)L(ht.location+ut,Z/ht.locationSize,At,P,Z*J,Z/ht.locationSize*ut*J,G)}}else if(B!==void 0){const P=B[rt];if(P!==void 0)switch(P.length){case 2:o.vertexAttrib2fv(ht.location,P);break;case 3:o.vertexAttrib3fv(ht.location,P);break;case 4:o.vertexAttrib4fv(ht.location,P);break;default:o.vertexAttrib1fv(ht.location,P)}}}}R()}function I(){U();for(const H in s){const j=s[H];for(const X in j){const et=j[X];for(const $ in et){const O=et[$];for(const B in O)v(O[B].object),delete O[B];delete et[$]}}delete s[H]}}function F(H){if(s[H.id]===void 0)return;const j=s[H.id];for(const X in j){const et=j[X];for(const $ in et){const O=et[$];for(const B in O)v(O[B].object),delete O[B];delete et[$]}}delete s[H.id]}function z(H){for(const j in s){const X=s[j];for(const et in X){const $=X[et];if($[H.id]===void 0)continue;const O=$[H.id];for(const B in O)v(O[B].object),delete O[B];delete $[H.id]}}}function T(H){for(const j in s){const X=s[j],et=H.isInstancedMesh===!0?H.id:0,$=X[et];if($!==void 0){for(const O in $){const B=$[O];for(const rt in B)v(B[rt].object),delete B[rt];delete $[O]}delete X[et],Object.keys(X).length===0&&delete s[j]}}}function U(){mt(),d=!0,c!==l&&(c=l,h(c.object))}function mt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:U,resetDefaultState:mt,dispose:I,releaseStatesOfGeometry:F,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:S,disableUnusedAttributes:R}}function r1(o,t,i){let s;function l(h){s=h}function c(h,v){o.drawArrays(s,h,v),i.update(v,s,1)}function d(h,v,y){y!==0&&(o.drawArraysInstanced(s,h,v,y),i.update(v,s,y))}function p(h,v,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,v,0,y);let M=0;for(let b=0;b<y;b++)M+=v[b];i.update(M,s,1)}function m(h,v,y,g){if(y===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<h.length;b++)d(h[b],v[b],g[b]);else{M.multiDrawArraysInstancedWEBGL(s,h,0,v,0,g,0,y);let b=0;for(let w=0;w<y;w++)b+=v[w]*g[w];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function o1(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==wi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const T=z===Sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ri&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Hi&&!T)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const v=m(h);v!==h&&(le("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const y=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),R=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=o.getParameter(o.MAX_SAMPLES),F=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:D,maxSamples:I,samples:F}}function l1(o){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Us,p=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const M=y.length!==0||g||s!==0||l;return l=g,s=y.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,g){i=v(y,g,0)},this.setState=function(y,g,M){const b=y.clippingPlanes,w=y.clipIntersection,S=y.clipShadows,_=o.get(y);if(!l||b===null||b.length===0||c&&!S)c?v(null):h();else{const R=c?0:s,L=R*4;let D=_.clippingState||null;m.value=D,D=v(b,g,L,M);for(let I=0;I!==L;++I)D[I]=i[I];_.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=R}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(y,g,M,b){const w=y!==null?y.length:0;let S=null;if(w!==0){if(S=m.value,b!==!0||S===null){const _=M+w*4,R=g.matrixWorldInverse;p.getNormalMatrix(R),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,D=M;L!==w;++L,D+=4)d.copy(y[L]).applyMatrix4(R,p),d.normal.toArray(S,D),S[D+3]=d.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,S}}const ns=4,ev=[.125,.215,.35,.446,.526,.582],Ls=20,c1=256,Ko=new nx,nv=new ye;let ch=null,uh=0,fh=0,dh=!1;const u1=new it;class iv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=u1}=c;ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ch,uh,fh),this._renderer.xr.enabled=dh,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Fs||t.mapping===kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Sa,format:wi,colorSpace:Wr,depthBuffer:!1},l=av(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=av(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=f1(c)),this._blurMaterial=h1(c,t,i),this._ggxMaterial=d1(c,t,i)}return l}_compileMaterial(t){const i=new Wi(new Ln,t);this._renderer.compile(i,Ko)}_sceneToCubeUV(t,i,s,l,c){const m=new si(90,1,i,s),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,M=y.toneMapping;y.getClearColor(nv),y.toneMapping=Vi,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(l),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wi(new ll,new Tp({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,S=w.material;let _=!1;const R=t.background;R?R.isColor&&(S.color.copy(R),t.background=null,_=!0):(S.color.copy(nv),_=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,h[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[L],c.y,c.z)):D===1?(m.up.set(0,0,h[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[L],c.z)):(m.up.set(0,h[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[L]));const I=this._cubeSize;zr(l,D*I,L>2?I:0,I,I),y.setRenderTarget(l),_&&y.render(w,m),y.render(t,m)}y.toneMapping=M,y.autoClear=g,t.background=R}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Fs||t.mapping===kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=rv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;zr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Ko)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),y=Math.sqrt(h*h-v*v),g=0+h*1.25,M=y*g,{_lodMax:b}=this,w=this._sizeLods[s],S=3*w*(s>b-ns?s-b+ns:0),_=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,zr(c,S,_,3*w,2*w),l.setRenderTarget(c),l.render(p,Ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,zr(t,S,_,3*w,2*w),l.setRenderTarget(t),l.render(p,Ko)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");const v=3,y=this._lodMeshes[l];y.material=h;const g=h.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ls-1),w=c/b,S=isFinite(c)?1+Math.floor(v*w):Ls;S>Ls&&le(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ls}`);const _=[];let R=0;for(let z=0;z<Ls;++z){const T=z/w,U=Math.exp(-T*T/2);_.push(U),z===0?R+=U:z<S&&(R+=2*U)}for(let z=0;z<_.length;z++)_[z]=_[z]/R;g.envMap.value=t.texture,g.samples.value=S,g.weights.value=_,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:L}=this;g.dTheta.value=b,g.mipInt.value=L-s;const D=this._sizeLods[l],I=3*D*(l>L-ns?l-L+ns:0),F=4*(this._cubeSize-D);zr(i,I,F,3*D,2*D),m.setRenderTarget(i),m.render(y,Ko)}}function f1(o){const t=[],i=[],s=[];let l=o;const c=o-ns+1+ev.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);t.push(p);let m=1/p;d>o-ns?m=ev[d-o+ns-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),v=-h,y=1+h,g=[v,v,y,v,y,y,v,v,y,y,v,y],M=6,b=6,w=3,S=2,_=1,R=new Float32Array(w*b*M),L=new Float32Array(S*b*M),D=new Float32Array(_*b*M);for(let F=0;F<M;F++){const z=F%3*2/3-1,T=F>2?0:-1,U=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];R.set(U,w*b*F),L.set(g,S*b*F);const mt=[F,F,F,F,F,F];D.set(mt,_*b*F)}const I=new Ln;I.setAttribute("position",new Dn(R,w)),I.setAttribute("uv",new Dn(L,S)),I.setAttribute("faceIndex",new Dn(D,_)),s.push(new Wi(I,null)),l>ns&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function av(o,t,i){const s=new ki(o,t,i);return s.texture.mapping=mu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function zr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function d1(o,t,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:c1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function h1(o,t,i){const s=new Float32Array(Ls),l=new it(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function sv(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function rv(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}class ax extends ki{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Qv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ll(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:qr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:va});c.uniforms.tEquirect.value=i;const d=new Wi(l,c),p=i.minFilter;return i.minFilter===Os&&(i.minFilter=Un),new vE(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}function p1(o){let t=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?d(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Ld||M===Od)if(t.has(g)){const b=t.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const w=new ax(b.height);return w.fromEquirectangularTexture(o,g),t.set(g,w),g.addEventListener("dispose",h),p(w.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,b=M===Ld||M===Od,w=M===Fs||M===kr;if(b||w){let S=i.get(g);const _=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return s===null&&(s=new iv(o)),S=b?s.fromEquirectangular(g,S):s.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const R=g.image;return b&&R&&R.height>0||w&&R&&m(R)?(s===null&&(s=new iv(o)),S=b?s.fromEquirectangular(g):s.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function p(g,M){return M===Ld?g.mapping=Fs:M===Od&&(g.mapping=kr),g}function m(g){let M=0;const b=6;for(let w=0;w<b;w++)g[w]!==void 0&&M++;return M===b}function h(g){const M=g.target;M.removeEventListener("dispose",h);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function y(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:y}}function m1(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&fu("WebGLRenderer: "+s+" extension not supported."),l}}}function g1(o,t,i,s){const l={},c=new WeakMap;function d(y){const g=y.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",d),delete l[g.id];const M=c.get(g);M&&(t.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(y,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(y){const g=y.attributes;for(const M in g)t.update(g[M],o.ARRAY_BUFFER)}function h(y){const g=[],M=y.index,b=y.attributes.position;let w=0;if(b===void 0)return;if(M!==null){const R=M.array;w=M.version;for(let L=0,D=R.length;L<D;L+=3){const I=R[L+0],F=R[L+1],z=R[L+2];g.push(I,F,F,z,z,I)}}else{const R=b.array;w=b.version;for(let L=0,D=R.length/3-1;L<D;L+=3){const I=L+0,F=L+1,z=L+2;g.push(I,F,F,z,z,I)}}const S=new(b.count>=65535?jv:qv)(g,1);S.version=w;const _=c.get(y);_&&t.remove(_),c.set(y,S)}function v(y){const g=c.get(y);if(g){const M=y.index;M!==null&&g.version<M.version&&h(y)}else h(y);return c.get(y)}return{get:p,update:m,getWireframeAttribute:v}}function _1(o,t,i){let s;function l(g){s=g}let c,d;function p(g){c=g.type,d=g.bytesPerElement}function m(g,M){o.drawElements(s,M,c,g*d),i.update(M,s,1)}function h(g,M,b){b!==0&&(o.drawElementsInstanced(s,M,c,g*d,b),i.update(M,s,b))}function v(g,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,g,0,b);let S=0;for(let _=0;_<b;_++)S+=M[_];i.update(S,s,1)}function y(g,M,b,w){if(b===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<g.length;_++)h(g[_]/d,M[_],w[_]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,g,0,w,0,b);let _=0;for(let R=0;R<b;R++)_+=M[R]*w[R];i.update(_,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function v1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:Ne("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function x1(o,t,i){const s=new WeakMap,l=new nn;function c(d,p,m){const h=d.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,y=v!==void 0?v.length:0;let g=s.get(p);if(g===void 0||g.count!==y){let mt=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",mt)};var M=mt;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,_=p.morphAttributes.position||[],R=p.morphAttributes.normal||[],L=p.morphAttributes.color||[];let D=0;b===!0&&(D=1),w===!0&&(D=2),S===!0&&(D=3);let I=p.attributes.position.count*D,F=1;I>t.maxTextureSize&&(F=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const z=new Float32Array(I*F*4*y),T=new kv(z,I,F,y);T.type=Hi,T.needsUpdate=!0;const U=D*4;for(let H=0;H<y;H++){const j=_[H],X=R[H],et=L[H],$=I*F*4*H;for(let O=0;O<j.count;O++){const B=O*U;b===!0&&(l.fromBufferAttribute(j,O),z[$+B+0]=l.x,z[$+B+1]=l.y,z[$+B+2]=l.z,z[$+B+3]=0),w===!0&&(l.fromBufferAttribute(X,O),z[$+B+4]=l.x,z[$+B+5]=l.y,z[$+B+6]=l.z,z[$+B+7]=0),S===!0&&(l.fromBufferAttribute(et,O),z[$+B+8]=l.x,z[$+B+9]=l.y,z[$+B+10]=l.z,z[$+B+11]=et.itemSize===4?l.w:1)}}g={count:y,texture:T,size:new be(I,F)},s.set(p,g),p.addEventListener("dispose",mt)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let b=0;for(let S=0;S<h.length;S++)b+=h[S];const w=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",h)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function S1(o,t,i,s,l){let c=new WeakMap;function d(h){const v=l.render.frame,y=h.geometry,g=t.get(h,y);if(c.get(g)!==v&&(t.update(g),c.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==v&&(i.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,o.ARRAY_BUFFER),c.set(h,v))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==v&&(M.update(),c.set(M,v))}return g}function p(){c=new WeakMap}function m(h){const v=h.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:p}}const y1={[Cv]:"LINEAR_TONE_MAPPING",[wv]:"REINHARD_TONE_MAPPING",[Dv]:"CINEON_TONE_MAPPING",[hp]:"ACES_FILMIC_TONE_MAPPING",[Nv]:"AGX_TONE_MAPPING",[Lv]:"NEUTRAL_TONE_MAPPING",[Uv]:"CUSTOM_TONE_MAPPING"};function M1(o,t,i,s,l){const c=new ki(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),d=new ki(t,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),p=new Ln;p.setAttribute("position",new oi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new oi([0,2,0,0,2,0],2));const m=new fE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Wi(p,m),v=new nx(-1,1,1,-1,0,1);let y=null,g=null,M=!1,b,w=null,S=[],_=!1;this.setSize=function(R,L){c.setSize(R,L),d.setSize(R,L);for(let D=0;D<S.length;D++){const I=S[D];I.setSize&&I.setSize(R,L)}},this.setEffects=function(R){S=R,_=S.length>0&&S[0].isRenderPass===!0;const L=c.width,D=c.height;for(let I=0;I<S.length;I++){const F=S[I];F.setSize&&F.setSize(L,D)}},this.begin=function(R,L){if(M||R.toneMapping===Vi&&S.length===0)return!1;if(w=L,L!==null){const D=L.width,I=L.height;(c.width!==D||c.height!==I)&&this.setSize(D,I)}return _===!1&&R.setRenderTarget(c),b=R.toneMapping,R.toneMapping=Vi,!0},this.hasRenderPass=function(){return _},this.end=function(R,L){R.toneMapping=b,M=!0;let D=c,I=d;for(let F=0;F<S.length;F++){const z=S[F];if(z.enabled!==!1&&(z.render(R,I,D,L),z.needsSwap!==!1)){const T=D;D=I,I=T}}if(y!==R.outputColorSpace||g!==R.toneMapping){y=R.outputColorSpace,g=R.toneMapping,m.defines={},Le.getTransfer(y)===Ve&&(m.defines.SRGB_TRANSFER="");const F=y1[g];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,R.setRenderTarget(w),R.render(h,v),w=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const sx=new Nn,cp=new sl(1,1),rx=new kv,ox=new BM,lx=new Qv,ov=[],lv=[],cv=new Float32Array(16),uv=new Float32Array(9),fv=new Float32Array(4);function Zr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=ov[l];if(c===void 0&&(c=new Float32Array(l),ov[l]=c),t!==0){s.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,o[d].toArray(c,p)}return c}function _n(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function vn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function _u(o,t){let i=lv[t];i===void 0&&(i=new Int32Array(t),lv[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function E1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function b1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2fv(this.addr,t),vn(i,t)}}function T1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;o.uniform3fv(this.addr,t),vn(i,t)}}function A1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4fv(this.addr,t),vn(i,t)}}function R1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;fv.set(s),o.uniformMatrix2fv(this.addr,!1,fv),vn(i,s)}}function C1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;uv.set(s),o.uniformMatrix3fv(this.addr,!1,uv),vn(i,s)}}function w1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;cv.set(s),o.uniformMatrix4fv(this.addr,!1,cv),vn(i,s)}}function D1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function U1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2iv(this.addr,t),vn(i,t)}}function N1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;o.uniform3iv(this.addr,t),vn(i,t)}}function L1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4iv(this.addr,t),vn(i,t)}}function O1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function P1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2uiv(this.addr,t),vn(i,t)}}function F1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;o.uniform3uiv(this.addr,t),vn(i,t)}}function z1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4uiv(this.addr,t),vn(i,t)}}function B1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(cp.compareFunction=i.isReversedDepthBuffer()?yp:Sp,c=cp):c=sx,i.setTexture2D(t||c,l)}function I1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||ox,l)}function H1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||lx,l)}function G1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||rx,l)}function V1(o){switch(o){case 5126:return E1;case 35664:return b1;case 35665:return T1;case 35666:return A1;case 35674:return R1;case 35675:return C1;case 35676:return w1;case 5124:case 35670:return D1;case 35667:case 35671:return U1;case 35668:case 35672:return N1;case 35669:case 35673:return L1;case 5125:return O1;case 36294:return P1;case 36295:return F1;case 36296:return z1;case 35678:case 36198:case 36298:case 36306:case 35682:return B1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return G1}}function k1(o,t){o.uniform1fv(this.addr,t)}function X1(o,t){const i=Zr(t,this.size,2);o.uniform2fv(this.addr,i)}function W1(o,t){const i=Zr(t,this.size,3);o.uniform3fv(this.addr,i)}function q1(o,t){const i=Zr(t,this.size,4);o.uniform4fv(this.addr,i)}function j1(o,t){const i=Zr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Y1(o,t){const i=Zr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Z1(o,t){const i=Zr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function K1(o,t){o.uniform1iv(this.addr,t)}function Q1(o,t){o.uniform2iv(this.addr,t)}function J1(o,t){o.uniform3iv(this.addr,t)}function $1(o,t){o.uniform4iv(this.addr,t)}function tA(o,t){o.uniform1uiv(this.addr,t)}function eA(o,t){o.uniform2uiv(this.addr,t)}function nA(o,t){o.uniform3uiv(this.addr,t)}function iA(o,t){o.uniform4uiv(this.addr,t)}function aA(o,t,i){const s=this.cache,l=t.length,c=_u(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=cp:d=sx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,c[p])}function sA(o,t,i){const s=this.cache,l=t.length,c=_u(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||ox,c[d])}function rA(o,t,i){const s=this.cache,l=t.length,c=_u(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||lx,c[d])}function oA(o,t,i){const s=this.cache,l=t.length,c=_u(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||rx,c[d])}function lA(o){switch(o){case 5126:return k1;case 35664:return X1;case 35665:return W1;case 35666:return q1;case 35674:return j1;case 35675:return Y1;case 35676:return Z1;case 5124:case 35670:return K1;case 35667:case 35671:return Q1;case 35668:case 35672:return J1;case 35669:case 35673:return $1;case 5125:return tA;case 36294:return eA;case 36295:return nA;case 36296:return iA;case 35678:case 36198:case 36298:case 36306:case 35682:return aA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return oA}}class cA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=V1(i.type)}}class uA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=lA(i.type)}}class fA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const hh=/(\w+)(\])?(\[|\.)?/g;function dv(o,t){o.seq.push(t),o.map[t.id]=t}function dA(o,t,i){const s=o.name,l=s.length;for(hh.lastIndex=0;;){const c=hh.exec(s),d=hh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){dv(i,h===void 0?new cA(p,o,t):new uA(p,o,t));break}else{let y=i.map[p];y===void 0&&(y=new fA(p),dv(i,y)),i=y}}}class ru{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=t.getActiveUniform(i,d),m=t.getUniformLocation(i,p.name);dA(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function hv(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const hA=37297;let pA=0;function mA(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const pv=new xe;function gA(o){Le._getMatrix(pv,Le.workingColorSpace,o);const t=`mat3( ${pv.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case lu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function mv(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+mA(o.getShaderSource(t),p)}else return c}function _A(o,t){const i=gA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const vA={[Cv]:"Linear",[wv]:"Reinhard",[Dv]:"Cineon",[hp]:"ACESFilmic",[Nv]:"AgX",[Lv]:"Neutral",[Uv]:"Custom"};function xA(o,t){const i=vA[t];return i===void 0?(le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const $c=new it;function SA(){Le.getLuminanceCoefficients($c);const o=$c.x.toFixed(4),t=$c.y.toFixed(4),i=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function MA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function EA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),d=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:p}}return i}function el(o){return o!==""}function gv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _v(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bA=/^[ \t]*#include +<([\w\d./]+)>/gm;function up(o){return o.replace(bA,AA)}const TA=new Map;function AA(o,t){let i=Se[t];if(i===void 0){const s=TA.get(t);if(s!==void 0)i=Se[s],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return up(i)}const RA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vv(o){return o.replace(RA,CA)}function CA(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function xv(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const wA={[eu]:"SHADOWMAP_TYPE_PCF",[tl]:"SHADOWMAP_TYPE_VSM"};function DA(o){return wA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const UA={[Fs]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE",[mu]:"ENVMAP_TYPE_CUBE_UV"};function NA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":UA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const LA={[kr]:"ENVMAP_MODE_REFRACTION"};function OA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":LA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const PA={[Rv]:"ENVMAP_BLENDING_MULTIPLY",[gM]:"ENVMAP_BLENDING_MIX",[_M]:"ENVMAP_BLENDING_ADD"};function FA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":PA[o.combine]||"ENVMAP_BLENDING_NONE"}function zA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function BA(o,t,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=DA(i),h=NA(i),v=OA(i),y=FA(i),g=zA(i),M=yA(i),b=MA(c),w=l.createProgram();let S,_,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(el).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(el).join(`
`),_.length>0&&(_+=`
`)):(S=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),_=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+v:"",i.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?Se.tonemapping_pars_fragment:"",i.toneMapping!==Vi?xA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,_A("linearToOutputTexel",i.outputColorSpace),SA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(el).join(`
`)),d=up(d),d=gv(d,i),d=_v(d,i),p=up(p),p=gv(p,i),p=_v(p,i),d=vv(d),p=vv(p),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===T_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===T_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=R+S+d,D=R+_+p,I=hv(l,l.VERTEX_SHADER,L),F=hv(l,l.FRAGMENT_SHADER,D);l.attachShader(w,I),l.attachShader(w,F),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(H){if(o.debug.checkShaderErrors){const j=l.getProgramInfoLog(w)||"",X=l.getShaderInfoLog(I)||"",et=l.getShaderInfoLog(F)||"",$=j.trim(),O=X.trim(),B=et.trim();let rt=!0,ht=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(rt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,I,F);else{const Tt=mv(l,I,"vertex"),P=mv(l,F,"fragment");Ne("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+$+`
`+Tt+`
`+P)}else $!==""?le("WebGLProgram: Program Info Log:",$):(O===""||B==="")&&(ht=!1);ht&&(H.diagnostics={runnable:rt,programLog:$,vertexShader:{log:O,prefix:S},fragmentShader:{log:B,prefix:_}})}l.deleteShader(I),l.deleteShader(F),T=new ru(l,w),U=EA(l,w)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let mt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return mt===!1&&(mt=l.getProgramParameter(w,hA)),mt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=pA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=F,this}let IA=0;class HA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new GA(t),i.set(t,s)),s}}class GA{constructor(t){this.id=IA++,this.code=t,this.usedTimes=0}}function VA(o,t,i,s,l,c){const d=new Xv,p=new HA,m=new Set,h=[],v=new Map,y=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,U,mt,H,j){const X=H.fog,et=j.geometry,$=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,B=t.get(T.envMap||$,O),rt=B&&B.mapping===mu?B.image.height:null,ht=M[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&le("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const Tt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,P=Tt!==void 0?Tt.length:0;let Z=0;et.morphAttributes.position!==void 0&&(Z=1),et.morphAttributes.normal!==void 0&&(Z=2),et.morphAttributes.color!==void 0&&(Z=3);let at,Et,At,J;if(ht){const Ue=zi[ht];at=Ue.vertexShader,Et=Ue.fragmentShader}else at=T.vertexShader,Et=T.fragmentShader,p.update(T),At=p.getVertexShaderID(T),J=p.getFragmentShaderID(T);const G=o.getRenderTarget(),ut=o.state.buffers.depth.getReversed(),yt=j.isInstancedMesh===!0,Dt=j.isBatchedMesh===!0,Pt=!!T.map,Xt=!!T.matcap,Zt=!!B,qt=!!T.aoMap,re=!!T.lightMap,jt=!!T.bumpMap,he=!!T.normalMap,k=!!T.displacementMap,Te=!!T.emissiveMap,me=!!T.metalnessMap,Ae=!!T.roughnessMap,kt=T.anisotropy>0,N=T.clearcoat>0,E=T.dispersion>0,Q=T.iridescence>0,_t=T.sheen>0,bt=T.transmission>0,pt=kt&&!!T.anisotropyMap,Ft=N&&!!T.clearcoatMap,Nt=N&&!!T.clearcoatNormalMap,ee=N&&!!T.clearcoatRoughnessMap,ne=Q&&!!T.iridescenceMap,Rt=Q&&!!T.iridescenceThicknessMap,Ct=_t&&!!T.sheenColorMap,Ht=_t&&!!T.sheenRoughnessMap,zt=!!T.specularMap,Gt=!!T.specularColorMap,ge=!!T.specularIntensityMap,K=bt&&!!T.transmissionMap,Lt=bt&&!!T.thicknessMap,Ut=!!T.gradientMap,Vt=!!T.alphaMap,wt=T.alphaTest>0,gt=!!T.alphaHash,Yt=!!T.extensions;let ce=Vi;T.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(ce=o.toneMapping);const Ie={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:at,fragmentShader:Et,defines:T.defines,customVertexShaderID:At,customFragmentShaderID:J,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Dt,batchingColor:Dt&&j._colorsTexture!==null,instancing:yt,instancingColor:yt&&j.instanceColor!==null,instancingMorph:yt&&j.morphTexture!==null,outputColorSpace:G===null?o.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Wr,alphaToCoverage:!!T.alphaToCoverage,map:Pt,matcap:Xt,envMap:Zt,envMapMode:Zt&&B.mapping,envMapCubeUVHeight:rt,aoMap:qt,lightMap:re,bumpMap:jt,normalMap:he,displacementMap:k,emissiveMap:Te,normalMapObjectSpace:he&&T.normalMapType===yM,normalMapTangentSpace:he&&T.normalMapType===SM,metalnessMap:me,roughnessMap:Ae,anisotropy:kt,anisotropyMap:pt,clearcoat:N,clearcoatMap:Ft,clearcoatNormalMap:Nt,clearcoatRoughnessMap:ee,dispersion:E,iridescence:Q,iridescenceMap:ne,iridescenceThicknessMap:Rt,sheen:_t,sheenColorMap:Ct,sheenRoughnessMap:Ht,specularMap:zt,specularColorMap:Gt,specularIntensityMap:ge,transmission:bt,transmissionMap:K,thicknessMap:Lt,gradientMap:Ut,opaque:T.transparent===!1&&T.blending===Hr&&T.alphaToCoverage===!1,alphaMap:Vt,alphaTest:wt,alphaHash:gt,combine:T.combine,mapUv:Pt&&b(T.map.channel),aoMapUv:qt&&b(T.aoMap.channel),lightMapUv:re&&b(T.lightMap.channel),bumpMapUv:jt&&b(T.bumpMap.channel),normalMapUv:he&&b(T.normalMap.channel),displacementMapUv:k&&b(T.displacementMap.channel),emissiveMapUv:Te&&b(T.emissiveMap.channel),metalnessMapUv:me&&b(T.metalnessMap.channel),roughnessMapUv:Ae&&b(T.roughnessMap.channel),anisotropyMapUv:pt&&b(T.anisotropyMap.channel),clearcoatMapUv:Ft&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&b(T.sheenRoughnessMap.channel),specularMapUv:zt&&b(T.specularMap.channel),specularColorMapUv:Gt&&b(T.specularColorMap.channel),specularIntensityMapUv:ge&&b(T.specularIntensityMap.channel),transmissionMapUv:K&&b(T.transmissionMap.channel),thicknessMapUv:Lt&&b(T.thicknessMap.channel),alphaMapUv:Vt&&b(T.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(he||kt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!et.attributes.uv&&(Pt||Vt),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||et.attributes.normal===void 0&&he===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:ut,skinning:j.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:Z,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&mt.length>0,shadowMapType:o.shadowMap.type,toneMapping:ce,decodeVideoTexture:Pt&&T.map.isVideoTexture===!0&&Le.getTransfer(T.map.colorSpace)===Ve,decodeVideoTextureEmissive:Te&&T.emissiveMap.isVideoTexture===!0&&Le.getTransfer(T.emissiveMap.colorSpace)===Ve,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bi,flipSided:T.side===jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Yt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&T.extensions.multiDraw===!0||Dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ie.vertexUv1s=m.has(1),Ie.vertexUv2s=m.has(2),Ie.vertexUv3s=m.has(3),m.clear(),Ie}function S(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const mt in T.defines)U.push(mt),U.push(T.defines[mt]);return T.isRawShaderMaterial===!1&&(_(U,T),R(U,T),U.push(o.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function _(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function R(T,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),T.push(d.mask)}function L(T){const U=M[T.type];let mt;if(U){const H=zi[U];mt=lE.clone(H.uniforms)}else mt=T.uniforms;return mt}function D(T,U){let mt=v.get(U);return mt!==void 0?++mt.usedTimes:(mt=new BA(o,U,T,l),h.push(mt),v.set(U,mt)),mt}function I(T){if(--T.usedTimes===0){const U=h.indexOf(T);h[U]=h[h.length-1],h.pop(),v.delete(T.cacheKey),T.destroy()}}function F(T){p.remove(T)}function z(){p.dispose()}return{getParameters:w,getProgramCacheKey:S,getUniforms:L,acquireProgram:D,releaseProgram:I,releaseShaderCache:F,programs:h,dispose:z}}function kA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function s(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function XA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function Sv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function yv(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,b,w,S,_){let R=o[t];return R===void 0?(R={id:g.id,object:g,geometry:M,material:b,materialVariant:d(g),groupOrder:w,renderOrder:g.renderOrder,z:S,group:_},o[t]=R):(R.id=g.id,R.object=g,R.geometry=M,R.material=b,R.materialVariant=d(g),R.groupOrder=w,R.renderOrder=g.renderOrder,R.z=S,R.group=_),t++,R}function m(g,M,b,w,S,_){const R=p(g,M,b,w,S,_);b.transmission>0?s.push(R):b.transparent===!0?l.push(R):i.push(R)}function h(g,M,b,w,S,_){const R=p(g,M,b,w,S,_);b.transmission>0?s.unshift(R):b.transparent===!0?l.unshift(R):i.unshift(R)}function v(g,M){i.length>1&&i.sort(g||XA),s.length>1&&s.sort(M||Sv),l.length>1&&l.sort(M||Sv)}function y(){for(let g=t,M=o.length;g<M;g++){const b=o[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:y,sort:v}}function WA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let d;return c===void 0?(d=new yv,o.set(s,[d])):l>=c.length?(d=new yv,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function qA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new it,color:new ye};break;case"SpotLight":i={position:new it,direction:new it,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new it,halfWidth:new it,halfHeight:new it};break}return o[t.id]=i,i}}}function jA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let YA=0;function ZA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function KA(o){const t=new qA,i=jA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new it);const l=new it,c=new Ke,d=new Ke;function p(h){let v=0,y=0,g=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let M=0,b=0,w=0,S=0,_=0,R=0,L=0,D=0,I=0,F=0,z=0;h.sort(ZA);for(let U=0,mt=h.length;U<mt;U++){const H=h[U],j=H.color,X=H.intensity,et=H.distance;let $=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Xr?$=H.shadow.map.texture:$=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=j.r*X,y+=j.g*X,g+=j.b*X;else if(H.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(H.sh.coefficients[O],X);z++}else if(H.isDirectionalLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const B=H.shadow,rt=i.get(H);rt.shadowIntensity=B.intensity,rt.shadowBias=B.bias,rt.shadowNormalBias=B.normalBias,rt.shadowRadius=B.radius,rt.shadowMapSize=B.mapSize,s.directionalShadow[M]=rt,s.directionalShadowMap[M]=$,s.directionalShadowMatrix[M]=H.shadow.matrix,R++}s.directional[M]=O,M++}else if(H.isSpotLight){const O=t.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(j).multiplyScalar(X),O.distance=et,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,s.spot[w]=O;const B=H.shadow;if(H.map&&(s.spotLightMap[I]=H.map,I++,B.updateMatrices(H),H.castShadow&&F++),s.spotLightMatrix[w]=B.matrix,H.castShadow){const rt=i.get(H);rt.shadowIntensity=B.intensity,rt.shadowBias=B.bias,rt.shadowNormalBias=B.normalBias,rt.shadowRadius=B.radius,rt.shadowMapSize=B.mapSize,s.spotShadow[w]=rt,s.spotShadowMap[w]=$,D++}w++}else if(H.isRectAreaLight){const O=t.get(H);O.color.copy(j).multiplyScalar(X),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=O,S++}else if(H.isPointLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const B=H.shadow,rt=i.get(H);rt.shadowIntensity=B.intensity,rt.shadowBias=B.bias,rt.shadowNormalBias=B.normalBias,rt.shadowRadius=B.radius,rt.shadowMapSize=B.mapSize,rt.shadowCameraNear=B.camera.near,rt.shadowCameraFar=B.camera.far,s.pointShadow[b]=rt,s.pointShadowMap[b]=$,s.pointShadowMatrix[b]=H.shadow.matrix,L++}s.point[b]=O,b++}else if(H.isHemisphereLight){const O=t.get(H);O.skyColor.copy(H.color).multiplyScalar(X),O.groundColor.copy(H.groundColor).multiplyScalar(X),s.hemi[_]=O,_++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=y,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==S||T.hemiLength!==_||T.numDirectionalShadows!==R||T.numPointShadows!==L||T.numSpotShadows!==D||T.numSpotMaps!==I||T.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=S,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+I-F,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=z,T.directionalLength=M,T.pointLength=b,T.spotLength=w,T.rectAreaLength=S,T.hemiLength=_,T.numDirectionalShadows=R,T.numPointShadows=L,T.numSpotShadows=D,T.numSpotMaps=I,T.numLightProbes=z,s.version=YA++)}function m(h,v){let y=0,g=0,M=0,b=0,w=0;const S=v.matrixWorldInverse;for(let _=0,R=h.length;_<R;_++){const L=h[_];if(L.isDirectionalLight){const D=s.directional[y];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),y++}else if(L.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),d.identity(),c.copy(L.matrixWorld),c.premultiply(S),d.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),b++}else if(L.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),g++}else if(L.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(S),w++}}}return{setup:p,setupView:m,state:s}}function Mv(o){const t=new KA(o),i=[],s=[];function l(v){h.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function d(v){s.push(v)}function p(){t.setup(i)}function m(v){t.setupView(i,v)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function QA(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new Mv(o),t.set(l,[p])):c>=d.length?(p=new Mv(o),d.push(p)):p=d[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const JA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$A=`uniform sampler2D shadow_pass;
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
}`,tR=[new it(1,0,0),new it(-1,0,0),new it(0,1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1)],eR=[new it(0,-1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1),new it(0,-1,0),new it(0,-1,0)],Ev=new Ke,Qo=new it,ph=new it;function nR(o,t,i){let s=new Ap;const l=new be,c=new be,d=new nn,p=new dE,m=new hE,h={},v=i.maxTextureSize,y={[as]:jn,[jn]:as,[Bi]:Bi},g=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:JA,fragmentShader:$A}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ln;b.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Wi(b,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu;let _=this.type;this.render=function(F,z,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;this.type===Qy&&(le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=eu);const U=o.getRenderTarget(),mt=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),j=o.state;j.setBlending(va),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const X=_!==this.type;X&&z.traverse(function(et){et.material&&(Array.isArray(et.material)?et.material.forEach($=>$.needsUpdate=!0):et.material.needsUpdate=!0)});for(let et=0,$=F.length;et<$;et++){const O=F[et],B=O.shadow;if(B===void 0){le("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const rt=B.getFrameExtents();l.multiply(rt),c.copy(B.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/rt.x),l.x=c.x*rt.x,B.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/rt.y),l.y=c.y*rt.y,B.mapSize.y=c.y));const ht=o.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ht,B.map===null||X===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===tl){if(O.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ki(l.x,l.y,{format:Xr,type:Sa,minFilter:Un,magFilter:Un,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new sl(l.x,l.y,Hi),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=ya,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Tn,B.map.depthTexture.magFilter=Tn}else O.isPointLight?(B.map=new ax(l.x),B.map.depthTexture=new rE(l.x,Xi)):(B.map=new ki(l.x,l.y),B.map.depthTexture=new sl(l.x,l.y,Xi)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=ya,this.type===eu?(B.map.depthTexture.compareFunction=ht?yp:Sp,B.map.depthTexture.minFilter=Un,B.map.depthTexture.magFilter=Un):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Tn,B.map.depthTexture.magFilter=Tn);B.camera.updateProjectionMatrix()}const Tt=B.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Tt;P++){if(B.map.isWebGLCubeRenderTarget)o.setRenderTarget(B.map,P),o.clear();else{P===0&&(o.setRenderTarget(B.map),o.clear());const Z=B.getViewport(P);d.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),j.viewport(d)}if(O.isPointLight){const Z=B.camera,at=B.matrix,Et=O.distance||Z.far;Et!==Z.far&&(Z.far=Et,Z.updateProjectionMatrix()),Qo.setFromMatrixPosition(O.matrixWorld),Z.position.copy(Qo),ph.copy(Z.position),ph.add(tR[P]),Z.up.copy(eR[P]),Z.lookAt(ph),Z.updateMatrixWorld(),at.makeTranslation(-Qo.x,-Qo.y,-Qo.z),Ev.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Ev,Z.coordinateSystem,Z.reversedDepth)}else B.updateMatrices(O);s=B.getFrustum(),D(z,T,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===tl&&R(B,T),B.needsUpdate=!1}_=this.type,S.needsUpdate=!1,o.setRenderTarget(U,mt,H)};function R(F,z){const T=t.update(w);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ki(l.x,l.y,{format:Xr,type:Sa})),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(z,null,T,g,w,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(z,null,T,M,w,null)}function L(F,z,T,U){let mt=null;const H=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)mt=H;else if(mt=T.isPointLight===!0?m:p,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const j=mt.uuid,X=z.uuid;let et=h[j];et===void 0&&(et={},h[j]=et);let $=et[X];$===void 0&&($=mt.clone(),et[X]=$,z.addEventListener("dispose",I)),mt=$}if(mt.visible=z.visible,mt.wireframe=z.wireframe,U===tl?mt.side=z.shadowSide!==null?z.shadowSide:z.side:mt.side=z.shadowSide!==null?z.shadowSide:y[z.side],mt.alphaMap=z.alphaMap,mt.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,mt.map=z.map,mt.clipShadows=z.clipShadows,mt.clippingPlanes=z.clippingPlanes,mt.clipIntersection=z.clipIntersection,mt.displacementMap=z.displacementMap,mt.displacementScale=z.displacementScale,mt.displacementBias=z.displacementBias,mt.wireframeLinewidth=z.wireframeLinewidth,mt.linewidth=z.linewidth,T.isPointLight===!0&&mt.isMeshDistanceMaterial===!0){const j=o.properties.get(mt);j.light=T}return mt}function D(F,z,T,U,mt){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&mt===tl)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);const X=t.update(F),et=F.material;if(Array.isArray(et)){const $=X.groups;for(let O=0,B=$.length;O<B;O++){const rt=$[O],ht=et[rt.materialIndex];if(ht&&ht.visible){const Tt=L(F,ht,U,mt);F.onBeforeShadow(o,F,z,T,X,Tt,rt),o.renderBufferDirect(T,null,X,Tt,F,rt),F.onAfterShadow(o,F,z,T,X,Tt,rt)}}}else if(et.visible){const $=L(F,et,U,mt);F.onBeforeShadow(o,F,z,T,X,$,null),o.renderBufferDirect(T,null,X,$,F,null),F.onAfterShadow(o,F,z,T,X,$,null)}}const j=F.children;for(let X=0,et=j.length;X<et;X++)D(j[X],z,T,U,mt)}function I(F){F.target.removeEventListener("dispose",I);for(const T in h){const U=h[T],mt=F.target.uuid;mt in U&&(U[mt].dispose(),delete U[mt])}}}function iR(o,t){function i(){let K=!1;const Lt=new nn;let Ut=null;const Vt=new nn(0,0,0,0);return{setMask:function(wt){Ut!==wt&&!K&&(o.colorMask(wt,wt,wt,wt),Ut=wt)},setLocked:function(wt){K=wt},setClear:function(wt,gt,Yt,ce,Ie){Ie===!0&&(wt*=ce,gt*=ce,Yt*=ce),Lt.set(wt,gt,Yt,ce),Vt.equals(Lt)===!1&&(o.clearColor(wt,gt,Yt,ce),Vt.copy(Lt))},reset:function(){K=!1,Ut=null,Vt.set(-1,0,0,0)}}}function s(){let K=!1,Lt=!1,Ut=null,Vt=null,wt=null;return{setReversed:function(gt){if(Lt!==gt){const Yt=t.get("EXT_clip_control");gt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Lt=gt;const ce=wt;wt=null,this.setClear(ce)}},getReversed:function(){return Lt},setTest:function(gt){gt?G(o.DEPTH_TEST):ut(o.DEPTH_TEST)},setMask:function(gt){Ut!==gt&&!K&&(o.depthMask(gt),Ut=gt)},setFunc:function(gt){if(Lt&&(gt=UM[gt]),Vt!==gt){switch(gt){case vh:o.depthFunc(o.NEVER);break;case xh:o.depthFunc(o.ALWAYS);break;case Sh:o.depthFunc(o.LESS);break;case Vr:o.depthFunc(o.LEQUAL);break;case yh:o.depthFunc(o.EQUAL);break;case Mh:o.depthFunc(o.GEQUAL);break;case Eh:o.depthFunc(o.GREATER);break;case bh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Vt=gt}},setLocked:function(gt){K=gt},setClear:function(gt){wt!==gt&&(wt=gt,Lt&&(gt=1-gt),o.clearDepth(gt))},reset:function(){K=!1,Ut=null,Vt=null,wt=null,Lt=!1}}}function l(){let K=!1,Lt=null,Ut=null,Vt=null,wt=null,gt=null,Yt=null,ce=null,Ie=null;return{setTest:function(Ue){K||(Ue?G(o.STENCIL_TEST):ut(o.STENCIL_TEST))},setMask:function(Ue){Lt!==Ue&&!K&&(o.stencilMask(Ue),Lt=Ue)},setFunc:function(Ue,On,xi){(Ut!==Ue||Vt!==On||wt!==xi)&&(o.stencilFunc(Ue,On,xi),Ut=Ue,Vt=On,wt=xi)},setOp:function(Ue,On,xi){(gt!==Ue||Yt!==On||ce!==xi)&&(o.stencilOp(Ue,On,xi),gt=Ue,Yt=On,ce=xi)},setLocked:function(Ue){K=Ue},setClear:function(Ue){Ie!==Ue&&(o.clearStencil(Ue),Ie=Ue)},reset:function(){K=!1,Lt=null,Ut=null,Vt=null,wt=null,gt=null,Yt=null,ce=null,Ie=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let v={},y={},g=new WeakMap,M=[],b=null,w=!1,S=null,_=null,R=null,L=null,D=null,I=null,F=null,z=new ye(0,0,0),T=0,U=!1,mt=null,H=null,j=null,X=null,et=null;const $=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,B=0;const rt=o.getParameter(o.VERSION);rt.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(rt)[1]),O=B>=1):rt.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),O=B>=2);let ht=null,Tt={};const P=o.getParameter(o.SCISSOR_BOX),Z=o.getParameter(o.VIEWPORT),at=new nn().fromArray(P),Et=new nn().fromArray(Z);function At(K,Lt,Ut,Vt){const wt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(K,gt),o.texParameteri(K,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(K,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Yt=0;Yt<Ut;Yt++)K===o.TEXTURE_3D||K===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,Vt,0,o.RGBA,o.UNSIGNED_BYTE,wt):o.texImage2D(Lt+Yt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,wt);return gt}const J={};J[o.TEXTURE_2D]=At(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=At(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=At(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=At(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),G(o.DEPTH_TEST),d.setFunc(Vr),jt(!1),he(S_),G(o.CULL_FACE),qt(va);function G(K){v[K]!==!0&&(o.enable(K),v[K]=!0)}function ut(K){v[K]!==!1&&(o.disable(K),v[K]=!1)}function yt(K,Lt){return y[K]!==Lt?(o.bindFramebuffer(K,Lt),y[K]=Lt,K===o.DRAW_FRAMEBUFFER&&(y[o.FRAMEBUFFER]=Lt),K===o.FRAMEBUFFER&&(y[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Dt(K,Lt){let Ut=M,Vt=!1;if(K){Ut=g.get(Lt),Ut===void 0&&(Ut=[],g.set(Lt,Ut));const wt=K.textures;if(Ut.length!==wt.length||Ut[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Yt=wt.length;gt<Yt;gt++)Ut[gt]=o.COLOR_ATTACHMENT0+gt;Ut.length=wt.length,Vt=!0}}else Ut[0]!==o.BACK&&(Ut[0]=o.BACK,Vt=!0);Vt&&o.drawBuffers(Ut)}function Pt(K){return b!==K?(o.useProgram(K),b=K,!0):!1}const Xt={[Ns]:o.FUNC_ADD,[$y]:o.FUNC_SUBTRACT,[tM]:o.FUNC_REVERSE_SUBTRACT};Xt[eM]=o.MIN,Xt[nM]=o.MAX;const Zt={[iM]:o.ZERO,[aM]:o.ONE,[sM]:o.SRC_COLOR,[gh]:o.SRC_ALPHA,[fM]:o.SRC_ALPHA_SATURATE,[cM]:o.DST_COLOR,[oM]:o.DST_ALPHA,[rM]:o.ONE_MINUS_SRC_COLOR,[_h]:o.ONE_MINUS_SRC_ALPHA,[uM]:o.ONE_MINUS_DST_COLOR,[lM]:o.ONE_MINUS_DST_ALPHA,[dM]:o.CONSTANT_COLOR,[hM]:o.ONE_MINUS_CONSTANT_COLOR,[pM]:o.CONSTANT_ALPHA,[mM]:o.ONE_MINUS_CONSTANT_ALPHA};function qt(K,Lt,Ut,Vt,wt,gt,Yt,ce,Ie,Ue){if(K===va){w===!0&&(ut(o.BLEND),w=!1);return}if(w===!1&&(G(o.BLEND),w=!0),K!==Jy){if(K!==S||Ue!==U){if((_!==Ns||D!==Ns)&&(o.blendEquation(o.FUNC_ADD),_=Ns,D=Ns),Ue)switch(K){case Hr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case y_:o.blendFunc(o.ONE,o.ONE);break;case M_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case E_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ne("WebGLState: Invalid blending: ",K);break}else switch(K){case Hr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case y_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case M_:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case E_:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",K);break}R=null,L=null,I=null,F=null,z.set(0,0,0),T=0,S=K,U=Ue}return}wt=wt||Lt,gt=gt||Ut,Yt=Yt||Vt,(Lt!==_||wt!==D)&&(o.blendEquationSeparate(Xt[Lt],Xt[wt]),_=Lt,D=wt),(Ut!==R||Vt!==L||gt!==I||Yt!==F)&&(o.blendFuncSeparate(Zt[Ut],Zt[Vt],Zt[gt],Zt[Yt]),R=Ut,L=Vt,I=gt,F=Yt),(ce.equals(z)===!1||Ie!==T)&&(o.blendColor(ce.r,ce.g,ce.b,Ie),z.copy(ce),T=Ie),S=K,U=!1}function re(K,Lt){K.side===Bi?ut(o.CULL_FACE):G(o.CULL_FACE);let Ut=K.side===jn;Lt&&(Ut=!Ut),jt(Ut),K.blending===Hr&&K.transparent===!1?qt(va):qt(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),d.setFunc(K.depthFunc),d.setTest(K.depthTest),d.setMask(K.depthWrite),c.setMask(K.colorWrite);const Vt=K.stencilWrite;p.setTest(Vt),Vt&&(p.setMask(K.stencilWriteMask),p.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),p.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Te(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?G(o.SAMPLE_ALPHA_TO_COVERAGE):ut(o.SAMPLE_ALPHA_TO_COVERAGE)}function jt(K){mt!==K&&(K?o.frontFace(o.CW):o.frontFace(o.CCW),mt=K)}function he(K){K!==Zy?(G(o.CULL_FACE),K!==H&&(K===S_?o.cullFace(o.BACK):K===Ky?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ut(o.CULL_FACE),H=K}function k(K){K!==j&&(O&&o.lineWidth(K),j=K)}function Te(K,Lt,Ut){K?(G(o.POLYGON_OFFSET_FILL),(X!==Lt||et!==Ut)&&(X=Lt,et=Ut,d.getReversed()&&(Lt=-Lt),o.polygonOffset(Lt,Ut))):ut(o.POLYGON_OFFSET_FILL)}function me(K){K?G(o.SCISSOR_TEST):ut(o.SCISSOR_TEST)}function Ae(K){K===void 0&&(K=o.TEXTURE0+$-1),ht!==K&&(o.activeTexture(K),ht=K)}function kt(K,Lt,Ut){Ut===void 0&&(ht===null?Ut=o.TEXTURE0+$-1:Ut=ht);let Vt=Tt[Ut];Vt===void 0&&(Vt={type:void 0,texture:void 0},Tt[Ut]=Vt),(Vt.type!==K||Vt.texture!==Lt)&&(ht!==Ut&&(o.activeTexture(Ut),ht=Ut),o.bindTexture(K,Lt||J[K]),Vt.type=K,Vt.texture=Lt)}function N(){const K=Tt[ht];K!==void 0&&K.type!==void 0&&(o.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(K){Ne("WebGLState:",K)}}function Q(){try{o.compressedTexImage3D(...arguments)}catch(K){Ne("WebGLState:",K)}}function _t(){try{o.texSubImage2D(...arguments)}catch(K){Ne("WebGLState:",K)}}function bt(){try{o.texSubImage3D(...arguments)}catch(K){Ne("WebGLState:",K)}}function pt(){try{o.compressedTexSubImage2D(...arguments)}catch(K){Ne("WebGLState:",K)}}function Ft(){try{o.compressedTexSubImage3D(...arguments)}catch(K){Ne("WebGLState:",K)}}function Nt(){try{o.texStorage2D(...arguments)}catch(K){Ne("WebGLState:",K)}}function ee(){try{o.texStorage3D(...arguments)}catch(K){Ne("WebGLState:",K)}}function ne(){try{o.texImage2D(...arguments)}catch(K){Ne("WebGLState:",K)}}function Rt(){try{o.texImage3D(...arguments)}catch(K){Ne("WebGLState:",K)}}function Ct(K){at.equals(K)===!1&&(o.scissor(K.x,K.y,K.z,K.w),at.copy(K))}function Ht(K){Et.equals(K)===!1&&(o.viewport(K.x,K.y,K.z,K.w),Et.copy(K))}function zt(K,Lt){let Ut=h.get(Lt);Ut===void 0&&(Ut=new WeakMap,h.set(Lt,Ut));let Vt=Ut.get(K);Vt===void 0&&(Vt=o.getUniformBlockIndex(Lt,K.name),Ut.set(K,Vt))}function Gt(K,Lt){const Vt=h.get(Lt).get(K);m.get(Lt)!==Vt&&(o.uniformBlockBinding(Lt,Vt,K.__bindingPointIndex),m.set(Lt,Vt))}function ge(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},ht=null,Tt={},y={},g=new WeakMap,M=[],b=null,w=!1,S=null,_=null,R=null,L=null,D=null,I=null,F=null,z=new ye(0,0,0),T=0,U=!1,mt=null,H=null,j=null,X=null,et=null,at.set(0,0,o.canvas.width,o.canvas.height),Et.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:G,disable:ut,bindFramebuffer:yt,drawBuffers:Dt,useProgram:Pt,setBlending:qt,setMaterial:re,setFlipSided:jt,setCullFace:he,setLineWidth:k,setPolygonOffset:Te,setScissorTest:me,activeTexture:Ae,bindTexture:kt,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:Q,texImage2D:ne,texImage3D:Rt,updateUBOMapping:zt,uniformBlockBinding:Gt,texStorage2D:Nt,texStorage3D:ee,texSubImage2D:_t,texSubImage3D:bt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Ft,scissor:Ct,viewport:Ht,reset:ge}}function aR(o,t,i,s,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new be,v=new WeakMap;let y;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return M?new OffscreenCanvas(N,E):cu("canvas")}function w(N,E,Q){let _t=1;const bt=kt(N);if((bt.width>Q||bt.height>Q)&&(_t=Q/Math.max(bt.width,bt.height)),_t<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const pt=Math.floor(_t*bt.width),Ft=Math.floor(_t*bt.height);y===void 0&&(y=b(pt,Ft));const Nt=E?b(pt,Ft):y;return Nt.width=pt,Nt.height=Ft,Nt.getContext("2d").drawImage(N,0,0,pt,Ft),le("WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+pt+"x"+Ft+")."),Nt}else return"data"in N&&le("WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),N;return N}function S(N){return N.generateMipmaps}function _(N){o.generateMipmap(N)}function R(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(N,E,Q,_t,bt=!1){if(N!==null){if(o[N]!==void 0)return o[N];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pt=E;if(E===o.RED&&(Q===o.FLOAT&&(pt=o.R32F),Q===o.HALF_FLOAT&&(pt=o.R16F),Q===o.UNSIGNED_BYTE&&(pt=o.R8)),E===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(pt=o.R8UI),Q===o.UNSIGNED_SHORT&&(pt=o.R16UI),Q===o.UNSIGNED_INT&&(pt=o.R32UI),Q===o.BYTE&&(pt=o.R8I),Q===o.SHORT&&(pt=o.R16I),Q===o.INT&&(pt=o.R32I)),E===o.RG&&(Q===o.FLOAT&&(pt=o.RG32F),Q===o.HALF_FLOAT&&(pt=o.RG16F),Q===o.UNSIGNED_BYTE&&(pt=o.RG8)),E===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(pt=o.RG8UI),Q===o.UNSIGNED_SHORT&&(pt=o.RG16UI),Q===o.UNSIGNED_INT&&(pt=o.RG32UI),Q===o.BYTE&&(pt=o.RG8I),Q===o.SHORT&&(pt=o.RG16I),Q===o.INT&&(pt=o.RG32I)),E===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),Q===o.UNSIGNED_INT&&(pt=o.RGB32UI),Q===o.BYTE&&(pt=o.RGB8I),Q===o.SHORT&&(pt=o.RGB16I),Q===o.INT&&(pt=o.RGB32I)),E===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),Q===o.UNSIGNED_INT&&(pt=o.RGBA32UI),Q===o.BYTE&&(pt=o.RGBA8I),Q===o.SHORT&&(pt=o.RGBA16I),Q===o.INT&&(pt=o.RGBA32I)),E===o.RGB&&(Q===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(pt=o.R11F_G11F_B10F)),E===o.RGBA){const Ft=bt?lu:Le.getTransfer(_t);Q===o.FLOAT&&(pt=o.RGBA32F),Q===o.HALF_FLOAT&&(pt=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(pt=Ft===Ve?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function D(N,E){let Q;return N?E===null||E===Xi||E===il?Q=o.DEPTH24_STENCIL8:E===Hi?Q=o.DEPTH32F_STENCIL8:E===nl&&(Q=o.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===il?Q=o.DEPTH_COMPONENT24:E===Hi?Q=o.DEPTH_COMPONENT32F:E===nl&&(Q=o.DEPTH_COMPONENT16),Q}function I(N,E){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Tn&&N.minFilter!==Un?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function F(N){const E=N.target;E.removeEventListener("dispose",F),T(E),E.isVideoTexture&&v.delete(E)}function z(N){const E=N.target;E.removeEventListener("dispose",z),mt(E)}function T(N){const E=s.get(N);if(E.__webglInit===void 0)return;const Q=N.source,_t=g.get(Q);if(_t){const bt=_t[E.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&U(N),Object.keys(_t).length===0&&g.delete(Q)}s.remove(N)}function U(N){const E=s.get(N);o.deleteTexture(E.__webglTexture);const Q=N.source,_t=g.get(Q);delete _t[E.__cacheKey],d.memory.textures--}function mt(N){const E=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(E.__webglFramebuffer[_t]))for(let bt=0;bt<E.__webglFramebuffer[_t].length;bt++)o.deleteFramebuffer(E.__webglFramebuffer[_t][bt]);else o.deleteFramebuffer(E.__webglFramebuffer[_t]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[_t])}else{if(Array.isArray(E.__webglFramebuffer))for(let _t=0;_t<E.__webglFramebuffer.length;_t++)o.deleteFramebuffer(E.__webglFramebuffer[_t]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _t=0;_t<E.__webglColorRenderbuffer.length;_t++)E.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[_t]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=N.textures;for(let _t=0,bt=Q.length;_t<bt;_t++){const pt=s.get(Q[_t]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),d.memory.textures--),s.remove(Q[_t])}s.remove(N)}let H=0;function j(){H=0}function X(){const N=H;return N>=l.maxTextures&&le("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),H+=1,N}function et(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function $(N,E){const Q=s.get(N);if(N.isVideoTexture&&me(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Q.__version!==N.version){const _t=N.image;if(_t===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{J(Q,N,E);return}}else N.isExternalTexture&&(Q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+E)}function O(N,E){const Q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){J(Q,N,E);return}else N.isExternalTexture&&(Q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+E)}function B(N,E){const Q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){J(Q,N,E);return}i.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+E)}function rt(N,E){const Q=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Q.__version!==N.version){G(Q,N,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+E)}const ht={[Th]:o.REPEAT,[_a]:o.CLAMP_TO_EDGE,[Ah]:o.MIRRORED_REPEAT},Tt={[Tn]:o.NEAREST,[vM]:o.NEAREST_MIPMAP_NEAREST,[bc]:o.NEAREST_MIPMAP_LINEAR,[Un]:o.LINEAR,[Pd]:o.LINEAR_MIPMAP_NEAREST,[Os]:o.LINEAR_MIPMAP_LINEAR},P={[MM]:o.NEVER,[RM]:o.ALWAYS,[EM]:o.LESS,[Sp]:o.LEQUAL,[bM]:o.EQUAL,[yp]:o.GEQUAL,[TM]:o.GREATER,[AM]:o.NOTEQUAL};function Z(N,E){if(E.type===Hi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Un||E.magFilter===Pd||E.magFilter===bc||E.magFilter===Os||E.minFilter===Un||E.minFilter===Pd||E.minFilter===bc||E.minFilter===Os)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,ht[E.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,ht[E.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,ht[E.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,Tt[E.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,Tt[E.minFilter]),E.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==bc&&E.minFilter!==Os||E.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(N,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function at(N,E){let Q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",F));const _t=E.source;let bt=g.get(_t);bt===void 0&&(bt={},g.set(_t,bt));const pt=et(E);if(pt!==N.__cacheKey){bt[pt]===void 0&&(bt[pt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),bt[pt].usedTimes++;const Ft=bt[N.__cacheKey];Ft!==void 0&&(bt[N.__cacheKey].usedTimes--,Ft.usedTimes===0&&U(E)),N.__cacheKey=pt,N.__webglTexture=bt[pt].texture}return Q}function Et(N,E,Q){return Math.floor(Math.floor(N/Q)/E)}function At(N,E,Q,_t){const pt=N.updateRanges;if(pt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Q,_t,E.data);else{pt.sort((Rt,Ct)=>Rt.start-Ct.start);let Ft=0;for(let Rt=1;Rt<pt.length;Rt++){const Ct=pt[Ft],Ht=pt[Rt],zt=Ct.start+Ct.count,Gt=Et(Ht.start,E.width,4),ge=Et(Ct.start,E.width,4);Ht.start<=zt+1&&Gt===ge&&Et(Ht.start+Ht.count-1,E.width,4)===Gt?Ct.count=Math.max(Ct.count,Ht.start+Ht.count-Ct.start):(++Ft,pt[Ft]=Ht)}pt.length=Ft+1;const Nt=o.getParameter(o.UNPACK_ROW_LENGTH),ee=o.getParameter(o.UNPACK_SKIP_PIXELS),ne=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Rt=0,Ct=pt.length;Rt<Ct;Rt++){const Ht=pt[Rt],zt=Math.floor(Ht.start/4),Gt=Math.ceil(Ht.count/4),ge=zt%E.width,K=Math.floor(zt/E.width),Lt=Gt,Ut=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ge),o.pixelStorei(o.UNPACK_SKIP_ROWS,K),i.texSubImage2D(o.TEXTURE_2D,0,ge,K,Lt,Ut,Q,_t,E.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Nt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,ee),o.pixelStorei(o.UNPACK_SKIP_ROWS,ne)}}function J(N,E,Q){let _t=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_t=o.TEXTURE_3D);const bt=at(N,E),pt=E.source;i.bindTexture(_t,N.__webglTexture,o.TEXTURE0+Q);const Ft=s.get(pt);if(pt.version!==Ft.__version||bt===!0){i.activeTexture(o.TEXTURE0+Q);const Nt=Le.getPrimaries(Le.workingColorSpace),ee=E.colorSpace===es?null:Le.getPrimaries(E.colorSpace),ne=E.colorSpace===es||Nt===ee?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Rt=w(E.image,!1,l.maxTextureSize);Rt=Ae(E,Rt);const Ct=c.convert(E.format,E.colorSpace),Ht=c.convert(E.type);let zt=L(E.internalFormat,Ct,Ht,E.colorSpace,E.isVideoTexture);Z(_t,E);let Gt;const ge=E.mipmaps,K=E.isVideoTexture!==!0,Lt=Ft.__version===void 0||bt===!0,Ut=pt.dataReady,Vt=I(E,Rt);if(E.isDepthTexture)zt=D(E.format===Ps,E.type),Lt&&(K?i.texStorage2D(o.TEXTURE_2D,1,zt,Rt.width,Rt.height):i.texImage2D(o.TEXTURE_2D,0,zt,Rt.width,Rt.height,0,Ct,Ht,null));else if(E.isDataTexture)if(ge.length>0){K&&Lt&&i.texStorage2D(o.TEXTURE_2D,Vt,zt,ge[0].width,ge[0].height);for(let wt=0,gt=ge.length;wt<gt;wt++)Gt=ge[wt],K?Ut&&i.texSubImage2D(o.TEXTURE_2D,wt,0,0,Gt.width,Gt.height,Ct,Ht,Gt.data):i.texImage2D(o.TEXTURE_2D,wt,zt,Gt.width,Gt.height,0,Ct,Ht,Gt.data);E.generateMipmaps=!1}else K?(Lt&&i.texStorage2D(o.TEXTURE_2D,Vt,zt,Rt.width,Rt.height),Ut&&At(E,Rt,Ct,Ht)):i.texImage2D(o.TEXTURE_2D,0,zt,Rt.width,Rt.height,0,Ct,Ht,Rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){K&&Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,zt,ge[0].width,ge[0].height,Rt.depth);for(let wt=0,gt=ge.length;wt<gt;wt++)if(Gt=ge[wt],E.format!==wi)if(Ct!==null)if(K){if(Ut)if(E.layerUpdates.size>0){const Yt=tv(Gt.width,Gt.height,E.format,E.type);for(const ce of E.layerUpdates){const Ie=Gt.data.subarray(ce*Yt/Gt.data.BYTES_PER_ELEMENT,(ce+1)*Yt/Gt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,wt,0,0,ce,Gt.width,Gt.height,1,Ct,Ie)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,wt,0,0,0,Gt.width,Gt.height,Rt.depth,Ct,Gt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,wt,zt,Gt.width,Gt.height,Rt.depth,0,Gt.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?Ut&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,wt,0,0,0,Gt.width,Gt.height,Rt.depth,Ct,Ht,Gt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,wt,zt,Gt.width,Gt.height,Rt.depth,0,Ct,Ht,Gt.data)}else{K&&Lt&&i.texStorage2D(o.TEXTURE_2D,Vt,zt,ge[0].width,ge[0].height);for(let wt=0,gt=ge.length;wt<gt;wt++)Gt=ge[wt],E.format!==wi?Ct!==null?K?Ut&&i.compressedTexSubImage2D(o.TEXTURE_2D,wt,0,0,Gt.width,Gt.height,Ct,Gt.data):i.compressedTexImage2D(o.TEXTURE_2D,wt,zt,Gt.width,Gt.height,0,Gt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?Ut&&i.texSubImage2D(o.TEXTURE_2D,wt,0,0,Gt.width,Gt.height,Ct,Ht,Gt.data):i.texImage2D(o.TEXTURE_2D,wt,zt,Gt.width,Gt.height,0,Ct,Ht,Gt.data)}else if(E.isDataArrayTexture)if(K){if(Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,zt,Rt.width,Rt.height,Rt.depth),Ut)if(E.layerUpdates.size>0){const wt=tv(Rt.width,Rt.height,E.format,E.type);for(const gt of E.layerUpdates){const Yt=Rt.data.subarray(gt*wt/Rt.data.BYTES_PER_ELEMENT,(gt+1)*wt/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,Rt.width,Rt.height,1,Ct,Ht,Yt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ct,Ht,Rt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,Rt.width,Rt.height,Rt.depth,0,Ct,Ht,Rt.data);else if(E.isData3DTexture)K?(Lt&&i.texStorage3D(o.TEXTURE_3D,Vt,zt,Rt.width,Rt.height,Rt.depth),Ut&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ct,Ht,Rt.data)):i.texImage3D(o.TEXTURE_3D,0,zt,Rt.width,Rt.height,Rt.depth,0,Ct,Ht,Rt.data);else if(E.isFramebufferTexture){if(Lt)if(K)i.texStorage2D(o.TEXTURE_2D,Vt,zt,Rt.width,Rt.height);else{let wt=Rt.width,gt=Rt.height;for(let Yt=0;Yt<Vt;Yt++)i.texImage2D(o.TEXTURE_2D,Yt,zt,wt,gt,0,Ct,Ht,null),wt>>=1,gt>>=1}}else if(ge.length>0){if(K&&Lt){const wt=kt(ge[0]);i.texStorage2D(o.TEXTURE_2D,Vt,zt,wt.width,wt.height)}for(let wt=0,gt=ge.length;wt<gt;wt++)Gt=ge[wt],K?Ut&&i.texSubImage2D(o.TEXTURE_2D,wt,0,0,Ct,Ht,Gt):i.texImage2D(o.TEXTURE_2D,wt,zt,Ct,Ht,Gt);E.generateMipmaps=!1}else if(K){if(Lt){const wt=kt(Rt);i.texStorage2D(o.TEXTURE_2D,Vt,zt,wt.width,wt.height)}Ut&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ct,Ht,Rt)}else i.texImage2D(o.TEXTURE_2D,0,zt,Ct,Ht,Rt);S(E)&&_(_t),Ft.__version=pt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function G(N,E,Q){if(E.image.length!==6)return;const _t=at(N,E),bt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+Q);const pt=s.get(bt);if(bt.version!==pt.__version||_t===!0){i.activeTexture(o.TEXTURE0+Q);const Ft=Le.getPrimaries(Le.workingColorSpace),Nt=E.colorSpace===es?null:Le.getPrimaries(E.colorSpace),ee=E.colorSpace===es||Ft===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ne=E.isCompressedTexture||E.image[0].isCompressedTexture,Rt=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let gt=0;gt<6;gt++)!ne&&!Rt?Ct[gt]=w(E.image[gt],!0,l.maxCubemapSize):Ct[gt]=Rt?E.image[gt].image:E.image[gt],Ct[gt]=Ae(E,Ct[gt]);const Ht=Ct[0],zt=c.convert(E.format,E.colorSpace),Gt=c.convert(E.type),ge=L(E.internalFormat,zt,Gt,E.colorSpace),K=E.isVideoTexture!==!0,Lt=pt.__version===void 0||_t===!0,Ut=bt.dataReady;let Vt=I(E,Ht);Z(o.TEXTURE_CUBE_MAP,E);let wt;if(ne){K&&Lt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,ge,Ht.width,Ht.height);for(let gt=0;gt<6;gt++){wt=Ct[gt].mipmaps;for(let Yt=0;Yt<wt.length;Yt++){const ce=wt[Yt];E.format!==wi?zt!==null?K?Ut&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,0,0,ce.width,ce.height,zt,ce.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,ge,ce.width,ce.height,0,ce.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,0,0,ce.width,ce.height,zt,Gt,ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,ge,ce.width,ce.height,0,zt,Gt,ce.data)}}}else{if(wt=E.mipmaps,K&&Lt){wt.length>0&&Vt++;const gt=kt(Ct[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,ge,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Rt){K?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ct[gt].width,Ct[gt].height,zt,Gt,Ct[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ge,Ct[gt].width,Ct[gt].height,0,zt,Gt,Ct[gt].data);for(let Yt=0;Yt<wt.length;Yt++){const Ie=wt[Yt].image[gt].image;K?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,0,0,Ie.width,Ie.height,zt,Gt,Ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,ge,Ie.width,Ie.height,0,zt,Gt,Ie.data)}}else{K?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,zt,Gt,Ct[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ge,zt,Gt,Ct[gt]);for(let Yt=0;Yt<wt.length;Yt++){const ce=wt[Yt];K?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,0,0,zt,Gt,ce.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,ge,zt,Gt,ce.image[gt])}}}S(E)&&_(o.TEXTURE_CUBE_MAP),pt.__version=bt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ut(N,E,Q,_t,bt,pt){const Ft=c.convert(Q.format,Q.colorSpace),Nt=c.convert(Q.type),ee=L(Q.internalFormat,Ft,Nt,Q.colorSpace),ne=s.get(E),Rt=s.get(Q);if(Rt.__renderTarget=E,!ne.__hasExternalTextures){const Ct=Math.max(1,E.width>>pt),Ht=Math.max(1,E.height>>pt);bt===o.TEXTURE_3D||bt===o.TEXTURE_2D_ARRAY?i.texImage3D(bt,pt,ee,Ct,Ht,E.depth,0,Ft,Nt,null):i.texImage2D(bt,pt,ee,Ct,Ht,0,Ft,Nt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Te(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,bt,Rt.__webglTexture,0,k(E)):(bt===o.TEXTURE_2D||bt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,bt,Rt.__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function yt(N,E,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,N),E.depthBuffer){const _t=E.depthTexture,bt=_t&&_t.isDepthTexture?_t.type:null,pt=D(E.stencilBuffer,bt),Ft=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Te(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,k(E),pt,E.width,E.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,k(E),pt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,pt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ft,o.RENDERBUFFER,N)}else{const _t=E.textures;for(let bt=0;bt<_t.length;bt++){const pt=_t[bt],Ft=c.convert(pt.format,pt.colorSpace),Nt=c.convert(pt.type),ee=L(pt.internalFormat,Ft,Nt,pt.colorSpace);Te(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,k(E),ee,E.width,E.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,k(E),ee,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ee,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Dt(N,E,Q){const _t=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const bt=s.get(E.depthTexture);if(bt.__renderTarget=E,(!bt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),_t){if(bt.__webglInit===void 0&&(bt.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),bt.__webglTexture===void 0){bt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,bt.__webglTexture),Z(o.TEXTURE_CUBE_MAP,E.depthTexture);const ne=c.convert(E.depthTexture.format),Rt=c.convert(E.depthTexture.type);let Ct;E.depthTexture.format===ya?Ct=o.DEPTH_COMPONENT24:E.depthTexture.format===Ps&&(Ct=o.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Ct,E.width,E.height,0,ne,Rt,null)}}else $(E.depthTexture,0);const pt=bt.__webglTexture,Ft=k(E),Nt=_t?o.TEXTURE_CUBE_MAP_POSITIVE_X+Q:o.TEXTURE_2D,ee=E.depthTexture.format===Ps?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===ya)Te(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ee,Nt,pt,0,Ft):o.framebufferTexture2D(o.FRAMEBUFFER,ee,Nt,pt,0);else if(E.depthTexture.format===Ps)Te(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ee,Nt,pt,0,Ft):o.framebufferTexture2D(o.FRAMEBUFFER,ee,Nt,pt,0);else throw new Error("Unknown depthTexture format")}function Pt(N){const E=s.get(N),Q=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const _t=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),_t){const bt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,_t.removeEventListener("dispose",bt)};_t.addEventListener("dispose",bt),E.__depthDisposeCallback=bt}E.__boundDepthTexture=_t}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let _t=0;_t<6;_t++)Dt(E.__webglFramebuffer[_t],N,_t);else{const _t=N.texture.mipmaps;_t&&_t.length>0?Dt(E.__webglFramebuffer[0],N,0):Dt(E.__webglFramebuffer,N,0)}else if(Q){E.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[_t]),E.__webglDepthbuffer[_t]===void 0)E.__webglDepthbuffer[_t]=o.createRenderbuffer(),yt(E.__webglDepthbuffer[_t],N,!1);else{const bt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=E.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,pt)}}else{const _t=N.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),yt(E.__webglDepthbuffer,N,!1);else{const bt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,pt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xt(N,E,Q){const _t=s.get(N);E!==void 0&&ut(_t.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&Pt(N)}function Zt(N){const E=N.texture,Q=s.get(N),_t=s.get(E);N.addEventListener("dispose",z);const bt=N.textures,pt=N.isWebGLCubeRenderTarget===!0,Ft=bt.length>1;if(Ft||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=E.version,d.memory.textures++),pt){Q.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[Nt]=[];for(let ee=0;ee<E.mipmaps.length;ee++)Q.__webglFramebuffer[Nt][ee]=o.createFramebuffer()}else Q.__webglFramebuffer[Nt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Nt=0;Nt<E.mipmaps.length;Nt++)Q.__webglFramebuffer[Nt]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(Ft)for(let Nt=0,ee=bt.length;Nt<ee;Nt++){const ne=s.get(bt[Nt]);ne.__webglTexture===void 0&&(ne.__webglTexture=o.createTexture(),d.memory.textures++)}if(N.samples>0&&Te(N)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Nt=0;Nt<bt.length;Nt++){const ee=bt[Nt];Q.__webglColorRenderbuffer[Nt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[Nt]);const ne=c.convert(ee.format,ee.colorSpace),Rt=c.convert(ee.type),Ct=L(ee.internalFormat,ne,Rt,ee.colorSpace,N.isXRRenderTarget===!0),Ht=k(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ht,Ct,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,Q.__webglColorRenderbuffer[Nt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),yt(Q.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),Z(o.TEXTURE_CUBE_MAP,E);for(let Nt=0;Nt<6;Nt++)if(E.mipmaps&&E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)ut(Q.__webglFramebuffer[Nt][ee],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,ee);else ut(Q.__webglFramebuffer[Nt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);S(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ft){for(let Nt=0,ee=bt.length;Nt<ee;Nt++){const ne=bt[Nt],Rt=s.get(ne);let Ct=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ct=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,Rt.__webglTexture),Z(Ct,ne),ut(Q.__webglFramebuffer,N,ne,o.COLOR_ATTACHMENT0+Nt,Ct,0),S(ne)&&_(Ct)}i.unbindTexture()}else{let Nt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Nt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Nt,_t.__webglTexture),Z(Nt,E),E.mipmaps&&E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)ut(Q.__webglFramebuffer[ee],N,E,o.COLOR_ATTACHMENT0,Nt,ee);else ut(Q.__webglFramebuffer,N,E,o.COLOR_ATTACHMENT0,Nt,0);S(E)&&_(Nt),i.unbindTexture()}N.depthBuffer&&Pt(N)}function qt(N){const E=N.textures;for(let Q=0,_t=E.length;Q<_t;Q++){const bt=E[Q];if(S(bt)){const pt=R(N),Ft=s.get(bt).__webglTexture;i.bindTexture(pt,Ft),_(pt),i.unbindTexture()}}}const re=[],jt=[];function he(N){if(N.samples>0){if(Te(N)===!1){const E=N.textures,Q=N.width,_t=N.height;let bt=o.COLOR_BUFFER_BIT;const pt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ft=s.get(N),Nt=E.length>1;if(Nt)for(let ne=0;ne<E.length;ne++)i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);const ee=N.texture.mipmaps;ee&&ee.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let ne=0;ne<E.length;ne++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(bt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(bt|=o.STENCIL_BUFFER_BIT)),Nt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ft.__webglColorRenderbuffer[ne]);const Rt=s.get(E[ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Rt,0)}o.blitFramebuffer(0,0,Q,_t,0,0,Q,_t,bt,o.NEAREST),m===!0&&(re.length=0,jt.length=0,re.push(o.COLOR_ATTACHMENT0+ne),N.depthBuffer&&N.resolveDepthBuffer===!1&&(re.push(pt),jt.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,jt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Nt)for(let ne=0;ne<E.length;ne++){i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.RENDERBUFFER,Ft.__webglColorRenderbuffer[ne]);const Rt=s.get(E[ne]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.TEXTURE_2D,Rt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function k(N){return Math.min(l.maxSamples,N.samples)}function Te(N){const E=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function me(N){const E=d.render.frame;v.get(N)!==E&&(v.set(N,E),N.update())}function Ae(N,E){const Q=N.colorSpace,_t=N.format,bt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Q!==Wr&&Q!==es&&(Le.getTransfer(Q)===Ve?(_t!==wi||bt!==ri)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",Q)),E}function kt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=j,this.setTexture2D=$,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=rt,this.rebindTextures=Xt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function sR(o,t){function i(s,l=es){let c;const d=Le.getTransfer(l);if(s===ri)return o.UNSIGNED_BYTE;if(s===mp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===gp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===zv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Bv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Pv)return o.BYTE;if(s===Fv)return o.SHORT;if(s===nl)return o.UNSIGNED_SHORT;if(s===pp)return o.INT;if(s===Xi)return o.UNSIGNED_INT;if(s===Hi)return o.FLOAT;if(s===Sa)return o.HALF_FLOAT;if(s===Iv)return o.ALPHA;if(s===Hv)return o.RGB;if(s===wi)return o.RGBA;if(s===ya)return o.DEPTH_COMPONENT;if(s===Ps)return o.DEPTH_STENCIL;if(s===Gv)return o.RED;if(s===_p)return o.RED_INTEGER;if(s===Xr)return o.RG;if(s===vp)return o.RG_INTEGER;if(s===xp)return o.RGBA_INTEGER;if(s===nu||s===iu||s===au||s===su)if(d===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===nu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===nu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rh||s===Ch||s===wh||s===Dh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Rh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ch)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uh||s===Nh||s===Lh||s===Oh||s===Ph||s===Fh||s===zh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Uh||s===Nh)return d===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Lh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Oh)return c.COMPRESSED_R11_EAC;if(s===Ph)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Fh)return c.COMPRESSED_RG11_EAC;if(s===zh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Bh||s===Ih||s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===Wh||s===qh||s===jh||s===Yh||s===Zh||s===Kh||s===Qh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Bh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ih)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Hh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Gh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Vh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===kh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Xh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Wh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Yh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Zh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Kh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Jh||s===$h||s===tp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Jh)return d===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$h)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===tp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ep||s===np||s===ip||s===ap)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===ep)return c.COMPRESSED_RED_RGTC1_EXT;if(s===np)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ip)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ap)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===il?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const rR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oR=`
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

}`;class lR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Jv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new qi({vertexShader:rR,fragmentShader:oR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Wi(new cl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cR extends jr{constructor(t,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,v=null,y=null,g=null,M=null,b=null;const w=typeof XRWebGLBinding<"u",S=new lR,_={},R=i.getContextAttributes();let L=null,D=null;const I=[],F=[],z=new be;let T=null;const U=new si;U.viewport=new nn;const mt=new si;mt.viewport=new nn;const H=[U,mt],j=new xE;let X=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let G=I[J];return G===void 0&&(G=new kd,I[J]=G),G.getTargetRaySpace()},this.getControllerGrip=function(J){let G=I[J];return G===void 0&&(G=new kd,I[J]=G),G.getGripSpace()},this.getHand=function(J){let G=I[J];return G===void 0&&(G=new kd,I[J]=G),G.getHandSpace()};function $(J){const G=F.indexOf(J.inputSource);if(G===-1)return;const ut=I[G];ut!==void 0&&(ut.update(J.inputSource,J.frame,h||d),ut.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",B);for(let J=0;J<I.length;J++){const G=F[J];G!==null&&(F[J]=null,I[J].disconnect(G))}X=null,et=null,S.reset();for(const J in _)delete _[J];t.setRenderTarget(L),M=null,g=null,y=null,l=null,D=null,At.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,s.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){p=J,s.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return y===null&&w&&(y=new XRWebGLBinding(l,i)),y},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",O),l.addEventListener("inputsourceschange",B),R.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(z),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,yt=null,Dt=null;R.depth&&(Dt=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ut=R.stencil?Ps:ya,yt=R.stencil?il:Xi);const Pt={colorFormat:i.RGBA8,depthFormat:Dt,scaleFactor:c};y=this.getBinding(),g=y.createProjectionLayer(Pt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new ki(g.textureWidth,g.textureHeight,{format:wi,type:ri,depthTexture:new sl(g.textureWidth,g.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ut={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ut),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new ki(M.framebufferWidth,M.framebufferHeight,{format:wi,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),At.setContext(l),At.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function B(J){for(let G=0;G<J.removed.length;G++){const ut=J.removed[G],yt=F.indexOf(ut);yt>=0&&(F[yt]=null,I[yt].disconnect(ut))}for(let G=0;G<J.added.length;G++){const ut=J.added[G];let yt=F.indexOf(ut);if(yt===-1){for(let Pt=0;Pt<I.length;Pt++)if(Pt>=F.length){F.push(ut),yt=Pt;break}else if(F[Pt]===null){F[Pt]=ut,yt=Pt;break}if(yt===-1)break}const Dt=I[yt];Dt&&Dt.connect(ut)}}const rt=new it,ht=new it;function Tt(J,G,ut){rt.setFromMatrixPosition(G.matrixWorld),ht.setFromMatrixPosition(ut.matrixWorld);const yt=rt.distanceTo(ht),Dt=G.projectionMatrix.elements,Pt=ut.projectionMatrix.elements,Xt=Dt[14]/(Dt[10]-1),Zt=Dt[14]/(Dt[10]+1),qt=(Dt[9]+1)/Dt[5],re=(Dt[9]-1)/Dt[5],jt=(Dt[8]-1)/Dt[0],he=(Pt[8]+1)/Pt[0],k=Xt*jt,Te=Xt*he,me=yt/(-jt+he),Ae=me*-jt;if(G.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ae),J.translateZ(me),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Dt[10]===-1)J.projectionMatrix.copy(G.projectionMatrix),J.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const kt=Xt+me,N=Zt+me,E=k-Ae,Q=Te+(yt-Ae),_t=qt*Zt/N*kt,bt=re*Zt/N*kt;J.projectionMatrix.makePerspective(E,Q,_t,bt,kt,N),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function P(J,G){G===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(G.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let G=J.near,ut=J.far;S.texture!==null&&(S.depthNear>0&&(G=S.depthNear),S.depthFar>0&&(ut=S.depthFar)),j.near=mt.near=U.near=G,j.far=mt.far=U.far=ut,(X!==j.near||et!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),X=j.near,et=j.far),j.layers.mask=J.layers.mask|6,U.layers.mask=j.layers.mask&-5,mt.layers.mask=j.layers.mask&-3;const yt=J.parent,Dt=j.cameras;P(j,yt);for(let Pt=0;Pt<Dt.length;Pt++)P(Dt[Pt],yt);Dt.length===2?Tt(j,U,mt):j.projectionMatrix.copy(U.projectionMatrix),Z(J,j,yt)};function Z(J,G,ut){ut===null?J.matrix.copy(G.matrixWorld):(J.matrix.copy(ut.matrixWorld),J.matrix.invert(),J.matrix.multiply(G.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(G.projectionMatrix),J.projectionMatrixInverse.copy(G.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=rp*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(J){m=J,g!==null&&(g.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(j)},this.getCameraTexture=function(J){return _[J]};let at=null;function Et(J,G){if(v=G.getViewerPose(h||d),b=G,v!==null){const ut=v.views;M!==null&&(t.setRenderTargetFramebuffer(D,M.framebuffer),t.setRenderTarget(D));let yt=!1;ut.length!==j.cameras.length&&(j.cameras.length=0,yt=!0);for(let Zt=0;Zt<ut.length;Zt++){const qt=ut[Zt];let re=null;if(M!==null)re=M.getViewport(qt);else{const he=y.getViewSubImage(g,qt);re=he.viewport,Zt===0&&(t.setRenderTargetTextures(D,he.colorTexture,he.depthStencilTexture),t.setRenderTarget(D))}let jt=H[Zt];jt===void 0&&(jt=new si,jt.layers.enable(Zt),jt.viewport=new nn,H[Zt]=jt),jt.matrix.fromArray(qt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(qt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(re.x,re.y,re.width,re.height),Zt===0&&(j.matrix.copy(jt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),yt===!0&&j.cameras.push(jt)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){y=s.getBinding();const Zt=y.getDepthInformation(ut[0]);Zt&&Zt.isValid&&Zt.texture&&S.init(Zt,l.renderState)}if(Dt&&Dt.includes("camera-access")&&w){t.state.unbindTexture(),y=s.getBinding();for(let Zt=0;Zt<ut.length;Zt++){const qt=ut[Zt].camera;if(qt){let re=_[qt];re||(re=new Jv,_[qt]=re);const jt=y.getCameraImage(qt);re.sourceTexture=jt}}}}for(let ut=0;ut<I.length;ut++){const yt=F[ut],Dt=I[ut];yt!==null&&Dt!==void 0&&Dt.update(yt,G,h||d)}at&&at(J,G),G.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:G}),b=null}const At=new ix;At.setAnimationLoop(Et),this.setAnimationLoop=function(J){at=J},this.dispose=function(){}}}const Ds=new Ma,uR=new Ke;function fR(o,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,$v(o)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,R,L,D){_.isMeshBasicMaterial?c(S,_):_.isMeshLambertMaterial?(c(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(c(S,_),y(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(c(S,_),g(S,_),_.isMeshPhysicalMaterial&&M(S,_,D)):_.isMeshMatcapMaterial?(c(S,_),b(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),w(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&p(S,_)):_.isPointsMaterial?m(S,_,R,L):_.isSpriteMaterial?h(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===jn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===jn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const R=t.get(_),L=R.envMap,D=R.envMapRotation;L&&(S.envMap.value=L,Ds.copy(D),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),S.envMapRotation.value.setFromMatrix4(uR.makeRotationFromEuler(Ds)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function p(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,R,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*R,S.scale.value=L*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function y(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function g(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,R){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===jn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,_){_.matcap&&(S.matcap.value=_.matcap)}function w(S,_){const R=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function dR(o,t,i,s){let l={},c={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,L){const D=L.program;s.uniformBlockBinding(R,D)}function h(R,L){let D=l[R.id];D===void 0&&(b(R),D=v(R),l[R.id]=D,R.addEventListener("dispose",S));const I=L.program;s.updateUBOMapping(R,I);const F=t.render.frame;c[R.id]!==F&&(g(R),c[R.id]=F)}function v(R){const L=y();R.__bindingPointIndex=L;const D=o.createBuffer(),I=R.__size,F=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,I,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,D),D}function y(){for(let R=0;R<p;R++)if(d.indexOf(R)===-1)return d.push(R),R;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const L=l[R.id],D=R.uniforms,I=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let F=0,z=D.length;F<z;F++){const T=Array.isArray(D[F])?D[F]:[D[F]];for(let U=0,mt=T.length;U<mt;U++){const H=T[U];if(M(H,F,U,I)===!0){const j=H.__offset,X=Array.isArray(H.value)?H.value:[H.value];let et=0;for(let $=0;$<X.length;$++){const O=X[$],B=w(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,j+et,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,et),et+=B.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,j,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(R,L,D,I){const F=R.value,z=L+"_"+D;if(I[z]===void 0)return typeof F=="number"||typeof F=="boolean"?I[z]=F:I[z]=F.clone(),!0;{const T=I[z];if(typeof F=="number"||typeof F=="boolean"){if(T!==F)return I[z]=F,!0}else if(T.equals(F)===!1)return T.copy(F),!0}return!1}function b(R){const L=R.uniforms;let D=0;const I=16;for(let z=0,T=L.length;z<T;z++){const U=Array.isArray(L[z])?L[z]:[L[z]];for(let mt=0,H=U.length;mt<H;mt++){const j=U[mt],X=Array.isArray(j.value)?j.value:[j.value];for(let et=0,$=X.length;et<$;et++){const O=X[et],B=w(O),rt=D%I,ht=rt%B.boundary,Tt=rt+ht;D+=ht,Tt!==0&&I-Tt<B.storage&&(D+=I-Tt),j.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=D,D+=B.storage}}}const F=D%I;return F>0&&(D+=I-F),R.__size=D,R.__cache={},this}function w(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):le("WebGLRenderer: Unsupported uniform value type.",R),L}function S(R){const L=R.target;L.removeEventListener("dispose",S);const D=d.indexOf(L.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function _(){for(const R in l)o.deleteBuffer(l[R]);d=[],l={},c={}}return{bind:m,update:h,dispose:_}}const hR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function pR(){return Fi===null&&(Fi=new tE(hR,16,16,Xr,Sa),Fi.name="DFG_LUT",Fi.minFilter=Un,Fi.magFilter=Un,Fi.wrapS=_a,Fi.wrapT=_a,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class mR{constructor(t={}){const{canvas:i=wM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:M=ri}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const w=M,S=new Set([xp,vp,_p]),_=new Set([ri,Xi,nl,il,mp,gp]),R=new Uint32Array(4),L=new Int32Array(4);let D=null,I=null;const F=[],z=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let mt=!1;this._outputColorSpace=_i;let H=0,j=0,X=null,et=-1,$=null;const O=new nn,B=new nn;let rt=null;const ht=new ye(0);let Tt=0,P=i.width,Z=i.height,at=1,Et=null,At=null;const J=new nn(0,0,P,Z),G=new nn(0,0,P,Z);let ut=!1;const yt=new Ap;let Dt=!1,Pt=!1;const Xt=new Ke,Zt=new it,qt=new nn,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function he(){return X===null?at:1}let k=s;function Te(C,Y){return i.getContext(C,Y)}try{const C={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${dp}`),i.addEventListener("webglcontextlost",Yt,!1),i.addEventListener("webglcontextrestored",ce,!1),i.addEventListener("webglcontextcreationerror",Ie,!1),k===null){const Y="webgl2";if(k=Te(Y,C),k===null)throw Te(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ne("WebGLRenderer: "+C.message),C}let me,Ae,kt,N,E,Q,_t,bt,pt,Ft,Nt,ee,ne,Rt,Ct,Ht,zt,Gt,ge,K,Lt,Ut,Vt;function wt(){me=new m1(k),me.init(),Lt=new sR(k,me),Ae=new o1(k,me,t,Lt),kt=new iR(k,me),Ae.reversedDepthBuffer&&g&&kt.buffers.depth.setReversed(!0),N=new v1(k),E=new kA,Q=new aR(k,me,kt,E,Ae,Lt,N),_t=new p1(U),bt=new EE(k),Ut=new s1(k,bt),pt=new g1(k,bt,N,Ut),Ft=new S1(k,pt,bt,Ut,N),Gt=new x1(k,Ae,Q),Ct=new l1(E),Nt=new VA(U,_t,me,Ae,Ut,Ct),ee=new fR(U,E),ne=new WA,Rt=new QA(me),zt=new a1(U,_t,kt,Ft,b,m),Ht=new nR(U,Ft,Ae),Vt=new dR(k,N,Ae,kt),ge=new r1(k,me,N),K=new _1(k,me,N),N.programs=Nt.programs,U.capabilities=Ae,U.extensions=me,U.properties=E,U.renderLists=ne,U.shadowMap=Ht,U.state=kt,U.info=N}wt(),w!==ri&&(T=new M1(w,i.width,i.height,l,c));const gt=new cR(U,k);this.xr=gt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=me.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=me.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(C){C!==void 0&&(at=C,this.setSize(P,Z,!1))},this.getSize=function(C){return C.set(P,Z)},this.setSize=function(C,Y,ft=!0){if(gt.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,Z=Y,i.width=Math.floor(C*at),i.height=Math.floor(Y*at),ft===!0&&(i.style.width=C+"px",i.style.height=Y+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(P*at,Z*at).floor()},this.setDrawingBufferSize=function(C,Y,ft){P=C,Z=Y,at=ft,i.width=Math.floor(C*ft),i.height=Math.floor(Y*ft),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(w===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(J)},this.setViewport=function(C,Y,ft,lt){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,Y,ft,lt),kt.viewport(O.copy(J).multiplyScalar(at).round())},this.getScissor=function(C){return C.copy(G)},this.setScissor=function(C,Y,ft,lt){C.isVector4?G.set(C.x,C.y,C.z,C.w):G.set(C,Y,ft,lt),kt.scissor(B.copy(G).multiplyScalar(at).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(C){kt.setScissorTest(ut=C)},this.setOpaqueSort=function(C){Et=C},this.setTransparentSort=function(C){At=C},this.getClearColor=function(C){return C.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,ft=!0){let lt=0;if(C){let nt=!1;if(X!==null){const Ot=X.texture.format;nt=S.has(Ot)}if(nt){const Ot=X.texture.type,Wt=_.has(Ot),Bt=zt.getClearColor(),$t=zt.getClearAlpha(),ie=Bt.r,oe=Bt.g,fe=Bt.b;Wt?(R[0]=ie,R[1]=oe,R[2]=fe,R[3]=$t,k.clearBufferuiv(k.COLOR,0,R)):(L[0]=ie,L[1]=oe,L[2]=fe,L[3]=$t,k.clearBufferiv(k.COLOR,0,L))}else lt|=k.COLOR_BUFFER_BIT}Y&&(lt|=k.DEPTH_BUFFER_BIT),ft&&(lt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),lt!==0&&k.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Yt,!1),i.removeEventListener("webglcontextrestored",ce,!1),i.removeEventListener("webglcontextcreationerror",Ie,!1),zt.dispose(),ne.dispose(),Rt.dispose(),E.dispose(),_t.dispose(),Ft.dispose(),Ut.dispose(),Vt.dispose(),Nt.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Is),gt.removeEventListener("sessionend",Hs),Di.stop()};function Yt(C){C.preventDefault(),uu("WebGLRenderer: Context Lost."),mt=!0}function ce(){uu("WebGLRenderer: Context Restored."),mt=!1;const C=N.autoReset,Y=Ht.enabled,ft=Ht.autoUpdate,lt=Ht.needsUpdate,nt=Ht.type;wt(),N.autoReset=C,Ht.enabled=Y,Ht.autoUpdate=ft,Ht.needsUpdate=lt,Ht.type=nt}function Ie(C){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ue(C){const Y=C.target;Y.removeEventListener("dispose",Ue),On(Y)}function On(C){xi(C),E.remove(C)}function xi(C){const Y=E.get(C).programs;Y!==void 0&&(Y.forEach(function(ft){Nt.releaseProgram(ft)}),C.isShaderMaterial&&Nt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,ft,lt,nt,Ot){Y===null&&(Y=re);const Wt=nt.isMesh&&nt.matrixWorld.determinant()<0,Bt=hl(C,Y,ft,lt,nt);kt.setMaterial(lt,Wt);let $t=ft.index,ie=1;if(lt.wireframe===!0){if($t=pt.getWireframeAttribute(ft),$t===void 0)return;ie=2}const oe=ft.drawRange,fe=ft.attributes.position;let Kt=oe.start*ie,_e=(oe.start+oe.count)*ie;Ot!==null&&(Kt=Math.max(Kt,Ot.start*ie),_e=Math.min(_e,(Ot.start+Ot.count)*ie)),$t!==null?(Kt=Math.max(Kt,0),_e=Math.min(_e,$t.count)):fe!=null&&(Kt=Math.max(Kt,0),_e=Math.min(_e,fe.count));const Qe=_e-Kt;if(Qe<0||Qe===1/0)return;Ut.setup(nt,lt,Bt,ft,$t);let Je,Oe=ge;if($t!==null&&(Je=bt.get($t),Oe=K,Oe.setIndex(Je)),nt.isMesh)lt.wireframe===!0?(kt.setLineWidth(lt.wireframeLinewidth*he()),Oe.setMode(k.LINES)):Oe.setMode(k.TRIANGLES);else if(nt.isLine){let mn=lt.linewidth;mn===void 0&&(mn=1),kt.setLineWidth(mn*he()),nt.isLineSegments?Oe.setMode(k.LINES):nt.isLineLoop?Oe.setMode(k.LINE_LOOP):Oe.setMode(k.LINE_STRIP)}else nt.isPoints?Oe.setMode(k.POINTS):nt.isSprite&&Oe.setMode(k.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)fu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))Oe.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const mn=nt._multiDrawStarts,Jt=nt._multiDrawCounts,Pn=nt._multiDrawCount,ue=$t?bt.get($t).bytesPerElement:1,Fn=E.get(lt).currentProgram.getUniforms();for(let Yn=0;Yn<Pn;Yn++)Fn.setValue(k,"_gl_DrawID",Yn),Oe.render(mn[Yn]/ue,Jt[Yn])}else if(nt.isInstancedMesh)Oe.renderInstances(Kt,Qe,nt.count);else if(ft.isInstancedBufferGeometry){const mn=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Jt=Math.min(ft.instanceCount,mn);Oe.renderInstances(Kt,Qe,Jt)}else Oe.render(Kt,Qe)};function Kr(C,Y,ft){C.transparent===!0&&C.side===Bi&&C.forceSinglePass===!1?(C.side=jn,C.needsUpdate=!0,Ea(C,Y,ft),C.side=as,C.needsUpdate=!0,Ea(C,Y,ft),C.side=Bi):Ea(C,Y,ft)}this.compile=function(C,Y,ft=null){ft===null&&(ft=C),I=Rt.get(ft),I.init(Y),z.push(I),ft.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Y.layers)&&(I.pushLight(nt),nt.castShadow&&I.pushShadow(nt))}),C!==ft&&C.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Y.layers)&&(I.pushLight(nt),nt.castShadow&&I.pushShadow(nt))}),I.setupLights();const lt=new Set;return C.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Ot=nt.material;if(Ot)if(Array.isArray(Ot))for(let Wt=0;Wt<Ot.length;Wt++){const Bt=Ot[Wt];Kr(Bt,ft,nt),lt.add(Bt)}else Kr(Ot,ft,nt),lt.add(Ot)}),I=z.pop(),lt},this.compileAsync=function(C,Y,ft=null){const lt=this.compile(C,Y,ft);return new Promise(nt=>{function Ot(){if(lt.forEach(function(Wt){E.get(Wt).currentProgram.isReady()&&lt.delete(Wt)}),lt.size===0){nt(C);return}setTimeout(Ot,10)}me.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Bs=null;function ul(C){Bs&&Bs(C)}function Is(){Di.stop()}function Hs(){Di.start()}const Di=new ix;Di.setAnimationLoop(ul),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(C){Bs=C,gt.setAnimationLoop(C),C===null?Di.stop():Di.start()},gt.addEventListener("sessionstart",Is),gt.addEventListener("sessionend",Hs),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(mt===!0)return;const ft=gt.enabled===!0&&gt.isPresenting===!0,lt=T!==null&&(X===null||ft)&&T.begin(U,X);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(Y),Y=gt.getCamera()),C.isScene===!0&&C.onBeforeRender(U,C,Y,X),I=Rt.get(C,z.length),I.init(Y),z.push(I),Xt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),yt.setFromProjectionMatrix(Xt,Gi,Y.reversedDepth),Pt=this.localClippingEnabled,Dt=Ct.init(this.clippingPlanes,Pt),D=ne.get(C,F.length),D.init(),F.push(D),gt.enabled===!0&&gt.isPresenting===!0){const Wt=U.xr.getDepthSensingMesh();Wt!==null&&Gs(Wt,Y,-1/0,U.sortObjects)}Gs(C,Y,0,U.sortObjects),D.finish(),U.sortObjects===!0&&D.sort(Et,At),jt=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,jt&&zt.addToRenderList(D,C),this.info.render.frame++,Dt===!0&&Ct.beginShadows();const nt=I.state.shadowsArray;if(Ht.render(nt,C,Y),Dt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),(lt&&T.hasRenderPass())===!1){const Wt=D.opaque,Bt=D.transmissive;if(I.setupLights(),Y.isArrayCamera){const $t=Y.cameras;if(Bt.length>0)for(let ie=0,oe=$t.length;ie<oe;ie++){const fe=$t[ie];rn(Wt,Bt,C,fe)}jt&&zt.render(C);for(let ie=0,oe=$t.length;ie<oe;ie++){const fe=$t[ie];Si(D,C,fe,fe.viewport)}}else Bt.length>0&&rn(Wt,Bt,C,Y),jt&&zt.render(C),Si(D,C,Y)}X!==null&&j===0&&(Q.updateMultisampleRenderTarget(X),Q.updateRenderTargetMipmap(X)),lt&&T.end(U),C.isScene===!0&&C.onAfterRender(U,C,Y),Ut.resetDefaultState(),et=-1,$=null,z.pop(),z.length>0?(I=z[z.length-1],Dt===!0&&Ct.setGlobalState(U.clippingPlanes,I.state.camera)):I=null,F.pop(),F.length>0?D=F[F.length-1]:D=null};function Gs(C,Y,ft,lt){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)ft=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||yt.intersectsSprite(C)){lt&&qt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Xt);const Wt=Ft.update(C),Bt=C.material;Bt.visible&&D.push(C,Wt,Bt,ft,qt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||yt.intersectsObject(C))){const Wt=Ft.update(C),Bt=C.material;if(lt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qt.copy(C.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),qt.copy(Wt.boundingSphere.center)),qt.applyMatrix4(C.matrixWorld).applyMatrix4(Xt)),Array.isArray(Bt)){const $t=Wt.groups;for(let ie=0,oe=$t.length;ie<oe;ie++){const fe=$t[ie],Kt=Bt[fe.materialIndex];Kt&&Kt.visible&&D.push(C,Wt,Kt,ft,qt.z,fe)}}else Bt.visible&&D.push(C,Wt,Bt,ft,qt.z,null)}}const Ot=C.children;for(let Wt=0,Bt=Ot.length;Wt<Bt;Wt++)Gs(Ot[Wt],Y,ft,lt)}function Si(C,Y,ft,lt){const{opaque:nt,transmissive:Ot,transparent:Wt}=C;I.setupLightsView(ft),Dt===!0&&Ct.setGlobalState(U.clippingPlanes,ft),lt&&kt.viewport(O.copy(lt)),nt.length>0&&pn(nt,Y,ft),Ot.length>0&&pn(Ot,Y,ft),Wt.length>0&&pn(Wt,Y,ft),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function rn(C,Y,ft,lt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[lt.id]===void 0){const Kt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[lt.id]=new ki(1,1,{generateMipmaps:!0,type:Kt?Sa:ri,minFilter:Os,samples:Math.max(4,Ae.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const Ot=I.state.transmissionRenderTarget[lt.id],Wt=lt.viewport||O;Ot.setSize(Wt.z*U.transmissionResolutionScale,Wt.w*U.transmissionResolutionScale);const Bt=U.getRenderTarget(),$t=U.getActiveCubeFace(),ie=U.getActiveMipmapLevel();U.setRenderTarget(Ot),U.getClearColor(ht),Tt=U.getClearAlpha(),Tt<1&&U.setClearColor(16777215,.5),U.clear(),jt&&zt.render(ft);const oe=U.toneMapping;U.toneMapping=Vi;const fe=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),I.setupLightsView(lt),Dt===!0&&Ct.setGlobalState(U.clippingPlanes,lt),pn(C,ft,lt),Q.updateMultisampleRenderTarget(Ot),Q.updateRenderTargetMipmap(Ot),me.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let _e=0,Qe=Y.length;_e<Qe;_e++){const Je=Y[_e],{object:Oe,geometry:mn,material:Jt,group:Pn}=Je;if(Jt.side===Bi&&Oe.layers.test(lt.layers)){const ue=Jt.side;Jt.side=jn,Jt.needsUpdate=!0,ji(Oe,ft,lt,mn,Jt,Pn),Jt.side=ue,Jt.needsUpdate=!0,Kt=!0}}Kt===!0&&(Q.updateMultisampleRenderTarget(Ot),Q.updateRenderTargetMipmap(Ot))}U.setRenderTarget(Bt,$t,ie),U.setClearColor(ht,Tt),fe!==void 0&&(lt.viewport=fe),U.toneMapping=oe}function pn(C,Y,ft){const lt=Y.isScene===!0?Y.overrideMaterial:null;for(let nt=0,Ot=C.length;nt<Ot;nt++){const Wt=C[nt],{object:Bt,geometry:$t,group:ie}=Wt;let oe=Wt.material;oe.allowOverride===!0&&lt!==null&&(oe=lt),Bt.layers.test(ft.layers)&&ji(Bt,Y,ft,$t,oe,ie)}}function ji(C,Y,ft,lt,nt,Ot){C.onBeforeRender(U,Y,ft,lt,nt,Ot),C.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),nt.onBeforeRender(U,Y,ft,lt,C,Ot),nt.transparent===!0&&nt.side===Bi&&nt.forceSinglePass===!1?(nt.side=jn,nt.needsUpdate=!0,U.renderBufferDirect(ft,Y,lt,nt,C,Ot),nt.side=as,nt.needsUpdate=!0,U.renderBufferDirect(ft,Y,lt,nt,C,Ot),nt.side=Bi):U.renderBufferDirect(ft,Y,lt,nt,C,Ot),C.onAfterRender(U,Y,ft,lt,nt,Ot)}function Ea(C,Y,ft){Y.isScene!==!0&&(Y=re);const lt=E.get(C),nt=I.state.lights,Ot=I.state.shadowsArray,Wt=nt.state.version,Bt=Nt.getParameters(C,nt.state,Ot,Y,ft),$t=Nt.getProgramCacheKey(Bt);let ie=lt.programs;lt.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,lt.fog=Y.fog;const oe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;lt.envMap=_t.get(C.envMap||lt.environment,oe),lt.envMapRotation=lt.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,ie===void 0&&(C.addEventListener("dispose",Ue),ie=new Map,lt.programs=ie);let fe=ie.get($t);if(fe!==void 0){if(lt.currentProgram===fe&&lt.lightsStateVersion===Wt)return dl(C,Bt),fe}else Bt.uniforms=Nt.getUniforms(C),C.onBeforeCompile(Bt,U),fe=Nt.acquireProgram(Bt,$t),ie.set($t,fe),lt.uniforms=Bt.uniforms;const Kt=lt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Kt.clippingPlanes=Ct.uniform),dl(C,Bt),lt.needsLights=Qr(C),lt.lightsStateVersion=Wt,lt.needsLights&&(Kt.ambientLightColor.value=nt.state.ambient,Kt.lightProbe.value=nt.state.probe,Kt.directionalLights.value=nt.state.directional,Kt.directionalLightShadows.value=nt.state.directionalShadow,Kt.spotLights.value=nt.state.spot,Kt.spotLightShadows.value=nt.state.spotShadow,Kt.rectAreaLights.value=nt.state.rectArea,Kt.ltc_1.value=nt.state.rectAreaLTC1,Kt.ltc_2.value=nt.state.rectAreaLTC2,Kt.pointLights.value=nt.state.point,Kt.pointLightShadows.value=nt.state.pointShadow,Kt.hemisphereLights.value=nt.state.hemi,Kt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Kt.spotLightMatrix.value=nt.state.spotLightMatrix,Kt.spotLightMap.value=nt.state.spotLightMap,Kt.pointShadowMatrix.value=nt.state.pointShadowMatrix),lt.currentProgram=fe,lt.uniformsList=null,fe}function fl(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=ru.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function dl(C,Y){const ft=E.get(C);ft.outputColorSpace=Y.outputColorSpace,ft.batching=Y.batching,ft.batchingColor=Y.batchingColor,ft.instancing=Y.instancing,ft.instancingColor=Y.instancingColor,ft.instancingMorph=Y.instancingMorph,ft.skinning=Y.skinning,ft.morphTargets=Y.morphTargets,ft.morphNormals=Y.morphNormals,ft.morphColors=Y.morphColors,ft.morphTargetsCount=Y.morphTargetsCount,ft.numClippingPlanes=Y.numClippingPlanes,ft.numIntersection=Y.numClipIntersection,ft.vertexAlphas=Y.vertexAlphas,ft.vertexTangents=Y.vertexTangents,ft.toneMapping=Y.toneMapping}function hl(C,Y,ft,lt,nt){Y.isScene!==!0&&(Y=re),Q.resetTextureUnits();const Ot=Y.fog,Wt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial?Y.environment:null,Bt=X===null?U.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Wr,$t=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial&&!lt.envMap||lt.isMeshPhongMaterial&&!lt.envMap,ie=_t.get(lt.envMap||Wt,$t),oe=lt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,fe=!!ft.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Kt=!!ft.morphAttributes.position,_e=!!ft.morphAttributes.normal,Qe=!!ft.morphAttributes.color;let Je=Vi;lt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Je=U.toneMapping);const Oe=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,mn=Oe!==void 0?Oe.length:0,Jt=E.get(lt),Pn=I.state.lights;if(Dt===!0&&(Pt===!0||C!==$)){const ln=C===$&&lt.id===et;Ct.setState(lt,C,ln)}let ue=!1;lt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Pn.state.version||Jt.outputColorSpace!==Bt||nt.isBatchedMesh&&Jt.batching===!1||!nt.isBatchedMesh&&Jt.batching===!0||nt.isBatchedMesh&&Jt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Jt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Jt.instancing===!1||!nt.isInstancedMesh&&Jt.instancing===!0||nt.isSkinnedMesh&&Jt.skinning===!1||!nt.isSkinnedMesh&&Jt.skinning===!0||nt.isInstancedMesh&&Jt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Jt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Jt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Jt.instancingMorph===!1&&nt.morphTexture!==null||Jt.envMap!==ie||lt.fog===!0&&Jt.fog!==Ot||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Ct.numPlanes||Jt.numIntersection!==Ct.numIntersection)||Jt.vertexAlphas!==oe||Jt.vertexTangents!==fe||Jt.morphTargets!==Kt||Jt.morphNormals!==_e||Jt.morphColors!==Qe||Jt.toneMapping!==Je||Jt.morphTargetsCount!==mn)&&(ue=!0):(ue=!0,Jt.__version=lt.version);let Fn=Jt.currentProgram;ue===!0&&(Fn=Ea(lt,Y,nt));let Yn=!1,yi=!1,Zn=!1;const Be=Fn.getUniforms(),on=Jt.uniforms;if(kt.useProgram(Fn.program)&&(Yn=!0,yi=!0,Zn=!0),lt.id!==et&&(et=lt.id,yi=!0),Yn||$!==C){kt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Be.setValue(k,"projectionMatrix",C.projectionMatrix),Be.setValue(k,"viewMatrix",C.matrixWorldInverse);const Mi=Be.map.cameraPosition;Mi!==void 0&&Mi.setValue(k,Zt.setFromMatrixPosition(C.matrixWorld)),Ae.logarithmicDepthBuffer&&Be.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Be.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),$!==C&&($=C,yi=!0,Zn=!0)}if(Jt.needsLights&&(Pn.state.directionalShadowMap.length>0&&Be.setValue(k,"directionalShadowMap",Pn.state.directionalShadowMap,Q),Pn.state.spotShadowMap.length>0&&Be.setValue(k,"spotShadowMap",Pn.state.spotShadowMap,Q),Pn.state.pointShadowMap.length>0&&Be.setValue(k,"pointShadowMap",Pn.state.pointShadowMap,Q)),nt.isSkinnedMesh){Be.setOptional(k,nt,"bindMatrix"),Be.setOptional(k,nt,"bindMatrixInverse");const ln=nt.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Be.setValue(k,"boneTexture",ln.boneTexture,Q))}nt.isBatchedMesh&&(Be.setOptional(k,nt,"batchingTexture"),Be.setValue(k,"batchingTexture",nt._matricesTexture,Q),Be.setOptional(k,nt,"batchingIdTexture"),Be.setValue(k,"batchingIdTexture",nt._indirectTexture,Q),Be.setOptional(k,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Be.setValue(k,"batchingColorTexture",nt._colorsTexture,Q));const zn=ft.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Gt.update(nt,ft,Fn),(yi||Jt.receiveShadow!==nt.receiveShadow)&&(Jt.receiveShadow=nt.receiveShadow,Be.setValue(k,"receiveShadow",nt.receiveShadow)),(lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial)&&lt.envMap===null&&Y.environment!==null&&(on.envMapIntensity.value=Y.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=pR()),yi&&(Be.setValue(k,"toneMappingExposure",U.toneMappingExposure),Jt.needsLights&&ss(on,Zn),Ot&&lt.fog===!0&&ee.refreshFogUniforms(on,Ot),ee.refreshMaterialUniforms(on,lt,at,Z,I.state.transmissionRenderTarget[C.id]),ru.upload(k,fl(Jt),on,Q)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(ru.upload(k,fl(Jt),on,Q),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Be.setValue(k,"center",nt.center),Be.setValue(k,"modelViewMatrix",nt.modelViewMatrix),Be.setValue(k,"normalMatrix",nt.normalMatrix),Be.setValue(k,"modelMatrix",nt.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const ln=lt.uniformsGroups;for(let Mi=0,Yi=ln.length;Mi<Yi;Mi++){const Vs=ln[Mi];Vt.update(Vs,Fn),Vt.bind(Vs,Fn)}}return Fn}function ss(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Qr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(C,Y,ft){const lt=E.get(C);lt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=Y,E.get(C.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ft,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const ft=E.get(C);ft.__webglFramebuffer=Y,ft.__useDefaultFramebuffer=Y===void 0};const ba=k.createFramebuffer();this.setRenderTarget=function(C,Y=0,ft=0){X=C,H=Y,j=ft;let lt=null,nt=!1,Ot=!1;if(C){const Bt=E.get(C);if(Bt.__useDefaultFramebuffer!==void 0){kt.bindFramebuffer(k.FRAMEBUFFER,Bt.__webglFramebuffer),O.copy(C.viewport),B.copy(C.scissor),rt=C.scissorTest,kt.viewport(O),kt.scissor(B),kt.setScissorTest(rt),et=-1;return}else if(Bt.__webglFramebuffer===void 0)Q.setupRenderTarget(C);else if(Bt.__hasExternalTextures)Q.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const oe=C.depthTexture;if(Bt.__boundDepthTexture!==oe){if(oe!==null&&E.has(oe)&&(C.width!==oe.image.width||C.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(C)}}const $t=C.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ot=!0);const ie=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ie[Y])?lt=ie[Y][ft]:lt=ie[Y],nt=!0):C.samples>0&&Q.useMultisampledRTT(C)===!1?lt=E.get(C).__webglMultisampledFramebuffer:Array.isArray(ie)?lt=ie[ft]:lt=ie,O.copy(C.viewport),B.copy(C.scissor),rt=C.scissorTest}else O.copy(J).multiplyScalar(at).floor(),B.copy(G).multiplyScalar(at).floor(),rt=ut;if(ft!==0&&(lt=ba),kt.bindFramebuffer(k.FRAMEBUFFER,lt)&&kt.drawBuffers(C,lt),kt.viewport(O),kt.scissor(B),kt.setScissorTest(rt),nt){const Bt=E.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Bt.__webglTexture,ft)}else if(Ot){const Bt=Y;for(let $t=0;$t<C.textures.length;$t++){const ie=E.get(C.textures[$t]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+$t,ie.__webglTexture,ft,Bt)}}else if(C!==null&&ft!==0){const Bt=E.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Bt.__webglTexture,ft)}et=-1},this.readRenderTargetPixels=function(C,Y,ft,lt,nt,Ot,Wt,Bt=0){if(!(C&&C.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Wt!==void 0&&($t=$t[Wt]),$t){kt.bindFramebuffer(k.FRAMEBUFFER,$t);try{const ie=C.textures[Bt],oe=ie.format,fe=ie.type;if(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Bt),!Ae.textureFormatReadable(oe)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(fe)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-lt&&ft>=0&&ft<=C.height-nt&&k.readPixels(Y,ft,lt,nt,Lt.convert(oe),Lt.convert(fe),Ot)}finally{const ie=X!==null?E.get(X).__webglFramebuffer:null;kt.bindFramebuffer(k.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(C,Y,ft,lt,nt,Ot,Wt,Bt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $t=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Wt!==void 0&&($t=$t[Wt]),$t)if(Y>=0&&Y<=C.width-lt&&ft>=0&&ft<=C.height-nt){kt.bindFramebuffer(k.FRAMEBUFFER,$t);const ie=C.textures[Bt],oe=ie.format,fe=ie.type;if(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Bt),!Ae.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Kt),k.bufferData(k.PIXEL_PACK_BUFFER,Ot.byteLength,k.STREAM_READ),k.readPixels(Y,ft,lt,nt,Lt.convert(oe),Lt.convert(fe),0);const _e=X!==null?E.get(X).__webglFramebuffer:null;kt.bindFramebuffer(k.FRAMEBUFFER,_e);const Qe=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await DM(k,Qe,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Kt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ot),k.deleteBuffer(Kt),k.deleteSync(Qe),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,ft=0){const lt=Math.pow(2,-ft),nt=Math.floor(C.image.width*lt),Ot=Math.floor(C.image.height*lt),Wt=Y!==null?Y.x:0,Bt=Y!==null?Y.y:0;Q.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ft,0,0,Wt,Bt,nt,Ot),kt.unbindTexture()};const Ta=k.createFramebuffer(),rs=k.createFramebuffer();this.copyTextureToTexture=function(C,Y,ft=null,lt=null,nt=0,Ot=0){let Wt,Bt,$t,ie,oe,fe,Kt,_e,Qe;const Je=C.isCompressedTexture?C.mipmaps[Ot]:C.image;if(ft!==null)Wt=ft.max.x-ft.min.x,Bt=ft.max.y-ft.min.y,$t=ft.isBox3?ft.max.z-ft.min.z:1,ie=ft.min.x,oe=ft.min.y,fe=ft.isBox3?ft.min.z:0;else{const on=Math.pow(2,-nt);Wt=Math.floor(Je.width*on),Bt=Math.floor(Je.height*on),C.isDataArrayTexture?$t=Je.depth:C.isData3DTexture?$t=Math.floor(Je.depth*on):$t=1,ie=0,oe=0,fe=0}lt!==null?(Kt=lt.x,_e=lt.y,Qe=lt.z):(Kt=0,_e=0,Qe=0);const Oe=Lt.convert(Y.format),mn=Lt.convert(Y.type);let Jt;Y.isData3DTexture?(Q.setTexture3D(Y,0),Jt=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(Q.setTexture2DArray(Y,0),Jt=k.TEXTURE_2D_ARRAY):(Q.setTexture2D(Y,0),Jt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const Pn=k.getParameter(k.UNPACK_ROW_LENGTH),ue=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Fn=k.getParameter(k.UNPACK_SKIP_PIXELS),Yn=k.getParameter(k.UNPACK_SKIP_ROWS),yi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Je.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Je.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ie),k.pixelStorei(k.UNPACK_SKIP_ROWS,oe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,fe);const Zn=C.isDataArrayTexture||C.isData3DTexture,Be=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const on=E.get(C),zn=E.get(Y),ln=E.get(on.__renderTarget),Mi=E.get(zn.__renderTarget);kt.bindFramebuffer(k.READ_FRAMEBUFFER,ln.__webglFramebuffer),kt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Yi=0;Yi<$t;Yi++)Zn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(C).__webglTexture,nt,fe+Yi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Ot,Qe+Yi)),k.blitFramebuffer(ie,oe,Wt,Bt,Kt,_e,Wt,Bt,k.DEPTH_BUFFER_BIT,k.NEAREST);kt.bindFramebuffer(k.READ_FRAMEBUFFER,null),kt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(nt!==0||C.isRenderTargetTexture||E.has(C)){const on=E.get(C),zn=E.get(Y);kt.bindFramebuffer(k.READ_FRAMEBUFFER,Ta),kt.bindFramebuffer(k.DRAW_FRAMEBUFFER,rs);for(let ln=0;ln<$t;ln++)Zn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,on.__webglTexture,nt,fe+ln):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,on.__webglTexture,nt),Be?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,zn.__webglTexture,Ot,Qe+ln):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,zn.__webglTexture,Ot),nt!==0?k.blitFramebuffer(ie,oe,Wt,Bt,Kt,_e,Wt,Bt,k.COLOR_BUFFER_BIT,k.NEAREST):Be?k.copyTexSubImage3D(Jt,Ot,Kt,_e,Qe+ln,ie,oe,Wt,Bt):k.copyTexSubImage2D(Jt,Ot,Kt,_e,ie,oe,Wt,Bt);kt.bindFramebuffer(k.READ_FRAMEBUFFER,null),kt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Be?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Jt,Ot,Kt,_e,Qe,Wt,Bt,$t,Oe,mn,Je.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Jt,Ot,Kt,_e,Qe,Wt,Bt,$t,Oe,Je.data):k.texSubImage3D(Jt,Ot,Kt,_e,Qe,Wt,Bt,$t,Oe,mn,Je):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ot,Kt,_e,Wt,Bt,Oe,mn,Je.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ot,Kt,_e,Je.width,Je.height,Oe,Je.data):k.texSubImage2D(k.TEXTURE_2D,Ot,Kt,_e,Wt,Bt,Oe,mn,Je);k.pixelStorei(k.UNPACK_ROW_LENGTH,Pn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ue),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Fn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Yn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,yi),Ot===0&&Y.generateMipmaps&&k.generateMipmap(Jt),kt.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&Q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Q.setTextureCube(C,0):C.isData3DTexture?Q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Q.setTexture2DArray(C,0):Q.setTexture2D(C,0),kt.unbindTexture()},this.resetState=function(){H=0,j=0,X=null,kt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const tu=16,Jo=400,gR=[.5,.8,.95,.6,.38,.14,.05,.55,.5,.8,.95,.6,.38,.14,.05,.55],Br=3,bv=Math.PI*.75,Tv=2.6,mh=1.4,$o=1.8;function _R({eeg:o,yScale:t,onExit:i}){const s=St.useRef(null),l=St.useRef(null),c=St.useRef(null),d=St.useRef(null),p=St.useRef([]),m=St.useRef(null),h=St.useRef(null),v=St.useRef(!1),y=St.useRef(new SE),g=St.useRef(o),M=St.useRef(t),b=St.useRef(i);g.current=o,M.current=t,b.current=i;const w=St.useCallback(()=>{if(v.current)return;v.current=!0,m.current&&(m.current.end().catch(()=>{}),m.current=null),h.current!=null&&(cancelAnimationFrame(h.current),h.current=null);const S=l.current;S&&(S.xr.enabled=!1,S.setAnimationLoop(null),S.dispose(),l.current=null),p.current=[]},[]);return St.useEffect(()=>{const S=s.current;if(!S)return;v.current=!1;const _=y.current;_.start();const R=new qM;R.background=new ye(198159),R.fog=new Ep(198159,.07),c.current=R;const L=new si(80,window.innerWidth/window.innerHeight,.05,60);L.position.set(0,mh,0),d.current=L;const D=new mR({antialias:!0,alpha:!1});D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.setSize(window.innerWidth,window.innerHeight),D.xr.enabled=!0,D.toneMapping=hp,D.toneMappingExposure=1.2,S.appendChild(D.domElement),l.current=D;const I=new _E(1122884,.8);R.add(I);const F=new gE(4491519,1.5,25);F.position.set(0,mh+1,0),R.add(F);const z=1500,T=new Float32Array(z*3),U=new Float32Array(z*3);for(let at=0;at<z;at++){const Et=10+Math.random()*15,At=Math.random()*Math.PI*2,J=Math.acos(2*Math.random()-1);T[at*3]=Et*Math.sin(J)*Math.cos(At),T[at*3+1]=Et*Math.sin(J)*Math.sin(At),T[at*3+2]=Et*Math.cos(J),U[at*3]=.7+Math.random()*.3,U[at*3+1]=.75+Math.random()*.25,U[at*3+2]=.85+Math.random()*.15}const mt=new Ln;mt.setAttribute("position",new Dn(T,3)),mt.setAttribute("color",new Dn(U,3));const H=new op({size:.05,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0}),j=new Y_(mt,H);R.add(j);const et=[{color:4853888,center:[5,2,-10],count:400,spread:5},{color:666208,center:[-6,1,-9],count:350,spread:4},{color:14928,center:[1,4,-12],count:300,spread:4}].map(({color:at,center:Et,count:At,spread:J})=>{const G=new Float32Array(At*3);for(let Pt=0;Pt<At;Pt++)G[Pt*3]=Et[0]+(Math.random()-.5)*J,G[Pt*3+1]=Et[1]+(Math.random()-.5)*J,G[Pt*3+2]=Et[2]+(Math.random()-.5)*J;const ut=new Ln;ut.setAttribute("position",new Dn(G,3));const yt=new op({color:at,size:.12,transparent:!0,opacity:.16,sizeAttenuation:!0,depthWrite:!1}),Dt=new Y_(ut,yt);return R.add(Dt),Dt}),$=[],O=new ye;for(let at=0;at<tu;at++){const Et=at/(tu-1),At=-bv/2+Et*bv,J=mh+Tv/2-Et*Tv,G=gR[at],ut=new Float32Array(Jo*3),yt=new Float32Array(Jo*3),Dt=new Ln;Dt.setAttribute("position",new Dn(ut,3)),Dt.setAttribute("color",new Dn(yt,3)),Dt.setDrawRange(0,0);const Pt=new Rp({vertexColors:!0,transparent:!0,opacity:.92,linewidth:2}),Xt=new Kv(Dt,Pt);R.add(Xt);const Zt=document.createElement("canvas");Zt.width=128,Zt.height=48;const qt=Zt.getContext("2d");qt.clearRect(0,0,128,48),O.setHSL(G,.9,.7),qt.font="bold 28px monospace",qt.fillStyle=`#${O.getHexString()}`,qt.textAlign="center",qt.textBaseline="middle",qt.fillText(`Ch ${at+1}`,64,24);const re=new sE(Zt),jt=new Yv({map:re,transparent:!0,opacity:.65}),he=new JM(jt);he.scale.set(.4,.15,1);const k=Math.sin(At)*(Br+.05),Te=-Math.cos(At)*(Br+.05),me=k-Math.cos(At)*($o/2),Ae=Te+Math.sin(At)*($o/2);he.position.set(me-Math.cos(At)*.3,J,Ae+Math.sin(At)*.3),R.add(he);const kt=new cl($o+.3,.14),N=new Tp({color:new ye().setHSL(G,1,.55),transparent:!0,opacity:.05,side:Bi,depthWrite:!1}),E=new Wi(kt,N);E.position.set(Math.sin(At)*Br,J,-Math.cos(At)*Br),E.rotation.y=At,R.add(E),$.push({line:Xt,geometry:Dt,positions:ut,colors:yt,angle:At,yPos:J,glowPlane:E,baseHue:G})}p.current=$;const B=new yE(12,24,660784,396830);R.add(B);function rt(at){const Et=g.current,At=Et.buffers.current;if(!At)return;const J=Et.samplesInBuffer.current,G=Et.writeIndex.current,ut=Et.bufferSize;if(J<2)return;const yt=J>Jo?Math.floor(J/Jo):1,Dt=Math.min(Jo,Math.ceil(J/yt)),Pt=M.current||100;for(let Xt=0;Xt<tu;Xt++){const{positions:Zt,colors:qt,geometry:re,angle:jt,yPos:he,glowPlane:k,baseHue:Te}=$[Xt],me=At[Xt],Ae=Math.sin(jt)*Br,kt=-Math.cos(jt)*Br,N=-Math.cos(jt),E=-Math.sin(jt),Q=(Te+Math.sin(at*.08+Xt*.4)*.08+1)%1,_t=.85+Math.sin(at*.15+Xt)*.1;let bt=0;for(let Ft=0;Ft<Dt;Ft++){const Nt=Ft*yt,ee=(G-J+Nt+ut)%ut,ne=Ft/Math.max(1,Dt-1),Rt=me[ee]/Pt;bt+=Rt*Rt,Zt[Ft*3]=Ae+N*(ne-.5)*$o,Zt[Ft*3+1]=he+Rt*.14,Zt[Ft*3+2]=kt+E*(ne-.5)*$o;const Ct=Math.sin(ne*Math.PI),Ht=.35+Math.min(Math.abs(Rt)*3,1)*.65,zt=Math.min(.95,.5*Ct+Ht*.5);O.setHSL(Q,_t,zt),qt[Ft*3]=O.r,qt[Ft*3+1]=O.g,qt[Ft*3+2]=O.b}re.attributes.position.needsUpdate=!0,re.attributes.color.needsUpdate=!0,re.setDrawRange(0,Dt);const pt=Math.sqrt(bt/Math.max(1,Dt));k.material.opacity=Math.min(.2,.03+pt*.9)}I.intensity=.6+Math.sin(at*.5)*.15,F.intensity=1.2+Math.sin(at*.3)*.4,j.rotation.y=at*.005,j.rotation.x=Math.sin(at*.003)*.02,et.forEach((Xt,Zt)=>{Xt.material.opacity=.1+Math.sin(at*.2+Zt*2.1)*.06,Xt.rotation.y=at*.003*(Zt%2===0?1:-1)})}let ht=null;async function Tt(){if(navigator.xr)for(const at of["immersive-vr","immersive-ar","inline"])try{if(await navigator.xr.isSessionSupported(at)){ht=at;break}}catch{}if(ht&&ht!=="inline")try{const at=await navigator.xr.requestSession(ht,{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});m.current=at,D.xr.setSession(at),at.addEventListener("end",()=>{m.current=null,b.current()}),D.setAnimationLoop(()=>{rt(_.getElapsedTime()),D.render(R,L)});return}catch{}P()}function P(){let at=!1,Et=0,At=0,J=0,G=0,ut=!0;const yt=D.domElement,Dt=qt=>{at=!0,ut=!1,Et=qt.clientX,At=qt.clientY},Pt=()=>{at=!1},Xt=qt=>{at&&(J-=(qt.clientX-Et)*.003,G-=(qt.clientY-At)*.003,G=Math.max(-Math.PI/3,Math.min(Math.PI/3,G)),Et=qt.clientX,At=qt.clientY)};yt.addEventListener("pointerdown",Dt),yt.addEventListener("pointerup",Pt),yt.addEventListener("pointermove",Xt);function Zt(){const qt=_.getElapsedTime();ut&&(J=qt*.04),L.rotation.order="YXZ",L.rotation.y=J,L.rotation.x=G,rt(qt),D.render(R,L),h.current=requestAnimationFrame(Zt)}h.current=requestAnimationFrame(Zt)}Tt();function Z(){l.current&&(L.aspect=window.innerWidth/window.innerHeight,L.updateProjectionMatrix(),D.setSize(window.innerWidth,window.innerHeight))}return window.addEventListener("resize",Z),()=>{window.removeEventListener("resize",Z),w(),S.contains(D.domElement)&&S.removeChild(D.domElement)}},[]),W.jsxs("div",{className:"xr-overlay",children:[W.jsx("div",{className:"xr-container",ref:s}),W.jsxs("div",{className:"xr-hud",children:[W.jsx("button",{className:"btn xr-exit-btn",onClick:()=>{w(),b.current()},children:"✕ Exit XR"}),W.jsxs("div",{className:"xr-info",children:[W.jsx("span",{className:"xr-badge",children:"WebXR"}),W.jsxs("span",{children:[tu," channels · ±",t," µV"]})]})]})]})}const vR=16,xR=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],SR=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"},{value:16,label:"16s"}];function yR(){const[o,t]=St.useState("live"),[i,s]=St.useState(null),[l,c]=St.useState(!1),[d,p]=St.useState(!0),[m,h]=St.useState(!1),[v,y]=St.useState(1),[g,M]=St.useState(40),[b,w]=St.useState(4),[S,_]=St.useState(100),[R,L]=St.useState(null),[D,I]=St.useState(!1),F=Ry(b);function z(){const X=!l;c(X),F.setPaused(X)}function T(){const X=!m;h(X),F.sendCommand({cmd:"set_filter",enabled:X,lowcut:parseFloat(v)||1,highcut:parseFloat(g)||40})}function U(){F.sendCommand({cmd:F.recording?"stop_record":"start_record"})}function mt(X){const et=Math.floor(X/60),$=Math.floor(X%60);return`${String(et).padStart(2,"0")}:${String($).padStart(2,"0")}`}function H(X,et){m&&F.sendCommand({cmd:"set_filter",enabled:!0,lowcut:parseFloat(X)||1,highcut:parseFloat(et)||40})}const j=St.useCallback(X=>{L(et=>et===X?null:X)},[]);return St.useEffect(()=>{function X(et){if(!(et.target.tagName==="INPUT"||et.target.tagName==="SELECT"||et.target.tagName==="TEXTAREA")){if(o!=="live"){et.code==="Escape"&&(o==="playback"?(t("sessions"),s(null)):o==="sessions"&&t("live"));return}switch(et.code){case"Space":et.preventDefault(),z();break;case"KeyR":U();break;case"KeyF":p($=>!$);break;case"KeyV":I($=>!$);break;case"Escape":D?I(!1):R!==null?L(null):F.recordResult&&F.dismissRecordResult();break}}}return window.addEventListener("keydown",X),()=>window.removeEventListener("keydown",X)},[R,F.recordResult,o]),o==="playback"&&i?W.jsx(wd,{children:W.jsx(Yy,{filename:i,onBack:()=>{t("sessions"),s(null)}})}):o==="sessions"?W.jsx(wd,{children:W.jsx(Hy,{onSelect:X=>{s(X),t("playback")},onBack:()=>t("live")})}):W.jsxs(wd,{children:[W.jsxs("header",{className:"header",children:[W.jsxs("h1",{children:["Pi",W.jsx("span",{children:"EEG"}),"-16"," ",W.jsx("small",{style:{fontWeight:400,color:"var(--text-dim)"},children:"Dashboard"})]}),W.jsxs("div",{className:"status-bar",children:[W.jsxs("span",{children:[W.jsx("span",{className:`status-dot${F.connected?" connected":""}`}),F.connected?" Connected":" Disconnected"]}),W.jsx("span",{children:F.hz?`${F.hz} Hz`:"— Hz"}),W.jsxs("span",{children:[F.sampleCount.toLocaleString()," samples"]})]})]}),W.jsxs("div",{className:"controls",children:[W.jsx("button",{className:`btn${l?" active":""}`,onClick:z,children:l?"▶ Resume":"⏸ Pause"}),W.jsxs("button",{className:`btn btn-record${F.recording?" recording":""}`,onClick:U,children:[W.jsx("span",{className:"rec-dot"}),F.recording?`⏹ Stop ${mt(F.recordElapsed)}`:"⏺ Record"]}),W.jsxs("button",{className:`btn${m?" active":""}`,onClick:T,children:["Filter: ",m?"ON":"OFF"]}),W.jsxs("button",{className:`btn${d?" active":""}`,onClick:()=>p(X=>!X),children:["FFT ",d?"ON":"OFF"]}),W.jsx("button",{className:"btn btn-sessions",onClick:()=>t("sessions"),children:"Sessions"}),W.jsx("button",{className:"btn btn-xr",onClick:()=>I(!0),title:"Open EEG waves in immersive 3D / VR",children:"🥽 XR View"}),W.jsx("div",{className:"sep"}),W.jsxs("div",{className:"control-group",children:[W.jsx("label",{children:"Low"}),W.jsx("input",{type:"number",value:v,min:.1,max:50,step:.5,onChange:X=>{y(X.target.value),H(X.target.value,g)}})," ","Hz"]}),W.jsxs("div",{className:"control-group",children:[W.jsx("label",{children:"High"}),W.jsx("input",{type:"number",value:g,min:1,max:125,step:1,onChange:X=>{M(X.target.value),H(v,X.target.value)}})," ","Hz"]}),W.jsx("div",{className:"sep"}),W.jsxs("div",{className:"control-group",children:[W.jsx("label",{children:"Time window"}),W.jsx("select",{value:b,onChange:X=>w(parseInt(X.target.value)),children:SR.map(X=>W.jsx("option",{value:X.value,children:X.label},X.value))})]}),W.jsxs("div",{className:"control-group",children:[W.jsx("label",{children:"Scale"}),W.jsx("select",{value:S,onChange:X=>_(parseInt(X.target.value)),children:xR.map(X=>W.jsx("option",{value:X.value,children:X.label},X.value))})]})]}),W.jsxs("div",{className:`main-area${d?" with-fft":""}`,children:[R!==null&&W.jsx("div",{className:"expanded-overlay",onClick:()=>L(null),children:W.jsx("div",{className:"expanded-channel",onClick:X=>X.stopPropagation(),children:W.jsx(g_,{chIdx:R,eeg:F,yRange:S,expanded:!0,onToggleExpand:()=>L(null)})})}),W.jsx("div",{className:"grid",children:Array.from({length:vR},(X,et)=>W.jsx(g_,{chIdx:et,eeg:F,yRange:S,onToggleExpand:()=>j(et)},et))}),d&&W.jsx(By,{eeg:F})]}),F.recordResult&&W.jsx("div",{className:"modal-overlay",children:W.jsxs("div",{className:"modal-card",children:[W.jsx("h2",{children:"Recording Complete"}),W.jsxs("div",{className:"modal-details",children:[W.jsxs("div",{className:"modal-row",children:[W.jsx("span",{className:"modal-label",children:"File"}),W.jsx("span",{className:"modal-value",children:F.recordResult.filename})]}),W.jsxs("div",{className:"modal-row",children:[W.jsx("span",{className:"modal-label",children:"Duration"}),W.jsx("span",{className:"modal-value",children:mt(F.recordResult.duration)})]}),W.jsxs("div",{className:"modal-row",children:[W.jsx("span",{className:"modal-label",children:"Frames"}),W.jsx("span",{className:"modal-value",children:F.recordResult.frames.toLocaleString()})]}),W.jsxs("div",{className:"modal-row",children:[W.jsx("span",{className:"modal-label",children:"Saved to"}),W.jsx("span",{className:"modal-value modal-path",children:F.recordResult.path})]})]}),W.jsxs("div",{className:"modal-actions",children:[W.jsx("a",{className:"btn modal-btn-download",href:F.recordResult.downloadUrl,download:!0,children:"Download CSV"}),W.jsx("button",{className:"btn modal-btn-view",onClick:()=>{const X=F.recordResult.filename;F.dismissRecordResult(),s(X),t("playback")},children:"View Session"}),W.jsx("button",{className:"btn modal-btn-dismiss",onClick:F.dismissRecordResult,children:"Dismiss"})]})]})}),D&&W.jsx(_R,{eeg:F,yScale:S,onExit:()=>I(!1)}),W.jsx(Iy,{}),W.jsxs("footer",{className:"footer",children:[W.jsx("span",{children:"PiEEG-16-server · React Dashboard"}),W.jsxs("span",{className:"kbd-hints",children:[W.jsx("kbd",{children:"Space"})," Pause ",W.jsx("kbd",{children:"R"})," Record ",W.jsx("kbd",{children:"F"})," FFT ",W.jsx("kbd",{children:"V"})," XR ",W.jsx("kbd",{children:"Esc"})," Close ",W.jsx("kbd",{children:"P"})," Perf"]}),W.jsx("span",{children:"Battery powered only · Not a medical device"})]})]})}by.createRoot(document.getElementById("root")).render(W.jsx(gy.StrictMode,{children:W.jsx(yR,{})}));
