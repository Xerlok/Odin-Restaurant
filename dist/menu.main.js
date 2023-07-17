/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/kek.jpg":
/*!*************************!*\
  !*** ./src/img/kek.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85374ab85fd230e5e6e4.jpg";

/***/ }),

/***/ "./src/img/placeholder.jpg":
/*!*********************************!*\
  !*** ./src/img/placeholder.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc91dcb7793a52f6e44f.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMenuPage)
/* harmony export */ });
/* harmony import */ var _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/placeholder.jpg */ "./src/img/placeholder.jpg");
/* harmony import */ var _img_kek_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/kek.jpg */ "./src/img/kek.jpg");




function renderMenuPage() {
    const menu_wrapper = document.createElement('div');
    const menu_header = document.createElement('h3');
    const menu_items = document.createElement('div');

    function Drink (name, price, img, imgAlt) {
        this.name = name;
        this.price = price;
        this.img = img;
        this.imgAlt = imgAlt;
    }

    let drinks = [];

    function createDrink(name, price, img, imgAlt) {
        const newDrink = new Drink (name, price, img, imgAlt);
        drinks.push(newDrink);
    }

    createDrink('Beer', '10$', _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__, 'beer glass');
    createDrink('Wine', '20$', _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__, 'red wine glass');
    createDrink('Vodka', '35$', _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__, 'vodka shot');
    createDrink('Absent', '50$', _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__, 'absent shot');
    createDrink('Mohito', '25$', _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__, 'mohito coctail');
    createDrink('Kek', '115$', _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__, 'Big Kek');

    createDrink('Beer', '10$', _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__, 'beer glass');
    createDrink('Wine', '20$', _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__, 'red wine glass');
    createDrink('Vodka', '35$', _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__, 'vodka shot');
    createDrink('Absent', '50$', _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__, 'absent shot');
    createDrink('Mohito', '25$', _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__, 'mohito coctail');
    createDrink('Kek', '115$', _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__, 'Big Kek');

    createDrink('Beer', '10$', _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__, 'beer glass');
    createDrink('Wine', '20$', _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__, 'red wine glass');
    createDrink('Vodka', '35$', _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__, 'vodka shot');
    createDrink('Absent', '50$', _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__, 'absent shot');
    createDrink('Mohito', '25$', _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__, 'mohito coctail');
    createDrink('Kek', '115$', _img_kek_jpg__WEBPACK_IMPORTED_MODULE_1__, 'Big Kek');

    
    for (let i = 0; i < drinks.length; i++) {
        const drink = document.createElement('div');
        const img = document.createElement('img');
        const drinkName = document.createElement('div');
        const drinkPrice = document.createElement('dic');

        drink.classList.add('drink');
        img.classList.add('drink-img');
        drinkName.classList.add('drink-name');
        drinkPrice.classList.add('drink-price');

        img.src = drinks[i].img;
        img.alt = drinks[i].imgAlt;
        drinkName.innerText = drinks[i].name;
        drinkPrice.innerText = drinks[i].price;

        drink.append(img, drinkName, drinkPrice);
        menu_items.appendChild(drink);
    }

    menu_wrapper.classList.add('menu-wrapper');
    menu_header.classList.add('menu-header');
    menu_items.classList.add('menu-items');

    menu_header.innerText = 'Our Menu';

    menu_wrapper.append(menu_header, menu_items);

    return menu_wrapper;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmE7QUFDbUM7QUFDaEI7QUFDaEM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpREFBVztBQUMxQywrQkFBK0IsaURBQVc7QUFDMUMsZ0NBQWdDLGlEQUFXO0FBQzNDLGlDQUFpQyxpREFBVztBQUM1QyxpQ0FBaUMsaURBQVc7QUFDNUMsK0JBQStCLGlEQUFXO0FBQzFDO0FBQ0EsK0JBQStCLGlEQUFXO0FBQzFDLCtCQUErQixpREFBVztBQUMxQyxnQ0FBZ0MsaURBQVc7QUFDM0MsaUNBQWlDLGlEQUFXO0FBQzVDLGlDQUFpQyxpREFBVztBQUM1QywrQkFBK0IsaURBQVc7QUFDMUM7QUFDQSwrQkFBK0IsaURBQVc7QUFDMUMsK0JBQStCLGlEQUFXO0FBQzFDLGdDQUFnQyxpREFBVztBQUMzQyxpQ0FBaUMsaURBQVc7QUFDNUMsaUNBQWlDLGlEQUFXO0FBQzVDLCtCQUErQix5Q0FBRztBQUNsQztBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IHBsYWNlaG9sZGVyIGZyb20gJy4vaW1nL3BsYWNlaG9sZGVyLmpwZyc7XHJcbmltcG9ydCBrZWsgZnJvbSAnLi9pbWcva2VrLmpwZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJNZW51UGFnZSgpIHtcclxuICAgIGNvbnN0IG1lbnVfd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbWVudV9oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgY29uc3QgbWVudV9pdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGZ1bmN0aW9uIERyaW5rIChuYW1lLCBwcmljZSwgaW1nLCBpbWdBbHQpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcclxuICAgICAgICB0aGlzLmltZyA9IGltZztcclxuICAgICAgICB0aGlzLmltZ0FsdCA9IGltZ0FsdDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZHJpbmtzID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRHJpbmsobmFtZSwgcHJpY2UsIGltZywgaW1nQWx0KSB7XHJcbiAgICAgICAgY29uc3QgbmV3RHJpbmsgPSBuZXcgRHJpbmsgKG5hbWUsIHByaWNlLCBpbWcsIGltZ0FsdCk7XHJcbiAgICAgICAgZHJpbmtzLnB1c2gobmV3RHJpbmspO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZURyaW5rKCdCZWVyJywgJzEwJCcsIHBsYWNlaG9sZGVyLCAnYmVlciBnbGFzcycpO1xyXG4gICAgY3JlYXRlRHJpbmsoJ1dpbmUnLCAnMjAkJywgcGxhY2Vob2xkZXIsICdyZWQgd2luZSBnbGFzcycpO1xyXG4gICAgY3JlYXRlRHJpbmsoJ1ZvZGthJywgJzM1JCcsIHBsYWNlaG9sZGVyLCAndm9ka2Egc2hvdCcpO1xyXG4gICAgY3JlYXRlRHJpbmsoJ0Fic2VudCcsICc1MCQnLCBwbGFjZWhvbGRlciwgJ2Fic2VudCBzaG90Jyk7XHJcbiAgICBjcmVhdGVEcmluaygnTW9oaXRvJywgJzI1JCcsIHBsYWNlaG9sZGVyLCAnbW9oaXRvIGNvY3RhaWwnKTtcclxuICAgIGNyZWF0ZURyaW5rKCdLZWsnLCAnMTE1JCcsIHBsYWNlaG9sZGVyLCAnQmlnIEtlaycpO1xyXG5cclxuICAgIGNyZWF0ZURyaW5rKCdCZWVyJywgJzEwJCcsIHBsYWNlaG9sZGVyLCAnYmVlciBnbGFzcycpO1xyXG4gICAgY3JlYXRlRHJpbmsoJ1dpbmUnLCAnMjAkJywgcGxhY2Vob2xkZXIsICdyZWQgd2luZSBnbGFzcycpO1xyXG4gICAgY3JlYXRlRHJpbmsoJ1ZvZGthJywgJzM1JCcsIHBsYWNlaG9sZGVyLCAndm9ka2Egc2hvdCcpO1xyXG4gICAgY3JlYXRlRHJpbmsoJ0Fic2VudCcsICc1MCQnLCBwbGFjZWhvbGRlciwgJ2Fic2VudCBzaG90Jyk7XHJcbiAgICBjcmVhdGVEcmluaygnTW9oaXRvJywgJzI1JCcsIHBsYWNlaG9sZGVyLCAnbW9oaXRvIGNvY3RhaWwnKTtcclxuICAgIGNyZWF0ZURyaW5rKCdLZWsnLCAnMTE1JCcsIHBsYWNlaG9sZGVyLCAnQmlnIEtlaycpO1xyXG5cclxuICAgIGNyZWF0ZURyaW5rKCdCZWVyJywgJzEwJCcsIHBsYWNlaG9sZGVyLCAnYmVlciBnbGFzcycpO1xyXG4gICAgY3JlYXRlRHJpbmsoJ1dpbmUnLCAnMjAkJywgcGxhY2Vob2xkZXIsICdyZWQgd2luZSBnbGFzcycpO1xyXG4gICAgY3JlYXRlRHJpbmsoJ1ZvZGthJywgJzM1JCcsIHBsYWNlaG9sZGVyLCAndm9ka2Egc2hvdCcpO1xyXG4gICAgY3JlYXRlRHJpbmsoJ0Fic2VudCcsICc1MCQnLCBwbGFjZWhvbGRlciwgJ2Fic2VudCBzaG90Jyk7XHJcbiAgICBjcmVhdGVEcmluaygnTW9oaXRvJywgJzI1JCcsIHBsYWNlaG9sZGVyLCAnbW9oaXRvIGNvY3RhaWwnKTtcclxuICAgIGNyZWF0ZURyaW5rKCdLZWsnLCAnMTE1JCcsIGtlaywgJ0JpZyBLZWsnKTtcclxuXHJcbiAgICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZHJpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBkcmlua05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBkcmlua1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGljJyk7XHJcblxyXG4gICAgICAgIGRyaW5rLmNsYXNzTGlzdC5hZGQoJ2RyaW5rJyk7XHJcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2RyaW5rLWltZycpO1xyXG4gICAgICAgIGRyaW5rTmFtZS5jbGFzc0xpc3QuYWRkKCdkcmluay1uYW1lJyk7XHJcbiAgICAgICAgZHJpbmtQcmljZS5jbGFzc0xpc3QuYWRkKCdkcmluay1wcmljZScpO1xyXG5cclxuICAgICAgICBpbWcuc3JjID0gZHJpbmtzW2ldLmltZztcclxuICAgICAgICBpbWcuYWx0ID0gZHJpbmtzW2ldLmltZ0FsdDtcclxuICAgICAgICBkcmlua05hbWUuaW5uZXJUZXh0ID0gZHJpbmtzW2ldLm5hbWU7XHJcbiAgICAgICAgZHJpbmtQcmljZS5pbm5lclRleHQgPSBkcmlua3NbaV0ucHJpY2U7XHJcblxyXG4gICAgICAgIGRyaW5rLmFwcGVuZChpbWcsIGRyaW5rTmFtZSwgZHJpbmtQcmljZSk7XHJcbiAgICAgICAgbWVudV9pdGVtcy5hcHBlbmRDaGlsZChkcmluayk7XHJcbiAgICB9XHJcblxyXG4gICAgbWVudV93cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtd3JhcHBlcicpO1xyXG4gICAgbWVudV9oZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXInKTtcclxuICAgIG1lbnVfaXRlbXMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xyXG5cclxuICAgIG1lbnVfaGVhZGVyLmlubmVyVGV4dCA9ICdPdXIgTWVudSc7XHJcblxyXG4gICAgbWVudV93cmFwcGVyLmFwcGVuZChtZW51X2hlYWRlciwgbWVudV9pdGVtcyk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnVfd3JhcHBlcjtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==