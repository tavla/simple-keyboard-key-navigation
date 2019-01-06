/*!
 * 
 *   simple-keyboard-key-navigation v1.1.1
 *   https://github.com/hodgef/simple-keyboard-key-navigation
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define("SimpleKeyboardKeyNavigation",[],t):"object"===typeof exports?exports.SimpleKeyboardKeyNavigation=t():e.SimpleKeyboardKeyNavigation=t()}(window,function(){return function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,__webpack_require__),o.l=!0,o.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)__webpack_require__.d(r,o,function(t){return e[t]}.bind(null,o));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,t,r){e.exports=r(2)},function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(1);var o=function SimpleKeyboardKeyNavigation(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,SimpleKeyboardKeyNavigation),this.init=function(e){e.registerModule("keyNavigation",function(t){t.initVars=function(r){t.markerPosition={row:0,button:0},t.layoutName=r||"",t.step=e.options.keyNavigationStep||1},t.initMarker=function(){t.setMarker(0,0)},t.getButtonAt=function(r,o){var n=t.layoutName;return e.keyboardDOM.querySelector('.hg-button[data-skbtnuid="'.concat(n,"-r").concat(r,"b").concat(o,'"]'))},t.setMarker=function(r,o){var n=t.getButtonAt(r,o);n?(t.markedBtn&&t.markedBtn.classList.remove("hg-keyMarker"),n.classList.add("hg-keyMarker"),t.markedBtn=n,t.markerPosition={row:r,button:o}):e.options.debug&&console.log("SimpleKeyboardKeyNavigation: Button default-r".concat(r,"b").concat(o," doesnt exist!"))},t.up=function(){var e=t.markerPosition.row-t.step,r=t.markerPosition.button;if(!t.getButtonAt(e,r))for(var o=r;o>=0;o--)if(t.getButtonAt(e,o)){r=o;break}t.setMarker(e,r)},t.down=function(){var e=t.markerPosition.row+t.step,r=t.markerPosition.button;if(!t.getButtonAt(e,r))for(var o=r;o>=0;o--)if(t.getButtonAt(e,o)){r=o;break}t.setMarker(e,r)},t.right=function(){var e=t.markerPosition.row,r=t.markerPosition.button+t.step;t.setMarker(e,r)},t.left=function(){var e=t.markerPosition.row,r=t.markerPosition.button-t.step;t.setMarker(e,r)},t.press=function(){t.markedBtn&&t.markedBtn.onclick&&t.markedBtn.onclick()},t.fn={},t.fn.onRender=e.onRender,e.onRender=function(){e.options.layoutName!==t.layoutName&&e.options.enableKeyNavigation&&(e.options.debug&&console.log("SimpleKeyboardKeyNavigation: Refreshed"),t.initVars(e.options.layoutName),t.initMarker()),t.fn.onRender()}})}};t.default=o}])});
//# sourceMappingURL=index.js.map