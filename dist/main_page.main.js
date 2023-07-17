/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/facebook.svg":
/*!******************************!*\
  !*** ./src/img/facebook.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b4e23058abf1b6b314b.svg";

/***/ }),

/***/ "./src/img/instagram.svg":
/*!*******************************!*\
  !*** ./src/img/instagram.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6df4fedd2952c9646349.svg";

/***/ }),

/***/ "./src/img/jill.jpg":
/*!**************************!*\
  !*** ./src/img/jill.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eff9f752daff8e9ee671.jpg";

/***/ }),

/***/ "./src/img/mei.jpg":
/*!*************************!*\
  !*** ./src/img/mei.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a38373e345be650d9c1.jpg";

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
/*!**************************!*\
  !*** ./src/main_page.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMainPage)
/* harmony export */ });
/* harmony import */ var _img_instagram_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/instagram.svg */ "./src/img/instagram.svg");
/* harmony import */ var _img_facebook_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/facebook.svg */ "./src/img/facebook.svg");
/* harmony import */ var _img_jill_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/jill.jpg */ "./src/img/jill.jpg");
/* harmony import */ var _img_mei_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/mei.jpg */ "./src/img/mei.jpg");






function renderMainPage() {
    const container = document.createElement('div');
    container.setAttribute('id', 'content');

    function createHeader() {
        const header = document.createElement('div');
        const menu = document.createElement('div');
        const homeBtn = document.createElement('button');
        const menuBtn = document.createElement('button');
        const contactBtn = document.createElement('button');
        const header1 = document.createElement('h1');
        const menu2 = document.createElement('div');
        const socials = document.createElement('div');
        const orderBtn = document.createElement('button');
        const img1 = document.createElement('img');
        const img2 = document.createElement('img');

        header.classList.add('header')
        menu.classList.add('menu');
        menu2.classList.add('menu2');
        homeBtn.classList.add('top-menu', 'home-btn');
        menuBtn.classList.add('top-menu', 'top-menu-btn');
        contactBtn.classList.add('top-menu', 'contact-btn');
        socials.classList.add('socials')
        orderBtn.classList.add('order-now');
        orderBtn.classList.add('top-menu');
        img1.classList.add('insta');
        img2.classList.add('facebook');

        homeBtn.innerText = 'Home';
        menuBtn.innerText = 'Menu';
        contactBtn.innerText = 'Contact Us';
        header1.innerHTML = `Cyber<br> bar`;
        orderBtn.innerText = 'Order Now';

        img1.setAttribute('alt', 'instagram');
        img1.src = _img_instagram_svg__WEBPACK_IMPORTED_MODULE_0__;
        img2.setAttribute('alt', 'facebook');
        img2.src = _img_facebook_svg__WEBPACK_IMPORTED_MODULE_1__;

        menu.append(homeBtn, menuBtn, contactBtn);
        socials.append(img1, img2);
        menu2.append(socials, orderBtn);
        header.append(menu, header1, menu2);

        return {header, homeBtn, menuBtn, contactBtn};
    }

    function createMainContent() {
        const mainContent = document.createElement('div');
        const mainWrapp = document.createElement('div');
        const header2 = document.createElement('h2');
        const about = document.createElement('div')
        const aboutImg = document.createElement('img');
        const aboutText = document.createElement('div');
        const menuBtn = document.createElement('button');
        const hoursHeader = document.createElement('div');
        const hoursHeaderTxt = document.createElement('div')
        const imgHours1 = document.createElement('img');
        const hours = document.createElement('div')
        const hoursText = document.createElement('div');
        const imgHours2 = document.createElement('img');

        mainContent.classList.add('main-content');
        mainWrapp.classList.add('main-wrapper');
        about.classList.add('about');
        aboutImg.classList.add('about-img')
        aboutText.classList.add('about-text');
        menuBtn.classList.add('food-menu');
        menuBtn.classList.add('top-menu');
        hoursHeader.classList.add('hours-header');
        hoursHeaderTxt.classList.add('hours-header-txt');
        hours.classList.add('hours');
        hoursText.classList.add('hours-text')
        imgHours1.classList.add('hours-img');
        imgHours2.classList.add('hours-img');

        header2.innerText = 'Cyber Bar';
        aboutText.innerHTML = `
        Cyber bar is da bestest bar for future people.<br>
        We have the freshest processed foods in the whole Cyber City. We’re not your<br>
        typical bar and we like it that way.`;
        menuBtn.innerText = 'Our Menu';
        hoursHeaderTxt.innerHTML = `
        Hello, and welcome to our Cyberpunk Bar!<br>
        Our working hours:`;
        hoursText.innerHTML = `
        Monday: 6pm - 6am<br>
        Tuesday: 6pm - 6am<br>
        Wednesday: 6pm - 6am<br>
        Thursday: 6pm - 6am<br>
        Friday: 8pm - 10am<br>
        Saturday: 8pm - 10am<br>
        Sunday: 8pm - 10am`;

        aboutImg.src = _img_jill_jpg__WEBPACK_IMPORTED_MODULE_2__;
        imgHours1.src = _img_mei_jpg__WEBPACK_IMPORTED_MODULE_3__;
        imgHours2.src = _img_mei_jpg__WEBPACK_IMPORTED_MODULE_3__;

        hoursHeader.append(hoursHeaderTxt, imgHours1);
        hours.append(hoursText, imgHours2);
        about.append(aboutImg, aboutText);
        mainWrapp.append(header2, about, menuBtn, hoursHeader, hours);
        mainContent.appendChild(mainWrapp);

        return {mainContent, mainWrapp};
    }

    function createFooter() {
        const footer = document.createElement('div');
        const copyright = document.createElement('div');

        footer.classList.add('footer');
        copyright.classList.add('copyright');

        copyright.innerText = `Copyright Cyber Bar 2023`;

        footer.appendChild(copyright);

        return footer;
    }

    const mainCont = createMainContent();
    const mainContent = mainCont.mainContent;
    const mainWrapp = mainCont.mainWrapp;
    const header = createHeader();
    container.append(header.header, mainContent, createFooter());

    const homeBtn = header.homeBtn;
    const menuBtn = header.menuBtn;
    const contactBtn = header.contactBtn;

    
    return {container, mainContent, mainWrapp, homeBtn, menuBtn, contactBtn};
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbl9wYWdlLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmE7QUFDMkI7QUFDRTtBQUNSO0FBQ0Q7QUFDakM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0NBQUs7QUFDeEI7QUFDQSxtQkFBbUIsOENBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBDQUFJO0FBQzNCLHdCQUF3Qix5Q0FBSTtBQUM1Qix3QkFBd0IseUNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21haW5fcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgaW5zdGEgZnJvbSAnLi9pbWcvaW5zdGFncmFtLnN2Zyc7XHJcbmltcG9ydCBmYWNlYm9vayBmcm9tICcuL2ltZy9mYWNlYm9vay5zdmcnO1xyXG5pbXBvcnQgamlsbCBmcm9tICcuL2ltZy9qaWxsLmpwZyc7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4vaW1nL21laS5qcGcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTWFpblBhZ2UoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGNvbnN0IG1lbnUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qgc29jaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IG9yZGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcbiAgICAgICAgbWVudTIuY2xhc3NMaXN0LmFkZCgnbWVudTInKTtcclxuICAgICAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ3RvcC1tZW51JywgJ2hvbWUtYnRuJyk7XHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCd0b3AtbWVudScsICd0b3AtbWVudS1idG4nKTtcclxuICAgICAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ3RvcC1tZW51JywgJ2NvbnRhY3QtYnRuJyk7XHJcbiAgICAgICAgc29jaWFscy5jbGFzc0xpc3QuYWRkKCdzb2NpYWxzJylcclxuICAgICAgICBvcmRlckJ0bi5jbGFzc0xpc3QuYWRkKCdvcmRlci1ub3cnKTtcclxuICAgICAgICBvcmRlckJ0bi5jbGFzc0xpc3QuYWRkKCd0b3AtbWVudScpO1xyXG4gICAgICAgIGltZzEuY2xhc3NMaXN0LmFkZCgnaW5zdGEnKTtcclxuICAgICAgICBpbWcyLmNsYXNzTGlzdC5hZGQoJ2ZhY2Vib29rJyk7XHJcblxyXG4gICAgICAgIGhvbWVCdG4uaW5uZXJUZXh0ID0gJ0hvbWUnO1xyXG4gICAgICAgIG1lbnVCdG4uaW5uZXJUZXh0ID0gJ01lbnUnO1xyXG4gICAgICAgIGNvbnRhY3RCdG4uaW5uZXJUZXh0ID0gJ0NvbnRhY3QgVXMnO1xyXG4gICAgICAgIGhlYWRlcjEuaW5uZXJIVE1MID0gYEN5YmVyPGJyPiBiYXJgO1xyXG4gICAgICAgIG9yZGVyQnRuLmlubmVyVGV4dCA9ICdPcmRlciBOb3cnO1xyXG5cclxuICAgICAgICBpbWcxLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2luc3RhZ3JhbScpO1xyXG4gICAgICAgIGltZzEuc3JjID0gaW5zdGE7XHJcbiAgICAgICAgaW1nMi5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdmYWNlYm9vaycpO1xyXG4gICAgICAgIGltZzIuc3JjID0gZmFjZWJvb2s7XHJcblxyXG4gICAgICAgIG1lbnUuYXBwZW5kKGhvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG4pO1xyXG4gICAgICAgIHNvY2lhbHMuYXBwZW5kKGltZzEsIGltZzIpO1xyXG4gICAgICAgIG1lbnUyLmFwcGVuZChzb2NpYWxzLCBvcmRlckJ0bik7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZChtZW51LCBoZWFkZXIxLCBtZW51Mik7XHJcblxyXG4gICAgICAgIHJldHVybiB7aGVhZGVyLCBob21lQnRuLCBtZW51QnRuLCBjb250YWN0QnRufTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVNYWluQ29udGVudCgpIHtcclxuICAgICAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IG1haW5XcmFwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjb25zdCBhYm91dEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IGFib3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCBob3Vyc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGhvdXJzSGVhZGVyVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjb25zdCBpbWdIb3VyczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY29uc3QgaG91cnNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaW1nSG91cnMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xyXG4gICAgICAgIG1haW5XcmFwcC5jbGFzc0xpc3QuYWRkKCdtYWluLXdyYXBwZXInKTtcclxuICAgICAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xyXG4gICAgICAgIGFib3V0SW1nLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWltZycpXHJcbiAgICAgICAgYWJvdXRUZXh0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXRleHQnKTtcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtbWVudScpO1xyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgndG9wLW1lbnUnKTtcclxuICAgICAgICBob3Vyc0hlYWRlci5jbGFzc0xpc3QuYWRkKCdob3Vycy1oZWFkZXInKTtcclxuICAgICAgICBob3Vyc0hlYWRlclR4dC5jbGFzc0xpc3QuYWRkKCdob3Vycy1oZWFkZXItdHh0Jyk7XHJcbiAgICAgICAgaG91cnMuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuICAgICAgICBob3Vyc1RleHQuY2xhc3NMaXN0LmFkZCgnaG91cnMtdGV4dCcpXHJcbiAgICAgICAgaW1nSG91cnMxLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWltZycpO1xyXG4gICAgICAgIGltZ0hvdXJzMi5jbGFzc0xpc3QuYWRkKCdob3Vycy1pbWcnKTtcclxuXHJcbiAgICAgICAgaGVhZGVyMi5pbm5lclRleHQgPSAnQ3liZXIgQmFyJztcclxuICAgICAgICBhYm91dFRleHQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIEN5YmVyIGJhciBpcyBkYSBiZXN0ZXN0IGJhciBmb3IgZnV0dXJlIHBlb3BsZS48YnI+XHJcbiAgICAgICAgV2UgaGF2ZSB0aGUgZnJlc2hlc3QgcHJvY2Vzc2VkIGZvb2RzIGluIHRoZSB3aG9sZSBDeWJlciBDaXR5LiBXZeKAmXJlIG5vdCB5b3VyPGJyPlxyXG4gICAgICAgIHR5cGljYWwgYmFyIGFuZCB3ZSBsaWtlIGl0IHRoYXQgd2F5LmA7XHJcbiAgICAgICAgbWVudUJ0bi5pbm5lclRleHQgPSAnT3VyIE1lbnUnO1xyXG4gICAgICAgIGhvdXJzSGVhZGVyVHh0LmlubmVySFRNTCA9IGBcclxuICAgICAgICBIZWxsbywgYW5kIHdlbGNvbWUgdG8gb3VyIEN5YmVycHVuayBCYXIhPGJyPlxyXG4gICAgICAgIE91ciB3b3JraW5nIGhvdXJzOmA7XHJcbiAgICAgICAgaG91cnNUZXh0LmlubmVySFRNTCA9IGBcclxuICAgICAgICBNb25kYXk6IDZwbSAtIDZhbTxicj5cclxuICAgICAgICBUdWVzZGF5OiA2cG0gLSA2YW08YnI+XHJcbiAgICAgICAgV2VkbmVzZGF5OiA2cG0gLSA2YW08YnI+XHJcbiAgICAgICAgVGh1cnNkYXk6IDZwbSAtIDZhbTxicj5cclxuICAgICAgICBGcmlkYXk6IDhwbSAtIDEwYW08YnI+XHJcbiAgICAgICAgU2F0dXJkYXk6IDhwbSAtIDEwYW08YnI+XHJcbiAgICAgICAgU3VuZGF5OiA4cG0gLSAxMGFtYDtcclxuXHJcbiAgICAgICAgYWJvdXRJbWcuc3JjID0gamlsbDtcclxuICAgICAgICBpbWdIb3VyczEuc3JjID0gbG9nbztcclxuICAgICAgICBpbWdIb3VyczIuc3JjID0gbG9nbztcclxuXHJcbiAgICAgICAgaG91cnNIZWFkZXIuYXBwZW5kKGhvdXJzSGVhZGVyVHh0LCBpbWdIb3VyczEpO1xyXG4gICAgICAgIGhvdXJzLmFwcGVuZChob3Vyc1RleHQsIGltZ0hvdXJzMik7XHJcbiAgICAgICAgYWJvdXQuYXBwZW5kKGFib3V0SW1nLCBhYm91dFRleHQpO1xyXG4gICAgICAgIG1haW5XcmFwcC5hcHBlbmQoaGVhZGVyMiwgYWJvdXQsIG1lbnVCdG4sIGhvdXJzSGVhZGVyLCBob3Vycyk7XHJcbiAgICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbldyYXBwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHttYWluQ29udGVudCwgbWFpbldyYXBwfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcclxuICAgICAgICBjb3B5cmlnaHQuY2xhc3NMaXN0LmFkZCgnY29weXJpZ2h0Jyk7XHJcblxyXG4gICAgICAgIGNvcHlyaWdodC5pbm5lclRleHQgPSBgQ29weXJpZ2h0IEN5YmVyIEJhciAyMDIzYDtcclxuXHJcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XHJcblxyXG4gICAgICAgIHJldHVybiBmb290ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFpbkNvbnQgPSBjcmVhdGVNYWluQ29udGVudCgpO1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBtYWluQ29udC5tYWluQ29udGVudDtcclxuICAgIGNvbnN0IG1haW5XcmFwcCA9IG1haW5Db250Lm1haW5XcmFwcDtcclxuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChoZWFkZXIuaGVhZGVyLCBtYWluQ29udGVudCwgY3JlYXRlRm9vdGVyKCkpO1xyXG5cclxuICAgIGNvbnN0IGhvbWVCdG4gPSBoZWFkZXIuaG9tZUJ0bjtcclxuICAgIGNvbnN0IG1lbnVCdG4gPSBoZWFkZXIubWVudUJ0bjtcclxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBoZWFkZXIuY29udGFjdEJ0bjtcclxuXHJcbiAgICBcclxuICAgIHJldHVybiB7Y29udGFpbmVyLCBtYWluQ29udGVudCwgbWFpbldyYXBwLCBob21lQnRuLCBtZW51QnRuLCBjb250YWN0QnRufTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9