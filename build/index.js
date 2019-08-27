/*!
 * 
 *   simple-keyboard-key-navigation v2.0.2
 *   https://github.com/hodgef/simple-keyboard-key-navigation
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleKeyboardKeyNavigation=e():t.SimpleKeyboardKeyNavigation=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);e.default=function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(this,"init",function(t){t.registerModule("keyNavigation",function(e){e.initVars=function(n){e.markerPosition={row:0,button:0},e.layoutName=n||"",e.step=t.options.keyNavigationStep||1},e.initMarker=function(){e.setMarker(0,0)},e.getButtonAt=function(n,r){var o=e.layoutName;return t.keyboardDOM.querySelector('.hg-button[data-skbtnuid="'.concat(o,"-r").concat(n,"b").concat(r,'"]'))},e.setMarker=function(n,r){var o=e.getButtonAt(n,r);o?(e.markedBtn&&e.markedBtn.classList.remove("hg-keyMarker"),o.classList.add("hg-keyMarker"),e.markedBtn=o,e.markerPosition={row:n,button:r}):t.options.debug&&console.log("SimpleKeyboardKeyNavigation: Button default-r".concat(n,"b").concat(r," doesnt exist!"))},e.up=function(){var t=e.markerPosition.row-e.step,n=e.markerPosition.button;if(!e.getButtonAt(t,n))for(var r=n;0<=r;r--)if(e.getButtonAt(t,r)){n=r;break}e.setMarker(t,n)},e.down=function(){var t=e.markerPosition.row+e.step,n=e.markerPosition.button;if(!e.getButtonAt(t,n))for(var r=n;0<=r;r--)if(e.getButtonAt(t,r)){n=r;break}e.setMarker(t,n)},e.right=function(){var t=e.markerPosition.row,n=e.markerPosition.button+e.step;e.setMarker(t,n)},e.left=function(){var t=e.markerPosition.row,n=e.markerPosition.button-e.step;e.setMarker(t,n)},e.press=function(){e.markedBtn&&e.markedBtn.onclick&&e.markedBtn.onclick()},e.fn={},e.fn.onRender=t.onRender,t.onRender=function(){t.options.layoutName!==e.layoutName&&t.options.enableKeyNavigation&&(t.options.debug&&console.log("SimpleKeyboardKeyNavigation: Refreshed"),e.initVars(t.options.layoutName),e.initMarker()),e.fn.onRender()}})})}},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".simple-keyboard .hg-button.hg-standardBtn.hg-keyMarker,\r\n.simple-keyboard .hg-button.hg-functionBtn.hg-keyMarker {\r\n  box-shadow: 0 0 0 2px #88b8ff;\r\n  border-radius: 5px;\r\n}\r\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(s," */")),i=r.sources.map(function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")});return[n].concat(i).concat([o]).join("\n")}var a,u,s;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<t.length;a++){var u=t[a];null!=u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="(".concat(u[2],") and (").concat(n,")")),e.push(u))}},e}},function(t,e,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function u(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function s(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a],e))}else{for(var u=[];a<r.parts.length;a++)u.push(v(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:u}}}}function c(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach(function(n){e.setAttribute(n,t.attributes[n])}),"function"==typeof t.insert)t.insert(e);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var f,l=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function d(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}var p=null,b=0;function v(t,e){var n,r,o;if(e.singleton){var i=b++;n=p||(p=c(e)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=c(e),r=function(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&t.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=u(t,e);return s(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i],c=o[a.id];c&&(c.refs--,r.push(c))}t&&s(u(t,e),e);for(var f=0;f<r.length;f++){var l=r[f];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete o[l.id]}}}}}])});