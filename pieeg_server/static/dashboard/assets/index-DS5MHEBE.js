var Ly=Object.defineProperty;var Oy=(r,t,i)=>t in r?Ly(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var wi=(r,t,i)=>Oy(r,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Wv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Dd={exports:{}},Wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function Py(){if(__)return Wo;__=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Wo.Fragment=t,Wo.jsx=i,Wo.jsxs=i,Wo}var v_;function Fy(){return v_||(v_=1,Dd.exports=Py()),Dd.exports}var L=Fy(),Nd={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function Iy(){if(x_)return he;x_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),g=Symbol.iterator;function b(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,_={};function v(I,X,$){this.props=I,this.context=X,this.refs=_,this.updater=$||M}v.prototype.isReactComponent={},v.prototype.setState=function(I,X){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,X,"setState")},v.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function A(){}A.prototype=v.prototype;function N(I,X,$){this.props=I,this.context=X,this.refs=_,this.updater=$||M}var D=N.prototype=new A;D.constructor=N,R(D,v.prototype),D.isPureReactComponent=!0;var G=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function O(I,X,$){var pt=$.ref;return{$$typeof:r,type:I,key:X,ref:pt!==void 0?pt:null,props:$}}function at(I,X){return O(I.type,X,I.props)}function H(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function q(I){var X={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function($){return X[$]})}var Y=/\/+/g;function st(I,X){return typeof I=="object"&&I!==null&&I.key!=null?q(""+I.key):X.toString(36)}function et(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(B,B):(I.status="pending",I.then(function(X){I.status==="pending"&&(I.status="fulfilled",I.value=X)},function(X){I.status==="pending"&&(I.status="rejected",I.reason=X)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function U(I,X,$,pt,St){var Z=typeof I;(Z==="undefined"||Z==="boolean")&&(I=null);var V=!1;if(I===null)V=!0;else switch(Z){case"bigint":case"string":case"number":V=!0;break;case"object":switch(I.$$typeof){case r:case t:V=!0;break;case x:return V=I._init,U(V(I._payload),X,$,pt,St)}}if(V)return St=St(I),V=pt===""?"."+st(I,0):pt,G(St)?($="",V!=null&&($=V.replace(Y,"$&/")+"/"),U(St,X,$,"",function(Dt){return Dt})):St!=null&&(H(St)&&(St=at(St,$+(St.key==null||I&&I.key===St.key?"":(""+St.key).replace(Y,"$&/")+"/")+V)),X.push(St)),1;V=0;var ft=pt===""?".":pt+":";if(G(I))for(var Mt=0;Mt<I.length;Mt++)pt=I[Mt],Z=ft+st(pt,Mt),V+=U(pt,X,$,Z,St);else if(Mt=b(I),typeof Mt=="function")for(I=Mt.call(I),Mt=0;!(pt=I.next()).done;)pt=pt.value,Z=ft+st(pt,Mt++),V+=U(pt,X,$,Z,St);else if(Z==="object"){if(typeof I.then=="function")return U(et(I),X,$,pt,St);throw X=String(I),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return V}function F(I,X,$){if(I==null)return I;var pt=[],St=0;return U(I,pt,"","",function(Z){return X.call($,Z,St++)}),pt}function k(I){if(I._status===-1){var X=I._result;X=X(),X.then(function($){(I._status===0||I._status===-1)&&(I._status=1,I._result=$)},function($){(I._status===0||I._status===-1)&&(I._status=2,I._result=$)}),I._status===-1&&(I._status=0,I._result=X)}if(I._status===1)return I._result.default;throw I._result}var nt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},vt={map:F,forEach:function(I,X,$){F(I,function(){X.apply(this,arguments)},$)},count:function(I){var X=0;return F(I,function(){X++}),X},toArray:function(I){return F(I,function(X){return X})||[]},only:function(I){if(!H(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return he.Activity=S,he.Children=vt,he.Component=v,he.Fragment=i,he.Profiler=l,he.PureComponent=N,he.StrictMode=s,he.Suspense=m,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,he.__COMPILER_RUNTIME={__proto__:null,c:function(I){return z.H.useMemoCache(I)}},he.cache=function(I){return function(){return I.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(I,X,$){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var pt=R({},I.props),St=I.key;if(X!=null)for(Z in X.key!==void 0&&(St=""+X.key),X)!E.call(X,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&X.ref===void 0||(pt[Z]=X[Z]);var Z=arguments.length-2;if(Z===1)pt.children=$;else if(1<Z){for(var V=Array(Z),ft=0;ft<Z;ft++)V[ft]=arguments[ft+2];pt.children=V}return O(I.type,St,pt)},he.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},he.createElement=function(I,X,$){var pt,St={},Z=null;if(X!=null)for(pt in X.key!==void 0&&(Z=""+X.key),X)E.call(X,pt)&&pt!=="key"&&pt!=="__self"&&pt!=="__source"&&(St[pt]=X[pt]);var V=arguments.length-2;if(V===1)St.children=$;else if(1<V){for(var ft=Array(V),Mt=0;Mt<V;Mt++)ft[Mt]=arguments[Mt+2];St.children=ft}if(I&&I.defaultProps)for(pt in V=I.defaultProps,V)St[pt]===void 0&&(St[pt]=V[pt]);return O(I,Z,St)},he.createRef=function(){return{current:null}},he.forwardRef=function(I){return{$$typeof:p,render:I}},he.isValidElement=H,he.lazy=function(I){return{$$typeof:x,_payload:{_status:-1,_result:I},_init:k}},he.memo=function(I,X){return{$$typeof:h,type:I,compare:X===void 0?null:X}},he.startTransition=function(I){var X=z.T,$={};z.T=$;try{var pt=I(),St=z.S;St!==null&&St($,pt),typeof pt=="object"&&pt!==null&&typeof pt.then=="function"&&pt.then(B,nt)}catch(Z){nt(Z)}finally{X!==null&&$.types!==null&&(X.types=$.types),z.T=X}},he.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},he.use=function(I){return z.H.use(I)},he.useActionState=function(I,X,$){return z.H.useActionState(I,X,$)},he.useCallback=function(I,X){return z.H.useCallback(I,X)},he.useContext=function(I){return z.H.useContext(I)},he.useDebugValue=function(){},he.useDeferredValue=function(I,X){return z.H.useDeferredValue(I,X)},he.useEffect=function(I,X){return z.H.useEffect(I,X)},he.useEffectEvent=function(I){return z.H.useEffectEvent(I)},he.useId=function(){return z.H.useId()},he.useImperativeHandle=function(I,X,$){return z.H.useImperativeHandle(I,X,$)},he.useInsertionEffect=function(I,X){return z.H.useInsertionEffect(I,X)},he.useLayoutEffect=function(I,X){return z.H.useLayoutEffect(I,X)},he.useMemo=function(I,X){return z.H.useMemo(I,X)},he.useOptimistic=function(I,X){return z.H.useOptimistic(I,X)},he.useReducer=function(I,X,$){return z.H.useReducer(I,X,$)},he.useRef=function(I){return z.H.useRef(I)},he.useState=function(I){return z.H.useState(I)},he.useSyncExternalStore=function(I,X,$){return z.H.useSyncExternalStore(I,X,$)},he.useTransition=function(){return z.H.useTransition()},he.version="19.2.4",he}var S_;function yp(){return S_||(S_=1,Nd.exports=Iy()),Nd.exports}var rt=yp();const By=Wv(rt);var Ud={exports:{}},qo={},Ld={exports:{}},Od={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function zy(){return y_||(y_=1,(function(r){function t(U,F){var k=U.length;U.push(F);t:for(;0<k;){var nt=k-1>>>1,vt=U[nt];if(0<l(vt,F))U[nt]=F,U[k]=vt,k=nt;else break t}}function i(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var F=U[0],k=U.pop();if(k!==F){U[0]=k;t:for(var nt=0,vt=U.length,I=vt>>>1;nt<I;){var X=2*(nt+1)-1,$=U[X],pt=X+1,St=U[pt];if(0>l($,k))pt<vt&&0>l(St,$)?(U[nt]=St,U[pt]=k,nt=pt):(U[nt]=$,U[X]=k,nt=X);else if(pt<vt&&0>l(St,k))U[nt]=St,U[pt]=k,nt=pt;else break t}}return F}function l(U,F){var k=U.sortIndex-F.sortIndex;return k!==0?k:U.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],h=[],x=1,S=null,g=3,b=!1,M=!1,R=!1,_=!1,v=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(U){for(var F=i(h);F!==null;){if(F.callback===null)s(h);else if(F.startTime<=U)s(h),F.sortIndex=F.expirationTime,t(m,F);else break;F=i(h)}}function G(U){if(R=!1,D(U),!M)if(i(m)!==null)M=!0,B||(B=!0,q());else{var F=i(h);F!==null&&et(G,F.startTime-U)}}var B=!1,z=-1,E=5,O=-1;function at(){return _?!0:!(r.unstable_now()-O<E)}function H(){if(_=!1,B){var U=r.unstable_now();O=U;var F=!0;try{t:{M=!1,R&&(R=!1,A(z),z=-1),b=!0;var k=g;try{e:{for(D(U),S=i(m);S!==null&&!(S.expirationTime>U&&at());){var nt=S.callback;if(typeof nt=="function"){S.callback=null,g=S.priorityLevel;var vt=nt(S.expirationTime<=U);if(U=r.unstable_now(),typeof vt=="function"){S.callback=vt,D(U),F=!0;break e}S===i(m)&&s(m),D(U)}else s(m);S=i(m)}if(S!==null)F=!0;else{var I=i(h);I!==null&&et(G,I.startTime-U),F=!1}}break t}finally{S=null,g=k,b=!1}F=void 0}}finally{F?q():B=!1}}}var q;if(typeof N=="function")q=function(){N(H)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,st=Y.port2;Y.port1.onmessage=H,q=function(){st.postMessage(null)}}else q=function(){v(H,0)};function et(U,F){z=v(function(){U(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(U){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var k=g;g=F;try{return U()}finally{g=k}},r.unstable_requestPaint=function(){_=!0},r.unstable_runWithPriority=function(U,F){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var k=g;g=U;try{return F()}finally{g=k}},r.unstable_scheduleCallback=function(U,F,k){var nt=r.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?nt+k:nt):k=nt,U){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=k+vt,U={id:x++,callback:F,priorityLevel:U,startTime:k,expirationTime:vt,sortIndex:-1},k>nt?(U.sortIndex=k,t(h,U),i(m)===null&&U===i(h)&&(R?(A(z),z=-1):R=!0,et(G,k-nt))):(U.sortIndex=vt,t(m,U),M||b||(M=!0,B||(B=!0,q()))),U},r.unstable_shouldYield=at,r.unstable_wrapCallback=function(U){var F=g;return function(){var k=g;g=F;try{return U.apply(this,arguments)}finally{g=k}}}})(Od)),Od}var M_;function Hy(){return M_||(M_=1,Ld.exports=zy()),Ld.exports}var Pd={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function Gy(){if(b_)return wn;b_=1;var r=yp();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:h,implementation:x}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,x)},wn.flushSync=function(m){var h=d.T,x=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=x,s.d.f()}},wn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},wn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,S=p(x,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:b}):x==="script"&&s.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},wn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},wn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,S=p(x,h.crossOrigin);s.d.L(m,x,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},wn.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},wn.requestFormReset=function(m){s.d.r(m)},wn.unstable_batchedUpdates=function(m,h){return m(h)},wn.useFormState=function(m,h,x){return d.H.useFormState(m,h,x)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.4",wn}var E_;function Vy(){if(E_)return Pd.exports;E_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Pd.exports=Gy(),Pd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function ky(){if(T_)return qo;T_=1;var r=Hy(),t=yp(),i=Vy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,C=u.child;C;){if(C===a){y=!0,a=u,o=f;break}if(C===o){y=!0,o=u,a=f;break}C=C.sibling}if(!y){for(C=f.child;C;){if(C===a){y=!0,a=f,o=u;break}if(C===o){y=!0,o=f,a=u;break}C=C.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,g=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),at=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Symbol.for("react.client.reference");function st(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Y?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case v:return"Profiler";case _:return"StrictMode";case G:return"Suspense";case B:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case N:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:st(e.type)||"Memo";case E:n=e._payload,e=e._init;try{return st(e(n))}catch{}}return null}var et=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},nt=[],vt=-1;function I(e){return{current:e}}function X(e){0>vt||(e.current=nt[vt],nt[vt]=null,vt--)}function $(e,n){vt++,nt[vt]=e.current,e.current=n}var pt=I(null),St=I(null),Z=I(null),V=I(null);function ft(e,n){switch($(Z,n),$(St,e),$(pt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Hg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Hg(n),e=Gg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(pt),$(pt,e)}function Mt(){X(pt),X(St),X(Z)}function Dt(e){e.memoizedState!==null&&$(V,e);var n=pt.current,a=Gg(n,e.type);n!==a&&($(St,e),$(pt,a))}function Pt(e){St.current===e&&(X(pt),X(St)),V.current===e&&(X(V),Vo._currentValue=k)}var kt,Ot;function Ft(e){if(kt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);kt=n&&n[1]||"",Ot=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kt+e+Ot}var te=!1;function Gt(e,n){if(!e||te)return"";te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Tt=function(){throw Error()};if(Object.defineProperty(Tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Tt,[])}catch(_t){var ht=_t}Reflect.construct(e,[],Tt)}else{try{Tt.call()}catch(_t){ht=_t}e.call(Tt.prototype)}}else{try{throw Error()}catch(_t){ht=_t}(Tt=e())&&typeof Tt.catch=="function"&&Tt.catch(function(){})}}catch(_t){if(_t&&ht&&typeof _t.stack=="string")return[_t.stack,ht.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],C=f[1];if(y&&C){var j=y.split(`
`),ut=C.split(`
`);for(u=o=0;o<j.length&&!j[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ut.length&&!ut[u].includes("DetermineComponentFrameRoot");)u++;if(o===j.length||u===ut.length)for(o=j.length-1,u=ut.length-1;1<=o&&0<=u&&j[o]!==ut[u];)u--;for(;1<=o&&0<=u;o--,u--)if(j[o]!==ut[u]){if(o!==1||u!==1)do if(o--,u--,0>u||j[o]!==ut[u]){var bt=`
`+j[o].replace(" at new "," at ");return e.displayName&&bt.includes("<anonymous>")&&(bt=bt.replace("<anonymous>",e.displayName)),bt}while(1<=o&&0<=u);break}}}finally{te=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ft(a):""}function ue(e,n){switch(e.tag){case 26:case 27:case 5:return Ft(e.type);case 16:return Ft("Lazy");case 13:return e.child!==n&&n!==null?Ft("Suspense Fallback"):Ft("Suspense");case 19:return Ft("SuspenseList");case 0:case 15:return Gt(e.type,!1);case 11:return Gt(e.type.render,!1);case 1:return Gt(e.type,!0);case 31:return Ft("Activity");default:return""}}function W(e){try{var n="",a=null;do n+=ue(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Te=Object.prototype.hasOwnProperty,me=r.unstable_scheduleCallback,Ae=r.unstable_cancelCallback,Wt=r.unstable_shouldYield,P=r.unstable_requestPaint,T=r.unstable_now,tt=r.unstable_getCurrentPriorityLevel,yt=r.unstable_ImmediatePriority,At=r.unstable_UserBlockingPriority,mt=r.unstable_NormalPriority,Yt=r.unstable_LowPriority,Ut=r.unstable_IdlePriority,ee=r.log,ne=r.unstable_setDisableYieldValue,Ct=null,Rt=null;function Vt(e){if(typeof ee=="function"&&ne(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Ct,e)}catch{}}var Ht=Math.clz32?Math.clz32:J,Xt=Math.log,ge=Math.LN2;function J(e){return e>>>=0,e===0?32:31-(Xt(e)/ge|0)|0}var Lt=256,Nt=262144,jt=4194304;function wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~f,o!==0?u=wt(o):(y&=C,y!==0?u=wt(y):a||(a=C&~e,a!==0&&(u=wt(a))))):(C=o&~f,C!==0?u=wt(C):y!==0?u=wt(y):a||(a=o&~e,a!==0&&(u=wt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Zt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ce(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=jt;return jt<<=1,(jt&62914560)===0&&(jt=4194304),e}function Ne(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function In(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,j=e.expirationTimes,ut=e.hiddenUpdates;for(a=y&~a;0<a;){var bt=31-Ht(a),Tt=1<<bt;C[bt]=0,j[bt]=-1;var ht=ut[bt];if(ht!==null)for(ut[bt]=null,bt=0;bt<ht.length;bt++){var _t=ht[bt];_t!==null&&(_t.lane&=-536870913)}a&=~Tt}o!==0&&no(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function no(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ht(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Xs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ht(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function vl(e,n){var a=n&-n;return a=(a&42)!==0?1:js(a),(a&(e.suspendedLanes|n))!==0?0:a}function js(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ws(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fi(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:u_(e.type))}function qs(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var bi=Math.random().toString(36).slice(2),ln="__reactFiber$"+bi,gn="__reactProps$"+bi,$i="__reactContainer$"+bi,wa="__reactEvents$"+bi,xl="__reactListeners$"+bi,Sl="__reactHandles$"+bi,yl="__reactResources$"+bi,ds="__reactMarker$"+bi;function io(e){delete e[ln],delete e[gn],delete e[wa],delete e[xl],delete e[Sl]}function Da(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[$i]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Yg(e);e!==null;){if(a=e[ln])return a;e=Yg(e)}return n}e=a,a=e.parentNode}return null}function Na(e){if(e=e[ln]||e[$i]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function hs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function w(e){var n=e[yl];return n||(n=e[yl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(e){e[ds]=!0}var gt=new Set,dt={};function ot(e,n){It(e,n),It(e+"Capture",n)}function It(e,n){for(dt[e]=n,e=0;e<n.length;e++)gt.add(n[e])}var qt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bt={},$t={};function ae(e){return Te.call($t,e)?!0:Te.call(Bt,e)?!1:qt.test(e)?$t[e]=!0:(Bt[e]=!0,!1)}function oe(e,n,a){if(ae(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function de(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Kt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oe(e){if(!e._valueTracker){var n=Qe(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function _n(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Qe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bn=/[\n"\\]/g;function fe(e){return e.replace(Bn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zn(e,n,a,o,u,f,y,C){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Ei(e,y,_e(n)):a!=null?Ei(e,y,_e(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+_e(C):e.removeAttribute("name")}function Qn(e,n,a,o,u,f,y,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Oe(e);return}a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Oe(e)}function Ei(e,n,a){n==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Jn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Be(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function cn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(et(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Oe(e)}function Hn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var un=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ti(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||un.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ta(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ti(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Ti(e,f,n[f])}function Ys(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ml(e){return Dx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ea(){}var Au=null;function Ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zs=null,Ks=null;function zp(e){var n=Na(e);if(n&&(e=n.stateNode)){var a=e[gn]||null;t:switch(e=n.stateNode,n.type){case"input":if(zn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[gn]||null;if(!u)throw Error(s(90));zn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&_n(o)}break t;case"textarea":Be(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Jn(e,!!a.multiple,n,!1)}}}var Cu=!1;function Hp(e,n,a){if(Cu)return e(n,a);Cu=!0;try{var o=e(n);return o}finally{if(Cu=!1,(Zs!==null||Ks!==null)&&(cc(),Zs&&(n=Zs,e=Ks,Ks=Zs=null,zp(n),e)))for(n=0;n<e.length;n++)zp(e[n])}}function ao(e,n){var a=e.stateNode;if(a===null)return null;var o=a[gn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=!1;if(na)try{var so={};Object.defineProperty(so,"passive",{get:function(){wu=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{wu=!1}var Ua=null,Du=null,bl=null;function Gp(){if(bl)return bl;var e,n=Du,a=n.length,o,u="value"in Ua?Ua.value:Ua.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return bl=u.slice(e,1<o?1-o:void 0)}function El(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Tl(){return!0}function Vp(){return!1}function Xn(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Tl:Vp,this.isPropagationStopped=Vp,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),n}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=Xn(ps),ro=S({},ps,{view:0,detail:0}),Nx=Xn(ro),Nu,Uu,oo,Rl=S({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(Nu=e.screenX-oo.screenX,Uu=e.screenY-oo.screenY):Uu=Nu=0,oo=e),Nu)},movementY:function(e){return"movementY"in e?e.movementY:Uu}}),kp=Xn(Rl),Ux=S({},Rl,{dataTransfer:0}),Lx=Xn(Ux),Ox=S({},ro,{relatedTarget:0}),Lu=Xn(Ox),Px=S({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Fx=Xn(Px),Ix=S({},ps,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bx=Xn(Ix),zx=S({},ps,{data:0}),Xp=Xn(zx),Hx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Vx[e])?!!n[e]:!1}function Ou(){return kx}var Xx=S({},ro,{key:function(e){if(e.key){var n=Hx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=El(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(e){return e.type==="keypress"?El(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?El(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jx=Xn(Xx),Wx=S({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=Xn(Wx),qx=S({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),Yx=Xn(qx),Zx=S({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kx=Xn(Zx),Qx=S({},Rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jx=Xn(Qx),$x=S({},ps,{newState:0,oldState:0}),tS=Xn($x),eS=[9,13,27,32],Pu=na&&"CompositionEvent"in window,lo=null;na&&"documentMode"in document&&(lo=document.documentMode);var nS=na&&"TextEvent"in window&&!lo,Wp=na&&(!Pu||lo&&8<lo&&11>=lo),qp=" ",Yp=!1;function Zp(e,n){switch(e){case"keyup":return eS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qs=!1;function iS(e,n){switch(e){case"compositionend":return Kp(n);case"keypress":return n.which!==32?null:(Yp=!0,qp);case"textInput":return e=n.data,e===qp&&Yp?null:e;default:return null}}function aS(e,n){if(Qs)return e==="compositionend"||!Pu&&Zp(e,n)?(e=Gp(),bl=Du=Ua=null,Qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wp&&n.locale!=="ko"?null:n.data;default:return null}}var sS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sS[e.type]:n==="textarea"}function Jp(e,n,a,o){Zs?Ks?Ks.push(o):Ks=[o]:Zs=o,n=gc(n,"onChange"),0<n.length&&(a=new Al("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var co=null,uo=null;function rS(e){Og(e,0)}function Cl(e){var n=hs(e);if(_n(n))return e}function $p(e,n){if(e==="change")return n}var tm=!1;if(na){var Fu;if(na){var Iu="oninput"in document;if(!Iu){var em=document.createElement("div");em.setAttribute("oninput","return;"),Iu=typeof em.oninput=="function"}Fu=Iu}else Fu=!1;tm=Fu&&(!document.documentMode||9<document.documentMode)}function nm(){co&&(co.detachEvent("onpropertychange",im),uo=co=null)}function im(e){if(e.propertyName==="value"&&Cl(uo)){var n=[];Jp(n,uo,e,Ru(e)),Hp(rS,n)}}function oS(e,n,a){e==="focusin"?(nm(),co=n,uo=a,co.attachEvent("onpropertychange",im)):e==="focusout"&&nm()}function lS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cl(uo)}function cS(e,n){if(e==="click")return Cl(n)}function uS(e,n){if(e==="input"||e==="change")return Cl(n)}function fS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:fS;function fo(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Te.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function am(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sm(e,n){var a=am(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=am(a)}}function rm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?rm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function om(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Jt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Jt(e.document)}return n}function Bu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var dS=na&&"documentMode"in document&&11>=document.documentMode,Js=null,zu=null,ho=null,Hu=!1;function lm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hu||Js==null||Js!==Jt(o)||(o=Js,"selectionStart"in o&&Bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ho&&fo(ho,o)||(ho=o,o=gc(zu,"onSelect"),0<o.length&&(n=new Al("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Js)))}function ms(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var $s={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionrun:ms("Transition","TransitionRun"),transitionstart:ms("Transition","TransitionStart"),transitioncancel:ms("Transition","TransitionCancel"),transitionend:ms("Transition","TransitionEnd")},Gu={},cm={};na&&(cm=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function gs(e){if(Gu[e])return Gu[e];if(!$s[e])return e;var n=$s[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in cm)return Gu[e]=n[a];return e}var um=gs("animationend"),fm=gs("animationiteration"),dm=gs("animationstart"),hS=gs("transitionrun"),pS=gs("transitionstart"),mS=gs("transitioncancel"),hm=gs("transitionend"),pm=new Map,Vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vu.push("scrollEnd");function Ai(e,n){pm.set(e,n),ot(n,[e])}var wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],tr=0,ku=0;function Dl(){for(var e=tr,n=ku=tr=0;n<e;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&mm(a,u,f)}}function Nl(e,n,a,o){fi[tr++]=e,fi[tr++]=n,fi[tr++]=a,fi[tr++]=o,ku|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Xu(e,n,a,o){return Nl(e,n,a,o),Ul(e)}function _s(e,n){return Nl(e,null,null,n),Ul(e)}function mm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ht(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Ul(e){if(50<Po)throw Po=0,td=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var er={};function gS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new gS(e,n,a,o)}function ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function gm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ll(e,n,a,o,u,f){var y=0;if(o=e,typeof e=="function")ju(e)&&(y=1);else if(typeof e=="string")y=yy(e,a,pt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=ti(31,a,n,u),e.elementType=O,e.lanes=f,e;case R:return vs(a.children,u,f,n);case _:y=8,u|=24;break;case v:return e=ti(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case G:return e=ti(13,a,n,u),e.elementType=G,e.lanes=f,e;case B:return e=ti(19,a,n,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:y=10;break t;case A:y=9;break t;case D:y=11;break t;case z:y=14;break t;case E:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function vs(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function Wu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function _m(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function qu(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var vm=new WeakMap;function di(e,n){if(typeof e=="object"&&e!==null){var a=vm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:W(n)},vm.set(e,n),n)}return{value:e,source:n,stack:W(n)}}var nr=[],ir=0,Ol=null,po=0,hi=[],pi=0,La=null,Ii=1,Bi="";function aa(e,n){nr[ir++]=po,nr[ir++]=Ol,Ol=e,po=n}function xm(e,n,a){hi[pi++]=Ii,hi[pi++]=Bi,hi[pi++]=La,La=e;var o=Ii;e=Bi;var u=32-Ht(o)-1;o&=~(1<<u),a+=1;var f=32-Ht(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Ii=1<<32-Ht(n)+u|a<<u|o,Bi=f+e}else Ii=1<<f|a<<u|o,Bi=e}function Yu(e){e.return!==null&&(aa(e,1),xm(e,1,0))}function Zu(e){for(;e===Ol;)Ol=nr[--ir],nr[ir]=null,po=nr[--ir],nr[ir]=null;for(;e===La;)La=hi[--pi],hi[pi]=null,Bi=hi[--pi],hi[pi]=null,Ii=hi[--pi],hi[pi]=null}function Sm(e,n){hi[pi++]=Ii,hi[pi++]=Bi,hi[pi++]=La,Ii=n.id,Bi=n.overflow,La=e}var bn=null,Ye=null,we=!1,Oa=null,mi=!1,Ku=Error(s(519));function Pa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(di(n,e)),Ku}function ym(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[gn]=o,a){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)be(Io[a],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":be("invalid",n),Qn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":be("invalid",n);break;case"textarea":be("invalid",n),cn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Bg(n.textContent,a)?(o.popover!=null&&(be("beforetoggle",n),be("toggle",n)),o.onScroll!=null&&be("scroll",n),o.onScrollEnd!=null&&be("scrollend",n),o.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||Pa(e,!0)}function Mm(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:bn=bn.return}}function ar(e){if(e!==bn)return!1;if(!we)return Mm(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||md(e.type,e.memoizedProps)),a=!a),a&&Ye&&Pa(e),Mm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=qg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=qg(e)}else n===27?(n=Ye,Za(e.type)?(e=Sd,Sd=null,Ye=e):Ye=n):Ye=bn?_i(e.stateNode.nextSibling):null;return!0}function xs(){Ye=bn=null,we=!1}function Qu(){var e=Oa;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Oa=null),e}function mo(e){Oa===null?Oa=[e]:Oa.push(e)}var Ju=I(null),Ss=null,sa=null;function Fa(e,n,a){$(Ju,n._currentValue),n._currentValue=a}function ra(e){e._currentValue=Ju.current,X(Ju)}function $u(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function tf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var C=f;f=u;for(var j=0;j<n.length;j++)if(C.context===n[j]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),$u(f.return,a,e),o||(y=null);break t}f=C.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),$u(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function sr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var C=u.type;$n(u.pendingProps.value,y.value)||(e!==null?e.push(C):e=[C])}}else if(u===V.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Vo):e=[Vo])}u=u.return}e!==null&&tf(n,e,a,o),n.flags|=262144}function Pl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ys(e){Ss=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return bm(Ss,e)}function Fl(e,n){return Ss===null&&ys(e),bm(e,n)}function bm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(e===null)throw Error(s(308));sa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else sa=sa.next=n;return a}var _S=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},vS=r.unstable_scheduleCallback,xS=r.unstable_NormalPriority,fn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ef(){return{controller:new _S,data:new Map,refCount:0}}function go(e){e.refCount--,e.refCount===0&&vS(xS,function(){e.controller.abort()})}var _o=null,nf=0,rr=0,or=null;function SS(e,n){if(_o===null){var a=_o=[];nf=0,rr=rd(),or={status:"pending",value:void 0,then:function(o){a.push(o)}}}return nf++,n.then(Em,Em),n}function Em(){if(--nf===0&&_o!==null){or!==null&&(or.status="fulfilled");var e=_o;_o=null,rr=0,or=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function yS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Tm=U.S;U.S=function(e,n){lg=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&SS(e,n),Tm!==null&&Tm(e,n)};var Ms=I(null);function af(){var e=Ms.current;return e!==null?e:qe.pooledCache}function Il(e,n){n===null?$(Ms,Ms.current):$(Ms,n.pool)}function Am(){var e=af();return e===null?null:{parent:fn._currentValue,pool:e}}var lr=Error(s(460)),sf=Error(s(474)),Bl=Error(s(542)),zl={then:function(){}};function Rm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ea,ea),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Dm(e),e;default:if(typeof n.status=="string")n.then(ea,ea);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Dm(e),e}throw Es=n,lr}}function bs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Es=a,lr):a}}var Es=null;function wm(){if(Es===null)throw Error(s(459));var e=Es;return Es=null,e}function Dm(e){if(e===lr||e===Bl)throw Error(s(483))}var cr=null,vo=0;function Hl(e){var n=vo;return vo+=1,cr===null&&(cr=[]),Cm(cr,e,n)}function xo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Gl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Nm(e){function n(it,K){if(e){var ct=it.deletions;ct===null?(it.deletions=[K],it.flags|=16):ct.push(K)}}function a(it,K){if(!e)return null;for(;K!==null;)n(it,K),K=K.sibling;return null}function o(it){for(var K=new Map;it!==null;)it.key!==null?K.set(it.key,it):K.set(it.index,it),it=it.sibling;return K}function u(it,K){return it=ia(it,K),it.index=0,it.sibling=null,it}function f(it,K,ct){return it.index=ct,e?(ct=it.alternate,ct!==null?(ct=ct.index,ct<K?(it.flags|=67108866,K):ct):(it.flags|=67108866,K)):(it.flags|=1048576,K)}function y(it){return e&&it.alternate===null&&(it.flags|=67108866),it}function C(it,K,ct,Et){return K===null||K.tag!==6?(K=Wu(ct,it.mode,Et),K.return=it,K):(K=u(K,ct),K.return=it,K)}function j(it,K,ct,Et){var se=ct.type;return se===R?bt(it,K,ct.props.children,Et,ct.key):K!==null&&(K.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===E&&bs(se)===K.type)?(K=u(K,ct.props),xo(K,ct),K.return=it,K):(K=Ll(ct.type,ct.key,ct.props,null,it.mode,Et),xo(K,ct),K.return=it,K)}function ut(it,K,ct,Et){return K===null||K.tag!==4||K.stateNode.containerInfo!==ct.containerInfo||K.stateNode.implementation!==ct.implementation?(K=qu(ct,it.mode,Et),K.return=it,K):(K=u(K,ct.children||[]),K.return=it,K)}function bt(it,K,ct,Et,se){return K===null||K.tag!==7?(K=vs(ct,it.mode,Et,se),K.return=it,K):(K=u(K,ct),K.return=it,K)}function Tt(it,K,ct){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=Wu(""+K,it.mode,ct),K.return=it,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case b:return ct=Ll(K.type,K.key,K.props,null,it.mode,ct),xo(ct,K),ct.return=it,ct;case M:return K=qu(K,it.mode,ct),K.return=it,K;case E:return K=bs(K),Tt(it,K,ct)}if(et(K)||q(K))return K=vs(K,it.mode,ct,null),K.return=it,K;if(typeof K.then=="function")return Tt(it,Hl(K),ct);if(K.$$typeof===N)return Tt(it,Fl(it,K),ct);Gl(it,K)}return null}function ht(it,K,ct,Et){var se=K!==null?K.key:null;if(typeof ct=="string"&&ct!==""||typeof ct=="number"||typeof ct=="bigint")return se!==null?null:C(it,K,""+ct,Et);if(typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case b:return ct.key===se?j(it,K,ct,Et):null;case M:return ct.key===se?ut(it,K,ct,Et):null;case E:return ct=bs(ct),ht(it,K,ct,Et)}if(et(ct)||q(ct))return se!==null?null:bt(it,K,ct,Et,null);if(typeof ct.then=="function")return ht(it,K,Hl(ct),Et);if(ct.$$typeof===N)return ht(it,K,Fl(it,ct),Et);Gl(it,ct)}return null}function _t(it,K,ct,Et,se){if(typeof Et=="string"&&Et!==""||typeof Et=="number"||typeof Et=="bigint")return it=it.get(ct)||null,C(K,it,""+Et,se);if(typeof Et=="object"&&Et!==null){switch(Et.$$typeof){case b:return it=it.get(Et.key===null?ct:Et.key)||null,j(K,it,Et,se);case M:return it=it.get(Et.key===null?ct:Et.key)||null,ut(K,it,Et,se);case E:return Et=bs(Et),_t(it,K,ct,Et,se)}if(et(Et)||q(Et))return it=it.get(ct)||null,bt(K,it,Et,se,null);if(typeof Et.then=="function")return _t(it,K,ct,Hl(Et),se);if(Et.$$typeof===N)return _t(it,K,ct,Fl(K,Et),se);Gl(K,Et)}return null}function Qt(it,K,ct,Et){for(var se=null,Pe=null,ie=K,ve=K=0,Ce=null;ie!==null&&ve<ct.length;ve++){ie.index>ve?(Ce=ie,ie=null):Ce=ie.sibling;var Fe=ht(it,ie,ct[ve],Et);if(Fe===null){ie===null&&(ie=Ce);break}e&&ie&&Fe.alternate===null&&n(it,ie),K=f(Fe,K,ve),Pe===null?se=Fe:Pe.sibling=Fe,Pe=Fe,ie=Ce}if(ve===ct.length)return a(it,ie),we&&aa(it,ve),se;if(ie===null){for(;ve<ct.length;ve++)ie=Tt(it,ct[ve],Et),ie!==null&&(K=f(ie,K,ve),Pe===null?se=ie:Pe.sibling=ie,Pe=ie);return we&&aa(it,ve),se}for(ie=o(ie);ve<ct.length;ve++)Ce=_t(ie,it,ve,ct[ve],Et),Ce!==null&&(e&&Ce.alternate!==null&&ie.delete(Ce.key===null?ve:Ce.key),K=f(Ce,K,ve),Pe===null?se=Ce:Pe.sibling=Ce,Pe=Ce);return e&&ie.forEach(function(ts){return n(it,ts)}),we&&aa(it,ve),se}function re(it,K,ct,Et){if(ct==null)throw Error(s(151));for(var se=null,Pe=null,ie=K,ve=K=0,Ce=null,Fe=ct.next();ie!==null&&!Fe.done;ve++,Fe=ct.next()){ie.index>ve?(Ce=ie,ie=null):Ce=ie.sibling;var ts=ht(it,ie,Fe.value,Et);if(ts===null){ie===null&&(ie=Ce);break}e&&ie&&ts.alternate===null&&n(it,ie),K=f(ts,K,ve),Pe===null?se=ts:Pe.sibling=ts,Pe=ts,ie=Ce}if(Fe.done)return a(it,ie),we&&aa(it,ve),se;if(ie===null){for(;!Fe.done;ve++,Fe=ct.next())Fe=Tt(it,Fe.value,Et),Fe!==null&&(K=f(Fe,K,ve),Pe===null?se=Fe:Pe.sibling=Fe,Pe=Fe);return we&&aa(it,ve),se}for(ie=o(ie);!Fe.done;ve++,Fe=ct.next())Fe=_t(ie,it,ve,Fe.value,Et),Fe!==null&&(e&&Fe.alternate!==null&&ie.delete(Fe.key===null?ve:Fe.key),K=f(Fe,K,ve),Pe===null?se=Fe:Pe.sibling=Fe,Pe=Fe);return e&&ie.forEach(function(Uy){return n(it,Uy)}),we&&aa(it,ve),se}function je(it,K,ct,Et){if(typeof ct=="object"&&ct!==null&&ct.type===R&&ct.key===null&&(ct=ct.props.children),typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case b:t:{for(var se=ct.key;K!==null;){if(K.key===se){if(se=ct.type,se===R){if(K.tag===7){a(it,K.sibling),Et=u(K,ct.props.children),Et.return=it,it=Et;break t}}else if(K.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===E&&bs(se)===K.type){a(it,K.sibling),Et=u(K,ct.props),xo(Et,ct),Et.return=it,it=Et;break t}a(it,K);break}else n(it,K);K=K.sibling}ct.type===R?(Et=vs(ct.props.children,it.mode,Et,ct.key),Et.return=it,it=Et):(Et=Ll(ct.type,ct.key,ct.props,null,it.mode,Et),xo(Et,ct),Et.return=it,it=Et)}return y(it);case M:t:{for(se=ct.key;K!==null;){if(K.key===se)if(K.tag===4&&K.stateNode.containerInfo===ct.containerInfo&&K.stateNode.implementation===ct.implementation){a(it,K.sibling),Et=u(K,ct.children||[]),Et.return=it,it=Et;break t}else{a(it,K);break}else n(it,K);K=K.sibling}Et=qu(ct,it.mode,Et),Et.return=it,it=Et}return y(it);case E:return ct=bs(ct),je(it,K,ct,Et)}if(et(ct))return Qt(it,K,ct,Et);if(q(ct)){if(se=q(ct),typeof se!="function")throw Error(s(150));return ct=se.call(ct),re(it,K,ct,Et)}if(typeof ct.then=="function")return je(it,K,Hl(ct),Et);if(ct.$$typeof===N)return je(it,K,Fl(it,ct),Et);Gl(it,ct)}return typeof ct=="string"&&ct!==""||typeof ct=="number"||typeof ct=="bigint"?(ct=""+ct,K!==null&&K.tag===6?(a(it,K.sibling),Et=u(K,ct),Et.return=it,it=Et):(a(it,K),Et=Wu(ct,it.mode,Et),Et.return=it,it=Et),y(it)):a(it,K)}return function(it,K,ct,Et){try{vo=0;var se=je(it,K,ct,Et);return cr=null,se}catch(ie){if(ie===lr||ie===Bl)throw ie;var Pe=ti(29,ie,null,it.mode);return Pe.lanes=Et,Pe.return=it,Pe}finally{}}}var Ts=Nm(!0),Um=Nm(!1),Ia=!1;function rf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function of(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ie&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ul(e),mm(e,null,a),n}return Nl(e,o,n,a),Ul(e)}function So(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xs(e,a)}}function lf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var cf=!1;function yo(){if(cf){var e=or;if(e!==null)throw e}}function Mo(e,n,a,o){cf=!1;var u=e.updateQueue;Ia=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var j=C,ut=j.next;j.next=null,y===null?f=ut:y.next=ut,y=j;var bt=e.alternate;bt!==null&&(bt=bt.updateQueue,C=bt.lastBaseUpdate,C!==y&&(C===null?bt.firstBaseUpdate=ut:C.next=ut,bt.lastBaseUpdate=j))}if(f!==null){var Tt=u.baseState;y=0,bt=ut=j=null,C=f;do{var ht=C.lane&-536870913,_t=ht!==C.lane;if(_t?(Re&ht)===ht:(o&ht)===ht){ht!==0&&ht===rr&&(cf=!0),bt!==null&&(bt=bt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Qt=e,re=C;ht=n;var je=a;switch(re.tag){case 1:if(Qt=re.payload,typeof Qt=="function"){Tt=Qt.call(je,Tt,ht);break t}Tt=Qt;break t;case 3:Qt.flags=Qt.flags&-65537|128;case 0:if(Qt=re.payload,ht=typeof Qt=="function"?Qt.call(je,Tt,ht):Qt,ht==null)break t;Tt=S({},Tt,ht);break t;case 2:Ia=!0}}ht=C.callback,ht!==null&&(e.flags|=64,_t&&(e.flags|=8192),_t=u.callbacks,_t===null?u.callbacks=[ht]:_t.push(ht))}else _t={lane:ht,tag:C.tag,payload:C.payload,callback:C.callback,next:null},bt===null?(ut=bt=_t,j=Tt):bt=bt.next=_t,y|=ht;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;_t=C,C=_t.next,_t.next=null,u.lastBaseUpdate=_t,u.shared.pending=null}}while(!0);bt===null&&(j=Tt),u.baseState=j,u.firstBaseUpdate=ut,u.lastBaseUpdate=bt,f===null&&(u.shared.lanes=0),Xa|=y,e.lanes=y,e.memoizedState=Tt}}function Lm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Om(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Lm(a[e],n)}var ur=I(null),Vl=I(0);function Pm(e,n){e=ma,$(Vl,e),$(ur,n),ma=e|n.baseLanes}function uf(){$(Vl,ma),$(ur,ur.current)}function ff(){ma=Vl.current,X(ur),X(Vl)}var ei=I(null),gi=null;function Ha(e){var n=e.alternate;$(sn,sn.current&1),$(ei,e),gi===null&&(n===null||ur.current!==null||n.memoizedState!==null)&&(gi=e)}function df(e){$(sn,sn.current),$(ei,e),gi===null&&(gi=e)}function Fm(e){e.tag===22?($(sn,sn.current),$(ei,e),gi===null&&(gi=e)):Ga()}function Ga(){$(sn,sn.current),$(ei,ei.current)}function ni(e){X(ei),gi===e&&(gi=null),X(sn)}var sn=I(0);function kl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||vd(a)||xd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,pe=null,ke=null,dn=null,Xl=!1,fr=!1,As=!1,jl=0,bo=0,dr=null,MS=0;function en(){throw Error(s(321))}function hf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function pf(e,n,a,o,u,f){return oa=f,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?x0:wf,As=!1,f=a(o,u),As=!1,fr&&(f=Bm(n,a,o,u)),Im(e),f}function Im(e){U.H=Ao;var n=ke!==null&&ke.next!==null;if(oa=0,dn=ke=pe=null,Xl=!1,bo=0,dr=null,n)throw Error(s(300));e===null||hn||(e=e.dependencies,e!==null&&Pl(e)&&(hn=!0))}function Bm(e,n,a,o){pe=e;var u=0;do{if(fr&&(dr=null),bo=0,fr=!1,25<=u)throw Error(s(301));if(u+=1,dn=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=S0,f=n(a,o)}while(fr);return f}function bS(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?Eo(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(pe.flags|=1024),n}function mf(){var e=jl!==0;return jl=0,e}function gf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function _f(e){if(Xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Xl=!1}oa=0,dn=ke=pe=null,fr=!1,bo=jl=0,dr=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?pe.memoizedState=dn=e:dn=dn.next=e,dn}function rn(){if(ke===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=dn===null?pe.memoizedState:dn.next;if(n!==null)dn=n,ke=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},dn===null?pe.memoizedState=dn=e:dn=dn.next=e}return dn}function Wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var n=bo;return bo+=1,dr===null&&(dr=[]),e=Cm(dr,e,n),n=pe,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?x0:wf),e}function ql(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Eo(e);if(e.$$typeof===N)return En(e)}throw Error(s(438,String(e)))}function vf(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Wl(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=at;return n.index++,a}function la(e,n){return typeof n=="function"?n(e):n}function Yl(e){var n=rn();return xf(n,ke,e)}function xf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var C=y=null,j=null,ut=n,bt=!1;do{var Tt=ut.lane&-536870913;if(Tt!==ut.lane?(Re&Tt)===Tt:(oa&Tt)===Tt){var ht=ut.revertLane;if(ht===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null}),Tt===rr&&(bt=!0);else if((oa&ht)===ht){ut=ut.next,ht===rr&&(bt=!0);continue}else Tt={lane:0,revertLane:ut.revertLane,gesture:null,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null},j===null?(C=j=Tt,y=f):j=j.next=Tt,pe.lanes|=ht,Xa|=ht;Tt=ut.action,As&&a(f,Tt),f=ut.hasEagerState?ut.eagerState:a(f,Tt)}else ht={lane:Tt,revertLane:ut.revertLane,gesture:ut.gesture,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null},j===null?(C=j=ht,y=f):j=j.next=ht,pe.lanes|=Tt,Xa|=Tt;ut=ut.next}while(ut!==null&&ut!==n);if(j===null?y=f:j.next=C,!$n(f,e.memoizedState)&&(hn=!0,bt&&(a=or,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=j,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Sf(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);$n(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function zm(e,n,a){var o=pe,u=rn(),f=we;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!$n((ke||u).memoizedState,a);if(y&&(u.memoizedState=a,hn=!0),u=u.queue,bf(Vm.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||dn!==null&&dn.memoizedState.tag&1){if(o.flags|=2048,hr(9,{destroy:void 0},Gm.bind(null,o,u,a,n),null),qe===null)throw Error(s(349));f||(oa&127)!==0||Hm(o,n,a)}return a}function Hm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Wl(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Gm(e,n,a,o){n.value=a,n.getSnapshot=o,km(n)&&Xm(e)}function Vm(e,n,a){return a(function(){km(n)&&Xm(e)})}function km(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Xm(e){var n=_s(e,2);n!==null&&Zn(n,e,2)}function yf(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),As){Vt(!0);try{a()}finally{Vt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},n}function jm(e,n,a,o){return e.baseState=a,xf(e,ke,typeof o=="function"?o:la)}function ES(e,n,a,o,u){if(Ql(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};U.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Wm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Wm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=U.T,y={};U.T=y;try{var C=a(u,o),j=U.S;j!==null&&j(y,C),qm(e,n,C)}catch(ut){Mf(e,n,ut)}finally{f!==null&&y.types!==null&&(f.types=y.types),U.T=f}}else try{f=a(u,o),qm(e,n,f)}catch(ut){Mf(e,n,ut)}}function qm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Ym(e,n,o)},function(o){return Mf(e,n,o)}):Ym(e,n,a)}function Ym(e,n,a){n.status="fulfilled",n.value=a,Zm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Wm(e,a)))}function Mf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Zm(n),n=n.next;while(n!==o)}e.action=null}function Zm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Km(e,n){return n}function Qm(e,n){if(we){var a=qe.formState;if(a!==null){t:{var o=pe;if(we){if(Ye){e:{for(var u=Ye,f=mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ye=_i(u.nextSibling),o=u.data==="F!";break t}}Pa(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Km,lastRenderedState:n},a.queue=o,a=g0.bind(null,pe,o),o.dispatch=a,o=yf(!1),f=Cf.bind(null,pe,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=ES.bind(null,pe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Jm(e){var n=rn();return $m(n,ke,e)}function $m(e,n,a){if(n=xf(e,n,Km)[0],e=Yl(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Eo(n)}catch(y){throw y===lr?Bl:y}else o=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,hr(9,{destroy:void 0},TS.bind(null,u,a),null)),[o,f,e]}function TS(e,n){e.action=n}function t0(e){var n=rn(),a=ke;if(a!==null)return $m(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function hr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Wl(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function e0(){return rn().memoizedState}function Zl(e,n,a,o){var u=Gn();pe.flags|=e,u.memoizedState=hr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Kl(e,n,a,o){var u=rn();o=o===void 0?null:o;var f=u.memoizedState.inst;ke!==null&&o!==null&&hf(o,ke.memoizedState.deps)?u.memoizedState=hr(n,f,a,o):(pe.flags|=e,u.memoizedState=hr(1|n,f,a,o))}function n0(e,n){Zl(8390656,8,e,n)}function bf(e,n){Kl(2048,8,e,n)}function AS(e){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=Wl(),pe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function i0(e){var n=rn().memoizedState;return AS({ref:n,nextImpl:e}),function(){if((Ie&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function a0(e,n){return Kl(4,2,e,n)}function s0(e,n){return Kl(4,4,e,n)}function r0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function o0(e,n,a){a=a!=null?a.concat([e]):null,Kl(4,4,r0.bind(null,n,e),a)}function Ef(){}function l0(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&hf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function c0(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&hf(n,o[1]))return o[0];if(o=e(),As){Vt(!0);try{e()}finally{Vt(!1)}}return a.memoizedState=[o,n],o}function Tf(e,n,a){return a===void 0||(oa&1073741824)!==0&&(Re&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=ug(),pe.lanes|=e,Xa|=e,a)}function u0(e,n,a,o){return $n(a,n)?a:ur.current!==null?(e=Tf(e,a,o),$n(e,n)||(hn=!0),e):(oa&42)===0||(oa&1073741824)!==0&&(Re&261930)===0?(hn=!0,e.memoizedState=a):(e=ug(),pe.lanes|=e,Xa|=e,n)}function f0(e,n,a,o,u){var f=F.p;F.p=f!==0&&8>f?f:8;var y=U.T,C={};U.T=C,Cf(e,!1,n,a);try{var j=u(),ut=U.S;if(ut!==null&&ut(C,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var bt=yS(j,o);To(e,n,bt,si(e))}else To(e,n,o,si(e))}catch(Tt){To(e,n,{then:function(){},status:"rejected",reason:Tt},si())}finally{F.p=f,y!==null&&C.types!==null&&(y.types=C.types),U.T=y}}function RS(){}function Af(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=d0(e).queue;f0(e,u,n,k,a===null?RS:function(){return h0(e),a(o)})}function d0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function h0(e){var n=d0(e);n.next===null&&(n=e.alternate.memoizedState),To(e,n.next.queue,{},si())}function Rf(){return En(Vo)}function p0(){return rn().memoizedState}function m0(){return rn().memoizedState}function CS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Ba(a);var o=za(n,e,a);o!==null&&(Zn(o,n,a),So(o,n,a)),n={cache:ef()},e.payload=n;return}n=n.return}}function wS(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ql(e)?_0(n,a):(a=Xu(e,n,a,o),a!==null&&(Zn(a,e,o),v0(a,n,o)))}function g0(e,n,a){var o=si();To(e,n,a,o)}function To(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ql(e))_0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,C=f(y,a);if(u.hasEagerState=!0,u.eagerState=C,$n(C,y))return Nl(e,n,u,0),qe===null&&Dl(),!1}catch{}finally{}if(a=Xu(e,n,u,o),a!==null)return Zn(a,e,o),v0(a,n,o),!0}return!1}function Cf(e,n,a,o){if(o={lane:2,revertLane:rd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ql(e)){if(n)throw Error(s(479))}else n=Xu(e,a,o,2),n!==null&&Zn(n,e,2)}function Ql(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function _0(e,n){fr=Xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function v0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xs(e,a)}}var Ao={readContext:En,use:ql,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};Ao.useEffectEvent=en;var x0={readContext:En,use:ql,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:n0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Zl(4194308,4,r0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Zl(4194308,4,e,n)},useInsertionEffect:function(e,n){Zl(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var o=e();if(As){Vt(!0);try{e()}finally{Vt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(As){Vt(!0);try{a(n)}finally{Vt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=wS.bind(null,pe,e),[o.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=yf(e);var n=e.queue,a=g0.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ef,useDeferredValue:function(e,n){var a=Gn();return Tf(a,e,n)},useTransition:function(){var e=yf(!1);return e=f0.bind(null,pe,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=pe,u=Gn();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(Re&127)!==0||Hm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,n0(Vm.bind(null,o,f,e),[e]),o.flags|=2048,hr(9,{destroy:void 0},Gm.bind(null,o,f,a,n),null),a},useId:function(){var e=Gn(),n=qe.identifierPrefix;if(we){var a=Bi,o=Ii;a=(o&~(1<<32-Ht(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=jl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=MS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Rf,useFormState:Qm,useActionState:Qm,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Cf.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:vf,useCacheRefresh:function(){return Gn().memoizedState=CS.bind(null,pe)},useEffectEvent:function(e){var n=Gn(),a={impl:e};return n.memoizedState=a,function(){if((Ie&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},wf={readContext:En,use:ql,useCallback:l0,useContext:En,useEffect:bf,useImperativeHandle:o0,useInsertionEffect:a0,useLayoutEffect:s0,useMemo:c0,useReducer:Yl,useRef:e0,useState:function(){return Yl(la)},useDebugValue:Ef,useDeferredValue:function(e,n){var a=rn();return u0(a,ke.memoizedState,e,n)},useTransition:function(){var e=Yl(la)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Eo(e),n]},useSyncExternalStore:zm,useId:p0,useHostTransitionStatus:Rf,useFormState:Jm,useActionState:Jm,useOptimistic:function(e,n){var a=rn();return jm(a,ke,e,n)},useMemoCache:vf,useCacheRefresh:m0};wf.useEffectEvent=i0;var S0={readContext:En,use:ql,useCallback:l0,useContext:En,useEffect:bf,useImperativeHandle:o0,useInsertionEffect:a0,useLayoutEffect:s0,useMemo:c0,useReducer:Sf,useRef:e0,useState:function(){return Sf(la)},useDebugValue:Ef,useDeferredValue:function(e,n){var a=rn();return ke===null?Tf(a,e,n):u0(a,ke.memoizedState,e,n)},useTransition:function(){var e=Sf(la)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Eo(e),n]},useSyncExternalStore:zm,useId:p0,useHostTransitionStatus:Rf,useFormState:t0,useActionState:t0,useOptimistic:function(e,n){var a=rn();return ke!==null?jm(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:vf,useCacheRefresh:m0};S0.useEffectEvent=i0;function Df(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:S({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Nf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ba(o);u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(Zn(n,e,o),So(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ba(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(Zn(n,e,o),So(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=Ba(a);o.tag=2,n!=null&&(o.callback=n),n=za(e,o,a),n!==null&&(Zn(n,e,a),So(n,e,a))}};function y0(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!fo(a,o)||!fo(u,f):!0}function M0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Nf.enqueueReplaceState(n,n.state,null)}function Rs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=S({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function b0(e){wl(e)}function E0(e){console.error(e)}function T0(e){wl(e)}function Jl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function A0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Uf(e,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Jl(e,n)},a}function R0(e){return e=Ba(e),e.tag=3,e}function C0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){A0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){A0(n,a,o),typeof u!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function DS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&sr(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?uc():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===zl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),id(e,o,u)),!1;case 22:return a.flags|=65536,o===zl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),id(e,o,u)),!1}throw Error(s(435,a.tag))}return id(e,o,u),uc(),!1}if(we)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ku&&(e=Error(s(422),{cause:o}),mo(di(e,a)))):(o!==Ku&&(n=Error(s(423),{cause:o}),mo(di(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=di(o,a),u=Uf(e.stateNode,o,u),lf(e,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:o});if(f=di(f,a),Oo===null?Oo=[f]:Oo.push(f),nn!==4&&(nn=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Uf(a.stateNode,o,e),lf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ja===null||!ja.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=R0(u),C0(u,e,a,o),lf(a,u),!1}a=a.return}while(a!==null);return!1}var Lf=Error(s(461)),hn=!1;function Tn(e,n,a,o){n.child=e===null?Um(n,null,a,o):Ts(n,e.child,a,o)}function w0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var C in o)C!=="ref"&&(y[C]=o[C])}else y=o;return ys(n),o=pf(e,n,a,y,f,u),C=mf(),e!==null&&!hn?(gf(e,n,u),ca(e,n,u)):(we&&C&&Yu(n),n.flags|=1,Tn(e,n,o,u),n.child)}function D0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!ju(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,N0(e,n,f,o,u)):(e=Ll(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Gf(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:fo,a(y,o)&&e.ref===n.ref)return ca(e,n,u)}return n.flags|=1,e=ia(f,o),e.ref=n.ref,e.return=n,n.child=e}function N0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(fo(f,o)&&e.ref===n.ref)if(hn=!1,n.pendingProps=o=f,Gf(e,u))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,ca(e,n,u)}return Of(e,n,a,o,u)}function U0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return L0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Il(n,f!==null?f.cachePool:null),f!==null?Pm(n,f):uf(),Fm(n);else return o=n.lanes=536870912,L0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Il(n,f.cachePool),Pm(n,f),Ga(),n.memoizedState=null):(e!==null&&Il(n,null),uf(),Ga());return Tn(e,n,u,a),n.child}function Ro(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function L0(e,n,a,o,u){var f=af();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Il(n,null),uf(),Fm(n),e!==null&&sr(e,n,o,!0),n.childLanes=u,null}function $l(e,n){return n=ec({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function O0(e,n,a){return Ts(n,e.child,null,a),e=$l(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function NS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(o.mode==="hidden")return e=$l(n,o),n.lanes=536870912,Ro(null,e);if(df(n),(e=Ye)?(e=Wg(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:La!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=_m(e),a.return=n,n.child=a,bn=n,Ye=null)):e=null,e===null)throw Pa(n);return n.lanes=536870912,null}return $l(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(df(n),u)if(n.flags&256)n.flags&=-257,n=O0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(hn||sr(e,n,a,!1),u=(a&e.childLanes)!==0,hn||u){if(o=qe,o!==null&&(y=vl(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,_s(e,y),Zn(o,e,y),Lf;uc(),n=O0(e,n,a)}else e=f.treeContext,Ye=_i(y.nextSibling),bn=n,we=!0,Oa=null,mi=!1,e!==null&&Sm(n,e),n=$l(n,o),n.flags|=4096;return n}return e=ia(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function tc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Of(e,n,a,o,u){return ys(n),a=pf(e,n,a,o,void 0,u),o=mf(),e!==null&&!hn?(gf(e,n,u),ca(e,n,u)):(we&&o&&Yu(n),n.flags|=1,Tn(e,n,a,u),n.child)}function P0(e,n,a,o,u,f){return ys(n),n.updateQueue=null,a=Bm(n,o,a,u),Im(e),o=mf(),e!==null&&!hn?(gf(e,n,f),ca(e,n,f)):(we&&o&&Yu(n),n.flags|=1,Tn(e,n,a,f),n.child)}function F0(e,n,a,o,u){if(ys(n),n.stateNode===null){var f=er,y=a.contextType;typeof y=="object"&&y!==null&&(f=En(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Nf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},rf(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?En(y):er,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Df(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Nf.enqueueReplaceState(f,f.state,null),Mo(n,o,f,u),yo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var C=n.memoizedProps,j=Rs(a,C);f.props=j;var ut=f.context,bt=a.contextType;y=er,typeof bt=="object"&&bt!==null&&(y=En(bt));var Tt=a.getDerivedStateFromProps;bt=typeof Tt=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,bt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||ut!==y)&&M0(n,f,o,y),Ia=!1;var ht=n.memoizedState;f.state=ht,Mo(n,o,f,u),yo(),ut=n.memoizedState,C||ht!==ut||Ia?(typeof Tt=="function"&&(Df(n,a,Tt,o),ut=n.memoizedState),(j=Ia||y0(n,a,j,o,ht,ut,y))?(bt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ut),f.props=o,f.state=ut,f.context=y,o=j):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,of(e,n),y=n.memoizedProps,bt=Rs(a,y),f.props=bt,Tt=n.pendingProps,ht=f.context,ut=a.contextType,j=er,typeof ut=="object"&&ut!==null&&(j=En(ut)),C=a.getDerivedStateFromProps,(ut=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==Tt||ht!==j)&&M0(n,f,o,j),Ia=!1,ht=n.memoizedState,f.state=ht,Mo(n,o,f,u),yo();var _t=n.memoizedState;y!==Tt||ht!==_t||Ia||e!==null&&e.dependencies!==null&&Pl(e.dependencies)?(typeof C=="function"&&(Df(n,a,C,o),_t=n.memoizedState),(bt=Ia||y0(n,a,bt,o,ht,_t,j)||e!==null&&e.dependencies!==null&&Pl(e.dependencies))?(ut||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,_t,j),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,_t,j)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ht===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ht===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=_t),f.props=o,f.state=_t,f.context=j,o=bt):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ht===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ht===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,tc(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ts(n,e.child,null,u),n.child=Ts(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ca(e,n,u),e}function I0(e,n,a,o){return xs(),n.flags|=256,Tn(e,n,a,o),n.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ff(e){return{baseLanes:e,cachePool:Am()}}function If(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function B0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?Ha(n):Ga(),(e=Ye)?(e=Wg(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:La!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=_m(e),a.return=n,n.child=a,bn=n,Ye=null)):e=null,e===null)throw Pa(n);return xd(e)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Ga(),u=n.mode,C=ec({mode:"hidden",children:C},u),o=vs(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=Ff(a),o.childLanes=If(e,y,a),n.memoizedState=Pf,Ro(null,o)):(Ha(n),Bf(n,C))}var j=e.memoizedState;if(j!==null&&(C=j.dehydrated,C!==null)){if(f)n.flags&256?(Ha(n),n.flags&=-257,n=zf(e,n,a)):n.memoizedState!==null?(Ga(),n.child=e.child,n.flags|=128,n=null):(Ga(),C=o.fallback,u=n.mode,o=ec({mode:"visible",children:o.children},u),C=vs(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Ts(n,e.child,null,a),o=n.child,o.memoizedState=Ff(a),o.childLanes=If(e,y,a),n.memoizedState=Pf,n=Ro(null,o));else if(Ha(n),xd(C)){if(y=C.nextSibling&&C.nextSibling.dataset,y)var ut=y.dgst;y=ut,o=Error(s(419)),o.stack="",o.digest=y,mo({value:o,source:null,stack:null}),n=zf(e,n,a)}else if(hn||sr(e,n,a,!1),y=(a&e.childLanes)!==0,hn||y){if(y=qe,y!==null&&(o=vl(y,a),o!==0&&o!==j.retryLane))throw j.retryLane=o,_s(e,o),Zn(y,e,o),Lf;vd(C)||uc(),n=zf(e,n,a)}else vd(C)?(n.flags|=192,n.child=e.child,n=null):(e=j.treeContext,Ye=_i(C.nextSibling),bn=n,we=!0,Oa=null,mi=!1,e!==null&&Sm(n,e),n=Bf(n,o.children),n.flags|=4096);return n}return u?(Ga(),C=o.fallback,u=n.mode,j=e.child,ut=j.sibling,o=ia(j,{mode:"hidden",children:o.children}),o.subtreeFlags=j.subtreeFlags&65011712,ut!==null?C=ia(ut,C):(C=vs(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Ro(null,o),o=n.child,C=e.child.memoizedState,C===null?C=Ff(a):(u=C.cachePool,u!==null?(j=fn._currentValue,u=u.parent!==j?{parent:j,pool:j}:u):u=Am(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=If(e,y,a),n.memoizedState=Pf,Ro(e.child,o)):(Ha(n),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Bf(e,n){return n=ec({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ec(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function zf(e,n,a){return Ts(n,e.child,null,a),e=Bf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function z0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),$u(e.return,n,a)}function Hf(e,n,a,o,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function H0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=sn.current,C=(y&2)!==0;if(C?(y=y&1|2,n.flags|=128):y&=1,$(sn,y),Tn(e,n,o,a),o=we?po:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&z0(e,a,n);else if(e.tag===19)z0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&kl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Hf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&kl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Hf(n,!0,a,null,f,o);break;case"together":Hf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ca(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(sr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ia(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Gf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Pl(e)))}function US(e,n,a){switch(n.tag){case 3:ft(n,n.stateNode.containerInfo),Fa(n,fn,e.memoizedState.cache),xs();break;case 27:case 5:Dt(n);break;case 4:ft(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,df(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?B0(e,n,a):(Ha(n),e=ca(e,n,a),e!==null?e.sibling:null);Ha(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(sr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return H0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),$(sn,sn.current),o)break;return null;case 22:return n.lanes=0,U0(e,n,a,n.pendingProps);case 24:Fa(n,fn,e.memoizedState.cache)}return ca(e,n,a)}function G0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!Gf(e,a)&&(n.flags&128)===0)return hn=!1,US(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,we&&(n.flags&1048576)!==0&&xm(n,po,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=bs(n.elementType),n.type=e,typeof e=="function")ju(e)?(o=Rs(e,o),n.tag=1,n=F0(null,n,e,o,a)):(n.tag=0,n=Of(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=w0(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=D0(null,n,e,o,a);break t}}throw n=st(e)||e,Error(s(306,n,""))}}return n;case 0:return Of(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Rs(o,n.pendingProps),F0(e,n,o,u,a);case 3:t:{if(ft(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,of(e,n),Mo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Fa(n,fn,o),o!==f.cache&&tf(n,[fn],a,!0),yo(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=I0(e,n,o,a);break t}else if(o!==u){u=di(Error(s(424)),n),mo(u),n=I0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=_i(e.firstChild),bn=n,we=!0,Oa=null,mi=!0,a=Um(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(xs(),o===u){n=ca(e,n,a);break t}Tn(e,n,o,a)}n=n.child}return n;case 26:return tc(e,n),e===null?(a=Jg(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,o=_c(Z.current).createElement(a),o[ln]=n,o[gn]=e,An(o,a,e),Q(o),n.stateNode=o):n.memoizedState=Jg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Dt(n),e===null&&we&&(o=n.stateNode=Zg(n.type,n.pendingProps,Z.current),bn=n,mi=!0,u=Ye,Za(n.type)?(Sd=u,Ye=_i(o.firstChild)):Ye=u),Tn(e,n,n.pendingProps.children,a),tc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=o=Ye)&&(o=ly(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,bn=n,Ye=_i(o.firstChild),mi=!1,u=!0):u=!1),u||Pa(n)),Dt(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,md(u,f)?o=null:y!==null&&md(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=pf(e,n,bS,null,null,a),Vo._currentValue=u),tc(e,n),Tn(e,n,o,a),n.child;case 6:return e===null&&we&&((e=a=Ye)&&(a=cy(a,n.pendingProps,mi),a!==null?(n.stateNode=a,bn=n,Ye=null,e=!0):e=!1),e||Pa(n)),null;case 13:return B0(e,n,a);case 4:return ft(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ts(n,null,o,a):Tn(e,n,o,a),n.child;case 11:return w0(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Fa(n,n.type,o.value),Tn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ys(n),u=En(u),o=o(u),n.flags|=1,Tn(e,n,o,a),n.child;case 14:return D0(e,n,n.type,n.pendingProps,a);case 15:return N0(e,n,n.type,n.pendingProps,a);case 19:return H0(e,n,a);case 31:return NS(e,n,a);case 22:return U0(e,n,a,n.pendingProps);case 24:return ys(n),o=En(fn),e===null?(u=af(),u===null&&(u=qe,f=ef(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},rf(n),Fa(n,fn,u)):((e.lanes&a)!==0&&(of(e,n),Mo(n,null,null,a),yo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,fn,o)):(o=f.cache,Fa(n,fn,o),o!==u.cache&&tf(n,[fn],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ua(e){e.flags|=4}function Vf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(pg())e.flags|=8192;else throw Es=zl,sf}else e.flags&=-16777217}function V0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!i_(n))if(pg())e.flags|=8192;else throw Es=zl,sf}function nc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ze():536870912,e.lanes|=n,_r|=n)}function Co(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function LS(e,n,a){var o=n.pendingProps;switch(Zu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(fn),Mt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ar(n)?ua(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qu())),Ze(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ua(n),f!==null?(Ze(n),V0(n,f)):(Ze(n),Vf(n,u,null,o,a))):f?f!==e.memoizedState?(ua(n),Ze(n),V0(n,f)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ua(n),Ze(n),Vf(n,u,e,o,a)),null;case 27:if(Pt(n),a=Z.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=pt.current,ar(n)?ym(n):(e=Zg(u,o,a),n.stateNode=e,ua(n))}return Ze(n),null;case 5:if(Pt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(f=pt.current,ar(n))ym(n);else{var y=_c(Z.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[ln]=n,f[gn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(An(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ua(n)}}return Ze(n),Vf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=Z.current,ar(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=bn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Bg(e.nodeValue,a)),e||Pa(n,!0)}else e=_c(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ar(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=Qu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ar(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=Qu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),nc(n,n.updateQueue),Ze(n),null);case 4:return Mt(),e===null&&ud(n.stateNode.containerInfo),Ze(n),null;case 10:return ra(n.type),Ze(n),null;case 19:if(X(sn),o=n.memoizedState,o===null)return Ze(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Co(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=kl(e),f!==null){for(n.flags|=128,Co(o,!1),e=f.updateQueue,n.updateQueue=e,nc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)gm(a,e),a=a.sibling;return $(sn,sn.current&1|2),we&&aa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>oc&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304)}else{if(!u)if(e=kl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,nc(n,e),Co(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!we)return Ze(n),null}else 2*T()-o.renderingStartTime>oc&&a!==536870912&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=sn.current,$(sn,u?a&1|2:a&1),we&&aa(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return ni(n),ff(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&nc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&X(Ms),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(fn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function OS(e,n){switch(Zu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ra(fn),Mt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Pt(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(sn),null;case 4:return Mt(),null;case 10:return ra(n.type),null;case 22:case 23:return ni(n),ff(),e!==null&&X(Ms),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ra(fn),null;case 25:return null;default:return null}}function k0(e,n){switch(Zu(n),n.tag){case 3:ra(fn),Mt();break;case 26:case 27:case 5:Pt(n);break;case 4:Mt();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:X(sn);break;case 10:ra(n.type);break;case 22:case 23:ni(n),ff(),e!==null&&X(Ms);break;case 24:ra(fn)}}function wo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(C){Ge(n,n.return,C)}}function Va(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,C=y.destroy;if(C!==void 0){y.destroy=void 0,u=n;var j=a,ut=C;try{ut()}catch(bt){Ge(u,j,bt)}}}o=o.next}while(o!==f)}}catch(bt){Ge(n,n.return,bt)}}function X0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Om(n,a)}catch(o){Ge(e,e.return,o)}}}function j0(e,n,a){a.props=Rs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function Do(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function W0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function kf(e,n,a){try{var o=e.stateNode;ny(o,e.type,a,n),o[gn]=n}catch(u){Ge(e,e.return,u)}}function q0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function Xf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||q0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ea));else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(jf(e,n,a),e=e.sibling;e!==null;)jf(e,n,a),e=e.sibling}function ic(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ic(e,n,a),e=e.sibling;e!==null;)ic(e,n,a),e=e.sibling}function Y0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[ln]=e,n[gn]=a}catch(f){Ge(e,e.return,f)}}var fa=!1,pn=!1,Wf=!1,Z0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function PS(e,n){if(e=e.containerInfo,hd=Ec,e=om(e),Bu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,C=-1,j=-1,ut=0,bt=0,Tt=e,ht=null;e:for(;;){for(var _t;Tt!==a||u!==0&&Tt.nodeType!==3||(C=y+u),Tt!==f||o!==0&&Tt.nodeType!==3||(j=y+o),Tt.nodeType===3&&(y+=Tt.nodeValue.length),(_t=Tt.firstChild)!==null;)ht=Tt,Tt=_t;for(;;){if(Tt===e)break e;if(ht===a&&++ut===u&&(C=y),ht===f&&++bt===o&&(j=y),(_t=Tt.nextSibling)!==null)break;Tt=ht,ht=Tt.parentNode}Tt=_t}a=C===-1||j===-1?null:{start:C,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(pd={focusedElem:e,selectionRange:a},Ec=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Qt=Rs(a.type,u);e=o.getSnapshotBeforeUpdate(Qt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(re){Ge(a,a.return,re)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)_d(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_d(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function K0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ha(e,a),o&4&&wo(5,a);break;case 1:if(ha(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Ge(a,a.return,y)}else{var u=Rs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ge(a,a.return,y)}}o&64&&X0(a),o&512&&Do(a,a.return);break;case 3:if(ha(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Om(e,n)}catch(y){Ge(a,a.return,y)}}break;case 27:n===null&&o&4&&Y0(a);case 26:case 5:ha(e,a),n===null&&o&4&&W0(a),o&512&&Do(a,a.return);break;case 12:ha(e,a);break;case 31:ha(e,a),o&4&&$0(e,a);break;case 13:ha(e,a),o&4&&tg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=XS.bind(null,a),uy(e,a))));break;case 22:if(o=a.memoizedState!==null||fa,!o){n=n!==null&&n.memoizedState!==null||pn,u=fa;var f=pn;fa=o,(pn=n)&&!f?pa(e,a,(a.subtreeFlags&8772)!==0):ha(e,a),fa=u,pn=f}break;case 30:break;default:ha(e,a)}}function Q0(e){var n=e.alternate;n!==null&&(e.alternate=null,Q0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&io(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,jn=!1;function da(e,n,a){for(a=a.child;a!==null;)J0(e,n,a),a=a.sibling}function J0(e,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Ct,a)}catch{}switch(a.tag){case 26:pn||zi(a,n),da(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||zi(a,n);var o=$e,u=jn;Za(a.type)&&($e=a.stateNode,jn=!1),da(e,n,a),zo(a.stateNode),$e=o,jn=u;break;case 5:pn||zi(a,n);case 6:if(o=$e,u=jn,$e=null,da(e,n,a),$e=o,jn=u,$e!==null)if(jn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:$e!==null&&(jn?(e=$e,Xg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tr(e)):Xg($e,a.stateNode));break;case 4:o=$e,u=jn,$e=a.stateNode.containerInfo,jn=!0,da(e,n,a),$e=o,jn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),pn||Va(4,a,n),da(e,n,a);break;case 1:pn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&j0(a,n,o)),da(e,n,a);break;case 21:da(e,n,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,da(e,n,a),pn=o;break;default:da(e,n,a)}}function $0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tr(e)}catch(a){Ge(n,n.return,a)}}}function tg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tr(e)}catch(a){Ge(n,n.return,a)}}function FS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Z0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Z0),n;default:throw Error(s(435,e.tag))}}function ac(e,n){var a=FS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=jS.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,y=n,C=y;t:for(;C!==null;){switch(C.tag){case 27:if(Za(C.type)){$e=C.stateNode,jn=!1;break t}break;case 5:$e=C.stateNode,jn=!1;break t;case 3:case 4:$e=C.stateNode.containerInfo,jn=!0;break t}C=C.return}if($e===null)throw Error(s(160));J0(f,y,u),$e=null,jn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)eg(n,e),n=n.sibling}var Ri=null;function eg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(Va(3,e,e.return),wo(3,e),Va(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(pn||a===null||zi(a,a.return)),o&64&&fa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(Wn(n,e),qn(e),o&512&&(pn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ds]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),An(f,o,a),f[ln]=e,Q(f),o=f;break t;case"link":var y=e_("link","href",u).get(o+(a.href||""));if(y){for(var C=0;C<y.length;C++)if(f=y[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(C,1);break e}}f=u.createElement(o),An(f,o,a),u.head.appendChild(f);break;case"meta":if(y=e_("meta","content",u).get(o+(a.content||""))){for(C=0;C<y.length;C++)if(f=y[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(C,1);break e}}f=u.createElement(o),An(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[ln]=e,Q(f),o=f}e.stateNode=o}else n_(u,e.type,e.stateNode);else e.stateNode=t_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?n_(u,e.type,e.stateNode):t_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&kf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(pn||a===null||zi(a,a.return)),a!==null&&o&4&&kf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(pn||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{Hn(u,"")}catch(Qt){Ge(e,e.return,Qt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,kf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Wf=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Qt){Ge(e,e.return,Qt)}}break;case 3:if(Sc=null,u=Ri,Ri=vc(n.containerInfo),Wn(n,e),Ri=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Tr(n.containerInfo)}catch(Qt){Ge(e,e.return,Qt)}Wf&&(Wf=!1,ng(e));break;case 4:o=Ri,Ri=vc(e.stateNode.containerInfo),Wn(n,e),qn(e),Ri=o;break;case 12:Wn(n,e),qn(e);break;case 31:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ac(e,o)));break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(rc=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ac(e,o)));break;case 22:u=e.memoizedState!==null;var j=a!==null&&a.memoizedState!==null,ut=fa,bt=pn;if(fa=ut||u,pn=bt||j,Wn(n,e),pn=bt,fa=ut,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||j||fa||pn||Cs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){j=a=n;try{if(f=j.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{C=j.stateNode;var Tt=j.memoizedProps.style,ht=Tt!=null&&Tt.hasOwnProperty("display")?Tt.display:null;C.style.display=ht==null||typeof ht=="boolean"?"":(""+ht).trim()}}catch(Qt){Ge(j,j.return,Qt)}}}else if(n.tag===6){if(a===null){j=n;try{j.stateNode.nodeValue=u?"":j.memoizedProps}catch(Qt){Ge(j,j.return,Qt)}}}else if(n.tag===18){if(a===null){j=n;try{var _t=j.stateNode;u?jg(_t,!0):jg(j.stateNode,!1)}catch(Qt){Ge(j,j.return,Qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ac(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ac(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(q0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Xf(e);ic(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(Hn(y,""),a.flags&=-33);var C=Xf(e);ic(e,C,y);break;case 3:case 4:var j=a.stateNode.containerInfo,ut=Xf(e);jf(e,ut,j);break;default:throw Error(s(161))}}catch(bt){Ge(e,e.return,bt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ng(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ng(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ha(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)K0(e,n.alternate,n),n=n.sibling}function Cs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),Cs(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&j0(n,n.return,a),Cs(n);break;case 27:zo(n.stateNode);case 26:case 5:zi(n,n.return),Cs(n);break;case 22:n.memoizedState===null&&Cs(n);break;case 30:Cs(n);break;default:Cs(n)}e=e.sibling}}function pa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:pa(u,f,a),wo(4,f);break;case 1:if(pa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ut){Ge(o,o.return,ut)}if(o=f,u=o.updateQueue,u!==null){var C=o.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)Lm(j[u],C)}catch(ut){Ge(o,o.return,ut)}}a&&y&64&&X0(f),Do(f,f.return);break;case 27:Y0(f);case 26:case 5:pa(u,f,a),a&&o===null&&y&4&&W0(f),Do(f,f.return);break;case 12:pa(u,f,a);break;case 31:pa(u,f,a),a&&y&4&&$0(u,f);break;case 13:pa(u,f,a),a&&y&4&&tg(u,f);break;case 22:f.memoizedState===null&&pa(u,f,a),Do(f,f.return);break;case 30:break;default:pa(u,f,a)}n=n.sibling}}function qf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&go(a))}function Yf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&go(e))}function Ci(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ig(e,n,a,o),n=n.sibling}function ig(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,o),u&2048&&wo(9,n);break;case 1:Ci(e,n,a,o);break;case 3:Ci(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&go(e)));break;case 12:if(u&2048){Ci(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,C=f.onPostCommit;typeof C=="function"&&C(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){Ge(n,n.return,j)}}else Ci(e,n,a,o);break;case 31:Ci(e,n,a,o);break;case 13:Ci(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(e,n,a,o):No(e,n):f._visibility&2?Ci(e,n,a,o):(f._visibility|=2,pr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&qf(y,n);break;case 24:Ci(e,n,a,o),u&2048&&Yf(n.alternate,n);break;default:Ci(e,n,a,o)}}function pr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,C=a,j=o,ut=y.flags;switch(y.tag){case 0:case 11:case 15:pr(f,y,C,j,u),wo(8,y);break;case 23:break;case 22:var bt=y.stateNode;y.memoizedState!==null?bt._visibility&2?pr(f,y,C,j,u):No(f,y):(bt._visibility|=2,pr(f,y,C,j,u)),u&&ut&2048&&qf(y.alternate,y);break;case 24:pr(f,y,C,j,u),u&&ut&2048&&Yf(y.alternate,y);break;default:pr(f,y,C,j,u)}n=n.sibling}}function No(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:No(a,o),u&2048&&qf(o.alternate,o);break;case 24:No(a,o),u&2048&&Yf(o.alternate,o);break;default:No(a,o)}n=n.sibling}}var Uo=8192;function mr(e,n,a){if(e.subtreeFlags&Uo)for(e=e.child;e!==null;)ag(e,n,a),e=e.sibling}function ag(e,n,a){switch(e.tag){case 26:mr(e,n,a),e.flags&Uo&&e.memoizedState!==null&&My(a,Ri,e.memoizedState,e.memoizedProps);break;case 5:mr(e,n,a);break;case 3:case 4:var o=Ri;Ri=vc(e.stateNode.containerInfo),mr(e,n,a),Ri=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Uo,Uo=16777216,mr(e,n,a),Uo=o):mr(e,n,a));break;default:mr(e,n,a)}}function sg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,og(o,e)}sg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rg(e),e=e.sibling}function rg(e){switch(e.tag){case 0:case 11:case 15:Lo(e),e.flags&2048&&Va(9,e,e.return);break;case 3:Lo(e);break;case 12:Lo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,sc(e)):Lo(e);break;default:Lo(e)}}function sc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,og(o,e)}sg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Va(8,n,n.return),sc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,sc(n));break;default:sc(n)}e=e.sibling}}function og(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:go(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else t:for(a=e;yn!==null;){o=yn;var u=o.sibling,f=o.return;if(Q0(o),o===a){yn=null;break t}if(u!==null){u.return=f,yn=u;break t}yn=f}}}var IS={getCacheForType:function(e){var n=En(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return En(fn).controller.signal}},BS=typeof WeakMap=="function"?WeakMap:Map,Ie=0,qe=null,Me=null,Re=0,He=0,ii=null,ka=!1,gr=!1,Zf=!1,ma=0,nn=0,Xa=0,ws=0,Kf=0,ai=0,_r=0,Oo=null,Yn=null,Qf=!1,rc=0,lg=0,oc=1/0,lc=null,ja=null,vn=0,Wa=null,vr=null,ga=0,Jf=0,$f=null,cg=null,Po=0,td=null;function si(){return(Ie&2)!==0&&Re!==0?Re&-Re:U.T!==null?rd():Fi()}function ug(){if(ai===0)if((Re&536870912)===0||we){var e=Nt;Nt<<=1,(Nt&3932160)===0&&(Nt=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function Zn(e,n,a){(e===qe&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(xr(e,0),qa(e,Re,ai,!1)),In(e,a),((Ie&2)===0||e!==qe)&&(e===qe&&((Ie&2)===0&&(ws|=a),nn===4&&qa(e,Re,ai,!1)),Hi(e))}function fg(e,n,a){if((Ie&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Zt(e,n),u=o?GS(e,n):nd(e,n,!0),f=o;do{if(u===0){gr&&!o&&qa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!zS(a)){u=nd(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var C=e;u=Oo;var j=C.current.memoizedState.isDehydrated;if(j&&(xr(C,y).flags|=256),y=nd(C,y,!1),y!==2){if(Zf&&!j){C.errorRecoveryDisabledLanes|=f,ws|=f,u=4;break t}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){xr(e,0),qa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,ai,!ka);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=rc+300-T(),10<u)){if(qa(o,n,ai,!ka),xt(o,0,!0)!==0)break t;ga=n,o.timeoutHandle=Vg(dg.bind(null,o,a,Yn,lc,Qf,n,ai,ws,_r,ka,f,"Throttled",-0,0),u);break t}dg(o,a,Yn,lc,Qf,n,ai,ws,_r,ka,f,null,-0,0)}}break}while(!0);Hi(e)}function dg(e,n,a,o,u,f,y,C,j,ut,bt,Tt,ht,_t){if(e.timeoutHandle=-1,Tt=n.subtreeFlags,Tt&8192||(Tt&16785408)===16785408){Tt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},ag(n,f,Tt);var Qt=(f&62914560)===f?rc-T():(f&4194048)===f?lg-T():0;if(Qt=by(Tt,Qt),Qt!==null){ga=f,e.cancelPendingCommit=Qt(Sg.bind(null,e,n,f,a,o,u,y,C,j,bt,Tt,null,ht,_t)),qa(e,f,y,!ut);return}}Sg(e,n,f,a,o,u,y,C,j)}function zS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(e,n,a,o){n&=~Kf,n&=~ws,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Ht(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&no(e,a,n)}function cc(){return(Ie&6)===0?(Fo(0),!1):!0}function ed(){if(Me!==null){if(He===0)var e=Me.return;else e=Me,sa=Ss=null,_f(e),cr=null,vo=0,e=Me;for(;e!==null;)k0(e.alternate,e),e=e.return;Me=null}}function xr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,sy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ga=0,ed(),qe=e,Me=a=ia(e.current,null),Re=n,He=0,ii=null,ka=!1,gr=Zt(e,n),Zf=!1,_r=ai=Kf=ws=Xa=nn=0,Yn=Oo=null,Qf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ht(o),f=1<<u;n|=e[u],o&=~f}return ma=n,Dl(),a}function hg(e,n){pe=null,U.H=Ao,n===lr||n===Bl?(n=wm(),He=3):n===sf?(n=wm(),He=4):He=n===Lf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,Me===null&&(nn=1,Jl(e,di(n,e.current)))}function pg(){var e=ei.current;return e===null?!0:(Re&4194048)===Re?gi===null:(Re&62914560)===Re||(Re&536870912)!==0?e===gi:!1}function mg(){var e=U.H;return U.H=Ao,e===null?Ao:e}function gg(){var e=U.A;return U.A=IS,e}function uc(){nn=4,ka||(Re&4194048)!==Re&&ei.current!==null||(gr=!0),(Xa&134217727)===0&&(ws&134217727)===0||qe===null||qa(qe,Re,ai,!1)}function nd(e,n,a){var o=Ie;Ie|=2;var u=mg(),f=gg();(qe!==e||Re!==n)&&(lc=null,xr(e,n)),n=!1;var y=nn;t:do try{if(He!==0&&Me!==null){var C=Me,j=ii;switch(He){case 8:ed(),y=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var ut=He;if(He=0,ii=null,Sr(e,C,j,ut),a&&gr){y=0;break t}break;default:ut=He,He=0,ii=null,Sr(e,C,j,ut)}}HS(),y=nn;break}catch(bt){hg(e,bt)}while(!0);return n&&e.shellSuspendCounter++,sa=Ss=null,Ie=o,U.H=u,U.A=f,Me===null&&(qe=null,Re=0,Dl()),y}function HS(){for(;Me!==null;)_g(Me)}function GS(e,n){var a=Ie;Ie|=2;var o=mg(),u=gg();qe!==e||Re!==n?(lc=null,oc=T()+500,xr(e,n)):gr=Zt(e,n);t:do try{if(He!==0&&Me!==null){n=Me;var f=ii;e:switch(He){case 1:He=0,ii=null,Sr(e,n,f,1);break;case 2:case 9:if(Rm(f)){He=0,ii=null,vg(n);break}n=function(){He!==2&&He!==9||qe!==e||(He=7),Hi(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:Rm(f)?(He=0,ii=null,vg(n)):(He=0,ii=null,Sr(e,n,f,7));break;case 5:var y=null;switch(Me.tag){case 26:y=Me.memoizedState;case 5:case 27:var C=Me;if(y?i_(y):C.stateNode.complete){He=0,ii=null;var j=C.sibling;if(j!==null)Me=j;else{var ut=C.return;ut!==null?(Me=ut,fc(ut)):Me=null}break e}}He=0,ii=null,Sr(e,n,f,5);break;case 6:He=0,ii=null,Sr(e,n,f,6);break;case 8:ed(),nn=6;break t;default:throw Error(s(462))}}VS();break}catch(bt){hg(e,bt)}while(!0);return sa=Ss=null,U.H=o,U.A=u,Ie=a,Me!==null?0:(qe=null,Re=0,Dl(),nn)}function VS(){for(;Me!==null&&!Wt();)_g(Me)}function _g(e){var n=G0(e.alternate,e,ma);e.memoizedProps=e.pendingProps,n===null?fc(e):Me=n}function vg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=P0(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=P0(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:_f(n);default:k0(a,n),n=Me=gm(n,ma),n=G0(a,n,ma)}e.memoizedProps=e.pendingProps,n===null?fc(e):Me=n}function Sr(e,n,a,o){sa=Ss=null,_f(n),cr=null,vo=0;var u=n.return;try{if(DS(e,u,n,a,Re)){nn=1,Jl(e,di(a,e.current)),Me=null;return}}catch(f){if(u!==null)throw Me=u,f;nn=1,Jl(e,di(a,e.current)),Me=null;return}n.flags&32768?(we||o===1?e=!0:gr||(Re&536870912)!==0?e=!1:(ka=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),xg(n,e)):fc(n)}function fc(e){var n=e;do{if((n.flags&32768)!==0){xg(n,ka);return}e=n.return;var a=LS(n.alternate,n,ma);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);nn===0&&(nn=5)}function xg(e,n){do{var a=OS(e.alternate,e);if(a!==null){a.flags&=32767,Me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Me=e;return}Me=e=a}while(e!==null);nn=6,Me=null}function Sg(e,n,a,o,u,f,y,C,j){e.cancelPendingCommit=null;do dc();while(vn!==0);if((Ie&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=ku,Mi(e,a,f,y,C,j),e===qe&&(Me=qe=null,Re=0),vr=n,Wa=e,ga=a,Jf=f,$f=u,cg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,WS(mt,function(){return Tg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=F.p,F.p=2,y=Ie,Ie|=4;try{PS(e,n,a)}finally{Ie=y,F.p=u,U.T=o}}vn=1,yg(),Mg(),bg()}}function yg(){if(vn===1){vn=0;var e=Wa,n=vr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=F.p;F.p=2;var u=Ie;Ie|=4;try{eg(n,e);var f=pd,y=om(e.containerInfo),C=f.focusedElem,j=f.selectionRange;if(y!==C&&C&&C.ownerDocument&&rm(C.ownerDocument.documentElement,C)){if(j!==null&&Bu(C)){var ut=j.start,bt=j.end;if(bt===void 0&&(bt=ut),"selectionStart"in C)C.selectionStart=ut,C.selectionEnd=Math.min(bt,C.value.length);else{var Tt=C.ownerDocument||document,ht=Tt&&Tt.defaultView||window;if(ht.getSelection){var _t=ht.getSelection(),Qt=C.textContent.length,re=Math.min(j.start,Qt),je=j.end===void 0?re:Math.min(j.end,Qt);!_t.extend&&re>je&&(y=je,je=re,re=y);var it=sm(C,re),K=sm(C,je);if(it&&K&&(_t.rangeCount!==1||_t.anchorNode!==it.node||_t.anchorOffset!==it.offset||_t.focusNode!==K.node||_t.focusOffset!==K.offset)){var ct=Tt.createRange();ct.setStart(it.node,it.offset),_t.removeAllRanges(),re>je?(_t.addRange(ct),_t.extend(K.node,K.offset)):(ct.setEnd(K.node,K.offset),_t.addRange(ct))}}}}for(Tt=[],_t=C;_t=_t.parentNode;)_t.nodeType===1&&Tt.push({element:_t,left:_t.scrollLeft,top:_t.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Tt.length;C++){var Et=Tt[C];Et.element.scrollLeft=Et.left,Et.element.scrollTop=Et.top}}Ec=!!hd,pd=hd=null}finally{Ie=u,F.p=o,U.T=a}}e.current=n,vn=2}}function Mg(){if(vn===2){vn=0;var e=Wa,n=vr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=F.p;F.p=2;var u=Ie;Ie|=4;try{K0(e,n.alternate,n)}finally{Ie=u,F.p=o,U.T=a}}vn=3}}function bg(){if(vn===4||vn===3){vn=0,P();var e=Wa,n=vr,a=ga,o=cg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,vr=Wa=null,Eg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ja=null),Ws(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Ct,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,u=F.p,F.p=2,U.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var C=o[y];f(C.value,{componentStack:C.stack})}}finally{U.T=n,F.p=u}}(ga&3)!==0&&dc(),Hi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===td?Po++:(Po=0,td=e):Po=0,Fo(0)}}function Eg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,go(n)))}function dc(){return yg(),Mg(),bg(),Tg()}function Tg(){if(vn!==5)return!1;var e=Wa,n=Jf;Jf=0;var a=Ws(ga),o=U.T,u=F.p;try{F.p=32>a?32:a,U.T=null,a=$f,$f=null;var f=Wa,y=ga;if(vn=0,vr=Wa=null,ga=0,(Ie&6)!==0)throw Error(s(331));var C=Ie;if(Ie|=4,rg(f.current),ig(f,f.current,y,a),Ie=C,Fo(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Ct,f)}catch{}return!0}finally{F.p=u,U.T=o,Eg(e,n)}}function Ag(e,n,a){n=di(a,n),n=Uf(e.stateNode,n,2),e=za(e,n,2),e!==null&&(In(e,2),Hi(e))}function Ge(e,n,a){if(e.tag===3)Ag(e,e,a);else for(;n!==null;){if(n.tag===3){Ag(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ja===null||!ja.has(o))){e=di(a,e),a=R0(2),o=za(n,a,2),o!==null&&(C0(a,o,n,e),In(o,2),Hi(o));break}}n=n.return}}function id(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new BS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Zf=!0,u.add(a),e=kS.bind(null,e,n,a),n.then(e,e))}function kS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(Re&a)===a&&(nn===4||nn===3&&(Re&62914560)===Re&&300>T()-rc?(Ie&2)===0&&xr(e,0):Kf|=a,_r===Re&&(_r=0)),Hi(e)}function Rg(e,n){n===0&&(n=ze()),e=_s(e,n),e!==null&&(In(e,n),Hi(e))}function XS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Rg(e,a)}function jS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Rg(e,a)}function WS(e,n){return me(e,n)}var hc=null,yr=null,ad=!1,pc=!1,sd=!1,Ya=0;function Hi(e){e!==yr&&e.next===null&&(yr===null?hc=yr=e:yr=yr.next=e),pc=!0,ad||(ad=!0,YS())}function Fo(e,n){if(!sd&&pc){sd=!0;do for(var a=!1,o=hc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,C=o.pingedLanes;f=(1<<31-Ht(42|e)+1)-1,f&=u&~(y&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ng(o,f))}else f=Re,f=xt(o,o===qe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Zt(o,f)||(a=!0,Ng(o,f));o=o.next}while(a);sd=!1}}function qS(){Cg()}function Cg(){pc=ad=!1;var e=0;Ya!==0&&ay()&&(e=Ya);for(var n=T(),a=null,o=hc;o!==null;){var u=o.next,f=wg(o,n);f===0?(o.next=null,a===null?hc=u:a.next=u,u===null&&(yr=a)):(a=o,(e!==0||(f&3)!==0)&&(pc=!0)),o=u}vn!==0&&vn!==5||Fo(e),Ya!==0&&(Ya=0)}function wg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Ht(f),C=1<<y,j=u[y];j===-1?((C&a)===0||(C&o)!==0)&&(u[y]=ce(C,n)):j<=n&&(e.expiredLanes|=C),f&=~C}if(n=qe,a=Re,a=xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ae(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Zt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ae(o),Ws(a)){case 2:case 8:a=At;break;case 32:a=mt;break;case 268435456:a=Ut;break;default:a=mt}return o=Dg.bind(null,e),a=me(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ae(o),e.callbackPriority=2,e.callbackNode=null,2}function Dg(e,n){if(vn!==0&&vn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(dc()&&e.callbackNode!==a)return null;var o=Re;return o=xt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(fg(e,o,n),wg(e,T()),e.callbackNode!=null&&e.callbackNode===a?Dg.bind(null,e):null)}function Ng(e,n){if(dc())return null;fg(e,n,!0)}function YS(){ry(function(){(Ie&6)!==0?me(yt,qS):Cg()})}function rd(){if(Ya===0){var e=rr;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),Ya=e}return Ya}function Ug(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ml(""+e)}function Lg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ZS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Ug((u[gn]||null).action),y=o.submitter;y&&(n=(n=y[gn]||null)?Ug(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var C=new Al("action","action",null,o,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var j=y?Lg(u,y):new FormData(u);Af(a,{pending:!0,data:j,method:u.method,action:f},null,j)}}else typeof f=="function"&&(C.preventDefault(),j=y?Lg(u,y):new FormData(u),Af(a,{pending:!0,data:j,method:u.method,action:f},f,j))},currentTarget:u}]})}}for(var od=0;od<Vu.length;od++){var ld=Vu[od],KS=ld.toLowerCase(),QS=ld[0].toUpperCase()+ld.slice(1);Ai(KS,"on"+QS)}Ai(um,"onAnimationEnd"),Ai(fm,"onAnimationIteration"),Ai(dm,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(hS,"onTransitionRun"),Ai(pS,"onTransitionStart"),Ai(mS,"onTransitionCancel"),Ai(hm,"onTransitionEnd"),It("onMouseEnter",["mouseout","mouseover"]),It("onMouseLeave",["mouseout","mouseover"]),It("onPointerEnter",["pointerout","pointerover"]),It("onPointerLeave",["pointerout","pointerover"]),ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function Og(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var C=o[y],j=C.instance,ut=C.currentTarget;if(C=C.listener,j!==f&&u.isPropagationStopped())break t;f=C,u.currentTarget=ut;try{f(u)}catch(bt){wl(bt)}u.currentTarget=null,f=j}else for(y=0;y<o.length;y++){if(C=o[y],j=C.instance,ut=C.currentTarget,C=C.listener,j!==f&&u.isPropagationStopped())break t;f=C,u.currentTarget=ut;try{f(u)}catch(bt){wl(bt)}u.currentTarget=null,f=j}}}}function be(e,n){var a=n[wa];a===void 0&&(a=n[wa]=new Set);var o=e+"__bubble";a.has(o)||(Pg(n,e,2,!1),a.add(o))}function cd(e,n,a){var o=0;n&&(o|=4),Pg(a,e,o,n)}var mc="_reactListening"+Math.random().toString(36).slice(2);function ud(e){if(!e[mc]){e[mc]=!0,gt.forEach(function(a){a!=="selectionchange"&&(JS.has(a)||cd(a,!1,e),cd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[mc]||(n[mc]=!0,cd("selectionchange",!1,n))}}function Pg(e,n,a,o){switch(u_(n)){case 2:var u=Ay;break;case 8:u=Ry;break;default:u=Td}a=u.bind(null,n,a,e),u=void 0,!wu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function fd(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var C=o.stateNode.containerInfo;if(C===u)break;if(y===4)for(y=o.return;y!==null;){var j=y.tag;if((j===3||j===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;C!==null;){if(y=Da(C),y===null)return;if(j=y.tag,j===5||j===6||j===26||j===27){o=f=y;continue t}C=C.parentNode}}o=o.return}Hp(function(){var ut=f,bt=Ru(a),Tt=[];t:{var ht=pm.get(e);if(ht!==void 0){var _t=Al,Qt=e;switch(e){case"keypress":if(El(a)===0)break t;case"keydown":case"keyup":_t=jx;break;case"focusin":Qt="focus",_t=Lu;break;case"focusout":Qt="blur",_t=Lu;break;case"beforeblur":case"afterblur":_t=Lu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_t=kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_t=Lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_t=Yx;break;case um:case fm:case dm:_t=Fx;break;case hm:_t=Kx;break;case"scroll":case"scrollend":_t=Nx;break;case"wheel":_t=Jx;break;case"copy":case"cut":case"paste":_t=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_t=jp;break;case"toggle":case"beforetoggle":_t=tS}var re=(n&4)!==0,je=!re&&(e==="scroll"||e==="scrollend"),it=re?ht!==null?ht+"Capture":null:ht;re=[];for(var K=ut,ct;K!==null;){var Et=K;if(ct=Et.stateNode,Et=Et.tag,Et!==5&&Et!==26&&Et!==27||ct===null||it===null||(Et=ao(K,it),Et!=null&&re.push(Bo(K,Et,ct))),je)break;K=K.return}0<re.length&&(ht=new _t(ht,Qt,null,a,bt),Tt.push({event:ht,listeners:re}))}}if((n&7)===0){t:{if(ht=e==="mouseover"||e==="pointerover",_t=e==="mouseout"||e==="pointerout",ht&&a!==Au&&(Qt=a.relatedTarget||a.fromElement)&&(Da(Qt)||Qt[$i]))break t;if((_t||ht)&&(ht=bt.window===bt?bt:(ht=bt.ownerDocument)?ht.defaultView||ht.parentWindow:window,_t?(Qt=a.relatedTarget||a.toElement,_t=ut,Qt=Qt?Da(Qt):null,Qt!==null&&(je=c(Qt),re=Qt.tag,Qt!==je||re!==5&&re!==27&&re!==6)&&(Qt=null)):(_t=null,Qt=ut),_t!==Qt)){if(re=kp,Et="onMouseLeave",it="onMouseEnter",K="mouse",(e==="pointerout"||e==="pointerover")&&(re=jp,Et="onPointerLeave",it="onPointerEnter",K="pointer"),je=_t==null?ht:hs(_t),ct=Qt==null?ht:hs(Qt),ht=new re(Et,K+"leave",_t,a,bt),ht.target=je,ht.relatedTarget=ct,Et=null,Da(bt)===ut&&(re=new re(it,K+"enter",Qt,a,bt),re.target=ct,re.relatedTarget=je,Et=re),je=Et,_t&&Qt)e:{for(re=$S,it=_t,K=Qt,ct=0,Et=it;Et;Et=re(Et))ct++;Et=0;for(var se=K;se;se=re(se))Et++;for(;0<ct-Et;)it=re(it),ct--;for(;0<Et-ct;)K=re(K),Et--;for(;ct--;){if(it===K||K!==null&&it===K.alternate){re=it;break e}it=re(it),K=re(K)}re=null}else re=null;_t!==null&&Fg(Tt,ht,_t,re,!1),Qt!==null&&je!==null&&Fg(Tt,je,Qt,re,!0)}}t:{if(ht=ut?hs(ut):window,_t=ht.nodeName&&ht.nodeName.toLowerCase(),_t==="select"||_t==="input"&&ht.type==="file")var Pe=$p;else if(Qp(ht))if(tm)Pe=uS;else{Pe=lS;var ie=oS}else _t=ht.nodeName,!_t||_t.toLowerCase()!=="input"||ht.type!=="checkbox"&&ht.type!=="radio"?ut&&Ys(ut.elementType)&&(Pe=$p):Pe=cS;if(Pe&&(Pe=Pe(e,ut))){Jp(Tt,Pe,a,bt);break t}ie&&ie(e,ht,ut),e==="focusout"&&ut&&ht.type==="number"&&ut.memoizedProps.value!=null&&Ei(ht,"number",ht.value)}switch(ie=ut?hs(ut):window,e){case"focusin":(Qp(ie)||ie.contentEditable==="true")&&(Js=ie,zu=ut,ho=null);break;case"focusout":ho=zu=Js=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,lm(Tt,a,bt);break;case"selectionchange":if(dS)break;case"keydown":case"keyup":lm(Tt,a,bt)}var ve;if(Pu)t:{switch(e){case"compositionstart":var Ce="onCompositionStart";break t;case"compositionend":Ce="onCompositionEnd";break t;case"compositionupdate":Ce="onCompositionUpdate";break t}Ce=void 0}else Qs?Zp(e,a)&&(Ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ce="onCompositionStart");Ce&&(Wp&&a.locale!=="ko"&&(Qs||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Qs&&(ve=Gp()):(Ua=bt,Du="value"in Ua?Ua.value:Ua.textContent,Qs=!0)),ie=gc(ut,Ce),0<ie.length&&(Ce=new Xp(Ce,e,null,a,bt),Tt.push({event:Ce,listeners:ie}),ve?Ce.data=ve:(ve=Kp(a),ve!==null&&(Ce.data=ve)))),(ve=nS?iS(e,a):aS(e,a))&&(Ce=gc(ut,"onBeforeInput"),0<Ce.length&&(ie=new Xp("onBeforeInput","beforeinput",null,a,bt),Tt.push({event:ie,listeners:Ce}),ie.data=ve)),ZS(Tt,e,ut,a,bt)}Og(Tt,n)})}function Bo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function gc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ao(e,a),u!=null&&o.unshift(Bo(e,u,f)),u=ao(e,n),u!=null&&o.push(Bo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function $S(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fg(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var C=a,j=C.alternate,ut=C.stateNode;if(C=C.tag,j!==null&&j===o)break;C!==5&&C!==26&&C!==27||ut===null||(j=ut,u?(ut=ao(a,f),ut!=null&&y.unshift(Bo(a,ut,j))):u||(ut=ao(a,f),ut!=null&&y.push(Bo(a,ut,j)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var ty=/\r\n?/g,ey=/\u0000|\uFFFD/g;function Ig(e){return(typeof e=="string"?e:""+e).replace(ty,`
`).replace(ey,"")}function Bg(e,n){return n=Ig(n),Ig(e)===n}function Xe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Hn(e,""+o);break;case"className":de(e,"class",o);break;case"tabIndex":de(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":de(e,a,o);break;case"style":ta(e,o,f);break;case"data":if(n!=="object"){de(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ml(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ml(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ea);break;case"onScroll":o!=null&&be("scroll",e);break;case"onScrollEnd":o!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ml(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":be("beforetoggle",e),be("toggle",e),oe(e,"popover",o);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":oe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wx.get(a)||a,oe(e,a,o))}}function dd(e,n,a,o,u,f){switch(a){case"style":ta(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&Hn(e,""+o);break;case"onScroll":o!=null&&be("scroll",e);break;case"onScrollEnd":o!=null&&be("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[gn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):oe(e,a,o)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,y,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":be("invalid",e);var C=f=y=u=null,j=null,ut=null;for(o in a)if(a.hasOwnProperty(o)){var bt=a[o];if(bt!=null)switch(o){case"name":u=bt;break;case"type":y=bt;break;case"checked":j=bt;break;case"defaultChecked":ut=bt;break;case"value":f=bt;break;case"defaultValue":C=bt;break;case"children":case"dangerouslySetInnerHTML":if(bt!=null)throw Error(s(137,n));break;default:Xe(e,n,o,bt,a,null)}}Qn(e,f,C,j,ut,y,u,!1);return;case"select":be("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":y=C;break;case"multiple":o=C;default:Xe(e,n,u,C,a,null)}n=f,a=y,e.multiple=!!o,n!=null?Jn(e,!!o,n,!1):a!=null&&Jn(e,!!o,a,!0);return;case"textarea":be("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(C=a[y],C!=null))switch(y){case"value":o=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Xe(e,n,y,C,a,null)}cn(e,o,u,f);return;case"option":for(j in a)if(a.hasOwnProperty(j)&&(o=a[j],o!=null))switch(j){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(e,n,j,o,a,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(o=0;o<Io.length;o++)be(Io[o],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ut in a)if(a.hasOwnProperty(ut)&&(o=a[ut],o!=null))switch(ut){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,ut,o,a,null)}return;default:if(Ys(n)){for(bt in a)a.hasOwnProperty(bt)&&(o=a[bt],o!==void 0&&dd(e,n,bt,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Xe(e,n,C,o,a,null))}function ny(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,C=null,j=null,ut=null,bt=null;for(_t in a){var Tt=a[_t];if(a.hasOwnProperty(_t)&&Tt!=null)switch(_t){case"checked":break;case"value":break;case"defaultValue":j=Tt;default:o.hasOwnProperty(_t)||Xe(e,n,_t,null,o,Tt)}}for(var ht in o){var _t=o[ht];if(Tt=a[ht],o.hasOwnProperty(ht)&&(_t!=null||Tt!=null))switch(ht){case"type":f=_t;break;case"name":u=_t;break;case"checked":ut=_t;break;case"defaultChecked":bt=_t;break;case"value":y=_t;break;case"defaultValue":C=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(s(137,n));break;default:_t!==Tt&&Xe(e,n,ht,_t,o,Tt)}}zn(e,y,C,j,ut,bt,f,u);return;case"select":_t=y=C=ht=null;for(f in a)if(j=a[f],a.hasOwnProperty(f)&&j!=null)switch(f){case"value":break;case"multiple":_t=j;default:o.hasOwnProperty(f)||Xe(e,n,f,null,o,j)}for(u in o)if(f=o[u],j=a[u],o.hasOwnProperty(u)&&(f!=null||j!=null))switch(u){case"value":ht=f;break;case"defaultValue":C=f;break;case"multiple":y=f;default:f!==j&&Xe(e,n,u,f,o,j)}n=C,a=y,o=_t,ht!=null?Jn(e,!!a,ht,!1):!!o!=!!a&&(n!=null?Jn(e,!!a,n,!0):Jn(e,!!a,a?[]:"",!1));return;case"textarea":_t=ht=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Xe(e,n,C,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":ht=u;break;case"defaultValue":_t=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(e,n,y,u,o,f)}Be(e,ht,_t);return;case"option":for(var Qt in a)if(ht=a[Qt],a.hasOwnProperty(Qt)&&ht!=null&&!o.hasOwnProperty(Qt))switch(Qt){case"selected":e.selected=!1;break;default:Xe(e,n,Qt,null,o,ht)}for(j in o)if(ht=o[j],_t=a[j],o.hasOwnProperty(j)&&ht!==_t&&(ht!=null||_t!=null))switch(j){case"selected":e.selected=ht&&typeof ht!="function"&&typeof ht!="symbol";break;default:Xe(e,n,j,ht,o,_t)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)ht=a[re],a.hasOwnProperty(re)&&ht!=null&&!o.hasOwnProperty(re)&&Xe(e,n,re,null,o,ht);for(ut in o)if(ht=o[ut],_t=a[ut],o.hasOwnProperty(ut)&&ht!==_t&&(ht!=null||_t!=null))switch(ut){case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Xe(e,n,ut,ht,o,_t)}return;default:if(Ys(n)){for(var je in a)ht=a[je],a.hasOwnProperty(je)&&ht!==void 0&&!o.hasOwnProperty(je)&&dd(e,n,je,void 0,o,ht);for(bt in o)ht=o[bt],_t=a[bt],!o.hasOwnProperty(bt)||ht===_t||ht===void 0&&_t===void 0||dd(e,n,bt,ht,o,_t);return}}for(var it in a)ht=a[it],a.hasOwnProperty(it)&&ht!=null&&!o.hasOwnProperty(it)&&Xe(e,n,it,null,o,ht);for(Tt in o)ht=o[Tt],_t=a[Tt],!o.hasOwnProperty(Tt)||ht===_t||ht==null&&_t==null||Xe(e,n,Tt,ht,o,_t)}function zg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,C=u.duration;if(f&&C&&zg(y)){for(y=0,C=u.responseEnd,o+=1;o<a.length;o++){var j=a[o],ut=j.startTime;if(ut>C)break;var bt=j.transferSize,Tt=j.initiatorType;bt&&zg(Tt)&&(j=j.responseEnd,y+=bt*(j<C?1:(C-ut)/(j-ut)))}if(--o,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var hd=null,pd=null;function _c(e){return e.nodeType===9?e:e.ownerDocument}function Hg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function md(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gd=null;function ay(){var e=window.event;return e&&e.type==="popstate"?e===gd?!1:(gd=e,!0):(gd=null,!1)}var Vg=typeof setTimeout=="function"?setTimeout:void 0,sy=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,ry=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(e){return kg.resolve(null).then(e).catch(oy)}:Vg;function oy(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function Xg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Tr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")zo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zo(a);for(var f=a.firstChild;f;){var y=f.nextSibling,C=f.nodeName;f[ds]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&zo(e.ownerDocument.body);a=u}while(a);Tr(n)}function jg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function _d(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_d(a),io(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ly(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ds])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function cy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Wg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function vd(e){return e.data==="$?"||e.data==="$~"}function xd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function uy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Sd=null;function qg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return _i(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Yg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Zg(e,n,a){switch(n=_c(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function zo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);io(e)}var vi=new Map,Kg=new Set;function vc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=F.d;F.d={f:fy,r:dy,D:hy,C:py,L:my,m:gy,X:vy,S:_y,M:xy};function fy(){var e=_a.f(),n=cc();return e||n}function dy(e){var n=Na(e);n!==null&&n.tag===5&&n.type==="form"?h0(n):_a.r(e)}var Mr=typeof document>"u"?null:document;function Qg(e,n,a){var o=Mr;if(o&&typeof n=="string"&&n){var u=fe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Kg.has(u)||(Kg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",e),Q(n),o.head.appendChild(n)))}}function hy(e){_a.D(e),Qg("dns-prefetch",e,null)}function py(e,n){_a.C(e,n),Qg("preconnect",e,n)}function my(e,n,a){_a.L(e,n,a);var o=Mr;if(o&&e&&n){var u='link[rel="preload"][as="'+fe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+fe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+fe(a.imageSizes)+'"]')):u+='[href="'+fe(e)+'"]';var f=u;switch(n){case"style":f=br(e);break;case"script":f=Er(e)}vi.has(f)||(e=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ho(f))||n==="script"&&o.querySelector(Go(f))||(n=o.createElement("link"),An(n,"link",e),Q(n),o.head.appendChild(n)))}}function gy(e,n){_a.m(e,n);var a=Mr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+fe(o)+'"][href="'+fe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Er(e)}if(!vi.has(f)&&(e=S({rel:"modulepreload",href:e},n),vi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Go(f)))return}o=a.createElement("link"),An(o,"link",e),Q(o),a.head.appendChild(o)}}}function _y(e,n,a){_a.S(e,n,a);var o=Mr;if(o&&e){var u=w(o).hoistableStyles,f=br(e);n=n||"default";var y=u.get(f);if(!y){var C={loading:0,preload:null};if(y=o.querySelector(Ho(f)))C.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(f))&&yd(e,a);var j=y=o.createElement("link");Q(j),An(j,"link",e),j._p=new Promise(function(ut,bt){j.onload=ut,j.onerror=bt}),j.addEventListener("load",function(){C.loading|=1}),j.addEventListener("error",function(){C.loading|=2}),C.loading|=4,xc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:C},u.set(f,y)}}}function vy(e,n){_a.X(e,n);var a=Mr;if(a&&e){var o=w(a).hoistableScripts,u=Er(e),f=o.get(u);f||(f=a.querySelector(Go(u)),f||(e=S({src:e,async:!0},n),(n=vi.get(u))&&Md(e,n),f=a.createElement("script"),Q(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function xy(e,n){_a.M(e,n);var a=Mr;if(a&&e){var o=w(a).hoistableScripts,u=Er(e),f=o.get(u);f||(f=a.querySelector(Go(u)),f||(e=S({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&Md(e,n),f=a.createElement("script"),Q(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Jg(e,n,a,o){var u=(u=Z.current)?vc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=br(a.href),a=w(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=br(a.href);var f=w(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(Ho(e)))&&!f._p&&(y.instance=f,y.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),f||Sy(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Er(a),a=w(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function br(e){return'href="'+fe(e)+'"'}function Ho(e){return'link[rel="stylesheet"]['+e+"]"}function $g(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Sy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),Q(n),e.head.appendChild(n))}function Er(e){return'[src="'+fe(e)+'"]'}function Go(e){return"script[async]"+e}function t_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+fe(a.href)+'"]');if(o)return n.instance=o,Q(o),o;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Q(o),An(o,"style",u),xc(o,a.precedence,e),n.instance=o;case"stylesheet":u=br(a.href);var f=e.querySelector(Ho(u));if(f)return n.state.loading|=4,n.instance=f,Q(f),f;o=$g(a),(u=vi.get(u))&&yd(o,u),f=(e.ownerDocument||e).createElement("link"),Q(f);var y=f;return y._p=new Promise(function(C,j){y.onload=C,y.onerror=j}),An(f,"link",o),n.state.loading|=4,xc(f,a.precedence,e),n.instance=f;case"script":return f=Er(a.src),(u=e.querySelector(Go(f)))?(n.instance=u,Q(u),u):(o=a,(u=vi.get(f))&&(o=S({},a),Md(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Q(u),An(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,xc(o,a.precedence,e));return n.instance}function xc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var C=o[y];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function yd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Md(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Sc=null;function e_(e,n,a){if(Sc===null){var o=new Map,u=Sc=new Map;u.set(a,o)}else u=Sc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ds]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var C=o.get(y);C?C.push(f):o.set(y,[f])}}return o}function n_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function yy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function i_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function My(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=br(o.href),f=n.querySelector(Ho(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=yc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Q(f);return}f=n.ownerDocument||n,o=$g(o),(u=vi.get(u))&&yd(o,u),f=f.createElement("link"),Q(f);var y=f;y._p=new Promise(function(C,j){y.onload=C,y.onerror=j}),An(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=yc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var bd=0;function by(e,n){return e.stylesheets&&e.count===0&&bc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&bc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&bd===0&&(bd=62500*iy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&bc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>bd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function yc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)bc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mc=null;function bc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mc=new Map,n.forEach(Ey,e),Mc=null,yc.call(e))}function Ey(e,n){if(!(n.state.loading&4)){var a=Mc.get(e);if(a)var o=a.get(null);else{a=new Map,Mc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=yc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Vo={$$typeof:N,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function Ty(e,n,a,o,u,f,y,C,j){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ne(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ne(0),this.hiddenUpdates=Ne(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function a_(e,n,a,o,u,f,y,C,j,ut,bt,Tt){return e=new Ty(e,n,a,y,j,ut,bt,Tt,C),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),e.current=f,f.stateNode=e,n=ef(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},rf(f),e}function s_(e){return e?(e=er,e):er}function r_(e,n,a,o,u,f){u=s_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ba(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=za(e,o,n),a!==null&&(Zn(a,e,n),So(a,e,n))}function o_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Ed(e,n){o_(e,n),(e=e.alternate)&&o_(e,n)}function l_(e){if(e.tag===13||e.tag===31){var n=_s(e,67108864);n!==null&&Zn(n,e,67108864),Ed(e,67108864)}}function c_(e){if(e.tag===13||e.tag===31){var n=si();n=js(n);var a=_s(e,n);a!==null&&Zn(a,e,n),Ed(e,n)}}var Ec=!0;function Ay(e,n,a,o){var u=U.T;U.T=null;var f=F.p;try{F.p=2,Td(e,n,a,o)}finally{F.p=f,U.T=u}}function Ry(e,n,a,o){var u=U.T;U.T=null;var f=F.p;try{F.p=8,Td(e,n,a,o)}finally{F.p=f,U.T=u}}function Td(e,n,a,o){if(Ec){var u=Ad(o);if(u===null)fd(e,n,o,Tc,a),f_(e,o);else if(wy(u,e,n,a,o))o.stopPropagation();else if(f_(e,o),n&4&&-1<Cy.indexOf(e)){for(;u!==null;){var f=Na(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=wt(f.pendingLanes);if(y!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;y;){var j=1<<31-Ht(y);C.entanglements[1]|=j,y&=~j}Hi(f),(Ie&6)===0&&(oc=T()+500,Fo(0))}}break;case 31:case 13:C=_s(f,2),C!==null&&Zn(C,f,2),cc(),Ed(f,2)}if(f=Ad(o),f===null&&fd(e,n,o,Tc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else fd(e,n,o,null,a)}}function Ad(e){return e=Ru(e),Rd(e)}var Tc=null;function Rd(e){if(Tc=null,e=Da(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Tc=e,null}function u_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tt()){case yt:return 2;case At:return 8;case mt:case Yt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var Cd=!1,Ka=null,Qa=null,Ja=null,ko=new Map,Xo=new Map,$a=[],Cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function f_(e,n){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(n.pointerId)}}function jo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Na(n),n!==null&&l_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function wy(e,n,a,o,u){switch(n){case"focusin":return Ka=jo(Ka,e,n,a,o,u),!0;case"dragenter":return Qa=jo(Qa,e,n,a,o,u),!0;case"mouseover":return Ja=jo(Ja,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return ko.set(f,jo(ko.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Xo.set(f,jo(Xo.get(f)||null,e,n,a,o,u)),!0}return!1}function d_(e){var n=Da(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,qs(e.priority,function(){c_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,qs(e.priority,function(){c_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Ad(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Au=o,a.target.dispatchEvent(o),Au=null}else return n=Na(a),n!==null&&l_(n),e.blockedOn=a,!1;n.shift()}return!0}function h_(e,n,a){Ac(e)&&a.delete(n)}function Dy(){Cd=!1,Ka!==null&&Ac(Ka)&&(Ka=null),Qa!==null&&Ac(Qa)&&(Qa=null),Ja!==null&&Ac(Ja)&&(Ja=null),ko.forEach(h_),Xo.forEach(h_)}function Rc(e,n){e.blockedOn===n&&(e.blockedOn=null,Cd||(Cd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Dy)))}var Cc=null;function p_(e){Cc!==e&&(Cc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Cc===e&&(Cc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Rd(o||a)===null)continue;break}var f=Na(a);f!==null&&(e.splice(n,3),n-=3,Af(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Tr(e){function n(j){return Rc(j,e)}Ka!==null&&Rc(Ka,e),Qa!==null&&Rc(Qa,e),Ja!==null&&Rc(Ja,e),ko.forEach(n),Xo.forEach(n);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)d_(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[gn]||null;if(typeof f=="function")y||p_(a);else if(y){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[gn]||null)C=y.formAction;else if(Rd(u)!==null)continue}else C=y.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),p_(a)}}}function m_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function wd(e){this._internalRoot=e}wc.prototype.render=wd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();r_(a,o,e,n,null,null)},wc.prototype.unmount=wd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;r_(e.current,2,null,e,null,null),cc(),n[$i]=null}};function wc(e){this._internalRoot=e}wc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Fi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,e),a===0&&d_(e)}};var g_=t.version;if(g_!=="19.2.4")throw Error(s(527,g_,"19.2.4"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Ny={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dc.isDisabled&&Dc.supportsFiber)try{Ct=Dc.inject(Ny),Rt=Dc}catch{}}return qo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=b0,f=E0,y=T0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=a_(e,1,!1,null,null,a,o,null,u,f,y,m_),e[$i]=n.current,ud(e),new wd(n)},qo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=b0,y=E0,C=T0,j=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(j=a.formState)),n=a_(e,1,!0,n,a??null,o,u,j,f,y,C,m_),n.context=s_(null),a=n.current,o=si(),o=js(o),u=Ba(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,In(n,a),Hi(n),e[$i]=n.current,ud(e),new wc(n)},qo.version="19.2.4",qo}var A_;function Xy(){if(A_)return Ud.exports;A_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ud.exports=ky(),Ud.exports}var jy=Xy();const Wy=Wv(jy),tn=16,Un=250,Mp=["#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2","#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2"],qy=500,R_=1e3,Yy=3e4,Zy=2;function Ky(r=4){const[t,i]=rt.useState(!1),[s,l]=rt.useState(0),[c,d]=rt.useState(0),[p,m]=rt.useState(null),[h,x]=rt.useState(!1),[S,g]=rt.useState(0),[b,M]=rt.useState(null),R=rt.useRef(null),_=rt.useRef(null),v=rt.useRef(null),A=rt.useRef(null),N=rt.useRef(0),D=rt.useRef(0),G=rt.useRef([]),B=rt.useRef(!1),z=rt.useRef(0),E=rt.useRef(0),O=rt.useRef(0),at=Un*r;O.current=at,(!A.current||A.current[0].length!==at)&&(A.current=Array.from({length:tn},()=>new Float32Array(at)),N.current=0,D.current=0),rt.useEffect(()=>(h?(R.current=Date.now(),g(0),_.current&&clearInterval(_.current),_.current=setInterval(()=>{g(Math.floor((Date.now()-R.current)/1e3))},500)):(_.current&&clearInterval(_.current),R.current=null),()=>{_.current&&clearInterval(_.current)}),[h]);const H=rt.useCallback(et=>{B.current=et,et||(N.current=0,D.current=0)},[]),q=rt.useCallback(et=>{const U=v.current;U&&U.readyState===WebSocket.OPEN&&U.send(JSON.stringify(et))},[]);rt.useEffect(()=>{const et=location.hostname||"localhost",U=parseInt(location.port||"1617")-1,k=`${location.protocol==="https:"?"wss":"ws"}://${et}:${U}`,nt="/auth/ws-token";async function vt(){try{const $=await fetch(nt,{credentials:"include"});return $.ok&&(await $.json()).token||null}catch{return null}}let I=R_;async function X(){const $=await vt(),pt=$?`${k}?token=${encodeURIComponent($)}`:k,St=new WebSocket(pt);v.current=St,St.onopen=()=>{i(!0),I=R_},St.onclose=()=>{i(!1),m(null);const Z=Math.random()*I*.3;setTimeout(X,I+Z),I=Math.min(I*Zy,Yy)},St.onerror=()=>St.close(),St.onmessage=Z=>{const V=JSON.parse(Z.data);if("record_status"in V){const Ft=V.record_status;if(x(Ft.recording),Ft.stopped){const te=location.port||"1617";M({filename:Ft.stopped.filename,frames:Ft.stopped.frames,duration:Ft.stopped.duration,path:Ft.stopped.path,downloadUrl:`${location.protocol}//${location.hostname}:${te}/recordings/${Ft.stopped.filename}`})}}if("status"in V||B.current)return;const ft=V.channels;if(!ft||ft.length!==tn)return;const Mt=A.current,Dt=O.current,Pt=N.current;for(let Ft=0;Ft<tn;Ft++)Mt[Ft][Pt]=ft[Ft];N.current=(Pt+1)%Dt,D.current<Dt&&D.current++,z.current++;const kt=V.t;G.current.push(kt);const Ot=performance.now();if(Ot-E.current>qy){E.current=Ot,l(z.current);const Ft=G.current,te=kt-2;let Gt=0;for(;Gt<Ft.length&&Ft[Gt]<te;)Gt++;if(Gt>0&&Ft.splice(0,Gt),Ft.length>1){const W=Ft[Ft.length-1]-Ft[0];W>0&&d(Math.round((Ft.length-1)/W))}const ue=Math.round((Date.now()/1e3-kt)*1e3);ue>=0&&ue<1e4&&m(ue)}}}return X(),()=>{const $=v.current;$&&$.close()}},[]);const Y=rt.useCallback(()=>M(null),[]),st=rt.useMemo(()=>({buffers:A,writeIndex:N,samplesInBuffer:D,bufferSize:at,gridSuspended:!1}),[]);return st.bufferSize=at,{connected:t,sampleCount:s,hz:c,latencyMs:p,recording:h,recordElapsed:S,recordResult:b,data:st,dismissRecordResult:Y,setPaused:H,sendCommand:q}}function Fd({children:r}){const[t,i]=rt.useState("checking"),[s,l]=rt.useState(""),[c,d]=rt.useState("");rt.useEffect(()=>{(async()=>{try{const h=await fetch("/auth/status",{credentials:"include"});if(!h.ok){i("login");return}const x=await h.json();i(x.authenticated?"ok":"login")}catch(h){console.error("Auth check error:",h),i("login")}})()},[]);async function p(m){m.preventDefault(),d("");try{const x=await(await fetch("/auth",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({code:s})})).json();x.ok?i("ok"):(d(x.error||"Invalid code"),l(""))}catch{d("Server unreachable")}}return t==="checking"?null:t==="ok"?L.jsx(L.Fragment,{children:r}):L.jsx("div",{className:"auth-overlay",children:L.jsxs("div",{className:"auth-card",children:[L.jsxs("h1",{children:["Pi",L.jsx("span",{children:"EEG"}),"-16"]}),L.jsx("p",{className:"auth-sub",children:"Enter the access code displayed in the server console"}),L.jsxs("form",{onSubmit:p,children:[L.jsx("input",{className:"auth-input",type:"text",maxLength:6,pattern:"[0-9]{6}",autoComplete:"off",autoFocus:!0,required:!0,placeholder:"------",value:s,onChange:m=>l(m.target.value.replace(/\D/g,""))}),L.jsx("br",{}),L.jsx("button",{className:"auth-btn",type:"submit",children:"Connect"}),c&&L.jsx("p",{className:"auth-error",children:c})]})]})})}const Qy="rgba(48,54,61,0.4)",Jy="rgba(88,166,255,0.15)",$y={high:1500,medium:800,low:400},C_=14,w_=20,D_=2;function tM(r,t,i,s,l,c,d,p,m,h){r.clearRect(0,0,t,i);const x=i/2,S=i/4;r.beginPath();for(let N=S;N<i;N+=S)r.moveTo(0,N),r.lineTo(t,N);if(r.strokeStyle=Qy,r.lineWidth=.5,r.stroke(),r.beginPath(),r.moveTo(0,x),r.lineTo(t,x),r.strokeStyle=Jy,r.lineWidth=1,r.stroke(),l<2)return;const g=$y[h]||1500,b=l>g?Math.floor(l/g):1,M=i/2,R=t/(d-1),_=M/p;if(h!=="low"){r.beginPath();let N=0;for(let D=0;D<l;D+=b){const G=(c-l+D+d)%d,B=D*R,z=x-s[G]*_;D===0?(r.moveTo(B,z),N=B):r.lineTo(B,z)}r.lineTo((l-1)*R,i),r.lineTo(N,i),r.closePath(),r.fillStyle=m+"10",r.fill()}r.strokeStyle=m,r.lineWidth=h==="low"?1:1.3,r.lineJoin="round",r.lineCap="round",r.beginPath();for(let N=0;N<l;N+=b){const D=(c-l+N+d)%d,G=N*R,B=x-s[D]*_;N===0?r.moveTo(G,B):r.lineTo(G,B)}r.stroke();let v=0;const A=Math.min(l,250);for(let N=l-A;N<l;N++){const D=(c-l+N+d)%d;v+=s[D]*s[D]}return Math.sqrt(v/A)}const eM=rt.memo(function({chIdx:t,eegData:i,yRange:s,expanded:l,onToggleExpand:c,active:d=!0}){const p=rt.useRef(null),m=rt.useRef(0),h=rt.useRef(0),x=rt.useRef(null),S=rt.useRef(null),g=rt.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),b=rt.useRef(!0),M=rt.useRef("high"),R=rt.useRef([]),_=rt.useRef(-1),v=rt.useRef(0),A=rt.useRef(0);return rt.useEffect(()=>{if(!d)return;const N=p.current;if(!N)return;const D=new ResizeObserver(G=>{const B=G[0];if(!B)return;const z=window.devicePixelRatio||1,{width:E,height:O}=B.contentRect,at=l?Math.min(z,2):1;g.current={w:E,h:O,pw:Math.round(E*at),ph:Math.round(O*at),dpr:at},b.current=!0});return D.observe(N),()=>D.disconnect()},[d,l]),rt.useEffect(()=>{if(!d)return;const N=p.current;if(!N)return;const D=N.getContext("2d",{alpha:!1});_.current=-1,A.current=0;const G=t%D_,B=()=>{A.current++;const{w:z,h:E,pw:O,ph:at,dpr:H}=g.current;if(z===0||E===0){m.current=requestAnimationFrame(B);return}if(!l&&i.gridSuspended){m.current=requestAnimationFrame(B);return}if(!l&&A.current%D_!==G){m.current=requestAnimationFrame(B);return}const q=i.writeIndex.current;if(q===_.current){m.current=requestAnimationFrame(B);return}_.current=q;const Y=performance.now();b.current&&(b.current=!1,N.width=O,N.height=at,D.setTransform(H,0,0,H,0,0)),D.fillStyle="#0d1117",D.fillRect(0,0,z,E);const st=tM(D,z,E,i.buffers.current[t],i.samplesInBuffer.current,q,i.bufferSize,s,Mp[t],M.current);if(v.current++,st!==void 0&&(v.current&1)===0){h.current=st;const F=st/s;if(x.current&&(x.current.style.borderLeftColor=F>.8?"#f85149":F>.4?"#d29922":"#3fb950"),S.current){const k=F>.8?"#f85149":F>.4?"#d29922":"#3fb950",nt=F>.8?"HIGH":F>.4?"MED":"OK",vt=st<.5;S.current.style.color=vt?"#8b949e":k,S.current.textContent=vt?"FLAT":nt}}const et=performance.now()-Y,U=R.current;if(U.push(et),U.length>w_&&U.shift(),U.length===w_){let F=0;for(let nt=0;nt<U.length;nt++)F+=U[nt];const k=F/U.length;k>C_&&M.current!=="low"?M.current=M.current==="high"?"medium":"low":k<C_*.4&&M.current!=="high"&&(M.current=M.current==="low"?"medium":"high")}m.current=requestAnimationFrame(B)};return m.current=requestAnimationFrame(B),()=>cancelAnimationFrame(m.current)},[t,i,s,d]),d?L.jsxs("div",{className:`channel-cell${l?" expanded":""}`,onClick:c,children:[L.jsxs("div",{className:"channel-label",ref:x,children:["Ch ",t+1,L.jsx("span",{className:"signal-quality",ref:S,children:"OK"})]}),L.jsx("canvas",{ref:p,style:{display:"block",width:"100%",height:"100%"}})]}):L.jsxs("div",{className:`channel-cell inactive${l?" expanded":""}`,onClick:c,children:[L.jsxs("div",{className:"channel-label",children:["Ch ",t+1]}),L.jsx("div",{className:"channel-off",children:"OFF"})]})}),{PI:nM,cos:N_,sin:iM}=Math,U_=2*nM,on=[{name:"Delta",label:"δ Delta",low:.5,high:4,color:"#8b5cf6"},{name:"Theta",label:"θ Theta",low:4,high:8,color:"#06b6d4"},{name:"Alpha",label:"α Alpha",low:8,high:13,color:"#22c55e"},{name:"Beta",label:"β Beta",low:13,high:30,color:"#f59e0b"},{name:"Gamma",label:"γ Gamma",low:30,high:100,color:"#ef4444"}];class qr{constructor(t,i){wi(this,"n");wi(this,"sampleRateHz");wi(this,"_window");wi(this,"_frequencies");wi(this,"_df");wi(this,"_bitReversed");wi(this,"_twRe");wi(this,"_twIm");wi(this,"_norm");if(t<=0||(t&t-1)!==0)throw new Error("n must be a power of 2");this.n=t,this.sampleRateHz=i,this._precompute()}_precompute(){const{n:t,sampleRateHz:i}=this;this._window=new Float64Array(t);for(let p=0;p<t;p++)this._window[p]=.5*(1-N_(U_*p/(t-1)));const s=(t>>1)+1;this._frequencies=new Float64Array(s),this._df=i/t;for(let p=0;p<s;p++)this._frequencies[p]=p*this._df;const l=qr._log2(t);this._bitReversed=new Int32Array(t);for(let p=0;p<t;p++)this._bitReversed[p]=qr._reverseBits(p,l);const c=t>>1;this._twRe=new Float64Array(c),this._twIm=new Float64Array(c);for(let p=0;p<c;p++){const m=-U_*p/t;this._twRe[p]=N_(m),this._twIm[p]=iM(m)}let d=0;for(let p=0;p<t;p++)d+=this._window[p]*this._window[p];this._norm=2/(i*d)}analyse(t,i){const{n:s,_window:l,_frequencies:c,_df:d,_norm:p}=this;if(i===void 0&&(i=t.length-s),i<0||t.length-i<s)return null;const m=new Float64Array(s),h=new Float64Array(s);for(let _=0;_<s;_++)m[_]=t[i+_]*l[_];this._fft(m,h);const x=(s>>1)+1,S=new Float64Array(x);let g=0,b=0,M=0;for(let _=0;_<x;_++){const v=m[_]*m[_]+h[_]*h[_],A=_===0||_===x-1?.5:1;S[_]=v*p*A,b+=S[_]*d,S[_]>g&&(g=S[_],M=_)}const R={};for(const _ of on){let v=0;for(let A=0;A<x;A++)c[A]>=_.low&&c[A]<_.high&&(v+=S[A]*d);R[_.name]=v}return{frequencies:c,psd:S,bandPowers:R,dominantFrequency:c[M],totalPower:b}}analyseRing(t,i,s){const{n:l}=this;if(s<l)return null;const c=t.length,d=new Float64Array(l),p=(i-l+c)%c;for(let m=0;m<l;m++)d[m]=t[(p+m)%c];return this.analyse(d,0)}_fft(t,i){const{n:s,_bitReversed:l,_twRe:c,_twIm:d}=this;for(let p=0;p<s;p++){const m=l[p];if(m>p){let h=t[p];t[p]=t[m],t[m]=h,h=i[p],i[p]=i[m],i[m]=h}}for(let p=2;p<=s;p*=2){const m=p>>1,h=s/p;for(let x=0;x<s;x+=p)for(let S=0;S<m;S++){const g=S*h,b=c[g],M=d[g],R=x+S,_=R+m,v=b*t[_]-M*i[_],A=b*i[_]+M*t[_];t[_]=t[R]-v,i[_]=i[R]-A,t[R]+=v,i[R]+=A}}}static _log2(t){let i=0,s=t;for(;s>1;)s>>=1,i++;return i}static _reverseBits(t,i){let s=0,l=t;for(let c=0;c<i;c++)s=s<<1|l&1,l>>=1;return s}}const Yo=256,L_=8,O_=.25,Id=15,aM=60,Di=40;function sM(r,t,i,s,l,c,d,p,m){r.clearRect(0,0,t,i);const h={l:52,r:12,t:8,b:28},x=t-h.l-h.r,S=i-h.t-h.b,g=h.t+S/2;r.fillStyle="#0d1117",r.fillRect(0,0,t,i),r.strokeStyle="rgba(48,54,61,0.5)",r.lineWidth=.5;const b=[-p,-p/2,0,p/2,p];r.font="9px monospace",r.fillStyle="#8b949e",r.textAlign="right";for(const U of b){const F=g-U/p*(S/2);r.beginPath(),r.moveTo(h.l,F),r.lineTo(t-h.r,F),r.stroke(),r.fillText(`${U>0?"+":""}${U}`,h.l-6,F+3)}r.textAlign="center",r.fillStyle="#8b949e";const M=d/Un;for(let U=0;U<=M;U+=1){const F=h.l+U/M*x;r.beginPath(),r.moveTo(F,h.t),r.lineTo(F,h.t+S),r.strokeStyle="rgba(48,54,61,0.3)",r.stroke(),r.fillText(`${U}s`,F,i-6)}if(r.beginPath(),r.moveTo(h.l,g),r.lineTo(t-h.r,g),r.strokeStyle="rgba(88,166,255,0.2)",r.lineWidth=1,r.stroke(),l<2)return{};const R=S/2,_=x/(d-1),v=R/p;r.beginPath();let A=h.l;for(let U=0;U<l;U++){const F=(c-l+U+d)%d,k=h.l+U*_,nt=g-s[F]*v;U===0?(r.moveTo(k,nt),A=k):r.lineTo(k,nt)}r.lineTo(h.l+(l-1)*_,g+R),r.lineTo(A,g+R),r.closePath(),r.fillStyle=m+"0a",r.fill(),r.strokeStyle=m,r.lineWidth=1.5,r.lineJoin="round",r.lineCap="round",r.beginPath();for(let U=0;U<l;U++){const F=(c-l+U+d)%d,k=h.l+U*_,nt=g-s[F]*v;U===0?r.moveTo(k,nt):r.lineTo(k,nt)}r.stroke();const N=h.l+(l-1)*_;r.beginPath(),r.moveTo(N,h.t),r.lineTo(N,h.t+S),r.strokeStyle=m+"40",r.lineWidth=1,r.setLineDash([3,3]),r.stroke(),r.setLineDash([]);const D=(c-1+d)%d,G=s[D];r.fillStyle=m,r.font="bold 11px monospace",r.textAlign="left",r.fillText(`${G.toFixed(1)} µV`,N+6,h.t+14),r.save(),r.translate(12,g),r.rotate(-Math.PI/2),r.textAlign="center",r.fillStyle="#8b949e",r.font="9px monospace",r.fillText("µV",0,0),r.restore();let B=0,z=0,E=1/0,O=-1/0,at=0,H=null;const q=Math.min(l,Un*2);for(let U=l-q;U<l;U++){const F=(c-l+U+d)%d,k=s[F];B+=k,z+=k*k,k<E&&(E=k),k>O&&(O=k),H!==null&&(H>=0&&k<0||H<0&&k>=0)&&at++,H=k}const Y=B/q,st=Math.sqrt(z/q),et=O-E;return{mean:Y,rms:st,pp:et,min:E,max:O,zeroCross:at,latestVal:G,statCount:q}}function rM(r,t,i,s,l,c,d,p){r.fillStyle="#0d1117",r.fillRect(0,0,t,i);const m={l:44,r:10,t:20,b:24},h=t-m.l-m.r,x=i-m.t-m.b,S=l[1],g=Math.min(Math.ceil(c/S),s.length-1);let b=1e-30;for(let M=1;M<=g;M++)s[M]>b&&(b=s[M]);for(const M of on){if(M.low>=c)continue;const R=m.l+Math.max(M.low,0)/c*h,_=m.l+Math.min(M.high,c)/c*h,v=p===M.name;r.fillStyle=M.color+(v?"20":"0a"),r.fillRect(R,m.t,_-R,x),r.fillStyle=M.color+(v?"bb":"55"),r.font="8px monospace",r.textAlign="center",r.fillText(M.label.split(" ")[0],(R+_)/2,m.t+10)}r.strokeStyle="rgba(48,54,61,0.45)",r.lineWidth=.5;for(let M=1;M<4;M++){const R=m.t+M/4*x;r.beginPath(),r.moveTo(m.l,R),r.lineTo(m.l+h,R),r.stroke()}r.beginPath();for(let M=1;M<=g;M++){const R=m.l+l[M]/c*h,_=10*Math.log10((s[M]||1e-30)/b),v=Math.max(0,(_+60)/60),A=m.t+x-Math.min(1,v)*x;M===1?r.moveTo(R,A):r.lineTo(R,A)}r.strokeStyle="#58a6ff",r.lineWidth=1.5,r.stroke(),r.lineTo(m.l+l[g]/c*h,m.t+x),r.lineTo(m.l+l[1]/c*h,m.t+x),r.closePath(),r.fillStyle="rgba(88,166,255,0.08)",r.fill(),r.fillStyle="#8b949e",r.font="9px monospace",r.textAlign="center";for(let M=0;M<=c;M+=10)r.fillText(`${M}`,m.l+M/c*h,i-6);r.fillText("Hz",m.l+h+2,i-6),r.save(),r.translate(10,m.t+x/2),r.rotate(-Math.PI/2),r.textAlign="center",r.fillStyle="#8b949e",r.font="8px monospace",r.fillText("dB",0,0),r.restore(),r.textAlign="right",r.font="8px monospace",r.fillStyle="#6e7681";for(const M of[0,-20,-40,-60]){const R=m.t+x-(M+60)/60*x;r.fillText(`${M}`,m.l-4,R+3)}}function oM(r,t,i,s){r.fillStyle="#0d1117",r.fillRect(0,0,t,i);const l={l:10,r:10,t:6,b:4},c=Math.min(16,(i-l.t-l.b-(on.length-1)*4)/on.length),d=Math.max(...on.map(m=>s[m.name]||0),1e-6),p=on.reduce((m,h)=>m+(s[h.name]||0),0)||1e-6;on.forEach((m,h)=>{const x=s[m.name]||0,S=x/d,g=(x/p*100).toFixed(1),b=l.t+h*(c+4),M=t-l.l-l.r-82;r.fillStyle=m.color,r.font="bold 9px monospace",r.textAlign="left",r.fillText(m.label.charAt(0),l.l,b+c-3);const R=l.l+14;r.fillStyle="rgba(48,54,61,0.5)",r.beginPath(),r.roundRect(R,b,M,c,3),r.fill(),S>0&&(r.fillStyle=m.color+"cc",r.beginPath(),r.roundRect(R,b,Math.max(4,M*S),c,3),r.fill()),r.fillStyle="#e6edf3",r.font="9px monospace",r.textAlign="right",r.fillText(`${g}%`,t-l.r,b+c-3)})}function lM(r,t,i,s,l,c,d,p){if(r.fillStyle="#0d1117",r.fillRect(0,0,t,i),l<10)return;const m={l:8,r:8,t:6,b:20},h=t-m.l-m.r,x=i-m.t-m.b,S=new Float32Array(Di),g=2*p/Di,b=Math.min(l,Un*2);for(let _=l-b;_<l;_++){const v=(c-l+_+d)%d,A=s[v],N=Math.floor((A+p)/g);N>=0&&N<Di&&S[N]++}let M=0;for(let _=0;_<Di;_++)S[_]>M&&(M=S[_]);if(M===0)return;const R=h/Di;for(let _=0;_<Di;_++){const v=S[_]/M*x,A=m.l+_*R,N=m.t+x-v,D=Math.abs(_-Di/2)/(Di/2),G=Math.floor(88+D*160),B=Math.floor(166-D*120),z=Math.floor(255-D*200);r.fillStyle=`rgba(${G},${B},${z},0.6)`,r.fillRect(A+.5,N,R-1,v)}r.fillStyle="#6e7681",r.font="8px monospace",r.textAlign="center",r.fillText(`-${p}`,m.l+R,i-4),r.fillText("0",m.l+h/2,i-4),r.fillText(`+${p}`,t-m.r-R,i-4),r.strokeStyle="rgba(88,166,255,0.3)",r.lineWidth=1,r.beginPath();for(let _=0;_<Di;_++){const v=m.l+(_+.5)*R,A=(_-Di/2)/(Di/4),N=Math.exp(-.5*A*A),D=m.t+x-N*x*.85;_===0?r.moveTo(v,D):r.lineTo(v,D)}r.stroke()}const cM=rt.memo(function({chIdx:t,eegData:i,yRange:s,onClose:l}){var H;const c=rt.useRef(null),d=rt.useRef(null),p=rt.useRef(null),m=rt.useRef(null),h=rt.useRef(0),x=rt.useRef(0),S=rt.useRef(null),[g,b]=rt.useState(null),[M,R]=rt.useState({}),[_,v]=rt.useState({band:"",freq:0}),[A,N]=rt.useState(null),D=rt.useMemo(()=>new qr(Yo,Un),[]),G=Mp[t],B=rt.useRef({trace:{w:0,h:0,pw:0,ph:0,dpr:1},spectrum:{w:0,h:0,pw:0,ph:0,dpr:1},band:{w:0,h:0,pw:0,ph:0,dpr:1},hist:{w:0,h:0,pw:0,ph:0,dpr:1}}),z=rt.useRef({trace:!0,spectrum:!0,band:!0,hist:!0});rt.useEffect(()=>{const q={trace:c.current,spectrum:d.current,band:p.current,hist:m.current},Y={},st=[];for(const[nt,vt]of Object.entries(q)){if(!vt)continue;Y[nt]=vt.getContext("2d",{alpha:!1});const I=new ResizeObserver(X=>{const $=X[0];if(!$)return;const pt=Math.min(window.devicePixelRatio||1,2),{width:St,height:Z}=$.contentRect,V=Math.round(St*pt),ft=Math.round(Z*pt);B.current[nt]={w:St,h:Z,pw:V,ph:ft,dpr:pt},z.current[nt]=!0});I.observe(vt),st.push(I)}let et=null,U={},F={band:"",freq:0};const k=()=>{x.current++;for(const[$,pt]of Object.entries(q)){if(!pt||!z.current[$])continue;const{pw:St,ph:Z,dpr:V}=B.current[$];St===0||Z===0||(pt.width=St,pt.height=Z,Y[$].setTransform(V,0,0,V,0,0),z.current[$]=!1)}const nt=i.buffers.current,vt=i.writeIndex.current,I=i.samplesInBuffer.current,X=i.bufferSize;if(Y.trace){const{w:$,h:pt}=B.current.trace;if($>0&&pt>0){const St=sM(Y.trace,$,pt,nt[t],I,vt,X,s,G);St.rms!==void 0&&x.current%Id===0&&(et=St)}}if(x.current%L_===0&&I>=Yo){const $=D.analyseRing(nt[t],vt,I);if($){if(!S.current||S.current.length!==$.psd.length)S.current=new Float64Array($.psd);else{const Z=S.current,V=$.psd;for(let ft=0;ft<Z.length;ft++)Z[ft]=Z[ft]*(1-O_)+V[ft]*O_}U=$.bandPowers;let pt="",St=0;for(const Z of on)($.bandPowers[Z.name]||0)>St&&(St=$.bandPowers[Z.name],pt=Z.name);F={band:pt,freq:$.dominantFrequency}}}if(Y.spectrum&&S.current){const{w:$,h:pt}=B.current.spectrum;$>0&&pt>0&&rM(Y.spectrum,$,pt,S.current,D._frequencies,aM,U,A)}if(Y.band&&x.current%L_===0){const{w:$,h:pt}=B.current.band;$>0&&pt>0&&oM(Y.band,$,pt,U)}if(Y.hist&&x.current%Id===0){const{w:$,h:pt}=B.current.hist;$>0&&pt>0&&lM(Y.hist,$,pt,nt[t],I,vt,X,s)}x.current%Id===0&&(et&&b(et),U&&R(U),v($=>$.band===F.band&&$.freq===F.freq?$:F)),h.current=requestAnimationFrame(k)};return h.current=requestAnimationFrame(k),()=>{cancelAnimationFrame(h.current),st.forEach(nt=>nt.disconnect())}},[t,i,s,G,D,A]);const E=on.find(q=>q.name===_.band),O=(E==null?void 0:E.color)||"#8b949e",at=on.reduce((q,Y)=>q+(M[Y.name]||0),0);return L.jsx("div",{className:"detail-overlay",onClick:l,children:L.jsxs("div",{className:"detail-panel",onClick:q=>q.stopPropagation(),children:[L.jsxs("div",{className:"detail-header",children:[L.jsxs("div",{className:"detail-title-group",children:[L.jsxs("span",{className:"detail-ch-badge",style:{borderColor:G,color:G},children:["Ch ",t+1]}),L.jsx("span",{className:"detail-title",children:"Channel Analysis"}),L.jsx("span",{className:"detail-subtitle",children:"Real-time single-channel deep inspection"})]}),L.jsxs("div",{className:"detail-header-stats",children:[_.band&&L.jsxs("span",{className:"detail-dominant",style:{color:O},children:[L.jsx("span",{className:"detail-dominant-label",children:"Dominant"}),L.jsx("span",{className:"detail-dominant-band",children:(E==null?void 0:E.label)||_.band}),L.jsxs("span",{className:"detail-dominant-freq",children:[_.freq.toFixed(1)," Hz"]})]}),g&&L.jsxs("span",{className:"detail-rms-badge",children:["RMS ",(H=g.rms)==null?void 0:H.toFixed(1)," µV"]})]}),L.jsx("button",{className:"detail-close",onClick:l,children:L.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:L.jsx("path",{d:"M4 4L14 14M14 4L4 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]}),L.jsxs("div",{className:"detail-body",children:[L.jsxs("div",{className:"detail-trace-section",children:[L.jsxs("div",{className:"detail-section-head",children:[L.jsx("span",{className:"detail-section-title",children:"Time Domain"}),L.jsxs("span",{className:"detail-section-meta",children:[Un," Hz · ±",s," µV"]})]}),L.jsx("div",{className:"detail-trace-canvas-wrap",children:L.jsx("canvas",{ref:c,style:{display:"block",width:"100%",height:"100%"}})})]}),L.jsxs("div",{className:"detail-analysis",children:[L.jsxs("div",{className:"detail-card",children:[L.jsxs("div",{className:"detail-card-head",children:[L.jsx("span",{className:"detail-card-title",children:"Power Spectrum"}),L.jsxs("span",{className:"detail-card-meta",children:[Yo,"pt FFT · ",(Un/Yo).toFixed(1)," Hz/bin"]})]}),L.jsx("div",{className:"detail-card-canvas",children:L.jsx("canvas",{ref:d,style:{display:"block",width:"100%",height:"100%"}})})]}),L.jsxs("div",{className:"detail-card",children:[L.jsxs("div",{className:"detail-card-head",children:[L.jsx("span",{className:"detail-card-title",children:"Band Power Distribution"}),L.jsx("span",{className:"detail-card-meta",children:at>0?`${at.toFixed(2)} µV²/Hz total`:"—"})]}),L.jsx("div",{className:"detail-card-canvas detail-card-canvas-sm",children:L.jsx("canvas",{ref:p,style:{display:"block",width:"100%",height:"100%"}})}),L.jsx("div",{className:"detail-band-legend",children:on.map(q=>L.jsxs("button",{className:`detail-band-btn${A===q.name?" active":""}`,style:{"--band-color":q.color},onClick:()=>N(Y=>Y===q.name?null:q.name),children:[L.jsx("span",{className:"detail-band-dot"}),q.label.split(" ")[0]]},q.name))})]}),L.jsxs("div",{className:"detail-bottom-row",children:[L.jsxs("div",{className:"detail-card detail-card-half",children:[L.jsx("div",{className:"detail-card-head",children:L.jsx("span",{className:"detail-card-title",children:"Amplitude Distribution"})}),L.jsx("div",{className:"detail-card-canvas detail-card-canvas-sm",children:L.jsx("canvas",{ref:m,style:{display:"block",width:"100%",height:"100%"}})})]}),L.jsxs("div",{className:"detail-card detail-card-half detail-stats-card",children:[L.jsx("div",{className:"detail-card-head",children:L.jsx("span",{className:"detail-card-title",children:"Signal Metrics"})}),L.jsxs("div",{className:"detail-stats-grid",children:[L.jsx(Ds,{label:"RMS",value:g==null?void 0:g.rms,unit:"µV",precision:2}),L.jsx(Ds,{label:"Peak-Peak",value:g==null?void 0:g.pp,unit:"µV",precision:1}),L.jsx(Ds,{label:"Mean",value:g==null?void 0:g.mean,unit:"µV",precision:2}),L.jsx(Ds,{label:"Min",value:g==null?void 0:g.min,unit:"µV",precision:1}),L.jsx(Ds,{label:"Max",value:g==null?void 0:g.max,unit:"µV",precision:1}),L.jsx(Ds,{label:"Zero-X",value:g==null?void 0:g.zeroCross,unit:"/2s",precision:0}),L.jsx(Ds,{label:"Live",value:g==null?void 0:g.latestVal,unit:"µV",precision:1,highlight:!0})]})]})]})]})]}),L.jsxs("div",{className:"detail-footer",children:[L.jsxs("span",{children:[Yo,"-pt Hanning · Cooley-Tukey radix-2"]}),L.jsxs("span",{className:"detail-footer-keys",children:[L.jsx("kbd",{children:"Esc"})," Close"]}),L.jsx("span",{children:"Not a medical device"})]})]})})});function Ds({label:r,value:t,unit:i,precision:s=2,highlight:l}){const c=t!=null?s===0?String(Math.round(t)):t.toFixed(s):"—";return L.jsxs("div",{className:`detail-stat-row${l?" highlight":""}`,children:[L.jsx("span",{className:"detail-stat-label",children:r}),L.jsx("span",{className:"detail-stat-value",children:c}),L.jsx("span",{className:"detail-stat-unit",children:i})]})}const Zo=256,uM=60,fM=12,P_=.3,dM=350;function hM(r,t,i,s,l,c,d,p){const h=t-16,x=24,S=i-24,g=h-48,b=S-x,M=l[1],R=Math.min(Math.ceil(c/M),s.length-1);let _=1e-30;for(let v=1;v<=R;v++)s[v]>_&&(_=s[v]);for(const v of on){if(v.low>=c)continue;const A=48+Math.max(v.low,0)/c*g,N=48+Math.min(v.high,c)/c*g,D=p===v.name;r.fillStyle=v.color+(D?"28":"12"),r.fillRect(A,x,N-A,b),r.fillStyle=v.color+(D?"cc":"66"),r.font="9px monospace",r.textAlign="center",r.fillText(v.name,(A+N)/2,x+10)}r.strokeStyle="rgba(48,54,61,0.45)",r.lineWidth=.5;for(let v=1;v<5;v++){const A=x+v/5*b;r.beginPath(),r.moveTo(48,A),r.lineTo(h,A),r.stroke()}for(const v of[4,8,13,30,50]){if(v>c)continue;const A=48+v/c*g;r.beginPath(),r.moveTo(A,x),r.lineTo(A,S),r.stroke()}r.beginPath();for(let v=1;v<=R;v++){const A=48+l[v]/c*g;let N;if(d){const G=10*Math.log10((s[v]||1e-30)/_);N=Math.max(0,(G+60)/60)}else N=s[v]/_;const D=S-Math.min(1,N)*b;v===1?r.moveTo(A,D):r.lineTo(A,D)}r.strokeStyle="#58a6ff",r.lineWidth=1.5,r.stroke(),r.lineTo(48+l[R]/c*g,S),r.lineTo(48+l[1]/c*g,S),r.closePath(),r.fillStyle="rgba(88,166,255,0.07)",r.fill(),r.fillStyle="#8b949e",r.font="10px monospace",r.textAlign="center";for(let v=0;v<=c;v+=10)r.fillText(`${v}`,48+v/c*g,S+14);if(r.fillText("Hz",h+2,S+14),r.save(),r.translate(11,x+b/2),r.rotate(-Math.PI/2),r.textAlign="center",r.fillText(d?"dB":"µV²/Hz",0,0),r.restore(),r.textAlign="right",r.font="9px monospace",d)for(const v of[0,-20,-40,-60]){const A=S-(v+60)/60*b;r.fillText(`${v}`,44,A+3)}}const pM=rt.memo(function({eegData:t}){var q;const i=rt.useRef(null),s=rt.useRef(0),l=rt.useRef(0),c=rt.useRef(null),d=rt.useRef(0),p=rt.useRef(null),m=rt.useRef({}),h=rt.useRef(window.devicePixelRatio||1),x=rt.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),S=rt.useRef(!0),[g,b]=rt.useState(-1),[M,R]=rt.useState(!0),[_,v]=rt.useState(!1),[A,N]=rt.useState(null),[D,G]=rt.useState({}),[B,z]=rt.useState({band:"",freq:0}),E=rt.useMemo(()=>new qr(Zo,Un),[]);p.current||(p.current=new Float64Array(Zo)),rt.useEffect(()=>{const Y=i.current;if(!Y)return;const st=Y.getContext("2d",{alpha:!1}),et=new ResizeObserver(F=>{const k=F[0];if(!k)return;const nt=window.devicePixelRatio||1;h.current=nt;const{width:vt,height:I}=k.contentRect;x.current={w:vt,h:I,pw:Math.round(vt*nt),ph:Math.round(I*nt),dpr:nt},S.current=!0});et.observe(Y);const U=()=>{const{w:F,h:k,pw:nt,ph:vt}=x.current;if(F===0||k===0){s.current=requestAnimationFrame(U);return}if(S.current&&(S.current=!1,Y.width=nt,Y.height=vt),st.setTransform(h.current,0,0,h.current,0,0),st.fillStyle="#0d1117",st.fillRect(0,0,F,k),l.current++,!_&&l.current%fM===0){const X=t.buffers.current,$=t.writeIndex.current,pt=t.samplesInBuffer.current;if(X&&pt>=Zo){let St;if(g===-1){const Z=p.current,V=t.bufferSize,ft=($-Zo+V)%V;for(let Mt=0;Mt<Zo;Mt++){let Dt=0;const Pt=(ft+Mt)%V;for(let kt=0;kt<tn;kt++)Dt+=X[kt][Pt];Z[Mt]=Dt/tn}St=E.analyse(Z,0)}else St=E.analyseRing(X[g],$,pt);if(St){if(!c.current||c.current.length!==St.psd.length)c.current=new Float64Array(St.psd);else{const V=c.current,ft=St.psd;for(let Mt=0;Mt<V.length;Mt++)V[Mt]=V[Mt]*(1-P_)+ft[Mt]*P_}const Z=performance.now();if(Z-d.current>dM){d.current=Z,m.current=St.bandPowers,G(St.bandPowers);let V="",ft=0;for(const Mt of on)(St.bandPowers[Mt.name]||0)>ft&&(ft=St.bandPowers[Mt.name],V=Mt.name);z(Mt=>Mt.band===V&&Mt.freq===St.dominantFrequency?Mt:{band:V,freq:St.dominantFrequency})}}}}const I=c.current;!I||I.length===0?(st.fillStyle="#4b5563",st.font="13px monospace",st.textAlign="center",st.fillText("Collecting samples…",F/2,k/2)):hM(st,F,k,I,E._frequencies,uM,M,A),s.current=requestAnimationFrame(U)};return s.current=requestAnimationFrame(U),()=>{cancelAnimationFrame(s.current),et.disconnect()}},[t,g,M,_,A,E]);const O=Math.max(...on.map(Y=>D[Y.name]||0),1e-6),at=g===-1?"Avg":`Ch ${g+1}`,H=((q=on.find(Y=>Y.name===B.band))==null?void 0:q.color)||"#8b949e";return L.jsxs("div",{className:"spectral-panel",children:[L.jsxs("div",{className:"spectral-toolbar",children:[L.jsxs("span",{className:"spectral-title",children:["Spectral"," ",L.jsx("small",{style:{color:"var(--text-dim)",fontWeight:400},children:at})]}),L.jsxs("div",{className:"spectral-channels",children:[L.jsx("button",{className:`sp-ch${g===-1?" active":""}`,onClick:()=>b(-1),children:"Avg"}),Array.from({length:tn},(Y,st)=>L.jsx("button",{className:`sp-ch${g===st?" active":""}`,onClick:()=>b(st),children:st+1},st))]}),L.jsxs("span",{className:"sp-dominant",children:[L.jsx("strong",{style:{color:H},children:B.band||"—"})," ",B.freq>0&&L.jsxs("small",{children:[B.freq.toFixed(1)," Hz"]})]}),L.jsxs("div",{className:"spectral-ctrls",children:[L.jsx("button",{className:`btn${M?" active":""}`,onClick:()=>R(Y=>!Y),children:M?"Log":"Lin"}),L.jsx("button",{className:`btn${_?" active":""}`,onClick:()=>v(Y=>!Y),children:_?"▶":"⏸"})]})]}),L.jsxs("div",{className:"spectral-canvas-wrap",children:[L.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}}),_&&L.jsx("div",{className:"spectral-paused",children:"PAUSED"})]}),L.jsx("div",{className:"spectral-bands",children:on.map(Y=>{const st=D[Y.name]||0,et=O>0?st/O*100:0,U=A===Y.name;return L.jsxs("div",{className:`sp-band${U?" selected":""}`,onClick:()=>N(U?null:Y.name),children:[L.jsx("span",{className:"sp-band-dot",style:{background:Y.color}}),L.jsx("span",{className:"sp-band-name",style:{color:Y.color},children:Y.label}),L.jsx("div",{className:"sp-band-track",children:L.jsx("div",{className:"sp-band-fill",style:{width:`${et}%`,background:Y.color}})}),L.jsx("span",{className:"sp-band-val",children:st<.01?st.toExponential(1):st.toFixed(2)})]},Y.name)})})]})}),mM=rt.memo(function(){const[t,i]=rt.useState(!1),[s,l]=rt.useState(0),[c,d]=rt.useState(0),[p,m]=rt.useState(0),h=rt.useRef(0),x=rt.useRef(performance.now()),S=rt.useRef(0);return rt.useEffect(()=>{const g=b=>{(b.key==="p"||b.key==="P")&&i(M=>!M)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[]),rt.useEffect(()=>{if(!t)return;const g=()=>{h.current++;const b=performance.now(),M=b-x.current;if(M>=1e3){l(Math.round(h.current*(1e3/M))),d(Math.round(M/h.current*100)/100);const R=performance.memory;R&&m(Math.round(R.usedJSHeapSize/1048576)),h.current=0,x.current=b}S.current=requestAnimationFrame(g)};return S.current=requestAnimationFrame(g),()=>cancelAnimationFrame(S.current)},[t]),t?L.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.8)",color:"#0f0",fontFamily:"monospace",fontSize:"12px",padding:"8px 12px",borderRadius:"4px",zIndex:1e4,border:"1px solid #0f0",userSelect:"none"},children:[L.jsxs("div",{children:["FPS: ",s]}),L.jsxs("div",{children:["Frame: ",c,"ms"]}),L.jsxs("div",{children:["Memory: ",p,"MB"]}),L.jsx("div",{style:{marginTop:"4px",fontSize:"10px",opacity:.7},children:"Press P to toggle"})]}):null});function gM({onSelect:r,onBack:t}){const[i,s]=rt.useState([]),[l,c]=rt.useState(!0);rt.useEffect(()=>{d()},[]);async function d(){try{const x=await(await fetch("/api/recordings")).json();s(x.recordings||[])}catch(h){console.error("Failed to load recordings:",h)}finally{c(!1)}}function p(h){return new Date(h*1e3).toLocaleString()}function m(h){return h<1024?`${h} B`:h<1024*1024?`${(h/1024).toFixed(1)} KB`:`${(h/1024/1024).toFixed(1)} MB`}return L.jsxs("div",{className:"session-list",children:[L.jsxs("header",{className:"session-header",children:[L.jsx("h2",{children:"Saved Sessions"}),L.jsx("button",{className:"btn btn-back",onClick:t,children:"← Back to Live"})]}),l&&L.jsx("div",{className:"list-loading",children:L.jsx("p",{children:"Loading recordings..."})}),!l&&i.length===0&&L.jsx("div",{className:"list-empty",children:L.jsx("p",{children:"No recordings yet. Record a session on the Live tab."})}),!l&&i.length>0&&L.jsx("div",{className:"list-container",children:L.jsxs("table",{className:"recordings-table",children:[L.jsx("thead",{children:L.jsxs("tr",{children:[L.jsx("th",{children:"Filename"}),L.jsx("th",{children:"Size"}),L.jsx("th",{children:"Date & Time"}),L.jsx("th",{children:"Action"})]})}),L.jsx("tbody",{children:i.map(h=>L.jsxs("tr",{children:[L.jsx("td",{className:"filename",children:h.filename}),L.jsx("td",{className:"size",children:m(h.size)}),L.jsx("td",{className:"mtime",children:p(h.mtime)}),L.jsx("td",{className:"action",children:L.jsx("button",{className:"btn btn-open",onClick:()=>r(h.filename),children:"Open"})})]},h.filename))})]})}),L.jsx("style",{children:`
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
      `})]})}const _M="rgba(48,54,61,0.4)",vM="rgba(88,166,255,0.12)",xM="rgba(88,166,255,0.6)",SM="#0d1117",yM=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],MM=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"}];function bM({filename:r,onBack:t}){const[i,s]=rt.useState(!0),[l,c]=rt.useState(null),[d,p]=rt.useState(!1),[m,h]=rt.useState(0),[x,S]=rt.useState(1),[g,b]=rt.useState(100),[M,R]=rt.useState(4),[_,v]=rt.useState([]),[A,N]=rt.useState(""),[D,G]=rt.useState(!1),B=rt.useRef(null),z=rt.useRef(0),E=rt.useRef(0),O=rt.useRef(null),at=rt.useRef(0),H=rt.useRef(0),q=rt.useRef(!1),Y=rt.useRef(1),st=rt.useRef(100),et=rt.useRef(4),U=rt.useRef(window.devicePixelRatio||1),F=rt.useRef({w:0,h:0});q.current=d,Y.current=x,st.current=g,et.current=M,E.current=m;const k=z.current,nt=k/Un,vt=m/Un;rt.useEffect(()=>{let V=!1;async function ft(){s(!0),c(null);try{const Mt=await fetch(`/api/recordings/data/${encodeURIComponent(r)}`);if(!Mt.ok)throw new Error(`HTTP ${Mt.status}`);const Dt=await Mt.json();if(Dt.error)throw new Error(Dt.error);const kt=(Dt.data||[]).slice(1),Ot=kt.length;if(Ot===0)throw new Error("Empty recording");const Ft=Array.from({length:tn},()=>new Float32Array(Ot));for(let te=0;te<Ot;te++){const Gt=kt[te].split(",");for(let ue=0;ue<tn;ue++)Ft[ue][te]=parseFloat(Gt[ue+1])||0}V||(B.current=Ft,z.current=Ot,h(0),s(!1))}catch(Mt){V||(c(Mt instanceof Error?Mt.message:String(Mt)),s(!1))}}return ft(),()=>{V=!0}},[r]),rt.useEffect(()=>{fetch(`/api/recordings/annotations/${encodeURIComponent(r)}`).then(V=>V.json()).then(V=>v(V.annotations||[])).catch(()=>{})},[r]),rt.useEffect(()=>{const V=O.current;if(!V||i||l)return;const ft=V.getContext("2d",{alpha:!1}),Mt=Dt=>{if(q.current&&H.current>0){const W=(Dt-H.current)/1e3*Un*Y.current;let Te=E.current+W;Te>=z.current&&(Te=z.current-1,p(!1)),E.current=Te,h(Te)}H.current=Dt;const Pt=U.current,kt=V.getBoundingClientRect(),Ot=kt.width,Ft=kt.height,te=Math.round(Ot*Pt),Gt=Math.round(Ft*Pt);(F.current.w!==te||F.current.h!==Gt)&&(F.current={w:te,h:Gt},V.width=te,V.height=Gt,ft.setTransform(Pt,0,0,Pt,0,0)),I(ft,Ot,Ft),at.current=requestAnimationFrame(Mt)};return H.current=0,at.current=requestAnimationFrame(Mt),()=>cancelAnimationFrame(at.current)},[i,l]);function I(V,ft,Mt){const Dt=B.current;if(!Dt)return;V.fillStyle=SM,V.fillRect(0,0,ft,Mt);const Pt=z.current,kt=E.current,Ot=et.current*Un,Ft=st.current,te=Math.floor(Ot/2);let Gt=Math.floor(kt)-te,ue=Gt+Ot;Gt<0&&(Gt=0,ue=Ot),ue>Pt&&(ue=Pt,Gt=Math.max(0,Pt-Ot));const W=Mt/tn;for(let P=0;P<tn;P++){const T=P*W,tt=T+W/2,yt=W/2;P>0&&(V.strokeStyle=_M,V.lineWidth=.5,V.beginPath(),V.moveTo(0,T),V.lineTo(ft,T),V.stroke()),V.strokeStyle=vM,V.lineWidth=.5,V.beginPath(),V.moveTo(0,tt),V.lineTo(ft,tt),V.stroke(),V.fillStyle="rgba(230,237,243,0.4)",V.font="10px monospace",V.fillText(`Ch ${P+1}`,4,T+12);const At=Dt[P],mt=ue-Gt;if(mt<2)continue;const Yt=mt>2e3?Math.floor(mt/2e3):1,Ut=ft/(mt-1),ee=yt*.85/Ft;V.strokeStyle=Mp[P],V.lineWidth=1.2,V.lineJoin="round",V.beginPath();for(let ne=0;ne<mt;ne+=Yt){const Ct=ne*Ut,Rt=tt-At[Gt+ne]*ee;ne===0?V.moveTo(Ct,Rt):V.lineTo(Ct,Rt)}V.stroke()}const Te=Math.floor(kt)>=Gt&&Math.floor(kt)<=ue?(Math.floor(kt)-Gt)/(ue-Gt)*ft:ft/2;V.strokeStyle=xM,V.lineWidth=1.5,V.setLineDash([4,3]),V.beginPath(),V.moveTo(Te,0),V.lineTo(Te,Mt),V.stroke(),V.setLineDash([]),V.fillStyle="rgba(230,237,243,0.3)",V.font="10px monospace";const me=Gt/Un,Ae=ue/Un,Wt=Math.min(10,Math.floor(ft/80));for(let P=0;P<=Wt;P++){const T=me+(Ae-me)*(P/Wt),tt=P/Wt*ft;V.fillText(Z(T),tt+2,Mt-4)}}const X=rt.useCallback(async V=>{try{await fetch(`/api/recordings/annotations/${encodeURIComponent(r)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({annotations:V})})}catch{}},[r]);function $(){if(!A.trim())return;const V=Math.floor(m)/Un,ft={id:Date.now(),frame:Math.floor(m),time:V,text:A,timestamp:new Date().toISOString()},Mt=[..._,ft];v(Mt),X(Mt),N(""),G(!1)}function pt(V){const ft=_.filter(Mt=>Mt.id!==V);v(ft),X(ft)}function St(V){h(V.frame),E.current=V.frame,p(!1)}function Z(V){const ft=Math.floor(V/60),Mt=Math.floor(V%60),Dt=Math.floor(V%1*100);return`${String(ft).padStart(2,"0")}:${String(Mt).padStart(2,"0")}.${String(Dt).padStart(2,"0")}`}return i?L.jsxs("div",{className:"sv-root sv-center",children:[L.jsx("p",{children:"Loading recording..."}),L.jsx("style",{children:Bd})]}):l?L.jsxs("div",{className:"sv-root sv-center",children:[L.jsxs("p",{children:["Error: ",l]}),L.jsx("button",{className:"sv-btn",onClick:t,children:"Back"}),L.jsx("style",{children:Bd})]}):L.jsxs("div",{className:"sv-root",children:[L.jsxs("header",{className:"sv-header",children:[L.jsxs("div",{className:"sv-title",children:[L.jsx("button",{className:"sv-btn",onClick:t,children:"← Back"}),L.jsx("h2",{children:r}),L.jsxs("span",{className:"sv-meta",children:[k.toLocaleString()," frames · ",Z(nt)]})]}),L.jsxs("div",{className:"sv-controls",children:[L.jsx("button",{className:`sv-btn${d?" active":""}`,onClick:()=>{d||(H.current=0),p(!d)},children:d?"⏸ Pause":"▶ Play"}),L.jsx("button",{className:"sv-btn",onClick:()=>{h(0),E.current=0,p(!1)},children:"⏮ Rewind"}),L.jsxs("select",{value:x,onChange:V=>S(parseFloat(V.target.value)),className:"sv-select",children:[L.jsx("option",{value:.25,children:"0.25x"}),L.jsx("option",{value:.5,children:"0.5x"}),L.jsx("option",{value:1,children:"1x"}),L.jsx("option",{value:1.5,children:"1.5x"}),L.jsx("option",{value:2,children:"2x"}),L.jsx("option",{value:4,children:"4x"})]}),L.jsx("div",{className:"sv-sep"}),L.jsx("label",{className:"sv-label",children:"Window"}),L.jsx("select",{value:M,onChange:V=>R(parseInt(V.target.value)),className:"sv-select",children:MM.map(V=>L.jsx("option",{value:V.value,children:V.label},V.value))}),L.jsx("label",{className:"sv-label",children:"Scale"}),L.jsx("select",{value:g,onChange:V=>b(parseInt(V.target.value)),className:"sv-select",children:yM.map(V=>L.jsx("option",{value:V.value,children:V.label},V.value))})]})]}),L.jsxs("div",{className:"sv-timeline",children:[L.jsx("span",{className:"sv-time",children:Z(vt)}),L.jsx("input",{type:"range",min:"0",max:k-1,value:Math.floor(m),onChange:V=>{const ft=parseInt(V.target.value);h(ft),E.current=ft,p(!1),H.current=0},className:"sv-slider"}),L.jsx("span",{className:"sv-time",children:Z(nt)})]}),L.jsxs("div",{className:"sv-content",children:[L.jsx("div",{className:"sv-canvas-wrap",children:L.jsx("canvas",{ref:O,style:{display:"block",width:"100%",height:"100%"}})}),L.jsxs("div",{className:"sv-annotations",children:[L.jsxs("div",{className:"sv-anno-header",children:[L.jsx("h3",{children:"Annotations"}),L.jsx("button",{className:"sv-btn sv-btn-sm",onClick:()=>G(!D),children:D?"Cancel":"+ Add"})]}),D&&L.jsxs("div",{className:"sv-anno-form",children:[L.jsx("textarea",{value:A,onChange:V=>N(V.target.value),placeholder:"Annotation at current position...",onKeyDown:V=>{V.key==="Enter"&&V.ctrlKey&&$()}}),L.jsx("button",{className:"sv-btn sv-btn-primary",onClick:$,children:"Add"})]}),L.jsx("div",{className:"sv-anno-list",children:_.length===0?L.jsx("p",{className:"sv-anno-empty",children:"No annotations"}):_.map(V=>L.jsxs("div",{className:"sv-anno-item",onClick:()=>St(V),children:[L.jsx("span",{className:"sv-anno-time",children:Z(V.time)}),L.jsx("span",{className:"sv-anno-text",children:V.text}),L.jsx("button",{className:"sv-anno-del",onClick:ft=>{ft.stopPropagation(),pt(V.id)},children:"✕"})]},V.id))})]})]}),L.jsx("style",{children:Bd})]})}const Bd=`
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
 */const bp="183",EM=0,F_=1,TM=2,ou=1,AM=2,ll=3,fs=0,Kn=1,Xi=2,Ea=0,jr=1,I_=2,B_=3,z_=4,RM=5,Bs=100,CM=101,wM=102,DM=103,NM=104,UM=200,LM=201,OM=202,PM=203,Th=204,Ah=205,FM=206,IM=207,BM=208,zM=209,HM=210,GM=211,VM=212,kM=213,XM=214,Rh=0,Ch=1,wh=2,Yr=3,Dh=4,Nh=5,Uh=6,Lh=7,qv=0,jM=1,WM=2,Yi=0,Yv=1,Zv=2,Kv=3,Ep=4,Qv=5,Jv=6,$v=7,tx=300,Vs=301,Zr=302,zd=303,Hd=304,bu=306,Oh=1e3,ba=1001,Ph=1002,Rn=1003,qM=1004,Nc=1005,On=1006,Gd=1007,Hs=1008,ci=1009,ex=1010,nx=1011,ul=1012,Tp=1013,Ki=1014,Wi=1015,Aa=1016,Ap=1017,Rp=1018,fl=1020,ix=35902,ax=35899,sx=1021,rx=1022,Oi=1023,Ra=1026,Gs=1027,ox=1028,Cp=1029,Kr=1030,wp=1031,Dp=1033,lu=33776,cu=33777,uu=33778,fu=33779,Fh=35840,Ih=35841,Bh=35842,zh=35843,Hh=36196,Gh=37492,Vh=37496,kh=37488,Xh=37489,jh=37490,Wh=37491,qh=37808,Yh=37809,Zh=37810,Kh=37811,Qh=37812,Jh=37813,$h=37814,tp=37815,ep=37816,np=37817,ip=37818,ap=37819,sp=37820,rp=37821,op=36492,lp=36494,cp=36495,up=36283,fp=36284,dp=36285,hp=36286,YM=3200,ZM=0,KM=1,ls="",Si="srgb",Qr="srgb-linear",hu="linear",Ve="srgb",Ar=7680,H_=519,QM=512,JM=513,$M=514,Np=515,tb=516,eb=517,Up=518,nb=519,pp=35044,G_="300 es",qi=2e3,dl=2001;function ib(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function pu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ab(){const r=pu("canvas");return r.style.display="block",r}const V_={};function mu(...r){const t="THREE."+r.shift();console.log(t,...r)}function lx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function le(...r){r=lx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ue(...r){r=lx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function gu(...r){const t=r.join(" ");t in V_||(V_[t]=!0,le(...r))}function sb(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const rb={[Rh]:Ch,[wh]:Uh,[Dh]:Lh,[Yr]:Nh,[Ch]:Rh,[Uh]:wh,[Lh]:Dh,[Nh]:Yr};class $r{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vd=Math.PI/180,mp=180/Math.PI;function us(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function De(r,t,i){return Math.max(t,Math.min(i,r))}function ob(r,t){return(r%t+t)%t}function kd(r,t,i){return(1-i)*r+i*t}function ji(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function We(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(t=0,i=0){Ee.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class to{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],x=s[l+2],S=s[l+3],g=c[d+0],b=c[d+1],M=c[d+2],R=c[d+3];if(S!==R||m!==g||h!==b||x!==M){let _=m*g+h*b+x*M+S*R;_<0&&(g=-g,b=-b,M=-M,R=-R,_=-_);let v=1-p;if(_<.9995){const A=Math.acos(_),N=Math.sin(A);v=Math.sin(v*A)/N,p=Math.sin(p*A)/N,m=m*v+g*p,h=h*v+b*p,x=x*v+M*p,S=S*v+R*p}else{m=m*v+g*p,h=h*v+b*p,x=x*v+M*p,S=S*v+R*p;const A=1/Math.sqrt(m*m+h*h+x*x+S*S);m*=A,h*=A,x*=A,S*=A}}t[i]=m,t[i+1]=h,t[i+2]=x,t[i+3]=S}static multiplyQuaternionsFlat(t,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],x=s[l+3],S=c[d],g=c[d+1],b=c[d+2],M=c[d+3];return t[i]=p*M+x*S+m*b-h*g,t[i+1]=m*M+x*g+h*S-p*b,t[i+2]=h*M+x*b+p*g-m*S,t[i+3]=x*M-p*S-m*g-h*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(s/2),x=p(l/2),S=p(c/2),g=m(s/2),b=m(l/2),M=m(c/2);switch(d){case"XYZ":this._x=g*x*S+h*b*M,this._y=h*b*S-g*x*M,this._z=h*x*M+g*b*S,this._w=h*x*S-g*b*M;break;case"YXZ":this._x=g*x*S+h*b*M,this._y=h*b*S-g*x*M,this._z=h*x*M-g*b*S,this._w=h*x*S+g*b*M;break;case"ZXY":this._x=g*x*S-h*b*M,this._y=h*b*S+g*x*M,this._z=h*x*M+g*b*S,this._w=h*x*S-g*b*M;break;case"ZYX":this._x=g*x*S-h*b*M,this._y=h*b*S+g*x*M,this._z=h*x*M-g*b*S,this._w=h*x*S+g*b*M;break;case"YZX":this._x=g*x*S+h*b*M,this._y=h*b*S+g*x*M,this._z=h*x*M-g*b*S,this._w=h*x*S-g*b*M;break;case"XZY":this._x=g*x*S-h*b*M,this._y=h*b*S-g*x*M,this._z=h*x*M+g*b*S,this._w=h*x*S+g*b*M;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],x=i[6],S=i[10],g=s+p+S;if(g>0){const b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(x-m)*b,this._y=(c-h)*b,this._z=(d-l)*b}else if(s>p&&s>S){const b=2*Math.sqrt(1+s-p-S);this._w=(x-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(c+h)/b}else if(p>S){const b=2*Math.sqrt(1+p-s-S);this._w=(c-h)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+x)/b}else{const b=2*Math.sqrt(1+S-s-p);this._w=(d-l)/b,this._x=(c+h)/b,this._y=(m+x)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=s*x+d*p+l*h-c*m,this._y=l*x+d*m+c*p-s*h,this._z=c*x+d*h+s*m-l*p,this._w=d*x-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,d=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(t=0,i=0,s=0){lt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(k_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(k_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*s),x=2*(p*i-c*l),S=2*(c*s-d*i);return this.x=i+m*h+d*S-p*x,this.y=s+m*x+p*h-c*S,this.z=l+m*S+c*x-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Xd.copy(this).projectOnVector(t),this.sub(Xd)}reflect(t){return this.sub(Xd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xd=new lt,k_=new to;class xe{constructor(t,i,s,l,c,d,p,m,h){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h)}set(t,i,s,l,c,d,p,m,h){const x=this.elements;return x[0]=t,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],x=s[4],S=s[7],g=s[2],b=s[5],M=s[8],R=l[0],_=l[3],v=l[6],A=l[1],N=l[4],D=l[7],G=l[2],B=l[5],z=l[8];return c[0]=d*R+p*A+m*G,c[3]=d*_+p*N+m*B,c[6]=d*v+p*D+m*z,c[1]=h*R+x*A+S*G,c[4]=h*_+x*N+S*B,c[7]=h*v+x*D+S*z,c[2]=g*R+b*A+M*G,c[5]=g*_+b*N+M*B,c[8]=g*v+b*D+M*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8];return i*d*x-i*p*h-s*c*x+s*p*m+l*c*h-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8],S=x*d-p*h,g=p*m-x*c,b=h*c-d*m,M=i*S+s*g+l*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/M;return t[0]=S*R,t[1]=(l*h-x*s)*R,t[2]=(p*s-l*d)*R,t[3]=g*R,t[4]=(x*i-l*m)*R,t[5]=(l*c-p*i)*R,t[6]=b*R,t[7]=(s*m-h*i)*R,t[8]=(d*i-s*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(jd.makeScale(t,i)),this}rotate(t){return this.premultiply(jd.makeRotation(-t)),this}translate(t,i){return this.premultiply(jd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const jd=new xe,X_=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),j_=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lb(){const r={enabled:!0,workingColorSpace:Qr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ve&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ve&&(l.r=Wr(l.r),l.g=Wr(l.g),l.b=Wr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ls?hu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return gu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return gu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Qr]:{primaries:t,whitePoint:s,transfer:hu,toXYZ:X_,fromXYZ:j_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:X_,fromXYZ:j_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const Le=lb();function Ta(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Rr;class cb{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Rr===void 0&&(Rr=pu("canvas")),Rr.width=t.width,Rr.height=t.height;const l=Rr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Rr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=pu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ta(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ta(i[s]/255)*255):i[s]=Ta(i[s]);return{data:i,width:t.width,height:t.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ub=0;class Lp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Wd(l[d].image)):c.push(Wd(l[d]))}else c=Wd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Wd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?cb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let fb=0;const qd=new lt;class Pn extends $r{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=ba,l=ba,c=On,d=Hs,p=Oi,m=ci,h=Pn.DEFAULT_ANISOTROPY,x=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=us(),this.name="",this.source=new Lp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qd).x}get height(){return this.source.getSize(qd).y}get depth(){return this.source.getSize(qd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oh:t.x=t.x-Math.floor(t.x);break;case ba:t.x=t.x<0?0:1;break;case Ph:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oh:t.y=t.y-Math.floor(t.y);break;case ba:t.y=t.y<0?0:1;break;case Ph:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=tx;Pn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,h=m[0],x=m[4],S=m[8],g=m[1],b=m[5],M=m[9],R=m[2],_=m[6],v=m[10];if(Math.abs(x-g)<.01&&Math.abs(S-R)<.01&&Math.abs(M-_)<.01){if(Math.abs(x+g)<.1&&Math.abs(S+R)<.1&&Math.abs(M+_)<.1&&Math.abs(h+b+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(h+1)/2,D=(b+1)/2,G=(v+1)/2,B=(x+g)/4,z=(S+R)/4,E=(M+_)/4;return N>D&&N>G?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=B/s,c=z/s):D>G?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=B/l,c=E/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=z/c,l=E/c),this.set(s,l,c,i),this}let A=Math.sqrt((_-M)*(_-M)+(S-R)*(S-R)+(g-x)*(g-x));return Math.abs(A)<.001&&(A=1),this.x=(_-M)/A,this.y=(S-R)/A,this.z=(g-x)/A,this.w=Math.acos((h+b+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this.w=De(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this.w=De(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class db extends $r{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Pn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Lp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends db{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class cx extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hb extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ke{constructor(t,i,s,l,c,d,p,m,h,x,S,g,b,M,R,_){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h,x,S,g,b,M,R,_)}set(t,i,s,l,c,d,p,m,h,x,S,g,b,M,R,_){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=d,v[9]=p,v[13]=m,v[2]=h,v[6]=x,v[10]=S,v[14]=g,v[3]=b,v[7]=M,v[11]=R,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Cr.setFromMatrixColumn(t,0).length(),c=1/Cr.setFromMatrixColumn(t,1).length(),d=1/Cr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),x=Math.cos(c),S=Math.sin(c);if(t.order==="XYZ"){const g=d*x,b=d*S,M=p*x,R=p*S;i[0]=m*x,i[4]=-m*S,i[8]=h,i[1]=b+M*h,i[5]=g-R*h,i[9]=-p*m,i[2]=R-g*h,i[6]=M+b*h,i[10]=d*m}else if(t.order==="YXZ"){const g=m*x,b=m*S,M=h*x,R=h*S;i[0]=g+R*p,i[4]=M*p-b,i[8]=d*h,i[1]=d*S,i[5]=d*x,i[9]=-p,i[2]=b*p-M,i[6]=R+g*p,i[10]=d*m}else if(t.order==="ZXY"){const g=m*x,b=m*S,M=h*x,R=h*S;i[0]=g-R*p,i[4]=-d*S,i[8]=M+b*p,i[1]=b+M*p,i[5]=d*x,i[9]=R-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const g=d*x,b=d*S,M=p*x,R=p*S;i[0]=m*x,i[4]=M*h-b,i[8]=g*h+R,i[1]=m*S,i[5]=R*h+g,i[9]=b*h-M,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,b=d*h,M=p*m,R=p*h;i[0]=m*x,i[4]=R-g*S,i[8]=M*S+b,i[1]=S,i[5]=d*x,i[9]=-p*x,i[2]=-h*x,i[6]=b*S+M,i[10]=g-R*S}else if(t.order==="XZY"){const g=d*m,b=d*h,M=p*m,R=p*h;i[0]=m*x,i[4]=-S,i[8]=h*x,i[1]=g*S+R,i[5]=d*x,i[9]=b*S-M,i[2]=M*S-b,i[6]=p*x,i[10]=R*S+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pb,t,mb)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),es.crossVectors(s,ri),es.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),es.crossVectors(s,ri)),es.normalize(),Uc.crossVectors(ri,es),l[0]=es.x,l[4]=Uc.x,l[8]=ri.x,l[1]=es.y,l[5]=Uc.y,l[9]=ri.y,l[2]=es.z,l[6]=Uc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],x=s[1],S=s[5],g=s[9],b=s[13],M=s[2],R=s[6],_=s[10],v=s[14],A=s[3],N=s[7],D=s[11],G=s[15],B=l[0],z=l[4],E=l[8],O=l[12],at=l[1],H=l[5],q=l[9],Y=l[13],st=l[2],et=l[6],U=l[10],F=l[14],k=l[3],nt=l[7],vt=l[11],I=l[15];return c[0]=d*B+p*at+m*st+h*k,c[4]=d*z+p*H+m*et+h*nt,c[8]=d*E+p*q+m*U+h*vt,c[12]=d*O+p*Y+m*F+h*I,c[1]=x*B+S*at+g*st+b*k,c[5]=x*z+S*H+g*et+b*nt,c[9]=x*E+S*q+g*U+b*vt,c[13]=x*O+S*Y+g*F+b*I,c[2]=M*B+R*at+_*st+v*k,c[6]=M*z+R*H+_*et+v*nt,c[10]=M*E+R*q+_*U+v*vt,c[14]=M*O+R*Y+_*F+v*I,c[3]=A*B+N*at+D*st+G*k,c[7]=A*z+N*H+D*et+G*nt,c[11]=A*E+N*q+D*U+G*vt,c[15]=A*O+N*Y+D*F+G*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],p=t[5],m=t[9],h=t[13],x=t[2],S=t[6],g=t[10],b=t[14],M=t[3],R=t[7],_=t[11],v=t[15],A=m*b-h*g,N=p*b-h*S,D=p*g-m*S,G=d*b-h*x,B=d*g-m*x,z=d*S-p*x;return i*(R*A-_*N+v*D)-s*(M*A-_*G+v*B)+l*(M*N-R*G+v*z)-c*(M*D-R*B+_*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8],S=t[9],g=t[10],b=t[11],M=t[12],R=t[13],_=t[14],v=t[15],A=i*p-s*d,N=i*m-l*d,D=i*h-c*d,G=s*m-l*p,B=s*h-c*p,z=l*h-c*m,E=x*R-S*M,O=x*_-g*M,at=x*v-b*M,H=S*_-g*R,q=S*v-b*R,Y=g*v-b*_,st=A*Y-N*q+D*H+G*at-B*O+z*E;if(st===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const et=1/st;return t[0]=(p*Y-m*q+h*H)*et,t[1]=(l*q-s*Y-c*H)*et,t[2]=(R*z-_*B+v*G)*et,t[3]=(g*B-S*z-b*G)*et,t[4]=(m*at-d*Y-h*O)*et,t[5]=(i*Y-l*at+c*O)*et,t[6]=(_*D-M*z-v*N)*et,t[7]=(x*z-g*D+b*N)*et,t[8]=(d*q-p*at+h*E)*et,t[9]=(s*at-i*q-c*E)*et,t[10]=(M*B-R*D+v*A)*et,t[11]=(S*D-x*B-b*A)*et,t[12]=(p*O-d*H-m*E)*et,t[13]=(i*H-s*O+l*E)*et,t[14]=(R*N-M*G-_*A)*et,t[15]=(x*G-S*N+g*A)*et,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,p=t.y,m=t.z,h=c*d,x=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,x*p+s,x*m-l*d,0,h*m-l*p,x*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,x=d+d,S=p+p,g=c*h,b=c*x,M=c*S,R=d*x,_=d*S,v=p*S,A=m*h,N=m*x,D=m*S,G=s.x,B=s.y,z=s.z;return l[0]=(1-(R+v))*G,l[1]=(b+D)*G,l[2]=(M-N)*G,l[3]=0,l[4]=(b-D)*B,l[5]=(1-(g+v))*B,l[6]=(_+A)*B,l[7]=0,l[8]=(M+N)*z,l[9]=(_-A)*z,l[10]=(1-(g+R))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Cr.set(l[0],l[1],l[2]).length();const p=Cr.set(l[4],l[5],l[6]).length(),m=Cr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ni.copy(this);const h=1/d,x=1/p,S=1/m;return Ni.elements[0]*=h,Ni.elements[1]*=h,Ni.elements[2]*=h,Ni.elements[4]*=x,Ni.elements[5]*=x,Ni.elements[6]*=x,Ni.elements[8]*=S,Ni.elements[9]*=S,Ni.elements[10]*=S,i.setFromRotationMatrix(Ni),s.x=d,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,d,p=qi,m=!1){const h=this.elements,x=2*c/(i-t),S=2*c/(s-l),g=(i+t)/(i-t),b=(s+l)/(s-l);let M,R;if(m)M=c/(d-c),R=d*c/(d-c);else if(p===qi)M=-(d+c)/(d-c),R=-2*d*c/(d-c);else if(p===dl)M=-d/(d-c),R=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=S,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,s,l,c,d,p=qi,m=!1){const h=this.elements,x=2/(i-t),S=2/(s-l),g=-(i+t)/(i-t),b=-(s+l)/(s-l);let M,R;if(m)M=1/(d-c),R=d/(d-c);else if(p===qi)M=-2/(d-c),R=-(d+c)/(d-c);else if(p===dl)M=-1/(d-c),R=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=S,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=M,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Cr=new lt,Ni=new Ke,pb=new lt(0,0,0),mb=new lt(1,1,1),es=new lt,Uc=new lt,ri=new lt,W_=new Ke,q_=new to;class Ca{constructor(t=0,i=0,s=0,l=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],x=l[9],S=l[2],g=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(De(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-De(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(De(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,b),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-De(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(De(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,b),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return W_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(W_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return q_.setFromEuler(this),this.setFromQuaternion(q_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class ux{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gb=0;const Y_=new lt,wr=new to,va=new Ke,Lc=new lt,Ko=new lt,_b=new lt,vb=new to,Z_=new lt(1,0,0),K_=new lt(0,1,0),Q_=new lt(0,0,1),J_={type:"added"},xb={type:"removed"},Dr={type:"childadded",child:null},Yd={type:"childremoved",child:null};class Cn extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const t=new lt,i=new Ca,s=new to,l=new lt(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new xe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ux,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(Z_,t)}rotateY(t){return this.rotateOnAxis(K_,t)}rotateZ(t){return this.rotateOnAxis(Q_,t)}translateOnAxis(t,i){return Y_.copy(t).applyQuaternion(this.quaternion),this.position.add(Y_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Z_,t)}translateY(t){return this.translateOnAxis(K_,t)}translateZ(t){return this.translateOnAxis(Q_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Lc.copy(t):Lc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(Ko,Lc,this.up):va.lookAt(Lc,Ko,this.up),this.quaternion.setFromRotationMatrix(va),l&&(va.extractRotation(l.matrixWorld),wr.setFromRotationMatrix(va),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(J_),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(xb),Yd.child=t,this.dispatchEvent(Yd),Yd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),va.multiply(t.parent.matrixWorld)),t.applyMatrix4(va),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(J_),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,t,_b),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,vb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const S=m[h];c(t.shapes,S)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),x=d(t.images),S=d(t.shapes),g=d(t.skeletons),b=d(t.animations),M=d(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),x.length>0&&(s.images=x),S.length>0&&(s.shapes=S),g.length>0&&(s.skeletons=g),b.length>0&&(s.animations=b),M.length>0&&(s.nodes=M)}return s.object=l,s;function d(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new lt(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Oc extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sb={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const R of t.hand.values()){const _=i.getJointPose(R,s),v=this._getHandJoint(h,R);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const x=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],g=x.position.distanceTo(S.position),b=.02,M=.005;h.inputState.pinching&&g>b+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=b-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Sb)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Oc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function Kd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ye{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=ob(t,1),i=De(i,0,1),s=De(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Kd(d,c,t+1/3),this.g=Kd(d,c,t),this.b=Kd(d,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&le("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:le("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const s=fx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ta(t.r),this.g=Ta(t.g),this.b=Ta(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return Le.workingToColorSpace(Nn.copy(this),t),Math.round(De(Nn.r*255,0,255))*65536+Math.round(De(Nn.g*255,0,255))*256+Math.round(De(Nn.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const x=(p+d)/2;if(p===d)m=0,h=0;else{const S=d-p;switch(h=x<=.5?S/(d+p):S/(2-d-p),d){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return t.h=m,t.s=h,t.l=x,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=Si){Le.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,s=Nn.g,l=Nn.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+i,ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ns),t.getHSL(Pc);const s=kd(ns.h,Pc.h,i),l=kd(ns.s,Pc.s,i),c=kd(ns.l,Pc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new ye;ye.NAMES=fx;class Op{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(t),this.density=i}clone(){return new Op(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yb extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ca,this.environmentIntensity=1,this.environmentRotation=new Ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ui=new lt,xa=new lt,Qd=new lt,Sa=new lt,Nr=new lt,Ur=new lt,$_=new lt,Jd=new lt,$d=new lt,th=new lt,eh=new an,nh=new an,ih=new an;class yi{constructor(t=new lt,i=new lt,s=new lt){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ui.subVectors(t,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ui.subVectors(l,i),xa.subVectors(s,i),Qd.subVectors(t,i);const d=Ui.dot(Ui),p=Ui.dot(xa),m=Ui.dot(Qd),h=xa.dot(xa),x=xa.dot(Qd),S=d*h-p*p;if(S===0)return c.set(0,0,0),null;const g=1/S,b=(h*m-p*x)*g,M=(d*x-p*m)*g;return c.set(1-b-M,M,b)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(t,i,s,l,c,d,p,m){return this.getBarycoord(t,i,s,l,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Sa.x),m.addScaledVector(d,Sa.y),m.addScaledVector(p,Sa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return eh.setScalar(0),nh.setScalar(0),ih.setScalar(0),eh.fromBufferAttribute(t,i),nh.fromBufferAttribute(t,s),ih.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(eh,c.x),d.addScaledVector(nh,c.y),d.addScaledVector(ih,c.z),d}static isFrontFacing(t,i,s,l){return Ui.subVectors(s,i),xa.subVectors(t,i),Ui.cross(xa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Ui.cross(xa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,p;Nr.subVectors(l,s),Ur.subVectors(c,s),Jd.subVectors(t,s);const m=Nr.dot(Jd),h=Ur.dot(Jd);if(m<=0&&h<=0)return i.copy(s);$d.subVectors(t,l);const x=Nr.dot($d),S=Ur.dot($d);if(x>=0&&S<=x)return i.copy(l);const g=m*S-x*h;if(g<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(s).addScaledVector(Nr,d);th.subVectors(t,c);const b=Nr.dot(th),M=Ur.dot(th);if(M>=0&&b<=M)return i.copy(c);const R=b*h-m*M;if(R<=0&&h>=0&&M<=0)return p=h/(h-M),i.copy(s).addScaledVector(Ur,p);const _=x*M-b*S;if(_<=0&&S-x>=0&&b-M>=0)return $_.subVectors(c,l),p=(S-x)/(S-x+(b-M)),i.copy(l).addScaledVector($_,p);const v=1/(_+R+g);return d=R*v,p=g*v,i.copy(s).addScaledVector(Nr,d).addScaledVector(Ur,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class pl{constructor(t=new lt(1/0,1/0,1/0),i=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Li.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Li.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Li.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,Li):Li.fromBufferAttribute(c,d),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Fc.copy(s.boundingBox)),Fc.applyMatrix4(t.matrixWorld),this.union(Fc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qo),Ic.subVectors(this.max,Qo),Lr.subVectors(t.a,Qo),Or.subVectors(t.b,Qo),Pr.subVectors(t.c,Qo),is.subVectors(Or,Lr),as.subVectors(Pr,Or),Ns.subVectors(Lr,Pr);let i=[0,-is.z,is.y,0,-as.z,as.y,0,-Ns.z,Ns.y,is.z,0,-is.x,as.z,0,-as.x,Ns.z,0,-Ns.x,-is.y,is.x,0,-as.y,as.x,0,-Ns.y,Ns.x,0];return!ah(i,Lr,Or,Pr,Ic)||(i=[1,0,0,0,1,0,0,0,1],!ah(i,Lr,Or,Pr,Ic))?!1:(Bc.crossVectors(is,as),i=[Bc.x,Bc.y,Bc.z],ah(i,Lr,Or,Pr,Ic))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ya),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ya=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],Li=new lt,Fc=new pl,Lr=new lt,Or=new lt,Pr=new lt,is=new lt,as=new lt,Ns=new lt,Qo=new lt,Ic=new lt,Bc=new lt,Us=new lt;function ah(r,t,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Us.fromArray(r,c);const p=l.x*Math.abs(Us.x)+l.y*Math.abs(Us.y)+l.z*Math.abs(Us.z),m=t.dot(Us),h=i.dot(Us),x=s.dot(Us);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const mn=new lt,zc=new Ee;let Mb=0;class Ln{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=pp,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)zc.fromBufferAttribute(this,i),zc.applyMatrix3(t),this.setXY(i,zc.x,zc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=ji(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=We(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ji(i,this.array)),i}setX(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ji(i,this.array)),i}setY(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ji(i,this.array)),i}setZ(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ji(i,this.array)),i}setW(t,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),s=We(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),s=We(s,this.array),l=We(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=We(i,this.array),s=We(s,this.array),l=We(l,this.array),c=We(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pp&&(t.usage=this.usage),t}}class dx extends Ln{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class hx extends Ln{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ui extends Ln{constructor(t,i,s){super(new Float32Array(t),i,s)}}const bb=new pl,Jo=new lt,sh=new lt;class ml{constructor(t=new lt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):bb.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jo.subVectors(t,this.center);const i=Jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Jo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jo.copy(t.center).add(sh)),this.expandByPoint(Jo.copy(t.center).sub(sh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Eb=0;const xi=new Ke,rh=new Cn,Fr=new lt,oi=new pl,$o=new pl,Mn=new lt;class Fn extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ib(t)?hx:dx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new xe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,s){return xi.makeTranslation(t,i,s),this.applyMatrix4(xi),this}scale(t,i,s){return xi.makeScale(t,i,s),this.applyMatrix4(xi),this}lookAt(t){return rh.lookAt(t),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ui(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ml);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];$o.setFromBufferAttribute(p),this.morphTargetsRelative?(Mn.addVectors(oi.min,$o.min),oi.expandByPoint(Mn),Mn.addVectors(oi.max,$o.max),oi.expandByPoint(Mn)):(oi.expandByPoint($o.min),oi.expandByPoint($o.max))}oi.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)Mn.fromBufferAttribute(p,h),m&&(Fr.fromBufferAttribute(t,h),Mn.add(Fr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let E=0;E<s.count;E++)p[E]=new lt,m[E]=new lt;const h=new lt,x=new lt,S=new lt,g=new Ee,b=new Ee,M=new Ee,R=new lt,_=new lt;function v(E,O,at){h.fromBufferAttribute(s,E),x.fromBufferAttribute(s,O),S.fromBufferAttribute(s,at),g.fromBufferAttribute(c,E),b.fromBufferAttribute(c,O),M.fromBufferAttribute(c,at),x.sub(h),S.sub(h),b.sub(g),M.sub(g);const H=1/(b.x*M.y-M.x*b.y);isFinite(H)&&(R.copy(x).multiplyScalar(M.y).addScaledVector(S,-b.y).multiplyScalar(H),_.copy(S).multiplyScalar(b.x).addScaledVector(x,-M.x).multiplyScalar(H),p[E].add(R),p[O].add(R),p[at].add(R),m[E].add(_),m[O].add(_),m[at].add(_))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let E=0,O=A.length;E<O;++E){const at=A[E],H=at.start,q=at.count;for(let Y=H,st=H+q;Y<st;Y+=3)v(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const N=new lt,D=new lt,G=new lt,B=new lt;function z(E){G.fromBufferAttribute(l,E),B.copy(G);const O=p[E];N.copy(O),N.sub(G.multiplyScalar(G.dot(O))).normalize(),D.crossVectors(B,O);const H=D.dot(m[E])<0?-1:1;d.setXYZW(E,N.x,N.y,N.z,H)}for(let E=0,O=A.length;E<O;++E){const at=A[E],H=at.start,q=at.count;for(let Y=H,st=H+q;Y<st;Y+=3)z(t.getX(Y+0)),z(t.getX(Y+1)),z(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ln(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,b=s.count;g<b;g++)s.setXYZ(g,0,0,0);const l=new lt,c=new lt,d=new lt,p=new lt,m=new lt,h=new lt,x=new lt,S=new lt;if(t)for(let g=0,b=t.count;g<b;g+=3){const M=t.getX(g+0),R=t.getX(g+1),_=t.getX(g+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,_),x.subVectors(d,c),S.subVectors(l,c),x.cross(S),p.fromBufferAttribute(s,M),m.fromBufferAttribute(s,R),h.fromBufferAttribute(s,_),p.add(x),m.add(x),h.add(x),s.setXYZ(M,p.x,p.y,p.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(_,h.x,h.y,h.z)}else for(let g=0,b=i.count;g<b;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),x.subVectors(d,c),S.subVectors(l,c),x.cross(S),s.setXYZ(g+0,x.x,x.y,x.z),s.setXYZ(g+1,x.x,x.y,x.z),s.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(p,m){const h=p.array,x=p.itemSize,S=p.normalized,g=new h.constructor(m.length*x);let b=0,M=0;for(let R=0,_=m.length;R<_;R++){p.isInterleavedBufferAttribute?b=m[R]*p.data.stride+p.offset:b=m[R]*x;for(let v=0;v<x;v++)g[M++]=h[b++]}return new Ln(g,x,S)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let x=0,S=h.length;x<S;x++){const g=h[x],b=t(g,s);m.push(b)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let S=0,g=h.length;S<g;S++){const b=h[S];x.push(b.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=t.morphAttributes;for(const h in c){const x=[],S=c[h];for(let g=0,b=S.length;g<b;g++)x.push(S[g].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,x=d.length;h<x;h++){const S=d[h];this.addGroup(S.start,S.count,S.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tb{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=pp,this.updateRanges=[],this.version=0,this.uuid=us()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=us()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=us()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vn=new lt;class _u{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix4(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyNormalMatrix(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.transformDirection(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=ji(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=We(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=We(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=ji(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=ji(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=ji(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=ji(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),s=We(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),s=We(s,this.array),l=We(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=We(i,this.array),s=We(s,this.array),l=We(l,this.array),c=We(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){mu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ln(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _u(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){mu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Ab=0;class ks extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=us(),this.name="",this.type="Material",this.blending=jr,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=Ah,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){le(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(s.blending=this.blending),this.side!==fs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Th&&(s.blendSrc=this.blendSrc),this.blendDst!==Ah&&(s.blendDst=this.blendDst),this.blendEquation!==Bs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==H_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class px extends ks{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ir;const tl=new lt,Br=new lt,zr=new lt,Hr=new Ee,el=new Ee,mx=new Ke,Hc=new lt,nl=new lt,Gc=new lt,tv=new Ee,oh=new Ee,ev=new Ee;class Rb extends Cn{constructor(t=new px){if(super(),this.isSprite=!0,this.type="Sprite",Ir===void 0){Ir=new Fn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new Tb(i,5);Ir.setIndex([0,1,2,0,2,3]),Ir.setAttribute("position",new _u(s,3,0,!1)),Ir.setAttribute("uv",new _u(s,2,3,!1))}this.geometry=Ir,this.material=t,this.center=new Ee(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Br.setFromMatrixScale(this.matrixWorld),mx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Br.multiplyScalar(-zr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const d=this.center;Vc(Hc.set(-.5,-.5,0),zr,d,Br,l,c),Vc(nl.set(.5,-.5,0),zr,d,Br,l,c),Vc(Gc.set(.5,.5,0),zr,d,Br,l,c),tv.set(0,0),oh.set(1,0),ev.set(1,1);let p=t.ray.intersectTriangle(Hc,nl,Gc,!1,tl);if(p===null&&(Vc(nl.set(-.5,.5,0),zr,d,Br,l,c),oh.set(0,1),p=t.ray.intersectTriangle(Hc,Gc,nl,!1,tl),p===null))return;const m=t.ray.origin.distanceTo(tl);m<t.near||m>t.far||i.push({distance:m,point:tl.clone(),uv:yi.getInterpolation(tl,Hc,nl,Gc,tv,oh,ev,new Ee),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Vc(r,t,i,s,l,c){Hr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(el.x=c*Hr.x-l*Hr.y,el.y=l*Hr.x+c*Hr.y):el.copy(Hr),r.copy(t),r.x+=el.x,r.y+=el.y,r.applyMatrix4(mx)}const Ma=new lt,lh=new lt,kc=new lt,ss=new lt,ch=new lt,Xc=new lt,uh=new lt;class Pp{constructor(t=new lt,i=new lt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ma.copy(this.origin).addScaledVector(this.direction,i),Ma.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){lh.copy(t).add(i).multiplyScalar(.5),kc.copy(i).sub(t).normalize(),ss.copy(this.origin).sub(lh);const c=t.distanceTo(i)*.5,d=-this.direction.dot(kc),p=ss.dot(this.direction),m=-ss.dot(kc),h=ss.lengthSq(),x=Math.abs(1-d*d);let S,g,b,M;if(x>0)if(S=d*m-p,g=d*p-m,M=c*x,S>=0)if(g>=-M)if(g<=M){const R=1/x;S*=R,g*=R,b=S*(S+d*g+2*p)+g*(d*S+g+2*m)+h}else g=c,S=Math.max(0,-(d*g+p)),b=-S*S+g*(g+2*m)+h;else g=-c,S=Math.max(0,-(d*g+p)),b=-S*S+g*(g+2*m)+h;else g<=-M?(S=Math.max(0,-(-d*c+p)),g=S>0?-c:Math.min(Math.max(-c,-m),c),b=-S*S+g*(g+2*m)+h):g<=M?(S=0,g=Math.min(Math.max(-c,-m),c),b=g*(g+2*m)+h):(S=Math.max(0,-(d*c+p)),g=S>0?c:Math.min(Math.max(-c,-m),c),b=-S*S+g*(g+2*m)+h);else g=d>0?-c:c,S=Math.max(0,-(d*g+p)),b=-S*S+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(lh).addScaledVector(kc,g),b}intersectSphere(t,i){Ma.subVectors(t.center,this.origin);const s=Ma.dot(this.direction),l=Ma.dot(Ma)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,p,m;const h=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,g=this.origin;return h>=0?(s=(t.min.x-g.x)*h,l=(t.max.x-g.x)*h):(s=(t.max.x-g.x)*h,l=(t.min.x-g.x)*h),x>=0?(c=(t.min.y-g.y)*x,d=(t.max.y-g.y)*x):(c=(t.max.y-g.y)*x,d=(t.min.y-g.y)*x),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),S>=0?(p=(t.min.z-g.z)*S,m=(t.max.z-g.z)*S):(p=(t.max.z-g.z)*S,m=(t.min.z-g.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ma)!==null}intersectTriangle(t,i,s,l,c){ch.subVectors(i,t),Xc.subVectors(s,t),uh.crossVectors(ch,Xc);let d=this.direction.dot(uh),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ss.subVectors(this.origin,t);const m=p*this.direction.dot(Xc.crossVectors(ss,Xc));if(m<0)return null;const h=p*this.direction.dot(ch.cross(ss));if(h<0||m+h>d)return null;const x=-p*ss.dot(uh);return x<0?null:this.at(x/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fp extends ks{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ca,this.combine=qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nv=new Ke,Ls=new Pp,jc=new ml,iv=new lt,Wc=new lt,qc=new lt,Yc=new lt,fh=new lt,Zc=new lt,av=new lt,Kc=new lt;class Qi extends Cn{constructor(t=new Fn,i=new Fp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Zc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=p[m],S=c[m];x!==0&&(fh.fromBufferAttribute(S,t),d?Zc.addScaledVector(fh,x):Zc.addScaledVector(fh.sub(i),x))}i.add(Zc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),jc.copy(s.boundingSphere),jc.applyMatrix4(c),Ls.copy(t.ray).recast(t.near),!(jc.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(jc,iv)===null||Ls.origin.distanceToSquared(iv)>(t.far-t.near)**2))&&(nv.copy(c).invert(),Ls.copy(t.ray).applyMatrix4(nv),!(s.boundingBox!==null&&Ls.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ls)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,S=c.attributes.normal,g=c.groups,b=c.drawRange;if(p!==null)if(Array.isArray(d))for(let M=0,R=g.length;M<R;M++){const _=g[M],v=d[_.materialIndex],A=Math.max(_.start,b.start),N=Math.min(p.count,Math.min(_.start+_.count,b.start+b.count));for(let D=A,G=N;D<G;D+=3){const B=p.getX(D),z=p.getX(D+1),E=p.getX(D+2);l=Qc(this,v,t,s,h,x,S,B,z,E),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=_.materialIndex,i.push(l))}}else{const M=Math.max(0,b.start),R=Math.min(p.count,b.start+b.count);for(let _=M,v=R;_<v;_+=3){const A=p.getX(_),N=p.getX(_+1),D=p.getX(_+2);l=Qc(this,d,t,s,h,x,S,A,N,D),l&&(l.faceIndex=Math.floor(_/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let M=0,R=g.length;M<R;M++){const _=g[M],v=d[_.materialIndex],A=Math.max(_.start,b.start),N=Math.min(m.count,Math.min(_.start+_.count,b.start+b.count));for(let D=A,G=N;D<G;D+=3){const B=D,z=D+1,E=D+2;l=Qc(this,v,t,s,h,x,S,B,z,E),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=_.materialIndex,i.push(l))}}else{const M=Math.max(0,b.start),R=Math.min(m.count,b.start+b.count);for(let _=M,v=R;_<v;_+=3){const A=_,N=_+1,D=_+2;l=Qc(this,d,t,s,h,x,S,A,N,D),l&&(l.faceIndex=Math.floor(_/3),i.push(l))}}}}function Cb(r,t,i,s,l,c,d,p){let m;if(t.side===Kn?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,t.side===fs,p),m===null)return null;Kc.copy(p),Kc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Kc);return h<i.near||h>i.far?null:{distance:h,point:Kc.clone(),object:r}}function Qc(r,t,i,s,l,c,d,p,m,h){r.getVertexPosition(p,Wc),r.getVertexPosition(m,qc),r.getVertexPosition(h,Yc);const x=Cb(r,t,i,s,Wc,qc,Yc,av);if(x){const S=new lt;yi.getBarycoord(av,Wc,qc,Yc,S),l&&(x.uv=yi.getInterpolatedAttribute(l,p,m,h,S,new Ee)),c&&(x.uv1=yi.getInterpolatedAttribute(c,p,m,h,S,new Ee)),d&&(x.normal=yi.getInterpolatedAttribute(d,p,m,h,S,new lt),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new lt,materialIndex:0};yi.getNormal(Wc,qc,Yc,g.normal),x.face=g,x.barycoord=S}return x}class wb extends Pn{constructor(t=null,i=1,s=1,l,c,d,p,m,h=Rn,x=Rn,S,g){super(null,d,p,m,h,x,l,c,S,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dh=new lt,Db=new lt,Nb=new xe;class Is{constructor(t=new lt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=dh.subVectors(s,i).cross(Db.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(dh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Nb.getNormalMatrix(t),l=this.coplanarPoint(dh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new ml,Ub=new Ee(.5,.5),Jc=new lt;class Ip{constructor(t=new Is,i=new Is,s=new Is,l=new Is,c=new Is,d=new Is){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=qi,s=!1){const l=this.planes,c=t.elements,d=c[0],p=c[1],m=c[2],h=c[3],x=c[4],S=c[5],g=c[6],b=c[7],M=c[8],R=c[9],_=c[10],v=c[11],A=c[12],N=c[13],D=c[14],G=c[15];if(l[0].setComponents(h-d,b-x,v-M,G-A).normalize(),l[1].setComponents(h+d,b+x,v+M,G+A).normalize(),l[2].setComponents(h+p,b+S,v+R,G+N).normalize(),l[3].setComponents(h-p,b-S,v-R,G-N).normalize(),s)l[4].setComponents(m,g,_,D).normalize(),l[5].setComponents(h-m,b-g,v-_,G-D).normalize();else if(l[4].setComponents(h-m,b-g,v-_,G-D).normalize(),i===qi)l[5].setComponents(h+m,b+g,v+_,G+D).normalize();else if(i===dl)l[5].setComponents(m,g,_,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);const i=Ub.distanceTo(t.center);return Os.radius=.7071067811865476+i,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Jc.x=l.normal.x>0?t.max.x:t.min.x,Jc.y=l.normal.y>0?t.max.y:t.min.y,Jc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Jc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bp extends ks{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vu=new lt,xu=new lt,sv=new Ke,il=new Pp,$c=new ml,hh=new lt,rv=new lt;class gx extends Cn{constructor(t=new Fn,i=new Bp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)vu.fromBufferAttribute(i,l-1),xu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=vu.distanceTo(xu);t.setAttribute("lineDistance",new ui(s,1))}else le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),$c.copy(s.boundingSphere),$c.applyMatrix4(l),$c.radius+=c,t.ray.intersectsSphere($c)===!1)return;sv.copy(l).invert(),il.copy(t.ray).applyMatrix4(sv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,x=s.index,g=s.attributes.position;if(x!==null){const b=Math.max(0,d.start),M=Math.min(x.count,d.start+d.count);for(let R=b,_=M-1;R<_;R+=h){const v=x.getX(R),A=x.getX(R+1),N=tu(this,t,il,m,v,A,R);N&&i.push(N)}if(this.isLineLoop){const R=x.getX(M-1),_=x.getX(b),v=tu(this,t,il,m,R,_,M-1);v&&i.push(v)}}else{const b=Math.max(0,d.start),M=Math.min(g.count,d.start+d.count);for(let R=b,_=M-1;R<_;R+=h){const v=tu(this,t,il,m,R,R+1,R);v&&i.push(v)}if(this.isLineLoop){const R=tu(this,t,il,m,M-1,b,M-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function tu(r,t,i,s,l,c,d){const p=r.geometry.attributes.position;if(vu.fromBufferAttribute(p,l),xu.fromBufferAttribute(p,c),i.distanceSqToSegment(vu,xu,hh,rv)>s)return;hh.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(hh);if(!(h<t.near||h>t.far))return{distance:h,point:rv.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}const ov=new lt,lv=new lt;class Lb extends gx{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)ov.fromBufferAttribute(i,l),lv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+ov.distanceTo(lv);t.setAttribute("lineDistance",new ui(s,1))}else le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gp extends ks{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const cv=new Ke,_p=new Pp,eu=new ml,nu=new lt;class uv extends Cn{constructor(t=new Fn,i=new gp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),eu.copy(s.boundingSphere),eu.applyMatrix4(l),eu.radius+=c,t.ray.intersectsSphere(eu)===!1)return;cv.copy(l).invert(),_p.copy(t.ray).applyMatrix4(cv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,S=s.attributes.position;if(h!==null){const g=Math.max(0,d.start),b=Math.min(h.count,d.start+d.count);for(let M=g,R=b;M<R;M++){const _=h.getX(M);nu.fromBufferAttribute(S,_),fv(nu,_,m,l,t,i,this)}}else{const g=Math.max(0,d.start),b=Math.min(S.count,d.start+d.count);for(let M=g,R=b;M<R;M++)nu.fromBufferAttribute(S,M),fv(nu,M,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function fv(r,t,i,s,l,c,d){const p=_p.distanceSqToPoint(r);if(p<i){const m=new lt;_p.closestPointToPoint(r,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class _x extends Pn{constructor(t=[],i=Vs,s,l,c,d,p,m,h,x){super(t,i,s,l,c,d,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ob extends Pn{constructor(t,i,s,l,c,d,p,m,h){super(t,i,s,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hl extends Pn{constructor(t,i,s=Ki,l,c,d,p=Rn,m=Rn,h,x=Ra,S=1){if(x!==Ra&&x!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:S};super(g,l,c,d,p,m,x,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Pb extends hl{constructor(t,i=Ki,s=Vs,l,c,d=Rn,p=Rn,m,h=Ra){const x={width:t,height:t,depth:1},S=[x,x,x,x,x,x];super(t,t,i,s,l,c,d,p,m,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class vx extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gl extends Fn{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],x=[],S=[];let g=0,b=0;M("z","y","x",-1,-1,s,i,t,d,c,0),M("z","y","x",1,-1,s,i,-t,d,c,1),M("x","z","y",1,1,t,s,i,l,d,2),M("x","z","y",1,-1,t,s,-i,l,d,3),M("x","y","z",1,-1,t,i,s,l,c,4),M("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ui(h,3)),this.setAttribute("normal",new ui(x,3)),this.setAttribute("uv",new ui(S,2));function M(R,_,v,A,N,D,G,B,z,E,O){const at=D/z,H=G/E,q=D/2,Y=G/2,st=B/2,et=z+1,U=E+1;let F=0,k=0;const nt=new lt;for(let vt=0;vt<U;vt++){const I=vt*H-Y;for(let X=0;X<et;X++){const $=X*at-q;nt[R]=$*A,nt[_]=I*N,nt[v]=st,h.push(nt.x,nt.y,nt.z),nt[R]=0,nt[_]=0,nt[v]=B>0?1:-1,x.push(nt.x,nt.y,nt.z),S.push(X/z),S.push(1-vt/E),F+=1}}for(let vt=0;vt<E;vt++)for(let I=0;I<z;I++){const X=g+I+et*vt,$=g+I+et*(vt+1),pt=g+(I+1)+et*(vt+1),St=g+(I+1)+et*vt;m.push(X,$,St),m.push($,pt,St),k+=6}p.addGroup(b,k,O),b+=k,g+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class _l extends Fn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,x=m+1,S=t/p,g=i/m,b=[],M=[],R=[],_=[];for(let v=0;v<x;v++){const A=v*g-d;for(let N=0;N<h;N++){const D=N*S-c;M.push(D,-A,0),R.push(0,0,1),_.push(N/p),_.push(1-v/m)}}for(let v=0;v<m;v++)for(let A=0;A<p;A++){const N=A+h*v,D=A+h*(v+1),G=A+1+h*(v+1),B=A+1+h*v;b.push(N,D,B),b.push(D,G,B)}this.setIndex(b),this.setAttribute("position",new ui(M,3)),this.setAttribute("normal",new ui(R,3)),this.setAttribute("uv",new ui(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _l(t.width,t.height,t.widthSegments,t.heightSegments)}}function Jr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function kn(r){const t={};for(let i=0;i<r.length;i++){const s=Jr(r[i]);for(const l in s)t[l]=s[l]}return t}function Fb(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function xx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const Ib={clone:Jr,merge:kn};var Bb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends ks{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bb,this.fragmentShader=zb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jr(t.uniforms),this.uniformsGroups=Fb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Hb extends Ji{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gb extends ks{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vb extends ks{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Sx extends Cn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ph=new Ke,dv=new lt,hv=new lt;class kb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ip,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;dv.setFromMatrixPosition(t.matrixWorld),i.position.copy(dv),hv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(hv),i.updateMatrixWorld(),ph.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ph,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===dl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ph)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const iu=new lt,au=new to,Gi=new lt;class yx extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(iu,au,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(iu,au,Gi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(iu,au,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(iu,au,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new lt,pv=new Ee,mv=new Ee;class li extends yx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=mp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mp*2*Math.atan(Math.tan(Vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,i){return this.getViewBounds(t,pv,mv),i.subVectors(mv,pv)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Vd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Xb extends kb{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0}}class jb extends Sx{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Xb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Mx extends yx{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Wb extends Sx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Gr=-90,Vr=1;class qb extends Cn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(Gr,Vr,t,i);l.layers=this.layers,this.add(l);const c=new li(Gr,Vr,t,i);c.layers=this.layers,this.add(c);const d=new li(Gr,Vr,t,i);d.layers=this.layers,this.add(d);const p=new li(Gr,Vr,t,i);p.layers=this.layers,this.add(p);const m=new li(Gr,Vr,t,i);m.layers=this.layers,this.add(m);const h=new li(Gr,Vr,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(t===qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===dl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,x]=this.children,S=t.getRenderTarget(),g=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(S,g,b),t.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class Yb extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Zb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,le("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class Kb extends Lb{constructor(t=10,i=10,s=4473924,l=8947848){s=new ye(s),l=new ye(l);const c=i/2,d=t/i,p=t/2,m=[],h=[];for(let g=0,b=0,M=-p;g<=i;g++,M+=d){m.push(-p,0,M,p,0,M),m.push(M,0,-p,M,0,p);const R=g===c?s:l;R.toArray(h,b),b+=3,R.toArray(h,b),b+=3,R.toArray(h,b),b+=3,R.toArray(h,b),b+=3}const x=new Fn;x.setAttribute("position",new ui(m,3)),x.setAttribute("color",new ui(h,3));const S=new Bp({vertexColors:!0,toneMapped:!1});super(x,S),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function gv(r,t,i,s){const l=Qb(s);switch(i){case sx:return r*t;case ox:return r*t/l.components*l.byteLength;case Cp:return r*t/l.components*l.byteLength;case Kr:return r*t*2/l.components*l.byteLength;case wp:return r*t*2/l.components*l.byteLength;case rx:return r*t*3/l.components*l.byteLength;case Oi:return r*t*4/l.components*l.byteLength;case Dp:return r*t*4/l.components*l.byteLength;case lu:case cu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case uu:case fu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ih:case zh:return Math.max(r,16)*Math.max(t,8)/4;case Fh:case Bh:return Math.max(r,8)*Math.max(t,8)/2;case Hh:case Gh:case kh:case Xh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Vh:case jh:case Wh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Zh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Jh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case $h:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case tp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ep:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case np:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ip:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ap:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case sp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case rp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case op:case lp:case cp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case up:case fp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case dp:case hp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Qb(r){switch(r){case ci:case ex:return{byteLength:1,components:1};case ul:case nx:case Aa:return{byteLength:2,components:1};case Ap:case Rp:return{byteLength:2,components:4};case Ki:case Tp:case Wi:return{byteLength:4,components:1};case ix:case ax:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bp}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bx(){let r=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Jb(r){const t=new WeakMap;function i(p,m){const h=p.array,x=p.usage,S=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,x),p.onUploadCallback();let b;if(h instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=r.SHORT;else if(h instanceof Uint32Array)b=r.UNSIGNED_INT;else if(h instanceof Int32Array)b=r.INT;else if(h instanceof Int8Array)b=r.BYTE;else if(h instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,h){const x=m.array,S=m.updateRanges;if(r.bindBuffer(h,p),S.length===0)r.bufferSubData(h,0,x);else{S.sort((b,M)=>b.start-M.start);let g=0;for(let b=1;b<S.length;b++){const M=S[g],R=S[b];R.start<=M.start+M.count+1?M.count=Math.max(M.count,R.start+R.count-M.start):(++g,S[g]=R)}S.length=g+1;for(let b=0,M=S.length;b<M;b++){const R=S[b];r.bufferSubData(h,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=t.get(p);(!x||x.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var $b=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tE=`#ifdef USE_ALPHAHASH
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
#endif`,eE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sE=`#ifdef USE_AOMAP
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
#endif`,rE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oE=`#ifdef USE_BATCHING
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
#endif`,lE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dE=`#ifdef USE_IRIDESCENCE
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
#endif`,hE=`#ifdef USE_BUMPMAP
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
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,SE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ME=`#define PI 3.141592653589793
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
} // validated`,bE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EE=`vec3 transformedNormal = objectNormal;
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
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wE="gl_FragColor = linearToOutputTexel( gl_FragColor );",DE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NE=`#ifdef USE_ENVMAP
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
#endif`,UE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,LE=`#ifdef USE_ENVMAP
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
#endif`,OE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PE=`#ifdef USE_ENVMAP
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
#endif`,FE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HE=`#ifdef USE_GRADIENTMAP
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
}`,GE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XE=`uniform bool receiveShadow;
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
#endif`,jE=`#ifdef USE_ENVMAP
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
#endif`,WE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KE=`PhysicalMaterial material;
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
#endif`,QE=`uniform sampler2D dfgLUT;
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
}`,JE=`
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
#endif`,$E=`#if defined( RE_IndirectDiffuse )
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
#endif`,t1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l1=`#if defined( USE_POINTS_UV )
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
#endif`,c1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p1=`#ifdef USE_MORPHTARGETS
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
#endif`,m1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y1=`#ifdef USE_NORMALMAP
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
#endif`,M1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I1=`float getShadowMask() {
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
}`,B1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z1=`#ifdef USE_SKINNING
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
#endif`,H1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G1=`#ifdef USE_SKINNING
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
#endif`,V1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W1=`#ifdef USE_TRANSMISSION
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
#endif`,q1=`#ifdef USE_TRANSMISSION
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
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$1=`uniform sampler2D t2D;
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
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`#include <common>
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
}`,sT=`#if DEPTH_PACKING == 3200
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
}`,rT=`#define DISTANCE
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
}`,oT=`#define DISTANCE
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
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`uniform float scale;
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
}`,fT=`uniform vec3 diffuse;
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
}`,dT=`#include <common>
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
}`,hT=`uniform vec3 diffuse;
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
}`,pT=`#define LAMBERT
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
}`,mT=`#define LAMBERT
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
}`,gT=`#define MATCAP
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
}`,_T=`#define MATCAP
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
}`,vT=`#define NORMAL
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
}`,xT=`#define NORMAL
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
}`,ST=`#define PHONG
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
}`,yT=`#define PHONG
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
}`,MT=`#define STANDARD
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
}`,bT=`#define STANDARD
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
}`,ET=`#define TOON
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
}`,TT=`#define TOON
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
}`,AT=`uniform float size;
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
}`,RT=`uniform vec3 diffuse;
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
}`,CT=`#include <common>
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
}`,wT=`uniform vec3 color;
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
}`,DT=`uniform float rotation;
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
}`,NT=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:$b,alphahash_pars_fragment:tE,alphamap_fragment:eE,alphamap_pars_fragment:nE,alphatest_fragment:iE,alphatest_pars_fragment:aE,aomap_fragment:sE,aomap_pars_fragment:rE,batching_pars_vertex:oE,batching_vertex:lE,begin_vertex:cE,beginnormal_vertex:uE,bsdfs:fE,iridescence_fragment:dE,bumpmap_pars_fragment:hE,clipping_planes_fragment:pE,clipping_planes_pars_fragment:mE,clipping_planes_pars_vertex:gE,clipping_planes_vertex:_E,color_fragment:vE,color_pars_fragment:xE,color_pars_vertex:SE,color_vertex:yE,common:ME,cube_uv_reflection_fragment:bE,defaultnormal_vertex:EE,displacementmap_pars_vertex:TE,displacementmap_vertex:AE,emissivemap_fragment:RE,emissivemap_pars_fragment:CE,colorspace_fragment:wE,colorspace_pars_fragment:DE,envmap_fragment:NE,envmap_common_pars_fragment:UE,envmap_pars_fragment:LE,envmap_pars_vertex:OE,envmap_physical_pars_fragment:jE,envmap_vertex:PE,fog_vertex:FE,fog_pars_vertex:IE,fog_fragment:BE,fog_pars_fragment:zE,gradientmap_pars_fragment:HE,lightmap_pars_fragment:GE,lights_lambert_fragment:VE,lights_lambert_pars_fragment:kE,lights_pars_begin:XE,lights_toon_fragment:WE,lights_toon_pars_fragment:qE,lights_phong_fragment:YE,lights_phong_pars_fragment:ZE,lights_physical_fragment:KE,lights_physical_pars_fragment:QE,lights_fragment_begin:JE,lights_fragment_maps:$E,lights_fragment_end:t1,logdepthbuf_fragment:e1,logdepthbuf_pars_fragment:n1,logdepthbuf_pars_vertex:i1,logdepthbuf_vertex:a1,map_fragment:s1,map_pars_fragment:r1,map_particle_fragment:o1,map_particle_pars_fragment:l1,metalnessmap_fragment:c1,metalnessmap_pars_fragment:u1,morphinstance_vertex:f1,morphcolor_vertex:d1,morphnormal_vertex:h1,morphtarget_pars_vertex:p1,morphtarget_vertex:m1,normal_fragment_begin:g1,normal_fragment_maps:_1,normal_pars_fragment:v1,normal_pars_vertex:x1,normal_vertex:S1,normalmap_pars_fragment:y1,clearcoat_normal_fragment_begin:M1,clearcoat_normal_fragment_maps:b1,clearcoat_pars_fragment:E1,iridescence_pars_fragment:T1,opaque_fragment:A1,packing:R1,premultiplied_alpha_fragment:C1,project_vertex:w1,dithering_fragment:D1,dithering_pars_fragment:N1,roughnessmap_fragment:U1,roughnessmap_pars_fragment:L1,shadowmap_pars_fragment:O1,shadowmap_pars_vertex:P1,shadowmap_vertex:F1,shadowmask_pars_fragment:I1,skinbase_vertex:B1,skinning_pars_vertex:z1,skinning_vertex:H1,skinnormal_vertex:G1,specularmap_fragment:V1,specularmap_pars_fragment:k1,tonemapping_fragment:X1,tonemapping_pars_fragment:j1,transmission_fragment:W1,transmission_pars_fragment:q1,uv_pars_fragment:Y1,uv_pars_vertex:Z1,uv_vertex:K1,worldpos_vertex:Q1,background_vert:J1,background_frag:$1,backgroundCube_vert:tT,backgroundCube_frag:eT,cube_vert:nT,cube_frag:iT,depth_vert:aT,depth_frag:sT,distance_vert:rT,distance_frag:oT,equirect_vert:lT,equirect_frag:cT,linedashed_vert:uT,linedashed_frag:fT,meshbasic_vert:dT,meshbasic_frag:hT,meshlambert_vert:pT,meshlambert_frag:mT,meshmatcap_vert:gT,meshmatcap_frag:_T,meshnormal_vert:vT,meshnormal_frag:xT,meshphong_vert:ST,meshphong_frag:yT,meshphysical_vert:MT,meshphysical_frag:bT,meshtoon_vert:ET,meshtoon_frag:TT,points_vert:AT,points_frag:RT,shadow_vert:CT,shadow_frag:wT,sprite_vert:DT,sprite_frag:NT},zt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},ki={basic:{uniforms:kn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:kn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:kn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:kn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:kn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new ye(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:kn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:kn([zt.points,zt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:kn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:kn([zt.common,zt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:kn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:kn([zt.sprite,zt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:kn([zt.common,zt.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:kn([zt.lights,zt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};ki.physical={uniforms:kn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const su={r:0,b:0,g:0},Ps=new Ca,UT=new Ke;function LT(r,t,i,s,l,c){const d=new ye(0);let p=l===!0?0:1,m,h,x=null,S=0,g=null;function b(A){let N=A.isScene===!0?A.background:null;if(N&&N.isTexture){const D=A.backgroundBlurriness>0;N=t.get(N,D)}return N}function M(A){let N=!1;const D=b(A);D===null?_(d,p):D&&D.isColor&&(_(D,1),N=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,c):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(A,N){const D=b(N);D&&(D.isCubeTexture||D.mapping===bu)?(h===void 0&&(h=new Qi(new gl(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Jr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(G,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ps.copy(N.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(UT.makeRotationFromEuler(Ps)),h.material.toneMapped=Le.getTransfer(D.colorSpace)!==Ve,(x!==D||S!==D.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,x=D,S=D.version,g=r.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Qi(new _l(2,2),new Ji({name:"BackgroundMaterial",uniforms:Jr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Le.getTransfer(D.colorSpace)!==Ve,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(x!==D||S!==D.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,x=D,S=D.version,g=r.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function _(A,N){A.getRGB(su,xx(r)),i.buffers.color.setClear(su.r,su.g,su.b,N,c)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(A,N=1){d.set(A),p=N,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(A){p=A,_(d,p)},render:M,addToRenderList:R,dispose:v}}function OT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(H,q,Y,st,et){let U=!1;const F=S(H,st,Y,q);c!==F&&(c=F,h(c.object)),U=b(H,st,Y,et),U&&M(H,st,Y,et),et!==null&&t.update(et,r.ELEMENT_ARRAY_BUFFER),(U||d)&&(d=!1,D(H,q,Y,st),et!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function m(){return r.createVertexArray()}function h(H){return r.bindVertexArray(H)}function x(H){return r.deleteVertexArray(H)}function S(H,q,Y,st){const et=st.wireframe===!0;let U=s[q.id];U===void 0&&(U={},s[q.id]=U);const F=H.isInstancedMesh===!0?H.id:0;let k=U[F];k===void 0&&(k={},U[F]=k);let nt=k[Y.id];nt===void 0&&(nt={},k[Y.id]=nt);let vt=nt[et];return vt===void 0&&(vt=g(m()),nt[et]=vt),vt}function g(H){const q=[],Y=[],st=[];for(let et=0;et<i;et++)q[et]=0,Y[et]=0,st[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Y,attributeDivisors:st,object:H,attributes:{},index:null}}function b(H,q,Y,st){const et=c.attributes,U=q.attributes;let F=0;const k=Y.getAttributes();for(const nt in k)if(k[nt].location>=0){const I=et[nt];let X=U[nt];if(X===void 0&&(nt==="instanceMatrix"&&H.instanceMatrix&&(X=H.instanceMatrix),nt==="instanceColor"&&H.instanceColor&&(X=H.instanceColor)),I===void 0||I.attribute!==X||X&&I.data!==X.data)return!0;F++}return c.attributesNum!==F||c.index!==st}function M(H,q,Y,st){const et={},U=q.attributes;let F=0;const k=Y.getAttributes();for(const nt in k)if(k[nt].location>=0){let I=U[nt];I===void 0&&(nt==="instanceMatrix"&&H.instanceMatrix&&(I=H.instanceMatrix),nt==="instanceColor"&&H.instanceColor&&(I=H.instanceColor));const X={};X.attribute=I,I&&I.data&&(X.data=I.data),et[nt]=X,F++}c.attributes=et,c.attributesNum=F,c.index=st}function R(){const H=c.newAttributes;for(let q=0,Y=H.length;q<Y;q++)H[q]=0}function _(H){v(H,0)}function v(H,q){const Y=c.newAttributes,st=c.enabledAttributes,et=c.attributeDivisors;Y[H]=1,st[H]===0&&(r.enableVertexAttribArray(H),st[H]=1),et[H]!==q&&(r.vertexAttribDivisor(H,q),et[H]=q)}function A(){const H=c.newAttributes,q=c.enabledAttributes;for(let Y=0,st=q.length;Y<st;Y++)q[Y]!==H[Y]&&(r.disableVertexAttribArray(Y),q[Y]=0)}function N(H,q,Y,st,et,U,F){F===!0?r.vertexAttribIPointer(H,q,Y,et,U):r.vertexAttribPointer(H,q,Y,st,et,U)}function D(H,q,Y,st){R();const et=st.attributes,U=Y.getAttributes(),F=q.defaultAttributeValues;for(const k in U){const nt=U[k];if(nt.location>=0){let vt=et[k];if(vt===void 0&&(k==="instanceMatrix"&&H.instanceMatrix&&(vt=H.instanceMatrix),k==="instanceColor"&&H.instanceColor&&(vt=H.instanceColor)),vt!==void 0){const I=vt.normalized,X=vt.itemSize,$=t.get(vt);if($===void 0)continue;const pt=$.buffer,St=$.type,Z=$.bytesPerElement,V=St===r.INT||St===r.UNSIGNED_INT||vt.gpuType===Tp;if(vt.isInterleavedBufferAttribute){const ft=vt.data,Mt=ft.stride,Dt=vt.offset;if(ft.isInstancedInterleavedBuffer){for(let Pt=0;Pt<nt.locationSize;Pt++)v(nt.location+Pt,ft.meshPerAttribute);H.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Pt=0;Pt<nt.locationSize;Pt++)_(nt.location+Pt);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let Pt=0;Pt<nt.locationSize;Pt++)N(nt.location+Pt,X/nt.locationSize,St,I,Mt*Z,(Dt+X/nt.locationSize*Pt)*Z,V)}else{if(vt.isInstancedBufferAttribute){for(let ft=0;ft<nt.locationSize;ft++)v(nt.location+ft,vt.meshPerAttribute);H.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ft=0;ft<nt.locationSize;ft++)_(nt.location+ft);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let ft=0;ft<nt.locationSize;ft++)N(nt.location+ft,X/nt.locationSize,St,I,X*Z,X/nt.locationSize*ft*Z,V)}}else if(F!==void 0){const I=F[k];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(nt.location,I);break;case 3:r.vertexAttrib3fv(nt.location,I);break;case 4:r.vertexAttrib4fv(nt.location,I);break;default:r.vertexAttrib1fv(nt.location,I)}}}}A()}function G(){O();for(const H in s){const q=s[H];for(const Y in q){const st=q[Y];for(const et in st){const U=st[et];for(const F in U)x(U[F].object),delete U[F];delete st[et]}}delete s[H]}}function B(H){if(s[H.id]===void 0)return;const q=s[H.id];for(const Y in q){const st=q[Y];for(const et in st){const U=st[et];for(const F in U)x(U[F].object),delete U[F];delete st[et]}}delete s[H.id]}function z(H){for(const q in s){const Y=s[q];for(const st in Y){const et=Y[st];if(et[H.id]===void 0)continue;const U=et[H.id];for(const F in U)x(U[F].object),delete U[F];delete et[H.id]}}}function E(H){for(const q in s){const Y=s[q],st=H.isInstancedMesh===!0?H.id:0,et=Y[st];if(et!==void 0){for(const U in et){const F=et[U];for(const k in F)x(F[k].object),delete F[k];delete et[U]}delete Y[st],Object.keys(Y).length===0&&delete s[q]}}}function O(){at(),d=!0,c!==l&&(c=l,h(c.object))}function at(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:at,dispose:G,releaseStatesOfGeometry:B,releaseStatesOfObject:E,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:_,disableUnusedAttributes:A}}function PT(r,t,i){let s;function l(h){s=h}function c(h,x){r.drawArrays(s,h,x),i.update(x,s,1)}function d(h,x,S){S!==0&&(r.drawArraysInstanced(s,h,x,S),i.update(x,s,S))}function p(h,x,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,x,0,S);let b=0;for(let M=0;M<S;M++)b+=x[M];i.update(b,s,1)}function m(h,x,S,g){if(S===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let M=0;M<h.length;M++)d(h[M],x[M],g[M]);else{b.multiDrawArraysInstancedWEBGL(s,h,0,x,0,g,0,S);let M=0;for(let R=0;R<S;R++)M+=x[R]*g[R];i.update(M,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function FT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Oi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const E=z===Aa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ci&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Wi&&!E)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&(le("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const S=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:M,maxTextureSize:R,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:A,maxVaryings:N,maxFragmentUniforms:D,maxSamples:G,samples:B}}function IT(r){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Is,p=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const b=S.length!==0||g||s!==0||l;return l=g,s=S.length,b},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){i=x(S,g,0)},this.setState=function(S,g,b){const M=S.clippingPlanes,R=S.clipIntersection,_=S.clipShadows,v=r.get(S);if(!l||M===null||M.length===0||c&&!_)c?x(null):h();else{const A=c?0:s,N=A*4;let D=v.clippingState||null;m.value=D,D=x(M,g,N,b);for(let G=0;G!==N;++G)D[G]=i[G];v.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=A}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(S,g,b,M){const R=S!==null?S.length:0;let _=null;if(R!==0){if(_=m.value,M!==!0||_===null){const v=b+R*4,A=g.matrixWorldInverse;p.getNormalMatrix(A),(_===null||_.length<v)&&(_=new Float32Array(v));for(let N=0,D=b;N!==R;++N,D+=4)d.copy(S[N]).applyMatrix4(A,p),d.normal.toArray(_,D),_[D+3]=d.constant}m.value=_,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,_}}const cs=4,_v=[.125,.215,.35,.446,.526,.582],zs=20,BT=256,al=new Mx,vv=new ye;let mh=null,gh=0,_h=0,vh=!1;const zT=new lt;class xv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=zT}=c;mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mh,gh,_h),this._renderer.xr.enabled=vh,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Vs||t.mapping===Zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:Aa,format:Oi,colorSpace:Qr,depthBuffer:!1},l=Sv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=HT(c)),this._blurMaterial=VT(c,t,i),this._ggxMaterial=GT(c,t,i)}return l}_compileMaterial(t){const i=new Qi(new Fn,t);this._renderer.compile(i,al)}_sceneToCubeUV(t,i,s,l,c){const m=new li(90,1,i,s),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,b=S.toneMapping;S.getClearColor(vv),S.toneMapping=Yi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qi(new gl,new Fp({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,_=R.material;let v=!1;const A=t.background;A?A.isColor&&(_.color.copy(A),t.background=null,v=!0):(_.color.copy(vv),v=!0);for(let N=0;N<6;N++){const D=N%3;D===0?(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[N],c.y,c.z)):D===1?(m.up.set(0,0,h[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[N],c.z)):(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[N]));const G=this._cubeSize;kr(l,D*G,N>2?G:0,G,G),S.setRenderTarget(l),v&&S.render(R,m),S.render(t,m)}S.toneMapping=b,S.autoClear=g,t.background=A}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Vs||t.mapping===Zr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;kr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,al)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),S=Math.sqrt(h*h-x*x),g=0+h*1.25,b=S*g,{_lodMax:M}=this,R=this._sizeLods[s],_=3*R*(s>M-cs?s-M+cs:0),v=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=M-i,kr(c,_,v,3*R,2*R),l.setRenderTarget(c),l.render(p,al),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-s,kr(t,_,v,3*R,2*R),l.setRenderTarget(t),l.render(p,al)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[l];S.material=h;const g=h.uniforms,b=this._sizeLods[s]-1,M=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*zs-1),R=c/M,_=isFinite(c)?1+Math.floor(x*R):zs;_>zs&&le(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${zs}`);const v=[];let A=0;for(let z=0;z<zs;++z){const E=z/R,O=Math.exp(-E*E/2);v.push(O),z===0?A+=O:z<_&&(A+=2*O)}for(let z=0;z<v.length;z++)v[z]=v[z]/A;g.envMap.value=t.texture,g.samples.value=_,g.weights.value=v,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:N}=this;g.dTheta.value=M,g.mipInt.value=N-s;const D=this._sizeLods[l],G=3*D*(l>N-cs?l-N+cs:0),B=4*(this._cubeSize-D);kr(i,G,B,3*D,2*D),m.setRenderTarget(i),m.render(S,al)}}function HT(r){const t=[],i=[],s=[];let l=r;const c=r-cs+1+_v.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);t.push(p);let m=1/p;d>r-cs?m=_v[d-r+cs-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),x=-h,S=1+h,g=[x,x,S,x,S,S,x,x,S,S,x,S],b=6,M=6,R=3,_=2,v=1,A=new Float32Array(R*M*b),N=new Float32Array(_*M*b),D=new Float32Array(v*M*b);for(let B=0;B<b;B++){const z=B%3*2/3-1,E=B>2?0:-1,O=[z,E,0,z+2/3,E,0,z+2/3,E+1,0,z,E,0,z+2/3,E+1,0,z,E+1,0];A.set(O,R*M*B),N.set(g,_*M*B);const at=[B,B,B,B,B,B];D.set(at,v*M*B)}const G=new Fn;G.setAttribute("position",new Ln(A,R)),G.setAttribute("uv",new Ln(N,_)),G.setAttribute("faceIndex",new Ln(D,v)),s.push(new Qi(G,null)),l>cs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Sv(r,t,i){const s=new Zi(r,t,i);return s.texture.mapping=bu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function kr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function GT(r,t,i){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:BT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function VT(r,t,i){const s=new Float32Array(zs),l=new lt(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function yv(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Mv(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Eu(){return`

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
	`}class Ex extends Zi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new _x(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new gl(5,5,5),c=new Ji({name:"CubemapFromEquirect",uniforms:Jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Ea});c.uniforms.tEquirect.value=i;const d=new Qi(l,c),p=i.minFilter;return i.minFilter===Hs&&(i.minFilter=On),new qb(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}function kT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,b=!1){return g==null?null:b?d(g):c(g)}function c(g){if(g&&g.isTexture){const b=g.mapping;if(b===zd||b===Hd)if(t.has(g)){const M=t.get(g).texture;return p(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const R=new Ex(M.height);return R.fromEquirectangularTexture(r,g),t.set(g,R),g.addEventListener("dispose",h),p(R.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const b=g.mapping,M=b===zd||b===Hd,R=b===Vs||b===Zr;if(M||R){let _=i.get(g);const v=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new xv(r)),_=M?s.fromEquirectangular(g,_):s.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,i.set(g,_),_.texture;if(_!==void 0)return _.texture;{const A=g.image;return M&&A&&A.height>0||R&&A&&m(A)?(s===null&&(s=new xv(r)),_=M?s.fromEquirectangular(g):s.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,i.set(g,_),g.addEventListener("dispose",x),_.texture):null}}}return g}function p(g,b){return b===zd?g.mapping=Vs:b===Hd&&(g.mapping=Zr),g}function m(g){let b=0;const M=6;for(let R=0;R<M;R++)g[R]!==void 0&&b++;return b===M}function h(g){const b=g.target;b.removeEventListener("dispose",h);const M=t.get(b);M!==void 0&&(t.delete(b),M.dispose())}function x(g){const b=g.target;b.removeEventListener("dispose",x);const M=i.get(b);M!==void 0&&(i.delete(b),M.dispose())}function S(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function XT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&gu("WebGLRenderer: "+s+" extension not supported."),l}}}function jT(r,t,i,s){const l={},c=new WeakMap;function d(S){const g=S.target;g.index!==null&&t.remove(g.index);for(const M in g.attributes)t.remove(g.attributes[M]);g.removeEventListener("dispose",d),delete l[g.id];const b=c.get(g);b&&(t.remove(b),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(S,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(S){const g=S.attributes;for(const b in g)t.update(g[b],r.ARRAY_BUFFER)}function h(S){const g=[],b=S.index,M=S.attributes.position;let R=0;if(M===void 0)return;if(b!==null){const A=b.array;R=b.version;for(let N=0,D=A.length;N<D;N+=3){const G=A[N+0],B=A[N+1],z=A[N+2];g.push(G,B,B,z,z,G)}}else{const A=M.array;R=M.version;for(let N=0,D=A.length/3-1;N<D;N+=3){const G=N+0,B=N+1,z=N+2;g.push(G,B,B,z,z,G)}}const _=new(M.count>=65535?hx:dx)(g,1);_.version=R;const v=c.get(S);v&&t.remove(v),c.set(S,_)}function x(S){const g=c.get(S);if(g){const b=S.index;b!==null&&g.version<b.version&&h(S)}else h(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:x}}function WT(r,t,i){let s;function l(g){s=g}let c,d;function p(g){c=g.type,d=g.bytesPerElement}function m(g,b){r.drawElements(s,b,c,g*d),i.update(b,s,1)}function h(g,b,M){M!==0&&(r.drawElementsInstanced(s,b,c,g*d,M),i.update(b,s,M))}function x(g,b,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,c,g,0,M);let _=0;for(let v=0;v<M;v++)_+=b[v];i.update(_,s,1)}function S(g,b,M,R){if(M===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<g.length;v++)h(g[v]/d,b[v],R[v]);else{_.multiDrawElementsInstancedWEBGL(s,b,0,c,g,0,R,0,M);let v=0;for(let A=0;A<M;A++)v+=b[A]*R[A];i.update(v,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=S}function qT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ue("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function YT(r,t,i){const s=new WeakMap,l=new an;function c(d,p,m){const h=d.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=x!==void 0?x.length:0;let g=s.get(p);if(g===void 0||g.count!==S){let at=function(){E.dispose(),s.delete(p),p.removeEventListener("dispose",at)};var b=at;g!==void 0&&g.texture.dispose();const M=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,_=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let D=0;M===!0&&(D=1),R===!0&&(D=2),_===!0&&(D=3);let G=p.attributes.position.count*D,B=1;G>t.maxTextureSize&&(B=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const z=new Float32Array(G*B*4*S),E=new cx(z,G,B,S);E.type=Wi,E.needsUpdate=!0;const O=D*4;for(let H=0;H<S;H++){const q=v[H],Y=A[H],st=N[H],et=G*B*4*H;for(let U=0;U<q.count;U++){const F=U*O;M===!0&&(l.fromBufferAttribute(q,U),z[et+F+0]=l.x,z[et+F+1]=l.y,z[et+F+2]=l.z,z[et+F+3]=0),R===!0&&(l.fromBufferAttribute(Y,U),z[et+F+4]=l.x,z[et+F+5]=l.y,z[et+F+6]=l.z,z[et+F+7]=0),_===!0&&(l.fromBufferAttribute(st,U),z[et+F+8]=l.x,z[et+F+9]=l.y,z[et+F+10]=l.z,z[et+F+11]=st.itemSize===4?l.w:1)}}g={count:S,texture:E,size:new Ee(G,B)},s.set(p,g),p.addEventListener("dispose",at)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let M=0;for(let _=0;_<h.length;_++)M+=h[_];const R=p.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function ZT(r,t,i,s,l){let c=new WeakMap;function d(h){const x=l.render.frame,S=h.geometry,g=t.get(h,S);if(c.get(g)!==x&&(t.update(g),c.set(g,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==x&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,x))),h.isSkinnedMesh){const b=h.skeleton;c.get(b)!==x&&(b.update(),c.set(b,x))}return g}function p(){c=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:p}}const KT={[Yv]:"LINEAR_TONE_MAPPING",[Zv]:"REINHARD_TONE_MAPPING",[Kv]:"CINEON_TONE_MAPPING",[Ep]:"ACES_FILMIC_TONE_MAPPING",[Jv]:"AGX_TONE_MAPPING",[$v]:"NEUTRAL_TONE_MAPPING",[Qv]:"CUSTOM_TONE_MAPPING"};function QT(r,t,i,s,l){const c=new Zi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),d=new Zi(t,i,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),p=new Fn;p.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ui([0,2,0,0,2,0],2));const m=new Hb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Qi(p,m),x=new Mx(-1,1,1,-1,0,1);let S=null,g=null,b=!1,M,R=null,_=[],v=!1;this.setSize=function(A,N){c.setSize(A,N),d.setSize(A,N);for(let D=0;D<_.length;D++){const G=_[D];G.setSize&&G.setSize(A,N)}},this.setEffects=function(A){_=A,v=_.length>0&&_[0].isRenderPass===!0;const N=c.width,D=c.height;for(let G=0;G<_.length;G++){const B=_[G];B.setSize&&B.setSize(N,D)}},this.begin=function(A,N){if(b||A.toneMapping===Yi&&_.length===0)return!1;if(R=N,N!==null){const D=N.width,G=N.height;(c.width!==D||c.height!==G)&&this.setSize(D,G)}return v===!1&&A.setRenderTarget(c),M=A.toneMapping,A.toneMapping=Yi,!0},this.hasRenderPass=function(){return v},this.end=function(A,N){A.toneMapping=M,b=!0;let D=c,G=d;for(let B=0;B<_.length;B++){const z=_[B];if(z.enabled!==!1&&(z.render(A,G,D,N),z.needsSwap!==!1)){const E=D;D=G,G=E}}if(S!==A.outputColorSpace||g!==A.toneMapping){S=A.outputColorSpace,g=A.toneMapping,m.defines={},Le.getTransfer(S)===Ve&&(m.defines.SRGB_TRANSFER="");const B=KT[g];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,A.setRenderTarget(R),A.render(h,x),R=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const Tx=new Pn,vp=new hl(1,1),Ax=new cx,Rx=new hb,Cx=new _x,bv=[],Ev=[],Tv=new Float32Array(16),Av=new Float32Array(9),Rv=new Float32Array(4);function eo(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=bv[l];if(c===void 0&&(c=new Float32Array(l),bv[l]=c),t!==0){s.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,r[d].toArray(c,p)}return c}function xn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Sn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Tu(r,t){let i=Ev[t];i===void 0&&(i=new Int32Array(t),Ev[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function JT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function $T(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2fv(this.addr,t),Sn(i,t)}}function tA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;r.uniform3fv(this.addr,t),Sn(i,t)}}function eA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4fv(this.addr,t),Sn(i,t)}}function nA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;Rv.set(s),r.uniformMatrix2fv(this.addr,!1,Rv),Sn(i,s)}}function iA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;Av.set(s),r.uniformMatrix3fv(this.addr,!1,Av),Sn(i,s)}}function aA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;Tv.set(s),r.uniformMatrix4fv(this.addr,!1,Tv),Sn(i,s)}}function sA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function rA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2iv(this.addr,t),Sn(i,t)}}function oA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;r.uniform3iv(this.addr,t),Sn(i,t)}}function lA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4iv(this.addr,t),Sn(i,t)}}function cA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function uA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2uiv(this.addr,t),Sn(i,t)}}function fA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;r.uniform3uiv(this.addr,t),Sn(i,t)}}function dA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4uiv(this.addr,t),Sn(i,t)}}function hA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(vp.compareFunction=i.isReversedDepthBuffer()?Up:Np,c=vp):c=Tx,i.setTexture2D(t||c,l)}function pA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Rx,l)}function mA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Cx,l)}function gA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Ax,l)}function _A(r){switch(r){case 5126:return JT;case 35664:return $T;case 35665:return tA;case 35666:return eA;case 35674:return nA;case 35675:return iA;case 35676:return aA;case 5124:case 35670:return sA;case 35667:case 35671:return rA;case 35668:case 35672:return oA;case 35669:case 35673:return lA;case 5125:return cA;case 36294:return uA;case 36295:return fA;case 36296:return dA;case 35678:case 36198:case 36298:case 36306:case 35682:return hA;case 35679:case 36299:case 36307:return pA;case 35680:case 36300:case 36308:case 36293:return mA;case 36289:case 36303:case 36311:case 36292:return gA}}function vA(r,t){r.uniform1fv(this.addr,t)}function xA(r,t){const i=eo(t,this.size,2);r.uniform2fv(this.addr,i)}function SA(r,t){const i=eo(t,this.size,3);r.uniform3fv(this.addr,i)}function yA(r,t){const i=eo(t,this.size,4);r.uniform4fv(this.addr,i)}function MA(r,t){const i=eo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function bA(r,t){const i=eo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function EA(r,t){const i=eo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function TA(r,t){r.uniform1iv(this.addr,t)}function AA(r,t){r.uniform2iv(this.addr,t)}function RA(r,t){r.uniform3iv(this.addr,t)}function CA(r,t){r.uniform4iv(this.addr,t)}function wA(r,t){r.uniform1uiv(this.addr,t)}function DA(r,t){r.uniform2uiv(this.addr,t)}function NA(r,t){r.uniform3uiv(this.addr,t)}function UA(r,t){r.uniform4uiv(this.addr,t)}function LA(r,t,i){const s=this.cache,l=t.length,c=Tu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=vp:d=Tx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,c[p])}function OA(r,t,i){const s=this.cache,l=t.length,c=Tu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Rx,c[d])}function PA(r,t,i){const s=this.cache,l=t.length,c=Tu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Cx,c[d])}function FA(r,t,i){const s=this.cache,l=t.length,c=Tu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Ax,c[d])}function IA(r){switch(r){case 5126:return vA;case 35664:return xA;case 35665:return SA;case 35666:return yA;case 35674:return MA;case 35675:return bA;case 35676:return EA;case 5124:case 35670:return TA;case 35667:case 35671:return AA;case 35668:case 35672:return RA;case 35669:case 35673:return CA;case 5125:return wA;case 36294:return DA;case 36295:return NA;case 36296:return UA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return OA;case 35680:case 36300:case 36308:case 36293:return PA;case 36289:case 36303:case 36311:case 36292:return FA}}class BA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=_A(i.type)}}class zA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=IA(i.type)}}class HA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const xh=/(\w+)(\])?(\[|\.)?/g;function Cv(r,t){r.seq.push(t),r.map[t.id]=t}function GA(r,t,i){const s=r.name,l=s.length;for(xh.lastIndex=0;;){const c=xh.exec(s),d=xh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){Cv(i,h===void 0?new BA(p,r,t):new zA(p,r,t));break}else{let S=i.map[p];S===void 0&&(S=new HA(p),Cv(i,S)),i=S}}}class du{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=t.getActiveUniform(i,d),m=t.getUniformLocation(i,p.name);GA(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function wv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const VA=37297;let kA=0;function XA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const Dv=new xe;function jA(r){Le._getMatrix(Dv,Le.workingColorSpace,r);const t=`mat3( ${Dv.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(r)){case hu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Nv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+XA(r.getShaderSource(t),p)}else return c}function WA(r,t){const i=jA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const qA={[Yv]:"Linear",[Zv]:"Reinhard",[Kv]:"Cineon",[Ep]:"ACESFilmic",[Jv]:"AgX",[$v]:"Neutral",[Qv]:"Custom"};function YA(r,t){const i=qA[t];return i===void 0?(le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const ru=new lt;function ZA(){Le.getLuminanceCoefficients(ru);const r=ru.x.toFixed(4),t=ru.y.toFixed(4),i=ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function QA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function JA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),d=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:r.getAttribLocation(t,d),locationSize:p}}return i}function cl(r){return r!==""}function Uv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $A=/^[ \t]*#include +<([\w\d./]+)>/gm;function xp(r){return r.replace($A,eR)}const tR=new Map;function eR(r,t){let i=Se[t];if(i===void 0){const s=tR.get(t);if(s!==void 0)i=Se[s],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return xp(i)}const nR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ov(r){return r.replace(nR,iR)}function iR(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Pv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const aR={[ou]:"SHADOWMAP_TYPE_PCF",[ll]:"SHADOWMAP_TYPE_VSM"};function sR(r){return aR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rR={[Vs]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE",[bu]:"ENVMAP_TYPE_CUBE_UV"};function oR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":rR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const lR={[Zr]:"ENVMAP_MODE_REFRACTION"};function cR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":lR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uR={[qv]:"ENVMAP_BLENDING_MULTIPLY",[jM]:"ENVMAP_BLENDING_MIX",[WM]:"ENVMAP_BLENDING_ADD"};function fR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":uR[r.combine]||"ENVMAP_BLENDING_NONE"}function dR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function hR(r,t,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=sR(i),h=oR(i),x=cR(i),S=fR(i),g=dR(i),b=KA(i),M=QA(c),R=l.createProgram();let _,v,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(cl).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(cl).join(`
`),v.length>0&&(v+=`
`)):(_=[Pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),v=[Pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?Se.tonemapping_pars_fragment:"",i.toneMapping!==Yi?YA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,WA("linearToOutputTexel",i.outputColorSpace),ZA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(cl).join(`
`)),d=xp(d),d=Uv(d,i),d=Lv(d,i),p=xp(p),p=Uv(p,i),p=Lv(p,i),d=Ov(d),p=Ov(p),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",i.glslVersion===G_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===G_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=A+_+d,D=A+v+p,G=wv(l,l.VERTEX_SHADER,N),B=wv(l,l.FRAGMENT_SHADER,D);l.attachShader(R,G),l.attachShader(R,B),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function z(H){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(R)||"",Y=l.getShaderInfoLog(G)||"",st=l.getShaderInfoLog(B)||"",et=q.trim(),U=Y.trim(),F=st.trim();let k=!0,nt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,G,B);else{const vt=Nv(l,G,"vertex"),I=Nv(l,B,"fragment");Ue("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+et+`
`+vt+`
`+I)}else et!==""?le("WebGLProgram: Program Info Log:",et):(U===""||F==="")&&(nt=!1);nt&&(H.diagnostics={runnable:k,programLog:et,vertexShader:{log:U,prefix:_},fragmentShader:{log:F,prefix:v}})}l.deleteShader(G),l.deleteShader(B),E=new du(l,R),O=JA(l,R)}let E;this.getUniforms=function(){return E===void 0&&z(this),E};let O;this.getAttributes=function(){return O===void 0&&z(this),O};let at=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return at===!1&&(at=l.getProgramParameter(R,VA)),at},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=kA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=G,this.fragmentShader=B,this}let pR=0;class mR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new gR(t),i.set(t,s)),s}}class gR{constructor(t){this.id=pR++,this.code=t,this.usedTimes=0}}function _R(r,t,i,s,l,c){const d=new ux,p=new mR,m=new Set,h=[],x=new Map,S=s.logarithmicDepthBuffer;let g=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return m.add(E),E===0?"uv":`uv${E}`}function R(E,O,at,H,q){const Y=H.fog,st=q.geometry,et=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,U=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,F=t.get(E.envMap||et,U),k=F&&F.mapping===bu?F.image.height:null,nt=b[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&le("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const vt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,I=vt!==void 0?vt.length:0;let X=0;st.morphAttributes.position!==void 0&&(X=1),st.morphAttributes.normal!==void 0&&(X=2),st.morphAttributes.color!==void 0&&(X=3);let $,pt,St,Z;if(nt){const Ne=ki[nt];$=Ne.vertexShader,pt=Ne.fragmentShader}else $=E.vertexShader,pt=E.fragmentShader,p.update(E),St=p.getVertexShaderID(E),Z=p.getFragmentShaderID(E);const V=r.getRenderTarget(),ft=r.state.buffers.depth.getReversed(),Mt=q.isInstancedMesh===!0,Dt=q.isBatchedMesh===!0,Pt=!!E.map,kt=!!E.matcap,Ot=!!F,Ft=!!E.aoMap,te=!!E.lightMap,Gt=!!E.bumpMap,ue=!!E.normalMap,W=!!E.displacementMap,Te=!!E.emissiveMap,me=!!E.metalnessMap,Ae=!!E.roughnessMap,Wt=E.anisotropy>0,P=E.clearcoat>0,T=E.dispersion>0,tt=E.iridescence>0,yt=E.sheen>0,At=E.transmission>0,mt=Wt&&!!E.anisotropyMap,Yt=P&&!!E.clearcoatMap,Ut=P&&!!E.clearcoatNormalMap,ee=P&&!!E.clearcoatRoughnessMap,ne=tt&&!!E.iridescenceMap,Ct=tt&&!!E.iridescenceThicknessMap,Rt=yt&&!!E.sheenColorMap,Vt=yt&&!!E.sheenRoughnessMap,Ht=!!E.specularMap,Xt=!!E.specularColorMap,ge=!!E.specularIntensityMap,J=At&&!!E.transmissionMap,Lt=At&&!!E.thicknessMap,Nt=!!E.gradientMap,jt=!!E.alphaMap,wt=E.alphaTest>0,xt=!!E.alphaHash,Zt=!!E.extensions;let ce=Yi;E.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ce=r.toneMapping);const ze={shaderID:nt,shaderType:E.type,shaderName:E.name,vertexShader:$,fragmentShader:pt,defines:E.defines,customVertexShaderID:St,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Dt,batchingColor:Dt&&q._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&q.instanceColor!==null,instancingMorph:Mt&&q.morphTexture!==null,outputColorSpace:V===null?r.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Qr,alphaToCoverage:!!E.alphaToCoverage,map:Pt,matcap:kt,envMap:Ot,envMapMode:Ot&&F.mapping,envMapCubeUVHeight:k,aoMap:Ft,lightMap:te,bumpMap:Gt,normalMap:ue,displacementMap:W,emissiveMap:Te,normalMapObjectSpace:ue&&E.normalMapType===KM,normalMapTangentSpace:ue&&E.normalMapType===ZM,metalnessMap:me,roughnessMap:Ae,anisotropy:Wt,anisotropyMap:mt,clearcoat:P,clearcoatMap:Yt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:ee,dispersion:T,iridescence:tt,iridescenceMap:ne,iridescenceThicknessMap:Ct,sheen:yt,sheenColorMap:Rt,sheenRoughnessMap:Vt,specularMap:Ht,specularColorMap:Xt,specularIntensityMap:ge,transmission:At,transmissionMap:J,thicknessMap:Lt,gradientMap:Nt,opaque:E.transparent===!1&&E.blending===jr&&E.alphaToCoverage===!1,alphaMap:jt,alphaTest:wt,alphaHash:xt,combine:E.combine,mapUv:Pt&&M(E.map.channel),aoMapUv:Ft&&M(E.aoMap.channel),lightMapUv:te&&M(E.lightMap.channel),bumpMapUv:Gt&&M(E.bumpMap.channel),normalMapUv:ue&&M(E.normalMap.channel),displacementMapUv:W&&M(E.displacementMap.channel),emissiveMapUv:Te&&M(E.emissiveMap.channel),metalnessMapUv:me&&M(E.metalnessMap.channel),roughnessMapUv:Ae&&M(E.roughnessMap.channel),anisotropyMapUv:mt&&M(E.anisotropyMap.channel),clearcoatMapUv:Yt&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&M(E.sheenRoughnessMap.channel),specularMapUv:Ht&&M(E.specularMap.channel),specularColorMapUv:Xt&&M(E.specularColorMap.channel),specularIntensityMapUv:ge&&M(E.specularIntensityMap.channel),transmissionMapUv:J&&M(E.transmissionMap.channel),thicknessMapUv:Lt&&M(E.thicknessMap.channel),alphaMapUv:jt&&M(E.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(ue||Wt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!st.attributes.uv&&(Pt||jt),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||st.attributes.normal===void 0&&ue===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:ft,skinning:q.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:X,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&at.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:Pt&&E.map.isVideoTexture===!0&&Le.getTransfer(E.map.colorSpace)===Ve,decodeVideoTextureEmissive:Te&&E.emissiveMap.isVideoTexture===!0&&Le.getTransfer(E.emissiveMap.colorSpace)===Ve,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Xi,flipSided:E.side===Kn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Zt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&E.extensions.multiDraw===!0||Dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ze.vertexUv1s=m.has(1),ze.vertexUv2s=m.has(2),ze.vertexUv3s=m.has(3),m.clear(),ze}function _(E){const O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(const at in E.defines)O.push(at),O.push(E.defines[at]);return E.isRawShaderMaterial===!1&&(v(O,E),A(O,E),O.push(r.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function v(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function A(E,O){d.disableAll(),O.instancing&&d.enable(0),O.instancingColor&&d.enable(1),O.instancingMorph&&d.enable(2),O.matcap&&d.enable(3),O.envMap&&d.enable(4),O.normalMapObjectSpace&&d.enable(5),O.normalMapTangentSpace&&d.enable(6),O.clearcoat&&d.enable(7),O.iridescence&&d.enable(8),O.alphaTest&&d.enable(9),O.vertexColors&&d.enable(10),O.vertexAlphas&&d.enable(11),O.vertexUv1s&&d.enable(12),O.vertexUv2s&&d.enable(13),O.vertexUv3s&&d.enable(14),O.vertexTangents&&d.enable(15),O.anisotropy&&d.enable(16),O.alphaHash&&d.enable(17),O.batching&&d.enable(18),O.dispersion&&d.enable(19),O.batchingColor&&d.enable(20),O.gradientMap&&d.enable(21),E.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.reversedDepthBuffer&&d.enable(4),O.skinning&&d.enable(5),O.morphTargets&&d.enable(6),O.morphNormals&&d.enable(7),O.morphColors&&d.enable(8),O.premultipliedAlpha&&d.enable(9),O.shadowMapEnabled&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.decodeVideoTextureEmissive&&d.enable(20),O.alphaToCoverage&&d.enable(21),E.push(d.mask)}function N(E){const O=b[E.type];let at;if(O){const H=ki[O];at=Ib.clone(H.uniforms)}else at=E.uniforms;return at}function D(E,O){let at=x.get(O);return at!==void 0?++at.usedTimes:(at=new hR(r,O,E,l),h.push(at),x.set(O,at)),at}function G(E){if(--E.usedTimes===0){const O=h.indexOf(E);h[O]=h[h.length-1],h.pop(),x.delete(E.cacheKey),E.destroy()}}function B(E){p.remove(E)}function z(){p.dispose()}return{getParameters:R,getProgramCacheKey:_,getUniforms:N,acquireProgram:D,releaseProgram:G,releaseShaderCache:B,programs:h,dispose:z}}function vR(){let r=new WeakMap;function t(d){return r.has(d)}function i(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,m){r.get(d)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function xR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Fv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Iv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function p(g,b,M,R,_,v){let A=r[t];return A===void 0?(A={id:g.id,object:g,geometry:b,material:M,materialVariant:d(g),groupOrder:R,renderOrder:g.renderOrder,z:_,group:v},r[t]=A):(A.id=g.id,A.object=g,A.geometry=b,A.material=M,A.materialVariant=d(g),A.groupOrder=R,A.renderOrder=g.renderOrder,A.z=_,A.group=v),t++,A}function m(g,b,M,R,_,v){const A=p(g,b,M,R,_,v);M.transmission>0?s.push(A):M.transparent===!0?l.push(A):i.push(A)}function h(g,b,M,R,_,v){const A=p(g,b,M,R,_,v);M.transmission>0?s.unshift(A):M.transparent===!0?l.unshift(A):i.unshift(A)}function x(g,b){i.length>1&&i.sort(g||xR),s.length>1&&s.sort(b||Fv),l.length>1&&l.sort(b||Fv)}function S(){for(let g=t,b=r.length;g<b;g++){const M=r[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:S,sort:x}}function SR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let d;return c===void 0?(d=new Iv,r.set(s,[d])):l>=c.length?(d=new Iv,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:t,dispose:i}}function yR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new lt,color:new ye};break;case"SpotLight":i={position:new lt,direction:new lt,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new lt,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new lt,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return r[t.id]=i,i}}}function MR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let bR=0;function ER(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function TR(r){const t=new yR,i=MR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new lt);const l=new lt,c=new Ke,d=new Ke;function p(h){let x=0,S=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let b=0,M=0,R=0,_=0,v=0,A=0,N=0,D=0,G=0,B=0,z=0;h.sort(ER);for(let O=0,at=h.length;O<at;O++){const H=h[O],q=H.color,Y=H.intensity,st=H.distance;let et=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Kr?et=H.shadow.map.texture:et=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)x+=q.r*Y,S+=q.g*Y,g+=q.b*Y;else if(H.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(H.sh.coefficients[U],Y);z++}else if(H.isDirectionalLight){const U=t.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const F=H.shadow,k=i.get(H);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,s.directionalShadow[b]=k,s.directionalShadowMap[b]=et,s.directionalShadowMatrix[b]=H.shadow.matrix,A++}s.directional[b]=U,b++}else if(H.isSpotLight){const U=t.get(H);U.position.setFromMatrixPosition(H.matrixWorld),U.color.copy(q).multiplyScalar(Y),U.distance=st,U.coneCos=Math.cos(H.angle),U.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),U.decay=H.decay,s.spot[R]=U;const F=H.shadow;if(H.map&&(s.spotLightMap[G]=H.map,G++,F.updateMatrices(H),H.castShadow&&B++),s.spotLightMatrix[R]=F.matrix,H.castShadow){const k=i.get(H);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,s.spotShadow[R]=k,s.spotShadowMap[R]=et,D++}R++}else if(H.isRectAreaLight){const U=t.get(H);U.color.copy(q).multiplyScalar(Y),U.halfWidth.set(H.width*.5,0,0),U.halfHeight.set(0,H.height*.5,0),s.rectArea[_]=U,_++}else if(H.isPointLight){const U=t.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity),U.distance=H.distance,U.decay=H.decay,H.castShadow){const F=H.shadow,k=i.get(H);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,k.shadowCameraNear=F.camera.near,k.shadowCameraFar=F.camera.far,s.pointShadow[M]=k,s.pointShadowMap[M]=et,s.pointShadowMatrix[M]=H.shadow.matrix,N++}s.point[M]=U,M++}else if(H.isHemisphereLight){const U=t.get(H);U.skyColor.copy(H.color).multiplyScalar(Y),U.groundColor.copy(H.groundColor).multiplyScalar(Y),s.hemi[v]=U,v++}}_>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=zt.LTC_FLOAT_1,s.rectAreaLTC2=zt.LTC_FLOAT_2):(s.rectAreaLTC1=zt.LTC_HALF_1,s.rectAreaLTC2=zt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=S,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==b||E.pointLength!==M||E.spotLength!==R||E.rectAreaLength!==_||E.hemiLength!==v||E.numDirectionalShadows!==A||E.numPointShadows!==N||E.numSpotShadows!==D||E.numSpotMaps!==G||E.numLightProbes!==z)&&(s.directional.length=b,s.spot.length=R,s.rectArea.length=_,s.point.length=M,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=D+G-B,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,E.directionalLength=b,E.pointLength=M,E.spotLength=R,E.rectAreaLength=_,E.hemiLength=v,E.numDirectionalShadows=A,E.numPointShadows=N,E.numSpotShadows=D,E.numSpotMaps=G,E.numLightProbes=z,s.version=bR++)}function m(h,x){let S=0,g=0,b=0,M=0,R=0;const _=x.matrixWorldInverse;for(let v=0,A=h.length;v<A;v++){const N=h[v];if(N.isDirectionalLight){const D=s.directional[S];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(_),S++}else if(N.isSpotLight){const D=s.spot[b];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(_),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(_),b++}else if(N.isRectAreaLight){const D=s.rectArea[M];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(_),d.identity(),c.copy(N.matrixWorld),c.premultiply(_),d.extractRotation(c),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),M++}else if(N.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(_),g++}else if(N.isHemisphereLight){const D=s.hemi[R];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(_),R++}}}return{setup:p,setupView:m,state:s}}function Bv(r){const t=new TR(r),i=[],s=[];function l(x){h.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function d(x){s.push(x)}function p(){t.setup(i)}function m(x){t.setupView(i,x)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function AR(r){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new Bv(r),t.set(l,[p])):c>=d.length?(p=new Bv(r),d.push(p)):p=d[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const RR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CR=`uniform sampler2D shadow_pass;
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
}`,wR=[new lt(1,0,0),new lt(-1,0,0),new lt(0,1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1)],DR=[new lt(0,-1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1),new lt(0,-1,0),new lt(0,-1,0)],zv=new Ke,sl=new lt,Sh=new lt;function NR(r,t,i){let s=new Ip;const l=new Ee,c=new Ee,d=new an,p=new Gb,m=new Vb,h={},x=i.maxTextureSize,S={[fs]:Kn,[Kn]:fs,[Xi]:Xi},g=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:RR,fragmentShader:CR}),b=g.clone();b.defines.HORIZONTAL_PASS=1;const M=new Fn;M.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Qi(M,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ou;let v=this.type;this.render=function(B,z,E){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||B.length===0)return;this.type===AM&&(le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ou);const O=r.getRenderTarget(),at=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Ea),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Y=v!==this.type;Y&&z.traverse(function(st){st.material&&(Array.isArray(st.material)?st.material.forEach(et=>et.needsUpdate=!0):st.material.needsUpdate=!0)});for(let st=0,et=B.length;st<et;st++){const U=B[st],F=U.shadow;if(F===void 0){le("WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const k=F.getFrameExtents();l.multiply(k),c.copy(F.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/k.x),l.x=c.x*k.x,F.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/k.y),l.y=c.y*k.y,F.mapSize.y=c.y));const nt=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=nt,F.map===null||Y===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ll){if(U.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Zi(l.x,l.y,{format:Kr,type:Aa,minFilter:On,magFilter:On,generateMipmaps:!1}),F.map.texture.name=U.name+".shadowMap",F.map.depthTexture=new hl(l.x,l.y,Wi),F.map.depthTexture.name=U.name+".shadowMapDepth",F.map.depthTexture.format=Ra,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Rn,F.map.depthTexture.magFilter=Rn}else U.isPointLight?(F.map=new Ex(l.x),F.map.depthTexture=new Pb(l.x,Ki)):(F.map=new Zi(l.x,l.y),F.map.depthTexture=new hl(l.x,l.y,Ki)),F.map.depthTexture.name=U.name+".shadowMap",F.map.depthTexture.format=Ra,this.type===ou?(F.map.depthTexture.compareFunction=nt?Up:Np,F.map.depthTexture.minFilter=On,F.map.depthTexture.magFilter=On):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Rn,F.map.depthTexture.magFilter=Rn);F.camera.updateProjectionMatrix()}const vt=F.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<vt;I++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,I),r.clear();else{I===0&&(r.setRenderTarget(F.map),r.clear());const X=F.getViewport(I);d.set(c.x*X.x,c.y*X.y,c.x*X.z,c.y*X.w),q.viewport(d)}if(U.isPointLight){const X=F.camera,$=F.matrix,pt=U.distance||X.far;pt!==X.far&&(X.far=pt,X.updateProjectionMatrix()),sl.setFromMatrixPosition(U.matrixWorld),X.position.copy(sl),Sh.copy(X.position),Sh.add(wR[I]),X.up.copy(DR[I]),X.lookAt(Sh),X.updateMatrixWorld(),$.makeTranslation(-sl.x,-sl.y,-sl.z),zv.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),F._frustum.setFromProjectionMatrix(zv,X.coordinateSystem,X.reversedDepth)}else F.updateMatrices(U);s=F.getFrustum(),D(z,E,F.camera,U,this.type)}F.isPointLightShadow!==!0&&this.type===ll&&A(F,E),F.needsUpdate=!1}v=this.type,_.needsUpdate=!1,r.setRenderTarget(O,at,H)};function A(B,z){const E=t.update(R);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,b.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Zi(l.x,l.y,{format:Kr,type:Aa})),g.uniforms.shadow_pass.value=B.map.depthTexture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(z,null,E,g,R,null),b.uniforms.shadow_pass.value=B.mapPass.texture,b.uniforms.resolution.value=B.mapSize,b.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(z,null,E,b,R,null)}function N(B,z,E,O){let at=null;const H=E.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)at=H;else if(at=E.isPointLight===!0?m:p,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const q=at.uuid,Y=z.uuid;let st=h[q];st===void 0&&(st={},h[q]=st);let et=st[Y];et===void 0&&(et=at.clone(),st[Y]=et,z.addEventListener("dispose",G)),at=et}if(at.visible=z.visible,at.wireframe=z.wireframe,O===ll?at.side=z.shadowSide!==null?z.shadowSide:z.side:at.side=z.shadowSide!==null?z.shadowSide:S[z.side],at.alphaMap=z.alphaMap,at.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,at.map=z.map,at.clipShadows=z.clipShadows,at.clippingPlanes=z.clippingPlanes,at.clipIntersection=z.clipIntersection,at.displacementMap=z.displacementMap,at.displacementScale=z.displacementScale,at.displacementBias=z.displacementBias,at.wireframeLinewidth=z.wireframeLinewidth,at.linewidth=z.linewidth,E.isPointLight===!0&&at.isMeshDistanceMaterial===!0){const q=r.properties.get(at);q.light=E}return at}function D(B,z,E,O,at){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&at===ll)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,B.matrixWorld);const Y=t.update(B),st=B.material;if(Array.isArray(st)){const et=Y.groups;for(let U=0,F=et.length;U<F;U++){const k=et[U],nt=st[k.materialIndex];if(nt&&nt.visible){const vt=N(B,nt,O,at);B.onBeforeShadow(r,B,z,E,Y,vt,k),r.renderBufferDirect(E,null,Y,vt,B,k),B.onAfterShadow(r,B,z,E,Y,vt,k)}}}else if(st.visible){const et=N(B,st,O,at);B.onBeforeShadow(r,B,z,E,Y,et,null),r.renderBufferDirect(E,null,Y,et,B,null),B.onAfterShadow(r,B,z,E,Y,et,null)}}const q=B.children;for(let Y=0,st=q.length;Y<st;Y++)D(q[Y],z,E,O,at)}function G(B){B.target.removeEventListener("dispose",G);for(const E in h){const O=h[E],at=B.target.uuid;at in O&&(O[at].dispose(),delete O[at])}}}function UR(r,t){function i(){let J=!1;const Lt=new an;let Nt=null;const jt=new an(0,0,0,0);return{setMask:function(wt){Nt!==wt&&!J&&(r.colorMask(wt,wt,wt,wt),Nt=wt)},setLocked:function(wt){J=wt},setClear:function(wt,xt,Zt,ce,ze){ze===!0&&(wt*=ce,xt*=ce,Zt*=ce),Lt.set(wt,xt,Zt,ce),jt.equals(Lt)===!1&&(r.clearColor(wt,xt,Zt,ce),jt.copy(Lt))},reset:function(){J=!1,Nt=null,jt.set(-1,0,0,0)}}}function s(){let J=!1,Lt=!1,Nt=null,jt=null,wt=null;return{setReversed:function(xt){if(Lt!==xt){const Zt=t.get("EXT_clip_control");xt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Lt=xt;const ce=wt;wt=null,this.setClear(ce)}},getReversed:function(){return Lt},setTest:function(xt){xt?V(r.DEPTH_TEST):ft(r.DEPTH_TEST)},setMask:function(xt){Nt!==xt&&!J&&(r.depthMask(xt),Nt=xt)},setFunc:function(xt){if(Lt&&(xt=rb[xt]),jt!==xt){switch(xt){case Rh:r.depthFunc(r.NEVER);break;case Ch:r.depthFunc(r.ALWAYS);break;case wh:r.depthFunc(r.LESS);break;case Yr:r.depthFunc(r.LEQUAL);break;case Dh:r.depthFunc(r.EQUAL);break;case Nh:r.depthFunc(r.GEQUAL);break;case Uh:r.depthFunc(r.GREATER);break;case Lh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}jt=xt}},setLocked:function(xt){J=xt},setClear:function(xt){wt!==xt&&(wt=xt,Lt&&(xt=1-xt),r.clearDepth(xt))},reset:function(){J=!1,Nt=null,jt=null,wt=null,Lt=!1}}}function l(){let J=!1,Lt=null,Nt=null,jt=null,wt=null,xt=null,Zt=null,ce=null,ze=null;return{setTest:function(Ne){J||(Ne?V(r.STENCIL_TEST):ft(r.STENCIL_TEST))},setMask:function(Ne){Lt!==Ne&&!J&&(r.stencilMask(Ne),Lt=Ne)},setFunc:function(Ne,In,Mi){(Nt!==Ne||jt!==In||wt!==Mi)&&(r.stencilFunc(Ne,In,Mi),Nt=Ne,jt=In,wt=Mi)},setOp:function(Ne,In,Mi){(xt!==Ne||Zt!==In||ce!==Mi)&&(r.stencilOp(Ne,In,Mi),xt=Ne,Zt=In,ce=Mi)},setLocked:function(Ne){J=Ne},setClear:function(Ne){ze!==Ne&&(r.clearStencil(Ne),ze=Ne)},reset:function(){J=!1,Lt=null,Nt=null,jt=null,wt=null,xt=null,Zt=null,ce=null,ze=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let x={},S={},g=new WeakMap,b=[],M=null,R=!1,_=null,v=null,A=null,N=null,D=null,G=null,B=null,z=new ye(0,0,0),E=0,O=!1,at=null,H=null,q=null,Y=null,st=null;const et=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,F=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(k)[1]),U=F>=1):k.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),U=F>=2);let nt=null,vt={};const I=r.getParameter(r.SCISSOR_BOX),X=r.getParameter(r.VIEWPORT),$=new an().fromArray(I),pt=new an().fromArray(X);function St(J,Lt,Nt,jt){const wt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(J,xt),r.texParameteri(J,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(J,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Zt=0;Zt<Nt;Zt++)J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?r.texImage3D(Lt,0,r.RGBA,1,1,jt,0,r.RGBA,r.UNSIGNED_BYTE,wt):r.texImage2D(Lt+Zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,wt);return xt}const Z={};Z[r.TEXTURE_2D]=St(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=St(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=St(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=St(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),V(r.DEPTH_TEST),d.setFunc(Yr),Gt(!1),ue(F_),V(r.CULL_FACE),Ft(Ea);function V(J){x[J]!==!0&&(r.enable(J),x[J]=!0)}function ft(J){x[J]!==!1&&(r.disable(J),x[J]=!1)}function Mt(J,Lt){return S[J]!==Lt?(r.bindFramebuffer(J,Lt),S[J]=Lt,J===r.DRAW_FRAMEBUFFER&&(S[r.FRAMEBUFFER]=Lt),J===r.FRAMEBUFFER&&(S[r.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Dt(J,Lt){let Nt=b,jt=!1;if(J){Nt=g.get(Lt),Nt===void 0&&(Nt=[],g.set(Lt,Nt));const wt=J.textures;if(Nt.length!==wt.length||Nt[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,Zt=wt.length;xt<Zt;xt++)Nt[xt]=r.COLOR_ATTACHMENT0+xt;Nt.length=wt.length,jt=!0}}else Nt[0]!==r.BACK&&(Nt[0]=r.BACK,jt=!0);jt&&r.drawBuffers(Nt)}function Pt(J){return M!==J?(r.useProgram(J),M=J,!0):!1}const kt={[Bs]:r.FUNC_ADD,[CM]:r.FUNC_SUBTRACT,[wM]:r.FUNC_REVERSE_SUBTRACT};kt[DM]=r.MIN,kt[NM]=r.MAX;const Ot={[UM]:r.ZERO,[LM]:r.ONE,[OM]:r.SRC_COLOR,[Th]:r.SRC_ALPHA,[HM]:r.SRC_ALPHA_SATURATE,[BM]:r.DST_COLOR,[FM]:r.DST_ALPHA,[PM]:r.ONE_MINUS_SRC_COLOR,[Ah]:r.ONE_MINUS_SRC_ALPHA,[zM]:r.ONE_MINUS_DST_COLOR,[IM]:r.ONE_MINUS_DST_ALPHA,[GM]:r.CONSTANT_COLOR,[VM]:r.ONE_MINUS_CONSTANT_COLOR,[kM]:r.CONSTANT_ALPHA,[XM]:r.ONE_MINUS_CONSTANT_ALPHA};function Ft(J,Lt,Nt,jt,wt,xt,Zt,ce,ze,Ne){if(J===Ea){R===!0&&(ft(r.BLEND),R=!1);return}if(R===!1&&(V(r.BLEND),R=!0),J!==RM){if(J!==_||Ne!==O){if((v!==Bs||D!==Bs)&&(r.blendEquation(r.FUNC_ADD),v=Bs,D=Bs),Ne)switch(J){case jr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case I_:r.blendFunc(r.ONE,r.ONE);break;case B_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case z_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ue("WebGLState: Invalid blending: ",J);break}else switch(J){case jr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case I_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case B_:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case z_:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",J);break}A=null,N=null,G=null,B=null,z.set(0,0,0),E=0,_=J,O=Ne}return}wt=wt||Lt,xt=xt||Nt,Zt=Zt||jt,(Lt!==v||wt!==D)&&(r.blendEquationSeparate(kt[Lt],kt[wt]),v=Lt,D=wt),(Nt!==A||jt!==N||xt!==G||Zt!==B)&&(r.blendFuncSeparate(Ot[Nt],Ot[jt],Ot[xt],Ot[Zt]),A=Nt,N=jt,G=xt,B=Zt),(ce.equals(z)===!1||ze!==E)&&(r.blendColor(ce.r,ce.g,ce.b,ze),z.copy(ce),E=ze),_=J,O=!1}function te(J,Lt){J.side===Xi?ft(r.CULL_FACE):V(r.CULL_FACE);let Nt=J.side===Kn;Lt&&(Nt=!Nt),Gt(Nt),J.blending===jr&&J.transparent===!1?Ft(Ea):Ft(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),d.setFunc(J.depthFunc),d.setTest(J.depthTest),d.setMask(J.depthWrite),c.setMask(J.colorWrite);const jt=J.stencilWrite;p.setTest(jt),jt&&(p.setMask(J.stencilWriteMask),p.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),p.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Te(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?V(r.SAMPLE_ALPHA_TO_COVERAGE):ft(r.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(J){at!==J&&(J?r.frontFace(r.CW):r.frontFace(r.CCW),at=J)}function ue(J){J!==EM?(V(r.CULL_FACE),J!==H&&(J===F_?r.cullFace(r.BACK):J===TM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ft(r.CULL_FACE),H=J}function W(J){J!==q&&(U&&r.lineWidth(J),q=J)}function Te(J,Lt,Nt){J?(V(r.POLYGON_OFFSET_FILL),(Y!==Lt||st!==Nt)&&(Y=Lt,st=Nt,d.getReversed()&&(Lt=-Lt),r.polygonOffset(Lt,Nt))):ft(r.POLYGON_OFFSET_FILL)}function me(J){J?V(r.SCISSOR_TEST):ft(r.SCISSOR_TEST)}function Ae(J){J===void 0&&(J=r.TEXTURE0+et-1),nt!==J&&(r.activeTexture(J),nt=J)}function Wt(J,Lt,Nt){Nt===void 0&&(nt===null?Nt=r.TEXTURE0+et-1:Nt=nt);let jt=vt[Nt];jt===void 0&&(jt={type:void 0,texture:void 0},vt[Nt]=jt),(jt.type!==J||jt.texture!==Lt)&&(nt!==Nt&&(r.activeTexture(Nt),nt=Nt),r.bindTexture(J,Lt||Z[J]),jt.type=J,jt.texture=Lt)}function P(){const J=vt[nt];J!==void 0&&J.type!==void 0&&(r.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function tt(){try{r.compressedTexImage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function yt(){try{r.texSubImage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function At(){try{r.texSubImage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function mt(){try{r.compressedTexSubImage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function Yt(){try{r.compressedTexSubImage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function Ut(){try{r.texStorage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function ee(){try{r.texStorage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function ne(){try{r.texImage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function Ct(){try{r.texImage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function Rt(J){$.equals(J)===!1&&(r.scissor(J.x,J.y,J.z,J.w),$.copy(J))}function Vt(J){pt.equals(J)===!1&&(r.viewport(J.x,J.y,J.z,J.w),pt.copy(J))}function Ht(J,Lt){let Nt=h.get(Lt);Nt===void 0&&(Nt=new WeakMap,h.set(Lt,Nt));let jt=Nt.get(J);jt===void 0&&(jt=r.getUniformBlockIndex(Lt,J.name),Nt.set(J,jt))}function Xt(J,Lt){const jt=h.get(Lt).get(J);m.get(Lt)!==jt&&(r.uniformBlockBinding(Lt,jt,J.__bindingPointIndex),m.set(Lt,jt))}function ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),x={},nt=null,vt={},S={},g=new WeakMap,b=[],M=null,R=!1,_=null,v=null,A=null,N=null,D=null,G=null,B=null,z=new ye(0,0,0),E=0,O=!1,at=null,H=null,q=null,Y=null,st=null,$.set(0,0,r.canvas.width,r.canvas.height),pt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:V,disable:ft,bindFramebuffer:Mt,drawBuffers:Dt,useProgram:Pt,setBlending:Ft,setMaterial:te,setFlipSided:Gt,setCullFace:ue,setLineWidth:W,setPolygonOffset:Te,setScissorTest:me,activeTexture:Ae,bindTexture:Wt,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:tt,texImage2D:ne,texImage3D:Ct,updateUBOMapping:Ht,uniformBlockBinding:Xt,texStorage2D:Ut,texStorage3D:ee,texSubImage2D:yt,texSubImage3D:At,compressedTexSubImage2D:mt,compressedTexSubImage3D:Yt,scissor:Rt,viewport:Vt,reset:ge}}function LR(r,t,i,s,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ee,x=new WeakMap;let S;const g=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,T){return b?new OffscreenCanvas(P,T):pu("canvas")}function R(P,T,tt){let yt=1;const At=Wt(P);if((At.width>tt||At.height>tt)&&(yt=tt/Math.max(At.width,At.height)),yt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const mt=Math.floor(yt*At.width),Yt=Math.floor(yt*At.height);S===void 0&&(S=M(mt,Yt));const Ut=T?M(mt,Yt):S;return Ut.width=mt,Ut.height=Yt,Ut.getContext("2d").drawImage(P,0,0,mt,Yt),le("WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+mt+"x"+Yt+")."),Ut}else return"data"in P&&le("WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),P;return P}function _(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(P,T,tt,yt,At=!1){if(P!==null){if(r[P]!==void 0)return r[P];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let mt=T;if(T===r.RED&&(tt===r.FLOAT&&(mt=r.R32F),tt===r.HALF_FLOAT&&(mt=r.R16F),tt===r.UNSIGNED_BYTE&&(mt=r.R8)),T===r.RED_INTEGER&&(tt===r.UNSIGNED_BYTE&&(mt=r.R8UI),tt===r.UNSIGNED_SHORT&&(mt=r.R16UI),tt===r.UNSIGNED_INT&&(mt=r.R32UI),tt===r.BYTE&&(mt=r.R8I),tt===r.SHORT&&(mt=r.R16I),tt===r.INT&&(mt=r.R32I)),T===r.RG&&(tt===r.FLOAT&&(mt=r.RG32F),tt===r.HALF_FLOAT&&(mt=r.RG16F),tt===r.UNSIGNED_BYTE&&(mt=r.RG8)),T===r.RG_INTEGER&&(tt===r.UNSIGNED_BYTE&&(mt=r.RG8UI),tt===r.UNSIGNED_SHORT&&(mt=r.RG16UI),tt===r.UNSIGNED_INT&&(mt=r.RG32UI),tt===r.BYTE&&(mt=r.RG8I),tt===r.SHORT&&(mt=r.RG16I),tt===r.INT&&(mt=r.RG32I)),T===r.RGB_INTEGER&&(tt===r.UNSIGNED_BYTE&&(mt=r.RGB8UI),tt===r.UNSIGNED_SHORT&&(mt=r.RGB16UI),tt===r.UNSIGNED_INT&&(mt=r.RGB32UI),tt===r.BYTE&&(mt=r.RGB8I),tt===r.SHORT&&(mt=r.RGB16I),tt===r.INT&&(mt=r.RGB32I)),T===r.RGBA_INTEGER&&(tt===r.UNSIGNED_BYTE&&(mt=r.RGBA8UI),tt===r.UNSIGNED_SHORT&&(mt=r.RGBA16UI),tt===r.UNSIGNED_INT&&(mt=r.RGBA32UI),tt===r.BYTE&&(mt=r.RGBA8I),tt===r.SHORT&&(mt=r.RGBA16I),tt===r.INT&&(mt=r.RGBA32I)),T===r.RGB&&(tt===r.UNSIGNED_INT_5_9_9_9_REV&&(mt=r.RGB9_E5),tt===r.UNSIGNED_INT_10F_11F_11F_REV&&(mt=r.R11F_G11F_B10F)),T===r.RGBA){const Yt=At?hu:Le.getTransfer(yt);tt===r.FLOAT&&(mt=r.RGBA32F),tt===r.HALF_FLOAT&&(mt=r.RGBA16F),tt===r.UNSIGNED_BYTE&&(mt=Yt===Ve?r.SRGB8_ALPHA8:r.RGBA8),tt===r.UNSIGNED_SHORT_4_4_4_4&&(mt=r.RGBA4),tt===r.UNSIGNED_SHORT_5_5_5_1&&(mt=r.RGB5_A1)}return(mt===r.R16F||mt===r.R32F||mt===r.RG16F||mt===r.RG32F||mt===r.RGBA16F||mt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function D(P,T){let tt;return P?T===null||T===Ki||T===fl?tt=r.DEPTH24_STENCIL8:T===Wi?tt=r.DEPTH32F_STENCIL8:T===ul&&(tt=r.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ki||T===fl?tt=r.DEPTH_COMPONENT24:T===Wi?tt=r.DEPTH_COMPONENT32F:T===ul&&(tt=r.DEPTH_COMPONENT16),tt}function G(P,T){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Rn&&P.minFilter!==On?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function B(P){const T=P.target;T.removeEventListener("dispose",B),E(T),T.isVideoTexture&&x.delete(T)}function z(P){const T=P.target;T.removeEventListener("dispose",z),at(T)}function E(P){const T=s.get(P);if(T.__webglInit===void 0)return;const tt=P.source,yt=g.get(tt);if(yt){const At=yt[T.__cacheKey];At.usedTimes--,At.usedTimes===0&&O(P),Object.keys(yt).length===0&&g.delete(tt)}s.remove(P)}function O(P){const T=s.get(P);r.deleteTexture(T.__webglTexture);const tt=P.source,yt=g.get(tt);delete yt[T.__cacheKey],d.memory.textures--}function at(P){const T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(T.__webglFramebuffer[yt]))for(let At=0;At<T.__webglFramebuffer[yt].length;At++)r.deleteFramebuffer(T.__webglFramebuffer[yt][At]);else r.deleteFramebuffer(T.__webglFramebuffer[yt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[yt])}else{if(Array.isArray(T.__webglFramebuffer))for(let yt=0;yt<T.__webglFramebuffer.length;yt++)r.deleteFramebuffer(T.__webglFramebuffer[yt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let yt=0;yt<T.__webglColorRenderbuffer.length;yt++)T.__webglColorRenderbuffer[yt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[yt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=P.textures;for(let yt=0,At=tt.length;yt<At;yt++){const mt=s.get(tt[yt]);mt.__webglTexture&&(r.deleteTexture(mt.__webglTexture),d.memory.textures--),s.remove(tt[yt])}s.remove(P)}let H=0;function q(){H=0}function Y(){const P=H;return P>=l.maxTextures&&le("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),H+=1,P}function st(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function et(P,T){const tt=s.get(P);if(P.isVideoTexture&&me(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&tt.__version!==P.version){const yt=P.image;if(yt===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(tt,P,T);return}}else P.isExternalTexture&&(tt.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,tt.__webglTexture,r.TEXTURE0+T)}function U(P,T){const tt=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&tt.__version!==P.version){Z(tt,P,T);return}else P.isExternalTexture&&(tt.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,tt.__webglTexture,r.TEXTURE0+T)}function F(P,T){const tt=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&tt.__version!==P.version){Z(tt,P,T);return}i.bindTexture(r.TEXTURE_3D,tt.__webglTexture,r.TEXTURE0+T)}function k(P,T){const tt=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&tt.__version!==P.version){V(tt,P,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture,r.TEXTURE0+T)}const nt={[Oh]:r.REPEAT,[ba]:r.CLAMP_TO_EDGE,[Ph]:r.MIRRORED_REPEAT},vt={[Rn]:r.NEAREST,[qM]:r.NEAREST_MIPMAP_NEAREST,[Nc]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[Gd]:r.LINEAR_MIPMAP_NEAREST,[Hs]:r.LINEAR_MIPMAP_LINEAR},I={[QM]:r.NEVER,[nb]:r.ALWAYS,[JM]:r.LESS,[Np]:r.LEQUAL,[$M]:r.EQUAL,[Up]:r.GEQUAL,[tb]:r.GREATER,[eb]:r.NOTEQUAL};function X(P,T){if(T.type===Wi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===On||T.magFilter===Gd||T.magFilter===Nc||T.magFilter===Hs||T.minFilter===On||T.minFilter===Gd||T.minFilter===Nc||T.minFilter===Hs)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,nt[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,nt[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,nt[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,vt[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,vt[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Rn||T.minFilter!==Nc&&T.minFilter!==Hs||T.type===Wi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function $(P,T){let tt=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",B));const yt=T.source;let At=g.get(yt);At===void 0&&(At={},g.set(yt,At));const mt=st(T);if(mt!==P.__cacheKey){At[mt]===void 0&&(At[mt]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,tt=!0),At[mt].usedTimes++;const Yt=At[P.__cacheKey];Yt!==void 0&&(At[P.__cacheKey].usedTimes--,Yt.usedTimes===0&&O(T)),P.__cacheKey=mt,P.__webglTexture=At[mt].texture}return tt}function pt(P,T,tt){return Math.floor(Math.floor(P/tt)/T)}function St(P,T,tt,yt){const mt=P.updateRanges;if(mt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,tt,yt,T.data);else{mt.sort((Ct,Rt)=>Ct.start-Rt.start);let Yt=0;for(let Ct=1;Ct<mt.length;Ct++){const Rt=mt[Yt],Vt=mt[Ct],Ht=Rt.start+Rt.count,Xt=pt(Vt.start,T.width,4),ge=pt(Rt.start,T.width,4);Vt.start<=Ht+1&&Xt===ge&&pt(Vt.start+Vt.count-1,T.width,4)===Xt?Rt.count=Math.max(Rt.count,Vt.start+Vt.count-Rt.start):(++Yt,mt[Yt]=Vt)}mt.length=Yt+1;const Ut=r.getParameter(r.UNPACK_ROW_LENGTH),ee=r.getParameter(r.UNPACK_SKIP_PIXELS),ne=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Ct=0,Rt=mt.length;Ct<Rt;Ct++){const Vt=mt[Ct],Ht=Math.floor(Vt.start/4),Xt=Math.ceil(Vt.count/4),ge=Ht%T.width,J=Math.floor(Ht/T.width),Lt=Xt,Nt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,J),i.texSubImage2D(r.TEXTURE_2D,0,ge,J,Lt,Nt,tt,yt,T.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ut),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),r.pixelStorei(r.UNPACK_SKIP_ROWS,ne)}}function Z(P,T,tt){let yt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(yt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(yt=r.TEXTURE_3D);const At=$(P,T),mt=T.source;i.bindTexture(yt,P.__webglTexture,r.TEXTURE0+tt);const Yt=s.get(mt);if(mt.version!==Yt.__version||At===!0){i.activeTexture(r.TEXTURE0+tt);const Ut=Le.getPrimaries(Le.workingColorSpace),ee=T.colorSpace===ls?null:Le.getPrimaries(T.colorSpace),ne=T.colorSpace===ls||Ut===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Ct=R(T.image,!1,l.maxTextureSize);Ct=Ae(T,Ct);const Rt=c.convert(T.format,T.colorSpace),Vt=c.convert(T.type);let Ht=N(T.internalFormat,Rt,Vt,T.colorSpace,T.isVideoTexture);X(yt,T);let Xt;const ge=T.mipmaps,J=T.isVideoTexture!==!0,Lt=Yt.__version===void 0||At===!0,Nt=mt.dataReady,jt=G(T,Ct);if(T.isDepthTexture)Ht=D(T.format===Gs,T.type),Lt&&(J?i.texStorage2D(r.TEXTURE_2D,1,Ht,Ct.width,Ct.height):i.texImage2D(r.TEXTURE_2D,0,Ht,Ct.width,Ct.height,0,Rt,Vt,null));else if(T.isDataTexture)if(ge.length>0){J&&Lt&&i.texStorage2D(r.TEXTURE_2D,jt,Ht,ge[0].width,ge[0].height);for(let wt=0,xt=ge.length;wt<xt;wt++)Xt=ge[wt],J?Nt&&i.texSubImage2D(r.TEXTURE_2D,wt,0,0,Xt.width,Xt.height,Rt,Vt,Xt.data):i.texImage2D(r.TEXTURE_2D,wt,Ht,Xt.width,Xt.height,0,Rt,Vt,Xt.data);T.generateMipmaps=!1}else J?(Lt&&i.texStorage2D(r.TEXTURE_2D,jt,Ht,Ct.width,Ct.height),Nt&&St(T,Ct,Rt,Vt)):i.texImage2D(r.TEXTURE_2D,0,Ht,Ct.width,Ct.height,0,Rt,Vt,Ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){J&&Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,jt,Ht,ge[0].width,ge[0].height,Ct.depth);for(let wt=0,xt=ge.length;wt<xt;wt++)if(Xt=ge[wt],T.format!==Oi)if(Rt!==null)if(J){if(Nt)if(T.layerUpdates.size>0){const Zt=gv(Xt.width,Xt.height,T.format,T.type);for(const ce of T.layerUpdates){const ze=Xt.data.subarray(ce*Zt/Xt.data.BYTES_PER_ELEMENT,(ce+1)*Zt/Xt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,wt,0,0,ce,Xt.width,Xt.height,1,Rt,ze)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,wt,0,0,0,Xt.width,Xt.height,Ct.depth,Rt,Xt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,wt,Ht,Xt.width,Xt.height,Ct.depth,0,Xt.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?Nt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,wt,0,0,0,Xt.width,Xt.height,Ct.depth,Rt,Vt,Xt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,wt,Ht,Xt.width,Xt.height,Ct.depth,0,Rt,Vt,Xt.data)}else{J&&Lt&&i.texStorage2D(r.TEXTURE_2D,jt,Ht,ge[0].width,ge[0].height);for(let wt=0,xt=ge.length;wt<xt;wt++)Xt=ge[wt],T.format!==Oi?Rt!==null?J?Nt&&i.compressedTexSubImage2D(r.TEXTURE_2D,wt,0,0,Xt.width,Xt.height,Rt,Xt.data):i.compressedTexImage2D(r.TEXTURE_2D,wt,Ht,Xt.width,Xt.height,0,Xt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?Nt&&i.texSubImage2D(r.TEXTURE_2D,wt,0,0,Xt.width,Xt.height,Rt,Vt,Xt.data):i.texImage2D(r.TEXTURE_2D,wt,Ht,Xt.width,Xt.height,0,Rt,Vt,Xt.data)}else if(T.isDataArrayTexture)if(J){if(Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,jt,Ht,Ct.width,Ct.height,Ct.depth),Nt)if(T.layerUpdates.size>0){const wt=gv(Ct.width,Ct.height,T.format,T.type);for(const xt of T.layerUpdates){const Zt=Ct.data.subarray(xt*wt/Ct.data.BYTES_PER_ELEMENT,(xt+1)*wt/Ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,Ct.width,Ct.height,1,Rt,Vt,Zt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,Rt,Vt,Ct.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ht,Ct.width,Ct.height,Ct.depth,0,Rt,Vt,Ct.data);else if(T.isData3DTexture)J?(Lt&&i.texStorage3D(r.TEXTURE_3D,jt,Ht,Ct.width,Ct.height,Ct.depth),Nt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,Rt,Vt,Ct.data)):i.texImage3D(r.TEXTURE_3D,0,Ht,Ct.width,Ct.height,Ct.depth,0,Rt,Vt,Ct.data);else if(T.isFramebufferTexture){if(Lt)if(J)i.texStorage2D(r.TEXTURE_2D,jt,Ht,Ct.width,Ct.height);else{let wt=Ct.width,xt=Ct.height;for(let Zt=0;Zt<jt;Zt++)i.texImage2D(r.TEXTURE_2D,Zt,Ht,wt,xt,0,Rt,Vt,null),wt>>=1,xt>>=1}}else if(ge.length>0){if(J&&Lt){const wt=Wt(ge[0]);i.texStorage2D(r.TEXTURE_2D,jt,Ht,wt.width,wt.height)}for(let wt=0,xt=ge.length;wt<xt;wt++)Xt=ge[wt],J?Nt&&i.texSubImage2D(r.TEXTURE_2D,wt,0,0,Rt,Vt,Xt):i.texImage2D(r.TEXTURE_2D,wt,Ht,Rt,Vt,Xt);T.generateMipmaps=!1}else if(J){if(Lt){const wt=Wt(Ct);i.texStorage2D(r.TEXTURE_2D,jt,Ht,wt.width,wt.height)}Nt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt,Vt,Ct)}else i.texImage2D(r.TEXTURE_2D,0,Ht,Rt,Vt,Ct);_(T)&&v(yt),Yt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function V(P,T,tt){if(T.image.length!==6)return;const yt=$(P,T),At=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+tt);const mt=s.get(At);if(At.version!==mt.__version||yt===!0){i.activeTexture(r.TEXTURE0+tt);const Yt=Le.getPrimaries(Le.workingColorSpace),Ut=T.colorSpace===ls?null:Le.getPrimaries(T.colorSpace),ee=T.colorSpace===ls||Yt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ne=T.isCompressedTexture||T.image[0].isCompressedTexture,Ct=T.image[0]&&T.image[0].isDataTexture,Rt=[];for(let xt=0;xt<6;xt++)!ne&&!Ct?Rt[xt]=R(T.image[xt],!0,l.maxCubemapSize):Rt[xt]=Ct?T.image[xt].image:T.image[xt],Rt[xt]=Ae(T,Rt[xt]);const Vt=Rt[0],Ht=c.convert(T.format,T.colorSpace),Xt=c.convert(T.type),ge=N(T.internalFormat,Ht,Xt,T.colorSpace),J=T.isVideoTexture!==!0,Lt=mt.__version===void 0||yt===!0,Nt=At.dataReady;let jt=G(T,Vt);X(r.TEXTURE_CUBE_MAP,T);let wt;if(ne){J&&Lt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,jt,ge,Vt.width,Vt.height);for(let xt=0;xt<6;xt++){wt=Rt[xt].mipmaps;for(let Zt=0;Zt<wt.length;Zt++){const ce=wt[Zt];T.format!==Oi?Ht!==null?J?Nt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Zt,0,0,ce.width,ce.height,Ht,ce.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Zt,ge,ce.width,ce.height,0,ce.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Zt,0,0,ce.width,ce.height,Ht,Xt,ce.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Zt,ge,ce.width,ce.height,0,Ht,Xt,ce.data)}}}else{if(wt=T.mipmaps,J&&Lt){wt.length>0&&jt++;const xt=Wt(Rt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,jt,ge,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Ct){J?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Rt[xt].width,Rt[xt].height,Ht,Xt,Rt[xt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ge,Rt[xt].width,Rt[xt].height,0,Ht,Xt,Rt[xt].data);for(let Zt=0;Zt<wt.length;Zt++){const ze=wt[Zt].image[xt].image;J?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Zt+1,0,0,ze.width,ze.height,Ht,Xt,ze.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Zt+1,ge,ze.width,ze.height,0,Ht,Xt,ze.data)}}else{J?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ht,Xt,Rt[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ge,Ht,Xt,Rt[xt]);for(let Zt=0;Zt<wt.length;Zt++){const ce=wt[Zt];J?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Zt+1,0,0,Ht,Xt,ce.image[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Zt+1,ge,Ht,Xt,ce.image[xt])}}}_(T)&&v(r.TEXTURE_CUBE_MAP),mt.__version=At.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ft(P,T,tt,yt,At,mt){const Yt=c.convert(tt.format,tt.colorSpace),Ut=c.convert(tt.type),ee=N(tt.internalFormat,Yt,Ut,tt.colorSpace),ne=s.get(T),Ct=s.get(tt);if(Ct.__renderTarget=T,!ne.__hasExternalTextures){const Rt=Math.max(1,T.width>>mt),Vt=Math.max(1,T.height>>mt);At===r.TEXTURE_3D||At===r.TEXTURE_2D_ARRAY?i.texImage3D(At,mt,ee,Rt,Vt,T.depth,0,Yt,Ut,null):i.texImage2D(At,mt,ee,Rt,Vt,0,Yt,Ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),Te(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,yt,At,Ct.__webglTexture,0,W(T)):(At===r.TEXTURE_2D||At>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,yt,At,Ct.__webglTexture,mt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Mt(P,T,tt){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){const yt=T.depthTexture,At=yt&&yt.isDepthTexture?yt.type:null,mt=D(T.stencilBuffer,At),Yt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Te(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,W(T),mt,T.width,T.height):tt?r.renderbufferStorageMultisample(r.RENDERBUFFER,W(T),mt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,mt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Yt,r.RENDERBUFFER,P)}else{const yt=T.textures;for(let At=0;At<yt.length;At++){const mt=yt[At],Yt=c.convert(mt.format,mt.colorSpace),Ut=c.convert(mt.type),ee=N(mt.internalFormat,Yt,Ut,mt.colorSpace);Te(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,W(T),ee,T.width,T.height):tt?r.renderbufferStorageMultisample(r.RENDERBUFFER,W(T),ee,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ee,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Dt(P,T,tt){const yt=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const At=s.get(T.depthTexture);if(At.__renderTarget=T,(!At.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),yt){if(At.__webglInit===void 0&&(At.__webglInit=!0,T.depthTexture.addEventListener("dispose",B)),At.__webglTexture===void 0){At.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,At.__webglTexture),X(r.TEXTURE_CUBE_MAP,T.depthTexture);const ne=c.convert(T.depthTexture.format),Ct=c.convert(T.depthTexture.type);let Rt;T.depthTexture.format===Ra?Rt=r.DEPTH_COMPONENT24:T.depthTexture.format===Gs&&(Rt=r.DEPTH24_STENCIL8);for(let Vt=0;Vt<6;Vt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,Rt,T.width,T.height,0,ne,Ct,null)}}else et(T.depthTexture,0);const mt=At.__webglTexture,Yt=W(T),Ut=yt?r.TEXTURE_CUBE_MAP_POSITIVE_X+tt:r.TEXTURE_2D,ee=T.depthTexture.format===Gs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ra)Te(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,Ut,mt,0,Yt):r.framebufferTexture2D(r.FRAMEBUFFER,ee,Ut,mt,0);else if(T.depthTexture.format===Gs)Te(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,Ut,mt,0,Yt):r.framebufferTexture2D(r.FRAMEBUFFER,ee,Ut,mt,0);else throw new Error("Unknown depthTexture format")}function Pt(P){const T=s.get(P),tt=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const yt=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),yt){const At=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,yt.removeEventListener("dispose",At)};yt.addEventListener("dispose",At),T.__depthDisposeCallback=At}T.__boundDepthTexture=yt}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(tt)for(let yt=0;yt<6;yt++)Dt(T.__webglFramebuffer[yt],P,yt);else{const yt=P.texture.mipmaps;yt&&yt.length>0?Dt(T.__webglFramebuffer[0],P,0):Dt(T.__webglFramebuffer,P,0)}else if(tt){T.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[yt]),T.__webglDepthbuffer[yt]===void 0)T.__webglDepthbuffer[yt]=r.createRenderbuffer(),Mt(T.__webglDepthbuffer[yt],P,!1);else{const At=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[yt];r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,mt)}}else{const yt=P.texture.mipmaps;if(yt&&yt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Mt(T.__webglDepthbuffer,P,!1);else{const At=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,mt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(P,T,tt){const yt=s.get(P);T!==void 0&&ft(yt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),tt!==void 0&&Pt(P)}function Ot(P){const T=P.texture,tt=s.get(P),yt=s.get(T);P.addEventListener("dispose",z);const At=P.textures,mt=P.isWebGLCubeRenderTarget===!0,Yt=At.length>1;if(Yt||(yt.__webglTexture===void 0&&(yt.__webglTexture=r.createTexture()),yt.__version=T.version,d.memory.textures++),mt){tt.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Ut]=[];for(let ee=0;ee<T.mipmaps.length;ee++)tt.__webglFramebuffer[Ut][ee]=r.createFramebuffer()}else tt.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)tt.__webglFramebuffer[Ut]=r.createFramebuffer()}else tt.__webglFramebuffer=r.createFramebuffer();if(Yt)for(let Ut=0,ee=At.length;Ut<ee;Ut++){const ne=s.get(At[Ut]);ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture(),d.memory.textures++)}if(P.samples>0&&Te(P)===!1){tt.__webglMultisampledFramebuffer=r.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Ut=0;Ut<At.length;Ut++){const ee=At[Ut];tt.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,tt.__webglColorRenderbuffer[Ut]);const ne=c.convert(ee.format,ee.colorSpace),Ct=c.convert(ee.type),Rt=N(ee.internalFormat,ne,Ct,ee.colorSpace,P.isXRRenderTarget===!0),Vt=W(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt,Rt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,tt.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(tt.__webglDepthRenderbuffer=r.createRenderbuffer(),Mt(tt.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(mt){i.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),X(r.TEXTURE_CUBE_MAP,T);for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let ee=0;ee<T.mipmaps.length;ee++)ft(tt.__webglFramebuffer[Ut][ee],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ee);else ft(tt.__webglFramebuffer[Ut],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);_(T)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Ut=0,ee=At.length;Ut<ee;Ut++){const ne=At[Ut],Ct=s.get(ne);let Rt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Rt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Rt,Ct.__webglTexture),X(Rt,ne),ft(tt.__webglFramebuffer,P,ne,r.COLOR_ATTACHMENT0+Ut,Rt,0),_(ne)&&v(Rt)}i.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ut=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,yt.__webglTexture),X(Ut,T),T.mipmaps&&T.mipmaps.length>0)for(let ee=0;ee<T.mipmaps.length;ee++)ft(tt.__webglFramebuffer[ee],P,T,r.COLOR_ATTACHMENT0,Ut,ee);else ft(tt.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,Ut,0);_(T)&&v(Ut),i.unbindTexture()}P.depthBuffer&&Pt(P)}function Ft(P){const T=P.textures;for(let tt=0,yt=T.length;tt<yt;tt++){const At=T[tt];if(_(At)){const mt=A(P),Yt=s.get(At).__webglTexture;i.bindTexture(mt,Yt),v(mt),i.unbindTexture()}}}const te=[],Gt=[];function ue(P){if(P.samples>0){if(Te(P)===!1){const T=P.textures,tt=P.width,yt=P.height;let At=r.COLOR_BUFFER_BIT;const mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Yt=s.get(P),Ut=T.length>1;if(Ut)for(let ne=0;ne<T.length;ne++)i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const ee=P.texture.mipmaps;ee&&ee.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let ne=0;ne<T.length;ne++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(At|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(At|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[ne]);const Ct=s.get(T[ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ct,0)}r.blitFramebuffer(0,0,tt,yt,0,0,tt,yt,At,r.NEAREST),m===!0&&(te.length=0,Gt.length=0,te.push(r.COLOR_ATTACHMENT0+ne),P.depthBuffer&&P.resolveDepthBuffer===!1&&(te.push(mt),Gt.push(mt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Gt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let ne=0;ne<T.length;ne++){i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[ne]);const Ct=s.get(T[ne]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,Ct,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function W(P){return Math.min(l.maxSamples,P.samples)}function Te(P){const T=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function me(P){const T=d.render.frame;x.get(P)!==T&&(x.set(P,T),P.update())}function Ae(P,T){const tt=P.colorSpace,yt=P.format,At=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||tt!==Qr&&tt!==ls&&(Le.getTransfer(tt)===Ve?(yt!==Oi||At!==ci)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",tt)),T}function Wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.setTexture2D=et,this.setTexture2DArray=U,this.setTexture3D=F,this.setTextureCube=k,this.rebindTextures=kt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function OR(r,t){function i(s,l=ls){let c;const d=Le.getTransfer(l);if(s===ci)return r.UNSIGNED_BYTE;if(s===Ap)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Rp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ix)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===ax)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===ex)return r.BYTE;if(s===nx)return r.SHORT;if(s===ul)return r.UNSIGNED_SHORT;if(s===Tp)return r.INT;if(s===Ki)return r.UNSIGNED_INT;if(s===Wi)return r.FLOAT;if(s===Aa)return r.HALF_FLOAT;if(s===sx)return r.ALPHA;if(s===rx)return r.RGB;if(s===Oi)return r.RGBA;if(s===Ra)return r.DEPTH_COMPONENT;if(s===Gs)return r.DEPTH_STENCIL;if(s===ox)return r.RED;if(s===Cp)return r.RED_INTEGER;if(s===Kr)return r.RG;if(s===wp)return r.RG_INTEGER;if(s===Dp)return r.RGBA_INTEGER;if(s===lu||s===cu||s===uu||s===fu)if(d===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===lu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===lu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===cu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===uu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fh||s===Ih||s===Bh||s===zh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Fh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ih)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===jh||s===Wh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Hh||s===Gh)return d===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Vh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===kh)return c.COMPRESSED_R11_EAC;if(s===Xh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===jh)return c.COMPRESSED_RG11_EAC;if(s===Wh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===qh||s===Yh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===tp||s===ep||s===np||s===ip||s===ap||s===sp||s===rp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===qh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$h)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tp)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ep)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===np)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ip)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ap)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sp)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rp)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===op||s===lp||s===cp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===op)return d===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===lp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===cp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===up||s===fp||s===dp||s===hp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===up)return c.COMPRESSED_RED_RGTC1_EXT;if(s===fp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===dp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===hp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const PR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FR=`
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

}`;class IR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new vx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ji({vertexShader:PR,fragmentShader:FR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qi(new _l(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BR extends $r{constructor(t,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,x=null,S=null,g=null,b=null,M=null;const R=typeof XRWebGLBinding<"u",_=new IR,v={},A=i.getContextAttributes();let N=null,D=null;const G=[],B=[],z=new Ee;let E=null;const O=new li;O.viewport=new an;const at=new li;at.viewport=new an;const H=[O,at],q=new Yb;let Y=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let V=G[Z];return V===void 0&&(V=new Zd,G[Z]=V),V.getTargetRaySpace()},this.getControllerGrip=function(Z){let V=G[Z];return V===void 0&&(V=new Zd,G[Z]=V),V.getGripSpace()},this.getHand=function(Z){let V=G[Z];return V===void 0&&(V=new Zd,G[Z]=V),V.getHandSpace()};function et(Z){const V=B.indexOf(Z.inputSource);if(V===-1)return;const ft=G[V];ft!==void 0&&(ft.update(Z.inputSource,Z.frame,h||d),ft.dispatchEvent({type:Z.type,data:Z.inputSource}))}function U(){l.removeEventListener("select",et),l.removeEventListener("selectstart",et),l.removeEventListener("selectend",et),l.removeEventListener("squeeze",et),l.removeEventListener("squeezestart",et),l.removeEventListener("squeezeend",et),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",F);for(let Z=0;Z<G.length;Z++){const V=B[Z];V!==null&&(B[Z]=null,G[Z].disconnect(V))}Y=null,st=null,_.reset();for(const Z in v)delete v[Z];t.setRenderTarget(N),b=null,g=null,S=null,l=null,D=null,St.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){p=Z,s.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",et),l.addEventListener("selectstart",et),l.addEventListener("selectend",et),l.addEventListener("squeeze",et),l.addEventListener("squeezestart",et),l.addEventListener("squeezeend",et),l.addEventListener("end",U),l.addEventListener("inputsourceschange",F),A.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(z),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Mt=null,Dt=null;A.depth&&(Dt=A.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ft=A.stencil?Gs:Ra,Mt=A.stencil?fl:Ki);const Pt={colorFormat:i.RGBA8,depthFormat:Dt,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer(Pt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new Zi(g.textureWidth,g.textureHeight,{format:Oi,type:ci,depthTexture:new hl(g.textureWidth,g.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ft={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,ft),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),D=new Zi(b.framebufferWidth,b.framebufferHeight,{format:Oi,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),St.setContext(l),St.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(Z){for(let V=0;V<Z.removed.length;V++){const ft=Z.removed[V],Mt=B.indexOf(ft);Mt>=0&&(B[Mt]=null,G[Mt].disconnect(ft))}for(let V=0;V<Z.added.length;V++){const ft=Z.added[V];let Mt=B.indexOf(ft);if(Mt===-1){for(let Pt=0;Pt<G.length;Pt++)if(Pt>=B.length){B.push(ft),Mt=Pt;break}else if(B[Pt]===null){B[Pt]=ft,Mt=Pt;break}if(Mt===-1)break}const Dt=G[Mt];Dt&&Dt.connect(ft)}}const k=new lt,nt=new lt;function vt(Z,V,ft){k.setFromMatrixPosition(V.matrixWorld),nt.setFromMatrixPosition(ft.matrixWorld);const Mt=k.distanceTo(nt),Dt=V.projectionMatrix.elements,Pt=ft.projectionMatrix.elements,kt=Dt[14]/(Dt[10]-1),Ot=Dt[14]/(Dt[10]+1),Ft=(Dt[9]+1)/Dt[5],te=(Dt[9]-1)/Dt[5],Gt=(Dt[8]-1)/Dt[0],ue=(Pt[8]+1)/Pt[0],W=kt*Gt,Te=kt*ue,me=Mt/(-Gt+ue),Ae=me*-Gt;if(V.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ae),Z.translateZ(me),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Dt[10]===-1)Z.projectionMatrix.copy(V.projectionMatrix),Z.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const Wt=kt+me,P=Ot+me,T=W-Ae,tt=Te+(Mt-Ae),yt=Ft*Ot/P*Wt,At=te*Ot/P*Wt;Z.projectionMatrix.makePerspective(T,tt,yt,At,Wt,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function I(Z,V){V===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(V.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let V=Z.near,ft=Z.far;_.texture!==null&&(_.depthNear>0&&(V=_.depthNear),_.depthFar>0&&(ft=_.depthFar)),q.near=at.near=O.near=V,q.far=at.far=O.far=ft,(Y!==q.near||st!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),Y=q.near,st=q.far),q.layers.mask=Z.layers.mask|6,O.layers.mask=q.layers.mask&-5,at.layers.mask=q.layers.mask&-3;const Mt=Z.parent,Dt=q.cameras;I(q,Mt);for(let Pt=0;Pt<Dt.length;Pt++)I(Dt[Pt],Mt);Dt.length===2?vt(q,O,at):q.projectionMatrix.copy(O.projectionMatrix),X(Z,q,Mt)};function X(Z,V,ft){ft===null?Z.matrix.copy(V.matrixWorld):(Z.matrix.copy(ft.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(V.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(V.projectionMatrix),Z.projectionMatrixInverse.copy(V.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=mp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&b===null))return m},this.setFoveation=function(Z){m=Z,g!==null&&(g.fixedFoveation=Z),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(q)},this.getCameraTexture=function(Z){return v[Z]};let $=null;function pt(Z,V){if(x=V.getViewerPose(h||d),M=V,x!==null){const ft=x.views;b!==null&&(t.setRenderTargetFramebuffer(D,b.framebuffer),t.setRenderTarget(D));let Mt=!1;ft.length!==q.cameras.length&&(q.cameras.length=0,Mt=!0);for(let Ot=0;Ot<ft.length;Ot++){const Ft=ft[Ot];let te=null;if(b!==null)te=b.getViewport(Ft);else{const ue=S.getViewSubImage(g,Ft);te=ue.viewport,Ot===0&&(t.setRenderTargetTextures(D,ue.colorTexture,ue.depthStencilTexture),t.setRenderTarget(D))}let Gt=H[Ot];Gt===void 0&&(Gt=new li,Gt.layers.enable(Ot),Gt.viewport=new an,H[Ot]=Gt),Gt.matrix.fromArray(Ft.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ft.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(te.x,te.y,te.width,te.height),Ot===0&&(q.matrix.copy(Gt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Mt===!0&&q.cameras.push(Gt)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){S=s.getBinding();const Ot=S.getDepthInformation(ft[0]);Ot&&Ot.isValid&&Ot.texture&&_.init(Ot,l.renderState)}if(Dt&&Dt.includes("camera-access")&&R){t.state.unbindTexture(),S=s.getBinding();for(let Ot=0;Ot<ft.length;Ot++){const Ft=ft[Ot].camera;if(Ft){let te=v[Ft];te||(te=new vx,v[Ft]=te);const Gt=S.getCameraImage(Ft);te.sourceTexture=Gt}}}}for(let ft=0;ft<G.length;ft++){const Mt=B[ft],Dt=G[ft];Mt!==null&&Dt!==void 0&&Dt.update(Mt,V,h||d)}$&&$(Z,V),V.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:V}),M=null}const St=new bx;St.setAnimationLoop(pt),this.setAnimationLoop=function(Z){$=Z},this.dispose=function(){}}}const Fs=new Ca,zR=new Ke;function HR(r,t){function i(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function s(_,v){v.color.getRGB(_.fogColor.value,xx(r)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function l(_,v,A,N,D){v.isMeshBasicMaterial?c(_,v):v.isMeshLambertMaterial?(c(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(_,v),S(_,v)):v.isMeshPhongMaterial?(c(_,v),x(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(_,v),g(_,v),v.isMeshPhysicalMaterial&&b(_,v,D)):v.isMeshMatcapMaterial?(c(_,v),M(_,v)):v.isMeshDepthMaterial?c(_,v):v.isMeshDistanceMaterial?(c(_,v),R(_,v)):v.isMeshNormalMaterial?c(_,v):v.isLineBasicMaterial?(d(_,v),v.isLineDashedMaterial&&p(_,v)):v.isPointsMaterial?m(_,v,A,N):v.isSpriteMaterial?h(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,i(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,i(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,i(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===Kn&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,i(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===Kn&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,i(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,i(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const A=t.get(v),N=A.envMap,D=A.envMapRotation;N&&(_.envMap.value=N,Fs.copy(D),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),_.envMapRotation.value.setFromMatrix4(zR.makeRotationFromEuler(Fs)),_.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,_.aoMapTransform))}function d(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,i(v.map,_.mapTransform))}function p(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function m(_,v,A,N){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*A,_.scale.value=N*.5,v.map&&(_.map.value=v.map,i(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,i(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function h(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,i(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,i(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function x(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function S(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function g(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function b(_,v,A){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Kn&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,v){v.matcap&&(_.matcap.value=v.matcap)}function R(_,v){const A=t.get(v).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function GR(r,t,i,s){let l={},c={},d=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,N){const D=N.program;s.uniformBlockBinding(A,D)}function h(A,N){let D=l[A.id];D===void 0&&(M(A),D=x(A),l[A.id]=D,A.addEventListener("dispose",_));const G=N.program;s.updateUBOMapping(A,G);const B=t.render.frame;c[A.id]!==B&&(g(A),c[A.id]=B)}function x(A){const N=S();A.__bindingPointIndex=N;const D=r.createBuffer(),G=A.__size,B=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,G,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,D),D}function S(){for(let A=0;A<p;A++)if(d.indexOf(A)===-1)return d.push(A),A;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const N=l[A.id],D=A.uniforms,G=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let B=0,z=D.length;B<z;B++){const E=Array.isArray(D[B])?D[B]:[D[B]];for(let O=0,at=E.length;O<at;O++){const H=E[O];if(b(H,B,O,G)===!0){const q=H.__offset,Y=Array.isArray(H.value)?H.value:[H.value];let st=0;for(let et=0;et<Y.length;et++){const U=Y[et],F=R(U);typeof U=="number"||typeof U=="boolean"?(H.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,q+st,H.__data)):U.isMatrix3?(H.__data[0]=U.elements[0],H.__data[1]=U.elements[1],H.__data[2]=U.elements[2],H.__data[3]=0,H.__data[4]=U.elements[3],H.__data[5]=U.elements[4],H.__data[6]=U.elements[5],H.__data[7]=0,H.__data[8]=U.elements[6],H.__data[9]=U.elements[7],H.__data[10]=U.elements[8],H.__data[11]=0):(U.toArray(H.__data,st),st+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(A,N,D,G){const B=A.value,z=N+"_"+D;if(G[z]===void 0)return typeof B=="number"||typeof B=="boolean"?G[z]=B:G[z]=B.clone(),!0;{const E=G[z];if(typeof B=="number"||typeof B=="boolean"){if(E!==B)return G[z]=B,!0}else if(E.equals(B)===!1)return E.copy(B),!0}return!1}function M(A){const N=A.uniforms;let D=0;const G=16;for(let z=0,E=N.length;z<E;z++){const O=Array.isArray(N[z])?N[z]:[N[z]];for(let at=0,H=O.length;at<H;at++){const q=O[at],Y=Array.isArray(q.value)?q.value:[q.value];for(let st=0,et=Y.length;st<et;st++){const U=Y[st],F=R(U),k=D%G,nt=k%F.boundary,vt=k+nt;D+=nt,vt!==0&&G-vt<F.storage&&(D+=G-vt),q.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=D,D+=F.storage}}}const B=D%G;return B>0&&(D+=G-B),A.__size=D,A.__cache={},this}function R(A){const N={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(N.boundary=4,N.storage=4):A.isVector2?(N.boundary=8,N.storage=8):A.isVector3||A.isColor?(N.boundary=16,N.storage=12):A.isVector4?(N.boundary=16,N.storage=16):A.isMatrix3?(N.boundary=48,N.storage=48):A.isMatrix4?(N.boundary=64,N.storage=64):A.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):le("WebGLRenderer: Unsupported uniform value type.",A),N}function _(A){const N=A.target;N.removeEventListener("dispose",_);const D=d.indexOf(N.__bindingPointIndex);d.splice(D,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function v(){for(const A in l)r.deleteBuffer(l[A]);d=[],l={},c={}}return{bind:m,update:h,dispose:v}}const VR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function kR(){return Vi===null&&(Vi=new wb(VR,16,16,Kr,Aa),Vi.name="DFG_LUT",Vi.minFilter=On,Vi.magFilter=On,Vi.wrapS=ba,Vi.wrapT=ba,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class XR{constructor(t={}){const{canvas:i=ab(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:b=ci}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=d;const R=b,_=new Set([Dp,wp,Cp]),v=new Set([ci,Ki,ul,fl,Ap,Rp]),A=new Uint32Array(4),N=new Int32Array(4);let D=null,G=null;const B=[],z=[];let E=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let at=!1;this._outputColorSpace=Si;let H=0,q=0,Y=null,st=-1,et=null;const U=new an,F=new an;let k=null;const nt=new ye(0);let vt=0,I=i.width,X=i.height,$=1,pt=null,St=null;const Z=new an(0,0,I,X),V=new an(0,0,I,X);let ft=!1;const Mt=new Ip;let Dt=!1,Pt=!1;const kt=new Ke,Ot=new lt,Ft=new an,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function ue(){return Y===null?$:1}let W=s;function Te(w,Q){return i.getContext(w,Q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${bp}`),i.addEventListener("webglcontextlost",Zt,!1),i.addEventListener("webglcontextrestored",ce,!1),i.addEventListener("webglcontextcreationerror",ze,!1),W===null){const Q="webgl2";if(W=Te(Q,w),W===null)throw Te(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ue("WebGLRenderer: "+w.message),w}let me,Ae,Wt,P,T,tt,yt,At,mt,Yt,Ut,ee,ne,Ct,Rt,Vt,Ht,Xt,ge,J,Lt,Nt,jt;function wt(){me=new XT(W),me.init(),Lt=new OR(W,me),Ae=new FT(W,me,t,Lt),Wt=new UR(W,me),Ae.reversedDepthBuffer&&g&&Wt.buffers.depth.setReversed(!0),P=new qT(W),T=new vR,tt=new LR(W,me,Wt,T,Ae,Lt,P),yt=new kT(O),At=new Jb(W),Nt=new OT(W,At),mt=new jT(W,At,P,Nt),Yt=new ZT(W,mt,At,Nt,P),Xt=new YT(W,Ae,tt),Rt=new IT(T),Ut=new _R(O,yt,me,Ae,Nt,Rt),ee=new HR(O,T),ne=new SR,Ct=new AR(me),Ht=new LT(O,yt,Wt,Yt,M,m),Vt=new NR(O,Yt,Ae),jt=new GR(W,P,Ae,Wt),ge=new PT(W,me,P),J=new WT(W,me,P),P.programs=Ut.programs,O.capabilities=Ae,O.extensions=me,O.properties=T,O.renderLists=ne,O.shadowMap=Vt,O.state=Wt,O.info=P}wt(),R!==ci&&(E=new QT(R,i.width,i.height,l,c));const xt=new BR(O,W);this.xr=xt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const w=me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(I,X,!1))},this.getSize=function(w){return w.set(I,X)},this.setSize=function(w,Q,gt=!0){if(xt.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,X=Q,i.width=Math.floor(w*$),i.height=Math.floor(Q*$),gt===!0&&(i.style.width=w+"px",i.style.height=Q+"px"),E!==null&&E.setSize(i.width,i.height),this.setViewport(0,0,w,Q)},this.getDrawingBufferSize=function(w){return w.set(I*$,X*$).floor()},this.setDrawingBufferSize=function(w,Q,gt){I=w,X=Q,$=gt,i.width=Math.floor(w*gt),i.height=Math.floor(Q*gt),this.setViewport(0,0,w,Q)},this.setEffects=function(w){if(R===ci){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Q=0;Q<w.length;Q++)if(w[Q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,Q,gt,dt){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,Q,gt,dt),Wt.viewport(U.copy(Z).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(V)},this.setScissor=function(w,Q,gt,dt){w.isVector4?V.set(w.x,w.y,w.z,w.w):V.set(w,Q,gt,dt),Wt.scissor(F.copy(V).multiplyScalar($).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(w){Wt.setScissorTest(ft=w)},this.setOpaqueSort=function(w){pt=w},this.setTransparentSort=function(w){St=w},this.getClearColor=function(w){return w.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor(...arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha(...arguments)},this.clear=function(w=!0,Q=!0,gt=!0){let dt=0;if(w){let ot=!1;if(Y!==null){const It=Y.texture.format;ot=_.has(It)}if(ot){const It=Y.texture.type,qt=v.has(It),Bt=Ht.getClearColor(),$t=Ht.getClearAlpha(),ae=Bt.r,oe=Bt.g,de=Bt.b;qt?(A[0]=ae,A[1]=oe,A[2]=de,A[3]=$t,W.clearBufferuiv(W.COLOR,0,A)):(N[0]=ae,N[1]=oe,N[2]=de,N[3]=$t,W.clearBufferiv(W.COLOR,0,N))}else dt|=W.COLOR_BUFFER_BIT}Q&&(dt|=W.DEPTH_BUFFER_BIT),gt&&(dt|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),dt!==0&&W.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Zt,!1),i.removeEventListener("webglcontextrestored",ce,!1),i.removeEventListener("webglcontextcreationerror",ze,!1),Ht.dispose(),ne.dispose(),Ct.dispose(),T.dispose(),yt.dispose(),Yt.dispose(),Nt.dispose(),jt.dispose(),Ut.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",js),xt.removeEventListener("sessionend",Ws),Fi.stop()};function Zt(w){w.preventDefault(),mu("WebGLRenderer: Context Lost."),at=!0}function ce(){mu("WebGLRenderer: Context Restored."),at=!1;const w=P.autoReset,Q=Vt.enabled,gt=Vt.autoUpdate,dt=Vt.needsUpdate,ot=Vt.type;wt(),P.autoReset=w,Vt.enabled=Q,Vt.autoUpdate=gt,Vt.needsUpdate=dt,Vt.type=ot}function ze(w){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ne(w){const Q=w.target;Q.removeEventListener("dispose",Ne),In(Q)}function In(w){Mi(w),T.remove(w)}function Mi(w){const Q=T.get(w).programs;Q!==void 0&&(Q.forEach(function(gt){Ut.releaseProgram(gt)}),w.isShaderMaterial&&Ut.releaseShaderCache(w))}this.renderBufferDirect=function(w,Q,gt,dt,ot,It){Q===null&&(Q=te);const qt=ot.isMesh&&ot.matrixWorld.determinant()<0,Bt=yl(w,Q,gt,dt,ot);Wt.setMaterial(dt,qt);let $t=gt.index,ae=1;if(dt.wireframe===!0){if($t=mt.getWireframeAttribute(gt),$t===void 0)return;ae=2}const oe=gt.drawRange,de=gt.attributes.position;let Kt=oe.start*ae,_e=(oe.start+oe.count)*ae;It!==null&&(Kt=Math.max(Kt,It.start*ae),_e=Math.min(_e,(It.start+It.count)*ae)),$t!==null?(Kt=Math.max(Kt,0),_e=Math.min(_e,$t.count)):de!=null&&(Kt=Math.max(Kt,0),_e=Math.min(_e,de.count));const Qe=_e-Kt;if(Qe<0||Qe===1/0)return;Nt.setup(ot,dt,Bt,gt,$t);let Je,Oe=ge;if($t!==null&&(Je=At.get($t),Oe=J,Oe.setIndex(Je)),ot.isMesh)dt.wireframe===!0?(Wt.setLineWidth(dt.wireframeLinewidth*ue()),Oe.setMode(W.LINES)):Oe.setMode(W.TRIANGLES);else if(ot.isLine){let _n=dt.linewidth;_n===void 0&&(_n=1),Wt.setLineWidth(_n*ue()),ot.isLineSegments?Oe.setMode(W.LINES):ot.isLineLoop?Oe.setMode(W.LINE_LOOP):Oe.setMode(W.LINE_STRIP)}else ot.isPoints?Oe.setMode(W.POINTS):ot.isSprite&&Oe.setMode(W.TRIANGLES);if(ot.isBatchedMesh)if(ot._multiDrawInstances!==null)gu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount,ot._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))Oe.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{const _n=ot._multiDrawStarts,Jt=ot._multiDrawCounts,Bn=ot._multiDrawCount,fe=$t?At.get($t).bytesPerElement:1,zn=T.get(dt).currentProgram.getUniforms();for(let Qn=0;Qn<Bn;Qn++)zn.setValue(W,"_gl_DrawID",Qn),Oe.render(_n[Qn]/fe,Jt[Qn])}else if(ot.isInstancedMesh)Oe.renderInstances(Kt,Qe,ot.count);else if(gt.isInstancedBufferGeometry){const _n=gt._maxInstanceCount!==void 0?gt._maxInstanceCount:1/0,Jt=Math.min(gt.instanceCount,_n);Oe.renderInstances(Kt,Qe,Jt)}else Oe.render(Kt,Qe)};function no(w,Q,gt){w.transparent===!0&&w.side===Xi&&w.forceSinglePass===!1?(w.side=Kn,w.needsUpdate=!0,wa(w,Q,gt),w.side=fs,w.needsUpdate=!0,wa(w,Q,gt),w.side=Xi):wa(w,Q,gt)}this.compile=function(w,Q,gt=null){gt===null&&(gt=w),G=Ct.get(gt),G.init(Q),z.push(G),gt.traverseVisible(function(ot){ot.isLight&&ot.layers.test(Q.layers)&&(G.pushLight(ot),ot.castShadow&&G.pushShadow(ot))}),w!==gt&&w.traverseVisible(function(ot){ot.isLight&&ot.layers.test(Q.layers)&&(G.pushLight(ot),ot.castShadow&&G.pushShadow(ot))}),G.setupLights();const dt=new Set;return w.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;const It=ot.material;if(It)if(Array.isArray(It))for(let qt=0;qt<It.length;qt++){const Bt=It[qt];no(Bt,gt,ot),dt.add(Bt)}else no(It,gt,ot),dt.add(It)}),G=z.pop(),dt},this.compileAsync=function(w,Q,gt=null){const dt=this.compile(w,Q,gt);return new Promise(ot=>{function It(){if(dt.forEach(function(qt){T.get(qt).currentProgram.isReady()&&dt.delete(qt)}),dt.size===0){ot(w);return}setTimeout(It,10)}me.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Xs=null;function vl(w){Xs&&Xs(w)}function js(){Fi.stop()}function Ws(){Fi.start()}const Fi=new bx;Fi.setAnimationLoop(vl),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(w){Xs=w,xt.setAnimationLoop(w),w===null?Fi.stop():Fi.start()},xt.addEventListener("sessionstart",js),xt.addEventListener("sessionend",Ws),this.render=function(w,Q){if(Q!==void 0&&Q.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(at===!0)return;const gt=xt.enabled===!0&&xt.isPresenting===!0,dt=E!==null&&(Y===null||gt)&&E.begin(O,Y);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(Q),Q=xt.getCamera()),w.isScene===!0&&w.onBeforeRender(O,w,Q,Y),G=Ct.get(w,z.length),G.init(Q),z.push(G),kt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Mt.setFromProjectionMatrix(kt,qi,Q.reversedDepth),Pt=this.localClippingEnabled,Dt=Rt.init(this.clippingPlanes,Pt),D=ne.get(w,B.length),D.init(),B.push(D),xt.enabled===!0&&xt.isPresenting===!0){const qt=O.xr.getDepthSensingMesh();qt!==null&&qs(qt,Q,-1/0,O.sortObjects)}qs(w,Q,0,O.sortObjects),D.finish(),O.sortObjects===!0&&D.sort(pt,St),Gt=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,Gt&&Ht.addToRenderList(D,w),this.info.render.frame++,Dt===!0&&Rt.beginShadows();const ot=G.state.shadowsArray;if(Vt.render(ot,w,Q),Dt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(dt&&E.hasRenderPass())===!1){const qt=D.opaque,Bt=D.transmissive;if(G.setupLights(),Q.isArrayCamera){const $t=Q.cameras;if(Bt.length>0)for(let ae=0,oe=$t.length;ae<oe;ae++){const de=$t[ae];ln(qt,Bt,w,de)}Gt&&Ht.render(w);for(let ae=0,oe=$t.length;ae<oe;ae++){const de=$t[ae];bi(D,w,de,de.viewport)}}else Bt.length>0&&ln(qt,Bt,w,Q),Gt&&Ht.render(w),bi(D,w,Q)}Y!==null&&q===0&&(tt.updateMultisampleRenderTarget(Y),tt.updateRenderTargetMipmap(Y)),dt&&E.end(O),w.isScene===!0&&w.onAfterRender(O,w,Q),Nt.resetDefaultState(),st=-1,et=null,z.pop(),z.length>0?(G=z[z.length-1],Dt===!0&&Rt.setGlobalState(O.clippingPlanes,G.state.camera)):G=null,B.pop(),B.length>0?D=B[B.length-1]:D=null};function qs(w,Q,gt,dt){if(w.visible===!1)return;if(w.layers.test(Q.layers)){if(w.isGroup)gt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Q);else if(w.isLight)G.pushLight(w),w.castShadow&&G.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Mt.intersectsSprite(w)){dt&&Ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(kt);const qt=Yt.update(w),Bt=w.material;Bt.visible&&D.push(w,qt,Bt,gt,Ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Mt.intersectsObject(w))){const qt=Yt.update(w),Bt=w.material;if(dt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ft.copy(w.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Ft.copy(qt.boundingSphere.center)),Ft.applyMatrix4(w.matrixWorld).applyMatrix4(kt)),Array.isArray(Bt)){const $t=qt.groups;for(let ae=0,oe=$t.length;ae<oe;ae++){const de=$t[ae],Kt=Bt[de.materialIndex];Kt&&Kt.visible&&D.push(w,qt,Kt,gt,Ft.z,de)}}else Bt.visible&&D.push(w,qt,Bt,gt,Ft.z,null)}}const It=w.children;for(let qt=0,Bt=It.length;qt<Bt;qt++)qs(It[qt],Q,gt,dt)}function bi(w,Q,gt,dt){const{opaque:ot,transmissive:It,transparent:qt}=w;G.setupLightsView(gt),Dt===!0&&Rt.setGlobalState(O.clippingPlanes,gt),dt&&Wt.viewport(U.copy(dt)),ot.length>0&&gn(ot,Q,gt),It.length>0&&gn(It,Q,gt),qt.length>0&&gn(qt,Q,gt),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function ln(w,Q,gt,dt){if((gt.isScene===!0?gt.overrideMaterial:null)!==null)return;if(G.state.transmissionRenderTarget[dt.id]===void 0){const Kt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");G.state.transmissionRenderTarget[dt.id]=new Zi(1,1,{generateMipmaps:!0,type:Kt?Aa:ci,minFilter:Hs,samples:Math.max(4,Ae.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const It=G.state.transmissionRenderTarget[dt.id],qt=dt.viewport||U;It.setSize(qt.z*O.transmissionResolutionScale,qt.w*O.transmissionResolutionScale);const Bt=O.getRenderTarget(),$t=O.getActiveCubeFace(),ae=O.getActiveMipmapLevel();O.setRenderTarget(It),O.getClearColor(nt),vt=O.getClearAlpha(),vt<1&&O.setClearColor(16777215,.5),O.clear(),Gt&&Ht.render(gt);const oe=O.toneMapping;O.toneMapping=Yi;const de=dt.viewport;if(dt.viewport!==void 0&&(dt.viewport=void 0),G.setupLightsView(dt),Dt===!0&&Rt.setGlobalState(O.clippingPlanes,dt),gn(w,gt,dt),tt.updateMultisampleRenderTarget(It),tt.updateRenderTargetMipmap(It),me.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let _e=0,Qe=Q.length;_e<Qe;_e++){const Je=Q[_e],{object:Oe,geometry:_n,material:Jt,group:Bn}=Je;if(Jt.side===Xi&&Oe.layers.test(dt.layers)){const fe=Jt.side;Jt.side=Kn,Jt.needsUpdate=!0,$i(Oe,gt,dt,_n,Jt,Bn),Jt.side=fe,Jt.needsUpdate=!0,Kt=!0}}Kt===!0&&(tt.updateMultisampleRenderTarget(It),tt.updateRenderTargetMipmap(It))}O.setRenderTarget(Bt,$t,ae),O.setClearColor(nt,vt),de!==void 0&&(dt.viewport=de),O.toneMapping=oe}function gn(w,Q,gt){const dt=Q.isScene===!0?Q.overrideMaterial:null;for(let ot=0,It=w.length;ot<It;ot++){const qt=w[ot],{object:Bt,geometry:$t,group:ae}=qt;let oe=qt.material;oe.allowOverride===!0&&dt!==null&&(oe=dt),Bt.layers.test(gt.layers)&&$i(Bt,Q,gt,$t,oe,ae)}}function $i(w,Q,gt,dt,ot,It){w.onBeforeRender(O,Q,gt,dt,ot,It),w.modelViewMatrix.multiplyMatrices(gt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ot.onBeforeRender(O,Q,gt,dt,w,It),ot.transparent===!0&&ot.side===Xi&&ot.forceSinglePass===!1?(ot.side=Kn,ot.needsUpdate=!0,O.renderBufferDirect(gt,Q,dt,ot,w,It),ot.side=fs,ot.needsUpdate=!0,O.renderBufferDirect(gt,Q,dt,ot,w,It),ot.side=Xi):O.renderBufferDirect(gt,Q,dt,ot,w,It),w.onAfterRender(O,Q,gt,dt,ot,It)}function wa(w,Q,gt){Q.isScene!==!0&&(Q=te);const dt=T.get(w),ot=G.state.lights,It=G.state.shadowsArray,qt=ot.state.version,Bt=Ut.getParameters(w,ot.state,It,Q,gt),$t=Ut.getProgramCacheKey(Bt);let ae=dt.programs;dt.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Q.environment:null,dt.fog=Q.fog;const oe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;dt.envMap=yt.get(w.envMap||dt.environment,oe),dt.envMapRotation=dt.environment!==null&&w.envMap===null?Q.environmentRotation:w.envMapRotation,ae===void 0&&(w.addEventListener("dispose",Ne),ae=new Map,dt.programs=ae);let de=ae.get($t);if(de!==void 0){if(dt.currentProgram===de&&dt.lightsStateVersion===qt)return Sl(w,Bt),de}else Bt.uniforms=Ut.getUniforms(w),w.onBeforeCompile(Bt,O),de=Ut.acquireProgram(Bt,$t),ae.set($t,de),dt.uniforms=Bt.uniforms;const Kt=dt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Kt.clippingPlanes=Rt.uniform),Sl(w,Bt),dt.needsLights=io(w),dt.lightsStateVersion=qt,dt.needsLights&&(Kt.ambientLightColor.value=ot.state.ambient,Kt.lightProbe.value=ot.state.probe,Kt.directionalLights.value=ot.state.directional,Kt.directionalLightShadows.value=ot.state.directionalShadow,Kt.spotLights.value=ot.state.spot,Kt.spotLightShadows.value=ot.state.spotShadow,Kt.rectAreaLights.value=ot.state.rectArea,Kt.ltc_1.value=ot.state.rectAreaLTC1,Kt.ltc_2.value=ot.state.rectAreaLTC2,Kt.pointLights.value=ot.state.point,Kt.pointLightShadows.value=ot.state.pointShadow,Kt.hemisphereLights.value=ot.state.hemi,Kt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Kt.spotLightMatrix.value=ot.state.spotLightMatrix,Kt.spotLightMap.value=ot.state.spotLightMap,Kt.pointShadowMatrix.value=ot.state.pointShadowMatrix),dt.currentProgram=de,dt.uniformsList=null,de}function xl(w){if(w.uniformsList===null){const Q=w.currentProgram.getUniforms();w.uniformsList=du.seqWithValue(Q.seq,w.uniforms)}return w.uniformsList}function Sl(w,Q){const gt=T.get(w);gt.outputColorSpace=Q.outputColorSpace,gt.batching=Q.batching,gt.batchingColor=Q.batchingColor,gt.instancing=Q.instancing,gt.instancingColor=Q.instancingColor,gt.instancingMorph=Q.instancingMorph,gt.skinning=Q.skinning,gt.morphTargets=Q.morphTargets,gt.morphNormals=Q.morphNormals,gt.morphColors=Q.morphColors,gt.morphTargetsCount=Q.morphTargetsCount,gt.numClippingPlanes=Q.numClippingPlanes,gt.numIntersection=Q.numClipIntersection,gt.vertexAlphas=Q.vertexAlphas,gt.vertexTangents=Q.vertexTangents,gt.toneMapping=Q.toneMapping}function yl(w,Q,gt,dt,ot){Q.isScene!==!0&&(Q=te),tt.resetTextureUnits();const It=Q.fog,qt=dt.isMeshStandardMaterial||dt.isMeshLambertMaterial||dt.isMeshPhongMaterial?Q.environment:null,Bt=Y===null?O.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Qr,$t=dt.isMeshStandardMaterial||dt.isMeshLambertMaterial&&!dt.envMap||dt.isMeshPhongMaterial&&!dt.envMap,ae=yt.get(dt.envMap||qt,$t),oe=dt.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,de=!!gt.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),Kt=!!gt.morphAttributes.position,_e=!!gt.morphAttributes.normal,Qe=!!gt.morphAttributes.color;let Je=Yi;dt.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Je=O.toneMapping);const Oe=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,_n=Oe!==void 0?Oe.length:0,Jt=T.get(dt),Bn=G.state.lights;if(Dt===!0&&(Pt===!0||w!==et)){const un=w===et&&dt.id===st;Rt.setState(dt,w,un)}let fe=!1;dt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Bn.state.version||Jt.outputColorSpace!==Bt||ot.isBatchedMesh&&Jt.batching===!1||!ot.isBatchedMesh&&Jt.batching===!0||ot.isBatchedMesh&&Jt.batchingColor===!0&&ot.colorTexture===null||ot.isBatchedMesh&&Jt.batchingColor===!1&&ot.colorTexture!==null||ot.isInstancedMesh&&Jt.instancing===!1||!ot.isInstancedMesh&&Jt.instancing===!0||ot.isSkinnedMesh&&Jt.skinning===!1||!ot.isSkinnedMesh&&Jt.skinning===!0||ot.isInstancedMesh&&Jt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Jt.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Jt.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Jt.instancingMorph===!1&&ot.morphTexture!==null||Jt.envMap!==ae||dt.fog===!0&&Jt.fog!==It||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Rt.numPlanes||Jt.numIntersection!==Rt.numIntersection)||Jt.vertexAlphas!==oe||Jt.vertexTangents!==de||Jt.morphTargets!==Kt||Jt.morphNormals!==_e||Jt.morphColors!==Qe||Jt.toneMapping!==Je||Jt.morphTargetsCount!==_n)&&(fe=!0):(fe=!0,Jt.__version=dt.version);let zn=Jt.currentProgram;fe===!0&&(zn=wa(dt,Q,ot));let Qn=!1,Ei=!1,Jn=!1;const Be=zn.getUniforms(),cn=Jt.uniforms;if(Wt.useProgram(zn.program)&&(Qn=!0,Ei=!0,Jn=!0),dt.id!==st&&(st=dt.id,Ei=!0),Qn||et!==w){Wt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Be.setValue(W,"projectionMatrix",w.projectionMatrix),Be.setValue(W,"viewMatrix",w.matrixWorldInverse);const Ti=Be.map.cameraPosition;Ti!==void 0&&Ti.setValue(W,Ot.setFromMatrixPosition(w.matrixWorld)),Ae.logarithmicDepthBuffer&&Be.setValue(W,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&Be.setValue(W,"isOrthographic",w.isOrthographicCamera===!0),et!==w&&(et=w,Ei=!0,Jn=!0)}if(Jt.needsLights&&(Bn.state.directionalShadowMap.length>0&&Be.setValue(W,"directionalShadowMap",Bn.state.directionalShadowMap,tt),Bn.state.spotShadowMap.length>0&&Be.setValue(W,"spotShadowMap",Bn.state.spotShadowMap,tt),Bn.state.pointShadowMap.length>0&&Be.setValue(W,"pointShadowMap",Bn.state.pointShadowMap,tt)),ot.isSkinnedMesh){Be.setOptional(W,ot,"bindMatrix"),Be.setOptional(W,ot,"bindMatrixInverse");const un=ot.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Be.setValue(W,"boneTexture",un.boneTexture,tt))}ot.isBatchedMesh&&(Be.setOptional(W,ot,"batchingTexture"),Be.setValue(W,"batchingTexture",ot._matricesTexture,tt),Be.setOptional(W,ot,"batchingIdTexture"),Be.setValue(W,"batchingIdTexture",ot._indirectTexture,tt),Be.setOptional(W,ot,"batchingColorTexture"),ot._colorsTexture!==null&&Be.setValue(W,"batchingColorTexture",ot._colorsTexture,tt));const Hn=gt.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Xt.update(ot,gt,zn),(Ei||Jt.receiveShadow!==ot.receiveShadow)&&(Jt.receiveShadow=ot.receiveShadow,Be.setValue(W,"receiveShadow",ot.receiveShadow)),(dt.isMeshStandardMaterial||dt.isMeshLambertMaterial||dt.isMeshPhongMaterial)&&dt.envMap===null&&Q.environment!==null&&(cn.envMapIntensity.value=Q.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=kR()),Ei&&(Be.setValue(W,"toneMappingExposure",O.toneMappingExposure),Jt.needsLights&&ds(cn,Jn),It&&dt.fog===!0&&ee.refreshFogUniforms(cn,It),ee.refreshMaterialUniforms(cn,dt,$,X,G.state.transmissionRenderTarget[w.id]),du.upload(W,xl(Jt),cn,tt)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(du.upload(W,xl(Jt),cn,tt),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&Be.setValue(W,"center",ot.center),Be.setValue(W,"modelViewMatrix",ot.modelViewMatrix),Be.setValue(W,"normalMatrix",ot.normalMatrix),Be.setValue(W,"modelMatrix",ot.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){const un=dt.uniformsGroups;for(let Ti=0,ta=un.length;Ti<ta;Ti++){const Ys=un[Ti];jt.update(Ys,zn),jt.bind(Ys,zn)}}return zn}function ds(w,Q){w.ambientLightColor.needsUpdate=Q,w.lightProbe.needsUpdate=Q,w.directionalLights.needsUpdate=Q,w.directionalLightShadows.needsUpdate=Q,w.pointLights.needsUpdate=Q,w.pointLightShadows.needsUpdate=Q,w.spotLights.needsUpdate=Q,w.spotLightShadows.needsUpdate=Q,w.rectAreaLights.needsUpdate=Q,w.hemisphereLights.needsUpdate=Q}function io(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(w,Q,gt){const dt=T.get(w);dt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,dt.__autoAllocateDepthBuffer===!1&&(dt.__useRenderToTexture=!1),T.get(w.texture).__webglTexture=Q,T.get(w.depthTexture).__webglTexture=dt.__autoAllocateDepthBuffer?void 0:gt,dt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Q){const gt=T.get(w);gt.__webglFramebuffer=Q,gt.__useDefaultFramebuffer=Q===void 0};const Da=W.createFramebuffer();this.setRenderTarget=function(w,Q=0,gt=0){Y=w,H=Q,q=gt;let dt=null,ot=!1,It=!1;if(w){const Bt=T.get(w);if(Bt.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(W.FRAMEBUFFER,Bt.__webglFramebuffer),U.copy(w.viewport),F.copy(w.scissor),k=w.scissorTest,Wt.viewport(U),Wt.scissor(F),Wt.setScissorTest(k),st=-1;return}else if(Bt.__webglFramebuffer===void 0)tt.setupRenderTarget(w);else if(Bt.__hasExternalTextures)tt.rebindTextures(w,T.get(w.texture).__webglTexture,T.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const oe=w.depthTexture;if(Bt.__boundDepthTexture!==oe){if(oe!==null&&T.has(oe)&&(w.width!==oe.image.width||w.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(w)}}const $t=w.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(It=!0);const ae=T.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ae[Q])?dt=ae[Q][gt]:dt=ae[Q],ot=!0):w.samples>0&&tt.useMultisampledRTT(w)===!1?dt=T.get(w).__webglMultisampledFramebuffer:Array.isArray(ae)?dt=ae[gt]:dt=ae,U.copy(w.viewport),F.copy(w.scissor),k=w.scissorTest}else U.copy(Z).multiplyScalar($).floor(),F.copy(V).multiplyScalar($).floor(),k=ft;if(gt!==0&&(dt=Da),Wt.bindFramebuffer(W.FRAMEBUFFER,dt)&&Wt.drawBuffers(w,dt),Wt.viewport(U),Wt.scissor(F),Wt.setScissorTest(k),ot){const Bt=T.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Bt.__webglTexture,gt)}else if(It){const Bt=Q;for(let $t=0;$t<w.textures.length;$t++){const ae=T.get(w.textures[$t]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+$t,ae.__webglTexture,gt,Bt)}}else if(w!==null&&gt!==0){const Bt=T.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Bt.__webglTexture,gt)}st=-1},this.readRenderTargetPixels=function(w,Q,gt,dt,ot,It,qt,Bt=0){if(!(w&&w.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&qt!==void 0&&($t=$t[qt]),$t){Wt.bindFramebuffer(W.FRAMEBUFFER,$t);try{const ae=w.textures[Bt],oe=ae.format,de=ae.type;if(w.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Bt),!Ae.textureFormatReadable(oe)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(de)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=w.width-dt&&gt>=0&&gt<=w.height-ot&&W.readPixels(Q,gt,dt,ot,Lt.convert(oe),Lt.convert(de),It)}finally{const ae=Y!==null?T.get(Y).__webglFramebuffer:null;Wt.bindFramebuffer(W.FRAMEBUFFER,ae)}}},this.readRenderTargetPixelsAsync=async function(w,Q,gt,dt,ot,It,qt,Bt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $t=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&qt!==void 0&&($t=$t[qt]),$t)if(Q>=0&&Q<=w.width-dt&&gt>=0&&gt<=w.height-ot){Wt.bindFramebuffer(W.FRAMEBUFFER,$t);const ae=w.textures[Bt],oe=ae.format,de=ae.type;if(w.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Bt),!Ae.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Kt),W.bufferData(W.PIXEL_PACK_BUFFER,It.byteLength,W.STREAM_READ),W.readPixels(Q,gt,dt,ot,Lt.convert(oe),Lt.convert(de),0);const _e=Y!==null?T.get(Y).__webglFramebuffer:null;Wt.bindFramebuffer(W.FRAMEBUFFER,_e);const Qe=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await sb(W,Qe,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Kt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,It),W.deleteBuffer(Kt),W.deleteSync(Qe),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Q=null,gt=0){const dt=Math.pow(2,-gt),ot=Math.floor(w.image.width*dt),It=Math.floor(w.image.height*dt),qt=Q!==null?Q.x:0,Bt=Q!==null?Q.y:0;tt.setTexture2D(w,0),W.copyTexSubImage2D(W.TEXTURE_2D,gt,0,0,qt,Bt,ot,It),Wt.unbindTexture()};const Na=W.createFramebuffer(),hs=W.createFramebuffer();this.copyTextureToTexture=function(w,Q,gt=null,dt=null,ot=0,It=0){let qt,Bt,$t,ae,oe,de,Kt,_e,Qe;const Je=w.isCompressedTexture?w.mipmaps[It]:w.image;if(gt!==null)qt=gt.max.x-gt.min.x,Bt=gt.max.y-gt.min.y,$t=gt.isBox3?gt.max.z-gt.min.z:1,ae=gt.min.x,oe=gt.min.y,de=gt.isBox3?gt.min.z:0;else{const cn=Math.pow(2,-ot);qt=Math.floor(Je.width*cn),Bt=Math.floor(Je.height*cn),w.isDataArrayTexture?$t=Je.depth:w.isData3DTexture?$t=Math.floor(Je.depth*cn):$t=1,ae=0,oe=0,de=0}dt!==null?(Kt=dt.x,_e=dt.y,Qe=dt.z):(Kt=0,_e=0,Qe=0);const Oe=Lt.convert(Q.format),_n=Lt.convert(Q.type);let Jt;Q.isData3DTexture?(tt.setTexture3D(Q,0),Jt=W.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(tt.setTexture2DArray(Q,0),Jt=W.TEXTURE_2D_ARRAY):(tt.setTexture2D(Q,0),Jt=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Q.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Q.unpackAlignment);const Bn=W.getParameter(W.UNPACK_ROW_LENGTH),fe=W.getParameter(W.UNPACK_IMAGE_HEIGHT),zn=W.getParameter(W.UNPACK_SKIP_PIXELS),Qn=W.getParameter(W.UNPACK_SKIP_ROWS),Ei=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,Je.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Je.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ae),W.pixelStorei(W.UNPACK_SKIP_ROWS,oe),W.pixelStorei(W.UNPACK_SKIP_IMAGES,de);const Jn=w.isDataArrayTexture||w.isData3DTexture,Be=Q.isDataArrayTexture||Q.isData3DTexture;if(w.isDepthTexture){const cn=T.get(w),Hn=T.get(Q),un=T.get(cn.__renderTarget),Ti=T.get(Hn.__renderTarget);Wt.bindFramebuffer(W.READ_FRAMEBUFFER,un.__webglFramebuffer),Wt.bindFramebuffer(W.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let ta=0;ta<$t;ta++)Jn&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,T.get(w).__webglTexture,ot,de+ta),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,T.get(Q).__webglTexture,It,Qe+ta)),W.blitFramebuffer(ae,oe,qt,Bt,Kt,_e,qt,Bt,W.DEPTH_BUFFER_BIT,W.NEAREST);Wt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ot!==0||w.isRenderTargetTexture||T.has(w)){const cn=T.get(w),Hn=T.get(Q);Wt.bindFramebuffer(W.READ_FRAMEBUFFER,Na),Wt.bindFramebuffer(W.DRAW_FRAMEBUFFER,hs);for(let un=0;un<$t;un++)Jn?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,cn.__webglTexture,ot,de+un):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,cn.__webglTexture,ot),Be?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Hn.__webglTexture,It,Qe+un):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Hn.__webglTexture,It),ot!==0?W.blitFramebuffer(ae,oe,qt,Bt,Kt,_e,qt,Bt,W.COLOR_BUFFER_BIT,W.NEAREST):Be?W.copyTexSubImage3D(Jt,It,Kt,_e,Qe+un,ae,oe,qt,Bt):W.copyTexSubImage2D(Jt,It,Kt,_e,ae,oe,qt,Bt);Wt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Be?w.isDataTexture||w.isData3DTexture?W.texSubImage3D(Jt,It,Kt,_e,Qe,qt,Bt,$t,Oe,_n,Je.data):Q.isCompressedArrayTexture?W.compressedTexSubImage3D(Jt,It,Kt,_e,Qe,qt,Bt,$t,Oe,Je.data):W.texSubImage3D(Jt,It,Kt,_e,Qe,qt,Bt,$t,Oe,_n,Je):w.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,It,Kt,_e,qt,Bt,Oe,_n,Je.data):w.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,It,Kt,_e,Je.width,Je.height,Oe,Je.data):W.texSubImage2D(W.TEXTURE_2D,It,Kt,_e,qt,Bt,Oe,_n,Je);W.pixelStorei(W.UNPACK_ROW_LENGTH,Bn),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,fe),W.pixelStorei(W.UNPACK_SKIP_PIXELS,zn),W.pixelStorei(W.UNPACK_SKIP_ROWS,Qn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Ei),It===0&&Q.generateMipmaps&&W.generateMipmap(Jt),Wt.unbindTexture()},this.initRenderTarget=function(w){T.get(w).__webglFramebuffer===void 0&&tt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?tt.setTextureCube(w,0):w.isData3DTexture?tt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?tt.setTexture2DArray(w,0):tt.setTexture2D(w,0),Wt.unbindTexture()},this.resetState=function(){H=0,q=0,Y=null,Wt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const rl=400,jR=[.5,.8,.95,.6,.38,.14,.05,.55,.5,.8,.95,.6,.38,.14,.05,.55],Xr=3,Hv=Math.PI*.75,Gv=2.6,yh=1.4,ol=1.8;function WR({eegData:r,yScale:t,onExit:i}){const s=rt.useRef(null),l=rt.useRef(null),c=rt.useRef(null),d=rt.useRef(null),p=rt.useRef([]),m=rt.useRef(null),h=rt.useRef(null),x=rt.useRef(!1),S=rt.useRef(new Zb),g=rt.useRef(r),b=rt.useRef(t),M=rt.useRef(i);g.current=r,b.current=t,M.current=i;const R=rt.useCallback(()=>{if(x.current)return;x.current=!0,m.current&&(m.current.end().catch(()=>{}),m.current=null),h.current!=null&&(cancelAnimationFrame(h.current),h.current=null);const _=l.current;_&&(_.xr.enabled=!1,_.setAnimationLoop(null),_.dispose(),l.current=null),p.current=[]},[]);return rt.useEffect(()=>{const _=s.current;if(!_)return;x.current=!1;const v=S.current;v.start();const A=new yb;A.background=new ye(198159),A.fog=new Op(198159,.07),c.current=A;const N=new li(80,window.innerWidth/window.innerHeight,.05,60);N.position.set(0,yh,0),d.current=N;const D=new XR({antialias:!0,alpha:!1});D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.setSize(window.innerWidth,window.innerHeight),D.xr.enabled=!0,D.toneMapping=Ep,D.toneMappingExposure=1.2,_.appendChild(D.domElement),l.current=D;const G=new Wb(1122884,.8);A.add(G);const B=new jb(4491519,1.5,25);B.position.set(0,yh+1,0),A.add(B);const z=1500,E=new Float32Array(z*3),O=new Float32Array(z*3);for(let X=0;X<z;X++){const $=10+Math.random()*15,pt=Math.random()*Math.PI*2,St=Math.acos(2*Math.random()-1);E[X*3]=$*Math.sin(St)*Math.cos(pt),E[X*3+1]=$*Math.sin(St)*Math.sin(pt),E[X*3+2]=$*Math.cos(St),O[X*3]=.7+Math.random()*.3,O[X*3+1]=.75+Math.random()*.25,O[X*3+2]=.85+Math.random()*.15}const at=new Fn;at.setAttribute("position",new Ln(E,3)),at.setAttribute("color",new Ln(O,3));const H=new gp({size:.05,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0}),q=new uv(at,H);A.add(q);const st=[{color:4853888,center:[5,2,-10],count:400,spread:5},{color:666208,center:[-6,1,-9],count:350,spread:4},{color:14928,center:[1,4,-12],count:300,spread:4}].map(({color:X,center:$,count:pt,spread:St})=>{const Z=new Float32Array(pt*3);for(let Dt=0;Dt<pt;Dt++)Z[Dt*3]=$[0]+(Math.random()-.5)*St,Z[Dt*3+1]=$[1]+(Math.random()-.5)*St,Z[Dt*3+2]=$[2]+(Math.random()-.5)*St;const V=new Fn;V.setAttribute("position",new Ln(Z,3));const ft=new gp({color:X,size:.12,transparent:!0,opacity:.16,sizeAttenuation:!0,depthWrite:!1}),Mt=new uv(V,ft);return A.add(Mt),Mt}),et=[],U=new ye;for(let X=0;X<tn;X++){const $=X/(tn-1),pt=-Hv/2+$*Hv,St=yh+Gv/2-$*Gv,Z=jR[X],V=new Float32Array(rl*3),ft=new Float32Array(rl*3),Mt=new Fn;Mt.setAttribute("position",new Ln(V,3)),Mt.setAttribute("color",new Ln(ft,3)),Mt.setDrawRange(0,0);const Dt=new Bp({vertexColors:!0,transparent:!0,opacity:.92,linewidth:2}),Pt=new gx(Mt,Dt);A.add(Pt);const kt=document.createElement("canvas");kt.width=128,kt.height=48;const Ot=kt.getContext("2d");Ot.clearRect(0,0,128,48),U.setHSL(Z,.9,.7),Ot.font="bold 28px monospace",Ot.fillStyle=`#${U.getHexString()}`,Ot.textAlign="center",Ot.textBaseline="middle",Ot.fillText(`Ch ${X+1}`,64,24);const Ft=new Ob(kt),te=new px({map:Ft,transparent:!0,opacity:.65}),Gt=new Rb(te);Gt.scale.set(.4,.15,1);const ue=Math.sin(pt)*(Xr+.05),W=-Math.cos(pt)*(Xr+.05),Te=ue-Math.cos(pt)*(ol/2),me=W+Math.sin(pt)*(ol/2);Gt.position.set(Te-Math.cos(pt)*.3,St,me+Math.sin(pt)*.3),A.add(Gt);const Ae=new _l(ol+.3,.14),Wt=new Fp({color:new ye().setHSL(Z,1,.55),transparent:!0,opacity:.05,side:Xi,depthWrite:!1}),P=new Qi(Ae,Wt);P.position.set(Math.sin(pt)*Xr,St,-Math.cos(pt)*Xr),P.rotation.y=pt,A.add(P),et.push({line:Pt,geometry:Mt,positions:V,colors:ft,angle:pt,yPos:St,glowPlane:P,baseHue:Z})}p.current=et;const F=new Kb(12,24,660784,396830);A.add(F);function k(X){const $=g.current,pt=$.buffers.current;if(!pt)return;const St=$.samplesInBuffer.current,Z=$.writeIndex.current,V=$.bufferSize;if(St<2)return;const ft=St>rl?Math.floor(St/rl):1,Mt=Math.min(rl,Math.ceil(St/ft)),Dt=b.current||100;for(let Pt=0;Pt<tn;Pt++){const{positions:kt,colors:Ot,geometry:Ft,angle:te,yPos:Gt,glowPlane:ue,baseHue:W}=et[Pt],Te=pt[Pt],me=Math.sin(te)*Xr,Ae=-Math.cos(te)*Xr,Wt=-Math.cos(te),P=-Math.sin(te),T=(W+Math.sin(X*.08+Pt*.4)*.08+1)%1,tt=.85+Math.sin(X*.15+Pt)*.1;let yt=0;for(let mt=0;mt<Mt;mt++){const Yt=mt*ft,Ut=(Z-St+Yt+V)%V,ee=mt/Math.max(1,Mt-1),ne=Te[Ut]/Dt;yt+=ne*ne,kt[mt*3]=me+Wt*(ee-.5)*ol,kt[mt*3+1]=Gt+ne*.14,kt[mt*3+2]=Ae+P*(ee-.5)*ol;const Ct=Math.sin(ee*Math.PI),Rt=.35+Math.min(Math.abs(ne)*3,1)*.65,Vt=Math.min(.95,.5*Ct+Rt*.5);U.setHSL(T,tt,Vt),Ot[mt*3]=U.r,Ot[mt*3+1]=U.g,Ot[mt*3+2]=U.b}Ft.attributes.position.needsUpdate=!0,Ft.attributes.color.needsUpdate=!0,Ft.setDrawRange(0,Mt);const At=Math.sqrt(yt/Math.max(1,Mt));ue.material.opacity=Math.min(.2,.03+At*.9)}G.intensity=.6+Math.sin(X*.5)*.15,B.intensity=1.2+Math.sin(X*.3)*.4,q.rotation.y=X*.005,q.rotation.x=Math.sin(X*.003)*.02,st.forEach((Pt,kt)=>{Pt.material.opacity=.1+Math.sin(X*.2+kt*2.1)*.06,Pt.rotation.y=X*.003*(kt%2===0?1:-1)})}async function nt(){let X=null;if(navigator.xr)for(const $ of["immersive-vr","immersive-ar","inline"])try{if(await navigator.xr.isSessionSupported($)){X=$;break}}catch{}if(X&&X!=="inline")try{const $=await navigator.xr.requestSession(X,{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});m.current=$,D.xr.setSession($),$.addEventListener("end",()=>{m.current=null,M.current()}),D.setAnimationLoop(()=>{k(v.getElapsedTime()),D.render(A,N)});return}catch{}vt()}function vt(){let X=!1,$=0,pt=0,St=0,Z=0,V=!0;const ft=D.domElement,Mt=Ot=>{X=!0,V=!1,$=Ot.clientX,pt=Ot.clientY},Dt=()=>{X=!1},Pt=Ot=>{X&&(St-=(Ot.clientX-$)*.003,Z-=(Ot.clientY-pt)*.003,Z=Math.max(-Math.PI/3,Math.min(Math.PI/3,Z)),$=Ot.clientX,pt=Ot.clientY)};ft.addEventListener("pointerdown",Mt),ft.addEventListener("pointerup",Dt),ft.addEventListener("pointermove",Pt);function kt(){const Ot=v.getElapsedTime();V&&(St=Ot*.04),N.rotation.order="YXZ",N.rotation.y=St,N.rotation.x=Z,k(Ot),D.render(A,N),h.current=requestAnimationFrame(kt)}h.current=requestAnimationFrame(kt)}nt();function I(){l.current&&(N.aspect=window.innerWidth/window.innerHeight,N.updateProjectionMatrix(),D.setSize(window.innerWidth,window.innerHeight))}return window.addEventListener("resize",I),()=>{window.removeEventListener("resize",I),R(),_.contains(D.domElement)&&_.removeChild(D.domElement)}},[]),L.jsxs("div",{className:"xr-overlay",children:[L.jsx("div",{className:"xr-container",ref:s}),L.jsxs("div",{className:"xr-hud",children:[L.jsx("button",{className:"btn xr-exit-btn",onClick:()=>{R(),M.current()},children:"✕ Exit XR"}),L.jsxs("div",{className:"xr-info",children:[L.jsx("span",{className:"xr-badge",children:"WebXR"}),L.jsxs("span",{children:[tn," channels · ±",t," µV"]})]})]})]})}const Vv=256,Mh=4,qR=2.5,Sp=64,kv=.25,YR=[{key:"Alpha",label:"α Alpha"},{key:"Beta",label:"β Beta"},{key:"Theta",label:"θ Theta"},{key:"Delta",label:"δ Delta"},{key:"Gamma",label:"γ Gamma"},{key:"Total",label:"Σ Total"}],Xv=[{label:"Fp1",x:-.3,y:-.85},{label:"Fp2",x:.3,y:-.85},{label:"F7",x:-.7,y:-.45},{label:"F3",x:-.35,y:-.45},{label:"Fz",x:0,y:-.4},{label:"F4",x:.35,y:-.45},{label:"F8",x:.7,y:-.45},{label:"C3",x:-.55,y:0},{label:"Cz",x:0,y:0},{label:"C4",x:.55,y:0},{label:"P3",x:-.45,y:.45},{label:"Pz",x:0,y:.42},{label:"P4",x:.45,y:.45},{label:"O1",x:-.25,y:.85},{label:"Oz",x:0,y:.8},{label:"O2",x:.25,y:.85}],bh=[[6,10,20],[11,37,58],[18,92,109],[0,230,118],[255,215,64],[255,82,82],[255,255,255]],Pi=256,Su=new Uint8Array(Pi),yu=new Uint8Array(Pi),Mu=new Uint8Array(Pi);(function(){const t=bh.length-1;for(let i=0;i<Pi;i++){const l=i/(Pi-1)*t,c=Math.min(Math.floor(l),t-1),d=l-c,p=bh[c],m=bh[c+1];Su[i]=p[0]+(m[0]-p[0])*d|0,yu[i]=p[1]+(m[1]-p[1])*d|0,Mu[i]=p[2]+(m[2]-p[2])*d|0}})();function ZR(r,t){const i=r.length,s=[],l=[],c=[],d=[],p=[],m=[];for(let _=0;_<t;_++)for(let v=0;v<t;v++){const A=-1+2*(v+.5)/t,N=-1+2*(_+.5)/t,D=Math.sqrt(A*A+N*N);if(D>1.05)continue;s.push(_*t+v),l.push(A),c.push(N),d.push(D>.92?(1.05-D)/.13:1);const G=new Array(i);let B=-1,z=0;for(let E=0;E<i;E++){const O=A-r[E].x,at=N-r[E].y,H=Math.sqrt(O*O+at*at);if(H<.001){B=E;break}G[E]=1/H**qR,z+=G[E]}if(B>=0)p.push(B),m.push(new Array(i).fill(0));else{p.push(-1);for(let E=0;E<i;E++)G[E]/=z;m.push(G)}}const h=s.length,x=new Int32Array(s),S=new Float64Array(d),g=new Float64Array(l),b=new Float64Array(c),M=new Int16Array(p),R=new Float64Array(h*i);for(let _=0;_<h;_++){const v=_*i,A=m[_];for(let N=0;N<i;N++)R[v+N]=A[N]}return{cellCount:h,cellIndex:x,edgeFade:S,nx:g,ny:b,weights:R,exactElectrode:M}}function KR(r,t,i,s,l,c){const d=r.data;d.fill(0);let p=1/0,m=-1/0;for(let g=0;g<i.length;g++)i[g]<p&&(p=i[g]),i[g]>m&&(m=i[g]);m<=p&&(m=p+1);const h=m-p,x=(Pi-1)/h,S=t/l;for(let g=0;g<s.cellCount;g++){const b=s.cellIndex[g],M=b/l|0,R=b-M*l;let _;const v=s.exactElectrode[g];if(v>=0)_=i[v];else{_=0;const H=g*c;for(let q=0;q<c;q++)_+=s.weights[H+q]*i[q]}const A=Math.max(0,Math.min(Pi-1,(_-p)*x|0)),N=s.edgeFade[g]*255|0,D=Su[A],G=yu[A],B=Mu[A],z=R*S|0,E=M*S|0,O=Math.min((R+1)*S|0,t),at=Math.min((M+1)*S|0,t);for(let H=E;H<at;H++){let q=(H*t+z)*4;for(let Y=z;Y<O;Y++)d[q]=D,d[q+1]=G,d[q+2]=B,d[q+3]=N,q+=4}}}function QR(r,t,i,s,l){const c=Math.min(t,i),d=t/2,p=i/2,m=c*.4;let h=1/0,x=-1/0;for(let _=0;_<s.length;_++)s[_]<h&&(h=s[_]),s[_]>x&&(x=s[_]);x<=h&&(x=h+1);const S=x-h;r.strokeStyle="rgba(255,255,255,0.25)",r.lineWidth=1.5,r.beginPath(),r.arc(d,p,m,0,Math.PI*2),r.stroke(),r.beginPath(),r.moveTo(d-m*.08,p-m),r.lineTo(d,p-m-m*.12),r.lineTo(d+m*.08,p-m),r.strokeStyle="rgba(255,255,255,0.3)",r.lineWidth=1.5,r.lineJoin="round",r.stroke();for(const _ of[!0,!1]){const v=_?d-m:d+m,A=_?-1:1;r.beginPath(),r.moveTo(v,p-m*.12),r.quadraticCurveTo(v+A*m*.08,p,v,p+m*.12),r.strokeStyle="rgba(255,255,255,0.2)",r.lineWidth=1.2,r.stroke()}for(let _=0;_<l.length&&_<s.length;_++){const v=d+l[_].x*m,A=p+l[_].y*m,N=Math.max(0,Math.min(Pi-1,(s[_]-h)/S*(Pi-1)|0)),D=Su[N],G=yu[N],B=Mu[N];r.beginPath(),r.arc(v,A,5,0,Math.PI*2),r.fillStyle=`rgba(${D},${G},${B},0.4)`,r.shadowColor=`rgba(${D},${G},${B},0.6)`,r.shadowBlur=6,r.fill(),r.shadowBlur=0,r.beginPath(),r.arc(v,A,3,0,Math.PI*2),r.fillStyle="rgba(255,255,255,0.9)",r.fill(),r.beginPath(),r.arc(v,A,2,0,Math.PI*2),r.fillStyle=`rgb(${D},${G},${B})`,r.fill(),r.fillStyle="rgba(255,255,255,0.65)",r.font="7px monospace",r.textAlign="center",r.fillText(l[_].label,v,A+10)}const g=10,b=i*.5,M=t-g-8,R=(i-b)/2;for(let _=0;_<b;_++){const v=Math.max(0,Math.min(Pi-1,(1-_/b)*(Pi-1)|0));r.fillStyle=`rgb(${Su[v]},${yu[v]},${Mu[v]})`,r.fillRect(M,R+_,g,1)}r.strokeStyle="rgba(255,255,255,0.15)",r.lineWidth=.5,r.strokeRect(M,R,g,b),r.fillStyle="rgba(255,255,255,0.4)",r.font="7px monospace",r.textAlign="right",r.fillText(x.toFixed(1),M-3,R+4),r.fillText(h.toFixed(1),M-3,R+b)}const os=Sp*4,JR=rt.memo(function({eegData:t}){var O;const i=rt.useRef(null),s=rt.useRef(0),l=rt.useRef(0),c=rt.useRef(window.devicePixelRatio||1),d=rt.useRef(!0),p=rt.useRef({w:0,h:0,pw:0,ph:0}),m=rt.useRef(new Array(tn).fill(0)),h=rt.useRef(new Array(tn).fill(0)),x=rt.useRef(0),S=rt.useRef(null),g=rt.useRef({}),b=rt.useRef(0),[M,R]=rt.useState("Alpha"),[_,v]=rt.useState(!1),[A,N]=rt.useState({}),[D,G]=rt.useState({band:"",freq:0}),B=rt.useMemo(()=>new qr(Vv,Un),[]),z=rt.useMemo(()=>ZR(Xv,Sp),[]);rt.useEffect(()=>{const at=i.current;if(!at)return;const H=at.getContext("2d",{alpha:!1}),q=document.createElement("canvas");q.width=os,q.height=os;const Y=q.getContext("2d");(!S.current||S.current.width!==os)&&(S.current=new ImageData(os,os));const st=new ResizeObserver(U=>{const F=U[0];if(!F)return;const k=window.devicePixelRatio||1;c.current=k;const{width:nt,height:vt}=F.contentRect;p.current={w:nt,h:vt,pw:Math.round(nt*k),ph:Math.round(vt*k)},d.current=!0});st.observe(at);const et=()=>{const{w:U,h:F,pw:k,ph:nt}=p.current;if(U===0||F===0){s.current=requestAnimationFrame(et);return}if(d.current&&(d.current=!1,at.width=k,at.height=nt),H.setTransform(c.current,0,0,c.current,0,0),H.fillStyle="#0d1117",H.fillRect(0,0,U,F),l.current++,!_){const X=t.buffers.current,$=t.writeIndex.current,pt=t.samplesInBuffer.current;if(X&&pt>=Vv){const St=x.current,Z=St*Mh,V=Math.min(Z+Mh,tn),ft=h.current,Mt=m.current,Dt=g.current;for(let kt=Z;kt<V;kt++){const Ot=B.analyseRing(X[kt],$,pt);if(Ot){ft[kt]=M==="Total"?Ot.totalPower:Ot.bandPowers[M]||0,Mt[kt]=Mt[kt]*(1-kv)+ft[kt]*kv;for(const Ft of on)Dt[Ft.name]=(Dt[Ft.name]||0)-(Dt[`_ch${kt}_${Ft.name}`]||0)+(Ot.bandPowers[Ft.name]||0),Dt[`_ch${kt}_${Ft.name}`]=Ot.bandPowers[Ft.name]||0}}x.current=(St+1)%Math.ceil(tn/Mh);const Pt=performance.now();if(Pt-b.current>400){b.current=Pt;const kt={};let Ot="",Ft=0;for(const te of on)kt[te.name]=(Dt[te.name]||0)/tn,kt[te.name]>Ft&&(Ft=kt[te.name],Ot=te.name);N(kt),G(te=>te.band===Ot?te:{band:Ot,freq:0})}}}const vt=m.current;if(vt.some(X=>X!==0)){const X=S.current;KR(X,os,vt,z,Sp,tn),Y.putImageData(X,0,0);const pt=Math.min(U,F)*.4,St=U/2,Z=F/2,V=pt*2.1;H.imageSmoothingEnabled=!0,H.imageSmoothingQuality="high",H.drawImage(q,0,0,os,os,St-V/2,Z-V/2,V,V),QR(H,U,F,vt,Xv)}else H.fillStyle="#4b5563",H.font="13px monospace",H.textAlign="center",H.fillText("Collecting samples…",U/2,F/2);s.current=requestAnimationFrame(et)};return s.current=requestAnimationFrame(et),()=>{cancelAnimationFrame(s.current),st.disconnect()}},[t,M,_,B,z]);const E=((O=on.find(at=>at.name===D.band))==null?void 0:O.color)||"#8b949e";return L.jsxs("div",{className:"topomap-panel",children:[L.jsxs("div",{className:"topomap-toolbar",children:[L.jsx("span",{className:"topomap-title",children:"Topomap"}),L.jsx("div",{className:"topomap-metrics",children:YR.map(at=>L.jsx("button",{className:`topo-metric${M===at.key?" active":""}`,onClick:()=>R(at.key),children:at.label},at.key))}),L.jsx("span",{className:"topo-dominant",children:L.jsx("strong",{style:{color:E},children:D.band||"—"})}),L.jsx("button",{className:`btn topo-pause${_?" active":""}`,onClick:()=>v(at=>!at),children:_?"▶":"⏸"})]}),L.jsx("div",{className:"topomap-canvas-wrap",children:L.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}})}),L.jsx("div",{className:"topomap-bands",children:on.map(at=>{const H=A[at.name]||0,q=Math.max(...on.map(st=>A[st.name]||0),1e-6),Y=q>0?H/q*100:0;return L.jsxs("div",{className:"topo-band",children:[L.jsx("span",{className:"topo-band-dot",style:{background:at.color}}),L.jsx("span",{className:"topo-band-name",style:{color:at.color},children:at.label}),L.jsx("div",{className:"topo-band-track",children:L.jsx("div",{className:"topo-band-fill",style:{width:`${Y}%`,background:at.color}})}),L.jsx("span",{className:"topo-band-val",children:H<.01?H.toExponential(1):H.toFixed(2)})]},at.name)})})]})});function $R(){const[r,t]=rt.useState(null),[i,s]=rt.useState(!1),[l,c]=rt.useState(!1),[d,p]=rt.useState(!1);if(rt.useEffect(()=>{fetch("/api/update/check").then(g=>g.json()).then(g=>{g.error||t(g),s(!0)}).catch(()=>s(!0))},[]),l||!i||!(r!=null&&r.update_available))return null;const m=r.install_method==="git",h=/win/i.test(navigator.platform),x=m?`git pull origin main
pip install -e .`:"pip install --upgrade pieeg-server",S=h?".\\pieeg-server.cmd":"pieeg-server";return L.jsxs("div",{className:"update-banner",children:[L.jsxs("div",{className:"update-banner-content",children:[L.jsxs("span",{className:"update-banner-text",children:["Update available: ",L.jsx("strong",{children:r.current_version})," →"," ",L.jsx("strong",{children:r.latest_version})]}),L.jsx("button",{className:"btn update-btn",onClick:()=>p(g=>!g),children:d?"Hide instructions":"How to update"}),L.jsx("button",{className:"update-dismiss",onClick:()=>c(!0),title:"Dismiss",children:"✕"})]}),d&&L.jsxs("div",{className:"update-howto",children:[L.jsx("p",{children:m?"Run these commands in your project folder:":"Run this command:"}),L.jsx("pre",{children:L.jsx("code",{children:x})}),L.jsx("p",{children:"Then restart the server:"}),L.jsx("pre",{children:L.jsx("code",{children:S})})]})]})}const t2=[{key:"Space",desc:"Pause / Resume"},{key:"R",desc:"Start / Stop recording"},{key:"F",desc:"Toggle FFT panel"},{key:"V",desc:"Toggle XR / VR view"},{key:"P",desc:"Toggle performance monitor"},{key:"?",desc:"Show this help"},{key:"Esc",desc:"Close overlay / panel"}];function e2(){const[r,t]=rt.useState(!1);return rt.useEffect(()=>{function i(s){const l=s.target.tagName;l==="INPUT"||l==="SELECT"||l==="TEXTAREA"||((s.key==="?"||s.shiftKey&&s.code==="Slash")&&(s.preventDefault(),t(c=>!c)),s.code==="Escape"&&r&&t(!1))}return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[r]),r?L.jsx("div",{className:"modal-overlay",onClick:()=>t(!1),children:L.jsxs("div",{className:"shortcut-card",onClick:i=>i.stopPropagation(),children:[L.jsx("h2",{children:"Keyboard Shortcuts"}),L.jsx("div",{className:"shortcut-grid",children:t2.map(i=>L.jsxs("div",{className:"shortcut-row",children:[L.jsx("kbd",{children:i.key}),L.jsx("span",{children:i.desc})]},i.key))}),L.jsx("button",{className:"btn shortcut-close",onClick:()=>t(!1),children:"Close"})]})}):null}class Eh extends rt.Component{constructor(){super(...arguments);wi(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,s){console.error("[ErrorBoundary]",i,s.componentStack)}render(){var i;return this.state.hasError?L.jsx("div",{className:"error-boundary",children:L.jsxs("div",{className:"error-card",children:[L.jsx("h2",{children:"Something went wrong"}),L.jsx("p",{className:"error-msg",children:(i=this.state.error)==null?void 0:i.message}),L.jsx("button",{className:"btn",onClick:()=>this.setState({hasError:!1,error:null}),children:"Retry"})]})}):this.props.children}}const jv=new Set(Array.from({length:tn},(r,t)=>t)),n2=new Set([0,1,2,3]),i2=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],a2=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"},{value:16,label:"16s"}];function s2(){const[r,t]=rt.useState("live"),[i,s]=rt.useState(null),[l,c]=rt.useState(!1),[d,p]=rt.useState(!0),[m,h]=rt.useState(!1),[x,S]=rt.useState(1),[g,b]=rt.useState(40),[M,R]=rt.useState(4),[_,v]=rt.useState(100),[A,N]=rt.useState(null),[D,G]=rt.useState(!1),[B,z]=rt.useState(()=>window.innerWidth<768?new Set(n2):new Set(jv)),E=Ky(M),O=rt.useRef(B);O.current=B;const at=rt.useCallback(k=>{z(nt=>{const vt=new Set(nt);return vt.has(k)?vt.delete(k):vt.add(k),vt})},[]),H=rt.useCallback(k=>{z(k?new Set(jv):new Set)},[]);function q(){const k=!l;c(k),E.setPaused(k)}function Y(){const k=!m;h(k),E.sendCommand({cmd:"set_filter",enabled:k,lowcut:parseFloat(String(x))||1,highcut:parseFloat(String(g))||40})}function st(){E.sendCommand({cmd:E.recording?"stop_record":"start_record"})}function et(k){const nt=Math.floor(k/60),vt=Math.floor(k%60);return`${String(nt).padStart(2,"0")}:${String(vt).padStart(2,"0")}`}function U(k,nt){m&&E.sendCommand({cmd:"set_filter",enabled:!0,lowcut:parseFloat(String(k))||1,highcut:parseFloat(String(nt))||40})}const F=rt.useCallback(k=>{if(!O.current.has(k)){z(nt=>{const vt=new Set(nt);return vt.add(k),vt});return}N(nt=>nt===k?null:k)},[]);return rt.useEffect(()=>{function k(nt){const vt=nt.target.tagName;if(!(vt==="INPUT"||vt==="SELECT"||vt==="TEXTAREA")){if(r!=="live"){nt.code==="Escape"&&(r==="playback"?(t("sessions"),s(null)):r==="sessions"&&t("live"));return}switch(nt.code){case"Space":nt.preventDefault(),q();break;case"KeyR":st();break;case"KeyF":p(I=>!I);break;case"KeyV":G(I=>!I);break;case"Escape":D?G(!1):A!==null?N(null):E.recordResult&&E.dismissRecordResult();break}}}return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[A,E.recordResult,r]),r==="playback"&&i?L.jsx(Fd,{children:L.jsx(Eh,{children:L.jsx(bM,{filename:i,onBack:()=>{t("sessions"),s(null)}})})}):r==="sessions"?L.jsx(Fd,{children:L.jsx(Eh,{children:L.jsx(gM,{onSelect:k=>{s(k),t("playback")},onBack:()=>t("live")})})}):(E.data.gridSuspended=A!==null&&B.has(A),L.jsxs(Fd,{children:[L.jsx($R,{}),L.jsxs("header",{className:"header",children:[L.jsxs("h1",{children:["Pi",L.jsx("span",{children:"EEG"}),"-16"," ",L.jsx("small",{style:{fontWeight:400,color:"var(--text-dim)"},children:"Dashboard"})]}),L.jsxs("div",{className:"status-bar",children:[L.jsxs("span",{children:[L.jsx("span",{className:`status-dot${E.connected?" connected":""}`}),E.connected?" Connected":" Disconnected"]}),E.latencyMs!==null&&L.jsxs("span",{className:`latency-badge${E.latencyMs>100?" warn":""}${E.latencyMs>500?" critical":""}`,children:[E.latencyMs," ms"]}),L.jsx("span",{className:`live-badge${l?" paused":""}`,children:l?"⏸ PAUSED":"● LIVE"}),L.jsx("span",{children:E.hz?`${E.hz} Hz`:"— Hz"}),L.jsxs("span",{children:[E.sampleCount.toLocaleString()," samples"]})]})]}),L.jsxs("div",{className:"controls",children:[L.jsx("button",{className:`btn${l?" active":""}`,onClick:q,children:l?"▶ Resume":"⏸ Pause"}),L.jsxs("button",{className:`btn btn-record${E.recording?" recording":""}`,onClick:st,children:[L.jsx("span",{className:"rec-dot"}),E.recording?`⏹ Stop ${et(E.recordElapsed)}`:"⏺ Record"]}),L.jsxs("button",{className:`btn${m?" active":""}`,onClick:Y,children:["Filter: ",m?"ON":"OFF"]}),L.jsxs("button",{className:`btn${d?" active":""}`,onClick:()=>p(k=>!k),children:["FFT ",d?"ON":"OFF"]}),L.jsx("button",{className:"btn btn-sessions",onClick:()=>t("sessions"),children:"Sessions"}),L.jsx("button",{className:"btn btn-xr",onClick:()=>G(!0),title:"Open EEG waves in immersive 3D / VR",children:"🥽 XR View"}),L.jsx("div",{className:"sep"}),L.jsxs("div",{className:"control-group",children:[L.jsx("label",{children:"Low"}),L.jsx("input",{type:"number",value:x,min:.1,max:50,step:.5,onChange:k=>{S(k.target.value),U(k.target.value,g)}})," ","Hz"]}),L.jsxs("div",{className:"control-group",children:[L.jsx("label",{children:"High"}),L.jsx("input",{type:"number",value:g,min:1,max:125,step:1,onChange:k=>{b(k.target.value),U(x,k.target.value)}})," ","Hz"]}),L.jsx("div",{className:"sep"}),L.jsxs("div",{className:"control-group",children:[L.jsx("label",{children:"Time window"}),L.jsx("select",{value:M,onChange:k=>R(parseInt(k.target.value)),children:a2.map(k=>L.jsx("option",{value:k.value,children:k.label},k.value))})]}),L.jsxs("div",{className:"control-group",children:[L.jsx("label",{children:"Scale"}),L.jsx("select",{value:_,onChange:k=>v(parseInt(k.target.value)),children:i2.map(k=>L.jsx("option",{value:k.value,children:k.label},k.value))})]})]}),L.jsxs("div",{className:"channel-selector",children:[L.jsx("span",{className:"cs-label",children:"Channels"}),L.jsx("button",{className:"cs-toggle",onClick:()=>H(!0),children:"All"}),L.jsx("button",{className:"cs-toggle",onClick:()=>H(!1),children:"None"}),L.jsx("div",{className:"cs-grid",children:Array.from({length:tn},(k,nt)=>L.jsx("button",{className:`cs-ch${B.has(nt)?" on":""}`,onClick:()=>at(nt),children:nt+1},nt))}),L.jsxs("span",{className:"cs-count",children:[B.size,"/",tn]})]}),L.jsx(Eh,{children:L.jsxs("div",{className:`main-area${d?" with-fft":""}`,children:[A!==null&&B.has(A)&&L.jsx(cM,{chIdx:A,eegData:E.data,yRange:_,onClose:()=>N(null)}),L.jsx("div",{className:"grid",children:Array.from({length:tn},(k,nt)=>L.jsx(eM,{chIdx:nt,eegData:E.data,yRange:_,active:B.has(nt),onToggleExpand:()=>F(nt)},nt))}),d&&L.jsxs("div",{className:"fft-area",children:[L.jsx(pM,{eegData:E.data}),L.jsx(JR,{eegData:E.data})]})]})}),E.recordResult&&L.jsx("div",{className:"modal-overlay",children:L.jsxs("div",{className:"modal-card",children:[L.jsx("h2",{children:"Recording Complete"}),L.jsxs("div",{className:"modal-details",children:[L.jsxs("div",{className:"modal-row",children:[L.jsx("span",{className:"modal-label",children:"File"}),L.jsx("span",{className:"modal-value",children:E.recordResult.filename})]}),L.jsxs("div",{className:"modal-row",children:[L.jsx("span",{className:"modal-label",children:"Duration"}),L.jsx("span",{className:"modal-value",children:et(E.recordResult.duration)})]}),L.jsxs("div",{className:"modal-row",children:[L.jsx("span",{className:"modal-label",children:"Frames"}),L.jsx("span",{className:"modal-value",children:E.recordResult.frames.toLocaleString()})]}),L.jsxs("div",{className:"modal-row",children:[L.jsx("span",{className:"modal-label",children:"Saved to"}),L.jsx("span",{className:"modal-value modal-path",children:E.recordResult.path})]})]}),L.jsxs("div",{className:"modal-actions",children:[L.jsx("a",{className:"btn modal-btn-download",href:E.recordResult.downloadUrl,download:!0,children:"Download CSV"}),L.jsx("button",{className:"btn modal-btn-view",onClick:()=>{const k=E.recordResult.filename;E.dismissRecordResult(),s(k),t("playback")},children:"View Session"}),L.jsx("button",{className:"btn modal-btn-dismiss",onClick:E.dismissRecordResult,children:"Dismiss"})]})]})}),D&&L.jsx(WR,{eegData:E.data,yScale:_,onExit:()=>G(!1)}),L.jsx(mM,{}),L.jsx(e2,{}),L.jsxs("footer",{className:"footer",children:[L.jsx("span",{children:"PiEEG-16-server · React Dashboard"}),L.jsxs("span",{className:"kbd-hints",children:[L.jsx("kbd",{children:"Space"})," Pause ",L.jsx("kbd",{children:"R"})," Record ",L.jsx("kbd",{children:"F"})," FFT ",L.jsx("kbd",{children:"V"})," XR ",L.jsx("kbd",{children:"Esc"})," Close ",L.jsx("kbd",{children:"P"})," Perf"]}),L.jsx("span",{children:"Battery powered only · Not a medical device"})]})]}))}Wy.createRoot(document.getElementById("root")).render(L.jsx(By.StrictMode,{children:L.jsx(s2,{})}));
