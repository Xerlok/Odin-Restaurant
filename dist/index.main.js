/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Cyberpunk.otf */ "./src/fonts/Cyberpunk.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/clacon2.ttf */ "./src/fonts/clacon2.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Regular.ttf */ "./src/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/city.png */ "./src/img/city.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: cyber;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: clacon;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
    font-family: robotoRegular;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}


html,
body {
    height: 100%;
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    background-color: #0f172a;
}

h1,
h2 {
    margin: 0px;
}

#content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    font-family: robotoRegular;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

.header {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding-bottom: 1rem;
}

.menu {
    display: flex;
    gap: 1rem;
    width: 500px;
    
}

.top-menu {
    box-shadow: inset 0 0px 5px #f43f5e;
    font-size: 1rem;
    appearance: none;
    background-color: transparent;
    border-style: none;
    border: 2px solid black;
    border-radius: 15px;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 40px;
    min-width: 150px;
    max-width: 200px;
    outline: none;
    padding: 8px 12px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100%;
    will-change: transform;
}

.top-menu:disabled {
    pointer-events: none;
}

.top-menu:hover {
    color: #fff;
    background-color: #831843;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
}

.top-menu:active {
    box-shadow: none;
    transform: translateY(0);
}

.header h1 {
    color: white;
    font-size: 4rem;
    font-family: cyber;
    text-align: center;
    width: 500px;
}

.menu2 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    width: 500px;
}

.socials {
    display: flex;
    justify-content: center;
    align-items: center;
}

.insta,
.facebook {
    filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(331deg) brightness(108%) contrast(101%);
    width: 35px;
    cursor: pointer;
}

/* Main page */

.main-content {
    flex-grow: 3;
    width: 1500px;
    background-color: #ffe4e6;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 15px 50px;
    box-shadow: inset 0 0px 10px #f43f5e;
}

.main-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
}

h2 {
    background-color: #1e293b;
    border-radius: 15px;
    width: 800px;
    text-align: center;
    color: #ffe4e6;
}

.about {
    display: flex;
    gap: 1rem;
    align-self: flex-start;
    align-items: center;
}

.about-img {
    height: 150px;
    border-radius: 50%;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);
    border: 3px solid white;
}

.about-text {
    background-color: #f43f5e;
    border-radius: 15px 50px;
    padding: 1rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);
    color: rgb(65, 63, 63);
    height: 90px;
}

.main-wrapper button {
    font-size: 1.5rem;
    color: rgb(65, 63, 63);
}

.hours-header {
    display: flex;
    align-items: center;
    align-self: flex-end;
    gap: 1rem;
}

.hours-header-txt {
    background-color: #f43f5e;
    border-radius: 15px 50px;
    padding: 1rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);
    color: rgb(65, 63, 63);
}

.hours {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    gap: 1rem;
}

.hours-text {
    background-color: #f43f5e;
    border-radius: 15px 50px;
    padding: 1rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);
    color: rgb(65, 63, 63);
}

.hours-img {
    height: 150px;
    border-radius: 50%;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);
    border: 3px solid white;
}

.footer {
    flex-grow: 1;
    background-color: black;
    color: white;
    width: 100%;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0rem 1rem 0rem;
    font-family: clacon;
}

/* Menu page */
.menu-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1500px;
}

.menu-items {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;
}

.drink {
    border: 6px solid #1e293b;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);
    background-color: white;
    font-family: clacon;
}

.drink-img {
    width: 200px;
    border-bottom: 2px solid black;
}

h3 {
    background-color: #1e293b;
    border-radius: 15px;
    width: 800px;
    text-align: center;
    color: #ffe4e6;
    font-size: 2rem;
}

/* Contacts Page */
.contacts-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1500px;
    gap: 2rem;
}

.contacts-header {
    background-color: #1e293b;
    border-radius: 15px;
    width: 800px;
    text-align: center;
    color: #ffe4e6;
    font-size: 2rem;
}

.contacts {
    background-color: #f43f5e;
    border-radius: 15px 50px;
    padding: 1rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);
    color: rgb(65, 63, 63);
}

.address {
    background-color: #f43f5e;
    border-radius: 15px 50px;
    padding: 1rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);
    color: rgb(65, 63, 63);
}

