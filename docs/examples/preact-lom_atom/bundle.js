!function(){"use strict";function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function i(t,e){return(t.constructor.displayName||t.constructor.name)+"."+e}function s(t,e){Object.defineProperty(t,"name",{value:e,writable:!1}),t.displayName=e}function a(t){return new Proxy(t,zt)}function l(t,e,r,n){if(void 0===n&&(n=[]),t===e)return e;if(r||!t||"object"!=typeof t||!e||"object"!=typeof e||t instanceof Error||e instanceof Error||t.constructor!==e.constructor||Tt.has(t))return t;Tt.set(t,!0);var o=Pt.get(t.constructor);if(!o)return t;if(-1!==n.indexOf(t))return t;n.push(t);var i=o(t,e,n);return n.pop(),i}function u(t){t.check()}function c(t){t.obsolete()}function d(t){t.dislead(this)}function p(t){this.status===Ct&&t.actualize()}function h(t,e,r){try{switch(r.length){case 0:return t[e]();case 1:return t[e](r[0]);case 2:return t[e](r[0],r[1]);case 3:return t[e](r[0],r[1],r[2]);case 4:return t[e](r[0],r[1],r[2],r[3]);case 5:return t[e](r[0],r[1],r[2],r[3],r[4]);default:return t[e].apply(t,r)}}catch(t){if(!(t instanceof St))throw t}}function f(t,e,r,n){var o=e+"$";if(void 0===r.value)throw new TypeError(i(t,e)+" is not an function (next?: V)");t[o]=r.value;var a=!1,l=i(t,e);return{enumerable:r.enumerable,configurable:r.configurable,get:function(){var t=this;if(a)return this[o].bind(this);var r=n?function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return jt(function(){return h(t,o,r)})}:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return h(t,o,r)};return s(r,l),a=!0,Object.defineProperty(this,e,{configurable:!0,enumerable:!1,value:r}),a=!1,r}}}function v(t,e,r){return f(t,e,r,!0)}function _(t,e,r){r.delete(t),t.slaves||t.destructor()}function y(t,e,r){t[e+"$"]=r.value;var n=new WeakMap;return Object.defineProperty(t,e+"()",{get:function(){return n.get(this)}}),{enumerable:r.enumerable,configurable:r.configurable,value:function(t){var r=n.get(this);return void 0===r&&(r=new At(e,this,Mt,n,!1,void 0,void 0,!0),n.set(this,r)),t&&(r.status=wt),r.value()}}}function m(t,e){return function(r){return void 0===r?t.call(this):(e.call(this,r),r)}}function g(t){return function(e){return void 0===e&&t?t.call(this):e}}function b(t,e,r,n){function o(t){var r=l.get(this);return void 0===r&&(r=new At(e,this,Mt,l,n),l.set(this,r)),It===Ot?r:r.value(t,It)}var a=e+"$";if(void 0!==t[a])return r;var l=new WeakMap;if(Object.defineProperty(t,e+"()",{get:function(){return l.get(this)}}),void 0!==r.value)return t[a]=r.value,r.value=o,r;var u=i(t,e);return r.initializer&&s(r.initializer,u),r.get&&s(r.get,"get#"+u),r.set&&s(r.set,"set#"+u),t[a]=void 0===r.get&&void 0===r.set?g(r.initializer):m(r.get,r.set),{enumerable:r.enumerable,configurable:r.configurable,get:o,set:o}}function w(t,e,r){return b(t,e,r,!0)}function C(t){for(var e=Object.keys(t).sort(),r="",n=0;n<e.length;n++){var o=e[n],i=t[o];r+="."+o+":"+("object"==typeof i?JSON.stringify(i):i)}return r}function k(t){return t?t instanceof Array?JSON.stringify(t):"object"==typeof t?C(t):""+t:""}function O(t,e,r,n){var o=i(t,e),s=r.value;if(void 0===s)throw new TypeError(o+" is not an function (rawKey: K, next?: V)");t[e+"$"]=s;var a=new WeakMap;return Object.defineProperty(t,e+"()",{get:function(){return a.get(this)}}),r.value=function(t,r){var o=a.get(this);void 0===o&&(o=new Map,a.set(this,o));var i=k(t),s=o.get(i);return void 0===s&&(s=new At(e,this,Mt,o,n,t,i),o.set(i,s)),It===Ot?s:s.value(r,It)},r}function x(t,e,r){return O(t,e,r,!0)}function S(t){return It=kt,t}function j(t){return It=kt,t.getRetry()}function N(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function z(t,e,r){return e&&N(t.prototype,e),r&&N(t,r),t}function P(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function T(t,e,r,n,o){var i={};return Object.keys(n).forEach(function(t){i[t]=n[t]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,n){return n(t,e,r)||r},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(t,e,i),i=null),i}function E(t,e,r,n,o){var i,s,a;void 0===n&&(n=new Vt),void 0===o&&(o=!1);var l=(a=s=function(t){function r(e,r){var o;(o=t.call(this,e,r)||this)._propsChanged=!0,o._el=void 0,o._lastData=null;var i=n;o._keys=void 0;var s=o.constructor,a=s.displayName;return e&&(o._keys=Object.keys(e),0===o._keys.length&&(o._keys=void 0),void 0!==e.__lom_ctx&&(i=e.__lom_ctx),e.id&&(a=e.id)),o._render=s.render,o._injector=i.copy(s.displayName,s.instance,o._render.aliases),o._injector.id=a,s.instance++,o}P(r,t);var o=r.prototype;return o.toString=function(){return this._injector.toString()},o.shouldComponentUpdate=function(t){if(void 0===this._keys)return!1;for(var e=this.props,r=this._keys,n=0,o=r.length;n<o;n++){var i=r[n];if(e[i]!==t[i])return this._propsChanged=!0,!0}return!0===this.constructor.isFullEqual&&(this._keys=Object.keys(t),this._propsChanged=r.length!==this._keys.length,this._propsChanged)},o.componentWillUnmount=function(){this["r()"].destructor(),this._el=void 0,this._keys=void 0,this.props=void 0,this._lastData=null,void 0!==this._render&&(this.constructor.instance--,this._injector.destructor(),this._injector=void 0)},o.r=function(t){var r=null,n=this._render,o=Vt.parentContext,i=Vt.parentContext=this._injector;try{r=i.invokeWithProps(n,this.props,this._propsChanged),this._lastData=r}catch(t){r=i.invokeWithProps(n.onError||e,{error:t,children:this._lastData}),t[Ut]=!0}return i.rendered="",Vt.parentContext=o,this._propsChanged||(this._el=r,this.forceUpdate(),this._el=void 0),this._propsChanged=!1,r},o.render=function(){return void 0===this._el?this.r(this._propsChanged):this._el},z(r,[{key:"displayName",get:function(){return this.toString()}}]),r}(t),s.isFullEqual=o,i=a,T(i.prototype,"r",[r],Object.getOwnPropertyDescriptor(i.prototype,"r"),i.prototype),i);return function(t){var e=function(t,e){l.call(this,t,e)};return e._r=[2],e.instance=0,e.render=t,e.isFullEqual=t.isFullEqual||o,e.displayName=t.displayName||t.name,e.prototype=Object.create(l.prototype),e.prototype.constructor=e,e}}function D(t,e,r){return function(){var n,o=arguments,i=o[1],s=o[0],a="function"==typeof s&&void 0===s.constructor.render,l=i?i._id||i.id:void 0,u=Vt.parentContext;if(!0===r){if(i||(i={}),i.id)u.id&&(i.id=u.id+"."+i.id);else{if(u.rendered)throw new Error(u.rendered+" need id");i.id=u.id,u.rendered=u.displayName+"."+s}i.key||(i.key=i.id)}if(a){if(null===(n=u.alias(s,l)))return null;void 0!==n&&(s=n),i?i.__lom_ctx=u:i={__lom_ctx:u},void 0===s.__lom&&(s.__lom=t(s)),n=s.__lom}else{if(l){if(null===(n=u.alias(s,l)))return null;void 0!==n&&(s=n)}n=s}switch(o.length){case 2:return e(n,i);case 3:return e(n,i,o[2]);case 4:return e(n,i,o[2],o[3]);case 5:return e(n,i,o[2],o[3],o[4]);case 6:return e(n,i,o[2],o[3],o[4],o[5]);case 7:return e(n,i,o[2],o[3],o[4],o[5],o[6]);case 8:return e(n,i,o[2],o[3],o[4],o[5],o[6],o[7]);case 9:return e(n,i,o[2],o[3],o[4],o[5],o[6],o[7],o[8]);default:if(!1===a)return e.apply(null,o);for(var c=[n,i],d=2,p=o.length;d<p;d++)c.push(o[d]);return e.apply(null,c)}}}function A(){}function M(t,e){var r,n,o,i,s=$t;for(i=arguments.length;i-- >2;)Bt.push(arguments[i]);for(e&&null!=e.children&&(Bt.length||Bt.push(e.children),delete e.children);Bt.length;)if((n=Bt.pop())&&void 0!==n.pop)for(i=n.length;i--;)Bt.push(n[i]);else"boolean"==typeof n&&(n=null),(o="function"!=typeof t)&&(null==n?n="":"number"==typeof n?n=String(n):"string"!=typeof n&&(o=!1)),o&&r?s[s.length-1]+=n:s===$t?s=[n]:s.push(n),r=o;var a=new A;return a.nodeName=t,a.children=s,a.attributes=null==e?void 0:e,a.key=null==e?void 0:e.key,void 0!==Kt.vnode&&Kt.vnode(a),a}function I(t,e){for(var r in e)t[r]=e[r];return t}function U(t){!t._dirty&&(t._dirty=!0)&&1==Gt.push(t)&&(Kt.debounceRendering||Jt)(W)}function W(){var t,e=Gt;for(Gt=[];t=e.pop();)t._dirty&&ot(t)}function R(t,e,r){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&F(t,e.nodeName):r||t._componentConstructor===e.nodeName}function F(t,e){return t.normalizedNodeName===e||t.nodeName.toLowerCase()===e.toLowerCase()}function L(t){var e=I({},t.attributes);e.children=t.children;var r=t.nodeName.defaultProps;if(void 0!==r)for(var n in r)void 0===e[n]&&(e[n]=r[n]);return e}function H(t,e){var r=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return r.normalizedNodeName=t,r}function V(t){var e=t.parentNode;e&&e.removeChild(t)}function K(t,e,r,n,o){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)r&&r(null),n&&n(t);else if("class"!==e||o)if("style"===e){if(n&&"string"!=typeof n&&"string"!=typeof r||(t.style.cssText=n||""),n&&"object"==typeof n){if("string"!=typeof r)for(var i in r)i in n||(t.style[i]="");for(var i in n)t.style[i]="number"==typeof n[i]&&!1===qt.test(i)?n[i]+"px":n[i]}}else if("dangerouslySetInnerHTML"===e)n&&(t.innerHTML=n.__html||"");else if("o"==e[0]&&"n"==e[1]){var s=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),n?r||t.addEventListener(e,$,s):t.removeEventListener(e,$,s),(t._listeners||(t._listeners={}))[e]=n}else if("list"!==e&&"type"!==e&&!o&&e in t)B(t,e,null==n?"":n),null!=n&&!1!==n||t.removeAttribute(e);else{var a=o&&e!==(e=e.replace(/^xlink\:?/,""));null==n||!1===n?a?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof n&&(a?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):t.setAttribute(e,n))}else t.className=n||""}function B(t,e,r){try{t[e]=r}catch(t){}}function $(t){return this._listeners[t.type](Kt.event&&Kt.event(t)||t)}function J(){for(var t;t=Qt.pop();)Kt.afterMount&&Kt.afterMount(t),t.componentDidMount&&t.componentDidMount()}function q(t,e,r,n,o,i){Xt++||(Yt=null!=o&&void 0!==o.ownerSVGElement,Zt=null!=t&&!("__preactattr_"in t));var s=G(t,e,r,n,i);return o&&s.parentNode!==o&&o.appendChild(s),--Xt||(Zt=!1,i||J()),s}function G(t,e,r,n,o){var i=t,s=Yt;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),X(t,!0))),i.__preactattr_=!0,i;var a=e.nodeName;if("function"==typeof a)return it(t,e,r,n);if(Yt="svg"===a||"foreignObject"!==a&&Yt,a=String(a),(!t||!F(t,a))&&(i=H(a,Yt),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),X(t,!0)}var l=i.firstChild,u=i.__preactattr_,c=e.children;if(null==u){u=i.__preactattr_={};for(var d=i.attributes,p=d.length;p--;)u[d[p].name]=d[p].value}return!Zt&&c&&1===c.length&&"string"==typeof c[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling?l.nodeValue!=c[0]&&(l.nodeValue=c[0]):(c&&c.length||null!=l)&&Q(i,c,r,n,Zt||null!=u.dangerouslySetInnerHTML),Z(i,e.attributes,u),Yt=s,i}function Q(t,e,r,n,o){var i,s,a,l,u,c=t.childNodes,d=[],p={},h=0,f=0,v=c.length,_=0,y=e?e.length:0;if(0!==v)for(var m=0;m<v;m++){var g=c[m],b=g.__preactattr_;null!=(w=y&&b?g._component?g._component.__key:b.key:null)?(h++,p[w]=g):(b||(void 0!==g.splitText?!o||g.nodeValue.trim():o))&&(d[_++]=g)}if(0!==y)for(m=0;m<y;m++){u=null;var w;if(null!=(w=(l=e[m]).key))h&&void 0!==p[w]&&(u=p[w],p[w]=void 0,h--);else if(!u&&f<_)for(i=f;i<_;i++)if(void 0!==d[i]&&R(s=d[i],l,o)){u=s,d[i]=void 0,i===_-1&&_--,i===f&&f++;break}u=G(u,l,r,n),a=c[m],u&&u!==t&&u!==a&&(null==a?t.appendChild(u):u===a.nextSibling?V(a):t.insertBefore(u,a))}if(h)for(var m in p)void 0!==p[m]&&X(p[m],!1);for(;f<=_;)void 0!==(u=d[_--])&&X(u,!1)}function X(t,e){var r=t._component;r?st(r):(null!=t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),!1!==e&&null!=t.__preactattr_||V(t),Y(t))}function Y(t){for(t=t.lastChild;t;){var e=t.previousSibling;X(t,!0),t=e}}function Z(t,e,r){var n;for(n in r)e&&null!=e[n]||null==r[n]||K(t,n,r[n],r[n]=void 0,Yt);for(n in e)"children"===n||"innerHTML"===n||n in r&&e[n]===("value"===n||"checked"===n?t[n]:r[n])||K(t,n,r[n],r[n]=e[n],Yt)}function tt(t){var e=t.constructor.name;(te[e]||(te[e]=[])).push(t)}function et(t,e,r){var n,o=te[t.name];if(t.prototype&&t.prototype.render?(n=new t(e,r),at.call(n,e,r)):((n=new at(e,r)).constructor=t,n.render=rt),o)for(var i=o.length;i--;)if(o[i].constructor===t){n.nextBase=o[i].nextBase,o.splice(i,1);break}return n}function rt(t,e,r){return this.constructor(t,r)}function nt(t,e,r,n,o){t._disable||(t._disable=!0,(t.__ref=e.ref)&&delete e.ref,(t.__key=e.key)&&delete e.key,!t.base||o?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,n),n&&n!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=n),t.prevProps||(t.prevProps=t.props),t.props=e,t._disable=!1,0!==r&&(1!==r&&!1===Kt.syncComponentUpdates&&t.base?U(t):ot(t,1,o)),t.__ref&&t.__ref(t))}function ot(t,e,r,n){if(!t._disable){var o,i,s,a=t.props,l=t.state,u=t.context,c=t.prevProps||a,d=t.prevState||l,p=t.prevContext||u,h=t.base,f=t.nextBase,v=h||f,_=t._component,y=!1;if(h&&(t.props=c,t.state=d,t.context=p,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(a,l,u)?y=!0:t.componentWillUpdate&&t.componentWillUpdate(a,l,u),t.props=a,t.state=l,t.context=u),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!y){o=t.render(a,l,u),t.getChildContext&&(u=I(I({},u),t.getChildContext()));var m,g,b=o&&o.nodeName;if("function"==typeof b){var w=L(o);(i=_)&&i.constructor===b&&w.key==i.__key?nt(i,w,1,u,!1):(m=i,t._component=i=et(b,w,u),i.nextBase=i.nextBase||f,i._parentComponent=t,nt(i,w,0,u,!1),ot(i,1,r,!0)),g=i.base}else s=v,(m=_)&&(s=t._component=null),(v||1===e)&&(s&&(s._component=null),g=q(s,o,u,r||!h,v&&v.parentNode,!0));if(v&&g!==v&&i!==_){var C=v.parentNode;C&&g!==C&&(C.replaceChild(g,v),m||(v._component=null,X(v,!1)))}if(m&&st(m),t.base=g,g&&!n){for(var k=t,O=t;O=O._parentComponent;)(k=O).base=g;g._component=k,g._componentConstructor=k.constructor}}if(!h||r?Qt.unshift(t):y||(t.componentDidUpdate&&t.componentDidUpdate(c,d,p),Kt.afterUpdate&&Kt.afterUpdate(t)),null!=t._renderCallbacks)for(;t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);Xt||n||J()}}function it(t,e,r,n){for(var o=t&&t._component,i=o,s=t,a=o&&t._componentConstructor===e.nodeName,l=a,u=L(e);o&&!l&&(o=o._parentComponent);)l=o.constructor===e.nodeName;return o&&l&&(!n||o._component)?(nt(o,u,3,r,n),t=o.base):(i&&!a&&(st(i),t=s=null),o=et(e.nodeName,u,r),t&&!o.nextBase&&(o.nextBase=t,s=null),nt(o,u,1,r,n),t=o.base,s&&t!==s&&(s._component=null,X(s,!1))),t}function st(t){Kt.beforeUnmount&&Kt.beforeUnmount(t);var e=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var r=t._component;r?st(r):e&&(e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),t.nextBase=e,V(e),tt(t),Y(e)),t.__ref&&t.__ref(null)}function at(t,e){this._dirty=!0,this.context=e,this.props=t,this.state=this.state||{}}function lt(t,e,r){return q(r,t,{},!1,e,!1)}function ut(){for(var t="",e=0;e<32;e++){var r=16*Math.random()|0;8!==e&&12!==e&&16!==e&&20!==e||(t+="-"),t+=(12===e?4:16===e?3&r|8:r).toString(16)}return t}function ct(t,e){return 1===t?e:e+"s"}function dt(t){var e=t.error;return lom_h("div",null,e instanceof St?lom_h("div",null,"Loading..."):lom_h("div",null,lom_h("h3",null,"Fatal error !"),lom_h("div",null,e.message),lom_h("pre",null,e.stack.toString())))}function pt(t,e,r,n,o){var i={};return Object.keys(n).forEach(function(t){i[t]=n[t]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,n){return n(t,e,r)||r},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(t,e,i),i=null),i}function ht(t,e,r,n,o){var i={};return Object.keys(n).forEach(function(t){i[t]=n[t]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,n){return n(t,e,r)||r},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(t,e,i),i=null),i}function ft(t){var e=t.todoHeaderService;return lom_h("header",{id:"header"},lom_h("h1",null,"todos"),lom_h("input",{id:"new-todo",placeholder:"What needs to be done?",onInput:e.onInput,value:e.title,onKeyDown:e.onKeyDown,autoFocus:!0}))}function vt(t){var e=t.nowShowing,r=t.count,n=t.completedCount,o=t.onClearCompleted;return lom_h("footer",{id:"footer"},lom_h("span",{id:"todo-count"},lom_h("strong",null,r)," ",ct(r,"item")," left"),lom_h("ul",{id:"filters"},lom_h("li",null,lom_h("a",{href:"./?todo_filter=all",className:{selected:e===me}},"All"))," ",lom_h("li",null,lom_h("a",{href:"./?todo_filter=active",className:{selected:e===ge}},"Active"))," ",lom_h("li",null,lom_h("a",{href:"./?todo_filter=completed",className:{selected:e===be}},"Completed"))),n>0?lom_h("button",{id:"clear-completed",onClick:o},"Clear completed"):null)}function _t(t,e,r,n){r&&Object.defineProperty(t,e,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function yt(t,e,r,n,o){var i={};return Object.keys(n).forEach(function(t){i[t]=n[t]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,n){return n(t,e,r)||r},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(t,e,i),i=null),i}function mt(t){var e=t.todo,r=xe.editingId===e.id;return lom_h("li",{className:(e.completed?"completed ":" ")+(r?"editing":"")},lom_h("div",{className:"view"},lom_h("input",{className:"toggle",type:"checkbox",checked:e.completed||0,onClick:e.toggle}),lom_h("label",{onDblClick:function(){return xe.beginEdit(e)}},e.title),lom_h("button",{className:"destroy",onClick:e.destroy})),r?lom_h("input",{ref:xe.setFocus,className:"edit",value:xe.editingId&&xe.editText||e.title,onBlur:xe.submit,onInput:xe.setEditText,onKeyDown:xe.onKey}):null)}function gt(t){var e=t.todoService,r=t.todoFilterService,n=t.todoHeaderService,o=e.todos;return lom_h("div",null,lom_h(ft,{todoHeaderService:n}),o.length?lom_h("section",{id:"main"},lom_h("input",{id:"toggle-all",type:"checkbox",onChange:e.toggleAll,checked:0===e.activeTodoCount}),lom_h("ul",{id:"todo-list"},r.filteredTodos.map(function(t){return lom_h(mt,{key:t.id,todo:t})}))):null,e.activeTodoCount||e.completedCount?lom_h(vt,{count:e.activeTodoCount,completedCount:e.completedCount,nowShowing:r.filter,onClearCompleted:e.clearCompleted}):null)}var bt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};r._r=[2],n._r=[2],o._r=[2];var wt=1,Ct=2,kt=0,Ot=3,xt=Symbol("lom_cached"),St=function(t){function e(e){var r;return void 0===e&&(e="Wait..."),r=t.call(this,e)||this,r.__proto__=new.target.prototype,r[xt]=!0,r}return o(e,t),e}(Error);i._r=[2],s._r=[2];var jt="function"==typeof requestAnimationFrame?function(t){return requestAnimationFrame(t)}:function(t){return setTimeout(t,16)},Nt=Symbol("lom_error_orig"),zt={get:function(t,e){if(e===Nt)return t.valueOf();throw t.valueOf()},ownKeys:function(t){throw t.valueOf()}};a._r=[2];var Pt=new Map([[Array,function(t,e,r){for(var n=t.length===e.length,o=0;o<t.length;++o){var i=t[o]=l(t[o],e[o],!1,r);n&&i!==e[o]&&(n=!1)}return n?e:t}],[Object,function(t,e,r){var n=0,o=!0;for(var i in t){var s=t[i]=l(t[i],e[i],!1,r);o&&s!==e[i]&&(o=!1),++n}for(var a in e)if(--n<0)break;return o&&0===n?e:t}],[Date,function(t,e){return t.getTime()===e.getTime()?e:t}],[RegExp,function(t,e){return t.toString()===e.toString()?e:t}]]),Tt=new WeakMap;l._r=[2];var Et,Dt;u._r=[2],c._r=[2],d._r=[2],p._r=[2];var At=(Dt=Et=function(){function t(t,e,r,n,o,i,s,a){this._masters=null,this._slaves=null,this._keyHash=s,this.key=i,this.field=t,this.owner=e,this.isComponent=a||!1,this.manualReset=o||!1,this._context=r,this.current=void 0,this._next=void 0,this._suggested=void 0,this._hostAtoms=n,this.status=wt}var e=t.prototype;return e.toString=function(){var t=this.key,e=this.owner,r=e.displayName||e.constructor.displayName||e.constructor.name;return String(r)+"."+this.field+(t?"("+("function"==typeof t?t.displayName||t.name:String(t))+")":"")},e.toJSON=function(){return this.current},e.destructor=function(){0!==this.status&&(this._masters&&this._masters.forEach(d,this),this._masters=null,this._checkSlaves(),this._slaves=null,this._hostAtoms.delete(this._keyHash||this.owner),this._context.destroyHost(this),this.current=void 0,this._next=void 0,this._suggested=void 0,this.status=0,this._hostAtoms=void 0,this.key=void 0,this._keyHash=void 0,this._retry=void 0)},e.value=function(t,e){var r=this._context,n=this.current;if(1===e)void 0===t?(this._suggested=this._next,this._next=void 0,this.status=5,this._slaves&&this._slaves.forEach(c)):this._push(t);else{var o=r.current;if(o&&(!o.isComponent||!this.isComponent)){var i=this._slaves;i||(i=this._slaves=new Set,r.unreap(this)),i.add(o),o.addMaster(this)}var s;void 0!==t&&(s=l(t,this._suggested,this.isComponent))!==this._suggested&&(n instanceof Error||(s=l(t,n,this.isComponent))!==n)&&(this._suggested=this._next=s,this.status=wt),this.actualize()}if((n=this.current)instanceof Error){if(e!==kt)return a(n);throw n}return n},e.actualize=function(){if(3===this.status)throw new Error("Cyclic atom dependency of "+String(this));this.status===Ct&&(this._masters&&this._masters.forEach(p,this),this.status===Ct&&(this.status=4));var e=t.deepReset;5!==this.status||this.isComponent?void 0===e||this.manualReset||e.has(this)?4!==this.status&&this.refresh():(e.add(this),this.refresh()):(t.deepReset=e||new Set,this.refresh(),t.deepReset=e)},e._push=function(t){this.status=4;var e,r=this.current;t instanceof Error?(t[Nt]&&(t=t[Nt]),e=t):(e=l(t,r,this.isComponent),this._suggested=this._next,this._next=void 0),r!==e&&(this.current=e,this._context.newValue(this,r,e),this._slaves&&this._slaves.forEach(c))},e.refresh=function(){var t=this._masters;t&&(t.forEach(d,this),this._masters=null);var e;this.status=3;var r=this._context,n=r.current;r.current=this;var o=this.field+"$",i=this._next;try{e=void 0===this.key?this.owner[o](i):this.owner[o](this.key,i)}catch(t){void 0===t[xt]&&(t[xt]=!0,console.error(t.stack||t)),e=t}r.current=n,5!==this.status&&this._push(e)},e.dislead=function(t){var e=this._slaves;e&&(e.delete(t),0===e.size&&(this._slaves=null,this._context.proposeToReap(this)))},e._checkSlaves=function(){this._slaves?this._slaves.forEach(u):this._context.proposeToPull(this)},e.check=function(){4===this.status&&(this.status=Ct,this._checkSlaves())},e.obsolete=function(){this.status!==wt&&(this.status=wt,this._checkSlaves())},e.addMaster=function(t){this._masters||(this._masters=new Set),this._masters.add(t)},e.getRetry=function(){var t=this;if(void 0===this._retry){var e=function(){return t.refresh()};e._r=[2],s(e,"atom("+this.displayName+").retry()"),this._retry=e}return this._retry},n(t,[{key:"displayName",get:function(){return this.toString()}}]),t}(),Et.deepReset=void 0,Dt);h._r=[2],f._r=[2],v._r=[2],f.defer=v,_._r=[2];var Mt=new(function(){function t(){var t=this;this.current=null,this._logger=void 0,this._updating=[],this._reaping=new Set,this._scheduled=!1,this._namespace="$",this._owners=new WeakMap,this.__run=function(){t._scheduled&&(t._scheduled=!1,t._run())},this._start=0,this._pendCount=0}var e=t.prototype;return e._destroyValue=function(t,e){if(this._owners.get(e)===t){try{e.destructor()}catch(e){console.error(e),this._logger&&this._logger.error(t,e)}this._owners.delete(e)}},e.destroyHost=function(t){this._destroyValue(t,t.current),void 0!==this._logger&&this._logger.onDestruct(t)},e.setLogger=function(t){this._logger=t},e.newValue=function(t,e,r){this._destroyValue(t,e),!r||"object"!=typeof r||r instanceof Error||"function"!=typeof r.destructor||this._owners.set(r,t);var n=this._logger;if(void 0!==n)try{n.newValue(t,e,r)}catch(e){console.error(e),n.error(t,e)}},e.proposeToPull=function(t){this._updating.push(t),this._schedule()},e.proposeToReap=function(t){this._reaping.add(t),this._schedule()},e.unreap=function(t){this._reaping.delete(t)},e._schedule=function(){this._scheduled||(jt(this.__run),this._scheduled=!0)},e._run=function(){this._schedule();var t=this._reaping,e=this._updating,r=this._start;do{for(var n=e.length,o=r;o<n;o++){this._start=o;var i=e[o];t.has(i)||0===i.status||i.actualize()}r=n}while(e.length>r);for(e.length=0,this._start=0;t.size>0;)t.forEach(_);this._scheduled=!1,this._pendCount=0},e.beginTransaction=function(t){var e=this._namespace;return this._namespace=t,this._pendCount++,e},e.endTransaction=function(t){this._namespace=t,1===this._pendCount?this._run():this._pendCount--},t}());y._r=[2],m._r=[2],g._r=[2];var It=kt;b._r=[2],w._r=[2],C._r=[2],k._r=[2],O._r=[2],x._r=[2],O.manual=x,S._r=[2],j._r=[2],Object.defineProperties(b,{cache:{get:function(){return It=1,S}},getRetry:{get:function(){return It=Ot,j}},async:{get:function(){return It=2,S}},manual:{value:w},key:{value:O}}),N._r=[2],z._r=[2],P._r=[2];var Ut=Symbol("rdiRendered"),Wt=Symbol("rdiInst"),Rt=Symbol("rdiProp"),Ft=0,Lt=Symbol("rdiId"),Ht=function(t){t[Lt]=""+ ++Ft,this.dest=t};Ht._r=[2];var Vt=function(){function t(e,r,n,o,i,s){this.id="",this.rendered="",this._resolved=!1,this._listeners=void 0,this._state=n,this.instance=i||0,this.displayName=o||"",void 0===t.parentContext&&(t.parentContext=this);var a=this._cache=s||Object.create(null);if(void 0!==e)for(var l=0;l<e.length;l++){var u=e[l];if(u instanceof Array){var c=u[0];if("string"==typeof c)a[c]=u[1];else{void 0===c[Lt]&&(c[Lt]=""+ ++Ft);var d=u[1];a[c[Lt]]="function"!=typeof d||d instanceof Ht?d:new Ht(d)}}else{var p=u.constructor;void 0===p[Lt]&&(p[Lt]=""+ ++Ft),a[p[Lt]]=u}}}var e=t.prototype;return e.toString=function(){return this.displayName+(this.instance?"["+this.instance+"]":"")},e.toJSON=function(){return this._cache},e.value=function(t){var e=t[Lt];void 0===t[Lt]&&(e=t[Lt]=""+ ++Ft);var r=this._cache[e];if(void 0===r){r=this._cache[e]=this.invoke(t);var n=(t.displayName||t.name)+(this.instance>0?"["+this.instance+"]":"");r.displayName=this.displayName+"."+n,r[Wt]=this;var o=void 0===this._state?void 0:this._state[n];if(o&&"object"==typeof o)for(var i in o)r[i]=o[i]}else r instanceof Ht&&(r=this._cache[e]=this.value(r.dest));return r},e.destructor=function(){this._cache=void 0,this._listeners=void 0},e.invoke=function(t){var e=!1,r=t.deps;void 0!==t._r&&(e=2===t._r[0],r=r||t._r[1]);var n=this.resolve(r);if(e)switch(n.length){case 0:return t();case 1:return t(n[0]);case 2:return t(n[0],n[1]);case 3:return t(n[0],n[1],n[2]);case 4:return t(n[0],n[1],n[2],n[3]);case 5:return t(n[0],n[1],n[2],n[3],n[4]);case 6:return t(n[0],n[1],n[2],n[3],n[4],n[5]);default:return t.apply(void 0,n)}switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3]);case 5:return new t(n[0],n[1],n[2],n[3],n[4]);case 6:return new t(n[0],n[1],n[2],n[3],n[4],n[5]);default:return new(Function.prototype.bind.apply(t,[null].concat(n)))}},e.alias=function(t,e){var r=e;void 0===r&&void 0===(r=t[Lt])&&(r=t[Lt]=""+ ++Ft);var n=this._cache[r];return n instanceof Ht?n.dest:void 0===n?t:n},e.invokeWithProps=function(t,e,r){var n=t.deps||(void 0===t._r?void 0:t._r[1]);if(void 0===n)return t(e);var o=this.resolve(n),i=this._listeners;if(!0===r&&void 0!==i)for(var s=0;s<i.length;s++){var a=i[s];a[a.constructor[Rt]]=e}switch(this._resolved=!0,o.length){case 0:return t(e);case 1:return t(e,o[0]);case 2:return t(e,o[0],o[1]);case 3:return t(e,o[0],o[1],o[2]);case 4:return t(e,o[0],o[1],o[2],o[3]);case 5:return t(e,o[0],o[1],o[2],o[3],o[4]);case 6:return t(e,o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return t(e,o[0],o[1],o[2],o[3],o[4],o[5],o[6]);default:return t.apply(void 0,[e].concat(o))}},e.copy=function(e,r,n){return new t(n,null,this._state,e,r,Object.create(this._cache))},e.resolve=function(t){var e=[];if(void 0===t)return e;for(var r=this._listeners,n=this._resolved,o=0,i=t.length;o<i;o++){var s=t[o];if("object"==typeof s){var a={};for(var l in s){var u=s[l],c=this.value(u);!1===n&&void 0!==u[Rt]&&(void 0===r&&(this._listeners=r=[]),r.push(c)),a[l]=c}e.push(a)}else{var d=this.value(s);!1===n&&void 0!==s[Rt]&&(void 0===r&&(this._listeners=r=[]),r.push(d)),e.push(d)}}return e},t}();T._r=[2],E._r=[2],D._r=[2],A._r=[2];var Kt={},Bt=[],$t=[];M._r=[2],I._r=[2];var Jt="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,qt=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,Gt=[];U._r=[2],W._r=[2],R._r=[2],F._r=[2],L._r=[2],H._r=[2],V._r=[2],K._r=[2],B._r=[2],$._r=[2];var Qt=[],Xt=0,Yt=!1,Zt=!1;J._r=[2],q._r=[2],G._r=[2],Q._r=[2],X._r=[2],Y._r=[2],Z._r=[2];var te={};tt._r=[2],et._r=[2],rt._r=[2],nt._r=[2],ot._r=[2],it._r=[2],st._r=[2],at._r=[2],I(at.prototype,{setState:function(t,e){var r=this.state;this.prevState||(this.prevState=I({},r)),I(r,"function"==typeof t?t(r,this.props):t),e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),U(this)},forceUpdate:function(t){t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),ot(this,2)},render:function(){}}),lt._r=[2];var ee,re;ut._r=[2],ct._r=[2,[Number,String]];var ne=function(){function t(){}return t.prototype.location=function(t,e){throw new Error("implement")},t}(),oe=(ee=b.key,re=function(t){function e(e,r){var n;return n=t.call(this)||this,n._ns="lom_app",n._location=e,n._history=r,n}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var r=e.prototype;return r._params=function(){return new URLSearchParams(this._location.search)},r.location=function(t,e){var r=this._params();return void 0===e?r.get(t):(r.set(t,e),this._history.pushState(null,this._ns,"?"+r.toString()),e)},e}(ne),function(t,e,r,n,o){var i={};Object.keys(n).forEach(function(t){i[t]=n[t]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,n){return n(t,e,r)||r},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(t,e,i),i=null)}(re.prototype,"location",[ee],Object.getOwnPropertyDescriptor(re.prototype,"location"),re.prototype),re);oe._r=[0,[Location,History]],dt._r=[1];var ie=D(E(at,dt,y),M);bt.lom_h=ie;var se,ae,le=(se=function(){function t(t,e){void 0===t&&(t={}),this._title=t.title||"",this.id=t.id||ut(),this.completed=t.completed||!1,this._store=e}var r=t.prototype;return r.destroy=function(){this._store.remove(this.id)},r.toggle=function(){this.completed=!this.completed,this._store.saveTodo(this.toJSON())},r.toJSON=function(){return{completed:this.completed,title:this._title,id:this.id}},e(t,[{key:"title",get:function(){return this._title},set:function(t){this._title=t,this._store.saveTodo(this.toJSON())}}]),t}(),pt(se.prototype,"destroy",[f],Object.getOwnPropertyDescriptor(se.prototype,"destroy"),se.prototype),pt(se.prototype,"toggle",[f],Object.getOwnPropertyDescriptor(se.prototype,"toggle"),se.prototype),se);le._r=[0,[ce]];var ue,ce=(ae=function(){function t(){}var r=t.prototype;return r.addTodo=function(t){var e=new le({title:t},this),r=this.todos.slice(0);r.push(e),this.todos=r},r.saveTodo=function(t){var e=this;this.todos=this.todos.map(function(r,n){return r.id===t.id?new le(t,e):r})},r.remove=function(t){this.todos=this.todos.filter(function(e){return e.id!==t})},r.toggleAll=function(){var t=this,e=this.activeTodoCount>0;this.todos=this.todos.map(function(r,n){return new le({title:r.title,id:r.id,completed:e},t)})},r.clearCompleted=function(){for(var t=[],e=[],r=0;r<this.todos.length;r++){var n=this.todos[r];n.completed?e.push(n.id):t.push(n)}this.todos=t},e(t,[{key:"todos",get:function(){return[]},set:function(t){}},{key:"activeTodoCount",get:function(){return this.todos.reduce(function(t,e){return t+(e.completed?0:1)},0)}},{key:"completedCount",get:function(){return this.todos.length-this.activeTodoCount}}]),t}(),pt(ae.prototype,"todos",[b],Object.getOwnPropertyDescriptor(ae.prototype,"todos"),ae.prototype),pt(ae.prototype,"todos",[b],Object.getOwnPropertyDescriptor(ae.prototype,"todos"),ae.prototype),pt(ae.prototype,"activeTodoCount",[b],Object.getOwnPropertyDescriptor(ae.prototype,"activeTodoCount"),ae.prototype),pt(ae.prototype,"addTodo",[f],Object.getOwnPropertyDescriptor(ae.prototype,"addTodo"),ae.prototype),pt(ae.prototype,"toggleAll",[f],Object.getOwnPropertyDescriptor(ae.prototype,"toggleAll"),ae.prototype),pt(ae.prototype,"clearCompleted",[f],Object.getOwnPropertyDescriptor(ae.prototype,"clearCompleted"),ae.prototype),ae),de="all",pe="complete",he="active",fe=(ue=function(){function t(t,e){this._todoService=t,this._locationStore=e}return e(t,[{key:"filter",get:function(){return this._locationStore.location("todo_filter")||de},set:function(t){return this._locationStore.location("todo_filter",t)}},{key:"filteredTodos",get:function(){var t=this._todoService.todos;switch(this.filter){case de:return t;case pe:return t.filter(function(t){return!!t.completed});case he:return t.filter(function(t){return!t.completed});default:throw new Error("Unknown filter value: "+this.filter)}}}]),t}(),function(t,e,r,n,o){var i={};Object.keys(n).forEach(function(t){i[t]=n[t]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce(function(r,n){return n(t,e,r)||r},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(t,e,i),i=null)}(ue.prototype,"filteredTodos",[b],Object.getOwnPropertyDescriptor(ue.prototype,"filteredTodos"),ue.prototype),ue);fe._r=[0,[ce,ne]];var ve,_e,ye=(ve=function(){function t(t){!function(t,e,r,n){r&&Object.defineProperty(t,e,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}(this,"title",_e,this),this._todoService=t}var e=t.prototype;return e.onInput=function(t){var e=t.target;this.title=e.value},e.onKeyDown=function(t){if(13===t.keyCode&&this.title){t.preventDefault();var e=this.title.trim();e&&(this._todoService.addTodo(e),this.title="")}},t}(),_e=ht(ve.prototype,"title",[b],{enumerable:!0,initializer:function(){return""}}),ht(ve.prototype,"onInput",[f],Object.getOwnPropertyDescriptor(ve.prototype,"onInput"),ve.prototype),ht(ve.prototype,"onKeyDown",[f],Object.getOwnPropertyDescriptor(ve.prototype,"onKeyDown"),ve.prototype),ve);ye._r=[0,[ce]],ft._r=[1];var me="all",ge="active",be="completed";vt._r=[1];var we,Ce,ke,Oe,xe=new(we=f.defer,Ce=function(){function t(){var t=this;_t(this,"editingId",ke,this),_t(this,"editText",Oe,this),this.beginEdit=function(e){t._todo=e,t.editText=e.title,t.editingId=e.id}}var e=t.prototype;return e.setFocus=function(t){t&&t.focus()},e.setEditText=function(t){this.editText=t.target.value},e.cancel=function(){this.editText="",this.editingId=null},e.submit=function(){this.editingId&&(this._todo.title=this.editText,this.editText="",this.editingId=null)},e.onKey=function(t){27===t.which?this.cancel():13===t.which&&this.submit()},t}(),ke=yt(Ce.prototype,"editingId",[b],{enumerable:!0,initializer:function(){return null}}),Oe=yt(Ce.prototype,"editText",[b],{enumerable:!0,initializer:function(){return""}}),yt(Ce.prototype,"setFocus",[we],Object.getOwnPropertyDescriptor(Ce.prototype,"setFocus"),Ce.prototype),yt(Ce.prototype,"setEditText",[f],Object.getOwnPropertyDescriptor(Ce.prototype,"setEditText"),Ce.prototype),yt(Ce.prototype,"cancel",[f],Object.getOwnPropertyDescriptor(Ce.prototype,"cancel"),Ce.prototype),yt(Ce.prototype,"submit",[f],Object.getOwnPropertyDescriptor(Ce.prototype,"submit"),Ce.prototype),yt(Ce.prototype,"onKey",[f],Object.getOwnPropertyDescriptor(Ce.prototype,"onKey"),Ce.prototype),Ce);mt._r=[1],gt._r=[1];var Se=new ce,je=new fe(Se,new oe(location,history)),Ne=new ye(Se);lt(lom_h(gt,{todoHeaderService:Ne,todoService:Se,todoFilterService:je}),document.getElementById("todoapp"))}();
//# sourceMappingURL=bundle.js.map
