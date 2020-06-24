!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=["onclick","onClick","onchange","onChange","oninput","onInput","onfocus","onFocus","onblur","onBlur","onkeydown","onKeydown","onkeyup","onKeyup"];class r{}class i extends r{constructor(e,t={},n={},o=[]){super(),this.type=e,this.attributes=t,this.handles=n,this.children=o}}class s extends r{constructor(e){super(),this.content=String(e||0===e?e:"")}}function l(e,t,...n){let r={},l={};t&&(r=Object.keys(t).filter(e=>o.includes(e)).reduce((e,n)=>(e[n]=t[n],e),{}),l=Object.keys(t).filter(e=>!o.includes(e)).reduce((e,n)=>(e[n]=t[n],e),{}));const c=n.flat(2).map(e=>d(e)?e:new s(e));return new i(e,l,r,c)}function c(e){return e instanceof r}function d(e){return e&&null!=e.type}function u(e){return e&&void 0!==e.content}function a(e){return d(e)&&"string"==typeof e.type}function h(e){return d(e)&&"function"==typeof e.type&&e.type.prototype&&e.type.prototype.render}function p(e){return d(e)&&"function"==typeof e.type&&!(e.type.prototype&&e.type.prototype.render)}class f{constructor(e){this.context=e}createElement(e,t){var n,o;if(h(e))return e.component=y.create(e.type,Object.assign(Object.assign(Object.assign({},e.attributes),e.handles),{children:e.children,rootUpdate:t})),e.el=null===(n=e.component.vNode)||void 0===n?void 0:n.el,e.el;if(p(e))return e.component=y.create(v,{renderFunction:e.type,functionProps:Object.assign(Object.assign(Object.assign({},e.attributes),e.handles),{children:e.children}),rootUpdate:t}),e.el=null===(o=e.component.vNode)||void 0===o?void 0:o.el,e.el;if(a(e)){const n=document.createElement(e.type);return e.el=n,Object.keys(e.handles).forEach(t=>{const o=e.handles[t],r=t.toLowerCase().replace(/^on/,"");n.addEventListener(r,o)}),Object.keys(e.attributes).forEach(t=>{const o=e.attributes[t];this.setAttribute(n,t,o)}),e.children&&e.children.forEach(e=>{const o=this.createElement(e,t);o&&n.appendChild(o)}),n}return u(e)?(e.el=document.createTextNode(e.content),e.el):void 0}updateVDom(e,t,n){a(t)&&a(n)&&e instanceof HTMLElement?(Object.keys(n.handles).forEach(o=>{if(!t.handles.hasOwnProperty(o)){const t=n.handles[o],r=o.toLowerCase().replace(/^on/,"");e.removeEventListener(r,t)}}),Object.keys(t.handles).forEach(o=>{const r=o.toLowerCase().replace(/^on/,""),i=t.handles[o],s=n.handles[o];i!==s&&(n.handles.hasOwnProperty(o)&&e.removeEventListener(r,s),e.addEventListener(r,i))}),Object.keys(n.attributes).forEach(n=>{t.attributes.hasOwnProperty(n)||this.removeAttribute(e,n)}),Object.keys(t.attributes).forEach(o=>{const r=t.attributes[o];r!==n.attributes[o]&&(r&&0!==r?this.setAttribute(e,o,r):this.removeAttribute(e,o))})):u(t)&&u(n)&&t.content!=n.content&&(t.el.data=t.content)}updateVText(e,t,n){t.content!=n.content&&(t.el.data=t.content)}setAttribute(e,t,n){e instanceof HTMLInputElement&&"checkbox"===e.type&&"checked"===t?e.checked=n:e instanceof HTMLInputElement&&"value"===t?e.value=n:"dangerouslySetInnerHTML"!==t?("ref"===t&&(this.context.refs[n]=e),n&&0!==n&&e.setAttribute(t,String(!0===n?"":n))):e.innerHTML=n}removeAttribute(e,t){e instanceof HTMLInputElement&&"checkbox"===e.type&&"checked"===t?e.checked=!1:e instanceof HTMLInputElement&&"value"===t?e.value="":"dangerouslySetInnerHTML"!==t?e.removeAttribute(t):e.innerHTML=""}removeChildren(e){const t=e.childNodes;for(let n=t.length-1;n>=0;n--)this.removeChild(e,t[n])}appendChild(e,t){e.appendChild(t)}removeChild(e,t){e.removeChild(t)}insertBefore(e,t,n){e.insertBefore(t,n)}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}removeVNode(e){(h(e)||p(e))&&this.callDestroy(e);const t=this.parentNode(e.el);t&&this.removeChild(t,e.el)}callDestroy(e){var t,n;if(d(e))for(let t=0;t<e.children.length;++t)this.callDestroy(e.children[t]);h(e)&&(null===(t=e.component)||void 0===t?void 0:t.vNode)&&(this.callDestroy(null===(n=e.component)||void 0===n?void 0:n.vNode),e.component.destroy())}}class m{constructor(e){this.dom=e}sameInputType(e,t){if("input"!==e.type)return!0;const n=e.attributes.type,o=t.attributes.type;return null==n&&null==o||n==o}sameVNode(e,t){return a(e)&&a(t)?e.key===t.key&&e.type===t.type&&this.sameInputType(e,t):!(!d(e)||!d(t)||e.type!==t.type)||!(!u(e)||!u(t))}createIndexMap(e,t,n){let o,r;const i=new Map;for(o=t;o<=n;++o)null!=(r=e[o].key)&&i.set(r,o);return i}findVNodeIndex(e,t,n,o){for(let r=n;r<o;r++){const n=e[r];if(null!=n&&this.sameVNode(t,n))return r}return null}updateChildren(e,t,n,o){let r,i,s,l=0,c=t[0],d=0,u=n[0],h=t.length-1,p=t[h],f=n.length-1,m=n[f];for(;l<=h&&d<=f;)null==c?c=t[++l]:null==p?p=t[--h]:this.sameVNode(c,u)?(this.patchVNode(c,u),c=t[++l],u=n[++d]):this.sameVNode(p,m)?(this.patchVNode(p,m),p=t[--h],m=n[--f]):this.sameVNode(c,m)?(this.patchVNode(c,m),this.dom.insertBefore(e,c.el,this.dom.nextSibling(m.el)),c=t[++l],m=n[--f]):this.sameVNode(p,u)?(this.patchVNode(p,u),this.dom.insertBefore(e,p.el,u.el),p=t[--h],u=n[++d]):(null==r&&(r=this.createIndexMap(t,l,h)),null==(i=null!=u.key?r.get(u.key):this.findVNodeIndex(t,u,l,h))?(u.el=this.dom.createElement(u,o),this.dom.insertBefore(e,u.el,c.el)):(s=t[i],this.sameVNode(s,u)?(this.patchVNode(s,u),t[i]=void 0,this.dom.insertBefore(e,s.el,c.el)):(u.el=this.dom.createElement(u,o),this.dom.insertBefore(e,u.el,c.el))),u=n[++d]);if(l>h){const t=n[f+1],r=a(t)?t.el:null;for(;d<=f;d++){const t=this.dom.createElement(n[d],o);n[d].el=t,this.dom.insertBefore(e,t,r)}}else if(d>f)for(;l<=h;++l){const e=t[l];null!=e&&this.dom.removeVNode(e)}}patchVNode(e,t,n){let o=t.el=e.el;if(e!==t)if(u(e)&&u(t))this.dom.updateVText(o,t,e);else if(a(e)&&a(t)){this.dom.updateVDom(o,t,e);const r=e.children,i=t.children;g(r)||g(i)||r===i?g(i)?g(r)||this.dom.removeChildren(o):i.forEach(e=>this.dom.appendChild(o,this.dom.createElement(e,n))):this.updateChildren(o,r,i,n)}else if(h(e)&&h(t)){t.component=e.component;const n=e.component.runDiff();e.el=n&&n.el}else if(p(e)&&p(t)){t.component=e.component,t.component.functionProps=Object.assign(Object.assign(Object.assign({},t.attributes),t.handles),{children:t.children});const n=e.component.runDiff();e.el=n&&n.el}else;}patch(e,t,n){if(this.sameVNode(e,t))this.patchVNode(e,t);else{const o=e.el;let r=o.parentNode;t.el=this.dom.createElement(t,n),this.dom.insertBefore(r,t.el,o),this.dom.removeChild(r,o)}}}class y{constructor(e){this.updateFlag=!1,this.dom=new f(this),this.diff=new m(this.dom),this.refs={},e&&Object.assign(this,e)}mount(){this.vNode=this.render();const e=this.dom.createElement(this.vNode,this.update.bind(this));this.appendToEl(e)}appendToEl(e){this.el&&e&&this.dom.appendChild(this.el,e)}reappendToEl(e,t){if(e==t||null==this.el)return;const n=this.dom.parentNode(e);null!=n&&(this.dom.removeChild(n,e),this.appendToEl(t))}update(){this.updateFlag||(this.updateFlag=!0,Promise.resolve().then(()=>{this.updateFlag=!1,this.rootUpdate?this.rootUpdate():this.runDiff()}))}runDiff(){if(null==this.vNode||null==this.vNode.el)return null;const e=this.render();return this.diff.patch(this.vNode,e,this.update.bind(this)),this.reappendToEl(this.vNode.el,e.el),this.vNode=e,e}beforeMount(){}mounted(){}beforeUpdate(){}updated(){}destroy(){}render(){return null}static create(e,t,n){const o="string"==typeof n?document.querySelector(n):n,r=new e(Object.assign(Object.assign({},t),{el:o}));return r.beforeMount(),r.mount(),r.mounted(),r}}class b extends y{constructor(e){super(e),this.valueChange=e.valueChange}mount(){super.mount(),this.el&&this.writeValue(this.el.value)}readValue(e){return e?String(e):""}onChange(e){this.el.value=this.readValue(e),this.valueChange&&this.valueChange(e)}appendToEl(e){const t=this.el&&this.dom.parentNode(this.el);null!=t&&(e&&this.dom.insertBefore(t,e,this.el),this.el.hidden=!0)}}class v extends y{render(){return this.renderFunction(this.functionProps)}}function g(e){return null==e||0===e.length}function N(e){return e.replace(/^([A-Z$]+)/g,(e,t)=>t.toLowerCase()).replace(/_([a-zA-Z$]+)/g,(e,t)=>"-"+t.toLowerCase()).replace(/([A-Z$]+)/g,(e,t)=>"-"+t.toLowerCase())}function j({name:e,componentType:t,props:n,$:o=window.JQuery}){null!=o&&(o.fn[e]=function(...n){if("string"==typeof n[0]){const[t,...r]=n,i=this.data(e);if(i||o.error(`节点不是一个 ${e} 组件`),"function"!=typeof i[t])return null!=r&&1===r.length?i[t]=r[0]:i[t];i[t](...r)}else if(null==n[0]||"object"==typeof n[0]){const o=n[0],r=y.create(t,o,this[0]);this.data(e,r)}else o.error("第一个参数只能是string或object");return this},o(function(){o(`[${N(e)}]`).each(function(){const t=o(this),r=n.reduce((e,n)=>(e[n]=t.attr(N(n)),e),{});t[e](r)})}))}n.d(t,"mountComponent",function(){return j}),n.d(t,"Component",function(){return y}),n.d(t,"ValueComponent",function(){return b}),n.d(t,"VNode",function(){return r}),n.d(t,"VText",function(){return s}),n.d(t,"createVNode",function(){return l}),n.d(t,"isVNode",function(){return c})}])});
//# sourceMappingURL=jq-mvvm.umd.js.map