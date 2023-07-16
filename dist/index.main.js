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
.main-wrapper {
    flex-grow: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    width: 1500px;
    background-color: #ffe4e6;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 15px 50px;
    box-shadow: inset 0 0px 10px #f43f5e;
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
    border: 2px solid black;
}

.drink-img {
    width: 200px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: cyber;\r\n    src: url(./fonts/Cyberpunk.otf);\r\n}\r\n\r\n@font-face {\r\n    font-family: clacon;\r\n    src: url(./fonts/clacon2.ttf);\r\n}\r\n\r\n@font-face {\r\n    font-family: robotoRegular;\r\n    src: url(./fonts/Roboto-Regular.ttf);\r\n}\r\n\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    box-sizing: border-box;\r\n    background-color: #0f172a;\r\n}\r\n\r\nh1,\r\nh2 {\r\n    margin: 0px;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 100%;\r\n    font-family: robotoRegular;\r\n    background-image: url(./img/city.png);\r\n}\r\n\r\n.header {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    width: 100%;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n.menu {\r\n    display: flex;\r\n    gap: 1rem;\r\n    width: 500px;\r\n    \r\n}\r\n\r\n.top-menu {\r\n    box-shadow: inset 0 0px 5px #f43f5e;\r\n    font-size: 1rem;\r\n    appearance: none;\r\n    background-color: transparent;\r\n    border-style: none;\r\n    border: 2px solid black;\r\n    border-radius: 15px;\r\n    box-sizing: border-box;\r\n    color: white;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    font-family: Roobert,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\r\n    font-weight: 600;\r\n    line-height: normal;\r\n    margin: 0;\r\n    min-height: 40px;\r\n    min-width: 150px;\r\n    max-width: 200px;\r\n    outline: none;\r\n    padding: 8px 12px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);\r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    touch-action: manipulation;\r\n    width: 100%;\r\n    will-change: transform;\r\n}\r\n\r\n.top-menu:disabled {\r\n    pointer-events: none;\r\n}\r\n\r\n.top-menu:hover {\r\n    color: #fff;\r\n    background-color: #831843;\r\n    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\r\n    transform: translateY(-2px);\r\n}\r\n\r\n.top-menu:active {\r\n    box-shadow: none;\r\n    transform: translateY(0);\r\n}\r\n\r\n.header h1 {\r\n    color: white;\r\n    font-size: 4rem;\r\n    font-family: cyber;\r\n    text-align: center;\r\n    width: 500px;\r\n}\r\n\r\n.menu2 {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    width: 500px;\r\n}\r\n\r\n.socials {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.insta,\r\n.facebook {\r\n    filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(331deg) brightness(108%) contrast(101%);\r\n    width: 35px;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Main page */\r\n.main-wrapper {\r\n    flex-grow: 3;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    width: 1500px;\r\n    background-color: #ffe4e6;\r\n    font-size: 1.5rem;\r\n    margin-bottom: 1rem;\r\n    padding: 1rem;\r\n    border-radius: 15px 50px;\r\n    box-shadow: inset 0 0px 10px #f43f5e;\r\n}\r\n\r\nh2 {\r\n    background-color: #1e293b;\r\n    border-radius: 15px;\r\n    width: 800px;\r\n    text-align: center;\r\n    color: #ffe4e6;\r\n}\r\n\r\n.about {\r\n    display: flex;\r\n    gap: 1rem;\r\n    align-self: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.about-img {\r\n    height: 150px;\r\n    border-radius: 50%;\r\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);\r\n    border: 3px solid white;\r\n}\r\n\r\n.about-text {\r\n    background-color: #f43f5e;\r\n    border-radius: 15px 50px;\r\n    padding: 1rem;\r\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);\r\n    color: rgb(65, 63, 63);\r\n    height: 90px;\r\n}\r\n\r\n.main-wrapper button {\r\n    font-size: 1.5rem;\r\n    color: rgb(65, 63, 63);\r\n}\r\n\r\n.hours-header {\r\n    display: flex;\r\n    align-items: center;\r\n    align-self: flex-end;\r\n    gap: 1rem;\r\n}\r\n\r\n.hours-header-txt {\r\n    background-color: #f43f5e;\r\n    border-radius: 15px 50px;\r\n    padding: 1rem;\r\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);\r\n    color: rgb(65, 63, 63);\r\n}\r\n\r\n.hours {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-self: flex-end;\r\n    gap: 1rem;\r\n}\r\n\r\n.hours-text {\r\n    background-color: #f43f5e;\r\n    border-radius: 15px 50px;\r\n    padding: 1rem;\r\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);\r\n    color: rgb(65, 63, 63);\r\n}\r\n\r\n.hours-img {\r\n    height: 150px;\r\n    border-radius: 50%;\r\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.473);\r\n    border: 3px solid white;\r\n}\r\n\r\n.footer {\r\n    flex-grow: 1;\r\n    background-color: black;\r\n    color: white;\r\n    width: 100%;\r\n    font-size: 1rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1rem 0rem 1rem 0rem;\r\n    font-family: clacon;\r\n}\r\n\r\n/* Menu page */\r\n.menu-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 1500px;\r\n}\r\n\r\n.menu-items {\r\n    display: grid;\r\n    grid-template-columns: repeat(6, 1fr);\r\n    gap: 2rem;\r\n}\r\n\r\n.drink {\r\n    border: 2px solid black;\r\n}\r\n\r\n.drink-img {\r\n    width: 200px;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _img_jill_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/jill.png */ "./src/img/jill.png");
