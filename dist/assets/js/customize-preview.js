/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/helpers/strip-tags.js":
/*!*********************************************!*\
  !*** ./src/assets/js/helpers/strip-tags.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var strip_tags = function strip_tags(input, allowed) {
  allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
    commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (strip_tags);

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** ./src/assets/js/customize-preview.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_strip_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/strip-tags */ "./src/assets/js/helpers/strip-tags.js");


wp.customize('blogname', function (value) {
  value.bind(function (to) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-header__blogname').html(to);
  });
});
wp.customize('_themename_accent_colour', function (value) {
  value.bind(function (to) {
    var inline_css = "";
    var inline_css_obj = _themename['inline-css'];
    for (var selector in inline_css_obj) {
      inline_css += "".concat(selector, " {");
      for (var prop in inline_css_obj[selector]) {
        var val = inline_css_obj[selector][prop];
        inline_css += "".concat(prop, ": ").concat(wp.customize(val).get(), " ");
      }
      inline_css += "}";
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#_themename-stylesheet-inline-css').html(inline_css);
  });
});
wp.customize('_themename_site_info', function (value) {
  value.bind(function (to) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-site-info__text').html((0,_helpers_strip_tags__WEBPACK_IMPORTED_MODULE_1__["default"])(to, '<a>'));
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsRUFBSTtJQUNmTCw2Q0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNNLElBQUksQ0FBQ2xCLCtEQUFVLENBQUNpQixFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7RUFDdkQsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXRoZW1lLy4vc3JjL2Fzc2V0cy9qcy9oZWxwZXJzL3N0cmlwLXRhZ3MuanMiLCJ3ZWJwYWNrOi8vbXl0aGVtZS9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9teXRoZW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215dGhlbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXl0aGVtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXl0aGVtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215dGhlbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teXRoZW1lLy4vc3JjL2Fzc2V0cy9qcy9jdXN0b21pemUtcHJldmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdHJpcF90YWdzID0gKGlucHV0LCBhbGxvd2VkKSA9PiB7XHJcbiAgICBhbGxvd2VkID0oKChhbGxvd2VkIHx8ICcnKSArICcnKVxyXG4gICAgLnRvTG93ZXJDYXNlKClcclxuICAgIC5tYXRjaCgvPFthLXpdW2EtejAtOV0qPi9nKSB8fCBbXSlcclxuICAgIC5qb2luKCcnKTtcclxuICAgIHZhciB0YWdzID0gLzxcXC8/KFthLXpdW2EtejAtOV0qKVxcYltePl0qPi9naSxcclxuICAgIGNvbW1lbnRzQW5kUGhwVGFncyA9IC88IS0tW1xcc1xcU10qPy0tPnw8XFw/KD86cGhwKT9bXFxzXFxTXSo/XFw/Pi9naTtcclxuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKGNvbW1lbnRzQW5kUGhwVGFncywgJycpXHJcbiAgICAucmVwbGFjZSh0YWdzLCBmdW5jdGlvbigkMCwgJDEpIHtcclxuICAgICAgICByZXR1cm4gYWxsb3dlZC5pbmRleE9mKCc8JyArICQxLnRvTG93ZXJDYXNlKCkgKyAnPicpID4gLTEgPyAkMCA6ICcnO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0cmlwX3RhZ3M7IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBzdHJpcF90YWdzIGZyb20gJy4vaGVscGVycy9zdHJpcC10YWdzJztcclxuXHJcblxyXG53cC5jdXN0b21pemUoJ2Jsb2duYW1lJywgKHZhbHVlKSA9PiB7XHJcbiAgICB2YWx1ZS5iaW5kKCAodG8pID0+IHtcclxuICAgICAgICAkKCcuYy1oZWFkZXJfX2Jsb2duYW1lJykuaHRtbCh0byk7XHJcbiAgICB9KVxyXG59KVxyXG53cC5jdXN0b21pemUoJ190aGVtZW5hbWVfYWNjZW50X2NvbG91cicsICh2YWx1ZSkgPT4ge1xyXG4gICAgdmFsdWUuYmluZCggKHRvKSA9PiB7XHJcbiAgICAgICAgbGV0IGlubGluZV9jc3MgPSBgYDtcclxuICAgICAgICBsZXQgaW5saW5lX2Nzc19vYmogPSBfdGhlbWVuYW1lWydpbmxpbmUtY3NzJ107XHJcbiAgICAgICAgZm9yKGxldCBzZWxlY3RvciBpbiBpbmxpbmVfY3NzX29iaikge1xyXG4gICAgICAgICAgICBpbmxpbmVfY3NzICs9IGAke3NlbGVjdG9yfSB7YDtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgcHJvcCBpbiBpbmxpbmVfY3NzX29ialtzZWxlY3Rvcl0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPWlubGluZV9jc3Nfb2JqW3NlbGVjdG9yXVtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICBpbmxpbmVfY3NzICs9IGAke3Byb3B9OiAke3dwLmN1c3RvbWl6ZSh2YWwpLmdldCgpfSBgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbmxpbmVfY3NzICs9IGB9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI190aGVtZW5hbWUtc3R5bGVzaGVldC1pbmxpbmUtY3NzJykuaHRtbChpbmxpbmVfY3NzKTtcclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxud3AuY3VzdG9taXplKCdfdGhlbWVuYW1lX3NpdGVfaW5mbycsICh2YWx1ZSkgPT4ge1xyXG4gICAgdmFsdWUuYmluZCggKHRvKSA9PntcclxuICAgICAgICAkKCcuYy1zaXRlLWluZm9fX3RleHQnKS5odG1sKHN0cmlwX3RhZ3ModG8sICc8YT4nKSk7XHJcbiAgICB9KVxyXG59KSJdLCJuYW1lcyI6WyJzdHJpcF90YWdzIiwiaW5wdXQiLCJhbGxvd2VkIiwidG9Mb3dlckNhc2UiLCJtYXRjaCIsImpvaW4iLCJ0YWdzIiwiY29tbWVudHNBbmRQaHBUYWdzIiwicmVwbGFjZSIsIiQwIiwiJDEiLCJpbmRleE9mIiwiJCIsIndwIiwiY3VzdG9taXplIiwidmFsdWUiLCJiaW5kIiwidG8iLCJodG1sIiwiaW5saW5lX2NzcyIsImlubGluZV9jc3Nfb2JqIiwiX3RoZW1lbmFtZSIsInNlbGVjdG9yIiwiY29uY2F0IiwicHJvcCIsInZhbCIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=