.map {
    height: 500px;
    border: 6px solid #f43f5e;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: cyber;\r\n    src: url(./fonts/Cyberpunk.otf);\r\n}\r\n\r\n@font-face {\r\n    font-family: clacon;\r\n    src: url(./fonts/clacon2.ttf);\r\n}\r\n\r\n@font-face {\r\n    font-family: robotoRegular;\r\n    src: url(./fonts/Roboto-Regular.ttf);\r\n}\r\n\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    box-sizing: border-box;\r\n    background-color: #0f172a;\r\n}\r\n\r\nh1,\r\nh2 {\r\n    margin: 0px;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 100%;\r\n    font-family: robotoRegular;\r\n    background-image: url(./img/city.png);\r\n}\r\n\r\n.header {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    width: 100%;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n.menu {\r\n    display: flex;\r\n    gap: 1rem;\r\n    width: 500px;\r\n    \r\n}\r\n\r\n.top-menu {\r\n    box-shadow: inset 0 0px 5px #f43f5e;\r\n    font-size: 1rem;\r\n    appearance: none;\r\n    background-color: transparent;\r\n    border-style: none;\r\n    border: 2px solid black;\r\n    border-radius: 15px;\r\n    box-sizing: border-box;\r\n    color: white;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: Roobert,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\r\n    font-weight: 600;\r\n    line-height: normal;\r\n    margin: 0;\r\n    min-height: 40px;\r\n    min-width: 150px;\r\n    max-width: 200px;\r\n    outline: none;\r\n    padding: 8px 12px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    touch-action: manipulation;\r\n    width: 100%;\r\n    will-change: transform;\r\n}\r\n\r\n.top-menu:disabled {\r\n    pointer-events: none;\r\n}\r\n\r\n.top-menu:hover {\r\n    color: #fff;\r\n    background-color: #831843;\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\r\n    transform: translateY(-2px);\r\n}\r\n\r\n.top-menu:active {\r\n    box-shadow: none;\r\n    transform: translateY(0);\r\n}\r\n\r\n.header h1 {\r\n    color: white;\r\n    font-size: 4rem;\r\n    font-family: cyber;\r\n    text-align: center;\r\n    width: 500px;\r\n}\r\n\r\n.menu2 {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    width: 500px;\r\n}\r\n\r\n.socials {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.insta,\r\n.facebook {\r\n    filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(331deg) brightness(108%) contrast(101%);\r\n    width: 35px;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Main page */\r\n\r\n.main-content {\r\n    flex-grow: 3;\r\n    width: 1500px;\r\n    background-color: #ffe4e6;\r\n    font-size: 1.5rem;\r\n    margin-bottom: 1rem;\r\n    padding: 1rem;\r\n    border-radius: 15px 50px;\r\n    box-shadow: inset 0 0px 10px #f43f5e;\r\n}\r\n\r\n.main-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 2rem;\r\n}\r\n\r\nh2 {\r\n    background-color: #1e293b;\r\n    border-radius: 15px;\r\n    width: 800px;\r\n    text-align: center;\r\n    color: #ffe4e6;\r\n}\r\n\r\n.about {\r\n    display: flex;\r\n    gap: 1rem;\r\n    align-self: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.about-img {\r\n    height: 150px;\r\n    border-radius: 50%;\r\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);\r\n    border: 3px solid white;\r\n}\r\n\r\n.about-text {\r\n    background-color: #f43f5e;\r\n    border-radius: 15px 50px;\r\n    padding: 1rem;\r\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);\r\n    color: rgb(65, 63, 63);\r\n    height: 90px;\r\n}\r\n\r\n.main-wrapper button {\r\n    font-size: 1.5rem;\r\n    color: rgb(65, 63, 63);\r\n}\r\n\r\n.hours-header {\r\n    display: flex;\r\n    align-items: center;\r\n    align-self: flex-end;\r\n    gap: 1rem;\r\n}\r\n\r\n.hours-header-txt {\r\n    background-color: #f43f5e;\r\n    border-radius: 15px 50px;\r\n    padding: 1rem;\r\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);\r\n    color: rgb(65, 63, 63);\r\n}\r\n\r\n.hours {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-self: flex-end;\r\n    gap: 1rem;\r\n}\r\n\r\n.hours-text {\r\n    background-color: #f43f5e;\r\n    border-radius: 15px 50px;\r\n    padding: 1rem;\r\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);\r\n    color: rgb(65, 63, 63);\r\n}\r\n\r\n.hours-img {\r\n    height: 150px;\r\n    border-radius: 50%;\r\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);\r\n    border: 3px solid white;\r\n}\r\n\r\n.footer {\r\n    flex-grow: 1;\r\n    background-color: black;\r\n    color: white;\r\n    width: 100%;\r\n    font-size: 1rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1rem 0rem 1rem 0rem;\r\n    font-family: clacon;\r\n}\r\n\r\n/* Menu page */\r\n.menu-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 1500px;\r\n}\r\n\r\n.menu-items {\r\n    display: grid;\r\n    grid-template-columns: repeat(6, 1fr);\r\n    gap: 2rem;\r\n}\r\n\r\n.drink {\r\n    border: 6px solid #1e293b;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);\r\n    background-color: white;\r\n    font-family: clacon;\r\n}\r\n\r\n.drink-img {\r\n    width: 200px;\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\nh3 {\r\n    background-color: #1e293b;\r\n    border-radius: 15px;\r\n    width: 800px;\r\n    text-align: center;\r\n    color: #ffe4e6;\r\n    font-size: 2rem;\r\n}\r\n\r\n/* Contacts Page */\r\n.contacts-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 1500px;\r\n    gap: 2rem;\r\n}\r\n\r\n.contacts-header {\r\n    background-color: #1e293b;\r\n    border-radius: 15px;\r\n    width: 800px;\r\n    text-align: center;\r\n    color: #ffe4e6;\r\n    font-size: 2rem;\r\n}\r\n\r\n.contacts {\r\n    background-color: #f43f5e;\r\n    border-radius: 15px 50px;\r\n    padding: 1rem;\r\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);\r\n    color: rgb(65, 63, 63);\r\n}\r\n\r\n.address {\r\n    background-color: #f43f5e;\r\n    border-radius: 15px 50px;\r\n    padding: 1rem;\r\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);\r\n    color: rgb(65, 63, 63);\r\n}\r\n\r\n.map {\r\n    height: 500px;\r\n    border: 6px solid #f43f5e;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderContacts)
/* harmony export */ });
/* harmony import */ var _img_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/map.png */ "./src/img/map.png");



function renderContacts() {
    const contacts_wrapper = document.createElement('div');
    const contacts_header = document.createElement('div');
    const contacts = document.createElement('div');
    const address = document.createElement('div');
    const map = document.createElement('img');
    const left_side = document.createElement('div');
    const right_side = document.createElement('div');

    contacts_wrapper.classList.add('contacts-wrapper');
    contacts_header.classList.add('contacts-header');
    contacts.classList.add('contacts');
    address.classList.add('address');
    map.classList.add('map');

    contacts_header.innerText = 'Our Contacts';
    contacts.innerHTML = `
    Phone: +345 875 64 28<br>
    Email: cyber@bar.com`;
    address.innerHTML = `
    Address:<br>
    CYBER BAR<br>
    Old port 3727<br>
    Keck, Cyprus`;
    map.src = _img_map_png__WEBPACK_IMPORTED_MODULE_0__;
    map.alt = 'map of the bar location';

    contacts_wrapper.append(contacts_header, contacts, address, map);

    return contacts_wrapper;
}

/***/ }),

