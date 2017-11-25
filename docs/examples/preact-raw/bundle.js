!function(){"use strict";function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function n(){}function r(t,e){var o,r,i,l,a=F;for(l=arguments.length;l-- >2;)W.push(arguments[l]);for(e&&null!=e.children&&(W.length||W.push(e.children),delete e.children);W.length;)if((r=W.pop())&&void 0!==r.pop)for(l=r.length;l--;)W.push(r[l]);else"boolean"==typeof r&&(r=null),(i="function"!=typeof t)&&(null==r?r="":"number"==typeof r?r=String(r):"string"!=typeof r&&(i=!1)),i&&o?a[a.length-1]+=r:a===F?a=[r]:a.push(r),o=i;var s=new n;return s.nodeName=t,s.children=a,s.attributes=null==e?void 0:e,s.key=null==e?void 0:e.key,void 0!==M.vnode&&M.vnode(s),s}function i(t,e){for(var o in e)t[o]=e[o];return t}function l(t){!t._dirty&&(t._dirty=!0)&&1==V.push(t)&&(M.debounceRendering||K)(a)}function a(){var t,e=V;for(V=[];t=e.pop();)t._dirty&&T(t)}function s(t,e,o){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&c(t,e.nodeName):o||t._componentConstructor===e.nodeName}function c(t,e){return t.normalizedNodeName===e||t.nodeName.toLowerCase()===e.toLowerCase()}function u(t){var e=i({},t.attributes);e.children=t.children;var o=t.nodeName.defaultProps;if(void 0!==o)for(var n in o)void 0===e[n]&&(e[n]=o[n]);return e}function d(t,e){var o=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return o.normalizedNodeName=t,o}function p(t){var e=t.parentNode;e&&e.removeChild(t)}function f(t,e,o,n,r){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)o&&o(null),n&&n(t);else if("class"!==e||r)if("style"===e){if(n&&"string"!=typeof n&&"string"!=typeof o||(t.style.cssText=n||""),n&&"object"==typeof n){if("string"!=typeof o)for(var i in o)i in n||(t.style[i]="");for(var i in n)t.style[i]="number"==typeof n[i]&&!1===O.test(i)?n[i]+"px":n[i]}}else if("dangerouslySetInnerHTML"===e)n&&(t.innerHTML=n.__html||"");else if("o"==e[0]&&"n"==e[1]){var l=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),n?o||t.addEventListener(e,_,l):t.removeEventListener(e,_,l),(t._listeners||(t._listeners={}))[e]=n}else if("list"!==e&&"type"!==e&&!r&&e in t)h(t,e,null==n?"":n),null!=n&&!1!==n||t.removeAttribute(e);else{var a=r&&e!==(e=e.replace(/^xlink\:?/,""));null==n||!1===n?a?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof n&&(a?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):t.setAttribute(e,n))}else t.className=n||""}function h(t,e,o){try{t[e]=o}catch(t){}}function _(t){return this._listeners[t.type](M.event&&M.event(t)||t)}function m(){for(var t;t=H.pop();)M.afterMount&&M.afterMount(t),t.componentDidMount&&t.componentDidMount()}function v(t,e,o,n,r,i){j++||(R=null!=r&&void 0!==r.ownerSVGElement,z=null!=t&&!("__preactattr_"in t));var l=y(t,e,o,n,i);return r&&l.parentNode!==r&&r.appendChild(l),--j||(z=!1,i||m()),l}function y(t,e,o,n,r){var i=t,l=R;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||r)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),b(t,!0))),i.__preactattr_=!0,i;var a=e.nodeName;if("function"==typeof a)return U(t,e,o,n);if(R="svg"===a||"foreignObject"!==a&&R,a=String(a),(!t||!c(t,a))&&(i=d(a,R),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),b(t,!0)}var s=i.firstChild,u=i.__preactattr_,p=e.children;if(null==u){u=i.__preactattr_={};for(var f=i.attributes,h=f.length;h--;)u[f[h].name]=f[h].value}return!z&&p&&1===p.length&&"string"==typeof p[0]&&null!=s&&void 0!==s.splitText&&null==s.nextSibling?s.nodeValue!=p[0]&&(s.nodeValue=p[0]):(p&&p.length||null!=s)&&g(i,p,o,n,z||null!=u.dangerouslySetInnerHTML),w(i,e.attributes,u),R=l,i}function g(t,e,o,n,r){var i,l,a,c,u,d=t.childNodes,f=[],h={},_=0,m=0,v=d.length,g=0,C=e?e.length:0;if(0!==v)for(N=0;N<v;N++){var w=d[N],S=w.__preactattr_;null!=(x=C&&S?w._component?w._component.__key:S.key:null)?(_++,h[x]=w):(S||(void 0!==w.splitText?!r||w.nodeValue.trim():r))&&(f[g++]=w)}if(0!==C)for(N=0;N<C;N++){u=null;var x=(c=e[N]).key;if(null!=x)_&&void 0!==h[x]&&(u=h[x],h[x]=void 0,_--);else if(!u&&m<g)for(i=m;i<g;i++)if(void 0!==f[i]&&s(l=f[i],c,r)){u=l,f[i]=void 0,i===g-1&&g--,i===m&&m++;break}u=y(u,c,o,n),a=d[N],u&&u!==t&&u!==a&&(null==a?t.appendChild(u):u===a.nextSibling?p(a):t.insertBefore(u,a))}if(_)for(var N in h)void 0!==h[N]&&b(h[N],!1);for(;m<=g;)void 0!==(u=f[g--])&&b(u,!1)}function b(t,e){var o=t._component;o?I(o):(null!=t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),!1!==e&&null!=t.__preactattr_||p(t),C(t))}function C(t){for(t=t.lastChild;t;){var e=t.previousSibling;b(t,!0),t=e}}function w(t,e,o){var n;for(n in o)e&&null!=e[n]||null==o[n]||f(t,n,o[n],o[n]=void 0,R);for(n in e)"children"===n||"innerHTML"===n||n in o&&e[n]===("value"===n||"checked"===n?t[n]:o[n])||f(t,n,o[n],o[n]=e[n],R)}function S(t){var e=t.constructor.name;(J[e]||(J[e]=[])).push(t)}function x(t,e,o){var n,r=J[t.name];if(t.prototype&&t.prototype.render?(n=new t(e,o),L.call(n,e,o)):((n=new L(e,o)).constructor=t,n.render=N),r)for(var i=r.length;i--;)if(r[i].constructor===t){n.nextBase=r[i].nextBase,r.splice(i,1);break}return n}function N(t,e,o){return this.constructor(t,o)}function k(t,e,o,n,r){t._disable||(t._disable=!0,(t.__ref=e.ref)&&delete e.ref,(t.__key=e.key)&&delete e.key,!t.base||r?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,n),n&&n!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=n),t.prevProps||(t.prevProps=t.props),t.props=e,t._disable=!1,0!==o&&(1!==o&&!1===M.syncComponentUpdates&&t.base?l(t):T(t,1,r)),t.__ref&&t.__ref(t))}function T(t,e,o,n){if(!t._disable){var r,l,a,s=t.props,c=t.state,d=t.context,p=t.prevProps||s,f=t.prevState||c,h=t.prevContext||d,_=t.base,y=t.nextBase,g=_||y,C=t._component,w=!1;if(_&&(t.props=p,t.state=f,t.context=h,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(s,c,d)?w=!0:t.componentWillUpdate&&t.componentWillUpdate(s,c,d),t.props=s,t.state=c,t.context=d),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!w){r=t.render(s,c,d),t.getChildContext&&(d=i(i({},d),t.getChildContext()));var S,N,U=r&&r.nodeName;if("function"==typeof U){var L=u(r);(l=C)&&l.constructor===U&&L.key==l.__key?k(l,L,1,d,!1):(S=l,t._component=l=x(U,L,d),l.nextBase=l.nextBase||y,l._parentComponent=t,k(l,L,0,d,!1),T(l,1,o,!0)),N=l.base}else a=g,(S=C)&&(a=t._component=null),(g||1===e)&&(a&&(a._component=null),N=v(a,r,d,o||!_,g&&g.parentNode,!0));if(g&&N!==g&&l!==C){var B=g.parentNode;B&&N!==B&&(B.replaceChild(N,g),S||(g._component=null,b(g,!1)))}if(S&&I(S),t.base=N,N&&!n){for(var D=t,E=t;E=E._parentComponent;)(D=E).base=N;N._component=D,N._componentConstructor=D.constructor}}if(!_||o?H.unshift(t):w||(t.componentDidUpdate&&t.componentDidUpdate(p,f,h),M.afterUpdate&&M.afterUpdate(t)),null!=t._renderCallbacks)for(;t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);j||n||m()}}function U(t,e,o,n){for(var r=t&&t._component,i=r,l=t,a=r&&t._componentConstructor===e.nodeName,s=a,c=u(e);r&&!s&&(r=r._parentComponent);)s=r.constructor===e.nodeName;return r&&s&&(!n||r._component)?(k(r,c,3,o,n),t=r.base):(i&&!a&&(I(i),t=l=null),r=x(e.nodeName,c,o),t&&!r.nextBase&&(r.nextBase=t,l=null),k(r,c,1,o,n),t=r.base,l&&t!==l&&(l._component=null,b(l,!1))),t}function I(t){M.beforeUnmount&&M.beforeUnmount(t);var e=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var o=t._component;o?I(o):e&&(e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),t.nextBase=e,p(e),S(t),C(e)),t.__ref&&t.__ref(null)}function L(t,e){this._dirty=!0,this.context=e,this.props=t,this.state=this.state||{}}function B(t,e,o){return v(o,t,{},!1,e,!1)}function D(){for(var t="",e=0;e<32;e++){var o=16*Math.random()|0;8!==e&&12!==e&&16!==e&&20!==e||(t+="-"),t+=(12===e?4:16===e?3&o|8:o).toString(16)}return t}function E(t,e){return 1===t?e:e+"s"}function P(t){var e=t.nowShowing,o=t.count,n=t.completedCount,r=t.onClearCompleted;return lom_h("footer",{id:"footer"},lom_h("span",{id:"todo-count"},lom_h("strong",null,o)," ",E(o,"item")," left"),lom_h("ul",{id:"filters"},lom_h("li",null,lom_h("a",{href:"./?todo_filter=all",className:{selected:e===nt}},"All"))," ",lom_h("li",null,lom_h("a",{href:"./?todo_filter=active",className:{selected:e===rt}},"Active"))," ",lom_h("li",null,lom_h("a",{href:"./?todo_filter=completed",className:{selected:e===it}},"Completed"))),n>0?lom_h("button",{id:"clear-completed",onClick:r},"Clear completed"):null)}var A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};n._r=[2];var M={},W=[],F=[];r._r=[2],i._r=[2];var K="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,O=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,V=[];l._r=[2],a._r=[2],s._r=[2],c._r=[2],u._r=[2],d._r=[2],p._r=[2],f._r=[2],h._r=[2],_._r=[2];var H=[],j=0,R=!1,z=!1;m._r=[2],v._r=[2],y._r=[2],g._r=[2],b._r=[2],C._r=[2],w._r=[2];var J={};S._r=[2],x._r=[2],N._r=[2],k._r=[2],T._r=[2],U._r=[2],I._r=[2],L._r=[2],i(L.prototype,{setState:function(t,e){var o=this.state;this.prevState||(this.prevState=i({},o)),i(o,"function"==typeof t?t(o,this.props):t),e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),l(this)},forceUpdate:function(t){t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),T(this,2)},render:function(){}}),B._r=[2],D._r=[2],E._r=[2,[Number,String]];var $=function(){function t(){}return t.prototype.location=function(t,e){throw new Error("implement")},t}(),G=function(t){function e(e,o){var n;return n=t.call(this)||this,n._ns="lom_app",n._location=e,n._history=o,n}o(e,t);var n=e.prototype;return n._params=function(){return new URLSearchParams(this._location.search)},n.location=function(t,e){var o=this._params();return void 0===e?o.get(t):(o.set(t,e),this._history.pushState(null,this._ns,"?"+o.toString()),e)},e}($);G._r=[0,[Location,History]];var q=function(){function t(t,e){var o=this;void 0===t&&(t={}),this.destroy=function(){o._store.remove(o.id)},this.toggle=function(){o.completed=!o.completed,o._store.saveTodo(o.toJSON())},this._title=t.title||"",this.id=t.id||D(),this.completed=t.completed||!1,this._store=e}return t.prototype.toJSON=function(){return{completed:this.completed,title:this._title,id:this.id}},e(t,[{key:"title",get:function(){return this._title},set:function(t){this._title=t,this._store.saveTodo(this.toJSON())}}]),t}();q._r=[0,[Q]];var Q=function(){function t(){var t=this;this.todos=[],this.toggleAll=function(){var e=t.activeTodoCount>0;t.todos=t.todos.map(function(o,n){return new q({title:o.title,id:o.id,completed:e},t)}),t.notify()},this.clearCompleted=function(){for(var e=[],o=[],n=0;n<t.todos.length;n++){var r=t.todos[n];r.completed?o.push(r.id):e.push(r)}t.todos=e,t.notify()}}var o=t.prototype;return o.addTodo=function(t){var e=new q({title:t},this),o=this.todos.slice(0);o.push(e),this.todos=o,this.notify()},o.saveTodo=function(t){var e=this;this.todos=this.todos.map(function(o,n){return o.id===t.id?new q(t,e):o}),this.notify()},o.remove=function(t){this.todos=this.todos.filter(function(e){return e.id!==t}),this.notify()},e(t,[{key:"activeTodoCount",get:function(){return this.todos.reduce(function(t,e){return t+(e.completed?0:1)},0)}},{key:"completedCount",get:function(){return this.todos.length-this.activeTodoCount}}]),t}(),X="all",Y="complete",Z="active",tt=function(){function t(t,e){this._todoService=t,this._locationStore=e}return e(t,[{key:"filter",get:function(){return this._locationStore.location("todo_filter")||X},set:function(t){return this._locationStore.location("todo_filter",t)}},{key:"filteredTodos",get:function(){var t=this._todoService.todos;switch(this.filter){case X:return t;case Y:return t.filter(function(t){return!!t.completed});case Z:return t.filter(function(t){return!t.completed});default:throw new Error("Unknown filter value: "+this.filter)}}}]),t}();tt._r=[0,[Q,$]];var et=13,ot=function(t){function e(){for(var e,o,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=o=t.call.apply(t,[this].concat(r))||this,o.state={title:""},o.onInput=function(t){var e=t.target;o.setState({title:e.value})},o.onKeyDown=function(t){var e=o.state.title;if(t.keyCode===et&&e){t.preventDefault();var n=e.trim();n&&(o.props.todoService.addTodo(n),o.setState({title:""}))}},e||o}o(e,t);return e.prototype.render=function(){return lom_h("header",{id:"header"},lom_h("h1",null,"todos"),lom_h("input",{id:"new-todo",placeholder:"What needs to be done?",onInput:this.onInput,value:this.state.title,onKeyDown:this.onKeyDown,autoFocus:!0}))},e}(L),nt="all",rt="active",it="completed";P._r=[1];var lt=27,at=13,st=function(t){function e(){for(var e,o,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=o=t.call.apply(t,[this].concat(r))||this,o.state={editingId:null,editText:""},o.beginEdit=function(){o.setState({editText:o.props.todo.title,editingId:o.props.todo.id})},o.setFocus=function(t){t&&setTimeout(function(){return t.focus()},0)},o.setEditText=function(t){o.setState({editText:t.target.value})},o.cancel=function(){o.setState({editingId:null})},o.submit=function(){if(o.state.editingId){var t=o.state.editText;o.setState({editingId:null}),o.props.todo.title=t}},o.onKey=function(t){t.which===lt?(t.preventDefault(),o.cancel()):t.which===at&&(t.preventDefault(),o.submit())},e||o}o(e,t);return e.prototype.render=function(){var t=this.props.todo,e=this.state.editingId===t.id;return lom_h("li",{className:(t.completed?"completed ":" ")+(e?"editing":"")},lom_h("div",{className:"view"},lom_h("input",{className:"toggle",type:"checkbox",checked:t.completed||0,onClick:t.toggle}),lom_h("label",{onDblClick:this.beginEdit},t.title),lom_h("button",{className:"destroy",onClick:t.destroy})),e?lom_h("input",{ref:this.setFocus,className:"edit",value:this.state.editingId&&this.state.editText||t.title,onBlur:this.submit,onInput:this.setEditText,onKeyDown:this.onKey}):null)},e}(L),ct=function(t){function e(e,o){var n;return n=t.call(this,e,o)||this,e.todoService.notify=function(){return n.forceUpdate()},n}o(e,t);return e.prototype.render=function(){var t=this.props,e=t.todoService,o=t.todoFilterService,n=e.todos;return lom_h("div",null,lom_h(ot,{todoService:e}),n.length?lom_h("section",{id:"main"},lom_h("input",{id:"toggle-all",type:"checkbox",onChange:e.toggleAll,checked:0===e.activeTodoCount}),lom_h("ul",{id:"todo-list"},o.filteredTodos.map(function(t){return lom_h(st,{key:t.id,todo:t})}))):null,e.activeTodoCount||e.completedCount?lom_h(P,{count:e.activeTodoCount,completedCount:e.completedCount,nowShowing:o.filter,onClearCompleted:e.clearCompleted}):null)},e}(L);ct._r=[0,[{todoService:Q,todoFilterService:tt}]];var ut=new Q,dt=new tt(ut,new G(location,history));A.lom_h=r,B(lom_h(ct,{todoService:ut,todoFilterService:dt}),document.getElementById("todoapp"))}();
//# sourceMappingURL=bundle.js.map