/* harmony import */ var _img_mei_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/mei.jpeg */ "./src/img/mei.jpeg");






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
        homeBtn.classList.add('top-menu');
        menuBtn.classList.add('top-menu');
        contactBtn.classList.add('top-menu');
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

        return header;
    }

    function createMainContent() {
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

        aboutImg.src = _img_jill_png__WEBPACK_IMPORTED_MODULE_2__;
        imgHours1.src = _img_mei_jpeg__WEBPACK_IMPORTED_MODULE_3__;
        imgHours2.src = _img_mei_jpeg__WEBPACK_IMPORTED_MODULE_3__;

        hoursHeader.append(hoursHeaderTxt, imgHours1);
        hours.append(hoursText, imgHours2);
        about.append(aboutImg, aboutText);
        mainWrapp.append(header2, about, menuBtn, hoursHeader, hours);

        return mainWrapp;
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

    const mainWrapp = createMainContent();
    container.append(createHeader(), mainWrapp, createFooter());
    
    return {container, mainWrapp};
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

    menu_header.innerText = 'Our Menu:';

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

/***/ "./src/img/city.png":
/*!**************************!*\
  !*** ./src/img/city.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66fd503698fcc2595355.png";

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

/***/ "./src/img/jill.png":
/*!**************************!*\
  !*** ./src/img/jill.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10914ef233068189333e.png";

/***/ }),