/***/ "./src/main_page.js":
/*!**************************!*\
  !*** ./src/main_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

        img1.addEventListener('click', () => {
            window.open('https://www.instagram.com/','_blank');
        })

        img2.addEventListener('click', () => {
            window.open('https://www.facebook.com/','_blank');
        })

        menu.append(homeBtn, menuBtn, contactBtn);
        socials.append(img1, img2);
        menu2.append(socials, orderBtn);
        header.append(menu, header1, menu2);

        return {header, homeBtn, menuBtn, contactBtn, orderBtn};
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

        return {mainContent, mainWrapp, menuBtn};
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
    const menuBtnM = mainCont.menuBtn;
    const contactBtn = header.contactBtn;
    const orderBtn = header.orderBtn;

    
    return {container, mainContent, mainWrapp, homeBtn, menuBtn, contactBtn, menuBtnM, orderBtn};
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMenuPage)
/* harmony export */ });
/* harmony import */ var _img_placeholder_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/placeholder.jpg */ "./src/img/placeholder.jpg");
/* harmony import */ var _img_kek_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/kek.jpg */ "./src/img/kek.jpg");
/* harmony import */ var _img_mojito_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/mojito.png */ "./src/img/mojito.png");
/* harmony import */ var _img_daiquiri_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/daiquiri.png */ "./src/img/daiquiri.png");
/* harmony import */ var _img_manhattan_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/manhattan.png */ "./src/img/manhattan.png");
/* harmony import */ var _img_mule_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/mule.png */ "./src/img/mule.png");
/* harmony import */ var _img_pina_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/pina.png */ "./src/img/pina.png");
/* harmony import */ var _img_russian_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/russian.png */ "./src/img/russian.png");
/* harmony import */ var _img_beer_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/beer.png */ "./src/img/beer.png");
/* harmony import */ var _img_vodka_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/vodka.png */ "./src/img/vodka.png");
/* harmony import */ var _img_wine_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/wine.png */ "./src/img/wine.png");
/* harmony import */ var _img_absent_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/absent.png */ "./src/img/absent.png");
/* harmony import */ var _img_spiritus_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/spiritus.png */ "./src/img/spiritus.png");















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

    createDrink('Mojito', '10$', _img_mojito_png__WEBPACK_IMPORTED_MODULE_2__, 'beer glass');
    createDrink('Manhattan', '20$', _img_manhattan_png__WEBPACK_IMPORTED_MODULE_4__, 'red wine glass');
    createDrink('Daiquiri', '35$', _img_daiquiri_png__WEBPACK_IMPORTED_MODULE_3__, 'vodka shot');
    createDrink('Moscow Mule', '20$', _img_mule_png__WEBPACK_IMPORTED_MODULE_5__, 'absent shot');
    createDrink('Piña Colada', '20$', _img_pina_png__WEBPACK_IMPORTED_MODULE_6__, 'mohito coctail');
    createDrink('White Russian', '30$', _img_russian_png__WEBPACK_IMPORTED_MODULE_7__, 'Big Kek');

    createDrink('Beer', '5$', _img_beer_png__WEBPACK_IMPORTED_MODULE_8__, 'beer glass');
    createDrink('Wine', '10$', _img_wine_png__WEBPACK_IMPORTED_MODULE_10__, 'red wine glass');
    createDrink('Vodka', '15$', _img_vodka_png__WEBPACK_IMPORTED_MODULE_9__, 'vodka shot');
    createDrink('Absent', '20$', _img_absent_png__WEBPACK_IMPORTED_MODULE_11__, 'absent shot');
    createDrink('Spirytus', '30$', _img_spiritus_png__WEBPACK_IMPORTED_MODULE_12__, 'mohito coctail');
    createDrink('Big Kek', '115$', _img_kek_jpg__WEBPACK_IMPORTED_MODULE_1__, 'Big Kek');

    
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

/***/ }),

/***/ "./src/fonts/Cyberpunk.otf":
/*!*********************************!*\
  !*** ./src/fonts/Cyberpunk.otf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c742b6989b2dc04f6c3.otf";

/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/fonts/clacon2.ttf":
/*!*******************************!*\
  !*** ./src/fonts/clacon2.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bf9de9284ff094e27c6.ttf";

/***/ }),

/***/ "./src/img/absent.png":
/*!****************************!*\
  !*** ./src/img/absent.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56abf1a22e253fecde2b.png";

/***/ }),

/***/ "./src/img/beer.png":
/*!**************************!*\
  !*** ./src/img/beer.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9218971366d2d05bbed4.png";

/***/ }),

/***/ "./src/img/city.png":
/*!**************************!*\
  !*** ./src/img/city.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66fd503698fcc2595355.png";

/***/ }),

/***/ "./src/img/daiquiri.png":
/*!******************************!*\
  !*** ./src/img/daiquiri.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d2f4cafa33fa23976d5.png";

/***/ }),

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

/***/ "./src/img/kek.jpg":
/*!*************************!*\
  !*** ./src/img/kek.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85374ab85fd230e5e6e4.jpg";

/***/ }),

/***/ "./src/img/manhattan.png":
/*!*******************************!*\
  !*** ./src/img/manhattan.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5148fc3594d7616a4a48.png";

/***/ }),

/***/ "./src/img/map.png":
/*!*************************!*\
  !*** ./src/img/map.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9dea64bf96af751c7bf.png";

/***/ }),

/***/ "./src/img/mei.jpg":
/*!*************************!*\
  !*** ./src/img/mei.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a38373e345be650d9c1.jpg";

/***/ }),

/***/ "./src/img/mojito.png":
/*!****************************!*\
  !*** ./src/img/mojito.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eec96876e08ba9279216.png";

/***/ }),

/***/ "./src/img/mule.png":
/*!**************************!*\
  !*** ./src/img/mule.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6422e3489e5ef57c3ac8.png";

/***/ }),

/***/ "./src/img/pina.png":
/*!**************************!*\
  !*** ./src/img/pina.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87ef4aef60d164eccf88.png";

/***/ }),

/***/ "./src/img/placeholder.jpg":
/*!*********************************!*\
  !*** ./src/img/placeholder.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc91dcb7793a52f6e44f.jpg";

/***/ }),

/***/ "./src/img/russian.png":
/*!*****************************!*\
  !*** ./src/img/russian.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4e517fe10d5c21f3d0d.png";

/***/ }),

