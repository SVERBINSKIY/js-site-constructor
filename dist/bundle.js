!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,s,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],c=n[u]||0,l="".concat(u," ").concat(c);n[u]=c+1;var d=s(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:l,updater:v(p,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var i=h++;n=m||(m=c(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=c(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);a[o].references--}for(var i=u(e,t),c=0;c<n.length;c++){var l=s(n[c]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!1);o.push([e.i,"#app {\r\n    position: relative;\r\n}\r\n\r\n.content {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 200px;\r\n}\r\n\r\n.sidebar {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 200px;\r\n    z-index: 100;\r\n    padding: 10px;\r\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n    overflow-y: auto;\r\n}\r\n\r\n.row {\r\n    width: 100%;\r\n}",""]),t.default=o},function(e,t,n){"use strict";function r(e,t=""){return`<div class="row" style="${t}">${e}</div>`}function o(e){return`<div class="col-sm">${e}</div>`}n.r(t);class i{constructor(e,t,n){this.type=e,this.value=t,this.options=n}toHTML(){throw new Error("Method toHTML has been realised...")}}class a extends i{constructor(e,t){super("title",e,t)}toHTML(){const{tag:e="h2",styles:t}=this.options;return r(o(`\n        <${e}>${this.value}</${e}>\n    `),t)}}class s extends i{constructor(e,t){super("text",e,t)}toHTML(){return r(o(`\n        <p>${this.value}</p>\n    `),this.options.styles)}}function u(e){return`\n    <form name="${e}">\n        <h5>${e}</h5>\n        <div class="form-group">\n            <input class="form-control form-control-sm" name="value" placeholder="value">\n        </div>\n        <div class="form-group">\n            <input class="form-control form-control-sm" name="styles" placeholder="styles">\n        </div>\n        <button type="submit" class="btn btn-primary btn-sm">Create</button>\n    </form>\n    <hr />\n  `}var c=n.p+"45a0e69caea885ad6b08b992fc6b70b7.png";const l=[new a("Site Constructor on pure JS",{styles:"color: #000; text-align: center; text-transform: uppercase; margin: 0 0 15px 0; padding: 15px 0 15px 0; border-bottom: 1px solid #eee;",tag:"h1"}),new class extends i{constructor(e,t){super("image",e,t)}toHTML(){const{alt:e,styles:t,imageStyles:n}=this.options;return r(`<img src="${this.value}" alt="${e}" style="${n}" />`,t)}}(c,{styles:"padding: 1rem 0; display: flex; justify-content: center;",alt:"JavaScript Constructor",imageStyles:"width: 800px; height: auto; box-shadow: 0px 10px 8px 0px rgba(34, 60, 80, 0.2);"}),new s("<h2>Articles About Pure JS and Frameworks</h2>",{styles:"color: #54486e; text-align: center; font-size: 16px; padding: 0 15px;"}),new class extends i{constructor(e,t){super("textColumns",e,t)}toHTML(){return r(this.value.map(e=>o(e)).join(""),this.options.styles)}}(['<h3>JavaScript</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <a href="#">read more</a>','<h3>React</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <a href="#">read more</a>','<h3>NodeJS(Express)</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <a href="#">read more</a>'],{styles:"padding: 15px; max-width: 1200px; margin: 0 auto; background-color: #f8f9fa;"})];n(1);const d=new class{constructor(e){this.$el=document.querySelector(e)}render(e){this.$el.innerHTML="",e.forEach(e=>{this.$el.insertAdjacentHTML("beforeend",e.toHTML())})}}("#site");new class{constructor(e,t){this.$el=document.querySelector(e),this.update=t,this.init()}init(){this.$el.addEventListener("submit",this.addBlock.bind(this)),this.$el.innerHTML=this.template}get template(){return[u("title"),u("text")].join("")}addBlock(e){e.preventDefault();const t=e.target.name,n=e.target.value.value,r=e.target.styles.value,o=new("text"===t?s:a)(n,{styles:r});this.update(o),e.target.value.value="",e.target.styles.value=""}}("#panel",e=>{l.push(e),d.render(l)}),d.render(l)}]);