/***/ "./src/img/mei.jpeg":
/*!**************************!*\
  !*** ./src/img/mei.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "acec938c2f313027bd01.jpeg";

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





const main = (0,_main_page__WEBPACK_IMPORTED_MODULE_1__["default"])();
const mainWrapper = main.mainWrapp;

document.body.appendChild(main.container);

function removeAllChildren(yourNode) {
    while (yourNode.hasChildNodes()) {
        yourNode.removeChild(yourNode.firstChild);
    }
}

function switchPage (page) {
    removeAllChildren(main.mainWrapp);
    mainWrapper.appendChild(page);
}

switchPage((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF3QztBQUNwRiw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDRDQUE0QyxpSUFBNkM7QUFDekYsNENBQTRDLHlHQUFpQztBQUM3RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxL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O1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FhO0FBQ1M7QUFDbUI7QUFDTDtBQUNwQztBQUNBLGFBQWEsc0RBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpREFBYyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWFpbl9wYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0N5YmVycHVuay5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2NsYWNvbjIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltZy9jaXR5LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogY3liZXI7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogY2xhY29uO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90b1JlZ3VsYXI7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcclxufVxyXG5cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTcyYTtcclxufVxyXG5cclxuaDEsXHJcbmgyIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvUmVndWxhcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIFxyXG59XHJcblxyXG4udG9wLW1lbnUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwcHggNXB4ICNmNDNmNWU7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvb2JlcnQsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllciguMjMsIDEsIDAuMzIsIDEpO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbn1cclxuXHJcbi50b3AtbWVudTpkaXNhYmxlZCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnRvcC1tZW51OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzMTg0MztcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCA4cHggMTVweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxufVxyXG5cclxuLnRvcC1tZW51OmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG59XHJcblxyXG4uaGVhZGVyIGgxIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBjeWJlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLm1lbnUyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLnNvY2lhbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmluc3RhLFxyXG4uZmFjZWJvb2sge1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDIlKSBodWUtcm90YXRlKDMzMWRlZykgYnJpZ2h0bmVzcygxMDglKSBjb250cmFzdCgxMDElKTtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBNYWluIHBhZ2UgKi9cclxuLm1haW4td3JhcHBlciB7XHJcbiAgICBmbGV4LWdyb3c6IDM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICB3aWR0aDogMTUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlNjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDUwcHg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDBweCAxMHB4ICNmNDNmNWU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmU0ZTY7XHJcbn1cclxuXHJcbi5hYm91dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hYm91dC1pbWcge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDczKTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4uYWJvdXQtdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQzZjVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCA1MHB4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDczKTtcclxuICAgIGNvbG9yOiByZ2IoNjUsIDYzLCA2Myk7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIgYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6IHJnYig2NSwgNjMsIDYzKTtcclxufVxyXG5cclxuLmhvdXJzLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uaG91cnMtaGVhZGVyLXR4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQzZjVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCA1MHB4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDczKTtcclxuICAgIGNvbG9yOiByZ2IoNjUsIDYzLCA2Myk7XHJcbn1cclxuXHJcbi5ob3VycyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5ob3Vycy10ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDNmNWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40NzMpO1xyXG4gICAgY29sb3I6IHJnYig2NSwgNjMsIDYzKTtcclxufVxyXG5cclxuLmhvdXJzLWltZyB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40NzMpO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDByZW0gMXJlbSAwcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGNsYWNvbjtcclxufVxyXG5cclxuLyogTWVudSBwYWdlICovXHJcbi5tZW51LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTUwMHB4O1xyXG59XHJcblxyXG4ubWVudS1pdGVtcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcclxuICAgIGdhcDogMnJlbTtcclxufVxyXG5cclxuLmRyaW5rIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZHJpbmstaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsNENBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiw0Q0FBb0M7QUFDeEM7OztBQUdBOztJQUVJLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQix5REFBcUM7QUFDekM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrSkFBa0o7SUFDbEosZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1EQUFtRDtJQUNuRCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QiwwQ0FBMEM7SUFDMUMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSw4RkFBOEY7SUFDOUYsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUEsY0FBYztBQUNkO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDZDQUE2QztJQUM3Qyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYiw2Q0FBNkM7SUFDN0Msc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYiw2Q0FBNkM7SUFDN0Msc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw2Q0FBNkM7SUFDN0MsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCOztBQUVBLGNBQWM7QUFDZDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogY3liZXI7XFxyXFxuICAgIHNyYzogdXJsKC4vZm9udHMvQ3liZXJwdW5rLm90Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogY2xhY29uO1xcclxcbiAgICBzcmM6IHVybCguL2ZvbnRzL2NsYWNvbjIudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG9SZWd1bGFyO1xcclxcbiAgICBzcmM6IHVybCguL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0Zik7XFxyXFxufVxcclxcblxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTcyYTtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIge1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG9SZWd1bGFyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvY2l0eS5wbmcpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4udG9wLW1lbnUge1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDBweCA1cHggI2Y0M2Y1ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgZm9udC1mYW1pbHk6IFJvb2JlcnQsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXFxcIlNlZ29lIFVJXFxcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgbWluLWhlaWdodDogNDBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAxNTBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKC4yMywgMSwgMC4zMiwgMSk7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxyXFxufVxcclxcblxcclxcbi50b3AtbWVudTpkaXNhYmxlZCB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLW1lbnU6aG92ZXIge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzMTg0MztcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDhweCAxNXB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxyXFxufVxcclxcblxcclxcbi50b3AtbWVudTphY3RpdmUge1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgaDEge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGN5YmVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbnN0YSxcXHJcXG4uZmFjZWJvb2sge1xcclxcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMiUpIGh1ZS1yb3RhdGUoMzMxZGVnKSBicmlnaHRuZXNzKDEwOCUpIGNvbnRyYXN0KDEwMSUpO1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluIHBhZ2UgKi9cXHJcXG4ubWFpbi13cmFwcGVyIHtcXHJcXG4gICAgZmxleC1ncm93OiAzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDE1MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlNjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggNTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwcHggMTBweCAjZjQzZjVlO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI5M2I7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiA4MDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogI2ZmZTRlNjtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQ3Myk7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGV4dCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDNmNWU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggNTBweDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40NzMpO1xcclxcbiAgICBjb2xvcjogcmdiKDY1LCA2MywgNjMpO1xcclxcbiAgICBoZWlnaHQ6IDkwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXdyYXBwZXIgYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGNvbG9yOiByZ2IoNjUsIDYzLCA2Myk7XFxyXFxufVxcclxcblxcclxcbi5ob3Vycy1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cnMtaGVhZGVyLXR4dCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDNmNWU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggNTBweDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40NzMpO1xcclxcbiAgICBjb2xvcjogcmdiKDY1LCA2MywgNjMpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJzLXRleHQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQzZjVlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDczKTtcXHJcXG4gICAgY29sb3I6IHJnYig2NSwgNjMsIDYzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJzLWltZyB7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40NzMpO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMHJlbSAxcmVtIDByZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBjbGFjb247XFxyXFxufVxcclxcblxcclxcbi8qIE1lbnUgcGFnZSAqL1xcclxcbi5tZW51LXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDE1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbXMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5kcmluayB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJpbmstaW1nIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgaW5zdGEgZnJvbSAnLi9pbWcvaW5zdGFncmFtLnN2Zyc7XHJcbmltcG9ydCBmYWNlYm9vayBmcm9tICcuL2ltZy9mYWNlYm9vay5zdmcnO1xyXG5pbXBvcnQgamlsbCBmcm9tICcuL2ltZy9qaWxsLnBuZyc7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4vaW1nL21laS5qcGVnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck1haW5QYWdlKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCBoZWFkZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBjb25zdCBtZW51MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHNvY2lhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xyXG4gICAgICAgIG1lbnUyLmNsYXNzTGlzdC5hZGQoJ21lbnUyJyk7XHJcbiAgICAgICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCd0b3AtbWVudScpO1xyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgndG9wLW1lbnUnKTtcclxuICAgICAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ3RvcC1tZW51Jyk7XHJcbiAgICAgICAgc29jaWFscy5jbGFzc0xpc3QuYWRkKCdzb2NpYWxzJylcclxuICAgICAgICBvcmRlckJ0bi5jbGFzc0xpc3QuYWRkKCdvcmRlci1ub3cnKTtcclxuICAgICAgICBvcmRlckJ0bi5jbGFzc0xpc3QuYWRkKCd0b3AtbWVudScpO1xyXG4gICAgICAgIGltZzEuY2xhc3NMaXN0LmFkZCgnaW5zdGEnKTtcclxuICAgICAgICBpbWcyLmNsYXNzTGlzdC5hZGQoJ2ZhY2Vib29rJyk7XHJcblxyXG4gICAgICAgIGhvbWVCdG4uaW5uZXJUZXh0ID0gJ0hvbWUnO1xyXG4gICAgICAgIG1lbnVCdG4uaW5uZXJUZXh0ID0gJ01lbnUnO1xyXG4gICAgICAgIGNvbnRhY3RCdG4uaW5uZXJUZXh0ID0gJ0NvbnRhY3QgVXMnO1xyXG4gICAgICAgIGhlYWRlcjEuaW5uZXJIVE1MID0gYEN5YmVyPGJyPiBiYXJgO1xyXG4gICAgICAgIG9yZGVyQnRuLmlubmVyVGV4dCA9ICdPcmRlciBOb3cnO1xyXG5cclxuICAgICAgICBpbWcxLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2luc3RhZ3JhbScpO1xyXG4gICAgICAgIGltZzEuc3JjID0gaW5zdGE7XHJcbiAgICAgICAgaW1nMi5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdmYWNlYm9vaycpO1xyXG4gICAgICAgIGltZzIuc3JjID0gZmFjZWJvb2s7XHJcblxyXG4gICAgICAgIG1lbnUuYXBwZW5kKGhvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG4pO1xyXG4gICAgICAgIHNvY2lhbHMuYXBwZW5kKGltZzEsIGltZzIpO1xyXG4gICAgICAgIG1lbnUyLmFwcGVuZChzb2NpYWxzLCBvcmRlckJ0bik7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZChtZW51LCBoZWFkZXIxLCBtZW51Mik7XHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQoKSB7XHJcbiAgICAgICAgY29uc3QgbWFpbldyYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNvbnN0IGFib3V0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGhvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaG91cnNIZWFkZXJUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNvbnN0IGltZ0hvdXJzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjb25zdCBob3Vyc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBpbWdIb3VyczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICAgICAgbWFpbldyYXBwLmNsYXNzTGlzdC5hZGQoJ21haW4td3JhcHBlcicpO1xyXG4gICAgICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XHJcbiAgICAgICAgYWJvdXRJbWcuY2xhc3NMaXN0LmFkZCgnYWJvdXQtaW1nJylcclxuICAgICAgICBhYm91dFRleHQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtdGV4dCcpO1xyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnZm9vZC1tZW51Jyk7XHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCd0b3AtbWVudScpO1xyXG4gICAgICAgIGhvdXJzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWhlYWRlcicpO1xyXG4gICAgICAgIGhvdXJzSGVhZGVyVHh0LmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWhlYWRlci10eHQnKTtcclxuICAgICAgICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gICAgICAgIGhvdXJzVGV4dC5jbGFzc0xpc3QuYWRkKCdob3Vycy10ZXh0JylcclxuICAgICAgICBpbWdIb3VyczEuY2xhc3NMaXN0LmFkZCgnaG91cnMtaW1nJyk7XHJcbiAgICAgICAgaW1nSG91cnMyLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWltZycpO1xyXG5cclxuICAgICAgICBoZWFkZXIyLmlubmVyVGV4dCA9ICdDeWJlciBCYXInO1xyXG4gICAgICAgIGFib3V0VGV4dC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgQ3liZXIgYmFyIGlzIGRhIGJlc3Rlc3QgYmFyIGZvciBmdXR1cmUgcGVvcGxlLjxicj5cclxuICAgICAgICBXZSBoYXZlIHRoZSBmcmVzaGVzdCBwcm9jZXNzZWQgZm9vZHMgaW4gdGhlIHdob2xlIEN5YmVyIENpdHkuIFdl4oCZcmUgbm90IHlvdXI8YnI+XHJcbiAgICAgICAgdHlwaWNhbCBiYXIgYW5kIHdlIGxpa2UgaXQgdGhhdCB3YXkuYDtcclxuICAgICAgICBtZW51QnRuLmlubmVyVGV4dCA9ICdPdXIgTWVudSc7XHJcbiAgICAgICAgaG91cnNIZWFkZXJUeHQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIEhlbGxvLCBhbmQgd2VsY29tZSB0byBvdXIgQ3liZXJwdW5rIEJhciE8YnI+XHJcbiAgICAgICAgT3VyIHdvcmtpbmcgaG91cnM6YDtcclxuICAgICAgICBob3Vyc1RleHQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIE1vbmRheTogNnBtIC0gNmFtPGJyPlxyXG4gICAgICAgIFR1ZXNkYXk6IDZwbSAtIDZhbTxicj5cclxuICAgICAgICBXZWRuZXNkYXk6IDZwbSAtIDZhbTxicj5cclxuICAgICAgICBUaHVyc2RheTogNnBtIC0gNmFtPGJyPlxyXG4gICAgICAgIEZyaWRheTogOHBtIC0gMTBhbTxicj5cclxuICAgICAgICBTYXR1cmRheTogOHBtIC0gMTBhbTxicj5cclxuICAgICAgICBTdW5kYXk6IDhwbSAtIDEwYW1gO1xyXG5cclxuICAgICAgICBhYm91dEltZy5zcmMgPSBqaWxsO1xyXG4gICAgICAgIGltZ0hvdXJzMS5zcmMgPSBsb2dvO1xyXG4gICAgICAgIGltZ0hvdXJzMi5zcmMgPSBsb2dvO1xyXG5cclxuICAgICAgICBob3Vyc0hlYWRlci5hcHBlbmQoaG91cnNIZWFkZXJUeHQsIGltZ0hvdXJzMSk7XHJcbiAgICAgICAgaG91cnMuYXBwZW5kKGhvdXJzVGV4dCwgaW1nSG91cnMyKTtcclxuICAgICAgICBhYm91dC5hcHBlbmQoYWJvdXRJbWcsIGFib3V0VGV4dCk7XHJcbiAgICAgICAgbWFpbldyYXBwLmFwcGVuZChoZWFkZXIyLCBhYm91dCwgbWVudUJ0biwgaG91cnNIZWFkZXIsIGhvdXJzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1haW5XcmFwcDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcclxuICAgICAgICBjb3B5cmlnaHQuY2xhc3NMaXN0LmFkZCgnY29weXJpZ2h0Jyk7XHJcblxyXG4gICAgICAgIGNvcHlyaWdodC5pbm5lclRleHQgPSBgQ29weXJpZ2h0IEN5YmVyIEJhciAyMDIzYDtcclxuXHJcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XHJcblxyXG4gICAgICAgIHJldHVybiBmb290ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFpbldyYXBwID0gY3JlYXRlTWFpbkNvbnRlbnQoKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoY3JlYXRlSGVhZGVyKCksIG1haW5XcmFwcCwgY3JlYXRlRm9vdGVyKCkpO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge2NvbnRhaW5lciwgbWFpbldyYXBwfTtcclxufVxyXG5cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgcGxhY2Vob2xkZXIgZnJvbSAnLi9pbWcvcGxhY2Vob2xkZXIuanBnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTWVudVBhZ2UoKSB7XHJcbiAgICBjb25zdCBtZW51X3dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG1lbnVfaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGNvbnN0IG1lbnVfaXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBEcmluayAobmFtZSwgcHJpY2UsIGltZywgaW1nQWx0KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICAgICAgdGhpcy5pbWcgPSBpbWc7XHJcbiAgICAgICAgdGhpcy5pbWdBbHQgPSBpbWdBbHQ7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRyaW5rcyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZURyaW5rKG5hbWUsIHByaWNlLCBpbWcsIGltZ0FsdCkge1xyXG4gICAgICAgIGNvbnN0IG5ld0RyaW5rID0gbmV3IERyaW5rIChuYW1lLCBwcmljZSwgaW1nLCBpbWdBbHQpO1xyXG4gICAgICAgIGRyaW5rcy5wdXNoKG5ld0RyaW5rKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVEcmluaygnQmVlcicsICcxMCQnLCBwbGFjZWhvbGRlciwgJ2JlZXIgZ2xhc3MnKTtcclxuICAgIGNyZWF0ZURyaW5rKCdXaW5lJywgJzIwJCcsIHBsYWNlaG9sZGVyLCAncmVkIHdpbmUgZ2xhc3MnKTtcclxuICAgIGNyZWF0ZURyaW5rKCdWb2RrYScsICczNSQnLCBwbGFjZWhvbGRlciwgJ3ZvZGthIHNob3QnKTtcclxuICAgIGNyZWF0ZURyaW5rKCdBYnNlbnQnLCAnNTAkJywgcGxhY2Vob2xkZXIsICdhYnNlbnQgc2hvdCcpO1xyXG4gICAgY3JlYXRlRHJpbmsoJ01vaGl0bycsICcyNSQnLCBwbGFjZWhvbGRlciwgJ21vaGl0byBjb2N0YWlsJyk7XHJcbiAgICBjcmVhdGVEcmluaygnS2VrJywgJzExNSQnLCBwbGFjZWhvbGRlciwgJ0JpZyBLZWsnKTtcclxuXHJcbiAgICBjcmVhdGVEcmluaygnQmVlcicsICcxMCQnLCBwbGFjZWhvbGRlciwgJ2JlZXIgZ2xhc3MnKTtcclxuICAgIGNyZWF0ZURyaW5rKCdXaW5lJywgJzIwJCcsIHBsYWNlaG9sZGVyLCAncmVkIHdpbmUgZ2xhc3MnKTtcclxuICAgIGNyZWF0ZURyaW5rKCdWb2RrYScsICczNSQnLCBwbGFjZWhvbGRlciwgJ3ZvZGthIHNob3QnKTtcclxuICAgIGNyZWF0ZURyaW5rKCdBYnNlbnQnLCAnNTAkJywgcGxhY2Vob2xkZXIsICdhYnNlbnQgc2hvdCcpO1xyXG4gICAgY3JlYXRlRHJpbmsoJ01vaGl0bycsICcyNSQnLCBwbGFjZWhvbGRlciwgJ21vaGl0byBjb2N0YWlsJyk7XHJcbiAgICBjcmVhdGVEcmluaygnS2VrJywgJzExNSQnLCBwbGFjZWhvbGRlciwgJ0JpZyBLZWsnKTtcclxuXHJcbiAgICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZHJpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBkcmlua05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBkcmlua1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGljJyk7XHJcblxyXG4gICAgICAgIGRyaW5rLmNsYXNzTGlzdC5hZGQoJ2RyaW5rJyk7XHJcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2RyaW5rLWltZycpO1xyXG4gICAgICAgIGRyaW5rTmFtZS5jbGFzc0xpc3QuYWRkKCdkcmluay1uYW1lJyk7XHJcbiAgICAgICAgZHJpbmtQcmljZS5jbGFzc0xpc3QuYWRkKCdkcmluay1wcmljZScpO1xyXG5cclxuICAgICAgICBpbWcuc3JjID0gZHJpbmtzW2ldLmltZztcclxuICAgICAgICBpbWcuYWx0ID0gZHJpbmtzW2ldLmltZ0FsdDtcclxuICAgICAgICBkcmlua05hbWUuaW5uZXJUZXh0ID0gZHJpbmtzW2ldLm5hbWU7XHJcbiAgICAgICAgZHJpbmtQcmljZS5pbm5lclRleHQgPSBkcmlua3NbaV0ucHJpY2U7XHJcblxyXG4gICAgICAgIGRyaW5rLmFwcGVuZChpbWcsIGRyaW5rTmFtZSwgZHJpbmtQcmljZSk7XHJcbiAgICAgICAgbWVudV9pdGVtcy5hcHBlbmRDaGlsZChkcmluayk7XHJcbiAgICB9XHJcblxyXG4gICAgbWVudV93cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtd3JhcHBlcicpO1xyXG4gICAgbWVudV9oZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXInKTtcclxuICAgIG1lbnVfaXRlbXMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xyXG5cclxuICAgIG1lbnVfaGVhZGVyLmlubmVyVGV4dCA9ICdPdXIgTWVudTonO1xyXG5cclxuICAgIG1lbnVfd3JhcHBlci5hcHBlbmQobWVudV9oZWFkZXIsIG1lbnVfaXRlbXMpO1xyXG5cclxuICAgIHJldHVybiBtZW51X3dyYXBwZXI7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHJlbmRlck1haW5QYWdlIGZyb20gJy4vbWFpbl9wYWdlJztcclxuaW1wb3J0IHJlbmRlck1lbnVQYWdlIGZyb20gJy4vbWVudSc7XHJcblxyXG5jb25zdCBtYWluID0gcmVuZGVyTWFpblBhZ2UoKTtcclxuY29uc3QgbWFpbldyYXBwZXIgPSBtYWluLm1haW5XcmFwcDtcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbi5jb250YWluZXIpO1xyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4oeW91ck5vZGUpIHtcclxuICAgIHdoaWxlICh5b3VyTm9kZS5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICB5b3VyTm9kZS5yZW1vdmVDaGlsZCh5b3VyTm9kZS5maXJzdENoaWxkKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoUGFnZSAocGFnZSkge1xyXG4gICAgcmVtb3ZlQWxsQ2hpbGRyZW4obWFpbi5tYWluV3JhcHApO1xyXG4gICAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbn1cclxuXHJcbnN3aXRjaFBhZ2UocmVuZGVyTWVudVBhZ2UoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9