/***/ "./src/img/spiritus.png":
/*!******************************!*\
  !*** ./src/img/spiritus.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4d26924dc2bab6e87b1.png";

/***/ }),

/***/ "./src/img/vodka.png":
/*!***************************!*\
  !*** ./src/img/vodka.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7aa4b30f3f797a283ff6.png";

/***/ }),

/***/ "./src/img/wine.png":
/*!**************************!*\
  !*** ./src/img/wine.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe632290c197a119770a.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main_page */ "./src/main_page.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts */ "./src/contacts.js");






const main = (0,_main_page__WEBPACK_IMPORTED_MODULE_1__["default"])();

document.body.appendChild(main.container);

function removeAllChildren(yourNode) {
    while (yourNode.hasChildNodes()) {
        yourNode.removeChild(yourNode.firstChild);
    }
}

function switchPage (page) {
    removeAllChildren(main.mainContent);
    main.mainContent.appendChild(page);
}

main.menuBtn.addEventListener('click', () => {
    switchPage((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
})

main.homeBtn.addEventListener('click', () => {
    switchPage(main.mainWrapp);
})

main.contactBtn.addEventListener('click', () => {
    switchPage((0,_contacts__WEBPACK_IMPORTED_MODULE_3__["default"])());
})

main.menuBtnM.addEventListener('click', () => {
    switchPage((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
})
main.orderBtn.addEventListener('click', () => {
    alert(`You can't handle my coktails. They are too strong for you`);
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF3QztBQUNwRiw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDRDQUE0QyxpSUFBNkM7QUFDekYsNENBQTRDLHlHQUFpQztBQUM3RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxX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O1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQWE7QUFDUztBQUNtQjtBQUNMO0FBQ0k7QUFDeEM7QUFDQSxhQUFhLHNEQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQWM7QUFDN0IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsZUFBZSxxREFBYztBQUM3QixDQUFDO0FBQ0Q7QUFDQTtBQUNBLGVBQWUsaURBQWM7QUFDN0IsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWFpbl9wYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0N5YmVycHVuay5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2NsYWNvbjIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltZy9jaXR5LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogY3liZXI7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogY2xhY29uO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90b1JlZ3VsYXI7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcclxufVxyXG5cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTcyYTtcclxufVxyXG5cclxuaDEsXHJcbmgyIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvUmVndWxhcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIFxyXG59XHJcblxyXG4udG9wLW1lbnUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwcHggNXB4ICNmNDNmNWU7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvb2JlcnQsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllciguMjMsIDEsIDAuMzIsIDEpO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbn1cclxuXHJcbi50b3AtbWVudTpkaXNhYmxlZCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnRvcC1tZW51OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzMTg0MztcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCA4cHggMTVweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxufVxyXG5cclxuLnRvcC1tZW51OmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG59XHJcblxyXG4uaGVhZGVyIGgxIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBjeWJlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLm1lbnUyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLnNvY2lhbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmluc3RhLFxyXG4uZmFjZWJvb2sge1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDMzMWRlZykgYnJpZ2h0bmVzcygxMDglKSBjb250cmFzdCgxMDElKTtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBNYWluIHBhZ2UgKi9cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gICAgZmxleC1ncm93OiAzO1xyXG4gICAgd2lkdGg6IDE1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmU0ZTY7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwcHggMTBweCAjZjQzZjVlO1xyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMnJlbTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZTRlNjtcclxufVxyXG5cclxuLmFib3V0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFib3V0LWltZyB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40NzMpO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5hYm91dC10ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDNmNWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40NzMpO1xyXG4gICAgY29sb3I6IHJnYig2NSwgNjMsIDYzKTtcclxuICAgIGhlaWdodDogOTBweDtcclxufVxyXG5cclxuLm1haW4td3JhcHBlciBidXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb2xvcjogcmdiKDY1LCA2MywgNjMpO1xyXG59XHJcblxyXG4uaG91cnMtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5ob3Vycy1oZWFkZXItdHh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDNmNWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40NzMpO1xyXG4gICAgY29sb3I6IHJnYig2NSwgNjMsIDYzKTtcclxufVxyXG5cclxuLmhvdXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmhvdXJzLXRleHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0M2Y1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggNTBweDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQ3Myk7XHJcbiAgICBjb2xvcjogcmdiKDY1LCA2MywgNjMpO1xyXG59XHJcblxyXG4uaG91cnMtaW1nIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQ3Myk7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW0gMHJlbSAxcmVtIDByZW07XHJcbiAgICBmb250LWZhbWlseTogY2xhY29uO1xyXG59XHJcblxyXG4vKiBNZW51IHBhZ2UgKi9cclxuLm1lbnUtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxNTAwcHg7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW1zIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xyXG4gICAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4uZHJpbmsge1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgIzFlMjkzYjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDczKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IGNsYWNvbjtcclxufVxyXG5cclxuLmRyaW5rLWltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmU0ZTY7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi8qIENvbnRhY3RzIFBhZ2UgKi9cclxuLmNvbnRhY3RzLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTUwMHB4O1xyXG4gICAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4uY29udGFjdHMtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmU0ZTY7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5jb250YWN0cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQzZjVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCA1MHB4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDczKTtcclxuICAgIGNvbG9yOiByZ2IoNjUsIDYzLCA2Myk7XHJcbn1cclxuXHJcbi5hZGRyZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDNmNWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40NzMpO1xyXG4gICAgY29sb3I6IHJnYig2NSwgNjMsIDYzKTtcclxufVxyXG5cclxuLm1hcCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgI2Y0M2Y1ZTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsNENBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiw0Q0FBb0M7QUFDeEM7OztBQUdBOztJQUVJLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQix5REFBcUM7QUFDekM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNm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eUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLDZDQUE2QztJQUM3QyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogY3liZXI7XFxyXFxuICAgIHNyYzogdXJsKC4vZm9udHMvQ3liZXJwdW5rLm90Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogY2xhY29uO1xcclxcbiAgICBzcmM6IHVybCguL2ZvbnRzL2NsYWNvbjIudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG9SZWd1bGFyO1xcclxcbiAgICBzcmM6IHVybCguL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0Zik7XFxyXFxufVxcclxcblxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTcyYTtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIge1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG9SZWd1bGFyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvY2l0eS5wbmcpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4udG9wLW1lbnUge1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDBweCA1cHggI2Y0M2Y1ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgZm9udC1mYW1pbHk6IFJvb2JlcnQsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXFxcIlNlZ29lIFVJXFxcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgbWluLWhlaWdodDogNDBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAxNTBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKC4yMywgMSwgMC4zMiwgMSk7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxyXFxufVxcclxcblxcclxcbi50b3AtbWVudTpkaXNhYmxlZCB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLW1lbnU6aG92ZXIge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzMTg0MztcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDhweCAxNXB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxyXFxufVxcclxcblxcclxcbi50b3AtbWVudTphY3RpdmUge1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgaDEge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGN5YmVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbnN0YSxcXHJcXG4uZmFjZWJvb2sge1xcclxcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMzMxZGVnKSBicmlnaHRuZXNzKDEwOCUpIGNvbnRyYXN0KDEwMSUpO1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluIHBhZ2UgKi9cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gICAgZmxleC1ncm93OiAzO1xcclxcbiAgICB3aWR0aDogMTUwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNGU2O1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCA1MHB4O1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDBweCAxMHB4ICNmNDNmNWU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICNmZmU0ZTY7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWltZyB7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40NzMpO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQzZjVlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDczKTtcXHJcXG4gICAgY29sb3I6IHJnYig2NSwgNjMsIDYzKTtcXHJcXG4gICAgaGVpZ2h0OiA5MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi13cmFwcGVyIGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjb2xvcjogcmdiKDY1LCA2MywgNjMpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cnMtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJzLWhlYWRlci10eHQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQzZjVlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDczKTtcXHJcXG4gICAgY29sb3I6IHJnYig2NSwgNjMsIDYzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5ob3Vycy10ZXh0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0M2Y1ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCA1MHB4O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQ3Myk7XFxyXFxuICAgIGNvbG9yOiByZ2IoNjUsIDYzLCA2Myk7XFxyXFxufVxcclxcblxcclxcbi5ob3Vycy1pbWcge1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDczKTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDByZW0gMXJlbSAwcmVtO1xcclxcbiAgICBmb250LWZhbWlseTogY2xhY29uO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNZW51IHBhZ2UgKi9cXHJcXG4ubWVudS13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW1zIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJpbmsge1xcclxcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjMWUyOTNiO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQ3Myk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogY2xhY29uO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJpbmstaW1nIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjkzYjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgd2lkdGg6IDgwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjZmZlNGU2O1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIENvbnRhY3RzIFBhZ2UgKi9cXHJcXG4uY29udGFjdHMtd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTUwMHB4O1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cy1oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyOTNiO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICNmZmU0ZTY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0M2Y1ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCA1MHB4O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQ3Myk7XFxyXFxuICAgIGNvbG9yOiByZ2IoNjUsIDYzLCA2Myk7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0M2Y1ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCA1MHB4O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQ3Myk7XFxyXFxuICAgIGNvbG9yOiByZ2IoNjUsIDYzLCA2Myk7XFxyXFxufVxcclxcblxcclxcbi5tYXAge1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjZjQzZjVlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQga2VjayBmcm9tICcuL2ltZy9tYXAucG5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckNvbnRhY3RzKCkge1xyXG4gICAgY29uc3QgY29udGFjdHNfd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY29udGFjdHNfaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjb250YWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjb25zdCBsZWZ0X3NpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHJpZ2h0X3NpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjb250YWN0c193cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RzLXdyYXBwZXInKTtcclxuICAgIGNvbnRhY3RzX2hlYWRlci5jbGFzc0xpc3QuYWRkKCdjb250YWN0cy1oZWFkZXInKTtcclxuICAgIGNvbnRhY3RzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RzJyk7XHJcbiAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3MnKTtcclxuICAgIG1hcC5jbGFzc0xpc3QuYWRkKCdtYXAnKTtcclxuXHJcbiAgICBjb250YWN0c19oZWFkZXIuaW5uZXJUZXh0ID0gJ091ciBDb250YWN0cyc7XHJcbiAgICBjb250YWN0cy5pbm5lckhUTUwgPSBgXHJcbiAgICBQaG9uZTogKzM0NSA4NzUgNjQgMjg8YnI+XHJcbiAgICBFbWFpbDogY3liZXJAYmFyLmNvbWA7XHJcbiAgICBhZGRyZXNzLmlubmVySFRNTCA9IGBcclxuICAgIEFkZHJlc3M6PGJyPlxyXG4gICAgQ1lCRVIgQkFSPGJyPlxyXG4gICAgT2xkIHBvcnQgMzcyNzxicj5cclxuICAgIEtlY2ssIEN5cHJ1c2A7XHJcbiAgICBtYXAuc3JjID0ga2VjaztcclxuICAgIG1hcC5hbHQgPSAnbWFwIG9mIHRoZSBiYXIgbG9jYXRpb24nO1xyXG5cclxuICAgIGNvbnRhY3RzX3dyYXBwZXIuYXBwZW5kKGNvbnRhY3RzX2hlYWRlciwgY29udGFjdHMsIGFkZHJlc3MsIG1hcCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhY3RzX3dyYXBwZXI7XHJcbn0iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBpbnN0YSBmcm9tICcuL2ltZy9pbnN0YWdyYW0uc3ZnJztcclxuaW1wb3J0IGZhY2Vib29rIGZyb20gJy4vaW1nL2ZhY2Vib29rLnN2Zyc7XHJcbmltcG9ydCBqaWxsIGZyb20gJy4vaW1nL2ppbGwuanBnJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi9pbWcvbWVpLmpwZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJNYWluUGFnZSgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgY29uc3QgbWVudTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBzb2NpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuICAgICAgICBtZW51Mi5jbGFzc0xpc3QuYWRkKCdtZW51MicpO1xyXG4gICAgICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgndG9wLW1lbnUnLCAnaG9tZS1idG4nKTtcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ3RvcC1tZW51JywgJ3RvcC1tZW51LWJ0bicpO1xyXG4gICAgICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZCgndG9wLW1lbnUnLCAnY29udGFjdC1idG4nKTtcclxuICAgICAgICBzb2NpYWxzLmNsYXNzTGlzdC5hZGQoJ3NvY2lhbHMnKVxyXG4gICAgICAgIG9yZGVyQnRuLmNsYXNzTGlzdC5hZGQoJ29yZGVyLW5vdycpO1xyXG4gICAgICAgIG9yZGVyQnRuLmNsYXNzTGlzdC5hZGQoJ3RvcC1tZW51Jyk7XHJcbiAgICAgICAgaW1nMS5jbGFzc0xpc3QuYWRkKCdpbnN0YScpO1xyXG4gICAgICAgIGltZzIuY2xhc3NMaXN0LmFkZCgnZmFjZWJvb2snKTtcclxuXHJcbiAgICAgICAgaG9tZUJ0bi5pbm5lclRleHQgPSAnSG9tZSc7XHJcbiAgICAgICAgbWVudUJ0bi5pbm5lclRleHQgPSAnTWVudSc7XHJcbiAgICAgICAgY29udGFjdEJ0bi5pbm5lclRleHQgPSAnQ29udGFjdCBVcyc7XHJcbiAgICAgICAgaGVhZGVyMS5pbm5lckhUTUwgPSBgQ3liZXI8YnI+IGJhcmA7XHJcbiAgICAgICAgb3JkZXJCdG4uaW5uZXJUZXh0ID0gJ09yZGVyIE5vdyc7XHJcblxyXG4gICAgICAgIGltZzEuc2V0QXR0cmlidXRlKCdhbHQnLCAnaW5zdGFncmFtJyk7XHJcbiAgICAgICAgaW1nMS5zcmMgPSBpbnN0YTtcclxuICAgICAgICBpbWcyLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2ZhY2Vib29rJyk7XHJcbiAgICAgICAgaW1nMi5zcmMgPSBmYWNlYm9vaztcclxuXHJcbiAgICAgICAgaW1nMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vJywnX2JsYW5rJyk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaW1nMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS8nLCdfYmxhbmsnKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBtZW51LmFwcGVuZChob21lQnRuLCBtZW51QnRuLCBjb250YWN0QnRuKTtcclxuICAgICAgICBzb2NpYWxzLmFwcGVuZChpbWcxLCBpbWcyKTtcclxuICAgICAgICBtZW51Mi5hcHBlbmQoc29jaWFscywgb3JkZXJCdG4pO1xyXG4gICAgICAgIGhlYWRlci5hcHBlbmQobWVudSwgaGVhZGVyMSwgbWVudTIpO1xyXG5cclxuICAgICAgICByZXR1cm4ge2hlYWRlciwgaG9tZUJ0biwgbWVudUJ0biwgY29udGFjdEJ0biwgb3JkZXJCdG59O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50KCkge1xyXG4gICAgICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgbWFpbldyYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNvbnN0IGFib3V0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGhvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaG91cnNIZWFkZXJUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNvbnN0IGltZ0hvdXJzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjb25zdCBob3Vyc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBpbWdIb3VyczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICAgICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XHJcbiAgICAgICAgbWFpbldyYXBwLmNsYXNzTGlzdC5hZGQoJ21haW4td3JhcHBlcicpO1xyXG4gICAgICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XHJcbiAgICAgICAgYWJvdXRJbWcuY2xhc3NMaXN0LmFkZCgnYWJvdXQtaW1nJylcclxuICAgICAgICBhYm91dFRleHQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtdGV4dCcpO1xyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnZm9vZC1tZW51Jyk7XHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCd0b3AtbWVudScpO1xyXG4gICAgICAgIGhvdXJzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWhlYWRlcicpO1xyXG4gICAgICAgIGhvdXJzSGVhZGVyVHh0LmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWhlYWRlci10eHQnKTtcclxuICAgICAgICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gICAgICAgIGhvdXJzVGV4dC5jbGFzc0xpc3QuYWRkKCdob3Vycy10ZXh0JylcclxuICAgICAgICBpbWdIb3VyczEuY2xhc3NMaXN0LmFkZCgnaG91cnMtaW1nJyk7XHJcbiAgICAgICAgaW1nSG91cnMyLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWltZycpO1xyXG5cclxuICAgICAgICBoZWFkZXIyLmlubmVyVGV4dCA9ICdDeWJlciBCYXInO1xyXG4gICAgICAgIGFib3V0VGV4dC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgQ3liZXIgYmFyIGlzIGRhIGJlc3Rlc3QgYmFyIGZvciBmdXR1cmUgcGVvcGxlLjxicj5cclxuICAgICAgICBXZSBoYXZlIHRoZSBmcmVzaGVzdCBwcm9jZXNzZWQgZm9vZHMgaW4gdGhlIHdob2xlIEN5YmVyIENpdHkuIFdl4oCZcmUgbm90IHlvdXI8YnI+XHJcbiAgICAgICAgdHlwaWNhbCBiYXIgYW5kIHdlIGxpa2UgaXQgdGhhdCB3YXkuYDtcclxuICAgICAgICBtZW51QnRuLmlubmVyVGV4dCA9ICdPdXIgTWVudSc7XHJcbiAgICAgICAgaG91cnNIZWFkZXJUeHQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIEhlbGxvLCBhbmQgd2VsY29tZSB0byBvdXIgQ3liZXJwdW5rIEJhciE8YnI+XHJcbiAgICAgICAgT3VyIHdvcmtpbmcgaG91cnM6YDtcclxuICAgICAgICBob3Vyc1RleHQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIE1vbmRheTogNnBtIC0gNmFtPGJyPlxyXG4gICAgICAgIFR1ZXNkYXk6IDZwbSAtIDZhbTxicj5cclxuICAgICAgICBXZWRuZXNkYXk6IDZwbSAtIDZhbTxicj5cclxuICAgICAgICBUaHVyc2RheTogNnBtIC0gNmFtPGJyPlxyXG4gICAgICAgIEZyaWRheTogOHBtIC0gMTBhbTxicj5cclxuICAgICAgICBTYXR1cmRheTogOHBtIC0gMTBhbTxicj5cclxuICAgICAgICBTdW5kYXk6IDhwbSAtIDEwYW1gO1xyXG5cclxuICAgICAgICBhYm91dEltZy5zcmMgPSBqaWxsO1xyXG4gICAgICAgIGltZ0hvdXJzMS5zcmMgPSBsb2dvO1xyXG4gICAgICAgIGltZ0hvdXJzMi5zcmMgPSBsb2dvO1xyXG5cclxuICAgICAgICBob3Vyc0hlYWRlci5hcHBlbmQoaG91cnNIZWFkZXJUeHQsIGltZ0hvdXJzMSk7XHJcbiAgICAgICAgaG91cnMuYXBwZW5kKGhvdXJzVGV4dCwgaW1nSG91cnMyKTtcclxuICAgICAgICBhYm91dC5hcHBlbmQoYWJvdXRJbWcsIGFib3V0VGV4dCk7XHJcbiAgICAgICAgbWFpbldyYXBwLmFwcGVuZChoZWFkZXIyLCBhYm91dCwgbWVudUJ0biwgaG91cnNIZWFkZXIsIGhvdXJzKTtcclxuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtYWluV3JhcHApO1xyXG5cclxuICAgICAgICByZXR1cm4ge21haW5Db250ZW50LCBtYWluV3JhcHAsIG1lbnVCdG59O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG4gICAgICAgIGNvcHlyaWdodC5jbGFzc0xpc3QuYWRkKCdjb3B5cmlnaHQnKTtcclxuXHJcbiAgICAgICAgY29weXJpZ2h0LmlubmVyVGV4dCA9IGBDb3B5cmlnaHQgQ3liZXIgQmFyIDIwMjNgO1xyXG5cclxuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYWluQ29udCA9IGNyZWF0ZU1haW5Db250ZW50KCk7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IG1haW5Db250Lm1haW5Db250ZW50O1xyXG4gICAgY29uc3QgbWFpbldyYXBwID0gbWFpbkNvbnQubWFpbldyYXBwO1xyXG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKGhlYWRlci5oZWFkZXIsIG1haW5Db250ZW50LCBjcmVhdGVGb290ZXIoKSk7XHJcblxyXG4gICAgY29uc3QgaG9tZUJ0biA9IGhlYWRlci5ob21lQnRuO1xyXG4gICAgY29uc3QgbWVudUJ0biA9IGhlYWRlci5tZW51QnRuO1xyXG4gICAgY29uc3QgbWVudUJ0bk0gPSBtYWluQ29udC5tZW51QnRuO1xyXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGhlYWRlci5jb250YWN0QnRuO1xyXG4gICAgY29uc3Qgb3JkZXJCdG4gPSBoZWFkZXIub3JkZXJCdG47XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4ge2NvbnRhaW5lciwgbWFpbkNvbnRlbnQsIG1haW5XcmFwcCwgaG9tZUJ0biwgbWVudUJ0biwgY29udGFjdEJ0biwgbWVudUJ0bk0sIG9yZGVyQnRufTtcclxufVxyXG5cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgcGxhY2Vob2xkZXIgZnJvbSAnLi9pbWcvcGxhY2Vob2xkZXIuanBnJztcclxuaW1wb3J0IGtlayBmcm9tICcuL2ltZy9rZWsuanBnJztcclxuaW1wb3J0IG1vaml0byBmcm9tICcuL2ltZy9tb2ppdG8ucG5nJztcclxuaW1wb3J0IGRhaXF1aXJpIGZyb20gJy4vaW1nL2RhaXF1aXJpLnBuZyc7XHJcbmltcG9ydCBtYW5oYXR0YW4gZnJvbSAnLi9pbWcvbWFuaGF0dGFuLnBuZyc7XHJcbmltcG9ydCBtdWxlIGZyb20gJy4vaW1nL211bGUucG5nJztcclxuaW1wb3J0IHBpbmEgZnJvbSAnLi9pbWcvcGluYS5wbmcnO1xyXG5pbXBvcnQgcnVzc2lhbiBmcm9tICcuL2ltZy9ydXNzaWFuLnBuZyc7XHJcbmltcG9ydCBiZWVyIGZyb20gJy4vaW1nL2JlZXIucG5nJztcclxuaW1wb3J0IHZvZGthIGZyb20gJy4vaW1nL3ZvZGthLnBuZyc7XHJcbmltcG9ydCB3aW5lIGZyb20gJy4vaW1nL3dpbmUucG5nJztcclxuaW1wb3J0IGFic2VudCBmcm9tICcuL2ltZy9hYnNlbnQucG5nJztcclxuaW1wb3J0IHNwaXJpdHVzIGZyb20gJy4vaW1nL3NwaXJpdHVzLnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJNZW51UGFnZSgpIHtcclxuICAgIGNvbnN0IG1lbnVfd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbWVudV9oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgY29uc3QgbWVudV9pdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGZ1bmN0aW9uIERyaW5rIChuYW1lLCBwcmljZSwgaW1nLCBpbWdBbHQpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcclxuICAgICAgICB0aGlzLmltZyA9IGltZztcclxuICAgICAgICB0aGlzLmltZ0FsdCA9IGltZ0FsdDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZHJpbmtzID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRHJpbmsobmFtZSwgcHJpY2UsIGltZywgaW1nQWx0KSB7XHJcbiAgICAgICAgY29uc3QgbmV3RHJpbmsgPSBuZXcgRHJpbmsgKG5hbWUsIHByaWNlLCBpbWcsIGltZ0FsdCk7XHJcbiAgICAgICAgZHJpbmtzLnB1c2gobmV3RHJpbmspO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZURyaW5rKCdNb2ppdG8nLCAnMTAkJywgbW9qaXRvLCAnYmVlciBnbGFzcycpO1xyXG4gICAgY3JlYXRlRHJpbmsoJ01hbmhhdHRhbicsICcyMCQnLCBtYW5oYXR0YW4sICdyZWQgd2luZSBnbGFzcycpO1xyXG4gICAgY3JlYXRlRHJpbmsoJ0RhaXF1aXJpJywgJzM1JCcsIGRhaXF1aXJpLCAndm9ka2Egc2hvdCcpO1xyXG4gICAgY3JlYXRlRHJpbmsoJ01vc2NvdyBNdWxlJywgJzIwJCcsIG11bGUsICdhYnNlbnQgc2hvdCcpO1xyXG4gICAgY3JlYXRlRHJpbmsoJ1Bpw7FhIENvbGFkYScsICcyMCQnLCBwaW5hLCAnbW9oaXRvIGNvY3RhaWwnKTtcclxuICAgIGNyZWF0ZURyaW5rKCdXaGl0ZSBSdXNzaWFuJywgJzMwJCcsIHJ1c3NpYW4sICdCaWcgS2VrJyk7XHJcblxyXG4gICAgY3JlYXRlRHJpbmsoJ0JlZXInLCAnNSQnLCBiZWVyLCAnYmVlciBnbGFzcycpO1xyXG4gICAgY3JlYXRlRHJpbmsoJ1dpbmUnLCAnMTAkJywgd2luZSwgJ3JlZCB3aW5lIGdsYXNzJyk7XHJcbiAgICBjcmVhdGVEcmluaygnVm9ka2EnLCAnMTUkJywgdm9ka2EsICd2b2RrYSBzaG90Jyk7XHJcbiAgICBjcmVhdGVEcmluaygnQWJzZW50JywgJzIwJCcsIGFic2VudCwgJ2Fic2VudCBzaG90Jyk7XHJcbiAgICBjcmVhdGVEcmluaygnU3Bpcnl0dXMnLCAnMzAkJywgc3Bpcml0dXMsICdtb2hpdG8gY29jdGFpbCcpO1xyXG4gICAgY3JlYXRlRHJpbmsoJ0JpZyBLZWsnLCAnMTE1JCcsIGtlaywgJ0JpZyBLZWsnKTtcclxuXHJcbiAgICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZHJpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBkcmlua05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBkcmlua1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGljJyk7XHJcblxyXG4gICAgICAgIGRyaW5rLmNsYXNzTGlzdC5hZGQoJ2RyaW5rJyk7XHJcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2RyaW5rLWltZycpO1xyXG4gICAgICAgIGRyaW5rTmFtZS5jbGFzc0xpc3QuYWRkKCdkcmluay1uYW1lJyk7XHJcbiAgICAgICAgZHJpbmtQcmljZS5jbGFzc0xpc3QuYWRkKCdkcmluay1wcmljZScpO1xyXG5cclxuICAgICAgICBpbWcuc3JjID0gZHJpbmtzW2ldLmltZztcclxuICAgICAgICBpbWcuYWx0ID0gZHJpbmtzW2ldLmltZ0FsdDtcclxuICAgICAgICBkcmlua05hbWUuaW5uZXJUZXh0ID0gZHJpbmtzW2ldLm5hbWU7XHJcbiAgICAgICAgZHJpbmtQcmljZS5pbm5lclRleHQgPSBkcmlua3NbaV0ucHJpY2U7XHJcblxyXG4gICAgICAgIGRyaW5rLmFwcGVuZChpbWcsIGRyaW5rTmFtZSwgZHJpbmtQcmljZSk7XHJcbiAgICAgICAgbWVudV9pdGVtcy5hcHBlbmRDaGlsZChkcmluayk7XHJcbiAgICB9XHJcblxyXG4gICAgbWVudV93cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtd3JhcHBlcicpO1xyXG4gICAgbWVudV9oZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXInKTtcclxuICAgIG1lbnVfaXRlbXMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xyXG5cclxuICAgIG1lbnVfaGVhZGVyLmlubmVyVGV4dCA9ICdPdXIgTWVudSc7XHJcblxyXG4gICAgbWVudV93cmFwcGVyLmFwcGVuZChtZW51X2hlYWRlciwgbWVudV9pdGVtcyk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnVfd3JhcHBlcjtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgcmVuZGVyTWFpblBhZ2UgZnJvbSAnLi9tYWluX3BhZ2UnO1xyXG5pbXBvcnQgcmVuZGVyTWVudVBhZ2UgZnJvbSAnLi9tZW51JztcclxuaW1wb3J0IHJlbmRlckNvbnRhY3RzIGZyb20gJy4vY29udGFjdHMnO1xyXG5cclxuY29uc3QgbWFpbiA9IHJlbmRlck1haW5QYWdlKCk7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4uY29udGFpbmVyKTtcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkcmVuKHlvdXJOb2RlKSB7XHJcbiAgICB3aGlsZSAoeW91ck5vZGUuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAgICAgeW91ck5vZGUucmVtb3ZlQ2hpbGQoeW91ck5vZGUuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaFBhZ2UgKHBhZ2UpIHtcclxuICAgIHJlbW92ZUFsbENoaWxkcmVuKG1haW4ubWFpbkNvbnRlbnQpO1xyXG4gICAgbWFpbi5tYWluQ29udGVudC5hcHBlbmRDaGlsZChwYWdlKTtcclxufVxyXG5cclxubWFpbi5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc3dpdGNoUGFnZShyZW5kZXJNZW51UGFnZSgpKTtcclxufSlcclxuXHJcbm1haW4uaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHN3aXRjaFBhZ2UobWFpbi5tYWluV3JhcHApO1xyXG59KVxyXG5cclxubWFpbi5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc3dpdGNoUGFnZShyZW5kZXJDb250YWN0cygpKTtcclxufSlcclxuXHJcbm1haW4ubWVudUJ0bk0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzd2l0Y2hQYWdlKHJlbmRlck1lbnVQYWdlKCkpO1xyXG59KVxyXG5tYWluLm9yZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgYWxlcnQoYFlvdSBjYW4ndCBoYW5kbGUgbXkgY29rdGFpbHMuIFRoZXkgYXJlIHRvbyBzdHJvbmcgZm9yIHlvdWApO1xyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==