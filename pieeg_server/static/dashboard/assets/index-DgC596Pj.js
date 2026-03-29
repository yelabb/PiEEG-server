var Iy=Object.defineProperty;var By=(r,t,i)=>t in r?Iy(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var Ci=(r,t,i)=>By(r,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Kv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ld={exports:{}},Yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function zy(){if(x_)return Yo;x_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Yo.Fragment=t,Yo.jsx=i,Yo.jsxs=i,Yo}var S_;function Hy(){return S_||(S_=1,Ld.exports=zy()),Ld.exports}var w=Hy(),Od={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function Gy(){if(y_)return ge;y_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,g={};function S(z,P,W){this.props=z,this.context=P,this.refs=g,this.updater=W||M}S.prototype.isReactComponent={},S.prototype.setState=function(z,P){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,P,"setState")},S.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function A(){}A.prototype=S.prototype;function C(z,P,W){this.props=z,this.context=P,this.refs=g,this.updater=W||M}var D=C.prototype=new A;D.constructor=C,R(D,S.prototype),D.isPureReactComponent=!0;var V=Array.isArray;function F(){}var H={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function O(z,P,W){var lt=W.ref;return{$$typeof:r,type:z,key:P,ref:lt!==void 0?lt:null,props:W}}function et(z,P){return O(z.type,P,z.props)}function G(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function k(z){var P={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(W){return P[W]})}var Y=/\/+/g;function at(z,P){return typeof z=="object"&&z!==null&&z.key!=null?k(""+z.key):P.toString(36)}function tt(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(F,F):(z.status="pending",z.then(function(P){z.status==="pending"&&(z.status="fulfilled",z.value=P)},function(P){z.status==="pending"&&(z.status="rejected",z.reason=P)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function U(z,P,W,lt,gt){var q=typeof z;(q==="undefined"||q==="boolean")&&(z=null);var st=!1;if(z===null)st=!0;else switch(q){case"bigint":case"string":case"number":st=!0;break;case"object":switch(z.$$typeof){case r:case t:st=!0;break;case x:return st=z._init,U(st(z._payload),P,W,lt,gt)}}if(st)return gt=gt(z),st=lt===""?"."+at(z,0):lt,V(gt)?(W="",st!=null&&(W=st.replace(Y,"$&/")+"/"),U(gt,P,W,"",function(At){return At})):gt!=null&&(G(gt)&&(gt=et(gt,W+(gt.key==null||z&&z.key===gt.key?"":(""+gt.key).replace(Y,"$&/")+"/")+st)),P.push(gt)),1;st=0;var _t=lt===""?".":lt+":";if(V(z))for(var Q=0;Q<z.length;Q++)lt=z[Q],q=_t+at(lt,Q),st+=U(lt,P,W,q,gt);else if(Q=y(z),typeof Q=="function")for(z=Q.call(z),Q=0;!(lt=z.next()).done;)lt=lt.value,q=_t+at(lt,Q++),st+=U(lt,P,W,q,gt);else if(q==="object"){if(typeof z.then=="function")return U(tt(z),P,W,lt,gt);throw P=String(z),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return st}function I(z,P,W){if(z==null)return z;var lt=[],gt=0;return U(z,lt,"","",function(q){return P.call(W,q,gt++)}),lt}function J(z){if(z._status===-1){var P=z._result;P=P(),P.then(function(W){(z._status===0||z._status===-1)&&(z._status=1,z._result=W)},function(W){(z._status===0||z._status===-1)&&(z._status=2,z._result=W)}),z._status===-1&&(z._status=0,z._result=P)}if(z._status===1)return z._result.default;throw z._result}var ot=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},xt={map:I,forEach:function(z,P,W){I(z,function(){P.apply(this,arguments)},W)},count:function(z){var P=0;return I(z,function(){P++}),P},toArray:function(z){return I(z,function(P){return P})||[]},only:function(z){if(!G(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ge.Activity=_,ge.Children=xt,ge.Component=S,ge.Fragment=i,ge.Profiler=l,ge.PureComponent=C,ge.StrictMode=s,ge.Suspense=m,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ge.__COMPILER_RUNTIME={__proto__:null,c:function(z){return H.H.useMemoCache(z)}},ge.cache=function(z){return function(){return z.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(z,P,W){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var lt=R({},z.props),gt=z.key;if(P!=null)for(q in P.key!==void 0&&(gt=""+P.key),P)!E.call(P,q)||q==="key"||q==="__self"||q==="__source"||q==="ref"&&P.ref===void 0||(lt[q]=P[q]);var q=arguments.length-2;if(q===1)lt.children=W;else if(1<q){for(var st=Array(q),_t=0;_t<q;_t++)st[_t]=arguments[_t+2];lt.children=st}return O(z.type,gt,lt)},ge.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},ge.createElement=function(z,P,W){var lt,gt={},q=null;if(P!=null)for(lt in P.key!==void 0&&(q=""+P.key),P)E.call(P,lt)&&lt!=="key"&&lt!=="__self"&&lt!=="__source"&&(gt[lt]=P[lt]);var st=arguments.length-2;if(st===1)gt.children=W;else if(1<st){for(var _t=Array(st),Q=0;Q<st;Q++)_t[Q]=arguments[Q+2];gt.children=_t}if(z&&z.defaultProps)for(lt in st=z.defaultProps,st)gt[lt]===void 0&&(gt[lt]=st[lt]);return O(z,q,gt)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(z){return{$$typeof:p,render:z}},ge.isValidElement=G,ge.lazy=function(z){return{$$typeof:x,_payload:{_status:-1,_result:z},_init:J}},ge.memo=function(z,P){return{$$typeof:h,type:z,compare:P===void 0?null:P}},ge.startTransition=function(z){var P=H.T,W={};H.T=W;try{var lt=z(),gt=H.S;gt!==null&&gt(W,lt),typeof lt=="object"&&lt!==null&&typeof lt.then=="function"&&lt.then(F,ot)}catch(q){ot(q)}finally{P!==null&&W.types!==null&&(P.types=W.types),H.T=P}},ge.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ge.use=function(z){return H.H.use(z)},ge.useActionState=function(z,P,W){return H.H.useActionState(z,P,W)},ge.useCallback=function(z,P){return H.H.useCallback(z,P)},ge.useContext=function(z){return H.H.useContext(z)},ge.useDebugValue=function(){},ge.useDeferredValue=function(z,P){return H.H.useDeferredValue(z,P)},ge.useEffect=function(z,P){return H.H.useEffect(z,P)},ge.useEffectEvent=function(z){return H.H.useEffectEvent(z)},ge.useId=function(){return H.H.useId()},ge.useImperativeHandle=function(z,P,W){return H.H.useImperativeHandle(z,P,W)},ge.useInsertionEffect=function(z,P){return H.H.useInsertionEffect(z,P)},ge.useLayoutEffect=function(z,P){return H.H.useLayoutEffect(z,P)},ge.useMemo=function(z,P){return H.H.useMemo(z,P)},ge.useOptimistic=function(z,P){return H.H.useOptimistic(z,P)},ge.useReducer=function(z,P,W){return H.H.useReducer(z,P,W)},ge.useRef=function(z){return H.H.useRef(z)},ge.useState=function(z){return H.H.useState(z)},ge.useSyncExternalStore=function(z,P,W){return H.H.useSyncExternalStore(z,P,W)},ge.useTransition=function(){return H.H.useTransition()},ge.version="19.2.4",ge}var M_;function Ep(){return M_||(M_=1,Od.exports=Gy()),Od.exports}var Z=Ep();const Vy=Kv(Z);var Pd={exports:{}},Zo={},Fd={exports:{}},Id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function ky(){return b_||(b_=1,(function(r){function t(U,I){var J=U.length;U.push(I);t:for(;0<J;){var ot=J-1>>>1,xt=U[ot];if(0<l(xt,I))U[ot]=I,U[J]=xt,J=ot;else break t}}function i(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var I=U[0],J=U.pop();if(J!==I){U[0]=J;t:for(var ot=0,xt=U.length,z=xt>>>1;ot<z;){var P=2*(ot+1)-1,W=U[P],lt=P+1,gt=U[lt];if(0>l(W,J))lt<xt&&0>l(gt,W)?(U[ot]=gt,U[lt]=J,ot=lt):(U[ot]=W,U[P]=J,ot=P);else if(lt<xt&&0>l(gt,J))U[ot]=gt,U[lt]=J,ot=lt;else break t}}return I}function l(U,I){var J=U.sortIndex-I.sortIndex;return J!==0?J:U.id-I.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],h=[],x=1,_=null,v=3,y=!1,M=!1,R=!1,g=!1,S=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function D(U){for(var I=i(h);I!==null;){if(I.callback===null)s(h);else if(I.startTime<=U)s(h),I.sortIndex=I.expirationTime,t(m,I);else break;I=i(h)}}function V(U){if(R=!1,D(U),!M)if(i(m)!==null)M=!0,F||(F=!0,k());else{var I=i(h);I!==null&&tt(V,I.startTime-U)}}var F=!1,H=-1,E=5,O=-1;function et(){return g?!0:!(r.unstable_now()-O<E)}function G(){if(g=!1,F){var U=r.unstable_now();O=U;var I=!0;try{t:{M=!1,R&&(R=!1,A(H),H=-1),y=!0;var J=v;try{e:{for(D(U),_=i(m);_!==null&&!(_.expirationTime>U&&et());){var ot=_.callback;if(typeof ot=="function"){_.callback=null,v=_.priorityLevel;var xt=ot(_.expirationTime<=U);if(U=r.unstable_now(),typeof xt=="function"){_.callback=xt,D(U),I=!0;break e}_===i(m)&&s(m),D(U)}else s(m);_=i(m)}if(_!==null)I=!0;else{var z=i(h);z!==null&&tt(V,z.startTime-U),I=!1}}break t}finally{_=null,v=J,y=!1}I=void 0}}finally{I?k():F=!1}}}var k;if(typeof C=="function")k=function(){C(G)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,at=Y.port2;Y.port1.onmessage=G,k=function(){at.postMessage(null)}}else k=function(){S(G,0)};function tt(U,I){H=S(function(){U(r.unstable_now())},I)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(U){switch(v){case 1:case 2:case 3:var I=3;break;default:I=v}var J=v;v=I;try{return U()}finally{v=J}},r.unstable_requestPaint=function(){g=!0},r.unstable_runWithPriority=function(U,I){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=v;v=U;try{return I()}finally{v=J}},r.unstable_scheduleCallback=function(U,I,J){var ot=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ot+J:ot):J=ot,U){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=J+xt,U={id:x++,callback:I,priorityLevel:U,startTime:J,expirationTime:xt,sortIndex:-1},J>ot?(U.sortIndex=J,t(h,U),i(m)===null&&U===i(h)&&(R?(A(H),H=-1):R=!0,tt(V,J-ot))):(U.sortIndex=xt,t(m,U),M||y||(M=!0,F||(F=!0,k()))),U},r.unstable_shouldYield=et,r.unstable_wrapCallback=function(U){var I=v;return function(){var J=v;v=I;try{return U.apply(this,arguments)}finally{v=J}}}})(Id)),Id}var E_;function jy(){return E_||(E_=1,Fd.exports=ky()),Fd.exports}var Bd={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function Xy(){if(T_)return Dn;T_=1;var r=Ep();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:h,implementation:x}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,x)},Dn.flushSync=function(m){var h=f.T,x=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=h,s.p=x,s.d.f()}},Dn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,_=p(x,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):x==="script"&&s.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Dn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Dn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,_=p(x,h.crossOrigin);s.d.L(m,x,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Dn.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,h){return m(h)},Dn.useFormState=function(m,h,x){return f.H.useFormState(m,h,x)},Dn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Dn.version="19.2.4",Dn}var A_;function Wy(){if(A_)return Bd.exports;A_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Bd.exports=Xy(),Bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function qy(){if(R_)return Zo;R_=1;var r=jy(),t=Ep(),i=Wy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var b=!1,N=u.child;N;){if(N===a){b=!0,a=u,o=d;break}if(N===o){b=!0,o=u,a=d;break}N=N.sibling}if(!b){for(N=d.child;N;){if(N===a){b=!0,a=d,o=u;break}if(N===o){b=!0,o=d,a=u;break}N=N.sibling}if(!b)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),C=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),et=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Y?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case S:return"Profiler";case g:return"StrictMode";case V:return"Suspense";case F:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case C:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:at(e.type)||"Memo";case E:n=e._payload,e=e._init;try{return at(e(n))}catch{}}return null}var tt=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ot=[],xt=-1;function z(e){return{current:e}}function P(e){0>xt||(e.current=ot[xt],ot[xt]=null,xt--)}function W(e,n){xt++,ot[xt]=e.current,e.current=n}var lt=z(null),gt=z(null),q=z(null),st=z(null);function _t(e,n){switch(W(q,n),W(gt,e),W(lt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Vg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Vg(n),e=kg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(lt),W(lt,e)}function Q(){P(lt),P(gt),P(q)}function At(e){e.memoizedState!==null&&W(st,e);var n=lt.current,a=kg(n,e.type);n!==a&&(W(gt,e),W(lt,a))}function Dt(e){gt.current===e&&(P(lt),P(gt)),st.current===e&&(P(st),jo._currentValue=J)}var Bt,Pt;function Lt(e){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",Pt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+e+Pt}var Xt=!1;function Wt(e,n){if(!e||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Rt=function(){throw Error()};if(Object.defineProperty(Rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Rt,[])}catch(St){var pt=St}Reflect.construct(e,[],Rt)}else{try{Rt.call()}catch(St){pt=St}e.call(Rt.prototype)}}else{try{throw Error()}catch(St){pt=St}(Rt=e())&&typeof Rt.catch=="function"&&Rt.catch(function(){})}}catch(St){if(St&&pt&&typeof St.stack=="string")return[St.stack,pt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),b=d[0],N=d[1];if(b&&N){var X=b.split(`
`),dt=N.split(`
`);for(u=o=0;o<X.length&&!X[o].includes("DetermineComponentFrameRoot");)o++;for(;u<dt.length&&!dt[u].includes("DetermineComponentFrameRoot");)u++;if(o===X.length||u===dt.length)for(o=X.length-1,u=dt.length-1;1<=o&&0<=u&&X[o]!==dt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(X[o]!==dt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||X[o]!==dt[u]){var bt=`
`+X[o].replace(" at new "," at ");return e.displayName&&bt.includes("<anonymous>")&&(bt=bt.replace("<anonymous>",e.displayName)),bt}while(1<=o&&0<=u);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Lt(a):""}function se(e,n){switch(e.tag){case 26:case 27:case 5:return Lt(e.type);case 16:return Lt("Lazy");case 13:return e.child!==n&&n!==null?Lt("Suspense Fallback"):Lt("Suspense");case 19:return Lt("SuspenseList");case 0:case 15:return Wt(e.type,!1);case 11:return Wt(e.type.render,!1);case 1:return Wt(e.type,!0);case 31:return Lt("Activity");default:return""}}function j(e){try{var n="",a=null;do n+=se(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ue=Object.prototype.hasOwnProperty,oe=r.unstable_scheduleCallback,le=r.unstable_cancelCallback,Gt=r.unstable_shouldYield,B=r.unstable_requestPaint,T=r.unstable_now,K=r.unstable_getCurrentPriorityLevel,yt=r.unstable_ImmediatePriority,Et=r.unstable_UserBlockingPriority,mt=r.unstable_NormalPriority,Vt=r.unstable_LowPriority,Ut=r.unstable_IdlePriority,qt=r.log,ee=r.unstable_setDisableYieldValue,wt=null,Ct=null;function kt(e){if(typeof qt=="function"&&ee(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(wt,e)}catch{}}var zt=Math.clz32?Math.clz32:it,Yt=Math.log,ve=Math.LN2;function it(e){return e>>>=0,e===0?32:31-(Yt(e)/ve|0)|0}var Ft=256,Ot=262144,Zt=4194304;function Nt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var N=o&134217727;return N!==0?(o=N&~d,o!==0?u=Nt(o):(b&=N,b!==0?u=Nt(b):a||(a=N&~e,a!==0&&(u=Nt(a))))):(N=o&~d,N!==0?u=Nt(N):b!==0?u=Nt(b):a||(a=o&~e,a!==0&&(u=Nt(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Qt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function he(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function He(){var e=Zt;return Zt<<=1,(Zt&62914560)===0&&(Zt=4194304),e}function Ne(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function In(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,n,a,o,u,d){var b=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var N=e.entanglements,X=e.expirationTimes,dt=e.hiddenUpdates;for(a=b&~a;0<a;){var bt=31-zt(a),Rt=1<<bt;N[bt]=0,X[bt]=-1;var pt=dt[bt];if(pt!==null)for(dt[bt]=null,bt=0;bt<pt.length;bt++){var St=pt[bt];St!==null&&(St.lane&=-536870913)}a&=~Rt}o!==0&&ao(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(b&~n))}function ao(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ws(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Sl(e,n){var a=n&-n;return a=(a&42)!==0?1:qs(a),(a&(e.suspendedLanes|n))!==0?0:a}function qs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ys(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fi(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:d_(e.type))}function Zs(e,n){var a=I.p;try{return I.p=e,n()}finally{I.p=a}}var bi=Math.random().toString(36).slice(2),cn="__reactFiber$"+bi,_n="__reactProps$"+bi,$i="__reactContainer$"+bi,Ca="__reactEvents$"+bi,yl="__reactListeners$"+bi,Ml="__reactHandles$"+bi,bl="__reactResources$"+bi,hs="__reactMarker$"+bi;function so(e){delete e[cn],delete e[_n],delete e[Ca],delete e[yl],delete e[Ml]}function Da(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[$i]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Kg(e);e!==null;){if(a=e[cn])return a;e=Kg(e)}return n}e=a,a=e.parentNode}return null}function Na(e){if(e=e[cn]||e[$i]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ps(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function L(e){var n=e[bl];return n||(n=e[bl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nt(e){e[hs]=!0}var vt=new Set,ht={};function ct(e,n){It(e,n),It(e+"Capture",n)}function It(e,n){for(ht[e]=n,e=0;e<n.length;e++)vt.add(n[e])}var Kt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ht={},ne={};function ae(e){return ue.call(ne,e)?!0:ue.call(Ht,e)?!1:Kt.test(e)?ne[e]=!0:(Ht[e]=!0,!1)}function fe(e,n,a){if(ae(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function me(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Jt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $e(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){a=""+b,d.call(this,b)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(b){a=""+b},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oe(e){if(!e._valueTracker){var n=$e(e)?"checked":"value";e._valueTracker=tn(e,n,""+e[n])}}function vn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=$e(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function te(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bn=/[\n"\\]/g;function pe(e){return e.replace(Bn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zn(e,n,a,o,u,d,b,N){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),n!=null?b==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xe(n)):e.value!==""+xe(n)&&(e.value=""+xe(n)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),n!=null?Ei(e,b,xe(n)):a!=null?Ei(e,b,xe(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?e.name=""+xe(N):e.removeAttribute("name")}function Qn(e,n,a,o,u,d,b,N){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Oe(e);return}a=a!=null?""+xe(a):"",n=n!=null?""+xe(n):a,N||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=N?e.checked:!!o,e.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),Oe(e)}function Ei(e,n,a){n==="number"&&te(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Jn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+xe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ze(e,n,a){if(n!=null&&(n=""+xe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+xe(a):""}function un(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(tt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=xe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Oe(e)}function Hn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var fn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ti(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||fn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ta(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ti(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Ti(e,d,n[d])}function Ks(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ox=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function El(e){return Ox.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ea(){}var Cu=null;function Du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qs=null,Js=null;function Gp(e){var n=Na(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;t:switch(e=n.stateNode,n.type){case"input":if(zn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[_n]||null;if(!u)throw Error(s(90));zn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&vn(o)}break t;case"textarea":ze(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Jn(e,!!a.multiple,n,!1)}}}var Nu=!1;function Vp(e,n,a){if(Nu)return e(n,a);Nu=!0;try{var o=e(n);return o}finally{if(Nu=!1,(Qs!==null||Js!==null)&&(fc(),Qs&&(n=Qs,e=Js,Js=Qs=null,Gp(n),e)))for(n=0;n<e.length;n++)Gp(e[n])}}function ro(e,n){var a=e.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=!1;if(na)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Uu=!1}var Ua=null,Lu=null,Tl=null;function kp(){if(Tl)return Tl;var e,n=Lu,a=n.length,o,u="value"in Ua?Ua.value:Ua.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var b=a-e;for(o=1;o<=b&&n[a-o]===u[d-o];o++);return Tl=u.slice(e,1<o?1-o:void 0)}function Al(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Rl(){return!0}function jp(){return!1}function jn(e){function n(a,o,u,d,b){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(a=e[N],this[N]=a?a(d):d[N]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Rl:jp,this.isPropagationStopped=jp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),n}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=jn(ms),lo=_({},ms,{view:0,detail:0}),Px=jn(lo),Ou,Pu,co,Cl=_({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(Ou=e.screenX-co.screenX,Pu=e.screenY-co.screenY):Pu=Ou=0,co=e),Ou)},movementY:function(e){return"movementY"in e?e.movementY:Pu}}),Xp=jn(Cl),Fx=_({},Cl,{dataTransfer:0}),Ix=jn(Fx),Bx=_({},lo,{relatedTarget:0}),Fu=jn(Bx),zx=_({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Hx=jn(zx),Gx=_({},ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vx=jn(Gx),kx=_({},ms,{data:0}),Wp=jn(kx),jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Wx[e])?!!n[e]:!1}function Iu(){return qx}var Yx=_({},lo,{key:function(e){if(e.key){var n=jx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Iu,charCode:function(e){return e.type==="keypress"?Al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zx=jn(Yx),Kx=_({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qp=jn(Kx),Qx=_({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Iu}),Jx=jn(Qx),$x=_({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),tS=jn($x),eS=_({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nS=jn(eS),iS=_({},ms,{newState:0,oldState:0}),aS=jn(iS),sS=[9,13,27,32],Bu=na&&"CompositionEvent"in window,uo=null;na&&"documentMode"in document&&(uo=document.documentMode);var rS=na&&"TextEvent"in window&&!uo,Yp=na&&(!Bu||uo&&8<uo&&11>=uo),Zp=" ",Kp=!1;function Qp(e,n){switch(e){case"keyup":return sS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $s=!1;function oS(e,n){switch(e){case"compositionend":return Jp(n);case"keypress":return n.which!==32?null:(Kp=!0,Zp);case"textInput":return e=n.data,e===Zp&&Kp?null:e;default:return null}}function lS(e,n){if($s)return e==="compositionend"||!Bu&&Qp(e,n)?(e=kp(),Tl=Lu=Ua=null,$s=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yp&&n.locale!=="ko"?null:n.data;default:return null}}var cS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!cS[e.type]:n==="textarea"}function tm(e,n,a,o){Qs?Js?Js.push(o):Js=[o]:Qs=o,n=vc(n,"onChange"),0<n.length&&(a=new wl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var fo=null,ho=null;function uS(e){Fg(e,0)}function Dl(e){var n=ps(e);if(vn(n))return e}function em(e,n){if(e==="change")return n}var nm=!1;if(na){var zu;if(na){var Hu="oninput"in document;if(!Hu){var im=document.createElement("div");im.setAttribute("oninput","return;"),Hu=typeof im.oninput=="function"}zu=Hu}else zu=!1;nm=zu&&(!document.documentMode||9<document.documentMode)}function am(){fo&&(fo.detachEvent("onpropertychange",sm),ho=fo=null)}function sm(e){if(e.propertyName==="value"&&Dl(ho)){var n=[];tm(n,ho,e,Du(e)),Vp(uS,n)}}function fS(e,n,a){e==="focusin"?(am(),fo=n,ho=a,fo.attachEvent("onpropertychange",sm)):e==="focusout"&&am()}function dS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dl(ho)}function hS(e,n){if(e==="click")return Dl(n)}function pS(e,n){if(e==="input"||e==="change")return Dl(n)}function mS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:mS;function po(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ue.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function rm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function om(e,n){var a=rm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=rm(a)}}function lm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?lm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function cm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=te(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=te(e.document)}return n}function Gu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var gS=na&&"documentMode"in document&&11>=document.documentMode,tr=null,Vu=null,mo=null,ku=!1;function um(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ku||tr==null||tr!==te(o)||(o=tr,"selectionStart"in o&&Gu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),mo&&po(mo,o)||(mo=o,o=vc(Vu,"onSelect"),0<o.length&&(n=new wl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=tr)))}function gs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var er={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionrun:gs("Transition","TransitionRun"),transitionstart:gs("Transition","TransitionStart"),transitioncancel:gs("Transition","TransitionCancel"),transitionend:gs("Transition","TransitionEnd")},ju={},fm={};na&&(fm=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function _s(e){if(ju[e])return ju[e];if(!er[e])return e;var n=er[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in fm)return ju[e]=n[a];return e}var dm=_s("animationend"),hm=_s("animationiteration"),pm=_s("animationstart"),_S=_s("transitionrun"),vS=_s("transitionstart"),xS=_s("transitioncancel"),mm=_s("transitionend"),gm=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function Ai(e,n){gm.set(e,n),ct(n,[e])}var Nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],nr=0,Wu=0;function Ul(){for(var e=nr,n=Wu=nr=0;n<e;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var d=fi[n];if(fi[n++]=null,o!==null&&u!==null){var b=o.pending;b===null?u.next=u:(u.next=b.next,b.next=u),o.pending=u}d!==0&&_m(a,u,d)}}function Ll(e,n,a,o){fi[nr++]=e,fi[nr++]=n,fi[nr++]=a,fi[nr++]=o,Wu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function qu(e,n,a,o){return Ll(e,n,a,o),Ol(e)}function vs(e,n){return Ll(e,null,null,n),Ol(e)}function _m(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-zt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Ol(e){if(50<Io)throw Io=0,id=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ir={};function SS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new SS(e,n,a,o)}function Yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function vm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Pl(e,n,a,o,u,d){var b=0;if(o=e,typeof e=="function")Yu(e)&&(b=1);else if(typeof e=="string")b=Ty(e,a,lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=ti(31,a,n,u),e.elementType=O,e.lanes=d,e;case R:return xs(a.children,u,d,n);case g:b=8,u|=24;break;case S:return e=ti(12,a,n,u|2),e.elementType=S,e.lanes=d,e;case V:return e=ti(13,a,n,u),e.elementType=V,e.lanes=d,e;case F:return e=ti(19,a,n,u),e.elementType=F,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:b=10;break t;case A:b=9;break t;case D:b=11;break t;case H:b=14;break t;case E:b=16,o=null;break t}b=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(b,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function xs(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function Zu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function xm(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Ku(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Sm=new WeakMap;function di(e,n){if(typeof e=="object"&&e!==null){var a=Sm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:j(n)},Sm.set(e,n),n)}return{value:e,source:n,stack:j(n)}}var ar=[],sr=0,Fl=null,go=0,hi=[],pi=0,La=null,Ii=1,Bi="";function aa(e,n){ar[sr++]=go,ar[sr++]=Fl,Fl=e,go=n}function ym(e,n,a){hi[pi++]=Ii,hi[pi++]=Bi,hi[pi++]=La,La=e;var o=Ii;e=Bi;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var d=32-zt(n)+u;if(30<d){var b=u-u%5;d=(o&(1<<b)-1).toString(32),o>>=b,u-=b,Ii=1<<32-zt(n)+u|a<<u|o,Bi=d+e}else Ii=1<<d|a<<u|o,Bi=e}function Qu(e){e.return!==null&&(aa(e,1),ym(e,1,0))}function Ju(e){for(;e===Fl;)Fl=ar[--sr],ar[sr]=null,go=ar[--sr],ar[sr]=null;for(;e===La;)La=hi[--pi],hi[pi]=null,Bi=hi[--pi],hi[pi]=null,Ii=hi[--pi],hi[pi]=null}function Mm(e,n){hi[pi++]=Ii,hi[pi++]=Bi,hi[pi++]=La,Ii=n.id,Bi=n.overflow,La=e}var En=null,Ze=null,Ce=!1,Oa=null,mi=!1,$u=Error(s(519));function Pa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _o(di(n,e)),$u}function bm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[_n]=o,a){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(a=0;a<zo.length;a++)Te(zo[a],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),Qn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),un(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Hg(n.textContent,a)?(o.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),o.onScroll!=null&&Te("scroll",n),o.onScrollEnd!=null&&Te("scrollend",n),o.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||Pa(e,!0)}function Em(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:En=En.return}}function rr(e){if(e!==En)return!1;if(!Ce)return Em(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||vd(e.type,e.memoizedProps)),a=!a),a&&Ze&&Pa(e),Em(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Zg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Zg(e)}else n===27?(n=Ze,Za(e.type)?(e=bd,bd=null,Ze=e):Ze=n):Ze=En?_i(e.stateNode.nextSibling):null;return!0}function Ss(){Ze=En=null,Ce=!1}function tf(){var e=Oa;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Oa=null),e}function _o(e){Oa===null?Oa=[e]:Oa.push(e)}var ef=z(null),ys=null,sa=null;function Fa(e,n,a){W(ef,n._currentValue),n._currentValue=a}function ra(e){e._currentValue=ef.current,P(ef)}function nf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function af(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var b=u.child;d=d.firstContext;t:for(;d!==null;){var N=d;d=u;for(var X=0;X<n.length;X++)if(N.context===n[X]){d.lanes|=a,N=d.alternate,N!==null&&(N.lanes|=a),nf(d.return,a,e),o||(b=null);break t}d=N.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(s(341));b.lanes|=a,d=b.alternate,d!==null&&(d.lanes|=a),nf(b,a,e),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===e){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function or(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(s(387));if(b=b.memoizedProps,b!==null){var N=u.type;$n(u.pendingProps.value,b.value)||(e!==null?e.push(N):e=[N])}}else if(u===st.current){if(b=u.alternate,b===null)throw Error(s(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(jo):e=[jo])}u=u.return}e!==null&&af(n,e,a,o),n.flags|=262144}function Il(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ms(e){ys=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return Tm(ys,e)}function Bl(e,n){return ys===null&&Ms(e),Tm(e,n)}function Tm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(e===null)throw Error(s(308));sa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else sa=sa.next=n;return a}var yS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},MS=r.unstable_scheduleCallback,bS=r.unstable_NormalPriority,dn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sf(){return{controller:new yS,data:new Map,refCount:0}}function vo(e){e.refCount--,e.refCount===0&&MS(bS,function(){e.controller.abort()})}var xo=null,rf=0,lr=0,cr=null;function ES(e,n){if(xo===null){var a=xo=[];rf=0,lr=cd(),cr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return rf++,n.then(Am,Am),n}function Am(){if(--rf===0&&xo!==null){cr!==null&&(cr.status="fulfilled");var e=xo;xo=null,lr=0,cr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function TS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Rm=U.S;U.S=function(e,n){ug=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ES(e,n),Rm!==null&&Rm(e,n)};var bs=z(null);function of(){var e=bs.current;return e!==null?e:Ye.pooledCache}function zl(e,n){n===null?W(bs,bs.current):W(bs,n.pool)}function wm(){var e=of();return e===null?null:{parent:dn._currentValue,pool:e}}var ur=Error(s(460)),lf=Error(s(474)),Hl=Error(s(542)),Gl={then:function(){}};function Cm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ea,ea),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Um(e),e;default:if(typeof n.status=="string")n.then(ea,ea);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Um(e),e}throw Ts=n,ur}}function Es(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ts=a,ur):a}}var Ts=null;function Nm(){if(Ts===null)throw Error(s(459));var e=Ts;return Ts=null,e}function Um(e){if(e===ur||e===Hl)throw Error(s(483))}var fr=null,So=0;function Vl(e){var n=So;return So+=1,fr===null&&(fr=[]),Dm(fr,e,n)}function yo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function kl(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Lm(e){function n(rt,$){if(e){var ft=rt.deletions;ft===null?(rt.deletions=[$],rt.flags|=16):ft.push($)}}function a(rt,$){if(!e)return null;for(;$!==null;)n(rt,$),$=$.sibling;return null}function o(rt){for(var $=new Map;rt!==null;)rt.key!==null?$.set(rt.key,rt):$.set(rt.index,rt),rt=rt.sibling;return $}function u(rt,$){return rt=ia(rt,$),rt.index=0,rt.sibling=null,rt}function d(rt,$,ft){return rt.index=ft,e?(ft=rt.alternate,ft!==null?(ft=ft.index,ft<$?(rt.flags|=67108866,$):ft):(rt.flags|=67108866,$)):(rt.flags|=1048576,$)}function b(rt){return e&&rt.alternate===null&&(rt.flags|=67108866),rt}function N(rt,$,ft,Tt){return $===null||$.tag!==6?($=Zu(ft,rt.mode,Tt),$.return=rt,$):($=u($,ft),$.return=rt,$)}function X(rt,$,ft,Tt){var re=ft.type;return re===R?bt(rt,$,ft.props.children,Tt,ft.key):$!==null&&($.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===E&&Es(re)===$.type)?($=u($,ft.props),yo($,ft),$.return=rt,$):($=Pl(ft.type,ft.key,ft.props,null,rt.mode,Tt),yo($,ft),$.return=rt,$)}function dt(rt,$,ft,Tt){return $===null||$.tag!==4||$.stateNode.containerInfo!==ft.containerInfo||$.stateNode.implementation!==ft.implementation?($=Ku(ft,rt.mode,Tt),$.return=rt,$):($=u($,ft.children||[]),$.return=rt,$)}function bt(rt,$,ft,Tt,re){return $===null||$.tag!==7?($=xs(ft,rt.mode,Tt,re),$.return=rt,$):($=u($,ft),$.return=rt,$)}function Rt(rt,$,ft){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=Zu(""+$,rt.mode,ft),$.return=rt,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case y:return ft=Pl($.type,$.key,$.props,null,rt.mode,ft),yo(ft,$),ft.return=rt,ft;case M:return $=Ku($,rt.mode,ft),$.return=rt,$;case E:return $=Es($),Rt(rt,$,ft)}if(tt($)||k($))return $=xs($,rt.mode,ft,null),$.return=rt,$;if(typeof $.then=="function")return Rt(rt,Vl($),ft);if($.$$typeof===C)return Rt(rt,Bl(rt,$),ft);kl(rt,$)}return null}function pt(rt,$,ft,Tt){var re=$!==null?$.key:null;if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return re!==null?null:N(rt,$,""+ft,Tt);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case y:return ft.key===re?X(rt,$,ft,Tt):null;case M:return ft.key===re?dt(rt,$,ft,Tt):null;case E:return ft=Es(ft),pt(rt,$,ft,Tt)}if(tt(ft)||k(ft))return re!==null?null:bt(rt,$,ft,Tt,null);if(typeof ft.then=="function")return pt(rt,$,Vl(ft),Tt);if(ft.$$typeof===C)return pt(rt,$,Bl(rt,ft),Tt);kl(rt,ft)}return null}function St(rt,$,ft,Tt,re){if(typeof Tt=="string"&&Tt!==""||typeof Tt=="number"||typeof Tt=="bigint")return rt=rt.get(ft)||null,N($,rt,""+Tt,re);if(typeof Tt=="object"&&Tt!==null){switch(Tt.$$typeof){case y:return rt=rt.get(Tt.key===null?ft:Tt.key)||null,X($,rt,Tt,re);case M:return rt=rt.get(Tt.key===null?ft:Tt.key)||null,dt($,rt,Tt,re);case E:return Tt=Es(Tt),St(rt,$,ft,Tt,re)}if(tt(Tt)||k(Tt))return rt=rt.get(ft)||null,bt($,rt,Tt,re,null);if(typeof Tt.then=="function")return St(rt,$,ft,Vl(Tt),re);if(Tt.$$typeof===C)return St(rt,$,ft,Bl($,Tt),re);kl($,Tt)}return null}function $t(rt,$,ft,Tt){for(var re=null,Pe=null,ie=$,Se=$=0,we=null;ie!==null&&Se<ft.length;Se++){ie.index>Se?(we=ie,ie=null):we=ie.sibling;var Fe=pt(rt,ie,ft[Se],Tt);if(Fe===null){ie===null&&(ie=we);break}e&&ie&&Fe.alternate===null&&n(rt,ie),$=d(Fe,$,Se),Pe===null?re=Fe:Pe.sibling=Fe,Pe=Fe,ie=we}if(Se===ft.length)return a(rt,ie),Ce&&aa(rt,Se),re;if(ie===null){for(;Se<ft.length;Se++)ie=Rt(rt,ft[Se],Tt),ie!==null&&($=d(ie,$,Se),Pe===null?re=ie:Pe.sibling=ie,Pe=ie);return Ce&&aa(rt,Se),re}for(ie=o(ie);Se<ft.length;Se++)we=St(ie,rt,Se,ft[Se],Tt),we!==null&&(e&&we.alternate!==null&&ie.delete(we.key===null?Se:we.key),$=d(we,$,Se),Pe===null?re=we:Pe.sibling=we,Pe=we);return e&&ie.forEach(function(ts){return n(rt,ts)}),Ce&&aa(rt,Se),re}function ce(rt,$,ft,Tt){if(ft==null)throw Error(s(151));for(var re=null,Pe=null,ie=$,Se=$=0,we=null,Fe=ft.next();ie!==null&&!Fe.done;Se++,Fe=ft.next()){ie.index>Se?(we=ie,ie=null):we=ie.sibling;var ts=pt(rt,ie,Fe.value,Tt);if(ts===null){ie===null&&(ie=we);break}e&&ie&&ts.alternate===null&&n(rt,ie),$=d(ts,$,Se),Pe===null?re=ts:Pe.sibling=ts,Pe=ts,ie=we}if(Fe.done)return a(rt,ie),Ce&&aa(rt,Se),re;if(ie===null){for(;!Fe.done;Se++,Fe=ft.next())Fe=Rt(rt,Fe.value,Tt),Fe!==null&&($=d(Fe,$,Se),Pe===null?re=Fe:Pe.sibling=Fe,Pe=Fe);return Ce&&aa(rt,Se),re}for(ie=o(ie);!Fe.done;Se++,Fe=ft.next())Fe=St(ie,rt,Se,Fe.value,Tt),Fe!==null&&(e&&Fe.alternate!==null&&ie.delete(Fe.key===null?Se:Fe.key),$=d(Fe,$,Se),Pe===null?re=Fe:Pe.sibling=Fe,Pe=Fe);return e&&ie.forEach(function(Fy){return n(rt,Fy)}),Ce&&aa(rt,Se),re}function We(rt,$,ft,Tt){if(typeof ft=="object"&&ft!==null&&ft.type===R&&ft.key===null&&(ft=ft.props.children),typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case y:t:{for(var re=ft.key;$!==null;){if($.key===re){if(re=ft.type,re===R){if($.tag===7){a(rt,$.sibling),Tt=u($,ft.props.children),Tt.return=rt,rt=Tt;break t}}else if($.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===E&&Es(re)===$.type){a(rt,$.sibling),Tt=u($,ft.props),yo(Tt,ft),Tt.return=rt,rt=Tt;break t}a(rt,$);break}else n(rt,$);$=$.sibling}ft.type===R?(Tt=xs(ft.props.children,rt.mode,Tt,ft.key),Tt.return=rt,rt=Tt):(Tt=Pl(ft.type,ft.key,ft.props,null,rt.mode,Tt),yo(Tt,ft),Tt.return=rt,rt=Tt)}return b(rt);case M:t:{for(re=ft.key;$!==null;){if($.key===re)if($.tag===4&&$.stateNode.containerInfo===ft.containerInfo&&$.stateNode.implementation===ft.implementation){a(rt,$.sibling),Tt=u($,ft.children||[]),Tt.return=rt,rt=Tt;break t}else{a(rt,$);break}else n(rt,$);$=$.sibling}Tt=Ku(ft,rt.mode,Tt),Tt.return=rt,rt=Tt}return b(rt);case E:return ft=Es(ft),We(rt,$,ft,Tt)}if(tt(ft))return $t(rt,$,ft,Tt);if(k(ft)){if(re=k(ft),typeof re!="function")throw Error(s(150));return ft=re.call(ft),ce(rt,$,ft,Tt)}if(typeof ft.then=="function")return We(rt,$,Vl(ft),Tt);if(ft.$$typeof===C)return We(rt,$,Bl(rt,ft),Tt);kl(rt,ft)}return typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint"?(ft=""+ft,$!==null&&$.tag===6?(a(rt,$.sibling),Tt=u($,ft),Tt.return=rt,rt=Tt):(a(rt,$),Tt=Zu(ft,rt.mode,Tt),Tt.return=rt,rt=Tt),b(rt)):a(rt,$)}return function(rt,$,ft,Tt){try{So=0;var re=We(rt,$,ft,Tt);return fr=null,re}catch(ie){if(ie===ur||ie===Hl)throw ie;var Pe=ti(29,ie,null,rt.mode);return Pe.lanes=Tt,Pe.return=rt,Pe}finally{}}}var As=Lm(!0),Om=Lm(!1),Ia=!1;function cf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ie&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ol(e),_m(e,null,a),n}return Ll(e,o,n,a),Ol(e)}function Mo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ws(e,a)}}function ff(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=b:d=d.next=b,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var df=!1;function bo(){if(df){var e=cr;if(e!==null)throw e}}function Eo(e,n,a,o){df=!1;var u=e.updateQueue;Ia=!1;var d=u.firstBaseUpdate,b=u.lastBaseUpdate,N=u.shared.pending;if(N!==null){u.shared.pending=null;var X=N,dt=X.next;X.next=null,b===null?d=dt:b.next=dt,b=X;var bt=e.alternate;bt!==null&&(bt=bt.updateQueue,N=bt.lastBaseUpdate,N!==b&&(N===null?bt.firstBaseUpdate=dt:N.next=dt,bt.lastBaseUpdate=X))}if(d!==null){var Rt=u.baseState;b=0,bt=dt=X=null,N=d;do{var pt=N.lane&-536870913,St=pt!==N.lane;if(St?(Re&pt)===pt:(o&pt)===pt){pt!==0&&pt===lr&&(df=!0),bt!==null&&(bt=bt.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});t:{var $t=e,ce=N;pt=n;var We=a;switch(ce.tag){case 1:if($t=ce.payload,typeof $t=="function"){Rt=$t.call(We,Rt,pt);break t}Rt=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=ce.payload,pt=typeof $t=="function"?$t.call(We,Rt,pt):$t,pt==null)break t;Rt=_({},Rt,pt);break t;case 2:Ia=!0}}pt=N.callback,pt!==null&&(e.flags|=64,St&&(e.flags|=8192),St=u.callbacks,St===null?u.callbacks=[pt]:St.push(pt))}else St={lane:pt,tag:N.tag,payload:N.payload,callback:N.callback,next:null},bt===null?(dt=bt=St,X=Rt):bt=bt.next=St,b|=pt;if(N=N.next,N===null){if(N=u.shared.pending,N===null)break;St=N,N=St.next,St.next=null,u.lastBaseUpdate=St,u.shared.pending=null}}while(!0);bt===null&&(X=Rt),u.baseState=X,u.firstBaseUpdate=dt,u.lastBaseUpdate=bt,d===null&&(u.shared.lanes=0),ja|=b,e.lanes=b,e.memoizedState=Rt}}function Pm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Fm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pm(a[e],n)}var dr=z(null),jl=z(0);function Im(e,n){e=ma,W(jl,e),W(dr,n),ma=e|n.baseLanes}function hf(){W(jl,ma),W(dr,dr.current)}function pf(){ma=jl.current,P(dr),P(jl)}var ei=z(null),gi=null;function Ha(e){var n=e.alternate;W(rn,rn.current&1),W(ei,e),gi===null&&(n===null||dr.current!==null||n.memoizedState!==null)&&(gi=e)}function mf(e){W(rn,rn.current),W(ei,e),gi===null&&(gi=e)}function Bm(e){e.tag===22?(W(rn,rn.current),W(ei,e),gi===null&&(gi=e)):Ga()}function Ga(){W(rn,rn.current),W(ei,ei.current)}function ni(e){P(ei),gi===e&&(gi=null),P(rn)}var rn=z(0);function Xl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||yd(a)||Md(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,_e=null,je=null,hn=null,Wl=!1,hr=!1,Rs=!1,ql=0,To=0,pr=null,AS=0;function nn(){throw Error(s(321))}function gf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function _f(e,n,a,o,u,d){return oa=d,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?y0:Uf,Rs=!1,d=a(o,u),Rs=!1,hr&&(d=Hm(n,a,o,u)),zm(e),d}function zm(e){U.H=wo;var n=je!==null&&je.next!==null;if(oa=0,hn=je=_e=null,Wl=!1,To=0,pr=null,n)throw Error(s(300));e===null||pn||(e=e.dependencies,e!==null&&Il(e)&&(pn=!0))}function Hm(e,n,a,o){_e=e;var u=0;do{if(hr&&(pr=null),To=0,hr=!1,25<=u)throw Error(s(301));if(u+=1,hn=je=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}U.H=M0,d=n(a,o)}while(hr);return d}function RS(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?Ao(n):n,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(_e.flags|=1024),n}function vf(){var e=ql!==0;return ql=0,e}function xf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Sf(e){if(Wl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Wl=!1}oa=0,hn=je=_e=null,hr=!1,To=ql=0,pr=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?_e.memoizedState=hn=e:hn=hn.next=e,hn}function on(){if(je===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=hn===null?_e.memoizedState:hn.next;if(n!==null)hn=n,je=e;else{if(e===null)throw _e.alternate===null?Error(s(467)):Error(s(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},hn===null?_e.memoizedState=hn=e:hn=hn.next=e}return hn}function Yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var n=To;return To+=1,pr===null&&(pr=[]),e=Dm(pr,e,n),n=_e,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?y0:Uf),e}function Zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ao(e);if(e.$$typeof===C)return Tn(e)}throw Error(s(438,String(e)))}function yf(e){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=_e.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Yl(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=et;return n.index++,a}function la(e,n){return typeof n=="function"?n(e):n}function Kl(e){var n=on();return Mf(n,je,e)}function Mf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var b=u.next;u.next=d.next,d.next=b}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var N=b=null,X=null,dt=n,bt=!1;do{var Rt=dt.lane&-536870913;if(Rt!==dt.lane?(Re&Rt)===Rt:(oa&Rt)===Rt){var pt=dt.revertLane;if(pt===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:dt.action,hasEagerState:dt.hasEagerState,eagerState:dt.eagerState,next:null}),Rt===lr&&(bt=!0);else if((oa&pt)===pt){dt=dt.next,pt===lr&&(bt=!0);continue}else Rt={lane:0,revertLane:dt.revertLane,gesture:null,action:dt.action,hasEagerState:dt.hasEagerState,eagerState:dt.eagerState,next:null},X===null?(N=X=Rt,b=d):X=X.next=Rt,_e.lanes|=pt,ja|=pt;Rt=dt.action,Rs&&a(d,Rt),d=dt.hasEagerState?dt.eagerState:a(d,Rt)}else pt={lane:Rt,revertLane:dt.revertLane,gesture:dt.gesture,action:dt.action,hasEagerState:dt.hasEagerState,eagerState:dt.eagerState,next:null},X===null?(N=X=pt,b=d):X=X.next=pt,_e.lanes|=Rt,ja|=Rt;dt=dt.next}while(dt!==null&&dt!==n);if(X===null?b=d:X.next=N,!$n(d,e.memoizedState)&&(pn=!0,bt&&(a=cr,a!==null)))throw a;e.memoizedState=d,e.baseState=b,e.baseQueue=X,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function bf(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do d=e(d,b.action),b=b.next;while(b!==u);$n(d,n.memoizedState)||(pn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Gm(e,n,a){var o=_e,u=on(),d=Ce;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var b=!$n((je||u).memoizedState,a);if(b&&(u.memoizedState=a,pn=!0),u=u.queue,Af(jm.bind(null,o,u,e),[e]),u.getSnapshot!==n||b||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,mr(9,{destroy:void 0},km.bind(null,o,u,a,n),null),Ye===null)throw Error(s(349));d||(oa&127)!==0||Vm(o,n,a)}return a}function Vm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=Yl(),_e.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function km(e,n,a,o){n.value=a,n.getSnapshot=o,Xm(n)&&Wm(e)}function jm(e,n,a){return a(function(){Xm(n)&&Wm(e)})}function Xm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Wm(e){var n=vs(e,2);n!==null&&Zn(n,e,2)}function Ef(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),Rs){kt(!0);try{a()}finally{kt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},n}function qm(e,n,a,o){return e.baseState=a,Mf(e,je,typeof o=="function"?o:la)}function wS(e,n,a,o,u){if($l(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};U.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Ym(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Ym(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=U.T,b={};U.T=b;try{var N=a(u,o),X=U.S;X!==null&&X(b,N),Zm(e,n,N)}catch(dt){Tf(e,n,dt)}finally{d!==null&&b.types!==null&&(d.types=b.types),U.T=d}}else try{d=a(u,o),Zm(e,n,d)}catch(dt){Tf(e,n,dt)}}function Zm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Km(e,n,o)},function(o){return Tf(e,n,o)}):Km(e,n,a)}function Km(e,n,a){n.status="fulfilled",n.value=a,Qm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Ym(e,a)))}function Tf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Qm(n),n=n.next;while(n!==o)}e.action=null}function Qm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Jm(e,n){return n}function $m(e,n){if(Ce){var a=Ye.formState;if(a!==null){t:{var o=_e;if(Ce){if(Ze){e:{for(var u=Ze,d=mi;u.nodeType!==8;){if(!d){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Ze=_i(u.nextSibling),o=u.data==="F!";break t}}Pa(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jm,lastRenderedState:n},a.queue=o,a=v0.bind(null,_e,o),o.dispatch=a,o=Ef(!1),d=Nf.bind(null,_e,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=wS.bind(null,_e,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function t0(e){var n=on();return e0(n,je,e)}function e0(e,n,a){if(n=Mf(e,n,Jm)[0],e=Kl(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ao(n)}catch(b){throw b===ur?Hl:b}else o=n;n=on();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,mr(9,{destroy:void 0},CS.bind(null,u,a),null)),[o,d,e]}function CS(e,n){e.action=n}function n0(e){var n=on(),a=je;if(a!==null)return e0(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function mr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=_e.updateQueue,n===null&&(n=Yl(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function i0(){return on().memoizedState}function Ql(e,n,a,o){var u=Gn();_e.flags|=e,u.memoizedState=mr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Jl(e,n,a,o){var u=on();o=o===void 0?null:o;var d=u.memoizedState.inst;je!==null&&o!==null&&gf(o,je.memoizedState.deps)?u.memoizedState=mr(n,d,a,o):(_e.flags|=e,u.memoizedState=mr(1|n,d,a,o))}function a0(e,n){Ql(8390656,8,e,n)}function Af(e,n){Jl(2048,8,e,n)}function DS(e){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=Yl(),_e.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function s0(e){var n=on().memoizedState;return DS({ref:n,nextImpl:e}),function(){if((Ie&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function r0(e,n){return Jl(4,2,e,n)}function o0(e,n){return Jl(4,4,e,n)}function l0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function c0(e,n,a){a=a!=null?a.concat([e]):null,Jl(4,4,l0.bind(null,n,e),a)}function Rf(){}function u0(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&gf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function f0(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&gf(n,o[1]))return o[0];if(o=e(),Rs){kt(!0);try{e()}finally{kt(!1)}}return a.memoizedState=[o,n],o}function wf(e,n,a){return a===void 0||(oa&1073741824)!==0&&(Re&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=dg(),_e.lanes|=e,ja|=e,a)}function d0(e,n,a,o){return $n(a,n)?a:dr.current!==null?(e=wf(e,a,o),$n(e,n)||(pn=!0),e):(oa&42)===0||(oa&1073741824)!==0&&(Re&261930)===0?(pn=!0,e.memoizedState=a):(e=dg(),_e.lanes|=e,ja|=e,n)}function h0(e,n,a,o,u){var d=I.p;I.p=d!==0&&8>d?d:8;var b=U.T,N={};U.T=N,Nf(e,!1,n,a);try{var X=u(),dt=U.S;if(dt!==null&&dt(N,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var bt=TS(X,o);Ro(e,n,bt,si(e))}else Ro(e,n,o,si(e))}catch(Rt){Ro(e,n,{then:function(){},status:"rejected",reason:Rt},si())}finally{I.p=d,b!==null&&N.types!==null&&(b.types=N.types),U.T=b}}function NS(){}function Cf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=p0(e).queue;h0(e,u,n,J,a===null?NS:function(){return m0(e),a(o)})}function p0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function m0(e){var n=p0(e);n.next===null&&(n=e.alternate.memoizedState),Ro(e,n.next.queue,{},si())}function Df(){return Tn(jo)}function g0(){return on().memoizedState}function _0(){return on().memoizedState}function US(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Ba(a);var o=za(n,e,a);o!==null&&(Zn(o,n,a),Mo(o,n,a)),n={cache:sf()},e.payload=n;return}n=n.return}}function LS(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},$l(e)?x0(n,a):(a=qu(e,n,a,o),a!==null&&(Zn(a,e,o),S0(a,n,o)))}function v0(e,n,a){var o=si();Ro(e,n,a,o)}function Ro(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if($l(e))x0(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var b=n.lastRenderedState,N=d(b,a);if(u.hasEagerState=!0,u.eagerState=N,$n(N,b))return Ll(e,n,u,0),Ye===null&&Ul(),!1}catch{}finally{}if(a=qu(e,n,u,o),a!==null)return Zn(a,e,o),S0(a,n,o),!0}return!1}function Nf(e,n,a,o){if(o={lane:2,revertLane:cd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},$l(e)){if(n)throw Error(s(479))}else n=qu(e,a,o,2),n!==null&&Zn(n,e,2)}function $l(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function x0(e,n){hr=Wl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function S0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ws(e,a)}}var wo={readContext:Tn,use:Zl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};wo.useEffectEvent=nn;var y0={readContext:Tn,use:Zl,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:a0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ql(4194308,4,l0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ql(4194308,4,e,n)},useInsertionEffect:function(e,n){Ql(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var o=e();if(Rs){kt(!0);try{e()}finally{kt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(Rs){kt(!0);try{a(n)}finally{kt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=LS.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ef(e);var n=e.queue,a=v0.bind(null,_e,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Rf,useDeferredValue:function(e,n){var a=Gn();return wf(a,e,n)},useTransition:function(){var e=Ef(!1);return e=h0.bind(null,_e,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=_e,u=Gn();if(Ce){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Re&127)!==0||Vm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,a0(jm.bind(null,o,d,e),[e]),o.flags|=2048,mr(9,{destroy:void 0},km.bind(null,o,d,a,n),null),a},useId:function(){var e=Gn(),n=Ye.identifierPrefix;if(Ce){var a=Bi,o=Ii;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ql++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=AS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Df,useFormState:$m,useActionState:$m,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Nf.bind(null,_e,!0,a),a.dispatch=n,[e,n]},useMemoCache:yf,useCacheRefresh:function(){return Gn().memoizedState=US.bind(null,_e)},useEffectEvent:function(e){var n=Gn(),a={impl:e};return n.memoizedState=a,function(){if((Ie&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Uf={readContext:Tn,use:Zl,useCallback:u0,useContext:Tn,useEffect:Af,useImperativeHandle:c0,useInsertionEffect:r0,useLayoutEffect:o0,useMemo:f0,useReducer:Kl,useRef:i0,useState:function(){return Kl(la)},useDebugValue:Rf,useDeferredValue:function(e,n){var a=on();return d0(a,je.memoizedState,e,n)},useTransition:function(){var e=Kl(la)[0],n=on().memoizedState;return[typeof e=="boolean"?e:Ao(e),n]},useSyncExternalStore:Gm,useId:g0,useHostTransitionStatus:Df,useFormState:t0,useActionState:t0,useOptimistic:function(e,n){var a=on();return qm(a,je,e,n)},useMemoCache:yf,useCacheRefresh:_0};Uf.useEffectEvent=s0;var M0={readContext:Tn,use:Zl,useCallback:u0,useContext:Tn,useEffect:Af,useImperativeHandle:c0,useInsertionEffect:r0,useLayoutEffect:o0,useMemo:f0,useReducer:bf,useRef:i0,useState:function(){return bf(la)},useDebugValue:Rf,useDeferredValue:function(e,n){var a=on();return je===null?wf(a,e,n):d0(a,je.memoizedState,e,n)},useTransition:function(){var e=bf(la)[0],n=on().memoizedState;return[typeof e=="boolean"?e:Ao(e),n]},useSyncExternalStore:Gm,useId:g0,useHostTransitionStatus:Df,useFormState:n0,useActionState:n0,useOptimistic:function(e,n){var a=on();return je!==null?qm(a,je,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:yf,useCacheRefresh:_0};M0.useEffectEvent=s0;function Lf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Of={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ba(o);u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(Zn(n,e,o),Mo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ba(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(Zn(n,e,o),Mo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=Ba(a);o.tag=2,n!=null&&(o.callback=n),n=za(e,o,a),n!==null&&(Zn(n,e,a),Mo(n,e,a))}};function b0(e,n,a,o,u,d,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,b):n.prototype&&n.prototype.isPureReactComponent?!po(a,o)||!po(u,d):!0}function E0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Of.enqueueReplaceState(n,n.state,null)}function ws(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function T0(e){Nl(e)}function A0(e){console.error(e)}function R0(e){Nl(e)}function tc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function w0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Pf(e,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){tc(e,n)},a}function C0(e){return e=Ba(e),e.tag=3,e}function D0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){w0(n,a,o)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){w0(n,a,o),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var N=o.stack;this.componentDidCatch(o.value,{componentStack:N!==null?N:""})})}function OS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&or(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?dc():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Gl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),rd(e,o,u)),!1;case 22:return a.flags|=65536,o===Gl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),rd(e,o,u)),!1}throw Error(s(435,a.tag))}return rd(e,o,u),dc(),!1}if(Ce)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==$u&&(e=Error(s(422),{cause:o}),_o(di(e,a)))):(o!==$u&&(n=Error(s(423),{cause:o}),_o(di(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=di(o,a),u=Pf(e.stateNode,o,u),ff(e,u),an!==4&&(an=2)),!1;var d=Error(s(520),{cause:o});if(d=di(d,a),Fo===null?Fo=[d]:Fo.push(d),an!==4&&(an=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Pf(a.stateNode,o,e),ff(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Xa===null||!Xa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=C0(u),D0(u,e,a,o),ff(a,u),!1}a=a.return}while(a!==null);return!1}var Ff=Error(s(461)),pn=!1;function An(e,n,a,o){n.child=e===null?Om(n,null,a,o):As(n,e.child,a,o)}function N0(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var b={};for(var N in o)N!=="ref"&&(b[N]=o[N])}else b=o;return Ms(n),o=_f(e,n,a,b,d,u),N=vf(),e!==null&&!pn?(xf(e,n,u),ca(e,n,u)):(Ce&&N&&Qu(n),n.flags|=1,An(e,n,o,u),n.child)}function U0(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Yu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,L0(e,n,d,o,u)):(e=Pl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!jf(e,u)){var b=d.memoizedProps;if(a=a.compare,a=a!==null?a:po,a(b,o)&&e.ref===n.ref)return ca(e,n,u)}return n.flags|=1,e=ia(d,o),e.ref=n.ref,e.return=n,n.child=e}function L0(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(po(d,o)&&e.ref===n.ref)if(pn=!1,n.pendingProps=o=d,jf(e,u))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,ca(e,n,u)}return If(e,n,a,o,u)}function O0(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return P0(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&zl(n,d!==null?d.cachePool:null),d!==null?Im(n,d):hf(),Bm(n);else return o=n.lanes=536870912,P0(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(zl(n,d.cachePool),Im(n,d),Ga(),n.memoizedState=null):(e!==null&&zl(n,null),hf(),Ga());return An(e,n,u,a),n.child}function Co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function P0(e,n,a,o,u){var d=of();return d=d===null?null:{parent:dn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&zl(n,null),hf(),Bm(n),e!==null&&or(e,n,o,!0),n.childLanes=u,null}function ec(e,n){return n=ic({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function F0(e,n,a){return As(n,e.child,null,a),e=ec(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function PS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ce){if(o.mode==="hidden")return e=ec(n,o),n.lanes=536870912,Co(null,e);if(mf(n),(e=Ze)?(e=Yg(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:La!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=xm(e),a.return=n,n.child=a,En=n,Ze=null)):e=null,e===null)throw Pa(n);return n.lanes=536870912,null}return ec(n,o)}var d=e.memoizedState;if(d!==null){var b=d.dehydrated;if(mf(n),u)if(n.flags&256)n.flags&=-257,n=F0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||or(e,n,a,!1),u=(a&e.childLanes)!==0,pn||u){if(o=Ye,o!==null&&(b=Sl(o,a),b!==0&&b!==d.retryLane))throw d.retryLane=b,vs(e,b),Zn(o,e,b),Ff;dc(),n=F0(e,n,a)}else e=d.treeContext,Ze=_i(b.nextSibling),En=n,Ce=!0,Oa=null,mi=!1,e!==null&&Mm(n,e),n=ec(n,o),n.flags|=4096;return n}return e=ia(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function nc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function If(e,n,a,o,u){return Ms(n),a=_f(e,n,a,o,void 0,u),o=vf(),e!==null&&!pn?(xf(e,n,u),ca(e,n,u)):(Ce&&o&&Qu(n),n.flags|=1,An(e,n,a,u),n.child)}function I0(e,n,a,o,u,d){return Ms(n),n.updateQueue=null,a=Hm(n,o,a,u),zm(e),o=vf(),e!==null&&!pn?(xf(e,n,d),ca(e,n,d)):(Ce&&o&&Qu(n),n.flags|=1,An(e,n,a,d),n.child)}function B0(e,n,a,o,u){if(Ms(n),n.stateNode===null){var d=ir,b=a.contextType;typeof b=="object"&&b!==null&&(d=Tn(b)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Of,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},cf(n),b=a.contextType,d.context=typeof b=="object"&&b!==null?Tn(b):ir,d.state=n.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(Lf(n,a,b,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&Of.enqueueReplaceState(d,d.state,null),Eo(n,o,d,u),bo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var N=n.memoizedProps,X=ws(a,N);d.props=X;var dt=d.context,bt=a.contextType;b=ir,typeof bt=="object"&&bt!==null&&(b=Tn(bt));var Rt=a.getDerivedStateFromProps;bt=typeof Rt=="function"||typeof d.getSnapshotBeforeUpdate=="function",N=n.pendingProps!==N,bt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(N||dt!==b)&&E0(n,d,o,b),Ia=!1;var pt=n.memoizedState;d.state=pt,Eo(n,o,d,u),bo(),dt=n.memoizedState,N||pt!==dt||Ia?(typeof Rt=="function"&&(Lf(n,a,Rt,o),dt=n.memoizedState),(X=Ia||b0(n,a,X,o,pt,dt,b))?(bt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=dt),d.props=o,d.state=dt,d.context=b,o=X):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,uf(e,n),b=n.memoizedProps,bt=ws(a,b),d.props=bt,Rt=n.pendingProps,pt=d.context,dt=a.contextType,X=ir,typeof dt=="object"&&dt!==null&&(X=Tn(dt)),N=a.getDerivedStateFromProps,(dt=typeof N=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==Rt||pt!==X)&&E0(n,d,o,X),Ia=!1,pt=n.memoizedState,d.state=pt,Eo(n,o,d,u),bo();var St=n.memoizedState;b!==Rt||pt!==St||Ia||e!==null&&e.dependencies!==null&&Il(e.dependencies)?(typeof N=="function"&&(Lf(n,a,N,o),St=n.memoizedState),(bt=Ia||b0(n,a,bt,o,pt,St,X)||e!==null&&e.dependencies!==null&&Il(e.dependencies))?(dt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,St,X),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,St,X)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&pt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&pt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=St),d.props=o,d.state=St,d.context=X,o=bt):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&pt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&pt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,nc(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=As(n,e.child,null,u),n.child=As(n,null,a,u)):An(e,n,a,u),n.memoizedState=d.state,e=n.child):e=ca(e,n,u),e}function z0(e,n,a,o){return Ss(),n.flags|=256,An(e,n,a,o),n.child}var Bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zf(e){return{baseLanes:e,cachePool:wm()}}function Hf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function H0(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,b;if((b=d)||(b=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),b&&(u=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(u?Ha(n):Ga(),(e=Ze)?(e=Yg(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:La!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=xm(e),a.return=n,n.child=a,En=n,Ze=null)):e=null,e===null)throw Pa(n);return Md(e)?n.lanes=32:n.lanes=536870912,null}var N=o.children;return o=o.fallback,u?(Ga(),u=n.mode,N=ic({mode:"hidden",children:N},u),o=xs(o,u,a,null),N.return=n,o.return=n,N.sibling=o,n.child=N,o=n.child,o.memoizedState=zf(a),o.childLanes=Hf(e,b,a),n.memoizedState=Bf,Co(null,o)):(Ha(n),Gf(n,N))}var X=e.memoizedState;if(X!==null&&(N=X.dehydrated,N!==null)){if(d)n.flags&256?(Ha(n),n.flags&=-257,n=Vf(e,n,a)):n.memoizedState!==null?(Ga(),n.child=e.child,n.flags|=128,n=null):(Ga(),N=o.fallback,u=n.mode,o=ic({mode:"visible",children:o.children},u),N=xs(N,u,a,null),N.flags|=2,o.return=n,N.return=n,o.sibling=N,n.child=o,As(n,e.child,null,a),o=n.child,o.memoizedState=zf(a),o.childLanes=Hf(e,b,a),n.memoizedState=Bf,n=Co(null,o));else if(Ha(n),Md(N)){if(b=N.nextSibling&&N.nextSibling.dataset,b)var dt=b.dgst;b=dt,o=Error(s(419)),o.stack="",o.digest=b,_o({value:o,source:null,stack:null}),n=Vf(e,n,a)}else if(pn||or(e,n,a,!1),b=(a&e.childLanes)!==0,pn||b){if(b=Ye,b!==null&&(o=Sl(b,a),o!==0&&o!==X.retryLane))throw X.retryLane=o,vs(e,o),Zn(b,e,o),Ff;yd(N)||dc(),n=Vf(e,n,a)}else yd(N)?(n.flags|=192,n.child=e.child,n=null):(e=X.treeContext,Ze=_i(N.nextSibling),En=n,Ce=!0,Oa=null,mi=!1,e!==null&&Mm(n,e),n=Gf(n,o.children),n.flags|=4096);return n}return u?(Ga(),N=o.fallback,u=n.mode,X=e.child,dt=X.sibling,o=ia(X,{mode:"hidden",children:o.children}),o.subtreeFlags=X.subtreeFlags&65011712,dt!==null?N=ia(dt,N):(N=xs(N,u,a,null),N.flags|=2),N.return=n,o.return=n,o.sibling=N,n.child=o,Co(null,o),o=n.child,N=e.child.memoizedState,N===null?N=zf(a):(u=N.cachePool,u!==null?(X=dn._currentValue,u=u.parent!==X?{parent:X,pool:X}:u):u=wm(),N={baseLanes:N.baseLanes|a,cachePool:u}),o.memoizedState=N,o.childLanes=Hf(e,b,a),n.memoizedState=Bf,Co(e.child,o)):(Ha(n),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(b=n.deletions,b===null?(n.deletions=[e],n.flags|=16):b.push(e)),n.child=a,n.memoizedState=null,a)}function Gf(e,n){return n=ic({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ic(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function Vf(e,n,a){return As(n,e.child,null,a),e=Gf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function G0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),nf(e.return,n,a)}function kf(e,n,a,o,u,d){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(b.isBackwards=n,b.rendering=null,b.renderingStartTime=0,b.last=o,b.tail=a,b.tailMode=u,b.treeForkCount=d)}function V0(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var b=rn.current,N=(b&2)!==0;if(N?(b=b&1|2,n.flags|=128):b&=1,W(rn,b),An(e,n,o,a),o=Ce?go:0,!N&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&G0(e,a,n);else if(e.tag===19)G0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Xl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),kf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Xl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}kf(n,!0,a,null,d,o);break;case"together":kf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ca(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ja|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(or(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ia(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function jf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Il(e)))}function FS(e,n,a){switch(n.tag){case 3:_t(n,n.stateNode.containerInfo),Fa(n,dn,e.memoizedState.cache),Ss();break;case 27:case 5:At(n);break;case 4:_t(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,mf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?H0(e,n,a):(Ha(n),e=ca(e,n,a),e!==null?e.sibling:null);Ha(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(or(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return V0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),W(rn,rn.current),o)break;return null;case 22:return n.lanes=0,O0(e,n,a,n.pendingProps);case 24:Fa(n,dn,e.memoizedState.cache)}return ca(e,n,a)}function k0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!jf(e,a)&&(n.flags&128)===0)return pn=!1,FS(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,Ce&&(n.flags&1048576)!==0&&ym(n,go,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Es(n.elementType),n.type=e,typeof e=="function")Yu(e)?(o=ws(e,o),n.tag=1,n=B0(null,n,e,o,a)):(n.tag=0,n=If(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=N0(null,n,e,o,a);break t}else if(u===H){n.tag=14,n=U0(null,n,e,o,a);break t}}throw n=at(e)||e,Error(s(306,n,""))}}return n;case 0:return If(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ws(o,n.pendingProps),B0(e,n,o,u,a);case 3:t:{if(_t(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,uf(e,n),Eo(n,o,null,a);var b=n.memoizedState;if(o=b.cache,Fa(n,dn,o),o!==d.cache&&af(n,[dn],a,!0),bo(),o=b.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=z0(e,n,o,a);break t}else if(o!==u){u=di(Error(s(424)),n),_o(u),n=z0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=_i(e.firstChild),En=n,Ce=!0,Oa=null,mi=!0,a=Om(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ss(),o===u){n=ca(e,n,a);break t}An(e,n,o,a)}n=n.child}return n;case 26:return nc(e,n),e===null?(a=t_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,o=xc(q.current).createElement(a),o[cn]=n,o[_n]=e,Rn(o,a,e),nt(o),n.stateNode=o):n.memoizedState=t_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return At(n),e===null&&Ce&&(o=n.stateNode=Qg(n.type,n.pendingProps,q.current),En=n,mi=!0,u=Ze,Za(n.type)?(bd=u,Ze=_i(o.firstChild)):Ze=u),An(e,n,n.pendingProps.children,a),nc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((u=o=Ze)&&(o=dy(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,En=n,Ze=_i(o.firstChild),mi=!1,u=!0):u=!1),u||Pa(n)),At(n),u=n.type,d=n.pendingProps,b=e!==null?e.memoizedProps:null,o=d.children,vd(u,d)?o=null:b!==null&&vd(u,b)&&(n.flags|=32),n.memoizedState!==null&&(u=_f(e,n,RS,null,null,a),jo._currentValue=u),nc(e,n),An(e,n,o,a),n.child;case 6:return e===null&&Ce&&((e=a=Ze)&&(a=hy(a,n.pendingProps,mi),a!==null?(n.stateNode=a,En=n,Ze=null,e=!0):e=!1),e||Pa(n)),null;case 13:return H0(e,n,a);case 4:return _t(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=As(n,null,o,a):An(e,n,o,a),n.child;case 11:return N0(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Fa(n,n.type,o.value),An(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ms(n),u=Tn(u),o=o(u),n.flags|=1,An(e,n,o,a),n.child;case 14:return U0(e,n,n.type,n.pendingProps,a);case 15:return L0(e,n,n.type,n.pendingProps,a);case 19:return V0(e,n,a);case 31:return PS(e,n,a);case 22:return O0(e,n,a,n.pendingProps);case 24:return Ms(n),o=Tn(dn),e===null?(u=of(),u===null&&(u=Ye,d=sf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},cf(n),Fa(n,dn,u)):((e.lanes&a)!==0&&(uf(e,n),Eo(n,null,null,a),bo()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,dn,o)):(o=d.cache,Fa(n,dn,o),o!==u.cache&&af(n,[dn],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ua(e){e.flags|=4}function Xf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(gg())e.flags|=8192;else throw Ts=Gl,lf}else e.flags&=-16777217}function j0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!s_(n))if(gg())e.flags|=8192;else throw Ts=Gl,lf}function ac(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?He():536870912,e.lanes|=n,xr|=n)}function Do(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function IS(e,n,a){var o=n.pendingProps;switch(Ju(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(dn),Q(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(rr(n)?ua(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,tf())),Ke(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(ua(n),d!==null?(Ke(n),j0(n,d)):(Ke(n),Xf(n,u,null,o,a))):d?d!==e.memoizedState?(ua(n),Ke(n),j0(n,d)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ua(n),Ke(n),Xf(n,u,e,o,a)),null;case 27:if(Dt(n),a=q.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=lt.current,rr(n)?bm(n):(e=Qg(u,o,a),n.stateNode=e,ua(n))}return Ke(n),null;case 5:if(Dt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(d=lt.current,rr(n))bm(n);else{var b=xc(q.current);switch(d){case 1:d=b.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=b.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=b.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?b.createElement("select",{is:o.is}):b.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?b.createElement(u,{is:o.is}):b.createElement(u)}}d[cn]=n,d[_n]=o;t:for(b=n.child;b!==null;){if(b.tag===5||b.tag===6)d.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===n)break t;for(;b.sibling===null;){if(b.return===null||b.return===n)break t;b=b.return}b.sibling.return=b.return,b=b.sibling}n.stateNode=d;t:switch(Rn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ua(n)}}return Ke(n),Xf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=q.current,rr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=En,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Hg(e.nodeValue,a)),e||Pa(n,!0)}else e=xc(e).createTextNode(o),e[cn]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=rr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=tf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=rr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=tf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ac(n,n.updateQueue),Ke(n),null);case 4:return Q(),e===null&&hd(n.stateNode.containerInfo),Ke(n),null;case 10:return ra(n.type),Ke(n),null;case 19:if(P(rn),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Do(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Xl(e),d!==null){for(n.flags|=128,Do(o,!1),e=d.updateQueue,n.updateQueue=e,ac(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)vm(a,e),a=a.sibling;return W(rn,rn.current&1|2),Ce&&aa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>cc&&(n.flags|=128,u=!0,Do(o,!1),n.lanes=4194304)}else{if(!u)if(e=Xl(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ac(n,e),Do(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Ce)return Ke(n),null}else 2*T()-o.renderingStartTime>cc&&a!==536870912&&(n.flags|=128,u=!0,Do(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=rn.current,W(rn,u?a&1|2:a&1),Ce&&aa(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return ni(n),pf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&ac(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&P(bs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(dn),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function BS(e,n){switch(Ju(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ra(dn),Q(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Dt(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));Ss()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ss()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return P(rn),null;case 4:return Q(),null;case 10:return ra(n.type),null;case 22:case 23:return ni(n),pf(),e!==null&&P(bs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ra(dn),null;case 25:return null;default:return null}}function X0(e,n){switch(Ju(n),n.tag){case 3:ra(dn),Q();break;case 26:case 27:case 5:Dt(n);break;case 4:Q();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:P(rn);break;case 10:ra(n.type);break;case 22:case 23:ni(n),pf(),e!==null&&P(bs);break;case 24:ra(dn)}}function No(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,b=a.inst;o=d(),b.destroy=o}a=a.next}while(a!==u)}}catch(N){Ve(n,n.return,N)}}function Va(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var b=o.inst,N=b.destroy;if(N!==void 0){b.destroy=void 0,u=n;var X=a,dt=N;try{dt()}catch(bt){Ve(u,X,bt)}}}o=o.next}while(o!==d)}}catch(bt){Ve(n,n.return,bt)}}function W0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Fm(n,a)}catch(o){Ve(e,e.return,o)}}}function q0(e,n,a){a.props=ws(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ve(e,n,o)}}function Uo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ve(e,n,u)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ve(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ve(e,n,u)}else a.current=null}function Y0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ve(e,e.return,u)}}function Wf(e,n,a){try{var o=e.stateNode;ry(o,e.type,a,n),o[_n]=n}catch(u){Ve(e,e.return,u)}}function Z0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function qf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Z0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ea));else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Yf(e,n,a),e=e.sibling;e!==null;)Yf(e,n,a),e=e.sibling}function sc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(sc(e,n,a),e=e.sibling;e!==null;)sc(e,n,a),e=e.sibling}function K0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[cn]=e,n[_n]=a}catch(d){Ve(e,e.return,d)}}var fa=!1,mn=!1,Zf=!1,Q0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function zS(e,n){if(e=e.containerInfo,gd=Ac,e=cm(e),Gu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var b=0,N=-1,X=-1,dt=0,bt=0,Rt=e,pt=null;e:for(;;){for(var St;Rt!==a||u!==0&&Rt.nodeType!==3||(N=b+u),Rt!==d||o!==0&&Rt.nodeType!==3||(X=b+o),Rt.nodeType===3&&(b+=Rt.nodeValue.length),(St=Rt.firstChild)!==null;)pt=Rt,Rt=St;for(;;){if(Rt===e)break e;if(pt===a&&++dt===u&&(N=b),pt===d&&++bt===o&&(X=b),(St=Rt.nextSibling)!==null)break;Rt=pt,pt=Rt.parentNode}Rt=St}a=N===-1||X===-1?null:{start:N,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(_d={focusedElem:e,selectionRange:a},Ac=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var $t=ws(a.type,u);e=o.getSnapshotBeforeUpdate($t,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ce){Ve(a,a.return,ce)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Sd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function J0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ha(e,a),o&4&&No(5,a);break;case 1:if(ha(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(b){Ve(a,a.return,b)}else{var u=ws(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Ve(a,a.return,b)}}o&64&&W0(a),o&512&&Uo(a,a.return);break;case 3:if(ha(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Fm(e,n)}catch(b){Ve(a,a.return,b)}}break;case 27:n===null&&o&4&&K0(a);case 26:case 5:ha(e,a),n===null&&o&4&&Y0(a),o&512&&Uo(a,a.return);break;case 12:ha(e,a);break;case 31:ha(e,a),o&4&&eg(e,a);break;case 13:ha(e,a),o&4&&ng(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=YS.bind(null,a),py(e,a))));break;case 22:if(o=a.memoizedState!==null||fa,!o){n=n!==null&&n.memoizedState!==null||mn,u=fa;var d=mn;fa=o,(mn=n)&&!d?pa(e,a,(a.subtreeFlags&8772)!==0):ha(e,a),fa=u,mn=d}break;case 30:break;default:ha(e,a)}}function $0(e){var n=e.alternate;n!==null&&(e.alternate=null,$0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&so(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,Xn=!1;function da(e,n,a){for(a=a.child;a!==null;)tg(e,n,a),a=a.sibling}function tg(e,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(wt,a)}catch{}switch(a.tag){case 26:mn||zi(a,n),da(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||zi(a,n);var o=en,u=Xn;Za(a.type)&&(en=a.stateNode,Xn=!1),da(e,n,a),Go(a.stateNode),en=o,Xn=u;break;case 5:mn||zi(a,n);case 6:if(o=en,u=Xn,en=null,da(e,n,a),en=o,Xn=u,en!==null)if(Xn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(d){Ve(a,n,d)}else try{en.removeChild(a.stateNode)}catch(d){Ve(a,n,d)}break;case 18:en!==null&&(Xn?(e=en,Wg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Rr(e)):Wg(en,a.stateNode));break;case 4:o=en,u=Xn,en=a.stateNode.containerInfo,Xn=!0,da(e,n,a),en=o,Xn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),mn||Va(4,a,n),da(e,n,a);break;case 1:mn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&q0(a,n,o)),da(e,n,a);break;case 21:da(e,n,a);break;case 22:mn=(o=mn)||a.memoizedState!==null,da(e,n,a),mn=o;break;default:da(e,n,a)}}function eg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Rr(e)}catch(a){Ve(n,n.return,a)}}}function ng(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rr(e)}catch(a){Ve(n,n.return,a)}}function HS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Q0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Q0),n;default:throw Error(s(435,e.tag))}}function rc(e,n){var a=HS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=ZS.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,b=n,N=b;t:for(;N!==null;){switch(N.tag){case 27:if(Za(N.type)){en=N.stateNode,Xn=!1;break t}break;case 5:en=N.stateNode,Xn=!1;break t;case 3:case 4:en=N.stateNode.containerInfo,Xn=!0;break t}N=N.return}if(en===null)throw Error(s(160));tg(d,b,u),en=null,Xn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ig(n,e),n=n.sibling}var Ri=null;function ig(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(Va(3,e,e.return),No(3,e),Va(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(mn||a===null||zi(a,a.return)),o&64&&fa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(Wn(n,e),qn(e),o&512&&(mn||a===null||zi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[hs]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Rn(d,o,a),d[cn]=e,nt(d),o=d;break t;case"link":var b=i_("link","href",u).get(o+(a.href||""));if(b){for(var N=0;N<b.length;N++)if(d=b[N],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(N,1);break e}}d=u.createElement(o),Rn(d,o,a),u.head.appendChild(d);break;case"meta":if(b=i_("meta","content",u).get(o+(a.content||""))){for(N=0;N<b.length;N++)if(d=b[N],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(N,1);break e}}d=u.createElement(o),Rn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[cn]=e,nt(d),o=d}e.stateNode=o}else a_(u,e.type,e.stateNode);else e.stateNode=n_(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?a_(u,e.type,e.stateNode):n_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Wf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(mn||a===null||zi(a,a.return)),a!==null&&o&4&&Wf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(mn||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{Hn(u,"")}catch($t){Ve(e,e.return,$t)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Wf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Zf=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch($t){Ve(e,e.return,$t)}}break;case 3:if(Mc=null,u=Ri,Ri=Sc(n.containerInfo),Wn(n,e),Ri=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Rr(n.containerInfo)}catch($t){Ve(e,e.return,$t)}Zf&&(Zf=!1,ag(e));break;case 4:o=Ri,Ri=Sc(e.stateNode.containerInfo),Wn(n,e),qn(e),Ri=o;break;case 12:Wn(n,e),qn(e);break;case 31:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,rc(e,o)));break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(lc=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,rc(e,o)));break;case 22:u=e.memoizedState!==null;var X=a!==null&&a.memoizedState!==null,dt=fa,bt=mn;if(fa=dt||u,mn=bt||X,Wn(n,e),mn=bt,fa=dt,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||X||fa||mn||Cs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){X=a=n;try{if(d=X.stateNode,u)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{N=X.stateNode;var Rt=X.memoizedProps.style,pt=Rt!=null&&Rt.hasOwnProperty("display")?Rt.display:null;N.style.display=pt==null||typeof pt=="boolean"?"":(""+pt).trim()}}catch($t){Ve(X,X.return,$t)}}}else if(n.tag===6){if(a===null){X=n;try{X.stateNode.nodeValue=u?"":X.memoizedProps}catch($t){Ve(X,X.return,$t)}}}else if(n.tag===18){if(a===null){X=n;try{var St=X.stateNode;u?qg(St,!0):qg(X.stateNode,!1)}catch($t){Ve(X,X.return,$t)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,rc(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,rc(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Z0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=qf(e);sc(e,d,u);break;case 5:var b=a.stateNode;a.flags&32&&(Hn(b,""),a.flags&=-33);var N=qf(e);sc(e,N,b);break;case 3:case 4:var X=a.stateNode.containerInfo,dt=qf(e);Yf(e,dt,X);break;default:throw Error(s(161))}}catch(bt){Ve(e,e.return,bt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ag(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ag(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ha(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)J0(e,n.alternate,n),n=n.sibling}function Cs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),Cs(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&q0(n,n.return,a),Cs(n);break;case 27:Go(n.stateNode);case 26:case 5:zi(n,n.return),Cs(n);break;case 22:n.memoizedState===null&&Cs(n);break;case 30:Cs(n);break;default:Cs(n)}e=e.sibling}}function pa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,b=d.flags;switch(d.tag){case 0:case 11:case 15:pa(u,d,a),No(4,d);break;case 1:if(pa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(dt){Ve(o,o.return,dt)}if(o=d,u=o.updateQueue,u!==null){var N=o.stateNode;try{var X=u.shared.hiddenCallbacks;if(X!==null)for(u.shared.hiddenCallbacks=null,u=0;u<X.length;u++)Pm(X[u],N)}catch(dt){Ve(o,o.return,dt)}}a&&b&64&&W0(d),Uo(d,d.return);break;case 27:K0(d);case 26:case 5:pa(u,d,a),a&&o===null&&b&4&&Y0(d),Uo(d,d.return);break;case 12:pa(u,d,a);break;case 31:pa(u,d,a),a&&b&4&&eg(u,d);break;case 13:pa(u,d,a),a&&b&4&&ng(u,d);break;case 22:d.memoizedState===null&&pa(u,d,a),Uo(d,d.return);break;case 30:break;default:pa(u,d,a)}n=n.sibling}}function Kf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&vo(a))}function Qf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&vo(e))}function wi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)sg(e,n,a,o),n=n.sibling}function sg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,o),u&2048&&No(9,n);break;case 1:wi(e,n,a,o);break;case 3:wi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&vo(e)));break;case 12:if(u&2048){wi(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,b=d.id,N=d.onPostCommit;typeof N=="function"&&N(b,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(X){Ve(n,n.return,X)}}else wi(e,n,a,o);break;case 31:wi(e,n,a,o);break;case 13:wi(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,b=n.alternate,n.memoizedState!==null?d._visibility&2?wi(e,n,a,o):Lo(e,n):d._visibility&2?wi(e,n,a,o):(d._visibility|=2,gr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Kf(b,n);break;case 24:wi(e,n,a,o),u&2048&&Qf(n.alternate,n);break;default:wi(e,n,a,o)}}function gr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,b=n,N=a,X=o,dt=b.flags;switch(b.tag){case 0:case 11:case 15:gr(d,b,N,X,u),No(8,b);break;case 23:break;case 22:var bt=b.stateNode;b.memoizedState!==null?bt._visibility&2?gr(d,b,N,X,u):Lo(d,b):(bt._visibility|=2,gr(d,b,N,X,u)),u&&dt&2048&&Kf(b.alternate,b);break;case 24:gr(d,b,N,X,u),u&&dt&2048&&Qf(b.alternate,b);break;default:gr(d,b,N,X,u)}n=n.sibling}}function Lo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Lo(a,o),u&2048&&Kf(o.alternate,o);break;case 24:Lo(a,o),u&2048&&Qf(o.alternate,o);break;default:Lo(a,o)}n=n.sibling}}var Oo=8192;function _r(e,n,a){if(e.subtreeFlags&Oo)for(e=e.child;e!==null;)rg(e,n,a),e=e.sibling}function rg(e,n,a){switch(e.tag){case 26:_r(e,n,a),e.flags&Oo&&e.memoizedState!==null&&Ay(a,Ri,e.memoizedState,e.memoizedProps);break;case 5:_r(e,n,a);break;case 3:case 4:var o=Ri;Ri=Sc(e.stateNode.containerInfo),_r(e,n,a),Ri=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Oo,Oo=16777216,_r(e,n,a),Oo=o):_r(e,n,a));break;default:_r(e,n,a)}}function og(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Po(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,cg(o,e)}og(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lg(e),e=e.sibling}function lg(e){switch(e.tag){case 0:case 11:case 15:Po(e),e.flags&2048&&Va(9,e,e.return);break;case 3:Po(e);break;case 12:Po(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,oc(e)):Po(e);break;default:Po(e)}}function oc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,cg(o,e)}og(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Va(8,n,n.return),oc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,oc(n));break;default:oc(n)}e=e.sibling}}function cg(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:vo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else t:for(a=e;Mn!==null;){o=Mn;var u=o.sibling,d=o.return;if($0(o),o===a){Mn=null;break t}if(u!==null){u.return=d,Mn=u;break t}Mn=d}}}var GS={getCacheForType:function(e){var n=Tn(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(dn).controller.signal}},VS=typeof WeakMap=="function"?WeakMap:Map,Ie=0,Ye=null,Ee=null,Re=0,Ge=0,ii=null,ka=!1,vr=!1,Jf=!1,ma=0,an=0,ja=0,Ds=0,$f=0,ai=0,xr=0,Fo=null,Yn=null,td=!1,lc=0,ug=0,cc=1/0,uc=null,Xa=null,xn=0,Wa=null,Sr=null,ga=0,ed=0,nd=null,fg=null,Io=0,id=null;function si(){return(Ie&2)!==0&&Re!==0?Re&-Re:U.T!==null?cd():Fi()}function dg(){if(ai===0)if((Re&536870912)===0||Ce){var e=Ot;Ot<<=1,(Ot&3932160)===0&&(Ot=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function Zn(e,n,a){(e===Ye&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(yr(e,0),qa(e,Re,ai,!1)),In(e,a),((Ie&2)===0||e!==Ye)&&(e===Ye&&((Ie&2)===0&&(Ds|=a),an===4&&qa(e,Re,ai,!1)),Hi(e))}function hg(e,n,a){if((Ie&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Qt(e,n),u=o?XS(e,n):sd(e,n,!0),d=o;do{if(u===0){vr&&!o&&qa(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!kS(a)){u=sd(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;t:{var N=e;u=Fo;var X=N.current.memoizedState.isDehydrated;if(X&&(yr(N,b).flags|=256),b=sd(N,b,!1),b!==2){if(Jf&&!X){N.errorRecoveryDisabledLanes|=d,Ds|=d,u=4;break t}d=Yn,Yn=u,d!==null&&(Yn===null?Yn=d:Yn.push.apply(Yn,d))}u=b}if(d=!1,u!==2)continue}}if(u===1){yr(e,0),qa(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,ai,!ka);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=lc+300-T(),10<u)){if(qa(o,n,ai,!ka),Mt(o,0,!0)!==0)break t;ga=n,o.timeoutHandle=jg(pg.bind(null,o,a,Yn,uc,td,n,ai,Ds,xr,ka,d,"Throttled",-0,0),u);break t}pg(o,a,Yn,uc,td,n,ai,Ds,xr,ka,d,null,-0,0)}}break}while(!0);Hi(e)}function pg(e,n,a,o,u,d,b,N,X,dt,bt,Rt,pt,St){if(e.timeoutHandle=-1,Rt=n.subtreeFlags,Rt&8192||(Rt&16785408)===16785408){Rt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},rg(n,d,Rt);var $t=(d&62914560)===d?lc-T():(d&4194048)===d?ug-T():0;if($t=Ry(Rt,$t),$t!==null){ga=d,e.cancelPendingCommit=$t(Mg.bind(null,e,n,d,a,o,u,b,N,X,bt,Rt,null,pt,St)),qa(e,d,b,!dt);return}}Mg(e,n,d,a,o,u,b,N,X)}function kS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!$n(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(e,n,a,o){n&=~$f,n&=~Ds,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-zt(u),b=1<<d;o[d]=-1,u&=~b}a!==0&&ao(e,a,n)}function fc(){return(Ie&6)===0?(Bo(0),!1):!0}function ad(){if(Ee!==null){if(Ge===0)var e=Ee.return;else e=Ee,sa=ys=null,Sf(e),fr=null,So=0,e=Ee;for(;e!==null;)X0(e.alternate,e),e=e.return;Ee=null}}function yr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,cy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ga=0,ad(),Ye=e,Ee=a=ia(e.current,null),Re=n,Ge=0,ii=null,ka=!1,vr=Qt(e,n),Jf=!1,xr=ai=$f=Ds=ja=an=0,Yn=Fo=null,td=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),d=1<<u;n|=e[u],o&=~d}return ma=n,Ul(),a}function mg(e,n){_e=null,U.H=wo,n===ur||n===Hl?(n=Nm(),Ge=3):n===lf?(n=Nm(),Ge=4):Ge=n===Ff?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,Ee===null&&(an=1,tc(e,di(n,e.current)))}function gg(){var e=ei.current;return e===null?!0:(Re&4194048)===Re?gi===null:(Re&62914560)===Re||(Re&536870912)!==0?e===gi:!1}function _g(){var e=U.H;return U.H=wo,e===null?wo:e}function vg(){var e=U.A;return U.A=GS,e}function dc(){an=4,ka||(Re&4194048)!==Re&&ei.current!==null||(vr=!0),(ja&134217727)===0&&(Ds&134217727)===0||Ye===null||qa(Ye,Re,ai,!1)}function sd(e,n,a){var o=Ie;Ie|=2;var u=_g(),d=vg();(Ye!==e||Re!==n)&&(uc=null,yr(e,n)),n=!1;var b=an;t:do try{if(Ge!==0&&Ee!==null){var N=Ee,X=ii;switch(Ge){case 8:ad(),b=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var dt=Ge;if(Ge=0,ii=null,Mr(e,N,X,dt),a&&vr){b=0;break t}break;default:dt=Ge,Ge=0,ii=null,Mr(e,N,X,dt)}}jS(),b=an;break}catch(bt){mg(e,bt)}while(!0);return n&&e.shellSuspendCounter++,sa=ys=null,Ie=o,U.H=u,U.A=d,Ee===null&&(Ye=null,Re=0,Ul()),b}function jS(){for(;Ee!==null;)xg(Ee)}function XS(e,n){var a=Ie;Ie|=2;var o=_g(),u=vg();Ye!==e||Re!==n?(uc=null,cc=T()+500,yr(e,n)):vr=Qt(e,n);t:do try{if(Ge!==0&&Ee!==null){n=Ee;var d=ii;e:switch(Ge){case 1:Ge=0,ii=null,Mr(e,n,d,1);break;case 2:case 9:if(Cm(d)){Ge=0,ii=null,Sg(n);break}n=function(){Ge!==2&&Ge!==9||Ye!==e||(Ge=7),Hi(e)},d.then(n,n);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:Cm(d)?(Ge=0,ii=null,Sg(n)):(Ge=0,ii=null,Mr(e,n,d,7));break;case 5:var b=null;switch(Ee.tag){case 26:b=Ee.memoizedState;case 5:case 27:var N=Ee;if(b?s_(b):N.stateNode.complete){Ge=0,ii=null;var X=N.sibling;if(X!==null)Ee=X;else{var dt=N.return;dt!==null?(Ee=dt,hc(dt)):Ee=null}break e}}Ge=0,ii=null,Mr(e,n,d,5);break;case 6:Ge=0,ii=null,Mr(e,n,d,6);break;case 8:ad(),an=6;break t;default:throw Error(s(462))}}WS();break}catch(bt){mg(e,bt)}while(!0);return sa=ys=null,U.H=o,U.A=u,Ie=a,Ee!==null?0:(Ye=null,Re=0,Ul(),an)}function WS(){for(;Ee!==null&&!Gt();)xg(Ee)}function xg(e){var n=k0(e.alternate,e,ma);e.memoizedProps=e.pendingProps,n===null?hc(e):Ee=n}function Sg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=I0(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=I0(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:Sf(n);default:X0(a,n),n=Ee=vm(n,ma),n=k0(a,n,ma)}e.memoizedProps=e.pendingProps,n===null?hc(e):Ee=n}function Mr(e,n,a,o){sa=ys=null,Sf(n),fr=null,So=0;var u=n.return;try{if(OS(e,u,n,a,Re)){an=1,tc(e,di(a,e.current)),Ee=null;return}}catch(d){if(u!==null)throw Ee=u,d;an=1,tc(e,di(a,e.current)),Ee=null;return}n.flags&32768?(Ce||o===1?e=!0:vr||(Re&536870912)!==0?e=!1:(ka=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),yg(n,e)):hc(n)}function hc(e){var n=e;do{if((n.flags&32768)!==0){yg(n,ka);return}e=n.return;var a=IS(n.alternate,n,ma);if(a!==null){Ee=a;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=e}while(n!==null);an===0&&(an=5)}function yg(e,n){do{var a=BS(e.alternate,e);if(a!==null){a.flags&=32767,Ee=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=a}while(e!==null);an=6,Ee=null}function Mg(e,n,a,o,u,d,b,N,X){e.cancelPendingCommit=null;do pc();while(xn!==0);if((Ie&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Wu,Mi(e,a,d,b,N,X),e===Ye&&(Ee=Ye=null,Re=0),Sr=n,Wa=e,ga=a,ed=d,nd=u,fg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,KS(mt,function(){return Rg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=I.p,I.p=2,b=Ie,Ie|=4;try{zS(e,n,a)}finally{Ie=b,I.p=u,U.T=o}}xn=1,bg(),Eg(),Tg()}}function bg(){if(xn===1){xn=0;var e=Wa,n=Sr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=I.p;I.p=2;var u=Ie;Ie|=4;try{ig(n,e);var d=_d,b=cm(e.containerInfo),N=d.focusedElem,X=d.selectionRange;if(b!==N&&N&&N.ownerDocument&&lm(N.ownerDocument.documentElement,N)){if(X!==null&&Gu(N)){var dt=X.start,bt=X.end;if(bt===void 0&&(bt=dt),"selectionStart"in N)N.selectionStart=dt,N.selectionEnd=Math.min(bt,N.value.length);else{var Rt=N.ownerDocument||document,pt=Rt&&Rt.defaultView||window;if(pt.getSelection){var St=pt.getSelection(),$t=N.textContent.length,ce=Math.min(X.start,$t),We=X.end===void 0?ce:Math.min(X.end,$t);!St.extend&&ce>We&&(b=We,We=ce,ce=b);var rt=om(N,ce),$=om(N,We);if(rt&&$&&(St.rangeCount!==1||St.anchorNode!==rt.node||St.anchorOffset!==rt.offset||St.focusNode!==$.node||St.focusOffset!==$.offset)){var ft=Rt.createRange();ft.setStart(rt.node,rt.offset),St.removeAllRanges(),ce>We?(St.addRange(ft),St.extend($.node,$.offset)):(ft.setEnd($.node,$.offset),St.addRange(ft))}}}}for(Rt=[],St=N;St=St.parentNode;)St.nodeType===1&&Rt.push({element:St,left:St.scrollLeft,top:St.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<Rt.length;N++){var Tt=Rt[N];Tt.element.scrollLeft=Tt.left,Tt.element.scrollTop=Tt.top}}Ac=!!gd,_d=gd=null}finally{Ie=u,I.p=o,U.T=a}}e.current=n,xn=2}}function Eg(){if(xn===2){xn=0;var e=Wa,n=Sr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=I.p;I.p=2;var u=Ie;Ie|=4;try{J0(e,n.alternate,n)}finally{Ie=u,I.p=o,U.T=a}}xn=3}}function Tg(){if(xn===4||xn===3){xn=0,B();var e=Wa,n=Sr,a=ga,o=fg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Sr=Wa=null,Ag(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Xa=null),Ys(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(wt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,u=I.p,I.p=2,U.T=null;try{for(var d=e.onRecoverableError,b=0;b<o.length;b++){var N=o[b];d(N.value,{componentStack:N.stack})}}finally{U.T=n,I.p=u}}(ga&3)!==0&&pc(),Hi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===id?Io++:(Io=0,id=e):Io=0,Bo(0)}}function Ag(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,vo(n)))}function pc(){return bg(),Eg(),Tg(),Rg()}function Rg(){if(xn!==5)return!1;var e=Wa,n=ed;ed=0;var a=Ys(ga),o=U.T,u=I.p;try{I.p=32>a?32:a,U.T=null,a=nd,nd=null;var d=Wa,b=ga;if(xn=0,Sr=Wa=null,ga=0,(Ie&6)!==0)throw Error(s(331));var N=Ie;if(Ie|=4,lg(d.current),sg(d,d.current,b,a),Ie=N,Bo(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(wt,d)}catch{}return!0}finally{I.p=u,U.T=o,Ag(e,n)}}function wg(e,n,a){n=di(a,n),n=Pf(e.stateNode,n,2),e=za(e,n,2),e!==null&&(In(e,2),Hi(e))}function Ve(e,n,a){if(e.tag===3)wg(e,e,a);else for(;n!==null;){if(n.tag===3){wg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xa===null||!Xa.has(o))){e=di(a,e),a=C0(2),o=za(n,a,2),o!==null&&(D0(a,o,n,e),In(o,2),Hi(o));break}}n=n.return}}function rd(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new VS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Jf=!0,u.add(a),e=qS.bind(null,e,n,a),n.then(e,e))}function qS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Re&a)===a&&(an===4||an===3&&(Re&62914560)===Re&&300>T()-lc?(Ie&2)===0&&yr(e,0):$f|=a,xr===Re&&(xr=0)),Hi(e)}function Cg(e,n){n===0&&(n=He()),e=vs(e,n),e!==null&&(In(e,n),Hi(e))}function YS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Cg(e,a)}function ZS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Cg(e,a)}function KS(e,n){return oe(e,n)}var mc=null,br=null,od=!1,gc=!1,ld=!1,Ya=0;function Hi(e){e!==br&&e.next===null&&(br===null?mc=br=e:br=br.next=e),gc=!0,od||(od=!0,JS())}function Bo(e,n){if(!ld&&gc){ld=!0;do for(var a=!1,o=mc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var b=o.suspendedLanes,N=o.pingedLanes;d=(1<<31-zt(42|e)+1)-1,d&=u&~(b&~N),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Lg(o,d))}else d=Re,d=Mt(o,o===Ye?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Qt(o,d)||(a=!0,Lg(o,d));o=o.next}while(a);ld=!1}}function QS(){Dg()}function Dg(){gc=od=!1;var e=0;Ya!==0&&ly()&&(e=Ya);for(var n=T(),a=null,o=mc;o!==null;){var u=o.next,d=Ng(o,n);d===0?(o.next=null,a===null?mc=u:a.next=u,u===null&&(br=a)):(a=o,(e!==0||(d&3)!==0)&&(gc=!0)),o=u}xn!==0&&xn!==5||Bo(e),Ya!==0&&(Ya=0)}function Ng(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var b=31-zt(d),N=1<<b,X=u[b];X===-1?((N&a)===0||(N&o)!==0)&&(u[b]=he(N,n)):X<=n&&(e.expiredLanes|=N),d&=~N}if(n=Ye,a=Re,a=Mt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&le(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Qt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&le(o),Ys(a)){case 2:case 8:a=Et;break;case 32:a=mt;break;case 268435456:a=Ut;break;default:a=mt}return o=Ug.bind(null,e),a=oe(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&le(o),e.callbackPriority=2,e.callbackNode=null,2}function Ug(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(pc()&&e.callbackNode!==a)return null;var o=Re;return o=Mt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(hg(e,o,n),Ng(e,T()),e.callbackNode!=null&&e.callbackNode===a?Ug.bind(null,e):null)}function Lg(e,n){if(pc())return null;hg(e,n,!0)}function JS(){uy(function(){(Ie&6)!==0?oe(yt,QS):Dg()})}function cd(){if(Ya===0){var e=lr;e===0&&(e=Ft,Ft<<=1,(Ft&261888)===0&&(Ft=256)),Ya=e}return Ya}function Og(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:El(""+e)}function Pg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function $S(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Og((u[_n]||null).action),b=o.submitter;b&&(n=(n=b[_n]||null)?Og(n.formAction):b.getAttribute("formAction"),n!==null&&(d=n,b=null));var N=new wl("action","action",null,o,u);e.push({event:N,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var X=b?Pg(u,b):new FormData(u);Cf(a,{pending:!0,data:X,method:u.method,action:d},null,X)}}else typeof d=="function"&&(N.preventDefault(),X=b?Pg(u,b):new FormData(u),Cf(a,{pending:!0,data:X,method:u.method,action:d},d,X))},currentTarget:u}]})}}for(var ud=0;ud<Xu.length;ud++){var fd=Xu[ud],ty=fd.toLowerCase(),ey=fd[0].toUpperCase()+fd.slice(1);Ai(ty,"on"+ey)}Ai(dm,"onAnimationEnd"),Ai(hm,"onAnimationIteration"),Ai(pm,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(_S,"onTransitionRun"),Ai(vS,"onTransitionStart"),Ai(xS,"onTransitionCancel"),Ai(mm,"onTransitionEnd"),It("onMouseEnter",["mouseout","mouseover"]),It("onMouseLeave",["mouseout","mouseover"]),It("onPointerEnter",["pointerout","pointerover"]),It("onPointerLeave",["pointerout","pointerover"]),ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ct("onBeforeInput",["compositionend","keypress","textInput","paste"]),ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ny=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function Fg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var b=o.length-1;0<=b;b--){var N=o[b],X=N.instance,dt=N.currentTarget;if(N=N.listener,X!==d&&u.isPropagationStopped())break t;d=N,u.currentTarget=dt;try{d(u)}catch(bt){Nl(bt)}u.currentTarget=null,d=X}else for(b=0;b<o.length;b++){if(N=o[b],X=N.instance,dt=N.currentTarget,N=N.listener,X!==d&&u.isPropagationStopped())break t;d=N,u.currentTarget=dt;try{d(u)}catch(bt){Nl(bt)}u.currentTarget=null,d=X}}}}function Te(e,n){var a=n[Ca];a===void 0&&(a=n[Ca]=new Set);var o=e+"__bubble";a.has(o)||(Ig(n,e,2,!1),a.add(o))}function dd(e,n,a){var o=0;n&&(o|=4),Ig(a,e,o,n)}var _c="_reactListening"+Math.random().toString(36).slice(2);function hd(e){if(!e[_c]){e[_c]=!0,vt.forEach(function(a){a!=="selectionchange"&&(ny.has(a)||dd(a,!1,e),dd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[_c]||(n[_c]=!0,dd("selectionchange",!1,n))}}function Ig(e,n,a,o){switch(d_(n)){case 2:var u=Dy;break;case 8:u=Ny;break;default:u=wd}a=u.bind(null,n,a,e),u=void 0,!Uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function pd(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var N=o.stateNode.containerInfo;if(N===u)break;if(b===4)for(b=o.return;b!==null;){var X=b.tag;if((X===3||X===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;N!==null;){if(b=Da(N),b===null)return;if(X=b.tag,X===5||X===6||X===26||X===27){o=d=b;continue t}N=N.parentNode}}o=o.return}Vp(function(){var dt=d,bt=Du(a),Rt=[];t:{var pt=gm.get(e);if(pt!==void 0){var St=wl,$t=e;switch(e){case"keypress":if(Al(a)===0)break t;case"keydown":case"keyup":St=Zx;break;case"focusin":$t="focus",St=Fu;break;case"focusout":$t="blur",St=Fu;break;case"beforeblur":case"afterblur":St=Fu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":St=Xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":St=Ix;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":St=Jx;break;case dm:case hm:case pm:St=Hx;break;case mm:St=tS;break;case"scroll":case"scrollend":St=Px;break;case"wheel":St=nS;break;case"copy":case"cut":case"paste":St=Vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":St=qp;break;case"toggle":case"beforetoggle":St=aS}var ce=(n&4)!==0,We=!ce&&(e==="scroll"||e==="scrollend"),rt=ce?pt!==null?pt+"Capture":null:pt;ce=[];for(var $=dt,ft;$!==null;){var Tt=$;if(ft=Tt.stateNode,Tt=Tt.tag,Tt!==5&&Tt!==26&&Tt!==27||ft===null||rt===null||(Tt=ro($,rt),Tt!=null&&ce.push(Ho($,Tt,ft))),We)break;$=$.return}0<ce.length&&(pt=new St(pt,$t,null,a,bt),Rt.push({event:pt,listeners:ce}))}}if((n&7)===0){t:{if(pt=e==="mouseover"||e==="pointerover",St=e==="mouseout"||e==="pointerout",pt&&a!==Cu&&($t=a.relatedTarget||a.fromElement)&&(Da($t)||$t[$i]))break t;if((St||pt)&&(pt=bt.window===bt?bt:(pt=bt.ownerDocument)?pt.defaultView||pt.parentWindow:window,St?($t=a.relatedTarget||a.toElement,St=dt,$t=$t?Da($t):null,$t!==null&&(We=c($t),ce=$t.tag,$t!==We||ce!==5&&ce!==27&&ce!==6)&&($t=null)):(St=null,$t=dt),St!==$t)){if(ce=Xp,Tt="onMouseLeave",rt="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(ce=qp,Tt="onPointerLeave",rt="onPointerEnter",$="pointer"),We=St==null?pt:ps(St),ft=$t==null?pt:ps($t),pt=new ce(Tt,$+"leave",St,a,bt),pt.target=We,pt.relatedTarget=ft,Tt=null,Da(bt)===dt&&(ce=new ce(rt,$+"enter",$t,a,bt),ce.target=ft,ce.relatedTarget=We,Tt=ce),We=Tt,St&&$t)e:{for(ce=iy,rt=St,$=$t,ft=0,Tt=rt;Tt;Tt=ce(Tt))ft++;Tt=0;for(var re=$;re;re=ce(re))Tt++;for(;0<ft-Tt;)rt=ce(rt),ft--;for(;0<Tt-ft;)$=ce($),Tt--;for(;ft--;){if(rt===$||$!==null&&rt===$.alternate){ce=rt;break e}rt=ce(rt),$=ce($)}ce=null}else ce=null;St!==null&&Bg(Rt,pt,St,ce,!1),$t!==null&&We!==null&&Bg(Rt,We,$t,ce,!0)}}t:{if(pt=dt?ps(dt):window,St=pt.nodeName&&pt.nodeName.toLowerCase(),St==="select"||St==="input"&&pt.type==="file")var Pe=em;else if($p(pt))if(nm)Pe=pS;else{Pe=dS;var ie=fS}else St=pt.nodeName,!St||St.toLowerCase()!=="input"||pt.type!=="checkbox"&&pt.type!=="radio"?dt&&Ks(dt.elementType)&&(Pe=em):Pe=hS;if(Pe&&(Pe=Pe(e,dt))){tm(Rt,Pe,a,bt);break t}ie&&ie(e,pt,dt),e==="focusout"&&dt&&pt.type==="number"&&dt.memoizedProps.value!=null&&Ei(pt,"number",pt.value)}switch(ie=dt?ps(dt):window,e){case"focusin":($p(ie)||ie.contentEditable==="true")&&(tr=ie,Vu=dt,mo=null);break;case"focusout":mo=Vu=tr=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,um(Rt,a,bt);break;case"selectionchange":if(gS)break;case"keydown":case"keyup":um(Rt,a,bt)}var Se;if(Bu)t:{switch(e){case"compositionstart":var we="onCompositionStart";break t;case"compositionend":we="onCompositionEnd";break t;case"compositionupdate":we="onCompositionUpdate";break t}we=void 0}else $s?Qp(e,a)&&(we="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Yp&&a.locale!=="ko"&&($s||we!=="onCompositionStart"?we==="onCompositionEnd"&&$s&&(Se=kp()):(Ua=bt,Lu="value"in Ua?Ua.value:Ua.textContent,$s=!0)),ie=vc(dt,we),0<ie.length&&(we=new Wp(we,e,null,a,bt),Rt.push({event:we,listeners:ie}),Se?we.data=Se:(Se=Jp(a),Se!==null&&(we.data=Se)))),(Se=rS?oS(e,a):lS(e,a))&&(we=vc(dt,"onBeforeInput"),0<we.length&&(ie=new Wp("onBeforeInput","beforeinput",null,a,bt),Rt.push({event:ie,listeners:we}),ie.data=Se)),$S(Rt,e,dt,a,bt)}Fg(Rt,n)})}function Ho(e,n,a){return{instance:e,listener:n,currentTarget:a}}function vc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=ro(e,a),u!=null&&o.unshift(Ho(e,u,d)),u=ro(e,n),u!=null&&o.push(Ho(e,u,d))),e.tag===3)return o;e=e.return}return[]}function iy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bg(e,n,a,o,u){for(var d=n._reactName,b=[];a!==null&&a!==o;){var N=a,X=N.alternate,dt=N.stateNode;if(N=N.tag,X!==null&&X===o)break;N!==5&&N!==26&&N!==27||dt===null||(X=dt,u?(dt=ro(a,d),dt!=null&&b.unshift(Ho(a,dt,X))):u||(dt=ro(a,d),dt!=null&&b.push(Ho(a,dt,X)))),a=a.return}b.length!==0&&e.push({event:n,listeners:b})}var ay=/\r\n?/g,sy=/\u0000|\uFFFD/g;function zg(e){return(typeof e=="string"?e:""+e).replace(ay,`
`).replace(sy,"")}function Hg(e,n){return n=zg(n),zg(e)===n}function Xe(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Hn(e,""+o);break;case"className":me(e,"class",o);break;case"tabIndex":me(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":me(e,a,o);break;case"style":ta(e,o,d);break;case"data":if(n!=="object"){me(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=El(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=El(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ea);break;case"onScroll":o!=null&&Te("scroll",e);break;case"onScrollEnd":o!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=El(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Te("beforetoggle",e),Te("toggle",e),fe(e,"popover",o);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":fe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Lx.get(a)||a,fe(e,a,o))}}function md(e,n,a,o,u,d){switch(a){case"style":ta(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&Hn(e,""+o);break;case"onScroll":o!=null&&Te("scroll",e);break;case"onScrollEnd":o!=null&&Te("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ht.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[_n]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):fe(e,a,o)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var b=a[d];if(b!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,d,b,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":Te("invalid",e);var N=d=b=u=null,X=null,dt=null;for(o in a)if(a.hasOwnProperty(o)){var bt=a[o];if(bt!=null)switch(o){case"name":u=bt;break;case"type":b=bt;break;case"checked":X=bt;break;case"defaultChecked":dt=bt;break;case"value":d=bt;break;case"defaultValue":N=bt;break;case"children":case"dangerouslySetInnerHTML":if(bt!=null)throw Error(s(137,n));break;default:Xe(e,n,o,bt,a,null)}}Qn(e,d,N,X,dt,b,u,!1);return;case"select":Te("invalid",e),o=b=d=null;for(u in a)if(a.hasOwnProperty(u)&&(N=a[u],N!=null))switch(u){case"value":d=N;break;case"defaultValue":b=N;break;case"multiple":o=N;default:Xe(e,n,u,N,a,null)}n=d,a=b,e.multiple=!!o,n!=null?Jn(e,!!o,n,!1):a!=null&&Jn(e,!!o,a,!0);return;case"textarea":Te("invalid",e),d=u=o=null;for(b in a)if(a.hasOwnProperty(b)&&(N=a[b],N!=null))switch(b){case"value":o=N;break;case"defaultValue":u=N;break;case"children":d=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(91));break;default:Xe(e,n,b,N,a,null)}un(e,o,u,d);return;case"option":for(X in a)if(a.hasOwnProperty(X)&&(o=a[X],o!=null))switch(X){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(e,n,X,o,a,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(o=0;o<zo.length;o++)Te(zo[o],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(dt in a)if(a.hasOwnProperty(dt)&&(o=a[dt],o!=null))switch(dt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,dt,o,a,null)}return;default:if(Ks(n)){for(bt in a)a.hasOwnProperty(bt)&&(o=a[bt],o!==void 0&&md(e,n,bt,o,a,void 0));return}}for(N in a)a.hasOwnProperty(N)&&(o=a[N],o!=null&&Xe(e,n,N,o,a,null))}function ry(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,b=null,N=null,X=null,dt=null,bt=null;for(St in a){var Rt=a[St];if(a.hasOwnProperty(St)&&Rt!=null)switch(St){case"checked":break;case"value":break;case"defaultValue":X=Rt;default:o.hasOwnProperty(St)||Xe(e,n,St,null,o,Rt)}}for(var pt in o){var St=o[pt];if(Rt=a[pt],o.hasOwnProperty(pt)&&(St!=null||Rt!=null))switch(pt){case"type":d=St;break;case"name":u=St;break;case"checked":dt=St;break;case"defaultChecked":bt=St;break;case"value":b=St;break;case"defaultValue":N=St;break;case"children":case"dangerouslySetInnerHTML":if(St!=null)throw Error(s(137,n));break;default:St!==Rt&&Xe(e,n,pt,St,o,Rt)}}zn(e,b,N,X,dt,bt,d,u);return;case"select":St=b=N=pt=null;for(d in a)if(X=a[d],a.hasOwnProperty(d)&&X!=null)switch(d){case"value":break;case"multiple":St=X;default:o.hasOwnProperty(d)||Xe(e,n,d,null,o,X)}for(u in o)if(d=o[u],X=a[u],o.hasOwnProperty(u)&&(d!=null||X!=null))switch(u){case"value":pt=d;break;case"defaultValue":N=d;break;case"multiple":b=d;default:d!==X&&Xe(e,n,u,d,o,X)}n=N,a=b,o=St,pt!=null?Jn(e,!!a,pt,!1):!!o!=!!a&&(n!=null?Jn(e,!!a,n,!0):Jn(e,!!a,a?[]:"",!1));return;case"textarea":St=pt=null;for(N in a)if(u=a[N],a.hasOwnProperty(N)&&u!=null&&!o.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Xe(e,n,N,null,o,u)}for(b in o)if(u=o[b],d=a[b],o.hasOwnProperty(b)&&(u!=null||d!=null))switch(b){case"value":pt=u;break;case"defaultValue":St=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Xe(e,n,b,u,o,d)}ze(e,pt,St);return;case"option":for(var $t in a)if(pt=a[$t],a.hasOwnProperty($t)&&pt!=null&&!o.hasOwnProperty($t))switch($t){case"selected":e.selected=!1;break;default:Xe(e,n,$t,null,o,pt)}for(X in o)if(pt=o[X],St=a[X],o.hasOwnProperty(X)&&pt!==St&&(pt!=null||St!=null))switch(X){case"selected":e.selected=pt&&typeof pt!="function"&&typeof pt!="symbol";break;default:Xe(e,n,X,pt,o,St)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in a)pt=a[ce],a.hasOwnProperty(ce)&&pt!=null&&!o.hasOwnProperty(ce)&&Xe(e,n,ce,null,o,pt);for(dt in o)if(pt=o[dt],St=a[dt],o.hasOwnProperty(dt)&&pt!==St&&(pt!=null||St!=null))switch(dt){case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:Xe(e,n,dt,pt,o,St)}return;default:if(Ks(n)){for(var We in a)pt=a[We],a.hasOwnProperty(We)&&pt!==void 0&&!o.hasOwnProperty(We)&&md(e,n,We,void 0,o,pt);for(bt in o)pt=o[bt],St=a[bt],!o.hasOwnProperty(bt)||pt===St||pt===void 0&&St===void 0||md(e,n,bt,pt,o,St);return}}for(var rt in a)pt=a[rt],a.hasOwnProperty(rt)&&pt!=null&&!o.hasOwnProperty(rt)&&Xe(e,n,rt,null,o,pt);for(Rt in o)pt=o[Rt],St=a[Rt],!o.hasOwnProperty(Rt)||pt===St||pt==null&&St==null||Xe(e,n,Rt,pt,o,St)}function Gg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function oy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,b=u.initiatorType,N=u.duration;if(d&&N&&Gg(b)){for(b=0,N=u.responseEnd,o+=1;o<a.length;o++){var X=a[o],dt=X.startTime;if(dt>N)break;var bt=X.transferSize,Rt=X.initiatorType;bt&&Gg(Rt)&&(X=X.responseEnd,b+=bt*(X<N?1:(N-dt)/(X-dt)))}if(--o,n+=8*(d+b)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var gd=null,_d=null;function xc(e){return e.nodeType===9?e:e.ownerDocument}function Vg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function vd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xd=null;function ly(){var e=window.event;return e&&e.type==="popstate"?e===xd?!1:(xd=e,!0):(xd=null,!1)}var jg=typeof setTimeout=="function"?setTimeout:void 0,cy=typeof clearTimeout=="function"?clearTimeout:void 0,Xg=typeof Promise=="function"?Promise:void 0,uy=typeof queueMicrotask=="function"?queueMicrotask:typeof Xg<"u"?function(e){return Xg.resolve(null).then(e).catch(fy)}:jg;function fy(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function Wg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Rr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Go(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Go(a);for(var d=a.firstChild;d;){var b=d.nextSibling,N=d.nodeName;d[hs]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=b}}else a==="body"&&Go(e.ownerDocument.body);a=u}while(a);Rr(n)}function qg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Sd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sd(a),so(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function dy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[hs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function hy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Yg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function yd(e){return e.data==="$?"||e.data==="$~"}function Md(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function py(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var bd=null;function Zg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return _i(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Kg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Qg(e,n,a){switch(n=xc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Go(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);so(e)}var vi=new Map,Jg=new Set;function Sc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=I.d;I.d={f:my,r:gy,D:_y,C:vy,L:xy,m:Sy,X:My,S:yy,M:by};function my(){var e=_a.f(),n=fc();return e||n}function gy(e){var n=Na(e);n!==null&&n.tag===5&&n.type==="form"?m0(n):_a.r(e)}var Er=typeof document>"u"?null:document;function $g(e,n,a){var o=Er;if(o&&typeof n=="string"&&n){var u=pe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Jg.has(u)||(Jg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",e),nt(n),o.head.appendChild(n)))}}function _y(e){_a.D(e),$g("dns-prefetch",e,null)}function vy(e,n){_a.C(e,n),$g("preconnect",e,n)}function xy(e,n,a){_a.L(e,n,a);var o=Er;if(o&&e&&n){var u='link[rel="preload"][as="'+pe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pe(a.imageSizes)+'"]')):u+='[href="'+pe(e)+'"]';var d=u;switch(n){case"style":d=Tr(e);break;case"script":d=Ar(e)}vi.has(d)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Vo(d))||n==="script"&&o.querySelector(ko(d))||(n=o.createElement("link"),Rn(n,"link",e),nt(n),o.head.appendChild(n)))}}function Sy(e,n){_a.m(e,n);var a=Er;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pe(o)+'"][href="'+pe(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ar(e)}if(!vi.has(d)&&(e=_({rel:"modulepreload",href:e},n),vi.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ko(d)))return}o=a.createElement("link"),Rn(o,"link",e),nt(o),a.head.appendChild(o)}}}function yy(e,n,a){_a.S(e,n,a);var o=Er;if(o&&e){var u=L(o).hoistableStyles,d=Tr(e);n=n||"default";var b=u.get(d);if(!b){var N={loading:0,preload:null};if(b=o.querySelector(Vo(d)))N.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(d))&&Ed(e,a);var X=b=o.createElement("link");nt(X),Rn(X,"link",e),X._p=new Promise(function(dt,bt){X.onload=dt,X.onerror=bt}),X.addEventListener("load",function(){N.loading|=1}),X.addEventListener("error",function(){N.loading|=2}),N.loading|=4,yc(b,n,o)}b={type:"stylesheet",instance:b,count:1,state:N},u.set(d,b)}}}function My(e,n){_a.X(e,n);var a=Er;if(a&&e){var o=L(a).hoistableScripts,u=Ar(e),d=o.get(u);d||(d=a.querySelector(ko(u)),d||(e=_({src:e,async:!0},n),(n=vi.get(u))&&Td(e,n),d=a.createElement("script"),nt(d),Rn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function by(e,n){_a.M(e,n);var a=Er;if(a&&e){var o=L(a).hoistableScripts,u=Ar(e),d=o.get(u);d||(d=a.querySelector(ko(u)),d||(e=_({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&Td(e,n),d=a.createElement("script"),nt(d),Rn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function t_(e,n,a,o){var u=(u=q.current)?Sc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Tr(a.href),a=L(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tr(a.href);var d=L(u).hoistableStyles,b=d.get(e);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,b),(d=u.querySelector(Vo(e)))&&!d._p&&(b.instance=d,b.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),d||Ey(u,e,a,b.state))),n&&o===null)throw Error(s(528,""));return b}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ar(a),a=L(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Tr(e){return'href="'+pe(e)+'"'}function Vo(e){return'link[rel="stylesheet"]['+e+"]"}function e_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Ey(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),nt(n),e.head.appendChild(n))}function Ar(e){return'[src="'+pe(e)+'"]'}function ko(e){return"script[async]"+e}function n_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+pe(a.href)+'"]');if(o)return n.instance=o,nt(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nt(o),Rn(o,"style",u),yc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Tr(a.href);var d=e.querySelector(Vo(u));if(d)return n.state.loading|=4,n.instance=d,nt(d),d;o=e_(a),(u=vi.get(u))&&Ed(o,u),d=(e.ownerDocument||e).createElement("link"),nt(d);var b=d;return b._p=new Promise(function(N,X){b.onload=N,b.onerror=X}),Rn(d,"link",o),n.state.loading|=4,yc(d,a.precedence,e),n.instance=d;case"script":return d=Ar(a.src),(u=e.querySelector(ko(d)))?(n.instance=u,nt(u),u):(o=a,(u=vi.get(d))&&(o=_({},a),Td(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),nt(u),Rn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,yc(o,a.precedence,e));return n.instance}function yc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,b=0;b<o.length;b++){var N=o[b];if(N.dataset.precedence===n)d=N;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Ed(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Td(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Mc=null;function i_(e,n,a){if(Mc===null){var o=new Map,u=Mc=new Map;u.set(a,o)}else u=Mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[hs]||d[cn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(n)||"";b=e+b;var N=o.get(b);N?N.push(d):o.set(b,[d])}}return o}function a_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Ty(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function s_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ay(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Tr(o.href),d=n.querySelector(Vo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=bc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,nt(d);return}d=n.ownerDocument||n,o=e_(o),(u=vi.get(u))&&Ed(o,u),d=d.createElement("link"),nt(d);var b=d;b._p=new Promise(function(N,X){b.onload=N,b.onerror=X}),Rn(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=bc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ad=0;function Ry(e,n){return e.stylesheets&&e.count===0&&Tc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Tc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&Ad===0&&(Ad=62500*oy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Tc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Ad?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function bc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Tc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ec=null;function Tc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ec=new Map,n.forEach(wy,e),Ec=null,bc.call(e))}function wy(e,n){if(!(n.state.loading&4)){var a=Ec.get(e);if(a)var o=a.get(null);else{a=new Map,Ec.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var b=u[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),o=b)}o&&a.set(null,o)}u=n.instance,b=u.getAttribute("data-precedence"),d=a.get(b)||o,d===o&&a.set(null,u),a.set(b,u),this.count++,o=bc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var jo={$$typeof:C,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Cy(e,n,a,o,u,d,b,N,X){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ne(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ne(0),this.hiddenUpdates=Ne(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.incompleteTransitions=new Map}function r_(e,n,a,o,u,d,b,N,X,dt,bt,Rt){return e=new Cy(e,n,a,b,X,dt,bt,Rt,N),n=1,d===!0&&(n|=24),d=ti(3,null,null,n),e.current=d,d.stateNode=e,n=sf(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},cf(d),e}function o_(e){return e?(e=ir,e):ir}function l_(e,n,a,o,u,d){u=o_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ba(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=za(e,o,n),a!==null&&(Zn(a,e,n),Mo(a,e,n))}function c_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Rd(e,n){c_(e,n),(e=e.alternate)&&c_(e,n)}function u_(e){if(e.tag===13||e.tag===31){var n=vs(e,67108864);n!==null&&Zn(n,e,67108864),Rd(e,67108864)}}function f_(e){if(e.tag===13||e.tag===31){var n=si();n=qs(n);var a=vs(e,n);a!==null&&Zn(a,e,n),Rd(e,n)}}var Ac=!0;function Dy(e,n,a,o){var u=U.T;U.T=null;var d=I.p;try{I.p=2,wd(e,n,a,o)}finally{I.p=d,U.T=u}}function Ny(e,n,a,o){var u=U.T;U.T=null;var d=I.p;try{I.p=8,wd(e,n,a,o)}finally{I.p=d,U.T=u}}function wd(e,n,a,o){if(Ac){var u=Cd(o);if(u===null)pd(e,n,o,Rc,a),h_(e,o);else if(Ly(u,e,n,a,o))o.stopPropagation();else if(h_(e,o),n&4&&-1<Uy.indexOf(e)){for(;u!==null;){var d=Na(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=Nt(d.pendingLanes);if(b!==0){var N=d;for(N.pendingLanes|=2,N.entangledLanes|=2;b;){var X=1<<31-zt(b);N.entanglements[1]|=X,b&=~X}Hi(d),(Ie&6)===0&&(cc=T()+500,Bo(0))}}break;case 31:case 13:N=vs(d,2),N!==null&&Zn(N,d,2),fc(),Rd(d,2)}if(d=Cd(o),d===null&&pd(e,n,o,Rc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else pd(e,n,o,null,a)}}function Cd(e){return e=Du(e),Dd(e)}var Rc=null;function Dd(e){if(Rc=null,e=Da(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Rc=e,null}function d_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case yt:return 2;case Et:return 8;case mt:case Vt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var Nd=!1,Ka=null,Qa=null,Ja=null,Xo=new Map,Wo=new Map,$a=[],Uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function h_(e,n){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(n.pointerId)}}function qo(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Na(n),n!==null&&u_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Ly(e,n,a,o,u){switch(n){case"focusin":return Ka=qo(Ka,e,n,a,o,u),!0;case"dragenter":return Qa=qo(Qa,e,n,a,o,u),!0;case"mouseover":return Ja=qo(Ja,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Xo.set(d,qo(Xo.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Wo.set(d,qo(Wo.get(d)||null,e,n,a,o,u)),!0}return!1}function p_(e){var n=Da(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Zs(e.priority,function(){f_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Zs(e.priority,function(){f_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Cd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Cu=o,a.target.dispatchEvent(o),Cu=null}else return n=Na(a),n!==null&&u_(n),e.blockedOn=a,!1;n.shift()}return!0}function m_(e,n,a){wc(e)&&a.delete(n)}function Oy(){Nd=!1,Ka!==null&&wc(Ka)&&(Ka=null),Qa!==null&&wc(Qa)&&(Qa=null),Ja!==null&&wc(Ja)&&(Ja=null),Xo.forEach(m_),Wo.forEach(m_)}function Cc(e,n){e.blockedOn===n&&(e.blockedOn=null,Nd||(Nd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Oy)))}var Dc=null;function g_(e){Dc!==e&&(Dc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Dc===e&&(Dc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Dd(o||a)===null)continue;break}var d=Na(a);d!==null&&(e.splice(n,3),n-=3,Cf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Rr(e){function n(X){return Cc(X,e)}Ka!==null&&Cc(Ka,e),Qa!==null&&Cc(Qa,e),Ja!==null&&Cc(Ja,e),Xo.forEach(n),Wo.forEach(n);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)p_(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],b=u[_n]||null;if(typeof d=="function")b||g_(a);else if(b){var N=null;if(d&&d.hasAttribute("formAction")){if(u=d,b=d[_n]||null)N=b.formAction;else if(Dd(u)!==null)continue}else N=b.action;typeof N=="function"?a[o+1]=N:(a.splice(o,3),o-=3),g_(a)}}}function __(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(b){return u=b})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ud(e){this._internalRoot=e}Nc.prototype.render=Ud.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();l_(a,o,e,n,null,null)},Nc.prototype.unmount=Ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;l_(e.current,2,null,e,null,null),fc(),n[$i]=null}};function Nc(e){this._internalRoot=e}Nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Fi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,e),a===0&&p_(e)}};var v_=t.version;if(v_!=="19.2.4")throw Error(s(527,v_,"19.2.4"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Py={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uc.isDisabled&&Uc.supportsFiber)try{wt=Uc.inject(Py),Ct=Uc}catch{}}return Zo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=T0,d=A0,b=R0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError)),n=r_(e,1,!1,null,null,a,o,null,u,d,b,__),e[$i]=n.current,hd(e),new Ud(n)},Zo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=T0,b=A0,N=R0,X=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(N=a.onRecoverableError),a.formState!==void 0&&(X=a.formState)),n=r_(e,1,!0,n,a??null,o,u,X,d,b,N,__),n.context=o_(null),a=n.current,o=si(),o=qs(o),u=Ba(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,In(n,a),Hi(n),e[$i]=n.current,hd(e),new Nc(n)},Zo.version="19.2.4",Zo}var w_;function Yy(){if(w_)return Pd.exports;w_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Pd.exports=qy(),Pd.exports}var Zy=Yy();const Ky=Kv(Zy),Be=16,Qe=250,Tu=["#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2","#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2"],Qy=500,C_=1e3,Jy=3e4,$y=2;function tM(r=4){const[t,i]=Z.useState(!1),[s,l]=Z.useState(0),[c,f]=Z.useState(0),[p,m]=Z.useState(null),[h,x]=Z.useState(!1),[_,v]=Z.useState(0),[y,M]=Z.useState(null),R=Z.useRef(null),g=Z.useRef(null),S=Z.useRef(null),A=Z.useRef(null),C=Z.useRef(0),D=Z.useRef(0),V=Z.useRef([]),F=Z.useRef(!1),H=Z.useRef(0),E=Z.useRef(0),O=Z.useRef(0),et=Qe*r;O.current=et,(!A.current||A.current[0].length!==et)&&(A.current=Array.from({length:Be},()=>new Float32Array(et)),C.current=0,D.current=0),Z.useEffect(()=>(h?(R.current=Date.now(),v(0),g.current&&clearInterval(g.current),g.current=setInterval(()=>{v(Math.floor((Date.now()-R.current)/1e3))},500)):(g.current&&clearInterval(g.current),R.current=null),()=>{g.current&&clearInterval(g.current)}),[h]);const G=Z.useCallback(tt=>{F.current=tt,tt||(C.current=0,D.current=0)},[]),k=Z.useCallback(tt=>{const U=S.current;U&&U.readyState===WebSocket.OPEN&&U.send(JSON.stringify(tt))},[]);Z.useEffect(()=>{const tt=location.hostname||"localhost",U=parseInt(location.port||"1617")-1,J=`${location.protocol==="https:"?"wss":"ws"}://${tt}:${U}`,ot="/auth/ws-token";async function xt(){try{const W=await fetch(ot,{credentials:"include"});return W.ok&&(await W.json()).token||null}catch{return null}}let z=C_;async function P(){const W=await xt(),lt=W?`${J}?token=${encodeURIComponent(W)}`:J,gt=new WebSocket(lt);S.current=gt,gt.onopen=()=>{i(!0),z=C_},gt.onclose=()=>{i(!1),m(null);const q=Math.random()*z*.3;setTimeout(P,z+q),z=Math.min(z*$y,Jy)},gt.onerror=()=>gt.close(),gt.onmessage=q=>{const st=JSON.parse(q.data);if("record_status"in st){const Lt=st.record_status;if(x(Lt.recording),Lt.stopped){const Xt=location.port||"1617";M({filename:Lt.stopped.filename,frames:Lt.stopped.frames,duration:Lt.stopped.duration,path:Lt.stopped.path,downloadUrl:`${location.protocol}//${location.hostname}:${Xt}/recordings/${Lt.stopped.filename}`})}}if("status"in st||F.current)return;const _t=st.channels;if(!_t||_t.length!==Be)return;const Q=A.current,At=O.current,Dt=C.current;for(let Lt=0;Lt<Be;Lt++)Q[Lt][Dt]=_t[Lt];C.current=(Dt+1)%At,D.current<At&&D.current++,H.current++;const Bt=st.t;V.current.push(Bt);const Pt=performance.now();if(Pt-E.current>Qy){E.current=Pt,l(H.current);const Lt=V.current,Xt=Bt-2;let Wt=0;for(;Wt<Lt.length&&Lt[Wt]<Xt;)Wt++;if(Wt>0&&Lt.splice(0,Wt),Lt.length>1){const j=Lt[Lt.length-1]-Lt[0];j>0&&f(Math.round((Lt.length-1)/j))}const se=Math.round((Date.now()/1e3-Bt)*1e3);se>=0&&se<1e4&&m(se)}}}return P(),()=>{const W=S.current;W&&W.close()}},[]);const Y=Z.useCallback(()=>M(null),[]),at=Z.useMemo(()=>({buffers:A,writeIndex:C,samplesInBuffer:D,bufferSize:et,gridSuspended:!1}),[]);return at.bufferSize=et,{connected:t,sampleCount:s,hz:c,latencyMs:p,recording:h,recordElapsed:_,recordResult:y,data:at,dismissRecordResult:Y,setPaused:G,sendCommand:k}}function zd({children:r}){const[t,i]=Z.useState("checking"),[s,l]=Z.useState(""),[c,f]=Z.useState("");Z.useEffect(()=>{(async()=>{try{const h=await fetch("/auth/status",{credentials:"include"});if(!h.ok){i("login");return}const x=await h.json();i(x.authenticated?"ok":"login")}catch(h){console.error("Auth check error:",h),i("login")}})()},[]);async function p(m){m.preventDefault(),f("");try{const x=await(await fetch("/auth",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({code:s})})).json();x.ok?i("ok"):(f(x.error||"Invalid code"),l(""))}catch{f("Server unreachable")}}return t==="checking"?null:t==="ok"?w.jsx(w.Fragment,{children:r}):w.jsx("div",{className:"auth-overlay",children:w.jsxs("div",{className:"auth-card",children:[w.jsxs("h1",{children:["Pi",w.jsx("span",{children:"EEG"}),"-16"]}),w.jsx("p",{className:"auth-sub",children:"Enter the access code displayed in the server console"}),w.jsxs("form",{onSubmit:p,children:[w.jsx("input",{className:"auth-input",type:"text",maxLength:6,pattern:"[0-9]{6}",autoComplete:"off",autoFocus:!0,required:!0,placeholder:"------",value:s,onChange:m=>l(m.target.value.replace(/\D/g,""))}),w.jsx("br",{}),w.jsx("button",{className:"auth-btn",type:"submit",children:"Connect"}),c&&w.jsx("p",{className:"auth-error",children:c})]})]})})}const eM="rgba(48,54,61,0.4)",nM="rgba(88,166,255,0.15)",iM={high:1500,medium:800,low:400},D_=14,N_=20,U_=2;function aM(r,t,i,s,l,c,f,p,m,h){r.clearRect(0,0,t,i);const x=i/2,_=i/4;r.beginPath();for(let C=_;C<i;C+=_)r.moveTo(0,C),r.lineTo(t,C);if(r.strokeStyle=eM,r.lineWidth=.5,r.stroke(),r.beginPath(),r.moveTo(0,x),r.lineTo(t,x),r.strokeStyle=nM,r.lineWidth=1,r.stroke(),l<2)return;const v=iM[h]||1500,y=l>v?Math.floor(l/v):1,M=i/2,R=t/(f-1),g=M/p;if(h!=="low"){r.beginPath();let C=0;for(let D=0;D<l;D+=y){const V=(c-l+D+f)%f,F=D*R,H=x-s[V]*g;D===0?(r.moveTo(F,H),C=F):r.lineTo(F,H)}r.lineTo((l-1)*R,i),r.lineTo(C,i),r.closePath(),r.fillStyle=m+"10",r.fill()}r.strokeStyle=m,r.lineWidth=h==="low"?1:1.3,r.lineJoin="round",r.lineCap="round",r.beginPath();for(let C=0;C<l;C+=y){const D=(c-l+C+f)%f,V=C*R,F=x-s[D]*g;C===0?r.moveTo(V,F):r.lineTo(V,F)}r.stroke();let S=0;const A=Math.min(l,250);for(let C=l-A;C<l;C++){const D=(c-l+C+f)%f;S+=s[D]*s[D]}return Math.sqrt(S/A)}const sM=Z.memo(function({chIdx:t,eegData:i,yRange:s,expanded:l,onToggleExpand:c,active:f=!0}){const p=Z.useRef(null),m=Z.useRef(0),h=Z.useRef(0),x=Z.useRef(null),_=Z.useRef(null),v=Z.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),y=Z.useRef(!0),M=Z.useRef("high"),R=Z.useRef([]),g=Z.useRef(-1),S=Z.useRef(0),A=Z.useRef(0);return Z.useEffect(()=>{if(!f)return;const C=p.current;if(!C)return;const D=new ResizeObserver(V=>{const F=V[0];if(!F)return;const H=window.devicePixelRatio||1,{width:E,height:O}=F.contentRect,et=l?Math.min(H,2):1;v.current={w:E,h:O,pw:Math.round(E*et),ph:Math.round(O*et),dpr:et},y.current=!0});return D.observe(C),()=>D.disconnect()},[f,l]),Z.useEffect(()=>{if(!f)return;const C=p.current;if(!C)return;const D=C.getContext("2d",{alpha:!1});g.current=-1,A.current=0;const V=t%U_,F=()=>{A.current++;const{w:H,h:E,pw:O,ph:et,dpr:G}=v.current;if(H===0||E===0){m.current=requestAnimationFrame(F);return}if(!l&&i.gridSuspended){m.current=requestAnimationFrame(F);return}if(!l&&A.current%U_!==V){m.current=requestAnimationFrame(F);return}const k=i.writeIndex.current;if(k===g.current){m.current=requestAnimationFrame(F);return}g.current=k;const Y=performance.now();y.current&&(y.current=!1,C.width=O,C.height=et,D.setTransform(G,0,0,G,0,0)),D.fillStyle="#0d1117",D.fillRect(0,0,H,E);const at=aM(D,H,E,i.buffers.current[t],i.samplesInBuffer.current,k,i.bufferSize,s,Tu[t],M.current);if(S.current++,at!==void 0&&(S.current&1)===0){h.current=at;const I=at/s;if(x.current&&(x.current.style.borderLeftColor=I>.8?"#f85149":I>.4?"#d29922":"#3fb950"),_.current){const J=I>.8?"#f85149":I>.4?"#d29922":"#3fb950",ot=I>.8?"HIGH":I>.4?"MED":"OK",xt=at<.5;_.current.style.color=xt?"#8b949e":J,_.current.textContent=xt?"FLAT":ot}}const tt=performance.now()-Y,U=R.current;if(U.push(tt),U.length>N_&&U.shift(),U.length===N_){let I=0;for(let ot=0;ot<U.length;ot++)I+=U[ot];const J=I/U.length;J>D_&&M.current!=="low"?M.current=M.current==="high"?"medium":"low":J<D_*.4&&M.current!=="high"&&(M.current=M.current==="low"?"medium":"high")}m.current=requestAnimationFrame(F)};return m.current=requestAnimationFrame(F),()=>cancelAnimationFrame(m.current)},[t,i,s,f]),f?w.jsxs("div",{className:`channel-cell${l?" expanded":""}`,onClick:c,children:[w.jsxs("div",{className:"channel-label",ref:x,children:["Ch ",t+1,w.jsx("span",{className:"signal-quality",ref:_,children:"OK"})]}),w.jsx("canvas",{ref:p,style:{display:"block",width:"100%",height:"100%"}})]}):w.jsxs("div",{className:`channel-cell inactive${l?" expanded":""}`,onClick:c,children:[w.jsxs("div",{className:"channel-label",children:["Ch ",t+1]}),w.jsx("div",{className:"channel-off",children:"OFF"})]})}),{PI:rM,cos:L_,sin:oM}=Math,O_=2*rM,ln=[{name:"Delta",label:"δ Delta",low:.5,high:4,color:"#8b5cf6"},{name:"Theta",label:"θ Theta",low:4,high:8,color:"#06b6d4"},{name:"Alpha",label:"α Alpha",low:8,high:13,color:"#22c55e"},{name:"Beta",label:"β Beta",low:13,high:30,color:"#f59e0b"},{name:"Gamma",label:"γ Gamma",low:30,high:100,color:"#ef4444"}];class ks{constructor(t,i){Ci(this,"n");Ci(this,"sampleRateHz");Ci(this,"_window");Ci(this,"_frequencies");Ci(this,"_df");Ci(this,"_bitReversed");Ci(this,"_twRe");Ci(this,"_twIm");Ci(this,"_norm");if(t<=0||(t&t-1)!==0)throw new Error("n must be a power of 2");this.n=t,this.sampleRateHz=i,this._precompute()}_precompute(){const{n:t,sampleRateHz:i}=this;this._window=new Float64Array(t);for(let p=0;p<t;p++)this._window[p]=.5*(1-L_(O_*p/(t-1)));const s=(t>>1)+1;this._frequencies=new Float64Array(s),this._df=i/t;for(let p=0;p<s;p++)this._frequencies[p]=p*this._df;const l=ks._log2(t);this._bitReversed=new Int32Array(t);for(let p=0;p<t;p++)this._bitReversed[p]=ks._reverseBits(p,l);const c=t>>1;this._twRe=new Float64Array(c),this._twIm=new Float64Array(c);for(let p=0;p<c;p++){const m=-O_*p/t;this._twRe[p]=L_(m),this._twIm[p]=oM(m)}let f=0;for(let p=0;p<t;p++)f+=this._window[p]*this._window[p];this._norm=2/(i*f)}analyse(t,i){const{n:s,_window:l,_frequencies:c,_df:f,_norm:p}=this;if(i===void 0&&(i=t.length-s),i<0||t.length-i<s)return null;const m=new Float64Array(s),h=new Float64Array(s);for(let g=0;g<s;g++)m[g]=t[i+g]*l[g];this._fft(m,h);const x=(s>>1)+1,_=new Float64Array(x);let v=0,y=0,M=0;for(let g=0;g<x;g++){const S=m[g]*m[g]+h[g]*h[g],A=g===0||g===x-1?.5:1;_[g]=S*p*A,y+=_[g]*f,_[g]>v&&(v=_[g],M=g)}const R={};for(const g of ln){let S=0;for(let A=0;A<x;A++)c[A]>=g.low&&c[A]<g.high&&(S+=_[A]*f);R[g.name]=S}return{frequencies:c,psd:_,bandPowers:R,dominantFrequency:c[M],totalPower:y}}analyseRing(t,i,s){const{n:l}=this;if(s<l)return null;const c=t.length,f=new Float64Array(l),p=(i-l+c)%c;for(let m=0;m<l;m++)f[m]=t[(p+m)%c];return this.analyse(f,0)}_fft(t,i){const{n:s,_bitReversed:l,_twRe:c,_twIm:f}=this;for(let p=0;p<s;p++){const m=l[p];if(m>p){let h=t[p];t[p]=t[m],t[m]=h,h=i[p],i[p]=i[m],i[m]=h}}for(let p=2;p<=s;p*=2){const m=p>>1,h=s/p;for(let x=0;x<s;x+=p)for(let _=0;_<m;_++){const v=_*h,y=c[v],M=f[v],R=x+_,g=R+m,S=y*t[g]-M*i[g],A=y*i[g]+M*t[g];t[g]=t[R]-S,i[g]=i[R]-A,t[R]+=S,i[R]+=A}}}static _log2(t){let i=0,s=t;for(;s>1;)s>>=1,i++;return i}static _reverseBits(t,i){let s=0,l=t;for(let c=0;c<i;c++)s=s<<1|l&1,l>>=1;return s}}const Ko=256,P_=8,F_=.25,Hd=15,lM=60,Di=40;function cM(r,t,i,s,l,c,f,p,m){r.clearRect(0,0,t,i);const h={l:52,r:12,t:8,b:28},x=t-h.l-h.r,_=i-h.t-h.b,v=h.t+_/2;r.fillStyle="#0d1117",r.fillRect(0,0,t,i),r.strokeStyle="rgba(48,54,61,0.5)",r.lineWidth=.5;const y=[-p,-p/2,0,p/2,p];r.font="9px monospace",r.fillStyle="#8b949e",r.textAlign="right";for(const U of y){const I=v-U/p*(_/2);r.beginPath(),r.moveTo(h.l,I),r.lineTo(t-h.r,I),r.stroke(),r.fillText(`${U>0?"+":""}${U}`,h.l-6,I+3)}r.textAlign="center",r.fillStyle="#8b949e";const M=f/Qe;for(let U=0;U<=M;U+=1){const I=h.l+U/M*x;r.beginPath(),r.moveTo(I,h.t),r.lineTo(I,h.t+_),r.strokeStyle="rgba(48,54,61,0.3)",r.stroke(),r.fillText(`${U}s`,I,i-6)}if(r.beginPath(),r.moveTo(h.l,v),r.lineTo(t-h.r,v),r.strokeStyle="rgba(88,166,255,0.2)",r.lineWidth=1,r.stroke(),l<2)return{};const R=_/2,g=x/(f-1),S=R/p;r.beginPath();let A=h.l;for(let U=0;U<l;U++){const I=(c-l+U+f)%f,J=h.l+U*g,ot=v-s[I]*S;U===0?(r.moveTo(J,ot),A=J):r.lineTo(J,ot)}r.lineTo(h.l+(l-1)*g,v+R),r.lineTo(A,v+R),r.closePath(),r.fillStyle=m+"0a",r.fill(),r.strokeStyle=m,r.lineWidth=1.5,r.lineJoin="round",r.lineCap="round",r.beginPath();for(let U=0;U<l;U++){const I=(c-l+U+f)%f,J=h.l+U*g,ot=v-s[I]*S;U===0?r.moveTo(J,ot):r.lineTo(J,ot)}r.stroke();const C=h.l+(l-1)*g;r.beginPath(),r.moveTo(C,h.t),r.lineTo(C,h.t+_),r.strokeStyle=m+"40",r.lineWidth=1,r.setLineDash([3,3]),r.stroke(),r.setLineDash([]);const D=(c-1+f)%f,V=s[D];r.fillStyle=m,r.font="bold 11px monospace",r.textAlign="left",r.fillText(`${V.toFixed(1)} µV`,C+6,h.t+14),r.save(),r.translate(12,v),r.rotate(-Math.PI/2),r.textAlign="center",r.fillStyle="#8b949e",r.font="9px monospace",r.fillText("µV",0,0),r.restore();let F=0,H=0,E=1/0,O=-1/0,et=0,G=null;const k=Math.min(l,Qe*2);for(let U=l-k;U<l;U++){const I=(c-l+U+f)%f,J=s[I];F+=J,H+=J*J,J<E&&(E=J),J>O&&(O=J),G!==null&&(G>=0&&J<0||G<0&&J>=0)&&et++,G=J}const Y=F/k,at=Math.sqrt(H/k),tt=O-E;return{mean:Y,rms:at,pp:tt,min:E,max:O,zeroCross:et,latestVal:V,statCount:k}}function uM(r,t,i,s,l,c,f,p){r.fillStyle="#0d1117",r.fillRect(0,0,t,i);const m={l:44,r:10,t:20,b:24},h=t-m.l-m.r,x=i-m.t-m.b,_=l[1],v=Math.min(Math.ceil(c/_),s.length-1);let y=1e-30;for(let M=1;M<=v;M++)s[M]>y&&(y=s[M]);for(const M of ln){if(M.low>=c)continue;const R=m.l+Math.max(M.low,0)/c*h,g=m.l+Math.min(M.high,c)/c*h,S=p===M.name;r.fillStyle=M.color+(S?"20":"0a"),r.fillRect(R,m.t,g-R,x),r.fillStyle=M.color+(S?"bb":"55"),r.font="8px monospace",r.textAlign="center",r.fillText(M.label.split(" ")[0],(R+g)/2,m.t+10)}r.strokeStyle="rgba(48,54,61,0.45)",r.lineWidth=.5;for(let M=1;M<4;M++){const R=m.t+M/4*x;r.beginPath(),r.moveTo(m.l,R),r.lineTo(m.l+h,R),r.stroke()}r.beginPath();for(let M=1;M<=v;M++){const R=m.l+l[M]/c*h,g=10*Math.log10((s[M]||1e-30)/y),S=Math.max(0,(g+60)/60),A=m.t+x-Math.min(1,S)*x;M===1?r.moveTo(R,A):r.lineTo(R,A)}r.strokeStyle="#58a6ff",r.lineWidth=1.5,r.stroke(),r.lineTo(m.l+l[v]/c*h,m.t+x),r.lineTo(m.l+l[1]/c*h,m.t+x),r.closePath(),r.fillStyle="rgba(88,166,255,0.08)",r.fill(),r.fillStyle="#8b949e",r.font="9px monospace",r.textAlign="center";for(let M=0;M<=c;M+=10)r.fillText(`${M}`,m.l+M/c*h,i-6);r.fillText("Hz",m.l+h+2,i-6),r.save(),r.translate(10,m.t+x/2),r.rotate(-Math.PI/2),r.textAlign="center",r.fillStyle="#8b949e",r.font="8px monospace",r.fillText("dB",0,0),r.restore(),r.textAlign="right",r.font="8px monospace",r.fillStyle="#6e7681";for(const M of[0,-20,-40,-60]){const R=m.t+x-(M+60)/60*x;r.fillText(`${M}`,m.l-4,R+3)}}function fM(r,t,i,s){r.fillStyle="#0d1117",r.fillRect(0,0,t,i);const l={l:10,r:10,t:6,b:4},c=Math.min(16,(i-l.t-l.b-(ln.length-1)*4)/ln.length),f=Math.max(...ln.map(m=>s[m.name]||0),1e-6),p=ln.reduce((m,h)=>m+(s[h.name]||0),0)||1e-6;ln.forEach((m,h)=>{const x=s[m.name]||0,_=x/f,v=(x/p*100).toFixed(1),y=l.t+h*(c+4),M=t-l.l-l.r-82;r.fillStyle=m.color,r.font="bold 9px monospace",r.textAlign="left",r.fillText(m.label.charAt(0),l.l,y+c-3);const R=l.l+14;r.fillStyle="rgba(48,54,61,0.5)",r.beginPath(),r.roundRect(R,y,M,c,3),r.fill(),_>0&&(r.fillStyle=m.color+"cc",r.beginPath(),r.roundRect(R,y,Math.max(4,M*_),c,3),r.fill()),r.fillStyle="#e6edf3",r.font="9px monospace",r.textAlign="right",r.fillText(`${v}%`,t-l.r,y+c-3)})}function dM(r,t,i,s,l,c,f,p){if(r.fillStyle="#0d1117",r.fillRect(0,0,t,i),l<10)return;const m={l:8,r:8,t:6,b:20},h=t-m.l-m.r,x=i-m.t-m.b,_=new Float32Array(Di),v=2*p/Di,y=Math.min(l,Qe*2);for(let g=l-y;g<l;g++){const S=(c-l+g+f)%f,A=s[S],C=Math.floor((A+p)/v);C>=0&&C<Di&&_[C]++}let M=0;for(let g=0;g<Di;g++)_[g]>M&&(M=_[g]);if(M===0)return;const R=h/Di;for(let g=0;g<Di;g++){const S=_[g]/M*x,A=m.l+g*R,C=m.t+x-S,D=Math.abs(g-Di/2)/(Di/2),V=Math.floor(88+D*160),F=Math.floor(166-D*120),H=Math.floor(255-D*200);r.fillStyle=`rgba(${V},${F},${H},0.6)`,r.fillRect(A+.5,C,R-1,S)}r.fillStyle="#6e7681",r.font="8px monospace",r.textAlign="center",r.fillText(`-${p}`,m.l+R,i-4),r.fillText("0",m.l+h/2,i-4),r.fillText(`+${p}`,t-m.r-R,i-4),r.strokeStyle="rgba(88,166,255,0.3)",r.lineWidth=1,r.beginPath();for(let g=0;g<Di;g++){const S=m.l+(g+.5)*R,A=(g-Di/2)/(Di/4),C=Math.exp(-.5*A*A),D=m.t+x-C*x*.85;g===0?r.moveTo(S,D):r.lineTo(S,D)}r.stroke()}const hM=Z.memo(function({chIdx:t,eegData:i,yRange:s,onClose:l}){var G;const c=Z.useRef(null),f=Z.useRef(null),p=Z.useRef(null),m=Z.useRef(null),h=Z.useRef(0),x=Z.useRef(0),_=Z.useRef(null),[v,y]=Z.useState(null),[M,R]=Z.useState({}),[g,S]=Z.useState({band:"",freq:0}),[A,C]=Z.useState(null),D=Z.useMemo(()=>new ks(Ko,Qe),[]),V=Tu[t],F=Z.useRef({trace:{w:0,h:0,pw:0,ph:0,dpr:1},spectrum:{w:0,h:0,pw:0,ph:0,dpr:1},band:{w:0,h:0,pw:0,ph:0,dpr:1},hist:{w:0,h:0,pw:0,ph:0,dpr:1}}),H=Z.useRef({trace:!0,spectrum:!0,band:!0,hist:!0});Z.useEffect(()=>{const k={trace:c.current,spectrum:f.current,band:p.current,hist:m.current},Y={},at=[];for(const[ot,xt]of Object.entries(k)){if(!xt)continue;Y[ot]=xt.getContext("2d",{alpha:!1});const z=new ResizeObserver(P=>{const W=P[0];if(!W)return;const lt=Math.min(window.devicePixelRatio||1,2),{width:gt,height:q}=W.contentRect,st=Math.round(gt*lt),_t=Math.round(q*lt);F.current[ot]={w:gt,h:q,pw:st,ph:_t,dpr:lt},H.current[ot]=!0});z.observe(xt),at.push(z)}let tt=null,U={},I={band:"",freq:0};const J=()=>{x.current++;for(const[W,lt]of Object.entries(k)){if(!lt||!H.current[W])continue;const{pw:gt,ph:q,dpr:st}=F.current[W];gt===0||q===0||(lt.width=gt,lt.height=q,Y[W].setTransform(st,0,0,st,0,0),H.current[W]=!1)}const ot=i.buffers.current,xt=i.writeIndex.current,z=i.samplesInBuffer.current,P=i.bufferSize;if(Y.trace){const{w:W,h:lt}=F.current.trace;if(W>0&&lt>0){const gt=cM(Y.trace,W,lt,ot[t],z,xt,P,s,V);gt.rms!==void 0&&x.current%Hd===0&&(tt=gt)}}if(x.current%P_===0&&z>=Ko){const W=D.analyseRing(ot[t],xt,z);if(W){if(!_.current||_.current.length!==W.psd.length)_.current=new Float64Array(W.psd);else{const q=_.current,st=W.psd;for(let _t=0;_t<q.length;_t++)q[_t]=q[_t]*(1-F_)+st[_t]*F_}U=W.bandPowers;let lt="",gt=0;for(const q of ln)(W.bandPowers[q.name]||0)>gt&&(gt=W.bandPowers[q.name],lt=q.name);I={band:lt,freq:W.dominantFrequency}}}if(Y.spectrum&&_.current){const{w:W,h:lt}=F.current.spectrum;W>0&&lt>0&&uM(Y.spectrum,W,lt,_.current,D._frequencies,lM,U,A)}if(Y.band&&x.current%P_===0){const{w:W,h:lt}=F.current.band;W>0&&lt>0&&fM(Y.band,W,lt,U)}if(Y.hist&&x.current%Hd===0){const{w:W,h:lt}=F.current.hist;W>0&&lt>0&&dM(Y.hist,W,lt,ot[t],z,xt,P,s)}x.current%Hd===0&&(tt&&y(tt),U&&R(U),S(W=>W.band===I.band&&W.freq===I.freq?W:I)),h.current=requestAnimationFrame(J)};return h.current=requestAnimationFrame(J),()=>{cancelAnimationFrame(h.current),at.forEach(ot=>ot.disconnect())}},[t,i,s,V,D,A]);const E=ln.find(k=>k.name===g.band),O=(E==null?void 0:E.color)||"#8b949e",et=ln.reduce((k,Y)=>k+(M[Y.name]||0),0);return w.jsx("div",{className:"detail-overlay",onClick:l,children:w.jsxs("div",{className:"detail-panel",onClick:k=>k.stopPropagation(),children:[w.jsxs("div",{className:"detail-header",children:[w.jsxs("div",{className:"detail-title-group",children:[w.jsxs("span",{className:"detail-ch-badge",style:{borderColor:V,color:V},children:["Ch ",t+1]}),w.jsx("span",{className:"detail-title",children:"Channel Analysis"}),w.jsx("span",{className:"detail-subtitle",children:"Real-time single-channel deep inspection"})]}),w.jsxs("div",{className:"detail-header-stats",children:[g.band&&w.jsxs("span",{className:"detail-dominant",style:{color:O},children:[w.jsx("span",{className:"detail-dominant-label",children:"Dominant"}),w.jsx("span",{className:"detail-dominant-band",children:(E==null?void 0:E.label)||g.band}),w.jsxs("span",{className:"detail-dominant-freq",children:[g.freq.toFixed(1)," Hz"]})]}),v&&w.jsxs("span",{className:"detail-rms-badge",children:["RMS ",(G=v.rms)==null?void 0:G.toFixed(1)," µV"]})]}),w.jsx("button",{className:"detail-close",onClick:l,children:w.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:w.jsx("path",{d:"M4 4L14 14M14 4L4 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]}),w.jsxs("div",{className:"detail-body",children:[w.jsxs("div",{className:"detail-trace-section",children:[w.jsxs("div",{className:"detail-section-head",children:[w.jsx("span",{className:"detail-section-title",children:"Time Domain"}),w.jsxs("span",{className:"detail-section-meta",children:[Qe," Hz · ±",s," µV"]})]}),w.jsx("div",{className:"detail-trace-canvas-wrap",children:w.jsx("canvas",{ref:c,style:{display:"block",width:"100%",height:"100%"}})})]}),w.jsxs("div",{className:"detail-analysis",children:[w.jsxs("div",{className:"detail-card",children:[w.jsxs("div",{className:"detail-card-head",children:[w.jsx("span",{className:"detail-card-title",children:"Power Spectrum"}),w.jsxs("span",{className:"detail-card-meta",children:[Ko,"pt FFT · ",(Qe/Ko).toFixed(1)," Hz/bin"]})]}),w.jsx("div",{className:"detail-card-canvas",children:w.jsx("canvas",{ref:f,style:{display:"block",width:"100%",height:"100%"}})})]}),w.jsxs("div",{className:"detail-card",children:[w.jsxs("div",{className:"detail-card-head",children:[w.jsx("span",{className:"detail-card-title",children:"Band Power Distribution"}),w.jsx("span",{className:"detail-card-meta",children:et>0?`${et.toFixed(2)} µV²/Hz total`:"—"})]}),w.jsx("div",{className:"detail-card-canvas detail-card-canvas-sm",children:w.jsx("canvas",{ref:p,style:{display:"block",width:"100%",height:"100%"}})}),w.jsx("div",{className:"detail-band-legend",children:ln.map(k=>w.jsxs("button",{className:`detail-band-btn${A===k.name?" active":""}`,style:{"--band-color":k.color},onClick:()=>C(Y=>Y===k.name?null:k.name),children:[w.jsx("span",{className:"detail-band-dot"}),k.label.split(" ")[0]]},k.name))})]}),w.jsxs("div",{className:"detail-bottom-row",children:[w.jsxs("div",{className:"detail-card detail-card-half",children:[w.jsx("div",{className:"detail-card-head",children:w.jsx("span",{className:"detail-card-title",children:"Amplitude Distribution"})}),w.jsx("div",{className:"detail-card-canvas detail-card-canvas-sm",children:w.jsx("canvas",{ref:m,style:{display:"block",width:"100%",height:"100%"}})})]}),w.jsxs("div",{className:"detail-card detail-card-half detail-stats-card",children:[w.jsx("div",{className:"detail-card-head",children:w.jsx("span",{className:"detail-card-title",children:"Signal Metrics"})}),w.jsxs("div",{className:"detail-stats-grid",children:[w.jsx(Ns,{label:"RMS",value:v==null?void 0:v.rms,unit:"µV",precision:2}),w.jsx(Ns,{label:"Peak-Peak",value:v==null?void 0:v.pp,unit:"µV",precision:1}),w.jsx(Ns,{label:"Mean",value:v==null?void 0:v.mean,unit:"µV",precision:2}),w.jsx(Ns,{label:"Min",value:v==null?void 0:v.min,unit:"µV",precision:1}),w.jsx(Ns,{label:"Max",value:v==null?void 0:v.max,unit:"µV",precision:1}),w.jsx(Ns,{label:"Zero-X",value:v==null?void 0:v.zeroCross,unit:"/2s",precision:0}),w.jsx(Ns,{label:"Live",value:v==null?void 0:v.latestVal,unit:"µV",precision:1,highlight:!0})]})]})]})]})]}),w.jsxs("div",{className:"detail-footer",children:[w.jsxs("span",{children:[Ko,"-pt Hanning · Cooley-Tukey radix-2"]}),w.jsxs("span",{className:"detail-footer-keys",children:[w.jsx("kbd",{children:"Esc"})," Close"]}),w.jsx("span",{children:"Not a medical device"})]})]})})});function Ns({label:r,value:t,unit:i,precision:s=2,highlight:l}){const c=t!=null?s===0?String(Math.round(t)):t.toFixed(s):"—";return w.jsxs("div",{className:`detail-stat-row${l?" highlight":""}`,children:[w.jsx("span",{className:"detail-stat-label",children:r}),w.jsx("span",{className:"detail-stat-value",children:c}),w.jsx("span",{className:"detail-stat-unit",children:i})]})}const Qo=256,pM=60,mM=12,I_=.3,gM=350;function _M(r,t,i,s,l,c,f,p){const h=t-16,x=24,_=i-24,v=h-48,y=_-x,M=l[1],R=Math.min(Math.ceil(c/M),s.length-1);let g=1e-30;for(let S=1;S<=R;S++)s[S]>g&&(g=s[S]);for(const S of ln){if(S.low>=c)continue;const A=48+Math.max(S.low,0)/c*v,C=48+Math.min(S.high,c)/c*v,D=p===S.name;r.fillStyle=S.color+(D?"28":"12"),r.fillRect(A,x,C-A,y),r.fillStyle=S.color+(D?"cc":"66"),r.font="9px monospace",r.textAlign="center",r.fillText(S.name,(A+C)/2,x+10)}r.strokeStyle="rgba(48,54,61,0.45)",r.lineWidth=.5;for(let S=1;S<5;S++){const A=x+S/5*y;r.beginPath(),r.moveTo(48,A),r.lineTo(h,A),r.stroke()}for(const S of[4,8,13,30,50]){if(S>c)continue;const A=48+S/c*v;r.beginPath(),r.moveTo(A,x),r.lineTo(A,_),r.stroke()}r.beginPath();for(let S=1;S<=R;S++){const A=48+l[S]/c*v;let C;if(f){const V=10*Math.log10((s[S]||1e-30)/g);C=Math.max(0,(V+60)/60)}else C=s[S]/g;const D=_-Math.min(1,C)*y;S===1?r.moveTo(A,D):r.lineTo(A,D)}r.strokeStyle="#58a6ff",r.lineWidth=1.5,r.stroke(),r.lineTo(48+l[R]/c*v,_),r.lineTo(48+l[1]/c*v,_),r.closePath(),r.fillStyle="rgba(88,166,255,0.07)",r.fill(),r.fillStyle="#8b949e",r.font="10px monospace",r.textAlign="center";for(let S=0;S<=c;S+=10)r.fillText(`${S}`,48+S/c*v,_+14);if(r.fillText("Hz",h+2,_+14),r.save(),r.translate(11,x+y/2),r.rotate(-Math.PI/2),r.textAlign="center",r.fillText(f?"dB":"µV²/Hz",0,0),r.restore(),r.textAlign="right",r.font="9px monospace",f)for(const S of[0,-20,-40,-60]){const A=_-(S+60)/60*y;r.fillText(`${S}`,44,A+3)}}const vM=Z.memo(function({eegData:t}){var k;const i=Z.useRef(null),s=Z.useRef(0),l=Z.useRef(0),c=Z.useRef(null),f=Z.useRef(0),p=Z.useRef(null),m=Z.useRef({}),h=Z.useRef(window.devicePixelRatio||1),x=Z.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),_=Z.useRef(!0),[v,y]=Z.useState(-1),[M,R]=Z.useState(!0),[g,S]=Z.useState(!1),[A,C]=Z.useState(null),[D,V]=Z.useState({}),[F,H]=Z.useState({band:"",freq:0}),E=Z.useMemo(()=>new ks(Qo,Qe),[]);p.current||(p.current=new Float64Array(Qo)),Z.useEffect(()=>{const Y=i.current;if(!Y)return;const at=Y.getContext("2d",{alpha:!1}),tt=new ResizeObserver(I=>{const J=I[0];if(!J)return;const ot=window.devicePixelRatio||1;h.current=ot;const{width:xt,height:z}=J.contentRect;x.current={w:xt,h:z,pw:Math.round(xt*ot),ph:Math.round(z*ot),dpr:ot},_.current=!0});tt.observe(Y);const U=()=>{const{w:I,h:J,pw:ot,ph:xt}=x.current;if(I===0||J===0){s.current=requestAnimationFrame(U);return}if(_.current&&(_.current=!1,Y.width=ot,Y.height=xt),at.setTransform(h.current,0,0,h.current,0,0),at.fillStyle="#0d1117",at.fillRect(0,0,I,J),l.current++,!g&&l.current%mM===0){const P=t.buffers.current,W=t.writeIndex.current,lt=t.samplesInBuffer.current;if(P&&lt>=Qo){let gt;if(v===-1){const q=p.current,st=t.bufferSize,_t=(W-Qo+st)%st;for(let Q=0;Q<Qo;Q++){let At=0;const Dt=(_t+Q)%st;for(let Bt=0;Bt<Be;Bt++)At+=P[Bt][Dt];q[Q]=At/Be}gt=E.analyse(q,0)}else gt=E.analyseRing(P[v],W,lt);if(gt){if(!c.current||c.current.length!==gt.psd.length)c.current=new Float64Array(gt.psd);else{const st=c.current,_t=gt.psd;for(let Q=0;Q<st.length;Q++)st[Q]=st[Q]*(1-I_)+_t[Q]*I_}const q=performance.now();if(q-f.current>gM){f.current=q,m.current=gt.bandPowers,V(gt.bandPowers);let st="",_t=0;for(const Q of ln)(gt.bandPowers[Q.name]||0)>_t&&(_t=gt.bandPowers[Q.name],st=Q.name);H(Q=>Q.band===st&&Q.freq===gt.dominantFrequency?Q:{band:st,freq:gt.dominantFrequency})}}}}const z=c.current;!z||z.length===0?(at.fillStyle="#4b5563",at.font="13px monospace",at.textAlign="center",at.fillText("Collecting samples…",I/2,J/2)):_M(at,I,J,z,E._frequencies,pM,M,A),s.current=requestAnimationFrame(U)};return s.current=requestAnimationFrame(U),()=>{cancelAnimationFrame(s.current),tt.disconnect()}},[t,v,M,g,A,E]);const O=Math.max(...ln.map(Y=>D[Y.name]||0),1e-6),et=v===-1?"Avg":`Ch ${v+1}`,G=((k=ln.find(Y=>Y.name===F.band))==null?void 0:k.color)||"#8b949e";return w.jsxs("div",{className:"spectral-panel",children:[w.jsxs("div",{className:"spectral-toolbar",children:[w.jsxs("span",{className:"spectral-title",children:["Spectral"," ",w.jsx("small",{style:{color:"var(--text-dim)",fontWeight:400},children:et})]}),w.jsxs("div",{className:"spectral-channels",children:[w.jsx("button",{className:`sp-ch${v===-1?" active":""}`,onClick:()=>y(-1),children:"Avg"}),Array.from({length:Be},(Y,at)=>w.jsx("button",{className:`sp-ch${v===at?" active":""}`,onClick:()=>y(at),children:at+1},at))]}),w.jsxs("span",{className:"sp-dominant",children:[w.jsx("strong",{style:{color:G},children:F.band||"—"})," ",F.freq>0&&w.jsxs("small",{children:[F.freq.toFixed(1)," Hz"]})]}),w.jsxs("div",{className:"spectral-ctrls",children:[w.jsx("button",{className:`btn${M?" active":""}`,onClick:()=>R(Y=>!Y),children:M?"Log":"Lin"}),w.jsx("button",{className:`btn${g?" active":""}`,onClick:()=>S(Y=>!Y),children:g?"▶":"⏸"})]})]}),w.jsxs("div",{className:"spectral-canvas-wrap",children:[w.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}}),g&&w.jsx("div",{className:"spectral-paused",children:"PAUSED"})]}),w.jsx("div",{className:"spectral-bands",children:ln.map(Y=>{const at=D[Y.name]||0,tt=O>0?at/O*100:0,U=A===Y.name;return w.jsxs("div",{className:`sp-band${U?" selected":""}`,onClick:()=>C(U?null:Y.name),children:[w.jsx("span",{className:"sp-band-dot",style:{background:Y.color}}),w.jsx("span",{className:"sp-band-name",style:{color:Y.color},children:Y.label}),w.jsx("div",{className:"sp-band-track",children:w.jsx("div",{className:"sp-band-fill",style:{width:`${tt}%`,background:Y.color}})}),w.jsx("span",{className:"sp-band-val",children:at<.01?at.toExponential(1):at.toFixed(2)})]},Y.name)})})]})}),xM=Z.memo(function(){const[t,i]=Z.useState(!1),[s,l]=Z.useState(0),[c,f]=Z.useState(0),[p,m]=Z.useState(0),h=Z.useRef(0),x=Z.useRef(performance.now()),_=Z.useRef(0);return Z.useEffect(()=>{const v=y=>{(y.key==="p"||y.key==="P")&&i(M=>!M)};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[]),Z.useEffect(()=>{if(!t)return;const v=()=>{h.current++;const y=performance.now(),M=y-x.current;if(M>=1e3){l(Math.round(h.current*(1e3/M))),f(Math.round(M/h.current*100)/100);const R=performance.memory;R&&m(Math.round(R.usedJSHeapSize/1048576)),h.current=0,x.current=y}_.current=requestAnimationFrame(v)};return _.current=requestAnimationFrame(v),()=>cancelAnimationFrame(_.current)},[t]),t?w.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.8)",color:"#0f0",fontFamily:"monospace",fontSize:"12px",padding:"8px 12px",borderRadius:"4px",zIndex:1e4,border:"1px solid #0f0",userSelect:"none"},children:[w.jsxs("div",{children:["FPS: ",s]}),w.jsxs("div",{children:["Frame: ",c,"ms"]}),w.jsxs("div",{children:["Memory: ",p,"MB"]}),w.jsx("div",{style:{marginTop:"4px",fontSize:"10px",opacity:.7},children:"Press P to toggle"})]}):null});function SM({onSelect:r,onBack:t}){const[i,s]=Z.useState([]),[l,c]=Z.useState(!0);Z.useEffect(()=>{f()},[]);async function f(){try{const x=await(await fetch("/api/recordings")).json();s(x.recordings||[])}catch(h){console.error("Failed to load recordings:",h)}finally{c(!1)}}function p(h){return new Date(h*1e3).toLocaleString()}function m(h){return h<1024?`${h} B`:h<1024*1024?`${(h/1024).toFixed(1)} KB`:`${(h/1024/1024).toFixed(1)} MB`}return w.jsxs("div",{className:"session-list",children:[w.jsxs("header",{className:"session-header",children:[w.jsx("h2",{children:"Saved Sessions"}),w.jsx("button",{className:"btn btn-back",onClick:t,children:"← Back to Live"})]}),l&&w.jsx("div",{className:"list-loading",children:w.jsx("p",{children:"Loading recordings..."})}),!l&&i.length===0&&w.jsx("div",{className:"list-empty",children:w.jsx("p",{children:"No recordings yet. Record a session on the Live tab."})}),!l&&i.length>0&&w.jsx("div",{className:"list-container",children:w.jsxs("table",{className:"recordings-table",children:[w.jsx("thead",{children:w.jsxs("tr",{children:[w.jsx("th",{children:"Filename"}),w.jsx("th",{children:"Size"}),w.jsx("th",{children:"Date & Time"}),w.jsx("th",{children:"Action"})]})}),w.jsx("tbody",{children:i.map(h=>w.jsxs("tr",{children:[w.jsx("td",{className:"filename",children:h.filename}),w.jsx("td",{className:"size",children:m(h.size)}),w.jsx("td",{className:"mtime",children:p(h.mtime)}),w.jsx("td",{className:"action",children:w.jsx("button",{className:"btn btn-open",onClick:()=>r(h.filename),children:"Open"})})]},h.filename))})]})}),w.jsx("style",{children:`
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
      `})]})}const yM="rgba(48,54,61,0.4)",MM="rgba(88,166,255,0.12)",bM="rgba(88,166,255,0.6)",EM="#0d1117",TM=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],AM=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"}];function RM({filename:r,onBack:t}){const[i,s]=Z.useState(!0),[l,c]=Z.useState(null),[f,p]=Z.useState(!1),[m,h]=Z.useState(0),[x,_]=Z.useState(1),[v,y]=Z.useState(100),[M,R]=Z.useState(4),[g,S]=Z.useState([]),[A,C]=Z.useState(""),[D,V]=Z.useState(!1),F=Z.useRef(null),H=Z.useRef(0),E=Z.useRef(0),O=Z.useRef(null),et=Z.useRef(0),G=Z.useRef(0),k=Z.useRef(!1),Y=Z.useRef(1),at=Z.useRef(100),tt=Z.useRef(4),U=Z.useRef(window.devicePixelRatio||1),I=Z.useRef({w:0,h:0});k.current=f,Y.current=x,at.current=v,tt.current=M,E.current=m;const J=H.current,ot=J/Qe,xt=m/Qe;Z.useEffect(()=>{let Q=!1;async function At(){s(!0),c(null);try{const Dt=await fetch(`/api/recordings/data/${encodeURIComponent(r)}`);if(!Dt.ok)throw new Error(`HTTP ${Dt.status}`);const Bt=await Dt.json();if(Bt.error)throw new Error(Bt.error);const Lt=(Bt.data||[]).slice(1),Xt=Lt.length;if(Xt===0)throw new Error("Empty recording");const Wt=Array.from({length:Be},()=>new Float32Array(Xt));for(let se=0;se<Xt;se++){const j=Lt[se].split(",");for(let ue=0;ue<Be;ue++)Wt[ue][se]=parseFloat(j[ue+1])||0}Q||(F.current=Wt,H.current=Xt,h(0),s(!1))}catch(Dt){Q||(c(Dt instanceof Error?Dt.message:String(Dt)),s(!1))}}return At(),()=>{Q=!0}},[r]),Z.useEffect(()=>{fetch(`/api/recordings/annotations/${encodeURIComponent(r)}`).then(Q=>Q.json()).then(Q=>S(Q.annotations||[])).catch(()=>{})},[r]),Z.useEffect(()=>{const Q=O.current;if(!Q||i||l)return;const At=Q.getContext("2d",{alpha:!1}),Dt=Bt=>{if(k.current&&G.current>0){const oe=(Bt-G.current)/1e3*Qe*Y.current;let le=E.current+oe;le>=H.current&&(le=H.current-1,p(!1)),E.current=le,h(le)}G.current=Bt;const Pt=U.current,Lt=Q.getBoundingClientRect(),Xt=Lt.width,Wt=Lt.height,se=Math.round(Xt*Pt),j=Math.round(Wt*Pt);(I.current.w!==se||I.current.h!==j)&&(I.current={w:se,h:j},Q.width=se,Q.height=j,At.setTransform(Pt,0,0,Pt,0,0)),z(At,Xt,Wt),et.current=requestAnimationFrame(Dt)};return G.current=0,et.current=requestAnimationFrame(Dt),()=>cancelAnimationFrame(et.current)},[i,l]);function z(Q,At,Dt){const Bt=F.current;if(!Bt)return;Q.fillStyle=EM,Q.fillRect(0,0,At,Dt);const Pt=H.current,Lt=E.current,Xt=tt.current*Qe,Wt=at.current,se=Math.floor(Xt/2);let j=Math.floor(Lt)-se,ue=j+Xt;j<0&&(j=0,ue=Xt),ue>Pt&&(ue=Pt,j=Math.max(0,Pt-Xt));const oe=Dt/Be;for(let K=0;K<Be;K++){const yt=K*oe,Et=yt+oe/2,mt=oe/2;K>0&&(Q.strokeStyle=yM,Q.lineWidth=.5,Q.beginPath(),Q.moveTo(0,yt),Q.lineTo(At,yt),Q.stroke()),Q.strokeStyle=MM,Q.lineWidth=.5,Q.beginPath(),Q.moveTo(0,Et),Q.lineTo(At,Et),Q.stroke(),Q.fillStyle="rgba(230,237,243,0.4)",Q.font="10px monospace",Q.fillText(`Ch ${K+1}`,4,yt+12);const Vt=Bt[K],Ut=ue-j;if(Ut<2)continue;const qt=Ut>2e3?Math.floor(Ut/2e3):1,ee=At/(Ut-1),wt=mt*.85/Wt;Q.strokeStyle=Tu[K],Q.lineWidth=1.2,Q.lineJoin="round",Q.beginPath();for(let Ct=0;Ct<Ut;Ct+=qt){const kt=Ct*ee,zt=Et-Vt[j+Ct]*wt;Ct===0?Q.moveTo(kt,zt):Q.lineTo(kt,zt)}Q.stroke()}const le=Math.floor(Lt)>=j&&Math.floor(Lt)<=ue?(Math.floor(Lt)-j)/(ue-j)*At:At/2;Q.strokeStyle=bM,Q.lineWidth=1.5,Q.setLineDash([4,3]),Q.beginPath(),Q.moveTo(le,0),Q.lineTo(le,Dt),Q.stroke(),Q.setLineDash([]),Q.fillStyle="rgba(230,237,243,0.3)",Q.font="10px monospace";const Gt=j/Qe,B=ue/Qe,T=Math.min(10,Math.floor(At/80));for(let K=0;K<=T;K++){const yt=Gt+(B-Gt)*(K/T),Et=K/T*At;Q.fillText(_t(yt),Et+2,Dt-4)}}const P=Z.useCallback(async Q=>{try{await fetch(`/api/recordings/annotations/${encodeURIComponent(r)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({annotations:Q})})}catch{}},[r]);function W(){if(!A.trim())return;const Q=Math.floor(m)/Qe,At={id:Date.now(),frame:Math.floor(m),time:Q,text:A,timestamp:new Date().toISOString()},Dt=[...g,At];S(Dt),P(Dt),C(""),V(!1)}function lt(Q){const At=g.filter(Dt=>Dt.id!==Q);S(At),P(At)}function gt(Q){h(Q.frame),E.current=Q.frame,p(!1)}function q(){const Q=F.current;if(!Q)return;const At=H.current,Dt=new Map;for(const se of g)Dt.set(se.frame,se.text);const Pt=[["frame","time_s",...Array.from({length:Be},(se,j)=>`ch${j+1}`),"annotation"].join(",")];for(let se=0;se<At;se++){const j=(se/Qe).toFixed(6),ue=Array.from({length:Be},(Gt,B)=>Q[B][se].toFixed(4)),oe=Dt.get(se)||"",le=oe?`"${oe.replace(/"/g,'""')}"`:"";Pt.push([se,j,...ue,le].join(","))}const Lt=new Blob([Pt.join(`
`)],{type:"text/csv"}),Xt=URL.createObjectURL(Lt),Wt=document.createElement("a");Wt.href=Xt,Wt.download=r.replace(".csv","_annotated.csv"),Wt.click(),URL.revokeObjectURL(Xt)}function st(){if(!F.current)return;const At=H.current,Dt={filename:r,sampleRate:Qe,channels:Be,totalFrames:At,duration:At/Qe,annotations:g.map(Xt=>({frame:Xt.frame,time:Xt.time,text:Xt.text,timestamp:Xt.timestamp}))},Bt=new Blob([JSON.stringify(Dt,null,2)],{type:"application/json"}),Pt=URL.createObjectURL(Bt),Lt=document.createElement("a");Lt.href=Pt,Lt.download=r.replace(".csv","_session.json"),Lt.click(),URL.revokeObjectURL(Pt)}function _t(Q){const At=Math.floor(Q/60),Dt=Math.floor(Q%60),Bt=Math.floor(Q%1*100);return`${String(At).padStart(2,"0")}:${String(Dt).padStart(2,"0")}.${String(Bt).padStart(2,"0")}`}return i?w.jsxs("div",{className:"sv-root sv-center",children:[w.jsx("p",{children:"Loading recording..."}),w.jsx("style",{children:Gd})]}):l?w.jsxs("div",{className:"sv-root sv-center",children:[w.jsxs("p",{children:["Error: ",l]}),w.jsx("button",{className:"sv-btn",onClick:t,children:"Back"}),w.jsx("style",{children:Gd})]}):w.jsxs("div",{className:"sv-root",children:[w.jsxs("header",{className:"sv-header",children:[w.jsxs("div",{className:"sv-title",children:[w.jsx("button",{className:"sv-btn",onClick:t,children:"← Back"}),w.jsx("h2",{children:r}),w.jsxs("span",{className:"sv-meta",children:[J.toLocaleString()," frames · ",_t(ot)]})]}),w.jsxs("div",{className:"sv-controls",children:[w.jsx("button",{className:`sv-btn${f?" active":""}`,onClick:()=>{f||(G.current=0),p(!f)},children:f?"⏸ Pause":"▶ Play"}),w.jsx("button",{className:"sv-btn",onClick:()=>{h(0),E.current=0,p(!1)},children:"⏮ Rewind"}),w.jsxs("select",{value:x,onChange:Q=>_(parseFloat(Q.target.value)),className:"sv-select",children:[w.jsx("option",{value:.25,children:"0.25x"}),w.jsx("option",{value:.5,children:"0.5x"}),w.jsx("option",{value:1,children:"1x"}),w.jsx("option",{value:1.5,children:"1.5x"}),w.jsx("option",{value:2,children:"2x"}),w.jsx("option",{value:4,children:"4x"})]}),w.jsx("div",{className:"sv-sep"}),w.jsx("label",{className:"sv-label",children:"Window"}),w.jsx("select",{value:M,onChange:Q=>R(parseInt(Q.target.value)),className:"sv-select",children:AM.map(Q=>w.jsx("option",{value:Q.value,children:Q.label},Q.value))}),w.jsx("label",{className:"sv-label",children:"Scale"}),w.jsx("select",{value:v,onChange:Q=>y(parseInt(Q.target.value)),className:"sv-select",children:TM.map(Q=>w.jsx("option",{value:Q.value,children:Q.label},Q.value))}),w.jsx("div",{className:"sv-sep"}),w.jsx("button",{className:"sv-btn sv-btn-export",onClick:q,title:"Export CSV with annotations column",children:"⬇ CSV"}),w.jsx("button",{className:"sv-btn sv-btn-export",onClick:st,title:"Export session metadata + annotations as JSON",children:"⬇ JSON"})]})]}),w.jsxs("div",{className:"sv-timeline",children:[w.jsx("span",{className:"sv-time",children:_t(xt)}),w.jsx("input",{type:"range",min:"0",max:J-1,value:Math.floor(m),onChange:Q=>{const At=parseInt(Q.target.value);h(At),E.current=At,p(!1),G.current=0},className:"sv-slider"}),w.jsx("span",{className:"sv-time",children:_t(ot)})]}),w.jsxs("div",{className:"sv-content",children:[w.jsx("div",{className:"sv-canvas-wrap",children:w.jsx("canvas",{ref:O,style:{display:"block",width:"100%",height:"100%"}})}),w.jsxs("div",{className:"sv-annotations",children:[w.jsxs("div",{className:"sv-anno-header",children:[w.jsx("h3",{children:"Annotations"}),w.jsx("button",{className:"sv-btn sv-btn-sm",onClick:()=>V(!D),children:D?"Cancel":"+ Add"})]}),D&&w.jsxs("div",{className:"sv-anno-form",children:[w.jsx("textarea",{value:A,onChange:Q=>C(Q.target.value),placeholder:"Annotation at current position...",onKeyDown:Q=>{Q.key==="Enter"&&Q.ctrlKey&&W()}}),w.jsx("button",{className:"sv-btn sv-btn-primary",onClick:W,children:"Add"})]}),w.jsx("div",{className:"sv-anno-list",children:g.length===0?w.jsx("p",{className:"sv-anno-empty",children:"No annotations"}):g.map(Q=>w.jsxs("div",{className:"sv-anno-item",onClick:()=>gt(Q),children:[w.jsx("span",{className:"sv-anno-time",children:_t(Q.time)}),w.jsx("span",{className:"sv-anno-text",children:Q.text}),w.jsx("button",{className:"sv-anno-del",onClick:At=>{At.stopPropagation(),lt(Q.id)},children:"✕"})]},Q.id))})]})]}),w.jsx("style",{children:Gd})]})}const Gd=`
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
 */const Tp="183",wM=0,B_=1,CM=2,cu=1,DM=2,ul=3,ds=0,Kn=1,ji=2,Ea=0,Yr=1,z_=2,H_=3,G_=4,NM=5,zs=100,UM=101,LM=102,OM=103,PM=104,FM=200,IM=201,BM=202,zM=203,wh=204,Ch=205,HM=206,GM=207,VM=208,kM=209,jM=210,XM=211,WM=212,qM=213,YM=214,Dh=0,Nh=1,Uh=2,Kr=3,Lh=4,Oh=5,Ph=6,Fh=7,Qv=0,ZM=1,KM=2,Yi=0,Jv=1,$v=2,tx=3,Ap=4,ex=5,nx=6,ix=7,ax=300,js=301,Qr=302,Vd=303,kd=304,Au=306,Ih=1e3,ba=1001,Bh=1002,wn=1003,QM=1004,Lc=1005,On=1006,jd=1007,Gs=1008,ci=1009,sx=1010,rx=1011,dl=1012,Rp=1013,Ki=1014,Wi=1015,Aa=1016,wp=1017,Cp=1018,hl=1020,ox=35902,lx=35899,cx=1021,ux=1022,Oi=1023,Ra=1026,Vs=1027,fx=1028,Dp=1029,Jr=1030,Np=1031,Up=1033,uu=33776,fu=33777,du=33778,hu=33779,zh=35840,Hh=35841,Gh=35842,Vh=35843,kh=36196,jh=37492,Xh=37496,Wh=37488,qh=37489,Yh=37490,Zh=37491,Kh=37808,Qh=37809,Jh=37810,$h=37811,tp=37812,ep=37813,np=37814,ip=37815,ap=37816,sp=37817,rp=37818,op=37819,lp=37820,cp=37821,up=36492,fp=36494,dp=36495,hp=36283,pp=36284,mp=36285,gp=36286,JM=3200,$M=0,tb=1,cs="",Si="srgb",$r="srgb-linear",mu="linear",ke="srgb",wr=7680,V_=519,eb=512,nb=513,ib=514,Lp=515,ab=516,sb=517,Op=518,rb=519,_p=35044,k_="300 es",qi=2e3,pl=2001;function ob(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function gu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function lb(){const r=gu("canvas");return r.style.display="block",r}const j_={};function _u(...r){const t="THREE."+r.shift();console.log(t,...r)}function dx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function de(...r){r=dx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ue(...r){r=dx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function vu(...r){const t=r.join(" ");t in j_||(j_[t]=!0,de(...r))}function cb(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const ub={[Dh]:Nh,[Uh]:Ph,[Lh]:Fh,[Kr]:Oh,[Nh]:Dh,[Ph]:Uh,[Fh]:Lh,[Oh]:Kr};class eo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xd=Math.PI/180,vp=180/Math.PI;function fs(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function De(r,t,i){return Math.max(t,Math.min(i,r))}function fb(r,t){return(r%t+t)%t}function Wd(r,t,i){return(1-i)*r+i*t}function Xi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function qe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(t=0,i=0){Ae.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class no{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,p){let m=s[l+0],h=s[l+1],x=s[l+2],_=s[l+3],v=c[f+0],y=c[f+1],M=c[f+2],R=c[f+3];if(_!==R||m!==v||h!==y||x!==M){let g=m*v+h*y+x*M+_*R;g<0&&(v=-v,y=-y,M=-M,R=-R,g=-g);let S=1-p;if(g<.9995){const A=Math.acos(g),C=Math.sin(A);S=Math.sin(S*A)/C,p=Math.sin(p*A)/C,m=m*S+v*p,h=h*S+y*p,x=x*S+M*p,_=_*S+R*p}else{m=m*S+v*p,h=h*S+y*p,x=x*S+M*p,_=_*S+R*p;const A=1/Math.sqrt(m*m+h*h+x*x+_*_);m*=A,h*=A,x*=A,_*=A}}t[i]=m,t[i+1]=h,t[i+2]=x,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const p=s[l],m=s[l+1],h=s[l+2],x=s[l+3],_=c[f],v=c[f+1],y=c[f+2],M=c[f+3];return t[i]=p*M+x*_+m*y-h*v,t[i+1]=m*M+x*v+h*_-p*y,t[i+2]=h*M+x*y+p*v-m*_,t[i+3]=x*M-p*_-m*v-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,p=Math.cos,m=Math.sin,h=p(s/2),x=p(l/2),_=p(c/2),v=m(s/2),y=m(l/2),M=m(c/2);switch(f){case"XYZ":this._x=v*x*_+h*y*M,this._y=h*y*_-v*x*M,this._z=h*x*M+v*y*_,this._w=h*x*_-v*y*M;break;case"YXZ":this._x=v*x*_+h*y*M,this._y=h*y*_-v*x*M,this._z=h*x*M-v*y*_,this._w=h*x*_+v*y*M;break;case"ZXY":this._x=v*x*_-h*y*M,this._y=h*y*_+v*x*M,this._z=h*x*M+v*y*_,this._w=h*x*_-v*y*M;break;case"ZYX":this._x=v*x*_-h*y*M,this._y=h*y*_+v*x*M,this._z=h*x*M-v*y*_,this._w=h*x*_+v*y*M;break;case"YZX":this._x=v*x*_+h*y*M,this._y=h*y*_+v*x*M,this._z=h*x*M-v*y*_,this._w=h*x*_-v*y*M;break;case"XZY":this._x=v*x*_-h*y*M,this._y=h*y*_-v*x*M,this._z=h*x*M+v*y*_,this._w=h*x*_+v*y*M;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],x=i[6],_=i[10],v=s+p+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(x-m)*y,this._y=(c-h)*y,this._z=(f-l)*y}else if(s>p&&s>_){const y=2*Math.sqrt(1+s-p-_);this._w=(x-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+h)/y}else if(p>_){const y=2*Math.sqrt(1+p-s-_);this._w=(c-h)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+_-s-p);this._w=(f-l)/y,this._x=(c+h)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=s*x+f*p+l*h-c*m,this._y=l*x+f*m+c*p-s*h,this._z=c*x+f*h+s*m-l*p,this._w=f*x-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ut{constructor(t=0,i=0,s=0){ut.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(X_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(X_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,p=t.z,m=t.w,h=2*(f*l-p*s),x=2*(p*i-c*l),_=2*(c*s-f*i);return this.x=i+m*h+f*_-p*x,this.y=s+m*x+p*h-c*_,this.z=l+m*_+c*x-f*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return qd.copy(this).projectOnVector(t),this.sub(qd)}reflect(t){return this.sub(qd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qd=new ut,X_=new no;class ye{constructor(t,i,s,l,c,f,p,m,h){ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,h)}set(t,i,s,l,c,f,p,m,h){const x=this.elements;return x[0]=t,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=f,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],h=s[1],x=s[4],_=s[7],v=s[2],y=s[5],M=s[8],R=l[0],g=l[3],S=l[6],A=l[1],C=l[4],D=l[7],V=l[2],F=l[5],H=l[8];return c[0]=f*R+p*A+m*V,c[3]=f*g+p*C+m*F,c[6]=f*S+p*D+m*H,c[1]=h*R+x*A+_*V,c[4]=h*g+x*C+_*F,c[7]=h*S+x*D+_*H,c[2]=v*R+y*A+M*V,c[5]=v*g+y*C+M*F,c[8]=v*S+y*D+M*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],h=t[7],x=t[8];return i*f*x-i*p*h-s*c*x+s*p*m+l*c*h-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],h=t[7],x=t[8],_=x*f-p*h,v=p*m-x*c,y=h*c-f*m,M=i*_+s*v+l*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/M;return t[0]=_*R,t[1]=(l*h-x*s)*R,t[2]=(p*s-l*f)*R,t[3]=v*R,t[4]=(x*i-l*m)*R,t[5]=(l*c-p*i)*R,t[6]=y*R,t[7]=(s*m-h*i)*R,t[8]=(f*i-s*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*f+h*p)+f+t,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Yd.makeScale(t,i)),this}rotate(t){return this.premultiply(Yd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Yd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yd=new ye,W_=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),q_=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function db(){const r={enabled:!0,workingColorSpace:$r,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ke&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ke&&(l.r=Zr(l.r),l.g=Zr(l.g),l.b=Zr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===cs?mu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return vu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return vu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[$r]:{primaries:t,whitePoint:s,transfer:mu,toXYZ:W_,fromXYZ:q_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:s,transfer:ke,toXYZ:W_,fromXYZ:q_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const Le=db();function Ta(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Cr;class hb{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Cr===void 0&&(Cr=gu("canvas")),Cr.width=t.width,Cr.height=t.height;const l=Cr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Cr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=gu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ta(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ta(i[s]/255)*255):i[s]=Ta(i[s]);return{data:i,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pb=0;class Pp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Zd(l[f].image)):c.push(Zd(l[f]))}else c=Zd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Zd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}let mb=0;const Kd=new ut;class Pn extends eo{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=ba,l=ba,c=On,f=Gs,p=Oi,m=ci,h=Pn.DEFAULT_ANISOTROPY,x=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=fs(),this.name="",this.source=new Pp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kd).x}get height(){return this.source.getSize(Kd).y}get depth(){return this.source.getSize(Kd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){de(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){de(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ax)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ih:t.x=t.x-Math.floor(t.x);break;case ba:t.x=t.x<0?0:1;break;case Bh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ih:t.y=t.y-Math.floor(t.y);break;case ba:t.y=t.y<0?0:1;break;case Bh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=ax;Pn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,h=m[0],x=m[4],_=m[8],v=m[1],y=m[5],M=m[9],R=m[2],g=m[6],S=m[10];if(Math.abs(x-v)<.01&&Math.abs(_-R)<.01&&Math.abs(M-g)<.01){if(Math.abs(x+v)<.1&&Math.abs(_+R)<.1&&Math.abs(M+g)<.1&&Math.abs(h+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(h+1)/2,D=(y+1)/2,V=(S+1)/2,F=(x+v)/4,H=(_+R)/4,E=(M+g)/4;return C>D&&C>V?C<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(C),l=F/s,c=H/s):D>V?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=F/l,c=E/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=H/c,l=E/c),this.set(s,l,c,i),this}let A=Math.sqrt((g-M)*(g-M)+(_-R)*(_-R)+(v-x)*(v-x));return Math.abs(A)<.001&&(A=1),this.x=(g-M)/A,this.y=(_-R)/A,this.z=(v-x)/A,this.w=Math.acos((h+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this.w=De(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this.w=De(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gb extends eo{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Pn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Pp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends gb{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class hx extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _b extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Je{constructor(t,i,s,l,c,f,p,m,h,x,_,v,y,M,R,g){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,h,x,_,v,y,M,R,g)}set(t,i,s,l,c,f,p,m,h,x,_,v,y,M,R,g){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=p,S[13]=m,S[2]=h,S[6]=x,S[10]=_,S[14]=v,S[3]=y,S[7]=M,S[11]=R,S[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Dr.setFromMatrixColumn(t,0).length(),c=1/Dr.setFromMatrixColumn(t,1).length(),f=1/Dr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),x=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*x,y=f*_,M=p*x,R=p*_;i[0]=m*x,i[4]=-m*_,i[8]=h,i[1]=y+M*h,i[5]=v-R*h,i[9]=-p*m,i[2]=R-v*h,i[6]=M+y*h,i[10]=f*m}else if(t.order==="YXZ"){const v=m*x,y=m*_,M=h*x,R=h*_;i[0]=v+R*p,i[4]=M*p-y,i[8]=f*h,i[1]=f*_,i[5]=f*x,i[9]=-p,i[2]=y*p-M,i[6]=R+v*p,i[10]=f*m}else if(t.order==="ZXY"){const v=m*x,y=m*_,M=h*x,R=h*_;i[0]=v-R*p,i[4]=-f*_,i[8]=M+y*p,i[1]=y+M*p,i[5]=f*x,i[9]=R-v*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(t.order==="ZYX"){const v=f*x,y=f*_,M=p*x,R=p*_;i[0]=m*x,i[4]=M*h-y,i[8]=v*h+R,i[1]=m*_,i[5]=R*h+v,i[9]=y*h-M,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(t.order==="YZX"){const v=f*m,y=f*h,M=p*m,R=p*h;i[0]=m*x,i[4]=R-v*_,i[8]=M*_+y,i[1]=_,i[5]=f*x,i[9]=-p*x,i[2]=-h*x,i[6]=y*_+M,i[10]=v-R*_}else if(t.order==="XZY"){const v=f*m,y=f*h,M=p*m,R=p*h;i[0]=m*x,i[4]=-_,i[8]=h*x,i[1]=v*_+R,i[5]=f*x,i[9]=y*_-M,i[2]=M*_-y,i[6]=p*x,i[10]=R*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vb,t,xb)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),es.crossVectors(s,ri),es.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),es.crossVectors(s,ri)),es.normalize(),Oc.crossVectors(ri,es),l[0]=es.x,l[4]=Oc.x,l[8]=ri.x,l[1]=es.y,l[5]=Oc.y,l[9]=ri.y,l[2]=es.z,l[6]=Oc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],h=s[12],x=s[1],_=s[5],v=s[9],y=s[13],M=s[2],R=s[6],g=s[10],S=s[14],A=s[3],C=s[7],D=s[11],V=s[15],F=l[0],H=l[4],E=l[8],O=l[12],et=l[1],G=l[5],k=l[9],Y=l[13],at=l[2],tt=l[6],U=l[10],I=l[14],J=l[3],ot=l[7],xt=l[11],z=l[15];return c[0]=f*F+p*et+m*at+h*J,c[4]=f*H+p*G+m*tt+h*ot,c[8]=f*E+p*k+m*U+h*xt,c[12]=f*O+p*Y+m*I+h*z,c[1]=x*F+_*et+v*at+y*J,c[5]=x*H+_*G+v*tt+y*ot,c[9]=x*E+_*k+v*U+y*xt,c[13]=x*O+_*Y+v*I+y*z,c[2]=M*F+R*et+g*at+S*J,c[6]=M*H+R*G+g*tt+S*ot,c[10]=M*E+R*k+g*U+S*xt,c[14]=M*O+R*Y+g*I+S*z,c[3]=A*F+C*et+D*at+V*J,c[7]=A*H+C*G+D*tt+V*ot,c[11]=A*E+C*k+D*U+V*xt,c[15]=A*O+C*Y+D*I+V*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],p=t[5],m=t[9],h=t[13],x=t[2],_=t[6],v=t[10],y=t[14],M=t[3],R=t[7],g=t[11],S=t[15],A=m*y-h*v,C=p*y-h*_,D=p*v-m*_,V=f*y-h*x,F=f*v-m*x,H=f*_-p*x;return i*(R*A-g*C+S*D)-s*(M*A-g*V+S*F)+l*(M*C-R*V+S*H)-c*(M*D-R*F+g*H)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],h=t[7],x=t[8],_=t[9],v=t[10],y=t[11],M=t[12],R=t[13],g=t[14],S=t[15],A=i*p-s*f,C=i*m-l*f,D=i*h-c*f,V=s*m-l*p,F=s*h-c*p,H=l*h-c*m,E=x*R-_*M,O=x*g-v*M,et=x*S-y*M,G=_*g-v*R,k=_*S-y*R,Y=v*S-y*g,at=A*Y-C*k+D*G+V*et-F*O+H*E;if(at===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const tt=1/at;return t[0]=(p*Y-m*k+h*G)*tt,t[1]=(l*k-s*Y-c*G)*tt,t[2]=(R*H-g*F+S*V)*tt,t[3]=(v*F-_*H-y*V)*tt,t[4]=(m*et-f*Y-h*O)*tt,t[5]=(i*Y-l*et+c*O)*tt,t[6]=(g*D-M*H-S*C)*tt,t[7]=(x*H-v*D+y*C)*tt,t[8]=(f*k-p*et+h*E)*tt,t[9]=(s*et-i*k-c*E)*tt,t[10]=(M*F-R*D+S*A)*tt,t[11]=(_*D-x*F-y*A)*tt,t[12]=(p*O-f*G-m*E)*tt,t[13]=(i*G-s*O+l*E)*tt,t[14]=(R*C-M*V-g*A)*tt,t[15]=(x*V-_*C+v*A)*tt,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,p=t.y,m=t.z,h=c*f,x=c*p;return this.set(h*f+s,h*p-l*m,h*m+l*p,0,h*p+l*m,x*p+s,x*m-l*f,0,h*m-l*p,x*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,x=f+f,_=p+p,v=c*h,y=c*x,M=c*_,R=f*x,g=f*_,S=p*_,A=m*h,C=m*x,D=m*_,V=s.x,F=s.y,H=s.z;return l[0]=(1-(R+S))*V,l[1]=(y+D)*V,l[2]=(M-C)*V,l[3]=0,l[4]=(y-D)*F,l[5]=(1-(v+S))*F,l[6]=(g+A)*F,l[7]=0,l[8]=(M+C)*H,l[9]=(g-A)*H,l[10]=(1-(v+R))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Dr.set(l[0],l[1],l[2]).length();const p=Dr.set(l[4],l[5],l[6]).length(),m=Dr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ni.copy(this);const h=1/f,x=1/p,_=1/m;return Ni.elements[0]*=h,Ni.elements[1]*=h,Ni.elements[2]*=h,Ni.elements[4]*=x,Ni.elements[5]*=x,Ni.elements[6]*=x,Ni.elements[8]*=_,Ni.elements[9]*=_,Ni.elements[10]*=_,i.setFromRotationMatrix(Ni),s.x=f,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,f,p=qi,m=!1){const h=this.elements,x=2*c/(i-t),_=2*c/(s-l),v=(i+t)/(i-t),y=(s+l)/(s-l);let M,R;if(m)M=c/(f-c),R=f*c/(f-c);else if(p===qi)M=-(f+c)/(f-c),R=-2*f*c/(f-c);else if(p===pl)M=-f/(f-c),R=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,s,l,c,f,p=qi,m=!1){const h=this.elements,x=2/(i-t),_=2/(s-l),v=-(i+t)/(i-t),y=-(s+l)/(s-l);let M,R;if(m)M=1/(f-c),R=f/(f-c);else if(p===qi)M=-2/(f-c),R=-(f+c)/(f-c);else if(p===pl)M=-1/(f-c),R=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Dr=new ut,Ni=new Je,vb=new ut(0,0,0),xb=new ut(1,1,1),es=new ut,Oc=new ut,ri=new ut,Y_=new Je,Z_=new no;class wa{constructor(t=0,i=0,s=0,l=wa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],x=l[9],_=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(De(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-De(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(De(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-De(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(De(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-De(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Y_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Y_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Z_.setFromEuler(this),this.setFromQuaternion(Z_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wa.DEFAULT_ORDER="XYZ";class px{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sb=0;const K_=new ut,Nr=new no,va=new Je,Pc=new ut,Jo=new ut,yb=new ut,Mb=new no,Q_=new ut(1,0,0),J_=new ut(0,1,0),$_=new ut(0,0,1),tv={type:"added"},bb={type:"removed"},Ur={type:"childadded",child:null},Qd={type:"childremoved",child:null};class Cn extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const t=new ut,i=new wa,s=new no,l=new ut(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new ye}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new px,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Nr.setFromAxisAngle(t,i),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(t,i){return Nr.setFromAxisAngle(t,i),this.quaternion.premultiply(Nr),this}rotateX(t){return this.rotateOnAxis(Q_,t)}rotateY(t){return this.rotateOnAxis(J_,t)}rotateZ(t){return this.rotateOnAxis($_,t)}translateOnAxis(t,i){return K_.copy(t).applyQuaternion(this.quaternion),this.position.add(K_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Q_,t)}translateY(t){return this.translateOnAxis(J_,t)}translateZ(t){return this.translateOnAxis($_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Pc.copy(t):Pc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(Jo,Pc,this.up):va.lookAt(Pc,Jo,this.up),this.quaternion.setFromRotationMatrix(va),l&&(va.extractRotation(l.matrixWorld),Nr.setFromRotationMatrix(va),this.quaternion.premultiply(Nr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tv),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(bb),Qd.child=t,this.dispatchEvent(Qd),Qd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),va.multiply(t.parent.matrixWorld)),t.applyMatrix4(va),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tv),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,t,yb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,Mb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const _=m[h];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=f(t.geometries),m=f(t.materials),h=f(t.textures),x=f(t.images),_=f(t.shapes),v=f(t.skeletons),y=f(t.animations),M=f(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),x.length>0&&(s.images=x),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),M.length>0&&(s.nodes=M)}return s.object=l,s;function f(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new ut(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fc extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eb={type:"move"};class Jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){f=!0;for(const R of t.hand.values()){const g=i.getJointPose(R,s),S=this._getHandJoint(h,R);g!==null&&(S.matrix.fromArray(g.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=g.radius),S.visible=g!==null}const x=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=x.position.distanceTo(_.position),y=.02,M=.005;h.inputState.pinching&&v>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&v<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Eb)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Fc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Ic={h:0,s:0,l:0};function $d(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class be{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=fb(t,1),i=De(i,0,1),s=De(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=$d(f,c,t+1/3),this.g=$d(f,c,t),this.b=$d(f,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:de("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const s=mx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ta(t.r),this.g=Ta(t.g),this.b=Ta(t.b),this}copyLinearToSRGB(t){return this.r=Zr(t.r),this.g=Zr(t.g),this.b=Zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return Le.workingToColorSpace(Un.copy(this),t),Math.round(De(Un.r*255,0,255))*65536+Math.round(De(Un.g*255,0,255))*256+Math.round(De(Un.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,c=Un.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const x=(p+f)/2;if(p===f)m=0,h=0;else{const _=f-p;switch(h=x<=.5?_/(f+p):_/(2-f-p),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=h,t.l=x,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=Si){Le.workingToColorSpace(Un.copy(this),t);const i=Un.r,s=Un.g,l=Un.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+i,ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ns),t.getHSL(Ic);const s=Wd(ns.h,Ic.h,i),l=Wd(ns.s,Ic.s,i),c=Wd(ns.l,Ic.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new be;be.NAMES=mx;class Fp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(t),this.density=i}clone(){return new Fp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tb extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wa,this.environmentIntensity=1,this.environmentRotation=new wa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ui=new ut,xa=new ut,th=new ut,Sa=new ut,Lr=new ut,Or=new ut,ev=new ut,eh=new ut,nh=new ut,ih=new ut,ah=new sn,sh=new sn,rh=new sn;class yi{constructor(t=new ut,i=new ut,s=new ut){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ui.subVectors(t,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ui.subVectors(l,i),xa.subVectors(s,i),th.subVectors(t,i);const f=Ui.dot(Ui),p=Ui.dot(xa),m=Ui.dot(th),h=xa.dot(xa),x=xa.dot(th),_=f*h-p*p;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(h*m-p*x)*v,M=(f*x-p*m)*v;return c.set(1-y-M,M,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(t,i,s,l,c,f,p,m){return this.getBarycoord(t,i,s,l,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Sa.x),m.addScaledVector(f,Sa.y),m.addScaledVector(p,Sa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return ah.setScalar(0),sh.setScalar(0),rh.setScalar(0),ah.fromBufferAttribute(t,i),sh.fromBufferAttribute(t,s),rh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(ah,c.x),f.addScaledVector(sh,c.y),f.addScaledVector(rh,c.z),f}static isFrontFacing(t,i,s,l){return Ui.subVectors(s,i),xa.subVectors(t,i),Ui.cross(xa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Ui.cross(xa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,p;Lr.subVectors(l,s),Or.subVectors(c,s),eh.subVectors(t,s);const m=Lr.dot(eh),h=Or.dot(eh);if(m<=0&&h<=0)return i.copy(s);nh.subVectors(t,l);const x=Lr.dot(nh),_=Or.dot(nh);if(x>=0&&_<=x)return i.copy(l);const v=m*_-x*h;if(v<=0&&m>=0&&x<=0)return f=m/(m-x),i.copy(s).addScaledVector(Lr,f);ih.subVectors(t,c);const y=Lr.dot(ih),M=Or.dot(ih);if(M>=0&&y<=M)return i.copy(c);const R=y*h-m*M;if(R<=0&&h>=0&&M<=0)return p=h/(h-M),i.copy(s).addScaledVector(Or,p);const g=x*M-y*_;if(g<=0&&_-x>=0&&y-M>=0)return ev.subVectors(c,l),p=(_-x)/(_-x+(y-M)),i.copy(l).addScaledVector(ev,p);const S=1/(g+R+v);return f=R*S,p=v*S,i.copy(s).addScaledVector(Lr,f).addScaledVector(Or,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class gl{constructor(t=new ut(1/0,1/0,1/0),i=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Li.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Li.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Li.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)t.isMesh===!0?t.getVertexPosition(f,Li):Li.fromBufferAttribute(c,f),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Bc.copy(s.boundingBox)),Bc.applyMatrix4(t.matrixWorld),this.union(Bc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($o),zc.subVectors(this.max,$o),Pr.subVectors(t.a,$o),Fr.subVectors(t.b,$o),Ir.subVectors(t.c,$o),is.subVectors(Fr,Pr),as.subVectors(Ir,Fr),Us.subVectors(Pr,Ir);let i=[0,-is.z,is.y,0,-as.z,as.y,0,-Us.z,Us.y,is.z,0,-is.x,as.z,0,-as.x,Us.z,0,-Us.x,-is.y,is.x,0,-as.y,as.x,0,-Us.y,Us.x,0];return!oh(i,Pr,Fr,Ir,zc)||(i=[1,0,0,0,1,0,0,0,1],!oh(i,Pr,Fr,Ir,zc))?!1:(Hc.crossVectors(is,as),i=[Hc.x,Hc.y,Hc.z],oh(i,Pr,Fr,Ir,zc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ya),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ya=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],Li=new ut,Bc=new gl,Pr=new ut,Fr=new ut,Ir=new ut,is=new ut,as=new ut,Us=new ut,$o=new ut,zc=new ut,Hc=new ut,Ls=new ut;function oh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ls.fromArray(r,c);const p=l.x*Math.abs(Ls.x)+l.y*Math.abs(Ls.y)+l.z*Math.abs(Ls.z),m=t.dot(Ls),h=i.dot(Ls),x=s.dot(Ls);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const gn=new ut,Gc=new Ae;let Ab=0;class Ln{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ab++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=_p,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Gc.fromBufferAttribute(this,i),Gc.applyMatrix3(t),this.setXY(i,Gc.x,Gc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Xi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qe(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Xi(i,this.array)),i}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Xi(i,this.array)),i}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Xi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Xi(i,this.array)),i}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_p&&(t.usage=this.usage),t}}class gx extends Ln{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class _x extends Ln{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ui extends Ln{constructor(t,i,s){super(new Float32Array(t),i,s)}}const Rb=new gl,tl=new ut,lh=new ut;class _l{constructor(t=new ut,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Rb.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tl.subVectors(t,this.center);const i=tl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(tl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tl.copy(t.center).add(lh)),this.expandByPoint(tl.copy(t.center).sub(lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let wb=0;const xi=new Je,ch=new Cn,Br=new ut,oi=new gl,el=new gl,bn=new ut;class Fn extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ob(t)?_x:gx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ye().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,s){return xi.makeTranslation(t,i,s),this.applyMatrix4(xi),this}scale(t,i,s){return xi.makeScale(t,i,s),this.applyMatrix4(xi),this}lookAt(t){return ch.lookAt(t),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ui(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _l);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];el.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors(oi.min,el.min),oi.expandByPoint(bn),bn.addVectors(oi.max,el.max),oi.expandByPoint(bn)):(oi.expandByPoint(el.min),oi.expandByPoint(el.max))}oi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)bn.fromBufferAttribute(p,h),m&&(Br.fromBufferAttribute(t,h),bn.add(Br)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let E=0;E<s.count;E++)p[E]=new ut,m[E]=new ut;const h=new ut,x=new ut,_=new ut,v=new Ae,y=new Ae,M=new Ae,R=new ut,g=new ut;function S(E,O,et){h.fromBufferAttribute(s,E),x.fromBufferAttribute(s,O),_.fromBufferAttribute(s,et),v.fromBufferAttribute(c,E),y.fromBufferAttribute(c,O),M.fromBufferAttribute(c,et),x.sub(h),_.sub(h),y.sub(v),M.sub(v);const G=1/(y.x*M.y-M.x*y.y);isFinite(G)&&(R.copy(x).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(G),g.copy(_).multiplyScalar(y.x).addScaledVector(x,-M.x).multiplyScalar(G),p[E].add(R),p[O].add(R),p[et].add(R),m[E].add(g),m[O].add(g),m[et].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let E=0,O=A.length;E<O;++E){const et=A[E],G=et.start,k=et.count;for(let Y=G,at=G+k;Y<at;Y+=3)S(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const C=new ut,D=new ut,V=new ut,F=new ut;function H(E){V.fromBufferAttribute(l,E),F.copy(V);const O=p[E];C.copy(O),C.sub(V.multiplyScalar(V.dot(O))).normalize(),D.crossVectors(F,O);const G=D.dot(m[E])<0?-1:1;f.setXYZW(E,C.x,C.y,C.z,G)}for(let E=0,O=A.length;E<O;++E){const et=A[E],G=et.start,k=et.count;for(let Y=G,at=G+k;Y<at;Y+=3)H(t.getX(Y+0)),H(t.getX(Y+1)),H(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ln(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const l=new ut,c=new ut,f=new ut,p=new ut,m=new ut,h=new ut,x=new ut,_=new ut;if(t)for(let v=0,y=t.count;v<y;v+=3){const M=t.getX(v+0),R=t.getX(v+1),g=t.getX(v+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,g),x.subVectors(f,c),_.subVectors(l,c),x.cross(_),p.fromBufferAttribute(s,M),m.fromBufferAttribute(s,R),h.fromBufferAttribute(s,g),p.add(x),m.add(x),h.add(x),s.setXYZ(M,p.x,p.y,p.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(g,h.x,h.y,h.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),x.subVectors(f,c),_.subVectors(l,c),x.cross(_),s.setXYZ(v+0,x.x,x.y,x.z),s.setXYZ(v+1,x.x,x.y,x.z),s.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(p,m){const h=p.array,x=p.itemSize,_=p.normalized,v=new h.constructor(m.length*x);let y=0,M=0;for(let R=0,g=m.length;R<g;R++){p.isInterleavedBufferAttribute?y=m[R]*p.data.stride+p.offset:y=m[R]*x;for(let S=0;S<x;S++)v[M++]=h[y++]}return new Ln(v,x,_)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let x=0,_=h.length;x<_;x++){const v=h[x],y=t(v,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let _=0,v=h.length;_<v;_++){const y=h[_];x.push(y.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=t.morphAttributes;for(const h in c){const x=[],_=c[h];for(let v=0,y=_.length;v<y;v++)x.push(_[v].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let h=0,x=f.length;h<x;h++){const _=f[h];this.addGroup(_.start,_.count,_.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cb{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=_p,this.updateRanges=[],this.version=0,this.uuid=fs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vn=new ut;class xu{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix4(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyNormalMatrix(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.transformDirection(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Xi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qe(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Xi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Xi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Xi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Xi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){_u("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ln(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){_u("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Db=0;class Xs extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Yr,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Ch,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){de(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){de(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(s.blending=this.blending),this.side!==ds&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==wh&&(s.blendSrc=this.blendSrc),this.blendDst!==Ch&&(s.blendDst=this.blendDst),this.blendEquation!==zs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==V_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vx extends Xs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zr;const nl=new ut,Hr=new ut,Gr=new ut,Vr=new Ae,il=new Ae,xx=new Je,Vc=new ut,al=new ut,kc=new ut,nv=new Ae,uh=new Ae,iv=new Ae;class Nb extends Cn{constructor(t=new vx){if(super(),this.isSprite=!0,this.type="Sprite",zr===void 0){zr=new Fn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new Cb(i,5);zr.setIndex([0,1,2,0,2,3]),zr.setAttribute("position",new xu(s,3,0,!1)),zr.setAttribute("uv",new xu(s,2,3,!1))}this.geometry=zr,this.material=t,this.center=new Ae(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hr.setFromMatrixScale(this.matrixWorld),xx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Gr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const f=this.center;jc(Vc.set(-.5,-.5,0),Gr,f,Hr,l,c),jc(al.set(.5,-.5,0),Gr,f,Hr,l,c),jc(kc.set(.5,.5,0),Gr,f,Hr,l,c),nv.set(0,0),uh.set(1,0),iv.set(1,1);let p=t.ray.intersectTriangle(Vc,al,kc,!1,nl);if(p===null&&(jc(al.set(-.5,.5,0),Gr,f,Hr,l,c),uh.set(0,1),p=t.ray.intersectTriangle(Vc,kc,al,!1,nl),p===null))return;const m=t.ray.origin.distanceTo(nl);m<t.near||m>t.far||i.push({distance:m,point:nl.clone(),uv:yi.getInterpolation(nl,Vc,al,kc,nv,uh,iv,new Ae),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function jc(r,t,i,s,l,c){Vr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(il.x=c*Vr.x-l*Vr.y,il.y=l*Vr.x+c*Vr.y):il.copy(Vr),r.copy(t),r.x+=il.x,r.y+=il.y,r.applyMatrix4(xx)}const Ma=new ut,fh=new ut,Xc=new ut,ss=new ut,dh=new ut,Wc=new ut,hh=new ut;class Ip{constructor(t=new ut,i=new ut(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ma.copy(this.origin).addScaledVector(this.direction,i),Ma.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){fh.copy(t).add(i).multiplyScalar(.5),Xc.copy(i).sub(t).normalize(),ss.copy(this.origin).sub(fh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Xc),p=ss.dot(this.direction),m=-ss.dot(Xc),h=ss.lengthSq(),x=Math.abs(1-f*f);let _,v,y,M;if(x>0)if(_=f*m-p,v=f*p-m,M=c*x,_>=0)if(v>=-M)if(v<=M){const R=1/x;_*=R,v*=R,y=_*(_+f*v+2*p)+v*(f*_+v+2*m)+h}else v=c,_=Math.max(0,-(f*v+p)),y=-_*_+v*(v+2*m)+h;else v=-c,_=Math.max(0,-(f*v+p)),y=-_*_+v*(v+2*m)+h;else v<=-M?(_=Math.max(0,-(-f*c+p)),v=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+h):v<=M?(_=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+h):(_=Math.max(0,-(f*c+p)),v=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+h);else v=f>0?-c:c,_=Math.max(0,-(f*v+p)),y=-_*_+v*(v+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(fh).addScaledVector(Xc,v),y}intersectSphere(t,i){Ma.subVectors(t.center,this.origin);const s=Ma.dot(this.direction),l=Ma.dot(Ma)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,p,m;const h=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(s=(t.min.x-v.x)*h,l=(t.max.x-v.x)*h):(s=(t.max.x-v.x)*h,l=(t.min.x-v.x)*h),x>=0?(c=(t.min.y-v.y)*x,f=(t.max.y-v.y)*x):(c=(t.max.y-v.y)*x,f=(t.min.y-v.y)*x),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(p=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(p=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ma)!==null}intersectTriangle(t,i,s,l,c){dh.subVectors(i,t),Wc.subVectors(s,t),hh.crossVectors(dh,Wc);let f=this.direction.dot(hh),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;ss.subVectors(this.origin,t);const m=p*this.direction.dot(Wc.crossVectors(ss,Wc));if(m<0)return null;const h=p*this.direction.dot(dh.cross(ss));if(h<0||m+h>f)return null;const x=-p*ss.dot(hh);return x<0?null:this.at(x/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bp extends Xs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wa,this.combine=Qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const av=new Je,Os=new Ip,qc=new _l,sv=new ut,Yc=new ut,Zc=new ut,Kc=new ut,ph=new ut,Qc=new ut,rv=new ut,Jc=new ut;class Qi extends Cn{constructor(t=new Fn,i=new Bp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Qc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=p[m],_=c[m];x!==0&&(ph.fromBufferAttribute(_,t),f?Qc.addScaledVector(ph,x):Qc.addScaledVector(ph.sub(i),x))}i.add(Qc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),qc.copy(s.boundingSphere),qc.applyMatrix4(c),Os.copy(t.ray).recast(t.near),!(qc.containsPoint(Os.origin)===!1&&(Os.intersectSphere(qc,sv)===null||Os.origin.distanceToSquared(sv)>(t.far-t.near)**2))&&(av.copy(c).invert(),Os.copy(t.ray).applyMatrix4(av),!(s.boundingBox!==null&&Os.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Os)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(f))for(let M=0,R=v.length;M<R;M++){const g=v[M],S=f[g.materialIndex],A=Math.max(g.start,y.start),C=Math.min(p.count,Math.min(g.start+g.count,y.start+y.count));for(let D=A,V=C;D<V;D+=3){const F=p.getX(D),H=p.getX(D+1),E=p.getX(D+2);l=$c(this,S,t,s,h,x,_,F,H,E),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=g.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);for(let g=M,S=R;g<S;g+=3){const A=p.getX(g),C=p.getX(g+1),D=p.getX(g+2);l=$c(this,f,t,s,h,x,_,A,C,D),l&&(l.faceIndex=Math.floor(g/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let M=0,R=v.length;M<R;M++){const g=v[M],S=f[g.materialIndex],A=Math.max(g.start,y.start),C=Math.min(m.count,Math.min(g.start+g.count,y.start+y.count));for(let D=A,V=C;D<V;D+=3){const F=D,H=D+1,E=D+2;l=$c(this,S,t,s,h,x,_,F,H,E),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=g.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let g=M,S=R;g<S;g+=3){const A=g,C=g+1,D=g+2;l=$c(this,f,t,s,h,x,_,A,C,D),l&&(l.faceIndex=Math.floor(g/3),i.push(l))}}}}function Ub(r,t,i,s,l,c,f,p){let m;if(t.side===Kn?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,t.side===ds,p),m===null)return null;Jc.copy(p),Jc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Jc);return h<i.near||h>i.far?null:{distance:h,point:Jc.clone(),object:r}}function $c(r,t,i,s,l,c,f,p,m,h){r.getVertexPosition(p,Yc),r.getVertexPosition(m,Zc),r.getVertexPosition(h,Kc);const x=Ub(r,t,i,s,Yc,Zc,Kc,rv);if(x){const _=new ut;yi.getBarycoord(rv,Yc,Zc,Kc,_),l&&(x.uv=yi.getInterpolatedAttribute(l,p,m,h,_,new Ae)),c&&(x.uv1=yi.getInterpolatedAttribute(c,p,m,h,_,new Ae)),f&&(x.normal=yi.getInterpolatedAttribute(f,p,m,h,_,new ut),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const v={a:p,b:m,c:h,normal:new ut,materialIndex:0};yi.getNormal(Yc,Zc,Kc,v.normal),x.face=v,x.barycoord=_}return x}class Lb extends Pn{constructor(t=null,i=1,s=1,l,c,f,p,m,h=wn,x=wn,_,v){super(null,f,p,m,h,x,l,c,_,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mh=new ut,Ob=new ut,Pb=new ye;class Bs{constructor(t=new ut(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=mh.subVectors(s,i).cross(Ob.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(mh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Pb.getNormalMatrix(t),l=this.coplanarPoint(mh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new _l,Fb=new Ae(.5,.5),tu=new ut;class zp{constructor(t=new Bs,i=new Bs,s=new Bs,l=new Bs,c=new Bs,f=new Bs){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=qi,s=!1){const l=this.planes,c=t.elements,f=c[0],p=c[1],m=c[2],h=c[3],x=c[4],_=c[5],v=c[6],y=c[7],M=c[8],R=c[9],g=c[10],S=c[11],A=c[12],C=c[13],D=c[14],V=c[15];if(l[0].setComponents(h-f,y-x,S-M,V-A).normalize(),l[1].setComponents(h+f,y+x,S+M,V+A).normalize(),l[2].setComponents(h+p,y+_,S+R,V+C).normalize(),l[3].setComponents(h-p,y-_,S-R,V-C).normalize(),s)l[4].setComponents(m,v,g,D).normalize(),l[5].setComponents(h-m,y-v,S-g,V-D).normalize();else if(l[4].setComponents(h-m,y-v,S-g,V-D).normalize(),i===qi)l[5].setComponents(h+m,y+v,S+g,V+D).normalize();else if(i===pl)l[5].setComponents(m,v,g,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(t){Ps.center.set(0,0,0);const i=Fb.distanceTo(t.center);return Ps.radius=.7071067811865476+i,Ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(tu.x=l.normal.x>0?t.max.x:t.min.x,tu.y=l.normal.y>0?t.max.y:t.min.y,tu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(tu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hp extends Xs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Su=new ut,yu=new ut,ov=new Je,sl=new Ip,eu=new _l,gh=new ut,lv=new ut;class Sx extends Cn{constructor(t=new Fn,i=new Hp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Su.fromBufferAttribute(i,l-1),yu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Su.distanceTo(yu);t.setAttribute("lineDistance",new ui(s,1))}else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),eu.copy(s.boundingSphere),eu.applyMatrix4(l),eu.radius+=c,t.ray.intersectsSphere(eu)===!1)return;ov.copy(l).invert(),sl.copy(t.ray).applyMatrix4(ov);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,x=s.index,v=s.attributes.position;if(x!==null){const y=Math.max(0,f.start),M=Math.min(x.count,f.start+f.count);for(let R=y,g=M-1;R<g;R+=h){const S=x.getX(R),A=x.getX(R+1),C=nu(this,t,sl,m,S,A,R);C&&i.push(C)}if(this.isLineLoop){const R=x.getX(M-1),g=x.getX(y),S=nu(this,t,sl,m,R,g,M-1);S&&i.push(S)}}else{const y=Math.max(0,f.start),M=Math.min(v.count,f.start+f.count);for(let R=y,g=M-1;R<g;R+=h){const S=nu(this,t,sl,m,R,R+1,R);S&&i.push(S)}if(this.isLineLoop){const R=nu(this,t,sl,m,M-1,y,M-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function nu(r,t,i,s,l,c,f){const p=r.geometry.attributes.position;if(Su.fromBufferAttribute(p,l),yu.fromBufferAttribute(p,c),i.distanceSqToSegment(Su,yu,gh,lv)>s)return;gh.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(gh);if(!(h<t.near||h>t.far))return{distance:h,point:lv.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const cv=new ut,uv=new ut;class Ib extends Sx{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)cv.fromBufferAttribute(i,l),uv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+cv.distanceTo(uv);t.setAttribute("lineDistance",new ui(s,1))}else de("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xp extends Xs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const fv=new Je,Sp=new Ip,iu=new _l,au=new ut;class dv extends Cn{constructor(t=new Fn,i=new xp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),iu.copy(s.boundingSphere),iu.applyMatrix4(l),iu.radius+=c,t.ray.intersectsSphere(iu)===!1)return;fv.copy(l).invert(),Sp.copy(t.ray).applyMatrix4(fv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,_=s.attributes.position;if(h!==null){const v=Math.max(0,f.start),y=Math.min(h.count,f.start+f.count);for(let M=v,R=y;M<R;M++){const g=h.getX(M);au.fromBufferAttribute(_,g),hv(au,g,m,l,t,i,this)}}else{const v=Math.max(0,f.start),y=Math.min(_.count,f.start+f.count);for(let M=v,R=y;M<R;M++)au.fromBufferAttribute(_,M),hv(au,M,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function hv(r,t,i,s,l,c,f){const p=Sp.distanceSqToPoint(r);if(p<i){const m=new ut;Sp.closestPointToPoint(r,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class yx extends Pn{constructor(t=[],i=js,s,l,c,f,p,m,h,x){super(t,i,s,l,c,f,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bb extends Pn{constructor(t,i,s,l,c,f,p,m,h){super(t,i,s,l,c,f,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ml extends Pn{constructor(t,i,s=Ki,l,c,f,p=wn,m=wn,h,x=Ra,_=1){if(x!==Ra&&x!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:_};super(v,l,c,f,p,m,x,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class zb extends ml{constructor(t,i=Ki,s=js,l,c,f=wn,p=wn,m,h=Ra){const x={width:t,height:t,depth:1},_=[x,x,x,x,x,x];super(t,t,i,s,l,c,f,p,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Mx extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class vl extends Fn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],x=[],_=[];let v=0,y=0;M("z","y","x",-1,-1,s,i,t,f,c,0),M("z","y","x",1,-1,s,i,-t,f,c,1),M("x","z","y",1,1,t,s,i,l,f,2),M("x","z","y",1,-1,t,s,-i,l,f,3),M("x","y","z",1,-1,t,i,s,l,c,4),M("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ui(h,3)),this.setAttribute("normal",new ui(x,3)),this.setAttribute("uv",new ui(_,2));function M(R,g,S,A,C,D,V,F,H,E,O){const et=D/H,G=V/E,k=D/2,Y=V/2,at=F/2,tt=H+1,U=E+1;let I=0,J=0;const ot=new ut;for(let xt=0;xt<U;xt++){const z=xt*G-Y;for(let P=0;P<tt;P++){const W=P*et-k;ot[R]=W*A,ot[g]=z*C,ot[S]=at,h.push(ot.x,ot.y,ot.z),ot[R]=0,ot[g]=0,ot[S]=F>0?1:-1,x.push(ot.x,ot.y,ot.z),_.push(P/H),_.push(1-xt/E),I+=1}}for(let xt=0;xt<E;xt++)for(let z=0;z<H;z++){const P=v+z+tt*xt,W=v+z+tt*(xt+1),lt=v+(z+1)+tt*(xt+1),gt=v+(z+1)+tt*xt;m.push(P,W,gt),m.push(W,lt,gt),J+=6}p.addGroup(y,J,O),y+=J,v+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class xl extends Fn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,x=m+1,_=t/p,v=i/m,y=[],M=[],R=[],g=[];for(let S=0;S<x;S++){const A=S*v-f;for(let C=0;C<h;C++){const D=C*_-c;M.push(D,-A,0),R.push(0,0,1),g.push(C/p),g.push(1-S/m)}}for(let S=0;S<m;S++)for(let A=0;A<p;A++){const C=A+h*S,D=A+h*(S+1),V=A+1+h*(S+1),F=A+1+h*S;y.push(C,D,F),y.push(D,V,F)}this.setIndex(y),this.setAttribute("position",new ui(M,3)),this.setAttribute("normal",new ui(R,3)),this.setAttribute("uv",new ui(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.width,t.height,t.widthSegments,t.heightSegments)}}function to(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function kn(r){const t={};for(let i=0;i<r.length;i++){const s=to(r[i]);for(const l in s)t[l]=s[l]}return t}function Hb(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function bx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const Gb={clone:to,merge:kn};var Vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Xs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vb,this.fragmentShader=kb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=to(t.uniforms),this.uniformsGroups=Hb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class jb extends Ji{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xb extends Xs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wb extends Xs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ex extends Cn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const _h=new Je,pv=new ut,mv=new ut;class qb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zp,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;pv.setFromMatrixPosition(t.matrixWorld),i.position.copy(pv),mv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(mv),i.updateMatrixWorld(),_h.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===pl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(_h)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const su=new ut,ru=new no,Gi=new ut;class Tx extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(su,ru,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(su,ru,Gi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(su,ru,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(su,ru,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new ut,gv=new Ae,_v=new Ae;class li extends Tx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=vp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vp*2*Math.atan(Math.tan(Xd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,i){return this.getViewBounds(t,gv,_v),i.subVectors(_v,gv)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Xd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/h,l*=f.width/m,s*=f.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Yb extends qb{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0}}class Zb extends Ex{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Yb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Ax extends Tx{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Kb extends Ex{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const kr=-90,jr=1;class Qb extends Cn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(kr,jr,t,i);l.layers=this.layers,this.add(l);const c=new li(kr,jr,t,i);c.layers=this.layers,this.add(c);const f=new li(kr,jr,t,i);f.layers=this.layers,this.add(f);const p=new li(kr,jr,t,i);p.layers=this.layers,this.add(p);const m=new li(kr,jr,t,i);m.layers=this.layers,this.add(m);const h=new li(kr,jr,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(t===qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===pl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,x]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),g&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),g&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),g&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),g&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),g&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),g&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(_,v,y),t.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class Jb extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class $b{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,de("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class tE extends Ib{constructor(t=10,i=10,s=4473924,l=8947848){s=new be(s),l=new be(l);const c=i/2,f=t/i,p=t/2,m=[],h=[];for(let v=0,y=0,M=-p;v<=i;v++,M+=f){m.push(-p,0,M,p,0,M),m.push(M,0,-p,M,0,p);const R=v===c?s:l;R.toArray(h,y),y+=3,R.toArray(h,y),y+=3,R.toArray(h,y),y+=3,R.toArray(h,y),y+=3}const x=new Fn;x.setAttribute("position",new ui(m,3)),x.setAttribute("color",new ui(h,3));const _=new Hp({vertexColors:!0,toneMapped:!1});super(x,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function vv(r,t,i,s){const l=eE(s);switch(i){case cx:return r*t;case fx:return r*t/l.components*l.byteLength;case Dp:return r*t/l.components*l.byteLength;case Jr:return r*t*2/l.components*l.byteLength;case Np:return r*t*2/l.components*l.byteLength;case ux:return r*t*3/l.components*l.byteLength;case Oi:return r*t*4/l.components*l.byteLength;case Up:return r*t*4/l.components*l.byteLength;case uu:case fu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case du:case hu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hh:case Vh:return Math.max(r,16)*Math.max(t,8)/4;case zh:case Gh:return Math.max(r,8)*Math.max(t,8)/2;case kh:case jh:case Wh:case qh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Xh:case Yh:case Zh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Kh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Jh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case $h:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case tp:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ep:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case np:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ip:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ap:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case sp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case rp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case op:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case lp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case cp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case up:case fp:case dp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case hp:case pp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case mp:case gp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function eE(r){switch(r){case ci:case sx:return{byteLength:1,components:1};case dl:case rx:case Aa:return{byteLength:2,components:1};case wp:case Cp:return{byteLength:2,components:4};case Ki:case Rp:case Wi:return{byteLength:4,components:1};case ox:case lx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tp}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rx(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function nE(r){const t=new WeakMap;function i(p,m){const h=p.array,x=p.usage,_=h.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,h,x),p.onUploadCallback();let y;if(h instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=r.SHORT;else if(h instanceof Uint32Array)y=r.UNSIGNED_INT;else if(h instanceof Int32Array)y=r.INT;else if(h instanceof Int8Array)y=r.BYTE;else if(h instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:_}}function s(p,m,h){const x=m.array,_=m.updateRanges;if(r.bindBuffer(h,p),_.length===0)r.bufferSubData(h,0,x);else{_.sort((y,M)=>y.start-M.start);let v=0;for(let y=1;y<_.length;y++){const M=_[v],R=_[y];R.start<=M.start+M.count+1?M.count=Math.max(M.count,R.start+R.count-M.start):(++v,_[v]=R)}_.length=v+1;for(let y=0,M=_.length;y<M;y++){const R=_[y];r.bufferSubData(h,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=t.get(p);(!x||x.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var iE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aE=`#ifdef USE_ALPHAHASH
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
#endif`,sE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cE=`#ifdef USE_AOMAP
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
#endif`,uE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fE=`#ifdef USE_BATCHING
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
#endif`,dE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gE=`#ifdef USE_IRIDESCENCE
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
#endif`,_E=`#ifdef USE_BUMPMAP
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
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ME=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,EE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,TE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,AE=`#define PI 3.141592653589793
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
} // validated`,RE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wE=`vec3 transformedNormal = objectNormal;
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
#endif`,CE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LE="gl_FragColor = linearToOutputTexel( gl_FragColor );",OE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PE=`#ifdef USE_ENVMAP
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
#endif`,FE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,IE=`#ifdef USE_ENVMAP
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
#endif`,BE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
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
#endif`,HE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jE=`#ifdef USE_GRADIENTMAP
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
}`,XE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YE=`uniform bool receiveShadow;
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
#endif`,ZE=`#ifdef USE_ENVMAP
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
#endif`,KE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t1=`PhysicalMaterial material;
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
#endif`,e1=`uniform sampler2D dfgLUT;
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
}`,n1=`
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
#endif`,i1=`#if defined( RE_IndirectDiffuse )
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
#endif`,a1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d1=`#if defined( USE_POINTS_UV )
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
#endif`,h1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v1=`#ifdef USE_MORPHTARGETS
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
#endif`,x1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,y1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T1=`#ifdef USE_NORMALMAP
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
#endif`,A1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,G1=`float getShadowMask() {
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
}`,V1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k1=`#ifdef USE_SKINNING
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
#endif`,j1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X1=`#ifdef USE_SKINNING
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
#endif`,W1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K1=`#ifdef USE_TRANSMISSION
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
#endif`,Q1=`#ifdef USE_TRANSMISSION
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iT=`uniform sampler2D t2D;
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`#include <common>
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
}`,cT=`#if DEPTH_PACKING == 3200
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
}`,uT=`#define DISTANCE
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
}`,fT=`#define DISTANCE
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
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`uniform float scale;
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#include <common>
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
}`,_T=`uniform vec3 diffuse;
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
}`,vT=`#define LAMBERT
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
}`,xT=`#define LAMBERT
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
}`,ST=`#define MATCAP
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
}`,yT=`#define MATCAP
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
}`,MT=`#define NORMAL
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
}`,bT=`#define NORMAL
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
}`,ET=`#define PHONG
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
}`,TT=`#define PHONG
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
}`,AT=`#define STANDARD
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
}`,RT=`#define STANDARD
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
}`,wT=`#define TOON
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
}`,CT=`#define TOON
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
}`,DT=`uniform float size;
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
}`,NT=`uniform vec3 diffuse;
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
}`,UT=`#include <common>
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
}`,LT=`uniform vec3 color;
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
}`,OT=`uniform float rotation;
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
}`,PT=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:iE,alphahash_pars_fragment:aE,alphamap_fragment:sE,alphamap_pars_fragment:rE,alphatest_fragment:oE,alphatest_pars_fragment:lE,aomap_fragment:cE,aomap_pars_fragment:uE,batching_pars_vertex:fE,batching_vertex:dE,begin_vertex:hE,beginnormal_vertex:pE,bsdfs:mE,iridescence_fragment:gE,bumpmap_pars_fragment:_E,clipping_planes_fragment:vE,clipping_planes_pars_fragment:xE,clipping_planes_pars_vertex:SE,clipping_planes_vertex:yE,color_fragment:ME,color_pars_fragment:bE,color_pars_vertex:EE,color_vertex:TE,common:AE,cube_uv_reflection_fragment:RE,defaultnormal_vertex:wE,displacementmap_pars_vertex:CE,displacementmap_vertex:DE,emissivemap_fragment:NE,emissivemap_pars_fragment:UE,colorspace_fragment:LE,colorspace_pars_fragment:OE,envmap_fragment:PE,envmap_common_pars_fragment:FE,envmap_pars_fragment:IE,envmap_pars_vertex:BE,envmap_physical_pars_fragment:ZE,envmap_vertex:zE,fog_vertex:HE,fog_pars_vertex:GE,fog_fragment:VE,fog_pars_fragment:kE,gradientmap_pars_fragment:jE,lightmap_pars_fragment:XE,lights_lambert_fragment:WE,lights_lambert_pars_fragment:qE,lights_pars_begin:YE,lights_toon_fragment:KE,lights_toon_pars_fragment:QE,lights_phong_fragment:JE,lights_phong_pars_fragment:$E,lights_physical_fragment:t1,lights_physical_pars_fragment:e1,lights_fragment_begin:n1,lights_fragment_maps:i1,lights_fragment_end:a1,logdepthbuf_fragment:s1,logdepthbuf_pars_fragment:r1,logdepthbuf_pars_vertex:o1,logdepthbuf_vertex:l1,map_fragment:c1,map_pars_fragment:u1,map_particle_fragment:f1,map_particle_pars_fragment:d1,metalnessmap_fragment:h1,metalnessmap_pars_fragment:p1,morphinstance_vertex:m1,morphcolor_vertex:g1,morphnormal_vertex:_1,morphtarget_pars_vertex:v1,morphtarget_vertex:x1,normal_fragment_begin:S1,normal_fragment_maps:y1,normal_pars_fragment:M1,normal_pars_vertex:b1,normal_vertex:E1,normalmap_pars_fragment:T1,clearcoat_normal_fragment_begin:A1,clearcoat_normal_fragment_maps:R1,clearcoat_pars_fragment:w1,iridescence_pars_fragment:C1,opaque_fragment:D1,packing:N1,premultiplied_alpha_fragment:U1,project_vertex:L1,dithering_fragment:O1,dithering_pars_fragment:P1,roughnessmap_fragment:F1,roughnessmap_pars_fragment:I1,shadowmap_pars_fragment:B1,shadowmap_pars_vertex:z1,shadowmap_vertex:H1,shadowmask_pars_fragment:G1,skinbase_vertex:V1,skinning_pars_vertex:k1,skinning_vertex:j1,skinnormal_vertex:X1,specularmap_fragment:W1,specularmap_pars_fragment:q1,tonemapping_fragment:Y1,tonemapping_pars_fragment:Z1,transmission_fragment:K1,transmission_pars_fragment:Q1,uv_pars_fragment:J1,uv_pars_vertex:$1,uv_vertex:tT,worldpos_vertex:eT,background_vert:nT,background_frag:iT,backgroundCube_vert:aT,backgroundCube_frag:sT,cube_vert:rT,cube_frag:oT,depth_vert:lT,depth_frag:cT,distance_vert:uT,distance_frag:fT,equirect_vert:dT,equirect_frag:hT,linedashed_vert:pT,linedashed_frag:mT,meshbasic_vert:gT,meshbasic_frag:_T,meshlambert_vert:vT,meshlambert_frag:xT,meshmatcap_vert:ST,meshmatcap_frag:yT,meshnormal_vert:MT,meshnormal_frag:bT,meshphong_vert:ET,meshphong_frag:TT,meshphysical_vert:AT,meshphysical_frag:RT,meshtoon_vert:wT,meshtoon_frag:CT,points_vert:DT,points_frag:NT,shadow_vert:UT,shadow_frag:LT,sprite_vert:OT,sprite_frag:PT},jt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},ki={basic:{uniforms:kn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:kn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:kn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:kn([jt.common,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.roughnessmap,jt.metalnessmap,jt.fog,jt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:kn([jt.common,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.gradientmap,jt.fog,jt.lights,{emissive:{value:new be(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:kn([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:kn([jt.points,jt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:kn([jt.common,jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:kn([jt.common,jt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:kn([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:kn([jt.sprite,jt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distance:{uniforms:kn([jt.common,jt.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distance_vert,fragmentShader:Me.distance_frag},shadow:{uniforms:kn([jt.lights,jt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};ki.physical={uniforms:kn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const ou={r:0,b:0,g:0},Fs=new wa,FT=new Je;function IT(r,t,i,s,l,c){const f=new be(0);let p=l===!0?0:1,m,h,x=null,_=0,v=null;function y(A){let C=A.isScene===!0?A.background:null;if(C&&C.isTexture){const D=A.backgroundBlurriness>0;C=t.get(C,D)}return C}function M(A){let C=!1;const D=y(A);D===null?g(f,p):D&&D.isColor&&(g(D,1),C=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(A,C){const D=y(C);D&&(D.isCubeTexture||D.mapping===Au)?(h===void 0&&(h=new Qi(new vl(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:to(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,F,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fs.copy(C.backgroundRotation),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(FT.makeRotationFromEuler(Fs)),h.material.toneMapped=Le.getTransfer(D.colorSpace)!==ke,(x!==D||_!==D.version||v!==r.toneMapping)&&(h.material.needsUpdate=!0,x=D,_=D.version,v=r.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Qi(new xl(2,2),new Ji({name:"BackgroundMaterial",uniforms:to(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Le.getTransfer(D.colorSpace)!==ke,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(x!==D||_!==D.version||v!==r.toneMapping)&&(m.material.needsUpdate=!0,x=D,_=D.version,v=r.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function g(A,C){A.getRGB(ou,bx(r)),i.buffers.color.setClear(ou.r,ou.g,ou.b,C,c)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(A,C=1){f.set(A),p=C,g(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(A){p=A,g(f,p)},render:M,addToRenderList:R,dispose:S}}function BT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function p(G,k,Y,at,tt){let U=!1;const I=_(G,at,Y,k);c!==I&&(c=I,h(c.object)),U=y(G,at,Y,tt),U&&M(G,at,Y,tt),tt!==null&&t.update(tt,r.ELEMENT_ARRAY_BUFFER),(U||f)&&(f=!1,D(G,k,Y,at),tt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function m(){return r.createVertexArray()}function h(G){return r.bindVertexArray(G)}function x(G){return r.deleteVertexArray(G)}function _(G,k,Y,at){const tt=at.wireframe===!0;let U=s[k.id];U===void 0&&(U={},s[k.id]=U);const I=G.isInstancedMesh===!0?G.id:0;let J=U[I];J===void 0&&(J={},U[I]=J);let ot=J[Y.id];ot===void 0&&(ot={},J[Y.id]=ot);let xt=ot[tt];return xt===void 0&&(xt=v(m()),ot[tt]=xt),xt}function v(G){const k=[],Y=[],at=[];for(let tt=0;tt<i;tt++)k[tt]=0,Y[tt]=0,at[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Y,attributeDivisors:at,object:G,attributes:{},index:null}}function y(G,k,Y,at){const tt=c.attributes,U=k.attributes;let I=0;const J=Y.getAttributes();for(const ot in J)if(J[ot].location>=0){const z=tt[ot];let P=U[ot];if(P===void 0&&(ot==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),ot==="instanceColor"&&G.instanceColor&&(P=G.instanceColor)),z===void 0||z.attribute!==P||P&&z.data!==P.data)return!0;I++}return c.attributesNum!==I||c.index!==at}function M(G,k,Y,at){const tt={},U=k.attributes;let I=0;const J=Y.getAttributes();for(const ot in J)if(J[ot].location>=0){let z=U[ot];z===void 0&&(ot==="instanceMatrix"&&G.instanceMatrix&&(z=G.instanceMatrix),ot==="instanceColor"&&G.instanceColor&&(z=G.instanceColor));const P={};P.attribute=z,z&&z.data&&(P.data=z.data),tt[ot]=P,I++}c.attributes=tt,c.attributesNum=I,c.index=at}function R(){const G=c.newAttributes;for(let k=0,Y=G.length;k<Y;k++)G[k]=0}function g(G){S(G,0)}function S(G,k){const Y=c.newAttributes,at=c.enabledAttributes,tt=c.attributeDivisors;Y[G]=1,at[G]===0&&(r.enableVertexAttribArray(G),at[G]=1),tt[G]!==k&&(r.vertexAttribDivisor(G,k),tt[G]=k)}function A(){const G=c.newAttributes,k=c.enabledAttributes;for(let Y=0,at=k.length;Y<at;Y++)k[Y]!==G[Y]&&(r.disableVertexAttribArray(Y),k[Y]=0)}function C(G,k,Y,at,tt,U,I){I===!0?r.vertexAttribIPointer(G,k,Y,tt,U):r.vertexAttribPointer(G,k,Y,at,tt,U)}function D(G,k,Y,at){R();const tt=at.attributes,U=Y.getAttributes(),I=k.defaultAttributeValues;for(const J in U){const ot=U[J];if(ot.location>=0){let xt=tt[J];if(xt===void 0&&(J==="instanceMatrix"&&G.instanceMatrix&&(xt=G.instanceMatrix),J==="instanceColor"&&G.instanceColor&&(xt=G.instanceColor)),xt!==void 0){const z=xt.normalized,P=xt.itemSize,W=t.get(xt);if(W===void 0)continue;const lt=W.buffer,gt=W.type,q=W.bytesPerElement,st=gt===r.INT||gt===r.UNSIGNED_INT||xt.gpuType===Rp;if(xt.isInterleavedBufferAttribute){const _t=xt.data,Q=_t.stride,At=xt.offset;if(_t.isInstancedInterleavedBuffer){for(let Dt=0;Dt<ot.locationSize;Dt++)S(ot.location+Dt,_t.meshPerAttribute);G.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Dt=0;Dt<ot.locationSize;Dt++)g(ot.location+Dt);r.bindBuffer(r.ARRAY_BUFFER,lt);for(let Dt=0;Dt<ot.locationSize;Dt++)C(ot.location+Dt,P/ot.locationSize,gt,z,Q*q,(At+P/ot.locationSize*Dt)*q,st)}else{if(xt.isInstancedBufferAttribute){for(let _t=0;_t<ot.locationSize;_t++)S(ot.location+_t,xt.meshPerAttribute);G.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let _t=0;_t<ot.locationSize;_t++)g(ot.location+_t);r.bindBuffer(r.ARRAY_BUFFER,lt);for(let _t=0;_t<ot.locationSize;_t++)C(ot.location+_t,P/ot.locationSize,gt,z,P*q,P/ot.locationSize*_t*q,st)}}else if(I!==void 0){const z=I[J];if(z!==void 0)switch(z.length){case 2:r.vertexAttrib2fv(ot.location,z);break;case 3:r.vertexAttrib3fv(ot.location,z);break;case 4:r.vertexAttrib4fv(ot.location,z);break;default:r.vertexAttrib1fv(ot.location,z)}}}}A()}function V(){O();for(const G in s){const k=s[G];for(const Y in k){const at=k[Y];for(const tt in at){const U=at[tt];for(const I in U)x(U[I].object),delete U[I];delete at[tt]}}delete s[G]}}function F(G){if(s[G.id]===void 0)return;const k=s[G.id];for(const Y in k){const at=k[Y];for(const tt in at){const U=at[tt];for(const I in U)x(U[I].object),delete U[I];delete at[tt]}}delete s[G.id]}function H(G){for(const k in s){const Y=s[k];for(const at in Y){const tt=Y[at];if(tt[G.id]===void 0)continue;const U=tt[G.id];for(const I in U)x(U[I].object),delete U[I];delete tt[G.id]}}}function E(G){for(const k in s){const Y=s[k],at=G.isInstancedMesh===!0?G.id:0,tt=Y[at];if(tt!==void 0){for(const U in tt){const I=tt[U];for(const J in I)x(I[J].object),delete I[J];delete tt[U]}delete Y[at],Object.keys(Y).length===0&&delete s[k]}}}function O(){et(),f=!0,c!==l&&(c=l,h(c.object))}function et(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:et,dispose:V,releaseStatesOfGeometry:F,releaseStatesOfObject:E,releaseStatesOfProgram:H,initAttributes:R,enableAttribute:g,disableUnusedAttributes:A}}function zT(r,t,i){let s;function l(h){s=h}function c(h,x){r.drawArrays(s,h,x),i.update(x,s,1)}function f(h,x,_){_!==0&&(r.drawArraysInstanced(s,h,x,_),i.update(x,s,_))}function p(h,x,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,x,0,_);let y=0;for(let M=0;M<_;M++)y+=x[M];i.update(y,s,1)}function m(h,x,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)f(h[M],x[M],v[M]);else{y.multiDrawArraysInstancedWEBGL(s,h,0,x,0,v,0,_);let M=0;for(let R=0;R<_;R++)M+=x[R]*v[R];i.update(M,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function HT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(H){return!(H!==Oi&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(H){const E=H===Aa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==ci&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==Wi&&!E)}function m(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&(de("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:R,maxCubemapSize:g,maxAttributes:S,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:D,maxSamples:V,samples:F}}function GT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Bs,p=new ye,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||s!==0||l;return l=v,s=_.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=x(_,v,0)},this.setState=function(_,v,y){const M=_.clippingPlanes,R=_.clipIntersection,g=_.clipShadows,S=r.get(_);if(!l||M===null||M.length===0||c&&!g)c?x(null):h();else{const A=c?0:s,C=A*4;let D=S.clippingState||null;m.value=D,D=x(M,v,C,y);for(let V=0;V!==C;++V)D[V]=i[V];S.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=A}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(_,v,y,M){const R=_!==null?_.length:0;let g=null;if(R!==0){if(g=m.value,M!==!0||g===null){const S=y+R*4,A=v.matrixWorldInverse;p.getNormalMatrix(A),(g===null||g.length<S)&&(g=new Float32Array(S));for(let C=0,D=y;C!==R;++C,D+=4)f.copy(_[C]).applyMatrix4(A,p),f.normal.toArray(g,D),g[D+3]=f.constant}m.value=g,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,g}}const us=4,xv=[.125,.215,.35,.446,.526,.582],Hs=20,VT=256,rl=new Ax,Sv=new be;let vh=null,xh=0,Sh=0,yh=!1;const kT=new ut;class yv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=kT}=c;vh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vh,xh,Sh),this._renderer.xr.enabled=yh,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===js||t.mapping===Qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:Aa,format:Oi,colorSpace:$r,depthBuffer:!1},l=Mv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jT(c)),this._blurMaterial=WT(c,t,i),this._ggxMaterial=XT(c,t,i)}return l}_compileMaterial(t){const i=new Qi(new Fn,t);this._renderer.compile(i,rl)}_sceneToCubeUV(t,i,s,l,c){const m=new li(90,1,i,s),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(Sv),_.toneMapping=Yi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qi(new vl,new Bp({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,g=R.material;let S=!1;const A=t.background;A?A.isColor&&(g.color.copy(A),t.background=null,S=!0):(g.color.copy(Sv),S=!0);for(let C=0;C<6;C++){const D=C%3;D===0?(m.up.set(0,h[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[C],c.y,c.z)):D===1?(m.up.set(0,0,h[C]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[C],c.z)):(m.up.set(0,h[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[C]));const V=this._cubeSize;Xr(l,D*V,C>2?V:0,V,V),_.setRenderTarget(l),S&&_.render(R,m),_.render(t,m)}_.toneMapping=y,_.autoClear=v,t.background=A}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===js||t.mapping===Qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Xr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,rl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,h=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-x*x),v=0+h*1.25,y=_*v,{_lodMax:M}=this,R=this._sizeLods[s],g=3*R*(s>M-us?s-M+us:0),S=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=M-i,Xr(c,g,S,3*R,2*R),l.setRenderTarget(c),l.render(p,rl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-s,Xr(t,g,S,3*R,2*R),l.setRenderTarget(t),l.render(p,rl)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[l];_.material=h;const v=h.uniforms,y=this._sizeLods[s]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Hs-1),R=c/M,g=isFinite(c)?1+Math.floor(x*R):Hs;g>Hs&&de(`sigmaRadians, ${c}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Hs}`);const S=[];let A=0;for(let H=0;H<Hs;++H){const E=H/R,O=Math.exp(-E*E/2);S.push(O),H===0?A+=O:H<g&&(A+=2*O)}for(let H=0;H<S.length;H++)S[H]=S[H]/A;v.envMap.value=t.texture,v.samples.value=g,v.weights.value=S,v.latitudinal.value=f==="latitudinal",p&&(v.poleAxis.value=p);const{_lodMax:C}=this;v.dTheta.value=M,v.mipInt.value=C-s;const D=this._sizeLods[l],V=3*D*(l>C-us?l-C+us:0),F=4*(this._cubeSize-D);Xr(i,V,F,3*D,2*D),m.setRenderTarget(i),m.render(_,rl)}}function jT(r){const t=[],i=[],s=[];let l=r;const c=r-us+1+xv.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);t.push(p);let m=1/p;f>r-us?m=xv[f-r+us-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),x=-h,_=1+h,v=[x,x,_,x,_,_,x,x,_,_,x,_],y=6,M=6,R=3,g=2,S=1,A=new Float32Array(R*M*y),C=new Float32Array(g*M*y),D=new Float32Array(S*M*y);for(let F=0;F<y;F++){const H=F%3*2/3-1,E=F>2?0:-1,O=[H,E,0,H+2/3,E,0,H+2/3,E+1,0,H,E,0,H+2/3,E+1,0,H,E+1,0];A.set(O,R*M*F),C.set(v,g*M*F);const et=[F,F,F,F,F,F];D.set(et,S*M*F)}const V=new Fn;V.setAttribute("position",new Ln(A,R)),V.setAttribute("uv",new Ln(C,g)),V.setAttribute("faceIndex",new Ln(D,S)),s.push(new Qi(V,null)),l>us&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Mv(r,t,i){const s=new Zi(r,t,i);return s.texture.mapping=Au,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Xr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function XT(r,t,i){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function WT(r,t,i){const s=new Float32Array(Hs),l=new ut(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ru(),fragmentShader:`

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
	`}class wx extends Zi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new yx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new vl(5,5,5),c=new Ji({name:"CubemapFromEquirect",uniforms:to(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Ea});c.uniforms.tEquirect.value=i;const f=new Qi(l,c),p=i.minFilter;return i.minFilter===Gs&&(i.minFilter=On),new Qb(1,10,this).update(t,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function qT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(v,y=!1){return v==null?null:y?f(v):c(v)}function c(v){if(v&&v.isTexture){const y=v.mapping;if(y===Vd||y===kd)if(t.has(v)){const M=t.get(v).texture;return p(M,v.mapping)}else{const M=v.image;if(M&&M.height>0){const R=new wx(M.height);return R.fromEquirectangularTexture(r,v),t.set(v,R),v.addEventListener("dispose",h),p(R.texture,v.mapping)}else return null}}return v}function f(v){if(v&&v.isTexture){const y=v.mapping,M=y===Vd||y===kd,R=y===js||y===Qr;if(M||R){let g=i.get(v);const S=g!==void 0?g.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return s===null&&(s=new yv(r)),g=M?s.fromEquirectangular(v,g):s.fromCubemap(v,g),g.texture.pmremVersion=v.pmremVersion,i.set(v,g),g.texture;if(g!==void 0)return g.texture;{const A=v.image;return M&&A&&A.height>0||R&&A&&m(A)?(s===null&&(s=new yv(r)),g=M?s.fromEquirectangular(v):s.fromCubemap(v),g.texture.pmremVersion=v.pmremVersion,i.set(v,g),v.addEventListener("dispose",x),g.texture):null}}}return v}function p(v,y){return y===Vd?v.mapping=js:y===kd&&(v.mapping=Qr),v}function m(v){let y=0;const M=6;for(let R=0;R<M;R++)v[R]!==void 0&&y++;return y===M}function h(v){const y=v.target;y.removeEventListener("dispose",h);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function x(v){const y=v.target;y.removeEventListener("dispose",x);const M=i.get(y);M!==void 0&&(i.delete(y),M.dispose())}function _(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function YT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&vu("WebGLRenderer: "+s+" extension not supported."),l}}}function ZT(r,t,i,s){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const M in v.attributes)t.remove(v.attributes[M]);v.removeEventListener("dispose",f),delete l[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function p(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const y in v)t.update(v[y],r.ARRAY_BUFFER)}function h(_){const v=[],y=_.index,M=_.attributes.position;let R=0;if(M===void 0)return;if(y!==null){const A=y.array;R=y.version;for(let C=0,D=A.length;C<D;C+=3){const V=A[C+0],F=A[C+1],H=A[C+2];v.push(V,F,F,H,H,V)}}else{const A=M.array;R=M.version;for(let C=0,D=A.length/3-1;C<D;C+=3){const V=C+0,F=C+1,H=C+2;v.push(V,F,F,H,H,V)}}const g=new(M.count>=65535?_x:gx)(v,1);g.version=R;const S=c.get(_);S&&t.remove(S),c.set(_,g)}function x(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&h(_)}else h(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:x}}function KT(r,t,i){let s;function l(v){s=v}let c,f;function p(v){c=v.type,f=v.bytesPerElement}function m(v,y){r.drawElements(s,y,c,v*f),i.update(y,s,1)}function h(v,y,M){M!==0&&(r.drawElementsInstanced(s,y,c,v*f,M),i.update(y,s,M))}function x(v,y,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,v,0,M);let g=0;for(let S=0;S<M;S++)g+=y[S];i.update(g,s,1)}function _(v,y,M,R){if(M===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let S=0;S<v.length;S++)h(v[S]/f,y[S],R[S]);else{g.multiDrawElementsInstancedWEBGL(s,y,0,c,v,0,R,0,M);let S=0;for(let A=0;A<M;A++)S+=y[A]*R[A];i.update(S,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function QT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ue("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function JT(r,t,i){const s=new WeakMap,l=new sn;function c(f,p,m){const h=f.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=x!==void 0?x.length:0;let v=s.get(p);if(v===void 0||v.count!==_){let et=function(){E.dispose(),s.delete(p),p.removeEventListener("dispose",et)};var y=et;v!==void 0&&v.texture.dispose();const M=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,g=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],C=p.morphAttributes.color||[];let D=0;M===!0&&(D=1),R===!0&&(D=2),g===!0&&(D=3);let V=p.attributes.position.count*D,F=1;V>t.maxTextureSize&&(F=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const H=new Float32Array(V*F*4*_),E=new hx(H,V,F,_);E.type=Wi,E.needsUpdate=!0;const O=D*4;for(let G=0;G<_;G++){const k=S[G],Y=A[G],at=C[G],tt=V*F*4*G;for(let U=0;U<k.count;U++){const I=U*O;M===!0&&(l.fromBufferAttribute(k,U),H[tt+I+0]=l.x,H[tt+I+1]=l.y,H[tt+I+2]=l.z,H[tt+I+3]=0),R===!0&&(l.fromBufferAttribute(Y,U),H[tt+I+4]=l.x,H[tt+I+5]=l.y,H[tt+I+6]=l.z,H[tt+I+7]=0),g===!0&&(l.fromBufferAttribute(at,U),H[tt+I+8]=l.x,H[tt+I+9]=l.y,H[tt+I+10]=l.z,H[tt+I+11]=at.itemSize===4?l.w:1)}}v={count:_,texture:E,size:new Ae(V,F)},s.set(p,v),p.addEventListener("dispose",et)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let M=0;for(let g=0;g<h.length;g++)M+=h[g];const R=p.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function $T(r,t,i,s,l){let c=new WeakMap;function f(h){const x=l.render.frame,_=h.geometry,v=t.get(h,_);if(c.get(v)!==x&&(t.update(v),c.set(v,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==x&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,x))),h.isSkinnedMesh){const y=h.skeleton;c.get(y)!==x&&(y.update(),c.set(y,x))}return v}function p(){c=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:f,dispose:p}}const tA={[Jv]:"LINEAR_TONE_MAPPING",[$v]:"REINHARD_TONE_MAPPING",[tx]:"CINEON_TONE_MAPPING",[Ap]:"ACES_FILMIC_TONE_MAPPING",[nx]:"AGX_TONE_MAPPING",[ix]:"NEUTRAL_TONE_MAPPING",[ex]:"CUSTOM_TONE_MAPPING"};function eA(r,t,i,s,l){const c=new Zi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Zi(t,i,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),p=new Fn;p.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ui([0,2,0,0,2,0],2));const m=new jb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Qi(p,m),x=new Ax(-1,1,1,-1,0,1);let _=null,v=null,y=!1,M,R=null,g=[],S=!1;this.setSize=function(A,C){c.setSize(A,C),f.setSize(A,C);for(let D=0;D<g.length;D++){const V=g[D];V.setSize&&V.setSize(A,C)}},this.setEffects=function(A){g=A,S=g.length>0&&g[0].isRenderPass===!0;const C=c.width,D=c.height;for(let V=0;V<g.length;V++){const F=g[V];F.setSize&&F.setSize(C,D)}},this.begin=function(A,C){if(y||A.toneMapping===Yi&&g.length===0)return!1;if(R=C,C!==null){const D=C.width,V=C.height;(c.width!==D||c.height!==V)&&this.setSize(D,V)}return S===!1&&A.setRenderTarget(c),M=A.toneMapping,A.toneMapping=Yi,!0},this.hasRenderPass=function(){return S},this.end=function(A,C){A.toneMapping=M,y=!0;let D=c,V=f;for(let F=0;F<g.length;F++){const H=g[F];if(H.enabled!==!1&&(H.render(A,V,D,C),H.needsSwap!==!1)){const E=D;D=V,V=E}}if(_!==A.outputColorSpace||v!==A.toneMapping){_=A.outputColorSpace,v=A.toneMapping,m.defines={},Le.getTransfer(_)===ke&&(m.defines.SRGB_TRANSFER="");const F=tA[v];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,A.setRenderTarget(R),A.render(h,x),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const Cx=new Pn,yp=new ml(1,1),Dx=new hx,Nx=new _b,Ux=new yx,Tv=[],Av=[],Rv=new Float32Array(16),wv=new Float32Array(9),Cv=new Float32Array(4);function io(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Tv[l];if(c===void 0&&(c=new Float32Array(l),Tv[l]=c),t!==0){s.toArray(c,0);for(let f=1,p=0;f!==t;++f)p+=i,r[f].toArray(c,p)}return c}function Sn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function yn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function wu(r,t){let i=Av[t];i===void 0&&(i=new Int32Array(t),Av[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function nA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function iA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2fv(this.addr,t),yn(i,t)}}function aA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Sn(i,t))return;r.uniform3fv(this.addr,t),yn(i,t)}}function sA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4fv(this.addr,t),yn(i,t)}}function rA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Cv.set(s),r.uniformMatrix2fv(this.addr,!1,Cv),yn(i,s)}}function oA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;wv.set(s),r.uniformMatrix3fv(this.addr,!1,wv),yn(i,s)}}function lA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Rv.set(s),r.uniformMatrix4fv(this.addr,!1,Rv),yn(i,s)}}function cA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function uA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2iv(this.addr,t),yn(i,t)}}function fA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;r.uniform3iv(this.addr,t),yn(i,t)}}function dA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4iv(this.addr,t),yn(i,t)}}function hA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function pA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2uiv(this.addr,t),yn(i,t)}}function mA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;r.uniform3uiv(this.addr,t),yn(i,t)}}function gA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4uiv(this.addr,t),yn(i,t)}}function _A(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(yp.compareFunction=i.isReversedDepthBuffer()?Op:Lp,c=yp):c=Cx,i.setTexture2D(t||c,l)}function vA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Nx,l)}function xA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Ux,l)}function SA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Dx,l)}function yA(r){switch(r){case 5126:return nA;case 35664:return iA;case 35665:return aA;case 35666:return sA;case 35674:return rA;case 35675:return oA;case 35676:return lA;case 5124:case 35670:return cA;case 35667:case 35671:return uA;case 35668:case 35672:return fA;case 35669:case 35673:return dA;case 5125:return hA;case 36294:return pA;case 36295:return mA;case 36296:return gA;case 35678:case 36198:case 36298:case 36306:case 35682:return _A;case 35679:case 36299:case 36307:return vA;case 35680:case 36300:case 36308:case 36293:return xA;case 36289:case 36303:case 36311:case 36292:return SA}}function MA(r,t){r.uniform1fv(this.addr,t)}function bA(r,t){const i=io(t,this.size,2);r.uniform2fv(this.addr,i)}function EA(r,t){const i=io(t,this.size,3);r.uniform3fv(this.addr,i)}function TA(r,t){const i=io(t,this.size,4);r.uniform4fv(this.addr,i)}function AA(r,t){const i=io(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function RA(r,t){const i=io(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function wA(r,t){const i=io(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function CA(r,t){r.uniform1iv(this.addr,t)}function DA(r,t){r.uniform2iv(this.addr,t)}function NA(r,t){r.uniform3iv(this.addr,t)}function UA(r,t){r.uniform4iv(this.addr,t)}function LA(r,t){r.uniform1uiv(this.addr,t)}function OA(r,t){r.uniform2uiv(this.addr,t)}function PA(r,t){r.uniform3uiv(this.addr,t)}function FA(r,t){r.uniform4uiv(this.addr,t)}function IA(r,t,i){const s=this.cache,l=t.length,c=wu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=yp:f=Cx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||f,c[p])}function BA(r,t,i){const s=this.cache,l=t.length,c=wu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Nx,c[f])}function zA(r,t,i){const s=this.cache,l=t.length,c=wu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Ux,c[f])}function HA(r,t,i){const s=this.cache,l=t.length,c=wu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Dx,c[f])}function GA(r){switch(r){case 5126:return MA;case 35664:return bA;case 35665:return EA;case 35666:return TA;case 35674:return AA;case 35675:return RA;case 35676:return wA;case 5124:case 35670:return CA;case 35667:case 35671:return DA;case 35668:case 35672:return NA;case 35669:case 35673:return UA;case 5125:return LA;case 36294:return OA;case 36295:return PA;case 36296:return FA;case 35678:case 36198:case 36298:case 36306:case 35682:return IA;case 35679:case 36299:case 36307:return BA;case 35680:case 36300:case 36308:case 36293:return zA;case 36289:case 36303:case 36311:case 36292:return HA}}class VA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=yA(i.type)}}class kA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=GA(i.type)}}class jA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const Mh=/(\w+)(\])?(\[|\.)?/g;function Dv(r,t){r.seq.push(t),r.map[t.id]=t}function XA(r,t,i){const s=r.name,l=s.length;for(Mh.lastIndex=0;;){const c=Mh.exec(s),f=Mh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){Dv(i,h===void 0?new VA(p,r,t):new kA(p,r,t));break}else{let _=i.map[p];_===void 0&&(_=new jA(p),Dv(i,_)),i=_}}}class pu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=t.getActiveUniform(i,f),m=t.getUniformLocation(i,p.name);XA(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Nv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const WA=37297;let qA=0;function YA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===t?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const Uv=new ye;function ZA(r){Le._getMatrix(Uv,Le.workingColorSpace,r);const t=`mat3( ${Uv.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(r)){case mu:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Lv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+YA(r.getShaderSource(t),p)}else return c}function KA(r,t){const i=ZA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const QA={[Jv]:"Linear",[$v]:"Reinhard",[tx]:"Cineon",[Ap]:"ACESFilmic",[nx]:"AgX",[ix]:"Neutral",[ex]:"Custom"};function JA(r,t){const i=QA[t];return i===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const lu=new ut;function $A(){Le.getLuminanceCoefficients(lu);const r=lu.x.toFixed(4),t=lu.y.toFixed(4),i=lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function eR(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function nR(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:p}}return i}function fl(r){return r!==""}function Ov(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mp(r){return r.replace(iR,sR)}const aR=new Map;function sR(r,t){let i=Me[t];if(i===void 0){const s=aR.get(t);if(s!==void 0)i=Me[s],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Mp(i)}const rR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fv(r){return r.replace(rR,oR)}function oR(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Iv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const lR={[cu]:"SHADOWMAP_TYPE_PCF",[ul]:"SHADOWMAP_TYPE_VSM"};function cR(r){return lR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uR={[js]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE",[Au]:"ENVMAP_TYPE_CUBE_UV"};function fR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":uR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const dR={[Qr]:"ENVMAP_MODE_REFRACTION"};function hR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":dR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pR={[Qv]:"ENVMAP_BLENDING_MULTIPLY",[ZM]:"ENVMAP_BLENDING_MIX",[KM]:"ENVMAP_BLENDING_ADD"};function mR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":pR[r.combine]||"ENVMAP_BLENDING_NONE"}function gR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function _R(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=cR(i),h=fR(i),x=hR(i),_=mR(i),v=gR(i),y=tR(i),M=eR(c),R=l.createProgram();let g,S,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(fl).join(`
`),g.length>0&&(g+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(fl).join(`
`),S.length>0&&(S+=`
`)):(g=[Iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),S=[Iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?Me.tonemapping_pars_fragment:"",i.toneMapping!==Yi?JA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,KA("linearToOutputTexel",i.outputColorSpace),$A(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(fl).join(`
`)),f=Mp(f),f=Ov(f,i),f=Pv(f,i),p=Mp(p),p=Ov(p,i),p=Pv(p,i),f=Fv(f),p=Fv(p),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,S=["#define varying in",i.glslVersion===k_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===k_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const C=A+g+f,D=A+S+p,V=Nv(l,l.VERTEX_SHADER,C),F=Nv(l,l.FRAGMENT_SHADER,D);l.attachShader(R,V),l.attachShader(R,F),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function H(G){if(r.debug.checkShaderErrors){const k=l.getProgramInfoLog(R)||"",Y=l.getShaderInfoLog(V)||"",at=l.getShaderInfoLog(F)||"",tt=k.trim(),U=Y.trim(),I=at.trim();let J=!0,ot=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,V,F);else{const xt=Lv(l,V,"vertex"),z=Lv(l,F,"fragment");Ue("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+tt+`
`+xt+`
`+z)}else tt!==""?de("WebGLProgram: Program Info Log:",tt):(U===""||I==="")&&(ot=!1);ot&&(G.diagnostics={runnable:J,programLog:tt,vertexShader:{log:U,prefix:g},fragmentShader:{log:I,prefix:S}})}l.deleteShader(V),l.deleteShader(F),E=new pu(l,R),O=nR(l,R)}let E;this.getUniforms=function(){return E===void 0&&H(this),E};let O;this.getAttributes=function(){return O===void 0&&H(this),O};let et=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return et===!1&&(et=l.getProgramParameter(R,WA)),et},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=qA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=V,this.fragmentShader=F,this}let vR=0;class xR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new SR(t),i.set(t,s)),s}}class SR{constructor(t){this.id=vR++,this.code=t,this.usedTimes=0}}function yR(r,t,i,s,l,c){const f=new px,p=new xR,m=new Set,h=[],x=new Map,_=s.logarithmicDepthBuffer;let v=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return m.add(E),E===0?"uv":`uv${E}`}function R(E,O,et,G,k){const Y=G.fog,at=k.geometry,tt=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,U=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,I=t.get(E.envMap||tt,U),J=I&&I.mapping===Au?I.image.height:null,ot=y[E.type];E.precision!==null&&(v=s.getMaxPrecision(E.precision),v!==E.precision&&de("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const xt=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,z=xt!==void 0?xt.length:0;let P=0;at.morphAttributes.position!==void 0&&(P=1),at.morphAttributes.normal!==void 0&&(P=2),at.morphAttributes.color!==void 0&&(P=3);let W,lt,gt,q;if(ot){const Ne=ki[ot];W=Ne.vertexShader,lt=Ne.fragmentShader}else W=E.vertexShader,lt=E.fragmentShader,p.update(E),gt=p.getVertexShaderID(E),q=p.getFragmentShaderID(E);const st=r.getRenderTarget(),_t=r.state.buffers.depth.getReversed(),Q=k.isInstancedMesh===!0,At=k.isBatchedMesh===!0,Dt=!!E.map,Bt=!!E.matcap,Pt=!!I,Lt=!!E.aoMap,Xt=!!E.lightMap,Wt=!!E.bumpMap,se=!!E.normalMap,j=!!E.displacementMap,ue=!!E.emissiveMap,oe=!!E.metalnessMap,le=!!E.roughnessMap,Gt=E.anisotropy>0,B=E.clearcoat>0,T=E.dispersion>0,K=E.iridescence>0,yt=E.sheen>0,Et=E.transmission>0,mt=Gt&&!!E.anisotropyMap,Vt=B&&!!E.clearcoatMap,Ut=B&&!!E.clearcoatNormalMap,qt=B&&!!E.clearcoatRoughnessMap,ee=K&&!!E.iridescenceMap,wt=K&&!!E.iridescenceThicknessMap,Ct=yt&&!!E.sheenColorMap,kt=yt&&!!E.sheenRoughnessMap,zt=!!E.specularMap,Yt=!!E.specularColorMap,ve=!!E.specularIntensityMap,it=Et&&!!E.transmissionMap,Ft=Et&&!!E.thicknessMap,Ot=!!E.gradientMap,Zt=!!E.alphaMap,Nt=E.alphaTest>0,Mt=!!E.alphaHash,Qt=!!E.extensions;let he=Yi;E.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(he=r.toneMapping);const He={shaderID:ot,shaderType:E.type,shaderName:E.name,vertexShader:W,fragmentShader:lt,defines:E.defines,customVertexShaderID:gt,customFragmentShaderID:q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:At,batchingColor:At&&k._colorsTexture!==null,instancing:Q,instancingColor:Q&&k.instanceColor!==null,instancingMorph:Q&&k.morphTexture!==null,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:$r,alphaToCoverage:!!E.alphaToCoverage,map:Dt,matcap:Bt,envMap:Pt,envMapMode:Pt&&I.mapping,envMapCubeUVHeight:J,aoMap:Lt,lightMap:Xt,bumpMap:Wt,normalMap:se,displacementMap:j,emissiveMap:ue,normalMapObjectSpace:se&&E.normalMapType===tb,normalMapTangentSpace:se&&E.normalMapType===$M,metalnessMap:oe,roughnessMap:le,anisotropy:Gt,anisotropyMap:mt,clearcoat:B,clearcoatMap:Vt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:qt,dispersion:T,iridescence:K,iridescenceMap:ee,iridescenceThicknessMap:wt,sheen:yt,sheenColorMap:Ct,sheenRoughnessMap:kt,specularMap:zt,specularColorMap:Yt,specularIntensityMap:ve,transmission:Et,transmissionMap:it,thicknessMap:Ft,gradientMap:Ot,opaque:E.transparent===!1&&E.blending===Yr&&E.alphaToCoverage===!1,alphaMap:Zt,alphaTest:Nt,alphaHash:Mt,combine:E.combine,mapUv:Dt&&M(E.map.channel),aoMapUv:Lt&&M(E.aoMap.channel),lightMapUv:Xt&&M(E.lightMap.channel),bumpMapUv:Wt&&M(E.bumpMap.channel),normalMapUv:se&&M(E.normalMap.channel),displacementMapUv:j&&M(E.displacementMap.channel),emissiveMapUv:ue&&M(E.emissiveMap.channel),metalnessMapUv:oe&&M(E.metalnessMap.channel),roughnessMapUv:le&&M(E.roughnessMap.channel),anisotropyMapUv:mt&&M(E.anisotropyMap.channel),clearcoatMapUv:Vt&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:kt&&M(E.sheenRoughnessMap.channel),specularMapUv:zt&&M(E.specularMap.channel),specularColorMapUv:Yt&&M(E.specularColorMap.channel),specularIntensityMapUv:ve&&M(E.specularIntensityMap.channel),transmissionMapUv:it&&M(E.transmissionMap.channel),thicknessMapUv:Ft&&M(E.thicknessMap.channel),alphaMapUv:Zt&&M(E.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(se||Gt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!at.attributes.uv&&(Dt||Zt),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||at.attributes.normal===void 0&&se===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:_t,skinning:k.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:P,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&et.length>0,shadowMapType:r.shadowMap.type,toneMapping:he,decodeVideoTexture:Dt&&E.map.isVideoTexture===!0&&Le.getTransfer(E.map.colorSpace)===ke,decodeVideoTextureEmissive:ue&&E.emissiveMap.isVideoTexture===!0&&Le.getTransfer(E.emissiveMap.colorSpace)===ke,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ji,flipSided:E.side===Kn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Qt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&E.extensions.multiDraw===!0||At)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return He.vertexUv1s=m.has(1),He.vertexUv2s=m.has(2),He.vertexUv3s=m.has(3),m.clear(),He}function g(E){const O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(const et in E.defines)O.push(et),O.push(E.defines[et]);return E.isRawShaderMaterial===!1&&(S(O,E),A(O,E),O.push(r.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function S(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function A(E,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),E.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),E.push(f.mask)}function C(E){const O=y[E.type];let et;if(O){const G=ki[O];et=Gb.clone(G.uniforms)}else et=E.uniforms;return et}function D(E,O){let et=x.get(O);return et!==void 0?++et.usedTimes:(et=new _R(r,O,E,l),h.push(et),x.set(O,et)),et}function V(E){if(--E.usedTimes===0){const O=h.indexOf(E);h[O]=h[h.length-1],h.pop(),x.delete(E.cacheKey),E.destroy()}}function F(E){p.remove(E)}function H(){p.dispose()}return{getParameters:R,getProgramCacheKey:g,getUniforms:C,acquireProgram:D,releaseProgram:V,releaseShaderCache:F,programs:h,dispose:H}}function MR(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function bR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Bv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function zv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function p(v,y,M,R,g,S){let A=r[t];return A===void 0?(A={id:v.id,object:v,geometry:y,material:M,materialVariant:f(v),groupOrder:R,renderOrder:v.renderOrder,z:g,group:S},r[t]=A):(A.id=v.id,A.object=v,A.geometry=y,A.material=M,A.materialVariant=f(v),A.groupOrder=R,A.renderOrder=v.renderOrder,A.z=g,A.group=S),t++,A}function m(v,y,M,R,g,S){const A=p(v,y,M,R,g,S);M.transmission>0?s.push(A):M.transparent===!0?l.push(A):i.push(A)}function h(v,y,M,R,g,S){const A=p(v,y,M,R,g,S);M.transmission>0?s.unshift(A):M.transparent===!0?l.unshift(A):i.unshift(A)}function x(v,y){i.length>1&&i.sort(v||bR),s.length>1&&s.sort(y||Bv),l.length>1&&l.sort(y||Bv)}function _(){for(let v=t,y=r.length;v<y;v++){const M=r[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:_,sort:x}}function ER(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new zv,r.set(s,[f])):l>=c.length?(f=new zv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function TR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ut,color:new be};break;case"SpotLight":i={position:new ut,direction:new ut,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ut,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ut,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return r[t.id]=i,i}}}function AR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let RR=0;function wR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function CR(r){const t=new TR,i=AR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new ut);const l=new ut,c=new Je,f=new Je;function p(h){let x=0,_=0,v=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let y=0,M=0,R=0,g=0,S=0,A=0,C=0,D=0,V=0,F=0,H=0;h.sort(wR);for(let O=0,et=h.length;O<et;O++){const G=h[O],k=G.color,Y=G.intensity,at=G.distance;let tt=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Jr?tt=G.shadow.map.texture:tt=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)x+=k.r*Y,_+=k.g*Y,v+=k.b*Y;else if(G.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(G.sh.coefficients[U],Y);H++}else if(G.isDirectionalLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const I=G.shadow,J=i.get(G);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,s.directionalShadow[y]=J,s.directionalShadowMap[y]=tt,s.directionalShadowMatrix[y]=G.shadow.matrix,A++}s.directional[y]=U,y++}else if(G.isSpotLight){const U=t.get(G);U.position.setFromMatrixPosition(G.matrixWorld),U.color.copy(k).multiplyScalar(Y),U.distance=at,U.coneCos=Math.cos(G.angle),U.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),U.decay=G.decay,s.spot[R]=U;const I=G.shadow;if(G.map&&(s.spotLightMap[V]=G.map,V++,I.updateMatrices(G),G.castShadow&&F++),s.spotLightMatrix[R]=I.matrix,G.castShadow){const J=i.get(G);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,s.spotShadow[R]=J,s.spotShadowMap[R]=tt,D++}R++}else if(G.isRectAreaLight){const U=t.get(G);U.color.copy(k).multiplyScalar(Y),U.halfWidth.set(G.width*.5,0,0),U.halfHeight.set(0,G.height*.5,0),s.rectArea[g]=U,g++}else if(G.isPointLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),U.distance=G.distance,U.decay=G.decay,G.castShadow){const I=G.shadow,J=i.get(G);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,J.shadowCameraNear=I.camera.near,J.shadowCameraFar=I.camera.far,s.pointShadow[M]=J,s.pointShadowMap[M]=tt,s.pointShadowMatrix[M]=G.shadow.matrix,C++}s.point[M]=U,M++}else if(G.isHemisphereLight){const U=t.get(G);U.skyColor.copy(G.color).multiplyScalar(Y),U.groundColor.copy(G.groundColor).multiplyScalar(Y),s.hemi[S]=U,S++}}g>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=jt.LTC_FLOAT_1,s.rectAreaLTC2=jt.LTC_FLOAT_2):(s.rectAreaLTC1=jt.LTC_HALF_1,s.rectAreaLTC2=jt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=_,s.ambient[2]=v;const E=s.hash;(E.directionalLength!==y||E.pointLength!==M||E.spotLength!==R||E.rectAreaLength!==g||E.hemiLength!==S||E.numDirectionalShadows!==A||E.numPointShadows!==C||E.numSpotShadows!==D||E.numSpotMaps!==V||E.numLightProbes!==H)&&(s.directional.length=y,s.spot.length=R,s.rectArea.length=g,s.point.length=M,s.hemi.length=S,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=D+V-F,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=H,E.directionalLength=y,E.pointLength=M,E.spotLength=R,E.rectAreaLength=g,E.hemiLength=S,E.numDirectionalShadows=A,E.numPointShadows=C,E.numSpotShadows=D,E.numSpotMaps=V,E.numLightProbes=H,s.version=RR++)}function m(h,x){let _=0,v=0,y=0,M=0,R=0;const g=x.matrixWorldInverse;for(let S=0,A=h.length;S<A;S++){const C=h[S];if(C.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(g),_++}else if(C.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(g),D.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(g),y++}else if(C.isRectAreaLight){const D=s.rectArea[M];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(g),f.identity(),c.copy(C.matrixWorld),c.premultiply(g),f.extractRotation(c),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),M++}else if(C.isPointLight){const D=s.point[v];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(g),v++}else if(C.isHemisphereLight){const D=s.hemi[R];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(g),R++}}}return{setup:p,setupView:m,state:s}}function Hv(r){const t=new CR(r),i=[],s=[];function l(x){h.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function f(x){s.push(x)}function p(){t.setup(i)}function m(x){t.setupView(i,x)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:f}}function DR(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let p;return f===void 0?(p=new Hv(r),t.set(l,[p])):c>=f.length?(p=new Hv(r),f.push(p)):p=f[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const NR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UR=`uniform sampler2D shadow_pass;
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
}`,LR=[new ut(1,0,0),new ut(-1,0,0),new ut(0,1,0),new ut(0,-1,0),new ut(0,0,1),new ut(0,0,-1)],OR=[new ut(0,-1,0),new ut(0,-1,0),new ut(0,0,1),new ut(0,0,-1),new ut(0,-1,0),new ut(0,-1,0)],Gv=new Je,ol=new ut,bh=new ut;function PR(r,t,i){let s=new zp;const l=new Ae,c=new Ae,f=new sn,p=new Xb,m=new Wb,h={},x=i.maxTextureSize,_={[ds]:Kn,[Kn]:ds,[ji]:ji},v=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:NR,fragmentShader:UR}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const M=new Fn;M.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Qi(M,v),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let S=this.type;this.render=function(F,H,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||F.length===0)return;this.type===DM&&(de("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=cu);const O=r.getRenderTarget(),et=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Ea),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const Y=S!==this.type;Y&&H.traverse(function(at){at.material&&(Array.isArray(at.material)?at.material.forEach(tt=>tt.needsUpdate=!0):at.material.needsUpdate=!0)});for(let at=0,tt=F.length;at<tt;at++){const U=F[at],I=U.shadow;if(I===void 0){de("WebGLShadowMap:",U,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const J=I.getFrameExtents();l.multiply(J),c.copy(I.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/J.x),l.x=c.x*J.x,I.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/J.y),l.y=c.y*J.y,I.mapSize.y=c.y));const ot=r.state.buffers.depth.getReversed();if(I.camera._reversedDepth=ot,I.map===null||Y===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===ul){if(U.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Zi(l.x,l.y,{format:Jr,type:Aa,minFilter:On,magFilter:On,generateMipmaps:!1}),I.map.texture.name=U.name+".shadowMap",I.map.depthTexture=new ml(l.x,l.y,Wi),I.map.depthTexture.name=U.name+".shadowMapDepth",I.map.depthTexture.format=Ra,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=wn,I.map.depthTexture.magFilter=wn}else U.isPointLight?(I.map=new wx(l.x),I.map.depthTexture=new zb(l.x,Ki)):(I.map=new Zi(l.x,l.y),I.map.depthTexture=new ml(l.x,l.y,Ki)),I.map.depthTexture.name=U.name+".shadowMap",I.map.depthTexture.format=Ra,this.type===cu?(I.map.depthTexture.compareFunction=ot?Op:Lp,I.map.depthTexture.minFilter=On,I.map.depthTexture.magFilter=On):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=wn,I.map.depthTexture.magFilter=wn);I.camera.updateProjectionMatrix()}const xt=I.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<xt;z++){if(I.map.isWebGLCubeRenderTarget)r.setRenderTarget(I.map,z),r.clear();else{z===0&&(r.setRenderTarget(I.map),r.clear());const P=I.getViewport(z);f.set(c.x*P.x,c.y*P.y,c.x*P.z,c.y*P.w),k.viewport(f)}if(U.isPointLight){const P=I.camera,W=I.matrix,lt=U.distance||P.far;lt!==P.far&&(P.far=lt,P.updateProjectionMatrix()),ol.setFromMatrixPosition(U.matrixWorld),P.position.copy(ol),bh.copy(P.position),bh.add(LR[z]),P.up.copy(OR[z]),P.lookAt(bh),P.updateMatrixWorld(),W.makeTranslation(-ol.x,-ol.y,-ol.z),Gv.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Gv,P.coordinateSystem,P.reversedDepth)}else I.updateMatrices(U);s=I.getFrustum(),D(H,E,I.camera,U,this.type)}I.isPointLightShadow!==!0&&this.type===ul&&A(I,E),I.needsUpdate=!1}S=this.type,g.needsUpdate=!1,r.setRenderTarget(O,et,G)};function A(F,H){const E=t.update(R);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Zi(l.x,l.y,{format:Jr,type:Aa})),v.uniforms.shadow_pass.value=F.map.depthTexture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(H,null,E,v,R,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(H,null,E,y,R,null)}function C(F,H,E,O){let et=null;const G=E.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)et=G;else if(et=E.isPointLight===!0?m:p,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const k=et.uuid,Y=H.uuid;let at=h[k];at===void 0&&(at={},h[k]=at);let tt=at[Y];tt===void 0&&(tt=et.clone(),at[Y]=tt,H.addEventListener("dispose",V)),et=tt}if(et.visible=H.visible,et.wireframe=H.wireframe,O===ul?et.side=H.shadowSide!==null?H.shadowSide:H.side:et.side=H.shadowSide!==null?H.shadowSide:_[H.side],et.alphaMap=H.alphaMap,et.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,et.map=H.map,et.clipShadows=H.clipShadows,et.clippingPlanes=H.clippingPlanes,et.clipIntersection=H.clipIntersection,et.displacementMap=H.displacementMap,et.displacementScale=H.displacementScale,et.displacementBias=H.displacementBias,et.wireframeLinewidth=H.wireframeLinewidth,et.linewidth=H.linewidth,E.isPointLight===!0&&et.isMeshDistanceMaterial===!0){const k=r.properties.get(et);k.light=E}return et}function D(F,H,E,O,et){if(F.visible===!1)return;if(F.layers.test(H.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&et===ul)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,F.matrixWorld);const Y=t.update(F),at=F.material;if(Array.isArray(at)){const tt=Y.groups;for(let U=0,I=tt.length;U<I;U++){const J=tt[U],ot=at[J.materialIndex];if(ot&&ot.visible){const xt=C(F,ot,O,et);F.onBeforeShadow(r,F,H,E,Y,xt,J),r.renderBufferDirect(E,null,Y,xt,F,J),F.onAfterShadow(r,F,H,E,Y,xt,J)}}}else if(at.visible){const tt=C(F,at,O,et);F.onBeforeShadow(r,F,H,E,Y,tt,null),r.renderBufferDirect(E,null,Y,tt,F,null),F.onAfterShadow(r,F,H,E,Y,tt,null)}}const k=F.children;for(let Y=0,at=k.length;Y<at;Y++)D(k[Y],H,E,O,et)}function V(F){F.target.removeEventListener("dispose",V);for(const E in h){const O=h[E],et=F.target.uuid;et in O&&(O[et].dispose(),delete O[et])}}}function FR(r,t){function i(){let it=!1;const Ft=new sn;let Ot=null;const Zt=new sn(0,0,0,0);return{setMask:function(Nt){Ot!==Nt&&!it&&(r.colorMask(Nt,Nt,Nt,Nt),Ot=Nt)},setLocked:function(Nt){it=Nt},setClear:function(Nt,Mt,Qt,he,He){He===!0&&(Nt*=he,Mt*=he,Qt*=he),Ft.set(Nt,Mt,Qt,he),Zt.equals(Ft)===!1&&(r.clearColor(Nt,Mt,Qt,he),Zt.copy(Ft))},reset:function(){it=!1,Ot=null,Zt.set(-1,0,0,0)}}}function s(){let it=!1,Ft=!1,Ot=null,Zt=null,Nt=null;return{setReversed:function(Mt){if(Ft!==Mt){const Qt=t.get("EXT_clip_control");Mt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),Ft=Mt;const he=Nt;Nt=null,this.setClear(he)}},getReversed:function(){return Ft},setTest:function(Mt){Mt?st(r.DEPTH_TEST):_t(r.DEPTH_TEST)},setMask:function(Mt){Ot!==Mt&&!it&&(r.depthMask(Mt),Ot=Mt)},setFunc:function(Mt){if(Ft&&(Mt=ub[Mt]),Zt!==Mt){switch(Mt){case Dh:r.depthFunc(r.NEVER);break;case Nh:r.depthFunc(r.ALWAYS);break;case Uh:r.depthFunc(r.LESS);break;case Kr:r.depthFunc(r.LEQUAL);break;case Lh:r.depthFunc(r.EQUAL);break;case Oh:r.depthFunc(r.GEQUAL);break;case Ph:r.depthFunc(r.GREATER);break;case Fh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Zt=Mt}},setLocked:function(Mt){it=Mt},setClear:function(Mt){Nt!==Mt&&(Nt=Mt,Ft&&(Mt=1-Mt),r.clearDepth(Mt))},reset:function(){it=!1,Ot=null,Zt=null,Nt=null,Ft=!1}}}function l(){let it=!1,Ft=null,Ot=null,Zt=null,Nt=null,Mt=null,Qt=null,he=null,He=null;return{setTest:function(Ne){it||(Ne?st(r.STENCIL_TEST):_t(r.STENCIL_TEST))},setMask:function(Ne){Ft!==Ne&&!it&&(r.stencilMask(Ne),Ft=Ne)},setFunc:function(Ne,In,Mi){(Ot!==Ne||Zt!==In||Nt!==Mi)&&(r.stencilFunc(Ne,In,Mi),Ot=Ne,Zt=In,Nt=Mi)},setOp:function(Ne,In,Mi){(Mt!==Ne||Qt!==In||he!==Mi)&&(r.stencilOp(Ne,In,Mi),Mt=Ne,Qt=In,he=Mi)},setLocked:function(Ne){it=Ne},setClear:function(Ne){He!==Ne&&(r.clearStencil(Ne),He=Ne)},reset:function(){it=!1,Ft=null,Ot=null,Zt=null,Nt=null,Mt=null,Qt=null,he=null,He=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,h=new WeakMap;let x={},_={},v=new WeakMap,y=[],M=null,R=!1,g=null,S=null,A=null,C=null,D=null,V=null,F=null,H=new be(0,0,0),E=0,O=!1,et=null,G=null,k=null,Y=null,at=null;const tt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,I=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(J)[1]),U=I>=1):J.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),U=I>=2);let ot=null,xt={};const z=r.getParameter(r.SCISSOR_BOX),P=r.getParameter(r.VIEWPORT),W=new sn().fromArray(z),lt=new sn().fromArray(P);function gt(it,Ft,Ot,Zt){const Nt=new Uint8Array(4),Mt=r.createTexture();r.bindTexture(it,Mt),r.texParameteri(it,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(it,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qt=0;Qt<Ot;Qt++)it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?r.texImage3D(Ft,0,r.RGBA,1,1,Zt,0,r.RGBA,r.UNSIGNED_BYTE,Nt):r.texImage2D(Ft+Qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Nt);return Mt}const q={};q[r.TEXTURE_2D]=gt(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),st(r.DEPTH_TEST),f.setFunc(Kr),Wt(!1),se(B_),st(r.CULL_FACE),Lt(Ea);function st(it){x[it]!==!0&&(r.enable(it),x[it]=!0)}function _t(it){x[it]!==!1&&(r.disable(it),x[it]=!1)}function Q(it,Ft){return _[it]!==Ft?(r.bindFramebuffer(it,Ft),_[it]=Ft,it===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ft),it===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ft),!0):!1}function At(it,Ft){let Ot=y,Zt=!1;if(it){Ot=v.get(Ft),Ot===void 0&&(Ot=[],v.set(Ft,Ot));const Nt=it.textures;if(Ot.length!==Nt.length||Ot[0]!==r.COLOR_ATTACHMENT0){for(let Mt=0,Qt=Nt.length;Mt<Qt;Mt++)Ot[Mt]=r.COLOR_ATTACHMENT0+Mt;Ot.length=Nt.length,Zt=!0}}else Ot[0]!==r.BACK&&(Ot[0]=r.BACK,Zt=!0);Zt&&r.drawBuffers(Ot)}function Dt(it){return M!==it?(r.useProgram(it),M=it,!0):!1}const Bt={[zs]:r.FUNC_ADD,[UM]:r.FUNC_SUBTRACT,[LM]:r.FUNC_REVERSE_SUBTRACT};Bt[OM]=r.MIN,Bt[PM]=r.MAX;const Pt={[FM]:r.ZERO,[IM]:r.ONE,[BM]:r.SRC_COLOR,[wh]:r.SRC_ALPHA,[jM]:r.SRC_ALPHA_SATURATE,[VM]:r.DST_COLOR,[HM]:r.DST_ALPHA,[zM]:r.ONE_MINUS_SRC_COLOR,[Ch]:r.ONE_MINUS_SRC_ALPHA,[kM]:r.ONE_MINUS_DST_COLOR,[GM]:r.ONE_MINUS_DST_ALPHA,[XM]:r.CONSTANT_COLOR,[WM]:r.ONE_MINUS_CONSTANT_COLOR,[qM]:r.CONSTANT_ALPHA,[YM]:r.ONE_MINUS_CONSTANT_ALPHA};function Lt(it,Ft,Ot,Zt,Nt,Mt,Qt,he,He,Ne){if(it===Ea){R===!0&&(_t(r.BLEND),R=!1);return}if(R===!1&&(st(r.BLEND),R=!0),it!==NM){if(it!==g||Ne!==O){if((S!==zs||D!==zs)&&(r.blendEquation(r.FUNC_ADD),S=zs,D=zs),Ne)switch(it){case Yr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case z_:r.blendFunc(r.ONE,r.ONE);break;case H_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case G_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ue("WebGLState: Invalid blending: ",it);break}else switch(it){case Yr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case z_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case H_:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case G_:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",it);break}A=null,C=null,V=null,F=null,H.set(0,0,0),E=0,g=it,O=Ne}return}Nt=Nt||Ft,Mt=Mt||Ot,Qt=Qt||Zt,(Ft!==S||Nt!==D)&&(r.blendEquationSeparate(Bt[Ft],Bt[Nt]),S=Ft,D=Nt),(Ot!==A||Zt!==C||Mt!==V||Qt!==F)&&(r.blendFuncSeparate(Pt[Ot],Pt[Zt],Pt[Mt],Pt[Qt]),A=Ot,C=Zt,V=Mt,F=Qt),(he.equals(H)===!1||He!==E)&&(r.blendColor(he.r,he.g,he.b,He),H.copy(he),E=He),g=it,O=!1}function Xt(it,Ft){it.side===ji?_t(r.CULL_FACE):st(r.CULL_FACE);let Ot=it.side===Kn;Ft&&(Ot=!Ot),Wt(Ot),it.blending===Yr&&it.transparent===!1?Lt(Ea):Lt(it.blending,it.blendEquation,it.blendSrc,it.blendDst,it.blendEquationAlpha,it.blendSrcAlpha,it.blendDstAlpha,it.blendColor,it.blendAlpha,it.premultipliedAlpha),f.setFunc(it.depthFunc),f.setTest(it.depthTest),f.setMask(it.depthWrite),c.setMask(it.colorWrite);const Zt=it.stencilWrite;p.setTest(Zt),Zt&&(p.setMask(it.stencilWriteMask),p.setFunc(it.stencilFunc,it.stencilRef,it.stencilFuncMask),p.setOp(it.stencilFail,it.stencilZFail,it.stencilZPass)),ue(it.polygonOffset,it.polygonOffsetFactor,it.polygonOffsetUnits),it.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):_t(r.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(it){et!==it&&(it?r.frontFace(r.CW):r.frontFace(r.CCW),et=it)}function se(it){it!==wM?(st(r.CULL_FACE),it!==G&&(it===B_?r.cullFace(r.BACK):it===CM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_t(r.CULL_FACE),G=it}function j(it){it!==k&&(U&&r.lineWidth(it),k=it)}function ue(it,Ft,Ot){it?(st(r.POLYGON_OFFSET_FILL),(Y!==Ft||at!==Ot)&&(Y=Ft,at=Ot,f.getReversed()&&(Ft=-Ft),r.polygonOffset(Ft,Ot))):_t(r.POLYGON_OFFSET_FILL)}function oe(it){it?st(r.SCISSOR_TEST):_t(r.SCISSOR_TEST)}function le(it){it===void 0&&(it=r.TEXTURE0+tt-1),ot!==it&&(r.activeTexture(it),ot=it)}function Gt(it,Ft,Ot){Ot===void 0&&(ot===null?Ot=r.TEXTURE0+tt-1:Ot=ot);let Zt=xt[Ot];Zt===void 0&&(Zt={type:void 0,texture:void 0},xt[Ot]=Zt),(Zt.type!==it||Zt.texture!==Ft)&&(ot!==Ot&&(r.activeTexture(Ot),ot=Ot),r.bindTexture(it,Ft||q[it]),Zt.type=it,Zt.texture=Ft)}function B(){const it=xt[ot];it!==void 0&&it.type!==void 0&&(r.bindTexture(it.type,null),it.type=void 0,it.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(it){Ue("WebGLState:",it)}}function K(){try{r.compressedTexImage3D(...arguments)}catch(it){Ue("WebGLState:",it)}}function yt(){try{r.texSubImage2D(...arguments)}catch(it){Ue("WebGLState:",it)}}function Et(){try{r.texSubImage3D(...arguments)}catch(it){Ue("WebGLState:",it)}}function mt(){try{r.compressedTexSubImage2D(...arguments)}catch(it){Ue("WebGLState:",it)}}function Vt(){try{r.compressedTexSubImage3D(...arguments)}catch(it){Ue("WebGLState:",it)}}function Ut(){try{r.texStorage2D(...arguments)}catch(it){Ue("WebGLState:",it)}}function qt(){try{r.texStorage3D(...arguments)}catch(it){Ue("WebGLState:",it)}}function ee(){try{r.texImage2D(...arguments)}catch(it){Ue("WebGLState:",it)}}function wt(){try{r.texImage3D(...arguments)}catch(it){Ue("WebGLState:",it)}}function Ct(it){W.equals(it)===!1&&(r.scissor(it.x,it.y,it.z,it.w),W.copy(it))}function kt(it){lt.equals(it)===!1&&(r.viewport(it.x,it.y,it.z,it.w),lt.copy(it))}function zt(it,Ft){let Ot=h.get(Ft);Ot===void 0&&(Ot=new WeakMap,h.set(Ft,Ot));let Zt=Ot.get(it);Zt===void 0&&(Zt=r.getUniformBlockIndex(Ft,it.name),Ot.set(it,Zt))}function Yt(it,Ft){const Zt=h.get(Ft).get(it);m.get(Ft)!==Zt&&(r.uniformBlockBinding(Ft,Zt,it.__bindingPointIndex),m.set(Ft,Zt))}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),x={},ot=null,xt={},_={},v=new WeakMap,y=[],M=null,R=!1,g=null,S=null,A=null,C=null,D=null,V=null,F=null,H=new be(0,0,0),E=0,O=!1,et=null,G=null,k=null,Y=null,at=null,W.set(0,0,r.canvas.width,r.canvas.height),lt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:st,disable:_t,bindFramebuffer:Q,drawBuffers:At,useProgram:Dt,setBlending:Lt,setMaterial:Xt,setFlipSided:Wt,setCullFace:se,setLineWidth:j,setPolygonOffset:ue,setScissorTest:oe,activeTexture:le,bindTexture:Gt,unbindTexture:B,compressedTexImage2D:T,compressedTexImage3D:K,texImage2D:ee,texImage3D:wt,updateUBOMapping:zt,uniformBlockBinding:Yt,texStorage2D:Ut,texStorage3D:qt,texSubImage2D:yt,texSubImage3D:Et,compressedTexSubImage2D:mt,compressedTexSubImage3D:Vt,scissor:Ct,viewport:kt,reset:ve}}function IR(r,t,i,s,l,c,f){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ae,x=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(B,T){return y?new OffscreenCanvas(B,T):gu("canvas")}function R(B,T,K){let yt=1;const Et=Gt(B);if((Et.width>K||Et.height>K)&&(yt=K/Math.max(Et.width,Et.height)),yt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const mt=Math.floor(yt*Et.width),Vt=Math.floor(yt*Et.height);_===void 0&&(_=M(mt,Vt));const Ut=T?M(mt,Vt):_;return Ut.width=mt,Ut.height=Vt,Ut.getContext("2d").drawImage(B,0,0,mt,Vt),de("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+mt+"x"+Vt+")."),Ut}else return"data"in B&&de("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),B;return B}function g(B){return B.generateMipmaps}function S(B){r.generateMipmap(B)}function A(B){return B.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?r.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(B,T,K,yt,Et=!1){if(B!==null){if(r[B]!==void 0)return r[B];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let mt=T;if(T===r.RED&&(K===r.FLOAT&&(mt=r.R32F),K===r.HALF_FLOAT&&(mt=r.R16F),K===r.UNSIGNED_BYTE&&(mt=r.R8)),T===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(mt=r.R8UI),K===r.UNSIGNED_SHORT&&(mt=r.R16UI),K===r.UNSIGNED_INT&&(mt=r.R32UI),K===r.BYTE&&(mt=r.R8I),K===r.SHORT&&(mt=r.R16I),K===r.INT&&(mt=r.R32I)),T===r.RG&&(K===r.FLOAT&&(mt=r.RG32F),K===r.HALF_FLOAT&&(mt=r.RG16F),K===r.UNSIGNED_BYTE&&(mt=r.RG8)),T===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(mt=r.RG8UI),K===r.UNSIGNED_SHORT&&(mt=r.RG16UI),K===r.UNSIGNED_INT&&(mt=r.RG32UI),K===r.BYTE&&(mt=r.RG8I),K===r.SHORT&&(mt=r.RG16I),K===r.INT&&(mt=r.RG32I)),T===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(mt=r.RGB8UI),K===r.UNSIGNED_SHORT&&(mt=r.RGB16UI),K===r.UNSIGNED_INT&&(mt=r.RGB32UI),K===r.BYTE&&(mt=r.RGB8I),K===r.SHORT&&(mt=r.RGB16I),K===r.INT&&(mt=r.RGB32I)),T===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(mt=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(mt=r.RGBA16UI),K===r.UNSIGNED_INT&&(mt=r.RGBA32UI),K===r.BYTE&&(mt=r.RGBA8I),K===r.SHORT&&(mt=r.RGBA16I),K===r.INT&&(mt=r.RGBA32I)),T===r.RGB&&(K===r.UNSIGNED_INT_5_9_9_9_REV&&(mt=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(mt=r.R11F_G11F_B10F)),T===r.RGBA){const Vt=Et?mu:Le.getTransfer(yt);K===r.FLOAT&&(mt=r.RGBA32F),K===r.HALF_FLOAT&&(mt=r.RGBA16F),K===r.UNSIGNED_BYTE&&(mt=Vt===ke?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(mt=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(mt=r.RGB5_A1)}return(mt===r.R16F||mt===r.R32F||mt===r.RG16F||mt===r.RG32F||mt===r.RGBA16F||mt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function D(B,T){let K;return B?T===null||T===Ki||T===hl?K=r.DEPTH24_STENCIL8:T===Wi?K=r.DEPTH32F_STENCIL8:T===dl&&(K=r.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ki||T===hl?K=r.DEPTH_COMPONENT24:T===Wi?K=r.DEPTH_COMPONENT32F:T===dl&&(K=r.DEPTH_COMPONENT16),K}function V(B,T){return g(B)===!0||B.isFramebufferTexture&&B.minFilter!==wn&&B.minFilter!==On?Math.log2(Math.max(T.width,T.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?T.mipmaps.length:1}function F(B){const T=B.target;T.removeEventListener("dispose",F),E(T),T.isVideoTexture&&x.delete(T)}function H(B){const T=B.target;T.removeEventListener("dispose",H),et(T)}function E(B){const T=s.get(B);if(T.__webglInit===void 0)return;const K=B.source,yt=v.get(K);if(yt){const Et=yt[T.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&O(B),Object.keys(yt).length===0&&v.delete(K)}s.remove(B)}function O(B){const T=s.get(B);r.deleteTexture(T.__webglTexture);const K=B.source,yt=v.get(K);delete yt[T.__cacheKey],f.memory.textures--}function et(B){const T=s.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),s.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(T.__webglFramebuffer[yt]))for(let Et=0;Et<T.__webglFramebuffer[yt].length;Et++)r.deleteFramebuffer(T.__webglFramebuffer[yt][Et]);else r.deleteFramebuffer(T.__webglFramebuffer[yt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[yt])}else{if(Array.isArray(T.__webglFramebuffer))for(let yt=0;yt<T.__webglFramebuffer.length;yt++)r.deleteFramebuffer(T.__webglFramebuffer[yt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let yt=0;yt<T.__webglColorRenderbuffer.length;yt++)T.__webglColorRenderbuffer[yt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[yt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=B.textures;for(let yt=0,Et=K.length;yt<Et;yt++){const mt=s.get(K[yt]);mt.__webglTexture&&(r.deleteTexture(mt.__webglTexture),f.memory.textures--),s.remove(K[yt])}s.remove(B)}let G=0;function k(){G=0}function Y(){const B=G;return B>=l.maxTextures&&de("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),G+=1,B}function at(B){const T=[];return T.push(B.wrapS),T.push(B.wrapT),T.push(B.wrapR||0),T.push(B.magFilter),T.push(B.minFilter),T.push(B.anisotropy),T.push(B.internalFormat),T.push(B.format),T.push(B.type),T.push(B.generateMipmaps),T.push(B.premultiplyAlpha),T.push(B.flipY),T.push(B.unpackAlignment),T.push(B.colorSpace),T.join()}function tt(B,T){const K=s.get(B);if(B.isVideoTexture&&oe(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&K.__version!==B.version){const yt=B.image;if(yt===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{q(K,B,T);return}}else B.isExternalTexture&&(K.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+T)}function U(B,T){const K=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&K.__version!==B.version){q(K,B,T);return}else B.isExternalTexture&&(K.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+T)}function I(B,T){const K=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&K.__version!==B.version){q(K,B,T);return}i.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+T)}function J(B,T){const K=s.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&K.__version!==B.version){st(K,B,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+T)}const ot={[Ih]:r.REPEAT,[ba]:r.CLAMP_TO_EDGE,[Bh]:r.MIRRORED_REPEAT},xt={[wn]:r.NEAREST,[QM]:r.NEAREST_MIPMAP_NEAREST,[Lc]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[jd]:r.LINEAR_MIPMAP_NEAREST,[Gs]:r.LINEAR_MIPMAP_LINEAR},z={[eb]:r.NEVER,[rb]:r.ALWAYS,[nb]:r.LESS,[Lp]:r.LEQUAL,[ib]:r.EQUAL,[Op]:r.GEQUAL,[ab]:r.GREATER,[sb]:r.NOTEQUAL};function P(B,T){if(T.type===Wi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===On||T.magFilter===jd||T.magFilter===Lc||T.magFilter===Gs||T.minFilter===On||T.minFilter===jd||T.minFilter===Lc||T.minFilter===Gs)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(B,r.TEXTURE_WRAP_S,ot[T.wrapS]),r.texParameteri(B,r.TEXTURE_WRAP_T,ot[T.wrapT]),(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)&&r.texParameteri(B,r.TEXTURE_WRAP_R,ot[T.wrapR]),r.texParameteri(B,r.TEXTURE_MAG_FILTER,xt[T.magFilter]),r.texParameteri(B,r.TEXTURE_MIN_FILTER,xt[T.minFilter]),T.compareFunction&&(r.texParameteri(B,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(B,r.TEXTURE_COMPARE_FUNC,z[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===wn||T.minFilter!==Lc&&T.minFilter!==Gs||T.type===Wi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");r.texParameterf(B,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function W(B,T){let K=!1;B.__webglInit===void 0&&(B.__webglInit=!0,T.addEventListener("dispose",F));const yt=T.source;let Et=v.get(yt);Et===void 0&&(Et={},v.set(yt,Et));const mt=at(T);if(mt!==B.__cacheKey){Et[mt]===void 0&&(Et[mt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,K=!0),Et[mt].usedTimes++;const Vt=Et[B.__cacheKey];Vt!==void 0&&(Et[B.__cacheKey].usedTimes--,Vt.usedTimes===0&&O(T)),B.__cacheKey=mt,B.__webglTexture=Et[mt].texture}return K}function lt(B,T,K){return Math.floor(Math.floor(B/K)/T)}function gt(B,T,K,yt){const mt=B.updateRanges;if(mt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,K,yt,T.data);else{mt.sort((wt,Ct)=>wt.start-Ct.start);let Vt=0;for(let wt=1;wt<mt.length;wt++){const Ct=mt[Vt],kt=mt[wt],zt=Ct.start+Ct.count,Yt=lt(kt.start,T.width,4),ve=lt(Ct.start,T.width,4);kt.start<=zt+1&&Yt===ve&&lt(kt.start+kt.count-1,T.width,4)===Yt?Ct.count=Math.max(Ct.count,kt.start+kt.count-Ct.start):(++Vt,mt[Vt]=kt)}mt.length=Vt+1;const Ut=r.getParameter(r.UNPACK_ROW_LENGTH),qt=r.getParameter(r.UNPACK_SKIP_PIXELS),ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let wt=0,Ct=mt.length;wt<Ct;wt++){const kt=mt[wt],zt=Math.floor(kt.start/4),Yt=Math.ceil(kt.count/4),ve=zt%T.width,it=Math.floor(zt/T.width),Ft=Yt,Ot=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,it),i.texSubImage2D(r.TEXTURE_2D,0,ve,it,Ft,Ot,K,yt,T.data)}B.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ut),r.pixelStorei(r.UNPACK_SKIP_PIXELS,qt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ee)}}function q(B,T,K){let yt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(yt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(yt=r.TEXTURE_3D);const Et=W(B,T),mt=T.source;i.bindTexture(yt,B.__webglTexture,r.TEXTURE0+K);const Vt=s.get(mt);if(mt.version!==Vt.__version||Et===!0){i.activeTexture(r.TEXTURE0+K);const Ut=Le.getPrimaries(Le.workingColorSpace),qt=T.colorSpace===cs?null:Le.getPrimaries(T.colorSpace),ee=T.colorSpace===cs||Ut===qt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let wt=R(T.image,!1,l.maxTextureSize);wt=le(T,wt);const Ct=c.convert(T.format,T.colorSpace),kt=c.convert(T.type);let zt=C(T.internalFormat,Ct,kt,T.colorSpace,T.isVideoTexture);P(yt,T);let Yt;const ve=T.mipmaps,it=T.isVideoTexture!==!0,Ft=Vt.__version===void 0||Et===!0,Ot=mt.dataReady,Zt=V(T,wt);if(T.isDepthTexture)zt=D(T.format===Vs,T.type),Ft&&(it?i.texStorage2D(r.TEXTURE_2D,1,zt,wt.width,wt.height):i.texImage2D(r.TEXTURE_2D,0,zt,wt.width,wt.height,0,Ct,kt,null));else if(T.isDataTexture)if(ve.length>0){it&&Ft&&i.texStorage2D(r.TEXTURE_2D,Zt,zt,ve[0].width,ve[0].height);for(let Nt=0,Mt=ve.length;Nt<Mt;Nt++)Yt=ve[Nt],it?Ot&&i.texSubImage2D(r.TEXTURE_2D,Nt,0,0,Yt.width,Yt.height,Ct,kt,Yt.data):i.texImage2D(r.TEXTURE_2D,Nt,zt,Yt.width,Yt.height,0,Ct,kt,Yt.data);T.generateMipmaps=!1}else it?(Ft&&i.texStorage2D(r.TEXTURE_2D,Zt,zt,wt.width,wt.height),Ot&&gt(T,wt,Ct,kt)):i.texImage2D(r.TEXTURE_2D,0,zt,wt.width,wt.height,0,Ct,kt,wt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&Ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Zt,zt,ve[0].width,ve[0].height,wt.depth);for(let Nt=0,Mt=ve.length;Nt<Mt;Nt++)if(Yt=ve[Nt],T.format!==Oi)if(Ct!==null)if(it){if(Ot)if(T.layerUpdates.size>0){const Qt=vv(Yt.width,Yt.height,T.format,T.type);for(const he of T.layerUpdates){const He=Yt.data.subarray(he*Qt/Yt.data.BYTES_PER_ELEMENT,(he+1)*Qt/Yt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Nt,0,0,he,Yt.width,Yt.height,1,Ct,He)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Nt,0,0,0,Yt.width,Yt.height,wt.depth,Ct,Yt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Nt,zt,Yt.width,Yt.height,wt.depth,0,Yt.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?Ot&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Nt,0,0,0,Yt.width,Yt.height,wt.depth,Ct,kt,Yt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Nt,zt,Yt.width,Yt.height,wt.depth,0,Ct,kt,Yt.data)}else{it&&Ft&&i.texStorage2D(r.TEXTURE_2D,Zt,zt,ve[0].width,ve[0].height);for(let Nt=0,Mt=ve.length;Nt<Mt;Nt++)Yt=ve[Nt],T.format!==Oi?Ct!==null?it?Ot&&i.compressedTexSubImage2D(r.TEXTURE_2D,Nt,0,0,Yt.width,Yt.height,Ct,Yt.data):i.compressedTexImage2D(r.TEXTURE_2D,Nt,zt,Yt.width,Yt.height,0,Yt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?Ot&&i.texSubImage2D(r.TEXTURE_2D,Nt,0,0,Yt.width,Yt.height,Ct,kt,Yt.data):i.texImage2D(r.TEXTURE_2D,Nt,zt,Yt.width,Yt.height,0,Ct,kt,Yt.data)}else if(T.isDataArrayTexture)if(it){if(Ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Zt,zt,wt.width,wt.height,wt.depth),Ot)if(T.layerUpdates.size>0){const Nt=vv(wt.width,wt.height,T.format,T.type);for(const Mt of T.layerUpdates){const Qt=wt.data.subarray(Mt*Nt/wt.data.BYTES_PER_ELEMENT,(Mt+1)*Nt/wt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Mt,wt.width,wt.height,1,Ct,kt,Qt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Ct,kt,wt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,wt.width,wt.height,wt.depth,0,Ct,kt,wt.data);else if(T.isData3DTexture)it?(Ft&&i.texStorage3D(r.TEXTURE_3D,Zt,zt,wt.width,wt.height,wt.depth),Ot&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Ct,kt,wt.data)):i.texImage3D(r.TEXTURE_3D,0,zt,wt.width,wt.height,wt.depth,0,Ct,kt,wt.data);else if(T.isFramebufferTexture){if(Ft)if(it)i.texStorage2D(r.TEXTURE_2D,Zt,zt,wt.width,wt.height);else{let Nt=wt.width,Mt=wt.height;for(let Qt=0;Qt<Zt;Qt++)i.texImage2D(r.TEXTURE_2D,Qt,zt,Nt,Mt,0,Ct,kt,null),Nt>>=1,Mt>>=1}}else if(ve.length>0){if(it&&Ft){const Nt=Gt(ve[0]);i.texStorage2D(r.TEXTURE_2D,Zt,zt,Nt.width,Nt.height)}for(let Nt=0,Mt=ve.length;Nt<Mt;Nt++)Yt=ve[Nt],it?Ot&&i.texSubImage2D(r.TEXTURE_2D,Nt,0,0,Ct,kt,Yt):i.texImage2D(r.TEXTURE_2D,Nt,zt,Ct,kt,Yt);T.generateMipmaps=!1}else if(it){if(Ft){const Nt=Gt(wt);i.texStorage2D(r.TEXTURE_2D,Zt,zt,Nt.width,Nt.height)}Ot&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ct,kt,wt)}else i.texImage2D(r.TEXTURE_2D,0,zt,Ct,kt,wt);g(T)&&S(yt),Vt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function st(B,T,K){if(T.image.length!==6)return;const yt=W(B,T),Et=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+K);const mt=s.get(Et);if(Et.version!==mt.__version||yt===!0){i.activeTexture(r.TEXTURE0+K);const Vt=Le.getPrimaries(Le.workingColorSpace),Ut=T.colorSpace===cs?null:Le.getPrimaries(T.colorSpace),qt=T.colorSpace===cs||Vt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const ee=T.isCompressedTexture||T.image[0].isCompressedTexture,wt=T.image[0]&&T.image[0].isDataTexture,Ct=[];for(let Mt=0;Mt<6;Mt++)!ee&&!wt?Ct[Mt]=R(T.image[Mt],!0,l.maxCubemapSize):Ct[Mt]=wt?T.image[Mt].image:T.image[Mt],Ct[Mt]=le(T,Ct[Mt]);const kt=Ct[0],zt=c.convert(T.format,T.colorSpace),Yt=c.convert(T.type),ve=C(T.internalFormat,zt,Yt,T.colorSpace),it=T.isVideoTexture!==!0,Ft=mt.__version===void 0||yt===!0,Ot=Et.dataReady;let Zt=V(T,kt);P(r.TEXTURE_CUBE_MAP,T);let Nt;if(ee){it&&Ft&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Zt,ve,kt.width,kt.height);for(let Mt=0;Mt<6;Mt++){Nt=Ct[Mt].mipmaps;for(let Qt=0;Qt<Nt.length;Qt++){const he=Nt[Qt];T.format!==Oi?zt!==null?it?Ot&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Qt,0,0,he.width,he.height,zt,he.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Qt,ve,he.width,he.height,0,he.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?Ot&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Qt,0,0,he.width,he.height,zt,Yt,he.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Qt,ve,he.width,he.height,0,zt,Yt,he.data)}}}else{if(Nt=T.mipmaps,it&&Ft){Nt.length>0&&Zt++;const Mt=Gt(Ct[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Zt,ve,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(wt){it?Ot&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Ct[Mt].width,Ct[Mt].height,zt,Yt,Ct[Mt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ve,Ct[Mt].width,Ct[Mt].height,0,zt,Yt,Ct[Mt].data);for(let Qt=0;Qt<Nt.length;Qt++){const He=Nt[Qt].image[Mt].image;it?Ot&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Qt+1,0,0,He.width,He.height,zt,Yt,He.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Qt+1,ve,He.width,He.height,0,zt,Yt,He.data)}}else{it?Ot&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,zt,Yt,Ct[Mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ve,zt,Yt,Ct[Mt]);for(let Qt=0;Qt<Nt.length;Qt++){const he=Nt[Qt];it?Ot&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Qt+1,0,0,zt,Yt,he.image[Mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Qt+1,ve,zt,Yt,he.image[Mt])}}}g(T)&&S(r.TEXTURE_CUBE_MAP),mt.__version=Et.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function _t(B,T,K,yt,Et,mt){const Vt=c.convert(K.format,K.colorSpace),Ut=c.convert(K.type),qt=C(K.internalFormat,Vt,Ut,K.colorSpace),ee=s.get(T),wt=s.get(K);if(wt.__renderTarget=T,!ee.__hasExternalTextures){const Ct=Math.max(1,T.width>>mt),kt=Math.max(1,T.height>>mt);Et===r.TEXTURE_3D||Et===r.TEXTURE_2D_ARRAY?i.texImage3D(Et,mt,qt,Ct,kt,T.depth,0,Vt,Ut,null):i.texImage2D(Et,mt,qt,Ct,kt,0,Vt,Ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,B),ue(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,yt,Et,wt.__webglTexture,0,j(T)):(Et===r.TEXTURE_2D||Et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,yt,Et,wt.__webglTexture,mt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Q(B,T,K){if(r.bindRenderbuffer(r.RENDERBUFFER,B),T.depthBuffer){const yt=T.depthTexture,Et=yt&&yt.isDepthTexture?yt.type:null,mt=D(T.stencilBuffer,Et),Vt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ue(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(T),mt,T.width,T.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(T),mt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,mt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Vt,r.RENDERBUFFER,B)}else{const yt=T.textures;for(let Et=0;Et<yt.length;Et++){const mt=yt[Et],Vt=c.convert(mt.format,mt.colorSpace),Ut=c.convert(mt.type),qt=C(mt.internalFormat,Vt,Ut,mt.colorSpace);ue(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(T),qt,T.width,T.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(T),qt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,qt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function At(B,T,K){const yt=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,B),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=s.get(T.depthTexture);if(Et.__renderTarget=T,(!Et.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),yt){if(Et.__webglInit===void 0&&(Et.__webglInit=!0,T.depthTexture.addEventListener("dispose",F)),Et.__webglTexture===void 0){Et.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Et.__webglTexture),P(r.TEXTURE_CUBE_MAP,T.depthTexture);const ee=c.convert(T.depthTexture.format),wt=c.convert(T.depthTexture.type);let Ct;T.depthTexture.format===Ra?Ct=r.DEPTH_COMPONENT24:T.depthTexture.format===Vs&&(Ct=r.DEPTH24_STENCIL8);for(let kt=0;kt<6;kt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,Ct,T.width,T.height,0,ee,wt,null)}}else tt(T.depthTexture,0);const mt=Et.__webglTexture,Vt=j(T),Ut=yt?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,qt=T.depthTexture.format===Vs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ra)ue(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,qt,Ut,mt,0,Vt):r.framebufferTexture2D(r.FRAMEBUFFER,qt,Ut,mt,0);else if(T.depthTexture.format===Vs)ue(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,qt,Ut,mt,0,Vt):r.framebufferTexture2D(r.FRAMEBUFFER,qt,Ut,mt,0);else throw new Error("Unknown depthTexture format")}function Dt(B){const T=s.get(B),K=B.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==B.depthTexture){const yt=B.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),yt){const Et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,yt.removeEventListener("dispose",Et)};yt.addEventListener("dispose",Et),T.__depthDisposeCallback=Et}T.__boundDepthTexture=yt}if(B.depthTexture&&!T.__autoAllocateDepthBuffer)if(K)for(let yt=0;yt<6;yt++)At(T.__webglFramebuffer[yt],B,yt);else{const yt=B.texture.mipmaps;yt&&yt.length>0?At(T.__webglFramebuffer[0],B,0):At(T.__webglFramebuffer,B,0)}else if(K){T.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[yt]),T.__webglDepthbuffer[yt]===void 0)T.__webglDepthbuffer[yt]=r.createRenderbuffer(),Q(T.__webglDepthbuffer[yt],B,!1);else{const Et=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[yt];r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,mt)}}else{const yt=B.texture.mipmaps;if(yt&&yt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Q(T.__webglDepthbuffer,B,!1);else{const Et=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,mt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(B,T,K){const yt=s.get(B);T!==void 0&&_t(yt.__webglFramebuffer,B,B.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&Dt(B)}function Pt(B){const T=B.texture,K=s.get(B),yt=s.get(T);B.addEventListener("dispose",H);const Et=B.textures,mt=B.isWebGLCubeRenderTarget===!0,Vt=Et.length>1;if(Vt||(yt.__webglTexture===void 0&&(yt.__webglTexture=r.createTexture()),yt.__version=T.version,f.memory.textures++),mt){K.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Ut]=[];for(let qt=0;qt<T.mipmaps.length;qt++)K.__webglFramebuffer[Ut][qt]=r.createFramebuffer()}else K.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)K.__webglFramebuffer[Ut]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Vt)for(let Ut=0,qt=Et.length;Ut<qt;Ut++){const ee=s.get(Et[Ut]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),f.memory.textures++)}if(B.samples>0&&ue(B)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ut=0;Ut<Et.length;Ut++){const qt=Et[Ut];K.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[Ut]);const ee=c.convert(qt.format,qt.colorSpace),wt=c.convert(qt.type),Ct=C(qt.internalFormat,ee,wt,qt.colorSpace,B.isXRRenderTarget===!0),kt=j(B);r.renderbufferStorageMultisample(r.RENDERBUFFER,kt,Ct,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,K.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),B.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),Q(K.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(mt){i.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),P(r.TEXTURE_CUBE_MAP,T);for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let qt=0;qt<T.mipmaps.length;qt++)_t(K.__webglFramebuffer[Ut][qt],B,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,qt);else _t(K.__webglFramebuffer[Ut],B,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);g(T)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let Ut=0,qt=Et.length;Ut<qt;Ut++){const ee=Et[Ut],wt=s.get(ee);let Ct=r.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ct=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ct,wt.__webglTexture),P(Ct,ee),_t(K.__webglFramebuffer,B,ee,r.COLOR_ATTACHMENT0+Ut,Ct,0),g(ee)&&S(Ct)}i.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ut=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,yt.__webglTexture),P(Ut,T),T.mipmaps&&T.mipmaps.length>0)for(let qt=0;qt<T.mipmaps.length;qt++)_t(K.__webglFramebuffer[qt],B,T,r.COLOR_ATTACHMENT0,Ut,qt);else _t(K.__webglFramebuffer,B,T,r.COLOR_ATTACHMENT0,Ut,0);g(T)&&S(Ut),i.unbindTexture()}B.depthBuffer&&Dt(B)}function Lt(B){const T=B.textures;for(let K=0,yt=T.length;K<yt;K++){const Et=T[K];if(g(Et)){const mt=A(B),Vt=s.get(Et).__webglTexture;i.bindTexture(mt,Vt),S(mt),i.unbindTexture()}}}const Xt=[],Wt=[];function se(B){if(B.samples>0){if(ue(B)===!1){const T=B.textures,K=B.width,yt=B.height;let Et=r.COLOR_BUFFER_BIT;const mt=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Vt=s.get(B),Ut=T.length>1;if(Ut)for(let ee=0;ee<T.length;ee++)i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer);const qt=B.texture.mipmaps;qt&&qt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let ee=0;ee<T.length;ee++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Et|=r.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Et|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Vt.__webglColorRenderbuffer[ee]);const wt=s.get(T[ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,wt,0)}r.blitFramebuffer(0,0,K,yt,0,0,K,yt,Et,r.NEAREST),m===!0&&(Xt.length=0,Wt.length=0,Xt.push(r.COLOR_ATTACHMENT0+ee),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Xt.push(mt),Wt.push(mt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Wt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Xt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let ee=0;ee<T.length;ee++){i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,Vt.__webglColorRenderbuffer[ee]);const wt=s.get(T[ee]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,wt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&m){const T=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function j(B){return Math.min(l.maxSamples,B.samples)}function ue(B){const T=s.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function oe(B){const T=f.render.frame;x.get(B)!==T&&(x.set(B,T),B.update())}function le(B,T){const K=B.colorSpace,yt=B.format,Et=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||K!==$r&&K!==cs&&(Le.getTransfer(K)===ke?(yt!==Oi||Et!==ci)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",K)),T}function Gt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=k,this.setTexture2D=tt,this.setTexture2DArray=U,this.setTexture3D=I,this.setTextureCube=J,this.rebindTextures=Bt,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function BR(r,t){function i(s,l=cs){let c;const f=Le.getTransfer(l);if(s===ci)return r.UNSIGNED_BYTE;if(s===wp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Cp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ox)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===lx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===sx)return r.BYTE;if(s===rx)return r.SHORT;if(s===dl)return r.UNSIGNED_SHORT;if(s===Rp)return r.INT;if(s===Ki)return r.UNSIGNED_INT;if(s===Wi)return r.FLOAT;if(s===Aa)return r.HALF_FLOAT;if(s===cx)return r.ALPHA;if(s===ux)return r.RGB;if(s===Oi)return r.RGBA;if(s===Ra)return r.DEPTH_COMPONENT;if(s===Vs)return r.DEPTH_STENCIL;if(s===fx)return r.RED;if(s===Dp)return r.RED_INTEGER;if(s===Jr)return r.RG;if(s===Np)return r.RG_INTEGER;if(s===Up)return r.RGBA_INTEGER;if(s===uu||s===fu||s===du||s===hu)if(f===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===uu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===uu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===du)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zh||s===Hh||s===Gh||s===Vh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kh||s===jh||s===Xh||s===Wh||s===qh||s===Yh||s===Zh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===kh||s===jh)return f===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Xh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Wh)return c.COMPRESSED_R11_EAC;if(s===qh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Yh)return c.COMPRESSED_RG11_EAC;if(s===Zh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Kh||s===Qh||s===Jh||s===$h||s===tp||s===ep||s===np||s===ip||s===ap||s===sp||s===rp||s===op||s===lp||s===cp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Kh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$h)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===tp)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ep)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===np)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ip)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ap)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sp)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rp)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===op)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lp)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cp)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===up||s===fp||s===dp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===up)return f===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===hp||s===pp||s===mp||s===gp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===hp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===pp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const zR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HR=`
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

}`;class GR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Mx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ji({vertexShader:zR,fragmentShader:HR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qi(new xl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VR extends eo{constructor(t,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,x=null,_=null,v=null,y=null,M=null;const R=typeof XRWebGLBinding<"u",g=new GR,S={},A=i.getContextAttributes();let C=null,D=null;const V=[],F=[],H=new Ae;let E=null;const O=new li;O.viewport=new sn;const et=new li;et.viewport=new sn;const G=[O,et],k=new Jb;let Y=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let st=V[q];return st===void 0&&(st=new Jd,V[q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(q){let st=V[q];return st===void 0&&(st=new Jd,V[q]=st),st.getGripSpace()},this.getHand=function(q){let st=V[q];return st===void 0&&(st=new Jd,V[q]=st),st.getHandSpace()};function tt(q){const st=F.indexOf(q.inputSource);if(st===-1)return;const _t=V[st];_t!==void 0&&(_t.update(q.inputSource,q.frame,h||f),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",I);for(let q=0;q<V.length;q++){const st=F[q];st!==null&&(F[q]=null,V[q].disconnect(st))}Y=null,at=null,g.reset();for(const q in S)delete S[q];t.setRenderTarget(C),y=null,v=null,_=null,l=null,D=null,gt.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,s.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){p=q,s.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(C=t.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",U),l.addEventListener("inputsourceschange",I),A.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(H),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Q=null,At=null;A.depth&&(At=A.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_t=A.stencil?Vs:Ra,Q=A.stencil?hl:Ki);const Dt={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(Dt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),D=new Zi(v.textureWidth,v.textureHeight,{format:Oi,type:ci,depthTexture:new ml(v.textureWidth,v.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const _t={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,_t),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new Zi(y.framebufferWidth,y.framebufferHeight,{format:Oi,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),gt.setContext(l),gt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function I(q){for(let st=0;st<q.removed.length;st++){const _t=q.removed[st],Q=F.indexOf(_t);Q>=0&&(F[Q]=null,V[Q].disconnect(_t))}for(let st=0;st<q.added.length;st++){const _t=q.added[st];let Q=F.indexOf(_t);if(Q===-1){for(let Dt=0;Dt<V.length;Dt++)if(Dt>=F.length){F.push(_t),Q=Dt;break}else if(F[Dt]===null){F[Dt]=_t,Q=Dt;break}if(Q===-1)break}const At=V[Q];At&&At.connect(_t)}}const J=new ut,ot=new ut;function xt(q,st,_t){J.setFromMatrixPosition(st.matrixWorld),ot.setFromMatrixPosition(_t.matrixWorld);const Q=J.distanceTo(ot),At=st.projectionMatrix.elements,Dt=_t.projectionMatrix.elements,Bt=At[14]/(At[10]-1),Pt=At[14]/(At[10]+1),Lt=(At[9]+1)/At[5],Xt=(At[9]-1)/At[5],Wt=(At[8]-1)/At[0],se=(Dt[8]+1)/Dt[0],j=Bt*Wt,ue=Bt*se,oe=Q/(-Wt+se),le=oe*-Wt;if(st.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(le),q.translateZ(oe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),At[10]===-1)q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Gt=Bt+oe,B=Pt+oe,T=j-le,K=ue+(Q-le),yt=Lt*Pt/B*Gt,Et=Xt*Pt/B*Gt;q.projectionMatrix.makePerspective(T,K,yt,Et,Gt,B),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function z(q,st){st===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(st.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let st=q.near,_t=q.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),k.near=et.near=O.near=st,k.far=et.far=O.far=_t,(Y!==k.near||at!==k.far)&&(l.updateRenderState({depthNear:k.near,depthFar:k.far}),Y=k.near,at=k.far),k.layers.mask=q.layers.mask|6,O.layers.mask=k.layers.mask&-5,et.layers.mask=k.layers.mask&-3;const Q=q.parent,At=k.cameras;z(k,Q);for(let Dt=0;Dt<At.length;Dt++)z(At[Dt],Q);At.length===2?xt(k,O,et):k.projectionMatrix.copy(O.projectionMatrix),P(q,k,Q)};function P(q,st,_t){_t===null?q.matrix.copy(st.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(st.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=vp*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(q){m=q,v!==null&&(v.fixedFoveation=q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(q){return S[q]};let W=null;function lt(q,st){if(x=st.getViewerPose(h||f),M=st,x!==null){const _t=x.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let Q=!1;_t.length!==k.cameras.length&&(k.cameras.length=0,Q=!0);for(let Pt=0;Pt<_t.length;Pt++){const Lt=_t[Pt];let Xt=null;if(y!==null)Xt=y.getViewport(Lt);else{const se=_.getViewSubImage(v,Lt);Xt=se.viewport,Pt===0&&(t.setRenderTargetTextures(D,se.colorTexture,se.depthStencilTexture),t.setRenderTarget(D))}let Wt=G[Pt];Wt===void 0&&(Wt=new li,Wt.layers.enable(Pt),Wt.viewport=new sn,G[Pt]=Wt),Wt.matrix.fromArray(Lt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Lt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Pt===0&&(k.matrix.copy(Wt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Q===!0&&k.cameras.push(Wt)}const At=l.enabledFeatures;if(At&&At.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){_=s.getBinding();const Pt=_.getDepthInformation(_t[0]);Pt&&Pt.isValid&&Pt.texture&&g.init(Pt,l.renderState)}if(At&&At.includes("camera-access")&&R){t.state.unbindTexture(),_=s.getBinding();for(let Pt=0;Pt<_t.length;Pt++){const Lt=_t[Pt].camera;if(Lt){let Xt=S[Lt];Xt||(Xt=new Mx,S[Lt]=Xt);const Wt=_.getCameraImage(Lt);Xt.sourceTexture=Wt}}}}for(let _t=0;_t<V.length;_t++){const Q=F[_t],At=V[_t];Q!==null&&At!==void 0&&At.update(Q,st,h||f)}W&&W(q,st),st.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:st}),M=null}const gt=new Rx;gt.setAnimationLoop(lt),this.setAnimationLoop=function(q){W=q},this.dispose=function(){}}}const Is=new wa,kR=new Je;function jR(r,t){function i(g,S){g.matrixAutoUpdate===!0&&g.updateMatrix(),S.value.copy(g.matrix)}function s(g,S){S.color.getRGB(g.fogColor.value,bx(r)),S.isFog?(g.fogNear.value=S.near,g.fogFar.value=S.far):S.isFogExp2&&(g.fogDensity.value=S.density)}function l(g,S,A,C,D){S.isMeshBasicMaterial?c(g,S):S.isMeshLambertMaterial?(c(g,S),S.envMap&&(g.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(g,S),_(g,S)):S.isMeshPhongMaterial?(c(g,S),x(g,S),S.envMap&&(g.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(g,S),v(g,S),S.isMeshPhysicalMaterial&&y(g,S,D)):S.isMeshMatcapMaterial?(c(g,S),M(g,S)):S.isMeshDepthMaterial?c(g,S):S.isMeshDistanceMaterial?(c(g,S),R(g,S)):S.isMeshNormalMaterial?c(g,S):S.isLineBasicMaterial?(f(g,S),S.isLineDashedMaterial&&p(g,S)):S.isPointsMaterial?m(g,S,A,C):S.isSpriteMaterial?h(g,S):S.isShadowMaterial?(g.color.value.copy(S.color),g.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(g,S){g.opacity.value=S.opacity,S.color&&g.diffuse.value.copy(S.color),S.emissive&&g.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(g.map.value=S.map,i(S.map,g.mapTransform)),S.alphaMap&&(g.alphaMap.value=S.alphaMap,i(S.alphaMap,g.alphaMapTransform)),S.bumpMap&&(g.bumpMap.value=S.bumpMap,i(S.bumpMap,g.bumpMapTransform),g.bumpScale.value=S.bumpScale,S.side===Kn&&(g.bumpScale.value*=-1)),S.normalMap&&(g.normalMap.value=S.normalMap,i(S.normalMap,g.normalMapTransform),g.normalScale.value.copy(S.normalScale),S.side===Kn&&g.normalScale.value.negate()),S.displacementMap&&(g.displacementMap.value=S.displacementMap,i(S.displacementMap,g.displacementMapTransform),g.displacementScale.value=S.displacementScale,g.displacementBias.value=S.displacementBias),S.emissiveMap&&(g.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,g.emissiveMapTransform)),S.specularMap&&(g.specularMap.value=S.specularMap,i(S.specularMap,g.specularMapTransform)),S.alphaTest>0&&(g.alphaTest.value=S.alphaTest);const A=t.get(S),C=A.envMap,D=A.envMapRotation;C&&(g.envMap.value=C,Is.copy(D),Is.x*=-1,Is.y*=-1,Is.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),g.envMapRotation.value.setFromMatrix4(kR.makeRotationFromEuler(Is)),g.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=S.reflectivity,g.ior.value=S.ior,g.refractionRatio.value=S.refractionRatio),S.lightMap&&(g.lightMap.value=S.lightMap,g.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,g.lightMapTransform)),S.aoMap&&(g.aoMap.value=S.aoMap,g.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,g.aoMapTransform))}function f(g,S){g.diffuse.value.copy(S.color),g.opacity.value=S.opacity,S.map&&(g.map.value=S.map,i(S.map,g.mapTransform))}function p(g,S){g.dashSize.value=S.dashSize,g.totalSize.value=S.dashSize+S.gapSize,g.scale.value=S.scale}function m(g,S,A,C){g.diffuse.value.copy(S.color),g.opacity.value=S.opacity,g.size.value=S.size*A,g.scale.value=C*.5,S.map&&(g.map.value=S.map,i(S.map,g.uvTransform)),S.alphaMap&&(g.alphaMap.value=S.alphaMap,i(S.alphaMap,g.alphaMapTransform)),S.alphaTest>0&&(g.alphaTest.value=S.alphaTest)}function h(g,S){g.diffuse.value.copy(S.color),g.opacity.value=S.opacity,g.rotation.value=S.rotation,S.map&&(g.map.value=S.map,i(S.map,g.mapTransform)),S.alphaMap&&(g.alphaMap.value=S.alphaMap,i(S.alphaMap,g.alphaMapTransform)),S.alphaTest>0&&(g.alphaTest.value=S.alphaTest)}function x(g,S){g.specular.value.copy(S.specular),g.shininess.value=Math.max(S.shininess,1e-4)}function _(g,S){S.gradientMap&&(g.gradientMap.value=S.gradientMap)}function v(g,S){g.metalness.value=S.metalness,S.metalnessMap&&(g.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,g.metalnessMapTransform)),g.roughness.value=S.roughness,S.roughnessMap&&(g.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,g.roughnessMapTransform)),S.envMap&&(g.envMapIntensity.value=S.envMapIntensity)}function y(g,S,A){g.ior.value=S.ior,S.sheen>0&&(g.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),g.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(g.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,g.sheenColorMapTransform)),S.sheenRoughnessMap&&(g.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,g.sheenRoughnessMapTransform))),S.clearcoat>0&&(g.clearcoat.value=S.clearcoat,g.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(g.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,g.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(g.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Kn&&g.clearcoatNormalScale.value.negate())),S.dispersion>0&&(g.dispersion.value=S.dispersion),S.iridescence>0&&(g.iridescence.value=S.iridescence,g.iridescenceIOR.value=S.iridescenceIOR,g.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(g.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,g.iridescenceMapTransform)),S.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),S.transmission>0&&(g.transmission.value=S.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),S.transmissionMap&&(g.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,g.transmissionMapTransform)),g.thickness.value=S.thickness,S.thicknessMap&&(g.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=S.attenuationDistance,g.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(g.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(g.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=S.specularIntensity,g.specularColor.value.copy(S.specularColor),S.specularColorMap&&(g.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,g.specularColorMapTransform)),S.specularIntensityMap&&(g.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,g.specularIntensityMapTransform))}function M(g,S){S.matcap&&(g.matcap.value=S.matcap)}function R(g,S){const A=t.get(S).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function XR(r,t,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,C){const D=C.program;s.uniformBlockBinding(A,D)}function h(A,C){let D=l[A.id];D===void 0&&(M(A),D=x(A),l[A.id]=D,A.addEventListener("dispose",g));const V=C.program;s.updateUBOMapping(A,V);const F=t.render.frame;c[A.id]!==F&&(v(A),c[A.id]=F)}function x(A){const C=_();A.__bindingPointIndex=C;const D=r.createBuffer(),V=A.__size,F=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,V,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,D),D}function _(){for(let A=0;A<p;A++)if(f.indexOf(A)===-1)return f.push(A),A;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const C=l[A.id],D=A.uniforms,V=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let F=0,H=D.length;F<H;F++){const E=Array.isArray(D[F])?D[F]:[D[F]];for(let O=0,et=E.length;O<et;O++){const G=E[O];if(y(G,F,O,V)===!0){const k=G.__offset,Y=Array.isArray(G.value)?G.value:[G.value];let at=0;for(let tt=0;tt<Y.length;tt++){const U=Y[tt],I=R(U);typeof U=="number"||typeof U=="boolean"?(G.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,k+at,G.__data)):U.isMatrix3?(G.__data[0]=U.elements[0],G.__data[1]=U.elements[1],G.__data[2]=U.elements[2],G.__data[3]=0,G.__data[4]=U.elements[3],G.__data[5]=U.elements[4],G.__data[6]=U.elements[5],G.__data[7]=0,G.__data[8]=U.elements[6],G.__data[9]=U.elements[7],G.__data[10]=U.elements[8],G.__data[11]=0):(U.toArray(G.__data,at),at+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(A,C,D,V){const F=A.value,H=C+"_"+D;if(V[H]===void 0)return typeof F=="number"||typeof F=="boolean"?V[H]=F:V[H]=F.clone(),!0;{const E=V[H];if(typeof F=="number"||typeof F=="boolean"){if(E!==F)return V[H]=F,!0}else if(E.equals(F)===!1)return E.copy(F),!0}return!1}function M(A){const C=A.uniforms;let D=0;const V=16;for(let H=0,E=C.length;H<E;H++){const O=Array.isArray(C[H])?C[H]:[C[H]];for(let et=0,G=O.length;et<G;et++){const k=O[et],Y=Array.isArray(k.value)?k.value:[k.value];for(let at=0,tt=Y.length;at<tt;at++){const U=Y[at],I=R(U),J=D%V,ot=J%I.boundary,xt=J+ot;D+=ot,xt!==0&&V-xt<I.storage&&(D+=V-xt),k.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=D,D+=I.storage}}}const F=D%V;return F>0&&(D+=V-F),A.__size=D,A.__cache={},this}function R(A){const C={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):de("WebGLRenderer: Unsupported uniform value type.",A),C}function g(A){const C=A.target;C.removeEventListener("dispose",g);const D=f.indexOf(C.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[C.id]),delete l[C.id],delete c[C.id]}function S(){for(const A in l)r.deleteBuffer(l[A]);f=[],l={},c={}}return{bind:m,update:h,dispose:S}}const WR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function qR(){return Vi===null&&(Vi=new Lb(WR,16,16,Jr,Aa),Vi.name="DFG_LUT",Vi.minFilter=On,Vi.magFilter=On,Vi.wrapS=ba,Vi.wrapT=ba,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class YR{constructor(t={}){const{canvas:i=lb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=ci}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=f;const R=y,g=new Set([Up,Np,Dp]),S=new Set([ci,Ki,dl,hl,wp,Cp]),A=new Uint32Array(4),C=new Int32Array(4);let D=null,V=null;const F=[],H=[];let E=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let et=!1;this._outputColorSpace=Si;let G=0,k=0,Y=null,at=-1,tt=null;const U=new sn,I=new sn;let J=null;const ot=new be(0);let xt=0,z=i.width,P=i.height,W=1,lt=null,gt=null;const q=new sn(0,0,z,P),st=new sn(0,0,z,P);let _t=!1;const Q=new zp;let At=!1,Dt=!1;const Bt=new Je,Pt=new ut,Lt=new sn,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function se(){return Y===null?W:1}let j=s;function ue(L,nt){return i.getContext(L,nt)}try{const L={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Tp}`),i.addEventListener("webglcontextlost",Qt,!1),i.addEventListener("webglcontextrestored",he,!1),i.addEventListener("webglcontextcreationerror",He,!1),j===null){const nt="webgl2";if(j=ue(nt,L),j===null)throw ue(nt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw Ue("WebGLRenderer: "+L.message),L}let oe,le,Gt,B,T,K,yt,Et,mt,Vt,Ut,qt,ee,wt,Ct,kt,zt,Yt,ve,it,Ft,Ot,Zt;function Nt(){oe=new YT(j),oe.init(),Ft=new BR(j,oe),le=new HT(j,oe,t,Ft),Gt=new FR(j,oe),le.reversedDepthBuffer&&v&&Gt.buffers.depth.setReversed(!0),B=new QT(j),T=new MR,K=new IR(j,oe,Gt,T,le,Ft,B),yt=new qT(O),Et=new nE(j),Ot=new BT(j,Et),mt=new ZT(j,Et,B,Ot),Vt=new $T(j,mt,Et,Ot,B),Yt=new JT(j,le,K),Ct=new GT(T),Ut=new yR(O,yt,oe,le,Ot,Ct),qt=new jR(O,T),ee=new ER,wt=new DR(oe),zt=new IT(O,yt,Gt,Vt,M,m),kt=new PR(O,Vt,le),Zt=new XR(j,B,le,Gt),ve=new zT(j,oe,B),it=new KT(j,oe,B),B.programs=Ut.programs,O.capabilities=le,O.extensions=oe,O.properties=T,O.renderLists=ee,O.shadowMap=kt,O.state=Gt,O.info=B}Nt(),R!==ci&&(E=new eA(R,i.width,i.height,l,c));const Mt=new VR(O,j);this.xr=Mt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const L=oe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=oe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(L){L!==void 0&&(W=L,this.setSize(z,P,!1))},this.getSize=function(L){return L.set(z,P)},this.setSize=function(L,nt,vt=!0){if(Mt.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}z=L,P=nt,i.width=Math.floor(L*W),i.height=Math.floor(nt*W),vt===!0&&(i.style.width=L+"px",i.style.height=nt+"px"),E!==null&&E.setSize(i.width,i.height),this.setViewport(0,0,L,nt)},this.getDrawingBufferSize=function(L){return L.set(z*W,P*W).floor()},this.setDrawingBufferSize=function(L,nt,vt){z=L,P=nt,W=vt,i.width=Math.floor(L*vt),i.height=Math.floor(nt*vt),this.setViewport(0,0,L,nt)},this.setEffects=function(L){if(R===ci){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let nt=0;nt<L.length;nt++)if(L[nt].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(U)},this.getViewport=function(L){return L.copy(q)},this.setViewport=function(L,nt,vt,ht){L.isVector4?q.set(L.x,L.y,L.z,L.w):q.set(L,nt,vt,ht),Gt.viewport(U.copy(q).multiplyScalar(W).round())},this.getScissor=function(L){return L.copy(st)},this.setScissor=function(L,nt,vt,ht){L.isVector4?st.set(L.x,L.y,L.z,L.w):st.set(L,nt,vt,ht),Gt.scissor(I.copy(st).multiplyScalar(W).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(L){Gt.setScissorTest(_t=L)},this.setOpaqueSort=function(L){lt=L},this.setTransparentSort=function(L){gt=L},this.getClearColor=function(L){return L.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(L=!0,nt=!0,vt=!0){let ht=0;if(L){let ct=!1;if(Y!==null){const It=Y.texture.format;ct=g.has(It)}if(ct){const It=Y.texture.type,Kt=S.has(It),Ht=zt.getClearColor(),ne=zt.getClearAlpha(),ae=Ht.r,fe=Ht.g,me=Ht.b;Kt?(A[0]=ae,A[1]=fe,A[2]=me,A[3]=ne,j.clearBufferuiv(j.COLOR,0,A)):(C[0]=ae,C[1]=fe,C[2]=me,C[3]=ne,j.clearBufferiv(j.COLOR,0,C))}else ht|=j.COLOR_BUFFER_BIT}nt&&(ht|=j.DEPTH_BUFFER_BIT),vt&&(ht|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ht!==0&&j.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Qt,!1),i.removeEventListener("webglcontextrestored",he,!1),i.removeEventListener("webglcontextcreationerror",He,!1),zt.dispose(),ee.dispose(),wt.dispose(),T.dispose(),yt.dispose(),Vt.dispose(),Ot.dispose(),Zt.dispose(),Ut.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",qs),Mt.removeEventListener("sessionend",Ys),Fi.stop()};function Qt(L){L.preventDefault(),_u("WebGLRenderer: Context Lost."),et=!0}function he(){_u("WebGLRenderer: Context Restored."),et=!1;const L=B.autoReset,nt=kt.enabled,vt=kt.autoUpdate,ht=kt.needsUpdate,ct=kt.type;Nt(),B.autoReset=L,kt.enabled=nt,kt.autoUpdate=vt,kt.needsUpdate=ht,kt.type=ct}function He(L){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ne(L){const nt=L.target;nt.removeEventListener("dispose",Ne),In(nt)}function In(L){Mi(L),T.remove(L)}function Mi(L){const nt=T.get(L).programs;nt!==void 0&&(nt.forEach(function(vt){Ut.releaseProgram(vt)}),L.isShaderMaterial&&Ut.releaseShaderCache(L))}this.renderBufferDirect=function(L,nt,vt,ht,ct,It){nt===null&&(nt=Xt);const Kt=ct.isMesh&&ct.matrixWorld.determinant()<0,Ht=bl(L,nt,vt,ht,ct);Gt.setMaterial(ht,Kt);let ne=vt.index,ae=1;if(ht.wireframe===!0){if(ne=mt.getWireframeAttribute(vt),ne===void 0)return;ae=2}const fe=vt.drawRange,me=vt.attributes.position;let Jt=fe.start*ae,xe=(fe.start+fe.count)*ae;It!==null&&(Jt=Math.max(Jt,It.start*ae),xe=Math.min(xe,(It.start+It.count)*ae)),ne!==null?(Jt=Math.max(Jt,0),xe=Math.min(xe,ne.count)):me!=null&&(Jt=Math.max(Jt,0),xe=Math.min(xe,me.count));const $e=xe-Jt;if($e<0||$e===1/0)return;Ot.setup(ct,ht,Ht,vt,ne);let tn,Oe=ve;if(ne!==null&&(tn=Et.get(ne),Oe=it,Oe.setIndex(tn)),ct.isMesh)ht.wireframe===!0?(Gt.setLineWidth(ht.wireframeLinewidth*se()),Oe.setMode(j.LINES)):Oe.setMode(j.TRIANGLES);else if(ct.isLine){let vn=ht.linewidth;vn===void 0&&(vn=1),Gt.setLineWidth(vn*se()),ct.isLineSegments?Oe.setMode(j.LINES):ct.isLineLoop?Oe.setMode(j.LINE_LOOP):Oe.setMode(j.LINE_STRIP)}else ct.isPoints?Oe.setMode(j.POINTS):ct.isSprite&&Oe.setMode(j.TRIANGLES);if(ct.isBatchedMesh)if(ct._multiDrawInstances!==null)vu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount,ct._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))Oe.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else{const vn=ct._multiDrawStarts,te=ct._multiDrawCounts,Bn=ct._multiDrawCount,pe=ne?Et.get(ne).bytesPerElement:1,zn=T.get(ht).currentProgram.getUniforms();for(let Qn=0;Qn<Bn;Qn++)zn.setValue(j,"_gl_DrawID",Qn),Oe.render(vn[Qn]/pe,te[Qn])}else if(ct.isInstancedMesh)Oe.renderInstances(Jt,$e,ct.count);else if(vt.isInstancedBufferGeometry){const vn=vt._maxInstanceCount!==void 0?vt._maxInstanceCount:1/0,te=Math.min(vt.instanceCount,vn);Oe.renderInstances(Jt,$e,te)}else Oe.render(Jt,$e)};function ao(L,nt,vt){L.transparent===!0&&L.side===ji&&L.forceSinglePass===!1?(L.side=Kn,L.needsUpdate=!0,Ca(L,nt,vt),L.side=ds,L.needsUpdate=!0,Ca(L,nt,vt),L.side=ji):Ca(L,nt,vt)}this.compile=function(L,nt,vt=null){vt===null&&(vt=L),V=wt.get(vt),V.init(nt),H.push(V),vt.traverseVisible(function(ct){ct.isLight&&ct.layers.test(nt.layers)&&(V.pushLight(ct),ct.castShadow&&V.pushShadow(ct))}),L!==vt&&L.traverseVisible(function(ct){ct.isLight&&ct.layers.test(nt.layers)&&(V.pushLight(ct),ct.castShadow&&V.pushShadow(ct))}),V.setupLights();const ht=new Set;return L.traverse(function(ct){if(!(ct.isMesh||ct.isPoints||ct.isLine||ct.isSprite))return;const It=ct.material;if(It)if(Array.isArray(It))for(let Kt=0;Kt<It.length;Kt++){const Ht=It[Kt];ao(Ht,vt,ct),ht.add(Ht)}else ao(It,vt,ct),ht.add(It)}),V=H.pop(),ht},this.compileAsync=function(L,nt,vt=null){const ht=this.compile(L,nt,vt);return new Promise(ct=>{function It(){if(ht.forEach(function(Kt){T.get(Kt).currentProgram.isReady()&&ht.delete(Kt)}),ht.size===0){ct(L);return}setTimeout(It,10)}oe.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Ws=null;function Sl(L){Ws&&Ws(L)}function qs(){Fi.stop()}function Ys(){Fi.start()}const Fi=new Rx;Fi.setAnimationLoop(Sl),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(L){Ws=L,Mt.setAnimationLoop(L),L===null?Fi.stop():Fi.start()},Mt.addEventListener("sessionstart",qs),Mt.addEventListener("sessionend",Ys),this.render=function(L,nt){if(nt!==void 0&&nt.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(et===!0)return;const vt=Mt.enabled===!0&&Mt.isPresenting===!0,ht=E!==null&&(Y===null||vt)&&E.begin(O,Y);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),nt.parent===null&&nt.matrixWorldAutoUpdate===!0&&nt.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(nt),nt=Mt.getCamera()),L.isScene===!0&&L.onBeforeRender(O,L,nt,Y),V=wt.get(L,H.length),V.init(nt),H.push(V),Bt.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),Q.setFromProjectionMatrix(Bt,qi,nt.reversedDepth),Dt=this.localClippingEnabled,At=Ct.init(this.clippingPlanes,Dt),D=ee.get(L,F.length),D.init(),F.push(D),Mt.enabled===!0&&Mt.isPresenting===!0){const Kt=O.xr.getDepthSensingMesh();Kt!==null&&Zs(Kt,nt,-1/0,O.sortObjects)}Zs(L,nt,0,O.sortObjects),D.finish(),O.sortObjects===!0&&D.sort(lt,gt),Wt=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,Wt&&zt.addToRenderList(D,L),this.info.render.frame++,At===!0&&Ct.beginShadows();const ct=V.state.shadowsArray;if(kt.render(ct,L,nt),At===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ht&&E.hasRenderPass())===!1){const Kt=D.opaque,Ht=D.transmissive;if(V.setupLights(),nt.isArrayCamera){const ne=nt.cameras;if(Ht.length>0)for(let ae=0,fe=ne.length;ae<fe;ae++){const me=ne[ae];cn(Kt,Ht,L,me)}Wt&&zt.render(L);for(let ae=0,fe=ne.length;ae<fe;ae++){const me=ne[ae];bi(D,L,me,me.viewport)}}else Ht.length>0&&cn(Kt,Ht,L,nt),Wt&&zt.render(L),bi(D,L,nt)}Y!==null&&k===0&&(K.updateMultisampleRenderTarget(Y),K.updateRenderTargetMipmap(Y)),ht&&E.end(O),L.isScene===!0&&L.onAfterRender(O,L,nt),Ot.resetDefaultState(),at=-1,tt=null,H.pop(),H.length>0?(V=H[H.length-1],At===!0&&Ct.setGlobalState(O.clippingPlanes,V.state.camera)):V=null,F.pop(),F.length>0?D=F[F.length-1]:D=null};function Zs(L,nt,vt,ht){if(L.visible===!1)return;if(L.layers.test(nt.layers)){if(L.isGroup)vt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(nt);else if(L.isLight)V.pushLight(L),L.castShadow&&V.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Q.intersectsSprite(L)){ht&&Lt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Bt);const Kt=Vt.update(L),Ht=L.material;Ht.visible&&D.push(L,Kt,Ht,vt,Lt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Q.intersectsObject(L))){const Kt=Vt.update(L),Ht=L.material;if(ht&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Lt.copy(L.boundingSphere.center)):(Kt.boundingSphere===null&&Kt.computeBoundingSphere(),Lt.copy(Kt.boundingSphere.center)),Lt.applyMatrix4(L.matrixWorld).applyMatrix4(Bt)),Array.isArray(Ht)){const ne=Kt.groups;for(let ae=0,fe=ne.length;ae<fe;ae++){const me=ne[ae],Jt=Ht[me.materialIndex];Jt&&Jt.visible&&D.push(L,Kt,Jt,vt,Lt.z,me)}}else Ht.visible&&D.push(L,Kt,Ht,vt,Lt.z,null)}}const It=L.children;for(let Kt=0,Ht=It.length;Kt<Ht;Kt++)Zs(It[Kt],nt,vt,ht)}function bi(L,nt,vt,ht){const{opaque:ct,transmissive:It,transparent:Kt}=L;V.setupLightsView(vt),At===!0&&Ct.setGlobalState(O.clippingPlanes,vt),ht&&Gt.viewport(U.copy(ht)),ct.length>0&&_n(ct,nt,vt),It.length>0&&_n(It,nt,vt),Kt.length>0&&_n(Kt,nt,vt),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function cn(L,nt,vt,ht){if((vt.isScene===!0?vt.overrideMaterial:null)!==null)return;if(V.state.transmissionRenderTarget[ht.id]===void 0){const Jt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");V.state.transmissionRenderTarget[ht.id]=new Zi(1,1,{generateMipmaps:!0,type:Jt?Aa:ci,minFilter:Gs,samples:Math.max(4,le.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const It=V.state.transmissionRenderTarget[ht.id],Kt=ht.viewport||U;It.setSize(Kt.z*O.transmissionResolutionScale,Kt.w*O.transmissionResolutionScale);const Ht=O.getRenderTarget(),ne=O.getActiveCubeFace(),ae=O.getActiveMipmapLevel();O.setRenderTarget(It),O.getClearColor(ot),xt=O.getClearAlpha(),xt<1&&O.setClearColor(16777215,.5),O.clear(),Wt&&zt.render(vt);const fe=O.toneMapping;O.toneMapping=Yi;const me=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),V.setupLightsView(ht),At===!0&&Ct.setGlobalState(O.clippingPlanes,ht),_n(L,vt,ht),K.updateMultisampleRenderTarget(It),K.updateRenderTargetMipmap(It),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let xe=0,$e=nt.length;xe<$e;xe++){const tn=nt[xe],{object:Oe,geometry:vn,material:te,group:Bn}=tn;if(te.side===ji&&Oe.layers.test(ht.layers)){const pe=te.side;te.side=Kn,te.needsUpdate=!0,$i(Oe,vt,ht,vn,te,Bn),te.side=pe,te.needsUpdate=!0,Jt=!0}}Jt===!0&&(K.updateMultisampleRenderTarget(It),K.updateRenderTargetMipmap(It))}O.setRenderTarget(Ht,ne,ae),O.setClearColor(ot,xt),me!==void 0&&(ht.viewport=me),O.toneMapping=fe}function _n(L,nt,vt){const ht=nt.isScene===!0?nt.overrideMaterial:null;for(let ct=0,It=L.length;ct<It;ct++){const Kt=L[ct],{object:Ht,geometry:ne,group:ae}=Kt;let fe=Kt.material;fe.allowOverride===!0&&ht!==null&&(fe=ht),Ht.layers.test(vt.layers)&&$i(Ht,nt,vt,ne,fe,ae)}}function $i(L,nt,vt,ht,ct,It){L.onBeforeRender(O,nt,vt,ht,ct,It),L.modelViewMatrix.multiplyMatrices(vt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ct.onBeforeRender(O,nt,vt,ht,L,It),ct.transparent===!0&&ct.side===ji&&ct.forceSinglePass===!1?(ct.side=Kn,ct.needsUpdate=!0,O.renderBufferDirect(vt,nt,ht,ct,L,It),ct.side=ds,ct.needsUpdate=!0,O.renderBufferDirect(vt,nt,ht,ct,L,It),ct.side=ji):O.renderBufferDirect(vt,nt,ht,ct,L,It),L.onAfterRender(O,nt,vt,ht,ct,It)}function Ca(L,nt,vt){nt.isScene!==!0&&(nt=Xt);const ht=T.get(L),ct=V.state.lights,It=V.state.shadowsArray,Kt=ct.state.version,Ht=Ut.getParameters(L,ct.state,It,nt,vt),ne=Ut.getProgramCacheKey(Ht);let ae=ht.programs;ht.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?nt.environment:null,ht.fog=nt.fog;const fe=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ht.envMap=yt.get(L.envMap||ht.environment,fe),ht.envMapRotation=ht.environment!==null&&L.envMap===null?nt.environmentRotation:L.envMapRotation,ae===void 0&&(L.addEventListener("dispose",Ne),ae=new Map,ht.programs=ae);let me=ae.get(ne);if(me!==void 0){if(ht.currentProgram===me&&ht.lightsStateVersion===Kt)return Ml(L,Ht),me}else Ht.uniforms=Ut.getUniforms(L),L.onBeforeCompile(Ht,O),me=Ut.acquireProgram(Ht,ne),ae.set(ne,me),ht.uniforms=Ht.uniforms;const Jt=ht.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Jt.clippingPlanes=Ct.uniform),Ml(L,Ht),ht.needsLights=so(L),ht.lightsStateVersion=Kt,ht.needsLights&&(Jt.ambientLightColor.value=ct.state.ambient,Jt.lightProbe.value=ct.state.probe,Jt.directionalLights.value=ct.state.directional,Jt.directionalLightShadows.value=ct.state.directionalShadow,Jt.spotLights.value=ct.state.spot,Jt.spotLightShadows.value=ct.state.spotShadow,Jt.rectAreaLights.value=ct.state.rectArea,Jt.ltc_1.value=ct.state.rectAreaLTC1,Jt.ltc_2.value=ct.state.rectAreaLTC2,Jt.pointLights.value=ct.state.point,Jt.pointLightShadows.value=ct.state.pointShadow,Jt.hemisphereLights.value=ct.state.hemi,Jt.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,Jt.spotLightMatrix.value=ct.state.spotLightMatrix,Jt.spotLightMap.value=ct.state.spotLightMap,Jt.pointShadowMatrix.value=ct.state.pointShadowMatrix),ht.currentProgram=me,ht.uniformsList=null,me}function yl(L){if(L.uniformsList===null){const nt=L.currentProgram.getUniforms();L.uniformsList=pu.seqWithValue(nt.seq,L.uniforms)}return L.uniformsList}function Ml(L,nt){const vt=T.get(L);vt.outputColorSpace=nt.outputColorSpace,vt.batching=nt.batching,vt.batchingColor=nt.batchingColor,vt.instancing=nt.instancing,vt.instancingColor=nt.instancingColor,vt.instancingMorph=nt.instancingMorph,vt.skinning=nt.skinning,vt.morphTargets=nt.morphTargets,vt.morphNormals=nt.morphNormals,vt.morphColors=nt.morphColors,vt.morphTargetsCount=nt.morphTargetsCount,vt.numClippingPlanes=nt.numClippingPlanes,vt.numIntersection=nt.numClipIntersection,vt.vertexAlphas=nt.vertexAlphas,vt.vertexTangents=nt.vertexTangents,vt.toneMapping=nt.toneMapping}function bl(L,nt,vt,ht,ct){nt.isScene!==!0&&(nt=Xt),K.resetTextureUnits();const It=nt.fog,Kt=ht.isMeshStandardMaterial||ht.isMeshLambertMaterial||ht.isMeshPhongMaterial?nt.environment:null,Ht=Y===null?O.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:$r,ne=ht.isMeshStandardMaterial||ht.isMeshLambertMaterial&&!ht.envMap||ht.isMeshPhongMaterial&&!ht.envMap,ae=yt.get(ht.envMap||Kt,ne),fe=ht.vertexColors===!0&&!!vt.attributes.color&&vt.attributes.color.itemSize===4,me=!!vt.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),Jt=!!vt.morphAttributes.position,xe=!!vt.morphAttributes.normal,$e=!!vt.morphAttributes.color;let tn=Yi;ht.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(tn=O.toneMapping);const Oe=vt.morphAttributes.position||vt.morphAttributes.normal||vt.morphAttributes.color,vn=Oe!==void 0?Oe.length:0,te=T.get(ht),Bn=V.state.lights;if(At===!0&&(Dt===!0||L!==tt)){const fn=L===tt&&ht.id===at;Ct.setState(ht,L,fn)}let pe=!1;ht.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Bn.state.version||te.outputColorSpace!==Ht||ct.isBatchedMesh&&te.batching===!1||!ct.isBatchedMesh&&te.batching===!0||ct.isBatchedMesh&&te.batchingColor===!0&&ct.colorTexture===null||ct.isBatchedMesh&&te.batchingColor===!1&&ct.colorTexture!==null||ct.isInstancedMesh&&te.instancing===!1||!ct.isInstancedMesh&&te.instancing===!0||ct.isSkinnedMesh&&te.skinning===!1||!ct.isSkinnedMesh&&te.skinning===!0||ct.isInstancedMesh&&te.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&te.instancingColor===!1&&ct.instanceColor!==null||ct.isInstancedMesh&&te.instancingMorph===!0&&ct.morphTexture===null||ct.isInstancedMesh&&te.instancingMorph===!1&&ct.morphTexture!==null||te.envMap!==ae||ht.fog===!0&&te.fog!==It||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Ct.numPlanes||te.numIntersection!==Ct.numIntersection)||te.vertexAlphas!==fe||te.vertexTangents!==me||te.morphTargets!==Jt||te.morphNormals!==xe||te.morphColors!==$e||te.toneMapping!==tn||te.morphTargetsCount!==vn)&&(pe=!0):(pe=!0,te.__version=ht.version);let zn=te.currentProgram;pe===!0&&(zn=Ca(ht,nt,ct));let Qn=!1,Ei=!1,Jn=!1;const ze=zn.getUniforms(),un=te.uniforms;if(Gt.useProgram(zn.program)&&(Qn=!0,Ei=!0,Jn=!0),ht.id!==at&&(at=ht.id,Ei=!0),Qn||tt!==L){Gt.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),ze.setValue(j,"projectionMatrix",L.projectionMatrix),ze.setValue(j,"viewMatrix",L.matrixWorldInverse);const Ti=ze.map.cameraPosition;Ti!==void 0&&Ti.setValue(j,Pt.setFromMatrixPosition(L.matrixWorld)),le.logarithmicDepthBuffer&&ze.setValue(j,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&ze.setValue(j,"isOrthographic",L.isOrthographicCamera===!0),tt!==L&&(tt=L,Ei=!0,Jn=!0)}if(te.needsLights&&(Bn.state.directionalShadowMap.length>0&&ze.setValue(j,"directionalShadowMap",Bn.state.directionalShadowMap,K),Bn.state.spotShadowMap.length>0&&ze.setValue(j,"spotShadowMap",Bn.state.spotShadowMap,K),Bn.state.pointShadowMap.length>0&&ze.setValue(j,"pointShadowMap",Bn.state.pointShadowMap,K)),ct.isSkinnedMesh){ze.setOptional(j,ct,"bindMatrix"),ze.setOptional(j,ct,"bindMatrixInverse");const fn=ct.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),ze.setValue(j,"boneTexture",fn.boneTexture,K))}ct.isBatchedMesh&&(ze.setOptional(j,ct,"batchingTexture"),ze.setValue(j,"batchingTexture",ct._matricesTexture,K),ze.setOptional(j,ct,"batchingIdTexture"),ze.setValue(j,"batchingIdTexture",ct._indirectTexture,K),ze.setOptional(j,ct,"batchingColorTexture"),ct._colorsTexture!==null&&ze.setValue(j,"batchingColorTexture",ct._colorsTexture,K));const Hn=vt.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Yt.update(ct,vt,zn),(Ei||te.receiveShadow!==ct.receiveShadow)&&(te.receiveShadow=ct.receiveShadow,ze.setValue(j,"receiveShadow",ct.receiveShadow)),(ht.isMeshStandardMaterial||ht.isMeshLambertMaterial||ht.isMeshPhongMaterial)&&ht.envMap===null&&nt.environment!==null&&(un.envMapIntensity.value=nt.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=qR()),Ei&&(ze.setValue(j,"toneMappingExposure",O.toneMappingExposure),te.needsLights&&hs(un,Jn),It&&ht.fog===!0&&qt.refreshFogUniforms(un,It),qt.refreshMaterialUniforms(un,ht,W,P,V.state.transmissionRenderTarget[L.id]),pu.upload(j,yl(te),un,K)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(pu.upload(j,yl(te),un,K),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&ze.setValue(j,"center",ct.center),ze.setValue(j,"modelViewMatrix",ct.modelViewMatrix),ze.setValue(j,"normalMatrix",ct.normalMatrix),ze.setValue(j,"modelMatrix",ct.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const fn=ht.uniformsGroups;for(let Ti=0,ta=fn.length;Ti<ta;Ti++){const Ks=fn[Ti];Zt.update(Ks,zn),Zt.bind(Ks,zn)}}return zn}function hs(L,nt){L.ambientLightColor.needsUpdate=nt,L.lightProbe.needsUpdate=nt,L.directionalLights.needsUpdate=nt,L.directionalLightShadows.needsUpdate=nt,L.pointLights.needsUpdate=nt,L.pointLightShadows.needsUpdate=nt,L.spotLights.needsUpdate=nt,L.spotLightShadows.needsUpdate=nt,L.rectAreaLights.needsUpdate=nt,L.hemisphereLights.needsUpdate=nt}function so(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(L,nt,vt){const ht=T.get(L);ht.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),T.get(L.texture).__webglTexture=nt,T.get(L.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:vt,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,nt){const vt=T.get(L);vt.__webglFramebuffer=nt,vt.__useDefaultFramebuffer=nt===void 0};const Da=j.createFramebuffer();this.setRenderTarget=function(L,nt=0,vt=0){Y=L,G=nt,k=vt;let ht=null,ct=!1,It=!1;if(L){const Ht=T.get(L);if(Ht.__useDefaultFramebuffer!==void 0){Gt.bindFramebuffer(j.FRAMEBUFFER,Ht.__webglFramebuffer),U.copy(L.viewport),I.copy(L.scissor),J=L.scissorTest,Gt.viewport(U),Gt.scissor(I),Gt.setScissorTest(J),at=-1;return}else if(Ht.__webglFramebuffer===void 0)K.setupRenderTarget(L);else if(Ht.__hasExternalTextures)K.rebindTextures(L,T.get(L.texture).__webglTexture,T.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const fe=L.depthTexture;if(Ht.__boundDepthTexture!==fe){if(fe!==null&&T.has(fe)&&(L.width!==fe.image.width||L.height!==fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(L)}}const ne=L.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(It=!0);const ae=T.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ae[nt])?ht=ae[nt][vt]:ht=ae[nt],ct=!0):L.samples>0&&K.useMultisampledRTT(L)===!1?ht=T.get(L).__webglMultisampledFramebuffer:Array.isArray(ae)?ht=ae[vt]:ht=ae,U.copy(L.viewport),I.copy(L.scissor),J=L.scissorTest}else U.copy(q).multiplyScalar(W).floor(),I.copy(st).multiplyScalar(W).floor(),J=_t;if(vt!==0&&(ht=Da),Gt.bindFramebuffer(j.FRAMEBUFFER,ht)&&Gt.drawBuffers(L,ht),Gt.viewport(U),Gt.scissor(I),Gt.setScissorTest(J),ct){const Ht=T.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ht.__webglTexture,vt)}else if(It){const Ht=nt;for(let ne=0;ne<L.textures.length;ne++){const ae=T.get(L.textures[ne]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+ne,ae.__webglTexture,vt,Ht)}}else if(L!==null&&vt!==0){const Ht=T.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ht.__webglTexture,vt)}at=-1},this.readRenderTargetPixels=function(L,nt,vt,ht,ct,It,Kt,Ht=0){if(!(L&&L.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=T.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Kt!==void 0&&(ne=ne[Kt]),ne){Gt.bindFramebuffer(j.FRAMEBUFFER,ne);try{const ae=L.textures[Ht],fe=ae.format,me=ae.type;if(L.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ht),!le.textureFormatReadable(fe)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(me)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}nt>=0&&nt<=L.width-ht&&vt>=0&&vt<=L.height-ct&&j.readPixels(nt,vt,ht,ct,Ft.convert(fe),Ft.convert(me),It)}finally{const ae=Y!==null?T.get(Y).__webglFramebuffer:null;Gt.bindFramebuffer(j.FRAMEBUFFER,ae)}}},this.readRenderTargetPixelsAsync=async function(L,nt,vt,ht,ct,It,Kt,Ht=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ne=T.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Kt!==void 0&&(ne=ne[Kt]),ne)if(nt>=0&&nt<=L.width-ht&&vt>=0&&vt<=L.height-ct){Gt.bindFramebuffer(j.FRAMEBUFFER,ne);const ae=L.textures[Ht],fe=ae.format,me=ae.type;if(L.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ht),!le.textureFormatReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Jt),j.bufferData(j.PIXEL_PACK_BUFFER,It.byteLength,j.STREAM_READ),j.readPixels(nt,vt,ht,ct,Ft.convert(fe),Ft.convert(me),0);const xe=Y!==null?T.get(Y).__webglFramebuffer:null;Gt.bindFramebuffer(j.FRAMEBUFFER,xe);const $e=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await cb(j,$e,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Jt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,It),j.deleteBuffer(Jt),j.deleteSync($e),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,nt=null,vt=0){const ht=Math.pow(2,-vt),ct=Math.floor(L.image.width*ht),It=Math.floor(L.image.height*ht),Kt=nt!==null?nt.x:0,Ht=nt!==null?nt.y:0;K.setTexture2D(L,0),j.copyTexSubImage2D(j.TEXTURE_2D,vt,0,0,Kt,Ht,ct,It),Gt.unbindTexture()};const Na=j.createFramebuffer(),ps=j.createFramebuffer();this.copyTextureToTexture=function(L,nt,vt=null,ht=null,ct=0,It=0){let Kt,Ht,ne,ae,fe,me,Jt,xe,$e;const tn=L.isCompressedTexture?L.mipmaps[It]:L.image;if(vt!==null)Kt=vt.max.x-vt.min.x,Ht=vt.max.y-vt.min.y,ne=vt.isBox3?vt.max.z-vt.min.z:1,ae=vt.min.x,fe=vt.min.y,me=vt.isBox3?vt.min.z:0;else{const un=Math.pow(2,-ct);Kt=Math.floor(tn.width*un),Ht=Math.floor(tn.height*un),L.isDataArrayTexture?ne=tn.depth:L.isData3DTexture?ne=Math.floor(tn.depth*un):ne=1,ae=0,fe=0,me=0}ht!==null?(Jt=ht.x,xe=ht.y,$e=ht.z):(Jt=0,xe=0,$e=0);const Oe=Ft.convert(nt.format),vn=Ft.convert(nt.type);let te;nt.isData3DTexture?(K.setTexture3D(nt,0),te=j.TEXTURE_3D):nt.isDataArrayTexture||nt.isCompressedArrayTexture?(K.setTexture2DArray(nt,0),te=j.TEXTURE_2D_ARRAY):(K.setTexture2D(nt,0),te=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,nt.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,nt.unpackAlignment);const Bn=j.getParameter(j.UNPACK_ROW_LENGTH),pe=j.getParameter(j.UNPACK_IMAGE_HEIGHT),zn=j.getParameter(j.UNPACK_SKIP_PIXELS),Qn=j.getParameter(j.UNPACK_SKIP_ROWS),Ei=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,tn.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,tn.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ae),j.pixelStorei(j.UNPACK_SKIP_ROWS,fe),j.pixelStorei(j.UNPACK_SKIP_IMAGES,me);const Jn=L.isDataArrayTexture||L.isData3DTexture,ze=nt.isDataArrayTexture||nt.isData3DTexture;if(L.isDepthTexture){const un=T.get(L),Hn=T.get(nt),fn=T.get(un.__renderTarget),Ti=T.get(Hn.__renderTarget);Gt.bindFramebuffer(j.READ_FRAMEBUFFER,fn.__webglFramebuffer),Gt.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let ta=0;ta<ne;ta++)Jn&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(L).__webglTexture,ct,me+ta),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(nt).__webglTexture,It,$e+ta)),j.blitFramebuffer(ae,fe,Kt,Ht,Jt,xe,Kt,Ht,j.DEPTH_BUFFER_BIT,j.NEAREST);Gt.bindFramebuffer(j.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ct!==0||L.isRenderTargetTexture||T.has(L)){const un=T.get(L),Hn=T.get(nt);Gt.bindFramebuffer(j.READ_FRAMEBUFFER,Na),Gt.bindFramebuffer(j.DRAW_FRAMEBUFFER,ps);for(let fn=0;fn<ne;fn++)Jn?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,un.__webglTexture,ct,me+fn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,un.__webglTexture,ct),ze?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Hn.__webglTexture,It,$e+fn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Hn.__webglTexture,It),ct!==0?j.blitFramebuffer(ae,fe,Kt,Ht,Jt,xe,Kt,Ht,j.COLOR_BUFFER_BIT,j.NEAREST):ze?j.copyTexSubImage3D(te,It,Jt,xe,$e+fn,ae,fe,Kt,Ht):j.copyTexSubImage2D(te,It,Jt,xe,ae,fe,Kt,Ht);Gt.bindFramebuffer(j.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else ze?L.isDataTexture||L.isData3DTexture?j.texSubImage3D(te,It,Jt,xe,$e,Kt,Ht,ne,Oe,vn,tn.data):nt.isCompressedArrayTexture?j.compressedTexSubImage3D(te,It,Jt,xe,$e,Kt,Ht,ne,Oe,tn.data):j.texSubImage3D(te,It,Jt,xe,$e,Kt,Ht,ne,Oe,vn,tn):L.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,It,Jt,xe,Kt,Ht,Oe,vn,tn.data):L.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,It,Jt,xe,tn.width,tn.height,Oe,tn.data):j.texSubImage2D(j.TEXTURE_2D,It,Jt,xe,Kt,Ht,Oe,vn,tn);j.pixelStorei(j.UNPACK_ROW_LENGTH,Bn),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,pe),j.pixelStorei(j.UNPACK_SKIP_PIXELS,zn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Qn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Ei),It===0&&nt.generateMipmaps&&j.generateMipmap(te),Gt.unbindTexture()},this.initRenderTarget=function(L){T.get(L).__webglFramebuffer===void 0&&K.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?K.setTextureCube(L,0):L.isData3DTexture?K.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?K.setTexture2DArray(L,0):K.setTexture2D(L,0),Gt.unbindTexture()},this.resetState=function(){G=0,k=0,Y=null,Gt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const ll=400,ZR=[.5,.8,.95,.6,.38,.14,.05,.55,.5,.8,.95,.6,.38,.14,.05,.55],Wr=3,Vv=Math.PI*.75,kv=2.6,Eh=1.4,cl=1.8;function KR({eegData:r,yScale:t,onExit:i}){const s=Z.useRef(null),l=Z.useRef(null),c=Z.useRef(null),f=Z.useRef(null),p=Z.useRef([]),m=Z.useRef(null),h=Z.useRef(null),x=Z.useRef(!1),_=Z.useRef(new $b),v=Z.useRef(r),y=Z.useRef(t),M=Z.useRef(i);v.current=r,y.current=t,M.current=i;const R=Z.useCallback(()=>{if(x.current)return;x.current=!0,m.current&&(m.current.end().catch(()=>{}),m.current=null),h.current!=null&&(cancelAnimationFrame(h.current),h.current=null);const g=l.current;g&&(g.xr.enabled=!1,g.setAnimationLoop(null),g.dispose(),l.current=null),p.current=[]},[]);return Z.useEffect(()=>{const g=s.current;if(!g)return;x.current=!1;const S=_.current;S.start();const A=new Tb;A.background=new be(198159),A.fog=new Fp(198159,.07),c.current=A;const C=new li(80,window.innerWidth/window.innerHeight,.05,60);C.position.set(0,Eh,0),f.current=C;const D=new YR({antialias:!0,alpha:!1});D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.setSize(window.innerWidth,window.innerHeight),D.xr.enabled=!0,D.toneMapping=Ap,D.toneMappingExposure=1.2,g.appendChild(D.domElement),l.current=D;const V=new Kb(1122884,.8);A.add(V);const F=new Zb(4491519,1.5,25);F.position.set(0,Eh+1,0),A.add(F);const H=1500,E=new Float32Array(H*3),O=new Float32Array(H*3);for(let P=0;P<H;P++){const W=10+Math.random()*15,lt=Math.random()*Math.PI*2,gt=Math.acos(2*Math.random()-1);E[P*3]=W*Math.sin(gt)*Math.cos(lt),E[P*3+1]=W*Math.sin(gt)*Math.sin(lt),E[P*3+2]=W*Math.cos(gt),O[P*3]=.7+Math.random()*.3,O[P*3+1]=.75+Math.random()*.25,O[P*3+2]=.85+Math.random()*.15}const et=new Fn;et.setAttribute("position",new Ln(E,3)),et.setAttribute("color",new Ln(O,3));const G=new xp({size:.05,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0}),k=new dv(et,G);A.add(k);const at=[{color:4853888,center:[5,2,-10],count:400,spread:5},{color:666208,center:[-6,1,-9],count:350,spread:4},{color:14928,center:[1,4,-12],count:300,spread:4}].map(({color:P,center:W,count:lt,spread:gt})=>{const q=new Float32Array(lt*3);for(let At=0;At<lt;At++)q[At*3]=W[0]+(Math.random()-.5)*gt,q[At*3+1]=W[1]+(Math.random()-.5)*gt,q[At*3+2]=W[2]+(Math.random()-.5)*gt;const st=new Fn;st.setAttribute("position",new Ln(q,3));const _t=new xp({color:P,size:.12,transparent:!0,opacity:.16,sizeAttenuation:!0,depthWrite:!1}),Q=new dv(st,_t);return A.add(Q),Q}),tt=[],U=new be;for(let P=0;P<Be;P++){const W=P/(Be-1),lt=-Vv/2+W*Vv,gt=Eh+kv/2-W*kv,q=ZR[P],st=new Float32Array(ll*3),_t=new Float32Array(ll*3),Q=new Fn;Q.setAttribute("position",new Ln(st,3)),Q.setAttribute("color",new Ln(_t,3)),Q.setDrawRange(0,0);const At=new Hp({vertexColors:!0,transparent:!0,opacity:.92,linewidth:2}),Dt=new Sx(Q,At);A.add(Dt);const Bt=document.createElement("canvas");Bt.width=128,Bt.height=48;const Pt=Bt.getContext("2d");Pt.clearRect(0,0,128,48),U.setHSL(q,.9,.7),Pt.font="bold 28px monospace",Pt.fillStyle=`#${U.getHexString()}`,Pt.textAlign="center",Pt.textBaseline="middle",Pt.fillText(`Ch ${P+1}`,64,24);const Lt=new Bb(Bt),Xt=new vx({map:Lt,transparent:!0,opacity:.65}),Wt=new Nb(Xt);Wt.scale.set(.4,.15,1);const se=Math.sin(lt)*(Wr+.05),j=-Math.cos(lt)*(Wr+.05),ue=se-Math.cos(lt)*(cl/2),oe=j+Math.sin(lt)*(cl/2);Wt.position.set(ue-Math.cos(lt)*.3,gt,oe+Math.sin(lt)*.3),A.add(Wt);const le=new xl(cl+.3,.14),Gt=new Bp({color:new be().setHSL(q,1,.55),transparent:!0,opacity:.05,side:ji,depthWrite:!1}),B=new Qi(le,Gt);B.position.set(Math.sin(lt)*Wr,gt,-Math.cos(lt)*Wr),B.rotation.y=lt,A.add(B),tt.push({line:Dt,geometry:Q,positions:st,colors:_t,angle:lt,yPos:gt,glowPlane:B,baseHue:q})}p.current=tt;const I=new tE(12,24,660784,396830);A.add(I);function J(P){const W=v.current,lt=W.buffers.current;if(!lt)return;const gt=W.samplesInBuffer.current,q=W.writeIndex.current,st=W.bufferSize;if(gt<2)return;const _t=gt>ll?Math.floor(gt/ll):1,Q=Math.min(ll,Math.ceil(gt/_t)),At=y.current||100;for(let Dt=0;Dt<Be;Dt++){const{positions:Bt,colors:Pt,geometry:Lt,angle:Xt,yPos:Wt,glowPlane:se,baseHue:j}=tt[Dt],ue=lt[Dt],oe=Math.sin(Xt)*Wr,le=-Math.cos(Xt)*Wr,Gt=-Math.cos(Xt),B=-Math.sin(Xt),T=(j+Math.sin(P*.08+Dt*.4)*.08+1)%1,K=.85+Math.sin(P*.15+Dt)*.1;let yt=0;for(let mt=0;mt<Q;mt++){const Vt=mt*_t,Ut=(q-gt+Vt+st)%st,qt=mt/Math.max(1,Q-1),ee=ue[Ut]/At;yt+=ee*ee,Bt[mt*3]=oe+Gt*(qt-.5)*cl,Bt[mt*3+1]=Wt+ee*.14,Bt[mt*3+2]=le+B*(qt-.5)*cl;const wt=Math.sin(qt*Math.PI),Ct=.35+Math.min(Math.abs(ee)*3,1)*.65,kt=Math.min(.95,.5*wt+Ct*.5);U.setHSL(T,K,kt),Pt[mt*3]=U.r,Pt[mt*3+1]=U.g,Pt[mt*3+2]=U.b}Lt.attributes.position.needsUpdate=!0,Lt.attributes.color.needsUpdate=!0,Lt.setDrawRange(0,Q);const Et=Math.sqrt(yt/Math.max(1,Q));se.material.opacity=Math.min(.2,.03+Et*.9)}V.intensity=.6+Math.sin(P*.5)*.15,F.intensity=1.2+Math.sin(P*.3)*.4,k.rotation.y=P*.005,k.rotation.x=Math.sin(P*.003)*.02,at.forEach((Dt,Bt)=>{Dt.material.opacity=.1+Math.sin(P*.2+Bt*2.1)*.06,Dt.rotation.y=P*.003*(Bt%2===0?1:-1)})}async function ot(){let P=null;if(navigator.xr)for(const W of["immersive-vr","immersive-ar","inline"])try{if(await navigator.xr.isSessionSupported(W)){P=W;break}}catch{}if(P&&P!=="inline")try{const W=await navigator.xr.requestSession(P,{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});m.current=W,D.xr.setSession(W),W.addEventListener("end",()=>{m.current=null,M.current()}),D.setAnimationLoop(()=>{J(S.getElapsedTime()),D.render(A,C)});return}catch{}xt()}function xt(){let P=!1,W=0,lt=0,gt=0,q=0,st=!0;const _t=D.domElement,Q=Pt=>{P=!0,st=!1,W=Pt.clientX,lt=Pt.clientY},At=()=>{P=!1},Dt=Pt=>{P&&(gt-=(Pt.clientX-W)*.003,q-=(Pt.clientY-lt)*.003,q=Math.max(-Math.PI/3,Math.min(Math.PI/3,q)),W=Pt.clientX,lt=Pt.clientY)};_t.addEventListener("pointerdown",Q),_t.addEventListener("pointerup",At),_t.addEventListener("pointermove",Dt);function Bt(){const Pt=S.getElapsedTime();st&&(gt=Pt*.04),C.rotation.order="YXZ",C.rotation.y=gt,C.rotation.x=q,J(Pt),D.render(A,C),h.current=requestAnimationFrame(Bt)}h.current=requestAnimationFrame(Bt)}ot();function z(){l.current&&(C.aspect=window.innerWidth/window.innerHeight,C.updateProjectionMatrix(),D.setSize(window.innerWidth,window.innerHeight))}return window.addEventListener("resize",z),()=>{window.removeEventListener("resize",z),R(),g.contains(D.domElement)&&g.removeChild(D.domElement)}},[]),w.jsxs("div",{className:"xr-overlay",children:[w.jsx("div",{className:"xr-container",ref:s}),w.jsxs("div",{className:"xr-hud",children:[w.jsx("button",{className:"btn xr-exit-btn",onClick:()=>{R(),M.current()},children:"✕ Exit XR"}),w.jsxs("div",{className:"xr-info",children:[w.jsx("span",{className:"xr-badge",children:"WebXR"}),w.jsxs("span",{children:[Be," channels · ±",t," µV"]})]})]})]})}const jv=256,Th=4,QR=2.5,bp=64,Xv=.25,JR=[{key:"Alpha",label:"α Alpha"},{key:"Beta",label:"β Beta"},{key:"Theta",label:"θ Theta"},{key:"Delta",label:"δ Delta"},{key:"Gamma",label:"γ Gamma"},{key:"Total",label:"Σ Total"}],Wv=[{label:"Fp1",x:-.3,y:-.85},{label:"Fp2",x:.3,y:-.85},{label:"F7",x:-.7,y:-.45},{label:"F3",x:-.35,y:-.45},{label:"Fz",x:0,y:-.4},{label:"F4",x:.35,y:-.45},{label:"F8",x:.7,y:-.45},{label:"C3",x:-.55,y:0},{label:"Cz",x:0,y:0},{label:"C4",x:.55,y:0},{label:"P3",x:-.45,y:.45},{label:"Pz",x:0,y:.42},{label:"P4",x:.45,y:.45},{label:"O1",x:-.25,y:.85},{label:"Oz",x:0,y:.8},{label:"O2",x:.25,y:.85}],Ah=[[6,10,20],[11,37,58],[18,92,109],[0,230,118],[255,215,64],[255,82,82],[255,255,255]],Pi=256,Mu=new Uint8Array(Pi),bu=new Uint8Array(Pi),Eu=new Uint8Array(Pi);(function(){const t=Ah.length-1;for(let i=0;i<Pi;i++){const l=i/(Pi-1)*t,c=Math.min(Math.floor(l),t-1),f=l-c,p=Ah[c],m=Ah[c+1];Mu[i]=p[0]+(m[0]-p[0])*f|0,bu[i]=p[1]+(m[1]-p[1])*f|0,Eu[i]=p[2]+(m[2]-p[2])*f|0}})();function $R(r,t){const i=r.length,s=[],l=[],c=[],f=[],p=[],m=[];for(let g=0;g<t;g++)for(let S=0;S<t;S++){const A=-1+2*(S+.5)/t,C=-1+2*(g+.5)/t,D=Math.sqrt(A*A+C*C);if(D>1.05)continue;s.push(g*t+S),l.push(A),c.push(C),f.push(D>.92?(1.05-D)/.13:1);const V=new Array(i);let F=-1,H=0;for(let E=0;E<i;E++){const O=A-r[E].x,et=C-r[E].y,G=Math.sqrt(O*O+et*et);if(G<.001){F=E;break}V[E]=1/G**QR,H+=V[E]}if(F>=0)p.push(F),m.push(new Array(i).fill(0));else{p.push(-1);for(let E=0;E<i;E++)V[E]/=H;m.push(V)}}const h=s.length,x=new Int32Array(s),_=new Float64Array(f),v=new Float64Array(l),y=new Float64Array(c),M=new Int16Array(p),R=new Float64Array(h*i);for(let g=0;g<h;g++){const S=g*i,A=m[g];for(let C=0;C<i;C++)R[S+C]=A[C]}return{cellCount:h,cellIndex:x,edgeFade:_,nx:v,ny:y,weights:R,exactElectrode:M}}function t2(r,t,i,s,l,c){const f=r.data;f.fill(0);let p=1/0,m=-1/0;for(let v=0;v<i.length;v++)i[v]<p&&(p=i[v]),i[v]>m&&(m=i[v]);m<=p&&(m=p+1);const h=m-p,x=(Pi-1)/h,_=t/l;for(let v=0;v<s.cellCount;v++){const y=s.cellIndex[v],M=y/l|0,R=y-M*l;let g;const S=s.exactElectrode[v];if(S>=0)g=i[S];else{g=0;const G=v*c;for(let k=0;k<c;k++)g+=s.weights[G+k]*i[k]}const A=Math.max(0,Math.min(Pi-1,(g-p)*x|0)),C=s.edgeFade[v]*255|0,D=Mu[A],V=bu[A],F=Eu[A],H=R*_|0,E=M*_|0,O=Math.min((R+1)*_|0,t),et=Math.min((M+1)*_|0,t);for(let G=E;G<et;G++){let k=(G*t+H)*4;for(let Y=H;Y<O;Y++)f[k]=D,f[k+1]=V,f[k+2]=F,f[k+3]=C,k+=4}}}function e2(r,t,i,s,l){const c=Math.min(t,i),f=t/2,p=i/2,m=c*.4;let h=1/0,x=-1/0;for(let g=0;g<s.length;g++)s[g]<h&&(h=s[g]),s[g]>x&&(x=s[g]);x<=h&&(x=h+1);const _=x-h;r.strokeStyle="rgba(255,255,255,0.25)",r.lineWidth=1.5,r.beginPath(),r.arc(f,p,m,0,Math.PI*2),r.stroke(),r.beginPath(),r.moveTo(f-m*.08,p-m),r.lineTo(f,p-m-m*.12),r.lineTo(f+m*.08,p-m),r.strokeStyle="rgba(255,255,255,0.3)",r.lineWidth=1.5,r.lineJoin="round",r.stroke();for(const g of[!0,!1]){const S=g?f-m:f+m,A=g?-1:1;r.beginPath(),r.moveTo(S,p-m*.12),r.quadraticCurveTo(S+A*m*.08,p,S,p+m*.12),r.strokeStyle="rgba(255,255,255,0.2)",r.lineWidth=1.2,r.stroke()}for(let g=0;g<l.length&&g<s.length;g++){const S=f+l[g].x*m,A=p+l[g].y*m,C=Math.max(0,Math.min(Pi-1,(s[g]-h)/_*(Pi-1)|0)),D=Mu[C],V=bu[C],F=Eu[C];r.beginPath(),r.arc(S,A,5,0,Math.PI*2),r.fillStyle=`rgba(${D},${V},${F},0.4)`,r.shadowColor=`rgba(${D},${V},${F},0.6)`,r.shadowBlur=6,r.fill(),r.shadowBlur=0,r.beginPath(),r.arc(S,A,3,0,Math.PI*2),r.fillStyle="rgba(255,255,255,0.9)",r.fill(),r.beginPath(),r.arc(S,A,2,0,Math.PI*2),r.fillStyle=`rgb(${D},${V},${F})`,r.fill(),r.fillStyle="rgba(255,255,255,0.65)",r.font="7px monospace",r.textAlign="center",r.fillText(l[g].label,S,A+10)}const v=10,y=i*.5,M=t-v-8,R=(i-y)/2;for(let g=0;g<y;g++){const S=Math.max(0,Math.min(Pi-1,(1-g/y)*(Pi-1)|0));r.fillStyle=`rgb(${Mu[S]},${bu[S]},${Eu[S]})`,r.fillRect(M,R+g,v,1)}r.strokeStyle="rgba(255,255,255,0.15)",r.lineWidth=.5,r.strokeRect(M,R,v,y),r.fillStyle="rgba(255,255,255,0.4)",r.font="7px monospace",r.textAlign="right",r.fillText(x.toFixed(1),M-3,R+4),r.fillText(h.toFixed(1),M-3,R+y)}const os=bp*4,n2=Z.memo(function({eegData:t}){var O;const i=Z.useRef(null),s=Z.useRef(0),l=Z.useRef(0),c=Z.useRef(window.devicePixelRatio||1),f=Z.useRef(!0),p=Z.useRef({w:0,h:0,pw:0,ph:0}),m=Z.useRef(new Array(Be).fill(0)),h=Z.useRef(new Array(Be).fill(0)),x=Z.useRef(0),_=Z.useRef(null),v=Z.useRef({}),y=Z.useRef(0),[M,R]=Z.useState("Alpha"),[g,S]=Z.useState(!1),[A,C]=Z.useState({}),[D,V]=Z.useState({band:"",freq:0}),F=Z.useMemo(()=>new ks(jv,Qe),[]),H=Z.useMemo(()=>$R(Wv,bp),[]);Z.useEffect(()=>{const et=i.current;if(!et)return;const G=et.getContext("2d",{alpha:!1}),k=document.createElement("canvas");k.width=os,k.height=os;const Y=k.getContext("2d");(!_.current||_.current.width!==os)&&(_.current=new ImageData(os,os));const at=new ResizeObserver(U=>{const I=U[0];if(!I)return;const J=window.devicePixelRatio||1;c.current=J;const{width:ot,height:xt}=I.contentRect;p.current={w:ot,h:xt,pw:Math.round(ot*J),ph:Math.round(xt*J)},f.current=!0});at.observe(et);const tt=()=>{const{w:U,h:I,pw:J,ph:ot}=p.current;if(U===0||I===0){s.current=requestAnimationFrame(tt);return}if(f.current&&(f.current=!1,et.width=J,et.height=ot),G.setTransform(c.current,0,0,c.current,0,0),G.fillStyle="#0d1117",G.fillRect(0,0,U,I),l.current++,!g){const P=t.buffers.current,W=t.writeIndex.current,lt=t.samplesInBuffer.current;if(P&&lt>=jv){const gt=x.current,q=gt*Th,st=Math.min(q+Th,Be),_t=h.current,Q=m.current,At=v.current;for(let Bt=q;Bt<st;Bt++){const Pt=F.analyseRing(P[Bt],W,lt);if(Pt){_t[Bt]=M==="Total"?Pt.totalPower:Pt.bandPowers[M]||0,Q[Bt]=Q[Bt]*(1-Xv)+_t[Bt]*Xv;for(const Lt of ln)At[Lt.name]=(At[Lt.name]||0)-(At[`_ch${Bt}_${Lt.name}`]||0)+(Pt.bandPowers[Lt.name]||0),At[`_ch${Bt}_${Lt.name}`]=Pt.bandPowers[Lt.name]||0}}x.current=(gt+1)%Math.ceil(Be/Th);const Dt=performance.now();if(Dt-y.current>400){y.current=Dt;const Bt={};let Pt="",Lt=0;for(const Xt of ln)Bt[Xt.name]=(At[Xt.name]||0)/Be,Bt[Xt.name]>Lt&&(Lt=Bt[Xt.name],Pt=Xt.name);C(Bt),V(Xt=>Xt.band===Pt?Xt:{band:Pt,freq:0})}}}const xt=m.current;if(xt.some(P=>P!==0)){const P=_.current;t2(P,os,xt,H,bp,Be),Y.putImageData(P,0,0);const lt=Math.min(U,I)*.4,gt=U/2,q=I/2,st=lt*2.1;G.imageSmoothingEnabled=!0,G.imageSmoothingQuality="high",G.drawImage(k,0,0,os,os,gt-st/2,q-st/2,st,st),e2(G,U,I,xt,Wv)}else G.fillStyle="#4b5563",G.font="13px monospace",G.textAlign="center",G.fillText("Collecting samples…",U/2,I/2);s.current=requestAnimationFrame(tt)};return s.current=requestAnimationFrame(tt),()=>{cancelAnimationFrame(s.current),at.disconnect()}},[t,M,g,F,H]);const E=((O=ln.find(et=>et.name===D.band))==null?void 0:O.color)||"#8b949e";return w.jsxs("div",{className:"topomap-panel",children:[w.jsxs("div",{className:"topomap-toolbar",children:[w.jsx("span",{className:"topomap-title",children:"Topomap"}),w.jsx("div",{className:"topomap-metrics",children:JR.map(et=>w.jsx("button",{className:`topo-metric${M===et.key?" active":""}`,onClick:()=>R(et.key),children:et.label},et.key))}),w.jsx("span",{className:"topo-dominant",children:w.jsx("strong",{style:{color:E},children:D.band||"—"})}),w.jsx("button",{className:`btn topo-pause${g?" active":""}`,onClick:()=>S(et=>!et),children:g?"▶":"⏸"})]}),w.jsx("div",{className:"topomap-canvas-wrap",children:w.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}})}),w.jsx("div",{className:"topomap-bands",children:ln.map(et=>{const G=A[et.name]||0,k=Math.max(...ln.map(at=>A[at.name]||0),1e-6),Y=k>0?G/k*100:0;return w.jsxs("div",{className:"topo-band",children:[w.jsx("span",{className:"topo-band-dot",style:{background:et.color}}),w.jsx("span",{className:"topo-band-name",style:{color:et.color},children:et.label}),w.jsx("div",{className:"topo-band-track",children:w.jsx("div",{className:"topo-band-fill",style:{width:`${Y}%`,background:et.color}})}),w.jsx("span",{className:"topo-band-val",children:G<.01?G.toExponential(1):G.toFixed(2)})]},et.name)})})]})}),ls=256,qv=60,Yv=6;function i2(){const r=new Uint8ClampedArray(1024);for(let t=0;t<256;t++){const i=t/255;let s,l,c;if(i<.25){const p=i/.25;s=48+p*20,l=18+p*100,c=120+p*135}else if(i<.5){const p=(i-.25)/.25;s=68-p*40,l=118+p*120,c=255-p*80}else if(i<.75){const p=(i-.5)/.25;s=28+p*200,l=238-p*40,c=175-p*130}else{const p=(i-.75)/.25;s=228+p*27,l=198-p*160,c=45-p*40}const f=t*4;r[f]=Math.max(0,Math.min(255,Math.round(s))),r[f+1]=Math.max(0,Math.min(255,Math.round(l))),r[f+2]=Math.max(0,Math.min(255,Math.round(c))),r[f+3]=255}return r}const qr=i2(),a2=Z.memo(function({eegData:t}){const i=Z.useRef(null),s=Z.useRef(0),l=Z.useRef(0),c=Z.useRef(window.devicePixelRatio||1),f=Z.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),p=Z.useRef(!0),m=Z.useRef(new Float64Array(ls)),h=Z.useRef([]),x=Z.useRef(0),_=Z.useRef(0),v=Z.useRef(400),y=Z.useRef(-60),M=Z.useRef(1e-30),R=Z.useRef(null),[g,S]=Z.useState(-1),[A,C]=Z.useState(!1),D=Z.useMemo(()=>new ks(ls,Qe),[]),V=Z.useMemo(()=>{const E=Qe/ls;return Math.min(Math.ceil(qv/E)+1,(ls>>1)+1)},[]);Z.useEffect(()=>{const E=i.current;if(!E)return;const O=E.getContext("2d",{alpha:!1}),et=new ResizeObserver(tt=>{const U=tt[0];if(!U)return;const I=window.devicePixelRatio||1;c.current=I;const{width:J,height:ot}=U.contentRect;f.current={w:J,h:ot,pw:Math.round(J*I),ph:Math.round(ot*I),dpr:I},p.current=!0;const xt=Math.max(200,Math.round(J));xt!==v.current&&(v.current=xt,h.current=[],x.current=0,_.current=0,M.current=1e-30),R.current=null});et.observe(E);let G=null,k=0,Y=0;const at=()=>{const{w:tt,h:U,pw:I,ph:J}=f.current;if(tt===0||U===0){s.current=requestAnimationFrame(at);return}if(p.current&&(p.current=!1,E.width=I,E.height=J,G=null),O.setTransform(c.current,0,0,c.current,0,0),l.current++,!A&&l.current%Yv===0){const ot=t.buffers.current,xt=t.writeIndex.current,z=t.samplesInBuffer.current;if(ot&&z>=ls){let P;if(g===-1){const W=m.current,lt=t.bufferSize,gt=(xt-ls+lt)%lt;for(let q=0;q<ls;q++){let st=0;const _t=(gt+q)%lt;for(let Q=0;Q<Be;Q++)st+=ot[Q][_t];W[q]=st/Be}P=D.analyse(W,0)}else P=D.analyseRing(ot[g],xt,z);if(P){const W=v.current,lt=h.current,gt=x.current;let q;lt.length<W?(q=new Float64Array(V),lt.push(q),_.current=lt.length):q=lt[gt];for(let st=0;st<V;st++)q[st]=P.psd[st];x.current=(gt+1)%W;for(let st=1;st<V;st++)q[st]>M.current&&(M.current=q[st])}}}F(O,tt,U,G,k,Y,(ot,xt,z)=>{G=ot,k=xt,Y=z}),s.current=requestAnimationFrame(at)};return s.current=requestAnimationFrame(at),()=>{cancelAnimationFrame(s.current),et.disconnect()}},[t,g,A,D,V]);function F(E,O,et,G,k,Y,at){E.fillStyle="#0d1117",E.fillRect(0,0,O,et);const tt=_.current;if(tt<2){E.fillStyle="#4b5563",E.font="13px monospace",E.textAlign="center",E.fillText("Collecting spectrogram data…",O/2,et/2);return}const U=44,I=12,J=8,ot=22,xt=O-U-I,z=et-J-ot,P=y.current,W=M.current,lt=h.current,gt=x.current,q=tt,st=V-1,_t=q,Q=st;let At=G;(!At||k!==_t||Y!==Q)&&(At=E.createImageData(_t,Q));const Dt=At.data,Bt=1/-P,Pt=Math.log10;for(let B=0;B<q;B++){const T=tt<v.current?B:(gt+B)%tt,K=lt[T];for(let yt=0;yt<st;yt++){const Et=K[yt+1];let Vt=(10*Pt((Et||1e-30)/W)-P)*Bt;Vt<0?Vt=0:Vt>1&&(Vt=1);const qt=(Vt*255+.5|0)*4,wt=((st-1-yt)*_t+B)*4;Dt[wt]=qr[qt],Dt[wt+1]=qr[qt+1],Dt[wt+2]=qr[qt+2],Dt[wt+3]=255}}E.save(),E.imageSmoothingEnabled=!1,E.putImageData(At,0,0),E.drawImage(E.canvas,0,0,_t,Q,U,J,xt,z),E.fillStyle="#0d1117",E.fillRect(0,0,U,J+z),E.restore(),at(At,_t,Q);const Lt=Qe/ls;E.fillStyle="#8b949e",E.font="9px monospace",E.textAlign="right";const Xt=z/st;for(const B of[5,10,20,30,40,50]){if(B>qv)continue;const T=Math.round(B/Lt)-1;if(T<0||T>=st)continue;const K=J+(st-1-T)*Xt;E.fillText(`${B}`,U-4,K+3)}E.save(),E.translate(10,J+z/2),E.rotate(-Math.PI/2),E.textAlign="center",E.fillStyle="#8b949e",E.font="9px monospace",E.fillText("Hz",0,0),E.restore();const Wt=q*Yv/60;E.textAlign="center",E.fillStyle="#8b949e",E.font="9px monospace";const se=Wt>30?10:Wt>10?5:2;for(let B=0;B<=Wt;B+=se){const T=U+B/Wt*xt;E.fillText(`-${(Wt-B).toFixed(0)}s`,T,et-4)}E.fillText("now",U+xt,et-4);const j=8,ue=O-I+2,oe=J,le=Math.round(z);let Gt=R.current;if(!Gt||Gt.h!==le){const B=E.createImageData(j,le),T=B.data;for(let K=0;K<le;K++){const Et=((1-K/le)*255+.5|0)*4,mt=qr[Et],Vt=qr[Et+1],Ut=qr[Et+2];for(let qt=0;qt<j;qt++){const ee=(K*j+qt)*4;T[ee]=mt,T[ee+1]=Vt,T[ee+2]=Ut,T[ee+3]=255}}Gt={img:B,h:le},R.current=Gt}E.putImageData(Gt.img,Math.round(ue*c.current),Math.round(oe*c.current)),E.fillStyle="#8b949e",E.font="8px monospace",E.textAlign="left",E.fillText("0",ue+j+2,oe+6),E.fillText(`${P}`,ue+j+2,oe+le),E.fillText("dB",ue+j+2,oe+le/2+3)}const H=g===-1?"Avg":`Ch ${g+1}`;return w.jsxs("div",{className:"spectrogram-panel",children:[w.jsxs("div",{className:"spectrogram-toolbar",children:[w.jsxs("span",{className:"spectrogram-title",children:["Spectrogram"," ",w.jsx("small",{style:{color:"var(--text-dim)",fontWeight:400},children:H})]}),w.jsxs("div",{className:"spectrogram-channels",children:[w.jsx("button",{className:`sp-ch${g===-1?" active":""}`,onClick:()=>S(-1),children:"Avg"}),Array.from({length:Be},(E,O)=>w.jsx("button",{className:`sp-ch${g===O?" active":""}`,onClick:()=>S(O),children:O+1},O))]}),w.jsx("div",{className:"spectrogram-ctrls",children:w.jsx("button",{className:`btn${A?" active":""}`,onClick:()=>C(E=>!E),children:A?"▶":"⏸"})})]}),w.jsxs("div",{className:"spectrogram-canvas-wrap",children:[w.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}}),A&&w.jsx("div",{className:"spectral-paused",children:"PAUSED"})]})]})});function s2(r,t,i,s){if(r<=0)return 0;const l=r/i,c=1/(1+Math.pow(l,2*s)),f=t/r,p=1/(1+Math.pow(f,2*s));return Math.sqrt(c*p)}const r2=Z.memo(function({enabled:t,lowcut:i,highcut:s,order:l=5}){const c=Z.useRef(null),f=Z.useRef(window.devicePixelRatio||1),p=Z.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),m=Z.useRef(!0),h=Z.useCallback(()=>{const x=c.current;if(!x)return;const _=x.getContext("2d",{alpha:!1});if(!_)return;const{w:v,h:y}=p.current;if(v===0||y===0)return;_.setTransform(f.current,0,0,f.current,0,0),_.fillStyle="#0d1117",_.fillRect(0,0,v,y);const M=42,R=12,g=16,S=22,A=v-M-R,C=y-g-S,D=Qe/2,V=Math.min(D,125);if(t){const H=M+Math.max(i,0)/V*A,E=M+Math.min(s,V)/V*A;_.fillStyle="rgba(63, 185, 80, 0.08)",_.fillRect(H,g,E-H,C),_.strokeStyle="rgba(63, 185, 80, 0.5)",_.lineWidth=1,_.setLineDash([4,3]);for(const G of[i,s]){const k=M+G/V*A;_.beginPath(),_.moveTo(k,g),_.lineTo(k,g+C),_.stroke()}_.setLineDash([]),_.fillStyle="rgba(63, 185, 80, 0.8)",_.font="9px monospace",_.textAlign="center";const O=M+i/V*A,et=M+s/V*A;_.fillText(`${i} Hz`,O,g-4),_.fillText(`${s} Hz`,et,g-4)}_.strokeStyle="rgba(48,54,61,0.45)",_.lineWidth=.5;for(const H of[0,-10,-20,-30,-40,-50,-60]){const E=g+-H/60*C;_.beginPath(),_.moveTo(M,E),_.lineTo(M+A,E),_.stroke()}for(const H of[1,5,10,20,30,50,100]){if(H>V)continue;const E=M+H/V*A;_.beginPath(),_.moveTo(E,g),_.lineTo(E,g+C),_.stroke()}if(t){_.beginPath();const H=Math.max(200,Math.round(A));for(let E=0;E<=H;E++){const O=E/H*V,et=s2(O,i,s,l),G=20*Math.log10(Math.max(et,1e-6)),k=Math.max(-60,G),Y=g+-k/60*C,at=M+O/V*A;E===0?_.moveTo(at,Y):_.lineTo(at,Y)}_.strokeStyle="#3fb950",_.lineWidth=2,_.lineJoin="round",_.stroke(),_.lineTo(M+A,g+C),_.lineTo(M,g+C),_.closePath(),_.fillStyle="rgba(63, 185, 80, 0.06)",_.fill()}else _.strokeStyle="rgba(139, 148, 158, 0.6)",_.lineWidth=1.5,_.setLineDash([6,4]),_.beginPath(),_.moveTo(M,g),_.lineTo(M+A,g),_.stroke(),_.setLineDash([]),_.fillStyle="#6e7681",_.font="12px monospace",_.textAlign="center",_.fillText("Filter OFF — unfiltered passthrough",M+A/2,g+C/2);const F=g+3/60*C;_.strokeStyle="rgba(210, 153, 34, 0.5)",_.lineWidth=.8,_.setLineDash([3,3]),_.beginPath(),_.moveTo(M,F),_.lineTo(M+A,F),_.stroke(),_.setLineDash([]),_.fillStyle="rgba(210, 153, 34, 0.7)",_.font="8px monospace",_.textAlign="right",_.fillText("-3 dB",M-4,F+3),_.fillStyle="#8b949e",_.font="9px monospace",_.textAlign="right";for(const H of[0,-20,-40,-60]){const E=g+-H/60*C;_.fillText(`${H}`,M-4,E+3)}_.save(),_.translate(10,g+C/2),_.rotate(-Math.PI/2),_.textAlign="center",_.fillStyle="#8b949e",_.font="9px monospace",_.fillText("dB",0,0),_.restore(),_.fillStyle="#8b949e",_.font="9px monospace",_.textAlign="center";for(const H of[1,10,20,30,50,100])H>V||_.fillText(`${H}`,M+H/V*A,y-4);_.fillText("Hz",M+A+2,y-4),t&&(_.fillStyle="#3fb950",_.font="bold 10px monospace",_.textAlign="right",_.fillText(`Butterworth order ${l} · ${i}–${s} Hz`,M+A,g+C+14))},[t,i,s,l]);return Z.useEffect(()=>{const x=c.current;if(!x)return;const _=new ResizeObserver(v=>{const y=v[0];if(!y)return;const M=window.devicePixelRatio||1;f.current=M;const{width:R,height:g}=y.contentRect;p.current={w:R,h:g,pw:Math.round(R*M),ph:Math.round(g*M),dpr:M},x.width=Math.round(R*M),x.height=Math.round(g*M),m.current=!0,h()});return _.observe(x),m.current=!0,h(),()=>_.disconnect()},[h]),w.jsxs("div",{className:"filter-preview-panel",children:[w.jsxs("div",{className:"filter-preview-toolbar",children:[w.jsx("span",{className:"filter-preview-title",children:"Filter Response"}),w.jsx("span",{className:"filter-preview-meta",children:t?`Bandpass ${i}–${s} Hz · Order ${l}`:"Disabled"})]}),w.jsx("div",{className:"filter-preview-canvas-wrap",children:w.jsx("canvas",{ref:c,style:{display:"block",width:"100%",height:"100%"}})})]})}),o2=500;function l2(r,t,i,s){const l=Math.min(t,Qe*2);let c=0,f=0,p=1/0,m=-1/0,h=0,x=null;for(let D=t-l;D<t;D++){const V=(i-t+D+s)%s,F=r[V];c+=F,f+=F*F,F<p&&(p=F),F>m&&(m=F),x!==null&&(x>=0&&F<0||x<0&&F>=0)&&h++,x=F}const _=l>0?c/l:0,v=l>1?f/l-_*_:0,y=Math.sqrt(Math.max(0,v)),M=Math.sqrt(f/Math.max(1,l)),R=m-p;let g=0,S=0;for(let D=t-l;D<t;D++){const V=(i-t+D+s)%s,F=r[V]-_,H=F*F;g+=H*F,S+=H*H}const A=y>1e-10?g/l/(y*y*y):0,C=y>1e-10?S/l/(y*y*y*y)-3:0;return{ch:0,mean:_,rms:M,pp:R,min:p===1/0?0:p,max:m===-1/0?0:m,std:y,variance:v,skewness:A,kurtosis:C,zeroCross:h}}const c2=Z.memo(function({eegData:t}){const[i,s]=Z.useState([]),[l,c]=Z.useState("ch"),[f,p]=Z.useState(!0),m=Z.useRef(void 0);Z.useEffect(()=>{function y(){const M=t.buffers.current,R=t.writeIndex.current,g=t.samplesInBuffer.current,S=t.bufferSize;if(!M||g<10)return;const A=[];for(let C=0;C<Be;C++){const D=l2(M[C],g,R,S);D.ch=C,A.push(D)}s(A)}return y(),m.current=setInterval(y,o2),()=>clearInterval(m.current)},[t]);const h=Z.useCallback(y=>{c(M=>M===y?(p(R=>!R),y):(p(!0),y))},[]),x=[...i].sort((y,M)=>{const R=y[l],g=M[l];return f?R-g:g-R}),_=Z.useCallback(()=>{const M=[["Channel","Mean","RMS","Std","Variance","Peak-Peak","Min","Max","Skewness","Kurtosis","Zero-Crossings"].join(",")];for(const A of x)M.push([`Ch ${A.ch+1}`,A.mean.toFixed(4),A.rms.toFixed(4),A.std.toFixed(4),A.variance.toFixed(4),A.pp.toFixed(4),A.min.toFixed(4),A.max.toFixed(4),A.skewness.toFixed(4),A.kurtosis.toFixed(4),A.zeroCross.toString()].join(","));const R=new Blob([M.join(`
`)],{type:"text/csv"}),g=URL.createObjectURL(R),S=document.createElement("a");S.href=g,S.download=`pieeg_stats_${new Date().toISOString().replace(/[:.]/g,"-")}.csv`,S.click(),URL.revokeObjectURL(g)},[x]),v=[{key:"ch",label:"Ch",unit:"",precision:0},{key:"mean",label:"Mean",unit:"µV",precision:2},{key:"rms",label:"RMS",unit:"µV",precision:2},{key:"std",label:"Std",unit:"µV",precision:2},{key:"pp",label:"P-P",unit:"µV",precision:1},{key:"min",label:"Min",unit:"µV",precision:1},{key:"max",label:"Max",unit:"µV",precision:1},{key:"skewness",label:"Skew",unit:"",precision:2},{key:"kurtosis",label:"Kurt",unit:"",precision:2},{key:"zeroCross",label:"ZX",unit:"/2s",precision:0}];return w.jsxs("div",{className:"stats-panel",children:[w.jsxs("div",{className:"stats-toolbar",children:[w.jsx("span",{className:"stats-title",children:"Signal Statistics"}),w.jsxs("span",{className:"stats-meta",children:["16 channels · ",Qe," Hz · 2s window"]}),w.jsx("button",{className:"btn stats-btn-export",onClick:_,title:"Download stats as CSV",children:"⬇ CSV"})]}),w.jsx("div",{className:"stats-table-wrap",children:w.jsxs("table",{className:"stats-table",children:[w.jsx("thead",{children:w.jsx("tr",{children:v.map(y=>w.jsxs("th",{onClick:()=>h(y.key),className:l===y.key?"sorted":"",title:y.unit?`${y.label} (${y.unit})`:y.label,children:[y.label,l===y.key&&w.jsx("span",{className:"sort-arrow",children:f?" ▲":" ▼"})]},y.key))})}),w.jsx("tbody",{children:x.map(y=>w.jsxs("tr",{children:[w.jsxs("td",{className:"stats-ch-cell",children:[w.jsx("span",{className:"stats-ch-dot",style:{background:Tu[y.ch]}}),y.ch+1]}),w.jsx("td",{children:y.mean.toFixed(2)}),w.jsx("td",{children:y.rms.toFixed(2)}),w.jsx("td",{children:y.std.toFixed(2)}),w.jsx("td",{children:y.pp.toFixed(1)}),w.jsx("td",{children:y.min.toFixed(1)}),w.jsx("td",{children:y.max.toFixed(1)}),w.jsx("td",{children:y.skewness.toFixed(2)}),w.jsx("td",{children:y.kurtosis.toFixed(2)}),w.jsx("td",{children:y.zeroCross})]},y.ch))})]})})]})});function u2(){const[r,t]=Z.useState(null),[i,s]=Z.useState(!1),[l,c]=Z.useState(!1),[f,p]=Z.useState(!1);if(Z.useEffect(()=>{fetch("/api/update/check").then(v=>v.json()).then(v=>{v.error||t(v),s(!0)}).catch(()=>s(!0))},[]),l||!i||!(r!=null&&r.update_available))return null;const m=r.install_method==="git",h=/win/i.test(navigator.platform),x=m?`git pull origin main
pip install -e .`:"pip install --upgrade pieeg-server",_=h?".\\pieeg-server.cmd":"pieeg-server";return w.jsxs("div",{className:"update-banner",children:[w.jsxs("div",{className:"update-banner-content",children:[w.jsxs("span",{className:"update-banner-text",children:["Update available: ",w.jsx("strong",{children:r.current_version})," →"," ",w.jsx("strong",{children:r.latest_version})]}),w.jsx("button",{className:"btn update-btn",onClick:()=>p(v=>!v),children:f?"Hide instructions":"How to update"}),w.jsx("button",{className:"update-dismiss",onClick:()=>c(!0),title:"Dismiss",children:"✕"})]}),f&&w.jsxs("div",{className:"update-howto",children:[w.jsx("p",{children:m?"Run these commands in your project folder:":"Run this command:"}),w.jsx("pre",{children:w.jsx("code",{children:x})}),w.jsx("p",{children:"Then restart the server:"}),w.jsx("pre",{children:w.jsx("code",{children:_})})]})]})}const f2=[{key:"Space",desc:"Pause / Resume"},{key:"R",desc:"Start / Stop recording"},{key:"F",desc:"Toggle FFT panel"},{key:"G",desc:"Toggle Spectrogram"},{key:"S",desc:"Toggle Statistics panel"},{key:"V",desc:"Toggle XR / VR view"},{key:"P",desc:"Toggle performance monitor"},{key:"?",desc:"Show this help"},{key:"Esc",desc:"Close overlay / panel"}];function d2(){const[r,t]=Z.useState(!1);return Z.useEffect(()=>{function i(s){const l=s.target.tagName;l==="INPUT"||l==="SELECT"||l==="TEXTAREA"||((s.key==="?"||s.shiftKey&&s.code==="Slash")&&(s.preventDefault(),t(c=>!c)),s.code==="Escape"&&r&&t(!1))}return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[r]),r?w.jsx("div",{className:"modal-overlay",onClick:()=>t(!1),children:w.jsxs("div",{className:"shortcut-card",onClick:i=>i.stopPropagation(),children:[w.jsx("h2",{children:"Keyboard Shortcuts"}),w.jsx("div",{className:"shortcut-grid",children:f2.map(i=>w.jsxs("div",{className:"shortcut-row",children:[w.jsx("kbd",{children:i.key}),w.jsx("span",{children:i.desc})]},i.key))}),w.jsx("button",{className:"btn shortcut-close",onClick:()=>t(!1),children:"Close"})]})}):null}class Rh extends Z.Component{constructor(){super(...arguments);Ci(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,s){console.error("[ErrorBoundary]",i,s.componentStack)}render(){var i;return this.state.hasError?w.jsx("div",{className:"error-boundary",children:w.jsxs("div",{className:"error-card",children:[w.jsx("h2",{children:"Something went wrong"}),w.jsx("p",{className:"error-msg",children:(i=this.state.error)==null?void 0:i.message}),w.jsx("button",{className:"btn",onClick:()=>this.setState({hasError:!1,error:null}),children:"Retry"})]})}):this.props.children}}const Zv=new Set(Array.from({length:Be},(r,t)=>t)),h2=new Set([0,1,2,3]),p2=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],m2=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"},{value:16,label:"16s"}];function g2(){const[r,t]=Z.useState("live"),[i,s]=Z.useState(null),[l,c]=Z.useState(!1),[f,p]=Z.useState(!0),[m,h]=Z.useState(!1),[x,_]=Z.useState(1),[v,y]=Z.useState(40),[M,R]=Z.useState(4),[g,S]=Z.useState(100),[A,C]=Z.useState(null),[D,V]=Z.useState(!1),[F,H]=Z.useState(!1),[E,O]=Z.useState(!1),[et,G]=Z.useState(()=>window.innerWidth<768?new Set(h2):new Set(Zv)),k=tM(M),Y=Z.useRef(et);Y.current=et;const at=Z.useCallback(P=>{G(W=>{const lt=new Set(W);return lt.has(P)?lt.delete(P):lt.add(P),lt})},[]),tt=Z.useCallback(P=>{G(P?new Set(Zv):new Set)},[]);function U(){const P=!l;c(P),k.setPaused(P)}function I(){const P=!m;h(P),k.sendCommand({cmd:"set_filter",enabled:P,lowcut:parseFloat(String(x))||1,highcut:parseFloat(String(v))||40})}function J(){k.sendCommand({cmd:k.recording?"stop_record":"start_record"})}function ot(P){const W=Math.floor(P/60),lt=Math.floor(P%60);return`${String(W).padStart(2,"0")}:${String(lt).padStart(2,"0")}`}function xt(P,W){m&&k.sendCommand({cmd:"set_filter",enabled:!0,lowcut:parseFloat(String(P))||1,highcut:parseFloat(String(W))||40})}const z=Z.useCallback(P=>{if(!Y.current.has(P)){G(W=>{const lt=new Set(W);return lt.add(P),lt});return}C(W=>W===P?null:P)},[]);return Z.useEffect(()=>{function P(W){const lt=W.target.tagName;if(!(lt==="INPUT"||lt==="SELECT"||lt==="TEXTAREA")){if(r!=="live"){W.code==="Escape"&&(r==="playback"?(t("sessions"),s(null)):r==="sessions"&&t("live"));return}switch(W.code){case"Space":W.preventDefault(),U();break;case"KeyR":J();break;case"KeyF":p(gt=>!gt);break;case"KeyV":V(gt=>!gt);break;case"KeyS":O(gt=>!gt);break;case"KeyG":H(gt=>!gt);break;case"Escape":D?V(!1):A!==null?C(null):k.recordResult&&k.dismissRecordResult();break}}}return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[A,k.recordResult,r]),r==="playback"&&i?w.jsx(zd,{children:w.jsx(Rh,{children:w.jsx(RM,{filename:i,onBack:()=>{t("sessions"),s(null)}})})}):r==="sessions"?w.jsx(zd,{children:w.jsx(Rh,{children:w.jsx(SM,{onSelect:P=>{s(P),t("playback")},onBack:()=>t("live")})})}):(k.data.gridSuspended=A!==null&&et.has(A),w.jsxs(zd,{children:[w.jsx(u2,{}),w.jsxs("header",{className:"header",children:[w.jsxs("h1",{children:["Pi",w.jsx("span",{children:"EEG"}),"-16"," ",w.jsx("small",{style:{fontWeight:400,color:"var(--text-dim)"},children:"Dashboard"})]}),w.jsxs("div",{className:"status-bar",children:[w.jsxs("span",{children:[w.jsx("span",{className:`status-dot${k.connected?" connected":""}`}),k.connected?" Connected":" Disconnected"]}),k.latencyMs!==null&&w.jsxs("span",{className:`latency-badge${k.latencyMs>100?" warn":""}${k.latencyMs>500?" critical":""}`,children:[k.latencyMs," ms"]}),w.jsx("span",{className:`live-badge${l?" paused":""}`,children:l?"⏸ PAUSED":"● LIVE"}),w.jsx("span",{children:k.hz?`${k.hz} Hz`:"— Hz"}),w.jsxs("span",{children:[k.sampleCount.toLocaleString()," samples"]})]})]}),w.jsxs("div",{className:"controls",children:[w.jsx("button",{className:`btn${l?" active":""}`,onClick:U,children:l?"▶ Resume":"⏸ Pause"}),w.jsxs("button",{className:`btn btn-record${k.recording?" recording":""}`,onClick:J,children:[w.jsx("span",{className:"rec-dot"}),k.recording?`⏹ Stop ${ot(k.recordElapsed)}`:"⏺ Record"]}),w.jsxs("button",{className:`btn${m?" active":""}`,onClick:I,children:["Filter: ",m?"ON":"OFF"]}),w.jsxs("button",{className:`btn${f?" active":""}`,onClick:()=>p(P=>!P),children:["FFT ",f?"ON":"OFF"]}),w.jsxs("button",{className:`btn${F?" active":""}`,onClick:()=>H(P=>!P),children:["Spectrogram ",F?"ON":"OFF"]}),w.jsxs("button",{className:`btn${E?" active":""}`,onClick:()=>O(P=>!P),children:["Stats ",E?"ON":"OFF"]}),w.jsx("button",{className:"btn btn-sessions",onClick:()=>t("sessions"),children:"Sessions"}),w.jsx("button",{className:"btn btn-xr",onClick:()=>V(!0),title:"Open EEG waves in immersive 3D / VR",children:"🥽 XR View"}),w.jsx("div",{className:"sep"}),w.jsxs("div",{className:"control-group",children:[w.jsx("label",{children:"Low"}),w.jsx("input",{type:"number",value:x,min:.1,max:50,step:.5,onChange:P=>{_(P.target.value),xt(P.target.value,v)}})," ","Hz"]}),w.jsxs("div",{className:"control-group",children:[w.jsx("label",{children:"High"}),w.jsx("input",{type:"number",value:v,min:1,max:125,step:1,onChange:P=>{y(P.target.value),xt(x,P.target.value)}})," ","Hz"]}),w.jsx("div",{className:"sep"}),w.jsxs("div",{className:"control-group",children:[w.jsx("label",{children:"Time window"}),w.jsx("select",{value:M,onChange:P=>R(parseInt(P.target.value)),children:m2.map(P=>w.jsx("option",{value:P.value,children:P.label},P.value))})]}),w.jsxs("div",{className:"control-group",children:[w.jsx("label",{children:"Scale"}),w.jsx("select",{value:g,onChange:P=>S(parseInt(P.target.value)),children:p2.map(P=>w.jsx("option",{value:P.value,children:P.label},P.value))})]})]}),w.jsxs("div",{className:"channel-selector",children:[w.jsx("span",{className:"cs-label",children:"Channels"}),w.jsx("button",{className:"cs-toggle",onClick:()=>tt(!0),children:"All"}),w.jsx("button",{className:"cs-toggle",onClick:()=>tt(!1),children:"None"}),w.jsx("div",{className:"cs-grid",children:Array.from({length:Be},(P,W)=>w.jsx("button",{className:`cs-ch${et.has(W)?" on":""}`,onClick:()=>at(W),children:W+1},W))}),w.jsxs("span",{className:"cs-count",children:[et.size,"/",Be]})]}),w.jsx(Rh,{children:w.jsxs("div",{className:`main-area${f?" with-fft":""}${F||E||m?" with-analysis":""}`,children:[A!==null&&et.has(A)&&w.jsx(hM,{chIdx:A,eegData:k.data,yRange:g,onClose:()=>C(null)}),w.jsx("div",{className:"grid",children:Array.from({length:Be},(P,W)=>w.jsx(sM,{chIdx:W,eegData:k.data,yRange:g,active:et.has(W),onToggleExpand:()=>z(W)},W))}),f&&w.jsxs("div",{className:"fft-area",children:[w.jsx(vM,{eegData:k.data}),w.jsx(n2,{eegData:k.data})]}),m&&w.jsx(r2,{enabled:m,lowcut:parseFloat(String(x))||1,highcut:parseFloat(String(v))||40}),(F||E)&&w.jsxs("div",{className:"analysis-area",children:[F&&w.jsx(a2,{eegData:k.data}),E&&w.jsx(c2,{eegData:k.data})]})]})}),k.recordResult&&w.jsx("div",{className:"modal-overlay",children:w.jsxs("div",{className:"modal-card",children:[w.jsx("h2",{children:"Recording Complete"}),w.jsxs("div",{className:"modal-details",children:[w.jsxs("div",{className:"modal-row",children:[w.jsx("span",{className:"modal-label",children:"File"}),w.jsx("span",{className:"modal-value",children:k.recordResult.filename})]}),w.jsxs("div",{className:"modal-row",children:[w.jsx("span",{className:"modal-label",children:"Duration"}),w.jsx("span",{className:"modal-value",children:ot(k.recordResult.duration)})]}),w.jsxs("div",{className:"modal-row",children:[w.jsx("span",{className:"modal-label",children:"Frames"}),w.jsx("span",{className:"modal-value",children:k.recordResult.frames.toLocaleString()})]}),w.jsxs("div",{className:"modal-row",children:[w.jsx("span",{className:"modal-label",children:"Saved to"}),w.jsx("span",{className:"modal-value modal-path",children:k.recordResult.path})]})]}),w.jsxs("div",{className:"modal-actions",children:[w.jsx("a",{className:"btn modal-btn-download",href:k.recordResult.downloadUrl,download:!0,children:"Download CSV"}),w.jsx("button",{className:"btn modal-btn-view",onClick:()=>{const P=k.recordResult.filename;k.dismissRecordResult(),s(P),t("playback")},children:"View Session"}),w.jsx("button",{className:"btn modal-btn-dismiss",onClick:k.dismissRecordResult,children:"Dismiss"})]})]})}),D&&w.jsx(KR,{eegData:k.data,yScale:g,onExit:()=>V(!1)}),w.jsx(xM,{}),w.jsx(d2,{}),w.jsxs("footer",{className:"footer",children:[w.jsx("span",{children:"PiEEG-16-server · React Dashboard"}),w.jsxs("span",{className:"kbd-hints",children:[w.jsx("kbd",{children:"Space"})," Pause ",w.jsx("kbd",{children:"R"})," Record ",w.jsx("kbd",{children:"F"})," FFT ",w.jsx("kbd",{children:"G"})," Gram ",w.jsx("kbd",{children:"S"})," Stats ",w.jsx("kbd",{children:"V"})," XR ",w.jsx("kbd",{children:"Esc"})," Close ",w.jsx("kbd",{children:"P"})," Perf"]}),w.jsx("span",{children:"Battery powered only · Not a medical device"})]})]}))}Ky.createRoot(document.getElementById("root")).render(w.jsx(Vy.StrictMode,{children:w.jsx(g2,{})}));
